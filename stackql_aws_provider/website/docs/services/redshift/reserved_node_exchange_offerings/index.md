--- 
title: reserved_node_exchange_offerings
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_node_exchange_offerings
  - redshift
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

Creates, updates, deletes, gets or lists a <code>reserved_node_exchange_offerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reserved_node_exchange_offerings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.reserved_node_exchange_offerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_reserved_node_exchange_offerings"
    values={[
        { label: 'get_reserved_node_exchange_offerings', value: 'get_reserved_node_exchange_offerings' }
    ]}
>
<TabItem value="get_reserved_node_exchange_offerings">

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
    <td><CopyableCode code="CurrencyCode" /></td>
    <td><code>string</code></td>
    <td>The currency code for the compute nodes offering.</td>
</tr>
<tr>
    <td><CopyableCode code="Duration" /></td>
    <td><code>integer</code></td>
    <td>The duration, in seconds, for which the offering will reserve the node.</td>
</tr>
<tr>
    <td><CopyableCode code="FixedPrice" /></td>
    <td><code>number</code></td>
    <td>The upfront fixed charge you will pay to purchase the specific reserved node offering.</td>
</tr>
<tr>
    <td><CopyableCode code="NodeType" /></td>
    <td><code>string</code></td>
    <td>The node type offered by the reserved node offering.</td>
</tr>
<tr>
    <td><CopyableCode code="OfferingType" /></td>
    <td><code>string</code></td>
    <td>The anticipated utilization of the reserved node, as defined in the reserved node offering.</td>
</tr>
<tr>
    <td><CopyableCode code="RecurringCharges" /></td>
    <td><code>string</code></td>
    <td>The charge to your account regardless of whether you are creating any clusters using the node offering. Recurring charges are only in effect for heavy-utilization reserved nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservedNodeOfferingId" /></td>
    <td><code>string</code></td>
    <td>The offering identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservedNodeOfferingType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="UsagePrice" /></td>
    <td><code>number</code></td>
    <td>The rate you are charged for each hour the cluster that is using the offering is running.</td>
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
    <td><a href="#get_reserved_node_exchange_offerings"><CopyableCode code="get_reserved_node_exchange_offerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ReservedNodeId"><code>ReservedNodeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.</td>
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
<tr id="parameter-ReservedNodeId">
    <td><CopyableCode code="ReservedNodeId" /></td>
    <td><code>string</code></td>
    <td>A string representing the node identifier for the DC1 Reserved Node to be exchanged.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>A value that indicates the starting point for the next set of ReservedNodeOfferings.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>An integer setting the maximum number of ReservedNodeOfferings to retrieve.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_reserved_node_exchange_offerings"
    values={[
        { label: 'get_reserved_node_exchange_offerings', value: 'get_reserved_node_exchange_offerings' }
    ]}
>
<TabItem value="get_reserved_node_exchange_offerings">

Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.

```sql
SELECT
CurrencyCode,
Duration,
FixedPrice,
NodeType,
OfferingType,
RecurringCharges,
ReservedNodeOfferingId,
ReservedNodeOfferingType,
UsagePrice
FROM aws.redshift.reserved_node_exchange_offerings
WHERE ReservedNodeId = '{{ ReservedNodeId }}' -- required
AND region = '{{ region }}' -- required
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
