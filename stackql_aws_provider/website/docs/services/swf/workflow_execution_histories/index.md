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
    <td><CopyableCode code="activityTaskCancelRequestedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ActivityTaskcancelRequested then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="activityTaskCanceledEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ActivityTaskCanceled then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="activityTaskCompletedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ActivityTaskCompleted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="activityTaskFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ActivityTaskFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="activityTaskScheduledEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ActivityTaskScheduled then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="activityTaskStartedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ActivityTaskStarted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="activityTaskTimedOutEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ActivityTaskTimedOut then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="cancelTimerFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type CancelTimerFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="cancelWorkflowExecutionFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type CancelWorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="childWorkflowExecutionCanceledEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ChildWorkflowExecutionCanceled then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="childWorkflowExecutionCompletedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ChildWorkflowExecutionCompleted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="childWorkflowExecutionFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ChildWorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="childWorkflowExecutionStartedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ChildWorkflowExecutionStarted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="childWorkflowExecutionTerminatedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ChildWorkflowExecutionTerminated then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="childWorkflowExecutionTimedOutEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ChildWorkflowExecutionTimedOut then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="completeWorkflowExecutionFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type CompleteWorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="continueAsNewWorkflowExecutionFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ContinueAsNewWorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="decisionTaskCompletedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type DecisionTaskCompleted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="decisionTaskScheduledEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type DecisionTaskScheduled then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="decisionTaskStartedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type DecisionTaskStarted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="decisionTaskTimedOutEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type DecisionTaskTimedOut then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="eventId" /></td>
    <td><code>integer (int64)</code></td>
    <td>The system generated ID of the event. This ID uniquely identifies the event with in the workflow execution history.</td>
</tr>
<tr>
    <td><CopyableCode code="eventTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the event occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="eventType" /></td>
    <td><code>string</code></td>
    <td>The type of the history event. (WorkflowExecutionStarted, WorkflowExecutionCancelRequested, WorkflowExecutionCompleted, CompleteWorkflowExecutionFailed, WorkflowExecutionFailed, FailWorkflowExecutionFailed, WorkflowExecutionTimedOut, WorkflowExecutionCanceled, CancelWorkflowExecutionFailed, WorkflowExecutionContinuedAsNew, ContinueAsNewWorkflowExecutionFailed, WorkflowExecutionTerminated, DecisionTaskScheduled, DecisionTaskStarted, DecisionTaskCompleted, DecisionTaskTimedOut, ActivityTaskScheduled, ScheduleActivityTaskFailed, ActivityTaskStarted, ActivityTaskCompleted, ActivityTaskFailed, ActivityTaskTimedOut, ActivityTaskCanceled, ActivityTaskCancelRequested, RequestCancelActivityTaskFailed, WorkflowExecutionSignaled, MarkerRecorded, RecordMarkerFailed, TimerStarted, StartTimerFailed, TimerFired, TimerCanceled, CancelTimerFailed, StartChildWorkflowExecutionInitiated, StartChildWorkflowExecutionFailed, ChildWorkflowExecutionStarted, ChildWorkflowExecutionCompleted, ChildWorkflowExecutionFailed, ChildWorkflowExecutionTimedOut, ChildWorkflowExecutionCanceled, ChildWorkflowExecutionTerminated, SignalExternalWorkflowExecutionInitiated, SignalExternalWorkflowExecutionFailed, ExternalWorkflowExecutionSignaled, RequestCancelExternalWorkflowExecutionInitiated, RequestCancelExternalWorkflowExecutionFailed, ExternalWorkflowExecutionCancelRequested, LambdaFunctionScheduled, LambdaFunctionStarted, LambdaFunctionCompleted, LambdaFunctionFailed, LambdaFunctionTimedOut, ScheduleLambdaFunctionFailed, StartLambdaFunctionFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="externalWorkflowExecutionCancelRequestedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ExternalWorkflowExecutionCancelRequested then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="externalWorkflowExecutionSignaledEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ExternalWorkflowExecutionSignaled then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="failWorkflowExecutionFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type FailWorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="lambdaFunctionCompletedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>Provides the details of the LambdaFunctionCompleted event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="lambdaFunctionFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>Provides the details of the LambdaFunctionFailed event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="lambdaFunctionScheduledEventAttributes" /></td>
    <td><code>object</code></td>
    <td>Provides the details of the LambdaFunctionScheduled event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="lambdaFunctionStartedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>Provides the details of the LambdaFunctionStarted event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="lambdaFunctionTimedOutEventAttributes" /></td>
    <td><code>object</code></td>
    <td>Provides the details of the LambdaFunctionTimedOut event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="markerRecordedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type MarkerRecorded then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="recordMarkerFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type DecisionTaskFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="requestCancelActivityTaskFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type RequestCancelActivityTaskFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="requestCancelExternalWorkflowExecutionFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type RequestCancelExternalWorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="requestCancelExternalWorkflowExecutionInitiatedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type RequestCancelExternalWorkflowExecutionInitiated then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleActivityTaskFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type ScheduleActivityTaskFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleLambdaFunctionFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>Provides the details of the ScheduleLambdaFunctionFailed event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="signalExternalWorkflowExecutionFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type SignalExternalWorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="signalExternalWorkflowExecutionInitiatedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type SignalExternalWorkflowExecutionInitiated then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="startChildWorkflowExecutionFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type StartChildWorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="startChildWorkflowExecutionInitiatedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type StartChildWorkflowExecutionInitiated then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="startLambdaFunctionFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>Provides the details of the StartLambdaFunctionFailed event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="startTimerFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type StartTimerFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="timerCanceledEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type TimerCanceled then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="timerFiredEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type TimerFired then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="timerStartedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type TimerStarted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowExecutionCancelRequestedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionCancelRequested then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowExecutionCanceledEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionCanceled then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowExecutionCompletedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionCompleted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowExecutionContinuedAsNewEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionContinuedAsNew then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowExecutionFailedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionFailed then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowExecutionSignaledEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionSignaled then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowExecutionStartedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionStarted then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowExecutionTerminatedEventAttributes" /></td>
    <td><code>object</code></td>
    <td>If the event is of type WorkflowExecutionTerminated then this member is set and provides detailed information about the event. It isn't set for other event types.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowExecutionTimedOutEventAttributes" /></td>
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
activityTaskCancelRequestedEventAttributes,
activityTaskCanceledEventAttributes,
activityTaskCompletedEventAttributes,
activityTaskFailedEventAttributes,
activityTaskScheduledEventAttributes,
activityTaskStartedEventAttributes,
activityTaskTimedOutEventAttributes,
cancelTimerFailedEventAttributes,
cancelWorkflowExecutionFailedEventAttributes,
childWorkflowExecutionCanceledEventAttributes,
childWorkflowExecutionCompletedEventAttributes,
childWorkflowExecutionFailedEventAttributes,
childWorkflowExecutionStartedEventAttributes,
childWorkflowExecutionTerminatedEventAttributes,
childWorkflowExecutionTimedOutEventAttributes,
completeWorkflowExecutionFailedEventAttributes,
continueAsNewWorkflowExecutionFailedEventAttributes,
decisionTaskCompletedEventAttributes,
decisionTaskScheduledEventAttributes,
decisionTaskStartedEventAttributes,
decisionTaskTimedOutEventAttributes,
eventId,
eventTimestamp,
eventType,
externalWorkflowExecutionCancelRequestedEventAttributes,
externalWorkflowExecutionSignaledEventAttributes,
failWorkflowExecutionFailedEventAttributes,
lambdaFunctionCompletedEventAttributes,
lambdaFunctionFailedEventAttributes,
lambdaFunctionScheduledEventAttributes,
lambdaFunctionStartedEventAttributes,
lambdaFunctionTimedOutEventAttributes,
markerRecordedEventAttributes,
recordMarkerFailedEventAttributes,
requestCancelActivityTaskFailedEventAttributes,
requestCancelExternalWorkflowExecutionFailedEventAttributes,
requestCancelExternalWorkflowExecutionInitiatedEventAttributes,
scheduleActivityTaskFailedEventAttributes,
scheduleLambdaFunctionFailedEventAttributes,
signalExternalWorkflowExecutionFailedEventAttributes,
signalExternalWorkflowExecutionInitiatedEventAttributes,
startChildWorkflowExecutionFailedEventAttributes,
startChildWorkflowExecutionInitiatedEventAttributes,
startLambdaFunctionFailedEventAttributes,
startTimerFailedEventAttributes,
timerCanceledEventAttributes,
timerFiredEventAttributes,
timerStartedEventAttributes,
workflowExecutionCancelRequestedEventAttributes,
workflowExecutionCanceledEventAttributes,
workflowExecutionCompletedEventAttributes,
workflowExecutionContinuedAsNewEventAttributes,
workflowExecutionFailedEventAttributes,
workflowExecutionSignaledEventAttributes,
workflowExecutionStartedEventAttributes,
workflowExecutionTerminatedEventAttributes,
workflowExecutionTimedOutEventAttributes
FROM aws.swf.workflow_execution_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
