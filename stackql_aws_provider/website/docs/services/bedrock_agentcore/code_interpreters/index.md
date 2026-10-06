--- 
title: code_interpreters
hide_title: false
hide_table_of_contents: false
keywords:
  - code_interpreters
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

Creates, updates, deletes, gets or lists a <code>code_interpreters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_interpreters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.code_interpreters" /></td></tr>
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
    <td><a href="#invoke_code_interpreter"><CopyableCode code="invoke_code_interpreter" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-code_interpreter_identifier"><code>code_interpreter_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-x-amzn-code-interpreter-session-id"><code>x-amzn-code-interpreter-session-id</code></a>, <a href="#parameter-X-Amzn-Trace-Id"><code>X-Amzn-Trace-Id</code></a>, <a href="#parameter-traceparent"><code>traceparent</code></a></td>
    <td>Executes code within an active code interpreter session in Amazon Bedrock AgentCore. This operation processes the provided code, runs it in a secure environment, and returns the execution results including output, errors, and generated visualizations. To execute code, you must specify the code interpreter identifier, session ID, and the code to run in the arguments parameter. The operation returns a stream containing the execution results, which can include text output, error messages, and data visualizations. This operation is subject to request rate limiting based on your account's service quotas. The following operations are related to InvokeCodeInterpreter: StartCodeInterpreterSession GetCodeInterpreterSession</td>
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
<tr id="parameter-code_interpreter_identifier">
    <td><CopyableCode code="code_interpreter_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the code interpreter associated with the session. This must match the identifier used when creating the session with StartCodeInterpreterSession.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-X-Amzn-Trace-Id">
    <td><CopyableCode code="X-Amzn-Trace-Id" /></td>
    <td><code>string</code></td>
    <td>The trace identifier for request tracking.</td>
</tr>
<tr id="parameter-traceparent">
    <td><CopyableCode code="traceparent" /></td>
    <td><code>string</code></td>
    <td>The parent trace information for distributed tracing.</td>
</tr>
<tr id="parameter-x-amzn-code-interpreter-session-id">
    <td><CopyableCode code="x-amzn-code-interpreter-session-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the code interpreter session to use. This must be an active session created with StartCodeInterpreterSession. If the session has expired or been stopped, the request will fail.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="invoke_code_interpreter"
    values={[
        { label: 'invoke_code_interpreter', value: 'invoke_code_interpreter' }
    ]}
>
<TabItem value="invoke_code_interpreter">

Executes code within an active code interpreter session in Amazon Bedrock AgentCore. This operation processes the provided code, runs it in a secure environment, and returns the execution results including output, errors, and generated visualizations. To execute code, you must specify the code interpreter identifier, session ID, and the code to run in the arguments parameter. The operation returns a stream containing the execution results, which can include text output, error messages, and data visualizations. This operation is subject to request rate limiting based on your account's service quotas. The following operations are related to InvokeCodeInterpreter: StartCodeInterpreterSession GetCodeInterpreterSession

```sql
EXEC aws.bedrock_agentcore.code_interpreters.invoke_code_interpreter 
@code_interpreter_identifier='{{ code_interpreter_identifier }}' --required, 
@region='{{ region }}' --required, 
@x-amzn-code-interpreter-session-id='{{ x-amzn-code-interpreter-session-id }}', 
@X-Amzn-Trace-Id='{{ X-Amzn-Trace-Id }}', 
@traceparent='{{ traceparent }}' 
@@json=
'{
"name": "{{ name }}", 
"arguments": "{{ arguments }}"
}'
;
```
</TabItem>
</Tabs>
