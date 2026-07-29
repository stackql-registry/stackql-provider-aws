--- 
title: goals
hide_title: false
hide_table_of_contents: false
keywords:
  - goals
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

Creates, updates, deletes, gets or lists a <code>goals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="goals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_agent.goals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_goals"
    values={[
        { label: 'list_goals', value: 'list_goals' }
    ]}
>
<TabItem value="list_goals">

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
    <td><CopyableCode code="agent_space_arn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the agent space containing this goal</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>Content of the goal</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this goal was created</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_schedule" /></td>
    <td><code>object</code></td>
    <td>Goal Schedule. Allows to schedule the goal to run periodically, as well as disable a goal temporarily</td>
</tr>
<tr>
    <td><CopyableCode code="goal_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this goal</td>
</tr>
<tr>
    <td><CopyableCode code="goal_type" /></td>
    <td><code>string</code></td>
    <td>Type of goal based on its origin (CUSTOMER_DEFINED, ONCALL_REPORT)</td>
</tr>
<tr>
    <td><CopyableCode code="last_evaluated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the goal was last evaluated</td>
</tr>
<tr>
    <td><CopyableCode code="last_successful_task_id" /></td>
    <td><code>string</code></td>
    <td>ID of the most recent successful task associated with this goal</td>
</tr>
<tr>
    <td><CopyableCode code="last_task_id" /></td>
    <td><code>string</code></td>
    <td>ID of the most recent task associated with this goal</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Possible states of a goal throughout its lifecycle (ACTIVE, PAUSED, COMPLETE)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the goal</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this goal was last updated</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>Version number for optimistic locking</td>
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
    <td><a href="#list_goals"><CopyableCode code="list_goals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists goals in the specified agent space with optional filtering</td>
</tr>
<tr>
    <td><a href="#update_goal"><CopyableCode code="update_goal" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-goal_id"><code>goal_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an existing goal</td>
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
    <td>The unique identifier for the agent space containing the goal</td>
</tr>
<tr id="parameter-goal_id">
    <td><CopyableCode code="goal_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the goal to update</td>
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
    defaultValue="list_goals"
    values={[
        { label: 'list_goals', value: 'list_goals' }
    ]}
>
<TabItem value="list_goals">

Lists goals in the specified agent space with optional filtering

```sql
SELECT
agent_space_arn,
content,
created_at,
evaluation_schedule,
goal_id,
goal_type,
last_evaluated_at,
last_successful_task_id,
last_task_id,
status,
title_,
updated_at,
version
FROM aws.devops_agent.goals
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_goal"
    values={[
        { label: 'update_goal', value: 'update_goal' }
    ]}
>
<TabItem value="update_goal">

Update an existing goal

```sql
UPDATE aws.devops_agent.goals
SET 
evaluationSchedule = '{{ evaluationSchedule }}',
clientToken = '{{ clientToken }}'
WHERE 
agent_space_id = '{{ agent_space_id }}' --required
AND goal_id = '{{ goal_id }}' --required
AND region = '{{ region }}' --required
RETURNING
goal;
```
</TabItem>
</Tabs>
