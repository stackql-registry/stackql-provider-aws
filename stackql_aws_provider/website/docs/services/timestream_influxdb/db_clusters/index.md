--- 
title: db_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - db_clusters
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

Creates, updates, deletes, gets or lists a <code>db_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.timestream_influxdb.db_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_db_cluster"
    values={[
        { label: 'get_db_cluster', value: 'get_db_cluster' },
        { label: 'list_db_clusters', value: 'list_db_clusters' }
    ]}
>
<TabItem value="get_db_cluster">

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
    <td>Service-generated unique identifier of the DB cluster to retrieve. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Customer-supplied name of the Timestream for InfluxDB cluster. (pattern: &lt;code&gt;&#91;a-zA-z&#93;&#91;a-zA-Z0-9&#93;*(-&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="allocated_storage" /></td>
    <td><code>integer</code></td>
    <td>The amount of storage allocated for your DB storage type (in gibibytes).</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the DB cluster. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:timestream\-influxdb:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:(db\-instance|db\-cluster|db\-parameter\-group|db\-backup)/&#91;a-zA-Z0-9&#93;&#123;3,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for node modes in the DbCluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_backup_configurations" /></td>
    <td><code>array</code></td>
    <td>The backup configurations for the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_type" /></td>
    <td><code>string</code></td>
    <td>The Timestream for InfluxDB instance type that InfluxDB runs on. (db.influx.medium, db.influx.large, db.influx.xlarge, db.influx.2xlarge, db.influx.4xlarge, db.influx.8xlarge, db.influx.12xlarge, db.influx.16xlarge, db.influx.24xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="db_parameter_group_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the DB parameter group assigned to your DB cluster. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_storage_type" /></td>
    <td><code>string</code></td>
    <td>The Timestream for InfluxDB DB storage type that InfluxDB stores data on. (InfluxIOIncludedT1, InfluxIOIncludedT2, InfluxIOIncludedT3)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_type" /></td>
    <td><code>string</code></td>
    <td>Deployment type of the DB cluster. (MULTI_NODE_READ_REPLICAS)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint used to connect to the Timestream for InfluxDB cluster for write and read operations.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_type" /></td>
    <td><code>string</code></td>
    <td>The engine type of your DB cluster. (INFLUXDB_V2, INFLUXDB_V3_CORE, INFLUXDB_V3_ENTERPRISE)</td>
</tr>
<tr>
    <td><CopyableCode code="failover_mode" /></td>
    <td><code>string</code></td>
    <td>The configured failover mode for the DB cluster. (AUTOMATIC, NO_FAILOVER)</td>
</tr>
<tr>
    <td><CopyableCode code="influx_auth_parameters_secret_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key ARN used for encryption of the DB cluster. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_maintenance_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last completed maintenance operation on the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="log_delivery_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_schedule" /></td>
    <td><code>object</code></td>
    <td>The maintenance schedule for the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the network type of the Timestream for InfluxDB cluster is IPv4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols. (IPV4, DUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="next_maintenance_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the next scheduled maintenance operation on the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port number on which InfluxDB accepts connections.</td>
</tr>
<tr>
    <td><CopyableCode code="publicly_accessible" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the DB cluster has a public IP to facilitate access from outside the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="reader_endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint used to connect to the Timestream for InfluxDB cluster for read-only operations.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the DB cluster. (CREATING, UPDATING, DELETING, AVAILABLE, FAILED, DELETED, MAINTENANCE, UPDATING_INSTANCE_TYPE, REBOOTING, REBOOT_FAILED, PARTIALLY_AVAILABLE, RESTORING, RESTORE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_security_group_ids" /></td>
    <td><code>array</code></td>
    <td>A list of VPC security group IDs associated with the DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_subnet_ids" /></td>
    <td><code>array</code></td>
    <td>A list of VPC subnet IDs associated with the DB cluster.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_db_clusters">

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
    <td>Service-generated unique identifier of the DB cluster to retrieve. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Customer supplied name of the Timestream for InfluxDB cluster. (pattern: &lt;code&gt;&#91;a-zA-z&#93;&#91;a-zA-Z0-9&#93;*(-&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="allocated_storage" /></td>
    <td><code>integer</code></td>
    <td>The amount of storage allocated for your DB storage type (in gibibytes).</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the DB cluster. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:timestream\-influxdb:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:(db\-instance|db\-cluster|db\-parameter\-group|db\-backup)/&#91;a-zA-Z0-9&#93;&#123;3,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_type" /></td>
    <td><code>string</code></td>
    <td>The Timestream for InfluxDB DB instance type that InfluxDB runs on. (db.influx.medium, db.influx.large, db.influx.xlarge, db.influx.2xlarge, db.influx.4xlarge, db.influx.8xlarge, db.influx.12xlarge, db.influx.16xlarge, db.influx.24xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="db_storage_type" /></td>
    <td><code>string</code></td>
    <td>The Timestream for InfluxDB DB storage type that InfluxDB stores data on. (InfluxIOIncludedT1, InfluxIOIncludedT2, InfluxIOIncludedT3)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_type" /></td>
    <td><code>string</code></td>
    <td>Deployment type of the DB cluster (MULTI_NODE_READ_REPLICAS)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint used to connect to the Timestream for InfluxDB cluster for write and read operations.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_type" /></td>
    <td><code>string</code></td>
    <td>The engine type of your DB cluster. (INFLUXDB_V2, INFLUXDB_V3_CORE, INFLUXDB_V3_ENTERPRISE)</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the network type of the Timestream for InfluxDB Cluster is IPv4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols. (IPV4, DUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port number on which InfluxDB accepts connections.</td>
</tr>
<tr>
    <td><CopyableCode code="reader_endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint used to connect to the Timestream for InfluxDB cluster for read-only operations.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the DB cluster. (CREATING, UPDATING, DELETING, AVAILABLE, FAILED, DELETED, MAINTENANCE, UPDATING_INSTANCE_TYPE, REBOOTING, REBOOT_FAILED, PARTIALLY_AVAILABLE, RESTORING, RESTORE_FAILED)</td>
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
    <td><a href="#get_db_cluster"><CopyableCode code="get_db_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a Timestream for InfluxDB cluster.</td>
</tr>
<tr>
    <td><a href="#list_db_clusters"><CopyableCode code="list_db_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Timestream for InfluxDB DB clusters.</td>
</tr>
<tr>
    <td><a href="#create_db_cluster"><CopyableCode code="create_db_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-dbInstanceType"><code>dbInstanceType</code></a>, <a href="#parameter-vpcSubnetIds"><code>vpcSubnetIds</code></a>, <a href="#parameter-vpcSecurityGroupIds"><code>vpcSecurityGroupIds</code></a></td>
    <td></td>
    <td>Creates a new Timestream for InfluxDB cluster.</td>
</tr>
<tr>
    <td><a href="#update_db_cluster"><CopyableCode code="update_db_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dbClusterId"><code>dbClusterId</code></a></td>
    <td></td>
    <td>Updates a Timestream for InfluxDB cluster.</td>
</tr>
<tr>
    <td><a href="#delete_db_cluster"><CopyableCode code="delete_db_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Timestream for InfluxDB cluster.</td>
</tr>
<tr>
    <td><a href="#reboot_db_cluster"><CopyableCode code="reboot_db_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dbClusterId"><code>dbClusterId</code></a></td>
    <td></td>
    <td>Reboots a Timestream for InfluxDB cluster.</td>
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
    defaultValue="get_db_cluster"
    values={[
        { label: 'get_db_cluster', value: 'get_db_cluster' },
        { label: 'list_db_clusters', value: 'list_db_clusters' }
    ]}
>
<TabItem value="get_db_cluster">

Retrieves information about a Timestream for InfluxDB cluster.

```sql
SELECT
id,
name,
allocated_storage,
arn,
cluster_configuration,
db_backup_configurations,
db_instance_type,
db_parameter_group_identifier,
db_storage_type,
deployment_type,
endpoint,
engine_type,
failover_mode,
influx_auth_parameters_secret_arn,
kms_key_id,
last_maintenance_time,
log_delivery_configuration,
maintenance_schedule,
network_type,
next_maintenance_time,
port,
publicly_accessible,
reader_endpoint,
status,
vpc_security_group_ids,
vpc_subnet_ids
FROM aws.timestream_influxdb.db_clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_db_clusters">

Returns a list of Timestream for InfluxDB DB clusters.

```sql
SELECT
id,
name,
allocated_storage,
arn,
db_instance_type,
db_storage_type,
deployment_type,
endpoint,
engine_type,
network_type,
port,
reader_endpoint,
status
FROM aws.timestream_influxdb.db_clusters
WHERE region = '{{ region }}' -- required
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

Creates a new Timestream for InfluxDB cluster.

```sql
INSERT INTO aws.timestream_influxdb.db_clusters (
name,
username,
password,
organization,
bucket,
port,
dbParameterGroupIdentifier,
dbInstanceType,
dbStorageType,
allocatedStorage,
networkType,
publiclyAccessible,
vpcSubnetIds,
vpcSecurityGroupIds,
deploymentType,
failoverMode,
logDeliveryConfiguration,
maintenanceSchedule,
dbBackupConfigurations,
kmsKeyId,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ username }}',
'{{ password }}',
'{{ organization }}',
'{{ bucket }}',
{{ port }},
'{{ dbParameterGroupIdentifier }}',
'{{ dbInstanceType }}' /* required */,
'{{ dbStorageType }}',
{{ allocatedStorage }},
'{{ networkType }}',
{{ publiclyAccessible }},
'{{ vpcSubnetIds }}' /* required */,
'{{ vpcSecurityGroupIds }}' /* required */,
'{{ deploymentType }}',
'{{ failoverMode }}',
'{{ logDeliveryConfiguration }}',
'{{ maintenanceSchedule }}',
'{{ dbBackupConfigurations }}',
'{{ kmsKeyId }}',
'{{ tags }}',
'{{ region }}'
RETURNING
db_cluster_id,
db_cluster_status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_clusters resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name that uniquely identifies the DB cluster when interacting with the Amazon Timestream for InfluxDB API and CLI commands. This name will also be a prefix included in the endpoint. DB cluster names must be unique per customer and per region.
    - name: username
      value: "{{ username }}"
      description: |
        The username of the initial admin user created in InfluxDB. Must start with a letter and can't end with a hyphen or contain two consecutive hyphens. For example, my-user1. This username will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a secret created in Secrets Manager in your account.
    - name: password
      value: "{{ password }}"
      description: |
        The password of the initial admin user created in InfluxDB. This password will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a secret created in Secrets Manager in your account.
    - name: organization
      value: "{{ organization }}"
      description: |
        The name of the initial organization for the initial admin user in InfluxDB. An InfluxDB organization is a workspace for a group of users.
    - name: bucket
      value: "{{ bucket }}"
      description: |
        The name of the initial InfluxDB bucket. All InfluxDB data is stored in a bucket. A bucket combines the concept of a database and a retention period (the duration of time that each data point persists). A bucket belongs to an organization.
    - name: port
      value: {{ port }}
      description: |
        The port number on which InfluxDB accepts connections. Valid Values: 1024-65535 Default: 8086 for InfluxDB v2, 8181 for InfluxDB v3 Constraints: The value can't be 2375-2376, 7788-7799, 8090, or 51678-51680
    - name: dbParameterGroupIdentifier
      value: "{{ dbParameterGroupIdentifier }}"
      description: |
        The ID of the DB parameter group to assign to your DB cluster. DB parameter groups specify how the database is configured. For example, DB parameter groups can specify the limit for query concurrency.
    - name: dbInstanceType
      value: "{{ dbInstanceType }}"
      description: |
        The Timestream for InfluxDB DB instance type to run InfluxDB on.
      valid_values: ['db.influx.medium', 'db.influx.large', 'db.influx.xlarge', 'db.influx.2xlarge', 'db.influx.4xlarge', 'db.influx.8xlarge', 'db.influx.12xlarge', 'db.influx.16xlarge', 'db.influx.24xlarge']
    - name: dbStorageType
      value: "{{ dbStorageType }}"
      description: |
        The Timestream for InfluxDB DB storage type to read and write InfluxDB data. You can choose between three different types of provisioned Influx IOPS Included storage according to your workload requirements: Influx I/O Included 3000 IOPS Influx I/O Included 12000 IOPS Influx I/O Included 16000 IOPS
      valid_values: ['InfluxIOIncludedT1', 'InfluxIOIncludedT2', 'InfluxIOIncludedT3']
    - name: allocatedStorage
      value: {{ allocatedStorage }}
      description: |
        The amount of storage to allocate for your DB storage type in GiB (gibibytes).
    - name: networkType
      value: "{{ networkType }}"
      description: |
        Specifies whether the network type of the Timestream for InfluxDB cluster is IPv4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.
      valid_values: ['IPV4', 'DUAL']
    - name: publiclyAccessible
      value: {{ publiclyAccessible }}
      description: |
        Configures the Timestream for InfluxDB cluster with a public IP to facilitate access from outside the VPC.
    - name: vpcSubnetIds
      value:
        - "{{ vpcSubnetIds }}"
      description: |
        A list of VPC subnet IDs to associate with the DB cluster. Provide at least two VPC subnet IDs in different Availability Zones when deploying with a Multi-AZ standby.
    - name: vpcSecurityGroupIds
      value:
        - "{{ vpcSecurityGroupIds }}"
      description: |
        A list of VPC security group IDs to associate with the Timestream for InfluxDB cluster.
    - name: deploymentType
      value: "{{ deploymentType }}"
      description: |
        Specifies the type of cluster to create.
      valid_values: ['MULTI_NODE_READ_REPLICAS']
    - name: failoverMode
      value: "{{ failoverMode }}"
      description: |
        Specifies the behavior of failure recovery when the primary node of the cluster fails.
      valid_values: ['AUTOMATIC', 'NO_FAILOVER']
    - name: logDeliveryConfiguration
      description: |
        Configuration for sending InfluxDB engine logs to a specified S3 bucket.
      value:
        s3Configuration:
          bucketName: "{{ bucketName }}"
          enabled: {{ enabled }}
    - name: maintenanceSchedule
      description: |
        Specifies the maintenance schedule for the DB cluster, including the preferred maintenance window and timezone.
      value:
        timezone: "{{ timezone }}"
        preferredMaintenanceWindow: "{{ preferredMaintenanceWindow }}"
    - name: dbBackupConfigurations
      description: |
        A list of backup configurations to enable automated backups for the DB cluster.
      value:
        - type_: "{{ type_ }}"
          retentionDays: {{ retentionDays }}
          enabled: {{ enabled }}
          customSchedule: "{{ customSchedule }}"
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        The Amazon Web Services KMS key identifier to use for encryption of the DB cluster. Can be a key ID, key ARN, alias name, or alias ARN.
    - name: tags
      value: "{{ tags }}"
      description: |
        A list of key-value pairs to associate with the DB instance.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_db_cluster"
    values={[
        { label: 'update_db_cluster', value: 'update_db_cluster' }
    ]}
>
<TabItem value="update_db_cluster">

Updates a Timestream for InfluxDB cluster.

```sql
UPDATE aws.timestream_influxdb.db_clusters
SET 
dbClusterId = '{{ dbClusterId }}',
logDeliveryConfiguration = '{{ logDeliveryConfiguration }}',
dbParameterGroupIdentifier = '{{ dbParameterGroupIdentifier }}',
port = {{ port }},
dbInstanceType = '{{ dbInstanceType }}',
failoverMode = '{{ failoverMode }}',
maintenanceSchedule = '{{ maintenanceSchedule }}',
dbBackupConfigurations = '{{ dbBackupConfigurations }}'
WHERE 
region = '{{ region }}' --required
AND dbClusterId = '{{ dbClusterId }}' --required
RETURNING
db_cluster_status;
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

Deletes a Timestream for InfluxDB cluster.

```sql
DELETE FROM aws.timestream_influxdb.db_clusters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reboot_db_cluster"
    values={[
        { label: 'reboot_db_cluster', value: 'reboot_db_cluster' }
    ]}
>
<TabItem value="reboot_db_cluster">

Reboots a Timestream for InfluxDB cluster.

```sql
EXEC aws.timestream_influxdb.db_clusters.reboot_db_cluster 
@region='{{ region }}' --required 
@@json=
'{
"dbClusterId": "{{ dbClusterId }}", 
"instanceIds": "{{ instanceIds }}"
}'
;
```
</TabItem>
</Tabs>
