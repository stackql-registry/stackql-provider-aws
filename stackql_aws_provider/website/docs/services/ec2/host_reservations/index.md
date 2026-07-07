--- 
title: host_reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - host_reservations
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

Creates, updates, deletes, gets or lists a <code>host_reservations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="host_reservations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.host_reservations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_host_reservations"
    values={[
        { label: 'describe_host_reservations', value: 'describe_host_reservations' }
    ]}
>
<TabItem value="describe_host_reservations">

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
    <td><CopyableCode code="Count" /></td>
    <td><code>integer</code></td>
    <td>The number of Dedicated Hosts the reservation is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrencyCode" /></td>
    <td><code>string</code></td>
    <td>The currency in which the upfrontPrice and hourlyPrice amounts are specified. At this time, the only supported currency is USD.</td>
</tr>
<tr>
    <td><CopyableCode code="Duration" /></td>
    <td><code>integer</code></td>
    <td>The length of the reservation's term, specified in seconds. Can be 31536000 (1 year) | 94608000 (3 years).</td>
</tr>
<tr>
    <td><CopyableCode code="End" /></td>
    <td><code>string</code></td>
    <td>The date and time that the reservation ends.</td>
</tr>
<tr>
    <td><CopyableCode code="HostIdSet" /></td>
    <td><code>string</code></td>
    <td>The IDs of the Dedicated Hosts associated with the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="HostReservationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the reservation that specifies the associated Dedicated Hosts.</td>
</tr>
<tr>
    <td><CopyableCode code="HourlyPrice" /></td>
    <td><code>string</code></td>
    <td>The hourly price of the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceFamily" /></td>
    <td><code>string</code></td>
    <td>The instance family of the Dedicated Host Reservation. The instance family on the Dedicated Host must be the same in order for it to benefit from the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="OfferingId" /></td>
    <td><code>string</code></td>
    <td>The ID of the reservation. This remains the same regardless of which Dedicated Hosts are associated with it.</td>
</tr>
<tr>
    <td><CopyableCode code="PaymentOption" /></td>
    <td><code>string</code></td>
    <td>The payment option selected for this reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="Start" /></td>
    <td><code>string</code></td>
    <td>The date and time that the reservation started.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the Dedicated Host Reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="UpfrontPrice" /></td>
    <td><code>string</code></td>
    <td>The upfront price of the reservation.</td>
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
    <td><a href="#describe_host_reservations"><CopyableCode code="describe_host_reservations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-HostReservationIdSet"><code>HostReservationIdSet</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes reservations that are associated with Dedicated Hosts in your account.</td>
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
    <td>The filters. instance-family - The instance family (for example, m4). payment-option - The payment option (NoUpfront | PartialUpfront | AllUpfront). state - The state of the reservation (payment-pending | payment-failed | active | retired). tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</td>
</tr>
<tr id="parameter-HostReservationIdSet">
    <td><CopyableCode code="HostReservationIdSet" /></td>
    <td><code>array</code></td>
    <td>The host reservation IDs.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned nextToken value. This value can be between 5 and 500. If maxResults is given a larger value than 500, you receive an error.</td>
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
    defaultValue="describe_host_reservations"
    values={[
        { label: 'describe_host_reservations', value: 'describe_host_reservations' }
    ]}
>
<TabItem value="describe_host_reservations">

Describes reservations that are associated with Dedicated Hosts in your account.

```sql
SELECT
Count,
CurrencyCode,
Duration,
End,
HostIdSet,
HostReservationId,
HourlyPrice,
InstanceFamily,
OfferingId,
PaymentOption,
Start,
State,
Tags,
UpfrontPrice
FROM aws.ec2.host_reservations
WHERE region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND HostReservationIdSet = '{{ HostReservationIdSet }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
