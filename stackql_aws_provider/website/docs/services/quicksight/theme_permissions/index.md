--- 
title: theme_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - theme_permissions
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

Creates, updates, deletes, gets or lists a <code>theme_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="theme_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.theme_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_theme_permissions"
    values={[
        { label: 'describe_theme_permissions', value: 'describe_theme_permissions' }
    ]}
>
<TabItem value="describe_theme_permissions">

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
    <td><CopyableCode code="Permissions" /></td>
    <td><code>array</code></td>
    <td>A list of resource permissions set on the theme.</td>
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
<tr>
    <td><CopyableCode code="ThemeArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the theme.</td>
</tr>
<tr>
    <td><CopyableCode code="ThemeId" /></td>
    <td><code>string</code></td>
    <td>The ID for the theme. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_theme_permissions"><CopyableCode code="describe_theme_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-theme_id"><code>theme_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the read and write permissions for a theme.</td>
</tr>
<tr>
    <td><a href="#update_theme_permissions"><CopyableCode code="update_theme_permissions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-theme_id"><code>theme_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the resource permissions for a theme. Permissions apply to the action to grant or revoke permissions on, for example "quicksight:DescribeTheme". Theme permissions apply in groupings. Valid groupings include the following for the three levels of permissions, which are user, owner, or no permissions: User "quicksight:DescribeTheme" "quicksight:DescribeThemeAlias" "quicksight:ListThemeAliases" "quicksight:ListThemeVersions" Owner "quicksight:DescribeTheme" "quicksight:DescribeThemeAlias" "quicksight:ListThemeAliases" "quicksight:ListThemeVersions" "quicksight:DeleteTheme" "quicksight:UpdateTheme" "quicksight:CreateThemeAlias" "quicksight:DeleteThemeAlias" "quicksight:UpdateThemeAlias" "quicksight:UpdateThemePermissions" "quicksight:DescribeThemePermissions" To specify no permissions, omit the permissions list.</td>
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
    <td>The ID of the Amazon Web Services account that contains the theme.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-theme_id">
    <td><CopyableCode code="theme_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the theme.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_theme_permissions"
    values={[
        { label: 'describe_theme_permissions', value: 'describe_theme_permissions' }
    ]}
>
<TabItem value="describe_theme_permissions">

Describes the read and write permissions for a theme.

```sql
SELECT
Permissions,
RequestId,
Status,
ThemeArn,
ThemeId
FROM aws.quicksight.theme_permissions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND theme_id = '{{ theme_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_theme_permissions"
    values={[
        { label: 'update_theme_permissions', value: 'update_theme_permissions' }
    ]}
>
<TabItem value="update_theme_permissions">

Updates the resource permissions for a theme. Permissions apply to the action to grant or revoke permissions on, for example "quicksight:DescribeTheme". Theme permissions apply in groupings. Valid groupings include the following for the three levels of permissions, which are user, owner, or no permissions: User "quicksight:DescribeTheme" "quicksight:DescribeThemeAlias" "quicksight:ListThemeAliases" "quicksight:ListThemeVersions" Owner "quicksight:DescribeTheme" "quicksight:DescribeThemeAlias" "quicksight:ListThemeAliases" "quicksight:ListThemeVersions" "quicksight:DeleteTheme" "quicksight:UpdateTheme" "quicksight:CreateThemeAlias" "quicksight:DeleteThemeAlias" "quicksight:UpdateThemeAlias" "quicksight:UpdateThemePermissions" "quicksight:DescribeThemePermissions" To specify no permissions, omit the permissions list.

```sql
UPDATE aws.quicksight.theme_permissions
SET 
GrantPermissions = '{{ GrantPermissions }}',
RevokePermissions = '{{ RevokePermissions }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND theme_id = '{{ theme_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Permissions,
RequestId,
Status,
ThemeArn,
ThemeId;
```
</TabItem>
</Tabs>
