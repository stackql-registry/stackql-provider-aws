--- 
title: effective_permissions_for_paths
hide_title: false
hide_table_of_contents: false
keywords:
  - effective_permissions_for_paths
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

Creates, updates, deletes, gets or lists an <code>effective_permissions_for_paths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="effective_permissions_for_paths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.effective_permissions_for_paths" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_effective_permissions_for_path"
    values={[
        { label: 'get_effective_permissions_for_path', value: 'get_effective_permissions_for_path' }
    ]}
>
<TabItem value="get_effective_permissions_for_path">

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
    <td><CopyableCode code="Permissions" /></td>
    <td><code>array</code></td>
    <td>A list of the permissions for the specified table or database resource located at the path in Amazon S3.</td>
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
    <td><a href="#get_effective_permissions_for_path"><CopyableCode code="get_effective_permissions_for_path" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. GetEffectivePermissionsForPath will not return databases and tables if the catalog is encrypted.</td>
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
    defaultValue="get_effective_permissions_for_path"
    values={[
        { label: 'get_effective_permissions_for_path', value: 'get_effective_permissions_for_path' }
    ]}
>
<TabItem value="get_effective_permissions_for_path">

Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. GetEffectivePermissionsForPath will not return databases and tables if the catalog is encrypted.

```sql
SELECT
NextToken,
Permissions
FROM aws.lakeformation.effective_permissions_for_paths
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
