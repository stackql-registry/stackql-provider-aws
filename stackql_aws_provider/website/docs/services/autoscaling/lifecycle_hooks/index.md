--- 
title: lifecycle_hooks
hide_title: false
hide_table_of_contents: false
keywords:
  - lifecycle_hooks
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

Creates, updates, deletes, gets or lists a <code>lifecycle_hooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lifecycle_hooks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.lifecycle_hooks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_lifecycle_hooks"
    values={[
        { label: 'describe_lifecycle_hooks', value: 'describe_lifecycle_hooks' }
    ]}
>
<TabItem value="describe_lifecycle_hooks">

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
    <td>The name of the Auto Scaling group for the lifecycle hook.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultResult" /></td>
    <td><code>string</code></td>
    <td>The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. Valid values: CONTINUE | ABANDON</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalTimeout" /></td>
    <td><code>integer</code></td>
    <td>The maximum time, in seconds, that an instance can remain in a wait state. The maximum is 172800 seconds (48 hours) or 100 times HeartbeatTimeout, whichever is smaller.</td>
</tr>
<tr>
    <td><CopyableCode code="HeartbeatTimeout" /></td>
    <td><code>integer</code></td>
    <td>The maximum time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the DefaultResult property.</td>
</tr>
<tr>
    <td><CopyableCode code="LifecycleHookName" /></td>
    <td><code>string</code></td>
    <td>The name of the lifecycle hook.</td>
</tr>
<tr>
    <td><CopyableCode code="LifecycleTransition" /></td>
    <td><code>string</code></td>
    <td>The lifecycle transition. Valid values: autoscaling:EC2_INSTANCE_LAUNCHING | autoscaling:EC2_INSTANCE_TERMINATING</td>
</tr>
<tr>
    <td><CopyableCode code="NotificationMetadata" /></td>
    <td><code>string</code></td>
    <td>Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the notification target.</td>
</tr>
<tr>
    <td><CopyableCode code="NotificationTargetARN" /></td>
    <td><code>string</code></td>
    <td>The ARN of the target that Amazon EC2 Auto Scaling sends notifications to when an instance is in a wait state for the lifecycle hook.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleARN" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target (an Amazon SNS topic or an Amazon SQS queue).</td>
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
    <td><a href="#describe_lifecycle_hooks"><CopyableCode code="describe_lifecycle_hooks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LifecycleHookNames"><code>LifecycleHookNames</code></a></td>
    <td>Gets information about the lifecycle hooks for the specified Auto Scaling group.</td>
</tr>
<tr>
    <td><a href="#put_lifecycle_hook"><CopyableCode code="put_lifecycle_hook" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-LifecycleHookName"><code>LifecycleHookName</code></a>, <a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LifecycleTransition"><code>LifecycleTransition</code></a>, <a href="#parameter-RoleARN"><code>RoleARN</code></a>, <a href="#parameter-NotificationTargetARN"><code>NotificationTargetARN</code></a>, <a href="#parameter-NotificationMetadata"><code>NotificationMetadata</code></a>, <a href="#parameter-HeartbeatTimeout"><code>HeartbeatTimeout</code></a>, <a href="#parameter-DefaultResult"><code>DefaultResult</code></a></td>
    <td>Creates or updates a lifecycle hook for the specified Auto Scaling group. Lifecycle hooks let you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs. This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group: (Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook. (Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook. (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target. Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate. If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state using the RecordLifecycleActionHeartbeat API call. If you finish before the timeout period ends, send a callback by using the CompleteLifecycleAction API call. For more information, see Amazon EC2 Auto Scaling lifecycle hooks in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails. You can view the lifecycle hooks for an Auto Scaling group using the DescribeLifecycleHooks API call. If you are no longer using a lifecycle hook, you can delete it by calling the DeleteLifecycleHook API.</td>
</tr>
<tr>
    <td><a href="#delete_lifecycle_hook"><CopyableCode code="delete_lifecycle_hook" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-LifecycleHookName"><code>LifecycleHookName</code></a>, <a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified lifecycle hook. If there are any outstanding lifecycle actions, they are completed first (ABANDON for launching instances, CONTINUE for terminating instances).</td>
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
<tr id="parameter-LifecycleHookName">
    <td><CopyableCode code="LifecycleHookName" /></td>
    <td><code>string</code></td>
    <td>The name of the lifecycle hook.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DefaultResult">
    <td><CopyableCode code="DefaultResult" /></td>
    <td><code>string</code></td>
    <td>The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. The default value is ABANDON. Valid values: CONTINUE | ABANDON</td>
</tr>
<tr id="parameter-HeartbeatTimeout">
    <td><CopyableCode code="HeartbeatTimeout" /></td>
    <td><code>integer</code></td>
    <td>The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from 30 to 7200 seconds. The default value is 3600 seconds (1 hour).</td>
</tr>
<tr id="parameter-LifecycleHookNames">
    <td><CopyableCode code="LifecycleHookNames" /></td>
    <td><code>array</code></td>
    <td>The names of one or more lifecycle hooks. If you omit this property, all lifecycle hooks are described.</td>
</tr>
<tr id="parameter-LifecycleTransition">
    <td><CopyableCode code="LifecycleTransition" /></td>
    <td><code>string</code></td>
    <td>The lifecycle transition. For Auto Scaling groups, there are two major lifecycle transitions. To create a lifecycle hook for scale-out events, specify autoscaling:EC2_INSTANCE_LAUNCHING. To create a lifecycle hook for scale-in events, specify autoscaling:EC2_INSTANCE_TERMINATING. Required for new lifecycle hooks, but optional when updating existing hooks.</td>
</tr>
<tr id="parameter-NotificationMetadata">
    <td><CopyableCode code="NotificationMetadata" /></td>
    <td><code>string</code></td>
    <td>Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to the notification target.</td>
</tr>
<tr id="parameter-NotificationTargetARN">
    <td><CopyableCode code="NotificationTargetARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in a wait state for the lifecycle hook. You can specify either an Amazon SNS topic or an Amazon SQS queue. If you specify an empty string, this overrides the current ARN. This operation uses the JSON format when sending notifications to an Amazon SQS queue, and an email key-value pair format when sending notifications to an Amazon SNS topic. When you specify a notification target, Amazon EC2 Auto Scaling sends it a test message. Test messages contain the following additional key-value pair: "Event": "autoscaling:TEST_NOTIFICATION".</td>
</tr>
<tr id="parameter-RoleARN">
    <td><CopyableCode code="RoleARN" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target. Valid only if the notification target is an Amazon SNS topic or an Amazon SQS queue. Required for new lifecycle hooks, but optional when updating existing hooks.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_lifecycle_hooks"
    values={[
        { label: 'describe_lifecycle_hooks', value: 'describe_lifecycle_hooks' }
    ]}
>
<TabItem value="describe_lifecycle_hooks">

Gets information about the lifecycle hooks for the specified Auto Scaling group.

```sql
SELECT
AutoScalingGroupName,
DefaultResult,
GlobalTimeout,
HeartbeatTimeout,
LifecycleHookName,
LifecycleTransition,
NotificationMetadata,
NotificationTargetARN,
RoleARN
FROM aws.autoscaling.lifecycle_hooks
WHERE AutoScalingGroupName = '{{ AutoScalingGroupName }}' -- required
AND region = '{{ region }}' -- required
AND LifecycleHookNames = '{{ LifecycleHookNames }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_lifecycle_hook"
    values={[
        { label: 'put_lifecycle_hook', value: 'put_lifecycle_hook' }
    ]}
>
<TabItem value="put_lifecycle_hook">

Creates or updates a lifecycle hook for the specified Auto Scaling group. Lifecycle hooks let you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs. This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group: (Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook. (Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook. (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target. Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate. If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state using the RecordLifecycleActionHeartbeat API call. If you finish before the timeout period ends, send a callback by using the CompleteLifecycleAction API call. For more information, see Amazon EC2 Auto Scaling lifecycle hooks in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails. You can view the lifecycle hooks for an Auto Scaling group using the DescribeLifecycleHooks API call. If you are no longer using a lifecycle hook, you can delete it by calling the DeleteLifecycleHook API.

```sql
REPLACE aws.autoscaling.lifecycle_hooks
SET 
-- No updatable properties
WHERE 
LifecycleHookName = '{{ LifecycleHookName }}' --required
AND AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND region = '{{ region }}' --required
AND LifecycleTransition = '{{ LifecycleTransition}}'
AND RoleARN = '{{ RoleARN}}'
AND NotificationTargetARN = '{{ NotificationTargetARN}}'
AND NotificationMetadata = '{{ NotificationMetadata}}'
AND HeartbeatTimeout = '{{ HeartbeatTimeout}}'
AND DefaultResult = '{{ DefaultResult}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_lifecycle_hook"
    values={[
        { label: 'delete_lifecycle_hook', value: 'delete_lifecycle_hook' }
    ]}
>
<TabItem value="delete_lifecycle_hook">

Deletes the specified lifecycle hook. If there are any outstanding lifecycle actions, they are completed first (ABANDON for launching instances, CONTINUE for terminating instances).

```sql
DELETE FROM aws.autoscaling.lifecycle_hooks
WHERE LifecycleHookName = '{{ LifecycleHookName }}' --required
AND AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
