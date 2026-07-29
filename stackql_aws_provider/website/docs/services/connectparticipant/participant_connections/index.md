--- 
title: participant_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - participant_connections
  - connectparticipant
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

Creates, updates, deletes, gets or lists a <code>participant_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="participant_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectparticipant.participant_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_participant_connection"><CopyableCode code="create_participant_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-X-Amz-Bearer"><code>X-Amz-Bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates the participant's connection. For security recommendations, see Amazon Connect Chat security best practices. For WebRTC security recommendations, see Amazon Connect WebRTC security best practices. ParticipantToken is used for invoking this API instead of ConnectionToken. The participant token is valid for the lifetime of the participant – until they are part of a contact. For WebRTC participants, if they leave or are disconnected for 60 seconds, a new participant needs to be created using the CreateParticipant API. For WEBSOCKET Type: The response URL for has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic. For chat, you need to publish the following on the established websocket connection: &#123;"topic":"aws/subscribe","content":&#123;"topics":&#91;"aws/chat"&#93;&#125;&#125; Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before. The expiry time for the connection token is different than the ChatDurationInMinutes. Expiry time for the connection token is 1 day. For WEBRTC_CONNECTION Type: The response includes connection data required for the client application to join the call using the Amazon Chime SDK client libraries. The WebRTCConnection response contains Meeting and Attendee information needed to establish the media connection. The attendee join token in WebRTCConnection response is valid for the lifetime of the participant in the call. If a participant leaves or is disconnected for 60 seconds, their participant credentials will no longer be valid, and a new participant will need to be created to rejoin the call. Message streaming support: This API can also be used together with the StartContactStreaming API to create a participant connection for chat contacts that are not using a websocket. For more information about message streaming, Enable real-time chat message streaming in the Amazon Connect Administrator Guide. Multi-user web, in-app, video calling support: For WebRTC calls, this API is used in conjunction with the CreateParticipant API to enable multi-party calling. The StartWebRTCContact API creates the initial contact and routes it to an agent, while CreateParticipant adds additional participants to the ongoing call. For more information about multi-party WebRTC calls, see Enable multi-user web, in-app, and video calling in the Amazon Connect Administrator Guide. Feature specifications: For information about feature specifications, such as the allowed number of open websocket connections per participant or maximum number of WebRTC participants, see Feature specifications in the Amazon Connect Administrator Guide. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.</td>
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
<tr id="parameter-X-Amz-Bearer">
    <td><CopyableCode code="X-Amz-Bearer" /></td>
    <td><code>string</code></td>
    <td>This is a header parameter. The ParticipantToken as obtained from StartChatContact API response.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_participant_connection"
    values={[
        { label: 'create_participant_connection', value: 'create_participant_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_participant_connection">

Creates the participant's connection. For security recommendations, see Amazon Connect Chat security best practices. For WebRTC security recommendations, see Amazon Connect WebRTC security best practices. ParticipantToken is used for invoking this API instead of ConnectionToken. The participant token is valid for the lifetime of the participant – until they are part of a contact. For WebRTC participants, if they leave or are disconnected for 60 seconds, a new participant needs to be created using the CreateParticipant API. For WEBSOCKET Type: The response URL for has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic. For chat, you need to publish the following on the established websocket connection: &#123;"topic":"aws/subscribe","content":&#123;"topics":["aws/chat"]&#125;&#125; Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before. The expiry time for the connection token is different than the ChatDurationInMinutes. Expiry time for the connection token is 1 day. For WEBRTC_CONNECTION Type: The response includes connection data required for the client application to join the call using the Amazon Chime SDK client libraries. The WebRTCConnection response contains Meeting and Attendee information needed to establish the media connection. The attendee join token in WebRTCConnection response is valid for the lifetime of the participant in the call. If a participant leaves or is disconnected for 60 seconds, their participant credentials will no longer be valid, and a new participant will need to be created to rejoin the call. Message streaming support: This API can also be used together with the StartContactStreaming API to create a participant connection for chat contacts that are not using a websocket. For more information about message streaming, Enable real-time chat message streaming in the Amazon Connect Administrator Guide. Multi-user web, in-app, video calling support: For WebRTC calls, this API is used in conjunction with the CreateParticipant API to enable multi-party calling. The StartWebRTCContact API creates the initial contact and routes it to an agent, while CreateParticipant adds additional participants to the ongoing call. For more information about multi-party WebRTC calls, see Enable multi-user web, in-app, and video calling in the Amazon Connect Administrator Guide. Feature specifications: For information about feature specifications, such as the allowed number of open websocket connections per participant or maximum number of WebRTC participants, see Feature specifications in the Amazon Connect Administrator Guide. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.

```sql
INSERT INTO aws.connectparticipant.participant_connections (
Type,
ConnectParticipant,
`X-Amz-Bearer`,
region
)
SELECT 
'{{ Type }}',
{{ ConnectParticipant }},
'{{ X-Amz-Bearer }}',
'{{ region }}'
RETURNING
connection_credentials,
web_rtc_connection,
websocket
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: participant_connections
  props:
    - name: X-Amz-Bearer
      value: "{{ X-Amz-Bearer }}"
      description: Required parameter for the participant_connections resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the participant_connections resource.
    - name: Type
      value:
        - "{{ Type }}"
    - name: ConnectParticipant
      value: {{ ConnectParticipant }}
`}</CodeBlock>

</TabItem>
</Tabs>
