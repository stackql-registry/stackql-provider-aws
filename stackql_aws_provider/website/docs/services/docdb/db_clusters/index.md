--- 
title: db_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - db_clusters
  - docdb
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.docdb.db_clusters" /></td></tr>
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
    <td><CopyableCode code="associated_roles" /></td>
    <td><code>string</code></td>
    <td>Provides a list of the Identity and Access Management (IAM) roles that are associated with the cluster. (IAM) roles that are associated with a cluster grant permission for the cluster to access other Amazon Web Services services on your behalf.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>string</code></td>
    <td>Provides the list of Amazon EC2 Availability Zones that instances in the cluster can be created in.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_retention_period" /></td>
    <td><code>integer</code></td>
    <td>Specifies the number of days for which automatic snapshots are retained.</td>
</tr>
<tr>
    <td><CopyableCode code="clone_group_id" /></td>
    <td><code>string</code></td>
    <td>Identifies the clone group to which the DB cluster is associated.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_create_time" /></td>
    <td><code>string</code></td>
    <td>Specifies the time when the cluster was created, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>Contains a user-supplied cluster identifier. This identifier is the unique key that identifies a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_members" /></td>
    <td><code>string</code></td>
    <td>Provides the list of instances that make up the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_parameter_group" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the cluster parameter group for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_subnet_group" /></td>
    <td><code>string</code></td>
    <td>Specifies information on the subnet group that is associated with the cluster, including the name, description, and subnets in the subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_resource_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region-unique, immutable identifier for the cluster. This identifier is found in CloudTrail log entries whenever the KMS key for the cluster is accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether this cluster can be deleted. If DeletionProtection is enabled, the cluster cannot be deleted unless it is modified and DeletionProtection is disabled. DeletionProtection protects clusters from being accidentally deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="earliest_restorable_time" /></td>
    <td><code>string</code></td>
    <td>The earliest time to which a database can be restored with point-in-time restore.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_cloudwatch_logs_exports" /></td>
    <td><code>string</code></td>
    <td>A list of log types that this cluster is configured to export to Amazon CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Specifies the connection endpoint for the primary instance of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>Provides the name of the database engine to be used for this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>Indicates the database engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="hosted_zone_id" /></td>
    <td><code>string</code></td>
    <td>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</td>
</tr>
<tr>
    <td><CopyableCode code="io_optimized_next_allowed_modification_time" /></td>
    <td><code>string</code></td>
    <td>The next time you can modify the Amazon DocumentDB cluster to use the iopt1 storage type.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>If StorageEncrypted is true, the KMS key identifier for the encrypted cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_restorable_time" /></td>
    <td><code>string</code></td>
    <td>Specifies the latest time to which a database can be restored with point-in-time restore.</td>
</tr>
<tr>
    <td><CopyableCode code="master_user_secret" /></td>
    <td><code>string</code></td>
    <td>The secret managed by Amazon DocumentDB in Amazon Web Services Secrets Manager for the master user password.</td>
</tr>
<tr>
    <td><CopyableCode code="master_username" /></td>
    <td><code>string</code></td>
    <td>Contains the master user name for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_az" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the cluster has instances in multiple Availability Zones.</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>The network type of the cluster. The network type is determined by the DBSubnetGroup specified for the cluster. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see DocumentDB clusters in a VPC in the Amazon DocumentDB Developer Guide. Valid Values: IPV4 | DUAL</td>
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
    <td>Contains one or more identifiers of the secondary clusters that are associated with this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="reader_endpoint" /></td>
    <td><code>string</code></td>
    <td>The reader endpoint for the cluster. The reader endpoint for a cluster load balances connections across the Amazon DocumentDB replicas that are available in a cluster. As clients request new connections to the reader endpoint, Amazon DocumentDB distributes the connection requests among the Amazon DocumentDB replicas in the cluster. This functionality can help balance your read workload across multiple Amazon DocumentDB replicas in your cluster. If a failover occurs, and the Amazon DocumentDB replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Amazon DocumentDB replicas in the cluster, you can then reconnect to the reader endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_source_identifier" /></td>
    <td><code>string</code></td>
    <td>Contains the identifier of the source cluster if this cluster is a secondary cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_v2_scaling_configuration" /></td>
    <td><code>string</code></td>
    <td>The scaling configuration of an Amazon DocumentDB Serverless cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Specifies the current state of this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the cluster is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_type" /></td>
    <td><code>string</code></td>
    <td>Storage type associated with your cluster For information on storage types for Amazon DocumentDB clusters, see Cluster storage configurations in the Amazon DocumentDB Developer Guide. Valid values for storage type - standard | iopt1 Default value is standard</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_security_groups" /></td>
    <td><code>string</code></td>
    <td>Provides a list of virtual private cloud (VPC) security groups that the cluster belongs to.</td>
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
    <td>Returns information about provisioned Amazon DocumentDB clusters. This API operation supports pagination. For certain management features such as cluster and instance lifecycle management, Amazon DocumentDB leverages operational technology that is shared with Amazon RDS and Amazon Neptune. Use the filterName=engine,Values=docdb filter parameter to return only Amazon DocumentDB clusters.</td>
</tr>
<tr>
    <td><a href="#create_db_cluster"><CopyableCode code="create_db_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityZones"><code>AvailabilityZones</code></a>, <a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-MasterUsername"><code>MasterUsername</code></a>, <a href="#parameter-MasterUserPassword"><code>MasterUserPassword</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-StorageEncrypted"><code>StorageEncrypted</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-PreSignedUrl"><code>PreSignedUrl</code></a>, <a href="#parameter-EnableCloudwatchLogsExports"><code>EnableCloudwatchLogsExports</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-ServerlessV2ScalingConfiguration"><code>ServerlessV2ScalingConfiguration</code></a>, <a href="#parameter-ManageMasterUserPassword"><code>ManageMasterUserPassword</code></a>, <a href="#parameter-MasterUserSecretKmsKeyId"><code>MasterUserSecretKmsKeyId</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a></td>
    <td>Creates a new Amazon DocumentDB cluster.</td>
</tr>
<tr>
    <td><a href="#modify_db_cluster"><CopyableCode code="modify_db_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NewDBClusterIdentifier"><code>NewDBClusterIdentifier</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a>, <a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-MasterUserPassword"><code>MasterUserPassword</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-CloudwatchLogsExportConfiguration"><code>CloudwatchLogsExportConfiguration</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-AllowMajorVersionUpgrade"><code>AllowMajorVersionUpgrade</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-ServerlessV2ScalingConfiguration"><code>ServerlessV2ScalingConfiguration</code></a>, <a href="#parameter-ManageMasterUserPassword"><code>ManageMasterUserPassword</code></a>, <a href="#parameter-MasterUserSecretKmsKeyId"><code>MasterUserSecretKmsKeyId</code></a>, <a href="#parameter-RotateMasterUserPassword"><code>RotateMasterUserPassword</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a></td>
    <td>Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.</td>
</tr>
<tr>
    <td><a href="#delete_db_cluster"><CopyableCode code="delete_db_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SkipFinalSnapshot"><code>SkipFinalSnapshot</code></a>, <a href="#parameter-FinalDBSnapshotIdentifier"><code>FinalDBSnapshotIdentifier</code></a></td>
    <td>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</td>
</tr>
<tr>
    <td><a href="#copy_db_cluster_snapshot"><CopyableCode code="copy_db_cluster_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SourceDBClusterSnapshotIdentifier"><code>SourceDBClusterSnapshotIdentifier</code></a>, <a href="#parameter-TargetDBClusterSnapshotIdentifier"><code>TargetDBClusterSnapshotIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-PreSignedUrl"><code>PreSignedUrl</code></a>, <a href="#parameter-CopyTags"><code>CopyTags</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Copies a snapshot of a cluster. To copy a cluster snapshot from a shared manual cluster snapshot, SourceDBClusterSnapshotIdentifier must be the Amazon Resource Name (ARN) of the shared cluster snapshot. You can only copy a shared DB cluster snapshot, whether encrypted or not, in the same Amazon Web Services Region. To cancel the copy operation after it is in progress, delete the target cluster snapshot identified by TargetDBClusterSnapshotIdentifier while that cluster snapshot is in the copying status.</td>
</tr>
<tr>
    <td><a href="#restore_db_cluster_from_snapshot"><CopyableCode code="restore_db_cluster_from_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-SnapshotIdentifier"><code>SnapshotIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityZones"><code>AvailabilityZones</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-EnableCloudwatchLogsExports"><code>EnableCloudwatchLogsExports</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-ServerlessV2ScalingConfiguration"><code>ServerlessV2ScalingConfiguration</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a></td>
    <td>Creates a new cluster from a snapshot or cluster snapshot. If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group. If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</td>
</tr>
<tr>
    <td><a href="#restore_db_cluster_to_point_in_time"><CopyableCode code="restore_db_cluster_to_point_in_time" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-SourceDBClusterIdentifier"><code>SourceDBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RestoreType"><code>RestoreType</code></a>, <a href="#parameter-RestoreToTime"><code>RestoreToTime</code></a>, <a href="#parameter-UseLatestRestorableTime"><code>UseLatestRestorableTime</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-EnableCloudwatchLogsExports"><code>EnableCloudwatchLogsExports</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-ServerlessV2ScalingConfiguration"><code>ServerlessV2ScalingConfiguration</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a></td>
    <td>Restores a cluster to an arbitrary point in time. Users can restore to any point in time before LatestRestorableTime for up to BackupRetentionPeriod days. The target cluster is created from the source cluster with the same configuration as the original cluster, except that the new cluster is created with the default security group.</td>
</tr>
<tr>
    <td><a href="#start_db_cluster"><CopyableCode code="start_db_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Restarts the stopped cluster that is specified by DBClusterIdentifier. For more information, see Stopping and Starting an Amazon DocumentDB Cluster.</td>
</tr>
<tr>
    <td><a href="#stop_db_cluster"><CopyableCode code="stop_db_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops the running cluster that is specified by DBClusterIdentifier. The cluster must be in the available state. For more information, see Stopping and Starting an Amazon DocumentDB Cluster.</td>
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
    <td>The identifier of the cluster to stop. Example: docdb-2019-05-28-15-24-52</td>
</tr>
<tr id="parameter-SnapshotIdentifier">
    <td><CopyableCode code="SnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the snapshot or cluster snapshot to restore from. You can use either the name or the Amazon Resource Name (ARN) to specify a cluster snapshot. However, you can use only the ARN to specify a snapshot. Constraints: Must match the identifier of an existing snapshot.</td>
</tr>
<tr id="parameter-SourceDBClusterIdentifier">
    <td><CopyableCode code="SourceDBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the source cluster from which to restore. Constraints: Must match the identifier of an existing DBCluster.</td>
</tr>
<tr id="parameter-SourceDBClusterSnapshotIdentifier">
    <td><CopyableCode code="SourceDBClusterSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cluster snapshot to copy. This parameter is not case sensitive. Constraints: Must specify a valid cluster snapshot in the available state. If the source cluster snapshot is in the same Amazon Web Services Region as the copy, specify a valid snapshot identifier. If the source cluster snapshot is in a different Amazon Web Services Region or owned by another Amazon Web Services account, specify the snapshot ARN. Example: my-cluster-snapshot1</td>
</tr>
<tr id="parameter-TargetDBClusterSnapshotIdentifier">
    <td><CopyableCode code="TargetDBClusterSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the new cluster snapshot to create from the source cluster snapshot. This parameter is not case sensitive. Constraints: Must contain from 1 to 63 letters, numbers, or hyphens. The first character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens. Example: my-cluster-snapshot2</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AllowMajorVersionUpgrade">
    <td><CopyableCode code="AllowMajorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates whether major version upgrades are allowed. Constraints: You must allow major version upgrades when specifying a value for the EngineVersion parameter that is a different major version than the cluster's current version. Since some parameters are version specific, changing them requires executing a new ModifyDBCluster API call after the in-place MVU completes. Performing an MVU directly impacts the following parameters: MasterUserPassword NewDBClusterIdentifier VpcSecurityGroupIds Port</td>
</tr>
<tr id="parameter-ApplyImmediately">
    <td><CopyableCode code="ApplyImmediately" /></td>
    <td><code>boolean</code></td>
    <td>A value that specifies whether the changes in this request and any pending changes are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the cluster. If this parameter is set to false, changes to the cluster are applied during the next maintenance window. The ApplyImmediately parameter affects only the NewDBClusterIdentifier and MasterUserPassword values. If you set this parameter value to false, the changes to the NewDBClusterIdentifier and MasterUserPassword values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the ApplyImmediately parameter. Default: false</td>
</tr>
<tr id="parameter-AvailabilityZones">
    <td><CopyableCode code="AvailabilityZones" /></td>
    <td><code>array</code></td>
    <td>Provides the list of Amazon EC2 Availability Zones that instances in the restored DB cluster can be created in.</td>
</tr>
<tr id="parameter-BackupRetentionPeriod">
    <td><CopyableCode code="BackupRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The number of days for which automated backups are retained. You must specify a minimum value of 1. Default: 1 Constraints: Must be a value from 1 to 35.</td>
</tr>
<tr id="parameter-CloudwatchLogsExportConfiguration">
    <td><CopyableCode code="CloudwatchLogsExportConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster. The EnableLogTypes and DisableLogTypes arrays determine which logs are exported (or not exported) to CloudWatch Logs.</td>
</tr>
<tr id="parameter-CopyTags">
    <td><CopyableCode code="CopyTags" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to copy all tags from the source cluster snapshot to the target cluster snapshot, and otherwise false. The default is false.</td>
</tr>
<tr id="parameter-DBClusterIdentifier">
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The user-provided cluster identifier. If this parameter is specified, information from only the specific cluster is returned. This parameter isn't case sensitive. Constraints: If provided, must match an existing DBClusterIdentifier.</td>
</tr>
<tr id="parameter-DBClusterParameterGroupName">
    <td><CopyableCode code="DBClusterParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the DB cluster parameter group to associate with this DB cluster. Type: String. Required: No. If this argument is omitted, the default DB cluster parameter group is used. If supplied, must match the name of an existing default DB cluster parameter group. The string must consist of from 1 to 255 letters, numbers or hyphens. Its first character must be a letter, and it cannot end with a hyphen or contain two consecutive hyphens.</td>
</tr>
<tr id="parameter-DBSubnetGroupName">
    <td><CopyableCode code="DBSubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The subnet group name to use for the new cluster. Constraints: If provided, must match the name of an existing DBSubnetGroup. Example: mySubnetgroup</td>
</tr>
<tr id="parameter-DeletionProtection">
    <td><CopyableCode code="DeletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether this cluster can be deleted. If DeletionProtection is enabled, the cluster cannot be deleted unless it is modified and DeletionProtection is disabled. DeletionProtection protects clusters from being accidentally deleted.</td>
</tr>
<tr id="parameter-EnableCloudwatchLogsExports">
    <td><CopyableCode code="EnableCloudwatchLogsExports" /></td>
    <td><code>array</code></td>
    <td>A list of log types that must be enabled for exporting to Amazon CloudWatch Logs.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The database engine to use for the new cluster. Default: The same as source. Constraint: Must be compatible with the engine of the source.</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the database engine to use for the new cluster.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more clusters to describe. Supported filters: db-cluster-id - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list only includes information about the clusters identified by these ARNs.</td>
</tr>
<tr id="parameter-FinalDBSnapshotIdentifier">
    <td><CopyableCode code="FinalDBSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The cluster snapshot identifier of the new cluster snapshot created when SkipFinalSnapshot is set to false. Specifying this parameter and also setting the SkipFinalShapshot parameter to true results in an error. Constraints: Must be from 1 to 255 letters, numbers, or hyphens. The first character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens.</td>
</tr>
<tr id="parameter-GlobalClusterIdentifier">
    <td><CopyableCode code="GlobalClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The cluster identifier of the new global cluster.</td>
</tr>
<tr id="parameter-KmsKeyId">
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The KMS key identifier to use when restoring an encrypted cluster from an encrypted cluster. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a cluster with the same Amazon Web Services account that owns the KMS encryption key used to encrypt the new cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key. You can restore to a new cluster and encrypt the new cluster with an KMS key that is different from the KMS key used to encrypt the source cluster. The new DB cluster is encrypted with the KMS key identified by the KmsKeyId parameter. If you do not specify a value for the KmsKeyId parameter, then the following occurs: If the cluster is encrypted, then the restored cluster is encrypted using the KMS key that was used to encrypt the source cluster. If the cluster is not encrypted, then the restored cluster is not encrypted. If DBClusterIdentifier refers to a cluster that is not encrypted, then the restore request is rejected.</td>
</tr>
<tr id="parameter-ManageMasterUserPassword">
    <td><CopyableCode code="ManageMasterUserPassword" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to manage the master user password with Amazon Web Services Secrets Manager. If the cluster doesn't manage the master user password with Amazon Web Services Secrets Manager, you can turn on this management. In this case, you can't specify MasterUserPassword. If the cluster already manages the master user password with Amazon Web Services Secrets Manager, and you specify that the master user password is not managed with Amazon Web Services Secrets Manager, then you must specify MasterUserPassword. In this case, Amazon DocumentDB deletes the secret and uses the new password for the master user specified by MasterUserPassword.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MasterUserPassword">
    <td><CopyableCode code="MasterUserPassword" /></td>
    <td><code>string</code></td>
    <td>The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@). Constraints: Must contain from 8 to 100 characters.</td>
</tr>
<tr id="parameter-MasterUserSecretKmsKeyId">
    <td><CopyableCode code="MasterUserSecretKmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager. This setting is valid only if both of the following conditions are met: The cluster doesn't manage the master user password in Amazon Web Services Secrets Manager. If the cluster already manages the master user password in Amazon Web Services Secrets Manager, you can't change the KMS key that is used to encrypt the secret. You are enabling ManageMasterUserPassword to manage the master user password in Amazon Web Services Secrets Manager. If you are turning on ManageMasterUserPassword and don't specify MasterUserSecretKmsKeyId, then the aws/secretsmanager KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the aws/secretsmanager KMS key to encrypt the secret, and you must use a customer managed KMS key. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</td>
</tr>
<tr id="parameter-MasterUsername">
    <td><CopyableCode code="MasterUsername" /></td>
    <td><code>string</code></td>
    <td>The name of the master user for the cluster. Constraints: Must be from 1 to 63 letters or numbers. The first character must be a letter. Cannot be a reserved word for the chosen database engine.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token (marker) is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-NetworkType">
    <td><CopyableCode code="NetworkType" /></td>
    <td><code>string</code></td>
    <td>The network type of the cluster. The network type is determined by the DBSubnetGroup specified for the cluster. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see DocumentDB clusters in a VPC in the Amazon DocumentDB Developer Guide. Valid Values: IPV4 | DUAL</td>
</tr>
<tr id="parameter-NewDBClusterIdentifier">
    <td><CopyableCode code="NewDBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The new cluster identifier for the cluster when renaming a cluster. This value is stored as a lowercase string. Constraints: Must contain from 1 to 63 letters, numbers, or hyphens. The first character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens. Example: my-cluster2</td>
</tr>
<tr id="parameter-Port">
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port number on which the new cluster accepts connections. Constraints: Must be a value from 1150 to 65535. Default: The default port for the engine.</td>
</tr>
<tr id="parameter-PreSignedUrl">
    <td><CopyableCode code="PreSignedUrl" /></td>
    <td><code>string</code></td>
    <td>The URL that contains a Signature Version 4 signed request for theCopyDBClusterSnapshot API action in the Amazon Web Services Region that contains the source cluster snapshot to copy. You must use the PreSignedUrl parameter when copying a cluster snapshot from another Amazon Web Services Region. If you are using an Amazon Web Services SDK tool or the CLI, you can specify SourceRegion (or --source-region for the CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a pre-signed URL that is a valid request for the operation that can be executed in the source Amazon Web Services Region. The presigned URL must be a valid request for the CopyDBClusterSnapshot API action that can be executed in the source Amazon Web Services Region that contains the cluster snapshot to be copied. The presigned URL request must contain the following parameter values: SourceRegion - The ID of the region that contains the snapshot to be copied. SourceDBClusterSnapshotIdentifier - The identifier for the the encrypted cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted cluster snapshot from the us-east-1 Amazon Web Services Region, then your SourceDBClusterSnapshotIdentifier looks something like the following: arn:aws:rds:us-east-1:12345678012:sample-cluster:sample-cluster-snapshot. TargetDBClusterSnapshotIdentifier - The identifier for the new cluster snapshot to be created. This parameter isn't case sensitive.</td>
</tr>
<tr id="parameter-PreferredBackupWindow">
    <td><CopyableCode code="PreferredBackupWindow" /></td>
    <td><code>string</code></td>
    <td>The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. Constraints: Must be in the format hh24:mi-hh24:mi. Must be in Universal Coordinated Time (UTC). Must not conflict with the preferred maintenance window. Must be at least 30 minutes.</td>
</tr>
<tr id="parameter-PreferredMaintenanceWindow">
    <td><CopyableCode code="PreferredMaintenanceWindow" /></td>
    <td><code>string</code></td>
    <td>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Minimum 30-minute window.</td>
</tr>
<tr id="parameter-RestoreToTime">
    <td><CopyableCode code="RestoreToTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time to restore the cluster to. Valid values: A time in Universal Coordinated Time (UTC) format. Constraints: Must be before the latest restorable time for the instance. Must be specified if the UseLatestRestorableTime parameter is not provided. Cannot be specified if the UseLatestRestorableTime parameter is true. Cannot be specified if the RestoreType parameter is copy-on-write. Example: 2015-03-07T23:45:00Z</td>
</tr>
<tr id="parameter-RestoreType">
    <td><CopyableCode code="RestoreType" /></td>
    <td><code>string</code></td>
    <td>The type of restore to be performed. You can specify one of the following values: full-copy - The new DB cluster is restored as a full copy of the source DB cluster. copy-on-write - The new DB cluster is restored as a clone of the source DB cluster. Constraints: You can't specify copy-on-write if the engine version of the source DB cluster is earlier than 1.11. If you don't specify a RestoreType value, then the new DB cluster is restored as a full copy of the source DB cluster.</td>
</tr>
<tr id="parameter-RotateMasterUserPassword">
    <td><CopyableCode code="RotateMasterUserPassword" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to rotate the secret managed by Amazon Web Services Secrets Manager for the master user password. This setting is valid only if the master user password is managed by Amazon DocumentDB in Amazon Web Services Secrets Manager for the cluster. The secret value contains the updated password. Constraint: You must apply the change immediately when rotating the master user password.</td>
</tr>
<tr id="parameter-ServerlessV2ScalingConfiguration">
    <td><CopyableCode code="ServerlessV2ScalingConfiguration" /></td>
    <td><code>object</code></td>
    <td>Contains the scaling configuration of an Amazon DocumentDB Serverless cluster.</td>
</tr>
<tr id="parameter-SkipFinalSnapshot">
    <td><CopyableCode code="SkipFinalSnapshot" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether a final cluster snapshot is created before the cluster is deleted. If true is specified, no cluster snapshot is created. If false is specified, a cluster snapshot is created before the DB cluster is deleted. If SkipFinalSnapshot is false, you must specify a FinalDBSnapshotIdentifier parameter. Default: false</td>
</tr>
<tr id="parameter-StorageEncrypted">
    <td><CopyableCode code="StorageEncrypted" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the cluster is encrypted.</td>
</tr>
<tr id="parameter-StorageType">
    <td><CopyableCode code="StorageType" /></td>
    <td><code>string</code></td>
    <td>The storage type to associate with the DB cluster. For information on storage types for Amazon DocumentDB clusters, see Cluster storage configurations in the Amazon DocumentDB Developer Guide. Valid values for storage type - standard | iopt1 Default value is standard</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to be assigned to the restored cluster.</td>
</tr>
<tr id="parameter-UseLatestRestorableTime">
    <td><CopyableCode code="UseLatestRestorableTime" /></td>
    <td><code>boolean</code></td>
    <td>A value that is set to true to restore the cluster to the latest restorable backup time, and false otherwise. Default: false Constraints: Cannot be specified if the RestoreToTime parameter is provided.</td>
</tr>
<tr id="parameter-VpcSecurityGroupIds">
    <td><CopyableCode code="VpcSecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>A list of VPC security groups that the new cluster belongs to.</td>
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

Returns information about provisioned Amazon DocumentDB clusters. This API operation supports pagination. For certain management features such as cluster and instance lifecycle management, Amazon DocumentDB leverages operational technology that is shared with Amazon RDS and Amazon Neptune. Use the filterName=engine,Values=docdb filter parameter to return only Amazon DocumentDB clusters.

```sql
SELECT
associated_roles,
availability_zones,
backup_retention_period,
clone_group_id,
cluster_create_time,
db_cluster_arn,
db_cluster_identifier,
db_cluster_members,
db_cluster_parameter_group,
db_subnet_group,
db_cluster_resource_id,
deletion_protection,
earliest_restorable_time,
enabled_cloudwatch_logs_exports,
endpoint,
engine,
engine_version,
hosted_zone_id,
io_optimized_next_allowed_modification_time,
kms_key_id,
latest_restorable_time,
master_user_secret,
master_username,
multi_az,
network_type,
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
FROM aws.docdb.db_clusters
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

Creates a new Amazon DocumentDB cluster.

```sql
INSERT INTO aws.docdb.db_clusters (
DBClusterIdentifier,
region,
AvailabilityZones,
BackupRetentionPeriod,
DBClusterParameterGroupName,
VpcSecurityGroupIds,
DBSubnetGroupName,
Engine,
EngineVersion,
Port,
MasterUsername,
MasterUserPassword,
PreferredBackupWindow,
PreferredMaintenanceWindow,
Tags,
StorageEncrypted,
KmsKeyId,
PreSignedUrl,
EnableCloudwatchLogsExports,
DeletionProtection,
GlobalClusterIdentifier,
StorageType,
ServerlessV2ScalingConfiguration,
ManageMasterUserPassword,
MasterUserSecretKmsKeyId,
NetworkType
)
SELECT 
'{{ DBClusterIdentifier }}',
'{{ region }}',
'{{ AvailabilityZones }}',
'{{ BackupRetentionPeriod }}',
'{{ DBClusterParameterGroupName }}',
'{{ VpcSecurityGroupIds }}',
'{{ DBSubnetGroupName }}',
'{{ Engine }}',
'{{ EngineVersion }}',
'{{ Port }}',
'{{ MasterUsername }}',
'{{ MasterUserPassword }}',
'{{ PreferredBackupWindow }}',
'{{ PreferredMaintenanceWindow }}',
'{{ Tags }}',
'{{ StorageEncrypted }}',
'{{ KmsKeyId }}',
'{{ PreSignedUrl }}',
'{{ EnableCloudwatchLogsExports }}',
'{{ DeletionProtection }}',
'{{ GlobalClusterIdentifier }}',
'{{ StorageType }}',
'{{ ServerlessV2ScalingConfiguration }}',
'{{ ManageMasterUserPassword }}',
'{{ MasterUserSecretKmsKeyId }}',
'{{ NetworkType }}'
RETURNING
associated_roles,
availability_zones,
backup_retention_period,
clone_group_id,
cluster_create_time,
db_cluster_arn,
db_cluster_identifier,
db_cluster_members,
db_cluster_parameter_group,
db_subnet_group,
db_cluster_resource_id,
deletion_protection,
earliest_restorable_time,
enabled_cloudwatch_logs_exports,
endpoint,
engine,
engine_version,
hosted_zone_id,
io_optimized_next_allowed_modification_time,
kms_key_id,
latest_restorable_time,
master_user_secret,
master_username,
multi_az,
network_type,
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
      description: A list of Amazon EC2 Availability Zones that instances in the cluster can be created in.
      description: A list of Amazon EC2 Availability Zones that instances in the cluster can be created in.
    - name: BackupRetentionPeriod
      value: {{ BackupRetentionPeriod }}
      description: The number of days for which automated backups are retained. You must specify a minimum value of 1. Default: 1 Constraints: Must be a value from 1 to 35.
      description: The number of days for which automated backups are retained. You must specify a minimum value of 1. Default: 1 Constraints: Must be a value from 1 to 35.
    - name: DBClusterParameterGroupName
      value: "{{ DBClusterParameterGroupName }}"
      description: The name of the cluster parameter group to associate with this cluster.
      description: The name of the cluster parameter group to associate with this cluster.
    - name: VpcSecurityGroupIds
      value: "{{ VpcSecurityGroupIds }}"
      description: A list of EC2 VPC security groups to associate with this cluster.
      description: A list of EC2 VPC security groups to associate with this cluster.
    - name: DBSubnetGroupName
      value: "{{ DBSubnetGroupName }}"
      description: A subnet group to associate with this cluster. Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mySubnetgroup
      description: A subnet group to associate with this cluster. Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mySubnetgroup
    - name: Engine
      value: "{{ Engine }}"
      description: The name of the database engine to be used for this cluster. Valid values: docdb
      description: The name of the database engine to be used for this cluster. Valid values: docdb
    - name: EngineVersion
      value: "{{ EngineVersion }}"
      description: The version number of the database engine to use. The --engine-version will default to the latest major engine version. For production workloads, we recommend explicitly declaring this parameter with the intended major engine version.
      description: The version number of the database engine to use. The --engine-version will default to the latest major engine version. For production workloads, we recommend explicitly declaring this parameter with the intended major engine version.
    - name: Port
      value: {{ Port }}
      description: The port number on which the instances in the cluster accept connections.
      description: The port number on which the instances in the cluster accept connections.
    - name: MasterUsername
      value: "{{ MasterUsername }}"
      description: The name of the master user for the cluster. Constraints: Must be from 1 to 63 letters or numbers. The first character must be a letter. Cannot be a reserved word for the chosen database engine.
      description: The name of the master user for the cluster. Constraints: Must be from 1 to 63 letters or numbers. The first character must be a letter. Cannot be a reserved word for the chosen database engine.
    - name: MasterUserPassword
      value: "{{ MasterUserPassword }}"
      description: The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@). Constraints: Must contain from 8 to 100 characters.
      description: The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@). Constraints: Must contain from 8 to 100 characters.
    - name: PreferredBackupWindow
      value: "{{ PreferredBackupWindow }}"
      description: The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. Constraints: Must be in the format hh24:mi-hh24:mi. Must be in Universal Coordinated Time (UTC). Must not conflict with the preferred maintenance window. Must be at least 30 minutes.
      description: The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. Constraints: Must be in the format hh24:mi-hh24:mi. Must be in Universal Coordinated Time (UTC). Must not conflict with the preferred maintenance window. Must be at least 30 minutes.
    - name: PreferredMaintenanceWindow
      value: "{{ PreferredMaintenanceWindow }}"
      description: The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Minimum 30-minute window.
      description: The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Minimum 30-minute window.
    - name: Tags
      value: "{{ Tags }}"
      description: The tags to be assigned to the cluster.
      description: The tags to be assigned to the cluster.
    - name: StorageEncrypted
      value: {{ StorageEncrypted }}
      description: Specifies whether the cluster is encrypted.
      description: Specifies whether the cluster is encrypted.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: The KMS key identifier for an encrypted cluster. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon Web Services account that owns the KMS encryption key that is used to encrypt the new cluster, you can use the KMS key alias instead of the ARN for the KMS encryption key. If an encryption key is not specified in KmsKeyId: If the StorageEncrypted parameter is true, Amazon DocumentDB uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Regions.
      description: The KMS key identifier for an encrypted cluster. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon Web Services account that owns the KMS encryption key that is used to encrypt the new cluster, you can use the KMS key alias instead of the ARN for the KMS encryption key. If an encryption key is not specified in KmsKeyId: If the StorageEncrypted parameter is true, Amazon DocumentDB uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Regions.
    - name: PreSignedUrl
      value: "{{ PreSignedUrl }}"
      description: Not currently supported.
      description: Not currently supported.
    - name: EnableCloudwatchLogsExports
      value: "{{ EnableCloudwatchLogsExports }}"
      description: A list of log types that need to be enabled for exporting to Amazon CloudWatch Logs. You can enable audit logs or profiler logs. For more information, see Auditing Amazon DocumentDB Events and Profiling Amazon DocumentDB Operations.
      description: A list of log types that need to be enabled for exporting to Amazon CloudWatch Logs. You can enable audit logs or profiler logs. For more information, see Auditing Amazon DocumentDB Events and Profiling Amazon DocumentDB Operations.
    - name: DeletionProtection
      value: {{ DeletionProtection }}
      description: Specifies whether this cluster can be deleted. If DeletionProtection is enabled, the cluster cannot be deleted unless it is modified and DeletionProtection is disabled. DeletionProtection protects clusters from being accidentally deleted.
      description: Specifies whether this cluster can be deleted. If DeletionProtection is enabled, the cluster cannot be deleted unless it is modified and DeletionProtection is disabled. DeletionProtection protects clusters from being accidentally deleted.
    - name: GlobalClusterIdentifier
      value: "{{ GlobalClusterIdentifier }}"
      description: The cluster identifier of the new global cluster.
      description: The cluster identifier of the new global cluster.
    - name: StorageType
      value: "{{ StorageType }}"
      description: The storage type to associate with the DB cluster. For information on storage types for Amazon DocumentDB clusters, see Cluster storage configurations in the Amazon DocumentDB Developer Guide. Valid values for storage type - standard | iopt1 Default value is standard When you create an Amazon DocumentDB cluster with the storage type set to iopt1, the storage type is returned in the response. The storage type isn't returned when you set it to standard.
      description: The storage type to associate with the DB cluster. For information on storage types for Amazon DocumentDB clusters, see Cluster storage configurations in the Amazon DocumentDB Developer Guide. Valid values for storage type - standard | iopt1 Default value is standard When you create an Amazon DocumentDB cluster with the storage type set to iopt1, the storage type is returned in the response. The storage type isn't returned when you set it to standard.
    - name: ServerlessV2ScalingConfiguration
      value: "{{ ServerlessV2ScalingConfiguration }}"
      description: Contains the scaling configuration of an Amazon DocumentDB Serverless cluster.
      description: Contains the scaling configuration of an Amazon DocumentDB Serverless cluster.
    - name: ManageMasterUserPassword
      value: {{ ManageMasterUserPassword }}
      description: Specifies whether to manage the master user password with Amazon Web Services Secrets Manager. Constraint: You can't manage the master user password with Amazon Web Services Secrets Manager if MasterUserPassword is specified.
      description: Specifies whether to manage the master user password with Amazon Web Services Secrets Manager. Constraint: You can't manage the master user password with Amazon Web Services Secrets Manager if MasterUserPassword is specified.
    - name: MasterUserSecretKmsKeyId
      value: "{{ MasterUserSecretKmsKeyId }}"
      description: The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager. This setting is valid only if the master user password is managed by Amazon DocumentDB in Amazon Web Services Secrets Manager for the DB cluster. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If you don't specify MasterUserSecretKmsKeyId, then the aws/secretsmanager KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the aws/secretsmanager KMS key to encrypt the secret, and you must use a customer managed KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
      description: The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager. This setting is valid only if the master user password is managed by Amazon DocumentDB in Amazon Web Services Secrets Manager for the DB cluster. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If you don't specify MasterUserSecretKmsKeyId, then the aws/secretsmanager KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the aws/secretsmanager KMS key to encrypt the secret, and you must use a customer managed KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: The network type of the cluster. The network type is determined by the DBSubnetGroup specified for the cluster. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see DocumentDB clusters in a VPC in the Amazon DocumentDB Developer Guide. Valid Values: IPV4 | DUAL
      description: The network type of the cluster. The network type is determined by the DBSubnetGroup specified for the cluster. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see DocumentDB clusters in a VPC in the Amazon DocumentDB Developer Guide. Valid Values: IPV4 | DUAL
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_db_cluster"
    values={[
        { label: 'modify_db_cluster', value: 'modify_db_cluster' }
    ]}
>
<TabItem value="modify_db_cluster">

Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

```sql
UPDATE aws.docdb.db_clusters
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
AND PreferredBackupWindow = '{{ PreferredBackupWindow}}'
AND PreferredMaintenanceWindow = '{{ PreferredMaintenanceWindow}}'
AND CloudwatchLogsExportConfiguration = '{{ CloudwatchLogsExportConfiguration}}'
AND EngineVersion = '{{ EngineVersion}}'
AND AllowMajorVersionUpgrade = {{ AllowMajorVersionUpgrade}}
AND DeletionProtection = {{ DeletionProtection}}
AND StorageType = '{{ StorageType}}'
AND ServerlessV2ScalingConfiguration = '{{ ServerlessV2ScalingConfiguration}}'
AND ManageMasterUserPassword = {{ ManageMasterUserPassword}}
AND MasterUserSecretKmsKeyId = '{{ MasterUserSecretKmsKeyId}}'
AND RotateMasterUserPassword = {{ RotateMasterUserPassword}}
AND NetworkType = '{{ NetworkType}}'
RETURNING
associated_roles,
availability_zones,
backup_retention_period,
clone_group_id,
cluster_create_time,
db_cluster_arn,
db_cluster_identifier,
db_cluster_members,
db_cluster_parameter_group,
db_subnet_group,
db_cluster_resource_id,
deletion_protection,
earliest_restorable_time,
enabled_cloudwatch_logs_exports,
endpoint,
engine,
engine_version,
hosted_zone_id,
io_optimized_next_allowed_modification_time,
kms_key_id,
latest_restorable_time,
master_user_secret,
master_username,
multi_az,
network_type,
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

Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.

```sql
DELETE FROM aws.docdb.db_clusters
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
        { label: 'restore_db_cluster_from_snapshot', value: 'restore_db_cluster_from_snapshot' },
        { label: 'restore_db_cluster_to_point_in_time', value: 'restore_db_cluster_to_point_in_time' },
        { label: 'start_db_cluster', value: 'start_db_cluster' },
        { label: 'stop_db_cluster', value: 'stop_db_cluster' }
    ]}
>
<TabItem value="copy_db_cluster_snapshot">

Copies a snapshot of a cluster. To copy a cluster snapshot from a shared manual cluster snapshot, SourceDBClusterSnapshotIdentifier must be the Amazon Resource Name (ARN) of the shared cluster snapshot. You can only copy a shared DB cluster snapshot, whether encrypted or not, in the same Amazon Web Services Region. To cancel the copy operation after it is in progress, delete the target cluster snapshot identified by TargetDBClusterSnapshotIdentifier while that cluster snapshot is in the copying status.

```sql
EXEC aws.docdb.db_clusters.copy_db_cluster_snapshot 
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
<TabItem value="restore_db_cluster_from_snapshot">

Creates a new cluster from a snapshot or cluster snapshot. If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group. If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.

```sql
EXEC aws.docdb.db_clusters.restore_db_cluster_from_snapshot 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@SnapshotIdentifier='{{ SnapshotIdentifier }}' --required, 
@region='{{ region }}' --required, 
@AvailabilityZones='{{ AvailabilityZones }}', 
@Engine='{{ Engine }}', 
@EngineVersion='{{ EngineVersion }}', 
@Port='{{ Port }}', 
@DBSubnetGroupName='{{ DBSubnetGroupName }}', 
@VpcSecurityGroupIds='{{ VpcSecurityGroupIds }}', 
@Tags='{{ Tags }}', 
@KmsKeyId='{{ KmsKeyId }}', 
@EnableCloudwatchLogsExports='{{ EnableCloudwatchLogsExports }}', 
@DeletionProtection={{ DeletionProtection }}, 
@DBClusterParameterGroupName='{{ DBClusterParameterGroupName }}', 
@ServerlessV2ScalingConfiguration='{{ ServerlessV2ScalingConfiguration }}', 
@StorageType='{{ StorageType }}', 
@NetworkType='{{ NetworkType }}'
;
```
</TabItem>
<TabItem value="restore_db_cluster_to_point_in_time">

Restores a cluster to an arbitrary point in time. Users can restore to any point in time before LatestRestorableTime for up to BackupRetentionPeriod days. The target cluster is created from the source cluster with the same configuration as the original cluster, except that the new cluster is created with the default security group.

```sql
EXEC aws.docdb.db_clusters.restore_db_cluster_to_point_in_time 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@SourceDBClusterIdentifier='{{ SourceDBClusterIdentifier }}' --required, 
@region='{{ region }}' --required, 
@RestoreType='{{ RestoreType }}', 
@RestoreToTime='{{ RestoreToTime }}', 
@UseLatestRestorableTime={{ UseLatestRestorableTime }}, 
@Port='{{ Port }}', 
@DBSubnetGroupName='{{ DBSubnetGroupName }}', 
@VpcSecurityGroupIds='{{ VpcSecurityGroupIds }}', 
@Tags='{{ Tags }}', 
@KmsKeyId='{{ KmsKeyId }}', 
@EnableCloudwatchLogsExports='{{ EnableCloudwatchLogsExports }}', 
@DeletionProtection={{ DeletionProtection }}, 
@ServerlessV2ScalingConfiguration='{{ ServerlessV2ScalingConfiguration }}', 
@StorageType='{{ StorageType }}', 
@NetworkType='{{ NetworkType }}'
;
```
</TabItem>
<TabItem value="start_db_cluster">

Restarts the stopped cluster that is specified by DBClusterIdentifier. For more information, see Stopping and Starting an Amazon DocumentDB Cluster.

```sql
EXEC aws.docdb.db_clusters.start_db_cluster 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_db_cluster">

Stops the running cluster that is specified by DBClusterIdentifier. The cluster must be in the available state. For more information, see Stopping and Starting an Amazon DocumentDB Cluster.

```sql
EXEC aws.docdb.db_clusters.stop_db_cluster 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
