--- 
title: hyper_parameter_tuning_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - hyper_parameter_tuning_jobs
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

Creates, updates, deletes, gets or lists a <code>hyper_parameter_tuning_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hyper_parameter_tuning_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.hyper_parameter_tuning_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_hyper_parameter_tuning_job"
    values={[
        { label: 'describe_hyper_parameter_tuning_job', value: 'describe_hyper_parameter_tuning_job' },
        { label: 'list_hyper_parameter_tuning_jobs', value: 'list_hyper_parameter_tuning_jobs' }
    ]}
>
<TabItem value="describe_hyper_parameter_tuning_job">

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
    <td><CopyableCode code="Autotune" /></td>
    <td><code>object</code></td>
    <td>A flag to indicate if autotune is enabled for the hyperparameter tuning job.</td>
</tr>
<tr>
    <td><CopyableCode code="BestTrainingJob" /></td>
    <td><code>object</code></td>
    <td>A TrainingJobSummary object that describes the training job that completed with the best current HyperParameterTuningJobObjective.</td>
</tr>
<tr>
    <td><CopyableCode code="ConsumedResources" /></td>
    <td><code>object</code></td>
    <td>The total resources consumed by your hyperparameter tuning job.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the tuning job started.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>If the tuning job failed, the reason it failed.</td>
</tr>
<tr>
    <td><CopyableCode code="HyperParameterTuningEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the tuning job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="HyperParameterTuningJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the tuning job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:hyper-parameter-tuning-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HyperParameterTuningJobConfig" /></td>
    <td><code>object</code></td>
    <td>The HyperParameterTuningJobConfig object that specifies the configuration of the tuning job.</td>
</tr>
<tr>
    <td><CopyableCode code="HyperParameterTuningJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the hyperparameter tuning job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,31&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HyperParameterTuningJobStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the tuning job. (Completed, InProgress, Failed, Stopped, Stopping, Deleting, DeleteFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the status of the tuning job was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="ObjectiveStatusCounters" /></td>
    <td><code>object</code></td>
    <td>The ObjectiveStatusCounters object that specifies the number of training jobs, categorized by the status of their final objective metric, that this tuning job launched.</td>
</tr>
<tr>
    <td><CopyableCode code="OverallBestTrainingJob" /></td>
    <td><code>object</code></td>
    <td>If the hyperparameter tuning job is an warm start tuning job with a WarmStartType of IDENTICAL_DATA_AND_ALGORITHM, this is the TrainingJobSummary for the training job with the best objective metric value of all training jobs launched by this tuning job and all parent jobs specified for the warm start tuning job.</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingJobDefinition" /></td>
    <td><code>object</code></td>
    <td>Defines the training jobs launched by a hyperparameter tuning job.</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingJobDefinitions" /></td>
    <td><code>array</code></td>
    <td>A list of the HyperParameterTrainingJobDefinition objects launched for this tuning job.</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingJobStatusCounters" /></td>
    <td><code>object</code></td>
    <td>The TrainingJobStatusCounters object that specifies the number of training jobs, categorized by status, that this tuning job launched.</td>
</tr>
<tr>
    <td><CopyableCode code="TuningJobCompletionDetails" /></td>
    <td><code>object</code></td>
    <td>Tuning job completion information returned as the response from a hyperparameter tuning job. This information tells if your tuning job has or has not converged. It also includes the number of training jobs that have not improved model performance as evaluated against the objective function.</td>
</tr>
<tr>
    <td><CopyableCode code="WarmStartConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration for starting the hyperparameter parameter tuning job using one or more previous tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_hyper_parameter_tuning_jobs">

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
    <td>The date and time that the tuning job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="HyperParameterTuningEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the tuning job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="HyperParameterTuningJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the tuning job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:hyper-parameter-tuning-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HyperParameterTuningJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the tuning job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,31&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HyperParameterTuningJobStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the tuning job. (Completed, InProgress, Failed, Stopped, Stopping, Deleting, DeleteFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the tuning job was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="ObjectiveStatusCounters" /></td>
    <td><code>object</code></td>
    <td>The ObjectiveStatusCounters object that specifies the numbers of training jobs, categorized by objective metric status, that this tuning job launched.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceLimits" /></td>
    <td><code>object</code></td>
    <td>The ResourceLimits object that specifies the maximum number of training jobs and parallel training jobs allowed for this tuning job.</td>
</tr>
<tr>
    <td><CopyableCode code="Strategy" /></td>
    <td><code>string</code></td>
    <td>Specifies the search strategy hyperparameter tuning uses to choose which hyperparameters to evaluate at each iteration. (Bayesian, Random, Hyperband, Grid)</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingJobStatusCounters" /></td>
    <td><code>object</code></td>
    <td>The TrainingJobStatusCounters object that specifies the numbers of training jobs, categorized by status, that this tuning job launched.</td>
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
    <td><a href="#describe_hyper_parameter_tuning_job"><CopyableCode code="describe_hyper_parameter_tuning_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of a hyperparameter tuning job, depending on the fields selected. These fields can include the name, Amazon Resource Name (ARN), job status of your tuning job and more.</td>
</tr>
<tr>
    <td><a href="#list_hyper_parameter_tuning_jobs"><CopyableCode code="list_hyper_parameter_tuning_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of HyperParameterTuningJobSummary objects that describe the hyperparameter tuning jobs launched in your account.</td>
</tr>
<tr>
    <td><a href="#create_hyper_parameter_tuning_job"><CopyableCode code="create_hyper_parameter_tuning_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HyperParameterTuningJobName"><code>HyperParameterTuningJobName</code></a>, <a href="#parameter-HyperParameterTuningJobConfig"><code>HyperParameterTuningJobConfig</code></a></td>
    <td></td>
    <td>Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version of a model by running many training jobs on your dataset using the algorithm you choose and values for hyperparameters within ranges that you specify. It then chooses the hyperparameter values that result in a model that performs the best, as measured by an objective metric that you choose. A hyperparameter tuning job automatically creates Amazon SageMaker experiments, trials, and trial components for each training job that it runs. You can view these entities in Amazon SageMaker Studio. For more information, see View Experiments, Trials, and Trial Components. Do not include any security-sensitive information including account access IDs, secrets, or tokens in any hyperparameter fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by any security-sensitive information included in the request hyperparameter variable or plain text fields..</td>
</tr>
<tr>
    <td><a href="#delete_hyper_parameter_tuning_job"><CopyableCode code="delete_hyper_parameter_tuning_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a hyperparameter tuning job. The DeleteHyperParameterTuningJob API deletes only the tuning job entry that was created in SageMaker when you called the CreateHyperParameterTuningJob API. It does not delete training jobs, artifacts, or the IAM role that you specified when creating the model.</td>
</tr>
<tr>
    <td><a href="#stop_hyper_parameter_tuning_job"><CopyableCode code="stop_hyper_parameter_tuning_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HyperParameterTuningJobName"><code>HyperParameterTuningJobName</code></a></td>
    <td></td>
    <td>Stops a running hyperparameter tuning job and all running training jobs that the tuning job launched. All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the tuning job moves to the Stopped state, it releases all reserved resources for the tuning job.</td>
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
    defaultValue="describe_hyper_parameter_tuning_job"
    values={[
        { label: 'describe_hyper_parameter_tuning_job', value: 'describe_hyper_parameter_tuning_job' },
        { label: 'list_hyper_parameter_tuning_jobs', value: 'list_hyper_parameter_tuning_jobs' }
    ]}
>
<TabItem value="describe_hyper_parameter_tuning_job">

Returns a description of a hyperparameter tuning job, depending on the fields selected. These fields can include the name, Amazon Resource Name (ARN), job status of your tuning job and more.

```sql
SELECT
Autotune,
BestTrainingJob,
ConsumedResources,
CreationTime,
FailureReason,
HyperParameterTuningEndTime,
HyperParameterTuningJobArn,
HyperParameterTuningJobConfig,
HyperParameterTuningJobName,
HyperParameterTuningJobStatus,
LastModifiedTime,
ObjectiveStatusCounters,
OverallBestTrainingJob,
TrainingJobDefinition,
TrainingJobDefinitions,
TrainingJobStatusCounters,
TuningJobCompletionDetails,
WarmStartConfig
FROM aws.sagemaker.hyper_parameter_tuning_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_hyper_parameter_tuning_jobs">

Gets a list of HyperParameterTuningJobSummary objects that describe the hyperparameter tuning jobs launched in your account.

```sql
SELECT
CreationTime,
HyperParameterTuningEndTime,
HyperParameterTuningJobArn,
HyperParameterTuningJobName,
HyperParameterTuningJobStatus,
LastModifiedTime,
ObjectiveStatusCounters,
ResourceLimits,
Strategy,
TrainingJobStatusCounters
FROM aws.sagemaker.hyper_parameter_tuning_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_hyper_parameter_tuning_job"
    values={[
        { label: 'create_hyper_parameter_tuning_job', value: 'create_hyper_parameter_tuning_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_hyper_parameter_tuning_job">

Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version of a model by running many training jobs on your dataset using the algorithm you choose and values for hyperparameters within ranges that you specify. It then chooses the hyperparameter values that result in a model that performs the best, as measured by an objective metric that you choose. A hyperparameter tuning job automatically creates Amazon SageMaker experiments, trials, and trial components for each training job that it runs. You can view these entities in Amazon SageMaker Studio. For more information, see View Experiments, Trials, and Trial Components. Do not include any security-sensitive information including account access IDs, secrets, or tokens in any hyperparameter fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by any security-sensitive information included in the request hyperparameter variable or plain text fields..

```sql
INSERT INTO aws.sagemaker.hyper_parameter_tuning_jobs (
HyperParameterTuningJobName,
HyperParameterTuningJobConfig,
TrainingJobDefinition,
TrainingJobDefinitions,
WarmStartConfig,
Tags,
Autotune,
region
)
SELECT 
'{{ HyperParameterTuningJobName }}' /* required */,
'{{ HyperParameterTuningJobConfig }}' /* required */,
'{{ TrainingJobDefinition }}',
'{{ TrainingJobDefinitions }}',
'{{ WarmStartConfig }}',
'{{ Tags }}',
'{{ Autotune }}',
'{{ region }}'
RETURNING
HyperParameterTuningJobArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hyper_parameter_tuning_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the hyper_parameter_tuning_jobs resource.
    - name: HyperParameterTuningJobName
      value: "{{ HyperParameterTuningJobName }}"
      description: |
        The name of the tuning job. This name is the prefix for the names of all training jobs that this tuning job launches. The name must be unique within the same Amazon Web Services account and Amazon Web Services Region. The name must have 1 to 32 characters. Valid characters are a-z, A-Z, 0-9, and : + = @ _ % - (hyphen). The name is not case sensitive.
    - name: HyperParameterTuningJobConfig
      description: |
        The HyperParameterTuningJobConfig object that describes the tuning job, including the search strategy, the objective metric used to evaluate training jobs, ranges of parameters to search, and resource limits for the tuning job. For more information, see How Hyperparameter Tuning Works.
      value:
        Strategy: "{{ Strategy }}"
        StrategyConfig:
          HyperbandStrategyConfig:
            MinResource: {{ MinResource }}
            MaxResource: {{ MaxResource }}
        HyperParameterTuningJobObjective:
          Type: "{{ Type }}"
          MetricName: "{{ MetricName }}"
        ResourceLimits:
          MaxNumberOfTrainingJobs: {{ MaxNumberOfTrainingJobs }}
          MaxParallelTrainingJobs: {{ MaxParallelTrainingJobs }}
          MaxRuntimeInSeconds: {{ MaxRuntimeInSeconds }}
        ParameterRanges:
          IntegerParameterRanges:
            - Name: "{{ Name }}"
              MinValue: "{{ MinValue }}"
              MaxValue: "{{ MaxValue }}"
              ScalingType: "{{ ScalingType }}"
          ContinuousParameterRanges:
            - Name: "{{ Name }}"
              MinValue: "{{ MinValue }}"
              MaxValue: "{{ MaxValue }}"
              ScalingType: "{{ ScalingType }}"
          CategoricalParameterRanges:
            - Name: "{{ Name }}"
              Values: "{{ Values }}"
          AutoParameters:
            - Name: "{{ Name }}"
              ValueHint: "{{ ValueHint }}"
        TrainingJobEarlyStoppingType: "{{ TrainingJobEarlyStoppingType }}"
        TuningJobCompletionCriteria:
          TargetObjectiveMetricValue: {{ TargetObjectiveMetricValue }}
          BestObjectiveNotImproving:
            MaxNumberOfTrainingJobsNotImproving: {{ MaxNumberOfTrainingJobsNotImproving }}
          ConvergenceDetected:
            CompleteOnConvergence: "{{ CompleteOnConvergence }}"
        RandomSeed: {{ RandomSeed }}
    - name: TrainingJobDefinition
      description: |
        The HyperParameterTrainingJobDefinition object that describes the training jobs that this tuning job launches, including static hyperparameters, input data configuration, output data configuration, resource configuration, and stopping condition.
      value:
        DefinitionName: "{{ DefinitionName }}"
        TuningObjective:
          Type: "{{ Type }}"
          MetricName: "{{ MetricName }}"
        HyperParameterRanges:
          IntegerParameterRanges:
            - Name: "{{ Name }}"
              MinValue: "{{ MinValue }}"
              MaxValue: "{{ MaxValue }}"
              ScalingType: "{{ ScalingType }}"
          ContinuousParameterRanges:
            - Name: "{{ Name }}"
              MinValue: "{{ MinValue }}"
              MaxValue: "{{ MaxValue }}"
              ScalingType: "{{ ScalingType }}"
          CategoricalParameterRanges:
            - Name: "{{ Name }}"
              Values: "{{ Values }}"
          AutoParameters:
            - Name: "{{ Name }}"
              ValueHint: "{{ ValueHint }}"
        StaticHyperParameters: "{{ StaticHyperParameters }}"
        AlgorithmSpecification:
          TrainingImage: "{{ TrainingImage }}"
          TrainingInputMode: "{{ TrainingInputMode }}"
          AlgorithmName: "{{ AlgorithmName }}"
          MetricDefinitions:
            - Name: "{{ Name }}"
              Regex: "{{ Regex }}"
        RoleArn: "{{ RoleArn }}"
        InputDataConfig:
          - ChannelName: "{{ ChannelName }}"
            DataSource:
              S3DataSource:
                S3DataType: "{{ S3DataType }}"
                S3Uri: "{{ S3Uri }}"
                S3DataDistributionType: "{{ S3DataDistributionType }}"
                AttributeNames:
                  - "{{ AttributeNames }}"
                InstanceGroupNames:
                  - "{{ InstanceGroupNames }}"
                ModelAccessConfig:
                  AcceptEula: {{ AcceptEula }}
                HubAccessConfig:
                  HubContentArn: "{{ HubContentArn }}"
              FileSystemDataSource:
                FileSystemId: "{{ FileSystemId }}"
                FileSystemAccessMode: "{{ FileSystemAccessMode }}"
                FileSystemType: "{{ FileSystemType }}"
                DirectoryPath: "{{ DirectoryPath }}"
              DatasetSource:
                DatasetArn: "{{ DatasetArn }}"
            ContentType: "{{ ContentType }}"
            CompressionType: "{{ CompressionType }}"
            RecordWrapperType: "{{ RecordWrapperType }}"
            InputMode: "{{ InputMode }}"
            ShuffleConfig:
              Seed: {{ Seed }}
        VpcConfig:
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
          Subnets:
            - "{{ Subnets }}"
        OutputDataConfig:
          KmsKeyId: "{{ KmsKeyId }}"
          S3OutputPath: "{{ S3OutputPath }}"
          CompressionType: "{{ CompressionType }}"
        ResourceConfig:
          InstanceType: "{{ InstanceType }}"
          InstanceCount: {{ InstanceCount }}
          VolumeSizeInGB: {{ VolumeSizeInGB }}
          VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
          KeepAlivePeriodInSeconds: {{ KeepAlivePeriodInSeconds }}
          InstanceGroups:
            - InstanceType: "{{ InstanceType }}"
              InstanceCount: {{ InstanceCount }}
              InstanceGroupName: "{{ InstanceGroupName }}"
          TrainingPlanArn: "{{ TrainingPlanArn }}"
          InstancePlacementConfig:
            EnableMultipleJobs: {{ EnableMultipleJobs }}
            PlacementSpecifications:
              - UltraServerId: "{{ UltraServerId }}"
                InstanceCount: {{ InstanceCount }}
        HyperParameterTuningResourceConfig:
          InstanceType: "{{ InstanceType }}"
          InstanceCount: {{ InstanceCount }}
          VolumeSizeInGB: {{ VolumeSizeInGB }}
          VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
          AllocationStrategy: "{{ AllocationStrategy }}"
          InstanceConfigs:
            - InstanceType: "{{ InstanceType }}"
              InstanceCount: {{ InstanceCount }}
              VolumeSizeInGB: {{ VolumeSizeInGB }}
        StoppingCondition:
          MaxRuntimeInSeconds: {{ MaxRuntimeInSeconds }}
          MaxWaitTimeInSeconds: {{ MaxWaitTimeInSeconds }}
          MaxPendingTimeInSeconds: {{ MaxPendingTimeInSeconds }}
        EnableNetworkIsolation: {{ EnableNetworkIsolation }}
        EnableInterContainerTrafficEncryption: {{ EnableInterContainerTrafficEncryption }}
        EnableManagedSpotTraining: {{ EnableManagedSpotTraining }}
        CheckpointConfig:
          S3Uri: "{{ S3Uri }}"
          LocalPath: "{{ LocalPath }}"
        RetryStrategy:
          MaximumRetryAttempts: {{ MaximumRetryAttempts }}
        Environment: "{{ Environment }}"
    - name: TrainingJobDefinitions
      description: |
        A list of the HyperParameterTrainingJobDefinition objects launched for this tuning job.
      value:
        - DefinitionName: "{{ DefinitionName }}"
          TuningObjective:
            Type: "{{ Type }}"
            MetricName: "{{ MetricName }}"
          HyperParameterRanges:
            IntegerParameterRanges:
              - Name: "{{ Name }}"
                MinValue: "{{ MinValue }}"
                MaxValue: "{{ MaxValue }}"
                ScalingType: "{{ ScalingType }}"
            ContinuousParameterRanges:
              - Name: "{{ Name }}"
                MinValue: "{{ MinValue }}"
                MaxValue: "{{ MaxValue }}"
                ScalingType: "{{ ScalingType }}"
            CategoricalParameterRanges:
              - Name: "{{ Name }}"
                Values: "{{ Values }}"
            AutoParameters:
              - Name: "{{ Name }}"
                ValueHint: "{{ ValueHint }}"
          StaticHyperParameters: "{{ StaticHyperParameters }}"
          AlgorithmSpecification:
            TrainingImage: "{{ TrainingImage }}"
            TrainingInputMode: "{{ TrainingInputMode }}"
            AlgorithmName: "{{ AlgorithmName }}"
            MetricDefinitions:
              - Name: "{{ Name }}"
                Regex: "{{ Regex }}"
          RoleArn: "{{ RoleArn }}"
          InputDataConfig: "{{ InputDataConfig }}"
          VpcConfig:
            SecurityGroupIds:
              - "{{ SecurityGroupIds }}"
            Subnets:
              - "{{ Subnets }}"
          OutputDataConfig:
            KmsKeyId: "{{ KmsKeyId }}"
            S3OutputPath: "{{ S3OutputPath }}"
            CompressionType: "{{ CompressionType }}"
          ResourceConfig:
            InstanceType: "{{ InstanceType }}"
            InstanceCount: {{ InstanceCount }}
            VolumeSizeInGB: {{ VolumeSizeInGB }}
            VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
            KeepAlivePeriodInSeconds: {{ KeepAlivePeriodInSeconds }}
            InstanceGroups:
              - InstanceType: "{{ InstanceType }}"
                InstanceCount: {{ InstanceCount }}
                InstanceGroupName: "{{ InstanceGroupName }}"
            TrainingPlanArn: "{{ TrainingPlanArn }}"
            InstancePlacementConfig:
              EnableMultipleJobs: {{ EnableMultipleJobs }}
              PlacementSpecifications:
                - UltraServerId: "{{ UltraServerId }}"
                  InstanceCount: {{ InstanceCount }}
          HyperParameterTuningResourceConfig:
            InstanceType: "{{ InstanceType }}"
            InstanceCount: {{ InstanceCount }}
            VolumeSizeInGB: {{ VolumeSizeInGB }}
            VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
            AllocationStrategy: "{{ AllocationStrategy }}"
            InstanceConfigs:
              - InstanceType: "{{ InstanceType }}"
                InstanceCount: {{ InstanceCount }}
                VolumeSizeInGB: {{ VolumeSizeInGB }}
          StoppingCondition:
            MaxRuntimeInSeconds: {{ MaxRuntimeInSeconds }}
            MaxWaitTimeInSeconds: {{ MaxWaitTimeInSeconds }}
            MaxPendingTimeInSeconds: {{ MaxPendingTimeInSeconds }}
          EnableNetworkIsolation: {{ EnableNetworkIsolation }}
          EnableInterContainerTrafficEncryption: {{ EnableInterContainerTrafficEncryption }}
          EnableManagedSpotTraining: {{ EnableManagedSpotTraining }}
          CheckpointConfig:
            S3Uri: "{{ S3Uri }}"
            LocalPath: "{{ LocalPath }}"
          RetryStrategy:
            MaximumRetryAttempts: {{ MaximumRetryAttempts }}
          Environment: "{{ Environment }}"
    - name: WarmStartConfig
      description: |
        Specifies the configuration for starting the hyperparameter tuning job using one or more previous tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job. All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric. If you specify IDENTICAL_DATA_AND_ALGORITHM as the WarmStartType value for the warm start configuration, the training job that performs the best in the new tuning job is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job. All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.
      value:
        ParentHyperParameterTuningJobs:
          - HyperParameterTuningJobName: "{{ HyperParameterTuningJobName }}"
        WarmStartType: "{{ WarmStartType }}"
    - name: Tags
      description: |
        An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources. Tags that you specify for the tuning job are also added to all training jobs that the tuning job launches.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: Autotune
      description: |
        Configures SageMaker Automatic model tuning (AMT) to automatically find optimal parameters for the following fields: ParameterRanges: The names and ranges of parameters that a hyperparameter tuning job can optimize. ResourceLimits: The maximum resources that can be used for a training job. These resources include the maximum number of training jobs, the maximum runtime of a tuning job, and the maximum number of training jobs to run at the same time. TrainingJobEarlyStoppingType: A flag that specifies whether or not to use early stopping for training jobs launched by a hyperparameter tuning job. RetryStrategy: The number of times to retry a training job. Strategy: Specifies how hyperparameter tuning chooses the combinations of hyperparameter values to use for the training jobs that it launches. ConvergenceDetected: A flag to indicate that Automatic model tuning (AMT) has detected model convergence.
      value:
        Mode: "{{ Mode }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_hyper_parameter_tuning_job"
    values={[
        { label: 'delete_hyper_parameter_tuning_job', value: 'delete_hyper_parameter_tuning_job' }
    ]}
>
<TabItem value="delete_hyper_parameter_tuning_job">

Deletes a hyperparameter tuning job. The DeleteHyperParameterTuningJob API deletes only the tuning job entry that was created in SageMaker when you called the CreateHyperParameterTuningJob API. It does not delete training jobs, artifacts, or the IAM role that you specified when creating the model.

```sql
DELETE FROM aws.sagemaker.hyper_parameter_tuning_jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_hyper_parameter_tuning_job"
    values={[
        { label: 'stop_hyper_parameter_tuning_job', value: 'stop_hyper_parameter_tuning_job' }
    ]}
>
<TabItem value="stop_hyper_parameter_tuning_job">

Stops a running hyperparameter tuning job and all running training jobs that the tuning job launched. All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the tuning job moves to the Stopped state, it releases all reserved resources for the tuning job.

```sql
EXEC aws.sagemaker.hyper_parameter_tuning_jobs.stop_hyper_parameter_tuning_job 
@region='{{ region }}' --required 
@@json=
'{
"HyperParameterTuningJobName": "{{ HyperParameterTuningJobName }}"
}'
;
```
</TabItem>
</Tabs>
