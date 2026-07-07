--- 
title: profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - profiles
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

Creates, updates, deletes, gets or lists a <code>profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguruprofiler.profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_profile"
    values={[
        { label: 'get_profile', value: 'get_profile' }
    ]}
>
<TabItem value="get_profile">

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
    <td><CopyableCode code="contentEncoding" /></td>
    <td><code>string</code></td>
    <td>The content encoding of the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The content type of the profile in the payload. It is either application/json or the default application/x-amzn-ion.</td>
</tr>
<tr>
    <td><CopyableCode code="profile" /></td>
    <td><code>string (byte)</code></td>
    <td>Information about the profile.</td>
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
    <td><a href="#get_profile"><CopyableCode code="get_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profiling_group_name"><code>profiling_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-maxDepth"><code>maxDepth</code></a>, <a href="#parameter-period"><code>period</code></a>, <a href="#parameter-startTime"><code>startTime</code></a></td>
    <td>Gets the aggregated profile of a profiling group for a specified time range. Amazon CodeGuru Profiler collects posted agent profiles for a profiling group into aggregated profiles. <code>&lt;note&gt;</code> <code>&lt;p&gt;</code> Because aggregated profiles expire over time <code>&lt;code&gt;</code>GetProfile&lt;/code&gt; is not idempotent. &lt;/p&gt; &lt;/note&gt; <code>&lt;p&gt;</code> Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: <code>&lt;code&gt;</code>startTime&lt;/code&gt;, <code>&lt;code&gt;</code>endTime&lt;/code&gt;, <code>&lt;code&gt;</code>period&lt;/code&gt;. The maximum time range allowed is 7 days. If you specify all 3 parameters, an exception is thrown. If you specify only <code>&lt;code&gt;</code>period&lt;/code&gt;, the latest aggregated profile is returned. &lt;/p&gt; <code>&lt;p&gt;</code> Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to UTC. The aggregation period of an aggregated profile determines how long it is retained. For more information, see &lt;a href="https:​//docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html"&gt; <code>&lt;code&gt;</code>AggregatedProfileTime&lt;/code&gt; &lt;/a&gt;. The aggregated profile's aggregation period determines how long it is retained by CodeGuru Profiler. &lt;/p&gt; <code>&lt;ul&gt;</code> <code>&lt;li&gt;</code> <code>&lt;p&gt;</code> If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days. &lt;/p&gt; &lt;/li&gt; <code>&lt;li&gt;</code> <code>&lt;p&gt;</code> If the aggregation period is 1 hour, the aggregated profile is retained for 60 days. &lt;/p&gt; &lt;/li&gt; <code>&lt;li&gt;</code> <code>&lt;p&gt;</code> If the aggregation period is 1 day, the aggregated profile is retained for 3 years. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; <code>&lt;p&gt;</code>There are two use cases for calling <code>&lt;code&gt;</code>GetProfile&lt;/code&gt;.&lt;/p&gt; <code>&lt;ol&gt;</code> <code>&lt;li&gt;</code> <code>&lt;p&gt;</code> If you want to return an aggregated profile that already exists, use &lt;a href="https:​//docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html"&gt; <code>&lt;code&gt;</code>ListProfileTimes&lt;/code&gt; &lt;/a&gt; to view the time ranges of existing aggregated profiles. Use them in a <code>&lt;code&gt;</code>GetProfile&lt;/code&gt; request to return a specific, existing aggregated profile. &lt;/p&gt; &lt;/li&gt; <code>&lt;li&gt;</code> <code>&lt;p&gt;</code> If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile, then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time range and return them as one aggregated profile. &lt;/p&gt; <code>&lt;p&gt;</code> If aggregated profiles do not exist for the full time range requested, then aggregated profiles for a smaller time range are returned. For example, if the requested time range is from 00:00 to 00:20, and the existing aggregated profiles are from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. &lt;/p&gt; &lt;/li&gt; &lt;/ol&gt;</td>
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
<tr id="parameter-profiling_group_name">
    <td><CopyableCode code="profiling_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the profiling group to get.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Accept">
    <td><CopyableCode code="Accept" /></td>
    <td><code>string</code></td>
    <td>The format of the returned profiling data. The format maps to the Accept and Content-Type headers of the HTTP request. You can specify one of the following: or the default . <code>&lt;ul&gt;</code> <code>&lt;li&gt;</code> <code>&lt;p&gt;</code> <code>&lt;code&gt;</code>application/json&lt;/code&gt; — standard JSON format &lt;/p&gt; &lt;/li&gt; <code>&lt;li&gt;</code> <code>&lt;p&gt;</code> <code>&lt;code&gt;</code>application/x-amzn-ion&lt;/code&gt; — the Amazon Ion data format. For more information, see &lt;a href="http:​//amzn.github.io/ion-docs/"&gt;Amazon Ion&lt;/a&gt;. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt;</td>
</tr>
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the requested profile. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. If you specify endTime, then you must also specify period or startTime, but not both.</td>
</tr>
<tr id="parameter-maxDepth">
    <td><CopyableCode code="maxDepth" /></td>
    <td><code>integer</code></td>
    <td>The maximum depth of the stacks in the code that is represented in the aggregated profile. For example, if CodeGuru Profiler finds a method A, which calls method B, which calls method C, which calls method D, then the depth is 4. If the maxDepth is set to 2, then the aggregated profile contains representations of methods A and B.</td>
</tr>
<tr id="parameter-period">
    <td><CopyableCode code="period" /></td>
    <td><code>string</code></td>
    <td>Used with startTime or endTime to specify the time range for the returned aggregated profile. Specify using the ISO 8601 format. For example, P1DT1H1M1S. <code>&lt;p&gt;</code> To get the latest aggregated profile, specify only <code>&lt;code&gt;</code>period&lt;/code&gt;. &lt;/p&gt;</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the profile to get. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. <code>&lt;p&gt;</code> If you specify <code>&lt;code&gt;</code>startTime&lt;/code&gt;, then you must also specify <code>&lt;code&gt;</code>period&lt;/code&gt; or <code>&lt;code&gt;</code>endTime&lt;/code&gt;, but not both. &lt;/p&gt;</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_profile"
    values={[
        { label: 'get_profile', value: 'get_profile' }
    ]}
>
<TabItem value="get_profile">

Gets the aggregated profile of a profiling group for a specified time range. Amazon CodeGuru Profiler collects posted agent profiles for a profiling group into aggregated profiles. <code>&lt;note&gt;</code> <code>&lt;p&gt;</code> Because aggregated profiles expire over time <code>&lt;code&gt;</code>GetProfile&lt;/code&gt; is not idempotent. &lt;/p&gt; &lt;/note&gt; <code>&lt;p&gt;</code> Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: <code>&lt;code&gt;</code>startTime&lt;/code&gt;, <code>&lt;code&gt;</code>endTime&lt;/code&gt;, <code>&lt;code&gt;</code>period&lt;/code&gt;. The maximum time range allowed is 7 days. If you specify all 3 parameters, an exception is thrown. If you specify only <code>&lt;code&gt;</code>period&lt;/code&gt;, the latest aggregated profile is returned. &lt;/p&gt; <code>&lt;p&gt;</code> Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to UTC. The aggregation period of an aggregated profile determines how long it is retained. For more information, see &lt;a href="https:​//docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html"&gt; <code>&lt;code&gt;</code>AggregatedProfileTime&lt;/code&gt; &lt;/a&gt;. The aggregated profile's aggregation period determines how long it is retained by CodeGuru Profiler. &lt;/p&gt; <code>&lt;ul&gt;</code> <code>&lt;li&gt;</code> <code>&lt;p&gt;</code> If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days. &lt;/p&gt; &lt;/li&gt; <code>&lt;li&gt;</code> <code>&lt;p&gt;</code> If the aggregation period is 1 hour, the aggregated profile is retained for 60 days. &lt;/p&gt; &lt;/li&gt; <code>&lt;li&gt;</code> <code>&lt;p&gt;</code> If the aggregation period is 1 day, the aggregated profile is retained for 3 years. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; <code>&lt;p&gt;</code>There are two use cases for calling <code>&lt;code&gt;</code>GetProfile&lt;/code&gt;.&lt;/p&gt; <code>&lt;ol&gt;</code> <code>&lt;li&gt;</code> <code>&lt;p&gt;</code> If you want to return an aggregated profile that already exists, use &lt;a href="https:​//docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html"&gt; <code>&lt;code&gt;</code>ListProfileTimes&lt;/code&gt; &lt;/a&gt; to view the time ranges of existing aggregated profiles. Use them in a <code>&lt;code&gt;</code>GetProfile&lt;/code&gt; request to return a specific, existing aggregated profile. &lt;/p&gt; &lt;/li&gt; <code>&lt;li&gt;</code> <code>&lt;p&gt;</code> If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile, then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time range and return them as one aggregated profile. &lt;/p&gt; <code>&lt;p&gt;</code> If aggregated profiles do not exist for the full time range requested, then aggregated profiles for a smaller time range are returned. For example, if the requested time range is from 00:00 to 00:20, and the existing aggregated profiles are from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. &lt;/p&gt; &lt;/li&gt; &lt;/ol&gt;

```sql
SELECT
contentEncoding,
contentType,
profile
FROM aws.codeguruprofiler.profiles
WHERE profiling_group_name = '{{ profiling_group_name }}' -- required
AND region = '{{ region }}' -- required
AND Accept = '{{ Accept }}'
AND endTime = '{{ endTime }}'
AND maxDepth = '{{ maxDepth }}'
AND period = '{{ period }}'
AND startTime = '{{ startTime }}'
;
```
</TabItem>
</Tabs>
