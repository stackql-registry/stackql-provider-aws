--- 
title: analysis_log_exports
hide_title: false
hide_table_of_contents: false
keywords:
  - analysis_log_exports
  - cleanrooms
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

Creates, updates, deletes, gets or lists an <code>analysis_log_exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="analysis_log_exports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.analysis_log_exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_analysis_log_export"
    values={[
        { label: 'get_analysis_log_export', value: 'get_analysis_log_export' },
        { label: 'list_analysis_log_exports', value: 'list_analysis_log_exports' }
    ]}
>
<TabItem value="get_analysis_log_export">

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
    <td><CopyableCode code="analysis_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the protected query that the analysis logs were exported for. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analysis_log_export_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the analysis log export. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analysis_type" /></td>
    <td><code>string</code></td>
    <td>The type of analysis that the logs were exported for. Currently, only PROTECTED_QUERY is supported. (PROTECTED_QUERY)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the analysis log export was created.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The analysis log export error. This is present only when the export status is FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the membership that the analysis log export belongs to. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="result_configuration" /></td>
    <td><code>object</code></td>
    <td>Contains the details needed to write the exported analysis logs.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the analysis log export. Possible values are: IN_PROGRESS – The export is currently running. SUCCESS – The export completed successfully. FAILED – The export failed. See the error field for details. (IN_PROGRESS, SUCCESS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the analysis log export was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_analysis_log_exports">

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
    <td><CopyableCode code="analysis_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the protected query that the analysis logs were exported for. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analysis_log_export_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the analysis log export. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analysis_type" /></td>
    <td><code>string</code></td>
    <td>The type of analysis that the logs were exported for. Currently, only PROTECTED_QUERY is supported. (PROTECTED_QUERY)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the analysis log export was created.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the analysis log export. Possible values are: IN_PROGRESS – The export is currently running. SUCCESS – The export completed successfully. FAILED – The export failed. (IN_PROGRESS, SUCCESS, FAILED)</td>
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
    <td><a href="#get_analysis_log_export"><CopyableCode code="get_analysis_log_export" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-analysis_log_export_identifier"><code>analysis_log_export_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an analysis log export, including its current status and, if the export failed, the reason for the failure. Poll this operation until the status is SUCCESS or FAILED. An export can't be canceled after it starts.</td>
</tr>
<tr>
    <td><a href="#list_analysis_log_exports"><CopyableCode code="list_analysis_log_exports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-analysisIdentifier"><code>analysisIdentifier</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists analysis log exports, sorted by the most recent export. Results are paginated. Use the nextToken parameter to retrieve additional results.</td>
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
<tr id="parameter-analysis_log_export_identifier">
    <td><CopyableCode code="analysis_log_export_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the analysis log export to retrieve.</td>
</tr>
<tr id="parameter-membership_identifier">
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the membership to list analysis log exports for. Currently accepts the membership ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-analysisIdentifier">
    <td><CopyableCode code="analysisIdentifier" /></td>
    <td><code>string</code></td>
    <td>A filter on the unique identifier of the protected query that the analysis logs were exported for.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a nextToken even if the maxResults value has not been met.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A filter on the status of the analysis log export.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_analysis_log_export"
    values={[
        { label: 'get_analysis_log_export', value: 'get_analysis_log_export' },
        { label: 'list_analysis_log_exports', value: 'list_analysis_log_exports' }
    ]}
>
<TabItem value="get_analysis_log_export">

Returns information about an analysis log export, including its current status and, if the export failed, the reason for the failure. Poll this operation until the status is SUCCESS or FAILED. An export can't be canceled after it starts.

```sql
SELECT
analysis_id,
analysis_log_export_id,
analysis_type,
create_time,
error,
membership_id,
result_configuration,
status,
update_time
FROM aws.cleanrooms.analysis_log_exports
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND analysis_log_export_identifier = '{{ analysis_log_export_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_analysis_log_exports">

Lists analysis log exports, sorted by the most recent export. Results are paginated. Use the nextToken parameter to retrieve additional results.

```sql
SELECT
analysis_id,
analysis_log_export_id,
analysis_type,
create_time,
status
FROM aws.cleanrooms.analysis_log_exports
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
AND analysisIdentifier = '{{ analysisIdentifier }}'
AND status = '{{ status }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
