--- 
title: publishes
hide_title: false
hide_table_of_contents: false
keywords:
  - publishes
  - sns
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

Creates, updates, deletes, gets or lists a <code>publishes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="publishes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sns.publishes" /></td></tr>
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
    <td><a href="#publish"><CopyableCode code="publish" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-Message"><code>Message</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TopicArn"><code>TopicArn</code></a>, <a href="#parameter-TargetArn"><code>TargetArn</code></a>, <a href="#parameter-PhoneNumber"><code>PhoneNumber</code></a>, <a href="#parameter-Subject"><code>Subject</code></a>, <a href="#parameter-MessageStructure"><code>MessageStructure</code></a>, <a href="#parameter-MessageAttributes"><code>MessageAttributes</code></a>, <a href="#parameter-MessageDeduplicationId"><code>MessageDeduplicationId</code></a>, <a href="#parameter-MessageGroupId"><code>MessageGroupId</code></a></td>
    <td>Sends a message to an Amazon SNS topic, a text message (SMS message) directly to a phone number, or a message to a mobile platform endpoint (when you specify the TargetArn). If you send a message to a topic, Amazon SNS delivers the message to each endpoint that is subscribed to the topic. The format of the message depends on the notification protocol for each subscribed endpoint. When a messageId is returned, the message is saved and Amazon SNS immediately delivers it to subscribers. To use the Publish action for publishing a message to a mobile endpoint, such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for the TargetArn parameter. The EndpointArn is returned when making a call with the CreatePlatformEndpoint action. For more information about formatting messages, see Send Custom Platform-Specific Payloads in Messages to Mobile Devices. You can publish messages only to topics and endpoints in the same Amazon Web Services Region.</td>
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
<tr id="parameter-Message">
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>The message you want to send. If you are publishing to a topic and you want to send the same message to all transport protocols, include the text of the message as a String value. If you want to send different messages for each transport protocol, set the value of the MessageStructure parameter to json and use a JSON object for the Message parameter. Constraints: With the exception of SMS, messages must be UTF-8 encoded strings. By default, a message can be at most 256 KiB in size (262,144 bytes, not 262,144 characters). When you publish to a topic, the maximum size is determined by the topic's MaximumMessageSize attribute, which supports values up to 1 MiB (1,048,576 bytes). Amazon SNS validates the combined size of the message body and message attributes against this value and returns an InvalidParameter error if the limit is exceeded. For more information, see Large message payloads in the Amazon SNS Developer Guide. For SMS, each message can contain up to 140 characters. This character limit depends on the encoding schema. For example, an SMS message can contain 160 GSM characters, 140 ASCII characters, or 70 UCS-2 characters. If you publish a message that exceeds this size limit, Amazon SNS sends the message as multiple messages, each fitting within the size limit. Messages aren't truncated mid-word but are cut off at whole-word boundaries. The total size limit for a single SMS Publish action is 1,600 characters. JSON-specific constraints: Keys in the JSON object that correspond to supported transport protocols must have simple JSON string values. The values will be parsed (unescaped) before they are used in outgoing messages. Outbound notifications are JSON encoded (meaning that the characters will be reescaped for sending). Values have a minimum length of 0 (the empty string, "", is allowed). Values have a maximum length bounded by the overall message size (so, including multiple protocols may limit message sizes). Non-string values will cause the key to be ignored. Keys that do not correspond to supported transport protocols are ignored. Duplicate keys are not allowed. Failure to parse or validate any key or value in the message will cause the Publish call to return an error (no partial delivery).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MessageAttributes">
    <td><CopyableCode code="MessageAttributes" /></td>
    <td><code>object</code></td>
    <td>Message attributes for Publish action.</td>
</tr>
<tr id="parameter-MessageDeduplicationId">
    <td><CopyableCode code="MessageDeduplicationId" /></td>
    <td><code>string</code></td>
    <td>This parameter applies only to FIFO (first-in-first-out) topics. The MessageDeduplicationId can contain up to 128 alphanumeric characters (a-z, A-Z, 0-9) and punctuation (!"#$%&'()*+,-./:;&lt;=&gt;?@&#91;\&#93;^_`&#123;|&#125;~). Every message must have a unique MessageDeduplicationId, which is a token used for deduplication of sent messages within the 5 minute minimum deduplication interval. The scope of deduplication depends on the FifoThroughputScope attribute, when set to Topic the message deduplication scope is across the entire topic, when set to MessageGroup the message deduplication scope is within each individual message group. If a message with a particular MessageDeduplicationId is sent successfully, subsequent messages within the deduplication scope and interval, with the same MessageDeduplicationId, are accepted successfully but aren't delivered. Every message must have a unique MessageDeduplicationId: You may provide a MessageDeduplicationId explicitly. If you aren't able to provide a MessageDeduplicationId and you enable ContentBasedDeduplication for your topic, Amazon SNS uses a SHA-256 hash to generate the MessageDeduplicationId using the body of the message (but not the attributes of the message). If you don't provide a MessageDeduplicationId and the topic doesn't have ContentBasedDeduplication set, the action fails with an error. If the topic has a ContentBasedDeduplication set, your MessageDeduplicationId overrides the generated one. When ContentBasedDeduplication is in effect, messages with identical content sent within the deduplication scope and interval are treated as duplicates and only one copy of the message is delivered. If you send one message with ContentBasedDeduplication enabled, and then another message with a MessageDeduplicationId that is the same as the one generated for the first MessageDeduplicationId, the two messages are treated as duplicates, within the deduplication scope and interval, and only one copy of the message is delivered.</td>
</tr>
<tr id="parameter-MessageGroupId">
    <td><CopyableCode code="MessageGroupId" /></td>
    <td><code>string</code></td>
    <td>The MessageGroupId can contain up to 128 alphanumeric characters (a-z, A-Z, 0-9) and punctuation (!"#$%&'()*+,-./:;&lt;=&gt;?@&#91;\&#93;^_`&#123;|&#125;~). For FIFO topics: The MessageGroupId is a tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). Every message must include a MessageGroupId. For standard topics: The MessageGroupId is optional and is forwarded only to Amazon SQS standard subscriptions to activate fair queues. The MessageGroupId is not used for, or sent to, any other endpoint types. When provided, the same validation rules apply as for FIFO topics.</td>
</tr>
<tr id="parameter-MessageStructure">
    <td><CopyableCode code="MessageStructure" /></td>
    <td><code>string</code></td>
    <td>Set MessageStructure to json if you want to send a different message for each protocol. For example, using one publish action, you can send a short message to your SMS subscribers and a longer message to your email subscribers. If you set MessageStructure to json, the value of the Message parameter must: be a syntactically valid JSON object; and contain at least a top-level JSON key of "default" with a value that is a string. You can define other top-level keys that define the message you want to send to a specific transport protocol (e.g., "http"). Valid value: json</td>
</tr>
<tr id="parameter-PhoneNumber">
    <td><CopyableCode code="PhoneNumber" /></td>
    <td><code>string</code></td>
    <td>The phone number to which you want to deliver an SMS message. Use E.164 format. If you don't specify a value for the PhoneNumber parameter, you must specify a value for the TargetArn or TopicArn parameters.</td>
</tr>
<tr id="parameter-Subject">
    <td><CopyableCode code="Subject" /></td>
    <td><code>string</code></td>
    <td>Optional parameter to be used as the "Subject" line when the message is delivered to email endpoints. This field will also be included, if present, in the standard JSON messages delivered to other endpoints. Constraints: Subjects must be UTF-8 text with no line breaks or control characters, and less than 100 characters long.</td>
</tr>
<tr id="parameter-TargetArn">
    <td><CopyableCode code="TargetArn" /></td>
    <td><code>string</code></td>
    <td>If you don't specify a value for the TargetArn parameter, you must specify a value for the PhoneNumber or TopicArn parameters.</td>
</tr>
<tr id="parameter-TopicArn">
    <td><CopyableCode code="TopicArn" /></td>
    <td><code>string</code></td>
    <td>The topic you want to publish to. If you don't specify a value for the TopicArn parameter, you must specify a value for the PhoneNumber or TargetArn parameters.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="publish"
    values={[
        { label: 'publish', value: 'publish' }
    ]}
>
<TabItem value="publish">

Sends a message to an Amazon SNS topic, a text message (SMS message) directly to a phone number, or a message to a mobile platform endpoint (when you specify the TargetArn). If you send a message to a topic, Amazon SNS delivers the message to each endpoint that is subscribed to the topic. The format of the message depends on the notification protocol for each subscribed endpoint. When a messageId is returned, the message is saved and Amazon SNS immediately delivers it to subscribers. To use the Publish action for publishing a message to a mobile endpoint, such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for the TargetArn parameter. The EndpointArn is returned when making a call with the CreatePlatformEndpoint action. For more information about formatting messages, see Send Custom Platform-Specific Payloads in Messages to Mobile Devices. You can publish messages only to topics and endpoints in the same Amazon Web Services Region.

```sql
EXEC aws.sns.publishes.publish 
@Message='{{ Message }}' --required, 
@region='{{ region }}' --required, 
@TopicArn='{{ TopicArn }}', 
@TargetArn='{{ TargetArn }}', 
@PhoneNumber='{{ PhoneNumber }}', 
@Subject='{{ Subject }}', 
@MessageStructure='{{ MessageStructure }}', 
@MessageAttributes='{{ MessageAttributes }}', 
@MessageDeduplicationId='{{ MessageDeduplicationId }}', 
@MessageGroupId='{{ MessageGroupId }}'
;
```
</TabItem>
</Tabs>
