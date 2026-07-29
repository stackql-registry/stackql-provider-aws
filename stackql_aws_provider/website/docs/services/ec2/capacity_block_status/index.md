--- 
title: capacity_block_status
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_block_status
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

Creates, updates, deletes, gets or lists a <code>capacity_block_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_block_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.capacity_block_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_capacity_block_status"
    values={[
        { label: 'describe_capacity_block_status', value: 'describe_capacity_block_status' }
    ]}
>
<TabItem value="describe_capacity_block_status">

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
    <td><CopyableCode code="capacity_block_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Block.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_reservation_statuses" /></td>
    <td><code>string</code></td>
    <td>The availability of capacity for the Capacity Block reservations.</td>
</tr>
<tr>
    <td><CopyableCode code="interconnect_status" /></td>
    <td><code>string</code></td>
    <td>The status of the high-bandwidth accelerator interconnect. Possible states include: ok the accelerator interconnect is healthy. impaired - accelerator interconnect communication is impaired. insufficient-data - insufficient data to determine accelerator interconnect status.</td>
</tr>
<tr>
    <td><CopyableCode code="total_available_capacity" /></td>
    <td><code>integer</code></td>
    <td>The remaining capacity. Indicates the number of resources that can be launched into the Capacity Block.</td>
</tr>
<tr>
    <td><CopyableCode code="total_capacity" /></td>
    <td><code>integer</code></td>
    <td>The combined amount of Available and Unavailable capacity in the Capacity Block.</td>
</tr>
<tr>
    <td><CopyableCode code="total_unavailable_capacity" /></td>
    <td><code>integer</code></td>
    <td>The unavailable capacity. Indicates the instance capacity that is unavailable for use due to a system status check failure.</td>
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
    <td><a href="#describe_capacity_block_status"><CopyableCode code="describe_capacity_block_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CapacityBlockId"><code>CapacityBlockId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the availability of capacity for the specified Capacity blocks, or all of your Capacity Blocks.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CapacityBlockId">
    <td><CopyableCode code="CapacityBlockId" /></td>
    <td><code>array</code></td>
    <td>The ID of the Capacity Block.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. interconnect-status - The status of the interconnect for the Capacity Block (ok | impaired | insufficient-data).</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_capacity_block_status"
    values={[
        { label: 'describe_capacity_block_status', value: 'describe_capacity_block_status' }
    ]}
>
<TabItem value="describe_capacity_block_status">

Describes the availability of capacity for the specified Capacity blocks, or all of your Capacity Blocks.

```sql
SELECT
capacity_block_id,
capacity_reservation_statuses,
interconnect_status,
total_available_capacity,
total_capacity,
total_unavailable_capacity
FROM aws.ec2.capacity_block_status
WHERE region = '{{ region }}' -- required
AND CapacityBlockId = '{{ CapacityBlockId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
