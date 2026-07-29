--- 
title: antennas
hide_title: false
hide_table_of_contents: false
keywords:
  - antennas
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

Creates, updates, deletes, gets or lists an <code>antennas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="antennas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.groundstation.antennas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_antennas"
    values={[
        { label: 'list_antennas', value: 'list_antennas' }
    ]}
>
<TabItem value="list_antennas">

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
    <td><CopyableCode code="antenna_name" /></td>
    <td><code>string</code></td>
    <td>Name of the antenna. (pattern: &lt;code&gt;&#91; a-zA-Z0-9-._:=&#93;&#123;4,256&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ground_station_name" /></td>
    <td><code>string</code></td>
    <td>Name of the ground station the antenna is associated with. (pattern: &lt;code&gt;&#91; a-zA-Z0-9-._:=&#93;&#123;4,97&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region of the antenna. (pattern: &lt;code&gt;&#91;\w-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_antennas"><CopyableCode code="list_antennas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ground_station_id"><code>ground_station_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of antennas at a specified ground station.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of antennas returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Next token returned in the request of a previous ListAntennas call. Used to get the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_antennas"
    values={[
        { label: 'list_antennas', value: 'list_antennas' }
    ]}
>
<TabItem value="list_antennas">

Returns a list of antennas at a specified ground station.

```sql
SELECT
antenna_name,
ground_station_name,
region
FROM aws.groundstation.antennas
WHERE ground_station_id = '{{ ground_station_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
