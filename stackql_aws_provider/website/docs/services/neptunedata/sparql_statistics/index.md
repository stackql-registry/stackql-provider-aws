--- 
title: sparql_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - sparql_statistics
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

Creates, updates, deletes, gets or lists a <code>sparql_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sparql_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptunedata.sparql_statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sparql_statistics"
    values={[
        { label: 'get_sparql_statistics', value: 'get_sparql_statistics' }
    ]}
>
<TabItem value="get_sparql_statistics">

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
    <td><CopyableCode code="payload" /></td>
    <td><code>object</code></td>
    <td>Statistics for RDF data.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The HTTP return code of the request. If the request succeeded, the code is 200. See Common error codes for DFE statistics request for a list of common errors. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetStatisticsStatus IAM action in that cluster.</td>
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
    <td><a href="#get_sparql_statistics"><CopyableCode code="get_sparql_statistics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets RDF statistics (SPARQL).</td>
</tr>
<tr>
    <td><a href="#delete_sparql_statistics"><CopyableCode code="delete_sparql_statistics" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes SPARQL statistics When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:DeleteStatistics IAM action in that cluster.</td>
</tr>
<tr>
    <td><a href="#manage_sparql_statistics"><CopyableCode code="manage_sparql_statistics" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Manages the generation and use of RDF graph statistics. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ManageStatistics IAM action in that cluster.</td>
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
    defaultValue="get_sparql_statistics"
    values={[
        { label: 'get_sparql_statistics', value: 'get_sparql_statistics' }
    ]}
>
<TabItem value="get_sparql_statistics">

Gets RDF statistics (SPARQL).

```sql
SELECT
payload,
status
FROM aws.neptunedata.sparql_statistics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sparql_statistics"
    values={[
        { label: 'delete_sparql_statistics', value: 'delete_sparql_statistics' }
    ]}
>
<TabItem value="delete_sparql_statistics">

Deletes SPARQL statistics When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:DeleteStatistics IAM action in that cluster.

```sql
DELETE FROM aws.neptunedata.sparql_statistics
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="manage_sparql_statistics"
    values={[
        { label: 'manage_sparql_statistics', value: 'manage_sparql_statistics' }
    ]}
>
<TabItem value="manage_sparql_statistics">

Manages the generation and use of RDF graph statistics. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ManageStatistics IAM action in that cluster.

```sql
EXEC aws.neptunedata.sparql_statistics.manage_sparql_statistics 
@region='{{ region }}' --required 
@@json=
'{
"mode": "{{ mode }}"
}'
;
```
</TabItem>
</Tabs>
