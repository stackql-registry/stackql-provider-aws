--- 
title: connect_peers
hide_title: false
hide_table_of_contents: false
keywords:
  - connect_peers
  - networkmanager
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

Creates, updates, deletes, gets or lists a <code>connect_peers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connect_peers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.connect_peers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connect_peer"
    values={[
        { label: 'get_connect_peer', value: 'get_connect_peer' },
        { label: 'list_connect_peers', value: 'list_connect_peers' }
    ]}
>
<TabItem value="get_connect_peer">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration of the Connect peer.</td>
</tr>
<tr>
    <td><CopyableCode code="connect_attachment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment to connect. (pattern: &lt;code&gt;^attachment-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connect_peer_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Connect peer. (pattern: &lt;code&gt;^connect-peer-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="core_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a core network. (pattern: &lt;code&gt;^core-network-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the Connect peer was created.</td>
</tr>
<tr>
    <td><CopyableCode code="edge_location" /></td>
    <td><code>string</code></td>
    <td>The Connect peer Regions where edges are located. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_errors" /></td>
    <td><code>array</code></td>
    <td>Describes the error associated with the attachment request.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Connect peer. (CREATING, FAILED, AVAILABLE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_arn" /></td>
    <td><code>string</code></td>
    <td>The subnet ARN for the Connect peer. This only applies only when the protocol is NO_ENCAP. (pattern: &lt;code&gt;^arn:&#91;^:&#93;&#123;1,63&#125;:ec2:&#91;^:&#93;&#123;0,63&#125;:&#91;^:&#93;&#123;0,63&#125;:subnet\/subnet-&#91;0-9a-f&#93;&#123;8,17&#125;$|^$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The list of key-value tags associated with the Connect peer.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_connect_peers">

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
    <td><CopyableCode code="connect_attachment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a Connect peer attachment. (pattern: &lt;code&gt;^attachment-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connect_peer_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a Connect peer. (pattern: &lt;code&gt;^connect-peer-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connect_peer_state" /></td>
    <td><code>string</code></td>
    <td>The state of a Connect peer. (CREATING, FAILED, AVAILABLE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="core_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a core network. (pattern: &lt;code&gt;^core-network-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when a Connect peer was created.</td>
</tr>
<tr>
    <td><CopyableCode code="edge_location" /></td>
    <td><code>string</code></td>
    <td>The Region where the edge is located. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_arn" /></td>
    <td><code>string</code></td>
    <td>The subnet ARN for the Connect peer summary. (pattern: &lt;code&gt;^arn:&#91;^:&#93;&#123;1,63&#125;:ec2:&#91;^:&#93;&#123;0,63&#125;:&#91;^:&#93;&#123;0,63&#125;:subnet\/subnet-&#91;0-9a-f&#93;&#123;8,17&#125;$|^$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The list of key-value tags associated with the Connect peer summary.</td>
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
    <td><a href="#get_connect_peer"><CopyableCode code="get_connect_peer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connect_peer_id"><code>connect_peer_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a core network Connect peer.</td>
</tr>
<tr>
    <td><a href="#list_connect_peers"><CopyableCode code="list_connect_peers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-coreNetworkId"><code>coreNetworkId</code></a>, <a href="#parameter-connectAttachmentId"><code>connectAttachmentId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of core network Connect peers.</td>
</tr>
<tr>
    <td><a href="#create_connect_peer"><CopyableCode code="create_connect_peer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectAttachmentId"><code>ConnectAttachmentId</code></a>, <a href="#parameter-PeerAddress"><code>PeerAddress</code></a></td>
    <td></td>
    <td>Creates a core network Connect peer for a specified core network connect attachment between a core network and an appliance. The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).</td>
</tr>
<tr>
    <td><a href="#associate_connect_peer"><CopyableCode code="associate_connect_peer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectPeerId"><code>ConnectPeerId</code></a>, <a href="#parameter-DeviceId"><code>DeviceId</code></a></td>
    <td></td>
    <td>Associates a core network Connect peer with a device and optionally, with a link. If you specify a link, it must be associated with the specified device. You can only associate core network Connect peers that have been created on a core network Connect attachment on a core network.</td>
</tr>
<tr>
    <td><a href="#associate_transit_gateway_connect_peer"><CopyableCode code="associate_transit_gateway_connect_peer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TransitGatewayConnectPeerArn"><code>TransitGatewayConnectPeerArn</code></a>, <a href="#parameter-DeviceId"><code>DeviceId</code></a></td>
    <td></td>
    <td>Associates a transit gateway Connect peer with a device, and optionally, with a link. If you specify a link, it must be associated with the specified device. You can only associate transit gateway Connect peers that have been created on a transit gateway that's registered in your global network. You cannot associate a transit gateway Connect peer with more than one device and link.</td>
</tr>
<tr>
    <td><a href="#disassociate_connect_peer"><CopyableCode code="disassociate_connect_peer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-connect_peer_id"><code>connect_peer_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a core network Connect peer from a device and a link.</td>
</tr>
<tr>
    <td><a href="#disassociate_transit_gateway_connect_peer"><CopyableCode code="disassociate_transit_gateway_connect_peer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-transit_gateway_connect_peer_arn"><code>transit_gateway_connect_peer_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a transit gateway Connect peer from a device and link.</td>
</tr>
<tr>
    <td><a href="#delete_connect_peer"><CopyableCode code="delete_connect_peer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connect_peer_id"><code>connect_peer_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Connect peer.</td>
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
<tr id="parameter-connect_peer_id">
    <td><CopyableCode code="connect_peer_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the deleted Connect peer.</td>
</tr>
<tr id="parameter-global_network_id">
    <td><CopyableCode code="global_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the global network.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-transit_gateway_connect_peer_arn">
    <td><CopyableCode code="transit_gateway_connect_peer_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the transit gateway Connect peer.</td>
</tr>
<tr id="parameter-connectAttachmentId">
    <td><CopyableCode code="connectAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment.</td>
</tr>
<tr id="parameter-coreNetworkId">
    <td><CopyableCode code="coreNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of a core network.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_connect_peer"
    values={[
        { label: 'get_connect_peer', value: 'get_connect_peer' },
        { label: 'list_connect_peers', value: 'list_connect_peers' }
    ]}
>
<TabItem value="get_connect_peer">

Returns information about a core network Connect peer.

```sql
SELECT
configuration,
connect_attachment_id,
connect_peer_id,
core_network_id,
created_at,
edge_location,
last_modification_errors,
state,
subnet_arn,
tags
FROM aws.networkmanager.connect_peers
WHERE connect_peer_id = '{{ connect_peer_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_connect_peers">

Returns a list of core network Connect peers.

```sql
SELECT
connect_attachment_id,
connect_peer_id,
connect_peer_state,
core_network_id,
created_at,
edge_location,
subnet_arn,
tags
FROM aws.networkmanager.connect_peers
WHERE region = '{{ region }}' -- required
AND coreNetworkId = '{{ coreNetworkId }}'
AND connectAttachmentId = '{{ connectAttachmentId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connect_peer"
    values={[
        { label: 'create_connect_peer', value: 'create_connect_peer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connect_peer">

Creates a core network Connect peer for a specified core network connect attachment between a core network and an appliance. The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).

```sql
INSERT INTO aws.networkmanager.connect_peers (
ConnectAttachmentId,
CoreNetworkAddress,
PeerAddress,
BgpOptions,
InsideCidrBlocks,
Tags,
ClientToken,
SubnetArn,
region
)
SELECT 
'{{ ConnectAttachmentId }}' /* required */,
'{{ CoreNetworkAddress }}',
'{{ PeerAddress }}' /* required */,
'{{ BgpOptions }}',
'{{ InsideCidrBlocks }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ SubnetArn }}',
'{{ region }}'
RETURNING
connect_peer
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connect_peers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connect_peers resource.
    - name: ConnectAttachmentId
      value: "{{ ConnectAttachmentId }}"
    - name: CoreNetworkAddress
      value: "{{ CoreNetworkAddress }}"
    - name: PeerAddress
      value: "{{ PeerAddress }}"
    - name: BgpOptions
      description: |
        Describes the BGP options.
      value:
        PeerAsn: {{ PeerAsn }}
    - name: InsideCidrBlocks
      value:
        - "{{ InsideCidrBlocks }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: SubnetArn
      value: "{{ SubnetArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_connect_peer"
    values={[
        { label: 'associate_connect_peer', value: 'associate_connect_peer' },
        { label: 'associate_transit_gateway_connect_peer', value: 'associate_transit_gateway_connect_peer' },
        { label: 'disassociate_connect_peer', value: 'disassociate_connect_peer' },
        { label: 'disassociate_transit_gateway_connect_peer', value: 'disassociate_transit_gateway_connect_peer' }
    ]}
>
<TabItem value="associate_connect_peer">

Associates a core network Connect peer with a device and optionally, with a link. If you specify a link, it must be associated with the specified device. You can only associate core network Connect peers that have been created on a core network Connect attachment on a core network.

```sql
UPDATE aws.networkmanager.connect_peers
SET 
ConnectPeerId = '{{ ConnectPeerId }}',
DeviceId = '{{ DeviceId }}',
LinkId = '{{ LinkId }}'
WHERE 
global_network_id = '{{ global_network_id }}' --required
AND region = '{{ region }}' --required
AND ConnectPeerId = '{{ ConnectPeerId }}' --required
AND DeviceId = '{{ DeviceId }}' --required
RETURNING
connect_peer_association;
```
</TabItem>
<TabItem value="associate_transit_gateway_connect_peer">

Associates a transit gateway Connect peer with a device, and optionally, with a link. If you specify a link, it must be associated with the specified device. You can only associate transit gateway Connect peers that have been created on a transit gateway that's registered in your global network. You cannot associate a transit gateway Connect peer with more than one device and link.

```sql
UPDATE aws.networkmanager.connect_peers
SET 
TransitGatewayConnectPeerArn = '{{ TransitGatewayConnectPeerArn }}',
DeviceId = '{{ DeviceId }}',
LinkId = '{{ LinkId }}'
WHERE 
global_network_id = '{{ global_network_id }}' --required
AND region = '{{ region }}' --required
AND TransitGatewayConnectPeerArn = '{{ TransitGatewayConnectPeerArn }}' --required
AND DeviceId = '{{ DeviceId }}' --required
RETURNING
transit_gateway_connect_peer_association;
```
</TabItem>
<TabItem value="disassociate_connect_peer">

Disassociates a core network Connect peer from a device and a link.

```sql
UPDATE aws.networkmanager.connect_peers
SET 
-- No updatable properties
WHERE 
global_network_id = '{{ global_network_id }}' --required
AND connect_peer_id = '{{ connect_peer_id }}' --required
AND region = '{{ region }}' --required
RETURNING
connect_peer_association;
```
</TabItem>
<TabItem value="disassociate_transit_gateway_connect_peer">

Disassociates a transit gateway Connect peer from a device and link.

```sql
UPDATE aws.networkmanager.connect_peers
SET 
-- No updatable properties
WHERE 
global_network_id = '{{ global_network_id }}' --required
AND transit_gateway_connect_peer_arn = '{{ transit_gateway_connect_peer_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
transit_gateway_connect_peer_association;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connect_peer"
    values={[
        { label: 'delete_connect_peer', value: 'delete_connect_peer' }
    ]}
>
<TabItem value="delete_connect_peer">

Deletes a Connect peer.

```sql
DELETE FROM aws.networkmanager.connect_peers
WHERE connect_peer_id = '{{ connect_peer_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
