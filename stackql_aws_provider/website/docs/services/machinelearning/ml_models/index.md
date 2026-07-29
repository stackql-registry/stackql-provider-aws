--- 
title: ml_models
hide_title: false
hide_table_of_contents: false
keywords:
  - ml_models
  - machinelearning
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

Creates, updates, deletes, gets or lists a <code>ml_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ml_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.machinelearning.ml_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ml_model"
    values={[
        { label: 'get_ml_model', value: 'get_ml_model' },
        { label: 'describe_ml_models', value: 'describe_ml_models' }
    ]}
>
<TabItem value="get_ml_model">

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
    <td><CopyableCode code="compute_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>Long integer type that is a 64-bit signed number.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by_iam_user" /></td>
    <td><code>string</code></td>
    <td>The AWS user account from which the MLModel was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account. (pattern: &lt;code&gt;arn:aws:iam::&#91;0-9&#93;+:((user/.+)|(root))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_info" /></td>
    <td><code>object</code></td>
    <td>The current endpoint of the MLModel</td>
</tr>
<tr>
    <td><CopyableCode code="finished_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="input_data_location_s3" /></td>
    <td><code>string</code></td>
    <td>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3). (pattern: &lt;code&gt;s3:​//(&#91;^/&#93;+)(/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="log_uri" /></td>
    <td><code>string</code></td>
    <td>A link to the file that contains logs of the CreateMLModel operation.</td>
</tr>
<tr>
    <td><CopyableCode code="ml_model_id" /></td>
    <td><code>string</code></td>
    <td>The MLModel ID, which is same as the MLModelId in the request. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ml_model_type" /></td>
    <td><code>string</code></td>
    <td>Identifies the MLModel category. The following are the available types: REGRESSION -- Produces a numeric result. For example, "What price should a house be listed at?" BINARY -- Produces one of two possible results. For example, "Is this an e-commerce website?" MULTICLASS -- Produces one of several possible results. For example, "Is this a HIGH, LOW or MEDIUM risk trade?" (REGRESSION, BINARY, MULTICLASS)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A description of the most recent details about accessing the MLModel.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A user-supplied name or description of the MLModel.</td>
</tr>
<tr>
    <td><CopyableCode code="recipe" /></td>
    <td><code>string</code></td>
    <td>The recipe to use when training the MLModel. The Recipe provides detailed information about the observation data to use during training, and manipulations to perform on the observation data during training. Note: This parameter is provided as part of the verbose format.</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>The schema used by all of the data files referenced by the DataSource. Note: This parameter is provided as part of the verbose format.</td>
</tr>
<tr>
    <td><CopyableCode code="score_threshold" /></td>
    <td><code>number (float)</code></td>
    <td>The scoring threshold is used in binary classification MLModel models. It marks the boundary between a positive prediction and a negative prediction. Output values greater than or equal to the threshold receive a positive result from the MLModel, such as true. Output values less than the threshold receive a negative response from the MLModel, such as false.</td>
</tr>
<tr>
    <td><CopyableCode code="score_threshold_last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Long integer type that is a 64-bit signed number.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the MLModel. This element can have one of the following values: PENDING - Amazon Machine Learning (Amazon ML) submitted a request to describe a MLModel. INPROGRESS - The request is processing. FAILED - The request did not run to completion. The ML model isn't usable. COMPLETED - The request completed successfully. DELETED - The MLModel is marked as deleted. It isn't usable. (PENDING, INPROGRESS, FAILED, COMPLETED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="training_data_source_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the training DataSource. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="training_parameters" /></td>
    <td><code>object</code></td>
    <td>A list of the training parameters in the MLModel. The list is implemented as a map of key-value pairs. The following is the current set of training parameters: sgd.maxMLModelSizeInBytes - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance. The value is an integer that ranges from 100000 to 2147483648. The default value is 33554432. sgd.maxPasses - The number of times that the training process traverses the observations to build the MLModel. The value is an integer that ranges from 1 to 10000. The default value is 10. sgd.shuffleType - Whether Amazon ML shuffles the training data. Shuffling data improves a model's ability to find the optimal solution for a variety of data types. The valid values are auto and none. The default value is none. We strongly recommend that you shuffle your data. sgd.l1RegularizationAmount - The coefficient regularization L1 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to zero, resulting in a sparse feature set. If you use this parameter, start by specifying a small value, such as 1.0E-08. The value is a double that ranges from 0 to MAX_DOUBLE. The default is to not use L1 normalization. This parameter can't be used when L2 is specified. Use this parameter sparingly. sgd.l2RegularizationAmount - The coefficient regularization L2 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as 1.0E-08. The value is a double that ranges from 0 to MAX_DOUBLE. The default is to not use L2 normalization. This parameter can't be used when L1 is specified. Use this parameter sparingly.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_ml_models">

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
    <td><CopyableCode code="algorithm" /></td>
    <td><code>string</code></td>
    <td>The algorithm used to train the MLModel. The following algorithm is supported: SGD -- Stochastic gradient descent. The goal of SGD is to minimize the gradient of the loss function. (sgd)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>Long integer type that is a 64-bit signed number.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by_iam_user" /></td>
    <td><code>string</code></td>
    <td>The AWS user account from which the MLModel was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account. (pattern: &lt;code&gt;arn:aws:iam::&#91;0-9&#93;+:((user/.+)|(root))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_info" /></td>
    <td><code>object</code></td>
    <td>The current endpoint of the MLModel.</td>
</tr>
<tr>
    <td><CopyableCode code="finished_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="input_data_location_s3" /></td>
    <td><code>string</code></td>
    <td>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3). (pattern: &lt;code&gt;s3:​//(&#91;^/&#93;+)(/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="ml_model_id" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the MLModel at creation. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ml_model_type" /></td>
    <td><code>string</code></td>
    <td>Identifies the MLModel category. The following are the available types: REGRESSION - Produces a numeric result. For example, "What price should a house be listed at?" BINARY - Produces one of two possible results. For example, "Is this a child-friendly web site?". MULTICLASS - Produces one of several possible results. For example, "Is this a HIGH-, LOW-, or MEDIUM-risk trade?". (REGRESSION, BINARY, MULTICLASS)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A description of the most recent details about accessing the MLModel.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A user-supplied name or description of the MLModel.</td>
</tr>
<tr>
    <td><CopyableCode code="score_threshold" /></td>
    <td><code>number (float)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="score_threshold_last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Long integer type that is a 64-bit signed number.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of an MLModel. This element can have one of the following values: PENDING - Amazon Machine Learning (Amazon ML) submitted a request to create an MLModel. INPROGRESS - The creation process is underway. FAILED - The request to create an MLModel didn't run to completion. The model isn't usable. COMPLETED - The creation process completed successfully. DELETED - The MLModel is marked as deleted. It isn't usable. (PENDING, INPROGRESS, FAILED, COMPLETED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="training_data_source_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the training DataSource. The CreateMLModel operation uses the TrainingDataSourceId. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="training_parameters" /></td>
    <td><code>object</code></td>
    <td>A list of the training parameters in the MLModel. The list is implemented as a map of key-value pairs. The following is the current set of training parameters: sgd.maxMLModelSizeInBytes - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance. The value is an integer that ranges from 100000 to 2147483648. The default value is 33554432. sgd.maxPasses - The number of times that the training process traverses the observations to build the MLModel. The value is an integer that ranges from 1 to 10000. The default value is 10. sgd.shuffleType - Whether Amazon ML shuffles the training data. Shuffling the data improves a model's ability to find the optimal solution for a variety of data types. The valid values are auto and none. The default value is none. sgd.l1RegularizationAmount - The coefficient regularization L1 norm, which controls overfitting the data by penalizing large coefficients. This parameter tends to drive coefficients to zero, resulting in sparse feature set. If you use this parameter, start by specifying a small value, such as 1.0E-08. The value is a double that ranges from 0 to MAX_DOUBLE. The default is to not use L1 normalization. This parameter can't be used when L2 is specified. Use this parameter sparingly. sgd.l2RegularizationAmount - The coefficient regularization L2 norm, which controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as 1.0E-08. The value is a double that ranges from 0 to MAX_DOUBLE. The default is to not use L2 normalization. This parameter can't be used when L1 is specified. Use this parameter sparingly.</td>
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
    <td><a href="#get_ml_model"><CopyableCode code="get_ml_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an MLModel that includes detailed metadata, data source information, and the current status of the MLModel. GetMLModel provides results in normal or verbose format.</td>
</tr>
<tr>
    <td><a href="#describe_ml_models"><CopyableCode code="describe_ml_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of MLModel that match the search criteria in the request.</td>
</tr>
<tr>
    <td><a href="#create_ml_model"><CopyableCode code="create_ml_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MLModelId"><code>MLModelId</code></a>, <a href="#parameter-MLModelType"><code>MLModelType</code></a>, <a href="#parameter-TrainingDataSourceId"><code>TrainingDataSourceId</code></a></td>
    <td></td>
    <td>Creates a new MLModel using the DataSource and the recipe as information sources. An MLModel is nearly immutable. Users can update only the MLModelName and the ScoreThreshold in an MLModel without creating a new MLModel. CreateMLModel is an asynchronous operation. In response to CreateMLModel, Amazon Machine Learning (Amazon ML) immediately returns and sets the MLModel status to PENDING. After the MLModel has been created and ready is for use, Amazon ML sets the status to COMPLETED. You can use the GetMLModel operation to check the progress of the MLModel during the creation operation. CreateMLModel requires a DataSource with computed statistics, which can be created by setting ComputeStatistics to true in CreateDataSourceFromRDS, CreateDataSourceFromS3, or CreateDataSourceFromRedshift operations.</td>
</tr>
<tr>
    <td><a href="#create_realtime_endpoint"><CopyableCode code="create_realtime_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MLModelId"><code>MLModelId</code></a></td>
    <td></td>
    <td>Creates a real-time endpoint for the MLModel. The endpoint contains the URI of the MLModel; that is, the location to send real-time prediction requests for the specified MLModel.</td>
</tr>
<tr>
    <td><a href="#update_ml_model"><CopyableCode code="update_ml_model" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MLModelId"><code>MLModelId</code></a></td>
    <td></td>
    <td>Updates the MLModelName and the ScoreThreshold of an MLModel. You can use the GetMLModel operation to view the contents of the updated data element.</td>
</tr>
<tr>
    <td><a href="#delete_ml_model"><CopyableCode code="delete_ml_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Assigns the DELETED status to an MLModel, rendering it unusable. After using the DeleteMLModel operation, you can use the GetMLModel operation to verify that the status of the MLModel changed to DELETED. Caution: The result of the DeleteMLModel operation is irreversible.</td>
</tr>
<tr>
    <td><a href="#delete_realtime_endpoint"><CopyableCode code="delete_realtime_endpoint" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MLModelId"><code>MLModelId</code></a></td>
    <td></td>
    <td>Deletes a real time endpoint of an MLModel.</td>
</tr>
<tr>
    <td><a href="#predict"><CopyableCode code="predict" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MLModelId"><code>MLModelId</code></a>, <a href="#parameter-Record"><code>Record</code></a>, <a href="#parameter-PredictEndpoint"><code>PredictEndpoint</code></a></td>
    <td></td>
    <td>Generates a prediction for the observation using the specified ML Model. Note: Not all response parameters will be populated. Whether a response parameter is populated depends on the type of model requested.</td>
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
    defaultValue="get_ml_model"
    values={[
        { label: 'get_ml_model', value: 'get_ml_model' },
        { label: 'describe_ml_models', value: 'describe_ml_models' }
    ]}
>
<TabItem value="get_ml_model">

Returns an MLModel that includes detailed metadata, data source information, and the current status of the MLModel. GetMLModel provides results in normal or verbose format.

```sql
SELECT
compute_time,
created_at,
created_by_iam_user,
endpoint_info,
finished_at,
input_data_location_s3,
last_updated_at,
log_uri,
ml_model_id,
ml_model_type,
message,
name,
recipe,
schema,
score_threshold,
score_threshold_last_updated_at,
size_in_bytes,
started_at,
status,
training_data_source_id,
training_parameters
FROM aws.machinelearning.ml_models
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_ml_models">

Returns a list of MLModel that match the search criteria in the request.

```sql
SELECT
algorithm,
compute_time,
created_at,
created_by_iam_user,
endpoint_info,
finished_at,
input_data_location_s3,
last_updated_at,
ml_model_id,
ml_model_type,
message,
name,
score_threshold,
score_threshold_last_updated_at,
size_in_bytes,
started_at,
status,
training_data_source_id,
training_parameters
FROM aws.machinelearning.ml_models
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ml_model"
    values={[
        { label: 'create_ml_model', value: 'create_ml_model' },
        { label: 'create_realtime_endpoint', value: 'create_realtime_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ml_model">

Creates a new MLModel using the DataSource and the recipe as information sources. An MLModel is nearly immutable. Users can update only the MLModelName and the ScoreThreshold in an MLModel without creating a new MLModel. CreateMLModel is an asynchronous operation. In response to CreateMLModel, Amazon Machine Learning (Amazon ML) immediately returns and sets the MLModel status to PENDING. After the MLModel has been created and ready is for use, Amazon ML sets the status to COMPLETED. You can use the GetMLModel operation to check the progress of the MLModel during the creation operation. CreateMLModel requires a DataSource with computed statistics, which can be created by setting ComputeStatistics to true in CreateDataSourceFromRDS, CreateDataSourceFromS3, or CreateDataSourceFromRedshift operations.

```sql
INSERT INTO aws.machinelearning.ml_models (
MLModelId,
MLModelName,
MLModelType,
Parameters,
TrainingDataSourceId,
Recipe,
RecipeUri,
region
)
SELECT 
'{{ MLModelId }}' /* required */,
'{{ MLModelName }}',
'{{ MLModelType }}' /* required */,
'{{ Parameters }}',
'{{ TrainingDataSourceId }}' /* required */,
'{{ Recipe }}',
'{{ RecipeUri }}',
'{{ region }}'
RETURNING
ml_model_id
;
```
</TabItem>
<TabItem value="create_realtime_endpoint">

Creates a real-time endpoint for the MLModel. The endpoint contains the URI of the MLModel; that is, the location to send real-time prediction requests for the specified MLModel.

```sql
INSERT INTO aws.machinelearning.ml_models (
MLModelId,
region
)
SELECT 
'{{ MLModelId }}' /* required */,
'{{ region }}'
RETURNING
ml_model_id,
realtime_endpoint_info
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ml_models
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ml_models resource.
    - name: MLModelId
      value: "{{ MLModelId }}"
      description: |
        The ID assigned to the MLModel during creation.
    - name: MLModelName
      value: "{{ MLModelName }}"
      description: |
        A user-supplied name or description of the MLModel.
    - name: MLModelType
      value: "{{ MLModelType }}"
      description: |
        The category of supervised learning that this MLModel will address. Choose from the following types: Choose REGRESSION if the MLModel will be used to predict a numeric value. Choose BINARY if the MLModel result has two possible values. Choose MULTICLASS if the MLModel result has a limited number of values. For more information, see the Amazon Machine Learning Developer Guide.
      valid_values: ['REGRESSION', 'BINARY', 'MULTICLASS']
    - name: Parameters
      value: "{{ Parameters }}"
      description: |
        A list of the training parameters in the MLModel. The list is implemented as a map of key-value pairs. The following is the current set of training parameters: sgd.maxMLModelSizeInBytes - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance. The value is an integer that ranges from 100000 to 2147483648. The default value is 33554432. sgd.maxPasses - The number of times that the training process traverses the observations to build the MLModel. The value is an integer that ranges from 1 to 10000. The default value is 10. sgd.shuffleType - Whether Amazon ML shuffles the training data. Shuffling the data improves a model's ability to find the optimal solution for a variety of data types. The valid values are auto and none. The default value is none. We strongly recommend that you shuffle your data. sgd.l1RegularizationAmount - The coefficient regularization L1 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to zero, resulting in a sparse feature set. If you use this parameter, start by specifying a small value, such as 1.0E-08. The value is a double that ranges from 0 to MAX_DOUBLE. The default is to not use L1 normalization. This parameter can't be used when L2 is specified. Use this parameter sparingly. sgd.l2RegularizationAmount - The coefficient regularization L2 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as 1.0E-08. The value is a double that ranges from 0 to MAX_DOUBLE. The default is to not use L2 normalization. This parameter can't be used when L1 is specified. Use this parameter sparingly.
    - name: TrainingDataSourceId
      value: "{{ TrainingDataSourceId }}"
      description: |
        The DataSource that points to the training data.
    - name: Recipe
      value: "{{ Recipe }}"
      description: |
        The data recipe for creating the MLModel. You must specify either the recipe or its URI. If you don't specify a recipe or its URI, Amazon ML creates a default.
    - name: RecipeUri
      value: "{{ RecipeUri }}"
      description: |
        The Amazon Simple Storage Service (Amazon S3) location and file name that contains the MLModel recipe. You must specify either the recipe or its URI. If you don't specify a recipe or its URI, Amazon ML creates a default.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ml_model"
    values={[
        { label: 'update_ml_model', value: 'update_ml_model' }
    ]}
>
<TabItem value="update_ml_model">

Updates the MLModelName and the ScoreThreshold of an MLModel. You can use the GetMLModel operation to view the contents of the updated data element.

```sql
UPDATE aws.machinelearning.ml_models
SET 
MLModelId = '{{ MLModelId }}',
MLModelName = '{{ MLModelName }}',
ScoreThreshold = {{ ScoreThreshold }}
WHERE 
region = '{{ region }}' --required
AND MLModelId = '{{ MLModelId }}' --required
RETURNING
ml_model_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ml_model"
    values={[
        { label: 'delete_ml_model', value: 'delete_ml_model' }
    ]}
>
<TabItem value="delete_ml_model">

Assigns the DELETED status to an MLModel, rendering it unusable. After using the DeleteMLModel operation, you can use the GetMLModel operation to verify that the status of the MLModel changed to DELETED. Caution: The result of the DeleteMLModel operation is irreversible.

```sql
DELETE FROM aws.machinelearning.ml_models
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_realtime_endpoint"
    values={[
        { label: 'delete_realtime_endpoint', value: 'delete_realtime_endpoint' },
        { label: 'predict', value: 'predict' }
    ]}
>
<TabItem value="delete_realtime_endpoint">

Deletes a real time endpoint of an MLModel.

```sql
EXEC aws.machinelearning.ml_models.delete_realtime_endpoint 
@region='{{ region }}' --required 
@@json=
'{
"MLModelId": "{{ MLModelId }}"
}'
;
```
</TabItem>
<TabItem value="predict">

Generates a prediction for the observation using the specified ML Model. Note: Not all response parameters will be populated. Whether a response parameter is populated depends on the type of model requested.

```sql
EXEC aws.machinelearning.ml_models.predict 
@region='{{ region }}' --required 
@@json=
'{
"MLModelId": "{{ MLModelId }}", 
"Record": "{{ Record }}", 
"PredictEndpoint": "{{ PredictEndpoint }}"
}'
;
```
</TabItem>
</Tabs>
