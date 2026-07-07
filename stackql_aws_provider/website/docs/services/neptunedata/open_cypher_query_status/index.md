--- 
title: open_cypher_query_status
hide_title: false
hide_table_of_contents: false
keywords:
  - open_cypher_query_status
  - neptunedata
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

Creates, updates, deletes, gets or lists an <code>open_cypher_query_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="open_cypher_query_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptunedata.open_cypher_query_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_open_cypher_query_status"
    values={[
        { label: 'get_open_cypher_query_status', value: 'get_open_cypher_query_status' }
    ]}
>
<TabItem value="get_open_cypher_query_status">

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
    <td><CopyableCode code="queryEvalStats" /></td>
    <td><code>object</code></td>
    <td>The openCypher query evaluation status.</td>
</tr>
<tr>
    <td><CopyableCode code="queryId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the query for which status is being returned.</td>
</tr>
<tr>
    <td><CopyableCode code="queryString" /></td>
    <td><code>string</code></td>
    <td>The openCypher query string.</td>
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
    <td><a href="#get_open_cypher_query_status"><CopyableCode code="get_open_cypher_query_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the status of a specified openCypher query. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetQueryStatus IAM action in that cluster. Note that the neptune-db:QueryLanguage:OpenCypher IAM condition key can be used in the policy document to restrict the use of openCypher queries (see Condition keys available in Neptune IAM data-access policy statements).</td>
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
    <td>The unique ID of the openCypher query for which to retrieve the query status.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_open_cypher_query_status"
    values={[
        { label: 'get_open_cypher_query_status', value: 'get_open_cypher_query_status' }
    ]}
>
<TabItem value="get_open_cypher_query_status">

Retrieves the status of a specified openCypher query. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetQueryStatus IAM action in that cluster. Note that the neptune-db:QueryLanguage:OpenCypher IAM condition key can be used in the policy document to restrict the use of openCypher queries (see Condition keys available in Neptune IAM data-access policy statements).

```sql
SELECT
queryEvalStats,
queryId,
queryString
FROM aws.neptunedata.open_cypher_query_status
WHERE query_id = '{{ query_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
