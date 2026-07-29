--- 
title: reservation_purchase_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - reservation_purchase_recommendations
  - ce
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

Creates, updates, deletes, gets or lists a <code>reservation_purchase_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reservation_purchase_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.reservation_purchase_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_reservation_purchase_recommendation"
    values={[
        { label: 'get_reservation_purchase_recommendation', value: 'get_reservation_purchase_recommendation' }
    ]}
>
<TabItem value="get_reservation_purchase_recommendation">

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
    <td><CopyableCode code="account_scope" /></td>
    <td><code>string</code></td>
    <td>The account scope that Amazon Web Services recommends that you purchase this instance for. For example, you can purchase this reservation for an entire organization in Amazon Web Services Organizations. (PAYER, LINKED)</td>
</tr>
<tr>
    <td><CopyableCode code="lookback_period_in_days" /></td>
    <td><code>string</code></td>
    <td>How many days of previous usage that Amazon Web Services considers when making this recommendation. (SEVEN_DAYS, THIRTY_DAYS, SIXTY_DAYS)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_option" /></td>
    <td><code>string</code></td>
    <td>The payment option for the reservation (for example, AllUpfront or NoUpfront). (NO_UPFRONT, PARTIAL_UPFRONT, ALL_UPFRONT, LIGHT_UTILIZATION, MEDIUM_UTILIZATION, HEAVY_UTILIZATION)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_details" /></td>
    <td><code>array</code></td>
    <td>Details about the recommended purchases.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_summary" /></td>
    <td><code>object</code></td>
    <td>A summary about the recommended purchase.</td>
</tr>
<tr>
    <td><CopyableCode code="service_specification" /></td>
    <td><code>object</code></td>
    <td>Hardware specifications for the service that you want recommendations for.</td>
</tr>
<tr>
    <td><CopyableCode code="term_in_years" /></td>
    <td><code>string</code></td>
    <td>The term of the reservation that you want recommendations for, in years. (ONE_YEAR, THREE_YEARS)</td>
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
    <td><a href="#get_reservation_purchase_recommendation"><CopyableCode code="get_reservation_purchase_recommendation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing. Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings. For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for c4.large because that is the smallest size instance in the c4 instance family.</td>
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
    defaultValue="get_reservation_purchase_recommendation"
    values={[
        { label: 'get_reservation_purchase_recommendation', value: 'get_reservation_purchase_recommendation' }
    ]}
>
<TabItem value="get_reservation_purchase_recommendation">

Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing. Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings. For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for c4.large because that is the smallest size instance in the c4 instance family.

```sql
SELECT
account_scope,
lookback_period_in_days,
payment_option,
recommendation_details,
recommendation_summary,
service_specification,
term_in_years
FROM aws.ce.reservation_purchase_recommendations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
