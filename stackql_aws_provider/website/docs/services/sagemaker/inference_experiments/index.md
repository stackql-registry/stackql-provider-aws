--- 
title: inference_experiments
hide_title: false
hide_table_of_contents: false
keywords:
  - inference_experiments
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

Creates, updates, deletes, gets or lists an <code>inference_experiments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inference_experiments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.inference_experiments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_inference_experiment"
    values={[
        { label: 'describe_inference_experiment', value: 'describe_inference_experiment' }
    ]}
>
<TabItem value="describe_inference_experiment">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the inference experiment being described. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:inference-experiment/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CompletionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the inference experiment was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which you created the inference experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="DataStorageConfig" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location and configuration for storing inference request and response data.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the inference experiment. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointMetadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of the endpoint on which the inference experiment ran.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKey" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. For more information, see CreateInferenceExperiment. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which you last modified the inference experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelVariants" /></td>
    <td><code>array</code></td>
    <td>An array of ModelVariantConfigSummary objects. There is one for each variant in the inference experiment. Each ModelVariantConfigSummary object in the array describes the infrastructure configuration for deploying the corresponding variant.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the inference experiment. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Schedule" /></td>
    <td><code>object</code></td>
    <td>The duration for which the inference experiment ran or will run.</td>
</tr>
<tr>
    <td><CopyableCode code="ShadowModeConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of ShadowMode inference experiment type, which shows the production variant that takes all the inference requests, and the shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant it also shows the percentage of requests that Amazon SageMaker replicates.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the inference experiment. The following are the possible statuses for an inference experiment: Creating - Amazon SageMaker is creating your experiment. Created - Amazon SageMaker has finished the creation of your experiment and will begin the experiment at the scheduled time. Updating - When you make changes to your experiment, your experiment shows as updating. Starting - Amazon SageMaker is beginning your experiment. Running - Your experiment is in progress. Stopping - Amazon SageMaker is stopping your experiment. Completed - Your experiment has completed. Cancelled - When you conclude your experiment early using the StopInferenceExperiment API, or if any operation fails with an unexpected error, it shows as cancelled. (Creating, Created, Updating, Running, Starting, Stopping, Completed, Cancelled)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>The error message or client-specified Reason from the StopInferenceExperiment API, that explains the status of the inference experiment. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of the inference experiment. (ShadowMode)</td>
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
    <td><a href="#describe_inference_experiment"><CopyableCode code="describe_inference_experiment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about an inference experiment.</td>
</tr>
<tr>
    <td><a href="#create_inference_experiment"><CopyableCode code="create_inference_experiment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-EndpointName"><code>EndpointName</code></a>, <a href="#parameter-ModelVariants"><code>ModelVariants</code></a>, <a href="#parameter-ShadowModeConfig"><code>ShadowModeConfig</code></a></td>
    <td></td>
    <td>Creates an inference experiment using the configurations specified in the request. Use this API to setup and schedule an experiment to compare model variants on a Amazon SageMaker inference endpoint. For more information about inference experiments, see Shadow tests. Amazon SageMaker begins your experiment at the scheduled time and routes traffic to your endpoint's model variants based on your specified configuration. While the experiment is in progress or after it has concluded, you can view metrics that compare your model variants. For more information, see View, monitor, and edit shadow tests.</td>
</tr>
<tr>
    <td><a href="#update_inference_experiment"><CopyableCode code="update_inference_experiment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an inference experiment that you created. The status of the inference experiment has to be either Created, Running. For more information on the status of an inference experiment, see DescribeInferenceExperiment.</td>
</tr>
<tr>
    <td><a href="#delete_inference_experiment"><CopyableCode code="delete_inference_experiment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an inference experiment. This operation does not delete your endpoint, variants, or any underlying resources. This operation only deletes the metadata of your experiment.</td>
</tr>
<tr>
    <td><a href="#list_inference_experiments"><CopyableCode code="list_inference_experiments" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of all inference experiments.</td>
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
    defaultValue="describe_inference_experiment"
    values={[
        { label: 'describe_inference_experiment', value: 'describe_inference_experiment' }
    ]}
>
<TabItem value="describe_inference_experiment">

Returns details about an inference experiment.

```sql
SELECT
Arn,
CompletionTime,
CreationTime,
DataStorageConfig,
Description,
EndpointMetadata,
KmsKey,
LastModifiedTime,
ModelVariants,
Name,
RoleArn,
Schedule,
ShadowModeConfig,
Status,
StatusReason,
Type
FROM aws.sagemaker.inference_experiments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_inference_experiment"
    values={[
        { label: 'create_inference_experiment', value: 'create_inference_experiment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_inference_experiment">

Creates an inference experiment using the configurations specified in the request. Use this API to setup and schedule an experiment to compare model variants on a Amazon SageMaker inference endpoint. For more information about inference experiments, see Shadow tests. Amazon SageMaker begins your experiment at the scheduled time and routes traffic to your endpoint's model variants based on your specified configuration. While the experiment is in progress or after it has concluded, you can view metrics that compare your model variants. For more information, see View, monitor, and edit shadow tests.

```sql
INSERT INTO aws.sagemaker.inference_experiments (
Name,
Type,
Schedule,
Description,
RoleArn,
EndpointName,
ModelVariants,
DataStorageConfig,
ShadowModeConfig,
KmsKey,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Type }}',
'{{ Schedule }}',
'{{ Description }}',
'{{ RoleArn }}' /* required */,
'{{ EndpointName }}' /* required */,
'{{ ModelVariants }}' /* required */,
'{{ DataStorageConfig }}',
'{{ ShadowModeConfig }}' /* required */,
'{{ KmsKey }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
InferenceExperimentArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: inference_experiments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the inference_experiments resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name for the inference experiment.
    - name: Type
      value: "{{ Type }}"
      description: |
        The type of the inference experiment that you want to run. The following types of experiments are possible: ShadowMode: You can use this type to validate a shadow variant. For more information, see Shadow tests.
      valid_values: ['ShadowMode']
    - name: Schedule
      description: |
        The duration for which you want the inference experiment to run. If you don't specify this field, the experiment automatically starts immediately upon creation and concludes after 7 days.
      value:
        StartTime: "{{ StartTime }}"
        EndTime: "{{ EndTime }}"
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the inference experiment.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment.
    - name: EndpointName
      value: "{{ EndpointName }}"
      description: |
        The name of the Amazon SageMaker endpoint on which you want to run the inference experiment.
    - name: ModelVariants
      description: |
        An array of ModelVariantConfig objects. There is one for each variant in the inference experiment. Each ModelVariantConfig object in the array describes the infrastructure configuration for the corresponding variant.
      value:
        - ModelName: "{{ ModelName }}"
          VariantName: "{{ VariantName }}"
          InfrastructureConfig:
            InfrastructureType: "{{ InfrastructureType }}"
            RealTimeInferenceConfig:
              InstanceType: "{{ InstanceType }}"
              InstanceCount: {{ InstanceCount }}
    - name: DataStorageConfig
      description: |
        The Amazon S3 location and configuration for storing inference request and response data. This is an optional parameter that you can use for data capture. For more information, see Capture data.
      value:
        Destination: "{{ Destination }}"
        KmsKey: "{{ KmsKey }}"
        ContentType:
          CsvContentTypes:
            - "{{ CsvContentTypes }}"
          JsonContentTypes:
            - "{{ JsonContentTypes }}"
    - name: ShadowModeConfig
      description: |
        The configuration of ShadowMode inference experiment type. Use this field to specify a production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant also specify the percentage of requests that Amazon SageMaker replicates.
      value:
        SourceModelVariantName: "{{ SourceModelVariantName }}"
        ShadowModelVariants:
          - ShadowModelVariantName: "{{ ShadowModelVariantName }}"
            SamplingPercentage: {{ SamplingPercentage }}
    - name: KmsKey
      value: "{{ KmsKey }}"
      description: |
        The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. The KmsKey can be any of the following formats: KMS key ID "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS key "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab" KMS key Alias "alias/ExampleAlias" Amazon Resource Name (ARN) of a KMS key Alias "arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias" If you use a KMS key ID or an alias of your KMS key, the Amazon SageMaker execution role must include permissions to call kms:Encrypt. If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. Amazon SageMaker uses server-side encryption with KMS managed keys for OutputDataConfig. If you use a bucket policy with an s3:PutObject permission that only allows objects with server-side encryption, set the condition key of s3:x-amz-server-side-encryption to "aws:kms". For more information, see KMS managed Encryption Keys in the Amazon Simple Storage Service Developer Guide. The KMS key policy must grant permission to the IAM role that you specify in your CreateEndpoint and UpdateEndpoint requests. For more information, see Using Key Policies in Amazon Web Services KMS in the Amazon Web Services Key Management Service Developer Guide.
    - name: Tags
      description: |
        Array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging your Amazon Web Services Resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_inference_experiment"
    values={[
        { label: 'update_inference_experiment', value: 'update_inference_experiment' }
    ]}
>
<TabItem value="update_inference_experiment">

Updates an inference experiment that you created. The status of the inference experiment has to be either Created, Running. For more information on the status of an inference experiment, see DescribeInferenceExperiment.

```sql
UPDATE aws.sagemaker.inference_experiments
SET 
Name = '{{ Name }}',
Schedule = '{{ Schedule }}',
Description = '{{ Description }}',
ModelVariants = '{{ ModelVariants }}',
DataStorageConfig = '{{ DataStorageConfig }}',
ShadowModeConfig = '{{ ShadowModeConfig }}'
WHERE 
region = '{{ region }}' --required
RETURNING
InferenceExperimentArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_inference_experiment"
    values={[
        { label: 'delete_inference_experiment', value: 'delete_inference_experiment' }
    ]}
>
<TabItem value="delete_inference_experiment">

Deletes an inference experiment. This operation does not delete your endpoint, variants, or any underlying resources. This operation only deletes the metadata of your experiment.

```sql
DELETE FROM aws.sagemaker.inference_experiments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_inference_experiments"
    values={[
        { label: 'list_inference_experiments', value: 'list_inference_experiments' }
    ]}
>
<TabItem value="list_inference_experiments">

Returns the list of all inference experiments.

```sql
EXEC aws.sagemaker.inference_experiments.list_inference_experiments 
@region='{{ region }}' --required 
@@json=
'{
"NameContains": "{{ NameContains }}", 
"Type": "{{ Type }}", 
"StatusEquals": "{{ StatusEquals }}", 
"CreationTimeAfter": "{{ CreationTimeAfter }}", 
"CreationTimeBefore": "{{ CreationTimeBefore }}", 
"LastModifiedTimeAfter": "{{ LastModifiedTimeAfter }}", 
"LastModifiedTimeBefore": "{{ LastModifiedTimeBefore }}", 
"SortBy": "{{ SortBy }}", 
"SortOrder": "{{ SortOrder }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
