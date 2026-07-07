--- 
title: metric_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - metric_datas
  - cloudwatch
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

Creates, updates, deletes, gets or lists a <code>metric_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metric_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudwatch.metric_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_metric_data"
    values={[
        { label: 'get_metric_data', value: 'get_metric_data' }
    ]}
>
<TabItem value="get_metric_data">

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
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The short name you specified to represent this metric.</td>
</tr>
<tr>
    <td><CopyableCode code="Label" /></td>
    <td><code>string</code></td>
    <td>The human-readable label associated with the data.</td>
</tr>
<tr>
    <td><CopyableCode code="Messages" /></td>
    <td><code>array</code></td>
    <td>A list of messages with additional information about the data returned.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusCode" /></td>
    <td><code>string</code></td>
    <td>The status of the returned data. Complete indicates that all data points in the requested time range were returned. PartialData means that an incomplete set of data points were returned. You can use the NextToken value that was returned and repeat your request to get more data points. NextToken is not returned if you are performing a math expression. InternalError indicates that an error occurred. Retry your request using NextToken, if present. (Complete, InternalError, PartialData, Forbidden)</td>
</tr>
<tr>
    <td><CopyableCode code="Timestamps" /></td>
    <td><code>array</code></td>
    <td>The timestamps for the data points, formatted in Unix timestamp format. The number of timestamps always matches the number of values and the value for Timestamps&#91;x&#93; is Values&#91;x&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="Values" /></td>
    <td><code>array</code></td>
    <td>The data points for the metric corresponding to Timestamps. The number of values always matches the number of timestamps and the timestamp for Values&#91;x&#93; is Timestamps&#91;x&#93;.</td>
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
    <td><a href="#get_metric_data"><CopyableCode code="get_metric_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>You can use the GetMetricData API to retrieve CloudWatch metric values. The operation can also include a CloudWatch Metrics Insights query, and one or more metric math functions. A GetMetricData operation that does not include a query can retrieve as many as 500 different metrics in a single request, with a total of as many as 100,800 data points. You can also optionally perform metric math expressions on the values of the returned statistics, to create new time series that represent new insights into your data. For example, using Lambda metrics, you could divide the Errors metric by the Invocations metric to get an error rate time series. For more information about metric math expressions, see Metric Math Syntax and Functions in the Amazon CloudWatch User Guide. If you include a Metrics Insights query, each GetMetricData operation can include only one query. But the same GetMetricData operation can also retrieve other metrics. Metrics Insights queries can query only the most recent three hours of metric data. For more information about Metrics Insights, see Query your metrics with CloudWatch Metrics Insights. Calls to the GetMetricData API have a different pricing structure than calls to GetMetricStatistics. For more information about pricing, see Amazon CloudWatch Pricing. Amazon CloudWatch retains metric data as follows: Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a StorageResolution of 1. Data points with a period of 60 seconds (1-minute) are available for 15 days. Data points with a period of 300 seconds (5-minute) are available for 63 days. Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months). Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour. If you omit Unit in your request, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions. Using Metrics Insights queries with metric math You can't mix a Metric Insights query and metric math syntax in the same expression, but you can reference results from a Metrics Insights query within other Metric math expressions. A Metrics Insights query without a GROUP BY clause returns a single time-series (TS), and can be used as input for a metric math expression that expects a single time series. A Metrics Insights query with a GROUP BY clause returns an array of time-series (TS&#91;&#93;), and can be used as input for a metric math expression that expects an array of time series.</td>
</tr>
<tr>
    <td><a href="#put_metric_data"><CopyableCode code="put_metric_data" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Namespace"><code>Namespace</code></a></td>
    <td></td>
    <td>Publishes metric data to Amazon CloudWatch. CloudWatch associates the data with the specified metric. If the specified metric does not exist, CloudWatch creates the metric. When CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to ListMetrics. You can publish metrics with associated entity data (so that related telemetry can be found and viewed together), or publish metric data by itself. To send entity data with your metrics, use the EntityMetricData parameter. To send metrics without entity data, use the MetricData parameter. The EntityMetricData structure includes MetricData structures for the metric data. You can publish either individual values in the Value field, or arrays of values and the number of times each value occurred during the period by using the Values and Counts fields in the MetricData structure. Using the Values and Counts method enables you to publish up to 150 values per metric with one PutMetricData request, and supports retrieving percentile statistics on this data. Each PutMetricData request is limited to 1 MB in size for HTTP POST requests. You can send a payload compressed by gzip. Each request is also limited to no more than 1000 different metrics (across both the MetricData and EntityMetricData properties). Although the Value parameter accepts numbers of type Double, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported. You can use up to 30 dimensions per metric to further clarify what data the metric collects. Each dimension consists of a Name and Value pair. For more information about specifying dimensions, see Publishing Metrics in the Amazon CloudWatch User Guide. You specify the time stamp to be associated with each data point. You can specify time stamps that are as much as two weeks before the current date, and as much as 2 hours after the current day and time. Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for GetMetricData or GetMetricStatistics from the time they are submitted. Data points with time stamps between 3 and 24 hours ago can take as much as 2 hours to become available for GetMetricData or GetMetricStatistics. CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true: The SampleCount value of the statistic set is 1 and Min, Max, and Sum are all equal. The Min and Max are equal, and Sum is equal to Min multiplied by SampleCount.</td>
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
    defaultValue="get_metric_data"
    values={[
        { label: 'get_metric_data', value: 'get_metric_data' }
    ]}
>
<TabItem value="get_metric_data">

You can use the GetMetricData API to retrieve CloudWatch metric values. The operation can also include a CloudWatch Metrics Insights query, and one or more metric math functions. A GetMetricData operation that does not include a query can retrieve as many as 500 different metrics in a single request, with a total of as many as 100,800 data points. You can also optionally perform metric math expressions on the values of the returned statistics, to create new time series that represent new insights into your data. For example, using Lambda metrics, you could divide the Errors metric by the Invocations metric to get an error rate time series. For more information about metric math expressions, see Metric Math Syntax and Functions in the Amazon CloudWatch User Guide. If you include a Metrics Insights query, each GetMetricData operation can include only one query. But the same GetMetricData operation can also retrieve other metrics. Metrics Insights queries can query only the most recent three hours of metric data. For more information about Metrics Insights, see Query your metrics with CloudWatch Metrics Insights. Calls to the GetMetricData API have a different pricing structure than calls to GetMetricStatistics. For more information about pricing, see Amazon CloudWatch Pricing. Amazon CloudWatch retains metric data as follows: Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a StorageResolution of 1. Data points with a period of 60 seconds (1-minute) are available for 15 days. Data points with a period of 300 seconds (5-minute) are available for 63 days. Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months). Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour. If you omit Unit in your request, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions. Using Metrics Insights queries with metric math You can't mix a Metric Insights query and metric math syntax in the same expression, but you can reference results from a Metrics Insights query within other Metric math expressions. A Metrics Insights query without a GROUP BY clause returns a single time-series (TS), and can be used as input for a metric math expression that expects a single time series. A Metrics Insights query with a GROUP BY clause returns an array of time-series (TS[]), and can be used as input for a metric math expression that expects an array of time series.

```sql
SELECT
Id,
Label,
Messages,
StatusCode,
Timestamps,
Values
FROM aws.cloudwatch.metric_datas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_metric_data"
    values={[
        { label: 'put_metric_data', value: 'put_metric_data' }
    ]}
>
<TabItem value="put_metric_data">

Publishes metric data to Amazon CloudWatch. CloudWatch associates the data with the specified metric. If the specified metric does not exist, CloudWatch creates the metric. When CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to ListMetrics. You can publish metrics with associated entity data (so that related telemetry can be found and viewed together), or publish metric data by itself. To send entity data with your metrics, use the EntityMetricData parameter. To send metrics without entity data, use the MetricData parameter. The EntityMetricData structure includes MetricData structures for the metric data. You can publish either individual values in the Value field, or arrays of values and the number of times each value occurred during the period by using the Values and Counts fields in the MetricData structure. Using the Values and Counts method enables you to publish up to 150 values per metric with one PutMetricData request, and supports retrieving percentile statistics on this data. Each PutMetricData request is limited to 1 MB in size for HTTP POST requests. You can send a payload compressed by gzip. Each request is also limited to no more than 1000 different metrics (across both the MetricData and EntityMetricData properties). Although the Value parameter accepts numbers of type Double, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported. You can use up to 30 dimensions per metric to further clarify what data the metric collects. Each dimension consists of a Name and Value pair. For more information about specifying dimensions, see Publishing Metrics in the Amazon CloudWatch User Guide. You specify the time stamp to be associated with each data point. You can specify time stamps that are as much as two weeks before the current date, and as much as 2 hours after the current day and time. Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for GetMetricData or GetMetricStatistics from the time they are submitted. Data points with time stamps between 3 and 24 hours ago can take as much as 2 hours to become available for GetMetricData or GetMetricStatistics. CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true: The SampleCount value of the statistic set is 1 and Min, Max, and Sum are all equal. The Min and Max are equal, and Sum is equal to Min multiplied by SampleCount.

```sql
REPLACE aws.cloudwatch.metric_datas
SET 
Namespace = '{{ Namespace }}',
MetricData = '{{ MetricData }}',
EntityMetricData = '{{ EntityMetricData }}',
StrictEntityValidation = {{ StrictEntityValidation }}
WHERE 
region = '{{ region }}' --required
AND Namespace = '{{ Namespace }}' --required;
```
</TabItem>
</Tabs>
