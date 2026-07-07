--- 
title: access_point_scopes
hide_title: false
hide_table_of_contents: false
keywords:
  - access_point_scopes
  - s3control
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

Creates, updates, deletes, gets or lists an <code>access_point_scopes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_point_scopes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.access_point_scopes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_access_point_scope"
    values={[
        { label: 'get_access_point_scope', value: 'get_access_point_scope' }
    ]}
>
<TabItem value="get_access_point_scope">

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
    <td><code>string</code></td>
    <td>You can include one or more API operations as permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="Prefixes" /></td>
    <td><code>string</code></td>
    <td>You can specify any amount of prefixes, but the total length of characters of all prefixes must be less than 256 bytes in size.</td>
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
    <td><a href="#get_access_point_scope"><CopyableCode code="get_access_point_scope" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the access point scope for a directory bucket. To use this operation, you must have the permission to perform the s3express:GetAccessPointScope action. For information about REST API errors, see REST error responses.</td>
</tr>
<tr>
    <td><a href="#put_access_point_scope"><CopyableCode code="put_access_point_scope" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Scope"><code>Scope</code></a></td>
    <td></td>
    <td>Creates or replaces the access point scope for a directory bucket. You can use the access point scope to restrict access to specific prefixes, API operations, or a combination of both. You can specify any amount of prefixes, but the total length of characters of all prefixes must be less than 256 bytes in size. To use this operation, you must have the permission to perform the s3express:PutAccessPointScope action. For information about REST API errors, see REST error responses.</td>
</tr>
<tr>
    <td><a href="#delete_access_point_scope"><CopyableCode code="delete_access_point_scope" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing access point scope for a directory bucket. When you delete the scope of an access point, all prefixes and permissions are deleted. To use this operation, you must have the permission to perform the s3express:DeleteAccessPointScope action. For information about REST API errors, see REST error responses.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the access point with the scope that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the access point with the scope that you want to delete.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_access_point_scope"
    values={[
        { label: 'get_access_point_scope', value: 'get_access_point_scope' }
    ]}
>
<TabItem value="get_access_point_scope">

Returns the access point scope for a directory bucket. To use this operation, you must have the permission to perform the s3express:GetAccessPointScope action. For information about REST API errors, see REST error responses.

```sql
SELECT
Permissions,
Prefixes
FROM aws.s3control.access_point_scopes
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_access_point_scope"
    values={[
        { label: 'put_access_point_scope', value: 'put_access_point_scope' }
    ]}
>
<TabItem value="put_access_point_scope">

Creates or replaces the access point scope for a directory bucket. You can use the access point scope to restrict access to specific prefixes, API operations, or a combination of both. You can specify any amount of prefixes, but the total length of characters of all prefixes must be less than 256 bytes in size. To use this operation, you must have the permission to perform the s3express:PutAccessPointScope action. For information about REST API errors, see REST error responses.

```sql
REPLACE aws.s3control.access_point_scopes
SET 
Scope = '{{ Scope }}'
WHERE 
`x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND Scope = '{{ Scope }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_point_scope"
    values={[
        { label: 'delete_access_point_scope', value: 'delete_access_point_scope' }
    ]}
>
<TabItem value="delete_access_point_scope">

Deletes an existing access point scope for a directory bucket. When you delete the scope of an access point, all prefixes and permissions are deleted. To use this operation, you must have the permission to perform the s3express:DeleteAccessPointScope action. For information about REST API errors, see REST error responses.

```sql
DELETE FROM aws.s3control.access_point_scopes
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
