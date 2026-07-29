--- 
title: durable_execution_states
hide_title: false
hide_table_of_contents: false
keywords:
  - durable_execution_states
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

Creates, updates, deletes, gets or lists a <code>durable_execution_states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="durable_execution_states" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.durable_execution_states" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_durable_execution_state"
    values={[
        { label: 'get_durable_execution_state', value: 'get_durable_execution_state' }
    ]}
>
<TabItem value="get_durable_execution_state">

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
    <td><CopyableCode code="callback_details" /></td>
    <td><code>object</code></td>
    <td>Contains details about a callback operation in a durable execution, including the callback token and timeout configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="chained_invoke_details" /></td>
    <td><code>object</code></td>
    <td>Contains details about a chained function invocation in a durable execution, including the target function and invocation parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="context_details" /></td>
    <td><code>object</code></td>
    <td>Details about the context, if this operation represents a context.</td>
</tr>
<tr>
    <td><CopyableCode code="end_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the operation ended, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</td>
</tr>
<tr>
    <td><CopyableCode code="execution_details" /></td>
    <td><code>object</code></td>
    <td>Details about the execution, if this operation represents an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this operation. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
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
    <td><CopyableCode code="start_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the operation started, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the operation. (STARTED, PENDING, READY, SUCCEEDED, FAILED, CANCELLED, TIMED_OUT, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="step_details" /></td>
    <td><code>object</code></td>
    <td>Details about the step, if this operation represents a step.</td>
</tr>
<tr>
    <td><CopyableCode code="sub_type" /></td>
    <td><code>string</code></td>
    <td>The subtype of the operation, providing additional categorization. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of operation. (EXECUTION, CONTEXT, STEP, WAIT, CALLBACK, CHAINED_INVOKE)</td>
</tr>
<tr>
    <td><CopyableCode code="wait_details" /></td>
    <td><code>object</code></td>
    <td>Details about the wait operation, if this operation represents a wait.</td>
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
    <td><a href="#get_durable_execution_state"><CopyableCode code="get_durable_execution_state" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-durable_execution_arn"><code>durable_execution_arn</code></a>, <a href="#parameter-CheckpointToken"><code>CheckpointToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Retrieves the current execution state required for the replay process during durable function execution. This API is used by the Lambda durable functions SDK to get state information needed for replay. You typically don't need to call this API directly as the SDK handles state management automatically. The response contains operations ordered by start sequence number in ascending order. Completed operations with children don't include child operation details since they don't need to be replayed.</td>
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
<tr id="parameter-CheckpointToken">
    <td><CopyableCode code="CheckpointToken" /></td>
    <td><code>string</code></td>
    <td>A checkpoint token that identifies the current state of the execution. This token is provided by the Lambda runtime and ensures that state retrieval is consistent with the current execution context.</td>
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
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>If NextMarker was returned from a previous request, use this value to retrieve the next page of operations. Each pagination token expires after 24 hours.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of operations to return per call. You can use Marker to retrieve additional pages of results. The default is 100 and the maximum allowed is 1000. A value of 0 uses the default.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_durable_execution_state"
    values={[
        { label: 'get_durable_execution_state', value: 'get_durable_execution_state' }
    ]}
>
<TabItem value="get_durable_execution_state">

Retrieves the current execution state required for the replay process during durable function execution. This API is used by the Lambda durable functions SDK to get state information needed for replay. You typically don't need to call this API directly as the SDK handles state management automatically. The response contains operations ordered by start sequence number in ascending order. Completed operations with children don't include child operation details since they don't need to be replayed.

```sql
SELECT
callback_details,
chained_invoke_details,
context_details,
end_timestamp,
execution_details,
id,
name,
parent_id,
start_timestamp,
status,
step_details,
sub_type,
type,
wait_details
FROM aws.lambda.durable_execution_states
WHERE durable_execution_arn = '{{ durable_execution_arn }}' -- required
AND CheckpointToken = '{{ CheckpointToken }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>
