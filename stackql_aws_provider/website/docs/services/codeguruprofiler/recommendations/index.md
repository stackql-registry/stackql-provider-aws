--- 
title: recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendations
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

Creates, updates, deletes, gets or lists a <code>recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguruprofiler.recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recommendations"
    values={[
        { label: 'get_recommendations', value: 'get_recommendations' }
    ]}
>
<TabItem value="get_recommendations">

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
    <td><CopyableCode code="anomalies" /></td>
    <td><code>array</code></td>
    <td>The list of anomalies that the analysis has found for this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the profile the analysis data is about. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the profile the analysis data is about. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="profiling_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the profiling group the analysis data is about. (pattern: &lt;code&gt;^&#91;\w-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendations" /></td>
    <td><code>array</code></td>
    <td>The list of recommendations that the analysis found for this profile.</td>
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
    <td><a href="#get_recommendations"><CopyableCode code="get_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-profiling_group_name"><code>profiling_group_name</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-locale"><code>locale</code></a></td>
    <td>Returns a list of Recommendation objects that contain recommendations for a profiling group for a given time period. A list of Anomaly objects that contains details about anomalies detected in the profiling group for the same time period is also returned.</td>
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
    <td>The start time of the profile to get analysis data about. You must specify startTime and endTime. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</td>
</tr>
<tr id="parameter-profiling_group_name">
    <td><CopyableCode code="profiling_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the profiling group to get analysis data about.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the profile to get analysis data about. You must specify startTime and endTime. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</td>
</tr>
<tr id="parameter-locale">
    <td><CopyableCode code="locale" /></td>
    <td><code>string</code></td>
    <td>The language used to provide analysis. Specify using a string that is one of the following BCP 47 language codes. de-DE - German, Germany en-GB - English, United Kingdom en-US - English, United States es-ES - Spanish, Spain fr-FR - French, France it-IT - Italian, Italy ja-JP - Japanese, Japan ko-KR - Korean, Republic of Korea pt-BR - Portugese, Brazil zh-CN - Chinese, China zh-TW - Chinese, Taiwan</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_recommendations"
    values={[
        { label: 'get_recommendations', value: 'get_recommendations' }
    ]}
>
<TabItem value="get_recommendations">

Returns a list of Recommendation objects that contain recommendations for a profiling group for a given time period. A list of Anomaly objects that contains details about anomalies detected in the profiling group for the same time period is also returned.

```sql
SELECT
anomalies,
profile_end_time,
profile_start_time,
profiling_group_name,
recommendations
FROM aws.codeguruprofiler.recommendations
WHERE endTime = '{{ endTime }}' -- required
AND profiling_group_name = '{{ profiling_group_name }}' -- required
AND startTime = '{{ startTime }}' -- required
AND region = '{{ region }}' -- required
AND locale = '{{ locale }}'
;
```
</TabItem>
</Tabs>
