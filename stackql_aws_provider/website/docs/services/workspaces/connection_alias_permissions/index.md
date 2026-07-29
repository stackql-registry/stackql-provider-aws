--- 
title: connection_alias_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_alias_permissions
  - workspaces
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

Creates, updates, deletes, gets or lists a <code>connection_alias_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connection_alias_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.connection_alias_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_connection_alias_permissions"
    values={[
        { label: 'describe_connection_alias_permissions', value: 'describe_connection_alias_permissions' }
    ]}
>
<TabItem value="describe_connection_alias_permissions">

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
    <td><CopyableCode code="alias_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the connection alias. (pattern: &lt;code&gt;^wsca-&#91;0-9a-z&#93;&#123;8,63&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_alias_permissions" /></td>
    <td><code>array</code></td>
    <td>The permissions associated with a connection alias.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</td>
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
    <td><a href="#describe_connection_alias_permissions"><CopyableCode code="describe_connection_alias_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the permissions that the owner of a connection alias has granted to another Amazon Web Services account for the specified connection alias. For more information, see Cross-Region Redirection for Amazon WorkSpaces.</td>
</tr>
<tr>
    <td><a href="#update_connection_alias_permission"><CopyableCode code="update_connection_alias_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AliasId"><code>AliasId</code></a>, <a href="#parameter-ConnectionAliasPermission"><code>ConnectionAliasPermission</code></a></td>
    <td></td>
    <td>Shares or unshares a connection alias with one account by specifying whether that account has permission to associate the connection alias with a directory. If the association permission is granted, the connection alias is shared with that account. If the association permission is revoked, the connection alias is unshared with the account. For more information, see Cross-Region Redirection for Amazon WorkSpaces. Before performing this operation, call DescribeConnectionAliases to make sure that the current state of the connection alias is CREATED. To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</td>
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
    defaultValue="describe_connection_alias_permissions"
    values={[
        { label: 'describe_connection_alias_permissions', value: 'describe_connection_alias_permissions' }
    ]}
>
<TabItem value="describe_connection_alias_permissions">

Describes the permissions that the owner of a connection alias has granted to another Amazon Web Services account for the specified connection alias. For more information, see Cross-Region Redirection for Amazon WorkSpaces.

```sql
SELECT
alias_id,
connection_alias_permissions,
next_token
FROM aws.workspaces.connection_alias_permissions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connection_alias_permission"
    values={[
        { label: 'update_connection_alias_permission', value: 'update_connection_alias_permission' }
    ]}
>
<TabItem value="update_connection_alias_permission">

Shares or unshares a connection alias with one account by specifying whether that account has permission to associate the connection alias with a directory. If the association permission is granted, the connection alias is shared with that account. If the association permission is revoked, the connection alias is unshared with the account. For more information, see Cross-Region Redirection for Amazon WorkSpaces. Before performing this operation, call DescribeConnectionAliases to make sure that the current state of the connection alias is CREATED. To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.

```sql
UPDATE aws.workspaces.connection_alias_permissions
SET 
AliasId = '{{ AliasId }}',
ConnectionAliasPermission = '{{ ConnectionAliasPermission }}'
WHERE 
region = '{{ region }}' --required
AND AliasId = '{{ AliasId }}' --required
AND ConnectionAliasPermission = '{{ ConnectionAliasPermission }}' --required;
```
</TabItem>
</Tabs>
