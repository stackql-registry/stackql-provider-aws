--- 
title: batch_delete_configuration_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - batch_delete_configuration_tasks
  - discovery
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

Creates, updates, deletes, gets or lists a <code>batch_delete_configuration_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="batch_delete_configuration_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.discovery.batch_delete_configuration_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_batch_delete_configuration_task"
    values={[
        { label: 'describe_batch_delete_configuration_task', value: 'describe_batch_delete_configuration_task' }
    ]}
>
<TabItem value="describe_batch_delete_configuration_task">

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
    <td><CopyableCode code="configuration_type" /></td>
    <td><code>string</code></td>
    <td>The type of configuration item to delete. Supported types are: SERVER. (SERVER)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_configurations" /></td>
    <td><code>array</code></td>
    <td>The list of configuration IDs that were successfully deleted by the deletion task.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_warnings" /></td>
    <td><code>array</code></td>
    <td>A list of configuration IDs that produced warnings regarding their deletion, paired with a warning message.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>An epoch seconds timestamp (UTC) of when the deletion task was completed or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="failed_configurations" /></td>
    <td><code>array</code></td>
    <td>A list of configuration IDs that failed to delete during the deletion task, each paired with an error message.</td>
</tr>
<tr>
    <td><CopyableCode code="requested_configurations" /></td>
    <td><code>array</code></td>
    <td>The list of configuration IDs that were originally requested to be deleted by the deletion task.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>An epoch seconds timestamp (UTC) of when the deletion task was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current execution status of the deletion task. Valid status are: INITIALIZING | VALIDATING | DELETING | COMPLETED | FAILED. (INITIALIZING, VALIDATING, DELETING, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The deletion task's unique identifier. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_batch_delete_configuration_task"><CopyableCode code="describe_batch_delete_configuration_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Takes a unique deletion task identifier as input and returns metadata about a configuration deletion task.</td>
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
    defaultValue="describe_batch_delete_configuration_task"
    values={[
        { label: 'describe_batch_delete_configuration_task', value: 'describe_batch_delete_configuration_task' }
    ]}
>
<TabItem value="describe_batch_delete_configuration_task">

Takes a unique deletion task identifier as input and returns metadata about a configuration deletion task.

```sql
SELECT
configuration_type,
deleted_configurations,
deletion_warnings,
end_time,
failed_configurations,
requested_configurations,
start_time,
status,
task_id
FROM aws.discovery.batch_delete_configuration_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
