--- 
title: fleet_utilizations
hide_title: false
hide_table_of_contents: false
keywords:
  - fleet_utilizations
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

Creates, updates, deletes, gets or lists a <code>fleet_utilizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fleet_utilizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.fleet_utilizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fleet_utilization"
    values={[
        { label: 'describe_fleet_utilization', value: 'describe_fleet_utilization' }
    ]}
>
<TabItem value="describe_fleet_utilization">

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
    <td><a href="#describe_fleet_utilization"><CopyableCode code="describe_fleet_utilization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Container Retrieves utilization statistics for one or more fleets. Utilization data provides a snapshot of how the fleet's hosting resources are currently being used. For fleets with remote locations, this operation retrieves data for the fleet's home Region only. See DescribeFleetLocationUtilization to get utilization statistics for a fleet's remote locations. This operation can be used in the following ways: To get utilization data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. To get utilization data for all fleets, do not provide a fleet identifier. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetUtilization object is returned for each requested fleet ID, unless the fleet identifier is not found. Each fleet utilization object includes a Location property, which is set to the fleet's home Region. Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed. Learn more Setting up Amazon GameLift Servers Fleets GameLift Metrics for Fleets</td>
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
    defaultValue="describe_fleet_utilization"
    values={[
        { label: 'describe_fleet_utilization', value: 'describe_fleet_utilization' }
    ]}
>
<TabItem value="describe_fleet_utilization">

This API works with the following fleet types: EC2, Container Retrieves utilization statistics for one or more fleets. Utilization data provides a snapshot of how the fleet's hosting resources are currently being used. For fleets with remote locations, this operation retrieves data for the fleet's home Region only. See DescribeFleetLocationUtilization to get utilization statistics for a fleet's remote locations. This operation can be used in the following ways: To get utilization data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. To get utilization data for all fleets, do not provide a fleet identifier. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetUtilization object is returned for each requested fleet ID, unless the fleet identifier is not found. Each fleet utilization object includes a Location property, which is set to the fleet's home Region. Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed. Learn more Setting up Amazon GameLift Servers Fleets GameLift Metrics for Fleets

```sql
SELECT
active_game_session_count,
active_server_process_count,
current_player_session_count,
fleet_arn,
fleet_id,
location,
maximum_player_session_count
FROM aws.gamelift.fleet_utilizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
