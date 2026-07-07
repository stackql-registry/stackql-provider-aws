--- 
title: agent_collaborators
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_collaborators
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

Creates, updates, deletes, gets or lists an <code>agent_collaborators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_collaborators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent.agent_collaborators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agent_collaborator"
    values={[
        { label: 'get_agent_collaborator', value: 'get_agent_collaborator' },
        { label: 'list_agent_collaborators', value: 'list_agent_collaborators' }
    ]}
>
<TabItem value="get_agent_collaborator">

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
    <td><CopyableCode code="agentDescriptor" /></td>
    <td><code>object</code></td>
    <td>An agent descriptor.</td>
</tr>
<tr>
    <td><CopyableCode code="agentId" /></td>
    <td><code>string</code></td>
    <td>The collaborator's agent ID. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentVersion" /></td>
    <td><code>string</code></td>
    <td>The collaborator's agent version. (pattern: &lt;code&gt;(DRAFT|&#91;0-9&#93;&#123;0,4&#125;&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>The collaborator's client token. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,256&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationInstruction" /></td>
    <td><code>string</code></td>
    <td>The collaborator's instructions.</td>
</tr>
<tr>
    <td><CopyableCode code="collaboratorId" /></td>
    <td><code>string</code></td>
    <td>The collaborator's collaborator ID. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboratorName" /></td>
    <td><code>string</code></td>
    <td>The collaborator's collaborator name. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the collaborator was created.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the collaborator was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="relayConversationHistory" /></td>
    <td><code>string</code></td>
    <td>The collaborator's relay conversation history. (TO_COLLABORATOR, DISABLED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agent_collaborators">

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
    <td><CopyableCode code="agentDescriptor" /></td>
    <td><code>object</code></td>
    <td>An agent descriptor.</td>
</tr>
<tr>
    <td><CopyableCode code="agentId" /></td>
    <td><code>string</code></td>
    <td>The collaborator's agent ID. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentVersion" /></td>
    <td><code>string</code></td>
    <td>The collaborator's agent version. (pattern: &lt;code&gt;(DRAFT|&#91;0-9&#93;&#123;0,4&#125;&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationInstruction" /></td>
    <td><code>string</code></td>
    <td>The collaborator's collaboration instruction.</td>
</tr>
<tr>
    <td><CopyableCode code="collaboratorId" /></td>
    <td><code>string</code></td>
    <td>The collaborator's ID. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboratorName" /></td>
    <td><code>string</code></td>
    <td>The collaborator's name. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the collaborator was created.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the collaborator was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="relayConversationHistory" /></td>
    <td><code>string</code></td>
    <td>The collaborator's relay conversation history. (TO_COLLABORATOR, DISABLED)</td>
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
    <td><a href="#get_agent_collaborator"><CopyableCode code="get_agent_collaborator" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-collaborator_id"><code>collaborator_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an agent's collaborator.</td>
</tr>
<tr>
    <td><a href="#list_agent_collaborators"><CopyableCode code="list_agent_collaborators" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve a list of an agent's collaborators.</td>
</tr>
<tr>
    <td><a href="#update_agent_collaborator"><CopyableCode code="update_agent_collaborator" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-collaborator_id"><code>collaborator_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentDescriptor"><code>agentDescriptor</code></a>, <a href="#parameter-collaboratorName"><code>collaboratorName</code></a>, <a href="#parameter-collaborationInstruction"><code>collaborationInstruction</code></a></td>
    <td></td>
    <td>Updates an agent's collaborator.</td>
</tr>
<tr>
    <td><a href="#associate_agent_collaborator"><CopyableCode code="associate_agent_collaborator" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentDescriptor"><code>agentDescriptor</code></a>, <a href="#parameter-collaboratorName"><code>collaboratorName</code></a>, <a href="#parameter-collaborationInstruction"><code>collaborationInstruction</code></a></td>
    <td></td>
    <td>Makes an agent a collaborator for another agent.</td>
</tr>
<tr>
    <td><a href="#disassociate_agent_collaborator"><CopyableCode code="disassociate_agent_collaborator" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-collaborator_id"><code>collaborator_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates an agent collaborator.</td>
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
    <td>An agent ID.</td>
</tr>
<tr id="parameter-agent_version">
    <td><CopyableCode code="agent_version" /></td>
    <td><code>string</code></td>
    <td>The agent's version.</td>
</tr>
<tr id="parameter-collaborator_id">
    <td><CopyableCode code="collaborator_id" /></td>
    <td><code>string</code></td>
    <td>The collaborator's ID.</td>
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
    defaultValue="get_agent_collaborator"
    values={[
        { label: 'get_agent_collaborator', value: 'get_agent_collaborator' },
        { label: 'list_agent_collaborators', value: 'list_agent_collaborators' }
    ]}
>
<TabItem value="get_agent_collaborator">

Retrieves information about an agent's collaborator.

```sql
SELECT
agentDescriptor,
agentId,
agentVersion,
clientToken,
collaborationInstruction,
collaboratorId,
collaboratorName,
createdAt,
lastUpdatedAt,
relayConversationHistory
FROM aws.bedrock_agent.agent_collaborators
WHERE agent_id = '{{ agent_id }}' -- required
AND agent_version = '{{ agent_version }}' -- required
AND collaborator_id = '{{ collaborator_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agent_collaborators">

Retrieve a list of an agent's collaborators.

```sql
SELECT
agentDescriptor,
agentId,
agentVersion,
collaborationInstruction,
collaboratorId,
collaboratorName,
createdAt,
lastUpdatedAt,
relayConversationHistory
FROM aws.bedrock_agent.agent_collaborators
WHERE agent_id = '{{ agent_id }}' -- required
AND agent_version = '{{ agent_version }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_agent_collaborator"
    values={[
        { label: 'update_agent_collaborator', value: 'update_agent_collaborator' },
        { label: 'associate_agent_collaborator', value: 'associate_agent_collaborator' },
        { label: 'disassociate_agent_collaborator', value: 'disassociate_agent_collaborator' }
    ]}
>
<TabItem value="update_agent_collaborator">

Updates an agent's collaborator.

```sql
UPDATE aws.bedrock_agent.agent_collaborators
SET 
agentDescriptor = '{{ agentDescriptor }}',
collaboratorName = '{{ collaboratorName }}',
collaborationInstruction = '{{ collaborationInstruction }}',
relayConversationHistory = '{{ relayConversationHistory }}'
WHERE 
agent_id = '{{ agent_id }}' --required
AND agent_version = '{{ agent_version }}' --required
AND collaborator_id = '{{ collaborator_id }}' --required
AND region = '{{ region }}' --required
AND agentDescriptor = '{{ agentDescriptor }}' --required
AND collaboratorName = '{{ collaboratorName }}' --required
AND collaborationInstruction = '{{ collaborationInstruction }}' --required
RETURNING
agentCollaborator;
```
</TabItem>
<TabItem value="associate_agent_collaborator">

Makes an agent a collaborator for another agent.

```sql
UPDATE aws.bedrock_agent.agent_collaborators
SET 
agentDescriptor = '{{ agentDescriptor }}',
collaboratorName = '{{ collaboratorName }}',
collaborationInstruction = '{{ collaborationInstruction }}',
relayConversationHistory = '{{ relayConversationHistory }}',
clientToken = '{{ clientToken }}'
WHERE 
agent_id = '{{ agent_id }}' --required
AND agent_version = '{{ agent_version }}' --required
AND region = '{{ region }}' --required
AND agentDescriptor = '{{ agentDescriptor }}' --required
AND collaboratorName = '{{ collaboratorName }}' --required
AND collaborationInstruction = '{{ collaborationInstruction }}' --required
RETURNING
agentCollaborator;
```
</TabItem>
<TabItem value="disassociate_agent_collaborator">

Disassociates an agent collaborator.

```sql
UPDATE aws.bedrock_agent.agent_collaborators
SET 
-- No updatable properties
WHERE 
agent_id = '{{ agent_id }}' --required
AND agent_version = '{{ agent_version }}' --required
AND collaborator_id = '{{ collaborator_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
