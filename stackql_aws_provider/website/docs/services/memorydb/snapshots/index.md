--- 
title: snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots
  - memorydb
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.memorydb.snapshots" /></td></tr>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration of the cluster from which the snapshot was taken</td>
</tr>
<tr>
    <td><CopyableCode code="data_tiering" /></td>
    <td><code>string</code></td>
    <td>Enables data tiering. Data tiering is only supported for clusters using the r6gd node type. This parameter must be set when using r6gd nodes. For more information, see Data tiering. (true, false)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the KMS key used to encrypt the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the snapshot</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the snapshot is from an automatic backup (automated) or was created manually (manual).</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the snapshot. Valid values: creating | available | restoring | copying | deleting.</td>
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
    <td>Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cluster.</td>
</tr>
<tr>
    <td><a href="#create_snapshot"><CopyableCode code="create_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a>, <a href="#parameter-SnapshotName"><code>SnapshotName</code></a></td>
    <td></td>
    <td>Creates a copy of an entire cluster at a specific moment in time.</td>
</tr>
<tr>
    <td><a href="#delete_snapshot"><CopyableCode code="delete_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.</td>
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

Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cluster.

```sql
SELECT
arn,
cluster_configuration,
data_tiering,
kms_key_id,
name,
source,
status
FROM aws.memorydb.snapshots
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

Creates a copy of an entire cluster at a specific moment in time.

```sql
INSERT INTO aws.memorydb.snapshots (
ClusterName,
SnapshotName,
KmsKeyId,
Tags,
region
)
SELECT 
'{{ ClusterName }}' /* required */,
'{{ SnapshotName }}' /* required */,
'{{ KmsKeyId }}',
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
    - name: ClusterName
      value: "{{ ClusterName }}"
      description: |
        The snapshot is created from this cluster.
    - name: SnapshotName
      value: "{{ SnapshotName }}"
      description: |
        A name for the snapshot being created.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        The ID of the KMS key used to encrypt the snapshot.
    - name: Tags
      description: |
        A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

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

Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.

```sql
DELETE FROM aws.memorydb.snapshots
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
