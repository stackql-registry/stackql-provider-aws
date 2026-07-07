--- 
title: meetings
hide_title: false
hide_table_of_contents: false
keywords:
  - meetings
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

Creates, updates, deletes, gets or lists a <code>meetings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="meetings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_meetings.meetings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_meeting"
    values={[
        { label: 'get_meeting', value: 'get_meeting' }
    ]}
>
<TabItem value="get_meeting">

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
    <td><CopyableCode code="ExternalMeetingId" /></td>
    <td><code>string</code></td>
    <td>The external meeting ID. Pattern: &#91;-_&@+=,()&#123;&#125;\&#91;\&#93;\/«».:|'"#a-zA-Z0-9À-ÿ\s&#93;* Values that begin with aws: are reserved. You can't configure a value that uses this prefix. Case insensitive.</td>
</tr>
<tr>
    <td><CopyableCode code="MediaPlacement" /></td>
    <td><code>object</code></td>
    <td>The media placement for the meeting.</td>
</tr>
<tr>
    <td><CopyableCode code="MediaRegion" /></td>
    <td><code>string</code></td>
    <td>The Region in which you create the meeting. Available values: af-south-1, ap-northeast-1, ap-northeast-2, ap-south-1, ap-southeast-1, ap-southeast-2, ca-central-1, eu-central-1, eu-north-1, eu-south-1, eu-west-1, eu-west-2, eu-west-3, sa-east-1, us-east-1, us-east-2, us-west-1, us-west-2. Available values in Amazon Web Services GovCloud (US) Regions: us-gov-east-1, us-gov-west-1.</td>
</tr>
<tr>
    <td><CopyableCode code="MeetingArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the meeting. (pattern: &lt;code&gt;^arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MeetingFeatures" /></td>
    <td><code>object</code></td>
    <td>The configuration settings of the features available to a meeting.</td>
</tr>
<tr>
    <td><CopyableCode code="MeetingHostId" /></td>
    <td><code>string</code></td>
    <td>Reserved.</td>
</tr>
<tr>
    <td><CopyableCode code="MeetingId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime SDK meeting ID. (pattern: &lt;code&gt;&#91;a-fA-F0-9&#93;&#123;8&#125;(?:-&#91;a-fA-F0-9&#93;&#123;4&#125;)&#123;3&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PrimaryMeetingId" /></td>
    <td><code>string</code></td>
    <td>When specified, replicates the media from the primary meeting to this meeting.</td>
</tr>
<tr>
    <td><CopyableCode code="TenantIds" /></td>
    <td><code>array</code></td>
    <td>Array of strings.</td>
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
    <td><a href="#get_meeting"><CopyableCode code="get_meeting" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-meeting_id"><code>meeting_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_meeting"><CopyableCode code="create_meeting" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-MediaRegion"><code>MediaRegion</code></a>, <a href="#parameter-ExternalMeetingId"><code>ExternalMeetingId</code></a></td>
    <td></td>
    <td>Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see Available Regions and Using meeting Regions, both in the Amazon Chime SDK Developer Guide. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime SDK Developer Guide. If you use this API in conjuction with the and APIs, and you don't specify the MeetingFeatures.Content.MaxResolution or MeetingFeatures.Video.MaxResolution parameters, the following defaults are used: Content.MaxResolution: FHD Video.MaxResolution: HD</td>
</tr>
<tr>
    <td><a href="#delete_meeting"><CopyableCode code="delete_meeting" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-meeting_id"><code>meeting_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Amazon Chime SDK meeting. The operation deletes all attendees, disconnects all clients, and prevents new clients from joining the meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.</td>
</tr>
<tr>
    <td><a href="#batch_create_attendee"><CopyableCode code="batch_create_attendee" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-meeting_id"><code>meeting_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates up to 100 attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.</td>
</tr>
<tr>
    <td><a href="#batch_update_attendee_capabilities_except"><CopyableCode code="batch_update_attendee_capabilities_except" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-meeting_id"><code>meeting_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExcludedAttendeeIds"><code>ExcludedAttendeeIds</code></a>, <a href="#parameter-Capabilities"><code>Capabilities</code></a></td>
    <td></td>
    <td>Updates AttendeeCapabilities except the capabilities listed in an ExcludedAttendeeIds table. You use the capabilities with a set of values that control what the capabilities can do, such as SendReceive data. For more information about those values, see . When using capabilities, be aware of these corner cases: If you specify MeetingFeatures:Video:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Video will be rejected with ValidationError 400. If you specify MeetingFeatures:Content:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Content will be rejected with ValidationError 400. You can't set content capabilities to SendReceive or Receive unless you also set video capabilities to SendReceive or Receive. If you don't set the video capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your video capability to receive and you set your content capability to not receive. If meeting features is defined as Video:MaxResolution:None but Content:MaxResolution is defined as something other than None and attendee capabilities are not defined in the API request, then the default attendee video capability is set to Receive and attendee content capability is set to SendReceive. This is because content SendReceive requires video to be at least Receive. When you change an audio capability from None or Receive to Send or SendReceive , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants. When you change a video or content capability from None or Receive to Send or SendReceive , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</td>
</tr>
<tr>
    <td><a href="#start_meeting_transcription"><CopyableCode code="start_meeting_transcription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-meeting_id"><code>meeting_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TranscriptionConfiguration"><code>TranscriptionConfiguration</code></a></td>
    <td></td>
    <td>Starts transcription for the specified meetingId. For more information, refer to Using Amazon Chime SDK live transcription in the Amazon Chime SDK Developer Guide. If you specify an invalid configuration, a TranscriptFailed event will be sent with the contents of the BadRequestException generated by Amazon Transcribe. For more information on each parameter and which combinations are valid, refer to the StartStreamTranscription API in the Amazon Transcribe Developer Guide. By default, Amazon Transcribe may use and store audio content processed by the service to develop and improve Amazon Web Services AI/ML services as further described in section 50 of the Amazon Web Services Service Terms. Using Amazon Transcribe may be subject to federal and state laws or regulations regarding the recording or interception of electronic communications. It is your and your end users’ responsibility to comply with all applicable laws regarding the recording, including properly notifying all participants in a recorded session or communication that the session or communication is being recorded, and obtaining all necessary consents. You can opt out from Amazon Web Services using audio content to develop and improve AWS AI/ML services by configuring an AI services opt out policy using Amazon Web Services Organizations.</td>
</tr>
<tr>
    <td><a href="#stop_meeting_transcription"><CopyableCode code="stop_meeting_transcription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-meeting_id"><code>meeting_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops transcription for the specified meetingId. For more information, refer to Using Amazon Chime SDK live transcription in the Amazon Chime SDK Developer Guide. By default, Amazon Transcribe may use and store audio content processed by the service to develop and improve Amazon Web Services AI/ML services as further described in section 50 of the Amazon Web Services Service Terms. Using Amazon Transcribe may be subject to federal and state laws or regulations regarding the recording or interception of electronic communications. It is your and your end users’ responsibility to comply with all applicable laws regarding the recording, including properly notifying all participants in a recorded session or communication that the session or communication is being recorded, and obtaining all necessary consents. You can opt out from Amazon Web Services using audio content to develop and improve Amazon Web Services AI/ML services by configuring an AI services opt out policy using Amazon Web Services Organizations.</td>
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
<tr id="parameter-meeting_id">
    <td><CopyableCode code="meeting_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the meeting for which you stop transcription.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_meeting"
    values={[
        { label: 'get_meeting', value: 'get_meeting' }
    ]}
>
<TabItem value="get_meeting">

Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.

```sql
SELECT
ExternalMeetingId,
MediaPlacement,
MediaRegion,
MeetingArn,
MeetingFeatures,
MeetingHostId,
MeetingId,
PrimaryMeetingId,
TenantIds
FROM aws.chime_sdk_meetings.meetings
WHERE meeting_id = '{{ meeting_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_meeting"
    values={[
        { label: 'create_meeting', value: 'create_meeting' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_meeting">

Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see Available Regions and Using meeting Regions, both in the Amazon Chime SDK Developer Guide. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime SDK Developer Guide. If you use this API in conjuction with the and APIs, and you don't specify the MeetingFeatures.Content.MaxResolution or MeetingFeatures.Video.MaxResolution parameters, the following defaults are used: Content.MaxResolution: FHD Video.MaxResolution: HD

```sql
INSERT INTO aws.chime_sdk_meetings.meetings (
ClientRequestToken,
MediaRegion,
MeetingHostId,
ExternalMeetingId,
NotificationsConfiguration,
MeetingFeatures,
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
'{{ NotificationsConfiguration }}',
'{{ MeetingFeatures }}',
'{{ PrimaryMeetingId }}',
'{{ TenantIds }}',
'{{ Tags }}',
'{{ MediaPlacementNetworkType }}',
'{{ region }}'
RETURNING
Meeting
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: meetings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the meetings resource.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: MediaRegion
      value: "{{ MediaRegion }}"
    - name: MeetingHostId
      value: "{{ MeetingHostId }}"
    - name: ExternalMeetingId
      value: "{{ ExternalMeetingId }}"
    - name: NotificationsConfiguration
      description: |
        The configuration for resource targets to receive notifications when meeting and attendee events occur.
      value:
        LambdaFunctionArn: "{{ LambdaFunctionArn }}"
        SnsTopicArn: "{{ SnsTopicArn }}"
        SqsQueueArn: "{{ SqsQueueArn }}"
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
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_meeting"
    values={[
        { label: 'delete_meeting', value: 'delete_meeting' }
    ]}
>
<TabItem value="delete_meeting">

Deletes the specified Amazon Chime SDK meeting. The operation deletes all attendees, disconnects all clients, and prevents new clients from joining the meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.

```sql
DELETE FROM aws.chime_sdk_meetings.meetings
WHERE meeting_id = '{{ meeting_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_create_attendee"
    values={[
        { label: 'batch_create_attendee', value: 'batch_create_attendee' },
        { label: 'batch_update_attendee_capabilities_except', value: 'batch_update_attendee_capabilities_except' },
        { label: 'start_meeting_transcription', value: 'start_meeting_transcription' },
        { label: 'stop_meeting_transcription', value: 'stop_meeting_transcription' }
    ]}
>
<TabItem value="batch_create_attendee">

Creates up to 100 attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.

```sql
EXEC aws.chime_sdk_meetings.meetings.batch_create_attendee 
@meeting_id='{{ meeting_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Attendees": "{{ Attendees }}"
}'
;
```
</TabItem>
<TabItem value="batch_update_attendee_capabilities_except">

Updates AttendeeCapabilities except the capabilities listed in an ExcludedAttendeeIds table. You use the capabilities with a set of values that control what the capabilities can do, such as SendReceive data. For more information about those values, see . When using capabilities, be aware of these corner cases: If you specify MeetingFeatures:Video:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Video will be rejected with ValidationError 400. If you specify MeetingFeatures:Content:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Content will be rejected with ValidationError 400. You can't set content capabilities to SendReceive or Receive unless you also set video capabilities to SendReceive or Receive. If you don't set the video capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your video capability to receive and you set your content capability to not receive. If meeting features is defined as Video:MaxResolution:None but Content:MaxResolution is defined as something other than None and attendee capabilities are not defined in the API request, then the default attendee video capability is set to Receive and attendee content capability is set to SendReceive. This is because content SendReceive requires video to be at least Receive. When you change an audio capability from None or Receive to Send or SendReceive , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants. When you change a video or content capability from None or Receive to Send or SendReceive , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.

```sql
EXEC aws.chime_sdk_meetings.meetings.batch_update_attendee_capabilities_except 
@meeting_id='{{ meeting_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ExcludedAttendeeIds": "{{ ExcludedAttendeeIds }}", 
"Capabilities": "{{ Capabilities }}"
}'
;
```
</TabItem>
<TabItem value="start_meeting_transcription">

Starts transcription for the specified meetingId. For more information, refer to Using Amazon Chime SDK live transcription in the Amazon Chime SDK Developer Guide. If you specify an invalid configuration, a TranscriptFailed event will be sent with the contents of the BadRequestException generated by Amazon Transcribe. For more information on each parameter and which combinations are valid, refer to the StartStreamTranscription API in the Amazon Transcribe Developer Guide. By default, Amazon Transcribe may use and store audio content processed by the service to develop and improve Amazon Web Services AI/ML services as further described in section 50 of the Amazon Web Services Service Terms. Using Amazon Transcribe may be subject to federal and state laws or regulations regarding the recording or interception of electronic communications. It is your and your end users’ responsibility to comply with all applicable laws regarding the recording, including properly notifying all participants in a recorded session or communication that the session or communication is being recorded, and obtaining all necessary consents. You can opt out from Amazon Web Services using audio content to develop and improve AWS AI/ML services by configuring an AI services opt out policy using Amazon Web Services Organizations.

```sql
EXEC aws.chime_sdk_meetings.meetings.start_meeting_transcription 
@meeting_id='{{ meeting_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"TranscriptionConfiguration": "{{ TranscriptionConfiguration }}"
}'
;
```
</TabItem>
<TabItem value="stop_meeting_transcription">

Stops transcription for the specified meetingId. For more information, refer to Using Amazon Chime SDK live transcription in the Amazon Chime SDK Developer Guide. By default, Amazon Transcribe may use and store audio content processed by the service to develop and improve Amazon Web Services AI/ML services as further described in section 50 of the Amazon Web Services Service Terms. Using Amazon Transcribe may be subject to federal and state laws or regulations regarding the recording or interception of electronic communications. It is your and your end users’ responsibility to comply with all applicable laws regarding the recording, including properly notifying all participants in a recorded session or communication that the session or communication is being recorded, and obtaining all necessary consents. You can opt out from Amazon Web Services using audio content to develop and improve Amazon Web Services AI/ML services by configuring an AI services opt out policy using Amazon Web Services Organizations.

```sql
EXEC aws.chime_sdk_meetings.meetings.stop_meeting_transcription 
@meeting_id='{{ meeting_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
