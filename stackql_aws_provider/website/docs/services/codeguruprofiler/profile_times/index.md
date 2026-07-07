--- 
title: profile_times
hide_title: false
hide_table_of_contents: false
keywords:
  - profile_times
  - codeguruprofiler
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

Creates, updates, deletes, gets or lists a <code>profile_times</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profile_times" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguruprofiler.profile_times" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_profile_times"
    values={[
        { label: 'list_profile_times', value: 'list_profile_times' }
    ]}
>
<TabItem value="list_profile_times">

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
    <td><CopyableCode code="start" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of a profile. It is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</td>
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
    <td><a href="#list_profile_times"><CopyableCode code="list_profile_times" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-period"><code>period</code></a>, <a href="#parameter-profiling_group_name"><code>profiling_group_name</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.</td>
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
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the time range from which to list the profiles.</td>
</tr>
<tr id="parameter-period">
    <td><CopyableCode code="period" /></td>
    <td><code>string</code></td>
    <td>The aggregation period. This specifies the period during which an aggregation profile collects posted agent profiles for a profiling group. There are 3 valid values. P1D — 1 day PT1H — 1 hour PT5M — 5 minutes</td>
</tr>
<tr id="parameter-profiling_group_name">
    <td><CopyableCode code="profiling_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the profiling group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the time range from which to list the profiles.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of profile time results returned by ListProfileTimes in paginated output. When this parameter is used, ListProfileTimes only returns maxResults results in a single page with a nextToken response element. The remaining results of the initial request can be seen by sending another ListProfileTimes request with the returned nextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated ListProfileTimes request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td>The order (ascending or descending by start time of the profile) to use when listing profiles. Defaults to TIMESTAMP_DESCENDING.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_profile_times"
    values={[
        { label: 'list_profile_times', value: 'list_profile_times' }
    ]}
>
<TabItem value="list_profile_times">

Lists the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.

```sql
SELECT
start
FROM aws.codeguruprofiler.profile_times
WHERE endTime = '{{ endTime }}' -- required
AND period = '{{ period }}' -- required
AND profiling_group_name = '{{ profiling_group_name }}' -- required
AND startTime = '{{ startTime }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND orderBy = '{{ orderBy }}'
;
```
</TabItem>
</Tabs>
