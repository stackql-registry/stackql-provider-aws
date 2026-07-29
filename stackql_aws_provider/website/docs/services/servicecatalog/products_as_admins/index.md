--- 
title: products_as_admins
hide_title: false
hide_table_of_contents: false
keywords:
  - products_as_admins
  - servicecatalog
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

Creates, updates, deletes, gets or lists a <code>products_as_admins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="products_as_admins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.products_as_admins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_products_as_admin"
    values={[
        { label: 'search_products_as_admin', value: 'search_products_as_admin' }
    ]}
>
<TabItem value="search_products_as_admin">

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
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UTC time stamp of the creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="product_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the product.</td>
</tr>
<tr>
    <td><CopyableCode code="product_view_summary" /></td>
    <td><code>object</code></td>
    <td>Summary information about the product view.</td>
</tr>
<tr>
    <td><CopyableCode code="source_connection" /></td>
    <td><code>object</code></td>
    <td>A top level ProductViewDetail response containing details about the product’s connection. Service Catalog returns this field for the CreateProduct, UpdateProduct, DescribeProductAsAdmin, and SearchProductAsAdmin APIs. This response contains the same fields as the ConnectionParameters request, with the addition of the LastSync response.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the product. AVAILABLE - The product is ready for use. CREATING - Product creation has started; the product is not ready for use. FAILED - An action failed. (AVAILABLE, CREATING, FAILED)</td>
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
    <td><a href="#search_products_as_admin"><CopyableCode code="search_products_as_admin" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the products for the specified portfolio or all products.</td>
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
    defaultValue="search_products_as_admin"
    values={[
        { label: 'search_products_as_admin', value: 'search_products_as_admin' }
    ]}
>
<TabItem value="search_products_as_admin">

Gets information about the products for the specified portfolio or all products.

```sql
SELECT
created_time,
product_arn,
product_view_summary,
source_connection,
status
FROM aws.servicecatalog.products_as_admins
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
