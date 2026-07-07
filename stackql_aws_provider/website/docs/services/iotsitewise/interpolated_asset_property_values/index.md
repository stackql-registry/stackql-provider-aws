--- 
title: interpolated_asset_property_values
hide_title: false
hide_table_of_contents: false
keywords:
  - interpolated_asset_property_values
  - iotsitewise
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

Creates, updates, deletes, gets or lists an <code>interpolated_asset_property_values</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="interpolated_asset_property_values" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.interpolated_asset_property_values" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_interpolated_asset_property_values"
    values={[
        { label: 'get_interpolated_asset_property_values', value: 'get_interpolated_asset_property_values' }
    ]}
>
<TabItem value="get_interpolated_asset_property_values">

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
    <td><code>object</code></td>
    <td>Contains a timestamp with optional nanosecond granularity.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>object</code></td>
    <td>Contains an asset property value (of a single type only).</td>
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
    <td><a href="#get_interpolated_asset_property_values"><CopyableCode code="get_interpolated_asset_property_values" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-startTimeInSeconds"><code>startTimeInSeconds</code></a>, <a href="#parameter-endTimeInSeconds"><code>endTimeInSeconds</code></a>, <a href="#parameter-quality"><code>quality</code></a>, <a href="#parameter-intervalInSeconds"><code>intervalInSeconds</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-assetId"><code>assetId</code></a>, <a href="#parameter-propertyId"><code>propertyId</code></a>, <a href="#parameter-propertyAlias"><code>propertyAlias</code></a>, <a href="#parameter-startTimeOffsetInNanos"><code>startTimeOffsetInNanos</code></a>, <a href="#parameter-endTimeOffsetInNanos"><code>endTimeOffsetInNanos</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-intervalWindowInSeconds"><code>intervalWindowInSeconds</code></a></td>
    <td>Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data. For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. To identify an asset property, you must specify one of the following: The assetId and propertyId of an asset property. A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.</td>
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
<tr id="parameter-endTimeInSeconds">
    <td><CopyableCode code="endTimeInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The inclusive end of the range from which to interpolate data, expressed in seconds in Unix epoch time.</td>
</tr>
<tr id="parameter-intervalInSeconds">
    <td><CopyableCode code="intervalInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time interval in seconds over which to interpolate data. Each interval starts when the previous one ends.</td>
</tr>
<tr id="parameter-quality">
    <td><CopyableCode code="quality" /></td>
    <td><code>string</code></td>
    <td>The quality of the asset property value. You can use this parameter as a filter to choose only the asset property values that have a specific quality.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-startTimeInSeconds">
    <td><CopyableCode code="startTimeInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The exclusive start of the range from which to interpolate data, expressed in seconds in Unix epoch time.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The interpolation type. Valid values: LINEAR_INTERPOLATION | LOCF_INTERPOLATION LINEAR_INTERPOLATION – Estimates missing data using linear interpolation. For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. If the interpolation starts July 1, 2021, at 9 AM, IoT SiteWise returns the first interpolated value on July 2, 2021, at 9 AM, the second interpolated value on July 3, 2021, at 9 AM, and so on. LOCF_INTERPOLATION – Estimates missing data using last observation carried forward interpolation If no data point is found for an interval, IoT SiteWise returns the last observed data point for the previous interval and carries forward this interpolated value until a new data point is found. For example, you can get the state of an on-off valve every 24 hours over a duration of 7 days. If the interpolation starts July 1, 2021, at 9 AM, IoT SiteWise returns the last observed data point between July 1, 2021, at 9 AM and July 2, 2021, at 9 AM as the first interpolated value. If a data point isn't found after 9 AM on July 2, 2021, IoT SiteWise uses the same interpolated value for the rest of the days.</td>
</tr>
<tr id="parameter-assetId">
    <td><CopyableCode code="assetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset, in UUID format.</td>
</tr>
<tr id="parameter-endTimeOffsetInNanos">
    <td><CopyableCode code="endTimeOffsetInNanos" /></td>
    <td><code>integer</code></td>
    <td>The nanosecond offset converted from endTimeInSeconds.</td>
</tr>
<tr id="parameter-intervalWindowInSeconds">
    <td><CopyableCode code="intervalWindowInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The query interval for the window, in seconds. IoT SiteWise computes each interpolated value by using data points from the timestamp of each interval, minus the window to the timestamp of each interval plus the window. If not specified, the window ranges between the start time minus the interval and the end time plus the interval. If you specify a value for the intervalWindowInSeconds parameter, the value for the type parameter must be LINEAR_INTERPOLATION. If a data point isn't found during the specified query window, IoT SiteWise won't return an interpolated value for the interval. This indicates that there's a gap in the ingested data points. For example, you can get the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. If the interpolation starts on July 1, 2021, at 9 AM with a window of 2 hours, IoT SiteWise uses the data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM plus 2 hours) on July 2, 2021 to compute the first interpolated value. Next, IoT SiteWise uses the data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM plus 2 hours) on July 3, 2021 to compute the second interpolated value, and so on.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request. If not specified, the default value is 10.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
<tr id="parameter-propertyAlias">
    <td><CopyableCode code="propertyAlias" /></td>
    <td><code>string</code></td>
    <td>The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-propertyId">
    <td><CopyableCode code="propertyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset property, in UUID format.</td>
</tr>
<tr id="parameter-startTimeOffsetInNanos">
    <td><CopyableCode code="startTimeOffsetInNanos" /></td>
    <td><code>integer</code></td>
    <td>The nanosecond offset converted from startTimeInSeconds.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_interpolated_asset_property_values"
    values={[
        { label: 'get_interpolated_asset_property_values', value: 'get_interpolated_asset_property_values' }
    ]}
>
<TabItem value="get_interpolated_asset_property_values">

Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data. For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. To identify an asset property, you must specify one of the following: The assetId and propertyId of an asset property. A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.

```sql
SELECT
timestamp,
value
FROM aws.iotsitewise.interpolated_asset_property_values
WHERE startTimeInSeconds = '{{ startTimeInSeconds }}' -- required
AND endTimeInSeconds = '{{ endTimeInSeconds }}' -- required
AND quality = '{{ quality }}' -- required
AND intervalInSeconds = '{{ intervalInSeconds }}' -- required
AND type = '{{ type }}' -- required
AND region = '{{ region }}' -- required
AND assetId = '{{ assetId }}'
AND propertyId = '{{ propertyId }}'
AND propertyAlias = '{{ propertyAlias }}'
AND startTimeOffsetInNanos = '{{ startTimeOffsetInNanos }}'
AND endTimeOffsetInNanos = '{{ endTimeOffsetInNanos }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND intervalWindowInSeconds = '{{ intervalWindowInSeconds }}'
;
```
</TabItem>
</Tabs>
