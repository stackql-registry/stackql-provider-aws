--- 
title: autonomous_virtual_machines
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_virtual_machines
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

Creates, updates, deletes, gets or lists an <code>autonomous_virtual_machines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_virtual_machines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.autonomous_virtual_machines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_autonomous_virtual_machines"
    values={[
        { label: 'list_autonomous_virtual_machines', value: 'list_autonomous_virtual_machines' }
    ]}
>
<TabItem value="list_autonomous_virtual_machines">

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
    <td><CopyableCode code="autonomous_virtual_machine_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Autonomous VM. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="client_ip_address" /></td>
    <td><code>string</code></td>
    <td>The IP address used by clients to connect to this Autonomous VM.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_autonomous_vm_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Autonomous VM cluster containing this Autonomous VM.</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_core_count" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores allocated to this Autonomous VM.</td>
</tr>
<tr>
    <td><CopyableCode code="db_node_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of storage allocated to this Autonomous Virtual Machine, in gigabytes (GB).</td>
</tr>
<tr>
    <td><CopyableCode code="db_server_display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the database server hosting this Autonomous VM.</td>
</tr>
<tr>
    <td><CopyableCode code="db_server_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the database server hosting this Autonomous VM. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory allocated to this Autonomous VM, in gigabytes (GB).</td>
</tr>
<tr>
    <td><CopyableCode code="oci_resource_anchor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Oracle Cloud Infrastructure (OCI) resource anchor associated with this Autonomous VM.</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud Identifier (OCID) of the Autonomous VM.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Autonomous VM. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current status of the Autonomous VM, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="vm_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Autonomous VM.</td>
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
    <td><a href="#list_autonomous_virtual_machines"><CopyableCode code="list_autonomous_virtual_machines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Autonomous VMs in an Autonomous VM cluster.</td>
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
    defaultValue="list_autonomous_virtual_machines"
    values={[
        { label: 'list_autonomous_virtual_machines', value: 'list_autonomous_virtual_machines' }
    ]}
>
<TabItem value="list_autonomous_virtual_machines">

Lists all Autonomous VMs in an Autonomous VM cluster.

```sql
SELECT
autonomous_virtual_machine_id,
client_ip_address,
cloud_autonomous_vm_cluster_id,
cpu_core_count,
db_node_storage_size_in_gbs,
db_server_display_name,
db_server_id,
memory_size_in_gbs,
oci_resource_anchor_name,
ocid,
status,
status_reason,
vm_name
FROM aws.odb.autonomous_virtual_machines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
