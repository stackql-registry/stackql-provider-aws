--- 
title: cluster_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_snapshots
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

Creates, updates, deletes, gets or lists a <code>cluster_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.cluster_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster_snapshots"
    values={[
        { label: 'describe_cluster_snapshots', value: 'describe_cluster_snapshots' }
    ]}
>
<TabItem value="describe_cluster_snapshots">

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
    <td><CopyableCode code="accounts_with_restore_access" /></td>
    <td><code>string</code></td>
    <td>A list of the Amazon Web Services accounts authorized to restore the snapshot. Returns null if no accounts are authorized. Visible only to the snapshot owner.</td>
</tr>
<tr>
    <td><CopyableCode code="actual_incremental_backup_size_in_mega_bytes" /></td>
    <td><code>number</code></td>
    <td>The size of the incremental backup.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone in which the cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_progress_in_mega_bytes" /></td>
    <td><code>number</code></td>
    <td>The number of megabytes that have been transferred to the snapshot backup.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_create_time" /></td>
    <td><code>string</code></td>
    <td>The time (UTC) when the cluster was originally created.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cluster for which the snapshot was taken.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_version" /></td>
    <td><code>string</code></td>
    <td>The version ID of the Amazon Redshift engine that is running on the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="current_backup_rate_in_mega_bytes_per_second" /></td>
    <td><code>number</code></td>
    <td>The number of megabytes per second being transferred to the snapshot backup. Returns 0 for a completed backup.</td>
</tr>
<tr>
    <td><CopyableCode code="db_name" /></td>
    <td><code>string</code></td>
    <td>The name of the database that was created when the cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="elapsed_time_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The amount of time an in-progress snapshot backup has been running, or the amount of time it took a completed backup to finish.</td>
</tr>
<tr>
    <td><CopyableCode code="encrypted" /></td>
    <td><code>boolean</code></td>
    <td>If true, the data in the snapshot is encrypted at rest.</td>
</tr>
<tr>
    <td><CopyableCode code="encrypted_with_hsm" /></td>
    <td><code>boolean</code></td>
    <td>A boolean that indicates whether the snapshot data is encrypted using the HSM keys of the source cluster. true indicates that the data is encrypted using HSM keys.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_full_version" /></td>
    <td><code>string</code></td>
    <td>The cluster version of the cluster used to create the snapshot. For example, 1.0.15503.</td>
</tr>
<tr>
    <td><CopyableCode code="enhanced_vpc_routing" /></td>
    <td><code>boolean</code></td>
    <td>An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see Enhanced VPC Routing in the Amazon Redshift Cluster Management Guide. If this option is true, enhanced VPC routing is enabled. Default: false</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_seconds_to_completion" /></td>
    <td><code>integer</code></td>
    <td>The estimate of the time remaining before the snapshot backup will complete. Returns 0 for a completed backup.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The Key Management Service (KMS) key ID of the encryption key that was used to encrypt data in the cluster from which the snapshot was taken.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_track_name" /></td>
    <td><code>string</code></td>
    <td>The name of the maintenance track for the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="manual_snapshot_remaining_days" /></td>
    <td><code>integer</code></td>
    <td>The number of days until a manual snapshot will pass its retention period.</td>
</tr>
<tr>
    <td><CopyableCode code="manual_snapshot_retention_period" /></td>
    <td><code>integer</code></td>
    <td>The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653.</td>
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
    <td>The admin user name for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="node_type" /></td>
    <td><code>string</code></td>
    <td>The node type of the nodes in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_nodes" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account" /></td>
    <td><code>string</code></td>
    <td>For manual snapshots, the Amazon Web Services account used to create or copy the snapshot. For automatic snapshots, the owner of the cluster. The owner can perform all snapshot actions, such as sharing a manual snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port that the cluster is listening on.</td>
</tr>
<tr>
    <td><CopyableCode code="restorable_node_types" /></td>
    <td><code>string</code></td>
    <td>The list of node types that this cluster snapshot is able to restore into.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_create_time" /></td>
    <td><code>string</code></td>
    <td>The time (in UTC format) when Amazon Redshift began the snapshot. A snapshot contains a copy of the cluster data as of this exact time.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_identifier" /></td>
    <td><code>string</code></td>
    <td>The snapshot identifier that is provided in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_retention_start_time" /></td>
    <td><code>string</code></td>
    <td>A timestamp representing the start of the retention period for the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_type" /></td>
    <td><code>string</code></td>
    <td>The snapshot type. Snapshots created using CreateClusterSnapshot and CopyClusterSnapshot are of type "manual".</td>
</tr>
<tr>
    <td><CopyableCode code="source_region" /></td>
    <td><code>string</code></td>
    <td>The source region from which the snapshot was copied.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The snapshot status. The value of the status depends on the API operation used: CreateClusterSnapshot and CopyClusterSnapshot returns status as "creating". DescribeClusterSnapshots returns status as "creating", "available", "final snapshot", or "failed". DeleteClusterSnapshot returns status as "deleted".</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The list of tags for the cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="total_backup_size_in_mega_bytes" /></td>
    <td><code>number</code></td>
    <td>The size of the complete set of backup data that would be used to restore the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The VPC identifier of the cluster if the snapshot is from a cluster in a VPC. Otherwise, this field is not in the output.</td>
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
    <td><a href="#describe_cluster_snapshots"><CopyableCode code="describe_cluster_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-SnapshotIdentifier"><code>SnapshotIdentifier</code></a>, <a href="#parameter-SnapshotArn"><code>SnapshotArn</code></a>, <a href="#parameter-SnapshotType"><code>SnapshotType</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-OwnerAccount"><code>OwnerAccount</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-TagValues"><code>TagValues</code></a>, <a href="#parameter-ClusterExists"><code>ClusterExists</code></a>, <a href="#parameter-SortingEntities"><code>SortingEntities</code></a></td>
    <td>Returns one or more snapshot objects, which contain metadata about your cluster snapshots. By default, this operation returns information about all snapshots of all clusters that are owned by your Amazon Web Services account. No information is returned for snapshots owned by inactive Amazon Web Services accounts. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all snapshots that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all snapshots that have any combination of those values are returned. Only snapshots that you own are returned in the response; shared snapshots are not returned with the tag key and tag value request parameters. If both tag keys and values are omitted from the request, snapshots are returned regardless of whether they have tag keys or values associated with them.</td>
</tr>
<tr>
    <td><a href="#create_cluster_snapshot"><CopyableCode code="create_cluster_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-SnapshotIdentifier"><code>SnapshotIdentifier</code></a>, <a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ManualSnapshotRetentionPeriod"><code>ManualSnapshotRetentionPeriod</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a manual snapshot of the specified cluster. The cluster must be in the available state. For more information about working with snapshots, go to Amazon Redshift Snapshots in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#modify_cluster_snapshot"><CopyableCode code="modify_cluster_snapshot" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-SnapshotIdentifier"><code>SnapshotIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ManualSnapshotRetentionPeriod"><code>ManualSnapshotRetentionPeriod</code></a>, <a href="#parameter-Force"><code>Force</code></a></td>
    <td>Modifies the settings for a snapshot. This exanmple modifies the manual retention period setting for a cluster snapshot.</td>
</tr>
<tr>
    <td><a href="#delete_cluster_snapshot"><CopyableCode code="delete_cluster_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-SnapshotIdentifier"><code>SnapshotIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SnapshotClusterIdentifier"><code>SnapshotClusterIdentifier</code></a></td>
    <td>Deletes the specified manual snapshot. The snapshot must be in the available state, with no other users authorized to access the snapshot. Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</td>
</tr>
<tr>
    <td><a href="#batch_delete_cluster_snapshots"><CopyableCode code="batch_delete_cluster_snapshots" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-Identifiers"><code>Identifiers</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a set of cluster snapshots.</td>
</tr>
<tr>
    <td><a href="#batch_modify_cluster_snapshots"><CopyableCode code="batch_modify_cluster_snapshots" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SnapshotIdentifierList"><code>SnapshotIdentifierList</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ManualSnapshotRetentionPeriod"><code>ManualSnapshotRetentionPeriod</code></a>, <a href="#parameter-Force"><code>Force</code></a></td>
    <td>Modifies the settings for a set of cluster snapshots.</td>
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
    <td>The cluster identifier for which you want a snapshot.</td>
</tr>
<tr id="parameter-Identifiers">
    <td><CopyableCode code="Identifiers" /></td>
    <td><code>array</code></td>
    <td>A list of identifiers for the snapshots that you want to delete.</td>
</tr>
<tr id="parameter-SnapshotIdentifier">
    <td><CopyableCode code="SnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the manual snapshot to be deleted. Constraints: Must be the name of an existing snapshot that is in the available, failed, or cancelled state.</td>
</tr>
<tr id="parameter-SnapshotIdentifierList">
    <td><CopyableCode code="SnapshotIdentifierList" /></td>
    <td><code>array</code></td>
    <td>A list of snapshot identifiers you want to modify.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClusterExists">
    <td><CopyableCode code="ClusterExists" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates whether to return snapshots only for an existing cluster. You can perform table-level restore only by using a snapshot of an existing cluster, that is, a cluster that has not been deleted. Values for this parameter work as follows: If ClusterExists is set to true, ClusterIdentifier is required. If ClusterExists is set to false and ClusterIdentifier isn't specified, all snapshots associated with deleted clusters (orphaned snapshots) are returned. If ClusterExists is set to false and ClusterIdentifier is specified for a deleted cluster, snapshots associated with that cluster are returned. If ClusterExists is set to false and ClusterIdentifier is specified for an existing cluster, no snapshots are returned.</td>
</tr>
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cluster which generated the requested snapshots.</td>
</tr>
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value that requests only snapshots created at or before the specified time. The time value is specified in ISO 8601 format. For more information about ISO 8601, go to the ISO8601 Wikipedia page. Example: 2012-07-16T18:00:00Z</td>
</tr>
<tr id="parameter-Force">
    <td><CopyableCode code="Force" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether to override an exception if the retention period has passed.</td>
</tr>
<tr id="parameter-ManualSnapshotRetentionPeriod">
    <td><CopyableCode code="ManualSnapshotRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The number of days that a manual snapshot is retained. If you specify the value -1, the manual snapshot is retained indefinitely. The number must be either -1 or an integer between 1 and 3,653. If you decrease the manual snapshot retention period from its current value, existing manual snapshots that fall outside of the new retention period will return an error. If you want to suppress the errors and delete the snapshots, use the force option.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeClusterSnapshots request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-OwnerAccount">
    <td><CopyableCode code="OwnerAccount" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account used to create or copy the snapshot. Use this field to filter the results to snapshots owned by a particular account. To describe snapshots you own, either specify your Amazon Web Services account, or do not specify the parameter.</td>
</tr>
<tr id="parameter-SnapshotArn">
    <td><CopyableCode code="SnapshotArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the snapshot associated with the message to describe cluster snapshots.</td>
</tr>
<tr id="parameter-SnapshotClusterIdentifier">
    <td><CopyableCode code="SnapshotClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the cluster the snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name. Constraints: Must be the name of valid cluster.</td>
</tr>
<tr id="parameter-SnapshotIdentifier">
    <td><CopyableCode code="SnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The snapshot identifier of the snapshot about which to return information.</td>
</tr>
<tr id="parameter-SnapshotType">
    <td><CopyableCode code="SnapshotType" /></td>
    <td><code>string</code></td>
    <td>The type of snapshots for which you are requesting information. By default, snapshots of all types are returned. Valid Values: automated | manual</td>
</tr>
<tr id="parameter-SortingEntities">
    <td><CopyableCode code="SortingEntities" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A value that requests only snapshots created at or after the specified time. The time value is specified in ISO 8601 format. For more information about ISO 8601, go to the ISO8601 Wikipedia page. Example: 2012-07-16T18:00:00Z</td>
</tr>
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>A tag key or keys for which you want to return all matching cluster snapshots that are associated with the specified key or keys. For example, suppose that you have snapshots that are tagged with keys called owner and environment. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the snapshots that have either or both of these tag keys associated with them.</td>
</tr>
<tr id="parameter-TagValues">
    <td><CopyableCode code="TagValues" /></td>
    <td><code>array</code></td>
    <td>A tag value or values for which you want to return all matching cluster snapshots that are associated with the specified tag value or values. For example, suppose that you have snapshots that are tagged with values called admin and test. If you specify both of these tag values in the request, Amazon Redshift returns a response with the snapshots that have either or both of these tag values associated with them.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tag instances.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_cluster_snapshots"
    values={[
        { label: 'describe_cluster_snapshots', value: 'describe_cluster_snapshots' }
    ]}
>
<TabItem value="describe_cluster_snapshots">

Returns one or more snapshot objects, which contain metadata about your cluster snapshots. By default, this operation returns information about all snapshots of all clusters that are owned by your Amazon Web Services account. No information is returned for snapshots owned by inactive Amazon Web Services accounts. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all snapshots that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all snapshots that have any combination of those values are returned. Only snapshots that you own are returned in the response; shared snapshots are not returned with the tag key and tag value request parameters. If both tag keys and values are omitted from the request, snapshots are returned regardless of whether they have tag keys or values associated with them.

```sql
SELECT
accounts_with_restore_access,
actual_incremental_backup_size_in_mega_bytes,
availability_zone,
backup_progress_in_mega_bytes,
cluster_create_time,
cluster_identifier,
cluster_version,
current_backup_rate_in_mega_bytes_per_second,
db_name,
elapsed_time_in_seconds,
encrypted,
encrypted_with_hsm,
engine_full_version,
enhanced_vpc_routing,
estimated_seconds_to_completion,
kms_key_id,
maintenance_track_name,
manual_snapshot_remaining_days,
manual_snapshot_retention_period,
master_password_secret_arn,
master_password_secret_kms_key_id,
master_username,
node_type,
number_of_nodes,
owner_account,
port,
restorable_node_types,
snapshot_arn,
snapshot_create_time,
snapshot_identifier,
snapshot_retention_start_time,
snapshot_type,
source_region,
status,
tags,
total_backup_size_in_mega_bytes,
vpc_id
FROM aws.redshift.cluster_snapshots
WHERE region = '{{ region }}' -- required
AND ClusterIdentifier = '{{ ClusterIdentifier }}'
AND SnapshotIdentifier = '{{ SnapshotIdentifier }}'
AND SnapshotArn = '{{ SnapshotArn }}'
AND SnapshotType = '{{ SnapshotType }}'
AND StartTime = '{{ StartTime }}'
AND EndTime = '{{ EndTime }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND OwnerAccount = '{{ OwnerAccount }}'
AND TagKeys = '{{ TagKeys }}'
AND TagValues = '{{ TagValues }}'
AND ClusterExists = '{{ ClusterExists }}'
AND SortingEntities = '{{ SortingEntities }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cluster_snapshot"
    values={[
        { label: 'create_cluster_snapshot', value: 'create_cluster_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster_snapshot">

Creates a manual snapshot of the specified cluster. The cluster must be in the available state. For more information about working with snapshots, go to Amazon Redshift Snapshots in the Amazon Redshift Cluster Management Guide.

```sql
INSERT INTO aws.redshift.cluster_snapshots (
SnapshotIdentifier,
ClusterIdentifier,
region,
ManualSnapshotRetentionPeriod,
Tags
)
SELECT 
'{{ SnapshotIdentifier }}',
'{{ ClusterIdentifier }}',
'{{ region }}',
'{{ ManualSnapshotRetentionPeriod }}',
'{{ Tags }}'
RETURNING
accounts_with_restore_access,
actual_incremental_backup_size_in_mega_bytes,
availability_zone,
backup_progress_in_mega_bytes,
cluster_create_time,
cluster_identifier,
cluster_version,
current_backup_rate_in_mega_bytes_per_second,
db_name,
elapsed_time_in_seconds,
encrypted,
encrypted_with_hsm,
engine_full_version,
enhanced_vpc_routing,
estimated_seconds_to_completion,
kms_key_id,
maintenance_track_name,
manual_snapshot_remaining_days,
manual_snapshot_retention_period,
master_password_secret_arn,
master_password_secret_kms_key_id,
master_username,
node_type,
number_of_nodes,
owner_account,
port,
restorable_node_types,
snapshot_arn,
snapshot_create_time,
snapshot_identifier,
snapshot_retention_start_time,
snapshot_type,
source_region,
status,
tags,
total_backup_size_in_mega_bytes,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cluster_snapshots
  props:
    - name: SnapshotIdentifier
      value: "{{ SnapshotIdentifier }}"
      description: Required parameter for the cluster_snapshots resource.
    - name: ClusterIdentifier
      value: "{{ ClusterIdentifier }}"
      description: Required parameter for the cluster_snapshots resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cluster_snapshots resource.
    - name: ManualSnapshotRetentionPeriod
      value: {{ ManualSnapshotRetentionPeriod }}
      description: The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653. The default value is -1.
      description: The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653. The default value is -1.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tag instances.
      description: A list of tag instances.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_cluster_snapshot"
    values={[
        { label: 'modify_cluster_snapshot', value: 'modify_cluster_snapshot' }
    ]}
>
<TabItem value="modify_cluster_snapshot">

Modifies the settings for a snapshot. This exanmple modifies the manual retention period setting for a cluster snapshot.

```sql
UPDATE aws.redshift.cluster_snapshots
SET 
-- No updatable properties
WHERE 
SnapshotIdentifier = '{{ SnapshotIdentifier }}' --required
AND region = '{{ region }}' --required
AND ManualSnapshotRetentionPeriod = '{{ ManualSnapshotRetentionPeriod}}'
AND Force = {{ Force}}
RETURNING
accounts_with_restore_access,
actual_incremental_backup_size_in_mega_bytes,
availability_zone,
backup_progress_in_mega_bytes,
cluster_create_time,
cluster_identifier,
cluster_version,
current_backup_rate_in_mega_bytes_per_second,
db_name,
elapsed_time_in_seconds,
encrypted,
encrypted_with_hsm,
engine_full_version,
enhanced_vpc_routing,
estimated_seconds_to_completion,
kms_key_id,
maintenance_track_name,
manual_snapshot_remaining_days,
manual_snapshot_retention_period,
master_password_secret_arn,
master_password_secret_kms_key_id,
master_username,
node_type,
number_of_nodes,
owner_account,
port,
restorable_node_types,
snapshot_arn,
snapshot_create_time,
snapshot_identifier,
snapshot_retention_start_time,
snapshot_type,
source_region,
status,
tags,
total_backup_size_in_mega_bytes,
vpc_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cluster_snapshot"
    values={[
        { label: 'delete_cluster_snapshot', value: 'delete_cluster_snapshot' }
    ]}
>
<TabItem value="delete_cluster_snapshot">

Deletes the specified manual snapshot. The snapshot must be in the available state, with no other users authorized to access the snapshot. Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.

```sql
DELETE FROM aws.redshift.cluster_snapshots
WHERE SnapshotIdentifier = '{{ SnapshotIdentifier }}' --required
AND region = '{{ region }}' --required
AND SnapshotClusterIdentifier = '{{ SnapshotClusterIdentifier }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_cluster_snapshots"
    values={[
        { label: 'batch_delete_cluster_snapshots', value: 'batch_delete_cluster_snapshots' },
        { label: 'batch_modify_cluster_snapshots', value: 'batch_modify_cluster_snapshots' }
    ]}
>
<TabItem value="batch_delete_cluster_snapshots">

Deletes a set of cluster snapshots.

```sql
EXEC aws.redshift.cluster_snapshots.batch_delete_cluster_snapshots 
@Identifiers='{{ Identifiers }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="batch_modify_cluster_snapshots">

Modifies the settings for a set of cluster snapshots.

```sql
EXEC aws.redshift.cluster_snapshots.batch_modify_cluster_snapshots 
@SnapshotIdentifierList='{{ SnapshotIdentifierList }}' --required, 
@region='{{ region }}' --required, 
@ManualSnapshotRetentionPeriod='{{ ManualSnapshotRetentionPeriod }}', 
@Force={{ Force }}
;
```
</TabItem>
</Tabs>
