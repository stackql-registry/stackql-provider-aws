--- 
title: messages
hide_title: false
hide_table_of_contents: false
keywords:
  - messages
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

Creates, updates, deletes, gets or lists a <code>messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.messages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_messages"
    values={[
        { label: 'list_messages', value: 'list_messages' }
    ]}
>
<TabItem value="list_messages">

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
    <td><CopyableCode code="actionExecution" /></td>
    <td><code>object</code></td>
    <td>Performs an Amazon Q Business plugin action during a non-streaming chat conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="actionReview" /></td>
    <td><code>object</code></td>
    <td>An output event that Amazon Q Business returns to an user who wants to perform a plugin action during a non-streaming chat conversation. It contains information about the selected action with a list of possible user input fields, some pre-populated by Amazon Q Business.</td>
</tr>
<tr>
    <td><CopyableCode code="attachments" /></td>
    <td><code>array</code></td>
    <td>A file directly uploaded into an Amazon Q Business web experience chat.</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td>The content of the Amazon Q Business web experience message. (pattern: &lt;code&gt;\P&#123;C&#125;*$&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="messageId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business web experience message.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceAttribution" /></td>
    <td><code>array</code></td>
    <td>The source documents used to generate Amazon Q Business web experience message.</td>
</tr>
<tr>
    <td><CopyableCode code="time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the first Amazon Q Business web experience message.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Q Business message, whether HUMAN or AI generated. (USER, SYSTEM)</td>
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
    <td><a href="#list_messages"><CopyableCode code="list_messages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-conversation_id"><code>conversation_id</code></a>, <a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Gets a list of messages associated with an Amazon Q Business web experience.</td>
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
    <td>The identifier for the Amazon Q Business application.</td>
</tr>
<tr id="parameter-conversation_id">
    <td><CopyableCode code="conversation_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business web experience conversation.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of messages to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the number of messages returned exceeds maxResults, Amazon Q Business returns a next token as a pagination token to retrieve the next set of messages.</td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user involved in the Amazon Q Business web experience conversation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_messages"
    values={[
        { label: 'list_messages', value: 'list_messages' }
    ]}
>
<TabItem value="list_messages">

Gets a list of messages associated with an Amazon Q Business web experience.

```sql
SELECT
actionExecution,
actionReview,
attachments,
body,
messageId,
sourceAttribution,
time,
type_
FROM aws.qbusiness.messages
WHERE conversation_id = '{{ conversation_id }}' -- required
AND application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND userId = '{{ userId }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
