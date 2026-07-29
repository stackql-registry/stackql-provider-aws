--- 
title: capacity_reservation_billing_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_reservation_billing_requests
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

Creates, updates, deletes, gets or lists a <code>capacity_reservation_billing_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_reservation_billing_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.capacity_reservation_billing_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_capacity_reservation_billing_requests"
    values={[
        { label: 'describe_capacity_reservation_billing_requests', value: 'describe_capacity_reservation_billing_requests' }
    ]}
>
<TabItem value="describe_capacity_reservation_billing_requests">

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
    <td><CopyableCode code="capacity_reservation_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_reservation_info" /></td>
    <td><code>string</code></td>
    <td>Information about the Capacity Reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time" /></td>
    <td><code>string</code></td>
    <td>The date and time, in UTC time format, at which the request was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="requested_by" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that initiated the request.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the request. For more information, see View billing assignment requests for a shared Amazon EC2 Capacity Reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Information about the status.</td>
</tr>
<tr>
    <td><CopyableCode code="unused_reservation_billing_owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account to which the request was sent.</td>
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
    <td><a href="#describe_capacity_reservation_billing_requests"><CopyableCode code="describe_capacity_reservation_billing_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-Role"><code>Role</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CapacityReservationId"><code>CapacityReservationId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes a request to assign the billing of the unused capacity of a Capacity Reservation. For more information, see Billing assignment for shared Amazon EC2 Capacity Reservations.</td>
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
<tr id="parameter-Role">
    <td><CopyableCode code="Role" /></td>
    <td><code>string</code></td>
    <td>Specify one of the following: odcr-owner - If you are the Capacity Reservation owner, specify this value to view requests that you have initiated. Not supported with the requested-by filter. unused-reservation-billing-owner - If you are the consumer account, specify this value to view requests that have been sent to you. Not supported with the unused-reservation-billing-owner filter.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CapacityReservationId">
    <td><CopyableCode code="CapacityReservationId" /></td>
    <td><code>array</code></td>
    <td>The ID of the Capacity Reservation.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. status - The state of the request (pending | accepted | rejected | cancelled | revoked | expired). requested-by - The account ID of the Capacity Reservation owner that initiated the request. Not supported if you specify requested-by for Role. unused-reservation-billing-owner - The ID of the consumer account to which the request was sent. Not supported if you specify unused-reservation-billing-owner for Role.</td>
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
    defaultValue="describe_capacity_reservation_billing_requests"
    values={[
        { label: 'describe_capacity_reservation_billing_requests', value: 'describe_capacity_reservation_billing_requests' }
    ]}
>
<TabItem value="describe_capacity_reservation_billing_requests">

Describes a request to assign the billing of the unused capacity of a Capacity Reservation. For more information, see Billing assignment for shared Amazon EC2 Capacity Reservations.

```sql
SELECT
capacity_reservation_id,
capacity_reservation_info,
last_update_time,
requested_by,
status,
status_message,
unused_reservation_billing_owner_id
FROM aws.ec2.capacity_reservation_billing_requests
WHERE Role = '{{ Role }}' -- required
AND region = '{{ region }}' -- required
AND CapacityReservationId = '{{ CapacityReservationId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
