--- 
title: nat_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - nat_gateways
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

Creates, updates, deletes, gets or lists a <code>nat_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="nat_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.nat_gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_nat_gateways"
    values={[
        { label: 'describe_nat_gateways', value: 'describe_nat_gateways' }
    ]}
>
<TabItem value="describe_nat_gateways">

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
    <td><CopyableCode code="attached_appliances" /></td>
    <td><code>string</code></td>
    <td>The proxy appliances attached to the NAT Gateway for filtering and inspecting traffic to prevent data exfiltration.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_provision_zones" /></td>
    <td><code>string</code></td>
    <td>For regional NAT gateways only: Indicates whether Amazon Web Services automatically manages AZ coverage. When enabled, the NAT gateway associates EIPs in all AZs where your VPC has subnets to handle outbound NAT traffic, expands to new AZs when you create subnets there, and retracts from AZs where you've removed all subnets. When disabled, you must manually manage which AZs the NAT gateway supports and their corresponding EIPs. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region. For more information, see Regional NAT gateways for automatic multi-AZ expansion in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_scaling_ips" /></td>
    <td><code>string</code></td>
    <td>For regional NAT gateways only: Indicates whether Amazon Web Services automatically allocates additional Elastic IP addresses (EIPs) in an AZ when the NAT gateway needs more ports due to increased concurrent connections to a single destination from that AZ. For more information, see Regional NAT gateways for automatic multi-AZ expansion in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_mode" /></td>
    <td><code>string</code></td>
    <td>Indicates whether this is a zonal (single-AZ) or regional (multi-AZ) NAT gateway. A zonal NAT gateway is a NAT Gateway that provides redundancy and scalability within a single availability zone. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region. For more information, see Regional NAT gateways for automatic multi-AZ expansion in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="connectivity_type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the NAT gateway supports public or private connectivity.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the NAT gateway was created.</td>
</tr>
<tr>
    <td><CopyableCode code="delete_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the NAT gateway was deleted, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_code" /></td>
    <td><code>string</code></td>
    <td>If the NAT gateway could not be created, specifies the error code for the failure. (InsufficientFreeAddressesInSubnet | Gateway.NotAttached | InvalidAllocationID.NotFound | Resource.AlreadyAssociated | InternalError | InvalidSubnetID.NotFound)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>If the NAT gateway could not be created, specifies the error message for the failure, that corresponds to the error code. For InsufficientFreeAddressesInSubnet: "Subnet has insufficient free addresses to create this NAT gateway" For Gateway.NotAttached: "Network vpc-xxxxxxxx has no Internet gateway attached" For InvalidAllocationID.NotFound: "Elastic IP address eipalloc-xxxxxxxx could not be associated with this NAT gateway" For Resource.AlreadyAssociated: "Elastic IP address eipalloc-xxxxxxxx is already associated" For InternalError: "Network interface eni-xxxxxxxx, created and used internally by this NAT gateway is in an invalid state. Please try again." For InvalidSubnetID.NotFound: "The specified subnet subnet-xxxxxxxx does not exist or could not be found."</td>
</tr>
<tr>
    <td><CopyableCode code="nat_gateway_addresses" /></td>
    <td><code>string</code></td>
    <td>Information about the IP addresses and network interface associated with the NAT gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="nat_gateway_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the NAT gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_bandwidth" /></td>
    <td><code>string</code></td>
    <td>Reserved. If you need to sustain traffic greater than the documented limits, contact Amazon Web Services Support.</td>
</tr>
<tr>
    <td><CopyableCode code="route_table_id" /></td>
    <td><code>string</code></td>
    <td>For regional NAT gateways only, this is the ID of the NAT gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the NAT gateway. pending: The NAT gateway is being created and is not ready to process traffic. failed: The NAT gateway could not be created. Check the failureCode and failureMessage fields for the reason. available: The NAT gateway is able to process traffic. This status remains until you delete the NAT gateway, and does not indicate the health of the NAT gateway. deleting: The NAT gateway is in the process of being terminated and may still be processing traffic. deleted: The NAT gateway has been terminated and is no longer processing traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet in which the NAT gateway is located.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the NAT gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC in which the NAT gateway is located.</td>
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
    <td><a href="#describe_nat_gateways"><CopyableCode code="describe_nat_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NatGatewayId"><code>NatGatewayId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes your NAT gateways. The default is to describe all your NAT gateways. Alternatively, you can specify specific NAT gateway IDs or filter the results to include only the NAT gateways that match specific criteria.</td>
</tr>
<tr>
    <td><a href="#create_nat_gateway"><CopyableCode code="create_nat_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityMode"><code>AvailabilityMode</code></a>, <a href="#parameter-AllocationId"><code>AllocationId</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-SubnetId"><code>SubnetId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-AvailabilityZoneAddress"><code>AvailabilityZoneAddress</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ConnectivityType"><code>ConnectivityType</code></a>, <a href="#parameter-PrivateIpAddress"><code>PrivateIpAddress</code></a>, <a href="#parameter-SecondaryAllocationId"><code>SecondaryAllocationId</code></a>, <a href="#parameter-SecondaryPrivateIpAddress"><code>SecondaryPrivateIpAddress</code></a>, <a href="#parameter-SecondaryPrivateIpAddressCount"><code>SecondaryPrivateIpAddressCount</code></a></td>
    <td>Creates a NAT gateway in the specified subnet. This action creates a network interface in the specified subnet with a private IP address from the IP address range of the subnet. You can create either a public NAT gateway or a private NAT gateway. With a public NAT gateway, internet-bound traffic from a private subnet can be routed to the NAT gateway, so that instances in a private subnet can connect to the internet. With a private NAT gateway, private communication is routed across VPCs and on-premises networks through a transit gateway or virtual private gateway. Common use cases include running large workloads behind a small pool of allowlisted IPv4 addresses, preserving private IPv4 addresses, and communicating between overlapping networks. For more information, see NAT gateways in the Amazon VPC User Guide. When you create a public NAT gateway and assign it an EIP or secondary EIPs, the network border group of the EIPs must match the network border group of the Availability Zone (AZ) that the public NAT gateway is in. If it's not the same, the NAT gateway will fail to launch. You can see the network border group for the subnet's AZ by viewing the details of the subnet. Similarly, you can view the network border group of an EIP by viewing the details of the EIP address. For more information about network border groups and EIPs, see Allocate an Elastic IP address in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#associate_nat_gateway_address"><CopyableCode code="associate_nat_gateway_address" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-NatGatewayId"><code>NatGatewayId</code></a>, <a href="#parameter-AllocationId"><code>AllocationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PrivateIpAddress"><code>PrivateIpAddress</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-AvailabilityZoneId"><code>AvailabilityZoneId</code></a></td>
    <td>Associates Elastic IP addresses (EIPs) and private IPv4 addresses with a public NAT gateway. For more information, see Work with NAT gateways in the Amazon VPC User Guide. By default, you can associate up to 2 Elastic IP addresses per public NAT gateway. You can increase the limit by requesting a quota adjustment. For more information, see Elastic IP address quotas in the Amazon VPC User Guide. When you associate an EIP or secondary EIPs with a public NAT gateway, the network border group of the EIPs must match the network border group of the Availability Zone (AZ) that the public NAT gateway is in. If it's not the same, the EIP will fail to associate. You can see the network border group for the subnet's AZ by viewing the details of the subnet. Similarly, you can view the network border group of an EIP by viewing the details of the EIP address. For more information about network border groups and EIPs, see Allocate an Elastic IP address in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#disassociate_nat_gateway_address"><CopyableCode code="disassociate_nat_gateway_address" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-NatGatewayId"><code>NatGatewayId</code></a>, <a href="#parameter-AssociationId"><code>AssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxDrainDurationSeconds"><code>MaxDrainDurationSeconds</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disassociates secondary Elastic IP addresses (EIPs) from a public NAT gateway. You cannot disassociate your primary EIP. For more information, see Edit secondary IP address associations in the Amazon VPC User Guide. While disassociating is in progress, you cannot associate/disassociate additional EIPs while the connections are being drained. You are, however, allowed to delete the NAT gateway. An EIP is released only at the end of MaxDrainDurationSeconds. It stays associated and supports the existing connections but does not support any new connections (new connections are distributed across the remaining associated EIPs). As the existing connections drain out, the EIPs (and the corresponding private IP addresses mapped to them) are released.</td>
</tr>
<tr>
    <td><a href="#unassign_private_nat_gateway_address"><CopyableCode code="unassign_private_nat_gateway_address" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-NatGatewayId"><code>NatGatewayId</code></a>, <a href="#parameter-PrivateIpAddress"><code>PrivateIpAddress</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxDrainDurationSeconds"><code>MaxDrainDurationSeconds</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Unassigns secondary private IPv4 addresses from a private NAT gateway. You cannot unassign your primary private IP. For more information, see Edit secondary IP address associations in the Amazon VPC User Guide. While unassigning is in progress, you cannot assign/unassign additional IP addresses while the connections are being drained. You are, however, allowed to delete the NAT gateway. A private IP address will only be released at the end of MaxDrainDurationSeconds. The private IP addresses stay associated and support the existing connections, but do not support any new connections (new connections are distributed across the remaining assigned private IP address). After the existing connections drain out, the private IP addresses are released.</td>
</tr>
<tr>
    <td><a href="#assign_private_nat_gateway_address"><CopyableCode code="assign_private_nat_gateway_address" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-NatGatewayId"><code>NatGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PrivateIpAddress"><code>PrivateIpAddress</code></a>, <a href="#parameter-PrivateIpAddressCount"><code>PrivateIpAddressCount</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Assigns private IPv4 addresses to a private NAT gateway. For more information, see Work with NAT gateways in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_nat_gateway"><CopyableCode code="delete_nat_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-NatGatewayId"><code>NatGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified NAT gateway. Deleting a public NAT gateway disassociates its Elastic IP address, but does not release the address from your account. Deleting a NAT gateway does not delete any NAT gateway routes in your route tables.</td>
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
<tr id="parameter-AllocationId">
    <td><CopyableCode code="AllocationId" /></td>
    <td><code>array</code></td>
    <td>The allocation IDs of EIPs that you want to associate with your NAT gateway.</td>
</tr>
<tr id="parameter-AssociationId">
    <td><CopyableCode code="AssociationId" /></td>
    <td><code>array</code></td>
    <td>The association IDs of EIPs that have been associated with the NAT gateway.</td>
</tr>
<tr id="parameter-NatGatewayId">
    <td><CopyableCode code="NatGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the NAT gateway.</td>
</tr>
<tr id="parameter-PrivateIpAddress">
    <td><CopyableCode code="PrivateIpAddress" /></td>
    <td><code>array</code></td>
    <td>The private IPv4 addresses you want to unassign.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AllocationId">
    <td><CopyableCode code="AllocationId" /></td>
    <td><code>string</code></td>
    <td>&#91;Public NAT gateways only&#93; The allocation ID of an Elastic IP address to associate with the NAT gateway. You cannot specify an Elastic IP address with a private NAT gateway. If the Elastic IP address is associated with another resource, you must first disassociate it.</td>
</tr>
<tr id="parameter-AvailabilityMode">
    <td><CopyableCode code="AvailabilityMode" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to create a zonal (single-AZ) or regional (multi-AZ) NAT gateway. Defaults to zonal. A zonal NAT gateway is a NAT Gateway that provides redundancy and scalability within a single availability zone. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region. For more information, see Regional NAT gateways for automatic multi-AZ expansion in the Amazon VPC User Guide.</td>
</tr>
<tr id="parameter-AvailabilityZone">
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>For regional NAT gateways only: The Availability Zone where you want to associate an Elastic IP address (EIP). The regional NAT gateway uses a separate EIP in each AZ to handle outbound NAT traffic from that AZ. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.</td>
</tr>
<tr id="parameter-AvailabilityZoneAddress">
    <td><CopyableCode code="AvailabilityZoneAddress" /></td>
    <td><code>array</code></td>
    <td>For regional NAT gateways only: Specifies which Availability Zones you want the NAT gateway to support and the Elastic IP addresses (EIPs) to use in each AZ. The regional NAT gateway uses these EIPs to handle outbound NAT traffic from their respective AZs. If not specified, the NAT gateway will automatically expand to new AZs and associate EIPs upon detection of an elastic network interface. If you specify this parameter, auto-expansion is disabled and you must manually manage AZ coverage. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region. For more information, see Regional NAT gateways for automatic multi-AZ expansion in the Amazon VPC User Guide.</td>
</tr>
<tr id="parameter-AvailabilityZoneId">
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>For regional NAT gateways only: The ID of the Availability Zone where you want to associate an Elastic IP address (EIP). The regional NAT gateway uses a separate EIP in each AZ to handle outbound NAT traffic from that AZ. Use this instead of AvailabilityZone for consistent identification of AZs across Amazon Web Services Regions. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency. Constraint: Maximum 64 ASCII characters.</td>
</tr>
<tr id="parameter-ConnectivityType">
    <td><CopyableCode code="ConnectivityType" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. nat-gateway-id - The ID of the NAT gateway. state - The state of the NAT gateway (pending | failed | available | deleting | deleted). subnet-id - The ID of the subnet in which the NAT gateway resides. tag - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. vpc-id - The ID of the VPC in which the NAT gateway resides.</td>
</tr>
<tr id="parameter-MaxDrainDurationSeconds">
    <td><CopyableCode code="MaxDrainDurationSeconds" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. Default value is 350 seconds.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NatGatewayId">
    <td><CopyableCode code="NatGatewayId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the NAT gateways.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-PrivateIpAddress">
    <td><CopyableCode code="PrivateIpAddress" /></td>
    <td><code>array</code></td>
    <td>The private IPv4 addresses you want to assign to the private NAT gateway.</td>
</tr>
<tr id="parameter-PrivateIpAddressCount">
    <td><CopyableCode code="PrivateIpAddressCount" /></td>
    <td><code>integer</code></td>
    <td>The number of private IP addresses to assign to the NAT gateway. You can't specify this parameter when also specifying private IP addresses.</td>
</tr>
<tr id="parameter-SecondaryAllocationId">
    <td><CopyableCode code="SecondaryAllocationId" /></td>
    <td><code>array</code></td>
    <td>Secondary EIP allocation IDs. For more information, see Create a NAT gateway in the Amazon VPC User Guide.</td>
</tr>
<tr id="parameter-SecondaryPrivateIpAddress">
    <td><CopyableCode code="SecondaryPrivateIpAddress" /></td>
    <td><code>array</code></td>
    <td>Secondary private IPv4 addresses. For more information about secondary addresses, see Create a NAT gateway in the Amazon VPC User Guide.</td>
</tr>
<tr id="parameter-SecondaryPrivateIpAddressCount">
    <td><CopyableCode code="SecondaryPrivateIpAddressCount" /></td>
    <td><code>integer</code></td>
    <td>&#91;Private NAT gateway only&#93; The number of secondary private IPv4 addresses you want to assign to the NAT gateway. For more information about secondary addresses, see Create a NAT gateway in the Amazon VPC User Guide.</td>
</tr>
<tr id="parameter-SubnetId">
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet in which to create the NAT gateway.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the NAT gateway.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC where you want to create a regional NAT gateway.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_nat_gateways"
    values={[
        { label: 'describe_nat_gateways', value: 'describe_nat_gateways' }
    ]}
>
<TabItem value="describe_nat_gateways">

Describes your NAT gateways. The default is to describe all your NAT gateways. Alternatively, you can specify specific NAT gateway IDs or filter the results to include only the NAT gateways that match specific criteria.

```sql
SELECT
attached_appliances,
auto_provision_zones,
auto_scaling_ips,
availability_mode,
connectivity_type,
create_time,
delete_time,
failure_code,
failure_message,
nat_gateway_addresses,
nat_gateway_id,
provisioned_bandwidth,
route_table_id,
state,
subnet_id,
tags,
vpc_id
FROM aws.ec2.nat_gateways
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NatGatewayId = '{{ NatGatewayId }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_nat_gateway"
    values={[
        { label: 'create_nat_gateway', value: 'create_nat_gateway' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_nat_gateway">

Creates a NAT gateway in the specified subnet. This action creates a network interface in the specified subnet with a private IP address from the IP address range of the subnet. You can create either a public NAT gateway or a private NAT gateway. With a public NAT gateway, internet-bound traffic from a private subnet can be routed to the NAT gateway, so that instances in a private subnet can connect to the internet. With a private NAT gateway, private communication is routed across VPCs and on-premises networks through a transit gateway or virtual private gateway. Common use cases include running large workloads behind a small pool of allowlisted IPv4 addresses, preserving private IPv4 addresses, and communicating between overlapping networks. For more information, see NAT gateways in the Amazon VPC User Guide. When you create a public NAT gateway and assign it an EIP or secondary EIPs, the network border group of the EIPs must match the network border group of the Availability Zone (AZ) that the public NAT gateway is in. If it's not the same, the NAT gateway will fail to launch. You can see the network border group for the subnet's AZ by viewing the details of the subnet. Similarly, you can view the network border group of an EIP by viewing the details of the EIP address. For more information about network border groups and EIPs, see Allocate an Elastic IP address in the Amazon VPC User Guide.

```sql
INSERT INTO aws.ec2.nat_gateways (
region,
AvailabilityMode,
AllocationId,
ClientToken,
DryRun,
SubnetId,
VpcId,
AvailabilityZoneAddress,
TagSpecification,
ConnectivityType,
PrivateIpAddress,
SecondaryAllocationId,
SecondaryPrivateIpAddress,
SecondaryPrivateIpAddressCount
)
SELECT 
'{{ region }}',
'{{ AvailabilityMode }}',
'{{ AllocationId }}',
'{{ ClientToken }}',
'{{ DryRun }}',
'{{ SubnetId }}',
'{{ VpcId }}',
'{{ AvailabilityZoneAddress }}',
'{{ TagSpecification }}',
'{{ ConnectivityType }}',
'{{ PrivateIpAddress }}',
'{{ SecondaryAllocationId }}',
'{{ SecondaryPrivateIpAddress }}',
'{{ SecondaryPrivateIpAddressCount }}'
RETURNING
attached_appliances,
auto_provision_zones,
auto_scaling_ips,
availability_mode,
connectivity_type,
create_time,
delete_time,
failure_code,
failure_message,
nat_gateway_addresses,
nat_gateway_id,
provisioned_bandwidth,
route_table_id,
state,
subnet_id,
tags,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: nat_gateways
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the nat_gateways resource.
    - name: AvailabilityMode
      value: "{{ AvailabilityMode }}"
      description: Specifies whether to create a zonal (single-AZ) or regional (multi-AZ) NAT gateway. Defaults to zonal. A zonal NAT gateway is a NAT Gateway that provides redundancy and scalability within a single availability zone. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region. For more information, see Regional NAT gateways for automatic multi-AZ expansion in the Amazon VPC User Guide.
      description: Specifies whether to create a zonal (single-AZ) or regional (multi-AZ) NAT gateway. Defaults to zonal. A zonal NAT gateway is a NAT Gateway that provides redundancy and scalability within a single availability zone. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region. For more information, see Regional NAT gateways for automatic multi-AZ expansion in the Amazon VPC User Guide.
    - name: AllocationId
      value: "{{ AllocationId }}"
      description: [Public NAT gateways only] The allocation ID of an Elastic IP address to associate with the NAT gateway. You cannot specify an Elastic IP address with a private NAT gateway. If the Elastic IP address is associated with another resource, you must first disassociate it.
      description: [Public NAT gateways only] The allocation ID of an Elastic IP address to associate with the NAT gateway. You cannot specify an Elastic IP address with a private NAT gateway. If the Elastic IP address is associated with another resource, you must first disassociate it.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency. Constraint: Maximum 64 ASCII characters.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency. Constraint: Maximum 64 ASCII characters.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: SubnetId
      value: "{{ SubnetId }}"
      description: The ID of the subnet in which to create the NAT gateway.
      description: The ID of the subnet in which to create the NAT gateway.
    - name: VpcId
      value: "{{ VpcId }}"
      description: The ID of the VPC where you want to create a regional NAT gateway.
      description: The ID of the VPC where you want to create a regional NAT gateway.
    - name: AvailabilityZoneAddress
      value: "{{ AvailabilityZoneAddress }}"
      description: For regional NAT gateways only: Specifies which Availability Zones you want the NAT gateway to support and the Elastic IP addresses (EIPs) to use in each AZ. The regional NAT gateway uses these EIPs to handle outbound NAT traffic from their respective AZs. If not specified, the NAT gateway will automatically expand to new AZs and associate EIPs upon detection of an elastic network interface. If you specify this parameter, auto-expansion is disabled and you must manually manage AZ coverage. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region. For more information, see Regional NAT gateways for automatic multi-AZ expansion in the Amazon VPC User Guide.
      description: For regional NAT gateways only: Specifies which Availability Zones you want the NAT gateway to support and the Elastic IP addresses (EIPs) to use in each AZ. The regional NAT gateway uses these EIPs to handle outbound NAT traffic from their respective AZs. If not specified, the NAT gateway will automatically expand to new AZs and associate EIPs upon detection of an elastic network interface. If you specify this parameter, auto-expansion is disabled and you must manually manage AZ coverage. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region. For more information, see Regional NAT gateways for automatic multi-AZ expansion in the Amazon VPC User Guide.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the NAT gateway.
      description: The tags to assign to the NAT gateway.
    - name: ConnectivityType
      value: "{{ ConnectivityType }}"
      description: Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity.
      description: Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity.
    - name: PrivateIpAddress
      value: "{{ PrivateIpAddress }}"
      description: The private IPv4 address to assign to the NAT gateway. If you don't provide an address, a private IPv4 address will be automatically assigned.
      description: The private IPv4 address to assign to the NAT gateway. If you don't provide an address, a private IPv4 address will be automatically assigned.
    - name: SecondaryAllocationId
      value: "{{ SecondaryAllocationId }}"
      description: Secondary EIP allocation IDs. For more information, see Create a NAT gateway in the Amazon VPC User Guide.
      description: Secondary EIP allocation IDs. For more information, see Create a NAT gateway in the Amazon VPC User Guide.
    - name: SecondaryPrivateIpAddress
      value: "{{ SecondaryPrivateIpAddress }}"
      description: Secondary private IPv4 addresses. For more information about secondary addresses, see Create a NAT gateway in the Amazon VPC User Guide.
      description: Secondary private IPv4 addresses. For more information about secondary addresses, see Create a NAT gateway in the Amazon VPC User Guide.
    - name: SecondaryPrivateIpAddressCount
      value: {{ SecondaryPrivateIpAddressCount }}
      description: [Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway. For more information about secondary addresses, see Create a NAT gateway in the Amazon VPC User Guide.
      description: [Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway. For more information about secondary addresses, see Create a NAT gateway in the Amazon VPC User Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_nat_gateway_address"
    values={[
        { label: 'associate_nat_gateway_address', value: 'associate_nat_gateway_address' },
        { label: 'disassociate_nat_gateway_address', value: 'disassociate_nat_gateway_address' },
        { label: 'unassign_private_nat_gateway_address', value: 'unassign_private_nat_gateway_address' },
        { label: 'assign_private_nat_gateway_address', value: 'assign_private_nat_gateway_address' }
    ]}
>
<TabItem value="associate_nat_gateway_address">

Associates Elastic IP addresses (EIPs) and private IPv4 addresses with a public NAT gateway. For more information, see Work with NAT gateways in the Amazon VPC User Guide. By default, you can associate up to 2 Elastic IP addresses per public NAT gateway. You can increase the limit by requesting a quota adjustment. For more information, see Elastic IP address quotas in the Amazon VPC User Guide. When you associate an EIP or secondary EIPs with a public NAT gateway, the network border group of the EIPs must match the network border group of the Availability Zone (AZ) that the public NAT gateway is in. If it's not the same, the EIP will fail to associate. You can see the network border group for the subnet's AZ by viewing the details of the subnet. Similarly, you can view the network border group of an EIP by viewing the details of the EIP address. For more information about network border groups and EIPs, see Allocate an Elastic IP address in the Amazon VPC User Guide.

```sql
UPDATE aws.ec2.nat_gateways
SET 
-- No updatable properties
WHERE 
NatGatewayId = '{{ NatGatewayId }}' --required
AND AllocationId = '{{ AllocationId }}' --required
AND region = '{{ region }}' --required
AND PrivateIpAddress = '{{ PrivateIpAddress}}'
AND DryRun = {{ DryRun}}
AND AvailabilityZone = '{{ AvailabilityZone}}'
AND AvailabilityZoneId = '{{ AvailabilityZoneId}}'
RETURNING
nat_gateway_addresses,
nat_gateway_id;
```
</TabItem>
<TabItem value="disassociate_nat_gateway_address">

Disassociates secondary Elastic IP addresses (EIPs) from a public NAT gateway. You cannot disassociate your primary EIP. For more information, see Edit secondary IP address associations in the Amazon VPC User Guide. While disassociating is in progress, you cannot associate/disassociate additional EIPs while the connections are being drained. You are, however, allowed to delete the NAT gateway. An EIP is released only at the end of MaxDrainDurationSeconds. It stays associated and supports the existing connections but does not support any new connections (new connections are distributed across the remaining associated EIPs). As the existing connections drain out, the EIPs (and the corresponding private IP addresses mapped to them) are released.

```sql
UPDATE aws.ec2.nat_gateways
SET 
-- No updatable properties
WHERE 
NatGatewayId = '{{ NatGatewayId }}' --required
AND AssociationId = '{{ AssociationId }}' --required
AND region = '{{ region }}' --required
AND MaxDrainDurationSeconds = '{{ MaxDrainDurationSeconds}}'
AND DryRun = {{ DryRun}}
RETURNING
nat_gateway_addresses,
nat_gateway_id;
```
</TabItem>
<TabItem value="unassign_private_nat_gateway_address">

Unassigns secondary private IPv4 addresses from a private NAT gateway. You cannot unassign your primary private IP. For more information, see Edit secondary IP address associations in the Amazon VPC User Guide. While unassigning is in progress, you cannot assign/unassign additional IP addresses while the connections are being drained. You are, however, allowed to delete the NAT gateway. A private IP address will only be released at the end of MaxDrainDurationSeconds. The private IP addresses stay associated and support the existing connections, but do not support any new connections (new connections are distributed across the remaining assigned private IP address). After the existing connections drain out, the private IP addresses are released.

```sql
UPDATE aws.ec2.nat_gateways
SET 
-- No updatable properties
WHERE 
NatGatewayId = '{{ NatGatewayId }}' --required
AND PrivateIpAddress = '{{ PrivateIpAddress }}' --required
AND region = '{{ region }}' --required
AND MaxDrainDurationSeconds = '{{ MaxDrainDurationSeconds}}'
AND DryRun = {{ DryRun}}
RETURNING
nat_gateway_addresses,
nat_gateway_id;
```
</TabItem>
<TabItem value="assign_private_nat_gateway_address">

Assigns private IPv4 addresses to a private NAT gateway. For more information, see Work with NAT gateways in the Amazon VPC User Guide.

```sql
UPDATE aws.ec2.nat_gateways
SET 
-- No updatable properties
WHERE 
NatGatewayId = '{{ NatGatewayId }}' --required
AND region = '{{ region }}' --required
AND PrivateIpAddress = '{{ PrivateIpAddress}}'
AND PrivateIpAddressCount = '{{ PrivateIpAddressCount}}'
AND DryRun = {{ DryRun}}
RETURNING
nat_gateway_addresses,
nat_gateway_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_nat_gateway"
    values={[
        { label: 'delete_nat_gateway', value: 'delete_nat_gateway' }
    ]}
>
<TabItem value="delete_nat_gateway">

Deletes the specified NAT gateway. Deleting a public NAT gateway disassociates its Elastic IP address, but does not release the address from your account. Deleting a NAT gateway does not delete any NAT gateway routes in your route tables.

```sql
DELETE FROM aws.ec2.nat_gateways
WHERE NatGatewayId = '{{ NatGatewayId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
