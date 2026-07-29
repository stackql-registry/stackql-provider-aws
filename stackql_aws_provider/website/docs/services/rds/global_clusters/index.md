--- 
title: global_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - global_clusters
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

Creates, updates, deletes, gets or lists a <code>global_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="global_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.global_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_global_clusters"
    values={[
        { label: 'describe_global_clusters', value: 'describe_global_clusters' }
    ]}
>
<TabItem value="describe_global_clusters">

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
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>The default database name within the new global database cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection" /></td>
    <td><code>boolean</code></td>
    <td>The deletion protection setting for the new global database cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The writer endpoint for the new global database cluster. This endpoint always points to the writer DB instance in the current primary cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The Aurora database engine used by the global database cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_lifecycle_support" /></td>
    <td><code>string</code></td>
    <td>The lifecycle type for the global cluster. For more information, see CreateGlobalCluster.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>Indicates the database engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="failover_state" /></td>
    <td><code>string</code></td>
    <td>A data object containing all properties for the current state of an in-process or pending switchover or failover process for this global cluster (Aurora global database). This object is empty unless the SwitchoverGlobalCluster or FailoverGlobalCluster operation was called on this global cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="global_cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the global database cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="global_cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>Contains a user-supplied global database cluster identifier. This identifier is the unique key that identifies a global database cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="global_cluster_members" /></td>
    <td><code>string</code></td>
    <td>The list of primary and secondary clusters within the global database cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="global_cluster_resource_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services partition-unique, immutable identifier for the global database cluster. This identifier is found in Amazon Web Services CloudTrail log entries whenever the Amazon Web Services KMS key for the DB cluster is accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Specifies the current state of this global database cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_encrypted" /></td>
    <td><code>boolean</code></td>
    <td>The storage encryption setting for the global database cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_encryption_type" /></td>
    <td><code>string</code></td>
    <td>The type of encryption used to protect data at rest in the global database cluster. Possible values: none - The global database cluster is not encrypted. sse-rds - The global database cluster is encrypted using an Amazon Web Services owned KMS key. sse-kms - The global database cluster is encrypted using a customer managed KMS key or Amazon Web Services managed KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_list" /></td>
    <td><code>string</code></td>
    <td>A list of tags. For more information, see Tagging Amazon RDS resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS resources in the Amazon Aurora User Guide.</td>
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
    <td><a href="#describe_global_clusters"><CopyableCode code="describe_global_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns information about Aurora global database clusters. This API supports pagination. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. This action only applies to Aurora DB clusters.</td>
</tr>
<tr>
    <td><a href="#create_global_cluster"><CopyableCode code="create_global_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SourceDBClusterIdentifier"><code>SourceDBClusterIdentifier</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-EngineLifecycleSupport"><code>EngineLifecycleSupport</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-StorageEncrypted"><code>StorageEncrypted</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem. You can create a global database that is initially empty, and then create the primary and secondary DB clusters in the global database. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database. This operation applies only to Aurora DB clusters.</td>
</tr>
<tr>
    <td><a href="#remove_from_global_cluster"><CopyableCode code="remove_from_global_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-DbClusterIdentifier"><code>DbClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different Region. This operation only applies to Aurora DB clusters.</td>
</tr>
<tr>
    <td><a href="#modify_global_cluster"><CopyableCode code="modify_global_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NewGlobalClusterIdentifier"><code>NewGlobalClusterIdentifier</code></a>, <a href="#parameter-DeletionProtection"><code>DeletionProtection</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-AllowMajorVersionUpgrade"><code>AllowMajorVersionUpgrade</code></a></td>
    <td>Modifies a setting for an Amazon Aurora global database cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. This operation only applies to Aurora global database clusters.</td>
</tr>
<tr>
    <td><a href="#delete_global_cluster"><CopyableCode code="delete_global_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first. This action only applies to Aurora DB clusters.</td>
</tr>
<tr>
    <td><a href="#failover_global_cluster"><CopyableCode code="failover_global_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-TargetDbClusterIdentifier"><code>TargetDbClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AllowDataLoss"><code>AllowDataLoss</code></a>, <a href="#parameter-Switchover"><code>Switchover</code></a></td>
    <td>Promotes the specified secondary DB cluster to be the primary DB cluster in the global database cluster to fail over or switch over a global database. Switchover operations were previously called "managed planned failovers." Although this operation can be used either to fail over or to switch over a global database cluster, its intended use is for global database failover. To switch over a global database cluster, we recommend that you use the SwitchoverGlobalCluster operation instead. How you use this operation depends on whether you are failing over or switching over your global database cluster: Failing over - Specify the AllowDataLoss parameter and don't specify the Switchover parameter. Switching over - Specify the Switchover parameter or omit it, but don't specify the AllowDataLoss parameter. About failing over and switching over While failing over and switching over a global database cluster both change the primary DB cluster, you use these operations for different reasons: Failing over - Use this operation to respond to an unplanned event, such as a Regional disaster in the primary Region. Failing over can result in a loss of write transaction data that wasn't replicated to the chosen secondary before the failover event occurred. However, the recovery process that promotes a DB instance on the chosen seconday DB cluster to be the primary writer DB instance guarantees that the data is in a transactionally consistent state. For more information about failing over an Amazon Aurora global database, see Performing managed failovers for Aurora global databases in the Amazon Aurora User Guide. Switching over - Use this operation on a healthy global database cluster for planned events, such as Regional rotation or to fail back to the original primary DB cluster after a failover operation. With this operation, there is no data loss. For more information about switching over an Amazon Aurora global database, see Performing switchovers for Aurora global databases in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><a href="#switchover_global_cluster"><CopyableCode code="switchover_global_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-GlobalClusterIdentifier"><code>GlobalClusterIdentifier</code></a>, <a href="#parameter-TargetDbClusterIdentifier"><code>TargetDbClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Switches over the specified secondary DB cluster to be the new primary DB cluster in the global database cluster. Switchover operations were previously called "managed planned failovers." Aurora promotes the specified secondary cluster to assume full read/write capabilities and demotes the current primary cluster to a secondary (read-only) cluster, maintaining the orginal replication topology. All secondary clusters are synchronized with the primary at the beginning of the process so the new primary continues operations for the Aurora global database without losing any data. Your database is unavailable for a short time while the primary and selected secondary clusters are assuming their new roles. For more information about switching over an Aurora global database, see Performing switchovers for Amazon Aurora global databases in the Amazon Aurora User Guide. This operation is intended for controlled environments, for operations such as "regional rotation" or to fall back to the original primary after a global database failover.</td>
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
<tr id="parameter-DbClusterIdentifier">
    <td><CopyableCode code="DbClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) identifying the cluster that was detached from the Aurora global database cluster.</td>
</tr>
<tr id="parameter-GlobalClusterIdentifier">
    <td><CopyableCode code="GlobalClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the global database cluster to switch over. This parameter isn't case-sensitive. Constraints: Must match the identifier of an existing global database cluster (Aurora global database).</td>
</tr>
<tr id="parameter-TargetDbClusterIdentifier">
    <td><CopyableCode code="TargetDbClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the secondary Aurora DB cluster to promote to the new primary for the global database cluster. Use the Amazon Resource Name (ARN) for the identifier so that Aurora can locate the cluster in its Amazon Web Services Region.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AllowDataLoss">
    <td><CopyableCode code="AllowDataLoss" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to allow data loss for this global database cluster operation. Allowing data loss triggers a global failover operation. If you don't specify AllowDataLoss, the global database cluster operation defaults to a switchover. Constraints: Can't be specified together with the Switchover parameter.</td>
</tr>
<tr id="parameter-AllowMajorVersionUpgrade">
    <td><CopyableCode code="AllowMajorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to allow major version upgrades. Constraints: Must be enabled if you specify a value for the EngineVersion parameter that's a different major version than the global cluster's current version. If you upgrade the major version of a global database, the cluster and DB instance parameter groups are set to the default parameter groups for the new version. Apply any custom parameter groups after completing the upgrade.</td>
</tr>
<tr id="parameter-DatabaseName">
    <td><CopyableCode code="DatabaseName" /></td>
    <td><code>string</code></td>
    <td>The name for your database of up to 64 alphanumeric characters. If you don't specify a name, Amazon Aurora doesn't create a database in the global database cluster. Constraints: Can't be specified if SourceDBClusterIdentifier is specified. In this case, Amazon Aurora uses the database name from the source DB cluster.</td>
</tr>
<tr id="parameter-DeletionProtection">
    <td><CopyableCode code="DeletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to enable deletion protection for the global database cluster. The global database cluster can't be deleted when deletion protection is enabled.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The database engine to use for this global database cluster. Valid Values: aurora-mysql | aurora-postgresql Constraints: Can't be specified if SourceDBClusterIdentifier is specified. In this case, Amazon Aurora uses the engine of the source DB cluster.</td>
</tr>
<tr id="parameter-EngineLifecycleSupport">
    <td><CopyableCode code="EngineLifecycleSupport" /></td>
    <td><code>string</code></td>
    <td>The life cycle type for this global database cluster. By default, this value is set to open-source-rds-extended-support, which enrolls your global cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to open-source-rds-extended-support-disabled. In this case, creating the global cluster will fail if the DB major version is past its end of standard support date. This setting only applies to Aurora PostgreSQL-based global databases. You can use this setting to enroll your global cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your global cluster past the end of standard support for that engine version. For more information, see Amazon RDS Extended Support with Amazon Aurora in the Amazon Aurora User Guide. Valid Values: open-source-rds-extended-support | open-source-rds-extended-support-disabled Default: open-source-rds-extended-support</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The version number of the database engine to which you want to upgrade. To list all of the available engine versions for aurora-mysql (for MySQL-based Aurora global databases), use the following command: aws rds describe-db-engine-versions --engine aurora-mysql --query '*&#91;&#93;|&#91;?SupportsGlobalDatabases == `true`&#93;.&#91;EngineVersion&#93;' To list all of the available engine versions for aurora-postgresql (for PostgreSQL-based Aurora global databases), use the following command: aws rds describe-db-engine-versions --engine aurora-postgresql --query '*&#91;&#93;|&#91;?SupportsGlobalDatabases == `true`&#93;.&#91;EngineVersion&#93;'</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more global database clusters to describe. This parameter is case-sensitive. Currently, the only supported filter is region. If used, the request returns information about any global cluster with at least one member (primary or secondary) in the specified Amazon Web Services Regions.</td>
</tr>
<tr id="parameter-GlobalClusterIdentifier">
    <td><CopyableCode code="GlobalClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive. Constraints: If supplied, must match an existing DBClusterIdentifier.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeGlobalClusters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-NewGlobalClusterIdentifier">
    <td><CopyableCode code="NewGlobalClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The new cluster identifier for the global database cluster. This value is stored as a lowercase string. Constraints: Must contain from 1 to 63 letters, numbers, or hyphens. The first character must be a letter. Can't end with a hyphen or contain two consecutive hyphens. Example: my-cluster2</td>
</tr>
<tr id="parameter-SourceDBClusterIdentifier">
    <td><CopyableCode code="SourceDBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) to use as the primary cluster of the global database. If you provide a value for this parameter, don't specify values for the following settings because Amazon Aurora uses the values from the specified source DB cluster: DatabaseName Engine EngineVersion StorageEncrypted</td>
</tr>
<tr id="parameter-StorageEncrypted">
    <td><CopyableCode code="StorageEncrypted" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to enable storage encryption for the new global database cluster. Constraints: Can't be specified if SourceDBClusterIdentifier is specified. In this case, Amazon Aurora uses the setting from the source DB cluster.</td>
</tr>
<tr id="parameter-Switchover">
    <td><CopyableCode code="Switchover" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to switch over this global database cluster. Constraints: Can't be specified together with the AllowDataLoss parameter.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Tags to assign to the global cluster.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_global_clusters"
    values={[
        { label: 'describe_global_clusters', value: 'describe_global_clusters' }
    ]}
>
<TabItem value="describe_global_clusters">

Returns information about Aurora global database clusters. This API supports pagination. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. This action only applies to Aurora DB clusters.

```sql
SELECT
database_name,
deletion_protection,
endpoint,
engine,
engine_lifecycle_support,
engine_version,
failover_state,
global_cluster_arn,
global_cluster_identifier,
global_cluster_members,
global_cluster_resource_id,
status,
storage_encrypted,
storage_encryption_type,
tag_list
FROM aws.rds.global_clusters
WHERE region = '{{ region }}' -- required
AND GlobalClusterIdentifier = '{{ GlobalClusterIdentifier }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_global_cluster"
    values={[
        { label: 'create_global_cluster', value: 'create_global_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_global_cluster">

Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem. You can create a global database that is initially empty, and then create the primary and secondary DB clusters in the global database. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database. This operation applies only to Aurora DB clusters.

```sql
INSERT INTO aws.rds.global_clusters (
GlobalClusterIdentifier,
region,
SourceDBClusterIdentifier,
Engine,
EngineVersion,
EngineLifecycleSupport,
DeletionProtection,
DatabaseName,
StorageEncrypted,
Tags
)
SELECT 
'{{ GlobalClusterIdentifier }}',
'{{ region }}',
'{{ SourceDBClusterIdentifier }}',
'{{ Engine }}',
'{{ EngineVersion }}',
'{{ EngineLifecycleSupport }}',
'{{ DeletionProtection }}',
'{{ DatabaseName }}',
'{{ StorageEncrypted }}',
'{{ Tags }}'
RETURNING
database_name,
deletion_protection,
endpoint,
engine,
engine_lifecycle_support,
engine_version,
failover_state,
global_cluster_arn,
global_cluster_identifier,
global_cluster_members,
global_cluster_resource_id,
status,
storage_encrypted,
storage_encryption_type,
tag_list
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: global_clusters
  props:
    - name: GlobalClusterIdentifier
      value: "{{ GlobalClusterIdentifier }}"
      description: Required parameter for the global_clusters resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the global_clusters resource.
    - name: SourceDBClusterIdentifier
      value: "{{ SourceDBClusterIdentifier }}"
      description: The Amazon Resource Name (ARN) to use as the primary cluster of the global database. If you provide a value for this parameter, don't specify values for the following settings because Amazon Aurora uses the values from the specified source DB cluster: DatabaseName Engine EngineVersion StorageEncrypted
      description: The Amazon Resource Name (ARN) to use as the primary cluster of the global database. If you provide a value for this parameter, don't specify values for the following settings because Amazon Aurora uses the values from the specified source DB cluster: DatabaseName Engine EngineVersion StorageEncrypted
    - name: Engine
      value: "{{ Engine }}"
      description: The database engine to use for this global database cluster. Valid Values: aurora-mysql | aurora-postgresql Constraints: Can't be specified if SourceDBClusterIdentifier is specified. In this case, Amazon Aurora uses the engine of the source DB cluster.
      description: The database engine to use for this global database cluster. Valid Values: aurora-mysql | aurora-postgresql Constraints: Can't be specified if SourceDBClusterIdentifier is specified. In this case, Amazon Aurora uses the engine of the source DB cluster.
    - name: EngineVersion
      value: "{{ EngineVersion }}"
      description: The engine version to use for this global database cluster. Constraints: Can't be specified if SourceDBClusterIdentifier is specified. In this case, Amazon Aurora uses the engine version of the source DB cluster.
      description: The engine version to use for this global database cluster. Constraints: Can't be specified if SourceDBClusterIdentifier is specified. In this case, Amazon Aurora uses the engine version of the source DB cluster.
    - name: EngineLifecycleSupport
      value: "{{ EngineLifecycleSupport }}"
      description: The life cycle type for this global database cluster. By default, this value is set to open-source-rds-extended-support, which enrolls your global cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to open-source-rds-extended-support-disabled. In this case, creating the global cluster will fail if the DB major version is past its end of standard support date. This setting only applies to Aurora PostgreSQL-based global databases. You can use this setting to enroll your global cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your global cluster past the end of standard support for that engine version. For more information, see Amazon RDS Extended Support with Amazon Aurora in the Amazon Aurora User Guide. Valid Values: open-source-rds-extended-support | open-source-rds-extended-support-disabled Default: open-source-rds-extended-support
      description: The life cycle type for this global database cluster. By default, this value is set to open-source-rds-extended-support, which enrolls your global cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to open-source-rds-extended-support-disabled. In this case, creating the global cluster will fail if the DB major version is past its end of standard support date. This setting only applies to Aurora PostgreSQL-based global databases. You can use this setting to enroll your global cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your global cluster past the end of standard support for that engine version. For more information, see Amazon RDS Extended Support with Amazon Aurora in the Amazon Aurora User Guide. Valid Values: open-source-rds-extended-support | open-source-rds-extended-support-disabled Default: open-source-rds-extended-support
    - name: DeletionProtection
      value: {{ DeletionProtection }}
      description: Specifies whether to enable deletion protection for the new global database cluster. The global database can't be deleted when deletion protection is enabled.
      description: Specifies whether to enable deletion protection for the new global database cluster. The global database can't be deleted when deletion protection is enabled.
    - name: DatabaseName
      value: "{{ DatabaseName }}"
      description: The name for your database of up to 64 alphanumeric characters. If you don't specify a name, Amazon Aurora doesn't create a database in the global database cluster. Constraints: Can't be specified if SourceDBClusterIdentifier is specified. In this case, Amazon Aurora uses the database name from the source DB cluster.
      description: The name for your database of up to 64 alphanumeric characters. If you don't specify a name, Amazon Aurora doesn't create a database in the global database cluster. Constraints: Can't be specified if SourceDBClusterIdentifier is specified. In this case, Amazon Aurora uses the database name from the source DB cluster.
    - name: StorageEncrypted
      value: {{ StorageEncrypted }}
      description: Specifies whether to enable storage encryption for the new global database cluster. Constraints: Can't be specified if SourceDBClusterIdentifier is specified. In this case, Amazon Aurora uses the setting from the source DB cluster.
      description: Specifies whether to enable storage encryption for the new global database cluster. Constraints: Can't be specified if SourceDBClusterIdentifier is specified. In this case, Amazon Aurora uses the setting from the source DB cluster.
    - name: Tags
      value: "{{ Tags }}"
      description: Tags to assign to the global cluster.
      description: Tags to assign to the global cluster.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="remove_from_global_cluster"
    values={[
        { label: 'remove_from_global_cluster', value: 'remove_from_global_cluster' },
        { label: 'modify_global_cluster', value: 'modify_global_cluster' }
    ]}
>
<TabItem value="remove_from_global_cluster">

Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different Region. This operation only applies to Aurora DB clusters.

```sql
UPDATE aws.rds.global_clusters
SET 
-- No updatable properties
WHERE 
GlobalClusterIdentifier = '{{ GlobalClusterIdentifier }}' --required
AND DbClusterIdentifier = '{{ DbClusterIdentifier }}' --required
AND region = '{{ region }}' --required
RETURNING
database_name,
deletion_protection,
endpoint,
engine,
engine_lifecycle_support,
engine_version,
failover_state,
global_cluster_arn,
global_cluster_identifier,
global_cluster_members,
global_cluster_resource_id,
status,
storage_encrypted,
storage_encryption_type,
tag_list;
```
</TabItem>
<TabItem value="modify_global_cluster">

Modifies a setting for an Amazon Aurora global database cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. This operation only applies to Aurora global database clusters.

```sql
UPDATE aws.rds.global_clusters
SET 
-- No updatable properties
WHERE 
GlobalClusterIdentifier = '{{ GlobalClusterIdentifier }}' --required
AND region = '{{ region }}' --required
AND NewGlobalClusterIdentifier = '{{ NewGlobalClusterIdentifier}}'
AND DeletionProtection = {{ DeletionProtection}}
AND EngineVersion = '{{ EngineVersion}}'
AND AllowMajorVersionUpgrade = {{ AllowMajorVersionUpgrade}}
RETURNING
database_name,
deletion_protection,
endpoint,
engine,
engine_lifecycle_support,
engine_version,
failover_state,
global_cluster_arn,
global_cluster_identifier,
global_cluster_members,
global_cluster_resource_id,
status,
storage_encrypted,
storage_encryption_type,
tag_list;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_global_cluster"
    values={[
        { label: 'delete_global_cluster', value: 'delete_global_cluster' }
    ]}
>
<TabItem value="delete_global_cluster">

Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first. This action only applies to Aurora DB clusters.

```sql
DELETE FROM aws.rds.global_clusters
WHERE GlobalClusterIdentifier = '{{ GlobalClusterIdentifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="failover_global_cluster"
    values={[
        { label: 'failover_global_cluster', value: 'failover_global_cluster' },
        { label: 'switchover_global_cluster', value: 'switchover_global_cluster' }
    ]}
>
<TabItem value="failover_global_cluster">

Promotes the specified secondary DB cluster to be the primary DB cluster in the global database cluster to fail over or switch over a global database. Switchover operations were previously called "managed planned failovers." Although this operation can be used either to fail over or to switch over a global database cluster, its intended use is for global database failover. To switch over a global database cluster, we recommend that you use the SwitchoverGlobalCluster operation instead. How you use this operation depends on whether you are failing over or switching over your global database cluster: Failing over - Specify the AllowDataLoss parameter and don't specify the Switchover parameter. Switching over - Specify the Switchover parameter or omit it, but don't specify the AllowDataLoss parameter. About failing over and switching over While failing over and switching over a global database cluster both change the primary DB cluster, you use these operations for different reasons: Failing over - Use this operation to respond to an unplanned event, such as a Regional disaster in the primary Region. Failing over can result in a loss of write transaction data that wasn't replicated to the chosen secondary before the failover event occurred. However, the recovery process that promotes a DB instance on the chosen seconday DB cluster to be the primary writer DB instance guarantees that the data is in a transactionally consistent state. For more information about failing over an Amazon Aurora global database, see Performing managed failovers for Aurora global databases in the Amazon Aurora User Guide. Switching over - Use this operation on a healthy global database cluster for planned events, such as Regional rotation or to fail back to the original primary DB cluster after a failover operation. With this operation, there is no data loss. For more information about switching over an Amazon Aurora global database, see Performing switchovers for Aurora global databases in the Amazon Aurora User Guide.

```sql
EXEC aws.rds.global_clusters.failover_global_cluster 
@GlobalClusterIdentifier='{{ GlobalClusterIdentifier }}' --required, 
@TargetDbClusterIdentifier='{{ TargetDbClusterIdentifier }}' --required, 
@region='{{ region }}' --required, 
@AllowDataLoss={{ AllowDataLoss }}, 
@Switchover={{ Switchover }}
;
```
</TabItem>
<TabItem value="switchover_global_cluster">

Switches over the specified secondary DB cluster to be the new primary DB cluster in the global database cluster. Switchover operations were previously called "managed planned failovers." Aurora promotes the specified secondary cluster to assume full read/write capabilities and demotes the current primary cluster to a secondary (read-only) cluster, maintaining the orginal replication topology. All secondary clusters are synchronized with the primary at the beginning of the process so the new primary continues operations for the Aurora global database without losing any data. Your database is unavailable for a short time while the primary and selected secondary clusters are assuming their new roles. For more information about switching over an Aurora global database, see Performing switchovers for Amazon Aurora global databases in the Amazon Aurora User Guide. This operation is intended for controlled environments, for operations such as "regional rotation" or to fall back to the original primary after a global database failover.

```sql
EXEC aws.rds.global_clusters.switchover_global_cluster 
@GlobalClusterIdentifier='{{ GlobalClusterIdentifier }}' --required, 
@TargetDbClusterIdentifier='{{ TargetDbClusterIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
