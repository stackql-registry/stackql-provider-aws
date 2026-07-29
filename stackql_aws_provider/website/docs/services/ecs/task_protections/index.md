--- 
title: task_protections
hide_title: false
hide_table_of_contents: false
keywords:
  - task_protections
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

Creates, updates, deletes, gets or lists a <code>task_protections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="task_protections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.task_protections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_task_protection"
    values={[
        { label: 'get_task_protection', value: 'get_task_protection' }
    ]}
>
<TabItem value="get_task_protection">

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
    <td><CopyableCode code="protected_tasks" /></td>
    <td><code>array</code></td>
    <td>A list of tasks with the following information. taskArn: The task ARN. protectionEnabled: The protection status of the task. If scale-in protection is turned on for a task, the value is true. Otherwise, it is false. expirationDate: The epoch time when protection for the task will expire.</td>
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
    <td><a href="#get_task_protection"><CopyableCode code="get_task_protection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the protection status of tasks in an Amazon ECS service.</td>
</tr>
<tr>
    <td><a href="#update_task_protection"><CopyableCode code="update_task_protection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cluster"><code>cluster</code></a>, <a href="#parameter-tasks"><code>tasks</code></a>, <a href="#parameter-protectionEnabled"><code>protectionEnabled</code></a></td>
    <td></td>
    <td>Updates the protection status of a task. You can set protectionEnabled to true to protect your task from termination during scale-in events from Service Autoscaling or deployments. Task-protection, by default, expires after 2 hours at which point Amazon ECS clears the protectionEnabled property making the task eligible for termination by a subsequent scale-in event. You can specify a custom expiration period for task protection from 1 minute to up to 2,880 minutes (48 hours). To specify the custom expiration period, set the expiresInMinutes property. The expiresInMinutes property is always reset when you invoke this operation for a task that already has protectionEnabled set to true. You can keep extending the protection expiration period of a task by invoking this operation repeatedly. To learn more about Amazon ECS task protection, see Task scale-in protection in the Amazon Elastic Container Service Developer Guide . This operation is only supported for tasks belonging to an Amazon ECS service. Invoking this operation for a standalone task will result in an TASK_NOT_VALID failure. For more information, see API failure reasons. If you prefer to set task protection from within the container, we recommend using the Task scale-in protection endpoint.</td>
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
    defaultValue="get_task_protection"
    values={[
        { label: 'get_task_protection', value: 'get_task_protection' }
    ]}
>
<TabItem value="get_task_protection">

Retrieves the protection status of tasks in an Amazon ECS service.

```sql
SELECT
failures,
protected_tasks
FROM aws.ecs.task_protections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_task_protection"
    values={[
        { label: 'update_task_protection', value: 'update_task_protection' }
    ]}
>
<TabItem value="update_task_protection">

Updates the protection status of a task. You can set protectionEnabled to true to protect your task from termination during scale-in events from Service Autoscaling or deployments. Task-protection, by default, expires after 2 hours at which point Amazon ECS clears the protectionEnabled property making the task eligible for termination by a subsequent scale-in event. You can specify a custom expiration period for task protection from 1 minute to up to 2,880 minutes (48 hours). To specify the custom expiration period, set the expiresInMinutes property. The expiresInMinutes property is always reset when you invoke this operation for a task that already has protectionEnabled set to true. You can keep extending the protection expiration period of a task by invoking this operation repeatedly. To learn more about Amazon ECS task protection, see Task scale-in protection in the Amazon Elastic Container Service Developer Guide . This operation is only supported for tasks belonging to an Amazon ECS service. Invoking this operation for a standalone task will result in an TASK_NOT_VALID failure. For more information, see API failure reasons. If you prefer to set task protection from within the container, we recommend using the Task scale-in protection endpoint.

```sql
UPDATE aws.ecs.task_protections
SET 
cluster = '{{ cluster }}',
tasks = '{{ tasks }}',
protectionEnabled = {{ protectionEnabled }},
expiresInMinutes = {{ expiresInMinutes }}
WHERE 
region = '{{ region }}' --required
AND cluster = '{{ cluster }}' --required
AND tasks = '{{ tasks }}' --required
AND protectionEnabled = {{ protectionEnabled }} --required
RETURNING
failures,
protected_tasks;
```
</TabItem>
</Tabs>
