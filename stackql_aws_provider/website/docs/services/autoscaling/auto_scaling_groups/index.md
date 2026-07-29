--- 
title: auto_scaling_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - auto_scaling_groups
  - autoscaling
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

Creates, updates, deletes, gets or lists an <code>auto_scaling_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auto_scaling_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.auto_scaling_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_auto_scaling_groups"
    values={[
        { label: 'describe_auto_scaling_groups', value: 'describe_auto_scaling_groups' }
    ]}
>
<TabItem value="describe_auto_scaling_groups">

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
    <td><CopyableCode code="auto_scaling_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_scaling_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_distribution" /></td>
    <td><code>string</code></td>
    <td>The EC2 instance capacity distribution across Availability Zones for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_ids" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone IDs where the Auto Scaling group can launch instances.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_impairment_policy" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone impairment policy for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>string</code></td>
    <td>One or more Availability Zones for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_rebalance" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Capacity Rebalancing is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_reservation_specification" /></td>
    <td><code>string</code></td>
    <td>The capacity reservation specification for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="context" /></td>
    <td><code>string</code></td>
    <td>Reserved.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the Auto Scaling group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_cooldown" /></td>
    <td><code>integer</code></td>
    <td>The duration of the default cooldown period, in seconds, for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="default_instance_warmup" /></td>
    <td><code>integer</code></td>
    <td>The duration of the default EC2 instance warmup time, in seconds, for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection" /></td>
    <td><code>string</code></td>
    <td>The deletion protection setting for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="desired_capacity" /></td>
    <td><code>integer</code></td>
    <td>The desired size of the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="desired_capacity_type" /></td>
    <td><code>string</code></td>
    <td>The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports DesiredCapacityType for attribute-based instance type selection only.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_metrics" /></td>
    <td><code>string</code></td>
    <td>The metrics enabled for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_grace_period" /></td>
    <td><code>integer</code></td>
    <td>The duration of the health check grace period, in seconds, for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_type" /></td>
    <td><code>string</code></td>
    <td>One or more comma-separated health check types for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_lifecycle_policy" /></td>
    <td><code>string</code></td>
    <td>The instance lifecycle policy for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_maintenance_policy" /></td>
    <td><code>string</code></td>
    <td>An instance maintenance policy.</td>
</tr>
<tr>
    <td><CopyableCode code="instances" /></td>
    <td><code>string</code></td>
    <td>The EC2 instances associated with the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_configuration_name" /></td>
    <td><code>string</code></td>
    <td>The name of the associated launch configuration for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_template" /></td>
    <td><code>string</code></td>
    <td>The launch template for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="load_balancer_names" /></td>
    <td><code>string</code></td>
    <td>One or more load balancers associated with the group.</td>
</tr>
<tr>
    <td><CopyableCode code="max_instance_lifetime" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of time, in seconds, that an EC2 instance can be in service for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="max_size" /></td>
    <td><code>integer</code></td>
    <td>The maximum size of the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="min_size" /></td>
    <td><code>integer</code></td>
    <td>The minimum size of the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="mixed_instances_policy" /></td>
    <td><code>string</code></td>
    <td>The mixed instances policy for the group.</td>
</tr>
<tr>
    <td><CopyableCode code="new_instances_protected_from_scale_in" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether newly launched EC2 instances are protected from termination when scaling in for the Auto Scaling group. For more information about preventing instances from terminating on scale in, see Use instance scale-in protection in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="placement_group" /></td>
    <td><code>string</code></td>
    <td>The name of the placement group into which to launch EC2 instances for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="predicted_capacity" /></td>
    <td><code>integer</code></td>
    <td>The predicted capacity of the group when it has a predictive scaling policy.</td>
</tr>
<tr>
    <td><CopyableCode code="service_linked_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other Amazon Web Services on your behalf.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current state of the Auto Scaling group when the DeleteAutoScalingGroup operation is in progress.</td>
</tr>
<tr>
    <td><CopyableCode code="suspended_processes" /></td>
    <td><code>string</code></td>
    <td>The suspended processes associated with the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="target_group_arns" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Names (ARN) of the target groups for your load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="termination_policies" /></td>
    <td><code>string</code></td>
    <td>The termination policies for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_sources" /></td>
    <td><code>string</code></td>
    <td>The traffic sources associated with this Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_zone_identifier" /></td>
    <td><code>string</code></td>
    <td>One or more comma-separated subnet IDs for the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="warm_pool_configuration" /></td>
    <td><code>string</code></td>
    <td>The warm pool for the group.</td>
</tr>
<tr>
    <td><CopyableCode code="warm_pool_size" /></td>
    <td><code>integer</code></td>
    <td>The current size of the warm pool.</td>
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
    <td><a href="#describe_auto_scaling_groups"><CopyableCode code="describe_auto_scaling_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AutoScalingGroupNames"><code>AutoScalingGroupNames</code></a>, <a href="#parameter-IncludeInstances"><code>IncludeInstances</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Filters"><code>Filters</code></a></td>
    <td>Gets information about the Auto Scaling groups in the account and Region. If you specify Auto Scaling group names, the output includes information for only the specified Auto Scaling groups. If you specify filters, the output includes information for only those Auto Scaling groups that meet the filter criteria. If you do not specify group names or filters, the output includes information for all Auto Scaling groups. This operation also returns information about instances in Auto Scaling groups. To retrieve information about the instances in a warm pool, you must call the DescribeWarmPool API.</td>
</tr>
<tr>
    <td><a href="#create_auto_scaling_group"><CopyableCode code="create_auto_scaling_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-MinSize"><code>MinSize</code></a>, <a href="#parameter-MaxSize"><code>MaxSize</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LaunchConfigurationName"><code>LaunchConfigurationName</code></a>, <a href="#parameter-LaunchTemplate"><code>LaunchTemplate</code></a>, <a href="#parameter-MixedInstancesPolicy"><code>MixedInstancesPolicy</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-DesiredCapacity"><code>DesiredCapacity</code></a>, <a href="#parameter-DefaultCooldown"><code>DefaultCooldown</code></a>, <a href="#parameter-AvailabilityZones"><code>AvailabilityZones</code></a>, <a href="#parameter-AvailabilityZoneIds"><code>AvailabilityZoneIds</code></a>, <a href="#parameter-LoadBalancerNames"><code>LoadBalancerNames</code></a>, <a href="#parameter-TargetGroupARNs"><code>TargetGroupARNs</code></a>, <a href="#parameter-HealthCheckType"><code>HealthCheckType</code></a>, <a href="#parameter-HealthCheckGracePeriod"><code>HealthCheckGracePeriod</code></a>, <a href="#parameter-PlacementGroup"><code>PlacementGroup</code></a>, <a href="#parameter-VPCZoneIdentifier"><code>VPCZoneIdentifier</code></a>, <a href="#parameter-TerminationPolicies"><code>TerminationPolicies</code></a>, <a href="#parameter-NewInstancesProtectedFromScaleIn"><code>NewInstancesProtectedFromScaleIn</code></a>, <a href="#parameter-CapacityRebalance"><code>CapacityRebalance</code></a>, <a href="#parameter-LifecycleHookSpecificationList"><code>LifecycleHookSpecificationList</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-ServiceLinkedRoleARN"><code>ServiceLinkedRoleARN</code></a>, <a href="#parameter-MaxInstanceLifetime"><code>MaxInstanceLifetime</code></a>, <a href="#parameter-Context"><code>Context</code></a>, <a href="#parameter-DesiredCapacityType"><code>DesiredCapacityType</code></a>, <a href="#parameter-DefaultInstanceWarmup"><code>DefaultInstanceWarmup</code></a>, <a href="#parameter-TrafficSources"><code>TrafficSources</code></a>, <a href="#parameter-InstanceMaintenancePolicy"><code>InstanceMaintenancePolicy</code></a>, <a href="#parameter-AvailabilityZoneDistribution"><code>AvailabilityZoneDistribution</code></a>, <a href="#parameter-AvailabilityZoneImpairmentPolicy"><code>AvailabilityZoneImpairmentPolicy</code></a>, <a href="#parameter-SkipZonalShiftValidation"><code>SkipZonalShiftValidation</code></a>, <a href="#parameter-CapacityReservationSpecification"><code>CapacityReservationSpecification</code></a>, <a href="#parameter-InstanceLifecyclePolicy"><code>InstanceLifecyclePolicy</code></a></td>
    <td>We strongly recommend using a launch template when calling this operation to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2. Creates an Auto Scaling group with the specified name and attributes. If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit, call the DescribeAccountLimits API. For information about updating this limit, see Quotas for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. If you're new to Amazon EC2 Auto Scaling, see the introductory tutorials in Get started with Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. Every Auto Scaling group has three size properties (DesiredCapacity, MaxSize, and MinSize). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.</td>
</tr>
<tr>
    <td><a href="#set_instance_protection"><CopyableCode code="set_instance_protection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceIds"><code>InstanceIds</code></a>, <a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-ProtectedFromScaleIn"><code>ProtectedFromScaleIn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool. For more information, see Use instance scale-in protection in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.</td>
</tr>
<tr>
    <td><a href="#detach_instances"><CopyableCode code="detach_instances" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-ShouldDecrementDesiredCapacity"><code>ShouldDecrementDesiredCapacity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-InstanceIds"><code>InstanceIds</code></a></td>
    <td>Removes one or more instances from the specified Auto Scaling group. After the instances are detached, you can manage them independent of the Auto Scaling group. If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached. If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups. For more information, see Detach or attach instances in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#set_desired_capacity"><CopyableCode code="set_desired_capacity" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-DesiredCapacity"><code>DesiredCapacity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-HonorCooldown"><code>HonorCooldown</code></a></td>
    <td>Sets the size of the specified Auto Scaling group. If a scale-in activity occurs as a result of a new DesiredCapacity value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. For more information, see Manual scaling in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#update_auto_scaling_group"><CopyableCode code="update_auto_scaling_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LaunchConfigurationName"><code>LaunchConfigurationName</code></a>, <a href="#parameter-LaunchTemplate"><code>LaunchTemplate</code></a>, <a href="#parameter-MixedInstancesPolicy"><code>MixedInstancesPolicy</code></a>, <a href="#parameter-MinSize"><code>MinSize</code></a>, <a href="#parameter-MaxSize"><code>MaxSize</code></a>, <a href="#parameter-DesiredCapacity"><code>DesiredCapacity</code></a>, <a href="#parameter-DefaultCooldown"><code>DefaultCooldown</code></a>, <a href="#parameter-AvailabilityZones"><code>AvailabilityZones</code></a>, <a href="#parameter-AvailabilityZoneIds"><code>AvailabilityZoneIds</code></a>, <a href="#parameter-HealthCheckType"><code>HealthCheckType</code></a>, <a href="#parameter-HealthCheckGracePeriod"><code>HealthCheckGracePeriod</code></a>, <a href="#parameter-PlacementGroup"><code>PlacementGroup</code></a>, <a href="#parameter-VPCZoneIdentifier"><code>VPCZoneIdentifier</code></a>, <a href="#parameter-TerminationPolicies"><code>TerminationPolicies</code></a>, <a href="#parameter-NewInstancesProtectedFromScaleIn"><code>NewInstancesProtectedFromScaleIn</code></a>, <a href="#parameter-ServiceLinkedRoleARN"><code>ServiceLinkedRoleARN</code></a>, <a href="#parameter-MaxInstanceLifetime"><code>MaxInstanceLifetime</code></a>, <a href="#parameter-CapacityRebalance"><code>CapacityRebalance</code></a>, <a href="#parameter-Context"><code>Context</code></a>, <a href="#parameter-DesiredCapacityType"><code>DesiredCapacityType</code></a>, <a href="#parameter-DefaultInstanceWarmup"><code>DefaultInstanceWarmup</code></a>, <a href="#parameter-InstanceMaintenancePolicy"><code>InstanceMaintenancePolicy</code></a>, <a href="#parameter-AvailabilityZoneDistribution"><code>AvailabilityZoneDistribution</code></a>, <a href="#parameter-AvailabilityZoneImpairmentPolicy"><code>AvailabilityZoneImpairmentPolicy</code></a>, <a href="#parameter-SkipZonalShiftValidation"><code>SkipZonalShiftValidation</code></a>, <a href="#parameter-CapacityReservationSpecification"><code>CapacityReservationSpecification</code></a>, <a href="#parameter-InstanceLifecyclePolicy"><code>InstanceLifecyclePolicy</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a></td>
    <td>We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2. Updates the configuration for the specified Auto Scaling group. To update an Auto Scaling group, specify the name of the group and the property that you want to change. Any properties that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns. If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration. Existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application. Note the following about changing DesiredCapacity, MaxSize, or MinSize: If a scale-in activity occurs as a result of a new DesiredCapacity value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. If you specify a new value for MinSize without specifying a value for DesiredCapacity, and the new MinSize is larger than the current size of the group, this sets the group's DesiredCapacity to the new MinSize value. If you specify a new value for MaxSize without specifying a value for DesiredCapacity, and the new MaxSize is smaller than the current size of the group, this sets the group's DesiredCapacity to the new MaxSize value. To see which properties have been set, call the DescribeAutoScalingGroups API. To view the scaling policies for an Auto Scaling group, call the DescribePolicies API. If the group has scaling policies, you can update them by calling the PutScalingPolicy API.</td>
</tr>
<tr>
    <td><a href="#put_scheduled_update_group_action"><CopyableCode code="put_scheduled_update_group_action" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-ScheduledActionName"><code>ScheduledActionName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Time"><code>Time</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-Recurrence"><code>Recurrence</code></a>, <a href="#parameter-MinSize"><code>MinSize</code></a>, <a href="#parameter-MaxSize"><code>MaxSize</code></a>, <a href="#parameter-DesiredCapacity"><code>DesiredCapacity</code></a>, <a href="#parameter-TimeZone"><code>TimeZone</code></a></td>
    <td>Creates or updates a scheduled scaling action for an Auto Scaling group. For more information, see Scheduled scaling in the Amazon EC2 Auto Scaling User Guide. You can view the scheduled actions for an Auto Scaling group using the DescribeScheduledActions API call. If you are no longer using a scheduled action, you can delete it by calling the DeleteScheduledAction API. If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error message.</td>
</tr>
<tr>
    <td><a href="#terminate_instance_in_auto_scaling_group"><CopyableCode code="terminate_instance_in_auto_scaling_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ShouldDecrementDesiredCapacity"><code>ShouldDecrementDesiredCapacity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool. This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to terminated. You can't connect to or start an instance after you've terminated it. If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated. By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see Manual scaling in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_auto_scaling_group"><CopyableCode code="delete_auto_scaling_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ForceDelete"><code>ForceDelete</code></a></td>
    <td>Deletes the specified Auto Scaling group. If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed. The force delete operation will also terminate the EC2 instances. If the group has a warm pool, the force delete option also deletes the warm pool. To remove instances from the Auto Scaling group before deleting it, call the DetachInstances API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances. To terminate all instances before deleting the Auto Scaling group, call the UpdateAutoScalingGroup API and set the minimum size and desired capacity of the Auto Scaling group to zero. If the group has scaling policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action. For more information, see Delete your Auto Scaling infrastructure in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#attach_instances"><CopyableCode code="attach_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-InstanceIds"><code>InstanceIds</code></a></td>
    <td>Attaches one or more EC2 instances to the specified Auto Scaling group. When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails. If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups. For more information, see Detach or attach instances in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#batch_delete_scheduled_action"><CopyableCode code="batch_delete_scheduled_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-ScheduledActionNames"><code>ScheduledActionNames</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes one or more scheduled actions for the specified Auto Scaling group.</td>
</tr>
<tr>
    <td><a href="#batch_put_scheduled_update_group_action"><CopyableCode code="batch_put_scheduled_update_group_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-ScheduledUpdateGroupActions"><code>ScheduledUpdateGroupActions</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates or updates one or more scheduled scaling actions for an Auto Scaling group.</td>
</tr>
<tr>
    <td><a href="#cancel_instance_refresh"><CopyableCode code="cancel_instance_refresh" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-WaitForTransitioningInstances"><code>WaitForTransitioningInstances</code></a></td>
    <td>Cancels an instance refresh or rollback that is in progress. If an instance refresh or rollback is not in progress, an ActiveInstanceRefreshNotFound error occurs. This operation is part of the instance refresh feature in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes. When you cancel an instance refresh, this does not roll back any changes that it made. Use the RollbackInstanceRefresh API to roll back instead.</td>
</tr>
<tr>
    <td><a href="#complete_lifecycle_action"><CopyableCode code="complete_lifecycle_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-LifecycleHookName"><code>LifecycleHookName</code></a>, <a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-LifecycleActionResult"><code>LifecycleActionResult</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LifecycleActionToken"><code>LifecycleActionToken</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a></td>
    <td>Completes the lifecycle action for the specified token or instance with the specified result. This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group: (Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook. (Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook. (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target. Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate. If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state. If you finish before the timeout period ends, send a callback by using the CompleteLifecycleAction API call. For more information, see Complete a lifecycle action in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#disable_metrics_collection"><CopyableCode code="disable_metrics_collection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Metrics"><code>Metrics</code></a></td>
    <td>Disables group metrics collection for the specified Auto Scaling group.</td>
</tr>
<tr>
    <td><a href="#enable_metrics_collection"><CopyableCode code="enable_metrics_collection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-Granularity"><code>Granularity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Metrics"><code>Metrics</code></a></td>
    <td>Enables group metrics collection for the specified Auto Scaling group. You can use these metrics to track changes in an Auto Scaling group and to set alarms on threshold values. You can view group metrics using the Amazon EC2 Auto Scaling console or the CloudWatch console. For more information, see Monitor CloudWatch metrics for your Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#enter_standby"><CopyableCode code="enter_standby" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-ShouldDecrementDesiredCapacity"><code>ShouldDecrementDesiredCapacity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-InstanceIds"><code>InstanceIds</code></a></td>
    <td>Moves the specified instances into the standby state. If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group. If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby. For more information, see Temporarily removing instances from your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#exit_standby"><CopyableCode code="exit_standby" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-InstanceIds"><code>InstanceIds</code></a></td>
    <td>Moves the specified instances out of the standby state. After you put the instances back in service, the desired capacity is incremented. For more information, see Temporarily removing instances from your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#launch_instances"><CopyableCode code="launch_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-RequestedCapacity"><code>RequestedCapacity</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityZones"><code>AvailabilityZones</code></a>, <a href="#parameter-AvailabilityZoneIds"><code>AvailabilityZoneIds</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a>, <a href="#parameter-RetryStrategy"><code>RetryStrategy</code></a></td>
    <td>Launches a specified number of instances in an Auto Scaling group. Returns instance IDs and other details if launch is successful or error details if launch is unsuccessful.</td>
</tr>
<tr>
    <td><a href="#record_lifecycle_action_heartbeat"><CopyableCode code="record_lifecycle_action_heartbeat" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-LifecycleHookName"><code>LifecycleHookName</code></a>, <a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LifecycleActionToken"><code>LifecycleActionToken</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a></td>
    <td>Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the PutLifecycleHook API call. This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group: (Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook. (Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook. (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target. Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate. If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state. If you finish before the timeout period ends, send a callback by using the CompleteLifecycleAction API call. For more information, see Amazon EC2 Auto Scaling lifecycle hooks in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#resume_processes"><CopyableCode code="resume_processes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ScalingProcesses"><code>ScalingProcesses</code></a></td>
    <td>Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group. For more information, see Suspend and resume Amazon EC2 Auto Scaling processes in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#rollback_instance_refresh"><CopyableCode code="rollback_instance_refresh" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels an instance refresh that is in progress and rolls back any changes that it made. Amazon EC2 Auto Scaling replaces any instances that were replaced during the instance refresh. This restores your Auto Scaling group to the configuration that it was using before the start of the instance refresh. This operation is part of the instance refresh feature in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes. A rollback is not supported in the following situations: There is no desired configuration specified for the instance refresh. The Auto Scaling group has a launch template that uses an Amazon Web Services Systems Manager parameter instead of an AMI ID for the ImageId property. The Auto Scaling group uses the launch template's $Latest or $Default version. When you receive a successful response from this operation, Amazon EC2 Auto Scaling immediately begins replacing instances. You can check the status of this operation through the DescribeInstanceRefreshes API operation.</td>
</tr>
<tr>
    <td><a href="#start_instance_refresh"><CopyableCode code="start_instance_refresh" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Strategy"><code>Strategy</code></a>, <a href="#parameter-DesiredConfiguration"><code>DesiredConfiguration</code></a>, <a href="#parameter-Preferences"><code>Preferences</code></a></td>
    <td>Starts an instance refresh. This operation is part of the instance refresh feature in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group. This feature is helpful, for example, when you have a new AMI or a new user data script. You just need to create a new launch template that specifies the new AMI or user data script. Then start an instance refresh to immediately begin the process of updating instances in the group. If successful, the request's response contains a unique ID that you can use to track the progress of the instance refresh. To query its status, call the DescribeInstanceRefreshes API. To describe the instance refreshes that have already run, call the DescribeInstanceRefreshes API. To cancel an instance refresh that is in progress, use the CancelInstanceRefresh API. An instance refresh might fail for several reasons, such as EC2 launch failures, misconfigured health checks, or not ignoring or allowing the termination of instances that are in Standby state or protected from scale in. You can monitor for failed EC2 launches using the scaling activities. To find the scaling activities, call the DescribeScalingActivities API. If you enable auto rollback, your Auto Scaling group will be rolled back automatically when the instance refresh fails. You can enable this feature before starting an instance refresh by specifying the AutoRollback property in the instance refresh preferences. Otherwise, to roll back an instance refresh before it finishes, use the RollbackInstanceRefresh API.</td>
</tr>
<tr>
    <td><a href="#suspend_processes"><CopyableCode code="suspend_processes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ScalingProcesses"><code>ScalingProcesses</code></a></td>
    <td>Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group. If you suspend either the Launch or Terminate process types, it can prevent other process types from functioning properly. For more information, see Suspend and resume Amazon EC2 Auto Scaling processes in the Amazon EC2 Auto Scaling User Guide. To resume processes that have been suspended, call the ResumeProcesses API.</td>
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
<tr id="parameter-AutoScalingGroupName">
    <td><CopyableCode code="AutoScalingGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the Auto Scaling group.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure idempotency of the request.</td>
</tr>
<tr id="parameter-DesiredCapacity">
    <td><CopyableCode code="DesiredCapacity" /></td>
    <td><code>integer</code></td>
    <td>The desired capacity is the initial capacity of the Auto Scaling group after this operation completes and the capacity it attempts to maintain.</td>
</tr>
<tr id="parameter-Granularity">
    <td><CopyableCode code="Granularity" /></td>
    <td><code>string</code></td>
    <td>The frequency at which Amazon EC2 Auto Scaling sends aggregated data to CloudWatch. The only valid value is 1Minute.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr id="parameter-InstanceIds">
    <td><CopyableCode code="InstanceIds" /></td>
    <td><code>array</code></td>
    <td>One or more instance IDs. You can specify up to 50 instances.</td>
</tr>
<tr id="parameter-LifecycleActionResult">
    <td><CopyableCode code="LifecycleActionResult" /></td>
    <td><code>string</code></td>
    <td>The action for the group to take. You can specify either CONTINUE or ABANDON.</td>
</tr>
<tr id="parameter-LifecycleHookName">
    <td><CopyableCode code="LifecycleHookName" /></td>
    <td><code>string</code></td>
    <td>The name of the lifecycle hook.</td>
</tr>
<tr id="parameter-MaxSize">
    <td><CopyableCode code="MaxSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum size of the group. With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above MaxSize to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above MaxSize by more than your largest instance weight (weights that define how many units each instance contributes to the desired capacity of the group).</td>
</tr>
<tr id="parameter-MinSize">
    <td><CopyableCode code="MinSize" /></td>
    <td><code>integer</code></td>
    <td>The minimum size of the group.</td>
</tr>
<tr id="parameter-ProtectedFromScaleIn">
    <td><CopyableCode code="ProtectedFromScaleIn" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in.</td>
</tr>
<tr id="parameter-RequestedCapacity">
    <td><CopyableCode code="RequestedCapacity" /></td>
    <td><code>integer</code></td>
    <td>The number of instances to launch. Although this value can exceed 100 for instance weights, the actual instance count is limited to 100 instances per launch.</td>
</tr>
<tr id="parameter-ScheduledActionName">
    <td><CopyableCode code="ScheduledActionName" /></td>
    <td><code>string</code></td>
    <td>The name of this scaling action.</td>
</tr>
<tr id="parameter-ScheduledActionNames">
    <td><CopyableCode code="ScheduledActionNames" /></td>
    <td><code>array</code></td>
    <td>The names of the scheduled actions to delete. The maximum number allowed is 50.</td>
</tr>
<tr id="parameter-ScheduledUpdateGroupActions">
    <td><CopyableCode code="ScheduledUpdateGroupActions" /></td>
    <td><code>array</code></td>
    <td>One or more scheduled actions. The maximum number allowed is 50.</td>
</tr>
<tr id="parameter-ShouldDecrementDesiredCapacity">
    <td><CopyableCode code="ShouldDecrementDesiredCapacity" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to decrement the desired capacity of the Auto Scaling group by the number of instances moved to Standby mode.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AutoScalingGroupNames">
    <td><CopyableCode code="AutoScalingGroupNames" /></td>
    <td><code>array</code></td>
    <td>The names of the Auto Scaling groups. By default, you can only specify up to 50 names. You can optionally increase this limit using the MaxRecords property. If you omit this property, all Auto Scaling groups are described.</td>
</tr>
<tr id="parameter-AvailabilityZoneDistribution">
    <td><CopyableCode code="AvailabilityZoneDistribution" /></td>
    <td><code>object</code></td>
    <td>The instance capacity distribution across Availability Zones.</td>
</tr>
<tr id="parameter-AvailabilityZoneIds">
    <td><CopyableCode code="AvailabilityZoneIds" /></td>
    <td><code>array</code></td>
    <td>A list of Availability Zone IDs where instances should be launched. Must match or be included in the group's AZ configuration. You cannot specify both AvailabilityZones and AvailabilityZoneIds. Required for multi-AZ groups, optional for single-AZ groups.</td>
</tr>
<tr id="parameter-AvailabilityZoneImpairmentPolicy">
    <td><CopyableCode code="AvailabilityZoneImpairmentPolicy" /></td>
    <td><code>object</code></td>
    <td>The policy for Availability Zone impairment.</td>
</tr>
<tr id="parameter-AvailabilityZones">
    <td><CopyableCode code="AvailabilityZones" /></td>
    <td><code>array</code></td>
    <td>The Availability Zones for the instance launch. Must match or be included in the Auto Scaling group's Availability Zone configuration. Either AvailabilityZones or SubnetIds must be specified for groups with multiple Availability Zone configurations.</td>
</tr>
<tr id="parameter-CapacityRebalance">
    <td><CopyableCode code="CapacityRebalance" /></td>
    <td><code>boolean</code></td>
    <td>Enables or disables Capacity Rebalancing. If Capacity Rebalancing is disabled, proactive replacement of at-risk Spot Instances does not occur. For more information, see Capacity Rebalancing in Auto Scaling to replace at-risk Spot Instances in the Amazon EC2 Auto Scaling User Guide. To suspend rebalancing across Availability Zones, use the SuspendProcesses API.</td>
</tr>
<tr id="parameter-CapacityReservationSpecification">
    <td><CopyableCode code="CapacityReservationSpecification" /></td>
    <td><code>object</code></td>
    <td>The capacity reservation specification for the Auto Scaling group.</td>
</tr>
<tr id="parameter-Context">
    <td><CopyableCode code="Context" /></td>
    <td><code>string</code></td>
    <td>Reserved.</td>
</tr>
<tr id="parameter-DefaultCooldown">
    <td><CopyableCode code="DefaultCooldown" /></td>
    <td><code>integer</code></td>
    <td>Only needed if you use simple scaling policies. The amount of time, in seconds, between one scaling activity ending and another one starting due to simple scaling policies. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-DefaultInstanceWarmup">
    <td><CopyableCode code="DefaultInstanceWarmup" /></td>
    <td><code>integer</code></td>
    <td>The amount of time, in seconds, until a new instance is considered to have finished initializing and resource consumption to become stable after it enters the InService state. During an instance refresh, Amazon EC2 Auto Scaling waits for the warm-up period after it replaces an instance before it moves on to replacing the next instance. Amazon EC2 Auto Scaling also waits for the warm-up period before aggregating the metrics for new instances with existing instances in the Amazon CloudWatch metrics that are used for scaling, resulting in more reliable usage data. For more information, see Set the default instance warmup for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. To manage various warm-up settings at the group level, we recommend that you set the default instance warmup, even if it is set to 0 seconds. To remove a value that you previously set, include the property but specify -1 for the value. However, we strongly recommend keeping the default instance warmup enabled by specifying a value of 0 or other nominal value.</td>
</tr>
<tr id="parameter-DeletionProtection">
    <td><CopyableCode code="DeletionProtection" /></td>
    <td><code>string</code></td>
    <td>The deletion protection setting for the Auto Scaling group. This setting helps safeguard your Auto Scaling group and its instances by controlling whether the DeleteAutoScalingGroup operation is allowed. When deletion protection is enabled, users cannot delete the Auto Scaling group according to the specified protection level until the setting is changed back to a less restrictive level. The valid values are none, prevent-force-deletion, and prevent-all-deletion. Default: none For more information, see Configure deletion protection for your Amazon EC2 Auto Scaling resources in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-DesiredCapacity">
    <td><CopyableCode code="DesiredCapacity" /></td>
    <td><code>integer</code></td>
    <td>The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain. It can scale beyond this capacity if you add more scaling conditions. You must specify at least one of the following properties: MaxSize, MinSize, or DesiredCapacity.</td>
</tr>
<tr id="parameter-DesiredCapacityType">
    <td><CopyableCode code="DesiredCapacityType" /></td>
    <td><code>string</code></td>
    <td>The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports DesiredCapacityType for attribute-based instance type selection only. For more information, see Create a mixed instances group using attribute-based instance type selection in the Amazon EC2 Auto Scaling User Guide. By default, Amazon EC2 Auto Scaling specifies units, which translates into number of instances. Valid values: units | vcpu | memory-mib</td>
</tr>
<tr id="parameter-DesiredConfiguration">
    <td><CopyableCode code="DesiredConfiguration" /></td>
    <td><code>object</code></td>
    <td>The desired configuration. For example, the desired configuration can specify a new launch template or a new version of the current launch template. Once the instance refresh succeeds, Amazon EC2 Auto Scaling updates the settings of the Auto Scaling group to reflect the new desired configuration. When you specify a new launch template or a new version of the current launch template for your desired configuration, consider enabling the SkipMatching property in preferences. If it's enabled, Amazon EC2 Auto Scaling skips replacing instances that already use the specified launch template and instance types. This can help you reduce the number of replacements that are required to apply updates.</td>
</tr>
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time for the recurring schedule to end, in UTC. For example, "2021-06-01T00:00:00Z".</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>One or more filters to limit the results based on specific tags.</td>
</tr>
<tr id="parameter-ForceDelete">
    <td><CopyableCode code="ForceDelete" /></td>
    <td><code>boolean</code></td>
    <td>Specifies that the group is to be deleted along with all instances associated with the group, without waiting for all instances to be terminated. This action also deletes any outstanding lifecycle actions associated with the group.</td>
</tr>
<tr id="parameter-HealthCheckGracePeriod">
    <td><CopyableCode code="HealthCheckGracePeriod" /></td>
    <td><code>integer</code></td>
    <td>The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service and marking it unhealthy due to a failed health check. This is useful if your instances do not immediately pass their health checks after they enter the InService state. For more information, see Set the health check grace period for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-HealthCheckType">
    <td><CopyableCode code="HealthCheckType" /></td>
    <td><code>string</code></td>
    <td>A comma-separated value string of one or more health check types. The valid values are EC2, EBS, ELB, and VPC_LATTICE. EC2 is the default health check and cannot be disabled. For more information, see Health checks for instances in an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. Only specify EC2 if you must clear a value that was previously set.</td>
</tr>
<tr id="parameter-HonorCooldown">
    <td><CopyableCode code="HonorCooldown" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before initiating a scaling activity to set your Auto Scaling group to its new capacity. By default, Amazon EC2 Auto Scaling does not honor the cooldown period during manual scaling activities.</td>
</tr>
<tr id="parameter-IncludeInstances">
    <td><CopyableCode code="IncludeInstances" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to include information about Amazon EC2 instances in the response. When set to true (default), the response includes instance details.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr id="parameter-InstanceIds">
    <td><CopyableCode code="InstanceIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the instances. You can specify up to 20 instances.</td>
</tr>
<tr id="parameter-InstanceLifecyclePolicy">
    <td><CopyableCode code="InstanceLifecyclePolicy" /></td>
    <td><code>object</code></td>
    <td>The instance lifecycle policy for the Auto Scaling group. This policy controls instance behavior when an instance transitions through its lifecycle states. Configure retention triggers to specify when instances should move to a Retained state instead of automatic termination. For more information, see Control instance retention with instance lifecycle policies in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-InstanceMaintenancePolicy">
    <td><CopyableCode code="InstanceMaintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>An instance maintenance policy. For more information, see Set instance maintenance policy in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-LaunchConfigurationName">
    <td><CopyableCode code="LaunchConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The name of the launch configuration. If you specify LaunchConfigurationName in your update request, you can't specify LaunchTemplate or MixedInstancesPolicy.</td>
</tr>
<tr id="parameter-LaunchTemplate">
    <td><CopyableCode code="LaunchTemplate" /></td>
    <td><code>object</code></td>
    <td>The launch template and version to use to specify the updates. If you specify LaunchTemplate in your update request, you can't specify LaunchConfigurationName or MixedInstancesPolicy.</td>
</tr>
<tr id="parameter-LifecycleActionToken">
    <td><CopyableCode code="LifecycleActionToken" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a specific lifecycle action associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target that you specified when you created the lifecycle hook.</td>
</tr>
<tr id="parameter-LifecycleHookSpecificationList">
    <td><CopyableCode code="LifecycleHookSpecificationList" /></td>
    <td><code>array</code></td>
    <td>One or more lifecycle hooks to add to the Auto Scaling group before instances are launched.</td>
</tr>
<tr id="parameter-LoadBalancerNames">
    <td><CopyableCode code="LoadBalancerNames" /></td>
    <td><code>array</code></td>
    <td>A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load Balancers, Network Load Balancers, and Gateway Load Balancers, specify the TargetGroupARNs property instead.</td>
</tr>
<tr id="parameter-MaxInstanceLifetime">
    <td><CopyableCode code="MaxInstanceLifetime" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). To clear a previously set value, specify a new value of 0. For more information, see Replacing Auto Scaling instances based on maximum instance lifetime in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return with this call. The default value is 50 and the maximum value is 100.</td>
</tr>
<tr id="parameter-MaxSize">
    <td><CopyableCode code="MaxSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum size of the Auto Scaling group.</td>
</tr>
<tr id="parameter-Metrics">
    <td><CopyableCode code="Metrics" /></td>
    <td><code>array</code></td>
    <td>Identifies the metrics to enable. You can specify one or more of the following metrics: GroupMinSize GroupMaxSize GroupDesiredCapacity GroupInServiceInstances GroupPendingInstances GroupStandbyInstances GroupTerminatingInstances GroupTotalInstances GroupInServiceCapacity GroupPendingCapacity GroupStandbyCapacity GroupTerminatingCapacity GroupTotalCapacity WarmPoolDesiredCapacity WarmPoolWarmedCapacity WarmPoolPendingCapacity WarmPoolTerminatingCapacity WarmPoolTotalCapacity GroupAndWarmPoolDesiredCapacity GroupAndWarmPoolTotalCapacity If you specify Granularity and don't specify any metrics, all metrics are enabled. For more information, see Amazon CloudWatch metrics for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-MinSize">
    <td><CopyableCode code="MinSize" /></td>
    <td><code>integer</code></td>
    <td>The minimum size of the Auto Scaling group.</td>
</tr>
<tr id="parameter-MixedInstancesPolicy">
    <td><CopyableCode code="MixedInstancesPolicy" /></td>
    <td><code>object</code></td>
    <td>The mixed instances policy. For more information, see Auto Scaling groups with multiple instance types and purchase options in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-NewInstancesProtectedFromScaleIn">
    <td><CopyableCode code="NewInstancesProtectedFromScaleIn" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see Use instance scale-in protection in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-PlacementGroup">
    <td><CopyableCode code="PlacementGroup" /></td>
    <td><code>string</code></td>
    <td>The name of an existing placement group into which to launch your instances. To remove the placement group setting, pass an empty string for placement-group. For more information about placement groups, see Placement groups in the Amazon EC2 User Guide. A cluster placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a cluster placement group.</td>
</tr>
<tr id="parameter-Preferences">
    <td><CopyableCode code="Preferences" /></td>
    <td><code>object</code></td>
    <td>Sets your preferences for the instance refresh so that it performs as expected when you start it. Includes the instance warmup time, the minimum and maximum healthy percentages, and the behaviors that you want Amazon EC2 Auto Scaling to use if instances that are in Standby state or protected from scale in are found. You can also choose to enable additional features, such as the following: Auto rollback Checkpoints CloudWatch alarms Skip matching Bake time</td>
</tr>
<tr id="parameter-Recurrence">
    <td><CopyableCode code="Recurrence" /></td>
    <td><code>string</code></td>
    <td>The recurring schedule for this action. This format consists of five fields separated by white spaces: &#91;Minute&#93; &#91;Hour&#93; &#91;Day_of_Month&#93; &#91;Month_of_Year&#93; &#91;Day_of_Week&#93;. The value must be in quotes (for example, "30 0 1 1,6,12 *"). For more information about this format, see Crontab. When StartTime and EndTime are specified with Recurrence, they form the boundaries of when the recurring action starts and stops. Cron expressions use Universal Coordinated Time (UTC) by default.</td>
</tr>
<tr id="parameter-RetryStrategy">
    <td><CopyableCode code="RetryStrategy" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to retry asynchronously if the synchronous launch fails. Valid values are NONE (default, no async retry) and RETRY_WITH_GROUP_CONFIGURATION (increase desired capacity and retry with group configuration).</td>
</tr>
<tr id="parameter-ScalingProcesses">
    <td><CopyableCode code="ScalingProcesses" /></td>
    <td><code>array</code></td>
    <td>One or more of the following processes: Launch Terminate AddToLoadBalancer AlarmNotification AZRebalance HealthCheck InstanceRefresh ReplaceUnhealthy ScheduledActions If you omit this property, all processes are specified.</td>
</tr>
<tr id="parameter-ServiceLinkedRoleARN">
    <td><CopyableCode code="ServiceLinkedRoleARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other Amazon Web Services on your behalf. For more information, see Service-linked roles in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-SkipZonalShiftValidation">
    <td><CopyableCode code="SkipZonalShiftValidation" /></td>
    <td><code>boolean</code></td>
    <td>If you enable zonal shift with cross-zone disabled load balancers, capacity could become imbalanced across Availability Zones. To skip the validation, specify true. For more information, see Auto Scaling group zonal shift in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time for this action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT only and in quotes (for example, "2021-06-01T00:00:00Z"). If you specify Recurrence and StartTime, Amazon EC2 Auto Scaling performs the action at this time, and then performs the action based on the specified recurrence.</td>
</tr>
<tr id="parameter-Strategy">
    <td><CopyableCode code="Strategy" /></td>
    <td><code>string</code></td>
    <td>The strategy to use for the instance refresh. The default value is Rolling.</td>
</tr>
<tr id="parameter-SubnetIds">
    <td><CopyableCode code="SubnetIds" /></td>
    <td><code>array</code></td>
    <td>The subnet IDs for the instance launch. Either AvailabilityZones or SubnetIds must be specified. If both are specified, the subnets must reside in the specified Availability Zones.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>One or more tags. You can tag your Auto Scaling group and propagate the tags to the Amazon EC2 instances it launches. Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template but use caution. If the launch template specifies an instance tag with a key that is also specified for the Auto Scaling group, Amazon EC2 Auto Scaling overrides the value of that instance tag with the value specified by the Auto Scaling group. For more information, see Tag Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-TargetGroupARNs">
    <td><CopyableCode code="TargetGroupARNs" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARN) of the Elastic Load Balancing target groups to associate with the Auto Scaling group. Instances are registered as targets with the target groups. The target groups receive incoming traffic and route requests to one or more registered targets. For more information, see Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-TerminationPolicies">
    <td><CopyableCode code="TerminationPolicies" /></td>
    <td><code>array</code></td>
    <td>A policy or a list of policies that are used to select the instances to terminate. The policies are executed in the order that you list them. For more information, see Configure termination policies for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. Valid values: Default | AllocationStrategy | ClosestToNextInstanceHour | NewestInstance | OldestInstance | OldestLaunchConfiguration | OldestLaunchTemplate | arn:aws:lambda:region:account-id:function:my-function:my-alias</td>
</tr>
<tr id="parameter-Time">
    <td><CopyableCode code="Time" /></td>
    <td><code>string (date-time)</code></td>
    <td>This property is no longer used.</td>
</tr>
<tr id="parameter-TimeZone">
    <td><CopyableCode code="TimeZone" /></td>
    <td><code>string</code></td>
    <td>Specifies the time zone for a cron expression. If a time zone is not provided, UTC is used by default. Valid values are the canonical names of the IANA time zones, derived from the IANA Time Zone Database (such as Etc/GMT+9 or Pacific/Tahiti). For more information, see https:​//en.wikipedia.org/wiki/List_of_tz_database_time_zones.</td>
</tr>
<tr id="parameter-TrafficSources">
    <td><CopyableCode code="TrafficSources" /></td>
    <td><code>array</code></td>
    <td>The list of traffic sources to attach to this Auto Scaling group. You can use any of the following as traffic sources for an Auto Scaling group: Classic Load Balancer, Application Load Balancer, Gateway Load Balancer, Network Load Balancer, and VPC Lattice.</td>
</tr>
<tr id="parameter-VPCZoneIdentifier">
    <td><CopyableCode code="VPCZoneIdentifier" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of subnet IDs for a virtual private cloud (VPC). If you specify VPCZoneIdentifier with AvailabilityZones, the subnets that you specify must reside in those Availability Zones.</td>
</tr>
<tr id="parameter-WaitForTransitioningInstances">
    <td><CopyableCode code="WaitForTransitioningInstances" /></td>
    <td><code>boolean</code></td>
    <td>When cancelling an instance refresh, this indicates whether to wait for in-flight launches and terminations to complete. The default is true. When set to false, Amazon EC2 Auto Scaling cancels the instance refresh without waiting for any pending launches or terminations to complete.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_auto_scaling_groups"
    values={[
        { label: 'describe_auto_scaling_groups', value: 'describe_auto_scaling_groups' }
    ]}
>
<TabItem value="describe_auto_scaling_groups">

Gets information about the Auto Scaling groups in the account and Region. If you specify Auto Scaling group names, the output includes information for only the specified Auto Scaling groups. If you specify filters, the output includes information for only those Auto Scaling groups that meet the filter criteria. If you do not specify group names or filters, the output includes information for all Auto Scaling groups. This operation also returns information about instances in Auto Scaling groups. To retrieve information about the instances in a warm pool, you must call the DescribeWarmPool API.

```sql
SELECT
auto_scaling_group_arn,
auto_scaling_group_name,
availability_zone_distribution,
availability_zone_ids,
availability_zone_impairment_policy,
availability_zones,
capacity_rebalance,
capacity_reservation_specification,
context,
created_time,
default_cooldown,
default_instance_warmup,
deletion_protection,
desired_capacity,
desired_capacity_type,
enabled_metrics,
health_check_grace_period,
health_check_type,
instance_lifecycle_policy,
instance_maintenance_policy,
instances,
launch_configuration_name,
launch_template,
load_balancer_names,
max_instance_lifetime,
max_size,
min_size,
mixed_instances_policy,
new_instances_protected_from_scale_in,
placement_group,
predicted_capacity,
service_linked_role_arn,
status,
suspended_processes,
tags,
target_group_arns,
termination_policies,
traffic_sources,
vpc_zone_identifier,
warm_pool_configuration,
warm_pool_size
FROM aws.autoscaling.auto_scaling_groups
WHERE region = '{{ region }}' -- required
AND AutoScalingGroupNames = '{{ AutoScalingGroupNames }}'
AND IncludeInstances = '{{ IncludeInstances }}'
AND NextToken = '{{ NextToken }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Filters = '{{ Filters }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_auto_scaling_group"
    values={[
        { label: 'create_auto_scaling_group', value: 'create_auto_scaling_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_auto_scaling_group">

We strongly recommend using a launch template when calling this operation to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2. Creates an Auto Scaling group with the specified name and attributes. If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit, call the DescribeAccountLimits API. For information about updating this limit, see Quotas for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. If you're new to Amazon EC2 Auto Scaling, see the introductory tutorials in Get started with Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. Every Auto Scaling group has three size properties (DesiredCapacity, MaxSize, and MinSize). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.

```sql
INSERT INTO aws.autoscaling.auto_scaling_groups (
AutoScalingGroupName,
MinSize,
MaxSize,
region,
LaunchConfigurationName,
LaunchTemplate,
MixedInstancesPolicy,
InstanceId,
DesiredCapacity,
DefaultCooldown,
AvailabilityZones,
AvailabilityZoneIds,
LoadBalancerNames,
TargetGroupARNs,
HealthCheckType,
HealthCheckGracePeriod,
PlacementGroup,
VPCZoneIdentifier,
TerminationPolicies,
NewInstancesProtectedFromScaleIn,
CapacityRebalance,
LifecycleHookSpecificationList,
DeletionProtection,
Tags,
ServiceLinkedRoleARN,
MaxInstanceLifetime,
Context,
DesiredCapacityType,
DefaultInstanceWarmup,
TrafficSources,
InstanceMaintenancePolicy,
AvailabilityZoneDistribution,
AvailabilityZoneImpairmentPolicy,
SkipZonalShiftValidation,
CapacityReservationSpecification,
InstanceLifecyclePolicy
)
SELECT 
'{{ AutoScalingGroupName }}',
'{{ MinSize }}',
'{{ MaxSize }}',
'{{ region }}',
'{{ LaunchConfigurationName }}',
'{{ LaunchTemplate }}',
'{{ MixedInstancesPolicy }}',
'{{ InstanceId }}',
'{{ DesiredCapacity }}',
'{{ DefaultCooldown }}',
'{{ AvailabilityZones }}',
'{{ AvailabilityZoneIds }}',
'{{ LoadBalancerNames }}',
'{{ TargetGroupARNs }}',
'{{ HealthCheckType }}',
'{{ HealthCheckGracePeriod }}',
'{{ PlacementGroup }}',
'{{ VPCZoneIdentifier }}',
'{{ TerminationPolicies }}',
'{{ NewInstancesProtectedFromScaleIn }}',
'{{ CapacityRebalance }}',
'{{ LifecycleHookSpecificationList }}',
'{{ DeletionProtection }}',
'{{ Tags }}',
'{{ ServiceLinkedRoleARN }}',
'{{ MaxInstanceLifetime }}',
'{{ Context }}',
'{{ DesiredCapacityType }}',
'{{ DefaultInstanceWarmup }}',
'{{ TrafficSources }}',
'{{ InstanceMaintenancePolicy }}',
'{{ AvailabilityZoneDistribution }}',
'{{ AvailabilityZoneImpairmentPolicy }}',
'{{ SkipZonalShiftValidation }}',
'{{ CapacityReservationSpecification }}',
'{{ InstanceLifecyclePolicy }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: auto_scaling_groups
  props:
    - name: AutoScalingGroupName
      value: "{{ AutoScalingGroupName }}"
      description: Required parameter for the auto_scaling_groups resource.
    - name: MinSize
      value: {{ MinSize }}
      description: Required parameter for the auto_scaling_groups resource.
    - name: MaxSize
      value: {{ MaxSize }}
      description: Required parameter for the auto_scaling_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the auto_scaling_groups resource.
    - name: LaunchConfigurationName
      value: "{{ LaunchConfigurationName }}"
      description: The name of the launch configuration to use to launch instances. Conditional: You must specify either a launch template (LaunchTemplate or MixedInstancesPolicy) or a launch configuration (LaunchConfigurationName or InstanceId).
      description: The name of the launch configuration to use to launch instances. Conditional: You must specify either a launch template (LaunchTemplate or MixedInstancesPolicy) or a launch configuration (LaunchConfigurationName or InstanceId).
    - name: LaunchTemplate
      value: "{{ LaunchTemplate }}"
      description: Information used to specify the launch template and version to use to launch instances. Conditional: You must specify either a launch template (LaunchTemplate or MixedInstancesPolicy) or a launch configuration (LaunchConfigurationName or InstanceId). The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see Create a launch template for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.
      description: Information used to specify the launch template and version to use to launch instances. Conditional: You must specify either a launch template (LaunchTemplate or MixedInstancesPolicy) or a launch configuration (LaunchConfigurationName or InstanceId). The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see Create a launch template for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.
    - name: MixedInstancesPolicy
      value: "{{ MixedInstancesPolicy }}"
      description: The mixed instances policy. For more information, see Auto Scaling groups with multiple instance types and purchase options in the Amazon EC2 Auto Scaling User Guide.
      description: The mixed instances policy. For more information, see Auto Scaling groups with multiple instance types and purchase options in the Amazon EC2 Auto Scaling User Guide.
    - name: InstanceId
      value: "{{ InstanceId }}"
      description: The ID of the instance used to base the launch configuration on. If specified, Amazon EC2 Auto Scaling uses the configuration values from the specified instance to create a new launch configuration. To get the instance ID, use the Amazon EC2 DescribeInstances API operation. For more information, see Create an Auto Scaling group using parameters from an existing instance in the Amazon EC2 Auto Scaling User Guide.
      description: The ID of the instance used to base the launch configuration on. If specified, Amazon EC2 Auto Scaling uses the configuration values from the specified instance to create a new launch configuration. To get the instance ID, use the Amazon EC2 DescribeInstances API operation. For more information, see Create an Auto Scaling group using parameters from an existing instance in the Amazon EC2 Auto Scaling User Guide.
    - name: DesiredCapacity
      value: {{ DesiredCapacity }}
      description: The desired capacity is the initial capacity of the Auto Scaling group at the time of its creation and the capacity it attempts to maintain. It can scale beyond this capacity if you configure auto scaling. This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group. If you do not specify a desired capacity, the default is the minimum size of the group.
      description: The desired capacity is the initial capacity of the Auto Scaling group at the time of its creation and the capacity it attempts to maintain. It can scale beyond this capacity if you configure auto scaling. This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group. If you do not specify a desired capacity, the default is the minimum size of the group.
    - name: DefaultCooldown
      value: {{ DefaultCooldown }}
      description: Only needed if you use simple scaling policies. The amount of time, in seconds, between one scaling activity ending and another one starting due to simple scaling policies. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. Default: 300 seconds
      description: Only needed if you use simple scaling policies. The amount of time, in seconds, between one scaling activity ending and another one starting due to simple scaling policies. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. Default: 300 seconds
    - name: AvailabilityZones
      value: "{{ AvailabilityZones }}"
      description: A list of Availability Zones where instances in the Auto Scaling group can be created. Used for launching into the default VPC subnet in each Availability Zone when not using the VPCZoneIdentifier property, or for attaching a network interface when an existing network interface ID is specified in a launch template.
      description: A list of Availability Zones where instances in the Auto Scaling group can be created. Used for launching into the default VPC subnet in each Availability Zone when not using the VPCZoneIdentifier property, or for attaching a network interface when an existing network interface ID is specified in a launch template.
    - name: AvailabilityZoneIds
      value: "{{ AvailabilityZoneIds }}"
      description: A list of Availability Zone IDs where the Auto Scaling group can launch instances. You cannot specify both AvailabilityZones and AvailabilityZoneIds in the same request.
      description: A list of Availability Zone IDs where the Auto Scaling group can launch instances. You cannot specify both AvailabilityZones and AvailabilityZoneIds in the same request.
    - name: LoadBalancerNames
      value: "{{ LoadBalancerNames }}"
      description: A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load Balancers, Network Load Balancers, and Gateway Load Balancers, specify the TargetGroupARNs property instead.
      description: A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load Balancers, Network Load Balancers, and Gateway Load Balancers, specify the TargetGroupARNs property instead.
    - name: TargetGroupARNs
      value: "{{ TargetGroupARNs }}"
      description: The Amazon Resource Names (ARN) of the Elastic Load Balancing target groups to associate with the Auto Scaling group. Instances are registered as targets with the target groups. The target groups receive incoming traffic and route requests to one or more registered targets. For more information, see Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.
      description: The Amazon Resource Names (ARN) of the Elastic Load Balancing target groups to associate with the Auto Scaling group. Instances are registered as targets with the target groups. The target groups receive incoming traffic and route requests to one or more registered targets. For more information, see Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.
    - name: HealthCheckType
      value: "{{ HealthCheckType }}"
      description: A comma-separated value string of one or more health check types. The valid values are EC2, EBS, ELB, and VPC_LATTICE. EC2 is the default health check and cannot be disabled. For more information, see Health checks for instances in an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. Only specify EC2 if you must clear a value that was previously set.
      description: A comma-separated value string of one or more health check types. The valid values are EC2, EBS, ELB, and VPC_LATTICE. EC2 is the default health check and cannot be disabled. For more information, see Health checks for instances in an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. Only specify EC2 if you must clear a value that was previously set.
    - name: HealthCheckGracePeriod
      value: {{ HealthCheckGracePeriod }}
      description: The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service and marking it unhealthy due to a failed health check. This is useful if your instances do not immediately pass their health checks after they enter the InService state. For more information, see Set the health check grace period for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. Default: 0 seconds
      description: The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service and marking it unhealthy due to a failed health check. This is useful if your instances do not immediately pass their health checks after they enter the InService state. For more information, see Set the health check grace period for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. Default: 0 seconds
    - name: PlacementGroup
      value: "{{ PlacementGroup }}"
      description: The name of the placement group into which to launch your instances. For more information, see Placement groups in the Amazon EC2 User Guide. A cluster placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a cluster placement group.
      description: The name of the placement group into which to launch your instances. For more information, see Placement groups in the Amazon EC2 User Guide. A cluster placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a cluster placement group.
    - name: VPCZoneIdentifier
      value: "{{ VPCZoneIdentifier }}"
      description: A comma-separated list of subnet IDs for a virtual private cloud (VPC) where instances in the Auto Scaling group can be created. If you specify VPCZoneIdentifier with AvailabilityZones, the subnets that you specify must reside in those Availability Zones.
      description: A comma-separated list of subnet IDs for a virtual private cloud (VPC) where instances in the Auto Scaling group can be created. If you specify VPCZoneIdentifier with AvailabilityZones, the subnets that you specify must reside in those Availability Zones.
    - name: TerminationPolicies
      value: "{{ TerminationPolicies }}"
      description: A policy or a list of policies that are used to select the instance to terminate. These policies are executed in the order that you list them. For more information, see Configure termination policies for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. Valid values: Default | AllocationStrategy | ClosestToNextInstanceHour | NewestInstance | OldestInstance | OldestLaunchConfiguration | OldestLaunchTemplate | arn:aws:lambda:region:account-id:function:my-function:my-alias
      description: A policy or a list of policies that are used to select the instance to terminate. These policies are executed in the order that you list them. For more information, see Configure termination policies for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. Valid values: Default | AllocationStrategy | ClosestToNextInstanceHour | NewestInstance | OldestInstance | OldestLaunchConfiguration | OldestLaunchTemplate | arn:aws:lambda:region:account-id:function:my-function:my-alias
    - name: NewInstancesProtectedFromScaleIn
      value: {{ NewInstancesProtectedFromScaleIn }}
      description: Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see Use instance scale-in protection in the Amazon EC2 Auto Scaling User Guide.
      description: Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see Use instance scale-in protection in the Amazon EC2 Auto Scaling User Guide.
    - name: CapacityRebalance
      value: {{ CapacityRebalance }}
      description: Indicates whether Capacity Rebalancing is enabled. Otherwise, Capacity Rebalancing is disabled. When you turn on Capacity Rebalancing, Amazon EC2 Auto Scaling attempts to launch a Spot Instance whenever Amazon EC2 notifies that a Spot Instance is at an elevated risk of interruption. After launching a new instance, it then terminates an old instance. For more information, see Use Capacity Rebalancing to handle Amazon EC2 Spot Interruptions in the in the Amazon EC2 Auto Scaling User Guide.
      description: Indicates whether Capacity Rebalancing is enabled. Otherwise, Capacity Rebalancing is disabled. When you turn on Capacity Rebalancing, Amazon EC2 Auto Scaling attempts to launch a Spot Instance whenever Amazon EC2 notifies that a Spot Instance is at an elevated risk of interruption. After launching a new instance, it then terminates an old instance. For more information, see Use Capacity Rebalancing to handle Amazon EC2 Spot Interruptions in the in the Amazon EC2 Auto Scaling User Guide.
    - name: LifecycleHookSpecificationList
      value: "{{ LifecycleHookSpecificationList }}"
      description: One or more lifecycle hooks to add to the Auto Scaling group before instances are launched.
      description: One or more lifecycle hooks to add to the Auto Scaling group before instances are launched.
    - name: DeletionProtection
      value: "{{ DeletionProtection }}"
      description: The deletion protection setting for the Auto Scaling group. This setting helps safeguard your Auto Scaling group and its instances by controlling whether the DeleteAutoScalingGroup operation is allowed. When deletion protection is enabled, users cannot delete the Auto Scaling group according to the specified protection level until the setting is changed back to a less restrictive level. The valid values are none, prevent-force-deletion, and prevent-all-deletion. Default: none For more information, see Configure deletion protection for your Amazon EC2 Auto Scaling resources in the Amazon EC2 Auto Scaling User Guide.
      description: The deletion protection setting for the Auto Scaling group. This setting helps safeguard your Auto Scaling group and its instances by controlling whether the DeleteAutoScalingGroup operation is allowed. When deletion protection is enabled, users cannot delete the Auto Scaling group according to the specified protection level until the setting is changed back to a less restrictive level. The valid values are none, prevent-force-deletion, and prevent-all-deletion. Default: none For more information, see Configure deletion protection for your Amazon EC2 Auto Scaling resources in the Amazon EC2 Auto Scaling User Guide.
    - name: Tags
      value: "{{ Tags }}"
      description: One or more tags. You can tag your Auto Scaling group and propagate the tags to the Amazon EC2 instances it launches. Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template but use caution. If the launch template specifies an instance tag with a key that is also specified for the Auto Scaling group, Amazon EC2 Auto Scaling overrides the value of that instance tag with the value specified by the Auto Scaling group. For more information, see Tag Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide.
      description: One or more tags. You can tag your Auto Scaling group and propagate the tags to the Amazon EC2 instances it launches. Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template but use caution. If the launch template specifies an instance tag with a key that is also specified for the Auto Scaling group, Amazon EC2 Auto Scaling overrides the value of that instance tag with the value specified by the Auto Scaling group. For more information, see Tag Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide.
    - name: ServiceLinkedRoleARN
      value: "{{ ServiceLinkedRoleARN }}"
      description: The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other Amazon Web Services service on your behalf. By default, Amazon EC2 Auto Scaling uses a service-linked role named AWSServiceRoleForAutoScaling, which it creates if it does not exist. For more information, see Service-linked roles in the Amazon EC2 Auto Scaling User Guide.
      description: The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other Amazon Web Services service on your behalf. By default, Amazon EC2 Auto Scaling uses a service-linked role named AWSServiceRoleForAutoScaling, which it creates if it does not exist. For more information, see Service-linked roles in the Amazon EC2 Auto Scaling User Guide.
    - name: MaxInstanceLifetime
      value: {{ MaxInstanceLifetime }}
      description: The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). For more information, see Replace Auto Scaling instances based on maximum instance lifetime in the Amazon EC2 Auto Scaling User Guide.
      description: The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). For more information, see Replace Auto Scaling instances based on maximum instance lifetime in the Amazon EC2 Auto Scaling User Guide.
    - name: Context
      value: "{{ Context }}"
      description: Reserved.
      description: Reserved.
    - name: DesiredCapacityType
      value: "{{ DesiredCapacityType }}"
      description: The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports DesiredCapacityType for attribute-based instance type selection only. For more information, see Create a mixed instances group using attribute-based instance type selection in the Amazon EC2 Auto Scaling User Guide. By default, Amazon EC2 Auto Scaling specifies units, which translates into number of instances. Valid values: units | vcpu | memory-mib
      description: The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports DesiredCapacityType for attribute-based instance type selection only. For more information, see Create a mixed instances group using attribute-based instance type selection in the Amazon EC2 Auto Scaling User Guide. By default, Amazon EC2 Auto Scaling specifies units, which translates into number of instances. Valid values: units | vcpu | memory-mib
    - name: DefaultInstanceWarmup
      value: {{ DefaultInstanceWarmup }}
      description: The amount of time, in seconds, until a new instance is considered to have finished initializing and resource consumption to become stable after it enters the InService state. During an instance refresh, Amazon EC2 Auto Scaling waits for the warm-up period after it replaces an instance before it moves on to replacing the next instance. Amazon EC2 Auto Scaling also waits for the warm-up period before aggregating the metrics for new instances with existing instances in the Amazon CloudWatch metrics that are used for scaling, resulting in more reliable usage data. For more information, see Set the default instance warmup for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. To manage various warm-up settings at the group level, we recommend that you set the default instance warmup, even if it is set to 0 seconds. To remove a value that you previously set, include the property but specify -1 for the value. However, we strongly recommend keeping the default instance warmup enabled by specifying a value of 0 or other nominal value. Default: None
      description: The amount of time, in seconds, until a new instance is considered to have finished initializing and resource consumption to become stable after it enters the InService state. During an instance refresh, Amazon EC2 Auto Scaling waits for the warm-up period after it replaces an instance before it moves on to replacing the next instance. Amazon EC2 Auto Scaling also waits for the warm-up period before aggregating the metrics for new instances with existing instances in the Amazon CloudWatch metrics that are used for scaling, resulting in more reliable usage data. For more information, see Set the default instance warmup for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. To manage various warm-up settings at the group level, we recommend that you set the default instance warmup, even if it is set to 0 seconds. To remove a value that you previously set, include the property but specify -1 for the value. However, we strongly recommend keeping the default instance warmup enabled by specifying a value of 0 or other nominal value. Default: None
    - name: TrafficSources
      value: "{{ TrafficSources }}"
      description: The list of traffic sources to attach to this Auto Scaling group. You can use any of the following as traffic sources for an Auto Scaling group: Classic Load Balancer, Application Load Balancer, Gateway Load Balancer, Network Load Balancer, and VPC Lattice.
      description: The list of traffic sources to attach to this Auto Scaling group. You can use any of the following as traffic sources for an Auto Scaling group: Classic Load Balancer, Application Load Balancer, Gateway Load Balancer, Network Load Balancer, and VPC Lattice.
    - name: InstanceMaintenancePolicy
      value: "{{ InstanceMaintenancePolicy }}"
      description: An instance maintenance policy. For more information, see Set instance maintenance policy in the Amazon EC2 Auto Scaling User Guide.
      description: An instance maintenance policy. For more information, see Set instance maintenance policy in the Amazon EC2 Auto Scaling User Guide.
    - name: AvailabilityZoneDistribution
      value: "{{ AvailabilityZoneDistribution }}"
      description: The instance capacity distribution across Availability Zones.
      description: The instance capacity distribution across Availability Zones.
    - name: AvailabilityZoneImpairmentPolicy
      value: "{{ AvailabilityZoneImpairmentPolicy }}"
      description: The policy for Availability Zone impairment.
      description: The policy for Availability Zone impairment.
    - name: SkipZonalShiftValidation
      value: {{ SkipZonalShiftValidation }}
      description: If you enable zonal shift with cross-zone disabled load balancers, capacity could become imbalanced across Availability Zones. To skip the validation, specify true. For more information, see Auto Scaling group zonal shift in the Amazon EC2 Auto Scaling User Guide.
      description: If you enable zonal shift with cross-zone disabled load balancers, capacity could become imbalanced across Availability Zones. To skip the validation, specify true. For more information, see Auto Scaling group zonal shift in the Amazon EC2 Auto Scaling User Guide.
    - name: CapacityReservationSpecification
      value: "{{ CapacityReservationSpecification }}"
      description: The capacity reservation specification for the Auto Scaling group.
      description: The capacity reservation specification for the Auto Scaling group.
    - name: InstanceLifecyclePolicy
      value: "{{ InstanceLifecyclePolicy }}"
      description: The instance lifecycle policy for the Auto Scaling group. This policy controls instance behavior when an instance transitions through its lifecycle states. Configure retention triggers to specify when instances should move to a Retained state instead of automatic termination. For more information, see Control instance retention with instance lifecycle policies in the Amazon EC2 Auto Scaling User Guide. Instances in a Retained state will continue to incur standard EC2 charges until terminated.
      description: The instance lifecycle policy for the Auto Scaling group. This policy controls instance behavior when an instance transitions through its lifecycle states. Configure retention triggers to specify when instances should move to a Retained state instead of automatic termination. For more information, see Control instance retention with instance lifecycle policies in the Amazon EC2 Auto Scaling User Guide. Instances in a Retained state will continue to incur standard EC2 charges until terminated.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_instance_protection"
    values={[
        { label: 'set_instance_protection', value: 'set_instance_protection' },
        { label: 'detach_instances', value: 'detach_instances' },
        { label: 'set_desired_capacity', value: 'set_desired_capacity' },
        { label: 'update_auto_scaling_group', value: 'update_auto_scaling_group' }
    ]}
>
<TabItem value="set_instance_protection">

Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool. For more information, see Use instance scale-in protection in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.

```sql
UPDATE aws.autoscaling.auto_scaling_groups
SET 
-- No updatable properties
WHERE 
InstanceIds = '{{ InstanceIds }}' --required
AND AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND ProtectedFromScaleIn = '{{ ProtectedFromScaleIn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="detach_instances">

Removes one or more instances from the specified Auto Scaling group. After the instances are detached, you can manage them independent of the Auto Scaling group. If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached. If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups. For more information, see Detach or attach instances in the Amazon EC2 Auto Scaling User Guide.

```sql
UPDATE aws.autoscaling.auto_scaling_groups
SET 
-- No updatable properties
WHERE 
AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND ShouldDecrementDesiredCapacity = '{{ ShouldDecrementDesiredCapacity }}' --required
AND region = '{{ region }}' --required
AND InstanceIds = '{{ InstanceIds}}'
RETURNING
activities;
```
</TabItem>
<TabItem value="set_desired_capacity">

Sets the size of the specified Auto Scaling group. If a scale-in activity occurs as a result of a new DesiredCapacity value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. For more information, see Manual scaling in the Amazon EC2 Auto Scaling User Guide.

```sql
UPDATE aws.autoscaling.auto_scaling_groups
SET 
-- No updatable properties
WHERE 
AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND DesiredCapacity = '{{ DesiredCapacity }}' --required
AND region = '{{ region }}' --required
AND HonorCooldown = {{ HonorCooldown}};
```
</TabItem>
<TabItem value="update_auto_scaling_group">

We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2. Updates the configuration for the specified Auto Scaling group. To update an Auto Scaling group, specify the name of the group and the property that you want to change. Any properties that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns. If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration. Existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application. Note the following about changing DesiredCapacity, MaxSize, or MinSize: If a scale-in activity occurs as a result of a new DesiredCapacity value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. If you specify a new value for MinSize without specifying a value for DesiredCapacity, and the new MinSize is larger than the current size of the group, this sets the group's DesiredCapacity to the new MinSize value. If you specify a new value for MaxSize without specifying a value for DesiredCapacity, and the new MaxSize is smaller than the current size of the group, this sets the group's DesiredCapacity to the new MaxSize value. To see which properties have been set, call the DescribeAutoScalingGroups API. To view the scaling policies for an Auto Scaling group, call the DescribePolicies API. If the group has scaling policies, you can update them by calling the PutScalingPolicy API.

```sql
UPDATE aws.autoscaling.auto_scaling_groups
SET 
-- No updatable properties
WHERE 
AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND region = '{{ region }}' --required
AND LaunchConfigurationName = '{{ LaunchConfigurationName}}'
AND LaunchTemplate = '{{ LaunchTemplate}}'
AND MixedInstancesPolicy = '{{ MixedInstancesPolicy}}'
AND MinSize = '{{ MinSize}}'
AND MaxSize = '{{ MaxSize}}'
AND DesiredCapacity = '{{ DesiredCapacity}}'
AND DefaultCooldown = '{{ DefaultCooldown}}'
AND AvailabilityZones = '{{ AvailabilityZones}}'
AND AvailabilityZoneIds = '{{ AvailabilityZoneIds}}'
AND HealthCheckType = '{{ HealthCheckType}}'
AND HealthCheckGracePeriod = '{{ HealthCheckGracePeriod}}'
AND PlacementGroup = '{{ PlacementGroup}}'
AND VPCZoneIdentifier = '{{ VPCZoneIdentifier}}'
AND TerminationPolicies = '{{ TerminationPolicies}}'
AND NewInstancesProtectedFromScaleIn = {{ NewInstancesProtectedFromScaleIn}}
AND ServiceLinkedRoleARN = '{{ ServiceLinkedRoleARN}}'
AND MaxInstanceLifetime = '{{ MaxInstanceLifetime}}'
AND CapacityRebalance = {{ CapacityRebalance}}
AND Context = '{{ Context}}'
AND DesiredCapacityType = '{{ DesiredCapacityType}}'
AND DefaultInstanceWarmup = '{{ DefaultInstanceWarmup}}'
AND InstanceMaintenancePolicy = '{{ InstanceMaintenancePolicy}}'
AND AvailabilityZoneDistribution = '{{ AvailabilityZoneDistribution}}'
AND AvailabilityZoneImpairmentPolicy = '{{ AvailabilityZoneImpairmentPolicy}}'
AND SkipZonalShiftValidation = {{ SkipZonalShiftValidation}}
AND CapacityReservationSpecification = '{{ CapacityReservationSpecification}}'
AND InstanceLifecyclePolicy = '{{ InstanceLifecyclePolicy}}'
AND DeletionProtection = '{{ DeletionProtection}}';
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_scheduled_update_group_action"
    values={[
        { label: 'put_scheduled_update_group_action', value: 'put_scheduled_update_group_action' }
    ]}
>
<TabItem value="put_scheduled_update_group_action">

Creates or updates a scheduled scaling action for an Auto Scaling group. For more information, see Scheduled scaling in the Amazon EC2 Auto Scaling User Guide. You can view the scheduled actions for an Auto Scaling group using the DescribeScheduledActions API call. If you are no longer using a scheduled action, you can delete it by calling the DeleteScheduledAction API. If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error message.

```sql
REPLACE aws.autoscaling.auto_scaling_groups
SET 
-- No updatable properties
WHERE 
AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND ScheduledActionName = '{{ ScheduledActionName }}' --required
AND region = '{{ region }}' --required
AND Time = '{{ Time}}'
AND StartTime = '{{ StartTime}}'
AND EndTime = '{{ EndTime}}'
AND Recurrence = '{{ Recurrence}}'
AND MinSize = '{{ MinSize}}'
AND MaxSize = '{{ MaxSize}}'
AND DesiredCapacity = '{{ DesiredCapacity}}'
AND TimeZone = '{{ TimeZone}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate_instance_in_auto_scaling_group"
    values={[
        { label: 'terminate_instance_in_auto_scaling_group', value: 'terminate_instance_in_auto_scaling_group' },
        { label: 'delete_auto_scaling_group', value: 'delete_auto_scaling_group' }
    ]}
>
<TabItem value="terminate_instance_in_auto_scaling_group">

Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool. This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to terminated. You can't connect to or start an instance after you've terminated it. If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated. By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see Manual scaling in the Amazon EC2 Auto Scaling User Guide.

```sql
DELETE FROM aws.autoscaling.auto_scaling_groups
WHERE InstanceId = '{{ InstanceId }}' --required
AND ShouldDecrementDesiredCapacity = '{{ ShouldDecrementDesiredCapacity }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_auto_scaling_group">

Deletes the specified Auto Scaling group. If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed. The force delete operation will also terminate the EC2 instances. If the group has a warm pool, the force delete option also deletes the warm pool. To remove instances from the Auto Scaling group before deleting it, call the DetachInstances API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances. To terminate all instances before deleting the Auto Scaling group, call the UpdateAutoScalingGroup API and set the minimum size and desired capacity of the Auto Scaling group to zero. If the group has scaling policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action. For more information, see Delete your Auto Scaling infrastructure in the Amazon EC2 Auto Scaling User Guide.

```sql
DELETE FROM aws.autoscaling.auto_scaling_groups
WHERE AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND region = '{{ region }}' --required
AND ForceDelete = '{{ ForceDelete }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="attach_instances"
    values={[
        { label: 'attach_instances', value: 'attach_instances' },
        { label: 'batch_delete_scheduled_action', value: 'batch_delete_scheduled_action' },
        { label: 'batch_put_scheduled_update_group_action', value: 'batch_put_scheduled_update_group_action' },
        { label: 'cancel_instance_refresh', value: 'cancel_instance_refresh' },
        { label: 'complete_lifecycle_action', value: 'complete_lifecycle_action' },
        { label: 'disable_metrics_collection', value: 'disable_metrics_collection' },
        { label: 'enable_metrics_collection', value: 'enable_metrics_collection' },
        { label: 'enter_standby', value: 'enter_standby' },
        { label: 'exit_standby', value: 'exit_standby' },
        { label: 'launch_instances', value: 'launch_instances' },
        { label: 'record_lifecycle_action_heartbeat', value: 'record_lifecycle_action_heartbeat' },
        { label: 'resume_processes', value: 'resume_processes' },
        { label: 'rollback_instance_refresh', value: 'rollback_instance_refresh' },
        { label: 'start_instance_refresh', value: 'start_instance_refresh' },
        { label: 'suspend_processes', value: 'suspend_processes' }
    ]}
>
<TabItem value="attach_instances">

Attaches one or more EC2 instances to the specified Auto Scaling group. When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails. If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups. For more information, see Detach or attach instances in the Amazon EC2 Auto Scaling User Guide.

```sql
EXEC aws.autoscaling.auto_scaling_groups.attach_instances 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@region='{{ region }}' --required, 
@InstanceIds='{{ InstanceIds }}'
;
```
</TabItem>
<TabItem value="batch_delete_scheduled_action">

Deletes one or more scheduled actions for the specified Auto Scaling group.

```sql
EXEC aws.autoscaling.auto_scaling_groups.batch_delete_scheduled_action 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@ScheduledActionNames='{{ ScheduledActionNames }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="batch_put_scheduled_update_group_action">

Creates or updates one or more scheduled scaling actions for an Auto Scaling group.

```sql
EXEC aws.autoscaling.auto_scaling_groups.batch_put_scheduled_update_group_action 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@ScheduledUpdateGroupActions='{{ ScheduledUpdateGroupActions }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="cancel_instance_refresh">

Cancels an instance refresh or rollback that is in progress. If an instance refresh or rollback is not in progress, an ActiveInstanceRefreshNotFound error occurs. This operation is part of the instance refresh feature in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes. When you cancel an instance refresh, this does not roll back any changes that it made. Use the RollbackInstanceRefresh API to roll back instead.

```sql
EXEC aws.autoscaling.auto_scaling_groups.cancel_instance_refresh 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@region='{{ region }}' --required, 
@WaitForTransitioningInstances={{ WaitForTransitioningInstances }}
;
```
</TabItem>
<TabItem value="complete_lifecycle_action">

Completes the lifecycle action for the specified token or instance with the specified result. This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group: (Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook. (Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook. (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target. Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate. If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state. If you finish before the timeout period ends, send a callback by using the CompleteLifecycleAction API call. For more information, see Complete a lifecycle action in the Amazon EC2 Auto Scaling User Guide.

```sql
EXEC aws.autoscaling.auto_scaling_groups.complete_lifecycle_action 
@LifecycleHookName='{{ LifecycleHookName }}' --required, 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@LifecycleActionResult='{{ LifecycleActionResult }}' --required, 
@region='{{ region }}' --required, 
@LifecycleActionToken='{{ LifecycleActionToken }}', 
@InstanceId='{{ InstanceId }}'
;
```
</TabItem>
<TabItem value="disable_metrics_collection">

Disables group metrics collection for the specified Auto Scaling group.

```sql
EXEC aws.autoscaling.auto_scaling_groups.disable_metrics_collection 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@region='{{ region }}' --required, 
@Metrics='{{ Metrics }}'
;
```
</TabItem>
<TabItem value="enable_metrics_collection">

Enables group metrics collection for the specified Auto Scaling group. You can use these metrics to track changes in an Auto Scaling group and to set alarms on threshold values. You can view group metrics using the Amazon EC2 Auto Scaling console or the CloudWatch console. For more information, see Monitor CloudWatch metrics for your Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide.

```sql
EXEC aws.autoscaling.auto_scaling_groups.enable_metrics_collection 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@Granularity='{{ Granularity }}' --required, 
@region='{{ region }}' --required, 
@Metrics='{{ Metrics }}'
;
```
</TabItem>
<TabItem value="enter_standby">

Moves the specified instances into the standby state. If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group. If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby. For more information, see Temporarily removing instances from your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.

```sql
EXEC aws.autoscaling.auto_scaling_groups.enter_standby 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@ShouldDecrementDesiredCapacity='{{ ShouldDecrementDesiredCapacity }}' --required, 
@region='{{ region }}' --required, 
@InstanceIds='{{ InstanceIds }}'
;
```
</TabItem>
<TabItem value="exit_standby">

Moves the specified instances out of the standby state. After you put the instances back in service, the desired capacity is incremented. For more information, see Temporarily removing instances from your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.

```sql
EXEC aws.autoscaling.auto_scaling_groups.exit_standby 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@region='{{ region }}' --required, 
@InstanceIds='{{ InstanceIds }}'
;
```
</TabItem>
<TabItem value="launch_instances">

Launches a specified number of instances in an Auto Scaling group. Returns instance IDs and other details if launch is successful or error details if launch is unsuccessful.

```sql
EXEC aws.autoscaling.auto_scaling_groups.launch_instances 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@RequestedCapacity='{{ RequestedCapacity }}' --required, 
@ClientToken='{{ ClientToken }}' --required, 
@region='{{ region }}' --required, 
@AvailabilityZones='{{ AvailabilityZones }}', 
@AvailabilityZoneIds='{{ AvailabilityZoneIds }}', 
@SubnetIds='{{ SubnetIds }}', 
@RetryStrategy='{{ RetryStrategy }}'
;
```
</TabItem>
<TabItem value="record_lifecycle_action_heartbeat">

Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the PutLifecycleHook API call. This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group: (Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook. (Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook. (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target. Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate. If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state. If you finish before the timeout period ends, send a callback by using the CompleteLifecycleAction API call. For more information, see Amazon EC2 Auto Scaling lifecycle hooks in the Amazon EC2 Auto Scaling User Guide.

```sql
EXEC aws.autoscaling.auto_scaling_groups.record_lifecycle_action_heartbeat 
@LifecycleHookName='{{ LifecycleHookName }}' --required, 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@region='{{ region }}' --required, 
@LifecycleActionToken='{{ LifecycleActionToken }}', 
@InstanceId='{{ InstanceId }}'
;
```
</TabItem>
<TabItem value="resume_processes">

Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group. For more information, see Suspend and resume Amazon EC2 Auto Scaling processes in the Amazon EC2 Auto Scaling User Guide.

```sql
EXEC aws.autoscaling.auto_scaling_groups.resume_processes 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@region='{{ region }}' --required, 
@ScalingProcesses='{{ ScalingProcesses }}'
;
```
</TabItem>
<TabItem value="rollback_instance_refresh">

Cancels an instance refresh that is in progress and rolls back any changes that it made. Amazon EC2 Auto Scaling replaces any instances that were replaced during the instance refresh. This restores your Auto Scaling group to the configuration that it was using before the start of the instance refresh. This operation is part of the instance refresh feature in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes. A rollback is not supported in the following situations: There is no desired configuration specified for the instance refresh. The Auto Scaling group has a launch template that uses an Amazon Web Services Systems Manager parameter instead of an AMI ID for the ImageId property. The Auto Scaling group uses the launch template's $Latest or $Default version. When you receive a successful response from this operation, Amazon EC2 Auto Scaling immediately begins replacing instances. You can check the status of this operation through the DescribeInstanceRefreshes API operation.

```sql
EXEC aws.autoscaling.auto_scaling_groups.rollback_instance_refresh 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="start_instance_refresh">

Starts an instance refresh. This operation is part of the instance refresh feature in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group. This feature is helpful, for example, when you have a new AMI or a new user data script. You just need to create a new launch template that specifies the new AMI or user data script. Then start an instance refresh to immediately begin the process of updating instances in the group. If successful, the request's response contains a unique ID that you can use to track the progress of the instance refresh. To query its status, call the DescribeInstanceRefreshes API. To describe the instance refreshes that have already run, call the DescribeInstanceRefreshes API. To cancel an instance refresh that is in progress, use the CancelInstanceRefresh API. An instance refresh might fail for several reasons, such as EC2 launch failures, misconfigured health checks, or not ignoring or allowing the termination of instances that are in Standby state or protected from scale in. You can monitor for failed EC2 launches using the scaling activities. To find the scaling activities, call the DescribeScalingActivities API. If you enable auto rollback, your Auto Scaling group will be rolled back automatically when the instance refresh fails. You can enable this feature before starting an instance refresh by specifying the AutoRollback property in the instance refresh preferences. Otherwise, to roll back an instance refresh before it finishes, use the RollbackInstanceRefresh API.

```sql
EXEC aws.autoscaling.auto_scaling_groups.start_instance_refresh 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@region='{{ region }}' --required, 
@Strategy='{{ Strategy }}', 
@DesiredConfiguration='{{ DesiredConfiguration }}', 
@Preferences='{{ Preferences }}'
;
```
</TabItem>
<TabItem value="suspend_processes">

Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group. If you suspend either the Launch or Terminate process types, it can prevent other process types from functioning properly. For more information, see Suspend and resume Amazon EC2 Auto Scaling processes in the Amazon EC2 Auto Scaling User Guide. To resume processes that have been suspended, call the ResumeProcesses API.

```sql
EXEC aws.autoscaling.auto_scaling_groups.suspend_processes 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@region='{{ region }}' --required, 
@ScalingProcesses='{{ ScalingProcesses }}'
;
```
</TabItem>
</Tabs>
