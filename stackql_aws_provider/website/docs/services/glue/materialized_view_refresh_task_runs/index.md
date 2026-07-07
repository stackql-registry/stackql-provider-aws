--- 
title: materialized_view_refresh_task_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - materialized_view_refresh_task_runs
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

Creates, updates, deletes, gets or lists a <code>materialized_view_refresh_task_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="materialized_view_refresh_task_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.materialized_view_refresh_task_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_materialized_view_refresh_task_run"
    values={[
        { label: 'get_materialized_view_refresh_task_run', value: 'get_materialized_view_refresh_task_run' },
        { label: 'list_materialized_view_refresh_task_runs', value: 'list_materialized_view_refresh_task_runs' }
    ]}
>
<TabItem value="get_materialized_view_refresh_task_run">

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
    <td><CopyableCode code="CatalogId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Data Catalog where the table resides. If none is supplied, the account ID is used by default. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
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
    <td><CopyableCode code="MaterializedViewRefreshTaskRunId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the materialized view refresh task run. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessedBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of bytes the refresh task run has scanned to refresh the materialized view.</td>
</tr>
<tr>
    <td><CopyableCode code="RefreshType" /></td>
    <td><code>string</code></td>
    <td>The type of the refresh task run. Either FULL or INCREMENTAL. (FULL, INCREMENTAL)</td>
</tr>
<tr>
    <td><CopyableCode code="Role" /></td>
    <td><code>string</code></td>
    <td>The IAM role that the service assumes to generate statistics.</td>
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
    <td>The name of the table for which statistics is generated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_materialized_view_refresh_task_runs">

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
    <td><CopyableCode code="CatalogId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Data Catalog where the table resides. If none is supplied, the account ID is used by default. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
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
    <td><CopyableCode code="MaterializedViewRefreshTaskRunId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the materialized view refresh task run. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessedBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of bytes the refresh task run has scanned to refresh the materialized view.</td>
</tr>
<tr>
    <td><CopyableCode code="RefreshType" /></td>
    <td><code>string</code></td>
    <td>The type of the refresh task run. Either FULL or INCREMENTAL. (FULL, INCREMENTAL)</td>
</tr>
<tr>
    <td><CopyableCode code="Role" /></td>
    <td><code>string</code></td>
    <td>The IAM role that the service assumes to generate statistics.</td>
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
    <td>The name of the table for which statistics is generated.</td>
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
    <td><a href="#get_materialized_view_refresh_task_run"><CopyableCode code="get_materialized_view_refresh_task_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the associated metadata/information for a task run, given a task run ID.</td>
</tr>
<tr>
    <td><a href="#list_materialized_view_refresh_task_runs"><CopyableCode code="list_materialized_view_refresh_task_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all task runs for a particular account.</td>
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
    defaultValue="get_materialized_view_refresh_task_run"
    values={[
        { label: 'get_materialized_view_refresh_task_run', value: 'get_materialized_view_refresh_task_run' },
        { label: 'list_materialized_view_refresh_task_runs', value: 'list_materialized_view_refresh_task_runs' }
    ]}
>
<TabItem value="get_materialized_view_refresh_task_run">

Get the associated metadata/information for a task run, given a task run ID.

```sql
SELECT
CatalogId,
CreationTime,
CustomerId,
DPUSeconds,
DatabaseName,
EndTime,
ErrorMessage,
LastUpdated,
MaterializedViewRefreshTaskRunId,
ProcessedBytes,
RefreshType,
Role,
StartTime,
Status,
TableName
FROM aws.glue.materialized_view_refresh_task_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_materialized_view_refresh_task_runs">

List all task runs for a particular account.

```sql
SELECT
CatalogId,
CreationTime,
CustomerId,
DPUSeconds,
DatabaseName,
EndTime,
ErrorMessage,
LastUpdated,
MaterializedViewRefreshTaskRunId,
ProcessedBytes,
RefreshType,
Role,
StartTime,
Status,
TableName
FROM aws.glue.materialized_view_refresh_task_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
