--- 
title: predictive_scaling_forecasts
hide_title: false
hide_table_of_contents: false
keywords:
  - predictive_scaling_forecasts
  - application_autoscaling
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

Creates, updates, deletes, gets or lists a <code>predictive_scaling_forecasts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="predictive_scaling_forecasts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_autoscaling.predictive_scaling_forecasts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_predictive_scaling_forecast"
    values={[
        { label: 'get_predictive_scaling_forecast', value: 'get_predictive_scaling_forecast' }
    ]}
>
<TabItem value="get_predictive_scaling_forecast">

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
    <td><CopyableCode code="CapacityForecast" /></td>
    <td><code>object</code></td>
    <td>The capacity forecast.</td>
</tr>
<tr>
    <td><CopyableCode code="LoadForecast" /></td>
    <td><code>array</code></td>
    <td>The load forecast.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the forecast was made.</td>
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
    <td><a href="#get_predictive_scaling_forecast"><CopyableCode code="get_predictive_scaling_forecast" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the forecast data for a predictive scaling policy. Load forecasts are predictions of the hourly load values using historical load data from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as predicted values for the minimum capacity that is needed on an hourly basis, based on the hourly load forecast. A minimum of 24 hours of data is required to create the initial forecasts. However, having a full 14 days of historical data results in more accurate forecasts.</td>
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
    defaultValue="get_predictive_scaling_forecast"
    values={[
        { label: 'get_predictive_scaling_forecast', value: 'get_predictive_scaling_forecast' }
    ]}
>
<TabItem value="get_predictive_scaling_forecast">

Retrieves the forecast data for a predictive scaling policy. Load forecasts are predictions of the hourly load values using historical load data from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as predicted values for the minimum capacity that is needed on an hourly basis, based on the hourly load forecast. A minimum of 24 hours of data is required to create the initial forecasts. However, having a full 14 days of historical data results in more accurate forecasts.

```sql
SELECT
CapacityForecast,
LoadForecast,
UpdateTime
FROM aws.application_autoscaling.predictive_scaling_forecasts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
