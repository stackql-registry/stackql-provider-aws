--- 
title: portal_products
hide_title: false
hide_table_of_contents: false
keywords:
  - portal_products
  - apigatewayv2
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

Creates, updates, deletes, gets or lists a <code>portal_products</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="portal_products" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.portal_products" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_portal_product"
    values={[
        { label: 'get_portal_product', value: 'get_portal_product' },
        { label: 'list_portal_products', value: 'list_portal_products' }
    ]}
>
<TabItem value="get_portal_product">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of a portal product.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayOrder" /></td>
    <td><code>object</code></td>
    <td>The display order.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the portal product was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="PortalProductArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the portal product.</td>
</tr>
<tr>
    <td><CopyableCode code="PortalProductId" /></td>
    <td><code>string</code></td>
    <td>The portal product identifier. (pattern: &lt;code&gt;^&#91;a-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_portal_products">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of a portal product.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the portal product was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="PortalProductArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a portal product.</td>
</tr>
<tr>
    <td><CopyableCode code="PortalProductId" /></td>
    <td><code>string</code></td>
    <td>The portal product identifier. (pattern: &lt;code&gt;^&#91;a-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
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
    <td><a href="#get_portal_product"><CopyableCode code="get_portal_product" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-portal_product_id"><code>portal_product_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-resourceOwnerAccountId"><code>resourceOwnerAccountId</code></a></td>
    <td>Gets a portal product.</td>
</tr>
<tr>
    <td><a href="#list_portal_products"><CopyableCode code="list_portal_products" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-resourceOwner"><code>resourceOwner</code></a></td>
    <td>Lists portal products.</td>
</tr>
<tr>
    <td><a href="#create_portal_product"><CopyableCode code="create_portal_product" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DisplayName"><code>DisplayName</code></a></td>
    <td></td>
    <td>Creates a new portal product.</td>
</tr>
<tr>
    <td><a href="#update_portal_product"><CopyableCode code="update_portal_product" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_product_id"><code>portal_product_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the portal product.</td>
</tr>
<tr>
    <td><a href="#delete_portal_product"><CopyableCode code="delete_portal_product" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-portal_product_id"><code>portal_product_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a portal product.</td>
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
<tr id="parameter-portal_product_id">
    <td><CopyableCode code="portal_product_id" /></td>
    <td><code>string</code></td>
    <td>The portal product identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>string</code></td>
    <td>The maximum number of elements to be returned for this resource.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next page of elements from this collection. Not valid for the last element of the collection.</td>
</tr>
<tr id="parameter-resourceOwner">
    <td><CopyableCode code="resourceOwner" /></td>
    <td><code>string</code></td>
    <td>The resource owner of the portal product.</td>
</tr>
<tr id="parameter-resourceOwnerAccountId">
    <td><CopyableCode code="resourceOwnerAccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID of the resource owner of the portal product.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_portal_product"
    values={[
        { label: 'get_portal_product', value: 'get_portal_product' },
        { label: 'list_portal_products', value: 'list_portal_products' }
    ]}
>
<TabItem value="get_portal_product">

Gets a portal product.

```sql
SELECT
Description,
DisplayName,
DisplayOrder,
LastModified,
PortalProductArn,
PortalProductId,
Tags
FROM aws.apigatewayv2.portal_products
WHERE portal_product_id = '{{ portal_product_id }}' -- required
AND region = '{{ region }}' -- required
AND resourceOwnerAccountId = '{{ resourceOwnerAccountId }}'
;
```
</TabItem>
<TabItem value="list_portal_products">

Lists portal products.

```sql
SELECT
Description,
DisplayName,
LastModified,
PortalProductArn,
PortalProductId,
Tags
FROM aws.apigatewayv2.portal_products
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND resourceOwner = '{{ resourceOwner }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_portal_product"
    values={[
        { label: 'create_portal_product', value: 'create_portal_product' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_portal_product">

Creates a new portal product.

```sql
INSERT INTO aws.apigatewayv2.portal_products (
Description,
DisplayName,
Tags,
region
)
SELECT 
'{{ Description }}',
'{{ DisplayName }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
Description,
DisplayName,
DisplayOrder,
LastModified,
PortalProductArn,
PortalProductId,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: portal_products
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the portal_products resource.
    - name: Description
      value: "{{ Description }}"
    - name: DisplayName
      value: "{{ DisplayName }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Represents a collection of tags associated with the resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_portal_product"
    values={[
        { label: 'update_portal_product', value: 'update_portal_product' }
    ]}
>
<TabItem value="update_portal_product">

Updates the portal product.

```sql
UPDATE aws.apigatewayv2.portal_products
SET 
Description = '{{ Description }}',
DisplayName = '{{ DisplayName }}',
DisplayOrder = '{{ DisplayOrder }}'
WHERE 
portal_product_id = '{{ portal_product_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Description,
DisplayName,
DisplayOrder,
LastModified,
PortalProductArn,
PortalProductId,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_portal_product"
    values={[
        { label: 'delete_portal_product', value: 'delete_portal_product' }
    ]}
>
<TabItem value="delete_portal_product">

Deletes a portal product.

```sql
DELETE FROM aws.apigatewayv2.portal_products
WHERE portal_product_id = '{{ portal_product_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
