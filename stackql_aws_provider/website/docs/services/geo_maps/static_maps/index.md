--- 
title: static_maps
hide_title: false
hide_table_of_contents: false
keywords:
  - static_maps
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

Creates, updates, deletes, gets or lists a <code>static_maps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="static_maps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.geo_maps.static_maps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_static_map"
    values={[
        { label: 'get_static_map', value: 'get_static_map' }
    ]}
>
<TabItem value="get_static_map">

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
    <td>The blob represents a map image as a jpeg for the GetStaticMap API.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_control" /></td>
    <td><code>string</code></td>
    <td>Header that instructs caching configuration for the client.</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>Header that represents the format of the response. The response returns the following as the HTTP body.</td>
</tr>
<tr>
    <td><CopyableCode code="e_tag" /></td>
    <td><code>string</code></td>
    <td>The static map's Etag.</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_bucket" /></td>
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
    <td><a href="#get_static_map"><CopyableCode code="get_static_map" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-height"><code>height</code></a>, <a href="#parameter-file_name"><code>file_name</code></a>, <a href="#parameter-width"><code>width</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-bounding-box"><code>bounding-box</code></a>, <a href="#parameter-bounded-positions"><code>bounded-positions</code></a>, <a href="#parameter-center"><code>center</code></a>, <a href="#parameter-color-scheme"><code>color-scheme</code></a>, <a href="#parameter-compact-overlay"><code>compact-overlay</code></a>, <a href="#parameter-crop-labels"><code>crop-labels</code></a>, <a href="#parameter-geojson-overlay"><code>geojson-overlay</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-label-size"><code>label-size</code></a>, <a href="#parameter-lang"><code>lang</code></a>, <a href="#parameter-padding"><code>padding</code></a>, <a href="#parameter-political-view"><code>political-view</code></a>, <a href="#parameter-pois"><code>pois</code></a>, <a href="#parameter-radius"><code>radius</code></a>, <a href="#parameter-scale-unit"><code>scale-unit</code></a>, <a href="#parameter-style"><code>style</code></a>, <a href="#parameter-zoom"><code>zoom</code></a></td>
    <td>This operation is not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. GetStaticMap provides high-quality static map images with customizable options. You can modify the map's appearance and overlay additional information. It's an ideal solution for applications requiring tailored static map snapshots. For more information, see the following topics in the Amazon Location Service Developer Guide: Static maps Customize static maps Overlay on the static map</td>
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
<tr id="parameter-file_name">
    <td><CopyableCode code="file_name" /></td>
    <td><code>string</code></td>
    <td>The map scaling parameter to size the image, icons, and labels. It follows the pattern of ^map(@2x)?$. Example: map, map@2x</td>
</tr>
<tr id="parameter-height">
    <td><CopyableCode code="height" /></td>
    <td><code>integer</code></td>
    <td>Specifies the height of the map image.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-width">
    <td><CopyableCode code="width" /></td>
    <td><code>integer</code></td>
    <td>Specifies the width of the map image.</td>
</tr>
<tr id="parameter-bounded-positions">
    <td><CopyableCode code="bounded-positions" /></td>
    <td><code>string</code></td>
    <td>Takes in two or more pair of coordinates in World Geodetic System (WGS 84) format: &#91;longitude, latitude&#93;, with each coordinate separated by a comma. The API will generate an image to encompass all of the provided coordinates. Cannot be used with Zoom and or Radius Example: 97.170451,78.039098,99.045536,27.176178</td>
</tr>
<tr id="parameter-bounding-box">
    <td><CopyableCode code="bounding-box" /></td>
    <td><code>string</code></td>
    <td>Takes in two pairs of coordinates in World Geodetic System (WGS 84) format: &#91;longitude, latitude&#93;, denoting south-westerly and north-easterly edges of the image. The underlying area becomes the view of the image. Example: -123.17075,49.26959,-123.08125,49.31429</td>
</tr>
<tr id="parameter-center">
    <td><CopyableCode code="center" /></td>
    <td><code>string</code></td>
    <td>Takes in a pair of coordinates in World Geodetic System (WGS 84) format: &#91;longitude, latitude&#93;, which becomes the center point of the image. This parameter requires that either zoom or radius is set. Cannot be used with Zoom and or Radius Example: 49.295,-123.108</td>
</tr>
<tr id="parameter-color-scheme">
    <td><CopyableCode code="color-scheme" /></td>
    <td><code>string</code></td>
    <td>Sets the color tone for the map, such as dark and light. Example: Light Default value: Light Valid values for ColorScheme are case sensitive.</td>
</tr>
<tr id="parameter-compact-overlay">
    <td><CopyableCode code="compact-overlay" /></td>
    <td><code>string</code></td>
    <td>Takes in a string to draw geometries on the image. The input is a comma separated format as follows format: &#91;Lon, Lat&#93; Example: line:-122.407653,37.798557,-122.413291,37.802443;color=%23DD0000;width=7;outline-color=#00DD00;outline-width=5yd|point:-122.40572,37.80004;label=Fog Hill Market;size=large;text-color=%23DD0000;color=#EE4B2B Currently it supports the following geometry types: point, line and polygon. It does not support multiPoint , multiLine and multiPolgyon.</td>
</tr>
<tr id="parameter-crop-labels">
    <td><CopyableCode code="crop-labels" /></td>
    <td><code>boolean</code></td>
    <td>It is a flag that takes in true or false. It prevents the labels that are on the edge of the image from being cut or obscured.</td>
</tr>
<tr id="parameter-geojson-overlay">
    <td><CopyableCode code="geojson-overlay" /></td>
    <td><code>string</code></td>
    <td>Takes in a string to draw geometries on the image. The input is a valid GeoJSON collection object. Example: &#123;"type":"FeatureCollection","features": &#91;&#123;"type":"Feature","geometry":&#123;"type":"MultiPoint","coordinates": &#91;&#91;-90.076345,51.504107&#93;,&#91;-0.074451,51.506892&#93;&#93;&#125;,"properties": &#123;"color":"#00DD00"&#125;&#125;&#93;&#125;</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.</td>
</tr>
<tr id="parameter-label-size">
    <td><CopyableCode code="label-size" /></td>
    <td><code>string</code></td>
    <td>Overrides the label size auto-calculated by FileName. Takes in one of the values - Small or Large.</td>
</tr>
<tr id="parameter-lang">
    <td><CopyableCode code="lang" /></td>
    <td><code>string</code></td>
    <td>Specifies the language on the map labels using the BCP 47 language tag, limited to ISO 639-1 two-letter language codes. If the specified language data isn't available for the map image, the labels will default to the regional primary language. Supported codes: ar as az be bg bn bs ca cs cy da de el en es et eu fi fo fr ga gl gn gu he hi hr hu hy id is it ja ka kk km kn ko ky lt lv mk ml mr ms mt my nl no or pa pl pt ro ru sk sl sq sr sv ta te th tr uk uz vi zh</td>
</tr>
<tr id="parameter-padding">
    <td><CopyableCode code="padding" /></td>
    <td><code>integer</code></td>
    <td>Applies additional space (in pixels) around overlay feature to prevent them from being cut or obscured. Value for max and min is determined by: Min: 1 Max: min(height, width)/4 Example: 100</td>
</tr>
<tr id="parameter-pois">
    <td><CopyableCode code="pois" /></td>
    <td><code>string</code></td>
    <td>Determines if the result image will display icons representing points of interest on the map.</td>
</tr>
<tr id="parameter-political-view">
    <td><CopyableCode code="political-view" /></td>
    <td><code>string</code></td>
    <td>Specifies the political view, using ISO 3166-2 or ISO 3166-3 country code format. The following political views are currently supported: ARG: Argentina's view on the Southern Patagonian Ice Field and Tierra Del Fuego, including the Falkland Islands, South Georgia, and South Sandwich Islands EGY: Egypt's view on Bir Tawil IND: India's view on Gilgit-Baltistan KEN: Kenya's view on the Ilemi Triangle MAR: Morocco's view on Western Sahara RUS: Russia's view on Crimea SDN: Sudan's view on the Halaib Triangle SRB: Serbia's view on Kosovo, Vukovar, and Sarengrad Islands SUR: Suriname's view on the Courantyne Headwaters and Lawa Headwaters SYR: Syria's view on the Golan Heights TUR: Turkey's view on Cyprus and Northern Cyprus TZA: Tanzania's view on Lake Malawi URY: Uruguay's view on Rincon de Artigas VNM: Vietnam's view on the Paracel Islands and Spratly Islands</td>
</tr>
<tr id="parameter-radius">
    <td><CopyableCode code="radius" /></td>
    <td><code>integer (int64)</code></td>
    <td>Used with center parameter, it specifies the zoom of the image where you can control it on a granular level. Takes in any value &gt;= 1. Example: 1500 Cannot be used with Zoom. Unit: Meters</td>
</tr>
<tr id="parameter-scale-unit">
    <td><CopyableCode code="scale-unit" /></td>
    <td><code>string</code></td>
    <td>Displays a scale on the bottom right of the map image with the unit specified in the input. Example: KilometersMiles, Miles, Kilometers, MilesKilometers</td>
</tr>
<tr id="parameter-style">
    <td><CopyableCode code="style" /></td>
    <td><code>string</code></td>
    <td>Style specifies the desired map style.</td>
</tr>
<tr id="parameter-zoom">
    <td><CopyableCode code="zoom" /></td>
    <td><code>number (float)</code></td>
    <td>Specifies the zoom level of the map image. Cannot be used with Radius.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_static_map"
    values={[
        { label: 'get_static_map', value: 'get_static_map' }
    ]}
>
<TabItem value="get_static_map">

This operation is not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. GetStaticMap provides high-quality static map images with customizable options. You can modify the map's appearance and overlay additional information. It's an ideal solution for applications requiring tailored static map snapshots. For more information, see the following topics in the Amazon Location Service Developer Guide: Static maps Customize static maps Overlay on the static map

```sql
SELECT
blob,
cache_control,
content_type,
e_tag,
pricing_bucket
FROM aws.geo_maps.static_maps
WHERE height = '{{ height }}' -- required
AND file_name = '{{ file_name }}' -- required
AND width = '{{ width }}' -- required
AND region = '{{ region }}' -- required
AND `bounding-box` = '{{ bounding-box }}'
AND `bounded-positions` = '{{ bounded-positions }}'
AND center = '{{ center }}'
AND `color-scheme` = '{{ color-scheme }}'
AND `compact-overlay` = '{{ compact-overlay }}'
AND `crop-labels` = '{{ crop-labels }}'
AND `geojson-overlay` = '{{ geojson-overlay }}'
AND key = '{{ key }}'
AND `label-size` = '{{ label-size }}'
AND lang = '{{ lang }}'
AND padding = '{{ padding }}'
AND `political-view` = '{{ political-view }}'
AND pois = '{{ pois }}'
AND radius = '{{ radius }}'
AND `scale-unit` = '{{ scale-unit }}'
AND style = '{{ style }}'
AND zoom = '{{ zoom }}'
;
```
</TabItem>
</Tabs>
