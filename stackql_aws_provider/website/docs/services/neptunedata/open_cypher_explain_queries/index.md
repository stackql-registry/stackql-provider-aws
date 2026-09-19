--- 
title: open_cypher_explain_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - open_cypher_explain_queries
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

Creates, updates, deletes, gets or lists an <code>open_cypher_explain_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="open_cypher_explain_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptunedata.open_cypher_explain_queries" /></td></tr>
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
    <td><a href="#execute_open_cypher_explain_query"><CopyableCode code="execute_open_cypher_explain_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-openCypherQuery"><code>openCypherQuery</code></a>, <a href="#parameter-explainMode"><code>explainMode</code></a></td>
    <td></td>
    <td>Executes an openCypher explain request. See The openCypher explain feature for more information. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ReadDataViaQuery IAM action in that cluster. Note that the neptune-db:QueryLanguage:OpenCypher IAM condition key can be used in the policy document to restrict the use of openCypher queries (see Condition keys available in Neptune IAM data-access policy statements).</td>
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
    defaultValue="execute_open_cypher_explain_query"
    values={[
        { label: 'execute_open_cypher_explain_query', value: 'execute_open_cypher_explain_query' }
    ]}
>
<TabItem value="execute_open_cypher_explain_query">

Executes an openCypher explain request. See The openCypher explain feature for more information. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ReadDataViaQuery IAM action in that cluster. Note that the neptune-db:QueryLanguage:OpenCypher IAM condition key can be used in the policy document to restrict the use of openCypher queries (see Condition keys available in Neptune IAM data-access policy statements).

```sql
EXEC aws.neptunedata.open_cypher_explain_queries.execute_open_cypher_explain_query 
@region='{{ region }}' --required 
@@json=
'{
"openCypherQuery": "{{ openCypherQuery }}", 
"parameters": "{{ parameters }}", 
"explainMode": "{{ explainMode }}"
}'
;
```
</TabItem>
</Tabs>
