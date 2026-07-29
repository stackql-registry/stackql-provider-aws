--- 
title: capacity_manager_metric_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_manager_metric_datas
  - ec2
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

Creates, updates, deletes, gets or lists a <code>capacity_manager_metric_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_manager_metric_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.capacity_manager_metric_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_capacity_manager_metric_data"
    values={[
        { label: 'get_capacity_manager_metric_data', value: 'get_capacity_manager_metric_data' }
    ]}
>
<TabItem value="get_capacity_manager_metric_data">

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
    <td><CopyableCode code="dimension" /></td>
    <td><code>string</code></td>
    <td>The dimension values that identify this specific data point, such as account ID, region, and instance family.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_values" /></td>
    <td><code>string</code></td>
    <td>The metric values and statistics for this data point, containing the actual capacity usage numbers.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string</code></td>
    <td>The timestamp for this data point, indicating when the capacity usage occurred.</td>
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
    <td><a href="#get_capacity_manager_metric_data"><CopyableCode code="get_capacity_manager_metric_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-MetricName"><code>MetricName</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Period"><code>Period</code></a>, <a href="#parameter-GroupBy"><code>GroupBy</code></a>, <a href="#parameter-FilterBy"><code>FilterBy</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Retrieves capacity usage metrics for your EC2 resources. Returns time-series data for metrics like unused capacity, utilization rates, and costs across On-Demand, Spot, and Capacity Reservations. Data can be grouped and filtered by various dimensions such as region, account, and instance family.</td>
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
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time for the metric data query, in ISO 8601 format. If the end time is beyond the latest ingested data, it will be automatically adjusted to the latest available data point.</td>
</tr>
<tr id="parameter-MetricName">
    <td><CopyableCode code="MetricName" /></td>
    <td><code>array</code></td>
    <td>The names of the metrics to retrieve. Maximum of 10 metrics per request.</td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time for the metric data query, in ISO 8601 format. The time range (end time - start time) must be a multiple of the specified period.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-FilterBy">
    <td><CopyableCode code="FilterBy" /></td>
    <td><code>array</code></td>
    <td>Conditions to filter the metric data. Each filter specifies a dimension, comparison operator ('equals', 'in'), and values to match against.</td>
</tr>
<tr id="parameter-GroupBy">
    <td><CopyableCode code="GroupBy" /></td>
    <td><code>array</code></td>
    <td>The dimensions by which to group the metric data. This determines how the data is aggregated and returned.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of data points to return. Valid range is 1 to 100,000. Use with NextToken for pagination of large result sets.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results. Use this value in a subsequent call to retrieve additional data points.</td>
</tr>
<tr id="parameter-Period">
    <td><CopyableCode code="Period" /></td>
    <td><code>integer</code></td>
    <td>The granularity, in seconds, of the returned data points.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_capacity_manager_metric_data"
    values={[
        { label: 'get_capacity_manager_metric_data', value: 'get_capacity_manager_metric_data' }
    ]}
>
<TabItem value="get_capacity_manager_metric_data">

Retrieves capacity usage metrics for your EC2 resources. Returns time-series data for metrics like unused capacity, utilization rates, and costs across On-Demand, Spot, and Capacity Reservations. Data can be grouped and filtered by various dimensions such as region, account, and instance family.

```sql
SELECT
dimension,
metric_values,
timestamp
FROM aws.ec2.capacity_manager_metric_datas
WHERE MetricName = '{{ MetricName }}' -- required
AND StartTime = '{{ StartTime }}' -- required
AND EndTime = '{{ EndTime }}' -- required
AND region = '{{ region }}' -- required
AND Period = '{{ Period }}'
AND GroupBy = '{{ GroupBy }}'
AND FilterBy = '{{ FilterBy }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
