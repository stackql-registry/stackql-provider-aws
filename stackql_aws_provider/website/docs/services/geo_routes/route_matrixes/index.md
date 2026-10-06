--- 
title: route_matrixes
hide_title: false
hide_table_of_contents: false
keywords:
  - route_matrixes
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

Creates, updates, deletes, gets or lists a <code>route_matrixes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="route_matrixes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.geo_routes.route_matrixes" /></td></tr>
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
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Destinations"><code>Destinations</code></a>, <a href="#parameter-Origins"><code>Origins</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>Use CalculateRouteMatrix to compute results for all pairs of Origins to Destinations. Each row corresponds to one entry in Origins. Each entry in the row corresponds to the route from that entry in Origins to an entry in Destinations positions. For more information, see Calculate route matrix in the Amazon Location Service Developer Guide.</td>
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
    defaultValue="calculate_route_matrix"
    values={[
        { label: 'calculate_route_matrix', value: 'calculate_route_matrix' }
    ]}
>
<TabItem value="calculate_route_matrix">

Use CalculateRouteMatrix to compute results for all pairs of Origins to Destinations. Each row corresponds to one entry in Origins. Each entry in the row corresponds to the route from that entry in Origins to an entry in Destinations positions. For more information, see Calculate route matrix in the Amazon Location Service Developer Guide.

```sql
EXEC aws.geo_routes.route_matrixes.calculate_route_matrix 
@region='{{ region }}' --required, 
@key='{{ key }}' 
@@json=
'{
"Allow": "{{ Allow }}", 
"Avoid": "{{ Avoid }}", 
"DepartNow": {{ DepartNow }}, 
"DepartureTime": "{{ DepartureTime }}", 
"Destinations": "{{ Destinations }}", 
"Exclude": "{{ Exclude }}", 
"OptimizeRoutingFor": "{{ OptimizeRoutingFor }}", 
"Origins": "{{ Origins }}", 
"RoutingBoundary": "{{ RoutingBoundary }}", 
"Traffic": "{{ Traffic }}", 
"TravelMode": "{{ TravelMode }}", 
"TravelModeOptions": "{{ TravelModeOptions }}"
}'
;
```
</TabItem>
</Tabs>
