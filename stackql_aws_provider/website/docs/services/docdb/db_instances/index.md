--- 
title: db_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - db_instances
  - docdb
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.docdb.db_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_instances"
    values={[
        { label: 'describe_db_instances', value: 'describe_db_instances' }
    ]}
>
<TabItem value="describe_db_instances">

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
    <td><CopyableCode code="auto_minor_version_upgrade" /></td>
    <td><code>boolean</code></td>
    <td>Does not apply. This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the Availability Zone that the instance is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_retention_period" /></td>
    <td><code>integer</code></td>
    <td>Specifies the number of days for which automatic snapshots are retained.</td>
</tr>
<tr>
    <td><CopyableCode code="ca_certificate_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the CA certificate for this DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_details" /></td>
    <td><code>string</code></td>
    <td>The details of the DB instance's server certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="copy_tags_to_snapshot" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>Contains the name of the cluster that the instance is a member of if the instance is a member of a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_class" /></td>
    <td><code>string</code></td>
    <td>Contains the name of the compute and memory capacity class of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_identifier" /></td>
    <td><code>string</code></td>
    <td>Contains a user-provided database identifier. This identifier is the unique key that identifies an instance.</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_status" /></td>
    <td><code>string</code></td>
    <td>Specifies the current state of this database.</td>
</tr>
<tr>
    <td><CopyableCode code="db_subnet_group" /></td>
    <td><code>string</code></td>
    <td>Specifies information on the subnet group that is associated with the instance, including the name, description, and subnets in the subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="dbi_resource_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region-unique, immutable identifier for the instance. This identifier is found in CloudTrail log entries whenever the KMS key for the instance is accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_cloudwatch_logs_exports" /></td>
    <td><code>string</code></td>
    <td>A list of log types that this instance is configured to export to CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Specifies the connection endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>Provides the name of the database engine to be used for this instance.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>Indicates the database engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_create_time" /></td>
    <td><code>string</code></td>
    <td>Provides the date and time that the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>If StorageEncrypted is true, the KMS key identifier for the encrypted instance.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_restorable_time" /></td>
    <td><code>string</code></td>
    <td>Specifies the latest time to which a database can be restored with point-in-time restore.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_modified_values" /></td>
    <td><code>string</code></td>
    <td>Specifies that changes to the instance are pending. This element is included only when changes are pending. Specific changes are identified by subelements.</td>
</tr>
<tr>
    <td><CopyableCode code="performance_insights_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Set to true if Amazon RDS Performance Insights is enabled for the DB instance, and otherwise false.</td>
</tr>
<tr>
    <td><CopyableCode code="performance_insights_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_backup_window" /></td>
    <td><code>string</code></td>
    <td>Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_maintenance_window" /></td>
    <td><code>string</code></td>
    <td>Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="promotion_tier" /></td>
    <td><code>integer</code></td>
    <td>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.</td>
</tr>
<tr>
    <td><CopyableCode code="publicly_accessible" /></td>
    <td><code>boolean</code></td>
    <td>Not supported. Amazon DocumentDB does not currently support public endpoints. The value of PubliclyAccessible is always false.</td>
</tr>
<tr>
    <td><CopyableCode code="status_infos" /></td>
    <td><code>string</code></td>
    <td>The status of a read replica. If the instance is not a read replica, this is blank.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether or not the instance is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_security_groups" /></td>
    <td><code>string</code></td>
    <td>Provides a list of VPC security group elements that the instance belongs to.</td>
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
    <td><a href="#describe_db_instances"><CopyableCode code="describe_db_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.</td>
</tr>
<tr>
    <td><a href="#create_db_instance"><CopyableCode code="create_db_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-DBInstanceClass"><code>DBInstanceClass</code></a>, <a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-AutoMinorVersionUpgrade"><code>AutoMinorVersionUpgrade</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-PromotionTier"><code>PromotionTier</code></a>, <a href="#parameter-EnablePerformanceInsights"><code>EnablePerformanceInsights</code></a>, <a href="#parameter-PerformanceInsightsKMSKeyId"><code>PerformanceInsightsKMSKeyId</code></a>, <a href="#parameter-CACertificateIdentifier"><code>CACertificateIdentifier</code></a></td>
    <td>Creates a new instance.</td>
</tr>
<tr>
    <td><a href="#modify_db_instance"><CopyableCode code="modify_db_instance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBInstanceClass"><code>DBInstanceClass</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a>, <a href="#parameter-PreferredMaintenanceWindow"><code>PreferredMaintenanceWindow</code></a>, <a href="#parameter-AutoMinorVersionUpgrade"><code>AutoMinorVersionUpgrade</code></a>, <a href="#parameter-NewDBInstanceIdentifier"><code>NewDBInstanceIdentifier</code></a>, <a href="#parameter-CACertificateIdentifier"><code>CACertificateIdentifier</code></a>, <a href="#parameter-CopyTagsToSnapshot"><code>CopyTagsToSnapshot</code></a>, <a href="#parameter-PromotionTier"><code>PromotionTier</code></a>, <a href="#parameter-EnablePerformanceInsights"><code>EnablePerformanceInsights</code></a>, <a href="#parameter-PerformanceInsightsKMSKeyId"><code>PerformanceInsightsKMSKeyId</code></a>, <a href="#parameter-CertificateRotationRestart"><code>CertificateRotationRestart</code></a></td>
    <td>Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.</td>
</tr>
<tr>
    <td><a href="#delete_db_instance"><CopyableCode code="delete_db_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a previously provisioned instance.</td>
</tr>
<tr>
    <td><a href="#reboot_db_instance"><CopyableCode code="reboot_db_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ForceFailover"><code>ForceFailover</code></a></td>
    <td>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to rebooting.</td>
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
<tr id="parameter-DBClusterIdentifier">
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cluster that the instance will belong to.</td>
</tr>
<tr id="parameter-DBInstanceClass">
    <td><CopyableCode code="DBInstanceClass" /></td>
    <td><code>string</code></td>
    <td>The compute and memory capacity of the instance; for example, db.r5.large.</td>
</tr>
<tr id="parameter-DBInstanceIdentifier">
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The instance identifier. This parameter is stored as a lowercase string. Constraints: Must match the identifier of an existing DBInstance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ApplyImmediately">
    <td><CopyableCode code="ApplyImmediately" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the instance. If this parameter is set to false, changes to the instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next reboot. Default: false</td>
</tr>
<tr id="parameter-AutoMinorVersionUpgrade">
    <td><CopyableCode code="AutoMinorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.</td>
</tr>
<tr id="parameter-AvailabilityZone">
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Amazon EC2 Availability Zone that the instance is created in. Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region. Example: us-east-1d</td>
</tr>
<tr id="parameter-CACertificateIdentifier">
    <td><CopyableCode code="CACertificateIdentifier" /></td>
    <td><code>string</code></td>
    <td>Indicates the certificate that needs to be associated with the instance.</td>
</tr>
<tr id="parameter-CertificateRotationRestart">
    <td><CopyableCode code="CertificateRotationRestart" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate. By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted. Set this parameter only if you are not using SSL/TLS to connect to the DB instance. If you are using SSL/TLS to connect to the DB instance, see Updating Your Amazon DocumentDB TLS Certificates and Encrypting Data in Transit in the Amazon DocumentDB Developer Guide.</td>
</tr>
<tr id="parameter-CopyTagsToSnapshot">
    <td><CopyableCode code="CopyTagsToSnapshot" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</td>
</tr>
<tr id="parameter-DBInstanceClass">
    <td><CopyableCode code="DBInstanceClass" /></td>
    <td><code>string</code></td>
    <td>The new compute and memory capacity of the instance; for example, db.r5.large. Not all instance classes are available in all Amazon Web Services Regions. If you modify the instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless ApplyImmediately is specified as true for this request. Default: Uses existing setting.</td>
</tr>
<tr id="parameter-DBInstanceIdentifier">
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The user-provided instance identifier. If this parameter is specified, information from only the specific instance is returned. This parameter isn't case sensitive. Constraints: If provided, must match the identifier of an existing DBInstance.</td>
</tr>
<tr id="parameter-EnablePerformanceInsights">
    <td><CopyableCode code="EnablePerformanceInsights" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates whether to enable Performance Insights for the DB Instance. For more information, see Using Amazon Performance Insights.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The name of the database engine to be used for this instance. Valid value: docdb</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more instances to describe. Supported filters: db-cluster-id - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list includes only the information about the instances that are associated with the clusters that are identified by these ARNs. db-instance-id - Accepts instance identifiers and instance ARNs. The results list includes only the information about the instances that are identified by these ARNs.</td>
</tr>
<tr id="parameter-ForceFailover">
    <td><CopyableCode code="ForceFailover" /></td>
    <td><code>boolean</code></td>
    <td>When true, the reboot is conducted through a Multi-AZ failover. Constraint: You can't specify true if the instance is not configured for Multi-AZ.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token (marker) is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-NewDBInstanceIdentifier">
    <td><CopyableCode code="NewDBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The new instance identifier for the instance when renaming an instance. When you change the instance identifier, an instance reboot occurs immediately if you set Apply Immediately to true. It occurs during the next maintenance window if you set Apply Immediately to false. This value is stored as a lowercase string. Constraints: Must contain from 1 to 63 letters, numbers, or hyphens. The first character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens. Example: mydbinstance</td>
</tr>
<tr id="parameter-PerformanceInsightsKMSKeyId">
    <td><CopyableCode code="PerformanceInsightsKMSKeyId" /></td>
    <td><code>string</code></td>
    <td>The KMS key identifier for encryption of Performance Insights data. The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services region.</td>
</tr>
<tr id="parameter-PreferredMaintenanceWindow">
    <td><CopyableCode code="PreferredMaintenanceWindow" /></td>
    <td><code>string</code></td>
    <td>The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, changing this parameter causes a reboot of the instance. If you are moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure that pending changes are applied. Default: Uses existing setting. Format: ddd:hh24:mi-ddd:hh24:mi Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Must be at least 30 minutes.</td>
</tr>
<tr id="parameter-PromotionTier">
    <td><CopyableCode code="PromotionTier" /></td>
    <td><code>integer</code></td>
    <td>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance. Default: 1 Valid values: 0-15</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to be assigned to the instance. You can assign up to 10 tags to an instance.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_instances"
    values={[
        { label: 'describe_db_instances', value: 'describe_db_instances' }
    ]}
>
<TabItem value="describe_db_instances">

Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.

```sql
SELECT
auto_minor_version_upgrade,
availability_zone,
backup_retention_period,
ca_certificate_identifier,
certificate_details,
copy_tags_to_snapshot,
db_cluster_identifier,
db_instance_arn,
db_instance_class,
db_instance_identifier,
db_instance_status,
db_subnet_group,
dbi_resource_id,
enabled_cloudwatch_logs_exports,
endpoint,
engine,
engine_version,
instance_create_time,
kms_key_id,
latest_restorable_time,
pending_modified_values,
performance_insights_enabled,
performance_insights_kms_key_id,
preferred_backup_window,
preferred_maintenance_window,
promotion_tier,
publicly_accessible,
status_infos,
storage_encrypted,
vpc_security_groups
FROM aws.docdb.db_instances
WHERE region = '{{ region }}' -- required
AND DBInstanceIdentifier = '{{ DBInstanceIdentifier }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
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

Creates a new instance.

```sql
INSERT INTO aws.docdb.db_instances (
DBInstanceIdentifier,
DBInstanceClass,
DBClusterIdentifier,
region,
Engine,
AvailabilityZone,
PreferredMaintenanceWindow,
AutoMinorVersionUpgrade,
Tags,
CopyTagsToSnapshot,
PromotionTier,
EnablePerformanceInsights,
PerformanceInsightsKMSKeyId,
CACertificateIdentifier
)
SELECT 
'{{ DBInstanceIdentifier }}',
'{{ DBInstanceClass }}',
'{{ DBClusterIdentifier }}',
'{{ region }}',
'{{ Engine }}',
'{{ AvailabilityZone }}',
'{{ PreferredMaintenanceWindow }}',
'{{ AutoMinorVersionUpgrade }}',
'{{ Tags }}',
'{{ CopyTagsToSnapshot }}',
'{{ PromotionTier }}',
'{{ EnablePerformanceInsights }}',
'{{ PerformanceInsightsKMSKeyId }}',
'{{ CACertificateIdentifier }}'
RETURNING
auto_minor_version_upgrade,
availability_zone,
backup_retention_period,
ca_certificate_identifier,
certificate_details,
copy_tags_to_snapshot,
db_cluster_identifier,
db_instance_arn,
db_instance_class,
db_instance_identifier,
db_instance_status,
db_subnet_group,
dbi_resource_id,
enabled_cloudwatch_logs_exports,
endpoint,
engine,
engine_version,
instance_create_time,
kms_key_id,
latest_restorable_time,
pending_modified_values,
performance_insights_enabled,
performance_insights_kms_key_id,
preferred_backup_window,
preferred_maintenance_window,
promotion_tier,
publicly_accessible,
status_infos,
storage_encrypted,
vpc_security_groups
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_instances
  props:
    - name: DBInstanceIdentifier
      value: "{{ DBInstanceIdentifier }}"
      description: Required parameter for the db_instances resource.
    - name: DBInstanceClass
      value: "{{ DBInstanceClass }}"
      description: Required parameter for the db_instances resource.
    - name: DBClusterIdentifier
      value: "{{ DBClusterIdentifier }}"
      description: Required parameter for the db_instances resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_instances resource.
    - name: Engine
      value: "{{ Engine }}"
      description: The name of the database engine to be used for this instance. Valid value: docdb
      description: The name of the database engine to be used for this instance. Valid value: docdb
    - name: AvailabilityZone
      value: "{{ AvailabilityZone }}"
      description: The Amazon EC2 Availability Zone that the instance is created in. Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region. Example: us-east-1d
      description: The Amazon EC2 Availability Zone that the instance is created in. Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region. Example: us-east-1d
    - name: PreferredMaintenanceWindow
      value: "{{ PreferredMaintenanceWindow }}"
      description: The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Minimum 30-minute window.
      description: The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Minimum 30-minute window.
    - name: AutoMinorVersionUpgrade
      value: {{ AutoMinorVersionUpgrade }}
      description: This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set. Default: false
      description: This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set. Default: false
    - name: Tags
      value: "{{ Tags }}"
      description: The tags to be assigned to the instance. You can assign up to 10 tags to an instance.
      description: The tags to be assigned to the instance. You can assign up to 10 tags to an instance.
    - name: CopyTagsToSnapshot
      value: {{ CopyTagsToSnapshot }}
      description: A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
      description: A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
    - name: PromotionTier
      value: {{ PromotionTier }}
      description: A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance. Default: 1 Valid values: 0-15
      description: A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance. Default: 1 Valid values: 0-15
    - name: EnablePerformanceInsights
      value: {{ EnablePerformanceInsights }}
      description: A value that indicates whether to enable Performance Insights for the DB Instance. For more information, see Using Amazon Performance Insights.
      description: A value that indicates whether to enable Performance Insights for the DB Instance. For more information, see Using Amazon Performance Insights.
    - name: PerformanceInsightsKMSKeyId
      value: "{{ PerformanceInsightsKMSKeyId }}"
      description: The KMS key identifier for encryption of Performance Insights data. The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services region.
      description: The KMS key identifier for encryption of Performance Insights data. The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services region.
    - name: CACertificateIdentifier
      value: "{{ CACertificateIdentifier }}"
      description: The CA certificate identifier to use for the DB instance's server certificate. For more information, see Updating Your Amazon DocumentDB TLS Certificates and Encrypting Data in Transit in the Amazon DocumentDB Developer Guide.
      description: The CA certificate identifier to use for the DB instance's server certificate. For more information, see Updating Your Amazon DocumentDB TLS Certificates and Encrypting Data in Transit in the Amazon DocumentDB Developer Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_db_instance"
    values={[
        { label: 'modify_db_instance', value: 'modify_db_instance' }
    ]}
>
<TabItem value="modify_db_instance">

Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

```sql
UPDATE aws.docdb.db_instances
SET 
-- No updatable properties
WHERE 
DBInstanceIdentifier = '{{ DBInstanceIdentifier }}' --required
AND region = '{{ region }}' --required
AND DBInstanceClass = '{{ DBInstanceClass}}'
AND ApplyImmediately = {{ ApplyImmediately}}
AND PreferredMaintenanceWindow = '{{ PreferredMaintenanceWindow}}'
AND AutoMinorVersionUpgrade = {{ AutoMinorVersionUpgrade}}
AND NewDBInstanceIdentifier = '{{ NewDBInstanceIdentifier}}'
AND CACertificateIdentifier = '{{ CACertificateIdentifier}}'
AND CopyTagsToSnapshot = {{ CopyTagsToSnapshot}}
AND PromotionTier = '{{ PromotionTier}}'
AND EnablePerformanceInsights = {{ EnablePerformanceInsights}}
AND PerformanceInsightsKMSKeyId = '{{ PerformanceInsightsKMSKeyId}}'
AND CertificateRotationRestart = {{ CertificateRotationRestart}}
RETURNING
auto_minor_version_upgrade,
availability_zone,
backup_retention_period,
ca_certificate_identifier,
certificate_details,
copy_tags_to_snapshot,
db_cluster_identifier,
db_instance_arn,
db_instance_class,
db_instance_identifier,
db_instance_status,
db_subnet_group,
dbi_resource_id,
enabled_cloudwatch_logs_exports,
endpoint,
engine,
engine_version,
instance_create_time,
kms_key_id,
latest_restorable_time,
pending_modified_values,
performance_insights_enabled,
performance_insights_kms_key_id,
preferred_backup_window,
preferred_maintenance_window,
promotion_tier,
publicly_accessible,
status_infos,
storage_encrypted,
vpc_security_groups;
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

Deletes a previously provisioned instance.

```sql
DELETE FROM aws.docdb.db_instances
WHERE DBInstanceIdentifier = '{{ DBInstanceIdentifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reboot_db_instance"
    values={[
        { label: 'reboot_db_instance', value: 'reboot_db_instance' }
    ]}
>
<TabItem value="reboot_db_instance">

You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to rebooting.

```sql
EXEC aws.docdb.db_instances.reboot_db_instance 
@DBInstanceIdentifier='{{ DBInstanceIdentifier }}' --required, 
@region='{{ region }}' --required, 
@ForceFailover={{ ForceFailover }}
;
```
</TabItem>
</Tabs>
