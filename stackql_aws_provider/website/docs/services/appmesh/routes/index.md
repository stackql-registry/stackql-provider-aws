--- 
title: routes
hide_title: false
hide_table_of_contents: false
keywords:
  - routes
  - appmesh
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appmesh.routes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_route"
    values={[
        { label: 'describe_route', value: 'describe_route' },
        { label: 'list_routes', value: 'list_routes' }
    ]}
>
<TabItem value="describe_route">

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
    <td><CopyableCode code="meshName" /></td>
    <td><code>string</code></td>
    <td>The name of the service mesh that the route resides in.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>An object that represents metadata for a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="routeName" /></td>
    <td><code>string</code></td>
    <td>The name of the route.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>An object that represents a route specification. Specify one route type.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the route.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualRouterName" /></td>
    <td><code>string</code></td>
    <td>The virtual router that the route is associated with.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_routes">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The full Amazon Resource Name (ARN) for the route.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp in seconds for when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp in seconds for when the resource was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="meshName" /></td>
    <td><code>string</code></td>
    <td>The name of the service mesh that the route resides in.</td>
</tr>
<tr>
    <td><CopyableCode code="meshOwner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with shared meshes.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceOwner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see Working with shared meshes.</td>
</tr>
<tr>
    <td><CopyableCode code="routeName" /></td>
    <td><code>string</code></td>
    <td>The name of the route.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualRouterName" /></td>
    <td><code>string</code></td>
    <td>The virtual router that the route is associated with.</td>
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
    <td><a href="#describe_route"><CopyableCode code="describe_route" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-route_name"><code>route_name</code></a>, <a href="#parameter-virtual_router_name"><code>virtual_router_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Describes an existing route.</td>
</tr>
<tr>
    <td><a href="#list_routes"><CopyableCode code="list_routes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-virtual_router_name"><code>virtual_router_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-meshOwner"><code>meshOwner</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of existing routes in a service mesh.</td>
</tr>
<tr>
    <td><a href="#create_route"><CopyableCode code="create_route" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-virtual_router_name"><code>virtual_router_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-routeName"><code>routeName</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Creates a route that is associated with a virtual router. You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes. For more information about routes, see Routes.</td>
</tr>
<tr>
    <td><a href="#update_route"><CopyableCode code="update_route" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-route_name"><code>route_name</code></a>, <a href="#parameter-virtual_router_name"><code>virtual_router_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Updates an existing route for a specified service mesh and virtual router.</td>
</tr>
<tr>
    <td><a href="#delete_route"><CopyableCode code="delete_route" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-route_name"><code>route_name</code></a>, <a href="#parameter-virtual_router_name"><code>virtual_router_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Deletes an existing route.</td>
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
<tr id="parameter-mesh_name">
    <td><CopyableCode code="mesh_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service mesh to delete the route in.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-route_name">
    <td><CopyableCode code="route_name" /></td>
    <td><code>string</code></td>
    <td>The name of the route to delete.</td>
</tr>
<tr id="parameter-virtual_router_name">
    <td><CopyableCode code="virtual_router_name" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual router to delete the route in.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results returned by ListRoutes in paginated output. When you use this parameter, ListRoutes returns only limit results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListRoutes request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListRoutes returns up to 100 results and a nextToken value if applicable.</td>
</tr>
<tr id="parameter-meshOwner">
    <td><CopyableCode code="meshOwner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with shared meshes.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated ListRoutes request where limit was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_route"
    values={[
        { label: 'describe_route', value: 'describe_route' },
        { label: 'list_routes', value: 'list_routes' }
    ]}
>
<TabItem value="describe_route">

Describes an existing route.

```sql
SELECT
meshName,
metadata,
routeName,
spec,
status,
virtualRouterName
FROM aws.appmesh.routes
WHERE mesh_name = '{{ mesh_name }}' -- required
AND route_name = '{{ route_name }}' -- required
AND virtual_router_name = '{{ virtual_router_name }}' -- required
AND region = '{{ region }}' -- required
AND meshOwner = '{{ meshOwner }}'
;
```
</TabItem>
<TabItem value="list_routes">

Returns a list of existing routes in a service mesh.

```sql
SELECT
arn,
createdAt,
lastUpdatedAt,
meshName,
meshOwner,
resourceOwner,
routeName,
version,
virtualRouterName
FROM aws.appmesh.routes
WHERE mesh_name = '{{ mesh_name }}' -- required
AND virtual_router_name = '{{ virtual_router_name }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND meshOwner = '{{ meshOwner }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_route"
    values={[
        { label: 'create_route', value: 'create_route' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_route">

Creates a route that is associated with a virtual router. You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes. For more information about routes, see Routes.

```sql
INSERT INTO aws.appmesh.routes (
clientToken,
routeName,
spec,
tags,
mesh_name,
virtual_router_name,
region,
meshOwner
)
SELECT 
'{{ clientToken }}',
'{{ routeName }}' /* required */,
'{{ spec }}' /* required */,
'{{ tags }}',
'{{ mesh_name }}',
'{{ virtual_router_name }}',
'{{ region }}',
'{{ meshOwner }}'
RETURNING
route
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: routes
  props:
    - name: mesh_name
      value: "{{ mesh_name }}"
      description: Required parameter for the routes resource.
    - name: virtual_router_name
      value: "{{ virtual_router_name }}"
      description: Required parameter for the routes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the routes resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: routeName
      value: "{{ routeName }}"
    - name: spec
      description: |
        An object that represents a route specification. Specify one route type.
      value:
        grpcRoute:
          action:
            weightedTargets:
              - port: {{ port }}
                virtualNode: "{{ virtualNode }}"
                weight: {{ weight }}
          match:
            metadata:
              - invert: {{ invert }}
                match:
                  exact: "{{ exact }}"
                  prefix: "{{ prefix }}"
                  range: "{{ range }}"
                  regex: "{{ regex }}"
                  suffix: "{{ suffix }}"
                name: "{{ name }}"
            methodName: "{{ methodName }}"
            port: {{ port }}
            serviceName: "{{ serviceName }}"
          retryPolicy:
            grpcRetryEvents:
              - "{{ grpcRetryEvents }}"
            httpRetryEvents:
              - "{{ httpRetryEvents }}"
            maxRetries: {{ maxRetries }}
            perRetryTimeout:
              unit: "{{ unit }}"
              value: {{ value }}
            tcpRetryEvents:
              - "{{ tcpRetryEvents }}"
          timeout:
            idle:
              unit: "{{ unit }}"
              value: {{ value }}
            perRequest:
              unit: "{{ unit }}"
              value: {{ value }}
        http2Route:
          action:
            weightedTargets:
              - port: {{ port }}
                virtualNode: "{{ virtualNode }}"
                weight: {{ weight }}
          match:
            headers:
              - invert: {{ invert }}
                match:
                  exact: "{{ exact }}"
                  prefix: "{{ prefix }}"
                  range: "{{ range }}"
                  regex: "{{ regex }}"
                  suffix: "{{ suffix }}"
                name: "{{ name }}"
            method: "{{ method }}"
            path:
              exact: "{{ exact }}"
              regex: "{{ regex }}"
            port: {{ port }}
            prefix: "{{ prefix }}"
            queryParameters:
              - match:
                  exact: "{{ exact }}"
                name: "{{ name }}"
            scheme: "{{ scheme }}"
          retryPolicy:
            httpRetryEvents:
              - "{{ httpRetryEvents }}"
            maxRetries: {{ maxRetries }}
            perRetryTimeout:
              unit: "{{ unit }}"
              value: {{ value }}
            tcpRetryEvents:
              - "{{ tcpRetryEvents }}"
          timeout:
            idle:
              unit: "{{ unit }}"
              value: {{ value }}
            perRequest:
              unit: "{{ unit }}"
              value: {{ value }}
        httpRoute:
          action:
            weightedTargets:
              - port: {{ port }}
                virtualNode: "{{ virtualNode }}"
                weight: {{ weight }}
          match:
            headers:
              - invert: {{ invert }}
                match:
                  exact: "{{ exact }}"
                  prefix: "{{ prefix }}"
                  range: "{{ range }}"
                  regex: "{{ regex }}"
                  suffix: "{{ suffix }}"
                name: "{{ name }}"
            method: "{{ method }}"
            path:
              exact: "{{ exact }}"
              regex: "{{ regex }}"
            port: {{ port }}
            prefix: "{{ prefix }}"
            queryParameters:
              - match:
                  exact: "{{ exact }}"
                name: "{{ name }}"
            scheme: "{{ scheme }}"
          retryPolicy:
            httpRetryEvents:
              - "{{ httpRetryEvents }}"
            maxRetries: {{ maxRetries }}
            perRetryTimeout:
              unit: "{{ unit }}"
              value: {{ value }}
            tcpRetryEvents:
              - "{{ tcpRetryEvents }}"
          timeout:
            idle:
              unit: "{{ unit }}"
              value: {{ value }}
            perRequest:
              unit: "{{ unit }}"
              value: {{ value }}
        priority: {{ priority }}
        tcpRoute:
          action:
            weightedTargets:
              - port: {{ port }}
                virtualNode: "{{ virtualNode }}"
                weight: {{ weight }}
          match:
            port: {{ port }}
          timeout:
            idle:
              unit: "{{ unit }}"
              value: {{ value }}
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: meshOwner
      value: "{{ meshOwner }}"
      description: The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see Working with shared meshes.
      description: The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see Working with shared meshes.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_route"
    values={[
        { label: 'update_route', value: 'update_route' }
    ]}
>
<TabItem value="update_route">

Updates an existing route for a specified service mesh and virtual router.

```sql
UPDATE aws.appmesh.routes
SET 
clientToken = '{{ clientToken }}',
spec = '{{ spec }}'
WHERE 
mesh_name = '{{ mesh_name }}' --required
AND route_name = '{{ route_name }}' --required
AND virtual_router_name = '{{ virtual_router_name }}' --required
AND region = '{{ region }}' --required
AND spec = '{{ spec }}' --required
AND meshOwner = '{{ meshOwner}}'
RETURNING
route;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_route"
    values={[
        { label: 'delete_route', value: 'delete_route' }
    ]}
>
<TabItem value="delete_route">

Deletes an existing route.

```sql
DELETE FROM aws.appmesh.routes
WHERE mesh_name = '{{ mesh_name }}' --required
AND route_name = '{{ route_name }}' --required
AND virtual_router_name = '{{ virtual_router_name }}' --required
AND region = '{{ region }}' --required
AND meshOwner = '{{ meshOwner }}'
;
```
</TabItem>
</Tabs>
