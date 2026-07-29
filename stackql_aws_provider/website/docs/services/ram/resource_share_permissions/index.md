--- 
title: resource_share_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_share_permissions
  - ram
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

Creates, updates, deletes, gets or lists a <code>resource_share_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_share_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ram.resource_share_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_share_permissions"
    values={[
        { label: 'list_resource_share_permissions', value: 'list_resource_share_permissions' }
    ]}
>
<TabItem value="list_resource_share_permissions">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe the permissions associated with the resource share.</td>
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
    <td><a href="#list_resource_share_permissions"><CopyableCode code="list_resource_share_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the RAM permissions that are associated with a resource share. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.</td>
</tr>
<tr>
    <td><a href="#associate_resource_share_permission"><CopyableCode code="associate_resource_share_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceShareArn"><code>resourceShareArn</code></a>, <a href="#parameter-permissionArn"><code>permissionArn</code></a></td>
    <td></td>
    <td>Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.</td>
</tr>
<tr>
    <td><a href="#disassociate_resource_share_permission"><CopyableCode code="disassociate_resource_share_permission" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceShareArn"><code>resourceShareArn</code></a>, <a href="#parameter-permissionArn"><code>permissionArn</code></a></td>
    <td></td>
    <td>Removes a managed permission from a resource share. Permission changes take effect immediately. You can remove a managed permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.</td>
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
    defaultValue="list_resource_share_permissions"
    values={[
        { label: 'list_resource_share_permissions', value: 'list_resource_share_permissions' }
    ]}
>
<TabItem value="list_resource_share_permissions">

Lists the RAM permissions that are associated with a resource share. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.

```sql
SELECT
next_token,
permissions
FROM aws.ram.resource_share_permissions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_resource_share_permission"
    values={[
        { label: 'associate_resource_share_permission', value: 'associate_resource_share_permission' }
    ]}
>
<TabItem value="associate_resource_share_permission">

Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.

```sql
UPDATE aws.ram.resource_share_permissions
SET 
resourceShareArn = '{{ resourceShareArn }}',
permissionArn = '{{ permissionArn }}',
replace = {{ replace }},
clientToken = '{{ clientToken }}',
permissionVersion = {{ permissionVersion }}
WHERE 
region = '{{ region }}' --required
AND resourceShareArn = '{{ resourceShareArn }}' --required
AND permissionArn = '{{ permissionArn }}' --required
RETURNING
client_token,
return_value;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_resource_share_permission"
    values={[
        { label: 'disassociate_resource_share_permission', value: 'disassociate_resource_share_permission' }
    ]}
>
<TabItem value="disassociate_resource_share_permission">

Removes a managed permission from a resource share. Permission changes take effect immediately. You can remove a managed permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.

```sql
EXEC aws.ram.resource_share_permissions.disassociate_resource_share_permission 
@region='{{ region }}' --required 
@@json=
'{
"resourceShareArn": "{{ resourceShareArn }}", 
"permissionArn": "{{ permissionArn }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
