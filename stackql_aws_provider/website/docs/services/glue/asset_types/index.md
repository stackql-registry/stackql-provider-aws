--- 
title: asset_types
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_types
  - glue
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

Creates, updates, deletes, gets or lists an <code>asset_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.asset_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_asset_type"
    values={[
        { label: 'get_asset_type', value: 'get_asset_type' },
        { label: 'list_asset_types', value: 'list_asset_types' }
    ]}
>
<TabItem value="get_asset_type">

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
    <td><CopyableCode code="forms" /></td>
    <td><code>object</code></td>
    <td>The forms that make up the asset type, keyed by form name.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the asset type.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the asset type. (pattern: &lt;code&gt;^(?!&#91;0-9_&#93;)\w+$|^_\w*&#91;a-zA-Z0-9&#93;\w*$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_asset_types">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the asset type.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the asset type. (pattern: &lt;code&gt;^(?!&#91;0-9_&#93;)\w+$|^_\w*&#91;a-zA-Z0-9&#93;\w*$&lt;/code&gt;)</td>
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
    <td><a href="#get_asset_type"><CopyableCode code="get_asset_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an asset type in Glue Data Catalog by its identifier.</td>
</tr>
<tr>
    <td><a href="#list_asset_types"><CopyableCode code="list_asset_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the asset types defined in Glue Data Catalog.</td>
</tr>
<tr>
    <td><a href="#put_asset_type"><CopyableCode code="put_asset_type" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates or updates an asset type in Glue Data Catalog. An asset type defines the structure of assets by specifying which forms they include. If an asset type with the given name already exists, it is updated.</td>
</tr>
<tr>
    <td><a href="#delete_asset_type"><CopyableCode code="delete_asset_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an asset type from Glue Data Catalog.</td>
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
    defaultValue="get_asset_type"
    values={[
        { label: 'get_asset_type', value: 'get_asset_type' },
        { label: 'list_asset_types', value: 'list_asset_types' }
    ]}
>
<TabItem value="get_asset_type">

Retrieves an asset type in Glue Data Catalog by its identifier.

```sql
SELECT
forms,
id,
name
FROM aws.glue.asset_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_asset_types">

Lists the asset types defined in Glue Data Catalog.

```sql
SELECT
id,
name
FROM aws.glue.asset_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_asset_type"
    values={[
        { label: 'put_asset_type', value: 'put_asset_type' }
    ]}
>
<TabItem value="put_asset_type">

Creates or updates an asset type in Glue Data Catalog. An asset type defines the structure of assets by specifying which forms they include. If an asset type with the given name already exists, it is updated.

```sql
REPLACE aws.glue.asset_types
SET 
Name = '{{ Name }}',
Forms = '{{ Forms }}',
ClientToken = '{{ ClientToken }}'
WHERE 
region = '{{ region }}' --required
RETURNING
forms,
id,
name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_asset_type"
    values={[
        { label: 'delete_asset_type', value: 'delete_asset_type' }
    ]}
>
<TabItem value="delete_asset_type">

Deletes an asset type from Glue Data Catalog.

```sql
DELETE FROM aws.glue.asset_types
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
