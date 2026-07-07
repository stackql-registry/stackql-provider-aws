--- 
title: local_gateway_virtual_interfaces
hide_title: false
hide_table_of_contents: false
keywords:
  - local_gateway_virtual_interfaces
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

Creates, updates, deletes, gets or lists a <code>local_gateway_virtual_interfaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="local_gateway_virtual_interfaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.local_gateway_virtual_interfaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_local_gateway_virtual_interfaces"
    values={[
        { label: 'describe_local_gateway_virtual_interfaces', value: 'describe_local_gateway_virtual_interfaces' }
    ]}
>
<TabItem value="describe_local_gateway_virtual_interfaces">

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
    <td><CopyableCode code="ConfigurationState" /></td>
    <td><code>string</code></td>
    <td>The current state of the local gateway virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalAddress" /></td>
    <td><code>string</code></td>
    <td>The local address.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalBgpAsn" /></td>
    <td><code>integer</code></td>
    <td>The Border Gateway Protocol (BGP) Autonomous System Number (ASN) of the local gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalGatewayVirtualInterfaceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the local gateway virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalGatewayVirtualInterfaceGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway virtual interface group.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalGatewayVirtualInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="OutpostLagId" /></td>
    <td><code>string</code></td>
    <td>The Outpost LAG ID.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the local gateway virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="PeerAddress" /></td>
    <td><code>string</code></td>
    <td>The peer address.</td>
</tr>
<tr>
    <td><CopyableCode code="PeerBgpAsn" /></td>
    <td><code>integer</code></td>
    <td>The peer BGP ASN.</td>
</tr>
<tr>
    <td><CopyableCode code="PeerBgpAsnExtended" /></td>
    <td><code>integer</code></td>
    <td>The extended 32-bit ASN of the BGP peer for use with larger ASN values.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="Vlan" /></td>
    <td><code>integer</code></td>
    <td>The ID of the VLAN.</td>
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
    <td><a href="#describe_local_gateway_virtual_interfaces"><CopyableCode code="describe_local_gateway_virtual_interfaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LocalGatewayVirtualInterfaceId"><code>LocalGatewayVirtualInterfaceId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the specified local gateway virtual interfaces.</td>
</tr>
<tr>
    <td><a href="#create_local_gateway_virtual_interface"><CopyableCode code="create_local_gateway_virtual_interface" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LocalGatewayVirtualInterfaceGroupId"><code>LocalGatewayVirtualInterfaceGroupId</code></a>, <a href="#parameter-OutpostLagId"><code>OutpostLagId</code></a>, <a href="#parameter-LocalAddress"><code>LocalAddress</code></a>, <a href="#parameter-PeerAddress"><code>PeerAddress</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Vlan"><code>Vlan</code></a>, <a href="#parameter-PeerBgpAsn"><code>PeerBgpAsn</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-PeerBgpAsnExtended"><code>PeerBgpAsnExtended</code></a></td>
    <td>Create a virtual interface for a local gateway.</td>
</tr>
<tr>
    <td><a href="#delete_local_gateway_virtual_interface"><CopyableCode code="delete_local_gateway_virtual_interface" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-LocalGatewayVirtualInterfaceId"><code>LocalGatewayVirtualInterfaceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified local gateway virtual interface.</td>
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
<tr id="parameter-LocalAddress">
    <td><CopyableCode code="LocalAddress" /></td>
    <td><code>string</code></td>
    <td>The IP address assigned to the local gateway virtual interface on the Outpost side. Only IPv4 is supported.</td>
</tr>
<tr id="parameter-LocalGatewayVirtualInterfaceGroupId">
    <td><CopyableCode code="LocalGatewayVirtualInterfaceGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway virtual interface group.</td>
</tr>
<tr id="parameter-LocalGatewayVirtualInterfaceId">
    <td><CopyableCode code="LocalGatewayVirtualInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the local virtual interface to delete.</td>
</tr>
<tr id="parameter-OutpostLagId">
    <td><CopyableCode code="OutpostLagId" /></td>
    <td><code>string</code></td>
    <td>References the Link Aggregation Group (LAG) that connects the Outpost to on-premises network devices.</td>
</tr>
<tr id="parameter-PeerAddress">
    <td><CopyableCode code="PeerAddress" /></td>
    <td><code>string</code></td>
    <td>The peer IP address for the local gateway virtual interface. Only IPv4 is supported.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. local-address - The local address. local-bgp-asn - The Border Gateway Protocol (BGP) Autonomous System Number (ASN) of the local gateway. local-gateway-id - The ID of the local gateway. local-gateway-virtual-interface-id - The ID of the virtual interface. owner-id - The ID of the Amazon Web Services account that owns the local gateway virtual interface. peer-address - The peer address. peer-bgp-asn - The peer BGP ASN. vlan - The ID of the VLAN.</td>
</tr>
<tr id="parameter-LocalGatewayVirtualInterfaceId">
    <td><CopyableCode code="LocalGatewayVirtualInterfaceId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the virtual interfaces.</td>
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
<tr id="parameter-PeerBgpAsn">
    <td><CopyableCode code="PeerBgpAsn" /></td>
    <td><code>integer</code></td>
    <td>The Autonomous System Number (ASN) of the Border Gateway Protocol (BGP) peer.</td>
</tr>
<tr id="parameter-PeerBgpAsnExtended">
    <td><CopyableCode code="PeerBgpAsnExtended" /></td>
    <td><code>integer (int64)</code></td>
    <td>The extended 32-bit ASN of the BGP peer for use with larger ASN values.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to a resource when the local gateway virtual interface is being created.</td>
</tr>
<tr id="parameter-Vlan">
    <td><CopyableCode code="Vlan" /></td>
    <td><code>integer</code></td>
    <td>The virtual local area network (VLAN) used for the local gateway virtual interface.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_local_gateway_virtual_interfaces"
    values={[
        { label: 'describe_local_gateway_virtual_interfaces', value: 'describe_local_gateway_virtual_interfaces' }
    ]}
>
<TabItem value="describe_local_gateway_virtual_interfaces">

Describes the specified local gateway virtual interfaces.

```sql
SELECT
ConfigurationState,
LocalAddress,
LocalBgpAsn,
LocalGatewayId,
LocalGatewayVirtualInterfaceArn,
LocalGatewayVirtualInterfaceGroupId,
LocalGatewayVirtualInterfaceId,
OutpostLagId,
OwnerId,
PeerAddress,
PeerBgpAsn,
PeerBgpAsnExtended,
Tags,
Vlan
FROM aws.ec2.local_gateway_virtual_interfaces
WHERE region = '{{ region }}' -- required
AND LocalGatewayVirtualInterfaceId = '{{ LocalGatewayVirtualInterfaceId }}'
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
    defaultValue="create_local_gateway_virtual_interface"
    values={[
        { label: 'create_local_gateway_virtual_interface', value: 'create_local_gateway_virtual_interface' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_local_gateway_virtual_interface">

Create a virtual interface for a local gateway.

```sql
INSERT INTO aws.ec2.local_gateway_virtual_interfaces (
LocalGatewayVirtualInterfaceGroupId,
OutpostLagId,
LocalAddress,
PeerAddress,
region,
Vlan,
PeerBgpAsn,
TagSpecification,
DryRun,
PeerBgpAsnExtended
)
SELECT 
'{{ LocalGatewayVirtualInterfaceGroupId }}',
'{{ OutpostLagId }}',
'{{ LocalAddress }}',
'{{ PeerAddress }}',
'{{ region }}',
'{{ Vlan }}',
'{{ PeerBgpAsn }}',
'{{ TagSpecification }}',
'{{ DryRun }}',
'{{ PeerBgpAsnExtended }}'
RETURNING
ConfigurationState,
LocalAddress,
LocalBgpAsn,
LocalGatewayId,
LocalGatewayVirtualInterfaceArn,
LocalGatewayVirtualInterfaceGroupId,
LocalGatewayVirtualInterfaceId,
OutpostLagId,
OwnerId,
PeerAddress,
PeerBgpAsn,
PeerBgpAsnExtended,
Tags,
Vlan
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: local_gateway_virtual_interfaces
  props:
    - name: LocalGatewayVirtualInterfaceGroupId
      value: "{{ LocalGatewayVirtualInterfaceGroupId }}"
      description: Required parameter for the local_gateway_virtual_interfaces resource.
    - name: OutpostLagId
      value: "{{ OutpostLagId }}"
      description: Required parameter for the local_gateway_virtual_interfaces resource.
    - name: LocalAddress
      value: "{{ LocalAddress }}"
      description: Required parameter for the local_gateway_virtual_interfaces resource.
    - name: PeerAddress
      value: "{{ PeerAddress }}"
      description: Required parameter for the local_gateway_virtual_interfaces resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the local_gateway_virtual_interfaces resource.
    - name: Vlan
      value: {{ Vlan }}
      description: The virtual local area network (VLAN) used for the local gateway virtual interface.
      description: The virtual local area network (VLAN) used for the local gateway virtual interface.
    - name: PeerBgpAsn
      value: {{ PeerBgpAsn }}
      description: The Autonomous System Number (ASN) of the Border Gateway Protocol (BGP) peer.
      description: The Autonomous System Number (ASN) of the Border Gateway Protocol (BGP) peer.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to a resource when the local gateway virtual interface is being created.
      description: The tags to apply to a resource when the local gateway virtual interface is being created.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: PeerBgpAsnExtended
      value: "{{ PeerBgpAsnExtended }}"
      description: The extended 32-bit ASN of the BGP peer for use with larger ASN values.
      description: The extended 32-bit ASN of the BGP peer for use with larger ASN values.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_local_gateway_virtual_interface"
    values={[
        { label: 'delete_local_gateway_virtual_interface', value: 'delete_local_gateway_virtual_interface' }
    ]}
>
<TabItem value="delete_local_gateway_virtual_interface">

Deletes the specified local gateway virtual interface.

```sql
DELETE FROM aws.ec2.local_gateway_virtual_interfaces
WHERE LocalGatewayVirtualInterfaceId = '{{ LocalGatewayVirtualInterfaceId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
