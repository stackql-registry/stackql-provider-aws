--- 
title: optimization_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - optimization_jobs
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

Creates, updates, deletes, gets or lists an <code>optimization_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="optimization_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.optimization_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_optimization_job"
    values={[
        { label: 'describe_optimization_job', value: 'describe_optimization_job' },
        { label: 'list_optimization_jobs', value: 'list_optimization_jobs' }
    ]}
>
<TabItem value="describe_optimization_job">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when you created the optimization job.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentInstanceType" /></td>
    <td><code>string</code></td>
    <td>The type of instance that hosts the optimized model that you create with the optimization job. (ml.p4d.24xlarge, ml.p4de.24xlarge, ml.p5.48xlarge, ml.p5e.48xlarge, ml.p5en.48xlarge, ml.g4dn.xlarge, ml.g4dn.2xlarge, ml.g4dn.4xlarge, ml.g4dn.8xlarge, ml.g4dn.12xlarge, ml.g4dn.16xlarge, ml.g5.xlarge, ml.g5.2xlarge, ml.g5.4xlarge, ml.g5.8xlarge, ml.g5.12xlarge, ml.g5.16xlarge, ml.g5.24xlarge, ml.g5.48xlarge, ml.g6.xlarge, ml.g6.2xlarge, ml.g6.4xlarge, ml.g6.8xlarge, ml.g6.12xlarge, ml.g6.16xlarge, ml.g6.24xlarge, ml.g6.48xlarge, ml.g6e.xlarge, ml.g6e.2xlarge, ml.g6e.4xlarge, ml.g6e.8xlarge, ml.g6e.12xlarge, ml.g6e.16xlarge, ml.g6e.24xlarge, ml.g6e.48xlarge, ml.inf2.xlarge, ml.inf2.8xlarge, ml.inf2.24xlarge, ml.inf2.48xlarge, ml.trn1.2xlarge, ml.trn1.32xlarge, ml.trn1n.32xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>If the optimization job status is FAILED, the reason for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the optimization job was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of instances to use for the optimization job.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelSource" /></td>
    <td><code>object</code></td>
    <td>The location of the source model to optimize with an optimization job.</td>
</tr>
<tr>
    <td><CopyableCode code="OptimizationConfigs" /></td>
    <td><code>array</code></td>
    <td>Settings for each of the optimization techniques that the job applies.</td>
</tr>
<tr>
    <td><CopyableCode code="OptimizationEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the optimization job finished processing.</td>
</tr>
<tr>
    <td><CopyableCode code="OptimizationEnvironment" /></td>
    <td><code>object</code></td>
    <td>The environment variables to set in the model container.</td>
</tr>
<tr>
    <td><CopyableCode code="OptimizationJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the optimization job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:optimization-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OptimizationJobName" /></td>
    <td><code>string</code></td>
    <td>The name that you assigned to the optimization job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OptimizationJobStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the optimization job. (INPROGRESS, COMPLETED, FAILED, STARTING, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="OptimizationOutput" /></td>
    <td><code>object</code></td>
    <td>Output values produced by an optimization job.</td>
</tr>
<tr>
    <td><CopyableCode code="OptimizationStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the optimization job started.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputConfig" /></td>
    <td><code>object</code></td>
    <td>Details for where to store the optimized model that you create with the optimization job.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that you assigned to the optimization job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StoppingCondition" /></td>
    <td><code>object</code></td>
    <td>Specifies a limit to how long a job can run. When the job reaches the time limit, SageMaker ends the job. Use this API to cap costs. To stop a training job, SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with CreateModel. The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcConfig" /></td>
    <td><code>object</code></td>
    <td>A VPC in Amazon VPC that your optimized model has access to.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_optimization_jobs">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when you created the optimization job.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentInstanceType" /></td>
    <td><code>string</code></td>
    <td>The type of instance that hosts the optimized model that you create with the optimization job. (ml.p4d.24xlarge, ml.p4de.24xlarge, ml.p5.48xlarge, ml.p5e.48xlarge, ml.p5en.48xlarge, ml.g4dn.xlarge, ml.g4dn.2xlarge, ml.g4dn.4xlarge, ml.g4dn.8xlarge, ml.g4dn.12xlarge, ml.g4dn.16xlarge, ml.g5.xlarge, ml.g5.2xlarge, ml.g5.4xlarge, ml.g5.8xlarge, ml.g5.12xlarge, ml.g5.16xlarge, ml.g5.24xlarge, ml.g5.48xlarge, ml.g6.xlarge, ml.g6.2xlarge, ml.g6.4xlarge, ml.g6.8xlarge, ml.g6.12xlarge, ml.g6.16xlarge, ml.g6.24xlarge, ml.g6.48xlarge, ml.g6e.xlarge, ml.g6e.2xlarge, ml.g6e.4xlarge, ml.g6e.8xlarge, ml.g6e.12xlarge, ml.g6e.16xlarge, ml.g6e.24xlarge, ml.g6e.48xlarge, ml.inf2.xlarge, ml.inf2.8xlarge, ml.inf2.24xlarge, ml.inf2.48xlarge, ml.trn1.2xlarge, ml.trn1.32xlarge, ml.trn1n.32xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the optimization job was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of instances to use for the optimization job.</td>
</tr>
<tr>
    <td><CopyableCode code="OptimizationEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the optimization job finished processing.</td>
</tr>
<tr>
    <td><CopyableCode code="OptimizationJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the optimization job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:optimization-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OptimizationJobName" /></td>
    <td><code>string</code></td>
    <td>The name that you assigned to the optimization job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OptimizationJobStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the optimization job. (INPROGRESS, COMPLETED, FAILED, STARTING, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="OptimizationStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the optimization job started.</td>
</tr>
<tr>
    <td><CopyableCode code="OptimizationTypes" /></td>
    <td><code>array</code></td>
    <td>The optimization techniques that are applied by the optimization job.</td>
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
    <td><a href="#describe_optimization_job"><CopyableCode code="describe_optimization_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the properties of the specified optimization job.</td>
</tr>
<tr>
    <td><a href="#list_optimization_jobs"><CopyableCode code="list_optimization_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the optimization jobs in your account and their properties.</td>
</tr>
<tr>
    <td><a href="#create_optimization_job"><CopyableCode code="create_optimization_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OptimizationJobName"><code>OptimizationJobName</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-ModelSource"><code>ModelSource</code></a>, <a href="#parameter-DeploymentInstanceType"><code>DeploymentInstanceType</code></a>, <a href="#parameter-OptimizationConfigs"><code>OptimizationConfigs</code></a>, <a href="#parameter-OutputConfig"><code>OutputConfig</code></a>, <a href="#parameter-StoppingCondition"><code>StoppingCondition</code></a></td>
    <td></td>
    <td>Creates a job that optimizes a model for inference performance. To create the job, you provide the location of a source model, and you provide the settings for the optimization techniques that you want the job to apply. When the job completes successfully, SageMaker uploads the new optimized model to the output destination that you specify. For more information about how to use this action, and about the supported optimization techniques, see Optimize model inference with Amazon SageMaker.</td>
</tr>
<tr>
    <td><a href="#delete_optimization_job"><CopyableCode code="delete_optimization_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an optimization job.</td>
</tr>
<tr>
    <td><a href="#stop_optimization_job"><CopyableCode code="stop_optimization_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OptimizationJobName"><code>OptimizationJobName</code></a></td>
    <td></td>
    <td>Ends a running inference optimization job.</td>
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
    defaultValue="describe_optimization_job"
    values={[
        { label: 'describe_optimization_job', value: 'describe_optimization_job' },
        { label: 'list_optimization_jobs', value: 'list_optimization_jobs' }
    ]}
>
<TabItem value="describe_optimization_job">

Provides the properties of the specified optimization job.

```sql
SELECT
CreationTime,
DeploymentInstanceType,
FailureReason,
LastModifiedTime,
MaxInstanceCount,
ModelSource,
OptimizationConfigs,
OptimizationEndTime,
OptimizationEnvironment,
OptimizationJobArn,
OptimizationJobName,
OptimizationJobStatus,
OptimizationOutput,
OptimizationStartTime,
OutputConfig,
RoleArn,
StoppingCondition,
VpcConfig
FROM aws.sagemaker.optimization_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_optimization_jobs">

Lists the optimization jobs in your account and their properties.

```sql
SELECT
CreationTime,
DeploymentInstanceType,
LastModifiedTime,
MaxInstanceCount,
OptimizationEndTime,
OptimizationJobArn,
OptimizationJobName,
OptimizationJobStatus,
OptimizationStartTime,
OptimizationTypes
FROM aws.sagemaker.optimization_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_optimization_job"
    values={[
        { label: 'create_optimization_job', value: 'create_optimization_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_optimization_job">

Creates a job that optimizes a model for inference performance. To create the job, you provide the location of a source model, and you provide the settings for the optimization techniques that you want the job to apply. When the job completes successfully, SageMaker uploads the new optimized model to the output destination that you specify. For more information about how to use this action, and about the supported optimization techniques, see Optimize model inference with Amazon SageMaker.

```sql
INSERT INTO aws.sagemaker.optimization_jobs (
OptimizationJobName,
RoleArn,
ModelSource,
DeploymentInstanceType,
MaxInstanceCount,
OptimizationEnvironment,
OptimizationConfigs,
OutputConfig,
StoppingCondition,
Tags,
VpcConfig,
region
)
SELECT 
'{{ OptimizationJobName }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ ModelSource }}' /* required */,
'{{ DeploymentInstanceType }}' /* required */,
{{ MaxInstanceCount }},
'{{ OptimizationEnvironment }}',
'{{ OptimizationConfigs }}' /* required */,
'{{ OutputConfig }}' /* required */,
'{{ StoppingCondition }}' /* required */,
'{{ Tags }}',
'{{ VpcConfig }}',
'{{ region }}'
RETURNING
OptimizationJobArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: optimization_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the optimization_jobs resource.
    - name: OptimizationJobName
      value: "{{ OptimizationJobName }}"
      description: |
        A custom name for the new optimization job.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker AI to perform tasks on your behalf. During model optimization, Amazon SageMaker AI needs your permission to: Read input data from an S3 bucket Write model artifacts to an S3 bucket Write logs to Amazon CloudWatch Logs Publish metrics to Amazon CloudWatch You grant permissions for all of these tasks to an IAM role. To pass this role to Amazon SageMaker AI, the caller of this API must have the iam:PassRole permission. For more information, see Amazon SageMaker AI Roles.
    - name: ModelSource
      description: |
        The location of the source model to optimize with an optimization job.
      value:
        S3:
          S3Uri: "{{ S3Uri }}"
          ModelAccessConfig:
            AcceptEula: {{ AcceptEula }}
        SageMakerModel:
          ModelName: "{{ ModelName }}"
    - name: DeploymentInstanceType
      value: "{{ DeploymentInstanceType }}"
      description: |
        The type of instance that hosts the optimized model that you create with the optimization job.
      valid_values: ['ml.p4d.24xlarge', 'ml.p4de.24xlarge', 'ml.p5.48xlarge', 'ml.p5e.48xlarge', 'ml.p5en.48xlarge', 'ml.g4dn.xlarge', 'ml.g4dn.2xlarge', 'ml.g4dn.4xlarge', 'ml.g4dn.8xlarge', 'ml.g4dn.12xlarge', 'ml.g4dn.16xlarge', 'ml.g5.xlarge', 'ml.g5.2xlarge', 'ml.g5.4xlarge', 'ml.g5.8xlarge', 'ml.g5.12xlarge', 'ml.g5.16xlarge', 'ml.g5.24xlarge', 'ml.g5.48xlarge', 'ml.g6.xlarge', 'ml.g6.2xlarge', 'ml.g6.4xlarge', 'ml.g6.8xlarge', 'ml.g6.12xlarge', 'ml.g6.16xlarge', 'ml.g6.24xlarge', 'ml.g6.48xlarge', 'ml.g6e.xlarge', 'ml.g6e.2xlarge', 'ml.g6e.4xlarge', 'ml.g6e.8xlarge', 'ml.g6e.12xlarge', 'ml.g6e.16xlarge', 'ml.g6e.24xlarge', 'ml.g6e.48xlarge', 'ml.inf2.xlarge', 'ml.inf2.8xlarge', 'ml.inf2.24xlarge', 'ml.inf2.48xlarge', 'ml.trn1.2xlarge', 'ml.trn1.32xlarge', 'ml.trn1n.32xlarge']
    - name: MaxInstanceCount
      value: {{ MaxInstanceCount }}
      description: |
        The maximum number of instances to use for the optimization job.
    - name: OptimizationEnvironment
      value: "{{ OptimizationEnvironment }}"
      description: |
        The environment variables to set in the model container.
    - name: OptimizationConfigs
      description: |
        Settings for each of the optimization techniques that the job applies.
      value:
        - ModelQuantizationConfig:
            Image: "{{ Image }}"
            OverrideEnvironment: "{{ OverrideEnvironment }}"
          ModelCompilationConfig:
            Image: "{{ Image }}"
            OverrideEnvironment: "{{ OverrideEnvironment }}"
          ModelShardingConfig:
            Image: "{{ Image }}"
            OverrideEnvironment: "{{ OverrideEnvironment }}"
          ModelSpeculativeDecodingConfig:
            Technique: "{{ Technique }}"
            TrainingDataSource:
              S3Uri: "{{ S3Uri }}"
              S3DataType: "{{ S3DataType }}"
    - name: OutputConfig
      description: |
        Details for where to store the optimized model that you create with the optimization job.
      value:
        KmsKeyId: "{{ KmsKeyId }}"
        S3OutputLocation: "{{ S3OutputLocation }}"
        SageMakerModel:
          ModelName: "{{ ModelName }}"
    - name: StoppingCondition
      description: |
        Specifies a limit to how long a job can run. When the job reaches the time limit, SageMaker ends the job. Use this API to cap costs. To stop a training job, SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with CreateModel. The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.
      value:
        MaxRuntimeInSeconds: {{ MaxRuntimeInSeconds }}
        MaxWaitTimeInSeconds: {{ MaxWaitTimeInSeconds }}
        MaxPendingTimeInSeconds: {{ MaxPendingTimeInSeconds }}
    - name: Tags
      description: |
        A list of key-value pairs associated with the optimization job. For more information, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference Guide.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: VpcConfig
      description: |
        A VPC in Amazon VPC that your optimized model has access to.
      value:
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        Subnets:
          - "{{ Subnets }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_optimization_job"
    values={[
        { label: 'delete_optimization_job', value: 'delete_optimization_job' }
    ]}
>
<TabItem value="delete_optimization_job">

Deletes an optimization job.

```sql
DELETE FROM aws.sagemaker.optimization_jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_optimization_job"
    values={[
        { label: 'stop_optimization_job', value: 'stop_optimization_job' }
    ]}
>
<TabItem value="stop_optimization_job">

Ends a running inference optimization job.

```sql
EXEC aws.sagemaker.optimization_jobs.stop_optimization_job 
@region='{{ region }}' --required 
@@json=
'{
"OptimizationJobName": "{{ OptimizationJobName }}"
}'
;
```
</TabItem>
</Tabs>
