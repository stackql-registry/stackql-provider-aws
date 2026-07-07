--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
  - elasticache
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_events"
    values={[
        { label: 'describe_events', value: 'describe_events' }
    ]}
>
<TabItem value="describe_events">

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
    <td><CopyableCode code="Date" /></td>
    <td><code>string</code></td>
    <td>The date and time when the event occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>The text of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the source of the event. For example, if the event occurred at the cluster level, the identifier would be the name of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>Specifies the origin of this event - a cluster, a parameter group, a security group, etc.</td>
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
    <td><a href="#describe_events"><CopyableCode code="describe_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SourceIdentifier"><code>SourceIdentifier</code></a>, <a href="#parameter-SourceType"><code>SourceType</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-Duration"><code>Duration</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</td>
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
<tr id="parameter-Duration">
    <td><CopyableCode code="Duration" /></td>
    <td><code>integer</code></td>
    <td>The number of minutes worth of events to retrieve.</td>
</tr>
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the time interval for which to retrieve events, specified in ISO 8601 format. Example: 2017-03-30T07:03:49.555Z</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.</td>
</tr>
<tr id="parameter-SourceIdentifier">
    <td><CopyableCode code="SourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the event source for which events are returned. If not specified, all sources are included in the response.</td>
</tr>
<tr id="parameter-SourceType">
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>The event source to retrieve events for. If no value is specified, all events are returned.</td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The beginning of the time interval to retrieve events for, specified in ISO 8601 format. Example: 2017-03-30T07:03:49.555Z</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_events"
    values={[
        { label: 'describe_events', value: 'describe_events' }
    ]}
>
<TabItem value="describe_events">

Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.

```sql
SELECT
Date,
Message,
SourceIdentifier,
SourceType
FROM aws.elasticache.events
WHERE region = '{{ region }}' -- required
AND SourceIdentifier = '{{ SourceIdentifier }}'
AND SourceType = '{{ SourceType }}'
AND StartTime = '{{ StartTime }}'
AND EndTime = '{{ EndTime }}'
AND Duration = '{{ Duration }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
