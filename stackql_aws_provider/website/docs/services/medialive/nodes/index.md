--- 
title: nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - nodes
  - medialive
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

Creates, updates, deletes, gets or lists a <code>nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.nodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_node"
    values={[
        { label: 'describe_node', value: 'describe_node' },
        { label: 'list_nodes', value: 'list_nodes' }
    ]}
>
<TabItem value="describe_node">

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
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="channel_placement_groups" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="connection_state" /></td>
    <td><code>string</code></td>
    <td>The current connection state of the Node. (CONNECTED, DISCONNECTED)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="instance_arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="node_interface_mappings" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOfNodeInterfaceMapping</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Used in CreateNodeRequest, CreateNodeRegistrationScriptRequest, DescribeNodeResult, DescribeNodeSummary, UpdateNodeRequest. (BACKUP, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="sdi_source_mappings" /></td>
    <td><code>array</code></td>
    <td>An array of SDI source mappings. Each mapping connects one logical SdiSource to the physical SDI card and port that the physical SDI source uses.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the Node. (CREATED, REGISTERING, READY_TO_ACTIVATE, REGISTRATION_FAILED, ACTIVATION_FAILED, ACTIVE, READY, IN_USE, DEREGISTERING, DRAINING, DEREGISTRATION_FAILED, DEREGISTERED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_nodes">

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
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="channel_placement_groups" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="connection_state" /></td>
    <td><code>string</code></td>
    <td>The current connection state of the Node. (CONNECTED, DISCONNECTED)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="instance_arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="managed_instance_id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="node_interface_mappings" /></td>
    <td><code>array</code></td>
    <td>Documentation update needed</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Used in CreateNodeRequest, CreateNodeRegistrationScriptRequest, DescribeNodeResult, DescribeNodeSummary, UpdateNodeRequest. (BACKUP, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="sdi_source_mappings" /></td>
    <td><code>array</code></td>
    <td>An array of SDI source mappings. Each mapping connects one logical SdiSource to the physical SDI card and port that the physical SDI source uses.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the Node. (CREATED, REGISTERING, READY_TO_ACTIVATE, REGISTRATION_FAILED, ACTIVATION_FAILED, ACTIVE, READY, IN_USE, DEREGISTERING, DRAINING, DEREGISTRATION_FAILED, DEREGISTERED)</td>
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
    <td><a href="#describe_node"><CopyableCode code="describe_node" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-node_id"><code>node_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get details about a Node in the specified Cluster.</td>
</tr>
<tr>
    <td><a href="#list_nodes"><CopyableCode code="list_nodes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieve the list of Nodes.</td>
</tr>
<tr>
    <td><a href="#create_node"><CopyableCode code="create_node" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a Node in the specified Cluster. You can also create Nodes using the CreateNodeRegistrationScript. Note that you can't move a Node to another Cluster.</td>
</tr>
<tr>
    <td><a href="#update_node"><CopyableCode code="update_node" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-node_id"><code>node_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Change the settings for a Node.</td>
</tr>
<tr>
    <td><a href="#delete_node"><CopyableCode code="delete_node" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-node_id"><code>node_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a Node. The Node must be IDLE.</td>
</tr>
<tr>
    <td><a href="#create_node_registration_script"><CopyableCode code="create_node_registration_script" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create the Register Node script for all the nodes intended for a specific Cluster. You will then run the script on each hardware unit that is intended for that Cluster. The script creates a Node in the specified Cluster. It then binds the Node to this hardware unit, and activates the node hardware for use with MediaLive Anywhere.</td>
</tr>
<tr>
    <td><a href="#update_node_state"><CopyableCode code="update_node_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-node_id"><code>node_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update the state of a node.</td>
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
<tr id="parameter-cluster_id">
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the cluster</td>
</tr>
<tr id="parameter-node_id">
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the node.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_node"
    values={[
        { label: 'describe_node', value: 'describe_node' },
        { label: 'list_nodes', value: 'list_nodes' }
    ]}
>
<TabItem value="describe_node">

Get details about a Node in the specified Cluster.

```sql
SELECT
arn,
channel_placement_groups,
cluster_id,
connection_state,
id,
instance_arn,
name,
node_interface_mappings,
role,
sdi_source_mappings,
state
FROM aws.medialive.nodes
WHERE cluster_id = '{{ cluster_id }}' -- required
AND node_id = '{{ node_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_nodes">

Retrieve the list of Nodes.

```sql
SELECT
arn,
channel_placement_groups,
cluster_id,
connection_state,
id,
instance_arn,
managed_instance_id,
name,
node_interface_mappings,
role,
sdi_source_mappings,
state
FROM aws.medialive.nodes
WHERE cluster_id = '{{ cluster_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_node"
    values={[
        { label: 'create_node', value: 'create_node' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_node">

Create a Node in the specified Cluster. You can also create Nodes using the CreateNodeRegistrationScript. Note that you can't move a Node to another Cluster.

```sql
INSERT INTO aws.medialive.nodes (
Name,
NodeInterfaceMappings,
RequestId,
Role,
Tags,
cluster_id,
region
)
SELECT 
'{{ Name }}',
'{{ NodeInterfaceMappings }}',
'{{ RequestId }}',
'{{ Role }}',
'{{ Tags }}',
'{{ cluster_id }}',
'{{ region }}'
RETURNING
arn,
channel_placement_groups,
cluster_id,
connection_state,
id,
instance_arn,
name,
node_interface_mappings,
role,
sdi_source_mappings,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: nodes
  props:
    - name: cluster_id
      value: "{{ cluster_id }}"
      description: Required parameter for the nodes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the nodes resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        Placeholder documentation for __string
    - name: NodeInterfaceMappings
      description: |
        Placeholder documentation for __listOfNodeInterfaceMappingCreateRequest
      value:
        - LogicalInterfaceName: "{{ LogicalInterfaceName }}"
          NetworkInterfaceMode: "{{ NetworkInterfaceMode }}"
          PhysicalInterfaceName: "{{ PhysicalInterfaceName }}"
    - name: RequestId
      value: "{{ RequestId }}"
      description: |
        Placeholder documentation for __string
    - name: Role
      value: "{{ Role }}"
      description: |
        Used in CreateNodeRequest, CreateNodeRegistrationScriptRequest, DescribeNodeResult, DescribeNodeSummary, UpdateNodeRequest.
      valid_values: ['BACKUP', 'ACTIVE']
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Placeholder documentation for Tags
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_node"
    values={[
        { label: 'update_node', value: 'update_node' }
    ]}
>
<TabItem value="update_node">

Change the settings for a Node.

```sql
UPDATE aws.medialive.nodes
SET 
Name = '{{ Name }}',
Role = '{{ Role }}',
SdiSourceMappings = '{{ SdiSourceMappings }}'
WHERE 
cluster_id = '{{ cluster_id }}' --required
AND node_id = '{{ node_id }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
channel_placement_groups,
cluster_id,
connection_state,
id,
instance_arn,
name,
node_interface_mappings,
role,
sdi_source_mappings,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_node"
    values={[
        { label: 'delete_node', value: 'delete_node' }
    ]}
>
<TabItem value="delete_node">

Delete a Node. The Node must be IDLE.

```sql
DELETE FROM aws.medialive.nodes
WHERE cluster_id = '{{ cluster_id }}' --required
AND node_id = '{{ node_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="create_node_registration_script"
    values={[
        { label: 'create_node_registration_script', value: 'create_node_registration_script' },
        { label: 'update_node_state', value: 'update_node_state' }
    ]}
>
<TabItem value="create_node_registration_script">

Create the Register Node script for all the nodes intended for a specific Cluster. You will then run the script on each hardware unit that is intended for that Cluster. The script creates a Node in the specified Cluster. It then binds the Node to this hardware unit, and activates the node hardware for use with MediaLive Anywhere.

```sql
EXEC aws.medialive.nodes.create_node_registration_script 
@cluster_id='{{ cluster_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Id": "{{ Id }}", 
"Name": "{{ Name }}", 
"NodeInterfaceMappings": "{{ NodeInterfaceMappings }}", 
"RequestId": "{{ RequestId }}", 
"Role": "{{ Role }}"
}'
;
```
</TabItem>
<TabItem value="update_node_state">

Update the state of a node.

```sql
EXEC aws.medialive.nodes.update_node_state 
@cluster_id='{{ cluster_id }}' --required, 
@node_id='{{ node_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"State": "{{ State }}"
}'
;
```
</TabItem>
</Tabs>
