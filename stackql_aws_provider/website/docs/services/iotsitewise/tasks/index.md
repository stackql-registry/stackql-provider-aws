--- 
title: tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tasks
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_task"
    values={[
        { label: 'describe_task', value: 'describe_task' },
        { label: 'list_tasks', value: 'list_tasks' }
    ]}
>
<TabItem value="describe_task">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the task was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the task. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current lifecycle status of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="task_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the task. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_configuration" /></td>
    <td><code>object</code></td>
    <td>The task execution configuration. Specify a containerTaskConfiguration for a custom container workload.</td>
</tr>
<tr>
    <td><CopyableCode code="task_name" /></td>
    <td><code>string</code></td>
    <td>Reusable resource name with alphanumeric, hyphen, and underscore characters. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the task was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the task. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tasks">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the task was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the task. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current lifecycle status of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="task_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the task. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_name" /></td>
    <td><code>string</code></td>
    <td>Reusable resource name with alphanumeric, hyphen, and underscore characters. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the task was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the task. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
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
    <td><a href="#describe_task"><CopyableCode code="describe_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-task_name"><code>task_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Retrieves detailed information about a specific task in a workspace.</td>
</tr>
<tr>
    <td><a href="#list_tasks"><CopyableCode code="list_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists tasks in a workspace. To get complete details about a task, use DescribeTask.</td>
</tr>
<tr>
    <td><a href="#create_task"><CopyableCode code="create_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-taskName"><code>taskName</code></a>, <a href="#parameter-taskConfiguration"><code>taskConfiguration</code></a></td>
    <td></td>
    <td>Creates a new task in the specified workspace. A task defines a reusable containerized compute workload that can be referenced by one or more pipeline compute nodes. Specify a containerTaskConfiguration for custom container workloads with configurable ECR image, processing type, processing unit, and environment variables.</td>
</tr>
<tr>
    <td><a href="#update_task"><CopyableCode code="update_task" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-task_name"><code>task_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing task in the specified workspace. Only the fields provided in the request are updated; fields not included in the request are preserved unchanged.</td>
</tr>
<tr>
    <td><a href="#delete_task"><CopyableCode code="delete_task" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-task_name"><code>task_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a task from the specified workspace. A task cannot be deleted if it is currently referenced by any existing pipeline. Remove the task from all pipelines before attempting to delete it.</td>
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
<tr id="parameter-task_name">
    <td><CopyableCode code="task_name" /></td>
    <td><code>string</code></td>
    <td>The name of the task to delete.</td>
</tr>
<tr id="parameter-workspace_name">
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request. Default: 50.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version number of the task to retrieve. If not specified, returns the latest version.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_task"
    values={[
        { label: 'describe_task', value: 'describe_task' },
        { label: 'list_tasks', value: 'list_tasks' }
    ]}
>
<TabItem value="describe_task">

Retrieves detailed information about a specific task in a workspace.

```sql
SELECT
created_at,
description,
status,
task_arn,
task_configuration,
task_name,
updated_at,
version,
workspace_name
FROM aws.iotsitewise.tasks
WHERE workspace_name = '{{ workspace_name }}' -- required
AND task_name = '{{ task_name }}' -- required
AND region = '{{ region }}' -- required
AND version = '{{ version }}'
;
```
</TabItem>
<TabItem value="list_tasks">

Lists tasks in a workspace. To get complete details about a task, use DescribeTask.

```sql
SELECT
created_at,
description,
status,
task_arn,
task_name,
updated_at,
version
FROM aws.iotsitewise.tasks
WHERE workspace_name = '{{ workspace_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_task"
    values={[
        { label: 'create_task', value: 'create_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_task">

Creates a new task in the specified workspace. A task defines a reusable containerized compute workload that can be referenced by one or more pipeline compute nodes. Specify a containerTaskConfiguration for custom container workloads with configurable ECR image, processing type, processing unit, and environment variables.

```sql
INSERT INTO aws.iotsitewise.tasks (
taskName,
description,
taskConfiguration,
tags,
clientToken,
workspace_name,
region
)
SELECT 
'{{ taskName }}' /* required */,
'{{ description }}',
'{{ taskConfiguration }}' /* required */,
'{{ tags }}',
'{{ clientToken }}',
'{{ workspace_name }}',
'{{ region }}'
RETURNING
status,
task_arn,
task_name,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tasks
  props:
    - name: workspace_name
      value: "{{ workspace_name }}"
      description: Required parameter for the tasks resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tasks resource.
    - name: taskName
      value: "{{ taskName }}"
      description: |
        Reusable resource name with alphanumeric, hyphen, and underscore characters.
    - name: description
      value: "{{ description }}"
    - name: taskConfiguration
      description: |
        The task execution configuration. Specify a containerTaskConfiguration for a custom container workload.
      value:
        containerTaskConfiguration:
          ecrUri: "{{ ecrUri }}"
          taskExecutionRole: "{{ taskExecutionRole }}"
          processingType: "{{ processingType }}"
          processingUnit: "{{ processingUnit }}"
          command:
            - "{{ command }}"
          timeoutSeconds: {{ timeoutSeconds }}
          environmentVariables: "{{ environmentVariables }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_task"
    values={[
        { label: 'update_task', value: 'update_task' }
    ]}
>
<TabItem value="update_task">

Updates an existing task in the specified workspace. Only the fields provided in the request are updated; fields not included in the request are preserved unchanged.

```sql
UPDATE aws.iotsitewise.tasks
SET 
description = '{{ description }}',
taskConfiguration = '{{ taskConfiguration }}'
WHERE 
workspace_name = '{{ workspace_name }}' --required
AND task_name = '{{ task_name }}' --required
AND region = '{{ region }}' --required
RETURNING
status,
version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_task"
    values={[
        { label: 'delete_task', value: 'delete_task' }
    ]}
>
<TabItem value="delete_task">

Deletes a task from the specified workspace. A task cannot be deleted if it is currently referenced by any existing pipeline. Remove the task from all pipelines before attempting to delete it.

```sql
DELETE FROM aws.iotsitewise.tasks
WHERE workspace_name = '{{ workspace_name }}' --required
AND task_name = '{{ task_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
