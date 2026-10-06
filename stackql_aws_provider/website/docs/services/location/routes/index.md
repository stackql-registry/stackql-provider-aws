--- 
title: routes
hide_title: false
hide_table_of_contents: false
keywords:
  - routes
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

Creates, updates, deletes, gets or lists a <code>routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="routes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.routes" /></td></tr>
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
    <td><a href="#calculate_route"><CopyableCode code="calculate_route" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-calculator_name"><code>calculator_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeparturePosition"><code>DeparturePosition</code></a>, <a href="#parameter-DestinationPosition"><code>DestinationPosition</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to CalculateRoutes or CalculateIsolines unless you require Grab data. CalculateRoute is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 CalculateRoutes operation gives better results for point-to-point routing, while the version 2 CalculateIsolines operation adds support for calculating service areas and travel time envelopes. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location. Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab. Calculates a route given the following required parameters: DeparturePosition and DestinationPosition. Requires that you first create a route calculator resource. By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route. Additional options include: Specifying a departure time using either DepartureTime or DepartNow. This calculates a route based on predictive traffic data at the given time. You can't specify both DepartureTime and DepartNow in a single request. Specifying both parameters returns a validation error. Specifying a travel mode using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in CarModeOptions if traveling by Car, or TruckModeOptions if traveling by Truck. If you specify walking for the travel mode and your data provider is Esri, the start and destination must be within 40km.</td>
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
<tr id="parameter-calculator_name">
    <td><CopyableCode code="calculator_name" /></td>
    <td><code>string</code></td>
    <td>The name of the route calculator resource that you want to use to calculate the route.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The optional API key to authorize the request.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="calculate_route"
    values={[
        { label: 'calculate_route', value: 'calculate_route' }
    ]}
>
<TabItem value="calculate_route">

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to CalculateRoutes or CalculateIsolines unless you require Grab data. CalculateRoute is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 CalculateRoutes operation gives better results for point-to-point routing, while the version 2 CalculateIsolines operation adds support for calculating service areas and travel time envelopes. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location. Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab. Calculates a route given the following required parameters: DeparturePosition and DestinationPosition. Requires that you first create a route calculator resource. By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route. Additional options include: Specifying a departure time using either DepartureTime or DepartNow. This calculates a route based on predictive traffic data at the given time. You can't specify both DepartureTime and DepartNow in a single request. Specifying both parameters returns a validation error. Specifying a travel mode using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in CarModeOptions if traveling by Car, or TruckModeOptions if traveling by Truck. If you specify walking for the travel mode and your data provider is Esri, the start and destination must be within 40km.

```sql
EXEC aws.location.routes.calculate_route 
@calculator_name='{{ calculator_name }}' --required, 
@region='{{ region }}' --required, 
@key='{{ key }}' 
@@json=
'{
"DeparturePosition": "{{ DeparturePosition }}", 
"DestinationPosition": "{{ DestinationPosition }}", 
"WaypointPositions": "{{ WaypointPositions }}", 
"TravelMode": "{{ TravelMode }}", 
"DepartureTime": "{{ DepartureTime }}", 
"DepartNow": {{ DepartNow }}, 
"DistanceUnit": "{{ DistanceUnit }}", 
"IncludeLegGeometry": {{ IncludeLegGeometry }}, 
"CarModeOptions": "{{ CarModeOptions }}", 
"TruckModeOptions": "{{ TruckModeOptions }}", 
"ArrivalTime": "{{ ArrivalTime }}", 
"OptimizeFor": "{{ OptimizeFor }}"
}'
;
```
</TabItem>
</Tabs>
