--- 
title: steps
hide_title: false
hide_table_of_contents: false
keywords:
  - steps
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

Creates, updates, deletes, gets or lists a <code>steps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="steps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.steps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_step"
    values={[
        { label: 'get_step', value: 'get_step' },
        { label: 'list_steps', value: 'list_steps' },
        { label: 'search_steps', value: 'search_steps' },
        { label: 'batch_get_step', value: 'batch_get_step' }
    ]}
>
<TabItem value="get_step">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that created this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_counts" /></td>
    <td><code>object</code></td>
    <td>The number of dependencies in the step.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the step. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource ended running.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_status" /></td>
    <td><code>string</code></td>
    <td>The life cycle status of the step. (CREATE_COMPLETE, UPDATE_IN_PROGRESS, UPDATE_FAILED, UPDATE_SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_status_message" /></td>
    <td><code>string</code></td>
    <td>A message that describes the lifecycle status of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="parameter_space" /></td>
    <td><code>object</code></td>
    <td>A list of step parameters and the combination expression for the step.</td>
</tr>
<tr>
    <td><CopyableCode code="required_capabilities" /></td>
    <td><code>object</code></td>
    <td>The required capabilities of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource started running.</td>
</tr>
<tr>
    <td><CopyableCode code="step_id" /></td>
    <td><code>string</code></td>
    <td>The step ID. (pattern: &lt;code&gt;step-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_task_run_status" /></td>
    <td><code>string</code></td>
    <td>The task status with which the job started. (READY, FAILED, SUCCEEDED, CANCELED, SUSPENDED, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="task_failure_retry_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of times tasks from the step failed and were retried.</td>
</tr>
<tr>
    <td><CopyableCode code="task_run_status" /></td>
    <td><code>string</code></td>
    <td>The task run status for the job. (PENDING, READY, ASSIGNED, STARTING, SCHEDULED, INTERRUPTING, RUNNING, SUSPENDED, CANCELED, FAILED, SUCCEEDED, NOT_COMPATIBLE)</td>
</tr>
<tr>
    <td><CopyableCode code="task_run_status_counts" /></td>
    <td><code>object</code></td>
    <td>The number of tasks running on the job.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_steps">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that created this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_counts" /></td>
    <td><code>object</code></td>
    <td>The number of dependencies for the step.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource ended running.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_status" /></td>
    <td><code>string</code></td>
    <td>The life cycle status. (CREATE_COMPLETE, UPDATE_IN_PROGRESS, UPDATE_FAILED, UPDATE_SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_status_message" /></td>
    <td><code>string</code></td>
    <td>A message that describes the lifecycle of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource started running.</td>
</tr>
<tr>
    <td><CopyableCode code="step_id" /></td>
    <td><code>string</code></td>
    <td>The step ID. (pattern: &lt;code&gt;step-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_task_run_status" /></td>
    <td><code>string</code></td>
    <td>The task status to update the job's tasks to. (READY, FAILED, SUCCEEDED, CANCELED, SUSPENDED, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="task_failure_retry_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of times tasks from the step failed and were retried.</td>
</tr>
<tr>
    <td><CopyableCode code="task_run_status" /></td>
    <td><code>string</code></td>
    <td>The task run status for the job. PENDING–pending and waiting for resources. READY–ready to process. ASSIGNED–assigned and will run next on a worker. SCHEDULED–scheduled to run on a worker. INTERRUPTING–being interrupted. RUNNING–running on a worker. SUSPENDED–the task is suspended. CANCELED–the task has been canceled. FAILED–the task has failed. SUCCEEDED–the task has succeeded. (PENDING, READY, ASSIGNED, STARTING, SCHEDULED, INTERRUPTING, RUNNING, SUSPENDED, CANCELED, FAILED, SUCCEEDED, NOT_COMPATIBLE)</td>
</tr>
<tr>
    <td><CopyableCode code="task_run_status_counts" /></td>
    <td><code>object</code></td>
    <td>The number of tasks running on the job.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_steps">

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
    <td><CopyableCode code="next_item_offset" /></td>
    <td><code>integer</code></td>
    <td>The next item offset for the search results.</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>The steps in the search.</td>
</tr>
<tr>
    <td><CopyableCode code="total_results" /></td>
    <td><code>integer</code></td>
    <td>The total number of results in the search.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get_step">

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
    <td>A list of errors for steps that could not be retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>A list of steps that were successfully retrieved.</td>
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
    <td><a href="#get_step"><CopyableCode code="get_step" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-step_id"><code>step_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a step.</td>
</tr>
<tr>
    <td><a href="#list_steps"><CopyableCode code="list_steps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists steps for a job.</td>
</tr>
<tr>
    <td><a href="#search_steps"><CopyableCode code="search_steps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for steps.</td>
</tr>
<tr>
    <td><a href="#batch_get_step"><CopyableCode code="batch_get_step" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves multiple steps in a single request. This is a batch version of the GetStep API. The result of getting each step is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.</td>
</tr>
<tr>
    <td><a href="#update_step"><CopyableCode code="update_step" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-step_id"><code>step_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetTaskRunStatus"><code>targetTaskRunStatus</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Updates a step.</td>
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
    defaultValue="get_step"
    values={[
        { label: 'get_step', value: 'get_step' },
        { label: 'list_steps', value: 'list_steps' },
        { label: 'search_steps', value: 'search_steps' },
        { label: 'batch_get_step', value: 'batch_get_step' }
    ]}
>
<TabItem value="get_step">

Gets a step.

```sql
SELECT
name,
created_at,
created_by,
dependency_counts,
description,
ended_at,
lifecycle_status,
lifecycle_status_message,
parameter_space,
required_capabilities,
started_at,
step_id,
target_task_run_status,
task_failure_retry_count,
task_run_status,
task_run_status_counts,
updated_at,
updated_by
FROM aws.deadline.steps
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND job_id = '{{ job_id }}' -- required
AND step_id = '{{ step_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_steps">

Lists steps for a job.

```sql
SELECT
name,
created_at,
created_by,
dependency_counts,
ended_at,
lifecycle_status,
lifecycle_status_message,
started_at,
step_id,
target_task_run_status,
task_failure_retry_count,
task_run_status,
task_run_status_counts,
updated_at,
updated_by
FROM aws.deadline.steps
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_steps">

Searches for steps.

```sql
SELECT
next_item_offset,
steps,
total_results
FROM aws.deadline.steps
WHERE farm_id = '{{ farm_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="batch_get_step">

Retrieves multiple steps in a single request. This is a batch version of the GetStep API. The result of getting each step is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.

```sql
SELECT
errors,
steps
FROM aws.deadline.steps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_step"
    values={[
        { label: 'update_step', value: 'update_step' }
    ]}
>
<TabItem value="update_step">

Updates a step.

```sql
UPDATE aws.deadline.steps
SET 
targetTaskRunStatus = '{{ targetTaskRunStatus }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND job_id = '{{ job_id }}' --required
AND step_id = '{{ step_id }}' --required
AND region = '{{ region }}' --required
AND targetTaskRunStatus = '{{ targetTaskRunStatus }}' --required
AND `X-Amz-Client-Token` = '{{ X-Amz-Client-Token}}';
```
</TabItem>
</Tabs>
