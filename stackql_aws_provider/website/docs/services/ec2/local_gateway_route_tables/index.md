--- 
title: local_gateway_route_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - local_gateway_route_tables
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

Creates, updates, deletes, gets or lists a <code>local_gateway_route_tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="local_gateway_route_tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.local_gateway_route_tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_local_gateway_route_tables"
    values={[
        { label: 'describe_local_gateway_route_tables', value: 'describe_local_gateway_route_tables' }
    ]}
>
<TabItem value="describe_local_gateway_route_tables">

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
    <td>The Amazon Resource Name (ARN) of the local gateway route table.</td>
</tr>
<tr>
    <td><CopyableCode code="local_gateway_route_table_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway route table.</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The mode of the local gateway route table.</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Outpost.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the local gateway route table.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the local gateway route table.</td>
</tr>
<tr>
    <td><CopyableCode code="state_reason" /></td>
    <td><code>string</code></td>
    <td>Information about the state change.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the local gateway route table.</td>
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
    <td><a href="#describe_local_gateway_route_tables"><CopyableCode code="describe_local_gateway_route_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LocalGatewayRouteTableId"><code>LocalGatewayRouteTableId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more local gateway route tables. By default, all local gateway route tables are described. Alternatively, you can filter the results.</td>
</tr>
<tr>
    <td><a href="#create_local_gateway_route_table"><CopyableCode code="create_local_gateway_route_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LocalGatewayId"><code>LocalGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Mode"><code>Mode</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a local gateway route table.</td>
</tr>
<tr>
    <td><a href="#delete_local_gateway_route_table"><CopyableCode code="delete_local_gateway_route_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-LocalGatewayRouteTableId"><code>LocalGatewayRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes a local gateway route table.</td>
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
<tr id="parameter-LocalGatewayId">
    <td><CopyableCode code="LocalGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway.</td>
</tr>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. local-gateway-id - The ID of a local gateway. local-gateway-route-table-arn - The Amazon Resource Name (ARN) of the local gateway route table. local-gateway-route-table-id - The ID of a local gateway route table. outpost-arn - The Amazon Resource Name (ARN) of the Outpost. owner-id - The ID of the Amazon Web Services account that owns the local gateway route table. state - The state of the local gateway route table.</td>
</tr>
<tr id="parameter-LocalGatewayRouteTableId">
    <td><CopyableCode code="LocalGatewayRouteTableId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the local gateway route tables.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-Mode">
    <td><CopyableCode code="Mode" /></td>
    <td><code>string</code></td>
    <td>The mode of the local gateway route table.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags assigned to the local gateway route table.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_local_gateway_route_tables"
    values={[
        { label: 'describe_local_gateway_route_tables', value: 'describe_local_gateway_route_tables' }
    ]}
>
<TabItem value="describe_local_gateway_route_tables">

Describes one or more local gateway route tables. By default, all local gateway route tables are described. Alternatively, you can filter the results.

```sql
SELECT
local_gateway_id,
local_gateway_route_table_arn,
local_gateway_route_table_id,
mode,
outpost_arn,
owner_id,
state,
state_reason,
tags
FROM aws.ec2.local_gateway_route_tables
WHERE region = '{{ region }}' -- required
AND LocalGatewayRouteTableId = '{{ LocalGatewayRouteTableId }}'
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
    defaultValue="create_local_gateway_route_table"
    values={[
        { label: 'create_local_gateway_route_table', value: 'create_local_gateway_route_table' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_local_gateway_route_table">

Creates a local gateway route table.

```sql
INSERT INTO aws.ec2.local_gateway_route_tables (
LocalGatewayId,
region,
Mode,
TagSpecification,
DryRun
)
SELECT 
'{{ LocalGatewayId }}',
'{{ region }}',
'{{ Mode }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
local_gateway_id,
local_gateway_route_table_arn,
local_gateway_route_table_id,
mode,
outpost_arn,
owner_id,
state,
state_reason,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: local_gateway_route_tables
  props:
    - name: LocalGatewayId
      value: "{{ LocalGatewayId }}"
      description: Required parameter for the local_gateway_route_tables resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the local_gateway_route_tables resource.
    - name: Mode
      value: "{{ Mode }}"
      description: The mode of the local gateway route table.
      description: The mode of the local gateway route table.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags assigned to the local gateway route table.
      description: The tags assigned to the local gateway route table.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_local_gateway_route_table"
    values={[
        { label: 'delete_local_gateway_route_table', value: 'delete_local_gateway_route_table' }
    ]}
>
<TabItem value="delete_local_gateway_route_table">

Deletes a local gateway route table.

```sql
DELETE FROM aws.ec2.local_gateway_route_tables
WHERE LocalGatewayRouteTableId = '{{ LocalGatewayRouteTableId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
