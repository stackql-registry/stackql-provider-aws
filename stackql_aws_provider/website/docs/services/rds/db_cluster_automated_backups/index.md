--- 
title: db_cluster_automated_backups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_cluster_automated_backups
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

Creates, updates, deletes, gets or lists a <code>db_cluster_automated_backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_cluster_automated_backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_cluster_automated_backups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_cluster_automated_backups"
    values={[
        { label: 'describe_db_cluster_automated_backups', value: 'describe_db_cluster_automated_backups' }
    ]}
>
<TabItem value="describe_db_cluster_automated_backups">

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
    <td>For all database engines except Amazon Aurora, AllocatedStorage specifies the allocated storage size in gibibytes (GiB). For Aurora, AllocatedStorage always returns 1, because Aurora DB cluster storage size isn't fixed, but instead automatically adjusts as needed.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZones" /></td>
    <td><code>string</code></td>
    <td>The Availability Zones where instances in the DB cluster can be created. For information on Amazon Web Services Regions and Availability Zones, see Regions and Availability Zones.</td>
</tr>
<tr>
    <td><CopyableCode code="AwsBackupRecoveryPointArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The retention period for the automated backups.</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterCreateTime" /></td>
    <td><code>string</code></td>
    <td>The time when the DB cluster was created, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="DBClusterArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the source DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="DBClusterAutomatedBackupsArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the automated backups.</td>
</tr>
<tr>
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the source DB cluster, which can't be changed and which is unique to an Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="DbClusterResourceId" /></td>
    <td><code>string</code></td>
    <td>The resource ID for the source DB cluster, which can't be changed and which is unique to an Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The name of the database engine for this automated backup.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineMode" /></td>
    <td><code>string</code></td>
    <td>The engine mode of the database engine for the automated backup.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the database engine for the automated backup.</td>
</tr>
<tr>
    <td><CopyableCode code="IAMDatabaseAuthenticationEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="Iops" /></td>
    <td><code>integer</code></td>
    <td>The IOPS (I/O operations per second) value for the automated backup. This setting is only for non-Aurora Multi-AZ DB clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key ID for an automated backup. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseModel" /></td>
    <td><code>string</code></td>
    <td>The license model information for this DB cluster automated backup.</td>
</tr>
<tr>
    <td><CopyableCode code="MasterUsername" /></td>
    <td><code>string</code></td>
    <td>The master user name of the automated backup.</td>
</tr>
<tr>
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port number that the automated backup used for connections. Default: Inherits from the source DB cluster Valid Values: 1150-65535</td>
</tr>
<tr>
    <td><CopyableCode code="PreferredBackupWindow" /></td>
    <td><code>string</code></td>
    <td>The daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.</td>
</tr>
<tr>
    <td><CopyableCode code="Region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region associated with the automated backup.</td>
</tr>
<tr>
    <td><CopyableCode code="RestoreWindow" /></td>
    <td><code>string</code></td>
    <td>Earliest and latest time an instance can be restored to:</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>A list of status information for an automated backup: retained - Automated backups for deleted clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageEncrypted" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the source DB cluster is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageEncryptionType" /></td>
    <td><code>string</code></td>
    <td>The type of encryption used to protect data at rest in the automated backup. Possible values: none - The automated backup is not encrypted. sse-rds - The automated backup is encrypted using an Amazon Web Services owned KMS key. sse-kms - The automated backup is encrypted using a customer managed KMS key or Amazon Web Services managed KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageThroughput" /></td>
    <td><code>integer</code></td>
    <td>The storage throughput for the automated backup. The throughput is automatically set based on the IOPS that you provision, and is not configurable. This setting is only for non-Aurora Multi-AZ DB clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageType" /></td>
    <td><code>string</code></td>
    <td>The storage type associated with the DB cluster. This setting is only for non-Aurora Multi-AZ DB clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="TagList" /></td>
    <td><code>string</code></td>
    <td>A list of tags. For more information, see Tagging Amazon RDS resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS resources in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The VPC ID associated with the DB cluster.</td>
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
    <td><a href="#describe_db_cluster_automated_backups"><CopyableCode code="describe_db_cluster_automated_backups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DbClusterResourceId"><code>DbClusterResourceId</code></a>, <a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Displays backups for both current and deleted DB clusters. For example, use this operation to find details about automated backups for previously deleted clusters. Current clusters are returned for both the DescribeDBClusterAutomatedBackups and DescribeDBClusters operations. All parameters are optional.</td>
</tr>
<tr>
    <td><a href="#delete_db_cluster_automated_backup"><CopyableCode code="delete_db_cluster_automated_backup" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DbClusterResourceId"><code>DbClusterResourceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes automated backups using the DbClusterResourceId value of the source DB cluster or the Amazon Resource Name (ARN) of the automated backups.</td>
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
<tr id="parameter-DbClusterResourceId">
    <td><CopyableCode code="DbClusterResourceId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the source DB cluster, which can't be changed and which is unique to an Amazon Web Services Region.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DBClusterIdentifier">
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>(Optional) The user-supplied DB cluster identifier. If this parameter is specified, it must match the identifier of an existing DB cluster. It returns information from the specific DB cluster's automated backup. This parameter isn't case-sensitive.</td>
</tr>
<tr id="parameter-DbClusterResourceId">
    <td><CopyableCode code="DbClusterResourceId" /></td>
    <td><code>string</code></td>
    <td>The resource ID of the DB cluster that is the source of the automated backup. This parameter isn't case-sensitive.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies which resources to return based on status. Supported filters are the following: status retained - Automated backups for deleted clusters and after backup replication is stopped. db-cluster-id - Accepts DB cluster identifiers and Amazon Resource Names (ARNs). The results list includes only information about the DB cluster automated backups identified by these ARNs. db-cluster-resource-id - Accepts DB resource identifiers and Amazon Resource Names (ARNs). The results list includes only information about the DB cluster resources identified by these ARNs. Returns all resources by default. The status for each resource is specified in the response.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The pagination token provided in the previous request. If this parameter is specified the response includes only records beyond the marker, up to MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_cluster_automated_backups"
    values={[
        { label: 'describe_db_cluster_automated_backups', value: 'describe_db_cluster_automated_backups' }
    ]}
>
<TabItem value="describe_db_cluster_automated_backups">

Displays backups for both current and deleted DB clusters. For example, use this operation to find details about automated backups for previously deleted clusters. Current clusters are returned for both the DescribeDBClusterAutomatedBackups and DescribeDBClusters operations. All parameters are optional.

```sql
SELECT
AllocatedStorage,
AvailabilityZones,
AwsBackupRecoveryPointArn,
BackupRetentionPeriod,
ClusterCreateTime,
DBClusterArn,
DBClusterAutomatedBackupsArn,
DBClusterIdentifier,
DbClusterResourceId,
Engine,
EngineMode,
EngineVersion,
IAMDatabaseAuthenticationEnabled,
Iops,
KmsKeyId,
LicenseModel,
MasterUsername,
Port,
PreferredBackupWindow,
Region,
RestoreWindow,
Status,
StorageEncrypted,
StorageEncryptionType,
StorageThroughput,
StorageType,
TagList,
VpcId
FROM aws.rds.db_cluster_automated_backups
WHERE region = '{{ region }}' -- required
AND DbClusterResourceId = '{{ DbClusterResourceId }}'
AND DBClusterIdentifier = '{{ DBClusterIdentifier }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_db_cluster_automated_backup"
    values={[
        { label: 'delete_db_cluster_automated_backup', value: 'delete_db_cluster_automated_backup' }
    ]}
>
<TabItem value="delete_db_cluster_automated_backup">

Deletes automated backups using the DbClusterResourceId value of the source DB cluster or the Amazon Resource Name (ARN) of the automated backups.

```sql
DELETE FROM aws.rds.db_cluster_automated_backups
WHERE DbClusterResourceId = '{{ DbClusterResourceId }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
