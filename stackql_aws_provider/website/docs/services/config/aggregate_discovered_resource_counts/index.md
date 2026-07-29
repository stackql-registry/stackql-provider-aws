--- 
title: aggregate_discovered_resource_counts
hide_title: false
hide_table_of_contents: false
keywords:
  - aggregate_discovered_resource_counts
  - config
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

Creates, updates, deletes, gets or lists an <code>aggregate_discovered_resource_counts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aggregate_discovered_resource_counts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.aggregate_discovered_resource_counts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_aggregate_discovered_resource_counts"
    values={[
        { label: 'get_aggregate_discovered_resource_counts', value: 'get_aggregate_discovered_resource_counts' }
    ]}
>
<TabItem value="get_aggregate_discovered_resource_counts">

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
    <td><CopyableCode code="group_by_key" /></td>
    <td><code>string</code></td>
    <td>The key passed into the request object. If GroupByKey is not provided, the result will be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="grouped_resource_counts" /></td>
    <td><code>array</code></td>
    <td>Returns a list of GroupedResourceCount objects.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</td>
</tr>
<tr>
    <td><CopyableCode code="total_discovered_resources" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of resources that are present in an aggregator with the filters that you provide.</td>
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
    <td><a href="#get_aggregate_discovered_resource_counts"><CopyableCode code="get_aggregate_discovered_resource_counts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the resource counts across accounts and regions that are present in your Config aggregator. You can request the resource counts by providing filters and GroupByKey. For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.</td>
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
    defaultValue="get_aggregate_discovered_resource_counts"
    values={[
        { label: 'get_aggregate_discovered_resource_counts', value: 'get_aggregate_discovered_resource_counts' }
    ]}
>
<TabItem value="get_aggregate_discovered_resource_counts">

Returns the resource counts across accounts and regions that are present in your Config aggregator. You can request the resource counts by providing filters and GroupByKey. For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.

```sql
SELECT
group_by_key,
grouped_resource_counts,
next_token,
total_discovered_resources
FROM aws.config.aggregate_discovered_resource_counts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
