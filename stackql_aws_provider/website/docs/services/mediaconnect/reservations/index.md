--- 
title: reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - reservations
  - mediaconnect
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

Creates, updates, deletes, gets or lists a <code>reservations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reservations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconnect.reservations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_reservation"
    values={[
        { label: 'describe_reservation', value: 'describe_reservation' },
        { label: 'list_reservations', value: 'list_reservations' }
    ]}
>
<TabItem value="describe_reservation">

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
    <td>The type of currency that is used for billing. The currencyCode used for your reservation is US dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The length of time that this reservation is active. MediaConnect defines this value in the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="duration_units" /></td>
    <td><code>string</code></td>
    <td>The unit of measurement for the duration of the reservation. MediaConnect defines this value in the offering. (MONTHS)</td>
</tr>
<tr>
    <td><CopyableCode code="end" /></td>
    <td><code>string</code></td>
    <td>The day and time that this reservation expires. This value is calculated based on the start date and time that you set and the offering's duration.</td>
</tr>
<tr>
    <td><CopyableCode code="offering_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that MediaConnect assigns to the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="offering_description" /></td>
    <td><code>string</code></td>
    <td>A description of the offering. MediaConnect defines this value in the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="price_per_unit" /></td>
    <td><code>string</code></td>
    <td>The cost of a single unit. This value, in combination with priceUnits, makes up the rate. MediaConnect defines this value in the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="price_units" /></td>
    <td><code>string</code></td>
    <td>The unit of measurement that is used for billing. This value, in combination with pricePerUnit, makes up the rate. MediaConnect defines this value in the offering. (HOURLY)</td>
</tr>
<tr>
    <td><CopyableCode code="reservation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that MediaConnect assigns to the reservation when you purchase an offering.</td>
</tr>
<tr>
    <td><CopyableCode code="reservation_name" /></td>
    <td><code>string</code></td>
    <td>The name that you assigned to the reservation when you purchased the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="reservation_state" /></td>
    <td><code>string</code></td>
    <td>The status of your reservation. (ACTIVE, EXPIRED, PROCESSING, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_specification" /></td>
    <td><code>object</code></td>
    <td>A definition of the amount of outbound bandwidth that you would be reserving if you purchase the offering. MediaConnect defines the values that make up the resourceSpecification in the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="start" /></td>
    <td><code>string</code></td>
    <td>The day and time that the reservation becomes active. You set this value when you purchase the offering.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_reservations">

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
    <td>The type of currency that is used for billing. The currencyCode used for your reservation is US dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The length of time that this reservation is active. MediaConnect defines this value in the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="duration_units" /></td>
    <td><code>string</code></td>
    <td>The unit of measurement for the duration of the reservation. MediaConnect defines this value in the offering. (MONTHS)</td>
</tr>
<tr>
    <td><CopyableCode code="end" /></td>
    <td><code>string</code></td>
    <td>The day and time that this reservation expires. This value is calculated based on the start date and time that you set and the offering's duration.</td>
</tr>
<tr>
    <td><CopyableCode code="offering_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that MediaConnect assigns to the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="offering_description" /></td>
    <td><code>string</code></td>
    <td>A description of the offering. MediaConnect defines this value in the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="price_per_unit" /></td>
    <td><code>string</code></td>
    <td>The cost of a single unit. This value, in combination with priceUnits, makes up the rate. MediaConnect defines this value in the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="price_units" /></td>
    <td><code>string</code></td>
    <td>The unit of measurement that is used for billing. This value, in combination with pricePerUnit, makes up the rate. MediaConnect defines this value in the offering. (HOURLY)</td>
</tr>
<tr>
    <td><CopyableCode code="reservation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that MediaConnect assigns to the reservation when you purchase an offering.</td>
</tr>
<tr>
    <td><CopyableCode code="reservation_name" /></td>
    <td><code>string</code></td>
    <td>The name that you assigned to the reservation when you purchased the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="reservation_state" /></td>
    <td><code>string</code></td>
    <td>The status of your reservation. (ACTIVE, EXPIRED, PROCESSING, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_specification" /></td>
    <td><code>object</code></td>
    <td>A definition of the amount of outbound bandwidth that you would be reserving if you purchase the offering. MediaConnect defines the values that make up the resourceSpecification in the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="start" /></td>
    <td><code>string</code></td>
    <td>The day and time that the reservation becomes active. You set this value when you purchase the offering.</td>
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
    <td><a href="#describe_reservation"><CopyableCode code="describe_reservation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-reservation_arn"><code>reservation_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays the details of a reservation. The response includes the reservation name, state, start date and time, and the details of the offering that make up the rest of the reservation (such as price, duration, and outbound bandwidth).</td>
</tr>
<tr>
    <td><a href="#list_reservations"><CopyableCode code="list_reservations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Displays a list of all reservations that have been purchased by this account in the current Amazon Web Services Region. This list includes all reservations in all states (such as active and expired).</td>
</tr>
<tr>
    <td><a href="#purchase_offering"><CopyableCode code="purchase_offering" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-offering_arn"><code>offering_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReservationName"><code>ReservationName</code></a></td>
    <td></td>
    <td>Submits a request to purchase an offering. If you already have an active reservation, you can't purchase another offering.</td>
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
<tr id="parameter-offering_arn">
    <td><CopyableCode code="offering_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the offering.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-reservation_arn">
    <td><CopyableCode code="reservation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the offering.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per API request. For example, you submit a ListReservations request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies the batch of results that you want to see. For example, you submit a ListReservations request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_reservation"
    values={[
        { label: 'describe_reservation', value: 'describe_reservation' },
        { label: 'list_reservations', value: 'list_reservations' }
    ]}
>
<TabItem value="describe_reservation">

Displays the details of a reservation. The response includes the reservation name, state, start date and time, and the details of the offering that make up the rest of the reservation (such as price, duration, and outbound bandwidth).

```sql
SELECT
currency_code,
duration,
duration_units,
end,
offering_arn,
offering_description,
price_per_unit,
price_units,
reservation_arn,
reservation_name,
reservation_state,
resource_specification,
start
FROM aws.mediaconnect.reservations
WHERE reservation_arn = '{{ reservation_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_reservations">

Displays a list of all reservations that have been purchased by this account in the current Amazon Web Services Region. This list includes all reservations in all states (such as active and expired).

```sql
SELECT
currency_code,
duration,
duration_units,
end,
offering_arn,
offering_description,
price_per_unit,
price_units,
reservation_arn,
reservation_name,
reservation_state,
resource_specification,
start
FROM aws.mediaconnect.reservations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="purchase_offering"
    values={[
        { label: 'purchase_offering', value: 'purchase_offering' }
    ]}
>
<TabItem value="purchase_offering">

Submits a request to purchase an offering. If you already have an active reservation, you can't purchase another offering.

```sql
EXEC aws.mediaconnect.reservations.purchase_offering 
@offering_arn='{{ offering_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ReservationName": "{{ ReservationName }}", 
"Start": "{{ Start }}"
}'
;
```
</TabItem>
</Tabs>
