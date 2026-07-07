--- 
title: game_session_placements
hide_title: false
hide_table_of_contents: false
keywords:
  - game_session_placements
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

Creates, updates, deletes, gets or lists a <code>game_session_placements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="game_session_placements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.game_session_placements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_game_session_placement"
    values={[
        { label: 'describe_game_session_placement', value: 'describe_game_session_placement' }
    ]}
>
<TabItem value="describe_game_session_placement">

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
    <td><CopyableCode code="DnsName" /></td>
    <td><code>string</code></td>
    <td>The DNS identifier assigned to the instance that is running the game session. Values have the following format: TLS-enabled fleets: &lt;unique identifier&gt;.&lt;region identifier&gt;.amazongamelift.com. Non-TLS-enabled fleets: ec2-&lt;unique identifier&gt;.compute.amazonaws.com. (See Amazon EC2 Instance IP Addressing.) When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time stamp indicating when this request was completed, canceled, or timed out.</td>
</tr>
<tr>
    <td><CopyableCode code="GameProperties" /></td>
    <td><code>array</code></td>
    <td>A set of key-value pairs that can store custom data in a game session. For example: &#123;"Key": "difficulty", "Value": "novice"&#125;. Avoid using periods (".") in property keys if you plan to search for game sessions by properties. Property keys containing periods cannot be searched and will be filtered out from search results due to search index limitations. If you use SearchGameSessions API, there is a limit of 500 game property keys across all game sessions and all fleets per region. If the limit is exceeded, there will potentially be game session entries missing from SearchGameSessions API results.</td>
</tr>
<tr>
    <td><CopyableCode code="GameSessionArn" /></td>
    <td><code>string</code></td>
    <td>An identifier for the game session that is unique across all regions. The value is always a full ARN in the following format: arn:aws:gamelift:`&lt;location&gt;`::gamesession/&lt;fleet ID&gt;/&lt;ID string&gt;. This value is the same as GameSessionId. This value isn't final until placement status is FULFILLED.</td>
</tr>
<tr>
    <td><CopyableCode code="GameSessionData" /></td>
    <td><code>string</code></td>
    <td>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see Start a game session.</td>
</tr>
<tr>
    <td><CopyableCode code="GameSessionId" /></td>
    <td><code>string</code></td>
    <td>An identifier for the game session that is unique across all regions. The value is always a full ARN in the following format: arn:aws:gamelift:`&lt;location&gt;`::gamesession/&lt;fleet ID&gt;/&lt;ID string&gt;. This value is the same as GameSessionArn. This value isn't final until placement status is FULFILLED.</td>
</tr>
<tr>
    <td><CopyableCode code="GameSessionName" /></td>
    <td><code>string</code></td>
    <td>A descriptive label that is associated with a game session. Session names do not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="GameSessionQueueName" /></td>
    <td><code>string</code></td>
    <td>A descriptive label that is associated with game session queue. Queue names must be unique within each Region. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GameSessionRegion" /></td>
    <td><code>string</code></td>
    <td>Name of the Region where the game session created by this placement request is running. This value isn't final until placement status is FULFILLED.</td>
</tr>
<tr>
    <td><CopyableCode code="IpAddress" /></td>
    <td><code>string</code></td>
    <td>The IP address of the game session. To connect to a Amazon GameLift Servers game server, an app needs both the IP address and port number. This value isn't final until placement status is FULFILLED. (pattern: &lt;code&gt;^&#91;0-9A-Fa-f\:\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MatchmakerData" /></td>
    <td><code>string</code></td>
    <td>Information on the matchmaking process for this game. Data is in JSON syntax, formatted as a string. It identifies the matchmaking configuration used to create the match, and contains data on all players assigned to the match, including player attributes and team assignments. For more details on matchmaker data, see Match Data.</td>
</tr>
<tr>
    <td><CopyableCode code="MaximumPlayerSessionCount" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of players that can be connected simultaneously to the game session.</td>
</tr>
<tr>
    <td><CopyableCode code="PlacedPlayerSessions" /></td>
    <td><code>array</code></td>
    <td>A collection of information on player sessions created in response to the game session placement request. These player sessions are created only after a new game session is successfully placed (placement status is FULFILLED). This information includes the player ID, provided in the placement request, and a corresponding player session ID.</td>
</tr>
<tr>
    <td><CopyableCode code="PlacementId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a game session placement. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PlayerGatewayStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of player gateway for the game session placement. Note, even if a fleet has PlayerGatewayMode configured as ENABLED, player gateway might not be available in a specific location. For more information about locations where player gateway is supported, see Amazon GameLift Servers service locations. Possible values include: ENABLED -- Player gateway is available for this game session placement. DISABLED -- Player gateway is not available for this game session placement. (DISABLED, ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="PlayerLatencies" /></td>
    <td><code>array</code></td>
    <td>A set of values, expressed in milliseconds, that indicates the amount of latency that a player experiences when connected to Amazon Web Services Regions.</td>
</tr>
<tr>
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port number for the game session. To connect to a Amazon GameLift Servers game server, an app needs both the IP address and port number. This value isn't final until placement status is FULFILLED.</td>
</tr>
<tr>
    <td><CopyableCode code="PriorityConfigurationOverride" /></td>
    <td><code>object</code></td>
    <td>An alternative priority list of locations that's included with a game session placement request. When provided, the list overrides a queue's location order list for this game session placement request only. The list might include Amazon Web Services Regions, local zones, and custom locations (for Anywhere fleets). The fallback strategy tells Amazon GameLift Servers what action to take (if any) in the event that it failed to place a new game session.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time stamp indicating when this request was placed in the queue. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Current status of the game session placement request. PENDING -- The placement request is in the queue waiting to be processed. Game session properties are not yet final. FULFILLED -- A new game session has been successfully placed. Game session properties are now final. CANCELLED -- The placement request was canceled. TIMED_OUT -- A new game session was not successfully created before the time limit expired. You can resubmit the placement request as needed. FAILED -- Amazon GameLift Servers is not able to complete the process of placing the game session. Common reasons are the game session terminated before the placement process was completed, or an unexpected internal error. (PENDING, FULFILLED, CANCELLED, TIMED_OUT, FAILED)</td>
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
    <td><a href="#describe_game_session_placement"><CopyableCode code="describe_game_session_placement" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Retrieves information, including current status, about a game session placement request. To get game session placement details, specify the placement ID. This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with DescribeGameSessionPlacement should only be used for games in development with low game session usage. For a reference implementation of event-based game session placement tracking, see Event-based game session placement guidance in the Amazon GameLift Toolkit.</td>
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
    defaultValue="describe_game_session_placement"
    values={[
        { label: 'describe_game_session_placement', value: 'describe_game_session_placement' }
    ]}
>
<TabItem value="describe_game_session_placement">

This API works with the following fleet types: EC2, Anywhere, Container Retrieves information, including current status, about a game session placement request. To get game session placement details, specify the placement ID. This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with DescribeGameSessionPlacement should only be used for games in development with low game session usage. For a reference implementation of event-based game session placement tracking, see Event-based game session placement guidance in the Amazon GameLift Toolkit.

```sql
SELECT
DnsName,
EndTime,
GameProperties,
GameSessionArn,
GameSessionData,
GameSessionId,
GameSessionName,
GameSessionQueueName,
GameSessionRegion,
IpAddress,
MatchmakerData,
MaximumPlayerSessionCount,
PlacedPlayerSessions,
PlacementId,
PlayerGatewayStatus,
PlayerLatencies,
Port,
PriorityConfigurationOverride,
StartTime,
Status
FROM aws.gamelift.game_session_placements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
