--- 
title: stream_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - stream_sessions
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

Creates, updates, deletes, gets or lists a <code>stream_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stream_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs.stream_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_stream_session"
    values={[
        { label: 'get_stream_session', value: 'get_stream_session' }
    ]}
>
<TabItem value="get_stream_session">

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
    <td><CopyableCode code="channel" /></td>
    <td><code>object</code></td>
    <td>Object specifying a channel.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time when the channel went offline. This is an ISO 8601 timestamp; note that this is returned as a string. For live streams, this is NULL.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestConfiguration" /></td>
    <td><code>object</code></td>
    <td>The properties of the incoming RTMP stream. Note: ingestConfiguration is deprecated in favor of ingestConfigurations but retained to ensure backward compatibility. If multitrack is not enabled, ingestConfiguration and ingestConfigurations contain the same data, namely information about Track0 (the sole track). If multitrack is enabled, ingestConfiguration contains data for only the first track (Track0) and ingestConfigurations contains data for all tracks.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestConfigurations" /></td>
    <td><code>object</code></td>
    <td>The properties of the incoming RTMP stream. If multitrack is enabled, ingestConfigurations contains data for all tracks; otherwise, it contains data only for Track0 (the sole track).</td>
</tr>
<tr>
    <td><CopyableCode code="recordingConfiguration" /></td>
    <td><code>object</code></td>
    <td>An object representing a configuration to record a channel stream.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time when the channel went live. This is an ISO 8601 timestamp; note that this is returned as a string.</td>
</tr>
<tr>
    <td><CopyableCode code="streamId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for a live or previously live stream in the specified channel. (pattern: &lt;code&gt;st-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="truncatedEvents" /></td>
    <td><code>array</code></td>
    <td>List of Amazon IVS events that the stream encountered. The list is sorted by most recent events and contains up to 500 events. For Amazon IVS events, see Using Amazon EventBridge with Amazon IVS.</td>
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
    <td><a href="#get_stream_session"><CopyableCode code="get_stream_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets metadata on a specified stream.</td>
</tr>
<tr>
    <td><a href="#list_stream_sessions"><CopyableCode code="list_stream_sessions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-channelArn"><code>channelArn</code></a></td>
    <td></td>
    <td>Gets a summary of current and previous streams for a specified channel in your account, in the AWS region where the API request is processed.</td>
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
    defaultValue="get_stream_session"
    values={[
        { label: 'get_stream_session', value: 'get_stream_session' }
    ]}
>
<TabItem value="get_stream_session">

Gets metadata on a specified stream.

```sql
SELECT
channel,
endTime,
ingestConfiguration,
ingestConfigurations,
recordingConfiguration,
startTime,
streamId,
truncatedEvents
FROM aws.ivs.stream_sessions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_stream_sessions"
    values={[
        { label: 'list_stream_sessions', value: 'list_stream_sessions' }
    ]}
>
<TabItem value="list_stream_sessions">

Gets a summary of current and previous streams for a specified channel in your account, in the AWS region where the API request is processed.

```sql
EXEC aws.ivs.stream_sessions.list_stream_sessions 
@region='{{ region }}' --required 
@@json=
'{
"channelArn": "{{ channelArn }}", 
"nextToken": "{{ nextToken }}", 
"maxResults": {{ maxResults }}
}'
;
```
</TabItem>
</Tabs>
