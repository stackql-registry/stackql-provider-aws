--- 
title: explainabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - explainabilities
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

Creates, updates, deletes, gets or lists an <code>explainabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="explainabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecast.explainabilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_explainability"
    values={[
        { label: 'describe_explainability', value: 'describe_explainability' },
        { label: 'list_explainabilities', value: 'list_explainabilities' }
    ]}
>
<TabItem value="describe_explainability">

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
    <td>When the Explainability resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source" /></td>
    <td><code>object</code></td>
    <td>The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_visualization" /></td>
    <td><code>boolean</code></td>
    <td>Whether the visualization was enabled for the Explainability resource.</td>
</tr>
<tr>
    <td><CopyableCode code="end_date_time" /></td>
    <td><code>string</code></td>
    <td>If TimePointGranularity is set to SPECIFIC, the last time point in the Explainability. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;T\d&#123;2&#125;:\d&#123;2&#125;:\d&#123;2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_time_remaining_in_minutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The estimated time remaining in minutes for the CreateExplainability job to complete.</td>
</tr>
<tr>
    <td><CopyableCode code="explainability_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Explainability. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="explainability_config" /></td>
    <td><code>object</code></td>
    <td>The configuration settings that define the granularity of time series and time points for the Explainability.</td>
</tr>
<tr>
    <td><CopyableCode code="explainability_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Explainability. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>If an error occurred, a message about the error.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the Explainability resource. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>Defines the fields of a dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="start_date_time" /></td>
    <td><code>string</code></td>
    <td>If TimePointGranularity is set to SPECIFIC, the first time point in the Explainability. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;T\d&#123;2&#125;:\d&#123;2&#125;:\d&#123;2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Explainability resource. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_explainabilities">

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
    <td>When the Explainability was created.</td>
</tr>
<tr>
    <td><CopyableCode code="explainability_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Explainability. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="explainability_config" /></td>
    <td><code>object</code></td>
    <td>The configuration settings that define the granularity of time series and time points for the Explainability.</td>
</tr>
<tr>
    <td><CopyableCode code="explainability_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Explainability. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Information about any errors that may have occurred during the Explainability creation process.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the Explainability. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Explainability. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED</td>
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
    <td><a href="#describe_explainability"><CopyableCode code="describe_explainability" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an Explainability resource created using the CreateExplainability operation.</td>
</tr>
<tr>
    <td><a href="#list_explainabilities"><CopyableCode code="list_explainabilities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Explainability resources created using the CreateExplainability operation. This operation returns a summary for each Explainability. You can filter the list using an array of Filter objects. To retrieve the complete set of properties for a particular Explainability resource, use the ARN with the DescribeExplainability operation.</td>
</tr>
<tr>
    <td><a href="#create_explainability"><CopyableCode code="create_explainability" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExplainabilityName"><code>ExplainabilityName</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-ExplainabilityConfig"><code>ExplainabilityConfig</code></a></td>
    <td></td>
    <td>Explainability is only available for Forecasts and Predictors generated from an AutoPredictor (CreateAutoPredictor) Creates an Amazon Forecast Explainability. Explainability helps you better understand how the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify the relative impact of each attribute and determine whether they increase or decrease forecast values. To enable Forecast Explainability, your predictor must include at least one of the following: related time series, item metadata, or additional datasets like Holidays and the Weather Index. CreateExplainability accepts either a Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a Forecast ARN. CreateExplainability with a Predictor ARN You can only have one Explainability resource per predictor. If you already enabled ExplainPredictor in CreateAutoPredictor, that predictor already has an Explainability resource. The following parameters are required when providing a Predictor ARN: ExplainabilityName - A unique name for the Explainability. ResourceArn - The Arn of the predictor. TimePointGranularity - Must be set to “ALL”. TimeSeriesGranularity - Must be set to “ALL”. Do not specify a value for the following parameters: DataSource - Only valid when TimeSeriesGranularity is “SPECIFIC”. Schema - Only valid when TimeSeriesGranularity is “SPECIFIC”. StartDateTime - Only valid when TimePointGranularity is “SPECIFIC”. EndDateTime - Only valid when TimePointGranularity is “SPECIFIC”. CreateExplainability with a Forecast ARN You can specify a maximum of 50 time series and 500 time points. The following parameters are required when providing a Predictor ARN: ExplainabilityName - A unique name for the Explainability. ResourceArn - The Arn of the forecast. TimePointGranularity - Either “ALL” or “SPECIFIC”. TimeSeriesGranularity - Either “ALL” or “SPECIFIC”. If you set TimeSeriesGranularity to “SPECIFIC”, you must also provide the following: DataSource - The S3 location of the CSV file specifying your time series. Schema - The Schema defines the attributes and attribute types listed in the Data Source. If you set TimePointGranularity to “SPECIFIC”, you must also provide the following: StartDateTime - The first timestamp in the range of time points. EndDateTime - The last timestamp in the range of time points.</td>
</tr>
<tr>
    <td><a href="#delete_explainability"><CopyableCode code="delete_explainability" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Explainability resource. You can delete only predictor that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeExplainability operation.</td>
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
    defaultValue="describe_explainability"
    values={[
        { label: 'describe_explainability', value: 'describe_explainability' },
        { label: 'list_explainabilities', value: 'list_explainabilities' }
    ]}
>
<TabItem value="describe_explainability">

Describes an Explainability resource created using the CreateExplainability operation.

```sql
SELECT
creation_time,
data_source,
enable_visualization,
end_date_time,
estimated_time_remaining_in_minutes,
explainability_arn,
explainability_config,
explainability_name,
last_modification_time,
message,
resource_arn,
schema,
start_date_time,
status
FROM aws.forecast.explainabilities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_explainabilities">

Returns a list of Explainability resources created using the CreateExplainability operation. This operation returns a summary for each Explainability. You can filter the list using an array of Filter objects. To retrieve the complete set of properties for a particular Explainability resource, use the ARN with the DescribeExplainability operation.

```sql
SELECT
creation_time,
explainability_arn,
explainability_config,
explainability_name,
last_modification_time,
message,
resource_arn,
status
FROM aws.forecast.explainabilities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_explainability"
    values={[
        { label: 'create_explainability', value: 'create_explainability' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_explainability">

Explainability is only available for Forecasts and Predictors generated from an AutoPredictor (CreateAutoPredictor) Creates an Amazon Forecast Explainability. Explainability helps you better understand how the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify the relative impact of each attribute and determine whether they increase or decrease forecast values. To enable Forecast Explainability, your predictor must include at least one of the following: related time series, item metadata, or additional datasets like Holidays and the Weather Index. CreateExplainability accepts either a Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a Forecast ARN. CreateExplainability with a Predictor ARN You can only have one Explainability resource per predictor. If you already enabled ExplainPredictor in CreateAutoPredictor, that predictor already has an Explainability resource. The following parameters are required when providing a Predictor ARN: ExplainabilityName - A unique name for the Explainability. ResourceArn - The Arn of the predictor. TimePointGranularity - Must be set to “ALL”. TimeSeriesGranularity - Must be set to “ALL”. Do not specify a value for the following parameters: DataSource - Only valid when TimeSeriesGranularity is “SPECIFIC”. Schema - Only valid when TimeSeriesGranularity is “SPECIFIC”. StartDateTime - Only valid when TimePointGranularity is “SPECIFIC”. EndDateTime - Only valid when TimePointGranularity is “SPECIFIC”. CreateExplainability with a Forecast ARN You can specify a maximum of 50 time series and 500 time points. The following parameters are required when providing a Predictor ARN: ExplainabilityName - A unique name for the Explainability. ResourceArn - The Arn of the forecast. TimePointGranularity - Either “ALL” or “SPECIFIC”. TimeSeriesGranularity - Either “ALL” or “SPECIFIC”. If you set TimeSeriesGranularity to “SPECIFIC”, you must also provide the following: DataSource - The S3 location of the CSV file specifying your time series. Schema - The Schema defines the attributes and attribute types listed in the Data Source. If you set TimePointGranularity to “SPECIFIC”, you must also provide the following: StartDateTime - The first timestamp in the range of time points. EndDateTime - The last timestamp in the range of time points.

```sql
INSERT INTO aws.forecast.explainabilities (
ExplainabilityName,
ResourceArn,
ExplainabilityConfig,
DataSource,
Schema,
EnableVisualization,
StartDateTime,
EndDateTime,
Tags,
region
)
SELECT 
'{{ ExplainabilityName }}' /* required */,
'{{ ResourceArn }}' /* required */,
'{{ ExplainabilityConfig }}' /* required */,
'{{ DataSource }}',
'{{ Schema }}',
{{ EnableVisualization }},
'{{ StartDateTime }}',
'{{ EndDateTime }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
explainability_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: explainabilities
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the explainabilities resource.
    - name: ExplainabilityName
      value: "{{ ExplainabilityName }}"
      description: |
        A unique name for the Explainability.
    - name: ResourceArn
      value: "{{ ResourceArn }}"
      description: |
        The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the Explainability.
    - name: ExplainabilityConfig
      description: |
        The configuration settings that define the granularity of time series and time points for the Explainability.
      value:
        TimeSeriesGranularity: "{{ TimeSeriesGranularity }}"
        TimePointGranularity: "{{ TimePointGranularity }}"
    - name: DataSource
      description: |
        The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.
      value:
        S3Config:
          Path: "{{ Path }}"
          RoleArn: "{{ RoleArn }}"
          KMSKeyArn: "{{ KMSKeyArn }}"
    - name: Schema
      description: |
        Defines the fields of a dataset.
      value:
        Attributes:
          - AttributeName: "{{ AttributeName }}"
            AttributeType: "{{ AttributeType }}"
    - name: EnableVisualization
      value: {{ EnableVisualization }}
      description: |
        Create an Explainability visualization that is viewable within the Amazon Web Services console.
    - name: StartDateTime
      value: "{{ StartDateTime }}"
      description: |
        If TimePointGranularity is set to SPECIFIC, define the first point for the Explainability. Use the following timestamp format: yyyy-MM-ddTHH:mm:ss (example: 2015-01-01T20:00:00)
    - name: EndDateTime
      value: "{{ EndDateTime }}"
      description: |
        If TimePointGranularity is set to SPECIFIC, define the last time point for the Explainability. Use the following timestamp format: yyyy-MM-ddTHH:mm:ss (example: 2015-01-01T20:00:00)
    - name: Tags
      description: |
        Optional metadata to help you categorize and organize your resources. Each tag consists of a key and an optional value, both of which you define. Tag keys and values are case sensitive. The following restrictions apply to tags: For each resource, each tag key must be unique and each tag key must have one value. Maximum number of tags per resource: 50. Maximum key length: 128 Unicode characters in UTF-8. Maximum value length: 256 Unicode characters in UTF-8. Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your tagging schema is used across other services and resources, the character restrictions of those services also apply. Key prefixes cannot include any upper or lowercase combination of aws: or AWS:. Values can have this prefix. If a tag value has aws as its prefix but the key does not, Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit. You cannot edit or delete tag keys with this prefix.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_explainability"
    values={[
        { label: 'delete_explainability', value: 'delete_explainability' }
    ]}
>
<TabItem value="delete_explainability">

Deletes an Explainability resource. You can delete only predictor that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeExplainability operation.

```sql
DELETE FROM aws.forecast.explainabilities
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
