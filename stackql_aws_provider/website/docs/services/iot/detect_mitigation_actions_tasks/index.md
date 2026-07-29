--- 
title: detect_mitigation_actions_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - detect_mitigation_actions_tasks
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

Creates, updates, deletes, gets or lists a <code>detect_mitigation_actions_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="detect_mitigation_actions_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.detect_mitigation_actions_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_detect_mitigation_actions_tasks"
    values={[
        { label: 'list_detect_mitigation_actions_tasks', value: 'list_detect_mitigation_actions_tasks' },
        { label: 'describe_detect_mitigation_actions_task', value: 'describe_detect_mitigation_actions_task' }
    ]}
>
<TabItem value="list_detect_mitigation_actions_tasks">

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
    <td><CopyableCode code="actions_definition" /></td>
    <td><code>array</code></td>
    <td>The definition of the actions.</td>
</tr>
<tr>
    <td><CopyableCode code="only_active_violations_included" /></td>
    <td><code>boolean</code></td>
    <td>Includes only active violations.</td>
</tr>
<tr>
    <td><CopyableCode code="suppressed_alerts_included" /></td>
    <td><code>boolean</code></td>
    <td>Includes suppressed alerts.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>Specifies the ML Detect findings to which the mitigation actions are applied.</td>
</tr>
<tr>
    <td><CopyableCode code="task_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the task ended.</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the task. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the task started.</td>
</tr>
<tr>
    <td><CopyableCode code="task_statistics" /></td>
    <td><code>object</code></td>
    <td>The statistics of a mitigation action task.</td>
</tr>
<tr>
    <td><CopyableCode code="task_status" /></td>
    <td><code>string</code></td>
    <td>The status of the task. (IN_PROGRESS, SUCCESSFUL, FAILED, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="violation_event_occurrence_range" /></td>
    <td><code>object</code></td>
    <td>Specifies the time period of which violation events occurred between.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_detect_mitigation_actions_task">

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
    <td><CopyableCode code="actions_definition" /></td>
    <td><code>array</code></td>
    <td>The definition of the actions.</td>
</tr>
<tr>
    <td><CopyableCode code="only_active_violations_included" /></td>
    <td><code>boolean</code></td>
    <td>Includes only active violations.</td>
</tr>
<tr>
    <td><CopyableCode code="suppressed_alerts_included" /></td>
    <td><code>boolean</code></td>
    <td>Includes suppressed alerts.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>Specifies the ML Detect findings to which the mitigation actions are applied.</td>
</tr>
<tr>
    <td><CopyableCode code="task_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the task ended.</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the task. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the task started.</td>
</tr>
<tr>
    <td><CopyableCode code="task_statistics" /></td>
    <td><code>object</code></td>
    <td>The statistics of a mitigation action task.</td>
</tr>
<tr>
    <td><CopyableCode code="task_status" /></td>
    <td><code>string</code></td>
    <td>The status of the task. (IN_PROGRESS, SUCCESSFUL, FAILED, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="violation_event_occurrence_range" /></td>
    <td><code>object</code></td>
    <td>Specifies the time period of which violation events occurred between.</td>
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
    <td><a href="#list_detect_mitigation_actions_tasks"><CopyableCode code="list_detect_mitigation_actions_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List of Device Defender ML Detect mitigation actions tasks. Requires permission to access the ListDetectMitigationActionsTasks action.</td>
</tr>
<tr>
    <td><a href="#describe_detect_mitigation_actions_task"><CopyableCode code="describe_detect_mitigation_actions_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a Device Defender ML Detect mitigation action. Requires permission to access the DescribeDetectMitigationActionsTask action.</td>
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
    <td>The end of the time period for which ML Detect mitigation actions tasks are returned.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A filter to limit results to those found after the specified time. You must specify either the startTime and endTime or the taskId, but not both.</td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the task.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_detect_mitigation_actions_tasks"
    values={[
        { label: 'list_detect_mitigation_actions_tasks', value: 'list_detect_mitigation_actions_tasks' },
        { label: 'describe_detect_mitigation_actions_task', value: 'describe_detect_mitigation_actions_task' }
    ]}
>
<TabItem value="list_detect_mitigation_actions_tasks">

List of Device Defender ML Detect mitigation actions tasks. Requires permission to access the ListDetectMitigationActionsTasks action.

```sql
SELECT
actions_definition,
only_active_violations_included,
suppressed_alerts_included,
target,
task_end_time,
task_id,
task_start_time,
task_statistics,
task_status,
violation_event_occurrence_range
FROM aws.iot.detect_mitigation_actions_tasks
WHERE startTime = '{{ startTime }}' -- required
AND endTime = '{{ endTime }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
<TabItem value="describe_detect_mitigation_actions_task">

Gets information about a Device Defender ML Detect mitigation action. Requires permission to access the DescribeDetectMitigationActionsTask action.

```sql
SELECT
actions_definition,
only_active_violations_included,
suppressed_alerts_included,
target,
task_end_time,
task_id,
task_start_time,
task_statistics,
task_status,
violation_event_occurrence_range
FROM aws.iot.detect_mitigation_actions_tasks
WHERE task_id = '{{ task_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
