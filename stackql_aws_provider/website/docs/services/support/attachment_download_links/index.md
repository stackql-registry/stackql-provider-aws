--- 
title: attachment_download_links
hide_title: false
hide_table_of_contents: false
keywords:
  - attachment_download_links
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

Creates, updates, deletes, gets or lists an <code>attachment_download_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attachment_download_links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.support.attachment_download_links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_attachment_download_link"
    values={[
        { label: 'get_attachment_download_link', value: 'get_attachment_download_link' }
    ]}
>
<TabItem value="get_attachment_download_link">

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
    <td><CopyableCode code="download_url" /></td>
    <td><code>object</code></td>
    <td>The presigned download URL and the date and time the URL expires.</td>
</tr>
<tr>
    <td><CopyableCode code="file_name" /></td>
    <td><code>string</code></td>
    <td>The name of the attachment file, including the file extension.</td>
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
    <td><a href="#get_attachment_download_link"><CopyableCode code="get_attachment_download_link" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a presigned download URL for an attachment that is associated with a case communication. The download link works for an attachment of any size, including attachments added through AddAttachmentsToSet and attachments uploaded through GetAttachmentUploadLinks. The download URL is time-limited and expires at the date and time indicated in the downloadUrl response field. Download the attachment from the URL before it expires. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.</td>
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
    defaultValue="get_attachment_download_link"
    values={[
        { label: 'get_attachment_download_link', value: 'get_attachment_download_link' }
    ]}
>
<TabItem value="get_attachment_download_link">

Returns a presigned download URL for an attachment that is associated with a case communication. The download link works for an attachment of any size, including attachments added through AddAttachmentsToSet and attachments uploaded through GetAttachmentUploadLinks. The download URL is time-limited and expires at the date and time indicated in the downloadUrl response field. Download the attachment from the URL before it expires. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.

```sql
SELECT
download_url,
file_name
FROM aws.support.attachment_download_links
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
