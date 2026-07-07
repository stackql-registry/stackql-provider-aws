--- 
title: db_instance_automated_backups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_instance_automated_backups
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

Creates, updates, deletes, gets or lists a <code>db_instance_automated_backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_instance_automated_backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_instance_automated_backups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_instance_automated_backups"
    values={[
        { label: 'describe_db_instance_automated_backups', value: 'describe_db_instance_automated_backups' }
    ]}
>
<TabItem value="describe_db_instance_automated_backups">

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
    <td><CopyableCode code="AdditionalStorageVolumes" /></td>
    <td><code>string</code></td>
    <td>The additional storage volumes associated with the automated backup. Valid Values: GP3 | IO2</td>
</tr>
<tr>
    <td><CopyableCode code="AllocatedStorage" /></td>
    <td><code>integer</code></td>
    <td>The allocated storage size for the automated backup in gibibytes (GiB).</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone that the automated backup was created in. For information on Amazon Web Services Regions and Availability Zones, see Regions and Availability Zones.</td>
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
    <td><CopyableCode code="BackupTarget" /></td>
    <td><code>string</code></td>
    <td>The location where automated backups are stored: Dedicated Local Zones, Amazon Web Services Outposts or the Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="DBInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the automated backups.</td>
</tr>
<tr>
    <td><CopyableCode code="DBInstanceAutomatedBackupsArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the replicated automated backups.</td>
</tr>
<tr>
    <td><CopyableCode code="DBInstanceAutomatedBackupsReplications" /></td>
    <td><code>string</code></td>
    <td>The list of replications to different Amazon Web Services Regions associated with the automated backup.</td>
</tr>
<tr>
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="DbiResourceId" /></td>
    <td><code>string</code></td>
    <td>The resource ID for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="DedicatedLogVolume" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB instance has a dedicated log volume (DLV) enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="Encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the automated backup is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The name of the database engine for this automated backup.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the database engine for the automated backup.</td>
</tr>
<tr>
    <td><CopyableCode code="IAMDatabaseAuthenticationEnabled" /></td>
    <td><code>boolean</code></td>
    <td>True if mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceCreateTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the DB instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Iops" /></td>
    <td><code>integer</code></td>
    <td>The IOPS (I/O operations per second) value for the automated backup.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key ID for an automated backup. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseModel" /></td>
    <td><code>string</code></td>
    <td>The license model information for the automated backup.</td>
</tr>
<tr>
    <td><CopyableCode code="MasterUsername" /></td>
    <td><code>string</code></td>
    <td>The master user name of an automated backup.</td>
</tr>
<tr>
    <td><CopyableCode code="MultiTenant" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the automatic backup is for a DB instance in the multi-tenant configuration (TRUE) or the single-tenant configuration (FALSE).</td>
</tr>
<tr>
    <td><CopyableCode code="OptionGroupName" /></td>
    <td><code>string</code></td>
    <td>The option group the automated backup is associated with. If omitted, the default option group for the engine specified is used.</td>
</tr>
<tr>
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port number that the automated backup used for connections. Default: Inherits from the source DB instance Valid Values: 1150-65535</td>
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
    <td>The earliest and latest time a DB instance can be restored to.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>A list of status information for an automated backup: active - Automated backups for current instances. retained - Automated backups for deleted instances. creating - Automated backups that are waiting for the first automated snapshot to be available.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageEncryptionType" /></td>
    <td><code>string</code></td>
    <td>The type of encryption used to protect data at rest in the automated backup. Possible values: none - The automated backup is not encrypted. sse-rds - The automated backup is encrypted using an Amazon Web Services owned KMS key. sse-kms - The automated backup is encrypted using a customer managed KMS key or Amazon Web Services managed KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageThroughput" /></td>
    <td><code>integer</code></td>
    <td>The storage throughput for the automated backup.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageType" /></td>
    <td><code>string</code></td>
    <td>The storage type associated with the automated backup.</td>
</tr>
<tr>
    <td><CopyableCode code="TagList" /></td>
    <td><code>string</code></td>
    <td>A list of tags. For more information, see Tagging Amazon RDS resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS resources in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="TdeCredentialArn" /></td>
    <td><code>string</code></td>
    <td>The ARN from the key store with which the automated backup is associated for TDE encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="Timezone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the automated backup. In most cases, the Timezone element is empty. Timezone content appears only for Microsoft SQL Server DB instances that were created with a time zone specified.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The VPC ID associated with the DB instance.</td>
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
    <td><a href="#describe_db_instance_automated_backups"><CopyableCode code="describe_db_instance_automated_backups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DbiResourceId"><code>DbiResourceId</code></a>, <a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-DBInstanceAutomatedBackupsArn"><code>DBInstanceAutomatedBackupsArn</code></a></td>
    <td>Displays backups for both current and deleted instances. For example, use this operation to find details about automated backups for previously deleted instances. Current instances with retention periods greater than zero (0) are returned for both the DescribeDBInstanceAutomatedBackups and DescribeDBInstances operations. All parameters are optional.</td>
</tr>
<tr>
    <td><a href="#delete_db_instance_automated_backup"><CopyableCode code="delete_db_instance_automated_backup" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DbiResourceId"><code>DbiResourceId</code></a>, <a href="#parameter-DBInstanceAutomatedBackupsArn"><code>DBInstanceAutomatedBackupsArn</code></a></td>
    <td>Deletes automated backups using the DbiResourceId value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.</td>
</tr>
<tr>
    <td><a href="#start_db_instance_automated_backups_replication"><CopyableCode code="start_db_instance_automated_backups_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SourceDBInstanceArn"><code>SourceDBInstanceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-PreSignedUrl"><code>PreSignedUrl</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Enables replication of automated backups to a different Amazon Web Services Region. This command doesn't apply to RDS Custom. For more information, see Replicating Automated Backups to Another Amazon Web Services Region in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#stop_db_instance_automated_backups_replication"><CopyableCode code="stop_db_instance_automated_backups_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SourceDBInstanceArn"><code>SourceDBInstanceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops automated backup replication for a DB instance. This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For more information, see Replicating Automated Backups to Another Amazon Web Services Region in the Amazon RDS User Guide.</td>
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
<tr id="parameter-SourceDBInstanceArn">
    <td><CopyableCode code="SourceDBInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source DB instance for which to stop replicating automate backups, for example, arn:aws:rds:us-west-2:123456789012:db:mydatabase.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-BackupRetentionPeriod">
    <td><CopyableCode code="BackupRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The retention period for the replicated automated backups.</td>
</tr>
<tr id="parameter-DBInstanceAutomatedBackupsArn">
    <td><CopyableCode code="DBInstanceAutomatedBackupsArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the automated backups to delete, for example, arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE. This setting doesn't apply to RDS Custom.</td>
</tr>
<tr id="parameter-DBInstanceIdentifier">
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>(Optional) The user-supplied instance identifier. If this parameter is specified, it must match the identifier of an existing DB instance. It returns information from the specific DB instance's automated backup. This parameter isn't case-sensitive.</td>
</tr>
<tr id="parameter-DbiResourceId">
    <td><CopyableCode code="DbiResourceId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies which resources to return based on status. Supported filters are the following: status active - Automated backups for current instances. creating - Automated backups that are waiting for the first automated snapshot to be available. retained - Automated backups for deleted instances and after backup replication is stopped. db-instance-id - Accepts DB instance identifiers and Amazon Resource Names (ARNs). The results list includes only information about the DB instance automated backups identified by these ARNs. dbi-resource-id - Accepts DB resource identifiers and Amazon Resource Names (ARNs). The results list includes only information about the DB instance resources identified by these ARNs. Returns all resources by default. The status for each resource is specified in the response.</td>
</tr>
<tr id="parameter-KmsKeyId">
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key identifier for encryption of the replicated automated backups. The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination Amazon Web Services Region, for example, arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE.</td>
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
<tr id="parameter-PreSignedUrl">
    <td><CopyableCode code="PreSignedUrl" /></td>
    <td><code>string</code></td>
    <td>In an Amazon Web Services GovCloud (US) Region, an URL that contains a Signature Version 4 signed request for the StartDBInstanceAutomatedBackupsReplication operation to call in the Amazon Web Services Region of the source DB instance. The presigned URL must be a valid request for the StartDBInstanceAutomatedBackupsReplication API operation that can run in the Amazon Web Services Region that contains the source DB instance. This setting applies only to Amazon Web Services GovCloud (US) Regions. It's ignored in other Amazon Web Services Regions. To learn how to generate a Signature Version 4 signed request, see Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4) and Signature Version 4 Signing Process. If you are using an Amazon Web Services SDK tool or the CLI, you can specify SourceRegion (or --source-region for the CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags to associate with the replicated automated backups.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_instance_automated_backups"
    values={[
        { label: 'describe_db_instance_automated_backups', value: 'describe_db_instance_automated_backups' }
    ]}
>
<TabItem value="describe_db_instance_automated_backups">

Displays backups for both current and deleted instances. For example, use this operation to find details about automated backups for previously deleted instances. Current instances with retention periods greater than zero (0) are returned for both the DescribeDBInstanceAutomatedBackups and DescribeDBInstances operations. All parameters are optional.

```sql
SELECT
AdditionalStorageVolumes,
AllocatedStorage,
AvailabilityZone,
AwsBackupRecoveryPointArn,
BackupRetentionPeriod,
BackupTarget,
DBInstanceArn,
DBInstanceAutomatedBackupsArn,
DBInstanceAutomatedBackupsReplications,
DBInstanceIdentifier,
DbiResourceId,
DedicatedLogVolume,
Encrypted,
Engine,
EngineVersion,
IAMDatabaseAuthenticationEnabled,
InstanceCreateTime,
Iops,
KmsKeyId,
LicenseModel,
MasterUsername,
MultiTenant,
OptionGroupName,
Port,
PreferredBackupWindow,
Region,
RestoreWindow,
Status,
StorageEncryptionType,
StorageThroughput,
StorageType,
TagList,
TdeCredentialArn,
Timezone,
VpcId
FROM aws.rds.db_instance_automated_backups
WHERE region = '{{ region }}' -- required
AND DbiResourceId = '{{ DbiResourceId }}'
AND DBInstanceIdentifier = '{{ DBInstanceIdentifier }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND DBInstanceAutomatedBackupsArn = '{{ DBInstanceAutomatedBackupsArn }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_db_instance_automated_backup"
    values={[
        { label: 'delete_db_instance_automated_backup', value: 'delete_db_instance_automated_backup' }
    ]}
>
<TabItem value="delete_db_instance_automated_backup">

Deletes automated backups using the DbiResourceId value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.

```sql
DELETE FROM aws.rds.db_instance_automated_backups
WHERE region = '{{ region }}' --required
AND DbiResourceId = '{{ DbiResourceId }}'
AND DBInstanceAutomatedBackupsArn = '{{ DBInstanceAutomatedBackupsArn }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_db_instance_automated_backups_replication"
    values={[
        { label: 'start_db_instance_automated_backups_replication', value: 'start_db_instance_automated_backups_replication' },
        { label: 'stop_db_instance_automated_backups_replication', value: 'stop_db_instance_automated_backups_replication' }
    ]}
>
<TabItem value="start_db_instance_automated_backups_replication">

Enables replication of automated backups to a different Amazon Web Services Region. This command doesn't apply to RDS Custom. For more information, see Replicating Automated Backups to Another Amazon Web Services Region in the Amazon RDS User Guide.

```sql
EXEC aws.rds.db_instance_automated_backups.start_db_instance_automated_backups_replication 
@SourceDBInstanceArn='{{ SourceDBInstanceArn }}' --required, 
@region='{{ region }}' --required, 
@BackupRetentionPeriod='{{ BackupRetentionPeriod }}', 
@KmsKeyId='{{ KmsKeyId }}', 
@PreSignedUrl='{{ PreSignedUrl }}', 
@Tags='{{ Tags }}'
;
```
</TabItem>
<TabItem value="stop_db_instance_automated_backups_replication">

Stops automated backup replication for a DB instance. This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For more information, see Replicating Automated Backups to Another Amazon Web Services Region in the Amazon RDS User Guide.

```sql
EXEC aws.rds.db_instance_automated_backups.stop_db_instance_automated_backups_replication 
@SourceDBInstanceArn='{{ SourceDBInstanceArn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
