--- 
title: db_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - db_clusters
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

Creates, updates, deletes, gets or lists a <code>db_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_clusters" /></td></tr>
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
    <td>The mode of the database activity stream. Database events such as a change or access generate an activity stream event. The database session can handle these events either synchronously or asynchronously.</td>
</tr>
<tr>
    <td><CopyableCode code="activity_stream_status" /></td>
    <td><code>string</code></td>
    <td>The status of the database activity stream.</td>
</tr>
<tr>
    <td><CopyableCode code="allocated_storage" /></td>
    <td><code>integer</code></td>
    <td>AllocatedStorage specifies the allocated storage size in gibibytes (GiB). For Aurora, AllocatedStorage can vary because Aurora DB cluster storage size adjusts as needed.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_roles" /></td>
    <td><code>string</code></td>
    <td>A list of the Amazon Web Services Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon Web Services on your behalf.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_minor_version_upgrade" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether minor version patches are applied automatically. This setting is for Aurora DB clusters and Multi-AZ DB clusters. For more information about automatic minor version upgrades, see Automatically upgrading the minor engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="automatic_restart_time" /></td>
    <td><code>string</code></td>
    <td>The time when a stopped DB cluster is restarted automatically.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>string</code></td>
    <td>The list of Availability Zones (AZs) where instances in the DB cluster can be created.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_backup_recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.</td>
</tr>
<tr>
    <td><CopyableCode code="backtrack_consumed_change_records" /></td>
    <td><code>integer</code></td>
    <td>The number of change records stored for Backtrack.</td>
</tr>
<tr>
    <td><CopyableCode code="backtrack_window" /></td>
    <td><code>integer</code></td>
    <td>The target backtrack window, in seconds. If this value is set to 0, backtracking is disabled for the DB cluster. Otherwise, backtracking is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_retention_period" /></td>
    <td><code>integer</code></td>
    <td>The number of days for which automatic DB snapshots are retained.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity" /></td>
    <td><code>integer</code></td>
    <td>The current capacity of an Aurora Serverless v1 DB cluster. The capacity is 0 (zero) when the cluster is paused. For more information about Aurora Serverless v1, see Using Amazon Aurora Serverless v1 in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_details" /></td>
    <td><code>string</code></td>
    <td>The details of the DB instance’s server certificate. For more information, see Using SSL/TLS to encrypt a connection to a DB instance in the Amazon RDS User Guide and Using SSL/TLS to encrypt a connection to a DB cluster in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="character_set_name" /></td>
    <td><code>string</code></td>
    <td>If present, specifies the name of the character set that this cluster is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="clone_group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the clone group with which the DB cluster is associated. For newly created clusters, the ID is typically null. If you clone a DB cluster when the ID is null, the operation populates the ID value for the source cluster and the clone because both clusters become part of the same clone group. Even if you delete the clone cluster, the clone group ID remains for the lifetime of the source cluster to show that it was used in a cloning operation. For PITR, the clone group ID is inherited from the source cluster. For snapshot restore operations, the clone group ID isn't inherited from the source cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_create_time" /></td>
    <td><code>string</code></td>
    <td>The time when the DB cluster was created, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_scalability_type" /></td>
    <td><code>string</code></td>
    <td>The scalability mode of the Aurora DB cluster. When set to limitless, the cluster operates as an Aurora Limitless Database. When set to standard (the default), the cluster uses normal DB instance creation.</td>
</tr>
<tr>
    <td><CopyableCode code="copy_tags_to_snapshot" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether tags are copied from the DB cluster to snapshots of the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cross_account_clone" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB cluster is a clone of a DB cluster owned by a different Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_endpoints" /></td>
    <td><code>string</code></td>
    <td>The custom endpoints associated with the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>The user-supplied identifier for the DB cluster. This identifier is the unique key that identifies a DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_instance_class" /></td>
    <td><code>string</code></td>
    <td>The name of the compute and memory capacity class of the DB instance. This setting is only for non-Aurora Multi-AZ DB clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_members" /></td>
    <td><code>string</code></td>
    <td>The list of DB instances that make up the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_option_group_memberships" /></td>
    <td><code>string</code></td>
    <td>The list of option group memberships for this DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_parameter_group" /></td>
    <td><code>string</code></td>
    <td>The name of the DB cluster parameter group for the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_subnet_group" /></td>
    <td><code>string</code></td>
    <td>Information about the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="db_system_id" /></td>
    <td><code>string</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="database_insights_mode" /></td>
    <td><code>string</code></td>
    <td>The mode of Database Insights that is enabled for the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the initial database that was specified for the DB cluster when it was created, if one was provided. This same name is returned for the life of the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_resource_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region-unique, immutable identifier for the DB cluster. This identifier is found in Amazon Web Services CloudTrail log entries whenever the KMS key for the DB cluster is accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_memberships" /></td>
    <td><code>string</code></td>
    <td>The Active Directory Domain membership records associated with the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="earliest_backtrack_time" /></td>
    <td><code>string</code></td>
    <td>The earliest time to which a DB cluster can be backtracked.</td>
</tr>
<tr>
    <td><CopyableCode code="earliest_restorable_time" /></td>
    <td><code>string</code></td>
    <td>The earliest time to which a database can be restored with point-in-time restore.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_cloudwatch_logs_exports" /></td>
    <td><code>string</code></td>
    <td>A list of log types that this DB cluster is configured to export to CloudWatch Logs. Log types vary by DB engine. For information about the log types for each DB engine, see Amazon RDS Database Log Files in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The connection endpoint for the primary instance of the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The database engine used for this DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_lifecycle_support" /></td>
    <td><code>string</code></td>
    <td>The lifecycle type for the DB cluster. For more information, see CreateDBCluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_mode" /></td>
    <td><code>string</code></td>
    <td>The DB engine mode of the DB cluster, either provisioned or serverless. For more information, see CreateDBCluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>The version of the database engine.</td>
</tr>
<tr>
    <td><CopyableCode code="global_cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>Contains a user-supplied global database cluster identifier. This identifier is the unique key that identifies a global database cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="global_write_forwarding_requested" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether write forwarding is enabled for a secondary cluster in an Aurora global database. Because write forwarding takes time to enable, check the value of GlobalWriteForwardingStatus to confirm that the request has completed before using the write forwarding feature for this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="global_write_forwarding_status" /></td>
    <td><code>string</code></td>
    <td>The status of write forwarding for a secondary cluster in an Aurora global database.</td>
</tr>
<tr>
    <td><CopyableCode code="hosted_zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID that Amazon Route 53 assigns when you create a hosted zone.</td>
</tr>
<tr>
    <td><CopyableCode code="http_endpoint_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the HTTP endpoint is enabled for an Aurora DB cluster. When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the DB cluster. You can also query your database from inside the RDS console with the RDS query editor. For more information, see Using RDS Data API in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_database_authentication_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="io_optimized_next_allowed_modification_time" /></td>
    <td><code>string</code></td>
    <td>The next time you can modify the DB cluster to use the aurora-iopt1 storage type. This setting is only for Aurora DB clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="internet_access_gateway_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB cluster has internet-based connectivity enabled through an internet access gateway. This setting is applicable only for Aurora PostgreSQL clusters created through express configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="iops" /></td>
    <td><code>integer</code></td>
    <td>The Provisioned IOPS (I/O operations per second) value. This setting is only for non-Aurora Multi-AZ DB clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>If StorageEncrypted is enabled, the Amazon Web Services KMS key identifier for the encrypted DB cluster. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_restorable_time" /></td>
    <td><code>string</code></td>
    <td>The latest time to which a database can be restored with point-in-time restore.</td>
</tr>
<tr>
    <td><CopyableCode code="limitless_database" /></td>
    <td><code>string</code></td>
    <td>The details for Aurora Limitless Database.</td>
</tr>
<tr>
    <td><CopyableCode code="local_write_forwarding_status" /></td>
    <td><code>string</code></td>
    <td>Indicates whether an Aurora DB cluster has in-cluster write forwarding enabled, not enabled, requested, or is in the process of enabling it.</td>
</tr>
<tr>
    <td><CopyableCode code="master_user_secret" /></td>
    <td><code>string</code></td>
    <td>The secret managed by RDS in Amazon Web Services Secrets Manager for the master user password. For more information, see Password management with Amazon Web Services Secrets Manager in the Amazon RDS User Guide and Password management with Amazon Web Services Secrets Manager in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="master_username" /></td>
    <td><code>string</code></td>
    <td>The master username for the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_interval" /></td>
    <td><code>integer</code></td>
    <td>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. This setting is only for -Aurora DB clusters and Multi-AZ DB clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. This setting is only for Aurora DB clusters and Multi-AZ DB clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_az" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB cluster has instances in multiple Availability Zones.</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>The network type of the DB instance. The network type is determined by the DBSubnetGroup specified for the DB cluster. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see Working with a DB instance in a VPC in the Amazon Aurora User Guide. This setting is only for Aurora DB clusters. Valid Values: IPV4 | DUAL</td>
</tr>
<tr>
    <td><CopyableCode code="pending_modified_values" /></td>
    <td><code>string</code></td>
    <td>Information about pending changes to the DB cluster. This information is returned only when there are pending changes. Specific changes are identified by subelements.</td>
</tr>
<tr>
    <td><CopyableCode code="percent_progress" /></td>
    <td><code>string</code></td>
    <td>The progress of the operation as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="performance_insights_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Performance Insights is enabled for the DB cluster. This setting is only for Aurora DB clusters and Multi-AZ DB clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="performance_insights_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key identifier for encryption of Performance Insights data. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. This setting is only for Aurora DB clusters and Multi-AZ DB clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="performance_insights_retention_period" /></td>
    <td><code>integer</code></td>
    <td>The number of days to retain Performance Insights data. This setting is only for Aurora DB clusters and Multi-AZ DB clusters. Valid Values: 7 month * 31, where month is a number of months from 1-23. Examples: 93 (3 months * 31), 341 (11 months * 31), 589 (19 months * 31) 731 Default: 7 days</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port that the database engine is listening on.</td>
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
    <td><CopyableCode code="publicly_accessible" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB cluster is publicly accessible. When the DB cluster is publicly accessible and you connect from outside of the DB cluster's virtual private cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB cluster, the endpoint resolves to the private IP address. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it. When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address. For more information, see CreateDBCluster. This setting is only for non-Aurora Multi-AZ DB clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="rds_custom_cluster_configuration" /></td>
    <td><code>string</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="read_replica_identifiers" /></td>
    <td><code>string</code></td>
    <td>Contains one or more identifiers of the read replicas associated with this DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="reader_endpoint" /></td>
    <td><code>string</code></td>
    <td>The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load-balances connections across the Aurora Replicas that are available in a DB cluster. As clients request new connections to the reader endpoint, Aurora distributes the connection requests among the Aurora Replicas in the DB cluster. This functionality can help balance your read workload across multiple Aurora Replicas in your DB cluster. If a failover occurs, and the Aurora Replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Aurora Replicas in the cluster, you can then reconnect to the reader endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_source_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the source DB cluster if this DB cluster is a read replica.</td>
</tr>
<tr>
    <td><CopyableCode code="scaling_configuration_info" /></td>
    <td><code>string</code></td>
    <td>The scaling configuration for an Aurora DB cluster in serverless DB engine mode. For more information, see Using Amazon Aurora Serverless v1 in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_v2_platform_version" /></td>
    <td><code>string</code></td>
    <td>The version of the Aurora Serverless V2 platform used by the DB cluster. For more information, see Using Aurora Serverless v2 in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_v2_scaling_configuration" /></td>
    <td><code>string</code></td>
    <td>The scaling configuration for an Aurora Serverless v2 DB cluster. For more information, see Using Amazon Aurora Serverless v2 in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current state of this DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status_infos" /></td>
    <td><code>string</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB cluster is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_encryption_type" /></td>
    <td><code>string</code></td>
    <td>The type of encryption used to protect data at rest in the DB cluster. Possible values: none - The DB cluster is not encrypted. sse-rds - The DB cluster is encrypted using an Amazon Web Services owned KMS key. sse-kms - The DB cluster is encrypted using a customer managed KMS key or Amazon Web Services managed KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_throughput" /></td>
    <td><code>integer</code></td>
    <td>The storage throughput for the DB cluster. The throughput is automatically set based on the IOPS that you provision, and is not configurable. This setting is only for non-Aurora Multi-AZ DB clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_type" /></td>
    <td><code>string</code></td>
    <td>The storage type associated with the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_list" /></td>
    <td><code>string</code></td>
    <td>A list of tags. For more information, see Tagging Amazon RDS resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS resources in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="upgrade_rollout_order" /></td>
    <td><code>string</code></td>
    <td>This data type represents the order in which the clusters are upgraded. &#91;first&#93; - Typically used for development or testing environments. &#91;second&#93; - Default order for resources not specifically configured. &#91;last&#93; - Usually reserved for production environments.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_networking_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB cluster uses VPC-based networking. This setting is applicable only for Aurora PostgreSQL clusters created through express configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_security_groups" /></td>
    <td><code>string</code></td>
    <td>The list of VPC security groups that the DB cluster belongs to.</td>
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
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-IncludeShared"><code>IncludeShared</code></a></td>
    <td>Describes existing Amazon Aurora DB clusters and Multi-AZ DB clusters. This API supports pagination. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide. This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</td>
</tr>
<tr>
    <td><a href="#create_db_cluster"><CopyableCode code="create_db_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityZones"><code>AvailabilityZones</code></a>, <a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-CharacterSetName"><code>CharacterSetName</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-MasterUsername"><code>MasterUsername</code></a>, <a href="#parameter-MasterUserPassword"><code>MasterUserPassword</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-ReplicationSourceIdentifier"><code>ReplicationSourceIdentifier</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-StorageEncrypted"><code>StorageEncrypted</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-PreSignedUrl"><code>PreSignedUrl</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-BacktrackWindow"><code>BacktrackWindow</code></a>, <a href="#parameter-EnableCloudwatchLogsExports"><code>EnableCloudwatchLogsExports</code></a>, <a href="#parameter-EngineMode"><code>EngineMode</code></a>, <a href="#parameter-ScalingConfiguration"><code>ScalingConfiguration</code></a>, <a href="#parameter-RdsCustomClusterConfiguration"><code>RdsCustomClusterConfiguration</code></a>, <a href="#parameter-DBClusterInstanceClass"><code>DBClusterInstanceClass</code></a>, <a href="#parameter-AllocatedStorage"><code>AllocatedStorage</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-Iops"><code>Iops</code></a>, <a href="#parameter-PubliclyAccessible"><code>PubliclyAccessible</code></a>, <a href="#parameter-AutoMinorVersionUpgrade"><code>AutoMinorVersionUpgrade</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-EnableHttpEndpoint"><code>EnableHttpEndpoint</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-DomainIAMRoleName"><code>DomainIAMRoleName</code></a>, <a href="#parameter-EnableGlobalWriteForwarding"><code>EnableGlobalWriteForwarding</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a>, <a href="#parameter-ServerlessV2ScalingConfiguration"><code>ServerlessV2ScalingConfiguration</code></a>, <a href="#parameter-MonitoringInterval"><code>MonitoringInterval</code></a>, <a href="#parameter-MonitoringRoleArn"><code>MonitoringRoleArn</code></a>, <a href="#parameter-DatabaseInsightsMode"><code>DatabaseInsightsMode</code></a>, <a href="#parameter-EnablePerformanceInsights"><code>EnablePerformanceInsights</code></a>, <a href="#parameter-PerformanceInsightsKMSKeyId"><code>PerformanceInsightsKMSKeyId</code></a>, <a href="#parameter-PerformanceInsightsRetentionPeriod"><code>PerformanceInsightsRetentionPeriod</code></a>, <a href="#parameter-EnableLimitlessDatabase"><code>EnableLimitlessDatabase</code></a>, <a href="#parameter-ClusterScalabilityType"><code>ClusterScalabilityType</code></a>, <a href="#parameter-DBSystemId"><code>DBSystemId</code></a>, <a href="#parameter-ManageMasterUserPassword"><code>ManageMasterUserPassword</code></a>, <a href="#parameter-EnableLocalWriteForwarding"><code>EnableLocalWriteForwarding</code></a>, <a href="#parameter-MasterUserSecretKmsKeyId"><code>MasterUserSecretKmsKeyId</code></a>, <a href="#parameter-CACertificateIdentifier"><code>CACertificateIdentifier</code></a>, <a href="#parameter-EngineLifecycleSupport"><code>EngineLifecycleSupport</code></a>, <a href="#parameter-TagSpecifications"><code>TagSpecifications</code></a>, <a href="#parameter-MasterUserAuthenticationType"><code>MasterUserAuthenticationType</code></a>, <a href="#parameter-WithExpressConfiguration"><code>WithExpressConfiguration</code></a></td>
    <td>Creates a new Amazon Aurora DB cluster or Multi-AZ DB cluster. If you create an Aurora DB cluster, the request creates an empty cluster. You must explicitly create the writer instance for your DB cluster using the CreateDBInstance operation. If you create a Multi-AZ DB cluster, the request creates a writer and two reader DB instances for you, each in a different Availability Zone. You can use the ReplicationSourceIdentifier parameter to create an Amazon Aurora DB cluster as a read replica of another DB cluster or Amazon RDS for MySQL or PostgreSQL DB instance. For more information about Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. You can also use the ReplicationSourceIdentifier parameter to create a Multi-AZ DB cluster read replica with an RDS for MySQL or PostgreSQL DB instance as the source. For more information about Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide. You can use the WithExpressConfiguration parameter to create an Aurora DB Cluster with express configuration and create cluster in seconds. Express configuration provides a cluster with a writer instance and feature specific values set to all other input parameters of this API.</td>
</tr>
<tr>
    <td><a href="#add_role_to_db_cluster"><CopyableCode code="add_role_to_db_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-FeatureName"><code>FeatureName</code></a></td>
    <td>Associates an Identity and Access Management (IAM) role with a DB cluster.</td>
</tr>
<tr>
    <td><a href="#modify_db_cluster"><CopyableCode code="modify_db_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NewDBClusterIdentifier"><code>NewDBClusterIdentifier</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a>, <a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-MasterUserPassword"><code>MasterUserPassword</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-BacktrackWindow"><code>BacktrackWindow</code></a>, <a href="#parameter-CloudwatchLogsExportConfiguration"><code>CloudwatchLogsExportConfiguration</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-AllowMajorVersionUpgrade"><code>AllowMajorVersionUpgrade</code></a>, <a href="#parameter-DBInstanceParameterGroupName"><code>DBInstanceParameterGroupName</code></a>, <a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-DomainIAMRoleName"><code>DomainIAMRoleName</code></a>, <a href="#parameter-ScalingConfiguration"><code>ScalingConfiguration</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-EnableHttpEndpoint"><code>EnableHttpEndpoint</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-EnableGlobalWriteForwarding"><code>EnableGlobalWriteForwarding</code></a>, <a href="#parameter-DBClusterInstanceClass"><code>DBClusterInstanceClass</code></a>, <a href="#parameter-AllocatedStorage"><code>AllocatedStorage</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-Iops"><code>Iops</code></a>, <a href="#parameter-AutoMinorVersionUpgrade"><code>AutoMinorVersionUpgrade</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a>, <a href="#parameter-ServerlessV2ScalingConfiguration"><code>ServerlessV2ScalingConfiguration</code></a>, <a href="#parameter-MonitoringInterval"><code>MonitoringInterval</code></a>, <a href="#parameter-MonitoringRoleArn"><code>MonitoringRoleArn</code></a>, <a href="#parameter-DatabaseInsightsMode"><code>DatabaseInsightsMode</code></a>, <a href="#parameter-EnablePerformanceInsights"><code>EnablePerformanceInsights</code></a>, <a href="#parameter-PerformanceInsightsKMSKeyId"><code>PerformanceInsightsKMSKeyId</code></a>, <a href="#parameter-PerformanceInsightsRetentionPeriod"><code>PerformanceInsightsRetentionPeriod</code></a>, <a href="#parameter-ManageMasterUserPassword"><code>ManageMasterUserPassword</code></a>, <a href="#parameter-RotateMasterUserPassword"><code>RotateMasterUserPassword</code></a>, <a href="#parameter-EnableLocalWriteForwarding"><code>EnableLocalWriteForwarding</code></a>, <a href="#parameter-MasterUserSecretKmsKeyId"><code>MasterUserSecretKmsKeyId</code></a>, <a href="#parameter-EngineMode"><code>EngineMode</code></a>, <a href="#parameter-AllowEngineModeChange"><code>AllowEngineModeChange</code></a>, <a href="#parameter-AwsBackupRecoveryPointArn"><code>AwsBackupRecoveryPointArn</code></a>, <a href="#parameter-EnableLimitlessDatabase"><code>EnableLimitlessDatabase</code></a>, <a href="#parameter-CACertificateIdentifier"><code>CACertificateIdentifier</code></a>, <a href="#parameter-MasterUserAuthenticationType"><code>MasterUserAuthenticationType</code></a></td>
    <td>Modifies the settings of an Amazon Aurora DB cluster or a Multi-AZ DB cluster. You can change one or more settings by specifying these parameters and the new values in the request. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_db_cluster"><CopyableCode code="delete_db_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SkipFinalSnapshot"><code>SkipFinalSnapshot</code></a>, <a href="#parameter-FinalDBSnapshotIdentifier"><code>FinalDBSnapshotIdentifier</code></a>, <a href="#parameter-DeleteAutomatedBackups"><code>DeleteAutomatedBackups</code></a></td>
    <td>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted. If you're deleting a Multi-AZ DB cluster with read replicas, all cluster members are terminated and read replicas are promoted to standalone instances. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#backtrack_db_cluster"><CopyableCode code="backtrack_db_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-BacktrackTo"><code>BacktrackTo</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Force"><code>Force</code></a>, <a href="#parameter-UseEarliestTimeOnPointInTimeUnavailable"><code>UseEarliestTimeOnPointInTimeUnavailable</code></a></td>
    <td>Backtracks a DB cluster to a specific time, without creating a new DB cluster. For more information on backtracking, see Backtracking an Aurora DB Cluster in the Amazon Aurora User Guide. This action applies only to Aurora MySQL DB clusters.</td>
</tr>
<tr>
    <td><a href="#copy_db_cluster_snapshot"><CopyableCode code="copy_db_cluster_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SourceDBClusterSnapshotIdentifier"><code>SourceDBClusterSnapshotIdentifier</code></a>, <a href="#parameter-TargetDBClusterSnapshotIdentifier"><code>TargetDBClusterSnapshotIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-PreSignedUrl"><code>PreSignedUrl</code></a>, <a href="#parameter-CopyTags"><code>CopyTags</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Copies a snapshot of a DB cluster. To copy a DB cluster snapshot from a shared manual DB cluster snapshot, SourceDBClusterSnapshotIdentifier must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot. You can copy an encrypted DB cluster snapshot from another Amazon Web Services Region. In that case, the Amazon Web Services Region where you call the CopyDBClusterSnapshot operation is the destination Amazon Web Services Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another Amazon Web Services Region, you must provide the following values: KmsKeyId - The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region. TargetDBClusterSnapshotIdentifier - The identifier for the new copy of the DB cluster snapshot in the destination Amazon Web Services Region. SourceDBClusterSnapshotIdentifier - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the ARN format for the source Amazon Web Services Region and is the same value as the SourceDBClusterSnapshotIdentifier in the presigned URL. To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified by TargetDBClusterSnapshotIdentifier while that DB cluster snapshot is in "copying" status. For more information on copying encrypted Amazon Aurora DB cluster snapshots from one Amazon Web Services Region to another, see Copying a Snapshot in the Amazon Aurora User Guide. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#failover_db_cluster"><CopyableCode code="failover_db_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TargetDBInstanceIdentifier"><code>TargetDBInstanceIdentifier</code></a></td>
    <td>Forces a failover for a DB cluster. For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer). For a Multi-AZ DB cluster, after RDS terminates the primary DB instance, the internal monitoring system detects that the primary DB instance is unhealthy and promotes a readable standby (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer). Failover times are typically less than 35 seconds. An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists, when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby DB instance when the primary DB instance fails. To simulate a failure of a primary instance for testing, you can force a failover. Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_current_db_cluster_capacity"><CopyableCode code="modify_current_db_cluster_capacity" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Capacity"><code>Capacity</code></a>, <a href="#parameter-SecondsBeforeTimeout"><code>SecondsBeforeTimeout</code></a>, <a href="#parameter-TimeoutAction"><code>TimeoutAction</code></a></td>
    <td>Set the capacity of an Aurora Serverless v1 DB cluster to a specific value. Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call ModifyCurrentDBClusterCapacity to set the capacity explicitly. After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down. For more information about Aurora Serverless v1, see Using Amazon Aurora Serverless v1 in the Amazon Aurora User Guide. If you call ModifyCurrentDBClusterCapacity with the default TimeoutAction, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points, see Autoscaling for Aurora Serverless v1 in the Amazon Aurora User Guide. This operation only applies to Aurora Serverless v1 DB clusters.</td>
</tr>
<tr>
    <td><a href="#promote_read_replica_db_cluster"><CopyableCode code="promote_read_replica_db_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Promotes a read replica DB cluster to a standalone DB cluster.</td>
</tr>
<tr>
    <td><a href="#reboot_db_cluster"><CopyableCode code="reboot_db_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>You might need to reboot your DB cluster, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB cluster parameter group associated with the DB cluster, reboot the DB cluster for the changes to take effect. Rebooting a DB cluster restarts the database engine service. Rebooting a DB cluster results in a momentary outage, during which the DB cluster status is set to rebooting. Use this operation only for a non-Aurora Multi-AZ DB cluster. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#remove_role_from_db_cluster"><CopyableCode code="remove_role_from_db_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-FeatureName"><code>FeatureName</code></a></td>
    <td>Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a DB cluster. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#restore_db_cluster_from_s3"><CopyableCode code="restore_db_cluster_from_s3" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-MasterUsername"><code>MasterUsername</code></a>, <a href="#parameter-SourceEngine"><code>SourceEngine</code></a>, <a href="#parameter-SourceEngineVersion"><code>SourceEngineVersion</code></a>, <a href="#parameter-S3BucketName"><code>S3BucketName</code></a>, <a href="#parameter-S3IngestionRoleArn"><code>S3IngestionRoleArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityZones"><code>AvailabilityZones</code></a>, <a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-CharacterSetName"><code>CharacterSetName</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-MasterUserPassword"><code>MasterUserPassword</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-StorageEncrypted"><code>StorageEncrypted</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-S3Prefix"><code>S3Prefix</code></a>, <a href="#parameter-BacktrackWindow"><code>BacktrackWindow</code></a>, <a href="#parameter-EnableCloudwatchLogsExports"><code>EnableCloudwatchLogsExports</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-DomainIAMRoleName"><code>DomainIAMRoleName</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a>, <a href="#parameter-ServerlessV2ScalingConfiguration"><code>ServerlessV2ScalingConfiguration</code></a>, <a href="#parameter-ManageMasterUserPassword"><code>ManageMasterUserPassword</code></a>, <a href="#parameter-MasterUserSecretKmsKeyId"><code>MasterUserSecretKmsKeyId</code></a>, <a href="#parameter-EngineLifecycleSupport"><code>EngineLifecycleSupport</code></a>, <a href="#parameter-TagSpecifications"><code>TagSpecifications</code></a></td>
    <td>Creates an Amazon Aurora DB cluster from MySQL data stored in an Amazon S3 bucket. Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be created using the Percona XtraBackup utility as described in Migrating Data from MySQL by Using an Amazon S3 Bucket in the Amazon Aurora User Guide. This operation only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the CreateDBInstance operation to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in DBClusterIdentifier. You can create DB instances only after the RestoreDBClusterFromS3 operation has completed and the DB cluster is available. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. This operation only applies to Aurora DB clusters. The source DB engine must be MySQL.</td>
</tr>
<tr>
    <td><a href="#restore_db_cluster_from_snapshot"><CopyableCode code="restore_db_cluster_from_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-SnapshotIdentifier"><code>SnapshotIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityZones"><code>AvailabilityZones</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-BacktrackWindow"><code>BacktrackWindow</code></a>, <a href="#parameter-EnableCloudwatchLogsExports"><code>EnableCloudwatchLogsExports</code></a>, <a href="#parameter-EngineMode"><code>EngineMode</code></a>, <a href="#parameter-ScalingConfiguration"><code>ScalingConfiguration</code></a>, <a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-DomainIAMRoleName"><code>DomainIAMRoleName</code></a>, <a href="#parameter-DBClusterInstanceClass"><code>DBClusterInstanceClass</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-Iops"><code>Iops</code></a>, <a href="#parameter-PubliclyAccessible"><code>PubliclyAccessible</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a>, <a href="#parameter-ServerlessV2ScalingConfiguration"><code>ServerlessV2ScalingConfiguration</code></a>, <a href="#parameter-RdsCustomClusterConfiguration"><code>RdsCustomClusterConfiguration</code></a>, <a href="#parameter-MonitoringInterval"><code>MonitoringInterval</code></a>, <a href="#parameter-MonitoringRoleArn"><code>MonitoringRoleArn</code></a>, <a href="#parameter-EnablePerformanceInsights"><code>EnablePerformanceInsights</code></a>, <a href="#parameter-PerformanceInsightsKMSKeyId"><code>PerformanceInsightsKMSKeyId</code></a>, <a href="#parameter-PerformanceInsightsRetentionPeriod"><code>PerformanceInsightsRetentionPeriod</code></a>, <a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-EngineLifecycleSupport"><code>EngineLifecycleSupport</code></a>, <a href="#parameter-TagSpecifications"><code>TagSpecifications</code></a>, <a href="#parameter-EnableVPCNetworking"><code>EnableVPCNetworking</code></a>, <a href="#parameter-EnableInternetAccessGateway"><code>EnableInternetAccessGateway</code></a></td>
    <td>Creates a new DB cluster from a DB snapshot or DB cluster snapshot. The target DB cluster is created from the source snapshot with a default configuration. If you don't specify a security group, the new DB cluster is associated with the default security group. You can use the EnableVPCNetworking and EnableInternetAccessGateway parameters together to restore an Aurora PostgreSQL cluster without VPC networking and with internet-based connectivity. These two parameters must always be specified together. Set EnableVPCNetworking to false to disable the VPC network interface (ENI) for the cluster. EnableInternetAccessGateway enables internet-based connectivity through an internet access gateway. IAM database authentication is required and must be enabled using EnableIAMDatabaseAuthentication. Once the cluster is restored, you need to modify the DB cluster to update MasterUserAuthenticationType to iam-db-auth. This operation only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the CreateDBInstance operation to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in DBClusterIdentifier. You can create DB instances only after the RestoreDBClusterFromSnapshot operation has completed and the DB cluster is available. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#restore_db_cluster_to_point_in_time"><CopyableCode code="restore_db_cluster_to_point_in_time" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RestoreType"><code>RestoreType</code></a>, <a href="#parameter-SourceDBClusterIdentifier"><code>SourceDBClusterIdentifier</code></a>, <a href="#parameter-RestoreToTime"><code>RestoreToTime</code></a>, <a href="#parameter-UseLatestRestorableTime"><code>UseLatestRestorableTime</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-EnableIAMDatabaseAuthentication"><code>EnableIAMDatabaseAuthentication</code></a>, <a href="#parameter-BacktrackWindow"><code>BacktrackWindow</code></a>, <a href="#parameter-EnableCloudwatchLogsExports"><code>EnableCloudwatchLogsExports</code></a>, <a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-DomainIAMRoleName"><code>DomainIAMRoleName</code></a>, <a href="#parameter-DBClusterInstanceClass"><code>DBClusterInstanceClass</code></a>, <a href="#parameter-StorageType"><code>StorageType</code></a>, <a href="#parameter-PubliclyAccessible"><code>PubliclyAccessible</code></a>, <a href="#parameter-Iops"><code>Iops</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a>, <a href="#parameter-SourceDbClusterResourceId"><code>SourceDbClusterResourceId</code></a>, <a href="#parameter-ServerlessV2ScalingConfiguration"><code>ServerlessV2ScalingConfiguration</code></a>, <a href="#parameter-ScalingConfiguration"><code>ScalingConfiguration</code></a>, <a href="#parameter-EngineMode"><code>EngineMode</code></a>, <a href="#parameter-RdsCustomClusterConfiguration"><code>RdsCustomClusterConfiguration</code></a>, <a href="#parameter-MonitoringInterval"><code>MonitoringInterval</code></a>, <a href="#parameter-MonitoringRoleArn"><code>MonitoringRoleArn</code></a>, <a href="#parameter-EnablePerformanceInsights"><code>EnablePerformanceInsights</code></a>, <a href="#parameter-PerformanceInsightsKMSKeyId"><code>PerformanceInsightsKMSKeyId</code></a>, <a href="#parameter-PerformanceInsightsRetentionPeriod"><code>PerformanceInsightsRetentionPeriod</code></a>, <a href="#parameter-BackupRetentionPeriod"><code>BackupRetentionPeriod</code></a>, <a href="#parameter-PreferredBackupWindow"><code>PreferredBackupWindow</code></a>, <a href="#parameter-EngineLifecycleSupport"><code>EngineLifecycleSupport</code></a>, <a href="#parameter-TagSpecifications"><code>TagSpecifications</code></a>, <a href="#parameter-EnableVPCNetworking"><code>EnableVPCNetworking</code></a>, <a href="#parameter-EnableInternetAccessGateway"><code>EnableInternetAccessGateway</code></a></td>
    <td>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before LatestRestorableTime for up to BackupRetentionPeriod days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group. Unless the RestoreType is set to copy-on-write, the restore may occur in a different Availability Zone (AZ) from the original DB cluster. The AZ where RDS restores the DB cluster depends on the AZs in the specified subnet group. You can use the EnableVPCNetworking and EnableInternetAccessGateway parameters together to restore an Aurora PostgreSQL cluster without VPC networking and with internet-based connectivity. These two parameters must always be specified together. Set EnableVPCNetworking to false to disable the VPC network interface (ENI) for the cluster. EnableInternetAccessGateway enables internet-based connectivity through an internet access gateway. IAM database authentication is required and must be enabled using EnableIAMDatabaseAuthentication. Once the cluster is restored, you need to modify the DB cluster to update MasterUserAuthenticationType to iam-db-auth. For Aurora, this operation only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the CreateDBInstance operation to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in DBClusterIdentifier. You can create DB instances only after the RestoreDBClusterToPointInTime operation has completed and the DB cluster is available. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#start_db_cluster"><CopyableCode code="start_db_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster operation. For more information, see Stopping and Starting an Aurora Cluster in the Amazon Aurora User Guide. This operation only applies to Aurora DB clusters.</td>
</tr>
<tr>
    <td><a href="#stop_db_cluster"><CopyableCode code="stop_db_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary. For more information, see Stopping and Starting an Aurora Cluster in the Amazon Aurora User Guide. This operation only applies to Aurora DB clusters.</td>
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
<tr id="parameter-BacktrackTo">
    <td><CopyableCode code="BacktrackTo" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the time to backtrack the DB cluster to, specified in ISO 8601 format. For more information about ISO 8601, see the ISO8601 Wikipedia page. If the specified time isn't a consistent time for the DB cluster, Aurora automatically chooses the nearest possible consistent time for the DB cluster. Constraints: Must contain a valid ISO 8601 timestamp. Can't contain a timestamp set in the future. Example: 2017-07-08T18:00Z</td>
</tr>
<tr id="parameter-DBClusterIdentifier">
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The DB cluster identifier of the Amazon Aurora DB cluster to be stopped. This parameter is stored as a lowercase string.</td>
</tr>
<tr id="parameter-MasterUsername">
    <td><CopyableCode code="MasterUsername" /></td>
    <td><code>string</code></td>
    <td>The name of the master user for the restored DB cluster. Constraints: Must be 1 to 16 letters or numbers. First character must be a letter. Can't be a reserved word for the chosen database engine.</td>
</tr>
<tr id="parameter-RoleArn">
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role to disassociate from the Aurora DB cluster, for example arn:aws:iam::123456789012:role/AuroraAccessRole.</td>
</tr>
<tr id="parameter-S3BucketName">
    <td><CopyableCode code="S3BucketName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon S3 bucket that contains the data used to create the Amazon Aurora DB cluster.</td>
</tr>
<tr id="parameter-S3IngestionRoleArn">
    <td><CopyableCode code="S3IngestionRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that authorizes Amazon RDS to access the Amazon S3 bucket on your behalf.</td>
</tr>
<tr id="parameter-SnapshotIdentifier">
    <td><CopyableCode code="SnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the DB snapshot or DB cluster snapshot to restore from. You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot. Constraints: Must match the identifier of an existing Snapshot. Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-SourceDBClusterSnapshotIdentifier">
    <td><CopyableCode code="SourceDBClusterSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the DB cluster snapshot to copy. This parameter isn't case-sensitive. Constraints: Must specify a valid source snapshot in the "available" state. If the source snapshot is in the same Amazon Web Services Region as the copy, specify a valid DB snapshot identifier. If the source snapshot is in a different Amazon Web Services Region than the copy, specify a valid DB cluster snapshot ARN. You can also specify an ARN of a snapshot that is in a different account and a different Amazon Web Services Region. For more information, go to Copying Snapshots Across Amazon Web Services Regions in the Amazon Aurora User Guide. Example: my-cluster-snapshot1</td>
</tr>
<tr id="parameter-SourceEngine">
    <td><CopyableCode code="SourceEngine" /></td>
    <td><code>string</code></td>
    <td>The identifier for the database engine that was backed up to create the files stored in the Amazon S3 bucket. Valid Values: mysql</td>
</tr>
<tr id="parameter-SourceEngineVersion">
    <td><CopyableCode code="SourceEngineVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the database that the backup files were created from. MySQL versions 5.7 and 8.0 are supported. Example: 5.7.40, 8.0.28</td>
</tr>
<tr id="parameter-TargetDBClusterSnapshotIdentifier">
    <td><CopyableCode code="TargetDBClusterSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter isn't case-sensitive. Constraints: Must contain from 1 to 63 letters, numbers, or hyphens. First character must be a letter. Can't end with a hyphen or contain two consecutive hyphens. Example: my-cluster-snapshot2</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AllocatedStorage">
    <td><CopyableCode code="AllocatedStorage" /></td>
    <td><code>integer</code></td>
    <td>The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster. Valid for Cluster Type: Multi-AZ DB clusters only</td>
</tr>
<tr id="parameter-AllowEngineModeChange">
    <td><CopyableCode code="AllowEngineModeChange" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether engine mode changes from serverless to provisioned are allowed. Valid for Cluster Type: Aurora Serverless v1 DB clusters only Constraints: You must allow engine mode changes when specifying a different value for the EngineMode parameter from the DB cluster's current engine mode.</td>
</tr>
<tr id="parameter-AllowMajorVersionUpgrade">
    <td><CopyableCode code="AllowMajorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether major version upgrades are allowed. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Constraints: You must allow major version upgrades when specifying a value for the EngineVersion parameter that is a different major version than the DB cluster's current version.</td>
</tr>
<tr id="parameter-ApplyImmediately">
    <td><CopyableCode code="ApplyImmediately" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the modifications in this request are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB cluster. If this parameter is disabled, changes to the DB cluster are applied during the next maintenance window. Most modifications can be applied immediately or during the next scheduled maintenance window. Some modifications, such as turning on deletion protection and changing the master password, are applied immediately—regardless of when you choose to apply them. By default, this parameter is disabled. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-AutoMinorVersionUpgrade">
    <td><CopyableCode code="AutoMinorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters. For more information about automatic minor version upgrades, see Automatically upgrading the minor engine version.</td>
</tr>
<tr id="parameter-AvailabilityZones">
    <td><CopyableCode code="AvailabilityZones" /></td>
    <td><code>array</code></td>
    <td>Provides the list of Availability Zones (AZs) where instances in the restored DB cluster can be created. Valid for: Aurora DB clusters only</td>
</tr>
<tr id="parameter-AwsBackupRecoveryPointArn">
    <td><CopyableCode code="AwsBackupRecoveryPointArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.</td>
</tr>
<tr id="parameter-BacktrackWindow">
    <td><CopyableCode code="BacktrackWindow" /></td>
    <td><code>integer (int64)</code></td>
    <td>The target backtrack window, in seconds. To disable backtracking, set this value to 0. Default: 0 Constraints: If specified, this value must be set to a number from 0 to 259,200 (72 hours). Valid for: Aurora MySQL DB clusters only</td>
</tr>
<tr id="parameter-BackupRetentionPeriod">
    <td><CopyableCode code="BackupRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The number of days for which automated backups are retained. Specify a minimum value of 1. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Default: Uses existing setting Constraints: Must be a value from 1 to 35.</td>
</tr>
<tr id="parameter-CACertificateIdentifier">
    <td><CopyableCode code="CACertificateIdentifier" /></td>
    <td><code>string</code></td>
    <td>The CA certificate identifier to use for the DB cluster's server certificate. For more information, see Using SSL/TLS to encrypt a connection to a DB instance in the Amazon RDS User Guide. Valid for Cluster Type: Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-Capacity">
    <td><CopyableCode code="Capacity" /></td>
    <td><code>integer</code></td>
    <td>The DB cluster capacity. When you change the capacity of a paused Aurora Serverless v1 DB cluster, it automatically resumes. Constraints: For Aurora MySQL, valid capacity values are 1, 2, 4, 8, 16, 32, 64, 128, and 256. For Aurora PostgreSQL, valid capacity values are 2, 4, 8, 16, 32, 64, 192, and 384.</td>
</tr>
<tr id="parameter-CharacterSetName">
    <td><CopyableCode code="CharacterSetName" /></td>
    <td><code>string</code></td>
    <td>A value that indicates that the restored DB cluster should be associated with the specified CharacterSet.</td>
</tr>
<tr id="parameter-CloudwatchLogsExportConfiguration">
    <td><CopyableCode code="CloudwatchLogsExportConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters The following values are valid for each DB engine: Aurora MySQL - audit | error | general | instance | slowquery | iam-db-auth-error Aurora PostgreSQL - instance | postgresql | iam-db-auth-error RDS for MySQL - error | general | slowquery | iam-db-auth-error RDS for PostgreSQL - postgresql | upgrade | iam-db-auth-error For more information about exporting CloudWatch Logs for Amazon RDS, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon RDS User Guide. For more information about exporting CloudWatch Logs for Amazon Aurora, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide.</td>
</tr>
<tr id="parameter-ClusterScalabilityType">
    <td><CopyableCode code="ClusterScalabilityType" /></td>
    <td><code>string</code></td>
    <td>Specifies the scalability mode of the Aurora DB cluster. When set to limitless, the cluster operates as an Aurora Limitless Database. When set to standard (the default), the cluster uses normal DB instance creation. Valid for: Aurora DB clusters only You can't modify this setting after you create the DB cluster.</td>
</tr>
<tr id="parameter-CopyTags">
    <td><CopyableCode code="CopyTags" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot. By default, tags are not copied.</td>
</tr>
<tr id="parameter-CopyTagsToSnapshot">
    <td><CopyableCode code="CopyTagsToSnapshot" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them. Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-DBClusterIdentifier">
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The user-supplied DB cluster identifier or the Amazon Resource Name (ARN) of the DB cluster. If this parameter is specified, information for only the specific DB cluster is returned. This parameter isn't case-sensitive. Constraints: If supplied, must match an existing DB cluster identifier.</td>
</tr>
<tr id="parameter-DBClusterInstanceClass">
    <td><CopyableCode code="DBClusterInstanceClass" /></td>
    <td><code>string</code></td>
    <td>The compute and memory capacity of the each DB instance in the Multi-AZ DB cluster, for example db.m6gd.xlarge. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB instance class in the Amazon RDS User Guide. Valid for: Multi-AZ DB clusters only</td>
</tr>
<tr id="parameter-DBClusterParameterGroupName">
    <td><CopyableCode code="DBClusterParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the custom DB cluster parameter group to associate with this DB cluster. If the DBClusterParameterGroupName parameter is omitted, the default DB cluster parameter group for the specified engine is used. Constraints: If supplied, must match the name of an existing DB cluster parameter group. Must be 1 to 255 letters, numbers, or hyphens. First character must be a letter. Can't end with a hyphen or contain two consecutive hyphens. Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-DBInstanceParameterGroupName">
    <td><CopyableCode code="DBInstanceParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the DB parameter group to apply to all instances of the DB cluster. When you apply a parameter group using the DBInstanceParameterGroupName parameter, the DB cluster isn't rebooted automatically. Also, parameter changes are applied immediately rather than during the next maintenance window. Valid for Cluster Type: Aurora DB clusters only Default: The existing name setting Constraints: The DB parameter group must be in the same DB parameter group family as this DB cluster. The DBInstanceParameterGroupName parameter is valid in combination with the AllowMajorVersionUpgrade parameter for a major version upgrade only.</td>
</tr>
<tr id="parameter-DBSubnetGroupName">
    <td><CopyableCode code="DBSubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The DB subnet group name to use for the new DB cluster. Constraints: If supplied, must match the name of an existing DBSubnetGroup. Example: mydbsubnetgroup Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-DBSystemId">
    <td><CopyableCode code="DBSystemId" /></td>
    <td><code>string</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr id="parameter-DatabaseInsightsMode">
    <td><CopyableCode code="DatabaseInsightsMode" /></td>
    <td><code>string</code></td>
    <td>Specifies the mode of Database Insights to enable for the DB cluster. If you change the value from standard to advanced, you must set the PerformanceInsightsEnabled parameter to true and the PerformanceInsightsRetentionPeriod parameter to 465. If you change the value from advanced to standard, you can set the PerformanceInsightsEnabled parameter to true to collect detailed database counter and per-query metrics. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-DatabaseName">
    <td><CopyableCode code="DatabaseName" /></td>
    <td><code>string</code></td>
    <td>The database name for the restored DB cluster. Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-DeleteAutomatedBackups">
    <td><CopyableCode code="DeleteAutomatedBackups" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to remove automated backups immediately after the DB cluster is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB cluster is deleted, unless the Amazon Web Services Backup policy specifies a point-in-time restore rule.</td>
</tr>
<tr id="parameter-DeletionProtection">
    <td><CopyableCode code="DeletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to enable deletion protection for the DB cluster. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-Domain">
    <td><CopyableCode code="Domain" /></td>
    <td><code>string</code></td>
    <td>The Active Directory directory ID to restore the DB cluster in. The domain must be created prior to this operation. For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster. For more information, see Kerberos Authentication in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only</td>
</tr>
<tr id="parameter-DomainIAMRoleName">
    <td><CopyableCode code="DomainIAMRoleName" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM role to be used when making API calls to the Directory Service. Valid for: Aurora DB clusters only</td>
</tr>
<tr id="parameter-EnableCloudwatchLogsExports">
    <td><CopyableCode code="EnableCloudwatchLogsExports" /></td>
    <td><code>array</code></td>
    <td>The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. RDS for MySQL Possible values are error, general, slowquery, and iam-db-auth-error. RDS for PostgreSQL Possible values are postgresql, upgrade, and iam-db-auth-error. Aurora MySQL Possible values are audit, error, general, instance, slowquery, and iam-db-auth-error. Aurora PostgreSQL Possible value are instance, postgresql, and iam-db-auth-error. For more information about exporting CloudWatch Logs for Amazon RDS, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon RDS User Guide. For more information about exporting CloudWatch Logs for Amazon Aurora, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide. Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-EnableGlobalWriteForwarding">
    <td><CopyableCode code="EnableGlobalWriteForwarding" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database. You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by a global cluster API operation, but it does nothing until then. Valid for Cluster Type: Aurora DB clusters only</td>
</tr>
<tr id="parameter-EnableHttpEndpoint">
    <td><CopyableCode code="EnableHttpEndpoint" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to enable the HTTP endpoint for an Aurora Serverless v1 DB cluster. By default, the HTTP endpoint isn't enabled. When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the Aurora Serverless v1 DB cluster. You can also query your database from inside the RDS console with the RDS query editor. For more information, see Using RDS Data API in the Amazon Aurora User Guide. This parameter applies only to Aurora Serverless v1 DB clusters. To enable or disable the HTTP endpoint for an Aurora Serverless v2 or provisioned DB cluster, use the EnableHttpEndpoint and DisableHttpEndpoint operations. Valid for Cluster Type: Aurora DB clusters only</td>
</tr>
<tr id="parameter-EnableIAMDatabaseAuthentication">
    <td><CopyableCode code="EnableIAMDatabaseAuthentication" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see IAM Database Authentication in the Amazon Aurora User Guide or IAM database authentication for MariaDB, MySQL, and PostgreSQL in the Amazon RDS User Guide. Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-EnableInternetAccessGateway">
    <td><CopyableCode code="EnableInternetAccessGateway" /></td>
    <td><code>boolean</code></td>
    <td>Specifies that the restored DB cluster should use internet-based connectivity through an internet access gateway. This allows clients to connect to the cluster over the internet without requiring a VPC. This parameter must be used together with EnableVPCNetworking set to false. When both parameters are specified, IAM database authentication is required. You must also specify EnableIAMDatabaseAuthentication. Valid for Cluster Type: Aurora PostgreSQL clusters</td>
</tr>
<tr id="parameter-EnableLimitlessDatabase">
    <td><CopyableCode code="EnableLimitlessDatabase" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to enable Aurora Limitless Database. You must enable Aurora Limitless Database to create a DB shard group. Valid for: Aurora DB clusters only This setting is no longer used. Instead use the ClusterScalabilityType setting when you create your Aurora Limitless Database DB cluster.</td>
</tr>
<tr id="parameter-EnableLocalWriteForwarding">
    <td><CopyableCode code="EnableLocalWriteForwarding" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster. By default, write operations aren't allowed on reader DB instances. Valid for: Aurora DB clusters only</td>
</tr>
<tr id="parameter-EnablePerformanceInsights">
    <td><CopyableCode code="EnablePerformanceInsights" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to turn on Performance Insights for the DB cluster.</td>
</tr>
<tr id="parameter-EnableVPCNetworking">
    <td><CopyableCode code="EnableVPCNetworking" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to enable VPC networking for the restored DB cluster. Set this parameter to false to create a cluster without the VPC network interface (ENI). This parameter must be used together with EnableInternetAccessGateway. When both parameters are specified, IAM database authentication is required. You must also specify EnableIAMDatabaseAuthentication. Valid for Cluster Type: Aurora PostgreSQL clusters</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The database engine to use for the new DB cluster. Default: The same as source Constraint: Must be compatible with the engine of the source Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-EngineLifecycleSupport">
    <td><CopyableCode code="EngineLifecycleSupport" /></td>
    <td><code>string</code></td>
    <td>The life cycle type for this DB cluster. By default, this value is set to open-source-rds-extended-support, which enrolls your DB cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to open-source-rds-extended-support-disabled. In this case, RDS automatically upgrades your restored DB cluster to a higher engine version, if the major engine version is past its end of standard support date. You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections: Amazon Aurora - Amazon RDS Extended Support with Amazon Aurora in the Amazon Aurora User Guide Amazon RDS - Amazon RDS Extended Support with Amazon RDS in the Amazon RDS User Guide Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Valid Values: open-source-rds-extended-support | open-source-rds-extended-support-disabled Default: open-source-rds-extended-support</td>
</tr>
<tr id="parameter-EngineMode">
    <td><CopyableCode code="EngineMode" /></td>
    <td><code>string</code></td>
    <td>The engine mode of the new cluster. Specify provisioned or serverless, depending on the type of the cluster you are creating. You can create an Aurora Serverless v1 clone from a provisioned cluster, or a provisioned clone from an Aurora Serverless v1 cluster. To create a clone that is an Aurora Serverless v1 cluster, the original cluster must be an Aurora Serverless v1 cluster or an encrypted provisioned cluster. To create a full copy that is an Aurora Serverless v1 cluster, specify the engine mode serverless. Valid for: Aurora DB clusters only</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the database engine to use for the new DB cluster. If you don't specify an engine version, the default version for the database engine in the Amazon Web Services Region is used. To list all of the available engine versions for Aurora MySQL, use the following command: aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions&#91;&#93;.EngineVersion" To list all of the available engine versions for Aurora PostgreSQL, use the following command: aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions&#91;&#93;.EngineVersion" To list all of the available engine versions for RDS for MySQL, use the following command: aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions&#91;&#93;.EngineVersion" To list all of the available engine versions for RDS for PostgreSQL, use the following command: aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions&#91;&#93;.EngineVersion" Aurora MySQL See Database engine updates for Amazon Aurora MySQL in the Amazon Aurora User Guide. Aurora PostgreSQL See Amazon Aurora PostgreSQL releases and engine versions in the Amazon Aurora User Guide. MySQL See Amazon RDS for MySQL in the Amazon RDS User Guide. PostgreSQL See Amazon RDS for PostgreSQL versions and extensions in the Amazon RDS User Guide. Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-FeatureName">
    <td><CopyableCode code="FeatureName" /></td>
    <td><code>string</code></td>
    <td>The name of the feature for the DB cluster that the IAM role is to be disassociated from. For information about supported feature names, see DBEngineVersion.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more DB clusters to describe. Supported Filters: clone-group-id - Accepts clone group identifiers. The results list only includes information about the DB clusters associated with these clone groups. db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list only includes information about the DB clusters identified by these ARNs. db-cluster-resource-id - Accepts DB cluster resource identifiers. The results list will only include information about the DB clusters identified by these DB cluster resource identifiers. domain - Accepts Active Directory directory IDs. The results list only includes information about the DB clusters associated with these domains. engine - Accepts engine names. The results list only includes information about the DB clusters for these engines.</td>
</tr>
<tr id="parameter-FinalDBSnapshotIdentifier">
    <td><CopyableCode code="FinalDBSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The DB cluster snapshot identifier of the new DB cluster snapshot created when SkipFinalSnapshot is disabled. If you specify this parameter and also skip the creation of a final DB cluster snapshot with the SkipFinalShapshot parameter, the request results in an error. Constraints: Must be 1 to 255 letters, numbers, or hyphens. First character must be a letter Can't end with a hyphen or contain two consecutive hyphens</td>
</tr>
<tr id="parameter-Force">
    <td><CopyableCode code="Force" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to force the DB cluster to backtrack when binary logging is enabled. Otherwise, an error occurs when binary logging is enabled.</td>
</tr>
<tr id="parameter-GlobalClusterIdentifier">
    <td><CopyableCode code="GlobalClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The global cluster ID of an Aurora cluster that becomes the primary cluster in the new global database cluster. Valid for Cluster Type: Aurora DB clusters only</td>
</tr>
<tr id="parameter-IncludeShared">
    <td><CopyableCode code="IncludeShared" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the output includes information about clusters shared from other Amazon Web Services accounts.</td>
</tr>
<tr id="parameter-Iops">
    <td><CopyableCode code="Iops" /></td>
    <td><code>integer</code></td>
    <td>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. For information about valid IOPS values, see Amazon RDS Provisioned IOPS storage in the Amazon RDS User Guide. Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB instance. Valid for: Multi-AZ DB clusters only</td>
</tr>
<tr id="parameter-KmsKeyId">
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different from the KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key identified by the KmsKeyId parameter. If you don't specify a value for the KmsKeyId parameter, then the following occurs: If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster. If the DB cluster isn't encrypted, then the restored DB cluster isn't encrypted. If DBClusterIdentifier refers to a DB cluster that isn't encrypted, then the restore request is rejected. Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-ManageMasterUserPassword">
    <td><CopyableCode code="ManageMasterUserPassword" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to manage the master user password with Amazon Web Services Secrets Manager. For more information, see Password management with Amazon Web Services Secrets Manager in the Amazon RDS User Guide and Password management with Amazon Web Services Secrets Manager in the Amazon Aurora User Guide. Constraints: Can't manage the master user password with Amazon Web Services Secrets Manager if MasterUserPassword is specified.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeDBClusters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MasterUserAuthenticationType">
    <td><CopyableCode code="MasterUserAuthenticationType" /></td>
    <td><code>string</code></td>
    <td>Specifies the authentication type for the master user. With IAM master user authentication, you can change the master DB user to use IAM database authentication. You can specify one of the following values: password - Use standard database authentication with a password. iam-db-auth - Use IAM database authentication for the master user. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters This option is only valid for RDS for PostgreSQL and Aurora PostgreSQL engines.</td>
</tr>
<tr id="parameter-MasterUserPassword">
    <td><CopyableCode code="MasterUserPassword" /></td>
    <td><code>string</code></td>
    <td>The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@". Constraints: Must contain from 8 to 41 characters. Can't be specified if ManageMasterUserPassword is turned on.</td>
</tr>
<tr id="parameter-MasterUserSecretKmsKeyId">
    <td><CopyableCode code="MasterUserSecretKmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager. This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB cluster. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If you don't specify MasterUserSecretKmsKeyId, then the aws/secretsmanager KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the aws/secretsmanager KMS key to encrypt the secret, and you must use a customer managed KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</td>
</tr>
<tr id="parameter-MasterUsername">
    <td><CopyableCode code="MasterUsername" /></td>
    <td><code>string</code></td>
    <td>The name of the master user for the DB cluster. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Constraints: Must be 1 to 16 letters or numbers. First character must be a letter. Can't be a reserved word for the chosen database engine.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100</td>
</tr>
<tr id="parameter-MonitoringInterval">
    <td><CopyableCode code="MonitoringInterval" /></td>
    <td><code>integer</code></td>
    <td>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify 0. If MonitoringRoleArn is specified, also set MonitoringInterval to a value other than 0. Valid Values: 0 | 1 | 5 | 10 | 15 | 30 | 60 Default: 0</td>
</tr>
<tr id="parameter-MonitoringRoleArn">
    <td><CopyableCode code="MonitoringRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. An example is arn:aws:iam:123456789012:role/emaccess. If MonitoringInterval is set to a value other than 0, supply a MonitoringRoleArn value.</td>
</tr>
<tr id="parameter-NetworkType">
    <td><CopyableCode code="NetworkType" /></td>
    <td><code>string</code></td>
    <td>The network type of the DB cluster. Valid Values: IPV4 DUAL The network type is determined by the DBSubnetGroup specified for the DB cluster. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see Working with a DB instance in a VPC in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only</td>
</tr>
<tr id="parameter-NewDBClusterIdentifier">
    <td><CopyableCode code="NewDBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Constraints: Must contain from 1 to 63 letters, numbers, or hyphens. The first character must be a letter. Can't end with a hyphen or contain two consecutive hyphens. Example: my-cluster2</td>
</tr>
<tr id="parameter-OptionGroupName">
    <td><CopyableCode code="OptionGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the option group for the new DB cluster. DB clusters are associated with a default option group that can't be modified.</td>
</tr>
<tr id="parameter-PerformanceInsightsKMSKeyId">
    <td><CopyableCode code="PerformanceInsightsKMSKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key identifier for encryption of Performance Insights data. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you don't specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</td>
</tr>
<tr id="parameter-PerformanceInsightsRetentionPeriod">
    <td><CopyableCode code="PerformanceInsightsRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The number of days to retain Performance Insights data. Valid Values: 7 month * 31, where month is a number of months from 1-23. Examples: 93 (3 months * 31), 341 (11 months * 31), 589 (19 months * 31) 731 Default: 7 days If you specify a retention period that isn't valid, such as 94, Amazon RDS issues an error.</td>
</tr>
<tr id="parameter-Port">
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port number on which the new DB cluster accepts connections. Constraints: A value from 1150-65535. Default: The default port for the engine. Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-PreSignedUrl">
    <td><CopyableCode code="PreSignedUrl" /></td>
    <td><code>string</code></td>
    <td>When you are copying a DB cluster snapshot from one Amazon Web Services GovCloud (US) Region to another, the URL that contains a Signature Version 4 signed request for the CopyDBClusterSnapshot API operation in the Amazon Web Services Region that contains the source DB cluster snapshot to copy. Use the PreSignedUrl parameter when copying an encrypted DB cluster snapshot from another Amazon Web Services Region. Don't specify PreSignedUrl when copying an encrypted DB cluster snapshot in the same Amazon Web Services Region. This setting applies only to Amazon Web Services GovCloud (US) Regions. It's ignored in other Amazon Web Services Regions. The presigned URL must be a valid request for the CopyDBClusterSnapshot API operation that can run in the source Amazon Web Services Region that contains the encrypted DB cluster snapshot to copy. The presigned URL request must contain the following parameter values: KmsKeyId - The KMS key identifier for the KMS key to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region. This is the same identifier for both the CopyDBClusterSnapshot operation that is called in the destination Amazon Web Services Region, and the operation contained in the presigned URL. DestinationRegion - The name of the Amazon Web Services Region that the DB cluster snapshot is to be created in. SourceDBClusterSnapshotIdentifier - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted DB cluster snapshot from the us-west-2 Amazon Web Services Region, then your SourceDBClusterSnapshotIdentifier looks like the following example: arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115. To learn how to generate a Signature Version 4 signed request, see Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4) and Signature Version 4 Signing Process. If you are using an Amazon Web Services SDK tool or the CLI, you can specify SourceRegion (or --source-region for the CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region.</td>
</tr>
<tr id="parameter-PreferredBackupWindow">
    <td><CopyableCode code="PreferredBackupWindow" /></td>
    <td><code>string</code></td>
    <td>The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. To view the time blocks available, see Backup window in the Amazon Aurora User Guide. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Constraints: Must be in the format hh24:mi-hh24:mi. Must be in Universal Coordinated Time (UTC). Must not conflict with the preferred maintenance window. Must be at least 30 minutes.</td>
</tr>
<tr id="parameter-PreferredMaintenanceWindow">
    <td><CopyableCode code="PreferredMaintenanceWindow" /></td>
    <td><code>string</code></td>
    <td>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. To see the time blocks available, see Adjusting the Preferred Maintenance Window in the Amazon Aurora User Guide. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window.</td>
</tr>
<tr id="parameter-PubliclyAccessible">
    <td><CopyableCode code="PubliclyAccessible" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the DB cluster is publicly accessible. When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB cluster doesn't permit it. When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address. Default: The default behavior varies depending on whether DBSubnetGroupName is specified. If DBSubnetGroupName isn't specified, and PubliclyAccessible isn't specified, the following applies: If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB cluster is private. If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public. If DBSubnetGroupName is specified, and PubliclyAccessible isn't specified, the following applies: If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB cluster is private. If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public. Valid for: Multi-AZ DB clusters only</td>
</tr>
<tr id="parameter-RdsCustomClusterConfiguration">
    <td><CopyableCode code="RdsCustomClusterConfiguration" /></td>
    <td><code>object</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr id="parameter-ReplicationSourceIdentifier">
    <td><CopyableCode code="ReplicationSourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-RestoreToTime">
    <td><CopyableCode code="RestoreToTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time to restore the DB cluster to. Valid Values: Value must be a time in Universal Coordinated Time (UTC) format Constraints: Must be before the latest restorable time for the DB instance Must be specified if UseLatestRestorableTime parameter isn't provided Can't be specified if the UseLatestRestorableTime parameter is enabled Can't be specified if the RestoreType parameter is copy-on-write Example: 2015-03-07T23:45:00Z Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-RestoreType">
    <td><CopyableCode code="RestoreType" /></td>
    <td><code>string</code></td>
    <td>The type of restore to be performed. You can specify one of the following values: full-copy - The new DB cluster is restored as a full copy of the source DB cluster. copy-on-write - The new DB cluster is restored as a clone of the source DB cluster. If you don't specify a RestoreType value, then the new DB cluster is restored as a full copy of the source DB cluster. Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-RotateMasterUserPassword">
    <td><CopyableCode code="RotateMasterUserPassword" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to rotate the secret managed by Amazon Web Services Secrets Manager for the master user password. This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB cluster. The secret value contains the updated password. For more information, see Password management with Amazon Web Services Secrets Manager in the Amazon RDS User Guide and Password management with Amazon Web Services Secrets Manager in the Amazon Aurora User Guide. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Constraints: You must apply the change immediately when rotating the master user password.</td>
</tr>
<tr id="parameter-S3Prefix">
    <td><CopyableCode code="S3Prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix for all of the file names that contain the data used to create the Amazon Aurora DB cluster. If you do not specify a SourceS3Prefix value, then the Amazon Aurora DB cluster is created by using all of the files in the Amazon S3 bucket.</td>
</tr>
<tr id="parameter-ScalingConfiguration">
    <td><CopyableCode code="ScalingConfiguration" /></td>
    <td><code>object</code></td>
    <td>For DB clusters in serverless DB engine mode, the scaling properties of the DB cluster. Valid for: Aurora DB clusters only</td>
</tr>
<tr id="parameter-SecondsBeforeTimeout">
    <td><CopyableCode code="SecondsBeforeTimeout" /></td>
    <td><code>integer</code></td>
    <td>The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action. The default is 300. Specify a value between 10 and 600 seconds.</td>
</tr>
<tr id="parameter-ServerlessV2ScalingConfiguration">
    <td><CopyableCode code="ServerlessV2ScalingConfiguration" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr id="parameter-SkipFinalSnapshot">
    <td><CopyableCode code="SkipFinalSnapshot" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to skip the creation of a final DB cluster snapshot before RDS deletes the DB cluster. If you set this value to true, RDS doesn't create a final DB cluster snapshot. If you set this value to false or don't specify it, RDS creates a DB cluster snapshot before it deletes the DB cluster. By default, this parameter is disabled, so RDS creates a final DB cluster snapshot. If SkipFinalSnapshot is disabled, you must specify a value for the FinalDBSnapshotIdentifier parameter.</td>
</tr>
<tr id="parameter-SourceDBClusterIdentifier">
    <td><CopyableCode code="SourceDBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the source DB cluster from which to restore. Constraints: Must match the identifier of an existing DBCluster. Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-SourceDbClusterResourceId">
    <td><CopyableCode code="SourceDbClusterResourceId" /></td>
    <td><code>string</code></td>
    <td>The resource ID of the source DB cluster from which to restore.</td>
</tr>
<tr id="parameter-StorageEncrypted">
    <td><CopyableCode code="StorageEncrypted" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the restored DB cluster is encrypted.</td>
</tr>
<tr id="parameter-StorageType">
    <td><CopyableCode code="StorageType" /></td>
    <td><code>string</code></td>
    <td>Specifies the storage type to be associated with the DB cluster. When specified for a Multi-AZ DB cluster, a value for the Iops parameter is required. Valid Values: aurora, aurora-iopt1 (Aurora DB clusters); io1 (Multi-AZ DB clusters) Default: aurora (Aurora DB clusters); io1 (Multi-AZ DB clusters) Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-TagSpecifications">
    <td><CopyableCode code="TagSpecifications" /></td>
    <td><code>array</code></td>
    <td>Tags to assign to resources associated with the DB cluster. Valid Values: cluster-auto-backup - The DB cluster's automated backup.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr id="parameter-TargetDBInstanceIdentifier">
    <td><CopyableCode code="TargetDBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The name of the DB instance to promote to the primary DB instance. Specify the DB instance identifier for an Aurora Replica or a Multi-AZ readable standby in the DB cluster, for example mydbcluster-replica1. This setting isn't supported for RDS for MySQL Multi-AZ DB clusters.</td>
</tr>
<tr id="parameter-TimeoutAction">
    <td><CopyableCode code="TimeoutAction" /></td>
    <td><code>string</code></td>
    <td>The action to take when the timeout is reached, either ForceApplyCapacityChange or RollbackCapacityChange. ForceApplyCapacityChange, the default, sets the capacity to the specified value as soon as possible. RollbackCapacityChange ignores the capacity change if a scaling point isn't found in the timeout period.</td>
</tr>
<tr id="parameter-UseEarliestTimeOnPointInTimeUnavailable">
    <td><CopyableCode code="UseEarliestTimeOnPointInTimeUnavailable" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to backtrack the DB cluster to the earliest possible backtrack time when BacktrackTo is set to a timestamp earlier than the earliest backtrack time. When this parameter is disabled and BacktrackTo is set to a timestamp earlier than the earliest backtrack time, an error occurs.</td>
</tr>
<tr id="parameter-UseLatestRestorableTime">
    <td><CopyableCode code="UseLatestRestorableTime" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster isn't restored to the latest restorable backup time. Constraints: Can't be specified if RestoreToTime parameter is provided. Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-VpcSecurityGroupIds">
    <td><CopyableCode code="VpcSecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>A list of VPC security groups that the new DB cluster belongs to. Valid for: Aurora DB clusters and Multi-AZ DB clusters</td>
</tr>
<tr id="parameter-WithExpressConfiguration">
    <td><CopyableCode code="WithExpressConfiguration" /></td>
    <td><code>boolean</code></td>
    <td>Specifies to create an Aurora DB Cluster with express configuration in seconds. Express configuration provides a cluster with a writer instance and feature specific values set to all other input parameters of this API. Valid for Cluster Type: Aurora DB clusters</td>
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

Describes existing Amazon Aurora DB clusters and Multi-AZ DB clusters. This API supports pagination. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide. This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.

```sql
SELECT
activity_stream_kinesis_stream_name,
activity_stream_kms_key_id,
activity_stream_mode,
activity_stream_status,
allocated_storage,
associated_roles,
auto_minor_version_upgrade,
automatic_restart_time,
availability_zones,
aws_backup_recovery_point_arn,
backtrack_consumed_change_records,
backtrack_window,
backup_retention_period,
capacity,
certificate_details,
character_set_name,
clone_group_id,
cluster_create_time,
cluster_scalability_type,
copy_tags_to_snapshot,
cross_account_clone,
custom_endpoints,
db_cluster_arn,
db_cluster_identifier,
db_cluster_instance_class,
db_cluster_members,
db_cluster_option_group_memberships,
db_cluster_parameter_group,
db_subnet_group,
db_system_id,
database_insights_mode,
database_name,
db_cluster_resource_id,
deletion_protection,
domain_memberships,
earliest_backtrack_time,
earliest_restorable_time,
enabled_cloudwatch_logs_exports,
endpoint,
engine,
engine_lifecycle_support,
engine_mode,
engine_version,
global_cluster_identifier,
global_write_forwarding_requested,
global_write_forwarding_status,
hosted_zone_id,
http_endpoint_enabled,
iam_database_authentication_enabled,
io_optimized_next_allowed_modification_time,
internet_access_gateway_enabled,
iops,
kms_key_id,
latest_restorable_time,
limitless_database,
local_write_forwarding_status,
master_user_secret,
master_username,
monitoring_interval,
monitoring_role_arn,
multi_az,
network_type,
pending_modified_values,
percent_progress,
performance_insights_enabled,
performance_insights_kms_key_id,
performance_insights_retention_period,
port,
preferred_backup_window,
preferred_maintenance_window,
publicly_accessible,
rds_custom_cluster_configuration,
read_replica_identifiers,
reader_endpoint,
replication_source_identifier,
scaling_configuration_info,
serverless_v2_platform_version,
serverless_v2_scaling_configuration,
status,
status_infos,
storage_encrypted,
storage_encryption_type,
storage_throughput,
storage_type,
tag_list,
upgrade_rollout_order,
vpc_networking_enabled,
vpc_security_groups
FROM aws.rds.db_clusters
WHERE region = '{{ region }}' -- required
AND DBClusterIdentifier = '{{ DBClusterIdentifier }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND IncludeShared = '{{ IncludeShared }}'
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

Creates a new Amazon Aurora DB cluster or Multi-AZ DB cluster. If you create an Aurora DB cluster, the request creates an empty cluster. You must explicitly create the writer instance for your DB cluster using the CreateDBInstance operation. If you create a Multi-AZ DB cluster, the request creates a writer and two reader DB instances for you, each in a different Availability Zone. You can use the ReplicationSourceIdentifier parameter to create an Amazon Aurora DB cluster as a read replica of another DB cluster or Amazon RDS for MySQL or PostgreSQL DB instance. For more information about Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. You can also use the ReplicationSourceIdentifier parameter to create a Multi-AZ DB cluster read replica with an RDS for MySQL or PostgreSQL DB instance as the source. For more information about Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide. You can use the WithExpressConfiguration parameter to create an Aurora DB Cluster with express configuration and create cluster in seconds. Express configuration provides a cluster with a writer instance and feature specific values set to all other input parameters of this API.

```sql
INSERT INTO aws.rds.db_clusters (
DBClusterIdentifier,
region,
AvailabilityZones,
BackupRetentionPeriod,
CharacterSetName,
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
BacktrackWindow,
EnableCloudwatchLogsExports,
EngineMode,
ScalingConfiguration,
RdsCustomClusterConfiguration,
DBClusterInstanceClass,
AllocatedStorage,
StorageType,
Iops,
PubliclyAccessible,
AutoMinorVersionUpgrade,
DeletionProtection,
GlobalClusterIdentifier,
EnableHttpEndpoint,
CopyTagsToSnapshot,
Domain,
DomainIAMRoleName,
EnableGlobalWriteForwarding,
NetworkType,
ServerlessV2ScalingConfiguration,
MonitoringInterval,
MonitoringRoleArn,
DatabaseInsightsMode,
EnablePerformanceInsights,
PerformanceInsightsKMSKeyId,
PerformanceInsightsRetentionPeriod,
EnableLimitlessDatabase,
ClusterScalabilityType,
DBSystemId,
ManageMasterUserPassword,
EnableLocalWriteForwarding,
MasterUserSecretKmsKeyId,
CACertificateIdentifier,
EngineLifecycleSupport,
TagSpecifications,
MasterUserAuthenticationType,
WithExpressConfiguration
)
SELECT 
'{{ DBClusterIdentifier }}',
'{{ region }}',
'{{ AvailabilityZones }}',
'{{ BackupRetentionPeriod }}',
'{{ CharacterSetName }}',
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
'{{ BacktrackWindow }}',
'{{ EnableCloudwatchLogsExports }}',
'{{ EngineMode }}',
'{{ ScalingConfiguration }}',
'{{ RdsCustomClusterConfiguration }}',
'{{ DBClusterInstanceClass }}',
'{{ AllocatedStorage }}',
'{{ StorageType }}',
'{{ Iops }}',
'{{ PubliclyAccessible }}',
'{{ AutoMinorVersionUpgrade }}',
'{{ DeletionProtection }}',
'{{ GlobalClusterIdentifier }}',
'{{ EnableHttpEndpoint }}',
'{{ CopyTagsToSnapshot }}',
'{{ Domain }}',
'{{ DomainIAMRoleName }}',
'{{ EnableGlobalWriteForwarding }}',
'{{ NetworkType }}',
'{{ ServerlessV2ScalingConfiguration }}',
'{{ MonitoringInterval }}',
'{{ MonitoringRoleArn }}',
'{{ DatabaseInsightsMode }}',
'{{ EnablePerformanceInsights }}',
'{{ PerformanceInsightsKMSKeyId }}',
'{{ PerformanceInsightsRetentionPeriod }}',
'{{ EnableLimitlessDatabase }}',
'{{ ClusterScalabilityType }}',
'{{ DBSystemId }}',
'{{ ManageMasterUserPassword }}',
'{{ EnableLocalWriteForwarding }}',
'{{ MasterUserSecretKmsKeyId }}',
'{{ CACertificateIdentifier }}',
'{{ EngineLifecycleSupport }}',
'{{ TagSpecifications }}',
'{{ MasterUserAuthenticationType }}',
'{{ WithExpressConfiguration }}'
RETURNING
activity_stream_kinesis_stream_name,
activity_stream_kms_key_id,
activity_stream_mode,
activity_stream_status,
allocated_storage,
associated_roles,
auto_minor_version_upgrade,
automatic_restart_time,
availability_zones,
aws_backup_recovery_point_arn,
backtrack_consumed_change_records,
backtrack_window,
backup_retention_period,
capacity,
certificate_details,
character_set_name,
clone_group_id,
cluster_create_time,
cluster_scalability_type,
copy_tags_to_snapshot,
cross_account_clone,
custom_endpoints,
db_cluster_arn,
db_cluster_identifier,
db_cluster_instance_class,
db_cluster_members,
db_cluster_option_group_memberships,
db_cluster_parameter_group,
db_subnet_group,
db_system_id,
database_insights_mode,
database_name,
db_cluster_resource_id,
deletion_protection,
domain_memberships,
earliest_backtrack_time,
earliest_restorable_time,
enabled_cloudwatch_logs_exports,
endpoint,
engine,
engine_lifecycle_support,
engine_mode,
engine_version,
global_cluster_identifier,
global_write_forwarding_requested,
global_write_forwarding_status,
hosted_zone_id,
http_endpoint_enabled,
iam_database_authentication_enabled,
io_optimized_next_allowed_modification_time,
internet_access_gateway_enabled,
iops,
kms_key_id,
latest_restorable_time,
limitless_database,
local_write_forwarding_status,
master_user_secret,
master_username,
monitoring_interval,
monitoring_role_arn,
multi_az,
network_type,
pending_modified_values,
percent_progress,
performance_insights_enabled,
performance_insights_kms_key_id,
performance_insights_retention_period,
port,
preferred_backup_window,
preferred_maintenance_window,
publicly_accessible,
rds_custom_cluster_configuration,
read_replica_identifiers,
reader_endpoint,
replication_source_identifier,
scaling_configuration_info,
serverless_v2_platform_version,
serverless_v2_scaling_configuration,
status,
status_infos,
storage_encrypted,
storage_encryption_type,
storage_throughput,
storage_type,
tag_list,
upgrade_rollout_order,
vpc_networking_enabled,
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
      description: A list of Availability Zones (AZs) where you specifically want to create DB instances in the DB cluster. For the first three DB instances that you create, RDS distributes each DB instance to a different AZ that you specify. For additional DB instances that you create, RDS randomly distributes them to the AZs that you specified. For example, if you create a DB cluster with one writer instance and three reader instances, RDS might distribute the writer instance to AZ 1, the first reader instance to AZ 2, the second reader instance to AZ 3, and the third reader instance to either AZ 1, AZ 2, or AZ 3. For more information, see Availability Zones and High availability for Aurora DB instances in the Amazon Aurora User Guide. Valid for Cluster Type: Aurora DB clusters only Constraints: Can't specify more than three AZs.
      description: A list of Availability Zones (AZs) where you specifically want to create DB instances in the DB cluster. For the first three DB instances that you create, RDS distributes each DB instance to a different AZ that you specify. For additional DB instances that you create, RDS randomly distributes them to the AZs that you specified. For example, if you create a DB cluster with one writer instance and three reader instances, RDS might distribute the writer instance to AZ 1, the first reader instance to AZ 2, the second reader instance to AZ 3, and the third reader instance to either AZ 1, AZ 2, or AZ 3. For more information, see Availability Zones and High availability for Aurora DB instances in the Amazon Aurora User Guide. Valid for Cluster Type: Aurora DB clusters only Constraints: Can't specify more than three AZs.
    - name: BackupRetentionPeriod
      value: {{ BackupRetentionPeriod }}
      description: The number of days for which automated backups are retained. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Default: 1 Constraints: Must be a value from 1 to 35.
      description: The number of days for which automated backups are retained. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Default: 1 Constraints: Must be a value from 1 to 35.
    - name: CharacterSetName
      value: "{{ CharacterSetName }}"
      description: The name of the character set (CharacterSet) to associate the DB cluster with. Valid for Cluster Type: Aurora DB clusters only
      description: The name of the character set (CharacterSet) to associate the DB cluster with. Valid for Cluster Type: Aurora DB clusters only
    - name: DatabaseName
      value: "{{ DatabaseName }}"
      description: The name for your database of up to 64 alphanumeric characters. A database named postgres is always created. If this parameter is specified, an additional database with this name is created. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
      description: The name for your database of up to 64 alphanumeric characters. A database named postgres is always created. If this parameter is specified, an additional database with this name is created. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    - name: DBClusterParameterGroupName
      value: "{{ DBClusterParameterGroupName }}"
      description: The name of the DB cluster parameter group to associate with this DB cluster. If you don't specify a value, then the default DB cluster parameter group for the specified DB engine and version is used. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Constraints: If supplied, must match the name of an existing DB cluster parameter group.
      description: The name of the DB cluster parameter group to associate with this DB cluster. If you don't specify a value, then the default DB cluster parameter group for the specified DB engine and version is used. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Constraints: If supplied, must match the name of an existing DB cluster parameter group.
    - name: VpcSecurityGroupIds
      value: "{{ VpcSecurityGroupIds }}"
      description: A list of EC2 VPC security groups to associate with this DB cluster. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
      description: A list of EC2 VPC security groups to associate with this DB cluster. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    - name: DBSubnetGroupName
      value: "{{ DBSubnetGroupName }}"
      description: A DB subnet group to associate with this DB cluster. This setting is required to create a Multi-AZ DB cluster. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Constraints: Must match the name of an existing DB subnet group. Example: mydbsubnetgroup
      description: A DB subnet group to associate with this DB cluster. This setting is required to create a Multi-AZ DB cluster. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Constraints: Must match the name of an existing DB subnet group. Example: mydbsubnetgroup
    - name: Engine
      value: "{{ Engine }}"
      description: The database engine to use for this DB cluster. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Valid Values: aurora-mysql aurora-postgresql mysql postgres neptune - For information about using Amazon Neptune, see the Amazon Neptune User Guide .
      description: The database engine to use for this DB cluster. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Valid Values: aurora-mysql aurora-postgresql mysql postgres neptune - For information about using Amazon Neptune, see the Amazon Neptune User Guide .
    - name: EngineVersion
      value: "{{ EngineVersion }}"
      description: The version number of the database engine to use. To list all of the available engine versions for Aurora MySQL version 2 (5.7-compatible) and version 3 (MySQL 8.0-compatible), use the following command: aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion" You can supply either 5.7 or 8.0 to use the default engine version for Aurora MySQL version 2 or version 3, respectively. To list all of the available engine versions for Aurora PostgreSQL, use the following command: aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion" To list all of the available engine versions for RDS for MySQL, use the following command: aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion" To list all of the available engine versions for RDS for PostgreSQL, use the following command: aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion" For information about a specific engine, see the following topics: Aurora MySQL - see Database engine updates for Amazon Aurora MySQL in the Amazon Aurora User Guide. Aurora PostgreSQL - see Amazon Aurora PostgreSQL releases and engine versions in the Amazon Aurora User Guide. RDS for MySQL - see Amazon RDS for MySQL in the Amazon RDS User Guide. RDS for PostgreSQL - see Amazon RDS for PostgreSQL in the Amazon RDS User Guide. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
      description: The version number of the database engine to use. To list all of the available engine versions for Aurora MySQL version 2 (5.7-compatible) and version 3 (MySQL 8.0-compatible), use the following command: aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion" You can supply either 5.7 or 8.0 to use the default engine version for Aurora MySQL version 2 or version 3, respectively. To list all of the available engine versions for Aurora PostgreSQL, use the following command: aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion" To list all of the available engine versions for RDS for MySQL, use the following command: aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion" To list all of the available engine versions for RDS for PostgreSQL, use the following command: aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion" For information about a specific engine, see the following topics: Aurora MySQL - see Database engine updates for Amazon Aurora MySQL in the Amazon Aurora User Guide. Aurora PostgreSQL - see Amazon Aurora PostgreSQL releases and engine versions in the Amazon Aurora User Guide. RDS for MySQL - see Amazon RDS for MySQL in the Amazon RDS User Guide. RDS for PostgreSQL - see Amazon RDS for PostgreSQL in the Amazon RDS User Guide. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    - name: Port
      value: {{ Port }}
      description: The port number on which the instances in the DB cluster accept connections. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Valid Values: 1150-65535 Default: RDS for MySQL and Aurora MySQL - 3306 RDS for PostgreSQL and Aurora PostgreSQL - 5432
      description: The port number on which the instances in the DB cluster accept connections. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Valid Values: 1150-65535 Default: RDS for MySQL and Aurora MySQL - 3306 RDS for PostgreSQL and Aurora PostgreSQL - 5432
    - name: MasterUsername
      value: "{{ MasterUsername }}"
      description: The name of the master user for the DB cluster. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Constraints: Must be 1 to 16 letters or numbers. First character must be a letter. Can't be a reserved word for the chosen database engine.
      description: The name of the master user for the DB cluster. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Constraints: Must be 1 to 16 letters or numbers. First character must be a letter. Can't be a reserved word for the chosen database engine.
    - name: MasterUserPassword
      value: "{{ MasterUserPassword }}"
      description: The password for the master database user. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Constraints: Must contain from 8 to 41 characters. Can contain any printable ASCII character except "/", """, or "@". Can't be specified if ManageMasterUserPassword is turned on.
      description: The password for the master database user. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Constraints: Must contain from 8 to 41 characters. Can contain any printable ASCII character except "/", """, or "@". Can't be specified if ManageMasterUserPassword is turned on.
    - name: OptionGroupName
      value: "{{ OptionGroupName }}"
      description: The option group to associate the DB cluster with. DB clusters are associated with a default option group that can't be modified.
      description: The option group to associate the DB cluster with. DB clusters are associated with a default option group that can't be modified.
    - name: PreferredBackupWindow
      value: "{{ PreferredBackupWindow }}"
      description: The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. To view the time blocks available, see Backup window in the Amazon Aurora User Guide. Constraints: Must be in the format hh24:mi-hh24:mi. Must be in Universal Coordinated Time (UTC). Must not conflict with the preferred maintenance window. Must be at least 30 minutes.
      description: The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. To view the time blocks available, see Backup window in the Amazon Aurora User Guide. Constraints: Must be in the format hh24:mi-hh24:mi. Must be in Universal Coordinated Time (UTC). Must not conflict with the preferred maintenance window. Must be at least 30 minutes.
    - name: PreferredMaintenanceWindow
      value: "{{ PreferredMaintenanceWindow }}"
      description: The weekly time range during which system maintenance can occur. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. To see the time blocks available, see Adjusting the Preferred DB Cluster Maintenance Window in the Amazon Aurora User Guide. Constraints: Must be in the format ddd:hh24:mi-ddd:hh24:mi. Days must be one of Mon | Tue | Wed | Thu | Fri | Sat | Sun. Must be in Universal Coordinated Time (UTC). Must be at least 30 minutes.
      description: The weekly time range during which system maintenance can occur. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. To see the time blocks available, see Adjusting the Preferred DB Cluster Maintenance Window in the Amazon Aurora User Guide. Constraints: Must be in the format ddd:hh24:mi-ddd:hh24:mi. Days must be one of Mon | Tue | Wed | Thu | Fri | Sat | Sun. Must be in Universal Coordinated Time (UTC). Must be at least 30 minutes.
    - name: ReplicationSourceIdentifier
      value: "{{ ReplicationSourceIdentifier }}"
      description: The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
      description: The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    - name: Tags
      value: "{{ Tags }}"
      description: Tags to assign to the DB cluster. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
      description: Tags to assign to the DB cluster. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    - name: StorageEncrypted
      value: {{ StorageEncrypted }}
      description: Specifies whether the DB cluster is encrypted. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
      description: Specifies whether the DB cluster is encrypted. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: The Amazon Web Services KMS key identifier for an encrypted DB cluster. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. When a KMS key isn't specified in KmsKeyId: If ReplicationSourceIdentifier identifies an encrypted source, then Amazon RDS uses the KMS key used to encrypt the source. Otherwise, Amazon RDS uses your default KMS key. If the StorageEncrypted parameter is enabled and ReplicationSourceIdentifier isn't specified, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. If you create a read replica of an encrypted DB cluster in another Amazon Web Services Region, make sure to set KmsKeyId to a KMS key identifier that is valid in the destination Amazon Web Services Region. This KMS key is used to encrypt the read replica in that Amazon Web Services Region. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
      description: The Amazon Web Services KMS key identifier for an encrypted DB cluster. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. When a KMS key isn't specified in KmsKeyId: If ReplicationSourceIdentifier identifies an encrypted source, then Amazon RDS uses the KMS key used to encrypt the source. Otherwise, Amazon RDS uses your default KMS key. If the StorageEncrypted parameter is enabled and ReplicationSourceIdentifier isn't specified, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. If you create a read replica of an encrypted DB cluster in another Amazon Web Services Region, make sure to set KmsKeyId to a KMS key identifier that is valid in the destination Amazon Web Services Region. This KMS key is used to encrypt the read replica in that Amazon Web Services Region. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    - name: PreSignedUrl
      value: "{{ PreSignedUrl }}"
      description: When you are replicating a DB cluster from one Amazon Web Services GovCloud (US) Region to another, an URL that contains a Signature Version 4 signed request for the CreateDBCluster operation to be called in the source Amazon Web Services Region where the DB cluster is replicated from. Specify PreSignedUrl only when you are performing cross-Region replication from an encrypted DB cluster. The presigned URL must be a valid request for the CreateDBCluster API operation that can run in the source Amazon Web Services Region that contains the encrypted DB cluster to copy. The presigned URL request must contain the following parameter values: KmsKeyId - The KMS key identifier for the KMS key to use to encrypt the copy of the DB cluster in the destination Amazon Web Services Region. This should refer to the same KMS key for both the CreateDBCluster operation that is called in the destination Amazon Web Services Region, and the operation contained in the presigned URL. DestinationRegion - The name of the Amazon Web Services Region that Aurora read replica will be created in. ReplicationSourceIdentifier - The DB cluster identifier for the encrypted DB cluster to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted DB cluster from the us-west-2 Amazon Web Services Region, then your ReplicationSourceIdentifier would look like Example: arn:aws:rds:us-west-2:123456789012:cluster:aurora-cluster1. To learn how to generate a Signature Version 4 signed request, see Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4) and Signature Version 4 Signing Process. If you are using an Amazon Web Services SDK tool or the CLI, you can specify SourceRegion (or --source-region for the CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region. Valid for Cluster Type: Aurora DB clusters only
      description: When you are replicating a DB cluster from one Amazon Web Services GovCloud (US) Region to another, an URL that contains a Signature Version 4 signed request for the CreateDBCluster operation to be called in the source Amazon Web Services Region where the DB cluster is replicated from. Specify PreSignedUrl only when you are performing cross-Region replication from an encrypted DB cluster. The presigned URL must be a valid request for the CreateDBCluster API operation that can run in the source Amazon Web Services Region that contains the encrypted DB cluster to copy. The presigned URL request must contain the following parameter values: KmsKeyId - The KMS key identifier for the KMS key to use to encrypt the copy of the DB cluster in the destination Amazon Web Services Region. This should refer to the same KMS key for both the CreateDBCluster operation that is called in the destination Amazon Web Services Region, and the operation contained in the presigned URL. DestinationRegion - The name of the Amazon Web Services Region that Aurora read replica will be created in. ReplicationSourceIdentifier - The DB cluster identifier for the encrypted DB cluster to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted DB cluster from the us-west-2 Amazon Web Services Region, then your ReplicationSourceIdentifier would look like Example: arn:aws:rds:us-west-2:123456789012:cluster:aurora-cluster1. To learn how to generate a Signature Version 4 signed request, see Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4) and Signature Version 4 Signing Process. If you are using an Amazon Web Services SDK tool or the CLI, you can specify SourceRegion (or --source-region for the CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region. Valid for Cluster Type: Aurora DB clusters only
    - name: EnableIAMDatabaseAuthentication
      value: {{ EnableIAMDatabaseAuthentication }}
      description: Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see IAM Database Authentication in the Amazon Aurora User Guide or IAM database authentication for MariaDB, MySQL, and PostgreSQL in the Amazon RDS User Guide. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
      description: Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see IAM Database Authentication in the Amazon Aurora User Guide or IAM database authentication for MariaDB, MySQL, and PostgreSQL in the Amazon RDS User Guide. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    - name: BacktrackWindow
      value: "{{ BacktrackWindow }}"
      description: The target backtrack window, in seconds. To disable backtracking, set this value to 0. Valid for Cluster Type: Aurora MySQL DB clusters only Default: 0 Constraints: If specified, this value must be set to a number from 0 to 259,200 (72 hours).
      description: The target backtrack window, in seconds. To disable backtracking, set this value to 0. Valid for Cluster Type: Aurora MySQL DB clusters only Default: 0 Constraints: If specified, this value must be set to a number from 0 to 259,200 (72 hours).
    - name: EnableCloudwatchLogsExports
      value: "{{ EnableCloudwatchLogsExports }}"
      description: The list of log types that need to be enabled for exporting to CloudWatch Logs. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters The following values are valid for each DB engine: Aurora MySQL - audit | error | general | instance | slowquery | iam-db-auth-error Aurora PostgreSQL - instance | postgresql | iam-db-auth-error RDS for MySQL - error | general | slowquery | iam-db-auth-error RDS for PostgreSQL - postgresql | upgrade | iam-db-auth-error For more information about exporting CloudWatch Logs for Amazon RDS, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon RDS User Guide. For more information about exporting CloudWatch Logs for Amazon Aurora, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide.
      description: The list of log types that need to be enabled for exporting to CloudWatch Logs. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters The following values are valid for each DB engine: Aurora MySQL - audit | error | general | instance | slowquery | iam-db-auth-error Aurora PostgreSQL - instance | postgresql | iam-db-auth-error RDS for MySQL - error | general | slowquery | iam-db-auth-error RDS for PostgreSQL - postgresql | upgrade | iam-db-auth-error For more information about exporting CloudWatch Logs for Amazon RDS, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon RDS User Guide. For more information about exporting CloudWatch Logs for Amazon Aurora, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide.
    - name: EngineMode
      value: "{{ EngineMode }}"
      description: The DB engine mode of the DB cluster, either provisioned or serverless. The serverless engine mode only applies for Aurora Serverless v1 DB clusters. Aurora Serverless v2 DB clusters use the provisioned engine mode. For information about limitations and requirements for Serverless DB clusters, see the following sections in the Amazon Aurora User Guide: Limitations of Aurora Serverless v1 Requirements for Aurora Serverless v2 Valid for Cluster Type: Aurora DB clusters only
      description: The DB engine mode of the DB cluster, either provisioned or serverless. The serverless engine mode only applies for Aurora Serverless v1 DB clusters. Aurora Serverless v2 DB clusters use the provisioned engine mode. For information about limitations and requirements for Serverless DB clusters, see the following sections in the Amazon Aurora User Guide: Limitations of Aurora Serverless v1 Requirements for Aurora Serverless v2 Valid for Cluster Type: Aurora DB clusters only
    - name: ScalingConfiguration
      value: "{{ ScalingConfiguration }}"
      description: For DB clusters in serverless DB engine mode, the scaling properties of the DB cluster. Valid for Cluster Type: Aurora DB clusters only
      description: For DB clusters in serverless DB engine mode, the scaling properties of the DB cluster. Valid for Cluster Type: Aurora DB clusters only
    - name: RdsCustomClusterConfiguration
      value: "{{ RdsCustomClusterConfiguration }}"
      description: Reserved for future use.
      description: Reserved for future use.
    - name: DBClusterInstanceClass
      value: "{{ DBClusterInstanceClass }}"
      description: The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example db.m6gd.xlarge. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes and availability for your engine, see DB instance class in the Amazon RDS User Guide. This setting is required to create a Multi-AZ DB cluster. Valid for Cluster Type: Multi-AZ DB clusters only
      description: The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example db.m6gd.xlarge. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes and availability for your engine, see DB instance class in the Amazon RDS User Guide. This setting is required to create a Multi-AZ DB cluster. Valid for Cluster Type: Multi-AZ DB clusters only
    - name: AllocatedStorage
      value: {{ AllocatedStorage }}
      description: The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster. Valid for Cluster Type: Multi-AZ DB clusters only This setting is required to create a Multi-AZ DB cluster.
      description: The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster. Valid for Cluster Type: Multi-AZ DB clusters only This setting is required to create a Multi-AZ DB cluster.
    - name: StorageType
      value: "{{ StorageType }}"
      description: The storage type to associate with the DB cluster. For information on storage types for Aurora DB clusters, see Storage configurations for Amazon Aurora DB clusters. For information on storage types for Multi-AZ DB clusters, see Settings for creating Multi-AZ DB clusters. This setting is required to create a Multi-AZ DB cluster. When specified for a Multi-AZ DB cluster, a value for the Iops parameter is required. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Valid Values: Aurora DB clusters - aurora | aurora-iopt1 Multi-AZ DB clusters - io1 | io2 | gp3 Default: Aurora DB clusters - aurora Multi-AZ DB clusters - io1 When you create an Aurora DB cluster with the storage type set to aurora-iopt1, the storage type is returned in the response. The storage type isn't returned when you set it to aurora.
      description: The storage type to associate with the DB cluster. For information on storage types for Aurora DB clusters, see Storage configurations for Amazon Aurora DB clusters. For information on storage types for Multi-AZ DB clusters, see Settings for creating Multi-AZ DB clusters. This setting is required to create a Multi-AZ DB cluster. When specified for a Multi-AZ DB cluster, a value for the Iops parameter is required. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Valid Values: Aurora DB clusters - aurora | aurora-iopt1 Multi-AZ DB clusters - io1 | io2 | gp3 Default: Aurora DB clusters - aurora Multi-AZ DB clusters - io1 When you create an Aurora DB cluster with the storage type set to aurora-iopt1, the storage type is returned in the response. The storage type isn't returned when you set it to aurora.
    - name: Iops
      value: {{ Iops }}
      description: The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. For information about valid IOPS values, see Provisioned IOPS storage in the Amazon RDS User Guide. This setting is required to create a Multi-AZ DB cluster. Valid for Cluster Type: Multi-AZ DB clusters only Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB cluster.
      description: The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. For information about valid IOPS values, see Provisioned IOPS storage in the Amazon RDS User Guide. This setting is required to create a Multi-AZ DB cluster. Valid for Cluster Type: Multi-AZ DB clusters only Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB cluster.
    - name: PubliclyAccessible
      value: {{ PubliclyAccessible }}
      description: Specifies whether the DB cluster is publicly accessible. Valid for Cluster Type: Multi-AZ DB clusters only When the DB cluster is publicly accessible and you connect from outside of the DB cluster's virtual private cloud (VPC), its domain name system (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB cluster, the endpoint resolves to the private IP address. Access to the DB cluster is controlled by its security group settings. When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address. The default behavior when PubliclyAccessible is not specified depends on whether a DBSubnetGroup is specified. If DBSubnetGroup isn't specified, PubliclyAccessible defaults to true. If DBSubnetGroup is specified, PubliclyAccessible defaults to false unless the value of DBSubnetGroup is default, in which case PubliclyAccessible defaults to true. If PubliclyAccessible is true and the VPC that the DBSubnetGroup is in doesn't have an internet gateway attached to it, Amazon RDS returns an error.
      description: Specifies whether the DB cluster is publicly accessible. Valid for Cluster Type: Multi-AZ DB clusters only When the DB cluster is publicly accessible and you connect from outside of the DB cluster's virtual private cloud (VPC), its domain name system (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB cluster, the endpoint resolves to the private IP address. Access to the DB cluster is controlled by its security group settings. When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address. The default behavior when PubliclyAccessible is not specified depends on whether a DBSubnetGroup is specified. If DBSubnetGroup isn't specified, PubliclyAccessible defaults to true. If DBSubnetGroup is specified, PubliclyAccessible defaults to false unless the value of DBSubnetGroup is default, in which case PubliclyAccessible defaults to true. If PubliclyAccessible is true and the VPC that the DBSubnetGroup is in doesn't have an internet gateway attached to it, Amazon RDS returns an error.
    - name: AutoMinorVersionUpgrade
      value: {{ AutoMinorVersionUpgrade }}
      description: Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB cluster. For more information about automatic minor version upgrades, see Automatically upgrading the minor engine version.
      description: Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB cluster. For more information about automatic minor version upgrades, see Automatically upgrading the minor engine version.
    - name: DeletionProtection
      value: {{ DeletionProtection }}
      description: Specifies whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
      description: Specifies whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    - name: GlobalClusterIdentifier
      value: "{{ GlobalClusterIdentifier }}"
      description: The global cluster ID of an Aurora cluster that becomes the primary cluster in the new global database cluster. Valid for Cluster Type: Aurora DB clusters only
      description: The global cluster ID of an Aurora cluster that becomes the primary cluster in the new global database cluster. Valid for Cluster Type: Aurora DB clusters only
    - name: EnableHttpEndpoint
      value: {{ EnableHttpEndpoint }}
      description: Specifies whether to enable the HTTP endpoint for the DB cluster. By default, the HTTP endpoint isn't enabled. When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the DB cluster. You can also query your database from inside the RDS console with the RDS query editor. For more information, see Using RDS Data API in the Amazon Aurora User Guide. Valid for Cluster Type: Aurora DB clusters only
      description: Specifies whether to enable the HTTP endpoint for the DB cluster. By default, the HTTP endpoint isn't enabled. When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the DB cluster. You can also query your database from inside the RDS console with the RDS query editor. For more information, see Using RDS Data API in the Amazon Aurora User Guide. Valid for Cluster Type: Aurora DB clusters only
    - name: CopyTagsToSnapshot
      value: {{ CopyTagsToSnapshot }}
      description: Specifies whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
      description: Specifies whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    - name: Domain
      value: "{{ Domain }}"
      description: The Active Directory directory ID to create the DB cluster in. For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster. For more information, see Kerberos authentication in the Amazon Aurora User Guide. Valid for Cluster Type: Aurora DB clusters only
      description: The Active Directory directory ID to create the DB cluster in. For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster. For more information, see Kerberos authentication in the Amazon Aurora User Guide. Valid for Cluster Type: Aurora DB clusters only
    - name: DomainIAMRoleName
      value: "{{ DomainIAMRoleName }}"
      description: The name of the IAM role to use when making API calls to the Directory Service. Valid for Cluster Type: Aurora DB clusters only
      description: The name of the IAM role to use when making API calls to the Directory Service. Valid for Cluster Type: Aurora DB clusters only
    - name: EnableGlobalWriteForwarding
      value: {{ EnableGlobalWriteForwarding }}
      description: Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database. You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by a global cluster API operation, but it does nothing until then. Valid for Cluster Type: Aurora DB clusters only
      description: Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database. You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by a global cluster API operation, but it does nothing until then. Valid for Cluster Type: Aurora DB clusters only
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: The network type of the DB cluster. The network type is determined by the DBSubnetGroup specified for the DB cluster. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see Working with a DB instance in a VPC in the Amazon Aurora User Guide. Valid for Cluster Type: Aurora DB clusters only Valid Values: IPV4 | DUAL
      description: The network type of the DB cluster. The network type is determined by the DBSubnetGroup specified for the DB cluster. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see Working with a DB instance in a VPC in the Amazon Aurora User Guide. Valid for Cluster Type: Aurora DB clusters only Valid Values: IPV4 | DUAL
    - name: ServerlessV2ScalingConfiguration
      value: "{{ ServerlessV2ScalingConfiguration }}"
    - name: MonitoringInterval
      value: {{ MonitoringInterval }}
      description: The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify 0. If MonitoringRoleArn is specified, also set MonitoringInterval to a value other than 0. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Valid Values: 0 | 1 | 5 | 10 | 15 | 30 | 60 Default: 0
      description: The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify 0. If MonitoringRoleArn is specified, also set MonitoringInterval to a value other than 0. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Valid Values: 0 | 1 | 5 | 10 | 15 | 30 | 60 Default: 0
    - name: MonitoringRoleArn
      value: "{{ MonitoringRoleArn }}"
      description: The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. An example is arn:aws:iam:123456789012:role/emaccess. For information on creating a monitoring role, see Setting up and enabling Enhanced Monitoring in the Amazon RDS User Guide. If MonitoringInterval is set to a value other than 0, supply a MonitoringRoleArn value. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
      description: The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. An example is arn:aws:iam:123456789012:role/emaccess. For information on creating a monitoring role, see Setting up and enabling Enhanced Monitoring in the Amazon RDS User Guide. If MonitoringInterval is set to a value other than 0, supply a MonitoringRoleArn value. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    - name: DatabaseInsightsMode
      value: "{{ DatabaseInsightsMode }}"
      description: The mode of Database Insights to enable for the DB cluster. If you set this value to advanced, you must also set the PerformanceInsightsEnabled parameter to true and the PerformanceInsightsRetentionPeriod parameter to 465. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
      description: The mode of Database Insights to enable for the DB cluster. If you set this value to advanced, you must also set the PerformanceInsightsEnabled parameter to true and the PerformanceInsightsRetentionPeriod parameter to 465. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    - name: EnablePerformanceInsights
      value: {{ EnablePerformanceInsights }}
      description: Specifies whether to turn on Performance Insights for the DB cluster. For more information, see Using Amazon Performance Insights in the Amazon RDS User Guide. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
      description: Specifies whether to turn on Performance Insights for the DB cluster. For more information, see Using Amazon Performance Insights in the Amazon RDS User Guide. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    - name: PerformanceInsightsKMSKeyId
      value: "{{ PerformanceInsightsKMSKeyId }}"
      description: The Amazon Web Services KMS key identifier for encryption of Performance Insights data. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you don't specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
      description: The Amazon Web Services KMS key identifier for encryption of Performance Insights data. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you don't specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    - name: PerformanceInsightsRetentionPeriod
      value: {{ PerformanceInsightsRetentionPeriod }}
      description: The number of days to retain Performance Insights data. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Valid Values: 7 month * 31, where month is a number of months from 1-23. Examples: 93 (3 months * 31), 341 (11 months * 31), 589 (19 months * 31) 731 Default: 7 days If you specify a retention period that isn't valid, such as 94, Amazon RDS issues an error.
      description: The number of days to retain Performance Insights data. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Valid Values: 7 month * 31, where month is a number of months from 1-23. Examples: 93 (3 months * 31), 341 (11 months * 31), 589 (19 months * 31) 731 Default: 7 days If you specify a retention period that isn't valid, such as 94, Amazon RDS issues an error.
    - name: EnableLimitlessDatabase
      value: {{ EnableLimitlessDatabase }}
      description: Specifies whether to enable Aurora Limitless Database. You must enable Aurora Limitless Database to create a DB shard group. Valid for: Aurora DB clusters only This setting is no longer used. Instead use the ClusterScalabilityType setting.
      description: Specifies whether to enable Aurora Limitless Database. You must enable Aurora Limitless Database to create a DB shard group. Valid for: Aurora DB clusters only This setting is no longer used. Instead use the ClusterScalabilityType setting.
    - name: ClusterScalabilityType
      value: "{{ ClusterScalabilityType }}"
      description: Specifies the scalability mode of the Aurora DB cluster. When set to limitless, the cluster operates as an Aurora Limitless Database. When set to standard (the default), the cluster uses normal DB instance creation. Valid for: Aurora DB clusters only You can't modify this setting after you create the DB cluster.
      description: Specifies the scalability mode of the Aurora DB cluster. When set to limitless, the cluster operates as an Aurora Limitless Database. When set to standard (the default), the cluster uses normal DB instance creation. Valid for: Aurora DB clusters only You can't modify this setting after you create the DB cluster.
    - name: DBSystemId
      value: "{{ DBSystemId }}"
      description: Reserved for future use.
      description: Reserved for future use.
    - name: ManageMasterUserPassword
      value: {{ ManageMasterUserPassword }}
      description: Specifies whether to manage the master user password with Amazon Web Services Secrets Manager. For more information, see Password management with Amazon Web Services Secrets Manager in the Amazon RDS User Guide and Password management with Amazon Web Services Secrets Manager in the Amazon Aurora User Guide. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Constraints: Can't manage the master user password with Amazon Web Services Secrets Manager if MasterUserPassword is specified.
      description: Specifies whether to manage the master user password with Amazon Web Services Secrets Manager. For more information, see Password management with Amazon Web Services Secrets Manager in the Amazon RDS User Guide and Password management with Amazon Web Services Secrets Manager in the Amazon Aurora User Guide. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Constraints: Can't manage the master user password with Amazon Web Services Secrets Manager if MasterUserPassword is specified.
    - name: EnableLocalWriteForwarding
      value: {{ EnableLocalWriteForwarding }}
      description: Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster. By default, write operations aren't allowed on reader DB instances. Valid for: Aurora DB clusters only
      description: Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster. By default, write operations aren't allowed on reader DB instances. Valid for: Aurora DB clusters only
    - name: MasterUserSecretKmsKeyId
      value: "{{ MasterUserSecretKmsKeyId }}"
      description: The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager. This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB cluster. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If you don't specify MasterUserSecretKmsKeyId, then the aws/secretsmanager KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the aws/secretsmanager KMS key to encrypt the secret, and you must use a customer managed KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
      description: The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager. This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB cluster. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If you don't specify MasterUserSecretKmsKeyId, then the aws/secretsmanager KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the aws/secretsmanager KMS key to encrypt the secret, and you must use a customer managed KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    - name: CACertificateIdentifier
      value: "{{ CACertificateIdentifier }}"
      description: The CA certificate identifier to use for the DB cluster's server certificate. For more information, see Using SSL/TLS to encrypt a connection to a DB instance in the Amazon RDS User Guide. Valid for Cluster Type: Multi-AZ DB clusters
      description: The CA certificate identifier to use for the DB cluster's server certificate. For more information, see Using SSL/TLS to encrypt a connection to a DB instance in the Amazon RDS User Guide. Valid for Cluster Type: Multi-AZ DB clusters
    - name: EngineLifecycleSupport
      value: "{{ EngineLifecycleSupport }}"
      description: The life cycle type for this DB cluster. By default, this value is set to open-source-rds-extended-support, which enrolls your DB cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to open-source-rds-extended-support-disabled. In this case, creating the DB cluster will fail if the DB major version is past its end of standard support date. You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections: Amazon Aurora - Amazon RDS Extended Support with Amazon Aurora in the Amazon Aurora User Guide Amazon RDS - Amazon RDS Extended Support with Amazon RDS in the Amazon RDS User Guide Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Valid Values: open-source-rds-extended-support | open-source-rds-extended-support-disabled Default: open-source-rds-extended-support
      description: The life cycle type for this DB cluster. By default, this value is set to open-source-rds-extended-support, which enrolls your DB cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to open-source-rds-extended-support-disabled. In this case, creating the DB cluster will fail if the DB major version is past its end of standard support date. You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections: Amazon Aurora - Amazon RDS Extended Support with Amazon Aurora in the Amazon Aurora User Guide Amazon RDS - Amazon RDS Extended Support with Amazon RDS in the Amazon RDS User Guide Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters Valid Values: open-source-rds-extended-support | open-source-rds-extended-support-disabled Default: open-source-rds-extended-support
    - name: TagSpecifications
      value: "{{ TagSpecifications }}"
      description: Tags to assign to resources associated with the DB cluster. Valid Values: cluster-auto-backup - The DB cluster's automated backup.
      description: Tags to assign to resources associated with the DB cluster. Valid Values: cluster-auto-backup - The DB cluster's automated backup.
    - name: MasterUserAuthenticationType
      value: "{{ MasterUserAuthenticationType }}"
      description: Specifies the authentication type for the master user. With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB cluster. You can specify one of the following values: password - Use standard database authentication with a password. iam-db-auth - Use IAM database authentication for the master user. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters This option is only valid for RDS for PostgreSQL and Aurora PostgreSQL engines.
      description: Specifies the authentication type for the master user. With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB cluster. You can specify one of the following values: password - Use standard database authentication with a password. iam-db-auth - Use IAM database authentication for the master user. Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters This option is only valid for RDS for PostgreSQL and Aurora PostgreSQL engines.
    - name: WithExpressConfiguration
      value: {{ WithExpressConfiguration }}
      description: Specifies to create an Aurora DB Cluster with express configuration in seconds. Express configuration provides a cluster with a writer instance and feature specific values set to all other input parameters of this API. Valid for Cluster Type: Aurora DB clusters
      description: Specifies to create an Aurora DB Cluster with express configuration in seconds. Express configuration provides a cluster with a writer instance and feature specific values set to all other input parameters of this API. Valid for Cluster Type: Aurora DB clusters
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

Associates an Identity and Access Management (IAM) role with a DB cluster.

```sql
UPDATE aws.rds.db_clusters
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

Modifies the settings of an Amazon Aurora DB cluster or a Multi-AZ DB cluster. You can change one or more settings by specifying these parameters and the new values in the request. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
UPDATE aws.rds.db_clusters
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
AND BacktrackWindow = '{{ BacktrackWindow}}'
AND CloudwatchLogsExportConfiguration = '{{ CloudwatchLogsExportConfiguration}}'
AND EngineVersion = '{{ EngineVersion}}'
AND AllowMajorVersionUpgrade = {{ AllowMajorVersionUpgrade}}
AND DBInstanceParameterGroupName = '{{ DBInstanceParameterGroupName}}'
AND Domain = '{{ Domain}}'
AND DomainIAMRoleName = '{{ DomainIAMRoleName}}'
AND ScalingConfiguration = '{{ ScalingConfiguration}}'
AND DeletionProtection = {{ DeletionProtection}}
AND EnableHttpEndpoint = {{ EnableHttpEndpoint}}
AND CopyTagsToSnapshot = {{ CopyTagsToSnapshot}}
AND EnableGlobalWriteForwarding = {{ EnableGlobalWriteForwarding}}
AND DBClusterInstanceClass = '{{ DBClusterInstanceClass}}'
AND AllocatedStorage = '{{ AllocatedStorage}}'
AND StorageType = '{{ StorageType}}'
AND Iops = '{{ Iops}}'
AND AutoMinorVersionUpgrade = {{ AutoMinorVersionUpgrade}}
AND NetworkType = '{{ NetworkType}}'
AND ServerlessV2ScalingConfiguration = '{{ ServerlessV2ScalingConfiguration}}'
AND MonitoringInterval = '{{ MonitoringInterval}}'
AND MonitoringRoleArn = '{{ MonitoringRoleArn}}'
AND DatabaseInsightsMode = '{{ DatabaseInsightsMode}}'
AND EnablePerformanceInsights = {{ EnablePerformanceInsights}}
AND PerformanceInsightsKMSKeyId = '{{ PerformanceInsightsKMSKeyId}}'
AND PerformanceInsightsRetentionPeriod = '{{ PerformanceInsightsRetentionPeriod}}'
AND ManageMasterUserPassword = {{ ManageMasterUserPassword}}
AND RotateMasterUserPassword = {{ RotateMasterUserPassword}}
AND EnableLocalWriteForwarding = {{ EnableLocalWriteForwarding}}
AND MasterUserSecretKmsKeyId = '{{ MasterUserSecretKmsKeyId}}'
AND EngineMode = '{{ EngineMode}}'
AND AllowEngineModeChange = {{ AllowEngineModeChange}}
AND AwsBackupRecoveryPointArn = '{{ AwsBackupRecoveryPointArn}}'
AND EnableLimitlessDatabase = {{ EnableLimitlessDatabase}}
AND CACertificateIdentifier = '{{ CACertificateIdentifier}}'
AND MasterUserAuthenticationType = '{{ MasterUserAuthenticationType}}'
RETURNING
activity_stream_kinesis_stream_name,
activity_stream_kms_key_id,
activity_stream_mode,
activity_stream_status,
allocated_storage,
associated_roles,
auto_minor_version_upgrade,
automatic_restart_time,
availability_zones,
aws_backup_recovery_point_arn,
backtrack_consumed_change_records,
backtrack_window,
backup_retention_period,
capacity,
certificate_details,
character_set_name,
clone_group_id,
cluster_create_time,
cluster_scalability_type,
copy_tags_to_snapshot,
cross_account_clone,
custom_endpoints,
db_cluster_arn,
db_cluster_identifier,
db_cluster_instance_class,
db_cluster_members,
db_cluster_option_group_memberships,
db_cluster_parameter_group,
db_subnet_group,
db_system_id,
database_insights_mode,
database_name,
db_cluster_resource_id,
deletion_protection,
domain_memberships,
earliest_backtrack_time,
earliest_restorable_time,
enabled_cloudwatch_logs_exports,
endpoint,
engine,
engine_lifecycle_support,
engine_mode,
engine_version,
global_cluster_identifier,
global_write_forwarding_requested,
global_write_forwarding_status,
hosted_zone_id,
http_endpoint_enabled,
iam_database_authentication_enabled,
io_optimized_next_allowed_modification_time,
internet_access_gateway_enabled,
iops,
kms_key_id,
latest_restorable_time,
limitless_database,
local_write_forwarding_status,
master_user_secret,
master_username,
monitoring_interval,
monitoring_role_arn,
multi_az,
network_type,
pending_modified_values,
percent_progress,
performance_insights_enabled,
performance_insights_kms_key_id,
performance_insights_retention_period,
port,
preferred_backup_window,
preferred_maintenance_window,
publicly_accessible,
rds_custom_cluster_configuration,
read_replica_identifiers,
reader_endpoint,
replication_source_identifier,
scaling_configuration_info,
serverless_v2_platform_version,
serverless_v2_scaling_configuration,
status,
status_infos,
storage_encrypted,
storage_encryption_type,
storage_throughput,
storage_type,
tag_list,
upgrade_rollout_order,
vpc_networking_enabled,
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

The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted. If you're deleting a Multi-AZ DB cluster with read replicas, all cluster members are terminated and read replicas are promoted to standalone instances. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
DELETE FROM aws.rds.db_clusters
WHERE DBClusterIdentifier = '{{ DBClusterIdentifier }}' --required
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
    defaultValue="backtrack_db_cluster"
    values={[
        { label: 'backtrack_db_cluster', value: 'backtrack_db_cluster' },
        { label: 'copy_db_cluster_snapshot', value: 'copy_db_cluster_snapshot' },
        { label: 'failover_db_cluster', value: 'failover_db_cluster' },
        { label: 'modify_current_db_cluster_capacity', value: 'modify_current_db_cluster_capacity' },
        { label: 'promote_read_replica_db_cluster', value: 'promote_read_replica_db_cluster' },
        { label: 'reboot_db_cluster', value: 'reboot_db_cluster' },
        { label: 'remove_role_from_db_cluster', value: 'remove_role_from_db_cluster' },
        { label: 'restore_db_cluster_from_s3', value: 'restore_db_cluster_from_s3' },
        { label: 'restore_db_cluster_from_snapshot', value: 'restore_db_cluster_from_snapshot' },
        { label: 'restore_db_cluster_to_point_in_time', value: 'restore_db_cluster_to_point_in_time' },
        { label: 'start_db_cluster', value: 'start_db_cluster' },
        { label: 'stop_db_cluster', value: 'stop_db_cluster' }
    ]}
>
<TabItem value="backtrack_db_cluster">

Backtracks a DB cluster to a specific time, without creating a new DB cluster. For more information on backtracking, see Backtracking an Aurora DB Cluster in the Amazon Aurora User Guide. This action applies only to Aurora MySQL DB clusters.

```sql
EXEC aws.rds.db_clusters.backtrack_db_cluster 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@BacktrackTo='{{ BacktrackTo }}' --required, 
@region='{{ region }}' --required, 
@Force={{ Force }}, 
@UseEarliestTimeOnPointInTimeUnavailable={{ UseEarliestTimeOnPointInTimeUnavailable }}
;
```
</TabItem>
<TabItem value="copy_db_cluster_snapshot">

Copies a snapshot of a DB cluster. To copy a DB cluster snapshot from a shared manual DB cluster snapshot, SourceDBClusterSnapshotIdentifier must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot. You can copy an encrypted DB cluster snapshot from another Amazon Web Services Region. In that case, the Amazon Web Services Region where you call the CopyDBClusterSnapshot operation is the destination Amazon Web Services Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another Amazon Web Services Region, you must provide the following values: KmsKeyId - The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region. TargetDBClusterSnapshotIdentifier - The identifier for the new copy of the DB cluster snapshot in the destination Amazon Web Services Region. SourceDBClusterSnapshotIdentifier - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the ARN format for the source Amazon Web Services Region and is the same value as the SourceDBClusterSnapshotIdentifier in the presigned URL. To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified by TargetDBClusterSnapshotIdentifier while that DB cluster snapshot is in "copying" status. For more information on copying encrypted Amazon Aurora DB cluster snapshots from one Amazon Web Services Region to another, see Copying a Snapshot in the Amazon Aurora User Guide. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
EXEC aws.rds.db_clusters.copy_db_cluster_snapshot 
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
<TabItem value="failover_db_cluster">

Forces a failover for a DB cluster. For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer). For a Multi-AZ DB cluster, after RDS terminates the primary DB instance, the internal monitoring system detects that the primary DB instance is unhealthy and promotes a readable standby (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer). Failover times are typically less than 35 seconds. An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists, when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby DB instance when the primary DB instance fails. To simulate a failure of a primary instance for testing, you can force a failover. Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
EXEC aws.rds.db_clusters.failover_db_cluster 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@region='{{ region }}' --required, 
@TargetDBInstanceIdentifier='{{ TargetDBInstanceIdentifier }}'
;
```
</TabItem>
<TabItem value="modify_current_db_cluster_capacity">

Set the capacity of an Aurora Serverless v1 DB cluster to a specific value. Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call ModifyCurrentDBClusterCapacity to set the capacity explicitly. After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down. For more information about Aurora Serverless v1, see Using Amazon Aurora Serverless v1 in the Amazon Aurora User Guide. If you call ModifyCurrentDBClusterCapacity with the default TimeoutAction, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points, see Autoscaling for Aurora Serverless v1 in the Amazon Aurora User Guide. This operation only applies to Aurora Serverless v1 DB clusters.

```sql
EXEC aws.rds.db_clusters.modify_current_db_cluster_capacity 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@region='{{ region }}' --required, 
@Capacity='{{ Capacity }}', 
@SecondsBeforeTimeout='{{ SecondsBeforeTimeout }}', 
@TimeoutAction='{{ TimeoutAction }}'
;
```
</TabItem>
<TabItem value="promote_read_replica_db_cluster">

Promotes a read replica DB cluster to a standalone DB cluster.

```sql
EXEC aws.rds.db_clusters.promote_read_replica_db_cluster 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="reboot_db_cluster">

You might need to reboot your DB cluster, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB cluster parameter group associated with the DB cluster, reboot the DB cluster for the changes to take effect. Rebooting a DB cluster restarts the database engine service. Rebooting a DB cluster results in a momentary outage, during which the DB cluster status is set to rebooting. Use this operation only for a non-Aurora Multi-AZ DB cluster. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
EXEC aws.rds.db_clusters.reboot_db_cluster 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="remove_role_from_db_cluster">

Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a DB cluster. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
EXEC aws.rds.db_clusters.remove_role_from_db_cluster 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@RoleArn='{{ RoleArn }}' --required, 
@region='{{ region }}' --required, 
@FeatureName='{{ FeatureName }}'
;
```
</TabItem>
<TabItem value="restore_db_cluster_from_s3">

Creates an Amazon Aurora DB cluster from MySQL data stored in an Amazon S3 bucket. Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be created using the Percona XtraBackup utility as described in Migrating Data from MySQL by Using an Amazon S3 Bucket in the Amazon Aurora User Guide. This operation only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the CreateDBInstance operation to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in DBClusterIdentifier. You can create DB instances only after the RestoreDBClusterFromS3 operation has completed and the DB cluster is available. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. This operation only applies to Aurora DB clusters. The source DB engine must be MySQL.

```sql
EXEC aws.rds.db_clusters.restore_db_cluster_from_s3 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@MasterUsername='{{ MasterUsername }}' --required, 
@SourceEngine='{{ SourceEngine }}' --required, 
@SourceEngineVersion='{{ SourceEngineVersion }}' --required, 
@S3BucketName='{{ S3BucketName }}' --required, 
@S3IngestionRoleArn='{{ S3IngestionRoleArn }}' --required, 
@region='{{ region }}' --required, 
@AvailabilityZones='{{ AvailabilityZones }}', 
@BackupRetentionPeriod='{{ BackupRetentionPeriod }}', 
@CharacterSetName='{{ CharacterSetName }}', 
@DatabaseName='{{ DatabaseName }}', 
@DBClusterParameterGroupName='{{ DBClusterParameterGroupName }}', 
@VpcSecurityGroupIds='{{ VpcSecurityGroupIds }}', 
@DBSubnetGroupName='{{ DBSubnetGroupName }}', 
@Engine='{{ Engine }}', 
@EngineVersion='{{ EngineVersion }}', 
@Port='{{ Port }}', 
@MasterUserPassword='{{ MasterUserPassword }}', 
@OptionGroupName='{{ OptionGroupName }}', 
@PreferredBackupWindow='{{ PreferredBackupWindow }}', 
@PreferredMaintenanceWindow='{{ PreferredMaintenanceWindow }}', 
@Tags='{{ Tags }}', 
@StorageEncrypted={{ StorageEncrypted }}, 
@KmsKeyId='{{ KmsKeyId }}', 
@EnableIAMDatabaseAuthentication={{ EnableIAMDatabaseAuthentication }}, 
@S3Prefix='{{ S3Prefix }}', 
@BacktrackWindow='{{ BacktrackWindow }}', 
@EnableCloudwatchLogsExports='{{ EnableCloudwatchLogsExports }}', 
@DeletionProtection={{ DeletionProtection }}, 
@CopyTagsToSnapshot={{ CopyTagsToSnapshot }}, 
@Domain='{{ Domain }}', 
@DomainIAMRoleName='{{ DomainIAMRoleName }}', 
@StorageType='{{ StorageType }}', 
@NetworkType='{{ NetworkType }}', 
@ServerlessV2ScalingConfiguration='{{ ServerlessV2ScalingConfiguration }}', 
@ManageMasterUserPassword={{ ManageMasterUserPassword }}, 
@MasterUserSecretKmsKeyId='{{ MasterUserSecretKmsKeyId }}', 
@EngineLifecycleSupport='{{ EngineLifecycleSupport }}', 
@TagSpecifications='{{ TagSpecifications }}'
;
```
</TabItem>
<TabItem value="restore_db_cluster_from_snapshot">

Creates a new DB cluster from a DB snapshot or DB cluster snapshot. The target DB cluster is created from the source snapshot with a default configuration. If you don't specify a security group, the new DB cluster is associated with the default security group. You can use the EnableVPCNetworking and EnableInternetAccessGateway parameters together to restore an Aurora PostgreSQL cluster without VPC networking and with internet-based connectivity. These two parameters must always be specified together. Set EnableVPCNetworking to false to disable the VPC network interface (ENI) for the cluster. EnableInternetAccessGateway enables internet-based connectivity through an internet access gateway. IAM database authentication is required and must be enabled using EnableIAMDatabaseAuthentication. Once the cluster is restored, you need to modify the DB cluster to update MasterUserAuthenticationType to iam-db-auth. This operation only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the CreateDBInstance operation to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in DBClusterIdentifier. You can create DB instances only after the RestoreDBClusterFromSnapshot operation has completed and the DB cluster is available. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
EXEC aws.rds.db_clusters.restore_db_cluster_from_snapshot 
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
@BacktrackWindow='{{ BacktrackWindow }}', 
@EnableCloudwatchLogsExports='{{ EnableCloudwatchLogsExports }}', 
@EngineMode='{{ EngineMode }}', 
@ScalingConfiguration='{{ ScalingConfiguration }}', 
@DBClusterParameterGroupName='{{ DBClusterParameterGroupName }}', 
@DeletionProtection={{ DeletionProtection }}, 
@CopyTagsToSnapshot={{ CopyTagsToSnapshot }}, 
@Domain='{{ Domain }}', 
@DomainIAMRoleName='{{ DomainIAMRoleName }}', 
@DBClusterInstanceClass='{{ DBClusterInstanceClass }}', 
@StorageType='{{ StorageType }}', 
@Iops='{{ Iops }}', 
@PubliclyAccessible={{ PubliclyAccessible }}, 
@NetworkType='{{ NetworkType }}', 
@ServerlessV2ScalingConfiguration='{{ ServerlessV2ScalingConfiguration }}', 
@RdsCustomClusterConfiguration='{{ RdsCustomClusterConfiguration }}', 
@MonitoringInterval='{{ MonitoringInterval }}', 
@MonitoringRoleArn='{{ MonitoringRoleArn }}', 
@EnablePerformanceInsights={{ EnablePerformanceInsights }}, 
@PerformanceInsightsKMSKeyId='{{ PerformanceInsightsKMSKeyId }}', 
@PerformanceInsightsRetentionPeriod='{{ PerformanceInsightsRetentionPeriod }}', 
@BackupRetentionPeriod='{{ BackupRetentionPeriod }}', 
@PreferredBackupWindow='{{ PreferredBackupWindow }}', 
@EngineLifecycleSupport='{{ EngineLifecycleSupport }}', 
@TagSpecifications='{{ TagSpecifications }}', 
@EnableVPCNetworking={{ EnableVPCNetworking }}, 
@EnableInternetAccessGateway={{ EnableInternetAccessGateway }}
;
```
</TabItem>
<TabItem value="restore_db_cluster_to_point_in_time">

Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before LatestRestorableTime for up to BackupRetentionPeriod days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group. Unless the RestoreType is set to copy-on-write, the restore may occur in a different Availability Zone (AZ) from the original DB cluster. The AZ where RDS restores the DB cluster depends on the AZs in the specified subnet group. You can use the EnableVPCNetworking and EnableInternetAccessGateway parameters together to restore an Aurora PostgreSQL cluster without VPC networking and with internet-based connectivity. These two parameters must always be specified together. Set EnableVPCNetworking to false to disable the VPC network interface (ENI) for the cluster. EnableInternetAccessGateway enables internet-based connectivity through an internet access gateway. IAM database authentication is required and must be enabled using EnableIAMDatabaseAuthentication. Once the cluster is restored, you need to modify the DB cluster to update MasterUserAuthenticationType to iam-db-auth. For Aurora, this operation only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the CreateDBInstance operation to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in DBClusterIdentifier. You can create DB instances only after the RestoreDBClusterToPointInTime operation has completed and the DB cluster is available. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
EXEC aws.rds.db_clusters.restore_db_cluster_to_point_in_time 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@region='{{ region }}' --required, 
@RestoreType='{{ RestoreType }}', 
@SourceDBClusterIdentifier='{{ SourceDBClusterIdentifier }}', 
@RestoreToTime='{{ RestoreToTime }}', 
@UseLatestRestorableTime={{ UseLatestRestorableTime }}, 
@Port='{{ Port }}', 
@DBSubnetGroupName='{{ DBSubnetGroupName }}', 
@OptionGroupName='{{ OptionGroupName }}', 
@VpcSecurityGroupIds='{{ VpcSecurityGroupIds }}', 
@Tags='{{ Tags }}', 
@KmsKeyId='{{ KmsKeyId }}', 
@EnableIAMDatabaseAuthentication={{ EnableIAMDatabaseAuthentication }}, 
@BacktrackWindow='{{ BacktrackWindow }}', 
@EnableCloudwatchLogsExports='{{ EnableCloudwatchLogsExports }}', 
@DBClusterParameterGroupName='{{ DBClusterParameterGroupName }}', 
@DeletionProtection={{ DeletionProtection }}, 
@CopyTagsToSnapshot={{ CopyTagsToSnapshot }}, 
@Domain='{{ Domain }}', 
@DomainIAMRoleName='{{ DomainIAMRoleName }}', 
@DBClusterInstanceClass='{{ DBClusterInstanceClass }}', 
@StorageType='{{ StorageType }}', 
@PubliclyAccessible={{ PubliclyAccessible }}, 
@Iops='{{ Iops }}', 
@NetworkType='{{ NetworkType }}', 
@SourceDbClusterResourceId='{{ SourceDbClusterResourceId }}', 
@ServerlessV2ScalingConfiguration='{{ ServerlessV2ScalingConfiguration }}', 
@ScalingConfiguration='{{ ScalingConfiguration }}', 
@EngineMode='{{ EngineMode }}', 
@RdsCustomClusterConfiguration='{{ RdsCustomClusterConfiguration }}', 
@MonitoringInterval='{{ MonitoringInterval }}', 
@MonitoringRoleArn='{{ MonitoringRoleArn }}', 
@EnablePerformanceInsights={{ EnablePerformanceInsights }}, 
@PerformanceInsightsKMSKeyId='{{ PerformanceInsightsKMSKeyId }}', 
@PerformanceInsightsRetentionPeriod='{{ PerformanceInsightsRetentionPeriod }}', 
@BackupRetentionPeriod='{{ BackupRetentionPeriod }}', 
@PreferredBackupWindow='{{ PreferredBackupWindow }}', 
@EngineLifecycleSupport='{{ EngineLifecycleSupport }}', 
@TagSpecifications='{{ TagSpecifications }}', 
@EnableVPCNetworking={{ EnableVPCNetworking }}, 
@EnableInternetAccessGateway={{ EnableInternetAccessGateway }}
;
```
</TabItem>
<TabItem value="start_db_cluster">

Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster operation. For more information, see Stopping and Starting an Aurora Cluster in the Amazon Aurora User Guide. This operation only applies to Aurora DB clusters.

```sql
EXEC aws.rds.db_clusters.start_db_cluster 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_db_cluster">

Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary. For more information, see Stopping and Starting an Aurora Cluster in the Amazon Aurora User Guide. This operation only applies to Aurora DB clusters.

```sql
EXEC aws.rds.db_clusters.stop_db_cluster 
@DBClusterIdentifier='{{ DBClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
