--- 
title: attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - attachments
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

Creates, updates, deletes, gets or lists an <code>attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_attachments"
    values={[
        { label: 'list_attachments', value: 'list_attachments' }
    ]}
>
<TabItem value="list_attachments">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filename of the Amazon Q Business attachment. (pattern: &lt;code&gt;\P&#123;C&#125;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attachment_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business attachment. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="conversation_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business conversation the attachment is associated with. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="copy_from" /></td>
    <td><code>object</code></td>
    <td>A CopyFromSource containing a reference to the original source of the Amazon Q Business attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the Amazon Q Business attachment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Provides information about a Amazon Q Business request error.</td>
</tr>
<tr>
    <td><CopyableCode code="file_size" /></td>
    <td><code>integer</code></td>
    <td>Size in bytes of the Amazon Q Business attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="file_type" /></td>
    <td><code>string</code></td>
    <td>Filetype of the Amazon Q Business attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="md_5chksum" /></td>
    <td><code>string</code></td>
    <td>MD5 checksum of the Amazon Q Business attachment contents.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>AttachmentStatus of the Amazon Q Business attachment. (FAILED, SUCCESS)</td>
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
    <td><a href="#list_attachments"><CopyableCode code="list_attachments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-conversationId"><code>conversationId</code></a>, <a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Gets a list of attachments associated with an Amazon Q Business web experience or a list of attachements associated with a specific Amazon Q Business conversation.</td>
</tr>
<tr>
    <td><a href="#delete_attachment"><CopyableCode code="delete_attachment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-conversation_id"><code>conversation_id</code></a>, <a href="#parameter-attachment_id"><code>attachment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-userId"><code>userId</code></a></td>
    <td>Deletes an attachment associated with a specific Amazon Q Business conversation.</td>
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
    <td>The unique identifier for the Amazon Q Business application environment.</td>
</tr>
<tr id="parameter-attachment_id">
    <td><CopyableCode code="attachment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the attachment.</td>
</tr>
<tr id="parameter-conversation_id">
    <td><CopyableCode code="conversation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the conversation.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-conversationId">
    <td><CopyableCode code="conversationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q Business web experience conversation.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of attachements to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the number of attachments returned exceeds maxResults, Amazon Q Business returns a next token as a pagination token to retrieve the next set of attachments.</td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the user involved in the conversation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_attachments"
    values={[
        { label: 'list_attachments', value: 'list_attachments' }
    ]}
>
<TabItem value="list_attachments">

Gets a list of attachments associated with an Amazon Q Business web experience or a list of attachements associated with a specific Amazon Q Business conversation.

```sql
SELECT
name,
attachment_id,
conversation_id,
copy_from,
created_at,
error,
file_size,
file_type,
md_5chksum,
status
FROM aws.qbusiness.attachments
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND conversationId = '{{ conversationId }}'
AND userId = '{{ userId }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_attachment"
    values={[
        { label: 'delete_attachment', value: 'delete_attachment' }
    ]}
>
<TabItem value="delete_attachment">

Deletes an attachment associated with a specific Amazon Q Business conversation.

```sql
DELETE FROM aws.qbusiness.attachments
WHERE application_id = '{{ application_id }}' --required
AND conversation_id = '{{ conversation_id }}' --required
AND attachment_id = '{{ attachment_id }}' --required
AND region = '{{ region }}' --required
AND userId = '{{ userId }}'
;
```
</TabItem>
</Tabs>
