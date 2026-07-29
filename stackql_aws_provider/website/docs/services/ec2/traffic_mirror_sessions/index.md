--- 
title: traffic_mirror_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_mirror_sessions
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

Creates, updates, deletes, gets or lists a <code>traffic_mirror_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traffic_mirror_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.traffic_mirror_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_traffic_mirror_sessions"
    values={[
        { label: 'describe_traffic_mirror_sessions', value: 'describe_traffic_mirror_sessions' }
    ]}
>
<TabItem value="describe_traffic_mirror_sessions">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the Traffic Mirror session.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Traffic Mirror session's network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the account that owns the Traffic Mirror session.</td>
</tr>
<tr>
    <td><CopyableCode code="packet_length" /></td>
    <td><code>integer</code></td>
    <td>The number of bytes in each packet to mirror. These are the bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet</td>
</tr>
<tr>
    <td><CopyableCode code="session_number" /></td>
    <td><code>integer</code></td>
    <td>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets. Valid values are 1-32766.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the Traffic Mirror session.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_mirror_filter_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Traffic Mirror filter.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_mirror_session_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the Traffic Mirror session.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_mirror_target_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Traffic Mirror target.</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_network_id" /></td>
    <td><code>integer</code></td>
    <td>The virtual network ID associated with the Traffic Mirror session.</td>
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
    <td><a href="#describe_traffic_mirror_sessions"><CopyableCode code="describe_traffic_mirror_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TrafficMirrorSessionId"><code>TrafficMirrorSessionId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes one or more Traffic Mirror sessions. By default, all Traffic Mirror sessions are described. Alternatively, you can filter the results.</td>
</tr>
<tr>
    <td><a href="#create_traffic_mirror_session"><CopyableCode code="create_traffic_mirror_session" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-TrafficMirrorTargetId"><code>TrafficMirrorTargetId</code></a>, <a href="#parameter-TrafficMirrorFilterId"><code>TrafficMirrorFilterId</code></a>, <a href="#parameter-SessionNumber"><code>SessionNumber</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PacketLength"><code>PacketLength</code></a>, <a href="#parameter-VirtualNetworkId"><code>VirtualNetworkId</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Creates a Traffic Mirror session. A Traffic Mirror session actively copies packets from a Traffic Mirror source to a Traffic Mirror target. Create a filter, and then assign it to the session to define a subset of the traffic to mirror, for example all TCP traffic. The Traffic Mirror source and the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in a different VPC connected via VPC peering or a transit gateway. By default, no traffic is mirrored. Use CreateTrafficMirrorFilter to create filter rules that specify the traffic to mirror.</td>
</tr>
<tr>
    <td><a href="#modify_traffic_mirror_session"><CopyableCode code="modify_traffic_mirror_session" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TrafficMirrorSessionId"><code>TrafficMirrorSessionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TrafficMirrorTargetId"><code>TrafficMirrorTargetId</code></a>, <a href="#parameter-TrafficMirrorFilterId"><code>TrafficMirrorFilterId</code></a>, <a href="#parameter-PacketLength"><code>PacketLength</code></a>, <a href="#parameter-SessionNumber"><code>SessionNumber</code></a>, <a href="#parameter-VirtualNetworkId"><code>VirtualNetworkId</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-RemoveField"><code>RemoveField</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies a Traffic Mirror session.</td>
</tr>
<tr>
    <td><a href="#delete_traffic_mirror_session"><CopyableCode code="delete_traffic_mirror_session" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TrafficMirrorSessionId"><code>TrafficMirrorSessionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified Traffic Mirror session.</td>
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
<tr id="parameter-NetworkInterfaceId">
    <td><CopyableCode code="NetworkInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the source network interface.</td>
</tr>
<tr id="parameter-SessionNumber">
    <td><CopyableCode code="SessionNumber" /></td>
    <td><code>integer</code></td>
    <td>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets. Valid values are 1-32766.</td>
</tr>
<tr id="parameter-TrafficMirrorFilterId">
    <td><CopyableCode code="TrafficMirrorFilterId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Traffic Mirror filter.</td>
</tr>
<tr id="parameter-TrafficMirrorSessionId">
    <td><CopyableCode code="TrafficMirrorSessionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Traffic Mirror session.</td>
</tr>
<tr id="parameter-TrafficMirrorTargetId">
    <td><CopyableCode code="TrafficMirrorTargetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Traffic Mirror target.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description to assign to the Traffic Mirror session.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. The possible values are: description: The Traffic Mirror session description. network-interface-id: The ID of the Traffic Mirror session network interface. owner-id: The ID of the account that owns the Traffic Mirror session. packet-length: The assigned number of packets to mirror. session-number: The assigned session number. traffic-mirror-filter-id: The ID of the Traffic Mirror filter. traffic-mirror-session-id: The ID of the Traffic Mirror session. traffic-mirror-target-id: The ID of the Traffic Mirror target. virtual-network-id: The virtual network ID of the Traffic Mirror session.</td>
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
<tr id="parameter-PacketLength">
    <td><CopyableCode code="PacketLength" /></td>
    <td><code>integer</code></td>
    <td>The number of bytes in each packet to mirror. These are bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet. For sessions with Network Load Balancer (NLB) traffic mirror targets, the default PacketLength will be set to 8500. Valid values are 1-8500. Setting a PacketLength greater than 8500 will result in an error response.</td>
</tr>
<tr id="parameter-RemoveField">
    <td><CopyableCode code="RemoveField" /></td>
    <td><code>array</code></td>
    <td>The properties that you want to remove from the Traffic Mirror session. When you remove a property from a Traffic Mirror session, the property is set to the default.</td>
</tr>
<tr id="parameter-SessionNumber">
    <td><CopyableCode code="SessionNumber" /></td>
    <td><code>integer</code></td>
    <td>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets. Valid values are 1-32766.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to a Traffic Mirror session.</td>
</tr>
<tr id="parameter-TrafficMirrorFilterId">
    <td><CopyableCode code="TrafficMirrorFilterId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Traffic Mirror filter.</td>
</tr>
<tr id="parameter-TrafficMirrorSessionId">
    <td><CopyableCode code="TrafficMirrorSessionId" /></td>
    <td><code>array</code></td>
    <td>The ID of the Traffic Mirror session.</td>
</tr>
<tr id="parameter-TrafficMirrorTargetId">
    <td><CopyableCode code="TrafficMirrorTargetId" /></td>
    <td><code>string</code></td>
    <td>The Traffic Mirror target. The target must be in the same VPC as the source, or have a VPC peering connection with the source.</td>
</tr>
<tr id="parameter-VirtualNetworkId">
    <td><CopyableCode code="VirtualNetworkId" /></td>
    <td><code>integer</code></td>
    <td>The virtual network ID of the Traffic Mirror session.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_traffic_mirror_sessions"
    values={[
        { label: 'describe_traffic_mirror_sessions', value: 'describe_traffic_mirror_sessions' }
    ]}
>
<TabItem value="describe_traffic_mirror_sessions">

Describes one or more Traffic Mirror sessions. By default, all Traffic Mirror sessions are described. Alternatively, you can filter the results.

```sql
SELECT
description,
network_interface_id,
owner_id,
packet_length,
session_number,
tags,
traffic_mirror_filter_id,
traffic_mirror_session_id,
traffic_mirror_target_id,
virtual_network_id
FROM aws.ec2.traffic_mirror_sessions
WHERE region = '{{ region }}' -- required
AND TrafficMirrorSessionId = '{{ TrafficMirrorSessionId }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_traffic_mirror_session"
    values={[
        { label: 'create_traffic_mirror_session', value: 'create_traffic_mirror_session' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_traffic_mirror_session">

Creates a Traffic Mirror session. A Traffic Mirror session actively copies packets from a Traffic Mirror source to a Traffic Mirror target. Create a filter, and then assign it to the session to define a subset of the traffic to mirror, for example all TCP traffic. The Traffic Mirror source and the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in a different VPC connected via VPC peering or a transit gateway. By default, no traffic is mirrored. Use CreateTrafficMirrorFilter to create filter rules that specify the traffic to mirror.

```sql
INSERT INTO aws.ec2.traffic_mirror_sessions (
NetworkInterfaceId,
TrafficMirrorTargetId,
TrafficMirrorFilterId,
SessionNumber,
region,
PacketLength,
VirtualNetworkId,
Description,
TagSpecification,
DryRun,
ClientToken
)
SELECT 
'{{ NetworkInterfaceId }}',
'{{ TrafficMirrorTargetId }}',
'{{ TrafficMirrorFilterId }}',
'{{ SessionNumber }}',
'{{ region }}',
'{{ PacketLength }}',
'{{ VirtualNetworkId }}',
'{{ Description }}',
'{{ TagSpecification }}',
'{{ DryRun }}',
'{{ ClientToken }}'
RETURNING
description,
network_interface_id,
owner_id,
packet_length,
session_number,
tags,
traffic_mirror_filter_id,
traffic_mirror_session_id,
traffic_mirror_target_id,
virtual_network_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: traffic_mirror_sessions
  props:
    - name: NetworkInterfaceId
      value: "{{ NetworkInterfaceId }}"
      description: Required parameter for the traffic_mirror_sessions resource.
    - name: TrafficMirrorTargetId
      value: "{{ TrafficMirrorTargetId }}"
      description: Required parameter for the traffic_mirror_sessions resource.
    - name: TrafficMirrorFilterId
      value: "{{ TrafficMirrorFilterId }}"
      description: Required parameter for the traffic_mirror_sessions resource.
    - name: SessionNumber
      value: {{ SessionNumber }}
      description: Required parameter for the traffic_mirror_sessions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the traffic_mirror_sessions resource.
    - name: PacketLength
      value: {{ PacketLength }}
      description: The number of bytes in each packet to mirror. These are bytes after the VXLAN header. Do not specify this parameter when you want to mirror the entire packet. To mirror a subset of the packet, set this to the length (in bytes) that you want to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. If you do not want to mirror the entire packet, use the PacketLength parameter to specify the number of bytes in each packet to mirror. For sessions with Network Load Balancer (NLB) Traffic Mirror targets the default PacketLength will be set to 8500. Valid values are 1-8500. Setting a PacketLength greater than 8500 will result in an error response.
      description: The number of bytes in each packet to mirror. These are bytes after the VXLAN header. Do not specify this parameter when you want to mirror the entire packet. To mirror a subset of the packet, set this to the length (in bytes) that you want to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. If you do not want to mirror the entire packet, use the PacketLength parameter to specify the number of bytes in each packet to mirror. For sessions with Network Load Balancer (NLB) Traffic Mirror targets the default PacketLength will be set to 8500. Valid values are 1-8500. Setting a PacketLength greater than 8500 will result in an error response.
    - name: VirtualNetworkId
      value: {{ VirtualNetworkId }}
      description: The VXLAN ID for the Traffic Mirror session. For more information about the VXLAN protocol, see RFC 7348. If you do not specify a VirtualNetworkId, an account-wide unique ID is chosen at random.
      description: The VXLAN ID for the Traffic Mirror session. For more information about the VXLAN protocol, see RFC 7348. If you do not specify a VirtualNetworkId, an account-wide unique ID is chosen at random.
    - name: Description
      value: "{{ Description }}"
      description: The description of the Traffic Mirror session.
      description: The description of the Traffic Mirror session.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to a Traffic Mirror session.
      description: The tags to assign to a Traffic Mirror session.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_traffic_mirror_session"
    values={[
        { label: 'modify_traffic_mirror_session', value: 'modify_traffic_mirror_session' }
    ]}
>
<TabItem value="modify_traffic_mirror_session">

Modifies a Traffic Mirror session.

```sql
UPDATE aws.ec2.traffic_mirror_sessions
SET 
-- No updatable properties
WHERE 
TrafficMirrorSessionId = '{{ TrafficMirrorSessionId }}' --required
AND region = '{{ region }}' --required
AND TrafficMirrorTargetId = '{{ TrafficMirrorTargetId}}'
AND TrafficMirrorFilterId = '{{ TrafficMirrorFilterId}}'
AND PacketLength = '{{ PacketLength}}'
AND SessionNumber = '{{ SessionNumber}}'
AND VirtualNetworkId = '{{ VirtualNetworkId}}'
AND Description = '{{ Description}}'
AND RemoveField = '{{ RemoveField}}'
AND DryRun = {{ DryRun}}
RETURNING
description,
network_interface_id,
owner_id,
packet_length,
session_number,
tags,
traffic_mirror_filter_id,
traffic_mirror_session_id,
traffic_mirror_target_id,
virtual_network_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_traffic_mirror_session"
    values={[
        { label: 'delete_traffic_mirror_session', value: 'delete_traffic_mirror_session' }
    ]}
>
<TabItem value="delete_traffic_mirror_session">

Deletes the specified Traffic Mirror session.

```sql
DELETE FROM aws.ec2.traffic_mirror_sessions
WHERE TrafficMirrorSessionId = '{{ TrafficMirrorSessionId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
