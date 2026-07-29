--- 
title: conversations
hide_title: false
hide_table_of_contents: false
keywords:
  - conversations
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

Creates, updates, deletes, gets or lists a <code>conversations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="conversations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.conversations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_conversations"
    values={[
        { label: 'list_conversations', value: 'list_conversations' }
    ]}
>
<TabItem value="list_conversations">

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
    <td><CopyableCode code="conversation_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business conversation. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the conversation.</td>
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
    <td><a href="#list_conversations"><CopyableCode code="list_conversations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists one or more Amazon Q Business conversations.</td>
</tr>
<tr>
    <td><a href="#put_feedback"><CopyableCode code="put_feedback" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-conversation_id"><code>conversation_id</code></a>, <a href="#parameter-message_id"><code>message_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-userId"><code>userId</code></a></td>
    <td>Enables your end user to provide feedback on their Amazon Q Business generated chat responses.</td>
</tr>
<tr>
    <td><a href="#delete_conversation"><CopyableCode code="delete_conversation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-conversation_id"><code>conversation_id</code></a>, <a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-userId"><code>userId</code></a></td>
    <td>Deletes an Amazon Q Business web experience conversation.</td>
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
    <td>The identifier of the Amazon Q Business application associated with the conversation.</td>
</tr>
<tr id="parameter-conversation_id">
    <td><CopyableCode code="conversation_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business web experience conversation being deleted.</td>
</tr>
<tr id="parameter-message_id">
    <td><CopyableCode code="message_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the chat message that the feedback was given for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of Amazon Q Business conversations to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business conversations.</td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who is deleting the conversation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_conversations"
    values={[
        { label: 'list_conversations', value: 'list_conversations' }
    ]}
>
<TabItem value="list_conversations">

Lists one or more Amazon Q Business conversations.

```sql
SELECT
conversation_id,
start_time,
title_
FROM aws.qbusiness.conversations
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND userId = '{{ userId }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_feedback"
    values={[
        { label: 'put_feedback', value: 'put_feedback' }
    ]}
>
<TabItem value="put_feedback">

Enables your end user to provide feedback on their Amazon Q Business generated chat responses.

```sql
REPLACE aws.qbusiness.conversations
SET 
messageCopiedAt = '{{ messageCopiedAt }}',
messageUsefulness = '{{ messageUsefulness }}'
WHERE 
application_id = '{{ application_id }}' --required
AND conversation_id = '{{ conversation_id }}' --required
AND message_id = '{{ message_id }}' --required
AND region = '{{ region }}' --required
AND userId = '{{ userId}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_conversation"
    values={[
        { label: 'delete_conversation', value: 'delete_conversation' }
    ]}
>
<TabItem value="delete_conversation">

Deletes an Amazon Q Business web experience conversation.

```sql
DELETE FROM aws.qbusiness.conversations
WHERE conversation_id = '{{ conversation_id }}' --required
AND application_id = '{{ application_id }}' --required
AND region = '{{ region }}' --required
AND userId = '{{ userId }}'
;
```
</TabItem>
</Tabs>
