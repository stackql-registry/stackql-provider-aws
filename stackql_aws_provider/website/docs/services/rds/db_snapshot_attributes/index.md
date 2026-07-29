--- 
title: db_snapshot_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - db_snapshot_attributes
  - rds
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

Creates, updates, deletes, gets or lists a <code>db_snapshot_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_snapshot_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_snapshot_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_snapshot_attributes"
    values={[
        { label: 'describe_db_snapshot_attributes', value: 'describe_db_snapshot_attributes' }
    ]}
>
<TabItem value="describe_db_snapshot_attributes">

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
    <td><CopyableCode code="db_snapshot_attributes" /></td>
    <td><code>string</code></td>
    <td>The list of attributes and values for the manual DB snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="db_snapshot_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the manual DB snapshot that the attributes apply to.</td>
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
    <td><a href="#describe_db_snapshot_attributes"><CopyableCode code="describe_db_snapshot_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DBSnapshotIdentifier"><code>DBSnapshotIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of DB snapshot attribute names and values for a manual DB snapshot. When sharing snapshots with other Amazon Web Services accounts, DescribeDBSnapshotAttributes returns the restore attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If all is included in the list of values for the restore attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts. To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the ModifyDBSnapshotAttribute API action.</td>
</tr>
<tr>
    <td><a href="#modify_db_snapshot_attribute"><CopyableCode code="modify_db_snapshot_attribute" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBSnapshotIdentifier"><code>DBSnapshotIdentifier</code></a>, <a href="#parameter-AttributeName"><code>AttributeName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ValuesToAdd"><code>ValuesToAdd</code></a>, <a href="#parameter-ValuesToRemove"><code>ValuesToRemove</code></a></td>
    <td>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot. To share a manual DB snapshot with other Amazon Web Services accounts, specify restore as the AttributeName and use the ValuesToAdd parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value all to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts. Don't add the all value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the ValuesToAdd parameter. You can't use all as a value for that parameter in this case. To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the DescribeDBSnapshotAttributes API operation. The accounts are returned as values for the restore attribute.</td>
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
    <td>The name of the DB snapshot attribute to modify. To manage authorization for other Amazon Web Services accounts to copy or restore a manual DB snapshot, set this value to restore. To view the list of attributes available to modify, use the DescribeDBSnapshotAttributes API operation.</td>
</tr>
<tr id="parameter-DBSnapshotIdentifier">
    <td><CopyableCode code="DBSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the DB snapshot to modify the attributes for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ValuesToAdd">
    <td><CopyableCode code="ValuesToAdd" /></td>
    <td><code>array</code></td>
    <td>A list of DB snapshot attributes to add to the attribute specified by AttributeName. To authorize other Amazon Web Services accounts to copy or restore a manual snapshot, set this list to include one or more Amazon Web Services account IDs, or all to make the manual DB snapshot restorable by any Amazon Web Services account. Do not add the all value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</td>
</tr>
<tr id="parameter-ValuesToRemove">
    <td><CopyableCode code="ValuesToRemove" /></td>
    <td><code>array</code></td>
    <td>A list of DB snapshot attributes to remove from the attribute specified by AttributeName. To remove authorization for other Amazon Web Services accounts to copy or restore a manual snapshot, set this list to include one or more Amazon Web Services account identifiers, or all to remove authorization for any Amazon Web Services account to copy or restore the DB snapshot. If you specify all, an Amazon Web Services account whose account ID is explicitly added to the restore attribute can still copy or restore the manual DB snapshot.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_snapshot_attributes"
    values={[
        { label: 'describe_db_snapshot_attributes', value: 'describe_db_snapshot_attributes' }
    ]}
>
<TabItem value="describe_db_snapshot_attributes">

Returns a list of DB snapshot attribute names and values for a manual DB snapshot. When sharing snapshots with other Amazon Web Services accounts, DescribeDBSnapshotAttributes returns the restore attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If all is included in the list of values for the restore attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts. To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the ModifyDBSnapshotAttribute API action.

```sql
SELECT
db_snapshot_attributes,
db_snapshot_identifier
FROM aws.rds.db_snapshot_attributes
WHERE DBSnapshotIdentifier = '{{ DBSnapshotIdentifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_db_snapshot_attribute"
    values={[
        { label: 'modify_db_snapshot_attribute', value: 'modify_db_snapshot_attribute' }
    ]}
>
<TabItem value="modify_db_snapshot_attribute">

Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot. To share a manual DB snapshot with other Amazon Web Services accounts, specify restore as the AttributeName and use the ValuesToAdd parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value all to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts. Don't add the all value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the ValuesToAdd parameter. You can't use all as a value for that parameter in this case. To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the DescribeDBSnapshotAttributes API operation. The accounts are returned as values for the restore attribute.

```sql
UPDATE aws.rds.db_snapshot_attributes
SET 
-- No updatable properties
WHERE 
DBSnapshotIdentifier = '{{ DBSnapshotIdentifier }}' --required
AND AttributeName = '{{ AttributeName }}' --required
AND region = '{{ region }}' --required
AND ValuesToAdd = '{{ ValuesToAdd}}'
AND ValuesToRemove = '{{ ValuesToRemove}}'
RETURNING
db_snapshot_attributes,
db_snapshot_identifier;
```
</TabItem>
</Tabs>
