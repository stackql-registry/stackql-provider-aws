--- 
title: addresses
hide_title: false
hide_table_of_contents: false
keywords:
  - addresses
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

Creates, updates, deletes, gets or lists an <code>addresses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="addresses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.addresses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_addresses"
    values={[
        { label: 'describe_addresses', value: 'describe_addresses' }
    ]}
>
<TabItem value="describe_addresses">

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
    <td><CopyableCode code="allocation_id" /></td>
    <td><code>string</code></td>
    <td>The ID representing the allocation of the address.</td>
</tr>
<tr>
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The ID representing the association of the address with an instance.</td>
</tr>
<tr>
    <td><CopyableCode code="carrier_ip" /></td>
    <td><code>string</code></td>
    <td>The carrier IP address associated. This option is only available for network interfaces which reside in a subnet in a Wavelength Zone (for example an EC2 instance).</td>
</tr>
<tr>
    <td><CopyableCode code="customer_owned_ip" /></td>
    <td><code>string</code></td>
    <td>The customer-owned IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_owned_ipv_4_pool" /></td>
    <td><code>string</code></td>
    <td>The ID of the customer-owned address pool.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The network (vpc).</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance that the address is associated with (if any).</td>
</tr>
<tr>
    <td><CopyableCode code="network_border_group" /></td>
    <td><code>string</code></td>
    <td>The name of the unique set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises IP addresses.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="private_ip_address" /></td>
    <td><code>string</code></td>
    <td>The private IP address associated with the Elastic IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="public_ip" /></td>
    <td><code>string</code></td>
    <td>The Elastic IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="public_ipv_4_pool" /></td>
    <td><code>string</code></td>
    <td>The ID of an address pool.</td>
</tr>
<tr>
    <td><CopyableCode code="service_managed" /></td>
    <td><code>string</code></td>
    <td>The service that manages the elastic IP address. The only option supported today is alb.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet where the IP address is allocated.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the Elastic IP address.</td>
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
    <td><a href="#describe_addresses"><CopyableCode code="describe_addresses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PublicIp"><code>PublicIp</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-AllocationId"><code>AllocationId</code></a></td>
    <td>Describes the specified Elastic IP addresses or all of your Elastic IP addresses.</td>
</tr>
<tr>
    <td><a href="#assign_ipv6_addresses"><CopyableCode code="assign_ipv6_addresses" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Ipv6PrefixCount"><code>Ipv6PrefixCount</code></a>, <a href="#parameter-Ipv6Prefix"><code>Ipv6Prefix</code></a>, <a href="#parameter-Ipv6Addresses"><code>Ipv6Addresses</code></a>, <a href="#parameter-Ipv6AddressCount"><code>Ipv6AddressCount</code></a></td>
    <td>Assigns the specified IPv6 addresses to the specified network interface. You can specify specific IPv6 addresses, or you can specify the number of IPv6 addresses to be automatically assigned from the subnet's IPv6 CIDR block range. You can assign as many IPv6 addresses to a network interface as you can assign private IPv4 addresses, and the limit varies by instance type. You must specify either the IPv6 addresses or the IPv6 address count in the request. You can optionally use Prefix Delegation on the network interface. You must specify either the IPV6 Prefix Delegation prefixes, or the IPv6 Prefix Delegation count. For information, see Assigning prefixes to network interfaces in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#allocate_address"><CopyableCode code="allocate_address" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-Address"><code>Address</code></a>, <a href="#parameter-PublicIpv4Pool"><code>PublicIpv4Pool</code></a>, <a href="#parameter-NetworkBorderGroup"><code>NetworkBorderGroup</code></a>, <a href="#parameter-CustomerOwnedIpv4Pool"><code>CustomerOwnedIpv4Pool</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-IpamPoolId"><code>IpamPoolId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Allocates an Elastic IP address to your Amazon Web Services account. After you allocate the Elastic IP address you can associate it with an instance or network interface. After you release an Elastic IP address, it is released to the IP address pool and can be allocated to a different Amazon Web Services account. You can allocate an Elastic IP address from one of the following address pools: Amazon's pool of IPv4 addresses Public IPv4 address range that you own and bring to your Amazon Web Services account using Bring Your Own IP Addresses (BYOIP) An IPv4 IPAM pool with an Amazon-provided or BYOIP public IPv4 address range IPv4 addresses from your on-premises network made available for use with an Outpost using a customer-owned IP address pool (CoIP pool) For more information, see Elastic IP Addresses in the Amazon EC2 User Guide. If you release an Elastic IP address, you might be able to recover it. You cannot recover an Elastic IP address that you released after it is allocated to another Amazon Web Services account. To attempt to recover an Elastic IP address that you released, specify it in this operation. You can allocate a carrier IP address which is a public IP address from a telecommunication carrier, to a network interface which resides in a subnet in a Wavelength Zone (for example an EC2 instance).</td>
</tr>
<tr>
    <td><a href="#assign_private_ip_addresses"><CopyableCode code="assign_private_ip_addresses" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Ipv4Prefix"><code>Ipv4Prefix</code></a>, <a href="#parameter-Ipv4PrefixCount"><code>Ipv4PrefixCount</code></a>, <a href="#parameter-PrivateIpAddress"><code>PrivateIpAddress</code></a>, <a href="#parameter-SecondaryPrivateIpAddressCount"><code>SecondaryPrivateIpAddressCount</code></a>, <a href="#parameter-AllowReassignment"><code>AllowReassignment</code></a></td>
    <td>Assigns the specified secondary private IP addresses to the specified network interface. You can specify specific secondary IP addresses, or you can specify the number of secondary IP addresses to be automatically assigned from the subnet's CIDR block range. The number of secondary IP addresses that you can assign to an instance varies by instance type. For more information about Elastic IP addresses, see Elastic IP Addresses in the Amazon EC2 User Guide. When you move a secondary private IP address to another network interface, any Elastic IP address that is associated with the IP address is also moved. Remapping an IP address is an asynchronous operation. When you move an IP address from one network interface to another, check network/interfaces/macs/mac/local-ipv4s in the instance metadata to confirm that the remapping is complete. You must specify either the IP addresses or the IP address count in the request. You can optionally use Prefix Delegation on the network interface. You must specify either the IPv4 Prefix Delegation prefixes, or the IPv4 Prefix Delegation count. For information, see Assigning prefixes to network interfaces in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#associate_address"><CopyableCode code="associate_address" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AllocationId"><code>AllocationId</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-PublicIp"><code>PublicIp</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-PrivateIpAddress"><code>PrivateIpAddress</code></a>, <a href="#parameter-AllowReassociation"><code>AllowReassociation</code></a></td>
    <td>Associates an Elastic IP address, or carrier IP address (for instances that are in subnets in Wavelength Zones) with an instance or a network interface. Before you can use an Elastic IP address, you must allocate it to your account. If the Elastic IP address is already associated with a different instance, it is disassociated from that instance and associated with the specified instance. If you associate an Elastic IP address with an instance that has an existing Elastic IP address, the existing address is disassociated from the instance, but remains allocated to your account. &#91;Subnets in Wavelength Zones&#93; You can associate an IP address from the telecommunication carrier to the instance or network interface. You cannot associate an Elastic IP address with an interface in a different network border group. This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error, and you may be charged for each time the Elastic IP address is remapped to the same instance. For more information, see the Elastic IP Addresses section of Amazon EC2 Pricing.</td>
</tr>
<tr>
    <td><a href="#disassociate_address"><CopyableCode code="disassociate_address" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AssociationId"><code>AssociationId</code></a>, <a href="#parameter-PublicIp"><code>PublicIp</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disassociates an Elastic IP address from the instance or network interface it's associated with. This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error. An address cannot be disassociated if the all of the following conditions are met: Network interface has a publicDualStackDnsName publicDnsName Public IPv4 address is the primary public IPv4 address Network interface only has one remaining public IPv4 address</td>
</tr>
<tr>
    <td><a href="#release_address"><CopyableCode code="release_address" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AllocationId"><code>AllocationId</code></a>, <a href="#parameter-PublicIp"><code>PublicIp</code></a>, <a href="#parameter-NetworkBorderGroup"><code>NetworkBorderGroup</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Releases the specified Elastic IP address. &#91;Default VPC&#93; Releasing an Elastic IP address automatically disassociates it from any instance that it's associated with. Alternatively, you can disassociate an Elastic IP address without releasing it. &#91;Nondefault VPC&#93; You must disassociate the Elastic IP address before you can release it. Otherwise, Amazon EC2 returns an error (InvalidIPAddress.InUse). After releasing an Elastic IP address, it is released to the IP address pool. Be sure to update your DNS records and any servers or devices that communicate with the address. If you attempt to release an Elastic IP address that you already released, you'll get an AuthFailure error if the address is already allocated to another Amazon Web Services account. After you release an Elastic IP address, you might be able to recover it. For more information, see Release an Elastic IP address.</td>
</tr>
<tr>
    <td><a href="#unassign_ipv6_addresses"><CopyableCode code="unassign_ipv6_addresses" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Ipv6Prefix"><code>Ipv6Prefix</code></a>, <a href="#parameter-Ipv6Addresses"><code>Ipv6Addresses</code></a></td>
    <td>Unassigns the specified IPv6 addresses or Prefix Delegation prefixes from a network interface.</td>
</tr>
<tr>
    <td><a href="#unassign_private_ip_addresses"><CopyableCode code="unassign_private_ip_addresses" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Ipv4Prefix"><code>Ipv4Prefix</code></a>, <a href="#parameter-PrivateIpAddress"><code>PrivateIpAddress</code></a></td>
    <td>Unassigns the specified secondary private IP addresses or IPv4 Prefix Delegation prefixes from a network interface.</td>
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
<tr id="parameter-NetworkInterfaceId">
    <td><CopyableCode code="NetworkInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the network interface.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Address">
    <td><CopyableCode code="Address" /></td>
    <td><code>string</code></td>
    <td>The Elastic IP address to recover or an IPv4 address from an address pool.</td>
</tr>
<tr id="parameter-AllocationId">
    <td><CopyableCode code="AllocationId" /></td>
    <td><code>string</code></td>
    <td>The allocation ID. This parameter is required.</td>
</tr>
<tr id="parameter-AllowReassignment">
    <td><CopyableCode code="AllowReassignment" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to allow an IP address that is already assigned to another network interface or instance to be reassigned to the specified network interface.</td>
</tr>
<tr id="parameter-AllowReassociation">
    <td><CopyableCode code="AllowReassociation" /></td>
    <td><code>boolean</code></td>
    <td>Reassociation is automatic, but you can specify false to ensure the operation fails if the Elastic IP address is already associated with another resource.</td>
</tr>
<tr id="parameter-AssociationId">
    <td><CopyableCode code="AssociationId" /></td>
    <td><code>string</code></td>
    <td>The association ID. This parameter is required.</td>
</tr>
<tr id="parameter-CustomerOwnedIpv4Pool">
    <td><CopyableCode code="CustomerOwnedIpv4Pool" /></td>
    <td><code>string</code></td>
    <td>The ID of a customer-owned address pool. Use this parameter to let Amazon EC2 select an address from the address pool. Alternatively, specify a specific address from the address pool.</td>
</tr>
<tr id="parameter-Domain">
    <td><CopyableCode code="Domain" /></td>
    <td><code>string</code></td>
    <td>The network (vpc).</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. Filter names and values are case-sensitive. allocation-id - The allocation ID for the address. association-id - The association ID for the address. instance-id - The ID of the instance the address is associated with, if any. network-border-group - A unique set of Availability Zones, Local Zones, or Wavelength Zones from where Amazon Web Services advertises IP addresses. network-interface-id - The ID of the network interface that the address is associated with, if any. network-interface-owner-id - The Amazon Web Services account ID of the owner. private-ip-address - The private IP address associated with the Elastic IP address. public-ip - The Elastic IP address, or the carrier IP address. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance. The instance must have exactly one attached network interface. You can specify either the instance ID or the network interface ID, but not both.</td>
</tr>
<tr id="parameter-IpamPoolId">
    <td><CopyableCode code="IpamPoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of an IPAM pool which has an Amazon-provided or BYOIP public IPv4 CIDR provisioned to it. For more information, see Allocate sequential Elastic IP addresses from an IPAM pool in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr id="parameter-Ipv4Prefix">
    <td><CopyableCode code="Ipv4Prefix" /></td>
    <td><code>array</code></td>
    <td>The IPv4 prefixes to unassign from the network interface.</td>
</tr>
<tr id="parameter-Ipv4PrefixCount">
    <td><CopyableCode code="Ipv4PrefixCount" /></td>
    <td><code>integer</code></td>
    <td>The number of IPv4 prefixes that Amazon Web Services automatically assigns to the network interface. You can't use this option if you use the Ipv4 Prefixes option.</td>
</tr>
<tr id="parameter-Ipv6AddressCount">
    <td><CopyableCode code="Ipv6AddressCount" /></td>
    <td><code>integer</code></td>
    <td>The number of additional IPv6 addresses to assign to the network interface. The specified number of IPv6 addresses are assigned in addition to the existing IPv6 addresses that are already assigned to the network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't use this option if specifying specific IPv6 addresses.</td>
</tr>
<tr id="parameter-Ipv6Addresses">
    <td><CopyableCode code="Ipv6Addresses" /></td>
    <td><code>array</code></td>
    <td>The IPv6 addresses to unassign from the network interface.</td>
</tr>
<tr id="parameter-Ipv6Prefix">
    <td><CopyableCode code="Ipv6Prefix" /></td>
    <td><code>array</code></td>
    <td>The IPv6 prefixes to unassign from the network interface.</td>
</tr>
<tr id="parameter-Ipv6PrefixCount">
    <td><CopyableCode code="Ipv6PrefixCount" /></td>
    <td><code>integer</code></td>
    <td>The number of IPv6 prefixes that Amazon Web Services automatically assigns to the network interface. You cannot use this option if you use the Ipv6Prefixes option.</td>
</tr>
<tr id="parameter-NetworkBorderGroup">
    <td><CopyableCode code="NetworkBorderGroup" /></td>
    <td><code>string</code></td>
    <td>The set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises IP addresses. If you provide an incorrect network border group, you receive an InvalidAddress.NotFound error.</td>
</tr>
<tr id="parameter-NetworkInterfaceId">
    <td><CopyableCode code="NetworkInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the network interface. If the instance has more than one network interface, you must specify a network interface ID. You can specify either the instance ID or the network interface ID, but not both.</td>
</tr>
<tr id="parameter-PrivateIpAddress">
    <td><CopyableCode code="PrivateIpAddress" /></td>
    <td><code>array</code></td>
    <td>The secondary private IP addresses to unassign from the network interface. You can specify this option multiple times to unassign more than one IP address.</td>
</tr>
<tr id="parameter-PublicIp">
    <td><CopyableCode code="PublicIp" /></td>
    <td><code>string</code></td>
    <td>Deprecated.</td>
</tr>
<tr id="parameter-PublicIpv4Pool">
    <td><CopyableCode code="PublicIpv4Pool" /></td>
    <td><code>string</code></td>
    <td>The ID of an address pool that you own. Use this parameter to let Amazon EC2 select an address from the address pool. To specify a specific address from the address pool, use the Address parameter instead.</td>
</tr>
<tr id="parameter-SecondaryPrivateIpAddressCount">
    <td><CopyableCode code="SecondaryPrivateIpAddressCount" /></td>
    <td><code>integer</code></td>
    <td>The number of secondary IP addresses to assign to the network interface. You can't specify this parameter when also specifying private IP addresses.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the Elastic IP address.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_addresses"
    values={[
        { label: 'describe_addresses', value: 'describe_addresses' }
    ]}
>
<TabItem value="describe_addresses">

Describes the specified Elastic IP addresses or all of your Elastic IP addresses.

```sql
SELECT
allocation_id,
association_id,
carrier_ip,
customer_owned_ip,
customer_owned_ipv_4_pool,
domain,
instance_id,
network_border_group,
network_interface_id,
network_interface_owner_id,
private_ip_address,
public_ip,
public_ipv_4_pool,
service_managed,
subnet_id,
tags
FROM aws.ec2.addresses
WHERE region = '{{ region }}' -- required
AND PublicIp = '{{ PublicIp }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND AllocationId = '{{ AllocationId }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="assign_ipv6_addresses"
    values={[
        { label: 'assign_ipv6_addresses', value: 'assign_ipv6_addresses' },
        { label: 'allocate_address', value: 'allocate_address' }
    ]}
>
<TabItem value="assign_ipv6_addresses">

Assigns the specified IPv6 addresses to the specified network interface. You can specify specific IPv6 addresses, or you can specify the number of IPv6 addresses to be automatically assigned from the subnet's IPv6 CIDR block range. You can assign as many IPv6 addresses to a network interface as you can assign private IPv4 addresses, and the limit varies by instance type. You must specify either the IPv6 addresses or the IPv6 address count in the request. You can optionally use Prefix Delegation on the network interface. You must specify either the IPV6 Prefix Delegation prefixes, or the IPv6 Prefix Delegation count. For information, see Assigning prefixes to network interfaces in the Amazon EC2 User Guide.

```sql
UPDATE aws.ec2.addresses
SET 
-- No updatable properties
WHERE 
NetworkInterfaceId = '{{ NetworkInterfaceId }}' --required
AND region = '{{ region }}' --required
AND Ipv6PrefixCount = '{{ Ipv6PrefixCount}}'
AND Ipv6Prefix = '{{ Ipv6Prefix}}'
AND Ipv6Addresses = '{{ Ipv6Addresses}}'
AND Ipv6AddressCount = '{{ Ipv6AddressCount}}'
RETURNING
assigned_ipv_6_addresses,
assigned_ipv_6_prefixes,
network_interface_id;
```
</TabItem>
<TabItem value="allocate_address">

Allocates an Elastic IP address to your Amazon Web Services account. After you allocate the Elastic IP address you can associate it with an instance or network interface. After you release an Elastic IP address, it is released to the IP address pool and can be allocated to a different Amazon Web Services account. You can allocate an Elastic IP address from one of the following address pools: Amazon's pool of IPv4 addresses Public IPv4 address range that you own and bring to your Amazon Web Services account using Bring Your Own IP Addresses (BYOIP) An IPv4 IPAM pool with an Amazon-provided or BYOIP public IPv4 address range IPv4 addresses from your on-premises network made available for use with an Outpost using a customer-owned IP address pool (CoIP pool) For more information, see Elastic IP Addresses in the Amazon EC2 User Guide. If you release an Elastic IP address, you might be able to recover it. You cannot recover an Elastic IP address that you released after it is allocated to another Amazon Web Services account. To attempt to recover an Elastic IP address that you released, specify it in this operation. You can allocate a carrier IP address which is a public IP address from a telecommunication carrier, to a network interface which resides in a subnet in a Wavelength Zone (for example an EC2 instance).

```sql
UPDATE aws.ec2.addresses
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND Domain = '{{ Domain}}'
AND Address = '{{ Address}}'
AND PublicIpv4Pool = '{{ PublicIpv4Pool}}'
AND NetworkBorderGroup = '{{ NetworkBorderGroup}}'
AND CustomerOwnedIpv4Pool = '{{ CustomerOwnedIpv4Pool}}'
AND TagSpecification = '{{ TagSpecification}}'
AND IpamPoolId = '{{ IpamPoolId}}'
AND DryRun = {{ DryRun}}
RETURNING
allocation_id,
carrier_ip,
customer_owned_ip,
customer_owned_ipv_4_pool,
domain,
network_border_group,
public_ip,
public_ipv_4_pool;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="assign_private_ip_addresses"
    values={[
        { label: 'assign_private_ip_addresses', value: 'assign_private_ip_addresses' },
        { label: 'associate_address', value: 'associate_address' },
        { label: 'disassociate_address', value: 'disassociate_address' },
        { label: 'release_address', value: 'release_address' },
        { label: 'unassign_ipv6_addresses', value: 'unassign_ipv6_addresses' },
        { label: 'unassign_private_ip_addresses', value: 'unassign_private_ip_addresses' }
    ]}
>
<TabItem value="assign_private_ip_addresses">

Assigns the specified secondary private IP addresses to the specified network interface. You can specify specific secondary IP addresses, or you can specify the number of secondary IP addresses to be automatically assigned from the subnet's CIDR block range. The number of secondary IP addresses that you can assign to an instance varies by instance type. For more information about Elastic IP addresses, see Elastic IP Addresses in the Amazon EC2 User Guide. When you move a secondary private IP address to another network interface, any Elastic IP address that is associated with the IP address is also moved. Remapping an IP address is an asynchronous operation. When you move an IP address from one network interface to another, check network/interfaces/macs/mac/local-ipv4s in the instance metadata to confirm that the remapping is complete. You must specify either the IP addresses or the IP address count in the request. You can optionally use Prefix Delegation on the network interface. You must specify either the IPv4 Prefix Delegation prefixes, or the IPv4 Prefix Delegation count. For information, see Assigning prefixes to network interfaces in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.addresses.assign_private_ip_addresses 
@NetworkInterfaceId='{{ NetworkInterfaceId }}' --required, 
@region='{{ region }}' --required, 
@Ipv4Prefix='{{ Ipv4Prefix }}', 
@Ipv4PrefixCount='{{ Ipv4PrefixCount }}', 
@PrivateIpAddress='{{ PrivateIpAddress }}', 
@SecondaryPrivateIpAddressCount='{{ SecondaryPrivateIpAddressCount }}', 
@AllowReassignment={{ AllowReassignment }}
;
```
</TabItem>
<TabItem value="associate_address">

Associates an Elastic IP address, or carrier IP address (for instances that are in subnets in Wavelength Zones) with an instance or a network interface. Before you can use an Elastic IP address, you must allocate it to your account. If the Elastic IP address is already associated with a different instance, it is disassociated from that instance and associated with the specified instance. If you associate an Elastic IP address with an instance that has an existing Elastic IP address, the existing address is disassociated from the instance, but remains allocated to your account. [Subnets in Wavelength Zones] You can associate an IP address from the telecommunication carrier to the instance or network interface. You cannot associate an Elastic IP address with an interface in a different network border group. This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error, and you may be charged for each time the Elastic IP address is remapped to the same instance. For more information, see the Elastic IP Addresses section of Amazon EC2 Pricing.

```sql
EXEC aws.ec2.addresses.associate_address 
@region='{{ region }}' --required, 
@AllocationId='{{ AllocationId }}', 
@InstanceId='{{ InstanceId }}', 
@PublicIp='{{ PublicIp }}', 
@DryRun={{ DryRun }}, 
@NetworkInterfaceId='{{ NetworkInterfaceId }}', 
@PrivateIpAddress='{{ PrivateIpAddress }}', 
@AllowReassociation={{ AllowReassociation }}
;
```
</TabItem>
<TabItem value="disassociate_address">

Disassociates an Elastic IP address from the instance or network interface it's associated with. This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error. An address cannot be disassociated if the all of the following conditions are met: Network interface has a publicDualStackDnsName publicDnsName Public IPv4 address is the primary public IPv4 address Network interface only has one remaining public IPv4 address

```sql
EXEC aws.ec2.addresses.disassociate_address 
@region='{{ region }}' --required, 
@AssociationId='{{ AssociationId }}', 
@PublicIp='{{ PublicIp }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="release_address">

Releases the specified Elastic IP address. [Default VPC] Releasing an Elastic IP address automatically disassociates it from any instance that it's associated with. Alternatively, you can disassociate an Elastic IP address without releasing it. [Nondefault VPC] You must disassociate the Elastic IP address before you can release it. Otherwise, Amazon EC2 returns an error (InvalidIPAddress.InUse). After releasing an Elastic IP address, it is released to the IP address pool. Be sure to update your DNS records and any servers or devices that communicate with the address. If you attempt to release an Elastic IP address that you already released, you'll get an AuthFailure error if the address is already allocated to another Amazon Web Services account. After you release an Elastic IP address, you might be able to recover it. For more information, see Release an Elastic IP address.

```sql
EXEC aws.ec2.addresses.release_address 
@region='{{ region }}' --required, 
@AllocationId='{{ AllocationId }}', 
@PublicIp='{{ PublicIp }}', 
@NetworkBorderGroup='{{ NetworkBorderGroup }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="unassign_ipv6_addresses">

Unassigns the specified IPv6 addresses or Prefix Delegation prefixes from a network interface.

```sql
EXEC aws.ec2.addresses.unassign_ipv6_addresses 
@NetworkInterfaceId='{{ NetworkInterfaceId }}' --required, 
@region='{{ region }}' --required, 
@Ipv6Prefix='{{ Ipv6Prefix }}', 
@Ipv6Addresses='{{ Ipv6Addresses }}'
;
```
</TabItem>
<TabItem value="unassign_private_ip_addresses">

Unassigns the specified secondary private IP addresses or IPv4 Prefix Delegation prefixes from a network interface.

```sql
EXEC aws.ec2.addresses.unassign_private_ip_addresses 
@NetworkInterfaceId='{{ NetworkInterfaceId }}' --required, 
@region='{{ region }}' --required, 
@Ipv4Prefix='{{ Ipv4Prefix }}', 
@PrivateIpAddress='{{ PrivateIpAddress }}'
;
```
</TabItem>
</Tabs>
