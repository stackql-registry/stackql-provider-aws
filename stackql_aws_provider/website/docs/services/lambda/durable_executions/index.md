--- 
title: durable_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - durable_executions
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

Creates, updates, deletes, gets or lists a <code>durable_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="durable_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.durable_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_durable_execution"
    values={[
        { label: 'get_durable_execution', value: 'get_durable_execution' }
    ]}
>
<TabItem value="get_durable_execution">

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
    <td><CopyableCode code="durable_execution_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the durable execution. (pattern: &lt;code&gt;arn:(&#91;a-zA-Z0-9-&#93;+):lambda:(&#91;a-zA-Z0-9-&#93;+):(\d&#123;12&#125;):function:(&#91;a-zA-Z0-9_-&#93;+):(\$LATEST(?:\.PUBLISHED)?|&#91;0-9&#93;+)/durable-execution/(&#91;a-zA-Z0-9_-&#93;+)/(&#91;a-zA-Z0-9_-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="durable_execution_name" /></td>
    <td><code>string</code></td>
    <td>The name of the durable execution. This is either the name you provided when invoking the function, or a system-generated unique identifier if no name was provided. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the durable execution ended, in Unix timestamp format. This field is only present if the execution has completed (status is SUCCEEDED, FAILED, TIMED_OUT, or STOPPED).</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Error information if the durable execution failed. This field is only present when the execution status is FAILED, TIMED_OUT, or STOPPED. The combined size of all error fields is limited to 256 KB.</td>
</tr>
<tr>
    <td><CopyableCode code="function_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Lambda function that was invoked to start this durable execution. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_\.&#93;+(:(\$LATEST(\.PUBLISHED)?|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="input_payload" /></td>
    <td><code>string</code></td>
    <td>The JSON input payload that was provided when the durable execution was started. For asynchronous invocations, this is limited to 256 KB. For synchronous invocations, this can be up to 6 MB.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>string</code></td>
    <td>The JSON result returned by the durable execution if it completed successfully. This field is only present when the execution status is SUCCEEDED. The result is limited to 256 KB.</td>
</tr>
<tr>
    <td><CopyableCode code="start_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the durable execution started, in Unix timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the durable execution. Valid values are RUNNING, SUCCEEDED, FAILED, TIMED_OUT, and STOPPED. (RUNNING, SUCCEEDED, FAILED, TIMED_OUT, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="trace_header" /></td>
    <td><code>object</code></td>
    <td>The trace headers associated with the durable execution.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the Lambda function that was invoked for this durable execution. This ensures that all replays during the execution use the same function version. (pattern: &lt;code&gt;(\$LATEST(\.PUBLISHED)?|&#91;0-9&#93;+)&lt;/code&gt;)</td>
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
    <td><a href="#get_durable_execution"><CopyableCode code="get_durable_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-durable_execution_arn"><code>durable_execution_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific durable execution, including its current status, input payload, result or error information, and execution metadata such as start time and usage statistics.</td>
</tr>
<tr>
    <td><a href="#checkpoint_durable_execution"><CopyableCode code="checkpoint_durable_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-durable_execution_arn"><code>durable_execution_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CheckpointToken"><code>CheckpointToken</code></a></td>
    <td></td>
    <td>Saves the progress of a durable function execution during runtime. This API is used by the Lambda durable functions SDK to checkpoint completed steps and schedule asynchronous operations. You typically don't need to call this API directly as the SDK handles checkpointing automatically. Each checkpoint operation consumes the current checkpoint token and returns a new one for the next checkpoint. This ensures that checkpoints are applied in the correct order and prevents duplicate or out-of-order state updates.</td>
</tr>
<tr>
    <td><a href="#send_durable_execution_callback_failure"><CopyableCode code="send_durable_execution_callback_failure" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-callback_id"><code>callback_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sends a failure response for a callback operation in a durable execution. Use this API when an external system cannot complete a callback operation successfully.</td>
</tr>
<tr>
    <td><a href="#send_durable_execution_callback_heartbeat"><CopyableCode code="send_durable_execution_callback_heartbeat" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-callback_id"><code>callback_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sends a heartbeat signal for a long-running callback operation to prevent timeout. Use this API to extend the callback timeout period while the external operation is still in progress.</td>
</tr>
<tr>
    <td><a href="#send_durable_execution_callback_success"><CopyableCode code="send_durable_execution_callback_success" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-callback_id"><code>callback_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sends a successful completion response for a callback operation in a durable execution. Use this API when an external system has successfully completed a callback operation.</td>
</tr>
<tr>
    <td><a href="#stop_durable_execution"><CopyableCode code="stop_durable_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-durable_execution_arn"><code>durable_execution_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a running durable execution. The execution transitions to STOPPED status and cannot be resumed. Any in-progress operations are terminated.</td>
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
<tr id="parameter-callback_id">
    <td><CopyableCode code="callback_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the callback operation.</td>
</tr>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_durable_execution"
    values={[
        { label: 'get_durable_execution', value: 'get_durable_execution' }
    ]}
>
<TabItem value="get_durable_execution">

Retrieves detailed information about a specific durable execution, including its current status, input payload, result or error information, and execution metadata such as start time and usage statistics.

```sql
SELECT
durable_execution_arn,
durable_execution_name,
end_timestamp,
error,
function_arn,
input_payload,
result,
start_timestamp,
status,
trace_header,
version
FROM aws.lambda.durable_executions
WHERE durable_execution_arn = '{{ durable_execution_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="checkpoint_durable_execution"
    values={[
        { label: 'checkpoint_durable_execution', value: 'checkpoint_durable_execution' },
        { label: 'send_durable_execution_callback_failure', value: 'send_durable_execution_callback_failure' },
        { label: 'send_durable_execution_callback_heartbeat', value: 'send_durable_execution_callback_heartbeat' },
        { label: 'send_durable_execution_callback_success', value: 'send_durable_execution_callback_success' },
        { label: 'stop_durable_execution', value: 'stop_durable_execution' }
    ]}
>
<TabItem value="checkpoint_durable_execution">

Saves the progress of a durable function execution during runtime. This API is used by the Lambda durable functions SDK to checkpoint completed steps and schedule asynchronous operations. You typically don't need to call this API directly as the SDK handles checkpointing automatically. Each checkpoint operation consumes the current checkpoint token and returns a new one for the next checkpoint. This ensures that checkpoints are applied in the correct order and prevents duplicate or out-of-order state updates.

```sql
EXEC aws.lambda.durable_executions.checkpoint_durable_execution 
@durable_execution_arn='{{ durable_execution_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"CheckpointToken": "{{ CheckpointToken }}", 
"Updates": "{{ Updates }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
<TabItem value="send_durable_execution_callback_failure">

Sends a failure response for a callback operation in a durable execution. Use this API when an external system cannot complete a callback operation successfully.

```sql
EXEC aws.lambda.durable_executions.send_durable_execution_callback_failure 
@callback_id='{{ callback_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Error": "{{ Error }}"
}'
;
```
</TabItem>
<TabItem value="send_durable_execution_callback_heartbeat">

Sends a heartbeat signal for a long-running callback operation to prevent timeout. Use this API to extend the callback timeout period while the external operation is still in progress.

```sql
EXEC aws.lambda.durable_executions.send_durable_execution_callback_heartbeat 
@callback_id='{{ callback_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="send_durable_execution_callback_success">

Sends a successful completion response for a callback operation in a durable execution. Use this API when an external system has successfully completed a callback operation.

```sql
EXEC aws.lambda.durable_executions.send_durable_execution_callback_success 
@callback_id='{{ callback_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Result": "{{ Result }}"
}'
;
```
</TabItem>
<TabItem value="stop_durable_execution">

Stops a running durable execution. The execution transitions to STOPPED status and cannot be resumed. Any in-progress operations are terminated.

```sql
EXEC aws.lambda.durable_executions.stop_durable_execution 
@durable_execution_arn='{{ durable_execution_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Error": "{{ Error }}"
}'
;
```
</TabItem>
</Tabs>
