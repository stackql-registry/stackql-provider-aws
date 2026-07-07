--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.memorydb.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_clusters"
    values={[
        { label: 'describe_clusters', value: 'describe_clusters' }
    ]}
>
<TabItem value="describe_clusters">

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
    <td><CopyableCode code="ACLName" /></td>
    <td><code>string</code></td>
    <td>The name of the Access Control List associated with this cluster. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoMinorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>When set to true, the cluster will automatically receive minor engine version upgrades after launch.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityMode" /></td>
    <td><code>string</code></td>
    <td>Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz). (singleaz, multiaz)</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterEndpoint" /></td>
    <td><code>object</code></td>
    <td>The cluster's configuration endpoint</td>
</tr>
<tr>
    <td><CopyableCode code="DataTiering" /></td>
    <td><code>string</code></td>
    <td>Enables data tiering. Data tiering is only supported for clusters using the r6gd node type. This parameter must be set when using r6gd nodes. For more information, see Data tiering. (true, false)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The name of the engine used by the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="EnginePatchVersion" /></td>
    <td><code>string</code></td>
    <td>The Redis OSS engine patch version used by the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The Redis OSS engine version used by the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="IpDiscovery" /></td>
    <td><code>string</code></td>
    <td>The mechanism that the cluster uses to discover IP addresses. Returns 'ipv4' when DNS endpoints resolve to IPv4 addresses, or 'ipv6' when DNS endpoints resolve to IPv6 addresses. (ipv4, ipv6)</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the KMS key used to encrypt the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="MaintenanceWindow" /></td>
    <td><code>string</code></td>
    <td>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</td>
</tr>
<tr>
    <td><CopyableCode code="MultiRegionClusterName" /></td>
    <td><code>string</code></td>
    <td>The name of the multi-Region cluster that this cluster belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The user-supplied name of the cluster. This identifier is a unique key that identifies a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkType" /></td>
    <td><code>string</code></td>
    <td>The IP address type for the cluster. Returns 'ipv4' for IPv4 only, 'ipv6' for IPv6 only, or 'dual-stack' if the cluster supports both IPv4 and IPv6 addressing. (ipv4, ipv6, dual_stack)</td>
</tr>
<tr>
    <td><CopyableCode code="NodeType" /></td>
    <td><code>string</code></td>
    <td>The cluster's node type</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfShards" /></td>
    <td><code>integer</code></td>
    <td>The number of shards in the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="ParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the parameter group used by the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="ParameterGroupStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the parameter group used by the cluster, for example 'active' or 'applying'.</td>
</tr>
<tr>
    <td><CopyableCode code="PendingUpdates" /></td>
    <td><code>object</code></td>
    <td>A group of settings that are currently being applied.</td>
</tr>
<tr>
    <td><CopyableCode code="SecurityGroups" /></td>
    <td><code>array</code></td>
    <td>A list of security groups used by the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="Shards" /></td>
    <td><code>array</code></td>
    <td>A list of shards that are members of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotRetentionLimit" /></td>
    <td><code>integer</code></td>
    <td>The number of days for which MemoryDB retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotWindow" /></td>
    <td><code>string</code></td>
    <td>The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard. Example: 05:00-09:00 If you do not specify this parameter, MemoryDB automatically chooses an appropriate time range.</td>
</tr>
<tr>
    <td><CopyableCode code="SnsTopicArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the SNS notification topic</td>
</tr>
<tr>
    <td><CopyableCode code="SnsTopicStatus" /></td>
    <td><code>string</code></td>
    <td>The SNS topic must be in Active status to receive notifications</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the cluster. For example, Available, Updating, Creating.</td>
</tr>
<tr>
    <td><CopyableCode code="SubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the subnet group used by the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="TLSEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag to indicate if In-transit encryption is enabled</td>
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
    <td><a href="#describe_clusters"><CopyableCode code="describe_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.</td>
</tr>
<tr>
    <td><a href="#create_cluster"><CopyableCode code="create_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a>, <a href="#parameter-NodeType"><code>NodeType</code></a>, <a href="#parameter-ACLName"><code>ACLName</code></a></td>
    <td></td>
    <td>Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.</td>
</tr>
<tr>
    <td><a href="#update_cluster"><CopyableCode code="update_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a></td>
    <td></td>
    <td>Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.</td>
</tr>
<tr>
    <td><a href="#delete_cluster"><CopyableCode code="delete_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a cluster. It also deletes all associated nodes and node endpoints. CreateSnapshot permission is required to create a final snapshot. Without this permission, the API call will fail with an Access Denied exception.</td>
</tr>
<tr>
    <td><a href="#batch_update_cluster"><CopyableCode code="batch_update_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterNames"><code>ClusterNames</code></a></td>
    <td></td>
    <td>Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see Applying the service updates.</td>
</tr>
<tr>
    <td><a href="#failover_shard"><CopyableCode code="failover_shard" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a>, <a href="#parameter-ShardName"><code>ShardName</code></a></td>
    <td></td>
    <td>Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API.</td>
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
    defaultValue="describe_clusters"
    values={[
        { label: 'describe_clusters', value: 'describe_clusters' }
    ]}
>
<TabItem value="describe_clusters">

Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.

```sql
SELECT
ACLName,
ARN,
AutoMinorVersionUpgrade,
AvailabilityMode,
ClusterEndpoint,
DataTiering,
Description,
Engine,
EnginePatchVersion,
EngineVersion,
IpDiscovery,
KmsKeyId,
MaintenanceWindow,
MultiRegionClusterName,
Name,
NetworkType,
NodeType,
NumberOfShards,
ParameterGroupName,
ParameterGroupStatus,
PendingUpdates,
SecurityGroups,
Shards,
SnapshotRetentionLimit,
SnapshotWindow,
SnsTopicArn,
SnsTopicStatus,
Status,
SubnetGroupName,
TLSEnabled
FROM aws.memorydb.clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cluster"
    values={[
        { label: 'create_cluster', value: 'create_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster">

Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.

```sql
INSERT INTO aws.memorydb.clusters (
ClusterName,
NodeType,
MultiRegionClusterName,
ParameterGroupName,
Description,
NumShards,
NumReplicasPerShard,
SubnetGroupName,
SecurityGroupIds,
MaintenanceWindow,
Port,
SnsTopicArn,
TLSEnabled,
KmsKeyId,
SnapshotArns,
SnapshotName,
SnapshotRetentionLimit,
Tags,
SnapshotWindow,
ACLName,
Engine,
EngineVersion,
AutoMinorVersionUpgrade,
DataTiering,
NetworkType,
IpDiscovery,
region
)
SELECT 
'{{ ClusterName }}' /* required */,
'{{ NodeType }}' /* required */,
'{{ MultiRegionClusterName }}',
'{{ ParameterGroupName }}',
'{{ Description }}',
{{ NumShards }},
{{ NumReplicasPerShard }},
'{{ SubnetGroupName }}',
'{{ SecurityGroupIds }}',
'{{ MaintenanceWindow }}',
{{ Port }},
'{{ SnsTopicArn }}',
{{ TLSEnabled }},
'{{ KmsKeyId }}',
'{{ SnapshotArns }}',
'{{ SnapshotName }}',
{{ SnapshotRetentionLimit }},
'{{ Tags }}',
'{{ SnapshotWindow }}',
'{{ ACLName }}' /* required */,
'{{ Engine }}',
'{{ EngineVersion }}',
{{ AutoMinorVersionUpgrade }},
{{ DataTiering }},
'{{ NetworkType }}',
'{{ IpDiscovery }}',
'{{ region }}'
RETURNING
Cluster
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the clusters resource.
    - name: ClusterName
      value: "{{ ClusterName }}"
      description: |
        The name of the cluster. This value must be unique as it also serves as the cluster identifier.
    - name: NodeType
      value: "{{ NodeType }}"
      description: |
        The compute and memory capacity of the nodes in the cluster.
    - name: MultiRegionClusterName
      value: "{{ MultiRegionClusterName }}"
      description: |
        The name of the multi-Region cluster to be created.
    - name: ParameterGroupName
      value: "{{ ParameterGroupName }}"
      description: |
        The name of the parameter group associated with the cluster.
    - name: Description
      value: "{{ Description }}"
      description: |
        An optional description of the cluster.
    - name: NumShards
      value: {{ NumShards }}
      description: |
        The number of shards the cluster will contain. The default value is 1.
    - name: NumReplicasPerShard
      value: {{ NumReplicasPerShard }}
      description: |
        The number of replicas to apply to each shard. The default value is 1. The maximum is 5.
    - name: SubnetGroupName
      value: "{{ SubnetGroupName }}"
      description: |
        The name of the subnet group to be used for the cluster.
    - name: SecurityGroupIds
      value:
        - "{{ SecurityGroupIds }}"
      description: |
        A list of security group names to associate with this cluster.
    - name: MaintenanceWindow
      value: "{{ MaintenanceWindow }}"
      description: |
        Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are: sun mon tue wed thu fri sat Example: sun:23:00-mon:01:30
    - name: Port
      value: {{ Port }}
      description: |
        The port number on which each of the nodes accepts connections.
    - name: SnsTopicArn
      value: "{{ SnsTopicArn }}"
      description: |
        The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
    - name: TLSEnabled
      value: {{ TLSEnabled }}
      description: |
        A flag to enable in-transit encryption on the cluster.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        The ID of the KMS key used to encrypt the cluster.
    - name: SnapshotArns
      value:
        - "{{ SnapshotArns }}"
      description: |
        A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.
    - name: SnapshotName
      value: "{{ SnapshotName }}"
      description: |
        The name of a snapshot from which to restore data into the new cluster. The snapshot status changes to restoring while the new cluster is being created.
    - name: SnapshotRetentionLimit
      value: {{ SnapshotRetentionLimit }}
      description: |
        The number of days for which MemoryDB retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.
    - name: Tags
      description: |
        A list of tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: SnapshotWindow
      value: "{{ SnapshotWindow }}"
      description: |
        The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard. Example: 05:00-09:00 If you do not specify this parameter, MemoryDB automatically chooses an appropriate time range.
    - name: ACLName
      value: "{{ ACLName }}"
      description: |
        The name of the Access Control List to associate with the cluster.
    - name: Engine
      value: "{{ Engine }}"
      description: |
        The name of the engine to be used for the cluster.
    - name: EngineVersion
      value: "{{ EngineVersion }}"
      description: |
        The version number of the Redis OSS engine to be used for the cluster.
    - name: AutoMinorVersionUpgrade
      value: {{ AutoMinorVersionUpgrade }}
      description: |
        When set to true, the cluster will automatically receive minor engine version upgrades after launch.
    - name: DataTiering
      value: {{ DataTiering }}
      description: |
        Enables data tiering. Data tiering is only supported for clusters using the r6gd node type. This parameter must be set when using r6gd nodes. For more information, see Data tiering.
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: |
        Specifies the IP address type for the cluster. Valid values are 'ipv4', 'ipv6', or 'dual_stack'. When set to 'ipv4', the cluster will only be accessible via IPv4 addresses. When set to 'ipv6', the cluster will only be accessible via IPv6 addresses. When set to 'dual_stack', the cluster will be accessible via both IPv4 and IPv6 addresses. If not specified, the default is 'ipv4'.
      valid_values: ['ipv4', 'ipv6', 'dual_stack']
    - name: IpDiscovery
      value: "{{ IpDiscovery }}"
      description: |
        The mechanism for discovering IP addresses for the cluster discovery protocol. Valid values are 'ipv4' or 'ipv6'. When set to 'ipv4', cluster discovery functions such as cluster slots, cluster shards, and cluster nodes return IPv4 addresses for cluster nodes. When set to 'ipv6', the cluster discovery functions return IPv6 addresses for cluster nodes. The value must be compatible with the NetworkType parameter. If not specified, the default is 'ipv4'.
      valid_values: ['ipv4', 'ipv6']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cluster"
    values={[
        { label: 'update_cluster', value: 'update_cluster' }
    ]}
>
<TabItem value="update_cluster">

Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.

```sql
UPDATE aws.memorydb.clusters
SET 
ClusterName = '{{ ClusterName }}',
Description = '{{ Description }}',
SecurityGroupIds = '{{ SecurityGroupIds }}',
MaintenanceWindow = '{{ MaintenanceWindow }}',
SnsTopicArn = '{{ SnsTopicArn }}',
SnsTopicStatus = '{{ SnsTopicStatus }}',
ParameterGroupName = '{{ ParameterGroupName }}',
SnapshotWindow = '{{ SnapshotWindow }}',
SnapshotRetentionLimit = {{ SnapshotRetentionLimit }},
NodeType = '{{ NodeType }}',
Engine = '{{ Engine }}',
EngineVersion = '{{ EngineVersion }}',
ReplicaConfiguration = '{{ ReplicaConfiguration }}',
ShardConfiguration = '{{ ShardConfiguration }}',
ACLName = '{{ ACLName }}',
IpDiscovery = '{{ IpDiscovery }}'
WHERE 
region = '{{ region }}' --required
AND ClusterName = '{{ ClusterName }}' --required
RETURNING
Cluster;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cluster"
    values={[
        { label: 'delete_cluster', value: 'delete_cluster' }
    ]}
>
<TabItem value="delete_cluster">

Deletes a cluster. It also deletes all associated nodes and node endpoints. CreateSnapshot permission is required to create a final snapshot. Without this permission, the API call will fail with an Access Denied exception.

```sql
DELETE FROM aws.memorydb.clusters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_update_cluster"
    values={[
        { label: 'batch_update_cluster', value: 'batch_update_cluster' },
        { label: 'failover_shard', value: 'failover_shard' }
    ]}
>
<TabItem value="batch_update_cluster">

Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see Applying the service updates.

```sql
EXEC aws.memorydb.clusters.batch_update_cluster 
@region='{{ region }}' --required 
@@json=
'{
"ClusterNames": "{{ ClusterNames }}", 
"ServiceUpdate": "{{ ServiceUpdate }}"
}'
;
```
</TabItem>
<TabItem value="failover_shard">

Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API.

```sql
EXEC aws.memorydb.clusters.failover_shard 
@region='{{ region }}' --required 
@@json=
'{
"ClusterName": "{{ ClusterName }}", 
"ShardName": "{{ ShardName }}"
}'
;
```
</TabItem>
</Tabs>
