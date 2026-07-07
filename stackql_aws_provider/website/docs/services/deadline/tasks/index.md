--- 
title: tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tasks
  - deadline
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

Creates, updates, deletes, gets or lists a <code>tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_task"
    values={[
        { label: 'get_task', value: 'get_task' },
        { label: 'list_tasks', value: 'list_tasks' },
        { label: 'search_tasks', value: 'search_tasks' },
        { label: 'batch_get_task', value: 'batch_get_task' }
    ]}
>
<TabItem value="get_task">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user or system that created this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="endedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource ended running.</td>
</tr>
<tr>
    <td><CopyableCode code="failureRetryCount" /></td>
    <td><code>integer</code></td>
    <td>The number of times that the task failed and was retried.</td>
</tr>
<tr>
    <td><CopyableCode code="latestSessionActionId" /></td>
    <td><code>string</code></td>
    <td>The latest session action ID for the task. (pattern: &lt;code&gt;sessionaction-&#91;0-9a-f&#93;&#123;32&#125;-(0|(&#91;1-9&#93;&#91;0-9&#93;&#123;0,9&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The parameters for the task.</td>
</tr>
<tr>
    <td><CopyableCode code="runStatus" /></td>
    <td><code>string</code></td>
    <td>The run status for the task. (PENDING, READY, ASSIGNED, STARTING, SCHEDULED, INTERRUPTING, RUNNING, SUSPENDED, CANCELED, FAILED, SUCCEEDED, NOT_COMPATIBLE)</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource started running.</td>
</tr>
<tr>
    <td><CopyableCode code="targetRunStatus" /></td>
    <td><code>string</code></td>
    <td>The run status with which to start the task. (READY, FAILED, SUCCEEDED, CANCELED, SUSPENDED, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>The task ID. (pattern: &lt;code&gt;task-&#91;0-9a-f&#93;&#123;32&#125;-(0|(&#91;1-9&#93;&#91;0-9&#93;&#123;0,9&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tasks">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user or system that created this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="endedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource ended running.</td>
</tr>
<tr>
    <td><CopyableCode code="failureRetryCount" /></td>
    <td><code>integer</code></td>
    <td>The number of times that the task failed and was retried.</td>
</tr>
<tr>
    <td><CopyableCode code="latestSessionActionId" /></td>
    <td><code>string</code></td>
    <td>The latest session action ID for the task. (pattern: &lt;code&gt;sessionaction-&#91;0-9a-f&#93;&#123;32&#125;-(0|(&#91;1-9&#93;&#91;0-9&#93;&#123;0,9&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The task parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="runStatus" /></td>
    <td><code>string</code></td>
    <td>The run status of the task. (PENDING, READY, ASSIGNED, STARTING, SCHEDULED, INTERRUPTING, RUNNING, SUSPENDED, CANCELED, FAILED, SUCCEEDED, NOT_COMPATIBLE)</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource started running.</td>
</tr>
<tr>
    <td><CopyableCode code="targetRunStatus" /></td>
    <td><code>string</code></td>
    <td>The run status on which the started. (READY, FAILED, SUCCEEDED, CANCELED, SUSPENDED, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>The task ID. (pattern: &lt;code&gt;task-&#91;0-9a-f&#93;&#123;32&#125;-(0|(&#91;1-9&#93;&#91;0-9&#93;&#123;0,9&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_tasks">

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
    <td><CopyableCode code="nextItemOffset" /></td>
    <td><code>integer</code></td>
    <td>The next item offset for the search results.</td>
</tr>
<tr>
    <td><CopyableCode code="tasks" /></td>
    <td><code>array</code></td>
    <td>Tasks in the search.</td>
</tr>
<tr>
    <td><CopyableCode code="totalResults" /></td>
    <td><code>integer</code></td>
    <td>The total number of results in the search.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get_task">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>A list of errors for tasks that could not be retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="tasks" /></td>
    <td><code>array</code></td>
    <td>A list of tasks that were successfully retrieved.</td>
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
    <td><a href="#get_task"><CopyableCode code="get_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-step_id"><code>step_id</code></a>, <a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a task.</td>
</tr>
<tr>
    <td><a href="#list_tasks"><CopyableCode code="list_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-step_id"><code>step_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists tasks for a job.</td>
</tr>
<tr>
    <td><a href="#search_tasks"><CopyableCode code="search_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for tasks.</td>
</tr>
<tr>
    <td><a href="#batch_get_task"><CopyableCode code="batch_get_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves multiple tasks in a single request. This is a batch version of the GetTask API. The result of getting each task is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.</td>
</tr>
<tr>
    <td><a href="#update_task"><CopyableCode code="update_task" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-step_id"><code>step_id</code></a>, <a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetRunStatus"><code>targetRunStatus</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Updates a task.</td>
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
<tr id="parameter-farm_id">
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID to update.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The job ID to update.</td>
</tr>
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The queue ID to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-step_id">
    <td><CopyableCode code="step_id" /></td>
    <td><code>string</code></td>
    <td>The step ID to update.</td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The task ID to update.</td>
</tr>
<tr id="parameter-X-Amz-Client-Token">
    <td><CopyableCode code="X-Amz-Client-Token" /></td>
    <td><code>string</code></td>
    <td>The unique token which the server uses to recognize retries of the same request.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null to start from the beginning.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_task"
    values={[
        { label: 'get_task', value: 'get_task' },
        { label: 'list_tasks', value: 'list_tasks' },
        { label: 'search_tasks', value: 'search_tasks' },
        { label: 'batch_get_task', value: 'batch_get_task' }
    ]}
>
<TabItem value="get_task">

Gets a task.

```sql
SELECT
createdAt,
createdBy,
endedAt,
failureRetryCount,
latestSessionActionId,
parameters,
runStatus,
startedAt,
targetRunStatus,
taskId,
updatedAt,
updatedBy
FROM aws.deadline.tasks
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND job_id = '{{ job_id }}' -- required
AND step_id = '{{ step_id }}' -- required
AND task_id = '{{ task_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tasks">

Lists tasks for a job.

```sql
SELECT
createdAt,
createdBy,
endedAt,
failureRetryCount,
latestSessionActionId,
parameters,
runStatus,
startedAt,
targetRunStatus,
taskId,
updatedAt,
updatedBy
FROM aws.deadline.tasks
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND job_id = '{{ job_id }}' -- required
AND step_id = '{{ step_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_tasks">

Searches for tasks.

```sql
SELECT
nextItemOffset,
tasks,
totalResults
FROM aws.deadline.tasks
WHERE farm_id = '{{ farm_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="batch_get_task">

Retrieves multiple tasks in a single request. This is a batch version of the GetTask API. The result of getting each task is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.

```sql
SELECT
errors,
tasks
FROM aws.deadline.tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_task"
    values={[
        { label: 'update_task', value: 'update_task' }
    ]}
>
<TabItem value="update_task">

Updates a task.

```sql
UPDATE aws.deadline.tasks
SET 
targetRunStatus = '{{ targetRunStatus }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND job_id = '{{ job_id }}' --required
AND step_id = '{{ step_id }}' --required
AND task_id = '{{ task_id }}' --required
AND region = '{{ region }}' --required
AND targetRunStatus = '{{ targetRunStatus }}' --required
AND `X-Amz-Client-Token` = '{{ X-Amz-Client-Token}}';
```
</TabItem>
</Tabs>
