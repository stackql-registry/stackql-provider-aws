--- 
title: scheduled_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_actions
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

Creates, updates, deletes, gets or lists a <code>scheduled_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduled_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.scheduled_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scheduled_actions"
    values={[
        { label: 'describe_scheduled_actions', value: 'describe_scheduled_actions' }
    ]}
>
<TabItem value="describe_scheduled_actions">

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
    <td><CopyableCode code="DesiredCapacity" /></td>
    <td><code>integer</code></td>
    <td>The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string</code></td>
    <td>The date and time in UTC for the recurring schedule to end. For example, "2019-06-01T00:00:00Z".</td>
</tr>
<tr>
    <td><CopyableCode code="MaxSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum size of the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="MinSize" /></td>
    <td><code>integer</code></td>
    <td>The minimum size of the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="Recurrence" /></td>
    <td><code>string</code></td>
    <td>The recurring schedule for the action, in Unix cron syntax format. When StartTime and EndTime are specified with Recurrence, they form the boundaries of when the recurring action starts and stops.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduledActionARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the scheduled action.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduledActionName" /></td>
    <td><code>string</code></td>
    <td>The name of the scheduled action.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string</code></td>
    <td>The date and time in UTC for this action to start. For example, "2019-06-01T00:00:00Z".</td>
</tr>
<tr>
    <td><CopyableCode code="Time" /></td>
    <td><code>string</code></td>
    <td>This property is no longer used.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeZone" /></td>
    <td><code>string</code></td>
    <td>The time zone for the cron expression.</td>
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
    <td><a href="#describe_scheduled_actions"><CopyableCode code="describe_scheduled_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-ScheduledActionNames"><code>ScheduledActionNames</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Gets information about the scheduled actions that haven't run or that have not reached their end time. To describe the scaling activities for scheduled actions that have already run, call the DescribeScalingActivities API.</td>
</tr>
<tr>
    <td><a href="#delete_scheduled_action"><CopyableCode code="delete_scheduled_action" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-ScheduledActionName"><code>ScheduledActionName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified scheduled action.</td>
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
<tr id="parameter-ScheduledActionName">
    <td><CopyableCode code="ScheduledActionName" /></td>
    <td><code>string</code></td>
    <td>The name of the action to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AutoScalingGroupName">
    <td><CopyableCode code="AutoScalingGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the Auto Scaling group.</td>
</tr>
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The latest scheduled start time to return. If scheduled action names are provided, this property is ignored.</td>
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
<tr id="parameter-ScheduledActionNames">
    <td><CopyableCode code="ScheduledActionNames" /></td>
    <td><code>array</code></td>
    <td>The names of one or more scheduled actions. If you omit this property, all scheduled actions are described. If you specify an unknown scheduled action, it is ignored with no error. Array Members: Maximum number of 50 actions.</td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The earliest scheduled start time to return. If scheduled action names are provided, this property is ignored.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_scheduled_actions"
    values={[
        { label: 'describe_scheduled_actions', value: 'describe_scheduled_actions' }
    ]}
>
<TabItem value="describe_scheduled_actions">

Gets information about the scheduled actions that haven't run or that have not reached their end time. To describe the scaling activities for scheduled actions that have already run, call the DescribeScalingActivities API.

```sql
SELECT
AutoScalingGroupName,
DesiredCapacity,
EndTime,
MaxSize,
MinSize,
Recurrence,
ScheduledActionARN,
ScheduledActionName,
StartTime,
Time,
TimeZone
FROM aws.autoscaling.scheduled_actions
WHERE region = '{{ region }}' -- required
AND AutoScalingGroupName = '{{ AutoScalingGroupName }}'
AND ScheduledActionNames = '{{ ScheduledActionNames }}'
AND StartTime = '{{ StartTime }}'
AND EndTime = '{{ EndTime }}'
AND NextToken = '{{ NextToken }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scheduled_action"
    values={[
        { label: 'delete_scheduled_action', value: 'delete_scheduled_action' }
    ]}
>
<TabItem value="delete_scheduled_action">

Deletes the specified scheduled action.

```sql
DELETE FROM aws.autoscaling.scheduled_actions
WHERE AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND ScheduledActionName = '{{ ScheduledActionName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
