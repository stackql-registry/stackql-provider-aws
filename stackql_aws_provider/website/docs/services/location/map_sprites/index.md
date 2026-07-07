--- 
title: map_sprites
hide_title: false
hide_table_of_contents: false
keywords:
  - map_sprites
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

Creates, updates, deletes, gets or lists a <code>map_sprites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="map_sprites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.map_sprites" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_map_sprites"
    values={[
        { label: 'get_map_sprites', value: 'get_map_sprites' }
    ]}
>
<TabItem value="get_map_sprites">

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
    <td>Contains the body of the sprite sheet or JSON offset ﬁle.</td>
</tr>
<tr>
    <td><CopyableCode code="CacheControl" /></td>
    <td><code>string</code></td>
    <td>The HTTP Cache-Control directive for the value.</td>
</tr>
<tr>
    <td><CopyableCode code="ContentType" /></td>
    <td><code>string</code></td>
    <td>The content type of the sprite sheet and offsets. For example, the sprite sheet content type is image/png, and the sprite offset JSON document is application/json.</td>
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
    <td><a href="#get_map_sprites"><CopyableCode code="get_map_sprites" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-map_name"><code>map_name</code></a>, <a href="#parameter-file_name"><code>file_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend upgrading to GetSprites unless you require Grab data. GetMapSprites is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 GetSprites operation gives a better user experience and is compatible with the remainder of the V2 Maps API. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.</td>
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
    <td>The name of the sprite ﬁle. Use the following ﬁle names for the sprite sheet: sprites.png sprites@2x.png for high pixel density displays For the JSON document containing image offsets. Use the following ﬁle names: sprites.json sprites@2x.json for high pixel density displays</td>
</tr>
<tr id="parameter-map_name">
    <td><CopyableCode code="map_name" /></td>
    <td><code>string</code></td>
    <td>The map resource associated with the sprite ﬁle.</td>
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
    defaultValue="get_map_sprites"
    values={[
        { label: 'get_map_sprites', value: 'get_map_sprites' }
    ]}
>
<TabItem value="get_map_sprites">

This operation is no longer current and may be deprecated in the future. We recommend upgrading to GetSprites unless you require Grab data. GetMapSprites is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 GetSprites operation gives a better user experience and is compatible with the remainder of the V2 Maps API. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.

```sql
SELECT
Blob,
CacheControl,
ContentType
FROM aws.location.map_sprites
WHERE map_name = '{{ map_name }}' -- required
AND file_name = '{{ file_name }}' -- required
AND region = '{{ region }}' -- required
AND key = '{{ key }}'
;
```
</TabItem>
</Tabs>
