--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - sagemaker
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_job"
    values={[
        { label: 'describe_job', value: 'describe_job' },
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="describe_job">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If the job failed, the reason it failed.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the job. (pattern: &lt;code&gt;arn:(aws&#91;a-z\-&#93;*):sagemaker:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:job/&#91;a-zA-Z0-9&#93;+/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_category" /></td>
    <td><code>string</code></td>
    <td>The category of the job. (AgentRFT, AgentRFTEvaluation)</td>
</tr>
<tr>
    <td><CopyableCode code="job_config_document" /></td>
    <td><code>string</code></td>
    <td>The JSON configuration document for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_config_schema_version" /></td>
    <td><code>string</code></td>
    <td>The schema version used for the job configuration document. (pattern: &lt;code&gt;\d+\.\d+\.\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the job. (InProgress, Completed, Failed, Stopping, Stopped, Deleting, DeleteFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role associated with the job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_status" /></td>
    <td><code>string</code></td>
    <td>The detailed secondary status of the job, providing more granular information about the job's progress. Secondary statuses may change between releases. (Starting, Downloading, Training, Uploading, Stopping, Stopped, MaxRuntimeExceeded, Interrupted, Failed, Completed, Restarting, Pending, Evaluating, Deleting, DeleteFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_status_transitions" /></td>
    <td><code>array</code></td>
    <td>A list of secondary status transitions for the job, with timestamps and optional status messages.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the job.</td>
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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the job. (pattern: &lt;code&gt;arn:(aws&#91;a-z\-&#93;*):sagemaker:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:job/&#91;a-zA-Z0-9&#93;+/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_category" /></td>
    <td><code>string</code></td>
    <td>The category of the job. (AgentRFT, AgentRFTEvaluation)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_secondary_status" /></td>
    <td><code>string</code></td>
    <td>The secondary status of the job, providing more granular information about the job's progress. Secondary statuses may change between releases. (Starting, Downloading, Training, Uploading, Stopping, Stopped, MaxRuntimeExceeded, Interrupted, Failed, Completed, Restarting, Pending, Evaluating, Deleting, DeleteFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the job. (InProgress, Completed, Failed, Stopping, Stopped, Deleting, DeleteFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job was last modified.</td>
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
    <td><a href="#describe_job"><CopyableCode code="describe_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information about a job, including its current status, secondary status, configuration, and timestamps. Use SecondaryStatus for granular progress tracking and SecondaryStatusTransitions to see the full history of status changes with timestamps. The following operations are related to DescribeJob: CreateJob ListJobs StopJob DeleteJob</td>
</tr>
<tr>
    <td><a href="#list_jobs"><CopyableCode code="list_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists jobs in a specified category. You can filter results by creation time, last modified time, name, and status. Results are sorted by the field you specify in SortBy. Use pagination to retrieve large result sets efficiently. The following operations are related to ListJobs: CreateJob DescribeJob</td>
</tr>
<tr>
    <td><a href="#create_job"><CopyableCode code="create_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobName"><code>JobName</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-JobCategory"><code>JobCategory</code></a>, <a href="#parameter-JobConfigSchemaVersion"><code>JobConfigSchemaVersion</code></a>, <a href="#parameter-JobConfigDocument"><code>JobConfigDocument</code></a></td>
    <td></td>
    <td>Creates a model customization job in Amazon SageMaker. A job runs a workload based on the job category and configuration you provide. You specify the job category, a schema-versioned configuration document, and an IAM role that grants Amazon SageMaker permission to access resources on your behalf. Use the AgentRFT category to fine-tune a model using multi-turn reinforcement learning with reward signals. Use the AgentRFTEvaluation category to evaluate a fine-tuned or base model by running multi-turn rollouts against a held-out prompt dataset and computing metrics such as pass@k and mean reward. Before creating a job, call ListJobSchemaVersions and DescribeJobSchemaVersion to retrieve the configuration schema for your job category. The JobConfigDocument must conform to the schema specified by JobConfigSchemaVersion. The following operations are related to CreateJob: DescribeJob ListJobs StopJob DeleteJob ListJobSchemaVersions DescribeJobSchemaVersion</td>
</tr>
<tr>
    <td><a href="#delete_job"><CopyableCode code="delete_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a job. This operation is idempotent. If the job is currently running, you must stop it before deleting it by calling StopJob. The following operations are related to DeleteJob: CreateJob StopJob DescribeJob</td>
</tr>
<tr>
    <td><a href="#stop_job"><CopyableCode code="stop_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobName"><code>JobName</code></a>, <a href="#parameter-JobCategory"><code>JobCategory</code></a></td>
    <td></td>
    <td>Stops a running job. When you call StopJob, Amazon SageMaker sets the job status to Stopping. After the job stops, the status changes to Stopped. Partial results may be available in the output location if the job was in progress. To delete a stopped job, call DeleteJob. The following operations are related to StopJob: CreateJob DescribeJob DeleteJob</td>
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
    defaultValue="describe_job"
    values={[
        { label: 'describe_job', value: 'describe_job' },
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="describe_job">

Returns detailed information about a job, including its current status, secondary status, configuration, and timestamps. Use SecondaryStatus for granular progress tracking and SecondaryStatusTransitions to see the full history of status changes with timestamps. The following operations are related to DescribeJob: CreateJob ListJobs StopJob DeleteJob

```sql
SELECT
creation_time,
end_time,
failure_reason,
job_arn,
job_category,
job_config_document,
job_config_schema_version,
job_name,
job_status,
last_modified_time,
role_arn,
secondary_status,
secondary_status_transitions,
tags
FROM aws.sagemaker.jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_jobs">

Lists jobs in a specified category. You can filter results by creation time, last modified time, name, and status. Results are sorted by the field you specify in SortBy. Use pagination to retrieve large result sets efficiently. The following operations are related to ListJobs: CreateJob DescribeJob

```sql
SELECT
creation_time,
end_time,
job_arn,
job_category,
job_name,
job_secondary_status,
job_status,
last_modified_time
FROM aws.sagemaker.jobs
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

Creates a model customization job in Amazon SageMaker. A job runs a workload based on the job category and configuration you provide. You specify the job category, a schema-versioned configuration document, and an IAM role that grants Amazon SageMaker permission to access resources on your behalf. Use the AgentRFT category to fine-tune a model using multi-turn reinforcement learning with reward signals. Use the AgentRFTEvaluation category to evaluate a fine-tuned or base model by running multi-turn rollouts against a held-out prompt dataset and computing metrics such as pass@k and mean reward. Before creating a job, call ListJobSchemaVersions and DescribeJobSchemaVersion to retrieve the configuration schema for your job category. The JobConfigDocument must conform to the schema specified by JobConfigSchemaVersion. The following operations are related to CreateJob: DescribeJob ListJobs StopJob DeleteJob ListJobSchemaVersions DescribeJobSchemaVersion

```sql
INSERT INTO aws.sagemaker.jobs (
JobName,
RoleArn,
JobCategory,
JobConfigSchemaVersion,
JobConfigDocument,
Tags,
region
)
SELECT 
'{{ JobName }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ JobCategory }}' /* required */,
'{{ JobConfigSchemaVersion }}' /* required */,
'{{ JobConfigDocument }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
job_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the jobs resource.
    - name: JobName
      value: "{{ JobName }}"
      description: |
        The name of the job. The name must be unique within your account and Amazon Web Services Region.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform the job. The role must have the necessary permissions to access the resources required by the job configuration.
    - name: JobCategory
      value: "{{ JobCategory }}"
      description: |
        The category of the job. The category determines the type of workload that the job runs.
      valid_values: ['AgentRFT', 'AgentRFTEvaluation']
    - name: JobConfigSchemaVersion
      value: "{{ JobConfigSchemaVersion }}"
      description: |
        The version of the configuration schema to use for the job configuration document. Use ListJobSchemaVersions to get available schema versions for a job category.
    - name: JobConfigDocument
      value: "{{ JobConfigDocument }}"
      description: |
        The JSON configuration document for the job. The document must conform to the schema specified by JobConfigSchemaVersion. Use DescribeJobSchemaVersion to retrieve the schema for validation.
    - name: Tags
      description: |
        An array of key-value pairs to apply to the job as tags. For more information, see Tagging Amazon Web Services Resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_job"
    values={[
        { label: 'delete_job', value: 'delete_job' }
    ]}
>
<TabItem value="delete_job">

Deletes a job. This operation is idempotent. If the job is currently running, you must stop it before deleting it by calling StopJob. The following operations are related to DeleteJob: CreateJob StopJob DescribeJob

```sql
DELETE FROM aws.sagemaker.jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_job"
    values={[
        { label: 'stop_job', value: 'stop_job' }
    ]}
>
<TabItem value="stop_job">

Stops a running job. When you call StopJob, Amazon SageMaker sets the job status to Stopping. After the job stops, the status changes to Stopped. Partial results may be available in the output location if the job was in progress. To delete a stopped job, call DeleteJob. The following operations are related to StopJob: CreateJob DescribeJob DeleteJob

```sql
EXEC aws.sagemaker.jobs.stop_job 
@region='{{ region }}' --required 
@@json=
'{
"JobName": "{{ JobName }}", 
"JobCategory": "{{ JobCategory }}"
}'
;
```
</TabItem>
</Tabs>
