--- 
title: attachment_upload_links
hide_title: false
hide_table_of_contents: false
keywords:
  - attachment_upload_links
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

Creates, updates, deletes, gets or lists an <code>attachment_upload_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attachment_upload_links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.support.attachment_upload_links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_attachment_upload_links"
    values={[
        { label: 'get_attachment_upload_links', value: 'get_attachment_upload_links' }
    ]}
>
<TabItem value="get_attachment_upload_links">

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
    <td><CopyableCode code="next_index" /></td>
    <td><code>integer</code></td>
    <td>The next part index to request presigned URLs for. If all upload URLs for the file have been returned, this field is null. Use this value as the startIndex in uploadRange on a subsequent call to GetAttachmentUploadLinks to retrieve the next batch of upload URLs.</td>
</tr>
<tr>
    <td><CopyableCode code="part_size_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size, in bytes, of each part. Split the file into parts of this size before you upload them to the presigned URLs. For an upload with n total parts, parts 1 through n - 1 are exactly this size; the last part may be smaller. Maximum: 104,857,600 bytes (approximately 100 MB).</td>
</tr>
<tr>
    <td><CopyableCode code="total_parts" /></td>
    <td><code>integer</code></td>
    <td>The total number of parts that the file is split into. Upload one part to each presigned URL.</td>
</tr>
<tr>
    <td><CopyableCode code="upload_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the multipart upload. Use this value in subsequent calls to GetAttachmentUploadLinks, DescribeAttachmentUploadStatus, and CompleteAttachmentUpload, and to attach the upload to a case through the uploadIds parameter on CreateCase or AddCommunicationToCase.</td>
</tr>
<tr>
    <td><CopyableCode code="upload_urls" /></td>
    <td><code>array</code></td>
    <td>The list of presigned upload URLs for the requested range of parts. The list contains at most 10 URLs per call. Upload each part to its corresponding URL by using HTTP PUT before the URL expires.</td>
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
    <td><a href="#get_attachment_upload_links"><CopyableCode code="get_attachment_upload_links" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns one or more presigned upload URLs for uploading a large file attachment to a support case by using a multipart upload workflow. The maximum file size that you can upload with this workflow is 150 MB, and parts can be up to 100 MB each. Initiate a new upload by providing fileName and fileSizeBytes; the response returns a unique uploadId, the part size, the total number of parts, and a list of presigned upload URLs for the requested range of parts. A maximum of 10 upload URLs are returned per call. To retrieve more upload URLs for an upload that's already in progress, call GetAttachmentUploadLinks again with the existing uploadId and a new uploadRange. Upload each part to its presigned URL by using HTTP PUT and capture the ETag from the response. After you upload all parts, call CompleteAttachmentUpload with the uploadId and the list of part indexes and ETags to finalize the upload. You can then attach the upload to a case by passing the uploadId in the uploadIds parameter of CreateCase or AddCommunicationToCase. To monitor progress before completion, call DescribeAttachmentUploadStatus. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.</td>
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
    defaultValue="get_attachment_upload_links"
    values={[
        { label: 'get_attachment_upload_links', value: 'get_attachment_upload_links' }
    ]}
>
<TabItem value="get_attachment_upload_links">

Returns one or more presigned upload URLs for uploading a large file attachment to a support case by using a multipart upload workflow. The maximum file size that you can upload with this workflow is 150 MB, and parts can be up to 100 MB each. Initiate a new upload by providing fileName and fileSizeBytes; the response returns a unique uploadId, the part size, the total number of parts, and a list of presigned upload URLs for the requested range of parts. A maximum of 10 upload URLs are returned per call. To retrieve more upload URLs for an upload that's already in progress, call GetAttachmentUploadLinks again with the existing uploadId and a new uploadRange. Upload each part to its presigned URL by using HTTP PUT and capture the ETag from the response. After you upload all parts, call CompleteAttachmentUpload with the uploadId and the list of part indexes and ETags to finalize the upload. You can then attach the upload to a case by passing the uploadId in the uploadIds parameter of CreateCase or AddCommunicationToCase. To monitor progress before completion, call DescribeAttachmentUploadStatus. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.

```sql
SELECT
next_index,
part_size_bytes,
total_parts,
upload_id,
upload_urls
FROM aws.support.attachment_upload_links
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
