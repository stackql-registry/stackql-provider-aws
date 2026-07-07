--- 
title: proxy_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - proxy_sessions
  - chime_sdk_voice
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

Creates, updates, deletes, gets or lists a <code>proxy_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="proxy_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.proxy_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_proxy_session"
    values={[
        { label: 'get_proxy_session', value: 'get_proxy_session' },
        { label: 'list_proxy_sessions', value: 'list_proxy_sessions' }
    ]}
>
<TabItem value="get_proxy_session">

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
    <td><CopyableCode code="Capabilities" /></td>
    <td><code>array</code></td>
    <td>The proxy session capabilities.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The created time stamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="EndedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ended time stamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpiryMinutes" /></td>
    <td><code>integer</code></td>
    <td>The number of minutes allowed for the proxy session.</td>
</tr>
<tr>
    <td><CopyableCode code="GeoMatchLevel" /></td>
    <td><code>string</code></td>
    <td>The preference for matching the country or area code of the proxy phone number with that of the first participant. (Country, AreaCode)</td>
</tr>
<tr>
    <td><CopyableCode code="GeoMatchParams" /></td>
    <td><code>object</code></td>
    <td>The country and area code for a proxy phone number in a proxy phone session.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The proxy session name.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberSelectionBehavior" /></td>
    <td><code>string</code></td>
    <td>The preference for proxy phone number reuse, or stickiness, between the same participants across sessions. (PreferSticky, AvoidSticky)</td>
</tr>
<tr>
    <td><CopyableCode code="Participants" /></td>
    <td><code>array</code></td>
    <td>The proxy session participants.</td>
</tr>
<tr>
    <td><CopyableCode code="ProxySessionId" /></td>
    <td><code>string</code></td>
    <td>The proxy session ID. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The proxy session status. (Open, InProgress, Closed)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The updated time stamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="VoiceConnectorId" /></td>
    <td><code>string</code></td>
    <td>The Voice Connector ID. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_proxy_sessions">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="ProxySessions" /></td>
    <td><code>array</code></td>
    <td>The proxy sessions' details.</td>
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
    <td><a href="#get_proxy_session"><CopyableCode code="get_proxy_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-proxy_session_id"><code>proxy_session_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified proxy session details for the specified Amazon Chime SDK Voice Connector.</td>
</tr>
<tr>
    <td><a href="#list_proxy_sessions"><CopyableCode code="list_proxy_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists the proxy sessions for the specified Amazon Chime SDK Voice Connector.</td>
</tr>
<tr>
    <td><a href="#create_proxy_session"><CopyableCode code="create_proxy_session" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ParticipantPhoneNumbers"><code>ParticipantPhoneNumbers</code></a>, <a href="#parameter-Capabilities"><code>Capabilities</code></a></td>
    <td></td>
    <td>Creates a proxy session for the specified Amazon Chime SDK Voice Connector for the specified participant phone numbers.</td>
</tr>
<tr>
    <td><a href="#update_proxy_session"><CopyableCode code="update_proxy_session" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-proxy_session_id"><code>proxy_session_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Capabilities"><code>Capabilities</code></a></td>
    <td></td>
    <td>Updates the specified proxy session details, such as voice or SMS capabilities.</td>
</tr>
<tr>
    <td><a href="#delete_proxy_session"><CopyableCode code="delete_proxy_session" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-proxy_session_id"><code>proxy_session_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified proxy session from the specified Amazon Chime SDK Voice Connector.</td>
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
<tr id="parameter-proxy_session_id">
    <td><CopyableCode code="proxy_session_id" /></td>
    <td><code>string</code></td>
    <td>The proxy session ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-voice_connector_id">
    <td><CopyableCode code="voice_connector_id" /></td>
    <td><code>string</code></td>
    <td>The Voice Connector ID.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The proxy session status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_proxy_session"
    values={[
        { label: 'get_proxy_session', value: 'get_proxy_session' },
        { label: 'list_proxy_sessions', value: 'list_proxy_sessions' }
    ]}
>
<TabItem value="get_proxy_session">

Retrieves the specified proxy session details for the specified Amazon Chime SDK Voice Connector.

```sql
SELECT
Capabilities,
CreatedTimestamp,
EndedTimestamp,
ExpiryMinutes,
GeoMatchLevel,
GeoMatchParams,
Name,
NumberSelectionBehavior,
Participants,
ProxySessionId,
Status,
UpdatedTimestamp,
VoiceConnectorId
FROM aws.chime_sdk_voice.proxy_sessions
WHERE voice_connector_id = '{{ voice_connector_id }}' -- required
AND proxy_session_id = '{{ proxy_session_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_proxy_sessions">

Lists the proxy sessions for the specified Amazon Chime SDK Voice Connector.

```sql
SELECT
NextToken,
ProxySessions
FROM aws.chime_sdk_voice.proxy_sessions
WHERE voice_connector_id = '{{ voice_connector_id }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_proxy_session"
    values={[
        { label: 'create_proxy_session', value: 'create_proxy_session' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_proxy_session">

Creates a proxy session for the specified Amazon Chime SDK Voice Connector for the specified participant phone numbers.

```sql
INSERT INTO aws.chime_sdk_voice.proxy_sessions (
ParticipantPhoneNumbers,
Name,
ExpiryMinutes,
Capabilities,
NumberSelectionBehavior,
GeoMatchLevel,
GeoMatchParams,
voice_connector_id,
region
)
SELECT 
'{{ ParticipantPhoneNumbers }}' /* required */,
'{{ Name }}',
{{ ExpiryMinutes }},
'{{ Capabilities }}' /* required */,
'{{ NumberSelectionBehavior }}',
'{{ GeoMatchLevel }}',
'{{ GeoMatchParams }}',
'{{ voice_connector_id }}',
'{{ region }}'
RETURNING
ProxySession
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: proxy_sessions
  props:
    - name: voice_connector_id
      value: "{{ voice_connector_id }}"
      description: Required parameter for the proxy_sessions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the proxy_sessions resource.
    - name: ParticipantPhoneNumbers
      value:
        - "{{ ParticipantPhoneNumbers }}"
    - name: Name
      value: "{{ Name }}"
    - name: ExpiryMinutes
      value: {{ ExpiryMinutes }}
    - name: Capabilities
      value:
        - "{{ Capabilities }}"
    - name: NumberSelectionBehavior
      value: "{{ NumberSelectionBehavior }}"
      valid_values: ['PreferSticky', 'AvoidSticky']
    - name: GeoMatchLevel
      value: "{{ GeoMatchLevel }}"
      valid_values: ['Country', 'AreaCode']
    - name: GeoMatchParams
      description: |
        The country and area code for a proxy phone number in a proxy phone session.
      value:
        Country: "{{ Country }}"
        AreaCode: "{{ AreaCode }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_proxy_session"
    values={[
        { label: 'update_proxy_session', value: 'update_proxy_session' }
    ]}
>
<TabItem value="update_proxy_session">

Updates the specified proxy session details, such as voice or SMS capabilities.

```sql
UPDATE aws.chime_sdk_voice.proxy_sessions
SET 
Capabilities = '{{ Capabilities }}',
ExpiryMinutes = {{ ExpiryMinutes }}
WHERE 
voice_connector_id = '{{ voice_connector_id }}' --required
AND proxy_session_id = '{{ proxy_session_id }}' --required
AND region = '{{ region }}' --required
AND Capabilities = '{{ Capabilities }}' --required
RETURNING
ProxySession;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_proxy_session"
    values={[
        { label: 'delete_proxy_session', value: 'delete_proxy_session' }
    ]}
>
<TabItem value="delete_proxy_session">

Deletes the specified proxy session from the specified Amazon Chime SDK Voice Connector.

```sql
DELETE FROM aws.chime_sdk_voice.proxy_sessions
WHERE voice_connector_id = '{{ voice_connector_id }}' --required
AND proxy_session_id = '{{ proxy_session_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
