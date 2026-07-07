--- 
title: vpcs
hide_title: false
hide_table_of_contents: false
keywords:
  - vpcs
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

Creates, updates, deletes, gets or lists a <code>vpcs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpcs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpcs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpcs"
    values={[
        { label: 'describe_vpcs', value: 'describe_vpcs' }
    ]}
>
<TabItem value="describe_vpcs">

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
    <td><CopyableCode code="BlockPublicAccessStates" /></td>
    <td><code>string</code></td>
    <td>The state of VPC Block Public Access (BPA).</td>
</tr>
<tr>
    <td><CopyableCode code="CidrBlock" /></td>
    <td><code>string</code></td>
    <td>The primary IPv4 CIDR block for the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="CidrBlockAssociationSet" /></td>
    <td><code>string</code></td>
    <td>Information about the IPv4 CIDR blocks associated with the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="DhcpOptionsId" /></td>
    <td><code>string</code></td>
    <td>The ID of the set of DHCP options you've associated with the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionControl" /></td>
    <td><code>string</code></td>
    <td>Describes the configuration and state of VPC encryption controls. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceTenancy" /></td>
    <td><code>string</code></td>
    <td>The allowed tenancy of instances launched into the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="Ipv6CidrBlockAssociationSet" /></td>
    <td><code>string</code></td>
    <td>Information about the IPv6 CIDR blocks associated with the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="IsDefault" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the VPC is the default VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
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
    <td><a href="#describe_vpcs"><CopyableCode code="describe_vpcs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes your VPCs. The default is to describe all your VPCs. Alternatively, you can specify specific VPC IDs or filter the results to include only the VPCs that match specific criteria.</td>
</tr>
<tr>
    <td><a href="#create_vpc"><CopyableCode code="create_vpc" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CidrBlock"><code>CidrBlock</code></a>, <a href="#parameter-Ipv6Pool"><code>Ipv6Pool</code></a>, <a href="#parameter-Ipv6CidrBlock"><code>Ipv6CidrBlock</code></a>, <a href="#parameter-Ipv4IpamPoolId"><code>Ipv4IpamPoolId</code></a>, <a href="#parameter-Ipv4NetmaskLength"><code>Ipv4NetmaskLength</code></a>, <a href="#parameter-Ipv6IpamPoolId"><code>Ipv6IpamPoolId</code></a>, <a href="#parameter-Ipv6NetmaskLength"><code>Ipv6NetmaskLength</code></a>, <a href="#parameter-Ipv6CidrBlockNetworkBorderGroup"><code>Ipv6CidrBlockNetworkBorderGroup</code></a>, <a href="#parameter-VpcEncryptionControl"><code>VpcEncryptionControl</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-InstanceTenancy"><code>InstanceTenancy</code></a>, <a href="#parameter-AmazonProvidedIpv6CidrBlock"><code>AmazonProvidedIpv6CidrBlock</code></a></td>
    <td>Creates a VPC with the specified CIDR blocks. A VPC must have an associated IPv4 CIDR block. You can choose an IPv4 CIDR block or an IPAM-allocated IPv4 CIDR block. You can optionally associate an IPv6 CIDR block with a VPC. You can choose an IPv6 CIDR block, an Amazon-provided IPv6 CIDR block, an IPAM-allocated IPv6 CIDR block, or an IPv6 CIDR block that you brought to Amazon Web Services. For more information, see IP addressing for your VPCs and subnets in the Amazon VPC User Guide. By default, each instance that you launch in the VPC has the default DHCP options, which include only a default DNS server that we provide (AmazonProvidedDNS). For more information, see DHCP option sets in the Amazon VPC User Guide. You can specify DNS options and tenancy for a VPC when you create it. You can't change the tenancy of a VPC after you create it. For more information, see VPC configuration options in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#attach_classic_link_vpc"><CopyableCode code="attach_classic_link_vpc" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-SecurityGroupId"><code>SecurityGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>This action is deprecated. Links an EC2-Classic instance to a ClassicLink-enabled VPC through one or more of the VPC security groups. You cannot link an EC2-Classic instance to more than one VPC at a time. You can only link an instance that's in the running state. An instance is automatically unlinked from a VPC when it's stopped - you can link it to the VPC again when you restart it. After you've linked an instance, you cannot change the VPC security groups that are associated with it. To change the security groups, you must first unlink the instance, and then link it again. Linking your instance to a VPC is sometimes referred to as attaching your instance.</td>
</tr>
<tr>
    <td><a href="#associate_security_group_vpc"><CopyableCode code="associate_security_group_vpc" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Associates a security group with another VPC in the same Region. This enables you to use the same security group with network interfaces and instances in the specified VPC. The VPC you want to associate the security group with must be in the same Region. You can associate the security group with another VPC if your account owns the VPC or if the VPC was shared with you. You must own the security group. You cannot use this feature with default security groups. You cannot use this feature with the default VPC.</td>
</tr>
<tr>
    <td><a href="#modify_vpc_tenancy"><CopyableCode code="modify_vpc_tenancy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-InstanceTenancy"><code>InstanceTenancy</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the instance tenancy attribute of the specified VPC. You can change the instance tenancy attribute of a VPC to default only. You cannot change the instance tenancy attribute to dedicated. After you modify the tenancy of the VPC, any new instances that you launch into the VPC have a tenancy of default, unless you specify otherwise during launch. The tenancy of any existing instances in the VPC is not affected. For more information, see Dedicated Instances in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#associate_vpc_cidr_block"><CopyableCode code="associate_vpc_cidr_block" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CidrBlock"><code>CidrBlock</code></a>, <a href="#parameter-Ipv6CidrBlockNetworkBorderGroup"><code>Ipv6CidrBlockNetworkBorderGroup</code></a>, <a href="#parameter-Ipv6Pool"><code>Ipv6Pool</code></a>, <a href="#parameter-Ipv6CidrBlock"><code>Ipv6CidrBlock</code></a>, <a href="#parameter-Ipv4IpamPoolId"><code>Ipv4IpamPoolId</code></a>, <a href="#parameter-Ipv4NetmaskLength"><code>Ipv4NetmaskLength</code></a>, <a href="#parameter-Ipv6IpamPoolId"><code>Ipv6IpamPoolId</code></a>, <a href="#parameter-Ipv6NetmaskLength"><code>Ipv6NetmaskLength</code></a>, <a href="#parameter-AmazonProvidedIpv6CidrBlock"><code>AmazonProvidedIpv6CidrBlock</code></a></td>
    <td>Associates a CIDR block with your VPC. You can associate a secondary IPv4 CIDR block, an Amazon-provided IPv6 CIDR block, or an IPv6 CIDR block from an IPv6 address pool that you provisioned through bring your own IP addresses (BYOIP). You must specify one of the following in the request: an IPv4 CIDR block, an IPv6 pool, or an Amazon-provided IPv6 CIDR block. For more information about associating CIDR blocks with your VPC and applicable restrictions, see IP addressing for your VPCs and subnets in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#disassociate_vpc_cidr_block"><CopyableCode code="disassociate_vpc_cidr_block" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AssociationId"><code>AssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a CIDR block from a VPC. To disassociate the CIDR block, you must specify its association ID. You can get the association ID by using DescribeVpcs. You must detach or delete all gateways and resources that are associated with the CIDR block before you can disassociate it. You cannot disassociate the CIDR block with which you originally created the VPC (the primary CIDR block).</td>
</tr>
<tr>
    <td><a href="#delete_vpc"><CopyableCode code="delete_vpc" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified VPC. You must detach or delete all gateways and resources that are associated with the VPC before you can delete it. For example, you must terminate all instances running in the VPC, delete all security groups associated with the VPC (except the default one), delete all route tables associated with the VPC (except the default one), and so on. When you delete the VPC, it deletes the default security group, network ACL, and route table for the VPC. If you created a flow log for the VPC that you are deleting, note that flow logs for deleted VPCs are eventually automatically removed.</td>
</tr>
<tr>
    <td><a href="#accept_vpc_peering_connection"><CopyableCode code="accept_vpc_peering_connection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-VpcPeeringConnectionId"><code>VpcPeeringConnectionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Accept a VPC peering connection request. To accept a request, the VPC peering connection must be in the pending-acceptance state, and you must be the owner of the peer VPC. Use DescribeVpcPeeringConnections to view your outstanding VPC peering connection requests. For an inter-Region VPC peering connection request, you must accept the VPC peering connection in the Region of the accepter VPC.</td>
</tr>
<tr>
    <td><a href="#create_default_vpc"><CopyableCode code="create_default_vpc" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a default VPC with a size /16 IPv4 CIDR block and a default subnet in each Availability Zone. For more information about the components of a default VPC, see Default VPCs in the Amazon VPC User Guide. You cannot specify the components of the default VPC yourself. If you deleted your previous default VPC, you can create a default VPC. You cannot have more than one default VPC per Region.</td>
</tr>
<tr>
    <td><a href="#detach_classic_link_vpc"><CopyableCode code="detach_classic_link_vpc" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>This action is deprecated. Unlinks (detaches) a linked EC2-Classic instance from a VPC. After the instance has been unlinked, the VPC security groups are no longer associated with it. An instance is automatically unlinked from a VPC when it's stopped.</td>
</tr>
<tr>
    <td><a href="#disable_vpc_classic_link"><CopyableCode code="disable_vpc_classic_link" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>This action is deprecated. Disables ClassicLink for a VPC. You cannot disable ClassicLink for a VPC that has EC2-Classic instances linked to it.</td>
</tr>
<tr>
    <td><a href="#disassociate_security_group_vpc"><CopyableCode code="disassociate_security_group_vpc" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disassociates a security group from a VPC. You cannot disassociate the security group if any Elastic network interfaces in the associated VPC are still associated with the security group. Note that the disassociation is asynchronous and you can check the status of the request with DescribeSecurityGroupVpcAssociations.</td>
</tr>
<tr>
    <td><a href="#enable_vpc_classic_link"><CopyableCode code="enable_vpc_classic_link" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>This action is deprecated. Enables a VPC for ClassicLink. You can then link EC2-Classic instances to your ClassicLink-enabled VPC to allow communication over private IP addresses. You cannot enable your VPC for ClassicLink if any of your VPC route tables have existing routes for address ranges within the 10.0.0.0/8 IP address range, excluding local routes for VPCs in the 10.0.0.0/16 and 10.1.0.0/16 IP address ranges.</td>
</tr>
<tr>
    <td><a href="#reject_vpc_peering_connection"><CopyableCode code="reject_vpc_peering_connection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-VpcPeeringConnectionId"><code>VpcPeeringConnectionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Rejects a VPC peering connection request. The VPC peering connection must be in the pending-acceptance state. Use the DescribeVpcPeeringConnections request to view your outstanding VPC peering connection requests. To delete an active VPC peering connection, or to delete a VPC peering connection request that you initiated, use DeleteVpcPeeringConnection.</td>
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
<tr id="parameter-GroupId">
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>A security group ID.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance to unlink from the VPC.</td>
</tr>
<tr id="parameter-InstanceTenancy">
    <td><CopyableCode code="InstanceTenancy" /></td>
    <td><code>string</code></td>
    <td>The instance tenancy attribute for the VPC.</td>
</tr>
<tr id="parameter-SecurityGroupId">
    <td><CopyableCode code="SecurityGroupId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the security groups. You cannot specify security groups from a different VPC.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
</tr>
<tr id="parameter-VpcPeeringConnectionId">
    <td><CopyableCode code="VpcPeeringConnectionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC peering connection.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AmazonProvidedIpv6CidrBlock">
    <td><CopyableCode code="AmazonProvidedIpv6CidrBlock" /></td>
    <td><code>boolean</code></td>
    <td>Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IPv6 addresses or the size of the CIDR block.</td>
</tr>
<tr id="parameter-CidrBlock">
    <td><CopyableCode code="CidrBlock" /></td>
    <td><code>string</code></td>
    <td>An IPv4 CIDR block to associate with the VPC.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. cidr - The primary IPv4 CIDR block of the VPC. The CIDR block you specify must exactly match the VPC's CIDR block for information to be returned for the VPC. Must contain the slash followed by one or two digits (for example, /28). cidr-block-association.cidr-block - An IPv4 CIDR block associated with the VPC. cidr-block-association.association-id - The association ID for an IPv4 CIDR block associated with the VPC. cidr-block-association.state - The state of an IPv4 CIDR block associated with the VPC. dhcp-options-id - The ID of a set of DHCP options. ipv6-cidr-block-association.ipv6-cidr-block - An IPv6 CIDR block associated with the VPC. ipv6-cidr-block-association.ipv6-pool - The ID of the IPv6 address pool from which the IPv6 CIDR block is allocated. ipv6-cidr-block-association.association-id - The association ID for an IPv6 CIDR block associated with the VPC. ipv6-cidr-block-association.state - The state of an IPv6 CIDR block associated with the VPC. is-default - Indicates whether the VPC is the default VPC. owner-id - The ID of the Amazon Web Services account that owns the VPC. state - The state of the VPC (pending | available). tag - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. vpc-id - The ID of the VPC.</td>
</tr>
<tr id="parameter-InstanceTenancy">
    <td><CopyableCode code="InstanceTenancy" /></td>
    <td><code>string</code></td>
    <td>The tenancy options for instances launched into the VPC. For default, instances are launched with shared tenancy by default. You can launch instances with any tenancy into a shared tenancy VPC. For dedicated, instances are launched as dedicated tenancy instances by default. You can only launch instances with a tenancy of dedicated or host into a dedicated tenancy VPC. Important: The host value cannot be used with this parameter. Use the default or dedicated values only. Default: default</td>
</tr>
<tr id="parameter-Ipv4IpamPoolId">
    <td><CopyableCode code="Ipv4IpamPoolId" /></td>
    <td><code>string</code></td>
    <td>Associate a CIDR allocated from an IPv4 IPAM pool to a VPC. For more information about Amazon VPC IP Address Manager (IPAM), see What is IPAM? in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr id="parameter-Ipv4NetmaskLength">
    <td><CopyableCode code="Ipv4NetmaskLength" /></td>
    <td><code>integer</code></td>
    <td>The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see What is IPAM? in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr id="parameter-Ipv6CidrBlock">
    <td><CopyableCode code="Ipv6CidrBlock" /></td>
    <td><code>string</code></td>
    <td>An IPv6 CIDR block from the IPv6 address pool. You must also specify Ipv6Pool in the request. To let Amazon choose the IPv6 CIDR block for you, omit this parameter.</td>
</tr>
<tr id="parameter-Ipv6CidrBlockNetworkBorderGroup">
    <td><CopyableCode code="Ipv6CidrBlockNetworkBorderGroup" /></td>
    <td><code>string</code></td>
    <td>The name of the location from which we advertise the IPV6 CIDR block. Use this parameter to limit the CIDR block to this location. You must set AmazonProvidedIpv6CidrBlock to true to use this parameter. You can have one IPv6 CIDR block association per network border group.</td>
</tr>
<tr id="parameter-Ipv6IpamPoolId">
    <td><CopyableCode code="Ipv6IpamPoolId" /></td>
    <td><code>string</code></td>
    <td>Associates a CIDR allocated from an IPv6 IPAM pool to a VPC. For more information about Amazon VPC IP Address Manager (IPAM), see What is IPAM? in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr id="parameter-Ipv6NetmaskLength">
    <td><CopyableCode code="Ipv6NetmaskLength" /></td>
    <td><code>integer</code></td>
    <td>The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see What is IPAM? in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr id="parameter-Ipv6Pool">
    <td><CopyableCode code="Ipv6Pool" /></td>
    <td><code>string</code></td>
    <td>The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.</td>
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
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the VPC.</td>
</tr>
<tr id="parameter-VpcEncryptionControl">
    <td><CopyableCode code="VpcEncryptionControl" /></td>
    <td><code>object</code></td>
    <td>Specifies the encryption control configuration to apply to the VPC during creation. VPC Encryption Control enables you to enforce encryption for all data in transit within and between VPCs to meet compliance requirements. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the VPCs.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpcs"
    values={[
        { label: 'describe_vpcs', value: 'describe_vpcs' }
    ]}
>
<TabItem value="describe_vpcs">

Describes your VPCs. The default is to describe all your VPCs. Alternatively, you can specify specific VPC IDs or filter the results to include only the VPCs that match specific criteria.

```sql
SELECT
BlockPublicAccessStates,
CidrBlock,
CidrBlockAssociationSet,
DhcpOptionsId,
EncryptionControl,
InstanceTenancy,
Ipv6CidrBlockAssociationSet,
IsDefault,
OwnerId,
State,
Tags,
VpcId
FROM aws.ec2.vpcs
WHERE region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND VpcId = '{{ VpcId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc"
    values={[
        { label: 'create_vpc', value: 'create_vpc' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc">

Creates a VPC with the specified CIDR blocks. A VPC must have an associated IPv4 CIDR block. You can choose an IPv4 CIDR block or an IPAM-allocated IPv4 CIDR block. You can optionally associate an IPv6 CIDR block with a VPC. You can choose an IPv6 CIDR block, an Amazon-provided IPv6 CIDR block, an IPAM-allocated IPv6 CIDR block, or an IPv6 CIDR block that you brought to Amazon Web Services. For more information, see IP addressing for your VPCs and subnets in the Amazon VPC User Guide. By default, each instance that you launch in the VPC has the default DHCP options, which include only a default DNS server that we provide (AmazonProvidedDNS). For more information, see DHCP option sets in the Amazon VPC User Guide. You can specify DNS options and tenancy for a VPC when you create it. You can't change the tenancy of a VPC after you create it. For more information, see VPC configuration options in the Amazon VPC User Guide.

```sql
INSERT INTO aws.ec2.vpcs (
region,
CidrBlock,
Ipv6Pool,
Ipv6CidrBlock,
Ipv4IpamPoolId,
Ipv4NetmaskLength,
Ipv6IpamPoolId,
Ipv6NetmaskLength,
Ipv6CidrBlockNetworkBorderGroup,
VpcEncryptionControl,
TagSpecification,
DryRun,
InstanceTenancy,
AmazonProvidedIpv6CidrBlock
)
SELECT 
'{{ region }}',
'{{ CidrBlock }}',
'{{ Ipv6Pool }}',
'{{ Ipv6CidrBlock }}',
'{{ Ipv4IpamPoolId }}',
'{{ Ipv4NetmaskLength }}',
'{{ Ipv6IpamPoolId }}',
'{{ Ipv6NetmaskLength }}',
'{{ Ipv6CidrBlockNetworkBorderGroup }}',
'{{ VpcEncryptionControl }}',
'{{ TagSpecification }}',
'{{ DryRun }}',
'{{ InstanceTenancy }}',
'{{ AmazonProvidedIpv6CidrBlock }}'
RETURNING
BlockPublicAccessStates,
CidrBlock,
CidrBlockAssociationSet,
DhcpOptionsId,
EncryptionControl,
InstanceTenancy,
Ipv6CidrBlockAssociationSet,
IsDefault,
OwnerId,
State,
Tags,
VpcId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpcs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpcs resource.
    - name: CidrBlock
      value: "{{ CidrBlock }}"
      description: The IPv4 network range for the VPC, in CIDR notation. For example, 10.0.0.0/16. We modify the specified CIDR block to its canonical form; for example, if you specify 100.68.0.18/18, we modify it to 100.68.0.0/18.
      description: The IPv4 network range for the VPC, in CIDR notation. For example, 10.0.0.0/16. We modify the specified CIDR block to its canonical form; for example, if you specify 100.68.0.18/18, we modify it to 100.68.0.0/18.
    - name: Ipv6Pool
      value: "{{ Ipv6Pool }}"
      description: The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.
      description: The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.
    - name: Ipv6CidrBlock
      value: "{{ Ipv6CidrBlock }}"
      description: The IPv6 CIDR block from the IPv6 address pool. You must also specify Ipv6Pool in the request. To let Amazon choose the IPv6 CIDR block for you, omit this parameter.
      description: The IPv6 CIDR block from the IPv6 address pool. You must also specify Ipv6Pool in the request. To let Amazon choose the IPv6 CIDR block for you, omit this parameter.
    - name: Ipv4IpamPoolId
      value: "{{ Ipv4IpamPoolId }}"
      description: The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. For more information, see What is IPAM? in the Amazon VPC IPAM User Guide.
      description: The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. For more information, see What is IPAM? in the Amazon VPC IPAM User Guide.
    - name: Ipv4NetmaskLength
      value: {{ Ipv4NetmaskLength }}
      description: The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see What is IPAM? in the Amazon VPC IPAM User Guide.
      description: The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see What is IPAM? in the Amazon VPC IPAM User Guide.
    - name: Ipv6IpamPoolId
      value: "{{ Ipv6IpamPoolId }}"
      description: The ID of an IPv6 IPAM pool which will be used to allocate this VPC an IPv6 CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see What is IPAM? in the Amazon VPC IPAM User Guide.
      description: The ID of an IPv6 IPAM pool which will be used to allocate this VPC an IPv6 CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see What is IPAM? in the Amazon VPC IPAM User Guide.
    - name: Ipv6NetmaskLength
      value: {{ Ipv6NetmaskLength }}
      description: The netmask length of the IPv6 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see What is IPAM? in the Amazon VPC IPAM User Guide.
      description: The netmask length of the IPv6 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see What is IPAM? in the Amazon VPC IPAM User Guide.
    - name: Ipv6CidrBlockNetworkBorderGroup
      value: "{{ Ipv6CidrBlockNetworkBorderGroup }}"
      description: The name of the location from which we advertise the IPV6 CIDR block. Use this parameter to limit the address to this location. You must set AmazonProvidedIpv6CidrBlock to true to use this parameter.
      description: The name of the location from which we advertise the IPV6 CIDR block. Use this parameter to limit the address to this location. You must set AmazonProvidedIpv6CidrBlock to true to use this parameter.
    - name: VpcEncryptionControl
      value: "{{ VpcEncryptionControl }}"
      description: Specifies the encryption control configuration to apply to the VPC during creation. VPC Encryption Control enables you to enforce encryption for all data in transit within and between VPCs to meet compliance requirements. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.
      description: Specifies the encryption control configuration to apply to the VPC during creation. VPC Encryption Control enables you to enforce encryption for all data in transit within and between VPCs to meet compliance requirements. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the VPC.
      description: The tags to assign to the VPC.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: InstanceTenancy
      value: "{{ InstanceTenancy }}"
      description: The tenancy options for instances launched into the VPC. For default, instances are launched with shared tenancy by default. You can launch instances with any tenancy into a shared tenancy VPC. For dedicated, instances are launched as dedicated tenancy instances by default. You can only launch instances with a tenancy of dedicated or host into a dedicated tenancy VPC. Important: The host value cannot be used with this parameter. Use the default or dedicated values only. Default: default
      description: The tenancy options for instances launched into the VPC. For default, instances are launched with shared tenancy by default. You can launch instances with any tenancy into a shared tenancy VPC. For dedicated, instances are launched as dedicated tenancy instances by default. You can only launch instances with a tenancy of dedicated or host into a dedicated tenancy VPC. Important: The host value cannot be used with this parameter. Use the default or dedicated values only. Default: default
    - name: AmazonProvidedIpv6CidrBlock
      value: {{ AmazonProvidedIpv6CidrBlock }}
      description: Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IP addresses, or the size of the CIDR block.
      description: Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IP addresses, or the size of the CIDR block.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_classic_link_vpc"
    values={[
        { label: 'attach_classic_link_vpc', value: 'attach_classic_link_vpc' },
        { label: 'associate_security_group_vpc', value: 'associate_security_group_vpc' },
        { label: 'modify_vpc_tenancy', value: 'modify_vpc_tenancy' },
        { label: 'associate_vpc_cidr_block', value: 'associate_vpc_cidr_block' },
        { label: 'disassociate_vpc_cidr_block', value: 'disassociate_vpc_cidr_block' }
    ]}
>
<TabItem value="attach_classic_link_vpc">

This action is deprecated. Links an EC2-Classic instance to a ClassicLink-enabled VPC through one or more of the VPC security groups. You cannot link an EC2-Classic instance to more than one VPC at a time. You can only link an instance that's in the running state. An instance is automatically unlinked from a VPC when it's stopped - you can link it to the VPC again when you restart it. After you've linked an instance, you cannot change the VPC security groups that are associated with it. To change the security groups, you must first unlink the instance, and then link it again. Linking your instance to a VPC is sometimes referred to as attaching your instance.

```sql
UPDATE aws.ec2.vpcs
SET 
-- No updatable properties
WHERE 
InstanceId = '{{ InstanceId }}' --required
AND VpcId = '{{ VpcId }}' --required
AND SecurityGroupId = '{{ SecurityGroupId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
Return;
```
</TabItem>
<TabItem value="associate_security_group_vpc">

Associates a security group with another VPC in the same Region. This enables you to use the same security group with network interfaces and instances in the specified VPC. The VPC you want to associate the security group with must be in the same Region. You can associate the security group with another VPC if your account owns the VPC or if the VPC was shared with you. You must own the security group. You cannot use this feature with default security groups. You cannot use this feature with the default VPC.

```sql
UPDATE aws.ec2.vpcs
SET 
-- No updatable properties
WHERE 
GroupId = '{{ GroupId }}' --required
AND VpcId = '{{ VpcId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
State;
```
</TabItem>
<TabItem value="modify_vpc_tenancy">

Modifies the instance tenancy attribute of the specified VPC. You can change the instance tenancy attribute of a VPC to default only. You cannot change the instance tenancy attribute to dedicated. After you modify the tenancy of the VPC, any new instances that you launch into the VPC have a tenancy of default, unless you specify otherwise during launch. The tenancy of any existing instances in the VPC is not affected. For more information, see Dedicated Instances in the Amazon EC2 User Guide.

```sql
UPDATE aws.ec2.vpcs
SET 
-- No updatable properties
WHERE 
VpcId = '{{ VpcId }}' --required
AND InstanceTenancy = '{{ InstanceTenancy }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
ReturnValue;
```
</TabItem>
<TabItem value="associate_vpc_cidr_block">

Associates a CIDR block with your VPC. You can associate a secondary IPv4 CIDR block, an Amazon-provided IPv6 CIDR block, or an IPv6 CIDR block from an IPv6 address pool that you provisioned through bring your own IP addresses (BYOIP). You must specify one of the following in the request: an IPv4 CIDR block, an IPv6 pool, or an Amazon-provided IPv6 CIDR block. For more information about associating CIDR blocks with your VPC and applicable restrictions, see IP addressing for your VPCs and subnets in the Amazon VPC User Guide.

```sql
UPDATE aws.ec2.vpcs
SET 
-- No updatable properties
WHERE 
VpcId = '{{ VpcId }}' --required
AND region = '{{ region }}' --required
AND CidrBlock = '{{ CidrBlock}}'
AND Ipv6CidrBlockNetworkBorderGroup = '{{ Ipv6CidrBlockNetworkBorderGroup}}'
AND Ipv6Pool = '{{ Ipv6Pool}}'
AND Ipv6CidrBlock = '{{ Ipv6CidrBlock}}'
AND Ipv4IpamPoolId = '{{ Ipv4IpamPoolId}}'
AND Ipv4NetmaskLength = '{{ Ipv4NetmaskLength}}'
AND Ipv6IpamPoolId = '{{ Ipv6IpamPoolId}}'
AND Ipv6NetmaskLength = '{{ Ipv6NetmaskLength}}'
AND AmazonProvidedIpv6CidrBlock = {{ AmazonProvidedIpv6CidrBlock}}
RETURNING
CidrBlockAssociation,
Ipv6CidrBlockAssociation,
VpcId;
```
</TabItem>
<TabItem value="disassociate_vpc_cidr_block">

Disassociates a CIDR block from a VPC. To disassociate the CIDR block, you must specify its association ID. You can get the association ID by using DescribeVpcs. You must detach or delete all gateways and resources that are associated with the CIDR block before you can disassociate it. You cannot disassociate the CIDR block with which you originally created the VPC (the primary CIDR block).

```sql
UPDATE aws.ec2.vpcs
SET 
-- No updatable properties
WHERE 
AssociationId = '{{ AssociationId }}' --required
AND region = '{{ region }}' --required
RETURNING
CidrBlockAssociation,
Ipv6CidrBlockAssociation,
VpcId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc"
    values={[
        { label: 'delete_vpc', value: 'delete_vpc' }
    ]}
>
<TabItem value="delete_vpc">

Deletes the specified VPC. You must detach or delete all gateways and resources that are associated with the VPC before you can delete it. For example, you must terminate all instances running in the VPC, delete all security groups associated with the VPC (except the default one), delete all route tables associated with the VPC (except the default one), and so on. When you delete the VPC, it deletes the default security group, network ACL, and route table for the VPC. If you created a flow log for the VPC that you are deleting, note that flow logs for deleted VPCs are eventually automatically removed.

```sql
DELETE FROM aws.ec2.vpcs
WHERE VpcId = '{{ VpcId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_vpc_peering_connection"
    values={[
        { label: 'accept_vpc_peering_connection', value: 'accept_vpc_peering_connection' },
        { label: 'create_default_vpc', value: 'create_default_vpc' },
        { label: 'detach_classic_link_vpc', value: 'detach_classic_link_vpc' },
        { label: 'disable_vpc_classic_link', value: 'disable_vpc_classic_link' },
        { label: 'disassociate_security_group_vpc', value: 'disassociate_security_group_vpc' },
        { label: 'enable_vpc_classic_link', value: 'enable_vpc_classic_link' },
        { label: 'reject_vpc_peering_connection', value: 'reject_vpc_peering_connection' }
    ]}
>
<TabItem value="accept_vpc_peering_connection">

Accept a VPC peering connection request. To accept a request, the VPC peering connection must be in the pending-acceptance state, and you must be the owner of the peer VPC. Use DescribeVpcPeeringConnections to view your outstanding VPC peering connection requests. For an inter-Region VPC peering connection request, you must accept the VPC peering connection in the Region of the accepter VPC.

```sql
EXEC aws.ec2.vpcs.accept_vpc_peering_connection 
@VpcPeeringConnectionId='{{ VpcPeeringConnectionId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="create_default_vpc">

Creates a default VPC with a size /16 IPv4 CIDR block and a default subnet in each Availability Zone. For more information about the components of a default VPC, see Default VPCs in the Amazon VPC User Guide. You cannot specify the components of the default VPC yourself. If you deleted your previous default VPC, you can create a default VPC. You cannot have more than one default VPC per Region.

```sql
EXEC aws.ec2.vpcs.create_default_vpc 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="detach_classic_link_vpc">

This action is deprecated. Unlinks (detaches) a linked EC2-Classic instance from a VPC. After the instance has been unlinked, the VPC security groups are no longer associated with it. An instance is automatically unlinked from a VPC when it's stopped.

```sql
EXEC aws.ec2.vpcs.detach_classic_link_vpc 
@InstanceId='{{ InstanceId }}' --required, 
@VpcId='{{ VpcId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="disable_vpc_classic_link">

This action is deprecated. Disables ClassicLink for a VPC. You cannot disable ClassicLink for a VPC that has EC2-Classic instances linked to it.

```sql
EXEC aws.ec2.vpcs.disable_vpc_classic_link 
@VpcId='{{ VpcId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="disassociate_security_group_vpc">

Disassociates a security group from a VPC. You cannot disassociate the security group if any Elastic network interfaces in the associated VPC are still associated with the security group. Note that the disassociation is asynchronous and you can check the status of the request with DescribeSecurityGroupVpcAssociations.

```sql
EXEC aws.ec2.vpcs.disassociate_security_group_vpc 
@GroupId='{{ GroupId }}' --required, 
@VpcId='{{ VpcId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_vpc_classic_link">

This action is deprecated. Enables a VPC for ClassicLink. You can then link EC2-Classic instances to your ClassicLink-enabled VPC to allow communication over private IP addresses. You cannot enable your VPC for ClassicLink if any of your VPC route tables have existing routes for address ranges within the 10.0.0.0/8 IP address range, excluding local routes for VPCs in the 10.0.0.0/16 and 10.1.0.0/16 IP address ranges.

```sql
EXEC aws.ec2.vpcs.enable_vpc_classic_link 
@VpcId='{{ VpcId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="reject_vpc_peering_connection">

Rejects a VPC peering connection request. The VPC peering connection must be in the pending-acceptance state. Use the DescribeVpcPeeringConnections request to view your outstanding VPC peering connection requests. To delete an active VPC peering connection, or to delete a VPC peering connection request that you initiated, use DeleteVpcPeeringConnection.

```sql
EXEC aws.ec2.vpcs.reject_vpc_peering_connection 
@VpcPeeringConnectionId='{{ VpcPeeringConnectionId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
