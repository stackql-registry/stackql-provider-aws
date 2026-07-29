--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
  - appstream
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.sessions" /></td></tr>
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
    <td><CopyableCode code="authentication_type" /></td>
    <td><code>string</code></td>
    <td>The authentication method. The user is authenticated using a streaming URL (API) or SAML 2.0 federation (SAML). (API, SAML, USERPOOL, AWS_AD)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_state" /></td>
    <td><code>string</code></td>
    <td>Specifies whether a user is connected to the streaming session. (CONNECTED, NOT_CONNECTED)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_name" /></td>
    <td><code>string</code></td>
    <td>The name of the fleet for the streaming session.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the streaming session.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_drain_status" /></td>
    <td><code>string</code></td>
    <td>The drain status of the instance hosting the streaming session. This only applies to multi-session fleets. (ACTIVE, DRAINING, NOT_APPLICABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the instance hosting the session.</td>
</tr>
<tr>
    <td><CopyableCode code="max_expiration_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the streaming session is set to expire. This time is based on the MaxUserDurationinSeconds value, which determines the maximum length of time that a streaming session can run. A streaming session might end earlier than the time specified in SessionMaxExpirationTime, when the DisconnectTimeOutInSeconds elapses or the user chooses to end his or her session. If the DisconnectTimeOutInSeconds elapses, or the user chooses to end his or her session, the streaming instance is terminated and the streaming session ends.</td>
</tr>
<tr>
    <td><CopyableCode code="network_access_configuration" /></td>
    <td><code>object</code></td>
    <td>Describes the network details of the fleet or image builder instance.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_name" /></td>
    <td><code>string</code></td>
    <td>The name of the stack for the streaming session.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when a streaming instance is dedicated for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the streaming session. (ACTIVE, PENDING, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user for whom the session was created.</td>
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
    <td>Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.</td>
</tr>
<tr>
    <td><a href="#drain_session_instance"><CopyableCode code="drain_session_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SessionId"><code>SessionId</code></a></td>
    <td></td>
    <td>Drains the instance hosting the specified streaming session. The instance stops accepting new sessions while existing sessions continue uninterrupted. Once all sessions end, the instance is reclaimed and replaced. This only applies to multi-session fleets.</td>
</tr>
<tr>
    <td><a href="#expire_session"><CopyableCode code="expire_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SessionId"><code>SessionId</code></a></td>
    <td></td>
    <td>Immediately stops the specified streaming session.</td>
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

Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.

```sql
SELECT
authentication_type,
connection_state,
fleet_name,
id,
instance_drain_status,
instance_id,
max_expiration_time,
network_access_configuration,
stack_name,
start_time,
state,
user_id
FROM aws.appstream.sessions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="drain_session_instance"
    values={[
        { label: 'drain_session_instance', value: 'drain_session_instance' },
        { label: 'expire_session', value: 'expire_session' }
    ]}
>
<TabItem value="drain_session_instance">

Drains the instance hosting the specified streaming session. The instance stops accepting new sessions while existing sessions continue uninterrupted. Once all sessions end, the instance is reclaimed and replaced. This only applies to multi-session fleets.

```sql
EXEC aws.appstream.sessions.drain_session_instance 
@region='{{ region }}' --required 
@@json=
'{
"SessionId": "{{ SessionId }}"
}'
;
```
</TabItem>
<TabItem value="expire_session">

Immediately stops the specified streaming session.

```sql
EXEC aws.appstream.sessions.expire_session 
@region='{{ region }}' --required 
@@json=
'{
"SessionId": "{{ SessionId }}"
}'
;
```
</TabItem>
</Tabs>
