--- 
title: execution_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - execution_histories
  - stepfunctions
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

Creates, updates, deletes, gets or lists an <code>execution_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="execution_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.stepfunctions.execution_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_execution_history"
    values={[
        { label: 'get_execution_history', value: 'get_execution_history' }
    ]}
>
<TabItem value="get_execution_history">

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
    <td><CopyableCode code="id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The id of the event. Events are numbered sequentially, starting at one.</td>
</tr>
<tr>
    <td><CopyableCode code="activityFailedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about an activity that failed during an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="activityScheduleFailedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about an activity schedule event that failed during an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="activityScheduledEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about an activity scheduled during an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="activityStartedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about the start of an activity during an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="activitySucceededEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about an activity that successfully terminated during an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="activityTimedOutEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about an activity timeout that occurred during an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationFailedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about an evaluation failure that occurred while processing a state.</td>
</tr>
<tr>
    <td><CopyableCode code="executionAbortedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about an abort of an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="executionFailedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about an execution failure event.</td>
</tr>
<tr>
    <td><CopyableCode code="executionRedrivenEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about the redrive attempt of an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="executionStartedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about the start of the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="executionSucceededEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about the successful termination of the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="executionTimedOutEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about the execution timeout that occurred during the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="lambdaFunctionFailedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about a Lambda function that failed during an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="lambdaFunctionScheduleFailedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about a failed Lambda function schedule event that occurred during an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="lambdaFunctionScheduledEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about a Lambda function scheduled during an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="lambdaFunctionStartFailedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about a lambda function that failed to start during an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="lambdaFunctionSucceededEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about a Lambda function that terminated successfully during an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="lambdaFunctionTimedOutEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about a Lambda function timeout that occurred during an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="mapIterationAbortedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about an iteration of a Map state that was aborted.</td>
</tr>
<tr>
    <td><CopyableCode code="mapIterationFailedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about an iteration of a Map state that failed.</td>
</tr>
<tr>
    <td><CopyableCode code="mapIterationStartedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about an iteration of a Map state that was started.</td>
</tr>
<tr>
    <td><CopyableCode code="mapIterationSucceededEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about an iteration of a Map state that succeeded.</td>
</tr>
<tr>
    <td><CopyableCode code="mapRunFailedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains error and cause details about a Map Run that failed.</td>
</tr>
<tr>
    <td><CopyableCode code="mapRunRedrivenEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about the redrive attempt of a Map Run.</td>
</tr>
<tr>
    <td><CopyableCode code="mapRunStartedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details, such as mapRunArn, and the start date and time of a Map Run. mapRunArn is the Amazon Resource Name (ARN) of the Map Run that was started.</td>
</tr>
<tr>
    <td><CopyableCode code="mapStateStartedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about Map state that was started.</td>
</tr>
<tr>
    <td><CopyableCode code="previousEventId" /></td>
    <td><code>integer (int64)</code></td>
    <td>The id of the previous event.</td>
</tr>
<tr>
    <td><CopyableCode code="stateEnteredEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about a state entered during an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="stateExitedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about an exit from a state during an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="taskFailedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about the failure of a task.</td>
</tr>
<tr>
    <td><CopyableCode code="taskScheduledEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about a task that was scheduled.</td>
</tr>
<tr>
    <td><CopyableCode code="taskStartFailedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about a task that failed to start.</td>
</tr>
<tr>
    <td><CopyableCode code="taskStartedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about a task that was started.</td>
</tr>
<tr>
    <td><CopyableCode code="taskSubmitFailedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about a task that where the submit failed.</td>
</tr>
<tr>
    <td><CopyableCode code="taskSubmittedEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about a submitted task.</td>
</tr>
<tr>
    <td><CopyableCode code="taskSucceededEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about a task that succeeded.</td>
</tr>
<tr>
    <td><CopyableCode code="taskTimedOutEventDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about a task that timed out.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the event occurred, expressed in seconds and fractional milliseconds since the Unix epoch, which is defined as January 1, 1970, at 00:00:00 Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the event. (ActivityFailed, ActivityScheduled, ActivityScheduleFailed, ActivityStarted, ActivitySucceeded, ActivityTimedOut, ChoiceStateEntered, ChoiceStateExited, ExecutionAborted, ExecutionFailed, ExecutionStarted, ExecutionSucceeded, ExecutionTimedOut, FailStateEntered, LambdaFunctionFailed, LambdaFunctionScheduled, LambdaFunctionScheduleFailed, LambdaFunctionStarted, LambdaFunctionStartFailed, LambdaFunctionSucceeded, LambdaFunctionTimedOut, MapIterationAborted, MapIterationFailed, MapIterationStarted, MapIterationSucceeded, MapStateAborted, MapStateEntered, MapStateExited, MapStateFailed, MapStateStarted, MapStateSucceeded, ParallelStateAborted, ParallelStateEntered, ParallelStateExited, ParallelStateFailed, ParallelStateStarted, ParallelStateSucceeded, PassStateEntered, PassStateExited, SucceedStateEntered, SucceedStateExited, TaskFailed, TaskScheduled, TaskStarted, TaskStartFailed, TaskStateAborted, TaskStateEntered, TaskStateExited, TaskSubmitFailed, TaskSubmitted, TaskSucceeded, TaskTimedOut, WaitStateAborted, WaitStateEntered, WaitStateExited, MapRunAborted, MapRunFailed, MapRunStarted, MapRunSucceeded, ExecutionRedriven, MapRunRedriven, EvaluationFailed)</td>
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
    <td><a href="#get_execution_history"><CopyableCode code="get_execution_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the timeStamp of the events. Use the reverseOrder parameter to get the latest events first. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This API action is not supported by EXPRESS state machines.</td>
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
    defaultValue="get_execution_history"
    values={[
        { label: 'get_execution_history', value: 'get_execution_history' }
    ]}
>
<TabItem value="get_execution_history">

Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the timeStamp of the events. Use the reverseOrder parameter to get the latest events first. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This API action is not supported by EXPRESS state machines.

```sql
SELECT
id,
activityFailedEventDetails,
activityScheduleFailedEventDetails,
activityScheduledEventDetails,
activityStartedEventDetails,
activitySucceededEventDetails,
activityTimedOutEventDetails,
evaluationFailedEventDetails,
executionAbortedEventDetails,
executionFailedEventDetails,
executionRedrivenEventDetails,
executionStartedEventDetails,
executionSucceededEventDetails,
executionTimedOutEventDetails,
lambdaFunctionFailedEventDetails,
lambdaFunctionScheduleFailedEventDetails,
lambdaFunctionScheduledEventDetails,
lambdaFunctionStartFailedEventDetails,
lambdaFunctionSucceededEventDetails,
lambdaFunctionTimedOutEventDetails,
mapIterationAbortedEventDetails,
mapIterationFailedEventDetails,
mapIterationStartedEventDetails,
mapIterationSucceededEventDetails,
mapRunFailedEventDetails,
mapRunRedrivenEventDetails,
mapRunStartedEventDetails,
mapStateStartedEventDetails,
previousEventId,
stateEnteredEventDetails,
stateExitedEventDetails,
taskFailedEventDetails,
taskScheduledEventDetails,
taskStartFailedEventDetails,
taskStartedEventDetails,
taskSubmitFailedEventDetails,
taskSubmittedEventDetails,
taskSucceededEventDetails,
taskTimedOutEventDetails,
timestamp,
type_
FROM aws.stepfunctions.execution_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
