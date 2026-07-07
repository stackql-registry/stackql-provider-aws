--- 
title: column_statistics_task_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - column_statistics_task_runs
  - glue
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

Creates, updates, deletes, gets or lists a <code>column_statistics_task_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="column_statistics_task_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.column_statistics_task_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_column_statistics_task_runs"
    values={[
        { label: 'get_column_statistics_task_runs', value: 'get_column_statistics_task_runs' },
        { label: 'get_column_statistics_task_run', value: 'get_column_statistics_task_run' },
        { label: 'list_column_statistics_task_runs', value: 'list_column_statistics_task_runs' }
    ]}
>
<TabItem value="get_column_statistics_task_runs">

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
    <td><CopyableCode code="ColumnStatisticsTaskRuns" /></td>
    <td><code>array</code></td>
    <td>A list of column statistics task runs.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A continuation token, if not all task runs have yet been returned.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_column_statistics_task_run">

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
    <td><CopyableCode code="CatalogID" /></td>
    <td><code>string</code></td>
    <td>The ID of the Data Catalog where the table resides. If none is supplied, the Amazon Web Services account ID is used by default. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ColumnNameList" /></td>
    <td><code>array</code></td>
    <td>A list of the column names. If none is supplied, all column names for the table will be used by default.</td>
</tr>
<tr>
    <td><CopyableCode code="ColumnStatisticsTaskRunId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the particular column statistics task run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ComputationType" /></td>
    <td><code>string</code></td>
    <td>The type of column statistics computation. (FULL, INCREMENTAL)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that this task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomerId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="DPUSeconds" /></td>
    <td><code>number (double)</code></td>
    <td>The calculated DPU usage in seconds for all autoscaled workers.</td>
</tr>
<tr>
    <td><CopyableCode code="DatabaseName" /></td>
    <td><code>string</code></td>
    <td>The database where the table resides.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>The error message for the job. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last point in time when this task was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfWorkers" /></td>
    <td><code>integer</code></td>
    <td>The number of workers used to generate column statistics. The job is preconfigured to autoscale up to 25 instances.</td>
</tr>
<tr>
    <td><CopyableCode code="Role" /></td>
    <td><code>string</code></td>
    <td>The IAM role that the service assumes to generate statistics.</td>
</tr>
<tr>
    <td><CopyableCode code="SampleSize" /></td>
    <td><code>number (double)</code></td>
    <td>The percentage of rows used to generate statistics. If none is supplied, the entire table will be used to generate stats.</td>
</tr>
<tr>
    <td><CopyableCode code="SecurityConfiguration" /></td>
    <td><code>string</code></td>
    <td>Name of the security configuration that is used to encrypt CloudWatch logs for the column stats task run.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the task run. (STARTING, RUNNING, SUCCEEDED, FAILED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="TableName" /></td>
    <td><code>string</code></td>
    <td>The name of the table for which column statistics is generated.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkerType" /></td>
    <td><code>string</code></td>
    <td>The type of workers being used for generating stats. The default is g.1x. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_column_statistics_task_runs">

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
    <td><CopyableCode code="column_statistics_task_run_id" /></td>
    <td><code>string</code></td>
    <td>A list of column statistics task run IDs.</td>
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
    <td><a href="#get_column_statistics_task_runs"><CopyableCode code="get_column_statistics_task_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about all runs associated with the specified table.</td>
</tr>
<tr>
    <td><a href="#get_column_statistics_task_run"><CopyableCode code="get_column_statistics_task_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the associated metadata/information for a task run, given a task run ID.</td>
</tr>
<tr>
    <td><a href="#list_column_statistics_task_runs"><CopyableCode code="list_column_statistics_task_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all task runs for a particular account.</td>
</tr>
<tr>
    <td><a href="#start_column_statistics_task_run_schedule"><CopyableCode code="start_column_statistics_task_run_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>Starts a column statistics task run schedule.</td>
</tr>
<tr>
    <td><a href="#stop_column_statistics_task_run_schedule"><CopyableCode code="stop_column_statistics_task_run_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>Stops a column statistics task run schedule.</td>
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
    defaultValue="get_column_statistics_task_runs"
    values={[
        { label: 'get_column_statistics_task_runs', value: 'get_column_statistics_task_runs' },
        { label: 'get_column_statistics_task_run', value: 'get_column_statistics_task_run' },
        { label: 'list_column_statistics_task_runs', value: 'list_column_statistics_task_runs' }
    ]}
>
<TabItem value="get_column_statistics_task_runs">

Retrieves information about all runs associated with the specified table.

```sql
SELECT
ColumnStatisticsTaskRuns,
NextToken
FROM aws.glue.column_statistics_task_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_column_statistics_task_run">

Get the associated metadata/information for a task run, given a task run ID.

```sql
SELECT
CatalogID,
ColumnNameList,
ColumnStatisticsTaskRunId,
ComputationType,
CreationTime,
CustomerId,
DPUSeconds,
DatabaseName,
EndTime,
ErrorMessage,
LastUpdated,
NumberOfWorkers,
Role,
SampleSize,
SecurityConfiguration,
StartTime,
Status,
TableName,
WorkerType
FROM aws.glue.column_statistics_task_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_column_statistics_task_runs">

List all task runs for a particular account.

```sql
SELECT
column_statistics_task_run_id
FROM aws.glue.column_statistics_task_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_column_statistics_task_run_schedule"
    values={[
        { label: 'start_column_statistics_task_run_schedule', value: 'start_column_statistics_task_run_schedule' },
        { label: 'stop_column_statistics_task_run_schedule', value: 'stop_column_statistics_task_run_schedule' }
    ]}
>
<TabItem value="start_column_statistics_task_run_schedule">

Starts a column statistics task run schedule.

```sql
EXEC aws.glue.column_statistics_task_runs.start_column_statistics_task_run_schedule 
@region='{{ region }}' --required 
@@json=
'{
"DatabaseName": "{{ DatabaseName }}", 
"TableName": "{{ TableName }}"
}'
;
```
</TabItem>
<TabItem value="stop_column_statistics_task_run_schedule">

Stops a column statistics task run schedule.

```sql
EXEC aws.glue.column_statistics_task_runs.stop_column_statistics_task_run_schedule 
@region='{{ region }}' --required 
@@json=
'{
"DatabaseName": "{{ DatabaseName }}", 
"TableName": "{{ TableName }}"
}'
;
```
</TabItem>
</Tabs>
