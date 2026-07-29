--- 
title: attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - attachments
  - connectparticipant
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

Creates, updates, deletes, gets or lists an <code>attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectparticipant.attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_attachment"
    values={[
        { label: 'get_attachment', value: 'get_attachment' }
    ]}
>
<TabItem value="get_attachment">

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
    <td><CopyableCode code="attachment_size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the attachment in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>This is the pre-signed URL that can be used for uploading the file to Amazon S3 when used in response to StartAttachmentUpload.</td>
</tr>
<tr>
    <td><CopyableCode code="url_expiry" /></td>
    <td><code>string</code></td>
    <td>The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</td>
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
    <td><a href="#get_attachment"><CopyableCode code="get_attachment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-X-Amz-Bearer"><code>X-Amz-Bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a pre-signed URL for download of a completed attachment. This is an asynchronous API for use with active contacts. For security recommendations, see Amazon Connect Chat security best practices. The participant role CUSTOM_BOT is not permitted to access attachments customers may upload. An AccessDeniedException can indicate that the participant may be a CUSTOM_BOT, and it doesn't have access to attachments. ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.</td>
</tr>
<tr>
    <td><a href="#complete_attachment_upload"><CopyableCode code="complete_attachment_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-X-Amz-Bearer"><code>X-Amz-Bearer</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AttachmentIds"><code>AttachmentIds</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Allows you to confirm that the attachment has been uploaded using the pre-signed URL provided in StartAttachmentUpload API. A conflict exception is thrown when an attachment with that identifier is already being uploaded. For security recommendations, see Amazon Connect Chat security best practices. ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.</td>
</tr>
<tr>
    <td><a href="#start_attachment_upload"><CopyableCode code="start_attachment_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-X-Amz-Bearer"><code>X-Amz-Bearer</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContentType"><code>ContentType</code></a>, <a href="#parameter-AttachmentSizeInBytes"><code>AttachmentSizeInBytes</code></a>, <a href="#parameter-AttachmentName"><code>AttachmentName</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Provides a pre-signed Amazon S3 URL in response for uploading the file directly to S3. For security recommendations, see Amazon Connect Chat security best practices. ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.</td>
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
<tr id="parameter-X-Amz-Bearer">
    <td><CopyableCode code="X-Amz-Bearer" /></td>
    <td><code>string</code></td>
    <td>The authentication token associated with the participant's connection.</td>
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
    defaultValue="get_attachment"
    values={[
        { label: 'get_attachment', value: 'get_attachment' }
    ]}
>
<TabItem value="get_attachment">

Provides a pre-signed URL for download of a completed attachment. This is an asynchronous API for use with active contacts. For security recommendations, see Amazon Connect Chat security best practices. The participant role CUSTOM_BOT is not permitted to access attachments customers may upload. An AccessDeniedException can indicate that the participant may be a CUSTOM_BOT, and it doesn't have access to attachments. ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.

```sql
SELECT
attachment_size_in_bytes,
url,
url_expiry
FROM aws.connectparticipant.attachments
WHERE `X-Amz-Bearer` = '{{ X-Amz-Bearer }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="complete_attachment_upload"
    values={[
        { label: 'complete_attachment_upload', value: 'complete_attachment_upload' },
        { label: 'start_attachment_upload', value: 'start_attachment_upload' }
    ]}
>
<TabItem value="complete_attachment_upload">

Allows you to confirm that the attachment has been uploaded using the pre-signed URL provided in StartAttachmentUpload API. A conflict exception is thrown when an attachment with that identifier is already being uploaded. For security recommendations, see Amazon Connect Chat security best practices. ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.

```sql
EXEC aws.connectparticipant.attachments.complete_attachment_upload 
@X-Amz-Bearer='{{ X-Amz-Bearer }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"AttachmentIds": "{{ AttachmentIds }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
<TabItem value="start_attachment_upload">

Provides a pre-signed Amazon S3 URL in response for uploading the file directly to S3. For security recommendations, see Amazon Connect Chat security best practices. ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.

```sql
EXEC aws.connectparticipant.attachments.start_attachment_upload 
@X-Amz-Bearer='{{ X-Amz-Bearer }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ContentType": "{{ ContentType }}", 
"AttachmentSizeInBytes": {{ AttachmentSizeInBytes }}, 
"AttachmentName": "{{ AttachmentName }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
</Tabs>
