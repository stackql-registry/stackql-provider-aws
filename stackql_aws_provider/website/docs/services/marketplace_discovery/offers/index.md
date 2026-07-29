--- 
title: offers
hide_title: false
hide_table_of_contents: false
keywords:
  - offers
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

Creates, updates, deletes, gets or lists an <code>offers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="offers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_discovery.offers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_offer"
    values={[
        { label: 'get_offer', value: 'get_offer' }
    ]}
>
<TabItem value="get_offer">

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
    <td><CopyableCode code="agreement_proposal_id" /></td>
    <td><code>string</code></td>
    <td>An encoded string to be passed by the acceptor of the terms when creating an agreement. (pattern: &lt;code&gt;&#91;A-Za-z0-9_/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="associated_entities" /></td>
    <td><code>array</code></td>
    <td>The products and offer sets associated with this offer.</td>
</tr>
<tr>
    <td><CopyableCode code="available_from_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the offer became available to the buyer.</td>
</tr>
<tr>
    <td><CopyableCode code="badges" /></td>
    <td><code>array</code></td>
    <td>Badges indicating special attributes of the offer, such as private pricing, future dated, or replacement offer.</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The name of the catalog that the offer belongs to. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time until when the offer can be procured. This value is null for offers that never expire.</td>
</tr>
<tr>
    <td><CopyableCode code="offer_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the offer. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="offer_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the offer. This is free-form text provided by the seller.</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_model" /></td>
    <td><code>object</code></td>
    <td>A pricing model that determines how buyers are charged for a listing, such as usage-based, contract, BYOL, or free.</td>
</tr>
<tr>
    <td><CopyableCode code="replacement_agreement_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the existing agreement that this offer would replace. Enables agreement-based offer functionality. (pattern: &lt;code&gt;&#91;A-Za-z0-9_/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="seller_of_record" /></td>
    <td><code>object</code></td>
    <td>The entity responsible for selling the product under this offer.</td>
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
    <td><a href="#get_offer"><CopyableCode code="get_offer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about an offer, such as the pricing model, seller of record, availability dates, badges, and associated products.</td>
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
    defaultValue="get_offer"
    values={[
        { label: 'get_offer', value: 'get_offer' }
    ]}
>
<TabItem value="get_offer">

Provides details about an offer, such as the pricing model, seller of record, availability dates, badges, and associated products.

```sql
SELECT
agreement_proposal_id,
associated_entities,
available_from_time,
badges,
catalog,
expiration_time,
offer_id,
offer_name,
pricing_model,
replacement_agreement_id,
seller_of_record
FROM aws.marketplace_discovery.offers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
