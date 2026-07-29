--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
  - bedrock_agentcore
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_sessions"
    values={[
        { label: 'list_sessions', value: 'list_sessions' }
    ]}
>
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
    <td><CopyableCode code="actor_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the actor associated with the session. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_/&#93;*(?::&#91;a-zA-Z0-9-_/&#93;+)*&#91;a-zA-Z0-9-_/&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the session. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_sessions"><CopyableCode code="list_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-actor_id"><code>actor_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists sessions in an AgentCore Memory resource based on specified criteria. We recommend using pagination to ensure that the operation returns quickly and successfully. Empty sessions are automatically deleted after one day. To use this operation, you must have the bedrock-agentcore:ListSessions permission.</td>
</tr>
<tr>
    <td><a href="#update_browser_stream"><CopyableCode code="update_browser_stream" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-browser_identifier"><code>browser_identifier</code></a>, <a href="#parameter-sessionId"><code>sessionId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-streamUpdate"><code>streamUpdate</code></a></td>
    <td></td>
    <td>Updates a browser stream. To use this operation, you must have permissions to perform the bedrock:UpdateBrowserStream action.</td>
</tr>
<tr>
    <td><a href="#save_browser_session_profile"><CopyableCode code="save_browser_session_profile" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-profile_identifier"><code>profile_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-browserIdentifier"><code>browserIdentifier</code></a>, <a href="#parameter-sessionId"><code>sessionId</code></a></td>
    <td><a href="#parameter-X-Amzn-Trace-Id"><code>X-Amzn-Trace-Id</code></a>, <a href="#parameter-traceparent"><code>traceparent</code></a></td>
    <td>Saves the current state of a browser session as a reusable profile in Amazon Bedrock AgentCore. A browser profile captures persistent browser data such as cookies and local storage from an active session, enabling you to reuse this data in future browser sessions. To save a browser session profile, you must specify the profile identifier, browser identifier, and session ID. The session must be active when saving the profile. Once saved, the profile can be used with the StartBrowserSession operation to initialize new sessions with the stored browser state. Browser profiles are useful for scenarios that require persistent authentication, maintaining user preferences across sessions, or continuing tasks that depend on previously stored browser data. The following operations are related to SaveBrowserSessionProfile: StartBrowserSession GetBrowserSession</td>
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
<tr id="parameter-actor_id">
    <td><CopyableCode code="actor_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the actor for which to list sessions.</td>
</tr>
<tr id="parameter-browser_identifier">
    <td><CopyableCode code="browser_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the browser.</td>
</tr>
<tr id="parameter-memory_id">
    <td><CopyableCode code="memory_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the AgentCore Memory resource for which to list sessions.</td>
</tr>
<tr id="parameter-profile_identifier">
    <td><CopyableCode code="profile_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the browser profile. This identifier is used to reference the profile when starting new browser sessions. The identifier must follow the pattern of an alphanumeric name (up to 48 characters) followed by a hyphen and a 10-character alphanumeric suffix.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-sessionId">
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the browser session.</td>
</tr>
<tr id="parameter-X-Amzn-Trace-Id">
    <td><CopyableCode code="X-Amzn-Trace-Id" /></td>
    <td><code>string</code></td>
    <td>The trace identifier for request tracking.</td>
</tr>
<tr id="parameter-traceparent">
    <td><CopyableCode code="traceparent" /></td>
    <td><code>string</code></td>
    <td>The parent trace information for distributed tracing.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_sessions"
    values={[
        { label: 'list_sessions', value: 'list_sessions' }
    ]}
>
<TabItem value="list_sessions">

Lists sessions in an AgentCore Memory resource based on specified criteria. We recommend using pagination to ensure that the operation returns quickly and successfully. Empty sessions are automatically deleted after one day. To use this operation, you must have the bedrock-agentcore:ListSessions permission.

```sql
SELECT
actor_id,
created_at,
session_id
FROM aws.bedrock_agentcore.sessions
WHERE memory_id = '{{ memory_id }}' -- required
AND actor_id = '{{ actor_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_browser_stream"
    values={[
        { label: 'update_browser_stream', value: 'update_browser_stream' }
    ]}
>
<TabItem value="update_browser_stream">

Updates a browser stream. To use this operation, you must have permissions to perform the bedrock:UpdateBrowserStream action.

```sql
UPDATE aws.bedrock_agentcore.sessions
SET 
streamUpdate = '{{ streamUpdate }}',
clientToken = '{{ clientToken }}'
WHERE 
browser_identifier = '{{ browser_identifier }}' --required
AND sessionId = '{{ sessionId }}' --required
AND region = '{{ region }}' --required
AND streamUpdate = '{{ streamUpdate }}' --required
RETURNING
browser_identifier,
session_id,
streams,
updated_at;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="save_browser_session_profile"
    values={[
        { label: 'save_browser_session_profile', value: 'save_browser_session_profile' }
    ]}
>
<TabItem value="save_browser_session_profile">

Saves the current state of a browser session as a reusable profile in Amazon Bedrock AgentCore. A browser profile captures persistent browser data such as cookies and local storage from an active session, enabling you to reuse this data in future browser sessions. To save a browser session profile, you must specify the profile identifier, browser identifier, and session ID. The session must be active when saving the profile. Once saved, the profile can be used with the StartBrowserSession operation to initialize new sessions with the stored browser state. Browser profiles are useful for scenarios that require persistent authentication, maintaining user preferences across sessions, or continuing tasks that depend on previously stored browser data. The following operations are related to SaveBrowserSessionProfile: StartBrowserSession GetBrowserSession

```sql
EXEC aws.bedrock_agentcore.sessions.save_browser_session_profile 
@profile_identifier='{{ profile_identifier }}' --required, 
@region='{{ region }}' --required, 
@X-Amzn-Trace-Id='{{ X-Amzn-Trace-Id }}', 
@traceparent='{{ traceparent }}' 
@@json=
'{
"browserIdentifier": "{{ browserIdentifier }}", 
"sessionId": "{{ sessionId }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
