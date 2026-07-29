--- 
title: load_balancers
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancers
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

Creates, updates, deletes, gets or lists a <code>load_balancers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="load_balancers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elbv2.load_balancers" /></td></tr>
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
    <td>The subnets for the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="canonical_hosted_zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Route 53 hosted zone associated with the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the load balancer was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_owned_ipv_4_pool" /></td>
    <td><code>string</code></td>
    <td>&#91;Application Load Balancers on Outposts&#93; The ID of the customer-owned address pool.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_name" /></td>
    <td><code>string</code></td>
    <td>The public DNS name of the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_prefix_for_ipv_6_source_nat" /></td>
    <td><code>string</code></td>
    <td>&#91;Network Load Balancers with UDP listeners&#93; Indicates whether to use an IPv6 prefix from each subnet for source NAT. The IP address type must be dualstack. The default value is off.</td>
</tr>
<tr>
    <td><CopyableCode code="enforce_security_group_inbound_rules_on_private_link_traffic" /></td>
    <td><code>string</code></td>
    <td>Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through Amazon Web Services PrivateLink.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address_type" /></td>
    <td><code>string</code></td>
    <td>The type of IP addresses used for public or private connections by the subnets attached to your load balancer. &#91;Application Load Balancers&#93; The possible values are ipv4 (IPv4 addresses), dualstack (IPv4 and IPv6 addresses), and dualstack-without-public-ipv4 (public IPv6 addresses and private IPv4 and IPv6 addresses). &#91;Network Load Balancers and Gateway Load Balancers&#93; The possible values are ipv4 (IPv4 addresses) and dualstack (IPv4 and IPv6 addresses).</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_pools" /></td>
    <td><code>string</code></td>
    <td>&#91;Application Load Balancers&#93; The IPAM pool in use by the load balancer, if configured.</td>
</tr>
<tr>
    <td><CopyableCode code="load_balancer_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="load_balancer_name" /></td>
    <td><code>string</code></td>
    <td>The name of the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="scheme" /></td>
    <td><code>string</code></td>
    <td>The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="security_groups" /></td>
    <td><code>string</code></td>
    <td>The IDs of the security groups for the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of load balancer.</td>
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
    <td><a href="#parameter-LoadBalancerArns"><code>LoadBalancerArns</code></a>, <a href="#parameter-Names"><code>Names</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>Describes the specified load balancers or all of your load balancers.</td>
</tr>
<tr>
    <td><a href="#create_load_balancer"><CopyableCode code="create_load_balancer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Subnets"><code>Subnets</code></a>, <a href="#parameter-SubnetMappings"><code>SubnetMappings</code></a>, <a href="#parameter-SecurityGroups"><code>SecurityGroups</code></a>, <a href="#parameter-Scheme"><code>Scheme</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-IpAddressType"><code>IpAddressType</code></a>, <a href="#parameter-CustomerOwnedIpv4Pool"><code>CustomerOwnedIpv4Pool</code></a>, <a href="#parameter-EnablePrefixForIpv6SourceNat"><code>EnablePrefixForIpv6SourceNat</code></a>, <a href="#parameter-IpamPools"><code>IpamPools</code></a></td>
    <td>Creates an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. For more information, see the following: Application Load Balancers Network Load Balancers Gateway Load Balancers This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.</td>
</tr>
<tr>
    <td><a href="#set_ip_address_type"><CopyableCode code="set_ip_address_type" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-LoadBalancerArn"><code>LoadBalancerArn</code></a>, <a href="#parameter-IpAddressType"><code>IpAddressType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets the type of IP addresses used by the subnets of the specified load balancer.</td>
</tr>
<tr>
    <td><a href="#set_security_groups"><CopyableCode code="set_security_groups" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-LoadBalancerArn"><code>LoadBalancerArn</code></a>, <a href="#parameter-SecurityGroups"><code>SecurityGroups</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic"><code>EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic</code></a></td>
    <td>Associates the specified security groups with the specified Application Load Balancer or Network Load Balancer. The specified security groups override the previously associated security groups. You can't perform this operation on a Network Load Balancer unless you specified a security group for the load balancer when you created it. You can't associate a security group with a Gateway Load Balancer.</td>
</tr>
<tr>
    <td><a href="#modify_ip_pools"><CopyableCode code="modify_ip_pools" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-LoadBalancerArn"><code>LoadBalancerArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-IpamPools"><code>IpamPools</code></a>, <a href="#parameter-RemoveIpamPools"><code>RemoveIpamPools</code></a></td>
    <td>&#91;Application Load Balancers&#93; Modify the IP pool associated to a load balancer.</td>
</tr>
<tr>
    <td><a href="#delete_load_balancer"><CopyableCode code="delete_load_balancer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-LoadBalancerArn"><code>LoadBalancerArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners. You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds. Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</td>
</tr>
<tr>
    <td><a href="#set_subnets"><CopyableCode code="set_subnets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-LoadBalancerArn"><code>LoadBalancerArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Subnets"><code>Subnets</code></a>, <a href="#parameter-SubnetMappings"><code>SubnetMappings</code></a>, <a href="#parameter-IpAddressType"><code>IpAddressType</code></a>, <a href="#parameter-EnablePrefixForIpv6SourceNat"><code>EnablePrefixForIpv6SourceNat</code></a></td>
    <td>Enables the Availability Zones for the specified public subnets for the specified Application Load Balancer, Network Load Balancer or Gateway Load Balancer. The specified subnets replace the previously enabled subnets.</td>
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
<tr id="parameter-IpAddressType">
    <td><CopyableCode code="IpAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type. Internal load balancers must use ipv4. &#91;Application Load Balancers&#93; The possible values are ipv4 (IPv4 addresses), dualstack (IPv4 and IPv6 addresses), and dualstack-without-public-ipv4 (public IPv6 addresses and private IPv4 and IPv6 addresses). Application Load Balancer authentication supports IPv4 addresses only when connecting to an Identity Provider (IdP) or Amazon Cognito endpoint. Without a public IPv4 address the load balancer can't complete the authentication process, resulting in HTTP 500 errors. &#91;Network Load Balancers and Gateway Load Balancers&#93; The possible values are ipv4 (IPv4 addresses) and dualstack (IPv4 and IPv6 addresses).</td>
</tr>
<tr id="parameter-LoadBalancerArn">
    <td><CopyableCode code="LoadBalancerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the load balancer.</td>
</tr>
<tr id="parameter-SecurityGroups">
    <td><CopyableCode code="SecurityGroups" /></td>
    <td><code>array</code></td>
    <td>The IDs of the security groups.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CustomerOwnedIpv4Pool">
    <td><CopyableCode code="CustomerOwnedIpv4Pool" /></td>
    <td><code>string</code></td>
    <td>&#91;Application Load Balancers on Outposts&#93; The ID of the customer-owned address pool (CoIP pool).</td>
</tr>
<tr id="parameter-EnablePrefixForIpv6SourceNat">
    <td><CopyableCode code="EnablePrefixForIpv6SourceNat" /></td>
    <td><code>string</code></td>
    <td>&#91;Network Load Balancers with UDP listeners&#93; Indicates whether to use an IPv6 prefix from each subnet for source NAT. The IP address type must be dualstack. The default value is off.</td>
</tr>
<tr id="parameter-EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic">
    <td><CopyableCode code="EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic" /></td>
    <td><code>string</code></td>
    <td>Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through Amazon Web Services PrivateLink. Applies only if the load balancer has an associated security group. The default is on.</td>
</tr>
<tr id="parameter-IpAddressType">
    <td><CopyableCode code="IpAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type. &#91;Application Load Balancers&#93; The possible values are ipv4 (IPv4 addresses), dualstack (IPv4 and IPv6 addresses), and dualstack-without-public-ipv4 (public IPv6 addresses and private IPv4 and IPv6 addresses). &#91;Network Load Balancers and Gateway Load Balancers&#93; The possible values are ipv4 (IPv4 addresses) and dualstack (IPv4 and IPv6 addresses).</td>
</tr>
<tr id="parameter-IpamPools">
    <td><CopyableCode code="IpamPools" /></td>
    <td><code>object</code></td>
    <td>The IPAM pools to be modified.</td>
</tr>
<tr id="parameter-LoadBalancerArns">
    <td><CopyableCode code="LoadBalancerArns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load balancers in a single call.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. (You received this marker from a previous call.)</td>
</tr>
<tr id="parameter-Name">
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the load balancer. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".</td>
</tr>
<tr id="parameter-Names">
    <td><CopyableCode code="Names" /></td>
    <td><code>array</code></td>
    <td>The names of the load balancers.</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with this call.</td>
</tr>
<tr id="parameter-RemoveIpamPools">
    <td><CopyableCode code="RemoveIpamPools" /></td>
    <td><code>array</code></td>
    <td>Remove the IP pools in use by the load balancer.</td>
</tr>
<tr id="parameter-Scheme">
    <td><CopyableCode code="Scheme" /></td>
    <td><code>string</code></td>
    <td>The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer. The default is an Internet-facing load balancer. You can't specify a scheme for a Gateway Load Balancer.</td>
</tr>
<tr id="parameter-SecurityGroups">
    <td><CopyableCode code="SecurityGroups" /></td>
    <td><code>array</code></td>
    <td>&#91;Application Load Balancers and Network Load Balancers&#93; The IDs of the security groups for the load balancer.</td>
</tr>
<tr id="parameter-SubnetMappings">
    <td><CopyableCode code="SubnetMappings" /></td>
    <td><code>array</code></td>
    <td>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings. &#91;Application Load Balancers&#93; You must specify subnets from at least two Availability Zones. You can't specify Elastic IP addresses for your subnets. &#91;Application Load Balancers on Outposts&#93; You must specify one Outpost subnet. &#91;Application Load Balancers on Local Zones&#93; You can specify subnets from one or more Local Zones. &#91;Network Load Balancers&#93; You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet. &#91;Gateway Load Balancers&#93; You can specify subnets from one or more Availability Zones.</td>
</tr>
<tr id="parameter-Subnets">
    <td><CopyableCode code="Subnets" /></td>
    <td><code>array</code></td>
    <td>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings. &#91;Application Load Balancers&#93; You must specify subnets from at least two Availability Zones. &#91;Application Load Balancers on Outposts&#93; You must specify one Outpost subnet. &#91;Application Load Balancers on Local Zones&#93; You can specify subnets from one or more Local Zones. &#91;Network Load Balancers&#93; You can specify subnets from one or more Availability Zones. &#91;Gateway Load Balancers&#93; You can specify subnets from one or more Availability Zones. You must include all subnets that were enabled previously, with their existing configurations, plus any additional subnets.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the load balancer.</td>
</tr>
<tr id="parameter-Type">
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of load balancer. The default is application.</td>
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

Describes the specified load balancers or all of your load balancers.

```sql
SELECT
availability_zones,
canonical_hosted_zone_id,
created_time,
customer_owned_ipv_4_pool,
dns_name,
enable_prefix_for_ipv_6_source_nat,
enforce_security_group_inbound_rules_on_private_link_traffic,
ip_address_type,
ipam_pools,
load_balancer_arn,
load_balancer_name,
scheme,
security_groups,
state,
type,
vpc_id
FROM aws.elbv2.load_balancers
WHERE region = '{{ region }}' -- required
AND LoadBalancerArns = '{{ LoadBalancerArns }}'
AND Names = '{{ Names }}'
AND Marker = '{{ Marker }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_load_balancer"
    values={[
        { label: 'create_load_balancer', value: 'create_load_balancer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_load_balancer">

Creates an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. For more information, see the following: Application Load Balancers Network Load Balancers Gateway Load Balancers This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.

```sql
INSERT INTO aws.elbv2.load_balancers (
region,
Name,
Subnets,
SubnetMappings,
SecurityGroups,
Scheme,
Tags,
Type,
IpAddressType,
CustomerOwnedIpv4Pool,
EnablePrefixForIpv6SourceNat,
IpamPools
)
SELECT 
'{{ region }}',
'{{ Name }}',
'{{ Subnets }}',
'{{ SubnetMappings }}',
'{{ SecurityGroups }}',
'{{ Scheme }}',
'{{ Tags }}',
'{{ Type }}',
'{{ IpAddressType }}',
'{{ CustomerOwnedIpv4Pool }}',
'{{ EnablePrefixForIpv6SourceNat }}',
'{{ IpamPools }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: load_balancers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the load_balancers resource.
    - name: Name
      value: "{{ Name }}"
      description: The name of the load balancer. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".
      description: The name of the load balancer. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".
    - name: Subnets
      value: "{{ Subnets }}"
      description: The IDs of the subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets. [Application Load Balancers] You must specify subnets from at least two Availability Zones. [Application Load Balancers on Outposts] You must specify one Outpost subnet. [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones. [Network Load Balancers and Gateway Load Balancers] You can specify subnets from one or more Availability Zones.
      description: The IDs of the subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets. [Application Load Balancers] You must specify subnets from at least two Availability Zones. [Application Load Balancers on Outposts] You must specify one Outpost subnet. [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones. [Network Load Balancers and Gateway Load Balancers] You can specify subnets from one or more Availability Zones.
    - name: SubnetMappings
      value: "{{ SubnetMappings }}"
      description: The IDs of the subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. [Application Load Balancers] You must specify subnets from at least two Availability Zones. You can't specify Elastic IP addresses for your subnets. [Application Load Balancers on Outposts] You must specify one Outpost subnet. [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones. [Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet. [Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You can't specify Elastic IP addresses for your subnets.
      description: The IDs of the subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. [Application Load Balancers] You must specify subnets from at least two Availability Zones. You can't specify Elastic IP addresses for your subnets. [Application Load Balancers on Outposts] You must specify one Outpost subnet. [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones. [Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet. [Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You can't specify Elastic IP addresses for your subnets.
    - name: SecurityGroups
      value: "{{ SecurityGroups }}"
      description: [Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer.
      description: [Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer.
    - name: Scheme
      value: "{{ Scheme }}"
      description: The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer. The default is an Internet-facing load balancer. You can't specify a scheme for a Gateway Load Balancer.
      description: The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer. The default is an Internet-facing load balancer. You can't specify a scheme for a Gateway Load Balancer.
    - name: Tags
      value: "{{ Tags }}"
      description: The tags to assign to the load balancer.
      description: The tags to assign to the load balancer.
    - name: Type
      value: "{{ Type }}"
      description: The type of load balancer. The default is application.
      description: The type of load balancer. The default is application.
    - name: IpAddressType
      value: "{{ IpAddressType }}"
      description: The IP address type. Internal load balancers must use ipv4. [Application Load Balancers] The possible values are ipv4 (IPv4 addresses), dualstack (IPv4 and IPv6 addresses), and dualstack-without-public-ipv4 (public IPv6 addresses and private IPv4 and IPv6 addresses). [Network Load Balancers and Gateway Load Balancers] The possible values are ipv4 (IPv4 addresses) and dualstack (IPv4 and IPv6 addresses).
      description: The IP address type. Internal load balancers must use ipv4. [Application Load Balancers] The possible values are ipv4 (IPv4 addresses), dualstack (IPv4 and IPv6 addresses), and dualstack-without-public-ipv4 (public IPv6 addresses and private IPv4 and IPv6 addresses). [Network Load Balancers and Gateway Load Balancers] The possible values are ipv4 (IPv4 addresses) and dualstack (IPv4 and IPv6 addresses).
    - name: CustomerOwnedIpv4Pool
      value: "{{ CustomerOwnedIpv4Pool }}"
      description: [Application Load Balancers on Outposts] The ID of the customer-owned address pool (CoIP pool).
      description: [Application Load Balancers on Outposts] The ID of the customer-owned address pool (CoIP pool).
    - name: EnablePrefixForIpv6SourceNat
      value: "{{ EnablePrefixForIpv6SourceNat }}"
      description: [Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT. The IP address type must be dualstack. The default value is off.
      description: [Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT. The IP address type must be dualstack. The default value is off.
    - name: IpamPools
      value: "{{ IpamPools }}"
      description: [Application Load Balancers] The IPAM pools to use with the load balancer.
      description: [Application Load Balancers] The IPAM pools to use with the load balancer.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_ip_address_type"
    values={[
        { label: 'set_ip_address_type', value: 'set_ip_address_type' },
        { label: 'set_security_groups', value: 'set_security_groups' },
        { label: 'modify_ip_pools', value: 'modify_ip_pools' }
    ]}
>
<TabItem value="set_ip_address_type">

Sets the type of IP addresses used by the subnets of the specified load balancer.

```sql
UPDATE aws.elbv2.load_balancers
SET 
-- No updatable properties
WHERE 
LoadBalancerArn = '{{ LoadBalancerArn }}' --required
AND IpAddressType = '{{ IpAddressType }}' --required
AND region = '{{ region }}' --required
RETURNING
line_items;
```
</TabItem>
<TabItem value="set_security_groups">

Associates the specified security groups with the specified Application Load Balancer or Network Load Balancer. The specified security groups override the previously associated security groups. You can't perform this operation on a Network Load Balancer unless you specified a security group for the load balancer when you created it. You can't associate a security group with a Gateway Load Balancer.

```sql
UPDATE aws.elbv2.load_balancers
SET 
-- No updatable properties
WHERE 
LoadBalancerArn = '{{ LoadBalancerArn }}' --required
AND SecurityGroups = '{{ SecurityGroups }}' --required
AND region = '{{ region }}' --required
AND EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic = '{{ EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic}}'
RETURNING
line_items;
```
</TabItem>
<TabItem value="modify_ip_pools">

[Application Load Balancers] Modify the IP pool associated to a load balancer.

```sql
UPDATE aws.elbv2.load_balancers
SET 
-- No updatable properties
WHERE 
LoadBalancerArn = '{{ LoadBalancerArn }}' --required
AND region = '{{ region }}' --required
AND IpamPools = '{{ IpamPools}}'
AND RemoveIpamPools = '{{ RemoveIpamPools}}'
RETURNING
ipv_4_ipam_pool_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_load_balancer"
    values={[
        { label: 'delete_load_balancer', value: 'delete_load_balancer' }
    ]}
>
<TabItem value="delete_load_balancer">

Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners. You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds. Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.

```sql
DELETE FROM aws.elbv2.load_balancers
WHERE LoadBalancerArn = '{{ LoadBalancerArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="set_subnets"
    values={[
        { label: 'set_subnets', value: 'set_subnets' }
    ]}
>
<TabItem value="set_subnets">

Enables the Availability Zones for the specified public subnets for the specified Application Load Balancer, Network Load Balancer or Gateway Load Balancer. The specified subnets replace the previously enabled subnets.

```sql
EXEC aws.elbv2.load_balancers.set_subnets 
@LoadBalancerArn='{{ LoadBalancerArn }}' --required, 
@region='{{ region }}' --required, 
@Subnets='{{ Subnets }}', 
@SubnetMappings='{{ SubnetMappings }}', 
@IpAddressType='{{ IpAddressType }}', 
@EnablePrefixForIpv6SourceNat='{{ EnablePrefixForIpv6SourceNat }}'
;
```
</TabItem>
</Tabs>
