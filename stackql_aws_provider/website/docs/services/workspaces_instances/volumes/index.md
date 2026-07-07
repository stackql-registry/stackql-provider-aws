--- 
title: volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes
  - workspaces_instances
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>volumes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="volumes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_instances.volumes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#create_volume"><CopyableCode code="create_volume" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a></td>
    <td></td>
    <td>Creates a new volume for WorkSpace Instances.</td>
</tr>
<tr>
    <td><a href="#associate_volume"><CopyableCode code="associate_volume" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkspaceInstanceId"><code>WorkspaceInstanceId</code></a>, <a href="#parameter-VolumeId"><code>VolumeId</code></a>, <a href="#parameter-Device"><code>Device</code></a></td>
    <td></td>
    <td>Attaches a volume to a WorkSpace Instance.</td>
</tr>
<tr>
    <td><a href="#disassociate_volume"><CopyableCode code="disassociate_volume" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkspaceInstanceId"><code>WorkspaceInstanceId</code></a>, <a href="#parameter-VolumeId"><code>VolumeId</code></a></td>
    <td></td>
    <td>Detaches a volume from a WorkSpace Instance.</td>
</tr>
<tr>
    <td><a href="#delete_volume"><CopyableCode code="delete_volume" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified volume.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_volume"
    values={[
        { label: 'create_volume', value: 'create_volume' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_volume">

Creates a new volume for WorkSpace Instances.

```sql
INSERT INTO aws.workspaces_instances.volumes (
AvailabilityZone,
ClientToken,
Encrypted,
Iops,
KmsKeyId,
SizeInGB,
SnapshotId,
TagSpecifications,
Throughput,
VolumeType,
region
)
SELECT 
'{{ AvailabilityZone }}' /* required */,
'{{ ClientToken }}',
{{ Encrypted }},
{{ Iops }},
'{{ KmsKeyId }}',
{{ SizeInGB }},
'{{ SnapshotId }}',
'{{ TagSpecifications }}',
{{ Throughput }},
'{{ VolumeType }}',
'{{ region }}'
RETURNING
VolumeId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: volumes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the volumes resource.
    - name: AvailabilityZone
      value: "{{ AvailabilityZone }}"
      description: |
        Availability zone for the volume.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Unique token to prevent duplicate volume creation.
    - name: Encrypted
      value: {{ Encrypted }}
      description: |
        Indicates if the volume should be encrypted.
    - name: Iops
      value: {{ Iops }}
      description: |
        Input/output operations per second for the volume.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        KMS key for volume encryption.
    - name: SizeInGB
      value: {{ SizeInGB }}
      description: |
        Volume size in gigabytes.
    - name: SnapshotId
      value: "{{ SnapshotId }}"
      description: |
        Source snapshot for volume creation.
    - name: TagSpecifications
      description: |
        Metadata tags for the volume.
      value:
        - ResourceType: "{{ ResourceType }}"
          Tags: "{{ Tags }}"
    - name: Throughput
      value: {{ Throughput }}
      description: |
        Volume throughput performance.
    - name: VolumeType
      value: "{{ VolumeType }}"
      description: |
        Type of EBS volume.
      valid_values: ['standard', 'io1', 'io2', 'gp2', 'sc1', 'st1', 'gp3']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_volume"
    values={[
        { label: 'associate_volume', value: 'associate_volume' },
        { label: 'disassociate_volume', value: 'disassociate_volume' }
    ]}
>
<TabItem value="associate_volume">

Attaches a volume to a WorkSpace Instance.

```sql
UPDATE aws.workspaces_instances.volumes
SET 
WorkspaceInstanceId = '{{ WorkspaceInstanceId }}',
VolumeId = '{{ VolumeId }}',
Device = '{{ Device }}'
WHERE 
region = '{{ region }}' --required
AND WorkspaceInstanceId = '{{ WorkspaceInstanceId }}' --required
AND VolumeId = '{{ VolumeId }}' --required
AND Device = '{{ Device }}' --required;
```
</TabItem>
<TabItem value="disassociate_volume">

Detaches a volume from a WorkSpace Instance.

```sql
UPDATE aws.workspaces_instances.volumes
SET 
WorkspaceInstanceId = '{{ WorkspaceInstanceId }}',
VolumeId = '{{ VolumeId }}',
Device = '{{ Device }}',
DisassociateMode = '{{ DisassociateMode }}'
WHERE 
region = '{{ region }}' --required
AND WorkspaceInstanceId = '{{ WorkspaceInstanceId }}' --required
AND VolumeId = '{{ VolumeId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_volume"
    values={[
        { label: 'delete_volume', value: 'delete_volume' }
    ]}
>
<TabItem value="delete_volume">

Deletes a specified volume.

```sql
DELETE FROM aws.workspaces_instances.volumes
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
