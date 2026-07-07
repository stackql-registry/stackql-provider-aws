--- 
title: queries
hide_title: false
hide_table_of_contents: false
keywords:
  - queries
  - neptune_graph
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune_graph.queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_query"
    values={[
        { label: 'get_query', value: 'get_query' },
        { label: 'list_queries', value: 'list_queries' }
    ]}
>
<TabItem value="get_query">

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
    <td>The ID of the query in question.</td>
</tr>
<tr>
    <td><CopyableCode code="elapsed" /></td>
    <td><code>integer</code></td>
    <td>The number of milliseconds the query has been running.</td>
</tr>
<tr>
    <td><CopyableCode code="queryString" /></td>
    <td><code>string</code></td>
    <td>The query in question.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the query. (RUNNING, WAITING, CANCELLING)</td>
</tr>
<tr>
    <td><CopyableCode code="waited" /></td>
    <td><code>integer</code></td>
    <td>Indicates how long the query waited, in milliseconds.</td>
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
    <td><CopyableCode code="queries" /></td>
    <td><code>array</code></td>
    <td>A list of current openCypher queries.</td>
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
    <td><a href="#get_query"><CopyableCode code="get_query" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-graphIdentifier"><code>graphIdentifier</code></a>, <a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the status of a specified query. When invoking this operation in a Neptune Analytics cluster, the IAM user or role making the request must have the neptune-graph:GetQueryStatus IAM action attached.</td>
</tr>
<tr>
    <td><a href="#list_queries"><CopyableCode code="list_queries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-graphIdentifier"><code>graphIdentifier</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-state"><code>state</code></a></td>
    <td>Lists active openCypher queries.</td>
</tr>
<tr>
    <td><a href="#cancel_query"><CopyableCode code="cancel_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-graphIdentifier"><code>graphIdentifier</code></a>, <a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels a specified query.</td>
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
<tr id="parameter-graphIdentifier">
    <td><CopyableCode code="graphIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Neptune Analytics graph.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be fetched by the API.</td>
</tr>
<tr id="parameter-query_id">
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the query to cancel.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Filtered list of queries based on state.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_query"
    values={[
        { label: 'get_query', value: 'get_query' },
        { label: 'list_queries', value: 'list_queries' }
    ]}
>
<TabItem value="get_query">

Retrieves the status of a specified query. When invoking this operation in a Neptune Analytics cluster, the IAM user or role making the request must have the neptune-graph:GetQueryStatus IAM action attached.

```sql
SELECT
id,
elapsed,
queryString,
state,
waited
FROM aws.neptune_graph.queries
WHERE graphIdentifier = '{{ graphIdentifier }}' -- required
AND query_id = '{{ query_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_queries">

Lists active openCypher queries.

```sql
SELECT
queries
FROM aws.neptune_graph.queries
WHERE graphIdentifier = '{{ graphIdentifier }}' -- required
AND maxResults = '{{ maxResults }}' -- required
AND region = '{{ region }}' -- required
AND state = '{{ state }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_query"
    values={[
        { label: 'cancel_query', value: 'cancel_query' }
    ]}
>
<TabItem value="cancel_query">

Cancels a specified query.

```sql
EXEC aws.neptune_graph.queries.cancel_query 
@graphIdentifier='{{ graphIdentifier }}' --required, 
@query_id='{{ query_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
