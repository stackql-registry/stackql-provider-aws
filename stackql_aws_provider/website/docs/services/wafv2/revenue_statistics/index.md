--- 
title: revenue_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - revenue_statistics
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

Creates, updates, deletes, gets or lists a <code>revenue_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="revenue_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.revenue_statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_revenue_statistics"
    values={[
        { label: 'get_revenue_statistics', value: 'get_revenue_statistics' }
    ]}
>
<TabItem value="get_revenue_statistics">

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
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>When you get a paginated response, this marker indicates that additional results are available. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="revenue_path_statistics" /></td>
    <td><code>array</code></td>
    <td>Statistics for top revenue paths. Populated when StatisticType is TOP_PATHS_BY_REVENUE.</td>
</tr>
<tr>
    <td><CopyableCode code="source_statistics" /></td>
    <td><code>array</code></td>
    <td>Statistics for top revenue sources (AI bots). Populated when StatisticType is TOP_SOURCES_BY_REVENUE.</td>
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
    <td><a href="#get_revenue_statistics"><CopyableCode code="get_revenue_statistics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves ranked monetization statistics. Use the StatisticType parameter to specify the ranking: TOP_SOURCES_BY_REVENUE for top sources by revenue, or TOP_PATHS_BY_REVENUE for top content paths by revenue. This operation is only available for CLOUDFRONT scope. The maximum supported time window is 90 days. When no CurrencyMode filter is provided, results default to REAL. To retrieve test data, include a CurrencyMode filter with the value TEST.</td>
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
    defaultValue="get_revenue_statistics"
    values={[
        { label: 'get_revenue_statistics', value: 'get_revenue_statistics' }
    ]}
>
<TabItem value="get_revenue_statistics">

Retrieves ranked monetization statistics. Use the StatisticType parameter to specify the ranking: TOP_SOURCES_BY_REVENUE for top sources by revenue, or TOP_PATHS_BY_REVENUE for top content paths by revenue. This operation is only available for CLOUDFRONT scope. The maximum supported time window is 90 days. When no CurrencyMode filter is provided, results default to REAL. To retrieve test data, include a CurrencyMode filter with the value TEST.

```sql
SELECT
next_marker,
revenue_path_statistics,
source_statistics
FROM aws.wafv2.revenue_statistics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
