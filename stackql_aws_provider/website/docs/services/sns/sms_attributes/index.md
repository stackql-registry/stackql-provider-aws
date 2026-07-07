--- 
title: sms_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - sms_attributes
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

Creates, updates, deletes, gets or lists a <code>sms_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sms_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sns.sms_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sms_attributes"
    values={[
        { label: 'get_sms_attributes', value: 'get_sms_attributes' }
    ]}
>
<TabItem value="get_sms_attributes">

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
    <td>The SMS attribute names and their values.</td>
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
    <td><a href="#get_sms_attributes"><CopyableCode code="get_sms_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-attributes"><code>attributes</code></a></td>
    <td>Returns the settings for sending SMS messages from your Amazon Web Services account. These settings are set with the SetSMSAttributes action.</td>
</tr>
<tr>
    <td><a href="#set_sms_attributes"><CopyableCode code="set_sms_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-attributes"><code>attributes</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this request to set the default settings for sending SMS messages and receiving daily SMS usage reports. You can override some of these settings for a single message when you use the Publish action with the MessageAttributes.entry.N parameter. For more information, see Publishing to a mobile phone in the Amazon SNS Developer Guide. To use this operation, you must grant the Amazon SNS service principal (sns.amazonaws.com) permission to perform the s3:ListBucket action.</td>
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
<tr id="parameter-attributes">
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The default settings for sending SMS messages from your Amazon Web Services account. You can set values for the following attribute names: MonthlySpendLimit – The maximum amount in USD that you are willing to spend each month to send SMS messages. When Amazon SNS determines that sending an SMS message would incur a cost that exceeds this limit, it stops sending SMS messages within minutes. Amazon SNS stops sending SMS messages within minutes of the limit being crossed. During that interval, if you continue to send SMS messages, you will incur costs that exceed your limit. By default, the spend limit is set to the maximum allowed by Amazon SNS. If you want to raise the limit, submit an SNS Limit Increase case. For New limit value, enter your desired monthly spend limit. In the Use Case Description field, explain that you are requesting an SMS monthly spend limit increase. DeliveryStatusIAMRole – The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs. For each SMS message that you send, Amazon SNS writes a log that includes the message price, the success or failure status, the reason for failure (if the message failed), the message dwell time, and other information. DeliveryStatusSuccessSamplingRate – The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value can be an integer from 0 - 100. For example, to write logs only for failed deliveries, set this value to 0. To write logs for 10% of your successful deliveries, set it to 10. DefaultSenderID – A string, such as your business brand, that is displayed as the sender on the receiving device. Support for sender IDs varies by country. The sender ID can be 1 - 11 alphanumeric characters, and it must contain at least one letter. DefaultSMSType – The type of SMS message that you will send by default. You can assign the following values: Promotional – (Default) Noncritical messages, such as marketing messages. Amazon SNS optimizes the message delivery to incur the lowest cost. Transactional – Critical messages that support customer transactions, such as one-time passcodes for multi-factor authentication. Amazon SNS optimizes the message delivery to achieve the highest reliability. UsageReportS3Bucket – The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS. Each day, Amazon SNS will deliver a usage report as a CSV file to the bucket. The report includes the following information for each SMS message that was successfully delivered by your Amazon Web Services account: Time that the message was published (in UTC) Message ID Destination phone number Message type Delivery status Message price (in USD) Part number (a message is split into multiple parts if it is too long for a single message) Total number of parts To receive the report, the bucket must have a policy that allows the Amazon SNS service principal to perform the s3:PutObject and s3:GetBucketLocation actions. For an example bucket policy and usage report, see Monitoring SMS Activity in the Amazon SNS Developer Guide.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-attributes">
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>A list of the individual attribute names, such as MonthlySpendLimit, for which you want values. For all attribute names, see SetSMSAttributes. If you don't use this parameter, Amazon SNS returns all SMS attributes.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sms_attributes"
    values={[
        { label: 'get_sms_attributes', value: 'get_sms_attributes' }
    ]}
>
<TabItem value="get_sms_attributes">

Returns the settings for sending SMS messages from your Amazon Web Services account. These settings are set with the SetSMSAttributes action.

```sql
SELECT
attributes
FROM aws.sns.sms_attributes
WHERE region = '{{ region }}' -- required
AND attributes = '{{ attributes }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_sms_attributes"
    values={[
        { label: 'set_sms_attributes', value: 'set_sms_attributes' }
    ]}
>
<TabItem value="set_sms_attributes">

Use this request to set the default settings for sending SMS messages and receiving daily SMS usage reports. You can override some of these settings for a single message when you use the Publish action with the MessageAttributes.entry.N parameter. For more information, see Publishing to a mobile phone in the Amazon SNS Developer Guide. To use this operation, you must grant the Amazon SNS service principal (sns.amazonaws.com) permission to perform the s3:ListBucket action.

```sql
UPDATE aws.sns.sms_attributes
SET 
-- No updatable properties
WHERE 
attributes = '{{ attributes }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
