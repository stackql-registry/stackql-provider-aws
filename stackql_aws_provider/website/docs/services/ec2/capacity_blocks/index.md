--- 
title: capacity_blocks
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_blocks
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

Creates, updates, deletes, gets or lists a <code>capacity_blocks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_blocks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.capacity_blocks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_capacity_blocks"
    values={[
        { label: 'describe_capacity_blocks', value: 'describe_capacity_blocks' }
    ]}
>
<TabItem value="describe_capacity_blocks">

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
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone of the Capacity Block.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone ID of the Capacity Block.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_block_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Block.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_reservation_ids" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string</code></td>
    <td>The date and time at which the Capacity Block was created.</td>
</tr>
<tr>
    <td><CopyableCode code="end_date" /></td>
    <td><code>string</code></td>
    <td>The date and time at which the Capacity Block expires. When a Capacity Block expires, all instances in the Capacity Block are terminated.</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string</code></td>
    <td>The date and time at which the Capacity Block was started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Capacity Block.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the Capacity Block.</td>
</tr>
<tr>
    <td><CopyableCode code="ultraserver_type" /></td>
    <td><code>string</code></td>
    <td>The EC2 UltraServer type of the Capacity Block.</td>
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
    <td><a href="#describe_capacity_blocks"><CopyableCode code="describe_capacity_blocks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CapacityBlockId"><code>CapacityBlockId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes details about Capacity Blocks in the Amazon Web Services Region that you're currently using.</td>
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
    <td>The IDs of the Capacity Blocks.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. capacity-block-id - The ID of the Capacity Block. ultraserver-type - The Capacity Block type. The type can be instances or ultraservers. availability-zone - The Availability Zone of the Capacity Block. start-date - The date and time at which the Capacity Block was started. end-date - The date and time at which the Capacity Block expires. When a Capacity Block expires, all instances in the Capacity Block are terminated. create-date - The date and time at which the Capacity Block was created. state - The state of the Capacity Block (active | expired | unavailable | cancelled | failed | scheduled | payment-pending | payment-failed). tags - The tags assigned to the Capacity Block.</td>
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
    defaultValue="describe_capacity_blocks"
    values={[
        { label: 'describe_capacity_blocks', value: 'describe_capacity_blocks' }
    ]}
>
<TabItem value="describe_capacity_blocks">

Describes details about Capacity Blocks in the Amazon Web Services Region that you're currently using.

```sql
SELECT
availability_zone,
availability_zone_id,
capacity_block_id,
capacity_reservation_ids,
create_date,
end_date,
start_date,
state,
tags,
ultraserver_type
FROM aws.ec2.capacity_blocks
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
