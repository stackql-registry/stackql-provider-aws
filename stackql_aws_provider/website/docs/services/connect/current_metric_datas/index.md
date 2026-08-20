--- 
title: current_metric_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - current_metric_datas
  - connect
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

Creates, updates, deletes, gets or lists a <code>current_metric_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="current_metric_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.current_metric_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_current_metric_data"
    values={[
        { label: 'get_current_metric_data', value: 'get_current_metric_data' }
    ]}
>
<TabItem value="get_current_metric_data">

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
    <td><CopyableCode code="approximate_total_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total count of the result, regardless of the current page size.</td>
</tr>
<tr>
    <td><CopyableCode code="data_snapshot_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the metrics were retrieved and cached for pagination.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_results" /></td>
    <td><code>array</code></td>
    <td>Information about the real-time metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If there are additional results, this is the token for the next set of results. The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token.</td>
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
    <td><a href="#get_current_metric_data"><CopyableCode code="get_current_metric_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the real-time metric data from the specified Connect Customer instance. For a description of each metric, see Metrics definitions in the Connect Customer Administrator Guide. When you make a successful API request, you can expect the following metric values in the response: Metric value is null: The calculation cannot be performed due to divide by zero or insufficient data Metric value is a number (including 0) of defined type: The number provided is the calculation result MetricResult list is empty: The request cannot find any data in the system The following guidelines can help you work with the API: Each dimension in the metric response must contain a value Each item in MetricResult must include all requested metrics If the response is slow due to large result sets, try these approaches: Add filters to reduce the amount of data returned</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_current_metric_data"
    values={[
        { label: 'get_current_metric_data', value: 'get_current_metric_data' }
    ]}
>
<TabItem value="get_current_metric_data">

Gets the real-time metric data from the specified Connect Customer instance. For a description of each metric, see Metrics definitions in the Connect Customer Administrator Guide. When you make a successful API request, you can expect the following metric values in the response: Metric value is null: The calculation cannot be performed due to divide by zero or insufficient data Metric value is a number (including 0) of defined type: The number provided is the calculation result MetricResult list is empty: The request cannot find any data in the system The following guidelines can help you work with the API: Each dimension in the metric response must contain a value Each item in MetricResult must include all requested metrics If the response is slow due to large result sets, try these approaches: Add filters to reduce the amount of data returned

```sql
SELECT
approximate_total_count,
data_snapshot_time,
metric_results,
next_token
FROM aws.connect.current_metric_datas
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
