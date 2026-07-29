--- 
title: efficiency_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - efficiency_metrics
  - cost_optimization_hub
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

Creates, updates, deletes, gets or lists an <code>efficiency_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="efficiency_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cost_optimization_hub.efficiency_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_efficiency_metrics"
    values={[
        { label: 'list_efficiency_metrics', value: 'list_efficiency_metrics' }
    ]}
>
<TabItem value="list_efficiency_metrics">

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
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>The value of the grouping dimension for this set of metrics. For example, if grouped by account ID, this field contains the account ID. If no grouping is specified, this field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>An explanation of why efficiency metrics could not be calculated for this group when the metricsByTime field is null. Common reasons include insufficient or inconclusive cost and usage data during the specified time period. This field is null or empty when metrics are successfully calculated.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_by_time" /></td>
    <td><code>array</code></td>
    <td>A list of time-series data points containing efficiency metrics for this group. Each data point includes an efficiency score, estimated savings, spending, and a timestamp corresponding to the specified granularity. This field is null when efficiency metrics cannot be calculated for the group, in which case the message field provides an explanation.</td>
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
    <td><a href="#list_efficiency_metrics"><CopyableCode code="list_efficiency_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns cost efficiency metrics aggregated over time and optionally grouped by a specified dimension. The metrics provide insights into your cost optimization progress by tracking estimated savings, spending, and measures how effectively you're optimizing your Cloud resources. The operation supports both daily and monthly time granularities and allows grouping results by account ID, Amazon Web Services Region. Results are returned as time-series data, enabling you to analyze trends in your cost optimization performance over the specified time period.</td>
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
    defaultValue="list_efficiency_metrics"
    values={[
        { label: 'list_efficiency_metrics', value: 'list_efficiency_metrics' }
    ]}
>
<TabItem value="list_efficiency_metrics">

Returns cost efficiency metrics aggregated over time and optionally grouped by a specified dimension. The metrics provide insights into your cost optimization progress by tracking estimated savings, spending, and measures how effectively you're optimizing your Cloud resources. The operation supports both daily and monthly time granularities and allows grouping results by account ID, Amazon Web Services Region. Results are returned as time-series data, enabling you to analyze trends in your cost optimization performance over the specified time period.

```sql
SELECT
group,
message,
metrics_by_time
FROM aws.cost_optimization_hub.efficiency_metrics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
