--- 
title: case_attachment_download_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - case_attachment_download_urls
  - security_ir
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

Creates, updates, deletes, gets or lists a <code>case_attachment_download_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_attachment_download_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.security_ir.case_attachment_download_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_case_attachment_download_url"
    values={[
        { label: 'get_case_attachment_download_url', value: 'get_case_attachment_download_url' }
    ]}
>
<TabItem value="get_case_attachment_download_url">

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
    <td><CopyableCode code="attachmentPresignedUrl" /></td>
    <td><code>string</code></td>
    <td>Response element providing the Amazon S3 presigned URL to download an attachment. (pattern: &lt;code&gt;https?:​//(?:www.)?&#91;a-zA-Z0-9@:._+~#=-&#93;&#123;2,256&#125;\.&#91;a-z&#93;&#123;2,6&#125;\b(?:&#91;-a-zA-Z0-9@:%_+.~#?&/=&#93;&#123;0,2048&#125;)&lt;/code&gt;)</td>
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
    <td><a href="#get_case_attachment_download_url"><CopyableCode code="get_case_attachment_download_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-attachment_id"><code>attachment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a Pre-Signed URL for uploading attachments into a case.</td>
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
<tr id="parameter-attachment_id">
    <td><CopyableCode code="attachment_id" /></td>
    <td><code>string</code></td>
    <td>Required element for GetCaseAttachmentDownloadUrl to identify the attachment ID for downloading an attachment.</td>
</tr>
<tr id="parameter-case_id">
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td>Required element for GetCaseAttachmentDownloadUrl to identify the case ID for downloading an attachment from.</td>
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
    defaultValue="get_case_attachment_download_url"
    values={[
        { label: 'get_case_attachment_download_url', value: 'get_case_attachment_download_url' }
    ]}
>
<TabItem value="get_case_attachment_download_url">

Returns a Pre-Signed URL for uploading attachments into a case.

```sql
SELECT
attachmentPresignedUrl
FROM aws.security_ir.case_attachment_download_urls
WHERE case_id = '{{ case_id }}' -- required
AND attachment_id = '{{ attachment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
