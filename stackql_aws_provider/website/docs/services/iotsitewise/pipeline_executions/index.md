--- 
title: pipeline_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - pipeline_executions
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>pipeline_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipeline_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.pipeline_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_pipeline_execution"
    values={[
        { label: 'describe_pipeline_execution', value: 'describe_pipeline_execution' },
        { label: 'list_pipeline_executions', value: 'list_pipeline_executions' }
    ]}
>
<TabItem value="describe_pipeline_execution">

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
    <td><CopyableCode code="compute_node_name" /></td>
    <td><code>string</code></td>
    <td>Reusable resource name with alphanumeric, hyphen, and underscore characters. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="depends_on" /></td>
    <td><code>array</code></td>
    <td>A list of compute node names that this node depends on.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the compute node execution completed, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_environment_variables" /></td>
    <td><code>object</code></td>
    <td>The fully resolved environment variables used for this compute node execution.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the compute node execution started, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current execution status of the compute node.</td>
</tr>
<tr>
    <td><CopyableCode code="task_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the task. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_name" /></td>
    <td><code>string</code></td>
    <td>Reusable resource name with alphanumeric, hyphen, and underscore characters. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_version" /></td>
    <td><code>string</code></td>
    <td>The task version that executed for this compute node. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_pipeline_executions">

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
    <td>The time the pipeline execution completed, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_priority" /></td>
    <td><code>integer</code></td>
    <td>Scheduling priority for the execution. When not specified, defaults to lowest priority.</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_execution_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the pipeline execution. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_version" /></td>
    <td><code>string</code></td>
    <td>The pipeline version this execution ran against. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the pipeline execution started, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current execution status of the pipeline.</td>
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
    <td><a href="#describe_pipeline_execution"><CopyableCode code="describe_pipeline_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-pipeline_name"><code>pipeline_name</code></a>, <a href="#parameter-pipeline_execution_id"><code>pipeline_execution_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves detailed information about a specific pipeline execution, including the overall execution status and the status of each individual compute node. Use this operation to monitor execution progress and inspect per-node results, environment variables, and error details.</td>
</tr>
<tr>
    <td><a href="#list_pipeline_executions"><CopyableCode code="list_pipeline_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-pipeline_name"><code>pipeline_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-startTimeAfter"><code>startTimeAfter</code></a>, <a href="#parameter-startTimeBefore"><code>startTimeBefore</code></a>, <a href="#parameter-endTimeAfter"><code>endTimeAfter</code></a>, <a href="#parameter-endTimeBefore"><code>endTimeBefore</code></a></td>
    <td>Lists pipeline executions for a specific pipeline in a workspace. Supports filtering by state and time range. State can be combined with either startTime or endTime filters. Time range filters are grouped: use startTime filters (startTimeAfter, startTimeBefore) or endTime filters (endTimeAfter, endTimeBefore), but not both. Combining startTime and endTime filters returns an InvalidRequestException. Note: endTime filters only return executions in terminal states, as in-progress executions have no endTime.</td>
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
<tr id="parameter-pipeline_execution_id">
    <td><CopyableCode code="pipeline_execution_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the pipeline execution.</td>
</tr>
<tr id="parameter-pipeline_name">
    <td><CopyableCode code="pipeline_name" /></td>
    <td><code>string</code></td>
    <td>The name of the pipeline.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workspace_name">
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace.</td>
</tr>
<tr id="parameter-endTimeAfter">
    <td><CopyableCode code="endTimeAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Inclusive lower bound on execution end time (ISO-8601). Only executions with endTime &gt;= endTimeAfter are returned. Cannot be combined with startTimeAfter or startTimeBefore. Only matches executions in terminal states.</td>
</tr>
<tr id="parameter-endTimeBefore">
    <td><CopyableCode code="endTimeBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Exclusive upper bound on execution end time (ISO-8601). Only executions with endTime &lt; endTimeBefore are returned. Cannot be combined with startTimeAfter or startTimeBefore. Only matches executions in terminal states.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per request. This is an upper bound; the actual number of results may be less. Default: 50.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
<tr id="parameter-startTimeAfter">
    <td><CopyableCode code="startTimeAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Inclusive lower bound on execution start time (ISO-8601). Only executions with startTime &gt;= startTimeAfter are returned. Cannot be combined with endTimeAfter or endTimeBefore.</td>
</tr>
<tr id="parameter-startTimeBefore">
    <td><CopyableCode code="startTimeBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Exclusive upper bound on execution start time (ISO-8601). Only executions with startTime &lt; startTimeBefore are returned. Cannot be combined with endTimeAfter or endTimeBefore.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Filter by execution state. If not specified, executions in all states are returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_pipeline_execution"
    values={[
        { label: 'describe_pipeline_execution', value: 'describe_pipeline_execution' },
        { label: 'list_pipeline_executions', value: 'list_pipeline_executions' }
    ]}
>
<TabItem value="describe_pipeline_execution">

Retrieves detailed information about a specific pipeline execution, including the overall execution status and the status of each individual compute node. Use this operation to monitor execution progress and inspect per-node results, environment variables, and error details.

```sql
SELECT
compute_node_name,
depends_on,
end_time,
execution_environment_variables,
start_time,
status,
task_arn,
task_name,
task_version
FROM aws.iotsitewise.pipeline_executions
WHERE workspace_name = '{{ workspace_name }}' -- required
AND pipeline_name = '{{ pipeline_name }}' -- required
AND pipeline_execution_id = '{{ pipeline_execution_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="list_pipeline_executions">

Lists pipeline executions for a specific pipeline in a workspace. Supports filtering by state and time range. State can be combined with either startTime or endTime filters. Time range filters are grouped: use startTime filters (startTimeAfter, startTimeBefore) or endTime filters (endTimeAfter, endTimeBefore), but not both. Combining startTime and endTime filters returns an InvalidRequestException. Note: endTime filters only return executions in terminal states, as in-progress executions have no endTime.

```sql
SELECT
end_time,
execution_priority,
pipeline_execution_id,
pipeline_version,
start_time,
status
FROM aws.iotsitewise.pipeline_executions
WHERE workspace_name = '{{ workspace_name }}' -- required
AND pipeline_name = '{{ pipeline_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND state = '{{ state }}'
AND startTimeAfter = '{{ startTimeAfter }}'
AND startTimeBefore = '{{ startTimeBefore }}'
AND endTimeAfter = '{{ endTimeAfter }}'
AND endTimeBefore = '{{ endTimeBefore }}'
;
```
</TabItem>
</Tabs>
