--- 
title: rum_metric_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_metric_definitions
  - rum
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

Creates, updates, deletes, gets or lists a <code>rum_metric_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_metric_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rum.rum_metric_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_rum_metric_definitions"
    values={[
        { label: 'batch_get_rum_metric_definitions', value: 'batch_get_rum_metric_definitions' }
    ]}
>
<TabItem value="batch_get_rum_metric_definitions">

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
    <td><CopyableCode code="DimensionKeys" /></td>
    <td><code>object</code></td>
    <td>This field is a map of field paths to dimension names. It defines the dimensions to associate with this metric in CloudWatch The value of this field is used only if the metric destination is CloudWatch. If the metric destination is Evidently, the value of DimensionKeys is ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="EventPattern" /></td>
    <td><code>string</code></td>
    <td>The pattern that defines the metric. RUM checks events that happen in a user's session against the pattern, and events that match the pattern are sent to the metric destination. If the metrics destination is CloudWatch and the event also matches a value in DimensionKeys, then the metric is published with the specified dimensions.</td>
</tr>
<tr>
    <td><CopyableCode code="MetricDefinitionId" /></td>
    <td><code>string</code></td>
    <td>The ID of this metric definition.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the metric that is defined in this structure.</td>
</tr>
<tr>
    <td><CopyableCode code="Namespace" /></td>
    <td><code>string</code></td>
    <td>If this metric definition is for a custom metric instead of an extended metric, this field displays the metric namespace that the custom metric is published to. (pattern: &lt;code&gt;.*&#91;a-zA-Z0-9-._/#:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UnitLabel" /></td>
    <td><code>string</code></td>
    <td>Use this field only if you are sending this metric to CloudWatch. It defines the CloudWatch metric unit that this metric is measured in.</td>
</tr>
<tr>
    <td><CopyableCode code="ValueKey" /></td>
    <td><code>string</code></td>
    <td>The field within the event object that the metric value is sourced from.</td>
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
    <td><a href="#batch_get_rum_metric_definitions"><CopyableCode code="batch_get_rum_metric_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_monitor_name"><code>app_monitor_name</code></a>, <a href="#parameter-destination"><code>destination</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-destinationArn"><code>destinationArn</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves the list of metrics and dimensions that a RUM app monitor is sending to a single destination.</td>
</tr>
<tr>
    <td><a href="#update_rum_metric_definition"><CopyableCode code="update_rum_metric_definition" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_monitor_name"><code>app_monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MetricDefinition"><code>MetricDefinition</code></a>, <a href="#parameter-MetricDefinitionId"><code>MetricDefinitionId</code></a></td>
    <td></td>
    <td>Modifies one existing metric definition for CloudWatch RUM extended metrics. For more information about extended metrics, see BatchCreateRumMetricsDefinitions.</td>
</tr>
<tr>
    <td><a href="#batch_create_rum_metric_definitions"><CopyableCode code="batch_create_rum_metric_definitions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_monitor_name"><code>app_monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MetricDefinitions"><code>MetricDefinitions</code></a></td>
    <td></td>
    <td>Specifies the extended metrics and custom metrics that you want a CloudWatch RUM app monitor to send to a destination. Valid destinations include CloudWatch and Evidently. By default, RUM app monitors send some metrics to CloudWatch. These default metrics are listed in CloudWatch metrics that you can collect with CloudWatch RUM. In addition to these default metrics, you can choose to send extended metrics, custom metrics, or both. Extended metrics let you send metrics with additional dimensions that aren't included in the default metrics. You can also send extended metrics to both Evidently and CloudWatch. The valid dimension names for the additional dimensions for extended metrics are BrowserName, CountryCode, DeviceType, FileType, OSName, and PageId. For more information, see Extended metrics that you can send to CloudWatch and CloudWatch Evidently. Custom metrics are metrics that you define. You can send custom metrics to CloudWatch. CloudWatch Evidently, or both. With custom metrics, you can use any metric name and namespace. To derive the metrics, you can use any custom events, built-in events, custom attributes, or default attributes. You can't send custom metrics to the AWS/RUM namespace. You must send custom metrics to a custom namespace that you define. The namespace that you use can't start with AWS/. CloudWatch RUM prepends RUM/CustomMetrics/ to the custom namespace that you define, so the final namespace for your metrics in CloudWatch is RUM/CustomMetrics/your-custom-namespace . The maximum number of metric definitions that you can specify in one BatchCreateRumMetricDefinitions operation is 200. The maximum number of metric definitions that one destination can contain is 2000. Extended metrics sent to CloudWatch and RUM custom metrics are charged as CloudWatch custom metrics. Each combination of additional dimension name and dimension value counts as a custom metric. For more information, see Amazon CloudWatch Pricing. You must have already created a destination for the metrics before you send them. For more information, see PutRumMetricsDestination. If some metric definitions specified in a BatchCreateRumMetricDefinitions operations are not valid, those metric definitions fail and return errors, but all valid metric definitions in the same operation still succeed.</td>
</tr>
<tr>
    <td><a href="#batch_delete_rum_metric_definitions"><CopyableCode code="batch_delete_rum_metric_definitions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_monitor_name"><code>app_monitor_name</code></a>, <a href="#parameter-destination"><code>destination</code></a>, <a href="#parameter-metricDefinitionIds"><code>metricDefinitionIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-destinationArn"><code>destinationArn</code></a></td>
    <td>Removes the specified metrics from being sent to an extended metrics destination. If some metric definition IDs specified in a BatchDeleteRumMetricDefinitions operations are not valid, those metric definitions fail and return errors, but all valid metric definition IDs in the same operation are still deleted. The maximum number of metric definitions that you can specify in one BatchDeleteRumMetricDefinitions operation is 200.</td>
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
<tr id="parameter-app_monitor_name">
    <td><CopyableCode code="app_monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the CloudWatch RUM app monitor that is sending these metrics.</td>
</tr>
<tr id="parameter-destination">
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Defines the destination where you want to stop sending the specified metrics. Valid values are CloudWatch and Evidently. If you specify Evidently, you must also specify the ARN of the CloudWatchEvidently experiment that is to be the destination and an IAM role that has permission to write to the experiment.</td>
</tr>
<tr id="parameter-metricDefinitionIds">
    <td><CopyableCode code="metricDefinitionIds" /></td>
    <td><code>array</code></td>
    <td>An array of structures which define the metrics that you want to stop sending.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-destinationArn">
    <td><CopyableCode code="destinationArn" /></td>
    <td><code>string</code></td>
    <td>This parameter is required if Destination is Evidently. If Destination is CloudWatch, do not use this parameter. This parameter specifies the ARN of the Evidently experiment that was receiving the metrics that are being deleted.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in one operation. The default is 50. The maximum that you can specify is 100. To retrieve the remaining results, make another call with the returned NextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Use the token returned by the previous operation to request the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_rum_metric_definitions"
    values={[
        { label: 'batch_get_rum_metric_definitions', value: 'batch_get_rum_metric_definitions' }
    ]}
>
<TabItem value="batch_get_rum_metric_definitions">

Retrieves the list of metrics and dimensions that a RUM app monitor is sending to a single destination.

```sql
SELECT
DimensionKeys,
EventPattern,
MetricDefinitionId,
Name,
Namespace,
UnitLabel,
ValueKey
FROM aws.rum.rum_metric_definitions
WHERE app_monitor_name = '{{ app_monitor_name }}' -- required
AND destination = '{{ destination }}' -- required
AND region = '{{ region }}' -- required
AND destinationArn = '{{ destinationArn }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rum_metric_definition"
    values={[
        { label: 'update_rum_metric_definition', value: 'update_rum_metric_definition' }
    ]}
>
<TabItem value="update_rum_metric_definition">

Modifies one existing metric definition for CloudWatch RUM extended metrics. For more information about extended metrics, see BatchCreateRumMetricsDefinitions.

```sql
UPDATE aws.rum.rum_metric_definitions
SET 
Destination = '{{ Destination }}',
DestinationArn = '{{ DestinationArn }}',
MetricDefinition = '{{ MetricDefinition }}',
MetricDefinitionId = '{{ MetricDefinitionId }}'
WHERE 
app_monitor_name = '{{ app_monitor_name }}' --required
AND region = '{{ region }}' --required
AND MetricDefinition = '{{ MetricDefinition }}' --required
AND MetricDefinitionId = '{{ MetricDefinitionId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_create_rum_metric_definitions"
    values={[
        { label: 'batch_create_rum_metric_definitions', value: 'batch_create_rum_metric_definitions' },
        { label: 'batch_delete_rum_metric_definitions', value: 'batch_delete_rum_metric_definitions' }
    ]}
>
<TabItem value="batch_create_rum_metric_definitions">

Specifies the extended metrics and custom metrics that you want a CloudWatch RUM app monitor to send to a destination. Valid destinations include CloudWatch and Evidently. By default, RUM app monitors send some metrics to CloudWatch. These default metrics are listed in CloudWatch metrics that you can collect with CloudWatch RUM. In addition to these default metrics, you can choose to send extended metrics, custom metrics, or both. Extended metrics let you send metrics with additional dimensions that aren't included in the default metrics. You can also send extended metrics to both Evidently and CloudWatch. The valid dimension names for the additional dimensions for extended metrics are BrowserName, CountryCode, DeviceType, FileType, OSName, and PageId. For more information, see Extended metrics that you can send to CloudWatch and CloudWatch Evidently. Custom metrics are metrics that you define. You can send custom metrics to CloudWatch. CloudWatch Evidently, or both. With custom metrics, you can use any metric name and namespace. To derive the metrics, you can use any custom events, built-in events, custom attributes, or default attributes. You can't send custom metrics to the AWS/RUM namespace. You must send custom metrics to a custom namespace that you define. The namespace that you use can't start with AWS/. CloudWatch RUM prepends RUM/CustomMetrics/ to the custom namespace that you define, so the final namespace for your metrics in CloudWatch is RUM/CustomMetrics/your-custom-namespace . The maximum number of metric definitions that you can specify in one BatchCreateRumMetricDefinitions operation is 200. The maximum number of metric definitions that one destination can contain is 2000. Extended metrics sent to CloudWatch and RUM custom metrics are charged as CloudWatch custom metrics. Each combination of additional dimension name and dimension value counts as a custom metric. For more information, see Amazon CloudWatch Pricing. You must have already created a destination for the metrics before you send them. For more information, see PutRumMetricsDestination. If some metric definitions specified in a BatchCreateRumMetricDefinitions operations are not valid, those metric definitions fail and return errors, but all valid metric definitions in the same operation still succeed.

```sql
EXEC aws.rum.rum_metric_definitions.batch_create_rum_metric_definitions 
@app_monitor_name='{{ app_monitor_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Destination": "{{ Destination }}", 
"DestinationArn": "{{ DestinationArn }}", 
"MetricDefinitions": "{{ MetricDefinitions }}"
}'
;
```
</TabItem>
<TabItem value="batch_delete_rum_metric_definitions">

Removes the specified metrics from being sent to an extended metrics destination. If some metric definition IDs specified in a BatchDeleteRumMetricDefinitions operations are not valid, those metric definitions fail and return errors, but all valid metric definition IDs in the same operation are still deleted. The maximum number of metric definitions that you can specify in one BatchDeleteRumMetricDefinitions operation is 200.

```sql
EXEC aws.rum.rum_metric_definitions.batch_delete_rum_metric_definitions 
@app_monitor_name='{{ app_monitor_name }}' --required, 
@destination='{{ destination }}' --required, 
@metricDefinitionIds='{{ metricDefinitionIds }}' --required, 
@region='{{ region }}' --required, 
@destinationArn='{{ destinationArn }}'
;
```
</TabItem>
</Tabs>
