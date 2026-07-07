--- 
title: automation_step_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - automation_step_executions
  - ssm
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

Creates, updates, deletes, gets or lists an <code>automation_step_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automation_step_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.automation_step_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_automation_step_executions"
    values={[
        { label: 'describe_automation_step_executions', value: 'describe_automation_step_executions' }
    ]}
>
<TabItem value="describe_automation_step_executions">

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
    <td><CopyableCode code="Action" /></td>
    <td><code>string</code></td>
    <td>The action this step performs. The action determines the behavior of the step. (pattern: &lt;code&gt;^aws:&#91;a-zA-Z&#93;&#123;3,25&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>If a step has finished execution, this contains the time the execution ended. If the step hasn't yet concluded, this field isn't populated.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>If a step has begun execution, this contains the time the step started. If the step is in Pending status, this field isn't populated.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureDetails" /></td>
    <td><code>object</code></td>
    <td>Information about the Automation failure.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureMessage" /></td>
    <td><code>string</code></td>
    <td>If a step failed, this message explains why the execution failed.</td>
</tr>
<tr>
    <td><CopyableCode code="Inputs" /></td>
    <td><code>object</code></td>
    <td>Fully-resolved values passed into the step before execution.</td>
</tr>
<tr>
    <td><CopyableCode code="IsCritical" /></td>
    <td><code>boolean</code></td>
    <td>The flag which can be used to help decide whether the failure of current step leads to the Automation failure.</td>
</tr>
<tr>
    <td><CopyableCode code="IsEnd" /></td>
    <td><code>boolean</code></td>
    <td>The flag which can be used to end automation no matter whether the step succeeds or fails.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxAttempts" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of tries to run the action of the step. The default value is 1.</td>
</tr>
<tr>
    <td><CopyableCode code="NextStep" /></td>
    <td><code>string</code></td>
    <td>The next step after the step succeeds.</td>
</tr>
<tr>
    <td><CopyableCode code="OnFailure" /></td>
    <td><code>string</code></td>
    <td>The action to take if the step fails. The default value is Abort.</td>
</tr>
<tr>
    <td><CopyableCode code="Outputs" /></td>
    <td><code>object</code></td>
    <td>Returned values from the execution of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="OverriddenParameters" /></td>
    <td><code>object</code></td>
    <td>A user-specified list of parameters to override when running a step.</td>
</tr>
<tr>
    <td><CopyableCode code="ParentStepDetails" /></td>
    <td><code>object</code></td>
    <td>Information about the parent step.</td>
</tr>
<tr>
    <td><CopyableCode code="Response" /></td>
    <td><code>string</code></td>
    <td>A message associated with the response code for an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="ResponseCode" /></td>
    <td><code>string</code></td>
    <td>The response code returned by the execution of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="StepExecutionId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of a step execution.</td>
</tr>
<tr>
    <td><CopyableCode code="StepName" /></td>
    <td><code>string</code></td>
    <td>The name of this execution step.</td>
</tr>
<tr>
    <td><CopyableCode code="StepStatus" /></td>
    <td><code>string</code></td>
    <td>The execution status for this step. (Pending, InProgress, Waiting, Success, TimedOut, Cancelling, Cancelled, Failed, PendingApproval, Approved, Rejected, Scheduled, RunbookInProgress, PendingChangeCalendarOverride, ChangeCalendarOverrideApproved, ChangeCalendarOverrideRejected, CompletedWithSuccess, CompletedWithFailure, Exited)</td>
</tr>
<tr>
    <td><CopyableCode code="TargetLocation" /></td>
    <td><code>object</code></td>
    <td>The combination of Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Automation execution.</td>
</tr>
<tr>
    <td><CopyableCode code="Targets" /></td>
    <td><code>array</code></td>
    <td>The targets for the step execution.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeoutSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timeout seconds of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="TriggeredAlarms" /></td>
    <td><code>array</code></td>
    <td>The CloudWatch alarms that were invoked by the automation.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidNextSteps" /></td>
    <td><code>array</code></td>
    <td>Strategies used when step fails, we support Continue and Abort. Abort will fail the automation when the step fails. Continue will ignore the failure of current step and allow automation to run the next step. With conditional branching, we add step:stepName to support the automation to go to another specific step.</td>
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
    <td><a href="#describe_automation_step_executions"><CopyableCode code="describe_automation_step_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Information about all active and terminated step executions in an Automation workflow.</td>
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
    defaultValue="describe_automation_step_executions"
    values={[
        { label: 'describe_automation_step_executions', value: 'describe_automation_step_executions' }
    ]}
>
<TabItem value="describe_automation_step_executions">

Information about all active and terminated step executions in an Automation workflow.

```sql
SELECT
Action,
ExecutionEndTime,
ExecutionStartTime,
FailureDetails,
FailureMessage,
Inputs,
IsCritical,
IsEnd,
MaxAttempts,
NextStep,
OnFailure,
Outputs,
OverriddenParameters,
ParentStepDetails,
Response,
ResponseCode,
StepExecutionId,
StepName,
StepStatus,
TargetLocation,
Targets,
TimeoutSeconds,
TriggeredAlarms,
ValidNextSteps
FROM aws.ssm.automation_step_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
