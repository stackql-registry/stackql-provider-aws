--- 
title: report_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - report_versions
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

Creates, updates, deletes, gets or lists a <code>report_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="report_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.artifact.report_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_report_versions"
    values={[
        { label: 'list_report_versions', value: 'list_report_versions' }
    ]}
>
<TabItem value="list_report_versions">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Unique resource ID for the report resource. (pattern: &lt;code&gt;report-&#91;a-zA-Z0-9&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name for the report resource. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\-\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="acceptanceType" /></td>
    <td><code>string</code></td>
    <td>Acceptance type for report. (PASSTHROUGH, EXPLICIT)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>ARN for the report resource. (pattern: &lt;code&gt;&#91;^&lt;&gt;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Category for the report resource. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\-\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="companyName" /></td>
    <td><code>string</code></td>
    <td>Associated company name for the report resource. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\-\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description for the report resource. (pattern: &lt;code&gt;&#91;^&lt;&gt;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="periodEnd" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp indicating the report resource effective end.</td>
</tr>
<tr>
    <td><CopyableCode code="periodStart" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp indicating the report resource effective start.</td>
</tr>
<tr>
    <td><CopyableCode code="productName" /></td>
    <td><code>string</code></td>
    <td>Associated product name for the report resource. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\-\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="series" /></td>
    <td><code>string</code></td>
    <td>Series for the report resource. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\-\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the report resource. (PUBLISHED, UNPUBLISHED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>The message associated with the current upload state.</td>
</tr>
<tr>
    <td><CopyableCode code="uploadState" /></td>
    <td><code>string</code></td>
    <td>The current state of the document upload. (PROCESSING, COMPLETE, FAILED, FAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>Version for the report resource.</td>
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
    <td><a href="#list_report_versions"><CopyableCode code="list_report_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-reportId"><code>reportId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List available report versions for a given report.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of resources to return in the paginated response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token to request the next page of resources.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_report_versions"
    values={[
        { label: 'list_report_versions', value: 'list_report_versions' }
    ]}
>
<TabItem value="list_report_versions">

List available report versions for a given report.

```sql
SELECT
id,
name,
acceptanceType,
arn,
category,
companyName,
description,
periodEnd,
periodStart,
productName,
series,
state,
statusMessage,
uploadState,
version
FROM aws.artifact.report_versions
WHERE reportId = '{{ reportId }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
