--- 
title: agent_alias
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_alias
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

Creates, updates, deletes, gets or lists an <code>agent_alias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_alias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent.agent_alias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agent_alias"
    values={[
        { label: 'get_agent_alias', value: 'get_agent_alias' }
    ]}
>
<TabItem value="get_agent_alias">

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
    <td><CopyableCode code="agentAliasArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the alias of the agent. (pattern: &lt;code&gt;arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:agent-alias/&#91;0-9a-zA-Z&#93;&#123;10&#125;/&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentAliasHistoryEvents" /></td>
    <td><code>array</code></td>
    <td>Contains details about the history of the alias.</td>
</tr>
<tr>
    <td><CopyableCode code="agentAliasId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the alias of the agent. (pattern: &lt;code&gt;(\bTSTALIASID\b|&#91;0-9a-zA-Z&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentAliasName" /></td>
    <td><code>string</code></td>
    <td>The name of the alias of the agent. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentAliasStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the alias of the agent and whether it is ready for use. The following statuses are possible: CREATING – The agent alias is being created. PREPARED – The agent alias is finished being created or updated and is ready to be invoked. FAILED – The agent alias API operation failed. UPDATING – The agent alias is being updated. DELETING – The agent alias is being deleted. DISSOCIATED - The agent alias has no version associated with it. (CREATING, PREPARED, FAILED, UPDATING, DELETING, DISSOCIATED)</td>
</tr>
<tr>
    <td><CopyableCode code="agentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aliasInvocationState" /></td>
    <td><code>string</code></td>
    <td>The invocation state for the agent alias. If the agent alias is running, the value is ACCEPT_INVOCATIONS. If the agent alias is paused, the value is REJECT_INVOCATIONS. Use the UpdateAgentAlias operation to change the invocation state. (ACCEPT_INVOCATIONS, REJECT_INVOCATIONS)</td>
</tr>
<tr>
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,256&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the alias of the agent was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the alias of the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReasons" /></td>
    <td><code>array</code></td>
    <td>Information on the failure of Provisioned Throughput assigned to an agent alias.</td>
</tr>
<tr>
    <td><CopyableCode code="routingConfiguration" /></td>
    <td><code>array</code></td>
    <td>Contains details about the routing configuration of the alias.</td>
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
    <td><a href="#get_agent_alias"><CopyableCode code="get_agent_alias" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_alias_id"><code>agent_alias_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an alias of an agent.</td>
</tr>
<tr>
    <td><a href="#create_agent_alias"><CopyableCode code="create_agent_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentAliasName"><code>agentAliasName</code></a></td>
    <td></td>
    <td>Creates an alias of an agent that can be used to deploy the agent.</td>
</tr>
<tr>
    <td><a href="#update_agent_alias"><CopyableCode code="update_agent_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_alias_id"><code>agent_alias_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentAliasName"><code>agentAliasName</code></a></td>
    <td></td>
    <td>Updates configurations for an alias of an agent.</td>
</tr>
<tr>
    <td><a href="#delete_agent_alias"><CopyableCode code="delete_agent_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_alias_id"><code>agent_alias_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an alias of an agent.</td>
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
<tr id="parameter-agent_alias_id">
    <td><CopyableCode code="agent_alias_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the alias to delete.</td>
</tr>
<tr id="parameter-agent_id">
    <td><CopyableCode code="agent_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent that the alias belongs to.</td>
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
    defaultValue="get_agent_alias"
    values={[
        { label: 'get_agent_alias', value: 'get_agent_alias' }
    ]}
>
<TabItem value="get_agent_alias">

Gets information about an alias of an agent.

```sql
SELECT
agentAliasArn,
agentAliasHistoryEvents,
agentAliasId,
agentAliasName,
agentAliasStatus,
agentId,
aliasInvocationState,
clientToken,
createdAt,
description,
failureReasons,
routingConfiguration,
updatedAt
FROM aws.bedrock_agent.agent_alias
WHERE agent_id = '{{ agent_id }}' -- required
AND agent_alias_id = '{{ agent_alias_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_agent_alias"
    values={[
        { label: 'create_agent_alias', value: 'create_agent_alias' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_agent_alias">

Creates an alias of an agent that can be used to deploy the agent.

```sql
INSERT INTO aws.bedrock_agent.agent_alias (
agentAliasName,
clientToken,
description,
routingConfiguration,
tags,
agent_id,
region
)
SELECT 
'{{ agentAliasName }}' /* required */,
'{{ clientToken }}',
'{{ description }}',
'{{ routingConfiguration }}',
'{{ tags }}',
'{{ agent_id }}',
'{{ region }}'
RETURNING
agentAlias
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agent_alias
  props:
    - name: agent_id
      value: "{{ agent_id }}"
      description: Required parameter for the agent_alias resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the agent_alias resource.
    - name: agentAliasName
      value: "{{ agentAliasName }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: description
      value: "{{ description }}"
    - name: routingConfiguration
      value:
        - agentVersion: "{{ agentVersion }}"
          provisionedThroughput: "{{ provisionedThroughput }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_agent_alias"
    values={[
        { label: 'update_agent_alias', value: 'update_agent_alias' }
    ]}
>
<TabItem value="update_agent_alias">

Updates configurations for an alias of an agent.

```sql
UPDATE aws.bedrock_agent.agent_alias
SET 
agentAliasName = '{{ agentAliasName }}',
description = '{{ description }}',
routingConfiguration = '{{ routingConfiguration }}',
aliasInvocationState = '{{ aliasInvocationState }}'
WHERE 
agent_id = '{{ agent_id }}' --required
AND agent_alias_id = '{{ agent_alias_id }}' --required
AND region = '{{ region }}' --required
AND agentAliasName = '{{ agentAliasName }}' --required
RETURNING
agentAlias;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_agent_alias"
    values={[
        { label: 'delete_agent_alias', value: 'delete_agent_alias' }
    ]}
>
<TabItem value="delete_agent_alias">

Deletes an alias of an agent.

```sql
DELETE FROM aws.bedrock_agent.agent_alias
WHERE agent_id = '{{ agent_id }}' --required
AND agent_alias_id = '{{ agent_alias_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
