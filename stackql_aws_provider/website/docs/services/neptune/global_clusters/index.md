--- 
title: global_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - global_clusters
  - neptune
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune.global_clusters" /></td></tr>
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
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>The default database name within the new global database cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection" /></td>
    <td><code>boolean</code></td>
    <td>The deletion protection setting for the global database.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The Neptune database engine used by the global database ("neptune").</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>The Neptune engine version used by the global database.</td>
</tr>
<tr>
    <td><CopyableCode code="failover_state" /></td>
    <td><code>string</code></td>
    <td>A data object containing all properties for the current state of an in-process or pending switchover or failover process for this global cluster (Neptune global database). This object is empty unless the SwitchoverGlobalCluster or FailoverGlobalCluster operation was called on this global cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="global_cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the global database.</td>
</tr>
<tr>
    <td><CopyableCode code="global_cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>Contains a user-supplied global database cluster identifier. This identifier is the unique key that identifies a global database.</td>
</tr>
<tr>
    <td><CopyableCode code="global_cluster_members" /></td>
    <td><code>string</code></td>
    <td>A list of cluster ARNs and instance ARNs for all the DB clusters that are part of the global database.</td>
</tr>
<tr>
    <td><CopyableCode code="global_cluster_resource_id" /></td>
    <td><code>string</code></td>
    <td>An immutable identifier for the global database that is unique within all regions. This identifier is found in CloudTrail log entries whenever the KMS key for the DB cluster is accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Specifies the current state of this global database.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_encrypted" /></td>
    <td><code>boolean</code></td>
    <td>The storage encryption setting for the global database.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_list" /></td>
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
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns information about Neptune global database clusters. This API supports pagination.</td>
</tr>
<tr>
    <td><a href="#create_global_cluster"><CopyableCode code="create_global_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SourceDBClusterIdentifier"><code>SourceDBClusterIdentifier</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-StorageEncrypted"><code>StorageEncrypted</code></a></td>
    <td>Creates a Neptune global database spread across multiple Amazon Regions. The global database contains a single primary cluster with read-write capability, and read-only secondary clusters that receive data from the primary cluster through high-speed replication performed by the Neptune storage subsystem. You can create a global database that is initially empty, and then add a primary cluster and secondary clusters to it, or you can specify an existing Neptune cluster during the create operation to become the primary cluster of the global database.</td>
</tr>
<tr>
    <td><a href="#remove_from_global_cluster"><CopyableCode code="remove_from_global_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-DbClusterIdentifier"><code>DbClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Detaches a Neptune DB cluster from a Neptune global database. A secondary cluster becomes a normal standalone cluster with read-write capability instead of being read-only, and no longer receives data from the primary cluster.</td>
</tr>
<tr>
    <td><a href="#modify_global_cluster"><CopyableCode code="modify_global_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NewGlobalClusterIdentifier"><code>NewGlobalClusterIdentifier</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-AllowMajorVersionUpgrade"><code>AllowMajorVersionUpgrade</code></a></td>
    <td>Modify a setting for an Amazon Neptune global cluster. You can change one or more database configuration parameters by specifying these parameters and their new values in the request.</td>
</tr>
<tr>
    <td><a href="#delete_global_cluster"><CopyableCode code="delete_global_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a global database. The primary and all secondary clusters must already be detached or deleted first.</td>
</tr>
<tr>
    <td><a href="#failover_global_cluster"><CopyableCode code="failover_global_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-TargetDbClusterIdentifier"><code>TargetDbClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AllowDataLoss"><code>AllowDataLoss</code></a>, <a href="#parameter-Switchover"><code>Switchover</code></a></td>
    <td>Initiates the failover process for a Neptune global database. A failover for a Neptune global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected target secondary DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Neptune global database. This action applies only to Neptune global databases. This action is only intended for use on healthy Neptune global databases with healthy Neptune DB clusters and no region-wide outages, to test disaster recovery scenarios or to reconfigure the global database topology.</td>
</tr>
<tr>
    <td><a href="#switchover_global_cluster"><CopyableCode code="switchover_global_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-TargetDbClusterIdentifier"><code>TargetDbClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Switches over the specified secondary DB cluster to be the new primary DB cluster in the global database cluster. Switchover operations were previously called "managed planned failovers." Promotes the specified secondary cluster to assume full read/write capabilities and demotes the current primary cluster to a secondary (read-only) cluster, maintaining the original replication topology. All secondary clusters are synchronized with the primary at the beginning of the process so the new primary continues operations for the global database without losing any data. Your database is unavailable for a short time while the primary and selected secondary clusters are assuming their new roles. This operation is intended for controlled environments, for operations such as "regional rotation" or to fall back to the original primary after a global database failover.</td>
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
    <td>The Amazon Resource Name (ARN) identifying the cluster to be detached from the Neptune global database cluster.</td>
</tr>
<tr id="parameter-GlobalClusterIdentifier">
    <td><CopyableCode code="GlobalClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the global database cluster to switch over. This parameter isn't case-sensitive. Constraints: Must match the identifier of an existing global database cluster.</td>
</tr>
<tr id="parameter-TargetDbClusterIdentifier">
    <td><CopyableCode code="TargetDbClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the secondary Neptune DB cluster that you want to promote to primary for the global database.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AllowDataLoss">
    <td><CopyableCode code="AllowDataLoss" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to allow data loss for this global database cluster operation. Allowing data loss triggers a global failover operation. If you don't specify AllowDataLoss, the global database cluster operation defaults to a switchover. Constraints: Can't be specified together with the Switchover parameter.</td>
</tr>
<tr id="parameter-AllowMajorVersionUpgrade">
    <td><CopyableCode code="AllowMajorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates whether major version upgrades are allowed. Constraints: You must allow major version upgrades if you specify a value for the EngineVersion parameter that is a different major version than the DB cluster's current version. If you upgrade the major version of a global database, the cluster and DB instance parameter groups are set to the default parameter groups for the new version, so you will need to apply any custom parameter groups after completing the upgrade.</td>
</tr>
<tr id="parameter-DatabaseName">
    <td><CopyableCode code="DatabaseName" /></td>
    <td><code>string</code></td>
    <td>The name for the new global database (up to 64 alpha-numeric characters).</td>
</tr>
<tr id="parameter-DeletionProtection">
    <td><CopyableCode code="DeletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the global database has deletion protection enabled. The global database cannot be deleted when deletion protection is enabled.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The name of the database engine to be used in the global database. Valid values: neptune</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The version number of the database engine to which you want to upgrade. Changing this parameter will result in an outage. The change is applied during the next maintenance window unless ApplyImmediately is enabled. To list all of the available Neptune engine versions, use the following command:</td>
</tr>
<tr id="parameter-GlobalClusterIdentifier">
    <td><CopyableCode code="GlobalClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The user-supplied DB cluster identifier. If this parameter is specified, only information about the specified DB cluster is returned. This parameter is not case-sensitive. Constraints: If supplied, must match an existing DB cluster identifier.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>(Optional) A pagination token returned by a previous call to DescribeGlobalClusters. If this parameter is specified, the response will only include records beyond the marker, up to the number specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination marker token is included in the response that you can use to retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-NewGlobalClusterIdentifier">
    <td><CopyableCode code="NewGlobalClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>A new cluster identifier to assign to the global database. This value is stored as a lowercase string. Constraints: Must contain from 1 to 63 letters, numbers, or hyphens. The first character must be a letter. Can't end with a hyphen or contain two consecutive hyphens Example: my-cluster2</td>
</tr>
<tr id="parameter-SourceDBClusterIdentifier">
    <td><CopyableCode code="SourceDBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>(Optional) The Amazon Resource Name (ARN) of an existing Neptune DB cluster to use as the primary cluster of the new global database.</td>
</tr>
<tr id="parameter-StorageEncrypted">
    <td><CopyableCode code="StorageEncrypted" /></td>
    <td><code>boolean</code></td>
    <td>The storage encryption setting for the new global database cluster.</td>
</tr>
<tr id="parameter-Switchover">
    <td><CopyableCode code="Switchover" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to switch over this global database cluster. Constraints: Can't be specified together with the AllowDataLoss parameter.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Tags to assign to the global cluster.</td>
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

Returns information about Neptune global database clusters. This API supports pagination.

```sql
SELECT
database_name,
deletion_protection,
engine,
engine_version,
failover_state,
global_cluster_arn,
global_cluster_identifier,
global_cluster_members,
global_cluster_resource_id,
status,
storage_encrypted,
tag_list
FROM aws.neptune.global_clusters
WHERE region = '{{ region }}' -- required
AND GlobalClusterIdentifier = '{{ GlobalClusterIdentifier }}'
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

Creates a Neptune global database spread across multiple Amazon Regions. The global database contains a single primary cluster with read-write capability, and read-only secondary clusters that receive data from the primary cluster through high-speed replication performed by the Neptune storage subsystem. You can create a global database that is initially empty, and then add a primary cluster and secondary clusters to it, or you can specify an existing Neptune cluster during the create operation to become the primary cluster of the global database.

```sql
INSERT INTO aws.neptune.global_clusters (
GlobalClusterIdentifier,
region,
SourceDBClusterIdentifier,
Engine,
EngineVersion,
DeletionProtection,
DatabaseName,
Tags,
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
'{{ Tags }}',
'{{ StorageEncrypted }}'
RETURNING
database_name,
deletion_protection,
engine,
engine_version,
failover_state,
global_cluster_arn,
global_cluster_identifier,
global_cluster_members,
global_cluster_resource_id,
status,
storage_encrypted,
tag_list
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
      description: (Optional) The Amazon Resource Name (ARN) of an existing Neptune DB cluster to use as the primary cluster of the new global database.
      description: (Optional) The Amazon Resource Name (ARN) of an existing Neptune DB cluster to use as the primary cluster of the new global database.
    - name: Engine
      value: "{{ Engine }}"
      description: The name of the database engine to be used in the global database. Valid values: neptune
      description: The name of the database engine to be used in the global database. Valid values: neptune
    - name: EngineVersion
      value: "{{ EngineVersion }}"
      description: The Neptune engine version to be used by the global database. Valid values: 1.2.0.0 or above.
      description: The Neptune engine version to be used by the global database. Valid values: 1.2.0.0 or above.
    - name: DeletionProtection
      value: {{ DeletionProtection }}
      description: The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.
      description: The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.
    - name: DatabaseName
      value: "{{ DatabaseName }}"
      description: The name for the new global database (up to 64 alpha-numeric characters).
      description: The name for the new global database (up to 64 alpha-numeric characters).
    - name: Tags
      value: "{{ Tags }}"
      description: Tags to assign to the global cluster.
      description: Tags to assign to the global cluster.
    - name: StorageEncrypted
      value: {{ StorageEncrypted }}
      description: The storage encryption setting for the new global database cluster.
      description: The storage encryption setting for the new global database cluster.
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

Detaches a Neptune DB cluster from a Neptune global database. A secondary cluster becomes a normal standalone cluster with read-write capability instead of being read-only, and no longer receives data from the primary cluster.

```sql
UPDATE aws.neptune.global_clusters
SET 
-- No updatable properties
WHERE 
GlobalClusterIdentifier = '{{ GlobalClusterIdentifier }}' --required
AND DbClusterIdentifier = '{{ DbClusterIdentifier }}' --required
AND region = '{{ region }}' --required
RETURNING
database_name,
deletion_protection,
engine,
engine_version,
failover_state,
global_cluster_arn,
global_cluster_identifier,
global_cluster_members,
global_cluster_resource_id,
status,
storage_encrypted,
tag_list;
```
</TabItem>
<TabItem value="modify_global_cluster">

Modify a setting for an Amazon Neptune global cluster. You can change one or more database configuration parameters by specifying these parameters and their new values in the request.

```sql
UPDATE aws.neptune.global_clusters
SET 
-- No updatable properties
WHERE 
GlobalClusterIdentifier = '{{ GlobalClusterIdentifier }}' --required
AND region = '{{ region }}' --required
AND NewGlobalClusterIdentifier = '{{ NewGlobalClusterIdentifier}}'
AND DeletionProtection = {{ DeletionProtection}}
AND EngineVersion = '{{ EngineVersion}}'
AND AllowMajorVersionUpgrade = {{ AllowMajorVersionUpgrade}}
RETURNING
database_name,
deletion_protection,
engine,
engine_version,
failover_state,
global_cluster_arn,
global_cluster_identifier,
global_cluster_members,
global_cluster_resource_id,
status,
storage_encrypted,
tag_list;
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

Deletes a global database. The primary and all secondary clusters must already be detached or deleted first.

```sql
DELETE FROM aws.neptune.global_clusters
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

Initiates the failover process for a Neptune global database. A failover for a Neptune global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected target secondary DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Neptune global database. This action applies only to Neptune global databases. This action is only intended for use on healthy Neptune global databases with healthy Neptune DB clusters and no region-wide outages, to test disaster recovery scenarios or to reconfigure the global database topology.

```sql
EXEC aws.neptune.global_clusters.failover_global_cluster 
@GlobalClusterIdentifier='{{ GlobalClusterIdentifier }}' --required, 
@TargetDbClusterIdentifier='{{ TargetDbClusterIdentifier }}' --required, 
@region='{{ region }}' --required, 
@AllowDataLoss={{ AllowDataLoss }}, 
@Switchover={{ Switchover }}
;
```
</TabItem>
<TabItem value="switchover_global_cluster">

Switches over the specified secondary DB cluster to be the new primary DB cluster in the global database cluster. Switchover operations were previously called "managed planned failovers." Promotes the specified secondary cluster to assume full read/write capabilities and demotes the current primary cluster to a secondary (read-only) cluster, maintaining the original replication topology. All secondary clusters are synchronized with the primary at the beginning of the process so the new primary continues operations for the global database without losing any data. Your database is unavailable for a short time while the primary and selected secondary clusters are assuming their new roles. This operation is intended for controlled environments, for operations such as "regional rotation" or to fall back to the original primary after a global database failover.

```sql
EXEC aws.neptune.global_clusters.switchover_global_cluster 
@GlobalClusterIdentifier='{{ GlobalClusterIdentifier }}' --required, 
@TargetDbClusterIdentifier='{{ TargetDbClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
