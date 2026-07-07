--- 
title: maintenance_windows
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenance_windows
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

Creates, updates, deletes, gets or lists a <code>maintenance_windows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="maintenance_windows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.maintenance_windows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_maintenance_window"
    values={[
        { label: 'get_maintenance_window', value: 'get_maintenance_window' },
        { label: 'describe_maintenance_windows', value: 'describe_maintenance_windows' }
    ]}
>
<TabItem value="get_maintenance_window">

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
    <td><CopyableCode code="AllowUnassociatedTargets" /></td>
    <td><code>boolean</code></td>
    <td>Whether targets must be registered with the maintenance window before tasks can be defined for those targets.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the maintenance window was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Cutoff" /></td>
    <td><code>integer</code></td>
    <td>The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling new tasks for execution.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="Duration" /></td>
    <td><code>integer</code></td>
    <td>The duration of the maintenance window in hours.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the maintenance window is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="EndDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive. The maintenance window won't run after this specified time.</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the maintenance window was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the maintenance window. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextExecutionTime" /></td>
    <td><code>string</code></td>
    <td>The next time the maintenance window will actually run, taking into account any specified times for the maintenance window to become active or inactive.</td>
</tr>
<tr>
    <td><CopyableCode code="Schedule" /></td>
    <td><code>string</code></td>
    <td>The schedule of the maintenance window in the form of a cron or rate expression.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleOffset" /></td>
    <td><code>integer</code></td>
    <td>The number of days to wait to run a maintenance window after the scheduled cron expression date and time.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleTimezone" /></td>
    <td><code>string</code></td>
    <td>The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more information, see the Time Zone Database on the IANA website.</td>
</tr>
<tr>
    <td><CopyableCode code="StartDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active. The maintenance window won't run before this specified time.</td>
</tr>
<tr>
    <td><CopyableCode code="WindowId" /></td>
    <td><code>string</code></td>
    <td>The ID of the created maintenance window. (pattern: &lt;code&gt;^mw-&#91;0-9a-f&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_maintenance_windows">

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
    <td><CopyableCode code="Cutoff" /></td>
    <td><code>integer</code></td>
    <td>The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling new tasks for execution.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="Duration" /></td>
    <td><code>integer</code></td>
    <td>The duration of the maintenance window in hours.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the maintenance window is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="EndDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the maintenance window. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextExecutionTime" /></td>
    <td><code>string</code></td>
    <td>The next time the maintenance window will actually run, taking into account any specified times for the maintenance window to become active or inactive.</td>
</tr>
<tr>
    <td><CopyableCode code="Schedule" /></td>
    <td><code>string</code></td>
    <td>The schedule of the maintenance window in the form of a cron or rate expression.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleOffset" /></td>
    <td><code>integer</code></td>
    <td>The number of days to wait to run a maintenance window after the scheduled cron expression date and time.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleTimezone" /></td>
    <td><code>string</code></td>
    <td>The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format.</td>
</tr>
<tr>
    <td><CopyableCode code="StartDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active.</td>
</tr>
<tr>
    <td><CopyableCode code="WindowId" /></td>
    <td><code>string</code></td>
    <td>The ID of the maintenance window. (pattern: &lt;code&gt;^mw-&#91;0-9a-f&#93;&#123;17&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_maintenance_window"><CopyableCode code="get_maintenance_window" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a maintenance window.</td>
</tr>
<tr>
    <td><a href="#describe_maintenance_windows"><CopyableCode code="describe_maintenance_windows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the maintenance windows in an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#register_target_with_maintenance_window"><CopyableCode code="register_target_with_maintenance_window" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WindowId"><code>WindowId</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-Targets"><code>Targets</code></a></td>
    <td></td>
    <td>Registers a target with a maintenance window.</td>
</tr>
<tr>
    <td><a href="#register_task_with_maintenance_window"><CopyableCode code="register_task_with_maintenance_window" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WindowId"><code>WindowId</code></a>, <a href="#parameter-TaskArn"><code>TaskArn</code></a>, <a href="#parameter-TaskType"><code>TaskType</code></a></td>
    <td></td>
    <td>Adds a new task to a maintenance window.</td>
</tr>
<tr>
    <td><a href="#create_maintenance_window"><CopyableCode code="create_maintenance_window" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AllowUnassociatedTargets"><code>AllowUnassociatedTargets</code></a></td>
    <td></td>
    <td>Creates a new maintenance window. The value you specify for Duration determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for Cutoff. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for Cutoff is one hour, no maintenance window tasks can start after 5 PM.</td>
</tr>
<tr>
    <td><a href="#update_maintenance_window"><CopyableCode code="update_maintenance_window" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WindowId"><code>WindowId</code></a></td>
    <td></td>
    <td>Updates an existing maintenance window. Only specified parameters are modified. The value you specify for Duration determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for Cutoff. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for Cutoff is one hour, no maintenance window tasks can start after 5 PM.</td>
</tr>
<tr>
    <td><a href="#deregister_target_from_maintenance_window"><CopyableCode code="deregister_target_from_maintenance_window" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a target from a maintenance window.</td>
</tr>
<tr>
    <td><a href="#deregister_task_from_maintenance_window"><CopyableCode code="deregister_task_from_maintenance_window" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a task from a maintenance window.</td>
</tr>
<tr>
    <td><a href="#delete_maintenance_window"><CopyableCode code="delete_maintenance_window" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a maintenance window.</td>
</tr>
<tr>
    <td><a href="#cancel_maintenance_window_execution"><CopyableCode code="cancel_maintenance_window_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WindowExecutionId"><code>WindowExecutionId</code></a></td>
    <td></td>
    <td>Stops a maintenance window execution that is already in progress and cancels any tasks in the window that haven't already starting running. Tasks already in progress will continue to completion.</td>
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
    defaultValue="get_maintenance_window"
    values={[
        { label: 'get_maintenance_window', value: 'get_maintenance_window' },
        { label: 'describe_maintenance_windows', value: 'describe_maintenance_windows' }
    ]}
>
<TabItem value="get_maintenance_window">

Retrieves a maintenance window.

```sql
SELECT
AllowUnassociatedTargets,
CreatedDate,
Cutoff,
Description,
Duration,
Enabled,
EndDate,
ModifiedDate,
Name,
NextExecutionTime,
Schedule,
ScheduleOffset,
ScheduleTimezone,
StartDate,
WindowId
FROM aws.ssm.maintenance_windows
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_maintenance_windows">

Retrieves the maintenance windows in an Amazon Web Services account.

```sql
SELECT
Cutoff,
Description,
Duration,
Enabled,
EndDate,
Name,
NextExecutionTime,
Schedule,
ScheduleOffset,
ScheduleTimezone,
StartDate,
WindowId
FROM aws.ssm.maintenance_windows
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_target_with_maintenance_window"
    values={[
        { label: 'register_target_with_maintenance_window', value: 'register_target_with_maintenance_window' },
        { label: 'register_task_with_maintenance_window', value: 'register_task_with_maintenance_window' },
        { label: 'create_maintenance_window', value: 'create_maintenance_window' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_target_with_maintenance_window">

Registers a target with a maintenance window.

```sql
INSERT INTO aws.ssm.maintenance_windows (
WindowId,
ResourceType,
Targets,
OwnerInformation,
Name,
Description,
ClientToken,
region
)
SELECT 
'{{ WindowId }}' /* required */,
'{{ ResourceType }}' /* required */,
'{{ Targets }}' /* required */,
'{{ OwnerInformation }}',
'{{ Name }}',
'{{ Description }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
WindowTargetId
;
```
</TabItem>
<TabItem value="register_task_with_maintenance_window">

Adds a new task to a maintenance window.

```sql
INSERT INTO aws.ssm.maintenance_windows (
WindowId,
Targets,
TaskArn,
ServiceRoleArn,
TaskType,
TaskParameters,
TaskInvocationParameters,
Priority,
MaxConcurrency,
MaxErrors,
LoggingInfo,
Name,
Description,
ClientToken,
CutoffBehavior,
AlarmConfiguration,
region
)
SELECT 
'{{ WindowId }}' /* required */,
'{{ Targets }}',
'{{ TaskArn }}' /* required */,
'{{ ServiceRoleArn }}',
'{{ TaskType }}' /* required */,
'{{ TaskParameters }}',
'{{ TaskInvocationParameters }}',
{{ Priority }},
'{{ MaxConcurrency }}',
'{{ MaxErrors }}',
'{{ LoggingInfo }}',
'{{ Name }}',
'{{ Description }}',
'{{ ClientToken }}',
'{{ CutoffBehavior }}',
'{{ AlarmConfiguration }}',
'{{ region }}'
RETURNING
WindowTaskId
;
```
</TabItem>
<TabItem value="create_maintenance_window">

Creates a new maintenance window. The value you specify for Duration determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for Cutoff. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for Cutoff is one hour, no maintenance window tasks can start after 5 PM.

```sql
INSERT INTO aws.ssm.maintenance_windows (
Name,
Description,
StartDate,
EndDate,
Schedule,
ScheduleTimezone,
ScheduleOffset,
Duration,
Cutoff,
AllowUnassociatedTargets,
ClientToken,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ StartDate }}',
'{{ EndDate }}',
'{{ Schedule }}',
'{{ ScheduleTimezone }}',
{{ ScheduleOffset }},
{{ Duration }},
{{ Cutoff }},
{{ AllowUnassociatedTargets }} /* required */,
'{{ ClientToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
WindowId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: maintenance_windows
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the maintenance_windows resource.
    - name: WindowId
      value: "{{ WindowId }}"
      description: |
        The ID of the maintenance window the task should be added to.
    - name: ResourceType
      value: "{{ ResourceType }}"
      description: |
        The type of target being registered with the maintenance window.
      valid_values: ['INSTANCE', 'RESOURCE_GROUP']
    - name: Targets
      description: |
        The targets (either managed nodes or maintenance window targets). One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see Registering maintenance window tasks without targets in the Amazon Web Services Systems Manager User Guide. Specify managed nodes using the following format: Key=InstanceIds,Values=\`<instance-id-1>\`,\`<instance-id-2>\` Specify maintenance window targets using the following format: Key=WindowTargetIds,Values=\`<window-target-id-1>\`,\`<window-target-id-2>\`
      value:
        - Key: "{{ Key }}"
          Values: "{{ Values }}"
    - name: OwnerInformation
      value: "{{ OwnerInformation }}"
      description: |
        User-provided value that will be included in any Amazon CloudWatch Events events raised while running tasks for these targets in this maintenance window.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the maintenance window.
    - name: Description
      value: "{{ Description }}"
      description: |
        An optional description for the maintenance window. We recommend specifying a description to help you organize your maintenance windows.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        User-provided idempotency token.
    - name: TaskArn
      value: "{{ TaskArn }}"
      description: |
        The ARN of the task to run.
    - name: ServiceRoleArn
      value: "{{ ServiceRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM service role for Amazon Web Services Systems Manager to assume when running a maintenance window task. If you do not specify a service role ARN, Systems Manager uses a service-linked role in your account. If no appropriate service-linked role for Systems Manager exists in your account, it is created when you run RegisterTaskWithMaintenanceWindow. However, for an improved security posture, we strongly recommend creating a custom policy and custom service role for running your maintenance window tasks. The policy can be crafted to provide only the permissions needed for your particular maintenance window tasks. For more information, see Setting up Maintenance Windows in the in the Amazon Web Services Systems Manager User Guide.
    - name: TaskType
      value: "{{ TaskType }}"
      description: |
        The type of task being registered.
      valid_values: ['RUN_COMMAND', 'AUTOMATION', 'STEP_FUNCTIONS', 'LAMBDA']
    - name: TaskParameters
      value: "{{ TaskParameters }}"
      description: |
        The parameters that should be passed to the task when it is run. TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
    - name: TaskInvocationParameters
      description: |
        The parameters that the task should use during execution. Populate only the fields that match the task type. All other fields should be empty.
      value:
        RunCommand:
          Comment: "{{ Comment }}"
          CloudWatchOutputConfig:
            CloudWatchLogGroupName: "{{ CloudWatchLogGroupName }}"
            CloudWatchOutputEnabled: {{ CloudWatchOutputEnabled }}
          DocumentHash: "{{ DocumentHash }}"
          DocumentHashType: "{{ DocumentHashType }}"
          DocumentVersion: "{{ DocumentVersion }}"
          NotificationConfig:
            NotificationArn: "{{ NotificationArn }}"
            NotificationEvents:
              - "{{ NotificationEvents }}"
            NotificationType: "{{ NotificationType }}"
          OutputS3BucketName: "{{ OutputS3BucketName }}"
          OutputS3KeyPrefix: "{{ OutputS3KeyPrefix }}"
          Parameters: "{{ Parameters }}"
          ServiceRoleArn: "{{ ServiceRoleArn }}"
          TimeoutSeconds: {{ TimeoutSeconds }}
        Automation:
          DocumentVersion: "{{ DocumentVersion }}"
          Parameters: "{{ Parameters }}"
        StepFunctions:
          Input: "{{ Input }}"
          Name: "{{ Name }}"
        Lambda:
          ClientContext: "{{ ClientContext }}"
          Qualifier: "{{ Qualifier }}"
          Payload: "{{ Payload }}"
    - name: Priority
      value: {{ Priority }}
      description: |
        The priority of the task in the maintenance window, the lower the number the higher the priority. Tasks in a maintenance window are scheduled in priority order with tasks that have the same priority scheduled in parallel.
    - name: MaxConcurrency
      value: "{{ MaxConcurrency }}"
      description: |
        The maximum number of targets this task can be run for, in parallel. Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a targetless task You must provide a value in all other cases. For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of 1. This value doesn't affect the running of your task.
    - name: MaxErrors
      value: "{{ MaxErrors }}"
      description: |
        The maximum number of errors allowed before this task stops being scheduled. Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a targetless task You must provide a value in all other cases. For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of 1. This value doesn't affect the running of your task.
    - name: LoggingInfo
      description: |
        A structure containing information about an Amazon Simple Storage Service (Amazon S3) bucket to write managed node-level logs to. LoggingInfo has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the OutputS3BucketName and OutputS3KeyPrefix options in the TaskInvocationParameters structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.
      value:
        S3BucketName: "{{ S3BucketName }}"
        S3KeyPrefix: "{{ S3KeyPrefix }}"
        S3Region: "{{ S3Region }}"
    - name: CutoffBehavior
      value: "{{ CutoffBehavior }}"
      description: |
        Indicates whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached. CONTINUE_TASK: When the cutoff time is reached, any tasks that are running continue. The default value. CANCEL_TASK: For Automation, Lambda, Step Functions tasks: When the cutoff time is reached, any task invocations that are already running continue, but no new task invocations are started. For Run Command tasks: When the cutoff time is reached, the system sends a CancelCommand operation that attempts to cancel the command associated with the task. However, there is no guarantee that the command will be terminated and the underlying process stopped. The status for tasks that are not completed is TIMED_OUT.
      valid_values: ['CONTINUE_TASK', 'CANCEL_TASK']
    - name: AlarmConfiguration
      description: |
        The details for the CloudWatch alarm you want to apply to an automation or command.
      value:
        IgnorePollAlarmFailure: {{ IgnorePollAlarmFailure }}
        Alarms:
          - Name: "{{ Name }}"
    - name: StartDate
      value: "{{ StartDate }}"
      description: |
        The date and time, in ISO-8601 Extended format, for when you want the maintenance window to become active. StartDate allows you to delay activation of the maintenance window until the specified future date. When using a rate schedule, if you provide a start date that occurs in the past, the current date and time are used as the start date.
    - name: EndDate
      value: "{{ EndDate }}"
      description: |
        The date and time, in ISO-8601 Extended format, for when you want the maintenance window to become inactive. EndDate allows you to set a date and time in the future when the maintenance window will no longer run.
    - name: Schedule
      value: "{{ Schedule }}"
      description: |
        The schedule of the maintenance window in the form of a cron or rate expression.
    - name: ScheduleTimezone
      value: "{{ ScheduleTimezone }}"
      description: |
        The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more information, see the Time Zone Database on the IANA website.
    - name: ScheduleOffset
      value: {{ ScheduleOffset }}
      description: |
        The number of days to wait after the date and time specified by a cron expression before running the maintenance window. For example, the following cron expression schedules a maintenance window to run on the third Tuesday of every month at 11:30 PM. cron(30 23 ? * TUE#3 *) If the schedule offset is 2, the maintenance window won't run until two days later.
    - name: Duration
      value: {{ Duration }}
      description: |
        The duration of the maintenance window in hours.
    - name: Cutoff
      value: {{ Cutoff }}
      description: |
        The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling new tasks for execution.
    - name: AllowUnassociatedTargets
      value: {{ AllowUnassociatedTargets }}
      description: |
        Enables a maintenance window task to run on managed nodes, even if you haven't registered those nodes as targets. If enabled, then you must specify the unregistered managed nodes (by node ID) when you register a task with the maintenance window. If you don't enable this option, then you must specify previously-registered targets when you register a task with the maintenance window.
    - name: Tags
      description: |
        Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a maintenance window to identify the type of tasks it will run, the types of targets, and the environment it will run in. In this case, you could specify the following key-value pairs: Key=TaskType,Value=AgentUpdate Key=OS,Value=Windows Key=Environment,Value=Production To add tags to an existing maintenance window, use the AddTagsToResource operation.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_maintenance_window"
    values={[
        { label: 'update_maintenance_window', value: 'update_maintenance_window' }
    ]}
>
<TabItem value="update_maintenance_window">

Updates an existing maintenance window. Only specified parameters are modified. The value you specify for Duration determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for Cutoff. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for Cutoff is one hour, no maintenance window tasks can start after 5 PM.

```sql
UPDATE aws.ssm.maintenance_windows
SET 
WindowId = '{{ WindowId }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
StartDate = '{{ StartDate }}',
EndDate = '{{ EndDate }}',
Schedule = '{{ Schedule }}',
ScheduleTimezone = '{{ ScheduleTimezone }}',
ScheduleOffset = {{ ScheduleOffset }},
Duration = {{ Duration }},
Cutoff = {{ Cutoff }},
AllowUnassociatedTargets = {{ AllowUnassociatedTargets }},
Enabled = {{ Enabled }},
Replace = {{ Replace }}
WHERE 
region = '{{ region }}' --required
AND WindowId = '{{ WindowId }}' --required
RETURNING
AllowUnassociatedTargets,
Cutoff,
Description,
Duration,
Enabled,
EndDate,
Name,
Schedule,
ScheduleOffset,
ScheduleTimezone,
StartDate,
WindowId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_target_from_maintenance_window"
    values={[
        { label: 'deregister_target_from_maintenance_window', value: 'deregister_target_from_maintenance_window' },
        { label: 'deregister_task_from_maintenance_window', value: 'deregister_task_from_maintenance_window' },
        { label: 'delete_maintenance_window', value: 'delete_maintenance_window' }
    ]}
>
<TabItem value="deregister_target_from_maintenance_window">

Removes a target from a maintenance window.

```sql
DELETE FROM aws.ssm.maintenance_windows
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="deregister_task_from_maintenance_window">

Removes a task from a maintenance window.

```sql
DELETE FROM aws.ssm.maintenance_windows
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_maintenance_window">

Deletes a maintenance window.

```sql
DELETE FROM aws.ssm.maintenance_windows
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_maintenance_window_execution"
    values={[
        { label: 'cancel_maintenance_window_execution', value: 'cancel_maintenance_window_execution' }
    ]}
>
<TabItem value="cancel_maintenance_window_execution">

Stops a maintenance window execution that is already in progress and cancels any tasks in the window that haven't already starting running. Tasks already in progress will continue to completion.

```sql
EXEC aws.ssm.maintenance_windows.cancel_maintenance_window_execution 
@region='{{ region }}' --required 
@@json=
'{
"WindowExecutionId": "{{ WindowExecutionId }}"
}'
;
```
</TabItem>
</Tabs>
