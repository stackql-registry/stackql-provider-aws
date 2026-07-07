--- 
title: client_vpn_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - client_vpn_routes
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

Creates, updates, deletes, gets or lists a <code>client_vpn_routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="client_vpn_routes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.client_vpn_routes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_client_vpn_routes"
    values={[
        { label: 'describe_client_vpn_routes', value: 'describe_client_vpn_routes' }
    ]}
>
<TabItem value="describe_client_vpn_routes">

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
    <td><CopyableCode code="ClientVpnEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Client VPN endpoint with which the route is associated.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the route.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationCidr" /></td>
    <td><code>string</code></td>
    <td>The IPv4 address range, in CIDR notation, of the route destination.</td>
</tr>
<tr>
    <td><CopyableCode code="Origin" /></td>
    <td><code>string</code></td>
    <td>Indicates how the route was associated with the Client VPN endpoint. associate indicates that the route was automatically added when the target network was associated with the Client VPN endpoint. add-route indicates that the route was manually added using the CreateClientVpnRoute action.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current state of the route.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetSubnet" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet through which traffic is routed.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Transit Gateway attachment, if the route targets a Transit Gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The route type.</td>
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
    <td><a href="#describe_client_vpn_routes"><CopyableCode code="describe_client_vpn_routes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the routes for the specified Client VPN endpoint.</td>
</tr>
<tr>
    <td><a href="#create_client_vpn_route"><CopyableCode code="create_client_vpn_route" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-DestinationCidrBlock"><code>DestinationCidrBlock</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TargetVpcSubnetId"><code>TargetVpcSubnetId</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Adds a route to a network to a Client VPN endpoint. Each Client VPN endpoint has a route table that describes the available destination network routes. Each route in the route table specifies the path for traﬃc to speciﬁc resources or networks.</td>
</tr>
<tr>
    <td><a href="#delete_client_vpn_route"><CopyableCode code="delete_client_vpn_route" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-DestinationCidrBlock"><code>DestinationCidrBlock</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TargetVpcSubnetId"><code>TargetVpcSubnetId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes a route from a Client VPN endpoint. You can only delete routes that you manually added using the CreateClientVpnRoute action. You cannot delete routes that were automatically added when associating a subnet. To remove routes that have been automatically added, disassociate the target subnet from the Client VPN endpoint.</td>
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
<tr id="parameter-ClientVpnEndpointId">
    <td><CopyableCode code="ClientVpnEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Client VPN endpoint from which the route is to be deleted.</td>
</tr>
<tr id="parameter-DestinationCidrBlock">
    <td><CopyableCode code="DestinationCidrBlock" /></td>
    <td><code>string</code></td>
    <td>The IPv4 address range, in CIDR notation, of the route to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the route.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. Filter names and values are case-sensitive. destination-cidr - The CIDR of the route destination. origin - How the route was associated with the Client VPN endpoint (associate | add-route). target-subnet - The ID of the subnet through which traffic is routed.</td>
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
<tr id="parameter-TargetVpcSubnetId">
    <td><CopyableCode code="TargetVpcSubnetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the target subnet used by the route.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_client_vpn_routes"
    values={[
        { label: 'describe_client_vpn_routes', value: 'describe_client_vpn_routes' }
    ]}
>
<TabItem value="describe_client_vpn_routes">

Describes the routes for the specified Client VPN endpoint.

```sql
SELECT
ClientVpnEndpointId,
Description,
DestinationCidr,
Origin,
Status,
TargetSubnet,
TransitGatewayAttachmentId,
Type
FROM aws.ec2.client_vpn_routes
WHERE ClientVpnEndpointId = '{{ ClientVpnEndpointId }}' -- required
AND region = '{{ region }}' -- required
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
    defaultValue="create_client_vpn_route"
    values={[
        { label: 'create_client_vpn_route', value: 'create_client_vpn_route' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_client_vpn_route">

Adds a route to a network to a Client VPN endpoint. Each Client VPN endpoint has a route table that describes the available destination network routes. Each route in the route table specifies the path for traﬃc to speciﬁc resources or networks.

```sql
INSERT INTO aws.ec2.client_vpn_routes (
ClientVpnEndpointId,
DestinationCidrBlock,
region,
TargetVpcSubnetId,
Description,
ClientToken,
DryRun
)
SELECT 
'{{ ClientVpnEndpointId }}',
'{{ DestinationCidrBlock }}',
'{{ region }}',
'{{ TargetVpcSubnetId }}',
'{{ Description }}',
'{{ ClientToken }}',
'{{ DryRun }}'
RETURNING
Code,
Message
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: client_vpn_routes
  props:
    - name: ClientVpnEndpointId
      value: "{{ ClientVpnEndpointId }}"
      description: Required parameter for the client_vpn_routes resource.
    - name: DestinationCidrBlock
      value: "{{ DestinationCidrBlock }}"
      description: Required parameter for the client_vpn_routes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the client_vpn_routes resource.
    - name: TargetVpcSubnetId
      value: "{{ TargetVpcSubnetId }}"
      description: The ID of the subnet through which you want to route traffic. The specified subnet must be an existing target network of the Client VPN endpoint. Alternatively, if you're adding a route for the local network, specify local. This parameter is required for VPC-based Client VPN endpoints. For Transit Gateway-based endpoints, this parameter is not required.
      description: The ID of the subnet through which you want to route traffic. The specified subnet must be an existing target network of the Client VPN endpoint. Alternatively, if you're adding a route for the local network, specify local. This parameter is required for VPC-based Client VPN endpoints. For Transit Gateway-based endpoints, this parameter is not required.
    - name: Description
      value: "{{ Description }}"
      description: A brief description of the route.
      description: A brief description of the route.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_client_vpn_route"
    values={[
        { label: 'delete_client_vpn_route', value: 'delete_client_vpn_route' }
    ]}
>
<TabItem value="delete_client_vpn_route">

Deletes a route from a Client VPN endpoint. You can only delete routes that you manually added using the CreateClientVpnRoute action. You cannot delete routes that were automatically added when associating a subnet. To remove routes that have been automatically added, disassociate the target subnet from the Client VPN endpoint.

```sql
DELETE FROM aws.ec2.client_vpn_routes
WHERE ClientVpnEndpointId = '{{ ClientVpnEndpointId }}' --required
AND DestinationCidrBlock = '{{ DestinationCidrBlock }}' --required
AND region = '{{ region }}' --required
AND TargetVpcSubnetId = '{{ TargetVpcSubnetId }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
