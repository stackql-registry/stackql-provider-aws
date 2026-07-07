--- 
title: load_balancers
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancers
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

Creates, updates, deletes, gets or lists a <code>load_balancers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="load_balancers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.load_balancers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_load_balancers"
    values={[
        { label: 'describe_load_balancers', value: 'describe_load_balancers' }
    ]}
>
<TabItem value="describe_load_balancers">

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
    <td><CopyableCode code="LoadBalancerName" /></td>
    <td><code>string</code></td>
    <td>The name of the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>One of the following load balancer states: Adding - The Auto Scaling instances are being registered with the load balancer. Added - All Auto Scaling instances are registered with the load balancer. InService - At least one Auto Scaling instance passed an ELB health check. Removing - The Auto Scaling instances are being deregistered from the load balancer. If connection draining is enabled, Elastic Load Balancing waits for in-flight requests to complete before deregistering the instances. Removed - All Auto Scaling instances are deregistered from the load balancer.</td>
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
    <td><a href="#describe_load_balancers"><CopyableCode code="describe_load_balancers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>This API operation is superseded by DescribeTrafficSources, which can describe multiple traffic sources types. We recommend using DescribeTrafficSources to simplify how you manage traffic sources. However, we continue to support DescribeLoadBalancers. You can use both the original DescribeLoadBalancers API operation and DescribeTrafficSources on the same Auto Scaling group. Gets information about the load balancers for the specified Auto Scaling group. This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the DescribeLoadBalancerTargetGroups API instead. To determine the attachment status of the load balancer, use the State element in the response. When you attach a load balancer to an Auto Scaling group, the initial State value is Adding. The state transitions to Added after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to InService after at least one Auto Scaling instance passes the health check. When the load balancer is in the InService state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the InService state. Load balancers also have an InService state if you attach them in the CreateAutoScalingGroup API call. If your load balancer state is InService, but it is not working properly, check the scaling activities by calling DescribeScalingActivities and take any corrective actions necessary. For help with failed health checks, see Troubleshooting Amazon EC2 Auto Scaling: Health checks in the Amazon EC2 Auto Scaling User Guide. For more information, see Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#attach_load_balancers"><CopyableCode code="attach_load_balancers" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-LoadBalancerNames"><code>LoadBalancerNames</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API operation is superseded by AttachTrafficSources, which can attach multiple traffic sources types. We recommend using AttachTrafficSources to simplify how you manage traffic sources. However, we continue to support AttachLoadBalancers. You can use both the original AttachLoadBalancers API operation and AttachTrafficSources on the same Auto Scaling group. Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers. To describe the load balancers for an Auto Scaling group, call the DescribeLoadBalancers API. To detach a load balancer from the Auto Scaling group, call the DetachLoadBalancers API. This operation is additive and does not detach existing Classic Load Balancers or target groups from the Auto Scaling group. For more information, see Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#detach_load_balancers"><CopyableCode code="detach_load_balancers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-LoadBalancerNames"><code>LoadBalancerNames</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API operation is superseded by DetachTrafficSources, which can detach multiple traffic sources types. We recommend using DetachTrafficSources to simplify how you manage traffic sources. However, we continue to support DetachLoadBalancers. You can use both the original DetachLoadBalancers API operation and DetachTrafficSources on the same Auto Scaling group. Detaches one or more Classic Load Balancers from the specified Auto Scaling group. This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the DetachLoadBalancerTargetGroups API instead. When you detach a load balancer, it enters the Removing state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the DescribeLoadBalancers API call. The instances remain running.</td>
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
<tr id="parameter-LoadBalancerNames">
    <td><CopyableCode code="LoadBalancerNames" /></td>
    <td><code>array</code></td>
    <td>The names of the load balancers. You can specify up to 10 load balancers.</td>
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
    defaultValue="describe_load_balancers"
    values={[
        { label: 'describe_load_balancers', value: 'describe_load_balancers' }
    ]}
>
<TabItem value="describe_load_balancers">

This API operation is superseded by DescribeTrafficSources, which can describe multiple traffic sources types. We recommend using DescribeTrafficSources to simplify how you manage traffic sources. However, we continue to support DescribeLoadBalancers. You can use both the original DescribeLoadBalancers API operation and DescribeTrafficSources on the same Auto Scaling group. Gets information about the load balancers for the specified Auto Scaling group. This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the DescribeLoadBalancerTargetGroups API instead. To determine the attachment status of the load balancer, use the State element in the response. When you attach a load balancer to an Auto Scaling group, the initial State value is Adding. The state transitions to Added after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to InService after at least one Auto Scaling instance passes the health check. When the load balancer is in the InService state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the InService state. Load balancers also have an InService state if you attach them in the CreateAutoScalingGroup API call. If your load balancer state is InService, but it is not working properly, check the scaling activities by calling DescribeScalingActivities and take any corrective actions necessary. For help with failed health checks, see Troubleshooting Amazon EC2 Auto Scaling: Health checks in the Amazon EC2 Auto Scaling User Guide. For more information, see Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.

```sql
SELECT
LoadBalancerName,
State
FROM aws.autoscaling.load_balancers
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
    defaultValue="attach_load_balancers"
    values={[
        { label: 'attach_load_balancers', value: 'attach_load_balancers' }
    ]}
>
<TabItem value="attach_load_balancers">

This API operation is superseded by AttachTrafficSources, which can attach multiple traffic sources types. We recommend using AttachTrafficSources to simplify how you manage traffic sources. However, we continue to support AttachLoadBalancers. You can use both the original AttachLoadBalancers API operation and AttachTrafficSources on the same Auto Scaling group. Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers. To describe the load balancers for an Auto Scaling group, call the DescribeLoadBalancers API. To detach a load balancer from the Auto Scaling group, call the DetachLoadBalancers API. This operation is additive and does not detach existing Classic Load Balancers or target groups from the Auto Scaling group. For more information, see Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.

```sql
UPDATE aws.autoscaling.load_balancers
SET 
-- No updatable properties
WHERE 
AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND LoadBalancerNames = '{{ LoadBalancerNames }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_load_balancers"
    values={[
        { label: 'detach_load_balancers', value: 'detach_load_balancers' }
    ]}
>
<TabItem value="detach_load_balancers">

This API operation is superseded by DetachTrafficSources, which can detach multiple traffic sources types. We recommend using DetachTrafficSources to simplify how you manage traffic sources. However, we continue to support DetachLoadBalancers. You can use both the original DetachLoadBalancers API operation and DetachTrafficSources on the same Auto Scaling group. Detaches one or more Classic Load Balancers from the specified Auto Scaling group. This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the DetachLoadBalancerTargetGroups API instead. When you detach a load balancer, it enters the Removing state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the DescribeLoadBalancers API call. The instances remain running.

```sql
EXEC aws.autoscaling.load_balancers.detach_load_balancers 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@LoadBalancerNames='{{ LoadBalancerNames }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
