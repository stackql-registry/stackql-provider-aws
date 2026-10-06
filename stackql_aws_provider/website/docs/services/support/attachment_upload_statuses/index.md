--- 
title: attachment_upload_statuses
hide_title: false
hide_table_of_contents: false
keywords:
  - attachment_upload_statuses
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

Creates, updates, deletes, gets or lists an <code>attachment_upload_statuses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attachment_upload_statuses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.support.attachment_upload_statuses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_attachment_upload_status"
    values={[
        { label: 'describe_attachment_upload_status', value: 'describe_attachment_upload_status' }
    ]}
>
<TabItem value="describe_attachment_upload_status">

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
    <td><CopyableCode code="file_name" /></td>
    <td><code>string</code></td>
    <td>The name of the file being uploaded, including the file extension.</td>
</tr>
<tr>
    <td><CopyableCode code="upload_progress" /></td>
    <td><code>object</code></td>
    <td>The progress of the multipart upload, including the total number of parts and the number of parts that have been successfully uploaded.</td>
</tr>
<tr>
    <td><CopyableCode code="upload_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the multipart upload. Valid values: attachment-ready, attachment-not-ready, and failed. (attachment-ready, attachment-not-ready, failed)</td>
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
    <td><a href="#describe_attachment_upload_status"><CopyableCode code="describe_attachment_upload_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current status, file name, and progress of a multipart attachment upload that was started with GetAttachmentUploadLinks. Use this operation to track where an upload is in the workflow. While parts are still being uploaded and reported through CompleteAttachmentUpload, the uploadStatus is attachment-not-ready and uploadProgress reports the total number of parts and how many have been completed so far. After every part has been reported and the service finishes processing the upload asynchronously, the uploadStatus becomes attachment-ready and the uploadId can be attached to a case through CreateCase or AddCommunicationToCase. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.</td>
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
    defaultValue="describe_attachment_upload_status"
    values={[
        { label: 'describe_attachment_upload_status', value: 'describe_attachment_upload_status' }
    ]}
>
<TabItem value="describe_attachment_upload_status">

Returns the current status, file name, and progress of a multipart attachment upload that was started with GetAttachmentUploadLinks. Use this operation to track where an upload is in the workflow. While parts are still being uploaded and reported through CompleteAttachmentUpload, the uploadStatus is attachment-not-ready and uploadProgress reports the total number of parts and how many have been completed so far. After every part has been reported and the service finishes processing the upload asynchronously, the uploadStatus becomes attachment-ready and the uploadId can be attached to a case through CreateCase or AddCommunicationToCase. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.

```sql
SELECT
file_name,
upload_progress,
upload_status
FROM aws.support.attachment_upload_statuses
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
