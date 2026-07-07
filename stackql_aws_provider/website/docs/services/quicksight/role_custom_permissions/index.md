--- 
title: role_custom_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - role_custom_permissions
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>role_custom_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="role_custom_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.role_custom_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_role_custom_permission"
    values={[
        { label: 'describe_role_custom_permission', value: 'describe_role_custom_permission' }
    ]}
>
<TabItem value="describe_role_custom_permission">

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
    <td><CopyableCode code="CustomPermissionsName" /></td>
    <td><code>string</code></td>
    <td>The name of the custom permission that is described. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9+=,.@_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
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
    <td><a href="#describe_role_custom_permission"><CopyableCode code="describe_role_custom_permission" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-role"><code>role</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes all custom permissions that are mapped to a role.</td>
</tr>
<tr>
    <td><a href="#update_role_custom_permission"><CopyableCode code="update_role_custom_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-role"><code>role</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CustomPermissionsName"><code>CustomPermissionsName</code></a></td>
    <td></td>
    <td>Updates the custom permissions that are associated with a role.</td>
</tr>
<tr>
    <td><a href="#delete_role_custom_permission"><CopyableCode code="delete_role_custom_permission" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-role"><code>role</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes custom permissions from the role.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace that includes the role.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-role">
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role that you want to remove permissions from.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_role_custom_permission"
    values={[
        { label: 'describe_role_custom_permission', value: 'describe_role_custom_permission' }
    ]}
>
<TabItem value="describe_role_custom_permission">

Describes all custom permissions that are mapped to a role.

```sql
SELECT
CustomPermissionsName,
RequestId,
Status
FROM aws.quicksight.role_custom_permissions
WHERE role = '{{ role }}' -- required
AND aws_account_id = '{{ aws_account_id }}' -- required
AND namespace = '{{ namespace }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_role_custom_permission"
    values={[
        { label: 'update_role_custom_permission', value: 'update_role_custom_permission' }
    ]}
>
<TabItem value="update_role_custom_permission">

Updates the custom permissions that are associated with a role.

```sql
UPDATE aws.quicksight.role_custom_permissions
SET 
CustomPermissionsName = '{{ CustomPermissionsName }}'
WHERE 
role = '{{ role }}' --required
AND aws_account_id = '{{ aws_account_id }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
AND CustomPermissionsName = '{{ CustomPermissionsName }}' --required
RETURNING
RequestId,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_role_custom_permission"
    values={[
        { label: 'delete_role_custom_permission', value: 'delete_role_custom_permission' }
    ]}
>
<TabItem value="delete_role_custom_permission">

Removes custom permissions from the role.

```sql
DELETE FROM aws.quicksight.role_custom_permissions
WHERE role = '{{ role }}' --required
AND aws_account_id = '{{ aws_account_id }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
