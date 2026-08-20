--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
  - emr
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.sessions" /></td></tr>
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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the session. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the session.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the cluster that the session belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the session was terminated or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_configurations" /></td>
    <td><code>array</code></td>
    <td>The configuration overrides for the session. Only runtime configuration overrides are supported.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The execution role ARN for the session. Amazon EMR uses this role to access Amazon Web Services resources on your behalf during session execution. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):iam::(\d&#123;12&#125;)?:(role((\u002F)|(\u002F&#91;\u0021-\u007F&#93;+\u002F))&#91;\w+=,.@-&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the session.</td>
</tr>
<tr>
    <td><CopyableCode code="idle_since" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the session last entered the IDLE state.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_configuration" /></td>
    <td><code>object</code></td>
    <td>The monitoring configuration for the session.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the session, if one was provided at creation time. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="release_label" /></td>
    <td><code>string</code></td>
    <td>The Amazon EMR release label of the cluster that the session is running on. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="server_url" /></td>
    <td><code>string</code></td>
    <td>The Spark Connect server URL for the session. Use this URL with the Credentials returned by GetSessionEndpoint to connect directly to the session over VPC peering. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="session_idle_timeout_in_minutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The idle timeout, in minutes. If the session is idle for this duration, Amazon EMR automatically terminates it.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the session entered the STARTED state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the session. Valid values are SUBMITTED, STARTING, STARTED, IDLE, BUSY, TERMINATING, TERMINATED, and FAILED. (SUBMITTED, STARTING, STARTED, IDLE, BUSY, TERMINATING, TERMINATED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="state_change_reason" /></td>
    <td><code>string</code></td>
    <td>A human-readable message describing the most recent state change. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the session.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the session. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the session.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the cluster that the session belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the session was terminated or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_configurations" /></td>
    <td><code>array</code></td>
    <td>The configuration overrides for the session. Only runtime configuration overrides are supported.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The execution role ARN for the session. Amazon EMR uses this role to access Amazon Web Services resources on your behalf during session execution. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):iam::(\d&#123;12&#125;)?:(role((\u002F)|(\u002F&#91;\u0021-\u007F&#93;+\u002F))&#91;\w+=,.@-&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the session.</td>
</tr>
<tr>
    <td><CopyableCode code="idle_since" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the session last entered the IDLE state.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_configuration" /></td>
    <td><code>object</code></td>
    <td>The monitoring configuration for the session.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the session, if one was provided at creation time. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="release_label" /></td>
    <td><code>string</code></td>
    <td>The Amazon EMR release label of the cluster that the session is running on. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="server_url" /></td>
    <td><code>string</code></td>
    <td>The Spark Connect server URL for the session. Use this URL with the Credentials returned by GetSessionEndpoint to connect directly to the session over VPC peering. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="session_idle_timeout_in_minutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The idle timeout, in minutes. If the session is idle for this duration, Amazon EMR automatically terminates it.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the session entered the STARTED state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the session. Valid values are SUBMITTED, STARTING, STARTED, IDLE, BUSY, TERMINATING, TERMINATED, and FAILED. (SUBMITTED, STARTING, STARTED, IDLE, BUSY, TERMINATING, TERMINATED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="state_change_reason" /></td>
    <td><code>string</code></td>
    <td>A human-readable message describing the most recent state change. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the session.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information about a session.</td>
</tr>
<tr>
    <td><a href="#list_sessions"><CopyableCode code="list_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the sessions on a cluster. You can filter the results by session state. Newer sessions are returned first.</td>
</tr>
<tr>
    <td><a href="#terminate_session"><CopyableCode code="terminate_session" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Terminates an active session. After you call this operation, the session enters the TERMINATING state and then transitions to TERMINATED.</td>
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
    defaultValue="get_session"
    values={[
        { label: 'get_session', value: 'get_session' },
        { label: 'list_sessions', value: 'list_sessions' }
    ]}
>
<TabItem value="get_session">

Returns detailed information about a session.

```sql
SELECT
account_id,
arn,
cluster_id,
created_at,
ended_at,
engine_configurations,
execution_role_arn,
id,
idle_since,
monitoring_configuration,
name,
release_label,
server_url,
session_idle_timeout_in_minutes,
started_at,
state,
state_change_reason,
tags,
updated_at
FROM aws.emr.sessions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sessions">

Lists the sessions on a cluster. You can filter the results by session state. Newer sessions are returned first.

```sql
SELECT
account_id,
arn,
cluster_id,
created_at,
ended_at,
engine_configurations,
execution_role_arn,
id,
idle_since,
monitoring_configuration,
name,
release_label,
server_url,
session_idle_timeout_in_minutes,
started_at,
state,
state_change_reason,
tags,
updated_at
FROM aws.emr.sessions
WHERE region = '{{ region }}' -- required
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

Terminates an active session. After you call this operation, the session enters the TERMINATING state and then transitions to TERMINATED.

```sql
DELETE FROM aws.emr.sessions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
