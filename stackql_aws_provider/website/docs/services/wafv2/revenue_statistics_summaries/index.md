--- 
title: revenue_statistics_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - revenue_statistics_summaries
  - wafv2
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

Creates, updates, deletes, gets or lists a <code>revenue_statistics_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="revenue_statistics_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.revenue_statistics_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_revenue_statistics_summary"
    values={[
        { label: 'get_revenue_statistics_summary', value: 'get_revenue_statistics_summary' }
    ]}
>
<TabItem value="get_revenue_statistics_summary">

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
    <td><CopyableCode code="currency" /></td>
    <td><code>string</code></td>
    <td>The currency of the revenue amounts. (USDC)</td>
</tr>
<tr>
    <td><CopyableCode code="total_amount" /></td>
    <td><code>string</code></td>
    <td>The total revenue amount in the specified currency.</td>
</tr>
<tr>
    <td><CopyableCode code="total_monetize_served" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of HTTP 402 Payment Required responses served to AI agents.</td>
</tr>
<tr>
    <td><CopyableCode code="total_settled" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of successfully settled payment transactions.</td>
</tr>
<tr>
    <td><CopyableCode code="unverified_amount" /></td>
    <td><code>string</code></td>
    <td>The revenue amount from unverified AI bots.</td>
</tr>
<tr>
    <td><CopyableCode code="verified_amount" /></td>
    <td><code>string</code></td>
    <td>The revenue amount from verified AI bots.</td>
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
    <td><a href="#get_revenue_statistics_summary"><CopyableCode code="get_revenue_statistics_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a summary of monetization revenue for the specified time window. Returns total revenue, revenue by verification tier, total settlements, and total HTTP 402 responses served. This operation is only available for CLOUDFRONT scope. The maximum supported time window is 90 days. When no CurrencyMode filter is provided, results default to REAL. To retrieve test data, include a CurrencyMode filter with the value TEST.</td>
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
    defaultValue="get_revenue_statistics_summary"
    values={[
        { label: 'get_revenue_statistics_summary', value: 'get_revenue_statistics_summary' }
    ]}
>
<TabItem value="get_revenue_statistics_summary">

Retrieves a summary of monetization revenue for the specified time window. Returns total revenue, revenue by verification tier, total settlements, and total HTTP 402 responses served. This operation is only available for CLOUDFRONT scope. The maximum supported time window is 90 days. When no CurrencyMode filter is provided, results default to REAL. To retrieve test data, include a CurrencyMode filter with the value TEST.

```sql
SELECT
currency,
total_amount,
total_monetize_served,
total_settled,
unverified_amount,
verified_amount
FROM aws.wafv2.revenue_statistics_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
