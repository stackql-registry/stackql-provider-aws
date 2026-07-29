--- 
title: player_connection_details
hide_title: false
hide_table_of_contents: false
keywords:
  - player_connection_details
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

Creates, updates, deletes, gets or lists a <code>player_connection_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="player_connection_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.player_connection_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_player_connection_details"
    values={[
        { label: 'get_player_connection_details', value: 'get_player_connection_details' }
    ]}
>
<TabItem value="get_player_connection_details">

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
    <td><CopyableCode code="game_session_id" /></td>
    <td><code>string</code></td>
    <td>An identifier for the game session that is unique across all regions for which the player connection details were retrieved. The value is always a full ARN in the following format: arn:aws:gamelift:`&lt;location&gt;`::gamesession/&lt;fleet ID&gt;/&lt;ID string&gt;. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="player_connection_details" /></td>
    <td><code>array</code></td>
    <td>A collection of player connection detail objects, one for each requested player.</td>
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
    <td><a href="#get_player_connection_details"><CopyableCode code="get_player_connection_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 (server SDK 5.x or later), Container Retrieves connection details for game clients to connect to game sessions. Player gateway benefits: DDoS protection with negligible impact to latency. To enable player gateway on your fleet, set PlayerGatewayMode to ENABLED or REQUIRED when calling CreateFleet or CreateContainerFleet. How to use: After creating a game session and adding players, call this operation with the game session ID and player IDs. When player gateway is enabled, the response includes connection endpoints and player gateway tokens that your game clients can use to connect to the game session through player gateway. To learn more about player gateway integration, see DDoS protection with Amazon GameLift Servers player gateway. When player gateway is disabled or in locations where player gateway is not supported, this operation returns game server connection information without player gateway tokens, so that your game clients directly connect to the game server endpoint.</td>
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
    defaultValue="get_player_connection_details"
    values={[
        { label: 'get_player_connection_details', value: 'get_player_connection_details' }
    ]}
>
<TabItem value="get_player_connection_details">

This API works with the following fleet types: EC2 (server SDK 5.x or later), Container Retrieves connection details for game clients to connect to game sessions. Player gateway benefits: DDoS protection with negligible impact to latency. To enable player gateway on your fleet, set PlayerGatewayMode to ENABLED or REQUIRED when calling CreateFleet or CreateContainerFleet. How to use: After creating a game session and adding players, call this operation with the game session ID and player IDs. When player gateway is enabled, the response includes connection endpoints and player gateway tokens that your game clients can use to connect to the game session through player gateway. To learn more about player gateway integration, see DDoS protection with Amazon GameLift Servers player gateway. When player gateway is disabled or in locations where player gateway is not supported, this operation returns game server connection information without player gateway tokens, so that your game clients directly connect to the game server endpoint.

```sql
SELECT
game_session_id,
player_connection_details
FROM aws.gamelift.player_connection_details
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
