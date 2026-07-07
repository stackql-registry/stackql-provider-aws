--- 
title: db_cluster_snapshot_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - db_cluster_snapshot_attributes
  - neptune
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

Creates, updates, deletes, gets or lists a <code>db_cluster_snapshot_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_cluster_snapshot_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune.db_cluster_snapshot_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_cluster_snapshot_attributes"
    values={[
        { label: 'describe_db_cluster_snapshot_attributes', value: 'describe_db_cluster_snapshot_attributes' }
    ]}
>
<TabItem value="describe_db_cluster_snapshot_attributes">

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
    <td><CopyableCode code="DBClusterSnapshotAttributes" /></td>
    <td><code>string</code></td>
    <td>The list of attributes and values for the manual DB cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="DBClusterSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the manual DB cluster snapshot that the attributes apply to.</td>
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
    <td><a href="#describe_db_cluster_snapshot_attributes"><CopyableCode code="describe_db_cluster_snapshot_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DBClusterSnapshotIdentifier"><code>DBClusterSnapshotIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot. When sharing snapshots with other Amazon accounts, DescribeDBClusterSnapshotAttributes returns the restore attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If all is included in the list of values for the restore attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts. To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the ModifyDBClusterSnapshotAttribute API action.</td>
</tr>
<tr>
    <td><a href="#modify_db_cluster_snapshot_attribute"><CopyableCode code="modify_db_cluster_snapshot_attribute" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBClusterSnapshotIdentifier"><code>DBClusterSnapshotIdentifier</code></a>, <a href="#parameter-AttributeName"><code>AttributeName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ValuesToAdd"><code>ValuesToAdd</code></a>, <a href="#parameter-ValuesToRemove"><code>ValuesToRemove</code></a></td>
    <td>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot. To share a manual DB cluster snapshot with other Amazon accounts, specify restore as the AttributeName and use the ValuesToAdd parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value all to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the all value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the ValuesToAdd parameter. You can't use all as a value for that parameter in this case. To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the DescribeDBClusterSnapshotAttributes API action.</td>
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
<tr id="parameter-AttributeName">
    <td><CopyableCode code="AttributeName" /></td>
    <td><code>string</code></td>
    <td>The name of the DB cluster snapshot attribute to modify. To manage authorization for other Amazon accounts to copy or restore a manual DB cluster snapshot, set this value to restore.</td>
</tr>
<tr id="parameter-DBClusterSnapshotIdentifier">
    <td><CopyableCode code="DBClusterSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the DB cluster snapshot to modify the attributes for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ValuesToAdd">
    <td><CopyableCode code="ValuesToAdd" /></td>
    <td><code>array</code></td>
    <td>A list of DB cluster snapshot attributes to add to the attribute specified by AttributeName. To authorize other Amazon accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon account IDs, or all to make the manual DB cluster snapshot restorable by any Amazon account. Do not add the all value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts.</td>
</tr>
<tr id="parameter-ValuesToRemove">
    <td><CopyableCode code="ValuesToRemove" /></td>
    <td><code>array</code></td>
    <td>A list of DB cluster snapshot attributes to remove from the attribute specified by AttributeName. To remove authorization for other Amazon accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon account identifiers, or all to remove authorization for any Amazon account to copy or restore the DB cluster snapshot. If you specify all, an Amazon account whose account ID is explicitly added to the restore attribute can still copy or restore a manual DB cluster snapshot.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_cluster_snapshot_attributes"
    values={[
        { label: 'describe_db_cluster_snapshot_attributes', value: 'describe_db_cluster_snapshot_attributes' }
    ]}
>
<TabItem value="describe_db_cluster_snapshot_attributes">

Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot. When sharing snapshots with other Amazon accounts, DescribeDBClusterSnapshotAttributes returns the restore attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If all is included in the list of values for the restore attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts. To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the ModifyDBClusterSnapshotAttribute API action.

```sql
SELECT
DBClusterSnapshotAttributes,
DBClusterSnapshotIdentifier
FROM aws.neptune.db_cluster_snapshot_attributes
WHERE DBClusterSnapshotIdentifier = '{{ DBClusterSnapshotIdentifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_db_cluster_snapshot_attribute"
    values={[
        { label: 'modify_db_cluster_snapshot_attribute', value: 'modify_db_cluster_snapshot_attribute' }
    ]}
>
<TabItem value="modify_db_cluster_snapshot_attribute">

Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot. To share a manual DB cluster snapshot with other Amazon accounts, specify restore as the AttributeName and use the ValuesToAdd parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value all to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the all value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the ValuesToAdd parameter. You can't use all as a value for that parameter in this case. To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the DescribeDBClusterSnapshotAttributes API action.

```sql
UPDATE aws.neptune.db_cluster_snapshot_attributes
SET 
-- No updatable properties
WHERE 
DBClusterSnapshotIdentifier = '{{ DBClusterSnapshotIdentifier }}' --required
AND AttributeName = '{{ AttributeName }}' --required
AND region = '{{ region }}' --required
AND ValuesToAdd = '{{ ValuesToAdd}}'
AND ValuesToRemove = '{{ ValuesToRemove}}'
RETURNING
DBClusterSnapshotAttributes,
DBClusterSnapshotIdentifier;
```
</TabItem>
</Tabs>
