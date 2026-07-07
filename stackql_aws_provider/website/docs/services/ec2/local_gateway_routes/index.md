--- 
title: local_gateway_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - local_gateway_routes
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

Creates, updates, deletes, gets or lists a <code>local_gateway_routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="local_gateway_routes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.local_gateway_routes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_local_gateway_routes"
    values={[
        { label: 'search_local_gateway_routes', value: 'search_local_gateway_routes' }
    ]}
>
<TabItem value="search_local_gateway_routes">

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
    <td><CopyableCode code="CoipPoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the customer-owned address pool.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationCidrBlock" /></td>
    <td><code>string</code></td>
    <td>The CIDR block used for destination matches.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationPrefixListId" /></td>
    <td><code>string</code></td>
    <td>The ID of the prefix list.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalGatewayRouteTableArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the local gateway route table.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalGatewayRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway route table.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalGatewayVirtualInterfaceGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual interface group.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the local gateway route.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the route.</td>
</tr>
<tr>
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet.</td>
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
    <td><a href="#search_local_gateway_routes"><CopyableCode code="search_local_gateway_routes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-LocalGatewayRouteTableId"><code>LocalGatewayRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Searches for routes in the specified local gateway route table.</td>
</tr>
<tr>
    <td><a href="#create_local_gateway_route"><CopyableCode code="create_local_gateway_route" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LocalGatewayRouteTableId"><code>LocalGatewayRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DestinationCidrBlock"><code>DestinationCidrBlock</code></a>, <a href="#parameter-LocalGatewayVirtualInterfaceGroupId"><code>LocalGatewayVirtualInterfaceGroupId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-DestinationPrefixListId"><code>DestinationPrefixListId</code></a></td>
    <td>Creates a static route for the specified local gateway route table. You must specify one of the following targets: LocalGatewayVirtualInterfaceGroupId NetworkInterfaceId</td>
</tr>
<tr>
    <td><a href="#modify_local_gateway_route"><CopyableCode code="modify_local_gateway_route" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-LocalGatewayRouteTableId"><code>LocalGatewayRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DestinationCidrBlock"><code>DestinationCidrBlock</code></a>, <a href="#parameter-LocalGatewayVirtualInterfaceGroupId"><code>LocalGatewayVirtualInterfaceGroupId</code></a>, <a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-DestinationPrefixListId"><code>DestinationPrefixListId</code></a></td>
    <td>Modifies the specified local gateway route.</td>
</tr>
<tr>
    <td><a href="#delete_local_gateway_route"><CopyableCode code="delete_local_gateway_route" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-LocalGatewayRouteTableId"><code>LocalGatewayRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DestinationCidrBlock"><code>DestinationCidrBlock</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-DestinationPrefixListId"><code>DestinationPrefixListId</code></a></td>
    <td>Deletes the specified route from the specified local gateway route table.</td>
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
<tr id="parameter-LocalGatewayRouteTableId">
    <td><CopyableCode code="LocalGatewayRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway route table.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DestinationCidrBlock">
    <td><CopyableCode code="DestinationCidrBlock" /></td>
    <td><code>string</code></td>
    <td>The CIDR range for the route. This must match the CIDR for the route exactly.</td>
</tr>
<tr id="parameter-DestinationPrefixListId">
    <td><CopyableCode code="DestinationPrefixListId" /></td>
    <td><code>string</code></td>
    <td>Use a prefix list in place of DestinationCidrBlock. You cannot use DestinationPrefixListId and DestinationCidrBlock in the same request.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. prefix-list-id - The ID of the prefix list. route-search.exact-match - The exact match of the specified filter. route-search.longest-prefix-match - The longest prefix that matches the route. route-search.subnet-of-match - The routes with a subnet that match the specified CIDR filter. route-search.supernet-of-match - The routes with a CIDR that encompass the CIDR filter. For example, if you have 10.0.1.0/29 and 10.0.1.0/31 routes in your route table and you specify supernet-of-match as 10.0.1.0/30, then the result returns 10.0.1.0/29. state - The state of the route. type - The route type.</td>
</tr>
<tr id="parameter-LocalGatewayVirtualInterfaceGroupId">
    <td><CopyableCode code="LocalGatewayVirtualInterfaceGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual interface group.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NetworkInterfaceId">
    <td><CopyableCode code="NetworkInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the network interface.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="search_local_gateway_routes"
    values={[
        { label: 'search_local_gateway_routes', value: 'search_local_gateway_routes' }
    ]}
>
<TabItem value="search_local_gateway_routes">

Searches for routes in the specified local gateway route table.

```sql
SELECT
CoipPoolId,
DestinationCidrBlock,
DestinationPrefixListId,
LocalGatewayRouteTableArn,
LocalGatewayRouteTableId,
LocalGatewayVirtualInterfaceGroupId,
NetworkInterfaceId,
OwnerId,
State,
SubnetId,
Type
FROM aws.ec2.local_gateway_routes
WHERE LocalGatewayRouteTableId = '{{ LocalGatewayRouteTableId }}' -- required
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
    defaultValue="create_local_gateway_route"
    values={[
        { label: 'create_local_gateway_route', value: 'create_local_gateway_route' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_local_gateway_route">

Creates a static route for the specified local gateway route table. You must specify one of the following targets: LocalGatewayVirtualInterfaceGroupId NetworkInterfaceId

```sql
INSERT INTO aws.ec2.local_gateway_routes (
LocalGatewayRouteTableId,
region,
DestinationCidrBlock,
LocalGatewayVirtualInterfaceGroupId,
DryRun,
NetworkInterfaceId,
DestinationPrefixListId
)
SELECT 
'{{ LocalGatewayRouteTableId }}',
'{{ region }}',
'{{ DestinationCidrBlock }}',
'{{ LocalGatewayVirtualInterfaceGroupId }}',
'{{ DryRun }}',
'{{ NetworkInterfaceId }}',
'{{ DestinationPrefixListId }}'
RETURNING
CoipPoolId,
DestinationCidrBlock,
DestinationPrefixListId,
LocalGatewayRouteTableArn,
LocalGatewayRouteTableId,
LocalGatewayVirtualInterfaceGroupId,
NetworkInterfaceId,
OwnerId,
State,
SubnetId,
Type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: local_gateway_routes
  props:
    - name: LocalGatewayRouteTableId
      value: "{{ LocalGatewayRouteTableId }}"
      description: Required parameter for the local_gateway_routes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the local_gateway_routes resource.
    - name: DestinationCidrBlock
      value: "{{ DestinationCidrBlock }}"
      description: The CIDR range used for destination matches. Routing decisions are based on the most specific match.
      description: The CIDR range used for destination matches. Routing decisions are based on the most specific match.
    - name: LocalGatewayVirtualInterfaceGroupId
      value: "{{ LocalGatewayVirtualInterfaceGroupId }}"
      description: The ID of the virtual interface group.
      description: The ID of the virtual interface group.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: NetworkInterfaceId
      value: "{{ NetworkInterfaceId }}"
      description: The ID of the network interface.
      description: The ID of the network interface.
    - name: DestinationPrefixListId
      value: "{{ DestinationPrefixListId }}"
      description: The ID of the prefix list. Use a prefix list in place of DestinationCidrBlock. You cannot use DestinationPrefixListId and DestinationCidrBlock in the same request.
      description: The ID of the prefix list. Use a prefix list in place of DestinationCidrBlock. You cannot use DestinationPrefixListId and DestinationCidrBlock in the same request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_local_gateway_route"
    values={[
        { label: 'modify_local_gateway_route', value: 'modify_local_gateway_route' }
    ]}
>
<TabItem value="modify_local_gateway_route">

Modifies the specified local gateway route.

```sql
UPDATE aws.ec2.local_gateway_routes
SET 
-- No updatable properties
WHERE 
LocalGatewayRouteTableId = '{{ LocalGatewayRouteTableId }}' --required
AND region = '{{ region }}' --required
AND DestinationCidrBlock = '{{ DestinationCidrBlock}}'
AND LocalGatewayVirtualInterfaceGroupId = '{{ LocalGatewayVirtualInterfaceGroupId}}'
AND NetworkInterfaceId = '{{ NetworkInterfaceId}}'
AND DryRun = {{ DryRun}}
AND DestinationPrefixListId = '{{ DestinationPrefixListId}}'
RETURNING
CoipPoolId,
DestinationCidrBlock,
DestinationPrefixListId,
LocalGatewayRouteTableArn,
LocalGatewayRouteTableId,
LocalGatewayVirtualInterfaceGroupId,
NetworkInterfaceId,
OwnerId,
State,
SubnetId,
Type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_local_gateway_route"
    values={[
        { label: 'delete_local_gateway_route', value: 'delete_local_gateway_route' }
    ]}
>
<TabItem value="delete_local_gateway_route">

Deletes the specified route from the specified local gateway route table.

```sql
DELETE FROM aws.ec2.local_gateway_routes
WHERE LocalGatewayRouteTableId = '{{ LocalGatewayRouteTableId }}' --required
AND region = '{{ region }}' --required
AND DestinationCidrBlock = '{{ DestinationCidrBlock }}'
AND DryRun = '{{ DryRun }}'
AND DestinationPrefixListId = '{{ DestinationPrefixListId }}'
;
```
</TabItem>
</Tabs>
