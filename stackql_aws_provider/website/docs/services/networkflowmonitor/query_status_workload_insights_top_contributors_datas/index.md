--- 
title: query_status_workload_insights_top_contributors_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - query_status_workload_insights_top_contributors_datas
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

Creates, updates, deletes, gets or lists a <code>query_status_workload_insights_top_contributors_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_status_workload_insights_top_contributors_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkflowmonitor.query_status_workload_insights_top_contributors_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_query_status_workload_insights_top_contributors_data"
    values={[
        { label: 'get_query_status_workload_insights_top_contributors_data', value: 'get_query_status_workload_insights_top_contributors_data' }
    ]}
>
<TabItem value="get_query_status_workload_insights_top_contributors_data">

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a query for top contributors data. QUEUED: The query is scheduled to run. RUNNING: The query is in progress but not complete. SUCCEEDED: The query completed sucessfully. FAILED: The query failed due to an error. CANCELED: The query was canceled. (QUEUED, RUNNING, SUCCEEDED, FAILED, CANCELED)</td>
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
    <td><a href="#get_query_status_workload_insights_top_contributors_data"><CopyableCode code="get_query_status_workload_insights_top_contributors_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scope_id"><code>scope_id</code></a>, <a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current status of a query for the Network Flow Monitor query interface, for a specified query ID and monitor. This call returns the query status for the top contributors data for workload insights. When you start a query, use this call to check the status of the query to make sure that it has has SUCCEEDED before you review the results. Use the same query ID that you used for the corresponding API call to start the query, StartQueryWorkloadInsightsTopContributorsData. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned. The top contributor network flows overall are for a specific metric type, for example, the number of retransmissions.</td>
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
    <td>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-scope_id">
    <td><CopyableCode code="scope_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account. A scope ID is returned from a CreateScope API call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_query_status_workload_insights_top_contributors_data"
    values={[
        { label: 'get_query_status_workload_insights_top_contributors_data', value: 'get_query_status_workload_insights_top_contributors_data' }
    ]}
>
<TabItem value="get_query_status_workload_insights_top_contributors_data">

Returns the current status of a query for the Network Flow Monitor query interface, for a specified query ID and monitor. This call returns the query status for the top contributors data for workload insights. When you start a query, use this call to check the status of the query to make sure that it has has SUCCEEDED before you review the results. Use the same query ID that you used for the corresponding API call to start the query, StartQueryWorkloadInsightsTopContributorsData. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned. The top contributor network flows overall are for a specific metric type, for example, the number of retransmissions.

```sql
SELECT
status
FROM aws.networkflowmonitor.query_status_workload_insights_top_contributors_datas
WHERE scope_id = '{{ scope_id }}' -- required
AND query_id = '{{ query_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
