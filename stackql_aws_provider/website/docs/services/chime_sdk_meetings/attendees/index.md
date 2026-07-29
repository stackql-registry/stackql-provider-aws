--- 
title: attendees
hide_title: false
hide_table_of_contents: false
keywords:
  - attendees
  - chime_sdk_meetings
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

Creates, updates, deletes, gets or lists an <code>attendees</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attendees" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_meetings.attendees" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_attendee"
    values={[
        { label: 'get_attendee', value: 'get_attendee' },
        { label: 'list_attendees', value: 'list_attendees' }
    ]}
>
<TabItem value="get_attendee">

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
    <td><CopyableCode code="attendee_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime SDK attendee ID. (pattern: &lt;code&gt;&#91;a-fA-F0-9&#93;&#123;8&#125;(?:-&#91;a-fA-F0-9&#93;&#123;4&#125;)&#123;3&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>The capabilities assigned to an attendee: audio, video, or content. You use the capabilities with a set of values that control what the capabilities can do, such as SendReceive data. For more information about those values, see . When using capabilities, be aware of these corner cases: If you specify MeetingFeatures:Video:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Video will be rejected with ValidationError 400. If you specify MeetingFeatures:Content:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Content will be rejected with ValidationError 400. You can't set content capabilities to SendReceive or Receive unless you also set video capabilities to SendReceive or Receive. If you don't set the video capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your video capability to receive and you set your content capability to not receive. If meeting features is defined as Video:MaxResolution:None but Content:MaxResolution is defined as something other than None and attendee capabilities are not defined in the API request, then the default attendee video capability is set to Receive and attendee content capability is set to SendReceive. This is because content SendReceive requires video to be at least Receive. When you change an audio capability from None or Receive to Send or SendReceive , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants. When you change a video or content capability from None or Receive to Send or SendReceive , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</td>
</tr>
<tr>
    <td><CopyableCode code="external_user_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application. Pattern: &#91;-_&@+=,()&#123;&#125;\&#91;\&#93;\/«».:|'"#a-zA-Z0-9À-ÿ\s&#93;* Values that begin with aws: are reserved. You can't configure a value that uses this prefix. Case insensitive.</td>
</tr>
<tr>
    <td><CopyableCode code="join_token" /></td>
    <td><code>string</code></td>
    <td>The join token used by the Amazon Chime SDK attendee.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_attendees">

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
    <td><CopyableCode code="attendees" /></td>
    <td><code>array</code></td>
    <td>The Amazon Chime SDK attendee information.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
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
    <td><a href="#get_attendee"><CopyableCode code="get_attendee" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-meeting_id"><code>meeting_id</code></a>, <a href="#parameter-attendee_id"><code>attendee_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.</td>
</tr>
<tr>
    <td><a href="#list_attendees"><CopyableCode code="list_attendees" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-meeting_id"><code>meeting_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_meeting_with_attendees"><CopyableCode code="create_meeting_with_attendees" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-MediaRegion"><code>MediaRegion</code></a>, <a href="#parameter-ExternalMeetingId"><code>ExternalMeetingId</code></a></td>
    <td></td>
    <td>Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see Available Regions and Using meeting Regions, both in the Amazon Chime SDK Developer Guide. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime SDK Developer Guide. If you use this API in conjuction with the and APIs, and you don't specify the MeetingFeatures.Content.MaxResolution or MeetingFeatures.Video.MaxResolution parameters, the following defaults are used: Content.MaxResolution: FHD Video.MaxResolution: HD</td>
</tr>
<tr>
    <td><a href="#create_attendee"><CopyableCode code="create_attendee" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-meeting_id"><code>meeting_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExternalUserId"><code>ExternalUserId</code></a></td>
    <td></td>
    <td>Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_attendee_capabilities"><CopyableCode code="update_attendee_capabilities" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-meeting_id"><code>meeting_id</code></a>, <a href="#parameter-attendee_id"><code>attendee_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Capabilities"><code>Capabilities</code></a></td>
    <td></td>
    <td>The capabilities that you want to update. You use the capabilities with a set of values that control what the capabilities can do, such as SendReceive data. For more information about those values, see . When using capabilities, be aware of these corner cases: If you specify MeetingFeatures:Video:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Video will be rejected with ValidationError 400. If you specify MeetingFeatures:Content:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Content will be rejected with ValidationError 400. You can't set content capabilities to SendReceive or Receive unless you also set video capabilities to SendReceive or Receive. If you don't set the video capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your video capability to receive and you set your content capability to not receive. If meeting features is defined as Video:MaxResolution:None but Content:MaxResolution is defined as something other than None and attendee capabilities are not defined in the API request, then the default attendee video capability is set to Receive and attendee content capability is set to SendReceive. This is because content SendReceive requires video to be at least Receive. When you change an audio capability from None or Receive to Send or SendReceive , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants. When you change a video or content capability from None or Receive to Send or SendReceive , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</td>
</tr>
<tr>
    <td><a href="#delete_attendee"><CopyableCode code="delete_attendee" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-meeting_id"><code>meeting_id</code></a>, <a href="#parameter-attendee_id"><code>attendee_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their JoinToken. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.</td>
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
<tr id="parameter-attendee_id">
    <td><CopyableCode code="attendee_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime SDK attendee ID.</td>
</tr>
<tr id="parameter-meeting_id">
    <td><CopyableCode code="meeting_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime SDK meeting ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_attendee"
    values={[
        { label: 'get_attendee', value: 'get_attendee' },
        { label: 'list_attendees', value: 'list_attendees' }
    ]}
>
<TabItem value="get_attendee">

Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.

```sql
SELECT
attendee_id,
capabilities,
external_user_id,
join_token
FROM aws.chime_sdk_meetings.attendees
WHERE meeting_id = '{{ meeting_id }}' -- required
AND attendee_id = '{{ attendee_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_attendees">

Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.

```sql
SELECT
attendees,
next_token
FROM aws.chime_sdk_meetings.attendees
WHERE meeting_id = '{{ meeting_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_meeting_with_attendees"
    values={[
        { label: 'create_meeting_with_attendees', value: 'create_meeting_with_attendees' },
        { label: 'create_attendee', value: 'create_attendee' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_meeting_with_attendees">

Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see Available Regions and Using meeting Regions, both in the Amazon Chime SDK Developer Guide. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime SDK Developer Guide. If you use this API in conjuction with the and APIs, and you don't specify the MeetingFeatures.Content.MaxResolution or MeetingFeatures.Video.MaxResolution parameters, the following defaults are used: Content.MaxResolution: FHD Video.MaxResolution: HD

```sql
INSERT INTO aws.chime_sdk_meetings.attendees (
ClientRequestToken,
MediaRegion,
MeetingHostId,
ExternalMeetingId,
MeetingFeatures,
NotificationsConfiguration,
Attendees,
PrimaryMeetingId,
TenantIds,
Tags,
MediaPlacementNetworkType,
region
)
SELECT 
'{{ ClientRequestToken }}' /* required */,
'{{ MediaRegion }}' /* required */,
'{{ MeetingHostId }}',
'{{ ExternalMeetingId }}' /* required */,
'{{ MeetingFeatures }}',
'{{ NotificationsConfiguration }}',
'{{ Attendees }}',
'{{ PrimaryMeetingId }}',
'{{ TenantIds }}',
'{{ Tags }}',
'{{ MediaPlacementNetworkType }}',
'{{ region }}'
RETURNING
attendees,
errors,
meeting
;
```
</TabItem>
<TabItem value="create_attendee">

Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.

```sql
INSERT INTO aws.chime_sdk_meetings.attendees (
ExternalUserId,
Capabilities,
meeting_id,
region
)
SELECT 
'{{ ExternalUserId }}' /* required */,
'{{ Capabilities }}',
'{{ meeting_id }}',
'{{ region }}'
RETURNING
attendee
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: attendees
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the attendees resource.
    - name: meeting_id
      value: "{{ meeting_id }}"
      description: Required parameter for the attendees resource.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: MediaRegion
      value: "{{ MediaRegion }}"
    - name: MeetingHostId
      value: "{{ MeetingHostId }}"
    - name: ExternalMeetingId
      value: "{{ ExternalMeetingId }}"
    - name: MeetingFeatures
      description: |
        The configuration settings of the features available to a meeting.
      value:
        Audio:
          EchoReduction: "{{ EchoReduction }}"
        Video:
          MaxResolution: "{{ MaxResolution }}"
        Content:
          MaxResolution: "{{ MaxResolution }}"
        Attendee:
          MaxCount: {{ MaxCount }}
    - name: NotificationsConfiguration
      description: |
        The configuration for resource targets to receive notifications when meeting and attendee events occur.
      value:
        LambdaFunctionArn: "{{ LambdaFunctionArn }}"
        SnsTopicArn: "{{ SnsTopicArn }}"
        SqsQueueArn: "{{ SqsQueueArn }}"
    - name: Attendees
      value:
        - ExternalUserId: "{{ ExternalUserId }}"
          Capabilities:
            Audio: "{{ Audio }}"
            Video: "{{ Video }}"
            Content: "{{ Content }}"
    - name: PrimaryMeetingId
      value: "{{ PrimaryMeetingId }}"
    - name: TenantIds
      value:
        - "{{ TenantIds }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: MediaPlacementNetworkType
      value: "{{ MediaPlacementNetworkType }}"
      valid_values: ['Ipv4Only', 'DualStack']
    - name: ExternalUserId
      value: "{{ ExternalUserId }}"
    - name: Capabilities
      description: |
        The media capabilities of an attendee: audio, video, or content. You use the capabilities with a set of values that control what the capabilities can do, such as SendReceive data. For more information, refer to and . When using capabilities, be aware of these corner cases: If you specify MeetingFeatures:Video:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Video will be rejected with ValidationError 400. If you specify MeetingFeatures:Content:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Content will be rejected with ValidationError 400. You can't set content capabilities to SendReceive or Receive unless you also set video capabilities to SendReceive or Receive. If you don't set the video capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your video capability to receive and you set your content capability to not receive. If meeting features is defined as Video:MaxResolution:None but Content:MaxResolution is defined as something other than None and attendee capabilities are not defined in the API request, then the default attendee video capability is set to Receive and attendee content capability is set to SendReceive. This is because content SendReceive requires video to be at least Receive. When you change an audio capability from None or Receive to Send or SendReceive , and an attendee unmutes their microphone, audio flows from the attendee to the other meeting participants. When you change a video or content capability from None or Receive to Send or SendReceive , and the attendee turns on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.
      value:
        Audio: "{{ Audio }}"
        Video: "{{ Video }}"
        Content: "{{ Content }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_attendee_capabilities"
    values={[
        { label: 'update_attendee_capabilities', value: 'update_attendee_capabilities' }
    ]}
>
<TabItem value="update_attendee_capabilities">

The capabilities that you want to update. You use the capabilities with a set of values that control what the capabilities can do, such as SendReceive data. For more information about those values, see . When using capabilities, be aware of these corner cases: If you specify MeetingFeatures:Video:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Video will be rejected with ValidationError 400. If you specify MeetingFeatures:Content:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Content will be rejected with ValidationError 400. You can't set content capabilities to SendReceive or Receive unless you also set video capabilities to SendReceive or Receive. If you don't set the video capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your video capability to receive and you set your content capability to not receive. If meeting features is defined as Video:MaxResolution:None but Content:MaxResolution is defined as something other than None and attendee capabilities are not defined in the API request, then the default attendee video capability is set to Receive and attendee content capability is set to SendReceive. This is because content SendReceive requires video to be at least Receive. When you change an audio capability from None or Receive to Send or SendReceive , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants. When you change a video or content capability from None or Receive to Send or SendReceive , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.

```sql
UPDATE aws.chime_sdk_meetings.attendees
SET 
Capabilities = '{{ Capabilities }}'
WHERE 
meeting_id = '{{ meeting_id }}' --required
AND attendee_id = '{{ attendee_id }}' --required
AND region = '{{ region }}' --required
AND Capabilities = '{{ Capabilities }}' --required
RETURNING
attendee;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_attendee"
    values={[
        { label: 'delete_attendee', value: 'delete_attendee' }
    ]}
>
<TabItem value="delete_attendee">

Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their JoinToken. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.

```sql
DELETE FROM aws.chime_sdk_meetings.attendees
WHERE meeting_id = '{{ meeting_id }}' --required
AND attendee_id = '{{ attendee_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
