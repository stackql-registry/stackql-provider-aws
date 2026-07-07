--- 
title: resource_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_permissions
  - workdocs
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

Creates, updates, deletes, gets or lists a <code>resource_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workdocs.resource_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_resource_permissions"
    values={[
        { label: 'describe_resource_permissions', value: 'describe_resource_permissions' }
    ]}
>
<TabItem value="describe_resource_permissions">

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
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource. (pattern: &lt;code&gt;&#91;&\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Roles" /></td>
    <td><code>array</code></td>
    <td>The permission information for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of resource. (USER, GROUP, INVITE, ANONYMOUS, ORGANIZATION)</td>
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
    <td><a href="#describe_resource_permissions"><CopyableCode code="describe_resource_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-principalId"><code>principalId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-marker"><code>marker</code></a></td>
    <td>Describes the permissions of a specified resource.</td>
</tr>
<tr>
    <td><a href="#add_resource_permissions"><CopyableCode code="add_resource_permissions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Principals"><code>Principals</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Creates a set of permissions for the specified folder or document. The resource permissions are overwritten if the principals already have different permissions.</td>
</tr>
<tr>
    <td><a href="#remove_resource_permission"><CopyableCode code="remove_resource_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-principal_id"><code>principal_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Removes the permission for the specified principal from the specified resource.</td>
</tr>
<tr>
    <td><a href="#remove_all_resource_permissions"><CopyableCode code="remove_all_resource_permissions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Removes all the permissions from the specified resource.</td>
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
<tr id="parameter-principal_id">
    <td><CopyableCode code="principal_id" /></td>
    <td><code>string</code></td>
    <td>The principal ID of the resource.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
</tr>
<tr id="parameter-Authentication">
    <td><CopyableCode code="Authentication" /></td>
    <td><code>string</code></td>
    <td>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return with this call.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. (You received this marker from a previous call)</td>
</tr>
<tr id="parameter-principalId">
    <td><CopyableCode code="principalId" /></td>
    <td><code>string</code></td>
    <td>The ID of the principal to filter permissions by.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The principal type of the resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_resource_permissions"
    values={[
        { label: 'describe_resource_permissions', value: 'describe_resource_permissions' }
    ]}
>
<TabItem value="describe_resource_permissions">

Describes the permissions of a specified resource.

```sql
SELECT
Id,
Roles,
Type
FROM aws.workdocs.resource_permissions
WHERE resource_id = '{{ resource_id }}' -- required
AND region = '{{ region }}' -- required
AND Authentication = '{{ Authentication }}'
AND principalId = '{{ principalId }}'
AND limit = '{{ limit }}'
AND marker = '{{ marker }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_resource_permissions"
    values={[
        { label: 'add_resource_permissions', value: 'add_resource_permissions' },
        { label: 'remove_resource_permission', value: 'remove_resource_permission' },
        { label: 'remove_all_resource_permissions', value: 'remove_all_resource_permissions' }
    ]}
>
<TabItem value="add_resource_permissions">

Creates a set of permissions for the specified folder or document. The resource permissions are overwritten if the principals already have different permissions.

```sql
UPDATE aws.workdocs.resource_permissions
SET 
Principals = '{{ Principals }}',
NotificationOptions = '{{ NotificationOptions }}'
WHERE 
resource_id = '{{ resource_id }}' --required
AND region = '{{ region }}' --required
AND Principals = '{{ Principals }}' --required
AND Authentication = '{{ Authentication}}'
RETURNING
ShareResults;
```
</TabItem>
<TabItem value="remove_resource_permission">

Removes the permission for the specified principal from the specified resource.

```sql
UPDATE aws.workdocs.resource_permissions
SET 
-- No updatable properties
WHERE 
resource_id = '{{ resource_id }}' --required
AND principal_id = '{{ principal_id }}' --required
AND region = '{{ region }}' --required
AND Authentication = '{{ Authentication}}'
AND type = '{{ type}}';
```
</TabItem>
<TabItem value="remove_all_resource_permissions">

Removes all the permissions from the specified resource.

```sql
UPDATE aws.workdocs.resource_permissions
SET 
-- No updatable properties
WHERE 
resource_id = '{{ resource_id }}' --required
AND region = '{{ region }}' --required
AND Authentication = '{{ Authentication}}';
```
</TabItem>
</Tabs>
