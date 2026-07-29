--- 
title: queues
hide_title: false
hide_table_of_contents: false
keywords:
  - queues
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

Creates, updates, deletes, gets or lists a <code>queues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="queues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sqs.queues" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_queues"
    values={[
        { label: 'list_queues', value: 'list_queues' }
    ]}
>
<TabItem value="list_queues">

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
    <td><CopyableCode code="queue_url" /></td>
    <td><code>string</code></td>
    <td>A list of queue URLs, up to 1,000 entries, or the value of MaxResults that you sent in the request.</td>
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
    <td><a href="#list_queues"><CopyableCode code="list_queues" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you specify a value for the optional QueueNamePrefix parameter, only queues with a name that begins with the specified value are returned. The listQueues methods supports pagination. Set parameter MaxResults in the request to specify the maximum number of results to be returned in the response. If you do not set MaxResults, the response includes a maximum of 1,000 results. If you set MaxResults and there are additional results to display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to listQueues to receive the next page of results. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_queue"><CopyableCode code="create_queue" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueueName"><code>QueueName</code></a></td>
    <td></td>
    <td>Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following in mind: If you don't specify the FifoQueue attribute, Amazon SQS creates a standard queue. You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see Moving From a standard queue to a FIFO queue in the Amazon SQS Developer Guide. If you don't provide a value for an attribute, the queue is created with the default value for the attribute. If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name. To successfully create a new queue, you must provide a queue name that adheres to the limits related to queues and is unique within the scope of your queues. After you create a queue, you must wait at least one second after the queue is created to be able to use the queue. To retrieve the URL of a queue, use the GetQueueUrl action. This action only requires the QueueName parameter. When creating queues, keep the following points in mind: If you specify the name of an existing queue and provide the exact same names and values for all its attributes, the CreateQueue action will return the URL of the existing queue instead of creating a new one. If you attempt to create a queue with a name that already exists but with different attribute names or values, the CreateQueue action will return an error. This ensures that existing queues are not inadvertently altered. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_queue"><CopyableCode code="delete_queue" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the queue specified by the QueueUrl, regardless of the queue's contents. Be careful with the DeleteQueue action: When you delete a queue, any messages in the queue are no longer available. When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a SendMessage request might succeed, but after 60 seconds the queue and the message you sent no longer exist. When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. The delete operation uses the HTTP GET verb.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="list_queues"
    values={[
        { label: 'list_queues', value: 'list_queues' }
    ]}
>
<TabItem value="list_queues">

Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you specify a value for the optional QueueNamePrefix parameter, only queues with a name that begins with the specified value are returned. The listQueues methods supports pagination. Set parameter MaxResults in the request to specify the maximum number of results to be returned in the response. If you do not set MaxResults, the response includes a maximum of 1,000 results. If you set MaxResults and there are additional results to display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to listQueues to receive the next page of results. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

```sql
SELECT
queue_url
FROM aws.sqs.queues
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_queue"
    values={[
        { label: 'create_queue', value: 'create_queue' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_queue">

Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following in mind: If you don't specify the FifoQueue attribute, Amazon SQS creates a standard queue. You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see Moving From a standard queue to a FIFO queue in the Amazon SQS Developer Guide. If you don't provide a value for an attribute, the queue is created with the default value for the attribute. If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name. To successfully create a new queue, you must provide a queue name that adheres to the limits related to queues and is unique within the scope of your queues. After you create a queue, you must wait at least one second after the queue is created to be able to use the queue. To retrieve the URL of a queue, use the GetQueueUrl action. This action only requires the QueueName parameter. When creating queues, keep the following points in mind: If you specify the name of an existing queue and provide the exact same names and values for all its attributes, the CreateQueue action will return the URL of the existing queue instead of creating a new one. If you attempt to create a queue with a name that already exists but with different attribute names or values, the CreateQueue action will return an error. This ensures that existing queues are not inadvertently altered. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

```sql
INSERT INTO aws.sqs.queues (
QueueName,
Attributes,
tags,
region
)
SELECT 
'{{ QueueName }}' /* required */,
'{{ Attributes }}',
'{{ tags }}',
'{{ region }}'
RETURNING
queue_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: queues
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the queues resource.
    - name: QueueName
      value: "{{ QueueName }}"
      description: |
        The name of the new queue. The following limits apply to this name: A queue name can have up to 80 characters. Valid values: alphanumeric characters, hyphens (-), and underscores (_). A FIFO queue name must end with the .fifo suffix. Queue URLs and names are case-sensitive.
    - name: Attributes
      value: "{{ Attributes }}"
      description: |
        A map of attributes with their corresponding values. The following lists the names, descriptions, and values of the special request parameters that the CreateQueue action uses: DelaySeconds – The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 seconds (15 minutes). Default: 0. MaximumMessageSize – The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) to 1,048,576 bytes (1 MiB). Default: 1,048,576 bytes (1 MiB). MessageRetentionPeriod – The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer from 60 seconds (1 minute) to 1,209,600 seconds (14 days). Default: 345,600 (4 days). When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the MessageRetentionPeriod attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the MessageRetentionPeriod is reduced below the age of existing messages. Policy – The queue's policy. A valid Amazon Web Services policy. For more information about policy structure, see Overview of Amazon Web Services IAM Policies in the IAM User Guide. ReceiveMessageWaitTimeSeconds – The length of time, in seconds, for which a ReceiveMessage action waits for a message to arrive. Valid values: An integer from 0 to 20 (seconds). Default: 0. VisibilityTimeout – The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see Visibility Timeout in the Amazon SQS Developer Guide. The following attributes apply only to dead-letter queues: RedrivePolicy – The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows: deadLetterTargetArn – The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of maxReceiveCount is exceeded. maxReceiveCount – The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the ReceiveCount for a message exceeds the maxReceiveCount for a queue, Amazon SQS moves the message to the dead-letter-queue. RedriveAllowPolicy – The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows: redrivePermission – The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are: allowAll – (Default) Any source queues in this Amazon Web Services account in the same Region can specify this queue as the dead-letter queue. denyAll – No source queues can specify this queue as the dead-letter queue. byQueue – Only queues specified by the sourceQueueArns parameter can specify this queue as the dead-letter queue. sourceQueueArns – The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the redrivePermission parameter is set to byQueue. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the redrivePermission parameter to allowAll. The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue. The following attributes apply only to server-side-encryption: KmsMasterKeyId – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see Key Terms. While the alias of the Amazon Web Services managed CMK for Amazon SQS is always alias/aws/sqs, the alias of a custom CMK can, for example, be alias/MyAlias . For more examples, see KeyId in the Key Management Service API Reference. KmsDataKeyReusePeriodSeconds – The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling KMS again. An integer representing seconds, between 60 seconds (1 minute) and 86,400 seconds (24 hours). Default: 300 (5 minutes). A shorter time period provides better security but results in more calls to KMS which might incur charges after Free Tier. For more information, see How Does the Data Key Reuse Period Work? SqsManagedSseEnabled – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, SSE-KMS or SSE-SQS). The following attributes apply only to FIFO (first-in-first-out) queues: FifoQueue – Designates a queue as FIFO. Valid values are true and false. If you don't specify the FifoQueue attribute, Amazon SQS creates a standard queue. You can provide this attribute only during queue creation. You can't change it for an existing queue. When you set this attribute, you must also provide the MessageGroupId for your messages explicitly. For more information, see FIFO queue logic in the Amazon SQS Developer Guide. ContentBasedDeduplication – Enables content-based deduplication. Valid values are true and false. For more information, see Exactly-once processing in the Amazon SQS Developer Guide. Note the following: Every message must have a unique MessageDeduplicationId. You may provide a MessageDeduplicationId explicitly. If you aren't able to provide a MessageDeduplicationId and you enable ContentBasedDeduplication for your queue, Amazon SQS uses a SHA-256 hash to generate the MessageDeduplicationId using the body of the message (but not the attributes of the message). If you don't provide a MessageDeduplicationId and the queue doesn't have ContentBasedDeduplication set, the action fails with an error. If the queue has ContentBasedDeduplication set, your MessageDeduplicationId overrides the generated one. When ContentBasedDeduplication is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered. If you send one message with ContentBasedDeduplication enabled and then another message with a MessageDeduplicationId that is the same as the one generated for the first MessageDeduplicationId, the two messages are treated as duplicates and only one copy of the message is delivered. The following attributes apply only to high throughput for FIFO queues: DeduplicationScope – Specifies whether message deduplication occurs at the message group or queue level. Valid values are messageGroup and queue. FifoThroughputLimit – Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are perQueue and perMessageGroupId. The perMessageGroupId value is allowed only when the value for DeduplicationScope is messageGroup. To enable high throughput for FIFO queues, do the following: Set DeduplicationScope to messageGroup. Set FifoThroughputLimit to perMessageGroupId. If you set these attributes to anything other than the values shown for enabling high throughput, normal throughput is in effect and deduplication occurs as specified. For information on throughput quotas, see Quotas related to messages in the Amazon SQS Developer Guide.
    - name: tags
      value: "{{ tags }}"
      description: |
        Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding more than 50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS Developer Guide. To be able to tag a queue on creation, you must have the sqs:CreateQueue and sqs:TagQueue permissions. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_queue"
    values={[
        { label: 'delete_queue', value: 'delete_queue' }
    ]}
>
<TabItem value="delete_queue">

Deletes the queue specified by the QueueUrl, regardless of the queue's contents. Be careful with the DeleteQueue action: When you delete a queue, any messages in the queue are no longer available. When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a SendMessage request might succeed, but after 60 seconds the queue and the message you sent no longer exist. When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. The delete operation uses the HTTP GET verb.

```sql
DELETE FROM aws.sqs.queues
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
