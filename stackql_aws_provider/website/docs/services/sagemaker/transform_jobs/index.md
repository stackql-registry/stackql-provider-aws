--- 
title: transform_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - transform_jobs
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

Creates, updates, deletes, gets or lists a <code>transform_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transform_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.transform_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_transform_job"
    values={[
        { label: 'describe_transform_job', value: 'describe_transform_job' },
        { label: 'list_transform_jobs', value: 'list_transform_jobs' }
    ]}
>
<TabItem value="describe_transform_job">

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
    <td><CopyableCode code="AutoMLJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the AutoML transform job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:automl-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BatchStrategy" /></td>
    <td><code>string</code></td>
    <td>Specifies the number of records to include in a mini-batch for an HTTP inference request. A record is a single unit of input data that inference can be made on. For example, a single line in a CSV file is a record. To enable the batch strategy, you must set SplitType to Line, RecordIO, or TFRecord. (MultiRecord, SingleRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the transform Job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataCaptureConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration to control how SageMaker captures inference data.</td>
</tr>
<tr>
    <td><CopyableCode code="DataProcessing" /></td>
    <td><code>object</code></td>
    <td>The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see Associate Prediction Results with their Corresponding Input Records.</td>
</tr>
<tr>
    <td><CopyableCode code="Environment" /></td>
    <td><code>object</code></td>
    <td>The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.</td>
</tr>
<tr>
    <td><CopyableCode code="ExperimentConfig" /></td>
    <td><code>object</code></td>
    <td>Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs: CreateProcessingJob CreateTrainingJob CreateTransformJob</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>If the transform job failed, FailureReason describes why it failed. A transform job creates a log file, which includes error messages, and stores it as an Amazon S3 object. For more information, see Log Amazon SageMaker Events with Amazon CloudWatch.</td>
</tr>
<tr>
    <td><CopyableCode code="LabelingJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the transform or training job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:labeling-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MaxConcurrentTransforms" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of parallel requests on each instance node that can be launched in a transform job. The default value is 1.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxPayloadInMB" /></td>
    <td><code>integer</code></td>
    <td>The maximum payload size, in MB, used in the transform job.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelClientConfig" /></td>
    <td><code>object</code></td>
    <td>The timeout and maximum number of retries for processing a transform job invocation.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelName" /></td>
    <td><code>string</code></td>
    <td>The name of the model used in the transform job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;\-a-zA-Z0-9&#93;*&#91;a-zA-Z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TransformEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates when the transform job has been completed, or has stopped or failed. You are billed for the time interval between this time and the value of TransformStartTime.</td>
</tr>
<tr>
    <td><CopyableCode code="TransformInput" /></td>
    <td><code>object</code></td>
    <td>Describes the dataset to be transformed and the Amazon S3 location where it is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="TransformJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the transform job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:transform-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TransformJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the transform job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TransformJobStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the transform job. If the transform job failed, the reason is returned in the FailureReason field. (InProgress, Completed, Failed, Stopping, Stopped)</td>
</tr>
<tr>
    <td><CopyableCode code="TransformOutput" /></td>
    <td><code>object</code></td>
    <td>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.</td>
</tr>
<tr>
    <td><CopyableCode code="TransformResources" /></td>
    <td><code>object</code></td>
    <td>Describes the resources, including ML instance types and ML instance count, to use for the transform job.</td>
</tr>
<tr>
    <td><CopyableCode code="TransformStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates when the transform job starts on ML instances. You are billed for the time interval between this time and the value of TransformEndTime.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_transform_jobs">

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
    <td>A timestamp that shows when the transform Job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>If the transform job failed, the reason it failed.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates when the transform job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="TransformEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates when the transform job ends on compute instances. For successful jobs and stopped jobs, this is the exact time recorded after the results are uploaded. For failed jobs, this is when Amazon SageMaker detected that the job failed.</td>
</tr>
<tr>
    <td><CopyableCode code="TransformJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the transform job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:transform-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TransformJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the transform job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TransformJobStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the transform job. (InProgress, Completed, Failed, Stopping, Stopped)</td>
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
    <td><a href="#describe_transform_job"><CopyableCode code="describe_transform_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a transform job.</td>
</tr>
<tr>
    <td><a href="#list_transform_jobs"><CopyableCode code="list_transform_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists transform jobs.</td>
</tr>
<tr>
    <td><a href="#create_transform_job"><CopyableCode code="create_transform_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TransformJobName"><code>TransformJobName</code></a>, <a href="#parameter-ModelName"><code>ModelName</code></a>, <a href="#parameter-TransformInput"><code>TransformInput</code></a>, <a href="#parameter-TransformOutput"><code>TransformOutput</code></a>, <a href="#parameter-TransformResources"><code>TransformResources</code></a></td>
    <td></td>
    <td>Starts a transform job. A transform job uses a trained model to get inferences on a dataset and saves these results to an Amazon S3 location that you specify. To perform batch transformations, you create a transform job and use the data that you have readily available. In the request body, you provide the following: TransformJobName - Identifies the transform job. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account. ModelName - Identifies the model to use. ModelName must be the name of an existing Amazon SageMaker model in the same Amazon Web Services Region and Amazon Web Services account. For information on creating a model, see CreateModel. TransformInput - Describes the dataset to be transformed and the Amazon S3 location where it is stored. TransformOutput - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job. TransformResources - Identifies the ML compute instances and AMI image versions for the transform job. For more information about how batch transformation works, see Batch Transform.</td>
</tr>
<tr>
    <td><a href="#stop_transform_job"><CopyableCode code="stop_transform_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TransformJobName"><code>TransformJobName</code></a></td>
    <td></td>
    <td>Stops a batch transform job. When Amazon SageMaker receives a StopTransformJob request, the status of the job changes to Stopping. After Amazon SageMaker stops the job, the status is set to Stopped. When you stop a batch transform job before it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.</td>
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
    defaultValue="describe_transform_job"
    values={[
        { label: 'describe_transform_job', value: 'describe_transform_job' },
        { label: 'list_transform_jobs', value: 'list_transform_jobs' }
    ]}
>
<TabItem value="describe_transform_job">

Returns information about a transform job.

```sql
SELECT
AutoMLJobArn,
BatchStrategy,
CreationTime,
DataCaptureConfig,
DataProcessing,
Environment,
ExperimentConfig,
FailureReason,
LabelingJobArn,
MaxConcurrentTransforms,
MaxPayloadInMB,
ModelClientConfig,
ModelName,
TransformEndTime,
TransformInput,
TransformJobArn,
TransformJobName,
TransformJobStatus,
TransformOutput,
TransformResources,
TransformStartTime
FROM aws.sagemaker.transform_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_transform_jobs">

Lists transform jobs.

```sql
SELECT
CreationTime,
FailureReason,
LastModifiedTime,
TransformEndTime,
TransformJobArn,
TransformJobName,
TransformJobStatus
FROM aws.sagemaker.transform_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_transform_job"
    values={[
        { label: 'create_transform_job', value: 'create_transform_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transform_job">

Starts a transform job. A transform job uses a trained model to get inferences on a dataset and saves these results to an Amazon S3 location that you specify. To perform batch transformations, you create a transform job and use the data that you have readily available. In the request body, you provide the following: TransformJobName - Identifies the transform job. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account. ModelName - Identifies the model to use. ModelName must be the name of an existing Amazon SageMaker model in the same Amazon Web Services Region and Amazon Web Services account. For information on creating a model, see CreateModel. TransformInput - Describes the dataset to be transformed and the Amazon S3 location where it is stored. TransformOutput - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job. TransformResources - Identifies the ML compute instances and AMI image versions for the transform job. For more information about how batch transformation works, see Batch Transform.

```sql
INSERT INTO aws.sagemaker.transform_jobs (
TransformJobName,
ModelName,
MaxConcurrentTransforms,
ModelClientConfig,
MaxPayloadInMB,
BatchStrategy,
Environment,
TransformInput,
TransformOutput,
DataCaptureConfig,
TransformResources,
DataProcessing,
Tags,
ExperimentConfig,
region
)
SELECT 
'{{ TransformJobName }}' /* required */,
'{{ ModelName }}' /* required */,
{{ MaxConcurrentTransforms }},
'{{ ModelClientConfig }}',
{{ MaxPayloadInMB }},
'{{ BatchStrategy }}',
'{{ Environment }}',
'{{ TransformInput }}' /* required */,
'{{ TransformOutput }}' /* required */,
'{{ DataCaptureConfig }}',
'{{ TransformResources }}' /* required */,
'{{ DataProcessing }}',
'{{ Tags }}',
'{{ ExperimentConfig }}',
'{{ region }}'
RETURNING
TransformJobArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transform_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transform_jobs resource.
    - name: TransformJobName
      value: "{{ TransformJobName }}"
      description: |
        The name of the transform job. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account.
    - name: ModelName
      value: "{{ ModelName }}"
      description: |
        The name of the model that you want to use for the transform job. ModelName must be the name of an existing Amazon SageMaker model within an Amazon Web Services Region in an Amazon Web Services account.
    - name: MaxConcurrentTransforms
      value: {{ MaxConcurrentTransforms }}
      description: |
        The maximum number of parallel requests that can be sent to each instance in a transform job. If MaxConcurrentTransforms is set to 0 or left unset, Amazon SageMaker checks the optional execution-parameters to determine the settings for your chosen algorithm. If the execution-parameters endpoint is not enabled, the default value is 1. For more information on execution-parameters, see How Containers Serve Requests. For built-in algorithms, you don't need to set a value for MaxConcurrentTransforms.
    - name: ModelClientConfig
      description: |
        Configures the timeout and maximum number of retries for processing a transform job invocation.
      value:
        InvocationsTimeoutInSeconds: {{ InvocationsTimeoutInSeconds }}
        InvocationsMaxRetries: {{ InvocationsMaxRetries }}
    - name: MaxPayloadInMB
      value: {{ MaxPayloadInMB }}
      description: |
        The maximum allowed size of the payload, in MB. A payload is the data portion of a record (without metadata). The value in MaxPayloadInMB must be greater than, or equal to, the size of a single record. To estimate the size of a record in MB, divide the size of your dataset by the number of records. To ensure that the records fit within the maximum payload size, we recommend using a slightly larger value. The default value is 6 MB. The value of MaxPayloadInMB cannot be greater than 100 MB. If you specify the MaxConcurrentTransforms parameter, the value of (MaxConcurrentTransforms * MaxPayloadInMB) also cannot exceed 100 MB. For cases where the payload might be arbitrarily large and is transmitted using HTTP chunked encoding, set the value to 0. This feature works only in supported algorithms. Currently, Amazon SageMaker built-in algorithms do not support HTTP chunked encoding.
    - name: BatchStrategy
      value: "{{ BatchStrategy }}"
      description: |
        Specifies the number of records to include in a mini-batch for an HTTP inference request. A record is a single unit of input data that inference can be made on. For example, a single line in a CSV file is a record. To enable the batch strategy, you must set the SplitType property to Line, RecordIO, or TFRecord. To use only one record when making an HTTP invocation request to a container, set BatchStrategy to SingleRecord and SplitType to Line. To fit as many records in a mini-batch as can fit within the MaxPayloadInMB limit, set BatchStrategy to MultiRecord and SplitType to Line.
      valid_values: ['MultiRecord', 'SingleRecord']
    - name: Environment
      value: "{{ Environment }}"
      description: |
        The environment variables to set in the Docker container. Don't include any sensitive data in your environment variables. We support up to 16 key and values entries in the map.
    - name: TransformInput
      description: |
        Describes the input source and the way the transform job consumes it.
      value:
        DataSource:
          S3DataSource:
            S3DataType: "{{ S3DataType }}"
            S3Uri: "{{ S3Uri }}"
        ContentType: "{{ ContentType }}"
        CompressionType: "{{ CompressionType }}"
        SplitType: "{{ SplitType }}"
    - name: TransformOutput
      description: |
        Describes the results of the transform job.
      value:
        S3OutputPath: "{{ S3OutputPath }}"
        Accept: "{{ Accept }}"
        AssembleWith: "{{ AssembleWith }}"
        KmsKeyId: "{{ KmsKeyId }}"
    - name: DataCaptureConfig
      description: |
        Configuration to control how SageMaker captures inference data.
      value:
        DestinationS3Uri: "{{ DestinationS3Uri }}"
        KmsKeyId: "{{ KmsKeyId }}"
        GenerateInferenceId: {{ GenerateInferenceId }}
    - name: TransformResources
      description: |
        Describes the resources, including ML instance types and ML instance count, to use for the transform job.
      value:
        InstanceType: "{{ InstanceType }}"
        InstanceCount: {{ InstanceCount }}
        VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
        TransformAmiVersion: "{{ TransformAmiVersion }}"
    - name: DataProcessing
      description: |
        The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see Associate Prediction Results with their Corresponding Input Records.
      value:
        InputFilter: "{{ InputFilter }}"
        OutputFilter: "{{ OutputFilter }}"
        JoinSource: "{{ JoinSource }}"
    - name: Tags
      description: |
        (Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ExperimentConfig
      description: |
        Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs: CreateProcessingJob CreateTrainingJob CreateTransformJob
      value:
        ExperimentName: "{{ ExperimentName }}"
        TrialName: "{{ TrialName }}"
        TrialComponentDisplayName: "{{ TrialComponentDisplayName }}"
        RunName: "{{ RunName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_transform_job"
    values={[
        { label: 'stop_transform_job', value: 'stop_transform_job' }
    ]}
>
<TabItem value="stop_transform_job">

Stops a batch transform job. When Amazon SageMaker receives a StopTransformJob request, the status of the job changes to Stopping. After Amazon SageMaker stops the job, the status is set to Stopped. When you stop a batch transform job before it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.

```sql
EXEC aws.sagemaker.transform_jobs.stop_transform_job 
@region='{{ region }}' --required 
@@json=
'{
"TransformJobName": "{{ TransformJobName }}"
}'
;
```
</TabItem>
</Tabs>
