--- 
title: training_jobs_for_hyper_parameter_tuning_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - training_jobs_for_hyper_parameter_tuning_jobs
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

Creates, updates, deletes, gets or lists a <code>training_jobs_for_hyper_parameter_tuning_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="training_jobs_for_hyper_parameter_tuning_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.training_jobs_for_hyper_parameter_tuning_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_training_jobs_for_hyper_parameter_tuning_job"
    values={[
        { label: 'list_training_jobs_for_hyper_parameter_tuning_job', value: 'list_training_jobs_for_hyper_parameter_tuning_job' }
    ]}
>
<TabItem value="list_training_jobs_for_hyper_parameter_tuning_job">

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
    <td>The date and time that the training job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason that the training job failed.</td>
</tr>
<tr>
    <td><CopyableCode code="final_hyper_parameter_tuning_job_objective_metric" /></td>
    <td><code>object</code></td>
    <td>The FinalHyperParameterTuningJobObjectiveMetric object that specifies the value of the objective metric of the tuning job that launched this training job.</td>
</tr>
<tr>
    <td><CopyableCode code="objective_status" /></td>
    <td><code>string</code></td>
    <td>The status of the objective metric for the training job: Succeeded: The final objective metric for the training job was evaluated by the hyperparameter tuning job and used in the hyperparameter tuning process. Pending: The training job is in progress and evaluation of its final objective metric is pending. Failed: The final objective metric for the training job was not evaluated, and was not used in the hyperparameter tuning process. This typically occurs when the training job failed or did not emit an objective metric. (Succeeded, Pending, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="training_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies the time when the training job ends on training instances. You are billed for the time interval between the value of TrainingStartTime and this time. For successful jobs and stopped jobs, this is the time after model artifacts are uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</td>
</tr>
<tr>
    <td><CopyableCode code="training_job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the training job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:training-job/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="training_job_definition_name" /></td>
    <td><code>string</code></td>
    <td>The training job definition name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="training_job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the training job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="training_job_status" /></td>
    <td><code>string</code></td>
    <td>The status of the training job. (InProgress, Completed, Failed, Stopping, Stopped, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="training_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the training job started.</td>
</tr>
<tr>
    <td><CopyableCode code="tuned_hyper_parameters" /></td>
    <td><code>object</code></td>
    <td>A list of the hyperparameters for which you specified ranges to search.</td>
</tr>
<tr>
    <td><CopyableCode code="tuning_job_name" /></td>
    <td><code>string</code></td>
    <td>The HyperParameter tuning job that launched the training job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,31&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_training_jobs_for_hyper_parameter_tuning_job"><CopyableCode code="list_training_jobs_for_hyper_parameter_tuning_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of TrainingJobSummary objects that describe the training jobs that a hyperparameter tuning job launched.</td>
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
    defaultValue="list_training_jobs_for_hyper_parameter_tuning_job"
    values={[
        { label: 'list_training_jobs_for_hyper_parameter_tuning_job', value: 'list_training_jobs_for_hyper_parameter_tuning_job' }
    ]}
>
<TabItem value="list_training_jobs_for_hyper_parameter_tuning_job">

Gets a list of TrainingJobSummary objects that describe the training jobs that a hyperparameter tuning job launched.

```sql
SELECT
creation_time,
failure_reason,
final_hyper_parameter_tuning_job_objective_metric,
objective_status,
training_end_time,
training_job_arn,
training_job_definition_name,
training_job_name,
training_job_status,
training_start_time,
tuned_hyper_parameters,
tuning_job_name
FROM aws.sagemaker.training_jobs_for_hyper_parameter_tuning_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
