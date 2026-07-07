--- 
title: db_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - db_instances
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

Creates, updates, deletes, gets or lists a <code>db_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune.db_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_instances"
    values={[
        { label: 'describe_db_instances', value: 'describe_db_instances' }
    ]}
>
<TabItem value="describe_db_instances">

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
    <td>Not supported by Neptune.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoMinorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>Indicates that minor version patches are applied automatically.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the Availability Zone the DB instance is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>Specifies the number of days for which automatic DB snapshots are retained.</td>
</tr>
<tr>
    <td><CopyableCode code="CACertificateIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the CA certificate for this DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="CharacterSetName" /></td>
    <td><code>string</code></td>
    <td>(Not supported by Neptune)</td>
</tr>
<tr>
    <td><CopyableCode code="CopyTagsToSnapshot" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether tags are copied from the DB instance to snapshots of the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.</td>
</tr>
<tr>
    <td><CopyableCode code="DBInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="DBInstanceClass" /></td>
    <td><code>string</code></td>
    <td>Contains the name of the compute and memory capacity class of the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>Contains a user-supplied database identifier. This identifier is the unique key that identifies a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="DBInstanceStatus" /></td>
    <td><code>string</code></td>
    <td>Specifies the current state of this database.</td>
</tr>
<tr>
    <td><CopyableCode code="DBName" /></td>
    <td><code>string</code></td>
    <td>The database name.</td>
</tr>
<tr>
    <td><CopyableCode code="DBParameterGroups" /></td>
    <td><code>string</code></td>
    <td>Provides the list of DB parameter groups applied to this DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="DBSecurityGroups" /></td>
    <td><code>string</code></td>
    <td>Provides List of DB security group elements containing only DBSecurityGroup.Name and DBSecurityGroup.Status subelements.</td>
</tr>
<tr>
    <td><CopyableCode code="DBSubnetGroup" /></td>
    <td><code>string</code></td>
    <td>Specifies information on the subnet group associated with the DB instance, including the name, description, and subnets in the subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="DbInstancePort" /></td>
    <td><code>integer</code></td>
    <td>Specifies the port that the DB instance listens on. If the DB instance is part of a DB cluster, this can be a different port than the DB cluster port.</td>
</tr>
<tr>
    <td><CopyableCode code="DbiResourceId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Region-unique, immutable identifier for the DB instance. This identifier is found in Amazon CloudTrail log entries whenever the Amazon KMS key for the DB instance is accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="DeletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether or not the DB instance has deletion protection enabled. The instance can't be deleted when deletion protection is enabled. See Deleting a DB Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainMemberships" /></td>
    <td><code>string</code></td>
    <td>Not supported</td>
</tr>
<tr>
    <td><CopyableCode code="EnabledCloudwatchLogsExports" /></td>
    <td><code>string</code></td>
    <td>A list of log types that this DB instance is configured to export to CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="Endpoint" /></td>
    <td><code>string</code></td>
    <td>Specifies the connection endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>Provides the name of the database engine to be used for this DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>Indicates the database engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="EnhancedMonitoringResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log stream that receives the Enhanced Monitoring metrics data for the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="IAMDatabaseAuthenticationEnabled" /></td>
    <td><code>boolean</code></td>
    <td>True if Amazon Identity and Access Management (IAM) authentication is enabled, and otherwise false.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceCreateTime" /></td>
    <td><code>string</code></td>
    <td>Provides the date and time the DB instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Iops" /></td>
    <td><code>integer</code></td>
    <td>Specifies the Provisioned IOPS (I/O operations per second) value.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>Not supported: The encryption for DB instances is managed by the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestRestorableTime" /></td>
    <td><code>string</code></td>
    <td>Specifies the latest time to which a database can be restored with point-in-time restore.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseModel" /></td>
    <td><code>string</code></td>
    <td>License model information for this DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MasterUsername" /></td>
    <td><code>string</code></td>
    <td>Not supported by Neptune.</td>
</tr>
<tr>
    <td><CopyableCode code="MonitoringInterval" /></td>
    <td><code>integer</code></td>
    <td>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MonitoringRoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the IAM role that permits Neptune to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="MultiAZ" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the DB instance is a Multi-AZ deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="OptionGroupMemberships" /></td>
    <td><code>string</code></td>
    <td>(Not supported by Neptune)</td>
</tr>
<tr>
    <td><CopyableCode code="PendingModifiedValues" /></td>
    <td><code>string</code></td>
    <td>Specifies that changes to the DB instance are pending. This element is only included when changes are pending. Specific changes are identified by subelements.</td>
</tr>
<tr>
    <td><CopyableCode code="PerformanceInsightsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>(Not supported by Neptune)</td>
</tr>
<tr>
    <td><CopyableCode code="PerformanceInsightsKMSKeyId" /></td>
    <td><code>string</code></td>
    <td>(Not supported by Neptune)</td>
</tr>
<tr>
    <td><CopyableCode code="PreferredBackupWindow" /></td>
    <td><code>string</code></td>
    <td>Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.</td>
</tr>
<tr>
    <td><CopyableCode code="PreferredMaintenanceWindow" /></td>
    <td><code>string</code></td>
    <td>Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="PromotionTier" /></td>
    <td><code>integer</code></td>
    <td>A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance.</td>
</tr>
<tr>
    <td><CopyableCode code="PubliclyAccessible" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB instance is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="ReadReplicaDBClusterIdentifiers" /></td>
    <td><code>string</code></td>
    <td>Contains one or more identifiers of DB clusters that are Read Replicas of this DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ReadReplicaDBInstanceIdentifiers" /></td>
    <td><code>string</code></td>
    <td>Contains one or more identifiers of the Read Replicas associated with this DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ReadReplicaSourceDBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>Contains the identifier of the source DB instance if this DB instance is a Read Replica.</td>
</tr>
<tr>
    <td><CopyableCode code="SecondaryAvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>If present, specifies the name of the secondary Availability Zone for a DB instance with multi-AZ support.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusInfos" /></td>
    <td><code>string</code></td>
    <td>The status of a Read Replica. If the instance is not a Read Replica, this is blank.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageEncrypted" /></td>
    <td><code>boolean</code></td>
    <td>Not supported: The encryption for DB instances is managed by the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageType" /></td>
    <td><code>string</code></td>
    <td>Specifies the storage type associated with the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="TdeCredentialArn" /></td>
    <td><code>string</code></td>
    <td>The ARN from the key store with which the instance is associated for TDE encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="Timezone" /></td>
    <td><code>string</code></td>
    <td>Not supported.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcSecurityGroups" /></td>
    <td><code>string</code></td>
    <td>Provides a list of VPC security group elements that the DB instance belongs to.</td>
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
    <td><a href="#describe_db_instances"><CopyableCode code="describe_db_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns information about provisioned instances, and supports pagination. This operation can also return information for Amazon RDS instances and Amazon DocDB instances.</td>
</tr>
<tr>
    <td><a href="#create_db_instance"><CopyableCode code="create_db_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-DBInstanceClass"><code>DBInstanceClass</code></a>, <a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBName"><code>DBName</code></a>, <a href="#parameter-AllocatedStorage"><code>AllocatedStorage</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-MasterUsername"><code>MasterUsername</code></a>, <a href="#parameter-MasterUserPassword"><code>MasterUserPassword</code></a>, <a href="#parameter-DBSecurityGroups"><code>DBSecurityGroups</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-DBParameterGroupName"><code>DBParameterGroupName</code></a>, <a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-MultiAZ"><code>MultiAZ</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-AutoMinorVersionUpgrade"><code>AutoMinorVersionUpgrade</code></a>, <a href="#parameter-LicenseModel"><code>LicenseModel</code></a>, <a href="#parameter-Iops"><code>Iops</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-CharacterSetName"><code>CharacterSetName</code></a>, <a href="#parameter-PubliclyAccessible"><code>PubliclyAccessible</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-TdeCredentialArn"><code>TdeCredentialArn</code></a>, <a href="#parameter-TdeCredentialPassword"><code>TdeCredentialPassword</code></a>, <a href="#parameter-StorageEncrypted"><code>StorageEncrypted</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-MonitoringInterval"><code>MonitoringInterval</code></a>, <a href="#parameter-MonitoringRoleArn"><code>MonitoringRoleArn</code></a>, <a href="#parameter-DomainIAMRoleName"><code>DomainIAMRoleName</code></a>, <a href="#parameter-PromotionTier"><code>PromotionTier</code></a>, <a href="#parameter-Timezone"><code>Timezone</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-EnablePerformanceInsights"><code>EnablePerformanceInsights</code></a>, <a href="#parameter-PerformanceInsightsKMSKeyId"><code>PerformanceInsightsKMSKeyId</code></a>, <a href="#parameter-EnableCloudwatchLogsExports"><code>EnableCloudwatchLogsExports</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a></td>
    <td>Creates a new DB instance.</td>
</tr>
<tr>
    <td><a href="#modify_db_instance"><CopyableCode code="modify_db_instance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AllocatedStorage"><code>AllocatedStorage</code></a>, <a href="#parameter-DBInstanceClass"><code>DBInstanceClass</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-DBSecurityGroups"><code>DBSecurityGroups</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a>, <a href="#parameter-MasterUserPassword"><code>MasterUserPassword</code></a>, <a href="#parameter-DBParameterGroupName"><code>DBParameterGroupName</code></a>, <a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-MultiAZ"><code>MultiAZ</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-AllowMajorVersionUpgrade"><code>AllowMajorVersionUpgrade</code></a>, <a href="#parameter-AutoMinorVersionUpgrade"><code>AutoMinorVersionUpgrade</code></a>, <a href="#parameter-LicenseModel"><code>LicenseModel</code></a>, <a href="#parameter-Iops"><code>Iops</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-NewDBInstanceIdentifier"><code>NewDBInstanceIdentifier</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-TdeCredentialArn"><code>TdeCredentialArn</code></a>, <a href="#parameter-TdeCredentialPassword"><code>TdeCredentialPassword</code></a>, <a href="#parameter-CACertificateIdentifier"><code>CACertificateIdentifier</code></a>, <a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-MonitoringInterval"><code>MonitoringInterval</code></a>, <a href="#parameter-DBPortNumber"><code>DBPortNumber</code></a>, <a href="#parameter-PubliclyAccessible"><code>PubliclyAccessible</code></a>, <a href="#parameter-MonitoringRoleArn"><code>MonitoringRoleArn</code></a>, <a href="#parameter-DomainIAMRoleName"><code>DomainIAMRoleName</code></a>, <a href="#parameter-PromotionTier"><code>PromotionTier</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-EnablePerformanceInsights"><code>EnablePerformanceInsights</code></a>, <a href="#parameter-PerformanceInsightsKMSKeyId"><code>PerformanceInsightsKMSKeyId</code></a>, <a href="#parameter-CloudwatchLogsExportConfiguration"><code>CloudwatchLogsExportConfiguration</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a></td>
    <td>Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call DescribeValidDBInstanceModifications before you call ModifyDBInstance.</td>
</tr>
<tr>
    <td><a href="#delete_db_instance"><CopyableCode code="delete_db_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SkipFinalSnapshot"><code>SkipFinalSnapshot</code></a>, <a href="#parameter-FinalDBSnapshotIdentifier"><code>FinalDBSnapshotIdentifier</code></a></td>
    <td>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by DeleteDBInstance are not deleted. If you request a final DB snapshot the status of the Amazon Neptune DB instance is deleting until the DB snapshot is created. The API action DescribeDBInstance is used to monitor the status of this operation. The action can't be canceled or reverted once submitted. Note that when a DB instance is in a failure state and has a status of failed, incompatible-restore, or incompatible-network, you can only delete it when the SkipFinalSnapshot parameter is set to true. You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</td>
</tr>
<tr>
    <td><a href="#reboot_db_instance"><CopyableCode code="reboot_db_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ForceFailover"><code>ForceFailover</code></a></td>
    <td>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect. Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</td>
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
    <td>The identifier of the DB cluster that the instance will belong to. For information on creating a DB cluster, see CreateDBCluster. Type: String</td>
</tr>
<tr id="parameter-DBInstanceClass">
    <td><CopyableCode code="DBInstanceClass" /></td>
    <td><code>string</code></td>
    <td>The compute and memory capacity of the DB instance, for example, db.m4.large. Not all DB instance classes are available in all Amazon Regions.</td>
</tr>
<tr id="parameter-DBInstanceIdentifier">
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The DB instance identifier. This parameter is stored as a lowercase string. Constraints: Must match the identifier of an existing DBInstance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AllocatedStorage">
    <td><CopyableCode code="AllocatedStorage" /></td>
    <td><code>integer</code></td>
    <td>Not supported by Neptune.</td>
</tr>
<tr id="parameter-AllowMajorVersionUpgrade">
    <td><CopyableCode code="AllowMajorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>Indicates that major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.</td>
</tr>
<tr id="parameter-ApplyImmediately">
    <td><CopyableCode code="ApplyImmediately" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB instance. If this parameter is set to false, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to RebootDBInstance, or the next failure reboot. Default: false</td>
</tr>
<tr id="parameter-AutoMinorVersionUpgrade">
    <td><CopyableCode code="AutoMinorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>Indicates that minor version upgrades are applied automatically to the DB instance during the maintenance window. Changing this parameter doesn't result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage will result if this parameter is set to true during the maintenance window, and a newer minor version is available, and Neptune has enabled auto patching for that engine version.</td>
</tr>
<tr id="parameter-AvailabilityZone">
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The EC2 Availability Zone that the DB instance is created in Default: A random, system-chosen Availability Zone in the endpoint's Amazon Region. Example: us-east-1d Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is set to true. The specified Availability Zone must be in the same Amazon Region as the current endpoint.</td>
</tr>
<tr id="parameter-BackupRetentionPeriod">
    <td><CopyableCode code="BackupRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see ModifyDBCluster. Default: Uses existing setting</td>
</tr>
<tr id="parameter-CACertificateIdentifier">
    <td><CopyableCode code="CACertificateIdentifier" /></td>
    <td><code>string</code></td>
    <td>Indicates the certificate that needs to be associated with the instance.</td>
</tr>
<tr id="parameter-CharacterSetName">
    <td><CopyableCode code="CharacterSetName" /></td>
    <td><code>string</code></td>
    <td>(Not supported by Neptune)</td>
</tr>
<tr id="parameter-CloudwatchLogsExportConfiguration">
    <td><CopyableCode code="CloudwatchLogsExportConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</td>
</tr>
<tr id="parameter-CopyTagsToSnapshot">
    <td><CopyableCode code="CopyTagsToSnapshot" /></td>
    <td><code>boolean</code></td>
    <td>True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.</td>
</tr>
<tr id="parameter-DBInstanceClass">
    <td><CopyableCode code="DBInstanceClass" /></td>
    <td><code>string</code></td>
    <td>The new compute and memory capacity of the DB instance, for example, db.m4.large. Not all DB instance classes are available in all Amazon Regions. If you modify the DB instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless ApplyImmediately is specified as true for this request. Default: Uses existing setting</td>
</tr>
<tr id="parameter-DBInstanceIdentifier">
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The user-supplied instance identifier. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive. Constraints: If supplied, must match the identifier of an existing DBInstance.</td>
</tr>
<tr id="parameter-DBName">
    <td><CopyableCode code="DBName" /></td>
    <td><code>string</code></td>
    <td>Not supported.</td>
</tr>
<tr id="parameter-DBParameterGroupName">
    <td><CopyableCode code="DBParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the DB parameter group to apply to the DB instance. Changing this setting doesn't result in an outage. The parameter group name itself is changed immediately, but the actual parameter changes are not applied until you reboot the instance without failover. The db instance will NOT be rebooted automatically and the parameter changes will NOT be applied during the next maintenance window. Default: Uses existing setting Constraints: The DB parameter group must be in the same DB parameter group family as this DB instance.</td>
</tr>
<tr id="parameter-DBPortNumber">
    <td><CopyableCode code="DBPortNumber" /></td>
    <td><code>integer</code></td>
    <td>The port number on which the database accepts connections. The value of the DBPortNumber parameter must not match any of the port values specified for options in the option group for the DB instance. Your database will restart when you change the DBPortNumber value regardless of the value of the ApplyImmediately parameter. Default: 8182</td>
</tr>
<tr id="parameter-DBSecurityGroups">
    <td><CopyableCode code="DBSecurityGroups" /></td>
    <td><code>array</code></td>
    <td>A list of DB security groups to authorize on this DB instance. Changing this setting doesn't result in an outage and the change is asynchronously applied as soon as possible. Constraints: If supplied, must match existing DBSecurityGroups.</td>
</tr>
<tr id="parameter-DBSubnetGroupName">
    <td><CopyableCode code="DBSubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The new DB subnet group for the DB instance. You can use this parameter to move your DB instance to a different VPC. Changing the subnet group causes an outage during the change. The change is applied during the next maintenance window, unless you specify true for the ApplyImmediately parameter. Constraints: If supplied, must match the name of an existing DBSubnetGroup. Example: mySubnetGroup</td>
</tr>
<tr id="parameter-DeletionProtection">
    <td><CopyableCode code="DeletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. See Deleting a DB Instance.</td>
</tr>
<tr id="parameter-Domain">
    <td><CopyableCode code="Domain" /></td>
    <td><code>string</code></td>
    <td>Not supported.</td>
</tr>
<tr id="parameter-DomainIAMRoleName">
    <td><CopyableCode code="DomainIAMRoleName" /></td>
    <td><code>string</code></td>
    <td>Not supported</td>
</tr>
<tr id="parameter-EnableCloudwatchLogsExports">
    <td><CopyableCode code="EnableCloudwatchLogsExports" /></td>
    <td><code>array</code></td>
    <td>The list of log types that need to be enabled for exporting to CloudWatch Logs.</td>
</tr>
<tr id="parameter-EnableIAMDatabaseAuthentication">
    <td><CopyableCode code="EnableIAMDatabaseAuthentication" /></td>
    <td><code>boolean</code></td>
    <td>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false. You can enable IAM database authentication for the following database engines Not applicable. Mapping Amazon IAM accounts to database accounts is managed by the DB cluster. For more information, see ModifyDBCluster. Default: false</td>
</tr>
<tr id="parameter-EnablePerformanceInsights">
    <td><CopyableCode code="EnablePerformanceInsights" /></td>
    <td><code>boolean</code></td>
    <td>(Not supported by Neptune)</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The name of the database engine to be used for this instance. Valid Values: neptune</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The version number of the database engine to upgrade to. Currently, setting this parameter has no effect. To upgrade your database engine to the most recent release, use the ApplyPendingMaintenanceAction API.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more DB instances to describe. Supported filters: db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB instances associated with the DB clusters identified by these ARNs. engine - Accepts an engine name (such as neptune), and restricts the results list to DB instances created by that engine. For example, to invoke this API from the Amazon CLI and filter so that only Neptune DB instances are returned, you could use the following command:</td>
</tr>
<tr id="parameter-FinalDBSnapshotIdentifier">
    <td><CopyableCode code="FinalDBSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The DBSnapshotIdentifier of the new DBSnapshot created when SkipFinalSnapshot is set to false. Specifying this parameter and also setting the SkipFinalSnapshot parameter to true results in an error. Constraints: Must be 1 to 255 letters or numbers. First character must be a letter Cannot end with a hyphen or contain two consecutive hyphens Cannot be specified when deleting a Read Replica.</td>
</tr>
<tr id="parameter-ForceFailover">
    <td><CopyableCode code="ForceFailover" /></td>
    <td><code>boolean</code></td>
    <td>When true, the reboot is conducted through a MultiAZ failover. Constraint: You can't specify true if the instance is not configured for MultiAZ.</td>
</tr>
<tr id="parameter-Iops">
    <td><CopyableCode code="Iops" /></td>
    <td><code>integer</code></td>
    <td>The new Provisioned IOPS (I/O operations per second) value for the instance. Changing this setting doesn't result in an outage and the change is applied during the next maintenance window unless the ApplyImmediately parameter is set to true for this request. Default: Uses existing setting</td>
</tr>
<tr id="parameter-KmsKeyId">
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon KMS key identifier for an encrypted DB instance. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same Amazon account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KMS encryption key. Not applicable. The KMS key identifier is managed by the DB cluster. For more information, see CreateDBCluster. If the StorageEncrypted parameter is true, and you do not specify a value for the KmsKeyId parameter, then Amazon Neptune will use your default encryption key. Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region.</td>
</tr>
<tr id="parameter-LicenseModel">
    <td><CopyableCode code="LicenseModel" /></td>
    <td><code>string</code></td>
    <td>Not supported by Neptune.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeDBInstances request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
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
<tr id="parameter-MonitoringInterval">
    <td><CopyableCode code="MonitoringInterval" /></td>
    <td><code>integer</code></td>
    <td>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. If MonitoringRoleArn is specified, then you must also set MonitoringInterval to a value other than 0. Valid Values: 0, 1, 5, 10, 15, 30, 60</td>
</tr>
<tr id="parameter-MonitoringRoleArn">
    <td><CopyableCode code="MonitoringRoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. If MonitoringInterval is set to a value other than 0, then you must supply a MonitoringRoleArn value.</td>
</tr>
<tr id="parameter-MultiAZ">
    <td><CopyableCode code="MultiAZ" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result in an outage and the change is applied during the next maintenance window unless the ApplyImmediately parameter is set to true for this request.</td>
</tr>
<tr id="parameter-NewDBInstanceIdentifier">
    <td><CopyableCode code="NewDBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The new DB instance identifier for the DB instance when renaming a DB instance. When you change the DB instance identifier, an instance reboot will occur immediately if you set Apply Immediately to true, or will occur during the next maintenance window if Apply Immediately to false. This value is stored as a lowercase string. Constraints: Must contain from 1 to 63 letters, numbers, or hyphens. The first character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens. Example: mydbinstance</td>
</tr>
<tr id="parameter-OptionGroupName">
    <td><CopyableCode code="OptionGroupName" /></td>
    <td><code>string</code></td>
    <td>(Not supported by Neptune)</td>
</tr>
<tr id="parameter-PerformanceInsightsKMSKeyId">
    <td><CopyableCode code="PerformanceInsightsKMSKeyId" /></td>
    <td><code>string</code></td>
    <td>(Not supported by Neptune)</td>
</tr>
<tr id="parameter-Port">
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port number on which the database accepts connections. Not applicable. The port is managed by the DB cluster. For more information, see CreateDBCluster. Default: 8182 Type: Integer</td>
</tr>
<tr id="parameter-PreferredBackupWindow">
    <td><CopyableCode code="PreferredBackupWindow" /></td>
    <td><code>string</code></td>
    <td>The daily time range during which automated backups are created if automated backups are enabled. Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see ModifyDBCluster. Constraints: Must be in the format hh24:mi-hh24:mi Must be in Universal Time Coordinated (UTC) Must not conflict with the preferred maintenance window Must be at least 30 minutes</td>
</tr>
<tr id="parameter-PreferredMaintenanceWindow">
    <td><CopyableCode code="PreferredMaintenanceWindow" /></td>
    <td><code>string</code></td>
    <td>The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, then changing this parameter will cause a reboot of the DB instance. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied. Default: Uses existing setting Format: ddd:hh24:mi-ddd:hh24:mi Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun Constraints: Must be at least 30 minutes</td>
</tr>
<tr id="parameter-PromotionTier">
    <td><CopyableCode code="PromotionTier" /></td>
    <td><code>integer</code></td>
    <td>A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance. Default: 1 Valid Values: 0 - 15</td>
</tr>
<tr id="parameter-PubliclyAccessible">
    <td><CopyableCode code="PubliclyAccessible" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB instance is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</td>
</tr>
<tr id="parameter-SkipFinalSnapshot">
    <td><CopyableCode code="SkipFinalSnapshot" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether a final DB snapshot is created before the DB instance is deleted. If true is specified, no DBSnapshot is created. If false is specified, a DB snapshot is created before the DB instance is deleted. Note that when a DB instance is in a failure state and has a status of 'failed', 'incompatible-restore', or 'incompatible-network', it can only be deleted when the SkipFinalSnapshot parameter is set to "true". Specify true when deleting a Read Replica. The FinalDBSnapshotIdentifier parameter must be specified if SkipFinalSnapshot is false. Default: false</td>
</tr>
<tr id="parameter-StorageEncrypted">
    <td><CopyableCode code="StorageEncrypted" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the DB instance is encrypted. Not applicable. The encryption for DB instances is managed by the DB cluster. For more information, see CreateDBCluster. Default: false</td>
</tr>
<tr id="parameter-StorageType">
    <td><CopyableCode code="StorageType" /></td>
    <td><code>string</code></td>
    <td>Not applicable. In Neptune the storage type is managed at the DB Cluster level.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the new instance.</td>
</tr>
<tr id="parameter-TdeCredentialArn">
    <td><CopyableCode code="TdeCredentialArn" /></td>
    <td><code>string</code></td>
    <td>The ARN from the key store with which to associate the instance for TDE encryption.</td>
</tr>
<tr id="parameter-TdeCredentialPassword">
    <td><CopyableCode code="TdeCredentialPassword" /></td>
    <td><code>string</code></td>
    <td>The password for the given ARN from the key store in order to access the device.</td>
</tr>
<tr id="parameter-Timezone">
    <td><CopyableCode code="Timezone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the DB instance.</td>
</tr>
<tr id="parameter-VpcSecurityGroupIds">
    <td><CopyableCode code="VpcSecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>A list of EC2 VPC security groups to authorize on this DB instance. This change is asynchronously applied as soon as possible. Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see ModifyDBCluster. Constraints: If supplied, must match existing VpcSecurityGroupIds.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_instances"
    values={[
        { label: 'describe_db_instances', value: 'describe_db_instances' }
    ]}
>
<TabItem value="describe_db_instances">

Returns information about provisioned instances, and supports pagination. This operation can also return information for Amazon RDS instances and Amazon DocDB instances.

```sql
SELECT
AllocatedStorage,
AutoMinorVersionUpgrade,
AvailabilityZone,
BackupRetentionPeriod,
CACertificateIdentifier,
CharacterSetName,
CopyTagsToSnapshot,
DBClusterIdentifier,
DBInstanceArn,
DBInstanceClass,
DBInstanceIdentifier,
DBInstanceStatus,
DBName,
DBParameterGroups,
DBSecurityGroups,
DBSubnetGroup,
DbInstancePort,
DbiResourceId,
DeletionProtection,
DomainMemberships,
EnabledCloudwatchLogsExports,
Endpoint,
Engine,
EngineVersion,
EnhancedMonitoringResourceArn,
IAMDatabaseAuthenticationEnabled,
InstanceCreateTime,
Iops,
KmsKeyId,
LatestRestorableTime,
LicenseModel,
MasterUsername,
MonitoringInterval,
MonitoringRoleArn,
MultiAZ,
OptionGroupMemberships,
PendingModifiedValues,
PerformanceInsightsEnabled,
PerformanceInsightsKMSKeyId,
PreferredBackupWindow,
PreferredMaintenanceWindow,
PromotionTier,
PubliclyAccessible,
ReadReplicaDBClusterIdentifiers,
ReadReplicaDBInstanceIdentifiers,
ReadReplicaSourceDBInstanceIdentifier,
SecondaryAvailabilityZone,
StatusInfos,
StorageEncrypted,
StorageType,
TdeCredentialArn,
Timezone,
VpcSecurityGroups
FROM aws.neptune.db_instances
WHERE region = '{{ region }}' -- required
AND DBInstanceIdentifier = '{{ DBInstanceIdentifier }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_db_instance"
    values={[
        { label: 'create_db_instance', value: 'create_db_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_db_instance">

Creates a new DB instance.

```sql
INSERT INTO aws.neptune.db_instances (
DBInstanceIdentifier,
DBInstanceClass,
DBClusterIdentifier,
region,
DBName,
AllocatedStorage,
Engine,
MasterUsername,
MasterUserPassword,
DBSecurityGroups,
VpcSecurityGroupIds,
AvailabilityZone,
DBSubnetGroupName,
PreferredMaintenanceWindow,
DBParameterGroupName,
BackupRetentionPeriod,
PreferredBackupWindow,
Port,
MultiAZ,
EngineVersion,
AutoMinorVersionUpgrade,
LicenseModel,
Iops,
OptionGroupName,
CharacterSetName,
PubliclyAccessible,
Tags,
StorageType,
TdeCredentialArn,
TdeCredentialPassword,
StorageEncrypted,
KmsKeyId,
Domain,
CopyTagsToSnapshot,
MonitoringInterval,
MonitoringRoleArn,
DomainIAMRoleName,
PromotionTier,
Timezone,
EnableIAMDatabaseAuthentication,
EnablePerformanceInsights,
PerformanceInsightsKMSKeyId,
EnableCloudwatchLogsExports,
DeletionProtection
)
SELECT 
'{{ DBInstanceIdentifier }}',
'{{ DBInstanceClass }}',
'{{ DBClusterIdentifier }}',
'{{ region }}',
'{{ DBName }}',
'{{ AllocatedStorage }}',
'{{ Engine }}',
'{{ MasterUsername }}',
'{{ MasterUserPassword }}',
'{{ DBSecurityGroups }}',
'{{ VpcSecurityGroupIds }}',
'{{ AvailabilityZone }}',
'{{ DBSubnetGroupName }}',
'{{ PreferredMaintenanceWindow }}',
'{{ DBParameterGroupName }}',
'{{ BackupRetentionPeriod }}',
'{{ PreferredBackupWindow }}',
'{{ Port }}',
'{{ MultiAZ }}',
'{{ EngineVersion }}',
'{{ AutoMinorVersionUpgrade }}',
'{{ LicenseModel }}',
'{{ Iops }}',
'{{ OptionGroupName }}',
'{{ CharacterSetName }}',
'{{ PubliclyAccessible }}',
'{{ Tags }}',
'{{ StorageType }}',
'{{ TdeCredentialArn }}',
'{{ TdeCredentialPassword }}',
'{{ StorageEncrypted }}',
'{{ KmsKeyId }}',
'{{ Domain }}',
'{{ CopyTagsToSnapshot }}',
'{{ MonitoringInterval }}',
'{{ MonitoringRoleArn }}',
'{{ DomainIAMRoleName }}',
'{{ PromotionTier }}',
'{{ Timezone }}',
'{{ EnableIAMDatabaseAuthentication }}',
'{{ EnablePerformanceInsights }}',
'{{ PerformanceInsightsKMSKeyId }}',
'{{ EnableCloudwatchLogsExports }}',
'{{ DeletionProtection }}'
RETURNING
AllocatedStorage,
AutoMinorVersionUpgrade,
AvailabilityZone,
BackupRetentionPeriod,
CACertificateIdentifier,
CharacterSetName,
CopyTagsToSnapshot,
DBClusterIdentifier,
DBInstanceArn,
DBInstanceClass,
DBInstanceIdentifier,
DBInstanceStatus,
DBName,
DBParameterGroups,
DBSecurityGroups,
DBSubnetGroup,
DbInstancePort,
DbiResourceId,
DeletionProtection,
DomainMemberships,
EnabledCloudwatchLogsExports,
Endpoint,
Engine,
EngineVersion,
EnhancedMonitoringResourceArn,
IAMDatabaseAuthenticationEnabled,
InstanceCreateTime,
Iops,
KmsKeyId,
LatestRestorableTime,
LicenseModel,
MasterUsername,
MonitoringInterval,
MonitoringRoleArn,
MultiAZ,
OptionGroupMemberships,
PendingModifiedValues,
PerformanceInsightsEnabled,
PerformanceInsightsKMSKeyId,
PreferredBackupWindow,
PreferredMaintenanceWindow,
PromotionTier,
PubliclyAccessible,
ReadReplicaDBClusterIdentifiers,
ReadReplicaDBInstanceIdentifiers,
ReadReplicaSourceDBInstanceIdentifier,
SecondaryAvailabilityZone,
StatusInfos,
StorageEncrypted,
StorageType,
TdeCredentialArn,
Timezone,
VpcSecurityGroups
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_instances
  props:
    - name: DBInstanceIdentifier
      value: "{{ DBInstanceIdentifier }}"
      description: Required parameter for the db_instances resource.
    - name: DBInstanceClass
      value: "{{ DBInstanceClass }}"
      description: Required parameter for the db_instances resource.
    - name: DBClusterIdentifier
      value: "{{ DBClusterIdentifier }}"
      description: Required parameter for the db_instances resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_instances resource.
    - name: DBName
      value: "{{ DBName }}"
      description: Not supported.
      description: Not supported.
    - name: AllocatedStorage
      value: {{ AllocatedStorage }}
      description: Not supported by Neptune.
      description: Not supported by Neptune.
    - name: Engine
      value: "{{ Engine }}"
      description: The name of the database engine to be used for this instance. Valid Values: neptune
      description: The name of the database engine to be used for this instance. Valid Values: neptune
    - name: MasterUsername
      value: "{{ MasterUsername }}"
      description: Not supported by Neptune.
      description: Not supported by Neptune.
    - name: MasterUserPassword
      value: "{{ MasterUserPassword }}"
      description: Not supported by Neptune.
      description: Not supported by Neptune.
    - name: DBSecurityGroups
      value: "{{ DBSecurityGroups }}"
      description: A list of DB security groups to associate with this DB instance. Default: The default DB security group for the database engine.
      description: A list of DB security groups to associate with this DB instance. Default: The default DB security group for the database engine.
    - name: VpcSecurityGroupIds
      value: "{{ VpcSecurityGroupIds }}"
      description: A list of EC2 VPC security groups to associate with this DB instance. Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see CreateDBCluster. Default: The default EC2 VPC security group for the DB subnet group's VPC.
      description: A list of EC2 VPC security groups to associate with this DB instance. Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see CreateDBCluster. Default: The default EC2 VPC security group for the DB subnet group's VPC.
    - name: AvailabilityZone
      value: "{{ AvailabilityZone }}"
      description: The EC2 Availability Zone that the DB instance is created in Default: A random, system-chosen Availability Zone in the endpoint's Amazon Region. Example: us-east-1d Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is set to true. The specified Availability Zone must be in the same Amazon Region as the current endpoint.
      description: The EC2 Availability Zone that the DB instance is created in Default: A random, system-chosen Availability Zone in the endpoint's Amazon Region. Example: us-east-1d Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is set to true. The specified Availability Zone must be in the same Amazon Region as the current endpoint.
    - name: DBSubnetGroupName
      value: "{{ DBSubnetGroupName }}"
      description: A DB subnet group to associate with this DB instance. If there is no DB subnet group, then it is a non-VPC DB instance.
      description: A DB subnet group to associate with this DB instance. If there is no DB subnet group, then it is a non-VPC DB instance.
    - name: PreferredMaintenanceWindow
      value: "{{ PreferredMaintenanceWindow }}"
      description: The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window.
      description: The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window.
    - name: DBParameterGroupName
      value: "{{ DBParameterGroupName }}"
      description: The name of the DB parameter group to associate with this DB instance. If this argument is omitted, the default DBParameterGroup for the specified engine is used. Constraints: Must be 1 to 255 letters, numbers, or hyphens. First character must be a letter Cannot end with a hyphen or contain two consecutive hyphens
      description: The name of the DB parameter group to associate with this DB instance. If this argument is omitted, the default DBParameterGroup for the specified engine is used. Constraints: Must be 1 to 255 letters, numbers, or hyphens. First character must be a letter Cannot end with a hyphen or contain two consecutive hyphens
    - name: BackupRetentionPeriod
      value: {{ BackupRetentionPeriod }}
      description: The number of days for which automated backups are retained. Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see CreateDBCluster. Default: 1 Constraints: Must be a value from 0 to 35 Cannot be set to 0 if the DB instance is a source to Read Replicas
      description: The number of days for which automated backups are retained. Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see CreateDBCluster. Default: 1 Constraints: Must be a value from 0 to 35 Cannot be set to 0 if the DB instance is a source to Read Replicas
    - name: PreferredBackupWindow
      value: "{{ PreferredBackupWindow }}"
      description: The daily time range during which automated backups are created. Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see CreateDBCluster.
      description: The daily time range during which automated backups are created. Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see CreateDBCluster.
    - name: Port
      value: {{ Port }}
      description: The port number on which the database accepts connections. Not applicable. The port is managed by the DB cluster. For more information, see CreateDBCluster. Default: 8182 Type: Integer
      description: The port number on which the database accepts connections. Not applicable. The port is managed by the DB cluster. For more information, see CreateDBCluster. Default: 8182 Type: Integer
    - name: MultiAZ
      value: {{ MultiAZ }}
      description: Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the MultiAZ parameter is set to true.
      description: Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the MultiAZ parameter is set to true.
    - name: EngineVersion
      value: "{{ EngineVersion }}"
      description: The version number of the database engine to use. Currently, setting this parameter has no effect.
      description: The version number of the database engine to use. Currently, setting this parameter has no effect.
    - name: AutoMinorVersionUpgrade
      value: {{ AutoMinorVersionUpgrade }}
      description: Indicates that minor engine upgrades are applied automatically to the DB instance during the maintenance window. Default: true
      description: Indicates that minor engine upgrades are applied automatically to the DB instance during the maintenance window. Default: true
    - name: LicenseModel
      value: "{{ LicenseModel }}"
      description: License model information for this DB instance. Valid values: license-included | bring-your-own-license | general-public-license
      description: License model information for this DB instance. Valid values: license-included | bring-your-own-license | general-public-license
    - name: Iops
      value: {{ Iops }}
      description: The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.
      description: The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.
    - name: OptionGroupName
      value: "{{ OptionGroupName }}"
      description: (Not supported by Neptune)
      description: (Not supported by Neptune)
    - name: CharacterSetName
      value: "{{ CharacterSetName }}"
      description: (Not supported by Neptune)
      description: (Not supported by Neptune)
    - name: PubliclyAccessible
      value: {{ PubliclyAccessible }}
      description: Indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB instance is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.
      description: Indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB instance is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.
    - name: Tags
      value: "{{ Tags }}"
      description: The tags to assign to the new instance.
      description: The tags to assign to the new instance.
    - name: StorageType
      value: "{{ StorageType }}"
      description: Not applicable. In Neptune the storage type is managed at the DB Cluster level.
      description: Not applicable. In Neptune the storage type is managed at the DB Cluster level.
    - name: TdeCredentialArn
      value: "{{ TdeCredentialArn }}"
      description: The ARN from the key store with which to associate the instance for TDE encryption.
      description: The ARN from the key store with which to associate the instance for TDE encryption.
    - name: TdeCredentialPassword
      value: "{{ TdeCredentialPassword }}"
      description: The password for the given ARN from the key store in order to access the device.
      description: The password for the given ARN from the key store in order to access the device.
    - name: StorageEncrypted
      value: {{ StorageEncrypted }}
      description: Specifies whether the DB instance is encrypted. Not applicable. The encryption for DB instances is managed by the DB cluster. For more information, see CreateDBCluster. Default: false
      description: Specifies whether the DB instance is encrypted. Not applicable. The encryption for DB instances is managed by the DB cluster. For more information, see CreateDBCluster. Default: false
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: The Amazon KMS key identifier for an encrypted DB instance. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same Amazon account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KMS encryption key. Not applicable. The KMS key identifier is managed by the DB cluster. For more information, see CreateDBCluster. If the StorageEncrypted parameter is true, and you do not specify a value for the KmsKeyId parameter, then Amazon Neptune will use your default encryption key. Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region.
      description: The Amazon KMS key identifier for an encrypted DB instance. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same Amazon account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KMS encryption key. Not applicable. The KMS key identifier is managed by the DB cluster. For more information, see CreateDBCluster. If the StorageEncrypted parameter is true, and you do not specify a value for the KmsKeyId parameter, then Amazon Neptune will use your default encryption key. Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region.
    - name: Domain
      value: "{{ Domain }}"
      description: Specify the Active Directory Domain to create the instance in.
      description: Specify the Active Directory Domain to create the instance in.
    - name: CopyTagsToSnapshot
      value: {{ CopyTagsToSnapshot }}
      description: True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.
      description: True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.
    - name: MonitoringInterval
      value: {{ MonitoringInterval }}
      description: The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. If MonitoringRoleArn is specified, then you must also set MonitoringInterval to a value other than 0. Valid Values: 0, 1, 5, 10, 15, 30, 60
      description: The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. If MonitoringRoleArn is specified, then you must also set MonitoringInterval to a value other than 0. Valid Values: 0, 1, 5, 10, 15, 30, 60
    - name: MonitoringRoleArn
      value: "{{ MonitoringRoleArn }}"
      description: The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. If MonitoringInterval is set to a value other than 0, then you must supply a MonitoringRoleArn value.
      description: The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. If MonitoringInterval is set to a value other than 0, then you must supply a MonitoringRoleArn value.
    - name: DomainIAMRoleName
      value: "{{ DomainIAMRoleName }}"
      description: Specify the name of the IAM role to be used when making API calls to the Directory Service.
      description: Specify the name of the IAM role to be used when making API calls to the Directory Service.
    - name: PromotionTier
      value: {{ PromotionTier }}
      description: A value that specifies the order in which an Read Replica is promoted to the primary instance after a failure of the existing primary instance. Default: 1 Valid Values: 0 - 15
      description: A value that specifies the order in which an Read Replica is promoted to the primary instance after a failure of the existing primary instance. Default: 1 Valid Values: 0 - 15
    - name: Timezone
      value: "{{ Timezone }}"
      description: The time zone of the DB instance.
      description: The time zone of the DB instance.
    - name: EnableIAMDatabaseAuthentication
      value: {{ EnableIAMDatabaseAuthentication }}
      description: Not supported by Neptune (ignored).
      description: Not supported by Neptune (ignored).
    - name: EnablePerformanceInsights
      value: {{ EnablePerformanceInsights }}
      description: (Not supported by Neptune)
      description: (Not supported by Neptune)
    - name: PerformanceInsightsKMSKeyId
      value: "{{ PerformanceInsightsKMSKeyId }}"
      description: (Not supported by Neptune)
      description: (Not supported by Neptune)
    - name: EnableCloudwatchLogsExports
      value: "{{ EnableCloudwatchLogsExports }}"
      description: The list of log types that need to be enabled for exporting to CloudWatch Logs.
      description: The list of log types that need to be enabled for exporting to CloudWatch Logs.
    - name: DeletionProtection
      value: {{ DeletionProtection }}
      description: A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. See Deleting a DB Instance. DB instances in a DB cluster can be deleted even when deletion protection is enabled in their parent DB cluster.
      description: A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. See Deleting a DB Instance. DB instances in a DB cluster can be deleted even when deletion protection is enabled in their parent DB cluster.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_db_instance"
    values={[
        { label: 'modify_db_instance', value: 'modify_db_instance' }
    ]}
>
<TabItem value="modify_db_instance">

Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call DescribeValidDBInstanceModifications before you call ModifyDBInstance.

```sql
UPDATE aws.neptune.db_instances
SET 
-- No updatable properties
WHERE 
DBInstanceIdentifier = '{{ DBInstanceIdentifier }}' --required
AND region = '{{ region }}' --required
AND AllocatedStorage = '{{ AllocatedStorage}}'
AND DBInstanceClass = '{{ DBInstanceClass}}'
AND DBSubnetGroupName = '{{ DBSubnetGroupName}}'
AND DBSecurityGroups = '{{ DBSecurityGroups}}'
AND VpcSecurityGroupIds = '{{ VpcSecurityGroupIds}}'
AND ApplyImmediately = {{ ApplyImmediately}}
AND MasterUserPassword = '{{ MasterUserPassword}}'
AND DBParameterGroupName = '{{ DBParameterGroupName}}'
AND BackupRetentionPeriod = '{{ BackupRetentionPeriod}}'
AND PreferredBackupWindow = '{{ PreferredBackupWindow}}'
AND PreferredMaintenanceWindow = '{{ PreferredMaintenanceWindow}}'
AND MultiAZ = {{ MultiAZ}}
AND EngineVersion = '{{ EngineVersion}}'
AND AllowMajorVersionUpgrade = {{ AllowMajorVersionUpgrade}}
AND AutoMinorVersionUpgrade = {{ AutoMinorVersionUpgrade}}
AND LicenseModel = '{{ LicenseModel}}'
AND Iops = '{{ Iops}}'
AND OptionGroupName = '{{ OptionGroupName}}'
AND NewDBInstanceIdentifier = '{{ NewDBInstanceIdentifier}}'
AND StorageType = '{{ StorageType}}'
AND TdeCredentialArn = '{{ TdeCredentialArn}}'
AND TdeCredentialPassword = '{{ TdeCredentialPassword}}'
AND CACertificateIdentifier = '{{ CACertificateIdentifier}}'
AND Domain = '{{ Domain}}'
AND CopyTagsToSnapshot = {{ CopyTagsToSnapshot}}
AND MonitoringInterval = '{{ MonitoringInterval}}'
AND DBPortNumber = '{{ DBPortNumber}}'
AND PubliclyAccessible = {{ PubliclyAccessible}}
AND MonitoringRoleArn = '{{ MonitoringRoleArn}}'
AND DomainIAMRoleName = '{{ DomainIAMRoleName}}'
AND PromotionTier = '{{ PromotionTier}}'
AND EnableIAMDatabaseAuthentication = {{ EnableIAMDatabaseAuthentication}}
AND EnablePerformanceInsights = {{ EnablePerformanceInsights}}
AND PerformanceInsightsKMSKeyId = '{{ PerformanceInsightsKMSKeyId}}'
AND CloudwatchLogsExportConfiguration = '{{ CloudwatchLogsExportConfiguration}}'
AND DeletionProtection = {{ DeletionProtection}}
RETURNING
AllocatedStorage,
AutoMinorVersionUpgrade,
AvailabilityZone,
BackupRetentionPeriod,
CACertificateIdentifier,
CharacterSetName,
CopyTagsToSnapshot,
DBClusterIdentifier,
DBInstanceArn,
DBInstanceClass,
DBInstanceIdentifier,
DBInstanceStatus,
DBName,
DBParameterGroups,
DBSecurityGroups,
DBSubnetGroup,
DbInstancePort,
DbiResourceId,
DeletionProtection,
DomainMemberships,
EnabledCloudwatchLogsExports,
Endpoint,
Engine,
EngineVersion,
EnhancedMonitoringResourceArn,
IAMDatabaseAuthenticationEnabled,
InstanceCreateTime,
Iops,
KmsKeyId,
LatestRestorableTime,
LicenseModel,
MasterUsername,
MonitoringInterval,
MonitoringRoleArn,
MultiAZ,
OptionGroupMemberships,
PendingModifiedValues,
PerformanceInsightsEnabled,
PerformanceInsightsKMSKeyId,
PreferredBackupWindow,
PreferredMaintenanceWindow,
PromotionTier,
PubliclyAccessible,
ReadReplicaDBClusterIdentifiers,
ReadReplicaDBInstanceIdentifiers,
ReadReplicaSourceDBInstanceIdentifier,
SecondaryAvailabilityZone,
StatusInfos,
StorageEncrypted,
StorageType,
TdeCredentialArn,
Timezone,
VpcSecurityGroups;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_db_instance"
    values={[
        { label: 'delete_db_instance', value: 'delete_db_instance' }
    ]}
>
<TabItem value="delete_db_instance">

The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by DeleteDBInstance are not deleted. If you request a final DB snapshot the status of the Amazon Neptune DB instance is deleting until the DB snapshot is created. The API action DescribeDBInstance is used to monitor the status of this operation. The action can't be canceled or reverted once submitted. Note that when a DB instance is in a failure state and has a status of failed, incompatible-restore, or incompatible-network, you can only delete it when the SkipFinalSnapshot parameter is set to true. You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.

```sql
DELETE FROM aws.neptune.db_instances
WHERE DBInstanceIdentifier = '{{ DBInstanceIdentifier }}' --required
AND region = '{{ region }}' --required
AND SkipFinalSnapshot = '{{ SkipFinalSnapshot }}'
AND FinalDBSnapshotIdentifier = '{{ FinalDBSnapshotIdentifier }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reboot_db_instance"
    values={[
        { label: 'reboot_db_instance', value: 'reboot_db_instance' }
    ]}
>
<TabItem value="reboot_db_instance">

You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect. Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.

```sql
EXEC aws.neptune.db_instances.reboot_db_instance 
@DBInstanceIdentifier='{{ DBInstanceIdentifier }}' --required, 
@region='{{ region }}' --required, 
@ForceFailover={{ ForceFailover }}
;
```
</TabItem>
</Tabs>
