--- 
title: client_vpn_target_networks
hide_title: false
hide_table_of_contents: false
keywords:
  - client_vpn_target_networks
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

Creates, updates, deletes, gets or lists a <code>client_vpn_target_networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="client_vpn_target_networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.client_vpn_target_networks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_client_vpn_target_networks"
    values={[
        { label: 'describe_client_vpn_target_networks', value: 'describe_client_vpn_target_networks' }
    ]}
>
<TabItem value="describe_client_vpn_target_networks">

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
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_ids" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone IDs for the target network association, if the Client VPN endpoint uses a Transit Gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone names for the target network association, if the Client VPN endpoint uses a Transit Gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="client_vpn_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Client VPN endpoint with which the target network is associated.</td>
</tr>
<tr>
    <td><CopyableCode code="security_groups" /></td>
    <td><code>string</code></td>
    <td>The IDs of the security groups applied to the target network association.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current state of the target network association.</td>
</tr>
<tr>
    <td><CopyableCode code="target_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet specified as the target network.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC in which the target network (subnet) is located.</td>
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
    <td><a href="#describe_client_vpn_target_networks"><CopyableCode code="describe_client_vpn_target_networks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AssociationIds"><code>AssociationIds</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the target networks associated with the specified Client VPN endpoint.</td>
</tr>
<tr>
    <td><a href="#disassociate_client_vpn_target_network"><CopyableCode code="disassociate_client_vpn_target_network" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-AssociationId"><code>AssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disassociates a target network from the specified Client VPN endpoint. When you disassociate the last target network from a Client VPN, the following happens: The route that was automatically added for the VPC is deleted All active client connections are terminated New client connections are disallowed The Client VPN endpoint's status changes to pending-associate</td>
</tr>
<tr>
    <td><a href="#associate_client_vpn_target_network"><CopyableCode code="associate_client_vpn_target_network" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SubnetId"><code>SubnetId</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-AvailabilityZoneId"><code>AvailabilityZoneId</code></a></td>
    <td>Associates a target network with a Client VPN endpoint. A target network is a subnet in a VPC. You can associate multiple subnets from the same VPC with a Client VPN endpoint. You can associate only one subnet in each Availability Zone. We recommend that you associate at least two subnets to provide Availability Zone redundancy. If you specified a VPC when you created the Client VPN endpoint or if you have previous subnet associations, the specified subnet must be in the same VPC. To specify a subnet that's in a different VPC, you must first modify the Client VPN endpoint (ModifyClientVpnEndpoint) and change the VPC that's associated with it.</td>
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
<tr id="parameter-AssociationId">
    <td><CopyableCode code="AssociationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the target network association.</td>
</tr>
<tr id="parameter-ClientVpnEndpointId">
    <td><CopyableCode code="ClientVpnEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Client VPN endpoint.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AssociationIds">
    <td><CopyableCode code="AssociationIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the target network associations.</td>
</tr>
<tr id="parameter-AvailabilityZone">
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone name for the Transit Gateway association. Required if when associating an Availability Zone with a Client VPN endpoint that uses a Transit Gateway. You cannot specify both SubnetId and AvailabilityZone.</td>
</tr>
<tr id="parameter-AvailabilityZoneId">
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone ID for the Transit Gateway association. Required if when associating an Availability Zone with a Client VPN endpoint that uses a Transit Gateway. You cannot specify both AvailabilityZone and AvailabilityZoneId.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. Filter names and values are case-sensitive. association-id - The ID of the association. target-network-id - The ID of the subnet specified as the target network. vpc-id - The ID of the VPC in which the target network is located.</td>
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
<tr id="parameter-SubnetId">
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet to associate with the Client VPN endpoint. Required for VPC-based endpoints. For Transit Gateway-based endpoints, use AvailabilityZone or AvailabilityZoneId instead.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_client_vpn_target_networks"
    values={[
        { label: 'describe_client_vpn_target_networks', value: 'describe_client_vpn_target_networks' }
    ]}
>
<TabItem value="describe_client_vpn_target_networks">

Describes the target networks associated with the specified Client VPN endpoint.

```sql
SELECT
association_id,
availability_zone_ids,
availability_zones,
client_vpn_endpoint_id,
security_groups,
status,
target_network_id,
vpc_id
FROM aws.ec2.client_vpn_target_networks
WHERE ClientVpnEndpointId = '{{ ClientVpnEndpointId }}' -- required
AND region = '{{ region }}' -- required
AND AssociationIds = '{{ AssociationIds }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="disassociate_client_vpn_target_network"
    values={[
        { label: 'disassociate_client_vpn_target_network', value: 'disassociate_client_vpn_target_network' },
        { label: 'associate_client_vpn_target_network', value: 'associate_client_vpn_target_network' }
    ]}
>
<TabItem value="disassociate_client_vpn_target_network">

Disassociates a target network from the specified Client VPN endpoint. When you disassociate the last target network from a Client VPN, the following happens: The route that was automatically added for the VPC is deleted All active client connections are terminated New client connections are disallowed The Client VPN endpoint's status changes to pending-associate

```sql
UPDATE aws.ec2.client_vpn_target_networks
SET 
-- No updatable properties
WHERE 
ClientVpnEndpointId = '{{ ClientVpnEndpointId }}' --required
AND AssociationId = '{{ AssociationId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
association_id,
status;
```
</TabItem>
<TabItem value="associate_client_vpn_target_network">

Associates a target network with a Client VPN endpoint. A target network is a subnet in a VPC. You can associate multiple subnets from the same VPC with a Client VPN endpoint. You can associate only one subnet in each Availability Zone. We recommend that you associate at least two subnets to provide Availability Zone redundancy. If you specified a VPC when you created the Client VPN endpoint or if you have previous subnet associations, the specified subnet must be in the same VPC. To specify a subnet that's in a different VPC, you must first modify the Client VPN endpoint (ModifyClientVpnEndpoint) and change the VPC that's associated with it.

```sql
UPDATE aws.ec2.client_vpn_target_networks
SET 
-- No updatable properties
WHERE 
ClientVpnEndpointId = '{{ ClientVpnEndpointId }}' --required
AND region = '{{ region }}' --required
AND SubnetId = '{{ SubnetId}}'
AND ClientToken = '{{ ClientToken}}'
AND DryRun = {{ DryRun}}
AND AvailabilityZone = '{{ AvailabilityZone}}'
AND AvailabilityZoneId = '{{ AvailabilityZoneId}}'
RETURNING
association_id,
status;
```
</TabItem>
</Tabs>
