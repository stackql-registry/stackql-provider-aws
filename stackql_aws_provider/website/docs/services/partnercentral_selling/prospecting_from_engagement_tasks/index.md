--- 
title: prospecting_from_engagement_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - prospecting_from_engagement_tasks
  - partnercentral_selling
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

Creates, updates, deletes, gets or lists a <code>prospecting_from_engagement_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="prospecting_from_engagement_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_selling.prospecting_from_engagement_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_prospecting_from_engagement_task"
    values={[
        { label: 'get_prospecting_from_engagement_task', value: 'get_prospecting_from_engagement_task' },
        { label: 'list_prospecting_from_engagement_tasks', value: 'list_prospecting_from_engagement_tasks' }
    ]}
>
<TabItem value="get_prospecting_from_engagement_task">

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
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp indicating when the task finished processing. This field is absent if the task is still in progress. The format follows ISO 8601 date-time notation.</td>
</tr>
<tr>
    <td><CopyableCode code="engagements" /></td>
    <td><code>array</code></td>
    <td>An array of EngagementProspectingResult entries for each engagement in the task. Each entry contains the processing status. For successfully completed engagements, includes the prospecting context identifier. For failed engagements, includes an error code and message.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp indicating when the task was initiated. The format follows ISO 8601 date-time notation.</td>
</tr>
<tr>
    <td><CopyableCode code="task_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the task. (pattern: &lt;code&gt;arn:aws:partnercentral-selling:.*:.*:catalog/.*/prospecting-from-engagement-task/task-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the task. (pattern: &lt;code&gt;task-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_name" /></td>
    <td><code>string</code></td>
    <td>The descriptive name of the task that you provided when you created it.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_prospecting_from_engagement_tasks">

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
    <td><CopyableCode code="completed_engagement_count" /></td>
    <td><code>integer</code></td>
    <td>The number of engagements that have been successfully converted into prospecting leads.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp indicating when the task finished processing. This field is absent if the task is still in progress. The format follows ISO 8601 date-time notation.</td>
</tr>
<tr>
    <td><CopyableCode code="failed_engagement_count" /></td>
    <td><code>integer</code></td>
    <td>The number of engagements that failed to be converted. Retrieve the full task details using GetProspectingFromEngagementTask for per-engagement error information.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp indicating when the task was initiated. The format follows ISO 8601 date-time notation.</td>
</tr>
<tr>
    <td><CopyableCode code="task_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the task. (pattern: &lt;code&gt;arn:aws:partnercentral-selling:.*:.*:catalog/.*/prospecting-from-engagement-task/task-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the task. Use this value with GetProspectingFromEngagementTask to retrieve full task details. (pattern: &lt;code&gt;task-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_name" /></td>
    <td><code>string</code></td>
    <td>The descriptive name of the task provided when it was created.</td>
</tr>
<tr>
    <td><CopyableCode code="total_engagement_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of engagements included in the task.</td>
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
    <td><a href="#get_prospecting_from_engagement_task"><CopyableCode code="get_prospecting_from_engagement_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details and current status of a prospecting task previously started with StartProspectingFromEngagementTask to enable polling for completion and access to per-engagement processing results.</td>
</tr>
<tr>
    <td><a href="#list_prospecting_from_engagement_tasks"><CopyableCode code="list_prospecting_from_engagement_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all prospecting tasks initiated by the caller's account. Supports optional filters by task identifier, task name, or start time range. Results can be sorted using configurable options. The response is paginated. Use the NextToken value from each response to retrieve subsequent pages.</td>
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
    defaultValue="get_prospecting_from_engagement_task"
    values={[
        { label: 'get_prospecting_from_engagement_task', value: 'get_prospecting_from_engagement_task' },
        { label: 'list_prospecting_from_engagement_tasks', value: 'list_prospecting_from_engagement_tasks' }
    ]}
>
<TabItem value="get_prospecting_from_engagement_task">

Retrieves the details and current status of a prospecting task previously started with StartProspectingFromEngagementTask to enable polling for completion and access to per-engagement processing results.

```sql
SELECT
end_time,
engagements,
start_time,
task_arn,
task_id,
task_name
FROM aws.partnercentral_selling.prospecting_from_engagement_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_prospecting_from_engagement_tasks">

Lists all prospecting tasks initiated by the caller's account. Supports optional filters by task identifier, task name, or start time range. Results can be sorted using configurable options. The response is paginated. Use the NextToken value from each response to retrieve subsequent pages.

```sql
SELECT
completed_engagement_count,
end_time,
failed_engagement_count,
start_time,
task_arn,
task_id,
task_name,
total_engagement_count
FROM aws.partnercentral_selling.prospecting_from_engagement_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
