--- 
title: threat_model_job_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - threat_model_job_tasks
  - securityagent
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

Creates, updates, deletes, gets or lists a <code>threat_model_job_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="threat_model_job_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.threat_model_job_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_threat_model_job_tasks"
    values={[
        { label: 'batch_get_threat_model_job_tasks', value: 'batch_get_threat_model_job_tasks' },
        { label: 'list_threat_model_job_tasks', value: 'list_threat_model_job_tasks' }
    ]}
>
<TabItem value="batch_get_threat_model_job_tasks">

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
    <td><CopyableCode code="not_found" /></td>
    <td><code>array</code></td>
    <td>The list of task identifiers that were not found.</td>
</tr>
<tr>
    <td><CopyableCode code="threat_model_job_tasks" /></td>
    <td><code>array</code></td>
    <td>The list of threat model job tasks that were found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_threat_model_job_tasks">

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
    <td>The unique identifier of the agent space.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the task was created, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_status" /></td>
    <td><code>string</code></td>
    <td>The current execution status of the task. (IN_PROGRESS, ABORTED, COMPLETED, INTERNAL_ERROR, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="threat_model_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the threat model associated with the task.</td>
</tr>
<tr>
    <td><CopyableCode code="threat_model_job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the threat model job that contains the task.</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the task was last updated, in UTC format.</td>
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
    <td><a href="#batch_get_threat_model_job_tasks"><CopyableCode code="batch_get_threat_model_job_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about one or more tasks within a threat model job.</td>
</tr>
<tr>
    <td><a href="#list_threat_model_job_tasks"><CopyableCode code="list_threat_model_job_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of task summaries for the specified threat model job.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_threat_model_job_tasks"
    values={[
        { label: 'batch_get_threat_model_job_tasks', value: 'batch_get_threat_model_job_tasks' },
        { label: 'list_threat_model_job_tasks', value: 'list_threat_model_job_tasks' }
    ]}
>
<TabItem value="batch_get_threat_model_job_tasks">

Retrieves information about one or more tasks within a threat model job.

```sql
SELECT
not_found,
threat_model_job_tasks
FROM aws.securityagent.threat_model_job_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_threat_model_job_tasks">

Returns a paginated list of task summaries for the specified threat model job.

```sql
SELECT
agent_space_id,
created_at,
execution_status,
task_id,
threat_model_id,
threat_model_job_id,
title_,
updated_at
FROM aws.securityagent.threat_model_job_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
