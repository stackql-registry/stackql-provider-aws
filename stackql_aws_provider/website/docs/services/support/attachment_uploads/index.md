--- 
title: attachment_uploads
hide_title: false
hide_table_of_contents: false
keywords:
  - attachment_uploads
  - support
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

Creates, updates, deletes, gets or lists an <code>attachment_uploads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attachment_uploads" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.support.attachment_uploads" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#complete_attachment_upload"><CopyableCode code="complete_attachment_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-uploadId"><code>uploadId</code></a>, <a href="#parameter-completedUploads"><code>completedUploads</code></a></td>
    <td></td>
    <td>Completes an attachment upload that was started with GetAttachmentUploadLinks. After you upload a part of the file to its presigned Amazon S3 URL, call CompleteAttachmentUpload with the partIndex and eTag of that part. You can include one part per call, or multiple parts in a single call. After CompleteAttachmentUpload has been called for every part of the file, the service processes the upload asynchronously. The attachment-ready status might not be reflected immediately. Use DescribeAttachmentUploadStatus to poll for the uploadStatus to become attachment-ready before passing the uploadId to CreateCase or AddCommunicationToCase.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="complete_attachment_upload"
    values={[
        { label: 'complete_attachment_upload', value: 'complete_attachment_upload' }
    ]}
>
<TabItem value="complete_attachment_upload">

Completes an attachment upload that was started with GetAttachmentUploadLinks. After you upload a part of the file to its presigned Amazon S3 URL, call CompleteAttachmentUpload with the partIndex and eTag of that part. You can include one part per call, or multiple parts in a single call. After CompleteAttachmentUpload has been called for every part of the file, the service processes the upload asynchronously. The attachment-ready status might not be reflected immediately. Use DescribeAttachmentUploadStatus to poll for the uploadStatus to become attachment-ready before passing the uploadId to CreateCase or AddCommunicationToCase.

```sql
EXEC aws.support.attachment_uploads.complete_attachment_upload 
@region='{{ region }}' --required 
@@json=
'{
"uploadId": "{{ uploadId }}", 
"completedUploads": "{{ completedUploads }}", 
"dryRun": {{ dryRun }}
}'
;
```
</TabItem>
</Tabs>
