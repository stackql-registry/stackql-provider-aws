--- 
title: meshes
hide_title: false
hide_table_of_contents: false
keywords:
  - meshes
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

Creates, updates, deletes, gets or lists a <code>meshes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="meshes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appmesh.meshes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_mesh"
    values={[
        { label: 'describe_mesh', value: 'describe_mesh' },
        { label: 'list_meshes', value: 'list_meshes' }
    ]}
>
<TabItem value="describe_mesh">

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
    <td>The name of the service mesh.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>An object that represents metadata for a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>An object that represents the specification of a service mesh.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the service mesh.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_meshes">

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
    <td>The full Amazon Resource Name (ARN) of the service mesh.</td>
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
    <td>The name of the service mesh.</td>
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
    <td><a href="#describe_mesh"><CopyableCode code="describe_mesh" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Describes an existing service mesh.</td>
</tr>
<tr>
    <td><a href="#list_meshes"><CopyableCode code="list_meshes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of existing service meshes.</td>
</tr>
<tr>
    <td><a href="#create_mesh"><CopyableCode code="create_mesh" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-meshName"><code>meshName</code></a></td>
    <td></td>
    <td>Creates a service mesh. A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh. For more information about service meshes, see Service meshes.</td>
</tr>
<tr>
    <td><a href="#update_mesh"><CopyableCode code="update_mesh" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing service mesh.</td>
</tr>
<tr>
    <td><a href="#delete_mesh"><CopyableCode code="delete_mesh" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing service mesh. You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</td>
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
    <td>The name of the service mesh to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results returned by ListMeshes in paginated output. When you use this parameter, ListMeshes returns only limit results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListMeshes request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListMeshes returns up to 100 results and a nextToken value if applicable.</td>
</tr>
<tr id="parameter-meshOwner">
    <td><CopyableCode code="meshOwner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with shared meshes.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated ListMeshes request where limit was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_mesh"
    values={[
        { label: 'describe_mesh', value: 'describe_mesh' },
        { label: 'list_meshes', value: 'list_meshes' }
    ]}
>
<TabItem value="describe_mesh">

Describes an existing service mesh.

```sql
SELECT
mesh_name,
metadata,
spec,
status
FROM aws.appmesh.meshes
WHERE mesh_name = '{{ mesh_name }}' -- required
AND region = '{{ region }}' -- required
AND meshOwner = '{{ meshOwner }}'
;
```
</TabItem>
<TabItem value="list_meshes">

Returns a list of existing service meshes.

```sql
SELECT
arn,
created_at,
last_updated_at,
mesh_name,
mesh_owner,
resource_owner,
version
FROM aws.appmesh.meshes
WHERE region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_mesh"
    values={[
        { label: 'create_mesh', value: 'create_mesh' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_mesh">

Creates a service mesh. A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh. For more information about service meshes, see Service meshes.

```sql
INSERT INTO aws.appmesh.meshes (
clientToken,
meshName,
spec,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ meshName }}' /* required */,
'{{ spec }}',
'{{ tags }}',
'{{ region }}'
RETURNING
mesh
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: meshes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the meshes resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: meshName
      value: "{{ meshName }}"
    - name: spec
      description: |
        An object that represents the specification of a service mesh.
      value:
        egressFilter:
          type_: "{{ type_ }}"
        serviceDiscovery:
          ipPreference: "{{ ipPreference }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_mesh"
    values={[
        { label: 'update_mesh', value: 'update_mesh' }
    ]}
>
<TabItem value="update_mesh">

Updates an existing service mesh.

```sql
UPDATE aws.appmesh.meshes
SET 
clientToken = '{{ clientToken }}',
spec = '{{ spec }}'
WHERE 
mesh_name = '{{ mesh_name }}' --required
AND region = '{{ region }}' --required
RETURNING
mesh;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_mesh"
    values={[
        { label: 'delete_mesh', value: 'delete_mesh' }
    ]}
>
<TabItem value="delete_mesh">

Deletes an existing service mesh. You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.

```sql
DELETE FROM aws.appmesh.meshes
WHERE mesh_name = '{{ mesh_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
