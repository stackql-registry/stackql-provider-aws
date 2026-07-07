--- 
title: reserved_nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_nodes
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

Creates, updates, deletes, gets or lists a <code>reserved_nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reserved_nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.reserved_nodes" /></td></tr>
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
    <td><CopyableCode code="CurrencyCode" /></td>
    <td><code>string</code></td>
    <td>The currency code for the reserved cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="Duration" /></td>
    <td><code>integer</code></td>
    <td>The duration of the node reservation in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="FixedPrice" /></td>
    <td><code>number</code></td>
    <td>The fixed cost Amazon Redshift charges you for this reserved node.</td>
</tr>
<tr>
    <td><CopyableCode code="NodeCount" /></td>
    <td><code>integer</code></td>
    <td>The number of reserved compute nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="NodeType" /></td>
    <td><code>string</code></td>
    <td>The node type of the reserved node.</td>
</tr>
<tr>
    <td><CopyableCode code="OfferingType" /></td>
    <td><code>string</code></td>
    <td>The anticipated utilization of the reserved node, as defined in the reserved node offering.</td>
</tr>
<tr>
    <td><CopyableCode code="RecurringCharges" /></td>
    <td><code>string</code></td>
    <td>The recurring charges for the reserved node.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservedNodeId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservedNodeOfferingId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the reserved node offering.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservedNodeOfferingType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string</code></td>
    <td>The time the reservation started. You purchase a reserved node offering for a duration. This is the start time of that duration.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the reserved compute node. Possible Values: pending-payment-This reserved node has recently been purchased, and the sale has been approved, but payment has not yet been confirmed. active-This reserved node is owned by the caller and is available for use. payment-failed-Payment failed for the purchase attempt. retired-The reserved node is no longer available. exchanging-The owner is exchanging the reserved node for another reserved node.</td>
</tr>
<tr>
    <td><CopyableCode code="UsagePrice" /></td>
    <td><code>number</code></td>
    <td>The hourly rate Amazon Redshift charges you for this reserved node.</td>
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
    <td><a href="#parameter-ReservedNodeId"><code>ReservedNodeId</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns the descriptions of the reserved nodes.</td>
</tr>
<tr>
    <td><a href="#accept_reserved_node_exchange"><CopyableCode code="accept_reserved_node_exchange" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ReservedNodeId"><code>ReservedNodeId</code></a>, <a href="#parameter-TargetReservedNodeOfferingId"><code>TargetReservedNodeOfferingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs.</td>
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
    <td>A string representing the node identifier of the DC1 Reserved Node to be exchanged.</td>
</tr>
<tr id="parameter-TargetReservedNodeOfferingId">
    <td><CopyableCode code="TargetReservedNodeOfferingId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the DC2 Reserved Node offering to be used for the exchange. You can obtain the value for the parameter by calling GetReservedNodeExchangeOfferings</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeReservedNodes request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-ReservedNodeId">
    <td><CopyableCode code="ReservedNodeId" /></td>
    <td><code>string</code></td>
    <td>Identifier for the node reservation.</td>
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

Returns the descriptions of the reserved nodes.

```sql
SELECT
CurrencyCode,
Duration,
FixedPrice,
NodeCount,
NodeType,
OfferingType,
RecurringCharges,
ReservedNodeId,
ReservedNodeOfferingId,
ReservedNodeOfferingType,
StartTime,
State,
UsagePrice
FROM aws.redshift.reserved_nodes
WHERE region = '{{ region }}' -- required
AND ReservedNodeId = '{{ ReservedNodeId }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_reserved_node_exchange"
    values={[
        { label: 'accept_reserved_node_exchange', value: 'accept_reserved_node_exchange' }
    ]}
>
<TabItem value="accept_reserved_node_exchange">

Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs.

```sql
EXEC aws.redshift.reserved_nodes.accept_reserved_node_exchange 
@ReservedNodeId='{{ ReservedNodeId }}' --required, 
@TargetReservedNodeOfferingId='{{ TargetReservedNodeOfferingId }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
