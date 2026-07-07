--- 
title: sessions_for_workers
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions_for_workers
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

Creates, updates, deletes, gets or lists a <code>sessions_for_workers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sessions_for_workers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.sessions_for_workers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_sessions_for_worker"
    values={[
        { label: 'list_sessions_for_worker', value: 'list_sessions_for_worker' }
    ]}
>
<TabItem value="list_sessions_for_worker">

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
    <td><CopyableCode code="endedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource ended running.</td>
</tr>
<tr>
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>The job ID for the job associated with the worker's session. (pattern: &lt;code&gt;job-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleStatus" /></td>
    <td><code>string</code></td>
    <td>The life cycle status for the worker's session. (STARTED, UPDATE_IN_PROGRESS, UPDATE_SUCCEEDED, UPDATE_FAILED, ENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="queueId" /></td>
    <td><code>string</code></td>
    <td>The queue ID for the queue associated to the worker. (pattern: &lt;code&gt;queue-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The session ID for the session action. (pattern: &lt;code&gt;session-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource started running.</td>
</tr>
<tr>
    <td><CopyableCode code="targetLifecycleStatus" /></td>
    <td><code>string</code></td>
    <td>The life cycle status (ENDED)</td>
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
    <td><a href="#list_sessions_for_worker"><CopyableCode code="list_sessions_for_worker" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-worker_id"><code>worker_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists sessions for a worker.</td>
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
    <td>The farm ID for the session.</td>
</tr>
<tr id="parameter-fleet_id">
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>The fleet ID for the session.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-worker_id">
    <td><CopyableCode code="worker_id" /></td>
    <td><code>string</code></td>
    <td>The worker ID for the session.</td>
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
    defaultValue="list_sessions_for_worker"
    values={[
        { label: 'list_sessions_for_worker', value: 'list_sessions_for_worker' }
    ]}
>
<TabItem value="list_sessions_for_worker">

Lists sessions for a worker.

```sql
SELECT
endedAt,
jobId,
lifecycleStatus,
queueId,
sessionId,
startedAt,
targetLifecycleStatus
FROM aws.deadline.sessions_for_workers
WHERE farm_id = '{{ farm_id }}' -- required
AND fleet_id = '{{ fleet_id }}' -- required
AND worker_id = '{{ worker_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
