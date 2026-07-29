--- 
title: thing_registration_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - thing_registration_tasks
  - iot
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

Creates, updates, deletes, gets or lists a <code>thing_registration_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="thing_registration_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.thing_registration_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_thing_registration_task"
    values={[
        { label: 'describe_thing_registration_task', value: 'describe_thing_registration_task' },
        { label: 'list_thing_registration_tasks', value: 'list_thing_registration_tasks' }
    ]}
>
<TabItem value="describe_thing_registration_task">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The task creation date.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_count" /></td>
    <td><code>integer</code></td>
    <td>The number of things that failed to be provisioned.</td>
</tr>
<tr>
    <td><CopyableCode code="input_file_bucket" /></td>
    <td><code>string</code></td>
    <td>The S3 bucket that contains the input file. (pattern: &lt;code&gt;&#91;a-zA-Z0-9._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="input_file_key" /></td>
    <td><code>string</code></td>
    <td>The input file key. (pattern: &lt;code&gt;&#91;a-zA-Z0-9!_.*'()-\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the task was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The message.</td>
</tr>
<tr>
    <td><CopyableCode code="percentage_progress" /></td>
    <td><code>integer</code></td>
    <td>The progress of the bulk provisioning task expressed as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The role ARN that grants access to the input file bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the bulk thing provisioning task. (InProgress, Completed, Failed, Cancelled, Cancelling)</td>
</tr>
<tr>
    <td><CopyableCode code="success_count" /></td>
    <td><code>integer</code></td>
    <td>The number of things successfully provisioned.</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The task ID.</td>
</tr>
<tr>
    <td><CopyableCode code="template_body" /></td>
    <td><code>string</code></td>
    <td>The task's template. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_thing_registration_tasks">

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
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>A list of bulk thing provisioning task IDs.</td>
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
    <td><a href="#describe_thing_registration_task"><CopyableCode code="describe_thing_registration_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a bulk thing provisioning task. Requires permission to access the DescribeThingRegistrationTask action.</td>
</tr>
<tr>
    <td><a href="#list_thing_registration_tasks"><CopyableCode code="list_thing_registration_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>List bulk thing provisioning tasks. Requires permission to access the ListThingRegistrationTasks action.</td>
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
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The task ID.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the bulk thing provisioning task.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_thing_registration_task"
    values={[
        { label: 'describe_thing_registration_task', value: 'describe_thing_registration_task' },
        { label: 'list_thing_registration_tasks', value: 'list_thing_registration_tasks' }
    ]}
>
<TabItem value="describe_thing_registration_task">

Describes a bulk thing provisioning task. Requires permission to access the DescribeThingRegistrationTask action.

```sql
SELECT
creation_date,
failure_count,
input_file_bucket,
input_file_key,
last_modified_date,
message,
percentage_progress,
role_arn,
status,
success_count,
task_id,
template_body
FROM aws.iot.thing_registration_tasks
WHERE task_id = '{{ task_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_thing_registration_tasks">

List bulk thing provisioning tasks. Requires permission to access the ListThingRegistrationTasks action.

```sql
SELECT
task_id
FROM aws.iot.thing_registration_tasks
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>
