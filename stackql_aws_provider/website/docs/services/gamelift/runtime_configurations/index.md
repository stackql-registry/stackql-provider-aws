--- 
title: runtime_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - runtime_configurations
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

Creates, updates, deletes, gets or lists a <code>runtime_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="runtime_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.runtime_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_runtime_configuration"
    values={[
        { label: 'describe_runtime_configuration', value: 'describe_runtime_configuration' }
    ]}
>
<TabItem value="describe_runtime_configuration">

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
    <td><CopyableCode code="game_session_activation_timeout_seconds" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of time (in seconds) allowed to launch a new game session and have it report ready to host players. During this time, the game session is in status ACTIVATING. If the game session does not become active before the timeout, it is ended and the game session status is changed to TERMINATED.</td>
</tr>
<tr>
    <td><CopyableCode code="max_concurrent_game_session_activations" /></td>
    <td><code>integer</code></td>
    <td>The number of game sessions in status ACTIVATING to allow on an instance or compute. This setting limits the instance resources that can be used for new game activations at any one time.</td>
</tr>
<tr>
    <td><CopyableCode code="server_processes" /></td>
    <td><code>array</code></td>
    <td>A collection of server process configurations that identify what server processes to run on fleet computes.</td>
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
    <td><a href="#describe_runtime_configuration"><CopyableCode code="describe_runtime_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Retrieves a fleet's runtime configuration settings. The runtime configuration determines which server processes run, and how, on computes in the fleet. For managed EC2 fleets, the runtime configuration describes server processes that run on each fleet instance. You can update a fleet's runtime configuration at any time using UpdateRuntimeConfiguration. To get the current runtime configuration for a fleet, provide the fleet ID. If successful, a RuntimeConfiguration object is returned for the requested fleet. If the requested fleet has been deleted, the result set is empty. Learn more Setting up Amazon GameLift Servers fleets Running multiple processes on a fleet</td>
</tr>
<tr>
    <td><a href="#update_runtime_configuration"><CopyableCode code="update_runtime_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FleetId"><code>FleetId</code></a>, <a href="#parameter-RuntimeConfiguration"><code>RuntimeConfiguration</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Updates the runtime configuration for the specified fleet. The runtime configuration tells Amazon GameLift Servers how to launch server processes on computes in managed EC2 and Anywhere fleets. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in ACTIVE status. To update runtime configuration, specify the fleet ID and provide a RuntimeConfiguration with an updated set of server process configurations. If successful, the fleet's runtime configuration settings are updated. Fleet computes that run game server processes regularly check for and receive updated runtime configurations. The computes immediately take action to comply with the new configuration by launching new server processes or by not replacing existing processes when they shut down. Updating a fleet's runtime configuration never affects existing server processes. Learn more Setting up Amazon GameLift Servers fleets</td>
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
    defaultValue="describe_runtime_configuration"
    values={[
        { label: 'describe_runtime_configuration', value: 'describe_runtime_configuration' }
    ]}
>
<TabItem value="describe_runtime_configuration">

This API works with the following fleet types: EC2 Retrieves a fleet's runtime configuration settings. The runtime configuration determines which server processes run, and how, on computes in the fleet. For managed EC2 fleets, the runtime configuration describes server processes that run on each fleet instance. You can update a fleet's runtime configuration at any time using UpdateRuntimeConfiguration. To get the current runtime configuration for a fleet, provide the fleet ID. If successful, a RuntimeConfiguration object is returned for the requested fleet. If the requested fleet has been deleted, the result set is empty. Learn more Setting up Amazon GameLift Servers fleets Running multiple processes on a fleet

```sql
SELECT
game_session_activation_timeout_seconds,
max_concurrent_game_session_activations,
server_processes
FROM aws.gamelift.runtime_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_runtime_configuration"
    values={[
        { label: 'update_runtime_configuration', value: 'update_runtime_configuration' }
    ]}
>
<TabItem value="update_runtime_configuration">

This API works with the following fleet types: EC2 Updates the runtime configuration for the specified fleet. The runtime configuration tells Amazon GameLift Servers how to launch server processes on computes in managed EC2 and Anywhere fleets. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in ACTIVE status. To update runtime configuration, specify the fleet ID and provide a RuntimeConfiguration with an updated set of server process configurations. If successful, the fleet's runtime configuration settings are updated. Fleet computes that run game server processes regularly check for and receive updated runtime configurations. The computes immediately take action to comply with the new configuration by launching new server processes or by not replacing existing processes when they shut down. Updating a fleet's runtime configuration never affects existing server processes. Learn more Setting up Amazon GameLift Servers fleets

```sql
UPDATE aws.gamelift.runtime_configurations
SET 
FleetId = '{{ FleetId }}',
RuntimeConfiguration = '{{ RuntimeConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND FleetId = '{{ FleetId }}' --required
AND RuntimeConfiguration = '{{ RuntimeConfiguration }}' --required
RETURNING
runtime_configuration;
```
</TabItem>
</Tabs>
