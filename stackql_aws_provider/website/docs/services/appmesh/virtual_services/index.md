--- 
title: virtual_services
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_services
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

Creates, updates, deletes, gets or lists a <code>virtual_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appmesh.virtual_services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_virtual_service"
    values={[
        { label: 'describe_virtual_service', value: 'describe_virtual_service' },
        { label: 'list_virtual_services', value: 'list_virtual_services' }
    ]}
>
<TabItem value="describe_virtual_service">

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
    <td>The name of the service mesh that the virtual service resides in.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>An object that represents metadata for a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>An object that represents the specification of a virtual service.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the virtual service.</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_service_name" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual service.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_virtual_services">

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
    <td>The full Amazon Resource Name (ARN) for the virtual service.</td>
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
    <td>The name of the service mesh that the virtual service resides in.</td>
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
    <td><CopyableCode code="virtual_service_name" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual service.</td>
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
    <td><a href="#describe_virtual_service"><CopyableCode code="describe_virtual_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-virtual_service_name"><code>virtual_service_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Describes an existing virtual service.</td>
</tr>
<tr>
    <td><a href="#list_virtual_services"><CopyableCode code="list_virtual_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-meshOwner"><code>meshOwner</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of existing virtual services in a service mesh.</td>
</tr>
<tr>
    <td><a href="#create_virtual_service"><CopyableCode code="create_virtual_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-spec"><code>spec</code></a>, <a href="#parameter-virtualServiceName"><code>virtualServiceName</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Creates a virtual service within a service mesh. A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its virtualServiceName, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service. For more information about virtual services, see Virtual services.</td>
</tr>
<tr>
    <td><a href="#update_virtual_service"><CopyableCode code="update_virtual_service" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-virtual_service_name"><code>virtual_service_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Updates an existing virtual service in a specified service mesh.</td>
</tr>
<tr>
    <td><a href="#delete_virtual_service"><CopyableCode code="delete_virtual_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-virtual_service_name"><code>virtual_service_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Deletes an existing virtual service.</td>
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
    <td>The name of the service mesh to delete the virtual service in.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-virtual_service_name">
    <td><CopyableCode code="virtual_service_name" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual service to delete.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results returned by ListVirtualServices in paginated output. When you use this parameter, ListVirtualServices returns only limit results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListVirtualServices request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListVirtualServices returns up to 100 results and a nextToken value if applicable.</td>
</tr>
<tr id="parameter-meshOwner">
    <td><CopyableCode code="meshOwner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with shared meshes.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated ListVirtualServices request where limit was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_virtual_service"
    values={[
        { label: 'describe_virtual_service', value: 'describe_virtual_service' },
        { label: 'list_virtual_services', value: 'list_virtual_services' }
    ]}
>
<TabItem value="describe_virtual_service">

Describes an existing virtual service.

```sql
SELECT
mesh_name,
metadata,
spec,
status,
virtual_service_name
FROM aws.appmesh.virtual_services
WHERE mesh_name = '{{ mesh_name }}' -- required
AND virtual_service_name = '{{ virtual_service_name }}' -- required
AND region = '{{ region }}' -- required
AND meshOwner = '{{ meshOwner }}'
;
```
</TabItem>
<TabItem value="list_virtual_services">

Returns a list of existing virtual services in a service mesh.

```sql
SELECT
arn,
created_at,
last_updated_at,
mesh_name,
mesh_owner,
resource_owner,
version,
virtual_service_name
FROM aws.appmesh.virtual_services
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
    defaultValue="create_virtual_service"
    values={[
        { label: 'create_virtual_service', value: 'create_virtual_service' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_virtual_service">

Creates a virtual service within a service mesh. A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its virtualServiceName, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service. For more information about virtual services, see Virtual services.

```sql
INSERT INTO aws.appmesh.virtual_services (
clientToken,
spec,
tags,
virtualServiceName,
mesh_name,
region,
meshOwner
)
SELECT 
'{{ clientToken }}',
'{{ spec }}' /* required */,
'{{ tags }}',
'{{ virtualServiceName }}' /* required */,
'{{ mesh_name }}',
'{{ region }}',
'{{ meshOwner }}'
RETURNING
virtual_service
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: virtual_services
  props:
    - name: mesh_name
      value: "{{ mesh_name }}"
      description: Required parameter for the virtual_services resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the virtual_services resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: spec
      description: |
        An object that represents the specification of a virtual service.
      value:
        provider:
          virtualNode:
            virtualNodeName: "{{ virtualNodeName }}"
          virtualRouter:
            virtualRouterName: "{{ virtualRouterName }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: virtualServiceName
      value: "{{ virtualServiceName }}"
    - name: meshOwner
      value: "{{ meshOwner }}"
      description: The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see Working with shared meshes.
      description: The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see Working with shared meshes.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_virtual_service"
    values={[
        { label: 'update_virtual_service', value: 'update_virtual_service' }
    ]}
>
<TabItem value="update_virtual_service">

Updates an existing virtual service in a specified service mesh.

```sql
UPDATE aws.appmesh.virtual_services
SET 
clientToken = '{{ clientToken }}',
spec = '{{ spec }}'
WHERE 
mesh_name = '{{ mesh_name }}' --required
AND virtual_service_name = '{{ virtual_service_name }}' --required
AND region = '{{ region }}' --required
AND spec = '{{ spec }}' --required
AND meshOwner = '{{ meshOwner}}'
RETURNING
virtual_service;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_virtual_service"
    values={[
        { label: 'delete_virtual_service', value: 'delete_virtual_service' }
    ]}
>
<TabItem value="delete_virtual_service">

Deletes an existing virtual service.

```sql
DELETE FROM aws.appmesh.virtual_services
WHERE mesh_name = '{{ mesh_name }}' --required
AND virtual_service_name = '{{ virtual_service_name }}' --required
AND region = '{{ region }}' --required
AND meshOwner = '{{ meshOwner }}'
;
```
</TabItem>
</Tabs>
