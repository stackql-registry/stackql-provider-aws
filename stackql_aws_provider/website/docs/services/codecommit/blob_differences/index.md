--- 
title: blob_differences
hide_title: false
hide_table_of_contents: false
keywords:
  - blob_differences
  - codecommit
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

Creates, updates, deletes, gets or lists a <code>blob_differences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="blob_differences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.blob_differences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_blob_differences"
    values={[
        { label: 'get_blob_differences', value: 'get_blob_differences' }
    ]}
>
<TabItem value="get_blob_differences">

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
    <td><CopyableCode code="after_line_count" /></td>
    <td><code>integer</code></td>
    <td>The number of lines from the after blob covered by this hunk, including any context lines.</td>
</tr>
<tr>
    <td><CopyableCode code="after_start_line" /></td>
    <td><code>integer</code></td>
    <td>The 1-based line number in the after blob where this hunk begins. When the hunk consists entirely of deletions, afterLineCount is 0.</td>
</tr>
<tr>
    <td><CopyableCode code="before_line_count" /></td>
    <td><code>integer</code></td>
    <td>The number of lines from the before blob covered by this hunk, including any context lines.</td>
</tr>
<tr>
    <td><CopyableCode code="before_start_line" /></td>
    <td><code>integer</code></td>
    <td>The 1-based line number in the before blob where this hunk begins. When the hunk consists entirely of additions, beforeLineCount is 0.</td>
</tr>
<tr>
    <td><CopyableCode code="changes" /></td>
    <td><code>array</code></td>
    <td>An ordered list of line-level changes that make up this hunk. Each entry indicates whether the line is unchanged context, an addition, or a deletion.</td>
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
    <td><a href="#get_blob_differences"><CopyableCode code="get_blob_differences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a structured, line-level diff between two blob versions in a repository. The diff is returned as an ordered list of hunks, where each hunk represents a contiguous run of changed lines together with any surrounding unchanged context lines. Results are paginated. Use MaxResults and NextToken to retrieve additional pages. For the typical usage workflow, see GetDifferences.</td>
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
    defaultValue="get_blob_differences"
    values={[
        { label: 'get_blob_differences', value: 'get_blob_differences' }
    ]}
>
<TabItem value="get_blob_differences">

Returns a structured, line-level diff between two blob versions in a repository. The diff is returned as an ordered list of hunks, where each hunk represents a contiguous run of changed lines together with any surrounding unchanged context lines. Results are paginated. Use MaxResults and NextToken to retrieve additional pages. For the typical usage workflow, see GetDifferences.

```sql
SELECT
after_line_count,
after_start_line,
before_line_count,
before_start_line,
changes
FROM aws.codecommit.blob_differences
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
