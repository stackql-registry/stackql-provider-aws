--- 
title: session_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - session_actions
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

Creates, updates, deletes, gets or lists a <code>session_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="session_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.session_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_session_action"
    values={[
        { label: 'get_session_action', value: 'get_session_action' },
        { label: 'list_session_actions', value: 'list_session_actions' },
        { label: 'batch_get_session_action', value: 'batch_get_session_action' }
    ]}
>
<TabItem value="get_session_action">

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
    <td><CopyableCode code="acquiredLimits" /></td>
    <td><code>array</code></td>
    <td>The limits and their amounts acquired during a session action. If no limits were acquired during the session, this field isn't returned.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>The session action definition.</td>
</tr>
<tr>
    <td><CopyableCode code="endedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource ended running.</td>
</tr>
<tr>
    <td><CopyableCode code="manifests" /></td>
    <td><code>array</code></td>
    <td>The list of manifest properties that describe file attachments for the task run.</td>
</tr>
<tr>
    <td><CopyableCode code="processExitCode" /></td>
    <td><code>integer</code></td>
    <td>The process exit code. The default Deadline Cloud worker agent converts unsigned 32-bit exit codes to signed 32-bit exit codes.</td>
</tr>
<tr>
    <td><CopyableCode code="progressMessage" /></td>
    <td><code>string</code></td>
    <td>The message that communicates the progress of the session action.</td>
</tr>
<tr>
    <td><CopyableCode code="progressPercent" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage completed for a session action.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionActionId" /></td>
    <td><code>string</code></td>
    <td>The session action ID. (pattern: &lt;code&gt;sessionaction-&#91;0-9a-f&#93;&#123;32&#125;-(0|(&#91;1-9&#93;&#91;0-9&#93;&#123;0,9&#125;))&lt;/code&gt;)</td>
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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the session action. (ASSIGNED, RUNNING, CANCELING, SUCCEEDED, FAILED, INTERRUPTED, CANCELED, NEVER_ATTEMPTED, SCHEDULED, RECLAIMING, RECLAIMED)</td>
</tr>
<tr>
    <td><CopyableCode code="workerUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Linux timestamp of the date and time the session action was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_session_actions">

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
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>The session action definition.</td>
</tr>
<tr>
    <td><CopyableCode code="endedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource ended running.</td>
</tr>
<tr>
    <td><CopyableCode code="manifests" /></td>
    <td><code>array</code></td>
    <td>The list of manifest properties that describe file attachments for the task run.</td>
</tr>
<tr>
    <td><CopyableCode code="progressPercent" /></td>
    <td><code>number (float)</code></td>
    <td>The completion percentage for the session action.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionActionId" /></td>
    <td><code>string</code></td>
    <td>The session action ID. (pattern: &lt;code&gt;sessionaction-&#91;0-9a-f&#93;&#123;32&#125;-(0|(&#91;1-9&#93;&#91;0-9&#93;&#123;0,9&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource started running.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the session action. (ASSIGNED, RUNNING, CANCELING, SUCCEEDED, FAILED, INTERRUPTED, CANCELED, NEVER_ATTEMPTED, SCHEDULED, RECLAIMING, RECLAIMED)</td>
</tr>
<tr>
    <td><CopyableCode code="workerUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Linux timestamp of the last date and time that the session action was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get_session_action">

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
    <td>A list of errors for session actions that could not be retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionActions" /></td>
    <td><code>array</code></td>
    <td>A list of session actions that were successfully retrieved.</td>
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
    <td><a href="#get_session_action"><CopyableCode code="get_session_action" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-session_action_id"><code>session_action_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a session action for the job.</td>
</tr>
<tr>
    <td><a href="#list_session_actions"><CopyableCode code="list_session_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-sessionId"><code>sessionId</code></a>, <a href="#parameter-taskId"><code>taskId</code></a></td>
    <td>Lists session actions.</td>
</tr>
<tr>
    <td><a href="#batch_get_session_action"><CopyableCode code="batch_get_session_action" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves multiple session actions in a single request. This is a batch version of the GetSessionAction API. The result of getting each session action is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.</td>
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
    <td>The farm ID for the session actions list.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The job ID for the session actions list.</td>
</tr>
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The queue ID for the session actions list.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_action_id">
    <td><CopyableCode code="session_action_id" /></td>
    <td><code>string</code></td>
    <td>The session action ID for the session.</td>
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
<tr id="parameter-sessionId">
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The session ID to include on the sessions action list.</td>
</tr>
<tr id="parameter-taskId">
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>The task ID for the session actions list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_session_action"
    values={[
        { label: 'get_session_action', value: 'get_session_action' },
        { label: 'list_session_actions', value: 'list_session_actions' },
        { label: 'batch_get_session_action', value: 'batch_get_session_action' }
    ]}
>
<TabItem value="get_session_action">

Gets a session action for the job.

```sql
SELECT
acquiredLimits,
definition,
endedAt,
manifests,
processExitCode,
progressMessage,
progressPercent,
sessionActionId,
sessionId,
startedAt,
status,
workerUpdatedAt
FROM aws.deadline.session_actions
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND job_id = '{{ job_id }}' -- required
AND session_action_id = '{{ session_action_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_session_actions">

Lists session actions.

```sql
SELECT
definition,
endedAt,
manifests,
progressPercent,
sessionActionId,
startedAt,
status,
workerUpdatedAt
FROM aws.deadline.session_actions
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND sessionId = '{{ sessionId }}'
AND taskId = '{{ taskId }}'
;
```
</TabItem>
<TabItem value="batch_get_session_action">

Retrieves multiple session actions in a single request. This is a batch version of the GetSessionAction API. The result of getting each session action is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.

```sql
SELECT
errors,
sessionActions
FROM aws.deadline.session_actions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
