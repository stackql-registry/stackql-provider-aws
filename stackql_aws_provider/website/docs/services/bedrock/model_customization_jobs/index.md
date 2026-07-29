--- 
title: model_customization_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - model_customization_jobs
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

Creates, updates, deletes, gets or lists a <code>model_customization_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_customization_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.model_customization_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_model_customization_job"
    values={[
        { label: 'get_model_customization_job', value: 'get_model_customization_job' },
        { label: 'list_model_customization_jobs', value: 'list_model_customization_jobs' }
    ]}
>
<TabItem value="get_model_customization_job">

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
    <td>Amazon Resource Name (ARN) of the base model. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;::foundation-model/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="client_request_token" /></td>
    <td><code>string</code></td>
    <td>The token that you specified in the CreateCustomizationJob request. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;-a-zA-Z0-9&#93;&#123;0,254&#125;&#91;a-zA-Z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time that the resource was created.</td>
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
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time that the resource transitioned to terminal state.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>Information about why the job failed.</td>
</tr>
<tr>
    <td><CopyableCode code="hyper_parameters" /></td>
    <td><code>object</code></td>
    <td>The hyperparameter values for the job. For details on the format for different models, see Custom model hyperparameters.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the customization job. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:model-customization-job/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the customization job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9\+\-\.&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time that the resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="output_data_config" /></td>
    <td><code>object</code></td>
    <td>S3 Location of the output data.</td>
</tr>
<tr>
    <td><CopyableCode code="output_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the output model. (pattern: &lt;code&gt;arn:aws(|-us-gov|-cn|-iso|-iso-b):bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:custom-model/(imported|&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_model_kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The custom model is encrypted at rest using this key. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the output model. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the job. A successful job transitions from in-progress to completed when the output model is ready to use. If the job failed, the failure message contains information about why the job failed. (InProgress, Completed, Failed, Stopping, Stopped)</td>
</tr>
<tr>
    <td><CopyableCode code="status_details" /></td>
    <td><code>object</code></td>
    <td>For a Distillation job, the details about the statuses of the sub-tasks of the customization job.</td>
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
    <td>The loss metric for each validator that you provided in the createjob request.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of a virtual private cloud (VPC). For more information, see Protect your data using Amazon Virtual Private Cloud and Amazon Web Services PrivateLink.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_model_customization_jobs">

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
    <td>Creation time of the custom model.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_model_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the custom model. (pattern: &lt;code&gt;arn:aws(|-us-gov|-cn|-iso|-iso-b):bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:custom-model/(imported|&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_model_name" /></td>
    <td><code>string</code></td>
    <td>Name of the custom model. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="customization_type" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to carry out continued pre-training of a model or whether to fine-tune it. For more information, see Custom models. (FINE_TUNING, CONTINUED_PRE_TRAINING, DISTILLATION, REINFORCEMENT_FINE_TUNING, IMPORTED)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time that the customization job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the customization job. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:model-customization-job/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>Name of the customization job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9\+\-\.&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time that the customization job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the customization job. (InProgress, Completed, Failed, Stopping, Stopped)</td>
</tr>
<tr>
    <td><CopyableCode code="status_details" /></td>
    <td><code>object</code></td>
    <td>Details about the status of the data processing sub-task of the job.</td>
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
    <td><a href="#get_model_customization_job"><CopyableCode code="get_model_customization_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_identifier"><code>job_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the properties associated with a model-customization job, including the status of the job. For more information, see Custom models in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#list_model_customization_jobs"><CopyableCode code="list_model_customization_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-creationTimeAfter"><code>creationTimeAfter</code></a>, <a href="#parameter-creationTimeBefore"><code>creationTimeBefore</code></a>, <a href="#parameter-statusEquals"><code>statusEquals</code></a>, <a href="#parameter-nameContains"><code>nameContains</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Returns a list of model customization jobs that you have submitted. You can filter the jobs to return based on one or more criteria. For more information, see Custom models in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#create_model_customization_job"><CopyableCode code="create_model_customization_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobName"><code>jobName</code></a>, <a href="#parameter-customModelName"><code>customModelName</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-baseModelIdentifier"><code>baseModelIdentifier</code></a>, <a href="#parameter-trainingDataConfig"><code>trainingDataConfig</code></a>, <a href="#parameter-outputDataConfig"><code>outputDataConfig</code></a></td>
    <td></td>
    <td>Creates a fine-tuning job to customize a base model. You specify the base foundation model and the location of the training data. After the model-customization job completes successfully, your custom model resource will be ready to use. Amazon Bedrock returns validation loss metrics and output generations after the job completes. For information on the format of training and validation data, see Prepare the datasets. Model-customization jobs are asynchronous and the completion time depends on the base model and the training/validation data size. To monitor a job, use the GetModelCustomizationJob operation to retrieve the job status. For more information, see Custom models in the Amazon Bedrock User Guide.</td>
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
<tr id="parameter-job_identifier">
    <td><CopyableCode code="job_identifier" /></td>
    <td><code>string</code></td>
    <td>Identifier for the customization job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-creationTimeAfter">
    <td><CopyableCode code="creationTimeAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Return customization jobs created after the specified time.</td>
</tr>
<tr id="parameter-creationTimeBefore">
    <td><CopyableCode code="creationTimeBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Return customization jobs created before the specified time.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nameContains">
    <td><CopyableCode code="nameContains" /></td>
    <td><code>string</code></td>
    <td>Return customization jobs only if the job name contains these characters.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by in the returned list of jobs.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order of the results.</td>
</tr>
<tr id="parameter-statusEquals">
    <td><CopyableCode code="statusEquals" /></td>
    <td><code>string</code></td>
    <td>Return customization jobs with the specified status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_model_customization_job"
    values={[
        { label: 'get_model_customization_job', value: 'get_model_customization_job' },
        { label: 'list_model_customization_jobs', value: 'list_model_customization_jobs' }
    ]}
>
<TabItem value="get_model_customization_job">

Retrieves the properties associated with a model-customization job, including the status of the job. For more information, see Custom models in the Amazon Bedrock User Guide.

```sql
SELECT
base_model_arn,
client_request_token,
creation_time,
customization_config,
customization_type,
end_time,
failure_message,
hyper_parameters,
job_arn,
job_name,
last_modified_time,
output_data_config,
output_model_arn,
output_model_kms_key_arn,
output_model_name,
role_arn,
status,
status_details,
training_data_config,
training_metrics,
validation_data_config,
validation_metrics,
vpc_config
FROM aws.bedrock.model_customization_jobs
WHERE job_identifier = '{{ job_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_model_customization_jobs">

Returns a list of model customization jobs that you have submitted. You can filter the jobs to return based on one or more criteria. For more information, see Custom models in the Amazon Bedrock User Guide.

```sql
SELECT
base_model_arn,
creation_time,
custom_model_arn,
custom_model_name,
customization_type,
end_time,
job_arn,
job_name,
last_modified_time,
status,
status_details
FROM aws.bedrock.model_customization_jobs
WHERE region = '{{ region }}' -- required
AND creationTimeAfter = '{{ creationTimeAfter }}'
AND creationTimeBefore = '{{ creationTimeBefore }}'
AND statusEquals = '{{ statusEquals }}'
AND nameContains = '{{ nameContains }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_model_customization_job"
    values={[
        { label: 'create_model_customization_job', value: 'create_model_customization_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_model_customization_job">

Creates a fine-tuning job to customize a base model. You specify the base foundation model and the location of the training data. After the model-customization job completes successfully, your custom model resource will be ready to use. Amazon Bedrock returns validation loss metrics and output generations after the job completes. For information on the format of training and validation data, see Prepare the datasets. Model-customization jobs are asynchronous and the completion time depends on the base model and the training/validation data size. To monitor a job, use the GetModelCustomizationJob operation to retrieve the job status. For more information, see Custom models in the Amazon Bedrock User Guide.

```sql
INSERT INTO aws.bedrock.model_customization_jobs (
jobName,
customModelName,
roleArn,
clientRequestToken,
baseModelIdentifier,
customizationType,
customModelKmsKeyId,
jobTags,
customModelTags,
trainingDataConfig,
validationDataConfig,
outputDataConfig,
hyperParameters,
vpcConfig,
customizationConfig,
region
)
SELECT 
'{{ jobName }}' /* required */,
'{{ customModelName }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ clientRequestToken }}',
'{{ baseModelIdentifier }}' /* required */,
'{{ customizationType }}',
'{{ customModelKmsKeyId }}',
'{{ jobTags }}',
'{{ customModelTags }}',
'{{ trainingDataConfig }}' /* required */,
'{{ validationDataConfig }}',
'{{ outputDataConfig }}' /* required */,
'{{ hyperParameters }}',
'{{ vpcConfig }}',
'{{ customizationConfig }}',
'{{ region }}'
RETURNING
job_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: model_customization_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the model_customization_jobs resource.
    - name: jobName
      value: "{{ jobName }}"
    - name: customModelName
      value: "{{ customModelName }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: baseModelIdentifier
      value: "{{ baseModelIdentifier }}"
    - name: customizationType
      value: "{{ customizationType }}"
      valid_values: ['FINE_TUNING', 'CONTINUED_PRE_TRAINING', 'DISTILLATION', 'REINFORCEMENT_FINE_TUNING', 'IMPORTED']
    - name: customModelKmsKeyId
      value: "{{ customModelKmsKeyId }}"
    - name: jobTags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: customModelTags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: trainingDataConfig
      description: |
        S3 Location of the training data.
      value:
        s3Uri: "{{ s3Uri }}"
        invocationLogsConfig:
          usePromptResponse: {{ usePromptResponse }}
          invocationLogSource:
            s3Uri: "{{ s3Uri }}"
          requestMetadataFilters:
            equals: "{{ equals }}"
            notEquals: "{{ notEquals }}"
            andAll:
              - equals: "{{ equals }}"
                notEquals: "{{ notEquals }}"
            orAll:
              - equals: "{{ equals }}"
                notEquals: "{{ notEquals }}"
    - name: validationDataConfig
      description: |
        Array of up to 10 validators.
      value:
        validators:
          - s3Uri: "{{ s3Uri }}"
    - name: outputDataConfig
      description: |
        S3 Location of the output data.
      value:
        s3Uri: "{{ s3Uri }}"
    - name: hyperParameters
      value: "{{ hyperParameters }}"
    - name: vpcConfig
      description: |
        The configuration of a virtual private cloud (VPC). For more information, see Protect your data using Amazon Virtual Private Cloud and Amazon Web Services PrivateLink.
      value:
        subnetIds:
          - "{{ subnetIds }}"
        securityGroupIds:
          - "{{ securityGroupIds }}"
    - name: customizationConfig
      description: |
        A model customization configuration
      value:
        distillationConfig:
          teacherModelConfig:
            teacherModelIdentifier: "{{ teacherModelIdentifier }}"
            maxResponseLengthForInference: {{ maxResponseLengthForInference }}
        rftConfig:
          graderConfig:
            lambdaGrader:
              lambdaArn: "{{ lambdaArn }}"
          hyperParameters:
            epochCount: {{ epochCount }}
            batchSize: {{ batchSize }}
            learningRate: {{ learningRate }}
            maxPromptLength: {{ maxPromptLength }}
            trainingSamplePerPrompt: {{ trainingSamplePerPrompt }}
            inferenceMaxTokens: {{ inferenceMaxTokens }}
            reasoningEffort: "{{ reasoningEffort }}"
            evalInterval: {{ evalInterval }}
`}</CodeBlock>

</TabItem>
</Tabs>
