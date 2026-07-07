--- 
title: permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions
  - lakeformation
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

Creates, updates, deletes, gets or lists a <code>permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_permissions"
    values={[
        { label: 'list_permissions', value: 'list_permissions' }
    ]}
>
<TabItem value="list_permissions">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A continuation token, if this is not the first call to retrieve this list.</td>
</tr>
<tr>
    <td><CopyableCode code="PrincipalResourcePermissions" /></td>
    <td><code>array</code></td>
    <td>A list of principals and their permissions on the resource for the specified principal and resource types.</td>
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
    <td><a href="#list_permissions"><CopyableCode code="list_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER. This operation returns only those permissions that have been explicitly granted. If both Principal and Resource parameters are provided, the response returns effective permissions rather than the explicitly granted permissions. For information about permissions, see Security and Access Control to Metadata and Data.</td>
</tr>
<tr>
    <td><a href="#revoke_permissions"><CopyableCode code="revoke_permissions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Principal"><code>Principal</code></a>, <a href="#parameter-Resource"><code>Resource</code></a>, <a href="#parameter-Permissions"><code>Permissions</code></a></td>
    <td></td>
    <td>Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</td>
</tr>
<tr>
    <td><a href="#batch_grant_permissions"><CopyableCode code="batch_grant_permissions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Entries"><code>Entries</code></a></td>
    <td></td>
    <td>Batch operation to grant permissions to the principal.</td>
</tr>
<tr>
    <td><a href="#batch_revoke_permissions"><CopyableCode code="batch_revoke_permissions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Entries"><code>Entries</code></a></td>
    <td></td>
    <td>Batch operation to revoke permissions from the principal.</td>
</tr>
<tr>
    <td><a href="#grant_permissions"><CopyableCode code="grant_permissions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Principal"><code>Principal</code></a>, <a href="#parameter-Resource"><code>Resource</code></a>, <a href="#parameter-Permissions"><code>Permissions</code></a></td>
    <td></td>
    <td>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. For information about permissions, see Security and Access Control to Metadata and Data.</td>
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
    defaultValue="list_permissions"
    values={[
        { label: 'list_permissions', value: 'list_permissions' }
    ]}
>
<TabItem value="list_permissions">

Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER. This operation returns only those permissions that have been explicitly granted. If both Principal and Resource parameters are provided, the response returns effective permissions rather than the explicitly granted permissions. For information about permissions, see Security and Access Control to Metadata and Data.

```sql
SELECT
NextToken,
PrincipalResourcePermissions
FROM aws.lakeformation.permissions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="revoke_permissions"
    values={[
        { label: 'revoke_permissions', value: 'revoke_permissions' }
    ]}
>
<TabItem value="revoke_permissions">

Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.

```sql
UPDATE aws.lakeformation.permissions
SET 
CatalogId = '{{ CatalogId }}',
Principal = '{{ Principal }}',
Resource = '{{ Resource }}',
Permissions = '{{ Permissions }}',
Condition = '{{ Condition }}',
PermissionsWithGrantOption = '{{ PermissionsWithGrantOption }}'
WHERE 
region = '{{ region }}' --required
AND Principal = '{{ Principal }}' --required
AND Resource = '{{ Resource }}' --required
AND Permissions = '{{ Permissions }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_grant_permissions"
    values={[
        { label: 'batch_grant_permissions', value: 'batch_grant_permissions' },
        { label: 'batch_revoke_permissions', value: 'batch_revoke_permissions' },
        { label: 'grant_permissions', value: 'grant_permissions' }
    ]}
>
<TabItem value="batch_grant_permissions">

Batch operation to grant permissions to the principal.

```sql
EXEC aws.lakeformation.permissions.batch_grant_permissions 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}", 
"Entries": "{{ Entries }}"
}'
;
```
</TabItem>
<TabItem value="batch_revoke_permissions">

Batch operation to revoke permissions from the principal.

```sql
EXEC aws.lakeformation.permissions.batch_revoke_permissions 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}", 
"Entries": "{{ Entries }}"
}'
;
```
</TabItem>
<TabItem value="grant_permissions">

Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. For information about permissions, see Security and Access Control to Metadata and Data.

```sql
EXEC aws.lakeformation.permissions.grant_permissions 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}", 
"Principal": "{{ Principal }}", 
"Resource": "{{ Resource }}", 
"Permissions": "{{ Permissions }}", 
"Condition": "{{ Condition }}", 
"PermissionsWithGrantOption": "{{ PermissionsWithGrantOption }}"
}'
;
```
</TabItem>
</Tabs>
