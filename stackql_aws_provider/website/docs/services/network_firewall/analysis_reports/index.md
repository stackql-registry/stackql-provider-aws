--- 
title: analysis_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - analysis_reports
  - network_firewall
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

Creates, updates, deletes, gets or lists an <code>analysis_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="analysis_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.analysis_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_analysis_reports"
    values={[
        { label: 'list_analysis_reports', value: 'list_analysis_reports' }
    ]}
>
<TabItem value="list_analysis_reports">

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
    <td><CopyableCode code="AnalysisReportId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the query that ran when you requested an analysis report. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AnalysisType" /></td>
    <td><code>string</code></td>
    <td>The type of traffic that will be used to generate a report. (TLS_SNI, HTTP_HOST)</td>
</tr>
<tr>
    <td><CopyableCode code="ReportTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the analysis report was ran.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the analysis report you specify. Statuses include RUNNING, COMPLETED, or FAILED.</td>
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
    <td><a href="#list_analysis_reports"><CopyableCode code="list_analysis_reports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all traffic analysis reports generated within the last 30 days.</td>
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
    defaultValue="list_analysis_reports"
    values={[
        { label: 'list_analysis_reports', value: 'list_analysis_reports' }
    ]}
>
<TabItem value="list_analysis_reports">

Returns a list of all traffic analysis reports generated within the last 30 days.

```sql
SELECT
AnalysisReportId,
AnalysisType,
ReportTime,
Status
FROM aws.network_firewall.analysis_reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
