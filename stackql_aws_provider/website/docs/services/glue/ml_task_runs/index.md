--- 
title: ml_task_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - ml_task_runs
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

Creates, updates, deletes, gets or lists a <code>ml_task_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ml_task_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.ml_task_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ml_task_run"
    values={[
        { label: 'get_ml_task_run', value: 'get_ml_task_run' },
        { label: 'get_ml_task_runs', value: 'get_ml_task_runs' }
    ]}
>
<TabItem value="get_ml_task_run">

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
    <td><CopyableCode code="CompletedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when this task run was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorString" /></td>
    <td><code>string</code></td>
    <td>The error strings that are associated with the task run.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionTime" /></td>
    <td><code>integer</code></td>
    <td>The amount of time (in seconds) that the task run consumed resources.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when this task run was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="LogGroupName" /></td>
    <td><code>string</code></td>
    <td>The names of the log groups that are associated with the task run.</td>
</tr>
<tr>
    <td><CopyableCode code="Properties" /></td>
    <td><code>object</code></td>
    <td>The list of properties that are associated with the task run.</td>
</tr>
<tr>
    <td><CopyableCode code="StartedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when this task run started.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status for this task run. (STARTING, RUNNING, STOPPING, STOPPED, SUCCEEDED, FAILED, TIMEOUT)</td>
</tr>
<tr>
    <td><CopyableCode code="TaskRunId" /></td>
    <td><code>string</code></td>
    <td>The unique run identifier associated with this run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TransformId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the task run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_ml_task_runs">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token, if more results are available.</td>
</tr>
<tr>
    <td><CopyableCode code="TaskRuns" /></td>
    <td><code>array</code></td>
    <td>A list of task runs that are associated with the transform.</td>
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
    <td><a href="#get_ml_task_run"><CopyableCode code="get_ml_task_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details for a specific task run on a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can check the stats of any task run by calling GetMLTaskRun with the TaskRunID and its parent transform's TransformID.</td>
</tr>
<tr>
    <td><a href="#get_ml_task_runs"><CopyableCode code="get_ml_task_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of runs for a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can get a sortable, filterable list of machine learning task runs by calling GetMLTaskRuns with their parent transform's TransformID and other optional parameters as documented in this section. This operation returns a list of historic runs and must be paginated.</td>
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
    defaultValue="get_ml_task_run"
    values={[
        { label: 'get_ml_task_run', value: 'get_ml_task_run' },
        { label: 'get_ml_task_runs', value: 'get_ml_task_runs' }
    ]}
>
<TabItem value="get_ml_task_run">

Gets details for a specific task run on a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can check the stats of any task run by calling GetMLTaskRun with the TaskRunID and its parent transform's TransformID.

```sql
SELECT
CompletedOn,
ErrorString,
ExecutionTime,
LastModifiedOn,
LogGroupName,
Properties,
StartedOn,
Status,
TaskRunId,
TransformId
FROM aws.glue.ml_task_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_ml_task_runs">

Gets a list of runs for a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can get a sortable, filterable list of machine learning task runs by calling GetMLTaskRuns with their parent transform's TransformID and other optional parameters as documented in this section. This operation returns a list of historic runs and must be paginated.

```sql
SELECT
NextToken,
TaskRuns
FROM aws.glue.ml_task_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
