--- 
title: metric_data_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - metric_data_v2s
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

Creates, updates, deletes, gets or lists a <code>metric_data_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metric_data_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.metric_data_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_metric_data_v2"
    values={[
        { label: 'get_metric_data_v2', value: 'get_metric_data_v2' }
    ]}
>
<TabItem value="get_metric_data_v2">

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
    <td><CopyableCode code="MetricResults" /></td>
    <td><code>array</code></td>
    <td>Information about the metrics requested in the API request If no grouping is specified, a summary of metric data is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If there are additional results, this is the token for the next set of results.</td>
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
    <td><a href="#get_metric_data_v2"><CopyableCode code="get_metric_data_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets metric data from the specified Amazon Connect instance. GetMetricDataV2 offers more features than GetMetricData, the previous version of this API. It has new metrics, offers filtering at a metric level, and offers the ability to filter and group data by channels, queues, routing profiles, agents, and agent hierarchy levels. It can retrieve historical data for the last 3 months, at varying intervals. It does not support agent queues. For a description of the historical metrics that are supported by GetMetricDataV2 and GetMetricData, see Metrics definitions in the Amazon Connect Administrator Guide. When you make a successful API request, you can expect the following metric values in the response: Metric value is null: The calculation cannot be performed due to divide by zero or insufficient data Metric value is a number (including 0) of defined type: The number provided is the calculation result MetricResult list is empty: The request cannot find any data in the system The following guidelines can help you work with the API: Each dimension in the metric response must contain a value Each item in MetricResult must include all requested metrics If the response is slow due to large result sets, try these approaches: Narrow the time range of your request Add filters to reduce the amount of data returned</td>
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
    defaultValue="get_metric_data_v2"
    values={[
        { label: 'get_metric_data_v2', value: 'get_metric_data_v2' }
    ]}
>
<TabItem value="get_metric_data_v2">

Gets metric data from the specified Amazon Connect instance. GetMetricDataV2 offers more features than GetMetricData, the previous version of this API. It has new metrics, offers filtering at a metric level, and offers the ability to filter and group data by channels, queues, routing profiles, agents, and agent hierarchy levels. It can retrieve historical data for the last 3 months, at varying intervals. It does not support agent queues. For a description of the historical metrics that are supported by GetMetricDataV2 and GetMetricData, see Metrics definitions in the Amazon Connect Administrator Guide. When you make a successful API request, you can expect the following metric values in the response: Metric value is null: The calculation cannot be performed due to divide by zero or insufficient data Metric value is a number (including 0) of defined type: The number provided is the calculation result MetricResult list is empty: The request cannot find any data in the system The following guidelines can help you work with the API: Each dimension in the metric response must contain a value Each item in MetricResult must include all requested metrics If the response is slow due to large result sets, try these approaches: Narrow the time range of your request Add filters to reduce the amount of data returned

```sql
SELECT
MetricResults,
NextToken
FROM aws.connect.metric_data_v2s
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
