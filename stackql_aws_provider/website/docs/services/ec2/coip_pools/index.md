--- 
title: coip_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - coip_pools
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

Creates, updates, deletes, gets or lists a <code>coip_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="coip_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.coip_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_coip_pools"
    values={[
        { label: 'describe_coip_pools', value: 'describe_coip_pools' }
    ]}
>
<TabItem value="describe_coip_pools">

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
    <td><CopyableCode code="local_gateway_route_table_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway route table.</td>
</tr>
<tr>
    <td><CopyableCode code="pool_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the address pool.</td>
</tr>
<tr>
    <td><CopyableCode code="pool_cidrs" /></td>
    <td><code>string</code></td>
    <td>The address ranges of the address pool.</td>
</tr>
<tr>
    <td><CopyableCode code="pool_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the address pool.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags.</td>
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
    <td><a href="#describe_coip_pools"><CopyableCode code="describe_coip_pools" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PoolId"><code>PoolId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the specified customer-owned address pools or all of your customer-owned address pools.</td>
</tr>
<tr>
    <td><a href="#create_coip_cidr"><CopyableCode code="create_coip_cidr" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-CoipPoolId"><code>CoipPoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Cidr"><code>Cidr</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a range of customer-owned IP addresses.</td>
</tr>
<tr>
    <td><a href="#create_coip_pool"><CopyableCode code="create_coip_pool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LocalGatewayRouteTableId"><code>LocalGatewayRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a pool of customer-owned IP (CoIP) addresses.</td>
</tr>
<tr>
    <td><a href="#delete_coip_pool"><CopyableCode code="delete_coip_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-CoipPoolId"><code>CoipPoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes a pool of customer-owned IP (CoIP) addresses.</td>
</tr>
<tr>
    <td><a href="#delete_coip_cidr"><CopyableCode code="delete_coip_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-CoipPoolId"><code>CoipPoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Cidr"><code>Cidr</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes a range of customer-owned IP addresses.</td>
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
<tr id="parameter-CoipPoolId">
    <td><CopyableCode code="CoipPoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the customer-owned address pool.</td>
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
<tr id="parameter-Cidr">
    <td><CopyableCode code="Cidr" /></td>
    <td><code>string</code></td>
    <td>A customer-owned IP address range that you want to delete.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. coip-pool.local-gateway-route-table-id - The ID of the local gateway route table. coip-pool.pool-id - The ID of the address pool.</td>
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
<tr id="parameter-PoolId">
    <td><CopyableCode code="PoolId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the address pools.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the CoIP address pool.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_coip_pools"
    values={[
        { label: 'describe_coip_pools', value: 'describe_coip_pools' }
    ]}
>
<TabItem value="describe_coip_pools">

Describes the specified customer-owned address pools or all of your customer-owned address pools.

```sql
SELECT
local_gateway_route_table_id,
pool_arn,
pool_cidrs,
pool_id,
tags
FROM aws.ec2.coip_pools
WHERE region = '{{ region }}' -- required
AND PoolId = '{{ PoolId }}'
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
    defaultValue="create_coip_cidr"
    values={[
        { label: 'create_coip_cidr', value: 'create_coip_cidr' },
        { label: 'create_coip_pool', value: 'create_coip_pool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_coip_cidr">

Creates a range of customer-owned IP addresses.

```sql
INSERT INTO aws.ec2.coip_pools (
CoipPoolId,
region,
Cidr,
DryRun
)
SELECT 
'{{ CoipPoolId }}',
'{{ region }}',
'{{ Cidr }}',
'{{ DryRun }}'
RETURNING
cidr,
coip_pool_id,
local_gateway_route_table_id
;
```
</TabItem>
<TabItem value="create_coip_pool">

Creates a pool of customer-owned IP (CoIP) addresses.

```sql
INSERT INTO aws.ec2.coip_pools (
LocalGatewayRouteTableId,
region,
TagSpecification,
DryRun
)
SELECT 
'{{ LocalGatewayRouteTableId }}',
'{{ region }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
local_gateway_route_table_id,
pool_arn,
pool_cidrs,
pool_id,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: coip_pools
  props:
    - name: CoipPoolId
      value: "{{ CoipPoolId }}"
      description: Required parameter for the coip_pools resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the coip_pools resource.
    - name: LocalGatewayRouteTableId
      value: "{{ LocalGatewayRouteTableId }}"
      description: Required parameter for the coip_pools resource.
    - name: Cidr
      value: "{{ Cidr }}"
      description: A customer-owned IP address range to create.
      description: A customer-owned IP address range to create.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the CoIP address pool.
      description: The tags to assign to the CoIP address pool.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_coip_pool"
    values={[
        { label: 'delete_coip_pool', value: 'delete_coip_pool' }
    ]}
>
<TabItem value="delete_coip_pool">

Deletes a pool of customer-owned IP (CoIP) addresses.

```sql
DELETE FROM aws.ec2.coip_pools
WHERE CoipPoolId = '{{ CoipPoolId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_coip_cidr"
    values={[
        { label: 'delete_coip_cidr', value: 'delete_coip_cidr' }
    ]}
>
<TabItem value="delete_coip_cidr">

Deletes a range of customer-owned IP addresses.

```sql
EXEC aws.ec2.coip_pools.delete_coip_cidr 
@CoipPoolId='{{ CoipPoolId }}' --required, 
@region='{{ region }}' --required, 
@Cidr='{{ Cidr }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
