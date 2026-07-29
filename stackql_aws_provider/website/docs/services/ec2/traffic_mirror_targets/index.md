--- 
title: traffic_mirror_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_mirror_targets
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

Creates, updates, deletes, gets or lists a <code>traffic_mirror_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traffic_mirror_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.traffic_mirror_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_traffic_mirror_targets"
    values={[
        { label: 'describe_traffic_mirror_targets', value: 'describe_traffic_mirror_targets' }
    ]}
>
<TabItem value="describe_traffic_mirror_targets">

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
    <td>Information about the Traffic Mirror target.</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_load_balancer_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Gateway Load Balancer endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_id" /></td>
    <td><code>string</code></td>
    <td>The network interface ID that is attached to the target.</td>
</tr>
<tr>
    <td><CopyableCode code="network_load_balancer_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Network Load Balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the account that owns the Traffic Mirror target.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the Traffic Mirror target.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_mirror_target_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Traffic Mirror target.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of Traffic Mirror target.</td>
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
    <td><a href="#describe_traffic_mirror_targets"><CopyableCode code="describe_traffic_mirror_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TrafficMirrorTargetId"><code>TrafficMirrorTargetId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Information about one or more Traffic Mirror targets.</td>
</tr>
<tr>
    <td><a href="#create_traffic_mirror_target"><CopyableCode code="create_traffic_mirror_target" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-NetworkLoadBalancerArn"><code>NetworkLoadBalancerArn</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-GatewayLoadBalancerEndpointId"><code>GatewayLoadBalancerEndpointId</code></a></td>
    <td>Creates a target for your Traffic Mirror session. A Traffic Mirror target is the destination for mirrored traffic. The Traffic Mirror source and the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in different VPCs connected via VPC peering or a transit gateway. A Traffic Mirror target can be a network interface, a Network Load Balancer, or a Gateway Load Balancer endpoint. To use the target in a Traffic Mirror session, use CreateTrafficMirrorSession.</td>
</tr>
<tr>
    <td><a href="#delete_traffic_mirror_target"><CopyableCode code="delete_traffic_mirror_target" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TrafficMirrorTargetId"><code>TrafficMirrorTargetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified Traffic Mirror target. You cannot delete a Traffic Mirror target that is in use by a Traffic Mirror session.</td>
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
    <td>The description of the Traffic Mirror target.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. The possible values are: description: The Traffic Mirror target description. network-interface-id: The ID of the Traffic Mirror session network interface. network-load-balancer-arn: The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the session. owner-id: The ID of the account that owns the Traffic Mirror session. traffic-mirror-target-id: The ID of the Traffic Mirror target.</td>
</tr>
<tr id="parameter-GatewayLoadBalancerEndpointId">
    <td><CopyableCode code="GatewayLoadBalancerEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Gateway Load Balancer endpoint.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NetworkInterfaceId">
    <td><CopyableCode code="NetworkInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The network interface ID that is associated with the target.</td>
</tr>
<tr id="parameter-NetworkLoadBalancerArn">
    <td><CopyableCode code="NetworkLoadBalancerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the Traffic Mirror target.</td>
</tr>
<tr id="parameter-TrafficMirrorTargetId">
    <td><CopyableCode code="TrafficMirrorTargetId" /></td>
    <td><code>array</code></td>
    <td>The ID of the Traffic Mirror targets.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_traffic_mirror_targets"
    values={[
        { label: 'describe_traffic_mirror_targets', value: 'describe_traffic_mirror_targets' }
    ]}
>
<TabItem value="describe_traffic_mirror_targets">

Information about one or more Traffic Mirror targets.

```sql
SELECT
description,
gateway_load_balancer_endpoint_id,
network_interface_id,
network_load_balancer_arn,
owner_id,
tags,
traffic_mirror_target_id,
type
FROM aws.ec2.traffic_mirror_targets
WHERE region = '{{ region }}' -- required
AND TrafficMirrorTargetId = '{{ TrafficMirrorTargetId }}'
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
    defaultValue="create_traffic_mirror_target"
    values={[
        { label: 'create_traffic_mirror_target', value: 'create_traffic_mirror_target' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_traffic_mirror_target">

Creates a target for your Traffic Mirror session. A Traffic Mirror target is the destination for mirrored traffic. The Traffic Mirror source and the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in different VPCs connected via VPC peering or a transit gateway. A Traffic Mirror target can be a network interface, a Network Load Balancer, or a Gateway Load Balancer endpoint. To use the target in a Traffic Mirror session, use CreateTrafficMirrorSession.

```sql
INSERT INTO aws.ec2.traffic_mirror_targets (
region,
NetworkInterfaceId,
NetworkLoadBalancerArn,
Description,
TagSpecification,
DryRun,
ClientToken,
GatewayLoadBalancerEndpointId
)
SELECT 
'{{ region }}',
'{{ NetworkInterfaceId }}',
'{{ NetworkLoadBalancerArn }}',
'{{ Description }}',
'{{ TagSpecification }}',
'{{ DryRun }}',
'{{ ClientToken }}',
'{{ GatewayLoadBalancerEndpointId }}'
RETURNING
description,
gateway_load_balancer_endpoint_id,
network_interface_id,
network_load_balancer_arn,
owner_id,
tags,
traffic_mirror_target_id,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: traffic_mirror_targets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the traffic_mirror_targets resource.
    - name: NetworkInterfaceId
      value: "{{ NetworkInterfaceId }}"
      description: The network interface ID that is associated with the target.
      description: The network interface ID that is associated with the target.
    - name: NetworkLoadBalancerArn
      value: "{{ NetworkLoadBalancerArn }}"
      description: The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.
      description: The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.
    - name: Description
      value: "{{ Description }}"
      description: The description of the Traffic Mirror target.
      description: The description of the Traffic Mirror target.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the Traffic Mirror target.
      description: The tags to assign to the Traffic Mirror target.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
    - name: GatewayLoadBalancerEndpointId
      value: "{{ GatewayLoadBalancerEndpointId }}"
      description: The ID of the Gateway Load Balancer endpoint.
      description: The ID of the Gateway Load Balancer endpoint.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_traffic_mirror_target"
    values={[
        { label: 'delete_traffic_mirror_target', value: 'delete_traffic_mirror_target' }
    ]}
>
<TabItem value="delete_traffic_mirror_target">

Deletes the specified Traffic Mirror target. You cannot delete a Traffic Mirror target that is in use by a Traffic Mirror session.

```sql
DELETE FROM aws.ec2.traffic_mirror_targets
WHERE TrafficMirrorTargetId = '{{ TrafficMirrorTargetId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
