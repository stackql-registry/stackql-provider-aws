--- 
title: ai_agents
hide_title: false
hide_table_of_contents: false
keywords:
  - ai_agents
  - qconnect
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

Creates, updates, deletes, gets or lists an <code>ai_agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ai_agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.ai_agents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ai_agent"
    values={[
        { label: 'get_ai_agent', value: 'get_ai_agent' },
        { label: 'list_ai_agents', value: 'list_ai_agents' }
    ]}
>
<TabItem value="get_ai_agent">

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
    <td><CopyableCode code="ai_agent" /></td>
    <td><code>object</code></td>
    <td>The data of the AI Agent.</td>
</tr>
<tr>
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the AI Agent version (returned if an AI Agent version was specified via use of a qualifier for the aiAgentId on the request).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ai_agents">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the AI Agent. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ai_agent_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the AI agent. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ai_agent_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the AI Agent. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assistant_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assistant_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>A typed union that specifies the configuration based on the type of AI Agent.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the AI Agent. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the AI Agent was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>The origin of the AI Agent. SYSTEM for a default AI Agent created by Q in Connect or CUSTOMER for an AI Agent created by calling AI Agent creation APIs. (SYSTEM, CUSTOMER)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the AI Agent. (CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_IN_PROGRESS, DELETE_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the AI Agent. (MANUAL_SEARCH, ANSWER_RECOMMENDATION, SELF_SERVICE, EMAIL_RESPONSE, EMAIL_OVERVIEW, EMAIL_GENERATIVE_ANSWER, ORCHESTRATION, NOTE_TAKING, CASE_SUMMARIZATION)</td>
</tr>
<tr>
    <td><CopyableCode code="visibility_status" /></td>
    <td><code>string</code></td>
    <td>The visibility status of the AI Agent. (SAVED, PUBLISHED)</td>
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
    <td><a href="#get_ai_agent"><CopyableCode code="get_ai_agent" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-ai_agent_id"><code>ai_agent_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Amazon Q in Connect AI Agent.</td>
</tr>
<tr>
    <td><a href="#list_ai_agents"><CopyableCode code="list_ai_agents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-origin"><code>origin</code></a></td>
    <td>Lists AI Agents.</td>
</tr>
<tr>
    <td><a href="#create_ai_agent"><CopyableCode code="create_ai_agent" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-configuration"><code>configuration</code></a>, <a href="#parameter-visibilityStatus"><code>visibilityStatus</code></a></td>
    <td></td>
    <td>Creates an Amazon Q in Connect AI Agent.</td>
</tr>
<tr>
    <td><a href="#update_ai_agent"><CopyableCode code="update_ai_agent" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-ai_agent_id"><code>ai_agent_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-visibilityStatus"><code>visibilityStatus</code></a></td>
    <td></td>
    <td>Updates an AI Agent.</td>
</tr>
<tr>
    <td><a href="#update_assistant_ai_agent"><CopyableCode code="update_assistant_ai_agent" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-aiAgentType"><code>aiAgentType</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Updates the AI Agent that is set for use by default on an Amazon Q in Connect Assistant.</td>
</tr>
<tr>
    <td><a href="#remove_assistant_ai_agent"><CopyableCode code="remove_assistant_ai_agent" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-aiAgentType"><code>aiAgentType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-orchestratorUseCase"><code>orchestratorUseCase</code></a></td>
    <td>Removes the AI Agent that is set for use by default on an Amazon Q in Connect Assistant.</td>
</tr>
<tr>
    <td><a href="#delete_ai_agent"><CopyableCode code="delete_ai_agent" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-ai_agent_id"><code>ai_agent_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Q in Connect AI Agent.</td>
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
<tr id="parameter-aiAgentType">
    <td><CopyableCode code="aiAgentType" /></td>
    <td><code>string</code></td>
    <td>The type of the AI Agent being removed for use by default from the Amazon Q in Connect Assistant.</td>
</tr>
<tr id="parameter-ai_agent_id">
    <td><CopyableCode code="ai_agent_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect AI Agent. Can be either the ID or the ARN. URLs cannot contain the ARN.</td>
</tr>
<tr id="parameter-assistant_id">
    <td><CopyableCode code="assistant_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-orchestratorUseCase">
    <td><CopyableCode code="orchestratorUseCase" /></td>
    <td><code>string</code></td>
    <td>The orchestrator use case for the AI Agent being removed.</td>
</tr>
<tr id="parameter-origin">
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>The origin of the AI Agents to be listed. SYSTEM for a default AI Agent created by Q in Connect or CUSTOMER for an AI Agent created by calling AI Agent creation APIs.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ai_agent"
    values={[
        { label: 'get_ai_agent', value: 'get_ai_agent' },
        { label: 'list_ai_agents', value: 'list_ai_agents' }
    ]}
>
<TabItem value="get_ai_agent">

Gets an Amazon Q in Connect AI Agent.

```sql
SELECT
ai_agent,
version_number
FROM aws.qconnect.ai_agents
WHERE assistant_id = '{{ assistant_id }}' -- required
AND ai_agent_id = '{{ ai_agent_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ai_agents">

Lists AI Agents.

```sql
SELECT
name,
ai_agent_arn,
ai_agent_id,
assistant_arn,
assistant_id,
configuration,
description,
modified_time,
origin,
status,
tags,
type_,
visibility_status
FROM aws.qconnect.ai_agents
WHERE assistant_id = '{{ assistant_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND origin = '{{ origin }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ai_agent"
    values={[
        { label: 'create_ai_agent', value: 'create_ai_agent' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ai_agent">

Creates an Amazon Q in Connect AI Agent.

```sql
INSERT INTO aws.qconnect.ai_agents (
clientToken,
name,
type,
configuration,
visibilityStatus,
tags,
description,
assistant_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ name }}' /* required */,
'{{ type }}' /* required */,
'{{ configuration }}' /* required */,
'{{ visibilityStatus }}' /* required */,
'{{ tags }}',
'{{ description }}',
'{{ assistant_id }}',
'{{ region }}'
RETURNING
ai_agent
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ai_agents
  props:
    - name: assistant_id
      value: "{{ assistant_id }}"
      description: Required parameter for the ai_agents resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ai_agents resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: name
      value: "{{ name }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['MANUAL_SEARCH', 'ANSWER_RECOMMENDATION', 'SELF_SERVICE', 'EMAIL_RESPONSE', 'EMAIL_OVERVIEW', 'EMAIL_GENERATIVE_ANSWER', 'ORCHESTRATION', 'NOTE_TAKING', 'CASE_SUMMARIZATION']
    - name: configuration
      description: |
        A typed union that specifies the configuration based on the type of AI Agent.
      value:
        manualSearchAIAgentConfiguration:
          answerGenerationAIPromptId: "{{ answerGenerationAIPromptId }}"
          answerGenerationAIGuardrailId: "{{ answerGenerationAIGuardrailId }}"
          associationConfigurations:
            - associationId: "{{ associationId }}"
              associationType: "{{ associationType }}"
              associationConfigurationData:
                knowledgeBaseAssociationConfigurationData:
                  contentTagFilter: "{{ contentTagFilter }}"
                  maxResults: {{ maxResults }}
                  overrideKnowledgeBaseSearchType: "{{ overrideKnowledgeBaseSearchType }}"
          locale: "{{ locale }}"
        answerRecommendationAIAgentConfiguration:
          intentLabelingGenerationAIPromptId: "{{ intentLabelingGenerationAIPromptId }}"
          queryReformulationAIPromptId: "{{ queryReformulationAIPromptId }}"
          answerGenerationAIPromptId: "{{ answerGenerationAIPromptId }}"
          answerGenerationAIGuardrailId: "{{ answerGenerationAIGuardrailId }}"
          associationConfigurations:
            - associationId: "{{ associationId }}"
              associationType: "{{ associationType }}"
              associationConfigurationData:
                knowledgeBaseAssociationConfigurationData:
                  contentTagFilter: "{{ contentTagFilter }}"
                  maxResults: {{ maxResults }}
                  overrideKnowledgeBaseSearchType: "{{ overrideKnowledgeBaseSearchType }}"
          locale: "{{ locale }}"
          suggestedMessages:
            - "{{ suggestedMessages }}"
        selfServiceAIAgentConfiguration:
          selfServicePreProcessingAIPromptId: "{{ selfServicePreProcessingAIPromptId }}"
          selfServiceAnswerGenerationAIPromptId: "{{ selfServiceAnswerGenerationAIPromptId }}"
          selfServiceAIGuardrailId: "{{ selfServiceAIGuardrailId }}"
          associationConfigurations:
            - associationId: "{{ associationId }}"
              associationType: "{{ associationType }}"
              associationConfigurationData:
                knowledgeBaseAssociationConfigurationData:
                  contentTagFilter: "{{ contentTagFilter }}"
                  maxResults: {{ maxResults }}
                  overrideKnowledgeBaseSearchType: "{{ overrideKnowledgeBaseSearchType }}"
        emailResponseAIAgentConfiguration:
          emailResponseAIPromptId: "{{ emailResponseAIPromptId }}"
          emailQueryReformulationAIPromptId: "{{ emailQueryReformulationAIPromptId }}"
          locale: "{{ locale }}"
          associationConfigurations:
            - associationId: "{{ associationId }}"
              associationType: "{{ associationType }}"
              associationConfigurationData:
                knowledgeBaseAssociationConfigurationData:
                  contentTagFilter: "{{ contentTagFilter }}"
                  maxResults: {{ maxResults }}
                  overrideKnowledgeBaseSearchType: "{{ overrideKnowledgeBaseSearchType }}"
        emailOverviewAIAgentConfiguration:
          emailOverviewAIPromptId: "{{ emailOverviewAIPromptId }}"
          locale: "{{ locale }}"
        emailGenerativeAnswerAIAgentConfiguration:
          emailGenerativeAnswerAIPromptId: "{{ emailGenerativeAnswerAIPromptId }}"
          emailQueryReformulationAIPromptId: "{{ emailQueryReformulationAIPromptId }}"
          locale: "{{ locale }}"
          associationConfigurations:
            - associationId: "{{ associationId }}"
              associationType: "{{ associationType }}"
              associationConfigurationData:
                knowledgeBaseAssociationConfigurationData:
                  contentTagFilter: "{{ contentTagFilter }}"
                  maxResults: {{ maxResults }}
                  overrideKnowledgeBaseSearchType: "{{ overrideKnowledgeBaseSearchType }}"
        orchestrationAIAgentConfiguration:
          orchestrationAIPromptId: "{{ orchestrationAIPromptId }}"
          orchestrationAIGuardrailId: "{{ orchestrationAIGuardrailId }}"
          toolConfigurations:
            - toolName: "{{ toolName }}"
              toolType: "{{ toolType }}"
              title_: "{{ title_ }}"
              toolId: "{{ toolId }}"
              description: "{{ description }}"
              instruction:
                instruction: "{{ instruction }}"
                examples:
                  - "{{ examples }}"
              overrideInputValues: "{{ overrideInputValues }}"
              outputFilters: "{{ outputFilters }}"
              inputSchema: "{{ inputSchema }}"
              outputSchema: "{{ outputSchema }}"
              annotations:
                title_: "{{ title_ }}"
                destructiveHint: {{ destructiveHint }}
              userInteractionConfiguration:
                isUserConfirmationRequired: {{ isUserConfirmationRequired }}
          connectInstanceArn: "{{ connectInstanceArn }}"
          locale: "{{ locale }}"
        noteTakingAIAgentConfiguration:
          noteTakingAIPromptId: "{{ noteTakingAIPromptId }}"
          noteTakingAIGuardrailId: "{{ noteTakingAIGuardrailId }}"
          locale: "{{ locale }}"
        caseSummarizationAIAgentConfiguration:
          caseSummarizationAIPromptId: "{{ caseSummarizationAIPromptId }}"
          caseSummarizationAIGuardrailId: "{{ caseSummarizationAIGuardrailId }}"
          locale: "{{ locale }}"
    - name: visibilityStatus
      value: "{{ visibilityStatus }}"
      valid_values: ['SAVED', 'PUBLISHED']
    - name: tags
      value: "{{ tags }}"
    - name: description
      value: "{{ description }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ai_agent"
    values={[
        { label: 'update_ai_agent', value: 'update_ai_agent' },
        { label: 'update_assistant_ai_agent', value: 'update_assistant_ai_agent' },
        { label: 'remove_assistant_ai_agent', value: 'remove_assistant_ai_agent' }
    ]}
>
<TabItem value="update_ai_agent">

Updates an AI Agent.

```sql
UPDATE aws.qconnect.ai_agents
SET 
clientToken = '{{ clientToken }}',
visibilityStatus = '{{ visibilityStatus }}',
configuration = '{{ configuration }}',
description = '{{ description }}'
WHERE 
assistant_id = '{{ assistant_id }}' --required
AND ai_agent_id = '{{ ai_agent_id }}' --required
AND region = '{{ region }}' --required
AND visibilityStatus = '{{ visibilityStatus }}' --required
RETURNING
ai_agent;
```
</TabItem>
<TabItem value="update_assistant_ai_agent">

Updates the AI Agent that is set for use by default on an Amazon Q in Connect Assistant.

```sql
UPDATE aws.qconnect.ai_agents
SET 
aiAgentType = '{{ aiAgentType }}',
configuration = '{{ configuration }}',
orchestratorUseCase = '{{ orchestratorUseCase }}'
WHERE 
assistant_id = '{{ assistant_id }}' --required
AND region = '{{ region }}' --required
AND aiAgentType = '{{ aiAgentType }}' --required
AND configuration = '{{ configuration }}' --required
RETURNING
assistant;
```
</TabItem>
<TabItem value="remove_assistant_ai_agent">

Removes the AI Agent that is set for use by default on an Amazon Q in Connect Assistant.

```sql
UPDATE aws.qconnect.ai_agents
SET 
-- No updatable properties
WHERE 
assistant_id = '{{ assistant_id }}' --required
AND aiAgentType = '{{ aiAgentType }}' --required
AND region = '{{ region }}' --required
AND orchestratorUseCase = '{{ orchestratorUseCase}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ai_agent"
    values={[
        { label: 'delete_ai_agent', value: 'delete_ai_agent' }
    ]}
>
<TabItem value="delete_ai_agent">

Deletes an Amazon Q in Connect AI Agent.

```sql
DELETE FROM aws.qconnect.ai_agents
WHERE assistant_id = '{{ assistant_id }}' --required
AND ai_agent_id = '{{ ai_agent_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
