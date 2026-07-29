--- 
title: agent_cards
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_cards
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

Creates, updates, deletes, gets or lists an <code>agent_cards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_cards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.agent_cards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agent_card"
    values={[
        { label: 'get_agent_card', value: 'get_agent_card' }
    ]}
>
<TabItem value="get_agent_card">

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
    <td><CopyableCode code="agent_card" /></td>
    <td><code>object</code></td>
    <td>An agent card document that contains metadata and capabilities for an AgentCore Runtime agent.</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_session_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the session associated with the AgentCore Runtime agent. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status_code" /></td>
    <td><code>integer</code></td>
    <td>The status code of the request.</td>
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
    <td><a href="#get_agent_card"><CopyableCode code="get_agent_card" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_runtime_arn"><code>agent_runtime_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Bedrock-AgentCore-Runtime-Session-Id"><code>X-Amzn-Bedrock-AgentCore-Runtime-Session-Id</code></a>, <a href="#parameter-qualifier"><code>qualifier</code></a></td>
    <td>Retrieves the A2A agent card associated with an AgentCore Runtime agent.</td>
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
    <td>The ARN of the AgentCore Runtime agent for which you want to get the A2A agent card.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-X-Amzn-Bedrock-AgentCore-Runtime-Session-Id">
    <td><CopyableCode code="X-Amzn-Bedrock-AgentCore-Runtime-Session-Id" /></td>
    <td><code>string</code></td>
    <td>The session ID that the AgentCore Runtime agent is using.</td>
</tr>
<tr id="parameter-qualifier">
    <td><CopyableCode code="qualifier" /></td>
    <td><code>string</code></td>
    <td>Optional qualifier to specify an agent alias, such as prodcode&gt; or dev. If you don't provide a value, the DEFAULT alias is used.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_agent_card"
    values={[
        { label: 'get_agent_card', value: 'get_agent_card' }
    ]}
>
<TabItem value="get_agent_card">

Retrieves the A2A agent card associated with an AgentCore Runtime agent.

```sql
SELECT
agent_card,
runtime_session_id,
status_code
FROM aws.bedrock_agentcore.agent_cards
WHERE agent_runtime_arn = '{{ agent_runtime_arn }}' -- required
AND region = '{{ region }}' -- required
AND `X-Amzn-Bedrock-AgentCore-Runtime-Session-Id` = '{{ X-Amzn-Bedrock-AgentCore-Runtime-Session-Id }}'
AND qualifier = '{{ qualifier }}'
;
```
</TabItem>
</Tabs>
