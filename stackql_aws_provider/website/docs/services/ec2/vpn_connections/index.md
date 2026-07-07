--- 
title: vpn_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - vpn_connections
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

Creates, updates, deletes, gets or lists a <code>vpn_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpn_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpn_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpn_connections"
    values={[
        { label: 'describe_vpn_connections', value: 'describe_vpn_connections' }
    ]}
>
<TabItem value="describe_vpn_connections">

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
    <td><CopyableCode code="Category" /></td>
    <td><code>string</code></td>
    <td>The category of the VPN connection. A value of VPN indicates an Amazon Web Services VPN connection. A value of VPN-Classic indicates an Amazon Web Services Classic VPN connection.</td>
</tr>
<tr>
    <td><CopyableCode code="CoreNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the core network.</td>
</tr>
<tr>
    <td><CopyableCode code="CoreNetworkAttachmentArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the core network attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomerGatewayConfiguration" /></td>
    <td><code>string</code></td>
    <td>The configuration information for the VPN connection's customer gateway (in the native XML format). This element is always present in the CreateVpnConnection response; however, it's present in the DescribeVpnConnections response only if the VPN connection is in the pending or available state.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomerGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the customer gateway at your end of the VPN connection.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayAssociationState" /></td>
    <td><code>string</code></td>
    <td>The current state of the gateway association.</td>
</tr>
<tr>
    <td><CopyableCode code="Options" /></td>
    <td><code>string</code></td>
    <td>The VPN connection options.</td>
</tr>
<tr>
    <td><CopyableCode code="PreSharedKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Secrets Manager secret storing the pre-shared key(s) for the VPN connection.</td>
</tr>
<tr>
    <td><CopyableCode code="Routes" /></td>
    <td><code>string</code></td>
    <td>The static routes associated with the VPN connection.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the VPN connection.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the VPN connection.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway associated with the VPN connection.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of VPN connection.</td>
</tr>
<tr>
    <td><CopyableCode code="VgwTelemetry" /></td>
    <td><code>string</code></td>
    <td>Information about the VPN tunnel.</td>
</tr>
<tr>
    <td><CopyableCode code="VpnConcentratorId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPN concentrator associated with the VPN connection.</td>
</tr>
<tr>
    <td><CopyableCode code="VpnConnectionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPN connection.</td>
</tr>
<tr>
    <td><CopyableCode code="VpnGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual private gateway at the Amazon Web Services side of the VPN connection.</td>
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
    <td><a href="#describe_vpn_connections"><CopyableCode code="describe_vpn_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-VpnConnectionId"><code>VpnConnectionId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more of your VPN connections. For more information, see Amazon Web Services Site-to-Site VPN in the Amazon Web Services Site-to-Site VPN User Guide.</td>
</tr>
<tr>
    <td><a href="#create_vpn_connection_route"><CopyableCode code="create_vpn_connection_route" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DestinationCidrBlock"><code>DestinationCidrBlock</code></a>, <a href="#parameter-VpnConnectionId"><code>VpnConnectionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a static route associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway. For more information, see Amazon Web Services Site-to-Site VPN in the Amazon Web Services Site-to-Site VPN User Guide.</td>
</tr>
<tr>
    <td><a href="#create_vpn_connection"><CopyableCode code="create_vpn_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-CustomerGatewayId"><code>CustomerGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-VpnGatewayId"><code>VpnGatewayId</code></a>, <a href="#parameter-TransitGatewayId"><code>TransitGatewayId</code></a>, <a href="#parameter-VpnConcentratorId"><code>VpnConcentratorId</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-PreSharedKeyStorage"><code>PreSharedKeyStorage</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Options"><code>Options</code></a></td>
    <td>Creates a VPN connection between an existing virtual private gateway or transit gateway and a customer gateway. The supported connection type is ipsec.1. The response includes information that you need to give to your network administrator to configure your customer gateway. We strongly recommend that you use HTTPS when calling this operation because the response contains sensitive cryptographic information for configuring your customer gateway device. If you decide to shut down your VPN connection for any reason and later create a new VPN connection, you must reconfigure your customer gateway with the new information returned from this call. This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error. For more information, see Amazon Web Services Site-to-Site VPN in the Amazon Web Services Site-to-Site VPN User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_vpn_tunnel_options"><CopyableCode code="modify_vpn_tunnel_options" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VpnConnectionId"><code>VpnConnectionId</code></a>, <a href="#parameter-VpnTunnelOutsideIpAddress"><code>VpnTunnelOutsideIpAddress</code></a>, <a href="#parameter-TunnelOptions"><code>TunnelOptions</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-SkipTunnelReplacement"><code>SkipTunnelReplacement</code></a>, <a href="#parameter-PreSharedKeyStorage"><code>PreSharedKeyStorage</code></a></td>
    <td>Modifies the options for a VPN tunnel in an Amazon Web Services Site-to-Site VPN connection. You can modify multiple options for a tunnel in a single request, but you can only modify one tunnel at a time. For more information, see Site-to-Site VPN tunnel options for your Site-to-Site VPN connection in the Amazon Web Services Site-to-Site VPN User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_vpn_tunnel_certificate"><CopyableCode code="modify_vpn_tunnel_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VpnConnectionId"><code>VpnConnectionId</code></a>, <a href="#parameter-VpnTunnelOutsideIpAddress"><code>VpnTunnelOutsideIpAddress</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the VPN tunnel endpoint certificate.</td>
</tr>
<tr>
    <td><a href="#modify_vpn_connection"><CopyableCode code="modify_vpn_connection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VpnConnectionId"><code>VpnConnectionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayId"><code>TransitGatewayId</code></a>, <a href="#parameter-CustomerGatewayId"><code>CustomerGatewayId</code></a>, <a href="#parameter-VpnGatewayId"><code>VpnGatewayId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the customer gateway or the target gateway of an Amazon Web Services Site-to-Site VPN connection. To modify the target gateway, the following migration options are available: An existing virtual private gateway to a new virtual private gateway An existing virtual private gateway to a transit gateway An existing transit gateway to a new transit gateway An existing transit gateway to a virtual private gateway Before you perform the migration to the new gateway, you must configure the new gateway. Use CreateVpnGateway to create a virtual private gateway, or CreateTransitGateway to create a transit gateway. This step is required when you migrate from a virtual private gateway with static routes to a transit gateway. You must delete the static routes before you migrate to the new gateway. Keep a copy of the static route before you delete it. You will need to add back these routes to the transit gateway after the VPN connection migration is complete. After you migrate to the new gateway, you might need to modify your VPC route table. Use CreateRoute and DeleteRoute to make the changes described in Update VPC route tables in the Amazon Web Services Site-to-Site VPN User Guide. When the new gateway is a transit gateway, modify the transit gateway route table to allow traffic between the VPC and the Amazon Web Services Site-to-Site VPN connection. Use CreateTransitGatewayRoute to add the routes. If you deleted VPN static routes, you must add the static routes to the transit gateway route table. After you perform this operation, the VPN endpoint's IP addresses on the Amazon Web Services side and the tunnel options remain intact. Your Amazon Web Services Site-to-Site VPN connection will be temporarily unavailable for a brief period while we provision the new endpoints.</td>
</tr>
<tr>
    <td><a href="#replace_vpn_tunnel"><CopyableCode code="replace_vpn_tunnel" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-VpnConnectionId"><code>VpnConnectionId</code></a>, <a href="#parameter-VpnTunnelOutsideIpAddress"><code>VpnTunnelOutsideIpAddress</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ApplyPendingMaintenance"><code>ApplyPendingMaintenance</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Trigger replacement of specified VPN tunnel.</td>
</tr>
<tr>
    <td><a href="#delete_vpn_connection_route"><CopyableCode code="delete_vpn_connection_route" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DestinationCidrBlock"><code>DestinationCidrBlock</code></a>, <a href="#parameter-VpnConnectionId"><code>VpnConnectionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified static route associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.</td>
</tr>
<tr>
    <td><a href="#delete_vpn_connection"><CopyableCode code="delete_vpn_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-VpnConnectionId"><code>VpnConnectionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified VPN connection. If you're deleting the VPC and its associated components, we recommend that you detach the virtual private gateway from the VPC and delete the VPC before deleting the VPN connection. If you believe that the tunnel credentials for your VPN connection have been compromised, you can delete the VPN connection and create a new one that has new keys, without needing to delete the VPC or virtual private gateway. If you create a new VPN connection, you must reconfigure the customer gateway device using the new configuration information returned with the new VPN connection ID. For certificate-based authentication, delete all Certificate Manager (ACM) private certificates used for the Amazon Web Services-side tunnel endpoints for the VPN connection before deleting the VPN connection.</td>
</tr>
<tr>
    <td><a href="#modify_vpn_connection_options"><CopyableCode code="modify_vpn_connection_options" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-VpnConnectionId"><code>VpnConnectionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LocalIpv4NetworkCidr"><code>LocalIpv4NetworkCidr</code></a>, <a href="#parameter-RemoteIpv4NetworkCidr"><code>RemoteIpv4NetworkCidr</code></a>, <a href="#parameter-LocalIpv6NetworkCidr"><code>LocalIpv6NetworkCidr</code></a>, <a href="#parameter-RemoteIpv6NetworkCidr"><code>RemoteIpv6NetworkCidr</code></a>, <a href="#parameter-TunnelBandwidth"><code>TunnelBandwidth</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the connection options for your Site-to-Site VPN connection. When you modify the VPN connection options, the VPN endpoint IP addresses on the Amazon Web Services side do not change, and the tunnel options do not change. Your VPN connection will be temporarily unavailable for a brief period while the VPN connection is updated.</td>
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
<tr id="parameter-CustomerGatewayId">
    <td><CopyableCode code="CustomerGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the customer gateway.</td>
</tr>
<tr id="parameter-DestinationCidrBlock">
    <td><CopyableCode code="DestinationCidrBlock" /></td>
    <td><code>string</code></td>
    <td>The CIDR block associated with the local subnet of the customer network.</td>
</tr>
<tr id="parameter-TunnelOptions">
    <td><CopyableCode code="TunnelOptions" /></td>
    <td><code>object</code></td>
    <td>The tunnel options to modify.</td>
</tr>
<tr id="parameter-VpnConnectionId">
    <td><CopyableCode code="VpnConnectionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Site-to-Site VPN connection.</td>
</tr>
<tr id="parameter-VpnTunnelOutsideIpAddress">
    <td><CopyableCode code="VpnTunnelOutsideIpAddress" /></td>
    <td><code>string</code></td>
    <td>The external IP address of the VPN tunnel.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ApplyPendingMaintenance">
    <td><CopyableCode code="ApplyPendingMaintenance" /></td>
    <td><code>boolean</code></td>
    <td>Trigger pending tunnel endpoint maintenance.</td>
</tr>
<tr id="parameter-CustomerGatewayId">
    <td><CopyableCode code="CustomerGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the customer gateway at your end of the VPN connection.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. customer-gateway-configuration - The configuration information for the customer gateway. customer-gateway-id - The ID of a customer gateway associated with the VPN connection. state - The state of the VPN connection (pending | available | deleting | deleted). option.static-routes-only - Indicates whether the connection has static routes only. Used for devices that do not support Border Gateway Protocol (BGP). route.destination-cidr-block - The destination CIDR block. This corresponds to the subnet used in a customer data center. bgp-asn - The BGP Autonomous System Number (ASN) associated with a BGP device. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. type - The type of VPN connection. Currently the only supported type is ipsec.1. vpn-connection-id - The ID of the VPN connection. vpn-gateway-id - The ID of a virtual private gateway associated with the VPN connection. transit-gateway-id - The ID of a transit gateway associated with the VPN connection.</td>
</tr>
<tr id="parameter-LocalIpv4NetworkCidr">
    <td><CopyableCode code="LocalIpv4NetworkCidr" /></td>
    <td><code>string</code></td>
    <td>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection. Default: 0.0.0.0/0</td>
</tr>
<tr id="parameter-LocalIpv6NetworkCidr">
    <td><CopyableCode code="LocalIpv6NetworkCidr" /></td>
    <td><code>string</code></td>
    <td>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection. Default: ::/0</td>
</tr>
<tr id="parameter-Options">
    <td><CopyableCode code="Options" /></td>
    <td><code>object</code></td>
    <td>The options for the VPN connection.</td>
</tr>
<tr id="parameter-PreSharedKeyStorage">
    <td><CopyableCode code="PreSharedKeyStorage" /></td>
    <td><code>string</code></td>
    <td>Specifies the storage mode for the pre-shared key (PSK). Valid values are Standard (stored in Site-to-Site VPN service) or SecretsManager (stored in Amazon Web Services Secrets Manager).</td>
</tr>
<tr id="parameter-RemoteIpv4NetworkCidr">
    <td><CopyableCode code="RemoteIpv4NetworkCidr" /></td>
    <td><code>string</code></td>
    <td>The IPv4 CIDR on the Amazon Web Services side of the VPN connection. Default: 0.0.0.0/0</td>
</tr>
<tr id="parameter-RemoteIpv6NetworkCidr">
    <td><CopyableCode code="RemoteIpv6NetworkCidr" /></td>
    <td><code>string</code></td>
    <td>The IPv6 CIDR on the Amazon Web Services side of the VPN connection. Default: ::/0</td>
</tr>
<tr id="parameter-SkipTunnelReplacement">
    <td><CopyableCode code="SkipTunnelReplacement" /></td>
    <td><code>boolean</code></td>
    <td>Choose whether or not to trigger immediate tunnel replacement. This is only applicable when turning on or off EnableTunnelLifecycleControl. Valid values: True | False</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the VPN connection.</td>
</tr>
<tr id="parameter-TransitGatewayId">
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway.</td>
</tr>
<tr id="parameter-TunnelBandwidth">
    <td><CopyableCode code="TunnelBandwidth" /></td>
    <td><code>string</code></td>
    <td>The desired bandwidth specification for the VPN connection. standard supports up to 1.25 Gbps per tunnel, while large supports up to 5 Gbps per tunnel. Large bandwidth is only available for VPN connections attached to a transit gateway or to Cloud WAN. The default value is standard.</td>
</tr>
<tr id="parameter-Type">
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of VPN connection (ipsec.1).</td>
</tr>
<tr id="parameter-VpnConcentratorId">
    <td><CopyableCode code="VpnConcentratorId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPN concentrator to associate with the VPN connection.</td>
</tr>
<tr id="parameter-VpnConnectionId">
    <td><CopyableCode code="VpnConnectionId" /></td>
    <td><code>array</code></td>
    <td>One or more VPN connection IDs. Default: Describes your VPN connections.</td>
</tr>
<tr id="parameter-VpnGatewayId">
    <td><CopyableCode code="VpnGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual private gateway at the Amazon Web Services side of the VPN connection.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpn_connections"
    values={[
        { label: 'describe_vpn_connections', value: 'describe_vpn_connections' }
    ]}
>
<TabItem value="describe_vpn_connections">

Describes one or more of your VPN connections. For more information, see Amazon Web Services Site-to-Site VPN in the Amazon Web Services Site-to-Site VPN User Guide.

```sql
SELECT
Category,
CoreNetworkArn,
CoreNetworkAttachmentArn,
CustomerGatewayConfiguration,
CustomerGatewayId,
GatewayAssociationState,
Options,
PreSharedKeyArn,
Routes,
State,
Tags,
TransitGatewayId,
Type,
VgwTelemetry,
VpnConcentratorId,
VpnConnectionId,
VpnGatewayId
FROM aws.ec2.vpn_connections
WHERE region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND VpnConnectionId = '{{ VpnConnectionId }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpn_connection_route"
    values={[
        { label: 'create_vpn_connection_route', value: 'create_vpn_connection_route' },
        { label: 'create_vpn_connection', value: 'create_vpn_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpn_connection_route">

Creates a static route associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway. For more information, see Amazon Web Services Site-to-Site VPN in the Amazon Web Services Site-to-Site VPN User Guide.

```sql
INSERT INTO aws.ec2.vpn_connections (
DestinationCidrBlock,
VpnConnectionId,
region
)
SELECT 
'{{ DestinationCidrBlock }}',
'{{ VpnConnectionId }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="create_vpn_connection">

Creates a VPN connection between an existing virtual private gateway or transit gateway and a customer gateway. The supported connection type is ipsec.1. The response includes information that you need to give to your network administrator to configure your customer gateway. We strongly recommend that you use HTTPS when calling this operation because the response contains sensitive cryptographic information for configuring your customer gateway device. If you decide to shut down your VPN connection for any reason and later create a new VPN connection, you must reconfigure your customer gateway with the new information returned from this call. This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error. For more information, see Amazon Web Services Site-to-Site VPN in the Amazon Web Services Site-to-Site VPN User Guide.

```sql
INSERT INTO aws.ec2.vpn_connections (
CustomerGatewayId,
region,
Type,
VpnGatewayId,
TransitGatewayId,
VpnConcentratorId,
TagSpecification,
PreSharedKeyStorage,
DryRun,
Options
)
SELECT 
'{{ CustomerGatewayId }}',
'{{ region }}',
'{{ Type }}',
'{{ VpnGatewayId }}',
'{{ TransitGatewayId }}',
'{{ VpnConcentratorId }}',
'{{ TagSpecification }}',
'{{ PreSharedKeyStorage }}',
'{{ DryRun }}',
'{{ Options }}'
RETURNING
Category,
CoreNetworkArn,
CoreNetworkAttachmentArn,
CustomerGatewayConfiguration,
CustomerGatewayId,
GatewayAssociationState,
Options,
PreSharedKeyArn,
Routes,
State,
Tags,
TransitGatewayId,
Type,
VgwTelemetry,
VpnConcentratorId,
VpnConnectionId,
VpnGatewayId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpn_connections
  props:
    - name: DestinationCidrBlock
      value: "{{ DestinationCidrBlock }}"
      description: Required parameter for the vpn_connections resource.
    - name: VpnConnectionId
      value: "{{ VpnConnectionId }}"
      description: Required parameter for the vpn_connections resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpn_connections resource.
    - name: CustomerGatewayId
      value: "{{ CustomerGatewayId }}"
      description: Required parameter for the vpn_connections resource.
    - name: Type
      value: "{{ Type }}"
      description: The type of VPN connection (ipsec.1).
      description: The type of VPN connection (ipsec.1).
    - name: VpnGatewayId
      value: "{{ VpnGatewayId }}"
      description: The ID of the virtual private gateway. If you specify a virtual private gateway, you cannot specify a transit gateway.
      description: The ID of the virtual private gateway. If you specify a virtual private gateway, you cannot specify a transit gateway.
    - name: TransitGatewayId
      value: "{{ TransitGatewayId }}"
      description: The ID of the transit gateway. If you specify a transit gateway, you cannot specify a virtual private gateway.
      description: The ID of the transit gateway. If you specify a transit gateway, you cannot specify a virtual private gateway.
    - name: VpnConcentratorId
      value: "{{ VpnConcentratorId }}"
      description: The ID of the VPN concentrator to associate with the VPN connection.
      description: The ID of the VPN concentrator to associate with the VPN connection.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the VPN connection.
      description: The tags to apply to the VPN connection.
    - name: PreSharedKeyStorage
      value: "{{ PreSharedKeyStorage }}"
      description: Specifies the storage mode for the pre-shared key (PSK). Valid values are Standard" (stored in the Site-to-Site VPN service) or SecretsManager (stored in Amazon Web Services Secrets Manager).
      description: Specifies the storage mode for the pre-shared key (PSK). Valid values are Standard" (stored in the Site-to-Site VPN service) or SecretsManager (stored in Amazon Web Services Secrets Manager).
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: Options
      value: "{{ Options }}"
      description: The options for the VPN connection.
      description: The options for the VPN connection.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_vpn_tunnel_options"
    values={[
        { label: 'modify_vpn_tunnel_options', value: 'modify_vpn_tunnel_options' },
        { label: 'modify_vpn_tunnel_certificate', value: 'modify_vpn_tunnel_certificate' },
        { label: 'modify_vpn_connection', value: 'modify_vpn_connection' }
    ]}
>
<TabItem value="modify_vpn_tunnel_options">

Modifies the options for a VPN tunnel in an Amazon Web Services Site-to-Site VPN connection. You can modify multiple options for a tunnel in a single request, but you can only modify one tunnel at a time. For more information, see Site-to-Site VPN tunnel options for your Site-to-Site VPN connection in the Amazon Web Services Site-to-Site VPN User Guide.

```sql
UPDATE aws.ec2.vpn_connections
SET 
-- No updatable properties
WHERE 
VpnConnectionId = '{{ VpnConnectionId }}' --required
AND VpnTunnelOutsideIpAddress = '{{ VpnTunnelOutsideIpAddress }}' --required
AND TunnelOptions = '{{ TunnelOptions }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND SkipTunnelReplacement = {{ SkipTunnelReplacement}}
AND PreSharedKeyStorage = '{{ PreSharedKeyStorage}}'
RETURNING
Category,
CoreNetworkArn,
CoreNetworkAttachmentArn,
CustomerGatewayConfiguration,
CustomerGatewayId,
GatewayAssociationState,
Options,
PreSharedKeyArn,
Routes,
State,
Tags,
TransitGatewayId,
Type,
VgwTelemetry,
VpnConcentratorId,
VpnConnectionId,
VpnGatewayId;
```
</TabItem>
<TabItem value="modify_vpn_tunnel_certificate">

Modifies the VPN tunnel endpoint certificate.

```sql
UPDATE aws.ec2.vpn_connections
SET 
-- No updatable properties
WHERE 
VpnConnectionId = '{{ VpnConnectionId }}' --required
AND VpnTunnelOutsideIpAddress = '{{ VpnTunnelOutsideIpAddress }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
Category,
CoreNetworkArn,
CoreNetworkAttachmentArn,
CustomerGatewayConfiguration,
CustomerGatewayId,
GatewayAssociationState,
Options,
PreSharedKeyArn,
Routes,
State,
Tags,
TransitGatewayId,
Type,
VgwTelemetry,
VpnConcentratorId,
VpnConnectionId,
VpnGatewayId;
```
</TabItem>
<TabItem value="modify_vpn_connection">

Modifies the customer gateway or the target gateway of an Amazon Web Services Site-to-Site VPN connection. To modify the target gateway, the following migration options are available: An existing virtual private gateway to a new virtual private gateway An existing virtual private gateway to a transit gateway An existing transit gateway to a new transit gateway An existing transit gateway to a virtual private gateway Before you perform the migration to the new gateway, you must configure the new gateway. Use CreateVpnGateway to create a virtual private gateway, or CreateTransitGateway to create a transit gateway. This step is required when you migrate from a virtual private gateway with static routes to a transit gateway. You must delete the static routes before you migrate to the new gateway. Keep a copy of the static route before you delete it. You will need to add back these routes to the transit gateway after the VPN connection migration is complete. After you migrate to the new gateway, you might need to modify your VPC route table. Use CreateRoute and DeleteRoute to make the changes described in Update VPC route tables in the Amazon Web Services Site-to-Site VPN User Guide. When the new gateway is a transit gateway, modify the transit gateway route table to allow traffic between the VPC and the Amazon Web Services Site-to-Site VPN connection. Use CreateTransitGatewayRoute to add the routes. If you deleted VPN static routes, you must add the static routes to the transit gateway route table. After you perform this operation, the VPN endpoint's IP addresses on the Amazon Web Services side and the tunnel options remain intact. Your Amazon Web Services Site-to-Site VPN connection will be temporarily unavailable for a brief period while we provision the new endpoints.

```sql
UPDATE aws.ec2.vpn_connections
SET 
-- No updatable properties
WHERE 
VpnConnectionId = '{{ VpnConnectionId }}' --required
AND region = '{{ region }}' --required
AND TransitGatewayId = '{{ TransitGatewayId}}'
AND CustomerGatewayId = '{{ CustomerGatewayId}}'
AND VpnGatewayId = '{{ VpnGatewayId}}'
AND DryRun = {{ DryRun}}
RETURNING
Category,
CoreNetworkArn,
CoreNetworkAttachmentArn,
CustomerGatewayConfiguration,
CustomerGatewayId,
GatewayAssociationState,
Options,
PreSharedKeyArn,
Routes,
State,
Tags,
TransitGatewayId,
Type,
VgwTelemetry,
VpnConcentratorId,
VpnConnectionId,
VpnGatewayId;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="replace_vpn_tunnel"
    values={[
        { label: 'replace_vpn_tunnel', value: 'replace_vpn_tunnel' }
    ]}
>
<TabItem value="replace_vpn_tunnel">

Trigger replacement of specified VPN tunnel.

```sql
REPLACE aws.ec2.vpn_connections
SET 
-- No updatable properties
WHERE 
VpnConnectionId = '{{ VpnConnectionId }}' --required
AND VpnTunnelOutsideIpAddress = '{{ VpnTunnelOutsideIpAddress }}' --required
AND region = '{{ region }}' --required
AND ApplyPendingMaintenance = {{ ApplyPendingMaintenance}}
AND DryRun = {{ DryRun}}
RETURNING
Return;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpn_connection_route"
    values={[
        { label: 'delete_vpn_connection_route', value: 'delete_vpn_connection_route' },
        { label: 'delete_vpn_connection', value: 'delete_vpn_connection' }
    ]}
>
<TabItem value="delete_vpn_connection_route">

Deletes the specified static route associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.

```sql
DELETE FROM aws.ec2.vpn_connections
WHERE DestinationCidrBlock = '{{ DestinationCidrBlock }}' --required
AND VpnConnectionId = '{{ VpnConnectionId }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_vpn_connection">

Deletes the specified VPN connection. If you're deleting the VPC and its associated components, we recommend that you detach the virtual private gateway from the VPC and delete the VPC before deleting the VPN connection. If you believe that the tunnel credentials for your VPN connection have been compromised, you can delete the VPN connection and create a new one that has new keys, without needing to delete the VPC or virtual private gateway. If you create a new VPN connection, you must reconfigure the customer gateway device using the new configuration information returned with the new VPN connection ID. For certificate-based authentication, delete all Certificate Manager (ACM) private certificates used for the Amazon Web Services-side tunnel endpoints for the VPN connection before deleting the VPN connection.

```sql
DELETE FROM aws.ec2.vpn_connections
WHERE VpnConnectionId = '{{ VpnConnectionId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="modify_vpn_connection_options"
    values={[
        { label: 'modify_vpn_connection_options', value: 'modify_vpn_connection_options' }
    ]}
>
<TabItem value="modify_vpn_connection_options">

Modifies the connection options for your Site-to-Site VPN connection. When you modify the VPN connection options, the VPN endpoint IP addresses on the Amazon Web Services side do not change, and the tunnel options do not change. Your VPN connection will be temporarily unavailable for a brief period while the VPN connection is updated.

```sql
EXEC aws.ec2.vpn_connections.modify_vpn_connection_options 
@VpnConnectionId='{{ VpnConnectionId }}' --required, 
@region='{{ region }}' --required, 
@LocalIpv4NetworkCidr='{{ LocalIpv4NetworkCidr }}', 
@RemoteIpv4NetworkCidr='{{ RemoteIpv4NetworkCidr }}', 
@LocalIpv6NetworkCidr='{{ LocalIpv6NetworkCidr }}', 
@RemoteIpv6NetworkCidr='{{ RemoteIpv6NetworkCidr }}', 
@TunnelBandwidth='{{ TunnelBandwidth }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
