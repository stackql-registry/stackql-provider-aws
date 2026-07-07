--- 
title: executions
hide_title: false
hide_table_of_contents: false
keywords:
  - executions
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

Creates, updates, deletes, gets or lists an <code>executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.stepfunctions.executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_execution"
    values={[
        { label: 'describe_execution', value: 'describe_execution' },
        { label: 'list_executions', value: 'list_executions' }
    ]}
>
<TabItem value="describe_execution">

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
    <td>The name of the execution. A name must not contain: white space brackets &lt; &gt; &#123; &#125; &#91; &#93; wildcard characters ? * special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.</td>
</tr>
<tr>
    <td><CopyableCode code="cause" /></td>
    <td><code>string</code></td>
    <td>The cause string if the state machine execution failed.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>The error string if the state machine execution failed.</td>
</tr>
<tr>
    <td><CopyableCode code="executionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="input" /></td>
    <td><code>string</code></td>
    <td>The string that contains the JSON input data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</td>
</tr>
<tr>
    <td><CopyableCode code="inputDetails" /></td>
    <td><code>object</code></td>
    <td>Provides details about execution input or output.</td>
</tr>
<tr>
    <td><CopyableCode code="mapRunArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies a Map Run, which dispatched this execution.</td>
</tr>
<tr>
    <td><CopyableCode code="output" /></td>
    <td><code>string</code></td>
    <td>The JSON output data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding. This field is set only if the execution succeeds. If the execution fails, this field is null.</td>
</tr>
<tr>
    <td><CopyableCode code="outputDetails" /></td>
    <td><code>object</code></td>
    <td>Provides details about execution input or output.</td>
</tr>
<tr>
    <td><CopyableCode code="redriveCount" /></td>
    <td><code>integer</code></td>
    <td>The number of times you've redriven an execution. If you have not yet redriven an execution, the redriveCount is 0. This count is only updated if you successfully redrive an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="redriveDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the execution was last redriven. If you have not yet redriven an execution, the redriveDate is null. The redriveDate is unavailable if you redrive a Map Run that starts child workflow executions of type EXPRESS.</td>
</tr>
<tr>
    <td><CopyableCode code="redriveStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates whether or not an execution can be redriven at a given point in time. For executions of type STANDARD, redriveStatus is NOT_REDRIVABLE if calling the RedriveExecution API action would return the ExecutionNotRedrivable error. For a Distributed Map that includes child workflows of type STANDARD, redriveStatus indicates whether or not the Map Run can redrive child workflow executions. For a Distributed Map that includes child workflows of type EXPRESS, redriveStatus indicates whether or not the Map Run can redrive child workflow executions. You can redrive failed or timed out EXPRESS workflows only if they're a part of a Map Run. When you redrive the Map Run, these workflows are restarted using the StartExecution API action. (REDRIVABLE, NOT_REDRIVABLE, REDRIVABLE_BY_MAP_RUN)</td>
</tr>
<tr>
    <td><CopyableCode code="redriveStatusReason" /></td>
    <td><code>string</code></td>
    <td>When redriveStatus is NOT_REDRIVABLE, redriveStatusReason specifies the reason why an execution cannot be redriven. For executions of type STANDARD, or for a Distributed Map that includes child workflows of type STANDARD, redriveStatusReason can include one of the following reasons: State machine is in DELETING status. Execution is RUNNING and cannot be redriven. Execution is SUCCEEDED and cannot be redriven. Execution was started before the launch of RedriveExecution. Execution history event limit exceeded. Execution has exceeded the max execution time. Execution redrivable period exceeded. For a Distributed Map that includes child workflows of type EXPRESS, redriveStatusReason is only returned if the child workflows are not redrivable. This happens when the child workflow executions have completed successfully.</td>
</tr>
<tr>
    <td><CopyableCode code="startDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the execution is started.</td>
</tr>
<tr>
    <td><CopyableCode code="stateMachineAliasArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the state machine alias associated with the execution. The alias ARN is a combination of state machine ARN and the alias name separated by a colon (:). For example, stateMachineARN:PROD. If you start an execution from a StartExecution request with a state machine version ARN, this field will be null.</td>
</tr>
<tr>
    <td><CopyableCode code="stateMachineArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the executed stated machine.</td>
</tr>
<tr>
    <td><CopyableCode code="stateMachineVersionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the state machine version associated with the execution. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, stateMachineARN:1. If you start an execution from a StartExecution request without specifying a state machine version or alias ARN, Step Functions returns a null value.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the execution. (RUNNING, SUCCEEDED, FAILED, TIMED_OUT, ABORTED, PENDING_REDRIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="stopDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>If the execution ended, the date the execution stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="traceHeader" /></td>
    <td><code>string</code></td>
    <td>The X-Ray trace header that was passed to the execution. For X-Ray traces, all Amazon Web Services services use the X-Amzn-Trace-Id header from the HTTP request. Using the header is the preferred mechanism to identify a trace. StartExecution and StartSyncExecution API operations can also use traceHeader from the body of the request payload. If both sources are provided, Step Functions will use the header value (preferred) over the value in the request body. (pattern: &lt;code&gt;\p&#123;ASCII&#125;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_executions">

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
    <td>The name of the execution. A name must not contain: white space brackets &lt; &gt; &#123; &#125; &#91; &#93; wildcard characters ? * special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.</td>
</tr>
<tr>
    <td><CopyableCode code="executionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="itemCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of items processed in a child workflow execution. This field is returned only if mapRunArn was specified in the ListExecutions API action. If stateMachineArn was specified in ListExecutions, the itemCount field isn't returned.</td>
</tr>
<tr>
    <td><CopyableCode code="mapRunArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a Map Run. This field is returned only if mapRunArn was specified in the ListExecutions API action. If stateMachineArn was specified in ListExecutions, the mapRunArn isn't returned.</td>
</tr>
<tr>
    <td><CopyableCode code="redriveCount" /></td>
    <td><code>integer</code></td>
    <td>The number of times you've redriven an execution. If you have not yet redriven an execution, the redriveCount is 0. This count is only updated when you successfully redrive an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="redriveDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the execution was last redriven.</td>
</tr>
<tr>
    <td><CopyableCode code="startDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the execution started.</td>
</tr>
<tr>
    <td><CopyableCode code="stateMachineAliasArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the state machine alias used to start an execution. If the state machine execution was started with an unqualified ARN or a version ARN, it returns null.</td>
</tr>
<tr>
    <td><CopyableCode code="stateMachineArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the state machine that ran the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="stateMachineVersionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the state machine version associated with the execution. If the state machine execution was started with an unqualified ARN, it returns null. If the execution was started using a stateMachineAliasArn, both the stateMachineAliasArn and stateMachineVersionArn parameters contain the respective values.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the execution. (RUNNING, SUCCEEDED, FAILED, TIMED_OUT, ABORTED, PENDING_REDRIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="stopDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>If the execution already ended, the date the execution stopped.</td>
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
    <td><a href="#describe_execution"><CopyableCode code="describe_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about a state machine execution, such as the state machine associated with the execution, the execution input and output, and relevant execution metadata. If you've redriven an execution, you can use this API action to return information about the redrives of that execution. In addition, you can use this API action to return the Map Run Amazon Resource Name (ARN) if the execution was dispatched by a Map Run. If you specify a version or alias ARN when you call the StartExecution API action, DescribeExecution returns that ARN. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. Executions of an EXPRESS state machine aren't supported by DescribeExecution unless a Map Run dispatched them.</td>
</tr>
<tr>
    <td><a href="#list_executions"><CopyableCode code="list_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run ARN. Using this API action, you can also list all redriven executions. You can also provide a state machine alias ARN or version ARN to list the executions associated with a specific alias or version. Results are sorted by time, with the most recent execution first. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. This API action is not supported by EXPRESS state machines.</td>
</tr>
<tr>
    <td><a href="#redrive_execution"><CopyableCode code="redrive_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-executionArn"><code>executionArn</code></a></td>
    <td></td>
    <td>Restarts unsuccessful executions of Standard workflows that didn't complete successfully in the last 14 days. These include failed, aborted, or timed out executions. When you redrive an execution, it continues the failed execution from the unsuccessful step and uses the same input. Step Functions preserves the results and execution history of the successful steps, and doesn't rerun these steps when you redrive an execution. Redriven executions use the same state machine definition and execution ARN as the original execution attempt. For workflows that include an Inline Map or Parallel state, RedriveExecution API action reschedules and redrives only the iterations and branches that failed or aborted. To redrive a workflow that includes a Distributed Map state whose Map Run failed, you must redrive the parent workflow. The parent workflow redrives all the unsuccessful states, including a failed Map Run. If a Map Run was not started in the original execution attempt, the redriven parent workflow starts the Map Run. This API action is not supported by EXPRESS state machines. However, you can restart the unsuccessful executions of Express child workflows in a Distributed Map by redriving its Map Run. When you redrive a Map Run, the Express child workflows are rerun using the StartExecution API action. For more information, see Redriving Map Runs. You can redrive executions if your original execution meets the following conditions: The execution status isn't SUCCEEDED. Your workflow execution has not exceeded the redrivable period of 14 days. Redrivable period refers to the time during which you can redrive a given execution. This period starts from the day a state machine completes its execution. The workflow execution has not exceeded the maximum open time of one year. For more information about state machine quotas, see Quotas related to state machine executions. The execution event history count is less than 24,999. Redriven executions append their event history to the existing event history. Make sure your workflow execution contains less than 24,999 events to accommodate the ExecutionRedriven history event and at least one other history event.</td>
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
    defaultValue="describe_execution"
    values={[
        { label: 'describe_execution', value: 'describe_execution' },
        { label: 'list_executions', value: 'list_executions' }
    ]}
>
<TabItem value="describe_execution">

Provides information about a state machine execution, such as the state machine associated with the execution, the execution input and output, and relevant execution metadata. If you've redriven an execution, you can use this API action to return information about the redrives of that execution. In addition, you can use this API action to return the Map Run Amazon Resource Name (ARN) if the execution was dispatched by a Map Run. If you specify a version or alias ARN when you call the StartExecution API action, DescribeExecution returns that ARN. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. Executions of an EXPRESS state machine aren't supported by DescribeExecution unless a Map Run dispatched them.

```sql
SELECT
name,
cause,
error,
executionArn,
input,
inputDetails,
mapRunArn,
output,
outputDetails,
redriveCount,
redriveDate,
redriveStatus,
redriveStatusReason,
startDate,
stateMachineAliasArn,
stateMachineArn,
stateMachineVersionArn,
status,
stopDate,
traceHeader
FROM aws.stepfunctions.executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_executions">

Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run ARN. Using this API action, you can also list all redriven executions. You can also provide a state machine alias ARN or version ARN to list the executions associated with a specific alias or version. Results are sorted by time, with the most recent execution first. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. This API action is not supported by EXPRESS state machines.

```sql
SELECT
name,
executionArn,
itemCount,
mapRunArn,
redriveCount,
redriveDate,
startDate,
stateMachineAliasArn,
stateMachineArn,
stateMachineVersionArn,
status,
stopDate
FROM aws.stepfunctions.executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="redrive_execution"
    values={[
        { label: 'redrive_execution', value: 'redrive_execution' }
    ]}
>
<TabItem value="redrive_execution">

Restarts unsuccessful executions of Standard workflows that didn't complete successfully in the last 14 days. These include failed, aborted, or timed out executions. When you redrive an execution, it continues the failed execution from the unsuccessful step and uses the same input. Step Functions preserves the results and execution history of the successful steps, and doesn't rerun these steps when you redrive an execution. Redriven executions use the same state machine definition and execution ARN as the original execution attempt. For workflows that include an Inline Map or Parallel state, RedriveExecution API action reschedules and redrives only the iterations and branches that failed or aborted. To redrive a workflow that includes a Distributed Map state whose Map Run failed, you must redrive the parent workflow. The parent workflow redrives all the unsuccessful states, including a failed Map Run. If a Map Run was not started in the original execution attempt, the redriven parent workflow starts the Map Run. This API action is not supported by EXPRESS state machines. However, you can restart the unsuccessful executions of Express child workflows in a Distributed Map by redriving its Map Run. When you redrive a Map Run, the Express child workflows are rerun using the StartExecution API action. For more information, see Redriving Map Runs. You can redrive executions if your original execution meets the following conditions: The execution status isn't SUCCEEDED. Your workflow execution has not exceeded the redrivable period of 14 days. Redrivable period refers to the time during which you can redrive a given execution. This period starts from the day a state machine completes its execution. The workflow execution has not exceeded the maximum open time of one year. For more information about state machine quotas, see Quotas related to state machine executions. The execution event history count is less than 24,999. Redriven executions append their event history to the existing event history. Make sure your workflow execution contains less than 24,999 events to accommodate the ExecutionRedriven history event and at least one other history event.

```sql
EXEC aws.stepfunctions.executions.redrive_execution 
@region='{{ region }}' --required 
@@json=
'{
"executionArn": "{{ executionArn }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
