--- 
title: replays
hide_title: false
hide_table_of_contents: false
keywords:
  - replays
  - events
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

Creates, updates, deletes, gets or lists a <code>replays</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replays" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.events.replays" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_replay"
    values={[
        { label: 'describe_replay', value: 'describe_replay' },
        { label: 'list_replays', value: 'list_replays' }
    ]}
>
<TabItem value="describe_replay">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the replay. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Destination" /></td>
    <td><code>object</code></td>
    <td>A ReplayDestination object that contains details about the replay.</td>
</tr>
<tr>
    <td><CopyableCode code="EventEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp for the last event that was replayed from the archive.</td>
</tr>
<tr>
    <td><CopyableCode code="EventLastReplayedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the event was last replayed.</td>
</tr>
<tr>
    <td><CopyableCode code="EventSourceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the archive events were replayed from. (pattern: &lt;code&gt;^arn:aws(&#91;a-z&#93;|\-)*:events:(&#91;a-z&#93;|\d|\-)*:(&#91;0-9&#93;&#123;12&#125;)?:.+\/.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EventStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp of the first event that was last replayed from the archive.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplayArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the replay. (pattern: &lt;code&gt;^arn:aws(&#91;a-z&#93;|\-)*:events:(&#91;a-z&#93;|\d|\-)*:(&#91;0-9&#93;&#123;12&#125;)?:.+\/&#91;\.\-_A-Za-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ReplayEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp for the time that the replay stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplayName" /></td>
    <td><code>string</code></td>
    <td>The name of the replay. (pattern: &lt;code&gt;&#91;\.\-_A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ReplayStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp for the time that the replay started.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the replay. (STARTING, RUNNING, CANCELLING, COMPLETED, CANCELLED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StateReason" /></td>
    <td><code>string</code></td>
    <td>The reason that the replay is in the current state. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_replays">

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
    <td>A token indicating there are more results available. If there are no more results, no token is included in the response. The value of nextToken is a unique pagination token for each page. To retrieve the next page of results, make the call again using the returned token. Keep all other arguments unchanged. Using an expired pagination token results in an HTTP 400 InvalidToken error.</td>
</tr>
<tr>
    <td><CopyableCode code="Replays" /></td>
    <td><code>array</code></td>
    <td>An array of Replay objects that contain information about the replay.</td>
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
    <td><a href="#describe_replay"><CopyableCode code="describe_replay" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a replay. Use DescribeReplay to determine the progress of a running replay. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you use StartReplay and specify an EventStartTime and an EventEndTime that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use DescribeReplay to determine the progress of a replay. The value returned for EventLastReplayedTime indicates the time within the specified time range associated with the last event replayed.</td>
</tr>
<tr>
    <td><a href="#list_replays"><CopyableCode code="list_replays" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists your replays. You can either list all the replays or you can provide a prefix to match to the replay names. Filter parameters are exclusive.</td>
</tr>
<tr>
    <td><a href="#cancel_replay"><CopyableCode code="cancel_replay" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplayName"><code>ReplayName</code></a></td>
    <td></td>
    <td>Cancels the specified replay.</td>
</tr>
<tr>
    <td><a href="#start_replay"><CopyableCode code="start_replay" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplayName"><code>ReplayName</code></a>, <a href="#parameter-EventSourceArn"><code>EventSourceArn</code></a>, <a href="#parameter-EventStartTime"><code>EventStartTime</code></a>, <a href="#parameter-EventEndTime"><code>EventEndTime</code></a></td>
    <td></td>
    <td>Starts the specified replay. Events are not necessarily replayed in the exact same order that they were added to the archive. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you specify an EventStartTime and an EventEndTime that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use DescribeReplay to determine the progress of a replay. The value returned for EventLastReplayedTime indicates the time within the specified time range associated with the last event replayed.</td>
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
    defaultValue="describe_replay"
    values={[
        { label: 'describe_replay', value: 'describe_replay' },
        { label: 'list_replays', value: 'list_replays' }
    ]}
>
<TabItem value="describe_replay">

Retrieves details about a replay. Use DescribeReplay to determine the progress of a running replay. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you use StartReplay and specify an EventStartTime and an EventEndTime that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use DescribeReplay to determine the progress of a replay. The value returned for EventLastReplayedTime indicates the time within the specified time range associated with the last event replayed.

```sql
SELECT
Description,
Destination,
EventEndTime,
EventLastReplayedTime,
EventSourceArn,
EventStartTime,
ReplayArn,
ReplayEndTime,
ReplayName,
ReplayStartTime,
State,
StateReason
FROM aws.events.replays
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_replays">

Lists your replays. You can either list all the replays or you can provide a prefix to match to the replay names. Filter parameters are exclusive.

```sql
SELECT
NextToken,
Replays
FROM aws.events.replays
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_replay"
    values={[
        { label: 'cancel_replay', value: 'cancel_replay' },
        { label: 'start_replay', value: 'start_replay' }
    ]}
>
<TabItem value="cancel_replay">

Cancels the specified replay.

```sql
EXEC aws.events.replays.cancel_replay 
@region='{{ region }}' --required 
@@json=
'{
"ReplayName": "{{ ReplayName }}"
}'
;
```
</TabItem>
<TabItem value="start_replay">

Starts the specified replay. Events are not necessarily replayed in the exact same order that they were added to the archive. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you specify an EventStartTime and an EventEndTime that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use DescribeReplay to determine the progress of a replay. The value returned for EventLastReplayedTime indicates the time within the specified time range associated with the last event replayed.

```sql
EXEC aws.events.replays.start_replay 
@region='{{ region }}' --required 
@@json=
'{
"ReplayName": "{{ ReplayName }}", 
"Description": "{{ Description }}", 
"EventSourceArn": "{{ EventSourceArn }}", 
"EventStartTime": "{{ EventStartTime }}", 
"EventEndTime": "{{ EventEndTime }}", 
"Destination": "{{ Destination }}"
}'
;
```
</TabItem>
</Tabs>
