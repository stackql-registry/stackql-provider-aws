--- 
title: job_queues
hide_title: false
hide_table_of_contents: false
keywords:
  - job_queues
  - batch
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

Creates, updates, deletes, gets or lists a <code>job_queues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_queues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.batch.job_queues" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_job_queues"
    values={[
        { label: 'describe_job_queues', value: 'describe_job_queues' }
    ]}
>
<TabItem value="describe_job_queues">

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
    <td><CopyableCode code="computeEnvironmentOrder" /></td>
    <td><code>array</code></td>
    <td>The compute environments that are attached to the job queue and the order that job placement is preferred. Compute environments are selected for job placement in ascending order.</td>
</tr>
<tr>
    <td><CopyableCode code="jobQueueArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the job queue.</td>
</tr>
<tr>
    <td><CopyableCode code="jobQueueName" /></td>
    <td><code>string</code></td>
    <td>The job queue name.</td>
</tr>
<tr>
    <td><CopyableCode code="jobQueueType" /></td>
    <td><code>string</code></td>
    <td>The type of job queue. For service jobs that run on SageMaker Training, this value is SAGEMAKER_TRAINING. For regular container jobs, this value is EKS, ECS, or ECS_FARGATE depending on the compute environment. (EKS, ECS, ECS_FARGATE, SAGEMAKER_TRAINING)</td>
</tr>
<tr>
    <td><CopyableCode code="jobStateTimeLimitActions" /></td>
    <td><code>array</code></td>
    <td>The set of actions that Batch perform on jobs that remain at the head of the job queue in the specified state longer than specified times. Batch will perform each action after maxTimeSeconds has passed.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The priority of the job queue. Job queue priority determines the order that job queues are evaluated when multiple queues dispatch jobs within a shared compute environment. A higher value for priority indicates a higher priority. Queues are evaluated in cycles, in descending order by priority. For example, a job queue with a priority value of 10 is evaluated before a queue with a priority value of 1. All of the compute environments must be either Amazon EC2 (EC2 or SPOT) or Fargate (FARGATE or FARGATE_SPOT). Amazon EC2 and Fargate compute environments can't be mixed. Job queue priority doesn't guarantee that a particular job executes before a job in a lower priority queue. Jobs added to higher priority queues during the queue evaluation cycle might not be evaluated until the next cycle. A job is dispatched from a queue only if resources are available when the queue is evaluated. If there are insufficient resources available at that time, the cycle proceeds to the next queue. This means that jobs added to higher priority queues might have to wait for jobs in multiple lower priority queues to complete before they are dispatched. You can use job dependencies to control the order for jobs from queues with different priorities. For more information, see Job Dependencies in the Batch User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="schedulingPolicyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the scheduling policy. The format is aws:Partition:batch:Region:Account:scheduling-policy/Name . For example, aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceEnvironmentOrder" /></td>
    <td><code>array</code></td>
    <td>The order of the service environment associated with the job queue. Job queues with a higher priority are evaluated first when associated with the same service environment.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Describes the ability of the queue to accept new jobs. If the job queue state is ENABLED, it can accept jobs. If the job queue state is DISABLED, new jobs can't be added to the queue, but jobs already in the queue can finish. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the job queue (for example, CREATING or VALID). (CREATING, UPDATING, DELETING, DELETED, VALID, INVALID)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>A short, human-readable string to provide additional details for the current status of the job queue.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that are applied to the job queue. For more information, see Tagging your Batch resources in Batch User Guide.</td>
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
    <td><a href="#describe_job_queues"><CopyableCode code="describe_job_queues" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more of your job queues.</td>
</tr>
<tr>
    <td><a href="#create_job_queue"><CopyableCode code="create_job_queue" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobQueueName"><code>jobQueueName</code></a>, <a href="#parameter-priority"><code>priority</code></a></td>
    <td></td>
    <td>Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments. You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.</td>
</tr>
<tr>
    <td><a href="#update_job_queue"><CopyableCode code="update_job_queue" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobQueue"><code>jobQueue</code></a></td>
    <td></td>
    <td>Updates a job queue.</td>
</tr>
<tr>
    <td><a href="#delete_job_queue"><CopyableCode code="delete_job_queue" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified job queue. You must first disable submissions for a queue with the UpdateJobQueue operation. All jobs in the queue are eventually terminated when you delete a job queue. It's not necessary to disassociate compute environments from a queue before submitting a DeleteJobQueue request.</td>
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
    defaultValue="describe_job_queues"
    values={[
        { label: 'describe_job_queues', value: 'describe_job_queues' }
    ]}
>
<TabItem value="describe_job_queues">

Describes one or more of your job queues.

```sql
SELECT
computeEnvironmentOrder,
jobQueueArn,
jobQueueName,
jobQueueType,
jobStateTimeLimitActions,
priority,
schedulingPolicyArn,
serviceEnvironmentOrder,
state,
status,
statusReason,
tags
FROM aws.batch.job_queues
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_job_queue"
    values={[
        { label: 'create_job_queue', value: 'create_job_queue' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_job_queue">

Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments. You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.

```sql
INSERT INTO aws.batch.job_queues (
jobQueueName,
state,
schedulingPolicyArn,
priority,
computeEnvironmentOrder,
serviceEnvironmentOrder,
jobQueueType,
tags,
jobStateTimeLimitActions,
region
)
SELECT 
'{{ jobQueueName }}' /* required */,
'{{ state }}',
'{{ schedulingPolicyArn }}',
{{ priority }} /* required */,
'{{ computeEnvironmentOrder }}',
'{{ serviceEnvironmentOrder }}',
'{{ jobQueueType }}',
'{{ tags }}',
'{{ jobStateTimeLimitActions }}',
'{{ region }}'
RETURNING
jobQueueArn,
jobQueueName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: job_queues
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the job_queues resource.
    - name: jobQueueName
      value: "{{ jobQueueName }}"
    - name: state
      value: "{{ state }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: schedulingPolicyArn
      value: "{{ schedulingPolicyArn }}"
    - name: priority
      value: {{ priority }}
    - name: computeEnvironmentOrder
      value:
        - order: {{ order }}
          computeEnvironment: "{{ computeEnvironment }}"
    - name: serviceEnvironmentOrder
      value:
        - order: {{ order }}
          serviceEnvironment: "{{ serviceEnvironment }}"
    - name: jobQueueType
      value: "{{ jobQueueType }}"
      valid_values: ['EKS', 'ECS', 'ECS_FARGATE', 'SAGEMAKER_TRAINING']
    - name: tags
      value: "{{ tags }}"
    - name: jobStateTimeLimitActions
      value:
        - reason: "{{ reason }}"
          state: "{{ state }}"
          maxTimeSeconds: {{ maxTimeSeconds }}
          action: "{{ action }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_job_queue"
    values={[
        { label: 'update_job_queue', value: 'update_job_queue' }
    ]}
>
<TabItem value="update_job_queue">

Updates a job queue.

```sql
UPDATE aws.batch.job_queues
SET 
jobQueue = '{{ jobQueue }}',
state = '{{ state }}',
schedulingPolicyArn = '{{ schedulingPolicyArn }}',
priority = {{ priority }},
computeEnvironmentOrder = '{{ computeEnvironmentOrder }}',
serviceEnvironmentOrder = '{{ serviceEnvironmentOrder }}',
jobStateTimeLimitActions = '{{ jobStateTimeLimitActions }}'
WHERE 
region = '{{ region }}' --required
AND jobQueue = '{{ jobQueue }}' --required
RETURNING
jobQueueArn,
jobQueueName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_job_queue"
    values={[
        { label: 'delete_job_queue', value: 'delete_job_queue' }
    ]}
>
<TabItem value="delete_job_queue">

Deletes the specified job queue. You must first disable submissions for a queue with the UpdateJobQueue operation. All jobs in the queue are eventually terminated when you delete a job queue. It's not necessary to disassociate compute environments from a queue before submitting a DeleteJobQueue request.

```sql
DELETE FROM aws.batch.job_queues
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
