--- 
title: message_move_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - message_move_tasks
  - sqs
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

Creates, updates, deletes, gets or lists a <code>message_move_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="message_move_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sqs.message_move_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_message_move_tasks"
    values={[
        { label: 'list_message_move_tasks', value: 'list_message_move_tasks' }
    ]}
>
<TabItem value="list_message_move_tasks">

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
    <td><CopyableCode code="results" /></td>
    <td><code>array</code></td>
    <td>A list of message movement tasks and their attributes.</td>
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
    <td><a href="#list_message_move_tasks"><CopyableCode code="list_message_move_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the most recent message movement tasks (up to 10) under a specific source queue. This action is currently limited to supporting message redrive from dead-letter queues (DLQs) only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue at any given time.</td>
</tr>
<tr>
    <td><a href="#cancel_message_move_task"><CopyableCode code="cancel_message_move_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TaskHandle"><code>TaskHandle</code></a></td>
    <td></td>
    <td>Cancels a specified message movement task. A message movement can only be cancelled when the current status is RUNNING. Cancelling a message movement task does not revert the messages that have already been moved. It can only stop the messages that have not been moved yet. This action is currently limited to supporting message redrive from dead-letter queues (DLQs) only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue at any given time.</td>
</tr>
<tr>
    <td><a href="#start_message_move_task"><CopyableCode code="start_message_move_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceArn"><code>SourceArn</code></a></td>
    <td></td>
    <td>Starts an asynchronous task to move messages from a specified source queue to a specified destination queue. This action is currently limited to supporting message redrive from queues that are configured as dead-letter queues (DLQs) of other Amazon SQS queues only. Non-SQS queue sources of dead-letter queues, such as Lambda or Amazon SNS topics, are currently not supported. In dead-letter queues redrive context, the StartMessageMoveTask the source queue is the DLQ, while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue at any given time.</td>
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
    defaultValue="list_message_move_tasks"
    values={[
        { label: 'list_message_move_tasks', value: 'list_message_move_tasks' }
    ]}
>
<TabItem value="list_message_move_tasks">

Gets the most recent message movement tasks (up to 10) under a specific source queue. This action is currently limited to supporting message redrive from dead-letter queues (DLQs) only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue at any given time.

```sql
SELECT
results
FROM aws.sqs.message_move_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_message_move_task"
    values={[
        { label: 'cancel_message_move_task', value: 'cancel_message_move_task' },
        { label: 'start_message_move_task', value: 'start_message_move_task' }
    ]}
>
<TabItem value="cancel_message_move_task">

Cancels a specified message movement task. A message movement can only be cancelled when the current status is RUNNING. Cancelling a message movement task does not revert the messages that have already been moved. It can only stop the messages that have not been moved yet. This action is currently limited to supporting message redrive from dead-letter queues (DLQs) only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue at any given time.

```sql
EXEC aws.sqs.message_move_tasks.cancel_message_move_task 
@region='{{ region }}' --required 
@@json=
'{
"TaskHandle": "{{ TaskHandle }}"
}'
;
```
</TabItem>
<TabItem value="start_message_move_task">

Starts an asynchronous task to move messages from a specified source queue to a specified destination queue. This action is currently limited to supporting message redrive from queues that are configured as dead-letter queues (DLQs) of other Amazon SQS queues only. Non-SQS queue sources of dead-letter queues, such as Lambda or Amazon SNS topics, are currently not supported. In dead-letter queues redrive context, the StartMessageMoveTask the source queue is the DLQ, while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue at any given time.

```sql
EXEC aws.sqs.message_move_tasks.start_message_move_task 
@region='{{ region }}' --required 
@@json=
'{
"SourceArn": "{{ SourceArn }}", 
"DestinationArn": "{{ DestinationArn }}", 
"MaxNumberOfMessagesPerSecond": {{ MaxNumberOfMessagesPerSecond }}
}'
;
```
</TabItem>
</Tabs>
