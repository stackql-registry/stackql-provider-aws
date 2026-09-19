--- 
title: audit_mitigation_actions_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - audit_mitigation_actions_tasks
  - iot
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

Creates, updates, deletes, gets or lists an <code>audit_mitigation_actions_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="audit_mitigation_actions_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.audit_mitigation_actions_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_audit_mitigation_actions_tasks"
    values={[
        { label: 'list_audit_mitigation_actions_tasks', value: 'list_audit_mitigation_actions_tasks' },
        { label: 'describe_audit_mitigation_actions_task', value: 'describe_audit_mitigation_actions_task' }
    ]}
>
<TabItem value="list_audit_mitigation_actions_tasks">

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
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the audit mitigation actions task was started.</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the task. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_status" /></td>
    <td><code>string</code></td>
    <td>The current state of the audit mitigation actions task. (IN_PROGRESS, COMPLETED, FAILED, CANCELED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_audit_mitigation_actions_task">

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
    <td><CopyableCode code="actions_definition" /></td>
    <td><code>array</code></td>
    <td>Specifies the mitigation actions and their parameters that are applied as part of this task.</td>
</tr>
<tr>
    <td><CopyableCode code="audit_check_to_actions_mapping" /></td>
    <td><code>object</code></td>
    <td>Specifies the mitigation actions that should be applied to specific audit checks.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the task was completed or canceled.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the task was started.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>Identifies the findings to which the mitigation actions are applied. This can be by audit checks, by audit task, or a set of findings.</td>
</tr>
<tr>
    <td><CopyableCode code="task_statistics" /></td>
    <td><code>object</code></td>
    <td>Aggregate counts of the results when the mitigation tasks were applied to the findings for this audit mitigation actions task.</td>
</tr>
<tr>
    <td><CopyableCode code="task_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the task. (IN_PROGRESS, COMPLETED, FAILED, CANCELED)</td>
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
    <td><a href="#list_audit_mitigation_actions_tasks"><CopyableCode code="list_audit_mitigation_actions_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-auditTaskId"><code>auditTaskId</code></a>, <a href="#parameter-findingId"><code>findingId</code></a>, <a href="#parameter-taskStatus"><code>taskStatus</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets a list of audit mitigation action tasks that match the specified filters. Requires permission to access the ListAuditMitigationActionsTasks action.</td>
</tr>
<tr>
    <td><a href="#describe_audit_mitigation_actions_task"><CopyableCode code="describe_audit_mitigation_actions_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.</td>
</tr>
<tr>
    <td><a href="#cancel_audit_mitigation_actions_task"><CopyableCode code="cancel_audit_mitigation_actions_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels a mitigation action task that is in progress. If the task is not in progress, an InvalidRequestException occurs. Requires permission to access the CancelAuditMitigationActionsTask action.</td>
</tr>
<tr>
    <td><a href="#start_audit_mitigation_actions_task"><CopyableCode code="start_audit_mitigation_actions_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-target"><code>target</code></a>, <a href="#parameter-auditCheckToActionsMapping"><code>auditCheckToActionsMapping</code></a>, <a href="#parameter-clientRequestToken"><code>clientRequestToken</code></a></td>
    <td></td>
    <td>Starts a task that applies a set of mitigation actions to the specified target. Requires permission to access the StartAuditMitigationActionsTask action.</td>
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
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specify this filter to limit results to tasks that were completed or canceled on or before a specific date and time.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specify this filter to limit results to tasks that began on or after a specific date and time.</td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the task. You can use this identifier to check the status of the task or to cancel it.</td>
</tr>
<tr id="parameter-auditTaskId">
    <td><CopyableCode code="auditTaskId" /></td>
    <td><code>string</code></td>
    <td>Specify this filter to limit results to tasks that were applied to results for a specific audit.</td>
</tr>
<tr id="parameter-findingId">
    <td><CopyableCode code="findingId" /></td>
    <td><code>string</code></td>
    <td>Specify this filter to limit results to tasks that were applied to a specific audit finding.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time. The default is 25.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results.</td>
</tr>
<tr id="parameter-taskStatus">
    <td><CopyableCode code="taskStatus" /></td>
    <td><code>string</code></td>
    <td>Specify this filter to limit results to tasks that are in a specific state.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_audit_mitigation_actions_tasks"
    values={[
        { label: 'list_audit_mitigation_actions_tasks', value: 'list_audit_mitigation_actions_tasks' },
        { label: 'describe_audit_mitigation_actions_task', value: 'describe_audit_mitigation_actions_task' }
    ]}
>
<TabItem value="list_audit_mitigation_actions_tasks">

Gets a list of audit mitigation action tasks that match the specified filters. Requires permission to access the ListAuditMitigationActionsTasks action.

```sql
SELECT
start_time,
task_id,
task_status
FROM aws.iot.audit_mitigation_actions_tasks
WHERE startTime = '{{ startTime }}' -- required
AND endTime = '{{ endTime }}' -- required
AND region = '{{ region }}' -- required
AND auditTaskId = '{{ auditTaskId }}'
AND findingId = '{{ findingId }}'
AND taskStatus = '{{ taskStatus }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
<TabItem value="describe_audit_mitigation_actions_task">

Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.

```sql
SELECT
actions_definition,
audit_check_to_actions_mapping,
end_time,
start_time,
target,
task_statistics,
task_status
FROM aws.iot.audit_mitigation_actions_tasks
WHERE task_id = '{{ task_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_audit_mitigation_actions_task"
    values={[
        { label: 'cancel_audit_mitigation_actions_task', value: 'cancel_audit_mitigation_actions_task' },
        { label: 'start_audit_mitigation_actions_task', value: 'start_audit_mitigation_actions_task' }
    ]}
>
<TabItem value="cancel_audit_mitigation_actions_task">

Cancels a mitigation action task that is in progress. If the task is not in progress, an InvalidRequestException occurs. Requires permission to access the CancelAuditMitigationActionsTask action.

```sql
EXEC aws.iot.audit_mitigation_actions_tasks.cancel_audit_mitigation_actions_task 
@task_id='{{ task_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="start_audit_mitigation_actions_task">

Starts a task that applies a set of mitigation actions to the specified target. Requires permission to access the StartAuditMitigationActionsTask action.

```sql
EXEC aws.iot.audit_mitigation_actions_tasks.start_audit_mitigation_actions_task 
@task_id='{{ task_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"target": "{{ target }}", 
"auditCheckToActionsMapping": "{{ auditCheckToActionsMapping }}", 
"clientRequestToken": "{{ clientRequestToken }}"
}'
;
```
</TabItem>
</Tabs>
