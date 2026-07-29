--- 
title: auto_predictors
hide_title: false
hide_table_of_contents: false
keywords:
  - auto_predictors
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

Creates, updates, deletes, gets or lists an <code>auto_predictors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auto_predictors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecast.auto_predictors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_auto_predictor"
    values={[
        { label: 'describe_auto_predictor', value: 'describe_auto_predictor' }
    ]}
>
<TabItem value="describe_auto_predictor">

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
    <td>The timestamp of the CreateAutoPredictor request.</td>
</tr>
<tr>
    <td><CopyableCode code="data_config" /></td>
    <td><code>object</code></td>
    <td>The data configuration for your dataset group and any additional datasets.</td>
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
    <td><CopyableCode code="explainability_info" /></td>
    <td><code>object</code></td>
    <td>Provides the status and ARN of the Predictor Explainability.</td>
</tr>
<tr>
    <td><CopyableCode code="forecast_dimensions" /></td>
    <td><code>array</code></td>
    <td>An array of dimension (field) names that specify the attributes used to group your time series.</td>
</tr>
<tr>
    <td><CopyableCode code="forecast_frequency" /></td>
    <td><code>string</code></td>
    <td>The frequency of predictions in a forecast. Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes), 15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example, "Y" indicates every year and "5min" indicates every five minutes. (pattern: &lt;code&gt;^Y|M|W|D|H|30min|15min|10min|5min|1min$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="forecast_horizon" /></td>
    <td><code>integer</code></td>
    <td>The number of time-steps that the model predicts. The forecast horizon is also called the prediction length.</td>
</tr>
<tr>
    <td><CopyableCode code="forecast_types" /></td>
    <td><code>array</code></td>
    <td>The forecast types used during predictor training. Default value is &#91;"0.1","0.5","0.9"&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>In the event of an error, a message detailing the cause of the error.</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_info" /></td>
    <td><code>object</code></td>
    <td>A object with the Amazon Resource Name (ARN) and status of the monitor resource.</td>
</tr>
<tr>
    <td><CopyableCode code="optimization_metric" /></td>
    <td><code>string</code></td>
    <td>The accuracy metric used to optimize the predictor. (WAPE, RMSE, AverageWeightedQuantileLoss, MASE, MAPE)</td>
</tr>
<tr>
    <td><CopyableCode code="predictor_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the predictor (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="predictor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the predictor. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="reference_predictor_summary" /></td>
    <td><code>object</code></td>
    <td>The ARN and state of the reference predictor. This parameter is only valid for retrained or upgraded predictors.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the predictor. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED</td>
</tr>
<tr>
    <td><CopyableCode code="time_alignment_boundary" /></td>
    <td><code>object</code></td>
    <td>The time boundary Forecast uses when aggregating data.</td>
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
    <td><a href="#describe_auto_predictor"><CopyableCode code="describe_auto_predictor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a predictor created using the CreateAutoPredictor operation.</td>
</tr>
<tr>
    <td><a href="#create_auto_predictor"><CopyableCode code="create_auto_predictor" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PredictorName"><code>PredictorName</code></a></td>
    <td></td>
    <td>Creates an Amazon Forecast predictor. Amazon Forecast creates predictors with AutoPredictor, which involves applying the optimal combination of algorithms to each time series in your datasets. You can use CreateAutoPredictor to create new predictors or upgrade/retrain existing predictors. Creating new predictors The following parameters are required when creating a new predictor: PredictorName - A unique name for the predictor. DatasetGroupArn - The ARN of the dataset group used to train the predictor. ForecastFrequency - The granularity of your forecasts (hourly, daily, weekly, etc). ForecastHorizon - The number of time-steps that the model predicts. The forecast horizon is also called the prediction length. When creating a new predictor, do not specify a value for ReferencePredictorArn. Upgrading and retraining predictors The following parameters are required when retraining or upgrading a predictor: PredictorName - A unique name for the predictor. ReferencePredictorArn - The ARN of the predictor to retrain or upgrade. When upgrading or retraining a predictor, only specify values for the ReferencePredictorArn and PredictorName.</td>
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
    defaultValue="describe_auto_predictor"
    values={[
        { label: 'describe_auto_predictor', value: 'describe_auto_predictor' }
    ]}
>
<TabItem value="describe_auto_predictor">

Describes a predictor created using the CreateAutoPredictor operation.

```sql
SELECT
creation_time,
data_config,
dataset_import_job_arns,
encryption_config,
estimated_time_remaining_in_minutes,
explainability_info,
forecast_dimensions,
forecast_frequency,
forecast_horizon,
forecast_types,
last_modification_time,
message,
monitor_info,
optimization_metric,
predictor_arn,
predictor_name,
reference_predictor_summary,
status,
time_alignment_boundary
FROM aws.forecast.auto_predictors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_auto_predictor"
    values={[
        { label: 'create_auto_predictor', value: 'create_auto_predictor' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_auto_predictor">

Creates an Amazon Forecast predictor. Amazon Forecast creates predictors with AutoPredictor, which involves applying the optimal combination of algorithms to each time series in your datasets. You can use CreateAutoPredictor to create new predictors or upgrade/retrain existing predictors. Creating new predictors The following parameters are required when creating a new predictor: PredictorName - A unique name for the predictor. DatasetGroupArn - The ARN of the dataset group used to train the predictor. ForecastFrequency - The granularity of your forecasts (hourly, daily, weekly, etc). ForecastHorizon - The number of time-steps that the model predicts. The forecast horizon is also called the prediction length. When creating a new predictor, do not specify a value for ReferencePredictorArn. Upgrading and retraining predictors The following parameters are required when retraining or upgrading a predictor: PredictorName - A unique name for the predictor. ReferencePredictorArn - The ARN of the predictor to retrain or upgrade. When upgrading or retraining a predictor, only specify values for the ReferencePredictorArn and PredictorName.

```sql
INSERT INTO aws.forecast.auto_predictors (
PredictorName,
ForecastHorizon,
ForecastTypes,
ForecastDimensions,
ForecastFrequency,
DataConfig,
EncryptionConfig,
ReferencePredictorArn,
OptimizationMetric,
ExplainPredictor,
Tags,
MonitorConfig,
TimeAlignmentBoundary,
region
)
SELECT 
'{{ PredictorName }}' /* required */,
{{ ForecastHorizon }},
'{{ ForecastTypes }}',
'{{ ForecastDimensions }}',
'{{ ForecastFrequency }}',
'{{ DataConfig }}',
'{{ EncryptionConfig }}',
'{{ ReferencePredictorArn }}',
'{{ OptimizationMetric }}',
{{ ExplainPredictor }},
'{{ Tags }}',
'{{ MonitorConfig }}',
'{{ TimeAlignmentBoundary }}',
'{{ region }}'
RETURNING
predictor_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: auto_predictors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the auto_predictors resource.
    - name: PredictorName
      value: "{{ PredictorName }}"
      description: |
        A unique name for the predictor
    - name: ForecastHorizon
      value: {{ ForecastHorizon }}
      description: |
        The number of time-steps that the model predicts. The forecast horizon is also called the prediction length. The maximum forecast horizon is the lesser of 500 time-steps or 1/4 of the TARGET_TIME_SERIES dataset length. If you are retraining an existing AutoPredictor, then the maximum forecast horizon is the lesser of 500 time-steps or 1/3 of the TARGET_TIME_SERIES dataset length. If you are upgrading to an AutoPredictor or retraining an existing AutoPredictor, you cannot update the forecast horizon parameter. You can meet this requirement by providing longer time-series in the dataset.
    - name: ForecastTypes
      value:
        - "{{ ForecastTypes }}"
      description: |
        The forecast types used to train a predictor. You can specify up to five forecast types. Forecast types can be quantiles from 0.01 to 0.99, by increments of 0.01 or higher. You can also specify the mean forecast with mean.
    - name: ForecastDimensions
      value:
        - "{{ ForecastDimensions }}"
      description: |
        An array of dimension (field) names that specify how to group the generated forecast. For example, if you are generating forecasts for item sales across all your stores, and your dataset contains a store_id field, you would specify store_id as a dimension to group sales forecasts for each store.
    - name: ForecastFrequency
      value: "{{ ForecastFrequency }}"
      description: |
        The frequency of predictions in a forecast. Valid intervals are an integer followed by Y (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example, "1D" indicates every day and "15min" indicates every 15 minutes. You cannot specify a value that would overlap with the next larger frequency. That means, for example, you cannot specify a frequency of 60 minutes, because that is equivalent to 1 hour. The valid values for each frequency are the following: Minute - 1-59 Hour - 1-23 Day - 1-6 Week - 1-4 Month - 1-11 Year - 1 Thus, if you want every other week forecasts, specify "2W". Or, if you want quarterly forecasts, you specify "3M". The frequency must be greater than or equal to the TARGET_TIME_SERIES dataset frequency. When a RELATED_TIME_SERIES dataset is provided, the frequency must be equal to the RELATED_TIME_SERIES dataset frequency.
    - name: DataConfig
      description: |
        The data configuration for your dataset group and any additional datasets.
      value:
        DatasetGroupArn: "{{ DatasetGroupArn }}"
        AttributeConfigs:
          - AttributeName: "{{ AttributeName }}"
            Transformations: "{{ Transformations }}"
        AdditionalDatasets:
          - Name: "{{ Name }}"
            Configuration: "{{ Configuration }}"
    - name: EncryptionConfig
      description: |
        An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the CreateDataset and CreatePredictor requests.
      value:
        RoleArn: "{{ RoleArn }}"
        KMSKeyArn: "{{ KMSKeyArn }}"
    - name: ReferencePredictorArn
      value: "{{ ReferencePredictorArn }}"
      description: |
        The ARN of the predictor to retrain or upgrade. This parameter is only used when retraining or upgrading a predictor. When creating a new predictor, do not specify a value for this parameter. When upgrading or retraining a predictor, only specify values for the ReferencePredictorArn and PredictorName. The value for PredictorName must be a unique predictor name.
    - name: OptimizationMetric
      value: "{{ OptimizationMetric }}"
      description: |
        The accuracy metric used to optimize the predictor.
      valid_values: ['WAPE', 'RMSE', 'AverageWeightedQuantileLoss', 'MASE', 'MAPE']
    - name: ExplainPredictor
      value: {{ ExplainPredictor }}
      description: |
        Create an Explainability resource for the predictor.
    - name: Tags
      description: |
        Optional metadata to help you categorize and organize your predictors. Each tag consists of a key and an optional value, both of which you define. Tag keys and values are case sensitive. The following restrictions apply to tags: For each resource, each tag key must be unique and each tag key must have one value. Maximum number of tags per resource: 50. Maximum key length: 128 Unicode characters in UTF-8. Maximum value length: 256 Unicode characters in UTF-8. Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your tagging schema is used across other services and resources, the character restrictions of those services also apply. Key prefixes cannot include any upper or lowercase combination of aws: or AWS:. Values can have this prefix. If a tag value has aws as its prefix but the key does not, Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit. You cannot edit or delete tag keys with this prefix.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: MonitorConfig
      description: |
        The configuration details for predictor monitoring. Provide a name for the monitor resource to enable predictor monitoring. Predictor monitoring allows you to see how your predictor's performance changes over time. For more information, see Predictor Monitoring.
      value:
        MonitorName: "{{ MonitorName }}"
    - name: TimeAlignmentBoundary
      description: |
        The time boundary Forecast uses to align and aggregate any data that doesn't align with your forecast frequency. Provide the unit of time and the time boundary as a key value pair. For more information on specifying a time boundary, see Specifying a Time Boundary. If you don't provide a time boundary, Forecast uses a set of Default Time Boundaries.
      value:
        Month: "{{ Month }}"
        DayOfMonth: {{ DayOfMonth }}
        DayOfWeek: "{{ DayOfWeek }}"
        Hour: {{ Hour }}
`}</CodeBlock>

</TabItem>
</Tabs>
