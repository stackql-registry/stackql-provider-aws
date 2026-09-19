--- 
title: route_matrixes
hide_title: false
hide_table_of_contents: false
keywords:
  - route_matrixes
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

Creates, updates, deletes, gets or lists a <code>route_matrixes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="route_matrixes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.route_matrixes" /></td></tr>
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
    <td><a href="#calculate_route_matrix"><CopyableCode code="calculate_route_matrix" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-calculator_name"><code>calculator_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeparturePositions"><code>DeparturePositions</code></a>, <a href="#parameter-DestinationPositions"><code>DestinationPositions</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the V2 CalculateRouteMatrix unless you require Grab data. This version of CalculateRouteMatrix is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 CalculateRouteMatrix operation gives better results for matrix routing calculations. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location. Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide. Calculates a route matrix given the following required parameters: DeparturePositions and DestinationPositions. CalculateRouteMatrix calculates routes and returns the travel time and travel distance from each departure position to each destination position in the request. For example, given departure positions A and B, and destination positions X and Y, CalculateRouteMatrix will return time and distance for routes from A to X, A to Y, B to X, and B to Y (in that order). The number of results returned (and routes calculated) will be the number of DeparturePositions times the number of DestinationPositions. Your account is charged for each route calculated, not the number of requests. Requires that you first create a route calculator resource. By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating routes. Additional options include: Specifying a departure time using either DepartureTime or DepartNow. This calculates routes based on predictive traffic data at the given time. You can't specify both DepartureTime and DepartNow in a single request. Specifying both parameters returns a validation error. Specifying a travel mode using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in CarModeOptions if traveling by Car, or TruckModeOptions if traveling by Truck.</td>
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
    <td>The name of the route calculator resource that you want to use to calculate the route matrix.</td>
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
    defaultValue="calculate_route_matrix"
    values={[
        { label: 'calculate_route_matrix', value: 'calculate_route_matrix' }
    ]}
>
<TabItem value="calculate_route_matrix">

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the V2 CalculateRouteMatrix unless you require Grab data. This version of CalculateRouteMatrix is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 CalculateRouteMatrix operation gives better results for matrix routing calculations. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location. Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide. Calculates a route matrix given the following required parameters: DeparturePositions and DestinationPositions. CalculateRouteMatrix calculates routes and returns the travel time and travel distance from each departure position to each destination position in the request. For example, given departure positions A and B, and destination positions X and Y, CalculateRouteMatrix will return time and distance for routes from A to X, A to Y, B to X, and B to Y (in that order). The number of results returned (and routes calculated) will be the number of DeparturePositions times the number of DestinationPositions. Your account is charged for each route calculated, not the number of requests. Requires that you first create a route calculator resource. By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating routes. Additional options include: Specifying a departure time using either DepartureTime or DepartNow. This calculates routes based on predictive traffic data at the given time. You can't specify both DepartureTime and DepartNow in a single request. Specifying both parameters returns a validation error. Specifying a travel mode using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in CarModeOptions if traveling by Car, or TruckModeOptions if traveling by Truck.

```sql
EXEC aws.location.route_matrixes.calculate_route_matrix 
@calculator_name='{{ calculator_name }}' --required, 
@region='{{ region }}' --required, 
@key='{{ key }}' 
@@json=
'{
"DeparturePositions": "{{ DeparturePositions }}", 
"DestinationPositions": "{{ DestinationPositions }}", 
"TravelMode": "{{ TravelMode }}", 
"DepartureTime": "{{ DepartureTime }}", 
"DepartNow": {{ DepartNow }}, 
"DistanceUnit": "{{ DistanceUnit }}", 
"CarModeOptions": "{{ CarModeOptions }}", 
"TruckModeOptions": "{{ TruckModeOptions }}"
}'
;
```
</TabItem>
</Tabs>
