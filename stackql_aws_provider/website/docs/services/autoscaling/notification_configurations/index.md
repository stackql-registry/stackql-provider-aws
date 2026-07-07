--- 
title: notification_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_configurations
  - autoscaling
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

Creates, updates, deletes, gets or lists a <code>notification_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notification_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.notification_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_notification_configurations"
    values={[
        { label: 'describe_notification_configurations', value: 'describe_notification_configurations' }
    ]}
>
<TabItem value="describe_notification_configurations">

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
    <td><CopyableCode code="AutoScalingGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="NotificationType" /></td>
    <td><code>string</code></td>
    <td>One of the following event notification types: autoscaling:EC2_INSTANCE_LAUNCH autoscaling:EC2_INSTANCE_LAUNCH_ERROR autoscaling:EC2_INSTANCE_TERMINATE autoscaling:EC2_INSTANCE_TERMINATE_ERROR autoscaling:TEST_NOTIFICATION</td>
</tr>
<tr>
    <td><CopyableCode code="TopicARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon SNS topic.</td>
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
    <td><a href="#describe_notification_configurations"><CopyableCode code="describe_notification_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AutoScalingGroupNames"><code>AutoScalingGroupNames</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Gets information about the Amazon SNS notifications that are configured for one or more Auto Scaling groups.</td>
</tr>
<tr>
    <td><a href="#put_notification_configuration"><CopyableCode code="put_notification_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-TopicARN"><code>TopicARN</code></a>, <a href="#parameter-NotificationTypes"><code>NotificationTypes</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address. This configuration overwrites any existing configuration. For more information, see Amazon SNS notification options for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.</td>
</tr>
<tr>
    <td><a href="#delete_notification_configuration"><CopyableCode code="delete_notification_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-TopicARN"><code>TopicARN</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified notification.</td>
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
<tr id="parameter-AutoScalingGroupName">
    <td><CopyableCode code="AutoScalingGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the Auto Scaling group.</td>
</tr>
<tr id="parameter-NotificationTypes">
    <td><CopyableCode code="NotificationTypes" /></td>
    <td><code>array</code></td>
    <td>The type of event that causes the notification to be sent. To query the notification types supported by Amazon EC2 Auto Scaling, call the DescribeAutoScalingNotificationTypes API.</td>
</tr>
<tr id="parameter-TopicARN">
    <td><CopyableCode code="TopicARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon SNS topic.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AutoScalingGroupNames">
    <td><CopyableCode code="AutoScalingGroupNames" /></td>
    <td><code>array</code></td>
    <td>The name of the Auto Scaling group.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return with this call. The default value is 50 and the maximum value is 100.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_notification_configurations"
    values={[
        { label: 'describe_notification_configurations', value: 'describe_notification_configurations' }
    ]}
>
<TabItem value="describe_notification_configurations">

Gets information about the Amazon SNS notifications that are configured for one or more Auto Scaling groups.

```sql
SELECT
AutoScalingGroupName,
NotificationType,
TopicARN
FROM aws.autoscaling.notification_configurations
WHERE region = '{{ region }}' -- required
AND AutoScalingGroupNames = '{{ AutoScalingGroupNames }}'
AND NextToken = '{{ NextToken }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_notification_configuration"
    values={[
        { label: 'put_notification_configuration', value: 'put_notification_configuration' }
    ]}
>
<TabItem value="put_notification_configuration">

Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address. This configuration overwrites any existing configuration. For more information, see Amazon SNS notification options for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.

```sql
REPLACE aws.autoscaling.notification_configurations
SET 
-- No updatable properties
WHERE 
AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND TopicARN = '{{ TopicARN }}' --required
AND NotificationTypes = '{{ NotificationTypes }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_notification_configuration"
    values={[
        { label: 'delete_notification_configuration', value: 'delete_notification_configuration' }
    ]}
>
<TabItem value="delete_notification_configuration">

Deletes the specified notification.

```sql
DELETE FROM aws.autoscaling.notification_configurations
WHERE AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND TopicARN = '{{ TopicARN }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
