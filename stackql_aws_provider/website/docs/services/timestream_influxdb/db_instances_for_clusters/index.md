--- 
title: db_instances_for_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - db_instances_for_clusters
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

Creates, updates, deletes, gets or lists a <code>db_instances_for_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_instances_for_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.timestream_influxdb.db_instances_for_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_db_instances_for_cluster"
    values={[
        { label: 'list_db_instances_for_cluster', value: 'list_db_instances_for_cluster' }
    ]}
>
<TabItem value="list_db_instances_for_cluster">

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
    <td>A service-generated name for the DB instance based on the customer-supplied name for the DB cluster. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9&#93;*(-&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="allocatedStorage" /></td>
    <td><code>integer</code></td>
    <td>The amount of storage allocated for your DB storage type in GiB (gibibytes).</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the DB instance. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:timestream\-influxdb:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:(db\-instance|db\-cluster|db\-parameter\-group)/&#91;a-zA-Z0-9&#93;&#123;3,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dbInstanceType" /></td>
    <td><code>string</code></td>
    <td>The Timestream for InfluxDB instance type to run InfluxDB on. (db.influx.medium, db.influx.large, db.influx.xlarge, db.influx.2xlarge, db.influx.4xlarge, db.influx.8xlarge, db.influx.12xlarge, db.influx.16xlarge, db.influx.24xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="dbStorageType" /></td>
    <td><code>string</code></td>
    <td>The storage type for your DB instance. (InfluxIOIncludedT1, InfluxIOIncludedT2, InfluxIOIncludedT3)</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentType" /></td>
    <td><code>string</code></td>
    <td>Specifies the deployment type if applicable. (SINGLE_AZ, WITH_MULTIAZ_STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceMode" /></td>
    <td><code>string</code></td>
    <td>Specifies the DB instance's role in the cluster. (PRIMARY, STANDBY, REPLICA, INGEST, QUERY, COMPACT, PROCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceModes" /></td>
    <td><code>array</code></td>
    <td>Specifies the DB instance's roles in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="networkType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the network type of the Timestream for InfluxDB instance is IPv4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols. (IPV4, DUAL)</td>
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
    <td><a href="#list_db_instances_for_cluster"><CopyableCode code="list_db_instances_for_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Timestream for InfluxDB clusters.</td>
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
    defaultValue="list_db_instances_for_cluster"
    values={[
        { label: 'list_db_instances_for_cluster', value: 'list_db_instances_for_cluster' }
    ]}
>
<TabItem value="list_db_instances_for_cluster">

Returns a list of Timestream for InfluxDB clusters.

```sql
SELECT
id,
name,
allocatedStorage,
arn,
dbInstanceType,
dbStorageType,
deploymentType,
endpoint,
instanceMode,
instanceModes,
networkType,
port,
status
FROM aws.timestream_influxdb.db_instances_for_clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
