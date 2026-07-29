--- 
title: offerings
hide_title: false
hide_table_of_contents: false
keywords:
  - offerings
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

Creates, updates, deletes, gets or lists an <code>offerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="offerings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.offerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_offering"
    values={[
        { label: 'describe_offering', value: 'describe_offering' },
        { label: 'list_offerings', value: 'list_offerings' }
    ]}
>
<TabItem value="describe_offering">

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
    <td><CopyableCode code="fixed_price" /></td>
    <td><code>number (double)</code></td>
    <td>Placeholder documentation for __double</td>
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
    <td><CopyableCode code="resource_specification" /></td>
    <td><code>object</code></td>
    <td>Resource configuration details</td>
</tr>
<tr>
    <td><CopyableCode code="usage_price" /></td>
    <td><code>number (double)</code></td>
    <td>Placeholder documentation for __double</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_offerings">

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
    <td><CopyableCode code="fixed_price" /></td>
    <td><code>number (double)</code></td>
    <td>Placeholder documentation for __double</td>
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
    <td><CopyableCode code="resource_specification" /></td>
    <td><code>object</code></td>
    <td>Resource configuration details</td>
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
    <td><a href="#describe_offering"><CopyableCode code="describe_offering" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-offering_id"><code>offering_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get details for an offering.</td>
</tr>
<tr>
    <td><a href="#list_offerings"><CopyableCode code="list_offerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-channelClass"><code>channelClass</code></a>, <a href="#parameter-channelConfiguration"><code>channelConfiguration</code></a>, <a href="#parameter-codec"><code>codec</code></a>, <a href="#parameter-duration"><code>duration</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-maximumBitrate"><code>maximumBitrate</code></a>, <a href="#parameter-maximumFramerate"><code>maximumFramerate</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-resolution"><code>resolution</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-specialFeature"><code>specialFeature</code></a>, <a href="#parameter-videoQuality"><code>videoQuality</code></a></td>
    <td>List offerings available for purchase.</td>
</tr>
<tr>
    <td><a href="#purchase_offering"><CopyableCode code="purchase_offering" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-offering_id"><code>offering_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Count"><code>Count</code></a></td>
    <td></td>
    <td>Purchase an offering and create a reservation.</td>
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
<tr id="parameter-offering_id">
    <td><CopyableCode code="offering_id" /></td>
    <td><code>string</code></td>
    <td>Offering to purchase, e.g. '87654321'</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-channelClass">
    <td><CopyableCode code="channelClass" /></td>
    <td><code>string</code></td>
    <td>Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'</td>
</tr>
<tr id="parameter-channelConfiguration">
    <td><CopyableCode code="channelConfiguration" /></td>
    <td><code>string</code></td>
    <td>Filter to offerings that match the configuration of an existing channel, e.g. '2345678' (a channel ID)</td>
</tr>
<tr id="parameter-codec">
    <td><CopyableCode code="codec" /></td>
    <td><code>string</code></td>
    <td>Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', 'LINK', or 'AV1'</td>
</tr>
<tr id="parameter-duration">
    <td><CopyableCode code="duration" /></td>
    <td><code>string</code></td>
    <td>Filter by offering duration, e.g. '12'</td>
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
    defaultValue="describe_offering"
    values={[
        { label: 'describe_offering', value: 'describe_offering' },
        { label: 'list_offerings', value: 'list_offerings' }
    ]}
>
<TabItem value="describe_offering">

Get details for an offering.

```sql
SELECT
arn,
currency_code,
duration,
duration_units,
fixed_price,
offering_description,
offering_id,
offering_type,
region,
resource_specification,
usage_price
FROM aws.medialive.offerings
WHERE offering_id = '{{ offering_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_offerings">

List offerings available for purchase.

```sql
SELECT
arn,
currency_code,
duration,
duration_units,
fixed_price,
offering_description,
offering_id,
offering_type,
region,
resource_specification,
usage_price
FROM aws.medialive.offerings
WHERE region = '{{ region }}' -- required
AND channelClass = '{{ channelClass }}'
AND channelConfiguration = '{{ channelConfiguration }}'
AND codec = '{{ codec }}'
AND duration = '{{ duration }}'
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


## Lifecycle Methods

<Tabs
    defaultValue="purchase_offering"
    values={[
        { label: 'purchase_offering', value: 'purchase_offering' }
    ]}
>
<TabItem value="purchase_offering">

Purchase an offering and create a reservation.

```sql
EXEC aws.medialive.offerings.purchase_offering 
@offering_id='{{ offering_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Count": {{ Count }}, 
"Name": "{{ Name }}", 
"RenewalSettings": "{{ RenewalSettings }}", 
"RequestId": "{{ RequestId }}", 
"Start": "{{ Start }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
