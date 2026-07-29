--- 
title: query_results
hide_title: false
hide_table_of_contents: false
keywords:
  - query_results
  - cloudtrail
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

Creates, updates, deletes, gets or lists a <code>query_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.query_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_query_results"
    values={[
        { label: 'get_query_results', value: 'get_query_results' }
    ]}
>
<TabItem value="get_query_results">

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
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The error message returned if a query failed. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token you can use to get the next page of query results. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="query_result_rows" /></td>
    <td><code>array</code></td>
    <td>Contains the individual event results of the query.</td>
</tr>
<tr>
    <td><CopyableCode code="query_statistics" /></td>
    <td><code>object</code></td>
    <td>Shows the count of query results.</td>
</tr>
<tr>
    <td><CopyableCode code="query_status" /></td>
    <td><code>string</code></td>
    <td>The status of the query. Values include QUEUED, RUNNING, FINISHED, FAILED, TIMED_OUT, or CANCELLED. (QUEUED, RUNNING, FINISHED, FAILED, CANCELLED, TIMED_OUT)</td>
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
    <td><a href="#get_query_results"><CopyableCode code="get_query_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets event data results of a query. You must specify the QueryID value returned by the StartQuery operation.</td>
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
    defaultValue="get_query_results"
    values={[
        { label: 'get_query_results', value: 'get_query_results' }
    ]}
>
<TabItem value="get_query_results">

Gets event data results of a query. You must specify the QueryID value returned by the StartQuery operation.

```sql
SELECT
error_message,
next_token,
query_result_rows,
query_statistics,
query_status
FROM aws.cloudtrail.query_results
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
