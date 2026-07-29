--- 
title: cloud_exadata_infrastructures
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_exadata_infrastructures
  - odb
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

Creates, updates, deletes, gets or lists a <code>cloud_exadata_infrastructures</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_exadata_infrastructures" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.cloud_exadata_infrastructures" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cloud_exadata_infrastructure"
    values={[
        { label: 'get_cloud_exadata_infrastructure', value: 'get_cloud_exadata_infrastructure' },
        { label: 'list_cloud_exadata_infrastructures', value: 'list_cloud_exadata_infrastructures' }
    ]}
>
<TabItem value="get_cloud_exadata_infrastructure">

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
    <td><CopyableCode code="activated_storage_count" /></td>
    <td><code>integer</code></td>
    <td>The number of storage servers requested for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="additional_storage_count" /></td>
    <td><code>integer</code></td>
    <td>The number of storage servers requested for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The name of the Availability Zone (AZ) where the Exadata infrastructure is located.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The AZ ID of the AZ where the Exadata infrastructure is located.</td>
</tr>
<tr>
    <td><CopyableCode code="available_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of available storage, in gigabytes (GB), for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_exadata_infrastructure_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_exadata_infrastructure_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Exadata infrastructure. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_count" /></td>
    <td><code>integer</code></td>
    <td>The number of database servers for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="compute_model" /></td>
    <td><code>string</code></td>
    <td>The OCI model compute model used when you create or clone an instance: ECPU or OCPU. An ECPU is an abstracted measure of compute resources. ECPUs are based on the number of cores elastically allocated from a pool of compute and storage servers. An OCPU is a legacy physical measure of compute resources. OCPUs are based on the physical core of a processor with hyper-threading enabled. (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores that are allocated to the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Exadata infrastructure was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_contacts_to_send_to_oci" /></td>
    <td><code>array</code></td>
    <td>The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="data_storage_size_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The size of the Exadata infrastructure's data disk group, in terabytes (TB).</td>
</tr>
<tr>
    <td><CopyableCode code="database_server_type" /></td>
    <td><code>string</code></td>
    <td>The database server model type of the Exadata infrastructure. For the list of valid model names, use the ListDbSystemShapes operation.</td>
</tr>
<tr>
    <td><CopyableCode code="db_node_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The size of the Exadata infrastructure's local node storage, in gigabytes (GB).</td>
</tr>
<tr>
    <td><CopyableCode code="db_server_version" /></td>
    <td><code>string</code></td>
    <td>The software version of the database servers (dom0) in the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="last_maintenance_run_id" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud Identifier (OCID) of the last maintenance run for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_window" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="max_cpu_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores available on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="max_data_storage_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The total amount of data disk group storage, in terabytes (TB), that's available on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="max_db_node_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The total amount of local node storage, in gigabytes (GB), that's available on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="max_memory_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The total amount of memory, in gigabytes (GB), that's available on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="memory_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory, in gigabytes (GB), that's allocated on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="monthly_db_server_version" /></td>
    <td><code>string</code></td>
    <td>The monthly software version of the database servers installed on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="monthly_storage_server_version" /></td>
    <td><code>string</code></td>
    <td>The monthly software version of the storage servers installed on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="next_maintenance_run_id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the next maintenance run for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_resource_anchor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the OCI resource anchor for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_url" /></td>
    <td><code>string</code></td>
    <td>The HTTPS link to the Exadata infrastructure in OCI.</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="percent_progress" /></td>
    <td><code>number (float)</code></td>
    <td>The amount of progress made on the current operation on the Exadata infrastructure, expressed as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The model name of the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Exadata infrastructure. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_count" /></td>
    <td><code>integer</code></td>
    <td>The number of storage servers that are activated for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_server_type" /></td>
    <td><code>string</code></td>
    <td>The storage server model type of the Exadata infrastructure. For the list of valid model names, use the ListDbSystemShapes operation.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_server_version" /></td>
    <td><code>string</code></td>
    <td>The software version of the storage servers on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="total_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The total amount of storage, in gigabytes (GB), on the the Exadata infrastructure.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cloud_exadata_infrastructures">

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
    <td><CopyableCode code="activated_storage_count" /></td>
    <td><code>integer</code></td>
    <td>The number of storage servers requested for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="additional_storage_count" /></td>
    <td><code>integer</code></td>
    <td>The number of storage servers requested for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The name of the Availability Zone (AZ) where the Exadata infrastructure is located.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The AZ ID of the AZ where the Exadata infrastructure is located.</td>
</tr>
<tr>
    <td><CopyableCode code="available_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of available storage, in gigabytes (GB), for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_exadata_infrastructure_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_exadata_infrastructure_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Exadata infrastructure. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_count" /></td>
    <td><code>integer</code></td>
    <td>The number of database servers for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="compute_model" /></td>
    <td><code>string</code></td>
    <td>The OCI model compute model used when you create or clone an instance: ECPU or OCPU. An ECPU is an abstracted measure of compute resources. ECPUs are based on the number of cores elastically allocated from a pool of compute and storage servers. An OCPU is a legacy physical measure of compute resources. OCPUs are based on the physical core of a processor with hyper-threading enabled. (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores that are allocated to the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Exadata infrastructure was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_contacts_to_send_to_oci" /></td>
    <td><code>array</code></td>
    <td>The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="data_storage_size_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The size of the Exadata infrastructure's data disk group, in terabytes (TB).</td>
</tr>
<tr>
    <td><CopyableCode code="database_server_type" /></td>
    <td><code>string</code></td>
    <td>The database server model type of the Exadata infrastructure. For the list of valid model names, use the ListDbSystemShapes operation.</td>
</tr>
<tr>
    <td><CopyableCode code="db_node_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The size of the Exadata infrastructure's local node storage, in gigabytes (GB).</td>
</tr>
<tr>
    <td><CopyableCode code="db_server_version" /></td>
    <td><code>string</code></td>
    <td>The software version of the database servers on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="last_maintenance_run_id" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud Identifier (OCID) of the last maintenance run for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_window" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="max_cpu_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores available on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="max_data_storage_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The total amount of data disk group storage, in terabytes (TB), that's available on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="max_db_node_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The total amount of local node storage, in gigabytes (GB), that's available on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="max_memory_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The total amount of memory, in gigabytes (GB), that's available on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="memory_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory, in gigabytes (GB), that's allocated on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="monthly_db_server_version" /></td>
    <td><code>string</code></td>
    <td>The monthly software version of the database servers (dom0) installed on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="monthly_storage_server_version" /></td>
    <td><code>string</code></td>
    <td>The monthly software version of the storage servers installed on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="next_maintenance_run_id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the next maintenance run for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_resource_anchor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the OCI resource anchor for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_url" /></td>
    <td><code>string</code></td>
    <td>The HTTPS link to the Exadata infrastructure in OCI.</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="percent_progress" /></td>
    <td><code>number (float)</code></td>
    <td>The amount of progress made on the current operation on the Exadata infrastructure, expressed as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The model name of the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Exadata infrastructure. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_count" /></td>
    <td><code>integer</code></td>
    <td>The number of storage servers that are activated for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_server_type" /></td>
    <td><code>string</code></td>
    <td>The storage server model type of the Exadata infrastructure. For the list of valid model names, use the ListDbSystemShapes operation.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_server_version" /></td>
    <td><code>string</code></td>
    <td>The software version of the storage servers on the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="total_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The total amount of storage, in gigabytes (GB), on the the Exadata infrastructure.</td>
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
    <td><a href="#get_cloud_exadata_infrastructure"><CopyableCode code="get_cloud_exadata_infrastructure" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified Exadata infrastructure.</td>
</tr>
<tr>
    <td><a href="#list_cloud_exadata_infrastructures"><CopyableCode code="list_cloud_exadata_infrastructures" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the Exadata infrastructures owned by your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_cloud_exadata_infrastructure"><CopyableCode code="create_cloud_exadata_infrastructure" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-shape"><code>shape</code></a>, <a href="#parameter-computeCount"><code>computeCount</code></a>, <a href="#parameter-storageCount"><code>storageCount</code></a></td>
    <td></td>
    <td>Creates an Exadata infrastructure.</td>
</tr>
<tr>
    <td><a href="#update_cloud_exadata_infrastructure"><CopyableCode code="update_cloud_exadata_infrastructure" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloudExadataInfrastructureId"><code>cloudExadataInfrastructureId</code></a></td>
    <td></td>
    <td>Updates the properties of an Exadata infrastructure resource.</td>
</tr>
<tr>
    <td><a href="#delete_cloud_exadata_infrastructure"><CopyableCode code="delete_cloud_exadata_infrastructure" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Exadata infrastructure. Before you use this operation, make sure to delete all of the VM clusters that are hosted on this Exadata infrastructure.</td>
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
    defaultValue="get_cloud_exadata_infrastructure"
    values={[
        { label: 'get_cloud_exadata_infrastructure', value: 'get_cloud_exadata_infrastructure' },
        { label: 'list_cloud_exadata_infrastructures', value: 'list_cloud_exadata_infrastructures' }
    ]}
>
<TabItem value="get_cloud_exadata_infrastructure">

Returns information about the specified Exadata infrastructure.

```sql
SELECT
activated_storage_count,
additional_storage_count,
availability_zone,
availability_zone_id,
available_storage_size_in_gbs,
cloud_exadata_infrastructure_arn,
cloud_exadata_infrastructure_id,
compute_count,
compute_model,
cpu_count,
created_at,
customer_contacts_to_send_to_oci,
data_storage_size_in_tbs,
database_server_type,
db_node_storage_size_in_gbs,
db_server_version,
display_name,
last_maintenance_run_id,
maintenance_window,
max_cpu_count,
max_data_storage_in_tbs,
max_db_node_storage_size_in_gbs,
max_memory_in_gbs,
memory_size_in_gbs,
monthly_db_server_version,
monthly_storage_server_version,
next_maintenance_run_id,
oci_resource_anchor_name,
oci_url,
ocid,
percent_progress,
shape,
status,
status_reason,
storage_count,
storage_server_type,
storage_server_version,
total_storage_size_in_gbs
FROM aws.odb.cloud_exadata_infrastructures
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cloud_exadata_infrastructures">

Returns information about the Exadata infrastructures owned by your Amazon Web Services account.

```sql
SELECT
activated_storage_count,
additional_storage_count,
availability_zone,
availability_zone_id,
available_storage_size_in_gbs,
cloud_exadata_infrastructure_arn,
cloud_exadata_infrastructure_id,
compute_count,
compute_model,
cpu_count,
created_at,
customer_contacts_to_send_to_oci,
data_storage_size_in_tbs,
database_server_type,
db_node_storage_size_in_gbs,
db_server_version,
display_name,
last_maintenance_run_id,
maintenance_window,
max_cpu_count,
max_data_storage_in_tbs,
max_db_node_storage_size_in_gbs,
max_memory_in_gbs,
memory_size_in_gbs,
monthly_db_server_version,
monthly_storage_server_version,
next_maintenance_run_id,
oci_resource_anchor_name,
oci_url,
ocid,
percent_progress,
shape,
status,
status_reason,
storage_count,
storage_server_type,
storage_server_version,
total_storage_size_in_gbs
FROM aws.odb.cloud_exadata_infrastructures
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cloud_exadata_infrastructure"
    values={[
        { label: 'create_cloud_exadata_infrastructure', value: 'create_cloud_exadata_infrastructure' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cloud_exadata_infrastructure">

Creates an Exadata infrastructure.

```sql
INSERT INTO aws.odb.cloud_exadata_infrastructures (
displayName,
shape,
availabilityZone,
availabilityZoneId,
tags,
computeCount,
customerContactsToSendToOCI,
maintenanceWindow,
storageCount,
clientToken,
databaseServerType,
storageServerType,
region
)
SELECT 
'{{ displayName }}' /* required */,
'{{ shape }}' /* required */,
'{{ availabilityZone }}',
'{{ availabilityZoneId }}',
'{{ tags }}',
{{ computeCount }} /* required */,
'{{ customerContactsToSendToOCI }}',
'{{ maintenanceWindow }}',
{{ storageCount }} /* required */,
'{{ clientToken }}',
'{{ databaseServerType }}',
'{{ storageServerType }}',
'{{ region }}'
RETURNING
cloud_exadata_infrastructure_id,
display_name,
status,
status_reason
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cloud_exadata_infrastructures
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cloud_exadata_infrastructures resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name for the Exadata infrastructure.
    - name: shape
      value: "{{ shape }}"
      description: |
        The model name of the Exadata infrastructure. For the list of valid model names, use the ListDbSystemShapes operation.
    - name: availabilityZone
      value: "{{ availabilityZone }}"
      description: |
        The name of the Availability Zone (AZ) where the Exadata infrastructure is located. This operation requires that you specify a value for either availabilityZone or availabilityZoneId. Example: us-east-1a
    - name: availabilityZoneId
      value: "{{ availabilityZoneId }}"
      description: |
        The AZ ID of the AZ where the Exadata infrastructure is located. This operation requires that you specify a value for either availabilityZone or availabilityZoneId. Example: use1-az1
    - name: tags
      value: "{{ tags }}"
      description: |
        The list of resource tags to apply to the Exadata infrastructure.
    - name: computeCount
      value: {{ computeCount }}
      description: |
        The number of database servers for the Exadata infrastructure. Valid values for this parameter depend on the shape. To get information about the minimum and maximum values, use the ListDbSystemShapes operation.
    - name: customerContactsToSendToOCI
      description: |
        The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure.
      value:
        - email: "{{ email }}"
    - name: maintenanceWindow
      description: |
        The maintenance window configuration for the Exadata Cloud infrastructure. This allows you to define when maintenance operations such as patching and updates can be performed on the infrastructure.
      value:
        customActionTimeoutInMins: {{ customActionTimeoutInMins }}
        daysOfWeek:
          - name: "{{ name }}"
        hoursOfDay:
          - {{ hoursOfDay }}
        isCustomActionTimeoutEnabled: {{ isCustomActionTimeoutEnabled }}
        leadTimeInWeeks: {{ leadTimeInWeeks }}
        months:
          - name: "{{ name }}"
        patchingMode: "{{ patchingMode }}"
        preference: "{{ preference }}"
        skipRu: {{ skipRu }}
        weeksOfMonth:
          - {{ weeksOfMonth }}
    - name: storageCount
      value: {{ storageCount }}
      description: |
        The number of storage servers to activate for this Exadata infrastructure. Valid values for this parameter depend on the shape. To get information about the minimum and maximum values, use the ListDbSystemShapes operation.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency. The client token is valid for up to 24 hours after it's first used.
    - name: databaseServerType
      value: "{{ databaseServerType }}"
      description: |
        The database server model type of the Exadata infrastructure. For the list of valid model names, use the ListDbSystemShapes operation.
    - name: storageServerType
      value: "{{ storageServerType }}"
      description: |
        The storage server model type of the Exadata infrastructure. For the list of valid model names, use the ListDbSystemShapes operation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cloud_exadata_infrastructure"
    values={[
        { label: 'update_cloud_exadata_infrastructure', value: 'update_cloud_exadata_infrastructure' }
    ]}
>
<TabItem value="update_cloud_exadata_infrastructure">

Updates the properties of an Exadata infrastructure resource.

```sql
UPDATE aws.odb.cloud_exadata_infrastructures
SET 
cloudExadataInfrastructureId = '{{ cloudExadataInfrastructureId }}',
maintenanceWindow = '{{ maintenanceWindow }}'
WHERE 
region = '{{ region }}' --required
AND cloudExadataInfrastructureId = '{{ cloudExadataInfrastructureId }}' --required
RETURNING
cloud_exadata_infrastructure_id,
display_name,
status,
status_reason;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cloud_exadata_infrastructure"
    values={[
        { label: 'delete_cloud_exadata_infrastructure', value: 'delete_cloud_exadata_infrastructure' }
    ]}
>
<TabItem value="delete_cloud_exadata_infrastructure">

Deletes the specified Exadata infrastructure. Before you use this operation, make sure to delete all of the VM clusters that are hosted on this Exadata infrastructure.

```sql
DELETE FROM aws.odb.cloud_exadata_infrastructures
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
