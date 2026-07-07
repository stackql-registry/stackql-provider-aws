--- 
title: host_reservation_purchase_previews
hide_title: false
hide_table_of_contents: false
keywords:
  - host_reservation_purchase_previews
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

Creates, updates, deletes, gets or lists a <code>host_reservation_purchase_previews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="host_reservation_purchase_previews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.host_reservation_purchase_previews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_host_reservation_purchase_preview"
    values={[
        { label: 'get_host_reservation_purchase_preview', value: 'get_host_reservation_purchase_preview' }
    ]}
>
<TabItem value="get_host_reservation_purchase_preview">

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
    <td>The currency in which the totalUpfrontPrice and totalHourlyPrice amounts are specified. At this time, the only supported currency is USD.</td>
</tr>
<tr>
    <td><CopyableCode code="Purchase" /></td>
    <td><code>string</code></td>
    <td>The purchase information of the Dedicated Host reservation and the Dedicated Hosts associated with it.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalHourlyPrice" /></td>
    <td><code>string</code></td>
    <td>The potential total hourly price of the reservation per hour.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalUpfrontPrice" /></td>
    <td><code>string</code></td>
    <td>The potential total upfront price. This is billed immediately.</td>
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
    <td><a href="#get_host_reservation_purchase_preview"><CopyableCode code="get_host_reservation_purchase_preview" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-HostIdSet"><code>HostIdSet</code></a>, <a href="#parameter-OfferingId"><code>OfferingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Preview a reservation purchase with configurations that match those of your Dedicated Host. You must have active Dedicated Hosts in your account before you purchase a reservation. This is a preview of the PurchaseHostReservation action and does not result in the offering being purchased.</td>
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
<tr id="parameter-HostIdSet">
    <td><CopyableCode code="HostIdSet" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Dedicated Hosts with which the reservation is associated.</td>
</tr>
<tr id="parameter-OfferingId">
    <td><CopyableCode code="OfferingId" /></td>
    <td><code>string</code></td>
    <td>The offering ID of the reservation.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_host_reservation_purchase_preview"
    values={[
        { label: 'get_host_reservation_purchase_preview', value: 'get_host_reservation_purchase_preview' }
    ]}
>
<TabItem value="get_host_reservation_purchase_preview">

Preview a reservation purchase with configurations that match those of your Dedicated Host. You must have active Dedicated Hosts in your account before you purchase a reservation. This is a preview of the PurchaseHostReservation action and does not result in the offering being purchased.

```sql
SELECT
CurrencyCode,
Purchase,
TotalHourlyPrice,
TotalUpfrontPrice
FROM aws.ec2.host_reservation_purchase_previews
WHERE HostIdSet = '{{ HostIdSet }}' -- required
AND OfferingId = '{{ OfferingId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
