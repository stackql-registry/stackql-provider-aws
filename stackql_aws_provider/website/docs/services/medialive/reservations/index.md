--- 
title: reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - reservations
  - medialive
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.reservations" /></td></tr>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="count" /></td>
    <td><code>integer</code></td>
    <td>Placeholder documentation for __integer</td>
</tr>
<tr>
    <td><CopyableCode code="currency_code" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>Placeholder documentation for __integer</td>
</tr>
<tr>
    <td><CopyableCode code="duration_units" /></td>
    <td><code>string</code></td>
    <td>Units for duration, e.g. 'MONTHS' (MONTHS)</td>
</tr>
<tr>
    <td><CopyableCode code="end" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="fixed_price" /></td>
    <td><code>number (double)</code></td>
    <td>Placeholder documentation for __double</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="offering_description" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="offering_id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="offering_type" /></td>
    <td><code>string</code></td>
    <td>Offering type, e.g. 'NO_UPFRONT' (NO_UPFRONT)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="renewal_settings" /></td>
    <td><code>object</code></td>
    <td>Renewal settings for the reservation</td>
</tr>
<tr>
    <td><CopyableCode code="reservation_id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="resource_specification" /></td>
    <td><code>object</code></td>
    <td>Resource configuration details</td>
</tr>
<tr>
    <td><CopyableCode code="start" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of reservation, e.g. 'ACTIVE' (ACTIVE, EXPIRED, CANCELED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A collection of key-value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="usage_price" /></td>
    <td><code>number (double)</code></td>
    <td>Placeholder documentation for __double</td>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="count" /></td>
    <td><code>integer</code></td>
    <td>Placeholder documentation for __integer</td>
</tr>
<tr>
    <td><CopyableCode code="currency_code" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>Placeholder documentation for __integer</td>
</tr>
<tr>
    <td><CopyableCode code="duration_units" /></td>
    <td><code>string</code></td>
    <td>Units for duration, e.g. 'MONTHS' (MONTHS)</td>
</tr>
<tr>
    <td><CopyableCode code="end" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="fixed_price" /></td>
    <td><code>number (double)</code></td>
    <td>Placeholder documentation for __double</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="offering_description" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="offering_id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="offering_type" /></td>
    <td><code>string</code></td>
    <td>Offering type, e.g. 'NO_UPFRONT' (NO_UPFRONT)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="renewal_settings" /></td>
    <td><code>object</code></td>
    <td>The Renewal settings for Reservations</td>
</tr>
<tr>
    <td><CopyableCode code="reservation_id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="resource_specification" /></td>
    <td><code>object</code></td>
    <td>Resource configuration details</td>
</tr>
<tr>
    <td><CopyableCode code="start" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of reservation, e.g. 'ACTIVE' (ACTIVE, EXPIRED, CANCELED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A collection of key-value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="usage_price" /></td>
    <td><code>number (double)</code></td>
    <td>Placeholder documentation for __double</td>
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
    <td><a href="#parameter-reservation_id"><code>reservation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get details for a reservation.</td>
</tr>
<tr>
    <td><a href="#list_reservations"><CopyableCode code="list_reservations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-channelClass"><code>channelClass</code></a>, <a href="#parameter-codec"><code>codec</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-maximumBitrate"><code>maximumBitrate</code></a>, <a href="#parameter-maximumFramerate"><code>maximumFramerate</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-resolution"><code>resolution</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-specialFeature"><code>specialFeature</code></a>, <a href="#parameter-videoQuality"><code>videoQuality</code></a></td>
    <td>List purchased reservations.</td>
</tr>
<tr>
    <td><a href="#update_reservation"><CopyableCode code="update_reservation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-reservation_id"><code>reservation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update reservation.</td>
</tr>
<tr>
    <td><a href="#delete_reservation"><CopyableCode code="delete_reservation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-reservation_id"><code>reservation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an expired reservation.</td>
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
<tr id="parameter-reservation_id">
    <td><CopyableCode code="reservation_id" /></td>
    <td><code>string</code></td>
    <td>Unique reservation ID, e.g. '1234567'</td>
</tr>
<tr id="parameter-channelClass">
    <td><CopyableCode code="channelClass" /></td>
    <td><code>string</code></td>
    <td>Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'</td>
</tr>
<tr id="parameter-codec">
    <td><CopyableCode code="codec" /></td>
    <td><code>string</code></td>
    <td>Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', 'LINK', or 'AV1'</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-maximumBitrate">
    <td><CopyableCode code="maximumBitrate" /></td>
    <td><code>string</code></td>
    <td>Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'</td>
</tr>
<tr id="parameter-maximumFramerate">
    <td><CopyableCode code="maximumFramerate" /></td>
    <td><code>string</code></td>
    <td>Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resolution">
    <td><CopyableCode code="resolution" /></td>
    <td><code>string</code></td>
    <td>Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'</td>
</tr>
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'</td>
</tr>
<tr id="parameter-specialFeature">
    <td><CopyableCode code="specialFeature" /></td>
    <td><code>string</code></td>
    <td>Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'</td>
</tr>
<tr id="parameter-videoQuality">
    <td><CopyableCode code="videoQuality" /></td>
    <td><code>string</code></td>
    <td>Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'</td>
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

Get details for a reservation.

```sql
SELECT
arn,
count,
currency_code,
duration,
duration_units,
end,
fixed_price,
name,
offering_description,
offering_id,
offering_type,
region,
renewal_settings,
reservation_id,
resource_specification,
start,
state,
tags,
usage_price
FROM aws.medialive.reservations
WHERE reservation_id = '{{ reservation_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_reservations">

List purchased reservations.

```sql
SELECT
arn,
count,
currency_code,
duration,
duration_units,
end,
fixed_price,
name,
offering_description,
offering_id,
offering_type,
region,
renewal_settings,
reservation_id,
resource_specification,
start,
state,
tags,
usage_price
FROM aws.medialive.reservations
WHERE region = '{{ region }}' -- required
AND channelClass = '{{ channelClass }}'
AND codec = '{{ codec }}'
AND maxResults = '{{ maxResults }}'
AND maximumBitrate = '{{ maximumBitrate }}'
AND maximumFramerate = '{{ maximumFramerate }}'
AND nextToken = '{{ nextToken }}'
AND resolution = '{{ resolution }}'
AND resourceType = '{{ resourceType }}'
AND specialFeature = '{{ specialFeature }}'
AND videoQuality = '{{ videoQuality }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_reservation"
    values={[
        { label: 'update_reservation', value: 'update_reservation' }
    ]}
>
<TabItem value="update_reservation">

Update reservation.

```sql
UPDATE aws.medialive.reservations
SET 
Name = '{{ Name }}',
RenewalSettings = '{{ RenewalSettings }}'
WHERE 
reservation_id = '{{ reservation_id }}' --required
AND region = '{{ region }}' --required
RETURNING
reservation;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_reservation"
    values={[
        { label: 'delete_reservation', value: 'delete_reservation' }
    ]}
>
<TabItem value="delete_reservation">

Delete an expired reservation.

```sql
DELETE FROM aws.medialive.reservations
WHERE reservation_id = '{{ reservation_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
