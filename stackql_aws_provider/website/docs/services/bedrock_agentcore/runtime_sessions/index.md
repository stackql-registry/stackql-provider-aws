--- 
title: runtime_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - runtime_sessions
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

Creates, updates, deletes, gets or lists a <code>runtime_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="runtime_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.runtime_sessions" /></td></tr>
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
    <td><a href="#stop_runtime_session"><CopyableCode code="stop_runtime_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-X-Amzn-Bedrock-AgentCore-Runtime-Session-Id"><code>X-Amzn-Bedrock-AgentCore-Runtime-Session-Id</code></a>, <a href="#parameter-agent_runtime_arn"><code>agent_runtime_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-qualifier"><code>qualifier</code></a></td>
    <td>Stops a session that is running in an running AgentCore Runtime agent.</td>
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
    <td>The ID of the session that you want to stop.</td>
</tr>
<tr id="parameter-agent_runtime_arn">
    <td><CopyableCode code="agent_runtime_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the agent that contains the session that you want to stop.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-qualifier">
    <td><CopyableCode code="qualifier" /></td>
    <td><code>string</code></td>
    <td>Optional qualifier to specify an agent alias, such as prodcode&gt; or dev. If you don't provide a value, the DEFAULT alias is used.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="stop_runtime_session"
    values={[
        { label: 'stop_runtime_session', value: 'stop_runtime_session' }
    ]}
>
<TabItem value="stop_runtime_session">

Stops a session that is running in an running AgentCore Runtime agent.

```sql
EXEC aws.bedrock_agentcore.runtime_sessions.stop_runtime_session 
@X-Amzn-Bedrock-AgentCore-Runtime-Session-Id='{{ X-Amzn-Bedrock-AgentCore-Runtime-Session-Id }}' --required, 
@agent_runtime_arn='{{ agent_runtime_arn }}' --required, 
@region='{{ region }}' --required, 
@qualifier='{{ qualifier }}' 
@@json=
'{
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
