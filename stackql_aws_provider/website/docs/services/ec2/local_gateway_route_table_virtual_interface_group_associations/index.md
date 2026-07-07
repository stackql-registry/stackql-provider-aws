--- 
title: local_gateway_route_table_virtual_interface_group_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - local_gateway_route_table_virtual_interface_group_associations
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

Creates, updates, deletes, gets or lists a <code>local_gateway_route_table_virtual_interface_group_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="local_gateway_route_table_virtual_interface_group_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.local_gateway_route_table_virtual_interface_group_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_local_gateway_route_table_virtual_interface_group_associations"
    values={[
        { label: 'describe_local_gateway_route_table_virtual_interface_group_associations', value: 'describe_local_gateway_route_table_virtual_interface_group_associations' }
    ]}
>
<TabItem value="describe_local_gateway_route_table_virtual_interface_group_associations">

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
    <td><CopyableCode code="LocalGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalGatewayRouteTableArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the local gateway route table for the virtual interface group.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalGatewayRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway route table.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalGatewayRouteTableVirtualInterfaceGroupAssociationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalGatewayVirtualInterfaceGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual interface group.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the local gateway virtual interface group association.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the association.</td>
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
    <td><a href="#describe_local_gateway_route_table_virtual_interface_group_associations"><CopyableCode code="describe_local_gateway_route_table_virtual_interface_group_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LocalGatewayRouteTableVirtualInterfaceGroupAssociationId"><code>LocalGatewayRouteTableVirtualInterfaceGroupAssociationId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the associations between virtual interface groups and local gateway route tables.</td>
</tr>
<tr>
    <td><a href="#create_local_gateway_route_table_virtual_interface_group_association"><CopyableCode code="create_local_gateway_route_table_virtual_interface_group_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LocalGatewayRouteTableId"><code>LocalGatewayRouteTableId</code></a>, <a href="#parameter-LocalGatewayVirtualInterfaceGroupId"><code>LocalGatewayVirtualInterfaceGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a local gateway route table virtual interface group association.</td>
</tr>
<tr>
    <td><a href="#delete_local_gateway_route_table_virtual_interface_group_association"><CopyableCode code="delete_local_gateway_route_table_virtual_interface_group_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-LocalGatewayRouteTableVirtualInterfaceGroupAssociationId"><code>LocalGatewayRouteTableVirtualInterfaceGroupAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes a local gateway route table virtual interface group association.</td>
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
<tr id="parameter-LocalGatewayRouteTableVirtualInterfaceGroupAssociationId">
    <td><CopyableCode code="LocalGatewayRouteTableVirtualInterfaceGroupAssociationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway route table virtual interface group association.</td>
</tr>
<tr id="parameter-LocalGatewayVirtualInterfaceGroupId">
    <td><CopyableCode code="LocalGatewayVirtualInterfaceGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway route table virtual interface group association.</td>
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
    <td>One or more filters. local-gateway-id - The ID of a local gateway. local-gateway-route-table-arn - The Amazon Resource Name (ARN) of the local gateway route table for the virtual interface group. local-gateway-route-table-id - The ID of the local gateway route table. local-gateway-route-table-virtual-interface-group-association-id - The ID of the association. local-gateway-route-table-virtual-interface-group-id - The ID of the virtual interface group. owner-id - The ID of the Amazon Web Services account that owns the local gateway virtual interface group association. state - The state of the association.</td>
</tr>
<tr id="parameter-LocalGatewayRouteTableVirtualInterfaceGroupAssociationId">
    <td><CopyableCode code="LocalGatewayRouteTableVirtualInterfaceGroupAssociationId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the associations.</td>
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
    <td>The tags assigned to the local gateway route table virtual interface group association.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_local_gateway_route_table_virtual_interface_group_associations"
    values={[
        { label: 'describe_local_gateway_route_table_virtual_interface_group_associations', value: 'describe_local_gateway_route_table_virtual_interface_group_associations' }
    ]}
>
<TabItem value="describe_local_gateway_route_table_virtual_interface_group_associations">

Describes the associations between virtual interface groups and local gateway route tables.

```sql
SELECT
LocalGatewayId,
LocalGatewayRouteTableArn,
LocalGatewayRouteTableId,
LocalGatewayRouteTableVirtualInterfaceGroupAssociationId,
LocalGatewayVirtualInterfaceGroupId,
OwnerId,
State,
Tags
FROM aws.ec2.local_gateway_route_table_virtual_interface_group_associations
WHERE region = '{{ region }}' -- required
AND LocalGatewayRouteTableVirtualInterfaceGroupAssociationId = '{{ LocalGatewayRouteTableVirtualInterfaceGroupAssociationId }}'
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
    defaultValue="create_local_gateway_route_table_virtual_interface_group_association"
    values={[
        { label: 'create_local_gateway_route_table_virtual_interface_group_association', value: 'create_local_gateway_route_table_virtual_interface_group_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_local_gateway_route_table_virtual_interface_group_association">

Creates a local gateway route table virtual interface group association.

```sql
INSERT INTO aws.ec2.local_gateway_route_table_virtual_interface_group_associations (
LocalGatewayRouteTableId,
LocalGatewayVirtualInterfaceGroupId,
region,
TagSpecification,
DryRun
)
SELECT 
'{{ LocalGatewayRouteTableId }}',
'{{ LocalGatewayVirtualInterfaceGroupId }}',
'{{ region }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
LocalGatewayId,
LocalGatewayRouteTableArn,
LocalGatewayRouteTableId,
LocalGatewayRouteTableVirtualInterfaceGroupAssociationId,
LocalGatewayVirtualInterfaceGroupId,
OwnerId,
State,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: local_gateway_route_table_virtual_interface_group_associations
  props:
    - name: LocalGatewayRouteTableId
      value: "{{ LocalGatewayRouteTableId }}"
      description: Required parameter for the local_gateway_route_table_virtual_interface_group_associations resource.
    - name: LocalGatewayVirtualInterfaceGroupId
      value: "{{ LocalGatewayVirtualInterfaceGroupId }}"
      description: Required parameter for the local_gateway_route_table_virtual_interface_group_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the local_gateway_route_table_virtual_interface_group_associations resource.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags assigned to the local gateway route table virtual interface group association.
      description: The tags assigned to the local gateway route table virtual interface group association.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_local_gateway_route_table_virtual_interface_group_association"
    values={[
        { label: 'delete_local_gateway_route_table_virtual_interface_group_association', value: 'delete_local_gateway_route_table_virtual_interface_group_association' }
    ]}
>
<TabItem value="delete_local_gateway_route_table_virtual_interface_group_association">

Deletes a local gateway route table virtual interface group association.

```sql
DELETE FROM aws.ec2.local_gateway_route_table_virtual_interface_group_associations
WHERE LocalGatewayRouteTableVirtualInterfaceGroupAssociationId = '{{ LocalGatewayRouteTableVirtualInterfaceGroupAssociationId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
