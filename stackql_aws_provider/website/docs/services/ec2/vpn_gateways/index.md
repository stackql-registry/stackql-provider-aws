--- 
title: vpn_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - vpn_gateways
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

Creates, updates, deletes, gets or lists a <code>vpn_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpn_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpn_gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpn_gateways"
    values={[
        { label: 'describe_vpn_gateways', value: 'describe_vpn_gateways' }
    ]}
>
<TabItem value="describe_vpn_gateways">

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
    <td><CopyableCode code="AmazonSideAsn" /></td>
    <td><code>integer</code></td>
    <td>The private Autonomous System Number (ASN) for the Amazon side of a BGP session.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone where the virtual private gateway was created, if applicable. This field may be empty or not returned.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the virtual private gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the virtual private gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of VPN connection the virtual private gateway supports.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcAttachments" /></td>
    <td><code>string</code></td>
    <td>Any VPCs attached to the virtual private gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="VpnGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual private gateway.</td>
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
    <td><a href="#describe_vpn_gateways"><CopyableCode code="describe_vpn_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-VpnGatewayId"><code>VpnGatewayId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more of your virtual private gateways. For more information, see Amazon Web Services Site-to-Site VPN in the Amazon Web Services Site-to-Site VPN User Guide.</td>
</tr>
<tr>
    <td><a href="#create_vpn_gateway"><CopyableCode code="create_vpn_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-AmazonSideAsn"><code>AmazonSideAsn</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a virtual private gateway. A virtual private gateway is the endpoint on the VPC side of your VPN connection. You can create a virtual private gateway before creating the VPC itself. For more information, see Amazon Web Services Site-to-Site VPN in the Amazon Web Services Site-to-Site VPN User Guide.</td>
</tr>
<tr>
    <td><a href="#attach_vpn_gateway"><CopyableCode code="attach_vpn_gateway" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-VpnGatewayId"><code>VpnGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Attaches an available virtual private gateway to a VPC. You can attach one virtual private gateway to one VPC at a time. For more information, see Amazon Web Services Site-to-Site VPN in the Amazon Web Services Site-to-Site VPN User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_vpn_gateway"><CopyableCode code="delete_vpn_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-VpnGatewayId"><code>VpnGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified virtual private gateway. You must first detach the virtual private gateway from the VPC. Note that you don't need to delete the virtual private gateway if you plan to delete and recreate the VPN connection between your VPC and your network.</td>
</tr>
<tr>
    <td><a href="#detach_vpn_gateway"><CopyableCode code="detach_vpn_gateway" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-VpnGatewayId"><code>VpnGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Detaches a virtual private gateway from a VPC. You do this if you're planning to turn off the VPC and not use it anymore. You can confirm a virtual private gateway has been completely detached from a VPC by describing the virtual private gateway (any attachments to the virtual private gateway are also described). You must wait for the attachment's state to switch to detached before you can delete the VPC or attach a different VPC to the virtual private gateway.</td>
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
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
</tr>
<tr id="parameter-VpnGatewayId">
    <td><CopyableCode code="VpnGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual private gateway.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AmazonSideAsn">
    <td><CopyableCode code="AmazonSideAsn" /></td>
    <td><code>integer (int64)</code></td>
    <td>A private Autonomous System Number (ASN) for the Amazon side of a BGP session. If you're using a 16-bit ASN, it must be in the 64512 to 65534 range. If you're using a 32-bit ASN, it must be in the 4200000000 to 4294967294 range. Default: 64512</td>
</tr>
<tr id="parameter-AvailabilityZone">
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone for the virtual private gateway.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. amazon-side-asn - The Autonomous System Number (ASN) for the Amazon side of the gateway. attachment.state - The current state of the attachment between the gateway and the VPC (attaching | attached | detaching | detached). attachment.vpc-id - The ID of an attached VPC. availability-zone - The Availability Zone for the virtual private gateway (if applicable). state - The state of the virtual private gateway (pending | available | deleting | deleted). tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. type - The type of virtual private gateway. Currently the only supported type is ipsec.1. vpn-gateway-id - The ID of the virtual private gateway.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the virtual private gateway.</td>
</tr>
<tr id="parameter-Type">
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of VPN connection this virtual private gateway supports.</td>
</tr>
<tr id="parameter-VpnGatewayId">
    <td><CopyableCode code="VpnGatewayId" /></td>
    <td><code>array</code></td>
    <td>One or more virtual private gateway IDs. Default: Describes all your virtual private gateways.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpn_gateways"
    values={[
        { label: 'describe_vpn_gateways', value: 'describe_vpn_gateways' }
    ]}
>
<TabItem value="describe_vpn_gateways">

Describes one or more of your virtual private gateways. For more information, see Amazon Web Services Site-to-Site VPN in the Amazon Web Services Site-to-Site VPN User Guide.

```sql
SELECT
AmazonSideAsn,
AvailabilityZone,
State,
Tags,
Type,
VpcAttachments,
VpnGatewayId
FROM aws.ec2.vpn_gateways
WHERE region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND VpnGatewayId = '{{ VpnGatewayId }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpn_gateway"
    values={[
        { label: 'create_vpn_gateway', value: 'create_vpn_gateway' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpn_gateway">

Creates a virtual private gateway. A virtual private gateway is the endpoint on the VPC side of your VPN connection. You can create a virtual private gateway before creating the VPC itself. For more information, see Amazon Web Services Site-to-Site VPN in the Amazon Web Services Site-to-Site VPN User Guide.

```sql
INSERT INTO aws.ec2.vpn_gateways (
region,
AvailabilityZone,
Type,
TagSpecification,
AmazonSideAsn,
DryRun
)
SELECT 
'{{ region }}',
'{{ AvailabilityZone }}',
'{{ Type }}',
'{{ TagSpecification }}',
'{{ AmazonSideAsn }}',
'{{ DryRun }}'
RETURNING
AmazonSideAsn,
AvailabilityZone,
State,
Tags,
Type,
VpcAttachments,
VpnGatewayId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpn_gateways
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpn_gateways resource.
    - name: AvailabilityZone
      value: "{{ AvailabilityZone }}"
      description: The Availability Zone for the virtual private gateway.
      description: The Availability Zone for the virtual private gateway.
    - name: Type
      value: "{{ Type }}"
      description: The type of VPN connection this virtual private gateway supports.
      description: The type of VPN connection this virtual private gateway supports.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the virtual private gateway.
      description: The tags to apply to the virtual private gateway.
    - name: AmazonSideAsn
      value: "{{ AmazonSideAsn }}"
      description: A private Autonomous System Number (ASN) for the Amazon side of a BGP session. If you're using a 16-bit ASN, it must be in the 64512 to 65534 range. If you're using a 32-bit ASN, it must be in the 4200000000 to 4294967294 range. Default: 64512
      description: A private Autonomous System Number (ASN) for the Amazon side of a BGP session. If you're using a 16-bit ASN, it must be in the 64512 to 65534 range. If you're using a 32-bit ASN, it must be in the 4200000000 to 4294967294 range. Default: 64512
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_vpn_gateway"
    values={[
        { label: 'attach_vpn_gateway', value: 'attach_vpn_gateway' }
    ]}
>
<TabItem value="attach_vpn_gateway">

Attaches an available virtual private gateway to a VPC. You can attach one virtual private gateway to one VPC at a time. For more information, see Amazon Web Services Site-to-Site VPN in the Amazon Web Services Site-to-Site VPN User Guide.

```sql
UPDATE aws.ec2.vpn_gateways
SET 
-- No updatable properties
WHERE 
VpcId = '{{ VpcId }}' --required
AND VpnGatewayId = '{{ VpnGatewayId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
State,
VpcId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpn_gateway"
    values={[
        { label: 'delete_vpn_gateway', value: 'delete_vpn_gateway' }
    ]}
>
<TabItem value="delete_vpn_gateway">

Deletes the specified virtual private gateway. You must first detach the virtual private gateway from the VPC. Note that you don't need to delete the virtual private gateway if you plan to delete and recreate the VPN connection between your VPC and your network.

```sql
DELETE FROM aws.ec2.vpn_gateways
WHERE VpnGatewayId = '{{ VpnGatewayId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_vpn_gateway"
    values={[
        { label: 'detach_vpn_gateway', value: 'detach_vpn_gateway' }
    ]}
>
<TabItem value="detach_vpn_gateway">

Detaches a virtual private gateway from a VPC. You do this if you're planning to turn off the VPC and not use it anymore. You can confirm a virtual private gateway has been completely detached from a VPC by describing the virtual private gateway (any attachments to the virtual private gateway are also described). You must wait for the attachment's state to switch to detached before you can delete the VPC or attach a different VPC to the virtual private gateway.

```sql
EXEC aws.ec2.vpn_gateways.detach_vpn_gateway 
@VpcId='{{ VpcId }}' --required, 
@VpnGatewayId='{{ VpnGatewayId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
