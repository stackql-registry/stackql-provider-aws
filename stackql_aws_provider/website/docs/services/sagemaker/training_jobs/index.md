--- 
title: training_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - training_jobs
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

Creates, updates, deletes, gets or lists a <code>training_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="training_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.training_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_training_job"
    values={[
        { label: 'describe_training_job', value: 'describe_training_job' },
        { label: 'list_training_jobs', value: 'list_training_jobs' }
    ]}
>
<TabItem value="describe_training_job">

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
    <td><CopyableCode code="algorithm_specification" /></td>
    <td><code>object</code></td>
    <td>Information about the algorithm used for training, and algorithm metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an AutoML job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:automl-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="billable_time_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The billable time in seconds. Billable time refers to the absolute wall-clock time. Multiply BillableTimeInSeconds by the number of instances (InstanceCount) in your training cluster to get the total compute time SageMaker bills you if you run distributed training. The formula is as follows: BillableTimeInSeconds * InstanceCount . You can calculate the savings from using managed spot training using the formula (1 - BillableTimeInSeconds / TrainingTimeInSeconds) * 100. For example, if BillableTimeInSeconds is 100 and TrainingTimeInSeconds is 500, the savings is 80%.</td>
</tr>
<tr>
    <td><CopyableCode code="billable_token_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The billable token count for eligible serverless training jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="checkpoint_config" /></td>
    <td><code>object</code></td>
    <td>Contains information about the output location for managed spot training checkpoint data.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the training job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="debug_hook_config" /></td>
    <td><code>object</code></td>
    <td>Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and storage paths. To learn more about how to configure the DebugHookConfig parameter, see Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job.</td>
</tr>
<tr>
    <td><CopyableCode code="debug_rule_configurations" /></td>
    <td><code>array</code></td>
    <td>Configuration information for Amazon SageMaker Debugger rules for debugging output tensors.</td>
</tr>
<tr>
    <td><CopyableCode code="debug_rule_evaluation_statuses" /></td>
    <td><code>array</code></td>
    <td>Evaluation status of Amazon SageMaker Debugger rules for debugging on a training job.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_inter_container_traffic_encryption" /></td>
    <td><code>boolean</code></td>
    <td>To encrypt all communications between ML compute instances in distributed training, choose True. Encryption provides greater security for distributed training, but training might take longer. How long it takes depends on the amount of communication between compute instances, especially if you use a deep learning algorithms in distributed training.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_managed_spot_training" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean indicating whether managed spot training is enabled (True) or not (False).</td>
</tr>
<tr>
    <td><CopyableCode code="enable_network_isolation" /></td>
    <td><code>boolean</code></td>
    <td>If you want to allow inbound or outbound network calls, except for calls between peers within a training cluster for distributed training, choose True. If you enable network isolation for training jobs that are configured to use a VPC, SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>The environment variables to set in the Docker container. Do not include any security-sensitive information including account access IDs, secrets, or tokens in any environment fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by security-sensitive information included in the request environment variable or plain text fields.</td>
</tr>
<tr>
    <td><CopyableCode code="experiment_config" /></td>
    <td><code>object</code></td>
    <td>Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs: CreateProcessingJob CreateTrainingJob CreateTransformJob</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If the training job failed, the reason it failed.</td>
</tr>
<tr>
    <td><CopyableCode code="final_metric_data_list" /></td>
    <td><code>array</code></td>
    <td>A collection of MetricData objects that specify the names, values, and dates and times that the training algorithm emitted to Amazon CloudWatch.</td>
</tr>
<tr>
    <td><CopyableCode code="hyper_parameters" /></td>
    <td><code>object</code></td>
    <td>Algorithm-specific parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_check_config" /></td>
    <td><code>object</code></td>
    <td>Contains information about the infrastructure health check configuration for the training job.</td>
</tr>
<tr>
    <td><CopyableCode code="input_data_config" /></td>
    <td><code>array</code></td>
    <td>An array of Channel objects that describes each data input channel.</td>
</tr>
<tr>
    <td><CopyableCode code="labeling_job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the SageMaker Ground Truth labeling job that created the transform or training job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:labeling-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the status of the training job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="mlflow_config" /></td>
    <td><code>object</code></td>
    <td>The MLflow configuration using SageMaker managed MLflow.</td>
</tr>
<tr>
    <td><CopyableCode code="mlflow_details" /></td>
    <td><code>object</code></td>
    <td>The MLflow details of this job.</td>
</tr>
<tr>
    <td><CopyableCode code="model_artifacts" /></td>
    <td><code>object</code></td>
    <td>Information about the Amazon S3 location that is configured for storing model artifacts.</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_config" /></td>
    <td><code>object</code></td>
    <td>The configuration for the model package.</td>
</tr>
<tr>
    <td><CopyableCode code="output_data_config" /></td>
    <td><code>object</code></td>
    <td>The S3 path where model artifacts that you configured when creating the job are stored. SageMaker creates subfolders for model artifacts.</td>
</tr>
<tr>
    <td><CopyableCode code="output_model_package_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the output model package containing model weights or checkpoints. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:model-package/&#91;\S&#93;&#123;1,2048&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profiler_config" /></td>
    <td><code>object</code></td>
    <td>Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and storage paths.</td>
</tr>
<tr>
    <td><CopyableCode code="profiler_rule_configurations" /></td>
    <td><code>array</code></td>
    <td>Configuration information for Amazon SageMaker Debugger rules for profiling system and framework metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="profiler_rule_evaluation_statuses" /></td>
    <td><code>array</code></td>
    <td>Evaluation status of Amazon SageMaker Debugger rules for profiling on a training job.</td>
</tr>
<tr>
    <td><CopyableCode code="profiling_status" /></td>
    <td><code>string</code></td>
    <td>Profiling status of a training job. (Enabled, Disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="progress_info" /></td>
    <td><code>object</code></td>
    <td>The Serverless training job progress information.</td>
</tr>
<tr>
    <td><CopyableCode code="remote_debug_config" /></td>
    <td><code>object</code></td>
    <td>Configuration for remote debugging. To learn more about the remote debugging functionality of SageMaker, see Access a training container through Amazon Web Services Systems Manager (SSM) for remote debugging.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_config" /></td>
    <td><code>object</code></td>
    <td>Resources, including ML compute instances and ML storage volumes, that are configured for model training.</td>
</tr>
<tr>
    <td><CopyableCode code="retry_strategy" /></td>
    <td><code>object</code></td>
    <td>The number of times to retry the job when the job fails due to an InternalServerError.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Identity and Access Management (IAM) role configured for the training job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_status" /></td>
    <td><code>string</code></td>
    <td>Provides detailed information about the state of the training job. For detailed information on the secondary status of the training job, see StatusMessage under SecondaryStatusTransition. SageMaker provides primary statuses and secondary statuses that apply to each of them: InProgress Starting - Starting the training job. Pending - The training job is waiting for compute capacity or compute resource provision. Downloading - An optional stage for algorithms that support File training input mode. It indicates that data is being downloaded to the ML storage volumes. Training - Training is in progress. Interrupted - The job stopped because the managed spot training instances were interrupted. Uploading - Training is complete and the model artifacts are being uploaded to the S3 location. Completed Completed - The training job has completed. Failed Failed - The training job has failed. The reason for the failure is returned in the FailureReason field of DescribeTrainingJobResponse. Stopped MaxRuntimeExceeded - The job stopped because it exceeded the maximum allowed runtime. MaxWaitTimeExceeded - The job stopped because it exceeded the maximum allowed wait time. Stopped - The training job has stopped. Stopping Stopping - Stopping the training job. Valid values for SecondaryStatus are subject to change. We no longer support the following secondary statuses: LaunchingMLInstances PreparingTraining DownloadingTrainingImage (Starting, LaunchingMLInstances, PreparingTrainingStack, Downloading, DownloadingTrainingImage, Training, Uploading, Stopping, Stopped, MaxRuntimeExceeded, Completed, Failed, Interrupted, MaxWaitTimeExceeded, Updating, Restarting, Pending)</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_status_transitions" /></td>
    <td><code>array</code></td>
    <td>A history of all of the secondary statuses that the training job has transitioned through.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_job_config" /></td>
    <td><code>object</code></td>
    <td>The configuration for serverless training jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="stopping_condition" /></td>
    <td><code>object</code></td>
    <td>Specifies a limit to how long a job can run. When the job reaches the time limit, SageMaker ends the job. Use this API to cap costs. To stop a training job, SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with CreateModel. The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</td>
</tr>
<tr>
    <td><CopyableCode code="tensor_board_output_config" /></td>
    <td><code>object</code></td>
    <td>Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.</td>
</tr>
<tr>
    <td><CopyableCode code="training_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the time when the training job ends on training instances. You are billed for the time interval between the value of TrainingStartTime and this time. For successful jobs and stopped jobs, this is the time after model artifacts are uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</td>
</tr>
<tr>
    <td><CopyableCode code="training_job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the training job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:training-job/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="training_job_name" /></td>
    <td><code>string</code></td>
    <td>Name of the model training job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="training_job_status" /></td>
    <td><code>string</code></td>
    <td>The status of the training job. SageMaker provides the following training job statuses: InProgress - The training is in progress. Completed - The training job has completed. Failed - The training job has failed. To see the reason for the failure, see the FailureReason field in the response to a DescribeTrainingJobResponse call. Stopping - The training job is stopping. Stopped - The training job has stopped. For more detailed information, see SecondaryStatus. (InProgress, Completed, Failed, Stopping, Stopped, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="training_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the time when the training job starts on training instances. You are billed for the time interval between this time and the value of TrainingEndTime. The start time in CloudWatch Logs might be later than this time. The difference is due to the time it takes to download the training data and to the size of the training container.</td>
</tr>
<tr>
    <td><CopyableCode code="training_time_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The training time in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="tuning_job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the training job was launched by a hyperparameter tuning job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:hyper-parameter-tuning-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
    <td><code>object</code></td>
    <td>Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="warm_pool_status" /></td>
    <td><code>object</code></td>
    <td>The status of the warm pool associated with the training job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_training_jobs">

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
    <td>A timestamp that shows when the training job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the training job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_status" /></td>
    <td><code>string</code></td>
    <td>The secondary status of the training job. (Starting, LaunchingMLInstances, PreparingTrainingStack, Downloading, DownloadingTrainingImage, Training, Uploading, Stopping, Stopped, MaxRuntimeExceeded, Completed, Failed, Interrupted, MaxWaitTimeExceeded, Updating, Restarting, Pending)</td>
</tr>
<tr>
    <td><CopyableCode code="training_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the training job ended. This field is set only if the training job has one of the terminal statuses (Completed, Failed, or Stopped).</td>
</tr>
<tr>
    <td><CopyableCode code="training_job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the training job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:training-job/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="training_job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the training job that you want a summary for. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="training_job_status" /></td>
    <td><code>string</code></td>
    <td>The status of the training job. (InProgress, Completed, Failed, Stopping, Stopped, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="training_plan_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN); of the training plan associated with this training job. For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan . (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:training-plan/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="warm_pool_status" /></td>
    <td><code>object</code></td>
    <td>The status of the warm pool associated with the training job.</td>
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
    <td><a href="#describe_training_job"><CopyableCode code="describe_training_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a training job. Some of the attributes below only appear if the training job successfully starts. If the training job fails, TrainingJobStatus is Failed and, depending on the FailureReason, attributes like TrainingStartTime, TrainingTimeInSeconds, TrainingEndTime, and BillableTimeInSeconds may not be present in the response.</td>
</tr>
<tr>
    <td><a href="#list_training_jobs"><CopyableCode code="list_training_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists training jobs. When StatusEquals and MaxResults are set at the same time, the MaxResults number of training jobs are first retrieved ignoring the StatusEquals parameter and then they are filtered by the StatusEquals parameter, which is returned as a response. For example, if ListTrainingJobs is invoked with the following parameters: &#123; ... MaxResults: 100, StatusEquals: InProgress ... &#125; First, 100 trainings jobs with any status, including those other than InProgress, are selected (sorted according to the creation time, from the most current to the oldest). Next, those with a status of InProgress are returned. You can quickly test the API using the following Amazon Web Services CLI code. aws sagemaker list-training-jobs --max-results 100 --status-equals InProgress</td>
</tr>
<tr>
    <td><a href="#create_training_job"><CopyableCode code="create_training_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrainingJobName"><code>TrainingJobName</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-OutputDataConfig"><code>OutputDataConfig</code></a></td>
    <td></td>
    <td>Starts a model training job. After training completes, SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify. If you choose to host your model using SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a machine learning service other than SageMaker, provided that you know how to use them for inference. In the request body, you provide the following: AlgorithmSpecification - Identifies the training algorithm to use. HyperParameters - Specify these algorithm-specific parameters to enable the estimation of model parameters during training. Hyperparameters can be tuned to optimize this learning process. For a list of hyperparameters for each training algorithm provided by SageMaker, see Algorithms. Do not include any security-sensitive information including account access IDs, secrets, or tokens in any hyperparameter fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by security-sensitive information included in the request hyperparameter variable or plain text fields. InputDataConfig - Describes the input required by the training job and the Amazon S3, EFS, or FSx location where it is stored. OutputDataConfig - Identifies the Amazon S3 bucket where you want SageMaker to save the results of model training. ResourceConfig - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance. EnableManagedSpotTraining - Optimize the cost of training machine learning models by up to 80% by using Amazon EC2 Spot instances. For more information, see Managed Spot Training. RoleArn - The Amazon Resource Name (ARN) that SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that SageMaker can successfully complete model training. StoppingCondition - To help cap training costs, use MaxRuntimeInSeconds to set a time limit for training. Use MaxWaitTimeInSeconds to specify how long a managed spot training job has to complete. Environment - The environment variables to set in the Docker container. Do not include any security-sensitive information including account access IDs, secrets, or tokens in any environment fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by security-sensitive information included in the request environment variable or plain text fields. RetryStrategy - The number of times to retry the job when the job fails due to an InternalServerError. For more information about SageMaker, see How It Works.</td>
</tr>
<tr>
    <td><a href="#update_training_job"><CopyableCode code="update_training_job" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrainingJobName"><code>TrainingJobName</code></a></td>
    <td></td>
    <td>Update a model training job to request a new Debugger profiling configuration or to change warm pool retention length.</td>
</tr>
<tr>
    <td><a href="#delete_training_job"><CopyableCode code="delete_training_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a training job. After SageMaker deletes a training job, all of the metadata for the training job is lost. You can delete only training jobs that are in a terminal state (Stopped, Failed, or Completed) and don't retain an Available managed warm pool. You cannot delete a job that is in the InProgress or Stopping state. After deleting the job, you can reuse its name to create another training job.</td>
</tr>
<tr>
    <td><a href="#stop_training_job"><CopyableCode code="stop_training_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrainingJobName"><code>TrainingJobName</code></a></td>
    <td></td>
    <td>Stops a training job. To stop a job, SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of the training is not lost. When it receives a StopTrainingJob request, SageMaker changes the status of the job to Stopping. After SageMaker stops the job, it sets the status to Stopped.</td>
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
    defaultValue="describe_training_job"
    values={[
        { label: 'describe_training_job', value: 'describe_training_job' },
        { label: 'list_training_jobs', value: 'list_training_jobs' }
    ]}
>
<TabItem value="describe_training_job">

Returns information about a training job. Some of the attributes below only appear if the training job successfully starts. If the training job fails, TrainingJobStatus is Failed and, depending on the FailureReason, attributes like TrainingStartTime, TrainingTimeInSeconds, TrainingEndTime, and BillableTimeInSeconds may not be present in the response.

```sql
SELECT
algorithm_specification,
auto_ml_job_arn,
billable_time_in_seconds,
billable_token_count,
checkpoint_config,
creation_time,
debug_hook_config,
debug_rule_configurations,
debug_rule_evaluation_statuses,
enable_inter_container_traffic_encryption,
enable_managed_spot_training,
enable_network_isolation,
environment,
experiment_config,
failure_reason,
final_metric_data_list,
hyper_parameters,
infra_check_config,
input_data_config,
labeling_job_arn,
last_modified_time,
mlflow_config,
mlflow_details,
model_artifacts,
model_package_config,
output_data_config,
output_model_package_arn,
profiler_config,
profiler_rule_configurations,
profiler_rule_evaluation_statuses,
profiling_status,
progress_info,
remote_debug_config,
resource_config,
retry_strategy,
role_arn,
secondary_status,
secondary_status_transitions,
serverless_job_config,
stopping_condition,
tensor_board_output_config,
training_end_time,
training_job_arn,
training_job_name,
training_job_status,
training_start_time,
training_time_in_seconds,
tuning_job_arn,
vpc_config,
warm_pool_status
FROM aws.sagemaker.training_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_training_jobs">

Lists training jobs. When StatusEquals and MaxResults are set at the same time, the MaxResults number of training jobs are first retrieved ignoring the StatusEquals parameter and then they are filtered by the StatusEquals parameter, which is returned as a response. For example, if ListTrainingJobs is invoked with the following parameters: &#123; ... MaxResults: 100, StatusEquals: InProgress ... &#125; First, 100 trainings jobs with any status, including those other than InProgress, are selected (sorted according to the creation time, from the most current to the oldest). Next, those with a status of InProgress are returned. You can quickly test the API using the following Amazon Web Services CLI code. aws sagemaker list-training-jobs --max-results 100 --status-equals InProgress

```sql
SELECT
creation_time,
last_modified_time,
secondary_status,
training_end_time,
training_job_arn,
training_job_name,
training_job_status,
training_plan_arn,
warm_pool_status
FROM aws.sagemaker.training_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_training_job"
    values={[
        { label: 'create_training_job', value: 'create_training_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_training_job">

Starts a model training job. After training completes, SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify. If you choose to host your model using SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a machine learning service other than SageMaker, provided that you know how to use them for inference. In the request body, you provide the following: AlgorithmSpecification - Identifies the training algorithm to use. HyperParameters - Specify these algorithm-specific parameters to enable the estimation of model parameters during training. Hyperparameters can be tuned to optimize this learning process. For a list of hyperparameters for each training algorithm provided by SageMaker, see Algorithms. Do not include any security-sensitive information including account access IDs, secrets, or tokens in any hyperparameter fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by security-sensitive information included in the request hyperparameter variable or plain text fields. InputDataConfig - Describes the input required by the training job and the Amazon S3, EFS, or FSx location where it is stored. OutputDataConfig - Identifies the Amazon S3 bucket where you want SageMaker to save the results of model training. ResourceConfig - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance. EnableManagedSpotTraining - Optimize the cost of training machine learning models by up to 80% by using Amazon EC2 Spot instances. For more information, see Managed Spot Training. RoleArn - The Amazon Resource Name (ARN) that SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that SageMaker can successfully complete model training. StoppingCondition - To help cap training costs, use MaxRuntimeInSeconds to set a time limit for training. Use MaxWaitTimeInSeconds to specify how long a managed spot training job has to complete. Environment - The environment variables to set in the Docker container. Do not include any security-sensitive information including account access IDs, secrets, or tokens in any environment fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by security-sensitive information included in the request environment variable or plain text fields. RetryStrategy - The number of times to retry the job when the job fails due to an InternalServerError. For more information about SageMaker, see How It Works.

```sql
INSERT INTO aws.sagemaker.training_jobs (
TrainingJobName,
HyperParameters,
AlgorithmSpecification,
RoleArn,
InputDataConfig,
OutputDataConfig,
ResourceConfig,
VpcConfig,
StoppingCondition,
Tags,
EnableNetworkIsolation,
EnableInterContainerTrafficEncryption,
EnableManagedSpotTraining,
CheckpointConfig,
DebugHookConfig,
DebugRuleConfigurations,
TensorBoardOutputConfig,
ExperimentConfig,
ProfilerConfig,
ProfilerRuleConfigurations,
Environment,
RetryStrategy,
RemoteDebugConfig,
InfraCheckConfig,
SessionChainingConfig,
ServerlessJobConfig,
MlflowConfig,
ModelPackageConfig,
region
)
SELECT 
'{{ TrainingJobName }}' /* required */,
'{{ HyperParameters }}',
'{{ AlgorithmSpecification }}',
'{{ RoleArn }}' /* required */,
'{{ InputDataConfig }}',
'{{ OutputDataConfig }}' /* required */,
'{{ ResourceConfig }}',
'{{ VpcConfig }}',
'{{ StoppingCondition }}',
'{{ Tags }}',
{{ EnableNetworkIsolation }},
{{ EnableInterContainerTrafficEncryption }},
{{ EnableManagedSpotTraining }},
'{{ CheckpointConfig }}',
'{{ DebugHookConfig }}',
'{{ DebugRuleConfigurations }}',
'{{ TensorBoardOutputConfig }}',
'{{ ExperimentConfig }}',
'{{ ProfilerConfig }}',
'{{ ProfilerRuleConfigurations }}',
'{{ Environment }}',
'{{ RetryStrategy }}',
'{{ RemoteDebugConfig }}',
'{{ InfraCheckConfig }}',
'{{ SessionChainingConfig }}',
'{{ ServerlessJobConfig }}',
'{{ MlflowConfig }}',
'{{ ModelPackageConfig }}',
'{{ region }}'
RETURNING
training_job_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: training_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the training_jobs resource.
    - name: TrainingJobName
      value: "{{ TrainingJobName }}"
      description: |
        The name of the training job. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account.
    - name: HyperParameters
      value: "{{ HyperParameters }}"
      description: |
        Algorithm-specific parameters that influence the quality of the model. You set hyperparameters before you start the learning process. For a list of hyperparameters for each training algorithm provided by SageMaker, see Algorithms. You can specify a maximum of 100 hyperparameters. Each hyperparameter is a key-value pair. Each key and value is limited to 256 characters, as specified by the Length Constraint. Do not include any security-sensitive information including account access IDs, secrets, or tokens in any hyperparameter fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by any security-sensitive information included in the request hyperparameter variable or plain text fields.
    - name: AlgorithmSpecification
      description: |
        The registry path of the Docker image that contains the training algorithm and algorithm-specific metadata, including the input mode. For more information about algorithms provided by SageMaker, see Algorithms. For information about providing your own algorithms, see Using Your Own Algorithms with Amazon SageMaker.
      value:
        TrainingImage: "{{ TrainingImage }}"
        AlgorithmName: "{{ AlgorithmName }}"
        TrainingInputMode: "{{ TrainingInputMode }}"
        MetricDefinitions:
          - Name: "{{ Name }}"
            Regex: "{{ Regex }}"
        EnableSageMakerMetricsTimeSeries: {{ EnableSageMakerMetricsTimeSeries }}
        ContainerEntrypoint:
          - "{{ ContainerEntrypoint }}"
        ContainerArguments:
          - "{{ ContainerArguments }}"
        TrainingImageConfig:
          TrainingRepositoryAccessMode: "{{ TrainingRepositoryAccessMode }}"
          TrainingRepositoryAuthConfig:
            TrainingRepositoryCredentialsProviderArn: "{{ TrainingRepositoryCredentialsProviderArn }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM role that SageMaker can assume to perform tasks on your behalf. During model training, SageMaker needs your permission to read input data from an S3 bucket, download a Docker image that contains training code, write model artifacts to an S3 bucket, write logs to Amazon CloudWatch Logs, and publish metrics to Amazon CloudWatch. You grant permissions for all of these tasks to an IAM role. For more information, see SageMaker Roles. To be able to pass this role to SageMaker, the caller of this API must have the iam:PassRole permission.
    - name: InputDataConfig
      description: |
        An array of Channel objects. Each channel is a named input source. InputDataConfig describes the input data and its location. Algorithms can accept input data from one or more channels. For example, an algorithm might have two channels of input data, training_data and validation_data. The configuration for each channel provides the S3, EFS, or FSx location where the input data is stored. It also provides information about the stored data: the MIME type, compression method, and whether the data is wrapped in RecordIO format. Depending on the input mode that the algorithm supports, SageMaker either copies input data files from an S3 bucket to a local directory in the Docker container, or makes it available as input streams. For example, if you specify an EFS location, input data files are available as input streams. They do not need to be downloaded. Your input must be in the same Amazon Web Services region as your training job.
      value:
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
    - name: OutputDataConfig
      description: |
        Specifies the path to the S3 location where you want to store model artifacts. SageMaker creates subfolders for the artifacts.
      value:
        KmsKeyId: "{{ KmsKeyId }}"
        S3OutputPath: "{{ S3OutputPath }}"
        CompressionType: "{{ CompressionType }}"
    - name: ResourceConfig
      description: |
        The resources, including the ML compute instances and ML storage volumes, to use for model training. ML storage volumes store model artifacts and incremental states. Training algorithms might also use ML storage volumes for scratch space. If you want SageMaker to use the ML storage volume to store the training data, choose File as the TrainingInputMode in the algorithm specification. For distributed training algorithms, specify an instance count greater than 1.
      value:
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
    - name: VpcConfig
      description: |
        Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC.
      value:
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        Subnets:
          - "{{ Subnets }}"
    - name: StoppingCondition
      description: |
        Specifies a limit to how long a job can run. When the job reaches the time limit, SageMaker ends the job. Use this API to cap costs. To stop a training job, SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with CreateModel. The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.
      value:
        MaxRuntimeInSeconds: {{ MaxRuntimeInSeconds }}
        MaxWaitTimeInSeconds: {{ MaxWaitTimeInSeconds }}
        MaxPendingTimeInSeconds: {{ MaxPendingTimeInSeconds }}
    - name: Tags
      description: |
        An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources. Do not include any security-sensitive information including account access IDs, secrets, or tokens in any tags. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by any security-sensitive information included in the request tag variable or plain text fields.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: EnableNetworkIsolation
      value: {{ EnableNetworkIsolation }}
      description: |
        Isolates the training container. No inbound or outbound network calls can be made, except for calls between peers within a training cluster for distributed training. If you enable network isolation for training jobs that are configured to use a VPC, SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access.
    - name: EnableInterContainerTrafficEncryption
      value: {{ EnableInterContainerTrafficEncryption }}
      description: |
        To encrypt all communications between ML compute instances in distributed training, choose True. Encryption provides greater security for distributed training, but training might take longer. How long it takes depends on the amount of communication between compute instances, especially if you use a deep learning algorithm in distributed training. For more information, see Protect Communications Between ML Compute Instances in a Distributed Training Job.
    - name: EnableManagedSpotTraining
      value: {{ EnableManagedSpotTraining }}
      description: |
        To train models using managed spot training, choose True. Managed spot training provides a fully managed and scalable infrastructure for training machine learning models. this option is useful when training jobs can be interrupted and when there is flexibility when the training job is run. The complete and intermediate results of jobs are stored in an Amazon S3 bucket, and can be used as a starting point to train models incrementally. Amazon SageMaker provides metrics and logs in CloudWatch. They can be used to see when managed spot training jobs are running, interrupted, resumed, or completed.
    - name: CheckpointConfig
      description: |
        Contains information about the output location for managed spot training checkpoint data.
      value:
        S3Uri: "{{ S3Uri }}"
        LocalPath: "{{ LocalPath }}"
    - name: DebugHookConfig
      description: |
        Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and storage paths. To learn more about how to configure the DebugHookConfig parameter, see Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job.
      value:
        LocalPath: "{{ LocalPath }}"
        S3OutputPath: "{{ S3OutputPath }}"
        HookParameters: "{{ HookParameters }}"
        CollectionConfigurations:
          - CollectionName: "{{ CollectionName }}"
            CollectionParameters: "{{ CollectionParameters }}"
    - name: DebugRuleConfigurations
      description: |
        Configuration information for Amazon SageMaker Debugger rules for debugging output tensors.
      value:
        - RuleConfigurationName: "{{ RuleConfigurationName }}"
          LocalPath: "{{ LocalPath }}"
          S3OutputPath: "{{ S3OutputPath }}"
          RuleEvaluatorImage: "{{ RuleEvaluatorImage }}"
          InstanceType: "{{ InstanceType }}"
          VolumeSizeInGB: {{ VolumeSizeInGB }}
          RuleParameters: "{{ RuleParameters }}"
    - name: TensorBoardOutputConfig
      description: |
        Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.
      value:
        LocalPath: "{{ LocalPath }}"
        S3OutputPath: "{{ S3OutputPath }}"
    - name: ExperimentConfig
      description: |
        Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs: CreateProcessingJob CreateTrainingJob CreateTransformJob
      value:
        ExperimentName: "{{ ExperimentName }}"
        TrialName: "{{ TrialName }}"
        TrialComponentDisplayName: "{{ TrialComponentDisplayName }}"
        RunName: "{{ RunName }}"
    - name: ProfilerConfig
      description: |
        Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and storage paths.
      value:
        S3OutputPath: "{{ S3OutputPath }}"
        ProfilingIntervalInMilliseconds: {{ ProfilingIntervalInMilliseconds }}
        ProfilingParameters: "{{ ProfilingParameters }}"
        DisableProfiler: {{ DisableProfiler }}
    - name: ProfilerRuleConfigurations
      description: |
        Configuration information for Amazon SageMaker Debugger rules for profiling system and framework metrics.
      value:
        - RuleConfigurationName: "{{ RuleConfigurationName }}"
          LocalPath: "{{ LocalPath }}"
          S3OutputPath: "{{ S3OutputPath }}"
          RuleEvaluatorImage: "{{ RuleEvaluatorImage }}"
          InstanceType: "{{ InstanceType }}"
          VolumeSizeInGB: {{ VolumeSizeInGB }}
          RuleParameters: "{{ RuleParameters }}"
    - name: Environment
      value: "{{ Environment }}"
      description: |
        The environment variables to set in the Docker container. Do not include any security-sensitive information including account access IDs, secrets, or tokens in any environment fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by security-sensitive information included in the request environment variable or plain text fields.
    - name: RetryStrategy
      description: |
        The number of times to retry the job when the job fails due to an InternalServerError.
      value:
        MaximumRetryAttempts: {{ MaximumRetryAttempts }}
    - name: RemoteDebugConfig
      description: |
        Configuration for remote debugging. To learn more about the remote debugging functionality of SageMaker, see Access a training container through Amazon Web Services Systems Manager (SSM) for remote debugging.
      value:
        EnableRemoteDebug: {{ EnableRemoteDebug }}
    - name: InfraCheckConfig
      description: |
        Contains information about the infrastructure health check configuration for the training job.
      value:
        EnableInfraCheck: {{ EnableInfraCheck }}
    - name: SessionChainingConfig
      description: |
        Contains information about attribute-based access control (ABAC) for the training job.
      value:
        EnableSessionTagChaining: {{ EnableSessionTagChaining }}
    - name: ServerlessJobConfig
      description: |
        The configuration for serverless training jobs.
      value:
        BaseModelArn: "{{ BaseModelArn }}"
        AcceptEula: {{ AcceptEula }}
        JobType: "{{ JobType }}"
        CustomizationTechnique: "{{ CustomizationTechnique }}"
        Peft: "{{ Peft }}"
        EvaluationType: "{{ EvaluationType }}"
        EvaluatorArn: "{{ EvaluatorArn }}"
        SequenceLength: "{{ SequenceLength }}"
    - name: MlflowConfig
      description: |
        The MLflow configuration using SageMaker managed MLflow.
      value:
        MlflowResourceArn: "{{ MlflowResourceArn }}"
        MlflowExperimentName: "{{ MlflowExperimentName }}"
        MlflowRunName: "{{ MlflowRunName }}"
    - name: ModelPackageConfig
      description: |
        The configuration for the model package.
      value:
        ModelPackageGroupArn: "{{ ModelPackageGroupArn }}"
        SourceModelPackageArn: "{{ SourceModelPackageArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_training_job"
    values={[
        { label: 'update_training_job', value: 'update_training_job' }
    ]}
>
<TabItem value="update_training_job">

Update a model training job to request a new Debugger profiling configuration or to change warm pool retention length.

```sql
UPDATE aws.sagemaker.training_jobs
SET 
TrainingJobName = '{{ TrainingJobName }}',
ProfilerConfig = '{{ ProfilerConfig }}',
ProfilerRuleConfigurations = '{{ ProfilerRuleConfigurations }}',
ResourceConfig = '{{ ResourceConfig }}',
RemoteDebugConfig = '{{ RemoteDebugConfig }}'
WHERE 
region = '{{ region }}' --required
AND TrainingJobName = '{{ TrainingJobName }}' --required
RETURNING
training_job_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_training_job"
    values={[
        { label: 'delete_training_job', value: 'delete_training_job' }
    ]}
>
<TabItem value="delete_training_job">

Deletes a training job. After SageMaker deletes a training job, all of the metadata for the training job is lost. You can delete only training jobs that are in a terminal state (Stopped, Failed, or Completed) and don't retain an Available managed warm pool. You cannot delete a job that is in the InProgress or Stopping state. After deleting the job, you can reuse its name to create another training job.

```sql
DELETE FROM aws.sagemaker.training_jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_training_job"
    values={[
        { label: 'stop_training_job', value: 'stop_training_job' }
    ]}
>
<TabItem value="stop_training_job">

Stops a training job. To stop a job, SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of the training is not lost. When it receives a StopTrainingJob request, SageMaker changes the status of the job to Stopping. After SageMaker stops the job, it sets the status to Stopped.

```sql
EXEC aws.sagemaker.training_jobs.stop_training_job 
@region='{{ region }}' --required 
@@json=
'{
"TrainingJobName": "{{ TrainingJobName }}"
}'
;
```
</TabItem>
</Tabs>
