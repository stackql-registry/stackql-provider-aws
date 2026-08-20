--- 
title: container_group_port_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - container_group_port_mappings
  - gamelift
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

Creates, updates, deletes, gets or lists a <code>container_group_port_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="container_group_port_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.container_group_port_mappings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_container_group_port_mappings"
    values={[
        { label: 'describe_container_group_port_mappings', value: 'describe_container_group_port_mappings' }
    ]}
>
<TabItem value="describe_container_group_port_mappings">

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
    <td><CopyableCode code="compute_name" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the compute resource running the game server container group. Returned when ContainerGroupType is GAME_SERVER. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-&#93;+(\/&#91;a-zA-Z0-9\-&#93;+)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="container_group_definition_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to the container group definition. The ARN value also identifies the specific container group definition version in use. (pattern: &lt;code&gt;^arn:.*:containergroupdefinition\/&#91;a-zA-Z0-9\-&#93;+(:&#91;0-9&#93;+)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="container_group_port_mappings" /></td>
    <td><code>array</code></td>
    <td>A list of ContainerGroupPortMapping objects that describe the port mappings for each container in the container group.</td>
</tr>
<tr>
    <td><CopyableCode code="container_group_type" /></td>
    <td><code>string</code></td>
    <td>The type of container group that was specified in the request. Valid values are GAME_SERVER or PER_INSTANCE. (GAME_SERVER, PER_INSTANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912. In a GameLift fleet ARN, the resource ID matches the FleetId value. (pattern: &lt;code&gt;^arn:.*:&#91;a-z&#93;*fleet\/&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the container fleet. (pattern: &lt;code&gt;^&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the fleet instance. For GAME_SERVER requests, this is the instance running the specified compute. For PER_INSTANCE requests, this is the instance specified in the request. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\.-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The location of the fleet instance, expressed as an Amazon Web Services Region code, such as us-west-2. (pattern: &lt;code&gt;^&#91;A-Za-z0-9\-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_container_group_port_mappings"><CopyableCode code="describe_container_group_port_mappings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: Container Retrieves the port mappings for a container group running on a container fleet. Port mappings show how container ports are mapped to connection ports on the fleet instance. Use this operation to find the connection port for a specific container on a fleet instance. Request options Get port mappings for a game server container group. Provide the fleet ID, set ContainerGroupType to GAME_SERVER, and specify the ComputeName for the game server container group. Get port mappings for a per-instance container group. Provide the fleet ID, set ContainerGroupType to PER_INSTANCE, and specify the InstanceId for the instance. Optionally filter results to a single container by providing a ContainerName. Results This operation returns the fleet ID, fleet ARN, location, container group definition ARN, container group type, compute name (for game server container groups), instance ID, and a list of ContainerGroupPortMapping objects. Each object contains the container name, runtime ID, and a list of port mappings that show how container ports map to connection ports on the instance. Learn more Connect to containers Create a container group definition</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_container_group_port_mappings"
    values={[
        { label: 'describe_container_group_port_mappings', value: 'describe_container_group_port_mappings' }
    ]}
>
<TabItem value="describe_container_group_port_mappings">

This API works with the following fleet types: Container Retrieves the port mappings for a container group running on a container fleet. Port mappings show how container ports are mapped to connection ports on the fleet instance. Use this operation to find the connection port for a specific container on a fleet instance. Request options Get port mappings for a game server container group. Provide the fleet ID, set ContainerGroupType to GAME_SERVER, and specify the ComputeName for the game server container group. Get port mappings for a per-instance container group. Provide the fleet ID, set ContainerGroupType to PER_INSTANCE, and specify the InstanceId for the instance. Optionally filter results to a single container by providing a ContainerName. Results This operation returns the fleet ID, fleet ARN, location, container group definition ARN, container group type, compute name (for game server container groups), instance ID, and a list of ContainerGroupPortMapping objects. Each object contains the container name, runtime ID, and a list of port mappings that show how container ports map to connection ports on the instance. Learn more Connect to containers Create a container group definition

```sql
SELECT
compute_name,
container_group_definition_arn,
container_group_port_mappings,
container_group_type,
fleet_arn,
fleet_id,
instance_id,
location
FROM aws.gamelift.container_group_port_mappings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
