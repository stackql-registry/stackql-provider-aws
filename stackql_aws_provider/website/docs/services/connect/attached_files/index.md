--- 
title: attached_files
hide_title: false
hide_table_of_contents: false
keywords:
  - attached_files
  - connect
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

Creates, updates, deletes, gets or lists an <code>attached_files</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attached_files" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.attached_files" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_attached_file"
    values={[
        { label: 'get_attached_file', value: 'get_attached_file' }
    ]}
>
<TabItem value="get_attached_file">

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
    <td><CopyableCode code="associated_resource_arn" /></td>
    <td><code>string</code></td>
    <td>The resource to which the attached file is (being) uploaded to. The supported resources are Cases, Email, and Task.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Information on the identity that created the file.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The time of Creation of the file resource as an ISO timestamp. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2024-05-03T02:41:28.172Z.</td>
</tr>
<tr>
    <td><CopyableCode code="download_url_metadata" /></td>
    <td><code>object</code></td>
    <td>URL and expiry to be used when downloading the attached file.</td>
</tr>
<tr>
    <td><CopyableCode code="file_arn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the attached file resource (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="file_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the attached file resource.</td>
</tr>
<tr>
    <td><CopyableCode code="file_name" /></td>
    <td><code>string</code></td>
    <td>A case-sensitive name of the attached file being uploaded. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="file_size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the attached file in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="file_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the attached file. (APPROVED, REJECTED, PROCESSING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="file_use_case_type" /></td>
    <td><code>string</code></td>
    <td>The use case for the file. (CONTACT_ANALYSIS, EMAIL_MESSAGE, EMAIL_MESSAGE_PLAIN_TEXT, EMAIL_MESSAGE_REDACTED, EMAIL_MESSAGE_PLAIN_TEXT_REDACTED, ATTACHMENT, VOICE_RECORDING)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
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
    <td><a href="#get_attached_file"><CopyableCode code="get_attached_file" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-file_id"><code>file_id</code></a>, <a href="#parameter-associatedResourceArn"><code>associatedResourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-urlExpiryInSeconds"><code>urlExpiryInSeconds</code></a></td>
    <td>Provides a pre-signed URL for download of an approved attached file. This API also returns metadata about the attached file. It will only return a downloadURL if the status of the attached file is APPROVED.</td>
</tr>
<tr>
    <td><a href="#create_attached_file"><CopyableCode code="create_attached_file" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-associatedResourceArn"><code>associatedResourceArn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileUseCaseType"><code>FileUseCaseType</code></a>, <a href="#parameter-FileSourceUri"><code>FileSourceUri</code></a></td>
    <td></td>
    <td>Creates an attached file for a completed voice contact by copying a recording from a source S3 URI into Connect Customer managed storage. Use this API to attach voice recordings to contacts for downstream processing such as conversational analytics. The AssociatedResourceArn must be the ARN of a completed voice contact, FileUseCaseType must be set to VOICE_RECORDING, and FileSourceUri must be a valid S3 URI. For example, you can call CreateContact, then CreateAttachedFile, then StartContactConversationalAnalyticsJob to create a contact, attach a recording, and run post-call analytics.</td>
</tr>
<tr>
    <td><a href="#delete_attached_file"><CopyableCode code="delete_attached_file" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-file_id"><code>file_id</code></a>, <a href="#parameter-associatedResourceArn"><code>associatedResourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an attached file along with the underlying S3 Object. The attached file is permanently deleted if S3 bucket versioning is not enabled.</td>
</tr>
<tr>
    <td><a href="#start_attached_file_upload"><CopyableCode code="start_attached_file_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-associatedResourceArn"><code>associatedResourceArn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileName"><code>FileName</code></a>, <a href="#parameter-FileSizeInBytes"><code>FileSizeInBytes</code></a>, <a href="#parameter-FileUseCaseType"><code>FileUseCaseType</code></a></td>
    <td></td>
    <td>Provides a pre-signed Amazon S3 URL in response for uploading your content. You may only use this API to upload attachments to a Connect Customer Case, Connect Customer Email, or Connect Customer Task.</td>
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
<tr id="parameter-associatedResourceArn">
    <td><CopyableCode code="associatedResourceArn" /></td>
    <td><code>string</code></td>
    <td>The resource to which the attached file is (being) uploaded to. The supported resources are Cases, Email, and Task. This value must be a valid ARN.</td>
</tr>
<tr id="parameter-file_id">
    <td><CopyableCode code="file_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the attached file resource.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Connect Customer instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-urlExpiryInSeconds">
    <td><CopyableCode code="urlExpiryInSeconds" /></td>
    <td><code>integer</code></td>
    <td>Optional override for the expiry of the pre-signed S3 URL in seconds. The default value is 300.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_attached_file"
    values={[
        { label: 'get_attached_file', value: 'get_attached_file' }
    ]}
>
<TabItem value="get_attached_file">

Provides a pre-signed URL for download of an approved attached file. This API also returns metadata about the attached file. It will only return a downloadURL if the status of the attached file is APPROVED.

```sql
SELECT
associated_resource_arn,
created_by,
creation_time,
download_url_metadata,
file_arn,
file_id,
file_name,
file_size_in_bytes,
file_status,
file_use_case_type,
tags
FROM aws.connect.attached_files
WHERE instance_id = '{{ instance_id }}' -- required
AND file_id = '{{ file_id }}' -- required
AND associatedResourceArn = '{{ associatedResourceArn }}' -- required
AND region = '{{ region }}' -- required
AND urlExpiryInSeconds = '{{ urlExpiryInSeconds }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_attached_file"
    values={[
        { label: 'create_attached_file', value: 'create_attached_file' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_attached_file">

Creates an attached file for a completed voice contact by copying a recording from a source S3 URI into Connect Customer managed storage. Use this API to attach voice recordings to contacts for downstream processing such as conversational analytics. The AssociatedResourceArn must be the ARN of a completed voice contact, FileUseCaseType must be set to VOICE_RECORDING, and FileSourceUri must be a valid S3 URI. For example, you can call CreateContact, then CreateAttachedFile, then StartContactConversationalAnalyticsJob to create a contact, attach a recording, and run post-call analytics.

```sql
INSERT INTO aws.connect.attached_files (
ClientToken,
FileUseCaseType,
FileSourceUri,
Tags,
instance_id,
associatedResourceArn,
region
)
SELECT 
'{{ ClientToken }}',
'{{ FileUseCaseType }}' /* required */,
'{{ FileSourceUri }}' /* required */,
'{{ Tags }}',
'{{ instance_id }}',
'{{ associatedResourceArn }}',
'{{ region }}'
RETURNING
creation_time,
file_arn,
file_id,
file_status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: attached_files
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the attached_files resource.
    - name: associatedResourceArn
      value: "{{ associatedResourceArn }}"
      description: Required parameter for the attached_files resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the attached_files resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: FileUseCaseType
      value: "{{ FileUseCaseType }}"
      valid_values: ['CONTACT_ANALYSIS', 'EMAIL_MESSAGE', 'EMAIL_MESSAGE_PLAIN_TEXT', 'EMAIL_MESSAGE_REDACTED', 'EMAIL_MESSAGE_PLAIN_TEXT_REDACTED', 'ATTACHMENT', 'VOICE_RECORDING']
    - name: FileSourceUri
      value: "{{ FileSourceUri }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_attached_file"
    values={[
        { label: 'delete_attached_file', value: 'delete_attached_file' }
    ]}
>
<TabItem value="delete_attached_file">

Deletes an attached file along with the underlying S3 Object. The attached file is permanently deleted if S3 bucket versioning is not enabled.

```sql
DELETE FROM aws.connect.attached_files
WHERE instance_id = '{{ instance_id }}' --required
AND file_id = '{{ file_id }}' --required
AND associatedResourceArn = '{{ associatedResourceArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_attached_file_upload"
    values={[
        { label: 'start_attached_file_upload', value: 'start_attached_file_upload' }
    ]}
>
<TabItem value="start_attached_file_upload">

Provides a pre-signed Amazon S3 URL in response for uploading your content. You may only use this API to upload attachments to a Connect Customer Case, Connect Customer Email, or Connect Customer Task.

```sql
EXEC aws.connect.attached_files.start_attached_file_upload 
@instance_id='{{ instance_id }}' --required, 
@associatedResourceArn='{{ associatedResourceArn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ClientToken": "{{ ClientToken }}", 
"FileName": "{{ FileName }}", 
"FileSizeInBytes": {{ FileSizeInBytes }}, 
"UrlExpiryInSeconds": {{ UrlExpiryInSeconds }}, 
"FileUseCaseType": "{{ FileUseCaseType }}", 
"CreatedBy": "{{ CreatedBy }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
