--- 
title: player_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - player_sessions
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

Creates, updates, deletes, gets or lists a <code>player_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="player_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.player_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_player_sessions"
    values={[
        { label: 'describe_player_sessions', value: 'describe_player_sessions' }
    ]}
>
<TabItem value="describe_player_sessions">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="dns_name" /></td>
    <td><code>string</code></td>
    <td>The DNS identifier assigned to the instance that is running the game session. Values have the following format: TLS-enabled fleets: &lt;unique identifier&gt;.&lt;region identifier&gt;.amazongamelift.com. Non-TLS-enabled fleets: ec2-&lt;unique identifier&gt;.compute.amazonaws.com. (See Amazon EC2 Instance IP Addressing.) When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with the GameLift fleet that the player's game session is running on. (pattern: &lt;code&gt;^arn:.*:&#91;a-z&#93;*fleet\/&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the fleet that the player's game session is running on. (pattern: &lt;code&gt;^&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="game_session_id" /></td>
    <td><code>string</code></td>
    <td>An identifier for the game session that is unique across all regions that the player session is connected to. The value is always a full ARN in the following format: arn:aws:gamelift:`&lt;location&gt;`::gamesession/&lt;fleet ID&gt;/&lt;ID string&gt;.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string</code></td>
    <td>The IP address of the game session. To connect to a Amazon GameLift Servers game server, an app needs both the IP address and port number. (pattern: &lt;code&gt;^&#91;0-9A-Fa-f\:\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="player_data" /></td>
    <td><code>string</code></td>
    <td>Developer-defined information related to a player. Amazon GameLift Servers does not use this data, so it can be formatted as needed for use in the game.</td>
</tr>
<tr>
    <td><CopyableCode code="player_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a player that is associated with this player session.</td>
</tr>
<tr>
    <td><CopyableCode code="player_session_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a player session. (pattern: &lt;code&gt;^psess-\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Port number for the game session. To connect to a Amazon GameLift Servers server process, an app needs both the IP address and port number.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the player session. Possible player session statuses include the following: RESERVED -- The player session request has been received, but the player has not yet connected to the server process and/or been validated. ACTIVE -- The player has been validated by the server process and is currently connected. COMPLETED -- The player connection has been dropped. TIMEDOUT -- A player session request was received, but the player did not connect and/or was not validated within the timeout limit (60 seconds). (RESERVED, ACTIVE, COMPLETED, TIMEDOUT)</td>
</tr>
<tr>
    <td><CopyableCode code="termination_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
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
    <td><a href="#describe_player_sessions"><CopyableCode code="describe_player_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Retrieves properties for one or more player sessions. This action can be used in the following ways: To retrieve a specific player session, provide the player session ID only. To retrieve all player sessions in a game session, provide the game session ID only. To retrieve all player sessions for a specific player, provide a player ID only. To request player sessions, specify either a player session ID, game session ID, or player ID. You can filter this request by player session status. If you provide a specific PlayerSessionId or PlayerId, Amazon GameLift Servers ignores the filter criteria. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a PlayerSession object is returned for each session that matches the request. Related actions All APIs by task</td>
</tr>
<tr>
    <td><a href="#create_player_session"><CopyableCode code="create_player_session" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GameSessionId"><code>GameSessionId</code></a>, <a href="#parameter-PlayerId"><code>PlayerId</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Reserves an open player slot in a game session for a player. New player sessions can be created in any game session with an open slot that is in ACTIVE status and has a player creation policy of ACCEPT_ALL. You can add a group of players to a game session with CreatePlayerSessions . To create a player session, specify a game session ID, player ID, and optionally a set of player data. If successful, a slot is reserved in the game session for the player and a new PlayerSessions object is returned with a player session ID. The player references the player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift Servers service. Player sessions cannot be updated. The maximum number of players per game session is 200. It is not adjustable. Related actions All APIs by task</td>
</tr>
<tr>
    <td><a href="#create_player_sessions"><CopyableCode code="create_player_sessions" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GameSessionId"><code>GameSessionId</code></a>, <a href="#parameter-PlayerIds"><code>PlayerIds</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Reserves open slots in a game session for a group of players. New player sessions can be created in any game session with an open slot that is in ACTIVE status and has a player creation policy of ACCEPT_ALL. To add a single player to a game session, use CreatePlayerSession To create player sessions, specify a game session ID and a list of player IDs. Optionally, provide a set of player data for each player ID. If successful, a slot is reserved in the game session for each player, and new PlayerSession objects are returned with player session IDs. Each player references their player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift Servers service. Player sessions cannot be updated. The maximum number of players per game session is 200. It is not adjustable. Related actions All APIs by task</td>
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
    defaultValue="describe_player_sessions"
    values={[
        { label: 'describe_player_sessions', value: 'describe_player_sessions' }
    ]}
>
<TabItem value="describe_player_sessions">

This API works with the following fleet types: EC2, Anywhere, Container Retrieves properties for one or more player sessions. This action can be used in the following ways: To retrieve a specific player session, provide the player session ID only. To retrieve all player sessions in a game session, provide the game session ID only. To retrieve all player sessions for a specific player, provide a player ID only. To request player sessions, specify either a player session ID, game session ID, or player ID. You can filter this request by player session status. If you provide a specific PlayerSessionId or PlayerId, Amazon GameLift Servers ignores the filter criteria. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a PlayerSession object is returned for each session that matches the request. Related actions All APIs by task

```sql
SELECT
creation_time,
dns_name,
fleet_arn,
fleet_id,
game_session_id,
ip_address,
player_data,
player_id,
player_session_id,
port,
status,
termination_time
FROM aws.gamelift.player_sessions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_player_session"
    values={[
        { label: 'create_player_session', value: 'create_player_session' },
        { label: 'create_player_sessions', value: 'create_player_sessions' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_player_session">

This API works with the following fleet types: EC2, Anywhere, Container Reserves an open player slot in a game session for a player. New player sessions can be created in any game session with an open slot that is in ACTIVE status and has a player creation policy of ACCEPT_ALL. You can add a group of players to a game session with CreatePlayerSessions . To create a player session, specify a game session ID, player ID, and optionally a set of player data. If successful, a slot is reserved in the game session for the player and a new PlayerSessions object is returned with a player session ID. The player references the player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift Servers service. Player sessions cannot be updated. The maximum number of players per game session is 200. It is not adjustable. Related actions All APIs by task

```sql
INSERT INTO aws.gamelift.player_sessions (
GameSessionId,
PlayerId,
PlayerData,
region
)
SELECT 
'{{ GameSessionId }}' /* required */,
'{{ PlayerId }}' /* required */,
'{{ PlayerData }}',
'{{ region }}'
RETURNING
player_session
;
```
</TabItem>
<TabItem value="create_player_sessions">

This API works with the following fleet types: EC2, Anywhere, Container Reserves open slots in a game session for a group of players. New player sessions can be created in any game session with an open slot that is in ACTIVE status and has a player creation policy of ACCEPT_ALL. To add a single player to a game session, use CreatePlayerSession To create player sessions, specify a game session ID and a list of player IDs. Optionally, provide a set of player data for each player ID. If successful, a slot is reserved in the game session for each player, and new PlayerSession objects are returned with player session IDs. Each player references their player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift Servers service. Player sessions cannot be updated. The maximum number of players per game session is 200. It is not adjustable. Related actions All APIs by task

```sql
INSERT INTO aws.gamelift.player_sessions (
GameSessionId,
PlayerIds,
PlayerDataMap,
region
)
SELECT 
'{{ GameSessionId }}' /* required */,
'{{ PlayerIds }}' /* required */,
'{{ PlayerDataMap }}',
'{{ region }}'
RETURNING
player_sessions
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: player_sessions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the player_sessions resource.
    - name: GameSessionId
      value: "{{ GameSessionId }}"
      description: |
        An identifier for the game session that is unique across all regions to add players to. The value is always a full ARN in the following format: arn:aws:gamelift:\`<location>\`::gamesession/<fleet ID>/<ID string>.
    - name: PlayerId
      value: "{{ PlayerId }}"
      description: |
        A unique identifier for a player. Player IDs are developer-defined.
    - name: PlayerData
      value: "{{ PlayerData }}"
      description: |
        Developer-defined information related to a player. Amazon GameLift Servers does not use this data, so it can be formatted as needed for use in the game.
    - name: PlayerIds
      value:
        - "{{ PlayerIds }}"
      description: |
        List of unique identifiers for the players to be added.
    - name: PlayerDataMap
      value: "{{ PlayerDataMap }}"
      description: |
        Map of string pairs, each specifying a player ID and a set of developer-defined information related to the player. Amazon GameLift Servers does not use this data, so it can be formatted as needed for use in the game. Any player data strings for player IDs that are not included in the PlayerIds parameter are ignored.
`}</CodeBlock>

</TabItem>
</Tabs>
