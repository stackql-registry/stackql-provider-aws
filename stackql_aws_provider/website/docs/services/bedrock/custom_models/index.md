--- 
title: custom_models
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_models
  - bedrock
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

Creates, updates, deletes, gets or lists a <code>custom_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.custom_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_model"
    values={[
        { label: 'get_custom_model', value: 'get_custom_model' },
        { label: 'list_custom_models', value: 'list_custom_models' }
    ]}
>
<TabItem value="get_custom_model">

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
    <td><CopyableCode code="base_model_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the base model. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:((&#91;0-9&#93;&#123;12&#125;:custom-model/((imported)|(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;))((&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)?/&#91;a-z0-9&#93;&#123;12&#125;)|(:foundation-model/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the model.</td>
</tr>
<tr>
    <td><CopyableCode code="customization_config" /></td>
    <td><code>object</code></td>
    <td>A model customization configuration</td>
</tr>
<tr>
    <td><CopyableCode code="customization_type" /></td>
    <td><code>string</code></td>
    <td>The type of model customization. (FINE_TUNING, CONTINUED_PRE_TRAINING, DISTILLATION, REINFORCEMENT_FINE_TUNING, IMPORTED)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>A failure message for any issues that occurred when creating the custom model. This is included for only a failed CreateCustomModel operation.</td>
</tr>
<tr>
    <td><CopyableCode code="hyper_parameters" /></td>
    <td><code>object</code></td>
    <td>Hyperparameter values associated with this model. For details on the format for different models, see Custom model hyperparameters.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>Job Amazon Resource Name (ARN) associated with this model. For models that you create with the CreateCustomModel API operation, this is NULL. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:model-customization-job/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>Job name associated with this model. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9\+\-\.&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) associated with this model. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:((&#91;0-9&#93;&#123;12&#125;:custom-model/((imported)|(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;))((&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)?/&#91;a-z0-9&#93;&#123;12&#125;)|(:foundation-model/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The custom model is encrypted at rest using this key. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_name" /></td>
    <td><code>string</code></td>
    <td>Model name associated with this model. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the custom model. Possible values include: Creating - The model is being created and validated. Active - The model has been successfully created and is ready for use. Failed - The model creation process failed. Check the failureMessage field for details. (Active, Creating, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="output_data_config" /></td>
    <td><code>object</code></td>
    <td>S3 Location of the output data.</td>
</tr>
<tr>
    <td><CopyableCode code="training_data_config" /></td>
    <td><code>object</code></td>
    <td>S3 Location of the training data.</td>
</tr>
<tr>
    <td><CopyableCode code="training_metrics" /></td>
    <td><code>object</code></td>
    <td>Contains training metrics from the job creation.</td>
</tr>
<tr>
    <td><CopyableCode code="validation_data_config" /></td>
    <td><code>object</code></td>
    <td>Array of up to 10 validators.</td>
</tr>
<tr>
    <td><CopyableCode code="validation_metrics" /></td>
    <td><code>array</code></td>
    <td>The validation metrics from the job creation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_models">

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
    <td><CopyableCode code="base_model_arn" /></td>
    <td><code>string</code></td>
    <td>The base model Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:((&#91;0-9&#93;&#123;12&#125;:custom-model/((imported)|(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;))((&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)?/&#91;a-z0-9&#93;&#123;12&#125;)|(:foundation-model/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="base_model_name" /></td>
    <td><code>string</code></td>
    <td>The base model name. (pattern: &lt;code&gt;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the model.</td>
</tr>
<tr>
    <td><CopyableCode code="customization_type" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to carry out continued pre-training of a model or whether to fine-tune it. For more information, see Custom models. (FINE_TUNING, CONTINUED_PRE_TRAINING, DISTILLATION, REINFORCEMENT_FINE_TUNING, IMPORTED)</td>
</tr>
<tr>
    <td><CopyableCode code="model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom model. (pattern: &lt;code&gt;arn:aws(|-us-gov|-cn|-iso|-iso-b):bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:custom-model/(imported|&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the custom model. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the custom model. Possible values include: Creating - The model is being created and validated. Active - The model has been successfully created and is ready for use. Failed - The model creation process failed. (Active, Creating, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the account that owns the model. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_custom_model"><CopyableCode code="get_custom_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-model_identifier"><code>model_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the properties associated with a Amazon Bedrock custom model that you have created. For more information, see Custom models in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#list_custom_models"><CopyableCode code="list_custom_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-creationTimeBefore"><code>creationTimeBefore</code></a>, <a href="#parameter-creationTimeAfter"><code>creationTimeAfter</code></a>, <a href="#parameter-nameContains"><code>nameContains</code></a>, <a href="#parameter-baseModelArnEquals"><code>baseModelArnEquals</code></a>, <a href="#parameter-foundationModelArnEquals"><code>foundationModelArnEquals</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-isOwned"><code>isOwned</code></a>, <a href="#parameter-modelStatus"><code>modelStatus</code></a></td>
    <td>Returns a list of the custom models that you have created with the CreateModelCustomizationJob operation. For more information, see Custom models in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#create_custom_model"><CopyableCode code="create_custom_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-modelName"><code>modelName</code></a>, <a href="#parameter-modelSourceConfig"><code>modelSourceConfig</code></a></td>
    <td></td>
    <td>Creates a new custom model in Amazon Bedrock. After the model is active, you can use it for inference. To use the model for inference, you must purchase Provisioned Throughput for it. You can't use On-demand inference with these custom models. For more information about Provisioned Throughput, see Provisioned Throughput. The model appears in ListCustomModels with a customizationType of imported. To track the status of the new model, you use the GetCustomModel API operation. The model can be in the following states: Creating - Initial state during validation and registration Active - Model is ready for use in inference Failed - Creation process encountered an error Related APIs GetCustomModel ListCustomModels DeleteCustomModel</td>
</tr>
<tr>
    <td><a href="#delete_custom_model"><CopyableCode code="delete_custom_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-model_identifier"><code>model_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom model that you created earlier. For more information, see Custom models in the Amazon Bedrock User Guide.</td>
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
<tr id="parameter-model_identifier">
    <td><CopyableCode code="model_identifier" /></td>
    <td><code>string</code></td>
    <td>Name of the model to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-baseModelArnEquals">
    <td><CopyableCode code="baseModelArnEquals" /></td>
    <td><code>string</code></td>
    <td>Return custom models only if the base model Amazon Resource Name (ARN) matches this parameter.</td>
</tr>
<tr id="parameter-creationTimeAfter">
    <td><CopyableCode code="creationTimeAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Return custom models created after the specified time.</td>
</tr>
<tr id="parameter-creationTimeBefore">
    <td><CopyableCode code="creationTimeBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Return custom models created before the specified time.</td>
</tr>
<tr id="parameter-foundationModelArnEquals">
    <td><CopyableCode code="foundationModelArnEquals" /></td>
    <td><code>string</code></td>
    <td>Return custom models only if the foundation model Amazon Resource Name (ARN) matches this parameter.</td>
</tr>
<tr id="parameter-isOwned">
    <td><CopyableCode code="isOwned" /></td>
    <td><code>boolean</code></td>
    <td>Return custom models depending on if the current account owns them (true) or if they were shared with the current account (false).</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-modelStatus">
    <td><CopyableCode code="modelStatus" /></td>
    <td><code>string</code></td>
    <td>The status of them model to filter results by. Possible values include: Creating - Include only models that are currently being created and validated. Active - Include only models that have been successfully created and are ready for use. Failed - Include only models where the creation process failed. If you don't specify a status, the API returns models in all states.</td>
</tr>
<tr id="parameter-nameContains">
    <td><CopyableCode code="nameContains" /></td>
    <td><code>string</code></td>
    <td>Return custom models only if the job name contains these characters.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by in the returned list of models.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order of the results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_custom_model"
    values={[
        { label: 'get_custom_model', value: 'get_custom_model' },
        { label: 'list_custom_models', value: 'list_custom_models' }
    ]}
>
<TabItem value="get_custom_model">

Get the properties associated with a Amazon Bedrock custom model that you have created. For more information, see Custom models in the Amazon Bedrock User Guide.

```sql
SELECT
base_model_arn,
creation_time,
customization_config,
customization_type,
failure_message,
hyper_parameters,
job_arn,
job_name,
model_arn,
model_kms_key_arn,
model_name,
model_status,
output_data_config,
training_data_config,
training_metrics,
validation_data_config,
validation_metrics
FROM aws.bedrock.custom_models
WHERE model_identifier = '{{ model_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_models">

Returns a list of the custom models that you have created with the CreateModelCustomizationJob operation. For more information, see Custom models in the Amazon Bedrock User Guide.

```sql
SELECT
base_model_arn,
base_model_name,
creation_time,
customization_type,
model_arn,
model_name,
model_status,
owner_account_id
FROM aws.bedrock.custom_models
WHERE region = '{{ region }}' -- required
AND creationTimeBefore = '{{ creationTimeBefore }}'
AND creationTimeAfter = '{{ creationTimeAfter }}'
AND nameContains = '{{ nameContains }}'
AND baseModelArnEquals = '{{ baseModelArnEquals }}'
AND foundationModelArnEquals = '{{ foundationModelArnEquals }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND isOwned = '{{ isOwned }}'
AND modelStatus = '{{ modelStatus }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_model"
    values={[
        { label: 'create_custom_model', value: 'create_custom_model' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_model">

Creates a new custom model in Amazon Bedrock. After the model is active, you can use it for inference. To use the model for inference, you must purchase Provisioned Throughput for it. You can't use On-demand inference with these custom models. For more information about Provisioned Throughput, see Provisioned Throughput. The model appears in ListCustomModels with a customizationType of imported. To track the status of the new model, you use the GetCustomModel API operation. The model can be in the following states: Creating - Initial state during validation and registration Active - Model is ready for use in inference Failed - Creation process encountered an error Related APIs GetCustomModel ListCustomModels DeleteCustomModel

```sql
INSERT INTO aws.bedrock.custom_models (
modelName,
modelSourceConfig,
modelKmsKeyArn,
roleArn,
modelTags,
clientRequestToken,
region
)
SELECT 
'{{ modelName }}' /* required */,
'{{ modelSourceConfig }}' /* required */,
'{{ modelKmsKeyArn }}',
'{{ roleArn }}',
'{{ modelTags }}',
'{{ clientRequestToken }}',
'{{ region }}'
RETURNING
model_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_models
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_models resource.
    - name: modelName
      value: "{{ modelName }}"
    - name: modelSourceConfig
      description: |
        The data source of the model to import.
      value:
        s3DataSource:
          s3Uri: "{{ s3Uri }}"
    - name: modelKmsKeyArn
      value: "{{ modelKmsKeyArn }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: modelTags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_model"
    values={[
        { label: 'delete_custom_model', value: 'delete_custom_model' }
    ]}
>
<TabItem value="delete_custom_model">

Deletes a custom model that you created earlier. For more information, see Custom models in the Amazon Bedrock User Guide.

```sql
DELETE FROM aws.bedrock.custom_models
WHERE model_identifier = '{{ model_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
