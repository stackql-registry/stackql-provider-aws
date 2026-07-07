--- 
title: processing_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - processing_jobs
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

Creates, updates, deletes, gets or lists a <code>processing_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="processing_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.processing_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_processing_job"
    values={[
        { label: 'describe_processing_job', value: 'describe_processing_job' },
        { label: 'list_processing_jobs', value: 'list_processing_jobs' }
    ]}
>
<TabItem value="describe_processing_job">

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
    <td><CopyableCode code="AppSpecification" /></td>
    <td><code>object</code></td>
    <td>Configures the processing job to run a specified container image.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoMLJobArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of an AutoML job associated with this processing job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:automl-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the processing job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Environment" /></td>
    <td><code>object</code></td>
    <td>The environment variables set in the Docker container.</td>
</tr>
<tr>
    <td><CopyableCode code="ExitMessage" /></td>
    <td><code>string</code></td>
    <td>An optional string, up to one KB in size, that contains metadata from the processing container when the processing job exits. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExperimentConfig" /></td>
    <td><code>object</code></td>
    <td>Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs: CreateProcessingJob CreateTrainingJob CreateTransformJob</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>A string, up to one KB in size, that contains the reason a processing job failed, if it failed.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the processing job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="MonitoringScheduleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a monitoring schedule for an endpoint associated with this processing job. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkConfig" /></td>
    <td><code>object</code></td>
    <td>Networking options for a processing job.</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessingEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the processing job completed.</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessingInputs" /></td>
    <td><code>array</code></td>
    <td>The inputs for a processing job.</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessingJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the processing job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:processing-job/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessingJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the processing job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessingJobStatus" /></td>
    <td><code>string</code></td>
    <td>Provides the status of a processing job. (InProgress, Completed, Failed, Stopping, Stopped)</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessingOutputConfig" /></td>
    <td><code>object</code></td>
    <td>Output configuration for the processing job.</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessingResources" /></td>
    <td><code>object</code></td>
    <td>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessingStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the processing job started.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StoppingCondition" /></td>
    <td><code>object</code></td>
    <td>The time limit for how long the processing job is allowed to run.</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingJobArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a training job associated with this processing job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:training-job/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_processing_jobs">

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
    <td>The time at which the processing job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ExitMessage" /></td>
    <td><code>string</code></td>
    <td>An optional string, up to one KB in size, that contains metadata from the processing container when the processing job exits. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>A string, up to one KB in size, that contains the reason a processing job failed, if it failed.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates the last time the processing job was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessingEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the processing job completed.</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessingJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the processing job.. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:processing-job/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessingJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the processing job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessingJobStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the processing job. (InProgress, Completed, Failed, Stopping, Stopped)</td>
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
    <td><a href="#describe_processing_job"><CopyableCode code="describe_processing_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of a processing job.</td>
</tr>
<tr>
    <td><a href="#list_processing_jobs"><CopyableCode code="list_processing_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists processing jobs that satisfy various filters.</td>
</tr>
<tr>
    <td><a href="#create_processing_job"><CopyableCode code="create_processing_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProcessingJobName"><code>ProcessingJobName</code></a>, <a href="#parameter-ProcessingResources"><code>ProcessingResources</code></a>, <a href="#parameter-AppSpecification"><code>AppSpecification</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates a processing job.</td>
</tr>
<tr>
    <td><a href="#delete_processing_job"><CopyableCode code="delete_processing_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a processing job. After Amazon SageMaker deletes a processing job, all of the metadata for the processing job is lost. You can delete only processing jobs that are in a terminal state (Stopped, Failed, or Completed). You cannot delete a job that is in the InProgress or Stopping state. After deleting the job, you can reuse its name to create another processing job.</td>
</tr>
<tr>
    <td><a href="#stop_processing_job"><CopyableCode code="stop_processing_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProcessingJobName"><code>ProcessingJobName</code></a></td>
    <td></td>
    <td>Stops a processing job.</td>
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
    defaultValue="describe_processing_job"
    values={[
        { label: 'describe_processing_job', value: 'describe_processing_job' },
        { label: 'list_processing_jobs', value: 'list_processing_jobs' }
    ]}
>
<TabItem value="describe_processing_job">

Returns a description of a processing job.

```sql
SELECT
AppSpecification,
AutoMLJobArn,
CreationTime,
Environment,
ExitMessage,
ExperimentConfig,
FailureReason,
LastModifiedTime,
MonitoringScheduleArn,
NetworkConfig,
ProcessingEndTime,
ProcessingInputs,
ProcessingJobArn,
ProcessingJobName,
ProcessingJobStatus,
ProcessingOutputConfig,
ProcessingResources,
ProcessingStartTime,
RoleArn,
StoppingCondition,
TrainingJobArn
FROM aws.sagemaker.processing_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_processing_jobs">

Lists processing jobs that satisfy various filters.

```sql
SELECT
CreationTime,
ExitMessage,
FailureReason,
LastModifiedTime,
ProcessingEndTime,
ProcessingJobArn,
ProcessingJobName,
ProcessingJobStatus
FROM aws.sagemaker.processing_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_processing_job"
    values={[
        { label: 'create_processing_job', value: 'create_processing_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_processing_job">

Creates a processing job.

```sql
INSERT INTO aws.sagemaker.processing_jobs (
ProcessingInputs,
ProcessingOutputConfig,
ProcessingJobName,
ProcessingResources,
StoppingCondition,
AppSpecification,
Environment,
NetworkConfig,
RoleArn,
Tags,
ExperimentConfig,
region
)
SELECT 
'{{ ProcessingInputs }}',
'{{ ProcessingOutputConfig }}',
'{{ ProcessingJobName }}' /* required */,
'{{ ProcessingResources }}' /* required */,
'{{ StoppingCondition }}',
'{{ AppSpecification }}' /* required */,
'{{ Environment }}',
'{{ NetworkConfig }}',
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
'{{ ExperimentConfig }}',
'{{ region }}'
RETURNING
ProcessingJobArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: processing_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the processing_jobs resource.
    - name: ProcessingInputs
      description: |
        An array of inputs configuring the data to download into the processing container.
      value:
        - InputName: "{{ InputName }}"
          AppManaged: {{ AppManaged }}
          S3Input:
            S3Uri: "{{ S3Uri }}"
            LocalPath: "{{ LocalPath }}"
            S3DataType: "{{ S3DataType }}"
            S3InputMode: "{{ S3InputMode }}"
            S3DataDistributionType: "{{ S3DataDistributionType }}"
            S3CompressionType: "{{ S3CompressionType }}"
          DatasetDefinition:
            AthenaDatasetDefinition:
              Catalog: "{{ Catalog }}"
              Database: "{{ Database }}"
              QueryString: "{{ QueryString }}"
              WorkGroup: "{{ WorkGroup }}"
              OutputS3Uri: "{{ OutputS3Uri }}"
              KmsKeyId: "{{ KmsKeyId }}"
              OutputFormat: "{{ OutputFormat }}"
              OutputCompression: "{{ OutputCompression }}"
            RedshiftDatasetDefinition:
              ClusterId: "{{ ClusterId }}"
              Database: "{{ Database }}"
              DbUser: "{{ DbUser }}"
              QueryString: "{{ QueryString }}"
              ClusterRoleArn: "{{ ClusterRoleArn }}"
              OutputS3Uri: "{{ OutputS3Uri }}"
              KmsKeyId: "{{ KmsKeyId }}"
              OutputFormat: "{{ OutputFormat }}"
              OutputCompression: "{{ OutputCompression }}"
            LocalPath: "{{ LocalPath }}"
            DataDistributionType: "{{ DataDistributionType }}"
            InputMode: "{{ InputMode }}"
    - name: ProcessingOutputConfig
      description: |
        Output configuration for the processing job.
      value:
        Outputs:
          - OutputName: "{{ OutputName }}"
            S3Output:
              S3Uri: "{{ S3Uri }}"
              LocalPath: "{{ LocalPath }}"
              S3UploadMode: "{{ S3UploadMode }}"
            FeatureStoreOutput:
              FeatureGroupName: "{{ FeatureGroupName }}"
            AppManaged: {{ AppManaged }}
        KmsKeyId: "{{ KmsKeyId }}"
    - name: ProcessingJobName
      value: "{{ ProcessingJobName }}"
      description: |
        The name of the processing job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
    - name: ProcessingResources
      description: |
        Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
      value:
        ClusterConfig:
          InstanceCount: {{ InstanceCount }}
          InstanceType: "{{ InstanceType }}"
          VolumeSizeInGB: {{ VolumeSizeInGB }}
          VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
    - name: StoppingCondition
      description: |
        The time limit for how long the processing job is allowed to run.
      value:
        MaxRuntimeInSeconds: {{ MaxRuntimeInSeconds }}
    - name: AppSpecification
      description: |
        Configures the processing job to run a specified Docker container image.
      value:
        ImageUri: "{{ ImageUri }}"
        ContainerEntrypoint:
          - "{{ ContainerEntrypoint }}"
        ContainerArguments:
          - "{{ ContainerArguments }}"
    - name: Environment
      value: "{{ Environment }}"
      description: |
        The environment variables to set in the Docker container. Up to 100 key and values entries in the map are supported. Do not include any security-sensitive information including account access IDs, secrets, or tokens in any environment fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by security-sensitive information included in the request environment variable or plain text fields.
    - name: NetworkConfig
      description: |
        Networking options for a processing job, such as whether to allow inbound and outbound network calls to and from processing containers, and the VPC subnets and security groups to use for VPC-enabled processing jobs.
      value:
        EnableInterContainerTrafficEncryption: {{ EnableInterContainerTrafficEncryption }}
        EnableNetworkIsolation: {{ EnableNetworkIsolation }}
        VpcConfig:
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
          Subnets:
            - "{{ Subnets }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
    - name: Tags
      description: |
        (Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide. Do not include any security-sensitive information including account access IDs, secrets, or tokens in any tags. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by security-sensitive information included in the request tag variable or plain text fields.
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


## `DELETE` examples

<Tabs
    defaultValue="delete_processing_job"
    values={[
        { label: 'delete_processing_job', value: 'delete_processing_job' }
    ]}
>
<TabItem value="delete_processing_job">

Deletes a processing job. After Amazon SageMaker deletes a processing job, all of the metadata for the processing job is lost. You can delete only processing jobs that are in a terminal state (Stopped, Failed, or Completed). You cannot delete a job that is in the InProgress or Stopping state. After deleting the job, you can reuse its name to create another processing job.

```sql
DELETE FROM aws.sagemaker.processing_jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_processing_job"
    values={[
        { label: 'stop_processing_job', value: 'stop_processing_job' }
    ]}
>
<TabItem value="stop_processing_job">

Stops a processing job.

```sql
EXEC aws.sagemaker.processing_jobs.stop_processing_job 
@region='{{ region }}' --required 
@@json=
'{
"ProcessingJobName": "{{ ProcessingJobName }}"
}'
;
```
</TabItem>
</Tabs>
