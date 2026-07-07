--- 
title: health_events
hide_title: false
hide_table_of_contents: false
keywords:
  - health_events
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

Creates, updates, deletes, gets or lists a <code>health_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="health_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.internetmonitor.health_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_health_event"
    values={[
        { label: 'get_health_event', value: 'get_health_event' },
        { label: 'list_health_events', value: 'list_health_events' }
    ]}
>
<TabItem value="get_health_event">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when a health event was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EndedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when a health event was resolved. If the health event is still active, the end time is not set.</td>
</tr>
<tr>
    <td><CopyableCode code="EventArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the event. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EventId" /></td>
    <td><code>string</code></td>
    <td>The internally-generated identifier of a health event. (pattern: &lt;code&gt;&#91;a-zA-Z0-9/_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HealthScoreThreshold" /></td>
    <td><code>number (double)</code></td>
    <td>The threshold percentage for a health score that determines, along with other configuration information, when Internet Monitor creates a health event when there's an internet issue that affects your application end users.</td>
</tr>
<tr>
    <td><CopyableCode code="ImpactType" /></td>
    <td><code>string</code></td>
    <td>The type of impairment of a specific health event. (AVAILABILITY, PERFORMANCE, LOCAL_AVAILABILITY, LOCAL_PERFORMANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="ImpactedLocations" /></td>
    <td><code>array</code></td>
    <td>The locations affected by a health event.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when a health event was last updated or recalculated.</td>
</tr>
<tr>
    <td><CopyableCode code="PercentOfTotalTrafficImpacted" /></td>
    <td><code>number (double)</code></td>
    <td>The impact on total traffic that a health event has, in increased latency or reduced availability. This is the percentage of how much latency has increased or availability has decreased during the event, compared to what is typical for traffic from this client location to the Amazon Web Services location using this client network.</td>
</tr>
<tr>
    <td><CopyableCode code="StartedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when a health event started.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of a health event. (ACTIVE, RESOLVED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_health_events">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the health event was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EndedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when a health event ended. If the health event is still active, then the end time is not set.</td>
</tr>
<tr>
    <td><CopyableCode code="EventArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the event. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EventId" /></td>
    <td><code>string</code></td>
    <td>The internally-generated identifier of a specific network traffic impairment health event. (pattern: &lt;code&gt;&#91;a-zA-Z0-9/_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HealthScoreThreshold" /></td>
    <td><code>number (double)</code></td>
    <td>The value of the threshold percentage for performance or availability that was configured when Amazon CloudWatch Internet Monitor created the health event.</td>
</tr>
<tr>
    <td><CopyableCode code="ImpactType" /></td>
    <td><code>string</code></td>
    <td>The type of impairment for a health event. (AVAILABILITY, PERFORMANCE, LOCAL_AVAILABILITY, LOCAL_PERFORMANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="ImpactedLocations" /></td>
    <td><code>array</code></td>
    <td>The locations impacted by the health event.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the health event was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="PercentOfTotalTrafficImpacted" /></td>
    <td><code>number (double)</code></td>
    <td>The impact on total traffic that a health event has, in increased latency or reduced availability. This is the percentage of how much latency has increased or availability has decreased during the event, compared to what is typical for traffic from this client location to the Amazon Web Services location using this client network.</td>
</tr>
<tr>
    <td><CopyableCode code="StartedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When a health event started.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of a health event. (ACTIVE, RESOLVED)</td>
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
    <td><a href="#get_health_event"><CopyableCode code="get_health_event" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-event_id"><code>event_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LinkedAccountId"><code>LinkedAccountId</code></a></td>
    <td>Gets information that Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations, and all the information related to the event, by location. The information returned includes the impact on performance, availability, and round-trip time, information about the network providers (ASNs), the event type, and so on. Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.</td>
</tr>
<tr>
    <td><a href="#list_health_events"><CopyableCode code="list_health_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-EventStatus"><code>EventStatus</code></a>, <a href="#parameter-LinkedAccountId"><code>LinkedAccountId</code></a></td>
    <td>Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns information for health events including the event start and end times, and the status. Health events that have start times during the time frame that is requested are not included in the list of health events.</td>
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
    <td>The internally-generated identifier of a health event. Because EventID contains the forward slash (“/”) character, you must URL-encode the EventID field in the request URL.</td>
</tr>
<tr id="parameter-monitor_name">
    <td><CopyableCode code="monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when a health event ended. If the health event is still ongoing, then the end time is not set.</td>
</tr>
<tr id="parameter-EventStatus">
    <td><CopyableCode code="EventStatus" /></td>
    <td><code>string</code></td>
    <td>The status of a health event.</td>
</tr>
<tr id="parameter-LinkedAccountId">
    <td><CopyableCode code="LinkedAccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID for an account that you've set up cross-account sharing for in Amazon CloudWatch Internet Monitor. You configure cross-account sharing by using Amazon CloudWatch Observability Access Manager. For more information, see Internet Monitor cross-account observability in the Amazon CloudWatch Internet Monitor User Guide.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of health event objects that you want to return with this call.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. You receive this token from a previous call.</td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when a health event started.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_health_event"
    values={[
        { label: 'get_health_event', value: 'get_health_event' },
        { label: 'list_health_events', value: 'list_health_events' }
    ]}
>
<TabItem value="get_health_event">

Gets information that Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations, and all the information related to the event, by location. The information returned includes the impact on performance, availability, and round-trip time, information about the network providers (ASNs), the event type, and so on. Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.

```sql
SELECT
CreatedAt,
EndedAt,
EventArn,
EventId,
HealthScoreThreshold,
ImpactType,
ImpactedLocations,
LastUpdatedAt,
PercentOfTotalTrafficImpacted,
StartedAt,
Status
FROM aws.internetmonitor.health_events
WHERE monitor_name = '{{ monitor_name }}' -- required
AND event_id = '{{ event_id }}' -- required
AND region = '{{ region }}' -- required
AND LinkedAccountId = '{{ LinkedAccountId }}'
;
```
</TabItem>
<TabItem value="list_health_events">

Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns information for health events including the event start and end times, and the status. Health events that have start times during the time frame that is requested are not included in the list of health events.

```sql
SELECT
CreatedAt,
EndedAt,
EventArn,
EventId,
HealthScoreThreshold,
ImpactType,
ImpactedLocations,
LastUpdatedAt,
PercentOfTotalTrafficImpacted,
StartedAt,
Status
FROM aws.internetmonitor.health_events
WHERE monitor_name = '{{ monitor_name }}' -- required
AND region = '{{ region }}' -- required
AND StartTime = '{{ StartTime }}'
AND EndTime = '{{ EndTime }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND EventStatus = '{{ EventStatus }}'
AND LinkedAccountId = '{{ LinkedAccountId }}'
;
```
</TabItem>
</Tabs>
