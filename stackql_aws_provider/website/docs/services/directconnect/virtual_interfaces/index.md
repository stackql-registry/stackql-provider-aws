--- 
title: virtual_interfaces
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_interfaces
  - directconnect
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

Creates, updates, deletes, gets or lists a <code>virtual_interfaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_interfaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.directconnect.virtual_interfaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_virtual_interfaces"
    values={[
        { label: 'describe_virtual_interfaces', value: 'describe_virtual_interfaces' }
    ]}
>
<TabItem value="describe_virtual_interfaces">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_interfaces" /></td>
    <td><code>array</code></td>
    <td>The virtual interfaces</td>
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
    <td><a href="#describe_virtual_interfaces"><CopyableCode code="describe_virtual_interfaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned. A virtual interface (VLAN) transmits the traffic between the Direct Connect location and the customer network. If you're using an asn, the response includes ASN value in both the asn and asnLong fields. If you're using asnLong, the response returns a value of 0 (zero) for the asn attribute because it exceeds the highest ASN value of 2,147,483,647 that it can support</td>
</tr>
<tr>
    <td><a href="#create_private_virtual_interface"><CopyableCode code="create_private_virtual_interface" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionId"><code>connectionId</code></a>, <a href="#parameter-newPrivateVirtualInterface"><code>newPrivateVirtualInterface</code></a></td>
    <td></td>
    <td>Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call DescribeVirtualInterfaces.</td>
</tr>
<tr>
    <td><a href="#create_public_virtual_interface"><CopyableCode code="create_public_virtual_interface" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionId"><code>connectionId</code></a>, <a href="#parameter-newPublicVirtualInterface"><code>newPublicVirtualInterface</code></a></td>
    <td></td>
    <td>Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3. When creating an IPv6 public virtual interface (addressFamily is ipv6), leave the customer and amazon address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</td>
</tr>
<tr>
    <td><a href="#create_transit_virtual_interface"><CopyableCode code="create_transit_virtual_interface" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionId"><code>connectionId</code></a>, <a href="#parameter-newTransitVirtualInterface"><code>newTransitVirtualInterface</code></a></td>
    <td></td>
    <td>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway. If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails. A jumbo MTU value must be either 1500 or 8500. No other values will be accepted. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call DescribeVirtualInterfaces.</td>
</tr>
<tr>
    <td><a href="#allocate_private_virtual_interface"><CopyableCode code="allocate_private_virtual_interface" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionId"><code>connectionId</code></a>, <a href="#parameter-ownerAccount"><code>ownerAccount</code></a>, <a href="#parameter-newPrivateVirtualInterfaceAllocation"><code>newPrivateVirtualInterfaceAllocation</code></a></td>
    <td></td>
    <td>Provisions a private virtual interface to be owned by the specified Amazon Web Services account. Virtual interfaces created using this action must be confirmed by the owner using ConfirmPrivateVirtualInterface. Until then, the virtual interface is in the Confirming state and is not available to handle traffic.</td>
</tr>
<tr>
    <td><a href="#allocate_public_virtual_interface"><CopyableCode code="allocate_public_virtual_interface" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionId"><code>connectionId</code></a>, <a href="#parameter-ownerAccount"><code>ownerAccount</code></a>, <a href="#parameter-newPublicVirtualInterfaceAllocation"><code>newPublicVirtualInterfaceAllocation</code></a></td>
    <td></td>
    <td>Provisions a public virtual interface to be owned by the specified Amazon Web Services account. The owner of a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web Services account. Virtual interfaces created using this function must be confirmed by the owner using ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface is in the confirming state and is not available to handle traffic. When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</td>
</tr>
<tr>
    <td><a href="#allocate_transit_virtual_interface"><CopyableCode code="allocate_transit_virtual_interface" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionId"><code>connectionId</code></a>, <a href="#parameter-ownerAccount"><code>ownerAccount</code></a>, <a href="#parameter-newTransitVirtualInterfaceAllocation"><code>newTransitVirtualInterfaceAllocation</code></a></td>
    <td></td>
    <td>Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this type of interface to connect a transit gateway to your Direct Connect gateway. The owner of a connection provisions a transit virtual interface to be owned by the specified Amazon Web Services account. After you create a transit virtual interface, it must be confirmed by the owner using ConfirmTransitVirtualInterface. Until this step has been completed, the transit virtual interface is in the requested state and is not available to handle traffic.</td>
</tr>
<tr>
    <td><a href="#associate_virtual_interface"><CopyableCode code="associate_virtual_interface" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-virtualInterfaceId"><code>virtualInterfaceId</code></a>, <a href="#parameter-connectionId"><code>connectionId</code></a></td>
    <td></td>
    <td>Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to Amazon Web Services is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails. Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using AssociateHostedConnection. To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.</td>
</tr>
<tr>
    <td><a href="#update_virtual_interface_attributes"><CopyableCode code="update_virtual_interface_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-virtualInterfaceId"><code>virtualInterfaceId</code></a></td>
    <td></td>
    <td>Updates the specified attributes of the specified virtual private interface. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call DescribeVirtualInterfaces.</td>
</tr>
<tr>
    <td><a href="#delete_virtual_interface"><CopyableCode code="delete_virtual_interface" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a virtual interface.</td>
</tr>
<tr>
    <td><a href="#confirm_private_virtual_interface"><CopyableCode code="confirm_private_virtual_interface" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-virtualInterfaceId"><code>virtualInterfaceId</code></a></td>
    <td></td>
    <td>Accepts ownership of a private virtual interface created by another Amazon Web Services account. After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.</td>
</tr>
<tr>
    <td><a href="#confirm_public_virtual_interface"><CopyableCode code="confirm_public_virtual_interface" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-virtualInterfaceId"><code>virtualInterfaceId</code></a></td>
    <td></td>
    <td>Accepts ownership of a public virtual interface created by another Amazon Web Services account. After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.</td>
</tr>
<tr>
    <td><a href="#start_bgp_failover_test"><CopyableCode code="start_bgp_failover_test" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-virtualInterfaceId"><code>virtualInterfaceId</code></a></td>
    <td></td>
    <td>Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages. You can run the test on public, private, transit, and hosted virtual interfaces. You can use ListVirtualInterfaceTestHistory to view the virtual interface test history. If you need to stop the test before the test interval completes, use StopBgpFailoverTest.</td>
</tr>
<tr>
    <td><a href="#stop_bgp_failover_test"><CopyableCode code="stop_bgp_failover_test" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-virtualInterfaceId"><code>virtualInterfaceId</code></a></td>
    <td></td>
    <td>Stops the virtual interface failover test.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_virtual_interfaces"
    values={[
        { label: 'describe_virtual_interfaces', value: 'describe_virtual_interfaces' }
    ]}
>
<TabItem value="describe_virtual_interfaces">

Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned. A virtual interface (VLAN) transmits the traffic between the Direct Connect location and the customer network. If you're using an asn, the response includes ASN value in both the asn and asnLong fields. If you're using asnLong, the response returns a value of 0 (zero) for the asn attribute because it exceeds the highest ASN value of 2,147,483,647 that it can support

```sql
SELECT
next_token,
virtual_interfaces
FROM aws.directconnect.virtual_interfaces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_private_virtual_interface"
    values={[
        { label: 'create_private_virtual_interface', value: 'create_private_virtual_interface' },
        { label: 'create_public_virtual_interface', value: 'create_public_virtual_interface' },
        { label: 'create_transit_virtual_interface', value: 'create_transit_virtual_interface' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_private_virtual_interface">

Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call DescribeVirtualInterfaces.

```sql
INSERT INTO aws.directconnect.virtual_interfaces (
connectionId,
newPrivateVirtualInterface,
region
)
SELECT 
'{{ connectionId }}' /* required */,
'{{ newPrivateVirtualInterface }}' /* required */,
'{{ region }}'
RETURNING
address_family,
amazon_address,
amazon_side_asn,
asn,
asn_long,
auth_key,
aws_device_v2,
aws_logical_device_id,
bgp_peers,
connection_id,
customer_address,
customer_router_config,
direct_connect_gateway_id,
jumbo_frame_capable,
location,
mtu,
owner_account,
region,
route_filter_prefixes,
site_link_enabled,
tags,
virtual_gateway_id,
virtual_interface_id,
virtual_interface_name,
virtual_interface_state,
virtual_interface_type,
vlan
;
```
</TabItem>
<TabItem value="create_public_virtual_interface">

Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3. When creating an IPv6 public virtual interface (addressFamily is ipv6), leave the customer and amazon address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.

```sql
INSERT INTO aws.directconnect.virtual_interfaces (
connectionId,
newPublicVirtualInterface,
region
)
SELECT 
'{{ connectionId }}' /* required */,
'{{ newPublicVirtualInterface }}' /* required */,
'{{ region }}'
RETURNING
address_family,
amazon_address,
amazon_side_asn,
asn,
asn_long,
auth_key,
aws_device_v2,
aws_logical_device_id,
bgp_peers,
connection_id,
customer_address,
customer_router_config,
direct_connect_gateway_id,
jumbo_frame_capable,
location,
mtu,
owner_account,
region,
route_filter_prefixes,
site_link_enabled,
tags,
virtual_gateway_id,
virtual_interface_id,
virtual_interface_name,
virtual_interface_state,
virtual_interface_type,
vlan
;
```
</TabItem>
<TabItem value="create_transit_virtual_interface">

Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway. If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails. A jumbo MTU value must be either 1500 or 8500. No other values will be accepted. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call DescribeVirtualInterfaces.

```sql
INSERT INTO aws.directconnect.virtual_interfaces (
connectionId,
newTransitVirtualInterface,
region
)
SELECT 
'{{ connectionId }}' /* required */,
'{{ newTransitVirtualInterface }}' /* required */,
'{{ region }}'
RETURNING
virtual_interface
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: virtual_interfaces
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the virtual_interfaces resource.
    - name: connectionId
      value: "{{ connectionId }}"
      description: |
        The ID of the connection.
    - name: newPrivateVirtualInterface
      description: |
        Information about the private virtual interface.
      value:
        virtualInterfaceName: "{{ virtualInterfaceName }}"
        vlan: {{ vlan }}
        asn: {{ asn }}
        asnLong: {{ asnLong }}
        mtu: {{ mtu }}
        authKey: "{{ authKey }}"
        amazonAddress: "{{ amazonAddress }}"
        customerAddress: "{{ customerAddress }}"
        addressFamily: "{{ addressFamily }}"
        virtualGatewayId: "{{ virtualGatewayId }}"
        directConnectGatewayId: "{{ directConnectGatewayId }}"
        tags:
          - key: "{{ key }}"
            value: "{{ value }}"
        enableSiteLink: {{ enableSiteLink }}
    - name: newPublicVirtualInterface
      description: |
        Information about the public virtual interface.
      value:
        virtualInterfaceName: "{{ virtualInterfaceName }}"
        vlan: {{ vlan }}
        asn: {{ asn }}
        asnLong: {{ asnLong }}
        authKey: "{{ authKey }}"
        amazonAddress: "{{ amazonAddress }}"
        customerAddress: "{{ customerAddress }}"
        addressFamily: "{{ addressFamily }}"
        routeFilterPrefixes:
          - cidr: "{{ cidr }}"
        tags:
          - key: "{{ key }}"
            value: "{{ value }}"
    - name: newTransitVirtualInterface
      description: |
        Information about the transit virtual interface.
      value:
        virtualInterfaceName: "{{ virtualInterfaceName }}"
        vlan: {{ vlan }}
        asn: {{ asn }}
        asnLong: {{ asnLong }}
        mtu: {{ mtu }}
        authKey: "{{ authKey }}"
        amazonAddress: "{{ amazonAddress }}"
        customerAddress: "{{ customerAddress }}"
        addressFamily: "{{ addressFamily }}"
        directConnectGatewayId: "{{ directConnectGatewayId }}"
        tags:
          - key: "{{ key }}"
            value: "{{ value }}"
        enableSiteLink: {{ enableSiteLink }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="allocate_private_virtual_interface"
    values={[
        { label: 'allocate_private_virtual_interface', value: 'allocate_private_virtual_interface' },
        { label: 'allocate_public_virtual_interface', value: 'allocate_public_virtual_interface' },
        { label: 'allocate_transit_virtual_interface', value: 'allocate_transit_virtual_interface' },
        { label: 'associate_virtual_interface', value: 'associate_virtual_interface' },
        { label: 'update_virtual_interface_attributes', value: 'update_virtual_interface_attributes' }
    ]}
>
<TabItem value="allocate_private_virtual_interface">

Provisions a private virtual interface to be owned by the specified Amazon Web Services account. Virtual interfaces created using this action must be confirmed by the owner using ConfirmPrivateVirtualInterface. Until then, the virtual interface is in the Confirming state and is not available to handle traffic.

```sql
UPDATE aws.directconnect.virtual_interfaces
SET 
connectionId = '{{ connectionId }}',
ownerAccount = '{{ ownerAccount }}',
newPrivateVirtualInterfaceAllocation = '{{ newPrivateVirtualInterfaceAllocation }}'
WHERE 
region = '{{ region }}' --required
AND connectionId = '{{ connectionId }}' --required
AND ownerAccount = '{{ ownerAccount }}' --required
AND newPrivateVirtualInterfaceAllocation = '{{ newPrivateVirtualInterfaceAllocation }}' --required
RETURNING
address_family,
amazon_address,
amazon_side_asn,
asn,
asn_long,
auth_key,
aws_device_v2,
aws_logical_device_id,
bgp_peers,
connection_id,
customer_address,
customer_router_config,
direct_connect_gateway_id,
jumbo_frame_capable,
location,
mtu,
owner_account,
region,
route_filter_prefixes,
site_link_enabled,
tags,
virtual_gateway_id,
virtual_interface_id,
virtual_interface_name,
virtual_interface_state,
virtual_interface_type,
vlan;
```
</TabItem>
<TabItem value="allocate_public_virtual_interface">

Provisions a public virtual interface to be owned by the specified Amazon Web Services account. The owner of a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web Services account. Virtual interfaces created using this function must be confirmed by the owner using ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface is in the confirming state and is not available to handle traffic. When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.

```sql
UPDATE aws.directconnect.virtual_interfaces
SET 
connectionId = '{{ connectionId }}',
ownerAccount = '{{ ownerAccount }}',
newPublicVirtualInterfaceAllocation = '{{ newPublicVirtualInterfaceAllocation }}'
WHERE 
region = '{{ region }}' --required
AND connectionId = '{{ connectionId }}' --required
AND ownerAccount = '{{ ownerAccount }}' --required
AND newPublicVirtualInterfaceAllocation = '{{ newPublicVirtualInterfaceAllocation }}' --required
RETURNING
address_family,
amazon_address,
amazon_side_asn,
asn,
asn_long,
auth_key,
aws_device_v2,
aws_logical_device_id,
bgp_peers,
connection_id,
customer_address,
customer_router_config,
direct_connect_gateway_id,
jumbo_frame_capable,
location,
mtu,
owner_account,
region,
route_filter_prefixes,
site_link_enabled,
tags,
virtual_gateway_id,
virtual_interface_id,
virtual_interface_name,
virtual_interface_state,
virtual_interface_type,
vlan;
```
</TabItem>
<TabItem value="allocate_transit_virtual_interface">

Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this type of interface to connect a transit gateway to your Direct Connect gateway. The owner of a connection provisions a transit virtual interface to be owned by the specified Amazon Web Services account. After you create a transit virtual interface, it must be confirmed by the owner using ConfirmTransitVirtualInterface. Until this step has been completed, the transit virtual interface is in the requested state and is not available to handle traffic.

```sql
UPDATE aws.directconnect.virtual_interfaces
SET 
connectionId = '{{ connectionId }}',
ownerAccount = '{{ ownerAccount }}',
newTransitVirtualInterfaceAllocation = '{{ newTransitVirtualInterfaceAllocation }}'
WHERE 
region = '{{ region }}' --required
AND connectionId = '{{ connectionId }}' --required
AND ownerAccount = '{{ ownerAccount }}' --required
AND newTransitVirtualInterfaceAllocation = '{{ newTransitVirtualInterfaceAllocation }}' --required
RETURNING
virtual_interface;
```
</TabItem>
<TabItem value="associate_virtual_interface">

Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to Amazon Web Services is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails. Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using AssociateHostedConnection. To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.

```sql
UPDATE aws.directconnect.virtual_interfaces
SET 
virtualInterfaceId = '{{ virtualInterfaceId }}',
connectionId = '{{ connectionId }}'
WHERE 
region = '{{ region }}' --required
AND virtualInterfaceId = '{{ virtualInterfaceId }}' --required
AND connectionId = '{{ connectionId }}' --required
RETURNING
address_family,
amazon_address,
amazon_side_asn,
asn,
asn_long,
auth_key,
aws_device_v2,
aws_logical_device_id,
bgp_peers,
connection_id,
customer_address,
customer_router_config,
direct_connect_gateway_id,
jumbo_frame_capable,
location,
mtu,
owner_account,
region,
route_filter_prefixes,
site_link_enabled,
tags,
virtual_gateway_id,
virtual_interface_id,
virtual_interface_name,
virtual_interface_state,
virtual_interface_type,
vlan;
```
</TabItem>
<TabItem value="update_virtual_interface_attributes">

Updates the specified attributes of the specified virtual private interface. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call DescribeVirtualInterfaces.

```sql
UPDATE aws.directconnect.virtual_interfaces
SET 
virtualInterfaceId = '{{ virtualInterfaceId }}',
mtu = {{ mtu }},
enableSiteLink = {{ enableSiteLink }},
virtualInterfaceName = '{{ virtualInterfaceName }}'
WHERE 
region = '{{ region }}' --required
AND virtualInterfaceId = '{{ virtualInterfaceId }}' --required
RETURNING
address_family,
amazon_address,
amazon_side_asn,
asn,
asn_long,
auth_key,
aws_device_v2,
aws_logical_device_id,
bgp_peers,
connection_id,
customer_address,
customer_router_config,
direct_connect_gateway_id,
jumbo_frame_capable,
location,
mtu,
owner_account,
region,
route_filter_prefixes,
site_link_enabled,
tags,
virtual_gateway_id,
virtual_interface_id,
virtual_interface_name,
virtual_interface_state,
virtual_interface_type,
vlan;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_virtual_interface"
    values={[
        { label: 'delete_virtual_interface', value: 'delete_virtual_interface' }
    ]}
>
<TabItem value="delete_virtual_interface">

Deletes a virtual interface.

```sql
DELETE FROM aws.directconnect.virtual_interfaces
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="confirm_private_virtual_interface"
    values={[
        { label: 'confirm_private_virtual_interface', value: 'confirm_private_virtual_interface' },
        { label: 'confirm_public_virtual_interface', value: 'confirm_public_virtual_interface' },
        { label: 'start_bgp_failover_test', value: 'start_bgp_failover_test' },
        { label: 'stop_bgp_failover_test', value: 'stop_bgp_failover_test' }
    ]}
>
<TabItem value="confirm_private_virtual_interface">

Accepts ownership of a private virtual interface created by another Amazon Web Services account. After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.

```sql
EXEC aws.directconnect.virtual_interfaces.confirm_private_virtual_interface 
@region='{{ region }}' --required 
@@json=
'{
"virtualInterfaceId": "{{ virtualInterfaceId }}", 
"virtualGatewayId": "{{ virtualGatewayId }}", 
"directConnectGatewayId": "{{ directConnectGatewayId }}"
}'
;
```
</TabItem>
<TabItem value="confirm_public_virtual_interface">

Accepts ownership of a public virtual interface created by another Amazon Web Services account. After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.

```sql
EXEC aws.directconnect.virtual_interfaces.confirm_public_virtual_interface 
@region='{{ region }}' --required 
@@json=
'{
"virtualInterfaceId": "{{ virtualInterfaceId }}"
}'
;
```
</TabItem>
<TabItem value="start_bgp_failover_test">

Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages. You can run the test on public, private, transit, and hosted virtual interfaces. You can use ListVirtualInterfaceTestHistory to view the virtual interface test history. If you need to stop the test before the test interval completes, use StopBgpFailoverTest.

```sql
EXEC aws.directconnect.virtual_interfaces.start_bgp_failover_test 
@region='{{ region }}' --required 
@@json=
'{
"virtualInterfaceId": "{{ virtualInterfaceId }}", 
"bgpPeers": "{{ bgpPeers }}", 
"testDurationInMinutes": {{ testDurationInMinutes }}
}'
;
```
</TabItem>
<TabItem value="stop_bgp_failover_test">

Stops the virtual interface failover test.

```sql
EXEC aws.directconnect.virtual_interfaces.stop_bgp_failover_test 
@region='{{ region }}' --required 
@@json=
'{
"virtualInterfaceId": "{{ virtualInterfaceId }}"
}'
;
```
</TabItem>
</Tabs>
