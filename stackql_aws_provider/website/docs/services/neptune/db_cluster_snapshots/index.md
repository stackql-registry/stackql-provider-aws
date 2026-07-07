--- 
title: db_cluster_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - db_cluster_snapshots
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

Creates, updates, deletes, gets or lists a <code>db_cluster_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_cluster_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune.db_cluster_snapshots" /></td></tr>
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
    <td><CopyableCode code="AllocatedStorage" /></td>
    <td><code>integer</code></td>
    <td>Specifies the allocated storage size in gibibytes (GiB).</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZones" /></td>
    <td><code>string</code></td>
    <td>Provides the list of EC2 Availability Zones that instances in the DB cluster snapshot can be restored in.</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterCreateTime" /></td>
    <td><code>string</code></td>
    <td>Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>Specifies the DB cluster identifier of the DB cluster that this DB cluster snapshot was created from.</td>
</tr>
<tr>
    <td><CopyableCode code="DBClusterSnapshotArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the DB cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="DBClusterSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot. After you restore a DB cluster using a DBClusterSnapshotIdentifier, you must specify the same DBClusterSnapshotIdentifier for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the DBClusterSnapshotIdentifier, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the snapshot specified by the DBClusterSnapshotIdentifier, and the original DB cluster is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the database engine.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>Provides the version of the database engine for this DB cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="IAMDatabaseAuthenticationEnabled" /></td>
    <td><code>boolean</code></td>
    <td>True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>If StorageEncrypted is true, the Amazon KMS key identifier for the encrypted DB cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseModel" /></td>
    <td><code>string</code></td>
    <td>Provides the license model information for this DB cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="MasterUsername" /></td>
    <td><code>string</code></td>
    <td>Not supported by Neptune.</td>
</tr>
<tr>
    <td><CopyableCode code="PercentProgress" /></td>
    <td><code>integer</code></td>
    <td>Specifies the percentage of the estimated data that has been transferred.</td>
</tr>
<tr>
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>Specifies the port that the DB cluster was listening on at the time of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotCreateTime" /></td>
    <td><code>string</code></td>
    <td>Provides the time when the snapshot was taken, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotType" /></td>
    <td><code>string</code></td>
    <td>Provides the type of the DB cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceDBClusterSnapshotArn" /></td>
    <td><code>string</code></td>
    <td>If the DB cluster snapshot was copied from a source DB cluster snapshot, the Amazon Resource Name (ARN) for the source DB cluster snapshot, otherwise, a null value.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Specifies the status of this DB cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageEncrypted" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the DB cluster snapshot is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageType" /></td>
    <td><code>string</code></td>
    <td>The storage type associated with the DB cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>Provides the VPC ID associated with the DB cluster snapshot.</td>
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
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-DBClusterSnapshotIdentifier"><code>DBClusterSnapshotIdentifier</code></a>, <a href="#parameter-SnapshotType"><code>SnapshotType</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-IncludeShared"><code>IncludeShared</code></a>, <a href="#parameter-IncludePublic"><code>IncludePublic</code></a></td>
    <td>Returns information about DB cluster snapshots. This API action supports pagination.</td>
</tr>
<tr>
    <td><a href="#create_db_cluster_snapshot"><CopyableCode code="create_db_cluster_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBClusterSnapshotIdentifier"><code>DBClusterSnapshotIdentifier</code></a>, <a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a snapshot of a DB cluster.</td>
</tr>
<tr>
    <td><a href="#delete_db_cluster_snapshot"><CopyableCode code="delete_db_cluster_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBClusterSnapshotIdentifier"><code>DBClusterSnapshotIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated. The DB cluster snapshot must be in the available state to be deleted.</td>
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
    <td>The identifier of the DB cluster to create a snapshot for. This parameter is not case-sensitive. Constraints: Must match the identifier of an existing DBCluster. Example: my-cluster1</td>
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
    <td>The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the DBClusterSnapshotIdentifier parameter. This parameter is not case-sensitive. Constraints: If supplied, must match the identifier of an existing DBCluster.</td>
</tr>
<tr id="parameter-DBClusterSnapshotIdentifier">
    <td><CopyableCode code="DBClusterSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>A specific DB cluster snapshot identifier to describe. This parameter can't be used in conjunction with the DBClusterIdentifier parameter. This value is stored as a lowercase string. Constraints: If supplied, must match the identifier of an existing DBClusterSnapshot. If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter is not currently supported.</td>
</tr>
<tr id="parameter-IncludePublic">
    <td><CopyableCode code="IncludePublic" /></td>
    <td><code>boolean</code></td>
    <td>True to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon account, and otherwise false. The default is false. The default is false. You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action.</td>
</tr>
<tr id="parameter-IncludeShared">
    <td><CopyableCode code="IncludeShared" /></td>
    <td><code>boolean</code></td>
    <td>True to include shared manual DB cluster snapshots from other Amazon accounts that this Amazon account has been given permission to copy or restore, and otherwise false. The default is false. You can give an Amazon account permission to restore a manual DB cluster snapshot from another Amazon account by the ModifyDBClusterSnapshotAttribute API action.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeDBClusterSnapshots request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-SnapshotType">
    <td><CopyableCode code="SnapshotType" /></td>
    <td><code>string</code></td>
    <td>The type of DB cluster snapshots to be returned. You can specify one of the following values: automated - Return all DB cluster snapshots that have been automatically taken by Amazon Neptune for my Amazon account. manual - Return all DB cluster snapshots that have been taken by my Amazon account. shared - Return all manual DB cluster snapshots that have been shared to my Amazon account. public - Return all DB cluster snapshots that have been marked as public. If you don't specify a SnapshotType value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by setting the IncludeShared parameter to true. You can include public DB cluster snapshots with these results by setting the IncludePublic parameter to true. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public.</td>
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

Returns information about DB cluster snapshots. This API action supports pagination.

```sql
SELECT
AllocatedStorage,
AvailabilityZones,
ClusterCreateTime,
DBClusterIdentifier,
DBClusterSnapshotArn,
DBClusterSnapshotIdentifier,
Engine,
EngineVersion,
IAMDatabaseAuthenticationEnabled,
KmsKeyId,
LicenseModel,
MasterUsername,
PercentProgress,
Port,
SnapshotCreateTime,
SnapshotType,
SourceDBClusterSnapshotArn,
Status,
StorageEncrypted,
StorageType,
VpcId
FROM aws.neptune.db_cluster_snapshots
WHERE region = '{{ region }}' -- required
AND DBClusterIdentifier = '{{ DBClusterIdentifier }}'
AND DBClusterSnapshotIdentifier = '{{ DBClusterSnapshotIdentifier }}'
AND SnapshotType = '{{ SnapshotType }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND IncludeShared = '{{ IncludeShared }}'
AND IncludePublic = '{{ IncludePublic }}'
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

Creates a snapshot of a DB cluster.

```sql
INSERT INTO aws.neptune.db_cluster_snapshots (
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
AllocatedStorage,
AvailabilityZones,
ClusterCreateTime,
DBClusterIdentifier,
DBClusterSnapshotArn,
DBClusterSnapshotIdentifier,
Engine,
EngineVersion,
IAMDatabaseAuthenticationEnabled,
KmsKeyId,
LicenseModel,
MasterUsername,
PercentProgress,
Port,
SnapshotCreateTime,
SnapshotType,
SourceDBClusterSnapshotArn,
Status,
StorageEncrypted,
StorageType,
VpcId
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

Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated. The DB cluster snapshot must be in the available state to be deleted.

```sql
DELETE FROM aws.neptune.db_cluster_snapshots
WHERE DBClusterSnapshotIdentifier = '{{ DBClusterSnapshotIdentifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
