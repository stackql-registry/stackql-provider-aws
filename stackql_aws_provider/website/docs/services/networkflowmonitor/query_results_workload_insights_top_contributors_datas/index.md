--- 
title: query_results_workload_insights_top_contributors_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - query_results_workload_insights_top_contributors_datas
  - networkflowmonitor
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

Creates, updates, deletes, gets or lists a <code>query_results_workload_insights_top_contributors_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_results_workload_insights_top_contributors_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkflowmonitor.query_results_workload_insights_top_contributors_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_query_results_workload_insights_top_contributors_data"
    values={[
        { label: 'get_query_results_workload_insights_top_contributors_data', value: 'get_query_results_workload_insights_top_contributors_data' }
    ]}
>
<TabItem value="get_query_results_workload_insights_top_contributors_data">

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
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The label identifying the data point.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamps" /></td>
    <td><code>array</code></td>
    <td>An array of the timestamps for the data point.</td>
</tr>
<tr>
    <td><CopyableCode code="values" /></td>
    <td><code>array</code></td>
    <td>The values for the data point.</td>
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
    <td><a href="#get_query_results_workload_insights_top_contributors_data"><CopyableCode code="get_query_results_workload_insights_top_contributors_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scope_id"><code>scope_id</code></a>, <a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Return the data for a query with the Network Flow Monitor query interface. Specify the query that you want to return results for by providing a query ID and a scope ID. This query returns the data for top contributors for workload insights for a specific scope. Workload insights provide a high level view of network flow performance data collected by agents for a scope. To return just the top contributors, see GetQueryResultsWorkloadInsightsTopContributors. Create a query ID for this call by calling the corresponding API call to start the query, StartQueryWorkloadInsightsTopContributorsData. Use the scope ID that was returned for your account by CreateScope. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned. The top contributor network flows overall are for a specific metric type, for example, the number of retransmissions.</td>
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
<tr id="parameter-query_id">
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to create a query.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-scope_id">
    <td><CopyableCode code="scope_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of query results that you want to return with this call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. You receive this token from a previous call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_query_results_workload_insights_top_contributors_data"
    values={[
        { label: 'get_query_results_workload_insights_top_contributors_data', value: 'get_query_results_workload_insights_top_contributors_data' }
    ]}
>
<TabItem value="get_query_results_workload_insights_top_contributors_data">

Return the data for a query with the Network Flow Monitor query interface. Specify the query that you want to return results for by providing a query ID and a scope ID. This query returns the data for top contributors for workload insights for a specific scope. Workload insights provide a high level view of network flow performance data collected by agents for a scope. To return just the top contributors, see GetQueryResultsWorkloadInsightsTopContributors. Create a query ID for this call by calling the corresponding API call to start the query, StartQueryWorkloadInsightsTopContributorsData. Use the scope ID that was returned for your account by CreateScope. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned. The top contributor network flows overall are for a specific metric type, for example, the number of retransmissions.

```sql
SELECT
label,
timestamps,
values
FROM aws.networkflowmonitor.query_results_workload_insights_top_contributors_datas
WHERE scope_id = '{{ scope_id }}' -- required
AND query_id = '{{ query_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
