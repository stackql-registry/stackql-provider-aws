--- 
title: products
hide_title: false
hide_table_of_contents: false
keywords:
  - products
  - marketplace_discovery
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

Creates, updates, deletes, gets or lists a <code>products</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="products" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_discovery.products" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_product"
    values={[
        { label: 'get_product', value: 'get_product' }
    ]}
>
<TabItem value="get_product">

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
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The name of the catalog that the product belongs to. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>The categories used to classify this product into logical groups.</td>
</tr>
<tr>
    <td><CopyableCode code="deployed_on_aws" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the product is deployed on AWS infrastructure. (DEPLOYED, NOT_DEPLOYED, NOT_APPLICABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="fulfillment_option_summaries" /></td>
    <td><code>array</code></td>
    <td>A summary of fulfillment options available for deploying or accessing the product, such as AMI, SaaS, or Container.</td>
</tr>
<tr>
    <td><CopyableCode code="highlights" /></td>
    <td><code>array</code></td>
    <td>A list of key features that the product offers to customers.</td>
</tr>
<tr>
    <td><CopyableCode code="logo_thumbnail_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the logo thumbnail image for the product. (pattern: &lt;code&gt;https?:​//.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="long_description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of what the product does, in paragraph format. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="manufacturer" /></td>
    <td><code>object</code></td>
    <td>The entity who manufactured the product.</td>
</tr>
<tr>
    <td><CopyableCode code="product_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the product. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="product_name" /></td>
    <td><code>string</code></td>
    <td>The human-readable display name of the product. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="promotional_media" /></td>
    <td><code>array</code></td>
    <td>Embedded promotional media provided by the creator of the product, such as images and videos.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>Resources that provide further information about using the product or requesting support, such as documentation links, support contacts, and usage instructions.</td>
</tr>
<tr>
    <td><CopyableCode code="seller_engagements" /></td>
    <td><code>array</code></td>
    <td>Engagement options available to potential buyers, such as requesting a private offer or requesting a demo.</td>
</tr>
<tr>
    <td><CopyableCode code="short_description" /></td>
    <td><code>string</code></td>
    <td>A 1–3 sentence summary describing the key aspects of the product. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_product"><CopyableCode code="get_product" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about a product, such as descriptions, highlights, categories, fulfillment option summaries, promotional media, and seller engagement options.</td>
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
    defaultValue="get_product"
    values={[
        { label: 'get_product', value: 'get_product' }
    ]}
>
<TabItem value="get_product">

Provides details about a product, such as descriptions, highlights, categories, fulfillment option summaries, promotional media, and seller engagement options.

```sql
SELECT
catalog,
categories,
deployed_on_aws,
fulfillment_option_summaries,
highlights,
logo_thumbnail_url,
long_description,
manufacturer,
product_id,
product_name,
promotional_media,
resources,
seller_engagements,
short_description
FROM aws.marketplace_discovery.products
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
