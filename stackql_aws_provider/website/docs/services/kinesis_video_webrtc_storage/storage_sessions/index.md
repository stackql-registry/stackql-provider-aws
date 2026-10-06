--- 
title: storage_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_sessions
  - kinesis_video_webrtc_storage
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

Creates, updates, deletes, gets or lists a <code>storage_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="storage_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis_video_webrtc_storage.storage_sessions" /></td></tr>
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
    <td><a href="#join_storage_session"><CopyableCode code="join_storage_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-channelArn"><code>channelArn</code></a></td>
    <td></td>
    <td>Before using this API, you must call the GetSignalingChannelEndpoint API to request the WEBRTC endpoint. You then specify the endpoint and region in your JoinStorageSession API request. Join the ongoing one way-video and/or multi-way audio WebRTC session as a video producing device for an input channel. If there’s no existing session for the channel, a new streaming session needs to be created, and the Amazon Resource Name (ARN) of the signaling channel must be provided. Currently for the SINGLE_MASTER type, a video producing device is able to ingest both audio and video media into a stream. Only video producing devices can join the session and record media. Both audio and video tracks are currently required for WebRTC ingestion. Current requirements: Video track: H.264 Audio track: Opus The resulting ingested video in the Kinesis video stream will have the following parameters: H.264 video and AAC audio. Once a master participant has negotiated a connection through WebRTC, the ingested media session will be stored in the Kinesis video stream. Multiple viewers are then able to play back real-time media through our Playback APIs. You can also use existing Kinesis Video Streams features like HLS or DASH playback, image generation via GetImages, and more with ingested WebRTC media. S3 image delivery and notifications are not currently supported. Assume that only one video producing device client can be associated with a session for the channel. If more than one client joins the session of a specific channel as a video producing device, the most recent client request takes precedence. Additional information Idempotent - This API is not idempotent. Retry behavior - This is counted as a new API call. Concurrent calls - Concurrent calls are allowed. An offer is sent once per each call.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="join_storage_session"
    values={[
        { label: 'join_storage_session', value: 'join_storage_session' }
    ]}
>
<TabItem value="join_storage_session">

Before using this API, you must call the GetSignalingChannelEndpoint API to request the WEBRTC endpoint. You then specify the endpoint and region in your JoinStorageSession API request. Join the ongoing one way-video and/or multi-way audio WebRTC session as a video producing device for an input channel. If there’s no existing session for the channel, a new streaming session needs to be created, and the Amazon Resource Name (ARN) of the signaling channel must be provided. Currently for the SINGLE_MASTER type, a video producing device is able to ingest both audio and video media into a stream. Only video producing devices can join the session and record media. Both audio and video tracks are currently required for WebRTC ingestion. Current requirements: Video track: H.264 Audio track: Opus The resulting ingested video in the Kinesis video stream will have the following parameters: H.264 video and AAC audio. Once a master participant has negotiated a connection through WebRTC, the ingested media session will be stored in the Kinesis video stream. Multiple viewers are then able to play back real-time media through our Playback APIs. You can also use existing Kinesis Video Streams features like HLS or DASH playback, image generation via GetImages, and more with ingested WebRTC media. S3 image delivery and notifications are not currently supported. Assume that only one video producing device client can be associated with a session for the channel. If more than one client joins the session of a specific channel as a video producing device, the most recent client request takes precedence. Additional information Idempotent - This API is not idempotent. Retry behavior - This is counted as a new API call. Concurrent calls - Concurrent calls are allowed. An offer is sent once per each call.

```sql
EXEC aws.kinesis_video_webrtc_storage.storage_sessions.join_storage_session 
@region='{{ region }}' --required 
@@json=
'{
"channelArn": "{{ channelArn }}"
}'
;
```
</TabItem>
</Tabs>
