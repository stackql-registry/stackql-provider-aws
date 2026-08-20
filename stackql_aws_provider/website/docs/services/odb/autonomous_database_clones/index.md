--- 
title: autonomous_database_clones
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_database_clones
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

Creates, updates, deletes, gets or lists an <code>autonomous_database_clones</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_database_clones" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.autonomous_database_clones" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_autonomous_database_clones"
    values={[
        { label: 'list_autonomous_database_clones', value: 'list_autonomous_database_clones' }
    ]}
>
<TabItem value="list_autonomous_database_clones">

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
    <td><CopyableCode code="actual_used_data_storage_size_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The actual amount of data storage currently in use by the Autonomous Database, in TB.</td>
</tr>
<tr>
    <td><CopyableCode code="admin_password_source_summary" /></td>
    <td><code>object</code></td>
    <td>The summary of the admin password source configuration for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="allocated_storage_size_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The amount of storage currently allocated to the Autonomous Database, in TB.</td>
</tr>
<tr>
    <td><CopyableCode code="allowlisted_ips" /></td>
    <td><code>array</code></td>
    <td>The list of IP addresses that are allowed to access the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="apex_details" /></td>
    <td><code>object</code></td>
    <td>The Oracle Application Express (APEX) details for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_refresh_frequency_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The frequency, in seconds, at which the refreshable clone Autonomous Database is automatically refreshed.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_refresh_point_lag_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The time lag, in seconds, between the refreshable clone and its source Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomous_database_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Autonomous Database. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="autonomous_database_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Autonomous Database. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="autonomous_maintenance_schedule_type" /></td>
    <td><code>string</code></td>
    <td>The maintenance schedule type for the Autonomous Database. (EARLY, REGULAR)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone where the Autonomous Database is located.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Availability Zone where the Autonomous Database is located.</td>
</tr>
<tr>
    <td><CopyableCode code="available_upgrade_versions" /></td>
    <td><code>array</code></td>
    <td>The list of Oracle Database software versions to which the Autonomous Database can be upgraded.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_retention_period_in_days" /></td>
    <td><code>integer</code></td>
    <td>The retention period, in days, for automatic backups of the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="byol_compute_count_limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of compute resources that you can allocate to the Autonomous Database under the bring-your-own-license (BYOL) model.</td>
</tr>
<tr>
    <td><CopyableCode code="character_set" /></td>
    <td><code>string</code></td>
    <td>The character set of the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="clone_table_space_list" /></td>
    <td><code>array</code></td>
    <td>The list of tablespace identifiers to clone for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="compute_count" /></td>
    <td><code>number (float)</code></td>
    <td>The compute capacity, in number of Elastic CPUs (ECPUs) or Oracle CPUs (OCPUs), assigned to the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="compute_model" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Autonomous Database, either ECPU or OCPU. (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_string_details" /></td>
    <td><code>object</code></td>
    <td>The connection string details for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_urls" /></td>
    <td><code>object</code></td>
    <td>The connection URLs for accessing tools and services for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_core_count" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores allocated to the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Autonomous Database was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_contacts" /></td>
    <td><code>array</code></td>
    <td>The list of customer contacts that receive operational notifications from Oracle for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="data_safe_status" /></td>
    <td><code>string</code></td>
    <td>The status of the Oracle Data Safe registration for the Autonomous Database. (REGISTERING, REGISTERED, DEREGISTERING, NOT_REGISTERED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="data_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The size, in gigabytes (GB), of the data volume allocated for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="data_storage_size_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The size, in terabytes (TB), of the data volume allocated for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="database_edition" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database edition of the Autonomous Database. (STANDARD_EDITION, ENTERPRISE_EDITION)</td>
</tr>
<tr>
    <td><CopyableCode code="database_management_status" /></td>
    <td><code>string</code></td>
    <td>The status of Oracle Database Management for the Autonomous Database. (ENABLING, ENABLED, DISABLING, NOT_ENABLED, FAILED_ENABLING, FAILED_DISABLING)</td>
</tr>
<tr>
    <td><CopyableCode code="database_type" /></td>
    <td><code>string</code></td>
    <td>The type of the Autonomous Database, either a regular database or a clone. (REGULAR, CLONE)</td>
</tr>
<tr>
    <td><CopyableCode code="db_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="db_tools_details" /></td>
    <td><code>array</code></td>
    <td>The list of database management tools enabled for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="db_version" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database software version of the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="db_workload" /></td>
    <td><code>string</code></td>
    <td>The intended use of the Autonomous Database, such as transaction processing, data warehouse, JSON database, or APEX. (OLTP, AJD, APEX, LH)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_summary" /></td>
    <td><code>object</code></td>
    <td>The encryption configuration for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="failed_data_recovery_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The amount of time, in seconds, that the data in the Autonomous Database is behind the data in the primary database.</td>
</tr>
<tr>
    <td><CopyableCode code="in_memory_area_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The size of the in-memory area of the Autonomous Database, in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="is_auto_scaling_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether automatic scaling of the compute resources is enabled for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="is_auto_scaling_for_storage_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether automatic scaling of the storage is enabled for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="is_backup_retention_locked" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the backup retention period of the Autonomous Database is locked.</td>
</tr>
<tr>
    <td><CopyableCode code="is_local_data_guard_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether local Oracle Data Guard is enabled for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="is_mtls_connection_required" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether mutual TLS (mTLS) authentication is required to connect to the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="is_reconnect_clone_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether reconnecting the refreshable clone to its source Autonomous Database is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="is_refreshable_clone" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Autonomous Database is a refreshable clone.</td>
</tr>
<tr>
    <td><CopyableCode code="is_remote_data_guard_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether remote Oracle Data Guard is enabled for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="license_model" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to the Autonomous Database. (BRING_YOUR_OWN_LICENSE, LICENSE_INCLUDED)</td>
</tr>
<tr>
    <td><CopyableCode code="local_adg_auto_failover_max_data_loss_limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum data loss limit, in seconds, for automatic failover to the local Oracle Data Guard standby database.</td>
</tr>
<tr>
    <td><CopyableCode code="local_disaster_recovery_type" /></td>
    <td><code>string</code></td>
    <td>The type of local disaster recovery configured for the Autonomous Database. (ADG, BACKUP_BASED)</td>
</tr>
<tr>
    <td><CopyableCode code="local_standby_db" /></td>
    <td><code>object</code></td>
    <td>The details of the local standby Autonomous Database in an Oracle Data Guard configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="long_term_backup_schedule" /></td>
    <td><code>object</code></td>
    <td>The long-term backup schedule for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_target_component" /></td>
    <td><code>string</code></td>
    <td>The component on the Autonomous Database that the current maintenance is being applied to.</td>
</tr>
<tr>
    <td><CopyableCode code="memory_per_oracle_compute_unit_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory allocated per Oracle Compute Unit, in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="ncharacter_set" /></td>
    <td><code>string</code></td>
    <td>The national character set of the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="net_services_architecture" /></td>
    <td><code>string</code></td>
    <td>The Oracle Net Services architecture of the Autonomous Database, either dedicated or shared. (DEDICATED, SHARED)</td>
</tr>
<tr>
    <td><CopyableCode code="next_long_term_backup_time_stamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the next scheduled long-term backup of the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_resource_anchor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Oracle Cloud Infrastructure (OCI) resource anchor associated with the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_url" /></td>
    <td><code>string</code></td>
    <td>The URL for accessing the OCI console page for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud Identifier (OCID) of the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="odb_network_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ODB network associated with the Autonomous Database. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="odb_network_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the ODB network associated with the Autonomous Database. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="open_mode" /></td>
    <td><code>string</code></td>
    <td>The mode in which the Autonomous Database is open, either read-only or read/write. (READ_ONLY, READ_WRITE)</td>
</tr>
<tr>
    <td><CopyableCode code="operations_insights_status" /></td>
    <td><code>string</code></td>
    <td>The status of Oracle Operations Insights for the Autonomous Database. (ENABLING, ENABLED, DISABLING, NOT_ENABLED, FAILED_ENABLING, FAILED_DISABLING)</td>
</tr>
<tr>
    <td><CopyableCode code="peer_db_ids" /></td>
    <td><code>array</code></td>
    <td>The list of unique identifiers of the peer Autonomous Databases.</td>
</tr>
<tr>
    <td><CopyableCode code="percent_progress" /></td>
    <td><code>number (float)</code></td>
    <td>The progress of the current operation on the Autonomous Database, as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="permission_level" /></td>
    <td><code>string</code></td>
    <td>The permission level of the Autonomous Database. (RESTRICTED, UNRESTRICTED)</td>
</tr>
<tr>
    <td><CopyableCode code="private_endpoint" /></td>
    <td><code>string</code></td>
    <td>The private endpoint for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="private_endpoint_ip" /></td>
    <td><code>string</code></td>
    <td>The private endpoint IP address for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="private_endpoint_label" /></td>
    <td><code>string</code></td>
    <td>The private endpoint label for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionable_cpus" /></td>
    <td><code>array</code></td>
    <td>The list of CPU core counts that you can provision for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="refreshable_mode" /></td>
    <td><code>string</code></td>
    <td>The refresh mode of the refreshable clone Autonomous Database. (AUTOMATIC, MANUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="refreshable_status" /></td>
    <td><code>string</code></td>
    <td>The refresh status of the refreshable clone Autonomous Database. (REFRESHING, NOT_REFRESHING)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_disaster_recovery_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration of the remote disaster recovery for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_pool_leader_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the resource pool leader Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_pool_summary" /></td>
    <td><code>object</code></td>
    <td>The configuration of the resource pool for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The Oracle Data Guard role of the Autonomous Database. (PRIMARY, STANDBY, DISABLED_STANDBY, BACKUP_COPY, SNAPSHOT_STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_operations" /></td>
    <td><code>array</code></td>
    <td>The list of scheduled start and stop times for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="service_console_url" /></td>
    <td><code>string</code></td>
    <td>The URL for accessing the Oracle service console for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="source_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the source from which the Autonomous Database was created.</td>
</tr>
<tr>
    <td><CopyableCode code="sql_web_developer_url" /></td>
    <td><code>string</code></td>
    <td>The URL for accessing Oracle SQL Developer Web for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="standby_allowlisted_ips" /></td>
    <td><code>array</code></td>
    <td>The list of IP addresses that are allowed to access the standby Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="standby_allowlisted_ips_source" /></td>
    <td><code>string</code></td>
    <td>The source of the allowlisted IP addresses for the standby Autonomous Database. (PRIMARY, SEPARATE, NOT_APPLICABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="standby_db" /></td>
    <td><code>object</code></td>
    <td>The details of the standby Autonomous Database in a cross-Region Oracle Data Guard configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Autonomous Database. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS, STOPPING, STOPPED, STARTING, UNAVAILABLE, RESTORE_IN_PROGRESS, RESTORE_FAILED, BACKUP_IN_PROGRESS, SCALE_IN_PROGRESS, AVAILABLE_NEEDS_ATTENTION, RESTARTING, RECREATING, ROLE_CHANGE_IN_PROGRESS, UPGRADING, INACCESSIBLE, STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current status of the Autonomous Database, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="time_data_guard_role_changed" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Oracle Data Guard role of the Autonomous Database last changed.</td>
</tr>
<tr>
    <td><CopyableCode code="time_deletion_of_free_autonomous_database" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the inactive Always Free Autonomous Database is scheduled to be automatically deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="time_disaster_recovery_role_changed" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the disaster recovery role of the Autonomous Database last changed.</td>
</tr>
<tr>
    <td><CopyableCode code="time_local_data_guard_enabled" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when local Oracle Data Guard was enabled for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="time_maintenance_begin" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the next maintenance of the Autonomous Database begins.</td>
</tr>
<tr>
    <td><CopyableCode code="time_maintenance_end" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the next maintenance of the Autonomous Database ends.</td>
</tr>
<tr>
    <td><CopyableCode code="time_of_auto_refresh_start" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the automatic refresh of the refreshable clone Autonomous Database starts.</td>
</tr>
<tr>
    <td><CopyableCode code="time_of_last_backup" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the last backup of the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="time_of_last_failover" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the last failover operation for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="time_of_last_refresh" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the last refresh of the refreshable clone Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="time_of_last_refresh_point" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time as of which the data in the refreshable clone Autonomous Database is current.</td>
</tr>
<tr>
    <td><CopyableCode code="time_of_last_switchover" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the last switchover operation for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="time_of_next_refresh" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the next scheduled refresh of the refreshable clone Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="time_reclamation_of_free_autonomous_database" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Always Free Autonomous Database is scheduled to be stopped because of inactivity.</td>
</tr>
<tr>
    <td><CopyableCode code="time_undeleted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Autonomous Database was restored after deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="time_until_reconnect_clone_enabled" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time until which reconnecting the refreshable clone to its source Autonomous Database is allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="total_backup_storage_size_in_gbs" /></td>
    <td><code>number (double)</code></td>
    <td>The total amount of backup storage used by the Autonomous Database, in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="used_data_storage_size_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of data storage currently in use by the Autonomous Database, in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="used_data_storage_size_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The amount of data storage currently in use by the Autonomous Database, in TB.</td>
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
    <td><a href="#list_autonomous_database_clones"><CopyableCode code="list_autonomous_database_clones" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the clones of the specified Autonomous Database.</td>
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
    defaultValue="list_autonomous_database_clones"
    values={[
        { label: 'list_autonomous_database_clones', value: 'list_autonomous_database_clones' }
    ]}
>
<TabItem value="list_autonomous_database_clones">

Lists the clones of the specified Autonomous Database.

```sql
SELECT
actual_used_data_storage_size_in_tbs,
admin_password_source_summary,
allocated_storage_size_in_tbs,
allowlisted_ips,
apex_details,
auto_refresh_frequency_in_seconds,
auto_refresh_point_lag_in_seconds,
autonomous_database_arn,
autonomous_database_id,
autonomous_maintenance_schedule_type,
availability_zone,
availability_zone_id,
available_upgrade_versions,
backup_retention_period_in_days,
byol_compute_count_limit,
character_set,
clone_table_space_list,
compute_count,
compute_model,
connection_string_details,
connection_urls,
cpu_core_count,
created_at,
customer_contacts,
data_safe_status,
data_storage_size_in_gbs,
data_storage_size_in_tbs,
database_edition,
database_management_status,
database_type,
db_name,
db_tools_details,
db_version,
db_workload,
display_name,
encryption_summary,
failed_data_recovery_in_seconds,
in_memory_area_in_gbs,
is_auto_scaling_enabled,
is_auto_scaling_for_storage_enabled,
is_backup_retention_locked,
is_local_data_guard_enabled,
is_mtls_connection_required,
is_reconnect_clone_enabled,
is_refreshable_clone,
is_remote_data_guard_enabled,
license_model,
local_adg_auto_failover_max_data_loss_limit,
local_disaster_recovery_type,
local_standby_db,
long_term_backup_schedule,
maintenance_target_component,
memory_per_oracle_compute_unit_in_gbs,
ncharacter_set,
net_services_architecture,
next_long_term_backup_time_stamp,
oci_resource_anchor_name,
oci_url,
ocid,
odb_network_arn,
odb_network_id,
open_mode,
operations_insights_status,
peer_db_ids,
percent_progress,
permission_level,
private_endpoint,
private_endpoint_ip,
private_endpoint_label,
provisionable_cpus,
refreshable_mode,
refreshable_status,
remote_disaster_recovery_configuration,
resource_pool_leader_id,
resource_pool_summary,
role,
scheduled_operations,
service_console_url,
source_id,
sql_web_developer_url,
standby_allowlisted_ips,
standby_allowlisted_ips_source,
standby_db,
status,
status_reason,
time_data_guard_role_changed,
time_deletion_of_free_autonomous_database,
time_disaster_recovery_role_changed,
time_local_data_guard_enabled,
time_maintenance_begin,
time_maintenance_end,
time_of_auto_refresh_start,
time_of_last_backup,
time_of_last_failover,
time_of_last_refresh,
time_of_last_refresh_point,
time_of_last_switchover,
time_of_next_refresh,
time_reclamation_of_free_autonomous_database,
time_undeleted,
time_until_reconnect_clone_enabled,
total_backup_storage_size_in_gbs,
used_data_storage_size_in_gbs,
used_data_storage_size_in_tbs
FROM aws.odb.autonomous_database_clones
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
