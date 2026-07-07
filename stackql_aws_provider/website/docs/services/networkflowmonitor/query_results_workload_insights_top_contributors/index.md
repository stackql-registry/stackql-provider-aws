--- 
title: query_results_workload_insights_top_contributors
hide_title: false
hide_table_of_contents: false
keywords:
  - query_results_workload_insights_top_contributors
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

Creates, updates, deletes, gets or lists a <code>query_results_workload_insights_top_contributors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_results_workload_insights_top_contributors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkflowmonitor.query_results_workload_insights_top_contributors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_query_results_workload_insights_top_contributors"
    values={[
        { label: 'get_query_results_workload_insights_top_contributors', value: 'get_query_results_workload_insights_top_contributors' }
    ]}
>
<TabItem value="get_query_results_workload_insights_top_contributors">

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
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The account ID for a specific row of data. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="localAz" /></td>
    <td><code>string</code></td>
    <td>The identifier for the Availability Zone where the local resource is located.</td>
</tr>
<tr>
    <td><CopyableCode code="localRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the local resource is located.</td>
</tr>
<tr>
    <td><CopyableCode code="localSubnetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a local subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="localSubnetId" /></td>
    <td><code>string</code></td>
    <td>The subnet identifier for the local resource. (pattern: &lt;code&gt;subnet-&#91;a-zA-Z0-9&#93;&#123;8,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="localVpcArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a local VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="localVpcId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the VPC for the local resource. (pattern: &lt;code&gt;vpc-&#91;a-zA-Z0-9&#93;&#123;8,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="remoteIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of a remote resource. For a VPC or subnet, this identifier is the VPC Amazon Resource Name (ARN) or subnet ARN. For an Availability Zone, this identifier is the AZ name, for example, us-west-2b. For an Amazon Web Services Region , this identifier is the Region name, for example, us-west-2.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>integer (int64)</code></td>
    <td>The value for a metric.</td>
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
    <td><a href="#get_query_results_workload_insights_top_contributors"><CopyableCode code="get_query_results_workload_insights_top_contributors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scope_id"><code>scope_id</code></a>, <a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Return the data for a query with the Network Flow Monitor query interface. You specify the query that you want to return results for by providing a query ID and a monitor name. This query returns the top contributors for a scope for workload insights. Workload insights provide a high level view of network flow performance data collected by agents. To return the data for the top contributors, see GetQueryResultsWorkloadInsightsTopContributorsData. Create a query ID for this call by calling the corresponding API call to start the query, StartQueryWorkloadInsightsTopContributors. Use the scope ID that was returned for your account by CreateScope. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.</td>
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
    defaultValue="get_query_results_workload_insights_top_contributors"
    values={[
        { label: 'get_query_results_workload_insights_top_contributors', value: 'get_query_results_workload_insights_top_contributors' }
    ]}
>
<TabItem value="get_query_results_workload_insights_top_contributors">

Return the data for a query with the Network Flow Monitor query interface. You specify the query that you want to return results for by providing a query ID and a monitor name. This query returns the top contributors for a scope for workload insights. Workload insights provide a high level view of network flow performance data collected by agents. To return the data for the top contributors, see GetQueryResultsWorkloadInsightsTopContributorsData. Create a query ID for this call by calling the corresponding API call to start the query, StartQueryWorkloadInsightsTopContributors. Use the scope ID that was returned for your account by CreateScope. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.

```sql
SELECT
accountId,
localAz,
localRegion,
localSubnetArn,
localSubnetId,
localVpcArn,
localVpcId,
remoteIdentifier,
value
FROM aws.networkflowmonitor.query_results_workload_insights_top_contributors
WHERE scope_id = '{{ scope_id }}' -- required
AND query_id = '{{ query_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
