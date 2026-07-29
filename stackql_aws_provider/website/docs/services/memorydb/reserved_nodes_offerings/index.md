--- 
title: reserved_nodes_offerings
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_nodes_offerings
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

Creates, updates, deletes, gets or lists a <code>reserved_nodes_offerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reserved_nodes_offerings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.memorydb.reserved_nodes_offerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_reserved_nodes_offerings"
    values={[
        { label: 'describe_reserved_nodes_offerings', value: 'describe_reserved_nodes_offerings' }
    ]}
>
<TabItem value="describe_reserved_nodes_offerings">

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
    <td><CopyableCode code="node_type" /></td>
    <td><code>string</code></td>
    <td>The node type for the reserved nodes. For more information, see Supported node types.</td>
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
    <td><CopyableCode code="reserved_nodes_offering_id" /></td>
    <td><code>string</code></td>
    <td>The offering identifier.</td>
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
    <td><a href="#describe_reserved_nodes_offerings"><CopyableCode code="describe_reserved_nodes_offerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists available reserved node offerings.</td>
</tr>
<tr>
    <td><a href="#purchase_reserved_nodes_offering"><CopyableCode code="purchase_reserved_nodes_offering" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReservedNodesOfferingId"><code>ReservedNodesOfferingId</code></a></td>
    <td></td>
    <td>Allows you to purchase a reserved node offering. Reserved nodes are not eligible for cancellation and are non-refundable.</td>
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
    defaultValue="describe_reserved_nodes_offerings"
    values={[
        { label: 'describe_reserved_nodes_offerings', value: 'describe_reserved_nodes_offerings' }
    ]}
>
<TabItem value="describe_reserved_nodes_offerings">

Lists available reserved node offerings.

```sql
SELECT
duration,
fixed_price,
node_type,
offering_type,
recurring_charges,
reserved_nodes_offering_id
FROM aws.memorydb.reserved_nodes_offerings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="purchase_reserved_nodes_offering"
    values={[
        { label: 'purchase_reserved_nodes_offering', value: 'purchase_reserved_nodes_offering' }
    ]}
>
<TabItem value="purchase_reserved_nodes_offering">

Allows you to purchase a reserved node offering. Reserved nodes are not eligible for cancellation and are non-refundable.

```sql
EXEC aws.memorydb.reserved_nodes_offerings.purchase_reserved_nodes_offering 
@region='{{ region }}' --required 
@@json=
'{
"ReservedNodesOfferingId": "{{ ReservedNodesOfferingId }}", 
"ReservationId": "{{ ReservationId }}", 
"NodeCount": {{ NodeCount }}, 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
