--- 
title: agent_runtime_commands
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_runtime_commands
  - bedrock_agentcore
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

Creates, updates, deletes, gets or lists an <code>agent_runtime_commands</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_runtime_commands" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.agent_runtime_commands" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#invoke_agent_runtime_command"><CopyableCode code="invoke_agent_runtime_command" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_runtime_arn"><code>agent_runtime_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-body"><code>body</code></a></td>
    <td><a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-X-Amzn-Bedrock-AgentCore-Runtime-Session-Id"><code>X-Amzn-Bedrock-AgentCore-Runtime-Session-Id</code></a>, <a href="#parameter-X-Amzn-Trace-Id"><code>X-Amzn-Trace-Id</code></a>, <a href="#parameter-traceparent"><code>traceparent</code></a>, <a href="#parameter-tracestate"><code>tracestate</code></a>, <a href="#parameter-baggage"><code>baggage</code></a>, <a href="#parameter-qualifier"><code>qualifier</code></a>, <a href="#parameter-accountId"><code>accountId</code></a></td>
    <td>Executes a command in a runtime session container and streams the output back to the caller. This operation allows you to run shell commands within the agent runtime environment and receive real-time streaming responses including standard output and standard error. To invoke a command, you must specify the agent runtime ARN and a runtime session ID. The command execution supports streaming responses, allowing you to receive output as it becomes available through contentStart, contentDelta, and contentStop events. To use this operation, you must have the bedrock-agentcore:InvokeAgentRuntimeCommand permission.</td>
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
<tr id="parameter-agent_runtime_arn">
    <td><CopyableCode code="agent_runtime_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the agent runtime on which to execute the command. This identifies the specific agent runtime environment where the command will run.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Accept">
    <td><CopyableCode code="Accept" /></td>
    <td><code>string</code></td>
    <td>The desired MIME type for the response from the agent runtime command. This tells the agent runtime what format to use for the response data. Common values include application/json for JSON data.</td>
</tr>
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the input data in the request payload. This tells the agent runtime how to interpret the payload data. Common values include application/json for JSON data.</td>
</tr>
<tr id="parameter-X-Amzn-Bedrock-AgentCore-Runtime-Session-Id">
    <td><CopyableCode code="X-Amzn-Bedrock-AgentCore-Runtime-Session-Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the runtime session in which to execute the command. This session ID is used to maintain state and context across multiple command invocations.</td>
</tr>
<tr id="parameter-X-Amzn-Trace-Id">
    <td><CopyableCode code="X-Amzn-Trace-Id" /></td>
    <td><code>string</code></td>
    <td>The trace identifier for request tracking.</td>
</tr>
<tr id="parameter-accountId">
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Web Services account for the agent runtime resource. This parameter is required when you specify an agent ID instead of the full ARN for agentRuntimeArn.</td>
</tr>
<tr id="parameter-baggage">
    <td><CopyableCode code="baggage" /></td>
    <td><code>string</code></td>
    <td>Additional context information for distributed tracing.</td>
</tr>
<tr id="parameter-qualifier">
    <td><CopyableCode code="qualifier" /></td>
    <td><code>string</code></td>
    <td>The qualifier to use for the agent runtime. This is an endpoint name that points to a specific version. If not specified, Amazon Bedrock AgentCore uses the default endpoint of the agent runtime.</td>
</tr>
<tr id="parameter-traceparent">
    <td><CopyableCode code="traceparent" /></td>
    <td><code>string</code></td>
    <td>The parent trace information for distributed tracing.</td>
</tr>
<tr id="parameter-tracestate">
    <td><CopyableCode code="tracestate" /></td>
    <td><code>string</code></td>
    <td>The trace state information for distributed tracing.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="invoke_agent_runtime_command"
    values={[
        { label: 'invoke_agent_runtime_command', value: 'invoke_agent_runtime_command' }
    ]}
>
<TabItem value="invoke_agent_runtime_command">

Executes a command in a runtime session container and streams the output back to the caller. This operation allows you to run shell commands within the agent runtime environment and receive real-time streaming responses including standard output and standard error. To invoke a command, you must specify the agent runtime ARN and a runtime session ID. The command execution supports streaming responses, allowing you to receive output as it becomes available through contentStart, contentDelta, and contentStop events. To use this operation, you must have the bedrock-agentcore:InvokeAgentRuntimeCommand permission.

```sql
EXEC aws.bedrock_agentcore.agent_runtime_commands.invoke_agent_runtime_command 
@agent_runtime_arn='{{ agent_runtime_arn }}' --required, 
@region='{{ region }}' --required, 
@Content-Type='{{ Content-Type }}', 
@Accept='{{ Accept }}', 
@X-Amzn-Bedrock-AgentCore-Runtime-Session-Id='{{ X-Amzn-Bedrock-AgentCore-Runtime-Session-Id }}', 
@X-Amzn-Trace-Id='{{ X-Amzn-Trace-Id }}', 
@traceparent='{{ traceparent }}', 
@tracestate='{{ tracestate }}', 
@baggage='{{ baggage }}', 
@qualifier='{{ qualifier }}', 
@accountId='{{ accountId }}' 
@@json=
'{
"body": "{{ body }}"
}'
;
```
</TabItem>
</Tabs>
