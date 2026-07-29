--- 
title: cloud_autonomous_vm_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_autonomous_vm_clusters
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

Creates, updates, deletes, gets or lists a <code>cloud_autonomous_vm_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_autonomous_vm_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.cloud_autonomous_vm_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cloud_autonomous_vm_cluster"
    values={[
        { label: 'get_cloud_autonomous_vm_cluster', value: 'get_cloud_autonomous_vm_cluster' },
        { label: 'list_cloud_autonomous_vm_clusters', value: 'list_cloud_autonomous_vm_clusters' }
    ]}
>
<TabItem value="get_cloud_autonomous_vm_cluster">

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
    <td><CopyableCode code="autonomous_data_storage_percentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of data storage currently in use for Autonomous Databases in the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomous_data_storage_size_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The data storage size allocated for Autonomous Databases in the Autonomous VM cluster, in TB.</td>
</tr>
<tr>
    <td><CopyableCode code="available_autonomous_data_storage_size_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The available data storage space for Autonomous Databases in the Autonomous VM cluster, in TB.</td>
</tr>
<tr>
    <td><CopyableCode code="available_container_databases" /></td>
    <td><code>integer</code></td>
    <td>The number of Autonomous CDBs that you can create with the currently available storage.</td>
</tr>
<tr>
    <td><CopyableCode code="available_cpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPU cores available for allocation to Autonomous Databases.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_autonomous_vm_cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_autonomous_vm_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Autonomous VM cluster. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_exadata_infrastructure_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Cloud Exadata Infrastructure containing this Autonomous VM cluster. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_exadata_infrastructure_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Cloud Exadata Infrastructure containing this Autonomous VM cluster. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_model" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Autonomous VM cluster: ECPU or OCPU. (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_core_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores in the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_core_count_per_node" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores enabled per node in the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_percentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of total CPU cores currently in use in the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Autonomous VM cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_storage_size_in_gbs" /></td>
    <td><code>number (double)</code></td>
    <td>The total data storage allocated to the Autonomous VM cluster, in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="data_storage_size_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The total data storage allocated to the Autonomous VM cluster, in TB.</td>
</tr>
<tr>
    <td><CopyableCode code="db_node_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The local node storage allocated to the Autonomous VM cluster, in gigabytes (GB).</td>
</tr>
<tr>
    <td><CopyableCode code="db_servers" /></td>
    <td><code>array</code></td>
    <td>The list of database servers associated with the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The user-provided description of the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the Autonomous VM cluster. (pattern: &lt;code&gt;&#91;a-zA-Z_&#93;(?!.*--)&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain name for the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="exadata_storage_in_t_bs_lowest_scaled_value" /></td>
    <td><code>number (double)</code></td>
    <td>The minimum value to which you can scale down the Exadata storage, in TB.</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The hostname for the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_roles" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services Identity and Access Management (IAM) service roles associated with the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="is_mtls_enabled_vm_cluster" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="license_model" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to the Autonomous VM cluster. (BRING_YOUR_OWN_LICENSE, LICENSE_INCLUDED)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_window" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="max_acds_lowest_scaled_value" /></td>
    <td><code>integer</code></td>
    <td>The minimum value to which you can scale down the maximum number of Autonomous CDBs.</td>
</tr>
<tr>
    <td><CopyableCode code="memory_per_oracle_compute_unit_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory allocated per Oracle Compute Unit, in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="memory_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The total amount of memory allocated to the Autonomous VM cluster, in gigabytes (GB).</td>
</tr>
<tr>
    <td><CopyableCode code="node_count" /></td>
    <td><code>integer</code></td>
    <td>The number of database server nodes in the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="non_provisionable_autonomous_container_databases" /></td>
    <td><code>integer</code></td>
    <td>The number of Autonomous CDBs that can't be provisioned because of resource constraints.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_resource_anchor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the OCI resource anchor associated with this Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_url" /></td>
    <td><code>string</code></td>
    <td>The URL for accessing the OCI console page for this Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud Identifier (OCID) of the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="odb_network_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ODB network associated with this Autonomous VM cluster. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="odb_network_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the ODB network associated with this Autonomous VM cluster. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="percent_progress" /></td>
    <td><code>number (float)</code></td>
    <td>The progress of the current operation on the Autonomous VM cluster, as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionable_autonomous_container_databases" /></td>
    <td><code>integer</code></td>
    <td>The number of Autonomous CDBs that can be provisioned in the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_autonomous_container_databases" /></td>
    <td><code>integer</code></td>
    <td>The number of Autonomous CDBs currently provisioned in the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_cpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPU cores currently provisioned in the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="reclaimable_cpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPU cores that can be reclaimed from terminated or scaled-down Autonomous Databases.</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_cpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPU cores reserved for system operations and redundancy.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_listener_port_non_tls" /></td>
    <td><code>integer</code></td>
    <td>The SCAN listener port for non-TLS (TCP) protocol. The default is 1521.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_listener_port_tls" /></td>
    <td><code>integer</code></td>
    <td>The SCAN listener port for TLS (TCP) protocol. The default is 2484.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the Exadata infrastructure for the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current state of the Autonomous VM cluster. Possible values include CREATING, AVAILABLE, UPDATING, DELETING, DELETED, FAILED. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current status of the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="time_database_ssl_certificate_expires" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration date and time of the database SSL certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="time_ords_certificate_expires" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration date and time of the Oracle REST Data Services (ORDS) certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="total_container_databases" /></td>
    <td><code>integer</code></td>
    <td>The total number of Autonomous Container Databases that can be created with the allocated local storage.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cloud_autonomous_vm_clusters">

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
    <td><CopyableCode code="autonomous_data_storage_percentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of data storage currently in use for Autonomous Databases in the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomous_data_storage_size_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The total data storage allocated for Autonomous Databases in the Autonomous VM cluster, in TB.</td>
</tr>
<tr>
    <td><CopyableCode code="available_autonomous_data_storage_size_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The available data storage for Autonomous Databases in the Autonomous VM cluster, in TB.</td>
</tr>
<tr>
    <td><CopyableCode code="available_container_databases" /></td>
    <td><code>integer</code></td>
    <td>The number of Autonomous Container Databases that you can create with the currently available storage.</td>
</tr>
<tr>
    <td><CopyableCode code="available_cpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPU cores available for allocation to Autonomous Databases.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_autonomous_vm_cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_autonomous_vm_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Autonomous VM cluster. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_exadata_infrastructure_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Exadata infrastructure containing this Autonomous VM cluster. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_exadata_infrastructure_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Exadata infrastructure containing this Autonomous VM cluster. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_model" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Autonomous VM cluster: ECPU or OCPU. (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_core_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores in the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_core_count_per_node" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores per node in the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_percentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of total CPU cores currently in use in the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Autonomous VM cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_storage_size_in_gbs" /></td>
    <td><code>number (double)</code></td>
    <td>The total data storage allocated to the Autonomous VM cluster, in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="data_storage_size_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The total data storage allocated to the Autonomous VM cluster, in TB.</td>
</tr>
<tr>
    <td><CopyableCode code="db_node_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The local node storage allocated to the Autonomous VM cluster, in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="db_servers" /></td>
    <td><code>array</code></td>
    <td>The list of database servers associated with the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The user-provided description of the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Autonomous VM cluster. (pattern: &lt;code&gt;&#91;a-zA-Z_&#93;(?!.*--)&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain name for the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="exadata_storage_in_t_bs_lowest_scaled_value" /></td>
    <td><code>number (double)</code></td>
    <td>The lowest value to which Exadata storage can be scaled down, in TB.</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The host name for the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_roles" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services Identity and Access Management (IAM) service roles associated with the Autonomous VM cluster in the summary information.</td>
</tr>
<tr>
    <td><CopyableCode code="is_mtls_enabled_vm_cluster" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="license_model" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to the Autonomous VM cluster. (BRING_YOUR_OWN_LICENSE, LICENSE_INCLUDED)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_window" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="max_acds_lowest_scaled_value" /></td>
    <td><code>integer</code></td>
    <td>The lowest value to which you can scale down the maximum number of Autonomous CDBs.</td>
</tr>
<tr>
    <td><CopyableCode code="memory_per_oracle_compute_unit_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory allocated per Oracle Compute Unit (OCU), in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="memory_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The total amount of memory allocated to the Autonomous VM cluster, in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="node_count" /></td>
    <td><code>integer</code></td>
    <td>The number of database server nodes in the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="non_provisionable_autonomous_container_databases" /></td>
    <td><code>integer</code></td>
    <td>The number of Autonomous CDBs that can't be provisioned because of resource constraints.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_resource_anchor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the OCI resource anchor associated with this Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_url" /></td>
    <td><code>string</code></td>
    <td>The URL for accessing the OCI console page for this Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud Identifier (OCID) of the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="odb_network_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ODB network associated with this Autonomous VM cluster. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="odb_network_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the ODB network associated with this Autonomous VM cluster. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="percent_progress" /></td>
    <td><code>number (float)</code></td>
    <td>The progress of the current operation on the Autonomous VM cluster, as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionable_autonomous_container_databases" /></td>
    <td><code>integer</code></td>
    <td>The number of Autonomous CDBs that you can provision in the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_autonomous_container_databases" /></td>
    <td><code>integer</code></td>
    <td>The number of Autonomous Container Databases currently provisioned in the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_cpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPUs currently provisioned in the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="reclaimable_cpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPUs that can be reclaimed from terminated or scaled-down Autonomous Databases.</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_cpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPUs reserved for system operations and redundancy.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_listener_port_non_tls" /></td>
    <td><code>integer</code></td>
    <td>The SCAN listener port for non-TLS (TCP) protocol.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_listener_port_tls" /></td>
    <td><code>integer</code></td>
    <td>The SCAN listener port for TLS (TCP) protocol.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the Exadata infrastructure for the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Autonomous VM cluster. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current status of the Autonomous VM cluster, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="time_database_ssl_certificate_expires" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration date and time of the database SSL certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="time_ords_certificate_expires" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration date and time of the Oracle REST Data Services (ORDS) certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="total_container_databases" /></td>
    <td><code>integer</code></td>
    <td>The total number of Autonomous Container Databases that can be created in the Autonomous VM cluster.</td>
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
    <td><a href="#get_cloud_autonomous_vm_cluster"><CopyableCode code="get_cloud_autonomous_vm_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specific Autonomous VM cluster.</td>
</tr>
<tr>
    <td><a href="#list_cloud_autonomous_vm_clusters"><CopyableCode code="list_cloud_autonomous_vm_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Autonomous VM clusters in a specified Cloud Exadata infrastructure.</td>
</tr>
<tr>
    <td><a href="#create_cloud_autonomous_vm_cluster"><CopyableCode code="create_cloud_autonomous_vm_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloudExadataInfrastructureId"><code>cloudExadataInfrastructureId</code></a>, <a href="#parameter-odbNetworkId"><code>odbNetworkId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-autonomousDataStorageSizeInTBs"><code>autonomousDataStorageSizeInTBs</code></a>, <a href="#parameter-cpuCoreCountPerNode"><code>cpuCoreCountPerNode</code></a>, <a href="#parameter-memoryPerOracleComputeUnitInGBs"><code>memoryPerOracleComputeUnitInGBs</code></a>, <a href="#parameter-totalContainerDatabases"><code>totalContainerDatabases</code></a></td>
    <td></td>
    <td>Creates a new Autonomous VM cluster in the specified Exadata infrastructure.</td>
</tr>
<tr>
    <td><a href="#delete_cloud_autonomous_vm_cluster"><CopyableCode code="delete_cloud_autonomous_vm_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Autonomous VM cluster.</td>
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
    defaultValue="get_cloud_autonomous_vm_cluster"
    values={[
        { label: 'get_cloud_autonomous_vm_cluster', value: 'get_cloud_autonomous_vm_cluster' },
        { label: 'list_cloud_autonomous_vm_clusters', value: 'list_cloud_autonomous_vm_clusters' }
    ]}
>
<TabItem value="get_cloud_autonomous_vm_cluster">

Gets information about a specific Autonomous VM cluster.

```sql
SELECT
autonomous_data_storage_percentage,
autonomous_data_storage_size_in_tbs,
available_autonomous_data_storage_size_in_tbs,
available_container_databases,
available_cpus,
cloud_autonomous_vm_cluster_arn,
cloud_autonomous_vm_cluster_id,
cloud_exadata_infrastructure_arn,
cloud_exadata_infrastructure_id,
compute_model,
cpu_core_count,
cpu_core_count_per_node,
cpu_percentage,
created_at,
data_storage_size_in_gbs,
data_storage_size_in_tbs,
db_node_storage_size_in_gbs,
db_servers,
description,
display_name,
domain,
exadata_storage_in_t_bs_lowest_scaled_value,
hostname,
iam_roles,
is_mtls_enabled_vm_cluster,
license_model,
maintenance_window,
max_acds_lowest_scaled_value,
memory_per_oracle_compute_unit_in_gbs,
memory_size_in_gbs,
node_count,
non_provisionable_autonomous_container_databases,
oci_resource_anchor_name,
oci_url,
ocid,
odb_network_arn,
odb_network_id,
percent_progress,
provisionable_autonomous_container_databases,
provisioned_autonomous_container_databases,
provisioned_cpus,
reclaimable_cpus,
reserved_cpus,
scan_listener_port_non_tls,
scan_listener_port_tls,
shape,
status,
status_reason,
time_database_ssl_certificate_expires,
time_ords_certificate_expires,
time_zone,
total_container_databases
FROM aws.odb.cloud_autonomous_vm_clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cloud_autonomous_vm_clusters">

Lists all Autonomous VM clusters in a specified Cloud Exadata infrastructure.

```sql
SELECT
autonomous_data_storage_percentage,
autonomous_data_storage_size_in_tbs,
available_autonomous_data_storage_size_in_tbs,
available_container_databases,
available_cpus,
cloud_autonomous_vm_cluster_arn,
cloud_autonomous_vm_cluster_id,
cloud_exadata_infrastructure_arn,
cloud_exadata_infrastructure_id,
compute_model,
cpu_core_count,
cpu_core_count_per_node,
cpu_percentage,
created_at,
data_storage_size_in_gbs,
data_storage_size_in_tbs,
db_node_storage_size_in_gbs,
db_servers,
description,
display_name,
domain,
exadata_storage_in_t_bs_lowest_scaled_value,
hostname,
iam_roles,
is_mtls_enabled_vm_cluster,
license_model,
maintenance_window,
max_acds_lowest_scaled_value,
memory_per_oracle_compute_unit_in_gbs,
memory_size_in_gbs,
node_count,
non_provisionable_autonomous_container_databases,
oci_resource_anchor_name,
oci_url,
ocid,
odb_network_arn,
odb_network_id,
percent_progress,
provisionable_autonomous_container_databases,
provisioned_autonomous_container_databases,
provisioned_cpus,
reclaimable_cpus,
reserved_cpus,
scan_listener_port_non_tls,
scan_listener_port_tls,
shape,
status,
status_reason,
time_database_ssl_certificate_expires,
time_ords_certificate_expires,
time_zone,
total_container_databases
FROM aws.odb.cloud_autonomous_vm_clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cloud_autonomous_vm_cluster"
    values={[
        { label: 'create_cloud_autonomous_vm_cluster', value: 'create_cloud_autonomous_vm_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cloud_autonomous_vm_cluster">

Creates a new Autonomous VM cluster in the specified Exadata infrastructure.

```sql
INSERT INTO aws.odb.cloud_autonomous_vm_clusters (
cloudExadataInfrastructureId,
odbNetworkId,
displayName,
clientToken,
autonomousDataStorageSizeInTBs,
cpuCoreCountPerNode,
dbServers,
description,
isMtlsEnabledVmCluster,
licenseModel,
maintenanceWindow,
memoryPerOracleComputeUnitInGBs,
scanListenerPortNonTls,
scanListenerPortTls,
tags,
timeZone,
totalContainerDatabases,
region
)
SELECT 
'{{ cloudExadataInfrastructureId }}' /* required */,
'{{ odbNetworkId }}' /* required */,
'{{ displayName }}' /* required */,
'{{ clientToken }}',
{{ autonomousDataStorageSizeInTBs }} /* required */,
{{ cpuCoreCountPerNode }} /* required */,
'{{ dbServers }}',
'{{ description }}',
{{ isMtlsEnabledVmCluster }},
'{{ licenseModel }}',
'{{ maintenanceWindow }}',
{{ memoryPerOracleComputeUnitInGBs }} /* required */,
{{ scanListenerPortNonTls }},
{{ scanListenerPortTls }},
'{{ tags }}',
'{{ timeZone }}',
{{ totalContainerDatabases }} /* required */,
'{{ region }}'
RETURNING
cloud_autonomous_vm_cluster_id,
display_name,
status,
status_reason
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cloud_autonomous_vm_clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cloud_autonomous_vm_clusters resource.
    - name: cloudExadataInfrastructureId
      value: "{{ cloudExadataInfrastructureId }}"
      description: |
        The unique identifier of the Exadata infrastructure where the VM cluster will be created.
    - name: odbNetworkId
      value: "{{ odbNetworkId }}"
      description: |
        The unique identifier of the ODB network to be used for the VM cluster.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The display name for the Autonomous VM cluster. The name does not need to be unique.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A client-provided token to ensure idempotency of the request.
    - name: autonomousDataStorageSizeInTBs
      value: {{ autonomousDataStorageSizeInTBs }}
      description: |
        The data disk group size to be allocated for Autonomous Databases, in terabytes (TB).
    - name: cpuCoreCountPerNode
      value: {{ cpuCoreCountPerNode }}
      description: |
        The number of CPU cores to be enabled per VM cluster node.
    - name: dbServers
      value:
        - "{{ dbServers }}"
      description: |
        The list of database servers to be used for the Autonomous VM cluster.
    - name: description
      value: "{{ description }}"
      description: |
        A user-provided description of the Autonomous VM cluster.
    - name: isMtlsEnabledVmCluster
      value: {{ isMtlsEnabledVmCluster }}
      description: |
        Specifies whether to enable mutual TLS (mTLS) authentication for the Autonomous VM cluster.
    - name: licenseModel
      value: "{{ licenseModel }}"
      description: |
        The Oracle license model to apply to the Autonomous VM cluster.
      valid_values: ['BRING_YOUR_OWN_LICENSE', 'LICENSE_INCLUDED']
    - name: maintenanceWindow
      description: |
        The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.
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
    - name: memoryPerOracleComputeUnitInGBs
      value: {{ memoryPerOracleComputeUnitInGBs }}
      description: |
        The amount of memory to be allocated per OCPU, in GB.
    - name: scanListenerPortNonTls
      value: {{ scanListenerPortNonTls }}
      description: |
        The SCAN listener port for non-TLS (TCP) protocol.
    - name: scanListenerPortTls
      value: {{ scanListenerPortTls }}
      description: |
        The SCAN listener port for TLS (TCP) protocol.
    - name: tags
      value: "{{ tags }}"
      description: |
        Free-form tags for this resource. Each tag is a key-value pair with no predefined name, type, or namespace.
    - name: timeZone
      value: "{{ timeZone }}"
      description: |
        The time zone to use for the Autonomous VM cluster.
    - name: totalContainerDatabases
      value: {{ totalContainerDatabases }}
      description: |
        The total number of Autonomous CDBs that you can create in the Autonomous VM cluster.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cloud_autonomous_vm_cluster"
    values={[
        { label: 'delete_cloud_autonomous_vm_cluster', value: 'delete_cloud_autonomous_vm_cluster' }
    ]}
>
<TabItem value="delete_cloud_autonomous_vm_cluster">

Deletes an Autonomous VM cluster.

```sql
DELETE FROM aws.odb.cloud_autonomous_vm_clusters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
