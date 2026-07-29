--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
  - ssm
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_sessions"
    values={[
        { label: 'describe_sessions', value: 'describe_sessions' }
    ]}
>
<TabItem value="describe_sessions">

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
    <td><CopyableCode code="access_type" /></td>
    <td><code>string</code></td>
    <td>Standard access type is the default for Session Manager sessions. JustInTime is the access type for Just-in-time node access. (Standard, JustInTime)</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>string</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="document_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Session Manager SSM document used to define the parameters and plugin settings for the session. For example, SSM-SessionManagerRunShell. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in ISO-8601 Extended format, when the session was terminated.</td>
</tr>
<tr>
    <td><CopyableCode code="max_session_duration" /></td>
    <td><code>string</code></td>
    <td>The maximum duration of a session before it terminates. (pattern: &lt;code&gt;^(&#91;1-9&#93;|&#91;1-9&#93;&#91;0-9&#93;|&#91;1-9&#93;&#91;0-9&#93;&#91;0-9&#93;|1&#91;0-4&#93;&#91;0-3&#93;&#91;0-9&#93;|1440)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_url" /></td>
    <td><code>object</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services user that started the session.</td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>The reason for connecting to the instance. (pattern: &lt;code&gt;^.&#123;1,256&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the session.</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in ISO-8601 Extended format, when the session began.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the session. For example, "Connected" or "Terminated". (Connected, Connecting, Disconnected, Terminated, Terminating, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The managed node that the Session Manager session connected to.</td>
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
    <td><a href="#describe_sessions"><CopyableCode code="describe_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.</td>
</tr>
<tr>
    <td><a href="#terminate_session"><CopyableCode code="terminate_session" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the managed node. A terminated session can't be resumed.</td>
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
    defaultValue="describe_sessions"
    values={[
        { label: 'describe_sessions', value: 'describe_sessions' }
    ]}
>
<TabItem value="describe_sessions">

Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.

```sql
SELECT
access_type,
details,
document_name,
end_date,
max_session_duration,
output_url,
owner,
reason,
session_id,
start_date,
status,
target
FROM aws.ssm.sessions
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

Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the managed node. A terminated session can't be resumed.

```sql
DELETE FROM aws.ssm.sessions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
