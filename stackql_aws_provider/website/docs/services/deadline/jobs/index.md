--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - deadline
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_job"
    values={[
        { label: 'get_job', value: 'get_job' },
        { label: 'search_jobs', value: 'search_jobs' },
        { label: 'list_jobs', value: 'list_jobs' },
        { label: 'batch_get_job', value: 'batch_get_job' }
    ]}
>
<TabItem value="get_job">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="attachments" /></td>
    <td><code>object</code></td>
    <td>The job attachments.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that created this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the job. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource ended running.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The job ID. (pattern: &lt;code&gt;job-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_status" /></td>
    <td><code>string</code></td>
    <td>The life cycle status for the job. (CREATE_IN_PROGRESS, CREATE_FAILED, CREATE_COMPLETE, UPLOAD_IN_PROGRESS, UPLOAD_FAILED, UPDATE_IN_PROGRESS, UPDATE_FAILED, UPDATE_SUCCEEDED, ARCHIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_status_message" /></td>
    <td><code>string</code></td>
    <td>A message that communicates the status of the life cycle for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="max_failed_tasks_count" /></td>
    <td><code>integer</code></td>
    <td>The number of task failures before the job stops running and is marked as FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="max_retries_per_task" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of retries per failed tasks.</td>
</tr>
<tr>
    <td><CopyableCode code="max_worker_count" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of worker hosts that can concurrently process a job. When the maxWorkerCount is reached, no more workers will be assigned to process the job, even if the fleets assigned to the job's queue has available workers. If you don't set the maxWorkerCount when you create a job, this value is not returned in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The parameters for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The job priority.</td>
</tr>
<tr>
    <td><CopyableCode code="source_job_id" /></td>
    <td><code>string</code></td>
    <td>The job ID for the source job. (pattern: &lt;code&gt;job-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource started running.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_profile_id" /></td>
    <td><code>string</code></td>
    <td>The storage profile ID associated with the job. (pattern: &lt;code&gt;sp-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_task_run_status" /></td>
    <td><code>string</code></td>
    <td>The task status with which the job started. (READY, FAILED, SUCCEEDED, CANCELED, SUSPENDED, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="task_failure_retry_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of times tasks from the job failed and were retried.</td>
</tr>
<tr>
    <td><CopyableCode code="task_run_status" /></td>
    <td><code>string</code></td>
    <td>The task run status for the job. (PENDING, READY, ASSIGNED, STARTING, SCHEDULED, INTERRUPTING, RUNNING, SUSPENDED, CANCELED, FAILED, SUCCEEDED, NOT_COMPATIBLE)</td>
</tr>
<tr>
    <td><CopyableCode code="task_run_status_counts" /></td>
    <td><code>object</code></td>
    <td>The number of tasks running on the job.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_jobs">

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
    <td>The jobs in the search.</td>
</tr>
<tr>
    <td><CopyableCode code="next_item_offset" /></td>
    <td><code>integer</code></td>
    <td>The next item offset for the search results.</td>
</tr>
<tr>
    <td><CopyableCode code="total_results" /></td>
    <td><code>integer</code></td>
    <td>The total number of results in the search.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The job name.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that created this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource ended running.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The job ID. (pattern: &lt;code&gt;job-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_status" /></td>
    <td><code>string</code></td>
    <td>The life cycle status. (CREATE_IN_PROGRESS, CREATE_FAILED, CREATE_COMPLETE, UPLOAD_IN_PROGRESS, UPLOAD_FAILED, UPDATE_IN_PROGRESS, UPDATE_FAILED, UPDATE_SUCCEEDED, ARCHIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_status_message" /></td>
    <td><code>string</code></td>
    <td>The life cycle status message.</td>
</tr>
<tr>
    <td><CopyableCode code="max_failed_tasks_count" /></td>
    <td><code>integer</code></td>
    <td>The number of task failures before the job stops running and is marked as FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="max_retries_per_task" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of retries for a job.</td>
</tr>
<tr>
    <td><CopyableCode code="max_worker_count" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of worker hosts that can concurrently process a job. When the maxWorkerCount is reached, no more workers will be assigned to process the job, even if the fleets assigned to the job's queue has available workers. You can't set the maxWorkerCount to 0. If you set it to -1, there is no maximum number of workers. If you don't specify the maxWorkerCount, the default is -1.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The job priority.</td>
</tr>
<tr>
    <td><CopyableCode code="source_job_id" /></td>
    <td><code>string</code></td>
    <td>The job ID for the source job. (pattern: &lt;code&gt;job-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource started running.</td>
</tr>
<tr>
    <td><CopyableCode code="target_task_run_status" /></td>
    <td><code>string</code></td>
    <td>The task status to update the job's tasks to. (READY, FAILED, SUCCEEDED, CANCELED, SUSPENDED, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="task_failure_retry_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of times tasks from the job failed and were retried.</td>
</tr>
<tr>
    <td><CopyableCode code="task_run_status" /></td>
    <td><code>string</code></td>
    <td>The task run status for the job. PENDING–pending and waiting for resources. READY–ready to be processed. ASSIGNED–assigned and will run next on a worker. SCHEDULED–scheduled to be run on a worker. INTERRUPTING–being interrupted. RUNNING–running on a worker. SUSPENDED–the task is suspended. CANCELED–the task has been canceled. FAILED–the task has failed. SUCCEEDED–the task has succeeded. (PENDING, READY, ASSIGNED, STARTING, SCHEDULED, INTERRUPTING, RUNNING, SUSPENDED, CANCELED, FAILED, SUCCEEDED, NOT_COMPATIBLE)</td>
</tr>
<tr>
    <td><CopyableCode code="task_run_status_counts" /></td>
    <td><code>object</code></td>
    <td>The number of tasks running on the job.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get_job">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>A list of errors for jobs that could not be retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="jobs" /></td>
    <td><code>array</code></td>
    <td>A list of jobs that were successfully retrieved.</td>
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
    <td><a href="#get_job"><CopyableCode code="get_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a Deadline Cloud job.</td>
</tr>
<tr>
    <td><a href="#search_jobs"><CopyableCode code="search_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for jobs.</td>
</tr>
<tr>
    <td><a href="#list_jobs"><CopyableCode code="list_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-principalId"><code>principalId</code></a></td>
    <td>Lists jobs.</td>
</tr>
<tr>
    <td><a href="#batch_get_job"><CopyableCode code="batch_get_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves multiple jobs in a single request. This is a batch version of the GetJob API. The result of getting each job is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.</td>
</tr>
<tr>
    <td><a href="#create_job"><CopyableCode code="create_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-priority"><code>priority</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Creates a job. A job is a set of instructions that Deadline Cloud uses to schedule and run work on available workers. For more information, see Deadline Cloud jobs.</td>
</tr>
<tr>
    <td><a href="#associate_member_to_job"><CopyableCode code="associate_member_to_job" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-principal_id"><code>principal_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-principalType"><code>principalType</code></a>, <a href="#parameter-identityStoreId"><code>identityStoreId</code></a>, <a href="#parameter-membershipLevel"><code>membershipLevel</code></a></td>
    <td></td>
    <td>Assigns a job membership level to a member</td>
</tr>
<tr>
    <td><a href="#disassociate_member_from_job"><CopyableCode code="disassociate_member_from_job" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-principal_id"><code>principal_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a member from a job.</td>
</tr>
<tr>
    <td><a href="#update_job"><CopyableCode code="update_job" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Updates a job. When you change the status of the job to ARCHIVED, the job can't be scheduled or archived. An archived jobs and its steps and tasks are deleted after 120 days. The job can't be recovered.</td>
</tr>
<tr>
    <td><a href="#copy_job_template"><CopyableCode code="copy_job_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetS3Location"><code>targetS3Location</code></a></td>
    <td></td>
    <td>Copies a job template to an Amazon S3 bucket.</td>
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
<tr id="parameter-farm_id">
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID to copy.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The job ID to copy.</td>
</tr>
<tr id="parameter-principal_id">
    <td><CopyableCode code="principal_id" /></td>
    <td><code>string</code></td>
    <td>A member's principal ID to disassociate from a job.</td>
</tr>
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The queue ID to copy.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-X-Amz-Client-Token">
    <td><CopyableCode code="X-Amz-Client-Token" /></td>
    <td><code>string</code></td>
    <td>The unique token which the server uses to recognize retries of the same request.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null to start from the beginning.</td>
</tr>
<tr id="parameter-principalId">
    <td><CopyableCode code="principalId" /></td>
    <td><code>string</code></td>
    <td>The principal ID of the members on the jobs.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_job"
    values={[
        { label: 'get_job', value: 'get_job' },
        { label: 'search_jobs', value: 'search_jobs' },
        { label: 'list_jobs', value: 'list_jobs' },
        { label: 'batch_get_job', value: 'batch_get_job' }
    ]}
>
<TabItem value="get_job">

Gets a Deadline Cloud job.

```sql
SELECT
name,
attachments,
created_at,
created_by,
description,
ended_at,
job_id,
lifecycle_status,
lifecycle_status_message,
max_failed_tasks_count,
max_retries_per_task,
max_worker_count,
parameters,
priority,
source_job_id,
started_at,
storage_profile_id,
target_task_run_status,
task_failure_retry_count,
task_run_status,
task_run_status_counts,
updated_at,
updated_by
FROM aws.deadline.jobs
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_jobs">

Searches for jobs.

```sql
SELECT
jobs,
next_item_offset,
total_results
FROM aws.deadline.jobs
WHERE farm_id = '{{ farm_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_jobs">

Lists jobs.

```sql
SELECT
name,
created_at,
created_by,
ended_at,
job_id,
lifecycle_status,
lifecycle_status_message,
max_failed_tasks_count,
max_retries_per_task,
max_worker_count,
priority,
source_job_id,
started_at,
target_task_run_status,
task_failure_retry_count,
task_run_status,
task_run_status_counts,
updated_at,
updated_by
FROM aws.deadline.jobs
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND principalId = '{{ principalId }}'
;
```
</TabItem>
<TabItem value="batch_get_job">

Retrieves multiple jobs in a single request. This is a batch version of the GetJob API. The result of getting each job is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.

```sql
SELECT
errors,
jobs
FROM aws.deadline.jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_job"
    values={[
        { label: 'create_job', value: 'create_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_job">

Creates a job. A job is a set of instructions that Deadline Cloud uses to schedule and run work on available workers. For more information, see Deadline Cloud jobs.

```sql
INSERT INTO aws.deadline.jobs (
template,
templateType,
priority,
parameters,
attachments,
storageProfileId,
targetTaskRunStatus,
maxFailedTasksCount,
maxRetriesPerTask,
maxWorkerCount,
sourceJobId,
nameOverride,
descriptionOverride,
tags,
farm_id,
queue_id,
region,
`X-Amz-Client-Token`
)
SELECT 
'{{ template }}',
'{{ templateType }}',
{{ priority }} /* required */,
'{{ parameters }}',
'{{ attachments }}',
'{{ storageProfileId }}',
'{{ targetTaskRunStatus }}',
{{ maxFailedTasksCount }},
{{ maxRetriesPerTask }},
{{ maxWorkerCount }},
'{{ sourceJobId }}',
'{{ nameOverride }}',
'{{ descriptionOverride }}',
'{{ tags }}',
'{{ farm_id }}',
'{{ queue_id }}',
'{{ region }}',
'{{ X-Amz-Client-Token }}'
RETURNING
job_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: jobs
  props:
    - name: farm_id
      value: "{{ farm_id }}"
      description: Required parameter for the jobs resource.
    - name: queue_id
      value: "{{ queue_id }}"
      description: Required parameter for the jobs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the jobs resource.
    - name: template
      value: "{{ template }}"
    - name: templateType
      value: "{{ templateType }}"
      valid_values: ['JSON', 'YAML']
    - name: priority
      value: {{ priority }}
    - name: parameters
      value: "{{ parameters }}"
    - name: attachments
      description: |
        The job attachments.
      value:
        manifests:
          - fileSystemLocationName: "{{ fileSystemLocationName }}"
            rootPath: "{{ rootPath }}"
            rootPathFormat: "{{ rootPathFormat }}"
            outputRelativeDirectories: "{{ outputRelativeDirectories }}"
            inputManifestPath: "{{ inputManifestPath }}"
            inputManifestHash: "{{ inputManifestHash }}"
        fileSystem: "{{ fileSystem }}"
    - name: storageProfileId
      value: "{{ storageProfileId }}"
    - name: targetTaskRunStatus
      value: "{{ targetTaskRunStatus }}"
      valid_values: ['READY', 'SUSPENDED']
    - name: maxFailedTasksCount
      value: {{ maxFailedTasksCount }}
    - name: maxRetriesPerTask
      value: {{ maxRetriesPerTask }}
    - name: maxWorkerCount
      value: {{ maxWorkerCount }}
    - name: sourceJobId
      value: "{{ sourceJobId }}"
    - name: nameOverride
      value: "{{ nameOverride }}"
    - name: descriptionOverride
      value: "{{ descriptionOverride }}"
      description: |
        The input description for the job. Passing in an empty string removes any existing description.
    - name: tags
      value: "{{ tags }}"
    - name: X-Amz-Client-Token
      value: "{{ X-Amz-Client-Token }}"
      description: The unique token which the server uses to recognize retries of the same request.
      description: The unique token which the server uses to recognize retries of the same request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_member_to_job"
    values={[
        { label: 'associate_member_to_job', value: 'associate_member_to_job' },
        { label: 'disassociate_member_from_job', value: 'disassociate_member_from_job' },
        { label: 'update_job', value: 'update_job' }
    ]}
>
<TabItem value="associate_member_to_job">

Assigns a job membership level to a member

```sql
UPDATE aws.deadline.jobs
SET 
principalType = '{{ principalType }}',
identityStoreId = '{{ identityStoreId }}',
membershipLevel = '{{ membershipLevel }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND job_id = '{{ job_id }}' --required
AND principal_id = '{{ principal_id }}' --required
AND region = '{{ region }}' --required
AND principalType = '{{ principalType }}' --required
AND identityStoreId = '{{ identityStoreId }}' --required
AND membershipLevel = '{{ membershipLevel }}' --required;
```
</TabItem>
<TabItem value="disassociate_member_from_job">

Disassociates a member from a job.

```sql
UPDATE aws.deadline.jobs
SET 
-- No updatable properties
WHERE 
farm_id = '{{ farm_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND job_id = '{{ job_id }}' --required
AND principal_id = '{{ principal_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_job">

Updates a job. When you change the status of the job to ARCHIVED, the job can't be scheduled or archived. An archived jobs and its steps and tasks are deleted after 120 days. The job can't be recovered.

```sql
UPDATE aws.deadline.jobs
SET 
targetTaskRunStatus = '{{ targetTaskRunStatus }}',
priority = {{ priority }},
maxFailedTasksCount = {{ maxFailedTasksCount }},
maxRetriesPerTask = {{ maxRetriesPerTask }},
lifecycleStatus = '{{ lifecycleStatus }}',
maxWorkerCount = {{ maxWorkerCount }},
name = '{{ name }}',
description = '{{ description }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND job_id = '{{ job_id }}' --required
AND region = '{{ region }}' --required
AND `X-Amz-Client-Token` = '{{ X-Amz-Client-Token}}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copy_job_template"
    values={[
        { label: 'copy_job_template', value: 'copy_job_template' }
    ]}
>
<TabItem value="copy_job_template">

Copies a job template to an Amazon S3 bucket.

```sql
EXEC aws.deadline.jobs.copy_job_template 
@farm_id='{{ farm_id }}' --required, 
@queue_id='{{ queue_id }}' --required, 
@job_id='{{ job_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"targetS3Location": "{{ targetS3Location }}"
}'
;
```
</TabItem>
</Tabs>
