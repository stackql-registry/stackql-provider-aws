--- 
title: alarms
hide_title: false
hide_table_of_contents: false
keywords:
  - alarms
  - cloudwatch
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

Creates, updates, deletes, gets or lists an <code>alarms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alarms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudwatch.alarms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_alarms"
    values={[
        { label: 'describe_alarms', value: 'describe_alarms' }
    ]}
>
<TabItem value="describe_alarms">

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
    <td><CopyableCode code="ActionsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether actions should be executed during any changes to the alarm state.</td>
</tr>
<tr>
    <td><CopyableCode code="AlarmActions" /></td>
    <td><code>array</code></td>
    <td>The actions to execute when this alarm transitions to the ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="AlarmArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the alarm.</td>
</tr>
<tr>
    <td><CopyableCode code="AlarmConfigurationUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp of the last update to the alarm configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="AlarmDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the alarm.</td>
</tr>
<tr>
    <td><CopyableCode code="AlarmName" /></td>
    <td><code>string</code></td>
    <td>The name of the alarm.</td>
</tr>
<tr>
    <td><CopyableCode code="ComparisonOperator" /></td>
    <td><code>string</code></td>
    <td>The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand. (GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, LessThanOrEqualToThreshold, LessThanLowerOrGreaterThanUpperThreshold, LessThanLowerThreshold, GreaterThanUpperThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="DatapointsToAlarm" /></td>
    <td><code>integer</code></td>
    <td>The number of data points that must be breaching to trigger the alarm.</td>
</tr>
<tr>
    <td><CopyableCode code="Dimensions" /></td>
    <td><code>array</code></td>
    <td>The dimensions for the metric associated with the alarm.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluateLowSampleCountPercentile" /></td>
    <td><code>string</code></td>
    <td>Used only for alarms based on percentiles. If ignore, the alarm state does not change during periods with too few data points to be statistically significant. If evaluate or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationCriteria" /></td>
    <td><code>object</code></td>
    <td>The evaluation criteria for the alarm.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationInterval" /></td>
    <td><code>integer</code></td>
    <td>The frequency, in seconds, at which the alarm is evaluated.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationPeriods" /></td>
    <td><code>integer</code></td>
    <td>The number of periods over which data is compared to the specified threshold.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationState" /></td>
    <td><code>string</code></td>
    <td>If the value of this field is PARTIAL_DATA, it indicates that not all the available data was able to be retrieved due to quota limitations. For more information, see Create alarms on Metrics Insights queries. If the value of this field is EVALUATION_ERROR, it indicates configuration errors in alarm setup that require review and correction. Refer to StateReason field of the alarm for more details. If the value of this field is EVALUATION_FAILURE, it indicates temporary CloudWatch issues. We recommend manual monitoring until the issue is resolved (PARTIAL_DATA, EVALUATION_FAILURE, EVALUATION_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="ExtendedStatistic" /></td>
    <td><code>string</code></td>
    <td>The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.</td>
</tr>
<tr>
    <td><CopyableCode code="InsufficientDataActions" /></td>
    <td><code>array</code></td>
    <td>The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="MetricName" /></td>
    <td><code>string</code></td>
    <td>The name of the metric associated with the alarm, if this is an alarm based on a single metric.</td>
</tr>
<tr>
    <td><CopyableCode code="Metrics" /></td>
    <td><code>array</code></td>
    <td>An array of MetricDataQuery structures, used in an alarm based on a metric math expression. Each structure either retrieves a metric or performs a math expression. One item in the Metrics array is the math expression that the alarm watches. This expression by designated by having ReturnData set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="Namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the metric associated with the alarm. (pattern: &lt;code&gt;&#91;^:&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OKActions" /></td>
    <td><code>array</code></td>
    <td>The actions to execute when this alarm transitions to the OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="Period" /></td>
    <td><code>integer</code></td>
    <td>The period, in seconds, over which the statistic is applied.</td>
</tr>
<tr>
    <td><CopyableCode code="StateReason" /></td>
    <td><code>string</code></td>
    <td>An explanation for the alarm state, in text format.</td>
</tr>
<tr>
    <td><CopyableCode code="StateReasonData" /></td>
    <td><code>string</code></td>
    <td>An explanation for the alarm state, in JSON format.</td>
</tr>
<tr>
    <td><CopyableCode code="StateTransitionedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the alarm's StateValue most recently changed.</td>
</tr>
<tr>
    <td><CopyableCode code="StateUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp of the last update to the value of either the StateValue or EvaluationState parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="StateValue" /></td>
    <td><code>string</code></td>
    <td>The state value for the alarm. (OK, ALARM, INSUFFICIENT_DATA)</td>
</tr>
<tr>
    <td><CopyableCode code="Statistic" /></td>
    <td><code>string</code></td>
    <td>The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use ExtendedStatistic. (SampleCount, Average, Sum, Minimum, Maximum)</td>
</tr>
<tr>
    <td><CopyableCode code="Threshold" /></td>
    <td><code>number (double)</code></td>
    <td>The value to compare with the specified statistic.</td>
</tr>
<tr>
    <td><CopyableCode code="ThresholdMetricId" /></td>
    <td><code>string</code></td>
    <td>In an alarm based on an anomaly detection model, this is the ID of the ANOMALY_DETECTION_BAND function used as the threshold for the alarm.</td>
</tr>
<tr>
    <td><CopyableCode code="TreatMissingData" /></td>
    <td><code>string</code></td>
    <td>Sets how this alarm is to handle missing data points. The valid values are breaching, notBreaching, ignore, and missing. For more information, see Configuring how CloudWatch alarms treat missing data. If this parameter is omitted, the default behavior of missing is used. This parameter is not applicable to PromQL alarms.</td>
</tr>
<tr>
    <td><CopyableCode code="Unit" /></td>
    <td><code>string</code></td>
    <td>The unit of the metric associated with the alarm. (Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, None)</td>
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
    <td><a href="#describe_alarms"><CopyableCode code="describe_alarms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm name, the alarm state, or a prefix for any action. To use this operation and return information about composite alarms, you must be signed on with the cloudwatch:DescribeAlarms permission that is scoped to *. You can't return information about composite alarms if your cloudwatch:DescribeAlarms permission has a narrower scope.</td>
</tr>
<tr>
    <td><a href="#set_alarm_state"><CopyableCode code="set_alarm_state" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AlarmName"><code>AlarmName</code></a>, <a href="#parameter-StateValue"><code>StateValue</code></a>, <a href="#parameter-StateReason"><code>StateReason</code></a></td>
    <td></td>
    <td>Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to ALARM sends an SNS message. Metric alarms returns to their actual state quickly, often within seconds. Because the metric alarm state change happens quickly, it is typically only visible in the alarm's History tab in the Amazon CloudWatch console or through DescribeAlarmHistory. If you use SetAlarmState on a composite alarm, the composite alarm is not guaranteed to return to its actual state. It returns to its actual state only once any of its children alarms change state. It is also reevaluated if you update its configuration. If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include information in the StateReasonData parameter to enable the policy to take the correct action.</td>
</tr>
<tr>
    <td><a href="#put_composite_alarm"><CopyableCode code="put_composite_alarm" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AlarmName"><code>AlarmName</code></a>, <a href="#parameter-AlarmRule"><code>AlarmRule</code></a></td>
    <td></td>
    <td>Creates or updates a composite alarm. When you create a composite alarm, you specify a rule expression for the alarm that takes into account the alarm states of other alarms that you have created. The composite alarm goes into ALARM state only if all conditions of the rule are met. The alarms specified in a composite alarm's rule expression can include metric alarms and other composite alarms. The rule expression of a composite alarm can include as many as 100 underlying alarms. Any single alarm can be included in the rule expressions of as many as 150 composite alarms. Using composite alarms can reduce alarm noise. You can create multiple metric alarms, and also create a composite alarm and set up alerts only for the composite alarm. For example, you could create a composite alarm that goes into ALARM state only when more than one of the underlying metric alarms are in ALARM state. Composite alarms can take the following actions: Notify Amazon SNS topics. Invoke Lambda functions. Create OpsItems in Systems Manager Ops Center. Create incidents in Systems Manager Incident Manager. It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete. To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the AlarmRule of one of the alarms to false. Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. When this operation creates an alarm, the alarm state is immediately set to INSUFFICIENT_DATA. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. For a composite alarm, this initial time after creation is the only time that the alarm can be in INSUFFICIENT_DATA state. When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. To use this operation, you must be signed on with the cloudwatch:PutCompositeAlarm permission that is scoped to *. You can't create a composite alarms if your cloudwatch:PutCompositeAlarm permission has a narrower scope. If you are an IAM user, you must have iam:CreateServiceLinkedRole to create a composite alarm that has Systems Manager OpsItem actions.</td>
</tr>
<tr>
    <td><a href="#put_metric_alarm"><CopyableCode code="put_metric_alarm" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AlarmName"><code>AlarmName</code></a></td>
    <td></td>
    <td>Creates or updates an alarm and associates it with the specified metric, metric math expression, anomaly detection model, Metrics Insights query, or PromQL query. For more information about using a Metrics Insights query for an alarm, see Create alarms on Metrics Insights queries. Alarms based on anomaly detection models cannot have Auto Scaling actions. When this operation creates an alarm, the alarm state is immediately set to INSUFFICIENT_DATA. For PromQL alarms, the alarm state is instead immediately set to OK. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. If you are an IAM user, you must have Amazon EC2 permissions for some alarm operations: The iam:CreateServiceLinkedRole permission for all alarms with EC2 actions The iam:CreateServiceLinkedRole permissions to create an alarm with Systems Manager OpsItem or response plan actions. The first time you create an alarm in the Amazon Web Services Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch creates the necessary service-linked role for you. The service-linked roles are called AWSServiceRoleForCloudWatchEvents and AWSServiceRoleForCloudWatchAlarms_ActionSSM. For more information, see Amazon Web Services service-linked role. Each PutMetricAlarm action has a maximum uncompressed payload of 120 KB. Cross-account alarms You can set an alarm on metrics in the current account, or in another account. To create a cross-account alarm that watches a metric in a different account, you must have completed the following pre-requisites: The account where the metrics are located (the sharing account) must already have a sharing role named CloudWatch-CrossAccountSharingRole. If it does not already have this role, you must create it using the instructions in Set up a sharing account in Cross-account cross-Region CloudWatch console. The policy for that role must grant access to the ID of the account where you are creating the alarm. The account where you are creating the alarm (the monitoring account) must already have a service-linked role named AWSServiceRoleForCloudWatchCrossAccount to allow CloudWatch to assume the sharing role in the sharing account. If it does not, you must create it following the directions in Set up a monitoring account in Cross-account cross-Region CloudWatch console.</td>
</tr>
<tr>
    <td><a href="#delete_alarms"><CopyableCode code="delete_alarms" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can't delete two composite alarms with one operation. If you specify any incorrect alarm names, the alarms you specify with correct names are still deleted. Other syntax errors might result in no alarms being deleted. To confirm that alarms were deleted successfully, you can use the DescribeAlarms operation after using DeleteAlarms. It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete. To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the AlarmRule of one of the alarms to false. Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path.</td>
</tr>
<tr>
    <td><a href="#disable_alarm_actions"><CopyableCode code="disable_alarm_actions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AlarmNames"><code>AlarmNames</code></a></td>
    <td></td>
    <td>Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.</td>
</tr>
<tr>
    <td><a href="#enable_alarm_actions"><CopyableCode code="enable_alarm_actions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AlarmNames"><code>AlarmNames</code></a></td>
    <td></td>
    <td>Enables the actions for the specified alarms.</td>
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
    defaultValue="describe_alarms"
    values={[
        { label: 'describe_alarms', value: 'describe_alarms' }
    ]}
>
<TabItem value="describe_alarms">

Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm name, the alarm state, or a prefix for any action. To use this operation and return information about composite alarms, you must be signed on with the cloudwatch:DescribeAlarms permission that is scoped to *. You can't return information about composite alarms if your cloudwatch:DescribeAlarms permission has a narrower scope.

```sql
SELECT
ActionsEnabled,
AlarmActions,
AlarmArn,
AlarmConfigurationUpdatedTimestamp,
AlarmDescription,
AlarmName,
ComparisonOperator,
DatapointsToAlarm,
Dimensions,
EvaluateLowSampleCountPercentile,
EvaluationCriteria,
EvaluationInterval,
EvaluationPeriods,
EvaluationState,
ExtendedStatistic,
InsufficientDataActions,
MetricName,
Metrics,
Namespace,
OKActions,
Period,
StateReason,
StateReasonData,
StateTransitionedTimestamp,
StateUpdatedTimestamp,
StateValue,
Statistic,
Threshold,
ThresholdMetricId,
TreatMissingData,
Unit
FROM aws.cloudwatch.alarms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_alarm_state"
    values={[
        { label: 'set_alarm_state', value: 'set_alarm_state' }
    ]}
>
<TabItem value="set_alarm_state">

Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to ALARM sends an SNS message. Metric alarms returns to their actual state quickly, often within seconds. Because the metric alarm state change happens quickly, it is typically only visible in the alarm's History tab in the Amazon CloudWatch console or through DescribeAlarmHistory. If you use SetAlarmState on a composite alarm, the composite alarm is not guaranteed to return to its actual state. It returns to its actual state only once any of its children alarms change state. It is also reevaluated if you update its configuration. If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include information in the StateReasonData parameter to enable the policy to take the correct action.

```sql
UPDATE aws.cloudwatch.alarms
SET 
AlarmName = '{{ AlarmName }}',
StateValue = '{{ StateValue }}',
StateReason = '{{ StateReason }}',
StateReasonData = '{{ StateReasonData }}'
WHERE 
region = '{{ region }}' --required
AND AlarmName = '{{ AlarmName }}' --required
AND StateValue = '{{ StateValue }}' --required
AND StateReason = '{{ StateReason }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_composite_alarm"
    values={[
        { label: 'put_composite_alarm', value: 'put_composite_alarm' },
        { label: 'put_metric_alarm', value: 'put_metric_alarm' }
    ]}
>
<TabItem value="put_composite_alarm">

Creates or updates a composite alarm. When you create a composite alarm, you specify a rule expression for the alarm that takes into account the alarm states of other alarms that you have created. The composite alarm goes into ALARM state only if all conditions of the rule are met. The alarms specified in a composite alarm's rule expression can include metric alarms and other composite alarms. The rule expression of a composite alarm can include as many as 100 underlying alarms. Any single alarm can be included in the rule expressions of as many as 150 composite alarms. Using composite alarms can reduce alarm noise. You can create multiple metric alarms, and also create a composite alarm and set up alerts only for the composite alarm. For example, you could create a composite alarm that goes into ALARM state only when more than one of the underlying metric alarms are in ALARM state. Composite alarms can take the following actions: Notify Amazon SNS topics. Invoke Lambda functions. Create OpsItems in Systems Manager Ops Center. Create incidents in Systems Manager Incident Manager. It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete. To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the AlarmRule of one of the alarms to false. Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. When this operation creates an alarm, the alarm state is immediately set to INSUFFICIENT_DATA. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. For a composite alarm, this initial time after creation is the only time that the alarm can be in INSUFFICIENT_DATA state. When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. To use this operation, you must be signed on with the cloudwatch:PutCompositeAlarm permission that is scoped to *. You can't create a composite alarms if your cloudwatch:PutCompositeAlarm permission has a narrower scope. If you are an IAM user, you must have iam:CreateServiceLinkedRole to create a composite alarm that has Systems Manager OpsItem actions.

```sql
REPLACE aws.cloudwatch.alarms
SET 
ActionsEnabled = {{ ActionsEnabled }},
AlarmActions = '{{ AlarmActions }}',
AlarmDescription = '{{ AlarmDescription }}',
AlarmName = '{{ AlarmName }}',
AlarmRule = '{{ AlarmRule }}',
InsufficientDataActions = '{{ InsufficientDataActions }}',
OKActions = '{{ OKActions }}',
Tags = '{{ Tags }}',
ActionsSuppressor = '{{ ActionsSuppressor }}',
ActionsSuppressorWaitPeriod = {{ ActionsSuppressorWaitPeriod }},
ActionsSuppressorExtensionPeriod = {{ ActionsSuppressorExtensionPeriod }}
WHERE 
region = '{{ region }}' --required
AND AlarmName = '{{ AlarmName }}' --required
AND AlarmRule = '{{ AlarmRule }}' --required;
```
</TabItem>
<TabItem value="put_metric_alarm">

Creates or updates an alarm and associates it with the specified metric, metric math expression, anomaly detection model, Metrics Insights query, or PromQL query. For more information about using a Metrics Insights query for an alarm, see Create alarms on Metrics Insights queries. Alarms based on anomaly detection models cannot have Auto Scaling actions. When this operation creates an alarm, the alarm state is immediately set to INSUFFICIENT_DATA. For PromQL alarms, the alarm state is instead immediately set to OK. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. If you are an IAM user, you must have Amazon EC2 permissions for some alarm operations: The iam:CreateServiceLinkedRole permission for all alarms with EC2 actions The iam:CreateServiceLinkedRole permissions to create an alarm with Systems Manager OpsItem or response plan actions. The first time you create an alarm in the Amazon Web Services Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch creates the necessary service-linked role for you. The service-linked roles are called AWSServiceRoleForCloudWatchEvents and AWSServiceRoleForCloudWatchAlarms_ActionSSM. For more information, see Amazon Web Services service-linked role. Each PutMetricAlarm action has a maximum uncompressed payload of 120 KB. Cross-account alarms You can set an alarm on metrics in the current account, or in another account. To create a cross-account alarm that watches a metric in a different account, you must have completed the following pre-requisites: The account where the metrics are located (the sharing account) must already have a sharing role named CloudWatch-CrossAccountSharingRole. If it does not already have this role, you must create it using the instructions in Set up a sharing account in Cross-account cross-Region CloudWatch console. The policy for that role must grant access to the ID of the account where you are creating the alarm. The account where you are creating the alarm (the monitoring account) must already have a service-linked role named AWSServiceRoleForCloudWatchCrossAccount to allow CloudWatch to assume the sharing role in the sharing account. If it does not, you must create it following the directions in Set up a monitoring account in Cross-account cross-Region CloudWatch console.

```sql
REPLACE aws.cloudwatch.alarms
SET 
AlarmName = '{{ AlarmName }}',
AlarmDescription = '{{ AlarmDescription }}',
ActionsEnabled = {{ ActionsEnabled }},
OKActions = '{{ OKActions }}',
AlarmActions = '{{ AlarmActions }}',
InsufficientDataActions = '{{ InsufficientDataActions }}',
MetricName = '{{ MetricName }}',
Namespace = '{{ Namespace }}',
Statistic = '{{ Statistic }}',
ExtendedStatistic = '{{ ExtendedStatistic }}',
Dimensions = '{{ Dimensions }}',
Period = {{ Period }},
Unit = '{{ Unit }}',
EvaluationPeriods = {{ EvaluationPeriods }},
DatapointsToAlarm = {{ DatapointsToAlarm }},
Threshold = {{ Threshold }},
ComparisonOperator = '{{ ComparisonOperator }}',
TreatMissingData = '{{ TreatMissingData }}',
EvaluateLowSampleCountPercentile = '{{ EvaluateLowSampleCountPercentile }}',
Metrics = '{{ Metrics }}',
Tags = '{{ Tags }}',
ThresholdMetricId = '{{ ThresholdMetricId }}',
EvaluationCriteria = '{{ EvaluationCriteria }}',
EvaluationInterval = {{ EvaluationInterval }}
WHERE 
region = '{{ region }}' --required
AND AlarmName = '{{ AlarmName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_alarms"
    values={[
        { label: 'delete_alarms', value: 'delete_alarms' }
    ]}
>
<TabItem value="delete_alarms">

Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can't delete two composite alarms with one operation. If you specify any incorrect alarm names, the alarms you specify with correct names are still deleted. Other syntax errors might result in no alarms being deleted. To confirm that alarms were deleted successfully, you can use the DescribeAlarms operation after using DeleteAlarms. It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete. To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the AlarmRule of one of the alarms to false. Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path.

```sql
DELETE FROM aws.cloudwatch.alarms
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_alarm_actions"
    values={[
        { label: 'disable_alarm_actions', value: 'disable_alarm_actions' },
        { label: 'enable_alarm_actions', value: 'enable_alarm_actions' }
    ]}
>
<TabItem value="disable_alarm_actions">

Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.

```sql
EXEC aws.cloudwatch.alarms.disable_alarm_actions 
@region='{{ region }}' --required 
@@json=
'{
"AlarmNames": "{{ AlarmNames }}"
}'
;
```
</TabItem>
<TabItem value="enable_alarm_actions">

Enables the actions for the specified alarms.

```sql
EXEC aws.cloudwatch.alarms.enable_alarm_actions 
@region='{{ region }}' --required 
@@json=
'{
"AlarmNames": "{{ AlarmNames }}"
}'
;
```
</TabItem>
</Tabs>
