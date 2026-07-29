--- 
title: subscription_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - subscription_attributes
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

Creates, updates, deletes, gets or lists a <code>subscription_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscription_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sns.subscription_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_subscription_attributes"
    values={[
        { label: 'get_subscription_attributes', value: 'get_subscription_attributes' }
    ]}
>
<TabItem value="get_subscription_attributes">

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
    <td>A map of the subscription's attributes. Attributes in this map include the following: ConfirmationWasAuthenticated – true if the subscription confirmation request was authenticated. DeliveryPolicy – The JSON serialization of the subscription's delivery policy. EffectiveDeliveryPolicy – The JSON serialization of the effective delivery policy that takes into account the topic delivery policy and account system defaults. FilterPolicy – The filter policy JSON that is assigned to the subscription. For more information, see Amazon SNS Message Filtering in the Amazon SNS Developer Guide. FilterPolicyScope – This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) – The filter is applied on the message attributes. MessageBody – The filter is applied on the message body. Owner – The Amazon Web Services account ID of the subscription's owner. PendingConfirmation – true if the subscription hasn't been confirmed. To confirm a pending subscription, call the ConfirmSubscription action with a confirmation token. RawMessageDelivery – true if raw message delivery is enabled for the subscription. Raw messages are free of JSON formatting and can be sent to HTTP/S and Amazon SQS endpoints. RedrivePolicy – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing. SubscriptionArn – The subscription's ARN. TopicArn – The topic ARN that the subscription is associated with. The following attribute applies only to Amazon Data Firehose delivery stream subscriptions: SubscriptionRoleArn – The ARN of the IAM role that has the following: Permission to write to the Firehose delivery stream Amazon SNS listed as a trusted entity Specifying a valid ARN for this attribute is required for Firehose delivery stream subscriptions. For more information, see Fanout to Firehose delivery streams in the Amazon SNS Developer Guide.</td>
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
    <td><a href="#get_subscription_attributes"><CopyableCode code="get_subscription_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-SubscriptionArn"><code>SubscriptionArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns all of the properties of a subscription.</td>
</tr>
<tr>
    <td><a href="#set_subscription_attributes"><CopyableCode code="set_subscription_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-SubscriptionArn"><code>SubscriptionArn</code></a>, <a href="#parameter-AttributeName"><code>AttributeName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AttributeValue"><code>AttributeValue</code></a></td>
    <td>Allows a subscription owner to set an attribute of the subscription to a new value.</td>
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
    <td>A map of attributes with their corresponding values. The following lists the names, descriptions, and values of the special request parameters that this action uses: DeliveryPolicy – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints. FilterPolicy – The simple JSON object that lets your subscriber receive only a subset of messages, rather than receiving every message published to the topic. FilterPolicyScope – This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) – The filter is applied on the message attributes. MessageBody – The filter is applied on the message body. RawMessageDelivery – When set to true, enables raw message delivery to Amazon SQS or HTTP/S endpoints. This eliminates the need for the endpoints to process JSON formatting, which is otherwise created for Amazon SNS metadata. RedrivePolicy – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing. The following attribute applies only to Amazon Data Firehose delivery stream subscriptions: SubscriptionRoleArn – The ARN of the IAM role that has the following: Permission to write to the Firehose delivery stream Amazon SNS listed as a trusted entity Specifying a valid ARN for this attribute is required for Firehose delivery stream subscriptions. For more information, see Fanout to Firehose delivery streams in the Amazon SNS Developer Guide.</td>
</tr>
<tr id="parameter-SubscriptionArn">
    <td><CopyableCode code="SubscriptionArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the subscription to modify.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AttributeValue">
    <td><CopyableCode code="AttributeValue" /></td>
    <td><code>string</code></td>
    <td>The new value for the attribute in JSON format.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_subscription_attributes"
    values={[
        { label: 'get_subscription_attributes', value: 'get_subscription_attributes' }
    ]}
>
<TabItem value="get_subscription_attributes">

Returns all of the properties of a subscription.

```sql
SELECT
attributes
FROM aws.sns.subscription_attributes
WHERE SubscriptionArn = '{{ SubscriptionArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_subscription_attributes"
    values={[
        { label: 'set_subscription_attributes', value: 'set_subscription_attributes' }
    ]}
>
<TabItem value="set_subscription_attributes">

Allows a subscription owner to set an attribute of the subscription to a new value.

```sql
UPDATE aws.sns.subscription_attributes
SET 
-- No updatable properties
WHERE 
SubscriptionArn = '{{ SubscriptionArn }}' --required
AND AttributeName = '{{ AttributeName }}' --required
AND region = '{{ region }}' --required
AND AttributeValue = '{{ AttributeValue}}';
```
</TabItem>
</Tabs>
