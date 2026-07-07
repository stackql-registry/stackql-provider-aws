--- 
title: tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tasks
  - snow_device_management
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.snow_device_management.tasks" /></td></tr>
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
    <td><CopyableCode code="completedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the task was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the CreateTask operation was called.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description provided of the task and managed devices. (pattern: &lt;code&gt;&#91;A-Za-z0-9 _.,!#&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the state of the task was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the task. (IN_PROGRESS, CANCELED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment.</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>array</code></td>
    <td>The managed devices that the task was sent to.</td>
</tr>
<tr>
    <td><CopyableCode code="taskArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>The ID of the task.</td>
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
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the task assigned to one or many devices. (IN_PROGRESS, CANCELED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment.</td>
</tr>
<tr>
    <td><CopyableCode code="taskArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>The task ID.</td>
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
    <td><a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Checks the metadata for a given task on a device.</td>
</tr>
<tr>
    <td><a href="#list_tasks"><CopyableCode code="list_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td>Returns a list of tasks that can be filtered by state.</td>
</tr>
<tr>
    <td><a href="#create_task"><CopyableCode code="create_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-command"><code>command</code></a>, <a href="#parameter-targets"><code>targets</code></a></td>
    <td></td>
    <td>Instructs one or more devices to start a task, such as unlocking or rebooting.</td>
</tr>
<tr>
    <td><a href="#cancel_task"><CopyableCode code="cancel_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sends a cancel request for a specified task. You can cancel a task only if it's still in a QUEUED state. Tasks that are already running can't be cancelled. A task might still run if it's processed from the queue before the CancelTask operation changes the task's state.</td>
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
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the task that you are attempting to cancel. You can retrieve a task ID by using the ListTasks operation.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of tasks per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token to continue to the next page of tasks.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>A structure used to filter the list of tasks.</td>
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

Checks the metadata for a given task on a device.

```sql
SELECT
completedAt,
createdAt,
description,
lastUpdatedAt,
state,
tags,
targets,
taskArn,
taskId
FROM aws.snow_device_management.tasks
WHERE task_id = '{{ task_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tasks">

Returns a list of tasks that can be filtered by state.

```sql
SELECT
state,
tags,
taskArn,
taskId
FROM aws.snow_device_management.tasks
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND state = '{{ state }}'
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

Instructs one or more devices to start a task, such as unlocking or rebooting.

```sql
INSERT INTO aws.snow_device_management.tasks (
clientToken,
command,
description,
tags,
targets,
region
)
SELECT 
'{{ clientToken }}',
'{{ command }}' /* required */,
'{{ description }}',
'{{ tags }}',
'{{ targets }}' /* required */,
'{{ region }}'
RETURNING
taskArn,
taskId
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
    - name: clientToken
      value: "{{ clientToken }}"
    - name: command
      description: |
        The command given to the device to execute.
      value:
        reboot: "{{ reboot }}"
        unlock: "{{ unlock }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
    - name: targets
      value:
        - "{{ targets }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_task"
    values={[
        { label: 'cancel_task', value: 'cancel_task' }
    ]}
>
<TabItem value="cancel_task">

Sends a cancel request for a specified task. You can cancel a task only if it's still in a QUEUED state. Tasks that are already running can't be cancelled. A task might still run if it's processed from the queue before the CancelTask operation changes the task's state.

```sql
EXEC aws.snow_device_management.tasks.cancel_task 
@task_id='{{ task_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
