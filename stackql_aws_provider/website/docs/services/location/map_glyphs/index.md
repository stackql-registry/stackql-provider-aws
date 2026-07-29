--- 
title: map_glyphs
hide_title: false
hide_table_of_contents: false
keywords:
  - map_glyphs
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

Creates, updates, deletes, gets or lists a <code>map_glyphs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="map_glyphs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.map_glyphs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_map_glyphs"
    values={[
        { label: 'get_map_glyphs', value: 'get_map_glyphs' }
    ]}
>
<TabItem value="get_map_glyphs">

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
    <td>The glyph, as binary blob.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_control" /></td>
    <td><code>string</code></td>
    <td>The HTTP Cache-Control directive for the value.</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>The map glyph content type. For example, application/octet-stream.</td>
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
    <td><a href="#get_map_glyphs"><CopyableCode code="get_map_glyphs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-map_name"><code>map_name</code></a>, <a href="#parameter-font_stack"><code>font_stack</code></a>, <a href="#parameter-font_unicode_range"><code>font_unicode_range</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend upgrading to GetGlyphs unless you require Grab data. GetMapGlyphs is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 GetGlyphs operation gives a better user experience and is compatible with the remainder of the V2 Maps API. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Retrieves glyphs used to display labels on a map.</td>
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
<tr id="parameter-font_stack">
    <td><CopyableCode code="font_stack" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of fonts to load glyphs from in order of preference. For example, Noto Sans Regular, Arial Unicode. Valid font stacks for Esri styles: VectorEsriDarkGrayCanvas – Ubuntu Medium Italic | Ubuntu Medium | Ubuntu Italic | Ubuntu Regular | Ubuntu Bold VectorEsriLightGrayCanvas – Ubuntu Italic | Ubuntu Regular | Ubuntu Light | Ubuntu Bold VectorEsriTopographic – Noto Sans Italic | Noto Sans Regular | Noto Sans Bold | Noto Serif Regular | Roboto Condensed Light Italic VectorEsriStreets – Arial Regular | Arial Italic | Arial Bold VectorEsriNavigation – Arial Regular | Arial Italic | Arial Bold Valid font stacks for HERE Technologies styles: VectorHereContrast – Fira GO Regular | Fira GO Bold VectorHereExplore, VectorHereExploreTruck, HybridHereExploreSatellite – Fira GO Italic | Fira GO Map | Fira GO Map Bold | Noto Sans CJK JP Bold | Noto Sans CJK JP Light | Noto Sans CJK JP Regular Valid font stacks for GrabMaps styles: VectorGrabStandardLight, VectorGrabStandardDark – Noto Sans Regular | Noto Sans Medium | Noto Sans Bold Valid font stacks for Open Data styles: VectorOpenDataStandardLight, VectorOpenDataStandardDark, VectorOpenDataVisualizationLight, VectorOpenDataVisualizationDark – Amazon Ember Regular,Noto Sans Regular | Amazon Ember Bold,Noto Sans Bold | Amazon Ember Medium,Noto Sans Medium | Amazon Ember Regular Italic,Noto Sans Italic | Amazon Ember Condensed RC Regular,Noto Sans Regular | Amazon Ember Condensed RC Bold,Noto Sans Bold | Amazon Ember Regular,Noto Sans Regular,Noto Sans Arabic Regular | Amazon Ember Condensed RC Bold,Noto Sans Bold,Noto Sans Arabic Condensed Bold | Amazon Ember Bold,Noto Sans Bold,Noto Sans Arabic Bold | Amazon Ember Regular Italic,Noto Sans Italic,Noto Sans Arabic Regular | Amazon Ember Condensed RC Regular,Noto Sans Regular,Noto Sans Arabic Condensed Regular | Amazon Ember Medium,Noto Sans Medium,Noto Sans Arabic Medium The fonts used by the Open Data map styles are combined fonts that use Amazon Ember for most glyphs but Noto Sans for glyphs unsupported by Amazon Ember.</td>
</tr>
<tr id="parameter-font_unicode_range">
    <td><CopyableCode code="font_unicode_range" /></td>
    <td><code>string</code></td>
    <td>A Unicode range of characters to download glyphs for. Each response will contain 256 characters. For example, 0–255 includes all characters from range U+0000 to 00FF. Must be aligned to multiples of 256.</td>
</tr>
<tr id="parameter-map_name">
    <td><CopyableCode code="map_name" /></td>
    <td><code>string</code></td>
    <td>The map resource associated with the glyph ﬁle.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
    defaultValue="get_map_glyphs"
    values={[
        { label: 'get_map_glyphs', value: 'get_map_glyphs' }
    ]}
>
<TabItem value="get_map_glyphs">

This operation is no longer current and may be deprecated in the future. We recommend upgrading to GetGlyphs unless you require Grab data. GetMapGlyphs is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 GetGlyphs operation gives a better user experience and is compatible with the remainder of the V2 Maps API. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Retrieves glyphs used to display labels on a map.

```sql
SELECT
blob,
cache_control,
content_type
FROM aws.location.map_glyphs
WHERE map_name = '{{ map_name }}' -- required
AND font_stack = '{{ font_stack }}' -- required
AND font_unicode_range = '{{ font_unicode_range }}' -- required
AND region = '{{ region }}' -- required
AND key = '{{ key }}'
;
```
</TabItem>
</Tabs>
