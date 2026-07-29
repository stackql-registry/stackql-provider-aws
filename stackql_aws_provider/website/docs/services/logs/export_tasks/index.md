--- 
title: export_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - export_tasks
  - logs
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

Creates, updates, deletes, gets or lists an <code>export_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="export_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.export_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_export_tasks"
    values={[
        { label: 'describe_export_tasks', value: 'describe_export_tasks' }
    ]}
>
<TabItem value="describe_export_tasks">

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
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>The name of the S3 bucket to which the log data was exported.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix that was used as the start of Amazon S3 key for every object exported.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_info" /></td>
    <td><code>object</code></td>
    <td>Execution information about the export task.</td>
</tr>
<tr>
    <td><CopyableCode code="from" /></td>
    <td><code>integer (int64)</code></td>
    <td>The start time, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp before this time are not exported.</td>
</tr>
<tr>
    <td><CopyableCode code="log_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the log group from which logs data was exported. (pattern: &lt;code&gt;&#91;\.\-_/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the export task.</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the export task.</td>
</tr>
<tr>
    <td><CopyableCode code="task_name" /></td>
    <td><code>string</code></td>
    <td>The name of the export task.</td>
</tr>
<tr>
    <td><CopyableCode code="to" /></td>
    <td><code>integer (int64)</code></td>
    <td>The end time, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp later than this time are not exported.</td>
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
    <td><a href="#describe_export_tasks"><CopyableCode code="describe_export_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the specified export tasks. You can list all your export tasks or filter the results based on task ID or task status.</td>
</tr>
<tr>
    <td><a href="#create_export_task"><CopyableCode code="create_export_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupName"><code>logGroupName</code></a>, <a href="#parameter-from"><code>from</code></a>, <a href="#parameter-to"><code>to</code></a>, <a href="#parameter-destination"><code>destination</code></a></td>
    <td></td>
    <td>Creates an export task so that you can efficiently export data from a log group to an Amazon S3 bucket. When you perform a CreateExportTask operation, you must use credentials that have permission to write to the S3 bucket that you specify as the destination. Exporting log data to S3 buckets that are encrypted by KMS is supported. Exporting log data to Amazon S3 buckets that have S3 Object Lock enabled with a retention period is also supported. Exporting to S3 buckets that are encrypted with AES-256 is supported. This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use DescribeExportTasks to get the status of the export task. Each account can only have one active (RUNNING or PENDING) export task at a time. To cancel an export task, use CancelExportTask. You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate log data for each export task, specify a prefix to be used as the Amazon S3 key prefix for all exported objects. We recommend that you don't regularly export to Amazon S3 as a way to continuously archive your logs. For that use case, we instead recommend that you use subscriptions. For more information about subscriptions, see Real-time processing of log data with subscriptions. Time-based sorting on chunks of log data inside an exported file is not guaranteed. You can sort the exported log field data by using Linux utilities.</td>
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
    defaultValue="describe_export_tasks"
    values={[
        { label: 'describe_export_tasks', value: 'describe_export_tasks' }
    ]}
>
<TabItem value="describe_export_tasks">

Lists the specified export tasks. You can list all your export tasks or filter the results based on task ID or task status.

```sql
SELECT
destination,
destination_prefix,
execution_info,
from,
log_group_name,
status,
task_id,
task_name,
to
FROM aws.logs.export_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_export_task"
    values={[
        { label: 'create_export_task', value: 'create_export_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_export_task">

Creates an export task so that you can efficiently export data from a log group to an Amazon S3 bucket. When you perform a CreateExportTask operation, you must use credentials that have permission to write to the S3 bucket that you specify as the destination. Exporting log data to S3 buckets that are encrypted by KMS is supported. Exporting log data to Amazon S3 buckets that have S3 Object Lock enabled with a retention period is also supported. Exporting to S3 buckets that are encrypted with AES-256 is supported. This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use DescribeExportTasks to get the status of the export task. Each account can only have one active (RUNNING or PENDING) export task at a time. To cancel an export task, use CancelExportTask. You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate log data for each export task, specify a prefix to be used as the Amazon S3 key prefix for all exported objects. We recommend that you don't regularly export to Amazon S3 as a way to continuously archive your logs. For that use case, we instead recommend that you use subscriptions. For more information about subscriptions, see Real-time processing of log data with subscriptions. Time-based sorting on chunks of log data inside an exported file is not guaranteed. You can sort the exported log field data by using Linux utilities.

```sql
INSERT INTO aws.logs.export_tasks (
taskName,
logGroupName,
logStreamNamePrefix,
from,
to,
destination,
destinationPrefix,
region
)
SELECT 
'{{ taskName }}',
'{{ logGroupName }}' /* required */,
'{{ logStreamNamePrefix }}',
{{ from }} /* required */,
{{ to }} /* required */,
'{{ destination }}' /* required */,
'{{ destinationPrefix }}',
'{{ region }}'
RETURNING
task_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: export_tasks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the export_tasks resource.
    - name: taskName
      value: "{{ taskName }}"
      description: |
        The name of the export task.
    - name: logGroupName
      value: "{{ logGroupName }}"
      description: |
        The name of the log group.
    - name: logStreamNamePrefix
      value: "{{ logStreamNamePrefix }}"
      description: |
        Export only log streams that match the provided prefix. If you don't specify a value, no prefix filter is applied.
    - name: from
      value: {{ from }}
      description: |
        The start time of the range for the request, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp earlier than this time are not exported.
    - name: to
      value: {{ to }}
      description: |
        The end time of the range for the request, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp later than this time are not exported. You must specify a time that is not earlier than when this log group was created.
    - name: destination
      value: "{{ destination }}"
      description: |
        The name of S3 bucket for the exported log data. The bucket must be in the same Amazon Web Services Region.
    - name: destinationPrefix
      value: "{{ destinationPrefix }}"
      description: |
        The prefix used as the start of the key for every object exported. If you don't specify a value, the default is exportedlogs. The length of this parameter must comply with the S3 object key name length limits. The object key name is a sequence of Unicode characters with UTF-8 encoding, and can be up to 1,024 bytes.
`}</CodeBlock>

</TabItem>
</Tabs>
