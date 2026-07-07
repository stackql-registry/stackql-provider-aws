--- 
title: game_session_details
hide_title: false
hide_table_of_contents: false
keywords:
  - game_session_details
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

Creates, updates, deletes, gets or lists a <code>game_session_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="game_session_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.game_session_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_game_session_details"
    values={[
        { label: 'describe_game_session_details', value: 'describe_game_session_details' }
    ]}
>
<TabItem value="describe_game_session_details">

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
    <td><CopyableCode code="GameSession" /></td>
    <td><code>object</code></td>
    <td>Object that describes a game session.</td>
</tr>
<tr>
    <td><CopyableCode code="ProtectionPolicy" /></td>
    <td><code>string</code></td>
    <td>Current status of protection for the game session. NoProtection -- The game session can be terminated during a scale-down event. FullProtection -- If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event. (NoProtection, FullProtection)</td>
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
    <td><a href="#describe_game_session_details"><CopyableCode code="describe_game_session_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Retrieves additional game session properties, including the game session protection policy in force, a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status. This operation can be used in the following ways: To retrieve details for all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns details from the fleet's home Region and all remote locations. To retrieve details for all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location. To retrieve details for a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSessionDetail object is returned for each game session that matches the request. Learn more Find a game session All APIs by task</td>
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
    defaultValue="describe_game_session_details"
    values={[
        { label: 'describe_game_session_details', value: 'describe_game_session_details' }
    ]}
>
<TabItem value="describe_game_session_details">

This API works with the following fleet types: EC2, Anywhere, Container Retrieves additional game session properties, including the game session protection policy in force, a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status. This operation can be used in the following ways: To retrieve details for all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns details from the fleet's home Region and all remote locations. To retrieve details for all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location. To retrieve details for a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSessionDetail object is returned for each game session that matches the request. Learn more Find a game session All APIs by task

```sql
SELECT
GameSession,
ProtectionPolicy
FROM aws.gamelift.game_session_details
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
