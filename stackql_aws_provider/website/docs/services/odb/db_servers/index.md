--- 
title: db_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - db_servers
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

Creates, updates, deletes, gets or lists a <code>db_servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_servers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.db_servers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_db_server"
    values={[
        { label: 'get_db_server', value: 'get_db_server' },
        { label: 'list_db_servers', value: 'list_db_servers' }
    ]}
>
<TabItem value="get_db_server">

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
    <td><CopyableCode code="autonomous_virtual_machine_ids" /></td>
    <td><code>array</code></td>
    <td>The list of unique identifiers for the Autonomous VMs associated with this database server.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomous_vm_cluster_ids" /></td>
    <td><code>array</code></td>
    <td>The list of identifiers for the Autonomous VM clusters associated with this database server.</td>
</tr>
<tr>
    <td><CopyableCode code="compute_model" /></td>
    <td><code>string</code></td>
    <td>The compute model of the database server (ECPU or OCPU). (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_core_count" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores enabled on the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the database server was created.</td>
</tr>
<tr>
    <td><CopyableCode code="db_node_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The allocated local node storage in GBs on the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="db_server_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the database server. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_server_patching_details" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the quarterly maintenance window. Patching and system updates take place during the maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="exadata_infrastructure_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Exadata infrastructure the database server belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="max_cpu_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores available.</td>
</tr>
<tr>
    <td><CopyableCode code="max_db_node_storage_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The total local node storage available in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="max_memory_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The total memory available in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="memory_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The allocated memory in GBs on the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_resource_anchor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the OCI resource anchor for the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The OCID of the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the database server. The shape determines the amount of CPU, storage, and memory resources available.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the database server. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current status of the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="vm_cluster_ids" /></td>
    <td><code>array</code></td>
    <td>The OCID of the VM clusters that are associated with the database server.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_db_servers">

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
    <td><CopyableCode code="autonomous_virtual_machine_ids" /></td>
    <td><code>array</code></td>
    <td>A list of unique identifiers for the Autonomous VMs.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomous_vm_cluster_ids" /></td>
    <td><code>array</code></td>
    <td>A list of identifiers for the Autonomous VM clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="compute_model" /></td>
    <td><code>string</code></td>
    <td>The OCI model compute model used when you create or clone an instance: ECPU or OCPU. An ECPU is an abstracted measure of compute resources. ECPUs are based on the number of cores elastically allocated from a pool of compute and storage servers. An OCPU is a legacy physical measure of compute resources. OCPUs are based on the physical core of a processor with hyper-threading enabled. (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_core_count" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores enabled on the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the database server was created.</td>
</tr>
<tr>
    <td><CopyableCode code="db_node_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of local node storage, in gigabytes (GB), that's allocated on the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="db_server_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the database server. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_server_patching_details" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the quarterly maintenance window. Patching and system updates take place during the maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of the database server. The name doesn't need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="exadata_infrastructure_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Exadata infrastructure that hosts the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="max_cpu_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores available on the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="max_db_node_storage_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The total amount of local node storage, in gigabytes (GB), that's available on the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="max_memory_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The total amount of memory, in gigabytes (GB), that's available on the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="memory_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory, in gigabytes (GB), that's allocated on the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_resource_anchor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the OCI resource anchor for the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The OCID of the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The hardware system model of the Exadata infrastructure that the database server is hosted on. The shape determines the amount of CPU, storage, and memory resources available.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the database server. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the database server.</td>
</tr>
<tr>
    <td><CopyableCode code="vm_cluster_ids" /></td>
    <td><code>array</code></td>
    <td>The IDs of the VM clusters that are associated with the database server.</td>
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
    <td><a href="#get_db_server"><CopyableCode code="get_db_server" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified database server.</td>
</tr>
<tr>
    <td><a href="#list_db_servers"><CopyableCode code="list_db_servers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the database servers that belong to the specified Exadata infrastructure.</td>
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
    defaultValue="get_db_server"
    values={[
        { label: 'get_db_server', value: 'get_db_server' },
        { label: 'list_db_servers', value: 'list_db_servers' }
    ]}
>
<TabItem value="get_db_server">

Returns information about the specified database server.

```sql
SELECT
autonomous_virtual_machine_ids,
autonomous_vm_cluster_ids,
compute_model,
cpu_core_count,
created_at,
db_node_storage_size_in_gbs,
db_server_id,
db_server_patching_details,
display_name,
exadata_infrastructure_id,
max_cpu_count,
max_db_node_storage_in_gbs,
max_memory_in_gbs,
memory_size_in_gbs,
oci_resource_anchor_name,
ocid,
shape,
status,
status_reason,
vm_cluster_ids
FROM aws.odb.db_servers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_db_servers">

Returns information about the database servers that belong to the specified Exadata infrastructure.

```sql
SELECT
autonomous_virtual_machine_ids,
autonomous_vm_cluster_ids,
compute_model,
cpu_core_count,
created_at,
db_node_storage_size_in_gbs,
db_server_id,
db_server_patching_details,
display_name,
exadata_infrastructure_id,
max_cpu_count,
max_db_node_storage_in_gbs,
max_memory_in_gbs,
memory_size_in_gbs,
oci_resource_anchor_name,
ocid,
shape,
status,
status_reason,
vm_cluster_ids
FROM aws.odb.db_servers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
