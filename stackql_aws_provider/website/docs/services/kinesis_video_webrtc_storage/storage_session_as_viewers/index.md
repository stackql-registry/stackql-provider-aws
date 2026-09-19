--- 
title: storage_session_as_viewers
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_session_as_viewers
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

Creates, updates, deletes, gets or lists a <code>storage_session_as_viewers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="storage_session_as_viewers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis_video_webrtc_storage.storage_session_as_viewers" /></td></tr>
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
    <td><a href="#join_storage_session_as_viewer"><CopyableCode code="join_storage_session_as_viewer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-channelArn"><code>channelArn</code></a>, <a href="#parameter-clientId"><code>clientId</code></a></td>
    <td></td>
    <td>Join the ongoing one way-video and/or multi-way audio WebRTC session as a viewer for an input channel. If there’s no existing session for the channel, create a new streaming session and provide the Amazon Resource Name (ARN) of the signaling channel (channelArn) and client id (clientId). Currently for SINGLE_MASTER type, a video producing device is able to ingest both audio and video media into a stream, while viewers can only ingest audio. Both a video producing device and viewers can join a session first and wait for other participants. While participants are having peer to peer conversations through WebRTC, the ingested media session will be stored into the Kinesis Video Stream. Multiple viewers are able to playback real-time media. Customers can also use existing Kinesis Video Streams features like HLS or DASH playback, Image generation, and more with ingested WebRTC media. If there’s an existing session with the same clientId that's found in the join session request, the new request takes precedence.</td>
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
    defaultValue="join_storage_session_as_viewer"
    values={[
        { label: 'join_storage_session_as_viewer', value: 'join_storage_session_as_viewer' }
    ]}
>
<TabItem value="join_storage_session_as_viewer">

Join the ongoing one way-video and/or multi-way audio WebRTC session as a viewer for an input channel. If there’s no existing session for the channel, create a new streaming session and provide the Amazon Resource Name (ARN) of the signaling channel (channelArn) and client id (clientId). Currently for SINGLE_MASTER type, a video producing device is able to ingest both audio and video media into a stream, while viewers can only ingest audio. Both a video producing device and viewers can join a session first and wait for other participants. While participants are having peer to peer conversations through WebRTC, the ingested media session will be stored into the Kinesis Video Stream. Multiple viewers are able to playback real-time media. Customers can also use existing Kinesis Video Streams features like HLS or DASH playback, Image generation, and more with ingested WebRTC media. If there’s an existing session with the same clientId that's found in the join session request, the new request takes precedence.

```sql
EXEC aws.kinesis_video_webrtc_storage.storage_session_as_viewers.join_storage_session_as_viewer 
@region='{{ region }}' --required 
@@json=
'{
"channelArn": "{{ channelArn }}", 
"clientId": "{{ clientId }}"
}'
;
```
</TabItem>
</Tabs>
