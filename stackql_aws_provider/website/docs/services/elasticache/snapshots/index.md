--- 
title: snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots
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

Creates, updates, deletes, gets or lists a <code>snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_snapshots"
    values={[
        { label: 'describe_snapshots', value: 'describe_snapshots' }
    ]}
>
<TabItem value="describe_snapshots">

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
    <td>The ARN (Amazon Resource Name) of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_minor_version_upgrade" /></td>
    <td><code>boolean</code></td>
    <td>If you are running Valkey 7.2 and above or Redis OSS engine version 6.0 and above, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.</td>
</tr>
<tr>
    <td><CopyableCode code="automatic_failover" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of automatic failover for the source Valkey or Redis OSS replication group.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_cluster_create_time" /></td>
    <td><code>string</code></td>
    <td>The date and time when the source cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The user-supplied identifier of the source cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_node_type" /></td>
    <td><code>string</code></td>
    <td>The name of the compute and memory capacity node type for the source cluster. The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts. General purpose: Current generation: M7g node types: cache.m7g.large, cache.m7g.xlarge, cache.m7g.2xlarge, cache.m7g.4xlarge, cache.m7g.8xlarge, cache.m7g.12xlarge, cache.m7g.16xlarge For region availability, see Supported Node Types M6g node types (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.m6g.large, cache.m6g.xlarge, cache.m6g.2xlarge, cache.m6g.4xlarge, cache.m6g.8xlarge, cache.m6g.12xlarge, cache.m6g.16xlarge M5 node types: cache.m5.large, cache.m5.xlarge, cache.m5.2xlarge, cache.m5.4xlarge, cache.m5.12xlarge, cache.m5.24xlarge M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge T4g node types (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): cache.t4g.micro, cache.t4g.small, cache.t4g.medium T3 node types: cache.t3.micro, cache.t3.small, cache.t3.medium T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) T1 node types: cache.t1.micro M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge Compute optimized: Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) C1 node types: cache.c1.xlarge Memory optimized: Current generation: R7g node types: cache.r7g.large, cache.r7g.xlarge, cache.r7g.2xlarge, cache.r7g.4xlarge, cache.r7g.8xlarge, cache.r7g.12xlarge, cache.r7g.16xlarge For region availability, see Supported Node Types R6g node types (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.r6g.large, cache.r6g.xlarge, cache.r6g.2xlarge, cache.r6g.4xlarge, cache.r6g.8xlarge, cache.r6g.12xlarge, cache.r6g.16xlarge R5 node types: cache.r5.large, cache.r5.xlarge, cache.r5.2xlarge, cache.r5.4xlarge, cache.r5.12xlarge, cache.r5.24xlarge R4 node types: cache.r4.large, cache.r4.xlarge, cache.r4.2xlarge, cache.r4.4xlarge, cache.r4.8xlarge, cache.r4.16xlarge Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge Additional node type info All current generation instance types are created in Amazon VPC by default. Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances. Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances. The configuration variables appendonly and appendfsync are not supported on Valkey, or on Redis OSS version 2.8.22 and later.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_parameter_group_name" /></td>
    <td><code>string</code></td>
    <td>The cache parameter group that is associated with the source cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_subnet_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the cache subnet group associated with the source cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="data_tiering" /></td>
    <td><code>string</code></td>
    <td>Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes. For more information, see Data tiering.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The name of the cache engine (memcached or redis) used by the source cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>The version of the cache engine version that is used by the source cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the KMS key used to encrypt the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="node_snapshots" /></td>
    <td><code>string</code></td>
    <td>A list of the cache nodes in the source cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="num_cache_nodes" /></td>
    <td><code>integer</code></td>
    <td>The number of cache nodes in the source cluster. For clusters running Valkey or Redis OSS, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.</td>
</tr>
<tr>
    <td><CopyableCode code="num_node_groups" /></td>
    <td><code>integer</code></td>
    <td>The number of node groups (shards) in this snapshot. When restoring from a snapshot, the number of node groups (shards) in the snapshot and in the restored replication group must be the same.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port number used by each cache nodes in the source cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_availability_zone" /></td>
    <td><code>string</code></td>
    <td>The name of the Availability Zone in which the source cluster is located.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_maintenance_window" /></td>
    <td><code>string</code></td>
    <td>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are: sun mon tue wed thu fri sat Example: sun:23:00-mon:01:30</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_outpost_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the preferred outpost.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_group_description" /></td>
    <td><code>string</code></td>
    <td>A description of the source replication group.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_group_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the source replication group.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_name" /></td>
    <td><code>string</code></td>
    <td>The name of a snapshot. For an automatic snapshot, the name is system-generated. For a manual snapshot, this is the user-provided name.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_retention_limit" /></td>
    <td><code>integer</code></td>
    <td>For an automatic snapshot, the number of days for which ElastiCache retains the snapshot before deleting it. For manual snapshots, this field reflects the SnapshotRetentionLimit for the source cluster when the snapshot was created. This field is otherwise ignored: Manual snapshots do not expire, and can only be deleted using the DeleteSnapshot operation. Important If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_source" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the snapshot is from an automatic backup (automated) or was created manually (manual).</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_status" /></td>
    <td><code>string</code></td>
    <td>The status of the snapshot. Valid values: creating | available | restoring | copying | deleting.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_window" /></td>
    <td><code>string</code></td>
    <td>The daily time range during which ElastiCache takes daily snapshots of the source cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="topic_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the topic used by the source cluster for publishing notifications.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group for the source cluster.</td>
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
    <td><a href="#describe_snapshots"><CopyableCode code="describe_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReplicationGroupId"><code>ReplicationGroupId</code></a>, <a href="#parameter-CacheClusterId"><code>CacheClusterId</code></a>, <a href="#parameter-SnapshotName"><code>SnapshotName</code></a>, <a href="#parameter-SnapshotSource"><code>SnapshotSource</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-ShowNodeGroupConfig"><code>ShowNodeGroupConfig</code></a></td>
    <td>Returns information about cluster or replication group snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster. This operation is valid for Valkey or Redis OSS only.</td>
</tr>
<tr>
    <td><a href="#create_snapshot"><CopyableCode code="create_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-SnapshotName"><code>SnapshotName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReplicationGroupId"><code>ReplicationGroupId</code></a>, <a href="#parameter-CacheClusterId"><code>CacheClusterId</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a copy of an entire cluster or replication group at a specific moment in time. This operation is valid for Valkey or Redis OSS only.</td>
</tr>
<tr>
    <td><a href="#delete_snapshot"><CopyableCode code="delete_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-SnapshotName"><code>SnapshotName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation. This operation is valid for Valkey or Redis OSS only.</td>
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
<tr id="parameter-SnapshotName">
    <td><CopyableCode code="SnapshotName" /></td>
    <td><code>string</code></td>
    <td>The name of the snapshot to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CacheClusterId">
    <td><CopyableCode code="CacheClusterId" /></td>
    <td><code>string</code></td>
    <td>The identifier of an existing cluster. The snapshot is created from this cluster.</td>
</tr>
<tr id="parameter-KmsKeyId">
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the KMS key used to encrypt the snapshot.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 50 Constraints: minimum 20; maximum 50.</td>
</tr>
<tr id="parameter-ReplicationGroupId">
    <td><CopyableCode code="ReplicationGroupId" /></td>
    <td><code>string</code></td>
    <td>The identifier of an existing replication group. The snapshot is created from this replication group.</td>
</tr>
<tr id="parameter-ShowNodeGroupConfig">
    <td><CopyableCode code="ShowNodeGroupConfig" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value which if true, the node group (shard) configuration is included in the snapshot description.</td>
</tr>
<tr id="parameter-SnapshotName">
    <td><CopyableCode code="SnapshotName" /></td>
    <td><code>string</code></td>
    <td>A user-supplied name of the snapshot. If this parameter is specified, only this snapshot are described.</td>
</tr>
<tr id="parameter-SnapshotSource">
    <td><CopyableCode code="SnapshotSource" /></td>
    <td><code>string</code></td>
    <td>If set to system, the output shows snapshots that were automatically created by ElastiCache. If set to user the output shows snapshots that were manually created. If omitted, the output shows both automatically and manually created snapshots.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_snapshots"
    values={[
        { label: 'describe_snapshots', value: 'describe_snapshots' }
    ]}
>
<TabItem value="describe_snapshots">

Returns information about cluster or replication group snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster. This operation is valid for Valkey or Redis OSS only.

```sql
SELECT
arn,
auto_minor_version_upgrade,
automatic_failover,
cache_cluster_create_time,
cache_cluster_id,
cache_node_type,
cache_parameter_group_name,
cache_subnet_group_name,
data_tiering,
engine,
engine_version,
kms_key_id,
node_snapshots,
num_cache_nodes,
num_node_groups,
port,
preferred_availability_zone,
preferred_maintenance_window,
preferred_outpost_arn,
replication_group_description,
replication_group_id,
snapshot_name,
snapshot_retention_limit,
snapshot_source,
snapshot_status,
snapshot_window,
topic_arn,
vpc_id
FROM aws.elasticache.snapshots
WHERE region = '{{ region }}' -- required
AND ReplicationGroupId = '{{ ReplicationGroupId }}'
AND CacheClusterId = '{{ CacheClusterId }}'
AND SnapshotName = '{{ SnapshotName }}'
AND SnapshotSource = '{{ SnapshotSource }}'
AND Marker = '{{ Marker }}'
AND MaxRecords = '{{ MaxRecords }}'
AND ShowNodeGroupConfig = '{{ ShowNodeGroupConfig }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_snapshot"
    values={[
        { label: 'create_snapshot', value: 'create_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_snapshot">

Creates a copy of an entire cluster or replication group at a specific moment in time. This operation is valid for Valkey or Redis OSS only.

```sql
INSERT INTO aws.elasticache.snapshots (
SnapshotName,
region,
ReplicationGroupId,
CacheClusterId,
KmsKeyId,
Tags
)
SELECT 
'{{ SnapshotName }}',
'{{ region }}',
'{{ ReplicationGroupId }}',
'{{ CacheClusterId }}',
'{{ KmsKeyId }}',
'{{ Tags }}'
RETURNING
arn,
auto_minor_version_upgrade,
automatic_failover,
cache_cluster_create_time,
cache_cluster_id,
cache_node_type,
cache_parameter_group_name,
cache_subnet_group_name,
data_tiering,
engine,
engine_version,
kms_key_id,
node_snapshots,
num_cache_nodes,
num_node_groups,
port,
preferred_availability_zone,
preferred_maintenance_window,
preferred_outpost_arn,
replication_group_description,
replication_group_id,
snapshot_name,
snapshot_retention_limit,
snapshot_source,
snapshot_status,
snapshot_window,
topic_arn,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: snapshots
  props:
    - name: SnapshotName
      value: "{{ SnapshotName }}"
      description: Required parameter for the snapshots resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the snapshots resource.
    - name: ReplicationGroupId
      value: "{{ ReplicationGroupId }}"
      description: The identifier of an existing replication group. The snapshot is created from this replication group.
      description: The identifier of an existing replication group. The snapshot is created from this replication group.
    - name: CacheClusterId
      value: "{{ CacheClusterId }}"
      description: The identifier of an existing cluster. The snapshot is created from this cluster.
      description: The identifier of an existing cluster. The snapshot is created from this cluster.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: The ID of the KMS key used to encrypt the snapshot.
      description: The ID of the KMS key used to encrypt the snapshot.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
      description: A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_snapshot"
    values={[
        { label: 'delete_snapshot', value: 'delete_snapshot' }
    ]}
>
<TabItem value="delete_snapshot">

Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation. This operation is valid for Valkey or Redis OSS only.

```sql
DELETE FROM aws.elasticache.snapshots
WHERE SnapshotName = '{{ SnapshotName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
