--- 
title: db_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - db_instances
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

Creates, updates, deletes, gets or lists a <code>db_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.timestream_influxdb.db_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_db_instance"
    values={[
        { label: 'get_db_instance', value: 'get_db_instance' },
        { label: 'list_db_instances', value: 'list_db_instances' }
    ]}
>
<TabItem value="get_db_instance">

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
    <td>A service-generated unique identifier. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The customer-supplied name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9&#93;*(-&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="allocated_storage" /></td>
    <td><code>integer</code></td>
    <td>The amount of storage allocated for your DB storage type (in gibibytes).</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the DB instance. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:timestream\-influxdb:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:(db\-instance|db\-cluster|db\-parameter\-group)/&#91;a-zA-Z0-9&#93;&#123;3,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone in which the DB instance resides.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_id" /></td>
    <td><code>string</code></td>
    <td>Specifies the DbCluster to which this DbInstance belongs to. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_type" /></td>
    <td><code>string</code></td>
    <td>The Timestream for InfluxDB instance type that InfluxDB runs on. (db.influx.medium, db.influx.large, db.influx.xlarge, db.influx.2xlarge, db.influx.4xlarge, db.influx.8xlarge, db.influx.12xlarge, db.influx.16xlarge, db.influx.24xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="db_parameter_group_identifier" /></td>
    <td><code>string</code></td>
    <td>The id of the DB parameter group assigned to your DB instance. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_storage_type" /></td>
    <td><code>string</code></td>
    <td>The Timestream for InfluxDB DB storage type that InfluxDB stores data on. (InfluxIOIncludedT1, InfluxIOIncludedT2, InfluxIOIncludedT3)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_type" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability. (SINGLE_AZ, WITH_MULTIAZ_STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</td>
</tr>
<tr>
    <td><CopyableCode code="influx_auth_parameters_secret_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_mode" /></td>
    <td><code>string</code></td>
    <td>Specifies the DbInstance's role in the cluster. (PRIMARY, STANDBY, REPLICA, INGEST, QUERY, COMPACT, PROCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_modes" /></td>
    <td><code>array</code></td>
    <td>Specifies the DbInstance's roles in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="last_maintenance_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last completed maintenance operation on the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="log_delivery_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_schedule" /></td>
    <td><code>object</code></td>
    <td>The maintenance schedule for the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the networkType of the Timestream for InfluxDB instance is IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols. (IPV4, DUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="next_maintenance_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the next scheduled maintenance operation on the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port number on which InfluxDB accepts connections.</td>
</tr>
<tr>
    <td><CopyableCode code="publicly_accessible" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the DB instance has a public IP to facilitate access.</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the DB instance. (CREATING, AVAILABLE, DELETING, MODIFYING, UPDATING, DELETED, FAILED, UPDATING_DEPLOYMENT_TYPE, UPDATING_INSTANCE_TYPE, MAINTENANCE, REBOOTING, REBOOT_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_security_group_ids" /></td>
    <td><code>array</code></td>
    <td>A list of VPC security group IDs associated with the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_subnet_ids" /></td>
    <td><code>array</code></td>
    <td>A list of VPC subnet IDs associated with the DB instance.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_db_instances">

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
    <td>The service-generated unique identifier of the DB instance. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>This customer-supplied name uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9&#93;*(-&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="allocated_storage" /></td>
    <td><code>integer</code></td>
    <td>The amount of storage to allocate for your DbStorageType in GiB (gibibytes).</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the DB instance. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:timestream\-influxdb:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:(db\-instance|db\-cluster|db\-parameter\-group)/&#91;a-zA-Z0-9&#93;&#123;3,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_type" /></td>
    <td><code>string</code></td>
    <td>The Timestream for InfluxDB instance type to run InfluxDB on. (db.influx.medium, db.influx.large, db.influx.xlarge, db.influx.2xlarge, db.influx.4xlarge, db.influx.8xlarge, db.influx.12xlarge, db.influx.16xlarge, db.influx.24xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="db_storage_type" /></td>
    <td><code>string</code></td>
    <td>The storage type for your DB instance. (InfluxIOIncludedT1, InfluxIOIncludedT2, InfluxIOIncludedT3)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_type" /></td>
    <td><code>string</code></td>
    <td>Single-Instance or with a MultiAZ Standby for High availability. (SINGLE_AZ, WITH_MULTIAZ_STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the networkType of the Timestream for InfluxDB instance is IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols. (IPV4, DUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port number on which InfluxDB accepts connections.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the DB instance. (CREATING, AVAILABLE, DELETING, MODIFYING, UPDATING, DELETED, FAILED, UPDATING_DEPLOYMENT_TYPE, UPDATING_INSTANCE_TYPE, MAINTENANCE, REBOOTING, REBOOT_FAILED)</td>
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
    <td><a href="#get_db_instance"><CopyableCode code="get_db_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a Timestream for InfluxDB DB instance.</td>
</tr>
<tr>
    <td><a href="#list_db_instances"><CopyableCode code="list_db_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Timestream for InfluxDB DB instances.</td>
</tr>
<tr>
    <td><a href="#create_db_instance"><CopyableCode code="create_db_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-password"><code>password</code></a>, <a href="#parameter-dbInstanceType"><code>dbInstanceType</code></a>, <a href="#parameter-vpcSubnetIds"><code>vpcSubnetIds</code></a>, <a href="#parameter-vpcSecurityGroupIds"><code>vpcSecurityGroupIds</code></a>, <a href="#parameter-allocatedStorage"><code>allocatedStorage</code></a></td>
    <td></td>
    <td>Creates a new Timestream for InfluxDB DB instance.</td>
</tr>
<tr>
    <td><a href="#update_db_instance"><CopyableCode code="update_db_instance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-identifier"><code>identifier</code></a></td>
    <td></td>
    <td>Updates a Timestream for InfluxDB DB instance.</td>
</tr>
<tr>
    <td><a href="#delete_db_instance"><CopyableCode code="delete_db_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Timestream for InfluxDB DB instance.</td>
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
    defaultValue="get_db_instance"
    values={[
        { label: 'get_db_instance', value: 'get_db_instance' },
        { label: 'list_db_instances', value: 'list_db_instances' }
    ]}
>
<TabItem value="get_db_instance">

Returns a Timestream for InfluxDB DB instance.

```sql
SELECT
id,
name,
allocated_storage,
arn,
availability_zone,
db_cluster_id,
db_instance_type,
db_parameter_group_identifier,
db_storage_type,
deployment_type,
endpoint,
influx_auth_parameters_secret_arn,
instance_mode,
instance_modes,
last_maintenance_time,
log_delivery_configuration,
maintenance_schedule,
network_type,
next_maintenance_time,
port,
publicly_accessible,
secondary_availability_zone,
status,
vpc_security_group_ids,
vpc_subnet_ids
FROM aws.timestream_influxdb.db_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_db_instances">

Returns a list of Timestream for InfluxDB DB instances.

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
network_type,
port,
status
FROM aws.timestream_influxdb.db_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_db_instance"
    values={[
        { label: 'create_db_instance', value: 'create_db_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_db_instance">

Creates a new Timestream for InfluxDB DB instance.

```sql
INSERT INTO aws.timestream_influxdb.db_instances (
name,
username,
password,
organization,
bucket,
dbInstanceType,
vpcSubnetIds,
vpcSecurityGroupIds,
publiclyAccessible,
dbStorageType,
allocatedStorage,
dbParameterGroupIdentifier,
deploymentType,
logDeliveryConfiguration,
maintenanceSchedule,
tags,
port,
networkType,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ username }}',
'{{ password }}' /* required */,
'{{ organization }}',
'{{ bucket }}',
'{{ dbInstanceType }}' /* required */,
'{{ vpcSubnetIds }}' /* required */,
'{{ vpcSecurityGroupIds }}' /* required */,
{{ publiclyAccessible }},
'{{ dbStorageType }}',
{{ allocatedStorage }} /* required */,
'{{ dbParameterGroupIdentifier }}',
'{{ deploymentType }}',
'{{ logDeliveryConfiguration }}',
'{{ maintenanceSchedule }}',
'{{ tags }}',
{{ port }},
'{{ networkType }}',
'{{ region }}'
RETURNING
id,
name,
allocated_storage,
arn,
availability_zone,
db_cluster_id,
db_instance_type,
db_parameter_group_identifier,
db_storage_type,
deployment_type,
endpoint,
influx_auth_parameters_secret_arn,
instance_mode,
instance_modes,
last_maintenance_time,
log_delivery_configuration,
maintenance_schedule,
network_type,
next_maintenance_time,
port,
publicly_accessible,
secondary_availability_zone,
status,
vpc_security_group_ids,
vpc_subnet_ids
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_instances resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands. This name will also be a prefix included in the endpoint. DB instance names must be unique per customer and per region.
    - name: username
      value: "{{ username }}"
      description: |
        The username of the initial admin user created in InfluxDB. Must start with a letter and can't end with a hyphen or contain two consecutive hyphens. For example, my-user1. This username will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a Secret created in Amazon Secrets Manager in your account.
    - name: password
      value: "{{ password }}"
      description: |
        The password of the initial admin user created in InfluxDB v2. This password will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a Secret created in Secrets Manager in your account.
    - name: organization
      value: "{{ organization }}"
      description: |
        The name of the initial organization for the initial admin user in InfluxDB. An InfluxDB organization is a workspace for a group of users.
    - name: bucket
      value: "{{ bucket }}"
      description: |
        The name of the initial InfluxDB bucket. All InfluxDB data is stored in a bucket. A bucket combines the concept of a database and a retention period (the duration of time that each data point persists). A bucket belongs to an organization.
    - name: dbInstanceType
      value: "{{ dbInstanceType }}"
      description: |
        The Timestream for InfluxDB DB instance type to run InfluxDB on.
      valid_values: ['db.influx.medium', 'db.influx.large', 'db.influx.xlarge', 'db.influx.2xlarge', 'db.influx.4xlarge', 'db.influx.8xlarge', 'db.influx.12xlarge', 'db.influx.16xlarge', 'db.influx.24xlarge']
    - name: vpcSubnetIds
      value:
        - "{{ vpcSubnetIds }}"
      description: |
        A list of VPC subnet IDs to associate with the DB instance. Provide at least two VPC subnet IDs in different availability zones when deploying with a Multi-AZ standby.
    - name: vpcSecurityGroupIds
      value:
        - "{{ vpcSecurityGroupIds }}"
      description: |
        A list of VPC security group IDs to associate with the DB instance.
    - name: publiclyAccessible
      value: {{ publiclyAccessible }}
      description: |
        Configures the DB instance with a public IP to facilitate access.
    - name: dbStorageType
      value: "{{ dbStorageType }}"
      description: |
        The Timestream for InfluxDB DB storage type to read and write InfluxDB data. You can choose between 3 different types of provisioned Influx IOPS included storage according to your workloads requirements: Influx IO Included 3000 IOPS Influx IO Included 12000 IOPS Influx IO Included 16000 IOPS
      valid_values: ['InfluxIOIncludedT1', 'InfluxIOIncludedT2', 'InfluxIOIncludedT3']
    - name: allocatedStorage
      value: {{ allocatedStorage }}
      description: |
        The amount of storage to allocate for your DB storage type in GiB (gibibytes).
    - name: dbParameterGroupIdentifier
      value: "{{ dbParameterGroupIdentifier }}"
      description: |
        The id of the DB parameter group to assign to your DB instance. DB parameter groups specify how the database is configured. For example, DB parameter groups can specify the limit for query concurrency.
    - name: deploymentType
      value: "{{ deploymentType }}"
      description: |
        Specifies whether the DB instance will be deployed as a standalone instance or with a Multi-AZ standby for high availability.
      valid_values: ['SINGLE_AZ', 'WITH_MULTIAZ_STANDBY']
    - name: logDeliveryConfiguration
      description: |
        Configuration for sending InfluxDB engine logs to a specified S3 bucket.
      value:
        s3Configuration:
          bucketName: "{{ bucketName }}"
          enabled: {{ enabled }}
    - name: maintenanceSchedule
      description: |
        Specifies the maintenance schedule for the DB instance, including the preferred maintenance window and timezone.
      value:
        timezone: "{{ timezone }}"
        preferredMaintenanceWindow: "{{ preferredMaintenanceWindow }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        A list of key-value pairs to associate with the DB instance.
    - name: port
      value: {{ port }}
      description: |
        The port number on which InfluxDB accepts connections. Valid Values: 1024-65535 Default: 8086 Constraints: The value can't be 2375-2376, 7788-7799, 8090, or 51678-51680
    - name: networkType
      value: "{{ networkType }}"
      description: |
        Specifies whether the networkType of the Timestream for InfluxDB instance is IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.
      valid_values: ['IPV4', 'DUAL']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_db_instance"
    values={[
        { label: 'update_db_instance', value: 'update_db_instance' }
    ]}
>
<TabItem value="update_db_instance">

Updates a Timestream for InfluxDB DB instance.

```sql
UPDATE aws.timestream_influxdb.db_instances
SET 
identifier = '{{ identifier }}',
logDeliveryConfiguration = '{{ logDeliveryConfiguration }}',
dbParameterGroupIdentifier = '{{ dbParameterGroupIdentifier }}',
port = {{ port }},
dbInstanceType = '{{ dbInstanceType }}',
deploymentType = '{{ deploymentType }}',
dbStorageType = '{{ dbStorageType }}',
allocatedStorage = {{ allocatedStorage }},
maintenanceSchedule = '{{ maintenanceSchedule }}'
WHERE 
region = '{{ region }}' --required
AND identifier = '{{ identifier }}' --required
RETURNING
id,
name,
allocated_storage,
arn,
availability_zone,
db_cluster_id,
db_instance_type,
db_parameter_group_identifier,
db_storage_type,
deployment_type,
endpoint,
influx_auth_parameters_secret_arn,
instance_mode,
instance_modes,
last_maintenance_time,
log_delivery_configuration,
maintenance_schedule,
network_type,
next_maintenance_time,
port,
publicly_accessible,
secondary_availability_zone,
status,
vpc_security_group_ids,
vpc_subnet_ids;
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

Deletes a Timestream for InfluxDB DB instance.

```sql
DELETE FROM aws.timestream_influxdb.db_instances
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
