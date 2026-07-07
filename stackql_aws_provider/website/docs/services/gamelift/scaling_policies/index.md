--- 
title: scaling_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - scaling_policies
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

Creates, updates, deletes, gets or lists a <code>scaling_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scaling_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.scaling_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scaling_policies"
    values={[
        { label: 'describe_scaling_policies', value: 'describe_scaling_policies' }
    ]}
>
<TabItem value="describe_scaling_policies">

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
    <td><CopyableCode code="ComparisonOperator" /></td>
    <td><code>string</code></td>
    <td>Comparison operator to use when measuring a metric against the threshold value. (GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, LessThanOrEqualToThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationPeriods" /></td>
    <td><code>integer</code></td>
    <td>Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.</td>
</tr>
<tr>
    <td><CopyableCode code="FleetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912. (pattern: &lt;code&gt;^arn:.*:&#91;a-z&#93;*fleet\/&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FleetId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the fleet that is associated with this scaling policy. (pattern: &lt;code&gt;^&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Location" /></td>
    <td><code>string</code></td>
    <td>The fleet location. (pattern: &lt;code&gt;^&#91;A-Za-z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MetricName" /></td>
    <td><code>string</code></td>
    <td>Name of the Amazon GameLift Servers-defined metric that is used to trigger a scaling adjustment. For detailed descriptions of fleet metrics, see Monitor Amazon GameLift Servers with Amazon CloudWatch. ActivatingGameSessions -- Game sessions in the process of being created. ActiveGameSessions -- Game sessions that are currently running. ActiveInstances -- Fleet instances that are currently running at least one game session. AvailableGameSessions -- Additional game sessions that fleet could host simultaneously, given current capacity. AvailablePlayerSessions -- Empty player slots in currently active game sessions. This includes game sessions that are not currently accepting players. Reserved player slots are not included. CurrentPlayerSessions -- Player slots in active game sessions that are being used by a player or are reserved for a player. IdleInstances -- Active instances that are currently hosting zero game sessions. PercentAvailableGameSessions -- Unused percentage of the total number of game sessions that a fleet could host simultaneously, given current capacity. Use this metric for a target-based scaling policy. PercentIdleInstances -- Percentage of the total number of active instances that are hosting zero game sessions. QueueDepth -- Pending game session placement requests, in any queue, where the current fleet is the top-priority destination. WaitTime -- Current wait time for pending game session placement requests, in any queue, where the current fleet is the top-priority destination. (ActivatingGameSessions, ActiveGameSessions, ActiveInstances, AvailableGameSessions, AvailablePlayerSessions, CurrentPlayerSessions, IdleInstances, PercentAvailableGameSessions, PercentIdleInstances, QueueDepth, WaitTime, ConcurrentActivatableGameSessions)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyType" /></td>
    <td><code>string</code></td>
    <td>The type of scaling policy to create. For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment. (RuleBased, TargetBased)</td>
</tr>
<tr>
    <td><CopyableCode code="ScalingAdjustment" /></td>
    <td><code>integer</code></td>
    <td>Amount of adjustment to make, based on the scaling adjustment type.</td>
</tr>
<tr>
    <td><CopyableCode code="ScalingAdjustmentType" /></td>
    <td><code>string</code></td>
    <td>The type of adjustment to make to a fleet's instance count. ChangeInCapacity -- add (or subtract) the scaling adjustment value from the current instance count. Positive values scale up while negative values scale down. ExactCapacity -- set the instance count to the scaling adjustment value. PercentChangeInCapacity -- increase or reduce the current instance count by the scaling adjustment, read as a percentage. Positive values scale up while negative values scale down. (ChangeInCapacity, ExactCapacity, PercentChangeInCapacity)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Current status of the scaling policy. The scaling policy can be in force only when in an ACTIVE status. Scaling policies can be suspended for individual fleets. If the policy is suspended for a fleet, the policy status does not change. ACTIVE -- The scaling policy can be used for auto-scaling a fleet. UPDATE_REQUESTED -- A request to update the scaling policy has been received. UPDATING -- A change is being made to the scaling policy. DELETE_REQUESTED -- A request to delete the scaling policy has been received. DELETING -- The scaling policy is being deleted. DELETED -- The scaling policy has been deleted. ERROR -- An error occurred in creating the policy. It should be removed and recreated. (ACTIVE, UPDATE_REQUESTED, UPDATING, DELETE_REQUESTED, DELETING, DELETED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="TargetConfiguration" /></td>
    <td><code>object</code></td>
    <td>An object that contains settings for a target-based scaling policy.</td>
</tr>
<tr>
    <td><CopyableCode code="Threshold" /></td>
    <td><code>number (double)</code></td>
    <td>Metric value used to trigger a scaling event.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the fleet's scaling policies in a requested fleet location. The status PENDING_UPDATE indicates that an update was requested for the fleet but has not yet been completed for the location. (PENDING_UPDATE)</td>
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
    <td><a href="#describe_scaling_policies"><CopyableCode code="describe_scaling_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Retrieves all scaling policies applied to a fleet. To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of ScalingPolicy objects is returned for the fleet. A fleet may have all of its scaling policies suspended. This operation does not affect the status of the scaling policies, which remains ACTIVE.</td>
</tr>
<tr>
    <td><a href="#put_scaling_policy"><CopyableCode code="put_scaling_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FleetId"><code>FleetId</code></a>, <a href="#parameter-MetricName"><code>MetricName</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Creates or updates a scaling policy for a fleet. Scaling policies are used to automatically scale a fleet's hosting capacity to meet player demand. An active scaling policy instructs Amazon GameLift Servers to track a fleet metric and automatically change the fleet's capacity when a certain threshold is reached. There are two types of scaling policies: target-based and rule-based. Use a target-based policy to quickly and efficiently manage fleet scaling; this option is the most commonly used. Use rule-based policies when you need to exert fine-grained control over auto-scaling. Fleets can have multiple scaling policies of each type in force at the same time; you can have one target-based policy, one or multiple rule-based scaling policies, or both. We recommend caution, however, because multiple auto-scaling policies can have unintended consequences. Learn more about how to work with auto-scaling in Set Up Fleet Automatic Scaling. Target-based policy A target-based policy tracks a single metric: PercentAvailableGameSessions. This metric tells us how much of a fleet's hosting capacity is ready to host game sessions but is not currently in use. This is the fleet's buffer; it measures the additional player demand that the fleet could handle at current capacity. With a target-based policy, you set your ideal buffer size and leave it to Amazon GameLift Servers to take whatever action is needed to maintain that target. For example, you might choose to maintain a 10% buffer for a fleet that has the capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift Servers to take action whenever the fleet's available capacity falls below or rises above 10 game sessions. Amazon GameLift Servers will start new instances or stop unused instances in order to return to the 10% buffer. To create or update a target-based policy, specify a fleet ID and name, and set the policy type to "TargetBased". Specify the metric to track (PercentAvailableGameSessions) and reference a TargetConfiguration object with your desired buffer value. Exclude all other parameters. On a successful request, the policy name is returned. The scaling policy is automatically in force as soon as it's successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted. Rule-based policy A rule-based policy tracks specified fleet metric, sets a threshold value, and specifies the type of action to initiate when triggered. With a rule-based policy, you can select from several available fleet metrics. Each policy specifies whether to scale up or scale down (and by how much), so you need one policy for each type of action. For example, a policy may make the following statement: "If the percentage of idle instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity by 10%." A policy's rule statement has the following structure: If &#91;MetricName&#93; is &#91;ComparisonOperator&#93; &#91;Threshold&#93; for &#91;EvaluationPeriods&#93; minutes, then &#91;ScalingAdjustmentType&#93; to/by &#91;ScalingAdjustment&#93;. To implement the example, the rule statement would look like this: If &#91;PercentIdleInstances&#93; is &#91;GreaterThanThreshold&#93; &#91;20&#93; for &#91;15&#93; minutes, then &#91;PercentChangeInCapacity&#93; to/by &#91;10&#93;. To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the policy type to "RuleBased". Specify the parameter values for a policy rule statement. On a successful request, the policy name is returned. Scaling policies are automatically in force as soon as they're successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</td>
</tr>
<tr>
    <td><a href="#delete_scaling_policy"><CopyableCode code="delete_scaling_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Deletes a fleet scaling policy. Once deleted, the policy is no longer in force and Amazon GameLift Servers removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with. To temporarily suspend scaling policies, use StopFleetActions. This operation suspends all policies for the fleet.</td>
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
    defaultValue="describe_scaling_policies"
    values={[
        { label: 'describe_scaling_policies', value: 'describe_scaling_policies' }
    ]}
>
<TabItem value="describe_scaling_policies">

This API works with the following fleet types: EC2 Retrieves all scaling policies applied to a fleet. To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of ScalingPolicy objects is returned for the fleet. A fleet may have all of its scaling policies suspended. This operation does not affect the status of the scaling policies, which remains ACTIVE.

```sql
SELECT
ComparisonOperator,
EvaluationPeriods,
FleetArn,
FleetId,
Location,
MetricName,
Name,
PolicyType,
ScalingAdjustment,
ScalingAdjustmentType,
Status,
TargetConfiguration,
Threshold,
UpdateStatus
FROM aws.gamelift.scaling_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_scaling_policy"
    values={[
        { label: 'put_scaling_policy', value: 'put_scaling_policy' }
    ]}
>
<TabItem value="put_scaling_policy">

This API works with the following fleet types: EC2 Creates or updates a scaling policy for a fleet. Scaling policies are used to automatically scale a fleet's hosting capacity to meet player demand. An active scaling policy instructs Amazon GameLift Servers to track a fleet metric and automatically change the fleet's capacity when a certain threshold is reached. There are two types of scaling policies: target-based and rule-based. Use a target-based policy to quickly and efficiently manage fleet scaling; this option is the most commonly used. Use rule-based policies when you need to exert fine-grained control over auto-scaling. Fleets can have multiple scaling policies of each type in force at the same time; you can have one target-based policy, one or multiple rule-based scaling policies, or both. We recommend caution, however, because multiple auto-scaling policies can have unintended consequences. Learn more about how to work with auto-scaling in Set Up Fleet Automatic Scaling. Target-based policy A target-based policy tracks a single metric: PercentAvailableGameSessions. This metric tells us how much of a fleet's hosting capacity is ready to host game sessions but is not currently in use. This is the fleet's buffer; it measures the additional player demand that the fleet could handle at current capacity. With a target-based policy, you set your ideal buffer size and leave it to Amazon GameLift Servers to take whatever action is needed to maintain that target. For example, you might choose to maintain a 10% buffer for a fleet that has the capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift Servers to take action whenever the fleet's available capacity falls below or rises above 10 game sessions. Amazon GameLift Servers will start new instances or stop unused instances in order to return to the 10% buffer. To create or update a target-based policy, specify a fleet ID and name, and set the policy type to "TargetBased". Specify the metric to track (PercentAvailableGameSessions) and reference a TargetConfiguration object with your desired buffer value. Exclude all other parameters. On a successful request, the policy name is returned. The scaling policy is automatically in force as soon as it's successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted. Rule-based policy A rule-based policy tracks specified fleet metric, sets a threshold value, and specifies the type of action to initiate when triggered. With a rule-based policy, you can select from several available fleet metrics. Each policy specifies whether to scale up or scale down (and by how much), so you need one policy for each type of action. For example, a policy may make the following statement: "If the percentage of idle instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity by 10%." A policy's rule statement has the following structure: If [MetricName] is [ComparisonOperator] [Threshold] for [EvaluationPeriods] minutes, then [ScalingAdjustmentType] to/by [ScalingAdjustment]. To implement the example, the rule statement would look like this: If [PercentIdleInstances] is [GreaterThanThreshold] [20] for [15] minutes, then [PercentChangeInCapacity] to/by [10]. To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the policy type to "RuleBased". Specify the parameter values for a policy rule statement. On a successful request, the policy name is returned. Scaling policies are automatically in force as soon as they're successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.

```sql
REPLACE aws.gamelift.scaling_policies
SET 
Name = '{{ Name }}',
FleetId = '{{ FleetId }}',
ScalingAdjustment = {{ ScalingAdjustment }},
ScalingAdjustmentType = '{{ ScalingAdjustmentType }}',
Threshold = {{ Threshold }},
ComparisonOperator = '{{ ComparisonOperator }}',
EvaluationPeriods = {{ EvaluationPeriods }},
MetricName = '{{ MetricName }}',
PolicyType = '{{ PolicyType }}',
TargetConfiguration = '{{ TargetConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND FleetId = '{{ FleetId }}' --required
AND MetricName = '{{ MetricName }}' --required
RETURNING
Name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scaling_policy"
    values={[
        { label: 'delete_scaling_policy', value: 'delete_scaling_policy' }
    ]}
>
<TabItem value="delete_scaling_policy">

This API works with the following fleet types: EC2 Deletes a fleet scaling policy. Once deleted, the policy is no longer in force and Amazon GameLift Servers removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with. To temporarily suspend scaling policies, use StopFleetActions. This operation suspends all policies for the fleet.

```sql
DELETE FROM aws.gamelift.scaling_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
