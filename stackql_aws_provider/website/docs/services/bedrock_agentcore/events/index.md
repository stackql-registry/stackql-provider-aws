--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event"
    values={[
        { label: 'get_event', value: 'get_event' },
        { label: 'list_events', value: 'list_events' }
    ]}
>
<TabItem value="get_event">

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
    <td>The identifier of the actor associated with the event. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_/&#93;*(?::&#91;a-zA-Z0-9-_/&#93;+)*&#91;a-zA-Z0-9-_/&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="branch" /></td>
    <td><code>object</code></td>
    <td>Contains information about a branch in an AgentCore Memory resource. Branches allow for organizing events into different conversation threads or paths.</td>
</tr>
<tr>
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the event. (pattern: &lt;code&gt;&#91;0-9&#93;+#&#91;a-fA-F0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the event occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="memory_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the AgentCore Memory resource containing the event. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata associated with an event.</td>
</tr>
<tr>
    <td><CopyableCode code="payload" /></td>
    <td><code>array</code></td>
    <td>The content payload of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the session containing the event. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_events">

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
    <td>The identifier of the actor associated with the event. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_/&#93;*(?::&#91;a-zA-Z0-9-_/&#93;+)*&#91;a-zA-Z0-9-_/&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="branch" /></td>
    <td><code>object</code></td>
    <td>Contains information about a branch in an AgentCore Memory resource. Branches allow for organizing events into different conversation threads or paths.</td>
</tr>
<tr>
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the event. (pattern: &lt;code&gt;&#91;0-9&#93;+#&#91;a-fA-F0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the event occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="memory_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the AgentCore Memory resource containing the event. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata associated with an event.</td>
</tr>
<tr>
    <td><CopyableCode code="payload" /></td>
    <td><code>array</code></td>
    <td>The content payload of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the session containing the event. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_event"><CopyableCode code="get_event" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-actor_id"><code>actor_id</code></a>, <a href="#parameter-event_id"><code>event_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific event in an AgentCore Memory resource. To use this operation, you must have the bedrock-agentcore:GetEvent permission.</td>
</tr>
<tr>
    <td><a href="#list_events"><CopyableCode code="list_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-actor_id"><code>actor_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists events in an AgentCore Memory resource based on specified criteria. We recommend using pagination to ensure that the operation returns quickly and successfully. To use this operation, you must have the bedrock-agentcore:ListEvents permission.</td>
</tr>
<tr>
    <td><a href="#create_event"><CopyableCode code="create_event" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-actorId"><code>actorId</code></a>, <a href="#parameter-eventTimestamp"><code>eventTimestamp</code></a>, <a href="#parameter-payload"><code>payload</code></a></td>
    <td></td>
    <td>Creates an event in an AgentCore Memory resource. Events represent interactions or activities that occur within a session and are associated with specific actors. To use this operation, you must have the bedrock-agentcore:CreateEvent permission. This operation is subject to request rate limiting.</td>
</tr>
<tr>
    <td><a href="#delete_event"><CopyableCode code="delete_event" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-event_id"><code>event_id</code></a>, <a href="#parameter-actor_id"><code>actor_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an event from an AgentCore Memory resource. When you delete an event, it is permanently removed. To use this operation, you must have the bedrock-agentcore:DeleteEvent permission.</td>
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
    <td>The identifier of the actor associated with the event to delete.</td>
</tr>
<tr id="parameter-event_id">
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the event to delete.</td>
</tr>
<tr id="parameter-memory_id">
    <td><CopyableCode code="memory_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the AgentCore Memory resource from which to delete the event.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the session containing the event to delete.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_event"
    values={[
        { label: 'get_event', value: 'get_event' },
        { label: 'list_events', value: 'list_events' }
    ]}
>
<TabItem value="get_event">

Retrieves information about a specific event in an AgentCore Memory resource. To use this operation, you must have the bedrock-agentcore:GetEvent permission.

```sql
SELECT
actor_id,
branch,
event_id,
event_timestamp,
memory_id,
metadata,
payload,
session_id
FROM aws.bedrock_agentcore.events
WHERE memory_id = '{{ memory_id }}' -- required
AND session_id = '{{ session_id }}' -- required
AND actor_id = '{{ actor_id }}' -- required
AND event_id = '{{ event_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_events">

Lists events in an AgentCore Memory resource based on specified criteria. We recommend using pagination to ensure that the operation returns quickly and successfully. To use this operation, you must have the bedrock-agentcore:ListEvents permission.

```sql
SELECT
actor_id,
branch,
event_id,
event_timestamp,
memory_id,
metadata,
payload,
session_id
FROM aws.bedrock_agentcore.events
WHERE memory_id = '{{ memory_id }}' -- required
AND session_id = '{{ session_id }}' -- required
AND actor_id = '{{ actor_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_event"
    values={[
        { label: 'create_event', value: 'create_event' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_event">

Creates an event in an AgentCore Memory resource. Events represent interactions or activities that occur within a session and are associated with specific actors. To use this operation, you must have the bedrock-agentcore:CreateEvent permission. This operation is subject to request rate limiting.

```sql
INSERT INTO aws.bedrock_agentcore.events (
actorId,
sessionId,
eventTimestamp,
payload,
branch,
clientToken,
metadata,
memory_id,
region
)
SELECT 
'{{ actorId }}' /* required */,
'{{ sessionId }}',
'{{ eventTimestamp }}' /* required */,
'{{ payload }}' /* required */,
'{{ branch }}',
'{{ clientToken }}',
'{{ metadata }}',
'{{ memory_id }}',
'{{ region }}'
RETURNING
event
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: events
  props:
    - name: memory_id
      value: "{{ memory_id }}"
      description: Required parameter for the events resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the events resource.
    - name: actorId
      value: "{{ actorId }}"
    - name: sessionId
      value: "{{ sessionId }}"
    - name: eventTimestamp
      value: "{{ eventTimestamp }}"
    - name: payload
      value:
        - conversational:
            content:
              text: "{{ text }}"
            role: "{{ role }}"
          blob: "{{ blob }}"
    - name: branch
      description: |
        Contains information about a branch in an AgentCore Memory resource. Branches allow for organizing events into different conversation threads or paths.
      value:
        rootEventId: "{{ rootEventId }}"
        name: "{{ name }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: metadata
      value: "{{ metadata }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event"
    values={[
        { label: 'delete_event', value: 'delete_event' }
    ]}
>
<TabItem value="delete_event">

Deletes an event from an AgentCore Memory resource. When you delete an event, it is permanently removed. To use this operation, you must have the bedrock-agentcore:DeleteEvent permission.

```sql
DELETE FROM aws.bedrock_agentcore.events
WHERE memory_id = '{{ memory_id }}' --required
AND session_id = '{{ session_id }}' --required
AND event_id = '{{ event_id }}' --required
AND actor_id = '{{ actor_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
