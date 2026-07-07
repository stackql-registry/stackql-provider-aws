--- 
title: route_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - route_tables
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

Creates, updates, deletes, gets or lists a <code>route_tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="route_tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.route_tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_route_tables"
    values={[
        { label: 'describe_route_tables', value: 'describe_route_tables' }
    ]}
>
<TabItem value="describe_route_tables">

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
    <td><CopyableCode code="Associations" /></td>
    <td><code>string</code></td>
    <td>The associations between the route table and your subnets or gateways.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the route table.</td>
</tr>
<tr>
    <td><CopyableCode code="PropagatingVgws" /></td>
    <td><code>string</code></td>
    <td>Any virtual private gateway (VGW) propagating routes.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the route table.</td>
</tr>
<tr>
    <td><CopyableCode code="Routes" /></td>
    <td><code>string</code></td>
    <td>The routes in the route table.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the route table.</td>
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
    <td><a href="#describe_route_tables"><CopyableCode code="describe_route_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-RouteTableId"><code>RouteTableId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes your route tables. The default is to describe all your route tables. Alternatively, you can specify specific route table IDs or filter the results to include only the route tables that match specific criteria. Each subnet in your VPC must be associated with a route table. If a subnet is not explicitly associated with any route table, it is implicitly associated with the main route table. This command does not return the subnet ID for implicit associations. For more information, see Route tables in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#create_route"><CopyableCode code="create_route" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-RouteTableId"><code>RouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DestinationPrefixListId"><code>DestinationPrefixListId</code></a>, <a href="#parameter-VpcEndpointId"><code>VpcEndpointId</code></a>, <a href="#parameter-TransitGatewayId"><code>TransitGatewayId</code></a>, <a href="#parameter-LocalGatewayId"><code>LocalGatewayId</code></a>, <a href="#parameter-CarrierGatewayId"><code>CarrierGatewayId</code></a>, <a href="#parameter-CoreNetworkArn"><code>CoreNetworkArn</code></a>, <a href="#parameter-OdbNetworkArn"><code>OdbNetworkArn</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-DestinationCidrBlock"><code>DestinationCidrBlock</code></a>, <a href="#parameter-GatewayId"><code>GatewayId</code></a>, <a href="#parameter-DestinationIpv6CidrBlock"><code>DestinationIpv6CidrBlock</code></a>, <a href="#parameter-EgressOnlyInternetGatewayId"><code>EgressOnlyInternetGatewayId</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-VpcPeeringConnectionId"><code>VpcPeeringConnectionId</code></a>, <a href="#parameter-NatGatewayId"><code>NatGatewayId</code></a></td>
    <td>Creates a route in a route table within a VPC. You must specify either a destination CIDR block or a prefix list ID. You must also specify exactly one of the resources from the parameter list. When determining how to route traffic, we use the route with the most specific match. For example, traffic is destined for the IPv4 address 192.0.2.3, and the route table includes the following two IPv4 routes: 192.0.2.0/24 (goes to some target A) 192.0.2.0/28 (goes to some target B) Both routes apply to the traffic destined for 192.0.2.3. However, the second route in the list covers a smaller number of IP addresses and is therefore more specific, so we use that route to determine where to target the traffic. For more information about route tables, see Route tables in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#create_route_table"><CopyableCode code="create_route_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a route table for the specified VPC. After you create a route table, you can add routes and associate the table with a subnet. For more information, see Route tables in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#associate_route_table"><CopyableCode code="associate_route_table" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-RouteTableId"><code>RouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-GatewayId"><code>GatewayId</code></a>, <a href="#parameter-PublicIpv4Pool"><code>PublicIpv4Pool</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-SubnetId"><code>SubnetId</code></a></td>
    <td>Associates a subnet in your VPC or an internet gateway or virtual private gateway attached to your VPC with a route table in your VPC. This association causes traffic from the subnet or gateway to be routed according to the routes in the route table. The action returns an association ID, which you need in order to disassociate the route table later. A route table can be associated with multiple subnets. For more information, see Route tables in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#disassociate_route_table"><CopyableCode code="disassociate_route_table" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AssociationId"><code>AssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disassociates a subnet or gateway from a route table. After you perform this action, the subnet no longer uses the routes in the route table. Instead, it uses the routes in the VPC's main route table. For more information about route tables, see Route tables in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#replace_route_table_association"><CopyableCode code="replace_route_table_association" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-AssociationId"><code>AssociationId</code></a>, <a href="#parameter-RouteTableId"><code>RouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Changes the route table associated with a given subnet, internet gateway, or virtual private gateway in a VPC. After the operation completes, the subnet or gateway uses the routes in the new route table. For more information about route tables, see Route tables in the Amazon VPC User Guide. You can also use this operation to change which table is the main route table in the VPC. Specify the main route table's association ID and the route table ID of the new main route table.</td>
</tr>
<tr>
    <td><a href="#replace_route"><CopyableCode code="replace_route" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-RouteTableId"><code>RouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DestinationPrefixListId"><code>DestinationPrefixListId</code></a>, <a href="#parameter-VpcEndpointId"><code>VpcEndpointId</code></a>, <a href="#parameter-LocalTarget"><code>LocalTarget</code></a>, <a href="#parameter-TransitGatewayId"><code>TransitGatewayId</code></a>, <a href="#parameter-LocalGatewayId"><code>LocalGatewayId</code></a>, <a href="#parameter-CarrierGatewayId"><code>CarrierGatewayId</code></a>, <a href="#parameter-CoreNetworkArn"><code>CoreNetworkArn</code></a>, <a href="#parameter-OdbNetworkArn"><code>OdbNetworkArn</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-DestinationCidrBlock"><code>DestinationCidrBlock</code></a>, <a href="#parameter-GatewayId"><code>GatewayId</code></a>, <a href="#parameter-DestinationIpv6CidrBlock"><code>DestinationIpv6CidrBlock</code></a>, <a href="#parameter-EgressOnlyInternetGatewayId"><code>EgressOnlyInternetGatewayId</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-VpcPeeringConnectionId"><code>VpcPeeringConnectionId</code></a>, <a href="#parameter-NatGatewayId"><code>NatGatewayId</code></a></td>
    <td>Replaces an existing route within a route table in a VPC. You must specify either a destination CIDR block or a prefix list ID. You must also specify exactly one of the resources from the parameter list, or reset the local route to its default target. For more information, see Route tables in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_route_table"><CopyableCode code="delete_route_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-RouteTableId"><code>RouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified route table. You must disassociate the route table from any subnets before you can delete it. You can't delete the main route table.</td>
</tr>
<tr>
    <td><a href="#delete_route"><CopyableCode code="delete_route" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-RouteTableId"><code>RouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DestinationPrefixListId"><code>DestinationPrefixListId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-DestinationCidrBlock"><code>DestinationCidrBlock</code></a>, <a href="#parameter-DestinationIpv6CidrBlock"><code>DestinationIpv6CidrBlock</code></a></td>
    <td>Deletes the specified route from the specified route table.</td>
</tr>
<tr>
    <td><a href="#disable_vgw_route_propagation"><CopyableCode code="disable_vgw_route_propagation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-GatewayId"><code>GatewayId</code></a>, <a href="#parameter-RouteTableId"><code>RouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disables a virtual private gateway (VGW) from propagating routes to a specified route table of a VPC.</td>
</tr>
<tr>
    <td><a href="#enable_vgw_route_propagation"><CopyableCode code="enable_vgw_route_propagation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-GatewayId"><code>GatewayId</code></a>, <a href="#parameter-RouteTableId"><code>RouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Enables a virtual private gateway (VGW) to propagate routes to the specified route table of a VPC.</td>
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
    <td>The association ID.</td>
</tr>
<tr id="parameter-GatewayId">
    <td><CopyableCode code="GatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual private gateway that is attached to a VPC. The virtual private gateway must be attached to the same VPC that the routing tables are associated with.</td>
</tr>
<tr id="parameter-RouteTableId">
    <td><CopyableCode code="RouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the route table. The routing table must be associated with the same VPC that the virtual private gateway is attached to.</td>
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
<tr id="parameter-CarrierGatewayId">
    <td><CopyableCode code="CarrierGatewayId" /></td>
    <td><code>string</code></td>
    <td>&#91;IPv4 traffic only&#93; The ID of a carrier gateway.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-CoreNetworkArn">
    <td><CopyableCode code="CoreNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the core network.</td>
</tr>
<tr id="parameter-DestinationCidrBlock">
    <td><CopyableCode code="DestinationCidrBlock" /></td>
    <td><code>string</code></td>
    <td>The IPv4 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</td>
</tr>
<tr id="parameter-DestinationIpv6CidrBlock">
    <td><CopyableCode code="DestinationIpv6CidrBlock" /></td>
    <td><code>string</code></td>
    <td>The IPv6 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</td>
</tr>
<tr id="parameter-DestinationPrefixListId">
    <td><CopyableCode code="DestinationPrefixListId" /></td>
    <td><code>string</code></td>
    <td>The ID of the prefix list for the route.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EgressOnlyInternetGatewayId">
    <td><CopyableCode code="EgressOnlyInternetGatewayId" /></td>
    <td><code>string</code></td>
    <td>&#91;IPv6 traffic only&#93; The ID of an egress-only internet gateway.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. association.gateway-id - The ID of the gateway involved in the association. association.route-table-association-id - The ID of an association ID for the route table. association.route-table-id - The ID of the route table involved in the association. association.subnet-id - The ID of the subnet involved in the association. association.main - Indicates whether the route table is the main route table for the VPC (true | false). Route tables that do not have an association ID are not returned in the response. owner-id - The ID of the Amazon Web Services account that owns the route table. route-table-id - The ID of the route table. route.destination-cidr-block - The IPv4 CIDR range specified in a route in the table. route.destination-ipv6-cidr-block - The IPv6 CIDR range specified in a route in the route table. route.destination-prefix-list-id - The ID (prefix) of the Amazon Web Services service specified in a route in the table. route.egress-only-internet-gateway-id - The ID of an egress-only Internet gateway specified in a route in the route table. route.gateway-id - The ID of a gateway specified in a route in the table. route.instance-id - The ID of an instance specified in a route in the table. route.nat-gateway-id - The ID of a NAT gateway. route.transit-gateway-id - The ID of a transit gateway. route.origin - Describes how the route was created. CreateRouteTable indicates that the route was automatically created when the route table was created; CreateRoute indicates that the route was manually added to the route table; EnableVgwRoutePropagation indicates that the route was propagated by route propagation. route.state - The state of a route in the route table (active | blackhole). The blackhole state indicates that the route's target isn't available (for example, the specified gateway isn't attached to the VPC, the specified NAT instance has been terminated, and so on). route.vpc-peering-connection-id - The ID of a VPC peering connection specified in a route in the table. tag - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. vpc-id - The ID of the VPC for the route table.</td>
</tr>
<tr id="parameter-GatewayId">
    <td><CopyableCode code="GatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of an internet gateway or virtual private gateway.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of a NAT instance in your VPC.</td>
</tr>
<tr id="parameter-LocalGatewayId">
    <td><CopyableCode code="LocalGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway.</td>
</tr>
<tr id="parameter-LocalTarget">
    <td><CopyableCode code="LocalTarget" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to reset the local route to its default target (local).</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NatGatewayId">
    <td><CopyableCode code="NatGatewayId" /></td>
    <td><code>string</code></td>
    <td>&#91;IPv4 traffic only&#93; The ID of a NAT gateway.</td>
</tr>
<tr id="parameter-NetworkInterfaceId">
    <td><CopyableCode code="NetworkInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of a network interface.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-OdbNetworkArn">
    <td><CopyableCode code="OdbNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ODB network.</td>
</tr>
<tr id="parameter-PublicIpv4Pool">
    <td><CopyableCode code="PublicIpv4Pool" /></td>
    <td><code>string</code></td>
    <td>The ID of a public IPv4 pool. A public IPv4 pool is a pool of IPv4 addresses that you've brought to Amazon Web Services with BYOIP.</td>
</tr>
<tr id="parameter-RouteTableId">
    <td><CopyableCode code="RouteTableId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the route tables.</td>
</tr>
<tr id="parameter-SubnetId">
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the route table.</td>
</tr>
<tr id="parameter-TransitGatewayId">
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of a transit gateway.</td>
</tr>
<tr id="parameter-VpcEndpointId">
    <td><CopyableCode code="VpcEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.</td>
</tr>
<tr id="parameter-VpcPeeringConnectionId">
    <td><CopyableCode code="VpcPeeringConnectionId" /></td>
    <td><code>string</code></td>
    <td>The ID of a VPC peering connection.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_route_tables"
    values={[
        { label: 'describe_route_tables', value: 'describe_route_tables' }
    ]}
>
<TabItem value="describe_route_tables">

Describes your route tables. The default is to describe all your route tables. Alternatively, you can specify specific route table IDs or filter the results to include only the route tables that match specific criteria. Each subnet in your VPC must be associated with a route table. If a subnet is not explicitly associated with any route table, it is implicitly associated with the main route table. This command does not return the subnet ID for implicit associations. For more information, see Route tables in the Amazon VPC User Guide.

```sql
SELECT
Associations,
OwnerId,
PropagatingVgws,
RouteTableId,
Routes,
Tags,
VpcId
FROM aws.ec2.route_tables
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
AND RouteTableId = '{{ RouteTableId }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_route"
    values={[
        { label: 'create_route', value: 'create_route' },
        { label: 'create_route_table', value: 'create_route_table' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_route">

Creates a route in a route table within a VPC. You must specify either a destination CIDR block or a prefix list ID. You must also specify exactly one of the resources from the parameter list. When determining how to route traffic, we use the route with the most specific match. For example, traffic is destined for the IPv4 address 192.0.2.3, and the route table includes the following two IPv4 routes: 192.0.2.0/24 (goes to some target A) 192.0.2.0/28 (goes to some target B) Both routes apply to the traffic destined for 192.0.2.3. However, the second route in the list covers a smaller number of IP addresses and is therefore more specific, so we use that route to determine where to target the traffic. For more information about route tables, see Route tables in the Amazon VPC User Guide.

```sql
INSERT INTO aws.ec2.route_tables (
RouteTableId,
region,
DestinationPrefixListId,
VpcEndpointId,
TransitGatewayId,
LocalGatewayId,
CarrierGatewayId,
CoreNetworkArn,
OdbNetworkArn,
DryRun,
DestinationCidrBlock,
GatewayId,
DestinationIpv6CidrBlock,
EgressOnlyInternetGatewayId,
InstanceId,
NetworkInterfaceId,
VpcPeeringConnectionId,
NatGatewayId
)
SELECT 
'{{ RouteTableId }}',
'{{ region }}',
'{{ DestinationPrefixListId }}',
'{{ VpcEndpointId }}',
'{{ TransitGatewayId }}',
'{{ LocalGatewayId }}',
'{{ CarrierGatewayId }}',
'{{ CoreNetworkArn }}',
'{{ OdbNetworkArn }}',
'{{ DryRun }}',
'{{ DestinationCidrBlock }}',
'{{ GatewayId }}',
'{{ DestinationIpv6CidrBlock }}',
'{{ EgressOnlyInternetGatewayId }}',
'{{ InstanceId }}',
'{{ NetworkInterfaceId }}',
'{{ VpcPeeringConnectionId }}',
'{{ NatGatewayId }}'
RETURNING
Return
;
```
</TabItem>
<TabItem value="create_route_table">

Creates a route table for the specified VPC. After you create a route table, you can add routes and associate the table with a subnet. For more information, see Route tables in the Amazon VPC User Guide.

```sql
INSERT INTO aws.ec2.route_tables (
VpcId,
region,
TagSpecification,
ClientToken,
DryRun
)
SELECT 
'{{ VpcId }}',
'{{ region }}',
'{{ TagSpecification }}',
'{{ ClientToken }}',
'{{ DryRun }}'
RETURNING
Associations,
OwnerId,
PropagatingVgws,
RouteTableId,
Routes,
Tags,
VpcId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: route_tables
  props:
    - name: RouteTableId
      value: "{{ RouteTableId }}"
      description: Required parameter for the route_tables resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the route_tables resource.
    - name: VpcId
      value: "{{ VpcId }}"
      description: Required parameter for the route_tables resource.
    - name: DestinationPrefixListId
      value: "{{ DestinationPrefixListId }}"
      description: The ID of a prefix list used for the destination match.
      description: The ID of a prefix list used for the destination match.
    - name: VpcEndpointId
      value: "{{ VpcEndpointId }}"
      description: The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.
      description: The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.
    - name: TransitGatewayId
      value: "{{ TransitGatewayId }}"
      description: The ID of a transit gateway.
      description: The ID of a transit gateway.
    - name: LocalGatewayId
      value: "{{ LocalGatewayId }}"
      description: The ID of the local gateway.
      description: The ID of the local gateway.
    - name: CarrierGatewayId
      value: "{{ CarrierGatewayId }}"
      description: The ID of the carrier gateway. You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.
      description: The ID of the carrier gateway. You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.
    - name: CoreNetworkArn
      value: "{{ CoreNetworkArn }}"
      description: The Amazon Resource Name (ARN) of the core network.
      description: The Amazon Resource Name (ARN) of the core network.
    - name: OdbNetworkArn
      value: "{{ OdbNetworkArn }}"
      description: The Amazon Resource Name (ARN) of the ODB network.
      description: The Amazon Resource Name (ARN) of the ODB network.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: DestinationCidrBlock
      value: "{{ DestinationCidrBlock }}"
      description: The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify 100.68.0.18/18, we modify it to 100.68.0.0/18.
      description: The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify 100.68.0.18/18, we modify it to 100.68.0.0/18.
    - name: GatewayId
      value: "{{ GatewayId }}"
      description: The ID of an internet gateway or virtual private gateway attached to your VPC.
      description: The ID of an internet gateway or virtual private gateway attached to your VPC.
    - name: DestinationIpv6CidrBlock
      value: "{{ DestinationIpv6CidrBlock }}"
      description: The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.
      description: The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.
    - name: EgressOnlyInternetGatewayId
      value: "{{ EgressOnlyInternetGatewayId }}"
      description: [IPv6 traffic only] The ID of an egress-only internet gateway.
      description: [IPv6 traffic only] The ID of an egress-only internet gateway.
    - name: InstanceId
      value: "{{ InstanceId }}"
      description: The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network interface is attached.
      description: The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network interface is attached.
    - name: NetworkInterfaceId
      value: "{{ NetworkInterfaceId }}"
      description: The ID of a network interface.
      description: The ID of a network interface.
    - name: VpcPeeringConnectionId
      value: "{{ VpcPeeringConnectionId }}"
      description: The ID of a VPC peering connection.
      description: The ID of a VPC peering connection.
    - name: NatGatewayId
      value: "{{ NatGatewayId }}"
      description: [IPv4 traffic only] The ID of a NAT gateway.
      description: [IPv4 traffic only] The ID of a NAT gateway.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the route table.
      description: The tags to assign to the route table.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_route_table"
    values={[
        { label: 'associate_route_table', value: 'associate_route_table' },
        { label: 'disassociate_route_table', value: 'disassociate_route_table' }
    ]}
>
<TabItem value="associate_route_table">

Associates a subnet in your VPC or an internet gateway or virtual private gateway attached to your VPC with a route table in your VPC. This association causes traffic from the subnet or gateway to be routed according to the routes in the route table. The action returns an association ID, which you need in order to disassociate the route table later. A route table can be associated with multiple subnets. For more information, see Route tables in the Amazon VPC User Guide.

```sql
UPDATE aws.ec2.route_tables
SET 
-- No updatable properties
WHERE 
RouteTableId = '{{ RouteTableId }}' --required
AND region = '{{ region }}' --required
AND GatewayId = '{{ GatewayId}}'
AND PublicIpv4Pool = '{{ PublicIpv4Pool}}'
AND DryRun = {{ DryRun}}
AND SubnetId = '{{ SubnetId}}'
RETURNING
AssociationId,
AssociationState;
```
</TabItem>
<TabItem value="disassociate_route_table">

Disassociates a subnet or gateway from a route table. After you perform this action, the subnet no longer uses the routes in the route table. Instead, it uses the routes in the VPC's main route table. For more information about route tables, see Route tables in the Amazon VPC User Guide.

```sql
UPDATE aws.ec2.route_tables
SET 
-- No updatable properties
WHERE 
AssociationId = '{{ AssociationId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}};
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="replace_route_table_association"
    values={[
        { label: 'replace_route_table_association', value: 'replace_route_table_association' },
        { label: 'replace_route', value: 'replace_route' }
    ]}
>
<TabItem value="replace_route_table_association">

Changes the route table associated with a given subnet, internet gateway, or virtual private gateway in a VPC. After the operation completes, the subnet or gateway uses the routes in the new route table. For more information about route tables, see Route tables in the Amazon VPC User Guide. You can also use this operation to change which table is the main route table in the VPC. Specify the main route table's association ID and the route table ID of the new main route table.

```sql
REPLACE aws.ec2.route_tables
SET 
-- No updatable properties
WHERE 
AssociationId = '{{ AssociationId }}' --required
AND RouteTableId = '{{ RouteTableId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
AssociationState,
NewAssociationId;
```
</TabItem>
<TabItem value="replace_route">

Replaces an existing route within a route table in a VPC. You must specify either a destination CIDR block or a prefix list ID. You must also specify exactly one of the resources from the parameter list, or reset the local route to its default target. For more information, see Route tables in the Amazon VPC User Guide.

```sql
REPLACE aws.ec2.route_tables
SET 
-- No updatable properties
WHERE 
RouteTableId = '{{ RouteTableId }}' --required
AND region = '{{ region }}' --required
AND DestinationPrefixListId = '{{ DestinationPrefixListId}}'
AND VpcEndpointId = '{{ VpcEndpointId}}'
AND LocalTarget = {{ LocalTarget}}
AND TransitGatewayId = '{{ TransitGatewayId}}'
AND LocalGatewayId = '{{ LocalGatewayId}}'
AND CarrierGatewayId = '{{ CarrierGatewayId}}'
AND CoreNetworkArn = '{{ CoreNetworkArn}}'
AND OdbNetworkArn = '{{ OdbNetworkArn}}'
AND DryRun = {{ DryRun}}
AND DestinationCidrBlock = '{{ DestinationCidrBlock}}'
AND GatewayId = '{{ GatewayId}}'
AND DestinationIpv6CidrBlock = '{{ DestinationIpv6CidrBlock}}'
AND EgressOnlyInternetGatewayId = '{{ EgressOnlyInternetGatewayId}}'
AND InstanceId = '{{ InstanceId}}'
AND NetworkInterfaceId = '{{ NetworkInterfaceId}}'
AND VpcPeeringConnectionId = '{{ VpcPeeringConnectionId}}'
AND NatGatewayId = '{{ NatGatewayId}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_route_table"
    values={[
        { label: 'delete_route_table', value: 'delete_route_table' }
    ]}
>
<TabItem value="delete_route_table">

Deletes the specified route table. You must disassociate the route table from any subnets before you can delete it. You can't delete the main route table.

```sql
DELETE FROM aws.ec2.route_tables
WHERE RouteTableId = '{{ RouteTableId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_route"
    values={[
        { label: 'delete_route', value: 'delete_route' },
        { label: 'disable_vgw_route_propagation', value: 'disable_vgw_route_propagation' },
        { label: 'enable_vgw_route_propagation', value: 'enable_vgw_route_propagation' }
    ]}
>
<TabItem value="delete_route">

Deletes the specified route from the specified route table.

```sql
EXEC aws.ec2.route_tables.delete_route 
@RouteTableId='{{ RouteTableId }}' --required, 
@region='{{ region }}' --required, 
@DestinationPrefixListId='{{ DestinationPrefixListId }}', 
@DryRun={{ DryRun }}, 
@DestinationCidrBlock='{{ DestinationCidrBlock }}', 
@DestinationIpv6CidrBlock='{{ DestinationIpv6CidrBlock }}'
;
```
</TabItem>
<TabItem value="disable_vgw_route_propagation">

Disables a virtual private gateway (VGW) from propagating routes to a specified route table of a VPC.

```sql
EXEC aws.ec2.route_tables.disable_vgw_route_propagation 
@GatewayId='{{ GatewayId }}' --required, 
@RouteTableId='{{ RouteTableId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_vgw_route_propagation">

Enables a virtual private gateway (VGW) to propagate routes to the specified route table of a VPC.

```sql
EXEC aws.ec2.route_tables.enable_vgw_route_propagation 
@GatewayId='{{ GatewayId }}' --required, 
@RouteTableId='{{ RouteTableId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
