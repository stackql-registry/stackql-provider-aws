--- 
title: account_custom_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - account_custom_permissions
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

Creates, updates, deletes, gets or lists an <code>account_custom_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_custom_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.account_custom_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account_custom_permission"
    values={[
        { label: 'describe_account_custom_permission', value: 'describe_account_custom_permission' }
    ]}
>
<TabItem value="describe_account_custom_permission">

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
    <td>The name of the custom permissions profile. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9+=,.@_-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_account_custom_permission"><CopyableCode code="describe_account_custom_permission" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the custom permissions profile that is applied to an account.</td>
</tr>
<tr>
    <td><a href="#update_account_custom_permission"><CopyableCode code="update_account_custom_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CustomPermissionsName"><code>CustomPermissionsName</code></a></td>
    <td></td>
    <td>Applies a custom permissions profile to an account.</td>
</tr>
<tr>
    <td><a href="#delete_account_custom_permission"><CopyableCode code="delete_account_custom_permission" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Unapplies a custom permissions profile from an account.</td>
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
    <td>The ID of the Amazon Web Services account from which you want to unapply the custom permissions profile.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_account_custom_permission"
    values={[
        { label: 'describe_account_custom_permission', value: 'describe_account_custom_permission' }
    ]}
>
<TabItem value="describe_account_custom_permission">

Describes the custom permissions profile that is applied to an account.

```sql
SELECT
CustomPermissionsName,
RequestId,
Status
FROM aws.quicksight.account_custom_permissions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_account_custom_permission"
    values={[
        { label: 'update_account_custom_permission', value: 'update_account_custom_permission' }
    ]}
>
<TabItem value="update_account_custom_permission">

Applies a custom permissions profile to an account.

```sql
UPDATE aws.quicksight.account_custom_permissions
SET 
CustomPermissionsName = '{{ CustomPermissionsName }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
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
    defaultValue="delete_account_custom_permission"
    values={[
        { label: 'delete_account_custom_permission', value: 'delete_account_custom_permission' }
    ]}
>
<TabItem value="delete_account_custom_permission">

Unapplies a custom permissions profile from an account.

```sql
DELETE FROM aws.quicksight.account_custom_permissions
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
