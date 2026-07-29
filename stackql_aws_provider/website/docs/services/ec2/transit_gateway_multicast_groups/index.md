--- 
title: transit_gateway_multicast_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_multicast_groups
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_multicast_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_multicast_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_multicast_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_transit_gateway_multicast_groups"
    values={[
        { label: 'search_transit_gateway_multicast_groups', value: 'search_transit_gateway_multicast_groups' }
    ]}
>
<TabItem value="search_transit_gateway_multicast_groups">

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
    <td><CopyableCode code="group_ip_address" /></td>
    <td><code>string</code></td>
    <td>The IP address assigned to the transit gateway multicast group.</td>
</tr>
<tr>
    <td><CopyableCode code="group_member" /></td>
    <td><code>boolean</code></td>
    <td>Indicates that the resource is a transit gateway multicast group member.</td>
</tr>
<tr>
    <td><CopyableCode code="group_source" /></td>
    <td><code>boolean</code></td>
    <td>Indicates that the resource is a transit gateway multicast group member.</td>
</tr>
<tr>
    <td><CopyableCode code="member_type" /></td>
    <td><code>string</code></td>
    <td>The member type (for example, static).</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the transit gateway multicast domain group resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource, for example a VPC attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="source_type" /></td>
    <td><code>string</code></td>
    <td>The source type.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_attachment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway attachment.</td>
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
    <td><a href="#search_transit_gateway_multicast_groups"><CopyableCode code="search_transit_gateway_multicast_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TransitGatewayMulticastDomainId"><code>TransitGatewayMulticastDomainId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Searches one or more transit gateway multicast groups and returns the group membership information.</td>
</tr>
<tr>
    <td><a href="#register_transit_gateway_multicast_group_members"><CopyableCode code="register_transit_gateway_multicast_group_members" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TransitGatewayMulticastDomainId"><code>TransitGatewayMulticastDomainId</code></a>, <a href="#parameter-NetworkInterfaceIds"><code>NetworkInterfaceIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-GroupIpAddress"><code>GroupIpAddress</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Registers members (network interfaces) with the transit gateway multicast group. A member is a network interface associated with a supported EC2 instance that receives multicast traffic. For more information, see Multicast on transit gateways in the Amazon Web Services Transit Gateways Guide. After you add the members, use SearchTransitGatewayMulticastGroups to verify that the members were added to the transit gateway multicast group.</td>
</tr>
<tr>
    <td><a href="#deregister_transit_gateway_multicast_group_members"><CopyableCode code="deregister_transit_gateway_multicast_group_members" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayMulticastDomainId"><code>TransitGatewayMulticastDomainId</code></a>, <a href="#parameter-GroupIpAddress"><code>GroupIpAddress</code></a>, <a href="#parameter-NetworkInterfaceIds"><code>NetworkInterfaceIds</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deregisters the specified members (network interfaces) from the transit gateway multicast group.</td>
</tr>
<tr>
    <td><a href="#deregister_transit_gateway_multicast_group_sources"><CopyableCode code="deregister_transit_gateway_multicast_group_sources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayMulticastDomainId"><code>TransitGatewayMulticastDomainId</code></a>, <a href="#parameter-GroupIpAddress"><code>GroupIpAddress</code></a>, <a href="#parameter-NetworkInterfaceIds"><code>NetworkInterfaceIds</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deregisters the specified sources (network interfaces) from the transit gateway multicast group.</td>
</tr>
<tr>
    <td><a href="#register_transit_gateway_multicast_group_sources"><CopyableCode code="register_transit_gateway_multicast_group_sources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TransitGatewayMulticastDomainId"><code>TransitGatewayMulticastDomainId</code></a>, <a href="#parameter-NetworkInterfaceIds"><code>NetworkInterfaceIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-GroupIpAddress"><code>GroupIpAddress</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Registers sources (network interfaces) with the specified transit gateway multicast group. A multicast source is a network interface attached to a supported instance that sends multicast traffic. For more information about supported instances, see Multicast on transit gateways in the Amazon Web Services Transit Gateways Guide. After you add the source, use SearchTransitGatewayMulticastGroups to verify that the source was added to the multicast group.</td>
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
<tr id="parameter-NetworkInterfaceIds">
    <td><CopyableCode code="NetworkInterfaceIds" /></td>
    <td><code>array</code></td>
    <td>The group sources' network interface IDs to register with the transit gateway multicast group.</td>
</tr>
<tr id="parameter-TransitGatewayMulticastDomainId">
    <td><CopyableCode code="TransitGatewayMulticastDomainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway multicast domain.</td>
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
    <td>One or more filters. The possible values are: group-ip-address - The IP address of the transit gateway multicast group. is-group-member - The resource is a group member. Valid values are true | false. is-group-source - The resource is a group source. Valid values are true | false. member-type - The member type. Valid values are igmp | static. resource-id - The ID of the resource. resource-type - The type of resource. Valid values are vpc | vpn | direct-connect-gateway | tgw-peering. source-type - The source type. Valid values are igmp | static. subnet-id - The ID of the subnet. transit-gateway-attachment-id - The id of the transit gateway attachment.</td>
</tr>
<tr id="parameter-GroupIpAddress">
    <td><CopyableCode code="GroupIpAddress" /></td>
    <td><code>string</code></td>
    <td>The IP address assigned to the transit gateway multicast group.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NetworkInterfaceIds">
    <td><CopyableCode code="NetworkInterfaceIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the group sources' network interfaces.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-TransitGatewayMulticastDomainId">
    <td><CopyableCode code="TransitGatewayMulticastDomainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway multicast domain.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="search_transit_gateway_multicast_groups"
    values={[
        { label: 'search_transit_gateway_multicast_groups', value: 'search_transit_gateway_multicast_groups' }
    ]}
>
<TabItem value="search_transit_gateway_multicast_groups">

Searches one or more transit gateway multicast groups and returns the group membership information.

```sql
SELECT
group_ip_address,
group_member,
group_source,
member_type,
network_interface_id,
resource_id,
resource_owner_id,
resource_type,
source_type,
subnet_id,
transit_gateway_attachment_id
FROM aws.ec2.transit_gateway_multicast_groups
WHERE TransitGatewayMulticastDomainId = '{{ TransitGatewayMulticastDomainId }}' -- required
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
    defaultValue="register_transit_gateway_multicast_group_members"
    values={[
        { label: 'register_transit_gateway_multicast_group_members', value: 'register_transit_gateway_multicast_group_members' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_transit_gateway_multicast_group_members">

Registers members (network interfaces) with the transit gateway multicast group. A member is a network interface associated with a supported EC2 instance that receives multicast traffic. For more information, see Multicast on transit gateways in the Amazon Web Services Transit Gateways Guide. After you add the members, use SearchTransitGatewayMulticastGroups to verify that the members were added to the transit gateway multicast group.

```sql
INSERT INTO aws.ec2.transit_gateway_multicast_groups (
TransitGatewayMulticastDomainId,
NetworkInterfaceIds,
region,
GroupIpAddress,
DryRun
)
SELECT 
'{{ TransitGatewayMulticastDomainId }}',
'{{ NetworkInterfaceIds }}',
'{{ region }}',
'{{ GroupIpAddress }}',
'{{ DryRun }}'
RETURNING
group_ip_address,
registered_network_interface_ids,
transit_gateway_multicast_domain_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateway_multicast_groups
  props:
    - name: TransitGatewayMulticastDomainId
      value: "{{ TransitGatewayMulticastDomainId }}"
      description: Required parameter for the transit_gateway_multicast_groups resource.
    - name: NetworkInterfaceIds
      value: "{{ NetworkInterfaceIds }}"
      description: Required parameter for the transit_gateway_multicast_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateway_multicast_groups resource.
    - name: GroupIpAddress
      value: "{{ GroupIpAddress }}"
      description: The IP address assigned to the transit gateway multicast group.
      description: The IP address assigned to the transit gateway multicast group.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_transit_gateway_multicast_group_members"
    values={[
        { label: 'deregister_transit_gateway_multicast_group_members', value: 'deregister_transit_gateway_multicast_group_members' }
    ]}
>
<TabItem value="deregister_transit_gateway_multicast_group_members">

Deregisters the specified members (network interfaces) from the transit gateway multicast group.

```sql
DELETE FROM aws.ec2.transit_gateway_multicast_groups
WHERE region = '{{ region }}' --required
AND TransitGatewayMulticastDomainId = '{{ TransitGatewayMulticastDomainId }}'
AND GroupIpAddress = '{{ GroupIpAddress }}'
AND NetworkInterfaceIds = '{{ NetworkInterfaceIds }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deregister_transit_gateway_multicast_group_sources"
    values={[
        { label: 'deregister_transit_gateway_multicast_group_sources', value: 'deregister_transit_gateway_multicast_group_sources' },
        { label: 'register_transit_gateway_multicast_group_sources', value: 'register_transit_gateway_multicast_group_sources' }
    ]}
>
<TabItem value="deregister_transit_gateway_multicast_group_sources">

Deregisters the specified sources (network interfaces) from the transit gateway multicast group.

```sql
EXEC aws.ec2.transit_gateway_multicast_groups.deregister_transit_gateway_multicast_group_sources 
@region='{{ region }}' --required, 
@TransitGatewayMulticastDomainId='{{ TransitGatewayMulticastDomainId }}', 
@GroupIpAddress='{{ GroupIpAddress }}', 
@NetworkInterfaceIds='{{ NetworkInterfaceIds }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="register_transit_gateway_multicast_group_sources">

Registers sources (network interfaces) with the specified transit gateway multicast group. A multicast source is a network interface attached to a supported instance that sends multicast traffic. For more information about supported instances, see Multicast on transit gateways in the Amazon Web Services Transit Gateways Guide. After you add the source, use SearchTransitGatewayMulticastGroups to verify that the source was added to the multicast group.

```sql
EXEC aws.ec2.transit_gateway_multicast_groups.register_transit_gateway_multicast_group_sources 
@TransitGatewayMulticastDomainId='{{ TransitGatewayMulticastDomainId }}' --required, 
@NetworkInterfaceIds='{{ NetworkInterfaceIds }}' --required, 
@region='{{ region }}' --required, 
@GroupIpAddress='{{ GroupIpAddress }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
