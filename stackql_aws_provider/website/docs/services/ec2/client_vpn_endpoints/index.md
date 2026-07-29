--- 
title: client_vpn_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - client_vpn_endpoints
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

Creates, updates, deletes, gets or lists a <code>client_vpn_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="client_vpn_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.client_vpn_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_client_vpn_endpoints"
    values={[
        { label: 'describe_client_vpn_endpoints', value: 'describe_client_vpn_endpoints' }
    ]}
>
<TabItem value="describe_client_vpn_endpoints">

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
    <td><CopyableCode code="associated_target_networks" /></td>
    <td><code>string</code></td>
    <td>Information about the associated target networks. A target network is a subnet in a VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="authentication_options" /></td>
    <td><code>string</code></td>
    <td>Information about the authentication method used by the Client VPN endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="client_cidr_block" /></td>
    <td><code>string</code></td>
    <td>The IPv4 address range, in CIDR notation, from which client IP addresses are assigned.</td>
</tr>
<tr>
    <td><CopyableCode code="client_connect_options" /></td>
    <td><code>string</code></td>
    <td>The options for managing connection authorization for new client connections.</td>
</tr>
<tr>
    <td><CopyableCode code="client_login_banner_options" /></td>
    <td><code>string</code></td>
    <td>Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is established.</td>
</tr>
<tr>
    <td><CopyableCode code="client_route_enforcement_options" /></td>
    <td><code>string</code></td>
    <td>Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN. T his feature helps improve your security posture by ensuring that network traffic originating from a connected client is not inadvertently sent outside the VPN tunnel. Client route enforcement works by monitoring the route table of a connected device for routing policy changes to the VPN connection. If the feature detects any VPN routing policy modifications, it will automatically force an update to the route table, reverting it back to the expected route configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="client_vpn_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Client VPN endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_log_options" /></td>
    <td><code>string</code></td>
    <td>Information about the client connection logging options for the Client VPN endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the Client VPN endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the Client VPN endpoint was deleted, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="disconnect_on_session_timeout" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the client VPN session is disconnected after the maximum sessionTimeoutHours is reached. If true, users are prompted to reconnect client VPN. If false, client VPN attempts to reconnect automatically. The default value is true.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_name" /></td>
    <td><code>string</code></td>
    <td>The DNS name to be used by clients when connecting to the Client VPN endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_servers" /></td>
    <td><code>string</code></td>
    <td>Information about the DNS servers to be used for DNS resolution.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_ip_address_type" /></td>
    <td><code>string</code></td>
    <td>The IP address type of the Client VPN endpoint. Possible values are ipv4 for IPv4 addressing only, ipv6 for IPv6 addressing only, or dual-stack for both IPv4 and IPv6 addressing.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_ids" /></td>
    <td><code>string</code></td>
    <td>The IDs of the security groups for the target network.</td>
</tr>
<tr>
    <td><CopyableCode code="self_service_portal_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the self-service portal.</td>
</tr>
<tr>
    <td><CopyableCode code="server_certificate_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the server certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="session_timeout_hours" /></td>
    <td><code>integer</code></td>
    <td>The maximum VPN session duration time in hours. Valid values: 8 | 10 | 12 | 24 Default value: 24</td>
</tr>
<tr>
    <td><CopyableCode code="split_tunnel" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether split-tunnel is enabled in the Client VPN endpoint. For information about split-tunnel VPN endpoints, see Split-Tunnel Client VPN endpoint in the Client VPN Administrator Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current state of the Client VPN endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the Client VPN endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_ip_address_type" /></td>
    <td><code>string</code></td>
    <td>The IP address type of the Client VPN endpoint. Possible values are either ipv4 for IPv4 addressing only, ipv6 for IPv6 addressing only, or dual-stack for both IPv4 and IPv6 addressing.</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_configuration" /></td>
    <td><code>string</code></td>
    <td>The Transit Gateway configuration for the Client VPN endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="transport_protocol" /></td>
    <td><code>string</code></td>
    <td>The transport protocol used by the Client VPN endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="vpn_port" /></td>
    <td><code>integer</code></td>
    <td>The port number for the Client VPN endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpn_protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol used by the VPN session.</td>
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
    <td><a href="#describe_client_vpn_endpoints"><CopyableCode code="describe_client_vpn_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more Client VPN endpoints in the account.</td>
</tr>
<tr>
    <td><a href="#create_client_vpn_endpoint"><CopyableCode code="create_client_vpn_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ServerCertificateArn"><code>ServerCertificateArn</code></a>, <a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-ConnectionLogOptions"><code>ConnectionLogOptions</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientCidrBlock"><code>ClientCidrBlock</code></a>, <a href="#parameter-DnsServers"><code>DnsServers</code></a>, <a href="#parameter-TransportProtocol"><code>TransportProtocol</code></a>, <a href="#parameter-VpnPort"><code>VpnPort</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-SplitTunnel"><code>SplitTunnel</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-SecurityGroupId"><code>SecurityGroupId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-SelfServicePortal"><code>SelfServicePortal</code></a>, <a href="#parameter-ClientConnectOptions"><code>ClientConnectOptions</code></a>, <a href="#parameter-SessionTimeoutHours"><code>SessionTimeoutHours</code></a>, <a href="#parameter-ClientLoginBannerOptions"><code>ClientLoginBannerOptions</code></a>, <a href="#parameter-ClientRouteEnforcementOptions"><code>ClientRouteEnforcementOptions</code></a>, <a href="#parameter-DisconnectOnSessionTimeout"><code>DisconnectOnSessionTimeout</code></a>, <a href="#parameter-EndpointIpAddressType"><code>EndpointIpAddressType</code></a>, <a href="#parameter-TrafficIpAddressType"><code>TrafficIpAddressType</code></a>, <a href="#parameter-TransitGatewayConfiguration"><code>TransitGatewayConfiguration</code></a></td>
    <td>Creates a Client VPN endpoint. A Client VPN endpoint is the resource you create and configure to enable and manage client VPN sessions. It is the destination endpoint at which all client VPN sessions are terminated.</td>
</tr>
<tr>
    <td><a href="#authorize_client_vpn_ingress"><CopyableCode code="authorize_client_vpn_ingress" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-TargetNetworkCidr"><code>TargetNetworkCidr</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AccessGroupId"><code>AccessGroupId</code></a>, <a href="#parameter-AuthorizeAllGroups"><code>AuthorizeAllGroups</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Adds an ingress authorization rule to a Client VPN endpoint. Ingress authorization rules act as firewall rules that grant access to networks. You must configure ingress authorization rules to enable clients to access resources in Amazon Web Services or on-premises networks.</td>
</tr>
<tr>
    <td><a href="#modify_client_vpn_endpoint"><CopyableCode code="modify_client_vpn_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ServerCertificateArn"><code>ServerCertificateArn</code></a>, <a href="#parameter-ConnectionLogOptions"><code>ConnectionLogOptions</code></a>, <a href="#parameter-DnsServers"><code>DnsServers</code></a>, <a href="#parameter-VpnPort"><code>VpnPort</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-SplitTunnel"><code>SplitTunnel</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-SecurityGroupId"><code>SecurityGroupId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-SelfServicePortal"><code>SelfServicePortal</code></a>, <a href="#parameter-ClientConnectOptions"><code>ClientConnectOptions</code></a>, <a href="#parameter-SessionTimeoutHours"><code>SessionTimeoutHours</code></a>, <a href="#parameter-ClientLoginBannerOptions"><code>ClientLoginBannerOptions</code></a>, <a href="#parameter-ClientRouteEnforcementOptions"><code>ClientRouteEnforcementOptions</code></a>, <a href="#parameter-DisconnectOnSessionTimeout"><code>DisconnectOnSessionTimeout</code></a>, <a href="#parameter-TransitGatewayConfiguration"><code>TransitGatewayConfiguration</code></a></td>
    <td>Modifies the specified Client VPN endpoint. Modifying the DNS server resets existing client connections.</td>
</tr>
<tr>
    <td><a href="#delete_client_vpn_endpoint"><CopyableCode code="delete_client_vpn_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified Client VPN endpoint. You must disassociate all target networks before you can delete a Client VPN endpoint.</td>
</tr>
<tr>
    <td><a href="#apply_security_groups_to_client_vpn_target_network"><CopyableCode code="apply_security_groups_to_client_vpn_target_network" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-SecurityGroupId"><code>SecurityGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Applies a security group to the association between the target network and the Client VPN endpoint. This action replaces the existing security groups with the specified security groups.</td>
</tr>
<tr>
    <td><a href="#export_client_vpn_client_certificate_revocation_list"><CopyableCode code="export_client_vpn_client_certificate_revocation_list" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Downloads the client certificate revocation list for the specified Client VPN endpoint.</td>
</tr>
<tr>
    <td><a href="#export_client_vpn_client_configuration"><CopyableCode code="export_client_vpn_client_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Downloads the contents of the Client VPN endpoint configuration file for the specified Client VPN endpoint. The Client VPN endpoint configuration file includes the Client VPN endpoint and certificate information clients need to establish a connection with the Client VPN endpoint.</td>
</tr>
<tr>
    <td><a href="#import_client_vpn_client_certificate_revocation_list"><CopyableCode code="import_client_vpn_client_certificate_revocation_list" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-CertificateRevocationList"><code>CertificateRevocationList</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Uploads a client certificate revocation list to the specified Client VPN endpoint. Uploading a client certificate revocation list overwrites the existing client certificate revocation list. Uploading a client certificate revocation list resets existing client connections.</td>
</tr>
<tr>
    <td><a href="#revoke_client_vpn_ingress"><CopyableCode code="revoke_client_vpn_ingress" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-TargetNetworkCidr"><code>TargetNetworkCidr</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AccessGroupId"><code>AccessGroupId</code></a>, <a href="#parameter-RevokeAllGroups"><code>RevokeAllGroups</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Removes an ingress authorization rule from a Client VPN endpoint.</td>
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
<tr id="parameter-Authentication">
    <td><CopyableCode code="Authentication" /></td>
    <td><code>array</code></td>
    <td>Information about the authentication method to be used to authenticate clients.</td>
</tr>
<tr id="parameter-CertificateRevocationList">
    <td><CopyableCode code="CertificateRevocationList" /></td>
    <td><code>string</code></td>
    <td>The client certificate revocation list file. For more information, see Generate a Client Certificate Revocation List in the Client VPN Administrator Guide.</td>
</tr>
<tr id="parameter-ClientVpnEndpointId">
    <td><CopyableCode code="ClientVpnEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Client VPN endpoint with which the authorization rule is associated.</td>
</tr>
<tr id="parameter-ConnectionLogOptions">
    <td><CopyableCode code="ConnectionLogOptions" /></td>
    <td><code>object</code></td>
    <td>Information about the client connection logging options. If you enable client connection logging, data about client connections is sent to a Cloudwatch Logs log stream. The following information is logged: Client connection requests Client connection results (successful and unsuccessful) Reasons for unsuccessful client connection requests Client connection termination time</td>
</tr>
<tr id="parameter-SecurityGroupId">
    <td><CopyableCode code="SecurityGroupId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the security groups to apply to the associated target network. Up to 5 security groups can be applied to an associated target network.</td>
</tr>
<tr id="parameter-ServerCertificateArn">
    <td><CopyableCode code="ServerCertificateArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the server certificate. For more information, see the Certificate Manager User Guide.</td>
</tr>
<tr id="parameter-TargetNetworkCidr">
    <td><CopyableCode code="TargetNetworkCidr" /></td>
    <td><code>string</code></td>
    <td>The IPv4 address range, in CIDR notation, of the network for which access is being removed.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC in which the associated target network is located.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AccessGroupId">
    <td><CopyableCode code="AccessGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Active Directory group for which to revoke access.</td>
</tr>
<tr id="parameter-AuthorizeAllGroups">
    <td><CopyableCode code="AuthorizeAllGroups" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to grant access to all clients. Specify true to grant all clients who successfully establish a VPN connection access to the network. Must be set to true if AccessGroupId is not specified.</td>
</tr>
<tr id="parameter-ClientCidrBlock">
    <td><CopyableCode code="ClientCidrBlock" /></td>
    <td><code>string</code></td>
    <td>The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. Client CIDR range must have a size of at least /22 and must not be greater than /12.</td>
</tr>
<tr id="parameter-ClientConnectOptions">
    <td><CopyableCode code="ClientConnectOptions" /></td>
    <td><code>object</code></td>
    <td>The options for managing connection authorization for new client connections.</td>
</tr>
<tr id="parameter-ClientLoginBannerOptions">
    <td><CopyableCode code="ClientLoginBannerOptions" /></td>
    <td><code>object</code></td>
    <td>Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is established.</td>
</tr>
<tr id="parameter-ClientRouteEnforcementOptions">
    <td><CopyableCode code="ClientRouteEnforcementOptions" /></td>
    <td><code>object</code></td>
    <td>Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN. T his feature helps improve your security posture by ensuring that network traffic originating from a connected client is not inadvertently sent outside the VPN tunnel. Client route enforcement works by monitoring the route table of a connected device for routing policy changes to the VPN connection. If the feature detects any VPN routing policy modifications, it will automatically force an update to the route table, reverting it back to the expected route configurations.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-ClientVpnEndpointId">
    <td><CopyableCode code="ClientVpnEndpointId" /></td>
    <td><code>array</code></td>
    <td>The ID of the Client VPN endpoint.</td>
</tr>
<tr id="parameter-ConnectionLogOptions">
    <td><CopyableCode code="ConnectionLogOptions" /></td>
    <td><code>object</code></td>
    <td>Information about the client connection logging options. If you enable client connection logging, data about client connections is sent to a Cloudwatch Logs log stream. The following information is logged: Client connection requests Client connection results (successful and unsuccessful) Reasons for unsuccessful client connection requests Client connection termination time</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the Client VPN endpoint.</td>
</tr>
<tr id="parameter-DisconnectOnSessionTimeout">
    <td><CopyableCode code="DisconnectOnSessionTimeout" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the client VPN session is disconnected after the maximum timeout specified in sessionTimeoutHours is reached. If true, users are prompted to reconnect client VPN. If false, client VPN attempts to reconnect automatically. The default value is true.</td>
</tr>
<tr id="parameter-DnsServers">
    <td><CopyableCode code="DnsServers" /></td>
    <td><code>object</code></td>
    <td>Information about the DNS servers to be used by Client VPN connections. A Client VPN endpoint can have up to two DNS servers.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EndpointIpAddressType">
    <td><CopyableCode code="EndpointIpAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type for the Client VPN endpoint. Valid values are ipv4 (default) for IPv4 addressing only, ipv6 for IPv6 addressing only, or dual-stack for both IPv4 and IPv6 addressing. When set to dual-stack, clients can connect to the endpoint using either IPv4 or IPv6 addresses..</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. Filter names and values are case-sensitive. endpoint-id - The ID of the Client VPN endpoint. transport-protocol - The transport protocol (tcp | udp).</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of results.</td>
</tr>
<tr id="parameter-RevokeAllGroups">
    <td><CopyableCode code="RevokeAllGroups" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether access should be revoked for all groups for a single TargetNetworkCidr that earlier authorized ingress for all groups using AuthorizeAllGroups. This does not impact other authorization rules that allowed ingress to the same TargetNetworkCidr with a specific AccessGroupId.</td>
</tr>
<tr id="parameter-SecurityGroupId">
    <td><CopyableCode code="SecurityGroupId" /></td>
    <td><code>array</code></td>
    <td>The IDs of one or more security groups to apply to the target network.</td>
</tr>
<tr id="parameter-SelfServicePortal">
    <td><CopyableCode code="SelfServicePortal" /></td>
    <td><code>string</code></td>
    <td>Specify whether to enable the self-service portal for the Client VPN endpoint.</td>
</tr>
<tr id="parameter-ServerCertificateArn">
    <td><CopyableCode code="ServerCertificateArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the server certificate to be used. The server certificate must be provisioned in Certificate Manager (ACM).</td>
</tr>
<tr id="parameter-SessionTimeoutHours">
    <td><CopyableCode code="SessionTimeoutHours" /></td>
    <td><code>integer</code></td>
    <td>The maximum VPN session duration time in hours. Valid values: 8 | 10 | 12 | 24 Default value: 24</td>
</tr>
<tr id="parameter-SplitTunnel">
    <td><CopyableCode code="SplitTunnel" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the VPN is split-tunnel. For information about split-tunnel VPN endpoints, see Split-tunnel Client VPN endpoint in the Client VPN Administrator Guide.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the Client VPN endpoint during creation.</td>
</tr>
<tr id="parameter-TrafficIpAddressType">
    <td><CopyableCode code="TrafficIpAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type for traffic within the Client VPN tunnel. Valid values are ipv4 (default) for IPv4 traffic only, ipv6 for IPv6 addressing only, or dual-stack for both IPv4 and IPv6 traffic. When set to dual-stack, clients can access both IPv4 and IPv6 resources through the VPN .</td>
</tr>
<tr id="parameter-TransitGatewayConfiguration">
    <td><CopyableCode code="TransitGatewayConfiguration" /></td>
    <td><code>object</code></td>
    <td>The Transit Gateway configuration for the Client VPN endpoint. This option is currently not supported.</td>
</tr>
<tr id="parameter-TransportProtocol">
    <td><CopyableCode code="TransportProtocol" /></td>
    <td><code>string</code></td>
    <td>The transport protocol to be used by the VPN session. Default value: udp</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC to associate with the Client VPN endpoint.</td>
</tr>
<tr id="parameter-VpnPort">
    <td><CopyableCode code="VpnPort" /></td>
    <td><code>integer</code></td>
    <td>The port number to assign to the Client VPN endpoint for TCP and UDP traffic. Valid Values: 443 | 1194 Default Value: 443</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_client_vpn_endpoints"
    values={[
        { label: 'describe_client_vpn_endpoints', value: 'describe_client_vpn_endpoints' }
    ]}
>
<TabItem value="describe_client_vpn_endpoints">

Describes one or more Client VPN endpoints in the account.

```sql
SELECT
associated_target_networks,
authentication_options,
client_cidr_block,
client_connect_options,
client_login_banner_options,
client_route_enforcement_options,
client_vpn_endpoint_id,
connection_log_options,
creation_time,
deletion_time,
description,
disconnect_on_session_timeout,
dns_name,
dns_servers,
endpoint_ip_address_type,
security_group_ids,
self_service_portal_url,
server_certificate_arn,
session_timeout_hours,
split_tunnel,
status,
tags,
traffic_ip_address_type,
transit_gateway_configuration,
transport_protocol,
vpc_id,
vpn_port,
vpn_protocol
FROM aws.ec2.client_vpn_endpoints
WHERE region = '{{ region }}' -- required
AND ClientVpnEndpointId = '{{ ClientVpnEndpointId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_client_vpn_endpoint"
    values={[
        { label: 'create_client_vpn_endpoint', value: 'create_client_vpn_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_client_vpn_endpoint">

Creates a Client VPN endpoint. A Client VPN endpoint is the resource you create and configure to enable and manage client VPN sessions. It is the destination endpoint at which all client VPN sessions are terminated.

```sql
INSERT INTO aws.ec2.client_vpn_endpoints (
ServerCertificateArn,
Authentication,
ConnectionLogOptions,
region,
ClientCidrBlock,
DnsServers,
TransportProtocol,
VpnPort,
Description,
SplitTunnel,
DryRun,
ClientToken,
TagSpecification,
SecurityGroupId,
VpcId,
SelfServicePortal,
ClientConnectOptions,
SessionTimeoutHours,
ClientLoginBannerOptions,
ClientRouteEnforcementOptions,
DisconnectOnSessionTimeout,
EndpointIpAddressType,
TrafficIpAddressType,
TransitGatewayConfiguration
)
SELECT 
'{{ ServerCertificateArn }}',
'{{ Authentication }}',
'{{ ConnectionLogOptions }}',
'{{ region }}',
'{{ ClientCidrBlock }}',
'{{ DnsServers }}',
'{{ TransportProtocol }}',
'{{ VpnPort }}',
'{{ Description }}',
'{{ SplitTunnel }}',
'{{ DryRun }}',
'{{ ClientToken }}',
'{{ TagSpecification }}',
'{{ SecurityGroupId }}',
'{{ VpcId }}',
'{{ SelfServicePortal }}',
'{{ ClientConnectOptions }}',
'{{ SessionTimeoutHours }}',
'{{ ClientLoginBannerOptions }}',
'{{ ClientRouteEnforcementOptions }}',
'{{ DisconnectOnSessionTimeout }}',
'{{ EndpointIpAddressType }}',
'{{ TrafficIpAddressType }}',
'{{ TransitGatewayConfiguration }}'
RETURNING
client_vpn_endpoint_id,
dns_name,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: client_vpn_endpoints
  props:
    - name: ServerCertificateArn
      value: "{{ ServerCertificateArn }}"
      description: Required parameter for the client_vpn_endpoints resource.
    - name: Authentication
      value: "{{ Authentication }}"
      description: Required parameter for the client_vpn_endpoints resource.
    - name: ConnectionLogOptions
      value: "{{ ConnectionLogOptions }}"
      description: Required parameter for the client_vpn_endpoints resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the client_vpn_endpoints resource.
    - name: ClientCidrBlock
      value: "{{ ClientCidrBlock }}"
      description: The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. Client CIDR range must have a size of at least /22 and must not be greater than /12.
      description: The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. Client CIDR range must have a size of at least /22 and must not be greater than /12.
    - name: DnsServers
      value: "{{ DnsServers }}"
      description: Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address configured on the device is used for the DNS server.
      description: Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address configured on the device is used for the DNS server.
    - name: TransportProtocol
      value: "{{ TransportProtocol }}"
      description: The transport protocol to be used by the VPN session. Default value: udp
      description: The transport protocol to be used by the VPN session. Default value: udp
    - name: VpnPort
      value: {{ VpnPort }}
      description: The port number to assign to the Client VPN endpoint for TCP and UDP traffic. Valid Values: 443 | 1194 Default Value: 443
      description: The port number to assign to the Client VPN endpoint for TCP and UDP traffic. Valid Values: 443 | 1194 Default Value: 443
    - name: Description
      value: "{{ Description }}"
      description: A brief description of the Client VPN endpoint.
      description: A brief description of the Client VPN endpoint.
    - name: SplitTunnel
      value: {{ SplitTunnel }}
      description: Indicates whether split-tunnel is enabled on the Client VPN endpoint. By default, split-tunnel on a VPN endpoint is disabled. For information about split-tunnel VPN endpoints, see Split-tunnel Client VPN endpoint in the Client VPN Administrator Guide.
      description: Indicates whether split-tunnel is enabled on the Client VPN endpoint. By default, split-tunnel on a VPN endpoint is disabled. For information about split-tunnel VPN endpoints, see Split-tunnel Client VPN endpoint in the Client VPN Administrator Guide.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the Client VPN endpoint during creation.
      description: The tags to apply to the Client VPN endpoint during creation.
    - name: SecurityGroupId
      value: "{{ SecurityGroupId }}"
      description: The IDs of one or more security groups to apply to the target network. You must also specify the ID of the VPC that contains the security groups.
      description: The IDs of one or more security groups to apply to the target network. You must also specify the ID of the VPC that contains the security groups.
    - name: VpcId
      value: "{{ VpcId }}"
      description: The ID of the VPC to associate with the Client VPN endpoint. If no security group IDs are specified in the request, the default security group for the VPC is applied.
      description: The ID of the VPC to associate with the Client VPN endpoint. If no security group IDs are specified in the request, the default security group for the VPC is applied.
    - name: SelfServicePortal
      value: "{{ SelfServicePortal }}"
      description: Specify whether to enable the self-service portal for the Client VPN endpoint. Default Value: enabled
      description: Specify whether to enable the self-service portal for the Client VPN endpoint. Default Value: enabled
    - name: ClientConnectOptions
      value: "{{ ClientConnectOptions }}"
      description: The options for managing connection authorization for new client connections.
      description: The options for managing connection authorization for new client connections.
    - name: SessionTimeoutHours
      value: {{ SessionTimeoutHours }}
      description: The maximum VPN session duration time in hours. Valid values: 8 | 10 | 12 | 24 Default value: 24
      description: The maximum VPN session duration time in hours. Valid values: 8 | 10 | 12 | 24 Default value: 24
    - name: ClientLoginBannerOptions
      value: "{{ ClientLoginBannerOptions }}"
      description: Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is established.
      description: Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is established.
    - name: ClientRouteEnforcementOptions
      value: "{{ ClientRouteEnforcementOptions }}"
      description: Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN. T his feature helps improve your security posture by ensuring that network traffic originating from a connected client is not inadvertently sent outside the VPN tunnel. Client route enforcement works by monitoring the route table of a connected device for routing policy changes to the VPN connection. If the feature detects any VPN routing policy modifications, it will automatically force an update to the route table, reverting it back to the expected route configurations.
      description: Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN. T his feature helps improve your security posture by ensuring that network traffic originating from a connected client is not inadvertently sent outside the VPN tunnel. Client route enforcement works by monitoring the route table of a connected device for routing policy changes to the VPN connection. If the feature detects any VPN routing policy modifications, it will automatically force an update to the route table, reverting it back to the expected route configurations.
    - name: DisconnectOnSessionTimeout
      value: {{ DisconnectOnSessionTimeout }}
      description: Indicates whether the client VPN session is disconnected after the maximum timeout specified in SessionTimeoutHours is reached. If true, users are prompted to reconnect client VPN. If false, client VPN attempts to reconnect automatically. The default value is true.
      description: Indicates whether the client VPN session is disconnected after the maximum timeout specified in SessionTimeoutHours is reached. If true, users are prompted to reconnect client VPN. If false, client VPN attempts to reconnect automatically. The default value is true.
    - name: EndpointIpAddressType
      value: "{{ EndpointIpAddressType }}"
      description: The IP address type for the Client VPN endpoint. Valid values are ipv4 (default) for IPv4 addressing only, ipv6 for IPv6 addressing only, or dual-stack for both IPv4 and IPv6 addressing. When set to dual-stack, clients can connect to the endpoint using either IPv4 or IPv6 addresses..
      description: The IP address type for the Client VPN endpoint. Valid values are ipv4 (default) for IPv4 addressing only, ipv6 for IPv6 addressing only, or dual-stack for both IPv4 and IPv6 addressing. When set to dual-stack, clients can connect to the endpoint using either IPv4 or IPv6 addresses..
    - name: TrafficIpAddressType
      value: "{{ TrafficIpAddressType }}"
      description: The IP address type for traffic within the Client VPN tunnel. Valid values are ipv4 (default) for IPv4 traffic only, ipv6 for IPv6 addressing only, or dual-stack for both IPv4 and IPv6 traffic. When set to dual-stack, clients can access both IPv4 and IPv6 resources through the VPN .
      description: The IP address type for traffic within the Client VPN tunnel. Valid values are ipv4 (default) for IPv4 traffic only, ipv6 for IPv6 addressing only, or dual-stack for both IPv4 and IPv6 traffic. When set to dual-stack, clients can access both IPv4 and IPv6 resources through the VPN .
    - name: TransitGatewayConfiguration
      value: "{{ TransitGatewayConfiguration }}"
      description: The Transit Gateway configuration for the Client VPN endpoint. Use this parameter to associate the endpoint with a Transit Gateway instead of a VPC. You cannot specify both TransitGatewayConfiguration and VpcId/SecurityGroupIds.
      description: The Transit Gateway configuration for the Client VPN endpoint. Use this parameter to associate the endpoint with a Transit Gateway instead of a VPC. You cannot specify both TransitGatewayConfiguration and VpcId/SecurityGroupIds.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="authorize_client_vpn_ingress"
    values={[
        { label: 'authorize_client_vpn_ingress', value: 'authorize_client_vpn_ingress' },
        { label: 'modify_client_vpn_endpoint', value: 'modify_client_vpn_endpoint' }
    ]}
>
<TabItem value="authorize_client_vpn_ingress">

Adds an ingress authorization rule to a Client VPN endpoint. Ingress authorization rules act as firewall rules that grant access to networks. You must configure ingress authorization rules to enable clients to access resources in Amazon Web Services or on-premises networks.

```sql
UPDATE aws.ec2.client_vpn_endpoints
SET 
-- No updatable properties
WHERE 
ClientVpnEndpointId = '{{ ClientVpnEndpointId }}' --required
AND TargetNetworkCidr = '{{ TargetNetworkCidr }}' --required
AND region = '{{ region }}' --required
AND AccessGroupId = '{{ AccessGroupId}}'
AND AuthorizeAllGroups = {{ AuthorizeAllGroups}}
AND Description = '{{ Description}}'
AND ClientToken = '{{ ClientToken}}'
AND DryRun = {{ DryRun}}
RETURNING
code,
message;
```
</TabItem>
<TabItem value="modify_client_vpn_endpoint">

Modifies the specified Client VPN endpoint. Modifying the DNS server resets existing client connections.

```sql
UPDATE aws.ec2.client_vpn_endpoints
SET 
-- No updatable properties
WHERE 
ClientVpnEndpointId = '{{ ClientVpnEndpointId }}' --required
AND region = '{{ region }}' --required
AND ServerCertificateArn = '{{ ServerCertificateArn}}'
AND ConnectionLogOptions = '{{ ConnectionLogOptions}}'
AND DnsServers = '{{ DnsServers}}'
AND VpnPort = '{{ VpnPort}}'
AND Description = '{{ Description}}'
AND SplitTunnel = {{ SplitTunnel}}
AND DryRun = {{ DryRun}}
AND SecurityGroupId = '{{ SecurityGroupId}}'
AND VpcId = '{{ VpcId}}'
AND SelfServicePortal = '{{ SelfServicePortal}}'
AND ClientConnectOptions = '{{ ClientConnectOptions}}'
AND SessionTimeoutHours = '{{ SessionTimeoutHours}}'
AND ClientLoginBannerOptions = '{{ ClientLoginBannerOptions}}'
AND ClientRouteEnforcementOptions = '{{ ClientRouteEnforcementOptions}}'
AND DisconnectOnSessionTimeout = {{ DisconnectOnSessionTimeout}}
AND TransitGatewayConfiguration = '{{ TransitGatewayConfiguration}}'
RETURNING
return;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_client_vpn_endpoint"
    values={[
        { label: 'delete_client_vpn_endpoint', value: 'delete_client_vpn_endpoint' }
    ]}
>
<TabItem value="delete_client_vpn_endpoint">

Deletes the specified Client VPN endpoint. You must disassociate all target networks before you can delete a Client VPN endpoint.

```sql
DELETE FROM aws.ec2.client_vpn_endpoints
WHERE ClientVpnEndpointId = '{{ ClientVpnEndpointId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="apply_security_groups_to_client_vpn_target_network"
    values={[
        { label: 'apply_security_groups_to_client_vpn_target_network', value: 'apply_security_groups_to_client_vpn_target_network' },
        { label: 'export_client_vpn_client_certificate_revocation_list', value: 'export_client_vpn_client_certificate_revocation_list' },
        { label: 'export_client_vpn_client_configuration', value: 'export_client_vpn_client_configuration' },
        { label: 'import_client_vpn_client_certificate_revocation_list', value: 'import_client_vpn_client_certificate_revocation_list' },
        { label: 'revoke_client_vpn_ingress', value: 'revoke_client_vpn_ingress' }
    ]}
>
<TabItem value="apply_security_groups_to_client_vpn_target_network">

Applies a security group to the association between the target network and the Client VPN endpoint. This action replaces the existing security groups with the specified security groups.

```sql
EXEC aws.ec2.client_vpn_endpoints.apply_security_groups_to_client_vpn_target_network 
@ClientVpnEndpointId='{{ ClientVpnEndpointId }}' --required, 
@VpcId='{{ VpcId }}' --required, 
@SecurityGroupId='{{ SecurityGroupId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="export_client_vpn_client_certificate_revocation_list">

Downloads the client certificate revocation list for the specified Client VPN endpoint.

```sql
EXEC aws.ec2.client_vpn_endpoints.export_client_vpn_client_certificate_revocation_list 
@ClientVpnEndpointId='{{ ClientVpnEndpointId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="export_client_vpn_client_configuration">

Downloads the contents of the Client VPN endpoint configuration file for the specified Client VPN endpoint. The Client VPN endpoint configuration file includes the Client VPN endpoint and certificate information clients need to establish a connection with the Client VPN endpoint.

```sql
EXEC aws.ec2.client_vpn_endpoints.export_client_vpn_client_configuration 
@ClientVpnEndpointId='{{ ClientVpnEndpointId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="import_client_vpn_client_certificate_revocation_list">

Uploads a client certificate revocation list to the specified Client VPN endpoint. Uploading a client certificate revocation list overwrites the existing client certificate revocation list. Uploading a client certificate revocation list resets existing client connections.

```sql
EXEC aws.ec2.client_vpn_endpoints.import_client_vpn_client_certificate_revocation_list 
@ClientVpnEndpointId='{{ ClientVpnEndpointId }}' --required, 
@CertificateRevocationList='{{ CertificateRevocationList }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="revoke_client_vpn_ingress">

Removes an ingress authorization rule from a Client VPN endpoint.

```sql
EXEC aws.ec2.client_vpn_endpoints.revoke_client_vpn_ingress 
@ClientVpnEndpointId='{{ ClientVpnEndpointId }}' --required, 
@TargetNetworkCidr='{{ TargetNetworkCidr }}' --required, 
@region='{{ region }}' --required, 
@AccessGroupId='{{ AccessGroupId }}', 
@RevokeAllGroups={{ RevokeAllGroups }}, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
