--- 
title: tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tasks
  - ecs
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_tasks"
    values={[
        { label: 'describe_tasks', value: 'describe_tasks' },
        { label: 'list_tasks', value: 'list_tasks' }
    ]}
>
<TabItem value="describe_tasks">

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
    <td><CopyableCode code="failures" /></td>
    <td><code>array</code></td>
    <td>Any failures associated with the call.</td>
</tr>
<tr>
    <td><CopyableCode code="tasks" /></td>
    <td><code>array</code></td>
    <td>The list of tasks.</td>
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
    <td><CopyableCode code="task_arn" /></td>
    <td><code>string</code></td>
    <td>The list of task ARN entries for the ListTasks request.</td>
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
    <td><a href="#describe_tasks"><CopyableCode code="describe_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a specified task or tasks. Currently, stopped tasks appear in the returned results for at least one hour. If you have tasks with tags, and then delete the cluster, the tagged tasks are returned in the response. If you create a new cluster with the same name as the deleted cluster, the tagged tasks are not included in the response.</td>
</tr>
<tr>
    <td><a href="#list_tasks"><CopyableCode code="list_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of tasks. You can filter the results by cluster, task definition family, container instance, launch type, what IAM principal started the task, or by the desired status of the task. Recently stopped tasks might appear in the returned results.</td>
</tr>
<tr>
    <td><a href="#submit_task_state_change"><CopyableCode code="submit_task_state_change" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent. Sent to acknowledge that a task changed states.</td>
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
    defaultValue="describe_tasks"
    values={[
        { label: 'describe_tasks', value: 'describe_tasks' },
        { label: 'list_tasks', value: 'list_tasks' }
    ]}
>
<TabItem value="describe_tasks">

Describes a specified task or tasks. Currently, stopped tasks appear in the returned results for at least one hour. If you have tasks with tags, and then delete the cluster, the tagged tasks are returned in the response. If you create a new cluster with the same name as the deleted cluster, the tagged tasks are not included in the response.

```sql
SELECT
failures,
tasks
FROM aws.ecs.tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tasks">

Returns a list of tasks. You can filter the results by cluster, task definition family, container instance, launch type, what IAM principal started the task, or by the desired status of the task. Recently stopped tasks might appear in the returned results.

```sql
SELECT
task_arn
FROM aws.ecs.tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="submit_task_state_change"
    values={[
        { label: 'submit_task_state_change', value: 'submit_task_state_change' }
    ]}
>
<TabItem value="submit_task_state_change">

This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent. Sent to acknowledge that a task changed states.

```sql
EXEC aws.ecs.tasks.submit_task_state_change 
@region='{{ region }}' --required 
@@json=
'{
"cluster": "{{ cluster }}", 
"task": "{{ task }}", 
"status": "{{ status }}", 
"reason": "{{ reason }}", 
"containers": "{{ containers }}", 
"attachments": "{{ attachments }}", 
"managedAgents": "{{ managedAgents }}", 
"pullStartedAt": "{{ pullStartedAt }}", 
"pullStoppedAt": "{{ pullStoppedAt }}", 
"executionStoppedAt": "{{ executionStoppedAt }}"
}'
;
```
</TabItem>
</Tabs>
