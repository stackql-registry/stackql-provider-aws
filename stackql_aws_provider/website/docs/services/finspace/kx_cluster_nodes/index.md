--- 
title: kx_cluster_nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - kx_cluster_nodes
  - finspace
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

Creates, updates, deletes, gets or lists a <code>kx_cluster_nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kx_cluster_nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace.kx_cluster_nodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_kx_cluster_nodes"
    values={[
        { label: 'list_kx_cluster_nodes', value: 'list_kx_cluster_nodes' }
    ]}
>
<TabItem value="list_kx_cluster_nodes">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>A list of nodes associated with the cluster.</td>
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
    <td><a href="#list_kx_cluster_nodes"><CopyableCode code="list_kx_cluster_nodes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-cluster_name"><code>cluster_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all the nodes in a kdb cluster.</td>
</tr>
<tr>
    <td><a href="#delete_kx_cluster_node"><CopyableCode code="delete_kx_cluster_node" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-cluster_name"><code>cluster_name</code></a>, <a href="#parameter-node_id"><code>node_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified nodes from a cluster.</td>
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
<tr id="parameter-cluster_name">
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster, for which you want to delete the nodes.</td>
</tr>
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb environment.</td>
</tr>
<tr id="parameter-node_id">
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the node that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_kx_cluster_nodes"
    values={[
        { label: 'list_kx_cluster_nodes', value: 'list_kx_cluster_nodes' }
    ]}
>
<TabItem value="list_kx_cluster_nodes">

Lists all the nodes in a kdb cluster.

```sql
SELECT
next_token,
nodes
FROM aws.finspace.kx_cluster_nodes
WHERE environment_id = '{{ environment_id }}' -- required
AND cluster_name = '{{ cluster_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kx_cluster_node"
    values={[
        { label: 'delete_kx_cluster_node', value: 'delete_kx_cluster_node' }
    ]}
>
<TabItem value="delete_kx_cluster_node">

Deletes the specified nodes from a cluster.

```sql
DELETE FROM aws.finspace.kx_cluster_nodes
WHERE environment_id = '{{ environment_id }}' --required
AND cluster_name = '{{ cluster_name }}' --required
AND node_id = '{{ node_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
