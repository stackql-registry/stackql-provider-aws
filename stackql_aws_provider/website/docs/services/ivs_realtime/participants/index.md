--- 
title: participants
hide_title: false
hide_table_of_contents: false
keywords:
  - participants
  - ivs_realtime
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

Creates, updates, deletes, gets or lists a <code>participants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="participants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs_realtime.participants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_participant"
    values={[
        { label: 'get_participant', value: 'get_participant' },
        { label: 'list_participants', value: 'list_participants' }
    ]}
>
<TabItem value="get_participant">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Application-provided attributes to encode into the token and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.</td>
</tr>
<tr>
    <td><CopyableCode code="browser_name" /></td>
    <td><code>string</code></td>
    <td>The participant’s browser. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.,:;\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="browser_version" /></td>
    <td><code>string</code></td>
    <td>The participant’s browser version. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.,:;\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="first_join_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>ISO 8601 timestamp (returned as a string) when the participant first joined the stage session.</td>
</tr>
<tr>
    <td><CopyableCode code="ingest_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The participant’s ingest configuration. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:ingest-configuration/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="isp_name" /></td>
    <td><code>string</code></td>
    <td>The participant’s Internet Service Provider. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.,:;\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="os_name" /></td>
    <td><code>string</code></td>
    <td>The participant’s operating system. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.,:;\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="os_version" /></td>
    <td><code>string</code></td>
    <td>The participant’s operating system version. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.,:;\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="participant_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for this participant, assigned by IVS. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Type of ingest protocol that the participant employs for broadcasting. (UNKNOWN, WHIP, RTMP, RTMPS)</td>
</tr>
<tr>
    <td><CopyableCode code="published" /></td>
    <td><code>boolean</code></td>
    <td>Whether the participant ever published to the stage session.</td>
</tr>
<tr>
    <td><CopyableCode code="recording_s3_bucket_name" /></td>
    <td><code>string</code></td>
    <td>Name of the S3 bucket to where the participant is being recorded, if individual participant recording is enabled, or "" (empty string), if recording is not enabled. (pattern: &lt;code&gt;&#91;a-z0-9-.&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recording_s3_prefix" /></td>
    <td><code>string</code></td>
    <td>S3 prefix of the S3 bucket where the participant is being recorded, if individual participant recording is enabled, or "" (empty string), if recording is not enabled. If individual participant recording merge is enabled, and if a stage publisher disconnects from a stage and then reconnects, IVS tries to record to the same S3 prefix as the previous session. See Merge Fragmented Individual Participant Recordings. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recording_state" /></td>
    <td><code>string</code></td>
    <td>The participant’s recording state. (STARTING, ACTIVE, STOPPING, STOPPED, FAILED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="redundant_ingest" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether redundant ingest is enabled for the participant.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_state" /></td>
    <td><code>string</code></td>
    <td>The participant's replication state. (ACTIVE, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="replication_type" /></td>
    <td><code>string</code></td>
    <td>Indicates if the participant has been replicated to another stage or is a replica from another stage. Default: NONE. (SOURCE, REPLICA, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="sdk_version" /></td>
    <td><code>string</code></td>
    <td>The participant’s SDK version. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.,:;\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_session_id" /></td>
    <td><code>string</code></td>
    <td>ID of the session within the source stage, if replicationType is REPLICA. (pattern: &lt;code&gt;st-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_stage_arn" /></td>
    <td><code>string</code></td>
    <td>Source stage ARN from which this participant is replicated, if replicationType is REPLICA. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:stage/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Whether the participant is connected to or disconnected from the stage. (CONNECTED, DISCONNECTED)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>Customer-assigned name to help identify the token; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_participants">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If there are more participants than maxResults, use nextToken in the request to get the next set. (pattern: &lt;code&gt;&#91;a-zA-Z0-9+/=_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="participants" /></td>
    <td><code>array</code></td>
    <td>List of the matching participants (summary information only).</td>
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
    <td><a href="#get_participant"><CopyableCode code="get_participant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified participant token.</td>
</tr>
<tr>
    <td><a href="#list_participants"><CopyableCode code="list_participants" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all participants in a specified stage session.</td>
</tr>
<tr>
    <td><a href="#create_participant_token"><CopyableCode code="create_participant_token" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-stageArn"><code>stageArn</code></a></td>
    <td></td>
    <td>Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created. Encryption keys are owned by Amazon IVS and never used directly by your application.</td>
</tr>
<tr>
    <td><a href="#disconnect_participant"><CopyableCode code="disconnect_participant" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-stageArn"><code>stageArn</code></a>, <a href="#parameter-participantId"><code>participantId</code></a></td>
    <td></td>
    <td>Disconnects a specified participant from a specified stage. If the participant is publishing using an IngestConfiguration, DisconnectParticipant also updates the stageArn in the IngestConfiguration to be an empty string.</td>
</tr>
<tr>
    <td><a href="#start_participant_replication"><CopyableCode code="start_participant_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceStageArn"><code>sourceStageArn</code></a>, <a href="#parameter-destinationStageArn"><code>destinationStageArn</code></a>, <a href="#parameter-participantId"><code>participantId</code></a></td>
    <td></td>
    <td>Starts replicating a publishing participant from a source stage to a destination stage.</td>
</tr>
<tr>
    <td><a href="#stop_participant_replication"><CopyableCode code="stop_participant_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceStageArn"><code>sourceStageArn</code></a>, <a href="#parameter-destinationStageArn"><code>destinationStageArn</code></a>, <a href="#parameter-participantId"><code>participantId</code></a></td>
    <td></td>
    <td>Stops a replicated participant session.</td>
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
    defaultValue="get_participant"
    values={[
        { label: 'get_participant', value: 'get_participant' },
        { label: 'list_participants', value: 'list_participants' }
    ]}
>
<TabItem value="get_participant">

Gets information about the specified participant token.

```sql
SELECT
attributes,
browser_name,
browser_version,
first_join_time,
ingest_configuration_arn,
isp_name,
os_name,
os_version,
participant_id,
protocol,
published,
recording_s3_bucket_name,
recording_s3_prefix,
recording_state,
redundant_ingest,
replication_state,
replication_type,
sdk_version,
source_session_id,
source_stage_arn,
state,
user_id
FROM aws.ivs_realtime.participants
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_participants">

Lists all participants in a specified stage session.

```sql
SELECT
next_token,
participants
FROM aws.ivs_realtime.participants
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_participant_token"
    values={[
        { label: 'create_participant_token', value: 'create_participant_token' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_participant_token">

Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created. Encryption keys are owned by Amazon IVS and never used directly by your application.

```sql
INSERT INTO aws.ivs_realtime.participants (
stageArn,
duration,
userId,
attributes,
capabilities,
region
)
SELECT 
'{{ stageArn }}' /* required */,
{{ duration }},
'{{ userId }}',
'{{ attributes }}',
'{{ capabilities }}',
'{{ region }}'
RETURNING
participant_token
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: participants
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the participants resource.
    - name: stageArn
      value: "{{ stageArn }}"
    - name: duration
      value: {{ duration }}
    - name: userId
      value: "{{ userId }}"
    - name: attributes
      value: "{{ attributes }}"
    - name: capabilities
      value:
        - "{{ capabilities }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disconnect_participant"
    values={[
        { label: 'disconnect_participant', value: 'disconnect_participant' },
        { label: 'start_participant_replication', value: 'start_participant_replication' },
        { label: 'stop_participant_replication', value: 'stop_participant_replication' }
    ]}
>
<TabItem value="disconnect_participant">

Disconnects a specified participant from a specified stage. If the participant is publishing using an IngestConfiguration, DisconnectParticipant also updates the stageArn in the IngestConfiguration to be an empty string.

```sql
EXEC aws.ivs_realtime.participants.disconnect_participant 
@region='{{ region }}' --required 
@@json=
'{
"stageArn": "{{ stageArn }}", 
"participantId": "{{ participantId }}", 
"reason": "{{ reason }}"
}'
;
```
</TabItem>
<TabItem value="start_participant_replication">

Starts replicating a publishing participant from a source stage to a destination stage.

```sql
EXEC aws.ivs_realtime.participants.start_participant_replication 
@region='{{ region }}' --required 
@@json=
'{
"sourceStageArn": "{{ sourceStageArn }}", 
"destinationStageArn": "{{ destinationStageArn }}", 
"participantId": "{{ participantId }}", 
"reconnectWindowSeconds": {{ reconnectWindowSeconds }}, 
"attributes": "{{ attributes }}"
}'
;
```
</TabItem>
<TabItem value="stop_participant_replication">

Stops a replicated participant session.

```sql
EXEC aws.ivs_realtime.participants.stop_participant_replication 
@region='{{ region }}' --required 
@@json=
'{
"sourceStageArn": "{{ sourceStageArn }}", 
"destinationStageArn": "{{ destinationStageArn }}", 
"participantId": "{{ participantId }}"
}'
;
```
</TabItem>
</Tabs>
