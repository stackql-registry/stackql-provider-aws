--- 
title: what_if_forecasts
hide_title: false
hide_table_of_contents: false
keywords:
  - what_if_forecasts
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

Creates, updates, deletes, gets or lists a <code>what_if_forecasts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="what_if_forecasts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecast.what_if_forecasts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_what_if_forecast"
    values={[
        { label: 'describe_what_if_forecast', value: 'describe_what_if_forecast' },
        { label: 'list_what_if_forecasts', value: 'list_what_if_forecasts' }
    ]}
>
<TabItem value="describe_what_if_forecast">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the what-if forecast was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EstimatedTimeRemainingInMinutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The approximate time remaining to complete the what-if forecast, in minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="ForecastTypes" /></td>
    <td><code>array</code></td>
    <td>The quantiles at which probabilistic forecasts are generated. You can specify up to five quantiles per what-if forecast in the CreateWhatIfForecast operation. If you didn't specify quantiles, the default values are &#91;"0.1", "0.5", "0.9"&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>If an error occurred, an informational message about the error.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the what-if forecast. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the what-if forecast must be ACTIVE before you can access the forecast. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TimeSeriesReplacementsDataSource" /></td>
    <td><code>object</code></td>
    <td>An array of S3Config, Schema, and Format elements that describe the replacement time series.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeSeriesTransformations" /></td>
    <td><code>array</code></td>
    <td>An array of Action and TimeSeriesConditions elements that describe what transformations were applied to which time series.</td>
</tr>
<tr>
    <td><CopyableCode code="WhatIfAnalysisArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the what-if analysis that contains this forecast. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WhatIfForecastArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the what-if forecast. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WhatIfForecastName" /></td>
    <td><code>string</code></td>
    <td>The name of the what-if forecast. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_what_if_forecasts">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the what-if forecast was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>If an error occurred, an informational message about the error.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the what-if forecast. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the what-if analysis must be ACTIVE before you can access the analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="WhatIfAnalysisArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the what-if analysis that contains this what-if forecast. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WhatIfForecastArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the what-if forecast. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WhatIfForecastName" /></td>
    <td><code>string</code></td>
    <td>The name of the what-if forecast. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_what_if_forecast"><CopyableCode code="describe_what_if_forecast" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the what-if forecast created using the CreateWhatIfForecast operation. In addition to listing the properties provided in the CreateWhatIfForecast request, this operation lists the following properties: CreationTime LastModificationTime Message - If an error occurred, information about the error. Status</td>
</tr>
<tr>
    <td><a href="#list_what_if_forecasts"><CopyableCode code="list_what_if_forecasts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of what-if forecasts created using the CreateWhatIfForecast operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the DescribeWhatIfForecast operation.</td>
</tr>
<tr>
    <td><a href="#create_what_if_forecast"><CopyableCode code="create_what_if_forecast" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WhatIfForecastName"><code>WhatIfForecastName</code></a>, <a href="#parameter-WhatIfAnalysisArn"><code>WhatIfAnalysisArn</code></a></td>
    <td></td>
    <td>A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset.</td>
</tr>
<tr>
    <td><a href="#delete_what_if_forecast"><CopyableCode code="delete_what_if_forecast" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a what-if forecast created using the CreateWhatIfForecast operation. You can delete only what-if forecasts that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfForecast operation. You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.</td>
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
    defaultValue="describe_what_if_forecast"
    values={[
        { label: 'describe_what_if_forecast', value: 'describe_what_if_forecast' },
        { label: 'list_what_if_forecasts', value: 'list_what_if_forecasts' }
    ]}
>
<TabItem value="describe_what_if_forecast">

Describes the what-if forecast created using the CreateWhatIfForecast operation. In addition to listing the properties provided in the CreateWhatIfForecast request, this operation lists the following properties: CreationTime LastModificationTime Message - If an error occurred, information about the error. Status

```sql
SELECT
CreationTime,
EstimatedTimeRemainingInMinutes,
ForecastTypes,
LastModificationTime,
Message,
Status,
TimeSeriesReplacementsDataSource,
TimeSeriesTransformations,
WhatIfAnalysisArn,
WhatIfForecastArn,
WhatIfForecastName
FROM aws.forecast.what_if_forecasts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_what_if_forecasts">

Returns a list of what-if forecasts created using the CreateWhatIfForecast operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the DescribeWhatIfForecast operation.

```sql
SELECT
CreationTime,
LastModificationTime,
Message,
Status,
WhatIfAnalysisArn,
WhatIfForecastArn,
WhatIfForecastName
FROM aws.forecast.what_if_forecasts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_what_if_forecast"
    values={[
        { label: 'create_what_if_forecast', value: 'create_what_if_forecast' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_what_if_forecast">

A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset.

```sql
INSERT INTO aws.forecast.what_if_forecasts (
WhatIfForecastName,
WhatIfAnalysisArn,
TimeSeriesTransformations,
TimeSeriesReplacementsDataSource,
Tags,
region
)
SELECT 
'{{ WhatIfForecastName }}' /* required */,
'{{ WhatIfAnalysisArn }}' /* required */,
'{{ TimeSeriesTransformations }}',
'{{ TimeSeriesReplacementsDataSource }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
WhatIfForecastArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: what_if_forecasts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the what_if_forecasts resource.
    - name: WhatIfForecastName
      value: "{{ WhatIfForecastName }}"
      description: |
        The name of the what-if forecast. Names must be unique within each what-if analysis.
    - name: WhatIfAnalysisArn
      value: "{{ WhatIfAnalysisArn }}"
      description: |
        The Amazon Resource Name (ARN) of the what-if analysis.
    - name: TimeSeriesTransformations
      description: |
        The transformations that are applied to the baseline time series. Each transformation contains an action and a set of conditions. An action is applied only when all conditions are met. If no conditions are provided, the action is applied to all items.
      value:
        - Action:
            AttributeName: "{{ AttributeName }}"
            Operation: "{{ Operation }}"
            Value: {{ Value }}
          TimeSeriesConditions: "{{ TimeSeriesConditions }}"
    - name: TimeSeriesReplacementsDataSource
      description: |
        The replacement time series dataset, which contains the rows that you want to change in the related time series dataset. A replacement time series does not need to contain all rows that are in the baseline related time series. Include only the rows (measure-dimension combinations) that you want to include in the what-if forecast. This dataset is merged with the original time series to create a transformed dataset that is used for the what-if analysis. This dataset should contain the items to modify (such as item_id or workforce_type), any relevant dimensions, the timestamp column, and at least one of the related time series columns. This file should not contain duplicate timestamps for the same time series. Timestamps and item_ids not included in this dataset are not included in the what-if analysis.
      value:
        S3Config:
          Path: "{{ Path }}"
          RoleArn: "{{ RoleArn }}"
          KMSKeyArn: "{{ KMSKeyArn }}"
        Schema:
          Attributes:
            - AttributeName: "{{ AttributeName }}"
              AttributeType: "{{ AttributeType }}"
        Format: "{{ Format }}"
        TimestampFormat: "{{ TimestampFormat }}"
    - name: Tags
      description: |
        A list of tags to apply to the what if forecast.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_what_if_forecast"
    values={[
        { label: 'delete_what_if_forecast', value: 'delete_what_if_forecast' }
    ]}
>
<TabItem value="delete_what_if_forecast">

Deletes a what-if forecast created using the CreateWhatIfForecast operation. You can delete only what-if forecasts that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfForecast operation. You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.

```sql
DELETE FROM aws.forecast.what_if_forecasts
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
