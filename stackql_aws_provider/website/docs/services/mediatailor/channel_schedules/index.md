--- 
title: channel_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_schedules
  - mediatailor
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

Creates, updates, deletes, gets or lists a <code>channel_schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channel_schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediatailor.channel_schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_channel_schedule"
    values={[
        { label: 'get_channel_schedule', value: 'get_channel_schedule' }
    ]}
>
<TabItem value="get_channel_schedule">

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
    <td><CopyableCode code="ApproximateDurationSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The approximate duration of this program, in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="ApproximateStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The approximate time that the program will start playing.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the program.</td>
</tr>
<tr>
    <td><CopyableCode code="Audiences" /></td>
    <td><code>array</code></td>
    <td>The list of audiences defined in ScheduleEntry.</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelName" /></td>
    <td><code>string</code></td>
    <td>The name of the channel that uses this schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="LiveSourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the live source used for the program.</td>
</tr>
<tr>
    <td><CopyableCode code="ProgramName" /></td>
    <td><code>string</code></td>
    <td>The name of the program.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleAdBreaks" /></td>
    <td><code>array</code></td>
    <td>The schedule's ad break properties.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleEntryType" /></td>
    <td><code>string</code></td>
    <td>The type of schedule entry. (PROGRAM, FILLER_SLATE, ALTERNATE_MEDIA)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceLocationName" /></td>
    <td><code>string</code></td>
    <td>The name of the source location.</td>
</tr>
<tr>
    <td><CopyableCode code="VodSourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the VOD source.</td>
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
    <td><a href="#get_channel_schedule"><CopyableCode code="get_channel_schedule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-durationMinutes"><code>durationMinutes</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-audience"><code>audience</code></a></td>
    <td>Retrieves information about your channel's schedule.</td>
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
<tr id="parameter-channel_name">
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name of the channel associated with this Channel Schedule.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-audience">
    <td><CopyableCode code="audience" /></td>
    <td><code>string</code></td>
    <td>The single audience for GetChannelScheduleRequest.</td>
</tr>
<tr id="parameter-durationMinutes">
    <td><CopyableCode code="durationMinutes" /></td>
    <td><code>string</code></td>
    <td>The duration in minutes of the channel schedule.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of channel schedules that you want MediaTailor to return in response to the current request. If there are more than MaxResults channel schedules, use the value of NextToken in the response to get the next page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>(Optional) If the playback configuration has more than MaxResults channel schedules, use NextToken to get the second and subsequent pages of results. For the first GetChannelScheduleRequest request, omit this value. For the second and subsequent requests, get the value of NextToken from the previous response and specify that value for NextToken in the request. If the previous response didn't include a NextToken element, there are no more channel schedules to get.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_channel_schedule"
    values={[
        { label: 'get_channel_schedule', value: 'get_channel_schedule' }
    ]}
>
<TabItem value="get_channel_schedule">

Retrieves information about your channel's schedule.

```sql
SELECT
ApproximateDurationSeconds,
ApproximateStartTime,
Arn,
Audiences,
ChannelName,
LiveSourceName,
ProgramName,
ScheduleAdBreaks,
ScheduleEntryType,
SourceLocationName,
VodSourceName
FROM aws.mediatailor.channel_schedules
WHERE channel_name = '{{ channel_name }}' -- required
AND region = '{{ region }}' -- required
AND durationMinutes = '{{ durationMinutes }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND audience = '{{ audience }}'
;
```
</TabItem>
</Tabs>
