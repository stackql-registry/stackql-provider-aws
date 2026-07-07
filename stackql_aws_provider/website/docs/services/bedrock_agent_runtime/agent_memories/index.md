--- 
title: agent_memories
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_memories
  - bedrock_agent_runtime
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

Creates, updates, deletes, gets or lists an <code>agent_memories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_memories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent_runtime.agent_memories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agent_memory"
    values={[
        { label: 'get_agent_memory', value: 'get_agent_memory' }
    ]}
>
<TabItem value="get_agent_memory">

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
    <td><CopyableCode code="sessionSummary" /></td>
    <td><code>object</code></td>
    <td>Contains summary of a session.</td>
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
    <td><a href="#get_agent_memory"><CopyableCode code="get_agent_memory" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_alias_id"><code>agent_alias_id</code></a>, <a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-memoryId"><code>memoryId</code></a>, <a href="#parameter-memoryType"><code>memoryType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxItems"><code>maxItems</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets the sessions stored in the memory of the agent.</td>
</tr>
<tr>
    <td><a href="#delete_agent_memory"><CopyableCode code="delete_agent_memory" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_alias_id"><code>agent_alias_id</code></a>, <a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-memoryId"><code>memoryId</code></a>, <a href="#parameter-sessionId"><code>sessionId</code></a></td>
    <td>Deletes memory from the specified memory identifier.</td>
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
    <td>The unique identifier of an alias of an agent.</td>
</tr>
<tr id="parameter-agent_id">
    <td><CopyableCode code="agent_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent to which the alias belongs.</td>
</tr>
<tr id="parameter-memoryId">
    <td><CopyableCode code="memoryId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the memory.</td>
</tr>
<tr id="parameter-memoryType">
    <td><CopyableCode code="memoryType" /></td>
    <td><code>string</code></td>
    <td>The type of memory.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxItems">
    <td><CopyableCode code="maxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-memoryId">
    <td><CopyableCode code="memoryId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the memory.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxItems value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
<tr id="parameter-sessionId">
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The unique session identifier of the memory.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_agent_memory"
    values={[
        { label: 'get_agent_memory', value: 'get_agent_memory' }
    ]}
>
<TabItem value="get_agent_memory">

Gets the sessions stored in the memory of the agent.

```sql
SELECT
sessionSummary
FROM aws.bedrock_agent_runtime.agent_memories
WHERE agent_alias_id = '{{ agent_alias_id }}' -- required
AND agent_id = '{{ agent_id }}' -- required
AND memoryId = '{{ memoryId }}' -- required
AND memoryType = '{{ memoryType }}' -- required
AND region = '{{ region }}' -- required
AND maxItems = '{{ maxItems }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_agent_memory"
    values={[
        { label: 'delete_agent_memory', value: 'delete_agent_memory' }
    ]}
>
<TabItem value="delete_agent_memory">

Deletes memory from the specified memory identifier.

```sql
DELETE FROM aws.bedrock_agent_runtime.agent_memories
WHERE agent_alias_id = '{{ agent_alias_id }}' --required
AND agent_id = '{{ agent_id }}' --required
AND region = '{{ region }}' --required
AND memoryId = '{{ memoryId }}'
AND sessionId = '{{ sessionId }}'
;
```
</TabItem>
</Tabs>
