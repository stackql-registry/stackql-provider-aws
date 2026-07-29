--- 
title: registration_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - registration_attachments
  - pinpoint_sms_voice_v2
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

Creates, updates, deletes, gets or lists a <code>registration_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registration_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.registration_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_registration_attachments"
    values={[
        { label: 'describe_registration_attachments', value: 'describe_registration_attachments' }
    ]}
>
<TabItem value="describe_registration_attachments">

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
    <td><CopyableCode code="attachment_status" /></td>
    <td><code>string</code></td>
    <td>The status of the registration attachment. UPLOAD_IN_PROGRESS The attachment is being uploaded. UPLOAD_COMPLETE The attachment has been uploaded. UPLOAD_FAILED The attachment failed to uploaded. DELETED The attachment has been deleted.. (UPLOAD_IN_PROGRESS, UPLOAD_COMPLETE, UPLOAD_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="attachment_upload_error_reason" /></td>
    <td><code>string</code></td>
    <td>A description of why the upload didn't successfully complete. (INTERNAL_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="attachment_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the document that's associated with the registration attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the registration attachment was created, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="registration_attachment_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the registration attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="registration_attachment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the registration attachment.</td>
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
    <td><a href="#describe_registration_attachments"><CopyableCode code="describe_registration_attachments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified registration attachments or all registration attachments associated with your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_registration_attachment"><CopyableCode code="create_registration_attachment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a new registration attachment to use for uploading a file or a URL to a file. The maximum file size is 500KB and valid file extensions are PDF, JPEG and PNG. For example, many sender ID registrations require a signed “letter of authorization” (LOA) to be submitted. Use either AttachmentUrl or AttachmentBody to upload your attachment. If both are specified then an exception is returned.</td>
</tr>
<tr>
    <td><a href="#delete_registration_attachment"><CopyableCode code="delete_registration_attachment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently delete the specified registration attachment.</td>
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
    defaultValue="describe_registration_attachments"
    values={[
        { label: 'describe_registration_attachments', value: 'describe_registration_attachments' }
    ]}
>
<TabItem value="describe_registration_attachments">

Retrieves the specified registration attachments or all registration attachments associated with your Amazon Web Services account.

```sql
SELECT
attachment_status,
attachment_upload_error_reason,
attachment_url,
created_timestamp,
registration_attachment_arn,
registration_attachment_id
FROM aws.pinpoint_sms_voice_v2.registration_attachments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_registration_attachment"
    values={[
        { label: 'create_registration_attachment', value: 'create_registration_attachment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_registration_attachment">

Create a new registration attachment to use for uploading a file or a URL to a file. The maximum file size is 500KB and valid file extensions are PDF, JPEG and PNG. For example, many sender ID registrations require a signed “letter of authorization” (LOA) to be submitted. Use either AttachmentUrl or AttachmentBody to upload your attachment. If both are specified then an exception is returned.

```sql
INSERT INTO aws.pinpoint_sms_voice_v2.registration_attachments (
AttachmentBody,
AttachmentUrl,
Tags,
ClientToken,
region
)
SELECT 
'{{ AttachmentBody }}',
'{{ AttachmentUrl }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
attachment_status,
created_timestamp,
registration_attachment_arn,
registration_attachment_id,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: registration_attachments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the registration_attachments resource.
    - name: AttachmentBody
      value: "{{ AttachmentBody }}"
      description: |
        The registration file to upload. The maximum file size is 500KB and valid file extensions are PDF, JPEG and PNG.
    - name: AttachmentUrl
      value: "{{ AttachmentUrl }}"
      description: |
        Registration files have to be stored in an Amazon S3 bucket. The URI to use when sending is in the format s3://BucketName/FileName.
    - name: Tags
      description: |
        An array of tags (key and value pairs) to associate with the registration attachment.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_registration_attachment"
    values={[
        { label: 'delete_registration_attachment', value: 'delete_registration_attachment' }
    ]}
>
<TabItem value="delete_registration_attachment">

Permanently delete the specified registration attachment.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.registration_attachments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
