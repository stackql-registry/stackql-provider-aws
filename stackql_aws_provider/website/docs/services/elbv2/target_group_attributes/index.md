--- 
title: target_group_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - target_group_attributes
  - elbv2
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

Creates, updates, deletes, gets or lists a <code>target_group_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="target_group_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elbv2.target_group_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_target_group_attributes"
    values={[
        { label: 'describe_target_group_attributes', value: 'describe_target_group_attributes' }
    ]}
>
<TabItem value="describe_target_group_attributes">

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
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The name of the attribute. The following attributes are supported by all load balancers: deregistration_delay.timeout_seconds - The amount of time, in seconds, for Elastic Load Balancing to wait before changing the state of a deregistering target from draining to unused. The range is 0-3600 seconds. The default value is 300 seconds. If the target is a Lambda function, this attribute is not supported. stickiness.enabled - Indicates whether target stickiness is enabled. The value is true or false. The default is false. stickiness.type - Indicates the type of stickiness. The possible values are: lb_cookie and app_cookie for Application Load Balancers. source_ip for Network Load Balancers. source_ip_dest_ip and source_ip_dest_ip_proto for Gateway Load Balancers. The following attributes are supported by Application Load Balancers and Network Load Balancers: load_balancing.cross_zone.enabled - Indicates whether cross zone load balancing is enabled. The value is true, false or use_load_balancer_configuration. The default is use_load_balancer_configuration. target_group_health.dns_failover.minimum_healthy_targets.count - The minimum number of targets that must be healthy. If the number of healthy targets is below this value, mark the zone as unhealthy in DNS, so that traffic is routed only to healthy zones. The possible values are off or an integer from 1 to the maximum number of targets. The default is 1. target_group_health.dns_failover.minimum_healthy_targets.percentage - The minimum percentage of targets that must be healthy. If the percentage of healthy targets is below this value, mark the zone as unhealthy in DNS, so that traffic is routed only to healthy zones. The possible values are off or an integer from 1 to 100. The default is off. target_group_health.unhealthy_state_routing.minimum_healthy_targets.count - The minimum number of targets that must be healthy. If the number of healthy targets is below this value, send traffic to all targets, including unhealthy targets. The possible values are 1 to the maximum number of targets. The default is 1. target_group_health.unhealthy_state_routing.minimum_healthy_targets.percentage - The minimum percentage of targets that must be healthy. If the percentage of healthy targets is below this value, send traffic to all targets, including unhealthy targets. The possible values are off or an integer from 1 to 100. The default is off. The following attributes are supported only if the load balancer is an Application Load Balancer and the target is an instance or an IP address: load_balancing.algorithm.type - The load balancing algorithm determines how the load balancer selects targets when routing requests. The value is round_robin, least_outstanding_requests, or weighted_random. The default is round_robin. load_balancing.algorithm.anomaly_mitigation - Only available when load_balancing.algorithm.type is weighted_random. Indicates whether anomaly mitigation is enabled. The value is on or off. The default is off. slow_start.duration_seconds - The time period, in seconds, during which a newly registered target receives an increasing share of the traffic to the target group. After this time period ends, the target receives its full share of traffic. The range is 30-900 seconds (15 minutes). The default is 0 seconds (disabled). stickiness.app_cookie.cookie_name - Indicates the name of the application-based cookie. Names that start with the following prefixes are not allowed: AWSALB, AWSALBAPP, and AWSALBTG; they're reserved for use by the load balancer. stickiness.app_cookie.duration_seconds - The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the application-based cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds). stickiness.lb_cookie.duration_seconds - The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the load balancer-generated cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds). The following attribute is supported only if the load balancer is an Application Load Balancer and the target is a Lambda function: lambda.multi_value_headers.enabled - Indicates whether the request and response headers that are exchanged between the load balancer and the Lambda function include arrays of values or strings. The value is true or false. The default is false. If the value is false and the request contains a duplicate header field name or query parameter key, the load balancer uses the last value sent by the client. The following attributes are supported only by Network Load Balancers: deregistration_delay.connection_termination.enabled - Indicates whether the load balancer terminates connections at the end of the deregistration timeout. The value is true or false. For new UDP/TCP_UDP target groups the default is true. Otherwise, the default is false. preserve_client_ip.enabled - Indicates whether client IP preservation is enabled. The value is true or false. The default is disabled if the target group type is IP address and the target group protocol is TCP or TLS. Otherwise, the default is enabled. Client IP preservation can't be disabled for UDP and TCP_UDP target groups. proxy_protocol_v2.enabled - Indicates whether Proxy Protocol version 2 is enabled. The value is true or false. The default is false. target_health_state.unhealthy.connection_termination.enabled - Indicates whether the load balancer terminates connections to unhealthy targets. The value is true or false. The default is true. This attribute can't be enabled for UDP and TCP_UDP target groups. target_health_state.unhealthy.draining_interval_seconds - The amount of time for Elastic Load Balancing to wait before changing the state of an unhealthy target from unhealthy.draining to unhealthy. The range is 0-360000 seconds. The default value is 0 seconds. Note: This attribute can only be configured when target_health_state.unhealthy.connection_termination.enabled is false. The following attributes are supported only by Gateway Load Balancers: target_failover.on_deregistration - Indicates how the Gateway Load Balancer handles existing flows when a target is deregistered. The possible values are rebalance and no_rebalance. The default is no_rebalance. The two attributes (target_failover.on_deregistration and target_failover.on_unhealthy) can't be set independently. The value you set for both attributes must be the same. target_failover.on_unhealthy - Indicates how the Gateway Load Balancer handles existing flows when a target is unhealthy. The possible values are rebalance and no_rebalance. The default is no_rebalance. The two attributes (target_failover.on_deregistration and target_failover.on_unhealthy) can't be set independently. The value you set for both attributes must be the same.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of the attribute.</td>
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
    <td><a href="#describe_target_group_attributes"><CopyableCode code="describe_target_group_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TargetGroupArn"><code>TargetGroupArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the attributes for the specified target group. For more information, see the following: Target group attributes in the Application Load Balancers Guide Target group attributes in the Network Load Balancers Guide Target group attributes in the Gateway Load Balancers Guide</td>
</tr>
<tr>
    <td><a href="#modify_target_group_attributes"><CopyableCode code="modify_target_group_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TargetGroupArn"><code>TargetGroupArn</code></a>, <a href="#parameter-Attributes"><code>Attributes</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the specified attributes of the specified target group.</td>
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
<tr id="parameter-Attributes">
    <td><CopyableCode code="Attributes" /></td>
    <td><code>array</code></td>
    <td>The target group attributes.</td>
</tr>
<tr id="parameter-TargetGroupArn">
    <td><CopyableCode code="TargetGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the target group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_target_group_attributes"
    values={[
        { label: 'describe_target_group_attributes', value: 'describe_target_group_attributes' }
    ]}
>
<TabItem value="describe_target_group_attributes">

Describes the attributes for the specified target group. For more information, see the following: Target group attributes in the Application Load Balancers Guide Target group attributes in the Network Load Balancers Guide Target group attributes in the Gateway Load Balancers Guide

```sql
SELECT
key,
value
FROM aws.elbv2.target_group_attributes
WHERE TargetGroupArn = '{{ TargetGroupArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_target_group_attributes"
    values={[
        { label: 'modify_target_group_attributes', value: 'modify_target_group_attributes' }
    ]}
>
<TabItem value="modify_target_group_attributes">

Modifies the specified attributes of the specified target group.

```sql
UPDATE aws.elbv2.target_group_attributes
SET 
-- No updatable properties
WHERE 
TargetGroupArn = '{{ TargetGroupArn }}' --required
AND Attributes = '{{ Attributes }}' --required
AND region = '{{ region }}' --required
RETURNING
line_items;
```
</TabItem>
</Tabs>
