--- 
title: gremlin_explain_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - gremlin_explain_queries
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

Creates, updates, deletes, gets or lists a <code>gremlin_explain_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gremlin_explain_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptunedata.gremlin_explain_queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#execute_gremlin_explain_query"><CopyableCode code="execute_gremlin_explain_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-gremlinQuery"><code>gremlinQuery</code></a></td>
    <td></td>
    <td>Executes a Gremlin Explain query. Amazon Neptune has added a Gremlin feature named explain that provides is a self-service tool for understanding the execution approach being taken by the Neptune engine for the query. You invoke it by adding an explain parameter to an HTTP call that submits a Gremlin query. The explain feature provides information about the logical structure of query execution plans. You can use this information to identify potential evaluation and execution bottlenecks and to tune your query, as explained in Tuning Gremlin queries. You can also use query hints to improve query execution plans. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows one of the following IAM actions in that cluster, depending on the query: neptune-db:ReadDataViaQuery neptune-db:WriteDataViaQuery neptune-db:DeleteDataViaQuery Note that the neptune-db:QueryLanguage:Gremlin IAM condition key can be used in the policy document to restrict the use of Gremlin queries (see Condition keys available in Neptune IAM data-access policy statements).</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="execute_gremlin_explain_query"
    values={[
        { label: 'execute_gremlin_explain_query', value: 'execute_gremlin_explain_query' }
    ]}
>
<TabItem value="execute_gremlin_explain_query">

Executes a Gremlin Explain query. Amazon Neptune has added a Gremlin feature named explain that provides is a self-service tool for understanding the execution approach being taken by the Neptune engine for the query. You invoke it by adding an explain parameter to an HTTP call that submits a Gremlin query. The explain feature provides information about the logical structure of query execution plans. You can use this information to identify potential evaluation and execution bottlenecks and to tune your query, as explained in Tuning Gremlin queries. You can also use query hints to improve query execution plans. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows one of the following IAM actions in that cluster, depending on the query: neptune-db:ReadDataViaQuery neptune-db:WriteDataViaQuery neptune-db:DeleteDataViaQuery Note that the neptune-db:QueryLanguage:Gremlin IAM condition key can be used in the policy document to restrict the use of Gremlin queries (see Condition keys available in Neptune IAM data-access policy statements).

```sql
EXEC aws.neptunedata.gremlin_explain_queries.execute_gremlin_explain_query 
@region='{{ region }}' --required 
@@json=
'{
"gremlinQuery": "{{ gremlinQuery }}"
}'
;
```
</TabItem>
</Tabs>
