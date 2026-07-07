--- 
title: gateway_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - gateway_routes
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

Creates, updates, deletes, gets or lists a <code>gateway_routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gateway_routes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appmesh.gateway_routes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_gateway_route"
    values={[
        { label: 'describe_gateway_route', value: 'describe_gateway_route' },
        { label: 'list_gateway_routes', value: 'list_gateway_routes' }
    ]}
>
<TabItem value="describe_gateway_route">

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
    <td><CopyableCode code="gatewayRouteName" /></td>
    <td><code>string</code></td>
    <td>The name of the gateway route.</td>
</tr>
<tr>
    <td><CopyableCode code="meshName" /></td>
    <td><code>string</code></td>
    <td>The name of the service mesh that the resource resides in.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>An object that represents metadata for a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>An object that represents a gateway route specification. Specify one gateway route type.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the gateway route.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualGatewayName" /></td>
    <td><code>string</code></td>
    <td>The virtual gateway that the gateway route is associated with.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_gateway_routes">

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
    <td>The full Amazon Resource Name (ARN) for the gateway route.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp in seconds for when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayRouteName" /></td>
    <td><code>string</code></td>
    <td>The name of the gateway route.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp in seconds for when the resource was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="meshName" /></td>
    <td><code>string</code></td>
    <td>The name of the service mesh that the resource resides in.</td>
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
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualGatewayName" /></td>
    <td><code>string</code></td>
    <td>The virtual gateway that the gateway route is associated with.</td>
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
    <td><a href="#describe_gateway_route"><CopyableCode code="describe_gateway_route" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_route_name"><code>gateway_route_name</code></a>, <a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-virtual_gateway_name"><code>virtual_gateway_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Describes an existing gateway route.</td>
</tr>
<tr>
    <td><a href="#list_gateway_routes"><CopyableCode code="list_gateway_routes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-virtual_gateway_name"><code>virtual_gateway_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-meshOwner"><code>meshOwner</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of existing gateway routes that are associated to a virtual gateway.</td>
</tr>
<tr>
    <td><a href="#create_gateway_route"><CopyableCode code="create_gateway_route" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-virtual_gateway_name"><code>virtual_gateway_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-gatewayRouteName"><code>gatewayRouteName</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Creates a gateway route. A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service. For more information about gateway routes, see Gateway routes.</td>
</tr>
<tr>
    <td><a href="#update_gateway_route"><CopyableCode code="update_gateway_route" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-gateway_route_name"><code>gateway_route_name</code></a>, <a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-virtual_gateway_name"><code>virtual_gateway_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.</td>
</tr>
<tr>
    <td><a href="#delete_gateway_route"><CopyableCode code="delete_gateway_route" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-gateway_route_name"><code>gateway_route_name</code></a>, <a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-virtual_gateway_name"><code>virtual_gateway_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Deletes an existing gateway route.</td>
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
<tr id="parameter-gateway_route_name">
    <td><CopyableCode code="gateway_route_name" /></td>
    <td><code>string</code></td>
    <td>The name of the gateway route to delete.</td>
</tr>
<tr id="parameter-mesh_name">
    <td><CopyableCode code="mesh_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service mesh to delete the gateway route from.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-virtual_gateway_name">
    <td><CopyableCode code="virtual_gateway_name" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual gateway to delete the route from.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results returned by ListGatewayRoutes in paginated output. When you use this parameter, ListGatewayRoutes returns only limit results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListGatewayRoutes request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListGatewayRoutes returns up to 100 results and a nextToken value if applicable.</td>
</tr>
<tr id="parameter-meshOwner">
    <td><CopyableCode code="meshOwner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with shared meshes.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated ListGatewayRoutes request where limit was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_gateway_route"
    values={[
        { label: 'describe_gateway_route', value: 'describe_gateway_route' },
        { label: 'list_gateway_routes', value: 'list_gateway_routes' }
    ]}
>
<TabItem value="describe_gateway_route">

Describes an existing gateway route.

```sql
SELECT
gatewayRouteName,
meshName,
metadata,
spec,
status,
virtualGatewayName
FROM aws.appmesh.gateway_routes
WHERE gateway_route_name = '{{ gateway_route_name }}' -- required
AND mesh_name = '{{ mesh_name }}' -- required
AND virtual_gateway_name = '{{ virtual_gateway_name }}' -- required
AND region = '{{ region }}' -- required
AND meshOwner = '{{ meshOwner }}'
;
```
</TabItem>
<TabItem value="list_gateway_routes">

Returns a list of existing gateway routes that are associated to a virtual gateway.

```sql
SELECT
arn,
createdAt,
gatewayRouteName,
lastUpdatedAt,
meshName,
meshOwner,
resourceOwner,
version,
virtualGatewayName
FROM aws.appmesh.gateway_routes
WHERE mesh_name = '{{ mesh_name }}' -- required
AND virtual_gateway_name = '{{ virtual_gateway_name }}' -- required
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
    defaultValue="create_gateway_route"
    values={[
        { label: 'create_gateway_route', value: 'create_gateway_route' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_gateway_route">

Creates a gateway route. A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service. For more information about gateway routes, see Gateway routes.

```sql
INSERT INTO aws.appmesh.gateway_routes (
clientToken,
gatewayRouteName,
spec,
tags,
mesh_name,
virtual_gateway_name,
region,
meshOwner
)
SELECT 
'{{ clientToken }}',
'{{ gatewayRouteName }}' /* required */,
'{{ spec }}' /* required */,
'{{ tags }}',
'{{ mesh_name }}',
'{{ virtual_gateway_name }}',
'{{ region }}',
'{{ meshOwner }}'
RETURNING
gatewayRoute
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: gateway_routes
  props:
    - name: mesh_name
      value: "{{ mesh_name }}"
      description: Required parameter for the gateway_routes resource.
    - name: virtual_gateway_name
      value: "{{ virtual_gateway_name }}"
      description: Required parameter for the gateway_routes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the gateway_routes resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: gatewayRouteName
      value: "{{ gatewayRouteName }}"
    - name: spec
      description: |
        An object that represents a gateway route specification. Specify one gateway route type.
      value:
        grpcRoute:
          action:
            rewrite:
              hostname:
                defaultTargetHostname: "{{ defaultTargetHostname }}"
            target:
              port: {{ port }}
              virtualService:
                virtualServiceName: "{{ virtualServiceName }}"
          match:
            hostname:
              exact: "{{ exact }}"
              suffix: "{{ suffix }}"
            metadata:
              - invert: {{ invert }}
                match:
                  exact: "{{ exact }}"
                  prefix: "{{ prefix }}"
                  range: "{{ range }}"
                  regex: "{{ regex }}"
                  suffix: "{{ suffix }}"
                name: "{{ name }}"
            port: {{ port }}
            serviceName: "{{ serviceName }}"
        http2Route:
          action:
            rewrite:
              hostname:
                defaultTargetHostname: "{{ defaultTargetHostname }}"
              path:
                exact: "{{ exact }}"
              prefix:
                defaultPrefix: "{{ defaultPrefix }}"
                value: "{{ value }}"
            target:
              port: {{ port }}
              virtualService:
                virtualServiceName: "{{ virtualServiceName }}"
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
            hostname:
              exact: "{{ exact }}"
              suffix: "{{ suffix }}"
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
        httpRoute:
          action:
            rewrite:
              hostname:
                defaultTargetHostname: "{{ defaultTargetHostname }}"
              path:
                exact: "{{ exact }}"
              prefix:
                defaultPrefix: "{{ defaultPrefix }}"
                value: "{{ value }}"
            target:
              port: {{ port }}
              virtualService:
                virtualServiceName: "{{ virtualServiceName }}"
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
            hostname:
              exact: "{{ exact }}"
              suffix: "{{ suffix }}"
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
        priority: {{ priority }}
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
    defaultValue="update_gateway_route"
    values={[
        { label: 'update_gateway_route', value: 'update_gateway_route' }
    ]}
>
<TabItem value="update_gateway_route">

Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.

```sql
UPDATE aws.appmesh.gateway_routes
SET 
clientToken = '{{ clientToken }}',
spec = '{{ spec }}'
WHERE 
gateway_route_name = '{{ gateway_route_name }}' --required
AND mesh_name = '{{ mesh_name }}' --required
AND virtual_gateway_name = '{{ virtual_gateway_name }}' --required
AND region = '{{ region }}' --required
AND spec = '{{ spec }}' --required
AND meshOwner = '{{ meshOwner}}'
RETURNING
gatewayRoute;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_gateway_route"
    values={[
        { label: 'delete_gateway_route', value: 'delete_gateway_route' }
    ]}
>
<TabItem value="delete_gateway_route">

Deletes an existing gateway route.

```sql
DELETE FROM aws.appmesh.gateway_routes
WHERE gateway_route_name = '{{ gateway_route_name }}' --required
AND mesh_name = '{{ mesh_name }}' --required
AND virtual_gateway_name = '{{ virtual_gateway_name }}' --required
AND region = '{{ region }}' --required
AND meshOwner = '{{ meshOwner }}'
;
```
</TabItem>
</Tabs>
