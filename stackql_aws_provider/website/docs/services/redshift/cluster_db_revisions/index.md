--- 
title: cluster_db_revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_db_revisions
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

Creates, updates, deletes, gets or lists a <code>cluster_db_revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_db_revisions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.cluster_db_revisions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster_db_revisions"
    values={[
        { label: 'describe_cluster_db_revisions', value: 'describe_cluster_db_revisions' }
    ]}
>
<TabItem value="describe_cluster_db_revisions">

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
    <td><CopyableCode code="cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="current_database_revision" /></td>
    <td><code>string</code></td>
    <td>A string representing the current cluster version.</td>
</tr>
<tr>
    <td><CopyableCode code="database_revision_release_date" /></td>
    <td><code>string</code></td>
    <td>The date on which the database revision was released.</td>
</tr>
<tr>
    <td><CopyableCode code="revision_targets" /></td>
    <td><code>string</code></td>
    <td>A list of RevisionTarget objects, where each object describes the database revision that a cluster can be updated to.</td>
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
    <td><a href="#describe_cluster_db_revisions"><CopyableCode code="describe_cluster_db_revisions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns an array of ClusterDbRevision objects.</td>
</tr>
<tr>
    <td><a href="#modify_cluster_db_revision"><CopyableCode code="modify_cluster_db_revision" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-RevisionTarget"><code>RevisionTarget</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.</td>
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
    <td>The unique identifier of a cluster whose database revision you want to modify. Example: examplecluster</td>
</tr>
<tr id="parameter-RevisionTarget">
    <td><CopyableCode code="RevisionTarget" /></td>
    <td><code>string</code></td>
    <td>The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a cluster whose ClusterDbRevisions you are requesting. This parameter is case sensitive. All clusters defined for an account are returned by default.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point for returning a set of response records. When the results of a DescribeClusterDbRevisions request exceed the value specified in MaxRecords, Amazon Redshift returns a value in the marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the marker parameter and retrying the request. Constraints: You can specify either the ClusterIdentifier parameter, or the marker parameter, but not both.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in the marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the marker parameter and retrying the request. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_cluster_db_revisions"
    values={[
        { label: 'describe_cluster_db_revisions', value: 'describe_cluster_db_revisions' }
    ]}
>
<TabItem value="describe_cluster_db_revisions">

Returns an array of ClusterDbRevision objects.

```sql
SELECT
cluster_identifier,
current_database_revision,
database_revision_release_date,
revision_targets
FROM aws.redshift.cluster_db_revisions
WHERE region = '{{ region }}' -- required
AND ClusterIdentifier = '{{ ClusterIdentifier }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_cluster_db_revision"
    values={[
        { label: 'modify_cluster_db_revision', value: 'modify_cluster_db_revision' }
    ]}
>
<TabItem value="modify_cluster_db_revision">

Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.

```sql
UPDATE aws.redshift.cluster_db_revisions
SET 
-- No updatable properties
WHERE 
ClusterIdentifier = '{{ ClusterIdentifier }}' --required
AND RevisionTarget = '{{ RevisionTarget }}' --required
AND region = '{{ region }}' --required
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
