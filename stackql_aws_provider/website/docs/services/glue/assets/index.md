--- 
title: assets
hide_title: false
hide_table_of_contents: false
keywords:
  - assets
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

Creates, updates, deletes, gets or lists an <code>assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_asset"
    values={[
        { label: 'get_asset', value: 'get_asset' },
        { label: 'search_assets', value: 'search_assets' }
    ]}
>
<TabItem value="get_asset">

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
    <td><CopyableCode code="asset_type_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the asset type for this asset.</td>
</tr>
<tr>
    <td><CopyableCode code="attachments" /></td>
    <td><code>object</code></td>
    <td>Additional attachments on the asset for more context, keyed by attachment name.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the asset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="forms" /></td>
    <td><code>object</code></td>
    <td>The forms on the asset, keyed by form name.</td>
</tr>
<tr>
    <td><CopyableCode code="glossary_terms" /></td>
    <td><code>array</code></td>
    <td>The identifiers of the glossary terms associated with the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the asset. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-\:\/\.\_\*&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="iterable_forms" /></td>
    <td><code>object</code></td>
    <td>The iterable forms available on the asset, keyed by form name (for example, columns). Use the form name with ListIterableForms or BatchGetIterableForms to retrieve the form's items.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the asset was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_assets">

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
    <td><CopyableCode code="asset_description" /></td>
    <td><code>string</code></td>
    <td>The description of the matched asset.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_name" /></td>
    <td><code>string</code></td>
    <td>The name of the matched asset.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_type_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the asset type for the matched asset.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the matched asset. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-\:\/\.\_\*&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the matched asset was last updated.</td>
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
    <td><a href="#get_asset"><CopyableCode code="get_asset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the metadata for an asset in Glue Data Catalog, including its forms, additional attachments, and associated glossary terms.</td>
</tr>
<tr>
    <td><a href="#search_assets"><CopyableCode code="search_assets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for assets in Glue Data Catalog using full-text search, filters, sorting, and aggregations. Returns matching assets with relevance-ranked results.</td>
</tr>
<tr>
    <td><a href="#update_asset"><CopyableCode code="update_asset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a></td>
    <td></td>
    <td>Updates the name and description of an existing asset in Glue Data Catalog. Only the fields that you provide are updated.</td>
</tr>
<tr>
    <td><a href="#put_attachment"><CopyableCode code="put_attachment" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AssetIdentifier"><code>AssetIdentifier</code></a>, <a href="#parameter-AttachmentName"><code>AttachmentName</code></a>, <a href="#parameter-Content"><code>Content</code></a>, <a href="#parameter-FormTypeId"><code>FormTypeId</code></a></td>
    <td></td>
    <td>Attaches a form to an asset or an iterable form item in Glue Data Catalog. If an attachment with the same name already exists, it is overwritten.</td>
</tr>
<tr>
    <td><a href="#put_asset"><CopyableCode code="put_asset" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AssetTypeId"><code>AssetTypeId</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a></td>
    <td></td>
    <td>Creates or updates an asset in Glue Data Catalog. If the asset already exists, this operation updates it; otherwise, a new asset is created.</td>
</tr>
<tr>
    <td><a href="#delete_attachment"><CopyableCode code="delete_attachment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a form attachment from an asset in Glue Data Catalog.</td>
</tr>
<tr>
    <td><a href="#delete_asset"><CopyableCode code="delete_asset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an asset from Glue Data Catalog.</td>
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
    defaultValue="get_asset"
    values={[
        { label: 'get_asset', value: 'get_asset' },
        { label: 'search_assets', value: 'search_assets' }
    ]}
>
<TabItem value="get_asset">

Retrieves the metadata for an asset in Glue Data Catalog, including its forms, additional attachments, and associated glossary terms.

```sql
SELECT
asset_type_id,
attachments,
created_at,
description,
forms,
glossary_terms,
id,
iterable_forms,
name,
updated_at
FROM aws.glue.assets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_assets">

Searches for assets in Glue Data Catalog using full-text search, filters, sorting, and aggregations. Returns matching assets with relevance-ranked results.

```sql
SELECT
asset_description,
asset_name,
asset_type_id,
id,
updated_at
FROM aws.glue.assets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_asset"
    values={[
        { label: 'update_asset', value: 'update_asset' }
    ]}
>
<TabItem value="update_asset">

Updates the name and description of an existing asset in Glue Data Catalog. Only the fields that you provide are updated.

```sql
UPDATE aws.glue.assets
SET 
Identifier = '{{ Identifier }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
ClientToken = '{{ ClientToken }}'
WHERE 
region = '{{ region }}' --required
AND Identifier = '{{ Identifier }}' --required
RETURNING
description,
id,
name,
updated_at;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_attachment"
    values={[
        { label: 'put_attachment', value: 'put_attachment' },
        { label: 'put_asset', value: 'put_asset' }
    ]}
>
<TabItem value="put_attachment">

Attaches a form to an asset or an iterable form item in Glue Data Catalog. If an attachment with the same name already exists, it is overwritten.

```sql
REPLACE aws.glue.assets
SET 
AssetIdentifier = '{{ AssetIdentifier }}',
IterableFormName = '{{ IterableFormName }}',
ItemIdentifier = '{{ ItemIdentifier }}',
AttachmentName = '{{ AttachmentName }}',
Content = '{{ Content }}',
FormTypeId = '{{ FormTypeId }}',
ClientToken = '{{ ClientToken }}'
WHERE 
region = '{{ region }}' --required
AND AssetIdentifier = '{{ AssetIdentifier }}' --required
AND AttachmentName = '{{ AttachmentName }}' --required
AND Content = '{{ Content }}' --required
AND FormTypeId = '{{ FormTypeId }}' --required
RETURNING
asset_identifier,
attachment_name,
form_type_id,
item_identifier,
iterable_form_name;
```
</TabItem>
<TabItem value="put_asset">

Creates or updates an asset in Glue Data Catalog. If the asset already exists, this operation updates it; otherwise, a new asset is created.

```sql
REPLACE aws.glue.assets
SET 
AssetTypeId = '{{ AssetTypeId }}',
Identifier = '{{ Identifier }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
Forms = '{{ Forms }}',
ClientToken = '{{ ClientToken }}'
WHERE 
region = '{{ region }}' --required
AND AssetTypeId = '{{ AssetTypeId }}' --required
AND Identifier = '{{ Identifier }}' --required
RETURNING
created_at,
description,
forms,
id,
name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_attachment"
    values={[
        { label: 'delete_attachment', value: 'delete_attachment' },
        { label: 'delete_asset', value: 'delete_asset' }
    ]}
>
<TabItem value="delete_attachment">

Deletes a form attachment from an asset in Glue Data Catalog.

```sql
DELETE FROM aws.glue.assets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_asset">

Deletes an asset from Glue Data Catalog.

```sql
DELETE FROM aws.glue.assets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
