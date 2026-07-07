--- 
title: metrics_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - metrics_summaries
  - codeguru_security
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

Creates, updates, deletes, gets or lists a <code>metrics_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metrics_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguru_security.metrics_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_metrics_summary"
    values={[
        { label: 'get_metrics_summary', value: 'get_metrics_summary' }
    ]}
>
<TabItem value="get_metrics_summary">

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
    <td><CopyableCode code="categoriesWithMostFindings" /></td>
    <td><code>array</code></td>
    <td>A list of CategoryWithFindingNum objects for the top 5 finding categories with the most findings.</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date from which the metrics summary information was retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="openFindings" /></td>
    <td><code>object</code></td>
    <td>The number of open findings of each severity.</td>
</tr>
<tr>
    <td><CopyableCode code="scansWithMostOpenCriticalFindings" /></td>
    <td><code>array</code></td>
    <td>A list of ScanNameWithFindingNum objects for the top 3 scans with the most number of open critical findings.</td>
</tr>
<tr>
    <td><CopyableCode code="scansWithMostOpenFindings" /></td>
    <td><code>array</code></td>
    <td>A list of ScanNameWithFindingNum objects for the top 3 scans with the most number of open findings.</td>
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
    <td><a href="#get_metrics_summary"><CopyableCode code="get_metrics_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-date"><code>date</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a summary of metrics for an account from a specified date, including number of open findings, the categories with most findings, the scans with most open findings, and scans with most open critical findings.</td>
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
<tr id="parameter-date">
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date you want to retrieve summary metrics from, rounded to the nearest day. The date must be within the past two years.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_metrics_summary"
    values={[
        { label: 'get_metrics_summary', value: 'get_metrics_summary' }
    ]}
>
<TabItem value="get_metrics_summary">

Returns a summary of metrics for an account from a specified date, including number of open findings, the categories with most findings, the scans with most open findings, and scans with most open critical findings.

```sql
SELECT
categoriesWithMostFindings,
date,
openFindings,
scansWithMostOpenCriticalFindings,
scansWithMostOpenFindings
FROM aws.codeguru_security.metrics_summaries
WHERE date = '{{ date }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
