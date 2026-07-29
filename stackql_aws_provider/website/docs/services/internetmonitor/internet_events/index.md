--- 
title: internet_events
hide_title: false
hide_table_of_contents: false
keywords:
  - internet_events
  - internetmonitor
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

Creates, updates, deletes, gets or lists an <code>internet_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="internet_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.internetmonitor.internet_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_internet_event"
    values={[
        { label: 'get_internet_event', value: 'get_internet_event' },
        { label: 'list_internet_events', value: 'list_internet_events' }
    ]}
>
<TabItem value="get_internet_event">

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
    <td><CopyableCode code="client_location" /></td>
    <td><code>object</code></td>
    <td>The impacted location, such as a city, where clients access Amazon Web Services application resources.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the internet event ended. If the event hasn't ended yet, this value is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="event_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the internet event. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The internally-generated identifier of an internet event. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_status" /></td>
    <td><code>string</code></td>
    <td>The status of the internet event. (ACTIVE, RESOLVED)</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of network impairment. (AVAILABILITY, PERFORMANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the internet event started.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_internet_events">

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
    <td><CopyableCode code="client_location" /></td>
    <td><code>object</code></td>
    <td>The impacted location, such as a city, that Amazon Web Services clients access application resources from.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when an internet event ended. If the event hasn't ended yet, this value is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="event_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the internet event. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The internally-generated identifier of an internet event. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_status" /></td>
    <td><code>string</code></td>
    <td>The status of an internet event. (ACTIVE, RESOLVED)</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of network impairment. (AVAILABILITY, PERFORMANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when an internet event started.</td>
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
    <td><a href="#get_internet_event"><CopyableCode code="get_internet_event" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-event_id"><code>event_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information that Amazon CloudWatch Internet Monitor has generated about an internet event. Internet Monitor displays information about recent global health events, called internet events, on a global outages map that is available to all Amazon Web Services customers. The information returned here includes the impacted location, when the event started and (if the event is over) ended, the type of event (PERFORMANCE or AVAILABILITY), and the status (ACTIVE or RESOLVED).</td>
</tr>
<tr>
    <td><a href="#list_internet_events"><CopyableCode code="list_internet_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-InternetEventMaxResults"><code>InternetEventMaxResults</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-EventStatus"><code>EventStatus</code></a>, <a href="#parameter-EventType"><code>EventType</code></a></td>
    <td>Lists internet events that cause performance or availability issues for client locations. Amazon CloudWatch Internet Monitor displays information about recent global health events, called internet events, on a global outages map that is available to all Amazon Web Services customers. You can constrain the list of internet events returned by providing a start time and end time to define a total time frame for events you want to list. Both start time and end time specify the time when an event started. End time is optional. If you don't include it, the default end time is the current time. You can also limit the events returned to a specific status (ACTIVE or RESOLVED) or type (PERFORMANCE or AVAILABILITY).</td>
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
<tr id="parameter-event_id">
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The EventId of the internet event to return information for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the time window that you want to get a list of internet events for.</td>
</tr>
<tr id="parameter-EventStatus">
    <td><CopyableCode code="EventStatus" /></td>
    <td><code>string</code></td>
    <td>The status of an internet event.</td>
</tr>
<tr id="parameter-EventType">
    <td><CopyableCode code="EventType" /></td>
    <td><code>string</code></td>
    <td>The type of network impairment.</td>
</tr>
<tr id="parameter-InternetEventMaxResults">
    <td><CopyableCode code="InternetEventMaxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of query results that you want to return with this call.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. You receive this token from a previous call.</td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the time window that you want to get a list of internet events for.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_internet_event"
    values={[
        { label: 'get_internet_event', value: 'get_internet_event' },
        { label: 'list_internet_events', value: 'list_internet_events' }
    ]}
>
<TabItem value="get_internet_event">

Gets information that Amazon CloudWatch Internet Monitor has generated about an internet event. Internet Monitor displays information about recent global health events, called internet events, on a global outages map that is available to all Amazon Web Services customers. The information returned here includes the impacted location, when the event started and (if the event is over) ended, the type of event (PERFORMANCE or AVAILABILITY), and the status (ACTIVE or RESOLVED).

```sql
SELECT
client_location,
ended_at,
event_arn,
event_id,
event_status,
event_type,
started_at
FROM aws.internetmonitor.internet_events
WHERE event_id = '{{ event_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_internet_events">

Lists internet events that cause performance or availability issues for client locations. Amazon CloudWatch Internet Monitor displays information about recent global health events, called internet events, on a global outages map that is available to all Amazon Web Services customers. You can constrain the list of internet events returned by providing a start time and end time to define a total time frame for events you want to list. Both start time and end time specify the time when an event started. End time is optional. If you don't include it, the default end time is the current time. You can also limit the events returned to a specific status (ACTIVE or RESOLVED) or type (PERFORMANCE or AVAILABILITY).

```sql
SELECT
client_location,
ended_at,
event_arn,
event_id,
event_status,
event_type,
started_at
FROM aws.internetmonitor.internet_events
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND InternetEventMaxResults = '{{ InternetEventMaxResults }}'
AND StartTime = '{{ StartTime }}'
AND EndTime = '{{ EndTime }}'
AND EventStatus = '{{ EventStatus }}'
AND EventType = '{{ EventType }}'
;
```
</TabItem>
</Tabs>
