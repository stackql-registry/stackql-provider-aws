--- 
title: model_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - model_versions
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

Creates, updates, deletes, gets or lists a <code>model_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lookoutequipment.model_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_model_version"
    values={[
        { label: 'describe_model_version', value: 'describe_model_version' },
        { label: 'list_model_versions', value: 'list_model_versions' }
    ]}
>
<TabItem value="describe_model_version">

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
    <td><CopyableCode code="AutoPromotionResult" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the model version was promoted to be the active version after retraining or if there was an error with or cancellation of the retraining. (MODEL_PROMOTED, MODEL_NOT_PROMOTED, RETRAINING_INTERNAL_ERROR, RETRAINING_CUSTOMER_ERROR, RETRAINING_CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="AutoPromotionResultReason" /></td>
    <td><code>string</code></td>
    <td>Indicates the reason for the AutoPromotionResult. For example, a model might not be promoted if its performance was worse than the active version, if there was an error during training, or if the retraining scheduler was using MANUAL promote mode. The model will be promoted in MANAGED promote mode if the performance is better than the previous model.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the time and date at which the machine learning model version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataPreProcessingConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration is the TargetSamplingRate, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the TargetSamplingRate is 1 minute. When providing a value for the TargetSamplingRate, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore PT1S, the value for a 15 minute rate is PT15M, and the value for a 1 hour rate is PT1H</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset used to train the model version. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:dataset\/&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetName" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset used to train the model version. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationDataEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date on which the data in the evaluation set began being gathered. If you imported the version, this is the date that the evaluation set data in the source version finished being gathered.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationDataStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date on which the data in the evaluation set began being gathered. If you imported the version, this is the date that the evaluation set data in the source version began being gathered.</td>
</tr>
<tr>
    <td><CopyableCode code="FailedReason" /></td>
    <td><code>string</code></td>
    <td>The failure message if the training of the model version failed. (pattern: &lt;code&gt;&#91;\P&#123;M&#125;\p&#123;M&#125;&#93;&#123;1,5000&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ImportJobEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the import job completed. This field appears if the model version was imported.</td>
</tr>
<tr>
    <td><CopyableCode code="ImportJobStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the import job began. This field appears if the model version was imported.</td>
</tr>
<tr>
    <td><CopyableCode code="ImportedDataSizeInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size in bytes of the imported data. This field appears if the model version was imported.</td>
</tr>
<tr>
    <td><CopyableCode code="LabelsInputConfiguration" /></td>
    <td><code>object</code></td>
    <td>Contains the configuration information for the S3 location being used to hold label data.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the last time the machine learning model version was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the parent machine learning model that this version belong to. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:model\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ModelDiagnosticsOutputConfiguration" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location where Amazon Lookout for Equipment saves the pointwise model diagnostics for the model version.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelDiagnosticsResultsObject" /></td>
    <td><code>object</code></td>
    <td>Contains information about an S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelMetrics" /></td>
    <td><code>string</code></td>
    <td>Shows an aggregated summary, in JSON format, of the model's performance within the evaluation time range. These metrics are created when evaluating the model.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelName" /></td>
    <td><code>string</code></td>
    <td>The name of the machine learning model that this version belongs to. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ModelQuality" /></td>
    <td><code>string</code></td>
    <td>Provides a quality assessment for a model that uses labels. If Lookout for Equipment determines that the model quality is poor based on training metrics, the value is POOR_QUALITY_DETECTED. Otherwise, the value is QUALITY_THRESHOLD_MET. If the model is unlabeled, the model quality can't be assessed and the value of ModelQuality is CANNOT_DETERMINE_QUALITY. In this situation, you can get a model quality assessment by adding labels to the input dataset and retraining the model. For information about using labels with your models, see Understanding labeling. For information about improving the quality of a model, see Best practices with Amazon Lookout for Equipment. (QUALITY_THRESHOLD_MET, CANNOT_DETERMINE_QUALITY, POOR_QUALITY_DETECTED)</td>
</tr>
<tr>
    <td><CopyableCode code="ModelVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the machine learning model.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelVersionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model version. (pattern: &lt;code&gt;^arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:model\/&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;\/.+\/model-version\/&#91;0-9&#93;&#123;1,&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OffCondition" /></td>
    <td><code>string</code></td>
    <td>Indicates that the asset associated with this sensor has been shut off. As long as this condition is met, Lookout for Equipment will not use data from this asset for training, evaluation, or inference.</td>
</tr>
<tr>
    <td><CopyableCode code="PriorModelMetrics" /></td>
    <td><code>string</code></td>
    <td>If the model version was retrained, this field shows a summary of the performance of the prior model on the new training range. You can use the information in this JSON-formatted object to compare the new model version and the prior model version.</td>
</tr>
<tr>
    <td><CopyableCode code="RetrainingAvailableDataInDays" /></td>
    <td><code>integer</code></td>
    <td>Indicates the number of days of data used in the most recent scheduled retraining run.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the role that was used to train the model version. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Schema" /></td>
    <td><code>string</code></td>
    <td>The schema of the data used to train the model version.</td>
</tr>
<tr>
    <td><CopyableCode code="ServerSideKmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the KMS key key used to encrypt model version data by Amazon Lookout for Equipment. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:kms:&#91;a-z0-9\-&#93;*:\d&#123;12&#125;:&#91;\w\-\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceModelVersionArn" /></td>
    <td><code>string</code></td>
    <td>If model version was imported, then this field is the arn of the source model version. (pattern: &lt;code&gt;^arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:model\/&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;\/.+\/model-version\/&#91;0-9&#93;&#123;1,&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>Indicates whether this model version was created by training or by importing. (TRAINING, RETRAINING, IMPORT)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the model version. (IN_PROGRESS, SUCCESS, FAILED, IMPORT_IN_PROGRESS, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingDataEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date on which the training data finished being gathered. If you imported the version, this is the date that the training data in the source version finished being gathered.</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingDataStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date on which the training data began being gathered. If you imported the version, this is the date that the training data in the source version began being gathered.</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingExecutionEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the training of the version completed.</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingExecutionStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the training of the version began.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_model_versions">

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
    <td><CopyableCode code="ModelVersionSummaries" /></td>
    <td><code>array</code></td>
    <td>Provides information on the specified model version, including the created time, model and dataset ARNs, and status. If you don't supply the ModelName request parameter, or if you supply the name of a model that doesn't exist, ListModelVersions returns an empty array in ModelVersionSummaries.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results exceeds the limit that the response can display, the response returns an opaque pagination token indicating where to continue the listing of machine learning model versions. Use this token in the NextToken field in the request to list the next page of results. (pattern: &lt;code&gt;\p&#123;ASCII&#125;&#123;0,8192&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_model_version"><CopyableCode code="describe_model_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific machine learning model version.</td>
</tr>
<tr>
    <td><a href="#list_model_versions"><CopyableCode code="list_model_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Generates a list of all model versions for a given model, including the model version, model version ARN, and status. To list a subset of versions, use the MaxModelVersion and MinModelVersion fields.</td>
</tr>
<tr>
    <td><a href="#update_active_model_version"><CopyableCode code="update_active_model_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ModelName"><code>ModelName</code></a>, <a href="#parameter-ModelVersion"><code>ModelVersion</code></a></td>
    <td></td>
    <td>Sets the active model version for a given machine learning model.</td>
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
    defaultValue="describe_model_version"
    values={[
        { label: 'describe_model_version', value: 'describe_model_version' },
        { label: 'list_model_versions', value: 'list_model_versions' }
    ]}
>
<TabItem value="describe_model_version">

Retrieves information about a specific machine learning model version.

```sql
SELECT
AutoPromotionResult,
AutoPromotionResultReason,
CreatedAt,
DataPreProcessingConfiguration,
DatasetArn,
DatasetName,
EvaluationDataEndTime,
EvaluationDataStartTime,
FailedReason,
ImportJobEndTime,
ImportJobStartTime,
ImportedDataSizeInBytes,
LabelsInputConfiguration,
LastUpdatedTime,
ModelArn,
ModelDiagnosticsOutputConfiguration,
ModelDiagnosticsResultsObject,
ModelMetrics,
ModelName,
ModelQuality,
ModelVersion,
ModelVersionArn,
OffCondition,
PriorModelMetrics,
RetrainingAvailableDataInDays,
RoleArn,
Schema,
ServerSideKmsKeyId,
SourceModelVersionArn,
SourceType,
Status,
TrainingDataEndTime,
TrainingDataStartTime,
TrainingExecutionEndTime,
TrainingExecutionStartTime
FROM aws.lookoutequipment.model_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_model_versions">

Generates a list of all model versions for a given model, including the model version, model version ARN, and status. To list a subset of versions, use the MaxModelVersion and MinModelVersion fields.

```sql
SELECT
ModelVersionSummaries,
NextToken
FROM aws.lookoutequipment.model_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_active_model_version"
    values={[
        { label: 'update_active_model_version', value: 'update_active_model_version' }
    ]}
>
<TabItem value="update_active_model_version">

Sets the active model version for a given machine learning model.

```sql
UPDATE aws.lookoutequipment.model_versions
SET 
ModelName = '{{ ModelName }}',
ModelVersion = {{ ModelVersion }}
WHERE 
region = '{{ region }}' --required
AND ModelName = '{{ ModelName }}' --required
AND ModelVersion = '{{ ModelVersion }}' --required
RETURNING
CurrentActiveVersion,
CurrentActiveVersionArn,
ModelArn,
ModelName,
PreviousActiveVersion,
PreviousActiveVersionArn;
```
</TabItem>
</Tabs>
