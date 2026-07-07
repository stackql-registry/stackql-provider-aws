--- 
title: assistants
hide_title: false
hide_table_of_contents: false
keywords:
  - assistants
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

Creates, updates, deletes, gets or lists an <code>assistants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assistants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.assistants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_assistant"
    values={[
        { label: 'get_assistant', value: 'get_assistant' },
        { label: 'list_assistants', value: 'list_assistants' }
    ]}
>
<TabItem value="get_assistant">

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
    <td>The name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aiAgentConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that is set on the Amazon Q in Connect Assistant.</td>
</tr>
<tr>
    <td><CopyableCode code="assistantArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assistantId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect assistant. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilityConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration information for the Amazon Q in Connect assistant capability.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="integrationConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration information for the Amazon Q in Connect assistant integration.</td>
</tr>
<tr>
    <td><CopyableCode code="orchestratorConfigurationList" /></td>
    <td><code>array</code></td>
    <td>The list of orchestrator configurations for the assistant.</td>
</tr>
<tr>
    <td><CopyableCode code="serverSideEncryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration information for the customer managed key used for encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the assistant. (CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_IN_PROGRESS, DELETE_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of assistant. (AGENT)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_assistants">

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
    <td>The name of the assistant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aiAgentConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that is set on the Amazon Q in Connect Assistant.</td>
</tr>
<tr>
    <td><CopyableCode code="assistantArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assistantId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect assistant. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilityConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration information for the Amazon Q in Connect assistant capability.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the assistant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="integrationConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration information for the Amazon Q in Connect assistant integration.</td>
</tr>
<tr>
    <td><CopyableCode code="orchestratorConfigurationList" /></td>
    <td><code>array</code></td>
    <td>The list of orchestrator configurations for the assistant.</td>
</tr>
<tr>
    <td><CopyableCode code="serverSideEncryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration information for the customer managed key used for encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the assistant. (CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_IN_PROGRESS, DELETE_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the assistant. (AGENT)</td>
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
    <td><a href="#get_assistant"><CopyableCode code="get_assistant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an assistant.</td>
</tr>
<tr>
    <td><a href="#list_assistants"><CopyableCode code="list_assistants" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists information about assistants.</td>
</tr>
<tr>
    <td><a href="#create_assistant"><CopyableCode code="create_assistant" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Creates an Amazon Q in Connect assistant.</td>
</tr>
<tr>
    <td><a href="#put_feedback"><CopyableCode code="put_feedback" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetId"><code>targetId</code></a>, <a href="#parameter-targetType"><code>targetType</code></a>, <a href="#parameter-contentFeedback"><code>contentFeedback</code></a></td>
    <td></td>
    <td>Provides feedback against the specified assistant for the specified target. This API only supports generative targets.</td>
</tr>
<tr>
    <td><a href="#delete_assistant"><CopyableCode code="delete_assistant" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an assistant.</td>
</tr>
<tr>
    <td><a href="#query_assistant"><CopyableCode code="query_assistant" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024, you will need to create a new Assistant in the Amazon Connect console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications. Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use GetRecommendations.</td>
</tr>
<tr>
    <td><a href="#retrieve"><CopyableCode code="retrieve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-retrievalConfiguration"><code>retrievalConfiguration</code></a>, <a href="#parameter-retrievalQuery"><code>retrievalQuery</code></a></td>
    <td></td>
    <td>Retrieves content from knowledge sources based on a query.</td>
</tr>
<tr>
    <td><a href="#send_message"><CopyableCode code="send_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-message"><code>message</code></a></td>
    <td></td>
    <td>Submits a message to the Amazon Q in Connect session.</td>
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
<tr id="parameter-assistant_id">
    <td><CopyableCode code="assistant_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect assistant.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect session.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_assistant"
    values={[
        { label: 'get_assistant', value: 'get_assistant' },
        { label: 'list_assistants', value: 'list_assistants' }
    ]}
>
<TabItem value="get_assistant">

Retrieves information about an assistant.

```sql
SELECT
name,
aiAgentConfiguration,
assistantArn,
assistantId,
capabilityConfiguration,
description,
integrationConfiguration,
orchestratorConfigurationList,
serverSideEncryptionConfiguration,
status,
tags,
type_
FROM aws.qconnect.assistants
WHERE assistant_id = '{{ assistant_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_assistants">

Lists information about assistants.

```sql
SELECT
name,
aiAgentConfiguration,
assistantArn,
assistantId,
capabilityConfiguration,
description,
integrationConfiguration,
orchestratorConfigurationList,
serverSideEncryptionConfiguration,
status,
tags,
type_
FROM aws.qconnect.assistants
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_assistant"
    values={[
        { label: 'create_assistant', value: 'create_assistant' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_assistant">

Creates an Amazon Q in Connect assistant.

```sql
INSERT INTO aws.qconnect.assistants (
clientToken,
name,
type,
description,
tags,
serverSideEncryptionConfiguration,
region
)
SELECT 
'{{ clientToken }}',
'{{ name }}' /* required */,
'{{ type }}' /* required */,
'{{ description }}',
'{{ tags }}',
'{{ serverSideEncryptionConfiguration }}',
'{{ region }}'
RETURNING
assistant
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assistants
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the assistants resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: name
      value: "{{ name }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['AGENT']
    - name: description
      value: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
    - name: serverSideEncryptionConfiguration
      description: |
        The configuration information for the customer managed key used for encryption.
      value:
        kmsKeyId: "{{ kmsKeyId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_feedback"
    values={[
        { label: 'put_feedback', value: 'put_feedback' }
    ]}
>
<TabItem value="put_feedback">

Provides feedback against the specified assistant for the specified target. This API only supports generative targets.

```sql
REPLACE aws.qconnect.assistants
SET 
targetId = '{{ targetId }}',
targetType = '{{ targetType }}',
contentFeedback = '{{ contentFeedback }}'
WHERE 
assistant_id = '{{ assistant_id }}' --required
AND region = '{{ region }}' --required
AND targetId = '{{ targetId }}' --required
AND targetType = '{{ targetType }}' --required
AND contentFeedback = '{{ contentFeedback }}' --required
RETURNING
assistantArn,
assistantId,
contentFeedback,
targetId,
targetType;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_assistant"
    values={[
        { label: 'delete_assistant', value: 'delete_assistant' }
    ]}
>
<TabItem value="delete_assistant">

Deletes an assistant.

```sql
DELETE FROM aws.qconnect.assistants
WHERE assistant_id = '{{ assistant_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="query_assistant"
    values={[
        { label: 'query_assistant', value: 'query_assistant' },
        { label: 'retrieve', value: 'retrieve' },
        { label: 'send_message', value: 'send_message' }
    ]}
>
<TabItem value="query_assistant">

This API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024, you will need to create a new Assistant in the Amazon Connect console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications. Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use GetRecommendations.

```sql
EXEC aws.qconnect.assistants.query_assistant 
@assistant_id='{{ assistant_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"queryText": "{{ queryText }}", 
"nextToken": "{{ nextToken }}", 
"maxResults": {{ maxResults }}, 
"sessionId": "{{ sessionId }}", 
"queryCondition": "{{ queryCondition }}", 
"queryInputData": "{{ queryInputData }}", 
"overrideKnowledgeBaseSearchType": "{{ overrideKnowledgeBaseSearchType }}"
}'
;
```
</TabItem>
<TabItem value="retrieve">

Retrieves content from knowledge sources based on a query.

```sql
EXEC aws.qconnect.assistants.retrieve 
@assistant_id='{{ assistant_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"retrievalConfiguration": "{{ retrievalConfiguration }}", 
"retrievalQuery": "{{ retrievalQuery }}"
}'
;
```
</TabItem>
<TabItem value="send_message">

Submits a message to the Amazon Q in Connect session.

```sql
EXEC aws.qconnect.assistants.send_message 
@assistant_id='{{ assistant_id }}' --required, 
@session_id='{{ session_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"type": "{{ type }}", 
"message": "{{ message }}", 
"aiAgentId": "{{ aiAgentId }}", 
"conversationContext": "{{ conversationContext }}", 
"configuration": "{{ configuration }}", 
"clientToken": "{{ clientToken }}", 
"orchestratorUseCase": "{{ orchestratorUseCase }}", 
"metadata": "{{ metadata }}", 
"originRequestId": "{{ originRequestId }}"
}'
;
```
</TabItem>
</Tabs>
