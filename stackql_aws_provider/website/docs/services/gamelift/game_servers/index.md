--- 
title: game_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - game_servers
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

Creates, updates, deletes, gets or lists a <code>game_servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="game_servers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.game_servers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_game_server"
    values={[
        { label: 'describe_game_server', value: 'describe_game_server' },
        { label: 'list_game_servers', value: 'list_game_servers' }
    ]}
>
<TabItem value="describe_game_server">

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
    <td><CopyableCode code="ClaimStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates when an available game server has been reserved for gameplay but has not yet started hosting a game. Once it is claimed, the game server remains in CLAIMED status for a maximum of one minute. During this time, game clients connect to the game server to start the game and trigger the game server to update its utilization status. After one minute, the game server claim status reverts to null. (CLAIMED)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionInfo" /></td>
    <td><code>string</code></td>
    <td>The port and IP address that must be used to establish a client connection to the game server. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GameServerData" /></td>
    <td><code>string</code></td>
    <td>A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GameServerGroupArn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier for the game server group where the game server is located. (pattern: &lt;code&gt;^arn:.*:gameservergroup\/&#91;a-zA-Z0-9-\.&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GameServerGroupName" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the game server group where the game server is running. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GameServerId" /></td>
    <td><code>string</code></td>
    <td>A custom string that uniquely identifies the game server. Game server IDs are developer-defined and are unique across all game server groups in an Amazon Web Services account. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the instance where the game server is running. This ID is available in the instance metadata. EC2 instance IDs use a 17-character format, for example: i-1234567890abcdef0. (pattern: &lt;code&gt;^i-&#91;0-9a-zA-Z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastClaimTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp that indicates the last time the game server was claimed. The format is a number expressed in Unix time as milliseconds (for example "1469498468.057"). This value is used to calculate when a claimed game server's status should revert to null.</td>
</tr>
<tr>
    <td><CopyableCode code="LastHealthCheckTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp that indicates the last time the game server was updated with health status. The format is a number expressed in Unix time as milliseconds (for example "1469498468.057"). After game server registration, this property is only changed when a game server update specifies a health check value.</td>
</tr>
<tr>
    <td><CopyableCode code="RegistrationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp that indicates when the game server registered. The format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="UtilizationStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the game server is currently available for new games or is busy. Possible statuses include: AVAILABLE - The game server is available to be claimed. A game server that has been claimed remains in this status until it reports game hosting activity. UTILIZED - The game server is currently hosting a game session with players. (AVAILABLE, UTILIZED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_game_servers">

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
    <td><CopyableCode code="ClaimStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates when an available game server has been reserved for gameplay but has not yet started hosting a game. Once it is claimed, the game server remains in CLAIMED status for a maximum of one minute. During this time, game clients connect to the game server to start the game and trigger the game server to update its utilization status. After one minute, the game server claim status reverts to null. (CLAIMED)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionInfo" /></td>
    <td><code>string</code></td>
    <td>The port and IP address that must be used to establish a client connection to the game server. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GameServerData" /></td>
    <td><code>string</code></td>
    <td>A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GameServerGroupArn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier for the game server group where the game server is located. (pattern: &lt;code&gt;^arn:.*:gameservergroup\/&#91;a-zA-Z0-9-\.&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GameServerGroupName" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the game server group where the game server is running. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GameServerId" /></td>
    <td><code>string</code></td>
    <td>A custom string that uniquely identifies the game server. Game server IDs are developer-defined and are unique across all game server groups in an Amazon Web Services account. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the instance where the game server is running. This ID is available in the instance metadata. EC2 instance IDs use a 17-character format, for example: i-1234567890abcdef0. (pattern: &lt;code&gt;^i-&#91;0-9a-zA-Z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastClaimTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp that indicates the last time the game server was claimed. The format is a number expressed in Unix time as milliseconds (for example "1469498468.057"). This value is used to calculate when a claimed game server's status should revert to null.</td>
</tr>
<tr>
    <td><CopyableCode code="LastHealthCheckTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp that indicates the last time the game server was updated with health status. The format is a number expressed in Unix time as milliseconds (for example "1469498468.057"). After game server registration, this property is only changed when a game server update specifies a health check value.</td>
</tr>
<tr>
    <td><CopyableCode code="RegistrationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp that indicates when the game server registered. The format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="UtilizationStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the game server is currently available for new games or is busy. Possible statuses include: AVAILABLE - The game server is available to be claimed. A game server that has been claimed remains in this status until it reports game hosting activity. UTILIZED - The game server is currently hosting a game session with players. (AVAILABLE, UTILIZED)</td>
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
    <td><a href="#describe_game_server"><CopyableCode code="describe_game_server" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 (FleetIQ) Retrieves information for a registered game server. Information includes game server status, health check info, and the instance that the game server is running on. To retrieve game server information, specify the game server ID. If successful, the requested game server object is returned. Learn more Amazon GameLift Servers FleetIQ Guide</td>
</tr>
<tr>
    <td><a href="#list_game_servers"><CopyableCode code="list_game_servers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 (FleetIQ) Retrieves information on all game servers that are currently active in a specified game server group. You can opt to sort the list by game server age. Use the pagination parameters to retrieve results in a set of sequential segments. Learn more Amazon GameLift Servers FleetIQ Guide</td>
</tr>
<tr>
    <td><a href="#register_game_server"><CopyableCode code="register_game_server" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GameServerGroupName"><code>GameServerGroupName</code></a>, <a href="#parameter-GameServerId"><code>GameServerId</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 (FleetIQ) Creates a new game server resource and notifies Amazon GameLift Servers FleetIQ that the game server is ready to host gameplay and players. This operation is called by a game server process that is running on an instance in a game server group. Registering game servers enables Amazon GameLift Servers FleetIQ to track available game servers and enables game clients and services to claim a game server for a new game session. To register a game server, identify the game server group and instance where the game server is running, and provide a unique identifier for the game server. You can also include connection and game server data. Once a game server is successfully registered, it is put in status AVAILABLE. A request to register a game server may fail if the instance it is running on is in the process of shutting down as part of instance balancing or scale-down activity. Learn more Amazon GameLift Servers FleetIQ Guide</td>
</tr>
<tr>
    <td><a href="#update_game_server"><CopyableCode code="update_game_server" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GameServerGroupName"><code>GameServerGroupName</code></a>, <a href="#parameter-GameServerId"><code>GameServerId</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 (FleetIQ) Updates information about a registered game server to help Amazon GameLift Servers FleetIQ track game server availability. This operation is called by a game server process that is running on an instance in a game server group. Use this operation to update the following types of game server information. You can make all three types of updates in the same request: To update the game server's utilization status from AVAILABLE (when the game server is available to be claimed) to UTILIZED (when the game server is currently hosting games). Identify the game server and game server group and specify the new utilization status. You can't change the status from to UTILIZED to AVAILABLE . To report health status, identify the game server and game server group and set health check to HEALTHY. If a game server does not report health status for a certain length of time, the game server is no longer considered healthy. As a result, it will be eventually deregistered from the game server group to avoid affecting utilization metrics. The best practice is to report health every 60 seconds. To change game server metadata, provide updated game server data. Once a game server is successfully updated, the relevant statuses and timestamps are updated. Learn more Amazon GameLift Servers FleetIQ Guide</td>
</tr>
<tr>
    <td><a href="#deregister_game_server"><CopyableCode code="deregister_game_server" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 (FleetIQ) Removes the game server from a game server group. As a result of this operation, the deregistered game server can no longer be claimed and will not be returned in a list of active game servers. To deregister a game server, specify the game server group and game server ID. If successful, this operation emits a CloudWatch event with termination timestamp and reason. Learn more Amazon GameLift Servers FleetIQ Guide</td>
</tr>
<tr>
    <td><a href="#resume_game_server_group"><CopyableCode code="resume_game_server_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GameServerGroupName"><code>GameServerGroupName</code></a>, <a href="#parameter-ResumeActions"><code>ResumeActions</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 (FleetIQ) Reinstates activity on a game server group after it has been suspended. A game server group might be suspended by the SuspendGameServerGroup operation, or it might be suspended involuntarily due to a configuration problem. In the second case, you can manually resume activity on the group once the configuration problem has been resolved. Refer to the game server group status and status reason for more information on why group activity is suspended. To resume activity, specify a game server group ARN and the type of activity to be resumed. If successful, a GameServerGroup object is returned showing that the resumed activity is no longer listed in SuspendedActions. Learn more Amazon GameLift Servers FleetIQ Guide</td>
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
    defaultValue="describe_game_server"
    values={[
        { label: 'describe_game_server', value: 'describe_game_server' },
        { label: 'list_game_servers', value: 'list_game_servers' }
    ]}
>
<TabItem value="describe_game_server">

This API works with the following fleet types: EC2 (FleetIQ) Retrieves information for a registered game server. Information includes game server status, health check info, and the instance that the game server is running on. To retrieve game server information, specify the game server ID. If successful, the requested game server object is returned. Learn more Amazon GameLift Servers FleetIQ Guide

```sql
SELECT
ClaimStatus,
ConnectionInfo,
GameServerData,
GameServerGroupArn,
GameServerGroupName,
GameServerId,
InstanceId,
LastClaimTime,
LastHealthCheckTime,
RegistrationTime,
UtilizationStatus
FROM aws.gamelift.game_servers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_game_servers">

This API works with the following fleet types: EC2 (FleetIQ) Retrieves information on all game servers that are currently active in a specified game server group. You can opt to sort the list by game server age. Use the pagination parameters to retrieve results in a set of sequential segments. Learn more Amazon GameLift Servers FleetIQ Guide

```sql
SELECT
ClaimStatus,
ConnectionInfo,
GameServerData,
GameServerGroupArn,
GameServerGroupName,
GameServerId,
InstanceId,
LastClaimTime,
LastHealthCheckTime,
RegistrationTime,
UtilizationStatus
FROM aws.gamelift.game_servers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_game_server"
    values={[
        { label: 'register_game_server', value: 'register_game_server' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_game_server">

This API works with the following fleet types: EC2 (FleetIQ) Creates a new game server resource and notifies Amazon GameLift Servers FleetIQ that the game server is ready to host gameplay and players. This operation is called by a game server process that is running on an instance in a game server group. Registering game servers enables Amazon GameLift Servers FleetIQ to track available game servers and enables game clients and services to claim a game server for a new game session. To register a game server, identify the game server group and instance where the game server is running, and provide a unique identifier for the game server. You can also include connection and game server data. Once a game server is successfully registered, it is put in status AVAILABLE. A request to register a game server may fail if the instance it is running on is in the process of shutting down as part of instance balancing or scale-down activity. Learn more Amazon GameLift Servers FleetIQ Guide

```sql
INSERT INTO aws.gamelift.game_servers (
GameServerGroupName,
GameServerId,
InstanceId,
ConnectionInfo,
GameServerData,
region
)
SELECT 
'{{ GameServerGroupName }}' /* required */,
'{{ GameServerId }}' /* required */,
'{{ InstanceId }}' /* required */,
'{{ ConnectionInfo }}',
'{{ GameServerData }}',
'{{ region }}'
RETURNING
GameServer
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: game_servers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the game_servers resource.
    - name: GameServerGroupName
      value: "{{ GameServerGroupName }}"
      description: |
        A unique identifier for the game server group where the game server is running.
    - name: GameServerId
      value: "{{ GameServerId }}"
      description: |
        A custom string that uniquely identifies the game server to register. Game server IDs are developer-defined and must be unique across all game server groups in your Amazon Web Services account.
    - name: InstanceId
      value: "{{ InstanceId }}"
      description: |
        The unique identifier for the instance where the game server is running. This ID is available in the instance metadata. EC2 instance IDs use a 17-character format, for example: i-1234567890abcdef0.
    - name: ConnectionInfo
      value: "{{ ConnectionInfo }}"
      description: |
        Information that is needed to make inbound client connections to the game server. This might include the IP address and port, DNS name, and other information.
    - name: GameServerData
      value: "{{ GameServerData }}"
      description: |
        A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_game_server"
    values={[
        { label: 'update_game_server', value: 'update_game_server' }
    ]}
>
<TabItem value="update_game_server">

This API works with the following fleet types: EC2 (FleetIQ) Updates information about a registered game server to help Amazon GameLift Servers FleetIQ track game server availability. This operation is called by a game server process that is running on an instance in a game server group. Use this operation to update the following types of game server information. You can make all three types of updates in the same request: To update the game server's utilization status from AVAILABLE (when the game server is available to be claimed) to UTILIZED (when the game server is currently hosting games). Identify the game server and game server group and specify the new utilization status. You can't change the status from to UTILIZED to AVAILABLE . To report health status, identify the game server and game server group and set health check to HEALTHY. If a game server does not report health status for a certain length of time, the game server is no longer considered healthy. As a result, it will be eventually deregistered from the game server group to avoid affecting utilization metrics. The best practice is to report health every 60 seconds. To change game server metadata, provide updated game server data. Once a game server is successfully updated, the relevant statuses and timestamps are updated. Learn more Amazon GameLift Servers FleetIQ Guide

```sql
UPDATE aws.gamelift.game_servers
SET 
GameServerGroupName = '{{ GameServerGroupName }}',
GameServerId = '{{ GameServerId }}',
GameServerData = '{{ GameServerData }}',
UtilizationStatus = '{{ UtilizationStatus }}',
HealthCheck = '{{ HealthCheck }}'
WHERE 
region = '{{ region }}' --required
AND GameServerGroupName = '{{ GameServerGroupName }}' --required
AND GameServerId = '{{ GameServerId }}' --required
RETURNING
GameServer;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_game_server"
    values={[
        { label: 'deregister_game_server', value: 'deregister_game_server' }
    ]}
>
<TabItem value="deregister_game_server">

This API works with the following fleet types: EC2 (FleetIQ) Removes the game server from a game server group. As a result of this operation, the deregistered game server can no longer be claimed and will not be returned in a list of active game servers. To deregister a game server, specify the game server group and game server ID. If successful, this operation emits a CloudWatch event with termination timestamp and reason. Learn more Amazon GameLift Servers FleetIQ Guide

```sql
DELETE FROM aws.gamelift.game_servers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="resume_game_server_group"
    values={[
        { label: 'resume_game_server_group', value: 'resume_game_server_group' }
    ]}
>
<TabItem value="resume_game_server_group">

This API works with the following fleet types: EC2 (FleetIQ) Reinstates activity on a game server group after it has been suspended. A game server group might be suspended by the SuspendGameServerGroup operation, or it might be suspended involuntarily due to a configuration problem. In the second case, you can manually resume activity on the group once the configuration problem has been resolved. Refer to the game server group status and status reason for more information on why group activity is suspended. To resume activity, specify a game server group ARN and the type of activity to be resumed. If successful, a GameServerGroup object is returned showing that the resumed activity is no longer listed in SuspendedActions. Learn more Amazon GameLift Servers FleetIQ Guide

```sql
EXEC aws.gamelift.game_servers.resume_game_server_group 
@region='{{ region }}' --required 
@@json=
'{
"GameServerGroupName": "{{ GameServerGroupName }}", 
"ResumeActions": "{{ ResumeActions }}"
}'
;
```
</TabItem>
</Tabs>
