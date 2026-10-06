--- 
title: geofence_events
hide_title: false
hide_table_of_contents: false
keywords:
  - geofence_events
  - location
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

Creates, updates, deletes, gets or lists a <code>geofence_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="geofence_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.geofence_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#forecast_geofence_events"><CopyableCode code="forecast_geofence_events" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-collection_name"><code>collection_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeviceState"><code>DeviceState</code></a></td>
    <td></td>
    <td>This action forecasts future geofence events that are likely to occur within a specified time horizon if a device continues moving at its current speed. Each forecasted event is associated with a geofence from a provided geofence collection. A forecast event can have one of the following states: ENTER: The device position is outside the referenced geofence, but the device may cross into the geofence during the forecasting time horizon if it maintains its current speed. EXIT: The device position is inside the referenced geofence, but the device may leave the geofence during the forecasted time horizon if the device maintains it's current speed. IDLE:The device is inside the geofence, and it will remain inside the geofence through the end of the time horizon if the device maintains it's current speed. Heading direction is not considered in the current version. The API takes a conservative approach and includes events that can occur for any heading.</td>
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
<tr id="parameter-collection_name">
    <td><CopyableCode code="collection_name" /></td>
    <td><code>string</code></td>
    <td>The name of the geofence collection.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="forecast_geofence_events"
    values={[
        { label: 'forecast_geofence_events', value: 'forecast_geofence_events' }
    ]}
>
<TabItem value="forecast_geofence_events">

This action forecasts future geofence events that are likely to occur within a specified time horizon if a device continues moving at its current speed. Each forecasted event is associated with a geofence from a provided geofence collection. A forecast event can have one of the following states: ENTER: The device position is outside the referenced geofence, but the device may cross into the geofence during the forecasting time horizon if it maintains its current speed. EXIT: The device position is inside the referenced geofence, but the device may leave the geofence during the forecasted time horizon if the device maintains it's current speed. IDLE:The device is inside the geofence, and it will remain inside the geofence through the end of the time horizon if the device maintains it's current speed. Heading direction is not considered in the current version. The API takes a conservative approach and includes events that can occur for any heading.

```sql
EXEC aws.location.geofence_events.forecast_geofence_events 
@collection_name='{{ collection_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"DeviceState": "{{ DeviceState }}", 
"TimeHorizonMinutes": {{ TimeHorizonMinutes }}, 
"DistanceUnit": "{{ DistanceUnit }}", 
"SpeedUnit": "{{ SpeedUnit }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
