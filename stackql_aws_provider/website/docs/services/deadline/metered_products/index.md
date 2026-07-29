--- 
title: metered_products
hide_title: false
hide_table_of_contents: false
keywords:
  - metered_products
  - deadline
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

Creates, updates, deletes, gets or lists a <code>metered_products</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metered_products" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.metered_products" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_metered_products"
    values={[
        { label: 'list_metered_products', value: 'list_metered_products' }
    ]}
>
<TabItem value="list_metered_products">

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
    <td><CopyableCode code="family" /></td>
    <td><code>string</code></td>
    <td>The family to which the metered product belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port on which the metered product should run.</td>
</tr>
<tr>
    <td><CopyableCode code="product_id" /></td>
    <td><code>string</code></td>
    <td>The product ID. (pattern: &lt;code&gt;&#91;0-9a-z&#93;&#123;1,32&#125;-&#91;.0-9a-z&#93;&#123;1,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vendor" /></td>
    <td><code>string</code></td>
    <td>The vendor.</td>
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
    <td><a href="#list_metered_products"><CopyableCode code="list_metered_products" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-license_endpoint_id"><code>license_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists metered products.</td>
</tr>
<tr>
    <td><a href="#put_metered_product"><CopyableCode code="put_metered_product" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-license_endpoint_id"><code>license_endpoint_id</code></a>, <a href="#parameter-product_id"><code>product_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds a metered product.</td>
</tr>
<tr>
    <td><a href="#delete_metered_product"><CopyableCode code="delete_metered_product" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-license_endpoint_id"><code>license_endpoint_id</code></a>, <a href="#parameter-product_id"><code>product_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a metered product.</td>
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
<tr id="parameter-license_endpoint_id">
    <td><CopyableCode code="license_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the license endpoint from which to remove the metered product.</td>
</tr>
<tr id="parameter-product_id">
    <td><CopyableCode code="product_id" /></td>
    <td><code>string</code></td>
    <td>The product ID to remove from the license endpoint.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null to start from the beginning.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_metered_products"
    values={[
        { label: 'list_metered_products', value: 'list_metered_products' }
    ]}
>
<TabItem value="list_metered_products">

Lists metered products.

```sql
SELECT
family,
port,
product_id,
vendor
FROM aws.deadline.metered_products
WHERE license_endpoint_id = '{{ license_endpoint_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_metered_product"
    values={[
        { label: 'put_metered_product', value: 'put_metered_product' }
    ]}
>
<TabItem value="put_metered_product">

Adds a metered product.

```sql
REPLACE aws.deadline.metered_products
SET 
-- No updatable properties
WHERE 
license_endpoint_id = '{{ license_endpoint_id }}' --required
AND product_id = '{{ product_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_metered_product"
    values={[
        { label: 'delete_metered_product', value: 'delete_metered_product' }
    ]}
>
<TabItem value="delete_metered_product">

Deletes a metered product.

```sql
DELETE FROM aws.deadline.metered_products
WHERE license_endpoint_id = '{{ license_endpoint_id }}' --required
AND product_id = '{{ product_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
