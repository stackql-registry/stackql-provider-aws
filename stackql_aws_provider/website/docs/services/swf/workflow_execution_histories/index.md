--- 
title: workflow_execution_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_execution_histories
  - swf
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

Creates, updates, deletes, gets or lists a <code>workflow_execution_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_execution_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.swf.workflow_execution_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow_execution_history"
    values={[
        { label: 'get_workflow_execution_history', value: 'get_workflow_execution_history' }
    ]}
>
<TabItem value="get_workflow_execution_history">

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
    <td><CopyableCode code="activity_task_cancel_requested_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ActivityTaskcancelRequested then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="activity_task_canceled_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ActivityTaskCanceled then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="activity_task_completed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ActivityTaskCompleted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="activity_task_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ActivityTaskFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="activity_task_scheduled_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ActivityTaskScheduled then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="activity_task_started_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ActivityTaskStarted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="activity_task_timed_out_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ActivityTaskTimedOut then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="cancel_timer_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type CancelTimerFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="cancel_workflow_execution_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type CancelWorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="child_workflow_execution_canceled_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ChildWorkflowExecutionCanceled then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="child_workflow_execution_completed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ChildWorkflowExecutionCompleted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="child_workflow_execution_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ChildWorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="child_workflow_execution_started_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ChildWorkflowExecutionStarted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="child_workflow_execution_terminated_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ChildWorkflowExecutionTerminated then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="child_workflow_execution_timed_out_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ChildWorkflowExecutionTimedOut then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="complete_workflow_execution_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type CompleteWorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="continue_as_new_workflow_execution_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ContinueAsNewWorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="decision_task_completed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type DecisionTaskCompleted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="decision_task_scheduled_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type DecisionTaskScheduled then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="decision_task_started_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type DecisionTaskStarted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="decision_task_timed_out_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type DecisionTaskTimedOut then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="event_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The system generated ID of the event. This ID uniquely identifies the event with in the workflow execution history.</td>
</tr>
<tr>
    <td><CopyableCode code="event_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the event occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of the history event. (WorkflowExecutionStarted, WorkflowExecutionCancelRequested, WorkflowExecutionCompleted, CompleteWorkflowExecutionFailed, WorkflowExecutionFailed, FailWorkflowExecutionFailed, WorkflowExecutionTimedOut, WorkflowExecutionCanceled, CancelWorkflowExecutionFailed, WorkflowExecutionContinuedAsNew, ContinueAsNewWorkflowExecutionFailed, WorkflowExecutionTerminated, DecisionTaskScheduled, DecisionTaskStarted, DecisionTaskCompleted, DecisionTaskTimedOut, ActivityTaskScheduled, ScheduleActivityTaskFailed, ActivityTaskStarted, ActivityTaskCompleted, ActivityTaskFailed, ActivityTaskTimedOut, ActivityTaskCanceled, ActivityTaskCancelRequested, RequestCancelActivityTaskFailed, WorkflowExecutionSignaled, MarkerRecorded, RecordMarkerFailed, TimerStarted, StartTimerFailed, TimerFired, TimerCanceled, CancelTimerFailed, StartChildWorkflowExecutionInitiated, StartChildWorkflowExecutionFailed, ChildWorkflowExecutionStarted, ChildWorkflowExecutionCompleted, ChildWorkflowExecutionFailed, ChildWorkflowExecutionTimedOut, ChildWorkflowExecutionCanceled, ChildWorkflowExecutionTerminated, SignalExternalWorkflowExecutionInitiated, SignalExternalWorkflowExecutionFailed, ExternalWorkflowExecutionSignaled, RequestCancelExternalWorkflowExecutionInitiated, RequestCancelExternalWorkflowExecutionFailed, ExternalWorkflowExecutionCancelRequested, LambdaFunctionScheduled, LambdaFunctionStarted, LambdaFunctionCompleted, LambdaFunctionFailed, LambdaFunctionTimedOut, ScheduleLambdaFunctionFailed, StartLambdaFunctionFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="external_workflow_execution_cancel_requested_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ExternalWorkflowExecutionCancelRequested then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="external_workflow_execution_signaled_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ExternalWorkflowExecutionSignaled then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="fail_workflow_execution_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type FailWorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="lambda_function_completed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>Provides the details of the LambdaFunctionCompleted event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="lambda_function_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>Provides the details of the LambdaFunctionFailed event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="lambda_function_scheduled_event_attributes" /></td>
    <td><code>object</code></td>
    <td>Provides the details of the LambdaFunctionScheduled event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="lambda_function_started_event_attributes" /></td>
    <td><code>object</code></td>
    <td>Provides the details of the LambdaFunctionStarted event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="lambda_function_timed_out_event_attributes" /></td>
    <td><code>object</code></td>
    <td>Provides the details of the LambdaFunctionTimedOut event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="marker_recorded_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type MarkerRecorded then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="record_marker_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type DecisionTaskFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="request_cancel_activity_task_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type RequestCancelActivityTaskFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="request_cancel_external_workflow_execution_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type RequestCancelExternalWorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="request_cancel_external_workflow_execution_initiated_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type RequestCancelExternalWorkflowExecutionInitiated then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_activity_task_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ScheduleActivityTaskFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_lambda_function_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>Provides the details of the ScheduleLambdaFunctionFailed event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="signal_external_workflow_execution_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type SignalExternalWorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="signal_external_workflow_execution_initiated_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type SignalExternalWorkflowExecutionInitiated then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="start_child_workflow_execution_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type StartChildWorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="start_child_workflow_execution_initiated_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type StartChildWorkflowExecutionInitiated then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="start_lambda_function_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>Provides the details of the StartLambdaFunctionFailed event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="start_timer_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type StartTimerFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="timer_canceled_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type TimerCanceled then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="timer_fired_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type TimerFired then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="timer_started_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type TimerStarted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_execution_cancel_requested_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionCancelRequested then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_execution_canceled_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionCanceled then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_execution_completed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionCompleted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_execution_continued_as_new_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionContinuedAsNew then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_execution_failed_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_execution_signaled_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionSignaled then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_execution_started_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionStarted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_execution_terminated_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionTerminated then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_execution_timed_out_event_attributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionTimedOut then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
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
    <td><a href="#get_workflow_execution_history"><CopyableCode code="get_workflow_execution_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the history of the specified workflow execution. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.</td>
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
    defaultValue="get_workflow_execution_history"
    values={[
        { label: 'get_workflow_execution_history', value: 'get_workflow_execution_history' }
    ]}
>
<TabItem value="get_workflow_execution_history">

Returns the history of the specified workflow execution. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

```sql
SELECT
activity_task_cancel_requested_event_attributes,
activity_task_canceled_event_attributes,
activity_task_completed_event_attributes,
activity_task_failed_event_attributes,
activity_task_scheduled_event_attributes,
activity_task_started_event_attributes,
activity_task_timed_out_event_attributes,
cancel_timer_failed_event_attributes,
cancel_workflow_execution_failed_event_attributes,
child_workflow_execution_canceled_event_attributes,
child_workflow_execution_completed_event_attributes,
child_workflow_execution_failed_event_attributes,
child_workflow_execution_started_event_attributes,
child_workflow_execution_terminated_event_attributes,
child_workflow_execution_timed_out_event_attributes,
complete_workflow_execution_failed_event_attributes,
continue_as_new_workflow_execution_failed_event_attributes,
decision_task_completed_event_attributes,
decision_task_scheduled_event_attributes,
decision_task_started_event_attributes,
decision_task_timed_out_event_attributes,
event_id,
event_timestamp,
event_type,
external_workflow_execution_cancel_requested_event_attributes,
external_workflow_execution_signaled_event_attributes,
fail_workflow_execution_failed_event_attributes,
lambda_function_completed_event_attributes,
lambda_function_failed_event_attributes,
lambda_function_scheduled_event_attributes,
lambda_function_started_event_attributes,
lambda_function_timed_out_event_attributes,
marker_recorded_event_attributes,
record_marker_failed_event_attributes,
request_cancel_activity_task_failed_event_attributes,
request_cancel_external_workflow_execution_failed_event_attributes,
request_cancel_external_workflow_execution_initiated_event_attributes,
schedule_activity_task_failed_event_attributes,
schedule_lambda_function_failed_event_attributes,
signal_external_workflow_execution_failed_event_attributes,
signal_external_workflow_execution_initiated_event_attributes,
start_child_workflow_execution_failed_event_attributes,
start_child_workflow_execution_initiated_event_attributes,
start_lambda_function_failed_event_attributes,
start_timer_failed_event_attributes,
timer_canceled_event_attributes,
timer_fired_event_attributes,
timer_started_event_attributes,
workflow_execution_cancel_requested_event_attributes,
workflow_execution_canceled_event_attributes,
workflow_execution_completed_event_attributes,
workflow_execution_continued_as_new_event_attributes,
workflow_execution_failed_event_attributes,
workflow_execution_signaled_event_attributes,
workflow_execution_started_event_attributes,
workflow_execution_terminated_event_attributes,
workflow_execution_timed_out_event_attributes
FROM aws.swf.workflow_execution_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
