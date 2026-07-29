--- 
title: capacity_block_extension_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_block_extension_histories
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

Creates, updates, deletes, gets or lists a <code>capacity_block_extension_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_block_extension_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.capacity_block_extension_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_capacity_block_extension_history"
    values={[
        { label: 'describe_capacity_block_extension_history', value: 'describe_capacity_block_extension_history' }
    ]}
>
<TabItem value="describe_capacity_block_extension_history">

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
    <td>The Availability Zone of the Capacity Block extension.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone ID of the Capacity Block extension.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_block_extension_duration_hours" /></td>
    <td><code>integer</code></td>
    <td>The duration of the Capacity Block extension in hours.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_block_extension_end_date" /></td>
    <td><code>string</code></td>
    <td>The end date of the Capacity Block extension.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_block_extension_offering_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Block extension offering.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_block_extension_purchase_date" /></td>
    <td><code>string</code></td>
    <td>The date when the Capacity Block extension was purchased.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_block_extension_start_date" /></td>
    <td><code>string</code></td>
    <td>The start date of the Capacity Block extension.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_block_extension_status" /></td>
    <td><code>string</code></td>
    <td>The status of the Capacity Block extension. A Capacity Block extension can have one of the following statuses: payment-pending - The Capacity Block extension payment is processing. If your payment can't be processed within 12 hours, the Capacity Block extension is failed. payment-failed - Payment for the Capacity Block extension request was not successful. payment-succeeded - Payment for the Capacity Block extension request was successful. You receive an invoice that reflects the one-time upfront payment. In the invoice, you can associate the paid amount with the Capacity Block reservation ID.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_reservation_id" /></td>
    <td><code>string</code></td>
    <td>The reservation ID of the Capacity Block extension.</td>
</tr>
<tr>
    <td><CopyableCode code="currency_code" /></td>
    <td><code>string</code></td>
    <td>The currency of the payment for the Capacity Block extension.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_count" /></td>
    <td><code>integer</code></td>
    <td>The number of instances in the Capacity Block extension.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type of the Capacity Block extension.</td>
</tr>
<tr>
    <td><CopyableCode code="upfront_fee" /></td>
    <td><code>string</code></td>
    <td>The total price to be paid up front.</td>
</tr>
<tr>
    <td><CopyableCode code="zone_type" /></td>
    <td><code>string</code></td>
    <td>The type of zone where the Capacity Block extension is located.</td>
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
    <td><a href="#describe_capacity_block_extension_history"><CopyableCode code="describe_capacity_block_extension_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CapacityReservationId"><code>CapacityReservationId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the events for the specified Capacity Block extension during the specified time.</td>
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
<tr id="parameter-CapacityReservationId">
    <td><CopyableCode code="CapacityReservationId" /></td>
    <td><code>array</code></td>
    <td>The IDs of Capacity Block reservations that you want to display the history for.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters availability-zone - The Availability Zone of the extension. availability-zone-id - The Availability Zone ID of the extension. capacity-block-extension-offering-id - The ID of the extension offering. capacity-block-extension-status - The status of the extension (payment-pending | payment-failed | payment-succeeded). capacity-reservation-id - The reservation ID of the extension. instance-type - The instance type of the extension.</td>
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
    defaultValue="describe_capacity_block_extension_history"
    values={[
        { label: 'describe_capacity_block_extension_history', value: 'describe_capacity_block_extension_history' }
    ]}
>
<TabItem value="describe_capacity_block_extension_history">

Describes the events for the specified Capacity Block extension during the specified time.

```sql
SELECT
availability_zone,
availability_zone_id,
capacity_block_extension_duration_hours,
capacity_block_extension_end_date,
capacity_block_extension_offering_id,
capacity_block_extension_purchase_date,
capacity_block_extension_start_date,
capacity_block_extension_status,
capacity_reservation_id,
currency_code,
instance_count,
instance_type,
upfront_fee,
zone_type
FROM aws.ec2.capacity_block_extension_histories
WHERE region = '{{ region }}' -- required
AND CapacityReservationId = '{{ CapacityReservationId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
