--- 
title: time_series_service_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - time_series_service_statistics
  - xray
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

Creates, updates, deletes, gets or lists a <code>time_series_service_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="time_series_service_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.xray.time_series_service_statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_time_series_service_statistics"
    values={[
        { label: 'get_time_series_service_statistics', value: 'get_time_series_service_statistics' }
    ]}
>
<TabItem value="get_time_series_service_statistics">

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
    <td><CopyableCode code="edge_summary_statistics" /></td>
    <td><code>object</code></td>
    <td>Response statistics for an edge.</td>
</tr>
<tr>
    <td><CopyableCode code="response_time_histogram" /></td>
    <td><code>array</code></td>
    <td>The response time histogram for the selected entities.</td>
</tr>
<tr>
    <td><CopyableCode code="service_forecast_statistics" /></td>
    <td><code>object</code></td>
    <td>The forecasted high and low fault count values.</td>
</tr>
<tr>
    <td><CopyableCode code="service_summary_statistics" /></td>
    <td><code>object</code></td>
    <td>Response statistics for a service.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of the window for which statistics are aggregated.</td>
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
    <td><a href="#get_time_series_service_statistics"><CopyableCode code="get_time_series_service_statistics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get an aggregation of service statistics defined by a specific time range.</td>
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
    defaultValue="get_time_series_service_statistics"
    values={[
        { label: 'get_time_series_service_statistics', value: 'get_time_series_service_statistics' }
    ]}
>
<TabItem value="get_time_series_service_statistics">

Get an aggregation of service statistics defined by a specific time range.

```sql
SELECT
edge_summary_statistics,
response_time_histogram,
service_forecast_statistics,
service_summary_statistics,
timestamp
FROM aws.xray.time_series_service_statistics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
