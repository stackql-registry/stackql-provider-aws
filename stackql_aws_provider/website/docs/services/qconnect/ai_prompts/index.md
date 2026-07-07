--- 
title: ai_prompts
hide_title: false
hide_table_of_contents: false
keywords:
  - ai_prompts
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

Creates, updates, deletes, gets or lists an <code>ai_prompts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ai_prompts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.ai_prompts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ai_prompt"
    values={[
        { label: 'get_ai_prompt', value: 'get_ai_prompt' },
        { label: 'list_ai_prompts', value: 'list_ai_prompts' }
    ]}
>
<TabItem value="get_ai_prompt">

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
    <td><CopyableCode code="aiPrompt" /></td>
    <td><code>object</code></td>
    <td>The data of the AI Prompt.</td>
</tr>
<tr>
    <td><CopyableCode code="versionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the AI Prompt version (returned if an AI Prompt version was specified via use of a qualifier for the aiPromptId on the request).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ai_prompts">

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
    <td>The name of the AI Prompt. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aiPromptArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the AI Prompt. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aiPromptId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect AI prompt. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="apiFormat" /></td>
    <td><code>string</code></td>
    <td>The API format used for this AI Prompt. (ANTHROPIC_CLAUDE_MESSAGES, ANTHROPIC_CLAUDE_TEXT_COMPLETIONS, MESSAGES, TEXT_COMPLETIONS)</td>
</tr>
<tr>
    <td><CopyableCode code="assistantArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assistantId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the AI Prompt. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modelId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the model used for this AI Prompt. Model Ids supported are: anthropic.claude-3-haiku-20240307-v1:0.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the AI Prompt was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>The origin of the AI Prompt. SYSTEM for a default AI Prompt created by Q in Connect or CUSTOMER for an AI Prompt created by calling AI Prompt creation APIs. (SYSTEM, CUSTOMER)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the AI Prompt. (CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_IN_PROGRESS, DELETE_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="templateType" /></td>
    <td><code>string</code></td>
    <td>The type of the prompt template for this AI Prompt. (TEXT)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of this AI Prompt. (ANSWER_GENERATION, INTENT_LABELING_GENERATION, QUERY_REFORMULATION, SELF_SERVICE_PRE_PROCESSING, SELF_SERVICE_ANSWER_GENERATION, EMAIL_RESPONSE, EMAIL_OVERVIEW, EMAIL_GENERATIVE_ANSWER, EMAIL_QUERY_REFORMULATION, ORCHESTRATION, NOTE_TAKING, CASE_SUMMARIZATION)</td>
</tr>
<tr>
    <td><CopyableCode code="visibilityStatus" /></td>
    <td><code>string</code></td>
    <td>The visibility status of the AI Prompt. (SAVED, PUBLISHED)</td>
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
    <td><a href="#get_ai_prompt"><CopyableCode code="get_ai_prompt" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-ai_prompt_id"><code>ai_prompt_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets and Amazon Q in Connect AI Prompt.</td>
</tr>
<tr>
    <td><a href="#list_ai_prompts"><CopyableCode code="list_ai_prompts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-origin"><code>origin</code></a></td>
    <td>Lists the AI Prompts available on the Amazon Q in Connect assistant.</td>
</tr>
<tr>
    <td><a href="#create_ai_prompt"><CopyableCode code="create_ai_prompt" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-templateConfiguration"><code>templateConfiguration</code></a>, <a href="#parameter-visibilityStatus"><code>visibilityStatus</code></a>, <a href="#parameter-templateType"><code>templateType</code></a>, <a href="#parameter-modelId"><code>modelId</code></a>, <a href="#parameter-apiFormat"><code>apiFormat</code></a></td>
    <td></td>
    <td>Creates an Amazon Q in Connect AI Prompt.</td>
</tr>
<tr>
    <td><a href="#update_ai_prompt"><CopyableCode code="update_ai_prompt" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-ai_prompt_id"><code>ai_prompt_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-visibilityStatus"><code>visibilityStatus</code></a></td>
    <td></td>
    <td>Updates an AI Prompt.</td>
</tr>
<tr>
    <td><a href="#delete_ai_prompt"><CopyableCode code="delete_ai_prompt" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-ai_prompt_id"><code>ai_prompt_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Q in Connect AI Prompt.</td>
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
<tr id="parameter-ai_prompt_id">
    <td><CopyableCode code="ai_prompt_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect AI prompt. Can be either the ID or the ARN. URLs cannot contain the ARN.</td>
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
<tr id="parameter-origin">
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>The origin of the AI Prompts to be listed. SYSTEM for a default AI Agent created by Q in Connect or CUSTOMER for an AI Agent created by calling AI Agent creation APIs.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ai_prompt"
    values={[
        { label: 'get_ai_prompt', value: 'get_ai_prompt' },
        { label: 'list_ai_prompts', value: 'list_ai_prompts' }
    ]}
>
<TabItem value="get_ai_prompt">

Gets and Amazon Q in Connect AI Prompt.

```sql
SELECT
aiPrompt,
versionNumber
FROM aws.qconnect.ai_prompts
WHERE assistant_id = '{{ assistant_id }}' -- required
AND ai_prompt_id = '{{ ai_prompt_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ai_prompts">

Lists the AI Prompts available on the Amazon Q in Connect assistant.

```sql
SELECT
name,
aiPromptArn,
aiPromptId,
apiFormat,
assistantArn,
assistantId,
description,
modelId,
modifiedTime,
origin,
status,
tags,
templateType,
type_,
visibilityStatus
FROM aws.qconnect.ai_prompts
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
    defaultValue="create_ai_prompt"
    values={[
        { label: 'create_ai_prompt', value: 'create_ai_prompt' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ai_prompt">

Creates an Amazon Q in Connect AI Prompt.

```sql
INSERT INTO aws.qconnect.ai_prompts (
clientToken,
name,
type,
templateConfiguration,
visibilityStatus,
templateType,
modelId,
apiFormat,
tags,
description,
inferenceConfiguration,
assistant_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ name }}' /* required */,
'{{ type }}' /* required */,
'{{ templateConfiguration }}' /* required */,
'{{ visibilityStatus }}' /* required */,
'{{ templateType }}' /* required */,
'{{ modelId }}' /* required */,
'{{ apiFormat }}' /* required */,
'{{ tags }}',
'{{ description }}',
'{{ inferenceConfiguration }}',
'{{ assistant_id }}',
'{{ region }}'
RETURNING
aiPrompt
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ai_prompts
  props:
    - name: assistant_id
      value: "{{ assistant_id }}"
      description: Required parameter for the ai_prompts resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ai_prompts resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: name
      value: "{{ name }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['ANSWER_GENERATION', 'INTENT_LABELING_GENERATION', 'QUERY_REFORMULATION', 'SELF_SERVICE_PRE_PROCESSING', 'SELF_SERVICE_ANSWER_GENERATION', 'EMAIL_RESPONSE', 'EMAIL_OVERVIEW', 'EMAIL_GENERATIVE_ANSWER', 'EMAIL_QUERY_REFORMULATION', 'ORCHESTRATION', 'NOTE_TAKING', 'CASE_SUMMARIZATION']
    - name: templateConfiguration
      description: |
        A typed union that specifies the configuration for a prompt template based on its type.
      value:
        textFullAIPromptEditTemplateConfiguration:
          text: "{{ text }}"
    - name: visibilityStatus
      value: "{{ visibilityStatus }}"
      valid_values: ['SAVED', 'PUBLISHED']
    - name: templateType
      value: "{{ templateType }}"
      valid_values: ['TEXT']
    - name: modelId
      value: "{{ modelId }}"
    - name: apiFormat
      value: "{{ apiFormat }}"
      valid_values: ['ANTHROPIC_CLAUDE_MESSAGES', 'ANTHROPIC_CLAUDE_TEXT_COMPLETIONS', 'MESSAGES', 'TEXT_COMPLETIONS']
    - name: tags
      value: "{{ tags }}"
    - name: description
      value: "{{ description }}"
    - name: inferenceConfiguration
      description: |
        The configuration for inference parameters when using AI Prompts.
      value:
        temperature: {{ temperature }}
        topP: {{ topP }}
        topK: {{ topK }}
        maxTokensToSample: {{ maxTokensToSample }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ai_prompt"
    values={[
        { label: 'update_ai_prompt', value: 'update_ai_prompt' }
    ]}
>
<TabItem value="update_ai_prompt">

Updates an AI Prompt.

```sql
UPDATE aws.qconnect.ai_prompts
SET 
clientToken = '{{ clientToken }}',
visibilityStatus = '{{ visibilityStatus }}',
templateConfiguration = '{{ templateConfiguration }}',
description = '{{ description }}',
modelId = '{{ modelId }}',
inferenceConfiguration = '{{ inferenceConfiguration }}'
WHERE 
assistant_id = '{{ assistant_id }}' --required
AND ai_prompt_id = '{{ ai_prompt_id }}' --required
AND region = '{{ region }}' --required
AND visibilityStatus = '{{ visibilityStatus }}' --required
RETURNING
aiPrompt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ai_prompt"
    values={[
        { label: 'delete_ai_prompt', value: 'delete_ai_prompt' }
    ]}
>
<TabItem value="delete_ai_prompt">

Deletes an Amazon Q in Connect AI Prompt.

```sql
DELETE FROM aws.qconnect.ai_prompts
WHERE assistant_id = '{{ assistant_id }}' --required
AND ai_prompt_id = '{{ ai_prompt_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
