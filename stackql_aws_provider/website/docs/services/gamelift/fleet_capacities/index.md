--- 
title: fleet_capacities
hide_title: false
hide_table_of_contents: false
keywords:
  - fleet_capacities
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

Creates, updates, deletes, gets or lists a <code>fleet_capacities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fleet_capacities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.fleet_capacities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fleet_capacity"
    values={[
        { label: 'describe_fleet_capacity', value: 'describe_fleet_capacity' }
    ]}
>
<TabItem value="describe_fleet_capacity">

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
    <td><CopyableCode code="fleet_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912. (pattern: &lt;code&gt;^arn:.*:&#91;a-z&#93;*fleet\/&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the fleet associated with the location. (pattern: &lt;code&gt;^&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="game_server_container_group_counts" /></td>
    <td><code>object</code></td>
    <td>The number and status of game server container groups deployed in a container fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_counts" /></td>
    <td><code>object</code></td>
    <td>The current number of instances in the fleet, listed by instance status. Counts for pending and terminating instances might be non-zero if the fleet is adjusting to a scaling event or if access to resources is temporarily affected.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The Amazon EC2 instance type that is used for instances in a fleet. Instance type determines the computing resources in use, including CPU, memory, storage, and networking capacity. See Amazon Elastic Compute Cloud Instance Types for detailed descriptions. (t2.micro, t2.small, t2.medium, t2.large, c3.large, c3.xlarge, c3.2xlarge, c3.4xlarge, c3.8xlarge, c4.large, c4.xlarge, c4.2xlarge, c4.4xlarge, c4.8xlarge, c5.large, c5.xlarge, c5.2xlarge, c5.4xlarge, c5.9xlarge, c5.12xlarge, c5.18xlarge, c5.24xlarge, c5a.large, c5a.xlarge, c5a.2xlarge, c5a.4xlarge, c5a.8xlarge, c5a.12xlarge, c5a.16xlarge, c5a.24xlarge, r3.large, r3.xlarge, r3.2xlarge, r3.4xlarge, r3.8xlarge, r4.large, r4.xlarge, r4.2xlarge, r4.4xlarge, r4.8xlarge, r4.16xlarge, r5.large, r5.xlarge, r5.2xlarge, r5.4xlarge, r5.8xlarge, r5.12xlarge, r5.16xlarge, r5.24xlarge, r5a.large, r5a.xlarge, r5a.2xlarge, r5a.4xlarge, r5a.8xlarge, r5a.12xlarge, r5a.16xlarge, r5a.24xlarge, m3.medium, m3.large, m3.xlarge, m3.2xlarge, m4.large, m4.xlarge, m4.2xlarge, m4.4xlarge, m4.10xlarge, m5.large, m5.xlarge, m5.2xlarge, m5.4xlarge, m5.8xlarge, m5.12xlarge, m5.16xlarge, m5.24xlarge, m5a.large, m5a.xlarge, m5a.2xlarge, m5a.4xlarge, m5a.8xlarge, m5a.12xlarge, m5a.16xlarge, m5a.24xlarge, c5d.large, c5d.xlarge, c5d.2xlarge, c5d.4xlarge, c5d.9xlarge, c5d.12xlarge, c5d.18xlarge, c5d.24xlarge, c6a.large, c6a.xlarge, c6a.2xlarge, c6a.4xlarge, c6a.8xlarge, c6a.12xlarge, c6a.16xlarge, c6a.24xlarge, c6i.large, c6i.xlarge, c6i.2xlarge, c6i.4xlarge, c6i.8xlarge, c6i.12xlarge, c6i.16xlarge, c6i.24xlarge, r5d.large, r5d.xlarge, r5d.2xlarge, r5d.4xlarge, r5d.8xlarge, r5d.12xlarge, r5d.16xlarge, r5d.24xlarge, m6g.medium, m6g.large, m6g.xlarge, m6g.2xlarge, m6g.4xlarge, m6g.8xlarge, m6g.12xlarge, m6g.16xlarge, c6g.medium, c6g.large, c6g.xlarge, c6g.2xlarge, c6g.4xlarge, c6g.8xlarge, c6g.12xlarge, c6g.16xlarge, r6g.medium, r6g.large, r6g.xlarge, r6g.2xlarge, r6g.4xlarge, r6g.8xlarge, r6g.12xlarge, r6g.16xlarge, c6gn.medium, c6gn.large, c6gn.xlarge, c6gn.2xlarge, c6gn.4xlarge, c6gn.8xlarge, c6gn.12xlarge, c6gn.16xlarge, c7g.medium, c7g.large, c7g.xlarge, c7g.2xlarge, c7g.4xlarge, c7g.8xlarge, c7g.12xlarge, c7g.16xlarge, r7g.medium, r7g.large, r7g.xlarge, r7g.2xlarge, r7g.4xlarge, r7g.8xlarge, r7g.12xlarge, r7g.16xlarge, m7g.medium, m7g.large, m7g.xlarge, m7g.2xlarge, m7g.4xlarge, m7g.8xlarge, m7g.12xlarge, m7g.16xlarge, g5g.xlarge, g5g.2xlarge, g5g.4xlarge, g5g.8xlarge, g5g.16xlarge, r6i.large, r6i.xlarge, r6i.2xlarge, r6i.4xlarge, r6i.8xlarge, r6i.12xlarge, r6i.16xlarge, c6gd.medium, c6gd.large, c6gd.xlarge, c6gd.2xlarge, c6gd.4xlarge, c6gd.8xlarge, c6gd.12xlarge, c6gd.16xlarge, c6in.large, c6in.xlarge, c6in.2xlarge, c6in.4xlarge, c6in.8xlarge, c6in.12xlarge, c6in.16xlarge, c7a.medium, c7a.large, c7a.xlarge, c7a.2xlarge, c7a.4xlarge, c7a.8xlarge, c7a.12xlarge, c7a.16xlarge, c7gd.medium, c7gd.large, c7gd.xlarge, c7gd.2xlarge, c7gd.4xlarge, c7gd.8xlarge, c7gd.12xlarge, c7gd.16xlarge, c7gn.medium, c7gn.large, c7gn.xlarge, c7gn.2xlarge, c7gn.4xlarge, c7gn.8xlarge, c7gn.12xlarge, c7gn.16xlarge, c7i.large, c7i.xlarge, c7i.2xlarge, c7i.4xlarge, c7i.8xlarge, c7i.12xlarge, c7i.16xlarge, m6a.large, m6a.xlarge, m6a.2xlarge, m6a.4xlarge, m6a.8xlarge, m6a.12xlarge, m6a.16xlarge, m6gd.medium, m6gd.large, m6gd.xlarge, m6gd.2xlarge, m6gd.4xlarge, m6gd.8xlarge, m6gd.12xlarge, m6gd.16xlarge, m6i.large, m6i.xlarge, m6i.2xlarge, m6i.4xlarge, m6i.8xlarge, m6i.12xlarge, m6i.16xlarge, m7a.medium, m7a.large, m7a.xlarge, m7a.2xlarge, m7a.4xlarge, m7a.8xlarge, m7a.12xlarge, m7a.16xlarge, m7gd.medium, m7gd.large, m7gd.xlarge, m7gd.2xlarge, m7gd.4xlarge, m7gd.8xlarge, m7gd.12xlarge, m7gd.16xlarge, m7i.large, m7i.xlarge, m7i.2xlarge, m7i.4xlarge, m7i.8xlarge, m7i.12xlarge, m7i.16xlarge, r6gd.medium, r6gd.large, r6gd.xlarge, r6gd.2xlarge, r6gd.4xlarge, r6gd.8xlarge, r6gd.12xlarge, r6gd.16xlarge, r7a.medium, r7a.large, r7a.xlarge, r7a.2xlarge, r7a.4xlarge, r7a.8xlarge, r7a.12xlarge, r7a.16xlarge, r7gd.medium, r7gd.large, r7gd.xlarge, r7gd.2xlarge, r7gd.4xlarge, r7gd.8xlarge, r7gd.12xlarge, r7gd.16xlarge, r7i.large, r7i.xlarge, r7i.2xlarge, r7i.4xlarge, r7i.8xlarge, r7i.12xlarge, r7i.16xlarge, r7i.24xlarge, r7i.48xlarge, c5ad.large, c5ad.xlarge, c5ad.2xlarge, c5ad.4xlarge, c5ad.8xlarge, c5ad.12xlarge, c5ad.16xlarge, c5ad.24xlarge, c5n.large, c5n.xlarge, c5n.2xlarge, c5n.4xlarge, c5n.9xlarge, c5n.18xlarge, r5ad.large, r5ad.xlarge, r5ad.2xlarge, r5ad.4xlarge, r5ad.8xlarge, r5ad.12xlarge, r5ad.16xlarge, r5ad.24xlarge, c6id.large, c6id.xlarge, c6id.2xlarge, c6id.4xlarge, c6id.8xlarge, c6id.12xlarge, c6id.16xlarge, c6id.24xlarge, c6id.32xlarge, c8g.medium, c8g.large, c8g.xlarge, c8g.2xlarge, c8g.4xlarge, c8g.8xlarge, c8g.12xlarge, c8g.16xlarge, c8g.24xlarge, c8g.48xlarge, m5ad.large, m5ad.xlarge, m5ad.2xlarge, m5ad.4xlarge, m5ad.8xlarge, m5ad.12xlarge, m5ad.16xlarge, m5ad.24xlarge, m5d.large, m5d.xlarge, m5d.2xlarge, m5d.4xlarge, m5d.8xlarge, m5d.12xlarge, m5d.16xlarge, m5d.24xlarge, m5dn.large, m5dn.xlarge, m5dn.2xlarge, m5dn.4xlarge, m5dn.8xlarge, m5dn.12xlarge, m5dn.16xlarge, m5dn.24xlarge, m5n.large, m5n.xlarge, m5n.2xlarge, m5n.4xlarge, m5n.8xlarge, m5n.12xlarge, m5n.16xlarge, m5n.24xlarge, m6id.large, m6id.xlarge, m6id.2xlarge, m6id.4xlarge, m6id.8xlarge, m6id.12xlarge, m6id.16xlarge, m6id.24xlarge, m6id.32xlarge, m6idn.large, m6idn.xlarge, m6idn.2xlarge, m6idn.4xlarge, m6idn.8xlarge, m6idn.12xlarge, m6idn.16xlarge, m6idn.24xlarge, m6idn.32xlarge, m6in.large, m6in.xlarge, m6in.2xlarge, m6in.4xlarge, m6in.8xlarge, m6in.12xlarge, m6in.16xlarge, m6in.24xlarge, m6in.32xlarge, m8g.medium, m8g.large, m8g.xlarge, m8g.2xlarge, m8g.4xlarge, m8g.8xlarge, m8g.12xlarge, m8g.16xlarge, m8g.24xlarge, m8g.48xlarge, r5dn.large, r5dn.xlarge, r5dn.2xlarge, r5dn.4xlarge, r5dn.8xlarge, r5dn.12xlarge, r5dn.16xlarge, r5dn.24xlarge, r5n.large, r5n.xlarge, r5n.2xlarge, r5n.4xlarge, r5n.8xlarge, r5n.12xlarge, r5n.16xlarge, r5n.24xlarge, r6a.large, r6a.xlarge, r6a.2xlarge, r6a.4xlarge, r6a.8xlarge, r6a.12xlarge, r6a.16xlarge, r6a.24xlarge, r6a.32xlarge, r6a.48xlarge, r6id.large, r6id.xlarge, r6id.2xlarge, r6id.4xlarge, r6id.8xlarge, r6id.12xlarge, r6id.16xlarge, r6id.24xlarge, r6id.32xlarge, r6idn.large, r6idn.xlarge, r6idn.2xlarge, r6idn.4xlarge, r6idn.8xlarge, r6idn.12xlarge, r6idn.16xlarge, r6idn.24xlarge, r6idn.32xlarge, r6in.large, r6in.xlarge, r6in.2xlarge, r6in.4xlarge, r6in.8xlarge, r6in.12xlarge, r6in.16xlarge, r6in.24xlarge, r6in.32xlarge, r8g.medium, r8g.large, r8g.xlarge, r8g.2xlarge, r8g.4xlarge, r8g.8xlarge, r8g.12xlarge, r8g.16xlarge, r8g.24xlarge, r8g.48xlarge, m4.16xlarge, c6a.32xlarge, c6a.48xlarge, c6i.32xlarge, r6i.24xlarge, r6i.32xlarge, c6in.24xlarge, c6in.32xlarge, c7a.24xlarge, c7a.32xlarge, c7a.48xlarge, c7i.24xlarge, c7i.48xlarge, m6a.24xlarge, m6a.32xlarge, m6a.48xlarge, m6i.24xlarge, m6i.32xlarge, m7a.24xlarge, m7a.32xlarge, m7a.48xlarge, m7i.24xlarge, m7i.48xlarge, r7a.24xlarge, r7a.32xlarge, r7a.48xlarge, c8a.medium, c8a.large, c8a.xlarge, c8a.2xlarge, c8i.large, c8i.xlarge, c8i.2xlarge, c9g.medium, c9g.large, c9g.xlarge, c9g.2xlarge, m8a.medium, m8a.large, m8a.xlarge, m8a.2xlarge, m8i.large, m8i.xlarge, m8i.2xlarge, m9g.large, m9g.xlarge, m9g.2xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The fleet location for the instance count information, expressed as an Amazon Web Services Region code, such as us-west-2. (pattern: &lt;code&gt;^&#91;A-Za-z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="managed_capacity_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration settings for managed capacity scaling.</td>
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
    <td><a href="#describe_fleet_capacity"><CopyableCode code="describe_fleet_capacity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Container Retrieves the resource capacity settings for one or more fleets. For a container fleet, this operation also returns counts for game server container groups. With multi-location fleets, this operation retrieves data for the fleet's home Region only. To retrieve capacity for remote locations, see https:​//docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html. This operation can be used in the following ways: To get capacity data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. To get capacity data for all fleets, do not provide a fleet identifier. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetCapacity object is returned for each requested fleet ID. Each FleetCapacity object includes a Location property, which is set to the fleet's home Region. Capacity values are returned only for fleets that currently exist. Some API operations may limit the number of fleet IDs that are allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed. Learn more Setting up Amazon GameLift Servers fleets GameLift metrics for fleets</td>
</tr>
<tr>
    <td><a href="#update_fleet_capacity"><CopyableCode code="update_fleet_capacity" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FleetId"><code>FleetId</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Container Updates capacity settings for a managed EC2 fleet or managed container fleet. For these fleets, you adjust capacity by changing the number of instances in the fleet. Fleet capacity determines the number of game sessions and players that the fleet can host based on its configuration. For fleets with multiple locations, use this operation to manage capacity settings in each location individually. Minimum/maximum size: Set hard limits on the number of Amazon EC2 instances allowed. If Amazon GameLift Servers receives a request--either through manual update or automatic scaling--it won't change the capacity to a value outside of this range. Desired capacity: As an alternative to automatic scaling, manually set the number of Amazon EC2 instances to be maintained. Before changing a fleet's desired capacity, check the maximum capacity of the fleet's Amazon EC2 instance type by calling DescribeEC2InstanceLimits. To update capacity for a fleet's home Region, or if the fleet has no remote locations, omit the Location parameter. The fleet must be in ACTIVE status. To update capacity for a fleet's remote location, set the Location parameter to the location to update. The location must be in ACTIVE status. If successful, Amazon GameLift Servers updates the capacity settings and returns the identifiers for the updated fleet and/or location. If a requested change to desired capacity exceeds the instance type's limit, the LimitExceeded exception occurs. Updates often prompt an immediate change in fleet capacity, such as when current capacity is different than the new desired capacity or outside the new limits. In this scenario, Amazon GameLift Servers automatically initiates steps to add or remove instances in the fleet location. You can track a fleet's current capacity by calling DescribeFleetCapacity or DescribeFleetLocationCapacity. Use ManagedCapacityConfiguration with the "SCALE_TO_AND_FROM_ZERO" ZeroCapacityStrategy to enable Amazon GameLift Servers to fully manage the MinSize value, switching between 0 and 1 based on game session activity. This is ideal for eliminating compute costs during periods of no game activity. It is particularly beneficial during development when you're away from your desk, iterating on builds for extended periods, in production environments serving low-traffic locations, or for games with long, predictable downtime windows. By automatically managing capacity between 0 and 1 instances, you avoid paying for idle instances while maintaining the ability to serve game sessions when demand arrives. Note that while scale-out is triggered immediately upon receiving a game session request, actual game session availability depends on your server process startup time, so this approach works best with multi-location Fleets where cold-start latency is tolerable. With a "MANUAL" ZeroCapacityStrategy Amazon GameLift Servers will not modify Fleet MinSize values automatically and will not scale out from zero instances in response to game sessions. This is configurable per-location. Learn more Scaling fleet capacity</td>
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
    defaultValue="describe_fleet_capacity"
    values={[
        { label: 'describe_fleet_capacity', value: 'describe_fleet_capacity' }
    ]}
>
<TabItem value="describe_fleet_capacity">

This API works with the following fleet types: EC2, Container Retrieves the resource capacity settings for one or more fleets. For a container fleet, this operation also returns counts for game server container groups. With multi-location fleets, this operation retrieves data for the fleet's home Region only. To retrieve capacity for remote locations, see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html. This operation can be used in the following ways: To get capacity data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. To get capacity data for all fleets, do not provide a fleet identifier. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetCapacity object is returned for each requested fleet ID. Each FleetCapacity object includes a Location property, which is set to the fleet's home Region. Capacity values are returned only for fleets that currently exist. Some API operations may limit the number of fleet IDs that are allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed. Learn more Setting up Amazon GameLift Servers fleets GameLift metrics for fleets

```sql
SELECT
fleet_arn,
fleet_id,
game_server_container_group_counts,
instance_counts,
instance_type,
location,
managed_capacity_configuration
FROM aws.gamelift.fleet_capacities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_fleet_capacity"
    values={[
        { label: 'update_fleet_capacity', value: 'update_fleet_capacity' }
    ]}
>
<TabItem value="update_fleet_capacity">

This API works with the following fleet types: EC2, Container Updates capacity settings for a managed EC2 fleet or managed container fleet. For these fleets, you adjust capacity by changing the number of instances in the fleet. Fleet capacity determines the number of game sessions and players that the fleet can host based on its configuration. For fleets with multiple locations, use this operation to manage capacity settings in each location individually. Minimum/maximum size: Set hard limits on the number of Amazon EC2 instances allowed. If Amazon GameLift Servers receives a request--either through manual update or automatic scaling--it won't change the capacity to a value outside of this range. Desired capacity: As an alternative to automatic scaling, manually set the number of Amazon EC2 instances to be maintained. Before changing a fleet's desired capacity, check the maximum capacity of the fleet's Amazon EC2 instance type by calling DescribeEC2InstanceLimits. To update capacity for a fleet's home Region, or if the fleet has no remote locations, omit the Location parameter. The fleet must be in ACTIVE status. To update capacity for a fleet's remote location, set the Location parameter to the location to update. The location must be in ACTIVE status. If successful, Amazon GameLift Servers updates the capacity settings and returns the identifiers for the updated fleet and/or location. If a requested change to desired capacity exceeds the instance type's limit, the LimitExceeded exception occurs. Updates often prompt an immediate change in fleet capacity, such as when current capacity is different than the new desired capacity or outside the new limits. In this scenario, Amazon GameLift Servers automatically initiates steps to add or remove instances in the fleet location. You can track a fleet's current capacity by calling DescribeFleetCapacity or DescribeFleetLocationCapacity. Use ManagedCapacityConfiguration with the "SCALE_TO_AND_FROM_ZERO" ZeroCapacityStrategy to enable Amazon GameLift Servers to fully manage the MinSize value, switching between 0 and 1 based on game session activity. This is ideal for eliminating compute costs during periods of no game activity. It is particularly beneficial during development when you're away from your desk, iterating on builds for extended periods, in production environments serving low-traffic locations, or for games with long, predictable downtime windows. By automatically managing capacity between 0 and 1 instances, you avoid paying for idle instances while maintaining the ability to serve game sessions when demand arrives. Note that while scale-out is triggered immediately upon receiving a game session request, actual game session availability depends on your server process startup time, so this approach works best with multi-location Fleets where cold-start latency is tolerable. With a "MANUAL" ZeroCapacityStrategy Amazon GameLift Servers will not modify Fleet MinSize values automatically and will not scale out from zero instances in response to game sessions. This is configurable per-location. Learn more Scaling fleet capacity

```sql
UPDATE aws.gamelift.fleet_capacities
SET 
FleetId = '{{ FleetId }}',
DesiredInstances = {{ DesiredInstances }},
MinSize = {{ MinSize }},
MaxSize = {{ MaxSize }},
Location = '{{ Location }}',
ManagedCapacityConfiguration = '{{ ManagedCapacityConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND FleetId = '{{ FleetId }}' --required
RETURNING
fleet_arn,
fleet_id,
location,
managed_capacity_configuration;
```
</TabItem>
</Tabs>
