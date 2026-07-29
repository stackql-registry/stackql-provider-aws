--- 
title: glyphs
hide_title: false
hide_table_of_contents: false
keywords:
  - glyphs
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

Creates, updates, deletes, gets or lists a <code>glyphs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="glyphs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.geo_maps.glyphs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_glyphs"
    values={[
        { label: 'get_glyphs', value: 'get_glyphs' }
    ]}
>
<TabItem value="get_glyphs">

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
    <td>The Glyph, as a binary blob.</td>
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
    <td>The glyph's Etag.</td>
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
    <td><a href="#get_glyphs"><CopyableCode code="get_glyphs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-font_stack"><code>font_stack</code></a>, <a href="#parameter-font_unicode_range"><code>font_unicode_range</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>GetGlyphs returns the map's glyphs. For more information, see Style labels with glyphs in the Amazon Location Service Developer Guide.</td>
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
    <td>Name of the FontStack to retrieve. Example: Amazon Ember Bold,Noto Sans Bold. The supported font stacks are as follows: Amazon Ember Bold Amazon Ember Bold Italic Amazon Ember Bold,Noto Sans Bold Amazon Ember Bold,Noto Sans Bold,Noto Sans Arabic Bold Amazon Ember Condensed RC BdItalic Amazon Ember Condensed RC Bold Amazon Ember Condensed RC Bold Italic Amazon Ember Condensed RC Bold,Noto Sans Bold Amazon Ember Condensed RC Bold,Noto Sans Bold,Noto Sans Arabic Condensed Bold Amazon Ember Condensed RC Light Amazon Ember Condensed RC Light Italic Amazon Ember Condensed RC LtItalic Amazon Ember Condensed RC Regular Amazon Ember Condensed RC Regular Italic Amazon Ember Condensed RC Regular,Noto Sans Regular Amazon Ember Condensed RC Regular,Noto Sans Regular,Noto Sans Arabic Condensed Regular Amazon Ember Condensed RC RgItalic Amazon Ember Condensed RC ThItalic Amazon Ember Condensed RC Thin Amazon Ember Condensed RC Thin Italic Amazon Ember Heavy Amazon Ember Heavy Italic Amazon Ember Light Amazon Ember Light Italic Amazon Ember Medium Amazon Ember Medium Italic Amazon Ember Medium,Noto Sans Medium Amazon Ember Medium,Noto Sans Medium,Noto Sans Arabic Medium Amazon Ember Regular Amazon Ember Regular Italic Amazon Ember Regular Italic,Noto Sans Italic Amazon Ember Regular Italic,Noto Sans Italic,Noto Sans Arabic Regular Amazon Ember Regular,Noto Sans Regular Amazon Ember Regular,Noto Sans Regular,Noto Sans Arabic Regular Amazon Ember Thin Amazon Ember Thin Italic AmazonEmberCdRC_Bd AmazonEmberCdRC_BdIt AmazonEmberCdRC_Lt AmazonEmberCdRC_LtIt AmazonEmberCdRC_Rg AmazonEmberCdRC_RgIt AmazonEmberCdRC_Th AmazonEmberCdRC_ThIt AmazonEmber_Bd AmazonEmber_BdIt AmazonEmber_He AmazonEmber_HeIt AmazonEmber_Lt AmazonEmber_LtIt AmazonEmber_Md AmazonEmber_MdIt AmazonEmber_Rg AmazonEmber_RgIt AmazonEmber_Th AmazonEmber_ThIt Noto Sans Black Noto Sans Black Italic Noto Sans Bold Noto Sans Bold Italic Noto Sans Extra Bold Noto Sans Extra Bold Italic Noto Sans Extra Light Noto Sans Extra Light Italic Noto Sans Italic Noto Sans Light Noto Sans Light Italic Noto Sans Medium Noto Sans Medium Italic Noto Sans Regular Noto Sans Semi Bold Noto Sans Semi Bold Italic Noto Sans Thin Noto Sans Thin Italic NotoSans-Bold NotoSans-Italic NotoSans-Medium NotoSans-Regular Open Sans Regular,Arial Unicode MS Regular</td>
</tr>
<tr id="parameter-font_unicode_range">
    <td><CopyableCode code="font_unicode_range" /></td>
    <td><code>string</code></td>
    <td>A Unicode range of characters to download glyphs for. This must be aligned to multiples of 256. Example: 0-255.pbf</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_glyphs"
    values={[
        { label: 'get_glyphs', value: 'get_glyphs' }
    ]}
>
<TabItem value="get_glyphs">

GetGlyphs returns the map's glyphs. For more information, see Style labels with glyphs in the Amazon Location Service Developer Guide.

```sql
SELECT
blob,
cache_control,
content_type,
e_tag
FROM aws.geo_maps.glyphs
WHERE font_stack = '{{ font_stack }}' -- required
AND font_unicode_range = '{{ font_unicode_range }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
