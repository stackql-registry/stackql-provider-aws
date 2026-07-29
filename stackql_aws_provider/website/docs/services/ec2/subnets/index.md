--- 
title: subnets
hide_title: false
hide_table_of_contents: false
keywords:
  - subnets
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

Creates, updates, deletes, gets or lists a <code>subnets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subnets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.subnets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_subnets"
    values={[
        { label: 'describe_subnets', value: 'describe_subnets' }
    ]}
>
<TabItem value="describe_subnets">

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
    <td><CopyableCode code="assign_ipv_6_address_on_creation" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a network interface created in this subnet (including a network interface created by RunInstances) receives an IPv6 address.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone of the subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The AZ ID of the subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="available_ip_address_count" /></td>
    <td><code>integer</code></td>
    <td>The number of unused private IPv4 addresses in the subnet. The IPv4 addresses for any stopped instances are considered unavailable.</td>
</tr>
<tr>
    <td><CopyableCode code="block_public_access_states" /></td>
    <td><code>string</code></td>
    <td>The state of VPC Block Public Access (BPA).</td>
</tr>
<tr>
    <td><CopyableCode code="cidr_block" /></td>
    <td><code>string</code></td>
    <td>The IPv4 CIDR block assigned to the subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_owned_ipv_4_pool" /></td>
    <td><code>string</code></td>
    <td>The customer-owned IPv4 address pool associated with the subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="default_for_az" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this is the default subnet for the Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_dns_64" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_lni_at_device_index" /></td>
    <td><code>integer</code></td>
    <td>Indicates the device position for local network interfaces in this subnet. For example, 1 indicates local network interfaces in this subnet are the secondary network interface (eth1).</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_cidr_block_association_set" /></td>
    <td><code>string</code></td>
    <td>Information about the IPv6 CIDR blocks associated with the subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_native" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this is an IPv6 only subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="map_customer_owned_ip_on_launch" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a network interface created in this subnet (including a network interface created by RunInstances) receives a customer-owned IPv4 address.</td>
</tr>
<tr>
    <td><CopyableCode code="map_public_ip_on_launch" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether instances launched in this subnet receive a public IPv4 address. Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the Public IPv4 Address tab on the Amazon VPC pricing page.</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Outpost.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="private_dns_name_options_on_launch" /></td>
    <td><code>string</code></td>
    <td>The type of hostnames to assign to instances in the subnet at launch. An instance hostname is based on the IPv4 address or ID of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the subnet. failed: The underlying infrastructure to support the subnet failed to provision as expected. failed-insufficient-capacity: The underlying infrastructure to support the subnet failed to provision due to a shortage of EC2 instance capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Indicates if this is a subnet used with Amazon Elastic VMware Service (EVS). Possible values are Elastic VMware Service or no value. For more information about Amazon EVS, see Amazon Elastic VMware Service API Reference .</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC the subnet is in.</td>
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
    <td><a href="#describe_subnets"><CopyableCode code="describe_subnets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-SubnetId"><code>SubnetId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes your subnets. The default is to describe all your subnets. Alternatively, you can specify specific subnet IDs or filter the results to include only the subnets that match specific criteria. For more information, see Subnets in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#create_subnet"><CopyableCode code="create_subnet" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-AvailabilityZoneId"><code>AvailabilityZoneId</code></a>, <a href="#parameter-CidrBlock"><code>CidrBlock</code></a>, <a href="#parameter-Ipv6CidrBlock"><code>Ipv6CidrBlock</code></a>, <a href="#parameter-OutpostArn"><code>OutpostArn</code></a>, <a href="#parameter-Ipv6Native"><code>Ipv6Native</code></a>, <a href="#parameter-Ipv4IpamPoolId"><code>Ipv4IpamPoolId</code></a>, <a href="#parameter-Ipv4NetmaskLength"><code>Ipv4NetmaskLength</code></a>, <a href="#parameter-Ipv6IpamPoolId"><code>Ipv6IpamPoolId</code></a>, <a href="#parameter-Ipv6NetmaskLength"><code>Ipv6NetmaskLength</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a subnet in the specified VPC. For an IPv4 only subnet, specify an IPv4 CIDR block. If the VPC has an IPv6 CIDR block, you can create an IPv6 only subnet or a dual stack subnet instead. For an IPv6 only subnet, specify an IPv6 CIDR block. For a dual stack subnet, specify both an IPv4 CIDR block and an IPv6 CIDR block. A subnet CIDR block must not overlap the CIDR block of an existing subnet in the VPC. After you create a subnet, you can't change its CIDR block. The allowed size for an IPv4 subnet is between a /28 netmask (16 IP addresses) and a /16 netmask (65,536 IP addresses). Amazon Web Services reserves both the first four and the last IPv4 address in each subnet's CIDR block. They're not available for your use. If you've associated an IPv6 CIDR block with your VPC, you can associate an IPv6 CIDR block with a subnet when you create it. If you add more than one subnet to a VPC, they're set up in a star topology with a logical router in the middle. When you stop an instance in a subnet, it retains its private IPv4 address. It's therefore possible to have a subnet with no running instances (they're all stopped), but no remaining IP addresses available. For more information, see Subnets in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#create_default_subnet"><CopyableCode code="create_default_subnet" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Ipv6Native"><code>Ipv6Native</code></a>, <a href="#parameter-AvailabilityZoneId"><code>AvailabilityZoneId</code></a></td>
    <td>Creates a default subnet with a size /20 IPv4 CIDR block in the specified Availability Zone in your default VPC. You can have only one default subnet per Availability Zone. For more information, see Create a default subnet in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#associate_subnet_cidr_block"><CopyableCode code="associate_subnet_cidr_block" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-SubnetId"><code>SubnetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Ipv6IpamPoolId"><code>Ipv6IpamPoolId</code></a>, <a href="#parameter-Ipv6NetmaskLength"><code>Ipv6NetmaskLength</code></a>, <a href="#parameter-Ipv6CidrBlock"><code>Ipv6CidrBlock</code></a></td>
    <td>Associates a CIDR block with your subnet. You can only associate a single IPv6 CIDR block with your subnet.</td>
</tr>
<tr>
    <td><a href="#disassociate_subnet_cidr_block"><CopyableCode code="disassociate_subnet_cidr_block" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AssociationId"><code>AssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a CIDR block from a subnet. Currently, you can disassociate an IPv6 CIDR block only. You must detach or delete all gateways and resources that are associated with the CIDR block before you can disassociate it.</td>
</tr>
<tr>
    <td><a href="#delete_subnet"><CopyableCode code="delete_subnet" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-SubnetId"><code>SubnetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete the subnet.</td>
</tr>
<tr>
    <td><a href="#modify_subnet_attribute"><CopyableCode code="modify_subnet_attribute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SubnetId"><code>SubnetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AssignIpv6AddressOnCreation"><code>AssignIpv6AddressOnCreation</code></a>, <a href="#parameter-MapPublicIpOnLaunch"><code>MapPublicIpOnLaunch</code></a>, <a href="#parameter-MapCustomerOwnedIpOnLaunch"><code>MapCustomerOwnedIpOnLaunch</code></a>, <a href="#parameter-CustomerOwnedIpv4Pool"><code>CustomerOwnedIpv4Pool</code></a>, <a href="#parameter-EnableDns64"><code>EnableDns64</code></a>, <a href="#parameter-PrivateDnsHostnameTypeOnLaunch"><code>PrivateDnsHostnameTypeOnLaunch</code></a>, <a href="#parameter-EnableResourceNameDnsARecordOnLaunch"><code>EnableResourceNameDnsARecordOnLaunch</code></a>, <a href="#parameter-EnableResourceNameDnsAAAARecordOnLaunch"><code>EnableResourceNameDnsAAAARecordOnLaunch</code></a>, <a href="#parameter-EnableLniAtDeviceIndex"><code>EnableLniAtDeviceIndex</code></a>, <a href="#parameter-DisableLniAtDeviceIndex"><code>DisableLniAtDeviceIndex</code></a></td>
    <td>Modifies a subnet attribute. You can only modify one attribute at a time. Use this action to modify subnets on Amazon Web Services Outposts. To modify a subnet on an Outpost rack, set both MapCustomerOwnedIpOnLaunch and CustomerOwnedIpv4Pool. These two parameters act as a single attribute. To modify a subnet on an Outpost server, set either EnableLniAtDeviceIndex or DisableLniAtDeviceIndex. For more information about Amazon Web Services Outposts, see the following: Outpost servers Outpost racks</td>
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
<tr id="parameter-AssociationId">
    <td><CopyableCode code="AssociationId" /></td>
    <td><code>string</code></td>
    <td>The association ID for the CIDR block.</td>
</tr>
<tr id="parameter-SubnetId">
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AssignIpv6AddressOnCreation">
    <td><CopyableCode code="AssignIpv6AddressOnCreation" /></td>
    <td><code>object</code></td>
    <td>Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. This includes a network interface that's created when launching an instance into the subnet (the instance therefore receives an IPv6 address). If you enable the IPv6 addressing feature for your subnet, your network interface or instance only receives an IPv6 address if it's created using version 2016-11-15 or later of the Amazon EC2 API.</td>
</tr>
<tr id="parameter-AvailabilityZone">
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone in which to create the default subnet. Either AvailabilityZone or AvailabilityZoneId must be specified, but not both.</td>
</tr>
<tr id="parameter-AvailabilityZoneId">
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone. Either AvailabilityZone or AvailabilityZoneId must be specified, but not both.</td>
</tr>
<tr id="parameter-CidrBlock">
    <td><CopyableCode code="CidrBlock" /></td>
    <td><code>string</code></td>
    <td>The IPv4 network range for the subnet, in CIDR notation. For example, 10.0.0.0/24. We modify the specified CIDR block to its canonical form; for example, if you specify 100.68.0.18/18, we modify it to 100.68.0.0/18. This parameter is not supported for an IPv6 only subnet.</td>
</tr>
<tr id="parameter-CustomerOwnedIpv4Pool">
    <td><CopyableCode code="CustomerOwnedIpv4Pool" /></td>
    <td><code>string</code></td>
    <td>The customer-owned IPv4 address pool associated with the subnet. You must set this value when you specify true for MapCustomerOwnedIpOnLaunch.</td>
</tr>
<tr id="parameter-DisableLniAtDeviceIndex">
    <td><CopyableCode code="DisableLniAtDeviceIndex" /></td>
    <td><code>object</code></td>
    <td>Specify true to indicate that local network interfaces at the current position should be disabled.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EnableDns64">
    <td><CopyableCode code="EnableDns64" /></td>
    <td><code>object</code></td>
    <td>Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations. You must first configure a NAT gateway in a public subnet (separate from the subnet containing the IPv6-only workloads). For example, the subnet containing the NAT gateway should have a 0.0.0.0/0 route pointing to the internet gateway. For more information, see Configure DNS64 and NAT64 in the Amazon VPC User Guide.</td>
</tr>
<tr id="parameter-EnableLniAtDeviceIndex">
    <td><CopyableCode code="EnableLniAtDeviceIndex" /></td>
    <td><code>integer</code></td>
    <td>Indicates the device position for local network interfaces in this subnet. For example, 1 indicates local network interfaces in this subnet are the secondary network interface (eth1). A local network interface cannot be the primary network interface (eth0).</td>
</tr>
<tr id="parameter-EnableResourceNameDnsAAAARecordOnLaunch">
    <td><CopyableCode code="EnableResourceNameDnsAAAARecordOnLaunch" /></td>
    <td><code>object</code></td>
    <td>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.</td>
</tr>
<tr id="parameter-EnableResourceNameDnsARecordOnLaunch">
    <td><CopyableCode code="EnableResourceNameDnsARecordOnLaunch" /></td>
    <td><code>object</code></td>
    <td>Indicates whether to respond to DNS queries for instance hostnames with DNS A records.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. availability-zone - The Availability Zone for the subnet. You can also use availabilityZone as the filter name. availability-zone-id - The ID of the Availability Zone for the subnet. You can also use availabilityZoneId as the filter name. available-ip-address-count - The number of IPv4 addresses in the subnet that are available. cidr-block - The IPv4 CIDR block of the subnet. The CIDR block you specify must exactly match the subnet's CIDR block for information to be returned for the subnet. You can also use cidr or cidrBlock as the filter names. customer-owned-ipv4-pool - The customer-owned IPv4 address pool associated with the subnet. default-for-az - Indicates whether this is the default subnet for the Availability Zone (true | false). You can also use defaultForAz as the filter name. enable-dns64 - Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations. enable-lni-at-device-index - Indicates the device position for local network interfaces in this subnet. For example, 1 indicates local network interfaces in this subnet are the secondary network interface (eth1). ipv6-cidr-block-association.ipv6-cidr-block - An IPv6 CIDR block associated with the subnet. ipv6-cidr-block-association.association-id - An association ID for an IPv6 CIDR block associated with the subnet. ipv6-cidr-block-association.state - The state of an IPv6 CIDR block associated with the subnet. ipv6-native - Indicates whether this is an IPv6 only subnet (true | false). map-customer-owned-ip-on-launch - Indicates whether a network interface created in this subnet (including a network interface created by RunInstances) receives a customer-owned IPv4 address. map-public-ip-on-launch - Indicates whether instances launched in this subnet receive a public IPv4 address. outpost-arn - The Amazon Resource Name (ARN) of the Outpost. owner-id - The ID of the Amazon Web Services account that owns the subnet. private-dns-name-options-on-launch.hostname-type - The type of hostname to assign to instances in the subnet at launch. For IPv4-only and dual-stack (IPv4 and IPv6) subnets, an instance DNS name can be based on the instance IPv4 address (ip-name) or the instance ID (resource-name). For IPv6 only subnets, an instance DNS name must be based on the instance ID (resource-name). private-dns-name-options-on-launch.enable-resource-name-dns-a-record - Indicates whether to respond to DNS queries for instance hostnames with DNS A records. private-dns-name-options-on-launch.enable-resource-name-dns-aaaa-record - Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. state - The state of the subnet (pending | available). subnet-arn - The Amazon Resource Name (ARN) of the subnet. subnet-id - The ID of the subnet. tag - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. vpc-id - The ID of the VPC for the subnet.</td>
</tr>
<tr id="parameter-Ipv4IpamPoolId">
    <td><CopyableCode code="Ipv4IpamPoolId" /></td>
    <td><code>string</code></td>
    <td>An IPv4 IPAM pool ID for the subnet.</td>
</tr>
<tr id="parameter-Ipv4NetmaskLength">
    <td><CopyableCode code="Ipv4NetmaskLength" /></td>
    <td><code>integer</code></td>
    <td>An IPv4 netmask length for the subnet.</td>
</tr>
<tr id="parameter-Ipv6CidrBlock">
    <td><CopyableCode code="Ipv6CidrBlock" /></td>
    <td><code>string</code></td>
    <td>The IPv6 CIDR block for your subnet.</td>
</tr>
<tr id="parameter-Ipv6IpamPoolId">
    <td><CopyableCode code="Ipv6IpamPoolId" /></td>
    <td><code>string</code></td>
    <td>An IPv6 IPAM pool ID.</td>
</tr>
<tr id="parameter-Ipv6Native">
    <td><CopyableCode code="Ipv6Native" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to create an IPv6 only subnet. If you already have a default subnet for this Availability Zone, you must delete it before you can create an IPv6 only subnet.</td>
</tr>
<tr id="parameter-Ipv6NetmaskLength">
    <td><CopyableCode code="Ipv6NetmaskLength" /></td>
    <td><code>integer</code></td>
    <td>An IPv6 netmask length.</td>
</tr>
<tr id="parameter-MapCustomerOwnedIpOnLaunch">
    <td><CopyableCode code="MapCustomerOwnedIpOnLaunch" /></td>
    <td><code>object</code></td>
    <td>Specify true to indicate that network interfaces attached to instances created in the specified subnet should be assigned a customer-owned IPv4 address. When this value is true, you must specify the customer-owned IP pool using CustomerOwnedIpv4Pool.</td>
</tr>
<tr id="parameter-MapPublicIpOnLaunch">
    <td><CopyableCode code="MapPublicIpOnLaunch" /></td>
    <td><code>object</code></td>
    <td>Specify true to indicate that network interfaces attached to instances created in the specified subnet should be assigned a public IPv4 address. Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the Public IPv4 Address tab on the Amazon VPC pricing page.</td>
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
<tr id="parameter-OutpostArn">
    <td><CopyableCode code="OutpostArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Outpost. If you specify an Outpost ARN, you must also specify the Availability Zone of the Outpost subnet.</td>
</tr>
<tr id="parameter-PrivateDnsHostnameTypeOnLaunch">
    <td><CopyableCode code="PrivateDnsHostnameTypeOnLaunch" /></td>
    <td><code>string</code></td>
    <td>The type of hostname to assign to instances in the subnet at launch. For IPv4-only and dual-stack (IPv4 and IPv6) subnets, an instance DNS name can be based on the instance IPv4 address (ip-name) or the instance ID (resource-name). For IPv6 only subnets, an instance DNS name must be based on the instance ID (resource-name).</td>
</tr>
<tr id="parameter-SubnetId">
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the subnets. Default: Describes all your subnets.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the subnet.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_subnets"
    values={[
        { label: 'describe_subnets', value: 'describe_subnets' }
    ]}
>
<TabItem value="describe_subnets">

Describes your subnets. The default is to describe all your subnets. Alternatively, you can specify specific subnet IDs or filter the results to include only the subnets that match specific criteria. For more information, see Subnets in the Amazon VPC User Guide.

```sql
SELECT
assign_ipv_6_address_on_creation,
availability_zone,
availability_zone_id,
available_ip_address_count,
block_public_access_states,
cidr_block,
customer_owned_ipv_4_pool,
default_for_az,
enable_dns_64,
enable_lni_at_device_index,
ipv_6_cidr_block_association_set,
ipv_6_native,
map_customer_owned_ip_on_launch,
map_public_ip_on_launch,
outpost_arn,
owner_id,
private_dns_name_options_on_launch,
state,
subnet_arn,
subnet_id,
tags,
type,
vpc_id
FROM aws.ec2.subnets
WHERE region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND SubnetId = '{{ SubnetId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_subnet"
    values={[
        { label: 'create_subnet', value: 'create_subnet' },
        { label: 'create_default_subnet', value: 'create_default_subnet' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_subnet">

Creates a subnet in the specified VPC. For an IPv4 only subnet, specify an IPv4 CIDR block. If the VPC has an IPv6 CIDR block, you can create an IPv6 only subnet or a dual stack subnet instead. For an IPv6 only subnet, specify an IPv6 CIDR block. For a dual stack subnet, specify both an IPv4 CIDR block and an IPv6 CIDR block. A subnet CIDR block must not overlap the CIDR block of an existing subnet in the VPC. After you create a subnet, you can't change its CIDR block. The allowed size for an IPv4 subnet is between a /28 netmask (16 IP addresses) and a /16 netmask (65,536 IP addresses). Amazon Web Services reserves both the first four and the last IPv4 address in each subnet's CIDR block. They're not available for your use. If you've associated an IPv6 CIDR block with your VPC, you can associate an IPv6 CIDR block with a subnet when you create it. If you add more than one subnet to a VPC, they're set up in a star topology with a logical router in the middle. When you stop an instance in a subnet, it retains its private IPv4 address. It's therefore possible to have a subnet with no running instances (they're all stopped), but no remaining IP addresses available. For more information, see Subnets in the Amazon VPC User Guide.

```sql
INSERT INTO aws.ec2.subnets (
VpcId,
region,
TagSpecification,
AvailabilityZone,
AvailabilityZoneId,
CidrBlock,
Ipv6CidrBlock,
OutpostArn,
Ipv6Native,
Ipv4IpamPoolId,
Ipv4NetmaskLength,
Ipv6IpamPoolId,
Ipv6NetmaskLength,
DryRun
)
SELECT 
'{{ VpcId }}',
'{{ region }}',
'{{ TagSpecification }}',
'{{ AvailabilityZone }}',
'{{ AvailabilityZoneId }}',
'{{ CidrBlock }}',
'{{ Ipv6CidrBlock }}',
'{{ OutpostArn }}',
'{{ Ipv6Native }}',
'{{ Ipv4IpamPoolId }}',
'{{ Ipv4NetmaskLength }}',
'{{ Ipv6IpamPoolId }}',
'{{ Ipv6NetmaskLength }}',
'{{ DryRun }}'
RETURNING
assign_ipv_6_address_on_creation,
availability_zone,
availability_zone_id,
available_ip_address_count,
block_public_access_states,
cidr_block,
customer_owned_ipv_4_pool,
default_for_az,
enable_dns_64,
enable_lni_at_device_index,
ipv_6_cidr_block_association_set,
ipv_6_native,
map_customer_owned_ip_on_launch,
map_public_ip_on_launch,
outpost_arn,
owner_id,
private_dns_name_options_on_launch,
state,
subnet_arn,
subnet_id,
tags,
type,
vpc_id
;
```
</TabItem>
<TabItem value="create_default_subnet">

Creates a default subnet with a size /20 IPv4 CIDR block in the specified Availability Zone in your default VPC. You can have only one default subnet per Availability Zone. For more information, see Create a default subnet in the Amazon VPC User Guide.

```sql
INSERT INTO aws.ec2.subnets (
region,
AvailabilityZone,
DryRun,
Ipv6Native,
AvailabilityZoneId
)
SELECT 
'{{ region }}',
'{{ AvailabilityZone }}',
'{{ DryRun }}',
'{{ Ipv6Native }}',
'{{ AvailabilityZoneId }}'
RETURNING
assign_ipv_6_address_on_creation,
availability_zone,
availability_zone_id,
available_ip_address_count,
block_public_access_states,
cidr_block,
customer_owned_ipv_4_pool,
default_for_az,
enable_dns_64,
enable_lni_at_device_index,
ipv_6_cidr_block_association_set,
ipv_6_native,
map_customer_owned_ip_on_launch,
map_public_ip_on_launch,
outpost_arn,
owner_id,
private_dns_name_options_on_launch,
state,
subnet_arn,
subnet_id,
tags,
type,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: subnets
  props:
    - name: VpcId
      value: "{{ VpcId }}"
      description: Required parameter for the subnets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the subnets resource.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the subnet.
      description: The tags to assign to the subnet.
    - name: AvailabilityZone
      value: "{{ AvailabilityZone }}"
      description: The Availability Zone or Local Zone for the subnet. Default: Amazon Web Services selects one for you. If you create more than one subnet in your VPC, we do not necessarily select a different zone for each subnet. To create a subnet in a Local Zone, set this value to the Local Zone ID, for example us-west-2-lax-1a. For information about the Regions that support Local Zones, see Available Local Zones. To create a subnet in an Outpost, set this value to the Availability Zone for the Outpost and specify the Outpost ARN.
      description: The Availability Zone or Local Zone for the subnet. Default: Amazon Web Services selects one for you. If you create more than one subnet in your VPC, we do not necessarily select a different zone for each subnet. To create a subnet in a Local Zone, set this value to the Local Zone ID, for example us-west-2-lax-1a. For information about the Regions that support Local Zones, see Available Local Zones. To create a subnet in an Outpost, set this value to the Availability Zone for the Outpost and specify the Outpost ARN.
    - name: AvailabilityZoneId
      value: "{{ AvailabilityZoneId }}"
      description: The AZ ID or the Local Zone ID of the subnet.
      description: The AZ ID or the Local Zone ID of the subnet.
    - name: CidrBlock
      value: "{{ CidrBlock }}"
      description: The IPv4 network range for the subnet, in CIDR notation. For example, 10.0.0.0/24. We modify the specified CIDR block to its canonical form; for example, if you specify 100.68.0.18/18, we modify it to 100.68.0.0/18. This parameter is not supported for an IPv6 only subnet.
      description: The IPv4 network range for the subnet, in CIDR notation. For example, 10.0.0.0/24. We modify the specified CIDR block to its canonical form; for example, if you specify 100.68.0.18/18, we modify it to 100.68.0.0/18. This parameter is not supported for an IPv6 only subnet.
    - name: Ipv6CidrBlock
      value: "{{ Ipv6CidrBlock }}"
      description: The IPv6 network range for the subnet, in CIDR notation. This parameter is required for an IPv6 only subnet.
      description: The IPv6 network range for the subnet, in CIDR notation. This parameter is required for an IPv6 only subnet.
    - name: OutpostArn
      value: "{{ OutpostArn }}"
      description: The Amazon Resource Name (ARN) of the Outpost. If you specify an Outpost ARN, you must also specify the Availability Zone of the Outpost subnet.
      description: The Amazon Resource Name (ARN) of the Outpost. If you specify an Outpost ARN, you must also specify the Availability Zone of the Outpost subnet.
    - name: Ipv6Native
      value: {{ Ipv6Native }}
      description: Indicates whether to create an IPv6 only subnet.
      description: Indicates whether to create an IPv6 only subnet.
    - name: Ipv4IpamPoolId
      value: "{{ Ipv4IpamPoolId }}"
      description: An IPv4 IPAM pool ID for the subnet.
      description: An IPv4 IPAM pool ID for the subnet.
    - name: Ipv4NetmaskLength
      value: {{ Ipv4NetmaskLength }}
      description: An IPv4 netmask length for the subnet.
      description: An IPv4 netmask length for the subnet.
    - name: Ipv6IpamPoolId
      value: "{{ Ipv6IpamPoolId }}"
      description: An IPv6 IPAM pool ID for the subnet.
      description: An IPv6 IPAM pool ID for the subnet.
    - name: Ipv6NetmaskLength
      value: {{ Ipv6NetmaskLength }}
      description: An IPv6 netmask length for the subnet.
      description: An IPv6 netmask length for the subnet.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_subnet_cidr_block"
    values={[
        { label: 'associate_subnet_cidr_block', value: 'associate_subnet_cidr_block' },
        { label: 'disassociate_subnet_cidr_block', value: 'disassociate_subnet_cidr_block' }
    ]}
>
<TabItem value="associate_subnet_cidr_block">

Associates a CIDR block with your subnet. You can only associate a single IPv6 CIDR block with your subnet.

```sql
UPDATE aws.ec2.subnets
SET 
-- No updatable properties
WHERE 
SubnetId = '{{ SubnetId }}' --required
AND region = '{{ region }}' --required
AND Ipv6IpamPoolId = '{{ Ipv6IpamPoolId}}'
AND Ipv6NetmaskLength = '{{ Ipv6NetmaskLength}}'
AND Ipv6CidrBlock = '{{ Ipv6CidrBlock}}'
RETURNING
ipv_6_cidr_block_association,
subnet_id;
```
</TabItem>
<TabItem value="disassociate_subnet_cidr_block">

Disassociates a CIDR block from a subnet. Currently, you can disassociate an IPv6 CIDR block only. You must detach or delete all gateways and resources that are associated with the CIDR block before you can disassociate it.

```sql
UPDATE aws.ec2.subnets
SET 
-- No updatable properties
WHERE 
AssociationId = '{{ AssociationId }}' --required
AND region = '{{ region }}' --required
RETURNING
ipv_6_cidr_block_association,
subnet_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_subnet"
    values={[
        { label: 'delete_subnet', value: 'delete_subnet' }
    ]}
>
<TabItem value="delete_subnet">

Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete the subnet.

```sql
DELETE FROM aws.ec2.subnets
WHERE SubnetId = '{{ SubnetId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="modify_subnet_attribute"
    values={[
        { label: 'modify_subnet_attribute', value: 'modify_subnet_attribute' }
    ]}
>
<TabItem value="modify_subnet_attribute">

Modifies a subnet attribute. You can only modify one attribute at a time. Use this action to modify subnets on Amazon Web Services Outposts. To modify a subnet on an Outpost rack, set both MapCustomerOwnedIpOnLaunch and CustomerOwnedIpv4Pool. These two parameters act as a single attribute. To modify a subnet on an Outpost server, set either EnableLniAtDeviceIndex or DisableLniAtDeviceIndex. For more information about Amazon Web Services Outposts, see the following: Outpost servers Outpost racks

```sql
EXEC aws.ec2.subnets.modify_subnet_attribute 
@SubnetId='{{ SubnetId }}' --required, 
@region='{{ region }}' --required, 
@AssignIpv6AddressOnCreation='{{ AssignIpv6AddressOnCreation }}', 
@MapPublicIpOnLaunch='{{ MapPublicIpOnLaunch }}', 
@MapCustomerOwnedIpOnLaunch='{{ MapCustomerOwnedIpOnLaunch }}', 
@CustomerOwnedIpv4Pool='{{ CustomerOwnedIpv4Pool }}', 
@EnableDns64='{{ EnableDns64 }}', 
@PrivateDnsHostnameTypeOnLaunch='{{ PrivateDnsHostnameTypeOnLaunch }}', 
@EnableResourceNameDnsARecordOnLaunch='{{ EnableResourceNameDnsARecordOnLaunch }}', 
@EnableResourceNameDnsAAAARecordOnLaunch='{{ EnableResourceNameDnsAAAARecordOnLaunch }}', 
@EnableLniAtDeviceIndex='{{ EnableLniAtDeviceIndex }}', 
@DisableLniAtDeviceIndex='{{ DisableLniAtDeviceIndex }}'
;
```
</TabItem>
</Tabs>
