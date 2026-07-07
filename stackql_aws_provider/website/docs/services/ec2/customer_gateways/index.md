--- 
title: customer_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - customer_gateways
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

Creates, updates, deletes, gets or lists a <code>customer_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="customer_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.customer_gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_customer_gateways"
    values={[
        { label: 'describe_customer_gateways', value: 'describe_customer_gateways' }
    ]}
>
<TabItem value="describe_customer_gateways">

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
    <td><CopyableCode code="BgpAsn" /></td>
    <td><code>string</code></td>
    <td>The customer gateway device's Border Gateway Protocol (BGP) Autonomous System Number (ASN). Valid values: 1 to 2,147,483,647</td>
</tr>
<tr>
    <td><CopyableCode code="BgpAsnExtended" /></td>
    <td><code>string</code></td>
    <td>The customer gateway device's Border Gateway Protocol (BGP) Autonomous System Number (ASN). Valid values: 2,147,483,648 to 4,294,967,295</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the customer gateway certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomerGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the customer gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceName" /></td>
    <td><code>string</code></td>
    <td>The name of customer gateway device.</td>
</tr>
<tr>
    <td><CopyableCode code="IpAddress" /></td>
    <td><code>string</code></td>
    <td>The IP address for the customer gateway device's outside interface. The address must be static. If OutsideIpAddressType in your VPN connection options is set to PrivateIpv4, you can use an RFC6598 or RFC1918 private IPv4 address. If OutsideIpAddressType is set to PublicIpv4, you can use a public IPv4 address. If OutsideIpAddressType is set to Ipv6, you can use a public IPv6 address.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the customer gateway (pending | available | deleting | deleted).</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the customer gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of VPN connection the customer gateway supports (ipsec.1).</td>
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
    <td><a href="#describe_customer_gateways"><CopyableCode code="describe_customer_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CustomerGatewayId"><code>CustomerGatewayId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more of your VPN customer gateways. For more information, see Amazon Web Services Site-to-Site VPN in the Amazon Web Services Site-to-Site VPN User Guide.</td>
</tr>
<tr>
    <td><a href="#create_customer_gateway"><CopyableCode code="create_customer_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-BgpAsn"><code>BgpAsn</code></a>, <a href="#parameter-PublicIp"><code>PublicIp</code></a>, <a href="#parameter-CertificateArn"><code>CertificateArn</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DeviceName"><code>DeviceName</code></a>, <a href="#parameter-IpAddress"><code>IpAddress</code></a>, <a href="#parameter-BgpAsnExtended"><code>BgpAsnExtended</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Provides information to Amazon Web Services about your customer gateway device. The customer gateway device is the appliance at your end of the VPN connection. You must provide the IP address of the customer gateway device’s external interface. The IP address must be static and can be behind a device performing network address translation (NAT). For devices that use Border Gateway Protocol (BGP), you can also provide the device's BGP Autonomous System Number (ASN). You can use an existing ASN assigned to your network. If you don't have an ASN already, you can use a private ASN. For more information, see Customer gateway options for your Site-to-Site VPN connection in the Amazon Web Services Site-to-Site VPN User Guide. To create more than one customer gateway with the same VPN type, IP address, and BGP ASN, specify a unique device name for each customer gateway. An identical request returns information about the existing customer gateway; it doesn't create a new customer gateway.</td>
</tr>
<tr>
    <td><a href="#delete_customer_gateway"><CopyableCode code="delete_customer_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-CustomerGatewayId"><code>CustomerGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified customer gateway. You must delete the VPN connection before you can delete the customer gateway.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-BgpAsn">
    <td><CopyableCode code="BgpAsn" /></td>
    <td><code>integer</code></td>
    <td>For customer gateway devices that support BGP, specify the device's ASN. You must specify either BgpAsn or BgpAsnExtended when creating the customer gateway. If the ASN is larger than 2,147,483,647, you must use BgpAsnExtended. Default: 65000 Valid values: 1 to 2,147,483,647</td>
</tr>
<tr id="parameter-BgpAsnExtended">
    <td><CopyableCode code="BgpAsnExtended" /></td>
    <td><code>integer (int64)</code></td>
    <td>For customer gateway devices that support BGP, specify the device's ASN. You must specify either BgpAsn or BgpAsnExtended when creating the customer gateway. If the ASN is larger than 2,147,483,647, you must use BgpAsnExtended. Valid values: 2,147,483,648 to 4,294,967,295</td>
</tr>
<tr id="parameter-CertificateArn">
    <td><CopyableCode code="CertificateArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the customer gateway certificate.</td>
</tr>
<tr id="parameter-CustomerGatewayId">
    <td><CopyableCode code="CustomerGatewayId" /></td>
    <td><code>array</code></td>
    <td>One or more customer gateway IDs. Default: Describes all your customer gateways.</td>
</tr>
<tr id="parameter-DeviceName">
    <td><CopyableCode code="DeviceName" /></td>
    <td><code>string</code></td>
    <td>A name for the customer gateway device. Length Constraints: Up to 255 characters.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. bgp-asn - The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN). customer-gateway-id - The ID of the customer gateway. ip-address - The IP address of the customer gateway device's external interface. state - The state of the customer gateway (pending | available | deleting | deleted). type - The type of customer gateway. Currently, the only supported type is ipsec.1. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</td>
</tr>
<tr id="parameter-IpAddress">
    <td><CopyableCode code="IpAddress" /></td>
    <td><code>string</code></td>
    <td>The IP address for the customer gateway device's outside interface. The address must be static. If OutsideIpAddressType in your VPN connection options is set to PrivateIpv4, you can use an RFC6598 or RFC1918 private IPv4 address. If OutsideIpAddressType is set to Ipv6, you can use an IPv6 address.</td>
</tr>
<tr id="parameter-PublicIp">
    <td><CopyableCode code="PublicIp" /></td>
    <td><code>string</code></td>
    <td>This member has been deprecated. The Internet-routable IP address for the customer gateway's outside interface. The address must be static.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the customer gateway.</td>
</tr>
<tr id="parameter-Type">
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of VPN connection that this customer gateway supports (ipsec.1).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_customer_gateways"
    values={[
        { label: 'describe_customer_gateways', value: 'describe_customer_gateways' }
    ]}
>
<TabItem value="describe_customer_gateways">

Describes one or more of your VPN customer gateways. For more information, see Amazon Web Services Site-to-Site VPN in the Amazon Web Services Site-to-Site VPN User Guide.

```sql
SELECT
BgpAsn,
BgpAsnExtended,
CertificateArn,
CustomerGatewayId,
DeviceName,
IpAddress,
State,
Tags,
Type
FROM aws.ec2.customer_gateways
WHERE region = '{{ region }}' -- required
AND CustomerGatewayId = '{{ CustomerGatewayId }}'
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_customer_gateway"
    values={[
        { label: 'create_customer_gateway', value: 'create_customer_gateway' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_customer_gateway">

Provides information to Amazon Web Services about your customer gateway device. The customer gateway device is the appliance at your end of the VPN connection. You must provide the IP address of the customer gateway device’s external interface. The IP address must be static and can be behind a device performing network address translation (NAT). For devices that use Border Gateway Protocol (BGP), you can also provide the device's BGP Autonomous System Number (ASN). You can use an existing ASN assigned to your network. If you don't have an ASN already, you can use a private ASN. For more information, see Customer gateway options for your Site-to-Site VPN connection in the Amazon Web Services Site-to-Site VPN User Guide. To create more than one customer gateway with the same VPN type, IP address, and BGP ASN, specify a unique device name for each customer gateway. An identical request returns information about the existing customer gateway; it doesn't create a new customer gateway.

```sql
INSERT INTO aws.ec2.customer_gateways (
region,
BgpAsn,
PublicIp,
CertificateArn,
Type,
TagSpecification,
DeviceName,
IpAddress,
BgpAsnExtended,
DryRun
)
SELECT 
'{{ region }}',
'{{ BgpAsn }}',
'{{ PublicIp }}',
'{{ CertificateArn }}',
'{{ Type }}',
'{{ TagSpecification }}',
'{{ DeviceName }}',
'{{ IpAddress }}',
'{{ BgpAsnExtended }}',
'{{ DryRun }}'
RETURNING
BgpAsn,
BgpAsnExtended,
CertificateArn,
CustomerGatewayId,
DeviceName,
IpAddress,
State,
Tags,
Type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: customer_gateways
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the customer_gateways resource.
    - name: BgpAsn
      value: {{ BgpAsn }}
      description: For customer gateway devices that support BGP, specify the device's ASN. You must specify either BgpAsn or BgpAsnExtended when creating the customer gateway. If the ASN is larger than 2,147,483,647, you must use BgpAsnExtended. Default: 65000 Valid values: 1 to 2,147,483,647
      description: For customer gateway devices that support BGP, specify the device's ASN. You must specify either BgpAsn or BgpAsnExtended when creating the customer gateway. If the ASN is larger than 2,147,483,647, you must use BgpAsnExtended. Default: 65000 Valid values: 1 to 2,147,483,647
    - name: PublicIp
      value: "{{ PublicIp }}"
      description: This member has been deprecated. The Internet-routable IP address for the customer gateway's outside interface. The address must be static.
      description: This member has been deprecated. The Internet-routable IP address for the customer gateway's outside interface. The address must be static.
    - name: CertificateArn
      value: "{{ CertificateArn }}"
      description: The Amazon Resource Name (ARN) for the customer gateway certificate.
      description: The Amazon Resource Name (ARN) for the customer gateway certificate.
    - name: Type
      value: "{{ Type }}"
      description: The type of VPN connection that this customer gateway supports (ipsec.1).
      description: The type of VPN connection that this customer gateway supports (ipsec.1).
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the customer gateway.
      description: The tags to apply to the customer gateway.
    - name: DeviceName
      value: "{{ DeviceName }}"
      description: A name for the customer gateway device. Length Constraints: Up to 255 characters.
      description: A name for the customer gateway device. Length Constraints: Up to 255 characters.
    - name: IpAddress
      value: "{{ IpAddress }}"
      description: The IP address for the customer gateway device's outside interface. The address must be static. If OutsideIpAddressType in your VPN connection options is set to PrivateIpv4, you can use an RFC6598 or RFC1918 private IPv4 address. If OutsideIpAddressType is set to Ipv6, you can use an IPv6 address.
      description: The IP address for the customer gateway device's outside interface. The address must be static. If OutsideIpAddressType in your VPN connection options is set to PrivateIpv4, you can use an RFC6598 or RFC1918 private IPv4 address. If OutsideIpAddressType is set to Ipv6, you can use an IPv6 address.
    - name: BgpAsnExtended
      value: "{{ BgpAsnExtended }}"
      description: For customer gateway devices that support BGP, specify the device's ASN. You must specify either BgpAsn or BgpAsnExtended when creating the customer gateway. If the ASN is larger than 2,147,483,647, you must use BgpAsnExtended. Valid values: 2,147,483,648 to 4,294,967,295
      description: For customer gateway devices that support BGP, specify the device's ASN. You must specify either BgpAsn or BgpAsnExtended when creating the customer gateway. If the ASN is larger than 2,147,483,647, you must use BgpAsnExtended. Valid values: 2,147,483,648 to 4,294,967,295
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_customer_gateway"
    values={[
        { label: 'delete_customer_gateway', value: 'delete_customer_gateway' }
    ]}
>
<TabItem value="delete_customer_gateway">

Deletes the specified customer gateway. You must delete the VPN connection before you can delete the customer gateway.

```sql
DELETE FROM aws.ec2.customer_gateways
WHERE CustomerGatewayId = '{{ CustomerGatewayId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
