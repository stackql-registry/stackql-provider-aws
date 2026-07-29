--- 
title: action_connector_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - action_connector_permissions
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

Creates, updates, deletes, gets or lists an <code>action_connector_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="action_connector_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.action_connector_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_action_connector_permissions"
    values={[
        { label: 'describe_action_connector_permissions', value: 'describe_action_connector_permissions' }
    ]}
>
<TabItem value="describe_action_connector_permissions">

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
    <td><CopyableCode code="action_connector_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the action connector. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the action connector.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>The list of permissions associated with the action connector, including the principals and their allowed actions.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status code of the request.</td>
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
    <td><a href="#describe_action_connector_permissions"><CopyableCode code="describe_action_connector_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-action_connector_id"><code>action_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the permissions configuration for an action connector, showing which users, groups, and namespaces have access and what operations they can perform.</td>
</tr>
<tr>
    <td><a href="#update_action_connector_permissions"><CopyableCode code="update_action_connector_permissions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-action_connector_id"><code>action_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the permissions for an action connector by granting or revoking access for specific users and groups. You can control who can view, use, or manage the action connector.</td>
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
<tr id="parameter-action_connector_id">
    <td><CopyableCode code="action_connector_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the action connector whose permissions you want to update.</td>
</tr>
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that contains the action connector.</td>
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
    defaultValue="describe_action_connector_permissions"
    values={[
        { label: 'describe_action_connector_permissions', value: 'describe_action_connector_permissions' }
    ]}
>
<TabItem value="describe_action_connector_permissions">

Retrieves the permissions configuration for an action connector, showing which users, groups, and namespaces have access and what operations they can perform.

```sql
SELECT
action_connector_id,
arn,
permissions,
request_id,
status
FROM aws.quicksight.action_connector_permissions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND action_connector_id = '{{ action_connector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_action_connector_permissions"
    values={[
        { label: 'update_action_connector_permissions', value: 'update_action_connector_permissions' }
    ]}
>
<TabItem value="update_action_connector_permissions">

Updates the permissions for an action connector by granting or revoking access for specific users and groups. You can control who can view, use, or manage the action connector.

```sql
UPDATE aws.quicksight.action_connector_permissions
SET 
GrantPermissions = '{{ GrantPermissions }}',
RevokePermissions = '{{ RevokePermissions }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND action_connector_id = '{{ action_connector_id }}' --required
AND region = '{{ region }}' --required
RETURNING
action_connector_id,
arn,
permissions,
request_id,
status;
```
</TabItem>
</Tabs>
