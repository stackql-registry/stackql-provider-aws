--- 
title: relational_databases
hide_title: false
hide_table_of_contents: false
keywords:
  - relational_databases
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>relational_databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="relational_databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.relational_databases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_relational_database"
    values={[
        { label: 'get_relational_database', value: 'get_relational_database' },
        { label: 'get_relational_databases', value: 'get_relational_databases' }
    ]}
>
<TabItem value="get_relational_database">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the database resource in Lightsail. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the database. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_retention_enabled" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether automated backup retention is enabled for the database.</td>
</tr>
<tr>
    <td><CopyableCode code="ca_certificate_identifier" /></td>
    <td><code>string</code></td>
    <td>The certificate associated with the database.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the database was created. Formatted in Unix time.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The database software (for example, MySQL). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>The database engine version (for example, 5.7.23). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hardware" /></td>
    <td><code>object</code></td>
    <td>Describes the hardware of the database.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_restorable_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The latest point in time to which the database can be restored. Formatted in Unix time.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The Region name and Availability Zone where the database is located.</td>
</tr>
<tr>
    <td><CopyableCode code="master_database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the master database created when the Lightsail database resource is created.</td>
</tr>
<tr>
    <td><CopyableCode code="master_endpoint" /></td>
    <td><code>object</code></td>
    <td>The master endpoint for the database.</td>
</tr>
<tr>
    <td><CopyableCode code="master_username" /></td>
    <td><code>string</code></td>
    <td>The master user name of the database. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameter_apply_status" /></td>
    <td><code>string</code></td>
    <td>The status of parameter updates for the database. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pending_maintenance_actions" /></td>
    <td><code>array</code></td>
    <td>Describes the pending maintenance actions for the database.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_modified_values" /></td>
    <td><code>object</code></td>
    <td>Describes pending database value modifications.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_backup_window" /></td>
    <td><code>string</code></td>
    <td>The daily time range during which automated backups are created for the database (for example, 16:00-16:30). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_maintenance_window" /></td>
    <td><code>string</code></td>
    <td>The weekly time range during which system maintenance can occur on the database. In the format ddd:hh24:mi-ddd:hh24:mi. For example, Tue:17:00-Tue:17:30. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="publicly_accessible" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the database is publicly accessible.</td>
</tr>
<tr>
    <td><CopyableCode code="relational_database_blueprint_id" /></td>
    <td><code>string</code></td>
    <td>The blueprint ID for the database. A blueprint describes the major engine version of a database. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="relational_database_bundle_id" /></td>
    <td><code>string</code></td>
    <td>The bundle ID for the database. A bundle describes the performance specifications for your database. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The Lightsail resource type for the database (for example, RelationalDatabase). (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_availability_zone" /></td>
    <td><code>string</code></td>
    <td>Describes the secondary Availability Zone of a high availability database. The secondary database is used for failover support of a high availability database.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Describes the current state of the database. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="support_code" /></td>
    <td><code>string</code></td>
    <td>The support code for the database. Include this code in your email to support when you have questions about a database in Lightsail. This code enables our support team to look up your Lightsail information more easily.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the Amazon Lightsail Developer Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_relational_databases">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the database resource in Lightsail. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the database. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_retention_enabled" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether automated backup retention is enabled for the database.</td>
</tr>
<tr>
    <td><CopyableCode code="ca_certificate_identifier" /></td>
    <td><code>string</code></td>
    <td>The certificate associated with the database.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the database was created. Formatted in Unix time.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The database software (for example, MySQL). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>The database engine version (for example, 5.7.23). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hardware" /></td>
    <td><code>object</code></td>
    <td>Describes the hardware of the database.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_restorable_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The latest point in time to which the database can be restored. Formatted in Unix time.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The Region name and Availability Zone where the database is located.</td>
</tr>
<tr>
    <td><CopyableCode code="master_database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the master database created when the Lightsail database resource is created.</td>
</tr>
<tr>
    <td><CopyableCode code="master_endpoint" /></td>
    <td><code>object</code></td>
    <td>The master endpoint for the database.</td>
</tr>
<tr>
    <td><CopyableCode code="master_username" /></td>
    <td><code>string</code></td>
    <td>The master user name of the database. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameter_apply_status" /></td>
    <td><code>string</code></td>
    <td>The status of parameter updates for the database. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pending_maintenance_actions" /></td>
    <td><code>array</code></td>
    <td>Describes the pending maintenance actions for the database.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_modified_values" /></td>
    <td><code>object</code></td>
    <td>Describes pending database value modifications.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_backup_window" /></td>
    <td><code>string</code></td>
    <td>The daily time range during which automated backups are created for the database (for example, 16:00-16:30). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_maintenance_window" /></td>
    <td><code>string</code></td>
    <td>The weekly time range during which system maintenance can occur on the database. In the format ddd:hh24:mi-ddd:hh24:mi. For example, Tue:17:00-Tue:17:30. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="publicly_accessible" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the database is publicly accessible.</td>
</tr>
<tr>
    <td><CopyableCode code="relational_database_blueprint_id" /></td>
    <td><code>string</code></td>
    <td>The blueprint ID for the database. A blueprint describes the major engine version of a database. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="relational_database_bundle_id" /></td>
    <td><code>string</code></td>
    <td>The bundle ID for the database. A bundle describes the performance specifications for your database. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The Lightsail resource type for the database (for example, RelationalDatabase). (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_availability_zone" /></td>
    <td><code>string</code></td>
    <td>Describes the secondary Availability Zone of a high availability database. The secondary database is used for failover support of a high availability database.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Describes the current state of the database. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="support_code" /></td>
    <td><code>string</code></td>
    <td>The support code for the database. Include this code in your email to support when you have questions about a database in Lightsail. This code enables our support team to look up your Lightsail information more easily.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the Amazon Lightsail Developer Guide.</td>
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
    <td><a href="#get_relational_database"><CopyableCode code="get_relational_database" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific database in Amazon Lightsail.</td>
</tr>
<tr>
    <td><a href="#get_relational_databases"><CopyableCode code="get_relational_databases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all of your databases in Amazon Lightsail.</td>
</tr>
<tr>
    <td><a href="#create_relational_database"><CopyableCode code="create_relational_database" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-relationalDatabaseName"><code>relationalDatabaseName</code></a>, <a href="#parameter-relationalDatabaseBlueprintId"><code>relationalDatabaseBlueprintId</code></a>, <a href="#parameter-relationalDatabaseBundleId"><code>relationalDatabaseBundleId</code></a>, <a href="#parameter-masterDatabaseName"><code>masterDatabaseName</code></a>, <a href="#parameter-masterUsername"><code>masterUsername</code></a></td>
    <td></td>
    <td>Creates a new database in Amazon Lightsail. The create relational database operation supports tag-based access control via request tags. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_relational_database_from_snapshot"><CopyableCode code="create_relational_database_from_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-relationalDatabaseName"><code>relationalDatabaseName</code></a></td>
    <td></td>
    <td>Creates a new database from an existing database snapshot in Amazon Lightsail. You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan. The create relational database from snapshot operation supports tag-based access control via request tags and resource tags applied to the resource identified by relationalDatabaseSnapshotName. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_relational_database"><CopyableCode code="update_relational_database" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-relationalDatabaseName"><code>relationalDatabaseName</code></a></td>
    <td></td>
    <td>Allows the update of one or more attributes of a database in Amazon Lightsail. Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database's predefined maintenance window. The update relational database operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_relational_database"><CopyableCode code="delete_relational_database" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a database in Amazon Lightsail. The delete relational database operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#reboot_relational_database"><CopyableCode code="reboot_relational_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-relationalDatabaseName"><code>relationalDatabaseName</code></a></td>
    <td></td>
    <td>Restarts a specific database in Amazon Lightsail. The reboot relational database operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#start_relational_database"><CopyableCode code="start_relational_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-relationalDatabaseName"><code>relationalDatabaseName</code></a></td>
    <td></td>
    <td>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the reboot relational database operation. The start relational database operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#stop_relational_database"><CopyableCode code="stop_relational_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-relationalDatabaseName"><code>relationalDatabaseName</code></a></td>
    <td></td>
    <td>Stops a specific database that is currently running in Amazon Lightsail. If you don't manually start your database instance after it has been stopped for seven consecutive days, Amazon Lightsail automatically starts it for you. This action helps ensure that your database instance doesn't fall behind on any required maintenance updates. The stop relational database operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the Amazon Lightsail Developer Guide.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_relational_database"
    values={[
        { label: 'get_relational_database', value: 'get_relational_database' },
        { label: 'get_relational_databases', value: 'get_relational_databases' }
    ]}
>
<TabItem value="get_relational_database">

Returns information about a specific database in Amazon Lightsail.

```sql
SELECT
name,
arn,
backup_retention_enabled,
ca_certificate_identifier,
created_at,
engine,
engine_version,
hardware,
latest_restorable_time,
location,
master_database_name,
master_endpoint,
master_username,
parameter_apply_status,
pending_maintenance_actions,
pending_modified_values,
preferred_backup_window,
preferred_maintenance_window,
publicly_accessible,
relational_database_blueprint_id,
relational_database_bundle_id,
resource_type,
secondary_availability_zone,
state,
support_code,
tags
FROM aws.lightsail.relational_databases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_relational_databases">

Returns information about all of your databases in Amazon Lightsail.

```sql
SELECT
name,
arn,
backup_retention_enabled,
ca_certificate_identifier,
created_at,
engine,
engine_version,
hardware,
latest_restorable_time,
location,
master_database_name,
master_endpoint,
master_username,
parameter_apply_status,
pending_maintenance_actions,
pending_modified_values,
preferred_backup_window,
preferred_maintenance_window,
publicly_accessible,
relational_database_blueprint_id,
relational_database_bundle_id,
resource_type,
secondary_availability_zone,
state,
support_code,
tags
FROM aws.lightsail.relational_databases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_relational_database"
    values={[
        { label: 'create_relational_database', value: 'create_relational_database' },
        { label: 'create_relational_database_from_snapshot', value: 'create_relational_database_from_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_relational_database">

Creates a new database in Amazon Lightsail. The create relational database operation supports tag-based access control via request tags. For more information, see the Amazon Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.relational_databases (
relationalDatabaseName,
availabilityZone,
relationalDatabaseBlueprintId,
relationalDatabaseBundleId,
masterDatabaseName,
masterUsername,
masterUserPassword,
preferredBackupWindow,
preferredMaintenanceWindow,
publiclyAccessible,
tags,
region
)
SELECT 
'{{ relationalDatabaseName }}' /* required */,
'{{ availabilityZone }}',
'{{ relationalDatabaseBlueprintId }}' /* required */,
'{{ relationalDatabaseBundleId }}' /* required */,
'{{ masterDatabaseName }}' /* required */,
'{{ masterUsername }}' /* required */,
'{{ masterUserPassword }}',
'{{ preferredBackupWindow }}',
'{{ preferredMaintenanceWindow }}',
{{ publiclyAccessible }},
'{{ tags }}',
'{{ region }}'
RETURNING
operations
;
```
</TabItem>
<TabItem value="create_relational_database_from_snapshot">

Creates a new database from an existing database snapshot in Amazon Lightsail. You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan. The create relational database from snapshot operation supports tag-based access control via request tags and resource tags applied to the resource identified by relationalDatabaseSnapshotName. For more information, see the Amazon Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.relational_databases (
relationalDatabaseName,
availabilityZone,
publiclyAccessible,
relationalDatabaseSnapshotName,
relationalDatabaseBundleId,
sourceRelationalDatabaseName,
restoreTime,
useLatestRestorableTime,
tags,
region
)
SELECT 
'{{ relationalDatabaseName }}' /* required */,
'{{ availabilityZone }}',
{{ publiclyAccessible }},
'{{ relationalDatabaseSnapshotName }}',
'{{ relationalDatabaseBundleId }}',
'{{ sourceRelationalDatabaseName }}',
'{{ restoreTime }}',
{{ useLatestRestorableTime }},
'{{ tags }}',
'{{ region }}'
RETURNING
operations
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: relational_databases
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the relational_databases resource.
    - name: relationalDatabaseName
      value: "{{ relationalDatabaseName }}"
      description: |
        The name to use for your new Lightsail database resource. Constraints: Must contain from 2 to 255 alphanumeric characters, or hyphens. The first and last character must be a letter or number.
    - name: availabilityZone
      value: "{{ availabilityZone }}"
      description: |
        The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format. You can get a list of Availability Zones by using the get regions operation. Be sure to add the include relational database Availability Zones parameter to your request.
    - name: relationalDatabaseBlueprintId
      value: "{{ relationalDatabaseBlueprintId }}"
      description: |
        The blueprint ID for your new database. A blueprint describes the major engine version of a database. You can get a list of database blueprints IDs by using the get relational database blueprints operation.
    - name: relationalDatabaseBundleId
      value: "{{ relationalDatabaseBundleId }}"
      description: |
        The bundle ID for your new database. A bundle describes the performance specifications for your database. You can get a list of database bundle IDs by using the get relational database bundles operation. When creating a new database from a snapshot, you cannot choose a bundle that is smaller than the bundle of the source database.
    - name: masterDatabaseName
      value: "{{ masterDatabaseName }}"
      description: |
        The meaning of this parameter differs according to the database engine you use. MySQL The name of the database to create when the Lightsail database resource is created. If this parameter isn't specified, no database is created in the database resource. Constraints: Must contain 1 to 64 letters or numbers. Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0- 9). Can't be a word reserved by the specified database engine. For more information about reserved words in MySQL, see the Keywords and Reserved Words articles for MySQL 5.6, MySQL 5.7, and MySQL 8.0. PostgreSQL The name of the database to create when the Lightsail database resource is created. If this parameter isn't specified, a database named postgres is created in the database resource. Constraints: Must contain 1 to 63 letters or numbers. Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0- 9). Can't be a word reserved by the specified database engine. For more information about reserved words in PostgreSQL, see the SQL Key Words articles for PostgreSQL 9.6, PostgreSQL 10, PostgreSQL 11, and PostgreSQL 12.
    - name: masterUsername
      value: "{{ masterUsername }}"
      description: |
        The name for the master user. MySQL Constraints: Required for MySQL. Must be 1 to 16 letters or numbers. Can contain underscores. First character must be a letter. Can't be a reserved word for the chosen database engine. For more information about reserved words in MySQL 5.6 or 5.7, see the Keywords and Reserved Words articles for MySQL 5.6, MySQL 5.7, or MySQL 8.0. PostgreSQL Constraints: Required for PostgreSQL. Must be 1 to 63 letters or numbers. Can contain underscores. First character must be a letter. Can't be a reserved word for the chosen database engine. For more information about reserved words in MySQL 5.6 or 5.7, see the Keywords and Reserved Words articles for PostgreSQL 9.6, PostgreSQL 10, PostgreSQL 11, and PostgreSQL 12.
    - name: masterUserPassword
      value: "{{ masterUserPassword }}"
      description: |
        The password for the master user. The password can include any printable ASCII character except "/", """, or "@". It cannot contain spaces. MySQL Constraints: Must contain from 8 to 41 characters. PostgreSQL Constraints: Must contain from 8 to 128 characters.
    - name: preferredBackupWindow
      value: "{{ preferredBackupWindow }}"
      description: |
        The daily time range during which automated backups are created for your new database if automated backups are enabled. The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. For more information about the preferred backup window time blocks for each region, see the Working With Backups guide in the Amazon Relational Database Service documentation. Constraints: Must be in the hh24:mi-hh24:mi format. Example: 16:00-16:30 Specified in Coordinated Universal Time (UTC). Must not conflict with the preferred maintenance window. Must be at least 30 minutes.
    - name: preferredMaintenanceWindow
      value: "{{ preferredMaintenanceWindow }}"
      description: |
        The weekly time range during which system maintenance can occur on your new database. The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. Constraints: Must be in the ddd:hh24:mi-ddd:hh24:mi format. Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Must be at least 30 minutes. Specified in Coordinated Universal Time (UTC). Example: Tue:17:00-Tue:17:30
    - name: publiclyAccessible
      value: {{ publiclyAccessible }}
      description: |
        Specifies the accessibility options for your new database. A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.
    - name: tags
      description: |
        The tag keys and optional values to add to the resource during create. Use the TagResource action to tag a resource after it's created.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: relationalDatabaseSnapshotName
      value: "{{ relationalDatabaseSnapshotName }}"
      description: |
        The name of the database snapshot from which to create your new database.
    - name: sourceRelationalDatabaseName
      value: "{{ sourceRelationalDatabaseName }}"
      description: |
        The name of the source database.
    - name: restoreTime
      value: "{{ restoreTime }}"
      description: |
        The date and time to restore your database from. Constraints: Must be before the latest restorable time for the database. Cannot be specified if the use latest restorable time parameter is true. Specified in Coordinated Universal Time (UTC). Specified in the Unix time format. For example, if you wish to use a restore time of October 1, 2018, at 8 PM UTC, then you input 1538424000 as the restore time.
    - name: useLatestRestorableTime
      value: {{ useLatestRestorableTime }}
      description: |
        Specifies whether your database is restored from the latest backup time. A value of true restores from the latest backup time. Default: false Constraints: Cannot be specified if the restore time parameter is provided.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_relational_database"
    values={[
        { label: 'update_relational_database', value: 'update_relational_database' }
    ]}
>
<TabItem value="update_relational_database">

Allows the update of one or more attributes of a database in Amazon Lightsail. Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database's predefined maintenance window. The update relational database operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the Amazon Lightsail Developer Guide.

```sql
UPDATE aws.lightsail.relational_databases
SET 
relationalDatabaseName = '{{ relationalDatabaseName }}',
masterUserPassword = '{{ masterUserPassword }}',
rotateMasterUserPassword = {{ rotateMasterUserPassword }},
preferredBackupWindow = '{{ preferredBackupWindow }}',
preferredMaintenanceWindow = '{{ preferredMaintenanceWindow }}',
enableBackupRetention = {{ enableBackupRetention }},
disableBackupRetention = {{ disableBackupRetention }},
publiclyAccessible = {{ publiclyAccessible }},
applyImmediately = {{ applyImmediately }},
caCertificateIdentifier = '{{ caCertificateIdentifier }}',
relationalDatabaseBlueprintId = '{{ relationalDatabaseBlueprintId }}'
WHERE 
region = '{{ region }}' --required
AND relationalDatabaseName = '{{ relationalDatabaseName }}' --required
RETURNING
operations;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_relational_database"
    values={[
        { label: 'delete_relational_database', value: 'delete_relational_database' }
    ]}
>
<TabItem value="delete_relational_database">

Deletes a database in Amazon Lightsail. The delete relational database operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the Amazon Lightsail Developer Guide.

```sql
DELETE FROM aws.lightsail.relational_databases
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reboot_relational_database"
    values={[
        { label: 'reboot_relational_database', value: 'reboot_relational_database' },
        { label: 'start_relational_database', value: 'start_relational_database' },
        { label: 'stop_relational_database', value: 'stop_relational_database' }
    ]}
>
<TabItem value="reboot_relational_database">

Restarts a specific database in Amazon Lightsail. The reboot relational database operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the Amazon Lightsail Developer Guide.

```sql
EXEC aws.lightsail.relational_databases.reboot_relational_database 
@region='{{ region }}' --required 
@@json=
'{
"relationalDatabaseName": "{{ relationalDatabaseName }}"
}'
;
```
</TabItem>
<TabItem value="start_relational_database">

Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the reboot relational database operation. The start relational database operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the Amazon Lightsail Developer Guide.

```sql
EXEC aws.lightsail.relational_databases.start_relational_database 
@region='{{ region }}' --required 
@@json=
'{
"relationalDatabaseName": "{{ relationalDatabaseName }}"
}'
;
```
</TabItem>
<TabItem value="stop_relational_database">

Stops a specific database that is currently running in Amazon Lightsail. If you don't manually start your database instance after it has been stopped for seven consecutive days, Amazon Lightsail automatically starts it for you. This action helps ensure that your database instance doesn't fall behind on any required maintenance updates. The stop relational database operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the Amazon Lightsail Developer Guide.

```sql
EXEC aws.lightsail.relational_databases.stop_relational_database 
@region='{{ region }}' --required 
@@json=
'{
"relationalDatabaseName": "{{ relationalDatabaseName }}", 
"relationalDatabaseSnapshotName": "{{ relationalDatabaseSnapshotName }}"
}'
;
```
</TabItem>
</Tabs>
