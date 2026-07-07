--- 
title: allowed_node_type_updates
hide_title: false
hide_table_of_contents: false
keywords:
  - allowed_node_type_updates
  - memorydb
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

Creates, updates, deletes, gets or lists an <code>allowed_node_type_updates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="allowed_node_type_updates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.memorydb.allowed_node_type_updates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_allowed_node_type_updates"
    values={[
        { label: 'list_allowed_node_type_updates', value: 'list_allowed_node_type_updates' }
    ]}
>
<TabItem value="list_allowed_node_type_updates">

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
    <td><CopyableCode code="ScaleDownNodeTypes" /></td>
    <td><code>array</code></td>
    <td>A list node types which you can use to scale down your cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ScaleUpNodeTypes" /></td>
    <td><code>array</code></td>
    <td>A list node types which you can use to scale up your cluster.</td>
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
    <td><a href="#list_allowed_node_type_updates"><CopyableCode code="list_allowed_node_type_updates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all available node types that you can scale to from your cluster's current node type. When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.</td>
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
    defaultValue="list_allowed_node_type_updates"
    values={[
        { label: 'list_allowed_node_type_updates', value: 'list_allowed_node_type_updates' }
    ]}
>
<TabItem value="list_allowed_node_type_updates">

Lists all available node types that you can scale to from your cluster's current node type. When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.

```sql
SELECT
ScaleDownNodeTypes,
ScaleUpNodeTypes
FROM aws.memorydb.allowed_node_type_updates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
