--- 
title: host_reservation_offerings
hide_title: false
hide_table_of_contents: false
keywords:
  - host_reservation_offerings
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

Creates, updates, deletes, gets or lists a <code>host_reservation_offerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="host_reservation_offerings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.host_reservation_offerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_host_reservation_offerings"
    values={[
        { label: 'describe_host_reservation_offerings', value: 'describe_host_reservation_offerings' }
    ]}
>
<TabItem value="describe_host_reservation_offerings">

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
    <td>The currency of the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The duration of the offering (in seconds).</td>
</tr>
<tr>
    <td><CopyableCode code="hourly_price" /></td>
    <td><code>string</code></td>
    <td>The hourly price of the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_family" /></td>
    <td><code>string</code></td>
    <td>The instance family of the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="offering_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="payment_option" /></td>
    <td><code>string</code></td>
    <td>The available payment option.</td>
</tr>
<tr>
    <td><CopyableCode code="upfront_price" /></td>
    <td><code>string</code></td>
    <td>The upfront price of the offering. Does not apply to No Upfront offerings.</td>
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
    <td><a href="#describe_host_reservation_offerings"><CopyableCode code="describe_host_reservation_offerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxDuration"><code>MaxDuration</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-MinDuration"><code>MinDuration</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-OfferingId"><code>OfferingId</code></a></td>
    <td>Describes the Dedicated Host reservations that are available to purchase. The results describe all of the Dedicated Host reservation offerings, including offerings that might not match the instance family and Region of your Dedicated Hosts. When purchasing an offering, ensure that the instance family and Region of the offering matches that of the Dedicated Hosts with which it is to be associated. For more information about supported instance types, see Dedicated Hosts in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. instance-family - The instance family of the offering (for example, m4). payment-option - The payment option (NoUpfront | PartialUpfront | AllUpfront).</td>
</tr>
<tr id="parameter-MaxDuration">
    <td><CopyableCode code="MaxDuration" /></td>
    <td><code>integer</code></td>
    <td>This is the maximum duration of the reservation to purchase, specified in seconds. Reservations are available in one-year and three-year terms. The number of seconds specified must be the number of seconds in a year (365x24x60x60) times one of the supported durations (1 or 3). For example, specify 94608000 for three years.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned nextToken value. This value can be between 5 and 500. If maxResults is given a larger value than 500, you receive an error.</td>
</tr>
<tr id="parameter-MinDuration">
    <td><CopyableCode code="MinDuration" /></td>
    <td><code>integer</code></td>
    <td>This is the minimum duration of the reservation you'd like to purchase, specified in seconds. Reservations are available in one-year and three-year terms. The number of seconds specified must be the number of seconds in a year (365x24x60x60) times one of the supported durations (1 or 3). For example, specify 31536000 for one year.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
</tr>
<tr id="parameter-OfferingId">
    <td><CopyableCode code="OfferingId" /></td>
    <td><code>string</code></td>
    <td>The ID of the reservation offering.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_host_reservation_offerings"
    values={[
        { label: 'describe_host_reservation_offerings', value: 'describe_host_reservation_offerings' }
    ]}
>
<TabItem value="describe_host_reservation_offerings">

Describes the Dedicated Host reservations that are available to purchase. The results describe all of the Dedicated Host reservation offerings, including offerings that might not match the instance family and Region of your Dedicated Hosts. When purchasing an offering, ensure that the instance family and Region of the offering matches that of the Dedicated Hosts with which it is to be associated. For more information about supported instance types, see Dedicated Hosts in the Amazon EC2 User Guide.

```sql
SELECT
currency_code,
duration,
hourly_price,
instance_family,
offering_id,
payment_option,
upfront_price
FROM aws.ec2.host_reservation_offerings
WHERE region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND MaxDuration = '{{ MaxDuration }}'
AND MaxResults = '{{ MaxResults }}'
AND MinDuration = '{{ MinDuration }}'
AND NextToken = '{{ NextToken }}'
AND OfferingId = '{{ OfferingId }}'
;
```
</TabItem>
</Tabs>
