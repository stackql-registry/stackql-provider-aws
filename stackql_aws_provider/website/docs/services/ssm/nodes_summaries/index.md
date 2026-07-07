--- 
title: nodes_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - nodes_summaries
  - ssm
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

Creates, updates, deletes, gets or lists a <code>nodes_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="nodes_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.nodes_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_nodes_summary"
    values={[
        { label: 'list_nodes_summary', value: 'list_nodes_summary' }
    ]}
>
<TabItem value="list_nodes_summary">

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
    <td><CopyableCode code="summary" /></td>
    <td><code>object</code></td>
    <td>A collection of objects reporting information about your managed nodes, such as the count of nodes by operating system.</td>
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
    <td><a href="#list_nodes_summary"><CopyableCode code="list_nodes_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Generates a summary of managed instance/node metadata based on the filters and aggregators you specify. Results are grouped by the input aggregator you specify.</td>
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
    defaultValue="list_nodes_summary"
    values={[
        { label: 'list_nodes_summary', value: 'list_nodes_summary' }
    ]}
>
<TabItem value="list_nodes_summary">

Generates a summary of managed instance/node metadata based on the filters and aggregators you specify. Results are grouped by the input aggregator you specify.

```sql
SELECT
summary
FROM aws.ssm.nodes_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
