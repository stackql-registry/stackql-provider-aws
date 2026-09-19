--- 
title: content
hide_title: false
hide_table_of_contents: false
keywords:
  - content
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

Creates, updates, deletes, gets or lists a <code>content</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="content" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lex_runtime.content" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#post_content"><CopyableCode code="post_content" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bot_name"><code>bot_name</code></a>, <a href="#parameter-bot_alias"><code>bot_alias</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inputStream"><code>inputStream</code></a></td>
    <td><a href="#parameter-x-amz-lex-session-attributes"><code>x-amz-lex-session-attributes</code></a>, <a href="#parameter-x-amz-lex-request-attributes"><code>x-amz-lex-request-attributes</code></a>, <a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-x-amz-lex-active-contexts"><code>x-amz-lex-active-contexts</code></a></td>
    <td>Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for the bot. The PostContent operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve higher speech recognition accuracy in telephone audio applications. In response, Amazon Lex returns the next message to convey to the user. Consider the following example messages: For a user input "I would like a pizza," Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?". After the user provides all of the pizza order information, Amazon Lex might return a response with a message to get user confirmation: "Order the pizza?". After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a response. Some messages require only a yes or no response. In addition to the message, Amazon Lex provides additional context about the message in the response that you can use to enhance client behavior, such as displaying the appropriate client user interface. Consider the following examples: If the message is to elicit slot data, Amazon Lex returns the following context information: x-amz-lex-dialog-state header set to ElicitSlot x-amz-lex-intent-name header set to the intent name in the current context x-amz-lex-slot-to-elicit header set to the slot name for which the message is eliciting information x-amz-lex-slots header set to a map of slots configured for the intent with their current values If the message is a confirmation prompt, the x-amz-lex-dialog-state header is set to Confirmation and the x-amz-lex-slot-to-elicit header is omitted. If the message is a clarification prompt configured for the intent, indicating that the user intent is not understood, the x-amz-dialog-state header is set to ElicitIntent and the x-amz-slot-to-elicit header is omitted. In addition, Amazon Lex also returns your application-specific sessionAttributes. For more information, see Managing Conversation Context.</td>
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
    <td>You pass this value as the Content-Type HTTP header. Indicates the audio format or text. The header value must start with one of the following prefixes: PCM format, audio data must be in little-endian byte order. audio/l16; rate=16000; channels=1 audio/x-l16; sample-rate=16000; channel-count=1 audio/lpcm; sample-rate=8000; sample-size-bits=16; channel-count=1; is-big-endian=false Opus format audio/x-cbr-opus-with-preamble; preamble-size=0; bit-rate=256000; frame-size-milliseconds=4 Text format text/plain; charset=utf-8</td>
</tr>
<tr id="parameter-bot_alias">
    <td><CopyableCode code="bot_alias" /></td>
    <td><code>string</code></td>
    <td>Alias of the Amazon Lex bot.</td>
</tr>
<tr id="parameter-bot_name">
    <td><CopyableCode code="bot_name" /></td>
    <td><code>string</code></td>
    <td>Name of the Amazon Lex bot.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. At runtime, each request must contain the userID field. To decide the user ID to use for your application, consider the following factors. The userID field must not contain any personally identifiable information of the user, for example, name, personal identification numbers, or other end user personal information. If you want a user to start a conversation on one device and continue on another device, use a user-specific identifier. If you want the same user to be able to have two independent conversations on two different devices, choose a device-specific identifier. A user can't have two independent conversations with two different versions of the same bot. For example, a user can't have a conversation with the PROD and BETA versions of the same bot. If you anticipate that a user will need to have conversation with two different versions, for example, while testing, include the bot alias in the user ID to separate the two conversations.</td>
</tr>
<tr id="parameter-Accept">
    <td><CopyableCode code="Accept" /></td>
    <td><code>string</code></td>
    <td>You pass this value as the Accept HTTP header. The message Amazon Lex returns in the response can be either text or speech based on the Accept HTTP header value in the request. If the value is text/plain; charset=utf-8, Amazon Lex returns text in the response. If the value begins with audio/, Amazon Lex returns speech in the response. Amazon Lex uses Amazon Polly to generate the speech (using the configuration you specified in the Accept header). For example, if you specify audio/mpeg as the value, Amazon Lex returns speech in the MPEG format. If the value is audio/pcm, the speech returned is audio/pcm in 16-bit, little endian format. The following are the accepted values: audio/mpeg audio/ogg audio/pcm text/plain; charset=utf-8 audio/* (defaults to mpeg)</td>
</tr>
<tr id="parameter-x-amz-lex-active-contexts">
    <td><CopyableCode code="x-amz-lex-active-contexts" /></td>
    <td><code>string</code></td>
    <td>A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by including the context in the request, If you don't specify a list of contexts, Amazon Lex will use the current list of contexts for the session. If you specify an empty list, all contexts for the session are cleared.</td>
</tr>
<tr id="parameter-x-amz-lex-request-attributes">
    <td><CopyableCode code="x-amz-lex-request-attributes" /></td>
    <td><code>string</code></td>
    <td>You pass this value as the x-amz-lex-request-attributes HTTP header. Request-specific information passed between Amazon Lex and a client application. The value must be a JSON serialized and base64 encoded map with string keys and values. The total size of the requestAttributes and sessionAttributes headers is limited to 12 KB. The namespace x-amz-lex: is reserved for special attributes. Don't create any request attributes with the prefix x-amz-lex:. For more information, see Setting Request Attributes.</td>
</tr>
<tr id="parameter-x-amz-lex-session-attributes">
    <td><CopyableCode code="x-amz-lex-session-attributes" /></td>
    <td><code>string</code></td>
    <td>You pass this value as the x-amz-lex-session-attributes HTTP header. Application-specific information passed between Amazon Lex and a client application. The value must be a JSON serialized and base64 encoded map with string keys and values. The total size of the sessionAttributes and requestAttributes headers is limited to 12 KB. For more information, see Setting Session Attributes.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="post_content"
    values={[
        { label: 'post_content', value: 'post_content' }
    ]}
>
<TabItem value="post_content">

Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for the bot. The PostContent operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve higher speech recognition accuracy in telephone audio applications. In response, Amazon Lex returns the next message to convey to the user. Consider the following example messages: For a user input "I would like a pizza," Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?". After the user provides all of the pizza order information, Amazon Lex might return a response with a message to get user confirmation: "Order the pizza?". After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a response. Some messages require only a yes or no response. In addition to the message, Amazon Lex provides additional context about the message in the response that you can use to enhance client behavior, such as displaying the appropriate client user interface. Consider the following examples: If the message is to elicit slot data, Amazon Lex returns the following context information: x-amz-lex-dialog-state header set to ElicitSlot x-amz-lex-intent-name header set to the intent name in the current context x-amz-lex-slot-to-elicit header set to the slot name for which the message is eliciting information x-amz-lex-slots header set to a map of slots configured for the intent with their current values If the message is a confirmation prompt, the x-amz-lex-dialog-state header is set to Confirmation and the x-amz-lex-slot-to-elicit header is omitted. If the message is a clarification prompt configured for the intent, indicating that the user intent is not understood, the x-amz-dialog-state header is set to ElicitIntent and the x-amz-slot-to-elicit header is omitted. In addition, Amazon Lex also returns your application-specific sessionAttributes. For more information, see Managing Conversation Context.

```sql
EXEC aws.lex_runtime.content.post_content 
@bot_name='{{ bot_name }}' --required, 
@bot_alias='{{ bot_alias }}' --required, 
@user_id='{{ user_id }}' --required, 
@Content-Type='{{ Content-Type }}' --required, 
@region='{{ region }}' --required, 
@x-amz-lex-session-attributes='{{ x-amz-lex-session-attributes }}', 
@x-amz-lex-request-attributes='{{ x-amz-lex-request-attributes }}', 
@Accept='{{ Accept }}', 
@x-amz-lex-active-contexts='{{ x-amz-lex-active-contexts }}' 
@@json=
'{
"inputStream": "{{ inputStream }}"
}'
;
```
</TabItem>
</Tabs>
