--- 
title: topic_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_attributes
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

Creates, updates, deletes, gets or lists a <code>topic_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topic_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sns.topic_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_topic_attributes"
    values={[
        { label: 'get_topic_attributes', value: 'get_topic_attributes' }
    ]}
>
<TabItem value="get_topic_attributes">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>string</code></td>
    <td>A map of the topic's attributes. Attributes in this map include the following: DeliveryPolicy – The JSON serialization of the topic's delivery policy. DisplayName – The human-readable name used in the From field for notifications to email and email-json endpoints. EffectiveDeliveryPolicy – The JSON serialization of the effective delivery policy, taking system defaults into account. Owner – The Amazon Web Services account ID of the topic's owner. Policy – The JSON serialization of the topic's access control policy. SignatureVersion – The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. By default, SignatureVersion is set to 1. The signature is a Base64-encoded SHA1withRSA signature. When you set SignatureVersion to 2. Amazon SNS uses a Base64-encoded SHA256withRSA signature. If the API response does not include the SignatureVersion attribute, it means that the SignatureVersion for the topic has value 1. SubscriptionsConfirmed – The number of confirmed subscriptions for the topic. SubscriptionsDeleted – The number of deleted subscriptions for the topic. SubscriptionsPending – The number of subscriptions pending confirmation for the topic. TopicArn – The topic's ARN. TracingConfig – Tracing mode of an Amazon SNS topic. By default TracingConfig is set to PassThrough, and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to Active, Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. This is only supported on standard topics. The following attribute applies only to server-side-encryption: KmsMasterKeyId - The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see Key Terms. For more examples, see KeyId in the Key Management Service API Reference. The following attributes apply only to FIFO topics: ArchivePolicy – The policy that sets the retention period for messages stored in the message archive of an Amazon SNS FIFO topic. BeginningArchiveTime – The earliest starting point at which a message in the topic’s archive can be replayed from. This point in time is based on the configured message retention period set by the topic’s message archiving policy. ContentBasedDeduplication – Enables content-based deduplication for FIFO topics. By default, ContentBasedDeduplication is set to false. If you create a FIFO topic and this attribute is false, you must specify a value for the MessageDeduplicationId parameter for the Publish action. When you set ContentBasedDeduplication to true, Amazon SNS uses a SHA-256 hash to generate the MessageDeduplicationId using the body of the message (but not the attributes of the message). (Optional) To override the generated value, you can specify a value for the MessageDeduplicationId parameter for the Publish action. FifoTopic – When this is set to true, a FIFO topic is created.</td>
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
    <td><a href="#get_topic_attributes"><CopyableCode code="get_topic_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TopicArn"><code>TopicArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns all of the properties of a topic. Topic properties returned might differ based on the authorization of the user.</td>
</tr>
<tr>
    <td><a href="#set_topic_attributes"><CopyableCode code="set_topic_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TopicArn"><code>TopicArn</code></a>, <a href="#parameter-AttributeName"><code>AttributeName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AttributeValue"><code>AttributeValue</code></a></td>
    <td>Allows a topic owner to set an attribute of the topic to a new value. To remove the ability to change topic permissions, you must deny permissions to the AddPermission, RemovePermission, and SetTopicAttributes actions in your IAM policy.</td>
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
<tr id="parameter-AttributeName">
    <td><CopyableCode code="AttributeName" /></td>
    <td><code>string</code></td>
    <td>A map of attributes with their corresponding values. The following lists the names, descriptions, and values of the special request parameters that the SetTopicAttributes action uses: DeliveryPolicy – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints. DisplayName – The display name to use for a topic with SMS subscriptions. Policy – The policy that defines who can access your topic. By default, only the topic owner can publish or subscribe to the topic. TracingConfig – Tracing mode of an Amazon SNS topic. By default TracingConfig is set to PassThrough, and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to Active, Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. This is only supported on standard topics. HTTP HTTPSuccessFeedbackRoleArn – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint. HTTPSuccessFeedbackSampleRate – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an HTTP endpoint. HTTPFailureFeedbackRoleArn – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint. Amazon Data Firehose FirehoseSuccessFeedbackRoleArn – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Data Firehose endpoint. FirehoseSuccessFeedbackSampleRate – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon Data Firehose endpoint. FirehoseFailureFeedbackRoleArn – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Data Firehose endpoint. Lambda LambdaSuccessFeedbackRoleArn – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint. LambdaSuccessFeedbackSampleRate – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Lambda endpoint. LambdaFailureFeedbackRoleArn – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint. Platform application endpoint ApplicationSuccessFeedbackRoleArn – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an platform application endpoint. ApplicationSuccessFeedbackSampleRate – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an platform application endpoint. ApplicationFailureFeedbackRoleArn – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an platform application endpoint. In addition to being able to configure topic attributes for message delivery status of notification messages sent to Amazon SNS application endpoints, you can also configure application attributes for the delivery status of push notification messages sent to push notification services. For example, For more information, see Using Amazon SNS Application Attributes for Message Delivery Status. Amazon SQS SQSSuccessFeedbackRoleArn – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. SQSSuccessFeedbackSampleRate – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. SQSFailureFeedbackRoleArn – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. The <code>&lt;ENDPOINT&gt;</code>SuccessFeedbackRoleArn and <code>&lt;ENDPOINT&gt;</code>FailureFeedbackRoleArn attributes are used to give Amazon SNS write access to use CloudWatch Logs on your behalf. The <code>&lt;ENDPOINT&gt;</code>SuccessFeedbackSampleRate attribute is for specifying the sample rate percentage (0-100) of successfully delivered messages. After you configure the <code>&lt;ENDPOINT&gt;</code>FailureFeedbackRoleArn attribute, then all failed message deliveries generate CloudWatch Logs. The following attribute applies only to server-side-encryption: KmsMasterKeyId – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see Key Terms. For more examples, see KeyId in the Key Management Service API Reference. SignatureVersion – The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. By default, SignatureVersion is set to 1. The following attribute applies only to FIFO topics: ArchivePolicy – The policy that sets the retention period for messages stored in the message archive of an Amazon SNS FIFO topic. ContentBasedDeduplication – Enables content-based deduplication for FIFO topics. By default, ContentBasedDeduplication is set to false. If you create a FIFO topic and this attribute is false, you must specify a value for the MessageDeduplicationId parameter for the Publish action. When you set ContentBasedDeduplication to true, Amazon SNS uses a SHA-256 hash to generate the MessageDeduplicationId using the body of the message (but not the attributes of the message). (Optional) To override the generated value, you can specify a value for the MessageDeduplicationId parameter for the Publish action. FifoThroughputScope – Enables higher throughput for your FIFO topic by adjusting the scope of deduplication. This attribute has two possible values: Topic – The scope of message deduplication is across the entire topic. This is the default value and maintains existing behavior, with a maximum throughput of 3000 messages per second or 20MB per second, whichever comes first. MessageGroup – The scope of deduplication is within each individual message group, which enables higher throughput per topic subject to regional quotas. For more information on quotas or to request an increase, see Amazon SNS service quotas in the Amazon Web Services General Reference.</td>
</tr>
<tr id="parameter-TopicArn">
    <td><CopyableCode code="TopicArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the topic to modify.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AttributeValue">
    <td><CopyableCode code="AttributeValue" /></td>
    <td><code>string</code></td>
    <td>The new value for the attribute.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_topic_attributes"
    values={[
        { label: 'get_topic_attributes', value: 'get_topic_attributes' }
    ]}
>
<TabItem value="get_topic_attributes">

Returns all of the properties of a topic. Topic properties returned might differ based on the authorization of the user.

```sql
SELECT
attributes
FROM aws.sns.topic_attributes
WHERE TopicArn = '{{ TopicArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_topic_attributes"
    values={[
        { label: 'set_topic_attributes', value: 'set_topic_attributes' }
    ]}
>
<TabItem value="set_topic_attributes">

Allows a topic owner to set an attribute of the topic to a new value. To remove the ability to change topic permissions, you must deny permissions to the AddPermission, RemovePermission, and SetTopicAttributes actions in your IAM policy.

```sql
UPDATE aws.sns.topic_attributes
SET 
-- No updatable properties
WHERE 
TopicArn = '{{ TopicArn }}' --required
AND AttributeName = '{{ AttributeName }}' --required
AND region = '{{ region }}' --required
AND AttributeValue = '{{ AttributeValue}}';
```
</TabItem>
</Tabs>
