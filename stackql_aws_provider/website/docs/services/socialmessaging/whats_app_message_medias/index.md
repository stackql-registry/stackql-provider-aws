--- 
title: whats_app_message_medias
hide_title: false
hide_table_of_contents: false
keywords:
  - whats_app_message_medias
  - socialmessaging
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

Creates, updates, deletes, gets or lists a <code>whats_app_message_medias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="whats_app_message_medias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.socialmessaging.whats_app_message_medias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_whats_app_message_media"
    values={[
        { label: 'get_whats_app_message_media', value: 'get_whats_app_message_media' }
    ]}
>
<TabItem value="get_whats_app_message_media">

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
    <td><CopyableCode code="file_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the media file, in KB.</td>
</tr>
<tr>
    <td><CopyableCode code="mime_type" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the media.</td>
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
    <td><a href="#get_whats_app_message_media"><CopyableCode code="get_whats_app_message_media" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a media file from the WhatsApp service. On successful completion the media file is retrieved from Meta and stored in the specified Amazon S3 bucket. Use either destinationS3File or destinationS3PresignedUrl for the destination. If both are used then an InvalidParameterException is returned.</td>
</tr>
<tr>
    <td><a href="#delete_whats_app_message_media"><CopyableCode code="delete_whats_app_message_media" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-mediaId"><code>mediaId</code></a>, <a href="#parameter-originationPhoneNumberId"><code>originationPhoneNumberId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a media object from the WhatsApp service. If the object is still in an Amazon S3 bucket you should delete it from there too.</td>
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
<tr id="parameter-mediaId">
    <td><CopyableCode code="mediaId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the media file to delete. Use the mediaId returned from PostWhatsAppMessageMedia.</td>
</tr>
<tr id="parameter-originationPhoneNumberId">
    <td><CopyableCode code="originationPhoneNumberId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the originating phone number associated with the media. Phone number identifiers are formatted as phone-number-id-01234567890123456789012345678901. Use GetLinkedWhatsAppBusinessAccount to find a phone number's id.</td>
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
    defaultValue="get_whats_app_message_media"
    values={[
        { label: 'get_whats_app_message_media', value: 'get_whats_app_message_media' }
    ]}
>
<TabItem value="get_whats_app_message_media">

Get a media file from the WhatsApp service. On successful completion the media file is retrieved from Meta and stored in the specified Amazon S3 bucket. Use either destinationS3File or destinationS3PresignedUrl for the destination. If both are used then an InvalidParameterException is returned.

```sql
SELECT
file_size,
mime_type
FROM aws.socialmessaging.whats_app_message_medias
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_whats_app_message_media"
    values={[
        { label: 'delete_whats_app_message_media', value: 'delete_whats_app_message_media' }
    ]}
>
<TabItem value="delete_whats_app_message_media">

Delete a media object from the WhatsApp service. If the object is still in an Amazon S3 bucket you should delete it from there too.

```sql
DELETE FROM aws.socialmessaging.whats_app_message_medias
WHERE mediaId = '{{ mediaId }}' --required
AND originationPhoneNumberId = '{{ originationPhoneNumberId }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
