--- 
title: open_cypher_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - open_cypher_queries
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

Creates, updates, deletes, gets or lists an <code>open_cypher_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="open_cypher_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptunedata.open_cypher_queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_open_cypher_queries"
    values={[
        { label: 'list_open_cypher_queries', value: 'list_open_cypher_queries' }
    ]}
>
<TabItem value="list_open_cypher_queries">

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
    <td>A list of current openCypher queries.</td>
</tr>
<tr>
    <td><CopyableCode code="running_query_count" /></td>
    <td><code>integer</code></td>
    <td>The number of currently running openCypher queries.</td>
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
    <td><a href="#list_open_cypher_queries"><CopyableCode code="list_open_cypher_queries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-includeWaiting"><code>includeWaiting</code></a></td>
    <td>Lists active openCypher queries. See Neptune openCypher status endpoint for more information. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetQueryStatus IAM action in that cluster. Note that the neptune-db:QueryLanguage:OpenCypher IAM condition key can be used in the policy document to restrict the use of openCypher queries (see Condition keys available in Neptune IAM data-access policy statements).</td>
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
<tr id="parameter-includeWaiting">
    <td><CopyableCode code="includeWaiting" /></td>
    <td><code>boolean</code></td>
    <td>When set to TRUE and other parameters are not present, causes status information to be returned for waiting queries as well as for running queries.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_open_cypher_queries"
    values={[
        { label: 'list_open_cypher_queries', value: 'list_open_cypher_queries' }
    ]}
>
<TabItem value="list_open_cypher_queries">

Lists active openCypher queries. See Neptune openCypher status endpoint for more information. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetQueryStatus IAM action in that cluster. Note that the neptune-db:QueryLanguage:OpenCypher IAM condition key can be used in the policy document to restrict the use of openCypher queries (see Condition keys available in Neptune IAM data-access policy statements).

```sql
SELECT
accepted_query_count,
queries,
running_query_count
FROM aws.neptunedata.open_cypher_queries
WHERE region = '{{ region }}' -- required
AND includeWaiting = '{{ includeWaiting }}'
;
```
</TabItem>
</Tabs>
