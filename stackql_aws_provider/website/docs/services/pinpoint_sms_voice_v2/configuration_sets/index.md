--- 
title: configuration_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_sets
  - pinpoint_sms_voice_v2
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

Creates, updates, deletes, gets or lists a <code>configuration_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.configuration_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_configuration_sets"
    values={[
        { label: 'describe_configuration_sets', value: 'describe_configuration_sets' }
    ]}
>
<TabItem value="describe_configuration_sets">

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
    <td><CopyableCode code="configuration_set_arn" /></td>
    <td><code>string</code></td>
    <td>The Resource Name (ARN) of the ConfigurationSet.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_set_name" /></td>
    <td><code>string</code></td>
    <td>The name of the ConfigurationSet. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the ConfigurationSet was created, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="default_message_feedback_enabled" /></td>
    <td><code>boolean</code></td>
    <td>True if message feedback is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="default_message_type" /></td>
    <td><code>string</code></td>
    <td>The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive. (TRANSACTIONAL, PROMOTIONAL)</td>
</tr>
<tr>
    <td><CopyableCode code="default_sender_id" /></td>
    <td><code>string</code></td>
    <td>The default sender ID used by the ConfigurationSet. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_destinations" /></td>
    <td><code>array</code></td>
    <td>An array of EventDestination objects that describe any events to log and where to log them.</td>
</tr>
<tr>
    <td><CopyableCode code="protect_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the protect configuration. (pattern: &lt;code&gt;&#91;A-Za-z0-9_:/-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_configuration_sets"><CopyableCode code="describe_configuration_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified configuration sets or all in your account. If you specify configuration set names, the output includes information for only the specified configuration sets. If you specify filters, the output includes information for only those configuration sets that meet the filter criteria. If you don't specify configuration set names or filters, the output includes information for all configuration sets. If you specify a configuration set name that isn't valid, an error is returned.</td>
</tr>
<tr>
    <td><a href="#create_event_destination"><CopyableCode code="create_event_destination" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-EventDestinationName"><code>EventDestinationName</code></a>, <a href="#parameter-MatchingEventTypes"><code>MatchingEventTypes</code></a></td>
    <td></td>
    <td>Creates a new event destination in a configuration set. An event destination is a location where you send message events. The event options are Amazon CloudWatch, Amazon Data Firehose, or Amazon SNS. For example, when a message is delivered successfully, you can send information about that event to an event destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic. You can only create one event destination at a time. You must provide a value for a single event destination using either CloudWatchLogsDestination, KinesisFirehoseDestination or SnsDestination. If an event destination isn't provided then an exception is returned. Each configuration set can contain between 0 and 5 event destinations. Each event destination can contain a reference to a single destination, such as a CloudWatch or Firehose destination.</td>
</tr>
<tr>
    <td><a href="#create_configuration_set"><CopyableCode code="create_configuration_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a></td>
    <td></td>
    <td>Creates a new configuration set. After you create the configuration set, you can add one or more event destinations to it. A configuration set is a set of rules that you apply to the SMS and voice messages that you send. When you send a message, you can optionally specify a single configuration set.</td>
</tr>
<tr>
    <td><a href="#set_default_message_feedback_enabled"><CopyableCode code="set_default_message_feedback_enabled" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-MessageFeedbackEnabled"><code>MessageFeedbackEnabled</code></a></td>
    <td></td>
    <td>Sets a configuration set's default for message feedback.</td>
</tr>
<tr>
    <td><a href="#set_default_message_type"><CopyableCode code="set_default_message_type" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-MessageType"><code>MessageType</code></a></td>
    <td></td>
    <td>Sets the default message type on a configuration set. Choose the category of SMS messages that you plan to send from this account. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose Transactional. If you plan to send messages that contain marketing material or other promotional content, choose Promotional. This setting applies to your entire Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#update_event_destination"><CopyableCode code="update_event_destination" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-EventDestinationName"><code>EventDestinationName</code></a></td>
    <td></td>
    <td>Updates an existing event destination in a configuration set. You can update the IAM role ARN for CloudWatch Logs and Firehose. You can also enable or disable the event destination. You may want to update an event destination to change its matching event types or updating the destination resource ARN. You can't change an event destination's type between CloudWatch Logs, Firehose, and Amazon SNS.</td>
</tr>
<tr>
    <td><a href="#delete_event_destination"><CopyableCode code="delete_event_destination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing event destination. An event destination is a location where you send response information about the messages that you send. For example, when a message is delivered successfully, you can send information about that event to an Amazon CloudWatch destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</td>
</tr>
<tr>
    <td><a href="#delete_configuration_set"><CopyableCode code="delete_configuration_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing configuration set. A configuration set is a set of rules that you apply to voice and SMS messages that you send. In a configuration set, you can specify a destination for specific types of events related to voice and SMS messages.</td>
</tr>
<tr>
    <td><a href="#delete_default_message_type"><CopyableCode code="delete_default_message_type" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a></td>
    <td></td>
    <td>Deletes an existing default message type on a configuration set. A message type is a type of messages that you plan to send. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose Transactional. If you plan to send messages that contain marketing material or other promotional content, choose Promotional. This setting applies to your entire Amazon Web Services account.</td>
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
    defaultValue="describe_configuration_sets"
    values={[
        { label: 'describe_configuration_sets', value: 'describe_configuration_sets' }
    ]}
>
<TabItem value="describe_configuration_sets">

Describes the specified configuration sets or all in your account. If you specify configuration set names, the output includes information for only the specified configuration sets. If you specify filters, the output includes information for only those configuration sets that meet the filter criteria. If you don't specify configuration set names or filters, the output includes information for all configuration sets. If you specify a configuration set name that isn't valid, an error is returned.

```sql
SELECT
configuration_set_arn,
configuration_set_name,
created_timestamp,
default_message_feedback_enabled,
default_message_type,
default_sender_id,
event_destinations,
protect_configuration_id
FROM aws.pinpoint_sms_voice_v2.configuration_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_event_destination"
    values={[
        { label: 'create_event_destination', value: 'create_event_destination' },
        { label: 'create_configuration_set', value: 'create_configuration_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_event_destination">

Creates a new event destination in a configuration set. An event destination is a location where you send message events. The event options are Amazon CloudWatch, Amazon Data Firehose, or Amazon SNS. For example, when a message is delivered successfully, you can send information about that event to an event destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic. You can only create one event destination at a time. You must provide a value for a single event destination using either CloudWatchLogsDestination, KinesisFirehoseDestination or SnsDestination. If an event destination isn't provided then an exception is returned. Each configuration set can contain between 0 and 5 event destinations. Each event destination can contain a reference to a single destination, such as a CloudWatch or Firehose destination.

```sql
INSERT INTO aws.pinpoint_sms_voice_v2.configuration_sets (
ConfigurationSetName,
EventDestinationName,
MatchingEventTypes,
CloudWatchLogsDestination,
KinesisFirehoseDestination,
SnsDestination,
ClientToken,
region
)
SELECT 
'{{ ConfigurationSetName }}' /* required */,
'{{ EventDestinationName }}' /* required */,
'{{ MatchingEventTypes }}' /* required */,
'{{ CloudWatchLogsDestination }}',
'{{ KinesisFirehoseDestination }}',
'{{ SnsDestination }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
configuration_set_arn,
configuration_set_name,
event_destination
;
```
</TabItem>
<TabItem value="create_configuration_set">

Creates a new configuration set. After you create the configuration set, you can add one or more event destinations to it. A configuration set is a set of rules that you apply to the SMS and voice messages that you send. When you send a message, you can optionally specify a single configuration set.

```sql
INSERT INTO aws.pinpoint_sms_voice_v2.configuration_sets (
ConfigurationSetName,
Tags,
ClientToken,
region
)
SELECT 
'{{ ConfigurationSetName }}' /* required */,
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
configuration_set_arn,
configuration_set_name,
created_timestamp,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configuration_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configuration_sets resource.
    - name: ConfigurationSetName
      value: "{{ ConfigurationSetName }}"
      description: |
        The name to use for the new configuration set.
    - name: EventDestinationName
      value: "{{ EventDestinationName }}"
      description: |
        The name that identifies the event destination.
    - name: MatchingEventTypes
      value:
        - "{{ MatchingEventTypes }}"
      description: |
        An array of event types that determine which events to log. If "ALL" is used, then End User Messaging SMS logs every event type. The TEXT_SENT event type is not supported.
    - name: CloudWatchLogsDestination
      description: |
        An object that contains information about an event destination for logging to Amazon CloudWatch Logs.
      value:
        IamRoleArn: "{{ IamRoleArn }}"
        LogGroupArn: "{{ LogGroupArn }}"
    - name: KinesisFirehoseDestination
      description: |
        An object that contains information about an event destination for logging to Amazon Data Firehose.
      value:
        IamRoleArn: "{{ IamRoleArn }}"
        DeliveryStreamArn: "{{ DeliveryStreamArn }}"
    - name: SnsDestination
      description: |
        An object that contains information about an event destination for logging to Amazon SNS.
      value:
        TopicArn: "{{ TopicArn }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
    - name: Tags
      description: |
        An array of key and value pair tags that's associated with the new configuration set.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_default_message_feedback_enabled"
    values={[
        { label: 'set_default_message_feedback_enabled', value: 'set_default_message_feedback_enabled' },
        { label: 'set_default_message_type', value: 'set_default_message_type' },
        { label: 'update_event_destination', value: 'update_event_destination' }
    ]}
>
<TabItem value="set_default_message_feedback_enabled">

Sets a configuration set's default for message feedback.

```sql
UPDATE aws.pinpoint_sms_voice_v2.configuration_sets
SET 
ConfigurationSetName = '{{ ConfigurationSetName }}',
MessageFeedbackEnabled = {{ MessageFeedbackEnabled }}
WHERE 
region = '{{ region }}' --required
AND ConfigurationSetName = '{{ ConfigurationSetName }}' --required
AND MessageFeedbackEnabled = {{ MessageFeedbackEnabled }} --required
RETURNING
configuration_set_arn,
configuration_set_name,
message_feedback_enabled;
```
</TabItem>
<TabItem value="set_default_message_type">

Sets the default message type on a configuration set. Choose the category of SMS messages that you plan to send from this account. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose Transactional. If you plan to send messages that contain marketing material or other promotional content, choose Promotional. This setting applies to your entire Amazon Web Services account.

```sql
UPDATE aws.pinpoint_sms_voice_v2.configuration_sets
SET 
ConfigurationSetName = '{{ ConfigurationSetName }}',
MessageType = '{{ MessageType }}'
WHERE 
region = '{{ region }}' --required
AND ConfigurationSetName = '{{ ConfigurationSetName }}' --required
AND MessageType = '{{ MessageType }}' --required
RETURNING
configuration_set_arn,
configuration_set_name,
message_type;
```
</TabItem>
<TabItem value="update_event_destination">

Updates an existing event destination in a configuration set. You can update the IAM role ARN for CloudWatch Logs and Firehose. You can also enable or disable the event destination. You may want to update an event destination to change its matching event types or updating the destination resource ARN. You can't change an event destination's type between CloudWatch Logs, Firehose, and Amazon SNS.

```sql
UPDATE aws.pinpoint_sms_voice_v2.configuration_sets
SET 
ConfigurationSetName = '{{ ConfigurationSetName }}',
EventDestinationName = '{{ EventDestinationName }}',
Enabled = {{ Enabled }},
MatchingEventTypes = '{{ MatchingEventTypes }}',
CloudWatchLogsDestination = '{{ CloudWatchLogsDestination }}',
KinesisFirehoseDestination = '{{ KinesisFirehoseDestination }}',
SnsDestination = '{{ SnsDestination }}'
WHERE 
region = '{{ region }}' --required
AND ConfigurationSetName = '{{ ConfigurationSetName }}' --required
AND EventDestinationName = '{{ EventDestinationName }}' --required
RETURNING
configuration_set_arn,
configuration_set_name,
event_destination;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event_destination"
    values={[
        { label: 'delete_event_destination', value: 'delete_event_destination' },
        { label: 'delete_configuration_set', value: 'delete_configuration_set' }
    ]}
>
<TabItem value="delete_event_destination">

Deletes an existing event destination. An event destination is a location where you send response information about the messages that you send. For example, when a message is delivered successfully, you can send information about that event to an Amazon CloudWatch destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.configuration_sets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_configuration_set">

Deletes an existing configuration set. A configuration set is a set of rules that you apply to voice and SMS messages that you send. In a configuration set, you can specify a destination for specific types of events related to voice and SMS messages.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.configuration_sets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_default_message_type"
    values={[
        { label: 'delete_default_message_type', value: 'delete_default_message_type' }
    ]}
>
<TabItem value="delete_default_message_type">

Deletes an existing default message type on a configuration set. A message type is a type of messages that you plan to send. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose Transactional. If you plan to send messages that contain marketing material or other promotional content, choose Promotional. This setting applies to your entire Amazon Web Services account.

```sql
EXEC aws.pinpoint_sms_voice_v2.configuration_sets.delete_default_message_type 
@region='{{ region }}' --required 
@@json=
'{
"ConfigurationSetName": "{{ ConfigurationSetName }}"
}'
;
```
</TabItem>
</Tabs>
