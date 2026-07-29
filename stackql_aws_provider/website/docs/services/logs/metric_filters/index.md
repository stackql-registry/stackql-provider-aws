--- 
title: metric_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - metric_filters
  - logs
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

Creates, updates, deletes, gets or lists a <code>metric_filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metric_filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.metric_filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_metric_filters"
    values={[
        { label: 'describe_metric_filters', value: 'describe_metric_filters' }
    ]}
>
<TabItem value="describe_metric_filters">

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
    <td><CopyableCode code="apply_on_transformed_logs" /></td>
    <td><code>boolean</code></td>
    <td>This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see PutTransformer. If this value is true, the metric filter is applied on the transformed version of the log events instead of the original ingested log events.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The creation time of the metric filter, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="emit_system_field_dimensions" /></td>
    <td><code>array</code></td>
    <td>The list of system fields that are emitted as additional dimensions in the generated metrics. Returns the emitSystemFieldDimensions value if it was specified when the metric filter was created.</td>
</tr>
<tr>
    <td><CopyableCode code="field_selection_criteria" /></td>
    <td><code>string</code></td>
    <td>The filter expression that specifies which log events are processed by this metric filter based on system fields. Returns the fieldSelectionCriteria value if it was specified when the metric filter was created.</td>
</tr>
<tr>
    <td><CopyableCode code="filter_name" /></td>
    <td><code>string</code></td>
    <td>The name of the metric filter. (pattern: &lt;code&gt;&#91;^:*&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="filter_pattern" /></td>
    <td><code>string</code></td>
    <td>A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.</td>
</tr>
<tr>
    <td><CopyableCode code="log_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the log group. (pattern: &lt;code&gt;&#91;\.\-_/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metric_transformations" /></td>
    <td><code>array</code></td>
    <td>The metric transformations.</td>
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
    <td><a href="#describe_metric_filters"><CopyableCode code="describe_metric_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the specified metric filters. You can list all of the metric filters or filter the results by log name, prefix, metric name, or metric namespace. The results are ASCII-sorted by filter name.</td>
</tr>
<tr>
    <td><a href="#put_metric_filter"><CopyableCode code="put_metric_filter" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupName"><code>logGroupName</code></a>, <a href="#parameter-filterName"><code>filterName</code></a>, <a href="#parameter-filterPattern"><code>filterPattern</code></a>, <a href="#parameter-metricTransformations"><code>metricTransformations</code></a></td>
    <td></td>
    <td>Creates or updates a metric filter and associates it with the specified log group. With metric filters, you can configure rules to extract metric data from log events ingested through PutLogEvents. The maximum number of metric filters that can be associated with a log group is 100. Using regular expressions in filter patterns is supported. For these filters, there is a quota of two regular expression patterns within a single filter pattern. There is also a quota of five regular expression patterns per log group. For more information about using regular expressions in filter patterns, see Filter pattern syntax for metric filters, subscription filters, filter log events, and Live Tail. When you create a metric filter, you can also optionally assign a unit and dimensions to the metric that is created. Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as IPAddress or requestID as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric. CloudWatch Logs might disable a metric filter if it generates 1,000 different name/value pairs for your specified dimensions within one hour. You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges.</td>
</tr>
<tr>
    <td><a href="#delete_metric_filter"><CopyableCode code="delete_metric_filter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified metric filter.</td>
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
    defaultValue="describe_metric_filters"
    values={[
        { label: 'describe_metric_filters', value: 'describe_metric_filters' }
    ]}
>
<TabItem value="describe_metric_filters">

Lists the specified metric filters. You can list all of the metric filters or filter the results by log name, prefix, metric name, or metric namespace. The results are ASCII-sorted by filter name.

```sql
SELECT
apply_on_transformed_logs,
creation_time,
emit_system_field_dimensions,
field_selection_criteria,
filter_name,
filter_pattern,
log_group_name,
metric_transformations
FROM aws.logs.metric_filters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_metric_filter"
    values={[
        { label: 'put_metric_filter', value: 'put_metric_filter' }
    ]}
>
<TabItem value="put_metric_filter">

Creates or updates a metric filter and associates it with the specified log group. With metric filters, you can configure rules to extract metric data from log events ingested through PutLogEvents. The maximum number of metric filters that can be associated with a log group is 100. Using regular expressions in filter patterns is supported. For these filters, there is a quota of two regular expression patterns within a single filter pattern. There is also a quota of five regular expression patterns per log group. For more information about using regular expressions in filter patterns, see Filter pattern syntax for metric filters, subscription filters, filter log events, and Live Tail. When you create a metric filter, you can also optionally assign a unit and dimensions to the metric that is created. Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as IPAddress or requestID as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric. CloudWatch Logs might disable a metric filter if it generates 1,000 different name/value pairs for your specified dimensions within one hour. You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges.

```sql
REPLACE aws.logs.metric_filters
SET 
logGroupName = '{{ logGroupName }}',
filterName = '{{ filterName }}',
filterPattern = '{{ filterPattern }}',
metricTransformations = '{{ metricTransformations }}',
applyOnTransformedLogs = {{ applyOnTransformedLogs }},
fieldSelectionCriteria = '{{ fieldSelectionCriteria }}',
emitSystemFieldDimensions = '{{ emitSystemFieldDimensions }}'
WHERE 
region = '{{ region }}' --required
AND logGroupName = '{{ logGroupName }}' --required
AND filterName = '{{ filterName }}' --required
AND filterPattern = '{{ filterPattern }}' --required
AND metricTransformations = '{{ metricTransformations }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_metric_filter"
    values={[
        { label: 'delete_metric_filter', value: 'delete_metric_filter' }
    ]}
>
<TabItem value="delete_metric_filter">

Deletes the specified metric filter.

```sql
DELETE FROM aws.logs.metric_filters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
