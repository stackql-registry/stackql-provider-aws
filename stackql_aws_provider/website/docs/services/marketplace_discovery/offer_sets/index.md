--- 
title: offer_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - offer_sets
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

Creates, updates, deletes, gets or lists an <code>offer_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="offer_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_discovery.offer_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_offer_set"
    values={[
        { label: 'get_offer_set', value: 'get_offer_set' }
    ]}
>
<TabItem value="get_offer_set">

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
    <td><CopyableCode code="associated_entities" /></td>
    <td><code>array</code></td>
    <td>The products and offers included in this offer set.</td>
</tr>
<tr>
    <td><CopyableCode code="available_from_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the offer set became available to the buyer.</td>
</tr>
<tr>
    <td><CopyableCode code="badges" /></td>
    <td><code>array</code></td>
    <td>Badges indicating special attributes of the offer set, such as private pricing or future dated.</td>
</tr>
<tr>
    <td><CopyableCode code="buyer_notes" /></td>
    <td><code>string</code></td>
    <td>Detailed information about the offer set that helps buyers understand its purpose and contents.</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The name of the catalog that the offer set belongs to. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the offer set expires and is no longer available for procurement.</td>
</tr>
<tr>
    <td><CopyableCode code="offer_set_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the offer set. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="offer_set_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the offer set. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="seller_of_record" /></td>
    <td><code>object</code></td>
    <td>The entity responsible for selling the products under this offer set.</td>
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
    <td><a href="#get_offer_set"><CopyableCode code="get_offer_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about an offer set, which is a bundle of offers across multiple products. Includes the seller, availability dates, buyer notes, and associated product-offer pairs.</td>
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
    defaultValue="get_offer_set"
    values={[
        { label: 'get_offer_set', value: 'get_offer_set' }
    ]}
>
<TabItem value="get_offer_set">

Provides details about an offer set, which is a bundle of offers across multiple products. Includes the seller, availability dates, buyer notes, and associated product-offer pairs.

```sql
SELECT
associated_entities,
available_from_time,
badges,
buyer_notes,
catalog,
expiration_time,
offer_set_id,
offer_set_name,
seller_of_record
FROM aws.marketplace_discovery.offer_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
