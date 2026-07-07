--- 
title: findings_report_account_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - findings_report_account_summaries
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

Creates, updates, deletes, gets or lists a <code>findings_report_account_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings_report_account_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguruprofiler.findings_report_account_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_findings_report_account_summary"
    values={[
        { label: 'get_findings_report_account_summary', value: 'get_findings_report_account_summary' }
    ]}
>
<TabItem value="get_findings_report_account_summary">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value to include in a future GetFindingsReportAccountSummary request. When the results of a GetFindingsReportAccountSummary request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return. (pattern: &lt;code&gt;^&#91;\w-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="reportSummaries" /></td>
    <td><code>array</code></td>
    <td>The return list of FindingsReportSummary objects taht contain summaries of analysis results for all profiling groups in your AWS account.</td>
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
    <td><a href="#get_findings_report_account_summary"><CopyableCode code="get_findings_report_account_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-dailyReportsOnly"><code>dailyReportsOnly</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of FindingsReportSummary objects that contain analysis results for all profiling groups in your AWS account.</td>
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
<tr id="parameter-dailyReportsOnly">
    <td><CopyableCode code="dailyReportsOnly" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether to only return reports from daily profiles. If set to True, only analysis data from daily profiles is returned. If set to False, analysis data is returned from smaller time windows (for example, one hour).</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results returned by GetFindingsReportAccountSummary in paginated output. When this parameter is used, GetFindingsReportAccountSummary only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another GetFindingsReportAccountSummary request with the returned nextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated GetFindingsReportAccountSummary request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_findings_report_account_summary"
    values={[
        { label: 'get_findings_report_account_summary', value: 'get_findings_report_account_summary' }
    ]}
>
<TabItem value="get_findings_report_account_summary">

Returns a list of FindingsReportSummary objects that contain analysis results for all profiling groups in your AWS account.

```sql
SELECT
nextToken,
reportSummaries
FROM aws.codeguruprofiler.findings_report_account_summaries
WHERE region = '{{ region }}' -- required
AND dailyReportsOnly = '{{ dailyReportsOnly }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
