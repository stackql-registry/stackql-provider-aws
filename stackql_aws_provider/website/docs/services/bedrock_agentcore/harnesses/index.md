--- 
title: harnesses
hide_title: false
hide_table_of_contents: false
keywords:
  - harnesses
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

Creates, updates, deletes, gets or lists a <code>harnesses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="harnesses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.harnesses" /></td></tr>
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
    <td><a href="#invoke_harness"><CopyableCode code="invoke_harness" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-harnessArn"><code>harnessArn</code></a>, <a href="#parameter-X-Amzn-Bedrock-AgentCore-Runtime-Session-Id"><code>X-Amzn-Bedrock-AgentCore-Runtime-Session-Id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-messages"><code>messages</code></a></td>
    <td><a href="#parameter-qualifier"><code>qualifier</code></a>, <a href="#parameter-X-Amzn-Bedrock-AgentCore-Runtime-User-Id"><code>X-Amzn-Bedrock-AgentCore-Runtime-User-Id</code></a>, <a href="#parameter-traceparent"><code>traceparent</code></a>, <a href="#parameter-tracestate"><code>tracestate</code></a>, <a href="#parameter-X-Amzn-Trace-Id"><code>X-Amzn-Trace-Id</code></a>, <a href="#parameter-baggage"><code>baggage</code></a></td>
    <td>Operation to invoke a Harness.</td>
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
<tr id="parameter-X-Amzn-Bedrock-AgentCore-Runtime-Session-Id">
    <td><CopyableCode code="X-Amzn-Bedrock-AgentCore-Runtime-Session-Id" /></td>
    <td><code>string</code></td>
    <td>The session ID for the invocation. Use the same session ID across requests to continue a conversation.</td>
</tr>
<tr id="parameter-harnessArn">
    <td><CopyableCode code="harnessArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the harness to invoke.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-X-Amzn-Bedrock-AgentCore-Runtime-User-Id">
    <td><CopyableCode code="X-Amzn-Bedrock-AgentCore-Runtime-User-Id" /></td>
    <td><code>string</code></td>
    <td>An identifier for the end user making the request. This value is passed through to the runtime container.</td>
</tr>
<tr id="parameter-X-Amzn-Trace-Id">
    <td><CopyableCode code="X-Amzn-Trace-Id" /></td>
    <td><code>string</code></td>
    <td>Trace ID for maintaining observability through the operation.</td>
</tr>
<tr id="parameter-baggage">
    <td><CopyableCode code="baggage" /></td>
    <td><code>string</code></td>
    <td>W3C Baggage header for user-defined context propagation. Format: key1=value1,key2=value2</td>
</tr>
<tr id="parameter-qualifier">
    <td><CopyableCode code="qualifier" /></td>
    <td><code>string</code></td>
    <td>The endpoint name to invoke. If omitted, the DEFAULT endpoint is used.</td>
</tr>
<tr id="parameter-traceparent">
    <td><CopyableCode code="traceparent" /></td>
    <td><code>string</code></td>
    <td>W3C trace context parent header containing version, trace ID, parent span ID, and trace flags.</td>
</tr>
<tr id="parameter-tracestate">
    <td><CopyableCode code="tracestate" /></td>
    <td><code>string</code></td>
    <td>W3C trace context state header for vendor-specific trace information.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="invoke_harness"
    values={[
        { label: 'invoke_harness', value: 'invoke_harness' }
    ]}
>
<TabItem value="invoke_harness">

Operation to invoke a Harness.

```sql
EXEC aws.bedrock_agentcore.harnesses.invoke_harness 
@harnessArn='{{ harnessArn }}' --required, 
@X-Amzn-Bedrock-AgentCore-Runtime-Session-Id='{{ X-Amzn-Bedrock-AgentCore-Runtime-Session-Id }}' --required, 
@region='{{ region }}' --required, 
@qualifier='{{ qualifier }}', 
@X-Amzn-Bedrock-AgentCore-Runtime-User-Id='{{ X-Amzn-Bedrock-AgentCore-Runtime-User-Id }}', 
@traceparent='{{ traceparent }}', 
@tracestate='{{ tracestate }}', 
@X-Amzn-Trace-Id='{{ X-Amzn-Trace-Id }}', 
@baggage='{{ baggage }}' 
@@json=
'{
"messages": "{{ messages }}", 
"model": "{{ model }}", 
"systemPrompt": "{{ systemPrompt }}", 
"tools": "{{ tools }}", 
"skills": "{{ skills }}", 
"allowedTools": "{{ allowedTools }}", 
"maxIterations": {{ maxIterations }}, 
"maxTokens": {{ maxTokens }}, 
"timeoutSeconds": {{ timeoutSeconds }}, 
"actorId": "{{ actorId }}"
}'
;
```
</TabItem>
</Tabs>
