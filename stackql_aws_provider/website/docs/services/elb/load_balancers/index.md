--- 
title: load_balancers
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancers
  - elb
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elb.load_balancers" /></td></tr>
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
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>string</code></td>
    <td>The Availability Zones for the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="backend_server_descriptions" /></td>
    <td><code>string</code></td>
    <td>Information about your EC2 instances.</td>
</tr>
<tr>
    <td><CopyableCode code="canonical_hosted_zone_name" /></td>
    <td><code>string</code></td>
    <td>The DNS name of the load balancer. For more information, see Configure a Custom Domain Name in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="canonical_hosted_zone_name_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Route 53 hosted zone for the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the load balancer was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_name" /></td>
    <td><code>string</code></td>
    <td>The DNS name of the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="health_check" /></td>
    <td><code>string</code></td>
    <td>Information about the health checks conducted on the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="instances" /></td>
    <td><code>string</code></td>
    <td>The IDs of the instances for the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="listener_descriptions" /></td>
    <td><code>string</code></td>
    <td>The listeners for the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="load_balancer_name" /></td>
    <td><code>string</code></td>
    <td>The name of the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="policies" /></td>
    <td><code>string</code></td>
    <td>The policies defined for the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="scheme" /></td>
    <td><code>string</code></td>
    <td>The type of load balancer. Valid only for load balancers in a VPC. If Scheme is internet-facing, the load balancer has a public DNS name that resolves to a public IP address. If Scheme is internal, the load balancer has a public DNS name that resolves to a private IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="security_groups" /></td>
    <td><code>string</code></td>
    <td>The security groups for the load balancer. Valid only for load balancers in a VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="source_security_group" /></td>
    <td><code>string</code></td>
    <td>The security group for the load balancer, which you can use as part of your inbound rules for your registered instances. To only allow traffic from load balancers, add a security group rule that specifies this source security group as the inbound source.</td>
</tr>
<tr>
    <td><CopyableCode code="subnets" /></td>
    <td><code>string</code></td>
    <td>The IDs of the subnets for the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC for the load balancer.</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LoadBalancerNames"><code>LoadBalancerNames</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.</td>
</tr>
<tr>
    <td><a href="#create_app_cookie_stickiness_policy"><CopyableCode code="create_app_cookie_stickiness_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-PolicyName"><code>PolicyName</code></a>, <a href="#parameter-CookieName"><code>CookieName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners. This policy is similar to the policy created by CreateLBCookieStickinessPolicy, except that the lifetime of the special Elastic Load Balancing cookie, AWSELB, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie. If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued. For more information, see Application-Controlled Session Stickiness in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#create_lb_cookie_stickiness_policy"><CopyableCode code="create_lb_cookie_stickiness_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-PolicyName"><code>PolicyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CookieExpirationPeriod"><code>CookieExpirationPeriod</code></a></td>
    <td>Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners. When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm. A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration. For more information, see Duration-Based Session Stickiness in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#create_load_balancer"><CopyableCode code="create_load_balancer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-Listeners"><code>Listeners</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityZones"><code>AvailabilityZones</code></a>, <a href="#parameter-Subnets"><code>Subnets</code></a>, <a href="#parameter-SecurityGroups"><code>SecurityGroups</code></a>, <a href="#parameter-Scheme"><code>Scheme</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a Classic Load Balancer. You can add listeners, security groups, subnets, and tags when you create your load balancer, or you can add them later using CreateLoadBalancerListeners, ApplySecurityGroupsToLoadBalancer, AttachLoadBalancerToSubnets, and AddTags. To describe your current load balancers, see DescribeLoadBalancers. When you are finished with a load balancer, you can delete it using DeleteLoadBalancer. You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see Limits for Your Classic Load Balancer in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#register_instances_with_load_balancer"><CopyableCode code="register_instances_with_load_balancer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Instances"><code>Instances</code></a></td>
    <td>Adds the specified instances to the specified load balancer. The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC. Note that RegisterInstanceWithLoadBalancer completes when the request has been registered. Instance registration takes a little time to complete. To check the state of the registered instances, use DescribeLoadBalancers or DescribeInstanceHealth. After the instance is registered, it starts receiving traffic and requests from the load balancer. Any instance that is not in one of the Availability Zones registered for the load balancer is moved to the OutOfService state. If an Availability Zone is added to the load balancer later, any instances registered with the load balancer move to the InService state. To deregister instances from a load balancer, use DeregisterInstancesFromLoadBalancer. For more information, see Register or De-Register EC2 Instances in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#set_load_balancer_listener_ssl_certificate"><CopyableCode code="set_load_balancer_listener_ssl_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-LoadBalancerPort"><code>LoadBalancerPort</code></a>, <a href="#parameter-SSLCertificateId"><code>SSLCertificateId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port. For more information about updating your SSL certificate, see Replace the SSL Certificate for Your Load Balancer in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#attach_load_balancer_to_subnets"><CopyableCode code="attach_load_balancer_to_subnets" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Subnets"><code>Subnets</code></a></td>
    <td>Adds one or more subnets to the set of configured subnets for the specified load balancer. The load balancer evenly distributes requests across all registered subnets. For more information, see Add or Remove Subnets for Your Load Balancer in a VPC in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#delete_load_balancer_listeners"><CopyableCode code="delete_load_balancer_listeners" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-LoadBalancerPorts"><code>LoadBalancerPorts</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified listeners from the specified load balancer.</td>
</tr>
<tr>
    <td><a href="#delete_load_balancer"><CopyableCode code="delete_load_balancer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified load balancer. If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances. If the load balancer does not exist or has already been deleted, the call to DeleteLoadBalancer still succeeds.</td>
</tr>
<tr>
    <td><a href="#apply_security_groups_to_load_balancer"><CopyableCode code="apply_security_groups_to_load_balancer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-SecurityGroups"><code>SecurityGroups</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups. For more information, see Security Groups for Load Balancers in a VPC in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#configure_health_check"><CopyableCode code="configure_health_check" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-HealthCheck"><code>HealthCheck</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Specifies the health check settings to use when evaluating the health state of your EC2 instances. For more information, see Configure Health Checks for Your Load Balancer in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#create_load_balancer_listeners"><CopyableCode code="create_load_balancer_listeners" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-Listeners"><code>Listeners</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener. For more information, see Listeners for Your Classic Load Balancer in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#deregister_instances_from_load_balancer"><CopyableCode code="deregister_instances_from_load_balancer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Instances"><code>Instances</code></a></td>
    <td>Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer. You can use DescribeLoadBalancers to verify that the instance is deregistered from the load balancer. For more information, see Register or De-Register EC2 Instances in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#detach_load_balancer_from_subnets"><CopyableCode code="detach_load_balancer_from_subnets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Subnets"><code>Subnets</code></a></td>
    <td>Removes the specified subnets from the set of configured subnets for the load balancer. After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the OutOfService state. Then, the load balancer balances the traffic among the remaining routable subnets.</td>
</tr>
<tr>
    <td><a href="#disable_availability_zones_for_load_balancer"><CopyableCode code="disable_availability_zones_for_load_balancer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-AvailabilityZones"><code>AvailabilityZones</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC. For load balancers in a non-default VPC, use DetachLoadBalancerFromSubnets. There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the OutOfService state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones. For more information, see Add or Remove Availability Zones in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#enable_availability_zones_for_load_balancer"><CopyableCode code="enable_availability_zones_for_load_balancer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-AvailabilityZones"><code>AvailabilityZones</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC. For load balancers in a non-default VPC, use AttachLoadBalancerToSubnets. The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see Add or Remove Availability Zones in the Classic Load Balancers Guide.</td>
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
<tr id="parameter-AvailabilityZones">
    <td><CopyableCode code="AvailabilityZones" /></td>
    <td><code>array</code></td>
    <td>The Availability Zones. These must be in the same region as the load balancer.</td>
</tr>
<tr id="parameter-CookieName">
    <td><CopyableCode code="CookieName" /></td>
    <td><code>string</code></td>
    <td>The name of the application cookie used for stickiness.</td>
</tr>
<tr id="parameter-HealthCheck">
    <td><CopyableCode code="HealthCheck" /></td>
    <td><code>object</code></td>
    <td>The configuration information.</td>
</tr>
<tr id="parameter-Listeners">
    <td><CopyableCode code="Listeners" /></td>
    <td><code>array</code></td>
    <td>The listeners.</td>
</tr>
<tr id="parameter-LoadBalancerName">
    <td><CopyableCode code="LoadBalancerName" /></td>
    <td><code>string</code></td>
    <td>The name of the load balancer.</td>
</tr>
<tr id="parameter-LoadBalancerPort">
    <td><CopyableCode code="LoadBalancerPort" /></td>
    <td><code>integer</code></td>
    <td>The port that uses the specified SSL certificate.</td>
</tr>
<tr id="parameter-LoadBalancerPorts">
    <td><CopyableCode code="LoadBalancerPorts" /></td>
    <td><code>array</code></td>
    <td>The client port numbers of the listeners.</td>
</tr>
<tr id="parameter-PolicyName">
    <td><CopyableCode code="PolicyName" /></td>
    <td><code>string</code></td>
    <td>The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.</td>
</tr>
<tr id="parameter-SSLCertificateId">
    <td><CopyableCode code="SSLCertificateId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the SSL certificate.</td>
</tr>
<tr id="parameter-SecurityGroups">
    <td><CopyableCode code="SecurityGroups" /></td>
    <td><code>array</code></td>
    <td>The IDs of the security groups to associate with the load balancer. Note that you cannot specify the name of the security group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AvailabilityZones">
    <td><CopyableCode code="AvailabilityZones" /></td>
    <td><code>array</code></td>
    <td>One or more Availability Zones from the same region as the load balancer. You must specify at least one Availability Zone. You can add more Availability Zones after you create the load balancer using EnableAvailabilityZonesForLoadBalancer.</td>
</tr>
<tr id="parameter-CookieExpirationPeriod">
    <td><CopyableCode code="CookieExpirationPeriod" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time period, in seconds, after which the cookie should be considered stale. If you do not specify this parameter, the default value is 0, which indicates that the sticky session should last for the duration of the browser session.</td>
</tr>
<tr id="parameter-Instances">
    <td><CopyableCode code="Instances" /></td>
    <td><code>array</code></td>
    <td>The IDs of the instances.</td>
</tr>
<tr id="parameter-LoadBalancerNames">
    <td><CopyableCode code="LoadBalancerNames" /></td>
    <td><code>array</code></td>
    <td>The names of the load balancers.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. (You received this marker from a previous call.)</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with this call (a number from 1 to 400). The default is 400.</td>
</tr>
<tr id="parameter-Scheme">
    <td><CopyableCode code="Scheme" /></td>
    <td><code>string</code></td>
    <td>The type of a load balancer. Valid only for load balancers in a VPC. By default, Elastic Load Balancing creates an Internet-facing load balancer with a DNS name that resolves to public IP addresses. For more information about Internet-facing and Internal load balancers, see Load Balancer Scheme in the Elastic Load Balancing User Guide. Specify internal to create a load balancer with a DNS name that resolves to private IP addresses.</td>
</tr>
<tr id="parameter-SecurityGroups">
    <td><CopyableCode code="SecurityGroups" /></td>
    <td><code>array</code></td>
    <td>The IDs of the security groups to assign to the load balancer.</td>
</tr>
<tr id="parameter-Subnets">
    <td><CopyableCode code="Subnets" /></td>
    <td><code>array</code></td>
    <td>The IDs of the subnets.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags to assign to the load balancer. For more information about tagging your load balancer, see Tag Your Classic Load Balancer in the Classic Load Balancers Guide.</td>
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

Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.

```sql
SELECT
availability_zones,
backend_server_descriptions,
canonical_hosted_zone_name,
canonical_hosted_zone_name_id,
created_time,
dns_name,
health_check,
instances,
listener_descriptions,
load_balancer_name,
policies,
scheme,
security_groups,
source_security_group,
subnets,
vpc_id
FROM aws.elb.load_balancers
WHERE region = '{{ region }}' -- required
AND LoadBalancerNames = '{{ LoadBalancerNames }}'
AND Marker = '{{ Marker }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app_cookie_stickiness_policy"
    values={[
        { label: 'create_app_cookie_stickiness_policy', value: 'create_app_cookie_stickiness_policy' },
        { label: 'create_lb_cookie_stickiness_policy', value: 'create_lb_cookie_stickiness_policy' },
        { label: 'create_load_balancer', value: 'create_load_balancer' },
        { label: 'register_instances_with_load_balancer', value: 'register_instances_with_load_balancer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app_cookie_stickiness_policy">

Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners. This policy is similar to the policy created by CreateLBCookieStickinessPolicy, except that the lifetime of the special Elastic Load Balancing cookie, AWSELB, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie. If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued. For more information, see Application-Controlled Session Stickiness in the Classic Load Balancers Guide.

```sql
INSERT INTO aws.elb.load_balancers (
LoadBalancerName,
PolicyName,
CookieName,
region
)
SELECT 
'{{ LoadBalancerName }}',
'{{ PolicyName }}',
'{{ CookieName }}',
'{{ region }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="create_lb_cookie_stickiness_policy">

Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners. When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm. A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration. For more information, see Duration-Based Session Stickiness in the Classic Load Balancers Guide.

```sql
INSERT INTO aws.elb.load_balancers (
LoadBalancerName,
PolicyName,
region,
CookieExpirationPeriod
)
SELECT 
'{{ LoadBalancerName }}',
'{{ PolicyName }}',
'{{ region }}',
'{{ CookieExpirationPeriod }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="create_load_balancer">

Creates a Classic Load Balancer. You can add listeners, security groups, subnets, and tags when you create your load balancer, or you can add them later using CreateLoadBalancerListeners, ApplySecurityGroupsToLoadBalancer, AttachLoadBalancerToSubnets, and AddTags. To describe your current load balancers, see DescribeLoadBalancers. When you are finished with a load balancer, you can delete it using DeleteLoadBalancer. You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see Limits for Your Classic Load Balancer in the Classic Load Balancers Guide.

```sql
INSERT INTO aws.elb.load_balancers (
LoadBalancerName,
Listeners,
region,
AvailabilityZones,
Subnets,
SecurityGroups,
Scheme,
Tags
)
SELECT 
'{{ LoadBalancerName }}',
'{{ Listeners }}',
'{{ region }}',
'{{ AvailabilityZones }}',
'{{ Subnets }}',
'{{ SecurityGroups }}',
'{{ Scheme }}',
'{{ Tags }}'
RETURNING
dns_name
;
```
</TabItem>
<TabItem value="register_instances_with_load_balancer">

Adds the specified instances to the specified load balancer. The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC. Note that RegisterInstanceWithLoadBalancer completes when the request has been registered. Instance registration takes a little time to complete. To check the state of the registered instances, use DescribeLoadBalancers or DescribeInstanceHealth. After the instance is registered, it starts receiving traffic and requests from the load balancer. Any instance that is not in one of the Availability Zones registered for the load balancer is moved to the OutOfService state. If an Availability Zone is added to the load balancer later, any instances registered with the load balancer move to the InService state. To deregister instances from a load balancer, use DeregisterInstancesFromLoadBalancer. For more information, see Register or De-Register EC2 Instances in the Classic Load Balancers Guide.

```sql
INSERT INTO aws.elb.load_balancers (
LoadBalancerName,
region,
Instances
)
SELECT 
'{{ LoadBalancerName }}',
'{{ region }}',
'{{ Instances }}'
RETURNING
instances
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: load_balancers
  props:
    - name: LoadBalancerName
      value: "{{ LoadBalancerName }}"
      description: Required parameter for the load_balancers resource.
    - name: PolicyName
      value: "{{ PolicyName }}"
      description: Required parameter for the load_balancers resource.
    - name: CookieName
      value: "{{ CookieName }}"
      description: Required parameter for the load_balancers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the load_balancers resource.
    - name: Listeners
      value: "{{ Listeners }}"
      description: Required parameter for the load_balancers resource.
    - name: CookieExpirationPeriod
      value: "{{ CookieExpirationPeriod }}"
      description: The time period, in seconds, after which the cookie should be considered stale. If you do not specify this parameter, the default value is 0, which indicates that the sticky session should last for the duration of the browser session.
      description: The time period, in seconds, after which the cookie should be considered stale. If you do not specify this parameter, the default value is 0, which indicates that the sticky session should last for the duration of the browser session.
    - name: AvailabilityZones
      value: "{{ AvailabilityZones }}"
      description: One or more Availability Zones from the same region as the load balancer. You must specify at least one Availability Zone. You can add more Availability Zones after you create the load balancer using EnableAvailabilityZonesForLoadBalancer.
      description: One or more Availability Zones from the same region as the load balancer. You must specify at least one Availability Zone. You can add more Availability Zones after you create the load balancer using EnableAvailabilityZonesForLoadBalancer.
    - name: Subnets
      value: "{{ Subnets }}"
      description: The IDs of the subnets in your VPC to attach to the load balancer. Specify one subnet per Availability Zone specified in AvailabilityZones.
      description: The IDs of the subnets in your VPC to attach to the load balancer. Specify one subnet per Availability Zone specified in AvailabilityZones.
    - name: SecurityGroups
      value: "{{ SecurityGroups }}"
      description: The IDs of the security groups to assign to the load balancer.
      description: The IDs of the security groups to assign to the load balancer.
    - name: Scheme
      value: "{{ Scheme }}"
      description: The type of a load balancer. Valid only for load balancers in a VPC. By default, Elastic Load Balancing creates an Internet-facing load balancer with a DNS name that resolves to public IP addresses. For more information about Internet-facing and Internal load balancers, see Load Balancer Scheme in the Elastic Load Balancing User Guide. Specify internal to create a load balancer with a DNS name that resolves to private IP addresses.
      description: The type of a load balancer. Valid only for load balancers in a VPC. By default, Elastic Load Balancing creates an Internet-facing load balancer with a DNS name that resolves to public IP addresses. For more information about Internet-facing and Internal load balancers, see Load Balancer Scheme in the Elastic Load Balancing User Guide. Specify internal to create a load balancer with a DNS name that resolves to private IP addresses.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags to assign to the load balancer. For more information about tagging your load balancer, see Tag Your Classic Load Balancer in the Classic Load Balancers Guide.
      description: A list of tags to assign to the load balancer. For more information about tagging your load balancer, see Tag Your Classic Load Balancer in the Classic Load Balancers Guide.
    - name: Instances
      value: "{{ Instances }}"
      description: The IDs of the instances.
      description: The IDs of the instances.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_load_balancer_listener_ssl_certificate"
    values={[
        { label: 'set_load_balancer_listener_ssl_certificate', value: 'set_load_balancer_listener_ssl_certificate' },
        { label: 'attach_load_balancer_to_subnets', value: 'attach_load_balancer_to_subnets' }
    ]}
>
<TabItem value="set_load_balancer_listener_ssl_certificate">

Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port. For more information about updating your SSL certificate, see Replace the SSL Certificate for Your Load Balancer in the Classic Load Balancers Guide.

```sql
UPDATE aws.elb.load_balancers
SET 
-- No updatable properties
WHERE 
LoadBalancerName = '{{ LoadBalancerName }}' --required
AND LoadBalancerPort = '{{ LoadBalancerPort }}' --required
AND SSLCertificateId = '{{ SSLCertificateId }}' --required
AND region = '{{ region }}' --required
RETURNING
line_items;
```
</TabItem>
<TabItem value="attach_load_balancer_to_subnets">

Adds one or more subnets to the set of configured subnets for the specified load balancer. The load balancer evenly distributes requests across all registered subnets. For more information, see Add or Remove Subnets for Your Load Balancer in a VPC in the Classic Load Balancers Guide.

```sql
UPDATE aws.elb.load_balancers
SET 
-- No updatable properties
WHERE 
LoadBalancerName = '{{ LoadBalancerName }}' --required
AND region = '{{ region }}' --required
AND Subnets = '{{ Subnets}}'
RETURNING
line_items;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_load_balancer_listeners"
    values={[
        { label: 'delete_load_balancer_listeners', value: 'delete_load_balancer_listeners' },
        { label: 'delete_load_balancer', value: 'delete_load_balancer' }
    ]}
>
<TabItem value="delete_load_balancer_listeners">

Deletes the specified listeners from the specified load balancer.

```sql
DELETE FROM aws.elb.load_balancers
WHERE LoadBalancerName = '{{ LoadBalancerName }}' --required
AND LoadBalancerPorts = '{{ LoadBalancerPorts }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_load_balancer">

Deletes the specified load balancer. If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances. If the load balancer does not exist or has already been deleted, the call to DeleteLoadBalancer still succeeds.

```sql
DELETE FROM aws.elb.load_balancers
WHERE LoadBalancerName = '{{ LoadBalancerName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="apply_security_groups_to_load_balancer"
    values={[
        { label: 'apply_security_groups_to_load_balancer', value: 'apply_security_groups_to_load_balancer' },
        { label: 'configure_health_check', value: 'configure_health_check' },
        { label: 'create_load_balancer_listeners', value: 'create_load_balancer_listeners' },
        { label: 'deregister_instances_from_load_balancer', value: 'deregister_instances_from_load_balancer' },
        { label: 'detach_load_balancer_from_subnets', value: 'detach_load_balancer_from_subnets' },
        { label: 'disable_availability_zones_for_load_balancer', value: 'disable_availability_zones_for_load_balancer' },
        { label: 'enable_availability_zones_for_load_balancer', value: 'enable_availability_zones_for_load_balancer' }
    ]}
>
<TabItem value="apply_security_groups_to_load_balancer">

Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups. For more information, see Security Groups for Load Balancers in a VPC in the Classic Load Balancers Guide.

```sql
EXEC aws.elb.load_balancers.apply_security_groups_to_load_balancer 
@LoadBalancerName='{{ LoadBalancerName }}' --required, 
@SecurityGroups='{{ SecurityGroups }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="configure_health_check">

Specifies the health check settings to use when evaluating the health state of your EC2 instances. For more information, see Configure Health Checks for Your Load Balancer in the Classic Load Balancers Guide.

```sql
EXEC aws.elb.load_balancers.configure_health_check 
@LoadBalancerName='{{ LoadBalancerName }}' --required, 
@HealthCheck='{{ HealthCheck }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="create_load_balancer_listeners">

Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener. For more information, see Listeners for Your Classic Load Balancer in the Classic Load Balancers Guide.

```sql
EXEC aws.elb.load_balancers.create_load_balancer_listeners 
@LoadBalancerName='{{ LoadBalancerName }}' --required, 
@Listeners='{{ Listeners }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="deregister_instances_from_load_balancer">

Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer. You can use DescribeLoadBalancers to verify that the instance is deregistered from the load balancer. For more information, see Register or De-Register EC2 Instances in the Classic Load Balancers Guide.

```sql
EXEC aws.elb.load_balancers.deregister_instances_from_load_balancer 
@LoadBalancerName='{{ LoadBalancerName }}' --required, 
@region='{{ region }}' --required, 
@Instances='{{ Instances }}'
;
```
</TabItem>
<TabItem value="detach_load_balancer_from_subnets">

Removes the specified subnets from the set of configured subnets for the load balancer. After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the OutOfService state. Then, the load balancer balances the traffic among the remaining routable subnets.

```sql
EXEC aws.elb.load_balancers.detach_load_balancer_from_subnets 
@LoadBalancerName='{{ LoadBalancerName }}' --required, 
@region='{{ region }}' --required, 
@Subnets='{{ Subnets }}'
;
```
</TabItem>
<TabItem value="disable_availability_zones_for_load_balancer">

Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC. For load balancers in a non-default VPC, use DetachLoadBalancerFromSubnets. There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the OutOfService state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones. For more information, see Add or Remove Availability Zones in the Classic Load Balancers Guide.

```sql
EXEC aws.elb.load_balancers.disable_availability_zones_for_load_balancer 
@LoadBalancerName='{{ LoadBalancerName }}' --required, 
@AvailabilityZones='{{ AvailabilityZones }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="enable_availability_zones_for_load_balancer">

Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC. For load balancers in a non-default VPC, use AttachLoadBalancerToSubnets. The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see Add or Remove Availability Zones in the Classic Load Balancers Guide.

```sql
EXEC aws.elb.load_balancers.enable_availability_zones_for_load_balancer 
@LoadBalancerName='{{ LoadBalancerName }}' --required, 
@AvailabilityZones='{{ AvailabilityZones }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
