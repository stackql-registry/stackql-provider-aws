--- 
title: backlog_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - backlog_tasks
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

Creates, updates, deletes, gets or lists a <code>backlog_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backlog_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_agent.backlog_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_backlog_task"
    values={[
        { label: 'get_backlog_task', value: 'get_backlog_task' },
        { label: 'list_backlog_tasks', value: 'list_backlog_tasks' }
    ]}
>
<TabItem value="get_backlog_task">

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
    <td><CopyableCode code="agent_space_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the agent space containing this task</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this task was created</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional detailed description of the task</td>
</tr>
<tr>
    <td><CopyableCode code="execution_id" /></td>
    <td><code>string</code></td>
    <td>The execution ID associated with this task, if any</td>
</tr>
<tr>
    <td><CopyableCode code="has_linked_tasks" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if this task has other tasks linked to it</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Optional metadata for the task</td>
</tr>
<tr>
    <td><CopyableCode code="primary_task_id" /></td>
    <td><code>string</code></td>
    <td>The task ID of the primary investigation this task is linked to</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>Priority levels for tasks, from highest to lowest urgency (CRITICAL, HIGH, MEDIUM, LOW, MINIMAL)</td>
</tr>
<tr>
    <td><CopyableCode code="reference" /></td>
    <td><code>object</code></td>
    <td>Optional reference information linking this task to external systems</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of this task (PENDING_TRIAGE, LINKED, PENDING_START, IN_PROGRESS, PENDING_CUSTOMER_APPROVAL, COMPLETED, FAILED, TIMED_OUT, CANCELED, SKIPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Explanation for why the task status was changed (e.g., linked reason)</td>
</tr>
<tr>
    <td><CopyableCode code="support_metadata" /></td>
    <td><code>object</code></td>
    <td>Optional support metadata for the task</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this task</td>
</tr>
<tr>
    <td><CopyableCode code="task_type" /></td>
    <td><code>string</code></td>
    <td>Types of tasks that can be created in the backlog (INVESTIGATION, EVALUATION, RELEASE_READINESS_REVIEW, RELEASE_TESTING)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the task</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this task was last updated</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>Version number for optimistic locking</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_backlog_tasks">

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
    <td><CopyableCode code="agent_space_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the agent space containing this task</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this task was created</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional detailed description of the task</td>
</tr>
<tr>
    <td><CopyableCode code="execution_id" /></td>
    <td><code>string</code></td>
    <td>The execution ID associated with this task, if any</td>
</tr>
<tr>
    <td><CopyableCode code="has_linked_tasks" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if this task has other tasks linked to it</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Optional metadata for the task</td>
</tr>
<tr>
    <td><CopyableCode code="primary_task_id" /></td>
    <td><code>string</code></td>
    <td>The task ID of the primary investigation this task is linked to</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>Priority levels for tasks, from highest to lowest urgency (CRITICAL, HIGH, MEDIUM, LOW, MINIMAL)</td>
</tr>
<tr>
    <td><CopyableCode code="reference" /></td>
    <td><code>object</code></td>
    <td>Optional reference information linking this task to external systems</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of this task (PENDING_TRIAGE, LINKED, PENDING_START, IN_PROGRESS, PENDING_CUSTOMER_APPROVAL, COMPLETED, FAILED, TIMED_OUT, CANCELED, SKIPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Explanation for why the task status was changed (e.g., linked reason)</td>
</tr>
<tr>
    <td><CopyableCode code="support_metadata" /></td>
    <td><code>object</code></td>
    <td>Optional support metadata for the task</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this task</td>
</tr>
<tr>
    <td><CopyableCode code="task_type" /></td>
    <td><code>string</code></td>
    <td>Types of tasks that can be created in the backlog (INVESTIGATION, EVALUATION, RELEASE_READINESS_REVIEW, RELEASE_TESTING)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the task</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this task was last updated</td>
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
    <td><a href="#get_backlog_task"><CopyableCode code="get_backlog_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a backlog task for the specified agent space and task id</td>
</tr>
<tr>
    <td><a href="#list_backlog_tasks"><CopyableCode code="list_backlog_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists backlog tasks in the specified agent space with optional filtering and sorting</td>
</tr>
<tr>
    <td><a href="#create_backlog_task"><CopyableCode code="create_backlog_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-taskType"><code>taskType</code></a>, <a href="#parameter-title"><code>title</code></a>, <a href="#parameter-priority"><code>priority</code></a></td>
    <td></td>
    <td>Creates a new backlog task in the specified agent space</td>
</tr>
<tr>
    <td><a href="#update_backlog_task"><CopyableCode code="update_backlog_task" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an existing backlog task.</td>
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
    <td>The unique identifier for the agent space containing the task</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the task to update</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_backlog_task"
    values={[
        { label: 'get_backlog_task', value: 'get_backlog_task' },
        { label: 'list_backlog_tasks', value: 'list_backlog_tasks' }
    ]}
>
<TabItem value="get_backlog_task">

Gets a backlog task for the specified agent space and task id

```sql
SELECT
agent_space_id,
created_at,
description,
execution_id,
has_linked_tasks,
metadata,
primary_task_id,
priority,
reference,
status,
status_reason,
support_metadata,
task_id,
task_type,
title_,
updated_at,
version
FROM aws.devops_agent.backlog_tasks
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND task_id = '{{ task_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_backlog_tasks">

Lists backlog tasks in the specified agent space with optional filtering and sorting

```sql
SELECT
agent_space_id,
created_at,
description,
execution_id,
has_linked_tasks,
metadata,
primary_task_id,
priority,
reference,
status,
status_reason,
support_metadata,
task_id,
task_type,
title_,
updated_at,
version
FROM aws.devops_agent.backlog_tasks
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_backlog_task"
    values={[
        { label: 'create_backlog_task', value: 'create_backlog_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_backlog_task">

Creates a new backlog task in the specified agent space

```sql
INSERT INTO aws.devops_agent.backlog_tasks (
reference,
taskType,
title,
description,
priority,
clientToken,
agent_space_id,
region
)
SELECT 
'{{ reference }}',
'{{ taskType }}' /* required */,
'{{ title }}' /* required */,
'{{ description }}',
'{{ priority }}' /* required */,
'{{ clientToken }}',
'{{ agent_space_id }}',
'{{ region }}'
RETURNING
task
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: backlog_tasks
  props:
    - name: agent_space_id
      value: "{{ agent_space_id }}"
      description: Required parameter for the backlog_tasks resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the backlog_tasks resource.
    - name: reference
      description: |
        Reference information linking a task to external systems - for input with validation
      value:
        system: "{{ system }}"
        title_: "{{ title_ }}"
        referenceId: "{{ referenceId }}"
        referenceUrl: "{{ referenceUrl }}"
        associationId: "{{ associationId }}"
    - name: taskType
      value: "{{ taskType }}"
      description: |
        Types of tasks that can be created in the backlog
      valid_values: ['INVESTIGATION', 'EVALUATION', 'RELEASE_READINESS_REVIEW', 'RELEASE_TESTING']
    - name: title
      value: "{{ title }}"
      description: |
        Title for a backlog task (allows printable ASCII characters, tabs, and newlines; 1-400 characters)
    - name: description
      value: "{{ description }}"
      description: |
        Description for a backlog task (allows printable ASCII characters, tabs, and newlines; up to 10000 characters)
    - name: priority
      value: "{{ priority }}"
      description: |
        Priority levels for tasks, from highest to lowest urgency
      valid_values: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'MINIMAL']
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_backlog_task"
    values={[
        { label: 'update_backlog_task', value: 'update_backlog_task' }
    ]}
>
<TabItem value="update_backlog_task">

Update an existing backlog task.

```sql
UPDATE aws.devops_agent.backlog_tasks
SET 
taskStatus = '{{ taskStatus }}',
clientToken = '{{ clientToken }}'
WHERE 
agent_space_id = '{{ agent_space_id }}' --required
AND task_id = '{{ task_id }}' --required
AND region = '{{ region }}' --required
RETURNING
task;
```
</TabItem>
</Tabs>
