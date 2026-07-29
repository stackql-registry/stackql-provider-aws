--- 
title: forecasts
hide_title: false
hide_table_of_contents: false
keywords:
  - forecasts
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

Creates, updates, deletes, gets or lists a <code>forecasts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="forecasts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecast.forecasts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_forecast"
    values={[
        { label: 'describe_forecast', value: 'describe_forecast' },
        { label: 'list_forecasts', value: 'list_forecasts' }
    ]}
>
<TabItem value="describe_forecast">

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
    <td>When the forecast creation task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_group_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the dataset group that provided the data used to train the predictor. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_time_remaining_in_minutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The estimated time remaining in minutes for the forecast job to complete.</td>
</tr>
<tr>
    <td><CopyableCode code="forecast_arn" /></td>
    <td><code>string</code></td>
    <td>The forecast ARN as specified in the request. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="forecast_name" /></td>
    <td><code>string</code></td>
    <td>The name of the forecast. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="forecast_types" /></td>
    <td><code>array</code></td>
    <td>The quantiles at which probabilistic forecasts were generated.</td>
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
    <td>The ARN of the predictor used to generate the forecast. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the forecast. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the forecast must be ACTIVE before you can query or export the forecast. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="time_series_selector" /></td>
    <td><code>object</code></td>
    <td>The time series to include in the forecast.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_forecasts">

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
    <td><CopyableCode code="created_using_auto_predictor" /></td>
    <td><code>boolean</code></td>
    <td>Whether the Forecast was created from an AutoPredictor.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the forecast creation task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset group that provided the data used to train the predictor. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="forecast_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the forecast. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="forecast_name" /></td>
    <td><code>string</code></td>
    <td>The name of the forecast. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
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
    <td>The ARN of the predictor used to generate the forecast. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the forecast. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the forecast must be ACTIVE before you can query or export the forecast.</td>
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
    <td><a href="#describe_forecast"><CopyableCode code="describe_forecast" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a forecast created using the CreateForecast operation. In addition to listing the properties provided in the CreateForecast request, this operation lists the following properties: DatasetGroupArn - The dataset group that provided the training data. CreationTime LastModificationTime Status Message - If an error occurred, information about the error.</td>
</tr>
<tr>
    <td><a href="#list_forecasts"><CopyableCode code="list_forecasts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of forecasts created using the CreateForecast operation. For each forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the DescribeForecast operation. You can filter the list using an array of Filter objects.</td>
</tr>
<tr>
    <td><a href="#create_forecast"><CopyableCode code="create_forecast" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ForecastName"><code>ForecastName</code></a>, <a href="#parameter-PredictorArn"><code>PredictorArn</code></a></td>
    <td></td>
    <td>Creates a forecast for each item in the TARGET_TIME_SERIES dataset that was used to train the predictor. This is known as inference. To retrieve the forecast for a single item at low latency, use the operation. To export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the CreateForecastExportJob operation. The range of the forecast is determined by the ForecastHorizon value, which you specify in the CreatePredictor request. When you query a forecast, you can request a specific date range within the forecast. To get a list of all your forecasts, use the ListForecasts operation. The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was used to create the predictor. For more information, see howitworks-forecast. The Status of the forecast must be ACTIVE before you can query or export the forecast. Use the DescribeForecast operation to get the status. By default, a forecast includes predictions for every item (item_id) in the dataset group that was used to train the predictor. However, you can use the TimeSeriesSelector object to generate a forecast on a subset of time series. Forecast creation is skipped for any time series that you specify that are not in the input dataset. The forecast export file will not contain these time series or their forecasted values.</td>
</tr>
<tr>
    <td><a href="#delete_forecast"><CopyableCode code="delete_forecast" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a forecast created using the CreateForecast operation. You can delete only forecasts that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeForecast operation. You can't delete a forecast while it is being exported. After a forecast is deleted, you can no longer query the forecast.</td>
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
    defaultValue="describe_forecast"
    values={[
        { label: 'describe_forecast', value: 'describe_forecast' },
        { label: 'list_forecasts', value: 'list_forecasts' }
    ]}
>
<TabItem value="describe_forecast">

Describes a forecast created using the CreateForecast operation. In addition to listing the properties provided in the CreateForecast request, this operation lists the following properties: DatasetGroupArn - The dataset group that provided the training data. CreationTime LastModificationTime Status Message - If an error occurred, information about the error.

```sql
SELECT
creation_time,
dataset_group_arn,
estimated_time_remaining_in_minutes,
forecast_arn,
forecast_name,
forecast_types,
last_modification_time,
message,
predictor_arn,
status,
time_series_selector
FROM aws.forecast.forecasts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_forecasts">

Returns a list of forecasts created using the CreateForecast operation. For each forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the DescribeForecast operation. You can filter the list using an array of Filter objects.

```sql
SELECT
created_using_auto_predictor,
creation_time,
dataset_group_arn,
forecast_arn,
forecast_name,
last_modification_time,
message,
predictor_arn,
status
FROM aws.forecast.forecasts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_forecast"
    values={[
        { label: 'create_forecast', value: 'create_forecast' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_forecast">

Creates a forecast for each item in the TARGET_TIME_SERIES dataset that was used to train the predictor. This is known as inference. To retrieve the forecast for a single item at low latency, use the operation. To export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the CreateForecastExportJob operation. The range of the forecast is determined by the ForecastHorizon value, which you specify in the CreatePredictor request. When you query a forecast, you can request a specific date range within the forecast. To get a list of all your forecasts, use the ListForecasts operation. The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was used to create the predictor. For more information, see howitworks-forecast. The Status of the forecast must be ACTIVE before you can query or export the forecast. Use the DescribeForecast operation to get the status. By default, a forecast includes predictions for every item (item_id) in the dataset group that was used to train the predictor. However, you can use the TimeSeriesSelector object to generate a forecast on a subset of time series. Forecast creation is skipped for any time series that you specify that are not in the input dataset. The forecast export file will not contain these time series or their forecasted values.

```sql
INSERT INTO aws.forecast.forecasts (
ForecastName,
PredictorArn,
ForecastTypes,
Tags,
TimeSeriesSelector,
region
)
SELECT 
'{{ ForecastName }}' /* required */,
'{{ PredictorArn }}' /* required */,
'{{ ForecastTypes }}',
'{{ Tags }}',
'{{ TimeSeriesSelector }}',
'{{ region }}'
RETURNING
forecast_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: forecasts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the forecasts resource.
    - name: ForecastName
      value: "{{ ForecastName }}"
      description: |
        A name for the forecast.
    - name: PredictorArn
      value: "{{ PredictorArn }}"
      description: |
        The Amazon Resource Name (ARN) of the predictor to use to generate the forecast.
    - name: ForecastTypes
      value:
        - "{{ ForecastTypes }}"
      description: |
        The quantiles at which probabilistic forecasts are generated. You can currently specify up to 5 quantiles per forecast. Accepted values include 0.01 to 0.99 (increments of .01 only) and mean. The mean forecast is different from the median (0.50) when the distribution is not symmetric (for example, Beta and Negative Binomial). The default quantiles are the quantiles you specified during predictor creation. If you didn't specify quantiles, the default values are ["0.1", "0.5", "0.9"].
    - name: Tags
      description: |
        The optional metadata that you apply to the forecast to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags: Maximum number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8. If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: TimeSeriesSelector
      description: |
        Defines the set of time series that are used to create the forecasts in a TimeSeriesIdentifiers object. The TimeSeriesIdentifiers object needs the following information: DataSource Format Schema
      value:
        TimeSeriesIdentifiers:
          DataSource:
            S3Config:
              Path: "{{ Path }}"
              RoleArn: "{{ RoleArn }}"
              KMSKeyArn: "{{ KMSKeyArn }}"
          Schema:
            Attributes:
              - AttributeName: "{{ AttributeName }}"
                AttributeType: "{{ AttributeType }}"
          Format: "{{ Format }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_forecast"
    values={[
        { label: 'delete_forecast', value: 'delete_forecast' }
    ]}
>
<TabItem value="delete_forecast">

Deletes a forecast created using the CreateForecast operation. You can delete only forecasts that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeForecast operation. You can't delete a forecast while it is being exported. After a forecast is deleted, you can no longer query the forecast.

```sql
DELETE FROM aws.forecast.forecasts
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
