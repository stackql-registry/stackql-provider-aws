--- 
title: style_descriptors
hide_title: false
hide_table_of_contents: false
keywords:
  - style_descriptors
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

Creates, updates, deletes, gets or lists a <code>style_descriptors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="style_descriptors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.geo_maps.style_descriptors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_style_descriptor"
    values={[
        { label: 'get_style_descriptor', value: 'get_style_descriptor' }
    ]}
>
<TabItem value="get_style_descriptor">

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
    <td>This Blob contains the body of the style descriptor which is in application/json format.</td>
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
    <td>The style descriptor's Etag.</td>
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
    <td><a href="#get_style_descriptor"><CopyableCode code="get_style_descriptor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-style"><code>style</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-color-scheme"><code>color-scheme</code></a>, <a href="#parameter-political-view"><code>political-view</code></a>, <a href="#parameter-terrain"><code>terrain</code></a>, <a href="#parameter-contour-density"><code>contour-density</code></a>, <a href="#parameter-traffic"><code>traffic</code></a>, <a href="#parameter-travel-modes"><code>travel-modes</code></a>, <a href="#parameter-buildings"><code>buildings</code></a>, <a href="#parameter-poi-density"><code>poi-density</code></a>, <a href="#parameter-poi-categories"><code>poi-categories</code></a>, <a href="#parameter-key"><code>key</code></a></td>
    <td>GetStyleDescriptor returns information about the style. For more information, see Style dynamic maps in the Amazon Location Service Developer Guide.</td>
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
<tr id="parameter-style">
    <td><CopyableCode code="style" /></td>
    <td><code>string</code></td>
    <td>Style specifies the desired map style. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only the Standard and Monochrome values.</td>
</tr>
<tr id="parameter-buildings">
    <td><CopyableCode code="buildings" /></td>
    <td><code>string</code></td>
    <td>Adjusts how building details are rendered on the map. The following building styles are currently supported: Buildings3D: Displays buildings as three-dimensional extrusions on the map. Buildings3D is valid only for the Standard and Monochrome map styles.</td>
</tr>
<tr id="parameter-color-scheme">
    <td><CopyableCode code="color-scheme" /></td>
    <td><code>string</code></td>
    <td>Sets the color tone for the map, such as dark and light. Example: Light Default value: Light Valid values for ColorScheme are case sensitive.</td>
</tr>
<tr id="parameter-contour-density">
    <td><CopyableCode code="contour-density" /></td>
    <td><code>string</code></td>
    <td>Displays the shape and steepness of terrain features using elevation lines. The density value controls how densely the available contour line information is rendered on the map. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. This parameter is valid for all map styles except Satellite.</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.</td>
</tr>
<tr id="parameter-poi-categories">
    <td><CopyableCode code="poi-categories" /></td>
    <td><code>array</code></td>
    <td>Renders only the specified categories of points of interest. When you omit this parameter, the map renders all categories. The following categories are currently supported: FoodAndDrink Entertainment SightsAndMuseums Transportation Accommodations LeisureAndOutdoor Shopping BusinessAndServices FacilitiesAndBuildings Specify each category as a separate poi-categories query parameter. Duplicate values are rejected. This parameter has no effect when poi-density is set to Off, which hides all points of interest regardless of category. This parameter is valid only for the Standard and Hybrid map styles. In ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers, this parameter is valid only for the Standard map style.</td>
</tr>
<tr id="parameter-poi-density">
    <td><CopyableCode code="poi-density" /></td>
    <td><code>string</code></td>
    <td>Controls how densely points of interest are rendered on the map. The density value controls the zoom level at which each category of points of interest appears, and how quickly less prominent points of interest are revealed as you zoom in. Denser values display more points of interest at lower zoom levels. Use Off to hide all points of interest. When you omit this parameter, the map renders at Default density. The difference between density values is most noticeable at mid-range zoom levels. At high zoom levels, all density values converge on displaying every available point of interest. This parameter is valid only for the Standard and Hybrid map styles. In ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers, this parameter is valid only for the Standard map style.</td>
</tr>
<tr id="parameter-political-view">
    <td><CopyableCode code="political-view" /></td>
    <td><code>string</code></td>
    <td>Specifies the political view using ISO 3166-2 or ISO 3166-3 country code format. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. The following political views are currently supported: ARG: Argentina's view on the Southern Patagonian Ice Field and Tierra Del Fuego, including the Falkland Islands, South Georgia, and South Sandwich Islands EGY: Egypt's view on Bir Tawil IND: India's view on Gilgit-Baltistan KEN: Kenya's view on the Ilemi Triangle MAR: Morocco's view on Western Sahara RUS: Russia's view on Crimea SDN: Sudan's view on the Halaib Triangle SRB: Serbia's view on Kosovo, Vukovar, and Sarengrad Islands SUR: Suriname's view on the Courantyne Headwaters and Lawa Headwaters SYR: Syria's view on the Golan Heights TUR: Turkey's view on Cyprus and Northern Cyprus TZA: Tanzania's view on Lake Malawi URY: Uruguay's view on Rincon de Artigas VNM: Vietnam's view on the Paracel Islands and Spratly Islands</td>
</tr>
<tr id="parameter-terrain">
    <td><CopyableCode code="terrain" /></td>
    <td><code>string</code></td>
    <td>Adjusts how physical terrain details are rendered on the map. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. The following terrain styles are currently supported: Hillshade: Displays the physical terrain details through shading and highlighting of elevation change and geographic features. Terrain3D: Displays physical terrain details and elevations as a three-dimensional model. Hillshade is valid only for the Standard and Monochrome map styles.</td>
</tr>
<tr id="parameter-traffic">
    <td><CopyableCode code="traffic" /></td>
    <td><code>string</code></td>
    <td>Displays real-time traffic information overlay on map, such as incident events and flow events. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. This parameter is valid for all map styles except Satellite.</td>
</tr>
<tr id="parameter-travel-modes">
    <td><CopyableCode code="travel-modes" /></td>
    <td><code>array</code></td>
    <td>Renders additional map information relevant to selected travel modes. Information for multiple travel modes can be displayed simultaneously, although this increases the overall information density rendered on the map. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. This parameter is valid for all map styles except Satellite.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_style_descriptor"
    values={[
        { label: 'get_style_descriptor', value: 'get_style_descriptor' }
    ]}
>
<TabItem value="get_style_descriptor">

GetStyleDescriptor returns information about the style. For more information, see Style dynamic maps in the Amazon Location Service Developer Guide.

```sql
SELECT
blob,
cache_control,
content_type,
e_tag
FROM aws.geo_maps.style_descriptors
WHERE style = '{{ style }}' -- required
AND region = '{{ region }}' -- required
AND `color-scheme` = '{{ color-scheme }}'
AND `political-view` = '{{ political-view }}'
AND terrain = '{{ terrain }}'
AND `contour-density` = '{{ contour-density }}'
AND traffic = '{{ traffic }}'
AND `travel-modes` = '{{ travel-modes }}'
AND buildings = '{{ buildings }}'
AND `poi-density` = '{{ poi-density }}'
AND `poi-categories` = '{{ poi-categories }}'
AND key = '{{ key }}'
;
```
</TabItem>
</Tabs>
