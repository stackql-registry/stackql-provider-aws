--- 
title: db_engine_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - db_engine_versions
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

Creates, updates, deletes, gets or lists a <code>db_engine_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_engine_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_engine_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_engine_versions"
    values={[
        { label: 'describe_db_engine_versions', value: 'describe_db_engine_versions' }
    ]}
>
<TabItem value="describe_db_engine_versions">

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
    <td><CopyableCode code="create_time" /></td>
    <td><code>string</code></td>
    <td>The creation time of the DB engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_db_engine_version_manifest" /></td>
    <td><code>string</code></td>
    <td>JSON string that lists the installation files and parameters that RDS Custom uses to create a custom engine version (CEV). RDS Custom applies the patches in the order in which they're listed in the manifest. You can set the Oracle home, Oracle base, and UNIX/Linux user and group using the installation parameters. For more information, see JSON fields in the CEV manifest in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="db_engine_description" /></td>
    <td><code>string</code></td>
    <td>The description of the database engine.</td>
</tr>
<tr>
    <td><CopyableCode code="db_engine_media_type" /></td>
    <td><code>string</code></td>
    <td>A value that indicates the source media provider of the AMI based on the usage operation. Applicable for RDS Custom for SQL Server.</td>
</tr>
<tr>
    <td><CopyableCode code="db_engine_version_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the custom engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="db_engine_version_description" /></td>
    <td><code>string</code></td>
    <td>The description of the database engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="db_parameter_group_family" /></td>
    <td><code>string</code></td>
    <td>The name of the DB parameter group family for the database engine.</td>
</tr>
<tr>
    <td><CopyableCode code="database_installation_files" /></td>
    <td><code>string</code></td>
    <td>The database installation files (ISO and EXE) uploaded to Amazon S3 for your database engine version to import to Amazon RDS. Required for sqlserver-dev-ee.</td>
</tr>
<tr>
    <td><CopyableCode code="database_installation_files_s3_bucket_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon S3 bucket that contains your database installation files.</td>
</tr>
<tr>
    <td><CopyableCode code="database_installation_files_s3_prefix" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 directory that contains the database installation files. If not specified, then no prefix is assumed.</td>
</tr>
<tr>
    <td><CopyableCode code="default_character_set" /></td>
    <td><code>string</code></td>
    <td>The default character set for new instances of this engine version, if the CharacterSetName parameter of the CreateDBInstance API isn't specified.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The name of the database engine.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>The version number of the database engine.</td>
</tr>
<tr>
    <td><CopyableCode code="exportable_log_types" /></td>
    <td><code>string</code></td>
    <td>The types of logs that the database engine has available for export to CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason that the custom engine version creation for sqlserver-dev-ee failed with an incompatible-installation-media status.</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>string</code></td>
    <td>The EC2 image</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key identifier for an encrypted CEV. This parameter is required for RDS Custom, but optional for Amazon RDS.</td>
</tr>
<tr>
    <td><CopyableCode code="major_engine_version" /></td>
    <td><code>string</code></td>
    <td>The major engine version of the CEV.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_v2_features_support" /></td>
    <td><code>string</code></td>
    <td>Specifies any Aurora Serverless v2 properties or limits that differ between Aurora engine versions. You can test the values of this attribute when deciding which Aurora version to use in a new or upgraded DB cluster. You can also retrieve the version of an existing DB cluster and check whether that version supports certain Aurora Serverless v2 features before you attempt to use those features.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the DB engine version, either available or deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_ca_certificate_identifiers" /></td>
    <td><code>string</code></td>
    <td>A list of the supported CA certificate identifiers. For more information, see Using SSL/TLS to encrypt a connection to a DB instance in the Amazon RDS User Guide and Using SSL/TLS to encrypt a connection to a DB cluster in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_character_sets" /></td>
    <td><code>string</code></td>
    <td>A list of the character sets supported by this engine for the CharacterSetName parameter of the CreateDBInstance operation.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_engine_modes" /></td>
    <td><code>string</code></td>
    <td>A list of the supported DB engine modes.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_feature_names" /></td>
    <td><code>string</code></td>
    <td>A list of features supported by the DB engine. The supported features vary by DB engine and DB engine version. To determine the supported features for a specific DB engine and DB engine version using the CLI, use the following command: aws rds describe-db-engine-versions --engine <code>&lt;engine_name&gt;</code> --engine-version <code>&lt;engine_version&gt;</code> For example, to determine the supported features for RDS for PostgreSQL version 13.3 using the CLI, use the following command: aws rds describe-db-engine-versions --engine postgres --engine-version 13.3 The supported features are listed under SupportedFeatureNames in the output.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_nchar_character_sets" /></td>
    <td><code>string</code></td>
    <td>A list of the character sets supported by the Oracle DB engine for the NcharCharacterSetName parameter of the CreateDBInstance operation.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_timezones" /></td>
    <td><code>string</code></td>
    <td>A list of the time zones supported by this engine for the Timezone parameter of the CreateDBInstance action.</td>
</tr>
<tr>
    <td><CopyableCode code="supports_babelfish" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the engine version supports Babelfish for Aurora PostgreSQL.</td>
</tr>
<tr>
    <td><CopyableCode code="supports_certificate_rotation_without_restart" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the engine version supports rotating the server certificate without rebooting the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="supports_global_databases" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether you can use Aurora global databases with a specific DB engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="supports_integrations" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB engine version supports zero-ETL integrations with Amazon Redshift.</td>
</tr>
<tr>
    <td><CopyableCode code="supports_limitless_database" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB engine version supports Aurora Limitless Database.</td>
</tr>
<tr>
    <td><CopyableCode code="supports_local_write_forwarding" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB engine version supports forwarding write operations from reader DB instances to the writer DB instance in the DB cluster. By default, write operations aren't allowed on reader DB instances. Valid for: Aurora DB clusters only</td>
</tr>
<tr>
    <td><CopyableCode code="supports_log_exports_to_cloudwatch_logs" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the engine version supports exporting the log types specified by ExportableLogTypes to CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="supports_parallel_query" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether you can use Aurora parallel query with a specific DB engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="supports_read_replica" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the database engine version supports read replicas.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_list" /></td>
    <td><code>string</code></td>
    <td>A list of tags. For more information, see Tagging Amazon RDS resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS resources in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="valid_upgrade_target" /></td>
    <td><code>string</code></td>
    <td>A list of engine versions that this database engine version can be upgraded to.</td>
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
    <td><a href="#describe_db_engine_versions"><CopyableCode code="describe_db_engine_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-DBParameterGroupFamily"><code>DBParameterGroupFamily</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-DefaultOnly"><code>DefaultOnly</code></a>, <a href="#parameter-ListSupportedCharacterSets"><code>ListSupportedCharacterSets</code></a>, <a href="#parameter-ListSupportedTimezones"><code>ListSupportedTimezones</code></a>, <a href="#parameter-IncludeAll"><code>IncludeAll</code></a></td>
    <td>Describes the properties of specific versions of DB engines.</td>
</tr>
<tr>
    <td><a href="#create_custom_db_engine_version"><CopyableCode code="create_custom_db_engine_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-DatabaseInstallationFilesS3BucketName"><code>DatabaseInstallationFilesS3BucketName</code></a>, <a href="#parameter-DatabaseInstallationFilesS3Prefix"><code>DatabaseInstallationFilesS3Prefix</code></a>, <a href="#parameter-DatabaseInstallationFiles"><code>DatabaseInstallationFiles</code></a>, <a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-KMSKeyId"><code>KMSKeyId</code></a>, <a href="#parameter-SourceCustomDbEngineVersionIdentifier"><code>SourceCustomDbEngineVersionIdentifier</code></a>, <a href="#parameter-UseAwsProvidedLatestImage"><code>UseAwsProvidedLatestImage</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Manifest"><code>Manifest</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a custom DB engine version (CEV).</td>
</tr>
<tr>
    <td><a href="#modify_custom_db_engine_version"><CopyableCode code="modify_custom_db_engine_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Status"><code>Status</code></a></td>
    <td>Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling DescribeDBEngineVersions. The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the ModifyCustomDbEngineVersion event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the ModifyCustomDbEngineVersion event. For more information, see Modifying CEV status in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_custom_db_engine_version"><CopyableCode code="delete_custom_db_engine_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Engine"><code>Engine</code></a></td>
    <td>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites: The CEV must not be the default for RDS Custom. If it is, change the default before running this command. The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot, or automated backup of your RDS Custom instance. Typically, deletion takes a few minutes. The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the DeleteCustomDbEngineVersion event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the DeleteCustomDbEngineVersion event. For more information, see Deleting a CEV in the Amazon RDS User Guide.</td>
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
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The custom engine version (CEV) for your DB instance. This option is required for RDS Custom, but optional for Amazon RDS. The combination of Engine and EngineVersion is unique per customer per Amazon Web Services Region.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DBParameterGroupFamily">
    <td><CopyableCode code="DBParameterGroupFamily" /></td>
    <td><code>string</code></td>
    <td>The name of a specific DB parameter group family to return details for. Constraints: If supplied, must match an existing DB parameter group family.</td>
</tr>
<tr id="parameter-DatabaseInstallationFiles">
    <td><CopyableCode code="DatabaseInstallationFiles" /></td>
    <td><code>array</code></td>
    <td>The database installation files (ISO and EXE) uploaded to Amazon S3 for your database engine version to import to Amazon RDS.</td>
</tr>
<tr id="parameter-DatabaseInstallationFilesS3BucketName">
    <td><CopyableCode code="DatabaseInstallationFilesS3BucketName" /></td>
    <td><code>string</code></td>
    <td>The name of an Amazon S3 bucket that contains database installation files for your CEV. For example, a valid bucket name is my-custom-installation-files.</td>
</tr>
<tr id="parameter-DatabaseInstallationFilesS3Prefix">
    <td><CopyableCode code="DatabaseInstallationFilesS3Prefix" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 directory that contains the database installation files for your CEV. For example, a valid bucket name is 123456789012/cev1. If this setting isn't specified, no prefix is assumed.</td>
</tr>
<tr id="parameter-DefaultOnly">
    <td><CopyableCode code="DefaultOnly" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to return only the default version of the specified engine or the engine and major version combination.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>An optional description of your CEV.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The database engine. RDS Custom for Oracle supports the following values: custom-oracle-ee custom-oracle-ee-cdb custom-oracle-se2 custom-oracle-se2-cdb RDS Custom for SQL Server supports the following values: custom-sqlserver-ee custom-sqlserver-se ccustom-sqlserver-web custom-sqlserver-dev RDS for SQL Server supports only sqlserver-dev-ee.</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>A specific database engine version to return details for. Example: 5.1.49</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more DB engine versions to describe. Supported filters: db-parameter-group-family - Accepts parameter groups family names. The results list only includes information about the DB engine versions for these parameter group families. engine - Accepts engine names. The results list only includes information about the DB engine versions for these engines. engine-mode - Accepts DB engine modes. The results list only includes information about the DB engine versions for these engine modes. Valid DB engine modes are the following: global multimaster parallelquery provisioned serverless engine-version - Accepts engine versions. The results list only includes information about the DB engine versions for these engine versions. status - Accepts engine version statuses. The results list only includes information about the DB engine versions for these statuses. Valid statuses are the following: available deprecated</td>
</tr>
<tr id="parameter-ImageId">
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Machine Image (AMI). For RDS Custom for SQL Server, an AMI ID is required to create a CEV. For RDS Custom for Oracle, the default is the most recent AMI available, but you can specify an AMI ID that was used in a different Oracle CEV. Find the AMIs used by your CEVs by calling the DescribeDBEngineVersions operation.</td>
</tr>
<tr id="parameter-IncludeAll">
    <td><CopyableCode code="IncludeAll" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to also list the engine versions that aren't available. The default is to list only available engine versions.</td>
</tr>
<tr id="parameter-KMSKeyId">
    <td><CopyableCode code="KMSKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key identifier for an encrypted CEV. A symmetric encryption KMS key is required for RDS Custom, but optional for Amazon RDS. If you have an existing symmetric encryption KMS key in your account, you can use it with RDS Custom. No further action is necessary. If you don't already have a symmetric encryption KMS key in your account, follow the instructions in Creating a symmetric encryption KMS key in the Amazon Web Services Key Management Service Developer Guide. You can choose the same symmetric encryption key when you create a CEV and a DB instance, or choose different keys.</td>
</tr>
<tr id="parameter-ListSupportedCharacterSets">
    <td><CopyableCode code="ListSupportedCharacterSets" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to list the supported character sets for each engine version. If this parameter is enabled and the requested engine supports the CharacterSetName parameter for CreateDBInstance, the response includes a list of supported character sets for each engine version. For RDS Custom, the default is not to list supported character sets. If you enable this parameter, RDS Custom returns no results.</td>
</tr>
<tr id="parameter-ListSupportedTimezones">
    <td><CopyableCode code="ListSupportedTimezones" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to list the supported time zones for each engine version. If this parameter is enabled and the requested engine supports the TimeZone parameter for CreateDBInstance, the response includes a list of supported time zones for each engine version. For RDS Custom, the default is not to list supported time zones. If you enable this parameter, RDS Custom returns no results.</td>
</tr>
<tr id="parameter-Manifest">
    <td><CopyableCode code="Manifest" /></td>
    <td><code>string</code></td>
    <td>The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed. The following JSON fields are valid: MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. databaseInstallationFileNames Ordered list of installation files for the CEV. opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. psuRuPatchFileNames The PSU and RU patches for this CEV. OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches. For more information, see Creating the CEV manifest in the Amazon RDS User Guide.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more than the MaxRecords value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-SourceCustomDbEngineVersionIdentifier">
    <td><CopyableCode code="SourceCustomDbEngineVersionIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ARN of a CEV to use as a source for creating a new CEV. You can specify a different Amazon Machine Imagine (AMI) by using either Source or UseAwsProvidedLatestImage. You can't specify a different JSON manifest when you specify SourceCustomDbEngineVersionIdentifier.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The availability status to be assigned to the CEV. Valid values are as follows: available You can use this CEV to create a new RDS Custom DB instance. inactive You can create a new RDS Custom instance by restoring a DB snapshot with this CEV. You can't patch or create new instances with this CEV. You can change any status to any status. A typical reason to change status is to prevent the accidental use of a CEV, or to make a deprecated CEV eligible for use again. For example, you might change the status of your CEV from available to inactive, and from inactive back to available. To change the availability status of the CEV, it must not currently be in use by an RDS Custom instance, snapshot, or automated backup.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr id="parameter-UseAwsProvidedLatestImage">
    <td><CopyableCode code="UseAwsProvidedLatestImage" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV. If you specify UseAwsProvidedLatestImage, you can't also specify ImageId.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_engine_versions"
    values={[
        { label: 'describe_db_engine_versions', value: 'describe_db_engine_versions' }
    ]}
>
<TabItem value="describe_db_engine_versions">

Describes the properties of specific versions of DB engines.

```sql
SELECT
create_time,
custom_db_engine_version_manifest,
db_engine_description,
db_engine_media_type,
db_engine_version_arn,
db_engine_version_description,
db_parameter_group_family,
database_installation_files,
database_installation_files_s3_bucket_name,
database_installation_files_s3_prefix,
default_character_set,
engine,
engine_version,
exportable_log_types,
failure_reason,
image,
kms_key_id,
major_engine_version,
serverless_v2_features_support,
status,
supported_ca_certificate_identifiers,
supported_character_sets,
supported_engine_modes,
supported_feature_names,
supported_nchar_character_sets,
supported_timezones,
supports_babelfish,
supports_certificate_rotation_without_restart,
supports_global_databases,
supports_integrations,
supports_limitless_database,
supports_local_write_forwarding,
supports_log_exports_to_cloudwatch_logs,
supports_parallel_query,
supports_read_replica,
tag_list,
valid_upgrade_target
FROM aws.rds.db_engine_versions
WHERE region = '{{ region }}' -- required
AND Engine = '{{ Engine }}'
AND EngineVersion = '{{ EngineVersion }}'
AND DBParameterGroupFamily = '{{ DBParameterGroupFamily }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND DefaultOnly = '{{ DefaultOnly }}'
AND ListSupportedCharacterSets = '{{ ListSupportedCharacterSets }}'
AND ListSupportedTimezones = '{{ ListSupportedTimezones }}'
AND IncludeAll = '{{ IncludeAll }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_db_engine_version"
    values={[
        { label: 'create_custom_db_engine_version', value: 'create_custom_db_engine_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_db_engine_version">

Creates a custom DB engine version (CEV).

```sql
INSERT INTO aws.rds.db_engine_versions (
EngineVersion,
region,
Engine,
DatabaseInstallationFilesS3BucketName,
DatabaseInstallationFilesS3Prefix,
DatabaseInstallationFiles,
ImageId,
KMSKeyId,
SourceCustomDbEngineVersionIdentifier,
UseAwsProvidedLatestImage,
Description,
Manifest,
Tags
)
SELECT 
'{{ EngineVersion }}',
'{{ region }}',
'{{ Engine }}',
'{{ DatabaseInstallationFilesS3BucketName }}',
'{{ DatabaseInstallationFilesS3Prefix }}',
'{{ DatabaseInstallationFiles }}',
'{{ ImageId }}',
'{{ KMSKeyId }}',
'{{ SourceCustomDbEngineVersionIdentifier }}',
'{{ UseAwsProvidedLatestImage }}',
'{{ Description }}',
'{{ Manifest }}',
'{{ Tags }}'
RETURNING
create_time,
custom_db_engine_version_manifest,
db_engine_description,
db_engine_media_type,
db_engine_version_arn,
db_engine_version_description,
db_parameter_group_family,
database_installation_files,
database_installation_files_s3_bucket_name,
database_installation_files_s3_prefix,
default_character_set,
engine,
engine_version,
exportable_log_types,
failure_reason,
image,
kms_key_id,
major_engine_version,
serverless_v2_features_support,
status,
supported_ca_certificate_identifiers,
supported_character_sets,
supported_engine_modes,
supported_feature_names,
supported_nchar_character_sets,
supported_timezones,
supports_babelfish,
supports_certificate_rotation_without_restart,
supports_global_databases,
supports_integrations,
supports_limitless_database,
supports_local_write_forwarding,
supports_log_exports_to_cloudwatch_logs,
supports_parallel_query,
supports_read_replica,
tag_list,
valid_upgrade_target
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_engine_versions
  props:
    - name: EngineVersion
      value: "{{ EngineVersion }}"
      description: Required parameter for the db_engine_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_engine_versions resource.
    - name: Engine
      value: "{{ Engine }}"
      description: The database engine. RDS Custom for Oracle supports the following values: custom-oracle-ee custom-oracle-ee-cdb custom-oracle-se2 custom-oracle-se2-cdb RDS Custom for SQL Server supports the following values: custom-sqlserver-ee custom-sqlserver-se ccustom-sqlserver-web custom-sqlserver-dev RDS for SQL Server supports only sqlserver-dev-ee.
      description: The database engine. RDS Custom for Oracle supports the following values: custom-oracle-ee custom-oracle-ee-cdb custom-oracle-se2 custom-oracle-se2-cdb RDS Custom for SQL Server supports the following values: custom-sqlserver-ee custom-sqlserver-se ccustom-sqlserver-web custom-sqlserver-dev RDS for SQL Server supports only sqlserver-dev-ee.
    - name: DatabaseInstallationFilesS3BucketName
      value: "{{ DatabaseInstallationFilesS3BucketName }}"
      description: The name of an Amazon S3 bucket that contains database installation files for your CEV. For example, a valid bucket name is my-custom-installation-files.
      description: The name of an Amazon S3 bucket that contains database installation files for your CEV. For example, a valid bucket name is my-custom-installation-files.
    - name: DatabaseInstallationFilesS3Prefix
      value: "{{ DatabaseInstallationFilesS3Prefix }}"
      description: The Amazon S3 directory that contains the database installation files for your CEV. For example, a valid bucket name is 123456789012/cev1. If this setting isn't specified, no prefix is assumed.
      description: The Amazon S3 directory that contains the database installation files for your CEV. For example, a valid bucket name is 123456789012/cev1. If this setting isn't specified, no prefix is assumed.
    - name: DatabaseInstallationFiles
      value: "{{ DatabaseInstallationFiles }}"
      description: The database installation files (ISO and EXE) uploaded to Amazon S3 for your database engine version to import to Amazon RDS.
      description: The database installation files (ISO and EXE) uploaded to Amazon S3 for your database engine version to import to Amazon RDS.
    - name: ImageId
      value: "{{ ImageId }}"
      description: The ID of the Amazon Machine Image (AMI). For RDS Custom for SQL Server, an AMI ID is required to create a CEV. For RDS Custom for Oracle, the default is the most recent AMI available, but you can specify an AMI ID that was used in a different Oracle CEV. Find the AMIs used by your CEVs by calling the DescribeDBEngineVersions operation.
      description: The ID of the Amazon Machine Image (AMI). For RDS Custom for SQL Server, an AMI ID is required to create a CEV. For RDS Custom for Oracle, the default is the most recent AMI available, but you can specify an AMI ID that was used in a different Oracle CEV. Find the AMIs used by your CEVs by calling the DescribeDBEngineVersions operation.
    - name: KMSKeyId
      value: "{{ KMSKeyId }}"
      description: The Amazon Web Services KMS key identifier for an encrypted CEV. A symmetric encryption KMS key is required for RDS Custom, but optional for Amazon RDS. If you have an existing symmetric encryption KMS key in your account, you can use it with RDS Custom. No further action is necessary. If you don't already have a symmetric encryption KMS key in your account, follow the instructions in Creating a symmetric encryption KMS key in the Amazon Web Services Key Management Service Developer Guide. You can choose the same symmetric encryption key when you create a CEV and a DB instance, or choose different keys.
      description: The Amazon Web Services KMS key identifier for an encrypted CEV. A symmetric encryption KMS key is required for RDS Custom, but optional for Amazon RDS. If you have an existing symmetric encryption KMS key in your account, you can use it with RDS Custom. No further action is necessary. If you don't already have a symmetric encryption KMS key in your account, follow the instructions in Creating a symmetric encryption KMS key in the Amazon Web Services Key Management Service Developer Guide. You can choose the same symmetric encryption key when you create a CEV and a DB instance, or choose different keys.
    - name: SourceCustomDbEngineVersionIdentifier
      value: "{{ SourceCustomDbEngineVersionIdentifier }}"
      description: The ARN of a CEV to use as a source for creating a new CEV. You can specify a different Amazon Machine Imagine (AMI) by using either Source or UseAwsProvidedLatestImage. You can't specify a different JSON manifest when you specify SourceCustomDbEngineVersionIdentifier.
      description: The ARN of a CEV to use as a source for creating a new CEV. You can specify a different Amazon Machine Imagine (AMI) by using either Source or UseAwsProvidedLatestImage. You can't specify a different JSON manifest when you specify SourceCustomDbEngineVersionIdentifier.
    - name: UseAwsProvidedLatestImage
      value: {{ UseAwsProvidedLatestImage }}
      description: Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV. If you specify UseAwsProvidedLatestImage, you can't also specify ImageId.
      description: Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV. If you specify UseAwsProvidedLatestImage, you can't also specify ImageId.
    - name: Description
      value: "{{ Description }}"
      description: An optional description of your CEV.
      description: An optional description of your CEV.
    - name: Manifest
      value: "{{ Manifest }}"
      description: The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed. The following JSON fields are valid: MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. databaseInstallationFileNames Ordered list of installation files for the CEV. opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. psuRuPatchFileNames The PSU and RU patches for this CEV. OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches. For more information, see Creating the CEV manifest in the Amazon RDS User Guide.
      description: The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed. The following JSON fields are valid: MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. databaseInstallationFileNames Ordered list of installation files for the CEV. opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. psuRuPatchFileNames The PSU and RU patches for this CEV. OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches. For more information, see Creating the CEV manifest in the Amazon RDS User Guide.
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_custom_db_engine_version"
    values={[
        { label: 'modify_custom_db_engine_version', value: 'modify_custom_db_engine_version' }
    ]}
>
<TabItem value="modify_custom_db_engine_version">

Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling DescribeDBEngineVersions. The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the ModifyCustomDbEngineVersion event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the ModifyCustomDbEngineVersion event. For more information, see Modifying CEV status in the Amazon RDS User Guide.

```sql
UPDATE aws.rds.db_engine_versions
SET 
-- No updatable properties
WHERE 
EngineVersion = '{{ EngineVersion }}' --required
AND region = '{{ region }}' --required
AND Engine = '{{ Engine}}'
AND Description = '{{ Description}}'
AND Status = '{{ Status}}'
RETURNING
create_time,
custom_db_engine_version_manifest,
db_engine_description,
db_engine_media_type,
db_engine_version_arn,
db_engine_version_description,
db_parameter_group_family,
database_installation_files,
database_installation_files_s3_bucket_name,
database_installation_files_s3_prefix,
default_character_set,
engine,
engine_version,
exportable_log_types,
failure_reason,
image,
kms_key_id,
major_engine_version,
serverless_v2_features_support,
status,
supported_ca_certificate_identifiers,
supported_character_sets,
supported_engine_modes,
supported_feature_names,
supported_nchar_character_sets,
supported_timezones,
supports_babelfish,
supports_certificate_rotation_without_restart,
supports_global_databases,
supports_integrations,
supports_limitless_database,
supports_local_write_forwarding,
supports_log_exports_to_cloudwatch_logs,
supports_parallel_query,
supports_read_replica,
tag_list,
valid_upgrade_target;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_db_engine_version"
    values={[
        { label: 'delete_custom_db_engine_version', value: 'delete_custom_db_engine_version' }
    ]}
>
<TabItem value="delete_custom_db_engine_version">

Deletes a custom engine version. To run this command, make sure you meet the following prerequisites: The CEV must not be the default for RDS Custom. If it is, change the default before running this command. The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot, or automated backup of your RDS Custom instance. Typically, deletion takes a few minutes. The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the DeleteCustomDbEngineVersion event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the DeleteCustomDbEngineVersion event. For more information, see Deleting a CEV in the Amazon RDS User Guide.

```sql
DELETE FROM aws.rds.db_engine_versions
WHERE EngineVersion = '{{ EngineVersion }}' --required
AND region = '{{ region }}' --required
AND Engine = '{{ Engine }}'
;
```
</TabItem>
</Tabs>
