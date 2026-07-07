--- 
title: graph_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - graph_summaries
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

Creates, updates, deletes, gets or lists a <code>graph_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="graph_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune_graph.graph_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_graph_summary"
    values={[
        { label: 'get_graph_summary', value: 'get_graph_summary' }
    ]}
>
<TabItem value="get_graph_summary">

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
    <td><CopyableCode code="graphSummary" /></td>
    <td><code>object</code></td>
    <td>The graph summary.</td>
</tr>
<tr>
    <td><CopyableCode code="lastStatisticsComputationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp, in ISO 8601 format, of the time at which Neptune Analytics last computed statistics.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Display the version of this tool.</td>
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
    <td><a href="#get_graph_summary"><CopyableCode code="get_graph_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-graphIdentifier"><code>graphIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-mode"><code>mode</code></a></td>
    <td>Gets a graph summary for a property graph.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-mode">
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The summary mode can take one of two values: basic (the default), and detailed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_graph_summary"
    values={[
        { label: 'get_graph_summary', value: 'get_graph_summary' }
    ]}
>
<TabItem value="get_graph_summary">

Gets a graph summary for a property graph.

```sql
SELECT
graphSummary,
lastStatisticsComputationTime,
version
FROM aws.neptune_graph.graph_summaries
WHERE graphIdentifier = '{{ graphIdentifier }}' -- required
AND region = '{{ region }}' -- required
AND mode = '{{ mode }}'
;
```
</TabItem>
</Tabs>
