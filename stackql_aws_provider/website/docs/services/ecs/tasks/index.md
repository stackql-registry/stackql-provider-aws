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
    <td><a href="#run_task"><CopyableCode code="run_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-taskDefinition"><code>taskDefinition</code></a></td>
    <td></td>
    <td>Starts a new task using the specified task definition. On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition. Amazon Elastic Inference (EI) is no longer available to customers. You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see Scheduling Tasks in the Amazon Elastic Container Service Developer Guide. Alternatively, you can use StartTask to use your own scheduler or place tasks manually on specific container instances. You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when creating or updating a service. For more information, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide. The Amazon ECS API follows an eventual consistency model. This is because of the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your Amazon ECS resources might not be immediately visible to all subsequent commands you run. Keep this in mind when you carry out an API command that immediately follows a previous API command. To manage eventual consistency, you can do the following: Confirm the state of the resource before you run a command to modify it. Run the DescribeTasks command using an exponential backoff algorithm to ensure that you allow enough time for the previous command to propagate through the system. To do this, run the DescribeTasks command repeatedly, starting with a couple of seconds of wait time and increasing gradually up to five minutes of wait time. Add wait time between subsequent commands, even if the DescribeTasks command returns an accurate response. Apply an exponential backoff algorithm starting with a couple of seconds of wait time, and increase gradually up to about five minutes of wait time. If you get a ConflictException error, the RunTask request could not be processed due to conflicts. The provided clientToken is already in use with a different RunTask request. The resourceIds are the existing task ARNs which are already associated with the clientToken. To fix this issue: Run RunTask with a unique clientToken. Run RunTask with the clientToken and the original set of parameters If you get a ClientExceptionerror, the RunTask could not be processed because you use managed scaling and there is a capacity error because the quota of tasks in the PROVISIONING per cluster has been reached. For information about the service quotas, see Amazon ECS service quotas.</td>
</tr>
<tr>
    <td><a href="#start_task"><CopyableCode code="start_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-containerInstances"><code>containerInstances</code></a>, <a href="#parameter-taskDefinition"><code>taskDefinition</code></a></td>
    <td></td>
    <td>Starts a new task from the specified task definition on the specified container instance or instances. On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition. Amazon Elastic Inference (EI) is no longer available to customers. Alternatively, you can useRunTask to place tasks for you. For more information, see Scheduling Tasks in the Amazon Elastic Container Service Developer Guide. You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when creating or updating a service. For more information, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide.</td>
</tr>
<tr>
    <td><a href="#stop_task"><CopyableCode code="stop_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-task"><code>task</code></a></td>
    <td></td>
    <td>Stops a running task. Any tags associated with the task will be deleted. When you call StopTask on a task, the equivalent of docker stop is issued to the containers running in the task. This results in a stop signal value and a default 30-second timeout, after which the SIGKILL value is sent and the containers are forcibly stopped. This signal can be defined in your container image with the STOPSIGNAL instruction and will default to SIGTERM. If the container handles the SIGTERM value gracefully and exits within 30 seconds from receiving it, no SIGKILL value is sent. For Windows containers, POSIX signals do not work and runtime stops the container by sending a CTRL_SHUTDOWN_EVENT. For more information, see Unable to react to graceful shutdown of (Windows) container #25982 on GitHub. The default 30-second timeout can be configured on the Amazon ECS container agent with the ECS_CONTAINER_STOP_TIMEOUT variable. For more information, see Amazon ECS Container Agent Configuration in the Amazon Elastic Container Service Developer Guide.</td>
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
    defaultValue="run_task"
    values={[
        { label: 'run_task', value: 'run_task' },
        { label: 'start_task', value: 'start_task' },
        { label: 'stop_task', value: 'stop_task' },
        { label: 'submit_task_state_change', value: 'submit_task_state_change' }
    ]}
>
<TabItem value="run_task">

Starts a new task using the specified task definition. On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition. Amazon Elastic Inference (EI) is no longer available to customers. You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see Scheduling Tasks in the Amazon Elastic Container Service Developer Guide. Alternatively, you can use StartTask to use your own scheduler or place tasks manually on specific container instances. You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when creating or updating a service. For more information, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide. The Amazon ECS API follows an eventual consistency model. This is because of the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your Amazon ECS resources might not be immediately visible to all subsequent commands you run. Keep this in mind when you carry out an API command that immediately follows a previous API command. To manage eventual consistency, you can do the following: Confirm the state of the resource before you run a command to modify it. Run the DescribeTasks command using an exponential backoff algorithm to ensure that you allow enough time for the previous command to propagate through the system. To do this, run the DescribeTasks command repeatedly, starting with a couple of seconds of wait time and increasing gradually up to five minutes of wait time. Add wait time between subsequent commands, even if the DescribeTasks command returns an accurate response. Apply an exponential backoff algorithm starting with a couple of seconds of wait time, and increase gradually up to about five minutes of wait time. If you get a ConflictException error, the RunTask request could not be processed due to conflicts. The provided clientToken is already in use with a different RunTask request. The resourceIds are the existing task ARNs which are already associated with the clientToken. To fix this issue: Run RunTask with a unique clientToken. Run RunTask with the clientToken and the original set of parameters If you get a ClientExceptionerror, the RunTask could not be processed because you use managed scaling and there is a capacity error because the quota of tasks in the PROVISIONING per cluster has been reached. For information about the service quotas, see Amazon ECS service quotas.

```sql
EXEC aws.ecs.tasks.run_task 
@region='{{ region }}' --required 
@@json=
'{
"capacityProviderStrategy": "{{ capacityProviderStrategy }}", 
"cluster": "{{ cluster }}", 
"count": {{ count }}, 
"enableECSManagedTags": {{ enableECSManagedTags }}, 
"enableExecuteCommand": {{ enableExecuteCommand }}, 
"group": "{{ group }}", 
"launchType": "{{ launchType }}", 
"networkConfiguration": "{{ networkConfiguration }}", 
"overrides": "{{ overrides }}", 
"placementConstraints": "{{ placementConstraints }}", 
"placementStrategy": "{{ placementStrategy }}", 
"platformVersion": "{{ platformVersion }}", 
"propagateTags": "{{ propagateTags }}", 
"referenceId": "{{ referenceId }}", 
"startedBy": "{{ startedBy }}", 
"tags": "{{ tags }}", 
"taskDefinition": "{{ taskDefinition }}", 
"clientToken": "{{ clientToken }}", 
"volumeConfigurations": "{{ volumeConfigurations }}"
}'
;
```
</TabItem>
<TabItem value="start_task">

Starts a new task from the specified task definition on the specified container instance or instances. On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition. Amazon Elastic Inference (EI) is no longer available to customers. Alternatively, you can useRunTask to place tasks for you. For more information, see Scheduling Tasks in the Amazon Elastic Container Service Developer Guide. You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when creating or updating a service. For more information, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide.

```sql
EXEC aws.ecs.tasks.start_task 
@region='{{ region }}' --required 
@@json=
'{
"cluster": "{{ cluster }}", 
"containerInstances": "{{ containerInstances }}", 
"enableECSManagedTags": {{ enableECSManagedTags }}, 
"enableExecuteCommand": {{ enableExecuteCommand }}, 
"group": "{{ group }}", 
"networkConfiguration": "{{ networkConfiguration }}", 
"overrides": "{{ overrides }}", 
"propagateTags": "{{ propagateTags }}", 
"referenceId": "{{ referenceId }}", 
"startedBy": "{{ startedBy }}", 
"tags": "{{ tags }}", 
"taskDefinition": "{{ taskDefinition }}", 
"volumeConfigurations": "{{ volumeConfigurations }}"
}'
;
```
</TabItem>
<TabItem value="stop_task">

Stops a running task. Any tags associated with the task will be deleted. When you call StopTask on a task, the equivalent of docker stop is issued to the containers running in the task. This results in a stop signal value and a default 30-second timeout, after which the SIGKILL value is sent and the containers are forcibly stopped. This signal can be defined in your container image with the STOPSIGNAL instruction and will default to SIGTERM. If the container handles the SIGTERM value gracefully and exits within 30 seconds from receiving it, no SIGKILL value is sent. For Windows containers, POSIX signals do not work and runtime stops the container by sending a CTRL_SHUTDOWN_EVENT. For more information, see Unable to react to graceful shutdown of (Windows) container #25982 on GitHub. The default 30-second timeout can be configured on the Amazon ECS container agent with the ECS_CONTAINER_STOP_TIMEOUT variable. For more information, see Amazon ECS Container Agent Configuration in the Amazon Elastic Container Service Developer Guide.

```sql
EXEC aws.ecs.tasks.stop_task 
@region='{{ region }}' --required 
@@json=
'{
"cluster": "{{ cluster }}", 
"task": "{{ task }}", 
"reason": "{{ reason }}"
}'
;
```
</TabItem>
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
