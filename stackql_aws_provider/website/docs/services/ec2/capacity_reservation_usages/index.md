--- 
title: capacity_reservation_usages
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_reservation_usages
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

Creates, updates, deletes, gets or lists a <code>capacity_reservation_usages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_reservation_usages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.capacity_reservation_usages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_capacity_reservation_usage"
    values={[
        { label: 'get_capacity_reservation_usage', value: 'get_capacity_reservation_usage' }
    ]}
>
<TabItem value="get_capacity_reservation_usage">

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
    <td><CopyableCode code="available_instance_count" /></td>
    <td><code>integer</code></td>
    <td>The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_reservation_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The type of instance for which the Capacity Reservation reserves capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_usages" /></td>
    <td><code>string</code></td>
    <td>Information about the Capacity Reservation usage.</td>
</tr>
<tr>
    <td><CopyableCode code="interruptible" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Capacity Reservation is interruptible, meaning instances may be terminated when the owner reclaims capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="interruptible_capacity_allocation" /></td>
    <td><code>string</code></td>
    <td>Information about the capacity allocated to the interruptible Capacity Reservation, including instance counts and allocation status.</td>
</tr>
<tr>
    <td><CopyableCode code="interruption_info" /></td>
    <td><code>string</code></td>
    <td>Details about the interruption configuration and source reservation for interruptible Capacity Reservations.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states: active - The capacity is available for use. expired - The Capacity Reservation expired automatically at the date and time specified in your reservation request. The reserved capacity is no longer available for your use. cancelled - The Capacity Reservation was canceled. The reserved capacity is no longer available for your use. pending - The Capacity Reservation request was successful but the capacity provisioning is still pending. failed - The Capacity Reservation request has failed. A request can fail due to request parameters that are not valid, capacity constraints, or instance limit constraints. You can view a failed request for 60 minutes. scheduled - (Future-dated Capacity Reservations) The future-dated Capacity Reservation request was approved and the Capacity Reservation is scheduled for delivery on the requested start date. payment-pending - (Capacity Blocks) The upfront payment has not been processed yet. payment-failed - (Capacity Blocks) The upfront payment was not processed in the 12-hour time frame. Your Capacity Block was released. assessing - (Future-dated Capacity Reservations) Amazon EC2 is assessing your request for a future-dated Capacity Reservation. delayed - (Future-dated Capacity Reservations) Amazon EC2 encountered a delay in provisioning the requested future-dated Capacity Reservation. Amazon EC2 is unable to deliver the requested capacity by the requested start date and time. unsupported - (Future-dated Capacity Reservations) Amazon EC2 can't support the future-dated Capacity Reservation request due to capacity constraints. You can view unsupported requests for 30 days. The Capacity Reservation will not be delivered.</td>
</tr>
<tr>
    <td><CopyableCode code="total_instance_count" /></td>
    <td><code>integer</code></td>
    <td>The number of instances for which the Capacity Reservation reserves capacity.</td>
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
    <td><a href="#get_capacity_reservation_usage"><CopyableCode code="get_capacity_reservation_usage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-CapacityReservationId"><code>CapacityReservationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Gets usage information about a Capacity Reservation. If the Capacity Reservation is shared, it shows usage information for the Capacity Reservation owner and each Amazon Web Services account that is currently using the shared capacity. If the Capacity Reservation is not shared, it shows only the Capacity Reservation owner's usage.</td>
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
<tr id="parameter-CapacityReservationId">
    <td><CopyableCode code="CapacityReservationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Reservation.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
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
    defaultValue="get_capacity_reservation_usage"
    values={[
        { label: 'get_capacity_reservation_usage', value: 'get_capacity_reservation_usage' }
    ]}
>
<TabItem value="get_capacity_reservation_usage">

Gets usage information about a Capacity Reservation. If the Capacity Reservation is shared, it shows usage information for the Capacity Reservation owner and each Amazon Web Services account that is currently using the shared capacity. If the Capacity Reservation is not shared, it shows only the Capacity Reservation owner's usage.

```sql
SELECT
available_instance_count,
capacity_reservation_id,
instance_type,
instance_usages,
interruptible,
interruptible_capacity_allocation,
interruption_info,
next_token,
state,
total_instance_count
FROM aws.ec2.capacity_reservation_usages
WHERE CapacityReservationId = '{{ CapacityReservationId }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
