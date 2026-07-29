--- 
title: image_frames
hide_title: false
hide_table_of_contents: false
keywords:
  - image_frames
  - medical_imaging
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

Creates, updates, deletes, gets or lists an <code>image_frames</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_frames" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medical_imaging.image_frames" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_image_frame"
    values={[
        { label: 'get_image_frame', value: 'get_image_frame' }
    ]}
>
<TabItem value="get_image_frame">

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
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>The format in which the image frame information is returned to the customer. Default is application/octet-stream. If the stored transfer syntax is 1.2.840.10008.1.2.1, the returned contentType is application/octet-stream. If the stored transfer syntax is 1.2.840.10008.1.2.4.50, the returned contentType is image/jpeg. If the stored transfer syntax is 1.2.840.10008.1.2.4.91, the returned contentType is image/j2c. If the stored transfer syntax is MPEG2, 1.2.840.10008.1.2.4.100, 1.2.840.10008.1.2.4.100.1, 1.2.840.10008.1.2.4.101, or 1.2.840.10008.1.2.4.101.1, the returned contentType is video/mpeg. If the stored transfer syntax is MPEG-4 AVC/H.264, UID 1.2.840.10008.1.2.4.102, 1.2.840.10008.1.2.4.102.1, 1.2.840.10008.1.2.4.103, 1.2.840.10008.1.2.4.103.1, 1.2.840.10008.1.2.4.104, 1.2.840.10008.1.2.4.104.1, 1.2.840.10008.1.2.4.105, 1.2.840.10008.1.2.4.105.1, 1.2.840.10008.1.2.4.106, or 1.2.840.10008.1.2.4.106.1, the returned contentType is video/mp4. If the stored transfer syntax is HEVC/H.265, UID 1.2.840.10008.1.2.4.107 or 1.2.840.10008.1.2.4.108, the returned contentType is video/H256. If the stored transfer syntax is 1.2.840.10008.1.2.4.202 or if the stored transfer syntax is missing, the returned contentType is image/jph. If the stored transfer syntax is 1.2.840.10008.1.2.4.203, the returned contentType is image/jphc. If the stored transfer syntax is 1.2.840.10008.1.2.4.112 the returned contentType is image/jxl.</td>
</tr>
<tr>
    <td><CopyableCode code="image_frame_blob" /></td>
    <td><code>string (byte)</code></td>
    <td>The blob containing the aggregated image frame information.</td>
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
    <td><a href="#get_image_frame"><CopyableCode code="get_image_frame" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a>, <a href="#parameter-image_set_id"><code>image_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get an image frame (pixel data) for an image set.</td>
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
<tr id="parameter-datastore_id">
    <td><CopyableCode code="datastore_id" /></td>
    <td><code>string</code></td>
    <td>The data store identifier.</td>
</tr>
<tr id="parameter-image_set_id">
    <td><CopyableCode code="image_set_id" /></td>
    <td><code>string</code></td>
    <td>The image set identifier.</td>
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
    defaultValue="get_image_frame"
    values={[
        { label: 'get_image_frame', value: 'get_image_frame' }
    ]}
>
<TabItem value="get_image_frame">

Get an image frame (pixel data) for an image set.

```sql
SELECT
content_type,
image_frame_blob
FROM aws.medical_imaging.image_frames
WHERE datastore_id = '{{ datastore_id }}' -- required
AND image_set_id = '{{ image_set_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
