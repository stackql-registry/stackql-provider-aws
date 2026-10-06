--- 
title: live_tails
hide_title: false
hide_table_of_contents: false
keywords:
  - live_tails
  - logs
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

Creates, updates, deletes, gets or lists a <code>live_tails</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="live_tails" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.live_tails" /></td></tr>
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
    <td><a href="#start_live_tail"><CopyableCode code="start_live_tail" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupIdentifiers"><code>logGroupIdentifiers</code></a></td>
    <td></td>
    <td>Starts a Live Tail streaming session for one or more log groups. A Live Tail session returns a stream of log events that have been recently ingested in the log groups. For more information, see Use Live Tail to view logs in near real time. The response to this operation is a response stream, over which the server sends live log events and the client receives them. The following objects are sent over the stream: A single LiveTailSessionStart object is sent at the start of the session. Every second, a LiveTailSessionUpdate object is sent. Each of these objects contains an array of the actual log events. If no new log events were ingested in the past second, the LiveTailSessionUpdate object will contain an empty array. The array of log events contained in a LiveTailSessionUpdate can include as many as 500 log events. If the number of log events matching the request exceeds 500 per second, the log events are sampled down to 500 log events to be included in each LiveTailSessionUpdate object. If your client consumes the log events slower than the server produces them, CloudWatch Logs buffers up to 10 LiveTailSessionUpdate events or 5000 log events, after which it starts dropping the oldest events. A SessionStreamingException object is returned if an unknown error occurs on the server side. A SessionTimeoutException object is returned when the session times out, after it has been kept open for three hours. The StartLiveTail API routes requests using SDK host prefix injection. SDK versions released before April 1, 2026 route to streaming-logs.Region.amazonaws.com, which does not support VPC endpoints. SDK versions released on or after April 1, 2026 route to stream-logs.Region.amazonaws.com, which supports VPC endpoints. To set up a VPC endpoint for this API, see Creating a VPC endpoint for CloudWatch Logs . You can end a session before it times out by closing the session stream or by closing the client that is receiving the stream. The session also ends if the established connection between the client and the server breaks. For examples of using an SDK to start a Live Tail session, see Start a Live Tail session using an Amazon Web Services SDK.</td>
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
    defaultValue="start_live_tail"
    values={[
        { label: 'start_live_tail', value: 'start_live_tail' }
    ]}
>
<TabItem value="start_live_tail">

Starts a Live Tail streaming session for one or more log groups. A Live Tail session returns a stream of log events that have been recently ingested in the log groups. For more information, see Use Live Tail to view logs in near real time. The response to this operation is a response stream, over which the server sends live log events and the client receives them. The following objects are sent over the stream: A single LiveTailSessionStart object is sent at the start of the session. Every second, a LiveTailSessionUpdate object is sent. Each of these objects contains an array of the actual log events. If no new log events were ingested in the past second, the LiveTailSessionUpdate object will contain an empty array. The array of log events contained in a LiveTailSessionUpdate can include as many as 500 log events. If the number of log events matching the request exceeds 500 per second, the log events are sampled down to 500 log events to be included in each LiveTailSessionUpdate object. If your client consumes the log events slower than the server produces them, CloudWatch Logs buffers up to 10 LiveTailSessionUpdate events or 5000 log events, after which it starts dropping the oldest events. A SessionStreamingException object is returned if an unknown error occurs on the server side. A SessionTimeoutException object is returned when the session times out, after it has been kept open for three hours. The StartLiveTail API routes requests using SDK host prefix injection. SDK versions released before April 1, 2026 route to streaming-logs.Region.amazonaws.com, which does not support VPC endpoints. SDK versions released on or after April 1, 2026 route to stream-logs.Region.amazonaws.com, which supports VPC endpoints. To set up a VPC endpoint for this API, see Creating a VPC endpoint for CloudWatch Logs . You can end a session before it times out by closing the session stream or by closing the client that is receiving the stream. The session also ends if the established connection between the client and the server breaks. For examples of using an SDK to start a Live Tail session, see Start a Live Tail session using an Amazon Web Services SDK.

```sql
EXEC aws.logs.live_tails.start_live_tail 
@region='{{ region }}' --required 
@@json=
'{
"logGroupIdentifiers": "{{ logGroupIdentifiers }}", 
"logStreamNames": "{{ logStreamNames }}", 
"logStreamNamePrefixes": "{{ logStreamNamePrefixes }}", 
"logEventFilterPattern": "{{ logEventFilterPattern }}"
}'
;
```
</TabItem>
</Tabs>
