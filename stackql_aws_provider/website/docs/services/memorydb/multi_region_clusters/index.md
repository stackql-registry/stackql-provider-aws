--- 
title: multi_region_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - multi_region_clusters
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

Creates, updates, deletes, gets or lists a <code>multi_region_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multi_region_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.memorydb.multi_region_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_multi_region_clusters"
    values={[
        { label: 'describe_multi_region_clusters', value: 'describe_multi_region_clusters' }
    ]}
>
<TabItem value="describe_multi_region_clusters">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the multi-Region cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="clusters" /></td>
    <td><code>array</code></td>
    <td>The clusters in this multi-Region cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the multi-Region cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The name of the engine used by the multi-Region cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>The version of the engine used by the multi-Region cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_region_cluster_name" /></td>
    <td><code>string</code></td>
    <td>The name of the multi-Region cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_region_parameter_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the multi-Region parameter group associated with the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="node_type" /></td>
    <td><code>string</code></td>
    <td>The node type used by the multi-Region cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_shards" /></td>
    <td><code>integer</code></td>
    <td>The number of shards in the multi-Region cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the multi-Region cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="tls_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indiciates if the multi-Region cluster is TLS enabled.</td>
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
    <td><a href="#describe_multi_region_clusters"><CopyableCode code="describe_multi_region_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about one or more multi-Region clusters.</td>
</tr>
<tr>
    <td><a href="#create_multi_region_cluster"><CopyableCode code="create_multi_region_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MultiRegionClusterNameSuffix"><code>MultiRegionClusterNameSuffix</code></a>, <a href="#parameter-NodeType"><code>NodeType</code></a></td>
    <td></td>
    <td>Creates a new multi-Region cluster.</td>
</tr>
<tr>
    <td><a href="#update_multi_region_cluster"><CopyableCode code="update_multi_region_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MultiRegionClusterName"><code>MultiRegionClusterName</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing multi-Region cluster.</td>
</tr>
<tr>
    <td><a href="#delete_multi_region_cluster"><CopyableCode code="delete_multi_region_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing multi-Region cluster.</td>
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
    defaultValue="describe_multi_region_clusters"
    values={[
        { label: 'describe_multi_region_clusters', value: 'describe_multi_region_clusters' }
    ]}
>
<TabItem value="describe_multi_region_clusters">

Returns details about one or more multi-Region clusters.

```sql
SELECT
arn,
clusters,
description,
engine,
engine_version,
multi_region_cluster_name,
multi_region_parameter_group_name,
node_type,
number_of_shards,
status,
tls_enabled
FROM aws.memorydb.multi_region_clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_multi_region_cluster"
    values={[
        { label: 'create_multi_region_cluster', value: 'create_multi_region_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_multi_region_cluster">

Creates a new multi-Region cluster.

```sql
INSERT INTO aws.memorydb.multi_region_clusters (
MultiRegionClusterNameSuffix,
Description,
Engine,
EngineVersion,
NodeType,
MultiRegionParameterGroupName,
NumShards,
TLSEnabled,
Tags,
region
)
SELECT 
'{{ MultiRegionClusterNameSuffix }}' /* required */,
'{{ Description }}',
'{{ Engine }}',
'{{ EngineVersion }}',
'{{ NodeType }}' /* required */,
'{{ MultiRegionParameterGroupName }}',
{{ NumShards }},
{{ TLSEnabled }},
'{{ Tags }}',
'{{ region }}'
RETURNING
multi_region_cluster
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: multi_region_clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the multi_region_clusters resource.
    - name: MultiRegionClusterNameSuffix
      value: "{{ MultiRegionClusterNameSuffix }}"
      description: |
        A suffix to be added to the Multi-Region cluster name. Amazon MemoryDB automatically applies a prefix to the Multi-Region cluster Name when it is created. Each Amazon Region has its own prefix. For instance, a Multi-Region cluster Name created in the US-West-1 region will begin with "virxk", along with the suffix name you provide. The suffix guarantees uniqueness of the Multi-Region cluster name across multiple regions.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the multi-Region cluster.
    - name: Engine
      value: "{{ Engine }}"
      description: |
        The name of the engine to be used for the multi-Region cluster.
    - name: EngineVersion
      value: "{{ EngineVersion }}"
      description: |
        The version of the engine to be used for the multi-Region cluster.
    - name: NodeType
      value: "{{ NodeType }}"
      description: |
        The node type to be used for the multi-Region cluster.
    - name: MultiRegionParameterGroupName
      value: "{{ MultiRegionParameterGroupName }}"
      description: |
        The name of the multi-Region parameter group to be associated with the cluster.
    - name: NumShards
      value: {{ NumShards }}
      description: |
        The number of shards for the multi-Region cluster.
    - name: TLSEnabled
      value: {{ TLSEnabled }}
      description: |
        Whether to enable TLS encryption for the multi-Region cluster.
    - name: Tags
      description: |
        A list of tags to be applied to the multi-Region cluster.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_multi_region_cluster"
    values={[
        { label: 'update_multi_region_cluster', value: 'update_multi_region_cluster' }
    ]}
>
<TabItem value="update_multi_region_cluster">

Updates the configuration of an existing multi-Region cluster.

```sql
UPDATE aws.memorydb.multi_region_clusters
SET 
MultiRegionClusterName = '{{ MultiRegionClusterName }}',
NodeType = '{{ NodeType }}',
Description = '{{ Description }}',
EngineVersion = '{{ EngineVersion }}',
ShardConfiguration = '{{ ShardConfiguration }}',
MultiRegionParameterGroupName = '{{ MultiRegionParameterGroupName }}',
UpdateStrategy = '{{ UpdateStrategy }}'
WHERE 
region = '{{ region }}' --required
AND MultiRegionClusterName = '{{ MultiRegionClusterName }}' --required
RETURNING
multi_region_cluster;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_multi_region_cluster"
    values={[
        { label: 'delete_multi_region_cluster', value: 'delete_multi_region_cluster' }
    ]}
>
<TabItem value="delete_multi_region_cluster">

Deletes an existing multi-Region cluster.

```sql
DELETE FROM aws.memorydb.multi_region_clusters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
