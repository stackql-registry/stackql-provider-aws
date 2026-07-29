--- 
title: run_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - run_tasks
  - omics
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

Creates, updates, deletes, gets or lists a <code>run_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="run_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.run_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_run_task"
    values={[
        { label: 'get_run_task', value: 'get_run_task' },
        { label: 'list_run_tasks', value: 'list_run_tasks' }
    ]}
>
<TabItem value="get_run_task">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The task's name.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_hit" /></td>
    <td><code>boolean</code></td>
    <td>Set to true if Amazon Web Services HealthOmics found a matching entry in the run cache for this task.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_s3_uri" /></td>
    <td><code>string</code></td>
    <td>Uri to a S3 object or bucket (pattern: &lt;code&gt;s3:​//(&#91;a-z0-9&#93;&#91;a-z0-9-.&#93;&#123;1,61&#125;&#91;a-z0-9&#93;)(/(.&#123;0,1024&#125;))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cpus" /></td>
    <td><code>integer</code></td>
    <td>The task's CPU usage.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason a task has failed. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="gpus" /></td>
    <td><code>integer</code></td>
    <td>The number of Graphics Processing Units (GPU) specified in the task.</td>
</tr>
<tr>
    <td><CopyableCode code="image_details" /></td>
    <td><code>object</code></td>
    <td>Details about the container image that this task uses.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type for a task. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="log_stream" /></td>
    <td><code>string</code></td>
    <td>The task's log stream. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>integer</code></td>
    <td>The task's memory use in gigabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The task's start time.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The task's status. (PENDING, STARTING, RUNNING, STOPPING, COMPLETED, CANCELLED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The task's status message. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stop_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The task's stop time.</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The task's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_run_tasks">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The task's name.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_hit" /></td>
    <td><code>boolean</code></td>
    <td>Set to true if Amazon Web Services HealthOmics found a matching entry in the run cache for this task.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_s3_uri" /></td>
    <td><code>string</code></td>
    <td>Uri to a S3 object or bucket (pattern: &lt;code&gt;s3:​//(&#91;a-z0-9&#93;&#91;a-z0-9-.&#93;&#123;1,61&#125;&#91;a-z0-9&#93;)(/(.&#123;0,1024&#125;))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cpus" /></td>
    <td><code>integer</code></td>
    <td>The task's CPU count.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="gpus" /></td>
    <td><code>integer</code></td>
    <td>The number of Graphics Processing Units (GPU) specified for the task.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type for a task. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>integer</code></td>
    <td>The task's memory use in gigabyes.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the task started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The task's status. (PENDING, STARTING, RUNNING, STOPPING, COMPLETED, CANCELLED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="stop_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the task stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The task's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_run_task"><CopyableCode code="get_run_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets detailed information about a run task using its ID.</td>
</tr>
<tr>
    <td><a href="#list_run_tasks"><CopyableCode code="list_run_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-startingToken"><code>startingToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of tasks and status information within their specified run. Use this operation to monitor runs and to identify which specific tasks have failed.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The run's ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The task's ID.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of run tasks to return in one page of results.</td>
</tr>
<tr id="parameter-startingToken">
    <td><CopyableCode code="startingToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter the list by status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_run_task"
    values={[
        { label: 'get_run_task', value: 'get_run_task' },
        { label: 'list_run_tasks', value: 'list_run_tasks' }
    ]}
>
<TabItem value="get_run_task">

Gets detailed information about a run task using its ID.

```sql
SELECT
name,
cache_hit,
cache_s3_uri,
cpus,
creation_time,
failure_reason,
gpus,
image_details,
instance_type,
log_stream,
memory,
start_time,
status,
status_message,
stop_time,
task_id
FROM aws.omics.run_tasks
WHERE id = '{{ id }}' -- required
AND task_id = '{{ task_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_run_tasks">

Returns a list of tasks and status information within their specified run. Use this operation to monitor runs and to identify which specific tasks have failed.

```sql
SELECT
name,
cache_hit,
cache_s3_uri,
cpus,
creation_time,
gpus,
instance_type,
memory,
start_time,
status,
stop_time,
task_id
FROM aws.omics.run_tasks
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
AND startingToken = '{{ startingToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
