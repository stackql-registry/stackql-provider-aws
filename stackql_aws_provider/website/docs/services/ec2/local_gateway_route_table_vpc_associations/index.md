--- 
title: local_gateway_route_table_vpc_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - local_gateway_route_table_vpc_associations
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

Creates, updates, deletes, gets or lists a <code>local_gateway_route_table_vpc_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="local_gateway_route_table_vpc_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.local_gateway_route_table_vpc_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_local_gateway_route_table_vpc_associations"
    values={[
        { label: 'describe_local_gateway_route_table_vpc_associations', value: 'describe_local_gateway_route_table_vpc_associations' }
    ]}
>
<TabItem value="describe_local_gateway_route_table_vpc_associations">

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
    <td><CopyableCode code="local_gateway_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="local_gateway_route_table_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the local gateway route table for the association.</td>
</tr>
<tr>
    <td><CopyableCode code="local_gateway_route_table_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway route table.</td>
</tr>
<tr>
    <td><CopyableCode code="local_gateway_route_table_vpc_association_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the local gateway route table for the association.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the association.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
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
    <td><a href="#describe_local_gateway_route_table_vpc_associations"><CopyableCode code="describe_local_gateway_route_table_vpc_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LocalGatewayRouteTableVpcAssociationId"><code>LocalGatewayRouteTableVpcAssociationId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the specified associations between VPCs and local gateway route tables.</td>
</tr>
<tr>
    <td><a href="#create_local_gateway_route_table_vpc_association"><CopyableCode code="create_local_gateway_route_table_vpc_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LocalGatewayRouteTableId"><code>LocalGatewayRouteTableId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Associates the specified VPC with the specified local gateway route table.</td>
</tr>
<tr>
    <td><a href="#delete_local_gateway_route_table_vpc_association"><CopyableCode code="delete_local_gateway_route_table_vpc_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-LocalGatewayRouteTableVpcAssociationId"><code>LocalGatewayRouteTableVpcAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified association between a VPC and local gateway route table.</td>
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
<tr id="parameter-LocalGatewayRouteTableVpcAssociationId">
    <td><CopyableCode code="LocalGatewayRouteTableVpcAssociationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the association.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
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
    <td>One or more filters. local-gateway-id - The ID of a local gateway. local-gateway-route-table-arn - The Amazon Resource Name (ARN) of the local gateway route table for the association. local-gateway-route-table-id - The ID of the local gateway route table. local-gateway-route-table-vpc-association-id - The ID of the association. owner-id - The ID of the Amazon Web Services account that owns the local gateway route table for the association. state - The state of the association. vpc-id - The ID of the VPC.</td>
</tr>
<tr id="parameter-LocalGatewayRouteTableVpcAssociationId">
    <td><CopyableCode code="LocalGatewayRouteTableVpcAssociationId" /></td>
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
    <td>The tags to assign to the local gateway route table VPC association.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_local_gateway_route_table_vpc_associations"
    values={[
        { label: 'describe_local_gateway_route_table_vpc_associations', value: 'describe_local_gateway_route_table_vpc_associations' }
    ]}
>
<TabItem value="describe_local_gateway_route_table_vpc_associations">

Describes the specified associations between VPCs and local gateway route tables.

```sql
SELECT
local_gateway_id,
local_gateway_route_table_arn,
local_gateway_route_table_id,
local_gateway_route_table_vpc_association_id,
owner_id,
state,
tags,
vpc_id
FROM aws.ec2.local_gateway_route_table_vpc_associations
WHERE region = '{{ region }}' -- required
AND LocalGatewayRouteTableVpcAssociationId = '{{ LocalGatewayRouteTableVpcAssociationId }}'
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
    defaultValue="create_local_gateway_route_table_vpc_association"
    values={[
        { label: 'create_local_gateway_route_table_vpc_association', value: 'create_local_gateway_route_table_vpc_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_local_gateway_route_table_vpc_association">

Associates the specified VPC with the specified local gateway route table.

```sql
INSERT INTO aws.ec2.local_gateway_route_table_vpc_associations (
LocalGatewayRouteTableId,
VpcId,
region,
TagSpecification,
DryRun
)
SELECT 
'{{ LocalGatewayRouteTableId }}',
'{{ VpcId }}',
'{{ region }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
local_gateway_id,
local_gateway_route_table_arn,
local_gateway_route_table_id,
local_gateway_route_table_vpc_association_id,
owner_id,
state,
tags,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: local_gateway_route_table_vpc_associations
  props:
    - name: LocalGatewayRouteTableId
      value: "{{ LocalGatewayRouteTableId }}"
      description: Required parameter for the local_gateway_route_table_vpc_associations resource.
    - name: VpcId
      value: "{{ VpcId }}"
      description: Required parameter for the local_gateway_route_table_vpc_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the local_gateway_route_table_vpc_associations resource.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the local gateway route table VPC association.
      description: The tags to assign to the local gateway route table VPC association.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_local_gateway_route_table_vpc_association"
    values={[
        { label: 'delete_local_gateway_route_table_vpc_association', value: 'delete_local_gateway_route_table_vpc_association' }
    ]}
>
<TabItem value="delete_local_gateway_route_table_vpc_association">

Deletes the specified association between a VPC and local gateway route table.

```sql
DELETE FROM aws.ec2.local_gateway_route_table_vpc_associations
WHERE LocalGatewayRouteTableVpcAssociationId = '{{ LocalGatewayRouteTableVpcAssociationId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
