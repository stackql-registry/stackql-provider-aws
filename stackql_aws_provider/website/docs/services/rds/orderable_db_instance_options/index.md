--- 
title: orderable_db_instance_options
hide_title: false
hide_table_of_contents: false
keywords:
  - orderable_db_instance_options
  - rds
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

Creates, updates, deletes, gets or lists an <code>orderable_db_instance_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="orderable_db_instance_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.orderable_db_instance_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_orderable_db_instance_options"
    values={[
        { label: 'describe_orderable_db_instance_options', value: 'describe_orderable_db_instance_options' }
    ]}
>
<TabItem value="describe_orderable_db_instance_options">

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
    <td><CopyableCode code="AvailabilityZoneGroup" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone group for a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZones" /></td>
    <td><code>string</code></td>
    <td>A list of Availability Zones for a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailableAdditionalStorageVolumesOptions" /></td>
    <td><code>string</code></td>
    <td>The available options for additional storage volumes for the DB instance class.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailableProcessorFeatures" /></td>
    <td><code>string</code></td>
    <td>A list of the available processor features for the DB instance class of a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="DBInstanceClass" /></td>
    <td><code>string</code></td>
    <td>The DB instance class for a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The engine type of a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The engine version of a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseModel" /></td>
    <td><code>string</code></td>
    <td>The license model for a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxIopsPerDbInstance" /></td>
    <td><code>integer</code></td>
    <td>Maximum total provisioned IOPS for a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxIopsPerGib" /></td>
    <td><code>number</code></td>
    <td>Maximum provisioned IOPS per GiB for a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxStorageSize" /></td>
    <td><code>integer</code></td>
    <td>Maximum storage size for a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxStorageThroughputPerDbInstance" /></td>
    <td><code>integer</code></td>
    <td>Maximum storage throughput for a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxStorageThroughputPerIops" /></td>
    <td><code>number</code></td>
    <td>Maximum storage throughput to provisioned IOPS ratio for a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MinIopsPerDbInstance" /></td>
    <td><code>integer</code></td>
    <td>Minimum total provisioned IOPS for a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MinIopsPerGib" /></td>
    <td><code>number</code></td>
    <td>Minimum provisioned IOPS per GiB for a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MinStorageSize" /></td>
    <td><code>integer</code></td>
    <td>Minimum storage size for a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MinStorageThroughputPerDbInstance" /></td>
    <td><code>integer</code></td>
    <td>Minimum storage throughput for a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MinStorageThroughputPerIops" /></td>
    <td><code>number</code></td>
    <td>Minimum storage throughput to provisioned IOPS ratio for a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MultiAZCapable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a DB instance is Multi-AZ capable.</td>
</tr>
<tr>
    <td><CopyableCode code="OutpostCapable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a DB instance supports RDS on Outposts. For more information about RDS on Outposts, see Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ReadReplicaCapable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a DB instance can have a read replica.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageType" /></td>
    <td><code>string</code></td>
    <td>The storage type for a DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedActivityStreamModes" /></td>
    <td><code>string</code></td>
    <td>The list of supported modes for Database Activity Streams. Aurora PostgreSQL returns the value &#91;sync, async&#93;. Aurora MySQL and RDS for Oracle return &#91;async&#93; only. If Database Activity Streams isn't supported, the return value is an empty list.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedEngineModes" /></td>
    <td><code>string</code></td>
    <td>A list of the supported DB engine modes.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedNetworkTypes" /></td>
    <td><code>string</code></td>
    <td>The network types supported by the DB instance (IPV4 or DUAL). A DB instance can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see Working with a DB instance in a VPC in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportsAdditionalStorageVolumes" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB instance class supports additional storage volumes.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportsClusters" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether DB instances can be configured as a Multi-AZ DB cluster. For more information on Multi-AZ DB clusters, see Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportsDedicatedLogVolume" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a DB instance supports using a dedicated log volume (DLV).</td>
</tr>
<tr>
    <td><CopyableCode code="SupportsEnhancedMonitoring" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a DB instance supports Enhanced Monitoring at intervals from 1 to 60 seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportsGlobalDatabases" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether you can use Aurora global databases with a specific combination of other DB engine attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportsHttpEndpoint" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a DB instance supports HTTP endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportsIAMDatabaseAuthentication" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a DB instance supports IAM database authentication.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportsIops" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a DB instance supports provisioned IOPS.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportsKerberosAuthentication" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a DB instance supports Kerberos Authentication.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportsPerformanceInsights" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a DB instance supports Performance Insights.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportsStorageAutoscaling" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Amazon RDS can automatically scale storage for DB instances that use the specified DB instance class.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportsStorageEncryption" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a DB instance supports encrypted storage.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportsStorageThroughput" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a DB instance supports storage throughput.</td>
</tr>
<tr>
    <td><CopyableCode code="Vpc" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a DB instance is in a VPC.</td>
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
    <td><a href="#describe_orderable_db_instance_options"><CopyableCode code="describe_orderable_db_instance_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-DBInstanceClass"><code>DBInstanceClass</code></a>, <a href="#parameter-LicenseModel"><code>LicenseModel</code></a>, <a href="#parameter-AvailabilityZoneGroup"><code>AvailabilityZoneGroup</code></a>, <a href="#parameter-Vpc"><code>Vpc</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Describes the orderable DB instance options for a specified DB engine.</td>
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
<tr id="parameter-AvailabilityZoneGroup">
    <td><CopyableCode code="AvailabilityZoneGroup" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone group associated with a Local Zone. Specify this parameter to retrieve available options for the Local Zones in the group. Omit this parameter to show the available options in the specified Amazon Web Services Region. This setting doesn't apply to RDS Custom DB instances.</td>
</tr>
<tr id="parameter-DBInstanceClass">
    <td><CopyableCode code="DBInstanceClass" /></td>
    <td><code>string</code></td>
    <td>A filter to include only the available options for the specified DB instance class.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The name of the database engine to describe DB instance options for. Valid Values: aurora-mysql aurora-postgresql custom-oracle-ee custom-oracle-ee-cdb custom-oracle-se2 custom-oracle-se2-cdb db2-ae db2-se mariadb mysql oracle-ee oracle-ee-cdb oracle-se2 oracle-se2-cdb postgres sqlserver-ee sqlserver-se sqlserver-ex sqlserver-web</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>A filter to include only the available options for the specified engine version.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter isn't currently supported.</td>
</tr>
<tr id="parameter-LicenseModel">
    <td><CopyableCode code="LicenseModel" /></td>
    <td><code>string</code></td>
    <td>A filter to include only the available options for the specified license model. RDS Custom supports only the BYOL licensing model.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 1000.</td>
</tr>
<tr id="parameter-Vpc">
    <td><CopyableCode code="Vpc" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to show only VPC or non-VPC offerings. RDS Custom supports only VPC offerings. RDS Custom supports only VPC offerings. If you describe non-VPC offerings for RDS Custom, the output shows VPC offerings.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_orderable_db_instance_options"
    values={[
        { label: 'describe_orderable_db_instance_options', value: 'describe_orderable_db_instance_options' }
    ]}
>
<TabItem value="describe_orderable_db_instance_options">

Describes the orderable DB instance options for a specified DB engine.

```sql
SELECT
AvailabilityZoneGroup,
AvailabilityZones,
AvailableAdditionalStorageVolumesOptions,
AvailableProcessorFeatures,
DBInstanceClass,
Engine,
EngineVersion,
LicenseModel,
MaxIopsPerDbInstance,
MaxIopsPerGib,
MaxStorageSize,
MaxStorageThroughputPerDbInstance,
MaxStorageThroughputPerIops,
MinIopsPerDbInstance,
MinIopsPerGib,
MinStorageSize,
MinStorageThroughputPerDbInstance,
MinStorageThroughputPerIops,
MultiAZCapable,
OutpostCapable,
ReadReplicaCapable,
StorageType,
SupportedActivityStreamModes,
SupportedEngineModes,
SupportedNetworkTypes,
SupportsAdditionalStorageVolumes,
SupportsClusters,
SupportsDedicatedLogVolume,
SupportsEnhancedMonitoring,
SupportsGlobalDatabases,
SupportsHttpEndpoint,
SupportsIAMDatabaseAuthentication,
SupportsIops,
SupportsKerberosAuthentication,
SupportsPerformanceInsights,
SupportsStorageAutoscaling,
SupportsStorageEncryption,
SupportsStorageThroughput,
Vpc
FROM aws.rds.orderable_db_instance_options
WHERE region = '{{ region }}' -- required
AND Engine = '{{ Engine }}'
AND EngineVersion = '{{ EngineVersion }}'
AND DBInstanceClass = '{{ DBInstanceClass }}'
AND LicenseModel = '{{ LicenseModel }}'
AND AvailabilityZoneGroup = '{{ AvailabilityZoneGroup }}'
AND Vpc = '{{ Vpc }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
