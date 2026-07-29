--- 
title: db_cluster_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - db_cluster_snapshots
  - rds
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

Creates, updates, deletes, gets or lists a <code>db_cluster_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_cluster_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_cluster_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_cluster_snapshots"
    values={[
        { label: 'describe_db_cluster_snapshots', value: 'describe_db_cluster_snapshots' }
    ]}
>
<TabItem value="describe_db_cluster_snapshots">

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
    <td><CopyableCode code="allocated_storage" /></td>
    <td><code>integer</code></td>
    <td>The allocated storage size of the DB cluster snapshot in gibibytes (GiB).</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>string</code></td>
    <td>The list of Availability Zones (AZs) where instances in the DB cluster snapshot can be restored.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_retention_period" /></td>
    <td><code>integer</code></td>
    <td>The number of days for which automatic DB snapshots are retained.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_create_time" /></td>
    <td><code>string</code></td>
    <td>The time when the DB cluster was created, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>The DB cluster identifier of the DB cluster that this DB cluster snapshot was created from.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_snapshot_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the DB cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_snapshot_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the DB cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="db_system_id" /></td>
    <td><code>string</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_resource_id" /></td>
    <td><code>string</code></td>
    <td>The resource ID of the DB cluster that this DB cluster snapshot was created from.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The name of the database engine for this DB cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_mode" /></td>
    <td><code>string</code></td>
    <td>The engine mode of the database engine for this DB cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>The version of the database engine for this DB cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_database_authentication_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>If StorageEncrypted is true, the Amazon Web Services KMS key identifier for the encrypted DB cluster snapshot. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="license_model" /></td>
    <td><code>string</code></td>
    <td>The license model information for this DB cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="master_username" /></td>
    <td><code>string</code></td>
    <td>The master username for this DB cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="percent_progress" /></td>
    <td><code>integer</code></td>
    <td>The percentage of the estimated data that has been transferred.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port that the DB cluster was listening on at the time of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_backup_window" /></td>
    <td><code>string</code></td>
    <td>The daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_create_time" /></td>
    <td><code>string</code></td>
    <td>The time when the snapshot was taken, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_type" /></td>
    <td><code>string</code></td>
    <td>The type of the DB cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="source_db_cluster_snapshot_arn" /></td>
    <td><code>string</code></td>
    <td>If the DB cluster snapshot was copied from a source DB cluster snapshot, the Amazon Resource Name (ARN) for the source DB cluster snapshot, otherwise, a null value.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of this DB cluster snapshot. Valid statuses are the following: available copying creating</td>
</tr>
<tr>
    <td><CopyableCode code="storage_encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB cluster snapshot is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_encryption_type" /></td>
    <td><code>string</code></td>
    <td>The type of encryption used to protect data at rest in the DB cluster snapshot. Possible values: none - The DB cluster snapshot is not encrypted. sse-rds - The DB cluster snapshot is encrypted using an Amazon Web Services owned KMS key. sse-kms - The DB cluster snapshot is encrypted using a customer managed KMS key or Amazon Web Services managed KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_throughput" /></td>
    <td><code>integer</code></td>
    <td>The storage throughput for the DB cluster snapshot. The throughput is automatically set based on the IOPS that you provision, and is not configurable. This setting is only for non-Aurora Multi-AZ DB clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_type" /></td>
    <td><code>string</code></td>
    <td>The storage type associated with the DB cluster snapshot. This setting is only for Aurora DB clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_list" /></td>
    <td><code>string</code></td>
    <td>A list of tags. For more information, see Tagging Amazon RDS resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS resources in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The VPC ID associated with the DB cluster snapshot.</td>
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
    <td><a href="#describe_db_cluster_snapshots"><CopyableCode code="describe_db_cluster_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-DBClusterSnapshotIdentifier"><code>DBClusterSnapshotIdentifier</code></a>, <a href="#parameter-SnapshotType"><code>SnapshotType</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-IncludeShared"><code>IncludeShared</code></a>, <a href="#parameter-IncludePublic"><code>IncludePublic</code></a>, <a href="#parameter-DbClusterResourceId"><code>DbClusterResourceId</code></a></td>
    <td>Returns information about DB cluster snapshots. This API action supports pagination. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#create_db_cluster_snapshot"><CopyableCode code="create_db_cluster_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBClusterSnapshotIdentifier"><code>DBClusterSnapshotIdentifier</code></a>, <a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a snapshot of a DB cluster. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_db_cluster_snapshot"><CopyableCode code="delete_db_cluster_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBClusterSnapshotIdentifier"><code>DBClusterSnapshotIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated. The DB cluster snapshot must be in the available state to be deleted. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
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
<tr id="parameter-DBClusterIdentifier">
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the DB cluster to create a snapshot for. This parameter isn't case-sensitive. Constraints: Must match the identifier of an existing DBCluster. Example: my-cluster1</td>
</tr>
<tr id="parameter-DBClusterSnapshotIdentifier">
    <td><CopyableCode code="DBClusterSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the DB cluster snapshot to delete. Constraints: Must be the name of an existing DB cluster snapshot in the available state.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DBClusterIdentifier">
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the DBClusterSnapshotIdentifier parameter. This parameter isn't case-sensitive. Constraints: If supplied, must match the identifier of an existing DBCluster.</td>
</tr>
<tr id="parameter-DBClusterSnapshotIdentifier">
    <td><CopyableCode code="DBClusterSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>A specific DB cluster snapshot identifier to describe. This parameter can't be used in conjunction with the DBClusterIdentifier parameter. This value is stored as a lowercase string. Constraints: If supplied, must match the identifier of an existing DBClusterSnapshot. If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified.</td>
</tr>
<tr id="parameter-DbClusterResourceId">
    <td><CopyableCode code="DbClusterResourceId" /></td>
    <td><code>string</code></td>
    <td>A specific DB cluster resource ID to describe.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more DB cluster snapshots to describe. Supported filters: db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). db-cluster-snapshot-id - Accepts DB cluster snapshot identifiers. snapshot-type - Accepts types of DB cluster snapshots. engine - Accepts names of database engines.</td>
</tr>
<tr id="parameter-IncludePublic">
    <td><CopyableCode code="IncludePublic" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included. You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action.</td>
</tr>
<tr id="parameter-IncludeShared">
    <td><CopyableCode code="IncludeShared" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included. You can give an Amazon Web Services account permission to restore a manual DB cluster snapshot from another Amazon Web Services account by the ModifyDBClusterSnapshotAttribute API action.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeDBClusterSnapshots request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-SnapshotType">
    <td><CopyableCode code="SnapshotType" /></td>
    <td><code>string</code></td>
    <td>The type of DB cluster snapshots to be returned. You can specify one of the following values: automated - Return all DB cluster snapshots that have been automatically taken by Amazon RDS for my Amazon Web Services account. manual - Return all DB cluster snapshots that have been taken by my Amazon Web Services account. shared - Return all manual DB cluster snapshots that have been shared to my Amazon Web Services account. public - Return all DB cluster snapshots that have been marked as public. If you don't specify a SnapshotType value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by enabling the IncludeShared parameter. You can include public DB cluster snapshots with these results by enabling the IncludePublic parameter. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to be assigned to the DB cluster snapshot.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_cluster_snapshots"
    values={[
        { label: 'describe_db_cluster_snapshots', value: 'describe_db_cluster_snapshots' }
    ]}
>
<TabItem value="describe_db_cluster_snapshots">

Returns information about DB cluster snapshots. This API action supports pagination. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
SELECT
allocated_storage,
availability_zones,
backup_retention_period,
cluster_create_time,
db_cluster_identifier,
db_cluster_snapshot_arn,
db_cluster_snapshot_identifier,
db_system_id,
db_cluster_resource_id,
engine,
engine_mode,
engine_version,
iam_database_authentication_enabled,
kms_key_id,
license_model,
master_username,
percent_progress,
port,
preferred_backup_window,
snapshot_create_time,
snapshot_type,
source_db_cluster_snapshot_arn,
status,
storage_encrypted,
storage_encryption_type,
storage_throughput,
storage_type,
tag_list,
vpc_id
FROM aws.rds.db_cluster_snapshots
WHERE region = '{{ region }}' -- required
AND DBClusterIdentifier = '{{ DBClusterIdentifier }}'
AND DBClusterSnapshotIdentifier = '{{ DBClusterSnapshotIdentifier }}'
AND SnapshotType = '{{ SnapshotType }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND IncludeShared = '{{ IncludeShared }}'
AND IncludePublic = '{{ IncludePublic }}'
AND DbClusterResourceId = '{{ DbClusterResourceId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_db_cluster_snapshot"
    values={[
        { label: 'create_db_cluster_snapshot', value: 'create_db_cluster_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_db_cluster_snapshot">

Creates a snapshot of a DB cluster. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
INSERT INTO aws.rds.db_cluster_snapshots (
DBClusterSnapshotIdentifier,
DBClusterIdentifier,
region,
Tags
)
SELECT 
'{{ DBClusterSnapshotIdentifier }}',
'{{ DBClusterIdentifier }}',
'{{ region }}',
'{{ Tags }}'
RETURNING
allocated_storage,
availability_zones,
backup_retention_period,
cluster_create_time,
db_cluster_identifier,
db_cluster_snapshot_arn,
db_cluster_snapshot_identifier,
db_system_id,
db_cluster_resource_id,
engine,
engine_mode,
engine_version,
iam_database_authentication_enabled,
kms_key_id,
license_model,
master_username,
percent_progress,
port,
preferred_backup_window,
snapshot_create_time,
snapshot_type,
source_db_cluster_snapshot_arn,
status,
storage_encrypted,
storage_encryption_type,
storage_throughput,
storage_type,
tag_list,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_cluster_snapshots
  props:
    - name: DBClusterSnapshotIdentifier
      value: "{{ DBClusterSnapshotIdentifier }}"
      description: Required parameter for the db_cluster_snapshots resource.
    - name: DBClusterIdentifier
      value: "{{ DBClusterIdentifier }}"
      description: Required parameter for the db_cluster_snapshots resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_cluster_snapshots resource.
    - name: Tags
      value: "{{ Tags }}"
      description: The tags to be assigned to the DB cluster snapshot.
      description: The tags to be assigned to the DB cluster snapshot.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_db_cluster_snapshot"
    values={[
        { label: 'delete_db_cluster_snapshot', value: 'delete_db_cluster_snapshot' }
    ]}
>
<TabItem value="delete_db_cluster_snapshot">

Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated. The DB cluster snapshot must be in the available state to be deleted. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
DELETE FROM aws.rds.db_cluster_snapshots
WHERE DBClusterSnapshotIdentifier = '{{ DBClusterSnapshotIdentifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
