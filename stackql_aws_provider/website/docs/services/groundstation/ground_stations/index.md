--- 
title: ground_stations
hide_title: false
hide_table_of_contents: false
keywords:
  - ground_stations
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

Creates, updates, deletes, gets or lists a <code>ground_stations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ground_stations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.groundstation.ground_stations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_ground_stations"
    values={[
        { label: 'list_ground_stations', value: 'list_ground_stations' }
    ]}
>
<TabItem value="list_ground_stations">

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
    <td><CopyableCode code="groundStationId" /></td>
    <td><code>string</code></td>
    <td>ID of a ground station. (pattern: &lt;code&gt;&#91; a-zA-Z0-9-._:=&#93;&#123;4,97&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="groundStationName" /></td>
    <td><code>string</code></td>
    <td>Name of a ground station. (pattern: &lt;code&gt;&#91; a-zA-Z0-9-._:=&#93;&#123;4,97&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Ground station Region. (pattern: &lt;code&gt;&#91;\w-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_ground_stations"><CopyableCode code="list_ground_stations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-satelliteId"><code>satelliteId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of ground stations.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of ground stations returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Next token that can be supplied in the next call to get the next page of ground stations.</td>
</tr>
<tr id="parameter-satelliteId">
    <td><CopyableCode code="satelliteId" /></td>
    <td><code>string</code></td>
    <td>Satellite ID to retrieve on-boarded ground stations.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_ground_stations"
    values={[
        { label: 'list_ground_stations', value: 'list_ground_stations' }
    ]}
>
<TabItem value="list_ground_stations">

Returns a list of ground stations.

```sql
SELECT
groundStationId,
groundStationName,
region
FROM aws.groundstation.ground_stations
WHERE region = '{{ region }}' -- required
AND satelliteId = '{{ satelliteId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
