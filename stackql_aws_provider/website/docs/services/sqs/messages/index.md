--- 
title: messages
hide_title: false
hide_table_of_contents: false
keywords:
  - messages
  - sqs
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sqs.messages" /></td></tr>
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
    <td><a href="#delete_message"><CopyableCode code="delete_message" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified message from the specified queue. To select the message to delete, use the ReceiptHandle of the message (not the MessageId which you receive when you send the message). Amazon SQS can delete a message from a queue even if a visibility timeout setting causes the message to be locked by another consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured for the queue. Each time you receive a message, meaning when a consumer retrieves a message from the queue, it comes with a unique ReceiptHandle. If you receive the same message more than once, you will get a different ReceiptHandle each time. When you want to delete a message using the DeleteMessage action, you must use the ReceiptHandle from the most recent time you received the message. If you use an old ReceiptHandle, the request will succeed, but the message might not be deleted. For standard queues, it is possible to receive a message even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the message is unavailable when you send the request to delete the message. The copy remains on the server and might be returned to you during a subsequent receive request. You should ensure that your application is idempotent, so that receiving a message more than once does not cause issues.</td>
</tr>
<tr>
    <td><a href="#receive_message"><CopyableCode code="receive_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueueUrl"><code>QueueUrl</code></a></td>
    <td></td>
    <td>Retrieves one or more messages (up to 10), from the specified queue. Using the WaitTimeSeconds parameter enables long-poll support. For more information, see Amazon SQS Long Polling in the Amazon SQS Developer Guide. Short poll is the default behavior where a weighted random set of machines is sampled on a ReceiveMessage call. Therefore, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per ReceiveMessage call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular ReceiveMessage response. If this happens, repeat the request. For each message returned, the response includes the following: The message body. An MD5 digest of the message body. For information about MD5, see RFC1321. The MessageId you received when you sent the message to the queue. The receipt handle. The message attributes. An MD5 digest of the message attributes. The receipt handle is the identifier you must provide when deleting the message. For more information, see Queue and Message Identifiers in the Amazon SQS Developer Guide. You can provide the VisibilityTimeout parameter in your request. The parameter is applied to the messages that Amazon SQS returns in the response. If you don't include the parameter, the overall visibility timeout for the queue is used for the returned messages. The default visibility timeout for a queue is 30 seconds. In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</td>
</tr>
<tr>
    <td><a href="#send_message"><CopyableCode code="send_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueueUrl"><code>QueueUrl</code></a>, <a href="#parameter-MessageBody"><code>MessageBody</code></a></td>
    <td></td>
    <td>Delivers a message to the specified queue. A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more information, see the W3C specification for characters. #x9 | #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000 to #x10FFFF If a message contains characters outside the allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to avoid this exception.</td>
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

## `DELETE` examples

<Tabs
    defaultValue="delete_message"
    values={[
        { label: 'delete_message', value: 'delete_message' }
    ]}
>
<TabItem value="delete_message">

Deletes the specified message from the specified queue. To select the message to delete, use the ReceiptHandle of the message (not the MessageId which you receive when you send the message). Amazon SQS can delete a message from a queue even if a visibility timeout setting causes the message to be locked by another consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured for the queue. Each time you receive a message, meaning when a consumer retrieves a message from the queue, it comes with a unique ReceiptHandle. If you receive the same message more than once, you will get a different ReceiptHandle each time. When you want to delete a message using the DeleteMessage action, you must use the ReceiptHandle from the most recent time you received the message. If you use an old ReceiptHandle, the request will succeed, but the message might not be deleted. For standard queues, it is possible to receive a message even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the message is unavailable when you send the request to delete the message. The copy remains on the server and might be returned to you during a subsequent receive request. You should ensure that your application is idempotent, so that receiving a message more than once does not cause issues.

```sql
DELETE FROM aws.sqs.messages
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="receive_message"
    values={[
        { label: 'receive_message', value: 'receive_message' },
        { label: 'send_message', value: 'send_message' }
    ]}
>
<TabItem value="receive_message">

Retrieves one or more messages (up to 10), from the specified queue. Using the WaitTimeSeconds parameter enables long-poll support. For more information, see Amazon SQS Long Polling in the Amazon SQS Developer Guide. Short poll is the default behavior where a weighted random set of machines is sampled on a ReceiveMessage call. Therefore, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per ReceiveMessage call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular ReceiveMessage response. If this happens, repeat the request. For each message returned, the response includes the following: The message body. An MD5 digest of the message body. For information about MD5, see RFC1321. The MessageId you received when you sent the message to the queue. The receipt handle. The message attributes. An MD5 digest of the message attributes. The receipt handle is the identifier you must provide when deleting the message. For more information, see Queue and Message Identifiers in the Amazon SQS Developer Guide. You can provide the VisibilityTimeout parameter in your request. The parameter is applied to the messages that Amazon SQS returns in the response. If you don't include the parameter, the overall visibility timeout for the queue is used for the returned messages. The default visibility timeout for a queue is 30 seconds. In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.

```sql
EXEC aws.sqs.messages.receive_message 
@region='{{ region }}' --required 
@@json=
'{
"QueueUrl": "{{ QueueUrl }}", 
"AttributeNames": "{{ AttributeNames }}", 
"MessageSystemAttributeNames": "{{ MessageSystemAttributeNames }}", 
"MessageAttributeNames": "{{ MessageAttributeNames }}", 
"MaxNumberOfMessages": {{ MaxNumberOfMessages }}, 
"VisibilityTimeout": {{ VisibilityTimeout }}, 
"WaitTimeSeconds": {{ WaitTimeSeconds }}, 
"ReceiveRequestAttemptId": "{{ ReceiveRequestAttemptId }}"
}'
;
```
</TabItem>
<TabItem value="send_message">

Delivers a message to the specified queue. A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more information, see the W3C specification for characters. #x9 | #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000 to #x10FFFF If a message contains characters outside the allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to avoid this exception.

```sql
EXEC aws.sqs.messages.send_message 
@region='{{ region }}' --required 
@@json=
'{
"QueueUrl": "{{ QueueUrl }}", 
"MessageBody": "{{ MessageBody }}", 
"DelaySeconds": {{ DelaySeconds }}, 
"MessageAttributes": "{{ MessageAttributes }}", 
"MessageSystemAttributes": "{{ MessageSystemAttributes }}", 
"MessageDeduplicationId": "{{ MessageDeduplicationId }}", 
"MessageGroupId": "{{ MessageGroupId }}"
}'
;
```
</TabItem>
</Tabs>
