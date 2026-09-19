--- 
title: match_backfills
hide_title: false
hide_table_of_contents: false
keywords:
  - match_backfills
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

Creates, updates, deletes, gets or lists a <code>match_backfills</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="match_backfills" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.match_backfills" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#start_match_backfill"><CopyableCode code="start_match_backfill" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationName"><code>ConfigurationName</code></a>, <a href="#parameter-Players"><code>Players</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Finds new players to fill open slots in currently running game sessions. The backfill match process is essentially identical to the process of forming new matches. Backfill requests use the same matchmaker that was used to make the original match, and they provide matchmaking data for all players currently in the game session. FlexMatch uses this information to select new players so that backfilled match continues to meet the original match requirements. When using FlexMatch with Amazon GameLift Servers managed hosting, you can request a backfill match from a client service by calling this operation with a GameSessions ID. You also have the option of making backfill requests directly from your game server. In response to a request, FlexMatch creates player sessions for the new players, updates the GameSession resource, and sends updated matchmaking data to the game server. You can request a backfill match at any point after a game session is started. Each game session can have only one active backfill request at a time; a subsequent request automatically replaces the earlier request. When using FlexMatch as a standalone component, request a backfill match by calling this operation without a game session identifier. As with newly formed matches, matchmaking results are returned in a matchmaking event so that your game can update the game session that is being backfilled. To request a backfill match, specify a unique ticket ID, the original matchmaking configuration, and matchmaking data for all current players in the game session being backfilled. Optionally, specify the GameSession ARN. If successful, a match backfill ticket is created and returned with status set to QUEUED. Track the status of backfill tickets using the same method for tracking tickets for new matches. Only game sessions created by FlexMatch are supported for match backfill. Learn more Backfill existing games with FlexMatch Matchmaking events (reference) How Amazon GameLift Servers FlexMatch works</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="start_match_backfill"
    values={[
        { label: 'start_match_backfill', value: 'start_match_backfill' }
    ]}
>
<TabItem value="start_match_backfill">

This API works with the following fleet types: EC2, Anywhere, Container Finds new players to fill open slots in currently running game sessions. The backfill match process is essentially identical to the process of forming new matches. Backfill requests use the same matchmaker that was used to make the original match, and they provide matchmaking data for all players currently in the game session. FlexMatch uses this information to select new players so that backfilled match continues to meet the original match requirements. When using FlexMatch with Amazon GameLift Servers managed hosting, you can request a backfill match from a client service by calling this operation with a GameSessions ID. You also have the option of making backfill requests directly from your game server. In response to a request, FlexMatch creates player sessions for the new players, updates the GameSession resource, and sends updated matchmaking data to the game server. You can request a backfill match at any point after a game session is started. Each game session can have only one active backfill request at a time; a subsequent request automatically replaces the earlier request. When using FlexMatch as a standalone component, request a backfill match by calling this operation without a game session identifier. As with newly formed matches, matchmaking results are returned in a matchmaking event so that your game can update the game session that is being backfilled. To request a backfill match, specify a unique ticket ID, the original matchmaking configuration, and matchmaking data for all current players in the game session being backfilled. Optionally, specify the GameSession ARN. If successful, a match backfill ticket is created and returned with status set to QUEUED. Track the status of backfill tickets using the same method for tracking tickets for new matches. Only game sessions created by FlexMatch are supported for match backfill. Learn more Backfill existing games with FlexMatch Matchmaking events (reference) How Amazon GameLift Servers FlexMatch works

```sql
EXEC aws.gamelift.match_backfills.start_match_backfill 
@region='{{ region }}' --required 
@@json=
'{
"TicketId": "{{ TicketId }}", 
"ConfigurationName": "{{ ConfigurationName }}", 
"GameSessionArn": "{{ GameSessionArn }}", 
"Players": "{{ Players }}"
}'
;
```
</TabItem>
</Tabs>
