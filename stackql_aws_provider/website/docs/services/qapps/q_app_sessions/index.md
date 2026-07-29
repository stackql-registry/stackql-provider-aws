--- 
title: q_app_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - q_app_sessions
  - qapps
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

Creates, updates, deletes, gets or lists a <code>q_app_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="q_app_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qapps.q_app_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_q_app_session"
    values={[
        { label: 'get_q_app_session', value: 'get_q_app_session' }
    ]}
>
<TabItem value="get_q_app_session">

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
    <td><CopyableCode code="app_version" /></td>
    <td><code>integer</code></td>
    <td>The version of the Q App used for the session.</td>
</tr>
<tr>
    <td><CopyableCode code="card_status" /></td>
    <td><code>object</code></td>
    <td>The current status for each card in the Q App session.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_published_app_version" /></td>
    <td><code>integer</code></td>
    <td>The latest published version of the Q App used for the session.</td>
</tr>
<tr>
    <td><CopyableCode code="session_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Q App session.</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Q App session.</td>
</tr>
<tr>
    <td><CopyableCode code="session_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Q App session.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Q App session. (IN_PROGRESS, WAITING, COMPLETED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="user_is_host" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the current user is the owner of the Q App data collection session.</td>
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
    <td><a href="#get_q_app_session"><CopyableCode code="get_q_app_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-sessionId"><code>sessionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current state and results for an active session of an Amazon Q App.</td>
</tr>
<tr>
    <td><a href="#update_q_app_session"><CopyableCode code="update_q_app_session" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sessionId"><code>sessionId</code></a></td>
    <td></td>
    <td>Updates the session for a given Q App sessionId. This is only valid when at least one card of the session is in the WAITING state. Data for each WAITING card can be provided as input. If inputs are not provided, the call will be accepted but session will not move forward. Inputs for cards that are not in the WAITING status will be ignored.</td>
</tr>
<tr>
    <td><a href="#export_q_app_session_data"><CopyableCode code="export_q_app_session_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sessionId"><code>sessionId</code></a></td>
    <td></td>
    <td>Exports the collected data of a Q App data collection session.</td>
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
<tr id="parameter-instance-id">
    <td><CopyableCode code="instance-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q Business application environment instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-sessionId">
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Q App session to retrieve.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_q_app_session"
    values={[
        { label: 'get_q_app_session', value: 'get_q_app_session' }
    ]}
>
<TabItem value="get_q_app_session">

Retrieves the current state and results for an active session of an Amazon Q App.

```sql
SELECT
app_version,
card_status,
latest_published_app_version,
session_arn,
session_id,
session_name,
status,
user_is_host
FROM aws.qapps.q_app_sessions
WHERE `instance-id` = '{{ instance-id }}' -- required
AND sessionId = '{{ sessionId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_q_app_session"
    values={[
        { label: 'update_q_app_session', value: 'update_q_app_session' }
    ]}
>
<TabItem value="update_q_app_session">

Updates the session for a given Q App sessionId. This is only valid when at least one card of the session is in the WAITING state. Data for each WAITING card can be provided as input. If inputs are not provided, the call will be accepted but session will not move forward. Inputs for cards that are not in the WAITING status will be ignored.

```sql
UPDATE aws.qapps.q_app_sessions
SET 
sessionId = '{{ sessionId }}',
values = '{{ values }}'
WHERE 
`instance-id` = '{{ instance-id }}' --required
AND region = '{{ region }}' --required
AND sessionId = '{{ sessionId }}' --required
RETURNING
session_arn,
session_id;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_q_app_session_data"
    values={[
        { label: 'export_q_app_session_data', value: 'export_q_app_session_data' }
    ]}
>
<TabItem value="export_q_app_session_data">

Exports the collected data of a Q App data collection session.

```sql
EXEC aws.qapps.q_app_sessions.export_q_app_session_data 
@instance-id='{{ instance-id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"sessionId": "{{ sessionId }}"
}'
;
```
</TabItem>
</Tabs>
