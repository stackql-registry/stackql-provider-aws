--- 
title: game_server_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - game_server_instances
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

Creates, updates, deletes, gets or lists a <code>game_server_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="game_server_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.game_server_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_game_server_instances"
    values={[
        { label: 'describe_game_server_instances', value: 'describe_game_server_instances' }
    ]}
>
<TabItem value="describe_game_server_instances">

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
    <td><CopyableCode code="game_server_group_arn" /></td>
    <td><code>string</code></td>
    <td>A generated unique identifier for the game server group that includes the game server instance. (pattern: &lt;code&gt;^arn:.*:gameservergroup\/&#91;a-zA-Z0-9-\.&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="game_server_group_name" /></td>
    <td><code>string</code></td>
    <td>A developer-defined identifier for the game server group that includes the game server instance. The name is unique for each Region in each Amazon Web Services account. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the instance where the game server is running. This ID is available in the instance metadata. EC2 instance IDs use a 17-character format, for example: i-1234567890abcdef0. (pattern: &lt;code&gt;^i-&#91;0-9a-zA-Z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_status" /></td>
    <td><code>string</code></td>
    <td>Current status of the game server instance (ACTIVE, DRAINING, SPOT_TERMINATING)</td>
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
    <td><a href="#describe_game_server_instances"><CopyableCode code="describe_game_server_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 (FleetIQ) Retrieves status information about the Amazon EC2 instances associated with a Amazon GameLift Servers FleetIQ game server group. Use this operation to detect when instances are active or not available to host new game servers. To request status for all instances in the game server group, provide a game server group ID only. To request status for specific instances, provide the game server group ID and one or more instance IDs. Use the pagination parameters to retrieve results in sequential segments. If successful, a collection of GameServerInstance objects is returned. This operation is not designed to be called with every game server claim request; this practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, cache the results and refresh your cache no more than once every 10 seconds. Learn more Amazon GameLift Servers FleetIQ Guide</td>
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
    defaultValue="describe_game_server_instances"
    values={[
        { label: 'describe_game_server_instances', value: 'describe_game_server_instances' }
    ]}
>
<TabItem value="describe_game_server_instances">

This API works with the following fleet types: EC2 (FleetIQ) Retrieves status information about the Amazon EC2 instances associated with a Amazon GameLift Servers FleetIQ game server group. Use this operation to detect when instances are active or not available to host new game servers. To request status for all instances in the game server group, provide a game server group ID only. To request status for specific instances, provide the game server group ID and one or more instance IDs. Use the pagination parameters to retrieve results in sequential segments. If successful, a collection of GameServerInstance objects is returned. This operation is not designed to be called with every game server claim request; this practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, cache the results and refresh your cache no more than once every 10 seconds. Learn more Amazon GameLift Servers FleetIQ Guide

```sql
SELECT
game_server_group_arn,
game_server_group_name,
instance_id,
instance_status
FROM aws.gamelift.game_server_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
