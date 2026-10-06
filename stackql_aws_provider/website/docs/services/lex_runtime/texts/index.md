--- 
title: texts
hide_title: false
hide_table_of_contents: false
keywords:
  - texts
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

Creates, updates, deletes, gets or lists a <code>texts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="texts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lex_runtime.texts" /></td></tr>
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
    <td><a href="#post_text"><CopyableCode code="post_text" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bot_name"><code>bot_name</code></a>, <a href="#parameter-bot_alias"><code>bot_alias</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inputText"><code>inputText</code></a></td>
    <td></td>
    <td>Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. In response, Amazon Lex returns the next message to convey to the user an optional responseCard to display. Consider the following example messages: For a user input "I would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" After the user provides all of the pizza order information, Amazon Lex might return a response with a message to obtain user confirmation "Proceed with the pizza order?". After the user replies to a confirmation prompt with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not all Amazon Lex messages require a user response. For example, a conclusion statement does not require a response. Some messages require only a "yes" or "no" user response. In addition to the message, Amazon Lex provides additional context about the message in the response that you might use to enhance client behavior, for example, to display the appropriate client user interface. These are the slotToElicit, dialogState, intentName, and slots fields in the response. Consider the following examples: If the message is to elicit slot data, Amazon Lex returns the following context information: dialogState set to ElicitSlot intentName set to the intent name in the current context slotToElicit set to the slot name for which the message is eliciting information slots set to a map of slots, configured for the intent, with currently known values If the message is a confirmation prompt, the dialogState is set to ConfirmIntent and SlotToElicit is set to null. If the message is a clarification prompt (configured for the intent) that indicates that user intent is not understood, the dialogState is set to ElicitIntent and slotToElicit is set to null. In addition, Amazon Lex also returns your application-specific sessionAttributes. For more information, see Managing Conversation Context.</td>
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
    <td>The alias of the Amazon Lex bot.</td>
</tr>
<tr id="parameter-bot_name">
    <td><CopyableCode code="bot_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Lex bot.</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="post_text"
    values={[
        { label: 'post_text', value: 'post_text' }
    ]}
>
<TabItem value="post_text">

Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. In response, Amazon Lex returns the next message to convey to the user an optional responseCard to display. Consider the following example messages: For a user input "I would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" After the user provides all of the pizza order information, Amazon Lex might return a response with a message to obtain user confirmation "Proceed with the pizza order?". After the user replies to a confirmation prompt with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not all Amazon Lex messages require a user response. For example, a conclusion statement does not require a response. Some messages require only a "yes" or "no" user response. In addition to the message, Amazon Lex provides additional context about the message in the response that you might use to enhance client behavior, for example, to display the appropriate client user interface. These are the slotToElicit, dialogState, intentName, and slots fields in the response. Consider the following examples: If the message is to elicit slot data, Amazon Lex returns the following context information: dialogState set to ElicitSlot intentName set to the intent name in the current context slotToElicit set to the slot name for which the message is eliciting information slots set to a map of slots, configured for the intent, with currently known values If the message is a confirmation prompt, the dialogState is set to ConfirmIntent and SlotToElicit is set to null. If the message is a clarification prompt (configured for the intent) that indicates that user intent is not understood, the dialogState is set to ElicitIntent and slotToElicit is set to null. In addition, Amazon Lex also returns your application-specific sessionAttributes. For more information, see Managing Conversation Context.

```sql
EXEC aws.lex_runtime.texts.post_text 
@bot_name='{{ bot_name }}' --required, 
@bot_alias='{{ bot_alias }}' --required, 
@user_id='{{ user_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"sessionAttributes": "{{ sessionAttributes }}", 
"requestAttributes": "{{ requestAttributes }}", 
"inputText": "{{ inputText }}", 
"activeContexts": "{{ activeContexts }}"
}'
;
```
</TabItem>
</Tabs>
