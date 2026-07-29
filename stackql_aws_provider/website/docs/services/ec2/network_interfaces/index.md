--- 
title: network_interfaces
hide_title: false
hide_table_of_contents: false
keywords:
  - network_interfaces
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

Creates, updates, deletes, gets or lists a <code>network_interfaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_interfaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.network_interfaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_network_interfaces"
    values={[
        { label: 'describe_network_interfaces', value: 'describe_network_interfaces' }
    ]}
>
<TabItem value="describe_network_interfaces">

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
    <td><CopyableCode code="associated_subnets" /></td>
    <td><code>string</code></td>
    <td>The subnets associated with this network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="association" /></td>
    <td><code>string</code></td>
    <td>The association information for an Elastic IP address (IPv4) associated with the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="attachment" /></td>
    <td><code>string</code></td>
    <td>The network interface attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_tracking_configuration" /></td>
    <td><code>string</code></td>
    <td>A security group connection tracking configuration that enables you to set the timeout for connection tracking on an Elastic network interface. For more information, see Connection tracking timeouts in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="deny_all_igw_traffic" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a network interface with an IPv6 address is unreachable from the public internet. If the value is true, inbound traffic from the internet is dropped and you cannot assign an elastic IP address to the network interface. The network interface is reachable from peered VPCs and resources connected through a transit gateway, including on-premises networks.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description.</td>
</tr>
<tr>
    <td><CopyableCode code="groups" /></td>
    <td><code>string</code></td>
    <td>Any security groups for the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="interface_type" /></td>
    <td><code>string</code></td>
    <td>The type of network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_4_prefixes" /></td>
    <td><code>string</code></td>
    <td>The IPv4 prefixes that are assigned to the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_address" /></td>
    <td><code>string</code></td>
    <td>The IPv6 globally unique address associated with the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_addresses" /></td>
    <td><code>string</code></td>
    <td>The IPv6 addresses associated with the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_native" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this is an IPv6 only network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_prefixes" /></td>
    <td><code>string</code></td>
    <td>The IPv6 prefixes that are assigned to the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="mac_address" /></td>
    <td><code>string</code></td>
    <td>The MAC address.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="operator" /></td>
    <td><code>string</code></td>
    <td>The service provider that manages the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Outpost.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the owner of the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="private_dns_name" /></td>
    <td><code>string</code></td>
    <td>The private hostname. For more information, see EC2 instance hostnames, DNS names, and domains in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="private_ip_address" /></td>
    <td><code>string</code></td>
    <td>The IPv4 address of the network interface within the subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="private_ip_addresses" /></td>
    <td><code>string</code></td>
    <td>The private IPv4 addresses associated with the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="public_dns_name" /></td>
    <td><code>string</code></td>
    <td>A public hostname. For more information, see EC2 instance hostnames, DNS names, and domains in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="public_ip_dns_name_options" /></td>
    <td><code>string</code></td>
    <td>Public hostname type options. For more information, see EC2 instance hostnames, DNS names, and domains in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="requester_id" /></td>
    <td><code>string</code></td>
    <td>The alias or Amazon Web Services account ID of the principal or service that created the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="requester_managed" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the network interface is being managed by Amazon Web Services.</td>
</tr>
<tr>
    <td><CopyableCode code="source_dest_check" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether source/destination checking is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_set" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
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
    <td><a href="#describe_network_interfaces"><CopyableCode code="describe_network_interfaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-IncludeManagedResources"><code>IncludeManagedResources</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes the specified network interfaces or all your network interfaces. If you have a large number of network interfaces, the operation fails unless you use pagination or one of the following filters: group-id, mac-address, private-dns-name, private-ip-address, subnet-id, or vpc-id. We strongly recommend using only paginated requests. Unpaginated requests are susceptible to throttling and timeouts.</td>
</tr>
<tr>
    <td><a href="#create_network_interface"><CopyableCode code="create_network_interface" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-SubnetId"><code>SubnetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Ipv4Prefix"><code>Ipv4Prefix</code></a>, <a href="#parameter-Ipv4PrefixCount"><code>Ipv4PrefixCount</code></a>, <a href="#parameter-Ipv6Prefix"><code>Ipv6Prefix</code></a>, <a href="#parameter-Ipv6PrefixCount"><code>Ipv6PrefixCount</code></a>, <a href="#parameter-InterfaceType"><code>InterfaceType</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-EnablePrimaryIpv6"><code>EnablePrimaryIpv6</code></a>, <a href="#parameter-ConnectionTrackingSpecification"><code>ConnectionTrackingSpecification</code></a>, <a href="#parameter-Operator"><code>Operator</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-PrivateIpAddress"><code>PrivateIpAddress</code></a>, <a href="#parameter-SecurityGroupId"><code>SecurityGroupId</code></a>, <a href="#parameter-PrivateIpAddresses"><code>PrivateIpAddresses</code></a>, <a href="#parameter-SecondaryPrivateIpAddressCount"><code>SecondaryPrivateIpAddressCount</code></a>, <a href="#parameter-Ipv6Addresses"><code>Ipv6Addresses</code></a>, <a href="#parameter-Ipv6AddressCount"><code>Ipv6AddressCount</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a network interface in the specified subnet. The number of IP addresses you can assign to a network interface varies by instance type. For more information about network interfaces, see Elastic network interfaces in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#attach_network_interface"><CopyableCode code="attach_network_interface" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-DeviceIndex"><code>DeviceIndex</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NetworkCardIndex"><code>NetworkCardIndex</code></a>, <a href="#parameter-EnaSrdSpecification"><code>EnaSrdSpecification</code></a>, <a href="#parameter-EnaQueueCount"><code>EnaQueueCount</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Attaches a network interface to an instance.</td>
</tr>
<tr>
    <td><a href="#modify_public_ip_dns_name_options"><CopyableCode code="modify_public_ip_dns_name_options" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-HostnameType"><code>HostnameType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modify public hostname options for a network interface. For more information, see EC2 instance hostnames, DNS names, and domains in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#detach_network_interface"><CopyableCode code="detach_network_interface" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AttachmentId"><code>AttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Force"><code>Force</code></a></td>
    <td>Detaches a network interface from an instance.</td>
</tr>
<tr>
    <td><a href="#delete_network_interface"><CopyableCode code="delete_network_interface" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified network interface. You must detach the network interface before you can delete it.</td>
</tr>
<tr>
    <td><a href="#reset_network_interface_attribute"><CopyableCode code="reset_network_interface_attribute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-SourceDestCheck"><code>SourceDestCheck</code></a></td>
    <td>Resets a network interface attribute. You can specify only one attribute at a time.</td>
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
<tr id="parameter-AttachmentId">
    <td><CopyableCode code="AttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment.</td>
</tr>
<tr id="parameter-DeviceIndex">
    <td><CopyableCode code="DeviceIndex" /></td>
    <td><code>integer</code></td>
    <td>The index of the device for the network interface attachment.</td>
</tr>
<tr id="parameter-HostnameType">
    <td><CopyableCode code="HostnameType" /></td>
    <td><code>string</code></td>
    <td>The public hostname type. For more information, see EC2 instance hostnames, DNS names, and domains in the Amazon EC2 User Guide. public-dual-stack-dns-name: A dual-stack public hostname for a network interface. Requests from within the VPC resolve to both the private IPv4 address and the IPv6 Global Unicast Address of the network interface. Requests from the internet resolve to both the public IPv4 and the IPv6 GUA address of the network interface. public-ipv4-dns-name: An IPv4-enabled public hostname for a network interface. Requests from within the VPC resolve to the private primary IPv4 address of the network interface. Requests from the internet resolve to the public IPv4 address of the network interface. public-ipv6-dns-name: An IPv6-enabled public hostname for a network interface. Requests from within the VPC or from the internet resolve to the IPv6 GUA of the network interface.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr id="parameter-NetworkInterfaceId">
    <td><CopyableCode code="NetworkInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the network interface.</td>
</tr>
<tr id="parameter-SubnetId">
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet to associate with the network interface.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-ConnectionTrackingSpecification">
    <td><CopyableCode code="ConnectionTrackingSpecification" /></td>
    <td><code>object</code></td>
    <td>A connection tracking specification for the network interface.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description for the network interface.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EnaQueueCount">
    <td><CopyableCode code="EnaQueueCount" /></td>
    <td><code>integer</code></td>
    <td>The number of ENA queues to be created with the instance.</td>
</tr>
<tr id="parameter-EnaSrdSpecification">
    <td><CopyableCode code="EnaSrdSpecification" /></td>
    <td><code>object</code></td>
    <td>Configures ENA Express for the network interface that this action attaches to the instance.</td>
</tr>
<tr id="parameter-EnablePrimaryIpv6">
    <td><CopyableCode code="EnablePrimaryIpv6" /></td>
    <td><code>boolean</code></td>
    <td>If you’re creating a network interface in a dual-stack or IPv6-only subnet, you have the option to assign a primary IPv6 IP address. A primary IPv6 address is an IPv6 GUA address associated with an ENI that you have enabled to use a primary IPv6 address. Use this option if the instance that this ENI will be attached to relies on its IPv6 address not changing. Amazon Web Services will automatically assign an IPv6 address associated with the ENI attached to your instance to be the primary IPv6 address. Once you enable an IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. If you have multiple IPv6 addresses associated with an ENI attached to your instance and you enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI becomes the primary IPv6 address.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. association.allocation-id - The allocation ID returned when you allocated the Elastic IP address (IPv4) for your network interface. association.association-id - The association ID returned when the network interface was associated with an IPv4 address. addresses.association.owner-id - The owner ID of the addresses associated with the network interface. addresses.association.public-ip - The association ID returned when the network interface was associated with the Elastic IP address (IPv4). addresses.primary - Whether the private IPv4 address is the primary IP address associated with the network interface. addresses.private-ip-address - The private IPv4 addresses associated with the network interface. association.ip-owner-id - The owner of the Elastic IP address (IPv4) associated with the network interface. association.public-ip - The address of the Elastic IP address (IPv4) bound to the network interface. association.public-dns-name - The public DNS name for the network interface (IPv4). attachment.attach-time - The time that the network interface was attached to an instance. attachment.attachment-id - The ID of the interface attachment. attachment.delete-on-termination - Indicates whether the attachment is deleted when an instance is terminated. attachment.device-index - The device index to which the network interface is attached. attachment.instance-id - The ID of the instance to which the network interface is attached. attachment.instance-owner-id - The owner ID of the instance to which the network interface is attached. attachment.status - The status of the attachment (attaching | attached | detaching | detached). availability-zone - The Availability Zone of the network interface. availability-zone-id - The ID of the Availability Zone of the network interface. description - The description of the network interface. group-id - The ID of a security group associated with the network interface. ipv6-addresses.ipv6-address - An IPv6 address associated with the network interface. interface-type - The type of network interface (api_gateway_managed | aws_codestar_connections_managed | branch | ec2_instance_connect_endpoint | efa | efa-only | efs | evs | gateway_load_balancer | gateway_load_balancer_endpoint | global_accelerator_managed | interface | iot_rules_managed | lambda | load_balancer | nat_gateway | network_load_balancer | quicksight | transit_gateway | trunk | vpc_endpoint). mac-address - The MAC address of the network interface. network-interface-id - The ID of the network interface. operator.managed - A Boolean that indicates whether this is a managed network interface. operator.principal - The principal that manages the network interface. Only valid for managed network interfaces, where managed is true. owner-id - The Amazon Web Services account ID of the network interface owner. private-dns-name - The private DNS name of the network interface (IPv4). private-ip-address - The private IPv4 address or addresses of the network interface. requester-id - The alias or Amazon Web Services account ID of the principal or service that created the network interface. requester-managed - Indicates whether the network interface is being managed by an Amazon Web Services service (for example, Amazon Web Services Management Console, Auto Scaling, and so on). source-dest-check - Indicates whether the network interface performs source/destination checking. A value of true means checking is enabled, and false means checking is disabled. The value must be false for the network interface to perform network address translation (NAT) in your VPC. status - The status of the network interface. If the network interface is not attached to an instance, the status is available; if a network interface is attached to an instance the status is in-use. subnet-id - The ID of the subnet for the network interface. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. vpc-id - The ID of the VPC for the network interface.</td>
</tr>
<tr id="parameter-Force">
    <td><CopyableCode code="Force" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to force a detachment. Use the Force parameter only as a last resort to detach a network interface from a failed instance. If you use the Force parameter to detach a network interface, you might not be able to attach a different network interface to the same index on the instance without first stopping and starting the instance. If you force the detachment of a network interface, the instance metadata might not get updated. This means that the attributes associated with the detached network interface might still be visible. The instance metadata will get updated when you stop and start the instance.</td>
</tr>
<tr id="parameter-IncludeManagedResources">
    <td><CopyableCode code="IncludeManagedResources" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to include managed resources in the output. If this parameter is set to true, the output includes resources that are managed by Amazon Web Services services, even if managed resource visibility is set to hidden.</td>
</tr>
<tr id="parameter-InterfaceType">
    <td><CopyableCode code="InterfaceType" /></td>
    <td><code>string</code></td>
    <td>The type of network interface. The default is interface. If you specify efa-only, do not assign any IP addresses to the network interface. EFA-only network interfaces do not support IP addresses. The only supported values are interface, efa, efa-only, and trunk.</td>
</tr>
<tr id="parameter-Ipv4Prefix">
    <td><CopyableCode code="Ipv4Prefix" /></td>
    <td><code>array</code></td>
    <td>The IPv4 prefixes assigned to the network interface. You can't specify IPv4 prefixes if you've specified one of the following: a count of IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.</td>
</tr>
<tr id="parameter-Ipv4PrefixCount">
    <td><CopyableCode code="Ipv4PrefixCount" /></td>
    <td><code>integer</code></td>
    <td>The number of IPv4 prefixes that Amazon Web Services automatically assigns to the network interface. You can't specify a count of IPv4 prefixes if you've specified one of the following: specific IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.</td>
</tr>
<tr id="parameter-Ipv6AddressCount">
    <td><CopyableCode code="Ipv6AddressCount" /></td>
    <td><code>integer</code></td>
    <td>The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't specify a count of IPv6 addresses using this parameter if you've specified one of the following: specific IPv6 addresses, specific IPv6 prefixes, or a count of IPv6 prefixes. If your subnet has the AssignIpv6AddressOnCreation attribute set, you can override that setting by specifying 0 as the IPv6 address count.</td>
</tr>
<tr id="parameter-Ipv6Addresses">
    <td><CopyableCode code="Ipv6Addresses" /></td>
    <td><code>array</code></td>
    <td>The IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't specify IPv6 addresses using this parameter if you've specified one of the following: a count of IPv6 addresses, specific IPv6 prefixes, or a count of IPv6 prefixes.</td>
</tr>
<tr id="parameter-Ipv6Prefix">
    <td><CopyableCode code="Ipv6Prefix" /></td>
    <td><code>array</code></td>
    <td>The IPv6 prefixes assigned to the network interface. You can't specify IPv6 prefixes if you've specified one of the following: a count of IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.</td>
</tr>
<tr id="parameter-Ipv6PrefixCount">
    <td><CopyableCode code="Ipv6PrefixCount" /></td>
    <td><code>integer</code></td>
    <td>The number of IPv6 prefixes that Amazon Web Services automatically assigns to the network interface. You can't specify a count of IPv6 prefixes if you've specified one of the following: specific IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. You cannot specify this parameter and the network interface IDs parameter in the same request. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NetworkCardIndex">
    <td><CopyableCode code="NetworkCardIndex" /></td>
    <td><code>integer</code></td>
    <td>The index of the network card. Some instance types support multiple network cards. The primary network interface must be assigned to network card index 0. The default is network card index 0.</td>
</tr>
<tr id="parameter-NetworkInterfaceId">
    <td><CopyableCode code="NetworkInterfaceId" /></td>
    <td><code>array</code></td>
    <td>The network interface IDs. Default: Describes all your network interfaces.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-Operator">
    <td><CopyableCode code="Operator" /></td>
    <td><code>object</code></td>
    <td>Reserved for internal use.</td>
</tr>
<tr id="parameter-PrivateIpAddress">
    <td><CopyableCode code="PrivateIpAddress" /></td>
    <td><code>string</code></td>
    <td>The primary private IPv4 address of the network interface. If you don't specify an IPv4 address, Amazon EC2 selects one for you from the subnet's IPv4 CIDR range. If you specify an IP address, you cannot indicate any IP addresses specified in privateIpAddresses as primary (only one IP address can be designated as primary).</td>
</tr>
<tr id="parameter-PrivateIpAddresses">
    <td><CopyableCode code="PrivateIpAddresses" /></td>
    <td><code>array</code></td>
    <td>The private IPv4 addresses. You can't specify private IPv4 addresses if you've specified one of the following: a count of private IPv4 addresses, specific IPv4 prefixes, or a count of IPv4 prefixes.</td>
</tr>
<tr id="parameter-SecondaryPrivateIpAddressCount">
    <td><CopyableCode code="SecondaryPrivateIpAddressCount" /></td>
    <td><code>integer</code></td>
    <td>The number of secondary private IPv4 addresses to assign to a network interface. When you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses within the subnet's IPv4 CIDR range. You can't specify this option and specify more than one private IP address using privateIpAddresses. You can't specify a count of private IPv4 addresses if you've specified one of the following: specific private IPv4 addresses, specific IPv4 prefixes, or a count of IPv4 prefixes.</td>
</tr>
<tr id="parameter-SecurityGroupId">
    <td><CopyableCode code="SecurityGroupId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the security groups.</td>
</tr>
<tr id="parameter-SourceDestCheck">
    <td><CopyableCode code="SourceDestCheck" /></td>
    <td><code>string</code></td>
    <td>The source/destination checking attribute. Resets the value to true.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the new network interface.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_network_interfaces"
    values={[
        { label: 'describe_network_interfaces', value: 'describe_network_interfaces' }
    ]}
>
<TabItem value="describe_network_interfaces">

Describes the specified network interfaces or all your network interfaces. If you have a large number of network interfaces, the operation fails unless you use pagination or one of the following filters: group-id, mac-address, private-dns-name, private-ip-address, subnet-id, or vpc-id. We strongly recommend using only paginated requests. Unpaginated requests are susceptible to throttling and timeouts.

```sql
SELECT
associated_subnets,
association,
attachment,
availability_zone,
availability_zone_id,
connection_tracking_configuration,
deny_all_igw_traffic,
description,
groups,
interface_type,
ipv_4_prefixes,
ipv_6_address,
ipv_6_addresses,
ipv_6_native,
ipv_6_prefixes,
mac_address,
network_interface_id,
operator,
outpost_arn,
owner_id,
private_dns_name,
private_ip_address,
private_ip_addresses,
public_dns_name,
public_ip_dns_name_options,
requester_id,
requester_managed,
source_dest_check,
status,
subnet_id,
tag_set,
vpc_id
FROM aws.ec2.network_interfaces
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND IncludeManagedResources = '{{ IncludeManagedResources }}'
AND DryRun = '{{ DryRun }}'
AND NetworkInterfaceId = '{{ NetworkInterfaceId }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_network_interface"
    values={[
        { label: 'create_network_interface', value: 'create_network_interface' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_network_interface">

Creates a network interface in the specified subnet. The number of IP addresses you can assign to a network interface varies by instance type. For more information about network interfaces, see Elastic network interfaces in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.network_interfaces (
SubnetId,
region,
Ipv4Prefix,
Ipv4PrefixCount,
Ipv6Prefix,
Ipv6PrefixCount,
InterfaceType,
TagSpecification,
ClientToken,
EnablePrimaryIpv6,
ConnectionTrackingSpecification,
Operator,
Description,
PrivateIpAddress,
SecurityGroupId,
PrivateIpAddresses,
SecondaryPrivateIpAddressCount,
Ipv6Addresses,
Ipv6AddressCount,
DryRun
)
SELECT 
'{{ SubnetId }}',
'{{ region }}',
'{{ Ipv4Prefix }}',
'{{ Ipv4PrefixCount }}',
'{{ Ipv6Prefix }}',
'{{ Ipv6PrefixCount }}',
'{{ InterfaceType }}',
'{{ TagSpecification }}',
'{{ ClientToken }}',
'{{ EnablePrimaryIpv6 }}',
'{{ ConnectionTrackingSpecification }}',
'{{ Operator }}',
'{{ Description }}',
'{{ PrivateIpAddress }}',
'{{ SecurityGroupId }}',
'{{ PrivateIpAddresses }}',
'{{ SecondaryPrivateIpAddressCount }}',
'{{ Ipv6Addresses }}',
'{{ Ipv6AddressCount }}',
'{{ DryRun }}'
RETURNING
associated_subnets,
association,
attachment,
availability_zone,
availability_zone_id,
connection_tracking_configuration,
deny_all_igw_traffic,
description,
groups,
interface_type,
ipv_4_prefixes,
ipv_6_address,
ipv_6_addresses,
ipv_6_native,
ipv_6_prefixes,
mac_address,
network_interface_id,
operator,
outpost_arn,
owner_id,
private_dns_name,
private_ip_address,
private_ip_addresses,
public_dns_name,
public_ip_dns_name_options,
requester_id,
requester_managed,
source_dest_check,
status,
subnet_id,
tag_set,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: network_interfaces
  props:
    - name: SubnetId
      value: "{{ SubnetId }}"
      description: Required parameter for the network_interfaces resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the network_interfaces resource.
    - name: Ipv4Prefix
      value: "{{ Ipv4Prefix }}"
      description: The IPv4 prefixes assigned to the network interface. You can't specify IPv4 prefixes if you've specified one of the following: a count of IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.
      description: The IPv4 prefixes assigned to the network interface. You can't specify IPv4 prefixes if you've specified one of the following: a count of IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.
    - name: Ipv4PrefixCount
      value: {{ Ipv4PrefixCount }}
      description: The number of IPv4 prefixes that Amazon Web Services automatically assigns to the network interface. You can't specify a count of IPv4 prefixes if you've specified one of the following: specific IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.
      description: The number of IPv4 prefixes that Amazon Web Services automatically assigns to the network interface. You can't specify a count of IPv4 prefixes if you've specified one of the following: specific IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.
    - name: Ipv6Prefix
      value: "{{ Ipv6Prefix }}"
      description: The IPv6 prefixes assigned to the network interface. You can't specify IPv6 prefixes if you've specified one of the following: a count of IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.
      description: The IPv6 prefixes assigned to the network interface. You can't specify IPv6 prefixes if you've specified one of the following: a count of IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.
    - name: Ipv6PrefixCount
      value: {{ Ipv6PrefixCount }}
      description: The number of IPv6 prefixes that Amazon Web Services automatically assigns to the network interface. You can't specify a count of IPv6 prefixes if you've specified one of the following: specific IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.
      description: The number of IPv6 prefixes that Amazon Web Services automatically assigns to the network interface. You can't specify a count of IPv6 prefixes if you've specified one of the following: specific IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.
    - name: InterfaceType
      value: "{{ InterfaceType }}"
      description: The type of network interface. The default is interface. If you specify efa-only, do not assign any IP addresses to the network interface. EFA-only network interfaces do not support IP addresses. The only supported values are interface, efa, efa-only, and trunk.
      description: The type of network interface. The default is interface. If you specify efa-only, do not assign any IP addresses to the network interface. EFA-only network interfaces do not support IP addresses. The only supported values are interface, efa, efa-only, and trunk.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the new network interface.
      description: The tags to apply to the new network interface.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
    - name: EnablePrimaryIpv6
      value: {{ EnablePrimaryIpv6 }}
      description: If you’re creating a network interface in a dual-stack or IPv6-only subnet, you have the option to assign a primary IPv6 IP address. A primary IPv6 address is an IPv6 GUA address associated with an ENI that you have enabled to use a primary IPv6 address. Use this option if the instance that this ENI will be attached to relies on its IPv6 address not changing. Amazon Web Services will automatically assign an IPv6 address associated with the ENI attached to your instance to be the primary IPv6 address. Once you enable an IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. If you have multiple IPv6 addresses associated with an ENI attached to your instance and you enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI becomes the primary IPv6 address.
      description: If you’re creating a network interface in a dual-stack or IPv6-only subnet, you have the option to assign a primary IPv6 IP address. A primary IPv6 address is an IPv6 GUA address associated with an ENI that you have enabled to use a primary IPv6 address. Use this option if the instance that this ENI will be attached to relies on its IPv6 address not changing. Amazon Web Services will automatically assign an IPv6 address associated with the ENI attached to your instance to be the primary IPv6 address. Once you enable an IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. If you have multiple IPv6 addresses associated with an ENI attached to your instance and you enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI becomes the primary IPv6 address.
    - name: ConnectionTrackingSpecification
      value: "{{ ConnectionTrackingSpecification }}"
      description: A connection tracking specification for the network interface.
      description: A connection tracking specification for the network interface.
    - name: Operator
      value: "{{ Operator }}"
      description: Reserved for internal use.
      description: Reserved for internal use.
    - name: Description
      value: "{{ Description }}"
      description: A description for the network interface.
      description: A description for the network interface.
    - name: PrivateIpAddress
      value: "{{ PrivateIpAddress }}"
      description: The primary private IPv4 address of the network interface. If you don't specify an IPv4 address, Amazon EC2 selects one for you from the subnet's IPv4 CIDR range. If you specify an IP address, you cannot indicate any IP addresses specified in privateIpAddresses as primary (only one IP address can be designated as primary).
      description: The primary private IPv4 address of the network interface. If you don't specify an IPv4 address, Amazon EC2 selects one for you from the subnet's IPv4 CIDR range. If you specify an IP address, you cannot indicate any IP addresses specified in privateIpAddresses as primary (only one IP address can be designated as primary).
    - name: SecurityGroupId
      value: "{{ SecurityGroupId }}"
      description: The IDs of the security groups.
      description: The IDs of the security groups.
    - name: PrivateIpAddresses
      value: "{{ PrivateIpAddresses }}"
      description: The private IPv4 addresses. You can't specify private IPv4 addresses if you've specified one of the following: a count of private IPv4 addresses, specific IPv4 prefixes, or a count of IPv4 prefixes.
      description: The private IPv4 addresses. You can't specify private IPv4 addresses if you've specified one of the following: a count of private IPv4 addresses, specific IPv4 prefixes, or a count of IPv4 prefixes.
    - name: SecondaryPrivateIpAddressCount
      value: {{ SecondaryPrivateIpAddressCount }}
      description: The number of secondary private IPv4 addresses to assign to a network interface. When you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses within the subnet's IPv4 CIDR range. You can't specify this option and specify more than one private IP address using privateIpAddresses. You can't specify a count of private IPv4 addresses if you've specified one of the following: specific private IPv4 addresses, specific IPv4 prefixes, or a count of IPv4 prefixes.
      description: The number of secondary private IPv4 addresses to assign to a network interface. When you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses within the subnet's IPv4 CIDR range. You can't specify this option and specify more than one private IP address using privateIpAddresses. You can't specify a count of private IPv4 addresses if you've specified one of the following: specific private IPv4 addresses, specific IPv4 prefixes, or a count of IPv4 prefixes.
    - name: Ipv6Addresses
      value: "{{ Ipv6Addresses }}"
      description: The IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't specify IPv6 addresses using this parameter if you've specified one of the following: a count of IPv6 addresses, specific IPv6 prefixes, or a count of IPv6 prefixes.
      description: The IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't specify IPv6 addresses using this parameter if you've specified one of the following: a count of IPv6 addresses, specific IPv6 prefixes, or a count of IPv6 prefixes.
    - name: Ipv6AddressCount
      value: {{ Ipv6AddressCount }}
      description: The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't specify a count of IPv6 addresses using this parameter if you've specified one of the following: specific IPv6 addresses, specific IPv6 prefixes, or a count of IPv6 prefixes. If your subnet has the AssignIpv6AddressOnCreation attribute set, you can override that setting by specifying 0 as the IPv6 address count.
      description: The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't specify a count of IPv6 addresses using this parameter if you've specified one of the following: specific IPv6 addresses, specific IPv6 prefixes, or a count of IPv6 prefixes. If your subnet has the AssignIpv6AddressOnCreation attribute set, you can override that setting by specifying 0 as the IPv6 address count.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_network_interface"
    values={[
        { label: 'attach_network_interface', value: 'attach_network_interface' },
        { label: 'modify_public_ip_dns_name_options', value: 'modify_public_ip_dns_name_options' },
        { label: 'detach_network_interface', value: 'detach_network_interface' }
    ]}
>
<TabItem value="attach_network_interface">

Attaches a network interface to an instance.

```sql
UPDATE aws.ec2.network_interfaces
SET 
-- No updatable properties
WHERE 
NetworkInterfaceId = '{{ NetworkInterfaceId }}' --required
AND InstanceId = '{{ InstanceId }}' --required
AND DeviceIndex = '{{ DeviceIndex }}' --required
AND region = '{{ region }}' --required
AND NetworkCardIndex = '{{ NetworkCardIndex}}'
AND EnaSrdSpecification = '{{ EnaSrdSpecification}}'
AND EnaQueueCount = '{{ EnaQueueCount}}'
AND DryRun = {{ DryRun}}
RETURNING
attachment_id,
network_card_index;
```
</TabItem>
<TabItem value="modify_public_ip_dns_name_options">

Modify public hostname options for a network interface. For more information, see EC2 instance hostnames, DNS names, and domains in the Amazon EC2 User Guide.

```sql
UPDATE aws.ec2.network_interfaces
SET 
-- No updatable properties
WHERE 
NetworkInterfaceId = '{{ NetworkInterfaceId }}' --required
AND HostnameType = '{{ HostnameType }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
successful;
```
</TabItem>
<TabItem value="detach_network_interface">

Detaches a network interface from an instance.

```sql
UPDATE aws.ec2.network_interfaces
SET 
-- No updatable properties
WHERE 
AttachmentId = '{{ AttachmentId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Force = {{ Force}};
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_network_interface"
    values={[
        { label: 'delete_network_interface', value: 'delete_network_interface' }
    ]}
>
<TabItem value="delete_network_interface">

Deletes the specified network interface. You must detach the network interface before you can delete it.

```sql
DELETE FROM aws.ec2.network_interfaces
WHERE NetworkInterfaceId = '{{ NetworkInterfaceId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_network_interface_attribute"
    values={[
        { label: 'reset_network_interface_attribute', value: 'reset_network_interface_attribute' }
    ]}
>
<TabItem value="reset_network_interface_attribute">

Resets a network interface attribute. You can specify only one attribute at a time.

```sql
EXEC aws.ec2.network_interfaces.reset_network_interface_attribute 
@NetworkInterfaceId='{{ NetworkInterfaceId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@SourceDestCheck='{{ SourceDestCheck }}'
;
```
</TabItem>
</Tabs>
