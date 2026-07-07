--- 
title: tiles
hide_title: false
hide_table_of_contents: false
keywords:
  - tiles
  - sagemaker_geospatial
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker_geospatial.tiles" /></td></tr>
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
    <td><CopyableCode code="BinaryFile" /></td>
    <td><code>string (byte)</code></td>
    <td>The output binary file.</td>
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
    <td><a href="#parameter-Arn"><code>Arn</code></a>, <a href="#parameter-ImageAssets"><code>ImageAssets</code></a>, <a href="#parameter-Target"><code>Target</code></a>, <a href="#parameter-x"><code>x</code></a>, <a href="#parameter-y"><code>y</code></a>, <a href="#parameter-z"><code>z</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ExecutionRoleArn"><code>ExecutionRoleArn</code></a>, <a href="#parameter-ImageMask"><code>ImageMask</code></a>, <a href="#parameter-OutputDataType"><code>OutputDataType</code></a>, <a href="#parameter-OutputFormat"><code>OutputFormat</code></a>, <a href="#parameter-PropertyFilters"><code>PropertyFilters</code></a>, <a href="#parameter-TimeRangeFilter"><code>TimeRangeFilter</code></a></td>
    <td>Gets a web mercator tile for the given Earth Observation job.</td>
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
<tr id="parameter-Arn">
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the tile operation.</td>
</tr>
<tr id="parameter-ImageAssets">
    <td><CopyableCode code="ImageAssets" /></td>
    <td><code>array</code></td>
    <td>The particular assets or bands to tile.</td>
</tr>
<tr id="parameter-Target">
    <td><CopyableCode code="Target" /></td>
    <td><code>string</code></td>
    <td>Determines what part of the Earth Observation job to tile. 'INPUT' or 'OUTPUT' are the valid options.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x">
    <td><CopyableCode code="x" /></td>
    <td><code>integer</code></td>
    <td>The x coordinate of the tile input.</td>
</tr>
<tr id="parameter-y">
    <td><CopyableCode code="y" /></td>
    <td><code>integer</code></td>
    <td>The y coordinate of the tile input.</td>
</tr>
<tr id="parameter-z">
    <td><CopyableCode code="z" /></td>
    <td><code>integer</code></td>
    <td>The z coordinate of the tile input.</td>
</tr>
<tr id="parameter-ExecutionRoleArn">
    <td><CopyableCode code="ExecutionRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that you specify.</td>
</tr>
<tr id="parameter-ImageMask">
    <td><CopyableCode code="ImageMask" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether or not to return a valid data mask.</td>
</tr>
<tr id="parameter-OutputDataType">
    <td><CopyableCode code="OutputDataType" /></td>
    <td><code>string</code></td>
    <td>The output data type of the tile operation.</td>
</tr>
<tr id="parameter-OutputFormat">
    <td><CopyableCode code="OutputFormat" /></td>
    <td><code>string</code></td>
    <td>The data format of the output tile. The formats include .npy, .png and .jpg.</td>
</tr>
<tr id="parameter-PropertyFilters">
    <td><CopyableCode code="PropertyFilters" /></td>
    <td><code>string</code></td>
    <td>Property filters for the imagery to tile.</td>
</tr>
<tr id="parameter-TimeRangeFilter">
    <td><CopyableCode code="TimeRangeFilter" /></td>
    <td><code>string</code></td>
    <td>Time range filter applied to imagery to find the images to tile.</td>
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

Gets a web mercator tile for the given Earth Observation job.

```sql
SELECT
BinaryFile
FROM aws.sagemaker_geospatial.tiles
WHERE Arn = '{{ Arn }}' -- required
AND ImageAssets = '{{ ImageAssets }}' -- required
AND Target = '{{ Target }}' -- required
AND x = '{{ x }}' -- required
AND y = '{{ y }}' -- required
AND z = '{{ z }}' -- required
AND region = '{{ region }}' -- required
AND ExecutionRoleArn = '{{ ExecutionRoleArn }}'
AND ImageMask = '{{ ImageMask }}'
AND OutputDataType = '{{ OutputDataType }}'
AND OutputFormat = '{{ OutputFormat }}'
AND PropertyFilters = '{{ PropertyFilters }}'
AND TimeRangeFilter = '{{ TimeRangeFilter }}'
;
```
</TabItem>
</Tabs>
