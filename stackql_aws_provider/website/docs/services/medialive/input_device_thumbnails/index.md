--- 
title: input_device_thumbnails
hide_title: false
hide_table_of_contents: false
keywords:
  - input_device_thumbnails
  - medialive
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

Creates, updates, deletes, gets or lists an <code>input_device_thumbnails</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="input_device_thumbnails" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.input_device_thumbnails" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_input_device_thumbnail"
    values={[
        { label: 'describe_input_device_thumbnail', value: 'describe_input_device_thumbnail' }
    ]}
>
<TabItem value="describe_input_device_thumbnail">

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
    <td><CopyableCode code="Body" /></td>
    <td><code>string (byte)</code></td>
    <td>The binary data for the thumbnail that the Link device has most recently sent to MediaLive.</td>
</tr>
<tr>
    <td><CopyableCode code="ContentLength" /></td>
    <td><code>integer (int64)</code></td>
    <td>The length of the content.</td>
</tr>
<tr>
    <td><CopyableCode code="ContentType" /></td>
    <td><code>string</code></td>
    <td>Specifies the media type of the thumbnail. (image/jpeg)</td>
</tr>
<tr>
    <td><CopyableCode code="ETag" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="LastModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the thumbnail was last updated at the device.</td>
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
    <td><a href="#describe_input_device_thumbnail"><CopyableCode code="describe_input_device_thumbnail" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-input_device_id"><code>input_device_id</code></a>, <a href="#parameter-accept"><code>accept</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the latest thumbnail data for the input device.</td>
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
<tr id="parameter-accept">
    <td><CopyableCode code="accept" /></td>
    <td><code>string</code></td>
    <td>The HTTP Accept header. Indicates the requested type for the thumbnail.</td>
</tr>
<tr id="parameter-input_device_id">
    <td><CopyableCode code="input_device_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of this input device. For example, hd-123456789abcdef.</td>
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
    defaultValue="describe_input_device_thumbnail"
    values={[
        { label: 'describe_input_device_thumbnail', value: 'describe_input_device_thumbnail' }
    ]}
>
<TabItem value="describe_input_device_thumbnail">

Get the latest thumbnail data for the input device.

```sql
SELECT
Body,
ContentLength,
ContentType,
ETag,
LastModified
FROM aws.medialive.input_device_thumbnails
WHERE input_device_id = '{{ input_device_id }}' -- required
AND accept = '{{ accept }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
