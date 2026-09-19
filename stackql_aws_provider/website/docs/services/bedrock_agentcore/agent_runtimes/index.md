--- 
title: agent_runtimes
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_runtimes
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

Creates, updates, deletes, gets or lists an <code>agent_runtimes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_runtimes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.agent_runtimes" /></td></tr>
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
    <td><a href="#invoke_agent_runtime"><CopyableCode code="invoke_agent_runtime" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_runtime_arn"><code>agent_runtime_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-payload"><code>payload</code></a></td>
    <td><a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Mcp-Session-Id"><code>Mcp-Session-Id</code></a>, <a href="#parameter-X-Amzn-Bedrock-AgentCore-Runtime-Session-Id"><code>X-Amzn-Bedrock-AgentCore-Runtime-Session-Id</code></a>, <a href="#parameter-Mcp-Protocol-Version"><code>Mcp-Protocol-Version</code></a>, <a href="#parameter-Mcp-Method"><code>Mcp-Method</code></a>, <a href="#parameter-Mcp-Name"><code>Mcp-Name</code></a>, <a href="#parameter-X-Amzn-Bedrock-AgentCore-Runtime-User-Id"><code>X-Amzn-Bedrock-AgentCore-Runtime-User-Id</code></a>, <a href="#parameter-X-Amzn-Trace-Id"><code>X-Amzn-Trace-Id</code></a>, <a href="#parameter-traceparent"><code>traceparent</code></a>, <a href="#parameter-tracestate"><code>tracestate</code></a>, <a href="#parameter-baggage"><code>baggage</code></a>, <a href="#parameter-qualifier"><code>qualifier</code></a>, <a href="#parameter-accountId"><code>accountId</code></a></td>
    <td>Sends a request to an agent or tool hosted in an Amazon Bedrock AgentCore Runtime and receives responses in real-time. To invoke an agent, you can specify either the AgentCore Runtime ARN or the agent ID with an account ID, and provide a payload containing your request. When you use the agent ID instead of the full ARN, you don't need to URL-encode the identifier. You can optionally specify a qualifier to target a specific endpoint of the agent. This operation supports streaming responses, allowing you to receive partial responses as they become available. We recommend using pagination to ensure that the operation returns quickly and successfully when processing large responses. For example code, see Invoke an AgentCore Runtime agent. If you're integrating your agent with OAuth, you can't use the Amazon Web Services SDK to call InvokeAgentRuntime. Instead, make a HTTPS request to InvokeAgentRuntime. For an example, see Authenticate and authorize with Inbound Auth and Outbound Auth. To use this operation, you must have the bedrock-agentcore:InvokeAgentRuntime permission. If you are making a call to InvokeAgentRuntime on behalf of a user ID with the X-Amzn-Bedrock-AgentCore-Runtime-User-Id header, You require permissions to both actions (bedrock-agentcore:InvokeAgentRuntime and bedrock-agentcore:InvokeAgentRuntimeForUser).</td>
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
    <td>The identifier of the agent runtime to invoke. You can specify either the full Amazon Web Services Resource Name (ARN) or the agent ID. If you use the agent ID, you must also provide the accountId query parameter.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Accept">
    <td><CopyableCode code="Accept" /></td>
    <td><code>string</code></td>
    <td>The desired MIME type for the response from the agent runtime. This tells the agent runtime what format to use for the response data. Common values include application/json for JSON data.</td>
</tr>
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the input data in the payload. This tells the agent runtime how to interpret the payload data. Common values include application/json for JSON data.</td>
</tr>
<tr id="parameter-Mcp-Method">
    <td><CopyableCode code="Mcp-Method" /></td>
    <td><code>string</code></td>
    <td>The MCP method being invoked. For example, tools/call, resources/read, or prompts/get.</td>
</tr>
<tr id="parameter-Mcp-Name">
    <td><CopyableCode code="Mcp-Name" /></td>
    <td><code>string</code></td>
    <td>The name of the MCP resource, tool, or prompt being accessed. The value depends on the method: tools/call – The tool name. resources/read – The resource URI. prompts/get – The prompt name.</td>
</tr>
<tr id="parameter-Mcp-Protocol-Version">
    <td><CopyableCode code="Mcp-Protocol-Version" /></td>
    <td><code>string</code></td>
    <td>The version of the MCP protocol being used.</td>
</tr>
<tr id="parameter-Mcp-Session-Id">
    <td><CopyableCode code="Mcp-Session-Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the MCP session.</td>
</tr>
<tr id="parameter-X-Amzn-Bedrock-AgentCore-Runtime-Session-Id">
    <td><CopyableCode code="X-Amzn-Bedrock-AgentCore-Runtime-Session-Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the runtime session.</td>
</tr>
<tr id="parameter-X-Amzn-Bedrock-AgentCore-Runtime-User-Id">
    <td><CopyableCode code="X-Amzn-Bedrock-AgentCore-Runtime-User-Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the runtime user.</td>
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
    defaultValue="invoke_agent_runtime"
    values={[
        { label: 'invoke_agent_runtime', value: 'invoke_agent_runtime' }
    ]}
>
<TabItem value="invoke_agent_runtime">

Sends a request to an agent or tool hosted in an Amazon Bedrock AgentCore Runtime and receives responses in real-time. To invoke an agent, you can specify either the AgentCore Runtime ARN or the agent ID with an account ID, and provide a payload containing your request. When you use the agent ID instead of the full ARN, you don't need to URL-encode the identifier. You can optionally specify a qualifier to target a specific endpoint of the agent. This operation supports streaming responses, allowing you to receive partial responses as they become available. We recommend using pagination to ensure that the operation returns quickly and successfully when processing large responses. For example code, see Invoke an AgentCore Runtime agent. If you're integrating your agent with OAuth, you can't use the Amazon Web Services SDK to call InvokeAgentRuntime. Instead, make a HTTPS request to InvokeAgentRuntime. For an example, see Authenticate and authorize with Inbound Auth and Outbound Auth. To use this operation, you must have the bedrock-agentcore:InvokeAgentRuntime permission. If you are making a call to InvokeAgentRuntime on behalf of a user ID with the X-Amzn-Bedrock-AgentCore-Runtime-User-Id header, You require permissions to both actions (bedrock-agentcore:InvokeAgentRuntime and bedrock-agentcore:InvokeAgentRuntimeForUser).

```sql
EXEC aws.bedrock_agentcore.agent_runtimes.invoke_agent_runtime 
@agent_runtime_arn='{{ agent_runtime_arn }}' --required, 
@region='{{ region }}' --required, 
@Content-Type='{{ Content-Type }}', 
@Accept='{{ Accept }}', 
@Mcp-Session-Id='{{ Mcp-Session-Id }}', 
@X-Amzn-Bedrock-AgentCore-Runtime-Session-Id='{{ X-Amzn-Bedrock-AgentCore-Runtime-Session-Id }}', 
@Mcp-Protocol-Version='{{ Mcp-Protocol-Version }}', 
@Mcp-Method='{{ Mcp-Method }}', 
@Mcp-Name='{{ Mcp-Name }}', 
@X-Amzn-Bedrock-AgentCore-Runtime-User-Id='{{ X-Amzn-Bedrock-AgentCore-Runtime-User-Id }}', 
@X-Amzn-Trace-Id='{{ X-Amzn-Trace-Id }}', 
@traceparent='{{ traceparent }}', 
@tracestate='{{ tracestate }}', 
@baggage='{{ baggage }}', 
@qualifier='{{ qualifier }}', 
@accountId='{{ accountId }}' 
@@json=
'{
"payload": "{{ payload }}"
}'
;
```
</TabItem>
</Tabs>
