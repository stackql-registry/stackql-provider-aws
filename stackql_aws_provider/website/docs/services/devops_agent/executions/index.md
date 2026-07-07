--- 
title: executions
hide_title: false
hide_table_of_contents: false
keywords:
  - executions
  - devops_agent
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

Creates, updates, deletes, gets or lists an <code>executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_agent.executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_executions"
    values={[
        { label: 'list_executions', value: 'list_executions' }
    ]}
>
<TabItem value="list_executions">

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
    <td><CopyableCode code="agentSpaceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the agent space containing this execution</td>
</tr>
<tr>
    <td><CopyableCode code="agentSubTask" /></td>
    <td><code>string</code></td>
    <td>The specific subtask being executed by the agent</td>
</tr>
<tr>
    <td><CopyableCode code="agentType" /></td>
    <td><code>string</code></td>
    <td>The type of agent that performed this execution.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this execution was created</td>
</tr>
<tr>
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this execution</td>
</tr>
<tr>
    <td><CopyableCode code="executionStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of this execution (FAILED, RUNNING, STOPPED, CANCELED, TIMED_OUT)</td>
</tr>
<tr>
    <td><CopyableCode code="parentExecutionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the parent execution, if this is a child execution</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the user session associated with this execution</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this execution was last updated</td>
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
    <td><a href="#list_executions"><CopyableCode code="list_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List executions</td>
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
<tr id="parameter-agent_space_id">
    <td><CopyableCode code="agent_space_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the agent space</td>
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
    defaultValue="list_executions"
    values={[
        { label: 'list_executions', value: 'list_executions' }
    ]}
>
<TabItem value="list_executions">

List executions

```sql
SELECT
agentSpaceId,
agentSubTask,
agentType,
createdAt,
executionId,
executionStatus,
parentExecutionId,
uid,
updatedAt
FROM aws.devops_agent.executions
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
