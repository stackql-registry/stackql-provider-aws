--- 
title: scheduled_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_actions
  - redshift
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.scheduled_actions" /></td></tr>
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
    <td><CopyableCode code="end_time" /></td>
    <td><code>string</code></td>
    <td>The end time in UTC when the schedule is no longer active. After this time, the scheduled action does not trigger.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role" /></td>
    <td><code>string</code></td>
    <td>The IAM role to assume to run the scheduled action. This IAM role must have permission to run the Amazon Redshift API operation in the scheduled action. This IAM role must allow the Amazon Redshift scheduler (Principal scheduler.redshift.amazonaws.com) to assume permissions on your behalf. For more information about the IAM role to use with the Amazon Redshift scheduler, see Using Identity-Based Policies for Amazon Redshift in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="next_invocations" /></td>
    <td><code>string</code></td>
    <td>List of times when the scheduled action will run.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>The schedule for a one-time (at format) or recurring (cron format) scheduled action. Schedule invocations must be separated by at least one hour. Format of at expressions is "at(yyyy-mm-ddThh:mm:ss)". For example, "at(2016-03-04T17:27:00)". Format of cron expressions is "cron(Minutes Hours Day-of-month Month Day-of-week Year)". For example, "cron(0 10 ? * MON *)". For more information, see Cron Expressions in the Amazon CloudWatch Events User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_action_description" /></td>
    <td><code>string</code></td>
    <td>The description of the scheduled action.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_action_name" /></td>
    <td><code>string</code></td>
    <td>The name of the scheduled action.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string</code></td>
    <td>The start time in UTC when the schedule is active. Before this time, the scheduled action does not trigger.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the scheduled action. For example, DISABLED.</td>
</tr>
<tr>
    <td><CopyableCode code="target_action" /></td>
    <td><code>string</code></td>
    <td>A JSON format string of the Amazon Redshift API operation with input parameters. "&#123;\"ResizeCluster\":&#123;\"NodeType\":\"ra3.4xlarge\",\"ClusterIdentifier\":\"my-test-cluster\",\"NumberOfNodes\":3&#125;&#125;".</td>
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
    <td><a href="#parameter-ScheduledActionName"><code>ScheduledActionName</code></a>, <a href="#parameter-TargetActionType"><code>TargetActionType</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-Active"><code>Active</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Describes properties of scheduled actions.</td>
</tr>
<tr>
    <td><a href="#create_scheduled_action"><CopyableCode code="create_scheduled_action" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ScheduledActionName"><code>ScheduledActionName</code></a>, <a href="#parameter-TargetAction"><code>TargetAction</code></a>, <a href="#parameter-IamRole"><code>IamRole</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Schedule"><code>Schedule</code></a>, <a href="#parameter-ScheduledActionDescription"><code>ScheduledActionDescription</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-Enable"><code>Enable</code></a></td>
    <td>Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the ResizeCluster API operation.</td>
</tr>
<tr>
    <td><a href="#modify_scheduled_action"><CopyableCode code="modify_scheduled_action" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ScheduledActionName"><code>ScheduledActionName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TargetAction"><code>TargetAction</code></a>, <a href="#parameter-Schedule"><code>Schedule</code></a>, <a href="#parameter-IamRole"><code>IamRole</code></a>, <a href="#parameter-ScheduledActionDescription"><code>ScheduledActionDescription</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-Enable"><code>Enable</code></a></td>
    <td>Modifies a scheduled action.</td>
</tr>
<tr>
    <td><a href="#delete_scheduled_action"><CopyableCode code="delete_scheduled_action" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ScheduledActionName"><code>ScheduledActionName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a scheduled action.</td>
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
<tr id="parameter-IamRole">
    <td><CopyableCode code="IamRole" /></td>
    <td><code>string</code></td>
    <td>The IAM role to assume to run the target action. For more information about this parameter, see ScheduledAction.</td>
</tr>
<tr id="parameter-ScheduledActionName">
    <td><CopyableCode code="ScheduledActionName" /></td>
    <td><code>string</code></td>
    <td>The name of the scheduled action to delete.</td>
</tr>
<tr id="parameter-TargetAction">
    <td><CopyableCode code="TargetAction" /></td>
    <td><code>object</code></td>
    <td>A JSON format string of the Amazon Redshift API operation with input parameters. For more information about this parameter, see ScheduledAction.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Active">
    <td><CopyableCode code="Active" /></td>
    <td><code>boolean</code></td>
    <td>If true, retrieve only active scheduled actions. If false, retrieve only disabled scheduled actions.</td>
</tr>
<tr id="parameter-Enable">
    <td><CopyableCode code="Enable" /></td>
    <td><code>boolean</code></td>
    <td>A modified enable flag of the scheduled action. If true, the scheduled action is active. If false, the scheduled action is disabled.</td>
</tr>
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A modified end time of the scheduled action. For more information about this parameter, see ScheduledAction.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>List of scheduled action filters.</td>
</tr>
<tr id="parameter-IamRole">
    <td><CopyableCode code="IamRole" /></td>
    <td><code>string</code></td>
    <td>A different IAM role to assume to run the target action. For more information about this parameter, see ScheduledAction.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeScheduledActions request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-Schedule">
    <td><CopyableCode code="Schedule" /></td>
    <td><code>string</code></td>
    <td>A modified schedule in either at( ) or cron( ) format. For more information about this parameter, see ScheduledAction.</td>
</tr>
<tr id="parameter-ScheduledActionDescription">
    <td><CopyableCode code="ScheduledActionDescription" /></td>
    <td><code>string</code></td>
    <td>A modified description of the scheduled action.</td>
</tr>
<tr id="parameter-ScheduledActionName">
    <td><CopyableCode code="ScheduledActionName" /></td>
    <td><code>string</code></td>
    <td>The name of the scheduled action to retrieve.</td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A modified start time of the scheduled action. For more information about this parameter, see ScheduledAction.</td>
</tr>
<tr id="parameter-TargetAction">
    <td><CopyableCode code="TargetAction" /></td>
    <td><code>object</code></td>
    <td>A modified JSON format of the scheduled action. For more information about this parameter, see ScheduledAction.</td>
</tr>
<tr id="parameter-TargetActionType">
    <td><CopyableCode code="TargetActionType" /></td>
    <td><code>string</code></td>
    <td>The type of the scheduled actions to retrieve.</td>
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

Describes properties of scheduled actions.

```sql
SELECT
end_time,
iam_role,
next_invocations,
schedule,
scheduled_action_description,
scheduled_action_name,
start_time,
state,
target_action
FROM aws.redshift.scheduled_actions
WHERE region = '{{ region }}' -- required
AND ScheduledActionName = '{{ ScheduledActionName }}'
AND TargetActionType = '{{ TargetActionType }}'
AND StartTime = '{{ StartTime }}'
AND EndTime = '{{ EndTime }}'
AND Active = '{{ Active }}'
AND Filters = '{{ Filters }}'
AND Marker = '{{ Marker }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_scheduled_action"
    values={[
        { label: 'create_scheduled_action', value: 'create_scheduled_action' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_scheduled_action">

Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the ResizeCluster API operation.

```sql
INSERT INTO aws.redshift.scheduled_actions (
ScheduledActionName,
TargetAction,
IamRole,
region,
Schedule,
ScheduledActionDescription,
StartTime,
EndTime,
Enable
)
SELECT 
'{{ ScheduledActionName }}',
'{{ TargetAction }}',
'{{ IamRole }}',
'{{ region }}',
'{{ Schedule }}',
'{{ ScheduledActionDescription }}',
'{{ StartTime }}',
'{{ EndTime }}',
'{{ Enable }}'
RETURNING
end_time,
iam_role,
next_invocations,
schedule,
scheduled_action_description,
scheduled_action_name,
start_time,
state,
target_action
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scheduled_actions
  props:
    - name: ScheduledActionName
      value: "{{ ScheduledActionName }}"
      description: Required parameter for the scheduled_actions resource.
    - name: TargetAction
      value: "{{ TargetAction }}"
      description: Required parameter for the scheduled_actions resource.
    - name: IamRole
      value: "{{ IamRole }}"
      description: Required parameter for the scheduled_actions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scheduled_actions resource.
    - name: Schedule
      value: "{{ Schedule }}"
      description: The schedule in at( ) or cron( ) format. For more information about this parameter, see ScheduledAction.
      description: The schedule in at( ) or cron( ) format. For more information about this parameter, see ScheduledAction.
    - name: ScheduledActionDescription
      value: "{{ ScheduledActionDescription }}"
      description: The description of the scheduled action.
      description: The description of the scheduled action.
    - name: StartTime
      value: "{{ StartTime }}"
      description: The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger. For more information about this parameter, see ScheduledAction.
      description: The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger. For more information about this parameter, see ScheduledAction.
    - name: EndTime
      value: "{{ EndTime }}"
      description: The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger. For more information about this parameter, see ScheduledAction.
      description: The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger. For more information about this parameter, see ScheduledAction.
    - name: Enable
      value: {{ Enable }}
      description: If true, the schedule is enabled. If false, the scheduled action does not trigger. For more information about state of the scheduled action, see ScheduledAction.
      description: If true, the schedule is enabled. If false, the scheduled action does not trigger. For more information about state of the scheduled action, see ScheduledAction.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_scheduled_action"
    values={[
        { label: 'modify_scheduled_action', value: 'modify_scheduled_action' }
    ]}
>
<TabItem value="modify_scheduled_action">

Modifies a scheduled action.

```sql
UPDATE aws.redshift.scheduled_actions
SET 
-- No updatable properties
WHERE 
ScheduledActionName = '{{ ScheduledActionName }}' --required
AND region = '{{ region }}' --required
AND TargetAction = '{{ TargetAction}}'
AND Schedule = '{{ Schedule}}'
AND IamRole = '{{ IamRole}}'
AND ScheduledActionDescription = '{{ ScheduledActionDescription}}'
AND StartTime = '{{ StartTime}}'
AND EndTime = '{{ EndTime}}'
AND Enable = {{ Enable}}
RETURNING
end_time,
iam_role,
next_invocations,
schedule,
scheduled_action_description,
scheduled_action_name,
start_time,
state,
target_action;
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

Deletes a scheduled action.

```sql
DELETE FROM aws.redshift.scheduled_actions
WHERE ScheduledActionName = '{{ ScheduledActionName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
