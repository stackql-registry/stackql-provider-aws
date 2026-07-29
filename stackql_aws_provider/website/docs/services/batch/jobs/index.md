--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.batch.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_jobs"
    values={[
        { label: 'describe_jobs', value: 'describe_jobs' },
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="describe_jobs">

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
    <td><CopyableCode code="jobs" /></td>
    <td><code>array</code></td>
    <td>The list of jobs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_jobs">

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
    <td><CopyableCode code="array_properties" /></td>
    <td><code>object</code></td>
    <td>The array properties of the job, if it's an array job.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_usage" /></td>
    <td><code>array</code></td>
    <td>The configured capacity usage information for this job, including the unit of measure and quantity of resources.</td>
</tr>
<tr>
    <td><CopyableCode code="container" /></td>
    <td><code>object</code></td>
    <td>An object that represents the details of the container that's associated with the job.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Unix timestamp (in milliseconds) for when the job was created. For non-array jobs and parent array jobs, this is when the job entered the SUBMITTED state (at the time SubmitJob was called). For array child jobs, this is when the child job was spawned by its parent and entered the PENDING state.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_definition" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the job definition.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The job ID.</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The job name.</td>
</tr>
<tr>
    <td><CopyableCode code="node_properties" /></td>
    <td><code>object</code></td>
    <td>The node properties for a single node in a job summary list. This isn't applicable to jobs that are running on Fargate resources.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Unix timestamp (in milliseconds) for when the job was scheduled for execution. For more information on job statues, see Service job status in the Batch User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="share_identifier" /></td>
    <td><code>string</code></td>
    <td>The share identifier for the fairshare scheduling queue that this job is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Unix timestamp for when the job was started. More specifically, it's when the job transitioned from the STARTING state to the RUNNING state.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status for the job. (SUBMITTED, PENDING, RUNNABLE, STARTING, RUNNING, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>A short, human-readable string to provide more details for the current status of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="stopped_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Unix timestamp for when the job was stopped. More specifically, it's when the job transitioned from the RUNNING state to a terminal state, such as SUCCEEDED or FAILED.</td>
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
    <td><a href="#describe_jobs"><CopyableCode code="describe_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a list of Batch jobs.</td>
</tr>
<tr>
    <td><a href="#list_jobs"><CopyableCode code="list_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Batch jobs. You must specify only one of the following items: A job queue ID to return a list of jobs in that job queue A multi-node parallel job ID to return a list of nodes for that job An array job ID to return a list of the children for that job</td>
</tr>
<tr>
    <td><a href="#terminate_job"><CopyableCode code="terminate_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Terminates a job in a job queue. Jobs that are in the STARTING or RUNNING state are terminated, which causes them to transition to FAILED. Jobs that have not progressed to the STARTING state are cancelled.</td>
</tr>
<tr>
    <td><a href="#cancel_job"><CopyableCode code="cancel_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-reason"><code>reason</code></a></td>
    <td></td>
    <td>Cancels a job in an Batch job queue. Jobs that are in a SUBMITTED, PENDING, or RUNNABLE state are cancelled and the job status is updated to FAILED. A PENDING job is canceled after all dependency jobs are completed. Therefore, it may take longer than expected to cancel a job in PENDING status. When you try to cancel an array parent job in PENDING, Batch attempts to cancel all child jobs. The array parent job is canceled when all child jobs are completed. Jobs that progressed to the STARTING or RUNNING state aren't canceled. However, the API operation still succeeds, even if no job is canceled. These jobs must be terminated with the TerminateJob operation.</td>
</tr>
<tr>
    <td><a href="#submit_job"><CopyableCode code="submit_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobName"><code>jobName</code></a>, <a href="#parameter-jobQueue"><code>jobQueue</code></a>, <a href="#parameter-jobDefinition"><code>jobDefinition</code></a></td>
    <td></td>
    <td>Submits an Batch job from a job definition. Parameters that are specified during SubmitJob override parameters defined in the job definition. vCPU and memory requirements that are specified in the resourceRequirements objects in the job definition are the exception. They can't be overridden this way using the memory and vcpus parameters. Rather, you must specify updates to job definition parameters in a resourceRequirements object that's included in the containerOverrides parameter. Job queues with a scheduling policy are limited to 500 active share identifiers at a time. Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14 days, Fargate resources might become unavailable and job might be terminated.</td>
</tr>
<tr>
    <td><a href="#submit_service_job"><CopyableCode code="submit_service_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobName"><code>jobName</code></a>, <a href="#parameter-jobQueue"><code>jobQueue</code></a>, <a href="#parameter-serviceRequestPayload"><code>serviceRequestPayload</code></a>, <a href="#parameter-serviceJobType"><code>serviceJobType</code></a></td>
    <td></td>
    <td>Submits a service job to a specified job queue to run on SageMaker AI. A service job is a unit of work that you submit to Batch for execution on SageMaker AI.</td>
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
    defaultValue="describe_jobs"
    values={[
        { label: 'describe_jobs', value: 'describe_jobs' },
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="describe_jobs">

Describes a list of Batch jobs.

```sql
SELECT
jobs
FROM aws.batch.jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_jobs">

Returns a list of Batch jobs. You must specify only one of the following items: A job queue ID to return a list of jobs in that job queue A multi-node parallel job ID to return a list of nodes for that job An array job ID to return a list of the children for that job

```sql
SELECT
array_properties,
capacity_usage,
container,
created_at,
job_arn,
job_definition,
job_id,
job_name,
node_properties,
scheduled_at,
share_identifier,
started_at,
status,
status_reason,
stopped_at
FROM aws.batch.jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate_job"
    values={[
        { label: 'terminate_job', value: 'terminate_job' }
    ]}
>
<TabItem value="terminate_job">

Terminates a job in a job queue. Jobs that are in the STARTING or RUNNING state are terminated, which causes them to transition to FAILED. Jobs that have not progressed to the STARTING state are cancelled.

```sql
DELETE FROM aws.batch.jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_job"
    values={[
        { label: 'cancel_job', value: 'cancel_job' },
        { label: 'submit_job', value: 'submit_job' },
        { label: 'submit_service_job', value: 'submit_service_job' }
    ]}
>
<TabItem value="cancel_job">

Cancels a job in an Batch job queue. Jobs that are in a SUBMITTED, PENDING, or RUNNABLE state are cancelled and the job status is updated to FAILED. A PENDING job is canceled after all dependency jobs are completed. Therefore, it may take longer than expected to cancel a job in PENDING status. When you try to cancel an array parent job in PENDING, Batch attempts to cancel all child jobs. The array parent job is canceled when all child jobs are completed. Jobs that progressed to the STARTING or RUNNING state aren't canceled. However, the API operation still succeeds, even if no job is canceled. These jobs must be terminated with the TerminateJob operation.

```sql
EXEC aws.batch.jobs.cancel_job 
@region='{{ region }}' --required 
@@json=
'{
"jobId": "{{ jobId }}", 
"reason": "{{ reason }}"
}'
;
```
</TabItem>
<TabItem value="submit_job">

Submits an Batch job from a job definition. Parameters that are specified during SubmitJob override parameters defined in the job definition. vCPU and memory requirements that are specified in the resourceRequirements objects in the job definition are the exception. They can't be overridden this way using the memory and vcpus parameters. Rather, you must specify updates to job definition parameters in a resourceRequirements object that's included in the containerOverrides parameter. Job queues with a scheduling policy are limited to 500 active share identifiers at a time. Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14 days, Fargate resources might become unavailable and job might be terminated.

```sql
EXEC aws.batch.jobs.submit_job 
@region='{{ region }}' --required 
@@json=
'{
"jobName": "{{ jobName }}", 
"jobQueue": "{{ jobQueue }}", 
"shareIdentifier": "{{ shareIdentifier }}", 
"schedulingPriorityOverride": {{ schedulingPriorityOverride }}, 
"arrayProperties": "{{ arrayProperties }}", 
"dependsOn": "{{ dependsOn }}", 
"jobDefinition": "{{ jobDefinition }}", 
"parameters": "{{ parameters }}", 
"containerOverrides": "{{ containerOverrides }}", 
"nodeOverrides": "{{ nodeOverrides }}", 
"retryStrategy": "{{ retryStrategy }}", 
"propagateTags": {{ propagateTags }}, 
"timeout": "{{ timeout }}", 
"tags": "{{ tags }}", 
"eksPropertiesOverride": "{{ eksPropertiesOverride }}", 
"ecsPropertiesOverride": "{{ ecsPropertiesOverride }}", 
"consumableResourcePropertiesOverride": "{{ consumableResourcePropertiesOverride }}"
}'
;
```
</TabItem>
<TabItem value="submit_service_job">

Submits a service job to a specified job queue to run on SageMaker AI. A service job is a unit of work that you submit to Batch for execution on SageMaker AI.

```sql
EXEC aws.batch.jobs.submit_service_job 
@region='{{ region }}' --required 
@@json=
'{
"jobName": "{{ jobName }}", 
"jobQueue": "{{ jobQueue }}", 
"retryStrategy": "{{ retryStrategy }}", 
"schedulingPriority": {{ schedulingPriority }}, 
"serviceRequestPayload": "{{ serviceRequestPayload }}", 
"serviceJobType": "{{ serviceJobType }}", 
"shareIdentifier": "{{ shareIdentifier }}", 
"quotaShareName": "{{ quotaShareName }}", 
"preemptionConfiguration": "{{ preemptionConfiguration }}", 
"timeoutConfig": "{{ timeoutConfig }}", 
"tags": "{{ tags }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
