--- 
title: address
hide_title: false
hide_table_of_contents: false
keywords:
  - address
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

Creates, updates, deletes, gets or lists an <code>address</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="address" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.address" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#allocate_address"><CopyableCode code="allocate_address" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-Address"><code>Address</code></a>, <a href="#parameter-PublicIpv4Pool"><code>PublicIpv4Pool</code></a>, <a href="#parameter-NetworkBorderGroup"><code>NetworkBorderGroup</code></a>, <a href="#parameter-CustomerOwnedIpv4Pool"><code>CustomerOwnedIpv4Pool</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-IpamPoolId"><code>IpamPoolId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Allocates an Elastic IP address to your Amazon Web Services account. After you allocate the Elastic IP address you can associate it with an instance or network interface. After you release an Elastic IP address, it is released to the IP address pool and can be allocated to a different Amazon Web Services account. You can allocate an Elastic IP address from one of the following address pools: Amazon's pool of IPv4 addresses Public IPv4 address range that you own and bring to your Amazon Web Services account using Bring Your Own IP Addresses (BYOIP) An IPv4 IPAM pool with an Amazon-provided or BYOIP public IPv4 address range IPv4 addresses from your on-premises network made available for use with an Outpost using a customer-owned IP address pool (CoIP pool) For more information, see Elastic IP Addresses in the Amazon EC2 User Guide. If you release an Elastic IP address, you might be able to recover it. You cannot recover an Elastic IP address that you released after it is allocated to another Amazon Web Services account. To attempt to recover an Elastic IP address that you released, specify it in this operation. You can allocate a carrier IP address which is a public IP address from a telecommunication carrier, to a network interface which resides in a subnet in a Wavelength Zone (for example an EC2 instance).</td>
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
    <td><code>string</code></td>
    <td>The primary or secondary private IP address to associate with the Elastic IP address. If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.</td>
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
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the Elastic IP address.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="allocate_address"
    values={[
        { label: 'allocate_address', value: 'allocate_address' }
    ]}
>
<TabItem value="allocate_address">

Allocates an Elastic IP address to your Amazon Web Services account. After you allocate the Elastic IP address you can associate it with an instance or network interface. After you release an Elastic IP address, it is released to the IP address pool and can be allocated to a different Amazon Web Services account. You can allocate an Elastic IP address from one of the following address pools: Amazon's pool of IPv4 addresses Public IPv4 address range that you own and bring to your Amazon Web Services account using Bring Your Own IP Addresses (BYOIP) An IPv4 IPAM pool with an Amazon-provided or BYOIP public IPv4 address range IPv4 addresses from your on-premises network made available for use with an Outpost using a customer-owned IP address pool (CoIP pool) For more information, see Elastic IP Addresses in the Amazon EC2 User Guide. If you release an Elastic IP address, you might be able to recover it. You cannot recover an Elastic IP address that you released after it is allocated to another Amazon Web Services account. To attempt to recover an Elastic IP address that you released, specify it in this operation. You can allocate a carrier IP address which is a public IP address from a telecommunication carrier, to a network interface which resides in a subnet in a Wavelength Zone (for example an EC2 instance).

```sql
UPDATE aws.ec2.address
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
AllocationId,
CarrierIp,
CustomerOwnedIp,
CustomerOwnedIpv4Pool,
Domain,
NetworkBorderGroup,
PublicIp,
PublicIpv4Pool;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="associate_address"
    values={[
        { label: 'associate_address', value: 'associate_address' },
        { label: 'disassociate_address', value: 'disassociate_address' },
        { label: 'release_address', value: 'release_address' }
    ]}
>
<TabItem value="associate_address">

Associates an Elastic IP address, or carrier IP address (for instances that are in subnets in Wavelength Zones) with an instance or a network interface. Before you can use an Elastic IP address, you must allocate it to your account. If the Elastic IP address is already associated with a different instance, it is disassociated from that instance and associated with the specified instance. If you associate an Elastic IP address with an instance that has an existing Elastic IP address, the existing address is disassociated from the instance, but remains allocated to your account. [Subnets in Wavelength Zones] You can associate an IP address from the telecommunication carrier to the instance or network interface. You cannot associate an Elastic IP address with an interface in a different network border group. This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error, and you may be charged for each time the Elastic IP address is remapped to the same instance. For more information, see the Elastic IP Addresses section of Amazon EC2 Pricing.

```sql
EXEC aws.ec2.address.associate_address 
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
EXEC aws.ec2.address.disassociate_address 
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
EXEC aws.ec2.address.release_address 
@region='{{ region }}' --required, 
@AllocationId='{{ AllocationId }}', 
@PublicIp='{{ PublicIp }}', 
@NetworkBorderGroup='{{ NetworkBorderGroup }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
