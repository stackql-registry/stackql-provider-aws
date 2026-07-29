--- 
title: predictors
hide_title: false
hide_table_of_contents: false
keywords:
  - predictors
  - forecast
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

Creates, updates, deletes, gets or lists a <code>predictors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="predictors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecast.predictors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_predictor"
    values={[
        { label: 'describe_predictor', value: 'describe_predictor' },
        { label: 'list_predictors', value: 'list_predictors' }
    ]}
>
<TabItem value="describe_predictor">

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
    <td>The Amazon Resource Name (ARN) of the algorithm used for model training. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_algorithm_arns" /></td>
    <td><code>array</code></td>
    <td>When PerformAutoML is specified, the ARN of the chosen algorithm.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_override_strategy" /></td>
    <td><code>string</code></td>
    <td>The LatencyOptimized AutoML override strategy is only available in private beta. Contact Amazon Web Services Support or your account manager to learn more about access privileges. The AutoML strategy used to train the predictor. Unless LatencyOptimized is specified, the AutoML strategy optimizes predictor accuracy. This parameter is only valid for predictors trained using AutoML. (LatencyOptimized, AccuracyOptimized)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the model training task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_import_job_arns" /></td>
    <td><code>array</code></td>
    <td>An array of the ARNs of the dataset import jobs used to import training data for the predictor.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_config" /></td>
    <td><code>object</code></td>
    <td>An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the CreateDataset and CreatePredictor requests.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_time_remaining_in_minutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The estimated time remaining in minutes for the predictor training job to complete.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_parameters" /></td>
    <td><code>object</code></td>
    <td>Used to override the default evaluation parameters of the specified algorithm. Amazon Forecast evaluates a predictor by splitting a dataset into training data and testing data. The evaluation parameters define how to perform the split and the number of iterations.</td>
</tr>
<tr>
    <td><CopyableCode code="featurization_config" /></td>
    <td><code>object</code></td>
    <td>The featurization configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="forecast_horizon" /></td>
    <td><code>integer</code></td>
    <td>The number of time-steps of the forecast. The forecast horizon is also called the prediction length.</td>
</tr>
<tr>
    <td><CopyableCode code="forecast_types" /></td>
    <td><code>array</code></td>
    <td>The forecast types used during predictor training. Default value is &#91;"0.1","0.5","0.9"&#93;</td>
</tr>
<tr>
    <td><CopyableCode code="hpo_config" /></td>
    <td><code>object</code></td>
    <td>The hyperparameter override values for the algorithm.</td>
</tr>
<tr>
    <td><CopyableCode code="input_data_config" /></td>
    <td><code>object</code></td>
    <td>Describes the dataset group that contains the data to use to train the predictor.</td>
</tr>
<tr>
    <td><CopyableCode code="is_auto_predictor" /></td>
    <td><code>boolean</code></td>
    <td>Whether the predictor was created with CreateAutoPredictor.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>If an error occurred, an informational message about the error.</td>
</tr>
<tr>
    <td><CopyableCode code="optimization_metric" /></td>
    <td><code>string</code></td>
    <td>The accuracy metric used to optimize the predictor. (WAPE, RMSE, AverageWeightedQuantileLoss, MASE, MAPE)</td>
</tr>
<tr>
    <td><CopyableCode code="perform_auto_ml" /></td>
    <td><code>boolean</code></td>
    <td>Whether the predictor is set to perform AutoML.</td>
</tr>
<tr>
    <td><CopyableCode code="perform_hpo" /></td>
    <td><code>boolean</code></td>
    <td>Whether the predictor is set to perform hyperparameter optimization (HPO).</td>
</tr>
<tr>
    <td><CopyableCode code="predictor_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the predictor. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="predictor_execution_details" /></td>
    <td><code>object</code></td>
    <td>Details on the the status and results of the backtests performed to evaluate the accuracy of the predictor. You specify the number of backtests to perform when you call the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="predictor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the predictor. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the predictor. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED CREATE_STOPPING, CREATE_STOPPED The Status of the predictor must be ACTIVE before you can use the predictor to create a forecast.</td>
</tr>
<tr>
    <td><CopyableCode code="training_parameters" /></td>
    <td><code>object</code></td>
    <td>The default training parameters or overrides selected during model training. When running AutoML or choosing HPO with CNN-QR or DeepAR+, the optimized values for the chosen hyperparameters are returned. For more information, see aws-forecast-choosing-recipes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_predictors">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the model training task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset group that contains the data used to train the predictor. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="is_auto_predictor" /></td>
    <td><code>boolean</code></td>
    <td>Whether AutoPredictor was used to create the predictor.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>If an error occurred, an informational message about the error.</td>
</tr>
<tr>
    <td><CopyableCode code="predictor_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the predictor. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="predictor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the predictor. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="reference_predictor_summary" /></td>
    <td><code>object</code></td>
    <td>A summary of the reference predictor used if the predictor was retrained or upgraded.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the predictor. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED CREATE_STOPPING, CREATE_STOPPED The Status of the predictor must be ACTIVE before you can use the predictor to create a forecast.</td>
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
    <td><a href="#describe_predictor"><CopyableCode code="describe_predictor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a legacy predictor, use DescribeAutoPredictor. Describes a predictor created using the CreatePredictor operation. In addition to listing the properties provided in the CreatePredictor request, this operation lists the following properties: DatasetImportJobArns - The dataset import jobs used to import training data. AutoMLAlgorithmArns - If AutoML is performed, the algorithms that were evaluated. CreationTime LastModificationTime Status Message - If an error occurred, information about the error.</td>
</tr>
<tr>
    <td><a href="#list_predictors"><CopyableCode code="list_predictors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of predictors created using the CreateAutoPredictor or CreatePredictor operations. For each predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the DescribeAutoPredictor and DescribePredictor operations. You can filter the list using an array of Filter objects.</td>
</tr>
<tr>
    <td><a href="#create_predictor"><CopyableCode code="create_predictor" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PredictorName"><code>PredictorName</code></a>, <a href="#parameter-ForecastHorizon"><code>ForecastHorizon</code></a>, <a href="#parameter-InputDataConfig"><code>InputDataConfig</code></a>, <a href="#parameter-FeaturizationConfig"><code>FeaturizationConfig</code></a></td>
    <td></td>
    <td>This operation creates a legacy predictor that does not include all the predictor functionalities provided by Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use CreateAutoPredictor. Creates an Amazon Forecast predictor. In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters. Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets in the specified dataset group. You can then generate a forecast using the CreateForecast operation. To see the evaluation metrics, use the GetAccuracyMetrics operation. You can specify a featurization configuration to fill and aggregate the data fields in the TARGET_TIME_SERIES dataset to improve model training. For more information, see FeaturizationConfig. For RELATED_TIME_SERIES datasets, CreatePredictor verifies that the DataFrequency specified when the dataset was created matches the ForecastFrequency. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and timestamp format. For more information, see howitworks-datasets-groups. By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9 (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor by setting the ForecastTypes. AutoML If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the objective function, set PerformAutoML to true. The objective function is defined as the mean of the weighted losses over the forecast types. By default, these are the p10, p50, and p90 quantile losses. For more information, see EvaluationResult. When AutoML is enabled, the following properties are disallowed: AlgorithmArn HPOConfig PerformHPO TrainingParameters To get a list of all of your predictors, use the ListPredictors operation. Before you can use the predictor to create a forecast, the Status of the predictor must be ACTIVE, signifying that training has completed. To get the status, use the DescribePredictor operation.</td>
</tr>
<tr>
    <td><a href="#delete_predictor"><CopyableCode code="delete_predictor" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a predictor created using the DescribePredictor or CreatePredictor operations. You can delete only predictor that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribePredictor operation.</td>
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
    defaultValue="describe_predictor"
    values={[
        { label: 'describe_predictor', value: 'describe_predictor' },
        { label: 'list_predictors', value: 'list_predictors' }
    ]}
>
<TabItem value="describe_predictor">

This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a legacy predictor, use DescribeAutoPredictor. Describes a predictor created using the CreatePredictor operation. In addition to listing the properties provided in the CreatePredictor request, this operation lists the following properties: DatasetImportJobArns - The dataset import jobs used to import training data. AutoMLAlgorithmArns - If AutoML is performed, the algorithms that were evaluated. CreationTime LastModificationTime Status Message - If an error occurred, information about the error.

```sql
SELECT
algorithm_arn,
auto_ml_algorithm_arns,
auto_ml_override_strategy,
creation_time,
dataset_import_job_arns,
encryption_config,
estimated_time_remaining_in_minutes,
evaluation_parameters,
featurization_config,
forecast_horizon,
forecast_types,
hpo_config,
input_data_config,
is_auto_predictor,
last_modification_time,
message,
optimization_metric,
perform_auto_ml,
perform_hpo,
predictor_arn,
predictor_execution_details,
predictor_name,
status,
training_parameters
FROM aws.forecast.predictors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_predictors">

Returns a list of predictors created using the CreateAutoPredictor or CreatePredictor operations. For each predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the DescribeAutoPredictor and DescribePredictor operations. You can filter the list using an array of Filter objects.

```sql
SELECT
creation_time,
dataset_group_arn,
is_auto_predictor,
last_modification_time,
message,
predictor_arn,
predictor_name,
reference_predictor_summary,
status
FROM aws.forecast.predictors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_predictor"
    values={[
        { label: 'create_predictor', value: 'create_predictor' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_predictor">

This operation creates a legacy predictor that does not include all the predictor functionalities provided by Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use CreateAutoPredictor. Creates an Amazon Forecast predictor. In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters. Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets in the specified dataset group. You can then generate a forecast using the CreateForecast operation. To see the evaluation metrics, use the GetAccuracyMetrics operation. You can specify a featurization configuration to fill and aggregate the data fields in the TARGET_TIME_SERIES dataset to improve model training. For more information, see FeaturizationConfig. For RELATED_TIME_SERIES datasets, CreatePredictor verifies that the DataFrequency specified when the dataset was created matches the ForecastFrequency. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and timestamp format. For more information, see howitworks-datasets-groups. By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9 (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor by setting the ForecastTypes. AutoML If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the objective function, set PerformAutoML to true. The objective function is defined as the mean of the weighted losses over the forecast types. By default, these are the p10, p50, and p90 quantile losses. For more information, see EvaluationResult. When AutoML is enabled, the following properties are disallowed: AlgorithmArn HPOConfig PerformHPO TrainingParameters To get a list of all of your predictors, use the ListPredictors operation. Before you can use the predictor to create a forecast, the Status of the predictor must be ACTIVE, signifying that training has completed. To get the status, use the DescribePredictor operation.

```sql
INSERT INTO aws.forecast.predictors (
PredictorName,
AlgorithmArn,
ForecastHorizon,
ForecastTypes,
PerformAutoML,
AutoMLOverrideStrategy,
PerformHPO,
TrainingParameters,
EvaluationParameters,
HPOConfig,
InputDataConfig,
FeaturizationConfig,
EncryptionConfig,
Tags,
OptimizationMetric,
region
)
SELECT 
'{{ PredictorName }}' /* required */,
'{{ AlgorithmArn }}',
{{ ForecastHorizon }} /* required */,
'{{ ForecastTypes }}',
{{ PerformAutoML }},
'{{ AutoMLOverrideStrategy }}',
{{ PerformHPO }},
'{{ TrainingParameters }}',
'{{ EvaluationParameters }}',
'{{ HPOConfig }}',
'{{ InputDataConfig }}' /* required */,
'{{ FeaturizationConfig }}' /* required */,
'{{ EncryptionConfig }}',
'{{ Tags }}',
'{{ OptimizationMetric }}',
'{{ region }}'
RETURNING
predictor_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: predictors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the predictors resource.
    - name: PredictorName
      value: "{{ PredictorName }}"
      description: |
        A name for the predictor.
    - name: AlgorithmArn
      value: "{{ AlgorithmArn }}"
      description: |
        The Amazon Resource Name (ARN) of the algorithm to use for model training. Required if PerformAutoML is not set to true. Supported algorithms: arn:aws:forecast:::algorithm/ARIMA arn:aws:forecast:::algorithm/CNN-QR arn:aws:forecast:::algorithm/Deep_AR_Plus arn:aws:forecast:::algorithm/ETS arn:aws:forecast:::algorithm/NPTS arn:aws:forecast:::algorithm/Prophet
    - name: ForecastHorizon
      value: {{ ForecastHorizon }}
      description: |
        Specifies the number of time-steps that the model is trained to predict. The forecast horizon is also called the prediction length. For example, if you configure a dataset for daily data collection (using the DataFrequency parameter of the CreateDataset operation) and set the forecast horizon to 10, the model returns predictions for 10 days. The maximum forecast horizon is the lesser of 500 time-steps or 1/3 of the TARGET_TIME_SERIES dataset length.
    - name: ForecastTypes
      value:
        - "{{ ForecastTypes }}"
      description: |
        Specifies the forecast types used to train a predictor. You can specify up to five forecast types. Forecast types can be quantiles from 0.01 to 0.99, by increments of 0.01 or higher. You can also specify the mean forecast with mean. The default value is ["0.10", "0.50", "0.9"].
    - name: PerformAutoML
      value: {{ PerformAutoML }}
      description: |
        Whether to perform AutoML. When Amazon Forecast performs AutoML, it evaluates the algorithms it provides and chooses the best algorithm and configuration for your training dataset. The default value is false. In this case, you are required to specify an algorithm. Set PerformAutoML to true to have Amazon Forecast perform AutoML. This is a good option if you aren't sure which algorithm is suitable for your training data. In this case, PerformHPO must be false.
    - name: AutoMLOverrideStrategy
      value: "{{ AutoMLOverrideStrategy }}"
      description: |
        The LatencyOptimized AutoML override strategy is only available in private beta. Contact Amazon Web Services Support or your account manager to learn more about access privileges. Used to overide the default AutoML strategy, which is to optimize predictor accuracy. To apply an AutoML strategy that minimizes training time, use LatencyOptimized. This parameter is only valid for predictors trained using AutoML.
      valid_values: ['LatencyOptimized', 'AccuracyOptimized']
    - name: PerformHPO
      value: {{ PerformHPO }}
      description: |
        Whether to perform hyperparameter optimization (HPO). HPO finds optimal hyperparameter values for your training data. The process of performing HPO is known as running a hyperparameter tuning job. The default value is false. In this case, Amazon Forecast uses default hyperparameter values from the chosen algorithm. To override the default values, set PerformHPO to true and, optionally, supply the HyperParameterTuningJobConfig object. The tuning job specifies a metric to optimize, which hyperparameters participate in tuning, and the valid range for each tunable hyperparameter. In this case, you are required to specify an algorithm and PerformAutoML must be false. The following algorithms support HPO: DeepAR+ CNN-QR
    - name: TrainingParameters
      value: "{{ TrainingParameters }}"
      description: |
        The hyperparameters to override for model training. The hyperparameters that you can override are listed in the individual algorithms. For the list of supported algorithms, see aws-forecast-choosing-recipes.
    - name: EvaluationParameters
      description: |
        Used to override the default evaluation parameters of the specified algorithm. Amazon Forecast evaluates a predictor by splitting a dataset into training data and testing data. The evaluation parameters define how to perform the split and the number of iterations.
      value:
        NumberOfBacktestWindows: {{ NumberOfBacktestWindows }}
        BackTestWindowOffset: {{ BackTestWindowOffset }}
    - name: HPOConfig
      description: |
        Provides hyperparameter override values for the algorithm. If you don't provide this parameter, Amazon Forecast uses default values. The individual algorithms specify which hyperparameters support hyperparameter optimization (HPO). For more information, see aws-forecast-choosing-recipes. If you included the HPOConfig object, you must set PerformHPO to true.
      value:
        ParameterRanges:
          CategoricalParameterRanges:
            - Name: "{{ Name }}"
              Values: "{{ Values }}"
          ContinuousParameterRanges:
            - Name: "{{ Name }}"
              MaxValue: {{ MaxValue }}
              MinValue: {{ MinValue }}
              ScalingType: "{{ ScalingType }}"
          IntegerParameterRanges:
            - Name: "{{ Name }}"
              MaxValue: {{ MaxValue }}
              MinValue: {{ MinValue }}
              ScalingType: "{{ ScalingType }}"
    - name: InputDataConfig
      description: |
        Describes the dataset group that contains the data to use to train the predictor.
      value:
        DatasetGroupArn: "{{ DatasetGroupArn }}"
        SupplementaryFeatures:
          - Name: "{{ Name }}"
            Value: "{{ Value }}"
    - name: FeaturizationConfig
      description: |
        The featurization configuration.
      value:
        ForecastFrequency: "{{ ForecastFrequency }}"
        ForecastDimensions:
          - "{{ ForecastDimensions }}"
        Featurizations:
          - AttributeName: "{{ AttributeName }}"
            FeaturizationPipeline: "{{ FeaturizationPipeline }}"
    - name: EncryptionConfig
      description: |
        An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the CreateDataset and CreatePredictor requests.
      value:
        RoleArn: "{{ RoleArn }}"
        KMSKeyArn: "{{ KMSKeyArn }}"
    - name: Tags
      description: |
        The optional metadata that you apply to the predictor to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags: Maximum number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8. If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: OptimizationMetric
      value: "{{ OptimizationMetric }}"
      description: |
        The accuracy metric used to optimize the predictor.
      valid_values: ['WAPE', 'RMSE', 'AverageWeightedQuantileLoss', 'MASE', 'MAPE']
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_predictor"
    values={[
        { label: 'delete_predictor', value: 'delete_predictor' }
    ]}
>
<TabItem value="delete_predictor">

Deletes a predictor created using the DescribePredictor or CreatePredictor operations. You can delete only predictor that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribePredictor operation.

```sql
DELETE FROM aws.forecast.predictors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
