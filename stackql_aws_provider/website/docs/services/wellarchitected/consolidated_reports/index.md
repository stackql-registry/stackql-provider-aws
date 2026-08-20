--- 
title: consolidated_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - consolidated_reports
  - wellarchitected
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

Creates, updates, deletes, gets or lists a <code>consolidated_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="consolidated_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.consolidated_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_consolidated_report"
    values={[
        { label: 'get_consolidated_report', value: 'get_consolidated_report' }
    ]}
>
<TabItem value="get_consolidated_report">

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
    <td><CopyableCode code="base_64_string" /></td>
    <td><code>string</code></td>
    <td>The Base64-encoded string representation of a lens review report. This data can be used to create a PDF file. Only returned by GetConsolidatedReport when PDF format is requested.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>The metrics that make up the consolidated report. Only returned when JSON format is requested.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next set of results. (pattern: &lt;code&gt;&#91;A-Za-z0-9+\/=_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_consolidated_report"><CopyableCode code="get_consolidated_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-Format"><code>Format</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-IncludeSharedResources"><code>IncludeSharedResources</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Get a consolidated report of your workloads. You can optionally choose to include workloads that have been shared with you.</td>
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
<tr id="parameter-Format">
    <td><CopyableCode code="Format" /></td>
    <td><code>string</code></td>
    <td>The format of the consolidated report. For PDF, Base64String is returned. For JSON, Metrics is returned.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-IncludeSharedResources">
    <td><CopyableCode code="IncludeSharedResources" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to have shared resources included in the report.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for this request.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_consolidated_report"
    values={[
        { label: 'get_consolidated_report', value: 'get_consolidated_report' }
    ]}
>
<TabItem value="get_consolidated_report">

Get a consolidated report of your workloads. You can optionally choose to include workloads that have been shared with you.

```sql
SELECT
base_64_string,
metrics,
next_token
FROM aws.wellarchitected.consolidated_reports
WHERE Format = '{{ Format }}' -- required
AND region = '{{ region }}' -- required
AND IncludeSharedResources = '{{ IncludeSharedResources }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
