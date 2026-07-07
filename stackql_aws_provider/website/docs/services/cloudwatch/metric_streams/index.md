--- 
title: metric_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - metric_streams
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

Creates, updates, deletes, gets or lists a <code>metric_streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metric_streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudwatch.metric_streams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_metric_stream"
    values={[
        { label: 'get_metric_stream', value: 'get_metric_stream' }
    ]}
>
<TabItem value="get_metric_stream">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the metric stream.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the metric stream was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ExcludeFilters" /></td>
    <td><code>array</code></td>
    <td>If this array of metric namespaces is present, then these namespaces are the only metric namespaces that are not streamed by this metric stream. In this case, all other metric namespaces in the account are streamed by this metric stream.</td>
</tr>
<tr>
    <td><CopyableCode code="FirehoseArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon Kinesis Data Firehose delivery stream that is used by this metric stream.</td>
</tr>
<tr>
    <td><CopyableCode code="IncludeFilters" /></td>
    <td><code>array</code></td>
    <td>If this array of metric namespaces is present, then these namespaces are the only metric namespaces that are streamed by this metric stream.</td>
</tr>
<tr>
    <td><CopyableCode code="IncludeLinkedAccountsMetrics" /></td>
    <td><code>boolean</code></td>
    <td>If this is true and this metric stream is in a monitoring account, then the stream includes metrics from source accounts that the monitoring account is linked to.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date of the most recent update to the metric stream's configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the metric stream.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputFormat" /></td>
    <td><code>string</code></td>
    <td>The output format for the stream. Valid values are json, opentelemetry1.0, and opentelemetry0.7. For more information about metric stream output formats, see Metric streams output formats. (json, opentelemetry0.7, opentelemetry1.0)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that is used by this metric stream.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the metric stream. The possible values are running and stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="StatisticsConfigurations" /></td>
    <td><code>array</code></td>
    <td>Each entry in this array displays information about one or more metrics that include additional statistics in the metric stream. For more information about the additional statistics, see CloudWatch statistics definitions.</td>
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
    <td><a href="#get_metric_stream"><CopyableCode code="get_metric_stream" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the metric stream that you specify.</td>
</tr>
<tr>
    <td><a href="#put_metric_stream"><CopyableCode code="put_metric_stream" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FirehoseArn"><code>FirehoseArn</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-OutputFormat"><code>OutputFormat</code></a></td>
    <td></td>
    <td>Creates or updates a metric stream. Metric streams can automatically stream CloudWatch metrics to Amazon Web Services destinations, including Amazon S3, and to many third-party solutions. For more information, see Using Metric Streams. To create a metric stream, you must be signed in to an account that has the iam:PassRole permission and either the CloudWatchFullAccess policy or the cloudwatch:PutMetricStream permission. When you create or update a metric stream, you choose one of the following: Stream metrics from all metric namespaces in the account. Stream metrics from all metric namespaces in the account, except for the namespaces that you list in ExcludeFilters. Stream metrics from only the metric namespaces that you list in IncludeFilters. By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. You can use the StatisticsConfigurations parameter to have the metric stream send additional statistics in the stream. Streaming additional statistics incurs additional costs. For more information, see Amazon CloudWatch Pricing. When you use PutMetricStream to create a new metric stream, the stream is created in the running state. If you use it to update an existing stream, the state of the stream is not changed. If you are using CloudWatch cross-account observability and you create a metric stream in a monitoring account, you can choose whether to include metrics from source accounts in the stream. For more information, see CloudWatch cross-account observability.</td>
</tr>
<tr>
    <td><a href="#delete_metric_stream"><CopyableCode code="delete_metric_stream" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently deletes the metric stream that you specify.</td>
</tr>
<tr>
    <td><a href="#list_metric_streams"><CopyableCode code="list_metric_streams" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of metric streams in this account.</td>
</tr>
<tr>
    <td><a href="#start_metric_streams"><CopyableCode code="start_metric_streams" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Names"><code>Names</code></a></td>
    <td></td>
    <td>Starts the streaming of metrics for one or more of your metric streams.</td>
</tr>
<tr>
    <td><a href="#stop_metric_streams"><CopyableCode code="stop_metric_streams" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Names"><code>Names</code></a></td>
    <td></td>
    <td>Stops the streaming of metrics for one or more of your metric streams.</td>
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
    defaultValue="get_metric_stream"
    values={[
        { label: 'get_metric_stream', value: 'get_metric_stream' }
    ]}
>
<TabItem value="get_metric_stream">

Returns information about the metric stream that you specify.

```sql
SELECT
Arn,
CreationDate,
ExcludeFilters,
FirehoseArn,
IncludeFilters,
IncludeLinkedAccountsMetrics,
LastUpdateDate,
Name,
OutputFormat,
RoleArn,
State,
StatisticsConfigurations
FROM aws.cloudwatch.metric_streams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_metric_stream"
    values={[
        { label: 'put_metric_stream', value: 'put_metric_stream' }
    ]}
>
<TabItem value="put_metric_stream">

Creates or updates a metric stream. Metric streams can automatically stream CloudWatch metrics to Amazon Web Services destinations, including Amazon S3, and to many third-party solutions. For more information, see Using Metric Streams. To create a metric stream, you must be signed in to an account that has the iam:PassRole permission and either the CloudWatchFullAccess policy or the cloudwatch:PutMetricStream permission. When you create or update a metric stream, you choose one of the following: Stream metrics from all metric namespaces in the account. Stream metrics from all metric namespaces in the account, except for the namespaces that you list in ExcludeFilters. Stream metrics from only the metric namespaces that you list in IncludeFilters. By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. You can use the StatisticsConfigurations parameter to have the metric stream send additional statistics in the stream. Streaming additional statistics incurs additional costs. For more information, see Amazon CloudWatch Pricing. When you use PutMetricStream to create a new metric stream, the stream is created in the running state. If you use it to update an existing stream, the state of the stream is not changed. If you are using CloudWatch cross-account observability and you create a metric stream in a monitoring account, you can choose whether to include metrics from source accounts in the stream. For more information, see CloudWatch cross-account observability.

```sql
REPLACE aws.cloudwatch.metric_streams
SET 
Name = '{{ Name }}',
IncludeFilters = '{{ IncludeFilters }}',
ExcludeFilters = '{{ ExcludeFilters }}',
FirehoseArn = '{{ FirehoseArn }}',
RoleArn = '{{ RoleArn }}',
OutputFormat = '{{ OutputFormat }}',
Tags = '{{ Tags }}',
StatisticsConfigurations = '{{ StatisticsConfigurations }}',
IncludeLinkedAccountsMetrics = {{ IncludeLinkedAccountsMetrics }}
WHERE 
region = '{{ region }}' --required
AND FirehoseArn = '{{ FirehoseArn }}' --required
AND RoleArn = '{{ RoleArn }}' --required
AND OutputFormat = '{{ OutputFormat }}' --required
RETURNING
Arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_metric_stream"
    values={[
        { label: 'delete_metric_stream', value: 'delete_metric_stream' }
    ]}
>
<TabItem value="delete_metric_stream">

Permanently deletes the metric stream that you specify.

```sql
DELETE FROM aws.cloudwatch.metric_streams
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_metric_streams"
    values={[
        { label: 'list_metric_streams', value: 'list_metric_streams' },
        { label: 'start_metric_streams', value: 'start_metric_streams' },
        { label: 'stop_metric_streams', value: 'stop_metric_streams' }
    ]}
>
<TabItem value="list_metric_streams">

Returns a list of metric streams in this account.

```sql
EXEC aws.cloudwatch.metric_streams.list_metric_streams 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
<TabItem value="start_metric_streams">

Starts the streaming of metrics for one or more of your metric streams.

```sql
EXEC aws.cloudwatch.metric_streams.start_metric_streams 
@region='{{ region }}' --required 
@@json=
'{
"Names": "{{ Names }}"
}'
;
```
</TabItem>
<TabItem value="stop_metric_streams">

Stops the streaming of metrics for one or more of your metric streams.

```sql
EXEC aws.cloudwatch.metric_streams.stop_metric_streams 
@region='{{ region }}' --required 
@@json=
'{
"Names": "{{ Names }}"
}'
;
```
</TabItem>
</Tabs>
