--- 
title: restore_testing_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - restore_testing_plans
  - backup
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

Creates, updates, deletes, gets or lists a <code>restore_testing_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="restore_testing_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.restore_testing_plans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_restore_testing_plan"
    values={[
        { label: 'get_restore_testing_plan', value: 'get_restore_testing_plan' },
        { label: 'list_restore_testing_plans', value: 'list_restore_testing_plans' }
    ]}
>
<TabItem value="get_restore_testing_plan">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a restore testing plan was created, in Unix format and Coordinated Universal Time (UTC). The value of CreationTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="creator_request_id" /></td>
    <td><code>string</code></td>
    <td>This identifies the request and allows failed requests to be retried without the risk of running the operation twice. If the request includes a CreatorRequestId that matches an existing backup plan, that plan is returned. This parameter is optional. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</td>
</tr>
<tr>
    <td><CopyableCode code="last_execution_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time a restore test was run with the specified restore testing plan. A date and time, in Unix format and Coordinated Universal Time (UTC). The value of LastExecutionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the restore testing plan was updated. This update is in Unix format and Coordinated Universal Time (UTC). The value of LastUpdateTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_selection" /></td>
    <td><code>object</code></td>
    <td>The specified criteria to assign a set of resources, such as recovery point types or backup vaults.</td>
</tr>
<tr>
    <td><CopyableCode code="restore_testing_plan_arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a restore testing plan.</td>
</tr>
<tr>
    <td><CopyableCode code="restore_testing_plan_name" /></td>
    <td><code>string</code></td>
    <td>The restore testing plan name.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_expression" /></td>
    <td><code>string</code></td>
    <td>A CRON expression in specified timezone when a restore testing plan is executed. When no CRON expression is provided, Backup will use the default expression cron(0 5 ? * * *).</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_expression_timezone" /></td>
    <td><code>string</code></td>
    <td>Optional. This is the timezone in which the schedule expression is set. By default, ScheduleExpressions are in UTC. You can modify this to a specified timezone.</td>
</tr>
<tr>
    <td><CopyableCode code="start_window_hours" /></td>
    <td><code>integer</code></td>
    <td>Defaults to 24 hours. A value in hours after a restore test is scheduled before a job will be canceled if it doesn't start successfully. This value is optional. If this value is included, this parameter has a maximum value of 168 hours (one week).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_restore_testing_plans">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a restore testing plan was created, in Unix format and Coordinated Universal Time (UTC). The value of CreationTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="last_execution_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time a restore test was run with the specified restore testing plan. A date and time, in Unix format and Coordinated Universal Time (UTC). The value of LastExecutionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the restore testing plan was updated. This update is in Unix format and Coordinated Universal Time (UTC). The value of LastUpdateTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="restore_testing_plan_arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifiesa restore testing plan.</td>
</tr>
<tr>
    <td><CopyableCode code="restore_testing_plan_name" /></td>
    <td><code>string</code></td>
    <td>The restore testing plan name.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_expression" /></td>
    <td><code>string</code></td>
    <td>A CRON expression in specified timezone when a restore testing plan is executed. When no CRON expression is provided, Backup will use the default expression cron(0 5 ? * * *).</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_expression_timezone" /></td>
    <td><code>string</code></td>
    <td>Optional. This is the timezone in which the schedule expression is set. By default, ScheduleExpressions are in UTC. You can modify this to a specified timezone.</td>
</tr>
<tr>
    <td><CopyableCode code="start_window_hours" /></td>
    <td><code>integer</code></td>
    <td>Defaults to 24 hours. A value in hours after a restore test is scheduled before a job will be canceled if it doesn't start successfully. This value is optional. If this value is included, this parameter has a maximum value of 168 hours (one week).</td>
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
    <td><a href="#get_restore_testing_plan"><CopyableCode code="get_restore_testing_plan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restore_testing_plan_name"><code>restore_testing_plan_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns RestoreTestingPlan details for the specified RestoreTestingPlanName. The details are the body of a restore testing plan in JSON format, in addition to plan metadata.</td>
</tr>
<tr>
    <td><a href="#list_restore_testing_plans"><CopyableCode code="list_restore_testing_plans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of restore testing plans.</td>
</tr>
<tr>
    <td><a href="#create_restore_testing_plan"><CopyableCode code="create_restore_testing_plan" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RestoreTestingPlan"><code>RestoreTestingPlan</code></a></td>
    <td></td>
    <td>Creates a restore testing plan. The first of two steps to create a restore testing plan. After this request is successful, finish the procedure using CreateRestoreTestingSelection.</td>
</tr>
<tr>
    <td><a href="#update_restore_testing_plan"><CopyableCode code="update_restore_testing_plan" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-restore_testing_plan_name"><code>restore_testing_plan_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RestoreTestingPlan"><code>RestoreTestingPlan</code></a></td>
    <td></td>
    <td>This request will send changes to your specified restore testing plan. RestoreTestingPlanName cannot be updated after it is created. RecoveryPointSelection can contain: Algorithm ExcludeVaults IncludeVaults RecoveryPointTypes SelectionWindowDays</td>
</tr>
<tr>
    <td><a href="#delete_restore_testing_plan"><CopyableCode code="delete_restore_testing_plan" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-restore_testing_plan_name"><code>restore_testing_plan_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This request deletes the specified restore testing plan. Deletion can only successfully occur if all associated restore testing selections are deleted first.</td>
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
<tr id="parameter-restore_testing_plan_name">
    <td><CopyableCode code="restore_testing_plan_name" /></td>
    <td><code>string</code></td>
    <td>Required unique name of the restore testing plan you wish to delete.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to be returned.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the nexttoken.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_restore_testing_plan"
    values={[
        { label: 'get_restore_testing_plan', value: 'get_restore_testing_plan' },
        { label: 'list_restore_testing_plans', value: 'list_restore_testing_plans' }
    ]}
>
<TabItem value="get_restore_testing_plan">

Returns RestoreTestingPlan details for the specified RestoreTestingPlanName. The details are the body of a restore testing plan in JSON format, in addition to plan metadata.

```sql
SELECT
creation_time,
creator_request_id,
last_execution_time,
last_update_time,
recovery_point_selection,
restore_testing_plan_arn,
restore_testing_plan_name,
schedule_expression,
schedule_expression_timezone,
start_window_hours
FROM aws.backup.restore_testing_plans
WHERE restore_testing_plan_name = '{{ restore_testing_plan_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_restore_testing_plans">

Returns a list of restore testing plans.

```sql
SELECT
creation_time,
last_execution_time,
last_update_time,
restore_testing_plan_arn,
restore_testing_plan_name,
schedule_expression,
schedule_expression_timezone,
start_window_hours
FROM aws.backup.restore_testing_plans
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_restore_testing_plan"
    values={[
        { label: 'create_restore_testing_plan', value: 'create_restore_testing_plan' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_restore_testing_plan">

Creates a restore testing plan. The first of two steps to create a restore testing plan. After this request is successful, finish the procedure using CreateRestoreTestingSelection.

```sql
INSERT INTO aws.backup.restore_testing_plans (
CreatorRequestId,
RestoreTestingPlan,
Tags,
region
)
SELECT 
'{{ CreatorRequestId }}',
'{{ RestoreTestingPlan }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
creation_time,
restore_testing_plan_arn,
restore_testing_plan_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: restore_testing_plans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the restore_testing_plans resource.
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
    - name: RestoreTestingPlan
      description: |
        This contains metadata about a restore testing plan.
      value:
        RecoveryPointSelection:
          Algorithm: "{{ Algorithm }}"
          ExcludeVaults:
            - "{{ ExcludeVaults }}"
          IncludeVaults:
            - "{{ IncludeVaults }}"
          RecoveryPointTypes:
            - "{{ RecoveryPointTypes }}"
          SelectionWindowDays: {{ SelectionWindowDays }}
        RestoreTestingPlanName: "{{ RestoreTestingPlanName }}"
        ScheduleExpression: "{{ ScheduleExpression }}"
        ScheduleExpressionTimezone: "{{ ScheduleExpressionTimezone }}"
        StartWindowHours: {{ StartWindowHours }}
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_restore_testing_plan"
    values={[
        { label: 'update_restore_testing_plan', value: 'update_restore_testing_plan' }
    ]}
>
<TabItem value="update_restore_testing_plan">

This request will send changes to your specified restore testing plan. RestoreTestingPlanName cannot be updated after it is created. RecoveryPointSelection can contain: Algorithm ExcludeVaults IncludeVaults RecoveryPointTypes SelectionWindowDays

```sql
UPDATE aws.backup.restore_testing_plans
SET 
RestoreTestingPlan = '{{ RestoreTestingPlan }}'
WHERE 
restore_testing_plan_name = '{{ restore_testing_plan_name }}' --required
AND region = '{{ region }}' --required
AND RestoreTestingPlan = '{{ RestoreTestingPlan }}' --required
RETURNING
creation_time,
restore_testing_plan_arn,
restore_testing_plan_name,
update_time;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_restore_testing_plan"
    values={[
        { label: 'delete_restore_testing_plan', value: 'delete_restore_testing_plan' }
    ]}
>
<TabItem value="delete_restore_testing_plan">

This request deletes the specified restore testing plan. Deletion can only successfully occur if all associated restore testing selections are deleted first.

```sql
DELETE FROM aws.backup.restore_testing_plans
WHERE restore_testing_plan_name = '{{ restore_testing_plan_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
