--- 
title: replication_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_groups
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

Creates, updates, deletes, gets or lists a <code>replication_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replication_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.replication_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_replication_groups"
    values={[
        { label: 'describe_replication_groups', value: 'describe_replication_groups' }
    ]}
>
<TabItem value="describe_replication_groups">

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
    <td>The ARN (Amazon Resource Name) of the replication group.</td>
</tr>
<tr>
    <td><CopyableCode code="at_rest_encryption_enabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag that enables encryption at-rest when set to true. You cannot modify the value of AtRestEncryptionEnabled after the cluster is created. To enable encryption at-rest on a cluster you must set AtRestEncryptionEnabled to true when you create a cluster. Required: Only available when creating a replication group in an Amazon VPC using Redis OSS version 3.2.6, 4.x or later. Default: false</td>
</tr>
<tr>
    <td><CopyableCode code="auth_token_enabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag that enables using an AuthToken (password) when issuing Valkey or Redis OSS commands. Default: false</td>
</tr>
<tr>
    <td><CopyableCode code="auth_token_last_modified_date" /></td>
    <td><code>string</code></td>
    <td>The date the auth token was last modified</td>
</tr>
<tr>
    <td><CopyableCode code="auto_minor_version_upgrade" /></td>
    <td><code>boolean</code></td>
    <td>If you are running Valkey 7.2 and above, or Redis OSS engine version 6.0 and above, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.</td>
</tr>
<tr>
    <td><CopyableCode code="automatic_failover" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of automatic failover for this Valkey or Redis OSS replication group.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_node_type" /></td>
    <td><code>string</code></td>
    <td>The name of the compute and memory capacity node type for each node in the replication group.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_enabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag indicating whether or not this replication group is cluster enabled; i.e., whether its data can be partitioned across multiple shards (API/CLI: node groups). Valid values: true | false</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_mode" /></td>
    <td><code>string</code></td>
    <td>Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Valkey or Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Valkey or Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_endpoint" /></td>
    <td><code>string</code></td>
    <td>The configuration endpoint for this replication group. Use the configuration endpoint to connect to this replication group.</td>
</tr>
<tr>
    <td><CopyableCode code="data_tiering" /></td>
    <td><code>string</code></td>
    <td>Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes. For more information, see Data tiering.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The user supplied description of the replication group.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The engine used in a replication group. The options are valkey, memcached or redis.</td>
</tr>
<tr>
    <td><CopyableCode code="global_replication_group_info" /></td>
    <td><code>string</code></td>
    <td>The name of the Global datastore and role of this replication group in the Global datastore.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_discovery" /></td>
    <td><code>string</code></td>
    <td>The network type you choose when modifying a cluster, either ipv4 | ipv6. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 or Memcached engine version 1.6.6 and above on all instances built on the Nitro system.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the KMS key used to encrypt the disk in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="log_delivery_configurations" /></td>
    <td><code>string</code></td>
    <td>Returns the destination, format and type of the logs.</td>
</tr>
<tr>
    <td><CopyableCode code="member_clusters" /></td>
    <td><code>string</code></td>
    <td>The names of all the cache clusters that are part of this replication group.</td>
</tr>
<tr>
    <td><CopyableCode code="member_clusters_outpost_arns" /></td>
    <td><code>string</code></td>
    <td>The outpost ARNs of the replication group's member clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_az" /></td>
    <td><code>string</code></td>
    <td>A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>Must be either ipv4 | ipv6 | dual_stack. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 or Memcached engine version 1.6.6 and above on all instances built on the Nitro system.</td>
</tr>
<tr>
    <td><CopyableCode code="node_groups" /></td>
    <td><code>string</code></td>
    <td>A list of node groups in this replication group. For Valkey or Redis OSS (cluster mode disabled) replication groups, this is a single-element list. For Valkey or Redis OSS (cluster mode enabled) replication groups, the list contains an entry for each node group (shard).</td>
</tr>
<tr>
    <td><CopyableCode code="pending_modified_values" /></td>
    <td><code>string</code></td>
    <td>A group of settings to be applied to the replication group, either immediately or during the next maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_group_create_time" /></td>
    <td><code>string</code></td>
    <td>The date and time when the cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_group_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the replication group.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_retention_limit" /></td>
    <td><code>integer</code></td>
    <td>The number of days for which ElastiCache retains automatic cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted. If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_window" /></td>
    <td><code>string</code></td>
    <td>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). Example: 05:00-09:00 If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range. This parameter is only valid if the Engine parameter is redis.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotting_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The cluster ID that is used as the daily snapshot source for the replication group.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current state of this replication group - creating, available, modifying, deleting, create-failed, snapshotting.</td>
</tr>
<tr>
    <td><CopyableCode code="transit_encryption_enabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag that enables in-transit encryption when set to true. Required: Only available when creating a replication group in an Amazon VPC using Redis OSS version 3.2.6, 4.x or later. Default: false</td>
</tr>
<tr>
    <td><CopyableCode code="transit_encryption_mode" /></td>
    <td><code>string</code></td>
    <td>A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.</td>
</tr>
<tr>
    <td><CopyableCode code="user_group_ids" /></td>
    <td><code>string</code></td>
    <td>The ID of the user group associated to the replication group.</td>
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
    <td><a href="#describe_replication_groups"><CopyableCode code="describe_replication_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReplicationGroupId"><code>ReplicationGroupId</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns information about a particular replication group. If no identifier is specified, DescribeReplicationGroups returns information about all replication groups. This operation is valid for Valkey or Redis OSS only.</td>
</tr>
<tr>
    <td><a href="#create_replication_group"><CopyableCode code="create_replication_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ReplicationGroupId"><code>ReplicationGroupId</code></a>, <a href="#parameter-ReplicationGroupDescription"><code>ReplicationGroupDescription</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-GlobalReplicationGroupId"><code>GlobalReplicationGroupId</code></a>, <a href="#parameter-PrimaryClusterId"><code>PrimaryClusterId</code></a>, <a href="#parameter-AutomaticFailoverEnabled"><code>AutomaticFailoverEnabled</code></a>, <a href="#parameter-MultiAZEnabled"><code>MultiAZEnabled</code></a>, <a href="#parameter-NumCacheClusters"><code>NumCacheClusters</code></a>, <a href="#parameter-PreferredCacheClusterAZs"><code>PreferredCacheClusterAZs</code></a>, <a href="#parameter-NumNodeGroups"><code>NumNodeGroups</code></a>, <a href="#parameter-ReplicasPerNodeGroup"><code>ReplicasPerNodeGroup</code></a>, <a href="#parameter-NodeGroupConfiguration"><code>NodeGroupConfiguration</code></a>, <a href="#parameter-CacheNodeType"><code>CacheNodeType</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-CacheParameterGroupName"><code>CacheParameterGroupName</code></a>, <a href="#parameter-CacheSubnetGroupName"><code>CacheSubnetGroupName</code></a>, <a href="#parameter-CacheSecurityGroupNames"><code>CacheSecurityGroupNames</code></a>, <a href="#parameter-SecurityGroupIds"><code>SecurityGroupIds</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-SnapshotArns"><code>SnapshotArns</code></a>, <a href="#parameter-SnapshotName"><code>SnapshotName</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-NotificationTopicArn"><code>NotificationTopicArn</code></a>, <a href="#parameter-AutoMinorVersionUpgrade"><code>AutoMinorVersionUpgrade</code></a>, <a href="#parameter-SnapshotRetentionLimit"><code>SnapshotRetentionLimit</code></a>, <a href="#parameter-SnapshotWindow"><code>SnapshotWindow</code></a>, <a href="#parameter-AuthToken"><code>AuthToken</code></a>, <a href="#parameter-TransitEncryptionEnabled"><code>TransitEncryptionEnabled</code></a>, <a href="#parameter-AtRestEncryptionEnabled"><code>AtRestEncryptionEnabled</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-UserGroupIds"><code>UserGroupIds</code></a>, <a href="#parameter-LogDeliveryConfigurations"><code>LogDeliveryConfigurations</code></a>, <a href="#parameter-DataTieringEnabled"><code>DataTieringEnabled</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a>, <a href="#parameter-IpDiscovery"><code>IpDiscovery</code></a>, <a href="#parameter-TransitEncryptionMode"><code>TransitEncryptionMode</code></a>, <a href="#parameter-ClusterMode"><code>ClusterMode</code></a>, <a href="#parameter-ServerlessCacheSnapshotName"><code>ServerlessCacheSnapshotName</code></a></td>
    <td>Creates a Valkey or Redis OSS (cluster mode disabled) or a Valkey or Redis OSS (cluster mode enabled) replication group. This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global datastore. A Valkey or Redis OSS (cluster mode disabled) replication group is a collection of nodes, where one of the nodes is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas. A Valkey or Redis OSS cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI: node groups). Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed. The node or shard limit can be increased to a maximum of 500 per cluster if the Valkey or Redis OSS engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase. Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see Creating a Subnet Group. For versions below 5.0.6, the limit is 250 per cluster. To request a limit increase, see Amazon Service Limits and choose the limit type Nodes per cluster per instance type. When a Valkey or Redis OSS (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. If you need to increase or decrease the number of node groups (console: shards), you can use scaling. For more information, see Scaling self-designed clusters in the ElastiCache User Guide. This operation is valid for Valkey and Redis OSS only.</td>
</tr>
<tr>
    <td><a href="#modify_replication_group_shard_configuration"><CopyableCode code="modify_replication_group_shard_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ReplicationGroupId"><code>ReplicationGroupId</code></a>, <a href="#parameter-NodeGroupCount"><code>NodeGroupCount</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReshardingConfiguration"><code>ReshardingConfiguration</code></a>, <a href="#parameter-NodeGroupsToRemove"><code>NodeGroupsToRemove</code></a>, <a href="#parameter-NodeGroupsToRetain"><code>NodeGroupsToRetain</code></a></td>
    <td>Modifies a replication group's shards (node groups) by allowing you to add shards, remove shards, or rebalance the keyspaces among existing shards.</td>
</tr>
<tr>
    <td><a href="#modify_replication_group"><CopyableCode code="modify_replication_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ReplicationGroupId"><code>ReplicationGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReplicationGroupDescription"><code>ReplicationGroupDescription</code></a>, <a href="#parameter-PrimaryClusterId"><code>PrimaryClusterId</code></a>, <a href="#parameter-SnapshottingClusterId"><code>SnapshottingClusterId</code></a>, <a href="#parameter-AutomaticFailoverEnabled"><code>AutomaticFailoverEnabled</code></a>, <a href="#parameter-MultiAZEnabled"><code>MultiAZEnabled</code></a>, <a href="#parameter-NodeGroupId"><code>NodeGroupId</code></a>, <a href="#parameter-CacheSecurityGroupNames"><code>CacheSecurityGroupNames</code></a>, <a href="#parameter-SecurityGroupIds"><code>SecurityGroupIds</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-NotificationTopicArn"><code>NotificationTopicArn</code></a>, <a href="#parameter-CacheParameterGroupName"><code>CacheParameterGroupName</code></a>, <a href="#parameter-NotificationTopicStatus"><code>NotificationTopicStatus</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-AutoMinorVersionUpgrade"><code>AutoMinorVersionUpgrade</code></a>, <a href="#parameter-SnapshotRetentionLimit"><code>SnapshotRetentionLimit</code></a>, <a href="#parameter-SnapshotWindow"><code>SnapshotWindow</code></a>, <a href="#parameter-CacheNodeType"><code>CacheNodeType</code></a>, <a href="#parameter-AuthToken"><code>AuthToken</code></a>, <a href="#parameter-AuthTokenUpdateStrategy"><code>AuthTokenUpdateStrategy</code></a>, <a href="#parameter-UserGroupIdsToAdd"><code>UserGroupIdsToAdd</code></a>, <a href="#parameter-UserGroupIdsToRemove"><code>UserGroupIdsToRemove</code></a>, <a href="#parameter-RemoveUserGroups"><code>RemoveUserGroups</code></a>, <a href="#parameter-LogDeliveryConfigurations"><code>LogDeliveryConfigurations</code></a>, <a href="#parameter-IpDiscovery"><code>IpDiscovery</code></a>, <a href="#parameter-TransitEncryptionEnabled"><code>TransitEncryptionEnabled</code></a>, <a href="#parameter-TransitEncryptionMode"><code>TransitEncryptionMode</code></a>, <a href="#parameter-ClusterMode"><code>ClusterMode</code></a></td>
    <td>Modifies the settings for a replication group. This is limited to Valkey and Redis OSS 7 and above. Scaling for Valkey or Redis OSS (cluster mode enabled) in the ElastiCache User Guide ModifyReplicationGroupShardConfiguration in the ElastiCache API Reference This operation is valid for Valkey or Redis OSS only.</td>
</tr>
<tr>
    <td><a href="#delete_replication_group"><CopyableCode code="delete_replication_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ReplicationGroupId"><code>ReplicationGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RetainPrimaryCluster"><code>RetainPrimaryCluster</code></a>, <a href="#parameter-FinalSnapshotIdentifier"><code>FinalSnapshotIdentifier</code></a></td>
    <td>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting RetainPrimaryCluster=true. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation. CreateSnapshot permission is required to create a final snapshot. Without this permission, the API call will fail with an Access Denied exception. This operation is valid for Redis OSS only.</td>
</tr>
<tr>
    <td><a href="#complete_migration"><CopyableCode code="complete_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ReplicationGroupId"><code>ReplicationGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Force"><code>Force</code></a></td>
    <td>Complete the migration of data.</td>
</tr>
<tr>
    <td><a href="#decrease_replica_count"><CopyableCode code="decrease_replica_count" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ReplicationGroupId"><code>ReplicationGroupId</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NewReplicaCount"><code>NewReplicaCount</code></a>, <a href="#parameter-ReplicaConfiguration"><code>ReplicaConfiguration</code></a>, <a href="#parameter-ReplicasToRemove"><code>ReplicasToRemove</code></a></td>
    <td>Dynamically decreases the number of replicas in a Valkey or Redis OSS (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Valkey or Redis OSS (cluster mode enabled) replication group. This operation is performed with no cluster down time.</td>
</tr>
<tr>
    <td><a href="#increase_replica_count"><CopyableCode code="increase_replica_count" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ReplicationGroupId"><code>ReplicationGroupId</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NewReplicaCount"><code>NewReplicaCount</code></a>, <a href="#parameter-ReplicaConfiguration"><code>ReplicaConfiguration</code></a></td>
    <td>Dynamically increases the number of replicas in a Valkey or Redis OSS (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Valkey or Redis OSS (cluster mode enabled) replication group. This operation is performed with no cluster down time.</td>
</tr>
<tr>
    <td><a href="#start_migration"><CopyableCode code="start_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ReplicationGroupId"><code>ReplicationGroupId</code></a>, <a href="#parameter-CustomerNodeEndpointList"><code>CustomerNodeEndpointList</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Start the migration of data.</td>
</tr>
<tr>
    <td><a href="#test_failover"><CopyableCode code="test_failover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ReplicationGroupId"><code>ReplicationGroupId</code></a>, <a href="#parameter-NodeGroupId"><code>NodeGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Represents the input of a TestFailover operation which tests automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console). This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. Note the following A customer can use this operation to test automatic failover on up to 15 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period. If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently. If calling this operation multiple times on different shards in the same Valkey or Redis OSS (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made. To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance: Replication group message: Test Failover API called for node group <code>&lt;node-group-id&gt;</code> Cache cluster message: Failover from primary node <code>&lt;primary-node-id&gt;</code> to replica node <code>&lt;node-id&gt;</code> completed Replication group message: Failover from primary node <code>&lt;primary-node-id&gt;</code> to replica node <code>&lt;node-id&gt;</code> completed Cache cluster message: Recovering cache nodes <code>&lt;node-id&gt;</code> Cache cluster message: Finished recovery for cache nodes <code>&lt;node-id&gt;</code> For more information see: Viewing ElastiCache Events in the ElastiCache User Guide DescribeEvents in the ElastiCache API Reference Also see, Testing Multi-AZ in the ElastiCache User Guide.</td>
</tr>
<tr>
    <td><a href="#test_migration"><CopyableCode code="test_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ReplicationGroupId"><code>ReplicationGroupId</code></a>, <a href="#parameter-CustomerNodeEndpointList"><code>CustomerNodeEndpointList</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Async API to test connection between source and target replication group.</td>
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
    <td>If True, the number of replica nodes is increased immediately. ApplyImmediately=False is not currently supported.</td>
</tr>
<tr id="parameter-CustomerNodeEndpointList">
    <td><CopyableCode code="CustomerNodeEndpointList" /></td>
    <td><code>array</code></td>
    <td>List of endpoints from which data should be migrated. List should have only one element.</td>
</tr>
<tr id="parameter-NodeGroupCount">
    <td><CopyableCode code="NodeGroupCount" /></td>
    <td><code>integer</code></td>
    <td>The number of node groups (shards) that results from the modification of the shard configuration.</td>
</tr>
<tr id="parameter-NodeGroupId">
    <td><CopyableCode code="NodeGroupId" /></td>
    <td><code>string</code></td>
    <td>The name of the node group (called shard in the console) in this replication group on which automatic failover is to be tested. You may test automatic failover on up to 15 node groups in any rolling 24-hour period.</td>
</tr>
<tr id="parameter-ReplicationGroupDescription">
    <td><CopyableCode code="ReplicationGroupDescription" /></td>
    <td><code>string</code></td>
    <td>A user-created description for the replication group.</td>
</tr>
<tr id="parameter-ReplicationGroupId">
    <td><CopyableCode code="ReplicationGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the replication group to which data is to be migrated.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ApplyImmediately">
    <td><CopyableCode code="ApplyImmediately" /></td>
    <td><code>boolean</code></td>
    <td>If true, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the PreferredMaintenanceWindow setting for the replication group. If false, changes to the nodes in the replication group are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first. Valid values: true | false Default: false</td>
</tr>
<tr id="parameter-AtRestEncryptionEnabled">
    <td><CopyableCode code="AtRestEncryptionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag that enables encryption at rest when set to true. You cannot modify the value of AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group. Required: Only available when creating a replication group in an Amazon VPC using Valkey 7.2 and later, Redis OSS version 3.2.6, or Redis OSS 4.x and later. Default: true when using Valkey, false when using Redis OSS</td>
</tr>
<tr id="parameter-AuthToken">
    <td><CopyableCode code="AuthToken" /></td>
    <td><code>string</code></td>
    <td>Reserved parameter. The password used to access a password protected server. This parameter must be specified with the auth-token-update-strategy parameter. Password constraints: Must be only printable ASCII characters Must be at least 16 characters and no more than 128 characters in length Cannot contain any of the following characters: '/', '"', or '@', '%' For more information, see AUTH password at AUTH.</td>
</tr>
<tr id="parameter-AuthTokenUpdateStrategy">
    <td><CopyableCode code="AuthTokenUpdateStrategy" /></td>
    <td><code>string</code></td>
    <td>Specifies the strategy to use to update the AUTH token. This parameter must be specified with the auth-token parameter. Possible values: ROTATE - default, if no update strategy is provided SET - allowed only after ROTATE DELETE - allowed only when transitioning to RBAC For more information, see Authenticating Users with AUTH</td>
</tr>
<tr id="parameter-AutoMinorVersionUpgrade">
    <td><CopyableCode code="AutoMinorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>If you are running Valkey or Redis OSS engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.</td>
</tr>
<tr id="parameter-AutomaticFailoverEnabled">
    <td><CopyableCode code="AutomaticFailoverEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure. Valid values: true | false</td>
</tr>
<tr id="parameter-CacheNodeType">
    <td><CopyableCode code="CacheNodeType" /></td>
    <td><code>string</code></td>
    <td>A valid cache node type that you want to scale this replication group to.</td>
</tr>
<tr id="parameter-CacheParameterGroupName">
    <td><CopyableCode code="CacheParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the cache parameter group to apply to all of the clusters in this replication group. This change is asynchronously applied as soon as possible for parameters when the ApplyImmediately parameter is specified as true for this request.</td>
</tr>
<tr id="parameter-CacheSecurityGroupNames">
    <td><CopyableCode code="CacheSecurityGroupNames" /></td>
    <td><code>array</code></td>
    <td>A list of cache security group names to authorize for the clusters in this replication group. This change is asynchronously applied as soon as possible. This parameter can be used only with replication group containing clusters running outside of an Amazon Virtual Private Cloud (Amazon VPC). Constraints: Must contain no more than 255 alphanumeric characters. Must not be Default.</td>
</tr>
<tr id="parameter-CacheSubnetGroupName">
    <td><CopyableCode code="CacheSubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the cache subnet group to be used for the replication group. If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see Subnets and Subnet Groups.</td>
</tr>
<tr id="parameter-ClusterMode">
    <td><CopyableCode code="ClusterMode" /></td>
    <td><code>string</code></td>
    <td>Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Valkey or Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Valkey or Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled.</td>
</tr>
<tr id="parameter-DataTieringEnabled">
    <td><CopyableCode code="DataTieringEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes. For more information, see Data tiering.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>Modifies the engine listed in a replication group message. The options are valkey, memcached or redis.</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The upgraded version of the cache engine to be run on the clusters in the replication group. Important: You can upgrade to a newer engine version (see Selecting a Cache Engine and Version), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing replication group and create it anew with the earlier engine version.</td>
</tr>
<tr id="parameter-FinalSnapshotIdentifier">
    <td><CopyableCode code="FinalSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The name of a final node group (shard) snapshot. ElastiCache creates the snapshot from the primary node in the cluster, rather than one of the replicas; this is to ensure that it captures the freshest data. After the final snapshot is taken, the replication group is immediately deleted.</td>
</tr>
<tr id="parameter-Force">
    <td><CopyableCode code="Force" /></td>
    <td><code>boolean</code></td>
    <td>Forces the migration to stop without ensuring that data is in sync. It is recommended to use this option only to abort the migration and not recommended when application wants to continue migration to ElastiCache.</td>
</tr>
<tr id="parameter-GlobalReplicationGroupId">
    <td><CopyableCode code="GlobalReplicationGroupId" /></td>
    <td><code>string</code></td>
    <td>The name of the Global datastore</td>
</tr>
<tr id="parameter-IpDiscovery">
    <td><CopyableCode code="IpDiscovery" /></td>
    <td><code>string</code></td>
    <td>The network type you choose when modifying a cluster, either ipv4 | ipv6. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 and Memcached engine version 1.6.6 and above on all instances built on the Nitro system.</td>
</tr>
<tr id="parameter-KmsKeyId">
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the KMS key used to encrypt the disk in the cluster.</td>
</tr>
<tr id="parameter-LogDeliveryConfigurations">
    <td><CopyableCode code="LogDeliveryConfigurations" /></td>
    <td><code>array</code></td>
    <td>Specifies the destination, format and type of the logs.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.</td>
</tr>
<tr id="parameter-MultiAZEnabled">
    <td><CopyableCode code="MultiAZEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag to indicate MultiAZ is enabled.</td>
</tr>
<tr id="parameter-NetworkType">
    <td><CopyableCode code="NetworkType" /></td>
    <td><code>string</code></td>
    <td>Must be either ipv4 | ipv6 | dual_stack. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 and Memcached engine version 1.6.6 and above on all instances built on the Nitro system.</td>
</tr>
<tr id="parameter-NewReplicaCount">
    <td><CopyableCode code="NewReplicaCount" /></td>
    <td><code>integer</code></td>
    <td>The number of read replica nodes you want at the completion of this operation. For Valkey or Redis OSS (cluster mode disabled) replication groups, this is the number of replica nodes in the replication group. For Valkey or Redis OSS (cluster mode enabled) replication groups, this is the number of replica nodes in each of the replication group's node groups.</td>
</tr>
<tr id="parameter-NodeGroupConfiguration">
    <td><CopyableCode code="NodeGroupConfiguration" /></td>
    <td><code>array</code></td>
    <td>A list of node group (shard) configuration options. Each node group (shard) configuration has the following members: PrimaryAvailabilityZone, ReplicaAvailabilityZones, ReplicaCount, and Slots. If you're creating a Valkey or Redis OSS (cluster mode disabled) or a Valkey or Redis OSS (cluster mode enabled) replication group, you can use this parameter to individually configure each node group (shard), or you can omit this parameter. However, it is required when seeding a Valkey or Redis OSS (cluster mode enabled) cluster from a S3 rdb file. You must configure each node group (shard) using this parameter because you must specify the slots for each node group.</td>
</tr>
<tr id="parameter-NodeGroupId">
    <td><CopyableCode code="NodeGroupId" /></td>
    <td><code>string</code></td>
    <td>Deprecated. This parameter is not used.</td>
</tr>
<tr id="parameter-NodeGroupsToRemove">
    <td><CopyableCode code="NodeGroupsToRemove" /></td>
    <td><code>array</code></td>
    <td>If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. NodeGroupsToRemove is a list of NodeGroupIds to remove from the cluster. ElastiCache will attempt to remove all node groups listed by NodeGroupsToRemove from the cluster.</td>
</tr>
<tr id="parameter-NodeGroupsToRetain">
    <td><CopyableCode code="NodeGroupsToRetain" /></td>
    <td><code>array</code></td>
    <td>If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. NodeGroupsToRetain is a list of NodeGroupIds to retain in the cluster. ElastiCache will attempt to remove all node groups except those listed by NodeGroupsToRetain from the cluster.</td>
</tr>
<tr id="parameter-NotificationTopicArn">
    <td><CopyableCode code="NotificationTopicArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent. The Amazon SNS topic owner must be same as the replication group owner.</td>
</tr>
<tr id="parameter-NotificationTopicStatus">
    <td><CopyableCode code="NotificationTopicStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the Amazon SNS notification topic for the replication group. Notifications are sent only if the status is active. Valid values: active | inactive</td>
</tr>
<tr id="parameter-NumCacheClusters">
    <td><CopyableCode code="NumCacheClusters" /></td>
    <td><code>integer</code></td>
    <td>The number of clusters this replication group initially has. This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead. If AutomaticFailoverEnabled is true, the value of this parameter must be at least 2. If AutomaticFailoverEnabled is false you can omit this parameter (it will default to 1), or you can explicitly set it to a value between 2 and 6. The maximum permitted value for NumCacheClusters is 6 (1 primary plus 5 replicas).</td>
</tr>
<tr id="parameter-NumNodeGroups">
    <td><CopyableCode code="NumNodeGroups" /></td>
    <td><code>integer</code></td>
    <td>An optional parameter that specifies the number of node groups (shards) for this Valkey or Redis OSS (cluster mode enabled) replication group. For Valkey or Redis OSS (cluster mode disabled) either omit this parameter or set it to 1. Default: 1</td>
</tr>
<tr id="parameter-Port">
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port number on which each member of the replication group accepts connections.</td>
</tr>
<tr id="parameter-PreferredCacheClusterAZs">
    <td><CopyableCode code="PreferredCacheClusterAZs" /></td>
    <td><code>array</code></td>
    <td>A list of EC2 Availability Zones in which the replication group's clusters are created. The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list. This parameter is not used if there is more than one node group (shard). You should use NodeGroupConfiguration instead. If you are creating your replication group in an Amazon VPC (recommended), you can only locate clusters in Availability Zones associated with the subnets in the selected subnet group. The number of Availability Zones listed must equal the value of NumCacheClusters. Default: system chosen Availability Zones.</td>
</tr>
<tr id="parameter-PreferredMaintenanceWindow">
    <td><CopyableCode code="PreferredMaintenanceWindow" /></td>
    <td><code>string</code></td>
    <td>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are: sun mon tue wed thu fri sat Example: sun:23:00-mon:01:30</td>
</tr>
<tr id="parameter-PrimaryClusterId">
    <td><CopyableCode code="PrimaryClusterId" /></td>
    <td><code>string</code></td>
    <td>For replication groups with a single primary, if this parameter is specified, ElastiCache promotes the specified cluster in the specified replication group to the primary role. The nodes of all other clusters in the replication group are read replicas.</td>
</tr>
<tr id="parameter-RemoveUserGroups">
    <td><CopyableCode code="RemoveUserGroups" /></td>
    <td><code>boolean</code></td>
    <td>Removes the user group associated with this replication group.</td>
</tr>
<tr id="parameter-ReplicaConfiguration">
    <td><CopyableCode code="ReplicaConfiguration" /></td>
    <td><code>array</code></td>
    <td>A list of ConfigureShard objects that can be used to configure each shard in a Valkey or Redis OSS (cluster mode enabled) replication group. The ConfigureShard has three members: NewReplicaCount, NodeGroupId, and PreferredAvailabilityZones.</td>
</tr>
<tr id="parameter-ReplicasPerNodeGroup">
    <td><CopyableCode code="ReplicasPerNodeGroup" /></td>
    <td><code>integer</code></td>
    <td>An optional parameter that specifies the number of replica nodes in each node group (shard). Valid values are 0 to 5.</td>
</tr>
<tr id="parameter-ReplicasToRemove">
    <td><CopyableCode code="ReplicasToRemove" /></td>
    <td><code>array</code></td>
    <td>A list of the node ids to remove from the replication group or node group (shard).</td>
</tr>
<tr id="parameter-ReplicationGroupDescription">
    <td><CopyableCode code="ReplicationGroupDescription" /></td>
    <td><code>string</code></td>
    <td>A description for the replication group. Maximum length is 255 characters.</td>
</tr>
<tr id="parameter-ReplicationGroupId">
    <td><CopyableCode code="ReplicationGroupId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the replication group to be described. This parameter is not case sensitive. If you do not specify this parameter, information about all replication groups is returned.</td>
</tr>
<tr id="parameter-ReshardingConfiguration">
    <td><CopyableCode code="ReshardingConfiguration" /></td>
    <td><code>array</code></td>
    <td>Specifies the preferred availability zones for each node group in the cluster. If the value of NodeGroupCount is greater than the current number of node groups (shards), you can use this parameter to specify the preferred availability zones of the cluster's shards. If you omit this parameter ElastiCache selects availability zones for you. You can specify this parameter only if the value of NodeGroupCount is greater than the current number of node groups (shards).</td>
</tr>
<tr id="parameter-RetainPrimaryCluster">
    <td><CopyableCode code="RetainPrimaryCluster" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, all of the read replicas are deleted, but the primary node is retained.</td>
</tr>
<tr id="parameter-SecurityGroupIds">
    <td><CopyableCode code="SecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>Specifies the VPC Security Groups associated with the clusters in the replication group. This parameter can be used only with replication group containing clusters running in an Amazon Virtual Private Cloud (Amazon VPC).</td>
</tr>
<tr id="parameter-ServerlessCacheSnapshotName">
    <td><CopyableCode code="ServerlessCacheSnapshotName" /></td>
    <td><code>string</code></td>
    <td>The name of the snapshot used to create a replication group. Available for Valkey, Redis OSS only.</td>
</tr>
<tr id="parameter-SnapshotArns">
    <td><CopyableCode code="SnapshotArns" /></td>
    <td><code>array</code></td>
    <td>A list of Amazon Resource Names (ARN) that uniquely identify the Valkey or Redis OSS RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new replication group. The Amazon S3 object name in the ARN cannot contain any commas. The new replication group will have the number of node groups (console: shards) specified by the parameter NumNodeGroups or the number of node groups configured by NodeGroupConfiguration regardless of the number of ARNs specified here. Example of an Amazon S3 ARN: arn:aws:s3:::my_bucket/snapshot1.rdb</td>
</tr>
<tr id="parameter-SnapshotName">
    <td><CopyableCode code="SnapshotName" /></td>
    <td><code>string</code></td>
    <td>The name of a snapshot from which to restore data into the new replication group. The snapshot status changes to restoring while the new replication group is being created.</td>
</tr>
<tr id="parameter-SnapshotRetentionLimit">
    <td><CopyableCode code="SnapshotRetentionLimit" /></td>
    <td><code>integer</code></td>
    <td>The number of days for which ElastiCache retains automatic node group (shard) snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted. Important If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</td>
</tr>
<tr id="parameter-SnapshotWindow">
    <td><CopyableCode code="SnapshotWindow" /></td>
    <td><code>string</code></td>
    <td>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of the node group (shard) specified by SnapshottingClusterId. Example: 05:00-09:00 If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.</td>
</tr>
<tr id="parameter-SnapshottingClusterId">
    <td><CopyableCode code="SnapshottingClusterId" /></td>
    <td><code>string</code></td>
    <td>The cluster ID that is used as the daily snapshot source for the replication group. This parameter cannot be set for Valkey or Redis OSS (cluster mode enabled) replication groups.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue. Tags on replication groups will be replicated to all nodes.</td>
</tr>
<tr id="parameter-TransitEncryptionEnabled">
    <td><CopyableCode code="TransitEncryptionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag that enables in-transit encryption when set to true. If you are enabling in-transit encryption for an existing cluster, you must also set TransitEncryptionMode to preferred.</td>
</tr>
<tr id="parameter-TransitEncryptionMode">
    <td><CopyableCode code="TransitEncryptionMode" /></td>
    <td><code>string</code></td>
    <td>A setting that allows you to migrate your clients to use in-transit encryption, with no downtime. You must set TransitEncryptionEnabled to true, for your existing cluster, and set TransitEncryptionMode to preferred in the same request to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Valkey or Redis OSS clients to use encrypted connections you can set the value to required to allow encrypted connections only. Setting TransitEncryptionMode to required is a two-step process that requires you to first set the TransitEncryptionMode to preferred, after that you can set TransitEncryptionMode to required.</td>
</tr>
<tr id="parameter-UserGroupIds">
    <td><CopyableCode code="UserGroupIds" /></td>
    <td><code>array</code></td>
    <td>The user group to associate with the replication group.</td>
</tr>
<tr id="parameter-UserGroupIdsToAdd">
    <td><CopyableCode code="UserGroupIdsToAdd" /></td>
    <td><code>array</code></td>
    <td>The ID of the user group you are associating with the replication group.</td>
</tr>
<tr id="parameter-UserGroupIdsToRemove">
    <td><CopyableCode code="UserGroupIdsToRemove" /></td>
    <td><code>array</code></td>
    <td>The ID of the user group to disassociate from the replication group, meaning the users in the group no longer can access the replication group.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_replication_groups"
    values={[
        { label: 'describe_replication_groups', value: 'describe_replication_groups' }
    ]}
>
<TabItem value="describe_replication_groups">

Returns information about a particular replication group. If no identifier is specified, DescribeReplicationGroups returns information about all replication groups. This operation is valid for Valkey or Redis OSS only.

```sql
SELECT
arn,
at_rest_encryption_enabled,
auth_token_enabled,
auth_token_last_modified_date,
auto_minor_version_upgrade,
automatic_failover,
cache_node_type,
cluster_enabled,
cluster_mode,
configuration_endpoint,
data_tiering,
description,
engine,
global_replication_group_info,
ip_discovery,
kms_key_id,
log_delivery_configurations,
member_clusters,
member_clusters_outpost_arns,
multi_az,
network_type,
node_groups,
pending_modified_values,
replication_group_create_time,
replication_group_id,
snapshot_retention_limit,
snapshot_window,
snapshotting_cluster_id,
status,
transit_encryption_enabled,
transit_encryption_mode,
user_group_ids
FROM aws.elasticache.replication_groups
WHERE region = '{{ region }}' -- required
AND ReplicationGroupId = '{{ ReplicationGroupId }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_replication_group"
    values={[
        { label: 'create_replication_group', value: 'create_replication_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_replication_group">

Creates a Valkey or Redis OSS (cluster mode disabled) or a Valkey or Redis OSS (cluster mode enabled) replication group. This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global datastore. A Valkey or Redis OSS (cluster mode disabled) replication group is a collection of nodes, where one of the nodes is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas. A Valkey or Redis OSS cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI: node groups). Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed. The node or shard limit can be increased to a maximum of 500 per cluster if the Valkey or Redis OSS engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase. Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see Creating a Subnet Group. For versions below 5.0.6, the limit is 250 per cluster. To request a limit increase, see Amazon Service Limits and choose the limit type Nodes per cluster per instance type. When a Valkey or Redis OSS (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. If you need to increase or decrease the number of node groups (console: shards), you can use scaling. For more information, see Scaling self-designed clusters in the ElastiCache User Guide. This operation is valid for Valkey and Redis OSS only.

```sql
INSERT INTO aws.elasticache.replication_groups (
ReplicationGroupId,
ReplicationGroupDescription,
region,
GlobalReplicationGroupId,
PrimaryClusterId,
AutomaticFailoverEnabled,
MultiAZEnabled,
NumCacheClusters,
PreferredCacheClusterAZs,
NumNodeGroups,
ReplicasPerNodeGroup,
NodeGroupConfiguration,
CacheNodeType,
Engine,
EngineVersion,
CacheParameterGroupName,
CacheSubnetGroupName,
CacheSecurityGroupNames,
SecurityGroupIds,
Tags,
SnapshotArns,
SnapshotName,
PreferredMaintenanceWindow,
Port,
NotificationTopicArn,
AutoMinorVersionUpgrade,
SnapshotRetentionLimit,
SnapshotWindow,
AuthToken,
TransitEncryptionEnabled,
AtRestEncryptionEnabled,
KmsKeyId,
UserGroupIds,
LogDeliveryConfigurations,
DataTieringEnabled,
NetworkType,
IpDiscovery,
TransitEncryptionMode,
ClusterMode,
ServerlessCacheSnapshotName
)
SELECT 
'{{ ReplicationGroupId }}',
'{{ ReplicationGroupDescription }}',
'{{ region }}',
'{{ GlobalReplicationGroupId }}',
'{{ PrimaryClusterId }}',
'{{ AutomaticFailoverEnabled }}',
'{{ MultiAZEnabled }}',
'{{ NumCacheClusters }}',
'{{ PreferredCacheClusterAZs }}',
'{{ NumNodeGroups }}',
'{{ ReplicasPerNodeGroup }}',
'{{ NodeGroupConfiguration }}',
'{{ CacheNodeType }}',
'{{ Engine }}',
'{{ EngineVersion }}',
'{{ CacheParameterGroupName }}',
'{{ CacheSubnetGroupName }}',
'{{ CacheSecurityGroupNames }}',
'{{ SecurityGroupIds }}',
'{{ Tags }}',
'{{ SnapshotArns }}',
'{{ SnapshotName }}',
'{{ PreferredMaintenanceWindow }}',
'{{ Port }}',
'{{ NotificationTopicArn }}',
'{{ AutoMinorVersionUpgrade }}',
'{{ SnapshotRetentionLimit }}',
'{{ SnapshotWindow }}',
'{{ AuthToken }}',
'{{ TransitEncryptionEnabled }}',
'{{ AtRestEncryptionEnabled }}',
'{{ KmsKeyId }}',
'{{ UserGroupIds }}',
'{{ LogDeliveryConfigurations }}',
'{{ DataTieringEnabled }}',
'{{ NetworkType }}',
'{{ IpDiscovery }}',
'{{ TransitEncryptionMode }}',
'{{ ClusterMode }}',
'{{ ServerlessCacheSnapshotName }}'
RETURNING
arn,
at_rest_encryption_enabled,
auth_token_enabled,
auth_token_last_modified_date,
auto_minor_version_upgrade,
automatic_failover,
cache_node_type,
cluster_enabled,
cluster_mode,
configuration_endpoint,
data_tiering,
description,
engine,
global_replication_group_info,
ip_discovery,
kms_key_id,
log_delivery_configurations,
member_clusters,
member_clusters_outpost_arns,
multi_az,
network_type,
node_groups,
pending_modified_values,
replication_group_create_time,
replication_group_id,
snapshot_retention_limit,
snapshot_window,
snapshotting_cluster_id,
status,
transit_encryption_enabled,
transit_encryption_mode,
user_group_ids
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: replication_groups
  props:
    - name: ReplicationGroupId
      value: "{{ ReplicationGroupId }}"
      description: Required parameter for the replication_groups resource.
    - name: ReplicationGroupDescription
      value: "{{ ReplicationGroupDescription }}"
      description: Required parameter for the replication_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the replication_groups resource.
    - name: GlobalReplicationGroupId
      value: "{{ GlobalReplicationGroupId }}"
      description: The name of the Global datastore
      description: The name of the Global datastore
    - name: PrimaryClusterId
      value: "{{ PrimaryClusterId }}"
      description: The identifier of the cluster that serves as the primary for this replication group. This cluster must already exist and have a status of available. This parameter is not required if NumCacheClusters, NumNodeGroups, or ReplicasPerNodeGroup is specified.
      description: The identifier of the cluster that serves as the primary for this replication group. This cluster must already exist and have a status of available. This parameter is not required if NumCacheClusters, NumNodeGroups, or ReplicasPerNodeGroup is specified.
    - name: AutomaticFailoverEnabled
      value: {{ AutomaticFailoverEnabled }}
      description: Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails. AutomaticFailoverEnabled must be enabled for Valkey or Redis OSS (cluster mode enabled) replication groups. Default: false
      description: Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails. AutomaticFailoverEnabled must be enabled for Valkey or Redis OSS (cluster mode enabled) replication groups. Default: false
    - name: MultiAZEnabled
      value: {{ MultiAZEnabled }}
      description: A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ.
      description: A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ.
    - name: NumCacheClusters
      value: {{ NumCacheClusters }}
      description: The number of clusters this replication group initially has. This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead. If AutomaticFailoverEnabled is true, the value of this parameter must be at least 2. If AutomaticFailoverEnabled is false you can omit this parameter (it will default to 1), or you can explicitly set it to a value between 2 and 6. The maximum permitted value for NumCacheClusters is 6 (1 primary plus 5 replicas).
      description: The number of clusters this replication group initially has. This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead. If AutomaticFailoverEnabled is true, the value of this parameter must be at least 2. If AutomaticFailoverEnabled is false you can omit this parameter (it will default to 1), or you can explicitly set it to a value between 2 and 6. The maximum permitted value for NumCacheClusters is 6 (1 primary plus 5 replicas).
    - name: PreferredCacheClusterAZs
      value: "{{ PreferredCacheClusterAZs }}"
      description: A list of EC2 Availability Zones in which the replication group's clusters are created. The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list. This parameter is not used if there is more than one node group (shard). You should use NodeGroupConfiguration instead. If you are creating your replication group in an Amazon VPC (recommended), you can only locate clusters in Availability Zones associated with the subnets in the selected subnet group. The number of Availability Zones listed must equal the value of NumCacheClusters. Default: system chosen Availability Zones.
      description: A list of EC2 Availability Zones in which the replication group's clusters are created. The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list. This parameter is not used if there is more than one node group (shard). You should use NodeGroupConfiguration instead. If you are creating your replication group in an Amazon VPC (recommended), you can only locate clusters in Availability Zones associated with the subnets in the selected subnet group. The number of Availability Zones listed must equal the value of NumCacheClusters. Default: system chosen Availability Zones.
    - name: NumNodeGroups
      value: {{ NumNodeGroups }}
      description: An optional parameter that specifies the number of node groups (shards) for this Valkey or Redis OSS (cluster mode enabled) replication group. For Valkey or Redis OSS (cluster mode disabled) either omit this parameter or set it to 1. Default: 1
      description: An optional parameter that specifies the number of node groups (shards) for this Valkey or Redis OSS (cluster mode enabled) replication group. For Valkey or Redis OSS (cluster mode disabled) either omit this parameter or set it to 1. Default: 1
    - name: ReplicasPerNodeGroup
      value: {{ ReplicasPerNodeGroup }}
      description: An optional parameter that specifies the number of replica nodes in each node group (shard). Valid values are 0 to 5.
      description: An optional parameter that specifies the number of replica nodes in each node group (shard). Valid values are 0 to 5.
    - name: NodeGroupConfiguration
      value: "{{ NodeGroupConfiguration }}"
      description: A list of node group (shard) configuration options. Each node group (shard) configuration has the following members: PrimaryAvailabilityZone, ReplicaAvailabilityZones, ReplicaCount, and Slots. If you're creating a Valkey or Redis OSS (cluster mode disabled) or a Valkey or Redis OSS (cluster mode enabled) replication group, you can use this parameter to individually configure each node group (shard), or you can omit this parameter. However, it is required when seeding a Valkey or Redis OSS (cluster mode enabled) cluster from a S3 rdb file. You must configure each node group (shard) using this parameter because you must specify the slots for each node group.
      description: A list of node group (shard) configuration options. Each node group (shard) configuration has the following members: PrimaryAvailabilityZone, ReplicaAvailabilityZones, ReplicaCount, and Slots. If you're creating a Valkey or Redis OSS (cluster mode disabled) or a Valkey or Redis OSS (cluster mode enabled) replication group, you can use this parameter to individually configure each node group (shard), or you can omit this parameter. However, it is required when seeding a Valkey or Redis OSS (cluster mode enabled) cluster from a S3 rdb file. You must configure each node group (shard) using this parameter because you must specify the slots for each node group.
    - name: CacheNodeType
      value: "{{ CacheNodeType }}"
      description: The compute and memory capacity of the nodes in the node group (shard). The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts. General purpose: Current generation: M7g node types: cache.m7g.large, cache.m7g.xlarge, cache.m7g.2xlarge, cache.m7g.4xlarge, cache.m7g.8xlarge, cache.m7g.12xlarge, cache.m7g.16xlarge For region availability, see Supported Node Types M6g node types (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.m6g.large, cache.m6g.xlarge, cache.m6g.2xlarge, cache.m6g.4xlarge, cache.m6g.8xlarge, cache.m6g.12xlarge, cache.m6g.16xlarge M5 node types: cache.m5.large, cache.m5.xlarge, cache.m5.2xlarge, cache.m5.4xlarge, cache.m5.12xlarge, cache.m5.24xlarge M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge T4g node types (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): cache.t4g.micro, cache.t4g.small, cache.t4g.medium T3 node types: cache.t3.micro, cache.t3.small, cache.t3.medium T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) T1 node types: cache.t1.micro M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge Compute optimized: Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) C1 node types: cache.c1.xlarge Memory optimized: Current generation: R7g node types: cache.r7g.large, cache.r7g.xlarge, cache.r7g.2xlarge, cache.r7g.4xlarge, cache.r7g.8xlarge, cache.r7g.12xlarge, cache.r7g.16xlarge For region availability, see Supported Node Types R6g node types (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.r6g.large, cache.r6g.xlarge, cache.r6g.2xlarge, cache.r6g.4xlarge, cache.r6g.8xlarge, cache.r6g.12xlarge, cache.r6g.16xlarge R5 node types: cache.r5.large, cache.r5.xlarge, cache.r5.2xlarge, cache.r5.4xlarge, cache.r5.12xlarge, cache.r5.24xlarge R4 node types: cache.r4.large, cache.r4.xlarge, cache.r4.2xlarge, cache.r4.4xlarge, cache.r4.8xlarge, cache.r4.16xlarge Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge Additional node type info All current generation instance types are created in Amazon VPC by default. Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances. Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances. The configuration variables appendonly and appendfsync are not supported on Valkey, or on Redis OSS version 2.8.22 and later.
      description: The compute and memory capacity of the nodes in the node group (shard). The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts. General purpose: Current generation: M7g node types: cache.m7g.large, cache.m7g.xlarge, cache.m7g.2xlarge, cache.m7g.4xlarge, cache.m7g.8xlarge, cache.m7g.12xlarge, cache.m7g.16xlarge For region availability, see Supported Node Types M6g node types (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.m6g.large, cache.m6g.xlarge, cache.m6g.2xlarge, cache.m6g.4xlarge, cache.m6g.8xlarge, cache.m6g.12xlarge, cache.m6g.16xlarge M5 node types: cache.m5.large, cache.m5.xlarge, cache.m5.2xlarge, cache.m5.4xlarge, cache.m5.12xlarge, cache.m5.24xlarge M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge T4g node types (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): cache.t4g.micro, cache.t4g.small, cache.t4g.medium T3 node types: cache.t3.micro, cache.t3.small, cache.t3.medium T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) T1 node types: cache.t1.micro M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge Compute optimized: Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) C1 node types: cache.c1.xlarge Memory optimized: Current generation: R7g node types: cache.r7g.large, cache.r7g.xlarge, cache.r7g.2xlarge, cache.r7g.4xlarge, cache.r7g.8xlarge, cache.r7g.12xlarge, cache.r7g.16xlarge For region availability, see Supported Node Types R6g node types (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.r6g.large, cache.r6g.xlarge, cache.r6g.2xlarge, cache.r6g.4xlarge, cache.r6g.8xlarge, cache.r6g.12xlarge, cache.r6g.16xlarge R5 node types: cache.r5.large, cache.r5.xlarge, cache.r5.2xlarge, cache.r5.4xlarge, cache.r5.12xlarge, cache.r5.24xlarge R4 node types: cache.r4.large, cache.r4.xlarge, cache.r4.2xlarge, cache.r4.4xlarge, cache.r4.8xlarge, cache.r4.16xlarge Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge Additional node type info All current generation instance types are created in Amazon VPC by default. Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances. Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances. The configuration variables appendonly and appendfsync are not supported on Valkey, or on Redis OSS version 2.8.22 and later.
    - name: Engine
      value: "{{ Engine }}"
      description: The name of the cache engine to be used for the clusters in this replication group. The value must be set to valkey or redis.
      description: The name of the cache engine to be used for the clusters in this replication group. The value must be set to valkey or redis.
    - name: EngineVersion
      value: "{{ EngineVersion }}"
      description: The version number of the cache engine to be used for the clusters in this replication group. To view the supported cache engine versions, use the DescribeCacheEngineVersions operation. Important: You can upgrade to a newer engine version (see Selecting a Cache Engine and Version) in the ElastiCache User Guide, but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version.
      description: The version number of the cache engine to be used for the clusters in this replication group. To view the supported cache engine versions, use the DescribeCacheEngineVersions operation. Important: You can upgrade to a newer engine version (see Selecting a Cache Engine and Version) in the ElastiCache User Guide, but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version.
    - name: CacheParameterGroupName
      value: "{{ CacheParameterGroupName }}"
      description: The name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used. If you are running Valkey or Redis OSS version 3.2.4 or later, only one node group (shard), and want to use a default parameter group, we recommend that you specify the parameter group by name. To create a Valkey or Redis OSS (cluster mode disabled) replication group, use CacheParameterGroupName=default.redis3.2. To create a Valkey or Redis OSS (cluster mode enabled) replication group, use CacheParameterGroupName=default.redis3.2.cluster.on.
      description: The name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used. If you are running Valkey or Redis OSS version 3.2.4 or later, only one node group (shard), and want to use a default parameter group, we recommend that you specify the parameter group by name. To create a Valkey or Redis OSS (cluster mode disabled) replication group, use CacheParameterGroupName=default.redis3.2. To create a Valkey or Redis OSS (cluster mode enabled) replication group, use CacheParameterGroupName=default.redis3.2.cluster.on.
    - name: CacheSubnetGroupName
      value: "{{ CacheSubnetGroupName }}"
      description: The name of the cache subnet group to be used for the replication group. If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see Subnets and Subnet Groups.
      description: The name of the cache subnet group to be used for the replication group. If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see Subnets and Subnet Groups.
    - name: CacheSecurityGroupNames
      value: "{{ CacheSecurityGroupNames }}"
      description: A list of cache security group names to associate with this replication group.
      description: A list of cache security group names to associate with this replication group.
    - name: SecurityGroupIds
      value: "{{ SecurityGroupIds }}"
      description: One or more Amazon VPC security groups associated with this replication group. Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud (Amazon VPC).
      description: One or more Amazon VPC security groups associated with this replication group. Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud (Amazon VPC).
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue. Tags on replication groups will be replicated to all nodes.
      description: A list of tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue. Tags on replication groups will be replicated to all nodes.
    - name: SnapshotArns
      value: "{{ SnapshotArns }}"
      description: A list of Amazon Resource Names (ARN) that uniquely identify the Valkey or Redis OSS RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new replication group. The Amazon S3 object name in the ARN cannot contain any commas. The new replication group will have the number of node groups (console: shards) specified by the parameter NumNodeGroups or the number of node groups configured by NodeGroupConfiguration regardless of the number of ARNs specified here. Example of an Amazon S3 ARN: arn:aws:s3:::my_bucket/snapshot1.rdb
      description: A list of Amazon Resource Names (ARN) that uniquely identify the Valkey or Redis OSS RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new replication group. The Amazon S3 object name in the ARN cannot contain any commas. The new replication group will have the number of node groups (console: shards) specified by the parameter NumNodeGroups or the number of node groups configured by NodeGroupConfiguration regardless of the number of ARNs specified here. Example of an Amazon S3 ARN: arn:aws:s3:::my_bucket/snapshot1.rdb
    - name: SnapshotName
      value: "{{ SnapshotName }}"
      description: The name of a snapshot from which to restore data into the new replication group. The snapshot status changes to restoring while the new replication group is being created.
      description: The name of a snapshot from which to restore data into the new replication group. The snapshot status changes to restoring while the new replication group is being created.
    - name: PreferredMaintenanceWindow
      value: "{{ PreferredMaintenanceWindow }}"
      description: Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are: sun mon tue wed thu fri sat Example: sun:23:00-mon:01:30
      description: Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are: sun mon tue wed thu fri sat Example: sun:23:00-mon:01:30
    - name: Port
      value: {{ Port }}
      description: The port number on which each member of the replication group accepts connections.
      description: The port number on which each member of the replication group accepts connections.
    - name: NotificationTopicArn
      value: "{{ NotificationTopicArn }}"
      description: The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. The Amazon SNS topic owner must be the same as the cluster owner.
      description: The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. The Amazon SNS topic owner must be the same as the cluster owner.
    - name: AutoMinorVersionUpgrade
      value: {{ AutoMinorVersionUpgrade }}
      description: If you are running Valkey 7.2 and above or Redis OSS engine version 6.0 and above, set this parameter to yes to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.
      description: If you are running Valkey 7.2 and above or Redis OSS engine version 6.0 and above, set this parameter to yes to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.
    - name: SnapshotRetentionLimit
      value: {{ SnapshotRetentionLimit }}
      description: The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted. Default: 0 (i.e., automatic backups are disabled for this cluster).
      description: The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted. Default: 0 (i.e., automatic backups are disabled for this cluster).
    - name: SnapshotWindow
      value: "{{ SnapshotWindow }}"
      description: The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). Example: 05:00-09:00 If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.
      description: The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). Example: 05:00-09:00 If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.
    - name: AuthToken
      value: "{{ AuthToken }}"
      description: Reserved parameter. The password used to access a password protected server. AuthToken can be specified only on replication groups where TransitEncryptionEnabled is true. For HIPAA compliance, you must specify TransitEncryptionEnabled as true, an AuthToken, and a CacheSubnetGroup. Password constraints: Must be only printable ASCII characters. Must be at least 16 characters and no more than 128 characters in length. The only permitted printable special characters are !, &, #, $, ^, <, >, and -. Other printable special characters cannot be used in the AUTH token. For more information, see AUTH password at http://redis.io/commands/AUTH.
      description: Reserved parameter. The password used to access a password protected server. AuthToken can be specified only on replication groups where TransitEncryptionEnabled is true. For HIPAA compliance, you must specify TransitEncryptionEnabled as true, an AuthToken, and a CacheSubnetGroup. Password constraints: Must be only printable ASCII characters. Must be at least 16 characters and no more than 128 characters in length. The only permitted printable special characters are !, &, #, $, ^, <, >, and -. Other printable special characters cannot be used in the AUTH token. For more information, see AUTH password at http://redis.io/commands/AUTH.
    - name: TransitEncryptionEnabled
      value: {{ TransitEncryptionEnabled }}
      description: A flag that enables in-transit encryption when set to true. This parameter is valid only if the Engine parameter is redis, the EngineVersion parameter is 3.2.6, 4.x or later, and the cluster is being created in an Amazon VPC. If you enable in-transit encryption, you must also specify a value for CacheSubnetGroup. Required: Only available when creating a replication group in an Amazon VPC using Redis OSS version 3.2.6, 4.x or later. Default: false For HIPAA compliance, you must specify TransitEncryptionEnabled as true, an AuthToken, and a CacheSubnetGroup.
      description: A flag that enables in-transit encryption when set to true. This parameter is valid only if the Engine parameter is redis, the EngineVersion parameter is 3.2.6, 4.x or later, and the cluster is being created in an Amazon VPC. If you enable in-transit encryption, you must also specify a value for CacheSubnetGroup. Required: Only available when creating a replication group in an Amazon VPC using Redis OSS version 3.2.6, 4.x or later. Default: false For HIPAA compliance, you must specify TransitEncryptionEnabled as true, an AuthToken, and a CacheSubnetGroup.
    - name: AtRestEncryptionEnabled
      value: {{ AtRestEncryptionEnabled }}
      description: A flag that enables encryption at rest when set to true. You cannot modify the value of AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group. Required: Only available when creating a replication group in an Amazon VPC using Valkey 7.2 and later, Redis OSS version 3.2.6, or Redis OSS 4.x and later. Default: true when using Valkey, false when using Redis OSS
      description: A flag that enables encryption at rest when set to true. You cannot modify the value of AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group. Required: Only available when creating a replication group in an Amazon VPC using Valkey 7.2 and later, Redis OSS version 3.2.6, or Redis OSS 4.x and later. Default: true when using Valkey, false when using Redis OSS
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: The ID of the KMS key used to encrypt the disk in the cluster.
      description: The ID of the KMS key used to encrypt the disk in the cluster.
    - name: UserGroupIds
      value: "{{ UserGroupIds }}"
      description: The user group to associate with the replication group.
      description: The user group to associate with the replication group.
    - name: LogDeliveryConfigurations
      value: "{{ LogDeliveryConfigurations }}"
      description: Specifies the destination, format and type of the logs.
      description: Specifies the destination, format and type of the logs.
    - name: DataTieringEnabled
      value: {{ DataTieringEnabled }}
      description: Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes. For more information, see Data tiering.
      description: Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes. For more information, see Data tiering.
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: Must be either ipv4 | ipv6 | dual_stack. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 and Memcached engine version 1.6.6 and above on all instances built on the Nitro system.
      description: Must be either ipv4 | ipv6 | dual_stack. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 and Memcached engine version 1.6.6 and above on all instances built on the Nitro system.
    - name: IpDiscovery
      value: "{{ IpDiscovery }}"
      description: The network type you choose when creating a replication group, either ipv4 | ipv6. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 or Memcached engine version 1.6.6 and above on all instances built on the Nitro system.
      description: The network type you choose when creating a replication group, either ipv4 | ipv6. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 or Memcached engine version 1.6.6 and above on all instances built on the Nitro system.
    - name: TransitEncryptionMode
      value: "{{ TransitEncryptionMode }}"
      description: A setting that allows you to migrate your clients to use in-transit encryption, with no downtime. When setting TransitEncryptionEnabled to true, you can set your TransitEncryptionMode to preferred in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Valkey or Redis OSS clients to use encrypted connections you can modify the value to required to allow encrypted connections only. Setting TransitEncryptionMode to required is a two-step process that requires you to first set the TransitEncryptionMode to preferred, after that you can set TransitEncryptionMode to required. This process will not trigger the replacement of the replication group.
      description: A setting that allows you to migrate your clients to use in-transit encryption, with no downtime. When setting TransitEncryptionEnabled to true, you can set your TransitEncryptionMode to preferred in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Valkey or Redis OSS clients to use encrypted connections you can modify the value to required to allow encrypted connections only. Setting TransitEncryptionMode to required is a two-step process that requires you to first set the TransitEncryptionMode to preferred, after that you can set TransitEncryptionMode to required. This process will not trigger the replacement of the replication group.
    - name: ClusterMode
      value: "{{ ClusterMode }}"
      description: Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Valkey or Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Valkey or Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled.
      description: Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Valkey or Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Valkey or Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled.
    - name: ServerlessCacheSnapshotName
      value: "{{ ServerlessCacheSnapshotName }}"
      description: The name of the snapshot used to create a replication group. Available for Valkey, Redis OSS only.
      description: The name of the snapshot used to create a replication group. Available for Valkey, Redis OSS only.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_replication_group_shard_configuration"
    values={[
        { label: 'modify_replication_group_shard_configuration', value: 'modify_replication_group_shard_configuration' },
        { label: 'modify_replication_group', value: 'modify_replication_group' }
    ]}
>
<TabItem value="modify_replication_group_shard_configuration">

Modifies a replication group's shards (node groups) by allowing you to add shards, remove shards, or rebalance the keyspaces among existing shards.

```sql
UPDATE aws.elasticache.replication_groups
SET 
-- No updatable properties
WHERE 
ReplicationGroupId = '{{ ReplicationGroupId }}' --required
AND NodeGroupCount = '{{ NodeGroupCount }}' --required
AND ApplyImmediately = '{{ ApplyImmediately }}' --required
AND region = '{{ region }}' --required
AND ReshardingConfiguration = '{{ ReshardingConfiguration}}'
AND NodeGroupsToRemove = '{{ NodeGroupsToRemove}}'
AND NodeGroupsToRetain = '{{ NodeGroupsToRetain}}'
RETURNING
arn,
at_rest_encryption_enabled,
auth_token_enabled,
auth_token_last_modified_date,
auto_minor_version_upgrade,
automatic_failover,
cache_node_type,
cluster_enabled,
cluster_mode,
configuration_endpoint,
data_tiering,
description,
engine,
global_replication_group_info,
ip_discovery,
kms_key_id,
log_delivery_configurations,
member_clusters,
member_clusters_outpost_arns,
multi_az,
network_type,
node_groups,
pending_modified_values,
replication_group_create_time,
replication_group_id,
snapshot_retention_limit,
snapshot_window,
snapshotting_cluster_id,
status,
transit_encryption_enabled,
transit_encryption_mode,
user_group_ids;
```
</TabItem>
<TabItem value="modify_replication_group">

Modifies the settings for a replication group. This is limited to Valkey and Redis OSS 7 and above. Scaling for Valkey or Redis OSS (cluster mode enabled) in the ElastiCache User Guide ModifyReplicationGroupShardConfiguration in the ElastiCache API Reference This operation is valid for Valkey or Redis OSS only.

```sql
UPDATE aws.elasticache.replication_groups
SET 
-- No updatable properties
WHERE 
ReplicationGroupId = '{{ ReplicationGroupId }}' --required
AND region = '{{ region }}' --required
AND ReplicationGroupDescription = '{{ ReplicationGroupDescription}}'
AND PrimaryClusterId = '{{ PrimaryClusterId}}'
AND SnapshottingClusterId = '{{ SnapshottingClusterId}}'
AND AutomaticFailoverEnabled = {{ AutomaticFailoverEnabled}}
AND MultiAZEnabled = {{ MultiAZEnabled}}
AND NodeGroupId = '{{ NodeGroupId}}'
AND CacheSecurityGroupNames = '{{ CacheSecurityGroupNames}}'
AND SecurityGroupIds = '{{ SecurityGroupIds}}'
AND PreferredMaintenanceWindow = '{{ PreferredMaintenanceWindow}}'
AND NotificationTopicArn = '{{ NotificationTopicArn}}'
AND CacheParameterGroupName = '{{ CacheParameterGroupName}}'
AND NotificationTopicStatus = '{{ NotificationTopicStatus}}'
AND ApplyImmediately = {{ ApplyImmediately}}
AND Engine = '{{ Engine}}'
AND EngineVersion = '{{ EngineVersion}}'
AND AutoMinorVersionUpgrade = {{ AutoMinorVersionUpgrade}}
AND SnapshotRetentionLimit = '{{ SnapshotRetentionLimit}}'
AND SnapshotWindow = '{{ SnapshotWindow}}'
AND CacheNodeType = '{{ CacheNodeType}}'
AND AuthToken = '{{ AuthToken}}'
AND AuthTokenUpdateStrategy = '{{ AuthTokenUpdateStrategy}}'
AND UserGroupIdsToAdd = '{{ UserGroupIdsToAdd}}'
AND UserGroupIdsToRemove = '{{ UserGroupIdsToRemove}}'
AND RemoveUserGroups = {{ RemoveUserGroups}}
AND LogDeliveryConfigurations = '{{ LogDeliveryConfigurations}}'
AND IpDiscovery = '{{ IpDiscovery}}'
AND TransitEncryptionEnabled = {{ TransitEncryptionEnabled}}
AND TransitEncryptionMode = '{{ TransitEncryptionMode}}'
AND ClusterMode = '{{ ClusterMode}}'
RETURNING
arn,
at_rest_encryption_enabled,
auth_token_enabled,
auth_token_last_modified_date,
auto_minor_version_upgrade,
automatic_failover,
cache_node_type,
cluster_enabled,
cluster_mode,
configuration_endpoint,
data_tiering,
description,
engine,
global_replication_group_info,
ip_discovery,
kms_key_id,
log_delivery_configurations,
member_clusters,
member_clusters_outpost_arns,
multi_az,
network_type,
node_groups,
pending_modified_values,
replication_group_create_time,
replication_group_id,
snapshot_retention_limit,
snapshot_window,
snapshotting_cluster_id,
status,
transit_encryption_enabled,
transit_encryption_mode,
user_group_ids;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_replication_group"
    values={[
        { label: 'delete_replication_group', value: 'delete_replication_group' }
    ]}
>
<TabItem value="delete_replication_group">

Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting RetainPrimaryCluster=true. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation. CreateSnapshot permission is required to create a final snapshot. Without this permission, the API call will fail with an Access Denied exception. This operation is valid for Redis OSS only.

```sql
DELETE FROM aws.elasticache.replication_groups
WHERE ReplicationGroupId = '{{ ReplicationGroupId }}' --required
AND region = '{{ region }}' --required
AND RetainPrimaryCluster = '{{ RetainPrimaryCluster }}'
AND FinalSnapshotIdentifier = '{{ FinalSnapshotIdentifier }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="complete_migration"
    values={[
        { label: 'complete_migration', value: 'complete_migration' },
        { label: 'decrease_replica_count', value: 'decrease_replica_count' },
        { label: 'increase_replica_count', value: 'increase_replica_count' },
        { label: 'start_migration', value: 'start_migration' },
        { label: 'test_failover', value: 'test_failover' },
        { label: 'test_migration', value: 'test_migration' }
    ]}
>
<TabItem value="complete_migration">

Complete the migration of data.

```sql
EXEC aws.elasticache.replication_groups.complete_migration 
@ReplicationGroupId='{{ ReplicationGroupId }}' --required, 
@region='{{ region }}' --required, 
@Force={{ Force }}
;
```
</TabItem>
<TabItem value="decrease_replica_count">

Dynamically decreases the number of replicas in a Valkey or Redis OSS (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Valkey or Redis OSS (cluster mode enabled) replication group. This operation is performed with no cluster down time.

```sql
EXEC aws.elasticache.replication_groups.decrease_replica_count 
@ReplicationGroupId='{{ ReplicationGroupId }}' --required, 
@ApplyImmediately='{{ ApplyImmediately }}' --required, 
@region='{{ region }}' --required, 
@NewReplicaCount='{{ NewReplicaCount }}', 
@ReplicaConfiguration='{{ ReplicaConfiguration }}', 
@ReplicasToRemove='{{ ReplicasToRemove }}'
;
```
</TabItem>
<TabItem value="increase_replica_count">

Dynamically increases the number of replicas in a Valkey or Redis OSS (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Valkey or Redis OSS (cluster mode enabled) replication group. This operation is performed with no cluster down time.

```sql
EXEC aws.elasticache.replication_groups.increase_replica_count 
@ReplicationGroupId='{{ ReplicationGroupId }}' --required, 
@ApplyImmediately='{{ ApplyImmediately }}' --required, 
@region='{{ region }}' --required, 
@NewReplicaCount='{{ NewReplicaCount }}', 
@ReplicaConfiguration='{{ ReplicaConfiguration }}'
;
```
</TabItem>
<TabItem value="start_migration">

Start the migration of data.

```sql
EXEC aws.elasticache.replication_groups.start_migration 
@ReplicationGroupId='{{ ReplicationGroupId }}' --required, 
@CustomerNodeEndpointList='{{ CustomerNodeEndpointList }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="test_failover">

Represents the input of a TestFailover operation which tests automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console). This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. Note the following A customer can use this operation to test automatic failover on up to 15 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period. If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently. If calling this operation multiple times on different shards in the same Valkey or Redis OSS (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made. To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance: Replication group message: Test Failover API called for node group <code>&lt;node-group-id&gt;</code> Cache cluster message: Failover from primary node <code>&lt;primary-node-id&gt;</code> to replica node <code>&lt;node-id&gt;</code> completed Replication group message: Failover from primary node <code>&lt;primary-node-id&gt;</code> to replica node <code>&lt;node-id&gt;</code> completed Cache cluster message: Recovering cache nodes <code>&lt;node-id&gt;</code> Cache cluster message: Finished recovery for cache nodes <code>&lt;node-id&gt;</code> For more information see: Viewing ElastiCache Events in the ElastiCache User Guide DescribeEvents in the ElastiCache API Reference Also see, Testing Multi-AZ in the ElastiCache User Guide.

```sql
EXEC aws.elasticache.replication_groups.test_failover 
@ReplicationGroupId='{{ ReplicationGroupId }}' --required, 
@NodeGroupId='{{ NodeGroupId }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="test_migration">

Async API to test connection between source and target replication group.

```sql
EXEC aws.elasticache.replication_groups.test_migration 
@ReplicationGroupId='{{ ReplicationGroupId }}' --required, 
@CustomerNodeEndpointList='{{ CustomerNodeEndpointList }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
