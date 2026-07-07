--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
  - emr_serverless
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr_serverless.sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_session"
    values={[
        { label: 'get_session', value: 'get_session' },
        { label: 'list_sessions', value: 'list_sessions' }
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The optional name of the session. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the application that the session belongs to. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the session. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):emr-serverless:.+:(\d&#123;12&#125;):\/applications\/&#91;0-9a-zA-Z&#93;+\/sessions\/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="billedResourceUtilization" /></td>
    <td><code>object</code></td>
    <td>The aggregate vCPU, memory, and storage that Amazon Web Services has billed for the session. The billed resources include a 1-minute minimum usage for workers, plus additional storage over 20 GB per worker. Note that billed resources do not include usage for idle pre-initialized workers.</td>
</tr>
<tr>
    <td><CopyableCode code="configurationOverrides" /></td>
    <td><code>object</code></td>
    <td>The configuration overrides for the session, including runtime configuration properties.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The IAM principal that created the session. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):(iam|sts)::(\d&#123;12&#125;)?:&#91;\w/+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the session was terminated or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="executionRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the execution role for the session. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):iam::(&#91;0-9&#93;&#123;12&#125;):(role((\u002F)|(\u002F&#91;\u0021-\u007F&#93;+\u002F))&#91;\w+=,.@-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="idleSince" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the session became idle.</td>
</tr>
<tr>
    <td><CopyableCode code="idleTimeoutMinutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The idle timeout in minutes for the session. After the session remains idle for this duration, it is automatically terminated.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfiguration" /></td>
    <td><code>object</code></td>
    <td>The network configuration for customer VPC connectivity.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseLabel" /></td>
    <td><code>string</code></td>
    <td>The Amazon EMR release label associated with the session. (pattern: &lt;code&gt;&#91;A-Za-z0-9._/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the session. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the session moved to a running state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the session. (SUBMITTED, STARTING, STARTED, IDLE, BUSY, FAILED, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Additional details about the current state of the session. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the session.</td>
</tr>
<tr>
    <td><CopyableCode code="totalExecutionDurationSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total execution duration of the session in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="totalResourceUtilization" /></td>
    <td><code>object</code></td>
    <td>The aggregate vCPU, memory, and storage resources used from the time the session starts to execute, until the time the session terminates, rounded up to the nearest second.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the session was last updated.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The optional name of the session. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the application that the session belongs to. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the session. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):emr-serverless:.+:(\d&#123;12&#125;):\/applications\/&#91;0-9a-zA-Z&#93;+\/sessions\/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The IAM principal that created the session. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):(iam|sts)::(\d&#123;12&#125;)?:&#91;\w/+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="executionRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the execution role for the session. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):iam::(&#91;0-9&#93;&#123;12&#125;):(role((\u002F)|(\u002F&#91;\u0021-\u007F&#93;+\u002F))&#91;\w+=,.@-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="releaseLabel" /></td>
    <td><code>string</code></td>
    <td>The Amazon EMR release label associated with the session. (pattern: &lt;code&gt;&#91;A-Za-z0-9._/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the session. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the session. (SUBMITTED, STARTING, STARTED, IDLE, BUSY, FAILED, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Additional details about the current state of the session. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the session was last updated.</td>
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
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays detailed information about a session.</td>
</tr>
<tr>
    <td><a href="#list_sessions"><CopyableCode code="list_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-states"><code>states</code></a>, <a href="#parameter-createdAtAfter"><code>createdAtAfter</code></a>, <a href="#parameter-createdAtBefore"><code>createdAtBefore</code></a></td>
    <td>Lists sessions for the specified application. You can filter sessions by state and creation time.</td>
</tr>
<tr>
    <td><a href="#terminate_session"><CopyableCode code="terminate_session" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Terminates the specified session. After you terminate a session, it enters the TERMINATING state and then the TERMINATED state. You can still access the Spark History Server for a terminated session through the GetResourceDashboard operation.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application that the session belongs to.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the session to terminate.</td>
</tr>
<tr id="parameter-createdAtAfter">
    <td><CopyableCode code="createdAtAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>The lower bound of the option to filter by creation date and time.</td>
</tr>
<tr id="parameter-createdAtBefore">
    <td><CopyableCode code="createdAtBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>The upper bound of the option to filter by creation date and time.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of sessions to return in each page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of session results.</td>
</tr>
<tr id="parameter-states">
    <td><CopyableCode code="states" /></td>
    <td><code>array</code></td>
    <td>An optional filter for session states. Note that if this filter contains multiple states, the resulting list will be grouped by the state.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_session"
    values={[
        { label: 'get_session', value: 'get_session' },
        { label: 'list_sessions', value: 'list_sessions' }
    ]}
>
<TabItem value="get_session">

Displays detailed information about a session.

```sql
SELECT
name,
applicationId,
arn,
billedResourceUtilization,
configurationOverrides,
createdAt,
createdBy,
endedAt,
executionRoleArn,
idleSince,
idleTimeoutMinutes,
networkConfiguration,
releaseLabel,
sessionId,
startedAt,
state,
stateDetails,
tags,
totalExecutionDurationSeconds,
totalResourceUtilization,
updatedAt
FROM aws.emr_serverless.sessions
WHERE application_id = '{{ application_id }}' -- required
AND session_id = '{{ session_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sessions">

Lists sessions for the specified application. You can filter sessions by state and creation time.

```sql
SELECT
name,
applicationId,
arn,
createdAt,
createdBy,
executionRoleArn,
releaseLabel,
sessionId,
state,
stateDetails,
updatedAt
FROM aws.emr_serverless.sessions
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND states = '{{ states }}'
AND createdAtAfter = '{{ createdAtAfter }}'
AND createdAtBefore = '{{ createdAtBefore }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate_session"
    values={[
        { label: 'terminate_session', value: 'terminate_session' }
    ]}
>
<TabItem value="terminate_session">

Terminates the specified session. After you terminate a session, it enters the TERMINATING state and then the TERMINATED state. You can still access the Spark History Server for a terminated session through the GetResourceDashboard operation.

```sql
DELETE FROM aws.emr_serverless.sessions
WHERE application_id = '{{ application_id }}' --required
AND session_id = '{{ session_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
