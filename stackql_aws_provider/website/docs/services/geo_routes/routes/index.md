--- 
title: routes
hide_title: false
hide_table_of_contents: false
keywords:
  - routes
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

Creates, updates, deletes, gets or lists a <code>routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="routes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.geo_routes.routes" /></td></tr>
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
    <td><a href="#calculate_routes"><CopyableCode code="calculate_routes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Destination"><code>Destination</code></a>, <a href="#parameter-Origin"><code>Origin</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>CalculateRoutes computes routes given the following required parameters: Origin and Destination. For more information, see Calculate routes in the Amazon Location Service Developer Guide.</td>
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
    <td>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="calculate_routes"
    values={[
        { label: 'calculate_routes', value: 'calculate_routes' }
    ]}
>
<TabItem value="calculate_routes">

CalculateRoutes computes routes given the following required parameters: Origin and Destination. For more information, see Calculate routes in the Amazon Location Service Developer Guide.

```sql
EXEC aws.geo_routes.routes.calculate_routes 
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
"Driver": "{{ Driver }}", 
"Exclude": "{{ Exclude }}", 
"InstructionsMeasurementSystem": "{{ InstructionsMeasurementSystem }}", 
"Languages": "{{ Languages }}", 
"LegAdditionalFeatures": "{{ LegAdditionalFeatures }}", 
"LegGeometryFormat": "{{ LegGeometryFormat }}", 
"MaxAlternatives": {{ MaxAlternatives }}, 
"OptimizeRoutingFor": "{{ OptimizeRoutingFor }}", 
"Origin": "{{ Origin }}", 
"OriginOptions": "{{ OriginOptions }}", 
"SpanAdditionalFeatures": "{{ SpanAdditionalFeatures }}", 
"Tolls": "{{ Tolls }}", 
"Traffic": "{{ Traffic }}", 
"TravelMode": "{{ TravelMode }}", 
"TravelModeOptions": "{{ TravelModeOptions }}", 
"TravelStepType": "{{ TravelStepType }}", 
"Waypoints": "{{ Waypoints }}"
}'
;
```
</TabItem>
</Tabs>
