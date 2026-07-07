--- 
title: ground_station_reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - ground_station_reservations
  - groundstation
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

Creates, updates, deletes, gets or lists a <code>ground_station_reservations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ground_station_reservations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.groundstation.ground_station_reservations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_ground_station_reservations"
    values={[
        { label: 'list_ground_station_reservations', value: 'list_ground_station_reservations' }
    ]}
>
<TabItem value="list_ground_station_reservations">

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
    <td><CopyableCode code="antennaName" /></td>
    <td><code>string</code></td>
    <td>Name of an antenna. (pattern: &lt;code&gt;&#91; a-zA-Z0-9-._:=&#93;&#123;4,256&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>End time of a ground station reservation in UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="groundStationId" /></td>
    <td><code>string</code></td>
    <td>ID of a ground station. (pattern: &lt;code&gt;&#91; a-zA-Z0-9-._:=&#93;&#123;4,97&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="reservationDetails" /></td>
    <td><code>object</code></td>
    <td>Details of a ground station reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="reservationType" /></td>
    <td><code>string</code></td>
    <td>Type of a ground station reservation. (MAINTENANCE, CONTACT)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start time of a ground station reservation in UTC.</td>
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
    <td><a href="#list_ground_station_reservations"><CopyableCode code="list_ground_station_reservations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ground_station_id"><code>ground_station_id</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-reservationTypes"><code>reservationTypes</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of reservations for a specified ground station.</td>
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
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>End time of the reservation window in UTC.</td>
</tr>
<tr id="parameter-ground_station_id">
    <td><CopyableCode code="ground_station_id" /></td>
    <td><code>string</code></td>
    <td>ID of a ground station.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start time of the reservation window in UTC.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of ground station reservations returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Next token returned in the request of a previous ListGroundStationReservations call. Used to get the next page of results.</td>
</tr>
<tr id="parameter-reservationTypes">
    <td><CopyableCode code="reservationTypes" /></td>
    <td><code>array</code></td>
    <td>Types of reservations to filter by.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_ground_station_reservations"
    values={[
        { label: 'list_ground_station_reservations', value: 'list_ground_station_reservations' }
    ]}
>
<TabItem value="list_ground_station_reservations">

Returns a list of reservations for a specified ground station.

```sql
SELECT
antennaName,
endTime,
groundStationId,
reservationDetails,
reservationType,
startTime
FROM aws.groundstation.ground_station_reservations
WHERE ground_station_id = '{{ ground_station_id }}' -- required
AND startTime = '{{ startTime }}' -- required
AND endTime = '{{ endTime }}' -- required
AND region = '{{ region }}' -- required
AND reservationTypes = '{{ reservationTypes }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
