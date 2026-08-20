--- 
title: maintenance_window_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenance_window_tasks
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

Creates, updates, deletes, gets or lists a <code>maintenance_window_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="maintenance_window_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.maintenance_window_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_maintenance_window_task"
    values={[
        { label: 'get_maintenance_window_task', value: 'get_maintenance_window_task' },
        { label: 'describe_maintenance_window_tasks', value: 'describe_maintenance_window_tasks' }
    ]}
>
<TabItem value="get_maintenance_window_task">

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
    <td><CopyableCode code="alarm_configuration" /></td>
    <td><code>object</code></td>
    <td>The details for the CloudWatch alarm you want to apply to an automation or command.</td>
</tr>
<tr>
    <td><CopyableCode code="cutoff_behavior" /></td>
    <td><code>string</code></td>
    <td>The action to take on tasks when the maintenance window cutoff time is reached. CONTINUE_TASK means that tasks continue to run. For Automation, Lambda, Step Functions tasks, CANCEL_TASK means that currently running task invocations continue, but no new task invocations are started. For Run Command tasks, CANCEL_TASK means the system attempts to stop the task by sending a CancelCommand operation. (CONTINUE_TASK, CANCEL_TASK)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The retrieved task description.</td>
</tr>
<tr>
    <td><CopyableCode code="logging_info" /></td>
    <td><code>object</code></td>
    <td>The location in Amazon Simple Storage Service (Amazon S3) where the task results are logged. LoggingInfo has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the OutputS3BucketName and OutputS3KeyPrefix options in the TaskInvocationParameters structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.</td>
</tr>
<tr>
    <td><CopyableCode code="max_concurrency" /></td>
    <td><code>string</code></td>
    <td>The maximum number of targets allowed to run this task in parallel. For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of 1, which may be reported in the response to this command. This value doesn't affect the running of your task and can be ignored. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*|&#91;1-9&#93;&#91;0-9&#93;%|&#91;1-9&#93;%|100%)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="max_errors" /></td>
    <td><code>string</code></td>
    <td>The maximum number of errors allowed before the task stops being scheduled. For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of 1, which may be reported in the response to this command. This value doesn't affect the running of your task and can be ignored. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*|&#91;0&#93;|&#91;1-9&#93;&#91;0-9&#93;%|&#91;0-9&#93;%|100%)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The retrieved task name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The priority of the task when it runs. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.</td>
</tr>
<tr>
    <td><CopyableCode code="service_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM service role for Amazon Web Services Systems Manager to assume when running a maintenance window task. If you do not specify a service role ARN, Systems Manager uses a service-linked role in your account. If no appropriate service-linked role for Systems Manager exists in your account, it is created when you run RegisterTaskWithMaintenanceWindow. However, for an improved security posture, we strongly recommend creating a custom policy and custom service role for running your maintenance window tasks. The policy can be crafted to provide only the permissions needed for your particular maintenance window tasks. For more information, see Setting up Maintenance Windows in the in the Amazon Web Services Systems Manager User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>array</code></td>
    <td>The targets where the task should run.</td>
</tr>
<tr>
    <td><CopyableCode code="task_arn" /></td>
    <td><code>string</code></td>
    <td>The resource that the task used during execution. For RUN_COMMAND and AUTOMATION task types, the value of TaskArn is the SSM document name/ARN. For LAMBDA tasks, the value is the function name/ARN. For STEP_FUNCTIONS tasks, the value is the state machine ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="task_invocation_parameters" /></td>
    <td><code>object</code></td>
    <td>The parameters to pass to the task when it runs.</td>
</tr>
<tr>
    <td><CopyableCode code="task_parameters" /></td>
    <td><code>object</code></td>
    <td>The parameters to pass to the task when it runs. TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.</td>
</tr>
<tr>
    <td><CopyableCode code="task_type" /></td>
    <td><code>string</code></td>
    <td>The type of task to run. (RUN_COMMAND, AUTOMATION, STEP_FUNCTIONS, LAMBDA)</td>
</tr>
<tr>
    <td><CopyableCode code="window_id" /></td>
    <td><code>string</code></td>
    <td>The retrieved maintenance window ID. (pattern: &lt;code&gt;^mw-&#91;0-9a-f&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="window_task_id" /></td>
    <td><code>string</code></td>
    <td>The retrieved maintenance window task ID. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_maintenance_window_tasks">

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
    <td><CopyableCode code="alarm_configuration" /></td>
    <td><code>object</code></td>
    <td>The details for the CloudWatch alarm you want to apply to an automation or command.</td>
</tr>
<tr>
    <td><CopyableCode code="cutoff_behavior" /></td>
    <td><code>string</code></td>
    <td>The specification for whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached. (CONTINUE_TASK, CANCEL_TASK)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="logging_info" /></td>
    <td><code>object</code></td>
    <td>Information about an S3 bucket to write task-level logs to. LoggingInfo has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the OutputS3BucketName and OutputS3KeyPrefix options in the TaskInvocationParameters structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.</td>
</tr>
<tr>
    <td><CopyableCode code="max_concurrency" /></td>
    <td><code>string</code></td>
    <td>The maximum number of targets this task can be run for, in parallel. Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a targetless task You must provide a value in all other cases. For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of 1. This value doesn't affect the running of your task. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*|&#91;1-9&#93;&#91;0-9&#93;%|&#91;1-9&#93;%|100%)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="max_errors" /></td>
    <td><code>string</code></td>
    <td>The maximum number of errors allowed before this task stops being scheduled. Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a targetless task You must provide a value in all other cases. For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of 1. This value doesn't affect the running of your task. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*|&#91;0&#93;|&#91;1-9&#93;&#91;0-9&#93;%|&#91;0-9&#93;%|100%)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The task name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The priority of the task in the maintenance window. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.</td>
</tr>
<tr>
    <td><CopyableCode code="service_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM service role for Amazon Web Services Systems Manager to assume when running a maintenance window task. If you do not specify a service role ARN, Systems Manager uses a service-linked role in your account. If no appropriate service-linked role for Systems Manager exists in your account, it is created when you run RegisterTaskWithMaintenanceWindow. However, for an improved security posture, we strongly recommend creating a custom policy and custom service role for running your maintenance window tasks. The policy can be crafted to provide only the permissions needed for your particular maintenance window tasks. For more information, see Setting up Maintenance Windows in the in the Amazon Web Services Systems Manager User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>array</code></td>
    <td>The targets (either managed nodes or tags). Managed nodes are specified using Key=instanceids,Values=<code>&lt;instanceid1&gt;</code>,<code>&lt;instanceid2&gt;</code>. Tags are specified using Key=&lt;tag name&gt;,Values=&lt;tag value&gt;.</td>
</tr>
<tr>
    <td><CopyableCode code="task_arn" /></td>
    <td><code>string</code></td>
    <td>The resource that the task uses during execution. For RUN_COMMAND and AUTOMATION task types, TaskArn is the Amazon Web Services Systems Manager (SSM document) name or ARN. For LAMBDA tasks, it's the function name or ARN. For STEP_FUNCTIONS tasks, it's the state machine ARN. Maintenance Window does not validate the TaskArn when you register a task. A successful registration does not guarantee that the TaskArn is valid.</td>
</tr>
<tr>
    <td><CopyableCode code="task_parameters" /></td>
    <td><code>object</code></td>
    <td>The parameters that should be passed to the task when it is run. TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of task. (RUN_COMMAND, AUTOMATION, STEP_FUNCTIONS, LAMBDA)</td>
</tr>
<tr>
    <td><CopyableCode code="window_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the maintenance window where the task is registered. (pattern: &lt;code&gt;^mw-&#91;0-9a-f&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="window_task_id" /></td>
    <td><code>string</code></td>
    <td>The task ID. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_maintenance_window_task"><CopyableCode code="get_maintenance_window_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a maintenance window task. For maintenance window tasks without a specified target, you can't supply values for --max-errors and --max-concurrency. Instead, the system inserts a placeholder value of 1, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored. To retrieve a list of tasks in a maintenance window, instead use the DescribeMaintenanceWindowTasks command.</td>
</tr>
<tr>
    <td><a href="#describe_maintenance_window_tasks"><CopyableCode code="describe_maintenance_window_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the tasks in a maintenance window. For maintenance window tasks without a specified target, you can't supply values for --max-errors and --max-concurrency. Instead, the system inserts a placeholder value of 1, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.</td>
</tr>
<tr>
    <td><a href="#update_maintenance_window_task"><CopyableCode code="update_maintenance_window_task" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WindowId"><code>WindowId</code></a>, <a href="#parameter-WindowTaskId"><code>WindowTaskId</code></a></td>
    <td></td>
    <td>Modifies a task assigned to a maintenance window. You can't change the task type, but you can change the following values: TaskARN. For example, you can change a RUN_COMMAND task from AWS-RunPowerShellScript to AWS-RunShellScript. ServiceRoleArn TaskInvocationParameters Priority MaxConcurrency MaxErrors One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see Registering maintenance window tasks without targets in the Amazon Web Services Systems Manager User Guide. If the value for a parameter in UpdateMaintenanceWindowTask is null, then the corresponding field isn't modified. If you set Replace to true, then all fields required by the RegisterTaskWithMaintenanceWindow operation are required for this request. Optional fields that aren't specified are set to null. When you update a maintenance window task that has options specified in TaskInvocationParameters, you must provide again all the TaskInvocationParameters values that you want to retain. The values you don't specify again are removed. For example, suppose that when you registered a Run Command task, you specified TaskInvocationParameters values for Comment, NotificationConfig, and OutputS3BucketName. If you update the maintenance window task and specify only a different OutputS3BucketName value, the values for Comment and NotificationConfig are removed.</td>
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
    defaultValue="get_maintenance_window_task"
    values={[
        { label: 'get_maintenance_window_task', value: 'get_maintenance_window_task' },
        { label: 'describe_maintenance_window_tasks', value: 'describe_maintenance_window_tasks' }
    ]}
>
<TabItem value="get_maintenance_window_task">

Retrieves the details of a maintenance window task. For maintenance window tasks without a specified target, you can't supply values for --max-errors and --max-concurrency. Instead, the system inserts a placeholder value of 1, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored. To retrieve a list of tasks in a maintenance window, instead use the DescribeMaintenanceWindowTasks command.

```sql
SELECT
alarm_configuration,
cutoff_behavior,
description,
logging_info,
max_concurrency,
max_errors,
name,
priority,
service_role_arn,
targets,
task_arn,
task_invocation_parameters,
task_parameters,
task_type,
window_id,
window_task_id
FROM aws.ssm.maintenance_window_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_maintenance_window_tasks">

Lists the tasks in a maintenance window. For maintenance window tasks without a specified target, you can't supply values for --max-errors and --max-concurrency. Instead, the system inserts a placeholder value of 1, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.

```sql
SELECT
alarm_configuration,
cutoff_behavior,
description,
logging_info,
max_concurrency,
max_errors,
name,
priority,
service_role_arn,
targets,
task_arn,
task_parameters,
type,
window_id,
window_task_id
FROM aws.ssm.maintenance_window_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_maintenance_window_task"
    values={[
        { label: 'update_maintenance_window_task', value: 'update_maintenance_window_task' }
    ]}
>
<TabItem value="update_maintenance_window_task">

Modifies a task assigned to a maintenance window. You can't change the task type, but you can change the following values: TaskARN. For example, you can change a RUN_COMMAND task from AWS-RunPowerShellScript to AWS-RunShellScript. ServiceRoleArn TaskInvocationParameters Priority MaxConcurrency MaxErrors One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see Registering maintenance window tasks without targets in the Amazon Web Services Systems Manager User Guide. If the value for a parameter in UpdateMaintenanceWindowTask is null, then the corresponding field isn't modified. If you set Replace to true, then all fields required by the RegisterTaskWithMaintenanceWindow operation are required for this request. Optional fields that aren't specified are set to null. When you update a maintenance window task that has options specified in TaskInvocationParameters, you must provide again all the TaskInvocationParameters values that you want to retain. The values you don't specify again are removed. For example, suppose that when you registered a Run Command task, you specified TaskInvocationParameters values for Comment, NotificationConfig, and OutputS3BucketName. If you update the maintenance window task and specify only a different OutputS3BucketName value, the values for Comment and NotificationConfig are removed.

```sql
UPDATE aws.ssm.maintenance_window_tasks
SET 
WindowId = '{{ WindowId }}',
WindowTaskId = '{{ WindowTaskId }}',
Targets = '{{ Targets }}',
TaskArn = '{{ TaskArn }}',
ServiceRoleArn = '{{ ServiceRoleArn }}',
TaskParameters = '{{ TaskParameters }}',
TaskInvocationParameters = '{{ TaskInvocationParameters }}',
Priority = {{ Priority }},
MaxConcurrency = '{{ MaxConcurrency }}',
MaxErrors = '{{ MaxErrors }}',
LoggingInfo = '{{ LoggingInfo }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
Replace = {{ Replace }},
CutoffBehavior = '{{ CutoffBehavior }}',
AlarmConfiguration = '{{ AlarmConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND WindowId = '{{ WindowId }}' --required
AND WindowTaskId = '{{ WindowTaskId }}' --required
RETURNING
alarm_configuration,
cutoff_behavior,
description,
logging_info,
max_concurrency,
max_errors,
name,
priority,
service_role_arn,
targets,
task_arn,
task_invocation_parameters,
task_parameters,
window_id,
window_task_id;
```
</TabItem>
</Tabs>
