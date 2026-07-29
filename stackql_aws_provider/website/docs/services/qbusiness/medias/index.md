--- 
title: medias
hide_title: false
hide_table_of_contents: false
keywords:
  - medias
  - qbusiness
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

Creates, updates, deletes, gets or lists a <code>medias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="medias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.medias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_media"
    values={[
        { label: 'get_media', value: 'get_media' }
    ]}
>
<TabItem value="get_media">

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
    <td><CopyableCode code="media_bytes" /></td>
    <td><code>string (byte)</code></td>
    <td>The base64-encoded bytes of the media object.</td>
</tr>
<tr>
    <td><CopyableCode code="media_mime_type" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the media object (image/png).</td>
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
    <td><a href="#get_media"><CopyableCode code="get_media" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-conversation_id"><code>conversation_id</code></a>, <a href="#parameter-message_id"><code>message_id</code></a>, <a href="#parameter-media_id"><code>media_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the image bytes corresponding to a media object. If you have implemented your own application with the Chat and ChatSync APIs, and have enabled content extraction from visual data in Amazon Q Business, you use the GetMedia API operation to download the images so you can show them in your UI with responses. For more information, see Extracting semantic meaning from images and visuals.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business which contains the media object.</td>
</tr>
<tr id="parameter-conversation_id">
    <td><CopyableCode code="conversation_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business conversation.</td>
</tr>
<tr id="parameter-media_id">
    <td><CopyableCode code="media_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the media object. You can find this in the sourceAttributions returned by the Chat, ChatSync, and ListMessages API responses.</td>
</tr>
<tr id="parameter-message_id">
    <td><CopyableCode code="message_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business message.</td>
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
    defaultValue="get_media"
    values={[
        { label: 'get_media', value: 'get_media' }
    ]}
>
<TabItem value="get_media">

Returns the image bytes corresponding to a media object. If you have implemented your own application with the Chat and ChatSync APIs, and have enabled content extraction from visual data in Amazon Q Business, you use the GetMedia API operation to download the images so you can show them in your UI with responses. For more information, see Extracting semantic meaning from images and visuals.

```sql
SELECT
media_bytes,
media_mime_type
FROM aws.qbusiness.medias
WHERE application_id = '{{ application_id }}' -- required
AND conversation_id = '{{ conversation_id }}' -- required
AND message_id = '{{ message_id }}' -- required
AND media_id = '{{ media_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
