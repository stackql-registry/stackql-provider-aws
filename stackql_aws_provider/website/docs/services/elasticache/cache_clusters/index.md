--- 
title: cache_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - cache_clusters
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

Creates, updates, deletes, gets or lists a <code>cache_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cache_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.cache_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cache_clusters"
    values={[
        { label: 'describe_cache_clusters', value: 'describe_cache_clusters' }
    ]}
>
<TabItem value="describe_cache_clusters">

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
    <td>The ARN (Amazon Resource Name) of the cache cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="at_rest_encryption_enabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag that enables encryption at-rest when set to true. You cannot modify the value of AtRestEncryptionEnabled after the cluster is created. To enable at-rest encryption on a cluster you must set AtRestEncryptionEnabled to true when you create a cluster. Required: Only available when creating a replication group in an Amazon VPC using Redis OSS version 3.2.6, 4.x or later. Default: false</td>
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
    <td>If you are running Valkey or Redis OSS engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_cluster_create_time" /></td>
    <td><code>string</code></td>
    <td>The date and time when the cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The user-supplied identifier of the cluster. This identifier is a unique key that identifies a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_cluster_status" /></td>
    <td><code>string</code></td>
    <td>The current state of this cluster, one of the following values: available, creating, deleted, deleting, incompatible-network, modifying, rebooting cluster nodes, restore-failed, or snapshotting.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_node_type" /></td>
    <td><code>string</code></td>
    <td>The name of the compute and memory capacity node type for the cluster. The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts. General purpose: Current generation: M7g node types: cache.m7g.large, cache.m7g.xlarge, cache.m7g.2xlarge, cache.m7g.4xlarge, cache.m7g.8xlarge, cache.m7g.12xlarge, cache.m7g.16xlarge For region availability, see Supported Node Types M6g node types (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.m6g.large, cache.m6g.xlarge, cache.m6g.2xlarge, cache.m6g.4xlarge, cache.m6g.8xlarge, cache.m6g.12xlarge, cache.m6g.16xlarge M5 node types: cache.m5.large, cache.m5.xlarge, cache.m5.2xlarge, cache.m5.4xlarge, cache.m5.12xlarge, cache.m5.24xlarge M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge T4g node types (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): cache.t4g.micro, cache.t4g.small, cache.t4g.medium T3 node types: cache.t3.micro, cache.t3.small, cache.t3.medium T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) T1 node types: cache.t1.micro M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge Compute optimized: Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) C1 node types: cache.c1.xlarge Memory optimized: Current generation: R7g node types: cache.r7g.large, cache.r7g.xlarge, cache.r7g.2xlarge, cache.r7g.4xlarge, cache.r7g.8xlarge, cache.r7g.12xlarge, cache.r7g.16xlarge For region availability, see Supported Node Types R6g node types (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.r6g.large, cache.r6g.xlarge, cache.r6g.2xlarge, cache.r6g.4xlarge, cache.r6g.8xlarge, cache.r6g.12xlarge, cache.r6g.16xlarge R5 node types: cache.r5.large, cache.r5.xlarge, cache.r5.2xlarge, cache.r5.4xlarge, cache.r5.12xlarge, cache.r5.24xlarge R4 node types: cache.r4.large, cache.r4.xlarge, cache.r4.2xlarge, cache.r4.4xlarge, cache.r4.8xlarge, cache.r4.16xlarge Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge Additional node type info All current generation instance types are created in Amazon VPC by default. Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances. Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances. The configuration variables appendonly and appendfsync are not supported on Valkey, or on Redis OSS version 2.8.22 and later.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_nodes" /></td>
    <td><code>string</code></td>
    <td>A list of cache nodes that are members of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_parameter_group" /></td>
    <td><code>string</code></td>
    <td>Status of the cache parameter group.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_security_groups" /></td>
    <td><code>string</code></td>
    <td>A list of cache security group elements, composed of name and status sub-elements.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_subnet_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the cache subnet group associated with the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="client_download_landing_page" /></td>
    <td><code>string</code></td>
    <td>The URL of the web page where you can download the latest ElastiCache client library.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_endpoint" /></td>
    <td><code>string</code></td>
    <td>Represents a Memcached cluster endpoint which can be used by an application to connect to any node in the cluster. The configuration endpoint will always have .cfg in it. Example: mem-3.9dvc4r.cfg.usw2.cache.amazonaws.com:11211</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The name of the cache engine (memcached or redis) to be used for this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>The version of the cache engine that is used in this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_discovery" /></td>
    <td><code>string</code></td>
    <td>The network type associated with the cluster, either ipv4 | ipv6. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 or Memcached engine version 1.6.6 and above on all instances built on the Nitro system.</td>
</tr>
<tr>
    <td><CopyableCode code="log_delivery_configurations" /></td>
    <td><code>string</code></td>
    <td>Returns the destination, format and type of the logs.</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>Must be either ipv4 | ipv6 | dual_stack. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 7.1 or Memcached engine version 1.6.6 and above on all instances built on the Nitro system.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_configuration" /></td>
    <td><code>string</code></td>
    <td>Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS).</td>
</tr>
<tr>
    <td><CopyableCode code="num_cache_nodes" /></td>
    <td><code>integer</code></td>
    <td>The number of cache nodes in the cluster. For clusters running Valkey or Redis OSS, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_modified_values" /></td>
    <td><code>string</code></td>
    <td>A group of settings that are applied to the cluster in the future, or that are currently being applied.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_availability_zone" /></td>
    <td><code>string</code></td>
    <td>The name of the Availability Zone in which the cluster is located or "Multiple" if the cache nodes are located in different Availability Zones.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_maintenance_window" /></td>
    <td><code>string</code></td>
    <td>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are: sun mon tue wed thu fri sat Example: sun:23:00-mon:01:30</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_outpost_arn" /></td>
    <td><code>string</code></td>
    <td>The outpost ARN in which the cache cluster is created.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_group_id" /></td>
    <td><code>string</code></td>
    <td>The replication group to which this cluster belongs. If this field is empty, the cluster is not associated with any replication group.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_group_log_delivery_enabled" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether log delivery is enabled for the replication group.</td>
</tr>
<tr>
    <td><CopyableCode code="security_groups" /></td>
    <td><code>string</code></td>
    <td>A list of VPC Security Groups associated with the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_retention_limit" /></td>
    <td><code>integer</code></td>
    <td>The number of days for which ElastiCache retains automatic cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted. If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_window" /></td>
    <td><code>string</code></td>
    <td>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your cluster. Example: 05:00-09:00</td>
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
    <td><a href="#describe_cache_clusters"><CopyableCode code="describe_cache_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CacheClusterId"><code>CacheClusterId</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-ShowCacheNodeInfo"><code>ShowCacheNodeInfo</code></a>, <a href="#parameter-ShowCacheClustersNotInReplicationGroups"><code>ShowCacheClustersNotInReplicationGroups</code></a></td>
    <td>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied. By default, abbreviated information about the clusters is returned. You can use the optional ShowCacheNodeInfo flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint. If the cluster is in the creating state, only cluster-level information is displayed until all of the nodes are successfully provisioned. If the cluster is in the deleting state, only cluster-level information is displayed. If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is available, the cluster is ready for use. If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</td>
</tr>
<tr>
    <td><a href="#create_cache_cluster"><CopyableCode code="create_cache_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-CacheClusterId"><code>CacheClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReplicationGroupId"><code>ReplicationGroupId</code></a>, <a href="#parameter-AZMode"><code>AZMode</code></a>, <a href="#parameter-PreferredAvailabilityZone"><code>PreferredAvailabilityZone</code></a>, <a href="#parameter-PreferredAvailabilityZones"><code>PreferredAvailabilityZones</code></a>, <a href="#parameter-NumCacheNodes"><code>NumCacheNodes</code></a>, <a href="#parameter-CacheNodeType"><code>CacheNodeType</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-CacheParameterGroupName"><code>CacheParameterGroupName</code></a>, <a href="#parameter-CacheSubnetGroupName"><code>CacheSubnetGroupName</code></a>, <a href="#parameter-CacheSecurityGroupNames"><code>CacheSecurityGroupNames</code></a>, <a href="#parameter-SecurityGroupIds"><code>SecurityGroupIds</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-SnapshotArns"><code>SnapshotArns</code></a>, <a href="#parameter-SnapshotName"><code>SnapshotName</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-NotificationTopicArn"><code>NotificationTopicArn</code></a>, <a href="#parameter-AutoMinorVersionUpgrade"><code>AutoMinorVersionUpgrade</code></a>, <a href="#parameter-SnapshotRetentionLimit"><code>SnapshotRetentionLimit</code></a>, <a href="#parameter-SnapshotWindow"><code>SnapshotWindow</code></a>, <a href="#parameter-AuthToken"><code>AuthToken</code></a>, <a href="#parameter-OutpostMode"><code>OutpostMode</code></a>, <a href="#parameter-PreferredOutpostArn"><code>PreferredOutpostArn</code></a>, <a href="#parameter-PreferredOutpostArns"><code>PreferredOutpostArns</code></a>, <a href="#parameter-LogDeliveryConfigurations"><code>LogDeliveryConfigurations</code></a>, <a href="#parameter-TransitEncryptionEnabled"><code>TransitEncryptionEnabled</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a>, <a href="#parameter-IpDiscovery"><code>IpDiscovery</code></a></td>
    <td>Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached, Valkey or Redis OSS. This operation is not supported for Valkey or Redis OSS (cluster mode enabled) clusters.</td>
</tr>
<tr>
    <td><a href="#modify_cache_cluster"><CopyableCode code="modify_cache_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-CacheClusterId"><code>CacheClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NumCacheNodes"><code>NumCacheNodes</code></a>, <a href="#parameter-CacheNodeIdsToRemove"><code>CacheNodeIdsToRemove</code></a>, <a href="#parameter-AZMode"><code>AZMode</code></a>, <a href="#parameter-NewAvailabilityZones"><code>NewAvailabilityZones</code></a>, <a href="#parameter-CacheSecurityGroupNames"><code>CacheSecurityGroupNames</code></a>, <a href="#parameter-SecurityGroupIds"><code>SecurityGroupIds</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-NotificationTopicArn"><code>NotificationTopicArn</code></a>, <a href="#parameter-CacheParameterGroupName"><code>CacheParameterGroupName</code></a>, <a href="#parameter-NotificationTopicStatus"><code>NotificationTopicStatus</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-AutoMinorVersionUpgrade"><code>AutoMinorVersionUpgrade</code></a>, <a href="#parameter-SnapshotRetentionLimit"><code>SnapshotRetentionLimit</code></a>, <a href="#parameter-SnapshotWindow"><code>SnapshotWindow</code></a>, <a href="#parameter-CacheNodeType"><code>CacheNodeType</code></a>, <a href="#parameter-AuthToken"><code>AuthToken</code></a>, <a href="#parameter-AuthTokenUpdateStrategy"><code>AuthTokenUpdateStrategy</code></a>, <a href="#parameter-LogDeliveryConfigurations"><code>LogDeliveryConfigurations</code></a>, <a href="#parameter-IpDiscovery"><code>IpDiscovery</code></a>, <a href="#parameter-ScaleConfig"><code>ScaleConfig</code></a></td>
    <td>Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.</td>
</tr>
<tr>
    <td><a href="#delete_cache_cluster"><CopyableCode code="delete_cache_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-CacheClusterId"><code>CacheClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-FinalSnapshotIdentifier"><code>FinalSnapshotIdentifier</code></a></td>
    <td>Deletes a previously provisioned cluster. DeleteCacheCluster deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation. This operation is not valid for: Valkey or Redis OSS (cluster mode enabled) clusters Valkey or Redis OSS (cluster mode disabled) clusters A cluster that is the last read replica of a replication group A cluster that is the primary node of a replication group A node group (shard) that has Multi-AZ mode enabled A cluster from a Valkey or Redis OSS (cluster mode enabled) replication group A cluster that is not in the available state</td>
</tr>
<tr>
    <td><a href="#reboot_cache_cluster"><CopyableCode code="reboot_cache_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-CacheClusterId"><code>CacheClusterId</code></a>, <a href="#parameter-CacheNodeIdsToReboot"><code>CacheNodeIdsToReboot</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING. The reboot causes the contents of the cache (for each cache node being rebooted) to be lost. When the reboot is complete, a cluster event is created. Rebooting a cluster is currently supported on Memcached, Valkey and Redis OSS (cluster mode disabled) clusters. Rebooting is not supported on Valkey or Redis OSS (cluster mode enabled) clusters. If you make changes to parameters that require a Valkey or Redis OSS (cluster mode enabled) cluster reboot for the changes to be applied, see Rebooting a Cluster for an alternate process.</td>
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
<tr id="parameter-CacheClusterId">
    <td><CopyableCode code="CacheClusterId" /></td>
    <td><code>string</code></td>
    <td>The cluster identifier. This parameter is stored as a lowercase string.</td>
</tr>
<tr id="parameter-CacheNodeIdsToReboot">
    <td><CopyableCode code="CacheNodeIdsToReboot" /></td>
    <td><code>array</code></td>
    <td>A list of cache node IDs to reboot. A node ID is a numeric identifier (0001, 0002, etc.). To reboot an entire cluster, specify all of the cache node IDs.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AZMode">
    <td><CopyableCode code="AZMode" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the new nodes in this Memcached cluster are all created in a single Availability Zone or created across multiple Availability Zones. Valid values: single-az | cross-az. This option is only supported for Memcached clusters. You cannot specify single-az if the Memcached cluster already has cache nodes in different Availability Zones. If cross-az is specified, existing Memcached nodes remain in their current Availability Zone. Only newly created nodes are located in different Availability Zones.</td>
</tr>
<tr id="parameter-ApplyImmediately">
    <td><CopyableCode code="ApplyImmediately" /></td>
    <td><code>boolean</code></td>
    <td>If true, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the PreferredMaintenanceWindow setting for the cluster. If false, changes to the cluster are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first. If you perform a ModifyCacheCluster before a pending modification is applied, the pending modification is replaced by the newer modification. Valid values: true | false Default: false</td>
</tr>
<tr id="parameter-AuthToken">
    <td><CopyableCode code="AuthToken" /></td>
    <td><code>string</code></td>
    <td>Reserved parameter. The password used to access a password protected server. This parameter must be specified with the auth-token-update parameter. Password constraints: Must be only printable ASCII characters Must be at least 16 characters and no more than 128 characters in length Cannot contain any of the following characters: '/', '"', or '@', '%' For more information, see AUTH password at AUTH.</td>
</tr>
<tr id="parameter-AuthTokenUpdateStrategy">
    <td><CopyableCode code="AuthTokenUpdateStrategy" /></td>
    <td><code>string</code></td>
    <td>Specifies the strategy to use to update the AUTH token. This parameter must be specified with the auth-token parameter. Possible values: ROTATE - default, if no update strategy is provided SET - allowed only after ROTATE DELETE - allowed only when transitioning to RBAC For more information, see Authenticating Users with AUTH</td>
</tr>
<tr id="parameter-AutoMinorVersionUpgrade">
    <td><CopyableCode code="AutoMinorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>If you are running Valkey 7.2 or Redis OSS engine version 6.0 or later, set this parameter to yes to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.</td>
</tr>
<tr id="parameter-CacheClusterId">
    <td><CopyableCode code="CacheClusterId" /></td>
    <td><code>string</code></td>
    <td>The user-supplied cluster identifier. If this parameter is specified, only information about that specific cluster is returned. This parameter isn't case sensitive.</td>
</tr>
<tr id="parameter-CacheNodeIdsToRemove">
    <td><CopyableCode code="CacheNodeIdsToRemove" /></td>
    <td><code>array</code></td>
    <td>A list of cache node IDs to be removed. A node ID is a numeric identifier (0001, 0002, etc.). This parameter is only valid when NumCacheNodes is less than the existing number of cache nodes. The number of cache node IDs supplied in this parameter must match the difference between the existing number of cache nodes in the cluster or pending cache nodes, whichever is greater, and the value of NumCacheNodes in the request. For example: If you have 3 active cache nodes, 7 pending cache nodes, and the number of cache nodes in this ModifyCacheCluster call is 5, you must list 2 (7 - 5) cache node IDs to remove.</td>
</tr>
<tr id="parameter-CacheNodeType">
    <td><CopyableCode code="CacheNodeType" /></td>
    <td><code>string</code></td>
    <td>A valid cache node type that you want to scale this cluster up to.</td>
</tr>
<tr id="parameter-CacheParameterGroupName">
    <td><CopyableCode code="CacheParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the cache parameter group to apply to this cluster. This change is asynchronously applied as soon as possible for parameters when the ApplyImmediately parameter is specified as true for this request.</td>
</tr>
<tr id="parameter-CacheSecurityGroupNames">
    <td><CopyableCode code="CacheSecurityGroupNames" /></td>
    <td><code>array</code></td>
    <td>A list of cache security group names to authorize on this cluster. This change is asynchronously applied as soon as possible. You can use this parameter only with clusters that are created outside of an Amazon Virtual Private Cloud (Amazon VPC). Constraints: Must contain no more than 255 alphanumeric characters. Must not be "Default".</td>
</tr>
<tr id="parameter-CacheSubnetGroupName">
    <td><CopyableCode code="CacheSubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the subnet group to be used for the cluster. Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC). If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see Subnets and Subnet Groups.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The engine type used by the cache cluster. The options are valkey, memcached or redis.</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The upgraded version of the cache engine to be run on the cache nodes. Important: You can upgrade to a newer engine version (see Selecting a Cache Engine and Version), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster and create it anew with the earlier engine version.</td>
</tr>
<tr id="parameter-FinalSnapshotIdentifier">
    <td><CopyableCode code="FinalSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The user-supplied name of a final cluster snapshot. This is the unique name that identifies the snapshot. ElastiCache creates the snapshot, and then deletes the cluster immediately afterward.</td>
</tr>
<tr id="parameter-IpDiscovery">
    <td><CopyableCode code="IpDiscovery" /></td>
    <td><code>string</code></td>
    <td>The network type you choose when modifying a cluster, either ipv4 | ipv6. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 or Memcached engine version 1.6.6 and above on all instances built on the Nitro system.</td>
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
<tr id="parameter-NetworkType">
    <td><CopyableCode code="NetworkType" /></td>
    <td><code>string</code></td>
    <td>Must be either ipv4 | ipv6 | dual_stack. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 and Memcached engine version 1.6.6 and above on all instances built on the Nitro system.</td>
</tr>
<tr id="parameter-NewAvailabilityZones">
    <td><CopyableCode code="NewAvailabilityZones" /></td>
    <td><code>array</code></td>
    <td>This option is only supported on Memcached clusters. The list of Availability Zones where the new Memcached cache nodes are created. This parameter is only valid when NumCacheNodes in the request is greater than the sum of the number of active cache nodes and the number of cache nodes pending creation (which may be zero). The number of Availability Zones supplied in this list must match the cache nodes being added in this request. Scenarios: Scenario 1: You have 3 active nodes and wish to add 2 nodes. Specify NumCacheNodes=5 (3 + 2) and optionally specify two Availability Zones for the two new nodes. Scenario 2: You have 3 active nodes and 2 nodes pending creation (from the scenario 1 call) and want to add 1 more node. Specify NumCacheNodes=6 ((3 + 2) + 1) and optionally specify an Availability Zone for the new node. Scenario 3: You want to cancel all pending operations. Specify NumCacheNodes=3 to cancel all pending operations. The Availability Zone placement of nodes pending creation cannot be modified. If you wish to cancel any nodes pending creation, add 0 nodes by setting NumCacheNodes to the number of current nodes. If cross-az is specified, existing Memcached nodes remain in their current Availability Zone. Only newly created nodes can be located in different Availability Zones. For guidance on how to move existing Memcached nodes to different Availability Zones, see the Availability Zone Considerations section of Cache Node Considerations for Memcached. Impact of new add/remove requests upon pending requests Scenario-1 Pending Action: Delete New Request: Delete Result: The new delete, pending or immediate, replaces the pending delete. Scenario-2 Pending Action: Delete New Request: Create Result: The new create, pending or immediate, replaces the pending delete. Scenario-3 Pending Action: Create New Request: Delete Result: The new delete, pending or immediate, replaces the pending create. Scenario-4 Pending Action: Create New Request: Create Result: The new create is added to the pending create. Important: If the new create request is Apply Immediately - Yes, all creates are performed immediately. If the new create request is Apply Immediately - No, all creates are pending.</td>
</tr>
<tr id="parameter-NotificationTopicArn">
    <td><CopyableCode code="NotificationTopicArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent. The Amazon SNS topic owner must be same as the cluster owner.</td>
</tr>
<tr id="parameter-NotificationTopicStatus">
    <td><CopyableCode code="NotificationTopicStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the Amazon SNS notification topic. Notifications are sent only if the status is active. Valid values: active | inactive</td>
</tr>
<tr id="parameter-NumCacheNodes">
    <td><CopyableCode code="NumCacheNodes" /></td>
    <td><code>integer</code></td>
    <td>The number of cache nodes that the cluster should have. If the value for NumCacheNodes is greater than the sum of the number of current cache nodes and the number of cache nodes pending creation (which may be zero), more nodes are added. If the value is less than the number of existing cache nodes, nodes are removed. If the value is equal to the number of current cache nodes, any pending add or remove requests are canceled. If you are removing cache nodes, you must use the CacheNodeIdsToRemove parameter to provide the IDs of the specific cache nodes to remove. For clusters running Valkey or Redis OSS, this value must be 1. For clusters running Memcached, this value must be between 1 and 40. Adding or removing Memcached cache nodes can be applied immediately or as a pending operation (see ApplyImmediately). A pending operation to modify the number of cache nodes in a cluster during its maintenance window, whether by adding or removing nodes in accordance with the scale out architecture, is not queued. The customer's latest request to add or remove nodes to the cluster overrides any previous pending operations to modify the number of cache nodes in the cluster. For example, a request to remove 2 nodes would override a previous pending operation to remove 3 nodes. Similarly, a request to add 2 nodes would override a previous pending operation to remove 3 nodes and vice versa. As Memcached cache nodes may now be provisioned in different Availability Zones with flexible cache node placement, a request to add nodes does not automatically override a previous pending operation to add nodes. The customer can modify the previous pending operation to add more nodes or explicitly cancel the pending request and retry the new request. To cancel pending operations to modify the number of cache nodes in a cluster, use the ModifyCacheCluster request and set NumCacheNodes equal to the number of cache nodes currently in the cluster.</td>
</tr>
<tr id="parameter-OutpostMode">
    <td><CopyableCode code="OutpostMode" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the nodes in the cluster are created in a single outpost or across multiple outposts.</td>
</tr>
<tr id="parameter-Port">
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port number on which each of the cache nodes accepts connections.</td>
</tr>
<tr id="parameter-PreferredAvailabilityZone">
    <td><CopyableCode code="PreferredAvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The EC2 Availability Zone in which the cluster is created. All nodes belonging to this cluster are placed in the preferred Availability Zone. If you want to create your nodes across multiple Availability Zones, use PreferredAvailabilityZones. Default: System chosen Availability Zone.</td>
</tr>
<tr id="parameter-PreferredAvailabilityZones">
    <td><CopyableCode code="PreferredAvailabilityZones" /></td>
    <td><code>array</code></td>
    <td>A list of the Availability Zones in which cache nodes are created. The order of the zones in the list is not important. This option is only supported on Memcached. If you are creating your cluster in an Amazon VPC (recommended) you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group. The number of Availability Zones listed must equal the value of NumCacheNodes. If you want all the nodes in the same Availability Zone, use PreferredAvailabilityZone instead, or repeat the Availability Zone multiple times in the list. Default: System chosen Availability Zones.</td>
</tr>
<tr id="parameter-PreferredMaintenanceWindow">
    <td><CopyableCode code="PreferredMaintenanceWindow" /></td>
    <td><code>string</code></td>
    <td>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are: sun mon tue wed thu fri sat Example: sun:23:00-mon:01:30</td>
</tr>
<tr id="parameter-PreferredOutpostArn">
    <td><CopyableCode code="PreferredOutpostArn" /></td>
    <td><code>string</code></td>
    <td>The outpost ARN in which the cache cluster is created.</td>
</tr>
<tr id="parameter-PreferredOutpostArns">
    <td><CopyableCode code="PreferredOutpostArns" /></td>
    <td><code>array</code></td>
    <td>The outpost ARNs in which the cache cluster is created.</td>
</tr>
<tr id="parameter-ReplicationGroupId">
    <td><CopyableCode code="ReplicationGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the replication group to which this cluster should belong. If this parameter is specified, the cluster is added to the specified replication group as a read replica; otherwise, the cluster is a standalone primary that is not part of any replication group. If the specified replication group is Multi-AZ enabled and the Availability Zone is not specified, the cluster is created in Availability Zones that provide the best spread of read replicas across Availability Zones. This parameter is only valid if the Engine parameter is redis.</td>
</tr>
<tr id="parameter-ScaleConfig">
    <td><CopyableCode code="ScaleConfig" /></td>
    <td><code>object</code></td>
    <td>Configures horizontal or vertical scaling for Memcached clusters, specifying the scaling percentage and interval.</td>
</tr>
<tr id="parameter-SecurityGroupIds">
    <td><CopyableCode code="SecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>Specifies the VPC Security Groups associated with the cluster. This parameter can be used only with clusters that are created in an Amazon Virtual Private Cloud (Amazon VPC).</td>
</tr>
<tr id="parameter-ShowCacheClustersNotInReplicationGroups">
    <td><CopyableCode code="ShowCacheClustersNotInReplicationGroups" /></td>
    <td><code>boolean</code></td>
    <td>An optional flag that can be included in the DescribeCacheCluster request to show only nodes (API/CLI: clusters) that are not members of a replication group. In practice, this means Memcached and single node Valkey or Redis OSS clusters.</td>
</tr>
<tr id="parameter-ShowCacheNodeInfo">
    <td><CopyableCode code="ShowCacheNodeInfo" /></td>
    <td><code>boolean</code></td>
    <td>An optional flag that can be included in the DescribeCacheCluster request to retrieve information about the individual cache nodes.</td>
</tr>
<tr id="parameter-SnapshotArns">
    <td><CopyableCode code="SnapshotArns" /></td>
    <td><code>array</code></td>
    <td>A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Valkey or Redis OSS RDB snapshot file stored in Amazon S3. The snapshot file is used to populate the node group (shard). The Amazon S3 object name in the ARN cannot contain any commas. This parameter is only valid if the Engine parameter is redis. Example of an Amazon S3 ARN: arn:aws:s3:::my_bucket/snapshot1.rdb</td>
</tr>
<tr id="parameter-SnapshotName">
    <td><CopyableCode code="SnapshotName" /></td>
    <td><code>string</code></td>
    <td>The name of a Valkey or Redis OSS snapshot from which to restore data into the new node group (shard). The snapshot status changes to restoring while the new node group (shard) is being created. This parameter is only valid if the Engine parameter is redis.</td>
</tr>
<tr id="parameter-SnapshotRetentionLimit">
    <td><CopyableCode code="SnapshotRetentionLimit" /></td>
    <td><code>integer</code></td>
    <td>The number of days for which ElastiCache retains automatic cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted. If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</td>
</tr>
<tr id="parameter-SnapshotWindow">
    <td><CopyableCode code="SnapshotWindow" /></td>
    <td><code>string</code></td>
    <td>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your cluster.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags to be added to this resource.</td>
</tr>
<tr id="parameter-TransitEncryptionEnabled">
    <td><CopyableCode code="TransitEncryptionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag that enables in-transit encryption when set to true.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_cache_clusters"
    values={[
        { label: 'describe_cache_clusters', value: 'describe_cache_clusters' }
    ]}
>
<TabItem value="describe_cache_clusters">

Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied. By default, abbreviated information about the clusters is returned. You can use the optional ShowCacheNodeInfo flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint. If the cluster is in the creating state, only cluster-level information is displayed until all of the nodes are successfully provisioned. If the cluster is in the deleting state, only cluster-level information is displayed. If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is available, the cluster is ready for use. If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.

```sql
SELECT
arn,
at_rest_encryption_enabled,
auth_token_enabled,
auth_token_last_modified_date,
auto_minor_version_upgrade,
cache_cluster_create_time,
cache_cluster_id,
cache_cluster_status,
cache_node_type,
cache_nodes,
cache_parameter_group,
cache_security_groups,
cache_subnet_group_name,
client_download_landing_page,
configuration_endpoint,
engine,
engine_version,
ip_discovery,
log_delivery_configurations,
network_type,
notification_configuration,
num_cache_nodes,
pending_modified_values,
preferred_availability_zone,
preferred_maintenance_window,
preferred_outpost_arn,
replication_group_id,
replication_group_log_delivery_enabled,
security_groups,
snapshot_retention_limit,
snapshot_window,
transit_encryption_enabled,
transit_encryption_mode
FROM aws.elasticache.cache_clusters
WHERE region = '{{ region }}' -- required
AND CacheClusterId = '{{ CacheClusterId }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND ShowCacheNodeInfo = '{{ ShowCacheNodeInfo }}'
AND ShowCacheClustersNotInReplicationGroups = '{{ ShowCacheClustersNotInReplicationGroups }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cache_cluster"
    values={[
        { label: 'create_cache_cluster', value: 'create_cache_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cache_cluster">

Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached, Valkey or Redis OSS. This operation is not supported for Valkey or Redis OSS (cluster mode enabled) clusters.

```sql
INSERT INTO aws.elasticache.cache_clusters (
CacheClusterId,
region,
ReplicationGroupId,
AZMode,
PreferredAvailabilityZone,
PreferredAvailabilityZones,
NumCacheNodes,
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
OutpostMode,
PreferredOutpostArn,
PreferredOutpostArns,
LogDeliveryConfigurations,
TransitEncryptionEnabled,
NetworkType,
IpDiscovery
)
SELECT 
'{{ CacheClusterId }}',
'{{ region }}',
'{{ ReplicationGroupId }}',
'{{ AZMode }}',
'{{ PreferredAvailabilityZone }}',
'{{ PreferredAvailabilityZones }}',
'{{ NumCacheNodes }}',
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
'{{ OutpostMode }}',
'{{ PreferredOutpostArn }}',
'{{ PreferredOutpostArns }}',
'{{ LogDeliveryConfigurations }}',
'{{ TransitEncryptionEnabled }}',
'{{ NetworkType }}',
'{{ IpDiscovery }}'
RETURNING
arn,
at_rest_encryption_enabled,
auth_token_enabled,
auth_token_last_modified_date,
auto_minor_version_upgrade,
cache_cluster_create_time,
cache_cluster_id,
cache_cluster_status,
cache_node_type,
cache_nodes,
cache_parameter_group,
cache_security_groups,
cache_subnet_group_name,
client_download_landing_page,
configuration_endpoint,
engine,
engine_version,
ip_discovery,
log_delivery_configurations,
network_type,
notification_configuration,
num_cache_nodes,
pending_modified_values,
preferred_availability_zone,
preferred_maintenance_window,
preferred_outpost_arn,
replication_group_id,
replication_group_log_delivery_enabled,
security_groups,
snapshot_retention_limit,
snapshot_window,
transit_encryption_enabled,
transit_encryption_mode
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cache_clusters
  props:
    - name: CacheClusterId
      value: "{{ CacheClusterId }}"
      description: Required parameter for the cache_clusters resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cache_clusters resource.
    - name: ReplicationGroupId
      value: "{{ ReplicationGroupId }}"
      description: The ID of the replication group to which this cluster should belong. If this parameter is specified, the cluster is added to the specified replication group as a read replica; otherwise, the cluster is a standalone primary that is not part of any replication group. If the specified replication group is Multi-AZ enabled and the Availability Zone is not specified, the cluster is created in Availability Zones that provide the best spread of read replicas across Availability Zones. This parameter is only valid if the Engine parameter is redis.
      description: The ID of the replication group to which this cluster should belong. If this parameter is specified, the cluster is added to the specified replication group as a read replica; otherwise, the cluster is a standalone primary that is not part of any replication group. If the specified replication group is Multi-AZ enabled and the Availability Zone is not specified, the cluster is created in Availability Zones that provide the best spread of read replicas across Availability Zones. This parameter is only valid if the Engine parameter is redis.
    - name: AZMode
      value: "{{ AZMode }}"
      description: Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region. This parameter is only supported for Memcached clusters. If the AZMode and PreferredAvailabilityZones are not specified, ElastiCache assumes single-az mode.
      description: Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region. This parameter is only supported for Memcached clusters. If the AZMode and PreferredAvailabilityZones are not specified, ElastiCache assumes single-az mode.
    - name: PreferredAvailabilityZone
      value: "{{ PreferredAvailabilityZone }}"
      description: The EC2 Availability Zone in which the cluster is created. All nodes belonging to this cluster are placed in the preferred Availability Zone. If you want to create your nodes across multiple Availability Zones, use PreferredAvailabilityZones. Default: System chosen Availability Zone.
      description: The EC2 Availability Zone in which the cluster is created. All nodes belonging to this cluster are placed in the preferred Availability Zone. If you want to create your nodes across multiple Availability Zones, use PreferredAvailabilityZones. Default: System chosen Availability Zone.
    - name: PreferredAvailabilityZones
      value: "{{ PreferredAvailabilityZones }}"
      description: A list of the Availability Zones in which cache nodes are created. The order of the zones in the list is not important. This option is only supported on Memcached. If you are creating your cluster in an Amazon VPC (recommended) you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group. The number of Availability Zones listed must equal the value of NumCacheNodes. If you want all the nodes in the same Availability Zone, use PreferredAvailabilityZone instead, or repeat the Availability Zone multiple times in the list. Default: System chosen Availability Zones.
      description: A list of the Availability Zones in which cache nodes are created. The order of the zones in the list is not important. This option is only supported on Memcached. If you are creating your cluster in an Amazon VPC (recommended) you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group. The number of Availability Zones listed must equal the value of NumCacheNodes. If you want all the nodes in the same Availability Zone, use PreferredAvailabilityZone instead, or repeat the Availability Zone multiple times in the list. Default: System chosen Availability Zones.
    - name: NumCacheNodes
      value: {{ NumCacheNodes }}
      description: The initial number of cache nodes that the cluster has. For clusters running Valkey or Redis OSS, this value must be 1. For clusters running Memcached, this value must be between 1 and 40. If you need more than 40 nodes for your Memcached cluster, please fill out the ElastiCache Limit Increase Request form at http://aws.amazon.com/contact-us/elasticache-node-limit-request/.
      description: The initial number of cache nodes that the cluster has. For clusters running Valkey or Redis OSS, this value must be 1. For clusters running Memcached, this value must be between 1 and 40. If you need more than 40 nodes for your Memcached cluster, please fill out the ElastiCache Limit Increase Request form at http://aws.amazon.com/contact-us/elasticache-node-limit-request/.
    - name: CacheNodeType
      value: "{{ CacheNodeType }}"
      description: The compute and memory capacity of the nodes in the node group (shard). The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts. General purpose: Current generation: M7g node types: cache.m7g.large, cache.m7g.xlarge, cache.m7g.2xlarge, cache.m7g.4xlarge, cache.m7g.8xlarge, cache.m7g.12xlarge, cache.m7g.16xlarge For region availability, see Supported Node Types M6g node types (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.m6g.large, cache.m6g.xlarge, cache.m6g.2xlarge, cache.m6g.4xlarge, cache.m6g.8xlarge, cache.m6g.12xlarge, cache.m6g.16xlarge M5 node types: cache.m5.large, cache.m5.xlarge, cache.m5.2xlarge, cache.m5.4xlarge, cache.m5.12xlarge, cache.m5.24xlarge M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge T4g node types (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): cache.t4g.micro, cache.t4g.small, cache.t4g.medium T3 node types: cache.t3.micro, cache.t3.small, cache.t3.medium T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) T1 node types: cache.t1.micro M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge Compute optimized: Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) C1 node types: cache.c1.xlarge Memory optimized: Current generation: R7g node types: cache.r7g.large, cache.r7g.xlarge, cache.r7g.2xlarge, cache.r7g.4xlarge, cache.r7g.8xlarge, cache.r7g.12xlarge, cache.r7g.16xlarge For region availability, see Supported Node Types R6g node types (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.r6g.large, cache.r6g.xlarge, cache.r6g.2xlarge, cache.r6g.4xlarge, cache.r6g.8xlarge, cache.r6g.12xlarge, cache.r6g.16xlarge R5 node types: cache.r5.large, cache.r5.xlarge, cache.r5.2xlarge, cache.r5.4xlarge, cache.r5.12xlarge, cache.r5.24xlarge R4 node types: cache.r4.large, cache.r4.xlarge, cache.r4.2xlarge, cache.r4.4xlarge, cache.r4.8xlarge, cache.r4.16xlarge Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge Additional node type info All current generation instance types are created in Amazon VPC by default. Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances. Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances. The configuration variables appendonly and appendfsync are not supported on Valkey, or on Redis OSS version 2.8.22 and later.
      description: The compute and memory capacity of the nodes in the node group (shard). The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts. General purpose: Current generation: M7g node types: cache.m7g.large, cache.m7g.xlarge, cache.m7g.2xlarge, cache.m7g.4xlarge, cache.m7g.8xlarge, cache.m7g.12xlarge, cache.m7g.16xlarge For region availability, see Supported Node Types M6g node types (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.m6g.large, cache.m6g.xlarge, cache.m6g.2xlarge, cache.m6g.4xlarge, cache.m6g.8xlarge, cache.m6g.12xlarge, cache.m6g.16xlarge M5 node types: cache.m5.large, cache.m5.xlarge, cache.m5.2xlarge, cache.m5.4xlarge, cache.m5.12xlarge, cache.m5.24xlarge M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge T4g node types (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): cache.t4g.micro, cache.t4g.small, cache.t4g.medium T3 node types: cache.t3.micro, cache.t3.small, cache.t3.medium T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) T1 node types: cache.t1.micro M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge Compute optimized: Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) C1 node types: cache.c1.xlarge Memory optimized: Current generation: R7g node types: cache.r7g.large, cache.r7g.xlarge, cache.r7g.2xlarge, cache.r7g.4xlarge, cache.r7g.8xlarge, cache.r7g.12xlarge, cache.r7g.16xlarge For region availability, see Supported Node Types R6g node types (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.r6g.large, cache.r6g.xlarge, cache.r6g.2xlarge, cache.r6g.4xlarge, cache.r6g.8xlarge, cache.r6g.12xlarge, cache.r6g.16xlarge R5 node types: cache.r5.large, cache.r5.xlarge, cache.r5.2xlarge, cache.r5.4xlarge, cache.r5.12xlarge, cache.r5.24xlarge R4 node types: cache.r4.large, cache.r4.xlarge, cache.r4.2xlarge, cache.r4.4xlarge, cache.r4.8xlarge, cache.r4.16xlarge Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge Additional node type info All current generation instance types are created in Amazon VPC by default. Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances. Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances. The configuration variables appendonly and appendfsync are not supported on Valkey, or on Redis OSS version 2.8.22 and later.
    - name: Engine
      value: "{{ Engine }}"
      description: The name of the cache engine to be used for this cluster. Valid values for this parameter are: memcached | redis
      description: The name of the cache engine to be used for this cluster. Valid values for this parameter are: memcached | redis
    - name: EngineVersion
      value: "{{ EngineVersion }}"
      description: The version number of the cache engine to be used for this cluster. To view the supported cache engine versions, use the DescribeCacheEngineVersions operation. Important: You can upgrade to a newer engine version (see Selecting a Cache Engine and Version), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version.
      description: The version number of the cache engine to be used for this cluster. To view the supported cache engine versions, use the DescribeCacheEngineVersions operation. Important: You can upgrade to a newer engine version (see Selecting a Cache Engine and Version), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version.
    - name: CacheParameterGroupName
      value: "{{ CacheParameterGroupName }}"
      description: The name of the parameter group to associate with this cluster. If this argument is omitted, the default parameter group for the specified engine is used. You cannot use any parameter group which has cluster-enabled='yes' when creating a cluster.
      description: The name of the parameter group to associate with this cluster. If this argument is omitted, the default parameter group for the specified engine is used. You cannot use any parameter group which has cluster-enabled='yes' when creating a cluster.
    - name: CacheSubnetGroupName
      value: "{{ CacheSubnetGroupName }}"
      description: The name of the subnet group to be used for the cluster. Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC). If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see Subnets and Subnet Groups.
      description: The name of the subnet group to be used for the cluster. Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC). If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see Subnets and Subnet Groups.
    - name: CacheSecurityGroupNames
      value: "{{ CacheSecurityGroupNames }}"
      description: A list of security group names to associate with this cluster. Use this parameter only when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC).
      description: A list of security group names to associate with this cluster. Use this parameter only when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC).
    - name: SecurityGroupIds
      value: "{{ SecurityGroupIds }}"
      description: One or more VPC security groups associated with the cluster. Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).
      description: One or more VPC security groups associated with the cluster. Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags to be added to this resource.
      description: A list of tags to be added to this resource.
    - name: SnapshotArns
      value: "{{ SnapshotArns }}"
      description: A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Valkey or Redis OSS RDB snapshot file stored in Amazon S3. The snapshot file is used to populate the node group (shard). The Amazon S3 object name in the ARN cannot contain any commas. This parameter is only valid if the Engine parameter is redis. Example of an Amazon S3 ARN: arn:aws:s3:::my_bucket/snapshot1.rdb
      description: A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Valkey or Redis OSS RDB snapshot file stored in Amazon S3. The snapshot file is used to populate the node group (shard). The Amazon S3 object name in the ARN cannot contain any commas. This parameter is only valid if the Engine parameter is redis. Example of an Amazon S3 ARN: arn:aws:s3:::my_bucket/snapshot1.rdb
    - name: SnapshotName
      value: "{{ SnapshotName }}"
      description: The name of a Valkey or Redis OSS snapshot from which to restore data into the new node group (shard). The snapshot status changes to restoring while the new node group (shard) is being created. This parameter is only valid if the Engine parameter is redis.
      description: The name of a Valkey or Redis OSS snapshot from which to restore data into the new node group (shard). The snapshot status changes to restoring while the new node group (shard) is being created. This parameter is only valid if the Engine parameter is redis.
    - name: PreferredMaintenanceWindow
      value: "{{ PreferredMaintenanceWindow }}"
      description: Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.
      description: Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.
    - name: Port
      value: {{ Port }}
      description: The port number on which each of the cache nodes accepts connections.
      description: The port number on which each of the cache nodes accepts connections.
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
      description: The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot taken today is retained for 5 days before being deleted. This parameter is only valid if the Engine parameter is redis. Default: 0 (i.e., automatic backups are disabled for this cache cluster).
      description: The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot taken today is retained for 5 days before being deleted. This parameter is only valid if the Engine parameter is redis. Default: 0 (i.e., automatic backups are disabled for this cache cluster).
    - name: SnapshotWindow
      value: "{{ SnapshotWindow }}"
      description: The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). Example: 05:00-09:00 If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range. This parameter is only valid if the Engine parameter is redis.
      description: The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). Example: 05:00-09:00 If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range. This parameter is only valid if the Engine parameter is redis.
    - name: AuthToken
      value: "{{ AuthToken }}"
      description: Reserved parameter. The password used to access a password protected server. Password constraints: Must be only printable ASCII characters. Must be at least 16 characters and no more than 128 characters in length. The only permitted printable special characters are !, &, #, $, ^, <, >, and -. Other printable special characters cannot be used in the AUTH token. For more information, see AUTH password at http://redis.io/commands/AUTH.
      description: Reserved parameter. The password used to access a password protected server. Password constraints: Must be only printable ASCII characters. Must be at least 16 characters and no more than 128 characters in length. The only permitted printable special characters are !, &, #, $, ^, <, >, and -. Other printable special characters cannot be used in the AUTH token. For more information, see AUTH password at http://redis.io/commands/AUTH.
    - name: OutpostMode
      value: "{{ OutpostMode }}"
      description: Specifies whether the nodes in the cluster are created in a single outpost or across multiple outposts.
      description: Specifies whether the nodes in the cluster are created in a single outpost or across multiple outposts.
    - name: PreferredOutpostArn
      value: "{{ PreferredOutpostArn }}"
      description: The outpost ARN in which the cache cluster is created.
      description: The outpost ARN in which the cache cluster is created.
    - name: PreferredOutpostArns
      value: "{{ PreferredOutpostArns }}"
      description: The outpost ARNs in which the cache cluster is created.
      description: The outpost ARNs in which the cache cluster is created.
    - name: LogDeliveryConfigurations
      value: "{{ LogDeliveryConfigurations }}"
      description: Specifies the destination, format and type of the logs.
      description: Specifies the destination, format and type of the logs.
    - name: TransitEncryptionEnabled
      value: {{ TransitEncryptionEnabled }}
      description: A flag that enables in-transit encryption when set to true.
      description: A flag that enables in-transit encryption when set to true.
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: Must be either ipv4 | ipv6 | dual_stack. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 and Memcached engine version 1.6.6 and above on all instances built on the Nitro system.
      description: Must be either ipv4 | ipv6 | dual_stack. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 and Memcached engine version 1.6.6 and above on all instances built on the Nitro system.
    - name: IpDiscovery
      value: "{{ IpDiscovery }}"
      description: The network type you choose when modifying a cluster, either ipv4 | ipv6. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 and Memcached engine version 1.6.6 and above on all instances built on the Nitro system.
      description: The network type you choose when modifying a cluster, either ipv4 | ipv6. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 and Memcached engine version 1.6.6 and above on all instances built on the Nitro system.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_cache_cluster"
    values={[
        { label: 'modify_cache_cluster', value: 'modify_cache_cluster' }
    ]}
>
<TabItem value="modify_cache_cluster">

Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.

```sql
UPDATE aws.elasticache.cache_clusters
SET 
-- No updatable properties
WHERE 
CacheClusterId = '{{ CacheClusterId }}' --required
AND region = '{{ region }}' --required
AND NumCacheNodes = '{{ NumCacheNodes}}'
AND CacheNodeIdsToRemove = '{{ CacheNodeIdsToRemove}}'
AND AZMode = '{{ AZMode}}'
AND NewAvailabilityZones = '{{ NewAvailabilityZones}}'
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
AND LogDeliveryConfigurations = '{{ LogDeliveryConfigurations}}'
AND IpDiscovery = '{{ IpDiscovery}}'
AND ScaleConfig = '{{ ScaleConfig}}'
RETURNING
arn,
at_rest_encryption_enabled,
auth_token_enabled,
auth_token_last_modified_date,
auto_minor_version_upgrade,
cache_cluster_create_time,
cache_cluster_id,
cache_cluster_status,
cache_node_type,
cache_nodes,
cache_parameter_group,
cache_security_groups,
cache_subnet_group_name,
client_download_landing_page,
configuration_endpoint,
engine,
engine_version,
ip_discovery,
log_delivery_configurations,
network_type,
notification_configuration,
num_cache_nodes,
pending_modified_values,
preferred_availability_zone,
preferred_maintenance_window,
preferred_outpost_arn,
replication_group_id,
replication_group_log_delivery_enabled,
security_groups,
snapshot_retention_limit,
snapshot_window,
transit_encryption_enabled,
transit_encryption_mode;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cache_cluster"
    values={[
        { label: 'delete_cache_cluster', value: 'delete_cache_cluster' }
    ]}
>
<TabItem value="delete_cache_cluster">

Deletes a previously provisioned cluster. DeleteCacheCluster deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation. This operation is not valid for: Valkey or Redis OSS (cluster mode enabled) clusters Valkey or Redis OSS (cluster mode disabled) clusters A cluster that is the last read replica of a replication group A cluster that is the primary node of a replication group A node group (shard) that has Multi-AZ mode enabled A cluster from a Valkey or Redis OSS (cluster mode enabled) replication group A cluster that is not in the available state

```sql
DELETE FROM aws.elasticache.cache_clusters
WHERE CacheClusterId = '{{ CacheClusterId }}' --required
AND region = '{{ region }}' --required
AND FinalSnapshotIdentifier = '{{ FinalSnapshotIdentifier }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reboot_cache_cluster"
    values={[
        { label: 'reboot_cache_cluster', value: 'reboot_cache_cluster' }
    ]}
>
<TabItem value="reboot_cache_cluster">

Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING. The reboot causes the contents of the cache (for each cache node being rebooted) to be lost. When the reboot is complete, a cluster event is created. Rebooting a cluster is currently supported on Memcached, Valkey and Redis OSS (cluster mode disabled) clusters. Rebooting is not supported on Valkey or Redis OSS (cluster mode enabled) clusters. If you make changes to parameters that require a Valkey or Redis OSS (cluster mode enabled) cluster reboot for the changes to be applied, see Rebooting a Cluster for an alternate process.

```sql
EXEC aws.elasticache.cache_clusters.reboot_cache_cluster 
@CacheClusterId='{{ CacheClusterId }}' --required, 
@CacheNodeIdsToReboot='{{ CacheNodeIdsToReboot }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
