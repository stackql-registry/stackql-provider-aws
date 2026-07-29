--- 
title: durable_execution_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - durable_execution_histories
  - lambda
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

Creates, updates, deletes, gets or lists a <code>durable_execution_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="durable_execution_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.durable_execution_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_durable_execution_history"
    values={[
        { label: 'get_durable_execution_history', value: 'get_durable_execution_history' }
    ]}
>
<TabItem value="get_durable_execution_history">

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
    <td><CopyableCode code="callback_failed_details" /></td>
    <td><code>object</code></td>
    <td>Contains details about a failed callback operation, including error information and the reason for failure.</td>
</tr>
<tr>
    <td><CopyableCode code="callback_started_details" /></td>
    <td><code>object</code></td>
    <td>Contains details about a callback operation that has started, including timing information and callback metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="callback_succeeded_details" /></td>
    <td><code>object</code></td>
    <td>Contains details about a successfully completed callback operation, including the result data and completion timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="callback_timed_out_details" /></td>
    <td><code>object</code></td>
    <td>Contains details about a callback operation that timed out, including timeout duration and any partial results.</td>
</tr>
<tr>
    <td><CopyableCode code="chained_invoke_failed_details" /></td>
    <td><code>object</code></td>
    <td>Contains details about a failed chained function invocation, including error information and failure reason.</td>
</tr>
<tr>
    <td><CopyableCode code="chained_invoke_started_details" /></td>
    <td><code>object</code></td>
    <td>Contains details about a chained function invocation that has started execution, including start time and execution context.</td>
</tr>
<tr>
    <td><CopyableCode code="chained_invoke_stopped_details" /></td>
    <td><code>object</code></td>
    <td>Details about a chained invocation that was stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="chained_invoke_succeeded_details" /></td>
    <td><code>object</code></td>
    <td>Details about a chained invocation that succeeded.</td>
</tr>
<tr>
    <td><CopyableCode code="chained_invoke_timed_out_details" /></td>
    <td><code>object</code></td>
    <td>Details about a chained invocation that timed out.</td>
</tr>
<tr>
    <td><CopyableCode code="context_failed_details" /></td>
    <td><code>object</code></td>
    <td>Details about a context that failed.</td>
</tr>
<tr>
    <td><CopyableCode code="context_started_details" /></td>
    <td><code>object</code></td>
    <td>Details about a context that started.</td>
</tr>
<tr>
    <td><CopyableCode code="context_succeeded_details" /></td>
    <td><code>object</code></td>
    <td>Details about a context that succeeded.</td>
</tr>
<tr>
    <td><CopyableCode code="event_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier for this event. Event IDs increment sequentially.</td>
</tr>
<tr>
    <td><CopyableCode code="event_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when this event occurred, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of event that occurred. (ExecutionStarted, ExecutionSucceeded, ExecutionFailed, ExecutionTimedOut, ExecutionStopped, ContextStarted, ContextSucceeded, ContextFailed, WaitStarted, WaitSucceeded, WaitCancelled, StepStarted, StepSucceeded, StepFailed, ChainedInvokeStarted, ChainedInvokeSucceeded, ChainedInvokeFailed, ChainedInvokeTimedOut, ChainedInvokeStopped, CallbackStarted, CallbackSucceeded, CallbackFailed, CallbackTimedOut, InvocationCompleted)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_failed_details" /></td>
    <td><code>object</code></td>
    <td>Details about an execution that failed.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_started_details" /></td>
    <td><code>object</code></td>
    <td>Details about an execution that started.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_stopped_details" /></td>
    <td><code>object</code></td>
    <td>Details about an execution that was stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_succeeded_details" /></td>
    <td><code>object</code></td>
    <td>Details about an execution that succeeded.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_timed_out_details" /></td>
    <td><code>object</code></td>
    <td>Details about an execution that timed out.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this operation. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="invocation_completed_details" /></td>
    <td><code>object</code></td>
    <td>Details about a function invocation that completed.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The customer-provided name for this operation. (pattern: &lt;code&gt;&#91;\x20-\x7E&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the parent operation, if this operation is running within a child context. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="step_failed_details" /></td>
    <td><code>object</code></td>
    <td>Details about a step that failed.</td>
</tr>
<tr>
    <td><CopyableCode code="step_started_details" /></td>
    <td><code>object</code></td>
    <td>Details about a step that started.</td>
</tr>
<tr>
    <td><CopyableCode code="step_succeeded_details" /></td>
    <td><code>object</code></td>
    <td>Details about a step that succeeded.</td>
</tr>
<tr>
    <td><CopyableCode code="sub_type" /></td>
    <td><code>string</code></td>
    <td>The subtype of the event, providing additional categorization. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="wait_cancelled_details" /></td>
    <td><code>object</code></td>
    <td>Details about a wait operation that was cancelled.</td>
</tr>
<tr>
    <td><CopyableCode code="wait_started_details" /></td>
    <td><code>object</code></td>
    <td>Details about a wait operation that started.</td>
</tr>
<tr>
    <td><CopyableCode code="wait_succeeded_details" /></td>
    <td><code>object</code></td>
    <td>Details about a wait operation that succeeded.</td>
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
    <td><a href="#get_durable_execution_history"><CopyableCode code="get_durable_execution_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-durable_execution_arn"><code>durable_execution_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-IncludeExecutionData"><code>IncludeExecutionData</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-ReverseOrder"><code>ReverseOrder</code></a></td>
    <td>Retrieves the execution history for a durable execution, showing all the steps, callbacks, and events that occurred during the execution. This provides a detailed audit trail of the execution's progress over time. The history is available while the execution is running and for a retention period after it completes (1-90 days, default 30 days). You can control whether to include execution data such as step results and callback payloads.</td>
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
<tr id="parameter-durable_execution_arn">
    <td><CopyableCode code="durable_execution_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the durable execution.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-IncludeExecutionData">
    <td><CopyableCode code="IncludeExecutionData" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to include execution data such as step results and callback payloads in the history events. Set to true to include data, or false to exclude it for a more compact response. The default is true.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>If NextMarker was returned from a previous request, use this value to retrieve the next page of results. Each pagination token expires after 24 hours.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of history events to return per call. You can use Marker to retrieve additional pages of results. The default is 100 and the maximum allowed is 1000. A value of 0 uses the default.</td>
</tr>
<tr id="parameter-ReverseOrder">
    <td><CopyableCode code="ReverseOrder" /></td>
    <td><code>boolean</code></td>
    <td>When set to true, returns the history events in reverse chronological order (newest first). By default, events are returned in chronological order (oldest first).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_durable_execution_history"
    values={[
        { label: 'get_durable_execution_history', value: 'get_durable_execution_history' }
    ]}
>
<TabItem value="get_durable_execution_history">

Retrieves the execution history for a durable execution, showing all the steps, callbacks, and events that occurred during the execution. This provides a detailed audit trail of the execution's progress over time. The history is available while the execution is running and for a retention period after it completes (1-90 days, default 30 days). You can control whether to include execution data such as step results and callback payloads.

```sql
SELECT
callback_failed_details,
callback_started_details,
callback_succeeded_details,
callback_timed_out_details,
chained_invoke_failed_details,
chained_invoke_started_details,
chained_invoke_stopped_details,
chained_invoke_succeeded_details,
chained_invoke_timed_out_details,
context_failed_details,
context_started_details,
context_succeeded_details,
event_id,
event_timestamp,
event_type,
execution_failed_details,
execution_started_details,
execution_stopped_details,
execution_succeeded_details,
execution_timed_out_details,
id,
invocation_completed_details,
name,
parent_id,
step_failed_details,
step_started_details,
step_succeeded_details,
sub_type,
wait_cancelled_details,
wait_started_details,
wait_succeeded_details
FROM aws.lambda.durable_execution_histories
WHERE durable_execution_arn = '{{ durable_execution_arn }}' -- required
AND region = '{{ region }}' -- required
AND IncludeExecutionData = '{{ IncludeExecutionData }}'
AND MaxItems = '{{ MaxItems }}'
AND Marker = '{{ Marker }}'
AND ReverseOrder = '{{ ReverseOrder }}'
;
```
</TabItem>
</Tabs>
