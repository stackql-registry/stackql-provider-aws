--- 
title: bucket_notification_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_notification_configurations
  - s3
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

Creates, updates, deletes, gets or lists a <code>bucket_notification_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_notification_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_notification_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_notification_configuration"
    values={[
        { label: 'get_bucket_notification_configuration', value: 'get_bucket_notification_configuration' }
    ]}
>
<TabItem value="get_bucket_notification_configuration">

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
    <td><CopyableCode code="event_bridge_configuration" /></td>
    <td><code>string</code></td>
    <td>Enables delivery of events to Amazon EventBridge.</td>
</tr>
<tr>
    <td><CopyableCode code="lambda_function_configurations" /></td>
    <td><code>string</code></td>
    <td>Describes the Lambda functions to invoke and the events for which to invoke them.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_configurations" /></td>
    <td><code>string</code></td>
    <td>The Amazon Simple Queue Service queues to publish messages to and the events for which to publish messages.</td>
</tr>
<tr>
    <td><CopyableCode code="topic_configurations" /></td>
    <td><code>string</code></td>
    <td>The topic to which notifications are sent and the events for which notifications are generated.</td>
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
    <td><a href="#get_bucket_notification_configuration"><CopyableCode code="get_bucket_notification_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Returns the notification configuration of a bucket. If notifications are not enabled on the bucket, the action returns an empty NotificationConfiguration element. By default, you must be the bucket owner to read the notification configuration of a bucket. However, the bucket owner can use a bucket policy to grant permission to other users to read this configuration with the s3:GetBucketNotification permission. When you use this API operation with an access point, provide the alias of the access point in place of the bucket name. When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes. For more information about setting and reading the notification configuration on a bucket, see Setting Up Notification of Bucket Events. For more information about bucket policies, see Using Bucket Policies. The following action is related to GetBucketNotification: PutBucketNotification You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#put_bucket_notification_configuration"><CopyableCode code="put_bucket_notification_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NotificationConfiguration"><code>NotificationConfiguration</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-skip-destination-validation"><code>x-amz-skip-destination-validation</code></a></td>
    <td>This operation is not supported for directory buckets. Enables notifications of specified events for a bucket. For more information about event notifications, see Configuring Event Notifications. Using this API, you can replace an existing notification configuration. The configuration is an XML file that defines the event types that you want Amazon S3 to publish and the destination where you want Amazon S3 to publish an event notification when it detects an event of the specified type. By default, your bucket has no event notifications configured. That is, the notification configuration will be an empty NotificationConfiguration. <code>&lt;NotificationConfiguration&gt;</code> &lt;/NotificationConfiguration&gt; This action replaces the existing notification configuration with the configuration you include in the request body. After Amazon S3 receives this request, it first verifies that any Amazon Simple Notification Service (Amazon SNS) or Amazon Simple Queue Service (Amazon SQS) destination exists, and that the bucket owner has permission to publish to it by sending a test notification. In the case of Lambda destinations, Amazon S3 verifies that the Lambda function permissions grant Amazon S3 permission to invoke the function from the Amazon S3 bucket. For more information, see Configuring Notifications for Amazon S3 Events. You can disable notifications by adding the empty NotificationConfiguration element. For more information about the number of event notification configurations that you can create per bucket, see Amazon S3 service quotas in Amazon Web Services General Reference. By default, only the bucket owner can configure notifications on a bucket. However, bucket owners can use a bucket policy to grant permission to other users to set this configuration with the required s3:PutBucketNotification permission. The PUT notification is an atomic operation. For example, suppose your notification configuration includes SNS topic, SQS queue, and Lambda function configurations. When you send a PUT request with this configuration, Amazon S3 sends test messages to your SNS topic. If the message fails, the entire PUT action will fail, and Amazon S3 will not add the configuration to your bucket. If the configuration in the request body includes only one TopicConfiguration specifying only the s3:ReducedRedundancyLostObject event type, the response will also include the x-amz-sns-test-message-id header containing the message ID of the test notification sent to the topic. The following action is related to PutBucketNotificationConfiguration: GetBucketNotificationConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
</tr>
<tr id="parameter-x-amz-skip-destination-validation">
    <td><CopyableCode code="x-amz-skip-destination-validation" /></td>
    <td><code>boolean</code></td>
    <td>Skips validation of Amazon SQS, Amazon SNS, and Lambda destinations. True or false value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bucket_notification_configuration"
    values={[
        { label: 'get_bucket_notification_configuration', value: 'get_bucket_notification_configuration' }
    ]}
>
<TabItem value="get_bucket_notification_configuration">

This operation is not supported for directory buckets. Returns the notification configuration of a bucket. If notifications are not enabled on the bucket, the action returns an empty NotificationConfiguration element. By default, you must be the bucket owner to read the notification configuration of a bucket. However, the bucket owner can use a bucket policy to grant permission to other users to read this configuration with the s3:GetBucketNotification permission. When you use this API operation with an access point, provide the alias of the access point in place of the bucket name. When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes. For more information about setting and reading the notification configuration on a bucket, see Setting Up Notification of Bucket Events. For more information about bucket policies, see Using Bucket Policies. The following action is related to GetBucketNotification: PutBucketNotification You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
event_bridge_configuration,
lambda_function_configurations,
queue_configurations,
topic_configurations
FROM aws.s3.bucket_notification_configurations
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bucket_notification_configuration"
    values={[
        { label: 'put_bucket_notification_configuration', value: 'put_bucket_notification_configuration' }
    ]}
>
<TabItem value="put_bucket_notification_configuration">

This operation is not supported for directory buckets. Enables notifications of specified events for a bucket. For more information about event notifications, see Configuring Event Notifications. Using this API, you can replace an existing notification configuration. The configuration is an XML file that defines the event types that you want Amazon S3 to publish and the destination where you want Amazon S3 to publish an event notification when it detects an event of the specified type. By default, your bucket has no event notifications configured. That is, the notification configuration will be an empty NotificationConfiguration. <code>&lt;NotificationConfiguration&gt;</code> &lt;/NotificationConfiguration&gt; This action replaces the existing notification configuration with the configuration you include in the request body. After Amazon S3 receives this request, it first verifies that any Amazon Simple Notification Service (Amazon SNS) or Amazon Simple Queue Service (Amazon SQS) destination exists, and that the bucket owner has permission to publish to it by sending a test notification. In the case of Lambda destinations, Amazon S3 verifies that the Lambda function permissions grant Amazon S3 permission to invoke the function from the Amazon S3 bucket. For more information, see Configuring Notifications for Amazon S3 Events. You can disable notifications by adding the empty NotificationConfiguration element. For more information about the number of event notification configurations that you can create per bucket, see Amazon S3 service quotas in Amazon Web Services General Reference. By default, only the bucket owner can configure notifications on a bucket. However, bucket owners can use a bucket policy to grant permission to other users to set this configuration with the required s3:PutBucketNotification permission. The PUT notification is an atomic operation. For example, suppose your notification configuration includes SNS topic, SQS queue, and Lambda function configurations. When you send a PUT request with this configuration, Amazon S3 sends test messages to your SNS topic. If the message fails, the entire PUT action will fail, and Amazon S3 will not add the configuration to your bucket. If the configuration in the request body includes only one TopicConfiguration specifying only the s3:ReducedRedundancyLostObject event type, the response will also include the x-amz-sns-test-message-id header containing the message ID of the test notification sent to the topic. The following action is related to PutBucketNotificationConfiguration: GetBucketNotificationConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
REPLACE aws.s3.bucket_notification_configurations
SET 
NotificationConfiguration = '{{ NotificationConfiguration }}'
WHERE 
bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND NotificationConfiguration = '{{ NotificationConfiguration }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}'
AND `x-amz-skip-destination-validation` = {{ x-amz-skip-destination-validation}};
```
</TabItem>
</Tabs>
