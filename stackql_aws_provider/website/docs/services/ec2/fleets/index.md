--- 
title: fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - fleets
  - ec2
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

Creates, updates, deletes, gets or lists a <code>fleets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fleets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.fleets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fleets"
    values={[
        { label: 'describe_fleets', value: 'describe_fleets' }
    ]}
>
<TabItem value="describe_fleets">

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
    <td><CopyableCode code="activity_status" /></td>
    <td><code>string</code></td>
    <td>The progress of the EC2 Fleet. For fleets of type instant, the status is fulfilled after all requests are placed, regardless of whether target capacity is met (this is the only possible status for instant fleets). For fleets of type request or maintain, the status is pending_fulfillment after all requests are placed, fulfilled when the fleet size meets or exceeds target capacity, pending_termination while instances are terminating when fleet size is decreased, and error if there's an error.</td>
</tr>
<tr>
    <td><CopyableCode code="client_token" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency. Constraints: Maximum 64 ASCII characters</td>
</tr>
<tr>
    <td><CopyableCode code="context" /></td>
    <td><code>string</code></td>
    <td>Reserved.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string</code></td>
    <td>The creation date and time of the EC2 Fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>string</code></td>
    <td>Information about the instances that could not be launched by the fleet. Valid only when Type is set to instant.</td>
</tr>
<tr>
    <td><CopyableCode code="excess_capacity_termination_policy" /></td>
    <td><code>string</code></td>
    <td>Indicates whether running instances should be terminated if the target capacity of the EC2 Fleet is decreased below the current size of the EC2 Fleet. Supported only for fleets of type maintain.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the EC2 Fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_state" /></td>
    <td><code>string</code></td>
    <td>The state of the EC2 Fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="fulfilled_capacity" /></td>
    <td><code>number</code></td>
    <td>The number of units fulfilled by this request compared to the set target capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="fulfilled_on_demand_capacity" /></td>
    <td><code>number</code></td>
    <td>The number of units fulfilled by this request compared to the set target On-Demand capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="instances" /></td>
    <td><code>string</code></td>
    <td>Information about the instances that were launched by the fleet. Valid only when Type is set to instant.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_template_configs" /></td>
    <td><code>string</code></td>
    <td>The launch template and overrides.</td>
</tr>
<tr>
    <td><CopyableCode code="on_demand_options" /></td>
    <td><code>string</code></td>
    <td>The allocation strategy of On-Demand Instances in an EC2 Fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="replace_unhealthy_instances" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether EC2 Fleet should replace unhealthy Spot Instances. Supported only for fleets of type maintain. For more information, see EC2 Fleet health checks in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_capacity_options" /></td>
    <td><code>string</code></td>
    <td>Defines EC2 Fleet preferences for utilizing reserved capacity when DefaultTargetCapacityType is set to reserved-capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="spot_options" /></td>
    <td><code>string</code></td>
    <td>The configuration of Spot Instances in an EC2 Fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags for an EC2 Fleet resource.</td>
</tr>
<tr>
    <td><CopyableCode code="target_capacity_specification" /></td>
    <td><code>string</code></td>
    <td>The number of units to request. You can choose to set the target capacity in terms of instances or a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is maintain, you can specify a target capacity of 0 and add capacity later.</td>
</tr>
<tr>
    <td><CopyableCode code="terminate_instances_with_expiration" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether running instances should be terminated when the EC2 Fleet expires.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of request. Indicates whether the EC2 Fleet only requests the target capacity, or also attempts to maintain it. If you request a certain target capacity, EC2 Fleet only places the required requests; it does not attempt to replenish instances if capacity is diminished, and it does not submit requests in alternative capacity pools if capacity is unavailable. To maintain a certain target capacity, EC2 Fleet places the required requests to meet this target capacity. It also automatically replenishes any interrupted Spot Instances. Default: maintain.</td>
</tr>
<tr>
    <td><CopyableCode code="valid_from" /></td>
    <td><code>string</code></td>
    <td>The start date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.</td>
</tr>
<tr>
    <td><CopyableCode code="valid_until" /></td>
    <td><code>string</code></td>
    <td>The end date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new instance requests are placed or able to fulfill the request. The default end date is 7 days from the current date.</td>
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
    <td><a href="#describe_fleets"><CopyableCode code="describe_fleets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-FleetId"><code>FleetId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes the specified EC2 Fleet or all of your EC2 Fleets. If a fleet is of type instant, you must specify the fleet ID in the request, otherwise the fleet does not appear in the response. For more information, see Describe your EC2 Fleet in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#create_fleet"><CopyableCode code="create_fleet" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LaunchTemplateConfigs"><code>LaunchTemplateConfigs</code></a>, <a href="#parameter-TargetCapacitySpecification"><code>TargetCapacitySpecification</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-SpotOptions"><code>SpotOptions</code></a>, <a href="#parameter-OnDemandOptions"><code>OnDemandOptions</code></a>, <a href="#parameter-ReservedCapacityOptions"><code>ReservedCapacityOptions</code></a>, <a href="#parameter-ExcessCapacityTerminationPolicy"><code>ExcessCapacityTerminationPolicy</code></a>, <a href="#parameter-TerminateInstancesWithExpiration"><code>TerminateInstancesWithExpiration</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-ValidFrom"><code>ValidFrom</code></a>, <a href="#parameter-ValidUntil"><code>ValidUntil</code></a>, <a href="#parameter-ReplaceUnhealthyInstances"><code>ReplaceUnhealthyInstances</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-Context"><code>Context</code></a></td>
    <td>Creates an EC2 Fleet that contains the configuration information for On-Demand Instances and Spot Instances. Instances are launched immediately if there is available capacity. A single EC2 Fleet can include multiple launch specifications that vary by instance type, AMI, Availability Zone, or subnet. For more information, see EC2 Fleet in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_fleet"><CopyableCode code="modify_fleet" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-FleetId"><code>FleetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ExcessCapacityTerminationPolicy"><code>ExcessCapacityTerminationPolicy</code></a>, <a href="#parameter-LaunchTemplateConfig"><code>LaunchTemplateConfig</code></a>, <a href="#parameter-TargetCapacitySpecification"><code>TargetCapacitySpecification</code></a>, <a href="#parameter-Context"><code>Context</code></a></td>
    <td>Modifies the specified EC2 Fleet. You can only modify an EC2 Fleet request of type maintain. While the EC2 Fleet is being modified, it is in the modifying state. To scale up your EC2 Fleet, increase its target capacity. The EC2 Fleet launches the additional Spot Instances according to the allocation strategy for the EC2 Fleet request. If the allocation strategy is lowest-price, the EC2 Fleet launches instances using the Spot Instance pool with the lowest price. If the allocation strategy is diversified, the EC2 Fleet distributes the instances across the Spot Instance pools. If the allocation strategy is capacity-optimized, EC2 Fleet launches instances from Spot Instance pools with optimal capacity for the number of instances that are launching. To scale down your EC2 Fleet, decrease its target capacity. First, the EC2 Fleet cancels any open requests that exceed the new target capacity. You can request that the EC2 Fleet terminate Spot Instances until the size of the fleet no longer exceeds the new target capacity. If the allocation strategy is lowest-price, the EC2 Fleet terminates the instances with the highest price per unit. If the allocation strategy is capacity-optimized, the EC2 Fleet terminates the instances in the Spot Instance pools that have the least available Spot Instance capacity. If the allocation strategy is diversified, the EC2 Fleet terminates instances across the Spot Instance pools. Alternatively, you can request that the EC2 Fleet keep the fleet at its current size, but not replace any Spot Instances that are interrupted or that you terminate manually. If you are finished with your EC2 Fleet for now, but will use it again later, you can set the target capacity to 0.</td>
</tr>
<tr>
    <td><a href="#delete_fleets"><CopyableCode code="delete_fleets" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-FleetId"><code>FleetId</code></a>, <a href="#parameter-TerminateInstances"><code>TerminateInstances</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified EC2 Fleet request. After you delete an EC2 Fleet request, it launches no new instances. You must also specify whether a deleted EC2 Fleet request should terminate its instances. If you choose to terminate the instances, the EC2 Fleet request enters the deleted_terminating state. Otherwise, it enters the deleted_running state, and the instances continue to run until they are interrupted or you terminate them manually. A deleted instant fleet with running instances is not supported. When you delete an instant fleet, Amazon EC2 automatically terminates all its instances. For fleets with more than 1000 instances, the deletion request might fail. If your fleet has more than 1000 instances, first terminate most of the instances manually, leaving 1000 or fewer. Then delete the fleet, and the remaining instances will be terminated automatically. Terminating an instance is permanent and irreversible. After you terminate an instance, you can no longer connect to it, and it can't be recovered. All attached Amazon EBS volumes that are configured to be deleted on termination are also permanently deleted and can't be recovered. All data stored on instance store volumes is permanently lost. For more information, see How instance termination works. Before you terminate an instance, ensure that you have backed up all data that you need to retain after the termination to persistent storage. Restrictions You can delete up to 25 fleets of type instant in a single request. You can delete up to 100 fleets of type maintain or request in a single request. You can delete up to 125 fleets in a single request, provided you do not exceed the quota for each fleet type, as specified above. If you exceed the specified number of fleets to delete, no fleets are deleted. For more information, see Delete an EC2 Fleet request and the instances in the fleet in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-FleetId">
    <td><CopyableCode code="FleetId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the EC2 Fleets. Constraints: In a single request, you can specify up to 25 instant fleet IDs and up to 100 maintain or request fleet IDs.</td>
</tr>
<tr id="parameter-LaunchTemplateConfigs">
    <td><CopyableCode code="LaunchTemplateConfigs" /></td>
    <td><code>array</code></td>
    <td>The configuration for the EC2 Fleet.</td>
</tr>
<tr id="parameter-TargetCapacitySpecification">
    <td><CopyableCode code="TargetCapacitySpecification" /></td>
    <td><code>object</code></td>
    <td>The number of units to request.</td>
</tr>
<tr id="parameter-TerminateInstances">
    <td><CopyableCode code="TerminateInstances" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to terminate the associated instances when the EC2 Fleet is deleted. The default is to terminate the instances. To let the instances continue to run after the EC2 Fleet is deleted, specify no-terminate-instances. Supported only for fleets of type maintain and request. For instant fleets, you cannot specify NoTerminateInstances. A deleted instant fleet with running instances is not supported.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-Context">
    <td><CopyableCode code="Context" /></td>
    <td><code>string</code></td>
    <td>Reserved.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-ExcessCapacityTerminationPolicy">
    <td><CopyableCode code="ExcessCapacityTerminationPolicy" /></td>
    <td><code>string</code></td>
    <td>Indicates whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2 Fleet. Supported only for fleets of type maintain.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. activity-status - The progress of the EC2 Fleet ( error | pending-fulfillment | pending-termination | fulfilled). excess-capacity-termination-policy - Indicates whether to terminate running instances if the target capacity is decreased below the current EC2 Fleet size (true | false). fleet-state - The state of the EC2 Fleet (submitted | active | deleted | failed | deleted-running | deleted-terminating | modifying). replace-unhealthy-instances - Indicates whether EC2 Fleet should replace unhealthy instances (true | false). type - The type of request (instant | request | maintain).</td>
</tr>
<tr id="parameter-FleetId">
    <td><CopyableCode code="FleetId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the EC2 Fleets. If a fleet is of type instant, you must specify the fleet ID, otherwise it does not appear in the response.</td>
</tr>
<tr id="parameter-LaunchTemplateConfig">
    <td><CopyableCode code="LaunchTemplateConfig" /></td>
    <td><code>array</code></td>
    <td>The launch template and overrides.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-OnDemandOptions">
    <td><CopyableCode code="OnDemandOptions" /></td>
    <td><code>object</code></td>
    <td>Describes the configuration of On-Demand Instances in an EC2 Fleet.</td>
</tr>
<tr id="parameter-ReplaceUnhealthyInstances">
    <td><CopyableCode code="ReplaceUnhealthyInstances" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether EC2 Fleet should replace unhealthy Spot Instances. Supported only for fleets of type maintain. For more information, see EC2 Fleet health checks in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-ReservedCapacityOptions">
    <td><CopyableCode code="ReservedCapacityOptions" /></td>
    <td><code>object</code></td>
    <td>Defines EC2 Fleet preferences for utilizing reserved capacity when DefaultTargetCapacityType is set to reserved-capacity. Supported only for fleets of type instant.</td>
</tr>
<tr id="parameter-SpotOptions">
    <td><CopyableCode code="SpotOptions" /></td>
    <td><code>object</code></td>
    <td>Describes the configuration of Spot Instances in an EC2 Fleet.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The key-value pair for tagging the EC2 Fleet request on creation. For more information, see Tag your resources. If the fleet type is instant, specify a resource type of fleet to tag the fleet, instance to tag the instances at launch, volume to tag the volumes at launch, or network-interface to tag the network interfaces at launch. If the fleet type is maintain or request, specify a resource type of fleet to tag the fleet. You cannot specify a resource type of instance, volume, or network-interface. To tag instances at launch, specify the tags in a launch template.</td>
</tr>
<tr id="parameter-TargetCapacitySpecification">
    <td><CopyableCode code="TargetCapacitySpecification" /></td>
    <td><code>object</code></td>
    <td>The size of the EC2 Fleet.</td>
</tr>
<tr id="parameter-TerminateInstancesWithExpiration">
    <td><CopyableCode code="TerminateInstancesWithExpiration" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether running instances should be terminated when the EC2 Fleet expires.</td>
</tr>
<tr id="parameter-Type">
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The fleet type. The default value is maintain. maintain - The EC2 Fleet places an asynchronous request for your desired capacity, and continues to maintain your desired Spot capacity by replenishing interrupted Spot Instances. request - The EC2 Fleet places an asynchronous one-time request for your desired capacity, but does submit Spot requests in alternative capacity pools if Spot capacity is unavailable, and does not maintain Spot capacity if Spot Instances are interrupted. instant - The EC2 Fleet places a synchronous one-time request for your desired capacity, and returns errors for any instances that could not be launched. For more information, see EC2 Fleet request types in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-ValidFrom">
    <td><CopyableCode code="ValidFrom" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.</td>
</tr>
<tr id="parameter-ValidUntil">
    <td><CopyableCode code="ValidUntil" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_fleets"
    values={[
        { label: 'describe_fleets', value: 'describe_fleets' }
    ]}
>
<TabItem value="describe_fleets">

Describes the specified EC2 Fleet or all of your EC2 Fleets. If a fleet is of type instant, you must specify the fleet ID in the request, otherwise the fleet does not appear in the response. For more information, see Describe your EC2 Fleet in the Amazon EC2 User Guide.

```sql
SELECT
activity_status,
client_token,
context,
create_time,
errors,
excess_capacity_termination_policy,
fleet_id,
fleet_state,
fulfilled_capacity,
fulfilled_on_demand_capacity,
instances,
launch_template_configs,
on_demand_options,
replace_unhealthy_instances,
reserved_capacity_options,
spot_options,
tags,
target_capacity_specification,
terminate_instances_with_expiration,
type,
valid_from,
valid_until
FROM aws.ec2.fleets
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND FleetId = '{{ FleetId }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_fleet"
    values={[
        { label: 'create_fleet', value: 'create_fleet' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fleet">

Creates an EC2 Fleet that contains the configuration information for On-Demand Instances and Spot Instances. Instances are launched immediately if there is available capacity. A single EC2 Fleet can include multiple launch specifications that vary by instance type, AMI, Availability Zone, or subnet. For more information, see EC2 Fleet in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.fleets (
LaunchTemplateConfigs,
TargetCapacitySpecification,
region,
DryRun,
ClientToken,
SpotOptions,
OnDemandOptions,
ReservedCapacityOptions,
ExcessCapacityTerminationPolicy,
TerminateInstancesWithExpiration,
Type,
ValidFrom,
ValidUntil,
ReplaceUnhealthyInstances,
TagSpecification,
Context
)
SELECT 
'{{ LaunchTemplateConfigs }}',
'{{ TargetCapacitySpecification }}',
'{{ region }}',
'{{ DryRun }}',
'{{ ClientToken }}',
'{{ SpotOptions }}',
'{{ OnDemandOptions }}',
'{{ ReservedCapacityOptions }}',
'{{ ExcessCapacityTerminationPolicy }}',
'{{ TerminateInstancesWithExpiration }}',
'{{ Type }}',
'{{ ValidFrom }}',
'{{ ValidUntil }}',
'{{ ReplaceUnhealthyInstances }}',
'{{ TagSpecification }}',
'{{ Context }}'
RETURNING
errors,
fleet_id,
instances
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: fleets
  props:
    - name: LaunchTemplateConfigs
      value: "{{ LaunchTemplateConfigs }}"
      description: Required parameter for the fleets resource.
    - name: TargetCapacitySpecification
      value: "{{ TargetCapacitySpecification }}"
      description: Required parameter for the fleets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the fleets resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency. For more information, see Ensuring idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency. For more information, see Ensuring idempotency.
    - name: SpotOptions
      value: "{{ SpotOptions }}"
      description: Describes the configuration of Spot Instances in an EC2 Fleet.
      description: Describes the configuration of Spot Instances in an EC2 Fleet.
    - name: OnDemandOptions
      value: "{{ OnDemandOptions }}"
      description: Describes the configuration of On-Demand Instances in an EC2 Fleet.
      description: Describes the configuration of On-Demand Instances in an EC2 Fleet.
    - name: ReservedCapacityOptions
      value: "{{ ReservedCapacityOptions }}"
      description: Defines EC2 Fleet preferences for utilizing reserved capacity when DefaultTargetCapacityType is set to reserved-capacity. Supported only for fleets of type instant.
      description: Defines EC2 Fleet preferences for utilizing reserved capacity when DefaultTargetCapacityType is set to reserved-capacity. Supported only for fleets of type instant.
    - name: ExcessCapacityTerminationPolicy
      value: "{{ ExcessCapacityTerminationPolicy }}"
      description: Indicates whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2 Fleet. Supported only for fleets of type maintain.
      description: Indicates whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2 Fleet. Supported only for fleets of type maintain.
    - name: TerminateInstancesWithExpiration
      value: {{ TerminateInstancesWithExpiration }}
      description: Indicates whether running instances should be terminated when the EC2 Fleet expires.
      description: Indicates whether running instances should be terminated when the EC2 Fleet expires.
    - name: Type
      value: "{{ Type }}"
      description: The fleet type. The default value is maintain. maintain - The EC2 Fleet places an asynchronous request for your desired capacity, and continues to maintain your desired Spot capacity by replenishing interrupted Spot Instances. request - The EC2 Fleet places an asynchronous one-time request for your desired capacity, but does submit Spot requests in alternative capacity pools if Spot capacity is unavailable, and does not maintain Spot capacity if Spot Instances are interrupted. instant - The EC2 Fleet places a synchronous one-time request for your desired capacity, and returns errors for any instances that could not be launched. For more information, see EC2 Fleet request types in the Amazon EC2 User Guide.
      description: The fleet type. The default value is maintain. maintain - The EC2 Fleet places an asynchronous request for your desired capacity, and continues to maintain your desired Spot capacity by replenishing interrupted Spot Instances. request - The EC2 Fleet places an asynchronous one-time request for your desired capacity, but does submit Spot requests in alternative capacity pools if Spot capacity is unavailable, and does not maintain Spot capacity if Spot Instances are interrupted. instant - The EC2 Fleet places a synchronous one-time request for your desired capacity, and returns errors for any instances that could not be launched. For more information, see EC2 Fleet request types in the Amazon EC2 User Guide.
    - name: ValidFrom
      value: "{{ ValidFrom }}"
      description: The start date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.
      description: The start date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.
    - name: ValidUntil
      value: "{{ ValidUntil }}"
      description: The end date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it.
      description: The end date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it.
    - name: ReplaceUnhealthyInstances
      value: {{ ReplaceUnhealthyInstances }}
      description: Indicates whether EC2 Fleet should replace unhealthy Spot Instances. Supported only for fleets of type maintain. For more information, see EC2 Fleet health checks in the Amazon EC2 User Guide.
      description: Indicates whether EC2 Fleet should replace unhealthy Spot Instances. Supported only for fleets of type maintain. For more information, see EC2 Fleet health checks in the Amazon EC2 User Guide.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The key-value pair for tagging the EC2 Fleet request on creation. For more information, see Tag your resources. If the fleet type is instant, specify a resource type of fleet to tag the fleet, instance to tag the instances at launch, volume to tag the volumes at launch, or network-interface to tag the network interfaces at launch. If the fleet type is maintain or request, specify a resource type of fleet to tag the fleet. You cannot specify a resource type of instance, volume, or network-interface. To tag instances at launch, specify the tags in a launch template.
      description: The key-value pair for tagging the EC2 Fleet request on creation. For more information, see Tag your resources. If the fleet type is instant, specify a resource type of fleet to tag the fleet, instance to tag the instances at launch, volume to tag the volumes at launch, or network-interface to tag the network interfaces at launch. If the fleet type is maintain or request, specify a resource type of fleet to tag the fleet. You cannot specify a resource type of instance, volume, or network-interface. To tag instances at launch, specify the tags in a launch template.
    - name: Context
      value: "{{ Context }}"
      description: Reserved.
      description: Reserved.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_fleet"
    values={[
        { label: 'modify_fleet', value: 'modify_fleet' }
    ]}
>
<TabItem value="modify_fleet">

Modifies the specified EC2 Fleet. You can only modify an EC2 Fleet request of type maintain. While the EC2 Fleet is being modified, it is in the modifying state. To scale up your EC2 Fleet, increase its target capacity. The EC2 Fleet launches the additional Spot Instances according to the allocation strategy for the EC2 Fleet request. If the allocation strategy is lowest-price, the EC2 Fleet launches instances using the Spot Instance pool with the lowest price. If the allocation strategy is diversified, the EC2 Fleet distributes the instances across the Spot Instance pools. If the allocation strategy is capacity-optimized, EC2 Fleet launches instances from Spot Instance pools with optimal capacity for the number of instances that are launching. To scale down your EC2 Fleet, decrease its target capacity. First, the EC2 Fleet cancels any open requests that exceed the new target capacity. You can request that the EC2 Fleet terminate Spot Instances until the size of the fleet no longer exceeds the new target capacity. If the allocation strategy is lowest-price, the EC2 Fleet terminates the instances with the highest price per unit. If the allocation strategy is capacity-optimized, the EC2 Fleet terminates the instances in the Spot Instance pools that have the least available Spot Instance capacity. If the allocation strategy is diversified, the EC2 Fleet terminates instances across the Spot Instance pools. Alternatively, you can request that the EC2 Fleet keep the fleet at its current size, but not replace any Spot Instances that are interrupted or that you terminate manually. If you are finished with your EC2 Fleet for now, but will use it again later, you can set the target capacity to 0.

```sql
UPDATE aws.ec2.fleets
SET 
-- No updatable properties
WHERE 
FleetId = '{{ FleetId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND ExcessCapacityTerminationPolicy = '{{ ExcessCapacityTerminationPolicy}}'
AND LaunchTemplateConfig = '{{ LaunchTemplateConfig}}'
AND TargetCapacitySpecification = '{{ TargetCapacitySpecification}}'
AND Context = '{{ Context}}'
RETURNING
return;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_fleets"
    values={[
        { label: 'delete_fleets', value: 'delete_fleets' }
    ]}
>
<TabItem value="delete_fleets">

Deletes the specified EC2 Fleet request. After you delete an EC2 Fleet request, it launches no new instances. You must also specify whether a deleted EC2 Fleet request should terminate its instances. If you choose to terminate the instances, the EC2 Fleet request enters the deleted_terminating state. Otherwise, it enters the deleted_running state, and the instances continue to run until they are interrupted or you terminate them manually. A deleted instant fleet with running instances is not supported. When you delete an instant fleet, Amazon EC2 automatically terminates all its instances. For fleets with more than 1000 instances, the deletion request might fail. If your fleet has more than 1000 instances, first terminate most of the instances manually, leaving 1000 or fewer. Then delete the fleet, and the remaining instances will be terminated automatically. Terminating an instance is permanent and irreversible. After you terminate an instance, you can no longer connect to it, and it can't be recovered. All attached Amazon EBS volumes that are configured to be deleted on termination are also permanently deleted and can't be recovered. All data stored on instance store volumes is permanently lost. For more information, see How instance termination works. Before you terminate an instance, ensure that you have backed up all data that you need to retain after the termination to persistent storage. Restrictions You can delete up to 25 fleets of type instant in a single request. You can delete up to 100 fleets of type maintain or request in a single request. You can delete up to 125 fleets in a single request, provided you do not exceed the quota for each fleet type, as specified above. If you exceed the specified number of fleets to delete, no fleets are deleted. For more information, see Delete an EC2 Fleet request and the instances in the fleet in the Amazon EC2 User Guide.

```sql
DELETE FROM aws.ec2.fleets
WHERE FleetId = '{{ FleetId }}' --required
AND TerminateInstances = '{{ TerminateInstances }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
