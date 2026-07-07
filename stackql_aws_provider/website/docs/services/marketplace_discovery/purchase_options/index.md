--- 
title: purchase_options
hide_title: false
hide_table_of_contents: false
keywords:
  - purchase_options
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

Creates, updates, deletes, gets or lists a <code>purchase_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="purchase_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_discovery.purchase_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_purchase_options"
    values={[
        { label: 'list_purchase_options', value: 'list_purchase_options' }
    ]}
>
<TabItem value="list_purchase_options">

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
    <td><CopyableCode code="associatedEntities" /></td>
    <td><code>array</code></td>
    <td>The products, offers, and offer sets associated with this purchase option.</td>
</tr>
<tr>
    <td><CopyableCode code="availableFromTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the purchase option became available to the buyer.</td>
</tr>
<tr>
    <td><CopyableCode code="badges" /></td>
    <td><code>array</code></td>
    <td>Badges indicating special attributes of the purchase option, such as private pricing or future dated.</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The name of the catalog that the purchase option belongs to. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the purchase option expires and is no longer available for procurement.</td>
</tr>
<tr>
    <td><CopyableCode code="purchaseOptionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the purchase option. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="purchaseOptionName" /></td>
    <td><code>string</code></td>
    <td>The display name of the purchase option. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="purchaseOptionType" /></td>
    <td><code>string</code></td>
    <td>The type of purchase option. Values are OFFER for a single-product offer or OFFERSET for a bundled offer set. (OFFER, OFFERSET)</td>
</tr>
<tr>
    <td><CopyableCode code="sellerOfRecord" /></td>
    <td><code>object</code></td>
    <td>The entity responsible for selling the product under this purchase option.</td>
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
    <td><a href="#list_purchase_options"><CopyableCode code="list_purchase_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the purchase options (offers and offer sets) available to the buyer. You can filter results by product, seller, purchase option type, visibility scope, and availability status. You must include at least one of the following filters in the request: a PRODUCT_ID filter to specify the product for which to retrieve purchase options, or a VISIBILITY_SCOPE filter to retrieve purchase options by visibility.</td>
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
    defaultValue="list_purchase_options"
    values={[
        { label: 'list_purchase_options', value: 'list_purchase_options' }
    ]}
>
<TabItem value="list_purchase_options">

Returns the purchase options (offers and offer sets) available to the buyer. You can filter results by product, seller, purchase option type, visibility scope, and availability status. You must include at least one of the following filters in the request: a PRODUCT_ID filter to specify the product for which to retrieve purchase options, or a VISIBILITY_SCOPE filter to retrieve purchase options by visibility.

```sql
SELECT
associatedEntities,
availableFromTime,
badges,
catalog,
expirationTime,
purchaseOptionId,
purchaseOptionName,
purchaseOptionType,
sellerOfRecord
FROM aws.marketplace_discovery.purchase_options
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
