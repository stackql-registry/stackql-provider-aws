--- 
title: actors
hide_title: false
hide_table_of_contents: false
keywords:
  - actors
  - bedrock_agentcore
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

Creates, updates, deletes, gets or lists an <code>actors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="actors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.actors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_actors"
    values={[
        { label: 'list_actors', value: 'list_actors' }
    ]}
>
<TabItem value="list_actors">

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
    <td><CopyableCode code="actorId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the actor. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_/&#93;*(?::&#91;a-zA-Z0-9-_/&#93;+)*&#91;a-zA-Z0-9-_/&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_actors"><CopyableCode code="list_actors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all actors in an AgentCore Memory resource. We recommend using pagination to ensure that the operation returns quickly and successfully. To use this operation, you must have the bedrock-agentcore:ListActors permission.</td>
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
<tr id="parameter-memory_id">
    <td><CopyableCode code="memory_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the AgentCore Memory resource for which to list actors.</td>
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
    defaultValue="list_actors"
    values={[
        { label: 'list_actors', value: 'list_actors' }
    ]}
>
<TabItem value="list_actors">

Lists all actors in an AgentCore Memory resource. We recommend using pagination to ensure that the operation returns quickly and successfully. To use this operation, you must have the bedrock-agentcore:ListActors permission.

```sql
SELECT
actorId
FROM aws.bedrock_agentcore.actors
WHERE memory_id = '{{ memory_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
