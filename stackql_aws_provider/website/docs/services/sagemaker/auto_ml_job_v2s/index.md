--- 
title: auto_ml_job_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - auto_ml_job_v2s
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

Creates, updates, deletes, gets or lists an <code>auto_ml_job_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auto_ml_job_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.auto_ml_job_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_auto_ml_job_v2"
    values={[
        { label: 'describe_auto_ml_job_v2', value: 'describe_auto_ml_job_v2' }
    ]}
>
<TabItem value="describe_auto_ml_job_v2">

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
    <td><CopyableCode code="auto_ml_compute_config" /></td>
    <td><code>object</code></td>
    <td>The compute configuration used for the AutoML job V2.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_arn" /></td>
    <td><code>string</code></td>
    <td>Returns the Amazon Resource Name (ARN) of the AutoML job V2. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:automl-job/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_artifacts" /></td>
    <td><code>object</code></td>
    <td>The artifacts that are generated during an AutoML job.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_input_data_config" /></td>
    <td><code>array</code></td>
    <td>Returns an array of channel objects describing the input data and their location.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_name" /></td>
    <td><code>string</code></td>
    <td>Returns the name of the AutoML job V2. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,31&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_objective" /></td>
    <td><code>object</code></td>
    <td>Specifies a metric to minimize or maximize as the objective of an AutoML job.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_secondary_status" /></td>
    <td><code>string</code></td>
    <td>Returns the secondary status of the AutoML job V2. (Starting, MaxCandidatesReached, Failed, Stopped, MaxAutoMLJobRuntimeReached, Stopping, CandidateDefinitionsGenerated, Completed, ExplainabilityError, DeployingModel, ModelDeploymentError, GeneratingModelInsightsReport, ModelInsightsError, AnalyzingData, FeatureEngineering, ModelTuning, GeneratingExplainabilityReport, TrainingModels, PreTraining)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_job_status" /></td>
    <td><code>string</code></td>
    <td>Returns the status of the AutoML job V2. (Completed, InProgress, Failed, Stopped, Stopping)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_problem_type_config" /></td>
    <td><code>object</code></td>
    <td>Returns the configuration settings of the problem type set for the AutoML job V2.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_problem_type_config_name" /></td>
    <td><code>string</code></td>
    <td>Returns the name of the problem type configuration set for the AutoML job V2. (ImageClassification, TextClassification, TimeSeriesForecasting, Tabular, TextGeneration)</td>
</tr>
<tr>
    <td><CopyableCode code="best_candidate" /></td>
    <td><code>object</code></td>
    <td>Information about the candidate produced by an AutoML training job V2, including its status, steps, and other properties.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns the creation time of the AutoML job V2.</td>
</tr>
<tr>
    <td><CopyableCode code="data_split_config" /></td>
    <td><code>object</code></td>
    <td>Returns the configuration settings of how the data are split into train and validation datasets.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns the end time of the AutoML job V2.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>Returns the reason for the failure of the AutoML job V2, when applicable.</td>
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
    <td>Returns a list of reasons for partial failures within an AutoML job V2.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_attributes" /></td>
    <td><code>object</code></td>
    <td>Returns the resolved attributes used by the AutoML job V2.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that has read permission to the input data location and write permission to the output data location in Amazon S3. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_config" /></td>
    <td><code>object</code></td>
    <td>Returns the security configuration for traffic encryption or Amazon VPC settings.</td>
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
    <td><a href="#describe_auto_ml_job_v2"><CopyableCode code="describe_auto_ml_job_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an AutoML job created by calling CreateAutoMLJobV2 or CreateAutoMLJob.</td>
</tr>
<tr>
    <td><a href="#create_auto_ml_job_v2"><CopyableCode code="create_auto_ml_job_v2" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AutoMLJobName"><code>AutoMLJobName</code></a>, <a href="#parameter-AutoMLJobInputDataConfig"><code>AutoMLJobInputDataConfig</code></a>, <a href="#parameter-OutputDataConfig"><code>OutputDataConfig</code></a>, <a href="#parameter-AutoMLProblemTypeConfig"><code>AutoMLProblemTypeConfig</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates an Autopilot job also referred to as Autopilot experiment or AutoML job V2. An AutoML job in SageMaker AI is a fully automated process that allows you to build machine learning models with minimal effort and machine learning expertise. When initiating an AutoML job, you provide your data and optionally specify parameters tailored to your use case. SageMaker AI then automates the entire model development lifecycle, including data preprocessing, model training, tuning, and evaluation. AutoML jobs are designed to simplify and accelerate the model building process by automating various tasks and exploring different combinations of machine learning algorithms, data preprocessing techniques, and hyperparameter values. The output of an AutoML job comprises one or more trained models ready for deployment and inference. Additionally, SageMaker AI AutoML jobs generate a candidate model leaderboard, allowing you to select the best-performing model for deployment. For more information about AutoML jobs, see https:​//docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html in the SageMaker AI developer guide. AutoML jobs V2 support various problem types such as regression, binary, and multiclass classification with tabular data, text and image classification, time-series forecasting, and fine-tuning of large language models (LLMs) for text generation. CreateAutoMLJobV2 and DescribeAutoMLJobV2 are new versions of CreateAutoMLJob and DescribeAutoMLJob which offer backward compatibility. CreateAutoMLJobV2 can manage tabular problem types identical to those of its previous version CreateAutoMLJob, as well as time-series forecasting, non-tabular problem types such as image or text classification, and text generation (LLMs fine-tuning). Find guidelines about how to migrate a CreateAutoMLJob to CreateAutoMLJobV2 in Migrate a CreateAutoMLJob to CreateAutoMLJobV2. For the list of available problem types supported by CreateAutoMLJobV2, see AutoMLProblemTypeConfig. You can find the best-performing model after you run an AutoML job V2 by calling DescribeAutoMLJobV2.</td>
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
    defaultValue="describe_auto_ml_job_v2"
    values={[
        { label: 'describe_auto_ml_job_v2', value: 'describe_auto_ml_job_v2' }
    ]}
>
<TabItem value="describe_auto_ml_job_v2">

Returns information about an AutoML job created by calling CreateAutoMLJobV2 or CreateAutoMLJob.

```sql
SELECT
auto_ml_compute_config,
auto_ml_job_arn,
auto_ml_job_artifacts,
auto_ml_job_input_data_config,
auto_ml_job_name,
auto_ml_job_objective,
auto_ml_job_secondary_status,
auto_ml_job_status,
auto_ml_problem_type_config,
auto_ml_problem_type_config_name,
best_candidate,
creation_time,
data_split_config,
end_time,
failure_reason,
last_modified_time,
model_deploy_config,
model_deploy_result,
output_data_config,
partial_failure_reasons,
resolved_attributes,
role_arn,
security_config
FROM aws.sagemaker.auto_ml_job_v2s
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_auto_ml_job_v2"
    values={[
        { label: 'create_auto_ml_job_v2', value: 'create_auto_ml_job_v2' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_auto_ml_job_v2">

Creates an Autopilot job also referred to as Autopilot experiment or AutoML job V2. An AutoML job in SageMaker AI is a fully automated process that allows you to build machine learning models with minimal effort and machine learning expertise. When initiating an AutoML job, you provide your data and optionally specify parameters tailored to your use case. SageMaker AI then automates the entire model development lifecycle, including data preprocessing, model training, tuning, and evaluation. AutoML jobs are designed to simplify and accelerate the model building process by automating various tasks and exploring different combinations of machine learning algorithms, data preprocessing techniques, and hyperparameter values. The output of an AutoML job comprises one or more trained models ready for deployment and inference. Additionally, SageMaker AI AutoML jobs generate a candidate model leaderboard, allowing you to select the best-performing model for deployment. For more information about AutoML jobs, see https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html in the SageMaker AI developer guide. AutoML jobs V2 support various problem types such as regression, binary, and multiclass classification with tabular data, text and image classification, time-series forecasting, and fine-tuning of large language models (LLMs) for text generation. CreateAutoMLJobV2 and DescribeAutoMLJobV2 are new versions of CreateAutoMLJob and DescribeAutoMLJob which offer backward compatibility. CreateAutoMLJobV2 can manage tabular problem types identical to those of its previous version CreateAutoMLJob, as well as time-series forecasting, non-tabular problem types such as image or text classification, and text generation (LLMs fine-tuning). Find guidelines about how to migrate a CreateAutoMLJob to CreateAutoMLJobV2 in Migrate a CreateAutoMLJob to CreateAutoMLJobV2. For the list of available problem types supported by CreateAutoMLJobV2, see AutoMLProblemTypeConfig. You can find the best-performing model after you run an AutoML job V2 by calling DescribeAutoMLJobV2.

```sql
INSERT INTO aws.sagemaker.auto_ml_job_v2s (
AutoMLJobName,
AutoMLJobInputDataConfig,
OutputDataConfig,
AutoMLProblemTypeConfig,
RoleArn,
Tags,
SecurityConfig,
AutoMLJobObjective,
ModelDeployConfig,
DataSplitConfig,
AutoMLComputeConfig,
region
)
SELECT 
'{{ AutoMLJobName }}' /* required */,
'{{ AutoMLJobInputDataConfig }}' /* required */,
'{{ OutputDataConfig }}' /* required */,
'{{ AutoMLProblemTypeConfig }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
'{{ SecurityConfig }}',
'{{ AutoMLJobObjective }}',
'{{ ModelDeployConfig }}',
'{{ DataSplitConfig }}',
'{{ AutoMLComputeConfig }}',
'{{ region }}'
RETURNING
auto_ml_job_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: auto_ml_job_v2s
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the auto_ml_job_v2s resource.
    - name: AutoMLJobName
      value: "{{ AutoMLJobName }}"
      description: |
        Identifies an Autopilot job. The name must be unique to your account and is case insensitive.
    - name: AutoMLJobInputDataConfig
      description: |
        An array of channel objects describing the input data and their location. Each channel is a named input source. Similar to the InputDataConfig attribute in the CreateAutoMLJob input parameters. The supported formats depend on the problem type: For tabular problem types: S3Prefix, ManifestFile. For image classification: S3Prefix, ManifestFile, AugmentedManifestFile. For text classification: S3Prefix. For time-series forecasting: S3Prefix. For text generation (LLMs fine-tuning): S3Prefix.
      value:
        - ChannelType: "{{ ChannelType }}"
          ContentType: "{{ ContentType }}"
          CompressionType: "{{ CompressionType }}"
          DataSource:
            S3DataSource:
              S3DataType: "{{ S3DataType }}"
              S3Uri: "{{ S3Uri }}"
    - name: OutputDataConfig
      description: |
        Provides information about encryption and the Amazon S3 output path needed to store artifacts from an AutoML job.
      value:
        KmsKeyId: "{{ KmsKeyId }}"
        S3OutputPath: "{{ S3OutputPath }}"
    - name: AutoMLProblemTypeConfig
      description: |
        Defines the configuration settings of one of the supported problem types.
      value:
        ImageClassificationJobConfig:
          CompletionCriteria:
            MaxCandidates: {{ MaxCandidates }}
            MaxRuntimePerTrainingJobInSeconds: {{ MaxRuntimePerTrainingJobInSeconds }}
            MaxAutoMLJobRuntimeInSeconds: {{ MaxAutoMLJobRuntimeInSeconds }}
        TextClassificationJobConfig:
          CompletionCriteria:
            MaxCandidates: {{ MaxCandidates }}
            MaxRuntimePerTrainingJobInSeconds: {{ MaxRuntimePerTrainingJobInSeconds }}
            MaxAutoMLJobRuntimeInSeconds: {{ MaxAutoMLJobRuntimeInSeconds }}
          ContentColumn: "{{ ContentColumn }}"
          TargetLabelColumn: "{{ TargetLabelColumn }}"
        TimeSeriesForecastingJobConfig:
          FeatureSpecificationS3Uri: "{{ FeatureSpecificationS3Uri }}"
          CompletionCriteria:
            MaxCandidates: {{ MaxCandidates }}
            MaxRuntimePerTrainingJobInSeconds: {{ MaxRuntimePerTrainingJobInSeconds }}
            MaxAutoMLJobRuntimeInSeconds: {{ MaxAutoMLJobRuntimeInSeconds }}
          ForecastFrequency: "{{ ForecastFrequency }}"
          ForecastHorizon: {{ ForecastHorizon }}
          ForecastQuantiles:
            - "{{ ForecastQuantiles }}"
          Transformations:
            Filling: "{{ Filling }}"
            Aggregation: "{{ Aggregation }}"
          TimeSeriesConfig:
            TargetAttributeName: "{{ TargetAttributeName }}"
            TimestampAttributeName: "{{ TimestampAttributeName }}"
            ItemIdentifierAttributeName: "{{ ItemIdentifierAttributeName }}"
            GroupingAttributeNames:
              - "{{ GroupingAttributeNames }}"
          HolidayConfig:
            - CountryCode: "{{ CountryCode }}"
          CandidateGenerationConfig:
            AlgorithmsConfig:
              - AutoMLAlgorithms: "{{ AutoMLAlgorithms }}"
        TabularJobConfig:
          CandidateGenerationConfig:
            AlgorithmsConfig:
              - AutoMLAlgorithms: "{{ AutoMLAlgorithms }}"
          CompletionCriteria:
            MaxCandidates: {{ MaxCandidates }}
            MaxRuntimePerTrainingJobInSeconds: {{ MaxRuntimePerTrainingJobInSeconds }}
            MaxAutoMLJobRuntimeInSeconds: {{ MaxAutoMLJobRuntimeInSeconds }}
          FeatureSpecificationS3Uri: "{{ FeatureSpecificationS3Uri }}"
          Mode: "{{ Mode }}"
          GenerateCandidateDefinitionsOnly: {{ GenerateCandidateDefinitionsOnly }}
          ProblemType: "{{ ProblemType }}"
          TargetAttributeName: "{{ TargetAttributeName }}"
          SampleWeightAttributeName: "{{ SampleWeightAttributeName }}"
        TextGenerationJobConfig:
          CompletionCriteria:
            MaxCandidates: {{ MaxCandidates }}
            MaxRuntimePerTrainingJobInSeconds: {{ MaxRuntimePerTrainingJobInSeconds }}
            MaxAutoMLJobRuntimeInSeconds: {{ MaxAutoMLJobRuntimeInSeconds }}
          BaseModelName: "{{ BaseModelName }}"
          TextGenerationHyperParameters: "{{ TextGenerationHyperParameters }}"
          ModelAccessConfig:
            AcceptEula: {{ AcceptEula }}
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The ARN of the role that is used to access the data.
    - name: Tags
      description: |
        An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, such as by purpose, owner, or environment. For more information, see Tagging Amazon Web ServicesResources. Tag keys must be unique per resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: SecurityConfig
      description: |
        The security configuration for traffic encryption or Amazon VPC settings.
      value:
        VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
        EnableInterContainerTrafficEncryption: {{ EnableInterContainerTrafficEncryption }}
        VpcConfig:
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
          Subnets:
            - "{{ Subnets }}"
    - name: AutoMLJobObjective
      description: |
        Specifies a metric to minimize or maximize as the objective of a job. If not specified, the default objective metric depends on the problem type. For the list of default values per problem type, see AutoMLJobObjective. For tabular problem types: You must either provide both the AutoMLJobObjective and indicate the type of supervised learning problem in AutoMLProblemTypeConfig (TabularJobConfig.ProblemType), or none at all. For text generation problem types (LLMs fine-tuning): Fine-tuning language models in Autopilot does not require setting the AutoMLJobObjective field. Autopilot fine-tunes LLMs without requiring multiple candidates to be trained and evaluated. Instead, using your dataset, Autopilot directly fine-tunes your target model to enhance a default objective metric, the cross-entropy loss. After fine-tuning a language model, you can evaluate the quality of its generated text using different metrics. For a list of the available metrics, see Metrics for fine-tuning LLMs in Autopilot.
      value:
        MetricName: "{{ MetricName }}"
    - name: ModelDeployConfig
      description: |
        Specifies how to generate the endpoint name for an automatic one-click Autopilot model deployment.
      value:
        AutoGenerateEndpointName: {{ AutoGenerateEndpointName }}
        EndpointName: "{{ EndpointName }}"
    - name: DataSplitConfig
      description: |
        This structure specifies how to split the data into train and validation datasets. The validation and training datasets must contain the same headers. For jobs created by calling CreateAutoMLJob, the validation dataset must be less than 2 GB in size. This attribute must not be set for the time-series forecasting problem type, as Autopilot automatically splits the input dataset into training and validation sets.
      value:
        ValidationFraction: {{ ValidationFraction }}
    - name: AutoMLComputeConfig
      description: |
        Specifies the compute configuration for the AutoML job V2.
      value:
        EmrServerlessComputeConfig:
          ExecutionRoleARN: "{{ ExecutionRoleARN }}"
`}</CodeBlock>

</TabItem>
</Tabs>
