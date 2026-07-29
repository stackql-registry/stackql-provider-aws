--- 
title: graphs
hide_title: false
hide_table_of_contents: false
keywords:
  - graphs
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

Creates, updates, deletes, gets or lists a <code>graphs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="graphs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune_graph.graphs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_graph"
    values={[
        { label: 'get_graph', value: 'get_graph' },
        { label: 'list_graphs', value: 'list_graphs' }
    ]}
>
<TabItem value="get_graph">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the graph. (pattern: &lt;code&gt;g-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the graph. (pattern: &lt;code&gt;(?!g-)&#91;a-z&#93;&#91;a-z0-9&#93;*(-&#91;a-z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN associated with the graph.</td>
</tr>
<tr>
    <td><CopyableCode code="build_number" /></td>
    <td><code>string</code></td>
    <td>The build number of the graph.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the graph was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection" /></td>
    <td><code>boolean</code></td>
    <td>If true, deletion protection is enabled for the graph.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The graph endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the KMS key used to encrypt and decrypt graph data. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_memory" /></td>
    <td><code>integer</code></td>
    <td>The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.</td>
</tr>
<tr>
    <td><CopyableCode code="public_connectivity" /></td>
    <td><code>boolean</code></td>
    <td>If true, the graph has a public endpoint, otherwise not.</td>
</tr>
<tr>
    <td><CopyableCode code="replica_count" /></td>
    <td><code>integer</code></td>
    <td>The number of replicas for the graph.</td>
</tr>
<tr>
    <td><CopyableCode code="source_snapshot_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the snapshot from which the graph was created, if it was created from a snapshot. (pattern: &lt;code&gt;gs-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the graph. (CREATING, AVAILABLE, DELETING, RESETTING, UPDATING, SNAPSHOTTING, FAILED, IMPORTING, STARTING, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason that the graph has this status.</td>
</tr>
<tr>
    <td><CopyableCode code="vector_search_configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_graphs">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the graph. (pattern: &lt;code&gt;g-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the graph. (pattern: &lt;code&gt;(?!g-)&#91;a-z&#93;&#91;a-z0-9&#93;*(-&#91;a-z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN associated with the graph.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection" /></td>
    <td><code>boolean</code></td>
    <td>If true, deletion protection is enabled for the graph.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The graph endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the KMS key used to encrypt and decrypt graph data.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_memory" /></td>
    <td><code>integer</code></td>
    <td>The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.</td>
</tr>
<tr>
    <td><CopyableCode code="public_connectivity" /></td>
    <td><code>boolean</code></td>
    <td>If true, the graph has a public endpoint, otherwise not.</td>
</tr>
<tr>
    <td><CopyableCode code="replica_count" /></td>
    <td><code>integer</code></td>
    <td>The number of replicas for the graph.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the graph. (CREATING, AVAILABLE, DELETING, RESETTING, UPDATING, SNAPSHOTTING, FAILED, IMPORTING, STARTING, STOPPING, STOPPED)</td>
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
    <td><a href="#get_graph"><CopyableCode code="get_graph" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-graph_identifier"><code>graph_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specified graph.</td>
</tr>
<tr>
    <td><a href="#list_graphs"><CopyableCode code="list_graphs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists available Neptune Analytics graphs.</td>
</tr>
<tr>
    <td><a href="#create_graph"><CopyableCode code="create_graph" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-graphName"><code>graphName</code></a>, <a href="#parameter-provisionedMemory"><code>provisionedMemory</code></a></td>
    <td></td>
    <td>Creates a new Neptune Analytics graph.</td>
</tr>
<tr>
    <td><a href="#update_graph"><CopyableCode code="update_graph" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-graph_identifier"><code>graph_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration of a specified Neptune Analytics graph</td>
</tr>
<tr>
    <td><a href="#delete_graph"><CopyableCode code="delete_graph" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-graph_identifier"><code>graph_identifier</code></a>, <a href="#parameter-skipSnapshot"><code>skipSnapshot</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified graph. Graphs cannot be deleted if delete-protection is enabled.</td>
</tr>
<tr>
    <td><a href="#reset_graph"><CopyableCode code="reset_graph" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-graph_identifier"><code>graph_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-skipSnapshot"><code>skipSnapshot</code></a></td>
    <td></td>
    <td>Empties the data from a specified Neptune Analytics graph.</td>
</tr>
<tr>
    <td><a href="#execute_query"><CopyableCode code="execute_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-graphIdentifier"><code>graphIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-queryString"><code>queryString</code></a>, <a href="#parameter-language"><code>language</code></a></td>
    <td></td>
    <td>Execute an openCypher query. When invoking this operation in a Neptune Analytics cluster, the IAM user or role making the request must have a policy attached that allows one of the following IAM actions in that cluster, depending on the query: neptune-graph:ReadDataViaQuery neptune-graph:WriteDataViaQuery neptune-graph:DeleteDataViaQuery</td>
</tr>
<tr>
    <td><a href="#restore_graph_from_snapshot"><CopyableCode code="restore_graph_from_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-snapshot_identifier"><code>snapshot_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-graphName"><code>graphName</code></a></td>
    <td></td>
    <td>Restores a graph from a snapshot.</td>
</tr>
<tr>
    <td><a href="#start_graph"><CopyableCode code="start_graph" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-graph_identifier"><code>graph_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts the specific graph.</td>
</tr>
<tr>
    <td><a href="#stop_graph"><CopyableCode code="stop_graph" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-graph_identifier"><code>graph_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops the specific graph.</td>
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
<tr id="parameter-graph_identifier">
    <td><CopyableCode code="graph_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Neptune Analytics graph.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-skipSnapshot">
    <td><CopyableCode code="skipSnapshot" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether a final graph snapshot is created before the graph is deleted. If true is specified, no graph snapshot is created. If false is specified, a graph snapshot is created before the graph is deleted.</td>
</tr>
<tr id="parameter-snapshot_identifier">
    <td><CopyableCode code="snapshot_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the snapshot in question.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The total number of records to return in the command's output. If the total number of records available is more than the value specified, nextToken is provided in the command's output. To resume pagination, provide the nextToken output value in the nextToken argument of a subsequent command. Do not use the nextToken response element directly outside of the Amazon CLI.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token used to paginate output. When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_graph"
    values={[
        { label: 'get_graph', value: 'get_graph' },
        { label: 'list_graphs', value: 'list_graphs' }
    ]}
>
<TabItem value="get_graph">

Gets information about a specified graph.

```sql
SELECT
id,
name,
arn,
build_number,
create_time,
deletion_protection,
endpoint,
kms_key_identifier,
provisioned_memory,
public_connectivity,
replica_count,
source_snapshot_id,
status,
status_reason,
vector_search_configuration
FROM aws.neptune_graph.graphs
WHERE graph_identifier = '{{ graph_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_graphs">

Lists available Neptune Analytics graphs.

```sql
SELECT
id,
name,
arn,
deletion_protection,
endpoint,
kms_key_identifier,
provisioned_memory,
public_connectivity,
replica_count,
status
FROM aws.neptune_graph.graphs
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_graph"
    values={[
        { label: 'create_graph', value: 'create_graph' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_graph">

Creates a new Neptune Analytics graph.

```sql
INSERT INTO aws.neptune_graph.graphs (
graphName,
tags,
publicConnectivity,
kmsKeyIdentifier,
vectorSearchConfiguration,
replicaCount,
deletionProtection,
provisionedMemory,
region
)
SELECT 
'{{ graphName }}' /* required */,
'{{ tags }}',
{{ publicConnectivity }},
'{{ kmsKeyIdentifier }}',
'{{ vectorSearchConfiguration }}',
{{ replicaCount }},
{{ deletionProtection }},
{{ provisionedMemory }} /* required */,
'{{ region }}'
RETURNING
id,
name,
arn,
build_number,
create_time,
deletion_protection,
endpoint,
kms_key_identifier,
provisioned_memory,
public_connectivity,
replica_count,
source_snapshot_id,
status,
status_reason,
vector_search_configuration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: graphs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the graphs resource.
    - name: graphName
      value: "{{ graphName }}"
    - name: tags
      value: "{{ tags }}"
    - name: publicConnectivity
      value: {{ publicConnectivity }}
    - name: kmsKeyIdentifier
      value: "{{ kmsKeyIdentifier }}"
    - name: vectorSearchConfiguration
      description: |
        Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535
      value:
        dimension: {{ dimension }}
    - name: replicaCount
      value: {{ replicaCount }}
    - name: deletionProtection
      value: {{ deletionProtection }}
    - name: provisionedMemory
      value: {{ provisionedMemory }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_graph"
    values={[
        { label: 'update_graph', value: 'update_graph' }
    ]}
>
<TabItem value="update_graph">

Updates the configuration of a specified Neptune Analytics graph

```sql
UPDATE aws.neptune_graph.graphs
SET 
publicConnectivity = {{ publicConnectivity }},
provisionedMemory = {{ provisionedMemory }},
deletionProtection = {{ deletionProtection }}
WHERE 
graph_identifier = '{{ graph_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
arn,
build_number,
create_time,
deletion_protection,
endpoint,
kms_key_identifier,
provisioned_memory,
public_connectivity,
replica_count,
source_snapshot_id,
status,
status_reason,
vector_search_configuration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_graph"
    values={[
        { label: 'delete_graph', value: 'delete_graph' }
    ]}
>
<TabItem value="delete_graph">

Deletes the specified graph. Graphs cannot be deleted if delete-protection is enabled.

```sql
DELETE FROM aws.neptune_graph.graphs
WHERE graph_identifier = '{{ graph_identifier }}' --required
AND skipSnapshot = '{{ skipSnapshot }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_graph"
    values={[
        { label: 'reset_graph', value: 'reset_graph' },
        { label: 'execute_query', value: 'execute_query' },
        { label: 'restore_graph_from_snapshot', value: 'restore_graph_from_snapshot' },
        { label: 'start_graph', value: 'start_graph' },
        { label: 'stop_graph', value: 'stop_graph' }
    ]}
>
<TabItem value="reset_graph">

Empties the data from a specified Neptune Analytics graph.

```sql
EXEC aws.neptune_graph.graphs.reset_graph 
@graph_identifier='{{ graph_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"skipSnapshot": {{ skipSnapshot }}
}'
;
```
</TabItem>
<TabItem value="execute_query">

Execute an openCypher query. When invoking this operation in a Neptune Analytics cluster, the IAM user or role making the request must have a policy attached that allows one of the following IAM actions in that cluster, depending on the query: neptune-graph:ReadDataViaQuery neptune-graph:WriteDataViaQuery neptune-graph:DeleteDataViaQuery

```sql
EXEC aws.neptune_graph.graphs.execute_query 
@graphIdentifier='{{ graphIdentifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"queryString": "{{ queryString }}", 
"language": "{{ language }}", 
"parameters": "{{ parameters }}", 
"planCache": "{{ planCache }}", 
"explainMode": "{{ explainMode }}", 
"queryTimeoutMilliseconds": {{ queryTimeoutMilliseconds }}
}'
;
```
</TabItem>
<TabItem value="restore_graph_from_snapshot">

Restores a graph from a snapshot.

```sql
EXEC aws.neptune_graph.graphs.restore_graph_from_snapshot 
@snapshot_identifier='{{ snapshot_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"graphName": "{{ graphName }}", 
"provisionedMemory": {{ provisionedMemory }}, 
"deletionProtection": {{ deletionProtection }}, 
"tags": "{{ tags }}", 
"replicaCount": {{ replicaCount }}, 
"publicConnectivity": {{ publicConnectivity }}
}'
;
```
</TabItem>
<TabItem value="start_graph">

Starts the specific graph.

```sql
EXEC aws.neptune_graph.graphs.start_graph 
@graph_identifier='{{ graph_identifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_graph">

Stops the specific graph.

```sql
EXEC aws.neptune_graph.graphs.stop_graph 
@graph_identifier='{{ graph_identifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
