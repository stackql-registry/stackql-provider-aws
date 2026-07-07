--- 
title: target_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - target_groups
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

Creates, updates, deletes, gets or lists a <code>target_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="target_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elbv2.target_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_target_groups"
    values={[
        { label: 'describe_target_groups', value: 'describe_target_groups' }
    ]}
>
<TabItem value="describe_target_groups">

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
    <td><CopyableCode code="HealthCheckEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether health checks are enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthCheckIntervalSeconds" /></td>
    <td><code>integer</code></td>
    <td>The approximate amount of time, in seconds, between health checks of an individual target.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthCheckPath" /></td>
    <td><code>string</code></td>
    <td>The destination for health checks on the targets.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthCheckPort" /></td>
    <td><code>string</code></td>
    <td>The port to use to connect with the target.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthCheckProtocol" /></td>
    <td><code>string</code></td>
    <td>The protocol to use to connect with the target. The GENEVE, TLS, UDP, and TCP_UDP protocols are not supported for health checks.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthCheckTimeoutSeconds" /></td>
    <td><code>integer</code></td>
    <td>The amount of time, in seconds, during which no response means a failed health check.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthyThresholdCount" /></td>
    <td><code>integer</code></td>
    <td>The number of consecutive health checks successes required before considering an unhealthy target healthy.</td>
</tr>
<tr>
    <td><CopyableCode code="IpAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type. The default value is ipv4.</td>
</tr>
<tr>
    <td><CopyableCode code="LoadBalancerArns" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the load balancer that routes traffic to this target group. You can use each target group with only one load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="Matcher" /></td>
    <td><code>string</code></td>
    <td>The HTTP or gRPC codes to use when checking for a successful response from a target.</td>
</tr>
<tr>
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port on which the targets are listening. This parameter is not used if the target is a Lambda function.</td>
</tr>
<tr>
    <td><CopyableCode code="Protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol to use for routing traffic to the targets.</td>
</tr>
<tr>
    <td><CopyableCode code="ProtocolVersion" /></td>
    <td><code>string</code></td>
    <td>&#91;HTTP/HTTPS protocol&#93; The protocol version. The possible values are GRPC, HTTP1, and HTTP2.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetControlPort" /></td>
    <td><code>integer</code></td>
    <td>The port on which the target control agent and application load balancer exchange management traffic for the target optimizer feature.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the target group.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the target group.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetType" /></td>
    <td><code>string</code></td>
    <td>The type of target that you must specify when registering targets with this target group. The possible values are instance (register targets by instance ID), ip (register targets by IP address), lambda (register a single Lambda function as a target), or alb (register a single Application Load Balancer as a target).</td>
</tr>
<tr>
    <td><CopyableCode code="UnhealthyThresholdCount" /></td>
    <td><code>integer</code></td>
    <td>The number of consecutive health check failures required before considering the target unhealthy.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC for the targets.</td>
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
    <td><a href="#describe_target_groups"><CopyableCode code="describe_target_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LoadBalancerArn"><code>LoadBalancerArn</code></a>, <a href="#parameter-TargetGroupArns"><code>TargetGroupArns</code></a>, <a href="#parameter-Names"><code>Names</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.</td>
</tr>
<tr>
    <td><a href="#register_targets"><CopyableCode code="register_targets" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TargetGroupArn"><code>TargetGroupArn</code></a>, <a href="#parameter-Targets"><code>Targets</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Registers the specified targets with the specified target group. If the target is an EC2 instance, it must be in the running state when you register it. By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports. For more information, see the following: Register targets for your Application Load Balancer Register targets for your Network Load Balancer Register targets for your Gateway Load Balancer</td>
</tr>
<tr>
    <td><a href="#create_target_group"><CopyableCode code="create_target_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Protocol"><code>Protocol</code></a>, <a href="#parameter-ProtocolVersion"><code>ProtocolVersion</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-HealthCheckProtocol"><code>HealthCheckProtocol</code></a>, <a href="#parameter-HealthCheckPort"><code>HealthCheckPort</code></a>, <a href="#parameter-HealthCheckEnabled"><code>HealthCheckEnabled</code></a>, <a href="#parameter-HealthCheckPath"><code>HealthCheckPath</code></a>, <a href="#parameter-HealthCheckIntervalSeconds"><code>HealthCheckIntervalSeconds</code></a>, <a href="#parameter-HealthCheckTimeoutSeconds"><code>HealthCheckTimeoutSeconds</code></a>, <a href="#parameter-HealthyThresholdCount"><code>HealthyThresholdCount</code></a>, <a href="#parameter-UnhealthyThresholdCount"><code>UnhealthyThresholdCount</code></a>, <a href="#parameter-Matcher"><code>Matcher</code></a>, <a href="#parameter-TargetType"><code>TargetType</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-IpAddressType"><code>IpAddressType</code></a>, <a href="#parameter-TargetControlPort"><code>TargetControlPort</code></a></td>
    <td>Creates a target group. For more information, see the following: Target groups for your Application Load Balancers Target groups for your Network Load Balancers Target groups for your Gateway Load Balancers This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.</td>
</tr>
<tr>
    <td><a href="#modify_target_group"><CopyableCode code="modify_target_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TargetGroupArn"><code>TargetGroupArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-HealthCheckProtocol"><code>HealthCheckProtocol</code></a>, <a href="#parameter-HealthCheckPort"><code>HealthCheckPort</code></a>, <a href="#parameter-HealthCheckPath"><code>HealthCheckPath</code></a>, <a href="#parameter-HealthCheckEnabled"><code>HealthCheckEnabled</code></a>, <a href="#parameter-HealthCheckIntervalSeconds"><code>HealthCheckIntervalSeconds</code></a>, <a href="#parameter-HealthCheckTimeoutSeconds"><code>HealthCheckTimeoutSeconds</code></a>, <a href="#parameter-HealthyThresholdCount"><code>HealthyThresholdCount</code></a>, <a href="#parameter-UnhealthyThresholdCount"><code>UnhealthyThresholdCount</code></a>, <a href="#parameter-Matcher"><code>Matcher</code></a></td>
    <td>Modifies the health checks used when evaluating the health state of the targets in the specified target group.</td>
</tr>
<tr>
    <td><a href="#deregister_targets"><CopyableCode code="deregister_targets" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TargetGroupArn"><code>TargetGroupArn</code></a>, <a href="#parameter-Targets"><code>Targets</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer. The load balancer stops sending requests to targets that are deregistering, but uses connection draining to ensure that in-flight traffic completes on the existing connections. This deregistration delay is configured by default but can be updated for each target group. For more information, see the following: Deregistration delay in the Application Load Balancers User Guide Deregistration delay in the Network Load Balancers User Guide Deregistration delay in the Gateway Load Balancers User Guide Note: If the specified target does not exist, the action returns successfully.</td>
</tr>
<tr>
    <td><a href="#delete_target_group"><CopyableCode code="delete_target_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TargetGroupArn"><code>TargetGroupArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified target group. You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</td>
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
<tr id="parameter-TargetGroupArn">
    <td><CopyableCode code="TargetGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the target group.</td>
</tr>
<tr id="parameter-Targets">
    <td><CopyableCode code="Targets" /></td>
    <td><code>array</code></td>
    <td>The targets. If you specified a port override when you registered a target, you must specify both the target ID and the port when you deregister it.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-HealthCheckEnabled">
    <td><CopyableCode code="HealthCheckEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether health checks are enabled. If the target type is lambda, health checks are disabled by default but can be enabled. If the target type is instance, ip, or alb, health checks are always enabled and can't be disabled.</td>
</tr>
<tr id="parameter-HealthCheckIntervalSeconds">
    <td><CopyableCode code="HealthCheckIntervalSeconds" /></td>
    <td><code>integer</code></td>
    <td>The approximate amount of time, in seconds, between health checks of an individual target.</td>
</tr>
<tr id="parameter-HealthCheckPath">
    <td><CopyableCode code="HealthCheckPath" /></td>
    <td><code>string</code></td>
    <td>&#91;HTTP/HTTPS health checks&#93; The destination for health checks on the targets. &#91;HTTP1 or HTTP2 protocol version&#93; The ping path. The default is /. &#91;GRPC protocol version&#93; The path of a custom health check method with the format /package.service/method. The default is /Amazon Web Services.ALB/healthcheck.</td>
</tr>
<tr id="parameter-HealthCheckPort">
    <td><CopyableCode code="HealthCheckPort" /></td>
    <td><code>string</code></td>
    <td>The port the load balancer uses when performing health checks on targets.</td>
</tr>
<tr id="parameter-HealthCheckProtocol">
    <td><CopyableCode code="HealthCheckProtocol" /></td>
    <td><code>string</code></td>
    <td>The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. It is supported for health checks only if the protocol of the target group is TCP, TLS, UDP, or TCP_UDP. The GENEVE, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC protocols are not supported for health checks.</td>
</tr>
<tr id="parameter-HealthCheckTimeoutSeconds">
    <td><CopyableCode code="HealthCheckTimeoutSeconds" /></td>
    <td><code>integer</code></td>
    <td>&#91;HTTP/HTTPS health checks&#93; The amount of time, in seconds, during which no response means a failed health check.</td>
</tr>
<tr id="parameter-HealthyThresholdCount">
    <td><CopyableCode code="HealthyThresholdCount" /></td>
    <td><code>integer</code></td>
    <td>The number of consecutive health checks successes required before considering an unhealthy target healthy.</td>
</tr>
<tr id="parameter-IpAddressType">
    <td><CopyableCode code="IpAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type. The default value is ipv4.</td>
</tr>
<tr id="parameter-LoadBalancerArn">
    <td><CopyableCode code="LoadBalancerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the load balancer.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. (You received this marker from a previous call.)</td>
</tr>
<tr id="parameter-Matcher">
    <td><CopyableCode code="Matcher" /></td>
    <td><code>object</code></td>
    <td>&#91;HTTP/HTTPS health checks&#93; The HTTP or gRPC codes to use when checking for a successful response from a target. For target groups with a protocol of TCP, TCP_UDP, UDP or TLS the range is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target groups with a protocol of GENEVE, the range is 200-399.</td>
</tr>
<tr id="parameter-Name">
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the target group. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.</td>
</tr>
<tr id="parameter-Names">
    <td><CopyableCode code="Names" /></td>
    <td><code>array</code></td>
    <td>The names of the target groups.</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with this call.</td>
</tr>
<tr id="parameter-Port">
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.</td>
</tr>
<tr id="parameter-Protocol">
    <td><CopyableCode code="Protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol to use for routing traffic to the targets. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, TCP_UDP, QUIC, or TCP_QUIC. For Gateway Load Balancers, the supported protocol is GENEVE. A TCP_UDP listener must be associated with a TCP_UDP target group. A TCP_QUIC listener must be associated with a TCP_QUIC target group. If the target is a Lambda function, this parameter does not apply.</td>
</tr>
<tr id="parameter-ProtocolVersion">
    <td><CopyableCode code="ProtocolVersion" /></td>
    <td><code>string</code></td>
    <td>&#91;HTTP/HTTPS protocol&#93; The protocol version. Specify GRPC to send requests to targets using gRPC. Specify HTTP2 to send requests to targets using HTTP/2. The default is HTTP1, which sends requests to targets using HTTP/1.1.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the target group.</td>
</tr>
<tr id="parameter-TargetControlPort">
    <td><CopyableCode code="TargetControlPort" /></td>
    <td><code>integer</code></td>
    <td>The port on which the target control agent and application load balancer exchange management traffic for the target optimizer feature.</td>
</tr>
<tr id="parameter-TargetGroupArns">
    <td><CopyableCode code="TargetGroupArns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARN) of the target groups.</td>
</tr>
<tr id="parameter-TargetType">
    <td><CopyableCode code="TargetType" /></td>
    <td><code>string</code></td>
    <td>The type of target that you must specify when registering targets with this target group. You can't specify targets for a target group using more than one target type. instance - Register targets by instance ID. This is the default value. ip - Register targets by IP address. You can specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses. lambda - Register a single Lambda function as a target. alb - Register a single Application Load Balancer as a target.</td>
</tr>
<tr id="parameter-UnhealthyThresholdCount">
    <td><CopyableCode code="UnhealthyThresholdCount" /></td>
    <td><code>integer</code></td>
    <td>The number of consecutive health check failures required before considering the target unhealthy.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the virtual private cloud (VPC). If the target is a Lambda function, this parameter does not apply. Otherwise, this parameter is required.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_target_groups"
    values={[
        { label: 'describe_target_groups', value: 'describe_target_groups' }
    ]}
>
<TabItem value="describe_target_groups">

Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.

```sql
SELECT
HealthCheckEnabled,
HealthCheckIntervalSeconds,
HealthCheckPath,
HealthCheckPort,
HealthCheckProtocol,
HealthCheckTimeoutSeconds,
HealthyThresholdCount,
IpAddressType,
LoadBalancerArns,
Matcher,
Port,
Protocol,
ProtocolVersion,
TargetControlPort,
TargetGroupArn,
TargetGroupName,
TargetType,
UnhealthyThresholdCount,
VpcId
FROM aws.elbv2.target_groups
WHERE region = '{{ region }}' -- required
AND LoadBalancerArn = '{{ LoadBalancerArn }}'
AND TargetGroupArns = '{{ TargetGroupArns }}'
AND Names = '{{ Names }}'
AND Marker = '{{ Marker }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_targets"
    values={[
        { label: 'register_targets', value: 'register_targets' },
        { label: 'create_target_group', value: 'create_target_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_targets">

Registers the specified targets with the specified target group. If the target is an EC2 instance, it must be in the running state when you register it. By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports. For more information, see the following: Register targets for your Application Load Balancer Register targets for your Network Load Balancer Register targets for your Gateway Load Balancer

```sql
INSERT INTO aws.elbv2.target_groups (
TargetGroupArn,
Targets,
region
)
SELECT 
'{{ TargetGroupArn }}',
'{{ Targets }}',
'{{ region }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="create_target_group">

Creates a target group. For more information, see the following: Target groups for your Application Load Balancers Target groups for your Network Load Balancers Target groups for your Gateway Load Balancers This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.

```sql
INSERT INTO aws.elbv2.target_groups (
region,
Name,
Protocol,
ProtocolVersion,
Port,
VpcId,
HealthCheckProtocol,
HealthCheckPort,
HealthCheckEnabled,
HealthCheckPath,
HealthCheckIntervalSeconds,
HealthCheckTimeoutSeconds,
HealthyThresholdCount,
UnhealthyThresholdCount,
Matcher,
TargetType,
Tags,
IpAddressType,
TargetControlPort
)
SELECT 
'{{ region }}',
'{{ Name }}',
'{{ Protocol }}',
'{{ ProtocolVersion }}',
'{{ Port }}',
'{{ VpcId }}',
'{{ HealthCheckProtocol }}',
'{{ HealthCheckPort }}',
'{{ HealthCheckEnabled }}',
'{{ HealthCheckPath }}',
'{{ HealthCheckIntervalSeconds }}',
'{{ HealthCheckTimeoutSeconds }}',
'{{ HealthyThresholdCount }}',
'{{ UnhealthyThresholdCount }}',
'{{ Matcher }}',
'{{ TargetType }}',
'{{ Tags }}',
'{{ IpAddressType }}',
'{{ TargetControlPort }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: target_groups
  props:
    - name: TargetGroupArn
      value: "{{ TargetGroupArn }}"
      description: Required parameter for the target_groups resource.
    - name: Targets
      value: "{{ Targets }}"
      description: Required parameter for the target_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the target_groups resource.
    - name: Name
      value: "{{ Name }}"
      description: The name of the target group. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.
      description: The name of the target group. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.
    - name: Protocol
      value: "{{ Protocol }}"
      description: The protocol to use for routing traffic to the targets. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, TCP_UDP, QUIC, or TCP_QUIC. For Gateway Load Balancers, the supported protocol is GENEVE. A TCP_UDP listener must be associated with a TCP_UDP target group. A TCP_QUIC listener must be associated with a TCP_QUIC target group. If the target is a Lambda function, this parameter does not apply.
      description: The protocol to use for routing traffic to the targets. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, TCP_UDP, QUIC, or TCP_QUIC. For Gateway Load Balancers, the supported protocol is GENEVE. A TCP_UDP listener must be associated with a TCP_UDP target group. A TCP_QUIC listener must be associated with a TCP_QUIC target group. If the target is a Lambda function, this parameter does not apply.
    - name: ProtocolVersion
      value: "{{ ProtocolVersion }}"
      description: [HTTP/HTTPS protocol] The protocol version. Specify GRPC to send requests to targets using gRPC. Specify HTTP2 to send requests to targets using HTTP/2. The default is HTTP1, which sends requests to targets using HTTP/1.1.
      description: [HTTP/HTTPS protocol] The protocol version. Specify GRPC to send requests to targets using gRPC. Specify HTTP2 to send requests to targets using HTTP/2. The default is HTTP1, which sends requests to targets using HTTP/1.1.
    - name: Port
      value: {{ Port }}
      description: The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.
      description: The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.
    - name: VpcId
      value: "{{ VpcId }}"
      description: The identifier of the virtual private cloud (VPC). If the target is a Lambda function, this parameter does not apply. Otherwise, this parameter is required.
      description: The identifier of the virtual private cloud (VPC). If the target is a Lambda function, this parameter does not apply. Otherwise, this parameter is required.
    - name: HealthCheckProtocol
      value: "{{ HealthCheckProtocol }}"
      description: The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. The GENEVE, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC protocols are not supported for health checks.
      description: The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. The GENEVE, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC protocols are not supported for health checks.
    - name: HealthCheckPort
      value: "{{ HealthCheckPort }}"
      description: The port the load balancer uses when performing health checks on targets. If the protocol is HTTP, HTTPS, TCP, TLS, UDP, TCP_UDP, QUIC, or TCP_QUIC the default is traffic-port, which is the port on which each target receives traffic from the load balancer. If the protocol is GENEVE, the default is port 80.
      description: The port the load balancer uses when performing health checks on targets. If the protocol is HTTP, HTTPS, TCP, TLS, UDP, TCP_UDP, QUIC, or TCP_QUIC the default is traffic-port, which is the port on which each target receives traffic from the load balancer. If the protocol is GENEVE, the default is port 80.
    - name: HealthCheckEnabled
      value: {{ HealthCheckEnabled }}
      description: Indicates whether health checks are enabled. If the target type is lambda, health checks are disabled by default but can be enabled. If the target type is instance, ip, or alb, health checks are always enabled and can't be disabled.
      description: Indicates whether health checks are enabled. If the target type is lambda, health checks are disabled by default but can be enabled. If the target type is instance, ip, or alb, health checks are always enabled and can't be disabled.
    - name: HealthCheckPath
      value: "{{ HealthCheckPath }}"
      description: [HTTP/HTTPS health checks] The destination for health checks on the targets. [HTTP1 or HTTP2 protocol version] The ping path. The default is /. [GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /Amazon Web Services.ALB/healthcheck.
      description: [HTTP/HTTPS health checks] The destination for health checks on the targets. [HTTP1 or HTTP2 protocol version] The ping path. The default is /. [GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /Amazon Web Services.ALB/healthcheck.
    - name: HealthCheckIntervalSeconds
      value: {{ HealthCheckIntervalSeconds }}
      description: The approximate amount of time, in seconds, between health checks of an individual target. The range is 5-300. If the target group protocol is TCP, TLS, UDP, TCP_UDP, QUIC, TCP_QUIC, HTTP or HTTPS, the default is 30 seconds. If the target group protocol is GENEVE, the default is 10 seconds. If the target type is lambda, the default is 35 seconds.
      description: The approximate amount of time, in seconds, between health checks of an individual target. The range is 5-300. If the target group protocol is TCP, TLS, UDP, TCP_UDP, QUIC, TCP_QUIC, HTTP or HTTPS, the default is 30 seconds. If the target group protocol is GENEVE, the default is 10 seconds. If the target type is lambda, the default is 35 seconds.
    - name: HealthCheckTimeoutSeconds
      value: {{ HealthCheckTimeoutSeconds }}
      description: The amount of time, in seconds, during which no response from a target means a failed health check. The range is 2–120 seconds. For target groups with a protocol of HTTP, the default is 6 seconds. For target groups with a protocol of TCP, TLS or HTTPS, the default is 10 seconds. For target groups with a protocol of GENEVE, the default is 5 seconds. If the target type is lambda, the default is 30 seconds.
      description: The amount of time, in seconds, during which no response from a target means a failed health check. The range is 2–120 seconds. For target groups with a protocol of HTTP, the default is 6 seconds. For target groups with a protocol of TCP, TLS or HTTPS, the default is 10 seconds. For target groups with a protocol of GENEVE, the default is 5 seconds. If the target type is lambda, the default is 30 seconds.
    - name: HealthyThresholdCount
      value: {{ HealthyThresholdCount }}
      description: The number of consecutive health check successes required before considering a target healthy. The range is 2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, HTTP or HTTPS, the default is 5. For target groups with a protocol of GENEVE, the default is 5. If the target type is lambda, the default is 5.
      description: The number of consecutive health check successes required before considering a target healthy. The range is 2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, HTTP or HTTPS, the default is 5. For target groups with a protocol of GENEVE, the default is 5. If the target type is lambda, the default is 5.
    - name: UnhealthyThresholdCount
      value: {{ UnhealthyThresholdCount }}
      description: The number of consecutive health check failures required before considering a target unhealthy. The range is 2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, QUIC, TCP_QUIC, HTTP or HTTPS, the default is 2. For target groups with a protocol of GENEVE, the default is 2. If the target type is lambda, the default is 5.
      description: The number of consecutive health check failures required before considering a target unhealthy. The range is 2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, QUIC, TCP_QUIC, HTTP or HTTPS, the default is 2. For target groups with a protocol of GENEVE, the default is 2. If the target type is lambda, the default is 5.
    - name: Matcher
      value: "{{ Matcher }}"
      description: [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. For target groups with a protocol of TCP, TCP_UDP, UDP, QUIC, TCP_QUIC, or TLS the range is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target groups with a protocol of GENEVE, the range is 200-399.
      description: [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. For target groups with a protocol of TCP, TCP_UDP, UDP, QUIC, TCP_QUIC, or TLS the range is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target groups with a protocol of GENEVE, the range is 200-399.
    - name: TargetType
      value: "{{ TargetType }}"
      description: The type of target that you must specify when registering targets with this target group. You can't specify targets for a target group using more than one target type. instance - Register targets by instance ID. This is the default value. ip - Register targets by IP address. You can specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses. lambda - Register a single Lambda function as a target. alb - Register a single Application Load Balancer as a target.
      description: The type of target that you must specify when registering targets with this target group. You can't specify targets for a target group using more than one target type. instance - Register targets by instance ID. This is the default value. ip - Register targets by IP address. You can specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses. lambda - Register a single Lambda function as a target. alb - Register a single Application Load Balancer as a target.
    - name: Tags
      value: "{{ Tags }}"
      description: The tags to assign to the target group.
      description: The tags to assign to the target group.
    - name: IpAddressType
      value: "{{ IpAddressType }}"
      description: The IP address type. The default value is ipv4.
      description: The IP address type. The default value is ipv4.
    - name: TargetControlPort
      value: {{ TargetControlPort }}
      description: The port on which the target control agent and application load balancer exchange management traffic for the target optimizer feature.
      description: The port on which the target control agent and application load balancer exchange management traffic for the target optimizer feature.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_target_group"
    values={[
        { label: 'modify_target_group', value: 'modify_target_group' }
    ]}
>
<TabItem value="modify_target_group">

Modifies the health checks used when evaluating the health state of the targets in the specified target group.

```sql
UPDATE aws.elbv2.target_groups
SET 
-- No updatable properties
WHERE 
TargetGroupArn = '{{ TargetGroupArn }}' --required
AND region = '{{ region }}' --required
AND HealthCheckProtocol = '{{ HealthCheckProtocol}}'
AND HealthCheckPort = '{{ HealthCheckPort}}'
AND HealthCheckPath = '{{ HealthCheckPath}}'
AND HealthCheckEnabled = {{ HealthCheckEnabled}}
AND HealthCheckIntervalSeconds = '{{ HealthCheckIntervalSeconds}}'
AND HealthCheckTimeoutSeconds = '{{ HealthCheckTimeoutSeconds}}'
AND HealthyThresholdCount = '{{ HealthyThresholdCount}}'
AND UnhealthyThresholdCount = '{{ UnhealthyThresholdCount}}'
AND Matcher = '{{ Matcher}}'
RETURNING
line_items;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_targets"
    values={[
        { label: 'deregister_targets', value: 'deregister_targets' },
        { label: 'delete_target_group', value: 'delete_target_group' }
    ]}
>
<TabItem value="deregister_targets">

Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer. The load balancer stops sending requests to targets that are deregistering, but uses connection draining to ensure that in-flight traffic completes on the existing connections. This deregistration delay is configured by default but can be updated for each target group. For more information, see the following: Deregistration delay in the Application Load Balancers User Guide Deregistration delay in the Network Load Balancers User Guide Deregistration delay in the Gateway Load Balancers User Guide Note: If the specified target does not exist, the action returns successfully.

```sql
DELETE FROM aws.elbv2.target_groups
WHERE TargetGroupArn = '{{ TargetGroupArn }}' --required
AND Targets = '{{ Targets }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_target_group">

Deletes the specified target group. You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.

```sql
DELETE FROM aws.elbv2.target_groups
WHERE TargetGroupArn = '{{ TargetGroupArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
