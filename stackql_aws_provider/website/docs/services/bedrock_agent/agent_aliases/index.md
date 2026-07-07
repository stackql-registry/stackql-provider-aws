--- 
title: agent_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_aliases
  - bedrock_agent
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

Creates, updates, deletes, gets or lists an <code>agent_aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent.agent_aliases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_agent_aliases"
    values={[
        { label: 'list_agent_aliases', value: 'list_agent_aliases' }
    ]}
>
<TabItem value="list_agent_aliases">

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
    <td><CopyableCode code="agentAliasId" /></td>
    <td><code>string</code></td>
    <td>Contains details about (pattern: &lt;code&gt;(\bTSTALIASID\b|&#91;0-9a-zA-Z&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentAliasName" /></td>
    <td><code>string</code></td>
    <td>The name of the alias. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentAliasStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the alias. (CREATING, PREPARED, FAILED, UPDATING, DELETING, DISSOCIATED)</td>
</tr>
<tr>
    <td><CopyableCode code="aliasInvocationState" /></td>
    <td><code>string</code></td>
    <td>The invocation state for the agent alias. If the agent alias is running, the value is ACCEPT_INVOCATIONS. If the agent alias is paused, the value is REJECT_INVOCATIONS. Use the UpdateAgentAlias operation to change the invocation state. (ACCEPT_INVOCATIONS, REJECT_INVOCATIONS)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the alias of the agent was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the alias.</td>
</tr>
<tr>
    <td><CopyableCode code="routingConfiguration" /></td>
    <td><code>array</code></td>
    <td>Contains details about the version of the agent with which the alias is associated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the alias was last updated.</td>
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
    <td><a href="#list_agent_aliases"><CopyableCode code="list_agent_aliases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the aliases of an agent and information about each one.</td>
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
<tr id="parameter-agent_id">
    <td><CopyableCode code="agent_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent.</td>
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
    defaultValue="list_agent_aliases"
    values={[
        { label: 'list_agent_aliases', value: 'list_agent_aliases' }
    ]}
>
<TabItem value="list_agent_aliases">

Lists the aliases of an agent and information about each one.

```sql
SELECT
agentAliasId,
agentAliasName,
agentAliasStatus,
aliasInvocationState,
createdAt,
description,
routingConfiguration,
updatedAt
FROM aws.bedrock_agent.agent_aliases
WHERE agent_id = '{{ agent_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
