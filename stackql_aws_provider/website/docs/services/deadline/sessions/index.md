--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
  - deadline
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

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_session"
    values={[
        { label: 'get_session', value: 'get_session' },
        { label: 'list_sessions', value: 'list_sessions' },
        { label: 'batch_get_session', value: 'batch_get_session' }
    ]}
>
<TabItem value="get_session">

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
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource ended running.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>The fleet ID for the session. (pattern: &lt;code&gt;fleet-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="host_properties" /></td>
    <td><code>object</code></td>
    <td>Provides the Amazon EC2 properties of the host.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_status" /></td>
    <td><code>string</code></td>
    <td>The life cycle status of the session. (STARTED, UPDATE_IN_PROGRESS, UPDATE_SUCCEEDED, UPDATE_FAILED, ENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="log" /></td>
    <td><code>object</code></td>
    <td>The session log.</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The session ID. (pattern: &lt;code&gt;session-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource started running.</td>
</tr>
<tr>
    <td><CopyableCode code="target_lifecycle_status" /></td>
    <td><code>string</code></td>
    <td>The life cycle status with which the session started. (ENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_id" /></td>
    <td><code>string</code></td>
    <td>The worker ID for the session. (pattern: &lt;code&gt;worker-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="worker_log" /></td>
    <td><code>object</code></td>
    <td>The worker log for the session.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sessions">

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
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource ended running.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>The fleet ID. (pattern: &lt;code&gt;fleet-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_status" /></td>
    <td><code>string</code></td>
    <td>The life cycle status for the session. (STARTED, UPDATE_IN_PROGRESS, UPDATE_SUCCEEDED, UPDATE_FAILED, ENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The session ID. (pattern: &lt;code&gt;session-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource started running.</td>
</tr>
<tr>
    <td><CopyableCode code="target_lifecycle_status" /></td>
    <td><code>string</code></td>
    <td>The target life cycle status for the session. (ENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_id" /></td>
    <td><code>string</code></td>
    <td>The worker ID. (pattern: &lt;code&gt;worker-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get_session">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>A list of errors for sessions that could not be retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="sessions" /></td>
    <td><code>array</code></td>
    <td>A list of sessions that were successfully retrieved.</td>
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
    <td><a href="#get_session"><CopyableCode code="get_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a session.</td>
</tr>
<tr>
    <td><a href="#list_sessions"><CopyableCode code="list_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists sessions.</td>
</tr>
<tr>
    <td><a href="#batch_get_session"><CopyableCode code="batch_get_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves multiple sessions in a single request. This is a batch version of the GetSession API. The result of getting each session is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.</td>
</tr>
<tr>
    <td><a href="#update_session"><CopyableCode code="update_session" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetLifecycleStatus"><code>targetLifecycleStatus</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Updates a session.</td>
</tr>
<tr>
    <td><a href="#start_sessions_statistics_aggregation"><CopyableCode code="start_sessions_statistics_aggregation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceIds"><code>resourceIds</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-groupBy"><code>groupBy</code></a>, <a href="#parameter-statistics"><code>statistics</code></a></td>
    <td></td>
    <td>Starts an asynchronous request for getting aggregated statistics about queues and farms. Get the statistics using the GetSessionsStatisticsAggregation operation. You can only have one running aggregation for your Deadline Cloud farm. Call the GetSessionsStatisticsAggregation operation and check the status field to see if an aggregation is running. Statistics are available for 1 hour after you call the StartSessionsStatisticsAggregation operation.</td>
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
<tr id="parameter-farm_id">
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the farm that contains queues or fleets to return statistics for.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The job ID to update in the session.</td>
</tr>
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The queue ID to update in the session.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The session ID to update.</td>
</tr>
<tr id="parameter-X-Amz-Client-Token">
    <td><CopyableCode code="X-Amz-Client-Token" /></td>
    <td><code>string</code></td>
    <td>The unique token which the server uses to recognize retries of the same request.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null to start from the beginning.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_session"
    values={[
        { label: 'get_session', value: 'get_session' },
        { label: 'list_sessions', value: 'list_sessions' },
        { label: 'batch_get_session', value: 'batch_get_session' }
    ]}
>
<TabItem value="get_session">

Gets a session.

```sql
SELECT
ended_at,
fleet_id,
host_properties,
lifecycle_status,
log,
session_id,
started_at,
target_lifecycle_status,
updated_at,
updated_by,
worker_id,
worker_log
FROM aws.deadline.sessions
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND job_id = '{{ job_id }}' -- required
AND session_id = '{{ session_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sessions">

Lists sessions.

```sql
SELECT
ended_at,
fleet_id,
lifecycle_status,
session_id,
started_at,
target_lifecycle_status,
updated_at,
updated_by,
worker_id
FROM aws.deadline.sessions
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="batch_get_session">

Retrieves multiple sessions in a single request. This is a batch version of the GetSession API. The result of getting each session is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.

```sql
SELECT
errors,
sessions
FROM aws.deadline.sessions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_session"
    values={[
        { label: 'update_session', value: 'update_session' }
    ]}
>
<TabItem value="update_session">

Updates a session.

```sql
UPDATE aws.deadline.sessions
SET 
targetLifecycleStatus = '{{ targetLifecycleStatus }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND job_id = '{{ job_id }}' --required
AND session_id = '{{ session_id }}' --required
AND region = '{{ region }}' --required
AND targetLifecycleStatus = '{{ targetLifecycleStatus }}' --required
AND `X-Amz-Client-Token` = '{{ X-Amz-Client-Token}}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_sessions_statistics_aggregation"
    values={[
        { label: 'start_sessions_statistics_aggregation', value: 'start_sessions_statistics_aggregation' }
    ]}
>
<TabItem value="start_sessions_statistics_aggregation">

Starts an asynchronous request for getting aggregated statistics about queues and farms. Get the statistics using the GetSessionsStatisticsAggregation operation. You can only have one running aggregation for your Deadline Cloud farm. Call the GetSessionsStatisticsAggregation operation and check the status field to see if an aggregation is running. Statistics are available for 1 hour after you call the StartSessionsStatisticsAggregation operation.

```sql
EXEC aws.deadline.sessions.start_sessions_statistics_aggregation 
@farm_id='{{ farm_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"resourceIds": "{{ resourceIds }}", 
"startTime": "{{ startTime }}", 
"endTime": "{{ endTime }}", 
"timezone": "{{ timezone }}", 
"period": "{{ period }}", 
"groupBy": "{{ groupBy }}", 
"statistics": "{{ statistics }}"
}'
;
```
</TabItem>
</Tabs>
