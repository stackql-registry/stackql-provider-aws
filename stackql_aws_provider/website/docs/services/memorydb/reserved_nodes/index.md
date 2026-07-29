--- 
title: reserved_nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_nodes
  - memorydb
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

Creates, updates, deletes, gets or lists a <code>reserved_nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reserved_nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.memorydb.reserved_nodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_reserved_nodes"
    values={[
        { label: 'describe_reserved_nodes', value: 'describe_reserved_nodes' }
    ]}
>
<TabItem value="describe_reserved_nodes">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the reserved node.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The duration of the reservation in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="fixed_price" /></td>
    <td><code>number (double)</code></td>
    <td>The fixed price charged for this reserved node.</td>
</tr>
<tr>
    <td><CopyableCode code="node_count" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes that have been reserved.</td>
</tr>
<tr>
    <td><CopyableCode code="node_type" /></td>
    <td><code>string</code></td>
    <td>The node type for the reserved nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="offering_type" /></td>
    <td><code>string</code></td>
    <td>The offering type of this reserved node.</td>
</tr>
<tr>
    <td><CopyableCode code="recurring_charges" /></td>
    <td><code>array</code></td>
    <td>The recurring price charged to run this reserved node.</td>
</tr>
<tr>
    <td><CopyableCode code="reservation_id" /></td>
    <td><code>string</code></td>
    <td>A customer-specified identifier to track this reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_nodes_offering_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the reserved node offering to purchase.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the reservation started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the reserved node.</td>
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
    <td><a href="#describe_reserved_nodes"><CopyableCode code="describe_reserved_nodes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about reserved nodes for this account, or about a specified reserved node.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_reserved_nodes"
    values={[
        { label: 'describe_reserved_nodes', value: 'describe_reserved_nodes' }
    ]}
>
<TabItem value="describe_reserved_nodes">

Returns information about reserved nodes for this account, or about a specified reserved node.

```sql
SELECT
arn,
duration,
fixed_price,
node_count,
node_type,
offering_type,
recurring_charges,
reservation_id,
reserved_nodes_offering_id,
start_time,
state
FROM aws.memorydb.reserved_nodes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
