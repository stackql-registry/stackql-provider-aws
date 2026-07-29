--- 
title: game_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - game_sessions
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

Creates, updates, deletes, gets or lists a <code>game_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="game_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.game_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_game_sessions"
    values={[
        { label: 'describe_game_sessions', value: 'describe_game_sessions' }
    ]}
>
<TabItem value="describe_game_sessions">

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
    <td>A descriptive label for the compute resource. The compute resource that is hosting the game session. For EC2 fleets, this is the EC2 instance ID. For Container fleets, each game server container group on a fleet instance is assigned a compute name. For Anywhere fleets, this is the custom compute name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-&#93;+(\/&#91;a-zA-Z0-9\-&#93;+)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="creator_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a player. This ID is used to enforce a resource protection policy (if one exists), that limits the number of game sessions a player can create.</td>
</tr>
<tr>
    <td><CopyableCode code="current_player_session_count" /></td>
    <td><code>integer</code></td>
    <td>Number of players currently in the game session.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_name" /></td>
    <td><code>string</code></td>
    <td>The DNS identifier assigned to the instance that is running the game session. Values have the following format: TLS-enabled fleets: &lt;unique identifier&gt;.&lt;region identifier&gt;.amazongamelift.com. Non-TLS-enabled fleets: ec2-&lt;unique identifier&gt;.compute.amazonaws.com. (See Amazon EC2 Instance IP Addressing.) When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with the GameLift fleet that this game session is running on. (pattern: &lt;code&gt;^arn:.*:&#91;a-z&#93;*fleet\/&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the fleet that the game session is running on. (pattern: &lt;code&gt;^&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="game_properties" /></td>
    <td><code>array</code></td>
    <td>A set of key-value pairs that can store custom data in a game session. For example: &#123;"Key": "difficulty", "Value": "novice"&#125;. Avoid using periods (".") in property keys if you plan to search for game sessions by properties. Property keys containing periods cannot be searched and will be filtered out from search results due to search index limitations. If you use SearchGameSessions API, there is a limit of 500 game property keys across all game sessions and all fleets per region. If the limit is exceeded, there will potentially be game session entries missing from SearchGameSessions API results.</td>
</tr>
<tr>
    <td><CopyableCode code="game_session_data" /></td>
    <td><code>string</code></td>
    <td>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see Start a game session.</td>
</tr>
<tr>
    <td><CopyableCode code="game_session_id" /></td>
    <td><code>string</code></td>
    <td>An identifier for the game session that is unique across all regions. The value is always a full ARN in the following format: arn:aws:gamelift:`&lt;location&gt;`::gamesession/&lt;fleet ID&gt;/&lt;ID string&gt;.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string</code></td>
    <td>The IP address of the game session. To connect to a Amazon GameLift Servers game server, an app needs both the IP address and port number. (pattern: &lt;code&gt;^&#91;0-9A-Fa-f\:\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The fleet location where the game session is running. This value might specify the fleet's home Region or a remote location. Location is expressed as an Amazon Web Services Region code such as us-west-2. (pattern: &lt;code&gt;^&#91;A-Za-z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="matchmaker_data" /></td>
    <td><code>string</code></td>
    <td>Information about the matchmaking process that resulted in the game session, if matchmaking was used. Data is in JSON syntax, formatted as a string. Information includes the matchmaker ID as well as player attributes and team assignments. For more details on matchmaker data, see Match Data. Matchmaker data is updated whenever new players are added during a successful backfill (see StartMatchBackfill).</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_player_session_count" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of players that can be connected simultaneously to the game session.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A descriptive label that is associated with a game session. Session names do not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="player_gateway_status" /></td>
    <td><code>string</code></td>
    <td>Indicates whether player gateway is available for use for this game session. Note, even if a fleet has PlayerGatewayMode configured as ENABLED, player gateway might not be available in a specific location. For more information about locations where player gateway is supported, see Amazon GameLift Servers service locations. Possible values include: ENABLED -- Player gateway is available for routing player connections for this game session. DISABLED -- Player gateway is not available for this game session. (DISABLED, ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="player_session_creation_policy" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the game session is accepting new players. (ACCEPT_ALL, DENY_ALL)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port number for the game session. To connect to a Amazon GameLift Servers game server, an app needs both the IP address and port number.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the game session. A game session must have an ACTIVE status to have player sessions. (ACTIVE, ACTIVATING, TERMINATED, TERMINATING, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Provides additional information about game session status. INTERRUPTED -- The game session was hosted on an EC2 Spot instance that was reclaimed, causing the active game session to be stopped. TRIGGERED_ON_PROCESS_TERMINATE – The game session was stopped by calling TerminateGameSession with the termination mode TRIGGER_ON_PROCESS_TERMINATE. FORCE_TERMINATED – The game session was stopped by calling TerminateGameSession with the termination mode FORCE_TERMINATE. (INTERRUPTED, TRIGGERED_ON_PROCESS_TERMINATE, FORCE_TERMINATED)</td>
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
    <td><a href="#describe_game_sessions"><CopyableCode code="describe_game_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Retrieves a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status. This operation can be used in the following ways: To retrieve all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns all game sessions in the fleet's home Region and all remote locations. To retrieve all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location. To retrieve a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSession object is returned for each game session that matches the request. This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with DescribeGameSessions should only be used for games in development with low game session usage. Available in Amazon GameLift Servers Local. Learn more Find a game session All APIs by task</td>
</tr>
<tr>
    <td><a href="#create_game_session"><CopyableCode code="create_game_session" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MaximumPlayerSessionCount"><code>MaximumPlayerSessionCount</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Creates a multiplayer game session for players in a specific fleet location. This operation prompts an available server process to start a game session and retrieves connection information for the new game session. As an alternative, consider using the Amazon GameLift Servers game session placement feature with StartGameSessionPlacement, which uses the FleetIQ algorithm and queues to optimize the placement process. When creating a game session, you specify exactly where you want to place it and provide a set of game session configuration settings. The target fleet must be in ACTIVE status. You can use this operation in the following ways: To create a game session on an instance in a fleet's home Region, provide a fleet or alias ID along with your game session configuration. To create a game session on an instance in a fleet's remote location, provide a fleet or alias ID and a location name, along with your game session configuration. To create a game session on an instance in an Anywhere fleet, specify the fleet's custom location. If successful, Amazon GameLift Servers initiates a workflow to start a new game session and returns a GameSession object containing the game session configuration and status. When the game session status is ACTIVE, it is updated with connection information and you can create player sessions for the game session. By default, newly created game sessions are open to new players. You can restrict new player access by using UpdateGameSession to change the game session's player session creation policy. Amazon GameLift Servers retains logs for active for 14 days. To access the logs, call GetGameSessionLogUrl to download the log files. Available in Amazon GameLift Servers Local. Learn more Start a game session All APIs by task</td>
</tr>
<tr>
    <td><a href="#update_game_session"><CopyableCode code="update_game_session" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GameSessionId"><code>GameSessionId</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Updates the mutable properties of a game session. To update a game session, specify the game session ID and the values you want to change. If successful, the updated GameSession object is returned. All APIs by task</td>
</tr>
<tr>
    <td><a href="#terminate_game_session"><CopyableCode code="terminate_game_session" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Ends a game session that's currently in progress. Use this action to terminate any game session that isn't in ERROR status. Terminating a game session is the most efficient way to free up a server process when it's hosting a game session that's in a bad state or not ending properly. You can use this action to terminate a game session that's being hosted on any type of Amazon GameLift Servers fleet compute, including computes for managed EC2, managed container, and Anywhere fleets. The game server must be integrated with Amazon GameLift Servers server SDK 5.x or greater. Request options Request termination for a single game session. Provide the game session ID and the termination mode. There are two potential methods for terminating a game session: Initiate a graceful termination using the normal game session shutdown sequence. With this mode, the Amazon GameLift Servers service prompts the server process that's hosting the game session by calling the server SDK callback method OnProcessTerminate(). The callback implementation is part of the custom game server code. It might involve a variety of actions to gracefully end a game session, such as notifying players, before stopping the server process. Force an immediate game session termination. With this mode, the Amazon GameLift Servers service takes action to stop the server process, which ends the game session without the normal game session shutdown sequence. Results If successful, game session termination is initiated. During this activity, the game session status is changed to TERMINATING. When completed, the server process that was hosting the game session has been stopped and replaced with a new server process that's ready to host a new game session. The old game session's status is changed to TERMINATED with a status reason that indicates the termination method used. Learn more Add Amazon GameLift Servers to your game server Amazon GameLift Servers server SDK 5 reference guide for OnProcessTerminate() (C++) (C#) (Unreal) (Go)</td>
</tr>
<tr>
    <td><a href="#search_game_sessions"><CopyableCode code="search_game_sessions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Retrieves all active game sessions that match a set of search criteria and sorts them into a specified order. This operation is not designed to continually track game session status because that practice can cause you to exceed your API limit and generate errors. Instead, configure an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications from a matchmaker or a game session placement queue. When searching for game sessions, you specify exactly where you want to search and provide a search filter expression, a sort expression, or both. A search request can search only one fleet, but it can search all of a fleet's locations. This operation can be used in the following ways: To search all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID. This approach returns game sessions in the fleet's home Region and all remote locations that fit the search criteria. To search all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name. For location, you can specify a fleet's home Region or any remote location. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSession object is returned for each game session that matches the request. Search finds game sessions that are in ACTIVE status only. To retrieve information on game sessions in other statuses, use DescribeGameSessions. To set search and sort criteria, create a filter expression using the following game session attributes. For game session search examples, see the Examples section of this topic. gameSessionId -- An identifier for the game session that is unique across all regions. You must use the full ARN value. gameSessionName -- Name assigned to a game session. Game session names do not need to be unique to a game session. gameSessionProperties -- A set of key-value pairs that can store custom data in a game session. For example: &#123;"Key": "difficulty", "Value": "novice"&#125;. The filter expression must specify the https:​//docs.aws.amazon.com/gamelift/latest/apireference/API_GameProperty -- a Key and a string Value to search for the game sessions. For example, to search for the above key-value pair, specify the following search filter: gameSessionProperties.difficulty = "novice". All game property values are searched as strings. For examples of searching game sessions, see the ones below, and also see Search game sessions by game property. Avoid using periods (".") in property keys if you plan to search for game sessions by properties. Property keys containing periods cannot be searched and will be filtered out from search results due to search index limitations. If you use SearchGameSessions API, there is a limit of 500 game property keys across all game sessions and all fleets per region. If the limit is exceeded, there will potentially be game session entries missing from SearchGameSessions API results. maximumSessions -- Maximum number of player sessions allowed for a game session. creationTimeMillis -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds. playerSessionCount -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out. hasAvailablePlayerSessions -- Boolean value indicating whether a game session has reached its maximum number of players. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join. Returned values for playerSessionCount and hasAvailablePlayerSessions change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join. All APIs by task</td>
</tr>
<tr>
    <td><a href="#start_game_session_placement"><CopyableCode code="start_game_session_placement" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PlacementId"><code>PlacementId</code></a>, <a href="#parameter-GameSessionQueueName"><code>GameSessionQueueName</code></a>, <a href="#parameter-MaximumPlayerSessionCount"><code>MaximumPlayerSessionCount</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Makes a request to start a new game session using a game session queue. When processing a placement request, Amazon GameLift Servers looks for the best possible available resource to host the game session, based on how the queue is configured to prioritize factors such as resource cost, latency, and location. After selecting an available resource, Amazon GameLift Servers prompts the resource to start a game session. A placement request can include a list of players to create a set of player sessions. The request can also include information to pass to the new game session, such as to specify a game map or other options. Request options Use this operation to make the following types of requests. Request a placement using the queue's default prioritization process (see the default prioritization described in PriorityConfiguration). Include these required parameters: GameSessionQueueName MaximumPlayerSessionCount PlacementID Request a placement and prioritize based on latency. Include these parameters: Required parameters GameSessionQueueName, MaximumPlayerSessionCount, PlacementID. PlayerLatencies. Include a set of latency values for destinations in the queue. When a request includes latency data, Amazon GameLift Servers automatically reorder the queue's locations priority list based on lowest available latency values. If a request includes latency data for multiple players, Amazon GameLift Servers calculates each location's average latency for all players and reorders to find the lowest latency across all players. Don't include PriorityConfigurationOverride. Prioritize based on a custom list of locations. If you're using a queue that's configured to prioritize location first (see PriorityConfiguration for game session queues), you can optionally use the PriorityConfigurationOverride parameter to substitute a different location priority list for this placement request. Amazon GameLift Servers searches each location on the priority override list to find an available hosting resource for the new game session. Specify a fallback strategy to use in the event that Amazon GameLift Servers fails to place the game session in any of the locations on the override list. Request a placement and prioritized based on a custom list of locations. You can request new player sessions for a group of players. Include the DesiredPlayerSessions parameter and include at minimum a unique player ID for each. You can also include player-specific data to pass to the new game session. Result If successful, this operation generates a new game session placement request and adds it to the game session queue for processing. You can track the status of individual placement requests by calling DescribeGameSessionPlacement or by monitoring queue notifications. When the request status is FULFILLED, a new game session has started and the placement request is updated with connection information for the game session (IP address and port). If the request included player session data, Amazon GameLift Servers creates a player session for each player ID in the request. The request results in a InvalidRequestException in the following situations: If the request includes both PlayerLatencies and PriorityConfigurationOverride parameters. If the request includes the PriorityConfigurationOverride parameter and specifies a queue that doesn't prioritize locations. Amazon GameLift Servers continues to retry each placement request until it reaches the queue's timeout setting. If a request times out, you can resubmit the request to the same queue or try a different queue.</td>
</tr>
<tr>
    <td><a href="#stop_game_session_placement"><CopyableCode code="stop_game_session_placement" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PlacementId"><code>PlacementId</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Cancels a game session placement that's in PENDING status. To stop a placement, provide the placement ID value. Results If successful, this operation removes the placement request from the queue and moves the GameSessionPlacement to CANCELLED status. This operation results in an InvalidRequestExecption (400) error if a game session has already been created for this placement. You can clean up an unneeded game session by calling TerminateGameSession.</td>
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
    defaultValue="describe_game_sessions"
    values={[
        { label: 'describe_game_sessions', value: 'describe_game_sessions' }
    ]}
>
<TabItem value="describe_game_sessions">

This API works with the following fleet types: EC2, Anywhere, Container Retrieves a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status. This operation can be used in the following ways: To retrieve all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns all game sessions in the fleet's home Region and all remote locations. To retrieve all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location. To retrieve a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSession object is returned for each game session that matches the request. This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with DescribeGameSessions should only be used for games in development with low game session usage. Available in Amazon GameLift Servers Local. Learn more Find a game session All APIs by task

```sql
SELECT
compute_name,
creation_time,
creator_id,
current_player_session_count,
dns_name,
fleet_arn,
fleet_id,
game_properties,
game_session_data,
game_session_id,
ip_address,
location,
matchmaker_data,
maximum_player_session_count,
name,
player_gateway_status,
player_session_creation_policy,
port,
status,
status_reason,
termination_time
FROM aws.gamelift.game_sessions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_game_session"
    values={[
        { label: 'create_game_session', value: 'create_game_session' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_game_session">

This API works with the following fleet types: EC2, Anywhere, Container Creates a multiplayer game session for players in a specific fleet location. This operation prompts an available server process to start a game session and retrieves connection information for the new game session. As an alternative, consider using the Amazon GameLift Servers game session placement feature with StartGameSessionPlacement, which uses the FleetIQ algorithm and queues to optimize the placement process. When creating a game session, you specify exactly where you want to place it and provide a set of game session configuration settings. The target fleet must be in ACTIVE status. You can use this operation in the following ways: To create a game session on an instance in a fleet's home Region, provide a fleet or alias ID along with your game session configuration. To create a game session on an instance in a fleet's remote location, provide a fleet or alias ID and a location name, along with your game session configuration. To create a game session on an instance in an Anywhere fleet, specify the fleet's custom location. If successful, Amazon GameLift Servers initiates a workflow to start a new game session and returns a GameSession object containing the game session configuration and status. When the game session status is ACTIVE, it is updated with connection information and you can create player sessions for the game session. By default, newly created game sessions are open to new players. You can restrict new player access by using UpdateGameSession to change the game session's player session creation policy. Amazon GameLift Servers retains logs for active for 14 days. To access the logs, call GetGameSessionLogUrl to download the log files. Available in Amazon GameLift Servers Local. Learn more Start a game session All APIs by task

```sql
INSERT INTO aws.gamelift.game_sessions (
FleetId,
AliasId,
MaximumPlayerSessionCount,
Name,
GameProperties,
CreatorId,
GameSessionId,
IdempotencyToken,
GameSessionData,
Location,
region
)
SELECT 
'{{ FleetId }}',
'{{ AliasId }}',
{{ MaximumPlayerSessionCount }} /* required */,
'{{ Name }}',
'{{ GameProperties }}',
'{{ CreatorId }}',
'{{ GameSessionId }}',
'{{ IdempotencyToken }}',
'{{ GameSessionData }}',
'{{ Location }}',
'{{ region }}'
RETURNING
game_session
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: game_sessions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the game_sessions resource.
    - name: FleetId
      value: "{{ FleetId }}"
      description: |
        A unique identifier for the fleet to create a game session in. You can use either the fleet ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both.
    - name: AliasId
      value: "{{ AliasId }}"
      description: |
        A unique identifier for the alias associated with the fleet to create a game session in. You can use either the alias ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both.
    - name: MaximumPlayerSessionCount
      value: {{ MaximumPlayerSessionCount }}
      description: |
        The maximum number of players that can be connected simultaneously to the game session.
    - name: Name
      value: "{{ Name }}"
      description: |
        A descriptive label that is associated with a game session. Session names do not need to be unique.
    - name: GameProperties
      description: |
        A set of key-value pairs that can store custom data in a game session. For example: {"Key": "difficulty", "Value": "novice"}. For an example, see Create a game session with custom properties. Avoid using periods (".") in property keys if you plan to search for game sessions by properties. Property keys containing periods cannot be searched and will be filtered out from search results due to search index limitations. If you use SearchGameSessions API, there is a limit of 500 game property keys across all game sessions and all fleets per region. If the limit is exceeded, there will potentially be game session entries missing from SearchGameSessions API results.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: CreatorId
      value: "{{ CreatorId }}"
      description: |
        A unique identifier for a player or entity creating the game session. If you add a resource creation limit policy to a fleet, the CreateGameSession operation requires a CreatorId. Amazon GameLift Servers limits the number of game session creation requests with the same CreatorId in a specified time period. If you your fleet doesn't have a resource creation limit policy and you provide a CreatorId in your CreateGameSession requests, Amazon GameLift Servers limits requests to one request per CreatorId per second. To not limit CreateGameSession requests with the same CreatorId, don't provide a CreatorId in your CreateGameSession request.
    - name: GameSessionId
      value: "{{ GameSessionId }}"
      description: |
        This parameter is deprecated. Use IdempotencyToken instead. Custom string that uniquely identifies a request for a new game session. Maximum token length is 48 characters. If provided, this string is included in the new game session's ID.
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        Custom string that uniquely identifies the new game session request. This is useful for ensuring that game session requests with the same idempotency token are processed only once. Subsequent requests with the same string return the original GameSession object, with an updated status. Maximum token length is 48 characters. If provided, this string is included in the new game session's ID. The value is always a full ARN in the following format: arn:aws:gamelift:\`<location>\`::gamesession/<fleet ID>/<ID string>. Idempotency tokens remain in use for 30 days after a game session has ended; game session objects are retained for this time period and then deleted.
    - name: GameSessionData
      value: "{{ GameSessionData }}"
      description: |
        A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see Start a game session.
    - name: Location
      value: "{{ Location }}"
      description: |
        A fleet's remote location to place the new game session in. If this parameter is not set, the new game session is placed in the fleet's home Region. Specify a remote location with an Amazon Web Services Region code such as us-west-2. When using an Anywhere fleet, this parameter is required and must be set to the Anywhere fleet's custom location.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_game_session"
    values={[
        { label: 'update_game_session', value: 'update_game_session' }
    ]}
>
<TabItem value="update_game_session">

This API works with the following fleet types: EC2, Anywhere, Container Updates the mutable properties of a game session. To update a game session, specify the game session ID and the values you want to change. If successful, the updated GameSession object is returned. All APIs by task

```sql
UPDATE aws.gamelift.game_sessions
SET 
GameSessionId = '{{ GameSessionId }}',
MaximumPlayerSessionCount = {{ MaximumPlayerSessionCount }},
Name = '{{ Name }}',
PlayerSessionCreationPolicy = '{{ PlayerSessionCreationPolicy }}',
ProtectionPolicy = '{{ ProtectionPolicy }}',
GameProperties = '{{ GameProperties }}'
WHERE 
region = '{{ region }}' --required
AND GameSessionId = '{{ GameSessionId }}' --required
RETURNING
game_session;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate_game_session"
    values={[
        { label: 'terminate_game_session', value: 'terminate_game_session' }
    ]}
>
<TabItem value="terminate_game_session">

This API works with the following fleet types: EC2, Anywhere, Container Ends a game session that's currently in progress. Use this action to terminate any game session that isn't in ERROR status. Terminating a game session is the most efficient way to free up a server process when it's hosting a game session that's in a bad state or not ending properly. You can use this action to terminate a game session that's being hosted on any type of Amazon GameLift Servers fleet compute, including computes for managed EC2, managed container, and Anywhere fleets. The game server must be integrated with Amazon GameLift Servers server SDK 5.x or greater. Request options Request termination for a single game session. Provide the game session ID and the termination mode. There are two potential methods for terminating a game session: Initiate a graceful termination using the normal game session shutdown sequence. With this mode, the Amazon GameLift Servers service prompts the server process that's hosting the game session by calling the server SDK callback method OnProcessTerminate(). The callback implementation is part of the custom game server code. It might involve a variety of actions to gracefully end a game session, such as notifying players, before stopping the server process. Force an immediate game session termination. With this mode, the Amazon GameLift Servers service takes action to stop the server process, which ends the game session without the normal game session shutdown sequence. Results If successful, game session termination is initiated. During this activity, the game session status is changed to TERMINATING. When completed, the server process that was hosting the game session has been stopped and replaced with a new server process that's ready to host a new game session. The old game session's status is changed to TERMINATED with a status reason that indicates the termination method used. Learn more Add Amazon GameLift Servers to your game server Amazon GameLift Servers server SDK 5 reference guide for OnProcessTerminate() (C++) (C#) (Unreal) (Go)

```sql
DELETE FROM aws.gamelift.game_sessions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="search_game_sessions"
    values={[
        { label: 'search_game_sessions', value: 'search_game_sessions' },
        { label: 'start_game_session_placement', value: 'start_game_session_placement' },
        { label: 'stop_game_session_placement', value: 'stop_game_session_placement' }
    ]}
>
<TabItem value="search_game_sessions">

This API works with the following fleet types: EC2, Anywhere, Container Retrieves all active game sessions that match a set of search criteria and sorts them into a specified order. This operation is not designed to continually track game session status because that practice can cause you to exceed your API limit and generate errors. Instead, configure an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications from a matchmaker or a game session placement queue. When searching for game sessions, you specify exactly where you want to search and provide a search filter expression, a sort expression, or both. A search request can search only one fleet, but it can search all of a fleet's locations. This operation can be used in the following ways: To search all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID. This approach returns game sessions in the fleet's home Region and all remote locations that fit the search criteria. To search all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name. For location, you can specify a fleet's home Region or any remote location. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSession object is returned for each game session that matches the request. Search finds game sessions that are in ACTIVE status only. To retrieve information on game sessions in other statuses, use DescribeGameSessions. To set search and sort criteria, create a filter expression using the following game session attributes. For game session search examples, see the Examples section of this topic. gameSessionId -- An identifier for the game session that is unique across all regions. You must use the full ARN value. gameSessionName -- Name assigned to a game session. Game session names do not need to be unique to a game session. gameSessionProperties -- A set of key-value pairs that can store custom data in a game session. For example: &#123;"Key": "difficulty", "Value": "novice"&#125;. The filter expression must specify the https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameProperty -- a Key and a string Value to search for the game sessions. For example, to search for the above key-value pair, specify the following search filter: gameSessionProperties.difficulty = "novice". All game property values are searched as strings. For examples of searching game sessions, see the ones below, and also see Search game sessions by game property. Avoid using periods (".") in property keys if you plan to search for game sessions by properties. Property keys containing periods cannot be searched and will be filtered out from search results due to search index limitations. If you use SearchGameSessions API, there is a limit of 500 game property keys across all game sessions and all fleets per region. If the limit is exceeded, there will potentially be game session entries missing from SearchGameSessions API results. maximumSessions -- Maximum number of player sessions allowed for a game session. creationTimeMillis -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds. playerSessionCount -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out. hasAvailablePlayerSessions -- Boolean value indicating whether a game session has reached its maximum number of players. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join. Returned values for playerSessionCount and hasAvailablePlayerSessions change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join. All APIs by task

```sql
EXEC aws.gamelift.game_sessions.search_game_sessions 
@region='{{ region }}' --required 
@@json=
'{
"FleetId": "{{ FleetId }}", 
"AliasId": "{{ AliasId }}", 
"Location": "{{ Location }}", 
"FilterExpression": "{{ FilterExpression }}", 
"SortExpression": "{{ SortExpression }}", 
"Limit": {{ Limit }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
<TabItem value="start_game_session_placement">

This API works with the following fleet types: EC2, Anywhere, Container Makes a request to start a new game session using a game session queue. When processing a placement request, Amazon GameLift Servers looks for the best possible available resource to host the game session, based on how the queue is configured to prioritize factors such as resource cost, latency, and location. After selecting an available resource, Amazon GameLift Servers prompts the resource to start a game session. A placement request can include a list of players to create a set of player sessions. The request can also include information to pass to the new game session, such as to specify a game map or other options. Request options Use this operation to make the following types of requests. Request a placement using the queue's default prioritization process (see the default prioritization described in PriorityConfiguration). Include these required parameters: GameSessionQueueName MaximumPlayerSessionCount PlacementID Request a placement and prioritize based on latency. Include these parameters: Required parameters GameSessionQueueName, MaximumPlayerSessionCount, PlacementID. PlayerLatencies. Include a set of latency values for destinations in the queue. When a request includes latency data, Amazon GameLift Servers automatically reorder the queue's locations priority list based on lowest available latency values. If a request includes latency data for multiple players, Amazon GameLift Servers calculates each location's average latency for all players and reorders to find the lowest latency across all players. Don't include PriorityConfigurationOverride. Prioritize based on a custom list of locations. If you're using a queue that's configured to prioritize location first (see PriorityConfiguration for game session queues), you can optionally use the PriorityConfigurationOverride parameter to substitute a different location priority list for this placement request. Amazon GameLift Servers searches each location on the priority override list to find an available hosting resource for the new game session. Specify a fallback strategy to use in the event that Amazon GameLift Servers fails to place the game session in any of the locations on the override list. Request a placement and prioritized based on a custom list of locations. You can request new player sessions for a group of players. Include the DesiredPlayerSessions parameter and include at minimum a unique player ID for each. You can also include player-specific data to pass to the new game session. Result If successful, this operation generates a new game session placement request and adds it to the game session queue for processing. You can track the status of individual placement requests by calling DescribeGameSessionPlacement or by monitoring queue notifications. When the request status is FULFILLED, a new game session has started and the placement request is updated with connection information for the game session (IP address and port). If the request included player session data, Amazon GameLift Servers creates a player session for each player ID in the request. The request results in a InvalidRequestException in the following situations: If the request includes both PlayerLatencies and PriorityConfigurationOverride parameters. If the request includes the PriorityConfigurationOverride parameter and specifies a queue that doesn't prioritize locations. Amazon GameLift Servers continues to retry each placement request until it reaches the queue's timeout setting. If a request times out, you can resubmit the request to the same queue or try a different queue.

```sql
EXEC aws.gamelift.game_sessions.start_game_session_placement 
@region='{{ region }}' --required 
@@json=
'{
"PlacementId": "{{ PlacementId }}", 
"GameSessionQueueName": "{{ GameSessionQueueName }}", 
"GameProperties": "{{ GameProperties }}", 
"MaximumPlayerSessionCount": {{ MaximumPlayerSessionCount }}, 
"GameSessionName": "{{ GameSessionName }}", 
"PlayerLatencies": "{{ PlayerLatencies }}", 
"DesiredPlayerSessions": "{{ DesiredPlayerSessions }}", 
"GameSessionData": "{{ GameSessionData }}", 
"PriorityConfigurationOverride": "{{ PriorityConfigurationOverride }}"
}'
;
```
</TabItem>
<TabItem value="stop_game_session_placement">

This API works with the following fleet types: EC2, Anywhere, Container Cancels a game session placement that's in PENDING status. To stop a placement, provide the placement ID value. Results If successful, this operation removes the placement request from the queue and moves the GameSessionPlacement to CANCELLED status. This operation results in an InvalidRequestExecption (400) error if a game session has already been created for this placement. You can clean up an unneeded game session by calling TerminateGameSession.

```sql
EXEC aws.gamelift.game_sessions.stop_game_session_placement 
@region='{{ region }}' --required 
@@json=
'{
"PlacementId": "{{ PlacementId }}"
}'
;
```
</TabItem>
</Tabs>
