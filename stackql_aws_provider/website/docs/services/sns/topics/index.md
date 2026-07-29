--- 
title: topics
hide_title: false
hide_table_of_contents: false
keywords:
  - topics
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

Creates, updates, deletes, gets or lists a <code>topics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sns.topics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_topics"
    values={[
        { label: 'list_topics', value: 'list_topics' }
    ]}
>
<TabItem value="list_topics">

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
    <td><CopyableCode code="topic_arn" /></td>
    <td><code>string</code></td>
    <td>The topic's ARN.</td>
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
    <td><a href="#list_topics"><CopyableCode code="list_topics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of the requester's topics. Each call returns a limited list of topics, up to 100. If there are more topics, a NextToken is also returned. Use the NextToken parameter in a new ListTopics call to get further results. This action is throttled at 30 transactions per second (TPS).</td>
</tr>
<tr>
    <td><a href="#create_topic"><CopyableCode code="create_topic" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Attributes"><code>Attributes</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-DataProtectionPolicy"><code>DataProtectionPolicy</code></a></td>
    <td>Creates a topic to which notifications can be published. Users can create at most 100,000 standard topics (at most 1,000 FIFO topics). For more information, see Creating an Amazon SNS topic in the Amazon SNS Developer Guide. This action is idempotent, so if the requester already owns a topic with the specified name, that topic's ARN is returned without creating a new topic.</td>
</tr>
<tr>
    <td><a href="#add_permission"><CopyableCode code="add_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TopicArn"><code>TopicArn</code></a>, <a href="#parameter-Label"><code>Label</code></a>, <a href="#parameter-AWSAccountId"><code>AWSAccountId</code></a>, <a href="#parameter-ActionName"><code>ActionName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds a statement to a topic's access control policy, granting access for the specified Amazon Web Services accounts to the specified actions. To remove the ability to change topic permissions, you must deny permissions to the AddPermission, RemovePermission, and SetTopicAttributes actions in your IAM policy.</td>
</tr>
<tr>
    <td><a href="#remove_permission"><CopyableCode code="remove_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TopicArn"><code>TopicArn</code></a>, <a href="#parameter-Label"><code>Label</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a statement from a topic's access control policy. To remove the ability to change topic permissions, you must deny permissions to the AddPermission, RemovePermission, and SetTopicAttributes actions in your IAM policy.</td>
</tr>
<tr>
    <td><a href="#delete_topic"><CopyableCode code="delete_topic" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TopicArn"><code>TopicArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a topic and all its subscriptions. Deleting a topic might prevent some messages previously sent to the topic from being delivered to subscribers. This action is idempotent, so deleting a topic that does not exist does not result in an error.</td>
</tr>
<tr>
    <td><a href="#confirm_subscription"><CopyableCode code="confirm_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TopicArn"><code>TopicArn</code></a>, <a href="#parameter-Token"><code>Token</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AuthenticateOnUnsubscribe"><code>AuthenticateOnUnsubscribe</code></a></td>
    <td>Verifies an endpoint owner's intent to receive messages by validating the token sent to the endpoint by an earlier Subscribe action. If the token is valid, the action creates a new subscription and returns its Amazon Resource Name (ARN). This call requires an AWS signature only when the AuthenticateOnUnsubscribe flag is set to "true".</td>
</tr>
<tr>
    <td><a href="#publish_batch"><CopyableCode code="publish_batch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TopicArn"><code>TopicArn</code></a>, <a href="#parameter-PublishBatchRequestEntries"><code>PublishBatchRequestEntries</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Publishes up to 10 messages to the specified topic in a single batch. This is a batch version of the Publish API. If you try to send more than 10 messages in a single batch request, you will receive a TooManyEntriesInBatchRequest exception. For FIFO topics, multiple messages within a single batch are published in the order they are sent, and messages are deduplicated within the batch and across batches for five minutes. The result of publishing each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200. The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KB (262,144 bytes). The PublishBatch API can send up to 10 messages at a time. If you attempt to send more than 10 messages in one request, you will encounter a TooManyEntriesInBatchRequest exception. In such cases, split your messages into multiple requests, each containing no more than 10 messages. Some actions take lists of parameters. These lists are specified using the param.n notation. Values of n are integers starting from 1. For example, a parameter list with two elements looks like this: &AttributeName.1=first &AttributeName.2=second If you send a batch message to a topic, Amazon SNS publishes the batch message to each endpoint that is subscribed to the topic. The format of the batch message depends on the notification protocol for each subscribed endpoint. When a messageId is returned, the batch message is saved, and Amazon SNS immediately delivers the message to subscribers.</td>
</tr>
<tr>
    <td><a href="#subscribe"><CopyableCode code="subscribe" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TopicArn"><code>TopicArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Protocol"><code>Protocol</code></a>, <a href="#parameter-Endpoint"><code>Endpoint</code></a>, <a href="#parameter-Attributes"><code>Attributes</code></a>, <a href="#parameter-ReturnSubscriptionArn"><code>ReturnSubscriptionArn</code></a></td>
    <td>Subscribes an endpoint to an Amazon SNS topic. If the endpoint type is HTTP/S or email, or if the endpoint and the topic are not in the same Amazon Web Services account, the endpoint owner must run the ConfirmSubscription action to confirm the subscription. You call the ConfirmSubscription action with the token from the subscription response. Confirmation tokens are valid for two days. This action is throttled at 100 transactions per second (TPS).</td>
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
<tr id="parameter-AWSAccountId">
    <td><CopyableCode code="AWSAccountId" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services account IDs of the users (principals) who will be given access to the specified actions. The users must have Amazon Web Services account, but do not need to be signed up for this service.</td>
</tr>
<tr id="parameter-ActionName">
    <td><CopyableCode code="ActionName" /></td>
    <td><code>array</code></td>
    <td>The action you want to allow for the specified principal(s). Valid values: Any Amazon SNS action name, for example Publish.</td>
</tr>
<tr id="parameter-Label">
    <td><CopyableCode code="Label" /></td>
    <td><code>string</code></td>
    <td>The unique label of the statement you want to remove.</td>
</tr>
<tr id="parameter-Name">
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the topic you want to create. Constraints: Topic names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. For a FIFO (first-in-first-out) topic, the name must end with the .fifo suffix.</td>
</tr>
<tr id="parameter-PublishBatchRequestEntries">
    <td><CopyableCode code="PublishBatchRequestEntries" /></td>
    <td><code>array</code></td>
    <td>A list of PublishBatch request entries to be sent to the SNS topic.</td>
</tr>
<tr id="parameter-Token">
    <td><CopyableCode code="Token" /></td>
    <td><code>string</code></td>
    <td>Short-lived token sent to an endpoint during the Subscribe action.</td>
</tr>
<tr id="parameter-TopicArn">
    <td><CopyableCode code="TopicArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the topic you want to subscribe to.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Attributes">
    <td><CopyableCode code="Attributes" /></td>
    <td><code>object</code></td>
    <td>A map of attributes with their corresponding values. The following lists the names, descriptions, and values of the special request parameters that the Subscribe action uses: DeliveryPolicy – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints. FilterPolicy – The simple JSON object that lets your subscriber receive only a subset of messages, rather than receiving every message published to the topic. FilterPolicyScope – This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) – The filter is applied on the message attributes. MessageBody – The filter is applied on the message body. RawMessageDelivery – When set to true, enables raw message delivery to Amazon SQS or HTTP/S endpoints. This eliminates the need for the endpoints to process JSON formatting, which is otherwise created for Amazon SNS metadata. RedrivePolicy – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing. The following attribute applies only to Amazon Data Firehose delivery stream subscriptions: SubscriptionRoleArn – The ARN of the IAM role that has the following: Permission to write to the Firehose delivery stream Amazon SNS listed as a trusted entity Specifying a valid ARN for this attribute is required for Firehose delivery stream subscriptions. For more information, see Fanout to Firehose delivery streams in the Amazon SNS Developer Guide. The following attributes apply only to FIFO topics: ReplayPolicy – Adds or updates an inline policy document for a subscription to replay messages stored in the specified Amazon SNS topic. ReplayStatus – Retrieves the status of the subscription message replay, which can be one of the following: Completed – The replay has successfully redelivered all messages, and is now delivering newly published messages. If an ending point was specified in the ReplayPolicy then the subscription will no longer receive newly published messages. In progress – The replay is currently replaying the selected messages. Failed – The replay was unable to complete. Pending – The default state while the replay initiates.</td>
</tr>
<tr id="parameter-AuthenticateOnUnsubscribe">
    <td><CopyableCode code="AuthenticateOnUnsubscribe" /></td>
    <td><code>string</code></td>
    <td>Disallows unauthenticated unsubscribes of the subscription. If the value of this parameter is true and the request has an Amazon Web Services signature, then only the topic owner and the subscription owner can unsubscribe the endpoint. The unsubscribe action requires Amazon Web Services authentication.</td>
</tr>
<tr id="parameter-DataProtectionPolicy">
    <td><CopyableCode code="DataProtectionPolicy" /></td>
    <td><code>string</code></td>
    <td>The body of the policy document you want to use for this topic. You can only add one policy per topic. The policy must be in JSON string format. Length Constraints: Maximum length of 30,720.</td>
</tr>
<tr id="parameter-Endpoint">
    <td><CopyableCode code="Endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint that you want to receive notifications. Endpoints vary by protocol: For the http protocol, the (public) endpoint is a URL beginning with http:​//. For the https protocol, the (public) endpoint is a URL beginning with https:​//. For the email protocol, the endpoint is an email address. For the email-json protocol, the endpoint is an email address. For the sms protocol, the endpoint is a phone number of an SMS-enabled device. For the sqs protocol, the endpoint is the ARN of an Amazon SQS queue. For the application protocol, the endpoint is the EndpointArn of a mobile app and device. For the lambda protocol, the endpoint is the ARN of an Lambda function. For the firehose protocol, the endpoint is the ARN of an Amazon Data Firehose delivery stream.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Token returned by the previous ListTopics request.</td>
</tr>
<tr id="parameter-Protocol">
    <td><CopyableCode code="Protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol that you want to use. Supported protocols include: http – delivery of JSON-encoded message via HTTP POST https – delivery of JSON-encoded message via HTTPS POST email – delivery of message via SMTP email-json – delivery of JSON-encoded message via SMTP sms – delivery of message via SMS sqs – delivery of JSON-encoded message to an Amazon SQS queue application – delivery of JSON-encoded message to an EndpointArn for a mobile app and device lambda – delivery of JSON-encoded message to an Lambda function firehose – delivery of JSON-encoded message to an Amazon Data Firehose delivery stream.</td>
</tr>
<tr id="parameter-ReturnSubscriptionArn">
    <td><CopyableCode code="ReturnSubscriptionArn" /></td>
    <td><code>boolean</code></td>
    <td>Sets whether the response from the Subscribe request includes the subscription ARN, even if the subscription is not yet confirmed. If you set this parameter to true, the response includes the ARN in all cases, even if the subscription is not yet confirmed. In addition to the ARN for confirmed subscriptions, the response also includes the pending subscription ARN value for subscriptions that aren't yet confirmed. A subscription becomes confirmed when the subscriber calls the ConfirmSubscription action with a confirmation token. The default value is false.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The list of tags to add to a new topic. To be able to tag a topic on creation, you must have the sns:CreateTopic and sns:TagResource permissions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_topics"
    values={[
        { label: 'list_topics', value: 'list_topics' }
    ]}
>
<TabItem value="list_topics">

Returns a list of the requester's topics. Each call returns a limited list of topics, up to 100. If there are more topics, a NextToken is also returned. Use the NextToken parameter in a new ListTopics call to get further results. This action is throttled at 30 transactions per second (TPS).

```sql
SELECT
topic_arn
FROM aws.sns.topics
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_topic"
    values={[
        { label: 'create_topic', value: 'create_topic' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_topic">

Creates a topic to which notifications can be published. Users can create at most 100,000 standard topics (at most 1,000 FIFO topics). For more information, see Creating an Amazon SNS topic in the Amazon SNS Developer Guide. This action is idempotent, so if the requester already owns a topic with the specified name, that topic's ARN is returned without creating a new topic.

```sql
INSERT INTO aws.sns.topics (
Name,
region,
Attributes,
Tags,
DataProtectionPolicy
)
SELECT 
'{{ Name }}',
'{{ region }}',
'{{ Attributes }}',
'{{ Tags }}',
'{{ DataProtectionPolicy }}'
RETURNING
topic_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: topics
  props:
    - name: Name
      value: "{{ Name }}"
      description: Required parameter for the topics resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the topics resource.
    - name: Attributes
      value: "{{ Attributes }}"
      description: A map of attributes with their corresponding values. The following lists names, descriptions, and values of the special request parameters that the CreateTopic action uses: DeliveryPolicy – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints. DisplayName – The display name to use for a topic with SMS subscriptions. Policy – The policy that defines who can access your topic. By default, only the topic owner can publish or subscribe to the topic. TracingConfig – Tracing mode of an Amazon SNS topic. By default TracingConfig is set to PassThrough, and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to Active, Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. This is only supported on standard topics. HTTP HTTPSuccessFeedbackRoleArn – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint. HTTPSuccessFeedbackSampleRate – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an HTTP endpoint. HTTPFailureFeedbackRoleArn – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint. Amazon Data Firehose FirehoseSuccessFeedbackRoleArn – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Data Firehose endpoint. FirehoseSuccessFeedbackSampleRate – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon Data Firehose endpoint. FirehoseFailureFeedbackRoleArn – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Data Firehose endpoint. Lambda LambdaSuccessFeedbackRoleArn – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint. LambdaSuccessFeedbackSampleRate – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Lambda endpoint. LambdaFailureFeedbackRoleArn – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint. Platform application endpoint ApplicationSuccessFeedbackRoleArn – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to a platform application endpoint. ApplicationSuccessFeedbackSampleRate – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an platform application endpoint. ApplicationFailureFeedbackRoleArn – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an platform application endpoint. In addition to being able to configure topic attributes for message delivery status of notification messages sent to Amazon SNS application endpoints, you can also configure application attributes for the delivery status of push notification messages sent to push notification services. For example, For more information, see Using Amazon SNS Application Attributes for Message Delivery Status. Amazon SQS SQSSuccessFeedbackRoleArn – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. SQSSuccessFeedbackSampleRate – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. SQSFailureFeedbackRoleArn – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. The \`<ENDPOINT>\`SuccessFeedbackRoleArn and \`<ENDPOINT>\`FailureFeedbackRoleArn attributes are used to give Amazon SNS write access to use CloudWatch Logs on your behalf. The \`<ENDPOINT>\`SuccessFeedbackSampleRate attribute is for specifying the sample rate percentage (0-100) of successfully delivered messages. After you configure the \`<ENDPOINT>\`FailureFeedbackRoleArn attribute, then all failed message deliveries generate CloudWatch Logs. The following attribute applies only to server-side encryption: KmsMasterKeyId – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see Key Terms. For more examples, see KeyId in the Key Management Service API Reference. The following attributes apply only to FIFO topics: ArchivePolicy – The policy that sets the retention period for messages stored in the message archive of an Amazon SNS FIFO topic. ContentBasedDeduplication – Enables content-based deduplication for FIFO topics. By default, ContentBasedDeduplication is set to false. If you create a FIFO topic and this attribute is false, you must specify a value for the MessageDeduplicationId parameter for the Publish action. When you set ContentBasedDeduplication to true, Amazon SNS uses a SHA-256 hash to generate the MessageDeduplicationId using the body of the message (but not the attributes of the message). (Optional) To override the generated value, you can specify a value for the MessageDeduplicationId parameter for the Publish action. FifoThroughputScope – Enables higher throughput for your FIFO topic by adjusting the scope of deduplication. This attribute has two possible values: Topic – The scope of message deduplication is across the entire topic. This is the default value and maintains existing behavior, with a maximum throughput of 3000 messages per second or 20MB per second, whichever comes first. MessageGroup – The scope of deduplication is within each individual message group, which enables higher throughput per topic subject to regional quotas. For more information on quotas or to request an increase, see Amazon SNS service quotas in the Amazon Web Services General Reference.
      description: A map of attributes with their corresponding values. The following lists names, descriptions, and values of the special request parameters that the CreateTopic action uses: DeliveryPolicy – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints. DisplayName – The display name to use for a topic with SMS subscriptions. Policy – The policy that defines who can access your topic. By default, only the topic owner can publish or subscribe to the topic. TracingConfig – Tracing mode of an Amazon SNS topic. By default TracingConfig is set to PassThrough, and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to Active, Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. This is only supported on standard topics. HTTP HTTPSuccessFeedbackRoleArn – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint. HTTPSuccessFeedbackSampleRate – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an HTTP endpoint. HTTPFailureFeedbackRoleArn – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint. Amazon Data Firehose FirehoseSuccessFeedbackRoleArn – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Data Firehose endpoint. FirehoseSuccessFeedbackSampleRate – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon Data Firehose endpoint. FirehoseFailureFeedbackRoleArn – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Data Firehose endpoint. Lambda LambdaSuccessFeedbackRoleArn – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint. LambdaSuccessFeedbackSampleRate – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Lambda endpoint. LambdaFailureFeedbackRoleArn – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint. Platform application endpoint ApplicationSuccessFeedbackRoleArn – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to a platform application endpoint. ApplicationSuccessFeedbackSampleRate – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an platform application endpoint. ApplicationFailureFeedbackRoleArn – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an platform application endpoint. In addition to being able to configure topic attributes for message delivery status of notification messages sent to Amazon SNS application endpoints, you can also configure application attributes for the delivery status of push notification messages sent to push notification services. For example, For more information, see Using Amazon SNS Application Attributes for Message Delivery Status. Amazon SQS SQSSuccessFeedbackRoleArn – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. SQSSuccessFeedbackSampleRate – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. SQSFailureFeedbackRoleArn – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. The \`<ENDPOINT>\`SuccessFeedbackRoleArn and \`<ENDPOINT>\`FailureFeedbackRoleArn attributes are used to give Amazon SNS write access to use CloudWatch Logs on your behalf. The \`<ENDPOINT>\`SuccessFeedbackSampleRate attribute is for specifying the sample rate percentage (0-100) of successfully delivered messages. After you configure the \`<ENDPOINT>\`FailureFeedbackRoleArn attribute, then all failed message deliveries generate CloudWatch Logs. The following attribute applies only to server-side encryption: KmsMasterKeyId – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see Key Terms. For more examples, see KeyId in the Key Management Service API Reference. The following attributes apply only to FIFO topics: ArchivePolicy – The policy that sets the retention period for messages stored in the message archive of an Amazon SNS FIFO topic. ContentBasedDeduplication – Enables content-based deduplication for FIFO topics. By default, ContentBasedDeduplication is set to false. If you create a FIFO topic and this attribute is false, you must specify a value for the MessageDeduplicationId parameter for the Publish action. When you set ContentBasedDeduplication to true, Amazon SNS uses a SHA-256 hash to generate the MessageDeduplicationId using the body of the message (but not the attributes of the message). (Optional) To override the generated value, you can specify a value for the MessageDeduplicationId parameter for the Publish action. FifoThroughputScope – Enables higher throughput for your FIFO topic by adjusting the scope of deduplication. This attribute has two possible values: Topic – The scope of message deduplication is across the entire topic. This is the default value and maintains existing behavior, with a maximum throughput of 3000 messages per second or 20MB per second, whichever comes first. MessageGroup – The scope of deduplication is within each individual message group, which enables higher throughput per topic subject to regional quotas. For more information on quotas or to request an increase, see Amazon SNS service quotas in the Amazon Web Services General Reference.
    - name: Tags
      value: "{{ Tags }}"
      description: The list of tags to add to a new topic. To be able to tag a topic on creation, you must have the sns:CreateTopic and sns:TagResource permissions.
      description: The list of tags to add to a new topic. To be able to tag a topic on creation, you must have the sns:CreateTopic and sns:TagResource permissions.
    - name: DataProtectionPolicy
      value: "{{ DataProtectionPolicy }}"
      description: The body of the policy document you want to use for this topic. You can only add one policy per topic. The policy must be in JSON string format. Length Constraints: Maximum length of 30,720.
      description: The body of the policy document you want to use for this topic. You can only add one policy per topic. The policy must be in JSON string format. Length Constraints: Maximum length of 30,720.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_permission"
    values={[
        { label: 'add_permission', value: 'add_permission' },
        { label: 'remove_permission', value: 'remove_permission' }
    ]}
>
<TabItem value="add_permission">

Adds a statement to a topic's access control policy, granting access for the specified Amazon Web Services accounts to the specified actions. To remove the ability to change topic permissions, you must deny permissions to the AddPermission, RemovePermission, and SetTopicAttributes actions in your IAM policy.

```sql
UPDATE aws.sns.topics
SET 
-- No updatable properties
WHERE 
TopicArn = '{{ TopicArn }}' --required
AND Label = '{{ Label }}' --required
AND AWSAccountId = '{{ AWSAccountId }}' --required
AND ActionName = '{{ ActionName }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="remove_permission">

Removes a statement from a topic's access control policy. To remove the ability to change topic permissions, you must deny permissions to the AddPermission, RemovePermission, and SetTopicAttributes actions in your IAM policy.

```sql
UPDATE aws.sns.topics
SET 
-- No updatable properties
WHERE 
TopicArn = '{{ TopicArn }}' --required
AND Label = '{{ Label }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_topic"
    values={[
        { label: 'delete_topic', value: 'delete_topic' }
    ]}
>
<TabItem value="delete_topic">

Deletes a topic and all its subscriptions. Deleting a topic might prevent some messages previously sent to the topic from being delivered to subscribers. This action is idempotent, so deleting a topic that does not exist does not result in an error.

```sql
DELETE FROM aws.sns.topics
WHERE TopicArn = '{{ TopicArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="confirm_subscription"
    values={[
        { label: 'confirm_subscription', value: 'confirm_subscription' },
        { label: 'publish_batch', value: 'publish_batch' },
        { label: 'subscribe', value: 'subscribe' }
    ]}
>
<TabItem value="confirm_subscription">

Verifies an endpoint owner's intent to receive messages by validating the token sent to the endpoint by an earlier Subscribe action. If the token is valid, the action creates a new subscription and returns its Amazon Resource Name (ARN). This call requires an AWS signature only when the AuthenticateOnUnsubscribe flag is set to "true".

```sql
EXEC aws.sns.topics.confirm_subscription 
@TopicArn='{{ TopicArn }}' --required, 
@Token='{{ Token }}' --required, 
@region='{{ region }}' --required, 
@AuthenticateOnUnsubscribe='{{ AuthenticateOnUnsubscribe }}'
;
```
</TabItem>
<TabItem value="publish_batch">

Publishes up to 10 messages to the specified topic in a single batch. This is a batch version of the Publish API. If you try to send more than 10 messages in a single batch request, you will receive a TooManyEntriesInBatchRequest exception. For FIFO topics, multiple messages within a single batch are published in the order they are sent, and messages are deduplicated within the batch and across batches for five minutes. The result of publishing each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200. The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KB (262,144 bytes). The PublishBatch API can send up to 10 messages at a time. If you attempt to send more than 10 messages in one request, you will encounter a TooManyEntriesInBatchRequest exception. In such cases, split your messages into multiple requests, each containing no more than 10 messages. Some actions take lists of parameters. These lists are specified using the param.n notation. Values of n are integers starting from 1. For example, a parameter list with two elements looks like this: &AttributeName.1=first &AttributeName.2=second If you send a batch message to a topic, Amazon SNS publishes the batch message to each endpoint that is subscribed to the topic. The format of the batch message depends on the notification protocol for each subscribed endpoint. When a messageId is returned, the batch message is saved, and Amazon SNS immediately delivers the message to subscribers.

```sql
EXEC aws.sns.topics.publish_batch 
@TopicArn='{{ TopicArn }}' --required, 
@PublishBatchRequestEntries='{{ PublishBatchRequestEntries }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="subscribe">

Subscribes an endpoint to an Amazon SNS topic. If the endpoint type is HTTP/S or email, or if the endpoint and the topic are not in the same Amazon Web Services account, the endpoint owner must run the ConfirmSubscription action to confirm the subscription. You call the ConfirmSubscription action with the token from the subscription response. Confirmation tokens are valid for two days. This action is throttled at 100 transactions per second (TPS).

```sql
EXEC aws.sns.topics.subscribe 
@TopicArn='{{ TopicArn }}' --required, 
@region='{{ region }}' --required, 
@Protocol='{{ Protocol }}', 
@Endpoint='{{ Endpoint }}', 
@Attributes='{{ Attributes }}', 
@ReturnSubscriptionArn={{ ReturnSubscriptionArn }}
;
```
</TabItem>
</Tabs>
