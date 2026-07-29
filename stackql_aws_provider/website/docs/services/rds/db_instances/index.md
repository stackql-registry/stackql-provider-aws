--- 
title: db_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - db_instances
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

Creates, updates, deletes, gets or lists a <code>db_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_instances" /></td></tr>
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
    <td><CopyableCode code="activity_stream_engine_native_audit_fields_included" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether engine-native audit fields are included in the database activity stream.</td>
</tr>
<tr>
    <td><CopyableCode code="activity_stream_kinesis_stream_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Kinesis data stream used for the database activity stream.</td>
</tr>
<tr>
    <td><CopyableCode code="activity_stream_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key identifier used for encrypting messages in the database activity stream. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="activity_stream_mode" /></td>
    <td><code>string</code></td>
    <td>The mode of the database activity stream. Database events such as a change or access generate an activity stream event. RDS for Oracle always handles these events asynchronously.</td>
</tr>
<tr>
    <td><CopyableCode code="activity_stream_policy_status" /></td>
    <td><code>string</code></td>
    <td>The status of the policy state of the activity stream.</td>
</tr>
<tr>
    <td><CopyableCode code="activity_stream_status" /></td>
    <td><code>string</code></td>
    <td>The status of the database activity stream.</td>
</tr>
<tr>
    <td><CopyableCode code="additional_storage_volumes" /></td>
    <td><code>string</code></td>
    <td>The additional storage volumes associated with the DB instance. RDS supports additional storage volumes for RDS for Oracle and RDS for SQL Server.</td>
</tr>
<tr>
    <td><CopyableCode code="allocated_storage" /></td>
    <td><code>integer</code></td>
    <td>The amount of storage in gibibytes (GiB) allocated for the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_roles" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Identity and Access Management (IAM) roles associated with the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_minor_version_upgrade" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether minor version patches are applied automatically. For more information about automatic minor version upgrades, see Automatically upgrading the minor engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="automatic_restart_time" /></td>
    <td><code>string</code></td>
    <td>The time when a stopped DB instance is restarted automatically.</td>
</tr>
<tr>
    <td><CopyableCode code="automation_mode" /></td>
    <td><code>string</code></td>
    <td>The automation mode of the RDS Custom DB instance: full or all paused. If full, the DB instance automates monitoring and instance recovery. If all paused, the instance pauses automation for the duration set by --resume-full-automation-mode-minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The name of the Availability Zone where the DB instance is located.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_backup_recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_retention_period" /></td>
    <td><code>integer</code></td>
    <td>The number of days for which automatic DB snapshots are retained.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_target" /></td>
    <td><code>string</code></td>
    <td>The location where automated backups and manual snapshots are stored: Dedicated Local Zones, Amazon Web Services Outposts or the Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="ca_certificate_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the CA certificate for this DB instance. For more information, see Using SSL/TLS to encrypt a connection to a DB instance in the Amazon RDS User Guide and Using SSL/TLS to encrypt a connection to a DB cluster in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_details" /></td>
    <td><code>string</code></td>
    <td>The details of the DB instance's server certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="character_set_name" /></td>
    <td><code>string</code></td>
    <td>If present, specifies the name of the character set that this instance is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="copy_tags_to_snapshot" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether tags are copied from the DB instance to snapshots of the DB instance. This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting. For more information, see DBCluster.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_iam_instance_profile" /></td>
    <td><code>string</code></td>
    <td>The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. The instance profile must meet the following requirements: The profile must exist in your account. The profile must have an IAM role that Amazon EC2 has permissions to assume. The instance profile name and the associated IAM role name must start with the prefix AWSRDSCustom. For the list of permissions required for the IAM role, see Configure IAM and your VPC in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_owned_ip_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a customer-owned IP address (CoIP) is enabled for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. For more information about RDS on Outposts, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the Amazon Web Services Outposts User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>If the DB instance is a member of a DB cluster, indicates the name of the DB cluster that the DB instance is a member of.</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_automated_backups_replications" /></td>
    <td><code>string</code></td>
    <td>The list of replicated automated backups associated with the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_class" /></td>
    <td><code>string</code></td>
    <td>The name of the compute and memory capacity class of the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_identifier" /></td>
    <td><code>string</code></td>
    <td>The user-supplied database identifier. This identifier is the unique key that identifies a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_status" /></td>
    <td><code>string</code></td>
    <td>The current state of this database. For information about DB instance statuses, see Viewing DB instance status in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="db_name" /></td>
    <td><code>string</code></td>
    <td>The initial database name that you provided (if required) when you created the DB instance. This name is returned for the life of your DB instance. For an RDS for Oracle CDB instance, the name identifies the PDB rather than the CDB.</td>
</tr>
<tr>
    <td><CopyableCode code="db_parameter_groups" /></td>
    <td><code>string</code></td>
    <td>The list of DB parameter groups applied to this DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="db_security_groups" /></td>
    <td><code>string</code></td>
    <td>A list of DB security group elements containing DBSecurityGroup.Name and DBSecurityGroup.Status subelements.</td>
</tr>
<tr>
    <td><CopyableCode code="db_subnet_group" /></td>
    <td><code>string</code></td>
    <td>Information about the subnet group associated with the DB instance, including the name, description, and subnets in the subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="db_system_id" /></td>
    <td><code>string</code></td>
    <td>The Oracle system ID (Oracle SID) for a container database (CDB). The Oracle SID is also the name of the CDB. This setting is only valid for RDS Custom DB instances.</td>
</tr>
<tr>
    <td><CopyableCode code="database_insights_mode" /></td>
    <td><code>string</code></td>
    <td>The mode of Database Insights that is enabled for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_port" /></td>
    <td><code>integer</code></td>
    <td>The port that the DB instance listens on. If the DB instance is part of a DB cluster, this can be a different port than the DB cluster port.</td>
</tr>
<tr>
    <td><CopyableCode code="dbi_resource_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region-unique, immutable identifier for the DB instance. This identifier is found in Amazon Web Services CloudTrail log entries whenever the Amazon Web Services KMS key for the DB instance is accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_log_volume" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB instance has a dedicated log volume (DLV) enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. For more information, see Deleting a DB Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_memberships" /></td>
    <td><code>string</code></td>
    <td>The Active Directory Domain membership records associated with the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_cloudwatch_logs_exports" /></td>
    <td><code>string</code></td>
    <td>A list of log types that this DB instance is configured to export to CloudWatch Logs. Log types vary by DB engine. For information about the log types for each DB engine, see Monitoring Amazon RDS log files in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The connection endpoint for the DB instance. The endpoint might not be shown for instances with the status of creating.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The database engine used for this DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_lifecycle_support" /></td>
    <td><code>string</code></td>
    <td>The lifecycle type for the DB instance. For more information, see CreateDBInstance.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>The version of the database engine.</td>
</tr>
<tr>
    <td><CopyableCode code="enhanced_monitoring_resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log stream that receives the Enhanced Monitoring metrics data for the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_database_authentication_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled for the DB instance. For a list of engine versions that support IAM database authentication, see IAM database authentication in the Amazon RDS User Guide and IAM database authentication in Aurora in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_create_time" /></td>
    <td><code>string</code></td>
    <td>The date and time when the DB instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="iops" /></td>
    <td><code>integer</code></td>
    <td>The Provisioned IOPS (I/O operations per second) value for the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="is_storage_config_upgrade_available" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether an upgrade is recommended for the storage file system configuration on the DB instance. To migrate to the preferred configuration, you can either create a blue/green deployment, or create a read replica from the DB instance. For more information, see Upgrading the storage file system for a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>If StorageEncrypted is enabled, the Amazon Web Services KMS key identifier for the encrypted DB instance. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_restorable_time" /></td>
    <td><code>string</code></td>
    <td>The latest time to which a database in this DB instance can be restored with point-in-time restore.</td>
</tr>
<tr>
    <td><CopyableCode code="license_model" /></td>
    <td><code>string</code></td>
    <td>The license model information for this DB instance. This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.</td>
</tr>
<tr>
    <td><CopyableCode code="listener_endpoint" /></td>
    <td><code>string</code></td>
    <td>The listener connection endpoint for SQL Server Always On.</td>
</tr>
<tr>
    <td><CopyableCode code="master_user_secret" /></td>
    <td><code>string</code></td>
    <td>The secret managed by RDS in Amazon Web Services Secrets Manager for the master user password. For more information, see Password management with Amazon Web Services Secrets Manager in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="master_username" /></td>
    <td><code>string</code></td>
    <td>The master username for the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="max_allocated_storage" /></td>
    <td><code>integer</code></td>
    <td>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_interval" /></td>
    <td><code>integer</code></td>
    <td>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_az" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB instance is a Multi-AZ deployment. This setting doesn't apply to RDS Custom DB instances.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_tenant" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the DB instance is in the multi-tenant configuration (TRUE) or the single-tenant configuration (FALSE).</td>
</tr>
<tr>
    <td><CopyableCode code="nchar_character_set_name" /></td>
    <td><code>string</code></td>
    <td>The name of the NCHAR character set for the Oracle DB instance. This character set specifies the Unicode encoding for data stored in table columns of type NCHAR, NCLOB, or NVARCHAR2.</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>The network type of the DB instance. The network type is determined by the DBSubnetGroup specified for the DB instance. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see Working with a DB instance in a VPC in the Amazon RDS User Guide and Working with a DB instance in a VPC in the Amazon Aurora User Guide. Valid Values: IPV4 | DUAL</td>
</tr>
<tr>
    <td><CopyableCode code="option_group_memberships" /></td>
    <td><code>string</code></td>
    <td>The list of option group memberships for this DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_modified_values" /></td>
    <td><code>string</code></td>
    <td>Information about pending changes to the DB instance. This information is returned only when there are pending changes. Specific changes are identified by subelements.</td>
</tr>
<tr>
    <td><CopyableCode code="percent_progress" /></td>
    <td><code>string</code></td>
    <td>The progress of the storage optimization operation as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="performance_insights_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Performance Insights is enabled for the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="performance_insights_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key identifier for encryption of Performance Insights data. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="performance_insights_retention_period" /></td>
    <td><code>integer</code></td>
    <td>The number of days to retain Performance Insights data. Valid Values: 7 month * 31, where month is a number of months from 1-23. Examples: 93 (3 months * 31), 341 (11 months * 31), 589 (19 months * 31) 731 Default: 7 days</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_backup_window" /></td>
    <td><code>string</code></td>
    <td>The daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_maintenance_window" /></td>
    <td><code>string</code></td>
    <td>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="processor_features" /></td>
    <td><code>string</code></td>
    <td>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="promotion_tier" /></td>
    <td><code>integer</code></td>
    <td>The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see Fault Tolerance for an Aurora DB Cluster in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="publicly_accessible" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance.</td>
</tr>
<tr>
    <td><CopyableCode code="read_replica_db_cluster_identifiers" /></td>
    <td><code>string</code></td>
    <td>The identifiers of Aurora DB clusters to which the RDS DB instance is replicated as a read replica. For example, when you create an Aurora read replica of an RDS for MySQL DB instance, the Aurora MySQL DB cluster for the Aurora read replica is shown. This output doesn't contain information about cross-Region Aurora read replicas. Currently, each RDS DB instance can have only one Aurora read replica.</td>
</tr>
<tr>
    <td><CopyableCode code="read_replica_db_instance_identifiers" /></td>
    <td><code>string</code></td>
    <td>The identifiers of the read replicas associated with this DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="read_replica_source_db_cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the source DB cluster if this DB instance is a read replica.</td>
</tr>
<tr>
    <td><CopyableCode code="read_replica_source_db_instance_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the source DB instance if this DB instance is a read replica.</td>
</tr>
<tr>
    <td><CopyableCode code="replica_mode" /></td>
    <td><code>string</code></td>
    <td>The open mode of a Db2 or an Oracle read replica. The default is open-read-only. For more information, see Working with replicas for Amazon RDS for Db2 and Working with read replicas for Amazon RDS for Oracle in the Amazon RDS User Guide. This attribute is only supported in RDS for Db2, RDS for Oracle, and RDS Custom for Oracle.</td>
</tr>
<tr>
    <td><CopyableCode code="resume_full_automation_mode_time" /></td>
    <td><code>string</code></td>
    <td>The number of minutes to pause the automation. When the time period ends, RDS Custom resumes full automation. The minimum value is 60 (default). The maximum value is 1,440.</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_availability_zone" /></td>
    <td><code>string</code></td>
    <td>If present, specifies the name of the secondary Availability Zone for a DB instance with multi-AZ support.</td>
</tr>
<tr>
    <td><CopyableCode code="status_infos" /></td>
    <td><code>string</code></td>
    <td>The status of a read replica. If the DB instance isn't a read replica, the value is blank.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB instance is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_encryption_type" /></td>
    <td><code>string</code></td>
    <td>The type of encryption used to protect data at rest in the DB instance. Possible values: none - The DB instance is not encrypted. sse-rds - The DB instance is encrypted using an Amazon Web Services owned KMS key. sse-kms - The DB instance is encrypted using a customer managed KMS key or Amazon Web Services managed KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_throughput" /></td>
    <td><code>integer</code></td>
    <td>The storage throughput for the DB instance. This setting applies only to the gp3 storage type.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_type" /></td>
    <td><code>string</code></td>
    <td>The storage type associated with the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_volume_status" /></td>
    <td><code>string</code></td>
    <td>The detailed status information for storage volumes associated with the DB instance. This information helps identify which specific volume is causing the instance to be in a storage-full state.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_list" /></td>
    <td><code>string</code></td>
    <td>A list of tags. For more information, see Tagging Amazon RDS resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS resources in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="tde_credential_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN from the key store with which the instance is associated for TDE encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="timezone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the DB instance. In most cases, the Timezone element is empty. Timezone content appears only for RDS for Db2 and RDS for SQL Server DB instances that were created with a time zone specified.</td>
</tr>
<tr>
    <td><CopyableCode code="upgrade_rollout_order" /></td>
    <td><code>string</code></td>
    <td>This data type represents the order in which the instances are upgraded. &#91;first&#93; - Typically used for development or testing environments. &#91;second&#93; - Default order for resources not specifically configured. &#91;last&#93; - Usually reserved for production environments.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_security_groups" /></td>
    <td><code>string</code></td>
    <td>The list of Amazon EC2 VPC security groups that the DB instance belongs to.</td>
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
    <td>Describes provisioned RDS instances. This API supports pagination. This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</td>
</tr>
<tr>
    <td><a href="#create_db_instance"><CopyableCode code="create_db_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-DBInstanceClass"><code>DBInstanceClass</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBName"><code>DBName</code></a>, <a href="#parameter-AllocatedStorage"><code>AllocatedStorage</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-MasterUsername"><code>MasterUsername</code></a>, <a href="#parameter-MasterUserPassword"><code>MasterUserPassword</code></a>, <a href="#parameter-DBSecurityGroups"><code>DBSecurityGroups</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-DBParameterGroupName"><code>DBParameterGroupName</code></a>, <a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-MultiAZ"><code>MultiAZ</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-AutoMinorVersionUpgrade"><code>AutoMinorVersionUpgrade</code></a>, <a href="#parameter-LicenseModel"><code>LicenseModel</code></a>, <a href="#parameter-Iops"><code>Iops</code></a>, <a href="#parameter-StorageThroughput"><code>StorageThroughput</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-CharacterSetName"><code>CharacterSetName</code></a>, <a href="#parameter-NcharCharacterSetName"><code>NcharCharacterSetName</code></a>, <a href="#parameter-PubliclyAccessible"><code>PubliclyAccessible</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-TdeCredentialArn"><code>TdeCredentialArn</code></a>, <a href="#parameter-TdeCredentialPassword"><code>TdeCredentialPassword</code></a>, <a href="#parameter-StorageEncrypted"><code>StorageEncrypted</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-DomainFqdn"><code>DomainFqdn</code></a>, <a href="#parameter-DomainOu"><code>DomainOu</code></a>, <a href="#parameter-DomainAuthSecretArn"><code>DomainAuthSecretArn</code></a>, <a href="#parameter-DomainDnsIps"><code>DomainDnsIps</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-MonitoringInterval"><code>MonitoringInterval</code></a>, <a href="#parameter-MonitoringRoleArn"><code>MonitoringRoleArn</code></a>, <a href="#parameter-DomainIAMRoleName"><code>DomainIAMRoleName</code></a>, <a href="#parameter-PromotionTier"><code>PromotionTier</code></a>, <a href="#parameter-Timezone"><code>Timezone</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-DatabaseInsightsMode"><code>DatabaseInsightsMode</code></a>, <a href="#parameter-EnablePerformanceInsights"><code>EnablePerformanceInsights</code></a>, <a href="#parameter-PerformanceInsightsKMSKeyId"><code>PerformanceInsightsKMSKeyId</code></a>, <a href="#parameter-PerformanceInsightsRetentionPeriod"><code>PerformanceInsightsRetentionPeriod</code></a>, <a href="#parameter-EnableCloudwatchLogsExports"><code>EnableCloudwatchLogsExports</code></a>, <a href="#parameter-ProcessorFeatures"><code>ProcessorFeatures</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-MaxAllocatedStorage"><code>MaxAllocatedStorage</code></a>, <a href="#parameter-EnableCustomerOwnedIp"><code>EnableCustomerOwnedIp</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a>, <a href="#parameter-BackupTarget"><code>BackupTarget</code></a>, <a href="#parameter-CustomIamInstanceProfile"><code>CustomIamInstanceProfile</code></a>, <a href="#parameter-DBSystemId"><code>DBSystemId</code></a>, <a href="#parameter-CACertificateIdentifier"><code>CACertificateIdentifier</code></a>, <a href="#parameter-ManageMasterUserPassword"><code>ManageMasterUserPassword</code></a>, <a href="#parameter-MasterUserSecretKmsKeyId"><code>MasterUserSecretKmsKeyId</code></a>, <a href="#parameter-MultiTenant"><code>MultiTenant</code></a>, <a href="#parameter-DedicatedLogVolume"><code>DedicatedLogVolume</code></a>, <a href="#parameter-EngineLifecycleSupport"><code>EngineLifecycleSupport</code></a>, <a href="#parameter-AdditionalStorageVolumes"><code>AdditionalStorageVolumes</code></a>, <a href="#parameter-TagSpecifications"><code>TagSpecifications</code></a>, <a href="#parameter-MasterUserAuthenticationType"><code>MasterUserAuthenticationType</code></a></td>
    <td>Creates a new DB instance. The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster. For an Aurora DB cluster, you can call this operation multiple times to add more than one DB instance to the cluster. For more information about creating an RDS DB instance, see Creating an Amazon RDS DB instance in the Amazon RDS User Guide. For more information about creating a DB instance in an Aurora DB cluster, see Creating an Amazon Aurora DB cluster in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><a href="#create_db_instance_read_replica"><CopyableCode code="create_db_instance_read_replica" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SourceDBInstanceIdentifier"><code>SourceDBInstanceIdentifier</code></a>, <a href="#parameter-DBInstanceClass"><code>DBInstanceClass</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-MultiAZ"><code>MultiAZ</code></a>, <a href="#parameter-AutoMinorVersionUpgrade"><code>AutoMinorVersionUpgrade</code></a>, <a href="#parameter-Iops"><code>Iops</code></a>, <a href="#parameter-StorageThroughput"><code>StorageThroughput</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-DBParameterGroupName"><code>DBParameterGroupName</code></a>, <a href="#parameter-PubliclyAccessible"><code>PubliclyAccessible</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-MonitoringInterval"><code>MonitoringInterval</code></a>, <a href="#parameter-MonitoringRoleArn"><code>MonitoringRoleArn</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-PreSignedUrl"><code>PreSignedUrl</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-DatabaseInsightsMode"><code>DatabaseInsightsMode</code></a>, <a href="#parameter-EnablePerformanceInsights"><code>EnablePerformanceInsights</code></a>, <a href="#parameter-PerformanceInsightsKMSKeyId"><code>PerformanceInsightsKMSKeyId</code></a>, <a href="#parameter-PerformanceInsightsRetentionPeriod"><code>PerformanceInsightsRetentionPeriod</code></a>, <a href="#parameter-EnableCloudwatchLogsExports"><code>EnableCloudwatchLogsExports</code></a>, <a href="#parameter-ProcessorFeatures"><code>ProcessorFeatures</code></a>, <a href="#parameter-UseDefaultProcessorFeatures"><code>UseDefaultProcessorFeatures</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-DomainIAMRoleName"><code>DomainIAMRoleName</code></a>, <a href="#parameter-DomainFqdn"><code>DomainFqdn</code></a>, <a href="#parameter-DomainOu"><code>DomainOu</code></a>, <a href="#parameter-DomainAuthSecretArn"><code>DomainAuthSecretArn</code></a>, <a href="#parameter-DomainDnsIps"><code>DomainDnsIps</code></a>, <a href="#parameter-ReplicaMode"><code>ReplicaMode</code></a>, <a href="#parameter-EnableCustomerOwnedIp"><code>EnableCustomerOwnedIp</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a>, <a href="#parameter-MaxAllocatedStorage"><code>MaxAllocatedStorage</code></a>, <a href="#parameter-BackupTarget"><code>BackupTarget</code></a>, <a href="#parameter-CustomIamInstanceProfile"><code>CustomIamInstanceProfile</code></a>, <a href="#parameter-AllocatedStorage"><code>AllocatedStorage</code></a>, <a href="#parameter-SourceDBClusterIdentifier"><code>SourceDBClusterIdentifier</code></a>, <a href="#parameter-DedicatedLogVolume"><code>DedicatedLogVolume</code></a>, <a href="#parameter-UpgradeStorageConfig"><code>UpgradeStorageConfig</code></a>, <a href="#parameter-CACertificateIdentifier"><code>CACertificateIdentifier</code></a>, <a href="#parameter-AdditionalStorageVolumes"><code>AdditionalStorageVolumes</code></a>, <a href="#parameter-TagSpecifications"><code>TagSpecifications</code></a></td>
    <td>Creates a new DB instance that acts as a read replica for an existing source DB instance or Multi-AZ DB cluster. You can create a read replica for a DB instance running Db2, MariaDB, MySQL, Oracle, PostgreSQL, or SQL Server. You can create a read replica for a Multi-AZ DB cluster running MySQL or PostgreSQL. For more information, see Working with read replicas and Migrating from a Multi-AZ DB cluster to a DB instance using a read replica in the Amazon RDS User Guide. Amazon Aurora doesn't support this operation. To create a DB instance for an Aurora DB cluster, use the CreateDBInstance operation. RDS creates read replicas with backups disabled. All other attributes (including DB security groups and DB parameter groups) are inherited from the source DB instance or cluster, except as specified. Your source DB instance or cluster must have backup retention enabled.</td>
</tr>
<tr>
    <td><a href="#add_role_to_db_instance"><CopyableCode code="add_role_to_db_instance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-FeatureName"><code>FeatureName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance. To add a role to a DB instance, the status of the DB instance must be available. This command doesn't apply to RDS Custom.</td>
</tr>
<tr>
    <td><a href="#modify_db_instance"><CopyableCode code="modify_db_instance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AllocatedStorage"><code>AllocatedStorage</code></a>, <a href="#parameter-DBInstanceClass"><code>DBInstanceClass</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-DBSecurityGroups"><code>DBSecurityGroups</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a>, <a href="#parameter-MasterUserPassword"><code>MasterUserPassword</code></a>, <a href="#parameter-DBParameterGroupName"><code>DBParameterGroupName</code></a>, <a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-MultiAZ"><code>MultiAZ</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-AllowMajorVersionUpgrade"><code>AllowMajorVersionUpgrade</code></a>, <a href="#parameter-AutoMinorVersionUpgrade"><code>AutoMinorVersionUpgrade</code></a>, <a href="#parameter-LicenseModel"><code>LicenseModel</code></a>, <a href="#parameter-Iops"><code>Iops</code></a>, <a href="#parameter-StorageThroughput"><code>StorageThroughput</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-NewDBInstanceIdentifier"><code>NewDBInstanceIdentifier</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-TdeCredentialArn"><code>TdeCredentialArn</code></a>, <a href="#parameter-TdeCredentialPassword"><code>TdeCredentialPassword</code></a>, <a href="#parameter-CACertificateIdentifier"><code>CACertificateIdentifier</code></a>, <a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-DomainFqdn"><code>DomainFqdn</code></a>, <a href="#parameter-DomainOu"><code>DomainOu</code></a>, <a href="#parameter-DomainAuthSecretArn"><code>DomainAuthSecretArn</code></a>, <a href="#parameter-DomainDnsIps"><code>DomainDnsIps</code></a>, <a href="#parameter-DisableDomain"><code>DisableDomain</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-MonitoringInterval"><code>MonitoringInterval</code></a>, <a href="#parameter-DBPortNumber"><code>DBPortNumber</code></a>, <a href="#parameter-PubliclyAccessible"><code>PubliclyAccessible</code></a>, <a href="#parameter-MonitoringRoleArn"><code>MonitoringRoleArn</code></a>, <a href="#parameter-DomainIAMRoleName"><code>DomainIAMRoleName</code></a>, <a href="#parameter-PromotionTier"><code>PromotionTier</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-DatabaseInsightsMode"><code>DatabaseInsightsMode</code></a>, <a href="#parameter-EnablePerformanceInsights"><code>EnablePerformanceInsights</code></a>, <a href="#parameter-PerformanceInsightsKMSKeyId"><code>PerformanceInsightsKMSKeyId</code></a>, <a href="#parameter-PerformanceInsightsRetentionPeriod"><code>PerformanceInsightsRetentionPeriod</code></a>, <a href="#parameter-CloudwatchLogsExportConfiguration"><code>CloudwatchLogsExportConfiguration</code></a>, <a href="#parameter-ProcessorFeatures"><code>ProcessorFeatures</code></a>, <a href="#parameter-UseDefaultProcessorFeatures"><code>UseDefaultProcessorFeatures</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-MaxAllocatedStorage"><code>MaxAllocatedStorage</code></a>, <a href="#parameter-CertificateRotationRestart"><code>CertificateRotationRestart</code></a>, <a href="#parameter-ReplicaMode"><code>ReplicaMode</code></a>, <a href="#parameter-AutomationMode"><code>AutomationMode</code></a>, <a href="#parameter-ResumeFullAutomationModeMinutes"><code>ResumeFullAutomationModeMinutes</code></a>, <a href="#parameter-EnableCustomerOwnedIp"><code>EnableCustomerOwnedIp</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a>, <a href="#parameter-AwsBackupRecoveryPointArn"><code>AwsBackupRecoveryPointArn</code></a>, <a href="#parameter-ManageMasterUserPassword"><code>ManageMasterUserPassword</code></a>, <a href="#parameter-RotateMasterUserPassword"><code>RotateMasterUserPassword</code></a>, <a href="#parameter-MasterUserSecretKmsKeyId"><code>MasterUserSecretKmsKeyId</code></a>, <a href="#parameter-MultiTenant"><code>MultiTenant</code></a>, <a href="#parameter-DedicatedLogVolume"><code>DedicatedLogVolume</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-AdditionalStorageVolumes"><code>AdditionalStorageVolumes</code></a>, <a href="#parameter-TagSpecifications"><code>TagSpecifications</code></a>, <a href="#parameter-MasterUserAuthenticationType"><code>MasterUserAuthenticationType</code></a></td>
    <td>Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call DescribeValidDBInstanceModifications before you call ModifyDBInstance.</td>
</tr>
<tr>
    <td><a href="#delete_db_instance"><CopyableCode code="delete_db_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SkipFinalSnapshot"><code>SkipFinalSnapshot</code></a>, <a href="#parameter-FinalDBSnapshotIdentifier"><code>FinalDBSnapshotIdentifier</code></a>, <a href="#parameter-DeleteAutomatedBackups"><code>DeleteAutomatedBackups</code></a></td>
    <td>Deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. However, manual DB snapshots of the DB instance aren't deleted. If you request a final DB snapshot, the status of the Amazon RDS DB instance is deleting until the DB snapshot is created. This operation can't be canceled or reverted after it begins. To monitor the status of this operation, use DescribeDBInstance. When a DB instance is in a failure state and has a status of failed, incompatible-restore, or incompatible-network, you can only delete it when you skip creation of the final snapshot with the SkipFinalSnapshot parameter. If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true: The DB cluster is a read replica of another Amazon Aurora DB cluster. The DB instance is the only instance in the DB cluster. To delete a DB instance in this case, first use the PromoteReadReplicaDBCluster operation to promote the DB cluster so that it's no longer a read replica. After the promotion completes, use the DeleteDBInstance operation to delete the final instance in the DB cluster. For RDS Custom DB instances, deleting the DB instance permanently deletes the EC2 instance and the associated EBS volumes. Make sure that you don't terminate or delete these resources before you delete the DB instance. Otherwise, deleting the DB instance and creation of the final snapshot might fail.</td>
</tr>
<tr>
    <td><a href="#download_db_log_file_portion"><CopyableCode code="download_db_log_file_portion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-LogFileName"><code>LogFileName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-NumberOfLines"><code>NumberOfLines</code></a></td>
    <td>Downloads all or a portion of the specified log file, up to 1 MB in size. This command doesn't apply to RDS Custom. This operation uses resources on database instances. Because of this, we recommend publishing database logs to CloudWatch and then using the GetLogEvents operation. For more information, see GetLogEvents in the Amazon CloudWatch Logs API Reference.</td>
</tr>
<tr>
    <td><a href="#promote_read_replica"><CopyableCode code="promote_read_replica" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-TagSpecifications"><code>TagSpecifications</code></a></td>
    <td>Promotes a read replica DB instance to a standalone DB instance. Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the backing-up status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion. This command doesn't apply to Aurora MySQL, Aurora PostgreSQL, or RDS Custom.</td>
</tr>
<tr>
    <td><a href="#reboot_db_instance"><CopyableCode code="reboot_db_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ForceFailover"><code>ForceFailover</code></a></td>
    <td>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect. Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting. For more information about rebooting, see Rebooting a DB Instance in the Amazon RDS User Guide. This command doesn't apply to RDS Custom. If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the RebootDBCluster operation.</td>
</tr>
<tr>
    <td><a href="#remove_role_from_db_instance"><CopyableCode code="remove_role_from_db_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-FeatureName"><code>FeatureName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.</td>
</tr>
<tr>
    <td><a href="#restore_db_instance_from_db_snapshot"><CopyableCode code="restore_db_instance_from_db_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBSnapshotIdentifier"><code>DBSnapshotIdentifier</code></a>, <a href="#parameter-DBInstanceClass"><code>DBInstanceClass</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-MultiAZ"><code>MultiAZ</code></a>, <a href="#parameter-PubliclyAccessible"><code>PubliclyAccessible</code></a>, <a href="#parameter-AutoMinorVersionUpgrade"><code>AutoMinorVersionUpgrade</code></a>, <a href="#parameter-LicenseModel"><code>LicenseModel</code></a>, <a href="#parameter-DBName"><code>DBName</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-Iops"><code>Iops</code></a>, <a href="#parameter-StorageThroughput"><code>StorageThroughput</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-TdeCredentialArn"><code>TdeCredentialArn</code></a>, <a href="#parameter-TdeCredentialPassword"><code>TdeCredentialPassword</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-DomainFqdn"><code>DomainFqdn</code></a>, <a href="#parameter-DomainOu"><code>DomainOu</code></a>, <a href="#parameter-DomainAuthSecretArn"><code>DomainAuthSecretArn</code></a>, <a href="#parameter-DomainDnsIps"><code>DomainDnsIps</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-DomainIAMRoleName"><code>DomainIAMRoleName</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-EnableCloudwatchLogsExports"><code>EnableCloudwatchLogsExports</code></a>, <a href="#parameter-ProcessorFeatures"><code>ProcessorFeatures</code></a>, <a href="#parameter-UseDefaultProcessorFeatures"><code>UseDefaultProcessorFeatures</code></a>, <a href="#parameter-DBParameterGroupName"><code>DBParameterGroupName</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-EnableCustomerOwnedIp"><code>EnableCustomerOwnedIp</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a>, <a href="#parameter-BackupTarget"><code>BackupTarget</code></a>, <a href="#parameter-CustomIamInstanceProfile"><code>CustomIamInstanceProfile</code></a>, <a href="#parameter-AllocatedStorage"><code>AllocatedStorage</code></a>, <a href="#parameter-DBClusterSnapshotIdentifier"><code>DBClusterSnapshotIdentifier</code></a>, <a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-DedicatedLogVolume"><code>DedicatedLogVolume</code></a>, <a href="#parameter-CACertificateIdentifier"><code>CACertificateIdentifier</code></a>, <a href="#parameter-EngineLifecycleSupport"><code>EngineLifecycleSupport</code></a>, <a href="#parameter-AdditionalStorageVolumes"><code>AdditionalStorageVolumes</code></a>, <a href="#parameter-TagSpecifications"><code>TagSpecifications</code></a>, <a href="#parameter-ManageMasterUserPassword"><code>ManageMasterUserPassword</code></a>, <a href="#parameter-MasterUserSecretKmsKeyId"><code>MasterUserSecretKmsKeyId</code></a></td>
    <td>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with most of the source's original configuration, including the default security group and DB parameter group. By default, the new DB instance is created as a Single-AZ deployment, except when the instance is a SQL Server instance that has an option group associated with mirroring. In this case, the instance becomes a Multi-AZ deployment, not a Single-AZ deployment. If you want to replace your original DB instance with the new, restored DB instance, then rename your original DB instance before you call the RestoreDBInstanceFromDBSnapshot operation. RDS doesn't allow two DB instances with the same name. After you have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot operation. The result is that you replace the original DB instance with the DB instance created from the snapshot. If you are restoring from a shared manual DB snapshot, the DBSnapshotIdentifier must be the ARN of the shared DB snapshot. To restore from a DB snapshot with an unsupported engine version, you must first upgrade the engine version of the snapshot. For more information about upgrading a RDS for MySQL DB snapshot engine version, see Upgrading a MySQL DB snapshot engine version. For more information about upgrading a RDS for PostgreSQL DB snapshot engine version, Upgrading a PostgreSQL DB snapshot engine version. This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use RestoreDBClusterFromSnapshot.</td>
</tr>
<tr>
    <td><a href="#restore_db_instance_from_s3"><CopyableCode code="restore_db_instance_from_s3" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-DBInstanceClass"><code>DBInstanceClass</code></a>, <a href="#parameter-SourceEngine"><code>SourceEngine</code></a>, <a href="#parameter-SourceEngineVersion"><code>SourceEngineVersion</code></a>, <a href="#parameter-S3BucketName"><code>S3BucketName</code></a>, <a href="#parameter-S3IngestionRoleArn"><code>S3IngestionRoleArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBName"><code>DBName</code></a>, <a href="#parameter-AllocatedStorage"><code>AllocatedStorage</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-MasterUsername"><code>MasterUsername</code></a>, <a href="#parameter-MasterUserPassword"><code>MasterUserPassword</code></a>, <a href="#parameter-DBSecurityGroups"><code>DBSecurityGroups</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-DBParameterGroupName"><code>DBParameterGroupName</code></a>, <a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-MultiAZ"><code>MultiAZ</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-AutoMinorVersionUpgrade"><code>AutoMinorVersionUpgrade</code></a>, <a href="#parameter-LicenseModel"><code>LicenseModel</code></a>, <a href="#parameter-Iops"><code>Iops</code></a>, <a href="#parameter-StorageThroughput"><code>StorageThroughput</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-PubliclyAccessible"><code>PubliclyAccessible</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-StorageEncrypted"><code>StorageEncrypted</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-MonitoringInterval"><code>MonitoringInterval</code></a>, <a href="#parameter-MonitoringRoleArn"><code>MonitoringRoleArn</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-S3Prefix"><code>S3Prefix</code></a>, <a href="#parameter-DatabaseInsightsMode"><code>DatabaseInsightsMode</code></a>, <a href="#parameter-EnablePerformanceInsights"><code>EnablePerformanceInsights</code></a>, <a href="#parameter-PerformanceInsightsKMSKeyId"><code>PerformanceInsightsKMSKeyId</code></a>, <a href="#parameter-PerformanceInsightsRetentionPeriod"><code>PerformanceInsightsRetentionPeriod</code></a>, <a href="#parameter-EnableCloudwatchLogsExports"><code>EnableCloudwatchLogsExports</code></a>, <a href="#parameter-ProcessorFeatures"><code>ProcessorFeatures</code></a>, <a href="#parameter-UseDefaultProcessorFeatures"><code>UseDefaultProcessorFeatures</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-MaxAllocatedStorage"><code>MaxAllocatedStorage</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a>, <a href="#parameter-ManageMasterUserPassword"><code>ManageMasterUserPassword</code></a>, <a href="#parameter-MasterUserSecretKmsKeyId"><code>MasterUserSecretKmsKeyId</code></a>, <a href="#parameter-DedicatedLogVolume"><code>DedicatedLogVolume</code></a>, <a href="#parameter-CACertificateIdentifier"><code>CACertificateIdentifier</code></a>, <a href="#parameter-EngineLifecycleSupport"><code>EngineLifecycleSupport</code></a>, <a href="#parameter-AdditionalStorageVolumes"><code>AdditionalStorageVolumes</code></a>, <a href="#parameter-TagSpecifications"><code>TagSpecifications</code></a></td>
    <td>Amazon Relational Database Service (Amazon RDS) supports importing MySQL databases by using backup files. You can create a backup of your on-premises database, store it on Amazon Simple Storage Service (Amazon S3), and then restore the backup file onto a new Amazon RDS DB instance running MySQL. For more information, see Restoring a backup into an Amazon RDS for MySQL DB instance in the Amazon RDS User Guide. This operation doesn't apply to RDS Custom.</td>
</tr>
<tr>
    <td><a href="#restore_db_instance_to_point_in_time"><CopyableCode code="restore_db_instance_to_point_in_time" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TargetDBInstanceIdentifier"><code>TargetDBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SourceDBInstanceIdentifier"><code>SourceDBInstanceIdentifier</code></a>, <a href="#parameter-RestoreTime"><code>RestoreTime</code></a>, <a href="#parameter-UseLatestRestorableTime"><code>UseLatestRestorableTime</code></a>, <a href="#parameter-DBInstanceClass"><code>DBInstanceClass</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-MultiAZ"><code>MultiAZ</code></a>, <a href="#parameter-PubliclyAccessible"><code>PubliclyAccessible</code></a>, <a href="#parameter-AutoMinorVersionUpgrade"><code>AutoMinorVersionUpgrade</code></a>, <a href="#parameter-LicenseModel"><code>LicenseModel</code></a>, <a href="#parameter-DBName"><code>DBName</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-Iops"><code>Iops</code></a>, <a href="#parameter-StorageThroughput"><code>StorageThroughput</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-TdeCredentialArn"><code>TdeCredentialArn</code></a>, <a href="#parameter-TdeCredentialPassword"><code>TdeCredentialPassword</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-DomainIAMRoleName"><code>DomainIAMRoleName</code></a>, <a href="#parameter-DomainFqdn"><code>DomainFqdn</code></a>, <a href="#parameter-DomainOu"><code>DomainOu</code></a>, <a href="#parameter-DomainAuthSecretArn"><code>DomainAuthSecretArn</code></a>, <a href="#parameter-DomainDnsIps"><code>DomainDnsIps</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-EnableCloudwatchLogsExports"><code>EnableCloudwatchLogsExports</code></a>, <a href="#parameter-ProcessorFeatures"><code>ProcessorFeatures</code></a>, <a href="#parameter-UseDefaultProcessorFeatures"><code>UseDefaultProcessorFeatures</code></a>, <a href="#parameter-DBParameterGroupName"><code>DBParameterGroupName</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-SourceDbiResourceId"><code>SourceDbiResourceId</code></a>, <a href="#parameter-MaxAllocatedStorage"><code>MaxAllocatedStorage</code></a>, <a href="#parameter-EnableCustomerOwnedIp"><code>EnableCustomerOwnedIp</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a>, <a href="#parameter-SourceDBInstanceAutomatedBackupsArn"><code>SourceDBInstanceAutomatedBackupsArn</code></a>, <a href="#parameter-BackupTarget"><code>BackupTarget</code></a>, <a href="#parameter-CustomIamInstanceProfile"><code>CustomIamInstanceProfile</code></a>, <a href="#parameter-AllocatedStorage"><code>AllocatedStorage</code></a>, <a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-DedicatedLogVolume"><code>DedicatedLogVolume</code></a>, <a href="#parameter-CACertificateIdentifier"><code>CACertificateIdentifier</code></a>, <a href="#parameter-EngineLifecycleSupport"><code>EngineLifecycleSupport</code></a>, <a href="#parameter-AdditionalStorageVolumes"><code>AdditionalStorageVolumes</code></a>, <a href="#parameter-TagSpecifications"><code>TagSpecifications</code></a>, <a href="#parameter-ManageMasterUserPassword"><code>ManageMasterUserPassword</code></a>, <a href="#parameter-MasterUserSecretKmsKeyId"><code>MasterUserSecretKmsKeyId</code></a></td>
    <td>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property. The target database is created with most of the original configuration, but in a system-selected Availability Zone, with the default security group, the default subnet group, and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored deployment and not a single-AZ deployment. This operation doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use RestoreDBClusterToPointInTime.</td>
</tr>
<tr>
    <td><a href="#start_db_instance"><CopyableCode code="start_db_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance operation. For more information, see Starting an Amazon RDS DB instance That Was Previously Stopped in the Amazon RDS User Guide. This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora DB clusters, use StartDBCluster instead.</td>
</tr>
<tr>
    <td><a href="#stop_db_instance"><CopyableCode code="stop_db_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBSnapshotIdentifier"><code>DBSnapshotIdentifier</code></a></td>
    <td>Stops an Amazon RDS DB instance temporarily. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary. The instance restarts automatically after 7 days. For more information, see Stopping an Amazon RDS DB Instance Temporarily in the Amazon RDS User Guide. This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora clusters, use StopDBCluster instead.</td>
</tr>
<tr>
    <td><a href="#switchover_read_replica"><CopyableCode code="switchover_read_replica" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new primary database. Issue this command in the Region that hosts the current standby database.</td>
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
<tr id="parameter-DBInstanceClass">
    <td><CopyableCode code="DBInstanceClass" /></td>
    <td><code>string</code></td>
    <td>The compute and memory capacity of the DB instance, for example db.m4.large. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB Instance Class in the Amazon RDS User Guide. Importing from Amazon S3 isn't supported on the db.t2.micro DB instance class.</td>
</tr>
<tr id="parameter-DBInstanceIdentifier">
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The DB instance identifier of the current standby database. This value is stored as a lowercase string. Constraints: Must match the identiﬁer of an existing Oracle read replica DB instance.</td>
</tr>
<tr id="parameter-FeatureName">
    <td><CopyableCode code="FeatureName" /></td>
    <td><code>string</code></td>
    <td>The name of the feature for the DB instance that the IAM role is to be disassociated from. For information about supported feature names, see DBEngineVersion.</td>
</tr>
<tr id="parameter-LogFileName">
    <td><CopyableCode code="LogFileName" /></td>
    <td><code>string</code></td>
    <td>The name of the log file to be downloaded.</td>
</tr>
<tr id="parameter-RoleArn">
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB instance, for example, arn:aws:iam::123456789012:role/AccessRole.</td>
</tr>
<tr id="parameter-S3BucketName">
    <td><CopyableCode code="S3BucketName" /></td>
    <td><code>string</code></td>
    <td>The name of your Amazon S3 bucket that contains your database backup file.</td>
</tr>
<tr id="parameter-S3IngestionRoleArn">
    <td><CopyableCode code="S3IngestionRoleArn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Web Services Identity and Access Management (IAM) role with a trust policy and a permissions policy that allows Amazon RDS to access your Amazon S3 bucket. For information about this role, see Creating an IAM role manually in the Amazon RDS User Guide.</td>
</tr>
<tr id="parameter-SourceEngine">
    <td><CopyableCode code="SourceEngine" /></td>
    <td><code>string</code></td>
    <td>The name of the engine of your source database. Valid Values: mysql</td>
</tr>
<tr id="parameter-SourceEngineVersion">
    <td><CopyableCode code="SourceEngineVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the database that the backup files were created from. MySQL versions 5.6 and 5.7 are supported. Example: 5.6.40</td>
</tr>
<tr id="parameter-TargetDBInstanceIdentifier">
    <td><CopyableCode code="TargetDBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The name of the new DB instance to create. Constraints: Must contain from 1 to 63 letters, numbers, or hyphens. First character must be a letter. Can't end with a hyphen or contain two consecutive hyphens.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AdditionalStorageVolumes">
    <td><CopyableCode code="AdditionalStorageVolumes" /></td>
    <td><code>array</code></td>
    <td>A list of additional storage volumes to restore to the DB instance. You can restore up to three additional storage volumes using the names rdsdbdata2, rdsdbdata3, and rdsdbdata4. Additional storage volumes are supported for RDS for Oracle and RDS for SQL Server DB instances only.</td>
</tr>
<tr id="parameter-AllocatedStorage">
    <td><CopyableCode code="AllocatedStorage" /></td>
    <td><code>integer</code></td>
    <td>The amount of storage (in gibibytes) to allocate initially for the DB instance. Follow the allocation rules specified in CreateDBInstance. This setting isn't valid for RDS for SQL Server. Be sure to allocate enough storage for your new DB instance so that the restore operation can succeed. You can also allocate additional storage for future growth.</td>
</tr>
<tr id="parameter-AllowMajorVersionUpgrade">
    <td><CopyableCode code="AllowMajorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. This setting doesn't apply to RDS Custom DB instances. Constraints: Major version upgrades must be allowed when specifying a value for the EngineVersion parameter that's a different major version than the DB instance's current version.</td>
</tr>
<tr id="parameter-ApplyImmediately">
    <td><CopyableCode code="ApplyImmediately" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB instance. By default, this parameter is disabled. If this parameter is disabled, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to RebootDBInstance, or the next failure reboot. Review the table of parameters in Modifying a DB Instance in the Amazon RDS User Guide to see the impact of enabling or disabling ApplyImmediately for each modified parameter and to determine when the changes are applied.</td>
</tr>
<tr id="parameter-AutoMinorVersionUpgrade">
    <td><CopyableCode code="AutoMinorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether minor version upgrades are applied automatically to the DB instance during the maintenance window. This setting doesn't apply to RDS Custom. For more information about automatic minor version upgrades, see Automatically upgrading the minor engine version.</td>
</tr>
<tr id="parameter-AutomationMode">
    <td><CopyableCode code="AutomationMode" /></td>
    <td><code>string</code></td>
    <td>The automation mode of the RDS Custom DB instance. If full, the DB instance automates monitoring and instance recovery. If all paused, the instance pauses automation for the duration set by ResumeFullAutomationModeMinutes.</td>
</tr>
<tr id="parameter-AvailabilityZone">
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone (AZ) where the DB instance will be created. Default: A random, system-chosen Availability Zone. Constraints: You can't specify the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment. Example: us-east-1a</td>
</tr>
<tr id="parameter-AwsBackupRecoveryPointArn">
    <td><CopyableCode code="AwsBackupRecoveryPointArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup. This setting doesn't apply to RDS Custom DB instances.</td>
</tr>
<tr id="parameter-BackupRetentionPeriod">
    <td><CopyableCode code="BackupRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The number of days to retain automated backups. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups. Enabling and disabling backups can result in a brief I/O suspension that lasts from a few seconds to a few minutes, depending on the size and class of your DB instance. This setting doesn't apply to Amazon Aurora DB instances. The retention period for automated backups is managed by the DB cluster. For more information, see ModifyDBCluster. Default: Uses existing setting Constraints: Must be a value from 0 to 35. Can't be set to 0 if the DB instance is a source to read replicas. Can't be set to 0 for an RDS Custom for Oracle DB instance.</td>
</tr>
<tr id="parameter-BackupTarget">
    <td><CopyableCode code="BackupTarget" /></td>
    <td><code>string</code></td>
    <td>The location for storing automated backups and manual snapshots for the restored DB instance. Valid Values: local (Dedicated Local Zone) outposts (Amazon Web Services Outposts) region (Amazon Web Services Region) Default: region For more information, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide.</td>
</tr>
<tr id="parameter-CACertificateIdentifier">
    <td><CopyableCode code="CACertificateIdentifier" /></td>
    <td><code>string</code></td>
    <td>The CA certificate identifier to use for the DB instance's server certificate. This setting doesn't apply to RDS Custom DB instances. For more information, see Using SSL/TLS to encrypt a connection to a DB instance in the Amazon RDS User Guide and Using SSL/TLS to encrypt a connection to a DB cluster in the Amazon Aurora User Guide.</td>
</tr>
<tr id="parameter-CertificateRotationRestart">
    <td><CopyableCode code="CertificateRotationRestart" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate. By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted. Set this parameter only if you are not using SSL/TLS to connect to the DB instance. If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate: For more information about rotating your SSL/TLS certificate for RDS DB engines, see Rotating Your SSL/TLS Certificate. in the Amazon RDS User Guide. For more information about rotating your SSL/TLS certificate for Aurora DB engines, see Rotating Your SSL/TLS Certificate in the Amazon Aurora User Guide. This setting doesn't apply to RDS Custom DB instances.</td>
</tr>
<tr id="parameter-CharacterSetName">
    <td><CopyableCode code="CharacterSetName" /></td>
    <td><code>string</code></td>
    <td>For supported engines, the character set (CharacterSet) to associate the DB instance with. This setting doesn't apply to the following DB instances: Amazon Aurora - The character set is managed by the DB cluster. For more information, see CreateDBCluster. RDS Custom - However, if you need to change the character set, you can change it on the database itself.</td>
</tr>
<tr id="parameter-CloudwatchLogsExportConfiguration">
    <td><CopyableCode code="CloudwatchLogsExportConfiguration" /></td>
    <td><code>object</code></td>
    <td>The log types to be enabled for export to CloudWatch Logs for a specific DB instance. A change to the CloudwatchLogsExportConfiguration parameter is always applied to the DB instance immediately. Therefore, the ApplyImmediately parameter has no effect. This setting doesn't apply to RDS Custom DB instances. The following values are valid for each DB engine: Aurora MySQL - audit | error | general | slowquery | iam-db-auth-error Aurora PostgreSQL - postgresql | iam-db-auth-error RDS for MySQL - error | general | slowquery | iam-db-auth-error RDS for PostgreSQL - postgresql | upgrade | iam-db-auth-error For more information about exporting CloudWatch Logs for Amazon RDS, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon RDS User Guide. For more information about exporting CloudWatch Logs for Amazon Aurora, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide.</td>
</tr>
<tr id="parameter-CopyTagsToSnapshot">
    <td><CopyableCode code="CopyTagsToSnapshot" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to copy all tags from the restored DB instance to snapshots of the DB instance. By default, tags are not copied.</td>
</tr>
<tr id="parameter-CustomIamInstanceProfile">
    <td><CopyableCode code="CustomIamInstanceProfile" /></td>
    <td><code>string</code></td>
    <td>The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. The instance profile must meet the following requirements: The profile must exist in your account. The profile must have an IAM role that Amazon EC2 has permissions to assume. The instance profile name and the associated IAM role name must start with the prefix AWSRDSCustom. For the list of permissions required for the IAM role, see Configure IAM and your VPC in the Amazon RDS User Guide. This setting is required for RDS Custom.</td>
</tr>
<tr id="parameter-DBClusterIdentifier">
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the DB cluster that this DB instance will belong to. This setting doesn't apply to RDS Custom DB instances.</td>
</tr>
<tr id="parameter-DBClusterSnapshotIdentifier">
    <td><CopyableCode code="DBClusterSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the Multi-AZ DB cluster snapshot to restore from. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide. Constraints: Must match the identifier of an existing Multi-AZ DB cluster snapshot. Can't be specified when DBSnapshotIdentifier is specified. Must be specified when DBSnapshotIdentifier isn't specified. If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the DBClusterSnapshotIdentifier must be the ARN of the shared snapshot. Can't be the identifier of an Aurora DB cluster snapshot.</td>
</tr>
<tr id="parameter-DBInstanceClass">
    <td><CopyableCode code="DBInstanceClass" /></td>
    <td><code>string</code></td>
    <td>The compute and memory capacity of the Amazon RDS DB instance, for example db.m4.large. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB Instance Class in the Amazon RDS User Guide. Default: The same DB instance class as the original DB instance.</td>
</tr>
<tr id="parameter-DBInstanceIdentifier">
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The user-supplied instance identifier or the Amazon Resource Name (ARN) of the DB instance. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive. Constraints: If supplied, must match the identifier of an existing DB instance.</td>
</tr>
<tr id="parameter-DBName">
    <td><CopyableCode code="DBName" /></td>
    <td><code>string</code></td>
    <td>The database name for the restored DB instance. This parameter doesn't apply to the following DB instances: RDS Custom RDS for Db2 RDS for MariaDB RDS for MySQL</td>
</tr>
<tr id="parameter-DBParameterGroupName">
    <td><CopyableCode code="DBParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the DB parameter group to associate with this DB instance. If you do not specify a value for DBParameterGroupName, then the default DBParameterGroup for the specified DB engine is used. This setting doesn't apply to RDS Custom. Constraints: If supplied, must match the name of an existing DB parameter group. Must be 1 to 255 letters, numbers, or hyphens. First character must be a letter. Can't end with a hyphen or contain two consecutive hyphens.</td>
</tr>
<tr id="parameter-DBPortNumber">
    <td><CopyableCode code="DBPortNumber" /></td>
    <td><code>integer</code></td>
    <td>The port number on which the database accepts connections. The value of the DBPortNumber parameter must not match any of the port values specified for options in the option group for the DB instance. If you change the DBPortNumber value, your database restarts regardless of the value of the ApplyImmediately parameter. This setting doesn't apply to RDS Custom DB instances. Valid Values: 1150-65535 Default: Amazon Aurora - 3306 RDS for Db2 - 50000 RDS for MariaDB - 3306 RDS for Microsoft SQL Server - 1433 RDS for MySQL - 3306 RDS for Oracle - 1521 RDS for PostgreSQL - 5432 Constraints: For RDS for Microsoft SQL Server, the value can't be 1234, 1434, 3260, 3343, 3389, 47001, or 49152-49156.</td>
</tr>
<tr id="parameter-DBSecurityGroups">
    <td><CopyableCode code="DBSecurityGroups" /></td>
    <td><code>array</code></td>
    <td>A list of DB security groups to associate with this DB instance. Default: The default DB security group for the database engine.</td>
</tr>
<tr id="parameter-DBSnapshotIdentifier">
    <td><CopyableCode code="DBSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The user-supplied instance identifier of the DB Snapshot created immediately before the DB instance is stopped.</td>
</tr>
<tr id="parameter-DBSubnetGroupName">
    <td><CopyableCode code="DBSubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The DB subnet group name to use for the new instance. Constraints: If supplied, must match the name of an existing DB subnet group. Example: mydbsubnetgroup</td>
</tr>
<tr id="parameter-DBSystemId">
    <td><CopyableCode code="DBSystemId" /></td>
    <td><code>string</code></td>
    <td>The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files. In this context, the term "Oracle database instance" refers exclusively to the system global area (SGA) and Oracle background processes. If you don't specify a SID, the value defaults to RDSCDB. The Oracle SID is also the name of your CDB.</td>
</tr>
<tr id="parameter-DatabaseInsightsMode">
    <td><CopyableCode code="DatabaseInsightsMode" /></td>
    <td><code>string</code></td>
    <td>Specifies the mode of Database Insights to enable for the DB instance. Aurora DB instances inherit this value from the DB cluster, so you can't change this value.</td>
</tr>
<tr id="parameter-DedicatedLogVolume">
    <td><CopyableCode code="DedicatedLogVolume" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to enable a dedicated log volume (DLV) for the DB instance.</td>
</tr>
<tr id="parameter-DeleteAutomatedBackups">
    <td><CopyableCode code="DeleteAutomatedBackups" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to remove automated backups immediately after the DB instance is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.</td>
</tr>
<tr id="parameter-DeletionProtection">
    <td><CopyableCode code="DeletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see Deleting a DB Instance.</td>
</tr>
<tr id="parameter-DisableDomain">
    <td><CopyableCode code="DisableDomain" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to remove the DB instance from the Active Directory domain.</td>
</tr>
<tr id="parameter-Domain">
    <td><CopyableCode code="Domain" /></td>
    <td><code>string</code></td>
    <td>The Active Directory directory ID to restore the DB instance in. Create the domain before running this command. Currently, you can create only the MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain. This setting doesn't apply to RDS Custom. For more information, see Kerberos Authentication in the Amazon RDS User Guide.</td>
</tr>
<tr id="parameter-DomainAuthSecretArn">
    <td><CopyableCode code="DomainAuthSecretArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the Secrets Manager secret with the credentials for the user joining the domain. Constraints: Can't be longer than 64 characters. Example: arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456</td>
</tr>
<tr id="parameter-DomainDnsIps">
    <td><CopyableCode code="DomainDnsIps" /></td>
    <td><code>array</code></td>
    <td>The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers. Constraints: Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list. Example: 123.124.125.126,234.235.236.237</td>
</tr>
<tr id="parameter-DomainFqdn">
    <td><CopyableCode code="DomainFqdn" /></td>
    <td><code>string</code></td>
    <td>The fully qualified domain name (FQDN) of an Active Directory domain. Constraints: Can't be longer than 64 characters. Example: mymanagedADtest.mymanagedAD.mydomain</td>
</tr>
<tr id="parameter-DomainIAMRoleName">
    <td><CopyableCode code="DomainIAMRoleName" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM role to use when making API calls to the Directory Service. This setting doesn't apply to RDS Custom DB instances.</td>
</tr>
<tr id="parameter-DomainOu">
    <td><CopyableCode code="DomainOu" /></td>
    <td><code>string</code></td>
    <td>The Active Directory organizational unit for your DB instance to join. Constraints: Must be in the distinguished name format. Can't be longer than 64 characters. Example: OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain</td>
</tr>
<tr id="parameter-EnableCloudwatchLogsExports">
    <td><CopyableCode code="EnableCloudwatchLogsExports" /></td>
    <td><code>array</code></td>
    <td>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom.</td>
</tr>
<tr id="parameter-EnableCustomerOwnedIp">
    <td><CopyableCode code="EnableCustomerOwnedIp" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. This setting doesn't apply to RDS Custom. For more information about RDS on Outposts, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the Amazon Web Services Outposts User Guide.</td>
</tr>
<tr id="parameter-EnableIAMDatabaseAuthentication">
    <td><CopyableCode code="EnableIAMDatabaseAuthentication" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. This setting doesn't apply to RDS Custom. For more information about IAM database authentication, see IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide.</td>
</tr>
<tr id="parameter-EnablePerformanceInsights">
    <td><CopyableCode code="EnablePerformanceInsights" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to enable Performance Insights for the DB instance. For more information, see Using Amazon Performance Insights in the Amazon RDS User Guide.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The database engine to use for the new instance. This setting doesn't apply to RDS Custom. Valid Values: db2-ae db2-se mariadb mysql oracle-ee oracle-ee-cdb oracle-se2 oracle-se2-cdb postgres sqlserver-ee sqlserver-se sqlserver-ex sqlserver-web Default: The same as source Constraints: Must be compatible with the engine of the source.</td>
</tr>
<tr id="parameter-EngineLifecycleSupport">
    <td><CopyableCode code="EngineLifecycleSupport" /></td>
    <td><code>string</code></td>
    <td>The life cycle type for this DB instance. By default, this value is set to open-source-rds-extended-support, which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to open-source-rds-extended-support-disabled. In this case, RDS automatically upgrades your restored DB instance to a higher engine version, if the major engine version is past its end of standard support date. You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see Amazon RDS Extended Support with Amazon RDS in the Amazon RDS User Guide. This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the life cycle type is managed by the DB cluster. Valid Values: open-source-rds-extended-support | open-source-rds-extended-support-disabled Default: open-source-rds-extended-support</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The version number of the database engine to use. Choose the latest minor version of your database engine. For information about engine versions, see CreateDBInstance, or call DescribeDBEngineVersions.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more DB instances to describe. Supported Filters: db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list only includes information about the DB instances associated with the DB clusters identified by these ARNs. db-instance-id - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs). The results list only includes information about the DB instances identified by these ARNs. dbi-resource-id - Accepts DB instance resource identifiers. The results list only includes information about the DB instances identified by these DB instance resource identifiers. domain - Accepts Active Directory directory IDs. The results list only includes information about the DB instances associated with these domains. engine - Accepts engine names. The results list only includes information about the DB instances for these engines.</td>
</tr>
<tr id="parameter-FinalDBSnapshotIdentifier">
    <td><CopyableCode code="FinalDBSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The DBSnapshotIdentifier of the new DBSnapshot created when the SkipFinalSnapshot parameter is disabled. If you enable this parameter and also enable SkipFinalShapshot, the command results in an error. This setting doesn't apply to RDS Custom. Constraints: Must be 1 to 255 letters or numbers. First character must be a letter. Can't end with a hyphen or contain two consecutive hyphens. Can't be specified when deleting a read replica.</td>
</tr>
<tr id="parameter-ForceFailover">
    <td><CopyableCode code="ForceFailover" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the reboot is conducted through a Multi-AZ failover. Constraint: You can't enable force failover if the instance isn't configured for Multi-AZ.</td>
</tr>
<tr id="parameter-Iops">
    <td><CopyableCode code="Iops" /></td>
    <td><code>integer</code></td>
    <td>The amount of Provisioned IOPS (input/output operations per second) to initially allocate for the DB instance. This setting doesn't apply to SQL Server. Constraints: Must be an integer greater than 1000.</td>
</tr>
<tr id="parameter-KmsKeyId">
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key identifier for an encrypted DB instance. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If the StorageEncrypted parameter is enabled, and you do not specify a value for the KmsKeyId parameter, then Amazon RDS will use your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</td>
</tr>
<tr id="parameter-LicenseModel">
    <td><CopyableCode code="LicenseModel" /></td>
    <td><code>string</code></td>
    <td>The license model information for the restored DB instance. License models for RDS for Db2 require additional configuration. The bring your own license (BYOL) model requires a custom parameter group and an Amazon Web Services License Manager self-managed license. The Db2 license through Amazon Web Services Marketplace model requires an Amazon Web Services Marketplace subscription. For more information, see Amazon RDS for Db2 licensing options in the Amazon RDS User Guide. This setting doesn't apply to Amazon Aurora or RDS Custom DB instances. Valid Values: RDS for Db2 - bring-your-own-license | marketplace-license RDS for MariaDB - general-public-license RDS for Microsoft SQL Server - license-included RDS for MySQL - general-public-license RDS for Oracle - bring-your-own-license | license-included RDS for PostgreSQL - postgresql-license Default: Same as the source.</td>
</tr>
<tr id="parameter-ManageMasterUserPassword">
    <td><CopyableCode code="ManageMasterUserPassword" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to manage the master user password with Amazon Web Services Secrets Manager in the restored DB instance. For more information, see Password management with Amazon Web Services Secrets Manager in the Amazon RDS User Guide. Constraints: Applies to RDS for Oracle only.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The pagination token provided in the previous request or "0". If the Marker parameter is specified the response includes only records beyond the marker until the end of the file or up to NumberOfLines.</td>
</tr>
<tr id="parameter-MasterUserAuthenticationType">
    <td><CopyableCode code="MasterUserAuthenticationType" /></td>
    <td><code>string</code></td>
    <td>Specifies the authentication type for the master user. With IAM master user authentication, you can change the master DB user to use IAM database authentication. You can specify one of the following values: password - Use standard database authentication with a password. iam-db-auth - Use IAM database authentication for the master user. This option is only valid for RDS for PostgreSQL and Aurora PostgreSQL engines.</td>
</tr>
<tr id="parameter-MasterUserPassword">
    <td><CopyableCode code="MasterUserPassword" /></td>
    <td><code>string</code></td>
    <td>The password for the master user. Constraints: Can't be specified if ManageMasterUserPassword is turned on. Can include any printable ASCII character except "/", """, or "@". For RDS for Oracle, can't include the "&" (ampersand) or the "'" (single quotes) character. Length Constraints: RDS for Db2 - Must contain from 8 to 128 characters. RDS for MariaDB - Must contain from 8 to 41 characters. RDS for Microsoft SQL Server - Must contain from 8 to 128 characters. RDS for MySQL - Must contain from 8 to 41 characters. RDS for Oracle - Must contain from 8 to 30 characters. RDS for PostgreSQL - Must contain from 8 to 128 characters.</td>
</tr>
<tr id="parameter-MasterUserSecretKmsKeyId">
    <td><CopyableCode code="MasterUserSecretKmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager. This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB instance. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If you don't specify MasterUserSecretKmsKeyId, then the aws/secretsmanager KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the aws/secretsmanager KMS key to encrypt the secret, and you must use a customer managed KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</td>
</tr>
<tr id="parameter-MasterUsername">
    <td><CopyableCode code="MasterUsername" /></td>
    <td><code>string</code></td>
    <td>The name for the master user. Constraints: Must be 1 to 16 letters or numbers. First character must be a letter. Can't be a reserved word for the chosen database engine.</td>
</tr>
<tr id="parameter-MaxAllocatedStorage">
    <td><CopyableCode code="MaxAllocatedStorage" /></td>
    <td><code>integer</code></td>
    <td>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance. For more information about this setting, including limitations that apply to it, see Managing capacity automatically with Amazon RDS storage autoscaling in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-MonitoringInterval">
    <td><CopyableCode code="MonitoringInterval" /></td>
    <td><code>integer</code></td>
    <td>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. If MonitoringRoleArn is specified, then you must also set MonitoringInterval to a value other than 0. Valid Values: 0, 1, 5, 10, 15, 30, 60 Default: 0</td>
</tr>
<tr id="parameter-MonitoringRoleArn">
    <td><CopyableCode code="MonitoringRoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. For information on creating a monitoring role, see Setting Up and Enabling Enhanced Monitoring in the Amazon RDS User Guide. If MonitoringInterval is set to a value other than 0, then you must supply a MonitoringRoleArn value.</td>
</tr>
<tr id="parameter-MultiAZ">
    <td><CopyableCode code="MultiAZ" /></td>
    <td><code>boolean</code></td>
    <td>Secifies whether the DB instance is a Multi-AZ deployment. This setting doesn't apply to RDS Custom. Constraints: You can't specify the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment.</td>
</tr>
<tr id="parameter-MultiTenant">
    <td><CopyableCode code="MultiTenant" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the to convert your DB instance from the single-tenant conﬁguration to the multi-tenant conﬁguration. This parameter is supported only for RDS for Oracle CDB instances. During the conversion, RDS creates an initial tenant database and associates the DB name, master user name, character set, and national character set metadata with this database. The tags associated with the instance also propagate to the initial tenant database. You can add more tenant databases to your DB instance by using the CreateTenantDatabase operation. The conversion to the multi-tenant configuration is permanent and irreversible, so you can't later convert back to the single-tenant configuration. When you specify this parameter, you must also specify ApplyImmediately.</td>
</tr>
<tr id="parameter-NcharCharacterSetName">
    <td><CopyableCode code="NcharCharacterSetName" /></td>
    <td><code>string</code></td>
    <td>The name of the NCHAR character set for the Oracle DB instance. This setting doesn't apply to RDS Custom DB instances.</td>
</tr>
<tr id="parameter-NetworkType">
    <td><CopyableCode code="NetworkType" /></td>
    <td><code>string</code></td>
    <td>The network type of the DB instance. The network type is determined by the DBSubnetGroup specified for the DB instance. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see Working with a DB instance in a VPC in the Amazon RDS User Guide. Valid Values: IPV4 DUAL</td>
</tr>
<tr id="parameter-NewDBInstanceIdentifier">
    <td><CopyableCode code="NewDBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The new identifier for the DB instance when renaming a DB instance. When you change the DB instance identifier, an instance reboot occurs immediately if you enable ApplyImmediately, or will occur during the next maintenance window if you disable ApplyImmediately. This value is stored as a lowercase string. This setting doesn't apply to RDS Custom DB instances. Constraints: Must contain from 1 to 63 letters, numbers, or hyphens. The first character must be a letter. Can't end with a hyphen or contain two consecutive hyphens. Example: mydbinstance</td>
</tr>
<tr id="parameter-NumberOfLines">
    <td><CopyableCode code="NumberOfLines" /></td>
    <td><code>integer</code></td>
    <td>The number of lines to download. If the number of lines specified results in a file over 1 MB in size, the file is truncated at 1 MB in size. If the NumberOfLines parameter is specified, then the block of lines returned can be from the beginning or the end of the log file, depending on the value of the Marker parameter. If neither Marker or NumberOfLines are specified, the entire log file is returned up to a maximum of 10000 lines, starting with the most recent log entries first. If NumberOfLines is specified and Marker isn't specified, then the most recent lines from the end of the log file are returned. If Marker is specified as "0", then the specified number of lines from the beginning of the log file are returned. You can download the log file in blocks of lines by specifying the size of the block using the NumberOfLines parameter, and by specifying a value of "0" for the Marker parameter in your first request. Include the Marker value returned in the response as the Marker value for the next request, continuing until the AdditionalDataPending response element returns false.</td>
</tr>
<tr id="parameter-OptionGroupName">
    <td><CopyableCode code="OptionGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the option group to use for the restored DB instance. Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance after it is associated with a DB instance This setting doesn't apply to RDS Custom.</td>
</tr>
<tr id="parameter-PerformanceInsightsKMSKeyId">
    <td><CopyableCode code="PerformanceInsightsKMSKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key identifier for encryption of Performance Insights data. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</td>
</tr>
<tr id="parameter-PerformanceInsightsRetentionPeriod">
    <td><CopyableCode code="PerformanceInsightsRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The number of days to retain Performance Insights data. The default is 7 days. The following values are valid: 7 month * 31, where month is a number of months from 1-23 731 For example, the following values are valid: 93 (3 months * 31) 341 (11 months * 31) 589 (19 months * 31) 731 If you specify a retention period such as 94, which isn't a valid value, RDS issues an error.</td>
</tr>
<tr id="parameter-Port">
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port number on which the database accepts connections. Default: The same port as the original DB instance. Constraints: The value must be 1150-65535.</td>
</tr>
<tr id="parameter-PreSignedUrl">
    <td><CopyableCode code="PreSignedUrl" /></td>
    <td><code>string</code></td>
    <td>When you are creating a read replica from one Amazon Web Services GovCloud (US) Region to another or from one China Amazon Web Services Region to another, the URL that contains a Signature Version 4 signed request for the CreateDBInstanceReadReplica API operation in the source Amazon Web Services Region that contains the source DB instance. This setting applies only to Amazon Web Services GovCloud (US) Regions and China Amazon Web Services Regions. It's ignored in other Amazon Web Services Regions. This setting applies only when replicating from a source DB instance. Source DB clusters aren't supported in Amazon Web Services GovCloud (US) Regions and China Amazon Web Services Regions. You must specify this parameter when you create an encrypted read replica from another Amazon Web Services Region by using the Amazon RDS API. Don't specify PreSignedUrl when you are creating an encrypted read replica in the same Amazon Web Services Region. The presigned URL must be a valid request for the CreateDBInstanceReadReplica API operation that can run in the source Amazon Web Services Region that contains the encrypted source DB instance. The presigned URL request must contain the following parameter values: DestinationRegion - The Amazon Web Services Region that the encrypted read replica is created in. This Amazon Web Services Region is the same one where the CreateDBInstanceReadReplica operation is called that contains this presigned URL. For example, if you create an encrypted DB instance in the us-west-1 Amazon Web Services Region, from a source DB instance in the us-east-2 Amazon Web Services Region, then you call the CreateDBInstanceReadReplica operation in the us-east-1 Amazon Web Services Region and provide a presigned URL that contains a call to the CreateDBInstanceReadReplica operation in the us-west-2 Amazon Web Services Region. For this example, the DestinationRegion in the presigned URL must be set to the us-east-1 Amazon Web Services Region. KmsKeyId - The KMS key identifier for the key to use to encrypt the read replica in the destination Amazon Web Services Region. This is the same identifier for both the CreateDBInstanceReadReplica operation that is called in the destination Amazon Web Services Region, and the operation contained in the presigned URL. SourceDBInstanceIdentifier - The DB instance identifier for the encrypted DB instance to be replicated. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are creating an encrypted read replica from a DB instance in the us-west-2 Amazon Web Services Region, then your SourceDBInstanceIdentifier looks like the following example: arn:aws:rds:us-west-2:123456789012:instance:mysql-instance1-20161115. To learn how to generate a Signature Version 4 signed request, see Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4) and Signature Version 4 Signing Process. If you are using an Amazon Web Services SDK tool or the CLI, you can specify SourceRegion (or --source-region for the CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region. This setting doesn't apply to RDS Custom DB instances.</td>
</tr>
<tr id="parameter-PreferredBackupWindow">
    <td><CopyableCode code="PreferredBackupWindow" /></td>
    <td><code>string</code></td>
    <td>The daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod parameter. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. For more information, see Backup window in the Amazon RDS User Guide. This setting doesn't apply to Amazon Aurora DB instances. The daily time range for creating automated backups is managed by the DB cluster. For more information, see ModifyDBCluster. Constraints: Must be in the format hh24:mi-hh24:mi. Must be in Universal Coordinated Time (UTC). Must not conflict with the preferred maintenance window. Must be at least 30 minutes.</td>
</tr>
<tr id="parameter-PreferredMaintenanceWindow">
    <td><CopyableCode code="PreferredMaintenanceWindow" /></td>
    <td><code>string</code></td>
    <td>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). For more information, see Amazon RDS Maintenance Window in the Amazon RDS User Guide. Constraints: Must be in the format ddd:hh24:mi-ddd:hh24:mi. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Must be in Universal Coordinated Time (UTC). Must not conflict with the preferred backup window. Must be at least 30 minutes.</td>
</tr>
<tr id="parameter-ProcessorFeatures">
    <td><CopyableCode code="ProcessorFeatures" /></td>
    <td><code>array</code></td>
    <td>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance. This setting doesn't apply to RDS Custom.</td>
</tr>
<tr id="parameter-PromotionTier">
    <td><CopyableCode code="PromotionTier" /></td>
    <td><code>integer</code></td>
    <td>The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see Fault Tolerance for an Aurora DB Cluster in the Amazon Aurora User Guide. This setting doesn't apply to RDS Custom DB instances. Default: 1 Valid Values: 0 - 15</td>
</tr>
<tr id="parameter-PubliclyAccessible">
    <td><CopyableCode code="PubliclyAccessible" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the DB instance is publicly accessible. When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance.</td>
</tr>
<tr id="parameter-ReplicaMode">
    <td><CopyableCode code="ReplicaMode" /></td>
    <td><code>string</code></td>
    <td>The open mode of a replica database. This parameter is only supported for Db2 DB instances and Oracle DB instances. Db2 Standby DB replicas are included in Db2 Advanced Edition (AE) and Db2 Standard Edition (SE). The main use case for standby replicas is cross-Region disaster recovery. Because it doesn't accept user connections, a standby replica can't serve a read-only workload. You can create a combination of standby and read-only DB replicas for the same primary DB instance. For more information, see Working with replicas for Amazon RDS for Db2 in the Amazon RDS User Guide. To create standby DB replicas for RDS for Db2, set this parameter to mounted. Oracle Mounted DB replicas are included in Oracle Database Enterprise Edition. The main use case for mounted replicas is cross-Region disaster recovery. The primary database doesn't use Active Data Guard to transmit information to the mounted replica. Because it doesn't accept user connections, a mounted replica can't serve a read-only workload. You can create a combination of mounted and read-only DB replicas for the same primary DB instance. For more information, see Working with read replicas for Amazon RDS for Oracle in the Amazon RDS User Guide. For RDS Custom, you must specify this parameter and set it to mounted. The value won't be set by default. After replica creation, you can manage the open mode manually.</td>
</tr>
<tr id="parameter-RestoreTime">
    <td><CopyableCode code="RestoreTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time to restore from. Constraints: Must be a time in Universal Coordinated Time (UTC) format. Must be before the latest restorable time for the DB instance. Can't be specified if the UseLatestRestorableTime parameter is enabled. Example: 2009-09-07T23:45:00Z</td>
</tr>
<tr id="parameter-ResumeFullAutomationModeMinutes">
    <td><CopyableCode code="ResumeFullAutomationModeMinutes" /></td>
    <td><code>integer</code></td>
    <td>The number of minutes to pause the automation. When the time period ends, RDS Custom resumes full automation. Default: 60 Constraints: Must be at least 60. Must be no more than 1,440.</td>
</tr>
<tr id="parameter-RotateMasterUserPassword">
    <td><CopyableCode code="RotateMasterUserPassword" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to rotate the secret managed by Amazon Web Services Secrets Manager for the master user password. This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB instance. The secret value contains the updated password. For more information, see Password management with Amazon Web Services Secrets Manager in the Amazon RDS User Guide. Constraints: You must apply the change immediately when rotating the master user password.</td>
</tr>
<tr id="parameter-S3Prefix">
    <td><CopyableCode code="S3Prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix of your Amazon S3 bucket.</td>
</tr>
<tr id="parameter-SkipFinalSnapshot">
    <td><CopyableCode code="SkipFinalSnapshot" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to skip the creation of a final DB snapshot before deleting the instance. If you enable this parameter, RDS doesn't create a DB snapshot. If you don't enable this parameter, RDS creates a DB snapshot before the DB instance is deleted. By default, skip isn't enabled, and the DB snapshot is created. If you don't enable this parameter, you must specify the FinalDBSnapshotIdentifier parameter. When a DB instance is in a failure state and has a status of failed, incompatible-restore, or incompatible-network, RDS can delete the instance only if you enable this parameter. If you delete a read replica or an RDS Custom instance, you must enable this setting. This setting is required for RDS Custom.</td>
</tr>
<tr id="parameter-SourceDBClusterIdentifier">
    <td><CopyableCode code="SourceDBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Multi-AZ DB cluster that will act as the source for the read replica. Each DB cluster can have up to 15 read replicas. Constraints: Must be the identifier of an existing Multi-AZ DB cluster. Can't be specified if the SourceDBInstanceIdentifier parameter is also specified. The specified DB cluster must have automatic backups enabled, that is, its backup retention period must be greater than 0. The source DB cluster must be in the same Amazon Web Services Region as the read replica. Cross-Region replication isn't supported.</td>
</tr>
<tr id="parameter-SourceDBInstanceAutomatedBackupsArn">
    <td><CopyableCode code="SourceDBInstanceAutomatedBackupsArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE. This setting doesn't apply to RDS Custom.</td>
</tr>
<tr id="parameter-SourceDBInstanceIdentifier">
    <td><CopyableCode code="SourceDBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the source DB instance from which to restore. Constraints: Must match the identifier of an existing DB instance.</td>
</tr>
<tr id="parameter-SourceDbiResourceId">
    <td><CopyableCode code="SourceDbiResourceId" /></td>
    <td><code>string</code></td>
    <td>The resource ID of the source DB instance from which to restore.</td>
</tr>
<tr id="parameter-StorageEncrypted">
    <td><CopyableCode code="StorageEncrypted" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the new DB instance is encrypted or not.</td>
</tr>
<tr id="parameter-StorageThroughput">
    <td><CopyableCode code="StorageThroughput" /></td>
    <td><code>integer</code></td>
    <td>The storage throughput value for the DB instance. This setting doesn't apply to RDS Custom or Amazon Aurora.</td>
</tr>
<tr id="parameter-StorageType">
    <td><CopyableCode code="StorageType" /></td>
    <td><code>string</code></td>
    <td>The storage type to associate with the DB instance. Valid Values: gp2 | gp3 | io1 | io2 | standard Default: io1, if the Iops parameter is specified. Otherwise, gp3. Constraints: If you specify io1, io2, or gp3, you must also include a value for the Iops parameter.</td>
</tr>
<tr id="parameter-TagSpecifications">
    <td><CopyableCode code="TagSpecifications" /></td>
    <td><code>array</code></td>
    <td>Tags to assign to resources associated with the DB instance. Valid Values: auto-backup - The DB instance's automated backup.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr id="parameter-TdeCredentialArn">
    <td><CopyableCode code="TdeCredentialArn" /></td>
    <td><code>string</code></td>
    <td>The ARN from the key store with which to associate the instance for TDE encryption. This setting doesn't apply to RDS Custom.</td>
</tr>
<tr id="parameter-TdeCredentialPassword">
    <td><CopyableCode code="TdeCredentialPassword" /></td>
    <td><code>string</code></td>
    <td>The password for the given ARN from the key store in order to access the device. This setting doesn't apply to RDS Custom.</td>
</tr>
<tr id="parameter-Timezone">
    <td><CopyableCode code="Timezone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the DB instance. The time zone parameter is currently supported only by RDS for Db2 and RDS for SQL Server.</td>
</tr>
<tr id="parameter-UpgradeStorageConfig">
    <td><CopyableCode code="UpgradeStorageConfig" /></td>
    <td><code>boolean</code></td>
    <td>Whether to upgrade the storage file system configuration on the read replica. This option migrates the read replica from the old storage file system layout to the preferred layout.</td>
</tr>
<tr id="parameter-UseDefaultProcessorFeatures">
    <td><CopyableCode code="UseDefaultProcessorFeatures" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the DB instance class of the DB instance uses its default processor features. This setting doesn't apply to RDS Custom.</td>
</tr>
<tr id="parameter-UseLatestRestorableTime">
    <td><CopyableCode code="UseLatestRestorableTime" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the DB instance is restored from the latest backup time. By default, the DB instance isn't restored from the latest backup time. Constraints: Can't be specified if the RestoreTime parameter is provided.</td>
</tr>
<tr id="parameter-VpcSecurityGroupIds">
    <td><CopyableCode code="VpcSecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>A list of EC2 VPC security groups to associate with this DB instance. Default: The default EC2 VPC security group for the DB subnet group's VPC.</td>
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

Describes provisioned RDS instances. This API supports pagination. This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.

```sql
SELECT
activity_stream_engine_native_audit_fields_included,
activity_stream_kinesis_stream_name,
activity_stream_kms_key_id,
activity_stream_mode,
activity_stream_policy_status,
activity_stream_status,
additional_storage_volumes,
allocated_storage,
associated_roles,
auto_minor_version_upgrade,
automatic_restart_time,
automation_mode,
availability_zone,
aws_backup_recovery_point_arn,
backup_retention_period,
backup_target,
ca_certificate_identifier,
certificate_details,
character_set_name,
copy_tags_to_snapshot,
custom_iam_instance_profile,
customer_owned_ip_enabled,
db_cluster_identifier,
db_instance_arn,
db_instance_automated_backups_replications,
db_instance_class,
db_instance_identifier,
db_instance_status,
db_name,
db_parameter_groups,
db_security_groups,
db_subnet_group,
db_system_id,
database_insights_mode,
db_instance_port,
dbi_resource_id,
dedicated_log_volume,
deletion_protection,
domain_memberships,
enabled_cloudwatch_logs_exports,
endpoint,
engine,
engine_lifecycle_support,
engine_version,
enhanced_monitoring_resource_arn,
iam_database_authentication_enabled,
instance_create_time,
iops,
is_storage_config_upgrade_available,
kms_key_id,
latest_restorable_time,
license_model,
listener_endpoint,
master_user_secret,
master_username,
max_allocated_storage,
monitoring_interval,
monitoring_role_arn,
multi_az,
multi_tenant,
nchar_character_set_name,
network_type,
option_group_memberships,
pending_modified_values,
percent_progress,
performance_insights_enabled,
performance_insights_kms_key_id,
performance_insights_retention_period,
preferred_backup_window,
preferred_maintenance_window,
processor_features,
promotion_tier,
publicly_accessible,
read_replica_db_cluster_identifiers,
read_replica_db_instance_identifiers,
read_replica_source_db_cluster_identifier,
read_replica_source_db_instance_identifier,
replica_mode,
resume_full_automation_mode_time,
secondary_availability_zone,
status_infos,
storage_encrypted,
storage_encryption_type,
storage_throughput,
storage_type,
storage_volume_status,
tag_list,
tde_credential_arn,
timezone,
upgrade_rollout_order,
vpc_security_groups
FROM aws.rds.db_instances
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
        { label: 'create_db_instance_read_replica', value: 'create_db_instance_read_replica' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_db_instance">

Creates a new DB instance. The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster. For an Aurora DB cluster, you can call this operation multiple times to add more than one DB instance to the cluster. For more information about creating an RDS DB instance, see Creating an Amazon RDS DB instance in the Amazon RDS User Guide. For more information about creating a DB instance in an Aurora DB cluster, see Creating an Amazon Aurora DB cluster in the Amazon Aurora User Guide.

```sql
INSERT INTO aws.rds.db_instances (
DBInstanceIdentifier,
DBInstanceClass,
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
StorageThroughput,
OptionGroupName,
CharacterSetName,
NcharCharacterSetName,
PubliclyAccessible,
Tags,
DBClusterIdentifier,
StorageType,
TdeCredentialArn,
TdeCredentialPassword,
StorageEncrypted,
KmsKeyId,
Domain,
DomainFqdn,
DomainOu,
DomainAuthSecretArn,
DomainDnsIps,
CopyTagsToSnapshot,
MonitoringInterval,
MonitoringRoleArn,
DomainIAMRoleName,
PromotionTier,
Timezone,
EnableIAMDatabaseAuthentication,
DatabaseInsightsMode,
EnablePerformanceInsights,
PerformanceInsightsKMSKeyId,
PerformanceInsightsRetentionPeriod,
EnableCloudwatchLogsExports,
ProcessorFeatures,
DeletionProtection,
MaxAllocatedStorage,
EnableCustomerOwnedIp,
NetworkType,
BackupTarget,
CustomIamInstanceProfile,
DBSystemId,
CACertificateIdentifier,
ManageMasterUserPassword,
MasterUserSecretKmsKeyId,
MultiTenant,
DedicatedLogVolume,
EngineLifecycleSupport,
AdditionalStorageVolumes,
TagSpecifications,
MasterUserAuthenticationType
)
SELECT 
'{{ DBInstanceIdentifier }}',
'{{ DBInstanceClass }}',
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
'{{ StorageThroughput }}',
'{{ OptionGroupName }}',
'{{ CharacterSetName }}',
'{{ NcharCharacterSetName }}',
'{{ PubliclyAccessible }}',
'{{ Tags }}',
'{{ DBClusterIdentifier }}',
'{{ StorageType }}',
'{{ TdeCredentialArn }}',
'{{ TdeCredentialPassword }}',
'{{ StorageEncrypted }}',
'{{ KmsKeyId }}',
'{{ Domain }}',
'{{ DomainFqdn }}',
'{{ DomainOu }}',
'{{ DomainAuthSecretArn }}',
'{{ DomainDnsIps }}',
'{{ CopyTagsToSnapshot }}',
'{{ MonitoringInterval }}',
'{{ MonitoringRoleArn }}',
'{{ DomainIAMRoleName }}',
'{{ PromotionTier }}',
'{{ Timezone }}',
'{{ EnableIAMDatabaseAuthentication }}',
'{{ DatabaseInsightsMode }}',
'{{ EnablePerformanceInsights }}',
'{{ PerformanceInsightsKMSKeyId }}',
'{{ PerformanceInsightsRetentionPeriod }}',
'{{ EnableCloudwatchLogsExports }}',
'{{ ProcessorFeatures }}',
'{{ DeletionProtection }}',
'{{ MaxAllocatedStorage }}',
'{{ EnableCustomerOwnedIp }}',
'{{ NetworkType }}',
'{{ BackupTarget }}',
'{{ CustomIamInstanceProfile }}',
'{{ DBSystemId }}',
'{{ CACertificateIdentifier }}',
'{{ ManageMasterUserPassword }}',
'{{ MasterUserSecretKmsKeyId }}',
'{{ MultiTenant }}',
'{{ DedicatedLogVolume }}',
'{{ EngineLifecycleSupport }}',
'{{ AdditionalStorageVolumes }}',
'{{ TagSpecifications }}',
'{{ MasterUserAuthenticationType }}'
RETURNING
activity_stream_engine_native_audit_fields_included,
activity_stream_kinesis_stream_name,
activity_stream_kms_key_id,
activity_stream_mode,
activity_stream_policy_status,
activity_stream_status,
additional_storage_volumes,
allocated_storage,
associated_roles,
auto_minor_version_upgrade,
automatic_restart_time,
automation_mode,
availability_zone,
aws_backup_recovery_point_arn,
backup_retention_period,
backup_target,
ca_certificate_identifier,
certificate_details,
character_set_name,
copy_tags_to_snapshot,
custom_iam_instance_profile,
customer_owned_ip_enabled,
db_cluster_identifier,
db_instance_arn,
db_instance_automated_backups_replications,
db_instance_class,
db_instance_identifier,
db_instance_status,
db_name,
db_parameter_groups,
db_security_groups,
db_subnet_group,
db_system_id,
database_insights_mode,
db_instance_port,
dbi_resource_id,
dedicated_log_volume,
deletion_protection,
domain_memberships,
enabled_cloudwatch_logs_exports,
endpoint,
engine,
engine_lifecycle_support,
engine_version,
enhanced_monitoring_resource_arn,
iam_database_authentication_enabled,
instance_create_time,
iops,
is_storage_config_upgrade_available,
kms_key_id,
latest_restorable_time,
license_model,
listener_endpoint,
master_user_secret,
master_username,
max_allocated_storage,
monitoring_interval,
monitoring_role_arn,
multi_az,
multi_tenant,
nchar_character_set_name,
network_type,
option_group_memberships,
pending_modified_values,
percent_progress,
performance_insights_enabled,
performance_insights_kms_key_id,
performance_insights_retention_period,
preferred_backup_window,
preferred_maintenance_window,
processor_features,
promotion_tier,
publicly_accessible,
read_replica_db_cluster_identifiers,
read_replica_db_instance_identifiers,
read_replica_source_db_cluster_identifier,
read_replica_source_db_instance_identifier,
replica_mode,
resume_full_automation_mode_time,
secondary_availability_zone,
status_infos,
storage_encrypted,
storage_encryption_type,
storage_throughput,
storage_type,
storage_volume_status,
tag_list,
tde_credential_arn,
timezone,
upgrade_rollout_order,
vpc_security_groups
;
```
</TabItem>
<TabItem value="create_db_instance_read_replica">

Creates a new DB instance that acts as a read replica for an existing source DB instance or Multi-AZ DB cluster. You can create a read replica for a DB instance running Db2, MariaDB, MySQL, Oracle, PostgreSQL, or SQL Server. You can create a read replica for a Multi-AZ DB cluster running MySQL or PostgreSQL. For more information, see Working with read replicas and Migrating from a Multi-AZ DB cluster to a DB instance using a read replica in the Amazon RDS User Guide. Amazon Aurora doesn't support this operation. To create a DB instance for an Aurora DB cluster, use the CreateDBInstance operation. RDS creates read replicas with backups disabled. All other attributes (including DB security groups and DB parameter groups) are inherited from the source DB instance or cluster, except as specified. Your source DB instance or cluster must have backup retention enabled.

```sql
INSERT INTO aws.rds.db_instances (
DBInstanceIdentifier,
region,
SourceDBInstanceIdentifier,
DBInstanceClass,
AvailabilityZone,
Port,
MultiAZ,
AutoMinorVersionUpgrade,
Iops,
StorageThroughput,
OptionGroupName,
DBParameterGroupName,
PubliclyAccessible,
Tags,
DBSubnetGroupName,
VpcSecurityGroupIds,
StorageType,
CopyTagsToSnapshot,
MonitoringInterval,
MonitoringRoleArn,
KmsKeyId,
PreSignedUrl,
EnableIAMDatabaseAuthentication,
DatabaseInsightsMode,
EnablePerformanceInsights,
PerformanceInsightsKMSKeyId,
PerformanceInsightsRetentionPeriod,
EnableCloudwatchLogsExports,
ProcessorFeatures,
UseDefaultProcessorFeatures,
DeletionProtection,
Domain,
DomainIAMRoleName,
DomainFqdn,
DomainOu,
DomainAuthSecretArn,
DomainDnsIps,
ReplicaMode,
EnableCustomerOwnedIp,
NetworkType,
MaxAllocatedStorage,
BackupTarget,
CustomIamInstanceProfile,
AllocatedStorage,
SourceDBClusterIdentifier,
DedicatedLogVolume,
UpgradeStorageConfig,
CACertificateIdentifier,
AdditionalStorageVolumes,
TagSpecifications
)
SELECT 
'{{ DBInstanceIdentifier }}',
'{{ region }}',
'{{ SourceDBInstanceIdentifier }}',
'{{ DBInstanceClass }}',
'{{ AvailabilityZone }}',
'{{ Port }}',
'{{ MultiAZ }}',
'{{ AutoMinorVersionUpgrade }}',
'{{ Iops }}',
'{{ StorageThroughput }}',
'{{ OptionGroupName }}',
'{{ DBParameterGroupName }}',
'{{ PubliclyAccessible }}',
'{{ Tags }}',
'{{ DBSubnetGroupName }}',
'{{ VpcSecurityGroupIds }}',
'{{ StorageType }}',
'{{ CopyTagsToSnapshot }}',
'{{ MonitoringInterval }}',
'{{ MonitoringRoleArn }}',
'{{ KmsKeyId }}',
'{{ PreSignedUrl }}',
'{{ EnableIAMDatabaseAuthentication }}',
'{{ DatabaseInsightsMode }}',
'{{ EnablePerformanceInsights }}',
'{{ PerformanceInsightsKMSKeyId }}',
'{{ PerformanceInsightsRetentionPeriod }}',
'{{ EnableCloudwatchLogsExports }}',
'{{ ProcessorFeatures }}',
'{{ UseDefaultProcessorFeatures }}',
'{{ DeletionProtection }}',
'{{ Domain }}',
'{{ DomainIAMRoleName }}',
'{{ DomainFqdn }}',
'{{ DomainOu }}',
'{{ DomainAuthSecretArn }}',
'{{ DomainDnsIps }}',
'{{ ReplicaMode }}',
'{{ EnableCustomerOwnedIp }}',
'{{ NetworkType }}',
'{{ MaxAllocatedStorage }}',
'{{ BackupTarget }}',
'{{ CustomIamInstanceProfile }}',
'{{ AllocatedStorage }}',
'{{ SourceDBClusterIdentifier }}',
'{{ DedicatedLogVolume }}',
'{{ UpgradeStorageConfig }}',
'{{ CACertificateIdentifier }}',
'{{ AdditionalStorageVolumes }}',
'{{ TagSpecifications }}'
RETURNING
activity_stream_engine_native_audit_fields_included,
activity_stream_kinesis_stream_name,
activity_stream_kms_key_id,
activity_stream_mode,
activity_stream_policy_status,
activity_stream_status,
additional_storage_volumes,
allocated_storage,
associated_roles,
auto_minor_version_upgrade,
automatic_restart_time,
automation_mode,
availability_zone,
aws_backup_recovery_point_arn,
backup_retention_period,
backup_target,
ca_certificate_identifier,
certificate_details,
character_set_name,
copy_tags_to_snapshot,
custom_iam_instance_profile,
customer_owned_ip_enabled,
db_cluster_identifier,
db_instance_arn,
db_instance_automated_backups_replications,
db_instance_class,
db_instance_identifier,
db_instance_status,
db_name,
db_parameter_groups,
db_security_groups,
db_subnet_group,
db_system_id,
database_insights_mode,
db_instance_port,
dbi_resource_id,
dedicated_log_volume,
deletion_protection,
domain_memberships,
enabled_cloudwatch_logs_exports,
endpoint,
engine,
engine_lifecycle_support,
engine_version,
enhanced_monitoring_resource_arn,
iam_database_authentication_enabled,
instance_create_time,
iops,
is_storage_config_upgrade_available,
kms_key_id,
latest_restorable_time,
license_model,
listener_endpoint,
master_user_secret,
master_username,
max_allocated_storage,
monitoring_interval,
monitoring_role_arn,
multi_az,
multi_tenant,
nchar_character_set_name,
network_type,
option_group_memberships,
pending_modified_values,
percent_progress,
performance_insights_enabled,
performance_insights_kms_key_id,
performance_insights_retention_period,
preferred_backup_window,
preferred_maintenance_window,
processor_features,
promotion_tier,
publicly_accessible,
read_replica_db_cluster_identifiers,
read_replica_db_instance_identifiers,
read_replica_source_db_cluster_identifier,
read_replica_source_db_instance_identifier,
replica_mode,
resume_full_automation_mode_time,
secondary_availability_zone,
status_infos,
storage_encrypted,
storage_encryption_type,
storage_throughput,
storage_type,
storage_volume_status,
tag_list,
tde_credential_arn,
timezone,
upgrade_rollout_order,
vpc_security_groups
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
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_instances resource.
    - name: DBName
      value: "{{ DBName }}"
      description: The meaning of this parameter differs according to the database engine you use. Amazon Aurora MySQL The name of the database to create when the primary DB instance of the Aurora MySQL DB cluster is created. If this parameter isn't specified for an Aurora MySQL DB cluster, no database is created in the DB cluster. Constraints: Must contain 1 to 64 alphanumeric characters. Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9). Can't be a word reserved by the database engine. Amazon Aurora PostgreSQL The name of the database to create when the primary DB instance of the Aurora PostgreSQL DB cluster is created. A database named postgres is always created. If this parameter is specified, an additional database with this name is created. Constraints: It must contain 1 to 63 alphanumeric characters. Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0 to 9). Can't be a word reserved by the database engine. Amazon RDS Custom for Oracle The Oracle System ID (SID) of the created RDS Custom DB instance. If you don't specify a value, the default value is ORCL for non-CDBs and RDSCDB for CDBs. Default: ORCL Constraints: Must contain 1 to 8 alphanumeric characters. Must contain a letter. Can't be a word reserved by the database engine. Amazon RDS Custom for SQL Server Not applicable. Must be null. RDS for Db2 The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance. In some cases, we recommend that you don't add a database name. For more information, see Additional considerations in the Amazon RDS User Guide. Constraints: Must contain 1 to 64 letters or numbers. Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9). Can't be a word reserved by the specified database engine. RDS for MariaDB The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance. Constraints: Must contain 1 to 64 letters or numbers. Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9). Can't be a word reserved by the specified database engine. RDS for MySQL The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance. Constraints: Must contain 1 to 64 letters or numbers. Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9). Can't be a word reserved by the specified database engine. RDS for Oracle The Oracle System ID (SID) of the created DB instance. If you don't specify a value, the default value is ORCL. You can't specify the string null, or any other reserved word, for DBName. Default: ORCL Constraints: Can't be longer than 8 characters. RDS for PostgreSQL The name of the database to create when the DB instance is created. A database named postgres is always created. If this parameter is specified, an additional database with this name is created. Constraints: Must contain 1 to 63 letters, numbers, or underscores. Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9). Can't be a word reserved by the specified database engine. RDS for SQL Server Not applicable. Must be null.
      description: The meaning of this parameter differs according to the database engine you use. Amazon Aurora MySQL The name of the database to create when the primary DB instance of the Aurora MySQL DB cluster is created. If this parameter isn't specified for an Aurora MySQL DB cluster, no database is created in the DB cluster. Constraints: Must contain 1 to 64 alphanumeric characters. Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9). Can't be a word reserved by the database engine. Amazon Aurora PostgreSQL The name of the database to create when the primary DB instance of the Aurora PostgreSQL DB cluster is created. A database named postgres is always created. If this parameter is specified, an additional database with this name is created. Constraints: It must contain 1 to 63 alphanumeric characters. Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0 to 9). Can't be a word reserved by the database engine. Amazon RDS Custom for Oracle The Oracle System ID (SID) of the created RDS Custom DB instance. If you don't specify a value, the default value is ORCL for non-CDBs and RDSCDB for CDBs. Default: ORCL Constraints: Must contain 1 to 8 alphanumeric characters. Must contain a letter. Can't be a word reserved by the database engine. Amazon RDS Custom for SQL Server Not applicable. Must be null. RDS for Db2 The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance. In some cases, we recommend that you don't add a database name. For more information, see Additional considerations in the Amazon RDS User Guide. Constraints: Must contain 1 to 64 letters or numbers. Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9). Can't be a word reserved by the specified database engine. RDS for MariaDB The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance. Constraints: Must contain 1 to 64 letters or numbers. Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9). Can't be a word reserved by the specified database engine. RDS for MySQL The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance. Constraints: Must contain 1 to 64 letters or numbers. Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9). Can't be a word reserved by the specified database engine. RDS for Oracle The Oracle System ID (SID) of the created DB instance. If you don't specify a value, the default value is ORCL. You can't specify the string null, or any other reserved word, for DBName. Default: ORCL Constraints: Can't be longer than 8 characters. RDS for PostgreSQL The name of the database to create when the DB instance is created. A database named postgres is always created. If this parameter is specified, an additional database with this name is created. Constraints: Must contain 1 to 63 letters, numbers, or underscores. Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9). Can't be a word reserved by the specified database engine. RDS for SQL Server Not applicable. Must be null.
    - name: AllocatedStorage
      value: {{ AllocatedStorage }}
      description: The amount of storage in gibibytes (GiB) to allocate for the DB instance. This setting doesn't apply to Amazon Aurora DB instances. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume. Amazon RDS Custom Constraints to the amount of storage for each storage type are the following: General Purpose (SSD) storage (gp2, gp3): Must be an integer from 40 to 65536 for RDS Custom for Oracle, 16384 for RDS Custom for SQL Server. Provisioned IOPS storage (io1, io2): Must be an integer from 40 to 65536 for RDS Custom for Oracle, 16384 for RDS Custom for SQL Server. RDS for Db2 Constraints to the amount of storage for each storage type are the following: General Purpose (SSD) storage (gp3): Must be an integer from 20 to 65536. Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536. RDS for MariaDB Constraints to the amount of storage for each storage type are the following: General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536. Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536. Magnetic storage (standard): Must be an integer from 5 to 3072. RDS for MySQL Constraints to the amount of storage for each storage type are the following: General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536. Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536. Magnetic storage (standard): Must be an integer from 5 to 3072. RDS for Oracle Constraints to the amount of storage for each storage type are the following: General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536. Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536. Magnetic storage (standard): Must be an integer from 10 to 3072. RDS for PostgreSQL Constraints to the amount of storage for each storage type are the following: General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536. Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536. Magnetic storage (standard): Must be an integer from 5 to 3072. RDS for SQL Server Constraints to the amount of storage for each storage type are the following: General Purpose (SSD) storage (gp2, gp3): Enterprise and Standard editions: Must be an integer from 20 to 16384. Web and Express editions: Must be an integer from 20 to 16384. Provisioned IOPS storage (io1, io2): Enterprise and Standard editions: Must be an integer from 100 to 16384. Web and Express editions: Must be an integer from 100 to 16384. Magnetic storage (standard): Enterprise and Standard editions: Must be an integer from 20 to 1024. Web and Express editions: Must be an integer from 20 to 1024.
      description: The amount of storage in gibibytes (GiB) to allocate for the DB instance. This setting doesn't apply to Amazon Aurora DB instances. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume. Amazon RDS Custom Constraints to the amount of storage for each storage type are the following: General Purpose (SSD) storage (gp2, gp3): Must be an integer from 40 to 65536 for RDS Custom for Oracle, 16384 for RDS Custom for SQL Server. Provisioned IOPS storage (io1, io2): Must be an integer from 40 to 65536 for RDS Custom for Oracle, 16384 for RDS Custom for SQL Server. RDS for Db2 Constraints to the amount of storage for each storage type are the following: General Purpose (SSD) storage (gp3): Must be an integer from 20 to 65536. Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536. RDS for MariaDB Constraints to the amount of storage for each storage type are the following: General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536. Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536. Magnetic storage (standard): Must be an integer from 5 to 3072. RDS for MySQL Constraints to the amount of storage for each storage type are the following: General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536. Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536. Magnetic storage (standard): Must be an integer from 5 to 3072. RDS for Oracle Constraints to the amount of storage for each storage type are the following: General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536. Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536. Magnetic storage (standard): Must be an integer from 10 to 3072. RDS for PostgreSQL Constraints to the amount of storage for each storage type are the following: General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536. Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536. Magnetic storage (standard): Must be an integer from 5 to 3072. RDS for SQL Server Constraints to the amount of storage for each storage type are the following: General Purpose (SSD) storage (gp2, gp3): Enterprise and Standard editions: Must be an integer from 20 to 16384. Web and Express editions: Must be an integer from 20 to 16384. Provisioned IOPS storage (io1, io2): Enterprise and Standard editions: Must be an integer from 100 to 16384. Web and Express editions: Must be an integer from 100 to 16384. Magnetic storage (standard): Enterprise and Standard editions: Must be an integer from 20 to 1024. Web and Express editions: Must be an integer from 20 to 1024.
    - name: Engine
      value: "{{ Engine }}"
      description: The database engine to use for this DB instance. Not every database engine is available in every Amazon Web Services Region. Valid Values: aurora-mysql (for Aurora MySQL DB instances) aurora-postgresql (for Aurora PostgreSQL DB instances) custom-oracle-ee (for RDS Custom for Oracle DB instances) custom-oracle-ee-cdb (for RDS Custom for Oracle DB instances) custom-oracle-se2 (for RDS Custom for Oracle DB instances) custom-oracle-se2-cdb (for RDS Custom for Oracle DB instances) custom-sqlserver-ee (for RDS Custom for SQL Server DB instances) custom-sqlserver-se (for RDS Custom for SQL Server DB instances) custom-sqlserver-web (for RDS Custom for SQL Server DB instances) custom-sqlserver-dev (for RDS Custom for SQL Server DB instances) db2-ae db2-se mariadb mysql oracle-ee oracle-ee-cdb oracle-se2 oracle-se2-cdb postgres sqlserver-dev-ee sqlserver-ee sqlserver-se sqlserver-ex sqlserver-web
      description: The database engine to use for this DB instance. Not every database engine is available in every Amazon Web Services Region. Valid Values: aurora-mysql (for Aurora MySQL DB instances) aurora-postgresql (for Aurora PostgreSQL DB instances) custom-oracle-ee (for RDS Custom for Oracle DB instances) custom-oracle-ee-cdb (for RDS Custom for Oracle DB instances) custom-oracle-se2 (for RDS Custom for Oracle DB instances) custom-oracle-se2-cdb (for RDS Custom for Oracle DB instances) custom-sqlserver-ee (for RDS Custom for SQL Server DB instances) custom-sqlserver-se (for RDS Custom for SQL Server DB instances) custom-sqlserver-web (for RDS Custom for SQL Server DB instances) custom-sqlserver-dev (for RDS Custom for SQL Server DB instances) db2-ae db2-se mariadb mysql oracle-ee oracle-ee-cdb oracle-se2 oracle-se2-cdb postgres sqlserver-dev-ee sqlserver-ee sqlserver-se sqlserver-ex sqlserver-web
    - name: MasterUsername
      value: "{{ MasterUsername }}"
      description: The name for the master user. This setting doesn't apply to Amazon Aurora DB instances. The name for the master user is managed by the DB cluster. This setting is required for RDS DB instances. Constraints: Must be 1 to 16 letters, numbers, or underscores. First character must be a letter. Can't be a reserved word for the chosen database engine.
      description: The name for the master user. This setting doesn't apply to Amazon Aurora DB instances. The name for the master user is managed by the DB cluster. This setting is required for RDS DB instances. Constraints: Must be 1 to 16 letters, numbers, or underscores. First character must be a letter. Can't be a reserved word for the chosen database engine.
    - name: MasterUserPassword
      value: "{{ MasterUserPassword }}"
      description: The password for the master user. This setting doesn't apply to Amazon Aurora DB instances. The password for the master user is managed by the DB cluster. Constraints: Can't be specified if ManageMasterUserPassword is turned on. Can include any printable ASCII character except "/", """, or "@". For RDS for Oracle, can't include the "&" (ampersand) or the "'" (single quotes) character. Length Constraints: RDS for Db2 - Must contain from 8 to 255 characters. RDS for MariaDB - Must contain from 8 to 41 characters. RDS for Microsoft SQL Server - Must contain from 8 to 128 characters. RDS for MySQL - Must contain from 8 to 41 characters. RDS for Oracle - Must contain from 8 to 30 characters. RDS for PostgreSQL - Must contain from 8 to 128 characters.
      description: The password for the master user. This setting doesn't apply to Amazon Aurora DB instances. The password for the master user is managed by the DB cluster. Constraints: Can't be specified if ManageMasterUserPassword is turned on. Can include any printable ASCII character except "/", """, or "@". For RDS for Oracle, can't include the "&" (ampersand) or the "'" (single quotes) character. Length Constraints: RDS for Db2 - Must contain from 8 to 255 characters. RDS for MariaDB - Must contain from 8 to 41 characters. RDS for Microsoft SQL Server - Must contain from 8 to 128 characters. RDS for MySQL - Must contain from 8 to 41 characters. RDS for Oracle - Must contain from 8 to 30 characters. RDS for PostgreSQL - Must contain from 8 to 128 characters.
    - name: DBSecurityGroups
      value: "{{ DBSecurityGroups }}"
      description: A list of DB security groups to associate with this DB instance. This setting applies to the legacy EC2-Classic platform, which is no longer used to create new DB instances. Use the VpcSecurityGroupIds setting instead.
      description: A list of DB security groups to associate with this DB instance. This setting applies to the legacy EC2-Classic platform, which is no longer used to create new DB instances. Use the VpcSecurityGroupIds setting instead.
    - name: VpcSecurityGroupIds
      value: "{{ VpcSecurityGroupIds }}"
      description: A list of Amazon EC2 VPC security groups to associate with this DB instance. This setting doesn't apply to Amazon Aurora DB instances. The associated list of EC2 VPC security groups is managed by the DB cluster. Default: The default EC2 VPC security group for the DB subnet group's VPC.
      description: A list of Amazon EC2 VPC security groups to associate with this DB instance. This setting doesn't apply to Amazon Aurora DB instances. The associated list of EC2 VPC security groups is managed by the DB cluster. Default: The default EC2 VPC security group for the DB subnet group's VPC.
    - name: AvailabilityZone
      value: "{{ AvailabilityZone }}"
      description: The Availability Zone (AZ) where the database will be created. For information on Amazon Web Services Regions and Availability Zones, see Regions and Availability Zones. For Amazon Aurora, each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one. Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region. Constraints: The AvailabilityZone parameter can't be specified if the DB instance is a Multi-AZ deployment. The specified Availability Zone must be in the same Amazon Web Services Region as the current endpoint. Example: us-east-1d
      description: The Availability Zone (AZ) where the database will be created. For information on Amazon Web Services Regions and Availability Zones, see Regions and Availability Zones. For Amazon Aurora, each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one. Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region. Constraints: The AvailabilityZone parameter can't be specified if the DB instance is a Multi-AZ deployment. The specified Availability Zone must be in the same Amazon Web Services Region as the current endpoint. Example: us-east-1d
    - name: DBSubnetGroupName
      value: "{{ DBSubnetGroupName }}"
      description: A DB subnet group to associate with this DB instance. Constraints: Must match the name of an existing DB subnet group. Example: mydbsubnetgroup
      description: A DB subnet group to associate with this DB instance. Constraints: Must match the name of an existing DB subnet group. Example: mydbsubnetgroup
    - name: PreferredMaintenanceWindow
      value: "{{ PreferredMaintenanceWindow }}"
      description: The time range each week during which system maintenance can occur. For more information, see Amazon RDS Maintenance Window in the Amazon RDS User Guide. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. Constraints: Must be in the format ddd:hh24:mi-ddd:hh24:mi. The day values must be mon | tue | wed | thu | fri | sat | sun. Must be in Universal Coordinated Time (UTC). Must not conflict with the preferred backup window. Must be at least 30 minutes.
      description: The time range each week during which system maintenance can occur. For more information, see Amazon RDS Maintenance Window in the Amazon RDS User Guide. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. Constraints: Must be in the format ddd:hh24:mi-ddd:hh24:mi. The day values must be mon | tue | wed | thu | fri | sat | sun. Must be in Universal Coordinated Time (UTC). Must not conflict with the preferred backup window. Must be at least 30 minutes.
    - name: DBParameterGroupName
      value: "{{ DBParameterGroupName }}"
      description: The name of the DB parameter group to associate with this DB instance. If you don't specify a value, then Amazon RDS uses the default DB parameter group for the specified DB engine and version. This setting doesn't apply to RDS Custom DB instances. Constraints: Must be 1 to 255 letters, numbers, or hyphens. The first character must be a letter. Can't end with a hyphen or contain two consecutive hyphens.
      description: The name of the DB parameter group to associate with this DB instance. If you don't specify a value, then Amazon RDS uses the default DB parameter group for the specified DB engine and version. This setting doesn't apply to RDS Custom DB instances. Constraints: Must be 1 to 255 letters, numbers, or hyphens. The first character must be a letter. Can't end with a hyphen or contain two consecutive hyphens.
    - name: BackupRetentionPeriod
      value: {{ BackupRetentionPeriod }}
      description: The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups. This setting doesn't apply to Amazon Aurora DB instances. The retention period for automated backups is managed by the DB cluster. Default: 1 Constraints: Must be a value from 0 to 35. Can't be set to 0 if the DB instance is a source to read replicas. Can't be set to 0 for an RDS Custom for Oracle DB instance.
      description: The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups. This setting doesn't apply to Amazon Aurora DB instances. The retention period for automated backups is managed by the DB cluster. Default: 1 Constraints: Must be a value from 0 to 35. Can't be set to 0 if the DB instance is a source to read replicas. Can't be set to 0 for an RDS Custom for Oracle DB instance.
    - name: PreferredBackupWindow
      value: "{{ PreferredBackupWindow }}"
      description: The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. For more information, see Backup window in the Amazon RDS User Guide. This setting doesn't apply to Amazon Aurora DB instances. The daily time range for creating automated backups is managed by the DB cluster. Constraints: Must be in the format hh24:mi-hh24:mi. Must be in Universal Coordinated Time (UTC). Must not conflict with the preferred maintenance window. Must be at least 30 minutes.
      description: The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. For more information, see Backup window in the Amazon RDS User Guide. This setting doesn't apply to Amazon Aurora DB instances. The daily time range for creating automated backups is managed by the DB cluster. Constraints: Must be in the format hh24:mi-hh24:mi. Must be in Universal Coordinated Time (UTC). Must not conflict with the preferred maintenance window. Must be at least 30 minutes.
    - name: Port
      value: {{ Port }}
      description: The port number on which the database accepts connections. This setting doesn't apply to Aurora DB instances. The port number is managed by the cluster. Valid Values: 1150-65535 Default: RDS for Db2 - 50000 RDS for MariaDB - 3306 RDS for Microsoft SQL Server - 1433 RDS for MySQL - 3306 RDS for Oracle - 1521 RDS for PostgreSQL - 5432 Constraints: For RDS for Microsoft SQL Server, the value can't be 1234, 1434, 3260, 3343, 3389, 47001, or 49152-49156.
      description: The port number on which the database accepts connections. This setting doesn't apply to Aurora DB instances. The port number is managed by the cluster. Valid Values: 1150-65535 Default: RDS for Db2 - 50000 RDS for MariaDB - 3306 RDS for Microsoft SQL Server - 1433 RDS for MySQL - 3306 RDS for Oracle - 1521 RDS for PostgreSQL - 5432 Constraints: For RDS for Microsoft SQL Server, the value can't be 1234, 1434, 3260, 3343, 3389, 47001, or 49152-49156.
    - name: MultiAZ
      value: {{ MultiAZ }}
      description: Specifies whether the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment. This setting doesn't apply to Amazon Aurora because the DB instance Availability Zones (AZs) are managed by the DB cluster.
      description: Specifies whether the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment. This setting doesn't apply to Amazon Aurora because the DB instance Availability Zones (AZs) are managed by the DB cluster.
    - name: EngineVersion
      value: "{{ EngineVersion }}"
      description: The version number of the database engine to use. This setting doesn't apply to Amazon Aurora DB instances. The version number of the database engine the DB instance uses is managed by the DB cluster. For a list of valid engine versions, use the DescribeDBEngineVersions operation. The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every Amazon Web Services Region. Amazon RDS Custom for Oracle A custom engine version (CEV) that you have previously created. This setting is required for RDS Custom for Oracle. The CEV name has the following format: 19.customized_string. A valid CEV name is 19.my_cev1. For more information, see Creating an RDS Custom for Oracle DB instance in the Amazon RDS User Guide. Amazon RDS Custom for SQL Server See RDS Custom for SQL Server general requirements in the Amazon RDS User Guide. RDS for Db2 For information, see Db2 on Amazon RDS versions in the Amazon RDS User Guide. RDS for MariaDB For information, see MariaDB on Amazon RDS versions in the Amazon RDS User Guide. RDS for Microsoft SQL Server For information, see Microsoft SQL Server versions on Amazon RDS in the Amazon RDS User Guide. RDS for MySQL For information, see MySQL on Amazon RDS versions in the Amazon RDS User Guide. RDS for Oracle For information, see Oracle Database Engine release notes in the Amazon RDS User Guide. RDS for PostgreSQL For information, see Amazon RDS for PostgreSQL versions and extensions in the Amazon RDS User Guide.
      description: The version number of the database engine to use. This setting doesn't apply to Amazon Aurora DB instances. The version number of the database engine the DB instance uses is managed by the DB cluster. For a list of valid engine versions, use the DescribeDBEngineVersions operation. The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every Amazon Web Services Region. Amazon RDS Custom for Oracle A custom engine version (CEV) that you have previously created. This setting is required for RDS Custom for Oracle. The CEV name has the following format: 19.customized_string. A valid CEV name is 19.my_cev1. For more information, see Creating an RDS Custom for Oracle DB instance in the Amazon RDS User Guide. Amazon RDS Custom for SQL Server See RDS Custom for SQL Server general requirements in the Amazon RDS User Guide. RDS for Db2 For information, see Db2 on Amazon RDS versions in the Amazon RDS User Guide. RDS for MariaDB For information, see MariaDB on Amazon RDS versions in the Amazon RDS User Guide. RDS for Microsoft SQL Server For information, see Microsoft SQL Server versions on Amazon RDS in the Amazon RDS User Guide. RDS for MySQL For information, see MySQL on Amazon RDS versions in the Amazon RDS User Guide. RDS for Oracle For information, see Oracle Database Engine release notes in the Amazon RDS User Guide. RDS for PostgreSQL For information, see Amazon RDS for PostgreSQL versions and extensions in the Amazon RDS User Guide.
    - name: AutoMinorVersionUpgrade
      value: {{ AutoMinorVersionUpgrade }}
      description: Specifies whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically. If you create an RDS Custom DB instance, you must set AutoMinorVersionUpgrade to false. For more information about automatic minor version upgrades, see Automatically upgrading the minor engine version.
      description: Specifies whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically. If you create an RDS Custom DB instance, you must set AutoMinorVersionUpgrade to false. For more information about automatic minor version upgrades, see Automatically upgrading the minor engine version.
    - name: LicenseModel
      value: "{{ LicenseModel }}"
      description: The license model information for this DB instance. License models for RDS for Db2 require additional configuration. The bring your own license (BYOL) model requires a custom parameter group and an Amazon Web Services License Manager self-managed license. The Db2 license through Amazon Web Services Marketplace model requires an Amazon Web Services Marketplace subscription. For more information, see Amazon RDS for Db2 licensing options in the Amazon RDS User Guide. The default for RDS for Db2 is bring-your-own-license. This setting doesn't apply to Amazon Aurora or RDS Custom DB instances. Valid Values: RDS for Db2 - bring-your-own-license | marketplace-license RDS for MariaDB - general-public-license RDS for Microsoft SQL Server - license-included RDS for MySQL - general-public-license RDS for Oracle - bring-your-own-license | license-included RDS for PostgreSQL - postgresql-license
      description: The license model information for this DB instance. License models for RDS for Db2 require additional configuration. The bring your own license (BYOL) model requires a custom parameter group and an Amazon Web Services License Manager self-managed license. The Db2 license through Amazon Web Services Marketplace model requires an Amazon Web Services Marketplace subscription. For more information, see Amazon RDS for Db2 licensing options in the Amazon RDS User Guide. The default for RDS for Db2 is bring-your-own-license. This setting doesn't apply to Amazon Aurora or RDS Custom DB instances. Valid Values: RDS for Db2 - bring-your-own-license | marketplace-license RDS for MariaDB - general-public-license RDS for Microsoft SQL Server - license-included RDS for MySQL - general-public-license RDS for Oracle - bring-your-own-license | license-included RDS for PostgreSQL - postgresql-license
    - name: Iops
      value: {{ Iops }}
      description: The amount of Provisioned IOPS (input/output operations per second) to initially allocate for the DB instance. For information about valid IOPS values, see Amazon RDS DB instance storage in the Amazon RDS User Guide. This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster. Constraints: For RDS for Db2, MariaDB, MySQL, Oracle, and PostgreSQL - Must be a multiple between .5 and 50 of the storage amount for the DB instance. For RDS for SQL Server - Must be a multiple between 1 and 50 of the storage amount for the DB instance.
      description: The amount of Provisioned IOPS (input/output operations per second) to initially allocate for the DB instance. For information about valid IOPS values, see Amazon RDS DB instance storage in the Amazon RDS User Guide. This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster. Constraints: For RDS for Db2, MariaDB, MySQL, Oracle, and PostgreSQL - Must be a multiple between .5 and 50 of the storage amount for the DB instance. For RDS for SQL Server - Must be a multiple between 1 and 50 of the storage amount for the DB instance.
    - name: StorageThroughput
      value: {{ StorageThroughput }}
      description: The storage throughput value, in mebibyte per second (MiBps), for the DB instance. This setting applies only to the gp3 storage type. This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
      description: The storage throughput value, in mebibyte per second (MiBps), for the DB instance. This setting applies only to the gp3 storage type. This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
    - name: OptionGroupName
      value: "{{ OptionGroupName }}"
      description: The option group to associate the DB instance with. Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance after it is associated with a DB instance. This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
      description: The option group to associate the DB instance with. Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance after it is associated with a DB instance. This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
    - name: CharacterSetName
      value: "{{ CharacterSetName }}"
      description: For supported engines, the character set (CharacterSet) to associate the DB instance with. This setting doesn't apply to the following DB instances: Amazon Aurora - The character set is managed by the DB cluster. For more information, see CreateDBCluster. RDS Custom - However, if you need to change the character set, you can change it on the database itself.
      description: For supported engines, the character set (CharacterSet) to associate the DB instance with. This setting doesn't apply to the following DB instances: Amazon Aurora - The character set is managed by the DB cluster. For more information, see CreateDBCluster. RDS Custom - However, if you need to change the character set, you can change it on the database itself.
    - name: NcharCharacterSetName
      value: "{{ NcharCharacterSetName }}"
      description: The name of the NCHAR character set for the Oracle DB instance. This setting doesn't apply to RDS Custom DB instances.
      description: The name of the NCHAR character set for the Oracle DB instance. This setting doesn't apply to RDS Custom DB instances.
    - name: PubliclyAccessible
      value: {{ PubliclyAccessible }}
      description: Specifies whether the DB instance is publicly accessible. When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private cloud (VPC), its domain name system (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB instance is controlled by its security group settings. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. The default behavior when PubliclyAccessible is not specified depends on whether a DBSubnetGroup is specified. If DBSubnetGroup isn't specified, PubliclyAccessible defaults to false for Aurora instances and true for non-Aurora instances. If DBSubnetGroup is specified, PubliclyAccessible defaults to false unless the value of DBSubnetGroup is default, in which case PubliclyAccessible defaults to true. If PubliclyAccessible is true and the VPC that the DBSubnetGroup is in doesn't have an internet gateway attached to it, Amazon RDS returns an error.
      description: Specifies whether the DB instance is publicly accessible. When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private cloud (VPC), its domain name system (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB instance is controlled by its security group settings. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. The default behavior when PubliclyAccessible is not specified depends on whether a DBSubnetGroup is specified. If DBSubnetGroup isn't specified, PubliclyAccessible defaults to false for Aurora instances and true for non-Aurora instances. If DBSubnetGroup is specified, PubliclyAccessible defaults to false unless the value of DBSubnetGroup is default, in which case PubliclyAccessible defaults to true. If PubliclyAccessible is true and the VPC that the DBSubnetGroup is in doesn't have an internet gateway attached to it, Amazon RDS returns an error.
    - name: Tags
      value: "{{ Tags }}"
      description: Tags to assign to the DB instance.
      description: Tags to assign to the DB instance.
    - name: DBClusterIdentifier
      value: "{{ DBClusterIdentifier }}"
      description: The identifier of the DB cluster that this DB instance will belong to. This setting doesn't apply to RDS Custom DB instances.
      description: The identifier of the DB cluster that this DB instance will belong to. This setting doesn't apply to RDS Custom DB instances.
    - name: StorageType
      value: "{{ StorageType }}"
      description: The storage type to associate with the DB instance. If you specify io1, io2, or gp3, you must also include a value for the Iops parameter. This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster. Valid Values: gp2 | gp3 | io1 | io2 | standard Default: io1, if the Iops parameter is specified. Otherwise, gp3.
      description: The storage type to associate with the DB instance. If you specify io1, io2, or gp3, you must also include a value for the Iops parameter. This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster. Valid Values: gp2 | gp3 | io1 | io2 | standard Default: io1, if the Iops parameter is specified. Otherwise, gp3.
    - name: TdeCredentialArn
      value: "{{ TdeCredentialArn }}"
      description: The ARN from the key store with which to associate the instance for TDE encryption. This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
      description: The ARN from the key store with which to associate the instance for TDE encryption. This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
    - name: TdeCredentialPassword
      value: "{{ TdeCredentialPassword }}"
      description: The password for the given ARN from the key store in order to access the device. This setting doesn't apply to RDS Custom DB instances.
      description: The password for the given ARN from the key store in order to access the device. This setting doesn't apply to RDS Custom DB instances.
    - name: StorageEncrypted
      value: {{ StorageEncrypted }}
      description: Specifes whether the DB instance is encrypted. By default, it isn't encrypted. For RDS Custom DB instances, either enable this setting or leave it unset. Otherwise, Amazon RDS reports an error. This setting doesn't apply to Amazon Aurora DB instances. The encryption for DB instances is managed by the DB cluster.
      description: Specifes whether the DB instance is encrypted. By default, it isn't encrypted. For RDS Custom DB instances, either enable this setting or leave it unset. Otherwise, Amazon RDS reports an error. This setting doesn't apply to Amazon Aurora DB instances. The encryption for DB instances is managed by the DB cluster.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: The Amazon Web Services KMS key identifier for an encrypted DB instance. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. This setting doesn't apply to Amazon Aurora DB instances. The Amazon Web Services KMS key identifier is managed by the DB cluster. For more information, see CreateDBCluster. If StorageEncrypted is enabled, and you do not specify a value for the KmsKeyId parameter, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. For Amazon RDS Custom, a KMS key is required for DB instances. For most RDS engines, if you leave this parameter empty while enabling StorageEncrypted, the engine uses the default KMS key. However, RDS Custom doesn't use the default key when this parameter is empty. You must explicitly specify a key.
      description: The Amazon Web Services KMS key identifier for an encrypted DB instance. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. This setting doesn't apply to Amazon Aurora DB instances. The Amazon Web Services KMS key identifier is managed by the DB cluster. For more information, see CreateDBCluster. If StorageEncrypted is enabled, and you do not specify a value for the KmsKeyId parameter, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. For Amazon RDS Custom, a KMS key is required for DB instances. For most RDS engines, if you leave this parameter empty while enabling StorageEncrypted, the engine uses the default KMS key. However, RDS Custom doesn't use the default key when this parameter is empty. You must explicitly specify a key.
    - name: Domain
      value: "{{ Domain }}"
      description: The Active Directory directory ID to create the DB instance in. Currently, you can create only Db2, MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain. For more information, see Kerberos Authentication in the Amazon RDS User Guide. This setting doesn't apply to the following DB instances: Amazon Aurora (The domain is managed by the DB cluster.) RDS Custom
      description: The Active Directory directory ID to create the DB instance in. Currently, you can create only Db2, MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain. For more information, see Kerberos Authentication in the Amazon RDS User Guide. This setting doesn't apply to the following DB instances: Amazon Aurora (The domain is managed by the DB cluster.) RDS Custom
    - name: DomainFqdn
      value: "{{ DomainFqdn }}"
      description: The fully qualified domain name (FQDN) of an Active Directory domain. Constraints: Can't be longer than 64 characters. Example: mymanagedADtest.mymanagedAD.mydomain
      description: The fully qualified domain name (FQDN) of an Active Directory domain. Constraints: Can't be longer than 64 characters. Example: mymanagedADtest.mymanagedAD.mydomain
    - name: DomainOu
      value: "{{ DomainOu }}"
      description: The Active Directory organizational unit for your DB instance to join. Constraints: Must be in the distinguished name format. Can't be longer than 64 characters. Example: OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain
      description: The Active Directory organizational unit for your DB instance to join. Constraints: Must be in the distinguished name format. Can't be longer than 64 characters. Example: OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain
    - name: DomainAuthSecretArn
      value: "{{ DomainAuthSecretArn }}"
      description: The ARN for the Secrets Manager secret with the credentials for the user joining the domain. Example: arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456
      description: The ARN for the Secrets Manager secret with the credentials for the user joining the domain. Example: arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456
    - name: DomainDnsIps
      value: "{{ DomainDnsIps }}"
      description: The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers. Constraints: Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list. Example: 123.124.125.126,234.235.236.237
      description: The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers. Constraints: Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list. Example: 123.124.125.126,234.235.236.237
    - name: CopyTagsToSnapshot
      value: {{ CopyTagsToSnapshot }}
      description: Specifies whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied. This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.
      description: Specifies whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied. This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.
    - name: MonitoringInterval
      value: {{ MonitoringInterval }}
      description: The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collection of Enhanced Monitoring metrics, specify 0. If MonitoringRoleArn is specified, then you must set MonitoringInterval to a value other than 0. This setting doesn't apply to RDS Custom DB instances. Valid Values: 0 | 1 | 5 | 10 | 15 | 30 | 60 Default: 0
      description: The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collection of Enhanced Monitoring metrics, specify 0. If MonitoringRoleArn is specified, then you must set MonitoringInterval to a value other than 0. This setting doesn't apply to RDS Custom DB instances. Valid Values: 0 | 1 | 5 | 10 | 15 | 30 | 60 Default: 0
    - name: MonitoringRoleArn
      value: "{{ MonitoringRoleArn }}"
      description: The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. For information on creating a monitoring role, see Setting Up and Enabling Enhanced Monitoring in the Amazon RDS User Guide. If MonitoringInterval is set to a value other than 0, then you must supply a MonitoringRoleArn value. This setting doesn't apply to RDS Custom DB instances.
      description: The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. For information on creating a monitoring role, see Setting Up and Enabling Enhanced Monitoring in the Amazon RDS User Guide. If MonitoringInterval is set to a value other than 0, then you must supply a MonitoringRoleArn value. This setting doesn't apply to RDS Custom DB instances.
    - name: DomainIAMRoleName
      value: "{{ DomainIAMRoleName }}"
      description: The name of the IAM role to use when making API calls to the Directory Service. This setting doesn't apply to the following DB instances: Amazon Aurora (The domain is managed by the DB cluster.) RDS Custom
      description: The name of the IAM role to use when making API calls to the Directory Service. This setting doesn't apply to the following DB instances: Amazon Aurora (The domain is managed by the DB cluster.) RDS Custom
    - name: PromotionTier
      value: {{ PromotionTier }}
      description: The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see Fault Tolerance for an Aurora DB Cluster in the Amazon Aurora User Guide. This setting doesn't apply to RDS Custom DB instances. Default: 1 Valid Values: 0 - 15
      description: The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see Fault Tolerance for an Aurora DB Cluster in the Amazon Aurora User Guide. This setting doesn't apply to RDS Custom DB instances. Default: 1 Valid Values: 0 - 15
    - name: Timezone
      value: "{{ Timezone }}"
      description: The time zone of the DB instance. The time zone parameter is currently supported only by RDS for Db2 and RDS for SQL Server.
      description: The time zone of the DB instance. The time zone parameter is currently supported only by RDS for Db2 and RDS for SQL Server.
    - name: EnableIAMDatabaseAuthentication
      value: {{ EnableIAMDatabaseAuthentication }}
      description: Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide. This setting doesn't apply to the following DB instances: Amazon Aurora (Mapping Amazon Web Services IAM accounts to database accounts is managed by the DB cluster.) RDS Custom
      description: Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide. This setting doesn't apply to the following DB instances: Amazon Aurora (Mapping Amazon Web Services IAM accounts to database accounts is managed by the DB cluster.) RDS Custom
    - name: DatabaseInsightsMode
      value: "{{ DatabaseInsightsMode }}"
      description: The mode of Database Insights to enable for the DB instance. Aurora DB instances inherit this value from the DB cluster, so you can't change this value.
      description: The mode of Database Insights to enable for the DB instance. Aurora DB instances inherit this value from the DB cluster, so you can't change this value.
    - name: EnablePerformanceInsights
      value: {{ EnablePerformanceInsights }}
      description: Specifies whether to enable Performance Insights for the DB instance. For more information, see Using Amazon Performance Insights in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom DB instances.
      description: Specifies whether to enable Performance Insights for the DB instance. For more information, see Using Amazon Performance Insights in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom DB instances.
    - name: PerformanceInsightsKMSKeyId
      value: "{{ PerformanceInsightsKMSKeyId }}"
      description: The Amazon Web Services KMS key identifier for encryption of Performance Insights data. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you don't specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. This setting doesn't apply to RDS Custom DB instances.
      description: The Amazon Web Services KMS key identifier for encryption of Performance Insights data. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you don't specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. This setting doesn't apply to RDS Custom DB instances.
    - name: PerformanceInsightsRetentionPeriod
      value: {{ PerformanceInsightsRetentionPeriod }}
      description: The number of days to retain Performance Insights data. This setting doesn't apply to RDS Custom DB instances. Valid Values: 7 month * 31, where month is a number of months from 1-23. Examples: 93 (3 months * 31), 341 (11 months * 31), 589 (19 months * 31) 731 Default: 7 days If you specify a retention period that isn't valid, such as 94, Amazon RDS returns an error.
      description: The number of days to retain Performance Insights data. This setting doesn't apply to RDS Custom DB instances. Valid Values: 7 month * 31, where month is a number of months from 1-23. Examples: 93 (3 months * 31), 341 (11 months * 31), 589 (19 months * 31) 731 Default: 7 days If you specify a retention period that isn't valid, such as 94, Amazon RDS returns an error.
    - name: EnableCloudwatchLogsExports
      value: "{{ EnableCloudwatchLogsExports }}"
      description: The list of log types to enable for exporting to CloudWatch Logs. For more information, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon RDS User Guide. This setting doesn't apply to the following DB instances: Amazon Aurora (CloudWatch Logs exports are managed by the DB cluster.) RDS Custom The following values are valid for each DB engine: RDS for Db2 - diag.log | notify.log | iam-db-auth-error RDS for MariaDB - audit | error | general | slowquery | iam-db-auth-error RDS for Microsoft SQL Server - agent | error RDS for MySQL - audit | error | general | slowquery | iam-db-auth-error RDS for Oracle - alert | audit | listener | trace | oemagent RDS for PostgreSQL - postgresql | upgrade | iam-db-auth-error
      description: The list of log types to enable for exporting to CloudWatch Logs. For more information, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon RDS User Guide. This setting doesn't apply to the following DB instances: Amazon Aurora (CloudWatch Logs exports are managed by the DB cluster.) RDS Custom The following values are valid for each DB engine: RDS for Db2 - diag.log | notify.log | iam-db-auth-error RDS for MariaDB - audit | error | general | slowquery | iam-db-auth-error RDS for Microsoft SQL Server - agent | error RDS for MySQL - audit | error | general | slowquery | iam-db-auth-error RDS for Oracle - alert | audit | listener | trace | oemagent RDS for PostgreSQL - postgresql | upgrade | iam-db-auth-error
    - name: ProcessorFeatures
      value: "{{ ProcessorFeatures }}"
      description: The number of CPU cores and the number of threads per core for the DB instance class of the DB instance. This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
      description: The number of CPU cores and the number of threads per core for the DB instance class of the DB instance. This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
    - name: DeletionProtection
      value: {{ DeletionProtection }}
      description: Specifies whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see Deleting a DB Instance. This setting doesn't apply to Amazon Aurora DB instances. You can enable or disable deletion protection for the DB cluster. For more information, see CreateDBCluster. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.
      description: Specifies whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see Deleting a DB Instance. This setting doesn't apply to Amazon Aurora DB instances. You can enable or disable deletion protection for the DB cluster. For more information, see CreateDBCluster. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.
    - name: MaxAllocatedStorage
      value: {{ MaxAllocatedStorage }}
      description: The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance. For more information about this setting, including limitations that apply to it, see Managing capacity automatically with Amazon RDS storage autoscaling in the Amazon RDS User Guide. This setting doesn't apply to the following DB instances: Amazon Aurora (Storage is managed by the DB cluster.) RDS Custom
      description: The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance. For more information about this setting, including limitations that apply to it, see Managing capacity automatically with Amazon RDS storage autoscaling in the Amazon RDS User Guide. This setting doesn't apply to the following DB instances: Amazon Aurora (Storage is managed by the DB cluster.) RDS Custom
    - name: EnableCustomerOwnedIp
      value: {{ EnableCustomerOwnedIp }}
      description: Specifies whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. For more information about RDS on Outposts, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the Amazon Web Services Outposts User Guide.
      description: Specifies whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. For more information about RDS on Outposts, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the Amazon Web Services Outposts User Guide.
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: The network type of the DB instance. The network type is determined by the DBSubnetGroup specified for the DB instance. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see Working with a DB instance in a VPC in the Amazon RDS User Guide. Valid Values: IPV4 | DUAL
      description: The network type of the DB instance. The network type is determined by the DBSubnetGroup specified for the DB instance. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see Working with a DB instance in a VPC in the Amazon RDS User Guide. Valid Values: IPV4 | DUAL
    - name: BackupTarget
      value: "{{ BackupTarget }}"
      description: The location for storing automated backups and manual snapshots. Valid Values: local (Dedicated Local Zone) outposts (Amazon Web Services Outposts) region (Amazon Web Services Region) Default: region For more information, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide.
      description: The location for storing automated backups and manual snapshots. Valid Values: local (Dedicated Local Zone) outposts (Amazon Web Services Outposts) region (Amazon Web Services Region) Default: region For more information, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide.
    - name: CustomIamInstanceProfile
      value: "{{ CustomIamInstanceProfile }}"
      description: The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. This setting is required for RDS Custom. Constraints: The profile must exist in your account. The profile must have an IAM role that Amazon EC2 has permissions to assume. The instance profile name and the associated IAM role name must start with the prefix AWSRDSCustom. For the list of permissions required for the IAM role, see Configure IAM and your VPC in the Amazon RDS User Guide.
      description: The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. This setting is required for RDS Custom. Constraints: The profile must exist in your account. The profile must have an IAM role that Amazon EC2 has permissions to assume. The instance profile name and the associated IAM role name must start with the prefix AWSRDSCustom. For the list of permissions required for the IAM role, see Configure IAM and your VPC in the Amazon RDS User Guide.
    - name: DBSystemId
      value: "{{ DBSystemId }}"
      description: The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files. In this context, the term "Oracle database instance" refers exclusively to the system global area (SGA) and Oracle background processes. If you don't specify a SID, the value defaults to RDSCDB. The Oracle SID is also the name of your CDB.
      description: The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files. In this context, the term "Oracle database instance" refers exclusively to the system global area (SGA) and Oracle background processes. If you don't specify a SID, the value defaults to RDSCDB. The Oracle SID is also the name of your CDB.
    - name: CACertificateIdentifier
      value: "{{ CACertificateIdentifier }}"
      description: The CA certificate identifier to use for the DB instance's server certificate. This setting doesn't apply to RDS Custom DB instances. For more information, see Using SSL/TLS to encrypt a connection to a DB instance in the Amazon RDS User Guide and Using SSL/TLS to encrypt a connection to a DB cluster in the Amazon Aurora User Guide.
      description: The CA certificate identifier to use for the DB instance's server certificate. This setting doesn't apply to RDS Custom DB instances. For more information, see Using SSL/TLS to encrypt a connection to a DB instance in the Amazon RDS User Guide and Using SSL/TLS to encrypt a connection to a DB cluster in the Amazon Aurora User Guide.
    - name: ManageMasterUserPassword
      value: {{ ManageMasterUserPassword }}
      description: Specifies whether to manage the master user password with Amazon Web Services Secrets Manager. For more information, see Password management with Amazon Web Services Secrets Manager in the Amazon RDS User Guide. Constraints: Can't manage the master user password with Amazon Web Services Secrets Manager if MasterUserPassword is specified.
      description: Specifies whether to manage the master user password with Amazon Web Services Secrets Manager. For more information, see Password management with Amazon Web Services Secrets Manager in the Amazon RDS User Guide. Constraints: Can't manage the master user password with Amazon Web Services Secrets Manager if MasterUserPassword is specified.
    - name: MasterUserSecretKmsKeyId
      value: "{{ MasterUserSecretKmsKeyId }}"
      description: The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager. This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB instance. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If you don't specify MasterUserSecretKmsKeyId, then the aws/secretsmanager KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the aws/secretsmanager KMS key to encrypt the secret, and you must use a customer managed KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
      description: The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager. This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB instance. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If you don't specify MasterUserSecretKmsKeyId, then the aws/secretsmanager KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the aws/secretsmanager KMS key to encrypt the secret, and you must use a customer managed KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
    - name: MultiTenant
      value: {{ MultiTenant }}
      description: Specifies whether to use the multi-tenant configuration or the single-tenant configuration (default). This parameter only applies to RDS for Oracle container database (CDB) engines. Note the following restrictions: The DB engine that you specify in the request must support the multi-tenant configuration. If you attempt to enable the multi-tenant configuration on a DB engine that doesn't support it, the request fails. If you specify the multi-tenant configuration when you create your DB instance, you can't later modify this DB instance to use the single-tenant configuration.
      description: Specifies whether to use the multi-tenant configuration or the single-tenant configuration (default). This parameter only applies to RDS for Oracle container database (CDB) engines. Note the following restrictions: The DB engine that you specify in the request must support the multi-tenant configuration. If you attempt to enable the multi-tenant configuration on a DB engine that doesn't support it, the request fails. If you specify the multi-tenant configuration when you create your DB instance, you can't later modify this DB instance to use the single-tenant configuration.
    - name: DedicatedLogVolume
      value: {{ DedicatedLogVolume }}
      description: Indicates whether the DB instance has a dedicated log volume (DLV) enabled.
      description: Indicates whether the DB instance has a dedicated log volume (DLV) enabled.
    - name: EngineLifecycleSupport
      value: "{{ EngineLifecycleSupport }}"
      description: The life cycle type for this DB instance. By default, this value is set to open-source-rds-extended-support, which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to open-source-rds-extended-support-disabled. In this case, creating the DB instance will fail if the DB major version is past its end of standard support date. This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the life cycle type is managed by the DB cluster. You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see Amazon RDS Extended Support with Amazon RDS in the Amazon RDS User Guide. Valid Values: open-source-rds-extended-support | open-source-rds-extended-support-disabled Default: open-source-rds-extended-support
      description: The life cycle type for this DB instance. By default, this value is set to open-source-rds-extended-support, which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to open-source-rds-extended-support-disabled. In this case, creating the DB instance will fail if the DB major version is past its end of standard support date. This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the life cycle type is managed by the DB cluster. You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see Amazon RDS Extended Support with Amazon RDS in the Amazon RDS User Guide. Valid Values: open-source-rds-extended-support | open-source-rds-extended-support-disabled Default: open-source-rds-extended-support
    - name: AdditionalStorageVolumes
      value: "{{ AdditionalStorageVolumes }}"
      description: A list of additional storage volumes to create for the DB instance. You can create up to three additional storage volumes using the names rdsdbdata2, rdsdbdata3, and rdsdbdata4. Additional storage volumes are supported for RDS for Oracle and RDS for SQL Server DB instances only.
      description: A list of additional storage volumes to create for the DB instance. You can create up to three additional storage volumes using the names rdsdbdata2, rdsdbdata3, and rdsdbdata4. Additional storage volumes are supported for RDS for Oracle and RDS for SQL Server DB instances only.
    - name: TagSpecifications
      value: "{{ TagSpecifications }}"
      description: Tags to assign to resources associated with the DB instance. Valid Values: auto-backup - The DB instance's automated backup.
      description: Tags to assign to resources associated with the DB instance. Valid Values: auto-backup - The DB instance's automated backup.
    - name: MasterUserAuthenticationType
      value: "{{ MasterUserAuthenticationType }}"
      description: Specifies the authentication type for the master user. With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB instance. You can specify one of the following values: password - Use standard database authentication with a password. iam-db-auth - Use IAM database authentication for the master user. This option is only valid for RDS for PostgreSQL and Aurora PostgreSQL engines.
      description: Specifies the authentication type for the master user. With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB instance. You can specify one of the following values: password - Use standard database authentication with a password. iam-db-auth - Use IAM database authentication for the master user. This option is only valid for RDS for PostgreSQL and Aurora PostgreSQL engines.
    - name: SourceDBInstanceIdentifier
      value: "{{ SourceDBInstanceIdentifier }}"
      description: The identifier of the DB instance that will act as the source for the read replica. Each DB instance can have up to 15 read replicas, except for the following engines: Db2 - Can have up to three replicas. Oracle - Can have up to five read replicas. SQL Server - Can have up to five read replicas. Constraints: Must be the identifier of an existing Db2, MariaDB, MySQL, Oracle, PostgreSQL, or SQL Server DB instance. Can't be specified if the SourceDBClusterIdentifier parameter is also specified. For the limitations of Oracle read replicas, see Version and licensing considerations for RDS for Oracle replicas in the Amazon RDS User Guide. For the limitations of SQL Server read replicas, see Read replica limitations with SQL Server in the Amazon RDS User Guide. The specified DB instance must have automatic backups enabled, that is, its backup retention period must be greater than 0. If the source DB instance is in the same Amazon Web Services Region as the read replica, specify a valid DB instance identifier. If the source DB instance is in a different Amazon Web Services Region from the read replica, specify a valid DB instance ARN. For more information, see Constructing an ARN for Amazon RDS in the Amazon RDS User Guide. This doesn't apply to SQL Server or RDS Custom, which don't support cross-Region replicas.
      description: The identifier of the DB instance that will act as the source for the read replica. Each DB instance can have up to 15 read replicas, except for the following engines: Db2 - Can have up to three replicas. Oracle - Can have up to five read replicas. SQL Server - Can have up to five read replicas. Constraints: Must be the identifier of an existing Db2, MariaDB, MySQL, Oracle, PostgreSQL, or SQL Server DB instance. Can't be specified if the SourceDBClusterIdentifier parameter is also specified. For the limitations of Oracle read replicas, see Version and licensing considerations for RDS for Oracle replicas in the Amazon RDS User Guide. For the limitations of SQL Server read replicas, see Read replica limitations with SQL Server in the Amazon RDS User Guide. The specified DB instance must have automatic backups enabled, that is, its backup retention period must be greater than 0. If the source DB instance is in the same Amazon Web Services Region as the read replica, specify a valid DB instance identifier. If the source DB instance is in a different Amazon Web Services Region from the read replica, specify a valid DB instance ARN. For more information, see Constructing an ARN for Amazon RDS in the Amazon RDS User Guide. This doesn't apply to SQL Server or RDS Custom, which don't support cross-Region replicas.
    - name: PreSignedUrl
      value: "{{ PreSignedUrl }}"
      description: When you are creating a read replica from one Amazon Web Services GovCloud (US) Region to another or from one China Amazon Web Services Region to another, the URL that contains a Signature Version 4 signed request for the CreateDBInstanceReadReplica API operation in the source Amazon Web Services Region that contains the source DB instance. This setting applies only to Amazon Web Services GovCloud (US) Regions and China Amazon Web Services Regions. It's ignored in other Amazon Web Services Regions. This setting applies only when replicating from a source DB instance. Source DB clusters aren't supported in Amazon Web Services GovCloud (US) Regions and China Amazon Web Services Regions. You must specify this parameter when you create an encrypted read replica from another Amazon Web Services Region by using the Amazon RDS API. Don't specify PreSignedUrl when you are creating an encrypted read replica in the same Amazon Web Services Region. The presigned URL must be a valid request for the CreateDBInstanceReadReplica API operation that can run in the source Amazon Web Services Region that contains the encrypted source DB instance. The presigned URL request must contain the following parameter values: DestinationRegion - The Amazon Web Services Region that the encrypted read replica is created in. This Amazon Web Services Region is the same one where the CreateDBInstanceReadReplica operation is called that contains this presigned URL. For example, if you create an encrypted DB instance in the us-west-1 Amazon Web Services Region, from a source DB instance in the us-east-2 Amazon Web Services Region, then you call the CreateDBInstanceReadReplica operation in the us-east-1 Amazon Web Services Region and provide a presigned URL that contains a call to the CreateDBInstanceReadReplica operation in the us-west-2 Amazon Web Services Region. For this example, the DestinationRegion in the presigned URL must be set to the us-east-1 Amazon Web Services Region. KmsKeyId - The KMS key identifier for the key to use to encrypt the read replica in the destination Amazon Web Services Region. This is the same identifier for both the CreateDBInstanceReadReplica operation that is called in the destination Amazon Web Services Region, and the operation contained in the presigned URL. SourceDBInstanceIdentifier - The DB instance identifier for the encrypted DB instance to be replicated. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are creating an encrypted read replica from a DB instance in the us-west-2 Amazon Web Services Region, then your SourceDBInstanceIdentifier looks like the following example: arn:aws:rds:us-west-2:123456789012:instance:mysql-instance1-20161115. To learn how to generate a Signature Version 4 signed request, see Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4) and Signature Version 4 Signing Process. If you are using an Amazon Web Services SDK tool or the CLI, you can specify SourceRegion (or --source-region for the CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region. This setting doesn't apply to RDS Custom DB instances.
      description: When you are creating a read replica from one Amazon Web Services GovCloud (US) Region to another or from one China Amazon Web Services Region to another, the URL that contains a Signature Version 4 signed request for the CreateDBInstanceReadReplica API operation in the source Amazon Web Services Region that contains the source DB instance. This setting applies only to Amazon Web Services GovCloud (US) Regions and China Amazon Web Services Regions. It's ignored in other Amazon Web Services Regions. This setting applies only when replicating from a source DB instance. Source DB clusters aren't supported in Amazon Web Services GovCloud (US) Regions and China Amazon Web Services Regions. You must specify this parameter when you create an encrypted read replica from another Amazon Web Services Region by using the Amazon RDS API. Don't specify PreSignedUrl when you are creating an encrypted read replica in the same Amazon Web Services Region. The presigned URL must be a valid request for the CreateDBInstanceReadReplica API operation that can run in the source Amazon Web Services Region that contains the encrypted source DB instance. The presigned URL request must contain the following parameter values: DestinationRegion - The Amazon Web Services Region that the encrypted read replica is created in. This Amazon Web Services Region is the same one where the CreateDBInstanceReadReplica operation is called that contains this presigned URL. For example, if you create an encrypted DB instance in the us-west-1 Amazon Web Services Region, from a source DB instance in the us-east-2 Amazon Web Services Region, then you call the CreateDBInstanceReadReplica operation in the us-east-1 Amazon Web Services Region and provide a presigned URL that contains a call to the CreateDBInstanceReadReplica operation in the us-west-2 Amazon Web Services Region. For this example, the DestinationRegion in the presigned URL must be set to the us-east-1 Amazon Web Services Region. KmsKeyId - The KMS key identifier for the key to use to encrypt the read replica in the destination Amazon Web Services Region. This is the same identifier for both the CreateDBInstanceReadReplica operation that is called in the destination Amazon Web Services Region, and the operation contained in the presigned URL. SourceDBInstanceIdentifier - The DB instance identifier for the encrypted DB instance to be replicated. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are creating an encrypted read replica from a DB instance in the us-west-2 Amazon Web Services Region, then your SourceDBInstanceIdentifier looks like the following example: arn:aws:rds:us-west-2:123456789012:instance:mysql-instance1-20161115. To learn how to generate a Signature Version 4 signed request, see Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4) and Signature Version 4 Signing Process. If you are using an Amazon Web Services SDK tool or the CLI, you can specify SourceRegion (or --source-region for the CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region. This setting doesn't apply to RDS Custom DB instances.
    - name: UseDefaultProcessorFeatures
      value: {{ UseDefaultProcessorFeatures }}
      description: Specifies whether the DB instance class of the DB instance uses its default processor features. This setting doesn't apply to RDS Custom DB instances.
      description: Specifies whether the DB instance class of the DB instance uses its default processor features. This setting doesn't apply to RDS Custom DB instances.
    - name: ReplicaMode
      value: "{{ ReplicaMode }}"
      description: The open mode of the replica database. This parameter is only supported for Db2 DB instances and Oracle DB instances. Db2 Standby DB replicas are included in Db2 Advanced Edition (AE) and Db2 Standard Edition (SE). The main use case for standby replicas is cross-Region disaster recovery. Because it doesn't accept user connections, a standby replica can't serve a read-only workload. You can create a combination of standby and read-only DB replicas for the same primary DB instance. For more information, see Working with replicas for Amazon RDS for Db2 in the Amazon RDS User Guide. To create standby DB replicas for RDS for Db2, set this parameter to mounted. Oracle Mounted DB replicas are included in Oracle Database Enterprise Edition. The main use case for mounted replicas is cross-Region disaster recovery. The primary database doesn't use Active Data Guard to transmit information to the mounted replica. Because it doesn't accept user connections, a mounted replica can't serve a read-only workload. You can create a combination of mounted and read-only DB replicas for the same primary DB instance. For more information, see Working with read replicas for Amazon RDS for Oracle in the Amazon RDS User Guide. For RDS Custom, you must specify this parameter and set it to mounted. The value won't be set by default. After replica creation, you can manage the open mode manually.
      description: The open mode of the replica database. This parameter is only supported for Db2 DB instances and Oracle DB instances. Db2 Standby DB replicas are included in Db2 Advanced Edition (AE) and Db2 Standard Edition (SE). The main use case for standby replicas is cross-Region disaster recovery. Because it doesn't accept user connections, a standby replica can't serve a read-only workload. You can create a combination of standby and read-only DB replicas for the same primary DB instance. For more information, see Working with replicas for Amazon RDS for Db2 in the Amazon RDS User Guide. To create standby DB replicas for RDS for Db2, set this parameter to mounted. Oracle Mounted DB replicas are included in Oracle Database Enterprise Edition. The main use case for mounted replicas is cross-Region disaster recovery. The primary database doesn't use Active Data Guard to transmit information to the mounted replica. Because it doesn't accept user connections, a mounted replica can't serve a read-only workload. You can create a combination of mounted and read-only DB replicas for the same primary DB instance. For more information, see Working with read replicas for Amazon RDS for Oracle in the Amazon RDS User Guide. For RDS Custom, you must specify this parameter and set it to mounted. The value won't be set by default. After replica creation, you can manage the open mode manually.
    - name: SourceDBClusterIdentifier
      value: "{{ SourceDBClusterIdentifier }}"
      description: The identifier of the Multi-AZ DB cluster that will act as the source for the read replica. Each DB cluster can have up to 15 read replicas. Constraints: Must be the identifier of an existing Multi-AZ DB cluster. Can't be specified if the SourceDBInstanceIdentifier parameter is also specified. The specified DB cluster must have automatic backups enabled, that is, its backup retention period must be greater than 0. The source DB cluster must be in the same Amazon Web Services Region as the read replica. Cross-Region replication isn't supported.
      description: The identifier of the Multi-AZ DB cluster that will act as the source for the read replica. Each DB cluster can have up to 15 read replicas. Constraints: Must be the identifier of an existing Multi-AZ DB cluster. Can't be specified if the SourceDBInstanceIdentifier parameter is also specified. The specified DB cluster must have automatic backups enabled, that is, its backup retention period must be greater than 0. The source DB cluster must be in the same Amazon Web Services Region as the read replica. Cross-Region replication isn't supported.
    - name: UpgradeStorageConfig
      value: {{ UpgradeStorageConfig }}
      description: Whether to upgrade the storage file system configuration on the read replica. This option migrates the read replica from the old storage file system layout to the preferred layout.
      description: Whether to upgrade the storage file system configuration on the read replica. This option migrates the read replica from the old storage file system layout to the preferred layout.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_role_to_db_instance"
    values={[
        { label: 'add_role_to_db_instance', value: 'add_role_to_db_instance' },
        { label: 'modify_db_instance', value: 'modify_db_instance' }
    ]}
>
<TabItem value="add_role_to_db_instance">

Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance. To add a role to a DB instance, the status of the DB instance must be available. This command doesn't apply to RDS Custom.

```sql
UPDATE aws.rds.db_instances
SET 
-- No updatable properties
WHERE 
DBInstanceIdentifier = '{{ DBInstanceIdentifier }}' --required
AND RoleArn = '{{ RoleArn }}' --required
AND FeatureName = '{{ FeatureName }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="modify_db_instance">

Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call DescribeValidDBInstanceModifications before you call ModifyDBInstance.

```sql
UPDATE aws.rds.db_instances
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
AND StorageThroughput = '{{ StorageThroughput}}'
AND OptionGroupName = '{{ OptionGroupName}}'
AND NewDBInstanceIdentifier = '{{ NewDBInstanceIdentifier}}'
AND StorageType = '{{ StorageType}}'
AND TdeCredentialArn = '{{ TdeCredentialArn}}'
AND TdeCredentialPassword = '{{ TdeCredentialPassword}}'
AND CACertificateIdentifier = '{{ CACertificateIdentifier}}'
AND Domain = '{{ Domain}}'
AND DomainFqdn = '{{ DomainFqdn}}'
AND DomainOu = '{{ DomainOu}}'
AND DomainAuthSecretArn = '{{ DomainAuthSecretArn}}'
AND DomainDnsIps = '{{ DomainDnsIps}}'
AND DisableDomain = {{ DisableDomain}}
AND CopyTagsToSnapshot = {{ CopyTagsToSnapshot}}
AND MonitoringInterval = '{{ MonitoringInterval}}'
AND DBPortNumber = '{{ DBPortNumber}}'
AND PubliclyAccessible = {{ PubliclyAccessible}}
AND MonitoringRoleArn = '{{ MonitoringRoleArn}}'
AND DomainIAMRoleName = '{{ DomainIAMRoleName}}'
AND PromotionTier = '{{ PromotionTier}}'
AND EnableIAMDatabaseAuthentication = {{ EnableIAMDatabaseAuthentication}}
AND DatabaseInsightsMode = '{{ DatabaseInsightsMode}}'
AND EnablePerformanceInsights = {{ EnablePerformanceInsights}}
AND PerformanceInsightsKMSKeyId = '{{ PerformanceInsightsKMSKeyId}}'
AND PerformanceInsightsRetentionPeriod = '{{ PerformanceInsightsRetentionPeriod}}'
AND CloudwatchLogsExportConfiguration = '{{ CloudwatchLogsExportConfiguration}}'
AND ProcessorFeatures = '{{ ProcessorFeatures}}'
AND UseDefaultProcessorFeatures = {{ UseDefaultProcessorFeatures}}
AND DeletionProtection = {{ DeletionProtection}}
AND MaxAllocatedStorage = '{{ MaxAllocatedStorage}}'
AND CertificateRotationRestart = {{ CertificateRotationRestart}}
AND ReplicaMode = '{{ ReplicaMode}}'
AND AutomationMode = '{{ AutomationMode}}'
AND ResumeFullAutomationModeMinutes = '{{ ResumeFullAutomationModeMinutes}}'
AND EnableCustomerOwnedIp = {{ EnableCustomerOwnedIp}}
AND NetworkType = '{{ NetworkType}}'
AND AwsBackupRecoveryPointArn = '{{ AwsBackupRecoveryPointArn}}'
AND ManageMasterUserPassword = {{ ManageMasterUserPassword}}
AND RotateMasterUserPassword = {{ RotateMasterUserPassword}}
AND MasterUserSecretKmsKeyId = '{{ MasterUserSecretKmsKeyId}}'
AND MultiTenant = {{ MultiTenant}}
AND DedicatedLogVolume = {{ DedicatedLogVolume}}
AND Engine = '{{ Engine}}'
AND AdditionalStorageVolumes = '{{ AdditionalStorageVolumes}}'
AND TagSpecifications = '{{ TagSpecifications}}'
AND MasterUserAuthenticationType = '{{ MasterUserAuthenticationType}}'
RETURNING
activity_stream_engine_native_audit_fields_included,
activity_stream_kinesis_stream_name,
activity_stream_kms_key_id,
activity_stream_mode,
activity_stream_policy_status,
activity_stream_status,
additional_storage_volumes,
allocated_storage,
associated_roles,
auto_minor_version_upgrade,
automatic_restart_time,
automation_mode,
availability_zone,
aws_backup_recovery_point_arn,
backup_retention_period,
backup_target,
ca_certificate_identifier,
certificate_details,
character_set_name,
copy_tags_to_snapshot,
custom_iam_instance_profile,
customer_owned_ip_enabled,
db_cluster_identifier,
db_instance_arn,
db_instance_automated_backups_replications,
db_instance_class,
db_instance_identifier,
db_instance_status,
db_name,
db_parameter_groups,
db_security_groups,
db_subnet_group,
db_system_id,
database_insights_mode,
db_instance_port,
dbi_resource_id,
dedicated_log_volume,
deletion_protection,
domain_memberships,
enabled_cloudwatch_logs_exports,
endpoint,
engine,
engine_lifecycle_support,
engine_version,
enhanced_monitoring_resource_arn,
iam_database_authentication_enabled,
instance_create_time,
iops,
is_storage_config_upgrade_available,
kms_key_id,
latest_restorable_time,
license_model,
listener_endpoint,
master_user_secret,
master_username,
max_allocated_storage,
monitoring_interval,
monitoring_role_arn,
multi_az,
multi_tenant,
nchar_character_set_name,
network_type,
option_group_memberships,
pending_modified_values,
percent_progress,
performance_insights_enabled,
performance_insights_kms_key_id,
performance_insights_retention_period,
preferred_backup_window,
preferred_maintenance_window,
processor_features,
promotion_tier,
publicly_accessible,
read_replica_db_cluster_identifiers,
read_replica_db_instance_identifiers,
read_replica_source_db_cluster_identifier,
read_replica_source_db_instance_identifier,
replica_mode,
resume_full_automation_mode_time,
secondary_availability_zone,
status_infos,
storage_encrypted,
storage_encryption_type,
storage_throughput,
storage_type,
storage_volume_status,
tag_list,
tde_credential_arn,
timezone,
upgrade_rollout_order,
vpc_security_groups;
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

Deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. However, manual DB snapshots of the DB instance aren't deleted. If you request a final DB snapshot, the status of the Amazon RDS DB instance is deleting until the DB snapshot is created. This operation can't be canceled or reverted after it begins. To monitor the status of this operation, use DescribeDBInstance. When a DB instance is in a failure state and has a status of failed, incompatible-restore, or incompatible-network, you can only delete it when you skip creation of the final snapshot with the SkipFinalSnapshot parameter. If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true: The DB cluster is a read replica of another Amazon Aurora DB cluster. The DB instance is the only instance in the DB cluster. To delete a DB instance in this case, first use the PromoteReadReplicaDBCluster operation to promote the DB cluster so that it's no longer a read replica. After the promotion completes, use the DeleteDBInstance operation to delete the final instance in the DB cluster. For RDS Custom DB instances, deleting the DB instance permanently deletes the EC2 instance and the associated EBS volumes. Make sure that you don't terminate or delete these resources before you delete the DB instance. Otherwise, deleting the DB instance and creation of the final snapshot might fail.

```sql
DELETE FROM aws.rds.db_instances
WHERE DBInstanceIdentifier = '{{ DBInstanceIdentifier }}' --required
AND region = '{{ region }}' --required
AND SkipFinalSnapshot = '{{ SkipFinalSnapshot }}'
AND FinalDBSnapshotIdentifier = '{{ FinalDBSnapshotIdentifier }}'
AND DeleteAutomatedBackups = '{{ DeleteAutomatedBackups }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="download_db_log_file_portion"
    values={[
        { label: 'download_db_log_file_portion', value: 'download_db_log_file_portion' },
        { label: 'promote_read_replica', value: 'promote_read_replica' },
        { label: 'reboot_db_instance', value: 'reboot_db_instance' },
        { label: 'remove_role_from_db_instance', value: 'remove_role_from_db_instance' },
        { label: 'restore_db_instance_from_db_snapshot', value: 'restore_db_instance_from_db_snapshot' },
        { label: 'restore_db_instance_from_s3', value: 'restore_db_instance_from_s3' },
        { label: 'restore_db_instance_to_point_in_time', value: 'restore_db_instance_to_point_in_time' },
        { label: 'start_db_instance', value: 'start_db_instance' },
        { label: 'stop_db_instance', value: 'stop_db_instance' },
        { label: 'switchover_read_replica', value: 'switchover_read_replica' }
    ]}
>
<TabItem value="download_db_log_file_portion">

Downloads all or a portion of the specified log file, up to 1 MB in size. This command doesn't apply to RDS Custom. This operation uses resources on database instances. Because of this, we recommend publishing database logs to CloudWatch and then using the GetLogEvents operation. For more information, see GetLogEvents in the Amazon CloudWatch Logs API Reference.

```sql
EXEC aws.rds.db_instances.download_db_log_file_portion 
@DBInstanceIdentifier='{{ DBInstanceIdentifier }}' --required, 
@LogFileName='{{ LogFileName }}' --required, 
@region='{{ region }}' --required, 
@Marker='{{ Marker }}', 
@NumberOfLines='{{ NumberOfLines }}'
;
```
</TabItem>
<TabItem value="promote_read_replica">

Promotes a read replica DB instance to a standalone DB instance. Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the backing-up status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion. This command doesn't apply to Aurora MySQL, Aurora PostgreSQL, or RDS Custom.

```sql
EXEC aws.rds.db_instances.promote_read_replica 
@DBInstanceIdentifier='{{ DBInstanceIdentifier }}' --required, 
@region='{{ region }}' --required, 
@BackupRetentionPeriod='{{ BackupRetentionPeriod }}', 
@PreferredBackupWindow='{{ PreferredBackupWindow }}', 
@TagSpecifications='{{ TagSpecifications }}'
;
```
</TabItem>
<TabItem value="reboot_db_instance">

You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect. Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting. For more information about rebooting, see Rebooting a DB Instance in the Amazon RDS User Guide. This command doesn't apply to RDS Custom. If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the RebootDBCluster operation.

```sql
EXEC aws.rds.db_instances.reboot_db_instance 
@DBInstanceIdentifier='{{ DBInstanceIdentifier }}' --required, 
@region='{{ region }}' --required, 
@ForceFailover={{ ForceFailover }}
;
```
</TabItem>
<TabItem value="remove_role_from_db_instance">

Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.

```sql
EXEC aws.rds.db_instances.remove_role_from_db_instance 
@DBInstanceIdentifier='{{ DBInstanceIdentifier }}' --required, 
@RoleArn='{{ RoleArn }}' --required, 
@FeatureName='{{ FeatureName }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="restore_db_instance_from_db_snapshot">

Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with most of the source's original configuration, including the default security group and DB parameter group. By default, the new DB instance is created as a Single-AZ deployment, except when the instance is a SQL Server instance that has an option group associated with mirroring. In this case, the instance becomes a Multi-AZ deployment, not a Single-AZ deployment. If you want to replace your original DB instance with the new, restored DB instance, then rename your original DB instance before you call the RestoreDBInstanceFromDBSnapshot operation. RDS doesn't allow two DB instances with the same name. After you have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot operation. The result is that you replace the original DB instance with the DB instance created from the snapshot. If you are restoring from a shared manual DB snapshot, the DBSnapshotIdentifier must be the ARN of the shared DB snapshot. To restore from a DB snapshot with an unsupported engine version, you must first upgrade the engine version of the snapshot. For more information about upgrading a RDS for MySQL DB snapshot engine version, see Upgrading a MySQL DB snapshot engine version. For more information about upgrading a RDS for PostgreSQL DB snapshot engine version, Upgrading a PostgreSQL DB snapshot engine version. This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use RestoreDBClusterFromSnapshot.

```sql
EXEC aws.rds.db_instances.restore_db_instance_from_db_snapshot 
@DBInstanceIdentifier='{{ DBInstanceIdentifier }}' --required, 
@region='{{ region }}' --required, 
@DBSnapshotIdentifier='{{ DBSnapshotIdentifier }}', 
@DBInstanceClass='{{ DBInstanceClass }}', 
@Port='{{ Port }}', 
@AvailabilityZone='{{ AvailabilityZone }}', 
@DBSubnetGroupName='{{ DBSubnetGroupName }}', 
@MultiAZ={{ MultiAZ }}, 
@PubliclyAccessible={{ PubliclyAccessible }}, 
@AutoMinorVersionUpgrade={{ AutoMinorVersionUpgrade }}, 
@LicenseModel='{{ LicenseModel }}', 
@DBName='{{ DBName }}', 
@Engine='{{ Engine }}', 
@Iops='{{ Iops }}', 
@StorageThroughput='{{ StorageThroughput }}', 
@OptionGroupName='{{ OptionGroupName }}', 
@Tags='{{ Tags }}', 
@StorageType='{{ StorageType }}', 
@TdeCredentialArn='{{ TdeCredentialArn }}', 
@TdeCredentialPassword='{{ TdeCredentialPassword }}', 
@VpcSecurityGroupIds='{{ VpcSecurityGroupIds }}', 
@Domain='{{ Domain }}', 
@DomainFqdn='{{ DomainFqdn }}', 
@DomainOu='{{ DomainOu }}', 
@DomainAuthSecretArn='{{ DomainAuthSecretArn }}', 
@DomainDnsIps='{{ DomainDnsIps }}', 
@CopyTagsToSnapshot={{ CopyTagsToSnapshot }}, 
@DomainIAMRoleName='{{ DomainIAMRoleName }}', 
@EnableIAMDatabaseAuthentication={{ EnableIAMDatabaseAuthentication }}, 
@EnableCloudwatchLogsExports='{{ EnableCloudwatchLogsExports }}', 
@ProcessorFeatures='{{ ProcessorFeatures }}', 
@UseDefaultProcessorFeatures={{ UseDefaultProcessorFeatures }}, 
@DBParameterGroupName='{{ DBParameterGroupName }}', 
@DeletionProtection={{ DeletionProtection }}, 
@EnableCustomerOwnedIp={{ EnableCustomerOwnedIp }}, 
@NetworkType='{{ NetworkType }}', 
@BackupTarget='{{ BackupTarget }}', 
@CustomIamInstanceProfile='{{ CustomIamInstanceProfile }}', 
@AllocatedStorage='{{ AllocatedStorage }}', 
@DBClusterSnapshotIdentifier='{{ DBClusterSnapshotIdentifier }}', 
@BackupRetentionPeriod='{{ BackupRetentionPeriod }}', 
@PreferredBackupWindow='{{ PreferredBackupWindow }}', 
@DedicatedLogVolume={{ DedicatedLogVolume }}, 
@CACertificateIdentifier='{{ CACertificateIdentifier }}', 
@EngineLifecycleSupport='{{ EngineLifecycleSupport }}', 
@AdditionalStorageVolumes='{{ AdditionalStorageVolumes }}', 
@TagSpecifications='{{ TagSpecifications }}', 
@ManageMasterUserPassword={{ ManageMasterUserPassword }}, 
@MasterUserSecretKmsKeyId='{{ MasterUserSecretKmsKeyId }}'
;
```
</TabItem>
<TabItem value="restore_db_instance_from_s3">

Amazon Relational Database Service (Amazon RDS) supports importing MySQL databases by using backup files. You can create a backup of your on-premises database, store it on Amazon Simple Storage Service (Amazon S3), and then restore the backup file onto a new Amazon RDS DB instance running MySQL. For more information, see Restoring a backup into an Amazon RDS for MySQL DB instance in the Amazon RDS User Guide. This operation doesn't apply to RDS Custom.

```sql
EXEC aws.rds.db_instances.restore_db_instance_from_s3 
@DBInstanceIdentifier='{{ DBInstanceIdentifier }}' --required, 
@DBInstanceClass='{{ DBInstanceClass }}' --required, 
@SourceEngine='{{ SourceEngine }}' --required, 
@SourceEngineVersion='{{ SourceEngineVersion }}' --required, 
@S3BucketName='{{ S3BucketName }}' --required, 
@S3IngestionRoleArn='{{ S3IngestionRoleArn }}' --required, 
@region='{{ region }}' --required, 
@DBName='{{ DBName }}', 
@AllocatedStorage='{{ AllocatedStorage }}', 
@Engine='{{ Engine }}', 
@MasterUsername='{{ MasterUsername }}', 
@MasterUserPassword='{{ MasterUserPassword }}', 
@DBSecurityGroups='{{ DBSecurityGroups }}', 
@VpcSecurityGroupIds='{{ VpcSecurityGroupIds }}', 
@AvailabilityZone='{{ AvailabilityZone }}', 
@DBSubnetGroupName='{{ DBSubnetGroupName }}', 
@PreferredMaintenanceWindow='{{ PreferredMaintenanceWindow }}', 
@DBParameterGroupName='{{ DBParameterGroupName }}', 
@BackupRetentionPeriod='{{ BackupRetentionPeriod }}', 
@PreferredBackupWindow='{{ PreferredBackupWindow }}', 
@Port='{{ Port }}', 
@MultiAZ={{ MultiAZ }}, 
@EngineVersion='{{ EngineVersion }}', 
@AutoMinorVersionUpgrade={{ AutoMinorVersionUpgrade }}, 
@LicenseModel='{{ LicenseModel }}', 
@Iops='{{ Iops }}', 
@StorageThroughput='{{ StorageThroughput }}', 
@OptionGroupName='{{ OptionGroupName }}', 
@PubliclyAccessible={{ PubliclyAccessible }}, 
@Tags='{{ Tags }}', 
@StorageType='{{ StorageType }}', 
@StorageEncrypted={{ StorageEncrypted }}, 
@KmsKeyId='{{ KmsKeyId }}', 
@CopyTagsToSnapshot={{ CopyTagsToSnapshot }}, 
@MonitoringInterval='{{ MonitoringInterval }}', 
@MonitoringRoleArn='{{ MonitoringRoleArn }}', 
@EnableIAMDatabaseAuthentication={{ EnableIAMDatabaseAuthentication }}, 
@S3Prefix='{{ S3Prefix }}', 
@DatabaseInsightsMode='{{ DatabaseInsightsMode }}', 
@EnablePerformanceInsights={{ EnablePerformanceInsights }}, 
@PerformanceInsightsKMSKeyId='{{ PerformanceInsightsKMSKeyId }}', 
@PerformanceInsightsRetentionPeriod='{{ PerformanceInsightsRetentionPeriod }}', 
@EnableCloudwatchLogsExports='{{ EnableCloudwatchLogsExports }}', 
@ProcessorFeatures='{{ ProcessorFeatures }}', 
@UseDefaultProcessorFeatures={{ UseDefaultProcessorFeatures }}, 
@DeletionProtection={{ DeletionProtection }}, 
@MaxAllocatedStorage='{{ MaxAllocatedStorage }}', 
@NetworkType='{{ NetworkType }}', 
@ManageMasterUserPassword={{ ManageMasterUserPassword }}, 
@MasterUserSecretKmsKeyId='{{ MasterUserSecretKmsKeyId }}', 
@DedicatedLogVolume={{ DedicatedLogVolume }}, 
@CACertificateIdentifier='{{ CACertificateIdentifier }}', 
@EngineLifecycleSupport='{{ EngineLifecycleSupport }}', 
@AdditionalStorageVolumes='{{ AdditionalStorageVolumes }}', 
@TagSpecifications='{{ TagSpecifications }}'
;
```
</TabItem>
<TabItem value="restore_db_instance_to_point_in_time">

Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property. The target database is created with most of the original configuration, but in a system-selected Availability Zone, with the default security group, the default subnet group, and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored deployment and not a single-AZ deployment. This operation doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use RestoreDBClusterToPointInTime.

```sql
EXEC aws.rds.db_instances.restore_db_instance_to_point_in_time 
@TargetDBInstanceIdentifier='{{ TargetDBInstanceIdentifier }}' --required, 
@region='{{ region }}' --required, 
@SourceDBInstanceIdentifier='{{ SourceDBInstanceIdentifier }}', 
@RestoreTime='{{ RestoreTime }}', 
@UseLatestRestorableTime={{ UseLatestRestorableTime }}, 
@DBInstanceClass='{{ DBInstanceClass }}', 
@Port='{{ Port }}', 
@AvailabilityZone='{{ AvailabilityZone }}', 
@DBSubnetGroupName='{{ DBSubnetGroupName }}', 
@MultiAZ={{ MultiAZ }}, 
@PubliclyAccessible={{ PubliclyAccessible }}, 
@AutoMinorVersionUpgrade={{ AutoMinorVersionUpgrade }}, 
@LicenseModel='{{ LicenseModel }}', 
@DBName='{{ DBName }}', 
@Engine='{{ Engine }}', 
@Iops='{{ Iops }}', 
@StorageThroughput='{{ StorageThroughput }}', 
@OptionGroupName='{{ OptionGroupName }}', 
@CopyTagsToSnapshot={{ CopyTagsToSnapshot }}, 
@Tags='{{ Tags }}', 
@StorageType='{{ StorageType }}', 
@TdeCredentialArn='{{ TdeCredentialArn }}', 
@TdeCredentialPassword='{{ TdeCredentialPassword }}', 
@VpcSecurityGroupIds='{{ VpcSecurityGroupIds }}', 
@Domain='{{ Domain }}', 
@DomainIAMRoleName='{{ DomainIAMRoleName }}', 
@DomainFqdn='{{ DomainFqdn }}', 
@DomainOu='{{ DomainOu }}', 
@DomainAuthSecretArn='{{ DomainAuthSecretArn }}', 
@DomainDnsIps='{{ DomainDnsIps }}', 
@EnableIAMDatabaseAuthentication={{ EnableIAMDatabaseAuthentication }}, 
@EnableCloudwatchLogsExports='{{ EnableCloudwatchLogsExports }}', 
@ProcessorFeatures='{{ ProcessorFeatures }}', 
@UseDefaultProcessorFeatures={{ UseDefaultProcessorFeatures }}, 
@DBParameterGroupName='{{ DBParameterGroupName }}', 
@DeletionProtection={{ DeletionProtection }}, 
@SourceDbiResourceId='{{ SourceDbiResourceId }}', 
@MaxAllocatedStorage='{{ MaxAllocatedStorage }}', 
@EnableCustomerOwnedIp={{ EnableCustomerOwnedIp }}, 
@NetworkType='{{ NetworkType }}', 
@SourceDBInstanceAutomatedBackupsArn='{{ SourceDBInstanceAutomatedBackupsArn }}', 
@BackupTarget='{{ BackupTarget }}', 
@CustomIamInstanceProfile='{{ CustomIamInstanceProfile }}', 
@AllocatedStorage='{{ AllocatedStorage }}', 
@BackupRetentionPeriod='{{ BackupRetentionPeriod }}', 
@PreferredBackupWindow='{{ PreferredBackupWindow }}', 
@DedicatedLogVolume={{ DedicatedLogVolume }}, 
@CACertificateIdentifier='{{ CACertificateIdentifier }}', 
@EngineLifecycleSupport='{{ EngineLifecycleSupport }}', 
@AdditionalStorageVolumes='{{ AdditionalStorageVolumes }}', 
@TagSpecifications='{{ TagSpecifications }}', 
@ManageMasterUserPassword={{ ManageMasterUserPassword }}, 
@MasterUserSecretKmsKeyId='{{ MasterUserSecretKmsKeyId }}'
;
```
</TabItem>
<TabItem value="start_db_instance">

Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance operation. For more information, see Starting an Amazon RDS DB instance That Was Previously Stopped in the Amazon RDS User Guide. This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora DB clusters, use StartDBCluster instead.

```sql
EXEC aws.rds.db_instances.start_db_instance 
@DBInstanceIdentifier='{{ DBInstanceIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_db_instance">

Stops an Amazon RDS DB instance temporarily. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary. The instance restarts automatically after 7 days. For more information, see Stopping an Amazon RDS DB Instance Temporarily in the Amazon RDS User Guide. This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora clusters, use StopDBCluster instead.

```sql
EXEC aws.rds.db_instances.stop_db_instance 
@DBInstanceIdentifier='{{ DBInstanceIdentifier }}' --required, 
@region='{{ region }}' --required, 
@DBSnapshotIdentifier='{{ DBSnapshotIdentifier }}'
;
```
</TabItem>
<TabItem value="switchover_read_replica">

Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new primary database. Issue this command in the Region that hosts the current standby database.

```sql
EXEC aws.rds.db_instances.switchover_read_replica 
@DBInstanceIdentifier='{{ DBInstanceIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
