--- 
title: algorithms
hide_title: false
hide_table_of_contents: false
keywords:
  - algorithms
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

Creates, updates, deletes, gets or lists an <code>algorithms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="algorithms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.algorithms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_algorithm"
    values={[
        { label: 'describe_algorithm', value: 'describe_algorithm' },
        { label: 'list_algorithms', value: 'list_algorithms' }
    ]}
>
<TabItem value="describe_algorithm">

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
    <td><CopyableCode code="algorithm_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the algorithm. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:algorithm/&#91;\S&#93;&#123;1,2048&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm_description" /></td>
    <td><code>string</code></td>
    <td>A brief summary about the algorithm. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;Z&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm_name" /></td>
    <td><code>string</code></td>
    <td>The name of the algorithm being described. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the algorithm. (Pending, InProgress, Completed, Failed, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm_status_details" /></td>
    <td><code>object</code></td>
    <td>Details about the current status of the algorithm.</td>
</tr>
<tr>
    <td><CopyableCode code="certify_for_marketplace" /></td>
    <td><code>boolean</code></td>
    <td>Whether the algorithm is certified to be listed in Amazon Web Services Marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp specifying when the algorithm was created.</td>
</tr>
<tr>
    <td><CopyableCode code="inference_specification" /></td>
    <td><code>object</code></td>
    <td>Details about inference jobs that the algorithm runs.</td>
</tr>
<tr>
    <td><CopyableCode code="product_id" /></td>
    <td><code>string</code></td>
    <td>The product identifier of the algorithm. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="training_specification" /></td>
    <td><code>object</code></td>
    <td>Details about training jobs run by this algorithm.</td>
</tr>
<tr>
    <td><CopyableCode code="validation_specification" /></td>
    <td><code>object</code></td>
    <td>Details about configurations for one or more training jobs that SageMaker runs to test the algorithm.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_algorithms">

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
    <td><CopyableCode code="algorithm_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the algorithm. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:algorithm/&#91;\S&#93;&#123;1,2048&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm_description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the algorithm. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;Z&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm_name" /></td>
    <td><code>string</code></td>
    <td>The name of the algorithm that is described by the summary. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm_status" /></td>
    <td><code>string</code></td>
    <td>The overall status of the algorithm. (Pending, InProgress, Completed, Failed, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the algorithm was created.</td>
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
    <td><a href="#describe_algorithm"><CopyableCode code="describe_algorithm" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of the specified algorithm that is in your account.</td>
</tr>
<tr>
    <td><a href="#list_algorithms"><CopyableCode code="list_algorithms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the machine learning algorithms that have been created.</td>
</tr>
<tr>
    <td><a href="#create_algorithm"><CopyableCode code="create_algorithm" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AlgorithmName"><code>AlgorithmName</code></a>, <a href="#parameter-TrainingSpecification"><code>TrainingSpecification</code></a></td>
    <td></td>
    <td>Create a machine learning algorithm that you can use in SageMaker and list in the Amazon Web Services Marketplace.</td>
</tr>
<tr>
    <td><a href="#delete_algorithm"><CopyableCode code="delete_algorithm" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified algorithm from your account.</td>
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
    defaultValue="describe_algorithm"
    values={[
        { label: 'describe_algorithm', value: 'describe_algorithm' },
        { label: 'list_algorithms', value: 'list_algorithms' }
    ]}
>
<TabItem value="describe_algorithm">

Returns a description of the specified algorithm that is in your account.

```sql
SELECT
algorithm_arn,
algorithm_description,
algorithm_name,
algorithm_status,
algorithm_status_details,
certify_for_marketplace,
creation_time,
inference_specification,
product_id,
training_specification,
validation_specification
FROM aws.sagemaker.algorithms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_algorithms">

Lists the machine learning algorithms that have been created.

```sql
SELECT
algorithm_arn,
algorithm_description,
algorithm_name,
algorithm_status,
creation_time
FROM aws.sagemaker.algorithms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_algorithm"
    values={[
        { label: 'create_algorithm', value: 'create_algorithm' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_algorithm">

Create a machine learning algorithm that you can use in SageMaker and list in the Amazon Web Services Marketplace.

```sql
INSERT INTO aws.sagemaker.algorithms (
AlgorithmName,
AlgorithmDescription,
TrainingSpecification,
InferenceSpecification,
ValidationSpecification,
CertifyForMarketplace,
Tags,
region
)
SELECT 
'{{ AlgorithmName }}' /* required */,
'{{ AlgorithmDescription }}',
'{{ TrainingSpecification }}' /* required */,
'{{ InferenceSpecification }}',
'{{ ValidationSpecification }}',
{{ CertifyForMarketplace }},
'{{ Tags }}',
'{{ region }}'
RETURNING
algorithm_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: algorithms
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the algorithms resource.
    - name: AlgorithmName
      value: "{{ AlgorithmName }}"
      description: |
        The name of the algorithm.
    - name: AlgorithmDescription
      value: "{{ AlgorithmDescription }}"
      description: |
        A description of the algorithm.
    - name: TrainingSpecification
      description: |
        Specifies details about training jobs run by this algorithm, including the following: The Amazon ECR path of the container and the version digest of the algorithm. The hyperparameters that the algorithm supports. The instance types that the algorithm supports for training. Whether the algorithm supports distributed training. The metrics that the algorithm emits to Amazon CloudWatch. Which metrics that the algorithm emits can be used as the objective metric for hyperparameter tuning jobs. The input channels that the algorithm supports for training data. For example, an algorithm might support train, validation, and test channels.
      value:
        TrainingImage: "{{ TrainingImage }}"
        TrainingImageDigest: "{{ TrainingImageDigest }}"
        SupportedHyperParameters:
          - Name: "{{ Name }}"
            Description: "{{ Description }}"
            Type: "{{ Type }}"
            Range:
              IntegerParameterRangeSpecification:
                MinValue: "{{ MinValue }}"
                MaxValue: "{{ MaxValue }}"
              ContinuousParameterRangeSpecification:
                MinValue: "{{ MinValue }}"
                MaxValue: "{{ MaxValue }}"
              CategoricalParameterRangeSpecification:
                Values:
                  - "{{ Values }}"
            IsTunable: {{ IsTunable }}
            IsRequired: {{ IsRequired }}
            DefaultValue: "{{ DefaultValue }}"
        SupportedTrainingInstanceTypes:
          - "{{ SupportedTrainingInstanceTypes }}"
        SupportsDistributedTraining: {{ SupportsDistributedTraining }}
        MetricDefinitions:
          - Name: "{{ Name }}"
            Regex: "{{ Regex }}"
        TrainingChannels:
          - Name: "{{ Name }}"
            Description: "{{ Description }}"
            IsRequired: {{ IsRequired }}
            SupportedContentTypes: "{{ SupportedContentTypes }}"
            SupportedCompressionTypes: "{{ SupportedCompressionTypes }}"
            SupportedInputModes: "{{ SupportedInputModes }}"
        SupportedTuningJobObjectiveMetrics:
          - Type: "{{ Type }}"
            MetricName: "{{ MetricName }}"
        AdditionalS3DataSource:
          S3DataType: "{{ S3DataType }}"
          S3Uri: "{{ S3Uri }}"
          CompressionType: "{{ CompressionType }}"
          ETag: "{{ ETag }}"
    - name: InferenceSpecification
      description: |
        Specifies details about inference jobs that the algorithm runs, including the following: The Amazon ECR paths of containers that contain the inference code and model artifacts. The instance types that the algorithm supports for transform jobs and real-time endpoints used for inference. The input and output content formats that the algorithm supports for inference.
      value:
        Containers:
          - ContainerHostname: "{{ ContainerHostname }}"
            Image: "{{ Image }}"
            ImageDigest: "{{ ImageDigest }}"
            ModelDataUrl: "{{ ModelDataUrl }}"
            ModelDataSource:
              S3DataSource:
                S3Uri: "{{ S3Uri }}"
                S3DataType: "{{ S3DataType }}"
                CompressionType: "{{ CompressionType }}"
                ModelAccessConfig:
                  AcceptEula: {{ AcceptEula }}
                HubAccessConfig:
                  HubContentArn: "{{ HubContentArn }}"
                ManifestS3Uri: "{{ ManifestS3Uri }}"
                ETag: "{{ ETag }}"
                ManifestEtag: "{{ ManifestEtag }}"
            ProductId: "{{ ProductId }}"
            Environment: "{{ Environment }}"
            ModelInput:
              DataInputConfig: "{{ DataInputConfig }}"
            Framework: "{{ Framework }}"
            FrameworkVersion: "{{ FrameworkVersion }}"
            NearestModelName: "{{ NearestModelName }}"
            AdditionalModelDataSources: "{{ AdditionalModelDataSources }}"
            AdditionalS3DataSource:
              S3DataType: "{{ S3DataType }}"
              S3Uri: "{{ S3Uri }}"
              CompressionType: "{{ CompressionType }}"
              ETag: "{{ ETag }}"
            ModelDataETag: "{{ ModelDataETag }}"
            IsCheckpoint: {{ IsCheckpoint }}
            BaseModel:
              HubContentName: "{{ HubContentName }}"
              HubContentVersion: "{{ HubContentVersion }}"
              RecipeName: "{{ RecipeName }}"
        SupportedTransformInstanceTypes:
          - "{{ SupportedTransformInstanceTypes }}"
        SupportedRealtimeInferenceInstanceTypes:
          - "{{ SupportedRealtimeInferenceInstanceTypes }}"
        SupportedContentTypes:
          - "{{ SupportedContentTypes }}"
        SupportedResponseMIMETypes:
          - "{{ SupportedResponseMIMETypes }}"
    - name: ValidationSpecification
      description: |
        Specifies configurations for one or more training jobs and that SageMaker runs to test the algorithm's training code and, optionally, one or more batch transform jobs that SageMaker runs to test the algorithm's inference code.
      value:
        ValidationRole: "{{ ValidationRole }}"
        ValidationProfiles:
          - ProfileName: "{{ ProfileName }}"
            TrainingJobDefinition:
              TrainingInputMode: "{{ TrainingInputMode }}"
              HyperParameters: "{{ HyperParameters }}"
              InputDataConfig:
                - ChannelName: "{{ ChannelName }}"
                  DataSource:
                    S3DataSource: "{{ S3DataSource }}"
                    FileSystemDataSource: "{{ FileSystemDataSource }}"
                    DatasetSource: "{{ DatasetSource }}"
                  ContentType: "{{ ContentType }}"
                  CompressionType: "{{ CompressionType }}"
                  RecordWrapperType: "{{ RecordWrapperType }}"
                  InputMode: "{{ InputMode }}"
                  ShuffleConfig:
                    Seed: {{ Seed }}
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
                  PlacementSpecifications: "{{ PlacementSpecifications }}"
              StoppingCondition:
                MaxRuntimeInSeconds: {{ MaxRuntimeInSeconds }}
                MaxWaitTimeInSeconds: {{ MaxWaitTimeInSeconds }}
                MaxPendingTimeInSeconds: {{ MaxPendingTimeInSeconds }}
            TransformJobDefinition:
              MaxConcurrentTransforms: {{ MaxConcurrentTransforms }}
              MaxPayloadInMB: {{ MaxPayloadInMB }}
              BatchStrategy: "{{ BatchStrategy }}"
              Environment: "{{ Environment }}"
              TransformInput:
                DataSource:
                  S3DataSource: "{{ S3DataSource }}"
                ContentType: "{{ ContentType }}"
                CompressionType: "{{ CompressionType }}"
                SplitType: "{{ SplitType }}"
              TransformOutput:
                S3OutputPath: "{{ S3OutputPath }}"
                Accept: "{{ Accept }}"
                AssembleWith: "{{ AssembleWith }}"
                KmsKeyId: "{{ KmsKeyId }}"
              TransformResources:
                InstanceType: "{{ InstanceType }}"
                InstanceCount: {{ InstanceCount }}
                VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
                TransformAmiVersion: "{{ TransformAmiVersion }}"
    - name: CertifyForMarketplace
      value: {{ CertifyForMarketplace }}
      description: |
        Whether to certify the algorithm so that it can be listed in Amazon Web Services Marketplace.
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
    defaultValue="delete_algorithm"
    values={[
        { label: 'delete_algorithm', value: 'delete_algorithm' }
    ]}
>
<TabItem value="delete_algorithm">

Removes the specified algorithm from your account.

```sql
DELETE FROM aws.sagemaker.algorithms
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
