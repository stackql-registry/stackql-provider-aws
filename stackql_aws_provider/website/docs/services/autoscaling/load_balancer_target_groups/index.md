--- 
title: load_balancer_target_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancer_target_groups
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

Creates, updates, deletes, gets or lists a <code>load_balancer_target_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="load_balancer_target_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.load_balancer_target_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_load_balancer_target_groups"
    values={[
        { label: 'describe_load_balancer_target_groups', value: 'describe_load_balancer_target_groups' }
    ]}
>
<TabItem value="describe_load_balancer_target_groups">

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
    <td><CopyableCode code="LoadBalancerTargetGroupARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the target group.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the target group. Adding - The Auto Scaling instances are being registered with the target group. Added - All Auto Scaling instances are registered with the target group. InService - At least one Auto Scaling instance passed an ELB health check. Removing - The Auto Scaling instances are being deregistered from the target group. If connection draining is enabled, Elastic Load Balancing waits for in-flight requests to complete before deregistering the instances. Removed - All Auto Scaling instances are deregistered from the target group.</td>
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
    <td><a href="#describe_load_balancer_target_groups"><CopyableCode code="describe_load_balancer_target_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>This API operation is superseded by DescribeTrafficSources, which can describe multiple traffic sources types. We recommend using DetachTrafficSources to simplify how you manage traffic sources. However, we continue to support DescribeLoadBalancerTargetGroups. You can use both the original DescribeLoadBalancerTargetGroups API operation and DescribeTrafficSources on the same Auto Scaling group. Gets information about the Elastic Load Balancing target groups for the specified Auto Scaling group. To determine the attachment status of the target group, use the State element in the response. When you attach a target group to an Auto Scaling group, the initial State value is Adding. The state transitions to Added after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to InService after at least one Auto Scaling instance passes the health check. When the target group is in the InService state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the InService state. Target groups also have an InService state if you attach them in the CreateAutoScalingGroup API call. If your target group state is InService, but it is not working properly, check the scaling activities by calling DescribeScalingActivities and take any corrective actions necessary. For help with failed health checks, see Troubleshooting Amazon EC2 Auto Scaling: Health checks in the Amazon EC2 Auto Scaling User Guide. For more information, see Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. You can use this operation to describe target groups that were attached by using AttachLoadBalancerTargetGroups, but not for target groups that were attached by using AttachTrafficSources.</td>
</tr>
<tr>
    <td><a href="#attach_load_balancer_target_groups"><CopyableCode code="attach_load_balancer_target_groups" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-TargetGroupARNs"><code>TargetGroupARNs</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API operation is superseded by AttachTrafficSources, which can attach multiple traffic sources types. We recommend using AttachTrafficSources to simplify how you manage traffic sources. However, we continue to support AttachLoadBalancerTargetGroups. You can use both the original AttachLoadBalancerTargetGroups API operation and AttachTrafficSources on the same Auto Scaling group. Attaches one or more target groups to the specified Auto Scaling group. This operation is used with the following load balancer types: Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS. Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP. Gateway Load Balancer - Operates at the network layer (layer 3). To describe the target groups for an Auto Scaling group, call the DescribeLoadBalancerTargetGroups API. To detach the target group from the Auto Scaling group, call the DetachLoadBalancerTargetGroups API. This operation is additive and does not detach existing target groups or Classic Load Balancers from the Auto Scaling group. For more information, see Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#detach_load_balancer_target_groups"><CopyableCode code="detach_load_balancer_target_groups" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-TargetGroupARNs"><code>TargetGroupARNs</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API operation is superseded by DetachTrafficSources, which can detach multiple traffic sources types. We recommend using DetachTrafficSources to simplify how you manage traffic sources. However, we continue to support DetachLoadBalancerTargetGroups. You can use both the original DetachLoadBalancerTargetGroups API operation and DetachTrafficSources on the same Auto Scaling group. Detaches one or more target groups from the specified Auto Scaling group. When you detach a target group, it enters the Removing state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the target group using the DescribeLoadBalancerTargetGroups API call. The instances remain running. You can use this operation to detach target groups that were attached by using AttachLoadBalancerTargetGroups, but not for target groups that were attached by using AttachTrafficSources.</td>
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
<tr id="parameter-TargetGroupARNs">
    <td><CopyableCode code="TargetGroupARNs" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARN) of the target groups. You can specify up to 10 target groups.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return with this call. The default value is 100 and the maximum value is 100.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_load_balancer_target_groups"
    values={[
        { label: 'describe_load_balancer_target_groups', value: 'describe_load_balancer_target_groups' }
    ]}
>
<TabItem value="describe_load_balancer_target_groups">

This API operation is superseded by DescribeTrafficSources, which can describe multiple traffic sources types. We recommend using DetachTrafficSources to simplify how you manage traffic sources. However, we continue to support DescribeLoadBalancerTargetGroups. You can use both the original DescribeLoadBalancerTargetGroups API operation and DescribeTrafficSources on the same Auto Scaling group. Gets information about the Elastic Load Balancing target groups for the specified Auto Scaling group. To determine the attachment status of the target group, use the State element in the response. When you attach a target group to an Auto Scaling group, the initial State value is Adding. The state transitions to Added after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to InService after at least one Auto Scaling instance passes the health check. When the target group is in the InService state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the InService state. Target groups also have an InService state if you attach them in the CreateAutoScalingGroup API call. If your target group state is InService, but it is not working properly, check the scaling activities by calling DescribeScalingActivities and take any corrective actions necessary. For help with failed health checks, see Troubleshooting Amazon EC2 Auto Scaling: Health checks in the Amazon EC2 Auto Scaling User Guide. For more information, see Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. You can use this operation to describe target groups that were attached by using AttachLoadBalancerTargetGroups, but not for target groups that were attached by using AttachTrafficSources.

```sql
SELECT
LoadBalancerTargetGroupARN,
State
FROM aws.autoscaling.load_balancer_target_groups
WHERE AutoScalingGroupName = '{{ AutoScalingGroupName }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_load_balancer_target_groups"
    values={[
        { label: 'attach_load_balancer_target_groups', value: 'attach_load_balancer_target_groups' }
    ]}
>
<TabItem value="attach_load_balancer_target_groups">

This API operation is superseded by AttachTrafficSources, which can attach multiple traffic sources types. We recommend using AttachTrafficSources to simplify how you manage traffic sources. However, we continue to support AttachLoadBalancerTargetGroups. You can use both the original AttachLoadBalancerTargetGroups API operation and AttachTrafficSources on the same Auto Scaling group. Attaches one or more target groups to the specified Auto Scaling group. This operation is used with the following load balancer types: Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS. Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP. Gateway Load Balancer - Operates at the network layer (layer 3). To describe the target groups for an Auto Scaling group, call the DescribeLoadBalancerTargetGroups API. To detach the target group from the Auto Scaling group, call the DetachLoadBalancerTargetGroups API. This operation is additive and does not detach existing target groups or Classic Load Balancers from the Auto Scaling group. For more information, see Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.

```sql
UPDATE aws.autoscaling.load_balancer_target_groups
SET 
-- No updatable properties
WHERE 
AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND TargetGroupARNs = '{{ TargetGroupARNs }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_load_balancer_target_groups"
    values={[
        { label: 'detach_load_balancer_target_groups', value: 'detach_load_balancer_target_groups' }
    ]}
>
<TabItem value="detach_load_balancer_target_groups">

This API operation is superseded by DetachTrafficSources, which can detach multiple traffic sources types. We recommend using DetachTrafficSources to simplify how you manage traffic sources. However, we continue to support DetachLoadBalancerTargetGroups. You can use both the original DetachLoadBalancerTargetGroups API operation and DetachTrafficSources on the same Auto Scaling group. Detaches one or more target groups from the specified Auto Scaling group. When you detach a target group, it enters the Removing state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the target group using the DescribeLoadBalancerTargetGroups API call. The instances remain running. You can use this operation to detach target groups that were attached by using AttachLoadBalancerTargetGroups, but not for target groups that were attached by using AttachTrafficSources.

```sql
EXEC aws.autoscaling.load_balancer_target_groups.detach_load_balancer_target_groups 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@TargetGroupARNs='{{ TargetGroupARNs }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
