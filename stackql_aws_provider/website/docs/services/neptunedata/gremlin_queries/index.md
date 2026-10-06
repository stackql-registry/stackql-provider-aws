--- 
title: gremlin_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - gremlin_queries
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

Creates, updates, deletes, gets or lists a <code>gremlin_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gremlin_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptunedata.gremlin_queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_gremlin_queries"
    values={[
        { label: 'list_gremlin_queries', value: 'list_gremlin_queries' }
    ]}
>
<TabItem value="list_gremlin_queries">

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
    <td><CopyableCode code="accepted_query_count" /></td>
    <td><code>integer</code></td>
    <td>The number of queries that have been accepted but not yet completed, including queries in the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="queries" /></td>
    <td><code>array</code></td>
    <td>A list of the current queries.</td>
</tr>
<tr>
    <td><CopyableCode code="running_query_count" /></td>
    <td><code>integer</code></td>
    <td>The number of Gremlin queries currently running.</td>
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
    <td><a href="#list_gremlin_queries"><CopyableCode code="list_gremlin_queries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-includeWaiting"><code>includeWaiting</code></a></td>
    <td>Lists active Gremlin queries. See Gremlin query status API for details about the output. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetQueryStatus IAM action in that cluster. Note that the neptune-db:QueryLanguage:Gremlin IAM condition key can be used in the policy document to restrict the use of Gremlin queries (see Condition keys available in Neptune IAM data-access policy statements).</td>
</tr>
<tr>
    <td><a href="#cancel_gremlin_query"><CopyableCode code="cancel_gremlin_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels a Gremlin query. See Gremlin query cancellation for more information. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:CancelQuery IAM action in that cluster.</td>
</tr>
<tr>
    <td><a href="#execute_gremlin_query"><CopyableCode code="execute_gremlin_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-gremlinQuery"><code>gremlinQuery</code></a></td>
    <td><a href="#parameter-accept"><code>accept</code></a></td>
    <td>This commands executes a Gremlin query. Amazon Neptune is compatible with Apache TinkerPop3 and Gremlin, so you can use the Gremlin traversal language to query the graph, as described under The Graph in the Apache TinkerPop3 documentation. More details can also be found in Accessing a Neptune graph with Gremlin. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that enables one of the following IAM actions in that cluster, depending on the query: neptune-db:ReadDataViaQuery neptune-db:WriteDataViaQuery neptune-db:DeleteDataViaQuery Note that the neptune-db:QueryLanguage:Gremlin IAM condition key can be used in the policy document to restrict the use of Gremlin queries (see Condition keys available in Neptune IAM data-access policy statements).</td>
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
    <td>The unique identifier that identifies the query to be canceled.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-accept">
    <td><CopyableCode code="accept" /></td>
    <td><code>string</code></td>
    <td>If non-null, the query results are returned in a serialized response message in the format specified by this parameter. See the GraphSON section in the TinkerPop documentation for a list of the formats that are currently supported.</td>
</tr>
<tr id="parameter-includeWaiting">
    <td><CopyableCode code="includeWaiting" /></td>
    <td><code>boolean</code></td>
    <td>If set to TRUE, the list returned includes waiting queries. The default is FALSE;</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_gremlin_queries"
    values={[
        { label: 'list_gremlin_queries', value: 'list_gremlin_queries' }
    ]}
>
<TabItem value="list_gremlin_queries">

Lists active Gremlin queries. See Gremlin query status API for details about the output. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetQueryStatus IAM action in that cluster. Note that the neptune-db:QueryLanguage:Gremlin IAM condition key can be used in the policy document to restrict the use of Gremlin queries (see Condition keys available in Neptune IAM data-access policy statements).

```sql
SELECT
accepted_query_count,
queries,
running_query_count
FROM aws.neptunedata.gremlin_queries
WHERE region = '{{ region }}' -- required
AND includeWaiting = '{{ includeWaiting }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_gremlin_query"
    values={[
        { label: 'cancel_gremlin_query', value: 'cancel_gremlin_query' },
        { label: 'execute_gremlin_query', value: 'execute_gremlin_query' }
    ]}
>
<TabItem value="cancel_gremlin_query">

Cancels a Gremlin query. See Gremlin query cancellation for more information. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:CancelQuery IAM action in that cluster.

```sql
EXEC aws.neptunedata.gremlin_queries.cancel_gremlin_query 
@query_id='{{ query_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="execute_gremlin_query">

This commands executes a Gremlin query. Amazon Neptune is compatible with Apache TinkerPop3 and Gremlin, so you can use the Gremlin traversal language to query the graph, as described under The Graph in the Apache TinkerPop3 documentation. More details can also be found in Accessing a Neptune graph with Gremlin. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that enables one of the following IAM actions in that cluster, depending on the query: neptune-db:ReadDataViaQuery neptune-db:WriteDataViaQuery neptune-db:DeleteDataViaQuery Note that the neptune-db:QueryLanguage:Gremlin IAM condition key can be used in the policy document to restrict the use of Gremlin queries (see Condition keys available in Neptune IAM data-access policy statements).

```sql
EXEC aws.neptunedata.gremlin_queries.execute_gremlin_query 
@region='{{ region }}' --required, 
@accept='{{ accept }}' 
@@json=
'{
"gremlinQuery": "{{ gremlinQuery }}"
}'
;
```
</TabItem>
</Tabs>
