--- 
title: trained_models
hide_title: false
hide_table_of_contents: false
keywords:
  - trained_models
  - cleanroomsml
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

Creates, updates, deletes, gets or lists a <code>trained_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trained_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanroomsml.trained_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_trained_model"
    values={[
        { label: 'get_trained_model', value: 'get_trained_model' },
        { label: 'list_trained_models', value: 'list_trained_models' }
    ]}
>
<TabItem value="get_trained_model">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the trained model. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_identifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the trained model. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configured_model_algorithm_association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm association that was used to create the trained model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/configured-model-algorithm-association/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the trained model was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_channels" /></td>
    <td><code>array</code></td>
    <td>The data channels that were used for the trained model.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the trained model. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>The EC2 environment that was used to create the trained model.</td>
</tr>
<tr>
    <td><CopyableCode code="hyperparameters" /></td>
    <td><code>object</code></td>
    <td>The hyperparameters that were used to create the trained model.</td>
</tr>
<tr>
    <td><CopyableCode code="incremental_training_data_channels" /></td>
    <td><code>array</code></td>
    <td>Information about the incremental training data channels used to create this version of the trained model. This includes details about the base model that was used for incremental training and the channel configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the trained ML model and associated data. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:kms:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:key/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logs_status" /></td>
    <td><code>string</code></td>
    <td>The logs status for the trained model. (PUBLISH_SUCCEEDED, PUBLISH_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="logs_status_details" /></td>
    <td><code>string</code></td>
    <td>Details about the logs status for the trained model.</td>
</tr>
<tr>
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the member that created the trained model. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_status" /></td>
    <td><code>string</code></td>
    <td>The status of the model metrics. (PUBLISH_SUCCEEDED, PUBLISH_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_status_details" /></td>
    <td><code>string</code></td>
    <td>Details about the metrics status for the trained model.</td>
</tr>
<tr>
    <td><CopyableCode code="ml_model_training_payer_account_id" /></td>
    <td><code>string</code></td>
    <td>The account ID of the member that is responsible for paying for model training costs. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_config" /></td>
    <td><code>object</code></td>
    <td>The EC2 resource configuration that was used to create the trained model.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the trained model. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED, INACTIVE, CANCEL_PENDING, CANCEL_IN_PROGRESS, CANCEL_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_details" /></td>
    <td><code>object</code></td>
    <td>Details about the status of a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="stopping_condition" /></td>
    <td><code>object</code></td>
    <td>The stopping condition that was used to terminate model training.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The optional metadata that you applied to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags: Maximum number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8. If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</td>
</tr>
<tr>
    <td><CopyableCode code="trained_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trained model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/trained-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="training_container_image_digest" /></td>
    <td><code>string</code></td>
    <td>Information about the training image container.</td>
</tr>
<tr>
    <td><CopyableCode code="training_input_mode" /></td>
    <td><code>string</code></td>
    <td>The input mode that was used for accessing the training data when this trained model was created. This indicates how the training data was made available to the training algorithm. (File, FastFile, Pipe)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the trained model was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version_identifier" /></td>
    <td><code>string</code></td>
    <td>The version identifier of the trained model. This unique identifier distinguishes this version from other versions of the same trained model. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_trained_models">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the trained model. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_identifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the trained model. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configured_model_algorithm_association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm association that was used to create this trained model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/configured-model-algorithm-association/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the trained model was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the trained model. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="incremental_training_data_channels" /></td>
    <td><code>array</code></td>
    <td>Information about the incremental training data channels used to create this version of the trained model.</td>
</tr>
<tr>
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the member that created the trained model. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ml_model_training_payer_account_id" /></td>
    <td><code>string</code></td>
    <td>The account ID of the member that is responsible for paying for model training costs. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the trained model. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED, INACTIVE, CANCEL_PENDING, CANCEL_IN_PROGRESS, CANCEL_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="trained_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trained model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/trained-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the trained model was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version_identifier" /></td>
    <td><code>string</code></td>
    <td>The version identifier of this trained model version. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_trained_model"><CopyableCode code="get_trained_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-trained_model_arn"><code>trained_model_arn</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-versionIdentifier"><code>versionIdentifier</code></a></td>
    <td>Returns information about a trained model.</td>
</tr>
<tr>
    <td><a href="#list_trained_models"><CopyableCode code="list_trained_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of trained models.</td>
</tr>
<tr>
    <td><a href="#create_trained_model"><CopyableCode code="create_trained_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-configuredModelAlgorithmAssociationArn"><code>configuredModelAlgorithmAssociationArn</code></a>, <a href="#parameter-resourceConfig"><code>resourceConfig</code></a>, <a href="#parameter-dataChannels"><code>dataChannels</code></a></td>
    <td></td>
    <td>Creates a trained model from an associated configured model algorithm using data from any member of the collaboration.</td>
</tr>
<tr>
    <td><a href="#delete_trained_model_output"><CopyableCode code="delete_trained_model_output" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-trained_model_arn"><code>trained_model_arn</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-versionIdentifier"><code>versionIdentifier</code></a></td>
    <td>Deletes the model artifacts stored by the service.</td>
</tr>
<tr>
    <td><a href="#cancel_trained_model"><CopyableCode code="cancel_trained_model" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-trained_model_arn"><code>trained_model_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-versionIdentifier"><code>versionIdentifier</code></a></td>
    <td>Submits a request to cancel the trained model job.</td>
</tr>
<tr>
    <td><a href="#cancel_trained_model_inference_job"><CopyableCode code="cancel_trained_model_inference_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-trained_model_inference_job_arn"><code>trained_model_inference_job_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Submits a request to cancel a trained model inference job.</td>
</tr>
<tr>
    <td><a href="#start_trained_model_inference_job"><CopyableCode code="start_trained_model_inference_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-trainedModelArn"><code>trainedModelArn</code></a>, <a href="#parameter-resourceConfig"><code>resourceConfig</code></a>, <a href="#parameter-outputConfiguration"><code>outputConfiguration</code></a>, <a href="#parameter-dataSource"><code>dataSource</code></a></td>
    <td></td>
    <td>Defines the information necessary to begin a trained model inference job.</td>
</tr>
<tr>
    <td><a href="#start_trained_model_export_job"><CopyableCode code="start_trained_model_export_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-trained_model_arn"><code>trained_model_arn</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-outputConfiguration"><code>outputConfiguration</code></a></td>
    <td></td>
    <td>Provides the information necessary to start a trained model export job.</td>
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
<tr id="parameter-membership_identifier">
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the member that is receiving the exported trained model artifacts.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-trained_model_arn">
    <td><CopyableCode code="trained_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trained model that you want to export.</td>
</tr>
<tr id="parameter-trained_model_inference_job_arn">
    <td><CopyableCode code="trained_model_inference_job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trained model inference job that you want to cancel.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum size of the results that is returned per call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token value retrieved from a previous call to access the next page of results.</td>
</tr>
<tr id="parameter-versionIdentifier">
    <td><CopyableCode code="versionIdentifier" /></td>
    <td><code>string</code></td>
    <td>The version identifier of the trained model to cancel. This parameter allows you to specify which version of the trained model you want to cancel when multiple versions exist. If versionIdentifier is not specified, the base model will be cancelled.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_trained_model"
    values={[
        { label: 'get_trained_model', value: 'get_trained_model' },
        { label: 'list_trained_models', value: 'list_trained_models' }
    ]}
>
<TabItem value="get_trained_model">

Returns information about a trained model.

```sql
SELECT
name,
collaboration_identifier,
configured_model_algorithm_association_arn,
create_time,
data_channels,
description,
environment,
hyperparameters,
incremental_training_data_channels,
kms_key_arn,
logs_status,
logs_status_details,
membership_identifier,
metrics_status,
metrics_status_details,
ml_model_training_payer_account_id,
resource_config,
status,
status_details,
stopping_condition,
tags,
trained_model_arn,
training_container_image_digest,
training_input_mode,
update_time,
version_identifier
FROM aws.cleanroomsml.trained_models
WHERE trained_model_arn = '{{ trained_model_arn }}' -- required
AND membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
AND versionIdentifier = '{{ versionIdentifier }}'
;
```
</TabItem>
<TabItem value="list_trained_models">

Returns a list of trained models.

```sql
SELECT
name,
collaboration_identifier,
configured_model_algorithm_association_arn,
create_time,
description,
incremental_training_data_channels,
membership_identifier,
ml_model_training_payer_account_id,
status,
trained_model_arn,
update_time,
version_identifier
FROM aws.cleanroomsml.trained_models
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_trained_model"
    values={[
        { label: 'create_trained_model', value: 'create_trained_model' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_trained_model">

Creates a trained model from an associated configured model algorithm using data from any member of the collaboration.

```sql
INSERT INTO aws.cleanroomsml.trained_models (
name,
configuredModelAlgorithmAssociationArn,
hyperparameters,
environment,
resourceConfig,
stoppingCondition,
incrementalTrainingDataChannels,
dataChannels,
trainingInputMode,
description,
kmsKeyArn,
tags,
mlModelTrainingPayerAccountId,
membership_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ configuredModelAlgorithmAssociationArn }}' /* required */,
'{{ hyperparameters }}',
'{{ environment }}',
'{{ resourceConfig }}' /* required */,
'{{ stoppingCondition }}',
'{{ incrementalTrainingDataChannels }}',
'{{ dataChannels }}' /* required */,
'{{ trainingInputMode }}',
'{{ description }}',
'{{ kmsKeyArn }}',
'{{ tags }}',
'{{ mlModelTrainingPayerAccountId }}',
'{{ membership_identifier }}',
'{{ region }}'
RETURNING
trained_model_arn,
version_identifier
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: trained_models
  props:
    - name: membership_identifier
      value: "{{ membership_identifier }}"
      description: Required parameter for the trained_models resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the trained_models resource.
    - name: name
      value: "{{ name }}"
    - name: configuredModelAlgorithmAssociationArn
      value: "{{ configuredModelAlgorithmAssociationArn }}"
    - name: hyperparameters
      value: "{{ hyperparameters }}"
    - name: environment
      value: "{{ environment }}"
    - name: resourceConfig
      description: |
        Information about the EC2 resources that are used to train the model.
      value:
        instanceCount: {{ instanceCount }}
        instanceType: "{{ instanceType }}"
        volumeSizeInGB: {{ volumeSizeInGB }}
    - name: stoppingCondition
      description: |
        The criteria used to stop model training.
      value:
        maxRuntimeInSeconds: {{ maxRuntimeInSeconds }}
    - name: incrementalTrainingDataChannels
      value:
        - trainedModelArn: "{{ trainedModelArn }}"
          versionIdentifier: "{{ versionIdentifier }}"
          channelName: "{{ channelName }}"
    - name: dataChannels
      value:
        - mlInputChannelArn: "{{ mlInputChannelArn }}"
          channelName: "{{ channelName }}"
          s3DataDistributionType: "{{ s3DataDistributionType }}"
    - name: trainingInputMode
      value: "{{ trainingInputMode }}"
      valid_values: ['File', 'FastFile', 'Pipe']
    - name: description
      value: "{{ description }}"
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
    - name: tags
      value: "{{ tags }}"
    - name: mlModelTrainingPayerAccountId
      value: "{{ mlModelTrainingPayerAccountId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_trained_model_output"
    values={[
        { label: 'delete_trained_model_output', value: 'delete_trained_model_output' }
    ]}
>
<TabItem value="delete_trained_model_output">

Deletes the model artifacts stored by the service.

```sql
DELETE FROM aws.cleanroomsml.trained_models
WHERE trained_model_arn = '{{ trained_model_arn }}' --required
AND membership_identifier = '{{ membership_identifier }}' --required
AND region = '{{ region }}' --required
AND versionIdentifier = '{{ versionIdentifier }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_trained_model"
    values={[
        { label: 'cancel_trained_model', value: 'cancel_trained_model' },
        { label: 'cancel_trained_model_inference_job', value: 'cancel_trained_model_inference_job' },
        { label: 'start_trained_model_inference_job', value: 'start_trained_model_inference_job' },
        { label: 'start_trained_model_export_job', value: 'start_trained_model_export_job' }
    ]}
>
<TabItem value="cancel_trained_model">

Submits a request to cancel the trained model job.

```sql
EXEC aws.cleanroomsml.trained_models.cancel_trained_model 
@membership_identifier='{{ membership_identifier }}' --required, 
@trained_model_arn='{{ trained_model_arn }}' --required, 
@region='{{ region }}' --required, 
@versionIdentifier='{{ versionIdentifier }}'
;
```
</TabItem>
<TabItem value="cancel_trained_model_inference_job">

Submits a request to cancel a trained model inference job.

```sql
EXEC aws.cleanroomsml.trained_models.cancel_trained_model_inference_job 
@membership_identifier='{{ membership_identifier }}' --required, 
@trained_model_inference_job_arn='{{ trained_model_inference_job_arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="start_trained_model_inference_job">

Defines the information necessary to begin a trained model inference job.

```sql
EXEC aws.cleanroomsml.trained_models.start_trained_model_inference_job 
@membership_identifier='{{ membership_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"name": "{{ name }}", 
"trainedModelArn": "{{ trainedModelArn }}", 
"trainedModelVersionIdentifier": "{{ trainedModelVersionIdentifier }}", 
"configuredModelAlgorithmAssociationArn": "{{ configuredModelAlgorithmAssociationArn }}", 
"resourceConfig": "{{ resourceConfig }}", 
"outputConfiguration": "{{ outputConfiguration }}", 
"dataSource": "{{ dataSource }}", 
"description": "{{ description }}", 
"containerExecutionParameters": "{{ containerExecutionParameters }}", 
"environment": "{{ environment }}", 
"kmsKeyArn": "{{ kmsKeyArn }}", 
"tags": "{{ tags }}", 
"mlModelInferencePayerAccountId": "{{ mlModelInferencePayerAccountId }}"
}'
;
```
</TabItem>
<TabItem value="start_trained_model_export_job">

Provides the information necessary to start a trained model export job.

```sql
EXEC aws.cleanroomsml.trained_models.start_trained_model_export_job 
@trained_model_arn='{{ trained_model_arn }}' --required, 
@membership_identifier='{{ membership_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"name": "{{ name }}", 
"trainedModelVersionIdentifier": "{{ trainedModelVersionIdentifier }}", 
"outputConfiguration": "{{ outputConfiguration }}", 
"description": "{{ description }}"
}'
;
```
</TabItem>
</Tabs>
