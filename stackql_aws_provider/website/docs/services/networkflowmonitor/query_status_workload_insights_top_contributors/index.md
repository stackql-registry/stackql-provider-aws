--- 
title: query_status_workload_insights_top_contributors
hide_title: false
hide_table_of_contents: false
keywords:
  - query_status_workload_insights_top_contributors
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

Creates, updates, deletes, gets or lists a <code>query_status_workload_insights_top_contributors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_status_workload_insights_top_contributors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkflowmonitor.query_status_workload_insights_top_contributors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_query_status_workload_insights_top_contributors"
    values={[
        { label: 'get_query_status_workload_insights_top_contributors', value: 'get_query_status_workload_insights_top_contributors' }
    ]}
>
<TabItem value="get_query_status_workload_insights_top_contributors">

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
    <td>When you run a query, use this call to check the status of the query to make sure that the query has SUCCEEDED before you review the results. QUEUED: The query is scheduled to run. RUNNING: The query is in progress but not complete. SUCCEEDED: The query completed sucessfully. FAILED: The query failed due to an error. CANCELED: The query was canceled. (QUEUED, RUNNING, SUCCEEDED, FAILED, CANCELED)</td>
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
    <td><a href="#get_query_status_workload_insights_top_contributors"><CopyableCode code="get_query_status_workload_insights_top_contributors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scope_id"><code>scope_id</code></a>, <a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Return the data for a query with the Network Flow Monitor query interface. Specify the query that you want to return results for by providing a query ID and a monitor name. This query returns the top contributors for workload insights. When you start a query, use this call to check the status of the query to make sure that it has has SUCCEEDED before you review the results. Use the same query ID that you used for the corresponding API call to start the query, StartQueryWorkloadInsightsTopContributors. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.</td>
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
    <td>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_query_status_workload_insights_top_contributors"
    values={[
        { label: 'get_query_status_workload_insights_top_contributors', value: 'get_query_status_workload_insights_top_contributors' }
    ]}
>
<TabItem value="get_query_status_workload_insights_top_contributors">

Return the data for a query with the Network Flow Monitor query interface. Specify the query that you want to return results for by providing a query ID and a monitor name. This query returns the top contributors for workload insights. When you start a query, use this call to check the status of the query to make sure that it has has SUCCEEDED before you review the results. Use the same query ID that you used for the corresponding API call to start the query, StartQueryWorkloadInsightsTopContributors. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.

```sql
SELECT
status
FROM aws.networkflowmonitor.query_status_workload_insights_top_contributors
WHERE scope_id = '{{ scope_id }}' -- required
AND query_id = '{{ query_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
