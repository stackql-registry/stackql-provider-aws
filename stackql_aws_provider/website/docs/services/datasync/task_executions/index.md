--- 
title: task_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - task_executions
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

Creates, updates, deletes, gets or lists a <code>task_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="task_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datasync.task_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_task_execution"
    values={[
        { label: 'describe_task_execution', value: 'describe_task_execution' },
        { label: 'list_task_executions', value: 'list_task_executions' }
    ]}
>
<TabItem value="describe_task_execution">

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
    <td><CopyableCode code="bytes_compressed" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of physical bytes that DataSync transfers over the network after compression (if compression is possible). This number is typically less than BytesTransferred unless the data isn't compressible.</td>
</tr>
<tr>
    <td><CopyableCode code="bytes_transferred" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of bytes that DataSync sends to the network before compression (if compression is possible). For the number of bytes transferred over the network, see BytesCompressed.</td>
</tr>
<tr>
    <td><CopyableCode code="bytes_written" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of logical bytes that DataSync actually writes to the destination location.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the transfer task ends.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_bytes_to_transfer" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of logical bytes that DataSync expects to write to the destination location.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_files_to_delete" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of files, objects, and directories that DataSync expects to delete in your destination location. If you don't configure your task to delete data in the destination that isn't in the source, the value is always 0. For Enhanced mode tasks, this counter only includes files or objects. Directories are counted in EstimatedFoldersToDelete.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_files_to_transfer" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of files, objects, and directories that DataSync expects to transfer over the network. This value is calculated while DataSync prepares the transfer. How this gets calculated depends primarily on your task’s transfer mode configuration: If TranserMode is set to CHANGED - The calculation is based on comparing the content of the source and destination locations and determining the difference that needs to be transferred. The difference can include: Anything that's added or modified at the source location. Anything that's in both locations and modified at the destination after an initial transfer (unless OverwriteMode is set to NEVER). (Basic task mode only) The number of items that DataSync expects to delete (if PreserveDeletedFiles is set to REMOVE). If TranserMode is set to ALL - The calculation is based only on the items that DataSync finds at the source location. For Enhanced mode tasks, this counter only includes files or objects. Directories are counted in EstimatedFoldersToTransfer.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_folders_to_delete" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of directories that DataSync expects to delete in your destination location. If you don't configure your task to delete data in the destination that isn't in the source, the value is always 0. Applies only to Enhanced mode tasks.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_folders_to_transfer" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of directories that DataSync expects to transfer over the network. This value is calculated as DataSync prepares directories to transfer. How this gets calculated depends primarily on your task’s transfer mode configuration: If TranserMode is set to CHANGED - The calculation is based on comparing the content of the source and destination locations and determining the difference that needs to be transferred. The difference can include: Anything that's added or modified at the source location. Anything that's in both locations and modified at the destination after an initial transfer (unless OverwriteMode is set to NEVER). If TranserMode is set to ALL - The calculation is based only on the items that DataSync finds at the source location. Applies only to Enhanced mode tasks.</td>
</tr>
<tr>
    <td><CopyableCode code="excludes" /></td>
    <td><code>array</code></td>
    <td>A list of filter rules that exclude specific data during your transfer. For more information and examples, see Filtering data transferred by DataSync.</td>
</tr>
<tr>
    <td><CopyableCode code="files_deleted" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of files, objects, and directories that DataSync actually deletes in your destination location. If you don't configure your task to delete data in the destination that isn't in the source, the value is always 0. For Enhanced mode tasks, this counter only includes files or objects. Directories are counted in FoldersDeleted.</td>
</tr>
<tr>
    <td><CopyableCode code="files_failed" /></td>
    <td><code>object</code></td>
    <td>The number of files or objects that DataSync fails to prepare, transfer, verify, and delete during your task execution. Applies only to Enhanced mode tasks.</td>
</tr>
<tr>
    <td><CopyableCode code="files_listed" /></td>
    <td><code>object</code></td>
    <td>The number of files or objects that DataSync finds at your locations. Applies only to Enhanced mode tasks.</td>
</tr>
<tr>
    <td><CopyableCode code="files_prepared" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of files or objects that DataSync will attempt to transfer after comparing your source and destination locations. Applies only to Enhanced mode tasks. This counter isn't applicable if you configure your task to transfer all data. In that scenario, DataSync copies everything from the source to the destination without comparing differences between the locations.</td>
</tr>
<tr>
    <td><CopyableCode code="files_skipped" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of files, objects, and directories that DataSync skips during your transfer. For Enhanced mode tasks, this counter only includes files or objects. Directories are counted in FoldersSkipped.</td>
</tr>
<tr>
    <td><CopyableCode code="files_transferred" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of files, objects, and directories that DataSync actually transfers over the network. This value is updated periodically during your task execution when something is read from the source and sent over the network. If DataSync fails to transfer something, this value can be less than EstimatedFilesToTransfer. In some cases, this value can also be greater than EstimatedFilesToTransfer. This element is implementation-specific for some location types, so don't use it as an exact indication of what's transferring or to monitor your task execution. For Enhanced mode tasks, this counter only includes files or objects. Directories are counted in FoldersTransferred.</td>
</tr>
<tr>
    <td><CopyableCode code="files_verified" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of files, objects, and directories that DataSync verifies during your transfer. When you configure your task to verify only the data that's transferred, DataSync doesn't verify directories in some situations or files that fail to transfer. For Enhanced mode tasks, this counter only includes files or objects. Directories are counted in FoldersVerified.</td>
</tr>
<tr>
    <td><CopyableCode code="folders_deleted" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of directories that DataSync actually deletes in your destination location. If you don't configure your task to delete data in the destination that isn't in the source, the value is always 0. Applies only to Enhanced mode tasks.</td>
</tr>
<tr>
    <td><CopyableCode code="folders_failed" /></td>
    <td><code>object</code></td>
    <td>The number of directories that DataSync fails to list, prepare, transfer, verify, and delete during your task execution. Applies only to Enhanced mode tasks.</td>
</tr>
<tr>
    <td><CopyableCode code="folders_listed" /></td>
    <td><code>object</code></td>
    <td>The number of directories that DataSync finds at your locations. Applies only to Enhanced mode tasks.</td>
</tr>
<tr>
    <td><CopyableCode code="folders_prepared" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of directories that DataSync will attempt to transfer after comparing your source and destination locations. Applies only to Enhanced mode tasks. This counter isn't applicable if you configure your task to transfer all data. In that scenario, DataSync copies everything from the source to the destination without comparing differences between the locations.</td>
</tr>
<tr>
    <td><CopyableCode code="folders_skipped" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of directories that DataSync skips during your transfer. Applies only to Enhanced mode tasks.</td>
</tr>
<tr>
    <td><CopyableCode code="folders_transferred" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of directories that DataSync actually transfers over the network. This value is updated periodically during your task execution when something is read from the source and sent over the network. If DataSync fails to transfer something, this value can be less than EstimatedFoldersToTransfer. In some cases, this value can also be greater than EstimatedFoldersToTransfer. Applies only to Enhanced mode tasks.</td>
</tr>
<tr>
    <td><CopyableCode code="folders_verified" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of directories that DataSync verifies during your transfer. Applies only to Enhanced mode tasks.</td>
</tr>
<tr>
    <td><CopyableCode code="includes" /></td>
    <td><code>array</code></td>
    <td>A list of filter rules that include specific data during your transfer. For more information and examples, see Filtering data transferred by DataSync.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the task execution actually begins. For non-queued tasks, LaunchTime and StartTime are typically the same. For queued tasks, LaunchTime is typically later than StartTime because previously queued tasks must finish running before newer tasks can begin.</td>
</tr>
<tr>
    <td><CopyableCode code="manifest_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of the manifest that lists the files or objects to transfer. For more information, see Specifying what DataSync transfers by using a manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>Indicates how your transfer task is configured. These options include how DataSync handles files, objects, and their associated metadata during your transfer. You also can specify how to verify data integrity, set bandwidth limits for your task, among other options. Each option has a default value. Unless you need to, you don't have to configure any option before calling StartTaskExecution. You also can override your task options for each task execution. For example, you might want to adjust the LogLevel for an individual execution.</td>
</tr>
<tr>
    <td><CopyableCode code="report_result" /></td>
    <td><code>object</code></td>
    <td>Indicates whether DataSync generated a complete task report for your transfer.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td>The result of the task execution.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that DataSync sends the request to start the task execution. For non-queued tasks, LaunchTime and StartTime are typically the same. For queued tasks, LaunchTime is typically later than StartTime because previously queued tasks must finish running before newer tasks can begin.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the task execution. (QUEUED, CANCELLING, LAUNCHING, PREPARING, TRANSFERRING, VERIFYING, SUCCESS, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="task_execution_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the task execution that you wanted information about. TaskExecutionArn is hierarchical and includes TaskArn for the task that was executed. For example, a TaskExecution value with the ARN arn:aws:datasync:us-east-1:111222333444:task/task-0208075f79cedf4a2/execution/exec-08ef1e88ec491019b executed the task with the ARN arn:aws:datasync:us-east-1:111222333444:task/task-0208075f79cedf4a2. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:task/task-&#91;0-9a-f&#93;&#123;17&#125;/execution/exec-&#91;0-9a-f&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_mode" /></td>
    <td><code>string</code></td>
    <td>The task mode that you're using. For more information, see Choosing a task mode for your data transfer. (BASIC, ENHANCED)</td>
</tr>
<tr>
    <td><CopyableCode code="task_report_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of your task report, which provides detailed information about for your DataSync transfer. For more information, see Creating a task report.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_task_executions">

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a task execution. For more information, see Task execution statuses. (QUEUED, CANCELLING, LAUNCHING, PREPARING, TRANSFERRING, VERIFYING, SUCCESS, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="task_execution_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a task execution. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:task/task-&#91;0-9a-f&#93;&#123;17&#125;/execution/exec-&#91;0-9a-f&#93;&#123;17&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_task_execution"><CopyableCode code="describe_task_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about an execution of your DataSync task. You can use this operation to help monitor the progress of an ongoing data transfer or check the results of the transfer. Some DescribeTaskExecution response elements are only relevant to a specific task mode. For information, see Understanding task mode differences and Understanding data transfer performance counters.</td>
</tr>
<tr>
    <td><a href="#list_task_executions"><CopyableCode code="list_task_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of executions for an DataSync transfer task.</td>
</tr>
<tr>
    <td><a href="#update_task_execution"><CopyableCode code="update_task_execution" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TaskExecutionArn"><code>TaskExecutionArn</code></a></td>
    <td></td>
    <td>Updates the configuration of a running DataSync task execution. Currently, the only Option that you can modify with UpdateTaskExecution is BytesPerSecond , which throttles bandwidth for a running or queued task execution.</td>
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
    defaultValue="describe_task_execution"
    values={[
        { label: 'describe_task_execution', value: 'describe_task_execution' },
        { label: 'list_task_executions', value: 'list_task_executions' }
    ]}
>
<TabItem value="describe_task_execution">

Provides information about an execution of your DataSync task. You can use this operation to help monitor the progress of an ongoing data transfer or check the results of the transfer. Some DescribeTaskExecution response elements are only relevant to a specific task mode. For information, see Understanding task mode differences and Understanding data transfer performance counters.

```sql
SELECT
bytes_compressed,
bytes_transferred,
bytes_written,
end_time,
estimated_bytes_to_transfer,
estimated_files_to_delete,
estimated_files_to_transfer,
estimated_folders_to_delete,
estimated_folders_to_transfer,
excludes,
files_deleted,
files_failed,
files_listed,
files_prepared,
files_skipped,
files_transferred,
files_verified,
folders_deleted,
folders_failed,
folders_listed,
folders_prepared,
folders_skipped,
folders_transferred,
folders_verified,
includes,
launch_time,
manifest_config,
options,
report_result,
result,
start_time,
status,
task_execution_arn,
task_mode,
task_report_config
FROM aws.datasync.task_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_task_executions">

Returns a list of executions for an DataSync transfer task.

```sql
SELECT
status,
task_execution_arn,
task_mode
FROM aws.datasync.task_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_task_execution"
    values={[
        { label: 'update_task_execution', value: 'update_task_execution' }
    ]}
>
<TabItem value="update_task_execution">

Updates the configuration of a running DataSync task execution. Currently, the only Option that you can modify with UpdateTaskExecution is BytesPerSecond , which throttles bandwidth for a running or queued task execution.

```sql
UPDATE aws.datasync.task_executions
SET 
TaskExecutionArn = '{{ TaskExecutionArn }}',
Options = '{{ Options }}'
WHERE 
region = '{{ region }}' --required
AND TaskExecutionArn = '{{ TaskExecutionArn }}' --required;
```
</TabItem>
</Tabs>
