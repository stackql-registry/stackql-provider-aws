--- 
title: sessions_statistics_aggregations
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions_statistics_aggregations
  - deadline
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

Creates, updates, deletes, gets or lists a <code>sessions_statistics_aggregations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sessions_statistics_aggregations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.sessions_statistics_aggregations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sessions_statistics_aggregation"
    values={[
        { label: 'get_sessions_statistics_aggregation', value: 'get_sessions_statistics_aggregation' }
    ]}
>
<TabItem value="get_sessions_statistics_aggregation">

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
    <td><CopyableCode code="aggregation_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time for the aggregation.</td>
</tr>
<tr>
    <td><CopyableCode code="aggregation_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time for the aggregation.</td>
</tr>
<tr>
    <td><CopyableCode code="cost_in_usd" /></td>
    <td><code>object</code></td>
    <td>How the statistics should appear in USD. Options include: minimum, maximum, average or sum.</td>
</tr>
<tr>
    <td><CopyableCode code="count" /></td>
    <td><code>integer</code></td>
    <td>The number of instances in a list of statistics.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>The fleet ID. (pattern: &lt;code&gt;fleet-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The type of instance.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The job ID. (pattern: &lt;code&gt;job-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The job name.</td>
</tr>
<tr>
    <td><CopyableCode code="license_product" /></td>
    <td><code>string</code></td>
    <td>The licensed product.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The queue ID. (pattern: &lt;code&gt;queue-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_in_seconds" /></td>
    <td><code>object</code></td>
    <td>The total aggregated runtime.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_type" /></td>
    <td><code>string</code></td>
    <td>The type of usage for the statistics. (COMPUTE, LICENSE, PERSISTENT_VOLUME)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The user ID.</td>
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
    <td><a href="#get_sessions_statistics_aggregation"><CopyableCode code="get_sessions_statistics_aggregation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-aggregationId"><code>aggregationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Gets a set of statistics for queues or farms. Before you can call the GetSessionStatisticsAggregation operation, you must first call the StartSessionsStatisticsAggregation operation. Statistics are available for 1 hour after you call the StartSessionsStatisticsAggregation operation.</td>
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
<tr id="parameter-aggregationId">
    <td><CopyableCode code="aggregationId" /></td>
    <td><code>string</code></td>
    <td>The identifier returned by the StartSessionsStatisticsAggregation operation that identifies the aggregated statistics.</td>
</tr>
<tr id="parameter-farm_id">
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the farm to include in the statistics. This should be the same as the farm ID used in the call to the StartSessionsStatisticsAggregation operation.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null to start from the beginning.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sessions_statistics_aggregation"
    values={[
        { label: 'get_sessions_statistics_aggregation', value: 'get_sessions_statistics_aggregation' }
    ]}
>
<TabItem value="get_sessions_statistics_aggregation">

Gets a set of statistics for queues or farms. Before you can call the GetSessionStatisticsAggregation operation, you must first call the StartSessionsStatisticsAggregation operation. Statistics are available for 1 hour after you call the StartSessionsStatisticsAggregation operation.

```sql
SELECT
aggregation_end_time,
aggregation_start_time,
cost_in_usd,
count,
fleet_id,
instance_type,
job_id,
job_name,
license_product,
queue_id,
runtime_in_seconds,
usage_type,
user_id
FROM aws.deadline.sessions_statistics_aggregations
WHERE farm_id = '{{ farm_id }}' -- required
AND aggregationId = '{{ aggregationId }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
