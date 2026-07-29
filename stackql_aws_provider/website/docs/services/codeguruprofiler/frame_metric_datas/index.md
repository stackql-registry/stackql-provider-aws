--- 
title: frame_metric_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - frame_metric_datas
  - codeguruprofiler
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

Creates, updates, deletes, gets or lists a <code>frame_metric_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="frame_metric_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguruprofiler.frame_metric_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_frame_metric_data"
    values={[
        { label: 'batch_get_frame_metric_data', value: 'batch_get_frame_metric_data' }
    ]}
>
<TabItem value="batch_get_frame_metric_data">

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
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the time period for the returned time series values. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="end_times" /></td>
    <td><code>array</code></td>
    <td>List of instances, or time steps, in the time series. For example, if the period is one day (PT24H)), and the resolution is five minutes (PT5M), then there are 288 endTimes in the list that are each five minutes appart.</td>
</tr>
<tr>
    <td><CopyableCode code="frame_metric_data" /></td>
    <td><code>array</code></td>
    <td>Details of the metrics to request a time series of values. The metric includes the name of the frame, the aggregation type to calculate the metric value for the frame, and the thread states to use to get the count for the metric value of the frame.</td>
</tr>
<tr>
    <td><CopyableCode code="resolution" /></td>
    <td><code>string</code></td>
    <td>Resolution or granularity of the profile data used to generate the time series. This is the value used to jump through time steps in a time series. There are 3 valid values. P1D — 1 day PT1H — 1 hour PT5M — 5 minutes (PT5M, PT1H, P1D)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the time period for the returned time series values. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="unprocessed_end_times" /></td>
    <td><code>object</code></td>
    <td>List of instances which remained unprocessed. This will create a missing time step in the list of end times.</td>
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
    <td><a href="#batch_get_frame_metric_data"><CopyableCode code="batch_get_frame_metric_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profiling_group_name"><code>profiling_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-period"><code>period</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-targetResolution"><code>targetResolution</code></a></td>
    <td>Returns the time series of values for a requested list of frame metrics from a time period.</td>
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
<tr id="parameter-profiling_group_name">
    <td><CopyableCode code="profiling_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the profiling group associated with the the frame metrics used to return the time series values.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the time period for the returned time series values. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</td>
</tr>
<tr id="parameter-period">
    <td><CopyableCode code="period" /></td>
    <td><code>string</code></td>
    <td>The duration of the frame metrics used to return the time series values. Specify using the ISO 8601 format. The maximum period duration is one day (PT24H or P1D).</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the time period for the frame metrics used to return the time series values. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</td>
</tr>
<tr id="parameter-targetResolution">
    <td><CopyableCode code="targetResolution" /></td>
    <td><code>string</code></td>
    <td>The requested resolution of time steps for the returned time series of values. If the requested target resolution is not available due to data not being retained we provide a best effort result by falling back to the most granular available resolution after the target resolution. There are 3 valid values. P1D — 1 day PT1H — 1 hour PT5M — 5 minutes</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_frame_metric_data"
    values={[
        { label: 'batch_get_frame_metric_data', value: 'batch_get_frame_metric_data' }
    ]}
>
<TabItem value="batch_get_frame_metric_data">

Returns the time series of values for a requested list of frame metrics from a time period.

```sql
SELECT
end_time,
end_times,
frame_metric_data,
resolution,
start_time,
unprocessed_end_times
FROM aws.codeguruprofiler.frame_metric_datas
WHERE profiling_group_name = '{{ profiling_group_name }}' -- required
AND region = '{{ region }}' -- required
AND endTime = '{{ endTime }}'
AND period = '{{ period }}'
AND startTime = '{{ startTime }}'
AND targetResolution = '{{ targetResolution }}'
;
```
</TabItem>
</Tabs>
