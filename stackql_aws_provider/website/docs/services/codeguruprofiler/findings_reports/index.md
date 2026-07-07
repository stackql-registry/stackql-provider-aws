--- 
title: findings_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - findings_reports
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

Creates, updates, deletes, gets or lists a <code>findings_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguruprofiler.findings_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_findings_reports"
    values={[
        { label: 'list_findings_reports', value: 'list_findings_reports' }
    ]}
>
<TabItem value="list_findings_reports">

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
    <td><CopyableCode code="findingsReportSummaries" /></td>
    <td><code>array</code></td>
    <td>The list of analysis results summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value to include in a future ListFindingsReports request. When the results of a ListFindingsReports request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return. (pattern: &lt;code&gt;^&#91;\w-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#list_findings_reports"><CopyableCode code="list_findings_reports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-profiling_group_name"><code>profiling_group_name</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-dailyReportsOnly"><code>dailyReportsOnly</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List the available reports for a given profiling group and time range.</td>
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
    <td>The end time of the profile to get analysis data about. You must specify startTime and endTime. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</td>
</tr>
<tr id="parameter-profiling_group_name">
    <td><CopyableCode code="profiling_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the profiling group from which to search for analysis data.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the profile to get analysis data about. You must specify startTime and endTime. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</td>
</tr>
<tr id="parameter-dailyReportsOnly">
    <td><CopyableCode code="dailyReportsOnly" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether to only return reports from daily profiles. If set to True, only analysis data from daily profiles is returned. If set to False, analysis data is returned from smaller time windows (for example, one hour).</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of report results returned by ListFindingsReports in paginated output. When this parameter is used, ListFindingsReports only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListFindingsReports request with the returned nextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated ListFindingsReportsRequest request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_findings_reports"
    values={[
        { label: 'list_findings_reports', value: 'list_findings_reports' }
    ]}
>
<TabItem value="list_findings_reports">

List the available reports for a given profiling group and time range.

```sql
SELECT
findingsReportSummaries,
nextToken
FROM aws.codeguruprofiler.findings_reports
WHERE endTime = '{{ endTime }}' -- required
AND profiling_group_name = '{{ profiling_group_name }}' -- required
AND startTime = '{{ startTime }}' -- required
AND region = '{{ region }}' -- required
AND dailyReportsOnly = '{{ dailyReportsOnly }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
