--- 
title: app_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - app_permissions
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

Creates, updates, deletes, gets or lists an <code>app_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.app_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app_permissions"
    values={[
        { label: 'describe_app_permissions', value: 'describe_app_permissions' }
    ]}
>
<TabItem value="describe_app_permissions">

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
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the app. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the app.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>The resource permissions for the app.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
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
    <td><a href="#describe_app_permissions"><CopyableCode code="describe_app_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the resource permissions for an app.</td>
</tr>
<tr>
    <td><a href="#update_app_permissions"><CopyableCode code="update_app_permissions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the resource permissions for an app. You can grant or revoke permissions and, optionally, change the app's visibility.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the app.</td>
</tr>
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the app.</td>
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
    defaultValue="describe_app_permissions"
    values={[
        { label: 'describe_app_permissions', value: 'describe_app_permissions' }
    ]}
>
<TabItem value="describe_app_permissions">

Describes the resource permissions for an app.

```sql
SELECT
app_id,
arn,
permissions,
request_id
FROM aws.quicksight.app_permissions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND app_id = '{{ app_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_app_permissions"
    values={[
        { label: 'update_app_permissions', value: 'update_app_permissions' }
    ]}
>
<TabItem value="update_app_permissions">

Updates the resource permissions for an app. You can grant or revoke permissions and, optionally, change the app's visibility.

```sql
UPDATE aws.quicksight.app_permissions
SET 
GrantPermissions = '{{ GrantPermissions }}',
RevokePermissions = '{{ RevokePermissions }}',
Visibility = '{{ Visibility }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND app_id = '{{ app_id }}' --required
AND region = '{{ region }}' --required
RETURNING
app_id,
arn,
permissions,
request_id,
visibility;
```
</TabItem>
</Tabs>
