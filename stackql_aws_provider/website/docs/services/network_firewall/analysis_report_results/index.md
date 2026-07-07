--- 
title: analysis_report_results
hide_title: false
hide_table_of_contents: false
keywords:
  - analysis_report_results
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

Creates, updates, deletes, gets or lists an <code>analysis_report_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="analysis_report_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.analysis_report_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_analysis_report_results"
    values={[
        { label: 'get_analysis_report_results', value: 'get_analysis_report_results' }
    ]}
>
<TabItem value="get_analysis_report_results">

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
    <td><CopyableCode code="Domain" /></td>
    <td><code>string</code></td>
    <td>The most frequently accessed domains.</td>
</tr>
<tr>
    <td><CopyableCode code="FirstAccessed" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time any domain was first accessed (within the last 30 day period).</td>
</tr>
<tr>
    <td><CopyableCode code="Hits" /></td>
    <td><code>object</code></td>
    <td>The number of attempts made to access a observed domain.</td>
</tr>
<tr>
    <td><CopyableCode code="LastAccessed" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time any domain was last accessed (within the last 30 day period).</td>
</tr>
<tr>
    <td><CopyableCode code="Protocol" /></td>
    <td><code>string</code></td>
    <td>The type of traffic captured by the analysis report.</td>
</tr>
<tr>
    <td><CopyableCode code="UniqueSources" /></td>
    <td><code>object</code></td>
    <td>The number of unique source IP addresses that connected to a domain.</td>
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
    <td><a href="#get_analysis_report_results"><CopyableCode code="get_analysis_report_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The results of a COMPLETED analysis report generated with StartAnalysisReport. For more information, see AnalysisTypeReportResult.</td>
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
    defaultValue="get_analysis_report_results"
    values={[
        { label: 'get_analysis_report_results', value: 'get_analysis_report_results' }
    ]}
>
<TabItem value="get_analysis_report_results">

The results of a COMPLETED analysis report generated with StartAnalysisReport. For more information, see AnalysisTypeReportResult.

```sql
SELECT
Domain,
FirstAccessed,
Hits,
LastAccessed,
Protocol,
UniqueSources
FROM aws.network_firewall.analysis_report_results
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
