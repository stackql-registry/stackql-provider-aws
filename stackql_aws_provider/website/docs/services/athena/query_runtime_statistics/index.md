--- 
title: query_runtime_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - query_runtime_statistics
  - athena
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

Creates, updates, deletes, gets or lists a <code>query_runtime_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_runtime_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.athena.query_runtime_statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_query_runtime_statistics"
    values={[
        { label: 'get_query_runtime_statistics', value: 'get_query_runtime_statistics' }
    ]}
>
<TabItem value="get_query_runtime_statistics">

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
    <td><CopyableCode code="OutputStage" /></td>
    <td><code>object</code></td>
    <td>Stage statistics such as input and output rows and bytes, execution time, and stage state. This information also includes substages and the query stage plan.</td>
</tr>
<tr>
    <td><CopyableCode code="Rows" /></td>
    <td><code>object</code></td>
    <td>Statistics such as input rows and bytes read by the query, rows and bytes output by the query, and the number of rows written by the query.</td>
</tr>
<tr>
    <td><CopyableCode code="Timeline" /></td>
    <td><code>object</code></td>
    <td>Timeline statistics such as query queue time, planning time, execution time, service processing time, and total execution time.</td>
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
    <td><a href="#get_query_runtime_statistics"><CopyableCode code="get_query_runtime_statistics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns query execution runtime statistics related to a single execution of a query if you have access to the workgroup in which the query ran. Statistics from the Timeline section of the response object are available as soon as QueryExecutionStatus$State is in a SUCCEEDED or FAILED state. The remaining non-timeline statistics in the response (like stage-level input and output row count and data size) are updated asynchronously and may not be available immediately after a query completes or, in some cases, may not be returned. The non-timeline statistics are also not included when a query has row-level filters defined in Lake Formation.</td>
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
    defaultValue="get_query_runtime_statistics"
    values={[
        { label: 'get_query_runtime_statistics', value: 'get_query_runtime_statistics' }
    ]}
>
<TabItem value="get_query_runtime_statistics">

Returns query execution runtime statistics related to a single execution of a query if you have access to the workgroup in which the query ran. Statistics from the Timeline section of the response object are available as soon as QueryExecutionStatus$State is in a SUCCEEDED or FAILED state. The remaining non-timeline statistics in the response (like stage-level input and output row count and data size) are updated asynchronously and may not be available immediately after a query completes or, in some cases, may not be returned. The non-timeline statistics are also not included when a query has row-level filters defined in Lake Formation.

```sql
SELECT
OutputStage,
Rows,
Timeline
FROM aws.athena.query_runtime_statistics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
