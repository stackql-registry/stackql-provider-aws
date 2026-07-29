--- 
title: transit_gateway_connect_peers
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_connect_peers
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_connect_peers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_connect_peers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_connect_peers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_transit_gateway_connect_peers"
    values={[
        { label: 'describe_transit_gateway_connect_peers', value: 'describe_transit_gateway_connect_peers' }
    ]}
>
<TabItem value="describe_transit_gateway_connect_peers">

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
    <td><CopyableCode code="connect_peer_configuration" /></td>
    <td><code>string</code></td>
    <td>The Connect peer details.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Connect peer.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the Connect peer.</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_attachment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Connect attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_connect_peer_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Connect peer.</td>
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
    <td><a href="#describe_transit_gateway_connect_peers"><CopyableCode code="describe_transit_gateway_connect_peers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayConnectPeerIds"><code>TransitGatewayConnectPeerIds</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more Connect peers.</td>
</tr>
<tr>
    <td><a href="#create_transit_gateway_connect_peer"><CopyableCode code="create_transit_gateway_connect_peer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-PeerAddress"><code>PeerAddress</code></a>, <a href="#parameter-InsideCidrBlocks"><code>InsideCidrBlocks</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayAddress"><code>TransitGatewayAddress</code></a>, <a href="#parameter-BgpOptions"><code>BgpOptions</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a Connect peer for a specified transit gateway Connect attachment between a transit gateway and an appliance. The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6). For more information, see Connect peers in the Amazon Web Services Transit Gateways Guide.</td>
</tr>
<tr>
    <td><a href="#delete_transit_gateway_connect_peer"><CopyableCode code="delete_transit_gateway_connect_peer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TransitGatewayConnectPeerId"><code>TransitGatewayConnectPeerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified Connect peer.</td>
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
<tr id="parameter-InsideCidrBlocks">
    <td><CopyableCode code="InsideCidrBlocks" /></td>
    <td><code>array</code></td>
    <td>The range of inside IP addresses that are used for BGP peering. You must specify a size /29 IPv4 CIDR block from the 169.254.0.0/16 range. The first address from the range must be configured on the appliance as the BGP IP address. You can also optionally specify a size /125 IPv6 CIDR block from the fd00::/8 range.</td>
</tr>
<tr id="parameter-PeerAddress">
    <td><CopyableCode code="PeerAddress" /></td>
    <td><code>string</code></td>
    <td>The peer IP address (GRE outer IP address) on the appliance side of the Connect peer.</td>
</tr>
<tr id="parameter-TransitGatewayAttachmentId">
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Connect attachment.</td>
</tr>
<tr id="parameter-TransitGatewayConnectPeerId">
    <td><CopyableCode code="TransitGatewayConnectPeerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Connect peer.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-BgpOptions">
    <td><CopyableCode code="BgpOptions" /></td>
    <td><code>object</code></td>
    <td>The BGP options for the Connect peer.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. The possible values are: state - The state of the Connect peer (pending | available | deleting | deleted). transit-gateway-attachment-id - The ID of the attachment. transit-gateway-connect-peer-id - The ID of the Connect peer.</td>
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
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the Connect peer.</td>
</tr>
<tr id="parameter-TransitGatewayAddress">
    <td><CopyableCode code="TransitGatewayAddress" /></td>
    <td><code>string</code></td>
    <td>The peer IP address (GRE outer IP address) on the transit gateway side of the Connect peer, which must be specified from a transit gateway CIDR block. If not specified, Amazon automatically assigns the first available IP address from the transit gateway CIDR block.</td>
</tr>
<tr id="parameter-TransitGatewayConnectPeerIds">
    <td><CopyableCode code="TransitGatewayConnectPeerIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Connect peers.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_transit_gateway_connect_peers"
    values={[
        { label: 'describe_transit_gateway_connect_peers', value: 'describe_transit_gateway_connect_peers' }
    ]}
>
<TabItem value="describe_transit_gateway_connect_peers">

Describes one or more Connect peers.

```sql
SELECT
connect_peer_configuration,
creation_time,
state,
tags,
transit_gateway_attachment_id,
transit_gateway_connect_peer_id
FROM aws.ec2.transit_gateway_connect_peers
WHERE region = '{{ region }}' -- required
AND TransitGatewayConnectPeerIds = '{{ TransitGatewayConnectPeerIds }}'
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
    defaultValue="create_transit_gateway_connect_peer"
    values={[
        { label: 'create_transit_gateway_connect_peer', value: 'create_transit_gateway_connect_peer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transit_gateway_connect_peer">

Creates a Connect peer for a specified transit gateway Connect attachment between a transit gateway and an appliance. The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6). For more information, see Connect peers in the Amazon Web Services Transit Gateways Guide.

```sql
INSERT INTO aws.ec2.transit_gateway_connect_peers (
TransitGatewayAttachmentId,
PeerAddress,
InsideCidrBlocks,
region,
TransitGatewayAddress,
BgpOptions,
TagSpecification,
DryRun
)
SELECT 
'{{ TransitGatewayAttachmentId }}',
'{{ PeerAddress }}',
'{{ InsideCidrBlocks }}',
'{{ region }}',
'{{ TransitGatewayAddress }}',
'{{ BgpOptions }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
connect_peer_configuration,
creation_time,
state,
tags,
transit_gateway_attachment_id,
transit_gateway_connect_peer_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateway_connect_peers
  props:
    - name: TransitGatewayAttachmentId
      value: "{{ TransitGatewayAttachmentId }}"
      description: Required parameter for the transit_gateway_connect_peers resource.
    - name: PeerAddress
      value: "{{ PeerAddress }}"
      description: Required parameter for the transit_gateway_connect_peers resource.
    - name: InsideCidrBlocks
      value: "{{ InsideCidrBlocks }}"
      description: Required parameter for the transit_gateway_connect_peers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateway_connect_peers resource.
    - name: TransitGatewayAddress
      value: "{{ TransitGatewayAddress }}"
      description: The peer IP address (GRE outer IP address) on the transit gateway side of the Connect peer, which must be specified from a transit gateway CIDR block. If not specified, Amazon automatically assigns the first available IP address from the transit gateway CIDR block.
      description: The peer IP address (GRE outer IP address) on the transit gateway side of the Connect peer, which must be specified from a transit gateway CIDR block. If not specified, Amazon automatically assigns the first available IP address from the transit gateway CIDR block.
    - name: BgpOptions
      value: "{{ BgpOptions }}"
      description: The BGP options for the Connect peer.
      description: The BGP options for the Connect peer.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the Connect peer.
      description: The tags to apply to the Connect peer.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transit_gateway_connect_peer"
    values={[
        { label: 'delete_transit_gateway_connect_peer', value: 'delete_transit_gateway_connect_peer' }
    ]}
>
<TabItem value="delete_transit_gateway_connect_peer">

Deletes the specified Connect peer.

```sql
DELETE FROM aws.ec2.transit_gateway_connect_peers
WHERE TransitGatewayConnectPeerId = '{{ TransitGatewayConnectPeerId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
