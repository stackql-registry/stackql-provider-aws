--- 
title: metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - metrics
  - connect
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

Creates, updates, deletes, gets or lists a <code>metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_metric"
    values={[
        { label: 'describe_metric', value: 'describe_metric' },
        { label: 'list_metrics', value: 'list_metrics' },
        { label: 'search_metrics', value: 'search_metrics' }
    ]}
>
<TabItem value="describe_metric">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the metric. May be qualified with $SAVED or $LATEST.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category of the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the metric was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_user" /></td>
    <td><code>object</code></td>
    <td>Information on the identity that created the file.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_method" /></td>
    <td><code>string</code></td>
    <td>The method used to create the metric. Valid values: SERVICE_LEVEL_BUILDER (created with the guided service-level experience) | METRIC_BUILDER (created with the free-form metric builder). (SERVICE_LEVEL_BUILDER, METRIC_BUILDER)</td>
</tr>
<tr>
    <td><CopyableCode code="default_stat" /></td>
    <td><code>string</code></td>
    <td>The default stat aggregation for the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="effective_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The earliest time that can be queried for this metric.</td>
</tr>
<tr>
    <td><CopyableCode code="filters" /></td>
    <td><code>array</code></td>
    <td>The filters applied to the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="groupings" /></td>
    <td><code>array</code></td>
    <td>The groupings available for this metric.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The region where the metric was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the metric was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_user" /></td>
    <td><code>object</code></td>
    <td>Information on the identity that created the file.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_calculation" /></td>
    <td><code>object</code></td>
    <td>Contains the formula and component metrics that define a custom metric calculation.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="positive_trend_indicator" /></td>
    <td><code>string</code></td>
    <td>Specifies how to interpret a positive trend in metric data. Valid values: POSITIVE | NEGATIVE | NEUTRAL. (POSITIVE, NEGATIVE, NEUTRAL)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_event_source" /></td>
    <td><code>string</code></td>
    <td>The primary event source for the metric data.</td>
</tr>
<tr>
    <td><CopyableCode code="primary_event_source_effective_timestamp_type" /></td>
    <td><code>string</code></td>
    <td>The timestamp type that determines where the metric appears on a time series.</td>
</tr>
<tr>
    <td><CopyableCode code="refresh_rate" /></td>
    <td><code>integer (int64)</code></td>
    <td>The minimum interval, in seconds, between data refreshes for this metric.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The publish status of a metric. Valid values: PUBLISHED | SAVED. (PUBLISHED, SAVED)</td>
</tr>
<tr>
    <td><CopyableCode code="supported_stats" /></td>
    <td><code>array</code></td>
    <td>The stat aggregations available for this metric.</td>
</tr>
<tr>
    <td><CopyableCode code="supports_custom_calculation" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the metric can be used as a component of custom metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="supports_preaggregate_calculation" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the metric can be used inside aggregating statistical functions (SUM, AVG, etc.) in custom metric calculations.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the metric. Valid values: AWS_MANAGED | CUSTOMER_MANAGED. (AWS_MANAGED, CUSTOMER_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>The display unit for metric data. Valid values: INTEGER | DOUBLE | PERCENT | SECONDS. (INTEGER, DOUBLE, PERCENT, SECONDS)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_metrics">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The region where the metric was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the metric was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The publish status of a metric. Valid values: PUBLISHED | SAVED. (PUBLISHED, SAVED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the metric. Valid values: AWS_MANAGED | CUSTOMER_MANAGED. (AWS_MANAGED, CUSTOMER_MANAGED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_metrics">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the metric. May be qualified with $SAVED or $LATEST.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category of the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the metric was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_user" /></td>
    <td><code>object</code></td>
    <td>Information on the identity that created the file.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_method" /></td>
    <td><code>string</code></td>
    <td>The method used to create the metric. Valid values: SERVICE_LEVEL_BUILDER (created with the guided service-level experience) | METRIC_BUILDER (created with the free-form metric builder). (SERVICE_LEVEL_BUILDER, METRIC_BUILDER)</td>
</tr>
<tr>
    <td><CopyableCode code="default_stat" /></td>
    <td><code>string</code></td>
    <td>The default stat aggregation for the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="effective_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The earliest time that can be queried for this metric.</td>
</tr>
<tr>
    <td><CopyableCode code="filters" /></td>
    <td><code>array</code></td>
    <td>The filters applied to the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="groupings" /></td>
    <td><code>array</code></td>
    <td>The groupings available for this metric.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The region where the metric was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the metric was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_user" /></td>
    <td><code>object</code></td>
    <td>Information on the identity that created the file.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_calculation" /></td>
    <td><code>object</code></td>
    <td>Contains the formula and component metrics that define a custom metric calculation.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="positive_trend_indicator" /></td>
    <td><code>string</code></td>
    <td>Specifies how to interpret a positive trend in metric data. Valid values: POSITIVE | NEGATIVE | NEUTRAL. (POSITIVE, NEGATIVE, NEUTRAL)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_event_source" /></td>
    <td><code>string</code></td>
    <td>The primary event source for the metric data.</td>
</tr>
<tr>
    <td><CopyableCode code="primary_event_source_effective_timestamp_type" /></td>
    <td><code>string</code></td>
    <td>The timestamp type that determines where the metric appears on a time series.</td>
</tr>
<tr>
    <td><CopyableCode code="refresh_rate" /></td>
    <td><code>integer (int64)</code></td>
    <td>The minimum interval, in seconds, between data refreshes for this metric.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The publish status of a metric. Valid values: PUBLISHED | SAVED. (PUBLISHED, SAVED)</td>
</tr>
<tr>
    <td><CopyableCode code="supported_stats" /></td>
    <td><code>array</code></td>
    <td>The stat aggregations available for this metric.</td>
</tr>
<tr>
    <td><CopyableCode code="supports_custom_calculation" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the metric can be used as a component of custom metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="supports_preaggregate_calculation" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the metric can be used inside aggregating statistical functions (SUM, AVG, etc.) in custom metric calculations.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the metric. Valid values: AWS_MANAGED | CUSTOMER_MANAGED. (AWS_MANAGED, CUSTOMER_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>The display unit for metric data. Valid values: INTEGER | DOUBLE | PERCENT | SECONDS. (INTEGER, DOUBLE, PERCENT, SECONDS)</td>
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
    <td><a href="#describe_metric"><CopyableCode code="describe_metric" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-metric_id"><code>metric_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the full definition of an existing metric from the specified Connect Customer instance.</td>
</tr>
<tr>
    <td><a href="#list_metrics"><CopyableCode code="list_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a paginated list of metric summaries for the specified Connect Customer instance. Use pagination to ensure that the operation returns quickly and successfully.</td>
</tr>
<tr>
    <td><a href="#search_metrics"><CopyableCode code="search_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for metrics in the specified Connect Customer instance using search criteria and optional tag-based filters. Use pagination to ensure that the operation returns quickly and successfully.</td>
</tr>
<tr>
    <td><a href="#create_metric"><CopyableCode code="create_metric" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MetricCalculation"><code>MetricCalculation</code></a></td>
    <td></td>
    <td>Creates a new metric definition for the specified Connect Customer instance. You can create custom metrics that use formulas referencing existing Amazon Web Services-managed metrics, optionally with filters applied.</td>
</tr>
<tr>
    <td><a href="#update_metric_content"><CopyableCode code="update_metric_content" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-metric_id"><code>metric_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the calculation, unit, and/or trend indicator of an existing metric in the specified Connect Customer instance.</td>
</tr>
<tr>
    <td><a href="#delete_metric"><CopyableCode code="delete_metric" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-metric_id"><code>metric_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing metric from the specified Connect Customer instance. This operation fails with ResourceConflictException if the metric is currently in use in a dashboard.</td>
</tr>
<tr>
    <td><a href="#update_metric_metadata"><CopyableCode code="update_metric_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-metric_id"><code>metric_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the name and/or description of an existing metric in the specified Connect Customer instance.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-metric_id">
    <td><CopyableCode code="metric_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the metric to update. Adding the $SAVED qualifier will update the saved version of the metric. Adding $LATEST or omitting a qualifier will update the published version.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of metrics to list. Valid values: AWS_MANAGED | CUSTOMER_MANAGED.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_metric"
    values={[
        { label: 'describe_metric', value: 'describe_metric' },
        { label: 'list_metrics', value: 'list_metrics' },
        { label: 'search_metrics', value: 'search_metrics' }
    ]}
>
<TabItem value="describe_metric">

Retrieves the full definition of an existing metric from the specified Connect Customer instance.

```sql
SELECT
arn,
category,
created_time,
created_user,
creation_method,
default_stat,
description,
effective_time,
filters,
groupings,
id,
last_modified_region,
last_modified_time,
last_modified_user,
metric_calculation,
name,
positive_trend_indicator,
primary_event_source,
primary_event_source_effective_timestamp_type,
refresh_rate,
status,
supported_stats,
supports_custom_calculation,
supports_preaggregate_calculation,
tags,
type,
unit
FROM aws.connect.metrics
WHERE instance_id = '{{ instance_id }}' -- required
AND metric_id = '{{ metric_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_metrics">

Retrieves a paginated list of metric summaries for the specified Connect Customer instance. Use pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
arn,
id,
last_modified_region,
last_modified_time,
name,
status,
type
FROM aws.connect.metrics
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND type = '{{ type }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
<TabItem value="search_metrics">

Searches for metrics in the specified Connect Customer instance using search criteria and optional tag-based filters. Use pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
arn,
category,
created_time,
created_user,
creation_method,
default_stat,
description,
effective_time,
filters,
groupings,
id,
last_modified_region,
last_modified_time,
last_modified_user,
metric_calculation,
name,
positive_trend_indicator,
primary_event_source,
primary_event_source_effective_timestamp_type,
refresh_rate,
status,
supported_stats,
supports_custom_calculation,
supports_preaggregate_calculation,
tags,
type,
unit
FROM aws.connect.metrics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_metric"
    values={[
        { label: 'create_metric', value: 'create_metric' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_metric">

Creates a new metric definition for the specified Connect Customer instance. You can create custom metrics that use formulas referencing existing Amazon Web Services-managed metrics, optionally with filters applied.

```sql
INSERT INTO aws.connect.metrics (
Name,
MetricCalculation,
Unit,
Status,
ClientToken,
Description,
PositiveTrendIndicator,
Tags,
instance_id,
region
)
SELECT 
'{{ Name }}',
'{{ MetricCalculation }}' /* required */,
'{{ Unit }}',
'{{ Status }}',
'{{ ClientToken }}',
'{{ Description }}',
'{{ PositiveTrendIndicator }}',
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
metric_arn,
metric_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: metrics
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the metrics resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the metrics resource.
    - name: Name
      value: "{{ Name }}"
    - name: MetricCalculation
      description: |
        Contains the formula and component metrics that define a custom metric calculation.
      value:
        CalculationComponents:
          - Alias: "{{ Alias }}"
            MetricName: "{{ MetricName }}"
            MetricId: "{{ MetricId }}"
            MetricFilters: "{{ MetricFilters }}"
        Calculation: "{{ Calculation }}"
    - name: Unit
      value: "{{ Unit }}"
      description: |
        The display unit for metric data. Valid values: INTEGER | DOUBLE | PERCENT | SECONDS.
      valid_values: ['INTEGER', 'DOUBLE', 'PERCENT', 'SECONDS']
    - name: Status
      value: "{{ Status }}"
      description: |
        The publish status of a metric. Valid values: PUBLISHED | SAVED.
      valid_values: ['PUBLISHED', 'SAVED']
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Description
      value: "{{ Description }}"
    - name: PositiveTrendIndicator
      value: "{{ PositiveTrendIndicator }}"
      description: |
        Specifies how to interpret a positive trend in metric data. Valid values: POSITIVE | NEGATIVE | NEUTRAL.
      valid_values: ['POSITIVE', 'NEGATIVE', 'NEUTRAL']
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_metric_content"
    values={[
        { label: 'update_metric_content', value: 'update_metric_content' }
    ]}
>
<TabItem value="update_metric_content">

Updates the calculation, unit, and/or trend indicator of an existing metric in the specified Connect Customer instance.

```sql
UPDATE aws.connect.metrics
SET 
MetricCalculation = '{{ MetricCalculation }}',
Unit = '{{ Unit }}',
PositiveTrendIndicator = '{{ PositiveTrendIndicator }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND metric_id = '{{ metric_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_metric"
    values={[
        { label: 'delete_metric', value: 'delete_metric' }
    ]}
>
<TabItem value="delete_metric">

Deletes an existing metric from the specified Connect Customer instance. This operation fails with ResourceConflictException if the metric is currently in use in a dashboard.

```sql
DELETE FROM aws.connect.metrics
WHERE instance_id = '{{ instance_id }}' --required
AND metric_id = '{{ metric_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_metric_metadata"
    values={[
        { label: 'update_metric_metadata', value: 'update_metric_metadata' }
    ]}
>
<TabItem value="update_metric_metadata">

Updates the name and/or description of an existing metric in the specified Connect Customer instance.

```sql
EXEC aws.connect.metrics.update_metric_metadata 
@instance_id='{{ instance_id }}' --required, 
@metric_id='{{ metric_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"Description": "{{ Description }}"
}'
;
```
</TabItem>
</Tabs>
