--- 
title: file_systems
hide_title: false
hide_table_of_contents: false
keywords:
  - file_systems
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

Creates, updates, deletes, gets or lists a <code>file_systems</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="file_systems" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fsx.file_systems" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_file_systems"
    values={[
        { label: 'describe_file_systems', value: 'describe_file_systems' }
    ]}
>
<TabItem value="describe_file_systems">

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
    <td><CopyableCode code="administrative_actions" /></td>
    <td><code>array</code></td>
    <td>A list of administrative actions for the file system that are in process or waiting to be processed. Administrative actions describe changes to the Amazon FSx system that you have initiated using the UpdateFileSystem operation.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the file system was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_name" /></td>
    <td><code>string</code></td>
    <td>The Domain Name System (DNS) name for the file system. (pattern: &lt;code&gt;^((fs|fc)i?-&#91;0-9a-f&#93;&#123;8,&#125;\..&#123;4,253&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_details" /></td>
    <td><code>object</code></td>
    <td>A structure providing details of any failures that occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="file_system_id" /></td>
    <td><code>string</code></td>
    <td>The system-generated, unique 17-digit ID of the file system. (pattern: &lt;code&gt;^(fs-&#91;0-9a-f&#93;&#123;8,&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="file_system_type" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon FSx file system, which can be LUSTRE, WINDOWS, ONTAP, or OPENZFS. (WINDOWS, LUSTRE, ONTAP, OPENZFS)</td>
</tr>
<tr>
    <td><CopyableCode code="file_system_type_version" /></td>
    <td><code>string</code></td>
    <td>The Lustre version of the Amazon FSx for Lustre file system, which can be 2.10, 2.12, or 2.15. (pattern: &lt;code&gt;^&#91;0-9&#93;(.&#91;0-9&#93;*)*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows: Amazon FSx for Lustre PERSISTENT_1 and PERSISTENT_2 deployment types only. SCRATCH_1 and SCRATCH_2 types are encrypted using the Amazon FSx service KMS key for your account. Amazon FSx for NetApp ONTAP Amazon FSx for OpenZFS Amazon FSx for Windows File Server If a KmsKeyId isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see Encrypt in the Key Management Service API Reference. (pattern: &lt;code&gt;^.&#123;1,2048&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle" /></td>
    <td><code>string</code></td>
    <td>The lifecycle status of the file system. The following are the possible values and what they mean: AVAILABLE - The file system is in a healthy state, and is reachable and available for use. CREATING - Amazon FSx is creating the new file system. DELETING - Amazon FSx is deleting an existing file system. FAILED - An existing file system has experienced an unrecoverable failure. When creating a new file system, Amazon FSx was unable to create the file system. MISCONFIGURED - The file system is in a failed but recoverable state. MISCONFIGURED_UNAVAILABLE - (Amazon FSx for Windows File Server only) The file system is currently unavailable due to a change in your Active Directory configuration. UPDATING - The file system is undergoing a customer-initiated update. (AVAILABLE, CREATING, FAILED, DELETING, MISCONFIGURED, UPDATING, MISCONFIGURED_UNAVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="lustre_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for the Amazon FSx for Lustre file system.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_ids" /></td>
    <td><code>array</code></td>
    <td>The IDs of the elastic network interfaces from which a specific file system is accessible. The elastic network interface is automatically created in the same virtual private cloud (VPC) that the Amazon FSx file system was created in. For more information, see Elastic Network Interfaces in the Amazon EC2 User Guide. For an Amazon FSx for Windows File Server file system, you can have one network interface ID. For an Amazon FSx for Lustre file system, you can have more than one.</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>The network type of the file system. (IPV4, DUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="ontap_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for this Amazon FSx for NetApp ONTAP file system.</td>
</tr>
<tr>
    <td><CopyableCode code="open_zfs_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for this Amazon FSx for OpenZFS file system.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account that created the file system. If the file system was created by a user in IAM Identity Center, the Amazon Web Services account to which the IAM user belongs is the owner. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the file system resource. (pattern: &lt;code&gt;^arn:(?=&#91;^:&#93;+:fsx:&#91;^:&#93;+:\d&#123;12&#125;:)((|(?=&#91;a-z0-9-.&#93;&#123;1,63&#125;)(?!\d&#123;1,3&#125;(\.\d&#123;1,3&#125;)&#123;3&#125;)(?!&#91;^:&#93;*-&#123;2&#125;)(?!&#91;^:&#93;*-\.)(?!&#91;^:&#93;*\.-)&#91;a-z0-9&#93;.*(?&lt;!-)):)&#123;4&#125;(?!/).&#123;0,1024&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="storage_capacity" /></td>
    <td><code>integer</code></td>
    <td>The storage capacity of the file system in gibibytes (GiB). Amazon FSx responds with an HTTP status code 400 (Bad Request) if the value of StorageCapacity is outside of the minimum or maximum values.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_type" /></td>
    <td><code>string</code></td>
    <td>The type of storage the file system is using. If set to SSD, the file system uses solid state drive storage. If set to HDD, the file system uses hard disk drive storage. If set to INTELLIGENT_TIERING, the file system uses fully elastic, intelligently-tiered storage. (SSD, HDD, INTELLIGENT_TIERING)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_ids" /></td>
    <td><code>array</code></td>
    <td>Specifies the IDs of the subnets that the file system is accessible from. For the Amazon FSx Windows and ONTAP MULTI_AZ_1 file system deployment type, there are two subnet IDs, one for the preferred file server and one for the standby file server. The preferred file server subnet identified in the PreferredSubnetID property. All other file systems have only one subnet ID. For FSx for Lustre file systems, and Single-AZ Windows file systems, this is the ID of the subnet that contains the file system's endpoint. For MULTI_AZ_1 Windows and ONTAP file systems, the file system endpoint is available in the PreferredSubnetID.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of Tag values, with a maximum of 50 elements.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the primary virtual private cloud (VPC) for the file system. (pattern: &lt;code&gt;^(vpc-&#91;0-9a-f&#93;&#123;8,&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="windows_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for this Amazon FSx for Windows File Server file system.</td>
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
    <td><a href="#describe_file_systems"><CopyableCode code="describe_file_systems" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the description of specific Amazon FSx file systems, if a FileSystemIds value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all file system descriptions, you can optionally specify the MaxResults parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This operation is used in an iterative process to retrieve a list of your file system descriptions. DescribeFileSystems is called first without a NextTokenvalue. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this operation, keep the following in mind: The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value. The order of file systems returned in the response of one DescribeFileSystems call and the order of file systems returned across the responses of a multicall iteration is unspecified.</td>
</tr>
<tr>
    <td><a href="#create_file_system"><CopyableCode code="create_file_system" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileSystemType"><code>FileSystemType</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a></td>
    <td></td>
    <td>Creates a new, empty Amazon FSx file system. You can create the following supported Amazon FSx file systems using the CreateFileSystem API operation: Amazon FSx for Lustre Amazon FSx for NetApp ONTAP Amazon FSx for OpenZFS Amazon FSx for Windows File Server This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a CreateFileSystem operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same. If a file system with the specified client request token exists and the parameters match, CreateFileSystem returns the description of the existing file system. If a file system with the specified client request token exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, CreateFileSystem does the following: Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of CREATING. Returns the description of the file system in JSON format. The CreateFileSystem call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information.</td>
</tr>
<tr>
    <td><a href="#update_file_system"><CopyableCode code="update_file_system" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileSystemId"><code>FileSystemId</code></a></td>
    <td></td>
    <td>Use this operation to update the configuration of an existing Amazon FSx file system. You can update multiple properties in a single request. For FSx for Windows File Server file systems, you can update the following properties: AuditLogConfiguration AutomaticBackupRetentionDays DailyAutomaticBackupStartTime DiskIopsConfiguration SelfManagedActiveDirectoryConfiguration StorageCapacity StorageType ThroughputCapacity WeeklyMaintenanceStartTime For FSx for Lustre file systems, you can update the following properties: AutoImportPolicy AutomaticBackupRetentionDays DailyAutomaticBackupStartTime DataCompressionType FileSystemTypeVersion LogConfiguration LustreReadCacheConfiguration LustreRootSquashConfiguration MetadataConfiguration PerUnitStorageThroughput StorageCapacity ThroughputCapacity WeeklyMaintenanceStartTime For FSx for ONTAP file systems, you can update the following properties: AddRouteTableIds AutomaticBackupRetentionDays DailyAutomaticBackupStartTime DiskIopsConfiguration EndpointIpv6AddressRange FsxAdminPassword HAPairs RemoveRouteTableIds StorageCapacity ThroughputCapacity ThroughputCapacityPerHAPair WeeklyMaintenanceStartTime For FSx for OpenZFS file systems, you can update the following properties: AddRouteTableIds AutomaticBackupRetentionDays CopyTagsToBackups CopyTagsToVolumes DailyAutomaticBackupStartTime DiskIopsConfiguration EndpointIpv6AddressRange ReadCacheConfiguration RemoveRouteTableIds StorageCapacity ThroughputCapacity WeeklyMaintenanceStartTime</td>
</tr>
<tr>
    <td><a href="#delete_file_system"><CopyableCode code="delete_file_system" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a file system. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups and snapshots are also deleted. To delete an Amazon FSx for NetApp ONTAP file system, first delete all the volumes and storage virtual machines (SVMs) on the file system. Then provide a FileSystemId value to the DeleteFileSystem operation. Before deleting an Amazon FSx for OpenZFS file system, make sure that there aren't any Amazon S3 access points attached to any volume. For more information on how to list S3 access points that are attached to volumes, see Listing S3 access point attachments. For more information on how to delete S3 access points, see Deleting an S3 access point attachment. By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup isn't subject to the file system's retention policy, and must be manually deleted. To delete an Amazon FSx for Lustre file system, first unmount it from every connected Amazon EC2 instance, then provide a FileSystemId value to the DeleteFileSystem operation. By default, Amazon FSx will not take a final backup when the DeleteFileSystem operation is invoked. On file systems not linked to an Amazon S3 bucket, set SkipFinalBackup to false to take a final backup of the file system you are deleting. Backups cannot be enabled on S3-linked file systems. To ensure all of your data is written back to S3 before deleting your file system, you can either monitor for the AgeOfOldestQueuedMessage metric to be zero (if using automatic export) or you can run an export data repository task. If you have automatic export enabled and want to use an export data repository task, you have to disable automatic export before executing the export data repository task. The DeleteFileSystem operation returns while the file system has the DELETING status. You can check the file system deletion status by calling the DescribeFileSystems operation, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the DescribeFileSystems operation returns a FileSystemNotFound error. If a data repository task is in a PENDING or EXECUTING state, deleting an Amazon FSx for Lustre file system will fail with an HTTP status code 400 (Bad Request). The data in a deleted file system is also deleted and can't be recovered by any means.</td>
</tr>
<tr>
    <td><a href="#release_file_system_nfs_v3_locks"><CopyableCode code="release_file_system_nfs_v3_locks" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileSystemId"><code>FileSystemId</code></a></td>
    <td></td>
    <td>Releases the file system lock from an Amazon FSx for OpenZFS file system.</td>
</tr>
<tr>
    <td><a href="#start_misconfigured_state_recovery"><CopyableCode code="start_misconfigured_state_recovery" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileSystemId"><code>FileSystemId</code></a></td>
    <td></td>
    <td>After performing steps to repair the Active Directory configuration of an FSx for Windows File Server file system, use this action to initiate the process of Amazon FSx attempting to reconnect to the file system.</td>
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
    defaultValue="describe_file_systems"
    values={[
        { label: 'describe_file_systems', value: 'describe_file_systems' }
    ]}
>
<TabItem value="describe_file_systems">

Returns the description of specific Amazon FSx file systems, if a FileSystemIds value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all file system descriptions, you can optionally specify the MaxResults parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This operation is used in an iterative process to retrieve a list of your file system descriptions. DescribeFileSystems is called first without a NextTokenvalue. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this operation, keep the following in mind: The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value. The order of file systems returned in the response of one DescribeFileSystems call and the order of file systems returned across the responses of a multicall iteration is unspecified.

```sql
SELECT
administrative_actions,
creation_time,
dns_name,
failure_details,
file_system_id,
file_system_type,
file_system_type_version,
kms_key_id,
lifecycle,
lustre_configuration,
network_interface_ids,
network_type,
ontap_configuration,
open_zfs_configuration,
owner_id,
resource_arn,
storage_capacity,
storage_type,
subnet_ids,
tags,
vpc_id,
windows_configuration
FROM aws.fsx.file_systems
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_file_system"
    values={[
        { label: 'create_file_system', value: 'create_file_system' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_file_system">

Creates a new, empty Amazon FSx file system. You can create the following supported Amazon FSx file systems using the CreateFileSystem API operation: Amazon FSx for Lustre Amazon FSx for NetApp ONTAP Amazon FSx for OpenZFS Amazon FSx for Windows File Server This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a CreateFileSystem operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same. If a file system with the specified client request token exists and the parameters match, CreateFileSystem returns the description of the existing file system. If a file system with the specified client request token exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, CreateFileSystem does the following: Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of CREATING. Returns the description of the file system in JSON format. The CreateFileSystem call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information.

```sql
INSERT INTO aws.fsx.file_systems (
ClientRequestToken,
FileSystemType,
StorageCapacity,
StorageType,
SubnetIds,
SecurityGroupIds,
Tags,
KmsKeyId,
WindowsConfiguration,
LustreConfiguration,
OntapConfiguration,
FileSystemTypeVersion,
OpenZFSConfiguration,
NetworkType,
region
)
SELECT 
'{{ ClientRequestToken }}',
'{{ FileSystemType }}' /* required */,
{{ StorageCapacity }},
'{{ StorageType }}',
'{{ SubnetIds }}' /* required */,
'{{ SecurityGroupIds }}',
'{{ Tags }}',
'{{ KmsKeyId }}',
'{{ WindowsConfiguration }}',
'{{ LustreConfiguration }}',
'{{ OntapConfiguration }}',
'{{ FileSystemTypeVersion }}',
'{{ OpenZFSConfiguration }}',
'{{ NetworkType }}',
'{{ region }}'
RETURNING
file_system
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: file_systems
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the file_systems resource.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
    - name: FileSystemType
      value: "{{ FileSystemType }}"
      description: |
        The type of Amazon FSx file system to create. Valid values are WINDOWS, LUSTRE, ONTAP, and OPENZFS.
      valid_values: ['WINDOWS', 'LUSTRE', 'ONTAP', 'OPENZFS']
    - name: StorageCapacity
      value: {{ StorageCapacity }}
      description: |
        Sets the storage capacity of the file system that you're creating, in gibibytes (GiB). FSx for Lustre file systems - The amount of storage capacity that you can configure depends on the value that you set for StorageType and the Lustre DeploymentType, as follows: For SCRATCH_2, PERSISTENT_2, and PERSISTENT_1 deployment types using SSD storage type, the valid values are 1200 GiB, 2400 GiB, and increments of 2400 GiB. For PERSISTENT_1 HDD file systems, valid values are increments of 6000 GiB for 12 MB/s/TiB file systems and increments of 1800 GiB for 40 MB/s/TiB file systems. For SCRATCH_1 deployment type, valid values are 1200 GiB, 2400 GiB, and increments of 3600 GiB. FSx for ONTAP file systems - The amount of storage capacity that you can configure depends on the value of the HAPairs property. The minimum value is calculated as 1,024 * HAPairs and the maximum is calculated as 524,288 * HAPairs. FSx for OpenZFS file systems - The amount of storage capacity that you can configure is from 64 GiB up to 524,288 GiB (512 TiB). FSx for Windows File Server file systems - The amount of storage capacity that you can configure depends on the value that you set for StorageType as follows: For SSD storage, valid values are 32 GiB-65,536 GiB (64 TiB). For HDD storage, valid values are 2000 GiB-65,536 GiB (64 TiB).
    - name: StorageType
      value: "{{ StorageType }}"
      description: |
        Sets the storage class for the file system that you're creating. Valid values are SSD, HDD, and INTELLIGENT_TIERING. Set to SSD to use solid state drive storage. SSD is supported on all Windows, Lustre, ONTAP, and OpenZFS deployment types. Set to HDD to use hard disk drive storage, which is supported on SINGLE_AZ_2 and MULTI_AZ_1 Windows file system deployment types, and on PERSISTENT_1 Lustre file system deployment types. Set to INTELLIGENT_TIERING to use fully elastic, intelligently-tiered storage. Intelligent-Tiering is only available for OpenZFS file systems with the Multi-AZ deployment type and for Lustre file systems with the Persistent_2 deployment type. Default value is SSD. For more information, see Storage type options in the FSx for Windows File Server User Guide, FSx for Lustre storage classes in the FSx for Lustre User Guide, and Working with Intelligent-Tiering in the Amazon FSx for OpenZFS User Guide.
      valid_values: ['SSD', 'HDD', 'INTELLIGENT_TIERING']
    - name: SubnetIds
      value:
        - "{{ SubnetIds }}"
      description: |
        A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the CreateFileCache operation.
    - name: SecurityGroupIds
      value:
        - "{{ SecurityGroupIds }}"
      description: |
        A list of IDs specifying the security groups to apply to all network interfaces created for file system access. This list isn't returned in later requests to describe the file system. You must specify a security group if you are creating a Multi-AZ FSx for ONTAP file system in a VPC subnet that has been shared with you.
    - name: Tags
      description: |
        A list of Tag values, with a maximum of 50 elements.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows: Amazon FSx for Lustre PERSISTENT_1 and PERSISTENT_2 deployment types only. SCRATCH_1 and SCRATCH_2 types are encrypted using the Amazon FSx service KMS key for your account. Amazon FSx for NetApp ONTAP Amazon FSx for OpenZFS Amazon FSx for Windows File Server If a KmsKeyId isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see Encrypt in the Key Management Service API Reference.
    - name: WindowsConfiguration
      description: |
        The Microsoft Windows configuration for the file system that's being created.
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
    - name: OntapConfiguration
      description: |
        The ONTAP configuration properties of the FSx for ONTAP file system that you are creating.
      value:
        AutomaticBackupRetentionDays: {{ AutomaticBackupRetentionDays }}
        DailyAutomaticBackupStartTime: "{{ DailyAutomaticBackupStartTime }}"
        DeploymentType: "{{ DeploymentType }}"
        EndpointIpAddressRange: "{{ EndpointIpAddressRange }}"
        FsxAdminPassword: "{{ FsxAdminPassword }}"
        DiskIopsConfiguration:
          Mode: "{{ Mode }}"
          Iops: {{ Iops }}
        PreferredSubnetId: "{{ PreferredSubnetId }}"
        RouteTableIds:
          - "{{ RouteTableIds }}"
        ThroughputCapacity: {{ ThroughputCapacity }}
        WeeklyMaintenanceStartTime: "{{ WeeklyMaintenanceStartTime }}"
        HAPairs: {{ HAPairs }}
        ThroughputCapacityPerHAPair: {{ ThroughputCapacityPerHAPair }}
        EndpointIpv6AddressRange: "{{ EndpointIpv6AddressRange }}"
    - name: FileSystemTypeVersion
      value: "{{ FileSystemTypeVersion }}"
      description: |
        For FSx for Lustre file systems, sets the Lustre version for the file system that you're creating. Valid values are 2.10, 2.12, and 2.15: 2.10 is supported by the Scratch and Persistent_1 Lustre deployment types. 2.12 is supported by all Lustre deployment types, except for PERSISTENT_2 with a metadata configuration mode. 2.15 is supported by all Lustre deployment types and is recommended for all new file systems. Default value is 2.10, except for the following deployments: Default value is 2.12 when DeploymentType is set to PERSISTENT_2 without a metadata configuration mode. Default value is 2.15 when DeploymentType is set to PERSISTENT_2 with a metadata configuration mode.
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
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: |
        The network type of the Amazon FSx file system that you are creating. Valid values are IPV4 (which supports IPv4 only) and DUAL (for dual-stack mode, which supports both IPv4 and IPv6). The default is IPV4. Supported for FSx for OpenZFS, FSx for ONTAP, and FSx for Windows File Server file systems.
      valid_values: ['IPV4', 'DUAL']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_file_system"
    values={[
        { label: 'update_file_system', value: 'update_file_system' }
    ]}
>
<TabItem value="update_file_system">

Use this operation to update the configuration of an existing Amazon FSx file system. You can update multiple properties in a single request. For FSx for Windows File Server file systems, you can update the following properties: AuditLogConfiguration AutomaticBackupRetentionDays DailyAutomaticBackupStartTime DiskIopsConfiguration SelfManagedActiveDirectoryConfiguration StorageCapacity StorageType ThroughputCapacity WeeklyMaintenanceStartTime For FSx for Lustre file systems, you can update the following properties: AutoImportPolicy AutomaticBackupRetentionDays DailyAutomaticBackupStartTime DataCompressionType FileSystemTypeVersion LogConfiguration LustreReadCacheConfiguration LustreRootSquashConfiguration MetadataConfiguration PerUnitStorageThroughput StorageCapacity ThroughputCapacity WeeklyMaintenanceStartTime For FSx for ONTAP file systems, you can update the following properties: AddRouteTableIds AutomaticBackupRetentionDays DailyAutomaticBackupStartTime DiskIopsConfiguration EndpointIpv6AddressRange FsxAdminPassword HAPairs RemoveRouteTableIds StorageCapacity ThroughputCapacity ThroughputCapacityPerHAPair WeeklyMaintenanceStartTime For FSx for OpenZFS file systems, you can update the following properties: AddRouteTableIds AutomaticBackupRetentionDays CopyTagsToBackups CopyTagsToVolumes DailyAutomaticBackupStartTime DiskIopsConfiguration EndpointIpv6AddressRange ReadCacheConfiguration RemoveRouteTableIds StorageCapacity ThroughputCapacity WeeklyMaintenanceStartTime

```sql
UPDATE aws.fsx.file_systems
SET 
FileSystemId = '{{ FileSystemId }}',
ClientRequestToken = '{{ ClientRequestToken }}',
StorageCapacity = {{ StorageCapacity }},
WindowsConfiguration = '{{ WindowsConfiguration }}',
LustreConfiguration = '{{ LustreConfiguration }}',
OntapConfiguration = '{{ OntapConfiguration }}',
OpenZFSConfiguration = '{{ OpenZFSConfiguration }}',
StorageType = '{{ StorageType }}',
FileSystemTypeVersion = '{{ FileSystemTypeVersion }}',
NetworkType = '{{ NetworkType }}'
WHERE 
region = '{{ region }}' --required
AND FileSystemId = '{{ FileSystemId }}' --required
RETURNING
file_system;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_file_system"
    values={[
        { label: 'delete_file_system', value: 'delete_file_system' }
    ]}
>
<TabItem value="delete_file_system">

Deletes a file system. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups and snapshots are also deleted. To delete an Amazon FSx for NetApp ONTAP file system, first delete all the volumes and storage virtual machines (SVMs) on the file system. Then provide a FileSystemId value to the DeleteFileSystem operation. Before deleting an Amazon FSx for OpenZFS file system, make sure that there aren't any Amazon S3 access points attached to any volume. For more information on how to list S3 access points that are attached to volumes, see Listing S3 access point attachments. For more information on how to delete S3 access points, see Deleting an S3 access point attachment. By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup isn't subject to the file system's retention policy, and must be manually deleted. To delete an Amazon FSx for Lustre file system, first unmount it from every connected Amazon EC2 instance, then provide a FileSystemId value to the DeleteFileSystem operation. By default, Amazon FSx will not take a final backup when the DeleteFileSystem operation is invoked. On file systems not linked to an Amazon S3 bucket, set SkipFinalBackup to false to take a final backup of the file system you are deleting. Backups cannot be enabled on S3-linked file systems. To ensure all of your data is written back to S3 before deleting your file system, you can either monitor for the AgeOfOldestQueuedMessage metric to be zero (if using automatic export) or you can run an export data repository task. If you have automatic export enabled and want to use an export data repository task, you have to disable automatic export before executing the export data repository task. The DeleteFileSystem operation returns while the file system has the DELETING status. You can check the file system deletion status by calling the DescribeFileSystems operation, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the DescribeFileSystems operation returns a FileSystemNotFound error. If a data repository task is in a PENDING or EXECUTING state, deleting an Amazon FSx for Lustre file system will fail with an HTTP status code 400 (Bad Request). The data in a deleted file system is also deleted and can't be recovered by any means.

```sql
DELETE FROM aws.fsx.file_systems
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="release_file_system_nfs_v3_locks"
    values={[
        { label: 'release_file_system_nfs_v3_locks', value: 'release_file_system_nfs_v3_locks' },
        { label: 'start_misconfigured_state_recovery', value: 'start_misconfigured_state_recovery' }
    ]}
>
<TabItem value="release_file_system_nfs_v3_locks">

Releases the file system lock from an Amazon FSx for OpenZFS file system.

```sql
EXEC aws.fsx.file_systems.release_file_system_nfs_v3_locks 
@region='{{ region }}' --required 
@@json=
'{
"FileSystemId": "{{ FileSystemId }}", 
"ClientRequestToken": "{{ ClientRequestToken }}"
}'
;
```
</TabItem>
<TabItem value="start_misconfigured_state_recovery">

After performing steps to repair the Active Directory configuration of an FSx for Windows File Server file system, use this action to initiate the process of Amazon FSx attempting to reconnect to the file system.

```sql
EXEC aws.fsx.file_systems.start_misconfigured_state_recovery 
@region='{{ region }}' --required 
@@json=
'{
"ClientRequestToken": "{{ ClientRequestToken }}", 
"FileSystemId": "{{ FileSystemId }}"
}'
;
```
</TabItem>
</Tabs>
