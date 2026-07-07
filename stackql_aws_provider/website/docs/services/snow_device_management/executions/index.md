--- 
title: executions
hide_title: false
hide_table_of_contents: false
keywords:
  - executions
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

Creates, updates, deletes, gets or lists an <code>executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.snow_device_management.executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_execution"
    values={[
        { label: 'describe_execution', value: 'describe_execution' },
        { label: 'list_executions', value: 'list_executions' }
    ]}
>
<TabItem value="describe_execution">

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
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the status of the execution was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="managedDeviceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the managed device that the task is being executed on.</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the execution began.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the execution. (QUEUED, IN_PROGRESS, CANCELED, FAILED, SUCCEEDED, REJECTED, TIMED_OUT)</td>
</tr>
<tr>
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>The ID of the task being executed on the device.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_executions">

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
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="managedDeviceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the managed device that the task is being executed on.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the execution. (QUEUED, IN_PROGRESS, CANCELED, FAILED, SUCCEEDED, REJECTED, TIMED_OUT)</td>
</tr>
<tr>
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>The ID of the task.</td>
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
    <td><a href="#describe_execution"><CopyableCode code="describe_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-managed_device_id"><code>managed_device_id</code></a>, <a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Checks the status of a remote task running on one or more target devices.</td>
</tr>
<tr>
    <td><a href="#list_executions"><CopyableCode code="list_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-taskId"><code>taskId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td>Returns the status of tasks for one or more target devices.</td>
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
<tr id="parameter-managed_device_id">
    <td><CopyableCode code="managed_device_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the managed device.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-taskId">
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>The ID of the task.</td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the task that the action is describing.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of tasks to list per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token to continue to the next page of tasks.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>A structure used to filter the tasks by their current state.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_execution"
    values={[
        { label: 'describe_execution', value: 'describe_execution' },
        { label: 'list_executions', value: 'list_executions' }
    ]}
>
<TabItem value="describe_execution">

Checks the status of a remote task running on one or more target devices.

```sql
SELECT
executionId,
lastUpdatedAt,
managedDeviceId,
startedAt,
state,
taskId
FROM aws.snow_device_management.executions
WHERE managed_device_id = '{{ managed_device_id }}' -- required
AND task_id = '{{ task_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_executions">

Returns the status of tasks for one or more target devices.

```sql
SELECT
executionId,
managedDeviceId,
state,
taskId
FROM aws.snow_device_management.executions
WHERE taskId = '{{ taskId }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND state = '{{ state }}'
;
```
</TabItem>
</Tabs>
