--- 
title: db_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - db_snapshots
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

Creates, updates, deletes, gets or lists a <code>db_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_snapshots"
    values={[
        { label: 'describe_db_snapshots', value: 'describe_db_snapshots' }
    ]}
>
<TabItem value="describe_db_snapshots">

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
    <td><CopyableCode code="additional_storage_volumes" /></td>
    <td><code>string</code></td>
    <td>The additional storage volumes associated with the DB snapshot. RDS supports additional storage volumes for RDS for Oracle and RDS for SQL Server.</td>
</tr>
<tr>
    <td><CopyableCode code="allocated_storage" /></td>
    <td><code>integer</code></td>
    <td>Specifies the allocated storage size in gibibytes (GiB).</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the Availability Zone the DB instance was located in at the time of the DB snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_retention_period" /></td>
    <td><code>integer</code></td>
    <td>The number of days for which automatic DB snapshots are retained.</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_identifier" /></td>
    <td><code>string</code></td>
    <td>Specifies the DB instance identifier of the DB instance this DB snapshot was created from.</td>
</tr>
<tr>
    <td><CopyableCode code="db_snapshot_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the DB snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="db_snapshot_identifier" /></td>
    <td><code>string</code></td>
    <td>Specifies the identifier for the DB snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="db_system_id" /></td>
    <td><code>string</code></td>
    <td>The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files. The Oracle SID is also the name of your CDB.</td>
</tr>
<tr>
    <td><CopyableCode code="dbi_resource_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_log_volume" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB instance has a dedicated log volume (DLV) enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB snapshot is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the database engine.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>Specifies the version of the database engine.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_database_authentication_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_create_time" /></td>
    <td><code>string</code></td>
    <td>Specifies the time in Coordinated Universal Time (UTC) when the DB instance, from which the snapshot was taken, was created.</td>
</tr>
<tr>
    <td><CopyableCode code="iops" /></td>
    <td><code>integer</code></td>
    <td>Specifies the Provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>If Encrypted is true, the Amazon Web Services KMS key identifier for the encrypted DB snapshot. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="license_model" /></td>
    <td><code>string</code></td>
    <td>License model information for the restored DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="master_username" /></td>
    <td><code>string</code></td>
    <td>Provides the master username for the DB snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_tenant" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the snapshot is of a DB instance using the multi-tenant configuration (TRUE) or the single-tenant configuration (FALSE).</td>
</tr>
<tr>
    <td><CopyableCode code="option_group_name" /></td>
    <td><code>string</code></td>
    <td>Provides the option group name for the DB snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="original_snapshot_create_time" /></td>
    <td><code>string</code></td>
    <td>Specifies the time of the CreateDBSnapshot operation in Coordinated Universal Time (UTC). Doesn't change when the snapshot is copied.</td>
</tr>
<tr>
    <td><CopyableCode code="percent_progress" /></td>
    <td><code>integer</code></td>
    <td>The percentage of the estimated data that has been transferred.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Specifies the port that the database engine was listening on at the time of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_backup_window" /></td>
    <td><code>string</code></td>
    <td>The daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.</td>
</tr>
<tr>
    <td><CopyableCode code="processor_features" /></td>
    <td><code>string</code></td>
    <td>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance when the DB snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_availability_zone" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the Availability Zone where RDS stores the DB snapshot. This value is valid only for snapshots that RDS stores on a Dedicated Local Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_create_time" /></td>
    <td><code>string</code></td>
    <td>Specifies when the snapshot was taken in Coordinated Universal Time (UTC). Changes for the copy when the snapshot is copied.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_database_time" /></td>
    <td><code>string</code></td>
    <td>The timestamp of the most recent transaction applied to the database that you're backing up. Thus, if you restore a snapshot, SnapshotDatabaseTime is the most recent transaction in the restored DB instance. In contrast, originalSnapshotCreateTime specifies the system time that the snapshot completed. If you back up a read replica, you can determine the replica lag by comparing SnapshotDatabaseTime with originalSnapshotCreateTime. For example, if originalSnapshotCreateTime is two hours later than SnapshotDatabaseTime, then the replica lag is two hours.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_target" /></td>
    <td><code>string</code></td>
    <td>Specifies where manual snapshots are stored: Dedicated Local Zones, Amazon Web Services Outposts or the Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_type" /></td>
    <td><code>string</code></td>
    <td>Provides the type of the DB snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="source_db_snapshot_identifier" /></td>
    <td><code>string</code></td>
    <td>The DB snapshot Amazon Resource Name (ARN) that the DB snapshot was copied from. It only has a value in the case of a cross-account or cross-Region copy.</td>
</tr>
<tr>
    <td><CopyableCode code="source_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region that the DB snapshot was created in or copied from.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Specifies the status of this DB snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_encryption_type" /></td>
    <td><code>string</code></td>
    <td>The type of encryption used to protect data at rest in the DB snapshot. Possible values: none - The DB snapshot is not encrypted. sse-rds - The DB snapshot is encrypted using an Amazon Web Services owned KMS key. sse-kms - The DB snapshot is encrypted using a customer managed KMS key or Amazon Web Services managed KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_throughput" /></td>
    <td><code>integer</code></td>
    <td>Specifies the storage throughput for the DB snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_type" /></td>
    <td><code>string</code></td>
    <td>Specifies the storage type associated with DB snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_list" /></td>
    <td><code>string</code></td>
    <td>A list of tags. For more information, see Tagging Amazon RDS resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS resources in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="tde_credential_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN from the key store with which to associate the instance for TDE encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="timezone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the DB snapshot. In most cases, the Timezone element is empty. Timezone content appears only for snapshots taken from Microsoft SQL Server DB instances that were created with a time zone specified.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>Provides the VPC ID associated with the DB snapshot.</td>
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
    <td><a href="#describe_db_snapshots"><CopyableCode code="describe_db_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-DBSnapshotIdentifier"><code>DBSnapshotIdentifier</code></a>, <a href="#parameter-SnapshotType"><code>SnapshotType</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-IncludeShared"><code>IncludeShared</code></a>, <a href="#parameter-IncludePublic"><code>IncludePublic</code></a>, <a href="#parameter-DbiResourceId"><code>DbiResourceId</code></a></td>
    <td>Returns information about DB snapshots. This API action supports pagination.</td>
</tr>
<tr>
    <td><a href="#create_db_snapshot"><CopyableCode code="create_db_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBSnapshotIdentifier"><code>DBSnapshotIdentifier</code></a>, <a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a snapshot of a DB instance. The source DB instance must be in the available or storage-optimization state.</td>
</tr>
<tr>
    <td><a href="#modify_db_snapshot"><CopyableCode code="modify_db_snapshot" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBSnapshotIdentifier"><code>DBSnapshotIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a></td>
    <td>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. Amazon RDS supports upgrading DB snapshots for MariaDB, MySQL, PostgreSQL, and Oracle. This operation doesn't apply to RDS Custom or RDS for Db2.</td>
</tr>
<tr>
    <td><a href="#delete_db_snapshot"><CopyableCode code="delete_db_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBSnapshotIdentifier"><code>DBSnapshotIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated. The DB snapshot must be in the available state to be deleted.</td>
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
<tr id="parameter-DBInstanceIdentifier">
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the DB instance that you want to create the snapshot of. Constraints: Must match the identifier of an existing DBInstance.</td>
</tr>
<tr id="parameter-DBSnapshotIdentifier">
    <td><CopyableCode code="DBSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The DB snapshot identifier. Constraints: Must be the name of an existing DB snapshot in the available state.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DBInstanceIdentifier">
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the DB instance to retrieve the list of DB snapshots for. This parameter isn't case-sensitive. Constraints: If supplied, must match the identifier of an existing DBInstance.</td>
</tr>
<tr id="parameter-DBSnapshotIdentifier">
    <td><CopyableCode code="DBSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>A specific DB snapshot identifier to describe. This value is stored as a lowercase string. Constraints: If supplied, must match the identifier of an existing DBSnapshot. If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified.</td>
</tr>
<tr id="parameter-DbiResourceId">
    <td><CopyableCode code="DbiResourceId" /></td>
    <td><code>string</code></td>
    <td>A specific DB resource ID to describe.</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The engine version to upgrade the DB snapshot to. The following are the database engines and engine versions that are available when you upgrade a DB snapshot. MariaDB For the list of engine versions that are available for upgrading a DB snapshot, see Upgrading a MariaDB DB snapshot engine version in the Amazon RDS User Guide. MySQL For the list of engine versions that are available for upgrading a DB snapshot, see Upgrading a MySQL DB snapshot engine version in the Amazon RDS User Guide. Oracle 21.0.0.0.ru-2025-04.rur-2025-04.r1 (supported for 21.0.0.0.ru-2022-01.rur-2022-01.r1, 21.0.0.0.ru-2022-04.rur-2022-04.r1, 21.0.0.0.ru-2022-07.rur-2022-07.r1, 21.0.0.0.ru-2022-10.rur-2022-10.r1, 21.0.0.0.ru-2023-01.rur-2023-01.r1 and 21.0.0.0.ru-2023-01.rur-2023-01.r2 DB snapshots) 19.0.0.0.ru-2025-04.rur-2025-04.r1 (supported for 19.0.0.0.ru-2019-07.rur-2019-07.r1, 19.0.0.0.ru-2019-10.rur-2019-10.r1 and 0.0.0.ru-2020-01.rur-2020-01.r1 DB snapshots) 19.0.0.0.ru-2022-01.rur-2022-01.r1 (supported for 12.2.0.1 DB snapshots) 19.0.0.0.ru-2022-07.rur-2022-07.r1 (supported for 12.1.0.2 DB snapshots) 12.1.0.2.v8 (supported for 12.1.0.1 DB snapshots) 11.2.0.4.v12 (supported for 11.2.0.2 DB snapshots) 11.2.0.4.v11 (supported for 11.2.0.3 DB snapshots) PostgreSQL For the list of engine versions that are available for upgrading a DB snapshot, see Upgrading a PostgreSQL DB snapshot engine version in the Amazon RDS User Guide.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more DB snapshots to describe. Supported filters: db-instance-id - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs). db-snapshot-id - Accepts DB snapshot identifiers. dbi-resource-id - Accepts identifiers of source DB instances. snapshot-type - Accepts types of DB snapshots. engine - Accepts names of database engines.</td>
</tr>
<tr id="parameter-IncludePublic">
    <td><CopyableCode code="IncludePublic" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API. This setting doesn't apply to RDS Custom.</td>
</tr>
<tr id="parameter-IncludeShared">
    <td><CopyableCode code="IncludeShared" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included. You can give an Amazon Web Services account permission to restore a manual DB snapshot from another Amazon Web Services account by using the ModifyDBSnapshotAttribute API action. This setting doesn't apply to RDS Custom.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeDBSnapshots request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-OptionGroupName">
    <td><CopyableCode code="OptionGroupName" /></td>
    <td><code>string</code></td>
    <td>The option group to identify with the upgraded DB snapshot. You can specify this parameter when you upgrade an Oracle DB snapshot. The same option group considerations apply when upgrading a DB snapshot as when upgrading a DB instance. For more information, see Option group considerations in the Amazon RDS User Guide.</td>
</tr>
<tr id="parameter-SnapshotType">
    <td><CopyableCode code="SnapshotType" /></td>
    <td><code>string</code></td>
    <td>The type of snapshots to be returned. You can specify one of the following values: automated - Return all DB snapshots that have been automatically taken by Amazon RDS for my Amazon Web Services account. manual - Return all DB snapshots that have been taken by my Amazon Web Services account. shared - Return all manual DB snapshots that have been shared to my Amazon Web Services account. public - Return all DB snapshots that have been marked as public. awsbackup - Return the DB snapshots managed by the Amazon Web Services Backup service. For information about Amazon Web Services Backup, see the Amazon Web Services Backup Developer Guide. The awsbackup type does not apply to Aurora. If you don't specify a SnapshotType value, then both automated and manual snapshots are returned. Shared and public DB snapshots are not included in the returned results by default. You can include shared snapshots with these results by enabling the IncludeShared parameter. You can include public snapshots with these results by enabling the IncludePublic parameter. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_snapshots"
    values={[
        { label: 'describe_db_snapshots', value: 'describe_db_snapshots' }
    ]}
>
<TabItem value="describe_db_snapshots">

Returns information about DB snapshots. This API action supports pagination.

```sql
SELECT
additional_storage_volumes,
allocated_storage,
availability_zone,
backup_retention_period,
db_instance_identifier,
db_snapshot_arn,
db_snapshot_identifier,
db_system_id,
dbi_resource_id,
dedicated_log_volume,
encrypted,
engine,
engine_version,
iam_database_authentication_enabled,
instance_create_time,
iops,
kms_key_id,
license_model,
master_username,
multi_tenant,
option_group_name,
original_snapshot_create_time,
percent_progress,
port,
preferred_backup_window,
processor_features,
snapshot_availability_zone,
snapshot_create_time,
snapshot_database_time,
snapshot_target,
snapshot_type,
source_db_snapshot_identifier,
source_region,
status,
storage_encryption_type,
storage_throughput,
storage_type,
tag_list,
tde_credential_arn,
timezone,
vpc_id
FROM aws.rds.db_snapshots
WHERE region = '{{ region }}' -- required
AND DBInstanceIdentifier = '{{ DBInstanceIdentifier }}'
AND DBSnapshotIdentifier = '{{ DBSnapshotIdentifier }}'
AND SnapshotType = '{{ SnapshotType }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND IncludeShared = '{{ IncludeShared }}'
AND IncludePublic = '{{ IncludePublic }}'
AND DbiResourceId = '{{ DbiResourceId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_db_snapshot"
    values={[
        { label: 'create_db_snapshot', value: 'create_db_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_db_snapshot">

Creates a snapshot of a DB instance. The source DB instance must be in the available or storage-optimization state.

```sql
INSERT INTO aws.rds.db_snapshots (
DBSnapshotIdentifier,
DBInstanceIdentifier,
region,
Tags
)
SELECT 
'{{ DBSnapshotIdentifier }}',
'{{ DBInstanceIdentifier }}',
'{{ region }}',
'{{ Tags }}'
RETURNING
additional_storage_volumes,
allocated_storage,
availability_zone,
backup_retention_period,
db_instance_identifier,
db_snapshot_arn,
db_snapshot_identifier,
db_system_id,
dbi_resource_id,
dedicated_log_volume,
encrypted,
engine,
engine_version,
iam_database_authentication_enabled,
instance_create_time,
iops,
kms_key_id,
license_model,
master_username,
multi_tenant,
option_group_name,
original_snapshot_create_time,
percent_progress,
port,
preferred_backup_window,
processor_features,
snapshot_availability_zone,
snapshot_create_time,
snapshot_database_time,
snapshot_target,
snapshot_type,
source_db_snapshot_identifier,
source_region,
status,
storage_encryption_type,
storage_throughput,
storage_type,
tag_list,
tde_credential_arn,
timezone,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_snapshots
  props:
    - name: DBSnapshotIdentifier
      value: "{{ DBSnapshotIdentifier }}"
      description: Required parameter for the db_snapshots resource.
    - name: DBInstanceIdentifier
      value: "{{ DBInstanceIdentifier }}"
      description: Required parameter for the db_snapshots resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_snapshots resource.
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_db_snapshot"
    values={[
        { label: 'modify_db_snapshot', value: 'modify_db_snapshot' }
    ]}
>
<TabItem value="modify_db_snapshot">

Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. Amazon RDS supports upgrading DB snapshots for MariaDB, MySQL, PostgreSQL, and Oracle. This operation doesn't apply to RDS Custom or RDS for Db2.

```sql
UPDATE aws.rds.db_snapshots
SET 
-- No updatable properties
WHERE 
DBSnapshotIdentifier = '{{ DBSnapshotIdentifier }}' --required
AND region = '{{ region }}' --required
AND EngineVersion = '{{ EngineVersion}}'
AND OptionGroupName = '{{ OptionGroupName}}'
RETURNING
additional_storage_volumes,
allocated_storage,
availability_zone,
backup_retention_period,
db_instance_identifier,
db_snapshot_arn,
db_snapshot_identifier,
db_system_id,
dbi_resource_id,
dedicated_log_volume,
encrypted,
engine,
engine_version,
iam_database_authentication_enabled,
instance_create_time,
iops,
kms_key_id,
license_model,
master_username,
multi_tenant,
option_group_name,
original_snapshot_create_time,
percent_progress,
port,
preferred_backup_window,
processor_features,
snapshot_availability_zone,
snapshot_create_time,
snapshot_database_time,
snapshot_target,
snapshot_type,
source_db_snapshot_identifier,
source_region,
status,
storage_encryption_type,
storage_throughput,
storage_type,
tag_list,
tde_credential_arn,
timezone,
vpc_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_db_snapshot"
    values={[
        { label: 'delete_db_snapshot', value: 'delete_db_snapshot' }
    ]}
>
<TabItem value="delete_db_snapshot">

Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated. The DB snapshot must be in the available state to be deleted.

```sql
DELETE FROM aws.rds.db_snapshots
WHERE DBSnapshotIdentifier = '{{ DBSnapshotIdentifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
