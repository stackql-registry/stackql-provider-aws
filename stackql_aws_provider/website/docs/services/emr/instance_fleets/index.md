--- 
title: instance_fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_fleets
  - emr
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

Creates, updates, deletes, gets or lists an <code>instance_fleets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_fleets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.instance_fleets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_instance_fleets"
    values={[
        { label: 'list_instance_fleets', value: 'list_instance_fleets' }
    ]}
>
<TabItem value="list_instance_fleets">

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
    <td><CopyableCode code="context" /></td>
    <td><code>string</code></td>
    <td>Reserved. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the instance fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_fleet_type" /></td>
    <td><code>string</code></td>
    <td>The node type that the instance fleet hosts. Valid values are MASTER, CORE, or TASK. (MASTER, CORE, TASK)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type_specifications" /></td>
    <td><code>array</code></td>
    <td>An array of specifications for the instance types that comprise an instance fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_specifications" /></td>
    <td><code>object</code></td>
    <td>Describes the launch specification for an instance fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A friendly name for the instance fleet. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_on_demand_capacity" /></td>
    <td><code>integer</code></td>
    <td>The number of On-Demand units that have been provisioned for the instance fleet to fulfill TargetOnDemandCapacity. This provisioned capacity might be less than or greater than TargetOnDemandCapacity.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_spot_capacity" /></td>
    <td><code>integer</code></td>
    <td>The number of Spot units that have been provisioned for this instance fleet to fulfill TargetSpotCapacity. This provisioned capacity might be less than or greater than TargetSpotCapacity.</td>
</tr>
<tr>
    <td><CopyableCode code="resize_specifications" /></td>
    <td><code>object</code></td>
    <td>The resize specification for the instance fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the instance fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="target_on_demand_capacity" /></td>
    <td><code>integer</code></td>
    <td>The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand Instances to provision. When the instance fleet launches, Amazon EMR tries to provision On-Demand Instances as specified by InstanceTypeConfig. Each instance configuration has a specified WeightedCapacity. When an On-Demand Instance is provisioned, the WeightedCapacity units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a WeightedCapacity of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units. You can use InstanceFleet$ProvisionedOnDemandCapacity to determine the Spot capacity units that have been provisioned for the instance fleet. If not specified or set to 0, only Spot Instances are provisioned for the instance fleet using TargetSpotCapacity. At least one of TargetSpotCapacity and TargetOnDemandCapacity should be greater than 0. For a master instance fleet, only one of TargetSpotCapacity and TargetOnDemandCapacity can be specified, and its value must be 1.</td>
</tr>
<tr>
    <td><CopyableCode code="target_spot_capacity" /></td>
    <td><code>integer</code></td>
    <td>The target capacity of Spot units for the instance fleet, which determines how many Spot Instances to provision. When the instance fleet launches, Amazon EMR tries to provision Spot Instances as specified by InstanceTypeConfig. Each instance configuration has a specified WeightedCapacity. When a Spot instance is provisioned, the WeightedCapacity units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a WeightedCapacity of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units. You can use InstanceFleet$ProvisionedSpotCapacity to determine the Spot capacity units that have been provisioned for the instance fleet. If not specified or set to 0, only On-Demand Instances are provisioned for the instance fleet. At least one of TargetSpotCapacity and TargetOnDemandCapacity should be greater than 0. For a master instance fleet, only one of TargetSpotCapacity and TargetOnDemandCapacity can be specified, and its value must be 1.</td>
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
    <td><a href="#list_instance_fleets"><CopyableCode code="list_instance_fleets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all available details about the instance fleets in a cluster. The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</td>
</tr>
<tr>
    <td><a href="#add_instance_fleet"><CopyableCode code="add_instance_fleet" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterId"><code>ClusterId</code></a>, <a href="#parameter-InstanceFleet"><code>InstanceFleet</code></a></td>
    <td></td>
    <td>Adds an instance fleet to a running cluster. The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x.</td>
</tr>
<tr>
    <td><a href="#modify_instance_fleet"><CopyableCode code="modify_instance_fleet" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterId"><code>ClusterId</code></a>, <a href="#parameter-InstanceFleet"><code>InstanceFleet</code></a></td>
    <td></td>
    <td>Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically. The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</td>
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
    defaultValue="list_instance_fleets"
    values={[
        { label: 'list_instance_fleets', value: 'list_instance_fleets' }
    ]}
>
<TabItem value="list_instance_fleets">

Lists all available details about the instance fleets in a cluster. The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.

```sql
SELECT
context,
id,
instance_fleet_type,
instance_type_specifications,
launch_specifications,
name,
provisioned_on_demand_capacity,
provisioned_spot_capacity,
resize_specifications,
status,
target_on_demand_capacity,
target_spot_capacity
FROM aws.emr.instance_fleets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_instance_fleet"
    values={[
        { label: 'add_instance_fleet', value: 'add_instance_fleet' }
    ]}
>
<TabItem value="add_instance_fleet">

Adds an instance fleet to a running cluster. The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x.

```sql
UPDATE aws.emr.instance_fleets
SET 
ClusterId = '{{ ClusterId }}',
InstanceFleet = '{{ InstanceFleet }}'
WHERE 
region = '{{ region }}' --required
AND ClusterId = '{{ ClusterId }}' --required
AND InstanceFleet = '{{ InstanceFleet }}' --required
RETURNING
cluster_arn,
cluster_id,
instance_fleet_id;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="modify_instance_fleet"
    values={[
        { label: 'modify_instance_fleet', value: 'modify_instance_fleet' }
    ]}
>
<TabItem value="modify_instance_fleet">

Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically. The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.

```sql
EXEC aws.emr.instance_fleets.modify_instance_fleet 
@region='{{ region }}' --required 
@@json=
'{
"ClusterId": "{{ ClusterId }}", 
"InstanceFleet": "{{ InstanceFleet }}"
}'
;
```
</TabItem>
</Tabs>
