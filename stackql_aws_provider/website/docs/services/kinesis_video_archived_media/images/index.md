--- 
title: images
hide_title: false
hide_table_of_contents: false
keywords:
  - images
  - kinesis_video_archived_media
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

Creates, updates, deletes, gets or lists an <code>images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis_video_archived_media.images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_images"
    values={[
        { label: 'get_images', value: 'get_images' }
    ]}
>
<TabItem value="get_images">

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
    <td><CopyableCode code="Error" /></td>
    <td><code>string</code></td>
    <td>The error message shown when the image for the provided timestamp was not extracted due to a non-tryable error. An error will be returned if: There is no media that exists for the specified Timestamp. The media for the specified time does not allow an image to be extracted. In this case the media is audio only, or the incorrect media has been ingested. (NO_MEDIA, MEDIA_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="ImageContent" /></td>
    <td><code>string</code></td>
    <td>An attribute of the Image object that is Base64 encoded.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeStamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>An attribute of the Image object that is used to extract an image from the video stream. This field is used to manage gaps on images or to better understand the pagination window.</td>
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
    <td><a href="#get_images"><CopyableCode code="get_images" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of images corresponding to each timestamp for a given time range, sampling interval, and image format configuration.</td>
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
    defaultValue="get_images"
    values={[
        { label: 'get_images', value: 'get_images' }
    ]}
>
<TabItem value="get_images">

Retrieves a list of images corresponding to each timestamp for a given time range, sampling interval, and image format configuration.

```sql
SELECT
Error,
ImageContent,
TimeStamp
FROM aws.kinesis_video_archived_media.images
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
