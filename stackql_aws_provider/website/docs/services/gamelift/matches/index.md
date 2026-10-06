--- 
title: matches
hide_title: false
hide_table_of_contents: false
keywords:
  - matches
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

Creates, updates, deletes, gets or lists a <code>matches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="matches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.matches" /></td></tr>
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
    <td><a href="#accept_match"><CopyableCode code="accept_match" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TicketId"><code>TicketId</code></a>, <a href="#parameter-PlayerIds"><code>PlayerIds</code></a>, <a href="#parameter-AcceptanceType"><code>AcceptanceType</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Registers a player's acceptance or rejection of a proposed FlexMatch match. A matchmaking configuration may require player acceptance; if so, then matches built with that configuration cannot be completed unless all players accept the proposed match within a specified time limit. When FlexMatch builds a match, all the matchmaking tickets involved in the proposed match are placed into status REQUIRES_ACCEPTANCE. This is a trigger for your game to get acceptance from all players in each ticket. Calls to this action are only valid for tickets that are in this status; calls for tickets not in this status result in an error. To register acceptance, specify the ticket ID, one or more players, and an acceptance response. When all players have accepted, Amazon GameLift Servers advances the matchmaking tickets to status PLACING, and attempts to create a new game session for the match. If any player rejects the match, or if acceptances are not received before a specified timeout, the proposed match is dropped. Each matchmaking ticket in the failed match is handled as follows: If the ticket has one or more players who rejected the match or failed to respond, the ticket status is set CANCELLED and processing is terminated. If all players in the ticket accepted the match, the ticket status is returned to SEARCHING to find a new match. Learn more Add FlexMatch to a game client FlexMatch events (reference)</td>
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
    defaultValue="accept_match"
    values={[
        { label: 'accept_match', value: 'accept_match' }
    ]}
>
<TabItem value="accept_match">

This API works with the following fleet types: EC2, Anywhere, Container Registers a player's acceptance or rejection of a proposed FlexMatch match. A matchmaking configuration may require player acceptance; if so, then matches built with that configuration cannot be completed unless all players accept the proposed match within a specified time limit. When FlexMatch builds a match, all the matchmaking tickets involved in the proposed match are placed into status REQUIRES_ACCEPTANCE. This is a trigger for your game to get acceptance from all players in each ticket. Calls to this action are only valid for tickets that are in this status; calls for tickets not in this status result in an error. To register acceptance, specify the ticket ID, one or more players, and an acceptance response. When all players have accepted, Amazon GameLift Servers advances the matchmaking tickets to status PLACING, and attempts to create a new game session for the match. If any player rejects the match, or if acceptances are not received before a specified timeout, the proposed match is dropped. Each matchmaking ticket in the failed match is handled as follows: If the ticket has one or more players who rejected the match or failed to respond, the ticket status is set CANCELLED and processing is terminated. If all players in the ticket accepted the match, the ticket status is returned to SEARCHING to find a new match. Learn more Add FlexMatch to a game client FlexMatch events (reference)

```sql
EXEC aws.gamelift.matches.accept_match 
@region='{{ region }}' --required 
@@json=
'{
"TicketId": "{{ TicketId }}", 
"PlayerIds": "{{ PlayerIds }}", 
"AcceptanceType": "{{ AcceptanceType }}"
}'
;
```
</TabItem>
</Tabs>
