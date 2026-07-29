--- 
title: alarm_mute_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - alarm_mute_rules
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

Creates, updates, deletes, gets or lists an <code>alarm_mute_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alarm_mute_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudwatch.alarm_mute_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_alarm_mute_rule"
    values={[
        { label: 'get_alarm_mute_rule', value: 'get_alarm_mute_rule' },
        { label: 'list_alarm_mute_rules', value: 'list_alarm_mute_rules' }
    ]}
>
<TabItem value="get_alarm_mute_rule">

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
    <td><CopyableCode code="alarm_mute_rule_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the alarm mute rule.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the alarm mute rule.</td>
</tr>
<tr>
    <td><CopyableCode code="expire_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the mute rule expires and is no longer evaluated.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the mute rule was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="mute_targets" /></td>
    <td><code>object</code></td>
    <td>Specifies which alarms this rule applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="mute_type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the mute rule is one-time or recurring. Valid values are ONE_TIME or RECURRING.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the alarm mute rule.</td>
</tr>
<tr>
    <td><CopyableCode code="rule" /></td>
    <td><code>object</code></td>
    <td>The configuration that defines when and how long alarms are muted.</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the mute rule becomes active. If not set, the rule is active immediately.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the alarm mute rule. Valid values are SCHEDULED, ACTIVE, or EXPIRED. (SCHEDULED, ACTIVE, EXPIRED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_alarm_mute_rules">

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
    <td><CopyableCode code="alarm_mute_rule_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the alarm mute rule.</td>
</tr>
<tr>
    <td><CopyableCode code="expire_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the mute rule expires and is no longer evaluated. This field is only present if an expiration date was configured.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the mute rule was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="mute_type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the mute rule is one-time or recurring. Valid values are ONE_TIME or RECURRING.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the alarm mute rule. Valid values are SCHEDULED, ACTIVE, or EXPIRED. (SCHEDULED, ACTIVE, EXPIRED)</td>
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
    <td><a href="#get_alarm_mute_rule"><CopyableCode code="get_alarm_mute_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details for a specific alarm mute rule. This operation returns complete information about the mute rule, including its configuration, status, targeted alarms, and metadata. The returned status indicates the current state of the mute rule: SCHEDULED: The mute rule is configured and will become active in the future ACTIVE: The mute rule is currently muting alarm actions EXPIRED: The mute rule has passed its expiration date and will no longer become active Permissions To retrieve details for a mute rule, you need the cloudwatch:GetAlarmMuteRule permission on the alarm mute rule resource.</td>
</tr>
<tr>
    <td><a href="#list_alarm_mute_rules"><CopyableCode code="list_alarm_mute_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists alarm mute rules in your Amazon Web Services account and region. You can filter the results by alarm name to find all mute rules targeting a specific alarm, or by status to find rules that are scheduled, active, or expired. This operation supports pagination for accounts with many mute rules. Use the MaxRecords and NextToken parameters to retrieve results in multiple calls. Permissions To list mute rules, you need the cloudwatch:ListAlarmMuteRules permission.</td>
</tr>
<tr>
    <td><a href="#put_alarm_mute_rule"><CopyableCode code="put_alarm_mute_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates or updates an alarm mute rule. Alarm mute rules automatically mute alarm actions during predefined time windows. When a mute rule is active, targeted alarms continue to evaluate metrics and transition between states, but their configured actions (such as Amazon SNS notifications or Auto Scaling actions) are muted. You can create mute rules with recurring schedules using cron expressions or one-time mute windows using at expressions. Each mute rule can target up to 100 specific alarms by name. If you specify a rule name that already exists, this operation updates the existing rule with the new configuration. Permissions To create or update a mute rule, you must have the cloudwatch:PutAlarmMuteRule permission on two types of resources: the alarm mute rule resource itself, and each alarm that the rule targets. For example, If you want to allow a user to create mute rules that target only specific alarms named "WebServerCPUAlarm" and "DatabaseConnectionAlarm", you would create an IAM policy with one statement granting cloudwatch:PutAlarmMuteRule on the alarm mute rule resource (arn:aws:cloudwatch:&#91;REGION&#93;:123456789012:alarm-mute-rule:*), and another statement granting cloudwatch:PutAlarmMuteRule on the targeted alarm resources (arn:aws:cloudwatch:&#91;REGION&#93;:123456789012:alarm:WebServerCPUAlarm and arn:aws:cloudwatch:&#91;REGION&#93;:123456789012:alarm:DatabaseConnectionAlarm). You can also use IAM policy conditions to allow targeting alarms based on resource tags. For example, you can restrict users to create/update mute rules to only target alarms that have a specific tag key-value pair, such as Team=TeamA.</td>
</tr>
<tr>
    <td><a href="#delete_alarm_mute_rule"><CopyableCode code="delete_alarm_mute_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specific alarm mute rule. When you delete a mute rule, any alarms that are currently being muted by that rule are immediately unmuted. If those alarms are in an ALARM state, their configured actions will trigger. This operation is idempotent. If you delete a mute rule that does not exist, the operation succeeds without returning an error. Permissions To delete a mute rule, you need the cloudwatch:DeleteAlarmMuteRule permission on the alarm mute rule resource.</td>
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
    defaultValue="get_alarm_mute_rule"
    values={[
        { label: 'get_alarm_mute_rule', value: 'get_alarm_mute_rule' },
        { label: 'list_alarm_mute_rules', value: 'list_alarm_mute_rules' }
    ]}
>
<TabItem value="get_alarm_mute_rule">

Retrieves details for a specific alarm mute rule. This operation returns complete information about the mute rule, including its configuration, status, targeted alarms, and metadata. The returned status indicates the current state of the mute rule: SCHEDULED: The mute rule is configured and will become active in the future ACTIVE: The mute rule is currently muting alarm actions EXPIRED: The mute rule has passed its expiration date and will no longer become active Permissions To retrieve details for a mute rule, you need the cloudwatch:GetAlarmMuteRule permission on the alarm mute rule resource.

```sql
SELECT
alarm_mute_rule_arn,
description,
expire_date,
last_updated_timestamp,
mute_targets,
mute_type,
name,
rule,
start_date,
status
FROM aws.cloudwatch.alarm_mute_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_alarm_mute_rules">

Lists alarm mute rules in your Amazon Web Services account and region. You can filter the results by alarm name to find all mute rules targeting a specific alarm, or by status to find rules that are scheduled, active, or expired. This operation supports pagination for accounts with many mute rules. Use the MaxRecords and NextToken parameters to retrieve results in multiple calls. Permissions To list mute rules, you need the cloudwatch:ListAlarmMuteRules permission.

```sql
SELECT
alarm_mute_rule_arn,
expire_date,
last_updated_timestamp,
mute_type,
status
FROM aws.cloudwatch.alarm_mute_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_alarm_mute_rule"
    values={[
        { label: 'put_alarm_mute_rule', value: 'put_alarm_mute_rule' }
    ]}
>
<TabItem value="put_alarm_mute_rule">

Creates or updates an alarm mute rule. Alarm mute rules automatically mute alarm actions during predefined time windows. When a mute rule is active, targeted alarms continue to evaluate metrics and transition between states, but their configured actions (such as Amazon SNS notifications or Auto Scaling actions) are muted. You can create mute rules with recurring schedules using cron expressions or one-time mute windows using at expressions. Each mute rule can target up to 100 specific alarms by name. If you specify a rule name that already exists, this operation updates the existing rule with the new configuration. Permissions To create or update a mute rule, you must have the cloudwatch:PutAlarmMuteRule permission on two types of resources: the alarm mute rule resource itself, and each alarm that the rule targets. For example, If you want to allow a user to create mute rules that target only specific alarms named "WebServerCPUAlarm" and "DatabaseConnectionAlarm", you would create an IAM policy with one statement granting cloudwatch:PutAlarmMuteRule on the alarm mute rule resource (arn:aws:cloudwatch:[REGION]:123456789012:alarm-mute-rule:*), and another statement granting cloudwatch:PutAlarmMuteRule on the targeted alarm resources (arn:aws:cloudwatch:[REGION]:123456789012:alarm:WebServerCPUAlarm and arn:aws:cloudwatch:[REGION]:123456789012:alarm:DatabaseConnectionAlarm). You can also use IAM policy conditions to allow targeting alarms based on resource tags. For example, you can restrict users to create/update mute rules to only target alarms that have a specific tag key-value pair, such as Team=TeamA.

```sql
REPLACE aws.cloudwatch.alarm_mute_rules
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
Rule = '{{ Rule }}',
MuteTargets = '{{ MuteTargets }}',
Tags = '{{ Tags }}',
StartDate = '{{ StartDate }}',
ExpireDate = '{{ ExpireDate }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_alarm_mute_rule"
    values={[
        { label: 'delete_alarm_mute_rule', value: 'delete_alarm_mute_rule' }
    ]}
>
<TabItem value="delete_alarm_mute_rule">

Deletes a specific alarm mute rule. When you delete a mute rule, any alarms that are currently being muted by that rule are immediately unmuted. If those alarms are in an ALARM state, their configured actions will trigger. This operation is idempotent. If you delete a mute rule that does not exist, the operation succeeds without returning an error. Permissions To delete a mute rule, you need the cloudwatch:DeleteAlarmMuteRule permission on the alarm mute rule resource.

```sql
DELETE FROM aws.cloudwatch.alarm_mute_rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
