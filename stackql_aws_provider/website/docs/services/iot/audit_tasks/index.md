--- 
title: audit_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - audit_tasks
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

Creates, updates, deletes, gets or lists an <code>audit_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="audit_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.audit_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_audit_tasks"
    values={[
        { label: 'list_audit_tasks', value: 'list_audit_tasks' },
        { label: 'describe_audit_task', value: 'describe_audit_task' }
    ]}
>
<TabItem value="list_audit_tasks">

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
    <td>The ID of this audit. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_status" /></td>
    <td><code>string</code></td>
    <td>The status of this audit. One of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED". (IN_PROGRESS, COMPLETED, FAILED, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="task_type" /></td>
    <td><code>string</code></td>
    <td>The type of this audit. One of "ON_DEMAND_AUDIT_TASK" or "SCHEDULED_AUDIT_TASK". (ON_DEMAND_AUDIT_TASK, SCHEDULED_AUDIT_TASK)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_audit_task">

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
    <td><CopyableCode code="audit_details" /></td>
    <td><code>object</code></td>
    <td>Detailed information about each check performed during this audit.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_audit_name" /></td>
    <td><code>string</code></td>
    <td>The name of the scheduled audit (only if the audit was a scheduled audit). (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the audit started.</td>
</tr>
<tr>
    <td><CopyableCode code="task_statistics" /></td>
    <td><code>object</code></td>
    <td>Statistical information about the audit.</td>
</tr>
<tr>
    <td><CopyableCode code="task_status" /></td>
    <td><code>string</code></td>
    <td>The status of the audit: one of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED". (IN_PROGRESS, COMPLETED, FAILED, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="task_type" /></td>
    <td><code>string</code></td>
    <td>The type of audit: "ON_DEMAND_AUDIT_TASK" or "SCHEDULED_AUDIT_TASK". (ON_DEMAND_AUDIT_TASK, SCHEDULED_AUDIT_TASK)</td>
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
    <td><a href="#list_audit_tasks"><CopyableCode code="list_audit_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-taskType"><code>taskType</code></a>, <a href="#parameter-taskStatus"><code>taskStatus</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the Device Defender audits that have been performed during a given time period. Requires permission to access the ListAuditTasks action.</td>
</tr>
<tr>
    <td><a href="#describe_audit_task"><CopyableCode code="describe_audit_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a Device Defender audit. Requires permission to access the DescribeAuditTask action.</td>
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
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the time period.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The beginning of the time period. Audit information is retained for a limited time (90 days). Requesting a start time prior to what is retained results in an "InvalidRequestException".</td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the audit whose information you want to get.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time. The default is 25.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results.</td>
</tr>
<tr id="parameter-taskStatus">
    <td><CopyableCode code="taskStatus" /></td>
    <td><code>string</code></td>
    <td>A filter to limit the output to audits with the specified completion status: can be one of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".</td>
</tr>
<tr id="parameter-taskType">
    <td><CopyableCode code="taskType" /></td>
    <td><code>string</code></td>
    <td>A filter to limit the output to the specified type of audit: can be one of "ON_DEMAND_AUDIT_TASK" or "SCHEDULED__AUDIT_TASK".</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_audit_tasks"
    values={[
        { label: 'list_audit_tasks', value: 'list_audit_tasks' },
        { label: 'describe_audit_task', value: 'describe_audit_task' }
    ]}
>
<TabItem value="list_audit_tasks">

Lists the Device Defender audits that have been performed during a given time period. Requires permission to access the ListAuditTasks action.

```sql
SELECT
task_id,
task_status,
task_type
FROM aws.iot.audit_tasks
WHERE startTime = '{{ startTime }}' -- required
AND endTime = '{{ endTime }}' -- required
AND region = '{{ region }}' -- required
AND taskType = '{{ taskType }}'
AND taskStatus = '{{ taskStatus }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="describe_audit_task">

Gets information about a Device Defender audit. Requires permission to access the DescribeAuditTask action.

```sql
SELECT
audit_details,
scheduled_audit_name,
task_start_time,
task_statistics,
task_status,
task_type
FROM aws.iot.audit_tasks
WHERE task_id = '{{ task_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
