--- 
title: file_systems
hide_title: false
hide_table_of_contents: false
keywords:
  - file_systems
  - efs
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.efs.file_systems" /></td></tr>
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
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The unique and consistent identifier of the Availability Zone in which the file system is located, and is valid only for One Zone file systems. For example, use1-az1 is an Availability Zone ID for the us-east-1 Amazon Web Services Region, and it has the same location in every Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZoneName" /></td>
    <td><code>string</code></td>
    <td>Describes the Amazon Web Services Availability Zone in which the file system is located, and is valid only for One Zone file systems. For more information, see Using EFS storage classes in the Amazon EFS User Guide. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the file system was created, in seconds (since 1970-01-01T00:00:00Z).</td>
</tr>
<tr>
    <td><CopyableCode code="CreationToken" /></td>
    <td><code>string</code></td>
    <td>The opaque string specified in the request. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Encrypted" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that, if true, indicates that the file system is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="FileSystemArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the EFS file system, in the format arn:aws:elasticfilesystem:region:account-id:file-system/file-system-id . Example with sample data: arn:aws:elasticfilesystem:us-west-2:1111333322228888:file-system/fs-01234567</td>
</tr>
<tr>
    <td><CopyableCode code="FileSystemId" /></td>
    <td><code>string</code></td>
    <td>The ID of the file system, assigned by Amazon EFS. (pattern: &lt;code&gt;^(arn:aws&#91;-a-z&#93;*:elasticfilesystem:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;8,40&#125;|fs-&#91;0-9a-f&#93;&#123;8,40&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FileSystemProtection" /></td>
    <td><code>object</code></td>
    <td>Describes the protection on the file system.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The ID of an KMS key used to protect the encrypted file system. (pattern: &lt;code&gt;^(&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;|mrk-&#91;0-9a-f&#93;&#123;32&#125;|alias/&#91;a-zA-Z0-9/_-&#93;+|(arn:aws&#91;-a-z&#93;*:kms:&#91;a-z0-9-&#93;+:\d&#123;12&#125;:((key/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;)|(key/mrk-&#91;0-9a-f&#93;&#123;32&#125;)|(alias/&#91;a-zA-Z0-9/_-&#93;+))))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LifeCycleState" /></td>
    <td><code>string</code></td>
    <td>The lifecycle phase of the file system. (creating, available, updating, deleting, deleted, error)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>You can add tags to a file system, including a Name tag. For more information, see CreateFileSystem. If the file system has a Name tag, Amazon EFS returns the value in this field. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfMountTargets" /></td>
    <td><code>integer</code></td>
    <td>The current number of mount targets that the file system has. For more information, see CreateMountTarget.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account that created the file system. (pattern: &lt;code&gt;^(\d&#123;12&#125;)|(\d&#123;4&#125;-\d&#123;4&#125;-\d&#123;4&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PerformanceMode" /></td>
    <td><code>string</code></td>
    <td>The performance mode of the file system. (generalPurpose, maxIO)</td>
</tr>
<tr>
    <td><CopyableCode code="ProvisionedThroughputInMibps" /></td>
    <td><code>number (double)</code></td>
    <td>The amount of provisioned throughput, measured in MiBps, for the file system. Valid for file systems using ThroughputMode set to provisioned.</td>
</tr>
<tr>
    <td><CopyableCode code="SizeInBytes" /></td>
    <td><code>object</code></td>
    <td>The latest known metered size (in bytes) of data stored in the file system, in its Value field, and the time at which that size was determined in its Timestamp field. The Timestamp value is the integer number of seconds since 1970-01-01T00:00:00Z. The SizeInBytes value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, SizeInBytes represents actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not the exact size that the file system was at any point in time.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the file system, presented as an array of Tag objects.</td>
</tr>
<tr>
    <td><CopyableCode code="ThroughputMode" /></td>
    <td><code>string</code></td>
    <td>Displays the file system's throughput mode. For more information, see Throughput modes in the Amazon EFS User Guide. (bursting, provisioned, elastic)</td>
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
    <td><a href="#parameter-MaxItems"><code>MaxItems</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-CreationToken"><code>CreationToken</code></a>, <a href="#parameter-FileSystemId"><code>FileSystemId</code></a></td>
    <td>Returns the description of a specific Amazon EFS file system if either the file system CreationToken or the FileSystemId is provided. Otherwise, it returns descriptions of all file systems owned by the caller's Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all file system descriptions, you can optionally specify the MaxItems parameter to limit the number of descriptions in a response. This number is automatically set to 100. If more file system descriptions remain, Amazon EFS returns a NextMarker, an opaque token, in the response. In this case, you should send a subsequent request with the Marker request parameter set to the value of NextMarker. To retrieve a list of your file system descriptions, this operation is used in an iterative process, where DescribeFileSystems is called first without the Marker and then the operation continues to call it with the Marker parameter set to the value of the NextMarker from the previous response until the response has no NextMarker. The order of file systems returned in the response of one DescribeFileSystems call and the order of file systems returned across the responses of a multi-call iteration is unspecified. This operation requires permissions for the elasticfilesystem:DescribeFileSystems action.</td>
</tr>
<tr>
    <td><a href="#create_file_system"><CopyableCode code="create_file_system" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CreationToken"><code>CreationToken</code></a></td>
    <td></td>
    <td>Creates a new, empty file system. The operation requires a creation token in the request that Amazon EFS uses to ensure idempotent creation (calling the operation with same creation token has no effect). If a file system does not currently exist that is owned by the caller's Amazon Web Services account with the specified creation token, this operation does the following: Creates a new, empty file system. The file system will have an Amazon EFS assigned ID, and an initial lifecycle state creating. Returns with the description of the created file system. Otherwise, this operation returns a FileSystemAlreadyExists error with the ID of the existing file system. For basic use cases, you can use a randomly generated UUID for the creation token. The idempotent operation allows you to retry a CreateFileSystem call without risk of creating an extra file system. This can happen when an initial call fails in a way that leaves it uncertain whether or not a file system was actually created. An example might be that a transport level timeout occurred or your connection was reset. As long as you use the same creation token, if the initial call had succeeded in creating a file system, the client can learn of its existence from the FileSystemAlreadyExists error. For more information, see Creating a file system in the Amazon EFS User Guide. The CreateFileSystem call returns while the file system's lifecycle state is still creating. You can check the file system creation status by calling the DescribeFileSystems operation, which among other things returns the file system state. This operation accepts an optional PerformanceMode parameter that you choose for your file system. We recommend generalPurpose PerformanceMode for all file systems. The maxIO mode is a previous generation performance type that is designed for highly parallelized workloads that can tolerate higher latencies than the generalPurpose mode. MaxIO mode is not supported for One Zone file systems or file systems that use Elastic throughput. The PerformanceMode can't be changed after the file system has been created. For more information, see Amazon EFS performance modes. You can set the throughput mode for the file system using the ThroughputMode parameter. After the file system is fully created, Amazon EFS sets its lifecycle state to available, at which point you can create one or more mount targets for the file system in your VPC. For more information, see CreateMountTarget. You mount your Amazon EFS file system on an EC2 instances in your VPC by using the mount target. For more information, see Amazon EFS: How it Works. This operation requires permissions for the elasticfilesystem:CreateFileSystem action. File systems can be tagged on creation. If tags are specified in the creation action, IAM performs additional authorization on the elasticfilesystem:TagResource action to verify if users have permissions to create tags. Therefore, you must grant explicit permissions to use the elasticfilesystem:TagResource action. For more information, see Granting permissions to tag resources during creation.</td>
</tr>
<tr>
    <td><a href="#update_file_system"><CopyableCode code="update_file_system" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the throughput mode or the amount of provisioned throughput of an existing file system.</td>
</tr>
<tr>
    <td><a href="#delete_file_system"><CopyableCode code="delete_file_system" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a file system, permanently severing access to its contents. Upon return, the file system no longer exists and you can't access any contents of the deleted file system. You need to manually delete mount targets attached to a file system before you can delete an EFS file system. This step is performed for you when you use the Amazon Web Services console to delete a file system. You cannot delete a file system that is part of an EFS replication configuration. You need to delete the replication configuration first. You can't delete a file system that is in use. That is, if the file system has any mount targets, you must first delete them. For more information, see DescribeMountTargets and DeleteMountTarget. The DeleteFileSystem call returns while the file system state is still deleting. You can check the file system deletion status by calling the DescribeFileSystems operation, which returns a list of file systems in your account. If you pass file system ID or creation token for the deleted file system, the DescribeFileSystems returns a 404 FileSystemNotFound error. This operation requires permissions for the elasticfilesystem:DeleteFileSystem action.</td>
</tr>
<tr>
    <td><a href="#update_file_system_protection"><CopyableCode code="update_file_system_protection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates protection on the file system. This operation requires permissions for the elasticfilesystem:UpdateFileSystemProtection action.</td>
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
<tr id="parameter-file_system_id">
    <td><CopyableCode code="file_system_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the file system to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CreationToken">
    <td><CopyableCode code="CreationToken" /></td>
    <td><code>string</code></td>
    <td>(Optional) Restricts the list to the file system with this creation token (String). You specify a creation token when you create an Amazon EFS file system.</td>
</tr>
<tr id="parameter-FileSystemId">
    <td><CopyableCode code="FileSystemId" /></td>
    <td><code>string</code></td>
    <td>(Optional) ID of the file system whose description you want to retrieve (String).</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>(Optional) Opaque pagination token returned from a previous DescribeFileSystems operation (String). If present, specifies to continue the list from where the returning call had left off.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>(Optional) Specifies the maximum number of file systems to return in the response (integer). This number is automatically set to 100. The response is paginated at 100 per page if you have more than 100 file systems.</td>
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

Returns the description of a specific Amazon EFS file system if either the file system CreationToken or the FileSystemId is provided. Otherwise, it returns descriptions of all file systems owned by the caller's Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all file system descriptions, you can optionally specify the MaxItems parameter to limit the number of descriptions in a response. This number is automatically set to 100. If more file system descriptions remain, Amazon EFS returns a NextMarker, an opaque token, in the response. In this case, you should send a subsequent request with the Marker request parameter set to the value of NextMarker. To retrieve a list of your file system descriptions, this operation is used in an iterative process, where DescribeFileSystems is called first without the Marker and then the operation continues to call it with the Marker parameter set to the value of the NextMarker from the previous response until the response has no NextMarker. The order of file systems returned in the response of one DescribeFileSystems call and the order of file systems returned across the responses of a multi-call iteration is unspecified. This operation requires permissions for the elasticfilesystem:DescribeFileSystems action.

```sql
SELECT
AvailabilityZoneId,
AvailabilityZoneName,
CreationTime,
CreationToken,
Encrypted,
FileSystemArn,
FileSystemId,
FileSystemProtection,
KmsKeyId,
LifeCycleState,
Name,
NumberOfMountTargets,
OwnerId,
PerformanceMode,
ProvisionedThroughputInMibps,
SizeInBytes,
Tags,
ThroughputMode
FROM aws.efs.file_systems
WHERE region = '{{ region }}' -- required
AND MaxItems = '{{ MaxItems }}'
AND Marker = '{{ Marker }}'
AND CreationToken = '{{ CreationToken }}'
AND FileSystemId = '{{ FileSystemId }}'
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

Creates a new, empty file system. The operation requires a creation token in the request that Amazon EFS uses to ensure idempotent creation (calling the operation with same creation token has no effect). If a file system does not currently exist that is owned by the caller's Amazon Web Services account with the specified creation token, this operation does the following: Creates a new, empty file system. The file system will have an Amazon EFS assigned ID, and an initial lifecycle state creating. Returns with the description of the created file system. Otherwise, this operation returns a FileSystemAlreadyExists error with the ID of the existing file system. For basic use cases, you can use a randomly generated UUID for the creation token. The idempotent operation allows you to retry a CreateFileSystem call without risk of creating an extra file system. This can happen when an initial call fails in a way that leaves it uncertain whether or not a file system was actually created. An example might be that a transport level timeout occurred or your connection was reset. As long as you use the same creation token, if the initial call had succeeded in creating a file system, the client can learn of its existence from the FileSystemAlreadyExists error. For more information, see Creating a file system in the Amazon EFS User Guide. The CreateFileSystem call returns while the file system's lifecycle state is still creating. You can check the file system creation status by calling the DescribeFileSystems operation, which among other things returns the file system state. This operation accepts an optional PerformanceMode parameter that you choose for your file system. We recommend generalPurpose PerformanceMode for all file systems. The maxIO mode is a previous generation performance type that is designed for highly parallelized workloads that can tolerate higher latencies than the generalPurpose mode. MaxIO mode is not supported for One Zone file systems or file systems that use Elastic throughput. The PerformanceMode can't be changed after the file system has been created. For more information, see Amazon EFS performance modes. You can set the throughput mode for the file system using the ThroughputMode parameter. After the file system is fully created, Amazon EFS sets its lifecycle state to available, at which point you can create one or more mount targets for the file system in your VPC. For more information, see CreateMountTarget. You mount your Amazon EFS file system on an EC2 instances in your VPC by using the mount target. For more information, see Amazon EFS: How it Works. This operation requires permissions for the elasticfilesystem:CreateFileSystem action. File systems can be tagged on creation. If tags are specified in the creation action, IAM performs additional authorization on the elasticfilesystem:TagResource action to verify if users have permissions to create tags. Therefore, you must grant explicit permissions to use the elasticfilesystem:TagResource action. For more information, see Granting permissions to tag resources during creation.

```sql
INSERT INTO aws.efs.file_systems (
CreationToken,
PerformanceMode,
Encrypted,
KmsKeyId,
ThroughputMode,
ProvisionedThroughputInMibps,
AvailabilityZoneName,
Backup,
Tags,
region
)
SELECT 
'{{ CreationToken }}' /* required */,
'{{ PerformanceMode }}',
{{ Encrypted }},
'{{ KmsKeyId }}',
'{{ ThroughputMode }}',
{{ ProvisionedThroughputInMibps }},
'{{ AvailabilityZoneName }}',
{{ Backup }},
'{{ Tags }}',
'{{ region }}'
RETURNING
AvailabilityZoneId,
AvailabilityZoneName,
CreationTime,
CreationToken,
Encrypted,
FileSystemArn,
FileSystemId,
FileSystemProtection,
KmsKeyId,
LifeCycleState,
Name,
NumberOfMountTargets,
OwnerId,
PerformanceMode,
ProvisionedThroughputInMibps,
SizeInBytes,
Tags,
ThroughputMode
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
    - name: CreationToken
      value: "{{ CreationToken }}"
    - name: PerformanceMode
      value: "{{ PerformanceMode }}"
      valid_values: ['generalPurpose', 'maxIO']
    - name: Encrypted
      value: {{ Encrypted }}
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
    - name: ThroughputMode
      value: "{{ ThroughputMode }}"
      valid_values: ['bursting', 'provisioned', 'elastic']
    - name: ProvisionedThroughputInMibps
      value: {{ ProvisionedThroughputInMibps }}
    - name: AvailabilityZoneName
      value: "{{ AvailabilityZoneName }}"
    - name: Backup
      value: {{ Backup }}
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
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

Updates the throughput mode or the amount of provisioned throughput of an existing file system.

```sql
UPDATE aws.efs.file_systems
SET 
ThroughputMode = '{{ ThroughputMode }}',
ProvisionedThroughputInMibps = {{ ProvisionedThroughputInMibps }}
WHERE 
file_system_id = '{{ file_system_id }}' --required
AND region = '{{ region }}' --required
RETURNING
AvailabilityZoneId,
AvailabilityZoneName,
CreationTime,
CreationToken,
Encrypted,
FileSystemArn,
FileSystemId,
FileSystemProtection,
KmsKeyId,
LifeCycleState,
Name,
NumberOfMountTargets,
OwnerId,
PerformanceMode,
ProvisionedThroughputInMibps,
SizeInBytes,
Tags,
ThroughputMode;
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

Deletes a file system, permanently severing access to its contents. Upon return, the file system no longer exists and you can't access any contents of the deleted file system. You need to manually delete mount targets attached to a file system before you can delete an EFS file system. This step is performed for you when you use the Amazon Web Services console to delete a file system. You cannot delete a file system that is part of an EFS replication configuration. You need to delete the replication configuration first. You can't delete a file system that is in use. That is, if the file system has any mount targets, you must first delete them. For more information, see DescribeMountTargets and DeleteMountTarget. The DeleteFileSystem call returns while the file system state is still deleting. You can check the file system deletion status by calling the DescribeFileSystems operation, which returns a list of file systems in your account. If you pass file system ID or creation token for the deleted file system, the DescribeFileSystems returns a 404 FileSystemNotFound error. This operation requires permissions for the elasticfilesystem:DeleteFileSystem action.

```sql
DELETE FROM aws.efs.file_systems
WHERE file_system_id = '{{ file_system_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_file_system_protection"
    values={[
        { label: 'update_file_system_protection', value: 'update_file_system_protection' }
    ]}
>
<TabItem value="update_file_system_protection">

Updates protection on the file system. This operation requires permissions for the elasticfilesystem:UpdateFileSystemProtection action.

```sql
EXEC aws.efs.file_systems.update_file_system_protection 
@file_system_id='{{ file_system_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ReplicationOverwriteProtection": "{{ ReplicationOverwriteProtection }}"
}'
;
```
</TabItem>
</Tabs>
