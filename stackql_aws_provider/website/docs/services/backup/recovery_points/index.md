--- 
title: recovery_points
hide_title: false
hide_table_of_contents: false
keywords:
  - recovery_points
  - backup
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

Creates, updates, deletes, gets or lists a <code>recovery_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recovery_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.recovery_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_recovery_point"
    values={[
        { label: 'describe_recovery_point', value: 'describe_recovery_point' }
    ]}
>
<TabItem value="describe_recovery_point">

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
    <td><CopyableCode code="backup_size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size, in bytes, of a backup.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vault_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vault_name" /></td>
    <td><code>string</code></td>
    <td>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;&#123;2,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="calculated_lifecycle" /></td>
    <td><code>object</code></td>
    <td>A CalculatedLifecycle object containing DeleteAt and MoveToColdStorageAt timestamps.</td>
</tr>
<tr>
    <td><CopyableCode code="completion_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a job to create a recovery point is completed, in Unix format and Coordinated Universal Time (UTC). The value of CompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="composite_member_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of a resource within a composite group, such as nested (child) recovery point belonging to a composite (parent) stack. The ID is transferred from the logical ID within a stack.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Contains identifying information about the creation of a recovery point, including the BackupPlanArn, BackupPlanId, BackupPlanVersion, and BackupRuleId of the backup plan used to create it.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a recovery point is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>The server-side encryption key used to protect your backups; for example, arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key_type" /></td>
    <td><code>string</code></td>
    <td>The type of encryption key used for the recovery point. Valid values are CUSTOMER_MANAGED_KMS_KEY for customer-managed keys or Amazon Web Services_OWNED_KMS_KEY for Amazon Web Services-owned keys. (AWS_OWNED_KMS_KEY, CUSTOMER_MANAGED_KMS_KEY)</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>Specifies the IAM role ARN used to create the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.</td>
</tr>
<tr>
    <td><CopyableCode code="index_status" /></td>
    <td><code>string</code></td>
    <td>This is the current status for the backup index associated with the specified recovery point. Statuses are: PENDING | ACTIVE | FAILED | DELETING A recovery point with an index that has the status of ACTIVE can be included in a search. (PENDING, ACTIVE, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="index_status_message" /></td>
    <td><code>string</code></td>
    <td>A string in the form of a detailed message explaining the status of a backup index associated with the recovery point.</td>
</tr>
<tr>
    <td><CopyableCode code="initiation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the backup job that created this recovery point was initiated, in Unix format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="is_encrypted" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that is returned as TRUE if the specified recovery point is encrypted, or FALSE if the recovery point is not encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="is_parent" /></td>
    <td><code>boolean</code></td>
    <td>This returns the boolean value that a recovery point is a parent (composite) job.</td>
</tr>
<tr>
    <td><CopyableCode code="last_restore_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a recovery point was last restored, in Unix format and Coordinated Universal Time (UTC). The value of LastRestoreTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle" /></td>
    <td><code>object</code></td>
    <td>Specifies the time period, in days, before a recovery point transitions to cold storage or is deleted. Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the retention setting must be 90 days greater than the transition to cold after days setting. The transition to cold after days setting can't be changed after a backup has been transitioned to cold. Resource types that can transition to cold storage are listed in the Feature availability by resource table. Backup ignores this expression for other resource types. To remove the existing lifecycle and retention periods and keep your recovery points indefinitely, specify -1 for MoveToColdStorageAfterDays and DeleteAfterDays.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>This is an ARN that uniquely identifies a parent (composite) recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a saved resource. The format of the ARN depends on the resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource that belongs to the specified backup.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services resource to save as a recovery point; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_\.&#93;&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_results" /></td>
    <td><code>array</code></td>
    <td>Contains the latest scanning results against the recovery point and currently include MalwareScanner, ScanJobState, Findings, and LastScanTimestamp</td>
</tr>
<tr>
    <td><CopyableCode code="source_backup_vault_arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies the source vault where the resource was originally backed up in; for example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault. If the recovery is restored to the same Amazon Web Services account or Region, this value will be null.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A status code specifying the state of the recovery point. For more information, see Recovery point status in the Backup Developer Guide. CREATING status indicates that an Backup job has been initiated for a resource. The backup process has started and is actively processing a backup job for the associated recovery point. AVAILABLE status indicates that the backup was successfully created for the recovery point. The backup process has completed without any issues, and the recovery point is now ready for use. PARTIAL status indicates a composite recovery point has one or more nested recovery points that were not in the backup. EXPIRED status indicates that the recovery point has exceeded its retention period, but Backup lacks permission or is otherwise unable to delete it. To manually delete these recovery points, see Step 3: Delete the recovery points in the Clean up resources section of Getting started. STOPPED status occurs on a continuous backup where a user has taken some action that causes the continuous backup to be disabled. This can be caused by the removal of permissions, turning off versioning, turning off events being sent to EventBridge, or disabling the EventBridge rules that are put in place by Backup. For recovery points of Amazon S3, Amazon RDS, and Amazon Aurora resources, this status occurs when the retention period of a continuous backup rule is changed. To resolve STOPPED status, ensure that all requested permissions are in place and that versioning is enabled on the S3 bucket. Once these conditions are met, the next instance of a backup rule running will result in a new continuous recovery point being created. The recovery points with STOPPED status do not need to be deleted. For SAP HANA on Amazon EC2 STOPPED status occurs due to user action, application misconfiguration, or backup failure. To ensure that future continuous backups succeed, refer to the recovery point status and check SAP HANA for details. (COMPLETED, PARTIAL, DELETING, EXPIRED, AVAILABLE, STOPPED, CREATING)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A status message explaining the status of the recovery point.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_class" /></td>
    <td><code>string</code></td>
    <td>Specifies the storage class of the recovery point. Valid values are WARM or COLD. (WARM, COLD, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="vault_type" /></td>
    <td><code>string</code></td>
    <td>The type of vault in which the described recovery point is stored. (BACKUP_VAULT, LOGICALLY_AIR_GAPPED_BACKUP_VAULT, RESTORE_ACCESS_BACKUP_VAULT)</td>
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
    <td><a href="#describe_recovery_point"><CopyableCode code="describe_recovery_point" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-recovery_point_arn"><code>recovery_point_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-backupVaultAccountId"><code>backupVaultAccountId</code></a></td>
    <td>Returns metadata associated with a recovery point, including ID, status, encryption, and lifecycle.</td>
</tr>
<tr>
    <td><a href="#disassociate_recovery_point"><CopyableCode code="disassociate_recovery_point" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-recovery_point_arn"><code>recovery_point_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified continuous backup recovery point from Backup and releases control of that continuous backup to the source service, such as Amazon RDS. The source service will continue to create and retain continuous backups using the lifecycle that you specified in your original backup plan. Does not support snapshot backup recovery points.</td>
</tr>
<tr>
    <td><a href="#delete_recovery_point"><CopyableCode code="delete_recovery_point" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-recovery_point_arn"><code>recovery_point_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the recovery point specified by a recovery point ID. If the recovery point ID belongs to a continuous backup, calling this endpoint deletes the existing continuous backup and stops future continuous backup. When an IAM role's permissions are insufficient to call this API, the service sends back an HTTP 200 response with an empty HTTP body, but the recovery point is not deleted. Instead, it enters an EXPIRED state. EXPIRED recovery points can be deleted with this API once the IAM role has the iam:CreateServiceLinkedRole action. To learn more about adding this role, see Troubleshooting manual deletions. If the user or role is deleted or the permission within the role is removed, the deletion will not be successful and will enter an EXPIRED state.</td>
</tr>
<tr>
    <td><a href="#update_recovery_point_lifecycle"><CopyableCode code="update_recovery_point_lifecycle" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-recovery_point_arn"><code>recovery_point_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets the transition lifecycle of a recovery point. The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define. Resource types that can transition to cold storage are listed in the Feature availability by resource table. Backup ignores this expression for other resource types. Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. If your lifecycle currently uses the parameters DeleteAfterDays and MoveToColdStorageAfterDays, include these parameters and their values when you call this operation. Not including them may result in your plan updating with null values. This operation does not support continuous backups.</td>
</tr>
<tr>
    <td><a href="#disassociate_recovery_point_from_parent"><CopyableCode code="disassociate_recovery_point_from_parent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-recovery_point_arn"><code>recovery_point_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action to a specific child (nested) recovery point removes the relationship between the specified recovery point and its parent (composite) recovery point.</td>
</tr>
<tr>
    <td><a href="#update_recovery_point_index_settings"><CopyableCode code="update_recovery_point_index_settings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-recovery_point_arn"><code>recovery_point_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation updates the settings of a recovery point index. Required: BackupVaultName, RecoveryPointArn, and IAMRoleArn</td>
</tr>
<tr>
    <td><a href="#start_copy_job"><CopyableCode code="start_copy_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RecoveryPointArn"><code>RecoveryPointArn</code></a>, <a href="#parameter-SourceBackupVaultName"><code>SourceBackupVaultName</code></a>, <a href="#parameter-DestinationBackupVaultArn"><code>DestinationBackupVaultArn</code></a>, <a href="#parameter-IamRoleArn"><code>IamRoleArn</code></a></td>
    <td></td>
    <td>Starts a job to create a one-time copy of the specified resource. Does not support continuous backups. See Copy job retry for information on how Backup retries copy job operations.</td>
</tr>
<tr>
    <td><a href="#start_restore_job"><CopyableCode code="start_restore_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RecoveryPointArn"><code>RecoveryPointArn</code></a>, <a href="#parameter-Metadata"><code>Metadata</code></a></td>
    <td></td>
    <td>Recovers the saved resource identified by an Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><a href="#start_scan_job"><CopyableCode code="start_scan_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BackupVaultName"><code>BackupVaultName</code></a>, <a href="#parameter-IamRoleArn"><code>IamRoleArn</code></a>, <a href="#parameter-MalwareScanner"><code>MalwareScanner</code></a>, <a href="#parameter-RecoveryPointArn"><code>RecoveryPointArn</code></a>, <a href="#parameter-ScanMode"><code>ScanMode</code></a>, <a href="#parameter-ScannerRoleArn"><code>ScannerRoleArn</code></a></td>
    <td></td>
    <td>Starts scanning jobs for specific resources.</td>
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
<tr id="parameter-backup_vault_name">
    <td><CopyableCode code="backup_vault_name" /></td>
    <td><code>string</code></td>
    <td>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. Accepted characters include lowercase letters, numbers, and hyphens.</td>
</tr>
<tr id="parameter-recovery_point_arn">
    <td><CopyableCode code="recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-backupVaultAccountId">
    <td><CopyableCode code="backupVaultAccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID of the specified backup vault.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_recovery_point"
    values={[
        { label: 'describe_recovery_point', value: 'describe_recovery_point' }
    ]}
>
<TabItem value="describe_recovery_point">

Returns metadata associated with a recovery point, including ID, status, encryption, and lifecycle.

```sql
SELECT
backup_size_in_bytes,
backup_vault_arn,
backup_vault_name,
calculated_lifecycle,
completion_date,
composite_member_identifier,
created_by,
creation_date,
encryption_key_arn,
encryption_key_type,
iam_role_arn,
index_status,
index_status_message,
initiation_date,
is_encrypted,
is_parent,
last_restore_time,
lifecycle,
parent_recovery_point_arn,
recovery_point_arn,
resource_arn,
resource_name,
resource_type,
scan_results,
source_backup_vault_arn,
status,
status_message,
storage_class,
vault_type
FROM aws.backup.recovery_points
WHERE backup_vault_name = '{{ backup_vault_name }}' -- required
AND recovery_point_arn = '{{ recovery_point_arn }}' -- required
AND region = '{{ region }}' -- required
AND backupVaultAccountId = '{{ backupVaultAccountId }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="disassociate_recovery_point"
    values={[
        { label: 'disassociate_recovery_point', value: 'disassociate_recovery_point' }
    ]}
>
<TabItem value="disassociate_recovery_point">

Deletes the specified continuous backup recovery point from Backup and releases control of that continuous backup to the source service, such as Amazon RDS. The source service will continue to create and retain continuous backups using the lifecycle that you specified in your original backup plan. Does not support snapshot backup recovery points.

```sql
UPDATE aws.backup.recovery_points
SET 
-- No updatable properties
WHERE 
backup_vault_name = '{{ backup_vault_name }}' --required
AND recovery_point_arn = '{{ recovery_point_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_recovery_point"
    values={[
        { label: 'delete_recovery_point', value: 'delete_recovery_point' }
    ]}
>
<TabItem value="delete_recovery_point">

Deletes the recovery point specified by a recovery point ID. If the recovery point ID belongs to a continuous backup, calling this endpoint deletes the existing continuous backup and stops future continuous backup. When an IAM role's permissions are insufficient to call this API, the service sends back an HTTP 200 response with an empty HTTP body, but the recovery point is not deleted. Instead, it enters an EXPIRED state. EXPIRED recovery points can be deleted with this API once the IAM role has the iam:CreateServiceLinkedRole action. To learn more about adding this role, see Troubleshooting manual deletions. If the user or role is deleted or the permission within the role is removed, the deletion will not be successful and will enter an EXPIRED state.

```sql
DELETE FROM aws.backup.recovery_points
WHERE backup_vault_name = '{{ backup_vault_name }}' --required
AND recovery_point_arn = '{{ recovery_point_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_recovery_point_lifecycle"
    values={[
        { label: 'update_recovery_point_lifecycle', value: 'update_recovery_point_lifecycle' },
        { label: 'disassociate_recovery_point_from_parent', value: 'disassociate_recovery_point_from_parent' },
        { label: 'update_recovery_point_index_settings', value: 'update_recovery_point_index_settings' },
        { label: 'start_copy_job', value: 'start_copy_job' },
        { label: 'start_restore_job', value: 'start_restore_job' },
        { label: 'start_scan_job', value: 'start_scan_job' }
    ]}
>
<TabItem value="update_recovery_point_lifecycle">

Sets the transition lifecycle of a recovery point. The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define. Resource types that can transition to cold storage are listed in the Feature availability by resource table. Backup ignores this expression for other resource types. Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. If your lifecycle currently uses the parameters DeleteAfterDays and MoveToColdStorageAfterDays, include these parameters and their values when you call this operation. Not including them may result in your plan updating with null values. This operation does not support continuous backups.

```sql
EXEC aws.backup.recovery_points.update_recovery_point_lifecycle 
@backup_vault_name='{{ backup_vault_name }}' --required, 
@recovery_point_arn='{{ recovery_point_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Lifecycle": "{{ Lifecycle }}"
}'
;
```
</TabItem>
<TabItem value="disassociate_recovery_point_from_parent">

This action to a specific child (nested) recovery point removes the relationship between the specified recovery point and its parent (composite) recovery point.

```sql
EXEC aws.backup.recovery_points.disassociate_recovery_point_from_parent 
@backup_vault_name='{{ backup_vault_name }}' --required, 
@recovery_point_arn='{{ recovery_point_arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="update_recovery_point_index_settings">

This operation updates the settings of a recovery point index. Required: BackupVaultName, RecoveryPointArn, and IAMRoleArn

```sql
EXEC aws.backup.recovery_points.update_recovery_point_index_settings 
@backup_vault_name='{{ backup_vault_name }}' --required, 
@recovery_point_arn='{{ recovery_point_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"IamRoleArn": "{{ IamRoleArn }}", 
"Index": "{{ Index }}"
}'
;
```
</TabItem>
<TabItem value="start_copy_job">

Starts a job to create a one-time copy of the specified resource. Does not support continuous backups. See Copy job retry for information on how Backup retries copy job operations.

```sql
EXEC aws.backup.recovery_points.start_copy_job 
@region='{{ region }}' --required 
@@json=
'{
"RecoveryPointArn": "{{ RecoveryPointArn }}", 
"SourceBackupVaultName": "{{ SourceBackupVaultName }}", 
"DestinationBackupVaultArn": "{{ DestinationBackupVaultArn }}", 
"IamRoleArn": "{{ IamRoleArn }}", 
"IdempotencyToken": "{{ IdempotencyToken }}", 
"Lifecycle": "{{ Lifecycle }}"
}'
;
```
</TabItem>
<TabItem value="start_restore_job">

Recovers the saved resource identified by an Amazon Resource Name (ARN).

```sql
EXEC aws.backup.recovery_points.start_restore_job 
@region='{{ region }}' --required 
@@json=
'{
"RecoveryPointArn": "{{ RecoveryPointArn }}", 
"Metadata": "{{ Metadata }}", 
"IamRoleArn": "{{ IamRoleArn }}", 
"IdempotencyToken": "{{ IdempotencyToken }}", 
"ResourceType": "{{ ResourceType }}", 
"CopySourceTagsToRestoredResource": {{ CopySourceTagsToRestoredResource }}
}'
;
```
</TabItem>
<TabItem value="start_scan_job">

Starts scanning jobs for specific resources.

```sql
EXEC aws.backup.recovery_points.start_scan_job 
@region='{{ region }}' --required 
@@json=
'{
"BackupVaultName": "{{ BackupVaultName }}", 
"ContinuousScanEndTime": "{{ ContinuousScanEndTime }}", 
"IamRoleArn": "{{ IamRoleArn }}", 
"IdempotencyToken": "{{ IdempotencyToken }}", 
"MalwareScanner": "{{ MalwareScanner }}", 
"RecoveryPointArn": "{{ RecoveryPointArn }}", 
"ScanBaseRecoveryPointArn": "{{ ScanBaseRecoveryPointArn }}", 
"ScanMode": "{{ ScanMode }}", 
"ScannerRoleArn": "{{ ScannerRoleArn }}"
}'
;
```
</TabItem>
</Tabs>
