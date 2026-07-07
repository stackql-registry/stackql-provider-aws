--- 
title: image_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - image_permissions
  - appstream
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

Creates, updates, deletes, gets or lists an <code>image_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.image_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_image_permissions"
    values={[
        { label: 'describe_image_permissions', value: 'describe_image_permissions' }
    ]}
>
<TabItem value="describe_image_permissions">

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
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the private image. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_.-&#93;&#123;0,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</td>
</tr>
<tr>
    <td><CopyableCode code="SharedImagePermissionsList" /></td>
    <td><code>array</code></td>
    <td>The permissions for a private image that you own.</td>
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
    <td><a href="#describe_image_permissions"><CopyableCode code="describe_image_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own.</td>
</tr>
<tr>
    <td><a href="#update_image_permissions"><CopyableCode code="update_image_permissions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SharedAccountId"><code>SharedAccountId</code></a>, <a href="#parameter-ImagePermissions"><code>ImagePermissions</code></a></td>
    <td></td>
    <td>Adds or updates permissions for the specified private image.</td>
</tr>
<tr>
    <td><a href="#delete_image_permissions"><CopyableCode code="delete_image_permissions" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.</td>
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
    defaultValue="describe_image_permissions"
    values={[
        { label: 'describe_image_permissions', value: 'describe_image_permissions' }
    ]}
>
<TabItem value="describe_image_permissions">

Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own.

```sql
SELECT
Name,
NextToken,
SharedImagePermissionsList
FROM aws.appstream.image_permissions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_image_permissions"
    values={[
        { label: 'update_image_permissions', value: 'update_image_permissions' }
    ]}
>
<TabItem value="update_image_permissions">

Adds or updates permissions for the specified private image.

```sql
UPDATE aws.appstream.image_permissions
SET 
Name = '{{ Name }}',
SharedAccountId = '{{ SharedAccountId }}',
ImagePermissions = '{{ ImagePermissions }}'
WHERE 
region = '{{ region }}' --required
AND SharedAccountId = '{{ SharedAccountId }}' --required
AND ImagePermissions = '{{ ImagePermissions }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_image_permissions"
    values={[
        { label: 'delete_image_permissions', value: 'delete_image_permissions' }
    ]}
>
<TabItem value="delete_image_permissions">

Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.

```sql
DELETE FROM aws.appstream.image_permissions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
