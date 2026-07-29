--- 
title: backups
hide_title: false
hide_table_of_contents: false
keywords:
  - backups
  - fsx
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

Creates, updates, deletes, gets or lists a <code>backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fsx.backups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_backups"
    values={[
        { label: 'describe_backups', value: 'describe_backups' }
    ]}
>
<TabItem value="describe_backups">

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
    <td><CopyableCode code="backup_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the backup. (pattern: &lt;code&gt;^(backup-&#91;0-9a-f&#93;&#123;8,&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when a particular backup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="directory_information" /></td>
    <td><code>object</code></td>
    <td>The configuration of the self-managed Microsoft Active Directory directory to which the Windows File Server instance is joined.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_details" /></td>
    <td><code>object</code></td>
    <td>Details explaining any failures that occurred when creating a backup.</td>
</tr>
<tr>
    <td><CopyableCode code="file_system" /></td>
    <td><code>object</code></td>
    <td>The metadata of the file system associated with the backup. This metadata is persisted even if the file system is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows: Amazon FSx for Lustre PERSISTENT_1 and PERSISTENT_2 deployment types only. SCRATCH_1 and SCRATCH_2 types are encrypted using the Amazon FSx service KMS key for your account. Amazon FSx for NetApp ONTAP Amazon FSx for OpenZFS Amazon FSx for Windows File Server If a KmsKeyId isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see Encrypt in the Key Management Service API Reference. (pattern: &lt;code&gt;^.&#123;1,2048&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle" /></td>
    <td><code>string</code></td>
    <td>The lifecycle status of the backup. AVAILABLE - The backup is fully available. PENDING - For user-initiated backups on Lustre file systems only; Amazon FSx hasn't started creating the backup. CREATING - Amazon FSx is creating the backup. TRANSFERRING - For user-initiated backups on Lustre file systems only; Amazon FSx is transferring the backup to Amazon S3. COPYING - Amazon FSx is copying the backup. DELETED - Amazon FSx deleted the backup and it's no longer available. FAILED - Amazon FSx couldn't finish the backup. (AVAILABLE, CREATING, TRANSFERRING, DELETED, FAILED, PENDING, COPYING)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="progress_percent" /></td>
    <td><code>integer</code></td>
    <td>Displays the current percent of progress of an asynchronous task.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the backup resource. (pattern: &lt;code&gt;^arn:(?=&#91;^:&#93;+:fsx:&#91;^:&#93;+:\d&#123;12&#125;:)((|(?=&#91;a-z0-9-.&#93;&#123;1,63&#125;)(?!\d&#123;1,3&#125;(\.\d&#123;1,3&#125;)&#123;3&#125;)(?!&#91;^:&#93;*-&#123;2&#125;)(?!&#91;^:&#93;*-\.)(?!&#91;^:&#93;*\.-)&#91;a-z0-9&#93;.*(?&lt;!-)):)&#123;4&#125;(?!/).&#123;0,1024&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Specifies the resource type that's backed up. (FILE_SYSTEM, VOLUME)</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the backup in bytes. This represents the amount of data that the file system would contain if you restore this backup.</td>
</tr>
<tr>
    <td><CopyableCode code="source_backup_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the source backup. Specifies the backup that you are copying. (pattern: &lt;code&gt;^(backup-&#91;0-9a-f&#93;&#123;8,&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_backup_region" /></td>
    <td><code>string</code></td>
    <td>The source Region of the backup. Specifies the Region from where this backup is copied. (pattern: &lt;code&gt;^&#91;a-z0-9-&#93;&#123;1,20&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of Tag values, with a maximum of 50 elements.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the file-system backup. (AUTOMATIC, USER_INITIATED, AWS_BACKUP)</td>
</tr>
<tr>
    <td><CopyableCode code="volume" /></td>
    <td><code>object</code></td>
    <td>Describes an Amazon FSx volume.</td>
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
    <td><a href="#describe_backups"><CopyableCode code="describe_backups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the description of a specific Amazon FSx backup, if a BackupIds value is provided for that backup. Otherwise, it returns all backups owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all backups, you can optionally specify the MaxResults parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of the NextToken value from the last response. This operation is used in an iterative process to retrieve a list of your backups. DescribeBackups is called first without a NextToken value. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken value. When using this operation, keep the following in mind: The operation might return fewer than the MaxResults value of backup descriptions while still including a NextToken value. The order of the backups returned in the response of one DescribeBackups call and the order of the backups returned across the responses of a multi-call iteration is unspecified.</td>
</tr>
<tr>
    <td><a href="#create_file_system_from_backup"><CopyableCode code="create_file_system_from_backup" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BackupId"><code>BackupId</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a></td>
    <td></td>
    <td>Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup. If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a file system with the specified client request token exists but the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, this operation does the following: Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of CREATING. Returns the description of the file system. Parameters like the Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings. By using the idempotent operation, you can retry a CreateFileSystemFromBackup call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same. The CreateFileSystemFromBackup call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information.</td>
</tr>
<tr>
    <td><a href="#create_volume_from_backup"><CopyableCode code="create_volume_from_backup" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BackupId"><code>BackupId</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Creates a new Amazon FSx for NetApp ONTAP volume from an existing Amazon FSx volume backup.</td>
</tr>
<tr>
    <td><a href="#create_backup"><CopyableCode code="create_backup" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a backup of an existing Amazon FSx for Windows File Server file system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. We recommend creating regular backups so that you can restore a file system or volume from a backup if an issue arises with the original file system or volume. For Amazon FSx for Lustre file systems, you can create a backup only for file systems that have the following configuration: A Persistent deployment type Are not linked to a data repository For more information about backups, see the following: For Amazon FSx for Lustre, see Working with FSx for Lustre backups. For Amazon FSx for Windows, see Working with FSx for Windows backups. For Amazon FSx for NetApp ONTAP, see Working with FSx for NetApp ONTAP backups. For Amazon FSx for OpenZFS, see Working with FSx for OpenZFS backups. If a backup with the specified client request token exists and the parameters match, this operation returns the description of the existing backup. If a backup with the specified client request token exists and the parameters don't match, this operation returns IncompatibleParameterError. If a backup with the specified client request token doesn't exist, CreateBackup does the following: Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of CREATING. Returns the description of the backup. By using the idempotent operation, you can retry a CreateBackup operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same. The CreateBackup operation returns while the backup's lifecycle state is still CREATING. You can check the backup creation status by calling the DescribeBackups operation, which returns the backup state along with other information.</td>
</tr>
<tr>
    <td><a href="#delete_backup"><CopyableCode code="delete_backup" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and its data is gone. The DeleteBackup call returns instantly. The backup won't show up in later DescribeBackups calls. The data in a deleted backup is also deleted and can't be recovered by any means.</td>
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
    defaultValue="describe_backups"
    values={[
        { label: 'describe_backups', value: 'describe_backups' }
    ]}
>
<TabItem value="describe_backups">

Returns the description of a specific Amazon FSx backup, if a BackupIds value is provided for that backup. Otherwise, it returns all backups owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all backups, you can optionally specify the MaxResults parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of the NextToken value from the last response. This operation is used in an iterative process to retrieve a list of your backups. DescribeBackups is called first without a NextToken value. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken value. When using this operation, keep the following in mind: The operation might return fewer than the MaxResults value of backup descriptions while still including a NextToken value. The order of the backups returned in the response of one DescribeBackups call and the order of the backups returned across the responses of a multi-call iteration is unspecified.

```sql
SELECT
backup_id,
creation_time,
directory_information,
failure_details,
file_system,
kms_key_id,
lifecycle,
owner_id,
progress_percent,
resource_arn,
resource_type,
size_in_bytes,
source_backup_id,
source_backup_region,
tags,
type,
volume
FROM aws.fsx.backups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_file_system_from_backup"
    values={[
        { label: 'create_file_system_from_backup', value: 'create_file_system_from_backup' },
        { label: 'create_volume_from_backup', value: 'create_volume_from_backup' },
        { label: 'create_backup', value: 'create_backup' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_file_system_from_backup">

Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup. If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a file system with the specified client request token exists but the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, this operation does the following: Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of CREATING. Returns the description of the file system. Parameters like the Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings. By using the idempotent operation, you can retry a CreateFileSystemFromBackup call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same. The CreateFileSystemFromBackup call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information.

```sql
INSERT INTO aws.fsx.backups (
BackupId,
ClientRequestToken,
SubnetIds,
SecurityGroupIds,
Tags,
WindowsConfiguration,
LustreConfiguration,
StorageType,
KmsKeyId,
FileSystemTypeVersion,
OpenZFSConfiguration,
StorageCapacity,
NetworkType,
region
)
SELECT 
'{{ BackupId }}' /* required */,
'{{ ClientRequestToken }}',
'{{ SubnetIds }}' /* required */,
'{{ SecurityGroupIds }}',
'{{ Tags }}',
'{{ WindowsConfiguration }}',
'{{ LustreConfiguration }}',
'{{ StorageType }}',
'{{ KmsKeyId }}',
'{{ FileSystemTypeVersion }}',
'{{ OpenZFSConfiguration }}',
{{ StorageCapacity }},
'{{ NetworkType }}',
'{{ region }}'
RETURNING
file_system
;
```
</TabItem>
<TabItem value="create_volume_from_backup">

Creates a new Amazon FSx for NetApp ONTAP volume from an existing Amazon FSx volume backup.

```sql
INSERT INTO aws.fsx.backups (
BackupId,
ClientRequestToken,
Name,
OntapConfiguration,
Tags,
region
)
SELECT 
'{{ BackupId }}' /* required */,
'{{ ClientRequestToken }}',
'{{ Name }}' /* required */,
'{{ OntapConfiguration }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
volume
;
```
</TabItem>
<TabItem value="create_backup">

Creates a backup of an existing Amazon FSx for Windows File Server file system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. We recommend creating regular backups so that you can restore a file system or volume from a backup if an issue arises with the original file system or volume. For Amazon FSx for Lustre file systems, you can create a backup only for file systems that have the following configuration: A Persistent deployment type Are not linked to a data repository For more information about backups, see the following: For Amazon FSx for Lustre, see Working with FSx for Lustre backups. For Amazon FSx for Windows, see Working with FSx for Windows backups. For Amazon FSx for NetApp ONTAP, see Working with FSx for NetApp ONTAP backups. For Amazon FSx for OpenZFS, see Working with FSx for OpenZFS backups. If a backup with the specified client request token exists and the parameters match, this operation returns the description of the existing backup. If a backup with the specified client request token exists and the parameters don't match, this operation returns IncompatibleParameterError. If a backup with the specified client request token doesn't exist, CreateBackup does the following: Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of CREATING. Returns the description of the backup. By using the idempotent operation, you can retry a CreateBackup operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same. The CreateBackup operation returns while the backup's lifecycle state is still CREATING. You can check the backup creation status by calling the DescribeBackups operation, which returns the backup state along with other information.

```sql
INSERT INTO aws.fsx.backups (
FileSystemId,
ClientRequestToken,
Tags,
VolumeId,
region
)
SELECT 
'{{ FileSystemId }}',
'{{ ClientRequestToken }}',
'{{ Tags }}',
'{{ VolumeId }}',
'{{ region }}'
RETURNING
backup
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: backups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the backups resource.
    - name: BackupId
      value: "{{ BackupId }}"
      description: |
        The ID of the source backup. Specifies the backup that you are copying.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
    - name: SubnetIds
      value:
        - "{{ SubnetIds }}"
      description: |
        A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the CreateFileCache operation.
    - name: SecurityGroupIds
      value:
        - "{{ SecurityGroupIds }}"
      description: |
        A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups apply to all network interfaces. This value isn't returned in later DescribeFileSystem requests.
    - name: Tags
      description: |
        A list of Tag values, with a maximum of 50 elements.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: WindowsConfiguration
      description: |
        The configuration for this Microsoft Windows file system.
      value:
        ActiveDirectoryId: "{{ ActiveDirectoryId }}"
        SelfManagedActiveDirectoryConfiguration:
          DomainName: "{{ DomainName }}"
          OrganizationalUnitDistinguishedName: "{{ OrganizationalUnitDistinguishedName }}"
          FileSystemAdministratorsGroup: "{{ FileSystemAdministratorsGroup }}"
          UserName: "{{ UserName }}"
          Password: "{{ Password }}"
          DnsIps:
            - "{{ DnsIps }}"
          DomainJoinServiceAccountSecret: "{{ DomainJoinServiceAccountSecret }}"
        DeploymentType: "{{ DeploymentType }}"
        PreferredSubnetId: "{{ PreferredSubnetId }}"
        ThroughputCapacity: {{ ThroughputCapacity }}
        WeeklyMaintenanceStartTime: "{{ WeeklyMaintenanceStartTime }}"
        DailyAutomaticBackupStartTime: "{{ DailyAutomaticBackupStartTime }}"
        AutomaticBackupRetentionDays: {{ AutomaticBackupRetentionDays }}
        CopyTagsToBackups: {{ CopyTagsToBackups }}
        Aliases:
          - "{{ Aliases }}"
        AuditLogConfiguration:
          FileAccessAuditLogLevel: "{{ FileAccessAuditLogLevel }}"
          FileShareAccessAuditLogLevel: "{{ FileShareAccessAuditLogLevel }}"
          AuditLogDestination: "{{ AuditLogDestination }}"
        DiskIopsConfiguration:
          Mode: "{{ Mode }}"
          Iops: {{ Iops }}
        FsrmConfiguration:
          FsrmServiceEnabled: {{ FsrmServiceEnabled }}
          EventLogDestination: "{{ EventLogDestination }}"
    - name: LustreConfiguration
      description: |
        The Lustre configuration for the file system being created. The following parameters are not supported for file systems with a data repository association created with . AutoImportPolicy ExportPath ImportedFileChunkSize ImportPath
      value:
        WeeklyMaintenanceStartTime: "{{ WeeklyMaintenanceStartTime }}"
        ImportPath: "{{ ImportPath }}"
        ExportPath: "{{ ExportPath }}"
        ImportedFileChunkSize: {{ ImportedFileChunkSize }}
        DeploymentType: "{{ DeploymentType }}"
        AutoImportPolicy: "{{ AutoImportPolicy }}"
        PerUnitStorageThroughput: {{ PerUnitStorageThroughput }}
        DailyAutomaticBackupStartTime: "{{ DailyAutomaticBackupStartTime }}"
        AutomaticBackupRetentionDays: {{ AutomaticBackupRetentionDays }}
        CopyTagsToBackups: {{ CopyTagsToBackups }}
        DriveCacheType: "{{ DriveCacheType }}"
        DataCompressionType: "{{ DataCompressionType }}"
        EfaEnabled: {{ EfaEnabled }}
        LogConfiguration:
          Level: "{{ Level }}"
          Destination: "{{ Destination }}"
        RootSquashConfiguration:
          RootSquash: "{{ RootSquash }}"
          NoSquashNids:
            - "{{ NoSquashNids }}"
        MetadataConfiguration:
          Iops: {{ Iops }}
          Mode: "{{ Mode }}"
        ThroughputCapacity: {{ ThroughputCapacity }}
        DataReadCacheConfiguration:
          SizingMode: "{{ SizingMode }}"
          SizeGiB: {{ SizeGiB }}
    - name: StorageType
      value: "{{ StorageType }}"
      description: |
        Sets the storage type for the Windows, OpenZFS, or Lustre file system that you're creating from a backup. Valid values are SSD, HDD, and INTELLIGENT_TIERING. Set to SSD to use solid state drive storage. SSD is supported on all Windows and OpenZFS deployment types. Set to HDD to use hard disk drive storage. HDD is supported on SINGLE_AZ_2 and MULTI_AZ_1 FSx for Windows File Server file system deployment types. Set to INTELLIGENT_TIERING to use fully elastic, intelligently-tiered storage. Intelligent-Tiering is only available for OpenZFS file systems with the Multi-AZ deployment type and for Lustre file systems with the Persistent_2 deployment type. The default value is SSD. HDD and SSD storage types have different minimum storage capacity requirements. A restored file system's storage capacity is tied to the file system that was backed up. You can create a file system that uses HDD storage from a backup of a file system that used SSD storage if the original SSD file system had a storage capacity of at least 2000 GiB.
      valid_values: ['SSD', 'HDD', 'INTELLIGENT_TIERING']
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows: Amazon FSx for Lustre PERSISTENT_1 and PERSISTENT_2 deployment types only. SCRATCH_1 and SCRATCH_2 types are encrypted using the Amazon FSx service KMS key for your account. Amazon FSx for NetApp ONTAP Amazon FSx for OpenZFS Amazon FSx for Windows File Server If a KmsKeyId isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see Encrypt in the Key Management Service API Reference.
    - name: FileSystemTypeVersion
      value: "{{ FileSystemTypeVersion }}"
      description: |
        Sets the version for the Amazon FSx for Lustre file system that you're creating from a backup. Valid values are 2.10, 2.12, and 2.15. You can enter a Lustre version that is newer than the backup's FileSystemTypeVersion setting. If you don't enter a newer Lustre version, it defaults to the backup's setting.
    - name: OpenZFSConfiguration
      description: |
        The OpenZFS configuration for the file system that's being created.
      value:
        AutomaticBackupRetentionDays: {{ AutomaticBackupRetentionDays }}
        CopyTagsToBackups: {{ CopyTagsToBackups }}
        CopyTagsToVolumes: {{ CopyTagsToVolumes }}
        DailyAutomaticBackupStartTime: "{{ DailyAutomaticBackupStartTime }}"
        DeploymentType: "{{ DeploymentType }}"
        ThroughputCapacity: {{ ThroughputCapacity }}
        WeeklyMaintenanceStartTime: "{{ WeeklyMaintenanceStartTime }}"
        DiskIopsConfiguration:
          Mode: "{{ Mode }}"
          Iops: {{ Iops }}
        RootVolumeConfiguration:
          RecordSizeKiB: {{ RecordSizeKiB }}
          DataCompressionType: "{{ DataCompressionType }}"
          NfsExports:
            - ClientConfigurations: "{{ ClientConfigurations }}"
          UserAndGroupQuotas:
            - Type: "{{ Type }}"
              Id: {{ Id }}
              StorageCapacityQuotaGiB: {{ StorageCapacityQuotaGiB }}
          CopyTagsToSnapshots: {{ CopyTagsToSnapshots }}
          ReadOnly: {{ ReadOnly }}
        PreferredSubnetId: "{{ PreferredSubnetId }}"
        EndpointIpAddressRange: "{{ EndpointIpAddressRange }}"
        EndpointIpv6AddressRange: "{{ EndpointIpv6AddressRange }}"
        RouteTableIds:
          - "{{ RouteTableIds }}"
        ReadCacheConfiguration:
          SizingMode: "{{ SizingMode }}"
          SizeGiB: {{ SizeGiB }}
    - name: StorageCapacity
      value: {{ StorageCapacity }}
      description: |
        Sets the storage capacity of the OpenZFS file system that you're creating from a backup, in gibibytes (GiB). Valid values are from 64 GiB up to 524,288 GiB (512 TiB). However, the value that you specify must be equal to or greater than the backup's storage capacity value. If you don't use the StorageCapacity parameter, the default is the backup's StorageCapacity value. If used to create a file system other than OpenZFS, you must provide a value that matches the backup's StorageCapacity value. If you provide any other value, Amazon FSx responds with an HTTP status code 400 Bad Request.
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: |
        Sets the network type for the Amazon FSx for OpenZFS file system that you're creating from a backup.
      valid_values: ['IPV4', 'DUAL']
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the new volume you're creating.
    - name: OntapConfiguration
      description: |
        Specifies the configuration of the ONTAP volume that you are creating.
      value:
        JunctionPath: "{{ JunctionPath }}"
        SecurityStyle: "{{ SecurityStyle }}"
        SizeInMegabytes: {{ SizeInMegabytes }}
        StorageEfficiencyEnabled: {{ StorageEfficiencyEnabled }}
        StorageVirtualMachineId: "{{ StorageVirtualMachineId }}"
        TieringPolicy:
          CoolingPeriod: {{ CoolingPeriod }}
          Name: "{{ Name }}"
        OntapVolumeType: "{{ OntapVolumeType }}"
        SnapshotPolicy: "{{ SnapshotPolicy }}"
        CopyTagsToBackups: {{ CopyTagsToBackups }}
        SnaplockConfiguration:
          AuditLogVolume: {{ AuditLogVolume }}
          AutocommitPeriod:
            Type: "{{ Type }}"
            Value: {{ Value }}
          PrivilegedDelete: "{{ PrivilegedDelete }}"
          RetentionPeriod:
            DefaultRetention:
              Type: "{{ Type }}"
              Value: {{ Value }}
            MinimumRetention:
              Type: "{{ Type }}"
              Value: {{ Value }}
            MaximumRetention:
              Type: "{{ Type }}"
              Value: {{ Value }}
          SnaplockType: "{{ SnaplockType }}"
          VolumeAppendModeEnabled: {{ VolumeAppendModeEnabled }}
        VolumeStyle: "{{ VolumeStyle }}"
        AggregateConfiguration:
          Aggregates:
            - "{{ Aggregates }}"
          ConstituentsPerAggregate: {{ ConstituentsPerAggregate }}
        SizeInBytes: {{ SizeInBytes }}
    - name: FileSystemId
      value: "{{ FileSystemId }}"
      description: |
        The globally unique ID of the file system, assigned by Amazon FSx.
    - name: VolumeId
      value: "{{ VolumeId }}"
      description: |
        (Optional) The ID of the FSx for ONTAP volume to back up.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_backup"
    values={[
        { label: 'delete_backup', value: 'delete_backup' }
    ]}
>
<TabItem value="delete_backup">

Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and its data is gone. The DeleteBackup call returns instantly. The backup won't show up in later DescribeBackups calls. The data in a deleted backup is also deleted and can't be recovered by any means.

```sql
DELETE FROM aws.fsx.backups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
