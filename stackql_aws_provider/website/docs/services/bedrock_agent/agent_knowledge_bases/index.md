--- 
title: agent_knowledge_bases
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_knowledge_bases
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

Creates, updates, deletes, gets or lists an <code>agent_knowledge_bases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_knowledge_bases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent.agent_knowledge_bases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agent_knowledge_base"
    values={[
        { label: 'get_agent_knowledge_base', value: 'get_agent_knowledge_base' },
        { label: 'list_agent_knowledge_bases', value: 'list_agent_knowledge_bases' }
    ]}
>
<TabItem value="get_agent_knowledge_base">

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
    <td><CopyableCode code="agent_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent with which the knowledge base is associated. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_version" /></td>
    <td><code>string</code></td>
    <td>The version of the agent with which the knowledge base is associated. (pattern: &lt;code&gt;(DRAFT|&#91;0-9&#93;&#123;0,4&#125;&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the association between the agent and the knowledge base was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the association between the agent and the knowledge base.</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the association between the agent and the knowledge base. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_state" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to use the knowledge base or not when sending an InvokeAgent request. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the association between the agent and the knowledge base was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agent_knowledge_bases">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the knowledge base associated with an agent.</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the knowledge base associated with an agent. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_state" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the agent uses the knowledge base or not when sending an InvokeAgent request. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the knowledge base associated with an agent was last updated.</td>
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
    <td><a href="#get_agent_knowledge_base"><CopyableCode code="get_agent_knowledge_base" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a knowledge base associated with an agent.</td>
</tr>
<tr>
    <td><a href="#list_agent_knowledge_bases"><CopyableCode code="list_agent_knowledge_bases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists knowledge bases associated with an agent and information about each one.</td>
</tr>
<tr>
    <td><a href="#associate_agent_knowledge_base"><CopyableCode code="associate_agent_knowledge_base" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-knowledgeBaseId"><code>knowledgeBaseId</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td></td>
    <td>Associates a knowledge base with an agent. If a knowledge base is associated and its indexState is set to Enabled, the agent queries the knowledge base for information to augment its response to the user.</td>
</tr>
<tr>
    <td><a href="#disassociate_agent_knowledge_base"><CopyableCode code="disassociate_agent_knowledge_base" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a knowledge base from an agent.</td>
</tr>
<tr>
    <td><a href="#update_agent_knowledge_base"><CopyableCode code="update_agent_knowledge_base" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration for a knowledge base that has been associated with an agent.</td>
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
    <td>The unique identifier of the agent associated with the knowledge base that you want to update.</td>
</tr>
<tr id="parameter-agent_version">
    <td><CopyableCode code="agent_version" /></td>
    <td><code>string</code></td>
    <td>The version of the agent associated with the knowledge base that you want to update.</td>
</tr>
<tr id="parameter-knowledge_base_id">
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the knowledge base that has been associated with an agent.</td>
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
    defaultValue="get_agent_knowledge_base"
    values={[
        { label: 'get_agent_knowledge_base', value: 'get_agent_knowledge_base' },
        { label: 'list_agent_knowledge_bases', value: 'list_agent_knowledge_bases' }
    ]}
>
<TabItem value="get_agent_knowledge_base">

Gets information about a knowledge base associated with an agent.

```sql
SELECT
agent_id,
agent_version,
created_at,
description,
knowledge_base_id,
knowledge_base_state,
updated_at
FROM aws.bedrock_agent.agent_knowledge_bases
WHERE agent_id = '{{ agent_id }}' -- required
AND agent_version = '{{ agent_version }}' -- required
AND knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agent_knowledge_bases">

Lists knowledge bases associated with an agent and information about each one.

```sql
SELECT
description,
knowledge_base_id,
knowledge_base_state,
updated_at
FROM aws.bedrock_agent.agent_knowledge_bases
WHERE agent_id = '{{ agent_id }}' -- required
AND agent_version = '{{ agent_version }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_agent_knowledge_base"
    values={[
        { label: 'associate_agent_knowledge_base', value: 'associate_agent_knowledge_base' },
        { label: 'disassociate_agent_knowledge_base', value: 'disassociate_agent_knowledge_base' }
    ]}
>
<TabItem value="associate_agent_knowledge_base">

Associates a knowledge base with an agent. If a knowledge base is associated and its indexState is set to Enabled, the agent queries the knowledge base for information to augment its response to the user.

```sql
UPDATE aws.bedrock_agent.agent_knowledge_bases
SET 
knowledgeBaseId = '{{ knowledgeBaseId }}',
description = '{{ description }}',
knowledgeBaseState = '{{ knowledgeBaseState }}'
WHERE 
agent_id = '{{ agent_id }}' --required
AND agent_version = '{{ agent_version }}' --required
AND region = '{{ region }}' --required
AND knowledgeBaseId = '{{ knowledgeBaseId }}' --required
AND description = '{{ description }}' --required
RETURNING
agent_knowledge_base;
```
</TabItem>
<TabItem value="disassociate_agent_knowledge_base">

Disassociates a knowledge base from an agent.

```sql
UPDATE aws.bedrock_agent.agent_knowledge_bases
SET 
-- No updatable properties
WHERE 
agent_id = '{{ agent_id }}' --required
AND agent_version = '{{ agent_version }}' --required
AND knowledge_base_id = '{{ knowledge_base_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_agent_knowledge_base"
    values={[
        { label: 'update_agent_knowledge_base', value: 'update_agent_knowledge_base' }
    ]}
>
<TabItem value="update_agent_knowledge_base">

Updates the configuration for a knowledge base that has been associated with an agent.

```sql
EXEC aws.bedrock_agent.agent_knowledge_bases.update_agent_knowledge_base 
@agent_id='{{ agent_id }}' --required, 
@agent_version='{{ agent_version }}' --required, 
@knowledge_base_id='{{ knowledge_base_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"description": "{{ description }}", 
"knowledgeBaseState": "{{ knowledgeBaseState }}"
}'
;
```
</TabItem>
</Tabs>
