--- 
title: agents
hide_title: false
hide_table_of_contents: false
keywords:
  - agents
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

Creates, updates, deletes, gets or lists an <code>agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent.agents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agent"
    values={[
        { label: 'get_agent', value: 'get_agent' },
        { label: 'list_agents', value: 'list_agents' }
    ]}
>
<TabItem value="get_agent">

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
    <td><CopyableCode code="agentArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the agent. (pattern: &lt;code&gt;arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:agent/&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentCollaboration" /></td>
    <td><code>string</code></td>
    <td>The agent's collaboration settings. (SUPERVISOR, SUPERVISOR_ROUTER, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="agentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentName" /></td>
    <td><code>string</code></td>
    <td>The name of the agent. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentResourceRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the agent and whether it is ready for use. The following statuses are possible: CREATING – The agent is being created. PREPARING – The agent is being prepared. PREPARED – The agent is prepared and ready to be invoked. NOT_PREPARED – The agent has been created but not yet prepared. FAILED – The agent API operation failed. UPDATING – The agent is being updated. DELETING – The agent is being deleted. (CREATING, PREPARING, PREPARED, NOT_PREPARED, DELETING, FAILED, VERSIONING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="agentVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the agent. (pattern: &lt;code&gt;DRAFT&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,256&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the agent was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customOrchestration" /></td>
    <td><code>object</code></td>
    <td>Details of custom orchestration.</td>
</tr>
<tr>
    <td><CopyableCode code="customerEncryptionKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key that encrypts the agent. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReasons" /></td>
    <td><code>array</code></td>
    <td>Contains reasons that the agent-related API that you invoked failed.</td>
</tr>
<tr>
    <td><CopyableCode code="foundationModel" /></td>
    <td><code>string</code></td>
    <td>The foundation model used for orchestration by the agent. (pattern: &lt;code&gt;(arn:aws(-&#91;^:&#93;&#123;1,12&#125;)?:(bedrock|sagemaker):&#91;a-z0-9-&#93;&#123;1,20&#125;:(&#91;0-9&#93;&#123;12&#125;)?:(&#91;a-z-&#93;+/)?)?(&#91;a-zA-Z0-9.-&#93;&#123;1,63&#125;)&#123;0,2&#125;((&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)?(/&#91;a-z0-9&#93;&#123;1,12&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="guardrailConfiguration" /></td>
    <td><code>object</code></td>
    <td>Details about a guardrail associated with a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="idleSessionTTLInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.</td>
</tr>
<tr>
    <td><CopyableCode code="instruction" /></td>
    <td><code>string</code></td>
    <td>Instructions that tell the agent what it should do and how it should interact with users.</td>
</tr>
<tr>
    <td><CopyableCode code="memoryConfiguration" /></td>
    <td><code>object</code></td>
    <td>Details of the memory configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="orchestrationType" /></td>
    <td><code>string</code></td>
    <td>Specifies the orchestration strategy for the agent. (DEFAULT, CUSTOM_ORCHESTRATION)</td>
</tr>
<tr>
    <td><CopyableCode code="preparedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the agent was last prepared.</td>
</tr>
<tr>
    <td><CopyableCode code="promptOverrideConfiguration" /></td>
    <td><code>object</code></td>
    <td>Contains configurations to override prompts in different parts of an agent sequence. For more information, see Advanced prompts.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendedActions" /></td>
    <td><code>array</code></td>
    <td>Contains recommended actions to take for the agent-related API that you invoked to succeed.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the agent was last updated.</td>
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
    <td><CopyableCode code="agentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentName" /></td>
    <td><code>string</code></td>
    <td>The name of the agent. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the agent. (CREATING, PREPARING, PREPARED, NOT_PREPARED, DELETING, FAILED, VERSIONING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="guardrailConfiguration" /></td>
    <td><code>object</code></td>
    <td>Details about a guardrail associated with a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="latestAgentVersion" /></td>
    <td><code>string</code></td>
    <td>The latest version of the agent. (pattern: &lt;code&gt;(DRAFT|&#91;0-9&#93;&#123;0,4&#125;&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the agent was last updated.</td>
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
    <td><a href="#get_agent"><CopyableCode code="get_agent" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an agent.</td>
</tr>
<tr>
    <td><a href="#list_agents"><CopyableCode code="list_agents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the agents belonging to an account and information about each agent.</td>
</tr>
<tr>
    <td><a href="#create_agent"><CopyableCode code="create_agent" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentName"><code>agentName</code></a></td>
    <td></td>
    <td>Creates an agent that orchestrates interactions between foundation models, data sources, software applications, user conversations, and APIs to carry out tasks to help customers. Specify the following fields for security purposes. agentResourceRoleArn – The Amazon Resource Name (ARN) of the role with permissions to invoke API operations on an agent. (Optional) customerEncryptionKeyArn – The Amazon Resource Name (ARN) of a KMS key to encrypt the creation of the agent. (Optional) idleSessionTTLinSeconds – Specify the number of seconds for which the agent should maintain session information. After this time expires, the subsequent InvokeAgent request begins a new session. To enable your agent to retain conversational context across multiple sessions, include a memoryConfiguration object. For more information, see Configure memory. To override the default prompt behavior for agent orchestration and to use advanced prompts, include a promptOverrideConfiguration object. For more information, see Advanced prompts. If your agent fails to be created, the response returns a list of failureReasons alongside a list of recommendedActions for you to troubleshoot. The agent instructions will not be honored if your agent has only one knowledge base, uses default prompts, has no action group, and user input is disabled.</td>
</tr>
<tr>
    <td><a href="#update_agent"><CopyableCode code="update_agent" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentName"><code>agentName</code></a>, <a href="#parameter-foundationModel"><code>foundationModel</code></a>, <a href="#parameter-agentResourceRoleArn"><code>agentResourceRoleArn</code></a></td>
    <td></td>
    <td>Updates the configuration of an agent.</td>
</tr>
<tr>
    <td><a href="#delete_agent"><CopyableCode code="delete_agent" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-skipResourceInUseCheck"><code>skipResourceInUseCheck</code></a></td>
    <td>Deletes an agent.</td>
</tr>
<tr>
    <td><a href="#prepare_agent"><CopyableCode code="prepare_agent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a DRAFT version of the agent that can be used for internal testing.</td>
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
    <td>The unique identifier of the agent for which to create a DRAFT version.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-skipResourceInUseCheck">
    <td><CopyableCode code="skipResourceInUseCheck" /></td>
    <td><code>boolean</code></td>
    <td>By default, this value is false and deletion is stopped if the resource is in use. If you set it to true, the resource will be deleted even if the resource is in use.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_agent"
    values={[
        { label: 'get_agent', value: 'get_agent' },
        { label: 'list_agents', value: 'list_agents' }
    ]}
>
<TabItem value="get_agent">

Gets information about an agent.

```sql
SELECT
agentArn,
agentCollaboration,
agentId,
agentName,
agentResourceRoleArn,
agentStatus,
agentVersion,
clientToken,
createdAt,
customOrchestration,
customerEncryptionKeyArn,
description,
failureReasons,
foundationModel,
guardrailConfiguration,
idleSessionTTLInSeconds,
instruction,
memoryConfiguration,
orchestrationType,
preparedAt,
promptOverrideConfiguration,
recommendedActions,
updatedAt
FROM aws.bedrock_agent.agents
WHERE agent_id = '{{ agent_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agents">

Lists the agents belonging to an account and information about each agent.

```sql
SELECT
agentId,
agentName,
agentStatus,
description,
guardrailConfiguration,
latestAgentVersion,
updatedAt
FROM aws.bedrock_agent.agents
WHERE region = '{{ region }}' -- required
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

Creates an agent that orchestrates interactions between foundation models, data sources, software applications, user conversations, and APIs to carry out tasks to help customers. Specify the following fields for security purposes. agentResourceRoleArn – The Amazon Resource Name (ARN) of the role with permissions to invoke API operations on an agent. (Optional) customerEncryptionKeyArn – The Amazon Resource Name (ARN) of a KMS key to encrypt the creation of the agent. (Optional) idleSessionTTLinSeconds – Specify the number of seconds for which the agent should maintain session information. After this time expires, the subsequent InvokeAgent request begins a new session. To enable your agent to retain conversational context across multiple sessions, include a memoryConfiguration object. For more information, see Configure memory. To override the default prompt behavior for agent orchestration and to use advanced prompts, include a promptOverrideConfiguration object. For more information, see Advanced prompts. If your agent fails to be created, the response returns a list of failureReasons alongside a list of recommendedActions for you to troubleshoot. The agent instructions will not be honored if your agent has only one knowledge base, uses default prompts, has no action group, and user input is disabled.

```sql
INSERT INTO aws.bedrock_agent.agents (
agentName,
clientToken,
instruction,
foundationModel,
description,
orchestrationType,
customOrchestration,
idleSessionTTLInSeconds,
agentResourceRoleArn,
customerEncryptionKeyArn,
tags,
promptOverrideConfiguration,
guardrailConfiguration,
memoryConfiguration,
agentCollaboration,
region
)
SELECT 
'{{ agentName }}' /* required */,
'{{ clientToken }}',
'{{ instruction }}',
'{{ foundationModel }}',
'{{ description }}',
'{{ orchestrationType }}',
'{{ customOrchestration }}',
{{ idleSessionTTLInSeconds }},
'{{ agentResourceRoleArn }}',
'{{ customerEncryptionKeyArn }}',
'{{ tags }}',
'{{ promptOverrideConfiguration }}',
'{{ guardrailConfiguration }}',
'{{ memoryConfiguration }}',
'{{ agentCollaboration }}',
'{{ region }}'
RETURNING
agent
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agents
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the agents resource.
    - name: agentName
      value: "{{ agentName }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: instruction
      value: "{{ instruction }}"
    - name: foundationModel
      value: "{{ foundationModel }}"
    - name: description
      value: "{{ description }}"
    - name: orchestrationType
      value: "{{ orchestrationType }}"
      valid_values: ['DEFAULT', 'CUSTOM_ORCHESTRATION']
    - name: customOrchestration
      description: |
        Details of custom orchestration.
      value:
        executor:
          lambda: "{{ lambda }}"
    - name: idleSessionTTLInSeconds
      value: {{ idleSessionTTLInSeconds }}
    - name: agentResourceRoleArn
      value: "{{ agentResourceRoleArn }}"
    - name: customerEncryptionKeyArn
      value: "{{ customerEncryptionKeyArn }}"
    - name: tags
      value: "{{ tags }}"
    - name: promptOverrideConfiguration
      description: |
        Contains configurations to override prompts in different parts of an agent sequence. For more information, see Advanced prompts.
      value:
        promptConfigurations:
          - promptType: "{{ promptType }}"
            promptCreationMode: "{{ promptCreationMode }}"
            promptState: "{{ promptState }}"
            basePromptTemplate: "{{ basePromptTemplate }}"
            inferenceConfiguration:
              temperature: {{ temperature }}
              topP: {{ topP }}
              topK: {{ topK }}
              maximumLength: {{ maximumLength }}
              stopSequences:
                - "{{ stopSequences }}"
            parserMode: "{{ parserMode }}"
            foundationModel: "{{ foundationModel }}"
            additionalModelRequestFields: "{{ additionalModelRequestFields }}"
        overrideLambda: "{{ overrideLambda }}"
    - name: guardrailConfiguration
      description: |
        Details about a guardrail associated with a resource.
      value:
        guardrailIdentifier: "{{ guardrailIdentifier }}"
        guardrailVersion: "{{ guardrailVersion }}"
    - name: memoryConfiguration
      description: |
        Details of the memory configuration.
      value:
        enabledMemoryTypes:
          - "{{ enabledMemoryTypes }}"
        storageDays: {{ storageDays }}
        sessionSummaryConfiguration:
          maxRecentSessions: {{ maxRecentSessions }}
    - name: agentCollaboration
      value: "{{ agentCollaboration }}"
      valid_values: ['SUPERVISOR', 'SUPERVISOR_ROUTER', 'DISABLED']
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

Updates the configuration of an agent.

```sql
UPDATE aws.bedrock_agent.agents
SET 
agentName = '{{ agentName }}',
instruction = '{{ instruction }}',
foundationModel = '{{ foundationModel }}',
description = '{{ description }}',
orchestrationType = '{{ orchestrationType }}',
customOrchestration = '{{ customOrchestration }}',
idleSessionTTLInSeconds = {{ idleSessionTTLInSeconds }},
agentResourceRoleArn = '{{ agentResourceRoleArn }}',
customerEncryptionKeyArn = '{{ customerEncryptionKeyArn }}',
promptOverrideConfiguration = '{{ promptOverrideConfiguration }}',
guardrailConfiguration = '{{ guardrailConfiguration }}',
memoryConfiguration = '{{ memoryConfiguration }}',
agentCollaboration = '{{ agentCollaboration }}'
WHERE 
agent_id = '{{ agent_id }}' --required
AND region = '{{ region }}' --required
AND agentName = '{{ agentName }}' --required
AND foundationModel = '{{ foundationModel }}' --required
AND agentResourceRoleArn = '{{ agentResourceRoleArn }}' --required
RETURNING
agent;
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
DELETE FROM aws.bedrock_agent.agents
WHERE agent_id = '{{ agent_id }}' --required
AND region = '{{ region }}' --required
AND skipResourceInUseCheck = '{{ skipResourceInUseCheck }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="prepare_agent"
    values={[
        { label: 'prepare_agent', value: 'prepare_agent' }
    ]}
>
<TabItem value="prepare_agent">

Creates a DRAFT version of the agent that can be used for internal testing.

```sql
EXEC aws.bedrock_agent.agents.prepare_agent 
@agent_id='{{ agent_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
