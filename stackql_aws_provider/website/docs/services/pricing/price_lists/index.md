--- 
title: price_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - price_lists
  - pricing
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

Creates, updates, deletes, gets or lists a <code>price_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="price_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pricing.price_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_price_lists"
    values={[
        { label: 'list_price_lists', value: 'list_price_lists' }
    ]}
>
<TabItem value="list_price_lists">

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
    <td><CopyableCode code="CurrencyCode" /></td>
    <td><code>string</code></td>
    <td>The three alphabetical character ISO-4217 currency code the Price List files are denominated in. (pattern: &lt;code&gt;&#91;A-Z&#93;&#123;3&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FileFormats" /></td>
    <td><code>array</code></td>
    <td>The format you want to retrieve your Price List files. The FileFormat can be obtained from the ListPriceList response.</td>
</tr>
<tr>
    <td><CopyableCode code="PriceListArn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier that maps to where your Price List files are located. PriceListArn can be obtained from the ListPriceList response. (pattern: &lt;code&gt;arn:&#91;A-Za-z0-9&#93;&#91;-.A-Za-z0-9&#93;&#123;0,62&#125;:pricing:::price-list/&#91;A-Za-z0-9+_/.-&#93;&#123;1,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RegionCode" /></td>
    <td><code>string</code></td>
    <td>This is used to filter the Price List by Amazon Web Services Region. For example, to get the price list only for the US East (N. Virginia) Region, use us-east-1. If nothing is specified, you retrieve price lists for all applicable Regions. The available RegionCode list can be retrieved from GetAttributeValues API.</td>
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
    <td><a href="#list_price_lists"><CopyableCode code="list_price_lists" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the Amazon Web Services Service Terms (Section 1.10). This returns a list of Price List references that the requester if authorized to view, given a ServiceCode, CurrencyCode, and an EffectiveDate. Use without a RegionCode filter to list Price List references from all available Amazon Web Services Regions. Use with a RegionCode filter to get the Price List reference that's specific to a specific Amazon Web Services Region. You can use the PriceListArn from the response to get your preferred Price List files through the GetPriceListFileUrl API.</td>
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
    defaultValue="list_price_lists"
    values={[
        { label: 'list_price_lists', value: 'list_price_lists' }
    ]}
>
<TabItem value="list_price_lists">

This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the Amazon Web Services Service Terms (Section 1.10). This returns a list of Price List references that the requester if authorized to view, given a ServiceCode, CurrencyCode, and an EffectiveDate. Use without a RegionCode filter to list Price List references from all available Amazon Web Services Regions. Use with a RegionCode filter to get the Price List reference that's specific to a specific Amazon Web Services Region. You can use the PriceListArn from the response to get your preferred Price List files through the GetPriceListFileUrl API.

```sql
SELECT
CurrencyCode,
FileFormats,
PriceListArn,
RegionCode
FROM aws.pricing.price_lists
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
