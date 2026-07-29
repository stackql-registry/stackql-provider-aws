--- 
title: auto_ml_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - auto_ml_jobs
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

Creates, updates, deletes, gets or lists an <code>auto_ml_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auto_ml_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.auto_ml_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_auto_ml_job"
    values={[
        { label: 'describe_auto_ml_job', value: 'describe_auto_ml_job' },
        { label: 'list_auto_ml_jobs', value: 'list_auto_ml_jobs' }
    ]}
>
<TabItem value="describe_auto_ml_job">

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
    <td><CopyableCode code="auto_ml_job_arn" /></td>
    <td><code>string</code></td>
    <td>Returns the ARN of the AutoML job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:automl-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_artifacts" /></td>
    <td><code>object</code></td>
    <td>Returns information on the job's artifacts found in AutoMLJobArtifacts.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_config" /></td>
    <td><code>object</code></td>
    <td>Returns the configuration for the AutoML job.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_name" /></td>
    <td><code>string</code></td>
    <td>Returns the name of the AutoML job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,31&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_objective" /></td>
    <td><code>object</code></td>
    <td>Returns the job's objective.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_secondary_status" /></td>
    <td><code>string</code></td>
    <td>Returns the secondary status of the AutoML job. (Starting, MaxCandidatesReached, Failed, Stopped, MaxAutoMLJobRuntimeReached, Stopping, CandidateDefinitionsGenerated, Completed, ExplainabilityError, DeployingModel, ModelDeploymentError, GeneratingModelInsightsReport, ModelInsightsError, AnalyzingData, FeatureEngineering, ModelTuning, GeneratingExplainabilityReport, TrainingModels, PreTraining)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_status" /></td>
    <td><code>string</code></td>
    <td>Returns the status of the AutoML job. (Completed, InProgress, Failed, Stopped, Stopping)</td>
</tr>
<tr>
    <td><CopyableCode code="best_candidate" /></td>
    <td><code>object</code></td>
    <td>The best model candidate selected by SageMaker AI Autopilot using both the best objective metric and lowest InferenceLatency for an experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns the creation time of the AutoML job.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns the end time of the AutoML job.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>Returns the failure reason for an AutoML job, when applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="generate_candidate_definitions_only" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the output for an AutoML job generates candidate definitions only.</td>
</tr>
<tr>
    <td><CopyableCode code="input_data_config" /></td>
    <td><code>array</code></td>
    <td>Returns the input data configuration for the AutoML job.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns the job's last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="model_deploy_config" /></td>
    <td><code>object</code></td>
    <td>Indicates whether the model was deployed automatically to an endpoint and the name of that endpoint if deployed automatically.</td>
</tr>
<tr>
    <td><CopyableCode code="model_deploy_result" /></td>
    <td><code>object</code></td>
    <td>Provides information about endpoint for the model deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="output_data_config" /></td>
    <td><code>object</code></td>
    <td>Returns the job's output data config.</td>
</tr>
<tr>
    <td><CopyableCode code="partial_failure_reasons" /></td>
    <td><code>array</code></td>
    <td>Returns a list of reasons for partial failures within an AutoML job.</td>
</tr>
<tr>
    <td><CopyableCode code="problem_type" /></td>
    <td><code>string</code></td>
    <td>Returns the job's problem type. (BinaryClassification, MulticlassClassification, Regression)</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_attributes" /></td>
    <td><code>object</code></td>
    <td>Contains ProblemType, AutoMLJobObjective, and CompletionCriteria. If you do not provide these values, they are inferred.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that has read permission to the input data location and write permission to the output data location in Amazon S3. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_auto_ml_jobs">

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
    <td><CopyableCode code="auto_ml_job_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AutoML job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:automl-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the AutoML job you are requesting. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,31&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_secondary_status" /></td>
    <td><code>string</code></td>
    <td>The secondary status of the AutoML job. (Starting, MaxCandidatesReached, Failed, Stopped, MaxAutoMLJobRuntimeReached, Stopping, CandidateDefinitionsGenerated, Completed, ExplainabilityError, DeployingModel, ModelDeploymentError, GeneratingModelInsightsReport, ModelInsightsError, AnalyzingData, FeatureEngineering, ModelTuning, GeneratingExplainabilityReport, TrainingModels, PreTraining)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_status" /></td>
    <td><code>string</code></td>
    <td>The status of the AutoML job. (Completed, InProgress, Failed, Stopped, Stopping)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the AutoML job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of an AutoML job.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The failure reason of an AutoML job.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the AutoML job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="partial_failure_reasons" /></td>
    <td><code>array</code></td>
    <td>The list of reasons for partial failures within an AutoML job.</td>
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
    <td><a href="#describe_auto_ml_job"><CopyableCode code="describe_auto_ml_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an AutoML job created by calling CreateAutoMLJob. AutoML jobs created by calling CreateAutoMLJobV2 cannot be described by DescribeAutoMLJob.</td>
</tr>
<tr>
    <td><a href="#list_auto_ml_jobs"><CopyableCode code="list_auto_ml_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Request a list of jobs.</td>
</tr>
<tr>
    <td><a href="#create_auto_ml_job"><CopyableCode code="create_auto_ml_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AutoMLJobName"><code>AutoMLJobName</code></a>, <a href="#parameter-InputDataConfig"><code>InputDataConfig</code></a>, <a href="#parameter-OutputDataConfig"><code>OutputDataConfig</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates an Autopilot job also referred to as Autopilot experiment or AutoML job. An AutoML job in SageMaker AI is a fully automated process that allows you to build machine learning models with minimal effort and machine learning expertise. When initiating an AutoML job, you provide your data and optionally specify parameters tailored to your use case. SageMaker AI then automates the entire model development lifecycle, including data preprocessing, model training, tuning, and evaluation. AutoML jobs are designed to simplify and accelerate the model building process by automating various tasks and exploring different combinations of machine learning algorithms, data preprocessing techniques, and hyperparameter values. The output of an AutoML job comprises one or more trained models ready for deployment and inference. Additionally, SageMaker AI AutoML jobs generate a candidate model leaderboard, allowing you to select the best-performing model for deployment. For more information about AutoML jobs, see https:​//docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html in the SageMaker AI developer guide. We recommend using the new versions CreateAutoMLJobV2 and DescribeAutoMLJobV2, which offer backward compatibility. CreateAutoMLJobV2 can manage tabular problem types identical to those of its previous version CreateAutoMLJob, as well as time-series forecasting, non-tabular problem types such as image or text classification, and text generation (LLMs fine-tuning). Find guidelines about how to migrate a CreateAutoMLJob to CreateAutoMLJobV2 in Migrate a CreateAutoMLJob to CreateAutoMLJobV2. You can find the best-performing model after you run an AutoML job by calling DescribeAutoMLJobV2 (recommended) or DescribeAutoMLJob.</td>
</tr>
<tr>
    <td><a href="#stop_auto_ml_job"><CopyableCode code="stop_auto_ml_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AutoMLJobName"><code>AutoMLJobName</code></a></td>
    <td></td>
    <td>A method for forcing a running job to shut down.</td>
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
    defaultValue="describe_auto_ml_job"
    values={[
        { label: 'describe_auto_ml_job', value: 'describe_auto_ml_job' },
        { label: 'list_auto_ml_jobs', value: 'list_auto_ml_jobs' }
    ]}
>
<TabItem value="describe_auto_ml_job">

Returns information about an AutoML job created by calling CreateAutoMLJob. AutoML jobs created by calling CreateAutoMLJobV2 cannot be described by DescribeAutoMLJob.

```sql
SELECT
auto_ml_job_arn,
auto_ml_job_artifacts,
auto_ml_job_config,
auto_ml_job_name,
auto_ml_job_objective,
auto_ml_job_secondary_status,
auto_ml_job_status,
best_candidate,
creation_time,
end_time,
failure_reason,
generate_candidate_definitions_only,
input_data_config,
last_modified_time,
model_deploy_config,
model_deploy_result,
output_data_config,
partial_failure_reasons,
problem_type,
resolved_attributes,
role_arn
FROM aws.sagemaker.auto_ml_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_auto_ml_jobs">

Request a list of jobs.

```sql
SELECT
auto_ml_job_arn,
auto_ml_job_name,
auto_ml_job_secondary_status,
auto_ml_job_status,
creation_time,
end_time,
failure_reason,
last_modified_time,
partial_failure_reasons
FROM aws.sagemaker.auto_ml_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_auto_ml_job"
    values={[
        { label: 'create_auto_ml_job', value: 'create_auto_ml_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_auto_ml_job">

Creates an Autopilot job also referred to as Autopilot experiment or AutoML job. An AutoML job in SageMaker AI is a fully automated process that allows you to build machine learning models with minimal effort and machine learning expertise. When initiating an AutoML job, you provide your data and optionally specify parameters tailored to your use case. SageMaker AI then automates the entire model development lifecycle, including data preprocessing, model training, tuning, and evaluation. AutoML jobs are designed to simplify and accelerate the model building process by automating various tasks and exploring different combinations of machine learning algorithms, data preprocessing techniques, and hyperparameter values. The output of an AutoML job comprises one or more trained models ready for deployment and inference. Additionally, SageMaker AI AutoML jobs generate a candidate model leaderboard, allowing you to select the best-performing model for deployment. For more information about AutoML jobs, see https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html in the SageMaker AI developer guide. We recommend using the new versions CreateAutoMLJobV2 and DescribeAutoMLJobV2, which offer backward compatibility. CreateAutoMLJobV2 can manage tabular problem types identical to those of its previous version CreateAutoMLJob, as well as time-series forecasting, non-tabular problem types such as image or text classification, and text generation (LLMs fine-tuning). Find guidelines about how to migrate a CreateAutoMLJob to CreateAutoMLJobV2 in Migrate a CreateAutoMLJob to CreateAutoMLJobV2. You can find the best-performing model after you run an AutoML job by calling DescribeAutoMLJobV2 (recommended) or DescribeAutoMLJob.

```sql
INSERT INTO aws.sagemaker.auto_ml_jobs (
AutoMLJobName,
InputDataConfig,
OutputDataConfig,
ProblemType,
AutoMLJobObjective,
AutoMLJobConfig,
RoleArn,
GenerateCandidateDefinitionsOnly,
Tags,
ModelDeployConfig,
region
)
SELECT 
'{{ AutoMLJobName }}' /* required */,
'{{ InputDataConfig }}' /* required */,
'{{ OutputDataConfig }}' /* required */,
'{{ ProblemType }}',
'{{ AutoMLJobObjective }}',
'{{ AutoMLJobConfig }}',
'{{ RoleArn }}' /* required */,
{{ GenerateCandidateDefinitionsOnly }},
'{{ Tags }}',
'{{ ModelDeployConfig }}',
'{{ region }}'
RETURNING
auto_ml_job_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: auto_ml_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the auto_ml_jobs resource.
    - name: AutoMLJobName
      value: "{{ AutoMLJobName }}"
      description: |
        Identifies an Autopilot job. The name must be unique to your account and is case insensitive.
    - name: InputDataConfig
      description: |
        An array of channel objects that describes the input data and its location. Each channel is a named input source. Similar to InputDataConfig supported by HyperParameterTrainingJobDefinition. Format(s) supported: CSV, Parquet. A minimum of 500 rows is required for the training dataset. There is not a minimum number of rows required for the validation dataset.
      value:
        - DataSource:
            S3DataSource:
              S3DataType: "{{ S3DataType }}"
              S3Uri: "{{ S3Uri }}"
          CompressionType: "{{ CompressionType }}"
          TargetAttributeName: "{{ TargetAttributeName }}"
          ContentType: "{{ ContentType }}"
          ChannelType: "{{ ChannelType }}"
          SampleWeightAttributeName: "{{ SampleWeightAttributeName }}"
    - name: OutputDataConfig
      description: |
        Provides information about encryption and the Amazon S3 output path needed to store artifacts from an AutoML job. Format(s) supported: CSV.
      value:
        KmsKeyId: "{{ KmsKeyId }}"
        S3OutputPath: "{{ S3OutputPath }}"
    - name: ProblemType
      value: "{{ ProblemType }}"
      description: |
        Defines the type of supervised learning problem available for the candidates. For more information, see SageMaker Autopilot problem types.
      valid_values: ['BinaryClassification', 'MulticlassClassification', 'Regression']
    - name: AutoMLJobObjective
      description: |
        Specifies a metric to minimize or maximize as the objective of a job. If not specified, the default objective metric depends on the problem type. See AutoMLJobObjective for the default values.
      value:
        MetricName: "{{ MetricName }}"
    - name: AutoMLJobConfig
      description: |
        A collection of settings used to configure an AutoML job.
      value:
        CompletionCriteria:
          MaxCandidates: {{ MaxCandidates }}
          MaxRuntimePerTrainingJobInSeconds: {{ MaxRuntimePerTrainingJobInSeconds }}
          MaxAutoMLJobRuntimeInSeconds: {{ MaxAutoMLJobRuntimeInSeconds }}
        SecurityConfig:
          VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
          EnableInterContainerTrafficEncryption: {{ EnableInterContainerTrafficEncryption }}
          VpcConfig:
            SecurityGroupIds:
              - "{{ SecurityGroupIds }}"
            Subnets:
              - "{{ Subnets }}"
        CandidateGenerationConfig:
          FeatureSpecificationS3Uri: "{{ FeatureSpecificationS3Uri }}"
          AlgorithmsConfig:
            - AutoMLAlgorithms: "{{ AutoMLAlgorithms }}"
        DataSplitConfig:
          ValidationFraction: {{ ValidationFraction }}
        Mode: "{{ Mode }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The ARN of the role that is used to access the data.
    - name: GenerateCandidateDefinitionsOnly
      value: {{ GenerateCandidateDefinitionsOnly }}
      description: |
        Generates possible candidates without training the models. A candidate is a combination of data preprocessors, algorithms, and algorithm parameter settings.
    - name: Tags
      description: |
        An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web ServicesResources. Tag keys must be unique per resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ModelDeployConfig
      description: |
        Specifies how to generate the endpoint name for an automatic one-click Autopilot model deployment.
      value:
        AutoGenerateEndpointName: {{ AutoGenerateEndpointName }}
        EndpointName: "{{ EndpointName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_auto_ml_job"
    values={[
        { label: 'stop_auto_ml_job', value: 'stop_auto_ml_job' }
    ]}
>
<TabItem value="stop_auto_ml_job">

A method for forcing a running job to shut down.

```sql
EXEC aws.sagemaker.auto_ml_jobs.stop_auto_ml_job 
@region='{{ region }}' --required 
@@json=
'{
"AutoMLJobName": "{{ AutoMLJobName }}"
}'
;
```
</TabItem>
</Tabs>
