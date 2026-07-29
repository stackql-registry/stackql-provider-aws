--- 
title: models
hide_title: false
hide_table_of_contents: false
keywords:
  - models
  - lookoutequipment
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

Creates, updates, deletes, gets or lists a <code>models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lookoutequipment.models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_model"
    values={[
        { label: 'describe_model', value: 'describe_model' },
        { label: 'list_models', value: 'list_models' }
    ]}
>
<TabItem value="describe_model">

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
    <td><CopyableCode code="accumulated_inference_data_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the end time of the inference data that has been accumulated.</td>
</tr>
<tr>
    <td><CopyableCode code="accumulated_inference_data_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the start time of the inference data that has been accumulated.</td>
</tr>
<tr>
    <td><CopyableCode code="active_model_version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The name of the model version used by the inference schedular when running a scheduled inference execution.</td>
</tr>
<tr>
    <td><CopyableCode code="active_model_version_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model version used by the inference scheduler when running a scheduled inference execution. (pattern: &lt;code&gt;^arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:model\/&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;\/.+\/model-version\/&#91;0-9&#93;&#123;1,&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the time and date at which the machine learning model was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_pre_processing_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration is the TargetSamplingRate, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the TargetSamplingRate is 1 minute. When providing a value for the TargetSamplingRate, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore PT1S, the value for a 15 minute rate is PT15M, and the value for a 1 hour rate is PT1H</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resouce Name (ARN) of the dataset used to create the machine learning model being described. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:dataset\/&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset being used by the machine learning being described. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_data_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the time reference in the dataset that was used to end the subset of evaluation data for the machine learning model.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_data_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the time reference in the dataset that was used to begin the subset of evaluation data for the machine learning model.</td>
</tr>
<tr>
    <td><CopyableCode code="failed_reason" /></td>
    <td><code>string</code></td>
    <td>If the training of the machine learning model failed, this indicates the reason for that failure. (pattern: &lt;code&gt;&#91;\P&#123;M&#125;\p&#123;M&#125;&#93;&#123;1,5000&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="import_job_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the import job was completed. This field appears if the active model version was imported.</td>
</tr>
<tr>
    <td><CopyableCode code="import_job_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the import job was started. This field appears if the active model version was imported.</td>
</tr>
<tr>
    <td><CopyableCode code="labels_input_configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies configuration information about the labels input, including its S3 location.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the last time the machine learning model was updated. The type of update is not specified.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_scheduled_retraining_available_data_in_days" /></td>
    <td><code>integer</code></td>
    <td>Indicates the number of days of data used in the most recent scheduled retraining run.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_scheduled_retraining_failed_reason" /></td>
    <td><code>string</code></td>
    <td>If the model version was generated by retraining and the training failed, this indicates the reason for that failure. (pattern: &lt;code&gt;&#91;\P&#123;M&#125;\p&#123;M&#125;&#93;&#123;1,5000&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="latest_scheduled_retraining_model_version" /></td>
    <td><code>integer (int64)</code></td>
    <td>Indicates the most recent model version that was generated by retraining.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_scheduled_retraining_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the start time of the most recent scheduled retraining run.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_scheduled_retraining_status" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of the most recent scheduled retraining run. (IN_PROGRESS, SUCCESS, FAILED, IMPORT_IN_PROGRESS, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the machine learning model being described. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:model\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_diagnostics_output_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration information for the model's pointwise model diagnostics.</td>
</tr>
<tr>
    <td><CopyableCode code="model_metrics" /></td>
    <td><code>string</code></td>
    <td>The Model Metrics show an aggregated summary of the model's performance within the evaluation time range. This is the JSON content of the metrics created when evaluating the model.</td>
</tr>
<tr>
    <td><CopyableCode code="model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the machine learning model being described. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_quality" /></td>
    <td><code>string</code></td>
    <td>Provides a quality assessment for a model that uses labels. If Lookout for Equipment determines that the model quality is poor based on training metrics, the value is POOR_QUALITY_DETECTED. Otherwise, the value is QUALITY_THRESHOLD_MET. If the model is unlabeled, the model quality can't be assessed and the value of ModelQuality is CANNOT_DETERMINE_QUALITY. In this situation, you can get a model quality assessment by adding labels to the input dataset and retraining the model. For information about using labels with your models, see Understanding labeling. For information about improving the quality of a model, see Best practices with Amazon Lookout for Equipment. (QUALITY_THRESHOLD_MET, CANNOT_DETERMINE_QUALITY, POOR_QUALITY_DETECTED)</td>
</tr>
<tr>
    <td><CopyableCode code="model_version_activated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the active model version was activated.</td>
</tr>
<tr>
    <td><CopyableCode code="next_scheduled_retraining_start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the date and time that the next scheduled retraining run will start on. Lookout for Equipment truncates the time you provide to the nearest UTC day.</td>
</tr>
<tr>
    <td><CopyableCode code="off_condition" /></td>
    <td><code>string</code></td>
    <td>Indicates that the asset associated with this sensor has been shut off. As long as this condition is met, Lookout for Equipment will not use data from this asset for training, evaluation, or inference.</td>
</tr>
<tr>
    <td><CopyableCode code="previous_active_model_version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The model version that was set as the active model version prior to the current active model version.</td>
</tr>
<tr>
    <td><CopyableCode code="previous_active_model_version_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the model version that was set as the active model version prior to the current active model version. (pattern: &lt;code&gt;^arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:model\/&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;\/.+\/model-version\/&#91;0-9&#93;&#123;1,&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="previous_model_version_activated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the previous active model version was activated.</td>
</tr>
<tr>
    <td><CopyableCode code="prior_model_metrics" /></td>
    <td><code>string</code></td>
    <td>If the model version was retrained, this field shows a summary of the performance of the prior model on the new training range. You can use the information in this JSON-formatted object to compare the new model version and the prior model version.</td>
</tr>
<tr>
    <td><CopyableCode code="retraining_scheduler_status" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of the retraining scheduler. (PENDING, RUNNING, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a role with permission to access the data source for the machine learning model being described. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>A JSON description of the data that is in each time series dataset, including names, column names, and data types.</td>
</tr>
<tr>
    <td><CopyableCode code="server_side_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>Provides the identifier of the KMS key used to encrypt model data by Amazon Lookout for Equipment. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:kms:&#91;a-z0-9\-&#93;*:\d&#123;12&#125;:&#91;\w\-\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_model_version_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source model version. This field appears if the active model version was imported. (pattern: &lt;code&gt;^arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:model\/&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;\/.+\/model-version\/&#91;0-9&#93;&#123;1,&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Specifies the current status of the model being described. Status describes the status of the most recent action of the model. (IN_PROGRESS, SUCCESS, FAILED, IMPORT_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="training_data_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the time reference in the dataset that was used to end the subset of training data for the machine learning model.</td>
</tr>
<tr>
    <td><CopyableCode code="training_data_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the time reference in the dataset that was used to begin the subset of training data for the machine learning model.</td>
</tr>
<tr>
    <td><CopyableCode code="training_execution_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the time at which the training of the machine learning model was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="training_execution_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the time at which the training of the machine learning model began.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_models">

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
    <td><CopyableCode code="model_summaries" /></td>
    <td><code>array</code></td>
    <td>Provides information on the specified model, including created time, model and dataset ARNs, and status.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>An opaque pagination token indicating where to continue the listing of machine learning models. (pattern: &lt;code&gt;\p&#123;ASCII&#125;&#123;0,8192&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_model"><CopyableCode code="describe_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a JSON containing the overall information about a specific machine learning model, including model name and ARN, dataset, training and evaluation information, status, and so on.</td>
</tr>
<tr>
    <td><a href="#list_models"><CopyableCode code="list_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Generates a list of all models in the account, including model name and ARN, dataset, and status.</td>
</tr>
<tr>
    <td><a href="#create_model"><CopyableCode code="create_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ModelName"><code>ModelName</code></a>, <a href="#parameter-DatasetName"><code>DatasetName</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Creates a machine learning model for data inference. A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred. Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy.</td>
</tr>
<tr>
    <td><a href="#update_model"><CopyableCode code="update_model" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ModelName"><code>ModelName</code></a></td>
    <td></td>
    <td>Updates a model in the account.</td>
</tr>
<tr>
    <td><a href="#delete_model"><CopyableCode code="delete_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a machine learning model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up.</td>
</tr>
<tr>
    <td><a href="#import_model_version"><CopyableCode code="import_model_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceModelVersionArn"><code>SourceModelVersionArn</code></a>, <a href="#parameter-DatasetName"><code>DatasetName</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Imports a model that has been trained successfully.</td>
</tr>
<tr>
    <td><a href="#start_retraining_scheduler"><CopyableCode code="start_retraining_scheduler" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ModelName"><code>ModelName</code></a></td>
    <td></td>
    <td>Starts a retraining scheduler.</td>
</tr>
<tr>
    <td><a href="#stop_retraining_scheduler"><CopyableCode code="stop_retraining_scheduler" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ModelName"><code>ModelName</code></a></td>
    <td></td>
    <td>Stops a retraining scheduler.</td>
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
    defaultValue="describe_model"
    values={[
        { label: 'describe_model', value: 'describe_model' },
        { label: 'list_models', value: 'list_models' }
    ]}
>
<TabItem value="describe_model">

Provides a JSON containing the overall information about a specific machine learning model, including model name and ARN, dataset, training and evaluation information, status, and so on.

```sql
SELECT
accumulated_inference_data_end_time,
accumulated_inference_data_start_time,
active_model_version,
active_model_version_arn,
created_at,
data_pre_processing_configuration,
dataset_arn,
dataset_name,
evaluation_data_end_time,
evaluation_data_start_time,
failed_reason,
import_job_end_time,
import_job_start_time,
labels_input_configuration,
last_updated_time,
latest_scheduled_retraining_available_data_in_days,
latest_scheduled_retraining_failed_reason,
latest_scheduled_retraining_model_version,
latest_scheduled_retraining_start_time,
latest_scheduled_retraining_status,
model_arn,
model_diagnostics_output_configuration,
model_metrics,
model_name,
model_quality,
model_version_activated_at,
next_scheduled_retraining_start_date,
off_condition,
previous_active_model_version,
previous_active_model_version_arn,
previous_model_version_activated_at,
prior_model_metrics,
retraining_scheduler_status,
role_arn,
schema,
server_side_kms_key_id,
source_model_version_arn,
status,
training_data_end_time,
training_data_start_time,
training_execution_end_time,
training_execution_start_time
FROM aws.lookoutequipment.models
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_models">

Generates a list of all models in the account, including model name and ARN, dataset, and status.

```sql
SELECT
model_summaries,
next_token
FROM aws.lookoutequipment.models
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_model"
    values={[
        { label: 'create_model', value: 'create_model' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_model">

Creates a machine learning model for data inference. A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred. Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy.

```sql
INSERT INTO aws.lookoutequipment.models (
ModelName,
DatasetName,
DatasetSchema,
LabelsInputConfiguration,
ClientToken,
TrainingDataStartTime,
TrainingDataEndTime,
EvaluationDataStartTime,
EvaluationDataEndTime,
RoleArn,
DataPreProcessingConfiguration,
ServerSideKmsKeyId,
Tags,
OffCondition,
ModelDiagnosticsOutputConfiguration,
region
)
SELECT 
'{{ ModelName }}' /* required */,
'{{ DatasetName }}' /* required */,
'{{ DatasetSchema }}',
'{{ LabelsInputConfiguration }}',
'{{ ClientToken }}' /* required */,
'{{ TrainingDataStartTime }}',
'{{ TrainingDataEndTime }}',
'{{ EvaluationDataStartTime }}',
'{{ EvaluationDataEndTime }}',
'{{ RoleArn }}',
'{{ DataPreProcessingConfiguration }}',
'{{ ServerSideKmsKeyId }}',
'{{ Tags }}',
'{{ OffCondition }}',
'{{ ModelDiagnosticsOutputConfiguration }}',
'{{ region }}'
RETURNING
model_arn,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: models
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the models resource.
    - name: ModelName
      value: "{{ ModelName }}"
      description: |
        The name for the machine learning model to be created.
    - name: DatasetName
      value: "{{ DatasetName }}"
      description: |
        The name of the dataset for the machine learning model being created.
    - name: DatasetSchema
      description: |
        The data schema for the machine learning model being created.
      value:
        InlineDataSchema: "{{ InlineDataSchema }}"
    - name: LabelsInputConfiguration
      description: |
        The input configuration for the labels being used for the machine learning model that's being created.
      value:
        S3InputConfiguration:
          Bucket: "{{ Bucket }}"
          Prefix: "{{ Prefix }}"
        LabelGroupName: "{{ LabelGroupName }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one.
    - name: TrainingDataStartTime
      value: "{{ TrainingDataStartTime }}"
      description: |
        Indicates the time reference in the dataset that should be used to begin the subset of training data for the machine learning model.
    - name: TrainingDataEndTime
      value: "{{ TrainingDataEndTime }}"
      description: |
        Indicates the time reference in the dataset that should be used to end the subset of training data for the machine learning model.
    - name: EvaluationDataStartTime
      value: "{{ EvaluationDataStartTime }}"
      description: |
        Indicates the time reference in the dataset that should be used to begin the subset of evaluation data for the machine learning model.
    - name: EvaluationDataEndTime
      value: "{{ EvaluationDataEndTime }}"
      description: |
        Indicates the time reference in the dataset that should be used to end the subset of evaluation data for the machine learning model.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of a role with permission to access the data source being used to create the machine learning model.
    - name: DataPreProcessingConfiguration
      description: |
        The configuration is the TargetSamplingRate, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the TargetSamplingRate is 1 minute. When providing a value for the TargetSamplingRate, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore PT1S, the value for a 15 minute rate is PT15M, and the value for a 1 hour rate is PT1H
      value:
        TargetSamplingRate: "{{ TargetSamplingRate }}"
    - name: ServerSideKmsKeyId
      value: "{{ ServerSideKmsKeyId }}"
      description: |
        Provides the identifier of the KMS key used to encrypt model data by Amazon Lookout for Equipment.
    - name: Tags
      description: |
        Any tags associated with the machine learning model being created.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: OffCondition
      value: "{{ OffCondition }}"
      description: |
        Indicates that the asset associated with this sensor has been shut off. As long as this condition is met, Lookout for Equipment will not use data from this asset for training, evaluation, or inference.
    - name: ModelDiagnosticsOutputConfiguration
      description: |
        The Amazon S3 location where you want Amazon Lookout for Equipment to save the pointwise model diagnostics. You must also specify the RoleArn request parameter.
      value:
        S3OutputConfiguration:
          Bucket: "{{ Bucket }}"
          Prefix: "{{ Prefix }}"
        KmsKeyId: "{{ KmsKeyId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_model"
    values={[
        { label: 'update_model', value: 'update_model' }
    ]}
>
<TabItem value="update_model">

Updates a model in the account.

```sql
UPDATE aws.lookoutequipment.models
SET 
ModelName = '{{ ModelName }}',
LabelsInputConfiguration = '{{ LabelsInputConfiguration }}',
RoleArn = '{{ RoleArn }}',
ModelDiagnosticsOutputConfiguration = '{{ ModelDiagnosticsOutputConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND ModelName = '{{ ModelName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_model"
    values={[
        { label: 'delete_model', value: 'delete_model' }
    ]}
>
<TabItem value="delete_model">

Deletes a machine learning model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up.

```sql
DELETE FROM aws.lookoutequipment.models
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import_model_version"
    values={[
        { label: 'import_model_version', value: 'import_model_version' },
        { label: 'start_retraining_scheduler', value: 'start_retraining_scheduler' },
        { label: 'stop_retraining_scheduler', value: 'stop_retraining_scheduler' }
    ]}
>
<TabItem value="import_model_version">

Imports a model that has been trained successfully.

```sql
EXEC aws.lookoutequipment.models.import_model_version 
@region='{{ region }}' --required 
@@json=
'{
"SourceModelVersionArn": "{{ SourceModelVersionArn }}", 
"ModelName": "{{ ModelName }}", 
"DatasetName": "{{ DatasetName }}", 
"LabelsInputConfiguration": "{{ LabelsInputConfiguration }}", 
"ClientToken": "{{ ClientToken }}", 
"RoleArn": "{{ RoleArn }}", 
"ServerSideKmsKeyId": "{{ ServerSideKmsKeyId }}", 
"Tags": "{{ Tags }}", 
"InferenceDataImportStrategy": "{{ InferenceDataImportStrategy }}"
}'
;
```
</TabItem>
<TabItem value="start_retraining_scheduler">

Starts a retraining scheduler.

```sql
EXEC aws.lookoutequipment.models.start_retraining_scheduler 
@region='{{ region }}' --required 
@@json=
'{
"ModelName": "{{ ModelName }}"
}'
;
```
</TabItem>
<TabItem value="stop_retraining_scheduler">

Stops a retraining scheduler.

```sql
EXEC aws.lookoutequipment.models.stop_retraining_scheduler 
@region='{{ region }}' --required 
@@json=
'{
"ModelName": "{{ ModelName }}"
}'
;
```
</TabItem>
</Tabs>
