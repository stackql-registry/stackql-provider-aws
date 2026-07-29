--- 
title: schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - schedules
  - scheduler
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

Creates, updates, deletes, gets or lists a <code>schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.scheduler.schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_schedule"
    values={[
        { label: 'get_schedule', value: 'get_schedule' },
        { label: 'list_schedules', value: 'list_schedules' }
    ]}
>
<TabItem value="get_schedule">

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
    <td><CopyableCode code="action_after_completion" /></td>
    <td><code>string</code></td>
    <td>Indicates the action that EventBridge Scheduler applies to the schedule after the schedule completes invoking the target. (NONE, DELETE)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the schedule. (pattern: &lt;code&gt;^arn:aws(-&#91;a-z&#93;+)?:scheduler:&#91;a-z0-9\-&#93;+:\d&#123;12&#125;:schedule\/&#91;0-9a-zA-Z-_.&#93;+\/&#91;0-9a-zA-Z-_.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the schedule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="end_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the EndDate you specify. EventBridge Scheduler ignores EndDate for one-time schedules.</td>
</tr>
<tr>
    <td><CopyableCode code="flexible_time_window" /></td>
    <td><code>object</code></td>
    <td>Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schedule group associated with this schedule. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z-_.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for a customer managed KMS Key that is be used to encrypt and decrypt your data. (pattern: &lt;code&gt;^arn:aws(-&#91;a-z&#93;+)?:kms:&#91;a-z0-9\-&#93;+:\d&#123;12&#125;:(key|alias)\/&#91;0-9a-zA-Z-_&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the schedule was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the schedule. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z-_.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_expression" /></td>
    <td><code>string</code></td>
    <td>The expression that defines when the schedule runs. The following formats are supported. at expression - at(yyyy-mm-ddThh:mm:ss) rate expression - rate(value unit) cron expression - cron(fields) You can use at expressions to create one-time schedules that invoke a target once, at the time and in the time zone, that you specify. You can use rate and cron expressions to create recurring schedules. Rate-based schedules are useful when you want to invoke a target at regular intervals, such as every 15 minutes or every five days. Cron-based schedules are useful when you want to invoke a target periodically at a specific time, such as at 8:00 am (UTC+0) every 1st day of the month. A cron expression consists of six fields separated by white spaces: (minutes hours day_of_month month day_of_week year). A rate expression consists of a value as a positive integer, and a unit with the following options: minute | minutes | hour | hours | day | days For more information and examples, see Schedule types on EventBridge Scheduler in the EventBridge Scheduler User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_expression_timezone" /></td>
    <td><code>string</code></td>
    <td>The timezone in which the scheduling expression is evaluated.</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the StartDate you specify. EventBridge Scheduler ignores StartDate for one-time schedules.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the schedule is enabled or disabled. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>The schedule's target. EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_schedules">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the schedule. (pattern: &lt;code&gt;^arn:aws(-&#91;a-z&#93;+)?:scheduler:&#91;a-z0-9\-&#93;+:\d&#123;12&#125;:schedule\/&#91;0-9a-zA-Z-_.&#93;+\/&#91;0-9a-zA-Z-_.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the schedule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schedule group associated with this schedule. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z-_.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the schedule was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the schedule. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z-_.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the schedule is enabled or disabled. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>The schedule's target details.</td>
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
    <td><a href="#get_schedule"><CopyableCode code="get_schedule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-groupName"><code>groupName</code></a></td>
    <td>Retrieves the specified schedule.</td>
</tr>
<tr>
    <td><a href="#list_schedules"><CopyableCode code="list_schedules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ScheduleGroup"><code>ScheduleGroup</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NamePrefix"><code>NamePrefix</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-State"><code>State</code></a></td>
    <td>Returns a paginated list of your EventBridge Scheduler schedules.</td>
</tr>
<tr>
    <td><a href="#create_schedule"><CopyableCode code="create_schedule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FlexibleTimeWindow"><code>FlexibleTimeWindow</code></a>, <a href="#parameter-ScheduleExpression"><code>ScheduleExpression</code></a></td>
    <td></td>
    <td>Creates the specified schedule.</td>
</tr>
<tr>
    <td><a href="#update_schedule"><CopyableCode code="update_schedule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FlexibleTimeWindow"><code>FlexibleTimeWindow</code></a>, <a href="#parameter-ScheduleExpression"><code>ScheduleExpression</code></a></td>
    <td></td>
    <td>Updates the specified schedule. When you call UpdateSchedule, EventBridge Scheduler uses all values, including empty values, specified in the request and overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to its system-default value after the update. Before calling this operation, we recommend that you call the GetSchedule API operation and make a note of all optional parameters for your UpdateSchedule call.</td>
</tr>
<tr>
    <td><a href="#delete_schedule"><CopyableCode code="delete_schedule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-groupName"><code>groupName</code></a></td>
    <td>Deletes the specified schedule.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the schedule to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>If specified, limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results.</td>
</tr>
<tr id="parameter-NamePrefix">
    <td><CopyableCode code="NamePrefix" /></td>
    <td><code>string</code></td>
    <td>Schedule name prefix to return the filtered list of resources.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned by a previous call to retrieve the next set of results.</td>
</tr>
<tr id="parameter-ScheduleGroup">
    <td><CopyableCode code="ScheduleGroup" /></td>
    <td><code>string</code></td>
    <td>If specified, only lists the schedules whose associated schedule group matches the given filter.</td>
</tr>
<tr id="parameter-State">
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>If specified, only lists the schedules whose current state matches the given filter.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.</td>
</tr>
<tr id="parameter-groupName">
    <td><CopyableCode code="groupName" /></td>
    <td><code>string</code></td>
    <td>The name of the schedule group associated with this schedule. If you omit this, the default schedule group is used.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_schedule"
    values={[
        { label: 'get_schedule', value: 'get_schedule' },
        { label: 'list_schedules', value: 'list_schedules' }
    ]}
>
<TabItem value="get_schedule">

Retrieves the specified schedule.

```sql
SELECT
action_after_completion,
arn,
creation_date,
description,
end_date,
flexible_time_window,
group_name,
kms_key_arn,
last_modification_date,
name,
schedule_expression,
schedule_expression_timezone,
start_date,
state,
target
FROM aws.scheduler.schedules
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND groupName = '{{ groupName }}'
;
```
</TabItem>
<TabItem value="list_schedules">

Returns a paginated list of your EventBridge Scheduler schedules.

```sql
SELECT
arn,
creation_date,
group_name,
last_modification_date,
name,
state,
target
FROM aws.scheduler.schedules
WHERE region = '{{ region }}' -- required
AND ScheduleGroup = '{{ ScheduleGroup }}'
AND MaxResults = '{{ MaxResults }}'
AND NamePrefix = '{{ NamePrefix }}'
AND NextToken = '{{ NextToken }}'
AND State = '{{ State }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_schedule"
    values={[
        { label: 'create_schedule', value: 'create_schedule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_schedule">

Creates the specified schedule.

```sql
INSERT INTO aws.scheduler.schedules (
ActionAfterCompletion,
ClientToken,
Description,
EndDate,
FlexibleTimeWindow,
GroupName,
KmsKeyArn,
ScheduleExpression,
ScheduleExpressionTimezone,
StartDate,
State,
Target,
name,
region
)
SELECT 
'{{ ActionAfterCompletion }}',
'{{ ClientToken }}',
'{{ Description }}',
'{{ EndDate }}',
'{{ FlexibleTimeWindow }}' /* required */,
'{{ GroupName }}',
'{{ KmsKeyArn }}',
'{{ ScheduleExpression }}' /* required */,
'{{ ScheduleExpressionTimezone }}',
'{{ StartDate }}',
'{{ State }}',
'{{ Target }}',
'{{ name }}',
'{{ region }}'
RETURNING
schedule_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: schedules
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the schedules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the schedules resource.
    - name: ActionAfterCompletion
      value: "{{ ActionAfterCompletion }}"
      valid_values: ['NONE', 'DELETE']
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Description
      value: "{{ Description }}"
    - name: EndDate
      value: "{{ EndDate }}"
    - name: FlexibleTimeWindow
      description: |
        Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.
      value:
        MaximumWindowInMinutes: {{ MaximumWindowInMinutes }}
        Mode: "{{ Mode }}"
    - name: GroupName
      value: "{{ GroupName }}"
    - name: KmsKeyArn
      value: "{{ KmsKeyArn }}"
    - name: ScheduleExpression
      value: "{{ ScheduleExpression }}"
    - name: ScheduleExpressionTimezone
      value: "{{ ScheduleExpressionTimezone }}"
    - name: StartDate
      value: "{{ StartDate }}"
    - name: State
      value: "{{ State }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: Target
      description: |
        The schedule's target. EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule.
      value:
        Arn: "{{ Arn }}"
        DeadLetterConfig:
          Arn: "{{ Arn }}"
        EcsParameters:
          CapacityProviderStrategy:
            - base: {{ base }}
              capacityProvider: "{{ capacityProvider }}"
              weight: {{ weight }}
          EnableECSManagedTags: {{ EnableECSManagedTags }}
          EnableExecuteCommand: {{ EnableExecuteCommand }}
          Group: "{{ Group }}"
          LaunchType: "{{ LaunchType }}"
          NetworkConfiguration:
            awsvpcConfiguration:
              AssignPublicIp: "{{ AssignPublicIp }}"
              SecurityGroups:
                - "{{ SecurityGroups }}"
              Subnets:
                - "{{ Subnets }}"
          PlacementConstraints:
            - expression: "{{ expression }}"
              type_: "{{ type_ }}"
          PlacementStrategy:
            - field: "{{ field }}"
              type_: "{{ type_ }}"
          PlatformVersion: "{{ PlatformVersion }}"
          PropagateTags: "{{ PropagateTags }}"
          ReferenceId: "{{ ReferenceId }}"
          Tags: "{{ Tags }}"
          TaskCount: {{ TaskCount }}
          TaskDefinitionArn: "{{ TaskDefinitionArn }}"
        EventBridgeParameters:
          DetailType: "{{ DetailType }}"
          Source: "{{ Source }}"
        Input: "{{ Input }}"
        KinesisParameters:
          PartitionKey: "{{ PartitionKey }}"
        RetryPolicy:
          MaximumEventAgeInSeconds: {{ MaximumEventAgeInSeconds }}
          MaximumRetryAttempts: {{ MaximumRetryAttempts }}
        RoleArn: "{{ RoleArn }}"
        SageMakerPipelineParameters:
          PipelineParameterList:
            - Name: "{{ Name }}"
              Value: "{{ Value }}"
        SqsParameters:
          MessageGroupId: "{{ MessageGroupId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_schedule"
    values={[
        { label: 'update_schedule', value: 'update_schedule' }
    ]}
>
<TabItem value="update_schedule">

Updates the specified schedule. When you call UpdateSchedule, EventBridge Scheduler uses all values, including empty values, specified in the request and overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to its system-default value after the update. Before calling this operation, we recommend that you call the GetSchedule API operation and make a note of all optional parameters for your UpdateSchedule call.

```sql
UPDATE aws.scheduler.schedules
SET 
ActionAfterCompletion = '{{ ActionAfterCompletion }}',
ClientToken = '{{ ClientToken }}',
Description = '{{ Description }}',
EndDate = '{{ EndDate }}',
FlexibleTimeWindow = '{{ FlexibleTimeWindow }}',
GroupName = '{{ GroupName }}',
KmsKeyArn = '{{ KmsKeyArn }}',
ScheduleExpression = '{{ ScheduleExpression }}',
ScheduleExpressionTimezone = '{{ ScheduleExpressionTimezone }}',
StartDate = '{{ StartDate }}',
State = '{{ State }}',
Target = '{{ Target }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND FlexibleTimeWindow = '{{ FlexibleTimeWindow }}' --required
AND ScheduleExpression = '{{ ScheduleExpression }}' --required
RETURNING
schedule_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_schedule"
    values={[
        { label: 'delete_schedule', value: 'delete_schedule' }
    ]}
>
<TabItem value="delete_schedule">

Deletes the specified schedule.

```sql
DELETE FROM aws.scheduler.schedules
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
AND groupName = '{{ groupName }}'
;
```
</TabItem>
</Tabs>
