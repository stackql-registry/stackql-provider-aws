--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
  - lex_runtime
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

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lex_runtime.sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_session"
    values={[
        { label: 'get_session', value: 'get_session' }
    ]}
>
<TabItem value="get_session">

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
    <td><CopyableCode code="activeContexts" /></td>
    <td><code>array</code></td>
    <td>A list of active contexts for the session. A context can be set when an intent is fulfilled or by calling the PostContent, PostText, or PutSession operation. You can use a context to control the intents that can follow up an intent, or to modify the operation of your application.</td>
</tr>
<tr>
    <td><CopyableCode code="dialogAction" /></td>
    <td><code>object</code></td>
    <td>Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the DialogAction data type to set the interaction to a specific state, or to return the interaction to a previous state.</td>
</tr>
<tr>
    <td><CopyableCode code="recentIntentSummaryView" /></td>
    <td><code>array</code></td>
    <td>An array of information about the intents used in the session. The array can contain a maximum of three summaries. If more than three intents are used in the session, the recentIntentSummaryView operation contains information about the last three intents used. If you set the checkpointLabelFilter parameter in the request, the array contains only the intents with the specified label.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionAttributes" /></td>
    <td><code>object</code></td>
    <td>Map of key/value pairs representing the session-specific context information. It contains application information passed between Amazon Lex and a client application.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the session.</td>
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
    <td><a href="#get_session"><CopyableCode code="get_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_name"><code>bot_name</code></a>, <a href="#parameter-bot_alias"><code>bot_alias</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-checkpointLabelFilter"><code>checkpointLabelFilter</code></a></td>
    <td>Returns session information for a specified bot, alias, and user ID.</td>
</tr>
<tr>
    <td><a href="#put_session"><CopyableCode code="put_session" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bot_name"><code>bot_name</code></a>, <a href="#parameter-bot_alias"><code>bot_alias</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable your application to set the state of the bot. For more information, see Managing Sessions.</td>
</tr>
<tr>
    <td><a href="#delete_session"><CopyableCode code="delete_session" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bot_name"><code>bot_name</code></a>, <a href="#parameter-bot_alias"><code>bot_alias</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes session information for a specified bot, alias, and user ID.</td>
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
<tr id="parameter-bot_alias">
    <td><CopyableCode code="bot_alias" /></td>
    <td><code>string</code></td>
    <td>The alias in use for the bot that contains the session data.</td>
</tr>
<tr id="parameter-bot_name">
    <td><CopyableCode code="bot_name" /></td>
    <td><code>string</code></td>
    <td>The name of the bot that contains the session data.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user associated with the session data.</td>
</tr>
<tr id="parameter-Accept">
    <td><CopyableCode code="Accept" /></td>
    <td><code>string</code></td>
    <td>The message that Amazon Lex returns in the response can be either text or speech based depending on the value of this field. If the value is text/plain; charset=utf-8, Amazon Lex returns text in the response. If the value begins with audio/, Amazon Lex returns speech in the response. Amazon Lex uses Amazon Polly to generate the speech in the configuration that you specify. For example, if you specify audio/mpeg as the value, Amazon Lex returns speech in the MPEG format. If the value is audio/pcm, the speech is returned as audio/pcm in 16-bit, little endian format. The following are the accepted values: audio/mpeg audio/ogg audio/pcm audio/* (defaults to mpeg) text/plain; charset=utf-8</td>
</tr>
<tr id="parameter-checkpointLabelFilter">
    <td><CopyableCode code="checkpointLabelFilter" /></td>
    <td><code>string</code></td>
    <td>A string used to filter the intents returned in the recentIntentSummaryView structure. When you specify a filter, only intents with their checkpointLabel field set to that string are returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_session"
    values={[
        { label: 'get_session', value: 'get_session' }
    ]}
>
<TabItem value="get_session">

Returns session information for a specified bot, alias, and user ID.

```sql
SELECT
activeContexts,
dialogAction,
recentIntentSummaryView,
sessionAttributes,
sessionId
FROM aws.lex_runtime.sessions
WHERE bot_name = '{{ bot_name }}' -- required
AND bot_alias = '{{ bot_alias }}' -- required
AND user_id = '{{ user_id }}' -- required
AND region = '{{ region }}' -- required
AND checkpointLabelFilter = '{{ checkpointLabelFilter }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_session"
    values={[
        { label: 'put_session', value: 'put_session' }
    ]}
>
<TabItem value="put_session">

Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable your application to set the state of the bot. For more information, see Managing Sessions.

```sql
REPLACE aws.lex_runtime.sessions
SET 
sessionAttributes = '{{ sessionAttributes }}',
dialogAction = '{{ dialogAction }}',
recentIntentSummaryView = '{{ recentIntentSummaryView }}',
activeContexts = '{{ activeContexts }}'
WHERE 
bot_name = '{{ bot_name }}' --required
AND bot_alias = '{{ bot_alias }}' --required
AND user_id = '{{ user_id }}' --required
AND region = '{{ region }}' --required
AND Accept = '{{ Accept}}'
RETURNING
activeContexts,
audioStream,
contentType,
dialogState,
encodedMessage,
intentName,
message,
messageFormat,
sessionAttributes,
sessionId,
slotToElicit,
slots;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_session"
    values={[
        { label: 'delete_session', value: 'delete_session' }
    ]}
>
<TabItem value="delete_session">

Removes session information for a specified bot, alias, and user ID.

```sql
DELETE FROM aws.lex_runtime.sessions
WHERE bot_name = '{{ bot_name }}' --required
AND bot_alias = '{{ bot_alias }}' --required
AND user_id = '{{ user_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
