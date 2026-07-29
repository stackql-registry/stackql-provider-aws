--- 
title: satellites
hide_title: false
hide_table_of_contents: false
keywords:
  - satellites
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

Creates, updates, deletes, gets or lists a <code>satellites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="satellites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.groundstation.satellites" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_satellite"
    values={[
        { label: 'get_satellite', value: 'get_satellite' },
        { label: 'list_satellites', value: 'list_satellites' }
    ]}
>
<TabItem value="get_satellite">

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
    <td><CopyableCode code="current_ephemeris" /></td>
    <td><code>object</code></td>
    <td>The current ephemeris being used to compute the trajectory of the satellite.</td>
</tr>
<tr>
    <td><CopyableCode code="ground_stations" /></td>
    <td><code>array</code></td>
    <td>A list of ground stations to which the satellite is on-boarded.</td>
</tr>
<tr>
    <td><CopyableCode code="norad_satellite_id" /></td>
    <td><code>integer</code></td>
    <td>NORAD satellite ID number.</td>
</tr>
<tr>
    <td><CopyableCode code="satellite_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of a satellite. (pattern: &lt;code&gt;arn:aws:groundstation:(&#91;-a-z0-9&#93;&#123;1,50&#125;)?:&#91;0-9&#93;&#123;12&#125;:satellite/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="satellite_id" /></td>
    <td><code>string</code></td>
    <td>UUID of a satellite. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_satellites">

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
    <td><CopyableCode code="current_ephemeris" /></td>
    <td><code>object</code></td>
    <td>The current ephemeris being used to compute the trajectory of the satellite.</td>
</tr>
<tr>
    <td><CopyableCode code="ground_stations" /></td>
    <td><code>array</code></td>
    <td>A list of ground stations to which the satellite is on-boarded.</td>
</tr>
<tr>
    <td><CopyableCode code="norad_satellite_id" /></td>
    <td><code>integer</code></td>
    <td>NORAD satellite ID number.</td>
</tr>
<tr>
    <td><CopyableCode code="satellite_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of a satellite. (pattern: &lt;code&gt;arn:aws:groundstation:(&#91;-a-z0-9&#93;&#123;1,50&#125;)?:&#91;0-9&#93;&#123;12&#125;:satellite/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="satellite_id" /></td>
    <td><code>string</code></td>
    <td>UUID of a satellite. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_satellite"><CopyableCode code="get_satellite" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-satellite_id"><code>satellite_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a satellite.</td>
</tr>
<tr>
    <td><a href="#list_satellites"><CopyableCode code="list_satellites" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of satellites.</td>
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
<tr id="parameter-satellite_id">
    <td><CopyableCode code="satellite_id" /></td>
    <td><code>string</code></td>
    <td>UUID of a satellite.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of satellites returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Next token that can be supplied in the next call to get the next page of satellites.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_satellite"
    values={[
        { label: 'get_satellite', value: 'get_satellite' },
        { label: 'list_satellites', value: 'list_satellites' }
    ]}
>
<TabItem value="get_satellite">

Returns a satellite.

```sql
SELECT
current_ephemeris,
ground_stations,
norad_satellite_id,
satellite_arn,
satellite_id
FROM aws.groundstation.satellites
WHERE satellite_id = '{{ satellite_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_satellites">

Returns a list of satellites.

```sql
SELECT
current_ephemeris,
ground_stations,
norad_satellite_id,
satellite_arn,
satellite_id
FROM aws.groundstation.satellites
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
