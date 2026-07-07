--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
  - lexv2_runtime
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_runtime.sessions" /></td></tr>
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
    <td><CopyableCode code="interpretations" /></td>
    <td><code>array</code></td>
    <td>A list of intents that Amazon Lex V2 determined might satisfy the user's utterance. Each interpretation includes the intent, a score that indicates how confident Amazon Lex V2 is that the interpretation is the correct one, and an optional sentiment response that indicates the sentiment expressed in the utterance.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>A list of messages that were last sent to the user. The messages are ordered based on the order that your returned the messages from your Lambda function or the order that messages are defined in the bot.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the returned session.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionState" /></td>
    <td><code>object</code></td>
    <td>Represents the current state of the dialog between the user and the bot. You can use this to determine the progress of the conversation and what the next action might be.</td>
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
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_alias_id"><code>bot_alias_id</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns session information for a specified bot, alias, and user. For example, you can use this operation to retrieve session information for a user that has left a long-running session in use. If the bot, alias, or session identifier doesn't exist, Amazon Lex V2 returns a BadRequestException. If the locale doesn't exist or is not enabled for the alias, you receive a BadRequestException.</td>
</tr>
<tr>
    <td><a href="#put_session"><CopyableCode code="put_session" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_alias_id"><code>bot_alias_id</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sessionState"><code>sessionState</code></a></td>
    <td><a href="#parameter-ResponseContentType"><code>ResponseContentType</code></a></td>
    <td>Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable your application to set the state of the bot.</td>
</tr>
<tr>
    <td><a href="#delete_session"><CopyableCode code="delete_session" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_alias_id"><code>bot_alias_id</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes session information for a specified bot, alias, and user ID. You can use this operation to restart a conversation with a bot. When you remove a session, the entire history of the session is removed so that you can start again. You don't need to delete a session. Sessions have a time limit and will expire. Set the session time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and 24 hours. If you specify a bot or alias ID that doesn't exist, you receive a BadRequestException. If the locale doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a BadRequestException.</td>
</tr>
<tr>
    <td><a href="#recognize_text"><CopyableCode code="recognize_text" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_alias_id"><code>bot_alias_id</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-text"><code>text</code></a></td>
    <td></td>
    <td>Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the bot. In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to display. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. For more information, see Completion message.</td>
</tr>
<tr>
    <td><a href="#recognize_utterance"><CopyableCode code="recognize_utterance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_alias_id"><code>bot_alias_id</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-lex-session-state"><code>x-amz-lex-session-state</code></a>, <a href="#parameter-x-amz-lex-request-attributes"><code>x-amz-lex-request-attributes</code></a>, <a href="#parameter-Response-Content-Type"><code>Response-Content-Type</code></a></td>
    <td>Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model built for the bot. The following request fields must be compressed with gzip and then base64 encoded before you send them to Amazon Lex V2. requestAttributes sessionState The following response fields are compressed using gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress them. inputTranscript interpretations messages requestAttributes sessionState The example contains a Java application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and decompresses a response from Amazon Lex V2. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. For more information, see Completion message.</td>
</tr>
<tr>
    <td><a href="#start_conversation"><CopyableCode code="start_conversation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_alias_id"><code>bot_alias_id</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-requestEventStream"><code>requestEventStream</code></a></td>
    <td><a href="#parameter-x-amz-lex-conversation-mode"><code>x-amz-lex-conversation-mode</code></a></td>
    <td>Starts an HTTP/2 bidirectional event stream that enables you to send audio, text, or DTMF input in real time. After your application starts a conversation, users send input to Amazon Lex V2 as a stream of events. Amazon Lex V2 processes the incoming events and responds with streaming text or audio events. Audio input must be in the following format: audio/lpcm sample-rate=8000 sample-size-bits=16 channel-count=1; is-big-endian=false. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. For more information, see Completion message. If the optional update message is configured, it is played at the specified frequency while the Lambda function is running and the update message state is active. If the fulfillment update message is not active, the Lambda function runs with a 30 second timeout. For more information, see Update message The StartConversation operation is supported only in the following SDKs: AWS SDK for C++ AWS SDK for Java V2 AWS SDK for Ruby V3</td>
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
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td>Indicates the format for audio input or that the content is text. The header must start with one of the following prefixes: PCM format, audio data must be in little-endian byte order. audio/l16; rate=16000; channels=1 audio/x-l16; sample-rate=16000; channel-count=1 audio/lpcm; sample-rate=8000; sample-size-bits=16; channel-count=1; is-big-endian=false Opus format audio/x-cbr-opus-with-preamble;preamble-size=0;bit-rate=256000;frame-size-milliseconds=4 Text format text/plain; charset=utf-8</td>
</tr>
<tr id="parameter-bot_alias_id">
    <td><CopyableCode code="bot_alias_id" /></td>
    <td><code>string</code></td>
    <td>The alias identifier in use for the bot that processes the request.</td>
</tr>
<tr id="parameter-bot_id">
    <td><CopyableCode code="bot_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the bot to process the request.</td>
</tr>
<tr id="parameter-locale_id">
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The locale where the session is in use.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user session that is having the conversation.</td>
</tr>
<tr id="parameter-Response-Content-Type">
    <td><CopyableCode code="Response-Content-Type" /></td>
    <td><code>string</code></td>
    <td>The message that Amazon Lex V2 returns in the response can be either text or speech based on the responseContentType value. If the value is text/plain;charset=utf-8, Amazon Lex V2 returns text in the response. If the value begins with audio/, Amazon Lex V2 returns speech in the response. Amazon Lex V2 uses Amazon Polly to generate the speech using the configuration that you specified in the responseContentType parameter. For example, if you specify audio/mpeg as the value, Amazon Lex V2 returns speech in the MPEG format. If the value is audio/pcm, the speech returned is audio/pcm at 16 KHz in 16-bit, little-endian format. The following are the accepted values: audio/mpeg audio/ogg audio/pcm (16 KHz) audio/* (defaults to mpeg) text/plain; charset=utf-8</td>
</tr>
<tr id="parameter-ResponseContentType">
    <td><CopyableCode code="ResponseContentType" /></td>
    <td><code>string</code></td>
    <td>The message that Amazon Lex V2 returns in the response can be either text or speech depending on the value of this parameter. If the value is text/plain; charset=utf-8, Amazon Lex V2 returns text in the response.</td>
</tr>
<tr id="parameter-x-amz-lex-conversation-mode">
    <td><CopyableCode code="x-amz-lex-conversation-mode" /></td>
    <td><code>string</code></td>
    <td>The conversation type that you are using the Amazon Lex V2. If the conversation mode is AUDIO you can send both audio and DTMF information. If the mode is TEXT you can only send text.</td>
</tr>
<tr id="parameter-x-amz-lex-request-attributes">
    <td><CopyableCode code="x-amz-lex-request-attributes" /></td>
    <td><code>string</code></td>
    <td>Request-specific information passed between the client application and Amazon Lex V2 The namespace x-amz-lex: is reserved for special attributes. Don't create any request attributes for prefix x-amz-lex:. The requestAttributes field must be compressed using gzip and then base64 encoded before sending to Amazon Lex V2.</td>
</tr>
<tr id="parameter-x-amz-lex-session-state">
    <td><CopyableCode code="x-amz-lex-session-state" /></td>
    <td><code>string</code></td>
    <td>Sets the state of the session with the user. You can use this to set the current intent, attributes, context, and dialog action. Use the dialog action to determine the next step that Amazon Lex V2 should use in the conversation with the user. The sessionState field must be compressed using gzip and then base64 encoded before sending to Amazon Lex V2.</td>
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

Returns session information for a specified bot, alias, and user. For example, you can use this operation to retrieve session information for a user that has left a long-running session in use. If the bot, alias, or session identifier doesn't exist, Amazon Lex V2 returns a BadRequestException. If the locale doesn't exist or is not enabled for the alias, you receive a BadRequestException.

```sql
SELECT
interpretations,
messages,
sessionId,
sessionState
FROM aws.lexv2_runtime.sessions
WHERE bot_id = '{{ bot_id }}' -- required
AND bot_alias_id = '{{ bot_alias_id }}' -- required
AND locale_id = '{{ locale_id }}' -- required
AND session_id = '{{ session_id }}' -- required
AND region = '{{ region }}' -- required
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

Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable your application to set the state of the bot.

```sql
REPLACE aws.lexv2_runtime.sessions
SET 
messages = '{{ messages }}',
sessionState = '{{ sessionState }}',
requestAttributes = '{{ requestAttributes }}'
WHERE 
bot_id = '{{ bot_id }}' --required
AND bot_alias_id = '{{ bot_alias_id }}' --required
AND locale_id = '{{ locale_id }}' --required
AND session_id = '{{ session_id }}' --required
AND region = '{{ region }}' --required
AND sessionState = '{{ sessionState }}' --required
AND ResponseContentType = '{{ ResponseContentType}}'
RETURNING
audioStream,
contentType,
messages,
requestAttributes,
sessionId,
sessionState;
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

Removes session information for a specified bot, alias, and user ID. You can use this operation to restart a conversation with a bot. When you remove a session, the entire history of the session is removed so that you can start again. You don't need to delete a session. Sessions have a time limit and will expire. Set the session time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and 24 hours. If you specify a bot or alias ID that doesn't exist, you receive a BadRequestException. If the locale doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a BadRequestException.

```sql
DELETE FROM aws.lexv2_runtime.sessions
WHERE bot_id = '{{ bot_id }}' --required
AND bot_alias_id = '{{ bot_alias_id }}' --required
AND locale_id = '{{ locale_id }}' --required
AND session_id = '{{ session_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="recognize_text"
    values={[
        { label: 'recognize_text', value: 'recognize_text' },
        { label: 'recognize_utterance', value: 'recognize_utterance' },
        { label: 'start_conversation', value: 'start_conversation' }
    ]}
>
<TabItem value="recognize_text">

Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the bot. In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to display. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. For more information, see Completion message.

```sql
EXEC aws.lexv2_runtime.sessions.recognize_text 
@bot_id='{{ bot_id }}' --required, 
@bot_alias_id='{{ bot_alias_id }}' --required, 
@locale_id='{{ locale_id }}' --required, 
@session_id='{{ session_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"text": "{{ text }}", 
"sessionState": "{{ sessionState }}", 
"requestAttributes": "{{ requestAttributes }}"
}'
;
```
</TabItem>
<TabItem value="recognize_utterance">

Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model built for the bot. The following request fields must be compressed with gzip and then base64 encoded before you send them to Amazon Lex V2. requestAttributes sessionState The following response fields are compressed using gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress them. inputTranscript interpretations messages requestAttributes sessionState The example contains a Java application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and decompresses a response from Amazon Lex V2. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. For more information, see Completion message.

```sql
EXEC aws.lexv2_runtime.sessions.recognize_utterance 
@bot_id='{{ bot_id }}' --required, 
@bot_alias_id='{{ bot_alias_id }}' --required, 
@locale_id='{{ locale_id }}' --required, 
@session_id='{{ session_id }}' --required, 
@Content-Type='{{ Content-Type }}' --required, 
@region='{{ region }}' --required, 
@x-amz-lex-session-state='{{ x-amz-lex-session-state }}', 
@x-amz-lex-request-attributes='{{ x-amz-lex-request-attributes }}', 
@Response-Content-Type='{{ Response-Content-Type }}' 
@@json=
'{
"inputStream": "{{ inputStream }}"
}'
;
```
</TabItem>
<TabItem value="start_conversation">

Starts an HTTP/2 bidirectional event stream that enables you to send audio, text, or DTMF input in real time. After your application starts a conversation, users send input to Amazon Lex V2 as a stream of events. Amazon Lex V2 processes the incoming events and responds with streaming text or audio events. Audio input must be in the following format: audio/lpcm sample-rate=8000 sample-size-bits=16 channel-count=1; is-big-endian=false. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. For more information, see Completion message. If the optional update message is configured, it is played at the specified frequency while the Lambda function is running and the update message state is active. If the fulfillment update message is not active, the Lambda function runs with a 30 second timeout. For more information, see Update message The StartConversation operation is supported only in the following SDKs: AWS SDK for C++ AWS SDK for Java V2 AWS SDK for Ruby V3

```sql
EXEC aws.lexv2_runtime.sessions.start_conversation 
@bot_id='{{ bot_id }}' --required, 
@bot_alias_id='{{ bot_alias_id }}' --required, 
@locale_id='{{ locale_id }}' --required, 
@session_id='{{ session_id }}' --required, 
@region='{{ region }}' --required, 
@x-amz-lex-conversation-mode='{{ x-amz-lex-conversation-mode }}' 
@@json=
'{
"requestEventStream": "{{ requestEventStream }}"
}'
;
```
</TabItem>
</Tabs>
