--- 
title: streams
hide_title: false
hide_table_of_contents: false
keywords:
  - streams
  - ivs
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

Creates, updates, deletes, gets or lists a <code>streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs.streams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_stream"
    values={[
        { label: 'get_stream', value: 'get_stream' },
        { label: 'list_streams', value: 'list_streams' }
    ]}
>
<TabItem value="get_stream">

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
    <td><CopyableCode code="channel_arn" /></td>
    <td><code>string</code></td>
    <td>Channel ARN for the stream. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:channel/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>string</code></td>
    <td>The stream’s health. (HEALTHY, STARVING, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="playback_url" /></td>
    <td><code>string</code></td>
    <td>URL of the master playlist, required by the video player to play the HLS stream.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time of the stream’s start. This is an ISO 8601 timestamp; note that this is returned as a string.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The stream’s state. Do not rely on the OFFLINE state, as the API may not return it; instead, a "NotBroadcasting" error will indicate that the stream is not live. (LIVE, OFFLINE)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for a live or previously live stream in the specified channel. (pattern: &lt;code&gt;st-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="viewer_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>A count of concurrent views of the stream. Typically, a new view appears in viewerCount within 15 seconds of when video playback starts and a view is removed from viewerCount within 1 minute of when video playback ends. A value of -1 indicates that the request timed out; in this case, retry.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_streams">

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
    <td><CopyableCode code="channel_arn" /></td>
    <td><code>string</code></td>
    <td>Channel ARN for the stream. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:channel/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>string</code></td>
    <td>The stream’s health. (HEALTHY, STARVING, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time of the stream’s start. This is an ISO 8601 timestamp; note that this is returned as a string.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The stream’s state. Do not rely on the OFFLINE state, as the API may not return it; instead, a "NotBroadcasting" error will indicate that the stream is not live. (LIVE, OFFLINE)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for a live or previously live stream in the specified channel. (pattern: &lt;code&gt;st-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="viewer_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>A count of concurrent views of the stream. Typically, a new view appears in viewerCount within 15 seconds of when video playback starts and a view is removed from viewerCount within 1 minute of when video playback ends. A value of -1 indicates that the request timed out; in this case, retry.</td>
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
    <td><a href="#get_stream"><CopyableCode code="get_stream" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the active (live) stream on a specified channel.</td>
</tr>
<tr>
    <td><a href="#list_streams"><CopyableCode code="list_streams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets summary information about live streams in your account, in the Amazon Web Services region where the API request is processed.</td>
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
    defaultValue="get_stream"
    values={[
        { label: 'get_stream', value: 'get_stream' },
        { label: 'list_streams', value: 'list_streams' }
    ]}
>
<TabItem value="get_stream">

Gets information about the active (live) stream on a specified channel.

```sql
SELECT
channel_arn,
health,
playback_url,
start_time,
state,
stream_id,
viewer_count
FROM aws.ivs.streams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_streams">

Gets summary information about live streams in your account, in the Amazon Web Services region where the API request is processed.

```sql
SELECT
channel_arn,
health,
start_time,
state,
stream_id,
viewer_count
FROM aws.ivs.streams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
