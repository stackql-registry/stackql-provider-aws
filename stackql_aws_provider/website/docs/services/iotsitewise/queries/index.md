--- 
title: queries
hide_title: false
hide_table_of_contents: false
keywords:
  - queries
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_query"
    values={[
        { label: 'describe_query', value: 'describe_query' },
        { label: 'list_queries', value: 'list_queries' }
    ]}
>
<TabItem value="describe_query">

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
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the query reached a terminal state, in Unix epoch time. This field is present when the query status is COMPLETED, FAILED, or CANCELED.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>A human-readable error description. This field is present when the query status is FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for a query execution. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="statistics" /></td>
    <td><code>object</code></td>
    <td>The query execution statistics. This field is present when the query status is COMPLETED.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current query status. (SUBMITTED, RUNNING, COMPLETED, FAILED, CANCELED, CANCELING)</td>
</tr>
<tr>
    <td><CopyableCode code="submitted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the query was submitted, in Unix epoch time.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_queries">

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
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the query reached a terminal state, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for a query execution. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current query status. (SUBMITTED, RUNNING, COMPLETED, FAILED, CANCELED, CANCELING)</td>
</tr>
<tr>
    <td><CopyableCode code="submitted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the query was submitted, in Unix epoch time.</td>
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
    <td><a href="#describe_query"><CopyableCode code="describe_query" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a query, including its status.</td>
</tr>
<tr>
    <td><a href="#list_queries"><CopyableCode code="list_queries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a paginated list of queries for a workspace.</td>
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
<tr id="parameter-query_id">
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the query execution.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workspace_name">
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace to list queries for.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>An optional filter to return only queries with the specified status. The value must be one of the supported query statuses: SUBMITTED, RUNNING, COMPLETED, FAILED, CANCELED, or CANCELING.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_query"
    values={[
        { label: 'describe_query', value: 'describe_query' },
        { label: 'list_queries', value: 'list_queries' }
    ]}
>
<TabItem value="describe_query">

Retrieves information about a query, including its status.

```sql
SELECT
completed_at,
error_message,
query_id,
statistics,
status,
submitted_at
FROM aws.iotsitewise.queries
WHERE workspace_name = '{{ workspace_name }}' -- required
AND query_id = '{{ query_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_queries">

Retrieves a paginated list of queries for a workspace.

```sql
SELECT
completed_at,
query_id,
status,
submitted_at
FROM aws.iotsitewise.queries
WHERE workspace_name = '{{ workspace_name }}' -- required
AND region = '{{ region }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
