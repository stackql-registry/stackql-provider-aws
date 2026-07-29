--- 
title: folder_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - folder_permissions
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

Creates, updates, deletes, gets or lists a <code>folder_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="folder_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.folder_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_folder_permissions"
    values={[
        { label: 'describe_folder_permissions', value: 'describe_folder_permissions' }
    ]}
>
<TabItem value="describe_folder_permissions">

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
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>The IAM action to grant or revoke permissions on.</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the principal. This can be one of the following: The ARN of an Quick Sight user or group associated with a data source or dataset. (This is common.) The ARN of an Quick Sight user, group, or namespace associated with an analysis, dashboard, template, or theme. Namespace sharing is not supported for action connectors. (This is common.) The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a Quick Sight ARN. Use this option only to share resources (templates) across Amazon Web Services accounts. Account root sharing is not supported for action connectors. (This is less common.)</td>
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
    <td><a href="#describe_folder_permissions"><CopyableCode code="describe_folder_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-folder_id"><code>folder_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Describes permissions for a folder.</td>
</tr>
<tr>
    <td><a href="#update_folder_permissions"><CopyableCode code="update_folder_permissions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-folder_id"><code>folder_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates permissions of a folder.</td>
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
    <td>The ID for the Amazon Web Services account that contains the folder to update.</td>
</tr>
<tr id="parameter-folder_id">
    <td><CopyableCode code="folder_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the folder.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the folder whose permissions you want described.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>A pagination token for the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_folder_permissions"
    values={[
        { label: 'describe_folder_permissions', value: 'describe_folder_permissions' }
    ]}
>
<TabItem value="describe_folder_permissions">

Describes permissions for a folder.

```sql
SELECT
actions,
principal
FROM aws.quicksight.folder_permissions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND folder_id = '{{ folder_id }}' -- required
AND region = '{{ region }}' -- required
AND namespace = '{{ namespace }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_folder_permissions"
    values={[
        { label: 'update_folder_permissions', value: 'update_folder_permissions' }
    ]}
>
<TabItem value="update_folder_permissions">

Updates permissions of a folder.

```sql
UPDATE aws.quicksight.folder_permissions
SET 
GrantPermissions = '{{ GrantPermissions }}',
RevokePermissions = '{{ RevokePermissions }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND folder_id = '{{ folder_id }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
folder_id,
permissions,
request_id,
status;
```
</TabItem>
</Tabs>
