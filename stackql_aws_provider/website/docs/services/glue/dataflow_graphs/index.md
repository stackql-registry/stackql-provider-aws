--- 
title: dataflow_graphs
hide_title: false
hide_table_of_contents: false
keywords:
  - dataflow_graphs
  - glue
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

Creates, updates, deletes, gets or lists a <code>dataflow_graphs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dataflow_graphs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.dataflow_graphs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dataflow_graph"
    values={[
        { label: 'get_dataflow_graph', value: 'get_dataflow_graph' }
    ]}
>
<TabItem value="get_dataflow_graph">

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
    <td><CopyableCode code="DagEdges" /></td>
    <td><code>array</code></td>
    <td>A list of the edges in the resulting DAG.</td>
</tr>
<tr>
    <td><CopyableCode code="DagNodes" /></td>
    <td><code>array</code></td>
    <td>A list of the nodes in the resulting DAG.</td>
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
    <td><a href="#get_dataflow_graph"><CopyableCode code="get_dataflow_graph" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Transforms a Python script into a directed acyclic graph (DAG).</td>
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
    defaultValue="get_dataflow_graph"
    values={[
        { label: 'get_dataflow_graph', value: 'get_dataflow_graph' }
    ]}
>
<TabItem value="get_dataflow_graph">

Transforms a Python script into a directed acyclic graph (DAG).

```sql
SELECT
DagEdges,
DagNodes
FROM aws.glue.dataflow_graphs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
