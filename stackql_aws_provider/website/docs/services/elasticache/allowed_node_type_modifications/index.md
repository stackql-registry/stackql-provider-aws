--- 
title: allowed_node_type_modifications
hide_title: false
hide_table_of_contents: false
keywords:
  - allowed_node_type_modifications
  - elasticache
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

Creates, updates, deletes, gets or lists an <code>allowed_node_type_modifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="allowed_node_type_modifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.allowed_node_type_modifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_allowed_node_type_modifications"
    values={[
        { label: 'list_allowed_node_type_modifications', value: 'list_allowed_node_type_modifications' }
    ]}
>
<TabItem value="list_allowed_node_type_modifications">

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
    <td><CopyableCode code="scale_down_modifications" /></td>
    <td><code>array</code></td>
    <td>A string list, each element of which specifies a cache node type which you can use to scale your cluster or replication group. When scaling down a Valkey or Redis OSS cluster or replication group using ModifyCacheCluster or ModifyReplicationGroup, use a value from this list for the CacheNodeType parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="scale_up_modifications" /></td>
    <td><code>array</code></td>
    <td>A string list, each element of which specifies a cache node type which you can use to scale your cluster or replication group. When scaling up a Valkey or Redis OSS cluster or replication group using ModifyCacheCluster or ModifyReplicationGroup, use a value from this list for the CacheNodeType parameter.</td>
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
    <td><a href="#list_allowed_node_type_modifications"><CopyableCode code="list_allowed_node_type_modifications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CacheClusterId"><code>CacheClusterId</code></a>, <a href="#parameter-ReplicationGroupId"><code>ReplicationGroupId</code></a></td>
    <td>Lists all available node types that you can scale with your cluster's replication group's current node type. When you use the ModifyCacheCluster or ModifyReplicationGroup operations to scale your cluster or replication group, the value of the CacheNodeType parameter must be one of the node types returned by this operation.</td>
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
<tr id="parameter-CacheClusterId">
    <td><CopyableCode code="CacheClusterId" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster you want to scale up to a larger node instanced type. ElastiCache uses the cluster id to identify the current node type of this cluster and from that to create a list of node types you can scale up to. You must provide a value for either the CacheClusterId or the ReplicationGroupId.</td>
</tr>
<tr id="parameter-ReplicationGroupId">
    <td><CopyableCode code="ReplicationGroupId" /></td>
    <td><code>string</code></td>
    <td>The name of the replication group want to scale up to a larger node type. ElastiCache uses the replication group id to identify the current node type being used by this replication group, and from that to create a list of node types you can scale up to. You must provide a value for either the CacheClusterId or the ReplicationGroupId.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_allowed_node_type_modifications"
    values={[
        { label: 'list_allowed_node_type_modifications', value: 'list_allowed_node_type_modifications' }
    ]}
>
<TabItem value="list_allowed_node_type_modifications">

Lists all available node types that you can scale with your cluster's replication group's current node type. When you use the ModifyCacheCluster or ModifyReplicationGroup operations to scale your cluster or replication group, the value of the CacheNodeType parameter must be one of the node types returned by this operation.

```sql
SELECT
scale_down_modifications,
scale_up_modifications
FROM aws.elasticache.allowed_node_type_modifications
WHERE region = '{{ region }}' -- required
AND CacheClusterId = '{{ CacheClusterId }}'
AND ReplicationGroupId = '{{ ReplicationGroupId }}'
;
```
</TabItem>
</Tabs>
