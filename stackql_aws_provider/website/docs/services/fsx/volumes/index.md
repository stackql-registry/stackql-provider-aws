--- 
title: volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes
  - fsx
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fsx.volumes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_volumes"
    values={[
        { label: 'describe_volumes', value: 'describe_volumes' }
    ]}
>
<TabItem value="describe_volumes">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="AdministrativeActions" /></td>
    <td><code>array</code></td>
    <td>A list of administrative actions for the volume that are in process or waiting to be processed. Administrative actions describe changes to the volume that you have initiated using the UpdateVolume action.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.</td>
</tr>
<tr>
    <td><CopyableCode code="FileSystemId" /></td>
    <td><code>string</code></td>
    <td>The globally unique ID of the file system, assigned by Amazon FSx. (pattern: &lt;code&gt;^(fs-&#91;0-9a-f&#93;&#123;8,&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Lifecycle" /></td>
    <td><code>string</code></td>
    <td>The lifecycle status of the volume. AVAILABLE - The volume is fully available for use. CREATED - The volume has been created. CREATING - Amazon FSx is creating the new volume. DELETING - Amazon FSx is deleting an existing volume. FAILED - Amazon FSx was unable to create the volume. MISCONFIGURED - The volume is in a failed but recoverable state. PENDING - Amazon FSx hasn't started creating the volume. (CREATING, CREATED, DELETING, FAILED, MISCONFIGURED, PENDING, AVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="LifecycleTransitionReason" /></td>
    <td><code>object</code></td>
    <td>The reason why the volume lifecycle status changed.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the volume. (pattern: &lt;code&gt;^&#91;^\u0000\u0085\u2028\u2029\r\n&#93;&#123;1,203&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OntapConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration of an Amazon FSx for NetApp ONTAP volume.</td>
</tr>
<tr>
    <td><CopyableCode code="OpenZFSConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration of an Amazon FSx for OpenZFS volume.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. (pattern: &lt;code&gt;^arn:(?=&#91;^:&#93;+:fsx:&#91;^:&#93;+:\d&#123;12&#125;:)((|(?=&#91;a-z0-9-.&#93;&#123;1,63&#125;)(?!\d&#123;1,3&#125;(\.\d&#123;1,3&#125;)&#123;3&#125;)(?!&#91;^:&#93;*-&#123;2&#125;)(?!&#91;^:&#93;*-\.)(?!&#91;^:&#93;*\.-)&#91;a-z0-9&#93;.*(?&lt;!-)):)&#123;4&#125;(?!/).&#123;0,1024&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of Tag values, with a maximum of 50 elements.</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeId" /></td>
    <td><code>string</code></td>
    <td>The system-generated, unique ID of the volume. (pattern: &lt;code&gt;^(fsvol-&#91;0-9a-f&#93;&#123;17,&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeType" /></td>
    <td><code>string</code></td>
    <td>The type of the volume. (ONTAP, OPENZFS)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

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
    <td><a href="#describe_volumes"><CopyableCode code="describe_volumes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes.</td>
</tr>
<tr>
    <td><a href="#create_volume"><CopyableCode code="create_volume" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VolumeType"><code>VolumeType</code></a></td>
    <td></td>
    <td>Creates an FSx for ONTAP or Amazon FSx for OpenZFS storage volume.</td>
</tr>
<tr>
    <td><a href="#update_volume"><CopyableCode code="update_volume" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VolumeId"><code>VolumeId</code></a></td>
    <td></td>
    <td>Updates the configuration of an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.</td>
</tr>
<tr>
    <td><a href="#delete_volume"><CopyableCode code="delete_volume" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.</td>
</tr>
<tr>
    <td><a href="#restore_volume_from_snapshot"><CopyableCode code="restore_volume_from_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VolumeId"><code>VolumeId</code></a>, <a href="#parameter-SnapshotId"><code>SnapshotId</code></a></td>
    <td></td>
    <td>Returns an Amazon FSx for OpenZFS volume to the state saved by the specified snapshot.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="describe_volumes"
    values={[
        { label: 'describe_volumes', value: 'describe_volumes' }
    ]}
>
<TabItem value="describe_volumes">

Describes one or more Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes.

```sql
SELECT
AdministrativeActions,
CreationTime,
FileSystemId,
Lifecycle,
LifecycleTransitionReason,
Name,
OntapConfiguration,
OpenZFSConfiguration,
ResourceARN,
Tags,
VolumeId,
VolumeType
FROM aws.fsx.volumes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_volume"
    values={[
        { label: 'create_volume', value: 'create_volume' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_volume">

Creates an FSx for ONTAP or Amazon FSx for OpenZFS storage volume.

```sql
INSERT INTO aws.fsx.volumes (
ClientRequestToken,
VolumeType,
Name,
OntapConfiguration,
Tags,
OpenZFSConfiguration,
region
)
SELECT 
'{{ ClientRequestToken }}',
'{{ VolumeType }}' /* required */,
'{{ Name }}',
'{{ OntapConfiguration }}',
'{{ Tags }}',
'{{ OpenZFSConfiguration }}',
'{{ region }}'
RETURNING
Volume
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
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
    - name: VolumeType
      value: "{{ VolumeType }}"
      description: |
        Specifies the type of volume to create; ONTAP and OPENZFS are the only valid volume types.
      valid_values: ['ONTAP', 'OPENZFS']
    - name: Name
      value: "{{ Name }}"
      description: |
        Specifies the name of the volume that you're creating.
    - name: OntapConfiguration
      description: |
        Specifies the configuration to use when creating the ONTAP volume.
      value:
        JunctionPath: "{{ JunctionPath }}"
        SecurityStyle: "{{ SecurityStyle }}"
        SizeInMegabytes: {{ SizeInMegabytes }}
        StorageEfficiencyEnabled: {{ StorageEfficiencyEnabled }}
        StorageVirtualMachineId: "{{ StorageVirtualMachineId }}"
        TieringPolicy:
          CoolingPeriod: {{ CoolingPeriod }}
          Name: "{{ Name }}"
        OntapVolumeType: "{{ OntapVolumeType }}"
        SnapshotPolicy: "{{ SnapshotPolicy }}"
        CopyTagsToBackups: {{ CopyTagsToBackups }}
        SnaplockConfiguration:
          AuditLogVolume: {{ AuditLogVolume }}
          AutocommitPeriod:
            Type: "{{ Type }}"
            Value: {{ Value }}
          PrivilegedDelete: "{{ PrivilegedDelete }}"
          RetentionPeriod:
            DefaultRetention:
              Type: "{{ Type }}"
              Value: {{ Value }}
            MinimumRetention:
              Type: "{{ Type }}"
              Value: {{ Value }}
            MaximumRetention:
              Type: "{{ Type }}"
              Value: {{ Value }}
          SnaplockType: "{{ SnaplockType }}"
          VolumeAppendModeEnabled: {{ VolumeAppendModeEnabled }}
        VolumeStyle: "{{ VolumeStyle }}"
        AggregateConfiguration:
          Aggregates:
            - "{{ Aggregates }}"
          ConstituentsPerAggregate: {{ ConstituentsPerAggregate }}
        SizeInBytes: {{ SizeInBytes }}
    - name: Tags
      description: |
        A list of Tag values, with a maximum of 50 elements.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: OpenZFSConfiguration
      description: |
        Specifies the configuration to use when creating the OpenZFS volume.
      value:
        ParentVolumeId: "{{ ParentVolumeId }}"
        StorageCapacityReservationGiB: {{ StorageCapacityReservationGiB }}
        StorageCapacityQuotaGiB: {{ StorageCapacityQuotaGiB }}
        RecordSizeKiB: {{ RecordSizeKiB }}
        DataCompressionType: "{{ DataCompressionType }}"
        CopyTagsToSnapshots: {{ CopyTagsToSnapshots }}
        OriginSnapshot:
          SnapshotARN: "{{ SnapshotARN }}"
          CopyStrategy: "{{ CopyStrategy }}"
        ReadOnly: {{ ReadOnly }}
        NfsExports:
          - ClientConfigurations: "{{ ClientConfigurations }}"
        UserAndGroupQuotas:
          - Type: "{{ Type }}"
            Id: {{ Id }}
            StorageCapacityQuotaGiB: {{ StorageCapacityQuotaGiB }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_volume"
    values={[
        { label: 'update_volume', value: 'update_volume' }
    ]}
>
<TabItem value="update_volume">

Updates the configuration of an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.

```sql
UPDATE aws.fsx.volumes
SET 
ClientRequestToken = '{{ ClientRequestToken }}',
VolumeId = '{{ VolumeId }}',
OntapConfiguration = '{{ OntapConfiguration }}',
Name = '{{ Name }}',
OpenZFSConfiguration = '{{ OpenZFSConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND VolumeId = '{{ VolumeId }}' --required
RETURNING
Volume;
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

Deletes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.

```sql
DELETE FROM aws.fsx.volumes
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restore_volume_from_snapshot"
    values={[
        { label: 'restore_volume_from_snapshot', value: 'restore_volume_from_snapshot' }
    ]}
>
<TabItem value="restore_volume_from_snapshot">

Returns an Amazon FSx for OpenZFS volume to the state saved by the specified snapshot.

```sql
EXEC aws.fsx.volumes.restore_volume_from_snapshot 
@region='{{ region }}' --required 
@@json=
'{
"ClientRequestToken": "{{ ClientRequestToken }}", 
"VolumeId": "{{ VolumeId }}", 
"SnapshotId": "{{ SnapshotId }}", 
"Options": "{{ Options }}"
}'
;
```
</TabItem>
</Tabs>
