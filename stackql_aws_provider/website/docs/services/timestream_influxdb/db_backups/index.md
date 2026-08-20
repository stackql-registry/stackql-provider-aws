--- 
title: db_backups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_backups
  - timestream_influxdb
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

Creates, updates, deletes, gets or lists a <code>db_backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.timestream_influxdb.db_backups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_db_backup"
    values={[
        { label: 'get_db_backup', value: 'get_db_backup' },
        { label: 'list_db_backups', value: 'list_db_backups' }
    ]}
>
<TabItem value="get_db_backup">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Service-generated unique identifier of the backup. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The customer-provided name of the backup. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9&#93;*(-&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="allocated_storage" /></td>
    <td><code>integer</code></td>
    <td>The allocated storage of the resource at the time of backup, in GiB.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the backup. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:timestream\-influxdb:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:(db\-instance|db\-cluster|db\-parameter\-group|db\-backup)/&#91;a-zA-Z0-9&#93;&#123;3,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_configuration" /></td>
    <td><code>object</code></td>
    <td>The cluster configuration of the resource at the time of backup.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the backup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_type" /></td>
    <td><code>string</code></td>
    <td>The DB instance type of the resource at the time of backup. (db.influx.medium, db.influx.large, db.influx.xlarge, db.influx.2xlarge, db.influx.4xlarge, db.influx.8xlarge, db.influx.12xlarge, db.influx.16xlarge, db.influx.24xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="db_parameter_group_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the DB parameter group associated with the backup. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_resource_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the DB resource that the backup was created from. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_storage_type" /></td>
    <td><code>string</code></td>
    <td>The storage type of the resource at the time of backup. (InfluxIOIncludedT1, InfluxIOIncludedT2, InfluxIOIncludedT3)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_type" /></td>
    <td><code>string</code></td>
    <td>The deployment type of the resource that the backup was created from. (SINGLE_AZ, WITH_MULTIAZ_STANDBY, MULTI_NODE_READ_REPLICAS)</td>
</tr>
<tr>
    <td><CopyableCode code="engine_type" /></td>
    <td><code>string</code></td>
    <td>The engine type of the resource that the backup was created from. (INFLUXDB_V2, INFLUXDB_V3_CORE, INFLUXDB_V3_ENTERPRISE)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_after" /></td>
    <td><code>string</code></td>
    <td>The date after which the backup will be automatically deleted. (pattern: &lt;code&gt;\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failover_mode" /></td>
    <td><code>string</code></td>
    <td>The failover mode of the resource at the time of backup. (AUTOMATIC, NO_FAILOVER)</td>
</tr>
<tr>
    <td><CopyableCode code="influx_auth_parameters_secret_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Secrets Manager secret containing the InfluxDB auth parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key ARN used for encryption of the resource at the time of backup. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="log_delivery_configuration" /></td>
    <td><code>object</code></td>
    <td>The log delivery configuration of the resource at the time of backup.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_schedule" /></td>
    <td><code>object</code></td>
    <td>The maintenance schedule of the resource at the time of backup.</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>The network type of the resource at the time of backup. (IPV4, DUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port number of the resource at the time of backup.</td>
</tr>
<tr>
    <td><CopyableCode code="publicly_accessible" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the resource was publicly accessible at the time of backup.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the backup. (IN_PROGRESS, COMPLETED, FAILED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of backup. (HOURLY, DAILY, WEEKLY, MONTHLY, CUSTOM_SCHEDULE, ON_DEMAND, CONTINUOUS)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_security_group_ids" /></td>
    <td><code>array</code></td>
    <td>The VPC security group IDs associated with the resource at the time of backup.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_subnet_ids" /></td>
    <td><code>array</code></td>
    <td>The VPC subnet IDs associated with the resource at the time of backup.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_db_backups">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Service-generated unique identifier of the backup. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The customer-provided name of the backup. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9&#93;*(-&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the backup. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:timestream\-influxdb:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:(db\-instance|db\-cluster|db\-parameter\-group|db\-backup)/&#91;a-zA-Z0-9&#93;&#123;3,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the backup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="db_resource_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the DB resource that the backup was created from. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_type" /></td>
    <td><code>string</code></td>
    <td>The deployment type of the resource that the backup was created from. (SINGLE_AZ, WITH_MULTIAZ_STANDBY, MULTI_NODE_READ_REPLICAS)</td>
</tr>
<tr>
    <td><CopyableCode code="engine_type" /></td>
    <td><code>string</code></td>
    <td>The engine type of the resource that the backup was created from. (INFLUXDB_V2, INFLUXDB_V3_CORE, INFLUXDB_V3_ENTERPRISE)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_after" /></td>
    <td><code>string</code></td>
    <td>The date after which the backup will be automatically deleted. (pattern: &lt;code&gt;\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key ARN used for encryption of the resource at the time of backup. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the backup. Valid values are IN_PROGRESS, COMPLETED, FAILED, DELETING, and DELETED. (IN_PROGRESS, COMPLETED, FAILED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of backup. Valid values are HOURLY, DAILY, WEEKLY, MONTHLY, CUSTOM_SCHEDULE, ON_DEMAND, and CONTINUOUS. (HOURLY, DAILY, WEEKLY, MONTHLY, CUSTOM_SCHEDULE, ON_DEMAND, CONTINUOUS)</td>
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
    <td><a href="#get_db_backup"><CopyableCode code="get_db_backup" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific Timestream for InfluxDB backup.</td>
</tr>
<tr>
    <td><a href="#list_db_backups"><CopyableCode code="list_db_backups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Timestream for InfluxDB backups.</td>
</tr>
<tr>
    <td><a href="#create_db_backup"><CopyableCode code="create_db_backup" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-dbResourceId"><code>dbResourceId</code></a></td>
    <td></td>
    <td>Creates a new on-demand backup of a Timestream for InfluxDB resource.</td>
</tr>
<tr>
    <td><a href="#delete_db_backup"><CopyableCode code="delete_db_backup" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Timestream for InfluxDB backup.</td>
</tr>
<tr>
    <td><a href="#restore_from_db_backup"><CopyableCode code="restore_from_db_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-dbBackupId"><code>dbBackupId</code></a></td>
    <td></td>
    <td>Restores a Timestream for InfluxDB resource from a backup. By default, a new resource is created. You can optionally restore to the same resource using the REPLACE_EXISTING restore mode.</td>
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
    defaultValue="get_db_backup"
    values={[
        { label: 'get_db_backup', value: 'get_db_backup' },
        { label: 'list_db_backups', value: 'list_db_backups' }
    ]}
>
<TabItem value="get_db_backup">

Returns information about a specific Timestream for InfluxDB backup.

```sql
SELECT
id,
name,
allocated_storage,
arn,
cluster_configuration,
created_at,
db_instance_type,
db_parameter_group_id,
db_resource_id,
db_storage_type,
deployment_type,
engine_type,
expires_after,
failover_mode,
influx_auth_parameters_secret_arn,
kms_key_id,
log_delivery_configuration,
maintenance_schedule,
network_type,
port,
publicly_accessible,
status,
type_,
vpc_security_group_ids,
vpc_subnet_ids
FROM aws.timestream_influxdb.db_backups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_db_backups">

Returns a list of Timestream for InfluxDB backups.

```sql
SELECT
id,
name,
arn,
created_at,
db_resource_id,
deployment_type,
engine_type,
expires_after,
kms_key_id,
status,
type_
FROM aws.timestream_influxdb.db_backups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_db_backup"
    values={[
        { label: 'create_db_backup', value: 'create_db_backup' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_db_backup">

Creates a new on-demand backup of a Timestream for InfluxDB resource.

```sql
INSERT INTO aws.timestream_influxdb.db_backups (
name,
dbResourceId,
retentionDays,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ dbResourceId }}' /* required */,
{{ retentionDays }},
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
allocated_storage,
arn,
cluster_configuration,
created_at,
db_instance_type,
db_parameter_group_id,
db_resource_id,
db_storage_type,
deployment_type,
engine_type,
expires_after,
failover_mode,
influx_auth_parameters_secret_arn,
kms_key_id,
log_delivery_configuration,
maintenance_schedule,
network_type,
port,
publicly_accessible,
status,
type_,
vpc_security_group_ids,
vpc_subnet_ids
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_backups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_backups resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the backup. Must be unique within the account and region.
    - name: dbResourceId
      value: "{{ dbResourceId }}"
      description: |
        The id of the DB instance or DB cluster to back up.
    - name: retentionDays
      value: {{ retentionDays }}
      description: |
        The number of days to retain the backup. Valid values are 1 to 3650.
    - name: tags
      value: "{{ tags }}"
      description: |
        A list of key-value pairs to associate with the backup.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_db_backup"
    values={[
        { label: 'delete_db_backup', value: 'delete_db_backup' }
    ]}
>
<TabItem value="delete_db_backup">

Deletes a Timestream for InfluxDB backup.

```sql
DELETE FROM aws.timestream_influxdb.db_backups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restore_from_db_backup"
    values={[
        { label: 'restore_from_db_backup', value: 'restore_from_db_backup' }
    ]}
>
<TabItem value="restore_from_db_backup">

Restores a Timestream for InfluxDB resource from a backup. By default, a new resource is created. You can optionally restore to the same resource using the REPLACE_EXISTING restore mode.

```sql
EXEC aws.timestream_influxdb.db_backups.restore_from_db_backup 
@region='{{ region }}' --required 
@@json=
'{
"name": "{{ name }}", 
"dbBackupId": "{{ dbBackupId }}", 
"restoreToTime": "{{ restoreToTime }}", 
"restoreMode": "{{ restoreMode }}", 
"vpcSubnetIds": "{{ vpcSubnetIds }}", 
"vpcSecurityGroupIds": "{{ vpcSecurityGroupIds }}", 
"publiclyAccessible": {{ publiclyAccessible }}, 
"logDeliveryConfiguration": "{{ logDeliveryConfiguration }}", 
"maintenanceSchedule": "{{ maintenanceSchedule }}", 
"tags": "{{ tags }}", 
"port": {{ port }}, 
"networkType": "{{ networkType }}", 
"deploymentType": "{{ deploymentType }}", 
"dbBackupConfigurations": "{{ dbBackupConfigurations }}", 
"kmsKeyId": "{{ kmsKeyId }}"
}'
;
```
</TabItem>
</Tabs>
