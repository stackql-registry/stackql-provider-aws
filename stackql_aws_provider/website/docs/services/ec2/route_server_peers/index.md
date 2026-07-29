--- 
title: route_server_peers
hide_title: false
hide_table_of_contents: false
keywords:
  - route_server_peers
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

Creates, updates, deletes, gets or lists a <code>route_server_peers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="route_server_peers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.route_server_peers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_route_server_peers"
    values={[
        { label: 'describe_route_server_peers', value: 'describe_route_server_peers' }
    ]}
>
<TabItem value="describe_route_server_peers">

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
    <td><CopyableCode code="bfd_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the BFD session with this peer.</td>
</tr>
<tr>
    <td><CopyableCode code="bgp_options" /></td>
    <td><code>string</code></td>
    <td>The BGP configuration options for this peer, including ASN (Autonomous System Number) and BFD (Bidrectional Forwarding Detection) settings.</td>
</tr>
<tr>
    <td><CopyableCode code="bgp_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the BGP session with this peer.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_eni_address" /></td>
    <td><code>string</code></td>
    <td>The IP address of the Elastic network interface for the route server endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_eni_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Elastic network interface for the route server endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for any failure in peer creation or operation.</td>
</tr>
<tr>
    <td><CopyableCode code="peer_address" /></td>
    <td><code>string</code></td>
    <td>The IPv4 address of the peer device.</td>
</tr>
<tr>
    <td><CopyableCode code="route_server_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the route server endpoint associated with this peer.</td>
</tr>
<tr>
    <td><CopyableCode code="route_server_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the route server associated with this peer.</td>
</tr>
<tr>
    <td><CopyableCode code="route_server_peer_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the route server peer.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the route server peer.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet containing the route server peer.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the route server peer.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC containing the route server peer.</td>
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
    <td><a href="#describe_route_server_peers"><CopyableCode code="describe_route_server_peers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RouteServerPeerId"><code>RouteServerPeerId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more route server peers. A route server peer is a session between a route server endpoint and the device deployed in Amazon Web Services (such as a firewall appliance or other network security function running on an EC2 instance). The device must meet these requirements: Have an elastic network interface in the VPC Support BGP (Border Gateway Protocol) Can initiate BGP sessions For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#create_route_server_peer"><CopyableCode code="create_route_server_peer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-RouteServerEndpointId"><code>RouteServerEndpointId</code></a>, <a href="#parameter-PeerAddress"><code>PeerAddress</code></a>, <a href="#parameter-BgpOptions"><code>BgpOptions</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Creates a new BGP peer for a specified route server endpoint. A route server peer is a session between a route server endpoint and the device deployed in Amazon Web Services (such as a firewall appliance or other network security function running on an EC2 instance). The device must meet these requirements: Have an elastic network interface in the VPC Support BGP (Border Gateway Protocol) Can initiate BGP sessions For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_route_server_peer"><CopyableCode code="delete_route_server_peer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-RouteServerPeerId"><code>RouteServerPeerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified BGP peer from a route server. A route server peer is a session between a route server endpoint and the device deployed in Amazon Web Services (such as a firewall appliance or other network security function running on an EC2 instance). The device must meet these requirements: Have an elastic network interface in the VPC Support BGP (Border Gateway Protocol) Can initiate BGP sessions</td>
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
<tr id="parameter-BgpOptions">
    <td><CopyableCode code="BgpOptions" /></td>
    <td><code>object</code></td>
    <td>The BGP options for the peer, including ASN (Autonomous System Number) and BFD (Bidrectional Forwarding Detection) settings.</td>
</tr>
<tr id="parameter-PeerAddress">
    <td><CopyableCode code="PeerAddress" /></td>
    <td><code>string</code></td>
    <td>The IPv4 address of the peer device.</td>
</tr>
<tr id="parameter-RouteServerEndpointId">
    <td><CopyableCode code="RouteServerEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the route server endpoint for which to create a peer.</td>
</tr>
<tr id="parameter-RouteServerPeerId">
    <td><CopyableCode code="RouteServerPeerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the route server peer to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters to apply to the describe request.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-RouteServerPeerId">
    <td><CopyableCode code="RouteServerPeerId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the route server peers to describe.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the route server peer during creation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_route_server_peers"
    values={[
        { label: 'describe_route_server_peers', value: 'describe_route_server_peers' }
    ]}
>
<TabItem value="describe_route_server_peers">

Describes one or more route server peers. A route server peer is a session between a route server endpoint and the device deployed in Amazon Web Services (such as a firewall appliance or other network security function running on an EC2 instance). The device must meet these requirements: Have an elastic network interface in the VPC Support BGP (Border Gateway Protocol) Can initiate BGP sessions For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.

```sql
SELECT
bfd_status,
bgp_options,
bgp_status,
endpoint_eni_address,
endpoint_eni_id,
failure_reason,
peer_address,
route_server_endpoint_id,
route_server_id,
route_server_peer_id,
state,
subnet_id,
tags,
vpc_id
FROM aws.ec2.route_server_peers
WHERE region = '{{ region }}' -- required
AND RouteServerPeerId = '{{ RouteServerPeerId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_route_server_peer"
    values={[
        { label: 'create_route_server_peer', value: 'create_route_server_peer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_route_server_peer">

Creates a new BGP peer for a specified route server endpoint. A route server peer is a session between a route server endpoint and the device deployed in Amazon Web Services (such as a firewall appliance or other network security function running on an EC2 instance). The device must meet these requirements: Have an elastic network interface in the VPC Support BGP (Border Gateway Protocol) Can initiate BGP sessions For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.

```sql
INSERT INTO aws.ec2.route_server_peers (
RouteServerEndpointId,
PeerAddress,
BgpOptions,
region,
DryRun,
TagSpecification
)
SELECT 
'{{ RouteServerEndpointId }}',
'{{ PeerAddress }}',
'{{ BgpOptions }}',
'{{ region }}',
'{{ DryRun }}',
'{{ TagSpecification }}'
RETURNING
bfd_status,
bgp_options,
bgp_status,
endpoint_eni_address,
endpoint_eni_id,
failure_reason,
peer_address,
route_server_endpoint_id,
route_server_id,
route_server_peer_id,
state,
subnet_id,
tags,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: route_server_peers
  props:
    - name: RouteServerEndpointId
      value: "{{ RouteServerEndpointId }}"
      description: Required parameter for the route_server_peers resource.
    - name: PeerAddress
      value: "{{ PeerAddress }}"
      description: Required parameter for the route_server_peers resource.
    - name: BgpOptions
      value: "{{ BgpOptions }}"
      description: Required parameter for the route_server_peers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the route_server_peers resource.
    - name: DryRun
      value: {{ DryRun }}
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the route server peer during creation.
      description: The tags to apply to the route server peer during creation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_route_server_peer"
    values={[
        { label: 'delete_route_server_peer', value: 'delete_route_server_peer' }
    ]}
>
<TabItem value="delete_route_server_peer">

Deletes the specified BGP peer from a route server. A route server peer is a session between a route server endpoint and the device deployed in Amazon Web Services (such as a firewall appliance or other network security function running on an EC2 instance). The device must meet these requirements: Have an elastic network interface in the VPC Support BGP (Border Gateway Protocol) Can initiate BGP sessions

```sql
DELETE FROM aws.ec2.route_server_peers
WHERE RouteServerPeerId = '{{ RouteServerPeerId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
