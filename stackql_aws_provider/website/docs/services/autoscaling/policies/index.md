--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_policies"
    values={[
        { label: 'describe_policies', value: 'describe_policies' }
    ]}
>
<TabItem value="describe_policies">

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
    <td><CopyableCode code="AdjustmentType" /></td>
    <td><code>string</code></td>
    <td>Specifies how the scaling adjustment is interpreted (for example, an absolute number or a percentage). The valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity.</td>
</tr>
<tr>
    <td><CopyableCode code="Alarms" /></td>
    <td><code>string</code></td>
    <td>The CloudWatch alarms related to the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoScalingGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="Cooldown" /></td>
    <td><code>integer</code></td>
    <td>The duration of the policy's cooldown period, in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the policy is enabled (true) or disabled (false).</td>
</tr>
<tr>
    <td><CopyableCode code="EstimatedInstanceWarmup" /></td>
    <td><code>integer</code></td>
    <td>The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="MetricAggregationType" /></td>
    <td><code>string</code></td>
    <td>The aggregation type for the CloudWatch metrics. The valid values are Minimum, Maximum, and Average.</td>
</tr>
<tr>
    <td><CopyableCode code="MinAdjustmentMagnitude" /></td>
    <td><code>integer</code></td>
    <td>The minimum value to scale by when the adjustment type is PercentChangeInCapacity.</td>
</tr>
<tr>
    <td><CopyableCode code="MinAdjustmentStep" /></td>
    <td><code>integer</code></td>
    <td>Available for backward compatibility. Use MinAdjustmentMagnitude instead.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyName" /></td>
    <td><code>string</code></td>
    <td>The name of the scaling policy.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyType" /></td>
    <td><code>string</code></td>
    <td>One of the following policy types: TargetTrackingScaling StepScaling SimpleScaling (default) PredictiveScaling For more information, see Target tracking scaling policies and Step and simple scaling policies in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="PredictiveScalingConfiguration" /></td>
    <td><code>string</code></td>
    <td>A predictive scaling policy.</td>
</tr>
<tr>
    <td><CopyableCode code="ScalingAdjustment" /></td>
    <td><code>integer</code></td>
    <td>The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="StepAdjustments" /></td>
    <td><code>string</code></td>
    <td>A set of adjustments that enable you to scale based on the size of the alarm breach.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetTrackingConfiguration" /></td>
    <td><code>string</code></td>
    <td>A target tracking scaling policy.</td>
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
    <td><a href="#describe_policies"><CopyableCode code="describe_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-PolicyNames"><code>PolicyNames</code></a>, <a href="#parameter-PolicyTypes"><code>PolicyTypes</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Gets information about the scaling policies in the account and Region.</td>
</tr>
<tr>
    <td><a href="#put_scaling_policy"><CopyableCode code="put_scaling_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-PolicyName"><code>PolicyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PolicyType"><code>PolicyType</code></a>, <a href="#parameter-AdjustmentType"><code>AdjustmentType</code></a>, <a href="#parameter-MinAdjustmentStep"><code>MinAdjustmentStep</code></a>, <a href="#parameter-MinAdjustmentMagnitude"><code>MinAdjustmentMagnitude</code></a>, <a href="#parameter-ScalingAdjustment"><code>ScalingAdjustment</code></a>, <a href="#parameter-Cooldown"><code>Cooldown</code></a>, <a href="#parameter-MetricAggregationType"><code>MetricAggregationType</code></a>, <a href="#parameter-StepAdjustments"><code>StepAdjustments</code></a>, <a href="#parameter-EstimatedInstanceWarmup"><code>EstimatedInstanceWarmup</code></a>, <a href="#parameter-TargetTrackingConfiguration"><code>TargetTrackingConfiguration</code></a>, <a href="#parameter-Enabled"><code>Enabled</code></a>, <a href="#parameter-PredictiveScalingConfiguration"><code>PredictiveScalingConfiguration</code></a></td>
    <td>Creates or updates a scaling policy for an Auto Scaling group. Scaling policies are used to scale an Auto Scaling group based on configurable metrics. If no policies are defined, the dynamic scaling and predictive scaling features are not used. For more information about using dynamic scaling, see Target tracking scaling policies and Step and simple scaling policies in the Amazon EC2 Auto Scaling User Guide. For more information about using predictive scaling, see Predictive scaling for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. You can view the scaling policies for an Auto Scaling group using the DescribePolicies API call. If you are no longer using a scaling policy, you can delete it by calling the DeletePolicy API.</td>
</tr>
<tr>
    <td><a href="#delete_policy"><CopyableCode code="delete_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-PolicyName"><code>PolicyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a></td>
    <td>Deletes the specified scaling policy. Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action. For more information, see Delete a scaling policy in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#execute_policy"><CopyableCode code="execute_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-PolicyName"><code>PolicyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-HonorCooldown"><code>HonorCooldown</code></a>, <a href="#parameter-MetricValue"><code>MetricValue</code></a>, <a href="#parameter-BreachThreshold"><code>BreachThreshold</code></a></td>
    <td>Executes the specified policy. This can be useful for testing the design of your scaling policy.</td>
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
<tr id="parameter-PolicyName">
    <td><CopyableCode code="PolicyName" /></td>
    <td><code>string</code></td>
    <td>The name or ARN of the policy.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AdjustmentType">
    <td><CopyableCode code="AdjustmentType" /></td>
    <td><code>string</code></td>
    <td>Specifies how the scaling adjustment is interpreted (for example, an absolute number or a percentage). The valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity. Required if the policy type is StepScaling or SimpleScaling. For more information, see Scaling adjustment types in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-AutoScalingGroupName">
    <td><CopyableCode code="AutoScalingGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the Auto Scaling group.</td>
</tr>
<tr id="parameter-BreachThreshold">
    <td><CopyableCode code="BreachThreshold" /></td>
    <td><code>number (double)</code></td>
    <td>The breach threshold for the alarm. Required if the policy type is StepScaling and not supported otherwise.</td>
</tr>
<tr id="parameter-Cooldown">
    <td><CopyableCode code="Cooldown" /></td>
    <td><code>integer</code></td>
    <td>A cooldown period, in seconds, that applies to a specific simple scaling policy. When a cooldown period is specified here, it overrides the default cooldown. Valid only if the policy type is SimpleScaling. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. Default: None</td>
</tr>
<tr id="parameter-Enabled">
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the scaling policy is enabled or disabled. The default is enabled. For more information, see Disable a scaling policy for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-EstimatedInstanceWarmup">
    <td><CopyableCode code="EstimatedInstanceWarmup" /></td>
    <td><code>integer</code></td>
    <td>Not needed if the default instance warmup is defined for the group. The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This warm-up period applies to instances launched due to a specific target tracking or step scaling policy. When a warm-up period is specified here, it overrides the default instance warmup. Valid only if the policy type is TargetTrackingScaling or StepScaling. The default is to use the value for the default instance warmup defined for the group. If default instance warmup is null, then EstimatedInstanceWarmup falls back to the value of default cooldown.</td>
</tr>
<tr id="parameter-HonorCooldown">
    <td><CopyableCode code="HonorCooldown" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before executing the policy. Valid only if the policy type is SimpleScaling. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to be returned with each call. The default value is 50 and the maximum value is 100.</td>
</tr>
<tr id="parameter-MetricAggregationType">
    <td><CopyableCode code="MetricAggregationType" /></td>
    <td><code>string</code></td>
    <td>The aggregation type for the CloudWatch metrics. The valid values are Minimum, Maximum, and Average. If the aggregation type is null, the value is treated as Average. Valid only if the policy type is StepScaling.</td>
</tr>
<tr id="parameter-MetricValue">
    <td><CopyableCode code="MetricValue" /></td>
    <td><code>number (double)</code></td>
    <td>The metric value to compare to BreachThreshold. This enables you to execute a policy of type StepScaling and determine which step adjustment to use. For example, if the breach threshold is 50 and you want to use a step adjustment with a lower bound of 0 and an upper bound of 10, you can set the metric value to 59. If you specify a metric value that doesn't correspond to a step adjustment for the policy, the call returns an error. Required if the policy type is StepScaling and not supported otherwise.</td>
</tr>
<tr id="parameter-MinAdjustmentMagnitude">
    <td><CopyableCode code="MinAdjustmentMagnitude" /></td>
    <td><code>integer</code></td>
    <td>The minimum value to scale by when the adjustment type is PercentChangeInCapacity. For example, suppose that you create a step scaling policy to scale out an Auto Scaling group by 25 percent and you specify a MinAdjustmentMagnitude of 2. If the group has 4 instances and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a MinAdjustmentMagnitude of 2, Amazon EC2 Auto Scaling scales out the group by 2 instances. Valid only if the policy type is StepScaling or SimpleScaling. For more information, see Scaling adjustment types in the Amazon EC2 Auto Scaling User Guide. Some Auto Scaling groups use instance weights. In this case, set the MinAdjustmentMagnitude to a value that is at least as large as your largest instance weight.</td>
</tr>
<tr id="parameter-MinAdjustmentStep">
    <td><CopyableCode code="MinAdjustmentStep" /></td>
    <td><code>integer</code></td>
    <td>Available for backward compatibility. Use MinAdjustmentMagnitude instead.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-PolicyNames">
    <td><CopyableCode code="PolicyNames" /></td>
    <td><code>array</code></td>
    <td>The names of one or more policies. If you omit this property, all policies are described. If a group name is provided, the results are limited to that group. If you specify an unknown policy name, it is ignored with no error. Array Members: Maximum number of 50 items.</td>
</tr>
<tr id="parameter-PolicyType">
    <td><CopyableCode code="PolicyType" /></td>
    <td><code>string</code></td>
    <td>One of the following policy types: TargetTrackingScaling StepScaling SimpleScaling (default) PredictiveScaling</td>
</tr>
<tr id="parameter-PolicyTypes">
    <td><CopyableCode code="PolicyTypes" /></td>
    <td><code>array</code></td>
    <td>One or more policy types. The valid values are SimpleScaling, StepScaling, TargetTrackingScaling, and PredictiveScaling.</td>
</tr>
<tr id="parameter-PredictiveScalingConfiguration">
    <td><CopyableCode code="PredictiveScalingConfiguration" /></td>
    <td><code>object</code></td>
    <td>A predictive scaling policy. Provides support for predefined and custom metrics. Predefined metrics include CPU utilization, network in/out, and the Application Load Balancer request count. For more information, see PredictiveScalingConfiguration in the Amazon EC2 Auto Scaling API Reference. Required if the policy type is PredictiveScaling.</td>
</tr>
<tr id="parameter-ScalingAdjustment">
    <td><CopyableCode code="ScalingAdjustment" /></td>
    <td><code>integer</code></td>
    <td>The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a non-negative value. Required if the policy type is SimpleScaling. (Not used with any other policy type.)</td>
</tr>
<tr id="parameter-StepAdjustments">
    <td><CopyableCode code="StepAdjustments" /></td>
    <td><code>array</code></td>
    <td>A set of adjustments that enable you to scale based on the size of the alarm breach. Required if the policy type is StepScaling. (Not used with any other policy type.)</td>
</tr>
<tr id="parameter-TargetTrackingConfiguration">
    <td><CopyableCode code="TargetTrackingConfiguration" /></td>
    <td><code>object</code></td>
    <td>A target tracking scaling policy. Provides support for predefined or custom metrics. The following predefined metrics are available: ASGAverageCPUUtilization ASGAverageNetworkIn ASGAverageNetworkOut ALBRequestCountPerTarget If you specify ALBRequestCountPerTarget for the metric, you must specify the ResourceLabel property with the PredefinedMetricSpecification. For more information, see TargetTrackingConfiguration in the Amazon EC2 Auto Scaling API Reference. Required if the policy type is TargetTrackingScaling.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_policies"
    values={[
        { label: 'describe_policies', value: 'describe_policies' }
    ]}
>
<TabItem value="describe_policies">

Gets information about the scaling policies in the account and Region.

```sql
SELECT
AdjustmentType,
Alarms,
AutoScalingGroupName,
Cooldown,
Enabled,
EstimatedInstanceWarmup,
MetricAggregationType,
MinAdjustmentMagnitude,
MinAdjustmentStep,
PolicyARN,
PolicyName,
PolicyType,
PredictiveScalingConfiguration,
ScalingAdjustment,
StepAdjustments,
TargetTrackingConfiguration
FROM aws.autoscaling.policies
WHERE region = '{{ region }}' -- required
AND AutoScalingGroupName = '{{ AutoScalingGroupName }}'
AND PolicyNames = '{{ PolicyNames }}'
AND PolicyTypes = '{{ PolicyTypes }}'
AND NextToken = '{{ NextToken }}'
AND MaxRecords = '{{ MaxRecords }}'
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

Creates or updates a scaling policy for an Auto Scaling group. Scaling policies are used to scale an Auto Scaling group based on configurable metrics. If no policies are defined, the dynamic scaling and predictive scaling features are not used. For more information about using dynamic scaling, see Target tracking scaling policies and Step and simple scaling policies in the Amazon EC2 Auto Scaling User Guide. For more information about using predictive scaling, see Predictive scaling for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. You can view the scaling policies for an Auto Scaling group using the DescribePolicies API call. If you are no longer using a scaling policy, you can delete it by calling the DeletePolicy API.

```sql
REPLACE aws.autoscaling.policies
SET 
-- No updatable properties
WHERE 
AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND PolicyName = '{{ PolicyName }}' --required
AND region = '{{ region }}' --required
AND PolicyType = '{{ PolicyType}}'
AND AdjustmentType = '{{ AdjustmentType}}'
AND MinAdjustmentStep = '{{ MinAdjustmentStep}}'
AND MinAdjustmentMagnitude = '{{ MinAdjustmentMagnitude}}'
AND ScalingAdjustment = '{{ ScalingAdjustment}}'
AND Cooldown = '{{ Cooldown}}'
AND MetricAggregationType = '{{ MetricAggregationType}}'
AND StepAdjustments = '{{ StepAdjustments}}'
AND EstimatedInstanceWarmup = '{{ EstimatedInstanceWarmup}}'
AND TargetTrackingConfiguration = '{{ TargetTrackingConfiguration}}'
AND Enabled = {{ Enabled}}
AND PredictiveScalingConfiguration = '{{ PredictiveScalingConfiguration}}'
RETURNING
Alarms,
PolicyARN;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_policy"
    values={[
        { label: 'delete_policy', value: 'delete_policy' }
    ]}
>
<TabItem value="delete_policy">

Deletes the specified scaling policy. Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action. For more information, see Delete a scaling policy in the Amazon EC2 Auto Scaling User Guide.

```sql
DELETE FROM aws.autoscaling.policies
WHERE PolicyName = '{{ PolicyName }}' --required
AND region = '{{ region }}' --required
AND AutoScalingGroupName = '{{ AutoScalingGroupName }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="execute_policy"
    values={[
        { label: 'execute_policy', value: 'execute_policy' }
    ]}
>
<TabItem value="execute_policy">

Executes the specified policy. This can be useful for testing the design of your scaling policy.

```sql
EXEC aws.autoscaling.policies.execute_policy 
@PolicyName='{{ PolicyName }}' --required, 
@region='{{ region }}' --required, 
@AutoScalingGroupName='{{ AutoScalingGroupName }}', 
@HonorCooldown={{ HonorCooldown }}, 
@MetricValue='{{ MetricValue }}', 
@BreachThreshold='{{ BreachThreshold }}'
;
```
</TabItem>
</Tabs>
