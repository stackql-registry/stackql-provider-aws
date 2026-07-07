--- 
title: maintenance_window_execution_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenance_window_execution_tasks
  - ssm
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

Creates, updates, deletes, gets or lists a <code>maintenance_window_execution_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="maintenance_window_execution_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.maintenance_window_execution_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_maintenance_window_execution_task"
    values={[
        { label: 'get_maintenance_window_execution_task', value: 'get_maintenance_window_execution_task' },
        { label: 'describe_maintenance_window_execution_tasks', value: 'describe_maintenance_window_execution_tasks' }
    ]}
>
<TabItem value="get_maintenance_window_execution_task">

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
    <td><CopyableCode code="AlarmConfiguration" /></td>
    <td><code>object</code></td>
    <td>The details for the CloudWatch alarm you want to apply to an automation or command.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the task execution completed.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxConcurrency" /></td>
    <td><code>string</code></td>
    <td>The defined maximum number of task executions that could be run in parallel. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*|&#91;1-9&#93;&#91;0-9&#93;%|&#91;1-9&#93;%|100%)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MaxErrors" /></td>
    <td><code>string</code></td>
    <td>The defined maximum number of task execution errors allowed before scheduling of the task execution would have been stopped. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*|&#91;0&#93;|&#91;1-9&#93;&#91;0-9&#93;%|&#91;0-9&#93;%|100%)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Priority" /></td>
    <td><code>integer</code></td>
    <td>The priority of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceRole" /></td>
    <td><code>string</code></td>
    <td>The role that was assumed when running the task.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the task execution started.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the task. (PENDING, IN_PROGRESS, SUCCESS, FAILED, TIMED_OUT, CANCELLING, CANCELLED, SKIPPED_OVERLAPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusDetails" /></td>
    <td><code>string</code></td>
    <td>The details explaining the status. Not available for all status values.</td>
</tr>
<tr>
    <td><CopyableCode code="TaskArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the task that ran.</td>
</tr>
<tr>
    <td><CopyableCode code="TaskExecutionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the specific task execution in the maintenance window task that was retrieved. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TaskParameters" /></td>
    <td><code>array</code></td>
    <td>The parameters passed to the task when it was run. TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters. The map has the following format: Key: string, between 1 and 255 characters Value: an array of strings, each between 1 and 255 characters</td>
</tr>
<tr>
    <td><CopyableCode code="TriggeredAlarms" /></td>
    <td><code>array</code></td>
    <td>The CloudWatch alarms that were invoked by the maintenance window task.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of task that was run. (RUN_COMMAND, AUTOMATION, STEP_FUNCTIONS, LAMBDA)</td>
</tr>
<tr>
    <td><CopyableCode code="WindowExecutionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the maintenance window execution that includes the task. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_maintenance_window_execution_tasks">

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
    <td><CopyableCode code="AlarmConfiguration" /></td>
    <td><code>object</code></td>
    <td>The details for the CloudWatch alarm you want to apply to an automation or command.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the task execution finished.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the task execution started.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the task execution. (PENDING, IN_PROGRESS, SUCCESS, FAILED, TIMED_OUT, CANCELLING, CANCELLED, SKIPPED_OVERLAPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusDetails" /></td>
    <td><code>string</code></td>
    <td>The details explaining the status of the task execution. Not available for all status values.</td>
</tr>
<tr>
    <td><CopyableCode code="TaskArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the task that ran.</td>
</tr>
<tr>
    <td><CopyableCode code="TaskExecutionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the specific task execution in the maintenance window execution. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TaskType" /></td>
    <td><code>string</code></td>
    <td>The type of task that ran. (RUN_COMMAND, AUTOMATION, STEP_FUNCTIONS, LAMBDA)</td>
</tr>
<tr>
    <td><CopyableCode code="TriggeredAlarms" /></td>
    <td><code>array</code></td>
    <td>The CloudWatch alarm that was invoked by the maintenance window task.</td>
</tr>
<tr>
    <td><CopyableCode code="WindowExecutionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the maintenance window execution that ran the task. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_maintenance_window_execution_task"><CopyableCode code="get_maintenance_window_execution_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details about a specific task run as part of a maintenance window execution.</td>
</tr>
<tr>
    <td><a href="#describe_maintenance_window_execution_tasks"><CopyableCode code="describe_maintenance_window_execution_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>For a given maintenance window execution, lists the tasks that were run.</td>
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
    defaultValue="get_maintenance_window_execution_task"
    values={[
        { label: 'get_maintenance_window_execution_task', value: 'get_maintenance_window_execution_task' },
        { label: 'describe_maintenance_window_execution_tasks', value: 'describe_maintenance_window_execution_tasks' }
    ]}
>
<TabItem value="get_maintenance_window_execution_task">

Retrieves the details about a specific task run as part of a maintenance window execution.

```sql
SELECT
AlarmConfiguration,
EndTime,
MaxConcurrency,
MaxErrors,
Priority,
ServiceRole,
StartTime,
Status,
StatusDetails,
TaskArn,
TaskExecutionId,
TaskParameters,
TriggeredAlarms,
Type,
WindowExecutionId
FROM aws.ssm.maintenance_window_execution_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_maintenance_window_execution_tasks">

For a given maintenance window execution, lists the tasks that were run.

```sql
SELECT
AlarmConfiguration,
EndTime,
StartTime,
Status,
StatusDetails,
TaskArn,
TaskExecutionId,
TaskType,
TriggeredAlarms,
WindowExecutionId
FROM aws.ssm.maintenance_window_execution_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
