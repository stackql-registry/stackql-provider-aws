--- 
title: next_messages
hide_title: false
hide_table_of_contents: false
keywords:
  - next_messages
  - qconnect
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

Creates, updates, deletes, gets or lists a <code>next_messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="next_messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.next_messages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_next_message"
    values={[
        { label: 'get_next_message', value: 'get_next_message' }
    ]}
>
<TabItem value="get_next_message">

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
    <td><CopyableCode code="chunked_response_terminated" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the chunked response has been terminated.</td>
</tr>
<tr>
    <td><CopyableCode code="conversation_session_data" /></td>
    <td><code>array</code></td>
    <td>The conversation data stored on an Amazon Q in Connect Session.</td>
</tr>
<tr>
    <td><CopyableCode code="conversation_state" /></td>
    <td><code>object</code></td>
    <td>The state of current conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="next_message_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next message.</td>
</tr>
<tr>
    <td><CopyableCode code="request_message_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the submitted message. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="response" /></td>
    <td><code>object</code></td>
    <td>The message response to the requested message.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of message response. (TEXT, TOOL_USE_RESULT)</td>
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
    <td><a href="#get_next_message"><CopyableCode code="get_next_message" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-nextMessageToken"><code>nextMessageToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves next message on an Amazon Q in Connect session.</td>
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
<tr id="parameter-assistant_id">
    <td><CopyableCode code="assistant_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect assistant.</td>
</tr>
<tr id="parameter-nextMessageToken">
    <td><CopyableCode code="nextMessageToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next message. Use the value returned in the SendMessage or previous response in the next request to retrieve the next message.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect session.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_next_message"
    values={[
        { label: 'get_next_message', value: 'get_next_message' }
    ]}
>
<TabItem value="get_next_message">

Retrieves next message on an Amazon Q in Connect session.

```sql
SELECT
chunked_response_terminated,
conversation_session_data,
conversation_state,
next_message_token,
request_message_id,
response,
type_
FROM aws.qconnect.next_messages
WHERE assistant_id = '{{ assistant_id }}' -- required
AND session_id = '{{ session_id }}' -- required
AND nextMessageToken = '{{ nextMessageToken }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
