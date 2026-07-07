--- 
title: reservation_offerings
hide_title: false
hide_table_of_contents: false
keywords:
  - reservation_offerings
  - redshift_serverless
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

Creates, updates, deletes, gets or lists a <code>reservation_offerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reservation_offerings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_serverless.reservation_offerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_reservation_offering"
    values={[
        { label: 'get_reservation_offering', value: 'get_reservation_offering' },
        { label: 'list_reservation_offerings', value: 'list_reservation_offerings' }
    ]}
>
<TabItem value="get_reservation_offering">

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
    <td><CopyableCode code="currencyCode" /></td>
    <td><code>string</code></td>
    <td>The currency code for the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The duration, in seconds, for which the reservation reserves the RPUs.</td>
</tr>
<tr>
    <td><CopyableCode code="hourlyCharge" /></td>
    <td><code>number (double)</code></td>
    <td>The rate you are charged for each hour the reservation is active.</td>
</tr>
<tr>
    <td><CopyableCode code="offeringId" /></td>
    <td><code>string</code></td>
    <td>The offering identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="offeringType" /></td>
    <td><code>string</code></td>
    <td>Determines the payment schedule for the reservation. (ALL_UPFRONT, NO_UPFRONT)</td>
</tr>
<tr>
    <td><CopyableCode code="upfrontCharge" /></td>
    <td><code>number (double)</code></td>
    <td>The up-front price you are charged for the reservation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_reservation_offerings">

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
    <td><CopyableCode code="currencyCode" /></td>
    <td><code>string</code></td>
    <td>The currency code for the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The duration, in seconds, for which the reservation reserves the RPUs.</td>
</tr>
<tr>
    <td><CopyableCode code="hourlyCharge" /></td>
    <td><code>number (double)</code></td>
    <td>The rate you are charged for each hour the reservation is active.</td>
</tr>
<tr>
    <td><CopyableCode code="offeringId" /></td>
    <td><code>string</code></td>
    <td>The offering identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="offeringType" /></td>
    <td><code>string</code></td>
    <td>Determines the payment schedule for the reservation. (ALL_UPFRONT, NO_UPFRONT)</td>
</tr>
<tr>
    <td><CopyableCode code="upfrontCharge" /></td>
    <td><code>number (double)</code></td>
    <td>The up-front price you are charged for the reservation.</td>
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
    <td><a href="#get_reservation_offering"><CopyableCode code="get_reservation_offering" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the reservation offering. The offering determines the payment schedule for the reservation.</td>
</tr>
<tr>
    <td><a href="#list_reservation_offerings"><CopyableCode code="list_reservation_offerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current reservation offerings in your account.</td>
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
    defaultValue="get_reservation_offering"
    values={[
        { label: 'get_reservation_offering', value: 'get_reservation_offering' },
        { label: 'list_reservation_offerings', value: 'list_reservation_offerings' }
    ]}
>
<TabItem value="get_reservation_offering">

Returns the reservation offering. The offering determines the payment schedule for the reservation.

```sql
SELECT
currencyCode,
duration,
hourlyCharge,
offeringId,
offeringType,
upfrontCharge
FROM aws.redshift_serverless.reservation_offerings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_reservation_offerings">

Returns the current reservation offerings in your account.

```sql
SELECT
currencyCode,
duration,
hourlyCharge,
offeringId,
offeringType,
upfrontCharge
FROM aws.redshift_serverless.reservation_offerings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
