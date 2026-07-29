--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - redshift
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_clusters"
    values={[
        { label: 'describe_clusters', value: 'describe_clusters' }
    ]}
>
<TabItem value="describe_clusters">

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
    <td><CopyableCode code="allow_version_upgrade" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value that, if true, indicates that major version upgrades will be applied automatically to the cluster during the maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="aqua_configuration" /></td>
    <td><code>string</code></td>
    <td>This field is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).</td>
</tr>
<tr>
    <td><CopyableCode code="automated_snapshot_retention_period" /></td>
    <td><code>integer</code></td>
    <td>The number of days that automatic cluster snapshots are retained.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The name of the Availability Zone in which the cluster is located.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_relocation_status" /></td>
    <td><code>string</code></td>
    <td>Describes the status of the Availability Zone relocation operation.</td>
</tr>
<tr>
    <td><CopyableCode code="catalog_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Glue data catalog associated with the cluster enabled with Amazon Redshift federated permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_availability_status" /></td>
    <td><code>string</code></td>
    <td>The availability status of the cluster for queries. Possible values are the following: Available - The cluster is available for queries. Unavailable - The cluster is not available for queries. Maintenance - The cluster is intermittently available for queries due to maintenance activities. Modifying - The cluster is intermittently available for queries due to changes that modify the cluster. Failed - The cluster failed and is not available for queries.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_create_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_namespace_arn" /></td>
    <td><code>string</code></td>
    <td>The namespace Amazon Resource Name (ARN) of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_nodes" /></td>
    <td><code>string</code></td>
    <td>The nodes in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_parameter_groups" /></td>
    <td><code>string</code></td>
    <td>The list of cluster parameter groups that are associated with this cluster. Each parameter group in the list is returned with its status.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_public_key" /></td>
    <td><code>string</code></td>
    <td>The public key for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_revision_number" /></td>
    <td><code>string</code></td>
    <td>The specific revision number of the database in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_security_groups" /></td>
    <td><code>string</code></td>
    <td>A list of cluster security group that are associated with the cluster. Each security group is represented by an element that contains ClusterSecurityGroup.Name and ClusterSecurityGroup.Status subelements. Cluster security groups are used when the cluster is not created in an Amazon Virtual Private Cloud (VPC). Clusters that are created in a VPC use VPC security groups, which are listed by the VpcSecurityGroups parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_snapshot_copy_status" /></td>
    <td><code>string</code></td>
    <td>A value that returns the destination region and retention period that are configured for cross-region snapshot copy.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_status" /></td>
    <td><code>string</code></td>
    <td>The current state of the cluster. Possible values are the following: available available, prep-for-resize available, resize-cleanup cancelling-resize creating deleting final-snapshot hardware-failure incompatible-hsm incompatible-network incompatible-parameters incompatible-restore modifying paused rebooting renaming resizing rotating-keys storage-full updating-hsm</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_subnet_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the subnet group that is associated with the cluster. This parameter is valid only when the cluster is in a VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_version" /></td>
    <td><code>string</code></td>
    <td>The version ID of the Amazon Redshift engine that is running on the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain_certificate_arn" /></td>
    <td><code>string</code></td>
    <td>The certificate Amazon Resource Name (ARN) for the custom domain name.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain_certificate_expiry_date" /></td>
    <td><code>string</code></td>
    <td>The expiration date for the certificate associated with the custom domain name.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain_name" /></td>
    <td><code>string</code></td>
    <td>The custom domain name associated with the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_name" /></td>
    <td><code>string</code></td>
    <td>The name of the initial database that was created when the cluster was created. This same name is returned for the life of the cluster. If an initial database was not specified, a database named devdev was created by default.</td>
</tr>
<tr>
    <td><CopyableCode code="data_transfer_progress" /></td>
    <td><code>string</code></td>
    <td>Describes the status of a cluster while it is in the process of resizing with an incremental resize.</td>
</tr>
<tr>
    <td><CopyableCode code="default_iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the IAM role set as default for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="deferred_maintenance_windows" /></td>
    <td><code>string</code></td>
    <td>Describes a group of DeferredMaintenanceWindow objects.</td>
</tr>
<tr>
    <td><CopyableCode code="elastic_ip_status" /></td>
    <td><code>string</code></td>
    <td>The status of the elastic IP (EIP) address.</td>
</tr>
<tr>
    <td><CopyableCode code="elastic_resize_number_of_node_options" /></td>
    <td><code>string</code></td>
    <td>The number of nodes that you can resize the cluster to with the elastic resize method.</td>
</tr>
<tr>
    <td><CopyableCode code="encrypted" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value that, if true, indicates that data in the cluster is encrypted at rest.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The connection endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="enhanced_vpc_routing" /></td>
    <td><code>boolean</code></td>
    <td>An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see Enhanced VPC Routing in the Amazon Redshift Cluster Management Guide. If this option is true, enhanced VPC routing is enabled. Default: false</td>
</tr>
<tr>
    <td><CopyableCode code="expected_next_snapshot_schedule_time" /></td>
    <td><code>string</code></td>
    <td>The date and time when the next snapshot is expected to be taken for clusters with a valid snapshot schedule and backups enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="expected_next_snapshot_schedule_time_status" /></td>
    <td><code>string</code></td>
    <td>The status of next expected snapshot for clusters having a valid snapshot schedule and backups enabled. Possible values are the following: OnTrack - The next snapshot is expected to be taken on time. Pending - The next snapshot is pending to be taken.</td>
</tr>
<tr>
    <td><CopyableCode code="extra_compute_for_automatic_optimization" /></td>
    <td><code>string</code></td>
    <td>A boolean value that, if true, indicates that the cluster allocates additional compute resources to run automatic optimization operations. Default: false</td>
</tr>
<tr>
    <td><CopyableCode code="hsm_status" /></td>
    <td><code>string</code></td>
    <td>A value that reports whether the Amazon Redshift cluster has finished applying any hardware security module (HSM) settings changes specified in a modify cluster command. Values: active, applying</td>
</tr>
<tr>
    <td><CopyableCode code="iam_roles" /></td>
    <td><code>string</code></td>
    <td>A list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address_type" /></td>
    <td><code>string</code></td>
    <td>The IP address type for the cluster. Possible values are ipv4 and dualstack.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The Key Management Service (KMS) key ID of the encryption key used to encrypt data in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="lakehouse_registration_status" /></td>
    <td><code>string</code></td>
    <td>The status of the lakehouse registration for the cluster. Indicates whether the cluster is successfully registered with Amazon Redshift federated permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_track_name" /></td>
    <td><code>string</code></td>
    <td>The name of the maintenance track for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="manual_snapshot_retention_period" /></td>
    <td><code>integer</code></td>
    <td>The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots. The value must be either -1 or an integer between 1 and 3,653.</td>
</tr>
<tr>
    <td><CopyableCode code="master_password_secret_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the cluster's admin user credentials secret.</td>
</tr>
<tr>
    <td><CopyableCode code="master_password_secret_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin credentials secret.</td>
</tr>
<tr>
    <td><CopyableCode code="master_username" /></td>
    <td><code>string</code></td>
    <td>The admin user name for the cluster. This name is used to connect to the database that is specified in the DBName parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="modify_status" /></td>
    <td><code>string</code></td>
    <td>The status of a modify operation, if any, initiated for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_az" /></td>
    <td><code>string</code></td>
    <td>A boolean value that, if true, indicates that the cluster is deployed in two Availability Zones.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_az_secondary" /></td>
    <td><code>string</code></td>
    <td>The secondary compute unit of a cluster, if Multi-AZ deployment is turned on.</td>
</tr>
<tr>
    <td><CopyableCode code="next_maintenance_window_start_time" /></td>
    <td><code>string</code></td>
    <td>The date and time in UTC when system maintenance can begin.</td>
</tr>
<tr>
    <td><CopyableCode code="node_type" /></td>
    <td><code>string</code></td>
    <td>The node type for the nodes in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_nodes" /></td>
    <td><code>integer</code></td>
    <td>The number of compute nodes in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_actions" /></td>
    <td><code>string</code></td>
    <td>Cluster operations that are waiting to be started.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_modified_values" /></td>
    <td><code>string</code></td>
    <td>A value that, if present, indicates that changes to the cluster are pending. Specific pending changes are identified by subelements.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_maintenance_window" /></td>
    <td><code>string</code></td>
    <td>The weekly time range, in Universal Coordinated Time (UTC), during which system maintenance can occur.</td>
</tr>
<tr>
    <td><CopyableCode code="publicly_accessible" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value that, if true, indicates that the cluster can be accessed from a public network. Default: false</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_node_exchange_status" /></td>
    <td><code>string</code></td>
    <td>The status of the reserved-node exchange request. Statuses include in-progress and requested.</td>
</tr>
<tr>
    <td><CopyableCode code="resize_info" /></td>
    <td><code>string</code></td>
    <td>Returns the following: AllowCancelResize: a boolean value indicating if the resize operation can be cancelled. ResizeType: Returns ClassicResize</td>
</tr>
<tr>
    <td><CopyableCode code="restore_status" /></td>
    <td><code>string</code></td>
    <td>A value that describes the status of a cluster restore action. This parameter returns null if the cluster was not created by restoring a snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_schedule_identifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the cluster snapshot schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_schedule_state" /></td>
    <td><code>string</code></td>
    <td>The current state of the cluster snapshot schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The list of tags for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="total_storage_capacity_in_mega_bytes" /></td>
    <td><code>integer</code></td>
    <td>The total storage capacity of the cluster in megabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the VPC the cluster is in, if the cluster is in a VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_security_groups" /></td>
    <td><code>string</code></td>
    <td>A list of Amazon Virtual Private Cloud (Amazon VPC) security groups that are associated with the cluster. This parameter is returned only if the cluster is in a VPC.</td>
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
    <td><a href="#describe_clusters"><CopyableCode code="describe_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-TagValues"><code>TagValues</code></a></td>
    <td>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to Amazon Redshift Clusters in the Amazon Redshift Cluster Management Guide. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all clusters that have any combination of those values are returned. If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</td>
</tr>
<tr>
    <td><a href="#create_cluster"><CopyableCode code="create_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-NodeType"><code>NodeType</code></a>, <a href="#parameter-MasterUsername"><code>MasterUsername</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBName"><code>DBName</code></a>, <a href="#parameter-ClusterType"><code>ClusterType</code></a>, <a href="#parameter-MasterUserPassword"><code>MasterUserPassword</code></a>, <a href="#parameter-ClusterSecurityGroups"><code>ClusterSecurityGroups</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-ClusterSubnetGroupName"><code>ClusterSubnetGroupName</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-ClusterParameterGroupName"><code>ClusterParameterGroupName</code></a>, <a href="#parameter-AutomatedSnapshotRetentionPeriod"><code>AutomatedSnapshotRetentionPeriod</code></a>, <a href="#parameter-ManualSnapshotRetentionPeriod"><code>ManualSnapshotRetentionPeriod</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-ClusterVersion"><code>ClusterVersion</code></a>, <a href="#parameter-AllowVersionUpgrade"><code>AllowVersionUpgrade</code></a>, <a href="#parameter-NumberOfNodes"><code>NumberOfNodes</code></a>, <a href="#parameter-PubliclyAccessible"><code>PubliclyAccessible</code></a>, <a href="#parameter-Encrypted"><code>Encrypted</code></a>, <a href="#parameter-HsmClientCertificateIdentifier"><code>HsmClientCertificateIdentifier</code></a>, <a href="#parameter-HsmConfigurationIdentifier"><code>HsmConfigurationIdentifier</code></a>, <a href="#parameter-ElasticIp"><code>ElasticIp</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-EnhancedVpcRouting"><code>EnhancedVpcRouting</code></a>, <a href="#parameter-AdditionalInfo"><code>AdditionalInfo</code></a>, <a href="#parameter-IamRoles"><code>IamRoles</code></a>, <a href="#parameter-MaintenanceTrackName"><code>MaintenanceTrackName</code></a>, <a href="#parameter-SnapshotScheduleIdentifier"><code>SnapshotScheduleIdentifier</code></a>, <a href="#parameter-AvailabilityZoneRelocation"><code>AvailabilityZoneRelocation</code></a>, <a href="#parameter-AquaConfigurationStatus"><code>AquaConfigurationStatus</code></a>, <a href="#parameter-DefaultIamRoleArn"><code>DefaultIamRoleArn</code></a>, <a href="#parameter-LoadSampleData"><code>LoadSampleData</code></a>, <a href="#parameter-ManageMasterPassword"><code>ManageMasterPassword</code></a>, <a href="#parameter-MasterPasswordSecretKmsKeyId"><code>MasterPasswordSecretKmsKeyId</code></a>, <a href="#parameter-IpAddressType"><code>IpAddressType</code></a>, <a href="#parameter-MultiAZ"><code>MultiAZ</code></a>, <a href="#parameter-RedshiftIdcApplicationArn"><code>RedshiftIdcApplicationArn</code></a>, <a href="#parameter-CatalogName"><code>CatalogName</code></a>, <a href="#parameter-ExtraComputeForAutomaticOptimization"><code>ExtraComputeForAutomaticOptimization</code></a></td>
    <td>Creates a new cluster with the specified parameters. To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster subnet group name. The cluster subnet group identifies the subnets of your VPC that Amazon Redshift uses when creating the cluster. For more information about managing clusters, go to Amazon Redshift Clusters in the Amazon Redshift Cluster Management Guide. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. If a subnet group for a provisioned cluster is in an account with VPC BPA turned on, the following capabilities are blocked: Creating a public cluster Restoring a public cluster Modifying a private cluster to be public Adding a subnet with VPC BPA turned on to the subnet group when there's at least one public cluster within the group For more information about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_snapshot_copy_retention_period"><CopyableCode code="modify_snapshot_copy_retention_period" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-RetentionPeriod"><code>RetentionPeriod</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Manual"><code>Manual</code></a></td>
    <td>Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period.</td>
</tr>
<tr>
    <td><a href="#modify_cluster"><CopyableCode code="modify_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterType"><code>ClusterType</code></a>, <a href="#parameter-NodeType"><code>NodeType</code></a>, <a href="#parameter-NumberOfNodes"><code>NumberOfNodes</code></a>, <a href="#parameter-ClusterSecurityGroups"><code>ClusterSecurityGroups</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-MasterUserPassword"><code>MasterUserPassword</code></a>, <a href="#parameter-ClusterParameterGroupName"><code>ClusterParameterGroupName</code></a>, <a href="#parameter-AutomatedSnapshotRetentionPeriod"><code>AutomatedSnapshotRetentionPeriod</code></a>, <a href="#parameter-ManualSnapshotRetentionPeriod"><code>ManualSnapshotRetentionPeriod</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-ClusterVersion"><code>ClusterVersion</code></a>, <a href="#parameter-AllowVersionUpgrade"><code>AllowVersionUpgrade</code></a>, <a href="#parameter-HsmClientCertificateIdentifier"><code>HsmClientCertificateIdentifier</code></a>, <a href="#parameter-HsmConfigurationIdentifier"><code>HsmConfigurationIdentifier</code></a>, <a href="#parameter-NewClusterIdentifier"><code>NewClusterIdentifier</code></a>, <a href="#parameter-PubliclyAccessible"><code>PubliclyAccessible</code></a>, <a href="#parameter-ElasticIp"><code>ElasticIp</code></a>, <a href="#parameter-EnhancedVpcRouting"><code>EnhancedVpcRouting</code></a>, <a href="#parameter-MaintenanceTrackName"><code>MaintenanceTrackName</code></a>, <a href="#parameter-Encrypted"><code>Encrypted</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-AvailabilityZoneRelocation"><code>AvailabilityZoneRelocation</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-ManageMasterPassword"><code>ManageMasterPassword</code></a>, <a href="#parameter-MasterPasswordSecretKmsKeyId"><code>MasterPasswordSecretKmsKeyId</code></a>, <a href="#parameter-IpAddressType"><code>IpAddressType</code></a>, <a href="#parameter-MultiAZ"><code>MultiAZ</code></a>, <a href="#parameter-ExtraComputeForAutomaticOptimization"><code>ExtraComputeForAutomaticOptimization</code></a></td>
    <td>Modifies the settings for a cluster. You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change. You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to Amazon Redshift Clusters in the Amazon Redshift Cluster Management Guide. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. If a subnet group for a provisioned cluster is in an account with VPC BPA turned on, the following capabilities are blocked: Creating a public cluster Restoring a public cluster Modifying a private cluster to be public Adding a subnet with VPC BPA turned on to the subnet group when there's at least one public cluster within the group For more information about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_cluster"><CopyableCode code="delete_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SkipFinalClusterSnapshot"><code>SkipFinalClusterSnapshot</code></a>, <a href="#parameter-FinalClusterSnapshotIdentifier"><code>FinalClusterSnapshotIdentifier</code></a>, <a href="#parameter-FinalClusterSnapshotRetentionPeriod"><code>FinalClusterSnapshotRetentionPeriod</code></a></td>
    <td>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use DescribeClusters to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to Amazon Redshift Clusters in the Amazon Redshift Cluster Management Guide. If you want to shut down the cluster and retain it for future use, set SkipFinalClusterSnapshot to false and specify a name for FinalClusterSnapshotIdentifier. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. For more information about managing clusters, go to Amazon Redshift Clusters in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#cancel_resize"><CopyableCode code="cancel_resize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels a resize operation for a cluster.</td>
</tr>
<tr>
    <td><a href="#copy_cluster_snapshot"><CopyableCode code="copy_cluster_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SourceSnapshotIdentifier"><code>SourceSnapshotIdentifier</code></a>, <a href="#parameter-TargetSnapshotIdentifier"><code>TargetSnapshotIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SourceSnapshotClusterIdentifier"><code>SourceSnapshotClusterIdentifier</code></a>, <a href="#parameter-ManualSnapshotRetentionPeriod"><code>ManualSnapshotRetentionPeriod</code></a></td>
    <td>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state. When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them. For more information about working with snapshots, go to Amazon Redshift Snapshots in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#disable_logging"><CopyableCode code="disable_logging" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.</td>
</tr>
<tr>
    <td><a href="#disable_snapshot_copy"><CopyableCode code="disable_snapshot_copy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables the automatic copying of snapshots from one region to another region for a specified cluster. If your cluster and its snapshots are encrypted using an encrypted symmetric key from Key Management Service, use DeleteSnapshotCopyGrant to delete the grant that grants Amazon Redshift permission to the key in the destination region.</td>
</tr>
<tr>
    <td><a href="#enable_logging"><CopyableCode code="enable_logging" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-BucketName"><code>BucketName</code></a>, <a href="#parameter-S3KeyPrefix"><code>S3KeyPrefix</code></a>, <a href="#parameter-LogDestinationType"><code>LogDestinationType</code></a>, <a href="#parameter-LogExports"><code>LogExports</code></a></td>
    <td>Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.</td>
</tr>
<tr>
    <td><a href="#enable_snapshot_copy"><CopyableCode code="enable_snapshot_copy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-DestinationRegion"><code>DestinationRegion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RetentionPeriod"><code>RetentionPeriod</code></a>, <a href="#parameter-SnapshotCopyGrantName"><code>SnapshotCopyGrantName</code></a>, <a href="#parameter-ManualSnapshotRetentionPeriod"><code>ManualSnapshotRetentionPeriod</code></a></td>
    <td>Enables the automatic copy of snapshots from one region to another region for a specified cluster.</td>
</tr>
<tr>
    <td><a href="#failover_primary_compute"><CopyableCode code="failover_primary_compute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fails over the primary compute unit of the specified Multi-AZ cluster to another Availability Zone.</td>
</tr>
<tr>
    <td><a href="#modify_aqua_configuration"><CopyableCode code="modify_aqua_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AquaConfigurationStatus"><code>AquaConfigurationStatus</code></a></td>
    <td>This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).</td>
</tr>
<tr>
    <td><a href="#modify_cluster_iam_roles"><CopyableCode code="modify_cluster_iam_roles" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AddIamRoles"><code>AddIamRoles</code></a>, <a href="#parameter-RemoveIamRoles"><code>RemoveIamRoles</code></a>, <a href="#parameter-DefaultIamRoleArn"><code>DefaultIamRoleArn</code></a></td>
    <td>Modifies the list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services. The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to Quotas and limits in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#modify_cluster_maintenance"><CopyableCode code="modify_cluster_maintenance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DeferMaintenance"><code>DeferMaintenance</code></a>, <a href="#parameter-DeferMaintenanceIdentifier"><code>DeferMaintenanceIdentifier</code></a>, <a href="#parameter-DeferMaintenanceStartTime"><code>DeferMaintenanceStartTime</code></a>, <a href="#parameter-DeferMaintenanceEndTime"><code>DeferMaintenanceEndTime</code></a>, <a href="#parameter-DeferMaintenanceDuration"><code>DeferMaintenanceDuration</code></a></td>
    <td>Modifies the maintenance settings of a cluster.</td>
</tr>
<tr>
    <td><a href="#modify_lakehouse_configuration"><CopyableCode code="modify_lakehouse_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LakehouseRegistration"><code>LakehouseRegistration</code></a>, <a href="#parameter-CatalogName"><code>CatalogName</code></a>, <a href="#parameter-LakehouseIdcRegistration"><code>LakehouseIdcRegistration</code></a>, <a href="#parameter-LakehouseIdcApplicationArn"><code>LakehouseIdcApplicationArn</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the lakehouse configuration for a cluster. This operation allows you to manage Amazon Redshift federated permissions and Amazon Web Services IAM Identity Center trusted identity propagation.</td>
</tr>
<tr>
    <td><a href="#pause_cluster"><CopyableCode code="pause_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Pauses a cluster.</td>
</tr>
<tr>
    <td><a href="#reboot_cluster"><CopyableCode code="reboot_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to rebooting. A cluster event is created when the reboot is completed. Any pending cluster modifications (see ModifyCluster) are applied at this reboot. For more information about managing clusters, go to Amazon Redshift Clusters in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#resize_cluster"><CopyableCode code="resize_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterType"><code>ClusterType</code></a>, <a href="#parameter-NodeType"><code>NodeType</code></a>, <a href="#parameter-NumberOfNodes"><code>NumberOfNodes</code></a>, <a href="#parameter-Classic"><code>Classic</code></a>, <a href="#parameter-ReservedNodeId"><code>ReservedNodeId</code></a>, <a href="#parameter-TargetReservedNodeOfferingId"><code>TargetReservedNodeOfferingId</code></a></td>
    <td>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. Elastic resize operations have the following restrictions: You can only resize clusters of the following types: dc2.large dc2.8xlarge rg.xlarge rg.4xlarge ra3.large ra3.xlplus ra3.4xlarge ra3.16xlarge The type of nodes that you add must match the node type for the cluster.</td>
</tr>
<tr>
    <td><a href="#restore_from_cluster_snapshot"><CopyableCode code="restore_from_cluster_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SnapshotIdentifier"><code>SnapshotIdentifier</code></a>, <a href="#parameter-SnapshotArn"><code>SnapshotArn</code></a>, <a href="#parameter-SnapshotClusterIdentifier"><code>SnapshotClusterIdentifier</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-AllowVersionUpgrade"><code>AllowVersionUpgrade</code></a>, <a href="#parameter-ClusterSubnetGroupName"><code>ClusterSubnetGroupName</code></a>, <a href="#parameter-PubliclyAccessible"><code>PubliclyAccessible</code></a>, <a href="#parameter-OwnerAccount"><code>OwnerAccount</code></a>, <a href="#parameter-HsmClientCertificateIdentifier"><code>HsmClientCertificateIdentifier</code></a>, <a href="#parameter-HsmConfigurationIdentifier"><code>HsmConfigurationIdentifier</code></a>, <a href="#parameter-ElasticIp"><code>ElasticIp</code></a>, <a href="#parameter-ClusterParameterGroupName"><code>ClusterParameterGroupName</code></a>, <a href="#parameter-ClusterSecurityGroups"><code>ClusterSecurityGroups</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-AutomatedSnapshotRetentionPeriod"><code>AutomatedSnapshotRetentionPeriod</code></a>, <a href="#parameter-ManualSnapshotRetentionPeriod"><code>ManualSnapshotRetentionPeriod</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-NodeType"><code>NodeType</code></a>, <a href="#parameter-EnhancedVpcRouting"><code>EnhancedVpcRouting</code></a>, <a href="#parameter-AdditionalInfo"><code>AdditionalInfo</code></a>, <a href="#parameter-IamRoles"><code>IamRoles</code></a>, <a href="#parameter-MaintenanceTrackName"><code>MaintenanceTrackName</code></a>, <a href="#parameter-SnapshotScheduleIdentifier"><code>SnapshotScheduleIdentifier</code></a>, <a href="#parameter-NumberOfNodes"><code>NumberOfNodes</code></a>, <a href="#parameter-AvailabilityZoneRelocation"><code>AvailabilityZoneRelocation</code></a>, <a href="#parameter-AquaConfigurationStatus"><code>AquaConfigurationStatus</code></a>, <a href="#parameter-DefaultIamRoleArn"><code>DefaultIamRoleArn</code></a>, <a href="#parameter-ReservedNodeId"><code>ReservedNodeId</code></a>, <a href="#parameter-TargetReservedNodeOfferingId"><code>TargetReservedNodeOfferingId</code></a>, <a href="#parameter-Encrypted"><code>Encrypted</code></a>, <a href="#parameter-ManageMasterPassword"><code>ManageMasterPassword</code></a>, <a href="#parameter-MasterPasswordSecretKmsKeyId"><code>MasterPasswordSecretKmsKeyId</code></a>, <a href="#parameter-IpAddressType"><code>IpAddressType</code></a>, <a href="#parameter-MultiAZ"><code>MultiAZ</code></a>, <a href="#parameter-CatalogName"><code>CatalogName</code></a>, <a href="#parameter-RedshiftIdcApplicationArn"><code>RedshiftIdcApplicationArn</code></a></td>
    <td>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the ModifyCluster API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore. If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. If a subnet group for a provisioned cluster is in an account with VPC BPA turned on, the following capabilities are blocked: Creating a public cluster Restoring a public cluster Modifying a private cluster to be public Adding a subnet with VPC BPA turned on to the subnet group when there's at least one public cluster within the group For more information about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide. For more information about working with snapshots, go to Amazon Redshift Snapshots in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#restore_table_from_cluster_snapshot"><CopyableCode code="restore_table_from_cluster_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-SnapshotIdentifier"><code>SnapshotIdentifier</code></a>, <a href="#parameter-SourceDatabaseName"><code>SourceDatabaseName</code></a>, <a href="#parameter-SourceTableName"><code>SourceTableName</code></a>, <a href="#parameter-NewTableName"><code>NewTableName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SourceSchemaName"><code>SourceSchemaName</code></a>, <a href="#parameter-TargetDatabaseName"><code>TargetDatabaseName</code></a>, <a href="#parameter-TargetSchemaName"><code>TargetSchemaName</code></a>, <a href="#parameter-EnableCaseSensitiveIdentifier"><code>EnableCaseSensitiveIdentifier</code></a></td>
    <td>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from. You cannot use RestoreTableFromClusterSnapshot to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call RestoreTableFromClusterSnapshot. When you have renamed your original table, then you can pass the original name of the table as the NewTableName parameter value in the call to RestoreTableFromClusterSnapshot. This way, you can replace the original table with the table created from the snapshot. You can't use this operation to restore tables with interleaved sort keys.</td>
</tr>
<tr>
    <td><a href="#resume_cluster"><CopyableCode code="resume_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Resumes a paused cluster.</td>
</tr>
<tr>
    <td><a href="#rotate_encryption_key"><CopyableCode code="rotate_encryption_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Rotates the encryption keys for a cluster.</td>
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
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the cluster that you want to rotate the encryption keys for. Constraints: Must be the name of valid cluster that has encryption enabled.</td>
</tr>
<tr id="parameter-DestinationRegion">
    <td><CopyableCode code="DestinationRegion" /></td>
    <td><code>string</code></td>
    <td>The destination Amazon Web Services Region that you want to copy snapshots to. Constraints: Must be the name of a valid Amazon Web Services Region. For more information, see Regions and Endpoints in the Amazon Web Services General Reference.</td>
</tr>
<tr id="parameter-MasterUsername">
    <td><CopyableCode code="MasterUsername" /></td>
    <td><code>string</code></td>
    <td>The user name associated with the admin user account for the cluster that is being created. Constraints: Must be 1 - 128 alphanumeric characters or hyphens. The user name can't be PUBLIC. Must contain only lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen. The first character must be a letter. Must not contain a colon (:) or a slash (/). Cannot be a reserved word. A list of reserved words can be found in Reserved Words in the Amazon Redshift Database Developer Guide.</td>
</tr>
<tr id="parameter-NewTableName">
    <td><CopyableCode code="NewTableName" /></td>
    <td><code>string</code></td>
    <td>The name of the table to create as a result of the current request.</td>
</tr>
<tr id="parameter-NodeType">
    <td><CopyableCode code="NodeType" /></td>
    <td><code>string</code></td>
    <td>The node type to be provisioned for the cluster. For information about node types, go to Working with Clusters in the Amazon Redshift Cluster Management Guide. Valid Values: dc2.large | dc2.8xlarge| rg.xlarge | rg.4xlarge | ra3.large | ra3.xlplus | ra3.4xlarge | ra3.16xlarge</td>
</tr>
<tr id="parameter-RetentionPeriod">
    <td><CopyableCode code="RetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The number of days to retain automated snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this only changes the retention period of copied automated snapshots. If you decrease the retention period for automated snapshots that are copied to a destination Amazon Web Services Region, Amazon Redshift deletes any existing automated snapshots that were copied to the destination Amazon Web Services Region and that fall outside of the new retention period. Constraints: Must be at least 1 and no more than 35 for automated snapshots. If you specify the manual option, only newly copied manual snapshots will have the new retention period. If you specify the value of -1 newly copied manual snapshots are retained indefinitely. Constraints: The number of days must be either -1 or an integer between 1 and 3,653 for manual snapshots.</td>
</tr>
<tr id="parameter-SnapshotIdentifier">
    <td><CopyableCode code="SnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the snapshot to restore the table from. This snapshot must have been created from the Amazon Redshift cluster specified by the ClusterIdentifier parameter.</td>
</tr>
<tr id="parameter-SourceDatabaseName">
    <td><CopyableCode code="SourceDatabaseName" /></td>
    <td><code>string</code></td>
    <td>The name of the source database that contains the table to restore from.</td>
</tr>
<tr id="parameter-SourceSnapshotIdentifier">
    <td><CopyableCode code="SourceSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the source snapshot. Constraints: Must be the identifier for a valid automated snapshot whose state is available.</td>
</tr>
<tr id="parameter-SourceTableName">
    <td><CopyableCode code="SourceTableName" /></td>
    <td><code>string</code></td>
    <td>The name of the source table to restore from.</td>
</tr>
<tr id="parameter-TargetSnapshotIdentifier">
    <td><CopyableCode code="TargetSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier given to the new manual snapshot. Constraints: Cannot be null, empty, or blank. Must contain from 1 to 255 alphanumeric characters or hyphens. First character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens. Must be unique for the Amazon Web Services account that is making the request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AddIamRoles">
    <td><CopyableCode code="AddIamRoles" /></td>
    <td><code>array</code></td>
    <td>Zero or more IAM roles to associate with the cluster. The roles must be in their Amazon Resource Name (ARN) format.</td>
</tr>
<tr id="parameter-AdditionalInfo">
    <td><CopyableCode code="AdditionalInfo" /></td>
    <td><code>string</code></td>
    <td>Reserved.</td>
</tr>
<tr id="parameter-AllowVersionUpgrade">
    <td><CopyableCode code="AllowVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>If true, major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. Default: true</td>
</tr>
<tr id="parameter-AquaConfigurationStatus">
    <td><CopyableCode code="AquaConfigurationStatus" /></td>
    <td><code>string</code></td>
    <td>This parameter is retired. It does not set the AQUA configuration status. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).</td>
</tr>
<tr id="parameter-AutomatedSnapshotRetentionPeriod">
    <td><CopyableCode code="AutomatedSnapshotRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with CreateClusterSnapshot. You can't disable automated snapshots for RG or RA3 node types. Set the automated retention period from 1-35 days. Default: The value selected for the cluster from which the snapshot was taken. Constraints: Must be a value from 0 to 35.</td>
</tr>
<tr id="parameter-AvailabilityZone">
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Amazon EC2 Availability Zone in which to restore the cluster. Default: A random, system-chosen Availability Zone. Example: us-east-2a</td>
</tr>
<tr id="parameter-AvailabilityZoneRelocation">
    <td><CopyableCode code="AvailabilityZoneRelocation" /></td>
    <td><code>boolean</code></td>
    <td>The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster is restored.</td>
</tr>
<tr id="parameter-BucketName">
    <td><CopyableCode code="BucketName" /></td>
    <td><code>string</code></td>
    <td>The name of an existing S3 bucket where the log files are to be stored. Constraints: Must be in the same region as the cluster The cluster must have read bucket and put object permissions</td>
</tr>
<tr id="parameter-CatalogName">
    <td><CopyableCode code="CatalogName" /></td>
    <td><code>string</code></td>
    <td>The name of the Glue Data Catalog that will be associated with the cluster enabled with Amazon Redshift federated permissions. Constraints: Must contain at least one lowercase letter. Can only contain lowercase letters (a-z), numbers (0-9), underscores (_), and hyphens (-). Pattern: ^&#91;a-z0-9_-&#93;*&#91;a-z&#93;+&#91;a-z0-9_-&#93;*$ Example: my-catalog_01</td>
</tr>
<tr id="parameter-Classic">
    <td><CopyableCode code="Classic" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether the resize operation is using the classic resize process. If you don't provide this parameter or set the value to false, the resize type is elastic.</td>
</tr>
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a cluster whose properties you are requesting. This parameter is case sensitive. The default is that all clusters defined for an account are returned.</td>
</tr>
<tr id="parameter-ClusterParameterGroupName">
    <td><CopyableCode code="ClusterParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the parameter group to be associated with this cluster. Default: The default Amazon Redshift cluster parameter group. For information about the default parameter group, go to Working with Amazon Redshift Parameter Groups. Constraints: Must be 1 to 255 alphanumeric characters or hyphens. First character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens.</td>
</tr>
<tr id="parameter-ClusterSecurityGroups">
    <td><CopyableCode code="ClusterSecurityGroups" /></td>
    <td><code>array</code></td>
    <td>A list of security groups to be associated with this cluster. Default: The default cluster security group for Amazon Redshift. Cluster security groups only apply to clusters outside of VPCs.</td>
</tr>
<tr id="parameter-ClusterSubnetGroupName">
    <td><CopyableCode code="ClusterSubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the subnet group where you want to cluster restored. A snapshot of cluster in VPC can be restored only in VPC. Therefore, you must provide subnet group name where you want the cluster restored.</td>
</tr>
<tr id="parameter-ClusterType">
    <td><CopyableCode code="ClusterType" /></td>
    <td><code>string</code></td>
    <td>The new cluster type for the specified cluster.</td>
</tr>
<tr id="parameter-ClusterVersion">
    <td><CopyableCode code="ClusterVersion" /></td>
    <td><code>string</code></td>
    <td>The new version number of the Amazon Redshift engine to upgrade to. For major version upgrades, if a non-default cluster parameter group is currently in use, a new cluster parameter group in the cluster parameter group family for the new version must be specified. The new cluster parameter group can be the default for that cluster parameter group family. For more information about parameters and parameter groups, go to Amazon Redshift Parameter Groups in the Amazon Redshift Cluster Management Guide. Example: 1.0</td>
</tr>
<tr id="parameter-DBName">
    <td><CopyableCode code="DBName" /></td>
    <td><code>string</code></td>
    <td>The name of the first database to be created when the cluster is created. To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database. For more information, go to Create a Database in the Amazon Redshift Database Developer Guide. Default: dev Constraints: Must contain 1 to 64 alphanumeric characters. Must contain only lowercase letters. Cannot be a word that is reserved by the service. A list of reserved words can be found in Reserved Words in the Amazon Redshift Database Developer Guide.</td>
</tr>
<tr id="parameter-DefaultIamRoleArn">
    <td><CopyableCode code="DefaultIamRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was last modified while it was restored from a snapshot.</td>
</tr>
<tr id="parameter-DeferMaintenance">
    <td><CopyableCode code="DeferMaintenance" /></td>
    <td><code>boolean</code></td>
    <td>A boolean indicating whether to enable the deferred maintenance window.</td>
</tr>
<tr id="parameter-DeferMaintenanceDuration">
    <td><CopyableCode code="DeferMaintenanceDuration" /></td>
    <td><code>integer</code></td>
    <td>An integer indicating the duration of the maintenance window in days. If you specify a duration, you can't specify an end time. The duration must be 60 days or less.</td>
</tr>
<tr id="parameter-DeferMaintenanceEndTime">
    <td><CopyableCode code="DeferMaintenanceEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp indicating end time for the deferred maintenance window. If you specify an end time, you can't specify a duration.</td>
</tr>
<tr id="parameter-DeferMaintenanceIdentifier">
    <td><CopyableCode code="DeferMaintenanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the deferred maintenance window.</td>
</tr>
<tr id="parameter-DeferMaintenanceStartTime">
    <td><CopyableCode code="DeferMaintenanceStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp indicating the start time for the deferred maintenance window.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value that, if true, validates the request without actually modifying the lakehouse configuration. Use this to check for errors before making changes.</td>
</tr>
<tr id="parameter-ElasticIp">
    <td><CopyableCode code="ElasticIp" /></td>
    <td><code>string</code></td>
    <td>The Elastic IP (EIP) address for the cluster. Don't specify the Elastic IP address for a publicly accessible cluster with availability zone relocation turned on.</td>
</tr>
<tr id="parameter-EnableCaseSensitiveIdentifier">
    <td><CopyableCode code="EnableCaseSensitiveIdentifier" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether name identifiers for database, schema, and table are case sensitive. If true, the names are case sensitive. If false (default), the names are not case sensitive.</td>
</tr>
<tr id="parameter-Encrypted">
    <td><CopyableCode code="Encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Enables support for restoring an unencrypted snapshot to a cluster encrypted with Key Management Service (KMS) and a customer managed key.</td>
</tr>
<tr id="parameter-EnhancedVpcRouting">
    <td><CopyableCode code="EnhancedVpcRouting" /></td>
    <td><code>boolean</code></td>
    <td>An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see Enhanced VPC Routing in the Amazon Redshift Cluster Management Guide. If this option is true, enhanced VPC routing is enabled. Default: false</td>
</tr>
<tr id="parameter-ExtraComputeForAutomaticOptimization">
    <td><CopyableCode code="ExtraComputeForAutomaticOptimization" /></td>
    <td><code>boolean</code></td>
    <td>If true, allocates additional compute resources for running automatic optimization operations. Default: false</td>
</tr>
<tr id="parameter-FinalClusterSnapshotIdentifier">
    <td><CopyableCode code="FinalClusterSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the final snapshot that is to be created immediately before deleting the cluster. If this parameter is provided, SkipFinalClusterSnapshot must be false. Constraints: Must be 1 to 255 alphanumeric characters. First character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens.</td>
</tr>
<tr id="parameter-FinalClusterSnapshotRetentionPeriod">
    <td><CopyableCode code="FinalClusterSnapshotRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653. The default value is -1.</td>
</tr>
<tr id="parameter-HsmClientCertificateIdentifier">
    <td><CopyableCode code="HsmClientCertificateIdentifier" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.</td>
</tr>
<tr id="parameter-HsmConfigurationIdentifier">
    <td><CopyableCode code="HsmConfigurationIdentifier" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.</td>
</tr>
<tr id="parameter-IamRoles">
    <td><CopyableCode code="IamRoles" /></td>
    <td><code>array</code></td>
    <td>A list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to Quotas and limits in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr id="parameter-IpAddressType">
    <td><CopyableCode code="IpAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type for the cluster. Possible values are ipv4 and dualstack.</td>
</tr>
<tr id="parameter-KmsKeyId">
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Key Management Service (KMS) key ID of the encryption key that encrypts data in the cluster restored from a shared snapshot. You can also provide the key ID when you restore from an unencrypted snapshot to an encrypted cluster in the same account. Additionally, you can specify a new KMS key ID when you restore from an encrypted snapshot in the same account in order to change it. In that case, the restored cluster is encrypted with the new KMS key ID.</td>
</tr>
<tr id="parameter-LakehouseIdcApplicationArn">
    <td><CopyableCode code="LakehouseIdcApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM Identity Center application used for enabling Amazon Web Services IAM Identity Center trusted identity propagation on a cluster enabled with Amazon Redshift federated permissions.</td>
</tr>
<tr id="parameter-LakehouseIdcRegistration">
    <td><CopyableCode code="LakehouseIdcRegistration" /></td>
    <td><code>string</code></td>
    <td>Modifies the Amazon Web Services IAM Identity Center trusted identity propagation on a cluster enabled with Amazon Redshift federated permissions. Valid values are Associate or Disassociate.</td>
</tr>
<tr id="parameter-LakehouseRegistration">
    <td><CopyableCode code="LakehouseRegistration" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to register or deregister the cluster with Amazon Redshift federated permissions. Valid values are Register or Deregister.</td>
</tr>
<tr id="parameter-LoadSampleData">
    <td><CopyableCode code="LoadSampleData" /></td>
    <td><code>string</code></td>
    <td>A flag that specifies whether to load sample data once the cluster is created.</td>
</tr>
<tr id="parameter-LogDestinationType">
    <td><CopyableCode code="LogDestinationType" /></td>
    <td><code>string</code></td>
    <td>The log destination type. An enum with possible values of s3 and cloudwatch.</td>
</tr>
<tr id="parameter-LogExports">
    <td><CopyableCode code="LogExports" /></td>
    <td><code>array</code></td>
    <td>The collection of exported log types. Possible values are connectionlog, useractivitylog, and userlog.</td>
</tr>
<tr id="parameter-MaintenanceTrackName">
    <td><CopyableCode code="MaintenanceTrackName" /></td>
    <td><code>string</code></td>
    <td>The name of the maintenance track for the restored cluster. When you take a snapshot, the snapshot inherits the MaintenanceTrack value from the cluster. The snapshot might be on a different track than the cluster that was the source for the snapshot. For example, suppose that you take a snapshot of a cluster that is on the current track and then change the cluster to be on the trailing track. In this case, the snapshot and the source cluster are on different tracks.</td>
</tr>
<tr id="parameter-ManageMasterPassword">
    <td><CopyableCode code="ManageMasterPassword" /></td>
    <td><code>boolean</code></td>
    <td>If true, Amazon Redshift uses Secrets Manager to manage the restored cluster's admin credentials. If ManageMasterPassword is false or not set, Amazon Redshift uses the admin credentials the cluster had at the time the snapshot was taken.</td>
</tr>
<tr id="parameter-Manual">
    <td><CopyableCode code="Manual" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.</td>
</tr>
<tr id="parameter-ManualSnapshotRetentionPeriod">
    <td><CopyableCode code="ManualSnapshotRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots. The value must be either -1 or an integer between 1 and 3,653.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeClusters request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request. Constraints: You can specify either the ClusterIdentifier parameter or the Marker parameter, but not both.</td>
</tr>
<tr id="parameter-MasterPasswordSecretKmsKeyId">
    <td><CopyableCode code="MasterPasswordSecretKmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin credentials secret. You can only use this parameter if ManageMasterPassword is true.</td>
</tr>
<tr id="parameter-MasterUserPassword">
    <td><CopyableCode code="MasterUserPassword" /></td>
    <td><code>string</code></td>
    <td>The new password for the cluster admin user. This change is asynchronously applied as soon as possible. Between the time of the request and the completion of the request, the MasterUserPassword element exists in the PendingModifiedValues element of the operation response. You can't use MasterUserPassword if ManageMasterPassword is true. Operations never return the password, so this operation provides a way to regain access to the admin user account for a cluster if the password is lost. Default: Uses existing setting. Constraints: Must be between 8 and 64 characters in length. Must contain at least one uppercase letter. Must contain at least one lowercase letter. Must contain one number. Can be any printable ASCII character (ASCII code 33-126) except ' (single quote), " (double quote), \, /, or @.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-MultiAZ">
    <td><CopyableCode code="MultiAZ" /></td>
    <td><code>boolean</code></td>
    <td>If true, the snapshot will be restored to a cluster deployed in two Availability Zones.</td>
</tr>
<tr id="parameter-NewClusterIdentifier">
    <td><CopyableCode code="NewClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The new identifier for the cluster. Constraints: Must contain from 1 to 63 alphanumeric characters or hyphens. Alphabetic characters must be lowercase. First character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens. Must be unique for all clusters within an Amazon Web Services account. Example: examplecluster</td>
</tr>
<tr id="parameter-NodeType">
    <td><CopyableCode code="NodeType" /></td>
    <td><code>string</code></td>
    <td>The node type that the restored cluster will be provisioned with. If you have a DC instance type, you must restore into that same instance type and size. In other words, you can only restore a dc2.large node type into another dc2 type. For more information about node types, see About Clusters and Nodes in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr id="parameter-NumberOfNodes">
    <td><CopyableCode code="NumberOfNodes" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes specified when provisioning the restored cluster.</td>
</tr>
<tr id="parameter-OwnerAccount">
    <td><CopyableCode code="OwnerAccount" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot.</td>
</tr>
<tr id="parameter-Port">
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port number on which the cluster accepts connections. Default: The same port as the original cluster. Valid values: For clusters with DC2 nodes, must be within the range 1150-65535. For clusters with RG or RA3 nodes, must be within the ranges 5431-5455 or 8191-8215.</td>
</tr>
<tr id="parameter-PreferredMaintenanceWindow">
    <td><CopyableCode code="PreferredMaintenanceWindow" /></td>
    <td><code>string</code></td>
    <td>The weekly time range (in UTC) during which automated cluster maintenance can occur. Format: ddd:hh24:mi-ddd:hh24:mi Default: The value selected for the cluster from which the snapshot was taken. For more information about the time blocks for each region, see Maintenance Windows in Amazon Redshift Cluster Management Guide. Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun Constraints: Minimum 30-minute window.</td>
</tr>
<tr id="parameter-PubliclyAccessible">
    <td><CopyableCode code="PubliclyAccessible" /></td>
    <td><code>boolean</code></td>
    <td>If true, the cluster can be accessed from a public network. Default: false</td>
</tr>
<tr id="parameter-RedshiftIdcApplicationArn">
    <td><CopyableCode code="RedshiftIdcApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM Identity Center application used for enabling Amazon Web Services IAM Identity Center trusted identity propagation on a cluster enabled with Amazon Redshift federated permissions.</td>
</tr>
<tr id="parameter-RemoveIamRoles">
    <td><CopyableCode code="RemoveIamRoles" /></td>
    <td><code>array</code></td>
    <td>Zero or more IAM roles in ARN format to disassociate from the cluster.</td>
</tr>
<tr id="parameter-ReservedNodeId">
    <td><CopyableCode code="ReservedNodeId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the target reserved node offering.</td>
</tr>
<tr id="parameter-RetentionPeriod">
    <td><CopyableCode code="RetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The number of days to retain automated snapshots in the destination region after they are copied from the source region. Default: 7. Constraints: Must be at least 1 and no more than 35.</td>
</tr>
<tr id="parameter-S3KeyPrefix">
    <td><CopyableCode code="S3KeyPrefix" /></td>
    <td><code>string</code></td>
    <td>The prefix applied to the log file names. Valid characters are any letter from any language, any whitespace character, any numeric character, and the following characters: underscore (_), period (.), colon (:), slash (/), equal (=), plus (+), backslash (\), hyphen (-), at symbol (@).</td>
</tr>
<tr id="parameter-SkipFinalClusterSnapshot">
    <td><CopyableCode code="SkipFinalClusterSnapshot" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether a final snapshot of the cluster is created before Amazon Redshift deletes the cluster. If true, a final cluster snapshot is not created. If false, a final cluster snapshot is created before the cluster is deleted. The FinalClusterSnapshotIdentifier parameter must be specified if SkipFinalClusterSnapshot is false. Default: false</td>
</tr>
<tr id="parameter-SnapshotArn">
    <td><CopyableCode code="SnapshotArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the snapshot associated with the message to restore from a cluster. You must specify this parameter or snapshotIdentifier, but not both.</td>
</tr>
<tr id="parameter-SnapshotClusterIdentifier">
    <td><CopyableCode code="SnapshotClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster the source snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.</td>
</tr>
<tr id="parameter-SnapshotCopyGrantName">
    <td><CopyableCode code="SnapshotCopyGrantName" /></td>
    <td><code>string</code></td>
    <td>The name of the snapshot copy grant to use when snapshots of an Amazon Web Services KMS-encrypted cluster are copied to the destination region.</td>
</tr>
<tr id="parameter-SnapshotIdentifier">
    <td><CopyableCode code="SnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive. You must specify this parameter or snapshotArn, but not both. Example: my-snapshot-id</td>
</tr>
<tr id="parameter-SnapshotScheduleIdentifier">
    <td><CopyableCode code="SnapshotScheduleIdentifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the snapshot schedule.</td>
</tr>
<tr id="parameter-SourceSchemaName">
    <td><CopyableCode code="SourceSchemaName" /></td>
    <td><code>string</code></td>
    <td>The name of the source schema that contains the table to restore from. If you do not specify a SourceSchemaName value, the default is public.</td>
</tr>
<tr id="parameter-SourceSnapshotClusterIdentifier">
    <td><CopyableCode code="SourceSnapshotClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cluster the source snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name. Constraints: Must be the identifier for a valid cluster.</td>
</tr>
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>A tag key or keys for which you want to return all matching clusters that are associated with the specified key or keys. For example, suppose that you have clusters that are tagged with keys called owner and environment. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the clusters that have either or both of these tag keys associated with them.</td>
</tr>
<tr id="parameter-TagValues">
    <td><CopyableCode code="TagValues" /></td>
    <td><code>array</code></td>
    <td>A tag value or values for which you want to return all matching clusters that are associated with the specified tag value or values. For example, suppose that you have clusters that are tagged with values called admin and test. If you specify both of these tag values in the request, Amazon Redshift returns a response with the clusters that have either or both of these tag values associated with them.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tag instances.</td>
</tr>
<tr id="parameter-TargetDatabaseName">
    <td><CopyableCode code="TargetDatabaseName" /></td>
    <td><code>string</code></td>
    <td>The name of the database to restore the table to.</td>
</tr>
<tr id="parameter-TargetReservedNodeOfferingId">
    <td><CopyableCode code="TargetReservedNodeOfferingId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the target reserved node offering.</td>
</tr>
<tr id="parameter-TargetSchemaName">
    <td><CopyableCode code="TargetSchemaName" /></td>
    <td><code>string</code></td>
    <td>The name of the schema to restore the table to.</td>
</tr>
<tr id="parameter-VpcSecurityGroupIds">
    <td><CopyableCode code="VpcSecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster. Default: The default VPC security group is associated with the cluster. VPC security groups only apply to clusters in VPCs.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_clusters"
    values={[
        { label: 'describe_clusters', value: 'describe_clusters' }
    ]}
>
<TabItem value="describe_clusters">

Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to Amazon Redshift Clusters in the Amazon Redshift Cluster Management Guide. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all clusters that have any combination of those values are returned. If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.

```sql
SELECT
allow_version_upgrade,
aqua_configuration,
automated_snapshot_retention_period,
availability_zone,
availability_zone_relocation_status,
catalog_arn,
cluster_availability_status,
cluster_create_time,
cluster_identifier,
cluster_namespace_arn,
cluster_nodes,
cluster_parameter_groups,
cluster_public_key,
cluster_revision_number,
cluster_security_groups,
cluster_snapshot_copy_status,
cluster_status,
cluster_subnet_group_name,
cluster_version,
custom_domain_certificate_arn,
custom_domain_certificate_expiry_date,
custom_domain_name,
db_name,
data_transfer_progress,
default_iam_role_arn,
deferred_maintenance_windows,
elastic_ip_status,
elastic_resize_number_of_node_options,
encrypted,
endpoint,
enhanced_vpc_routing,
expected_next_snapshot_schedule_time,
expected_next_snapshot_schedule_time_status,
extra_compute_for_automatic_optimization,
hsm_status,
iam_roles,
ip_address_type,
kms_key_id,
lakehouse_registration_status,
maintenance_track_name,
manual_snapshot_retention_period,
master_password_secret_arn,
master_password_secret_kms_key_id,
master_username,
modify_status,
multi_az,
multi_az_secondary,
next_maintenance_window_start_time,
node_type,
number_of_nodes,
pending_actions,
pending_modified_values,
preferred_maintenance_window,
publicly_accessible,
reserved_node_exchange_status,
resize_info,
restore_status,
snapshot_schedule_identifier,
snapshot_schedule_state,
tags,
total_storage_capacity_in_mega_bytes,
vpc_id,
vpc_security_groups
FROM aws.redshift.clusters
WHERE region = '{{ region }}' -- required
AND ClusterIdentifier = '{{ ClusterIdentifier }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND TagKeys = '{{ TagKeys }}'
AND TagValues = '{{ TagValues }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cluster"
    values={[
        { label: 'create_cluster', value: 'create_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster">

Creates a new cluster with the specified parameters. To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster subnet group name. The cluster subnet group identifies the subnets of your VPC that Amazon Redshift uses when creating the cluster. For more information about managing clusters, go to Amazon Redshift Clusters in the Amazon Redshift Cluster Management Guide. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. If a subnet group for a provisioned cluster is in an account with VPC BPA turned on, the following capabilities are blocked: Creating a public cluster Restoring a public cluster Modifying a private cluster to be public Adding a subnet with VPC BPA turned on to the subnet group when there's at least one public cluster within the group For more information about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.

```sql
INSERT INTO aws.redshift.clusters (
ClusterIdentifier,
NodeType,
MasterUsername,
region,
DBName,
ClusterType,
MasterUserPassword,
ClusterSecurityGroups,
VpcSecurityGroupIds,
ClusterSubnetGroupName,
AvailabilityZone,
PreferredMaintenanceWindow,
ClusterParameterGroupName,
AutomatedSnapshotRetentionPeriod,
ManualSnapshotRetentionPeriod,
Port,
ClusterVersion,
AllowVersionUpgrade,
NumberOfNodes,
PubliclyAccessible,
Encrypted,
HsmClientCertificateIdentifier,
HsmConfigurationIdentifier,
ElasticIp,
Tags,
KmsKeyId,
EnhancedVpcRouting,
AdditionalInfo,
IamRoles,
MaintenanceTrackName,
SnapshotScheduleIdentifier,
AvailabilityZoneRelocation,
AquaConfigurationStatus,
DefaultIamRoleArn,
LoadSampleData,
ManageMasterPassword,
MasterPasswordSecretKmsKeyId,
IpAddressType,
MultiAZ,
RedshiftIdcApplicationArn,
CatalogName,
ExtraComputeForAutomaticOptimization
)
SELECT 
'{{ ClusterIdentifier }}',
'{{ NodeType }}',
'{{ MasterUsername }}',
'{{ region }}',
'{{ DBName }}',
'{{ ClusterType }}',
'{{ MasterUserPassword }}',
'{{ ClusterSecurityGroups }}',
'{{ VpcSecurityGroupIds }}',
'{{ ClusterSubnetGroupName }}',
'{{ AvailabilityZone }}',
'{{ PreferredMaintenanceWindow }}',
'{{ ClusterParameterGroupName }}',
'{{ AutomatedSnapshotRetentionPeriod }}',
'{{ ManualSnapshotRetentionPeriod }}',
'{{ Port }}',
'{{ ClusterVersion }}',
'{{ AllowVersionUpgrade }}',
'{{ NumberOfNodes }}',
'{{ PubliclyAccessible }}',
'{{ Encrypted }}',
'{{ HsmClientCertificateIdentifier }}',
'{{ HsmConfigurationIdentifier }}',
'{{ ElasticIp }}',
'{{ Tags }}',
'{{ KmsKeyId }}',
'{{ EnhancedVpcRouting }}',
'{{ AdditionalInfo }}',
'{{ IamRoles }}',
'{{ MaintenanceTrackName }}',
'{{ SnapshotScheduleIdentifier }}',
'{{ AvailabilityZoneRelocation }}',
'{{ AquaConfigurationStatus }}',
'{{ DefaultIamRoleArn }}',
'{{ LoadSampleData }}',
'{{ ManageMasterPassword }}',
'{{ MasterPasswordSecretKmsKeyId }}',
'{{ IpAddressType }}',
'{{ MultiAZ }}',
'{{ RedshiftIdcApplicationArn }}',
'{{ CatalogName }}',
'{{ ExtraComputeForAutomaticOptimization }}'
RETURNING
allow_version_upgrade,
aqua_configuration,
automated_snapshot_retention_period,
availability_zone,
availability_zone_relocation_status,
catalog_arn,
cluster_availability_status,
cluster_create_time,
cluster_identifier,
cluster_namespace_arn,
cluster_nodes,
cluster_parameter_groups,
cluster_public_key,
cluster_revision_number,
cluster_security_groups,
cluster_snapshot_copy_status,
cluster_status,
cluster_subnet_group_name,
cluster_version,
custom_domain_certificate_arn,
custom_domain_certificate_expiry_date,
custom_domain_name,
db_name,
data_transfer_progress,
default_iam_role_arn,
deferred_maintenance_windows,
elastic_ip_status,
elastic_resize_number_of_node_options,
encrypted,
endpoint,
enhanced_vpc_routing,
expected_next_snapshot_schedule_time,
expected_next_snapshot_schedule_time_status,
extra_compute_for_automatic_optimization,
hsm_status,
iam_roles,
ip_address_type,
kms_key_id,
lakehouse_registration_status,
maintenance_track_name,
manual_snapshot_retention_period,
master_password_secret_arn,
master_password_secret_kms_key_id,
master_username,
modify_status,
multi_az,
multi_az_secondary,
next_maintenance_window_start_time,
node_type,
number_of_nodes,
pending_actions,
pending_modified_values,
preferred_maintenance_window,
publicly_accessible,
reserved_node_exchange_status,
resize_info,
restore_status,
snapshot_schedule_identifier,
snapshot_schedule_state,
tags,
total_storage_capacity_in_mega_bytes,
vpc_id,
vpc_security_groups
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clusters
  props:
    - name: ClusterIdentifier
      value: "{{ ClusterIdentifier }}"
      description: Required parameter for the clusters resource.
    - name: NodeType
      value: "{{ NodeType }}"
      description: Required parameter for the clusters resource.
    - name: MasterUsername
      value: "{{ MasterUsername }}"
      description: Required parameter for the clusters resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the clusters resource.
    - name: DBName
      value: "{{ DBName }}"
      description: The name of the first database to be created when the cluster is created. To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database. For more information, go to Create a Database in the Amazon Redshift Database Developer Guide. Default: dev Constraints: Must contain 1 to 64 alphanumeric characters. Must contain only lowercase letters. Cannot be a word that is reserved by the service. A list of reserved words can be found in Reserved Words in the Amazon Redshift Database Developer Guide.
      description: The name of the first database to be created when the cluster is created. To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database. For more information, go to Create a Database in the Amazon Redshift Database Developer Guide. Default: dev Constraints: Must contain 1 to 64 alphanumeric characters. Must contain only lowercase letters. Cannot be a word that is reserved by the service. A list of reserved words can be found in Reserved Words in the Amazon Redshift Database Developer Guide.
    - name: ClusterType
      value: "{{ ClusterType }}"
      description: The type of the cluster. When cluster type is specified as single-node, the NumberOfNodes parameter is not required. multi-node, the NumberOfNodes parameter is required. Valid Values: multi-node | single-node Default: multi-node
      description: The type of the cluster. When cluster type is specified as single-node, the NumberOfNodes parameter is not required. multi-node, the NumberOfNodes parameter is required. Valid Values: multi-node | single-node Default: multi-node
    - name: MasterUserPassword
      value: "{{ MasterUserPassword }}"
      description: The password associated with the admin user account for the cluster that is being created. You can't use MasterUserPassword if ManageMasterPassword is true. Constraints: Must be between 8 and 64 characters in length. Must contain at least one uppercase letter. Must contain at least one lowercase letter. Must contain one number. Can be any printable ASCII character (ASCII code 33-126) except ' (single quote), " (double quote), \, /, or @.
      description: The password associated with the admin user account for the cluster that is being created. You can't use MasterUserPassword if ManageMasterPassword is true. Constraints: Must be between 8 and 64 characters in length. Must contain at least one uppercase letter. Must contain at least one lowercase letter. Must contain one number. Can be any printable ASCII character (ASCII code 33-126) except ' (single quote), " (double quote), \, /, or @.
    - name: ClusterSecurityGroups
      value: "{{ ClusterSecurityGroups }}"
      description: A list of security groups to be associated with this cluster. Default: The default cluster security group for Amazon Redshift.
      description: A list of security groups to be associated with this cluster. Default: The default cluster security group for Amazon Redshift.
    - name: VpcSecurityGroupIds
      value: "{{ VpcSecurityGroupIds }}"
      description: A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster. Default: The default VPC security group is associated with the cluster.
      description: A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster. Default: The default VPC security group is associated with the cluster.
    - name: ClusterSubnetGroupName
      value: "{{ ClusterSubnetGroupName }}"
      description: The name of a cluster subnet group to be associated with this cluster. If this parameter is not provided the resulting cluster will be deployed outside virtual private cloud (VPC).
      description: The name of a cluster subnet group to be associated with this cluster. If this parameter is not provided the resulting cluster will be deployed outside virtual private cloud (VPC).
    - name: AvailabilityZone
      value: "{{ AvailabilityZone }}"
      description: The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. For example, if you have several EC2 instances running in a specific Availability Zone, then you might want the cluster to be provisioned in the same zone in order to decrease network latency. Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint. Example: us-east-2d Constraint: The specified Availability Zone must be in the same region as the current endpoint.
      description: The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. For example, if you have several EC2 instances running in a specific Availability Zone, then you might want the cluster to be provisioned in the same zone in order to decrease network latency. Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint. Example: us-east-2d Constraint: The specified Availability Zone must be in the same region as the current endpoint.
    - name: PreferredMaintenanceWindow
      value: "{{ PreferredMaintenanceWindow }}"
      description: The weekly time range (in UTC) during which automated cluster maintenance can occur. Format: ddd:hh24:mi-ddd:hh24:mi Default: A 30-minute window selected at random from an 8-hour block of time per region, occurring on a random day of the week. For more information about the time blocks for each region, see Maintenance Windows in Amazon Redshift Cluster Management Guide. Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun Constraints: Minimum 30-minute window.
      description: The weekly time range (in UTC) during which automated cluster maintenance can occur. Format: ddd:hh24:mi-ddd:hh24:mi Default: A 30-minute window selected at random from an 8-hour block of time per region, occurring on a random day of the week. For more information about the time blocks for each region, see Maintenance Windows in Amazon Redshift Cluster Management Guide. Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun Constraints: Minimum 30-minute window.
    - name: ClusterParameterGroupName
      value: "{{ ClusterParameterGroupName }}"
      description: The name of the parameter group to be associated with this cluster. Default: The default Amazon Redshift cluster parameter group. For information about the default parameter group, go to Working with Amazon Redshift Parameter Groups Constraints: Must be 1 to 255 alphanumeric characters or hyphens. First character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens.
      description: The name of the parameter group to be associated with this cluster. Default: The default Amazon Redshift cluster parameter group. For information about the default parameter group, go to Working with Amazon Redshift Parameter Groups Constraints: Must be 1 to 255 alphanumeric characters or hyphens. First character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens.
    - name: AutomatedSnapshotRetentionPeriod
      value: {{ AutomatedSnapshotRetentionPeriod }}
      description: The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with CreateClusterSnapshot. You can't disable automated snapshots for RG or RA3 node types. Set the automated retention period from 1-35 days. Default: 1 Constraints: Must be a value from 0 to 35.
      description: The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with CreateClusterSnapshot. You can't disable automated snapshots for RG or RA3 node types. Set the automated retention period from 1-35 days. Default: 1 Constraints: Must be a value from 0 to 35.
    - name: ManualSnapshotRetentionPeriod
      value: {{ ManualSnapshotRetentionPeriod }}
      description: The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots. The value must be either -1 or an integer between 1 and 3,653.
      description: The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots. The value must be either -1 or an integer between 1 and 3,653.
    - name: Port
      value: {{ Port }}
      description: The port number on which the cluster accepts incoming connections. The cluster is accessible only via the JDBC and ODBC connection strings. Part of the connection string requires the port on which the cluster will listen for incoming connections. Default: 5439 Valid Values: For clusters with RG or RA3 nodes - Select a port within the ranges 5431-5455 or 8191-8215. (If you have an existing cluster with RG or RA3 nodes, it isn't required that you change the port to these ranges.) For clusters with dc2 nodes - Select a port within the range 1150-65535.
      description: The port number on which the cluster accepts incoming connections. The cluster is accessible only via the JDBC and ODBC connection strings. Part of the connection string requires the port on which the cluster will listen for incoming connections. Default: 5439 Valid Values: For clusters with RG or RA3 nodes - Select a port within the ranges 5431-5455 or 8191-8215. (If you have an existing cluster with RG or RA3 nodes, it isn't required that you change the port to these ranges.) For clusters with dc2 nodes - Select a port within the range 1150-65535.
    - name: ClusterVersion
      value: "{{ ClusterVersion }}"
      description: The version of the Amazon Redshift engine software that you want to deploy on the cluster. The version selected runs on all the nodes in the cluster. Constraints: Only version 1.0 is currently available. Example: 1.0
      description: The version of the Amazon Redshift engine software that you want to deploy on the cluster. The version selected runs on all the nodes in the cluster. Constraints: Only version 1.0 is currently available. Example: 1.0
    - name: AllowVersionUpgrade
      value: {{ AllowVersionUpgrade }}
      description: If true, major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. When a new major version of the Amazon Redshift engine is released, you can request that the service automatically apply upgrades during the maintenance window to the Amazon Redshift engine that is running on your cluster. Default: true
      description: If true, major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. When a new major version of the Amazon Redshift engine is released, you can request that the service automatically apply upgrades during the maintenance window to the Amazon Redshift engine that is running on your cluster. Default: true
    - name: NumberOfNodes
      value: {{ NumberOfNodes }}
      description: The number of compute nodes in the cluster. This parameter is required when the ClusterType parameter is specified as multi-node. For information about determining how many nodes you need, go to Working with Clusters in the Amazon Redshift Cluster Management Guide. If you don't specify this parameter, you get a single-node cluster. When requesting a multi-node cluster, you must specify the number of nodes that you want in the cluster. Default: 1 Constraints: Value must be at least 1 and no more than 100.
      description: The number of compute nodes in the cluster. This parameter is required when the ClusterType parameter is specified as multi-node. For information about determining how many nodes you need, go to Working with Clusters in the Amazon Redshift Cluster Management Guide. If you don't specify this parameter, you get a single-node cluster. When requesting a multi-node cluster, you must specify the number of nodes that you want in the cluster. Default: 1 Constraints: Value must be at least 1 and no more than 100.
    - name: PubliclyAccessible
      value: {{ PubliclyAccessible }}
      description: If true, the cluster can be accessed from a public network. Default: false
      description: If true, the cluster can be accessed from a public network. Default: false
    - name: Encrypted
      value: {{ Encrypted }}
      description: If true, the data in the cluster is encrypted at rest. If you set the value on this parameter to false, the request will fail. Default: true
      description: If true, the data in the cluster is encrypted at rest. If you set the value on this parameter to false, the request will fail. Default: true
    - name: HsmClientCertificateIdentifier
      value: "{{ HsmClientCertificateIdentifier }}"
      description: Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.
      description: Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.
    - name: HsmConfigurationIdentifier
      value: "{{ HsmConfigurationIdentifier }}"
      description: Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
      description: Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
    - name: ElasticIp
      value: "{{ ElasticIp }}"
      description: The Elastic IP (EIP) address for the cluster. Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible through an Internet gateway. Don't specify the Elastic IP address for a publicly accessible cluster with availability zone relocation turned on. For more information about provisioning clusters in EC2-VPC, go to Supported Platforms to Launch Your Cluster in the Amazon Redshift Cluster Management Guide.
      description: The Elastic IP (EIP) address for the cluster. Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible through an Internet gateway. Don't specify the Elastic IP address for a publicly accessible cluster with availability zone relocation turned on. For more information about provisioning clusters in EC2-VPC, go to Supported Platforms to Launch Your Cluster in the Amazon Redshift Cluster Management Guide.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tag instances.
      description: A list of tag instances.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: The Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.
      description: The Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.
    - name: EnhancedVpcRouting
      value: {{ EnhancedVpcRouting }}
      description: An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see Enhanced VPC Routing in the Amazon Redshift Cluster Management Guide. If this option is true, enhanced VPC routing is enabled. Default: false
      description: An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see Enhanced VPC Routing in the Amazon Redshift Cluster Management Guide. If this option is true, enhanced VPC routing is enabled. Default: false
    - name: AdditionalInfo
      value: "{{ AdditionalInfo }}"
      description: Reserved.
      description: Reserved.
    - name: IamRoles
      value: "{{ IamRoles }}"
      description: A list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to Quotas and limits in the Amazon Redshift Cluster Management Guide.
      description: A list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to Quotas and limits in the Amazon Redshift Cluster Management Guide.
    - name: MaintenanceTrackName
      value: "{{ MaintenanceTrackName }}"
      description: An optional parameter for the name of the maintenance track for the cluster. If you don't provide a maintenance track name, the cluster is assigned to the current track.
      description: An optional parameter for the name of the maintenance track for the cluster. If you don't provide a maintenance track name, the cluster is assigned to the current track.
    - name: SnapshotScheduleIdentifier
      value: "{{ SnapshotScheduleIdentifier }}"
      description: A unique identifier for the snapshot schedule.
      description: A unique identifier for the snapshot schedule.
    - name: AvailabilityZoneRelocation
      value: {{ AvailabilityZoneRelocation }}
      description: The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster is created.
      description: The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster is created.
    - name: AquaConfigurationStatus
      value: "{{ AquaConfigurationStatus }}"
      description: This parameter is retired. It does not set the AQUA configuration status. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
      description: This parameter is retired. It does not set the AQUA configuration status. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
    - name: DefaultIamRoleArn
      value: "{{ DefaultIamRoleArn }}"
      description: The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was created.
      description: The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was created.
    - name: LoadSampleData
      value: "{{ LoadSampleData }}"
      description: A flag that specifies whether to load sample data once the cluster is created.
      description: A flag that specifies whether to load sample data once the cluster is created.
    - name: ManageMasterPassword
      value: {{ ManageMasterPassword }}
      description: If true, Amazon Redshift uses Secrets Manager to manage this cluster's admin credentials. You can't use MasterUserPassword if ManageMasterPassword is true. If ManageMasterPassword is false or not set, Amazon Redshift uses MasterUserPassword for the admin user account's password.
      description: If true, Amazon Redshift uses Secrets Manager to manage this cluster's admin credentials. You can't use MasterUserPassword if ManageMasterPassword is true. If ManageMasterPassword is false or not set, Amazon Redshift uses MasterUserPassword for the admin user account's password.
    - name: MasterPasswordSecretKmsKeyId
      value: "{{ MasterPasswordSecretKmsKeyId }}"
      description: The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin credentials secret. You can only use this parameter if ManageMasterPassword is true.
      description: The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin credentials secret. You can only use this parameter if ManageMasterPassword is true.
    - name: IpAddressType
      value: "{{ IpAddressType }}"
      description: The IP address types that the cluster supports. Possible values are ipv4 and dualstack.
      description: The IP address types that the cluster supports. Possible values are ipv4 and dualstack.
    - name: MultiAZ
      value: {{ MultiAZ }}
      description: If true, Amazon Redshift will deploy the cluster in two Availability Zones (AZ).
      description: If true, Amazon Redshift will deploy the cluster in two Availability Zones (AZ).
    - name: RedshiftIdcApplicationArn
      value: "{{ RedshiftIdcApplicationArn }}"
      description: The Amazon resource name (ARN) of the Amazon Redshift IAM Identity Center application.
      description: The Amazon resource name (ARN) of the Amazon Redshift IAM Identity Center application.
    - name: CatalogName
      value: "{{ CatalogName }}"
      description: The name of the Glue data catalog that will be associated with the cluster enabled with Amazon Redshift federated permissions. Constraints: Must contain at least one lowercase letter. Can only contain lowercase letters (a-z), numbers (0-9), underscores (_), and hyphens (-). Pattern: ^[a-z0-9_-]*[a-z]+[a-z0-9_-]*$ Example: my-catalog_01
      description: The name of the Glue data catalog that will be associated with the cluster enabled with Amazon Redshift federated permissions. Constraints: Must contain at least one lowercase letter. Can only contain lowercase letters (a-z), numbers (0-9), underscores (_), and hyphens (-). Pattern: ^[a-z0-9_-]*[a-z]+[a-z0-9_-]*$ Example: my-catalog_01
    - name: ExtraComputeForAutomaticOptimization
      value: {{ ExtraComputeForAutomaticOptimization }}
      description: If true, allocates additional compute resources for running automatic optimization operations. Default: false
      description: If true, allocates additional compute resources for running automatic optimization operations. Default: false
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_snapshot_copy_retention_period"
    values={[
        { label: 'modify_snapshot_copy_retention_period', value: 'modify_snapshot_copy_retention_period' },
        { label: 'modify_cluster', value: 'modify_cluster' }
    ]}
>
<TabItem value="modify_snapshot_copy_retention_period">

Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period.

```sql
UPDATE aws.redshift.clusters
SET 
-- No updatable properties
WHERE 
ClusterIdentifier = '{{ ClusterIdentifier }}' --required
AND RetentionPeriod = '{{ RetentionPeriod }}' --required
AND region = '{{ region }}' --required
AND Manual = {{ Manual}}
RETURNING
allow_version_upgrade,
aqua_configuration,
automated_snapshot_retention_period,
availability_zone,
availability_zone_relocation_status,
catalog_arn,
cluster_availability_status,
cluster_create_time,
cluster_identifier,
cluster_namespace_arn,
cluster_nodes,
cluster_parameter_groups,
cluster_public_key,
cluster_revision_number,
cluster_security_groups,
cluster_snapshot_copy_status,
cluster_status,
cluster_subnet_group_name,
cluster_version,
custom_domain_certificate_arn,
custom_domain_certificate_expiry_date,
custom_domain_name,
db_name,
data_transfer_progress,
default_iam_role_arn,
deferred_maintenance_windows,
elastic_ip_status,
elastic_resize_number_of_node_options,
encrypted,
endpoint,
enhanced_vpc_routing,
expected_next_snapshot_schedule_time,
expected_next_snapshot_schedule_time_status,
extra_compute_for_automatic_optimization,
hsm_status,
iam_roles,
ip_address_type,
kms_key_id,
lakehouse_registration_status,
maintenance_track_name,
manual_snapshot_retention_period,
master_password_secret_arn,
master_password_secret_kms_key_id,
master_username,
modify_status,
multi_az,
multi_az_secondary,
next_maintenance_window_start_time,
node_type,
number_of_nodes,
pending_actions,
pending_modified_values,
preferred_maintenance_window,
publicly_accessible,
reserved_node_exchange_status,
resize_info,
restore_status,
snapshot_schedule_identifier,
snapshot_schedule_state,
tags,
total_storage_capacity_in_mega_bytes,
vpc_id,
vpc_security_groups;
```
</TabItem>
<TabItem value="modify_cluster">

Modifies the settings for a cluster. You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change. You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to Amazon Redshift Clusters in the Amazon Redshift Cluster Management Guide. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. If a subnet group for a provisioned cluster is in an account with VPC BPA turned on, the following capabilities are blocked: Creating a public cluster Restoring a public cluster Modifying a private cluster to be public Adding a subnet with VPC BPA turned on to the subnet group when there's at least one public cluster within the group For more information about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.

```sql
UPDATE aws.redshift.clusters
SET 
-- No updatable properties
WHERE 
ClusterIdentifier = '{{ ClusterIdentifier }}' --required
AND region = '{{ region }}' --required
AND ClusterType = '{{ ClusterType}}'
AND NodeType = '{{ NodeType}}'
AND NumberOfNodes = '{{ NumberOfNodes}}'
AND ClusterSecurityGroups = '{{ ClusterSecurityGroups}}'
AND VpcSecurityGroupIds = '{{ VpcSecurityGroupIds}}'
AND MasterUserPassword = '{{ MasterUserPassword}}'
AND ClusterParameterGroupName = '{{ ClusterParameterGroupName}}'
AND AutomatedSnapshotRetentionPeriod = '{{ AutomatedSnapshotRetentionPeriod}}'
AND ManualSnapshotRetentionPeriod = '{{ ManualSnapshotRetentionPeriod}}'
AND PreferredMaintenanceWindow = '{{ PreferredMaintenanceWindow}}'
AND ClusterVersion = '{{ ClusterVersion}}'
AND AllowVersionUpgrade = {{ AllowVersionUpgrade}}
AND HsmClientCertificateIdentifier = '{{ HsmClientCertificateIdentifier}}'
AND HsmConfigurationIdentifier = '{{ HsmConfigurationIdentifier}}'
AND NewClusterIdentifier = '{{ NewClusterIdentifier}}'
AND PubliclyAccessible = {{ PubliclyAccessible}}
AND ElasticIp = '{{ ElasticIp}}'
AND EnhancedVpcRouting = {{ EnhancedVpcRouting}}
AND MaintenanceTrackName = '{{ MaintenanceTrackName}}'
AND Encrypted = {{ Encrypted}}
AND KmsKeyId = '{{ KmsKeyId}}'
AND AvailabilityZoneRelocation = {{ AvailabilityZoneRelocation}}
AND AvailabilityZone = '{{ AvailabilityZone}}'
AND Port = '{{ Port}}'
AND ManageMasterPassword = {{ ManageMasterPassword}}
AND MasterPasswordSecretKmsKeyId = '{{ MasterPasswordSecretKmsKeyId}}'
AND IpAddressType = '{{ IpAddressType}}'
AND MultiAZ = {{ MultiAZ}}
AND ExtraComputeForAutomaticOptimization = {{ ExtraComputeForAutomaticOptimization}}
RETURNING
allow_version_upgrade,
aqua_configuration,
automated_snapshot_retention_period,
availability_zone,
availability_zone_relocation_status,
catalog_arn,
cluster_availability_status,
cluster_create_time,
cluster_identifier,
cluster_namespace_arn,
cluster_nodes,
cluster_parameter_groups,
cluster_public_key,
cluster_revision_number,
cluster_security_groups,
cluster_snapshot_copy_status,
cluster_status,
cluster_subnet_group_name,
cluster_version,
custom_domain_certificate_arn,
custom_domain_certificate_expiry_date,
custom_domain_name,
db_name,
data_transfer_progress,
default_iam_role_arn,
deferred_maintenance_windows,
elastic_ip_status,
elastic_resize_number_of_node_options,
encrypted,
endpoint,
enhanced_vpc_routing,
expected_next_snapshot_schedule_time,
expected_next_snapshot_schedule_time_status,
extra_compute_for_automatic_optimization,
hsm_status,
iam_roles,
ip_address_type,
kms_key_id,
lakehouse_registration_status,
maintenance_track_name,
manual_snapshot_retention_period,
master_password_secret_arn,
master_password_secret_kms_key_id,
master_username,
modify_status,
multi_az,
multi_az_secondary,
next_maintenance_window_start_time,
node_type,
number_of_nodes,
pending_actions,
pending_modified_values,
preferred_maintenance_window,
publicly_accessible,
reserved_node_exchange_status,
resize_info,
restore_status,
snapshot_schedule_identifier,
snapshot_schedule_state,
tags,
total_storage_capacity_in_mega_bytes,
vpc_id,
vpc_security_groups;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cluster"
    values={[
        { label: 'delete_cluster', value: 'delete_cluster' }
    ]}
>
<TabItem value="delete_cluster">

Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use DescribeClusters to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to Amazon Redshift Clusters in the Amazon Redshift Cluster Management Guide. If you want to shut down the cluster and retain it for future use, set SkipFinalClusterSnapshot to false and specify a name for FinalClusterSnapshotIdentifier. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. For more information about managing clusters, go to Amazon Redshift Clusters in the Amazon Redshift Cluster Management Guide.

```sql
DELETE FROM aws.redshift.clusters
WHERE ClusterIdentifier = '{{ ClusterIdentifier }}' --required
AND region = '{{ region }}' --required
AND SkipFinalClusterSnapshot = '{{ SkipFinalClusterSnapshot }}'
AND FinalClusterSnapshotIdentifier = '{{ FinalClusterSnapshotIdentifier }}'
AND FinalClusterSnapshotRetentionPeriod = '{{ FinalClusterSnapshotRetentionPeriod }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_resize"
    values={[
        { label: 'cancel_resize', value: 'cancel_resize' },
        { label: 'copy_cluster_snapshot', value: 'copy_cluster_snapshot' },
        { label: 'disable_logging', value: 'disable_logging' },
        { label: 'disable_snapshot_copy', value: 'disable_snapshot_copy' },
        { label: 'enable_logging', value: 'enable_logging' },
        { label: 'enable_snapshot_copy', value: 'enable_snapshot_copy' },
        { label: 'failover_primary_compute', value: 'failover_primary_compute' },
        { label: 'modify_aqua_configuration', value: 'modify_aqua_configuration' },
        { label: 'modify_cluster_iam_roles', value: 'modify_cluster_iam_roles' },
        { label: 'modify_cluster_maintenance', value: 'modify_cluster_maintenance' },
        { label: 'modify_lakehouse_configuration', value: 'modify_lakehouse_configuration' },
        { label: 'pause_cluster', value: 'pause_cluster' },
        { label: 'reboot_cluster', value: 'reboot_cluster' },
        { label: 'resize_cluster', value: 'resize_cluster' },
        { label: 'restore_from_cluster_snapshot', value: 'restore_from_cluster_snapshot' },
        { label: 'restore_table_from_cluster_snapshot', value: 'restore_table_from_cluster_snapshot' },
        { label: 'resume_cluster', value: 'resume_cluster' },
        { label: 'rotate_encryption_key', value: 'rotate_encryption_key' }
    ]}
>
<TabItem value="cancel_resize">

Cancels a resize operation for a cluster.

```sql
EXEC aws.redshift.clusters.cancel_resize 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="copy_cluster_snapshot">

Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state. When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them. For more information about working with snapshots, go to Amazon Redshift Snapshots in the Amazon Redshift Cluster Management Guide.

```sql
EXEC aws.redshift.clusters.copy_cluster_snapshot 
@SourceSnapshotIdentifier='{{ SourceSnapshotIdentifier }}' --required, 
@TargetSnapshotIdentifier='{{ TargetSnapshotIdentifier }}' --required, 
@region='{{ region }}' --required, 
@SourceSnapshotClusterIdentifier='{{ SourceSnapshotClusterIdentifier }}', 
@ManualSnapshotRetentionPeriod='{{ ManualSnapshotRetentionPeriod }}'
;
```
</TabItem>
<TabItem value="disable_logging">

Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.

```sql
EXEC aws.redshift.clusters.disable_logging 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="disable_snapshot_copy">

Disables the automatic copying of snapshots from one region to another region for a specified cluster. If your cluster and its snapshots are encrypted using an encrypted symmetric key from Key Management Service, use DeleteSnapshotCopyGrant to delete the grant that grants Amazon Redshift permission to the key in the destination region.

```sql
EXEC aws.redshift.clusters.disable_snapshot_copy 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="enable_logging">

Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.

```sql
EXEC aws.redshift.clusters.enable_logging 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@region='{{ region }}' --required, 
@BucketName='{{ BucketName }}', 
@S3KeyPrefix='{{ S3KeyPrefix }}', 
@LogDestinationType='{{ LogDestinationType }}', 
@LogExports='{{ LogExports }}'
;
```
</TabItem>
<TabItem value="enable_snapshot_copy">

Enables the automatic copy of snapshots from one region to another region for a specified cluster.

```sql
EXEC aws.redshift.clusters.enable_snapshot_copy 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@DestinationRegion='{{ DestinationRegion }}' --required, 
@region='{{ region }}' --required, 
@RetentionPeriod='{{ RetentionPeriod }}', 
@SnapshotCopyGrantName='{{ SnapshotCopyGrantName }}', 
@ManualSnapshotRetentionPeriod='{{ ManualSnapshotRetentionPeriod }}'
;
```
</TabItem>
<TabItem value="failover_primary_compute">

Fails over the primary compute unit of the specified Multi-AZ cluster to another Availability Zone.

```sql
EXEC aws.redshift.clusters.failover_primary_compute 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="modify_aqua_configuration">

This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).

```sql
EXEC aws.redshift.clusters.modify_aqua_configuration 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@region='{{ region }}' --required, 
@AquaConfigurationStatus='{{ AquaConfigurationStatus }}'
;
```
</TabItem>
<TabItem value="modify_cluster_iam_roles">

Modifies the list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services. The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to Quotas and limits in the Amazon Redshift Cluster Management Guide.

```sql
EXEC aws.redshift.clusters.modify_cluster_iam_roles 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@region='{{ region }}' --required, 
@AddIamRoles='{{ AddIamRoles }}', 
@RemoveIamRoles='{{ RemoveIamRoles }}', 
@DefaultIamRoleArn='{{ DefaultIamRoleArn }}'
;
```
</TabItem>
<TabItem value="modify_cluster_maintenance">

Modifies the maintenance settings of a cluster.

```sql
EXEC aws.redshift.clusters.modify_cluster_maintenance 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@region='{{ region }}' --required, 
@DeferMaintenance={{ DeferMaintenance }}, 
@DeferMaintenanceIdentifier='{{ DeferMaintenanceIdentifier }}', 
@DeferMaintenanceStartTime='{{ DeferMaintenanceStartTime }}', 
@DeferMaintenanceEndTime='{{ DeferMaintenanceEndTime }}', 
@DeferMaintenanceDuration='{{ DeferMaintenanceDuration }}'
;
```
</TabItem>
<TabItem value="modify_lakehouse_configuration">

Modifies the lakehouse configuration for a cluster. This operation allows you to manage Amazon Redshift federated permissions and Amazon Web Services IAM Identity Center trusted identity propagation.

```sql
EXEC aws.redshift.clusters.modify_lakehouse_configuration 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@region='{{ region }}' --required, 
@LakehouseRegistration='{{ LakehouseRegistration }}', 
@CatalogName='{{ CatalogName }}', 
@LakehouseIdcRegistration='{{ LakehouseIdcRegistration }}', 
@LakehouseIdcApplicationArn='{{ LakehouseIdcApplicationArn }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="pause_cluster">

Pauses a cluster.

```sql
EXEC aws.redshift.clusters.pause_cluster 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="reboot_cluster">

Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to rebooting. A cluster event is created when the reboot is completed. Any pending cluster modifications (see ModifyCluster) are applied at this reboot. For more information about managing clusters, go to Amazon Redshift Clusters in the Amazon Redshift Cluster Management Guide.

```sql
EXEC aws.redshift.clusters.reboot_cluster 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="resize_cluster">

Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. Elastic resize operations have the following restrictions: You can only resize clusters of the following types: dc2.large dc2.8xlarge rg.xlarge rg.4xlarge ra3.large ra3.xlplus ra3.4xlarge ra3.16xlarge The type of nodes that you add must match the node type for the cluster.

```sql
EXEC aws.redshift.clusters.resize_cluster 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@region='{{ region }}' --required, 
@ClusterType='{{ ClusterType }}', 
@NodeType='{{ NodeType }}', 
@NumberOfNodes='{{ NumberOfNodes }}', 
@Classic={{ Classic }}, 
@ReservedNodeId='{{ ReservedNodeId }}', 
@TargetReservedNodeOfferingId='{{ TargetReservedNodeOfferingId }}'
;
```
</TabItem>
<TabItem value="restore_from_cluster_snapshot">

Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the ModifyCluster API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore. If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. If a subnet group for a provisioned cluster is in an account with VPC BPA turned on, the following capabilities are blocked: Creating a public cluster Restoring a public cluster Modifying a private cluster to be public Adding a subnet with VPC BPA turned on to the subnet group when there's at least one public cluster within the group For more information about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide. For more information about working with snapshots, go to Amazon Redshift Snapshots in the Amazon Redshift Cluster Management Guide.

```sql
EXEC aws.redshift.clusters.restore_from_cluster_snapshot 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@region='{{ region }}' --required, 
@SnapshotIdentifier='{{ SnapshotIdentifier }}', 
@SnapshotArn='{{ SnapshotArn }}', 
@SnapshotClusterIdentifier='{{ SnapshotClusterIdentifier }}', 
@Port='{{ Port }}', 
@AvailabilityZone='{{ AvailabilityZone }}', 
@AllowVersionUpgrade={{ AllowVersionUpgrade }}, 
@ClusterSubnetGroupName='{{ ClusterSubnetGroupName }}', 
@PubliclyAccessible={{ PubliclyAccessible }}, 
@OwnerAccount='{{ OwnerAccount }}', 
@HsmClientCertificateIdentifier='{{ HsmClientCertificateIdentifier }}', 
@HsmConfigurationIdentifier='{{ HsmConfigurationIdentifier }}', 
@ElasticIp='{{ ElasticIp }}', 
@ClusterParameterGroupName='{{ ClusterParameterGroupName }}', 
@ClusterSecurityGroups='{{ ClusterSecurityGroups }}', 
@VpcSecurityGroupIds='{{ VpcSecurityGroupIds }}', 
@PreferredMaintenanceWindow='{{ PreferredMaintenanceWindow }}', 
@AutomatedSnapshotRetentionPeriod='{{ AutomatedSnapshotRetentionPeriod }}', 
@ManualSnapshotRetentionPeriod='{{ ManualSnapshotRetentionPeriod }}', 
@KmsKeyId='{{ KmsKeyId }}', 
@NodeType='{{ NodeType }}', 
@EnhancedVpcRouting={{ EnhancedVpcRouting }}, 
@AdditionalInfo='{{ AdditionalInfo }}', 
@IamRoles='{{ IamRoles }}', 
@MaintenanceTrackName='{{ MaintenanceTrackName }}', 
@SnapshotScheduleIdentifier='{{ SnapshotScheduleIdentifier }}', 
@NumberOfNodes='{{ NumberOfNodes }}', 
@AvailabilityZoneRelocation={{ AvailabilityZoneRelocation }}, 
@AquaConfigurationStatus='{{ AquaConfigurationStatus }}', 
@DefaultIamRoleArn='{{ DefaultIamRoleArn }}', 
@ReservedNodeId='{{ ReservedNodeId }}', 
@TargetReservedNodeOfferingId='{{ TargetReservedNodeOfferingId }}', 
@Encrypted={{ Encrypted }}, 
@ManageMasterPassword={{ ManageMasterPassword }}, 
@MasterPasswordSecretKmsKeyId='{{ MasterPasswordSecretKmsKeyId }}', 
@IpAddressType='{{ IpAddressType }}', 
@MultiAZ={{ MultiAZ }}, 
@CatalogName='{{ CatalogName }}', 
@RedshiftIdcApplicationArn='{{ RedshiftIdcApplicationArn }}'
;
```
</TabItem>
<TabItem value="restore_table_from_cluster_snapshot">

Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from. You cannot use RestoreTableFromClusterSnapshot to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call RestoreTableFromClusterSnapshot. When you have renamed your original table, then you can pass the original name of the table as the NewTableName parameter value in the call to RestoreTableFromClusterSnapshot. This way, you can replace the original table with the table created from the snapshot. You can't use this operation to restore tables with interleaved sort keys.

```sql
EXEC aws.redshift.clusters.restore_table_from_cluster_snapshot 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@SnapshotIdentifier='{{ SnapshotIdentifier }}' --required, 
@SourceDatabaseName='{{ SourceDatabaseName }}' --required, 
@SourceTableName='{{ SourceTableName }}' --required, 
@NewTableName='{{ NewTableName }}' --required, 
@region='{{ region }}' --required, 
@SourceSchemaName='{{ SourceSchemaName }}', 
@TargetDatabaseName='{{ TargetDatabaseName }}', 
@TargetSchemaName='{{ TargetSchemaName }}', 
@EnableCaseSensitiveIdentifier={{ EnableCaseSensitiveIdentifier }}
;
```
</TabItem>
<TabItem value="resume_cluster">

Resumes a paused cluster.

```sql
EXEC aws.redshift.clusters.resume_cluster 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="rotate_encryption_key">

Rotates the encryption keys for a cluster.

```sql
EXEC aws.redshift.clusters.rotate_encryption_key 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
