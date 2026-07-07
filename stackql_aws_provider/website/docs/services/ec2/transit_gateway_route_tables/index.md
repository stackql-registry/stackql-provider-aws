--- 
title: transit_gateway_route_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_route_tables
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_route_tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_route_tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_route_tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_transit_gateway_route_tables"
    values={[
        { label: 'describe_transit_gateway_route_tables', value: 'describe_transit_gateway_route_tables' }
    ]}
>
<TabItem value="describe_transit_gateway_route_tables">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultAssociationRouteTable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this is the default association route table for the transit gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultPropagationRouteTable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this is the default propagation route table for the transit gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the transit gateway route table.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the route table.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway route table.</td>
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
    <td><a href="#describe_transit_gateway_route_tables"><CopyableCode code="describe_transit_gateway_route_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayRouteTableIds"><code>TransitGatewayRouteTableIds</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more transit gateway route tables. By default, all transit gateway route tables are described. Alternatively, you can filter the results.</td>
</tr>
<tr>
    <td><a href="#create_transit_gateway_route_table"><CopyableCode code="create_transit_gateway_route_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TransitGatewayId"><code>TransitGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TagSpecifications"><code>TagSpecifications</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a route table for the specified transit gateway.</td>
</tr>
<tr>
    <td><a href="#associate_transit_gateway_route_table"><CopyableCode code="associate_transit_gateway_route_table" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TransitGatewayRouteTableId"><code>TransitGatewayRouteTableId</code></a>, <a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Associates the specified attachment with the specified transit gateway route table. You can associate only one route table with an attachment.</td>
</tr>
<tr>
    <td><a href="#delete_transit_gateway_route_table"><CopyableCode code="delete_transit_gateway_route_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TransitGatewayRouteTableId"><code>TransitGatewayRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified transit gateway route table. If there are any route tables associated with the transit gateway route table, you must first run DisassociateRouteTable before you can delete the transit gateway route table. This removes any route tables associated with the transit gateway route table.</td>
</tr>
<tr>
    <td><a href="#disable_transit_gateway_route_table_propagation"><CopyableCode code="disable_transit_gateway_route_table_propagation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TransitGatewayRouteTableId"><code>TransitGatewayRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TransitGatewayRouteTableAnnouncementId"><code>TransitGatewayRouteTableAnnouncementId</code></a></td>
    <td>Disables the specified resource attachment from propagating routes to the specified propagation route table.</td>
</tr>
<tr>
    <td><a href="#disassociate_transit_gateway_route_table"><CopyableCode code="disassociate_transit_gateway_route_table" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TransitGatewayRouteTableId"><code>TransitGatewayRouteTableId</code></a>, <a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disassociates a resource attachment from a transit gateway route table.</td>
</tr>
<tr>
    <td><a href="#enable_transit_gateway_route_table_propagation"><CopyableCode code="enable_transit_gateway_route_table_propagation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TransitGatewayRouteTableId"><code>TransitGatewayRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TransitGatewayRouteTableAnnouncementId"><code>TransitGatewayRouteTableAnnouncementId</code></a></td>
    <td>Enables the specified attachment to propagate routes to the specified propagation route table.</td>
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
<tr id="parameter-TransitGatewayAttachmentId">
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment.</td>
</tr>
<tr id="parameter-TransitGatewayId">
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway.</td>
</tr>
<tr id="parameter-TransitGatewayRouteTableId">
    <td><CopyableCode code="TransitGatewayRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the propagation route table.</td>
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
    <td>One or more filters. The possible values are: default-association-route-table - Indicates whether this is the default association route table for the transit gateway (true | false). default-propagation-route-table - Indicates whether this is the default propagation route table for the transit gateway (true | false). state - The state of the route table (available | deleting | deleted | pending). transit-gateway-id - The ID of the transit gateway. transit-gateway-route-table-id - The ID of the transit gateway route table.</td>
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
<tr id="parameter-TagSpecifications">
    <td><CopyableCode code="TagSpecifications" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the transit gateway route table.</td>
</tr>
<tr id="parameter-TransitGatewayAttachmentId">
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment.</td>
</tr>
<tr id="parameter-TransitGatewayRouteTableAnnouncementId">
    <td><CopyableCode code="TransitGatewayRouteTableAnnouncementId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway route table announcement.</td>
</tr>
<tr id="parameter-TransitGatewayRouteTableIds">
    <td><CopyableCode code="TransitGatewayRouteTableIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the transit gateway route tables.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_transit_gateway_route_tables"
    values={[
        { label: 'describe_transit_gateway_route_tables', value: 'describe_transit_gateway_route_tables' }
    ]}
>
<TabItem value="describe_transit_gateway_route_tables">

Describes one or more transit gateway route tables. By default, all transit gateway route tables are described. Alternatively, you can filter the results.

```sql
SELECT
CreationTime,
DefaultAssociationRouteTable,
DefaultPropagationRouteTable,
State,
Tags,
TransitGatewayId,
TransitGatewayRouteTableId
FROM aws.ec2.transit_gateway_route_tables
WHERE region = '{{ region }}' -- required
AND TransitGatewayRouteTableIds = '{{ TransitGatewayRouteTableIds }}'
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
    defaultValue="create_transit_gateway_route_table"
    values={[
        { label: 'create_transit_gateway_route_table', value: 'create_transit_gateway_route_table' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transit_gateway_route_table">

Creates a route table for the specified transit gateway.

```sql
INSERT INTO aws.ec2.transit_gateway_route_tables (
TransitGatewayId,
region,
TagSpecifications,
DryRun
)
SELECT 
'{{ TransitGatewayId }}',
'{{ region }}',
'{{ TagSpecifications }}',
'{{ DryRun }}'
RETURNING
CreationTime,
DefaultAssociationRouteTable,
DefaultPropagationRouteTable,
State,
Tags,
TransitGatewayId,
TransitGatewayRouteTableId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateway_route_tables
  props:
    - name: TransitGatewayId
      value: "{{ TransitGatewayId }}"
      description: Required parameter for the transit_gateway_route_tables resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateway_route_tables resource.
    - name: TagSpecifications
      value: "{{ TagSpecifications }}"
      description: The tags to apply to the transit gateway route table.
      description: The tags to apply to the transit gateway route table.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_transit_gateway_route_table"
    values={[
        { label: 'associate_transit_gateway_route_table', value: 'associate_transit_gateway_route_table' }
    ]}
>
<TabItem value="associate_transit_gateway_route_table">

Associates the specified attachment with the specified transit gateway route table. You can associate only one route table with an attachment.

```sql
UPDATE aws.ec2.transit_gateway_route_tables
SET 
-- No updatable properties
WHERE 
TransitGatewayRouteTableId = '{{ TransitGatewayRouteTableId }}' --required
AND TransitGatewayAttachmentId = '{{ TransitGatewayAttachmentId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
ResourceId,
ResourceType,
State,
TransitGatewayAttachmentId,
TransitGatewayRouteTableId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transit_gateway_route_table"
    values={[
        { label: 'delete_transit_gateway_route_table', value: 'delete_transit_gateway_route_table' }
    ]}
>
<TabItem value="delete_transit_gateway_route_table">

Deletes the specified transit gateway route table. If there are any route tables associated with the transit gateway route table, you must first run DisassociateRouteTable before you can delete the transit gateway route table. This removes any route tables associated with the transit gateway route table.

```sql
DELETE FROM aws.ec2.transit_gateway_route_tables
WHERE TransitGatewayRouteTableId = '{{ TransitGatewayRouteTableId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_transit_gateway_route_table_propagation"
    values={[
        { label: 'disable_transit_gateway_route_table_propagation', value: 'disable_transit_gateway_route_table_propagation' },
        { label: 'disassociate_transit_gateway_route_table', value: 'disassociate_transit_gateway_route_table' },
        { label: 'enable_transit_gateway_route_table_propagation', value: 'enable_transit_gateway_route_table_propagation' }
    ]}
>
<TabItem value="disable_transit_gateway_route_table_propagation">

Disables the specified resource attachment from propagating routes to the specified propagation route table.

```sql
EXEC aws.ec2.transit_gateway_route_tables.disable_transit_gateway_route_table_propagation 
@TransitGatewayRouteTableId='{{ TransitGatewayRouteTableId }}' --required, 
@region='{{ region }}' --required, 
@TransitGatewayAttachmentId='{{ TransitGatewayAttachmentId }}', 
@DryRun={{ DryRun }}, 
@TransitGatewayRouteTableAnnouncementId='{{ TransitGatewayRouteTableAnnouncementId }}'
;
```
</TabItem>
<TabItem value="disassociate_transit_gateway_route_table">

Disassociates a resource attachment from a transit gateway route table.

```sql
EXEC aws.ec2.transit_gateway_route_tables.disassociate_transit_gateway_route_table 
@TransitGatewayRouteTableId='{{ TransitGatewayRouteTableId }}' --required, 
@TransitGatewayAttachmentId='{{ TransitGatewayAttachmentId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_transit_gateway_route_table_propagation">

Enables the specified attachment to propagate routes to the specified propagation route table.

```sql
EXEC aws.ec2.transit_gateway_route_tables.enable_transit_gateway_route_table_propagation 
@TransitGatewayRouteTableId='{{ TransitGatewayRouteTableId }}' --required, 
@region='{{ region }}' --required, 
@TransitGatewayAttachmentId='{{ TransitGatewayAttachmentId }}', 
@DryRun={{ DryRun }}, 
@TransitGatewayRouteTableAnnouncementId='{{ TransitGatewayRouteTableAnnouncementId }}'
;
```
</TabItem>
</Tabs>
