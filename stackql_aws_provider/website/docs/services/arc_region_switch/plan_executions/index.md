--- 
title: plan_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - plan_executions
  - arc_region_switch
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

Creates, updates, deletes, gets or lists a <code>plan_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="plan_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.arc_region_switch.plan_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_plan_execution"
    values={[
        { label: 'get_plan_execution', value: 'get_plan_execution' },
        { label: 'list_plan_executions', value: 'list_plan_executions' }
    ]}
>
<TabItem value="get_plan_execution">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a step in a workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when a step endeded execution.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when a step started execution.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a step in a workflow. For example, a status might be Completed or Pending Approval. (notStarted, running, failed, completed, canceled, skipped, pendingApproval)</td>
</tr>
<tr>
    <td><CopyableCode code="stepMode" /></td>
    <td><code>string</code></td>
    <td>The mode for a step execution. The mode can be Graceful or Ungraceful. (graceful, ungraceful)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_plan_executions">

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
    <td><CopyableCode code="actualRecoveryTime" /></td>
    <td><code>string</code></td>
    <td>The actual recovery time that Region switch calculates for a plan execution. Actual recovery time includes the time for the plan to run added to the time elapsed until the application health alarms that you've specified are healthy again. (pattern: &lt;code&gt;P(?!$)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment about the plan execution.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the plan execution was ended.</td>
</tr>
<tr>
    <td><CopyableCode code="executionAction" /></td>
    <td><code>string</code></td>
    <td>The plan execution action. Valid values are activate, to activate an Amazon Web Services Region, or deactivate, to deactivate a Region. (activate, deactivate, postRecovery)</td>
</tr>
<tr>
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>The execution identifier of a plan execution.</td>
</tr>
<tr>
    <td><CopyableCode code="executionRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region for a plan execution.</td>
</tr>
<tr>
    <td><CopyableCode code="executionState" /></td>
    <td><code>string</code></td>
    <td>The plan execution state. Provides the state of a plan execution, for example, In Progress or Paused by Operator. (inProgress, pausedByFailedStep, pausedByOperator, completed, completedWithExceptions, canceled, planExecutionTimedOut, pendingManualApproval, failed, pending, completedMonitoringApplicationHealth)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The plan execution mode. Valid values are graceful, for graceful executions, or ungraceful, for ungraceful executions. (graceful, ungraceful)</td>
</tr>
<tr>
    <td><CopyableCode code="planArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the plan. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;*:arc-region-switch::&#91;0-9&#93;&#123;12&#125;:plan/(&#91;a-zA-Z0-9&#93;(?:&#91;a-zA-Z0-9-&#93;&#123;0,30&#125;&#91;a-zA-Z0-9&#93;)?):(&#91;a-z0-9&#93;&#123;6&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recoveryExecutionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the most recent recovery execution. Required when starting a post-recovery execution.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the plan execution was started.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the plan execution was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version for the plan.</td>
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
    <td><a href="#get_plan_execution"><CopyableCode code="get_plan_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific plan execution. You must specify the plan ARN and execution ID.</td>
</tr>
<tr>
    <td><a href="#list_plan_executions"><CopyableCode code="list_plan_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the executions of a Region switch plan. This operation returns information about both current and historical executions.</td>
</tr>
<tr>
    <td><a href="#update_plan_execution_step"><CopyableCode code="update_plan_execution_step" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-planArn"><code>planArn</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-comment"><code>comment</code></a>, <a href="#parameter-stepName"><code>stepName</code></a>, <a href="#parameter-actionToTake"><code>actionToTake</code></a></td>
    <td></td>
    <td>Updates a specific step in an in-progress plan execution. This operation allows you to modify the step's comment or action.</td>
</tr>
<tr>
    <td><a href="#update_plan_execution"><CopyableCode code="update_plan_execution" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-planArn"><code>planArn</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Updates an in-progress plan execution. This operation allows you to modify certain aspects of the execution, such as adding a comment or changing the action.</td>
</tr>
<tr>
    <td><a href="#approve_plan_execution_step"><CopyableCode code="approve_plan_execution_step" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-planArn"><code>planArn</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-stepName"><code>stepName</code></a>, <a href="#parameter-approval"><code>approval</code></a></td>
    <td></td>
    <td>Approves a step in a plan execution that requires manual approval. When you create a plan, you can include approval steps that require manual intervention before the execution can proceed. This operation allows you to provide that approval. You must specify the plan ARN, execution ID, step name, and approval status. You can also provide an optional comment explaining the approval decision.</td>
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
    defaultValue="get_plan_execution"
    values={[
        { label: 'get_plan_execution', value: 'get_plan_execution' },
        { label: 'list_plan_executions', value: 'list_plan_executions' }
    ]}
>
<TabItem value="get_plan_execution">

Retrieves detailed information about a specific plan execution. You must specify the plan ARN and execution ID.

```sql
SELECT
name,
endTime,
startTime,
status,
stepMode
FROM aws.arc_region_switch.plan_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_plan_executions">

Lists the executions of a Region switch plan. This operation returns information about both current and historical executions.

```sql
SELECT
actualRecoveryTime,
comment,
endTime,
executionAction,
executionId,
executionRegion,
executionState,
mode,
planArn,
recoveryExecutionId,
startTime,
updatedAt,
version
FROM aws.arc_region_switch.plan_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_plan_execution_step"
    values={[
        { label: 'update_plan_execution_step', value: 'update_plan_execution_step' },
        { label: 'update_plan_execution', value: 'update_plan_execution' }
    ]}
>
<TabItem value="update_plan_execution_step">

Updates a specific step in an in-progress plan execution. This operation allows you to modify the step's comment or action.

```sql
UPDATE aws.arc_region_switch.plan_executions
SET 
planArn = '{{ planArn }}',
executionId = '{{ executionId }}',
comment = '{{ comment }}',
stepName = '{{ stepName }}',
actionToTake = '{{ actionToTake }}'
WHERE 
region = '{{ region }}' --required
AND planArn = '{{ planArn }}' --required
AND executionId = '{{ executionId }}' --required
AND comment = '{{ comment }}' --required
AND stepName = '{{ stepName }}' --required
AND actionToTake = '{{ actionToTake }}' --required;
```
</TabItem>
<TabItem value="update_plan_execution">

Updates an in-progress plan execution. This operation allows you to modify certain aspects of the execution, such as adding a comment or changing the action.

```sql
UPDATE aws.arc_region_switch.plan_executions
SET 
planArn = '{{ planArn }}',
executionId = '{{ executionId }}',
action = '{{ action }}',
comment = '{{ comment }}'
WHERE 
region = '{{ region }}' --required
AND planArn = '{{ planArn }}' --required
AND executionId = '{{ executionId }}' --required
AND action = '{{ action }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="approve_plan_execution_step"
    values={[
        { label: 'approve_plan_execution_step', value: 'approve_plan_execution_step' }
    ]}
>
<TabItem value="approve_plan_execution_step">

Approves a step in a plan execution that requires manual approval. When you create a plan, you can include approval steps that require manual intervention before the execution can proceed. This operation allows you to provide that approval. You must specify the plan ARN, execution ID, step name, and approval status. You can also provide an optional comment explaining the approval decision.

```sql
EXEC aws.arc_region_switch.plan_executions.approve_plan_execution_step 
@region='{{ region }}' --required 
@@json=
'{
"planArn": "{{ planArn }}", 
"executionId": "{{ executionId }}", 
"stepName": "{{ stepName }}", 
"approval": "{{ approval }}", 
"comment": "{{ comment }}"
}'
;
```
</TabItem>
</Tabs>
