--- 
title: reports
hide_title: false
hide_table_of_contents: false
keywords:
  - reports
  - codebuild
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

Creates, updates, deletes, gets or lists a <code>reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codebuild.reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_reports"
    values={[
        { label: 'batch_get_reports', value: 'batch_get_reports' },
        { label: 'list_reports', value: 'list_reports' }
    ]}
>
<TabItem value="batch_get_reports">

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
    <td><CopyableCode code="reports" /></td>
    <td><code>array</code></td>
    <td>The array of Report objects returned by BatchGetReports.</td>
</tr>
<tr>
    <td><CopyableCode code="reports_not_found" /></td>
    <td><code>array</code></td>
    <td>An array of ARNs passed to BatchGetReportGroups that are not associated with a Report.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_reports">

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
    <td><CopyableCode code="report" /></td>
    <td><code>string</code></td>
    <td>The list of returned ARNs for the reports in the current Amazon Web Services account.</td>
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
    <td><a href="#batch_get_reports"><CopyableCode code="batch_get_reports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of reports.</td>
</tr>
<tr>
    <td><a href="#list_reports"><CopyableCode code="list_reports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of ARNs for the reports in the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#delete_report"><CopyableCode code="delete_report" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a report.</td>
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
    defaultValue="batch_get_reports"
    values={[
        { label: 'batch_get_reports', value: 'batch_get_reports' },
        { label: 'list_reports', value: 'list_reports' }
    ]}
>
<TabItem value="batch_get_reports">

Returns an array of reports.

```sql
SELECT
reports,
reports_not_found
FROM aws.codebuild.reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_reports">

Returns a list of ARNs for the reports in the current Amazon Web Services account.

```sql
SELECT
report
FROM aws.codebuild.reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_report"
    values={[
        { label: 'delete_report', value: 'delete_report' }
    ]}
>
<TabItem value="delete_report">

Deletes a report.

```sql
DELETE FROM aws.codebuild.reports
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
