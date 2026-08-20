--- 
title: autonomous_databases
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_databases
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

Creates, updates, deletes, gets or lists an <code>autonomous_databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.autonomous_databases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_autonomous_database"
    values={[
        { label: 'get_autonomous_database', value: 'get_autonomous_database' },
        { label: 'list_autonomous_databases', value: 'list_autonomous_databases' }
    ]}
>
<TabItem value="get_autonomous_database">

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
<TabItem value="list_autonomous_databases">

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
    <td><a href="#get_autonomous_database"><CopyableCode code="get_autonomous_database" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specific Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#list_autonomous_databases"><CopyableCode code="list_autonomous_databases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the Autonomous Databases owned by your Amazon Web Services account in the current Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#create_autonomous_database_wallet"><CopyableCode code="create_autonomous_database_wallet" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a></td>
    <td></td>
    <td>Creates a new wallet for the specified Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#create_autonomous_database"><CopyableCode code="create_autonomous_database" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#update_autonomous_database"><CopyableCode code="update_autonomous_database" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a></td>
    <td></td>
    <td>Updates the properties of an Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#delete_autonomous_database"><CopyableCode code="delete_autonomous_database" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#failover_autonomous_database"><CopyableCode code="failover_autonomous_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a></td>
    <td></td>
    <td>Initiates a failover of the specified Autonomous Database to a standby peer database.</td>
</tr>
<tr>
    <td><a href="#reboot_autonomous_database"><CopyableCode code="reboot_autonomous_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a></td>
    <td></td>
    <td>Reboots the specified Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#restore_autonomous_database"><CopyableCode code="restore_autonomous_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-timestamp"><code>timestamp</code></a></td>
    <td></td>
    <td>Restores the specified Autonomous Database to a point in time.</td>
</tr>
<tr>
    <td><a href="#shrink_autonomous_database"><CopyableCode code="shrink_autonomous_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a></td>
    <td></td>
    <td>Shrinks the storage of the specified Autonomous Database to reclaim unused space.</td>
</tr>
<tr>
    <td><a href="#start_autonomous_database"><CopyableCode code="start_autonomous_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a></td>
    <td></td>
    <td>Starts the specified Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#stop_autonomous_database"><CopyableCode code="stop_autonomous_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a></td>
    <td></td>
    <td>Stops the specified Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#switchover_autonomous_database"><CopyableCode code="switchover_autonomous_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a></td>
    <td></td>
    <td>Performs a switchover of the specified Autonomous Database to a standby peer database.</td>
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
    defaultValue="get_autonomous_database"
    values={[
        { label: 'get_autonomous_database', value: 'get_autonomous_database' },
        { label: 'list_autonomous_databases', value: 'list_autonomous_databases' }
    ]}
>
<TabItem value="get_autonomous_database">

Gets information about a specific Autonomous Database.

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
FROM aws.odb.autonomous_databases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_autonomous_databases">

Returns information about the Autonomous Databases owned by your Amazon Web Services account in the current Amazon Web Services Region.

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
FROM aws.odb.autonomous_databases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_autonomous_database_wallet"
    values={[
        { label: 'create_autonomous_database_wallet', value: 'create_autonomous_database_wallet' },
        { label: 'create_autonomous_database', value: 'create_autonomous_database' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_autonomous_database_wallet">

Creates a new wallet for the specified Autonomous Database.

```sql
INSERT INTO aws.odb.autonomous_databases (
autonomousDatabaseId,
walletType,
password,
passwordSource,
passwordSourceConfiguration,
clientToken,
region
)
SELECT 
'{{ autonomousDatabaseId }}' /* required */,
'{{ walletType }}',
'{{ password }}',
'{{ passwordSource }}',
'{{ passwordSourceConfiguration }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
autonomous_database_wallet_file
;
```
</TabItem>
<TabItem value="create_autonomous_database">

Creates a new Autonomous Database.

```sql
INSERT INTO aws.odb.autonomous_databases (
odbNetworkId,
displayName,
dbName,
adminPassword,
computeCount,
dataStorageSizeInTBs,
dataStorageSizeInGBs,
dbWorkload,
isAutoScalingEnabled,
isAutoScalingForStorageEnabled,
licenseModel,
characterSet,
ncharacterSet,
dbVersion,
databaseEdition,
standbyAllowlistedIpsSource,
autonomousMaintenanceScheduleType,
backupRetentionPeriodInDays,
byolComputeCountLimit,
cpuCoreCount,
customerContactsToSendToOCI,
privateEndpointIp,
privateEndpointLabel,
resourcePoolLeaderId,
resourcePoolSummary,
scheduledOperations,
standbyAllowlistedIps,
allowlistedIps,
transportableTablespace,
isBackupRetentionLocked,
isLocalDataGuardEnabled,
isMtlsConnectionRequired,
dbToolsDetails,
source,
sourceConfiguration,
encryptionKeyProvider,
encryptionKeyConfiguration,
adminPasswordSource,
adminPasswordSourceConfiguration,
clientToken,
tags,
region
)
SELECT 
'{{ odbNetworkId }}',
'{{ displayName }}',
'{{ dbName }}',
'{{ adminPassword }}',
{{ computeCount }},
{{ dataStorageSizeInTBs }},
{{ dataStorageSizeInGBs }},
'{{ dbWorkload }}',
{{ isAutoScalingEnabled }},
{{ isAutoScalingForStorageEnabled }},
'{{ licenseModel }}',
'{{ characterSet }}',
'{{ ncharacterSet }}',
'{{ dbVersion }}',
'{{ databaseEdition }}',
'{{ standbyAllowlistedIpsSource }}',
'{{ autonomousMaintenanceScheduleType }}',
{{ backupRetentionPeriodInDays }},
{{ byolComputeCountLimit }},
{{ cpuCoreCount }},
'{{ customerContactsToSendToOCI }}',
'{{ privateEndpointIp }}',
'{{ privateEndpointLabel }}',
'{{ resourcePoolLeaderId }}',
'{{ resourcePoolSummary }}',
'{{ scheduledOperations }}',
'{{ standbyAllowlistedIps }}',
'{{ allowlistedIps }}',
'{{ transportableTablespace }}',
{{ isBackupRetentionLocked }},
{{ isLocalDataGuardEnabled }},
{{ isMtlsConnectionRequired }},
'{{ dbToolsDetails }}',
'{{ source }}',
'{{ sourceConfiguration }}',
'{{ encryptionKeyProvider }}',
'{{ encryptionKeyConfiguration }}',
'{{ adminPasswordSource }}',
'{{ adminPasswordSourceConfiguration }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
autonomous_database_id,
display_name,
status,
status_reason
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: autonomous_databases
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the autonomous_databases resource.
    - name: autonomousDatabaseId
      value: "{{ autonomousDatabaseId }}"
      description: |
        The unique identifier of the Autonomous Database to create a wallet for.
    - name: walletType
      value: "{{ walletType }}"
      description: |
        The type of wallet to create, either a regional wallet or an instance wallet.
      valid_values: ['REGIONAL', 'INSTANCE']
    - name: password
      value: "{{ password }}"
      description: |
        The password to encrypt the keys inside the wallet.
    - name: passwordSource
      value: "{{ passwordSource }}"
      description: |
        The source of the password for encrypting the wallet. When set to CUSTOMER_MANAGED_AWS_SECRET, the password is retrieved from an Amazon Web Services Secrets Manager secret.
      valid_values: ['CUSTOMER_MANAGED_AWS_SECRET', 'API_REQUEST_PARAMETER']
    - name: passwordSourceConfiguration
      description: |
        The configuration of the password source for the Autonomous Database wallet.
      value:
        customerManagedAwsSecret:
          secretId: "{{ secretId }}"
          iamRoleArn: "{{ iamRoleArn }}"
          externalIdType: "{{ externalIdType }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A client-provided token to ensure the idempotency of the request.
    - name: odbNetworkId
      value: "{{ odbNetworkId }}"
      description: |
        The unique identifier of the ODB network to be used for the Autonomous Database.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly name for the Autonomous Database. The name does not have to be unique.
    - name: dbName
      value: "{{ dbName }}"
      description: |
        The name of the Autonomous Database. The name must begin with an alphabetic character and can contain a maximum of 30 alphanumeric characters. Special characters are not permitted. The name must be unique in the Amazon Web Services account.
    - name: adminPassword
      value: "{{ adminPassword }}"
      description: |
        The password for the ADMIN user of the Autonomous Database.
    - name: computeCount
      value: {{ computeCount }}
      description: |
        The compute capacity, in number of Elastic CPUs (ECPUs) or Oracle CPUs (OCPUs), to assign to the Autonomous Database.
    - name: dataStorageSizeInTBs
      value: {{ dataStorageSizeInTBs }}
      description: |
        The size, in terabytes (TB), of the data volume to allocate for the Autonomous Database.
    - name: dataStorageSizeInGBs
      value: {{ dataStorageSizeInGBs }}
      description: |
        The size, in gigabytes (GB), of the data volume to allocate for the Autonomous Database.
    - name: dbWorkload
      value: "{{ dbWorkload }}"
      description: |
        The intended use of the Autonomous Database, such as transaction processing, data warehouse, JSON database, or APEX.
      valid_values: ['OLTP', 'AJD', 'APEX', 'LH']
    - name: isAutoScalingEnabled
      value: {{ isAutoScalingEnabled }}
      description: |
        Specifies whether to enable automatic scaling of the compute resources for the Autonomous Database.
    - name: isAutoScalingForStorageEnabled
      value: {{ isAutoScalingForStorageEnabled }}
      description: |
        Specifies whether to enable automatic scaling of the storage for the Autonomous Database.
    - name: licenseModel
      value: "{{ licenseModel }}"
      description: |
        The Oracle license model to apply to the Autonomous Database.
      valid_values: ['BRING_YOUR_OWN_LICENSE', 'LICENSE_INCLUDED']
    - name: characterSet
      value: "{{ characterSet }}"
      description: |
        The character set to use for the Autonomous Database.
    - name: ncharacterSet
      value: "{{ ncharacterSet }}"
      description: |
        The national character set to use for the Autonomous Database.
    - name: dbVersion
      value: "{{ dbVersion }}"
      description: |
        The Oracle Database software version to use for the Autonomous Database.
    - name: databaseEdition
      value: "{{ databaseEdition }}"
      description: |
        The Oracle Database edition to apply to the Autonomous Database.
      valid_values: ['STANDARD_EDITION', 'ENTERPRISE_EDITION']
    - name: standbyAllowlistedIpsSource
      value: "{{ standbyAllowlistedIpsSource }}"
      description: |
        The source of the allowlisted IP addresses for the standby Autonomous Database.
      valid_values: ['PRIMARY', 'SEPARATE', 'NOT_APPLICABLE']
    - name: autonomousMaintenanceScheduleType
      value: "{{ autonomousMaintenanceScheduleType }}"
      description: |
        The maintenance schedule type for the Autonomous Database.
      valid_values: ['EARLY', 'REGULAR']
    - name: backupRetentionPeriodInDays
      value: {{ backupRetentionPeriodInDays }}
      description: |
        The retention period, in days, for automatic backups of the Autonomous Database.
    - name: byolComputeCountLimit
      value: {{ byolComputeCountLimit }}
      description: |
        The maximum number of compute resources that you can allocate to the Autonomous Database under the bring-your-own-license (BYOL) model.
    - name: cpuCoreCount
      value: {{ cpuCoreCount }}
      description: |
        The number of CPU cores to allocate to the Autonomous Database.
    - name: customerContactsToSendToOCI
      description: |
        The list of customer contacts to receive operational notifications from Oracle Cloud Infrastructure (OCI) for the Autonomous Database.
      value:
        - email: "{{ email }}"
    - name: privateEndpointIp
      value: "{{ privateEndpointIp }}"
      description: |
        The private endpoint IP address for the Autonomous Database.
    - name: privateEndpointLabel
      value: "{{ privateEndpointLabel }}"
      description: |
        The private endpoint label for the Autonomous Database.
    - name: resourcePoolLeaderId
      value: "{{ resourcePoolLeaderId }}"
      description: |
        The unique identifier of the resource pool leader Autonomous Database.
    - name: resourcePoolSummary
      description: |
        The configuration of the resource pool for the Autonomous Database.
      value:
        isDisabled: {{ isDisabled }}
        poolSize: {{ poolSize }}
        poolStorageSizeInTBs: {{ poolStorageSizeInTBs }}
        availableStorageCapacityInTBs: {{ availableStorageCapacityInTBs }}
        totalComputeCapacity: {{ totalComputeCapacity }}
        availableComputeCapacity: {{ availableComputeCapacity }}
    - name: scheduledOperations
      description: |
        The list of scheduled start and stop times for the Autonomous Database.
      value:
        - dayOfWeek:
            name: "{{ name }}"
          scheduledStartTime: "{{ scheduledStartTime }}"
          scheduledStopTime: "{{ scheduledStopTime }}"
    - name: standbyAllowlistedIps
      value:
        - "{{ standbyAllowlistedIps }}"
      description: |
        The list of IP addresses that are allowed to access the standby Autonomous Database.
    - name: allowlistedIps
      value:
        - "{{ allowlistedIps }}"
      description: |
        The list of IP addresses that are allowed to access the Autonomous Database.
    - name: transportableTablespace
      description: |
        The transportable tablespace configuration to use when creating the Autonomous Database.
      value:
        ttsBundleUrl: "{{ ttsBundleUrl }}"
    - name: isBackupRetentionLocked
      value: {{ isBackupRetentionLocked }}
      description: |
        Specifies whether to lock the backup retention period of the Autonomous Database to prevent it from being shortened.
    - name: isLocalDataGuardEnabled
      value: {{ isLocalDataGuardEnabled }}
      description: |
        Specifies whether to enable local Oracle Data Guard for the Autonomous Database.
    - name: isMtlsConnectionRequired
      value: {{ isMtlsConnectionRequired }}
      description: |
        Specifies whether mutual TLS (mTLS) authentication is required to connect to the Autonomous Database.
    - name: dbToolsDetails
      description: |
        The list of database management tools to enable for the Autonomous Database.
      value:
        - isEnabled: {{ isEnabled }}
          name: "{{ name }}"
          computeCount: {{ computeCount }}
          maxIdleTimeInMinutes: {{ maxIdleTimeInMinutes }}
    - name: source
      value: "{{ source }}"
      description: |
        The source from which to create the Autonomous Database, such as a clone, backup, or cross-Region copy.
      valid_values: ['NONE', 'DATABASE', 'BACKUP_FROM_ID', 'BACKUP_FROM_TIMESTAMP', 'CROSS_REGION_DATAGUARD', 'CROSS_REGION_DISASTER_RECOVERY', 'CLONE_TO_REFRESHABLE']
    - name: sourceConfiguration
      description: |
        The configuration details for the source used to create the Autonomous Database.
      value:
        databaseClone:
          sourceAutonomousDatabaseId: "{{ sourceAutonomousDatabaseId }}"
          cloneType: "{{ cloneType }}"
        restoreFromBackup:
          autonomousDatabaseBackupId: "{{ autonomousDatabaseBackupId }}"
          cloneType: "{{ cloneType }}"
          cloneTableSpaceList:
            - {{ cloneTableSpaceList }}
        pointInTimeRestore:
          sourceAutonomousDatabaseId: "{{ sourceAutonomousDatabaseId }}"
          cloneType: "{{ cloneType }}"
          timestamp: "{{ timestamp }}"
          useLatestAvailableBackupTimestamp: {{ useLatestAvailableBackupTimestamp }}
          cloneTableSpaceList:
            - {{ cloneTableSpaceList }}
        crossRegionDataGuard:
          sourceAutonomousDatabaseArn: "{{ sourceAutonomousDatabaseArn }}"
        crossRegionDisasterRecovery:
          sourceAutonomousDatabaseArn: "{{ sourceAutonomousDatabaseArn }}"
          remoteDisasterRecoveryType: "{{ remoteDisasterRecoveryType }}"
          isReplicateAutomaticBackups: {{ isReplicateAutomaticBackups }}
        cloneToRefreshable:
          sourceAutonomousDatabaseId: "{{ sourceAutonomousDatabaseId }}"
          refreshableMode: "{{ refreshableMode }}"
          autoRefreshFrequencyInSeconds: {{ autoRefreshFrequencyInSeconds }}
          autoRefreshPointLagInSeconds: {{ autoRefreshPointLagInSeconds }}
          timeOfAutoRefreshStart: "{{ timeOfAutoRefreshStart }}"
          openMode: "{{ openMode }}"
          cloneType: "{{ cloneType }}"
    - name: encryptionKeyProvider
      value: "{{ encryptionKeyProvider }}"
      description: |
        The provider of the encryption key to use for the Autonomous Database.
      valid_values: ['ORACLE_MANAGED', 'AWS_KMS']
    - name: encryptionKeyConfiguration
      description: |
        The configuration of the encryption key to use for the Autonomous Database.
      value:
        awsEncryptionKey:
          iamRoleArn: "{{ iamRoleArn }}"
          externalIdType: "{{ externalIdType }}"
          kmsKeyId: "{{ kmsKeyId }}"
    - name: adminPasswordSource
      value: "{{ adminPasswordSource }}"
      description: |
        The source of the admin password for the Autonomous Database. When set to CUSTOMER_MANAGED_AWS_SECRET, the admin password is retrieved from an Amazon Web Services Secrets Manager secret.
      valid_values: ['CUSTOMER_MANAGED_AWS_SECRET', 'API_REQUEST_PARAMETER']
    - name: adminPasswordSourceConfiguration
      description: |
        The configuration of the admin password source for the Autonomous Database.
      value:
        customerManagedAwsSecret:
          secretId: "{{ secretId }}"
          iamRoleArn: "{{ iamRoleArn }}"
          externalIdType: "{{ externalIdType }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        The list of resource tags to apply to the Autonomous Database. Each tag is a key-value pair with no predefined name, type, or namespace.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_autonomous_database"
    values={[
        { label: 'update_autonomous_database', value: 'update_autonomous_database' }
    ]}
>
<TabItem value="update_autonomous_database">

Updates the properties of an Autonomous Database.

```sql
UPDATE aws.odb.autonomous_databases
SET 
autonomousDatabaseId = '{{ autonomousDatabaseId }}',
adminPassword = '{{ adminPassword }}',
computeCount = {{ computeCount }},
cpuCoreCount = {{ cpuCoreCount }},
dataStorageSizeInTBs = {{ dataStorageSizeInTBs }},
dataStorageSizeInGBs = {{ dataStorageSizeInGBs }},
displayName = '{{ displayName }}',
dbName = '{{ dbName }}',
dbVersion = '{{ dbVersion }}',
dbWorkload = '{{ dbWorkload }}',
dbToolsDetails = '{{ dbToolsDetails }}',
databaseEdition = '{{ databaseEdition }}',
licenseModel = '{{ licenseModel }}',
isAutoScalingEnabled = {{ isAutoScalingEnabled }},
isAutoScalingForStorageEnabled = {{ isAutoScalingForStorageEnabled }},
isBackupRetentionLocked = {{ isBackupRetentionLocked }},
isLocalDataGuardEnabled = {{ isLocalDataGuardEnabled }},
isMtlsConnectionRequired = {{ isMtlsConnectionRequired }},
isRefreshableClone = {{ isRefreshableClone }},
isDisconnectPeer = {{ isDisconnectPeer }},
backupRetentionPeriodInDays = {{ backupRetentionPeriodInDays }},
byolComputeCountLimit = {{ byolComputeCountLimit }},
localAdgAutoFailoverMaxDataLossLimit = {{ localAdgAutoFailoverMaxDataLossLimit }},
autonomousMaintenanceScheduleType = '{{ autonomousMaintenanceScheduleType }}',
customerContactsToSendToOCI = '{{ customerContactsToSendToOCI }}',
scheduledOperations = '{{ scheduledOperations }}',
longTermBackupSchedule = '{{ longTermBackupSchedule }}',
openMode = '{{ openMode }}',
permissionLevel = '{{ permissionLevel }}',
refreshableMode = '{{ refreshableMode }}',
privateEndpointIp = '{{ privateEndpointIp }}',
privateEndpointLabel = '{{ privateEndpointLabel }}',
peerDbId = '{{ peerDbId }}',
resourcePoolLeaderId = '{{ resourcePoolLeaderId }}',
resourcePoolSummary = '{{ resourcePoolSummary }}',
standbyAllowlistedIpsSource = '{{ standbyAllowlistedIpsSource }}',
standbyAllowlistedIps = '{{ standbyAllowlistedIps }}',
allowlistedIps = '{{ allowlistedIps }}',
autoRefreshFrequencyInSeconds = {{ autoRefreshFrequencyInSeconds }},
autoRefreshPointLagInSeconds = {{ autoRefreshPointLagInSeconds }},
timeOfAutoRefreshStart = '{{ timeOfAutoRefreshStart }}',
encryptionKeyProvider = '{{ encryptionKeyProvider }}',
encryptionKeyConfiguration = '{{ encryptionKeyConfiguration }}',
adminPasswordSource = '{{ adminPasswordSource }}',
adminPasswordSourceConfiguration = '{{ adminPasswordSourceConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND autonomousDatabaseId = '{{ autonomousDatabaseId }}' --required
RETURNING
autonomous_database_id,
display_name,
status,
status_reason;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_autonomous_database"
    values={[
        { label: 'delete_autonomous_database', value: 'delete_autonomous_database' }
    ]}
>
<TabItem value="delete_autonomous_database">

Deletes the specified Autonomous Database.

```sql
DELETE FROM aws.odb.autonomous_databases
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="failover_autonomous_database"
    values={[
        { label: 'failover_autonomous_database', value: 'failover_autonomous_database' },
        { label: 'reboot_autonomous_database', value: 'reboot_autonomous_database' },
        { label: 'restore_autonomous_database', value: 'restore_autonomous_database' },
        { label: 'shrink_autonomous_database', value: 'shrink_autonomous_database' },
        { label: 'start_autonomous_database', value: 'start_autonomous_database' },
        { label: 'stop_autonomous_database', value: 'stop_autonomous_database' },
        { label: 'switchover_autonomous_database', value: 'switchover_autonomous_database' }
    ]}
>
<TabItem value="failover_autonomous_database">

Initiates a failover of the specified Autonomous Database to a standby peer database.

```sql
EXEC aws.odb.autonomous_databases.failover_autonomous_database 
@region='{{ region }}' --required 
@@json=
'{
"autonomousDatabaseId": "{{ autonomousDatabaseId }}", 
"peerDbArn": "{{ peerDbArn }}"
}'
;
```
</TabItem>
<TabItem value="reboot_autonomous_database">

Reboots the specified Autonomous Database.

```sql
EXEC aws.odb.autonomous_databases.reboot_autonomous_database 
@region='{{ region }}' --required 
@@json=
'{
"autonomousDatabaseId": "{{ autonomousDatabaseId }}", 
"isOnlineReboot": {{ isOnlineReboot }}
}'
;
```
</TabItem>
<TabItem value="restore_autonomous_database">

Restores the specified Autonomous Database to a point in time.

```sql
EXEC aws.odb.autonomous_databases.restore_autonomous_database 
@region='{{ region }}' --required 
@@json=
'{
"autonomousDatabaseId": "{{ autonomousDatabaseId }}", 
"timestamp": "{{ timestamp }}"
}'
;
```
</TabItem>
<TabItem value="shrink_autonomous_database">

Shrinks the storage of the specified Autonomous Database to reclaim unused space.

```sql
EXEC aws.odb.autonomous_databases.shrink_autonomous_database 
@region='{{ region }}' --required 
@@json=
'{
"autonomousDatabaseId": "{{ autonomousDatabaseId }}"
}'
;
```
</TabItem>
<TabItem value="start_autonomous_database">

Starts the specified Autonomous Database.

```sql
EXEC aws.odb.autonomous_databases.start_autonomous_database 
@region='{{ region }}' --required 
@@json=
'{
"autonomousDatabaseId": "{{ autonomousDatabaseId }}"
}'
;
```
</TabItem>
<TabItem value="stop_autonomous_database">

Stops the specified Autonomous Database.

```sql
EXEC aws.odb.autonomous_databases.stop_autonomous_database 
@region='{{ region }}' --required 
@@json=
'{
"autonomousDatabaseId": "{{ autonomousDatabaseId }}"
}'
;
```
</TabItem>
<TabItem value="switchover_autonomous_database">

Performs a switchover of the specified Autonomous Database to a standby peer database.

```sql
EXEC aws.odb.autonomous_databases.switchover_autonomous_database 
@region='{{ region }}' --required 
@@json=
'{
"autonomousDatabaseId": "{{ autonomousDatabaseId }}", 
"peerDbArn": "{{ peerDbArn }}"
}'
;
```
</TabItem>
</Tabs>
