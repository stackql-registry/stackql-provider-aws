--- 
title: snapshot_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshot_attributes
  - ec2
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

Creates, updates, deletes, gets or lists a <code>snapshot_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshot_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.snapshot_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_snapshot_attribute"
    values={[
        { label: 'describe_snapshot_attribute', value: 'describe_snapshot_attribute' }
    ]}
>
<TabItem value="describe_snapshot_attribute">

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
    <td><CopyableCode code="ProductCodeId" /></td>
    <td><code>string</code></td>
    <td>The product code.</td>
</tr>
<tr>
    <td><CopyableCode code="ProductCodeType" /></td>
    <td><code>string</code></td>
    <td>The type of product code.</td>
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
    <td><a href="#describe_snapshot_attribute"><CopyableCode code="describe_snapshot_attribute" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-Attribute"><code>Attribute</code></a>, <a href="#parameter-SnapshotId"><code>SnapshotId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the specified attribute of the specified snapshot. You can specify only one attribute at a time. For more information about EBS snapshots, see Amazon EBS snapshots in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_snapshot_attribute"><CopyableCode code="modify_snapshot_attribute" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-SnapshotId"><code>SnapshotId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Attribute"><code>Attribute</code></a>, <a href="#parameter-CreateVolumePermission"><code>CreateVolumePermission</code></a>, <a href="#parameter-UserGroup"><code>UserGroup</code></a>, <a href="#parameter-OperationType"><code>OperationType</code></a>, <a href="#parameter-UserId"><code>UserId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Adds or removes permission settings for the specified snapshot. You may add or remove specified Amazon Web Services account IDs from a snapshot's list of create volume permissions, but you cannot do both in a single operation. If you need to both add and remove account IDs for a snapshot, you must use multiple operations. You can make up to 500 modifications to a snapshot in a single operation. Encrypted snapshots and snapshots with Amazon Web Services Marketplace product codes cannot be made public. Snapshots encrypted with your default KMS key cannot be shared with other accounts. For more information about modifying snapshot permissions, see Share a snapshot in the Amazon EBS User Guide.</td>
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
<tr id="parameter-Attribute">
    <td><CopyableCode code="Attribute" /></td>
    <td><code>string</code></td>
    <td>The snapshot attribute you would like to view.</td>
</tr>
<tr id="parameter-SnapshotId">
    <td><CopyableCode code="SnapshotId" /></td>
    <td><code>string</code></td>
    <td>The ID of the snapshot.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Attribute">
    <td><CopyableCode code="Attribute" /></td>
    <td><code>string</code></td>
    <td>The snapshot attribute to modify. Only volume creation permissions can be modified.</td>
</tr>
<tr id="parameter-CreateVolumePermission">
    <td><CopyableCode code="CreateVolumePermission" /></td>
    <td><code>object</code></td>
    <td>A JSON representation of the snapshot attribute modification.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-OperationType">
    <td><CopyableCode code="OperationType" /></td>
    <td><code>string</code></td>
    <td>The type of operation to perform to the attribute.</td>
</tr>
<tr id="parameter-UserGroup">
    <td><CopyableCode code="UserGroup" /></td>
    <td><code>array</code></td>
    <td>The group to modify for the snapshot.</td>
</tr>
<tr id="parameter-UserId">
    <td><CopyableCode code="UserId" /></td>
    <td><code>array</code></td>
    <td>The account ID to modify for the snapshot.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_snapshot_attribute"
    values={[
        { label: 'describe_snapshot_attribute', value: 'describe_snapshot_attribute' }
    ]}
>
<TabItem value="describe_snapshot_attribute">

Describes the specified attribute of the specified snapshot. You can specify only one attribute at a time. For more information about EBS snapshots, see Amazon EBS snapshots in the Amazon EBS User Guide.

```sql
SELECT
ProductCodeId,
ProductCodeType
FROM aws.ec2.snapshot_attributes
WHERE Attribute = '{{ Attribute }}' -- required
AND SnapshotId = '{{ SnapshotId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_snapshot_attribute"
    values={[
        { label: 'modify_snapshot_attribute', value: 'modify_snapshot_attribute' }
    ]}
>
<TabItem value="modify_snapshot_attribute">

Adds or removes permission settings for the specified snapshot. You may add or remove specified Amazon Web Services account IDs from a snapshot's list of create volume permissions, but you cannot do both in a single operation. If you need to both add and remove account IDs for a snapshot, you must use multiple operations. You can make up to 500 modifications to a snapshot in a single operation. Encrypted snapshots and snapshots with Amazon Web Services Marketplace product codes cannot be made public. Snapshots encrypted with your default KMS key cannot be shared with other accounts. For more information about modifying snapshot permissions, see Share a snapshot in the Amazon EBS User Guide.

```sql
UPDATE aws.ec2.snapshot_attributes
SET 
-- No updatable properties
WHERE 
SnapshotId = '{{ SnapshotId }}' --required
AND region = '{{ region }}' --required
AND Attribute = '{{ Attribute}}'
AND CreateVolumePermission = '{{ CreateVolumePermission}}'
AND UserGroup = '{{ UserGroup}}'
AND OperationType = '{{ OperationType}}'
AND UserId = '{{ UserId}}'
AND DryRun = {{ DryRun}};
```
</TabItem>
</Tabs>
