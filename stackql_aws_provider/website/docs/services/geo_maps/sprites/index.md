--- 
title: sprites
hide_title: false
hide_table_of_contents: false
keywords:
  - sprites
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

Creates, updates, deletes, gets or lists a <code>sprites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sprites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.geo_maps.sprites" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sprites"
    values={[
        { label: 'get_sprites', value: 'get_sprites' }
    ]}
>
<TabItem value="get_sprites">

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
    <td>The body of the sprite sheet or JSON offset file (image/png or application/json, depending on input).</td>
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
    <td>The sprite's Etag.</td>
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
    <td><a href="#get_sprites"><CopyableCode code="get_sprites" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-file_name"><code>file_name</code></a>, <a href="#parameter-style"><code>style</code></a>, <a href="#parameter-color_scheme"><code>color_scheme</code></a>, <a href="#parameter-variant"><code>variant</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>GetSprites returns the map's sprites. For more information, see Style iconography with sprites in the Amazon Location Service Developer Guide.</td>
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
<tr id="parameter-color_scheme">
    <td><CopyableCode code="color_scheme" /></td>
    <td><code>string</code></td>
    <td>Sets the color tone for the map sprites, such as dark and light. Example: Light Default value: Light Valid values for ColorScheme are case sensitive.</td>
</tr>
<tr id="parameter-file_name">
    <td><CopyableCode code="file_name" /></td>
    <td><code>string</code></td>
    <td>Sprites API: The name of the sprite ﬁle to retrieve, following pattern sprites(@2x)?\.(png|json). Example: sprites.png</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-style">
    <td><CopyableCode code="style" /></td>
    <td><code>string</code></td>
    <td>Style specifies the desired map style for the Sprites APIs.</td>
</tr>
<tr id="parameter-variant">
    <td><CopyableCode code="variant" /></td>
    <td><code>string</code></td>
    <td>Optimizes map styles for specific use case or industry. You can choose allowed variant only with Standard map style. Example: Default Valid values for Variant are case sensitive.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sprites"
    values={[
        { label: 'get_sprites', value: 'get_sprites' }
    ]}
>
<TabItem value="get_sprites">

GetSprites returns the map's sprites. For more information, see Style iconography with sprites in the Amazon Location Service Developer Guide.

```sql
SELECT
Blob,
CacheControl,
ContentType,
ETag
FROM aws.geo_maps.sprites
WHERE file_name = '{{ file_name }}' -- required
AND style = '{{ style }}' -- required
AND color_scheme = '{{ color_scheme }}' -- required
AND variant = '{{ variant }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
