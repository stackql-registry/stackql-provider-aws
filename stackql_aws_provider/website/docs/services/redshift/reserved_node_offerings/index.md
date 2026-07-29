--- 
title: reserved_node_offerings
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_node_offerings
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

Creates, updates, deletes, gets or lists a <code>reserved_node_offerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reserved_node_offerings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.reserved_node_offerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_reserved_node_offerings"
    values={[
        { label: 'describe_reserved_node_offerings', value: 'describe_reserved_node_offerings' }
    ]}
>
<TabItem value="describe_reserved_node_offerings">

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
    <td><CopyableCode code="currency_code" /></td>
    <td><code>string</code></td>
    <td>The currency code for the compute nodes offering.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The duration, in seconds, for which the offering will reserve the node.</td>
</tr>
<tr>
    <td><CopyableCode code="fixed_price" /></td>
    <td><code>number</code></td>
    <td>The upfront fixed charge you will pay to purchase the specific reserved node offering.</td>
</tr>
<tr>
    <td><CopyableCode code="node_type" /></td>
    <td><code>string</code></td>
    <td>The node type offered by the reserved node offering.</td>
</tr>
<tr>
    <td><CopyableCode code="offering_type" /></td>
    <td><code>string</code></td>
    <td>The anticipated utilization of the reserved node, as defined in the reserved node offering.</td>
</tr>
<tr>
    <td><CopyableCode code="recurring_charges" /></td>
    <td><code>string</code></td>
    <td>The charge to your account regardless of whether you are creating any clusters using the node offering. Recurring charges are only in effect for heavy-utilization reserved nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_node_offering_id" /></td>
    <td><code>string</code></td>
    <td>The offering identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_node_offering_type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="usage_price" /></td>
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
    <td><a href="#describe_reserved_node_offerings"><CopyableCode code="describe_reserved_node_offerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReservedNodeOfferingId"><code>ReservedNodeOfferingId</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to PurchaseReservedNodeOffering to reserve one or more nodes for your Amazon Redshift cluster. For more information about reserved node offerings, go to Purchasing Reserved Nodes in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#purchase_reserved_node_offering"><CopyableCode code="purchase_reserved_node_offering" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ReservedNodeOfferingId"><code>ReservedNodeOfferingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NodeCount"><code>NodeCount</code></a></td>
    <td>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the DescribeReservedNodeOfferings API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. For more information about reserved node offerings, go to Purchasing Reserved Nodes in the Amazon Redshift Cluster Management Guide.</td>
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
<tr id="parameter-ReservedNodeOfferingId">
    <td><CopyableCode code="ReservedNodeOfferingId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the reserved node offering you want to purchase.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeReservedNodeOfferings request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-NodeCount">
    <td><CopyableCode code="NodeCount" /></td>
    <td><code>integer</code></td>
    <td>The number of reserved nodes that you want to purchase. Default: 1</td>
</tr>
<tr id="parameter-ReservedNodeOfferingId">
    <td><CopyableCode code="ReservedNodeOfferingId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the offering.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_reserved_node_offerings"
    values={[
        { label: 'describe_reserved_node_offerings', value: 'describe_reserved_node_offerings' }
    ]}
>
<TabItem value="describe_reserved_node_offerings">

Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to PurchaseReservedNodeOffering to reserve one or more nodes for your Amazon Redshift cluster. For more information about reserved node offerings, go to Purchasing Reserved Nodes in the Amazon Redshift Cluster Management Guide.

```sql
SELECT
currency_code,
duration,
fixed_price,
node_type,
offering_type,
recurring_charges,
reserved_node_offering_id,
reserved_node_offering_type,
usage_price
FROM aws.redshift.reserved_node_offerings
WHERE region = '{{ region }}' -- required
AND ReservedNodeOfferingId = '{{ ReservedNodeOfferingId }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="purchase_reserved_node_offering"
    values={[
        { label: 'purchase_reserved_node_offering', value: 'purchase_reserved_node_offering' }
    ]}
>
<TabItem value="purchase_reserved_node_offering">

Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the DescribeReservedNodeOfferings API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. For more information about reserved node offerings, go to Purchasing Reserved Nodes in the Amazon Redshift Cluster Management Guide.

```sql
EXEC aws.redshift.reserved_node_offerings.purchase_reserved_node_offering 
@ReservedNodeOfferingId='{{ ReservedNodeOfferingId }}' --required, 
@region='{{ region }}' --required, 
@NodeCount='{{ NodeCount }}'
;
```
</TabItem>
</Tabs>
