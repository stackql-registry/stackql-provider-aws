--- 
title: image_generation_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - image_generation_configurations
  - kinesisvideo
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

Creates, updates, deletes, gets or lists an <code>image_generation_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_generation_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisvideo.image_generation_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_image_generation_configuration"
    values={[
        { label: 'describe_image_generation_configuration', value: 'describe_image_generation_configuration' }
    ]}
>
<TabItem value="describe_image_generation_configuration">

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
    <td><CopyableCode code="DestinationConfig" /></td>
    <td><code>object</code></td>
    <td>The structure that contains the information required to deliver images to a customer.</td>
</tr>
<tr>
    <td><CopyableCode code="Format" /></td>
    <td><code>string</code></td>
    <td>The accepted image format. (JPEG, PNG)</td>
</tr>
<tr>
    <td><CopyableCode code="FormatConfig" /></td>
    <td><code>object</code></td>
    <td>The list of a key-value pair structure that contains extra parameters that can be applied when the image is generated. The FormatConfig key is the JPEGQuality, which indicates the JPEG quality key to be used to generate the image. The FormatConfig value accepts ints from 1 to 100. If the value is 1, the image will be generated with less quality and the best compression. If the value is 100, the image will be generated with the best quality and less compression. If no value is provided, the default value of the JPEGQuality key will be set to 80.</td>
</tr>
<tr>
    <td><CopyableCode code="HeightPixels" /></td>
    <td><code>integer</code></td>
    <td>The height of the output image that is used in conjunction with the WidthPixels parameter. When both HeightPixels and WidthPixels parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the HeightPixels parameter is provided, its original aspect ratio will be used to calculate the WidthPixels ratio. If neither parameter is provided, the original image size will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="ImageSelectorType" /></td>
    <td><code>string</code></td>
    <td>The origin of the Server or Producer timestamps to use to generate the images. (SERVER_TIMESTAMP, PRODUCER_TIMESTAMP)</td>
</tr>
<tr>
    <td><CopyableCode code="SamplingInterval" /></td>
    <td><code>integer</code></td>
    <td>The time interval in milliseconds (ms) at which the images need to be generated from the stream. The minimum value that can be provided is 200 ms. If the timestamp range is less than the sampling interval, the Image from the StartTimestamp will be returned if available.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the ContinuousImageGenerationConfigurations API is enabled or disabled. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="WidthPixels" /></td>
    <td><code>integer</code></td>
    <td>The width of the output image that is used in conjunction with the HeightPixels parameter. When both WidthPixels and HeightPixels parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the WidthPixels parameter is provided, its original aspect ratio will be used to calculate the HeightPixels ratio. If neither parameter is provided, the original image size will be returned.</td>
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
    <td><a href="#describe_image_generation_configuration"><CopyableCode code="describe_image_generation_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the ImageGenerationConfiguration for a given Kinesis video stream.</td>
</tr>
<tr>
    <td><a href="#update_image_generation_configuration"><CopyableCode code="update_image_generation_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the StreamInfo and ImageProcessingConfiguration fields.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_image_generation_configuration"
    values={[
        { label: 'describe_image_generation_configuration', value: 'describe_image_generation_configuration' }
    ]}
>
<TabItem value="describe_image_generation_configuration">

Gets the ImageGenerationConfiguration for a given Kinesis video stream.

```sql
SELECT
DestinationConfig,
Format,
FormatConfig,
HeightPixels,
ImageSelectorType,
SamplingInterval,
Status,
WidthPixels
FROM aws.kinesisvideo.image_generation_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_image_generation_configuration"
    values={[
        { label: 'update_image_generation_configuration', value: 'update_image_generation_configuration' }
    ]}
>
<TabItem value="update_image_generation_configuration">

Updates the StreamInfo and ImageProcessingConfiguration fields.

```sql
UPDATE aws.kinesisvideo.image_generation_configurations
SET 
StreamName = '{{ StreamName }}',
StreamARN = '{{ StreamARN }}',
ImageGenerationConfiguration = '{{ ImageGenerationConfiguration }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
