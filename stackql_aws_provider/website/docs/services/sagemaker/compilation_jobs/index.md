--- 
title: compilation_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - compilation_jobs
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

Creates, updates, deletes, gets or lists a <code>compilation_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compilation_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.compilation_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_compilation_job"
    values={[
        { label: 'describe_compilation_job', value: 'describe_compilation_job' },
        { label: 'list_compilation_jobs', value: 'list_compilation_jobs' }
    ]}
>
<TabItem value="describe_compilation_job">

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
    <td><CopyableCode code="CompilationEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the model compilation job on a compilation job instance ended. For a successful or stopped job, this is when the job's model artifacts have finished uploading. For a failed job, this is when Amazon SageMaker AI detected that the job failed.</td>
</tr>
<tr>
    <td><CopyableCode code="CompilationJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model compilation job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:compilation-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CompilationJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the model compilation job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CompilationJobStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the model compilation job. (INPROGRESS, COMPLETED, FAILED, STARTING, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="CompilationStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the model compilation job started the CompilationJob instances. You are billed for the time between this timestamp and the timestamp in the CompilationEndTime field. In Amazon CloudWatch Logs, the start time might be later than this time. That's because it takes time to download the compilation job, which depends on the size of the compilation job container.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the model compilation job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DerivedInformation" /></td>
    <td><code>object</code></td>
    <td>Information that SageMaker Neo automatically derived about the model.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>If a model compilation job failed, the reason it failed.</td>
</tr>
<tr>
    <td><CopyableCode code="InferenceImage" /></td>
    <td><code>string</code></td>
    <td>The inference image to use when compiling a model. Specify an image only if the target device is a cloud instance.</td>
</tr>
<tr>
    <td><CopyableCode code="InputConfig" /></td>
    <td><code>object</code></td>
    <td>Information about the location in Amazon S3 of the input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the status of the model compilation job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelArtifacts" /></td>
    <td><code>object</code></td>
    <td>Information about the location in Amazon S3 that has been configured for storing the model artifacts used in the compilation job.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelDigests" /></td>
    <td><code>object</code></td>
    <td>Provides a BLAKE2 hash value that identifies the compiled model artifacts in Amazon S3.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelPackageVersionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the versioned model package that was provided to SageMaker Neo when you initiated a compilation job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:model-package/&#91;\S&#93;&#123;1,2048&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OutputConfig" /></td>
    <td><code>object</code></td>
    <td>Information about the output location for the compiled model and the target device that the model runs on.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI assumes to perform the model compilation job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StoppingCondition" /></td>
    <td><code>object</code></td>
    <td>Specifies a limit to how long a job can run. When the job reaches the time limit, SageMaker ends the job. Use this API to cap costs. To stop a training job, SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with CreateModel. The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcConfig" /></td>
    <td><code>object</code></td>
    <td>A VpcConfig object that specifies the VPC that you want your compilation job to connect to. Control access to your models by configuring the VPC. For more information, see Protect Compilation Jobs by Using an Amazon Virtual Private Cloud.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_compilation_jobs">

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
    <td><CopyableCode code="CompilationEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the model compilation job completed.</td>
</tr>
<tr>
    <td><CopyableCode code="CompilationJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model compilation job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:compilation-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CompilationJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the model compilation job that you want a summary for. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CompilationJobStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the model compilation job. (INPROGRESS, COMPLETED, FAILED, STARTING, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="CompilationStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the model compilation job started.</td>
</tr>
<tr>
    <td><CopyableCode code="CompilationTargetDevice" /></td>
    <td><code>string</code></td>
    <td>The type of device that the model will run on after the compilation job has completed. (lambda, ml_m4, ml_m5, ml_m6g, ml_c4, ml_c5, ml_c6g, ml_p2, ml_p3, ml_g4dn, ml_inf1, ml_inf2, ml_trn1, ml_eia2, jetson_tx1, jetson_tx2, jetson_nano, jetson_xavier, rasp3b, rasp4b, imx8qm, deeplens, rk3399, rk3288, aisage, sbe_c, qcs605, qcs603, sitara_am57x, amba_cv2, amba_cv22, amba_cv25, x86_win32, x86_win64, coreml, jacinto_tda4vm, imx8mplus)</td>
</tr>
<tr>
    <td><CopyableCode code="CompilationTargetPlatformAccelerator" /></td>
    <td><code>string</code></td>
    <td>The type of accelerator that the model will run on after the compilation job has completed. (INTEL_GRAPHICS, MALI, NVIDIA, NNA)</td>
</tr>
<tr>
    <td><CopyableCode code="CompilationTargetPlatformArch" /></td>
    <td><code>string</code></td>
    <td>The type of architecture that the model will run on after the compilation job has completed. (X86_64, X86, ARM64, ARM_EABI, ARM_EABIHF)</td>
</tr>
<tr>
    <td><CopyableCode code="CompilationTargetPlatformOs" /></td>
    <td><code>string</code></td>
    <td>The type of OS that the model will run on after the compilation job has completed. (ANDROID, LINUX)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the model compilation job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the model compilation job was last modified.</td>
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
    <td><a href="#describe_compilation_job"><CopyableCode code="describe_compilation_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a model compilation job. To create a model compilation job, use CreateCompilationJob. To get information about multiple model compilation jobs, use ListCompilationJobs.</td>
</tr>
<tr>
    <td><a href="#list_compilation_jobs"><CopyableCode code="list_compilation_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists model compilation jobs that satisfy various filters. To create a model compilation job, use CreateCompilationJob. To get information about a particular model compilation job you have created, use DescribeCompilationJob.</td>
</tr>
<tr>
    <td><a href="#create_compilation_job"><CopyableCode code="create_compilation_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CompilationJobName"><code>CompilationJobName</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-OutputConfig"><code>OutputConfig</code></a>, <a href="#parameter-StoppingCondition"><code>StoppingCondition</code></a></td>
    <td></td>
    <td>Starts a model compilation job. After the model has been compiled, Amazon SageMaker AI saves the resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify. If you choose to host your model using Amazon SageMaker AI hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts with Amazon Web Services IoT Greengrass. In that case, deploy them as an ML resource. In the request body, you provide the following: A name for the compilation job Information about the input model artifacts The output location for the compiled model and the device (target) that the model runs on The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker AI assumes to perform the model compilation job. You can also provide a Tag to track the model compilation job's resource use and costs. The response body contains the CompilationJobArn for the compiled job. To stop a model compilation job, use StopCompilationJob. To get information about a particular model compilation job, use DescribeCompilationJob. To get information about multiple model compilation jobs, use ListCompilationJobs.</td>
</tr>
<tr>
    <td><a href="#delete_compilation_job"><CopyableCode code="delete_compilation_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified compilation job. This action deletes only the compilation job resource in Amazon SageMaker AI. It doesn't delete other resources that are related to that job, such as the model artifacts that the job creates, the compilation logs in CloudWatch, the compiled model, or the IAM role. You can delete a compilation job only if its current status is COMPLETED, FAILED, or STOPPED. If the job status is STARTING or INPROGRESS, stop the job, and then delete it after its status becomes STOPPED.</td>
</tr>
<tr>
    <td><a href="#stop_compilation_job"><CopyableCode code="stop_compilation_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CompilationJobName"><code>CompilationJobName</code></a></td>
    <td></td>
    <td>Stops a model compilation job. To stop a job, Amazon SageMaker AI sends the algorithm the SIGTERM signal. This gracefully shuts the job down. If the job hasn't stopped, it sends the SIGKILL signal. When it receives a StopCompilationJob request, Amazon SageMaker AI changes the CompilationJobStatus of the job to Stopping. After Amazon SageMaker stops the job, it sets the CompilationJobStatus to Stopped.</td>
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
    defaultValue="describe_compilation_job"
    values={[
        { label: 'describe_compilation_job', value: 'describe_compilation_job' },
        { label: 'list_compilation_jobs', value: 'list_compilation_jobs' }
    ]}
>
<TabItem value="describe_compilation_job">

Returns information about a model compilation job. To create a model compilation job, use CreateCompilationJob. To get information about multiple model compilation jobs, use ListCompilationJobs.

```sql
SELECT
CompilationEndTime,
CompilationJobArn,
CompilationJobName,
CompilationJobStatus,
CompilationStartTime,
CreationTime,
DerivedInformation,
FailureReason,
InferenceImage,
InputConfig,
LastModifiedTime,
ModelArtifacts,
ModelDigests,
ModelPackageVersionArn,
OutputConfig,
RoleArn,
StoppingCondition,
VpcConfig
FROM aws.sagemaker.compilation_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_compilation_jobs">

Lists model compilation jobs that satisfy various filters. To create a model compilation job, use CreateCompilationJob. To get information about a particular model compilation job you have created, use DescribeCompilationJob.

```sql
SELECT
CompilationEndTime,
CompilationJobArn,
CompilationJobName,
CompilationJobStatus,
CompilationStartTime,
CompilationTargetDevice,
CompilationTargetPlatformAccelerator,
CompilationTargetPlatformArch,
CompilationTargetPlatformOs,
CreationTime,
LastModifiedTime
FROM aws.sagemaker.compilation_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_compilation_job"
    values={[
        { label: 'create_compilation_job', value: 'create_compilation_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_compilation_job">

Starts a model compilation job. After the model has been compiled, Amazon SageMaker AI saves the resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify. If you choose to host your model using Amazon SageMaker AI hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts with Amazon Web Services IoT Greengrass. In that case, deploy them as an ML resource. In the request body, you provide the following: A name for the compilation job Information about the input model artifacts The output location for the compiled model and the device (target) that the model runs on The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker AI assumes to perform the model compilation job. You can also provide a Tag to track the model compilation job's resource use and costs. The response body contains the CompilationJobArn for the compiled job. To stop a model compilation job, use StopCompilationJob. To get information about a particular model compilation job, use DescribeCompilationJob. To get information about multiple model compilation jobs, use ListCompilationJobs.

```sql
INSERT INTO aws.sagemaker.compilation_jobs (
CompilationJobName,
RoleArn,
ModelPackageVersionArn,
InputConfig,
OutputConfig,
VpcConfig,
StoppingCondition,
Tags,
region
)
SELECT 
'{{ CompilationJobName }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ ModelPackageVersionArn }}',
'{{ InputConfig }}',
'{{ OutputConfig }}' /* required */,
'{{ VpcConfig }}',
'{{ StoppingCondition }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
CompilationJobArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: compilation_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the compilation_jobs resource.
    - name: CompilationJobName
      value: "{{ CompilationJobName }}"
      description: |
        A name for the model compilation job. The name must be unique within the Amazon Web Services Region and within your Amazon Web Services account.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker AI to perform tasks on your behalf. During model compilation, Amazon SageMaker AI needs your permission to: Read input data from an S3 bucket Write model artifacts to an S3 bucket Write logs to Amazon CloudWatch Logs Publish metrics to Amazon CloudWatch You grant permissions for all of these tasks to an IAM role. To pass this role to Amazon SageMaker AI, the caller of this API must have the iam:PassRole permission. For more information, see Amazon SageMaker AI Roles.
    - name: ModelPackageVersionArn
      value: "{{ ModelPackageVersionArn }}"
      description: |
        The Amazon Resource Name (ARN) of a versioned model package. Provide either a ModelPackageVersionArn or an InputConfig object in the request syntax. The presence of both objects in the CreateCompilationJob request will return an exception.
    - name: InputConfig
      description: |
        Provides information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.
      value:
        S3Uri: "{{ S3Uri }}"
        DataInputConfig: "{{ DataInputConfig }}"
        Framework: "{{ Framework }}"
        FrameworkVersion: "{{ FrameworkVersion }}"
    - name: OutputConfig
      description: |
        Provides information about the output location for the compiled model and the target device the model runs on.
      value:
        S3OutputLocation: "{{ S3OutputLocation }}"
        TargetDevice: "{{ TargetDevice }}"
        TargetPlatform:
          Os: "{{ Os }}"
          Arch: "{{ Arch }}"
          Accelerator: "{{ Accelerator }}"
        CompilerOptions: "{{ CompilerOptions }}"
        KmsKeyId: "{{ KmsKeyId }}"
    - name: VpcConfig
      description: |
        A VpcConfig object that specifies the VPC that you want your compilation job to connect to. Control access to your models by configuring the VPC. For more information, see Protect Compilation Jobs by Using an Amazon Virtual Private Cloud.
      value:
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        Subnets:
          - "{{ Subnets }}"
    - name: StoppingCondition
      description: |
        Specifies a limit to how long a model compilation job can run. When the job reaches the time limit, Amazon SageMaker AI ends the compilation job. Use this API to cap model training costs.
      value:
        MaxRuntimeInSeconds: {{ MaxRuntimeInSeconds }}
        MaxWaitTimeInSeconds: {{ MaxWaitTimeInSeconds }}
        MaxPendingTimeInSeconds: {{ MaxPendingTimeInSeconds }}
    - name: Tags
      description: |
        An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_compilation_job"
    values={[
        { label: 'delete_compilation_job', value: 'delete_compilation_job' }
    ]}
>
<TabItem value="delete_compilation_job">

Deletes the specified compilation job. This action deletes only the compilation job resource in Amazon SageMaker AI. It doesn't delete other resources that are related to that job, such as the model artifacts that the job creates, the compilation logs in CloudWatch, the compiled model, or the IAM role. You can delete a compilation job only if its current status is COMPLETED, FAILED, or STOPPED. If the job status is STARTING or INPROGRESS, stop the job, and then delete it after its status becomes STOPPED.

```sql
DELETE FROM aws.sagemaker.compilation_jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_compilation_job"
    values={[
        { label: 'stop_compilation_job', value: 'stop_compilation_job' }
    ]}
>
<TabItem value="stop_compilation_job">

Stops a model compilation job. To stop a job, Amazon SageMaker AI sends the algorithm the SIGTERM signal. This gracefully shuts the job down. If the job hasn't stopped, it sends the SIGKILL signal. When it receives a StopCompilationJob request, Amazon SageMaker AI changes the CompilationJobStatus of the job to Stopping. After Amazon SageMaker stops the job, it sets the CompilationJobStatus to Stopped.

```sql
EXEC aws.sagemaker.compilation_jobs.stop_compilation_job 
@region='{{ region }}' --required 
@@json=
'{
"CompilationJobName": "{{ CompilationJobName }}"
}'
;
```
</TabItem>
</Tabs>
