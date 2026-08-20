--- 
title: agents
hide_title: false
hide_table_of_contents: false
keywords:
  - agents
  - quicksight
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

Creates, updates, deletes, gets or lists an <code>agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.agents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_agent"
    values={[
        { label: 'describe_agent', value: 'describe_agent' },
        { label: 'search_agents', value: 'search_agents' },
        { label: 'list_agents', value: 'list_agents' }
    ]}
>
<TabItem value="describe_agent">

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
    <td><CopyableCode code="agent" /></td>
    <td><code>object</code></td>
    <td>The full details of the agent, including its configuration, status, and associations.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_agents">

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
    <td><CopyableCode code="agent_summaries" /></td>
    <td><code>array</code></td>
    <td>A list of agent summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agents">

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
    <td><CopyableCode code="agent_summaries" /></td>
    <td><code>array</code></td>
    <td>A list of agent summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
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
    <td><a href="#describe_agent"><CopyableCode code="describe_agent" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an agent.</td>
</tr>
<tr>
    <td><a href="#search_agents"><CopyableCode code="search_agents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Searches for agents based on specified filters.</td>
</tr>
<tr>
    <td><a href="#list_agents"><CopyableCode code="list_agents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists all agents in an Amazon QuickSight account.</td>
</tr>
<tr>
    <td><a href="#create_agent"><CopyableCode code="create_agent" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AgentId"><code>AgentId</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Creates an agent in Amazon QuickSight.</td>
</tr>
<tr>
    <td><a href="#update_agent"><CopyableCode code="update_agent" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Updates an existing agent.</td>
</tr>
<tr>
    <td><a href="#delete_agent"><CopyableCode code="delete_agent" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an agent.</td>
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
    <td>The unique identifier for the agent to delete.</td>
</tr>
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the agent.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_agent"
    values={[
        { label: 'describe_agent', value: 'describe_agent' },
        { label: 'search_agents', value: 'search_agents' },
        { label: 'list_agents', value: 'list_agents' }
    ]}
>
<TabItem value="describe_agent">

Describes an agent.

```sql
SELECT
agent,
request_id
FROM aws.quicksight.agents
WHERE agent_id = '{{ agent_id }}' -- required
AND aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_agents">

Searches for agents based on specified filters.

```sql
SELECT
agent_summaries,
next_token,
request_id
FROM aws.quicksight.agents
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
<TabItem value="list_agents">

Lists all agents in an Amazon QuickSight account.

```sql
SELECT
agent_summaries,
next_token,
request_id
FROM aws.quicksight.agents
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_agent"
    values={[
        { label: 'create_agent', value: 'create_agent' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_agent">

Creates an agent in Amazon QuickSight.

```sql
INSERT INTO aws.quicksight.agents (
Spaces,
ActionConnectors,
AgentId,
Name,
Description,
IconId,
StarterPrompts,
WelcomeMessage,
AgentLifecycle,
CustomPromptInput,
aws_account_id,
region
)
SELECT 
'{{ Spaces }}',
'{{ ActionConnectors }}',
'{{ AgentId }}' /* required */,
'{{ Name }}' /* required */,
'{{ Description }}',
'{{ IconId }}',
'{{ StarterPrompts }}',
'{{ WelcomeMessage }}',
'{{ AgentLifecycle }}',
'{{ CustomPromptInput }}',
'{{ aws_account_id }}',
'{{ region }}'
RETURNING
agent_id,
agent_name,
agent_status,
arn,
request_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agents
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the agents resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the agents resource.
    - name: Spaces
      value:
        - "{{ Spaces }}"
    - name: ActionConnectors
      value:
        - "{{ ActionConnectors }}"
    - name: AgentId
      value: "{{ AgentId }}"
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: IconId
      value: "{{ IconId }}"
    - name: StarterPrompts
      value:
        - "{{ StarterPrompts }}"
    - name: WelcomeMessage
      value: "{{ WelcomeMessage }}"
    - name: AgentLifecycle
      value: "{{ AgentLifecycle }}"
      valid_values: ['PREVIEW', 'PUBLISHED']
    - name: CustomPromptInput
      description: |
        The custom prompt input for an agent. This is a union type that can be either an existing prompt profile or new prompt parameters.
      value:
        ExistingPrompt:
          ModelProfileId: "{{ ModelProfileId }}"
          SubscriptionId: "{{ SubscriptionId }}"
          QbsAwsAccountId: "{{ QbsAwsAccountId }}"
        NewPrompt:
          ResponseLength: "{{ ResponseLength }}"
          OutputStyle: "{{ OutputStyle }}"
          Identity: "{{ Identity }}"
          Tone: "{{ Tone }}"
          CustomInstructions: "{{ CustomInstructions }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_agent"
    values={[
        { label: 'update_agent', value: 'update_agent' }
    ]}
>
<TabItem value="update_agent">

Updates an existing agent.

```sql
UPDATE aws.quicksight.agents
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
IconId = '{{ IconId }}',
StarterPrompts = '{{ StarterPrompts }}',
WelcomeMessage = '{{ WelcomeMessage }}',
CustomPromptInput = '{{ CustomPromptInput }}',
SpacesToAdd = '{{ SpacesToAdd }}',
SpacesToRemove = '{{ SpacesToRemove }}',
ActionConnectorsToAdd = '{{ ActionConnectorsToAdd }}',
ActionConnectorsToRemove = '{{ ActionConnectorsToRemove }}'
WHERE 
agent_id = '{{ agent_id }}' --required
AND aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
RETURNING
agent_id,
agent_status,
arn,
failed_to_add_action_connectors,
failed_to_add_spaces,
failed_to_remove_action_connectors,
failed_to_remove_spaces,
request_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_agent"
    values={[
        { label: 'delete_agent', value: 'delete_agent' }
    ]}
>
<TabItem value="delete_agent">

Deletes an agent.

```sql
DELETE FROM aws.quicksight.agents
WHERE agent_id = '{{ agent_id }}' --required
AND aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
