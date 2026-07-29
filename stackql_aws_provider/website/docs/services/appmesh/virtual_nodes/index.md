--- 
title: virtual_nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_nodes
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

Creates, updates, deletes, gets or lists a <code>virtual_nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appmesh.virtual_nodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_virtual_node"
    values={[
        { label: 'describe_virtual_node', value: 'describe_virtual_node' },
        { label: 'list_virtual_nodes', value: 'list_virtual_nodes' }
    ]}
>
<TabItem value="describe_virtual_node">

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
    <td>The name of the service mesh that the virtual node resides in.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>An object that represents metadata for a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>An object that represents the specification of a virtual node.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status for the virtual node.</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_node_name" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual node.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_virtual_nodes">

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
    <td>The full Amazon Resource Name (ARN) for the virtual node.</td>
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
    <td>The name of the service mesh that the virtual node resides in.</td>
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
    <td><CopyableCode code="virtual_node_name" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual node.</td>
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
    <td><a href="#describe_virtual_node"><CopyableCode code="describe_virtual_node" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-virtual_node_name"><code>virtual_node_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Describes an existing virtual node.</td>
</tr>
<tr>
    <td><a href="#list_virtual_nodes"><CopyableCode code="list_virtual_nodes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-meshOwner"><code>meshOwner</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of existing virtual nodes.</td>
</tr>
<tr>
    <td><a href="#create_virtual_node"><CopyableCode code="create_virtual_node" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-spec"><code>spec</code></a>, <a href="#parameter-virtualNodeName"><code>virtualNodeName</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Creates a virtual node within a service mesh. A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS). You define a listener for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a backend. The response metadata for your new virtual node contains the arn that is associated with the virtual node. Set this value to the full ARN; for example, arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp) as the APPMESH_RESOURCE_ARN environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the node.id and node.cluster Envoy parameters. By default, App Mesh uses the name of the resource you specified in APPMESH_RESOURCE_ARN when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the APPMESH_RESOURCE_CLUSTER environment variable with your own name. For more information about virtual nodes, see Virtual nodes. You must be using 1.15.0 or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see Envoy image in the App Mesh User Guide.</td>
</tr>
<tr>
    <td><a href="#update_virtual_node"><CopyableCode code="update_virtual_node" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-virtual_node_name"><code>virtual_node_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Updates an existing virtual node in a specified service mesh.</td>
</tr>
<tr>
    <td><a href="#delete_virtual_node"><CopyableCode code="delete_virtual_node" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-mesh_name"><code>mesh_name</code></a>, <a href="#parameter-virtual_node_name"><code>virtual_node_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-meshOwner"><code>meshOwner</code></a></td>
    <td>Deletes an existing virtual node. You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</td>
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
    <td>The name of the service mesh to delete the virtual node in.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-virtual_node_name">
    <td><CopyableCode code="virtual_node_name" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual node to delete.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results returned by ListVirtualNodes in paginated output. When you use this parameter, ListVirtualNodes returns only limit results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListVirtualNodes request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListVirtualNodes returns up to 100 results and a nextToken value if applicable.</td>
</tr>
<tr id="parameter-meshOwner">
    <td><CopyableCode code="meshOwner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with shared meshes.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated ListVirtualNodes request where limit was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_virtual_node"
    values={[
        { label: 'describe_virtual_node', value: 'describe_virtual_node' },
        { label: 'list_virtual_nodes', value: 'list_virtual_nodes' }
    ]}
>
<TabItem value="describe_virtual_node">

Describes an existing virtual node.

```sql
SELECT
mesh_name,
metadata,
spec,
status,
virtual_node_name
FROM aws.appmesh.virtual_nodes
WHERE mesh_name = '{{ mesh_name }}' -- required
AND virtual_node_name = '{{ virtual_node_name }}' -- required
AND region = '{{ region }}' -- required
AND meshOwner = '{{ meshOwner }}'
;
```
</TabItem>
<TabItem value="list_virtual_nodes">

Returns a list of existing virtual nodes.

```sql
SELECT
arn,
created_at,
last_updated_at,
mesh_name,
mesh_owner,
resource_owner,
version,
virtual_node_name
FROM aws.appmesh.virtual_nodes
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
    defaultValue="create_virtual_node"
    values={[
        { label: 'create_virtual_node', value: 'create_virtual_node' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_virtual_node">

Creates a virtual node within a service mesh. A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS). You define a listener for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a backend. The response metadata for your new virtual node contains the arn that is associated with the virtual node. Set this value to the full ARN; for example, arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp) as the APPMESH_RESOURCE_ARN environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the node.id and node.cluster Envoy parameters. By default, App Mesh uses the name of the resource you specified in APPMESH_RESOURCE_ARN when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the APPMESH_RESOURCE_CLUSTER environment variable with your own name. For more information about virtual nodes, see Virtual nodes. You must be using 1.15.0 or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see Envoy image in the App Mesh User Guide.

```sql
INSERT INTO aws.appmesh.virtual_nodes (
clientToken,
spec,
tags,
virtualNodeName,
mesh_name,
region,
meshOwner
)
SELECT 
'{{ clientToken }}',
'{{ spec }}' /* required */,
'{{ tags }}',
'{{ virtualNodeName }}' /* required */,
'{{ mesh_name }}',
'{{ region }}',
'{{ meshOwner }}'
RETURNING
virtual_node
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: virtual_nodes
  props:
    - name: mesh_name
      value: "{{ mesh_name }}"
      description: Required parameter for the virtual_nodes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the virtual_nodes resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: spec
      description: |
        An object that represents the specification of a virtual node.
      value:
        backendDefaults:
          clientPolicy:
            tls:
              certificate:
                file: "{{ file }}"
                sds: "{{ sds }}"
              enforce: {{ enforce }}
              ports:
                - {{ ports }}
              validation:
                subjectAlternativeNames: "{{ subjectAlternativeNames }}"
                trust: "{{ trust }}"
        backends:
          - virtualService:
              clientPolicy:
                tls:
                  certificate: "{{ certificate }}"
                  enforce: {{ enforce }}
                  ports: "{{ ports }}"
                  validation: "{{ validation }}"
              virtualServiceName: "{{ virtualServiceName }}"
        listeners:
          - connectionPool:
              grpc:
                maxRequests: {{ maxRequests }}
              http:
                maxConnections: {{ maxConnections }}
                maxPendingRequests: {{ maxPendingRequests }}
              http2:
                maxRequests: {{ maxRequests }}
              tcp:
                maxConnections: {{ maxConnections }}
            healthCheck:
              healthyThreshold: {{ healthyThreshold }}
              intervalMillis: {{ intervalMillis }}
              path: "{{ path }}"
              port: {{ port }}
              protocol: "{{ protocol }}"
              timeoutMillis: {{ timeoutMillis }}
              unhealthyThreshold: {{ unhealthyThreshold }}
            outlierDetection:
              baseEjectionDuration:
                unit: "{{ unit }}"
                value: {{ value }}
              interval:
                unit: "{{ unit }}"
                value: {{ value }}
              maxEjectionPercent: {{ maxEjectionPercent }}
              maxServerErrors: {{ maxServerErrors }}
            portMapping:
              port: {{ port }}
              protocol: "{{ protocol }}"
            timeout:
              grpc:
                idle:
                  unit: "{{ unit }}"
                  value: {{ value }}
                perRequest:
                  unit: "{{ unit }}"
                  value: {{ value }}
              http:
                idle:
                  unit: "{{ unit }}"
                  value: {{ value }}
                perRequest:
                  unit: "{{ unit }}"
                  value: {{ value }}
              http2:
                idle:
                  unit: "{{ unit }}"
                  value: {{ value }}
                perRequest:
                  unit: "{{ unit }}"
                  value: {{ value }}
              tcp:
                idle:
                  unit: "{{ unit }}"
                  value: {{ value }}
            tls:
              certificate:
                acm:
                  certificateArn: "{{ certificateArn }}"
                file:
                  certificateChain: "{{ certificateChain }}"
                  privateKey: "{{ privateKey }}"
                sds:
                  secretName: "{{ secretName }}"
              mode: "{{ mode }}"
              validation:
                subjectAlternativeNames:
                  match: "{{ match }}"
                trust:
                  file: "{{ file }}"
                  sds: "{{ sds }}"
        logging:
          accessLog:
            file:
              format_:
                json: "{{ json }}"
                text: "{{ text }}"
              path: "{{ path }}"
        serviceDiscovery:
          awsCloudMap:
            attributes:
              - key: "{{ key }}"
                value: "{{ value }}"
            ipPreference: "{{ ipPreference }}"
            namespaceName: "{{ namespaceName }}"
            serviceName: "{{ serviceName }}"
          dns:
            hostname: "{{ hostname }}"
            ipPreference: "{{ ipPreference }}"
            responseType: "{{ responseType }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: virtualNodeName
      value: "{{ virtualNodeName }}"
    - name: meshOwner
      value: "{{ meshOwner }}"
      description: The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see Working with shared meshes.
      description: The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see Working with shared meshes.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_virtual_node"
    values={[
        { label: 'update_virtual_node', value: 'update_virtual_node' }
    ]}
>
<TabItem value="update_virtual_node">

Updates an existing virtual node in a specified service mesh.

```sql
UPDATE aws.appmesh.virtual_nodes
SET 
clientToken = '{{ clientToken }}',
spec = '{{ spec }}'
WHERE 
mesh_name = '{{ mesh_name }}' --required
AND virtual_node_name = '{{ virtual_node_name }}' --required
AND region = '{{ region }}' --required
AND spec = '{{ spec }}' --required
AND meshOwner = '{{ meshOwner}}'
RETURNING
virtual_node;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_virtual_node"
    values={[
        { label: 'delete_virtual_node', value: 'delete_virtual_node' }
    ]}
>
<TabItem value="delete_virtual_node">

Deletes an existing virtual node. You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.

```sql
DELETE FROM aws.appmesh.virtual_nodes
WHERE mesh_name = '{{ mesh_name }}' --required
AND virtual_node_name = '{{ virtual_node_name }}' --required
AND region = '{{ region }}' --required
AND meshOwner = '{{ meshOwner }}'
;
```
</TabItem>
</Tabs>
