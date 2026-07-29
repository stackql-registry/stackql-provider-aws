--- 
title: flow_execution_events
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_execution_events
  - bedrock_agent_runtime
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

Creates, updates, deletes, gets or lists a <code>flow_execution_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flow_execution_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent_runtime.flow_execution_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_flow_execution_events"
    values={[
        { label: 'list_flow_execution_events', value: 'list_flow_execution_events' }
    ]}
>
<TabItem value="list_flow_execution_events">

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
    <td><CopyableCode code="condition_result_event" /></td>
    <td><code>object</code></td>
    <td>Contains information about a condition evaluation result during the flow execution. This event is generated when a condition node in the flow evaluates its conditions.</td>
</tr>
<tr>
    <td><CopyableCode code="flow_failure_event" /></td>
    <td><code>object</code></td>
    <td>Contains information about a failure that occurred at the flow level during execution.</td>
</tr>
<tr>
    <td><CopyableCode code="flow_input_event" /></td>
    <td><code>object</code></td>
    <td>Contains information about the inputs provided to the flow at the start of execution.</td>
</tr>
<tr>
    <td><CopyableCode code="flow_output_event" /></td>
    <td><code>object</code></td>
    <td>Contains information about the outputs produced by the flow at the end of execution.</td>
</tr>
<tr>
    <td><CopyableCode code="node_action_event" /></td>
    <td><code>object</code></td>
    <td>Contains information about an action (operation) called by a node during execution.</td>
</tr>
<tr>
    <td><CopyableCode code="node_dependency_event" /></td>
    <td><code>object</code></td>
    <td>Contains information about an internal trace of a specific node during execution.</td>
</tr>
<tr>
    <td><CopyableCode code="node_failure_event" /></td>
    <td><code>object</code></td>
    <td>Contains information about a failure that occurred at a specific node during execution.</td>
</tr>
<tr>
    <td><CopyableCode code="node_input_event" /></td>
    <td><code>object</code></td>
    <td>Contains information about the inputs provided to a specific node during execution.</td>
</tr>
<tr>
    <td><CopyableCode code="node_output_event" /></td>
    <td><code>object</code></td>
    <td>Contains information about the outputs produced by a specific node during execution.</td>
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
    <td><a href="#list_flow_execution_events"><CopyableCode code="list_flow_execution_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-eventType"><code>eventType</code></a>, <a href="#parameter-execution_identifier"><code>execution_identifier</code></a>, <a href="#parameter-flow_alias_identifier"><code>flow_alias_identifier</code></a>, <a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists events that occurred during a flow execution. Events provide detailed information about the execution progress, including node inputs and outputs, flow inputs and outputs, condition results, and failure events. Flow executions is in preview release for Amazon Bedrock and is subject to change.</td>
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
<tr id="parameter-eventType">
    <td><CopyableCode code="eventType" /></td>
    <td><code>string</code></td>
    <td>The type of events to retrieve. Specify Node for node-level events or Flow for flow-level events.</td>
</tr>
<tr id="parameter-execution_identifier">
    <td><CopyableCode code="execution_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow execution.</td>
</tr>
<tr id="parameter-flow_alias_identifier">
    <td><CopyableCode code="flow_alias_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow alias used for the execution.</td>
</tr>
<tr id="parameter-flow_identifier">
    <td><CopyableCode code="flow_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of events to return in a single response. If more events exist than the specified maxResults value, a token is included in the response so that the remaining results can be retrieved.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next set of results. This value is returned in the response if more results are available.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_flow_execution_events"
    values={[
        { label: 'list_flow_execution_events', value: 'list_flow_execution_events' }
    ]}
>
<TabItem value="list_flow_execution_events">

Lists events that occurred during a flow execution. Events provide detailed information about the execution progress, including node inputs and outputs, flow inputs and outputs, condition results, and failure events. Flow executions is in preview release for Amazon Bedrock and is subject to change.

```sql
SELECT
condition_result_event,
flow_failure_event,
flow_input_event,
flow_output_event,
node_action_event,
node_dependency_event,
node_failure_event,
node_input_event,
node_output_event
FROM aws.bedrock_agent_runtime.flow_execution_events
WHERE eventType = '{{ eventType }}' -- required
AND execution_identifier = '{{ execution_identifier }}' -- required
AND flow_alias_identifier = '{{ flow_alias_identifier }}' -- required
AND flow_identifier = '{{ flow_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
