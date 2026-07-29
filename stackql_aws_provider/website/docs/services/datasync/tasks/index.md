--- 
title: tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tasks
  - datasync
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datasync.tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_task"
    values={[
        { label: 'describe_task', value: 'describe_task' },
        { label: 'list_tasks', value: 'list_tasks' }
    ]}
>
<TabItem value="describe_task">

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
    <td><CopyableCode code="cloud_watch_log_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an Amazon CloudWatch log group for monitoring your task. For more information, see Monitoring data transfers with CloudWatch Logs. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):logs:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:log-group:(&#91;^:\*&#93;*)(:\*)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="current_task_execution_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the most recent task execution. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:task/task-&#91;0-9a-f&#93;&#123;17&#125;/execution/exec-&#91;0-9a-f&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_location_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of your transfer's destination location. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:location/loc-&#91;0-9a-z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_network_interface_arns" /></td>
    <td><code>array</code></td>
    <td>The ARNs of the network interfaces that DataSync created for your destination location.</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>If there's an issue with your task, you can use the error code to help you troubleshoot the problem. For more information, see Troubleshooting issues with DataSync transfers.</td>
</tr>
<tr>
    <td><CopyableCode code="error_detail" /></td>
    <td><code>string</code></td>
    <td>If there's an issue with your task, you can use the error details to help you troubleshoot the problem. For more information, see Troubleshooting issues with DataSync transfers.</td>
</tr>
<tr>
    <td><CopyableCode code="excludes" /></td>
    <td><code>array</code></td>
    <td>The exclude filters that define the files, objects, and folders in your source location that you don't want DataSync to transfer. For more information and examples, see Specifying what DataSync transfers by using filters.</td>
</tr>
<tr>
    <td><CopyableCode code="includes" /></td>
    <td><code>array</code></td>
    <td>The include filters that define the files, objects, and folders in your source location that you want DataSync to transfer. For more information and examples, see Specifying what DataSync transfers by using filters.</td>
</tr>
<tr>
    <td><CopyableCode code="manifest_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of the manifest that lists the files or objects that you want DataSync to transfer. For more information, see Specifying what DataSync transfers by using a manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of your task. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\s+=._:@/-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>The task's settings. For example, what file metadata gets preserved, how data integrity gets verified at the end of your transfer, bandwidth limits, among other options.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>The schedule for when you want your task to run. For more information, see Scheduling your task.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_details" /></td>
    <td><code>object</code></td>
    <td>The details about your task schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="source_location_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of your transfer's source location. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:location/loc-&#91;0-9a-z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_network_interface_arns" /></td>
    <td><code>array</code></td>
    <td>The ARNs of the network interfaces that DataSync created for your source location.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of your task. For information about what each status means, see Task statuses. (AVAILABLE, CREATING, QUEUED, RUNNING, UNAVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="task_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of your task. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:task/task-&#91;0-9a-f&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_mode" /></td>
    <td><code>string</code></td>
    <td>The task mode that you're using. For more information, see Choosing a task mode for your data transfer. (BASIC, ENHANCED)</td>
</tr>
<tr>
    <td><CopyableCode code="task_report_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of your task report, which provides detailed information about your DataSync transfer. For more information, see Monitoring your DataSync transfers with task reports.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the task. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\s+=._:@/-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the task. (AVAILABLE, CREATING, QUEUED, RUNNING, UNAVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="task_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the task. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:task/task-&#91;0-9a-f&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_mode" /></td>
    <td><code>string</code></td>
    <td>The task mode that you're using. For more information, see Choosing a task mode for your data transfer. (BASIC, ENHANCED)</td>
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
    <td><a href="#describe_task"><CopyableCode code="describe_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about a task, which defines where and how DataSync transfers your data.</td>
</tr>
<tr>
    <td><a href="#list_tasks"><CopyableCode code="list_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the DataSync tasks you created.</td>
</tr>
<tr>
    <td><a href="#create_task"><CopyableCode code="create_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceLocationArn"><code>SourceLocationArn</code></a>, <a href="#parameter-DestinationLocationArn"><code>DestinationLocationArn</code></a></td>
    <td></td>
    <td>Configures a task, which defines where and how DataSync transfers your data. A task includes a source location, destination location, and transfer options (such as bandwidth limits, scheduling, and more). If you're planning to transfer data to or from an Amazon S3 location, review how DataSync can affect your S3 request charges and the DataSync pricing page before you begin.</td>
</tr>
<tr>
    <td><a href="#update_task"><CopyableCode code="update_task" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TaskArn"><code>TaskArn</code></a></td>
    <td></td>
    <td>Updates the configuration of a task, which defines where and how DataSync transfers your data.</td>
</tr>
<tr>
    <td><a href="#delete_task"><CopyableCode code="delete_task" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a transfer task resource from DataSync.</td>
</tr>
<tr>
    <td><a href="#cancel_task_execution"><CopyableCode code="cancel_task_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TaskExecutionArn"><code>TaskExecutionArn</code></a></td>
    <td></td>
    <td>Stops an DataSync task execution that's in progress. The transfer of some files are abruptly interrupted. File contents that're transferred to the destination might be incomplete or inconsistent with the source files. However, if you start a new task execution using the same task and allow it to finish, file content on the destination will be complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task execution.</td>
</tr>
<tr>
    <td><a href="#start_task_execution"><CopyableCode code="start_task_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TaskArn"><code>TaskArn</code></a></td>
    <td></td>
    <td>Starts an DataSync transfer task. For each task, you can only run one task execution at a time. There are several steps to a task execution. For more information, see Task execution statuses. If you're planning to transfer data to or from an Amazon S3 location, review how DataSync can affect your S3 request charges and the DataSync pricing page before you begin.</td>
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
    defaultValue="describe_task"
    values={[
        { label: 'describe_task', value: 'describe_task' },
        { label: 'list_tasks', value: 'list_tasks' }
    ]}
>
<TabItem value="describe_task">

Provides information about a task, which defines where and how DataSync transfers your data.

```sql
SELECT
cloud_watch_log_group_arn,
creation_time,
current_task_execution_arn,
destination_location_arn,
destination_network_interface_arns,
error_code,
error_detail,
excludes,
includes,
manifest_config,
name,
options,
schedule,
schedule_details,
source_location_arn,
source_network_interface_arns,
status,
task_arn,
task_mode,
task_report_config
FROM aws.datasync.tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tasks">

Returns a list of the DataSync tasks you created.

```sql
SELECT
name,
status,
task_arn,
task_mode
FROM aws.datasync.tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_task"
    values={[
        { label: 'create_task', value: 'create_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_task">

Configures a task, which defines where and how DataSync transfers your data. A task includes a source location, destination location, and transfer options (such as bandwidth limits, scheduling, and more). If you're planning to transfer data to or from an Amazon S3 location, review how DataSync can affect your S3 request charges and the DataSync pricing page before you begin.

```sql
INSERT INTO aws.datasync.tasks (
SourceLocationArn,
DestinationLocationArn,
CloudWatchLogGroupArn,
Name,
Options,
Excludes,
Schedule,
Tags,
Includes,
ManifestConfig,
TaskReportConfig,
TaskMode,
region
)
SELECT 
'{{ SourceLocationArn }}' /* required */,
'{{ DestinationLocationArn }}' /* required */,
'{{ CloudWatchLogGroupArn }}',
'{{ Name }}',
'{{ Options }}',
'{{ Excludes }}',
'{{ Schedule }}',
'{{ Tags }}',
'{{ Includes }}',
'{{ ManifestConfig }}',
'{{ TaskReportConfig }}',
'{{ TaskMode }}',
'{{ region }}'
RETURNING
task_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tasks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tasks resource.
    - name: SourceLocationArn
      value: "{{ SourceLocationArn }}"
      description: |
        Specifies the ARN of your transfer's source location.
    - name: DestinationLocationArn
      value: "{{ DestinationLocationArn }}"
      description: |
        Specifies the ARN of your transfer's destination location.
    - name: CloudWatchLogGroupArn
      value: "{{ CloudWatchLogGroupArn }}"
      description: |
        Specifies the Amazon Resource Name (ARN) of an Amazon CloudWatch log group for monitoring your task. For Enhanced mode tasks, you don't need to specify anything. DataSync automatically sends logs to a CloudWatch log group named /aws/datasync.
    - name: Name
      value: "{{ Name }}"
      description: |
        Specifies the name of your task.
    - name: Options
      description: |
        Specifies your task's settings, such as preserving file metadata, verifying data integrity, among other options.
      value:
        VerifyMode: "{{ VerifyMode }}"
        OverwriteMode: "{{ OverwriteMode }}"
        Atime: "{{ Atime }}"
        Mtime: "{{ Mtime }}"
        Uid: "{{ Uid }}"
        Gid: "{{ Gid }}"
        PreserveDeletedFiles: "{{ PreserveDeletedFiles }}"
        PreserveDevices: "{{ PreserveDevices }}"
        PosixPermissions: "{{ PosixPermissions }}"
        BytesPerSecond: {{ BytesPerSecond }}
        TaskQueueing: "{{ TaskQueueing }}"
        LogLevel: "{{ LogLevel }}"
        TransferMode: "{{ TransferMode }}"
        SecurityDescriptorCopyFlags: "{{ SecurityDescriptorCopyFlags }}"
        ObjectTags: "{{ ObjectTags }}"
    - name: Excludes
      description: |
        Specifies exclude filters that define the files, objects, and folders in your source location that you don't want DataSync to transfer. For more information and examples, see Specifying what DataSync transfers by using filters.
      value:
        - FilterType: "{{ FilterType }}"
          Value: "{{ Value }}"
    - name: Schedule
      description: |
        Specifies a schedule for when you want your task to run. For more information, see Scheduling your task.
      value:
        ScheduleExpression: "{{ ScheduleExpression }}"
        Status: "{{ Status }}"
    - name: Tags
      description: |
        Specifies the tags that you want to apply to your task. Tags are key-value pairs that help you manage, filter, and search for your DataSync resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: Includes
      description: |
        Specifies include filters that define the files, objects, and folders in your source location that you want DataSync to transfer. For more information and examples, see Specifying what DataSync transfers by using filters.
      value:
        - FilterType: "{{ FilterType }}"
          Value: "{{ Value }}"
    - name: ManifestConfig
      description: |
        Configures a manifest, which is a list of files or objects that you want DataSync to transfer. For more information and configuration examples, see Specifying what DataSync transfers by using a manifest. When using this parameter, your caller identity (the role that you're using DataSync with) must have the iam:PassRole permission. The AWSDataSyncFullAccess policy includes this permission.
      value:
        Action: "{{ Action }}"
        Format: "{{ Format }}"
        Source:
          S3:
            ManifestObjectPath: "{{ ManifestObjectPath }}"
            BucketAccessRoleArn: "{{ BucketAccessRoleArn }}"
            S3BucketArn: "{{ S3BucketArn }}"
            ManifestObjectVersionId: "{{ ManifestObjectVersionId }}"
    - name: TaskReportConfig
      description: |
        Specifies how you want to configure a task report, which provides detailed information about your DataSync transfer. For more information, see Monitoring your DataSync transfers with task reports. When using this parameter, your caller identity (the role that you're using DataSync with) must have the iam:PassRole permission. The AWSDataSyncFullAccess policy includes this permission.
      value:
        Destination:
          S3:
            Subdirectory: "{{ Subdirectory }}"
            S3BucketArn: "{{ S3BucketArn }}"
            BucketAccessRoleArn: "{{ BucketAccessRoleArn }}"
        OutputType: "{{ OutputType }}"
        ReportLevel: "{{ ReportLevel }}"
        ObjectVersionIds: "{{ ObjectVersionIds }}"
        Overrides:
          Transferred:
            ReportLevel: "{{ ReportLevel }}"
          Verified:
            ReportLevel: "{{ ReportLevel }}"
          Deleted:
            ReportLevel: "{{ ReportLevel }}"
          Skipped:
            ReportLevel: "{{ ReportLevel }}"
    - name: TaskMode
      value: "{{ TaskMode }}"
      description: |
        Specifies one of the following task modes for your data transfer: ENHANCED - Transfer virtually unlimited numbers of objects with higher performance than Basic mode. Enhanced mode tasks optimize the data transfer process by listing, preparing, transferring, and verifying data in parallel. Enhanced mode is currently available for transfers between Amazon S3 locations, transfers between Azure Blob and Amazon S3 without an agent, and transfers between other clouds and Amazon S3 without an agent. To create an Enhanced mode task, the IAM role that you use to call the CreateTask operation must have the iam:CreateServiceLinkedRole permission. BASIC (default) - Transfer files or objects between Amazon Web Services storage and all other supported DataSync locations. Basic mode tasks are subject to quotas on the number of files, objects, and directories in a dataset. Basic mode sequentially prepares, transfers, and verifies data, making it slower than Enhanced mode for most workloads. For more information, see Understanding task mode differences.
      valid_values: ['BASIC', 'ENHANCED']
`}</CodeBlock>

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

Updates the configuration of a task, which defines where and how DataSync transfers your data.

```sql
UPDATE aws.datasync.tasks
SET 
TaskArn = '{{ TaskArn }}',
Options = '{{ Options }}',
Excludes = '{{ Excludes }}',
Schedule = '{{ Schedule }}',
Name = '{{ Name }}',
CloudWatchLogGroupArn = '{{ CloudWatchLogGroupArn }}',
Includes = '{{ Includes }}',
ManifestConfig = '{{ ManifestConfig }}',
TaskReportConfig = '{{ TaskReportConfig }}'
WHERE 
region = '{{ region }}' --required
AND TaskArn = '{{ TaskArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_task"
    values={[
        { label: 'delete_task', value: 'delete_task' }
    ]}
>
<TabItem value="delete_task">

Deletes a transfer task resource from DataSync.

```sql
DELETE FROM aws.datasync.tasks
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_task_execution"
    values={[
        { label: 'cancel_task_execution', value: 'cancel_task_execution' },
        { label: 'start_task_execution', value: 'start_task_execution' }
    ]}
>
<TabItem value="cancel_task_execution">

Stops an DataSync task execution that's in progress. The transfer of some files are abruptly interrupted. File contents that're transferred to the destination might be incomplete or inconsistent with the source files. However, if you start a new task execution using the same task and allow it to finish, file content on the destination will be complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task execution.

```sql
EXEC aws.datasync.tasks.cancel_task_execution 
@region='{{ region }}' --required 
@@json=
'{
"TaskExecutionArn": "{{ TaskExecutionArn }}"
}'
;
```
</TabItem>
<TabItem value="start_task_execution">

Starts an DataSync transfer task. For each task, you can only run one task execution at a time. There are several steps to a task execution. For more information, see Task execution statuses. If you're planning to transfer data to or from an Amazon S3 location, review how DataSync can affect your S3 request charges and the DataSync pricing page before you begin.

```sql
EXEC aws.datasync.tasks.start_task_execution 
@region='{{ region }}' --required 
@@json=
'{
"TaskArn": "{{ TaskArn }}", 
"OverrideOptions": "{{ OverrideOptions }}", 
"Includes": "{{ Includes }}", 
"Excludes": "{{ Excludes }}", 
"ManifestConfig": "{{ ManifestConfig }}", 
"TaskReportConfig": "{{ TaskReportConfig }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
