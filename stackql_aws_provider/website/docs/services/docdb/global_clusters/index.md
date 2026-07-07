--- 
title: global_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - global_clusters
  - docdb
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

Creates, updates, deletes, gets or lists a <code>global_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="global_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.docdb.global_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_global_clusters"
    values={[
        { label: 'describe_global_clusters', value: 'describe_global_clusters' }
    ]}
>
<TabItem value="describe_global_clusters">

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
    <td><CopyableCode code="DatabaseName" /></td>
    <td><code>string</code></td>
    <td>The default database name within the new global cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="DeletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>The deletion protection setting for the new global cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The Amazon DocumentDB database engine used by the global cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>Indicates the database engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="FailoverState" /></td>
    <td><code>string</code></td>
    <td>A data object containing all properties for the current state of an in-process or pending switchover or failover process for this global cluster. This object is empty unless the SwitchoverGlobalCluster or FailoverGlobalCluster operation was called on this global cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalClusterArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the global cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>Contains a user-supplied global cluster identifier. This identifier is the unique key that identifies a global cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalClusterMembers" /></td>
    <td><code>string</code></td>
    <td>The list of cluster IDs for secondary clusters within the global cluster. Currently limited to one item.</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalClusterResourceId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services RegionRegion-unique, immutable identifier for the global database cluster. This identifier is found in CloudTrail log entries whenever the KMS customer master key (CMK) for the cluster is accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Specifies the current state of this global cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageEncrypted" /></td>
    <td><code>boolean</code></td>
    <td>The storage encryption setting for the global cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="TagList" /></td>
    <td><code>string</code></td>
    <td>A list of global cluster tags.</td>
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
    <td><a href="#describe_global_clusters"><CopyableCode code="describe_global_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns information about Amazon DocumentDB global clusters. This API supports pagination. This action only applies to Amazon DocumentDB clusters.</td>
</tr>
<tr>
    <td><a href="#create_global_cluster"><CopyableCode code="create_global_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SourceDBClusterIdentifier"><code>SourceDBClusterIdentifier</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-StorageEncrypted"><code>StorageEncrypted</code></a></td>
    <td>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to 10 read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance. You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. This action only applies to Amazon DocumentDB clusters.</td>
</tr>
<tr>
    <td><a href="#remove_from_global_cluster"><CopyableCode code="remove_from_global_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-DbClusterIdentifier"><code>DbClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. This action only applies to Amazon DocumentDB clusters.</td>
</tr>
<tr>
    <td><a href="#modify_global_cluster"><CopyableCode code="modify_global_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NewGlobalClusterIdentifier"><code>NewGlobalClusterIdentifier</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a></td>
    <td>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request. This action only applies to Amazon DocumentDB clusters.</td>
</tr>
<tr>
    <td><a href="#delete_global_cluster"><CopyableCode code="delete_global_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster. This action only applies to Amazon DocumentDB clusters.</td>
</tr>
<tr>
    <td><a href="#failover_global_cluster"><CopyableCode code="failover_global_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-TargetDbClusterIdentifier"><code>TargetDbClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AllowDataLoss"><code>AllowDataLoss</code></a>, <a href="#parameter-Switchover"><code>Switchover</code></a></td>
    <td>Promotes the specified secondary DB cluster to be the primary DB cluster in the global cluster when failing over a global cluster occurs. Use this operation to respond to an unplanned event, such as a regional disaster in the primary region. Failing over can result in a loss of write transaction data that wasn't replicated to the chosen secondary before the failover event occurred. However, the recovery process that promotes a DB instance on the chosen seconday DB cluster to be the primary writer DB instance guarantees that the data is in a transactionally consistent state.</td>
</tr>
<tr>
    <td><a href="#switchover_global_cluster"><CopyableCode code="switchover_global_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-TargetDbClusterIdentifier"><code>TargetDbClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Switches over the specified secondary Amazon DocumentDB cluster to be the new primary Amazon DocumentDB cluster in the global database cluster.</td>
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
<tr id="parameter-DbClusterIdentifier">
    <td><CopyableCode code="DbClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) identifying the cluster that was detached from the Amazon DocumentDB global cluster.</td>
</tr>
<tr id="parameter-GlobalClusterIdentifier">
    <td><CopyableCode code="GlobalClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DocumentDB global database cluster to switch over. The identifier is the unique key assigned by the user when the cluster is created. In other words, it's the name of the global cluster. This parameter isn’t case-sensitive. Constraints: Must match the identifier of an existing global cluster (Amazon DocumentDB global database). Minimum length of 1. Maximum length of 255. Pattern: &#91;A-Za-z&#93;&#91;0-9A-Za-z-:._&#93;*</td>
</tr>
<tr id="parameter-TargetDbClusterIdentifier">
    <td><CopyableCode code="TargetDbClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the secondary Amazon DocumentDB cluster to promote to the new primary for the global database cluster. Use the Amazon Resource Name (ARN) for the identifier so that Amazon DocumentDB can locate the cluster in its Amazon Web Services region. Constraints: Must match the identifier of an existing secondary cluster. Minimum length of 1. Maximum length of 255. Pattern: &#91;A-Za-z&#93;&#91;0-9A-Za-z-:._&#93;*</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AllowDataLoss">
    <td><CopyableCode code="AllowDataLoss" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to allow data loss for this global cluster operation. Allowing data loss triggers a global failover operation. If you don't specify AllowDataLoss, the global cluster operation defaults to a switchover. Constraints: Can't be specified together with the Switchover parameter.</td>
</tr>
<tr id="parameter-DatabaseName">
    <td><CopyableCode code="DatabaseName" /></td>
    <td><code>string</code></td>
    <td>The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon DocumentDB will not create a database in the global cluster you are creating.</td>
</tr>
<tr id="parameter-DeletionProtection">
    <td><CopyableCode code="DeletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the global cluster has deletion protection enabled. The global cluster can't be deleted when deletion protection is enabled.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The name of the database engine to be used for this cluster.</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The engine version of the global cluster.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more global DB clusters to describe. Supported filters: db-cluster-id accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list will only include information about the clusters identified by these ARNs.</td>
</tr>
<tr id="parameter-GlobalClusterIdentifier">
    <td><CopyableCode code="GlobalClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The user-supplied cluster identifier. If this parameter is specified, information from only the specific cluster is returned. This parameter isn't case-sensitive.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeGlobalClusters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.</td>
</tr>
<tr id="parameter-NewGlobalClusterIdentifier">
    <td><CopyableCode code="NewGlobalClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The new identifier for a global cluster when you modify a global cluster. This value is stored as a lowercase string. Must contain from 1 to 63 letters, numbers, or hyphens The first character must be a letter Can't end with a hyphen or contain two consecutive hyphens Example: my-cluster2</td>
</tr>
<tr id="parameter-SourceDBClusterIdentifier">
    <td><CopyableCode code="SourceDBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) to use as the primary cluster of the global cluster. This parameter is optional.</td>
</tr>
<tr id="parameter-StorageEncrypted">
    <td><CopyableCode code="StorageEncrypted" /></td>
    <td><code>boolean</code></td>
    <td>The storage encryption setting for the new global cluster.</td>
</tr>
<tr id="parameter-Switchover">
    <td><CopyableCode code="Switchover" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to switch over this global database cluster. Constraints: Can't be specified together with the AllowDataLoss parameter.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_global_clusters"
    values={[
        { label: 'describe_global_clusters', value: 'describe_global_clusters' }
    ]}
>
<TabItem value="describe_global_clusters">

Returns information about Amazon DocumentDB global clusters. This API supports pagination. This action only applies to Amazon DocumentDB clusters.

```sql
SELECT
DatabaseName,
DeletionProtection,
Engine,
EngineVersion,
FailoverState,
GlobalClusterArn,
GlobalClusterIdentifier,
GlobalClusterMembers,
GlobalClusterResourceId,
Status,
StorageEncrypted,
TagList
FROM aws.docdb.global_clusters
WHERE region = '{{ region }}' -- required
AND GlobalClusterIdentifier = '{{ GlobalClusterIdentifier }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_global_cluster"
    values={[
        { label: 'create_global_cluster', value: 'create_global_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_global_cluster">

Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to 10 read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance. You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. This action only applies to Amazon DocumentDB clusters.

```sql
INSERT INTO aws.docdb.global_clusters (
GlobalClusterIdentifier,
region,
SourceDBClusterIdentifier,
Engine,
EngineVersion,
DeletionProtection,
DatabaseName,
StorageEncrypted
)
SELECT 
'{{ GlobalClusterIdentifier }}',
'{{ region }}',
'{{ SourceDBClusterIdentifier }}',
'{{ Engine }}',
'{{ EngineVersion }}',
'{{ DeletionProtection }}',
'{{ DatabaseName }}',
'{{ StorageEncrypted }}'
RETURNING
DatabaseName,
DeletionProtection,
Engine,
EngineVersion,
FailoverState,
GlobalClusterArn,
GlobalClusterIdentifier,
GlobalClusterMembers,
GlobalClusterResourceId,
Status,
StorageEncrypted,
TagList
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: global_clusters
  props:
    - name: GlobalClusterIdentifier
      value: "{{ GlobalClusterIdentifier }}"
      description: Required parameter for the global_clusters resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the global_clusters resource.
    - name: SourceDBClusterIdentifier
      value: "{{ SourceDBClusterIdentifier }}"
      description: The Amazon Resource Name (ARN) to use as the primary cluster of the global cluster. This parameter is optional.
      description: The Amazon Resource Name (ARN) to use as the primary cluster of the global cluster. This parameter is optional.
    - name: Engine
      value: "{{ Engine }}"
      description: The name of the database engine to be used for this cluster.
      description: The name of the database engine to be used for this cluster.
    - name: EngineVersion
      value: "{{ EngineVersion }}"
      description: The engine version of the global cluster.
      description: The engine version of the global cluster.
    - name: DeletionProtection
      value: {{ DeletionProtection }}
      description: The deletion protection setting for the new global cluster. The global cluster can't be deleted when deletion protection is enabled.
      description: The deletion protection setting for the new global cluster. The global cluster can't be deleted when deletion protection is enabled.
    - name: DatabaseName
      value: "{{ DatabaseName }}"
      description: The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon DocumentDB will not create a database in the global cluster you are creating.
      description: The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon DocumentDB will not create a database in the global cluster you are creating.
    - name: StorageEncrypted
      value: {{ StorageEncrypted }}
      description: The storage encryption setting for the new global cluster.
      description: The storage encryption setting for the new global cluster.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="remove_from_global_cluster"
    values={[
        { label: 'remove_from_global_cluster', value: 'remove_from_global_cluster' },
        { label: 'modify_global_cluster', value: 'modify_global_cluster' }
    ]}
>
<TabItem value="remove_from_global_cluster">

Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. This action only applies to Amazon DocumentDB clusters.

```sql
UPDATE aws.docdb.global_clusters
SET 
-- No updatable properties
WHERE 
GlobalClusterIdentifier = '{{ GlobalClusterIdentifier }}' --required
AND DbClusterIdentifier = '{{ DbClusterIdentifier }}' --required
AND region = '{{ region }}' --required
RETURNING
DatabaseName,
DeletionProtection,
Engine,
EngineVersion,
FailoverState,
GlobalClusterArn,
GlobalClusterIdentifier,
GlobalClusterMembers,
GlobalClusterResourceId,
Status,
StorageEncrypted,
TagList;
```
</TabItem>
<TabItem value="modify_global_cluster">

Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request. This action only applies to Amazon DocumentDB clusters.

```sql
UPDATE aws.docdb.global_clusters
SET 
-- No updatable properties
WHERE 
GlobalClusterIdentifier = '{{ GlobalClusterIdentifier }}' --required
AND region = '{{ region }}' --required
AND NewGlobalClusterIdentifier = '{{ NewGlobalClusterIdentifier}}'
AND DeletionProtection = {{ DeletionProtection}}
RETURNING
DatabaseName,
DeletionProtection,
Engine,
EngineVersion,
FailoverState,
GlobalClusterArn,
GlobalClusterIdentifier,
GlobalClusterMembers,
GlobalClusterResourceId,
Status,
StorageEncrypted,
TagList;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_global_cluster"
    values={[
        { label: 'delete_global_cluster', value: 'delete_global_cluster' }
    ]}
>
<TabItem value="delete_global_cluster">

Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster. This action only applies to Amazon DocumentDB clusters.

```sql
DELETE FROM aws.docdb.global_clusters
WHERE GlobalClusterIdentifier = '{{ GlobalClusterIdentifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="failover_global_cluster"
    values={[
        { label: 'failover_global_cluster', value: 'failover_global_cluster' },
        { label: 'switchover_global_cluster', value: 'switchover_global_cluster' }
    ]}
>
<TabItem value="failover_global_cluster">

Promotes the specified secondary DB cluster to be the primary DB cluster in the global cluster when failing over a global cluster occurs. Use this operation to respond to an unplanned event, such as a regional disaster in the primary region. Failing over can result in a loss of write transaction data that wasn't replicated to the chosen secondary before the failover event occurred. However, the recovery process that promotes a DB instance on the chosen seconday DB cluster to be the primary writer DB instance guarantees that the data is in a transactionally consistent state.

```sql
EXEC aws.docdb.global_clusters.failover_global_cluster 
@GlobalClusterIdentifier='{{ GlobalClusterIdentifier }}' --required, 
@TargetDbClusterIdentifier='{{ TargetDbClusterIdentifier }}' --required, 
@region='{{ region }}' --required, 
@AllowDataLoss={{ AllowDataLoss }}, 
@Switchover={{ Switchover }}
;
```
</TabItem>
<TabItem value="switchover_global_cluster">

Switches over the specified secondary Amazon DocumentDB cluster to be the new primary Amazon DocumentDB cluster in the global database cluster.

```sql
EXEC aws.docdb.global_clusters.switchover_global_cluster 
@GlobalClusterIdentifier='{{ GlobalClusterIdentifier }}' --required, 
@TargetDbClusterIdentifier='{{ TargetDbClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
