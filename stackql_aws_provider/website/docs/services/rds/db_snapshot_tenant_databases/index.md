--- 
title: db_snapshot_tenant_databases
hide_title: false
hide_table_of_contents: false
keywords:
  - db_snapshot_tenant_databases
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

Creates, updates, deletes, gets or lists a <code>db_snapshot_tenant_databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_snapshot_tenant_databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_snapshot_tenant_databases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_snapshot_tenant_databases"
    values={[
        { label: 'describe_db_snapshot_tenant_databases', value: 'describe_db_snapshot_tenant_databases' }
    ]}
>
<TabItem value="describe_db_snapshot_tenant_databases">

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
    <td><CopyableCode code="character_set_name" /></td>
    <td><code>string</code></td>
    <td>The name of the character set of a tenant database.</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID for the DB instance that contains the tenant databases.</td>
</tr>
<tr>
    <td><CopyableCode code="db_snapshot_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the snapshot of the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="db_snapshot_tenant_database_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the snapshot tenant database.</td>
</tr>
<tr>
    <td><CopyableCode code="dbi_resource_id" /></td>
    <td><code>string</code></td>
    <td>The resource identifier of the source CDB instance. This identifier can't be changed and is unique to an Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_name" /></td>
    <td><code>string</code></td>
    <td>The name of the database engine.</td>
</tr>
<tr>
    <td><CopyableCode code="master_username" /></td>
    <td><code>string</code></td>
    <td>The master username of the tenant database.</td>
</tr>
<tr>
    <td><CopyableCode code="nchar_character_set_name" /></td>
    <td><code>string</code></td>
    <td>The NCHAR character set name of the tenant database.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_type" /></td>
    <td><code>string</code></td>
    <td>The type of DB snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_list" /></td>
    <td><code>string</code></td>
    <td>A list of tags. For more information, see Tagging Amazon RDS resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS resources in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_db_name" /></td>
    <td><code>string</code></td>
    <td>The name of the tenant database.</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_database_create_time" /></td>
    <td><code>string</code></td>
    <td>The time the DB snapshot was taken, specified in Coordinated Universal Time (UTC). If you copy the snapshot, the creation time changes.</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_database_resource_id" /></td>
    <td><code>string</code></td>
    <td>The resource ID of the tenant database.</td>
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
    <td><a href="#describe_db_snapshot_tenant_databases"><CopyableCode code="describe_db_snapshot_tenant_databases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-DBSnapshotIdentifier"><code>DBSnapshotIdentifier</code></a>, <a href="#parameter-SnapshotType"><code>SnapshotType</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-DbiResourceId"><code>DbiResourceId</code></a></td>
    <td>Describes the tenant databases that exist in a DB snapshot. This command only applies to RDS for Oracle DB instances in the multi-tenant configuration. You can use this command to inspect the tenant databases within a snapshot before restoring it. You can't directly interact with the tenant databases in a DB snapshot. If you restore a snapshot that was taken from DB instance using the multi-tenant configuration, you restore all its tenant databases.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DBInstanceIdentifier">
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the DB instance used to create the DB snapshots. This parameter isn't case-sensitive. Constraints: If supplied, must match the identifier of an existing DBInstance.</td>
</tr>
<tr id="parameter-DBSnapshotIdentifier">
    <td><CopyableCode code="DBSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of a DB snapshot that contains the tenant databases to describe. This value is stored as a lowercase string. Constraints: If you specify this parameter, the value must match the ID of an existing DB snapshot. If you specify an automatic snapshot, you must also specify SnapshotType.</td>
</tr>
<tr id="parameter-DbiResourceId">
    <td><CopyableCode code="DbiResourceId" /></td>
    <td><code>string</code></td>
    <td>A specific DB resource identifier to describe.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more tenant databases to describe. Supported filters: tenant-db-name - Tenant database names. The results list only includes information about the tenant databases that match these tenant DB names. tenant-database-resource-id - Tenant database resource identifiers. The results list only includes information about the tenant databases contained within the DB snapshots. dbi-resource-id - DB instance resource identifiers. The results list only includes information about snapshots containing tenant databases contained within the DB instances identified by these resource identifiers. db-instance-id - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs). db-snapshot-id - Accepts DB snapshot identifiers. snapshot-type - Accepts types of DB snapshots.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeDBSnapshotTenantDatabases request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.</td>
</tr>
<tr id="parameter-SnapshotType">
    <td><CopyableCode code="SnapshotType" /></td>
    <td><code>string</code></td>
    <td>The type of DB snapshots to be returned. You can specify one of the following values: automated – All DB snapshots that have been automatically taken by Amazon RDS for my Amazon Web Services account. manual – All DB snapshots that have been taken by my Amazon Web Services account. shared – All manual DB snapshots that have been shared to my Amazon Web Services account. public – All DB snapshots that have been marked as public. awsbackup – All DB snapshots managed by the Amazon Web Services Backup service.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_snapshot_tenant_databases"
    values={[
        { label: 'describe_db_snapshot_tenant_databases', value: 'describe_db_snapshot_tenant_databases' }
    ]}
>
<TabItem value="describe_db_snapshot_tenant_databases">

Describes the tenant databases that exist in a DB snapshot. This command only applies to RDS for Oracle DB instances in the multi-tenant configuration. You can use this command to inspect the tenant databases within a snapshot before restoring it. You can't directly interact with the tenant databases in a DB snapshot. If you restore a snapshot that was taken from DB instance using the multi-tenant configuration, you restore all its tenant databases.

```sql
SELECT
character_set_name,
db_instance_identifier,
db_snapshot_identifier,
db_snapshot_tenant_database_arn,
dbi_resource_id,
engine_name,
master_username,
nchar_character_set_name,
snapshot_type,
tag_list,
tenant_db_name,
tenant_database_create_time,
tenant_database_resource_id
FROM aws.rds.db_snapshot_tenant_databases
WHERE region = '{{ region }}' -- required
AND DBInstanceIdentifier = '{{ DBInstanceIdentifier }}'
AND DBSnapshotIdentifier = '{{ DBSnapshotIdentifier }}'
AND SnapshotType = '{{ SnapshotType }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND DbiResourceId = '{{ DbiResourceId }}'
;
```
</TabItem>
</Tabs>
