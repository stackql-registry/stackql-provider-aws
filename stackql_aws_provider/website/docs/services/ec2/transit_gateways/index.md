--- 
title: transit_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateways
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

Creates, updates, deletes, gets or lists a <code>transit_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_transit_gateways"
    values={[
        { label: 'describe_transit_gateways', value: 'describe_transit_gateways' }
    ]}
>
<TabItem value="describe_transit_gateways">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the transit gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="Options" /></td>
    <td><code>string</code></td>
    <td>The transit gateway options.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the transit gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the transit gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the transit gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the transit gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway.</td>
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
    <td><a href="#describe_transit_gateways"><CopyableCode code="describe_transit_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayIds"><code>TransitGatewayIds</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more transit gateways. By default, all transit gateways are described. Alternatively, you can filter the results.</td>
</tr>
<tr>
    <td><a href="#create_transit_gateway"><CopyableCode code="create_transit_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Options"><code>Options</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a transit gateway. You can use a transit gateway to interconnect your virtual private clouds (VPC) and on-premises networks. After the transit gateway enters the available state, you can attach your VPCs and VPN connections to the transit gateway. To attach your VPCs, use CreateTransitGatewayVpcAttachment. To attach a VPN connection, use CreateCustomerGateway to create a customer gateway and specify the ID of the customer gateway and the ID of the transit gateway in a call to CreateVpnConnection. When you create a transit gateway, we create a default transit gateway route table and use it as the default association route table and the default propagation route table. You can use CreateTransitGatewayRouteTable to create additional transit gateway route tables. If you disable automatic route propagation, we do not create a default transit gateway route table. You can use EnableTransitGatewayRouteTablePropagation to propagate routes from a resource attachment to a transit gateway route table. If you disable automatic associations, you can use AssociateTransitGatewayRouteTable to associate a resource attachment with a transit gateway route table.</td>
</tr>
<tr>
    <td><a href="#modify_transit_gateway"><CopyableCode code="modify_transit_gateway" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TransitGatewayId"><code>TransitGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Options"><code>Options</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the specified transit gateway. When you modify a transit gateway, the modified options are applied to new transit gateway attachments only. Your existing transit gateway attachments are not modified.</td>
</tr>
<tr>
    <td><a href="#delete_transit_gateway"><CopyableCode code="delete_transit_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TransitGatewayId"><code>TransitGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified transit gateway.</td>
</tr>
<tr>
    <td><a href="#delete_transit_gateway_client_vpn_attachment"><CopyableCode code="delete_transit_gateway_client_vpn_attachment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes a Transit Gateway attachment for a Client VPN endpoint. The Transit Gateway owner can delete the attachment to remove the association between the Client VPN endpoint and the Transit Gateway.</td>
</tr>
<tr>
    <td><a href="#accept_transit_gateway_client_vpn_attachment"><CopyableCode code="accept_transit_gateway_client_vpn_attachment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Accepts a Transit Gateway attachment request for a Client VPN endpoint. The Transit Gateway owner must accept the attachment request before the Client VPN endpoint can route traffic through the Transit Gateway.</td>
</tr>
<tr>
    <td><a href="#accept_transit_gateway_peering_attachment"><CopyableCode code="accept_transit_gateway_peering_attachment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Accepts a transit gateway peering attachment request. The peering attachment must be in the pendingAcceptance state.</td>
</tr>
<tr>
    <td><a href="#accept_transit_gateway_vpc_attachment"><CopyableCode code="accept_transit_gateway_vpc_attachment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Accepts a request to attach a VPC to a transit gateway. The VPC attachment must be in the pendingAcceptance state. Use DescribeTransitGatewayVpcAttachments to view your pending VPC attachment requests. Use RejectTransitGatewayVpcAttachment to reject a VPC attachment request.</td>
</tr>
<tr>
    <td><a href="#reject_transit_gateway_client_vpn_attachment"><CopyableCode code="reject_transit_gateway_client_vpn_attachment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Rejects a Transit Gateway attachment request for a Client VPN endpoint. The Transit Gateway owner can reject the attachment request to prevent the Client VPN endpoint from routing traffic through the Transit Gateway.</td>
</tr>
<tr>
    <td><a href="#reject_transit_gateway_peering_attachment"><CopyableCode code="reject_transit_gateway_peering_attachment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Rejects a transit gateway peering attachment request.</td>
</tr>
<tr>
    <td><a href="#reject_transit_gateway_vpc_attachment"><CopyableCode code="reject_transit_gateway_vpc_attachment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Rejects a request to attach a VPC to a transit gateway. The VPC attachment must be in the pendingAcceptance state. Use DescribeTransitGatewayVpcAttachments to view your pending VPC attachment requests. Use AcceptTransitGatewayVpcAttachment to accept a VPC attachment request.</td>
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
<tr id="parameter-TransitGatewayAttachmentId">
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment.</td>
</tr>
<tr id="parameter-TransitGatewayId">
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description for the transit gateway.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. The possible values are: options.propagation-default-route-table-id - The ID of the default propagation route table. options.amazon-side-asn - The private ASN for the Amazon side of a BGP session. options.association-default-route-table-id - The ID of the default association route table. options.auto-accept-shared-attachments - Indicates whether there is automatic acceptance of attachment requests (enable | disable). options.default-route-table-association - Indicates whether resource attachments are automatically associated with the default association route table (enable | disable). options.default-route-table-propagation - Indicates whether resource attachments automatically propagate routes to the default propagation route table (enable | disable). options.dns-support - Indicates whether DNS support is enabled (enable | disable). options.vpn-ecmp-support - Indicates whether Equal Cost Multipath Protocol support is enabled (enable | disable). owner-id - The ID of the Amazon Web Services account that owns the transit gateway. state - The state of the transit gateway (available | deleted | deleting | modifying | pending). transit-gateway-id - The ID of the transit gateway. tag-key - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-Options">
    <td><CopyableCode code="Options" /></td>
    <td><code>object</code></td>
    <td>The options to modify.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the transit gateway.</td>
</tr>
<tr id="parameter-TransitGatewayIds">
    <td><CopyableCode code="TransitGatewayIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the transit gateways.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_transit_gateways"
    values={[
        { label: 'describe_transit_gateways', value: 'describe_transit_gateways' }
    ]}
>
<TabItem value="describe_transit_gateways">

Describes one or more transit gateways. By default, all transit gateways are described. Alternatively, you can filter the results.

```sql
SELECT
CreationTime,
Description,
Options,
OwnerId,
State,
Tags,
TransitGatewayArn,
TransitGatewayId
FROM aws.ec2.transit_gateways
WHERE region = '{{ region }}' -- required
AND TransitGatewayIds = '{{ TransitGatewayIds }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_transit_gateway"
    values={[
        { label: 'create_transit_gateway', value: 'create_transit_gateway' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transit_gateway">

Creates a transit gateway. You can use a transit gateway to interconnect your virtual private clouds (VPC) and on-premises networks. After the transit gateway enters the available state, you can attach your VPCs and VPN connections to the transit gateway. To attach your VPCs, use CreateTransitGatewayVpcAttachment. To attach a VPN connection, use CreateCustomerGateway to create a customer gateway and specify the ID of the customer gateway and the ID of the transit gateway in a call to CreateVpnConnection. When you create a transit gateway, we create a default transit gateway route table and use it as the default association route table and the default propagation route table. You can use CreateTransitGatewayRouteTable to create additional transit gateway route tables. If you disable automatic route propagation, we do not create a default transit gateway route table. You can use EnableTransitGatewayRouteTablePropagation to propagate routes from a resource attachment to a transit gateway route table. If you disable automatic associations, you can use AssociateTransitGatewayRouteTable to associate a resource attachment with a transit gateway route table.

```sql
INSERT INTO aws.ec2.transit_gateways (
region,
Description,
Options,
TagSpecification,
DryRun
)
SELECT 
'{{ region }}',
'{{ Description }}',
'{{ Options }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
CreationTime,
Description,
Options,
OwnerId,
State,
Tags,
TransitGatewayArn,
TransitGatewayId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateways
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateways resource.
    - name: Description
      value: "{{ Description }}"
      description: A description of the transit gateway.
      description: A description of the transit gateway.
    - name: Options
      value: "{{ Options }}"
      description: The transit gateway options.
      description: The transit gateway options.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the transit gateway.
      description: The tags to apply to the transit gateway.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_transit_gateway"
    values={[
        { label: 'modify_transit_gateway', value: 'modify_transit_gateway' }
    ]}
>
<TabItem value="modify_transit_gateway">

Modifies the specified transit gateway. When you modify a transit gateway, the modified options are applied to new transit gateway attachments only. Your existing transit gateway attachments are not modified.

```sql
UPDATE aws.ec2.transit_gateways
SET 
-- No updatable properties
WHERE 
TransitGatewayId = '{{ TransitGatewayId }}' --required
AND region = '{{ region }}' --required
AND Description = '{{ Description}}'
AND Options = '{{ Options}}'
AND DryRun = {{ DryRun}}
RETURNING
CreationTime,
Description,
Options,
OwnerId,
State,
Tags,
TransitGatewayArn,
TransitGatewayId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transit_gateway"
    values={[
        { label: 'delete_transit_gateway', value: 'delete_transit_gateway' },
        { label: 'delete_transit_gateway_client_vpn_attachment', value: 'delete_transit_gateway_client_vpn_attachment' }
    ]}
>
<TabItem value="delete_transit_gateway">

Deletes the specified transit gateway.

```sql
DELETE FROM aws.ec2.transit_gateways
WHERE TransitGatewayId = '{{ TransitGatewayId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
<TabItem value="delete_transit_gateway_client_vpn_attachment">

Deletes a Transit Gateway attachment for a Client VPN endpoint. The Transit Gateway owner can delete the attachment to remove the association between the Client VPN endpoint and the Transit Gateway.

```sql
DELETE FROM aws.ec2.transit_gateways
WHERE TransitGatewayAttachmentId = '{{ TransitGatewayAttachmentId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_transit_gateway_client_vpn_attachment"
    values={[
        { label: 'accept_transit_gateway_client_vpn_attachment', value: 'accept_transit_gateway_client_vpn_attachment' },
        { label: 'accept_transit_gateway_peering_attachment', value: 'accept_transit_gateway_peering_attachment' },
        { label: 'accept_transit_gateway_vpc_attachment', value: 'accept_transit_gateway_vpc_attachment' },
        { label: 'reject_transit_gateway_client_vpn_attachment', value: 'reject_transit_gateway_client_vpn_attachment' },
        { label: 'reject_transit_gateway_peering_attachment', value: 'reject_transit_gateway_peering_attachment' },
        { label: 'reject_transit_gateway_vpc_attachment', value: 'reject_transit_gateway_vpc_attachment' }
    ]}
>
<TabItem value="accept_transit_gateway_client_vpn_attachment">

Accepts a Transit Gateway attachment request for a Client VPN endpoint. The Transit Gateway owner must accept the attachment request before the Client VPN endpoint can route traffic through the Transit Gateway.

```sql
EXEC aws.ec2.transit_gateways.accept_transit_gateway_client_vpn_attachment 
@TransitGatewayAttachmentId='{{ TransitGatewayAttachmentId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="accept_transit_gateway_peering_attachment">

Accepts a transit gateway peering attachment request. The peering attachment must be in the pendingAcceptance state.

```sql
EXEC aws.ec2.transit_gateways.accept_transit_gateway_peering_attachment 
@TransitGatewayAttachmentId='{{ TransitGatewayAttachmentId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="accept_transit_gateway_vpc_attachment">

Accepts a request to attach a VPC to a transit gateway. The VPC attachment must be in the pendingAcceptance state. Use DescribeTransitGatewayVpcAttachments to view your pending VPC attachment requests. Use RejectTransitGatewayVpcAttachment to reject a VPC attachment request.

```sql
EXEC aws.ec2.transit_gateways.accept_transit_gateway_vpc_attachment 
@TransitGatewayAttachmentId='{{ TransitGatewayAttachmentId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="reject_transit_gateway_client_vpn_attachment">

Rejects a Transit Gateway attachment request for a Client VPN endpoint. The Transit Gateway owner can reject the attachment request to prevent the Client VPN endpoint from routing traffic through the Transit Gateway.

```sql
EXEC aws.ec2.transit_gateways.reject_transit_gateway_client_vpn_attachment 
@TransitGatewayAttachmentId='{{ TransitGatewayAttachmentId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="reject_transit_gateway_peering_attachment">

Rejects a transit gateway peering attachment request.

```sql
EXEC aws.ec2.transit_gateways.reject_transit_gateway_peering_attachment 
@TransitGatewayAttachmentId='{{ TransitGatewayAttachmentId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="reject_transit_gateway_vpc_attachment">

Rejects a request to attach a VPC to a transit gateway. The VPC attachment must be in the pendingAcceptance state. Use DescribeTransitGatewayVpcAttachments to view your pending VPC attachment requests. Use AcceptTransitGatewayVpcAttachment to accept a VPC attachment request.

```sql
EXEC aws.ec2.transit_gateways.reject_transit_gateway_vpc_attachment 
@TransitGatewayAttachmentId='{{ TransitGatewayAttachmentId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
