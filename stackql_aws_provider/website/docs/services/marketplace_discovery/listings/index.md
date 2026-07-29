--- 
title: listings
hide_title: false
hide_table_of_contents: false
keywords:
  - listings
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

Creates, updates, deletes, gets or lists a <code>listings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="listings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_discovery.listings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_listing"
    values={[
        { label: 'get_listing', value: 'get_listing' },
        { label: 'search_listings', value: 'search_listings' }
    ]}
>
<TabItem value="get_listing">

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
    <td>The products and offers associated with this listing. Each entity contains product and offer information.</td>
</tr>
<tr>
    <td><CopyableCode code="badges" /></td>
    <td><code>array</code></td>
    <td>Badges indicating special attributes of the listing, such as free tier eligibility, free trial availability, or Quick Launch support.</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The name of the catalog that the listing belongs to. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>The categories used to classify this listing into logical groups.</td>
</tr>
<tr>
    <td><CopyableCode code="fulfillment_option_summaries" /></td>
    <td><code>array</code></td>
    <td>A summary of fulfillment options available for deploying or accessing the listing, such as AMI, SaaS, or Container.</td>
</tr>
<tr>
    <td><CopyableCode code="highlights" /></td>
    <td><code>array</code></td>
    <td>A list of key features that the listing offers to customers.</td>
</tr>
<tr>
    <td><CopyableCode code="integration_guide" /></td>
    <td><code>string</code></td>
    <td>Optional guidance explaining how to use data in this listing. Primarily defines how to integrate with a multi-product listing.</td>
</tr>
<tr>
    <td><CopyableCode code="listing_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the listing. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="listing_name" /></td>
    <td><code>string</code></td>
    <td>The human-readable display name of the listing. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logo_thumbnail_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the logo thumbnail image for the listing. (pattern: &lt;code&gt;https?:​//.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="long_description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of what the listing offers, in paragraph format. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_models" /></td>
    <td><code>array</code></td>
    <td>The pricing models for offers associated with this listing, such as usage-based, contract, BYOL, or free.</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_units" /></td>
    <td><code>array</code></td>
    <td>The pricing units that define the billing dimensions for offers associated with this listing, such as users, hosts, or data.</td>
</tr>
<tr>
    <td><CopyableCode code="promotional_media" /></td>
    <td><code>array</code></td>
    <td>Embedded promotional media provided by the creator of the product, such as images and videos.</td>
</tr>
<tr>
    <td><CopyableCode code="publisher" /></td>
    <td><code>object</code></td>
    <td>The entity who created and published the listing.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>Resources that provide further information about using the product or requesting support, such as documentation links, support contacts, and usage instructions.</td>
</tr>
<tr>
    <td><CopyableCode code="review_summary" /></td>
    <td><code>object</code></td>
    <td>A summary of customer reviews available for the listing, including average rating and total review count by source.</td>
</tr>
<tr>
    <td><CopyableCode code="seller_engagements" /></td>
    <td><code>array</code></td>
    <td>Engagement options available to potential buyers, such as requesting a private offer or requesting a demo.</td>
</tr>
<tr>
    <td><CopyableCode code="short_description" /></td>
    <td><code>string</code></td>
    <td>A 1–3 sentence summary describing the key aspects of the listing. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="use_cases" /></td>
    <td><code>array</code></td>
    <td>Use cases associated with the listing, describing scenarios where the product can be applied.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_listings">

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
    <td>The products associated with this listing.</td>
</tr>
<tr>
    <td><CopyableCode code="badges" /></td>
    <td><code>array</code></td>
    <td>Badges indicating special attributes of the listing.</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The name of the catalog that the listing belongs to. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>The categories used to classify this listing into logical groups.</td>
</tr>
<tr>
    <td><CopyableCode code="fulfillment_option_summaries" /></td>
    <td><code>array</code></td>
    <td>A summary of fulfillment options available for the listing.</td>
</tr>
<tr>
    <td><CopyableCode code="listing_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the listing. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="listing_name" /></td>
    <td><code>string</code></td>
    <td>The human-readable display name of the listing. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logo_thumbnail_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the logo thumbnail image for the listing. (pattern: &lt;code&gt;https?:​//.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_models" /></td>
    <td><code>array</code></td>
    <td>The pricing models for offers associated with this listing.</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_units" /></td>
    <td><code>array</code></td>
    <td>The pricing units that define the billing dimensions for offers associated with this listing.</td>
</tr>
<tr>
    <td><CopyableCode code="publisher" /></td>
    <td><code>object</code></td>
    <td>The entity who created and published the listing.</td>
</tr>
<tr>
    <td><CopyableCode code="review_summary" /></td>
    <td><code>object</code></td>
    <td>A summary of customer reviews for the listing.</td>
</tr>
<tr>
    <td><CopyableCode code="short_description" /></td>
    <td><code>string</code></td>
    <td>A 1–3 sentence summary describing the key aspects of the listing. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_listing"><CopyableCode code="get_listing" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about a listing, such as descriptions, badges, categories, pricing model summaries, reviews, and associated products and offers.</td>
</tr>
<tr>
    <td><a href="#search_listings"><CopyableCode code="search_listings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of product listings based on search criteria and filters. You can search by keyword, filter by category, pricing model, fulfillment type, and other attributes, and sort results by relevance or customer rating.</td>
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
    defaultValue="get_listing"
    values={[
        { label: 'get_listing', value: 'get_listing' },
        { label: 'search_listings', value: 'search_listings' }
    ]}
>
<TabItem value="get_listing">

Provides details about a listing, such as descriptions, badges, categories, pricing model summaries, reviews, and associated products and offers.

```sql
SELECT
associated_entities,
badges,
catalog,
categories,
fulfillment_option_summaries,
highlights,
integration_guide,
listing_id,
listing_name,
logo_thumbnail_url,
long_description,
pricing_models,
pricing_units,
promotional_media,
publisher,
resources,
review_summary,
seller_engagements,
short_description,
use_cases
FROM aws.marketplace_discovery.listings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_listings">

Returns a list of product listings based on search criteria and filters. You can search by keyword, filter by category, pricing model, fulfillment type, and other attributes, and sort results by relevance or customer rating.

```sql
SELECT
associated_entities,
badges,
catalog,
categories,
fulfillment_option_summaries,
listing_id,
listing_name,
logo_thumbnail_url,
pricing_models,
pricing_units,
publisher,
review_summary,
short_description
FROM aws.marketplace_discovery.listings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
