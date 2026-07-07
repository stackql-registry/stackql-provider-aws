--- 
title: reserved_node_exchange_status
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_node_exchange_status
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

Creates, updates, deletes, gets or lists a <code>reserved_node_exchange_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reserved_node_exchange_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.reserved_node_exchange_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_reserved_node_exchange_status"
    values={[
        { label: 'describe_reserved_node_exchange_status', value: 'describe_reserved_node_exchange_status' }
    ]}
>
<TabItem value="describe_reserved_node_exchange_status">

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
    <td><CopyableCode code="RequestTime" /></td>
    <td><code>string</code></td>
    <td>A date and time that indicate when the reserved-node exchange was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservedNodeExchangeRequestId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the reserved-node exchange request.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceReservedNodeCount" /></td>
    <td><code>integer</code></td>
    <td>The source reserved-node count in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceReservedNodeId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the source reserved node.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceReservedNodeType" /></td>
    <td><code>string</code></td>
    <td>The source reserved-node type, for example ra3.4xlarge.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the reserved-node exchange request. Statuses include in-progress and requested.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetReservedNodeCount" /></td>
    <td><code>integer</code></td>
    <td>The count of target reserved nodes in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetReservedNodeOfferingId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the target reserved node offering.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetReservedNodeType" /></td>
    <td><code>string</code></td>
    <td>The node type of the target reserved node, for example ra3.4xlarge.</td>
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
    <td><a href="#describe_reserved_node_exchange_status"><CopyableCode code="describe_reserved_node_exchange_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReservedNodeId"><code>ReservedNodeId</code></a>, <a href="#parameter-ReservedNodeExchangeRequestId"><code>ReservedNodeExchangeRequestId</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns exchange status details and associated metadata for a reserved-node exchange. Statuses include such values as in progress and requested.</td>
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
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeReservedNodeExchangeStatus request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the MaxRecords parameter. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a Marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.</td>
</tr>
<tr id="parameter-ReservedNodeExchangeRequestId">
    <td><CopyableCode code="ReservedNodeExchangeRequestId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the reserved-node exchange request.</td>
</tr>
<tr id="parameter-ReservedNodeId">
    <td><CopyableCode code="ReservedNodeId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the source reserved node in a reserved-node exchange request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_reserved_node_exchange_status"
    values={[
        { label: 'describe_reserved_node_exchange_status', value: 'describe_reserved_node_exchange_status' }
    ]}
>
<TabItem value="describe_reserved_node_exchange_status">

Returns exchange status details and associated metadata for a reserved-node exchange. Statuses include such values as in progress and requested.

```sql
SELECT
RequestTime,
ReservedNodeExchangeRequestId,
SourceReservedNodeCount,
SourceReservedNodeId,
SourceReservedNodeType,
Status,
TargetReservedNodeCount,
TargetReservedNodeOfferingId,
TargetReservedNodeType
FROM aws.redshift.reserved_node_exchange_status
WHERE region = '{{ region }}' -- required
AND ReservedNodeId = '{{ ReservedNodeId }}'
AND ReservedNodeExchangeRequestId = '{{ ReservedNodeExchangeRequestId }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
