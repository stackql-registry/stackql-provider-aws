--- 
title: virtual_routers
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_routers
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

Creates, updates, deletes, gets or lists a <code>virtual_routers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_routers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appmesh.virtual_routers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_virtual_router"
    values={[
        { label: 'describe_virtual_router', value: 'describe_virtual_router' },
        { label: 'list_virtual_routers', value: 'list_virtual_routers' }
    ]}
>
<TabItem value="describe_virtual_router">

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
    <td><CopyableCode code="mesh_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service mesh that the virtual router resides in.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>An object that represents metadata for a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>An object that represents the specification of a virtual router.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the virtual router.</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_router_name" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual router.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_virtual_routers">

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
    <td>The full Amazon Resource Name (ARN) for the virtual router.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp in seconds for when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp in seconds for when the resource was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="mesh_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service mesh that the virtual router resides in.</td>
</tr>
<tr>
    <td><CopyableCode code="mesh_owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with shared meshes.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see Working with shared meshes.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_router_name" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual router.</td>
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
    <td><a href="#describe_virtual_router"><CopyableCode code="describe_virtual_router" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-virtual_router_name"><code>virtual_router_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Describes an existing virtual router.</td>
</tr>
<tr>
    <td><a href="#list_virtual_routers"><CopyableCode code="list_virtual_routers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-meshOwner"><code>meshOwner</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of existing virtual routers in a service mesh.</td>
</tr>
<tr>
    <td><a href="#create_virtual_router"><CopyableCode code="create_virtual_router" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-spec"><code>spec</code></a>, <a href="#parameter-virtualRouterName"><code>virtualRouterName</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Creates a virtual router within a service mesh. Specify a listener for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes. For more information about virtual routers, see Virtual routers.</td>
</tr>
<tr>
    <td><a href="#update_virtual_router"><CopyableCode code="update_virtual_router" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-virtual_router_name"><code>virtual_router_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Updates an existing virtual router in a specified service mesh.</td>
</tr>
<tr>
    <td><a href="#delete_virtual_router"><CopyableCode code="delete_virtual_router" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-virtual_router_name"><code>virtual_router_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Deletes an existing virtual router. You must delete any routes associated with the virtual router before you can delete the router itself.</td>
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
    <td>The name of the service mesh to delete the virtual router in.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-virtual_router_name">
    <td><CopyableCode code="virtual_router_name" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual router to delete.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results returned by ListVirtualRouters in paginated output. When you use this parameter, ListVirtualRouters returns only limit results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListVirtualRouters request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListVirtualRouters returns up to 100 results and a nextToken value if applicable.</td>
</tr>
<tr id="parameter-meshOwner">
    <td><CopyableCode code="meshOwner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with shared meshes.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated ListVirtualRouters request where limit was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_virtual_router"
    values={[
        { label: 'describe_virtual_router', value: 'describe_virtual_router' },
        { label: 'list_virtual_routers', value: 'list_virtual_routers' }
    ]}
>
<TabItem value="describe_virtual_router">

Describes an existing virtual router.

```sql
SELECT
mesh_name,
metadata,
spec,
status,
virtual_router_name
FROM aws.appmesh.virtual_routers
WHERE mesh_name = '{{ mesh_name }}' -- required
AND virtual_router_name = '{{ virtual_router_name }}' -- required
AND region = '{{ region }}' -- required
AND meshOwner = '{{ meshOwner }}'
;
```
</TabItem>
<TabItem value="list_virtual_routers">

Returns a list of existing virtual routers in a service mesh.

```sql
SELECT
arn,
created_at,
last_updated_at,
mesh_name,
mesh_owner,
resource_owner,
version,
virtual_router_name
FROM aws.appmesh.virtual_routers
WHERE mesh_name = '{{ mesh_name }}' -- required
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
    defaultValue="create_virtual_router"
    values={[
        { label: 'create_virtual_router', value: 'create_virtual_router' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_virtual_router">

Creates a virtual router within a service mesh. Specify a listener for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes. For more information about virtual routers, see Virtual routers.

```sql
INSERT INTO aws.appmesh.virtual_routers (
clientToken,
spec,
tags,
virtualRouterName,
mesh_name,
region,
meshOwner
)
SELECT 
'{{ clientToken }}',
'{{ spec }}' /* required */,
'{{ tags }}',
'{{ virtualRouterName }}' /* required */,
'{{ mesh_name }}',
'{{ region }}',
'{{ meshOwner }}'
RETURNING
virtual_router
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: virtual_routers
  props:
    - name: mesh_name
      value: "{{ mesh_name }}"
      description: Required parameter for the virtual_routers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the virtual_routers resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: spec
      description: |
        An object that represents the specification of a virtual router.
      value:
        listeners:
          - portMapping:
              port: {{ port }}
              protocol: "{{ protocol }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: virtualRouterName
      value: "{{ virtualRouterName }}"
    - name: meshOwner
      value: "{{ meshOwner }}"
      description: The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see Working with shared meshes.
      description: The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see Working with shared meshes.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_virtual_router"
    values={[
        { label: 'update_virtual_router', value: 'update_virtual_router' }
    ]}
>
<TabItem value="update_virtual_router">

Updates an existing virtual router in a specified service mesh.

```sql
UPDATE aws.appmesh.virtual_routers
SET 
clientToken = '{{ clientToken }}',
spec = '{{ spec }}'
WHERE 
mesh_name = '{{ mesh_name }}' --required
AND virtual_router_name = '{{ virtual_router_name }}' --required
AND region = '{{ region }}' --required
AND spec = '{{ spec }}' --required
AND meshOwner = '{{ meshOwner}}'
RETURNING
virtual_router;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_virtual_router"
    values={[
        { label: 'delete_virtual_router', value: 'delete_virtual_router' }
    ]}
>
<TabItem value="delete_virtual_router">

Deletes an existing virtual router. You must delete any routes associated with the virtual router before you can delete the router itself.

```sql
DELETE FROM aws.appmesh.virtual_routers
WHERE mesh_name = '{{ mesh_name }}' --required
AND virtual_router_name = '{{ virtual_router_name }}' --required
AND region = '{{ region }}' --required
AND meshOwner = '{{ meshOwner }}'
;
```
</TabItem>
</Tabs>
