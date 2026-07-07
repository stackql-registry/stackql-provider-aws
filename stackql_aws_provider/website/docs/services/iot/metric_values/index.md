--- 
title: metric_values
hide_title: false
hide_table_of_contents: false
keywords:
  - metric_values
  - iot
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

Creates, updates, deletes, gets or lists a <code>metric_values</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metric_values" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.metric_values" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_metric_values"
    values={[
        { label: 'list_metric_values', value: 'list_metric_values' }
    ]}
>
<TabItem value="list_metric_values">

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
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the metric value was reported.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>object</code></td>
    <td>The value reported for the metric.</td>
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
    <td><a href="#list_metric_values"><CopyableCode code="list_metric_values" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-thingName"><code>thingName</code></a>, <a href="#parameter-metricName"><code>metricName</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-dimensionName"><code>dimensionName</code></a>, <a href="#parameter-dimensionValueOperator"><code>dimensionValueOperator</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the values reported for an IoT Device Defender metric (device-side metric, cloud-side metric, or custom metric) by the given thing during the specified time period.</td>
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
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the time period for which metric values are returned.</td>
</tr>
<tr id="parameter-metricName">
    <td><CopyableCode code="metricName" /></td>
    <td><code>string</code></td>
    <td>The name of the security profile metric for which values are returned.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the time period for which metric values are returned.</td>
</tr>
<tr id="parameter-thingName">
    <td><CopyableCode code="thingName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing for which security profile metric values are returned.</td>
</tr>
<tr id="parameter-dimensionName">
    <td><CopyableCode code="dimensionName" /></td>
    <td><code>string</code></td>
    <td>The dimension name.</td>
</tr>
<tr id="parameter-dimensionValueOperator">
    <td><CopyableCode code="dimensionValueOperator" /></td>
    <td><code>string</code></td>
    <td>The dimension value operator.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_metric_values"
    values={[
        { label: 'list_metric_values', value: 'list_metric_values' }
    ]}
>
<TabItem value="list_metric_values">

Lists the values reported for an IoT Device Defender metric (device-side metric, cloud-side metric, or custom metric) by the given thing during the specified time period.

```sql
SELECT
timestamp,
value
FROM aws.iot.metric_values
WHERE thingName = '{{ thingName }}' -- required
AND metricName = '{{ metricName }}' -- required
AND startTime = '{{ startTime }}' -- required
AND endTime = '{{ endTime }}' -- required
AND region = '{{ region }}' -- required
AND dimensionName = '{{ dimensionName }}'
AND dimensionValueOperator = '{{ dimensionValueOperator }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
