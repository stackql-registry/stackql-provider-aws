--- 
title: global_replication_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - global_replication_groups
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

Creates, updates, deletes, gets or lists a <code>global_replication_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="global_replication_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.global_replication_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_global_replication_groups"
    values={[
        { label: 'describe_global_replication_groups', value: 'describe_global_replication_groups' }
    ]}
>
<TabItem value="describe_global_replication_groups">

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
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the global replication group.</td>
</tr>
<tr>
    <td><CopyableCode code="AtRestEncryptionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag that enables encryption at rest when set to true. You cannot modify the value of AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group. Required: Only available when creating a replication group in an Amazon VPC using Redis OSS version 3.2.6, 4.x or later.</td>
</tr>
<tr>
    <td><CopyableCode code="AuthTokenEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag that enables using an AuthToken (password) when issuing Valkey or Redis OSS commands. Default: false</td>
</tr>
<tr>
    <td><CopyableCode code="CacheNodeType" /></td>
    <td><code>string</code></td>
    <td>The cache node type of the Global datastore</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether the Global datastore is cluster enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The ElastiCache engine. For Valkey or Redis OSS only.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The ElastiCache engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalNodeGroups" /></td>
    <td><code>string</code></td>
    <td>Indicates the slot configuration and global identifier for each slice group.</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalReplicationGroupDescription" /></td>
    <td><code>string</code></td>
    <td>The optional description of the Global datastore</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalReplicationGroupId" /></td>
    <td><code>string</code></td>
    <td>The name of the Global datastore</td>
</tr>
<tr>
    <td><CopyableCode code="Members" /></td>
    <td><code>string</code></td>
    <td>The replication groups that comprise the Global datastore.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the Global datastore</td>
</tr>
<tr>
    <td><CopyableCode code="TransitEncryptionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag that enables in-transit encryption when set to true. Required: Only available when creating a replication group in an Amazon VPC using Redis OSS version 3.2.6, 4.x or later.</td>
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
    <td><a href="#describe_global_replication_groups"><CopyableCode code="describe_global_replication_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-GlobalReplicationGroupId"><code>GlobalReplicationGroupId</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-ShowMemberInfo"><code>ShowMemberInfo</code></a></td>
    <td>Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores.</td>
</tr>
<tr>
    <td><a href="#create_global_replication_group"><CopyableCode code="create_global_replication_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-GlobalReplicationGroupIdSuffix"><code>GlobalReplicationGroupIdSuffix</code></a>, <a href="#parameter-PrimaryReplicationGroupId"><code>PrimaryReplicationGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-GlobalReplicationGroupDescription"><code>GlobalReplicationGroupDescription</code></a></td>
    <td>Global Datastore offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore with Valkey or Redis OSS, you can create cross-region read replica clusters for ElastiCache to enable low-latency reads and disaster recovery across regions. For more information, see Replication Across Regions Using Global Datastore. The GlobalReplicationGroupIdSuffix is the name of the Global datastore. The PrimaryReplicationGroupId represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</td>
</tr>
<tr>
    <td><a href="#disassociate_global_replication_group"><CopyableCode code="disassociate_global_replication_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-GlobalReplicationGroupId"><code>GlobalReplicationGroupId</code></a>, <a href="#parameter-ReplicationGroupId"><code>ReplicationGroupId</code></a>, <a href="#parameter-ReplicationGroupRegion"><code>ReplicationGroupRegion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.</td>
</tr>
<tr>
    <td><a href="#modify_global_replication_group"><CopyableCode code="modify_global_replication_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-GlobalReplicationGroupId"><code>GlobalReplicationGroupId</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CacheNodeType"><code>CacheNodeType</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-CacheParameterGroupName"><code>CacheParameterGroupName</code></a>, <a href="#parameter-GlobalReplicationGroupDescription"><code>GlobalReplicationGroupDescription</code></a>, <a href="#parameter-AutomaticFailoverEnabled"><code>AutomaticFailoverEnabled</code></a></td>
    <td>Modifies the settings for a Global datastore.</td>
</tr>
<tr>
    <td><a href="#delete_global_replication_group"><CopyableCode code="delete_global_replication_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-GlobalReplicationGroupId"><code>GlobalReplicationGroupId</code></a>, <a href="#parameter-RetainPrimaryReplicationGroup"><code>RetainPrimaryReplicationGroup</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deleting a Global datastore is a two-step process: First, you must DisassociateGlobalReplicationGroup to remove the secondary clusters in the Global datastore. Once the Global datastore contains only the primary cluster, you can use the DeleteGlobalReplicationGroup API to delete the Global datastore while retainining the primary cluster using RetainPrimaryReplicationGroup=true. Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting RetainPrimaryReplicationGroup=true. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</td>
</tr>
<tr>
    <td><a href="#decrease_node_groups_in_global_replication_group"><CopyableCode code="decrease_node_groups_in_global_replication_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-GlobalReplicationGroupId"><code>GlobalReplicationGroupId</code></a>, <a href="#parameter-NodeGroupCount"><code>NodeGroupCount</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-GlobalNodeGroupsToRemove"><code>GlobalNodeGroupsToRemove</code></a>, <a href="#parameter-GlobalNodeGroupsToRetain"><code>GlobalNodeGroupsToRetain</code></a></td>
    <td>Decreases the number of node groups in a Global datastore</td>
</tr>
<tr>
    <td><a href="#failover_global_replication_group"><CopyableCode code="failover_global_replication_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-GlobalReplicationGroupId"><code>GlobalReplicationGroupId</code></a>, <a href="#parameter-PrimaryRegion"><code>PrimaryRegion</code></a>, <a href="#parameter-PrimaryReplicationGroupId"><code>PrimaryReplicationGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.</td>
</tr>
<tr>
    <td><a href="#increase_node_groups_in_global_replication_group"><CopyableCode code="increase_node_groups_in_global_replication_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-GlobalReplicationGroupId"><code>GlobalReplicationGroupId</code></a>, <a href="#parameter-NodeGroupCount"><code>NodeGroupCount</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RegionalConfigurations"><code>RegionalConfigurations</code></a></td>
    <td>Increase the number of node groups in the Global datastore</td>
</tr>
<tr>
    <td><a href="#rebalance_slots_in_global_replication_group"><CopyableCode code="rebalance_slots_in_global_replication_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-GlobalReplicationGroupId"><code>GlobalReplicationGroupId</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Redistribute slots to ensure uniform distribution across existing shards in the cluster.</td>
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
<tr id="parameter-ApplyImmediately">
    <td><CopyableCode code="ApplyImmediately" /></td>
    <td><code>boolean</code></td>
    <td>If True, redistribution is applied immediately.</td>
</tr>
<tr id="parameter-GlobalReplicationGroupId">
    <td><CopyableCode code="GlobalReplicationGroupId" /></td>
    <td><code>string</code></td>
    <td>The name of the Global datastore</td>
</tr>
<tr id="parameter-GlobalReplicationGroupIdSuffix">
    <td><CopyableCode code="GlobalReplicationGroupIdSuffix" /></td>
    <td><code>string</code></td>
    <td>The suffix name of a Global datastore. Amazon ElastiCache automatically applies a prefix to the Global datastore ID when it is created. Each Amazon Region has its own prefix. For instance, a Global datastore ID created in the US-West-1 region will begin with "dsdfu" along with the suffix name you provide. The suffix, combined with the auto-generated prefix, guarantees uniqueness of the Global datastore name across multiple regions. For a full list of Amazon Regions and their respective Global datastore iD prefixes, see Using the Amazon CLI with Global datastores .</td>
</tr>
<tr id="parameter-NodeGroupCount">
    <td><CopyableCode code="NodeGroupCount" /></td>
    <td><code>integer</code></td>
    <td>Total number of node groups you want</td>
</tr>
<tr id="parameter-PrimaryRegion">
    <td><CopyableCode code="PrimaryRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon region of the primary cluster of the Global datastore</td>
</tr>
<tr id="parameter-PrimaryReplicationGroupId">
    <td><CopyableCode code="PrimaryReplicationGroupId" /></td>
    <td><code>string</code></td>
    <td>The name of the primary replication group</td>
</tr>
<tr id="parameter-ReplicationGroupId">
    <td><CopyableCode code="ReplicationGroupId" /></td>
    <td><code>string</code></td>
    <td>The name of the secondary cluster you wish to remove from the Global datastore</td>
</tr>
<tr id="parameter-ReplicationGroupRegion">
    <td><CopyableCode code="ReplicationGroupRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon region of secondary cluster you wish to remove from the Global datastore</td>
</tr>
<tr id="parameter-RetainPrimaryReplicationGroup">
    <td><CopyableCode code="RetainPrimaryReplicationGroup" /></td>
    <td><code>boolean</code></td>
    <td>The primary replication group is retained as a standalone replication group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AutomaticFailoverEnabled">
    <td><CopyableCode code="AutomaticFailoverEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure.</td>
</tr>
<tr id="parameter-CacheNodeType">
    <td><CopyableCode code="CacheNodeType" /></td>
    <td><code>string</code></td>
    <td>A valid cache node type that you want to scale this Global datastore to.</td>
</tr>
<tr id="parameter-CacheParameterGroupName">
    <td><CopyableCode code="CacheParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the cache parameter group to use with the Global datastore. It must be compatible with the major engine version used by the Global datastore.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>Modifies the engine listed in a global replication group message. The options are valkey, memcached or redis.</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The upgraded version of the cache engine to be run on the clusters in the Global datastore.</td>
</tr>
<tr id="parameter-GlobalNodeGroupsToRemove">
    <td><CopyableCode code="GlobalNodeGroupsToRemove" /></td>
    <td><code>array</code></td>
    <td>If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. GlobalNodeGroupsToRemove is a list of NodeGroupIds to remove from the cluster. ElastiCache will attempt to remove all node groups listed by GlobalNodeGroupsToRemove from the cluster.</td>
</tr>
<tr id="parameter-GlobalNodeGroupsToRetain">
    <td><CopyableCode code="GlobalNodeGroupsToRetain" /></td>
    <td><code>array</code></td>
    <td>If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. GlobalNodeGroupsToRetain is a list of NodeGroupIds to retain from the cluster. ElastiCache will attempt to retain all node groups listed by GlobalNodeGroupsToRetain from the cluster.</td>
</tr>
<tr id="parameter-GlobalReplicationGroupDescription">
    <td><CopyableCode code="GlobalReplicationGroupDescription" /></td>
    <td><code>string</code></td>
    <td>A description of the Global datastore</td>
</tr>
<tr id="parameter-GlobalReplicationGroupId">
    <td><CopyableCode code="GlobalReplicationGroupId" /></td>
    <td><code>string</code></td>
    <td>The name of the Global datastore</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.</td>
</tr>
<tr id="parameter-RegionalConfigurations">
    <td><CopyableCode code="RegionalConfigurations" /></td>
    <td><code>array</code></td>
    <td>Describes the replication group IDs, the Amazon regions where they are stored and the shard configuration for each that comprise the Global datastore</td>
</tr>
<tr id="parameter-ShowMemberInfo">
    <td><CopyableCode code="ShowMemberInfo" /></td>
    <td><code>boolean</code></td>
    <td>Returns the list of members that comprise the Global datastore.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_global_replication_groups"
    values={[
        { label: 'describe_global_replication_groups', value: 'describe_global_replication_groups' }
    ]}
>
<TabItem value="describe_global_replication_groups">

Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores.

```sql
SELECT
ARN,
AtRestEncryptionEnabled,
AuthTokenEnabled,
CacheNodeType,
ClusterEnabled,
Engine,
EngineVersion,
GlobalNodeGroups,
GlobalReplicationGroupDescription,
GlobalReplicationGroupId,
Members,
Status,
TransitEncryptionEnabled
FROM aws.elasticache.global_replication_groups
WHERE region = '{{ region }}' -- required
AND GlobalReplicationGroupId = '{{ GlobalReplicationGroupId }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND ShowMemberInfo = '{{ ShowMemberInfo }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_global_replication_group"
    values={[
        { label: 'create_global_replication_group', value: 'create_global_replication_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_global_replication_group">

Global Datastore offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore with Valkey or Redis OSS, you can create cross-region read replica clusters for ElastiCache to enable low-latency reads and disaster recovery across regions. For more information, see Replication Across Regions Using Global Datastore. The GlobalReplicationGroupIdSuffix is the name of the Global datastore. The PrimaryReplicationGroupId represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.

```sql
INSERT INTO aws.elasticache.global_replication_groups (
GlobalReplicationGroupIdSuffix,
PrimaryReplicationGroupId,
region,
GlobalReplicationGroupDescription
)
SELECT 
'{{ GlobalReplicationGroupIdSuffix }}',
'{{ PrimaryReplicationGroupId }}',
'{{ region }}',
'{{ GlobalReplicationGroupDescription }}'
RETURNING
ARN,
AtRestEncryptionEnabled,
AuthTokenEnabled,
CacheNodeType,
ClusterEnabled,
Engine,
EngineVersion,
GlobalNodeGroups,
GlobalReplicationGroupDescription,
GlobalReplicationGroupId,
Members,
Status,
TransitEncryptionEnabled
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: global_replication_groups
  props:
    - name: GlobalReplicationGroupIdSuffix
      value: "{{ GlobalReplicationGroupIdSuffix }}"
      description: Required parameter for the global_replication_groups resource.
    - name: PrimaryReplicationGroupId
      value: "{{ PrimaryReplicationGroupId }}"
      description: Required parameter for the global_replication_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the global_replication_groups resource.
    - name: GlobalReplicationGroupDescription
      value: "{{ GlobalReplicationGroupDescription }}"
      description: Provides details of the Global datastore
      description: Provides details of the Global datastore
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="disassociate_global_replication_group"
    values={[
        { label: 'disassociate_global_replication_group', value: 'disassociate_global_replication_group' },
        { label: 'modify_global_replication_group', value: 'modify_global_replication_group' }
    ]}
>
<TabItem value="disassociate_global_replication_group">

Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.

```sql
UPDATE aws.elasticache.global_replication_groups
SET 
-- No updatable properties
WHERE 
GlobalReplicationGroupId = '{{ GlobalReplicationGroupId }}' --required
AND ReplicationGroupId = '{{ ReplicationGroupId }}' --required
AND ReplicationGroupRegion = '{{ ReplicationGroupRegion }}' --required
AND region = '{{ region }}' --required
RETURNING
ARN,
AtRestEncryptionEnabled,
AuthTokenEnabled,
CacheNodeType,
ClusterEnabled,
Engine,
EngineVersion,
GlobalNodeGroups,
GlobalReplicationGroupDescription,
GlobalReplicationGroupId,
Members,
Status,
TransitEncryptionEnabled;
```
</TabItem>
<TabItem value="modify_global_replication_group">

Modifies the settings for a Global datastore.

```sql
UPDATE aws.elasticache.global_replication_groups
SET 
-- No updatable properties
WHERE 
GlobalReplicationGroupId = '{{ GlobalReplicationGroupId }}' --required
AND ApplyImmediately = '{{ ApplyImmediately }}' --required
AND region = '{{ region }}' --required
AND CacheNodeType = '{{ CacheNodeType}}'
AND Engine = '{{ Engine}}'
AND EngineVersion = '{{ EngineVersion}}'
AND CacheParameterGroupName = '{{ CacheParameterGroupName}}'
AND GlobalReplicationGroupDescription = '{{ GlobalReplicationGroupDescription}}'
AND AutomaticFailoverEnabled = {{ AutomaticFailoverEnabled}}
RETURNING
ARN,
AtRestEncryptionEnabled,
AuthTokenEnabled,
CacheNodeType,
ClusterEnabled,
Engine,
EngineVersion,
GlobalNodeGroups,
GlobalReplicationGroupDescription,
GlobalReplicationGroupId,
Members,
Status,
TransitEncryptionEnabled;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_global_replication_group"
    values={[
        { label: 'delete_global_replication_group', value: 'delete_global_replication_group' }
    ]}
>
<TabItem value="delete_global_replication_group">

Deleting a Global datastore is a two-step process: First, you must DisassociateGlobalReplicationGroup to remove the secondary clusters in the Global datastore. Once the Global datastore contains only the primary cluster, you can use the DeleteGlobalReplicationGroup API to delete the Global datastore while retainining the primary cluster using RetainPrimaryReplicationGroup=true. Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting RetainPrimaryReplicationGroup=true. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.

```sql
DELETE FROM aws.elasticache.global_replication_groups
WHERE GlobalReplicationGroupId = '{{ GlobalReplicationGroupId }}' --required
AND RetainPrimaryReplicationGroup = '{{ RetainPrimaryReplicationGroup }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="decrease_node_groups_in_global_replication_group"
    values={[
        { label: 'decrease_node_groups_in_global_replication_group', value: 'decrease_node_groups_in_global_replication_group' },
        { label: 'failover_global_replication_group', value: 'failover_global_replication_group' },
        { label: 'increase_node_groups_in_global_replication_group', value: 'increase_node_groups_in_global_replication_group' },
        { label: 'rebalance_slots_in_global_replication_group', value: 'rebalance_slots_in_global_replication_group' }
    ]}
>
<TabItem value="decrease_node_groups_in_global_replication_group">

Decreases the number of node groups in a Global datastore

```sql
EXEC aws.elasticache.global_replication_groups.decrease_node_groups_in_global_replication_group 
@GlobalReplicationGroupId='{{ GlobalReplicationGroupId }}' --required, 
@NodeGroupCount='{{ NodeGroupCount }}' --required, 
@ApplyImmediately='{{ ApplyImmediately }}' --required, 
@region='{{ region }}' --required, 
@GlobalNodeGroupsToRemove='{{ GlobalNodeGroupsToRemove }}', 
@GlobalNodeGroupsToRetain='{{ GlobalNodeGroupsToRetain }}'
;
```
</TabItem>
<TabItem value="failover_global_replication_group">

Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.

```sql
EXEC aws.elasticache.global_replication_groups.failover_global_replication_group 
@GlobalReplicationGroupId='{{ GlobalReplicationGroupId }}' --required, 
@PrimaryRegion='{{ PrimaryRegion }}' --required, 
@PrimaryReplicationGroupId='{{ PrimaryReplicationGroupId }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="increase_node_groups_in_global_replication_group">

Increase the number of node groups in the Global datastore

```sql
EXEC aws.elasticache.global_replication_groups.increase_node_groups_in_global_replication_group 
@GlobalReplicationGroupId='{{ GlobalReplicationGroupId }}' --required, 
@NodeGroupCount='{{ NodeGroupCount }}' --required, 
@ApplyImmediately='{{ ApplyImmediately }}' --required, 
@region='{{ region }}' --required, 
@RegionalConfigurations='{{ RegionalConfigurations }}'
;
```
</TabItem>
<TabItem value="rebalance_slots_in_global_replication_group">

Redistribute slots to ensure uniform distribution across existing shards in the cluster.

```sql
EXEC aws.elasticache.global_replication_groups.rebalance_slots_in_global_replication_group 
@GlobalReplicationGroupId='{{ GlobalReplicationGroupId }}' --required, 
@ApplyImmediately='{{ ApplyImmediately }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
