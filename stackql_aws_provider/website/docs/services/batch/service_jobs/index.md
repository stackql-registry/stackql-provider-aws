--- 
title: service_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - service_jobs
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

Creates, updates, deletes, gets or lists a <code>service_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.batch.service_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_service_job"
    values={[
        { label: 'describe_service_job', value: 'describe_service_job' },
        { label: 'list_service_jobs', value: 'list_service_jobs' }
    ]}
>
<TabItem value="describe_service_job">

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
    <td><CopyableCode code="attempts" /></td>
    <td><code>array</code></td>
    <td>A list of job attempts associated with the service job.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_usage" /></td>
    <td><code>array</code></td>
    <td>The configured capacity for the service job, such as the number of instances. The number of instances should be the same value as the serviceRequestPayload.InstanceCount field.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Unix timestamp (in milliseconds) for when the service job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="is_terminated" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the service job has been terminated.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The job ID for the service job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_queue" /></td>
    <td><code>string</code></td>
    <td>The ARN of the job queue that the service job is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_attempt" /></td>
    <td><code>object</code></td>
    <td>The latest attempt associated with the service job.</td>
</tr>
<tr>
    <td><CopyableCode code="preemption_configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies the service job behavior when preempted.</td>
</tr>
<tr>
    <td><CopyableCode code="preemption_summary" /></td>
    <td><code>object</code></td>
    <td>Summarizes the preemptions of the service job. This field appears on a service job when it has been preempted.</td>
</tr>
<tr>
    <td><CopyableCode code="quota_share_name" /></td>
    <td><code>string</code></td>
    <td>The name of the quota share that the service job is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="retry_strategy" /></td>
    <td><code>object</code></td>
    <td>The retry strategy to use for failed service jobs that are submitted with this service job.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Unix timestamp (in milliseconds) for when the service job was scheduled. This represents when the service job was dispatched to SageMaker and the service job transitioned to the SCHEDULED state.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduling_priority" /></td>
    <td><code>integer</code></td>
    <td>The scheduling priority of the service job.</td>
</tr>
<tr>
    <td><CopyableCode code="service_job_type" /></td>
    <td><code>string</code></td>
    <td>The type of service job. For SageMaker Training jobs, this value is SAGEMAKER_TRAINING. (SAGEMAKER_TRAINING)</td>
</tr>
<tr>
    <td><CopyableCode code="service_request_payload" /></td>
    <td><code>string</code></td>
    <td>The request, in JSON, for the service that the SubmitServiceJob operation is queueing.</td>
</tr>
<tr>
    <td><CopyableCode code="share_identifier" /></td>
    <td><code>string</code></td>
    <td>The share identifier for the service job. This is used for fair-share scheduling.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Unix timestamp (in milliseconds) for when the service job was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the service job. (SUBMITTED, PENDING, RUNNABLE, SCHEDULED, STARTING, RUNNING, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>A short, human-readable string to provide more details for the current status of the service job.</td>
</tr>
<tr>
    <td><CopyableCode code="stopped_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Unix timestamp (in milliseconds) for when the service job stopped running.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that are associated with the service job. Each tag consists of a key and an optional value. For more information, see Tagging your Batch resources.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout_config" /></td>
    <td><code>object</code></td>
    <td>The timeout configuration for the service job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_service_jobs">

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
    <td><CopyableCode code="capacity_usage" /></td>
    <td><code>array</code></td>
    <td>The capacity usage information for this service job, including the unit of measure and quantity of resources being used.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Unix timestamp (in milliseconds) for when the service job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The job ID for the service job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service job.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_attempt" /></td>
    <td><code>object</code></td>
    <td>Information about the latest attempt for the service job.</td>
</tr>
<tr>
    <td><CopyableCode code="quota_share_name" /></td>
    <td><code>string</code></td>
    <td>The quota share for the service job.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Unix timestamp (in milliseconds) for when the service job was scheduled for execution.</td>
</tr>
<tr>
    <td><CopyableCode code="service_job_type" /></td>
    <td><code>string</code></td>
    <td>The type of service job. For SageMaker Training jobs, this value is SAGEMAKER_TRAINING. (SAGEMAKER_TRAINING)</td>
</tr>
<tr>
    <td><CopyableCode code="share_identifier" /></td>
    <td><code>string</code></td>
    <td>The share identifier for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Unix timestamp (in milliseconds) for when the service job was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the service job. (SUBMITTED, PENDING, RUNNABLE, SCHEDULED, STARTING, RUNNING, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>A short string to provide more details on the current status of the service job.</td>
</tr>
<tr>
    <td><CopyableCode code="stopped_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Unix timestamp (in milliseconds) for when the service job stopped running.</td>
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
    <td><a href="#describe_service_job"><CopyableCode code="describe_service_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The details of a service job.</td>
</tr>
<tr>
    <td><a href="#list_service_jobs"><CopyableCode code="list_service_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of service jobs for a specified job queue.</td>
</tr>
<tr>
    <td><a href="#update_service_job"><CopyableCode code="update_service_job" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-schedulingPriority"><code>schedulingPriority</code></a></td>
    <td></td>
    <td>Updates the priority of a specified service job in an Batch job queue.</td>
</tr>
<tr>
    <td><a href="#terminate_service_job"><CopyableCode code="terminate_service_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Terminates a service job in a job queue.</td>
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
    defaultValue="describe_service_job"
    values={[
        { label: 'describe_service_job', value: 'describe_service_job' },
        { label: 'list_service_jobs', value: 'list_service_jobs' }
    ]}
>
<TabItem value="describe_service_job">

The details of a service job.

```sql
SELECT
attempts,
capacity_usage,
created_at,
is_terminated,
job_arn,
job_id,
job_name,
job_queue,
latest_attempt,
preemption_configuration,
preemption_summary,
quota_share_name,
retry_strategy,
scheduled_at,
scheduling_priority,
service_job_type,
service_request_payload,
share_identifier,
started_at,
status,
status_reason,
stopped_at,
tags,
timeout_config
FROM aws.batch.service_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_service_jobs">

Returns a list of service jobs for a specified job queue.

```sql
SELECT
capacity_usage,
created_at,
job_arn,
job_id,
job_name,
latest_attempt,
quota_share_name,
scheduled_at,
service_job_type,
share_identifier,
started_at,
status,
status_reason,
stopped_at
FROM aws.batch.service_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_job"
    values={[
        { label: 'update_service_job', value: 'update_service_job' }
    ]}
>
<TabItem value="update_service_job">

Updates the priority of a specified service job in an Batch job queue.

```sql
UPDATE aws.batch.service_jobs
SET 
jobId = '{{ jobId }}',
schedulingPriority = {{ schedulingPriority }}
WHERE 
region = '{{ region }}' --required
AND jobId = '{{ jobId }}' --required
AND schedulingPriority = '{{ schedulingPriority }}' --required
RETURNING
job_arn,
job_id,
job_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate_service_job"
    values={[
        { label: 'terminate_service_job', value: 'terminate_service_job' }
    ]}
>
<TabItem value="terminate_service_job">

Terminates a service job in a job queue.

```sql
DELETE FROM aws.batch.service_jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
