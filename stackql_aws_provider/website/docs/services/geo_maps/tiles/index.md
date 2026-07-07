--- 
title: tiles
hide_title: false
hide_table_of_contents: false
keywords:
  - tiles
  - geo_maps
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

Creates, updates, deletes, gets or lists a <code>tiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.geo_maps.tiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tile"
    values={[
        { label: 'get_tile', value: 'get_tile' }
    ]}
>
<TabItem value="get_tile">

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
    <td><CopyableCode code="Blob" /></td>
    <td><code>string (byte)</code></td>
    <td>The blob represents a vector tile in mvt or a raster tile in an image format.</td>
</tr>
<tr>
    <td><CopyableCode code="CacheControl" /></td>
    <td><code>string</code></td>
    <td>Header that instructs caching configuration for the client.</td>
</tr>
<tr>
    <td><CopyableCode code="ContentType" /></td>
    <td><code>string</code></td>
    <td>Header that represents the format of the response. The response returns the following as the HTTP body.</td>
</tr>
<tr>
    <td><CopyableCode code="ETag" /></td>
    <td><code>string</code></td>
    <td>The pricing bucket for which the request is charged at.</td>
</tr>
<tr>
    <td><CopyableCode code="PricingBucket" /></td>
    <td><code>string</code></td>
    <td>The pricing bucket for which the request is charged at.</td>
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
    <td><a href="#get_tile"><CopyableCode code="get_tile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tileset"><code>tileset</code></a>, <a href="#parameter-z"><code>z</code></a>, <a href="#parameter-x"><code>x</code></a>, <a href="#parameter-y"><code>y</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-additional-features"><code>additional-features</code></a>, <a href="#parameter-key"><code>key</code></a></td>
    <td>GetTile returns a tile. Map tiles are used by clients to render a map. They're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. For more information, see Tiles in the Amazon Location Service Developer Guide.</td>
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
<tr id="parameter-tileset">
    <td><CopyableCode code="tileset" /></td>
    <td><code>string</code></td>
    <td>Specifies the desired tile set. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only the vector.basemap value. Valid Values: raster.satellite | vector.basemap | vector.traffic | raster.dem</td>
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
<tr id="parameter-additional-features">
    <td><CopyableCode code="additional-features" /></td>
    <td><code>array</code></td>
    <td>A list of optional additional parameters such as map styles that can be requested for each result. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers.</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_tile"
    values={[
        { label: 'get_tile', value: 'get_tile' }
    ]}
>
<TabItem value="get_tile">

GetTile returns a tile. Map tiles are used by clients to render a map. They're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. For more information, see Tiles in the Amazon Location Service Developer Guide.

```sql
SELECT
Blob,
CacheControl,
ContentType,
ETag,
PricingBucket
FROM aws.geo_maps.tiles
WHERE tileset = '{{ tileset }}' -- required
AND z = '{{ z }}' -- required
AND x = '{{ x }}' -- required
AND y = '{{ y }}' -- required
AND region = '{{ region }}' -- required
AND `additional-features` = '{{ additional-features }}'
AND key = '{{ key }}'
;
```
</TabItem>
</Tabs>
