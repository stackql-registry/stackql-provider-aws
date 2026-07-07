--- 
title: term_for_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - term_for_reports
  - artifact
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

Creates, updates, deletes, gets or lists a <code>term_for_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="term_for_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.artifact.term_for_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_term_for_report"
    values={[
        { label: 'get_term_for_report', value: 'get_term_for_report' }
    ]}
>
<TabItem value="get_term_for_report">

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
    <td><CopyableCode code="documentPresignedUrl" /></td>
    <td><code>string</code></td>
    <td>Presigned S3 url to access the term content.</td>
</tr>
<tr>
    <td><CopyableCode code="termToken" /></td>
    <td><code>string</code></td>
    <td>Unique token representing this request event.</td>
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
    <td><a href="#get_term_for_report"><CopyableCode code="get_term_for_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-reportId"><code>reportId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-reportVersion"><code>reportVersion</code></a></td>
    <td>Get the Term content associated with a single report.</td>
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
<tr id="parameter-reportId">
    <td><CopyableCode code="reportId" /></td>
    <td><code>string</code></td>
    <td>Unique resource ID for the report resource.</td>
</tr>
<tr id="parameter-reportVersion">
    <td><CopyableCode code="reportVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>Version for the report resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_term_for_report"
    values={[
        { label: 'get_term_for_report', value: 'get_term_for_report' }
    ]}
>
<TabItem value="get_term_for_report">

Get the Term content associated with a single report.

```sql
SELECT
documentPresignedUrl,
termToken
FROM aws.artifact.term_for_reports
WHERE reportId = '{{ reportId }}' -- required
AND region = '{{ region }}' -- required
AND reportVersion = '{{ reportVersion }}'
;
```
</TabItem>
</Tabs>
