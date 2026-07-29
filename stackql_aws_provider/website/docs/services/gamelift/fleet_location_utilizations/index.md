--- 
title: fleet_location_utilizations
hide_title: false
hide_table_of_contents: false
keywords:
  - fleet_location_utilizations
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

Creates, updates, deletes, gets or lists a <code>fleet_location_utilizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fleet_location_utilizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.fleet_location_utilizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fleet_location_utilization"
    values={[
        { label: 'describe_fleet_location_utilization', value: 'describe_fleet_location_utilization' }
    ]}
>
<TabItem value="describe_fleet_location_utilization">

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
    <td><CopyableCode code="active_game_session_count" /></td>
    <td><code>integer</code></td>
    <td>The number of active game sessions that are currently being hosted across all instances in the fleet location.</td>
</tr>
<tr>
    <td><CopyableCode code="active_server_process_count" /></td>
    <td><code>integer</code></td>
    <td>The number of server processes in ACTIVE status that are currently running across all instances in the fleet location.</td>
</tr>
<tr>
    <td><CopyableCode code="current_player_session_count" /></td>
    <td><code>integer</code></td>
    <td>The number of active player sessions that are currently being hosted across all instances in the fleet location.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912. (pattern: &lt;code&gt;^arn:.*:&#91;a-z&#93;*fleet\/&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the fleet associated with the location. (pattern: &lt;code&gt;^&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The fleet location for the fleet utilization information, expressed as an Amazon Web Services Region code, such as us-west-2. (pattern: &lt;code&gt;^&#91;A-Za-z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_player_session_count" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of players allowed across all game sessions that are currently being hosted across all instances in the fleet location.</td>
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
    <td><a href="#describe_fleet_location_utilization"><CopyableCode code="describe_fleet_location_utilization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Retrieves current usage data for a fleet location. Utilization data provides a snapshot of current game hosting activity at the requested location. Use this operation to retrieve utilization information for a fleet's remote location or home Region (you can also retrieve home Region utilization by calling DescribeFleetUtilization). To retrieve utilization data, identify a fleet and location. If successful, a FleetUtilization object is returned for the requested fleet location. Learn more Setting up Amazon GameLift Servers fleets Amazon GameLift Servers service locations for managed hosting GameLift metrics for fleets</td>
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
    defaultValue="describe_fleet_location_utilization"
    values={[
        { label: 'describe_fleet_location_utilization', value: 'describe_fleet_location_utilization' }
    ]}
>
<TabItem value="describe_fleet_location_utilization">

This API works with the following fleet types: EC2, Anywhere, Container Retrieves current usage data for a fleet location. Utilization data provides a snapshot of current game hosting activity at the requested location. Use this operation to retrieve utilization information for a fleet's remote location or home Region (you can also retrieve home Region utilization by calling DescribeFleetUtilization). To retrieve utilization data, identify a fleet and location. If successful, a FleetUtilization object is returned for the requested fleet location. Learn more Setting up Amazon GameLift Servers fleets Amazon GameLift Servers service locations for managed hosting GameLift metrics for fleets

```sql
SELECT
active_game_session_count,
active_server_process_count,
current_player_session_count,
fleet_arn,
fleet_id,
location,
maximum_player_session_count
FROM aws.gamelift.fleet_location_utilizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
