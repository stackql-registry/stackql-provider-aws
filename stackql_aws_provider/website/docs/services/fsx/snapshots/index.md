--- 
title: snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots
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

Creates, updates, deletes, gets or lists a <code>snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fsx.snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_snapshots"
    values={[
        { label: 'describe_snapshots', value: 'describe_snapshots' }
    ]}
>
<TabItem value="describe_snapshots">

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
    <td><CopyableCode code="administrative_actions" /></td>
    <td><code>array</code></td>
    <td>A list of administrative actions for the file system that are in process or waiting to be processed. Administrative actions describe changes to the Amazon FSx system.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle" /></td>
    <td><code>string</code></td>
    <td>The lifecycle status of the snapshot. PENDING - Amazon FSx hasn't started creating the snapshot. CREATING - Amazon FSx is creating the snapshot. DELETING - Amazon FSx is deleting the snapshot. AVAILABLE - The snapshot is fully available. (PENDING, CREATING, DELETING, AVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_transition_reason" /></td>
    <td><code>object</code></td>
    <td>Describes why a resource lifecycle state changed.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the snapshot. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_:.-&#93;&#123;1,203&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. (pattern: &lt;code&gt;^arn:(?=&#91;^:&#93;+:fsx:&#91;^:&#93;+:\d&#123;12&#125;:)((|(?=&#91;a-z0-9-.&#93;&#123;1,63&#125;)(?!\d&#123;1,3&#125;(\.\d&#123;1,3&#125;)&#123;3&#125;)(?!&#91;^:&#93;*-&#123;2&#125;)(?!&#91;^:&#93;*-\.)(?!&#91;^:&#93;*\.-)&#91;a-z0-9&#93;.*(?&lt;!-)):)&#123;4&#125;(?!/).&#123;0,1024&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the snapshot. (pattern: &lt;code&gt;^((fs)?volsnap-&#91;0-9a-f&#93;&#123;8,&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of Tag values, with a maximum of 50 elements.</td>
</tr>
<tr>
    <td><CopyableCode code="volume_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the volume that the snapshot is of. (pattern: &lt;code&gt;^(fsvol-&#91;0-9a-f&#93;&#123;17,&#125;)$&lt;/code&gt;)</td>
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
    <td><a href="#describe_snapshots"><CopyableCode code="describe_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the description of specific Amazon FSx for OpenZFS snapshots, if a SnapshotIds value is provided. Otherwise, this operation returns all snapshots owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all snapshots, you can optionally specify the MaxResults parameter to limit the number of snapshots in a response. If more backups remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. Use this operation in an iterative process to retrieve a list of your snapshots. DescribeSnapshots is called first without a NextToken value. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken value. When using this operation, keep the following in mind: The operation might return fewer than the MaxResults value of snapshot descriptions while still including a NextToken value. The order of snapshots returned in the response of one DescribeSnapshots call and the order of backups returned across the responses of a multi-call iteration is unspecified.</td>
</tr>
<tr>
    <td><a href="#create_snapshot"><CopyableCode code="create_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VolumeId"><code>VolumeId</code></a></td>
    <td></td>
    <td>Creates a snapshot of an existing Amazon FSx for OpenZFS volume. With snapshots, you can easily undo file changes and compare file versions by restoring the volume to a previous version. If a snapshot with the specified client request token exists, and the parameters match, this operation returns the description of the existing snapshot. If a snapshot with the specified client request token exists, and the parameters don't match, this operation returns IncompatibleParameterError. If a snapshot with the specified client request token doesn't exist, CreateSnapshot does the following: Creates a new OpenZFS snapshot with an assigned ID, and an initial lifecycle state of CREATING. Returns the description of the snapshot. By using the idempotent operation, you can retry a CreateSnapshot operation without the risk of creating an extra snapshot. This approach can be useful when an initial call fails in a way that makes it unclear whether a snapshot was created. If you use the same client request token and the initial call created a snapshot, the operation returns a successful result because all the parameters are the same. The CreateSnapshot operation returns while the snapshot's lifecycle state is still CREATING. You can check the snapshot creation status by calling the DescribeSnapshots operation, which returns the snapshot state along with other information.</td>
</tr>
<tr>
    <td><a href="#update_snapshot"><CopyableCode code="update_snapshot" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SnapshotId"><code>SnapshotId</code></a></td>
    <td></td>
    <td>Updates the name of an Amazon FSx for OpenZFS snapshot.</td>
</tr>
<tr>
    <td><a href="#delete_snapshot"><CopyableCode code="delete_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon FSx for OpenZFS snapshot. After deletion, the snapshot no longer exists, and its data is gone. Deleting a snapshot doesn't affect snapshots stored in a file system backup. The DeleteSnapshot operation returns instantly. The snapshot appears with the lifecycle status of DELETING until the deletion is complete.</td>
</tr>
<tr>
    <td><a href="#copy_snapshot_and_update_volume"><CopyableCode code="copy_snapshot_and_update_volume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VolumeId"><code>VolumeId</code></a>, <a href="#parameter-SourceSnapshotARN"><code>SourceSnapshotARN</code></a></td>
    <td></td>
    <td>Updates an existing volume by using a snapshot from another Amazon FSx for OpenZFS file system. For more information, see on-demand data replication in the Amazon FSx for OpenZFS User Guide.</td>
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
    defaultValue="describe_snapshots"
    values={[
        { label: 'describe_snapshots', value: 'describe_snapshots' }
    ]}
>
<TabItem value="describe_snapshots">

Returns the description of specific Amazon FSx for OpenZFS snapshots, if a SnapshotIds value is provided. Otherwise, this operation returns all snapshots owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all snapshots, you can optionally specify the MaxResults parameter to limit the number of snapshots in a response. If more backups remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. Use this operation in an iterative process to retrieve a list of your snapshots. DescribeSnapshots is called first without a NextToken value. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken value. When using this operation, keep the following in mind: The operation might return fewer than the MaxResults value of snapshot descriptions while still including a NextToken value. The order of snapshots returned in the response of one DescribeSnapshots call and the order of backups returned across the responses of a multi-call iteration is unspecified.

```sql
SELECT
administrative_actions,
creation_time,
lifecycle,
lifecycle_transition_reason,
name,
resource_arn,
snapshot_id,
tags,
volume_id
FROM aws.fsx.snapshots
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_snapshot"
    values={[
        { label: 'create_snapshot', value: 'create_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_snapshot">

Creates a snapshot of an existing Amazon FSx for OpenZFS volume. With snapshots, you can easily undo file changes and compare file versions by restoring the volume to a previous version. If a snapshot with the specified client request token exists, and the parameters match, this operation returns the description of the existing snapshot. If a snapshot with the specified client request token exists, and the parameters don't match, this operation returns IncompatibleParameterError. If a snapshot with the specified client request token doesn't exist, CreateSnapshot does the following: Creates a new OpenZFS snapshot with an assigned ID, and an initial lifecycle state of CREATING. Returns the description of the snapshot. By using the idempotent operation, you can retry a CreateSnapshot operation without the risk of creating an extra snapshot. This approach can be useful when an initial call fails in a way that makes it unclear whether a snapshot was created. If you use the same client request token and the initial call created a snapshot, the operation returns a successful result because all the parameters are the same. The CreateSnapshot operation returns while the snapshot's lifecycle state is still CREATING. You can check the snapshot creation status by calling the DescribeSnapshots operation, which returns the snapshot state along with other information.

```sql
INSERT INTO aws.fsx.snapshots (
ClientRequestToken,
Name,
VolumeId,
Tags,
region
)
SELECT 
'{{ ClientRequestToken }}',
'{{ Name }}',
'{{ VolumeId }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
snapshot
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: snapshots
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the snapshots resource.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the snapshot.
    - name: VolumeId
      value: "{{ VolumeId }}"
      description: |
        The ID of the volume that you are taking a snapshot of.
    - name: Tags
      description: |
        A list of Tag values, with a maximum of 50 elements.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_snapshot"
    values={[
        { label: 'update_snapshot', value: 'update_snapshot' }
    ]}
>
<TabItem value="update_snapshot">

Updates the name of an Amazon FSx for OpenZFS snapshot.

```sql
UPDATE aws.fsx.snapshots
SET 
ClientRequestToken = '{{ ClientRequestToken }}',
Name = '{{ Name }}',
SnapshotId = '{{ SnapshotId }}'
WHERE 
region = '{{ region }}' --required
AND SnapshotId = '{{ SnapshotId }}' --required
RETURNING
snapshot;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_snapshot"
    values={[
        { label: 'delete_snapshot', value: 'delete_snapshot' }
    ]}
>
<TabItem value="delete_snapshot">

Deletes an Amazon FSx for OpenZFS snapshot. After deletion, the snapshot no longer exists, and its data is gone. Deleting a snapshot doesn't affect snapshots stored in a file system backup. The DeleteSnapshot operation returns instantly. The snapshot appears with the lifecycle status of DELETING until the deletion is complete.

```sql
DELETE FROM aws.fsx.snapshots
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copy_snapshot_and_update_volume"
    values={[
        { label: 'copy_snapshot_and_update_volume', value: 'copy_snapshot_and_update_volume' }
    ]}
>
<TabItem value="copy_snapshot_and_update_volume">

Updates an existing volume by using a snapshot from another Amazon FSx for OpenZFS file system. For more information, see on-demand data replication in the Amazon FSx for OpenZFS User Guide.

```sql
EXEC aws.fsx.snapshots.copy_snapshot_and_update_volume 
@region='{{ region }}' --required 
@@json=
'{
"ClientRequestToken": "{{ ClientRequestToken }}", 
"VolumeId": "{{ VolumeId }}", 
"SourceSnapshotARN": "{{ SourceSnapshotARN }}", 
"CopyStrategy": "{{ CopyStrategy }}", 
"Options": "{{ Options }}"
}'
;
```
</TabItem>
</Tabs>
