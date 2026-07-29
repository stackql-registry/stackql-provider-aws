--- 
title: db_nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - db_nodes
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

Creates, updates, deletes, gets or lists a <code>db_nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.db_nodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_db_node"
    values={[
        { label: 'get_db_node', value: 'get_db_node' },
        { label: 'list_db_nodes', value: 'list_db_nodes' }
    ]}
>
<TabItem value="get_db_node">

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
    <td><CopyableCode code="additional_details" /></td>
    <td><code>string</code></td>
    <td>Additional information about the planned maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_ip_id" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud ID (OCID) of the backup IP address that's associated with the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vnic_2_id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the second backup VNIC.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vnic_id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the backup VNIC.</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_core_count" /></td>
    <td><code>integer</code></td>
    <td>Number of CPU cores enabled on the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the DB node was created.</td>
</tr>
<tr>
    <td><CopyableCode code="db_node_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the DB node. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_node_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the DB node. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_node_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of local node storage, in gigabytes (GBs), that's allocated on the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="db_server_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Db server that is associated with the DB node. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_system_id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="fault_domain" /></td>
    <td><code>string</code></td>
    <td>The name of the fault domain the instance is contained in.</td>
</tr>
<tr>
    <td><CopyableCode code="floating_ip_address" /></td>
    <td><code>string</code></td>
    <td>The floating IP address assigned to the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="host_ip_id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the host IP address that's associated with the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The host name for the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_type" /></td>
    <td><code>string</code></td>
    <td>The type of database node maintenance. Either VMDB_REBOOT_MIGRATION or EXADBXS_REBOOT_MIGRATION. (VMDB_REBOOT_MIGRATION)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The allocated memory in GBs on the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_resource_anchor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the OCI resource anchor for the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The OCID of the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="private_ip_address" /></td>
    <td><code>string</code></td>
    <td>The private IP address assigned to the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="software_storage_size_in_gb" /></td>
    <td><code>integer</code></td>
    <td>The size (in GB) of the block storage volume allocation for the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the DB node. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, STOPPING, STOPPED, STARTING)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="time_maintenance_window_end" /></td>
    <td><code>string</code></td>
    <td>End date and time of maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="time_maintenance_window_start" /></td>
    <td><code>string</code></td>
    <td>Start date and time of maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="total_cpu_core_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores reserved on the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="vnic_2_id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the second VNIC.</td>
</tr>
<tr>
    <td><CopyableCode code="vnic_id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the VNIC.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_db_nodes">

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
    <td><CopyableCode code="additional_details" /></td>
    <td><code>string</code></td>
    <td>Additional information about the planned maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_ip_id" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud ID (OCID) of the backup IP address that's associated with the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vnic_2_id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the second backup virtual network interface card (VNIC) for the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vnic_id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the backup VNIC for the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_core_count" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores enabled on the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the DB node was created.</td>
</tr>
<tr>
    <td><CopyableCode code="db_node_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the DB node. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_node_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the DB node. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_node_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of local node storage, in gigabytes (GB), that's allocated on the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="db_server_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the database server that's associated with the DB node. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_system_id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="fault_domain" /></td>
    <td><code>string</code></td>
    <td>The name of the fault domain where the DB node is located.</td>
</tr>
<tr>
    <td><CopyableCode code="host_ip_id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the host IP address that's associated with the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The host name for the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_type" /></td>
    <td><code>string</code></td>
    <td>The type of maintenance the DB node. (VMDB_REBOOT_MIGRATION)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory, in gigabytes (GB), that allocated on the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_resource_anchor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the OCI resource anchor for the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The OCID of the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="software_storage_size_in_gb" /></td>
    <td><code>integer</code></td>
    <td>The size of the block storage volume, in gigabytes (GB), that's allocated for the DB system. This attribute applies only for virtual machine DB systems.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the DB node. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, STOPPING, STOPPED, STARTING)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="time_maintenance_window_end" /></td>
    <td><code>string</code></td>
    <td>The end date and time of the maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="time_maintenance_window_start" /></td>
    <td><code>string</code></td>
    <td>The start date and time of the maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="total_cpu_core_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores reserved on the DB node.</td>
</tr>
<tr>
    <td><CopyableCode code="vnic_2_id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the second VNIC.</td>
</tr>
<tr>
    <td><CopyableCode code="vnic_id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the VNIC.</td>
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
    <td><a href="#get_db_node"><CopyableCode code="get_db_node" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified DB node.</td>
</tr>
<tr>
    <td><a href="#list_db_nodes"><CopyableCode code="list_db_nodes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the DB nodes for the specified VM cluster.</td>
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
    defaultValue="get_db_node"
    values={[
        { label: 'get_db_node', value: 'get_db_node' },
        { label: 'list_db_nodes', value: 'list_db_nodes' }
    ]}
>
<TabItem value="get_db_node">

Returns information about the specified DB node.

```sql
SELECT
additional_details,
backup_ip_id,
backup_vnic_2_id,
backup_vnic_id,
cpu_core_count,
created_at,
db_node_arn,
db_node_id,
db_node_storage_size_in_gbs,
db_server_id,
db_system_id,
fault_domain,
floating_ip_address,
host_ip_id,
hostname,
maintenance_type,
memory_size_in_gbs,
oci_resource_anchor_name,
ocid,
private_ip_address,
software_storage_size_in_gb,
status,
status_reason,
time_maintenance_window_end,
time_maintenance_window_start,
total_cpu_core_count,
vnic_2_id,
vnic_id
FROM aws.odb.db_nodes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_db_nodes">

Returns information about the DB nodes for the specified VM cluster.

```sql
SELECT
additional_details,
backup_ip_id,
backup_vnic_2_id,
backup_vnic_id,
cpu_core_count,
created_at,
db_node_arn,
db_node_id,
db_node_storage_size_in_gbs,
db_server_id,
db_system_id,
fault_domain,
host_ip_id,
hostname,
maintenance_type,
memory_size_in_gbs,
oci_resource_anchor_name,
ocid,
software_storage_size_in_gb,
status,
status_reason,
time_maintenance_window_end,
time_maintenance_window_start,
total_cpu_core_count,
vnic_2_id,
vnic_id
FROM aws.odb.db_nodes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
