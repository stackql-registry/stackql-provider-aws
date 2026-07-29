--- 
title: db_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - db_clusters
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

Creates, updates, deletes, gets or lists a <code>db_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune.db_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_clusters"
    values={[
        { label: 'describe_db_clusters', value: 'describe_db_clusters' }
    ]}
>
<TabItem value="describe_db_clusters">

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
    <td>AllocatedStorage always returns 1, because Neptune DB cluster storage size is not fixed, but instead automatically adjusts as needed.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_roles" /></td>
    <td><code>string</code></td>
    <td>Provides a list of the Amazon Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon services on your behalf.</td>
</tr>
<tr>
    <td><CopyableCode code="automatic_restart_time" /></td>
    <td><code>string</code></td>
    <td>Time at which the DB cluster will be automatically restarted.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>string</code></td>
    <td>Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_retention_period" /></td>
    <td><code>integer</code></td>
    <td>Specifies the number of days for which automatic DB snapshots are retained.</td>
</tr>
<tr>
    <td><CopyableCode code="character_set_name" /></td>
    <td><code>string</code></td>
    <td>Not supported by Neptune.</td>
</tr>
<tr>
    <td><CopyableCode code="clone_group_id" /></td>
    <td><code>string</code></td>
    <td>Identifies the clone group to which the DB cluster is associated.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_create_time" /></td>
    <td><code>string</code></td>
    <td>Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="copy_tags_to_snapshot" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, tags are copied to any snapshot of the DB cluster that is created.</td>
</tr>
<tr>
    <td><CopyableCode code="cross_account_clone" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, the DB cluster can be cloned across accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_members" /></td>
    <td><code>string</code></td>
    <td>Provides the list of instances that make up the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_option_group_memberships" /></td>
    <td><code>string</code></td>
    <td>Not supported by Neptune.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_parameter_group" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the DB cluster parameter group for the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_subnet_group" /></td>
    <td><code>string</code></td>
    <td>Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>Contains the name of the initial database of this DB cluster that was provided at create time, if one was specified when the DB cluster was created. This same name is returned for the life of the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_resource_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Region-unique, immutable identifier for the DB cluster. This identifier is found in Amazon CloudTrail log entries whenever the Amazon KMS key for the DB cluster is accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether or not the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="earliest_restorable_time" /></td>
    <td><code>string</code></td>
    <td>Specifies the earliest time to which a database can be restored with point-in-time restore.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_cloudwatch_logs_exports" /></td>
    <td><code>string</code></td>
    <td>A list of the log types that this DB cluster is configured to export to CloudWatch Logs. Valid log types are: audit (to publish audit logs to CloudWatch) and slowquery (to publish slow-query logs to CloudWatch). See Publishing Neptune logs to Amazon CloudWatch logs.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Specifies the connection endpoint for the primary instance of the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>Provides the name of the database engine to be used for this DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>Indicates the database engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="global_cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>Contains a user-supplied global database cluster identifier. This identifier is the unique key that identifies a global database.</td>
</tr>
<tr>
    <td><CopyableCode code="hosted_zone_id" /></td>
    <td><code>string</code></td>
    <td>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_database_authentication_enabled" /></td>
    <td><code>boolean</code></td>
    <td>True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</td>
</tr>
<tr>
    <td><CopyableCode code="io_optimized_next_allowed_modification_time" /></td>
    <td><code>string</code></td>
    <td>The next time you can modify the DB cluster to use the iopt1 storage type.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>If StorageEncrypted is true, the Amazon KMS key identifier for the encrypted DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_restorable_time" /></td>
    <td><code>string</code></td>
    <td>Specifies the latest time to which a database can be restored with point-in-time restore.</td>
</tr>
<tr>
    <td><CopyableCode code="master_username" /></td>
    <td><code>string</code></td>
    <td>Not supported by Neptune.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_az" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the DB cluster has instances in multiple Availability Zones.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_modified_values" /></td>
    <td><code>string</code></td>
    <td>This data type is used as a response element in the ModifyDBCluster operation and contains changes that will be applied during the next maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="percent_progress" /></td>
    <td><code>string</code></td>
    <td>Specifies the progress of the operation as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Specifies the port that the database engine is listening on.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_backup_window" /></td>
    <td><code>string</code></td>
    <td>Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_maintenance_window" /></td>
    <td><code>string</code></td>
    <td>Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="read_replica_identifiers" /></td>
    <td><code>string</code></td>
    <td>Contains one or more identifiers of the Read Replicas associated with this DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="reader_endpoint" /></td>
    <td><code>string</code></td>
    <td>The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load-balances connections across the Read Replicas that are available in a DB cluster. As clients request new connections to the reader endpoint, Neptune distributes the connection requests among the Read Replicas in the DB cluster. This functionality can help balance your read workload across multiple Read Replicas in your DB cluster. If a failover occurs, and the Read Replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Read Replicas in the cluster, you can then reconnect to the reader endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_source_identifier" /></td>
    <td><code>string</code></td>
    <td>Not supported by Neptune.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_v2_scaling_configuration" /></td>
    <td><code>string</code></td>
    <td>Shows the scaling configuration for a Neptune Serverless DB cluster. For more information, see Using Amazon Neptune Serverless in the Amazon Neptune User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Specifies the current state of this DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the DB cluster is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_type" /></td>
    <td><code>string</code></td>
    <td>The storage type used by the DB cluster. Valid Values: standard – ( the default ) Provides cost-effective database storage for applications with moderate to small I/O usage. iopt1 – Enables I/O-Optimized storage that's designed to meet the needs of I/O-intensive graph workloads that require predictable pricing with low I/O latency and consistent I/O throughput. Neptune I/O-Optimized storage is only available starting with engine release 1.3.0.0.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_security_groups" /></td>
    <td><code>string</code></td>
    <td>Provides a list of VPC security groups that the DB cluster belongs to.</td>
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
    <td><a href="#describe_db_clusters"><CopyableCode code="describe_db_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns information about provisioned DB clusters, and supports pagination. This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</td>
</tr>
<tr>
    <td><a href="#create_db_cluster"><CopyableCode code="create_db_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityZones"><code>AvailabilityZones</code></a>, <a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-CharacterSetName"><code>CharacterSetName</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-MasterUsername"><code>MasterUsername</code></a>, <a href="#parameter-MasterUserPassword"><code>MasterUserPassword</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-ReplicationSourceIdentifier"><code>ReplicationSourceIdentifier</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-StorageEncrypted"><code>StorageEncrypted</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-PreSignedUrl"><code>PreSignedUrl</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-EnableCloudwatchLogsExports"><code>EnableCloudwatchLogsExports</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-ServerlessV2ScalingConfiguration"><code>ServerlessV2ScalingConfiguration</code></a>, <a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a></td>
    <td>Creates a new Amazon Neptune DB cluster. You can use the ReplicationSourceIdentifier parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance. Note that when you create a new cluster using CreateDBCluster directly, deletion protection is disabled by default (when you create a new production cluster in the console, deletion protection is enabled by default). You can only delete a DB cluster if its DeletionProtection field is set to false.</td>
</tr>
<tr>
    <td><a href="#add_role_to_db_cluster"><CopyableCode code="add_role_to_db_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-FeatureName"><code>FeatureName</code></a></td>
    <td>Associates an Identity and Access Management (IAM) role with an Neptune DB cluster.</td>
</tr>
<tr>
    <td><a href="#modify_db_cluster"><CopyableCode code="modify_db_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NewDBClusterIdentifier"><code>NewDBClusterIdentifier</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a>, <a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-MasterUserPassword"><code>MasterUserPassword</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-CloudwatchLogsExportConfiguration"><code>CloudwatchLogsExportConfiguration</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-AllowMajorVersionUpgrade"><code>AllowMajorVersionUpgrade</code></a>, <a href="#parameter-DBInstanceParameterGroupName"><code>DBInstanceParameterGroupName</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-ServerlessV2ScalingConfiguration"><code>ServerlessV2ScalingConfiguration</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a></td>
    <td>Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.</td>
</tr>
<tr>
    <td><a href="#delete_db_cluster"><CopyableCode code="delete_db_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SkipFinalSnapshot"><code>SkipFinalSnapshot</code></a>, <a href="#parameter-FinalDBSnapshotIdentifier"><code>FinalDBSnapshotIdentifier</code></a></td>
    <td>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted. Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its DeletionProtection field to False.</td>
</tr>
<tr>
    <td><a href="#copy_db_cluster_snapshot"><CopyableCode code="copy_db_cluster_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SourceDBClusterSnapshotIdentifier"><code>SourceDBClusterSnapshotIdentifier</code></a>, <a href="#parameter-TargetDBClusterSnapshotIdentifier"><code>TargetDBClusterSnapshotIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-PreSignedUrl"><code>PreSignedUrl</code></a>, <a href="#parameter-CopyTags"><code>CopyTags</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Copies a snapshot of a DB cluster. To copy a DB cluster snapshot from a shared manual DB cluster snapshot, SourceDBClusterSnapshotIdentifier must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</td>
</tr>
<tr>
    <td><a href="#promote_read_replica_db_cluster"><CopyableCode code="promote_read_replica_db_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Not supported.</td>
</tr>
<tr>
    <td><a href="#remove_role_from_db_cluster"><CopyableCode code="remove_role_from_db_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-FeatureName"><code>FeatureName</code></a></td>
    <td>Disassociates an Identity and Access Management (IAM) role from a DB cluster.</td>
</tr>
<tr>
    <td><a href="#restore_db_cluster_from_snapshot"><CopyableCode code="restore_db_cluster_from_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-SnapshotIdentifier"><code>SnapshotIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityZones"><code>AvailabilityZones</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-EnableCloudwatchLogsExports"><code>EnableCloudwatchLogsExports</code></a>, <a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-ServerlessV2ScalingConfiguration"><code>ServerlessV2ScalingConfiguration</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a></td>
    <td>Creates a new DB cluster from a DB snapshot or DB cluster snapshot. If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group. If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</td>
</tr>
<tr>
    <td><a href="#restore_db_cluster_to_point_in_time"><CopyableCode code="restore_db_cluster_to_point_in_time" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-SourceDBClusterIdentifier"><code>SourceDBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RestoreType"><code>RestoreType</code></a>, <a href="#parameter-RestoreToTime"><code>RestoreToTime</code></a>, <a href="#parameter-UseLatestRestorableTime"><code>UseLatestRestorableTime</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-EnableCloudwatchLogsExports"><code>EnableCloudwatchLogsExports</code></a>, <a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-ServerlessV2ScalingConfiguration"><code>ServerlessV2ScalingConfiguration</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a></td>
    <td>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before LatestRestorableTime for up to BackupRetentionPeriod days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group. This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the CreateDBInstance action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in DBClusterIdentifier. You can create DB instances only after the RestoreDBClusterToPointInTime action has completed and the DB cluster is available.</td>
</tr>
<tr>
    <td><a href="#start_db_cluster"><CopyableCode code="start_db_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts an Amazon Neptune DB cluster that was stopped using the Amazon console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.</td>
</tr>
<tr>
    <td><a href="#stop_db_cluster"><CopyableCode code="stop_db_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups. Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</td>
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
    <td>The DB cluster identifier of the Neptune DB cluster to be stopped. This parameter is stored as a lowercase string.</td>
</tr>
<tr id="parameter-RoleArn">
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB cluster, for example arn:aws:iam::123456789012:role/NeptuneAccessRole.</td>
</tr>
<tr id="parameter-SnapshotIdentifier">
    <td><CopyableCode code="SnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the DB snapshot or DB cluster snapshot to restore from. You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot. Constraints: Must match the identifier of an existing Snapshot.</td>
</tr>
<tr id="parameter-SourceDBClusterIdentifier">
    <td><CopyableCode code="SourceDBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the source DB cluster from which to restore. Constraints: Must match the identifier of an existing DBCluster.</td>
</tr>
<tr id="parameter-SourceDBClusterSnapshotIdentifier">
    <td><CopyableCode code="SourceDBClusterSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the DB cluster snapshot to copy. This parameter is not case-sensitive. If the source DB cluster snapshot is in a different region or owned by another account, specify the snapshot ARN. Constraints: Must specify a valid system snapshot in the "available" state. Specify a valid DB snapshot identifier. Example: my-cluster-snapshot1</td>
</tr>
<tr id="parameter-TargetDBClusterSnapshotIdentifier">
    <td><CopyableCode code="TargetDBClusterSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter is not case-sensitive. Constraints: Must contain from 1 to 63 letters, numbers, or hyphens. First character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens. Example: my-cluster-snapshot2</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AllowMajorVersionUpgrade">
    <td><CopyableCode code="AllowMajorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates whether upgrades between different major versions are allowed. Constraints: You must set the allow-major-version-upgrade flag when providing an EngineVersion parameter that uses a different major version than the DB cluster's current version.</td>
</tr>
<tr id="parameter-ApplyImmediately">
    <td><CopyableCode code="ApplyImmediately" /></td>
    <td><code>boolean</code></td>
    <td>A value that specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB cluster. If this parameter is set to false, changes to the DB cluster are applied during the next maintenance window. The ApplyImmediately parameter only affects NewDBClusterIdentifier values. If you set the ApplyImmediately parameter value to false, then changes to NewDBClusterIdentifier values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the ApplyImmediately parameter. Default: false</td>
</tr>
<tr id="parameter-AvailabilityZones">
    <td><CopyableCode code="AvailabilityZones" /></td>
    <td><code>array</code></td>
    <td>Provides the list of EC2 Availability Zones that instances in the restored DB cluster can be created in.</td>
</tr>
<tr id="parameter-BackupRetentionPeriod">
    <td><CopyableCode code="BackupRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The number of days for which automated backups are retained. You must specify a minimum value of 1. Default: 1 Constraints: Must be a value from 1 to 35</td>
</tr>
<tr id="parameter-CharacterSetName">
    <td><CopyableCode code="CharacterSetName" /></td>
    <td><code>string</code></td>
    <td>(Not supported by Neptune)</td>
</tr>
<tr id="parameter-CloudwatchLogsExportConfiguration">
    <td><CopyableCode code="CloudwatchLogsExportConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster. See Using the CLI to publish Neptune audit logs to CloudWatch Logs.</td>
</tr>
<tr id="parameter-CopyTags">
    <td><CopyableCode code="CopyTags" /></td>
    <td><code>boolean</code></td>
    <td>True to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot, and otherwise false. The default is false.</td>
</tr>
<tr id="parameter-CopyTagsToSnapshot">
    <td><CopyableCode code="CopyTagsToSnapshot" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, tags are copied to any snapshot of the restored DB cluster that is created.</td>
</tr>
<tr id="parameter-DBClusterIdentifier">
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive. Constraints: If supplied, must match an existing DBClusterIdentifier.</td>
</tr>
<tr id="parameter-DBClusterParameterGroupName">
    <td><CopyableCode code="DBClusterParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the DB cluster parameter group to associate with the new DB cluster. Constraints: If supplied, must match the name of an existing DBClusterParameterGroup.</td>
</tr>
<tr id="parameter-DBInstanceParameterGroupName">
    <td><CopyableCode code="DBInstanceParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the DB parameter group to apply to all instances of the DB cluster. When you apply a parameter group using DBInstanceParameterGroupName, parameter changes aren't applied during the next maintenance window but instead are applied immediately. Default: The existing name setting Constraints: The DB parameter group must be in the same DB parameter group family as the target DB cluster version. The DBInstanceParameterGroupName parameter is only valid in combination with the AllowMajorVersionUpgrade parameter.</td>
</tr>
<tr id="parameter-DBSubnetGroupName">
    <td><CopyableCode code="DBSubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The DB subnet group name to use for the new DB cluster. Constraints: If supplied, must match the name of an existing DBSubnetGroup. Example: mySubnetgroup</td>
</tr>
<tr id="parameter-DatabaseName">
    <td><CopyableCode code="DatabaseName" /></td>
    <td><code>string</code></td>
    <td>Not supported.</td>
</tr>
<tr id="parameter-DeletionProtection">
    <td><CopyableCode code="DeletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.</td>
</tr>
<tr id="parameter-EnableCloudwatchLogsExports">
    <td><CopyableCode code="EnableCloudwatchLogsExports" /></td>
    <td><code>array</code></td>
    <td>The list of logs that the restored DB cluster is to export to CloudWatch Logs.</td>
</tr>
<tr id="parameter-EnableIAMDatabaseAuthentication">
    <td><CopyableCode code="EnableIAMDatabaseAuthentication" /></td>
    <td><code>boolean</code></td>
    <td>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false. Default: false</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The database engine to use for the new DB cluster. Default: The same as source Constraint: Must be compatible with the engine of the source</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the database engine to use for the new DB cluster.</td>
</tr>
<tr id="parameter-FeatureName">
    <td><CopyableCode code="FeatureName" /></td>
    <td><code>string</code></td>
    <td>The name of the feature for the DB cluster that the IAM role is to be disassociated from. For the list of supported feature names, see DescribeDBEngineVersions.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more DB clusters to describe. Supported filters: db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB clusters identified by these ARNs. engine - Accepts an engine name (such as neptune), and restricts the results list to DB clusters created by that engine. For example, to invoke this API from the Amazon CLI and filter so that only Neptune DB clusters are returned, you could use the following command:</td>
</tr>
<tr id="parameter-FinalDBSnapshotIdentifier">
    <td><CopyableCode code="FinalDBSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The DB cluster snapshot identifier of the new DB cluster snapshot created when SkipFinalSnapshot is set to false. Specifying this parameter and also setting the SkipFinalSnapshot parameter to true results in an error. Constraints: Must be 1 to 255 letters, numbers, or hyphens. First character must be a letter Cannot end with a hyphen or contain two consecutive hyphens</td>
</tr>
<tr id="parameter-GlobalClusterIdentifier">
    <td><CopyableCode code="GlobalClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the Neptune global database to which this new DB cluster should be added.</td>
</tr>
<tr id="parameter-KmsKeyId">
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key. You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different than the KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key identified by the KmsKeyId parameter. If you do not specify a value for the KmsKeyId parameter, then the following will occur: If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster. If the DB cluster is not encrypted, then the restored DB cluster is not encrypted. If DBClusterIdentifier refers to a DB cluster that is not encrypted, then the restore request is rejected.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeDBClusters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MasterUserPassword">
    <td><CopyableCode code="MasterUserPassword" /></td>
    <td><code>string</code></td>
    <td>Not supported by Neptune.</td>
</tr>
<tr id="parameter-MasterUsername">
    <td><CopyableCode code="MasterUsername" /></td>
    <td><code>string</code></td>
    <td>Not supported by Neptune.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-NewDBClusterIdentifier">
    <td><CopyableCode code="NewDBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string. Constraints: Must contain from 1 to 63 letters, numbers, or hyphens The first character must be a letter Cannot end with a hyphen or contain two consecutive hyphens Example: my-cluster2</td>
</tr>
<tr id="parameter-OptionGroupName">
    <td><CopyableCode code="OptionGroupName" /></td>
    <td><code>string</code></td>
    <td>(Not supported by Neptune)</td>
</tr>
<tr id="parameter-Port">
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port number on which the new DB cluster accepts connections. Constraints: Value must be 1150-65535 Default: The same port as the original DB cluster.</td>
</tr>
<tr id="parameter-PreSignedUrl">
    <td><CopyableCode code="PreSignedUrl" /></td>
    <td><code>string</code></td>
    <td>Not currently supported.</td>
</tr>
<tr id="parameter-PreferredBackupWindow">
    <td><CopyableCode code="PreferredBackupWindow" /></td>
    <td><code>string</code></td>
    <td>The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region. Constraints: Must be in the format hh24:mi-hh24:mi. Must be in Universal Coordinated Time (UTC). Must not conflict with the preferred maintenance window. Must be at least 30 minutes.</td>
</tr>
<tr id="parameter-PreferredMaintenanceWindow">
    <td><CopyableCode code="PreferredMaintenanceWindow" /></td>
    <td><code>string</code></td>
    <td>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window.</td>
</tr>
<tr id="parameter-ReplicationSourceIdentifier">
    <td><CopyableCode code="ReplicationSourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.</td>
</tr>
<tr id="parameter-RestoreToTime">
    <td><CopyableCode code="RestoreToTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time to restore the DB cluster to. Valid Values: Value must be a time in Universal Coordinated Time (UTC) format Constraints: Must be before the latest restorable time for the DB instance Must be specified if UseLatestRestorableTime parameter is not provided Cannot be specified if UseLatestRestorableTime parameter is true Cannot be specified if RestoreType parameter is copy-on-write Example: 2015-03-07T23:45:00Z</td>
</tr>
<tr id="parameter-RestoreType">
    <td><CopyableCode code="RestoreType" /></td>
    <td><code>string</code></td>
    <td>The type of restore to be performed. You can specify one of the following values: full-copy - The new DB cluster is restored as a full copy of the source DB cluster. copy-on-write - The new DB cluster is restored as a clone of the source DB cluster. If you don't specify a RestoreType value, then the new DB cluster is restored as a full copy of the source DB cluster.</td>
</tr>
<tr id="parameter-ServerlessV2ScalingConfiguration">
    <td><CopyableCode code="ServerlessV2ScalingConfiguration" /></td>
    <td><code>object</code></td>
    <td>Contains the scaling configuration of a Neptune Serverless DB cluster. For more information, see Using Amazon Neptune Serverless in the Amazon Neptune User Guide.</td>
</tr>
<tr id="parameter-SkipFinalSnapshot">
    <td><CopyableCode code="SkipFinalSnapshot" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether a final DB cluster snapshot is created before the DB cluster is deleted. If true is specified, no DB cluster snapshot is created. If false is specified, a DB cluster snapshot is created before the DB cluster is deleted. You must specify a FinalDBSnapshotIdentifier parameter if SkipFinalSnapshot is false. Default: false</td>
</tr>
<tr id="parameter-StorageEncrypted">
    <td><CopyableCode code="StorageEncrypted" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the DB cluster is encrypted.</td>
</tr>
<tr id="parameter-StorageType">
    <td><CopyableCode code="StorageType" /></td>
    <td><code>string</code></td>
    <td>Specifies the storage type to be associated with the DB cluster. Valid values: standard, iopt1 Default: standard</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to be applied to the restored DB cluster.</td>
</tr>
<tr id="parameter-UseLatestRestorableTime">
    <td><CopyableCode code="UseLatestRestorableTime" /></td>
    <td><code>boolean</code></td>
    <td>A value that is set to true to restore the DB cluster to the latest restorable backup time, and false otherwise. Default: false Constraints: Cannot be specified if RestoreToTime parameter is provided.</td>
</tr>
<tr id="parameter-VpcSecurityGroupIds">
    <td><CopyableCode code="VpcSecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>A list of VPC security groups that the new DB cluster belongs to.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_clusters"
    values={[
        { label: 'describe_db_clusters', value: 'describe_db_clusters' }
    ]}
>
<TabItem value="describe_db_clusters">

Returns information about provisioned DB clusters, and supports pagination. This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.

```sql
SELECT
allocated_storage,
associated_roles,
automatic_restart_time,
availability_zones,
backup_retention_period,
character_set_name,
clone_group_id,
cluster_create_time,
copy_tags_to_snapshot,
cross_account_clone,
db_cluster_arn,
db_cluster_identifier,
db_cluster_members,
db_cluster_option_group_memberships,
db_cluster_parameter_group,
db_subnet_group,
database_name,
db_cluster_resource_id,
deletion_protection,
earliest_restorable_time,
enabled_cloudwatch_logs_exports,
endpoint,
engine,
engine_version,
global_cluster_identifier,
hosted_zone_id,
iam_database_authentication_enabled,
io_optimized_next_allowed_modification_time,
kms_key_id,
latest_restorable_time,
master_username,
multi_az,
pending_modified_values,
percent_progress,
port,
preferred_backup_window,
preferred_maintenance_window,
read_replica_identifiers,
reader_endpoint,
replication_source_identifier,
serverless_v2_scaling_configuration,
status,
storage_encrypted,
storage_type,
vpc_security_groups
FROM aws.neptune.db_clusters
WHERE region = '{{ region }}' -- required
AND DBClusterIdentifier = '{{ DBClusterIdentifier }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_db_cluster"
    values={[
        { label: 'create_db_cluster', value: 'create_db_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_db_cluster">

Creates a new Amazon Neptune DB cluster. You can use the ReplicationSourceIdentifier parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance. Note that when you create a new cluster using CreateDBCluster directly, deletion protection is disabled by default (when you create a new production cluster in the console, deletion protection is enabled by default). You can only delete a DB cluster if its DeletionProtection field is set to false.

```sql
INSERT INTO aws.neptune.db_clusters (
DBClusterIdentifier,
region,
AvailabilityZones,
BackupRetentionPeriod,
CharacterSetName,
CopyTagsToSnapshot,
DatabaseName,
DBClusterParameterGroupName,
VpcSecurityGroupIds,
DBSubnetGroupName,
Engine,
EngineVersion,
Port,
MasterUsername,
MasterUserPassword,
OptionGroupName,
PreferredBackupWindow,
PreferredMaintenanceWindow,
ReplicationSourceIdentifier,
Tags,
StorageEncrypted,
KmsKeyId,
PreSignedUrl,
EnableIAMDatabaseAuthentication,
EnableCloudwatchLogsExports,
DeletionProtection,
ServerlessV2ScalingConfiguration,
GlobalClusterIdentifier,
StorageType
)
SELECT 
'{{ DBClusterIdentifier }}',
'{{ region }}',
'{{ AvailabilityZones }}',
'{{ BackupRetentionPeriod }}',
'{{ CharacterSetName }}',
'{{ CopyTagsToSnapshot }}',
'{{ DatabaseName }}',
'{{ DBClusterParameterGroupName }}',
'{{ VpcSecurityGroupIds }}',
'{{ DBSubnetGroupName }}',
'{{ Engine }}',
'{{ EngineVersion }}',
'{{ Port }}',
'{{ MasterUsername }}',
'{{ MasterUserPassword }}',
'{{ OptionGroupName }}',
'{{ PreferredBackupWindow }}',
'{{ PreferredMaintenanceWindow }}',
'{{ ReplicationSourceIdentifier }}',
'{{ Tags }}',
'{{ StorageEncrypted }}',
'{{ KmsKeyId }}',
'{{ PreSignedUrl }}',
'{{ EnableIAMDatabaseAuthentication }}',
'{{ EnableCloudwatchLogsExports }}',
'{{ DeletionProtection }}',
'{{ ServerlessV2ScalingConfiguration }}',
'{{ GlobalClusterIdentifier }}',
'{{ StorageType }}'
RETURNING
allocated_storage,
associated_roles,
automatic_restart_time,
availability_zones,
backup_retention_period,
character_set_name,
clone_group_id,
cluster_create_time,
copy_tags_to_snapshot,
cross_account_clone,
db_cluster_arn,
db_cluster_identifier,
db_cluster_members,
db_cluster_option_group_memberships,
db_cluster_parameter_group,
db_subnet_group,
database_name,
db_cluster_resource_id,
deletion_protection,
earliest_restorable_time,
enabled_cloudwatch_logs_exports,
endpoint,
engine,
engine_version,
global_cluster_identifier,
hosted_zone_id,
iam_database_authentication_enabled,
io_optimized_next_allowed_modification_time,
kms_key_id,
latest_restorable_time,
master_username,
multi_az,
pending_modified_values,
percent_progress,
port,
preferred_backup_window,
preferred_maintenance_window,
read_replica_identifiers,
reader_endpoint,
replication_source_identifier,
serverless_v2_scaling_configuration,
status,
storage_encrypted,
storage_type,
vpc_security_groups
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_clusters
  props:
    - name: DBClusterIdentifier
      value: "{{ DBClusterIdentifier }}"
      description: Required parameter for the db_clusters resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_clusters resource.
    - name: AvailabilityZones
      value: "{{ AvailabilityZones }}"
      description: A list of EC2 Availability Zones that instances in the DB cluster can be created in.
      description: A list of EC2 Availability Zones that instances in the DB cluster can be created in.
    - name: BackupRetentionPeriod
      value: {{ BackupRetentionPeriod }}
      description: The number of days for which automated backups are retained. You must specify a minimum value of 1. Default: 1 Constraints: Must be a value from 1 to 35
      description: The number of days for which automated backups are retained. You must specify a minimum value of 1. Default: 1 Constraints: Must be a value from 1 to 35
    - name: CharacterSetName
      value: "{{ CharacterSetName }}"
      description: (Not supported by Neptune)
      description: (Not supported by Neptune)
    - name: CopyTagsToSnapshot
      value: {{ CopyTagsToSnapshot }}
      description: If set to true, tags are copied to any snapshot of the DB cluster that is created.
      description: If set to true, tags are copied to any snapshot of the DB cluster that is created.
    - name: DatabaseName
      value: "{{ DatabaseName }}"
      description: The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon Neptune will not create a database in the DB cluster you are creating.
      description: The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon Neptune will not create a database in the DB cluster you are creating.
    - name: DBClusterParameterGroupName
      value: "{{ DBClusterParameterGroupName }}"
      description: The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default is used. Constraints: If supplied, must match the name of an existing DBClusterParameterGroup.
      description: The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default is used. Constraints: If supplied, must match the name of an existing DBClusterParameterGroup.
    - name: VpcSecurityGroupIds
      value: "{{ VpcSecurityGroupIds }}"
      description: A list of EC2 VPC security groups to associate with this DB cluster.
      description: A list of EC2 VPC security groups to associate with this DB cluster.
    - name: DBSubnetGroupName
      value: "{{ DBSubnetGroupName }}"
      description: A DB subnet group to associate with this DB cluster. Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mySubnetgroup
      description: A DB subnet group to associate with this DB cluster. Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mySubnetgroup
    - name: Engine
      value: "{{ Engine }}"
      description: The name of the database engine to be used for this DB cluster. Valid Values: neptune
      description: The name of the database engine to be used for this DB cluster. Valid Values: neptune
    - name: EngineVersion
      value: "{{ EngineVersion }}"
      description: The version number of the database engine to use for the new DB cluster. Example: 1.2.1.0
      description: The version number of the database engine to use for the new DB cluster. Example: 1.2.1.0
    - name: Port
      value: {{ Port }}
      description: The port number on which the instances in the DB cluster accept connections. Default: 8182
      description: The port number on which the instances in the DB cluster accept connections. Default: 8182
    - name: MasterUsername
      value: "{{ MasterUsername }}"
      description: Not supported by Neptune.
      description: Not supported by Neptune.
    - name: MasterUserPassword
      value: "{{ MasterUserPassword }}"
      description: Not supported by Neptune.
      description: Not supported by Neptune.
    - name: OptionGroupName
      value: "{{ OptionGroupName }}"
      description: (Not supported by Neptune)
      description: (Not supported by Neptune)
    - name: PreferredBackupWindow
      value: "{{ PreferredBackupWindow }}"
      description: The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region. To see the time blocks available, see Neptune Maintenance Window in the Amazon Neptune User Guide. Constraints: Must be in the format hh24:mi-hh24:mi. Must be in Universal Coordinated Time (UTC). Must not conflict with the preferred maintenance window. Must be at least 30 minutes.
      description: The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region. To see the time blocks available, see Neptune Maintenance Window in the Amazon Neptune User Guide. Constraints: Must be in the format hh24:mi-hh24:mi. Must be in Universal Coordinated Time (UTC). Must not conflict with the preferred maintenance window. Must be at least 30 minutes.
    - name: PreferredMaintenanceWindow
      value: "{{ PreferredMaintenanceWindow }}"
      description: The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week. To see the time blocks available, see Neptune Maintenance Window in the Amazon Neptune User Guide. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window.
      description: The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week. To see the time blocks available, see Neptune Maintenance Window in the Amazon Neptune User Guide. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window.
    - name: ReplicationSourceIdentifier
      value: "{{ ReplicationSourceIdentifier }}"
      description: The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.
      description: The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.
    - name: Tags
      value: "{{ Tags }}"
      description: The tags to assign to the new DB cluster.
      description: The tags to assign to the new DB cluster.
    - name: StorageEncrypted
      value: {{ StorageEncrypted }}
      description: Specifies whether the DB cluster is encrypted.
      description: Specifies whether the DB cluster is encrypted.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: The Amazon KMS key identifier for an encrypted DB cluster. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key. If an encryption key is not specified in KmsKeyId: If ReplicationSourceIdentifier identifies an encrypted source, then Amazon Neptune will use the encryption key used to encrypt the source. Otherwise, Amazon Neptune will use your default encryption key. If the StorageEncrypted parameter is true and ReplicationSourceIdentifier is not specified, then Amazon Neptune will use your default encryption key. Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region. If you create a Read Replica of an encrypted DB cluster in another Amazon Region, you must set KmsKeyId to a KMS key ID that is valid in the destination Amazon Region. This key is used to encrypt the Read Replica in that Amazon Region.
      description: The Amazon KMS key identifier for an encrypted DB cluster. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key. If an encryption key is not specified in KmsKeyId: If ReplicationSourceIdentifier identifies an encrypted source, then Amazon Neptune will use the encryption key used to encrypt the source. Otherwise, Amazon Neptune will use your default encryption key. If the StorageEncrypted parameter is true and ReplicationSourceIdentifier is not specified, then Amazon Neptune will use your default encryption key. Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region. If you create a Read Replica of an encrypted DB cluster in another Amazon Region, you must set KmsKeyId to a KMS key ID that is valid in the destination Amazon Region. This key is used to encrypt the Read Replica in that Amazon Region.
    - name: PreSignedUrl
      value: "{{ PreSignedUrl }}"
      description: This parameter is not currently supported.
      description: This parameter is not currently supported.
    - name: EnableIAMDatabaseAuthentication
      value: {{ EnableIAMDatabaseAuthentication }}
      description: If set to true, enables Amazon Identity and Access Management (IAM) authentication for the entire DB cluster (this cannot be set at an instance level). Default: false.
      description: If set to true, enables Amazon Identity and Access Management (IAM) authentication for the entire DB cluster (this cannot be set at an instance level). Default: false.
    - name: EnableCloudwatchLogsExports
      value: "{{ EnableCloudwatchLogsExports }}"
      description: A list of the log types that this DB cluster should export to CloudWatch Logs. Valid log types are: audit (to publish audit logs) and slowquery (to publish slow-query logs). See Publishing Neptune logs to Amazon CloudWatch logs.
      description: A list of the log types that this DB cluster should export to CloudWatch Logs. Valid log types are: audit (to publish audit logs) and slowquery (to publish slow-query logs). See Publishing Neptune logs to Amazon CloudWatch logs.
    - name: DeletionProtection
      value: {{ DeletionProtection }}
      description: A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is enabled.
      description: A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is enabled.
    - name: ServerlessV2ScalingConfiguration
      value: "{{ ServerlessV2ScalingConfiguration }}"
      description: Contains the scaling configuration of a Neptune Serverless DB cluster. For more information, see Using Amazon Neptune Serverless in the Amazon Neptune User Guide.
      description: Contains the scaling configuration of a Neptune Serverless DB cluster. For more information, see Using Amazon Neptune Serverless in the Amazon Neptune User Guide.
    - name: GlobalClusterIdentifier
      value: "{{ GlobalClusterIdentifier }}"
      description: The ID of the Neptune global database to which this new DB cluster should be added.
      description: The ID of the Neptune global database to which this new DB cluster should be added.
    - name: StorageType
      value: "{{ StorageType }}"
      description: The storage type for the new DB cluster. Valid Values: standard – ( the default ) Configures cost-effective database storage for applications with moderate to small I/O usage. When set to standard, the storage type is not returned in the response. iopt1 – Enables I/O-Optimized storage that's designed to meet the needs of I/O-intensive graph workloads that require predictable pricing with low I/O latency and consistent I/O throughput. Neptune I/O-Optimized storage is only available starting with engine release 1.3.0.0.
      description: The storage type for the new DB cluster. Valid Values: standard – ( the default ) Configures cost-effective database storage for applications with moderate to small I/O usage. When set to standard, the storage type is not returned in the response. iopt1 – Enables I/O-Optimized storage that's designed to meet the needs of I/O-intensive graph workloads that require predictable pricing with low I/O latency and consistent I/O throughput. Neptune I/O-Optimized storage is only available starting with engine release 1.3.0.0.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_role_to_db_cluster"
    values={[
        { label: 'add_role_to_db_cluster', value: 'add_role_to_db_cluster' },
        { label: 'modify_db_cluster', value: 'modify_db_cluster' }
    ]}
>
<TabItem value="add_role_to_db_cluster">

Associates an Identity and Access Management (IAM) role with an Neptune DB cluster.

```sql
UPDATE aws.neptune.db_clusters
SET 
-- No updatable properties
WHERE 
DBClusterIdentifier = '{{ DBClusterIdentifier }}' --required
AND RoleArn = '{{ RoleArn }}' --required
AND region = '{{ region }}' --required
AND FeatureName = '{{ FeatureName}}';
```
</TabItem>
<TabItem value="modify_db_cluster">

Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

```sql
UPDATE aws.neptune.db_clusters
SET 
-- No updatable properties
WHERE 
DBClusterIdentifier = '{{ DBClusterIdentifier }}' --required
AND region = '{{ region }}' --required
AND NewDBClusterIdentifier = '{{ NewDBClusterIdentifier}}'
AND ApplyImmediately = {{ ApplyImmediately}}
AND BackupRetentionPeriod = '{{ BackupRetentionPeriod}}'
AND DBClusterParameterGroupName = '{{ DBClusterParameterGroupName}}'
AND VpcSecurityGroupIds = '{{ VpcSecurityGroupIds}}'
AND Port = '{{ Port}}'
AND MasterUserPassword = '{{ MasterUserPassword}}'
AND OptionGroupName = '{{ OptionGroupName}}'
AND PreferredBackupWindow = '{{ PreferredBackupWindow}}'
AND PreferredMaintenanceWindow = '{{ PreferredMaintenanceWindow}}'
AND EnableIAMDatabaseAuthentication = {{ EnableIAMDatabaseAuthentication}}
AND CloudwatchLogsExportConfiguration = '{{ CloudwatchLogsExportConfiguration}}'
AND EngineVersion = '{{ EngineVersion}}'
AND AllowMajorVersionUpgrade = {{ AllowMajorVersionUpgrade}}
AND DBInstanceParameterGroupName = '{{ DBInstanceParameterGroupName}}'
AND DeletionProtection = {{ DeletionProtection}}
AND CopyTagsToSnapshot = {{ CopyTagsToSnapshot}}
AND ServerlessV2ScalingConfiguration = '{{ ServerlessV2ScalingConfiguration}}'
AND StorageType = '{{ StorageType}}'
RETURNING
allocated_storage,
associated_roles,
automatic_restart_time,
availability_zones,
backup_retention_period,
character_set_name,
clone_group_id,
cluster_create_time,
copy_tags_to_snapshot,
cross_account_clone,
db_cluster_arn,
db_cluster_identifier,
db_cluster_members,
db_cluster_option_group_memberships,
db_cluster_parameter_group,
db_subnet_group,
database_name,
db_cluster_resource_id,
deletion_protection,
earliest_restorable_time,
enabled_cloudwatch_logs_exports,
endpoint,
engine,
engine_version,
global_cluster_identifier,
hosted_zone_id,
iam_database_authentication_enabled,
io_optimized_next_allowed_modification_time,
kms_key_id,
latest_restorable_time,
master_username,
multi_az,
pending_modified_values,
percent_progress,
port,
preferred_backup_window,
preferred_maintenance_window,
read_replica_identifiers,
reader_endpoint,
replication_source_identifier,
serverless_v2_scaling_configuration,
status,
storage_encrypted,
storage_type,
vpc_security_groups;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_db_cluster"
    values={[
        { label: 'delete_db_cluster', value: 'delete_db_cluster' }
    ]}
>
<TabItem value="delete_db_cluster">

The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted. Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its DeletionProtection field to False.

```sql
DELETE FROM aws.neptune.db_clusters
WHERE DBClusterIdentifier = '{{ DBClusterIdentifier }}' --required
AND region = '{{ region }}' --required
AND SkipFinalSnapshot = '{{ SkipFinalSnapshot }}'
AND FinalDBSnapshotIdentifier = '{{ FinalDBSnapshotIdentifier }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copy_db_cluster_snapshot"
    values={[
        { label: 'copy_db_cluster_snapshot', value: 'copy_db_cluster_snapshot' },
        { label: 'promote_read_replica_db_cluster', value: 'promote_read_replica_db_cluster' },
        { label: 'remove_role_from_db_cluster', value: 'remove_role_from_db_cluster' },
        { label: 'restore_db_cluster_from_snapshot', value: 'restore_db_cluster_from_snapshot' },
        { label: 'restore_db_cluster_to_point_in_time', value: 'restore_db_cluster_to_point_in_time' },
        { label: 'start_db_cluster', value: 'start_db_cluster' },
        { label: 'stop_db_cluster', value: 'stop_db_cluster' }
    ]}
>
<TabItem value="copy_db_cluster_snapshot">

Copies a snapshot of a DB cluster. To copy a DB cluster snapshot from a shared manual DB cluster snapshot, SourceDBClusterSnapshotIdentifier must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.

```sql
EXEC aws.neptune.db_clusters.copy_db_cluster_snapshot 
@SourceDBClusterSnapshotIdentifier='{{ SourceDBClusterSnapshotIdentifier }}' --required, 
@TargetDBClusterSnapshotIdentifier='{{ TargetDBClusterSnapshotIdentifier }}' --required, 
@region='{{ region }}' --required, 
@KmsKeyId='{{ KmsKeyId }}', 
@PreSignedUrl='{{ PreSignedUrl }}', 
@CopyTags={{ CopyTags }}, 
@Tags='{{ Tags }}'
;
```
</TabItem>
<TabItem value="promote_read_replica_db_cluster">

Not supported.

```sql
EXEC aws.neptune.db_clusters.promote_read_replica_db_cluster 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="remove_role_from_db_cluster">

Disassociates an Identity and Access Management (IAM) role from a DB cluster.

```sql
EXEC aws.neptune.db_clusters.remove_role_from_db_cluster 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@RoleArn='{{ RoleArn }}' --required, 
@region='{{ region }}' --required, 
@FeatureName='{{ FeatureName }}'
;
```
</TabItem>
<TabItem value="restore_db_cluster_from_snapshot">

Creates a new DB cluster from a DB snapshot or DB cluster snapshot. If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group. If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

```sql
EXEC aws.neptune.db_clusters.restore_db_cluster_from_snapshot 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@SnapshotIdentifier='{{ SnapshotIdentifier }}' --required, 
@region='{{ region }}' --required, 
@AvailabilityZones='{{ AvailabilityZones }}', 
@Engine='{{ Engine }}', 
@EngineVersion='{{ EngineVersion }}', 
@Port='{{ Port }}', 
@DBSubnetGroupName='{{ DBSubnetGroupName }}', 
@DatabaseName='{{ DatabaseName }}', 
@OptionGroupName='{{ OptionGroupName }}', 
@VpcSecurityGroupIds='{{ VpcSecurityGroupIds }}', 
@Tags='{{ Tags }}', 
@KmsKeyId='{{ KmsKeyId }}', 
@EnableIAMDatabaseAuthentication={{ EnableIAMDatabaseAuthentication }}, 
@EnableCloudwatchLogsExports='{{ EnableCloudwatchLogsExports }}', 
@DBClusterParameterGroupName='{{ DBClusterParameterGroupName }}', 
@DeletionProtection={{ DeletionProtection }}, 
@CopyTagsToSnapshot={{ CopyTagsToSnapshot }}, 
@ServerlessV2ScalingConfiguration='{{ ServerlessV2ScalingConfiguration }}', 
@StorageType='{{ StorageType }}'
;
```
</TabItem>
<TabItem value="restore_db_cluster_to_point_in_time">

Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before LatestRestorableTime for up to BackupRetentionPeriod days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group. This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the CreateDBInstance action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in DBClusterIdentifier. You can create DB instances only after the RestoreDBClusterToPointInTime action has completed and the DB cluster is available.

```sql
EXEC aws.neptune.db_clusters.restore_db_cluster_to_point_in_time 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@SourceDBClusterIdentifier='{{ SourceDBClusterIdentifier }}' --required, 
@region='{{ region }}' --required, 
@RestoreType='{{ RestoreType }}', 
@RestoreToTime='{{ RestoreToTime }}', 
@UseLatestRestorableTime={{ UseLatestRestorableTime }}, 
@Port='{{ Port }}', 
@DBSubnetGroupName='{{ DBSubnetGroupName }}', 
@OptionGroupName='{{ OptionGroupName }}', 
@VpcSecurityGroupIds='{{ VpcSecurityGroupIds }}', 
@Tags='{{ Tags }}', 
@KmsKeyId='{{ KmsKeyId }}', 
@EnableIAMDatabaseAuthentication={{ EnableIAMDatabaseAuthentication }}, 
@EnableCloudwatchLogsExports='{{ EnableCloudwatchLogsExports }}', 
@DBClusterParameterGroupName='{{ DBClusterParameterGroupName }}', 
@DeletionProtection={{ DeletionProtection }}, 
@ServerlessV2ScalingConfiguration='{{ ServerlessV2ScalingConfiguration }}', 
@StorageType='{{ StorageType }}'
;
```
</TabItem>
<TabItem value="start_db_cluster">

Starts an Amazon Neptune DB cluster that was stopped using the Amazon console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.

```sql
EXEC aws.neptune.db_clusters.start_db_cluster 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_db_cluster">

Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups. Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.

```sql
EXEC aws.neptune.db_clusters.stop_db_cluster 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
