--- 
title: map_tiles
hide_title: false
hide_table_of_contents: false
keywords:
  - map_tiles
  - location
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

Creates, updates, deletes, gets or lists a <code>map_tiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="map_tiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.map_tiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_map_tile"
    values={[
        { label: 'get_map_tile', value: 'get_map_tile' }
    ]}
>
<TabItem value="get_map_tile">

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
    <td><CopyableCode code="blob" /></td>
    <td><code>string (byte)</code></td>
    <td>Contains Mapbox Vector Tile (MVT) data.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_control" /></td>
    <td><code>string</code></td>
    <td>The HTTP Cache-Control directive for the value.</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>The map tile's content type. For example, application/vnd.mapbox-vector-tile.</td>
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
    <td><a href="#get_map_tile"><CopyableCode code="get_map_tile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-map_name"><code>map_name</code></a>, <a href="#parameter-z"><code>z</code></a>, <a href="#parameter-x"><code>x</code></a>, <a href="#parameter-y"><code>y</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend upgrading to GetTile unless you require Grab data. GetMapTile is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 GetTile operation gives a better user experience and is compatible with the remainder of the V2 Maps API. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</td>
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
<tr id="parameter-map_name">
    <td><CopyableCode code="map_name" /></td>
    <td><code>string</code></td>
    <td>The map resource to retrieve the map tiles from.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x">
    <td><CopyableCode code="x" /></td>
    <td><code>string</code></td>
    <td>The X axis value for the map tile.</td>
</tr>
<tr id="parameter-y">
    <td><CopyableCode code="y" /></td>
    <td><code>string</code></td>
    <td>The Y axis value for the map tile.</td>
</tr>
<tr id="parameter-z">
    <td><CopyableCode code="z" /></td>
    <td><code>string</code></td>
    <td>The zoom value for the map tile.</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The optional API key to authorize the request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_map_tile"
    values={[
        { label: 'get_map_tile', value: 'get_map_tile' }
    ]}
>
<TabItem value="get_map_tile">

This operation is no longer current and may be deprecated in the future. We recommend upgrading to GetTile unless you require Grab data. GetMapTile is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 GetTile operation gives a better user experience and is compatible with the remainder of the V2 Maps API. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).

```sql
SELECT
blob,
cache_control,
content_type
FROM aws.location.map_tiles
WHERE map_name = '{{ map_name }}' -- required
AND z = '{{ z }}' -- required
AND x = '{{ x }}' -- required
AND y = '{{ y }}' -- required
AND region = '{{ region }}' -- required
AND key = '{{ key }}'
;
```
</TabItem>
</Tabs>
