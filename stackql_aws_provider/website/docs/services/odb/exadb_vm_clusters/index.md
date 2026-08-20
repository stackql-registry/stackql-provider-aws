--- 
title: exadb_vm_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - exadb_vm_clusters
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

Creates, updates, deletes, gets or lists an <code>exadb_vm_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exadb_vm_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.exadb_vm_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_exadb_vm_cluster"
    values={[
        { label: 'get_exadb_vm_cluster', value: 'get_exadb_vm_cluster' },
        { label: 'list_exadb_vm_clusters', value: 'list_exadb_vm_clusters' }
    ]}
>
<TabItem value="get_exadb_vm_cluster">

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
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Grid Infrastructure (GI) cluster. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Exascale VM cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_collection_options" /></td>
    <td><code>object</code></td>
    <td>The set of diagnostic collection options enabled for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Exascale VM cluster. (pattern: &lt;code&gt;&#91;a-zA-Z_&#93;(?!.*--)&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain of the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_ecpu_count" /></td>
    <td><code>integer</code></td>
    <td>The number of elastic compute processing units (ECPUs) enabled on the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="exadb_vm_cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Exascale VM cluster. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="exadb_vm_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Exascale VM cluster. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="exascale_db_storage_vault_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Exascale storage vault associated with this Exascale VM cluster. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="exascale_db_storage_vault_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Exascale storage vault associated with this Exascale VM cluster. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="gi_version" /></td>
    <td><code>string</code></td>
    <td>The software version of the Oracle Grid Infrastructure (GI) for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="grid_image_id" /></td>
    <td><code>string</code></td>
    <td>The Grid Infrastructure software image ID for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="grid_image_type" /></td>
    <td><code>string</code></td>
    <td>The type of Grid Infrastructure image for the Exascale VM cluster. (RELEASE_UPDATE, CUSTOM_IMAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The host name for the Exascale VM cluster. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;*&#91;a-zA-Z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="iam_roles" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services Identity and Access Management (IAM) service roles associated with the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="iorm_config_cache" /></td>
    <td><code>object</code></td>
    <td>The I/O Resource Management (IORM) configuration cache details for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_history_entry_id" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud ID (OCID) of the last maintenance update history entry.</td>
</tr>
<tr>
    <td><CopyableCode code="license_model" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model applied to the Exascale VM cluster. (BRING_YOUR_OWN_LICENSE, LICENSE_INCLUDED)</td>
</tr>
<tr>
    <td><CopyableCode code="listener_port" /></td>
    <td><code>integer</code></td>
    <td>The port number configured for the listener on the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="memory_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory, in gigabytes (GB), that's allocated for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="node_count" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes in the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_resource_anchor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the OCI resource anchor for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_url" /></td>
    <td><code>string</code></td>
    <td>The HTTPS link to the Exascale VM cluster in Oracle Cloud Infrastructure (OCI).</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="odb_network_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ODB network associated with this Exascale VM cluster. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="odb_network_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the ODB network for the Exascale VM cluster. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="percent_progress" /></td>
    <td><code>number (float)</code></td>
    <td>The amount of progress made on the current operation on the Exascale VM cluster, expressed as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_dns_name" /></td>
    <td><code>string</code></td>
    <td>The fully qualified domain name (FQDN) of the DNS record for the Single Client Access Name (SCAN) IP addresses that are associated with the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_dns_record_id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the DNS record for the SCAN IP addresses that are associated with the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_ip_ids" /></td>
    <td><code>array</code></td>
    <td>The OCID of the SCAN IP addresses that are associated with the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_listener_port_tcp" /></td>
    <td><code>integer</code></td>
    <td>The port number for TCP connections to the single client access name (SCAN) listener for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_listener_port_tcp_ssl" /></td>
    <td><code>integer</code></td>
    <td>The port number for TCP connections with SSL to the single client access name (SCAN) listener for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The hardware model name of the Exadata infrastructure that's running the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="shape_attribute" /></td>
    <td><code>string</code></td>
    <td>The shape attribute for the Exascale VM cluster. (SMART_STORAGE, BLOCK_STORAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_file_system_storage" /></td>
    <td><code>object</code></td>
    <td>The snapshot file system storage details for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_public_keys" /></td>
    <td><code>array</code></td>
    <td>The public key portion of one or more key pairs used for SSH access to the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Exascale VM cluster. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="system_version" /></td>
    <td><code>string</code></td>
    <td>The operating system version of the image chosen for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="total_ecpu_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of ECPUs for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="total_file_system_storage" /></td>
    <td><code>object</code></td>
    <td>The total file system storage details for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="vip_ids" /></td>
    <td><code>array</code></td>
    <td>The virtual IP (VIP) addresses associated with the Exascale VM cluster. One VIP address is assigned per node to support failover. If a node fails, its VIP is reassigned to another active node in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="vm_file_system_storage" /></td>
    <td><code>object</code></td>
    <td>The VM file system storage details for the Exascale VM cluster.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_exadb_vm_clusters">

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
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Grid Infrastructure (GI) cluster. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Exascale VM cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_collection_options" /></td>
    <td><code>object</code></td>
    <td>Information about the data collection options enabled for a VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Exascale VM cluster. (pattern: &lt;code&gt;&#91;a-zA-Z_&#93;(?!.*--)&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain of the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_ecpu_count" /></td>
    <td><code>integer</code></td>
    <td>The number of elastic compute processing units (ECPUs) enabled on the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="exadb_vm_cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Exascale VM cluster. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="exadb_vm_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Exascale VM cluster. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="exascale_db_storage_vault_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Exascale storage vault associated with this Exascale VM cluster. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="exascale_db_storage_vault_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Exascale storage vault associated with this Exascale VM cluster. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="gi_version" /></td>
    <td><code>string</code></td>
    <td>The software version of the Oracle Grid Infrastructure (GI) for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="grid_image_id" /></td>
    <td><code>string</code></td>
    <td>The Grid Infrastructure software image ID for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="grid_image_type" /></td>
    <td><code>string</code></td>
    <td>The type of Grid Infrastructure image for the Exascale VM cluster. (RELEASE_UPDATE, CUSTOM_IMAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The host name for the Exascale VM cluster. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;*&#91;a-zA-Z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="iam_roles" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services Identity and Access Management (IAM) service roles associated with the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="iorm_config_cache" /></td>
    <td><code>object</code></td>
    <td>The IORM settings of the Exadata DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_history_entry_id" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud ID (OCID) of the last maintenance update history entry.</td>
</tr>
<tr>
    <td><CopyableCode code="license_model" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model applied to the Exascale VM cluster. (BRING_YOUR_OWN_LICENSE, LICENSE_INCLUDED)</td>
</tr>
<tr>
    <td><CopyableCode code="listener_port" /></td>
    <td><code>integer</code></td>
    <td>The port number configured for the listener on the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="memory_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory, in gigabytes (GB), that's allocated for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="node_count" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes in the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_resource_anchor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the OCI resource anchor for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_url" /></td>
    <td><code>string</code></td>
    <td>The HTTPS link to the Exascale VM cluster in Oracle Cloud Infrastructure (OCI).</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="odb_network_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ODB network associated with this Exascale VM cluster. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="odb_network_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the ODB network for the Exascale VM cluster. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="percent_progress" /></td>
    <td><code>number (float)</code></td>
    <td>The amount of progress made on the current operation on the Exascale VM cluster, expressed as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_dns_name" /></td>
    <td><code>string</code></td>
    <td>The fully qualified domain name (FQDN) of the DNS record for the Single Client Access Name (SCAN) IP addresses that are associated with the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_dns_record_id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the DNS record for the SCAN IP addresses that are associated with the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_ip_ids" /></td>
    <td><code>array</code></td>
    <td>The OCID of the SCAN IP addresses that are associated with the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_listener_port_tcp" /></td>
    <td><code>integer</code></td>
    <td>The port number for TCP connections to the single client access name (SCAN) listener for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_listener_port_tcp_ssl" /></td>
    <td><code>integer</code></td>
    <td>The port number for TCP connections with SSL to the single client access name (SCAN) listener for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The hardware model name of the Exadata infrastructure that's running the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="shape_attribute" /></td>
    <td><code>string</code></td>
    <td>The shape attribute for the Exascale VM cluster. (SMART_STORAGE, BLOCK_STORAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_file_system_storage" /></td>
    <td><code>object</code></td>
    <td>The snapshot file system storage details for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_public_keys" /></td>
    <td><code>array</code></td>
    <td>The public key portion of one or more key pairs used for SSH access to the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Exascale VM cluster. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="system_version" /></td>
    <td><code>string</code></td>
    <td>The operating system version of the image chosen for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="total_ecpu_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of ECPUs for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="total_file_system_storage" /></td>
    <td><code>object</code></td>
    <td>The total file system storage details for the Exascale VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="vip_ids" /></td>
    <td><code>array</code></td>
    <td>The virtual IP (VIP) addresses associated with the Exascale VM cluster. One VIP address is assigned per node to support failover. If a node fails, its VIP is reassigned to another active node in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="vm_file_system_storage" /></td>
    <td><code>object</code></td>
    <td>The VM file system storage details for the Exascale VM cluster.</td>
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
    <td><a href="#get_exadb_vm_cluster"><CopyableCode code="get_exadb_vm_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified Exascale VM cluster.</td>
</tr>
<tr>
    <td><a href="#list_exadb_vm_clusters"><CopyableCode code="list_exadb_vm_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the Exascale VM clusters owned by your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_exadb_vm_cluster"><CopyableCode code="create_exadb_vm_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-enabledEcpuCount"><code>enabledEcpuCount</code></a>, <a href="#parameter-exascaleDbStorageVaultId"><code>exascaleDbStorageVaultId</code></a>, <a href="#parameter-gridImageId"><code>gridImageId</code></a>, <a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-nodeCount"><code>nodeCount</code></a>, <a href="#parameter-odbNetworkId"><code>odbNetworkId</code></a>, <a href="#parameter-shape"><code>shape</code></a>, <a href="#parameter-sshPublicKeys"><code>sshPublicKeys</code></a>, <a href="#parameter-totalEcpuCount"><code>totalEcpuCount</code></a>, <a href="#parameter-vmFileSystemStorageTotalSizeInGBs"><code>vmFileSystemStorageTotalSizeInGBs</code></a></td>
    <td></td>
    <td>Creates an Exascale VM cluster.</td>
</tr>
<tr>
    <td><a href="#associate_virtual_machines_to_exadb_vm_cluster"><CopyableCode code="associate_virtual_machines_to_exadb_vm_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-exadbVmClusterId"><code>exadbVmClusterId</code></a>, <a href="#parameter-desiredNodeCount"><code>desiredNodeCount</code></a></td>
    <td></td>
    <td>Adds virtual machines to the specified Exascale VM cluster.</td>
</tr>
<tr>
    <td><a href="#disassociate_virtual_machines_from_exadb_vm_cluster"><CopyableCode code="disassociate_virtual_machines_from_exadb_vm_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-exadbVmClusterId"><code>exadbVmClusterId</code></a>, <a href="#parameter-dbNodeIds"><code>dbNodeIds</code></a></td>
    <td></td>
    <td>Removes virtual machines from the specified Exascale VM cluster.</td>
</tr>
<tr>
    <td><a href="#update_exadb_vm_cluster"><CopyableCode code="update_exadb_vm_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-exadbVmClusterId"><code>exadbVmClusterId</code></a></td>
    <td></td>
    <td>Updates the specified Exascale VM cluster.</td>
</tr>
<tr>
    <td><a href="#delete_exadb_vm_cluster"><CopyableCode code="delete_exadb_vm_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Exascale VM cluster.</td>
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
    defaultValue="get_exadb_vm_cluster"
    values={[
        { label: 'get_exadb_vm_cluster', value: 'get_exadb_vm_cluster' },
        { label: 'list_exadb_vm_clusters', value: 'list_exadb_vm_clusters' }
    ]}
>
<TabItem value="get_exadb_vm_cluster">

Returns information about the specified Exascale VM cluster.

```sql
SELECT
cluster_name,
created_at,
data_collection_options,
display_name,
domain,
enabled_ecpu_count,
exadb_vm_cluster_arn,
exadb_vm_cluster_id,
exascale_db_storage_vault_arn,
exascale_db_storage_vault_id,
gi_version,
grid_image_id,
grid_image_type,
hostname,
iam_roles,
iorm_config_cache,
last_update_history_entry_id,
license_model,
listener_port,
memory_size_in_gbs,
node_count,
oci_resource_anchor_name,
oci_url,
ocid,
odb_network_arn,
odb_network_id,
percent_progress,
scan_dns_name,
scan_dns_record_id,
scan_ip_ids,
scan_listener_port_tcp,
scan_listener_port_tcp_ssl,
shape,
shape_attribute,
snapshot_file_system_storage,
ssh_public_keys,
status,
status_reason,
system_version,
time_zone,
total_ecpu_count,
total_file_system_storage,
vip_ids,
vm_file_system_storage
FROM aws.odb.exadb_vm_clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_exadb_vm_clusters">

Returns information about the Exascale VM clusters owned by your Amazon Web Services account.

```sql
SELECT
cluster_name,
created_at,
data_collection_options,
display_name,
domain,
enabled_ecpu_count,
exadb_vm_cluster_arn,
exadb_vm_cluster_id,
exascale_db_storage_vault_arn,
exascale_db_storage_vault_id,
gi_version,
grid_image_id,
grid_image_type,
hostname,
iam_roles,
iorm_config_cache,
last_update_history_entry_id,
license_model,
listener_port,
memory_size_in_gbs,
node_count,
oci_resource_anchor_name,
oci_url,
ocid,
odb_network_arn,
odb_network_id,
percent_progress,
scan_dns_name,
scan_dns_record_id,
scan_ip_ids,
scan_listener_port_tcp,
scan_listener_port_tcp_ssl,
shape,
shape_attribute,
snapshot_file_system_storage,
ssh_public_keys,
status,
status_reason,
system_version,
time_zone,
total_ecpu_count,
total_file_system_storage,
vip_ids,
vm_file_system_storage
FROM aws.odb.exadb_vm_clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_exadb_vm_cluster"
    values={[
        { label: 'create_exadb_vm_cluster', value: 'create_exadb_vm_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_exadb_vm_cluster">

Creates an Exascale VM cluster.

```sql
INSERT INTO aws.odb.exadb_vm_clusters (
displayName,
enabledEcpuCount,
exascaleDbStorageVaultId,
gridImageId,
hostname,
nodeCount,
odbNetworkId,
shape,
sshPublicKeys,
totalEcpuCount,
vmFileSystemStorageTotalSizeInGBs,
clusterName,
dataCollectionOptions,
licenseModel,
scanListenerPortTcp,
scanListenerPortTcpSsl,
shapeAttribute,
systemVersion,
tags,
timeZone,
clientToken,
region
)
SELECT 
'{{ displayName }}' /* required */,
{{ enabledEcpuCount }} /* required */,
'{{ exascaleDbStorageVaultId }}' /* required */,
'{{ gridImageId }}' /* required */,
'{{ hostname }}' /* required */,
{{ nodeCount }} /* required */,
'{{ odbNetworkId }}' /* required */,
'{{ shape }}' /* required */,
'{{ sshPublicKeys }}' /* required */,
{{ totalEcpuCount }} /* required */,
{{ vmFileSystemStorageTotalSizeInGBs }} /* required */,
'{{ clusterName }}',
'{{ dataCollectionOptions }}',
'{{ licenseModel }}',
{{ scanListenerPortTcp }},
{{ scanListenerPortTcpSsl }},
'{{ shapeAttribute }}',
'{{ systemVersion }}',
'{{ tags }}',
'{{ timeZone }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
display_name,
exadb_vm_cluster_id,
status,
status_reason
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: exadb_vm_clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the exadb_vm_clusters resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name for the Exascale VM cluster.
    - name: enabledEcpuCount
      value: {{ enabledEcpuCount }}
      description: |
        The number of ECPUs to enable for the Exascale VM cluster.
    - name: exascaleDbStorageVaultId
      value: "{{ exascaleDbStorageVaultId }}"
      description: |
        The unique identifier of the Exascale storage vault for this Exascale VM cluster.
    - name: gridImageId
      value: "{{ gridImageId }}"
      description: |
        The Grid Infrastructure software image ID for the Exascale VM cluster.
    - name: hostname
      value: "{{ hostname }}"
      description: |
        The host name for the Exascale VM cluster.
    - name: nodeCount
      value: {{ nodeCount }}
      description: |
        The number of nodes in the Exascale VM cluster.
    - name: odbNetworkId
      value: "{{ odbNetworkId }}"
      description: |
        The unique identifier of the ODB network for the Exascale VM cluster.
    - name: shape
      value: "{{ shape }}"
      description: |
        The shape of the Exascale VM cluster.
    - name: sshPublicKeys
      value:
        - "{{ sshPublicKeys }}"
      description: |
        The public key portion of one or more key pairs used for SSH access to the Exascale VM cluster.
    - name: totalEcpuCount
      value: {{ totalEcpuCount }}
      description: |
        The total number of ECPUs for the Exascale VM cluster.
    - name: vmFileSystemStorageTotalSizeInGBs
      value: {{ vmFileSystemStorageTotalSizeInGBs }}
      description: |
        The total amount of file system storage, in gigabytes (GB), for the Exascale VM cluster.
    - name: clusterName
      value: "{{ clusterName }}"
      description: |
        A name for the Grid Infrastructure cluster. The name isn't case sensitive.
    - name: dataCollectionOptions
      description: |
        The set of preferences for the various diagnostic collection options for the Exascale VM cluster.
      value:
        isDiagnosticsEventsEnabled: {{ isDiagnosticsEventsEnabled }}
        isHealthMonitoringEnabled: {{ isHealthMonitoringEnabled }}
        isIncidentLogsEnabled: {{ isIncidentLogsEnabled }}
    - name: licenseModel
      value: "{{ licenseModel }}"
      description: |
        The Oracle license model to apply to the Exascale VM cluster.
      valid_values: ['BRING_YOUR_OWN_LICENSE', 'LICENSE_INCLUDED']
    - name: scanListenerPortTcp
      value: {{ scanListenerPortTcp }}
      description: |
        The port number for TCP connections to the single client access name (SCAN) listener.
    - name: scanListenerPortTcpSsl
      value: {{ scanListenerPortTcpSsl }}
      description: |
        The port number for TCP connections with SSL to the single client access name (SCAN) listener.
    - name: shapeAttribute
      value: "{{ shapeAttribute }}"
      description: |
        The shape attribute for the Exascale VM cluster.
      valid_values: ['SMART_STORAGE', 'BLOCK_STORAGE']
    - name: systemVersion
      value: "{{ systemVersion }}"
      description: |
        The version of the operating system of the image for the Exascale VM cluster.
    - name: tags
      value: "{{ tags }}"
      description: |
        The list of resource tags to apply to the Exascale VM cluster.
    - name: timeZone
      value: "{{ timeZone }}"
      description: |
        The time zone for the Exascale VM cluster.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, the Amazon Web Services SDK automatically generates one and uses it for the request to ensure idempotency. The client token is valid for up to 24 hours after it's first used.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_virtual_machines_to_exadb_vm_cluster"
    values={[
        { label: 'associate_virtual_machines_to_exadb_vm_cluster', value: 'associate_virtual_machines_to_exadb_vm_cluster' },
        { label: 'disassociate_virtual_machines_from_exadb_vm_cluster', value: 'disassociate_virtual_machines_from_exadb_vm_cluster' },
        { label: 'update_exadb_vm_cluster', value: 'update_exadb_vm_cluster' }
    ]}
>
<TabItem value="associate_virtual_machines_to_exadb_vm_cluster">

Adds virtual machines to the specified Exascale VM cluster.

```sql
UPDATE aws.odb.exadb_vm_clusters
SET 
exadbVmClusterId = '{{ exadbVmClusterId }}',
desiredNodeCount = {{ desiredNodeCount }}
WHERE 
region = '{{ region }}' --required
AND exadbVmClusterId = '{{ exadbVmClusterId }}' --required
AND desiredNodeCount = '{{ desiredNodeCount }}' --required
RETURNING
display_name,
exadb_vm_cluster_id,
status,
status_reason;
```
</TabItem>
<TabItem value="disassociate_virtual_machines_from_exadb_vm_cluster">

Removes virtual machines from the specified Exascale VM cluster.

```sql
UPDATE aws.odb.exadb_vm_clusters
SET 
exadbVmClusterId = '{{ exadbVmClusterId }}',
dbNodeIds = '{{ dbNodeIds }}'
WHERE 
region = '{{ region }}' --required
AND exadbVmClusterId = '{{ exadbVmClusterId }}' --required
AND dbNodeIds = '{{ dbNodeIds }}' --required
RETURNING
display_name,
exadb_vm_cluster_id,
status,
status_reason;
```
</TabItem>
<TabItem value="update_exadb_vm_cluster">

Updates the specified Exascale VM cluster.

```sql
UPDATE aws.odb.exadb_vm_clusters
SET 
exadbVmClusterId = '{{ exadbVmClusterId }}',
dataCollectionOptions = '{{ dataCollectionOptions }}',
displayName = '{{ displayName }}',
enabledEcpuCount = {{ enabledEcpuCount }},
gridImageId = '{{ gridImageId }}',
licenseModel = '{{ licenseModel }}',
sshPublicKeys = '{{ sshPublicKeys }}',
systemVersion = '{{ systemVersion }}',
totalEcpuCount = {{ totalEcpuCount }},
updateAction = '{{ updateAction }}',
vmFileSystemStorageTotalSizeInGBs = {{ vmFileSystemStorageTotalSizeInGBs }}
WHERE 
region = '{{ region }}' --required
AND exadbVmClusterId = '{{ exadbVmClusterId }}' --required
RETURNING
display_name,
exadb_vm_cluster_id,
status,
status_reason;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_exadb_vm_cluster"
    values={[
        { label: 'delete_exadb_vm_cluster', value: 'delete_exadb_vm_cluster' }
    ]}
>
<TabItem value="delete_exadb_vm_cluster">

Deletes the specified Exascale VM cluster.

```sql
DELETE FROM aws.odb.exadb_vm_clusters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
