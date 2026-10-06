--- 
title: isolines
hide_title: false
hide_table_of_contents: false
keywords:
  - isolines
  - geo_routes
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

Creates, updates, deletes, gets or lists an <code>isolines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="isolines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.geo_routes.isolines" /></td></tr>
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
    <td><a href="#calculate_isolines"><CopyableCode code="calculate_isolines" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Thresholds"><code>Thresholds</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>Calculates areas that can be reached within specified time or distance thresholds from a given point. For example, you can use this operation to determine the area within a 30-minute drive of a store location, find neighborhoods within walking distance of a school, or identify delivery zones based on drive time. Isolines (also known as isochrones for time-based calculations) are useful for various applications including: Service area visualization - Show customers the area you can serve within promised delivery times Site selection - Analyze potential business locations based on population within travel distance Site selection - Determine areas that can be reached within specified response times Route preferences such as avoiding toll roads or ferries are treated as preferences rather than absolute restrictions. If a viable route cannot be calculated while honoring all preferences, some may be ignored. For more information, see Calculate isolines in the Amazon Location Service Developer Guide.</td>
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
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>An Amazon Location Service API Key with access to this action. If omitted, the request must be signed using Signature Version 4.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="calculate_isolines"
    values={[
        { label: 'calculate_isolines', value: 'calculate_isolines' }
    ]}
>
<TabItem value="calculate_isolines">

Calculates areas that can be reached within specified time or distance thresholds from a given point. For example, you can use this operation to determine the area within a 30-minute drive of a store location, find neighborhoods within walking distance of a school, or identify delivery zones based on drive time. Isolines (also known as isochrones for time-based calculations) are useful for various applications including: Service area visualization - Show customers the area you can serve within promised delivery times Site selection - Analyze potential business locations based on population within travel distance Site selection - Determine areas that can be reached within specified response times Route preferences such as avoiding toll roads or ferries are treated as preferences rather than absolute restrictions. If a viable route cannot be calculated while honoring all preferences, some may be ignored. For more information, see Calculate isolines in the Amazon Location Service Developer Guide.

```sql
EXEC aws.geo_routes.isolines.calculate_isolines 
@region='{{ region }}' --required, 
@key='{{ key }}' 
@@json=
'{
"Allow": "{{ Allow }}", 
"ArrivalTime": "{{ ArrivalTime }}", 
"Avoid": "{{ Avoid }}", 
"DepartNow": {{ DepartNow }}, 
"DepartureTime": "{{ DepartureTime }}", 
"Destination": "{{ Destination }}", 
"DestinationOptions": "{{ DestinationOptions }}", 
"IsolineGeometryFormat": "{{ IsolineGeometryFormat }}", 
"IsolineGranularity": "{{ IsolineGranularity }}", 
"OptimizeIsolineFor": "{{ OptimizeIsolineFor }}", 
"OptimizeRoutingFor": "{{ OptimizeRoutingFor }}", 
"Origin": "{{ Origin }}", 
"OriginOptions": "{{ OriginOptions }}", 
"Thresholds": "{{ Thresholds }}", 
"Traffic": "{{ Traffic }}", 
"TravelMode": "{{ TravelMode }}", 
"TravelModeOptions": "{{ TravelModeOptions }}"
}'
;
```
</TabItem>
</Tabs>
