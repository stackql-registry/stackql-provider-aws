--- 
title: vaults
hide_title: false
hide_table_of_contents: false
keywords:
  - vaults
  - glacier
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

Creates, updates, deletes, gets or lists a <code>vaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vaults" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glacier.vaults" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vault"
    values={[
        { label: 'describe_vault', value: 'describe_vault' },
        { label: 'list_vaults', value: 'list_vaults' }
    ]}
>
<TabItem value="describe_vault">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>The Universal Coordinated Time (UTC) date when the vault was created. This value should be a string in the ISO 8601 date format, for example 2012-03-20T17:03:43.221Z.</td>
</tr>
<tr>
    <td><CopyableCode code="last_inventory_date" /></td>
    <td><code>string</code></td>
    <td>The Universal Coordinated Time (UTC) date when Amazon Glacier completed the last vault inventory. This value should be a string in the ISO 8601 date format, for example 2012-03-20T17:03:43.221Z.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_archives" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of archives in the vault as of the last inventory date. This field will return null if an inventory has not yet run on the vault, for example if you just created the vault.</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Total size, in bytes, of the archives in the vault as of the last inventory date. This field will return null if an inventory has not yet run on the vault, for example if you just created the vault.</td>
</tr>
<tr>
    <td><CopyableCode code="vault_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the vault.</td>
</tr>
<tr>
    <td><CopyableCode code="vault_name" /></td>
    <td><code>string</code></td>
    <td>The name of the vault.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_vaults">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>The Universal Coordinated Time (UTC) date when the vault was created. This value should be a string in the ISO 8601 date format, for example 2012-03-20T17:03:43.221Z.</td>
</tr>
<tr>
    <td><CopyableCode code="last_inventory_date" /></td>
    <td><code>string</code></td>
    <td>The Universal Coordinated Time (UTC) date when Amazon Glacier completed the last vault inventory. This value should be a string in the ISO 8601 date format, for example 2012-03-20T17:03:43.221Z.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_archives" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of archives in the vault as of the last inventory date. This field will return null if an inventory has not yet run on the vault, for example if you just created the vault.</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Total size, in bytes, of the archives in the vault as of the last inventory date. This field will return null if an inventory has not yet run on the vault, for example if you just created the vault.</td>
</tr>
<tr>
    <td><CopyableCode code="vault_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the vault.</td>
</tr>
<tr>
    <td><CopyableCode code="vault_name" /></td>
    <td><code>string</code></td>
    <td>The name of the vault.</td>
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
    <td><a href="#describe_vault"><CopyableCode code="describe_vault" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation returns information about a vault, including the vault's Amazon Resource Name (ARN), the date the vault was created, the number of archives it contains, and the total size of all the archives in the vault. The number of archives and their total size are as of the last inventory generation. This means that if you add or remove an archive from a vault, and then immediately use Describe Vault, the change in contents will not be immediately reflected. If you want to retrieve the latest inventory of the vault, use InitiateJob. Amazon Glacier generates vault inventories approximately daily. For more information, see Downloading a Vault Inventory in Amazon Glacier. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Retrieving Vault Metadata in Amazon Glacier and Describe Vault in the Amazon Glacier Developer Guide.</td>
</tr>
<tr>
    <td><a href="#list_vaults"><CopyableCode code="list_vaults" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>This operation lists all vaults owned by the calling user's account. The list returned in the response is ASCII-sorted by vault name. By default, this operation returns up to 10 items. If there are more vaults to list, the response marker field contains the vault Amazon Resource Name (ARN) at which to continue the list with a new List Vaults request; otherwise, the marker field is null. To return a list of vaults that begins at a specific vault, set the marker request parameter to the vault ARN you obtained from a previous List Vaults request. You can also limit the number of vaults returned in the response by specifying the limit parameter in the request. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Retrieving Vault Metadata in Amazon Glacier and List Vaults in the Amazon Glacier Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_vault"><CopyableCode code="create_vault" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation creates a new vault with the specified name. The name of the vault must be unique within a region for an AWS account. You can create up to 1,000 vaults per account. If you need to create more vaults, contact Amazon Glacier. You must use the following guidelines when naming a vault. Names can be between 1 and 255 characters long. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), and '.' (period). This operation is idempotent. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Creating a Vault in Amazon Glacier and Create Vault in the Amazon Glacier Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_archive"><CopyableCode code="delete_archive" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-archive_id"><code>archive_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation deletes an archive from a vault. Subsequent requests to initiate a retrieval of this archive will fail. Archive retrievals that are in progress for this archive ID may or may not succeed according to the following scenarios: If the archive retrieval job is actively preparing the data for download when Amazon Glacier receives the delete archive request, the archival retrieval operation might fail. If the archive retrieval job has successfully prepared the archive for download when Amazon Glacier receives the delete archive request, you will be able to download the output. This operation is idempotent. Attempting to delete an already-deleted archive does not result in an error. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Deleting an Archive in Amazon Glacier and Delete Archive in the Amazon Glacier Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_vault"><CopyableCode code="delete_vault" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation deletes a vault. Amazon Glacier will delete a vault only if there are no archives in the vault as of the last inventory and there have been no writes to the vault since the last inventory. If either of these conditions is not satisfied, the vault deletion fails (that is, the vault is not removed) and Amazon Glacier returns an error. You can use DescribeVault to return the number of archives in a vault, and you can use Initiate a Job (POST jobs) to initiate a new inventory retrieval for a vault. The inventory contains the archive IDs you use to delete archives using Delete Archive (DELETE archive). This operation is idempotent. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Deleting a Vault in Amazon Glacier and Delete Vault in the Amazon Glacier Developer Guide.</td>
</tr>
<tr>
    <td><a href="#abort_multipart_upload"><CopyableCode code="abort_multipart_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-upload_id"><code>upload_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation aborts a multipart upload identified by the upload ID. After the Abort Multipart Upload request succeeds, you cannot upload any more parts to the multipart upload or complete the multipart upload. Aborting a completed upload fails. However, aborting an already-aborted upload will succeed, for a short time. For more information about uploading a part and completing a multipart upload, see UploadMultipartPart and CompleteMultipartUpload. This operation is idempotent. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Working with Archives in Amazon Glacier and Abort Multipart Upload in the Amazon Glacier Developer Guide.</td>
</tr>
<tr>
    <td><a href="#complete_multipart_upload"><CopyableCode code="complete_multipart_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-upload_id"><code>upload_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-archive-size"><code>x-amz-archive-size</code></a>, <a href="#parameter-x-amz-sha256-tree-hash"><code>x-amz-sha256-tree-hash</code></a></td>
    <td>You call this operation to inform Amazon Glacier (Glacier) that all the archive parts have been uploaded and that Glacier can now assemble the archive from the uploaded parts. After assembling and saving the archive to the vault, Glacier returns the URI path of the newly created archive resource. Using the URI path, you can then access the archive. After you upload an archive, you should save the archive ID returned to retrieve the archive at a later point. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see InitiateJob. In the request, you must include the computed SHA256 tree hash of the entire archive you have uploaded. For information about computing a SHA256 tree hash, see Computing Checksums. On the server side, Glacier also constructs the SHA256 tree hash of the assembled archive. If the values match, Glacier saves the archive to the vault; otherwise, it returns an error, and the operation fails. The ListParts operation returns a list of parts uploaded for a specific multipart upload. It includes checksum information for each uploaded part that can be used to debug a bad checksum issue. Additionally, Glacier also checks for any missing content ranges when assembling the archive, if missing content ranges are found, Glacier returns an error and the operation fails. Complete Multipart Upload is an idempotent operation. After your first successful complete multipart upload, if you call the operation again within a short period, the operation will succeed and return the same archive ID. This is useful in the event you experience a network issue that causes an aborted connection or receive a 500 server error, in which case you can repeat your Complete Multipart Upload request and get the same archive ID without creating duplicate archives. Note, however, that after the multipart upload completes, you cannot call the List Parts operation and the multipart upload will not appear in List Multipart Uploads response, even if idempotent complete is possible. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Uploading Large Archives in Parts (Multipart Upload) and Complete Multipart Upload in the Amazon Glacier Developer Guide.</td>
</tr>
<tr>
    <td><a href="#upload_multipart_part"><CopyableCode code="upload_multipart_part" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-upload_id"><code>upload_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-sha256-tree-hash"><code>x-amz-sha256-tree-hash</code></a>, <a href="#parameter-Content-Range"><code>Content-Range</code></a></td>
    <td>This operation uploads a part of an archive. You can upload archive parts in any order. You can also upload them in parallel. You can upload up to 10,000 parts for a multipart upload. Amazon Glacier rejects your upload part request if any of the following conditions is true: SHA256 tree hash does not matchTo ensure that part data is not corrupted in transmission, you compute a SHA256 tree hash of the part and include it in your request. Upon receiving the part data, Amazon Glacier also computes a SHA256 tree hash. If these hash values don't match, the operation fails. For information about computing a SHA256 tree hash, see Computing Checksums. Part size does not matchThe size of each part except the last must match the size specified in the corresponding InitiateMultipartUpload request. The size of the last part must be the same size as, or smaller than, the specified size. If you upload a part whose size is smaller than the part size you specified in your initiate multipart upload request and that part is not the last part, then the upload part request will succeed. However, the subsequent Complete Multipart Upload request will fail. Range does not alignThe byte range value in the request does not align with the part size specified in the corresponding initiate request. For example, if you specify a part size of 4194304 bytes (4 MB), then 0 to 4194303 bytes (4 MB - 1) and 4194304 (4 MB) to 8388607 (8 MB - 1) are valid part ranges. However, if you set a range value of 2 MB to 6 MB, the range does not align with the part size and the upload will fail. This operation is idempotent. If you upload the same part multiple times, the data included in the most recent request overwrites the previously uploaded data. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Uploading Large Archives in Parts (Multipart Upload) and Upload Part in the Amazon Glacier Developer Guide.</td>
</tr>
<tr>
    <td><a href="#abort_vault_lock"><CopyableCode code="abort_vault_lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation aborts the vault locking process if the vault lock is not in the Locked state. If the vault lock is in the Locked state when this operation is requested, the operation returns an AccessDeniedException error. Aborting the vault locking process removes the vault lock policy from the specified vault. A vault lock is put into the InProgress state by calling InitiateVaultLock. A vault lock is put into the Locked state by calling CompleteVaultLock. You can get the state of a vault lock by calling GetVaultLock. For more information about the vault locking process, see Amazon Glacier Vault Lock. For more information about vault lock policies, see Amazon Glacier Access Control with Vault Lock Policies. This operation is idempotent. You can successfully invoke this operation multiple times, if the vault lock is in the InProgress state or if there is no policy associated with the vault.</td>
</tr>
<tr>
    <td><a href="#initiate_vault_lock"><CopyableCode code="initiate_vault_lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation initiates the vault locking process by doing the following: Installing a vault lock policy on the specified vault. Setting the lock state of vault lock to InProgress. Returning a lock ID, which is used to complete the vault locking process. You can set one vault lock policy for each vault and this policy can be up to 20 KB in size. For more information about vault lock policies, see Amazon Glacier Access Control with Vault Lock Policies. You must complete the vault locking process within 24 hours after the vault lock enters the InProgress state. After the 24 hour window ends, the lock ID expires, the vault automatically exits the InProgress state, and the vault lock policy is removed from the vault. You call CompleteVaultLock to complete the vault locking process by setting the state of the vault lock to Locked. After a vault lock is in the Locked state, you cannot initiate a new vault lock for the vault. You can abort the vault locking process by calling AbortVaultLock. You can get the state of the vault lock by calling GetVaultLock. For more information about the vault locking process, Amazon Glacier Vault Lock. If this operation is called when the vault lock is in the InProgress state, the operation returns an AccessDeniedException error. When the vault lock is in the InProgress state you must call AbortVaultLock before you can initiate a new vault lock policy.</td>
</tr>
<tr>
    <td><a href="#complete_vault_lock"><CopyableCode code="complete_vault_lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-lock_id"><code>lock_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation completes the vault locking process by transitioning the vault lock from the InProgress state to the Locked state, which causes the vault lock policy to become unchangeable. A vault lock is put into the InProgress state by calling InitiateVaultLock. You can obtain the state of the vault lock by calling GetVaultLock. For more information about the vault locking process, Amazon Glacier Vault Lock. This operation is idempotent. This request is always successful if the vault lock is in the Locked state and the provided lock ID matches the lock ID originally used to lock the vault. If an invalid lock ID is passed in the request when the vault lock is in the Locked state, the operation returns an AccessDeniedException error. If an invalid lock ID is passed in the request when the vault lock is in the InProgress state, the operation throws an InvalidParameter error.</td>
</tr>
<tr>
    <td><a href="#initiate_job"><CopyableCode code="initiate_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation initiates a job of the specified type, which can be a select, an archival retrieval, or a vault retrieval. For more information about using this operation, see the documentation for the underlying REST API Initiate a Job.</td>
</tr>
<tr>
    <td><a href="#initiate_multipart_upload"><CopyableCode code="initiate_multipart_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-archive-description"><code>x-amz-archive-description</code></a>, <a href="#parameter-x-amz-part-size"><code>x-amz-part-size</code></a></td>
    <td>This operation initiates a multipart upload. Amazon Glacier creates a multipart upload resource and returns its ID in the response. The multipart upload ID is used in subsequent requests to upload parts of an archive (see UploadMultipartPart). When you initiate a multipart upload, you specify the part size in number of bytes. The part size must be a megabyte (1024 KB) multiplied by a power of 2-for example, 1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable part size is 1 MB, and the maximum is 4 GB. Every part you upload to this resource (see UploadMultipartPart), except the last one, must have the same size. The last one can be the same size or smaller. For example, suppose you want to upload a 16.2 MB file. If you initiate the multipart upload with a part size of 4 MB, you will upload four parts of 4 MB each and one part of 0.2 MB. You don't need to know the size of the archive when you start a multipart upload because Amazon Glacier does not require you to specify the overall archive size. After you complete the multipart upload, Amazon Glacier (Glacier) removes the multipart upload resource referenced by the ID. Glacier also removes the multipart upload resource if you cancel the multipart upload or it may be removed if there is no activity for a period of 24 hours. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Uploading Large Archives in Parts (Multipart Upload) and Initiate Multipart Upload in the Amazon Glacier Developer Guide.</td>
</tr>
<tr>
    <td><a href="#upload_archive"><CopyableCode code="upload_archive" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-archive-description"><code>x-amz-archive-description</code></a>, <a href="#parameter-x-amz-sha256-tree-hash"><code>x-amz-sha256-tree-hash</code></a></td>
    <td>This operation adds an archive to a vault. This is a synchronous operation, and for a successful upload, your data is durably persisted. Amazon Glacier returns the archive ID in the x-amz-archive-id header of the response. You must use the archive ID to access your data in Amazon Glacier. After you upload an archive, you should save the archive ID returned so that you can retrieve or delete the archive later. Besides saving the archive ID, you can also index it and give it a friendly name to allow for better searching. You can also use the optional archive description field to specify how the archive is referred to in an external index of archives, such as you might create in Amazon DynamoDB. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see InitiateJob. You must provide a SHA256 tree hash of the data you are uploading. For information about computing a SHA256 tree hash, see Computing Checksums. You can optionally specify an archive description of up to 1,024 printable ASCII characters. You can get the archive description when you either retrieve the archive or get the vault inventory. For more information, see InitiateJob. Amazon Glacier does not interpret the description in any way. An archive description does not need to be unique. You cannot use the description to retrieve or sort the archive list. Archives are immutable. After you upload an archive, you cannot edit the archive or its description. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Uploading an Archive in Amazon Glacier and Upload Archive in the Amazon Glacier Developer Guide.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.</td>
</tr>
<tr id="parameter-archive_id">
    <td><CopyableCode code="archive_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the archive to delete.</td>
</tr>
<tr id="parameter-lock_id">
    <td><CopyableCode code="lock_id" /></td>
    <td><code>string</code></td>
    <td>The lockId value is the lock ID obtained from a InitiateVaultLock request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-upload_id">
    <td><CopyableCode code="upload_id" /></td>
    <td><code>string</code></td>
    <td>The upload ID of the multipart upload.</td>
</tr>
<tr id="parameter-vault_name">
    <td><CopyableCode code="vault_name" /></td>
    <td><code>string</code></td>
    <td>The name of the vault.</td>
</tr>
<tr id="parameter-Content-Range">
    <td><CopyableCode code="Content-Range" /></td>
    <td><code>string</code></td>
    <td>Identifies the range of bytes in the assembled archive that will be uploaded in this part. Amazon Glacier uses this information to assemble the archive in the proper sequence. The format of this header follows RFC 2616. An example header is Content-Range:bytes 0-4194303/*.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>string</code></td>
    <td>The maximum number of vaults to be returned. The default limit is 10. The number of vaults returned might be fewer than the specified limit, but the number of returned vaults never exceeds the limit.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>A string used for pagination. The marker specifies the vault ARN after which the listing of vaults should begin.</td>
</tr>
<tr id="parameter-x-amz-archive-description">
    <td><CopyableCode code="x-amz-archive-description" /></td>
    <td><code>string</code></td>
    <td>The optional description of the archive you are uploading.</td>
</tr>
<tr id="parameter-x-amz-archive-size">
    <td><CopyableCode code="x-amz-archive-size" /></td>
    <td><code>string</code></td>
    <td>The total size, in bytes, of the entire archive. This value should be the sum of all the sizes of the individual parts that you uploaded.</td>
</tr>
<tr id="parameter-x-amz-part-size">
    <td><CopyableCode code="x-amz-part-size" /></td>
    <td><code>string</code></td>
    <td>The size of each part except the last, in bytes. The last part can be smaller than this part size.</td>
</tr>
<tr id="parameter-x-amz-sha256-tree-hash">
    <td><CopyableCode code="x-amz-sha256-tree-hash" /></td>
    <td><code>string</code></td>
    <td>The SHA256 tree hash of the data being uploaded.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vault"
    values={[
        { label: 'describe_vault', value: 'describe_vault' },
        { label: 'list_vaults', value: 'list_vaults' }
    ]}
>
<TabItem value="describe_vault">

This operation returns information about a vault, including the vault's Amazon Resource Name (ARN), the date the vault was created, the number of archives it contains, and the total size of all the archives in the vault. The number of archives and their total size are as of the last inventory generation. This means that if you add or remove an archive from a vault, and then immediately use Describe Vault, the change in contents will not be immediately reflected. If you want to retrieve the latest inventory of the vault, use InitiateJob. Amazon Glacier generates vault inventories approximately daily. For more information, see Downloading a Vault Inventory in Amazon Glacier. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Retrieving Vault Metadata in Amazon Glacier and Describe Vault in the Amazon Glacier Developer Guide.

```sql
SELECT
creation_date,
last_inventory_date,
number_of_archives,
size_in_bytes,
vault_arn,
vault_name
FROM aws.glacier.vaults
WHERE account_id = '{{ account_id }}' -- required
AND vault_name = '{{ vault_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_vaults">

This operation lists all vaults owned by the calling user's account. The list returned in the response is ASCII-sorted by vault name. By default, this operation returns up to 10 items. If there are more vaults to list, the response marker field contains the vault Amazon Resource Name (ARN) at which to continue the list with a new List Vaults request; otherwise, the marker field is null. To return a list of vaults that begins at a specific vault, set the marker request parameter to the vault ARN you obtained from a previous List Vaults request. You can also limit the number of vaults returned in the response by specifying the limit parameter in the request. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Retrieving Vault Metadata in Amazon Glacier and List Vaults in the Amazon Glacier Developer Guide.

```sql
SELECT
creation_date,
last_inventory_date,
number_of_archives,
size_in_bytes,
vault_arn,
vault_name
FROM aws.glacier.vaults
WHERE account_id = '{{ account_id }}' -- required
AND region = '{{ region }}' -- required
AND marker = '{{ marker }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vault"
    values={[
        { label: 'create_vault', value: 'create_vault' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vault">

This operation creates a new vault with the specified name. The name of the vault must be unique within a region for an AWS account. You can create up to 1,000 vaults per account. If you need to create more vaults, contact Amazon Glacier. You must use the following guidelines when naming a vault. Names can be between 1 and 255 characters long. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), and '.' (period). This operation is idempotent. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Creating a Vault in Amazon Glacier and Create Vault in the Amazon Glacier Developer Guide.

```sql
INSERT INTO aws.glacier.vaults (
account_id,
vault_name,
region
)
SELECT 
'{{ account_id }}',
'{{ vault_name }}',
'{{ region }}'
RETURNING
location
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vaults
  props:
    - name: account_id
      value: "{{ account_id }}"
      description: Required parameter for the vaults resource.
    - name: vault_name
      value: "{{ vault_name }}"
      description: Required parameter for the vaults resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vaults resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_archive"
    values={[
        { label: 'delete_archive', value: 'delete_archive' },
        { label: 'delete_vault', value: 'delete_vault' }
    ]}
>
<TabItem value="delete_archive">

This operation deletes an archive from a vault. Subsequent requests to initiate a retrieval of this archive will fail. Archive retrievals that are in progress for this archive ID may or may not succeed according to the following scenarios: If the archive retrieval job is actively preparing the data for download when Amazon Glacier receives the delete archive request, the archival retrieval operation might fail. If the archive retrieval job has successfully prepared the archive for download when Amazon Glacier receives the delete archive request, you will be able to download the output. This operation is idempotent. Attempting to delete an already-deleted archive does not result in an error. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Deleting an Archive in Amazon Glacier and Delete Archive in the Amazon Glacier Developer Guide.

```sql
DELETE FROM aws.glacier.vaults
WHERE account_id = '{{ account_id }}' --required
AND vault_name = '{{ vault_name }}' --required
AND archive_id = '{{ archive_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_vault">

This operation deletes a vault. Amazon Glacier will delete a vault only if there are no archives in the vault as of the last inventory and there have been no writes to the vault since the last inventory. If either of these conditions is not satisfied, the vault deletion fails (that is, the vault is not removed) and Amazon Glacier returns an error. You can use DescribeVault to return the number of archives in a vault, and you can use Initiate a Job (POST jobs) to initiate a new inventory retrieval for a vault. The inventory contains the archive IDs you use to delete archives using Delete Archive (DELETE archive). This operation is idempotent. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Deleting a Vault in Amazon Glacier and Delete Vault in the Amazon Glacier Developer Guide.

```sql
DELETE FROM aws.glacier.vaults
WHERE account_id = '{{ account_id }}' --required
AND vault_name = '{{ vault_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="abort_multipart_upload"
    values={[
        { label: 'abort_multipart_upload', value: 'abort_multipart_upload' },
        { label: 'complete_multipart_upload', value: 'complete_multipart_upload' },
        { label: 'upload_multipart_part', value: 'upload_multipart_part' },
        { label: 'abort_vault_lock', value: 'abort_vault_lock' },
        { label: 'initiate_vault_lock', value: 'initiate_vault_lock' },
        { label: 'complete_vault_lock', value: 'complete_vault_lock' },
        { label: 'initiate_job', value: 'initiate_job' },
        { label: 'initiate_multipart_upload', value: 'initiate_multipart_upload' },
        { label: 'upload_archive', value: 'upload_archive' }
    ]}
>
<TabItem value="abort_multipart_upload">

This operation aborts a multipart upload identified by the upload ID. After the Abort Multipart Upload request succeeds, you cannot upload any more parts to the multipart upload or complete the multipart upload. Aborting a completed upload fails. However, aborting an already-aborted upload will succeed, for a short time. For more information about uploading a part and completing a multipart upload, see UploadMultipartPart and CompleteMultipartUpload. This operation is idempotent. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Working with Archives in Amazon Glacier and Abort Multipart Upload in the Amazon Glacier Developer Guide.

```sql
EXEC aws.glacier.vaults.abort_multipart_upload 
@account_id='{{ account_id }}' --required, 
@vault_name='{{ vault_name }}' --required, 
@upload_id='{{ upload_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="complete_multipart_upload">

You call this operation to inform Amazon Glacier (Glacier) that all the archive parts have been uploaded and that Glacier can now assemble the archive from the uploaded parts. After assembling and saving the archive to the vault, Glacier returns the URI path of the newly created archive resource. Using the URI path, you can then access the archive. After you upload an archive, you should save the archive ID returned to retrieve the archive at a later point. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see InitiateJob. In the request, you must include the computed SHA256 tree hash of the entire archive you have uploaded. For information about computing a SHA256 tree hash, see Computing Checksums. On the server side, Glacier also constructs the SHA256 tree hash of the assembled archive. If the values match, Glacier saves the archive to the vault; otherwise, it returns an error, and the operation fails. The ListParts operation returns a list of parts uploaded for a specific multipart upload. It includes checksum information for each uploaded part that can be used to debug a bad checksum issue. Additionally, Glacier also checks for any missing content ranges when assembling the archive, if missing content ranges are found, Glacier returns an error and the operation fails. Complete Multipart Upload is an idempotent operation. After your first successful complete multipart upload, if you call the operation again within a short period, the operation will succeed and return the same archive ID. This is useful in the event you experience a network issue that causes an aborted connection or receive a 500 server error, in which case you can repeat your Complete Multipart Upload request and get the same archive ID without creating duplicate archives. Note, however, that after the multipart upload completes, you cannot call the List Parts operation and the multipart upload will not appear in List Multipart Uploads response, even if idempotent complete is possible. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Uploading Large Archives in Parts (Multipart Upload) and Complete Multipart Upload in the Amazon Glacier Developer Guide.

```sql
EXEC aws.glacier.vaults.complete_multipart_upload 
@account_id='{{ account_id }}' --required, 
@vault_name='{{ vault_name }}' --required, 
@upload_id='{{ upload_id }}' --required, 
@region='{{ region }}' --required, 
@x-amz-archive-size='{{ x-amz-archive-size }}', 
@x-amz-sha256-tree-hash='{{ x-amz-sha256-tree-hash }}'
;
```
</TabItem>
<TabItem value="upload_multipart_part">

This operation uploads a part of an archive. You can upload archive parts in any order. You can also upload them in parallel. You can upload up to 10,000 parts for a multipart upload. Amazon Glacier rejects your upload part request if any of the following conditions is true: SHA256 tree hash does not matchTo ensure that part data is not corrupted in transmission, you compute a SHA256 tree hash of the part and include it in your request. Upon receiving the part data, Amazon Glacier also computes a SHA256 tree hash. If these hash values don't match, the operation fails. For information about computing a SHA256 tree hash, see Computing Checksums. Part size does not matchThe size of each part except the last must match the size specified in the corresponding InitiateMultipartUpload request. The size of the last part must be the same size as, or smaller than, the specified size. If you upload a part whose size is smaller than the part size you specified in your initiate multipart upload request and that part is not the last part, then the upload part request will succeed. However, the subsequent Complete Multipart Upload request will fail. Range does not alignThe byte range value in the request does not align with the part size specified in the corresponding initiate request. For example, if you specify a part size of 4194304 bytes (4 MB), then 0 to 4194303 bytes (4 MB - 1) and 4194304 (4 MB) to 8388607 (8 MB - 1) are valid part ranges. However, if you set a range value of 2 MB to 6 MB, the range does not align with the part size and the upload will fail. This operation is idempotent. If you upload the same part multiple times, the data included in the most recent request overwrites the previously uploaded data. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Uploading Large Archives in Parts (Multipart Upload) and Upload Part in the Amazon Glacier Developer Guide.

```sql
EXEC aws.glacier.vaults.upload_multipart_part 
@account_id='{{ account_id }}' --required, 
@vault_name='{{ vault_name }}' --required, 
@upload_id='{{ upload_id }}' --required, 
@region='{{ region }}' --required, 
@x-amz-sha256-tree-hash='{{ x-amz-sha256-tree-hash }}', 
@Content-Range='{{ Content-Range }}' 
@@json=
'{
"body": "{{ body }}"
}'
;
```
</TabItem>
<TabItem value="abort_vault_lock">

This operation aborts the vault locking process if the vault lock is not in the Locked state. If the vault lock is in the Locked state when this operation is requested, the operation returns an AccessDeniedException error. Aborting the vault locking process removes the vault lock policy from the specified vault. A vault lock is put into the InProgress state by calling InitiateVaultLock. A vault lock is put into the Locked state by calling CompleteVaultLock. You can get the state of a vault lock by calling GetVaultLock. For more information about the vault locking process, see Amazon Glacier Vault Lock. For more information about vault lock policies, see Amazon Glacier Access Control with Vault Lock Policies. This operation is idempotent. You can successfully invoke this operation multiple times, if the vault lock is in the InProgress state or if there is no policy associated with the vault.

```sql
EXEC aws.glacier.vaults.abort_vault_lock 
@account_id='{{ account_id }}' --required, 
@vault_name='{{ vault_name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="initiate_vault_lock">

This operation initiates the vault locking process by doing the following: Installing a vault lock policy on the specified vault. Setting the lock state of vault lock to InProgress. Returning a lock ID, which is used to complete the vault locking process. You can set one vault lock policy for each vault and this policy can be up to 20 KB in size. For more information about vault lock policies, see Amazon Glacier Access Control with Vault Lock Policies. You must complete the vault locking process within 24 hours after the vault lock enters the InProgress state. After the 24 hour window ends, the lock ID expires, the vault automatically exits the InProgress state, and the vault lock policy is removed from the vault. You call CompleteVaultLock to complete the vault locking process by setting the state of the vault lock to Locked. After a vault lock is in the Locked state, you cannot initiate a new vault lock for the vault. You can abort the vault locking process by calling AbortVaultLock. You can get the state of the vault lock by calling GetVaultLock. For more information about the vault locking process, Amazon Glacier Vault Lock. If this operation is called when the vault lock is in the InProgress state, the operation returns an AccessDeniedException error. When the vault lock is in the InProgress state you must call AbortVaultLock before you can initiate a new vault lock policy.

```sql
EXEC aws.glacier.vaults.initiate_vault_lock 
@account_id='{{ account_id }}' --required, 
@vault_name='{{ vault_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"policy": "{{ policy }}"
}'
;
```
</TabItem>
<TabItem value="complete_vault_lock">

This operation completes the vault locking process by transitioning the vault lock from the InProgress state to the Locked state, which causes the vault lock policy to become unchangeable. A vault lock is put into the InProgress state by calling InitiateVaultLock. You can obtain the state of the vault lock by calling GetVaultLock. For more information about the vault locking process, Amazon Glacier Vault Lock. This operation is idempotent. This request is always successful if the vault lock is in the Locked state and the provided lock ID matches the lock ID originally used to lock the vault. If an invalid lock ID is passed in the request when the vault lock is in the Locked state, the operation returns an AccessDeniedException error. If an invalid lock ID is passed in the request when the vault lock is in the InProgress state, the operation throws an InvalidParameter error.

```sql
EXEC aws.glacier.vaults.complete_vault_lock 
@account_id='{{ account_id }}' --required, 
@vault_name='{{ vault_name }}' --required, 
@lock_id='{{ lock_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="initiate_job">

This operation initiates a job of the specified type, which can be a select, an archival retrieval, or a vault retrieval. For more information about using this operation, see the documentation for the underlying REST API Initiate a Job.

```sql
EXEC aws.glacier.vaults.initiate_job 
@account_id='{{ account_id }}' --required, 
@vault_name='{{ vault_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"jobParameters": "{{ jobParameters }}"
}'
;
```
</TabItem>
<TabItem value="initiate_multipart_upload">

This operation initiates a multipart upload. Amazon Glacier creates a multipart upload resource and returns its ID in the response. The multipart upload ID is used in subsequent requests to upload parts of an archive (see UploadMultipartPart). When you initiate a multipart upload, you specify the part size in number of bytes. The part size must be a megabyte (1024 KB) multiplied by a power of 2-for example, 1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable part size is 1 MB, and the maximum is 4 GB. Every part you upload to this resource (see UploadMultipartPart), except the last one, must have the same size. The last one can be the same size or smaller. For example, suppose you want to upload a 16.2 MB file. If you initiate the multipart upload with a part size of 4 MB, you will upload four parts of 4 MB each and one part of 0.2 MB. You don't need to know the size of the archive when you start a multipart upload because Amazon Glacier does not require you to specify the overall archive size. After you complete the multipart upload, Amazon Glacier (Glacier) removes the multipart upload resource referenced by the ID. Glacier also removes the multipart upload resource if you cancel the multipart upload or it may be removed if there is no activity for a period of 24 hours. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Uploading Large Archives in Parts (Multipart Upload) and Initiate Multipart Upload in the Amazon Glacier Developer Guide.

```sql
EXEC aws.glacier.vaults.initiate_multipart_upload 
@account_id='{{ account_id }}' --required, 
@vault_name='{{ vault_name }}' --required, 
@region='{{ region }}' --required, 
@x-amz-archive-description='{{ x-amz-archive-description }}', 
@x-amz-part-size='{{ x-amz-part-size }}'
;
```
</TabItem>
<TabItem value="upload_archive">

This operation adds an archive to a vault. This is a synchronous operation, and for a successful upload, your data is durably persisted. Amazon Glacier returns the archive ID in the x-amz-archive-id header of the response. You must use the archive ID to access your data in Amazon Glacier. After you upload an archive, you should save the archive ID returned so that you can retrieve or delete the archive later. Besides saving the archive ID, you can also index it and give it a friendly name to allow for better searching. You can also use the optional archive description field to specify how the archive is referred to in an external index of archives, such as you might create in Amazon DynamoDB. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see InitiateJob. You must provide a SHA256 tree hash of the data you are uploading. For information about computing a SHA256 tree hash, see Computing Checksums. You can optionally specify an archive description of up to 1,024 printable ASCII characters. You can get the archive description when you either retrieve the archive or get the vault inventory. For more information, see InitiateJob. Amazon Glacier does not interpret the description in any way. An archive description does not need to be unique. You cannot use the description to retrieve or sort the archive list. Archives are immutable. After you upload an archive, you cannot edit the archive or its description. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Uploading an Archive in Amazon Glacier and Upload Archive in the Amazon Glacier Developer Guide.

```sql
EXEC aws.glacier.vaults.upload_archive 
@vault_name='{{ vault_name }}' --required, 
@account_id='{{ account_id }}' --required, 
@region='{{ region }}' --required, 
@x-amz-archive-description='{{ x-amz-archive-description }}', 
@x-amz-sha256-tree-hash='{{ x-amz-sha256-tree-hash }}' 
@@json=
'{
"body": "{{ body }}"
}'
;
```
</TabItem>
</Tabs>
