--- 
title: backup_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_jobs
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

Creates, updates, deletes, gets or lists a <code>backup_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backup_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.backup_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_backup_job"
    values={[
        { label: 'describe_backup_job', value: 'describe_backup_job' },
        { label: 'list_backup_jobs', value: 'list_backup_jobs' }
    ]}
>
<TabItem value="describe_backup_job">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>Returns the account ID that owns the backup job. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_job_id" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a request to Backup to back up a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_options" /></td>
    <td><code>object</code></td>
    <td>Represents the options specified as part of backup plan or on-demand backup job.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size, in bytes, of a backup (recovery point). This value can render differently depending on the resource type as Backup pulls in data information from other Amazon Web Services services. For example, the value returned may show a value of 0, which may differ from the anticipated value. The expected behavior for values by resource type are described as follows: Amazon Aurora, Amazon DocumentDB, and Amazon Neptune do not have this value populate from the operation GetBackupJobStatus. For Amazon DynamoDB with advanced features, this value refers to the size of the recovery point (backup). Amazon EC2 and Amazon EBS show volume size (provisioned storage) returned as part of this value. Amazon EBS does not return backup size information; snapshot size will have the same value as the original resource that was backed up. For Amazon EFS, this value refers to the delta bytes transferred during a backup. For Amazon EKS, this value refers to the size of your nested EKS recovery point. Amazon FSx does not populate this value from the operation GetBackupJobStatus for FSx file systems. An Amazon RDS instance will show as 0. For virtual machines running VMware, this value is passed to Backup through an asynchronous workflow, which can mean this displayed value can under-represent the actual backup size.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_type" /></td>
    <td><code>string</code></td>
    <td>Represents the actual backup type selected for a backup job. For example, if a successful Windows Volume Shadow Copy Service (VSS) backup was taken, BackupType returns "WindowsVSS". If BackupType is empty, then the backup type was a regular backup.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vault_arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vault_name" /></td>
    <td><code>string</code></td>
    <td>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;&#123;2,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bytes_transferred" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size in bytes transferred to a backup vault at the time that the job status was queried.</td>
</tr>
<tr>
    <td><CopyableCode code="child_jobs_in_state" /></td>
    <td><code>object</code></td>
    <td>This returns the statistics of the included child (nested) backup jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="completion_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a job to create a backup job is completed, in Unix format and Coordinated Universal Time (UTC). The value of CompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Contains identifying information about the creation of a backup job, including the BackupPlanArn, BackupPlanId, BackupPlanVersion, and BackupRuleId of the backup plan that is used to create it.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a backup job is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key used to encrypt the backup. This can be a customer-managed key or an Amazon Web Services managed key, depending on the vault configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="expected_completion_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a job to back up resources is expected to be completed, in Unix format and Coordinated Universal Time (UTC). The value of ExpectedCompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>Specifies the IAM role ARN used to create the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.</td>
</tr>
<tr>
    <td><CopyableCode code="initiation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date a backup job was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="is_encrypted" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether the backup is encrypted. All backups in Backup are encrypted, but this field indicates the encryption status for transparency.</td>
</tr>
<tr>
    <td><CopyableCode code="is_parent" /></td>
    <td><code>boolean</code></td>
    <td>This returns the boolean value that a backup job is a parent (composite) job.</td>
</tr>
<tr>
    <td><CopyableCode code="message_category" /></td>
    <td><code>string</code></td>
    <td>The job count for the specified message category. Example strings may include AccessDenied, SUCCESS, AGGREGATE_ALL, and INVALIDPARAMETERS. View Monitoring for a list of accepted MessageCategory strings.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_child_jobs" /></td>
    <td><code>integer (int64)</code></td>
    <td>This returns the number of child (nested) backup jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_job_id" /></td>
    <td><code>string</code></td>
    <td>This returns the parent (composite) resource backup job ID.</td>
</tr>
<tr>
    <td><CopyableCode code="percent_done" /></td>
    <td><code>string</code></td>
    <td>Contains an estimated percentage that is complete of a job at the time the job status was queried.</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_lifecycle" /></td>
    <td><code>object</code></td>
    <td>Specifies the time period, in days, before a recovery point transitions to cold storage or is deleted. Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the retention setting must be 90 days greater than the transition to cold after days setting. The transition to cold after days setting can't be changed after a backup has been transitioned to cold. Resource types that can transition to cold storage are listed in the Feature availability by resource table. Backup ignores this expression for other resource types. To remove the existing lifecycle and retention periods and keep your recovery points indefinitely, specify -1 for MoveToColdStorageAfterDays and DeleteAfterDays.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a saved resource. The format of the ARN depends on the resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_name" /></td>
    <td><code>string</code></td>
    <td>The non-unique name of the resource that belongs to the specified backup.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_\.&#93;&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_by" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies the time in Unix format and Coordinated Universal Time (UTC) when a backup job must be started before it is canceled. The value is calculated by adding the start window to the scheduled time. So if the scheduled time were 6:00 PM and the start window is 2 hours, the StartBy time would be 8:00 PM on the date specified. The value of StartBy is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of a backup job. (CREATED, PENDING, RUNNING, ABORTING, ABORTED, COMPLETED, FAILED, EXPIRED, PARTIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A detailed message explaining the status of the job to back up a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="vault_lock_state" /></td>
    <td><code>string</code></td>
    <td>The lock state of the backup vault. For logically air-gapped vaults, this indicates whether the vault is locked in compliance mode. Valid values include LOCKED and UNLOCKED.</td>
</tr>
<tr>
    <td><CopyableCode code="vault_type" /></td>
    <td><code>string</code></td>
    <td>The type of backup vault where the recovery point is stored. Valid values are BACKUP_VAULT for standard backup vaults and LOGICALLY_AIR_GAPPED_BACKUP_VAULT for logically air-gapped vaults.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_backup_jobs">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The account ID that owns the backup job. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_job_id" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a request to Backup to back up a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_options" /></td>
    <td><code>object</code></td>
    <td>Specifies the backup option for a selected resource. This option is only available for Windows Volume Shadow Copy Service (VSS) backup jobs. Valid values: Set to "WindowsVSS":"enabled" to enable the WindowsVSS backup option and create a Windows VSS backup. Set to "WindowsVSS":"disabled" to create a regular backup. If you specify an invalid option, you get an InvalidParameterValueException exception.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size, in bytes, of a backup (recovery point). This value can render differently depending on the resource type as Backup pulls in data information from other Amazon Web Services services. For example, the value returned may show a value of 0, which may differ from the anticipated value. The expected behavior for values by resource type are described as follows: Amazon Aurora, Amazon DocumentDB, and Amazon Neptune do not have this value populate from the operation GetBackupJobStatus. For Amazon DynamoDB with advanced features, this value refers to the size of the recovery point (backup). Amazon EC2 and Amazon EBS show volume size (provisioned storage) returned as part of this value. Amazon EBS does not return backup size information; snapshot size will have the same value as the original resource that was backed up. For Amazon EFS, this value refers to the delta bytes transferred during a backup. For Amazon EKS, this value refers to the size of your nested EKS recovery point. Amazon FSx does not populate this value from the operation GetBackupJobStatus for FSx file systems. An Amazon RDS instance will show as 0. For virtual machines running VMware, this value is passed to Backup through an asynchronous workflow, which can mean this displayed value can under-represent the actual backup size.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_type" /></td>
    <td><code>string</code></td>
    <td>Represents the type of backup for a backup job.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vault_arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vault_name" /></td>
    <td><code>string</code></td>
    <td>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;&#123;2,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bytes_transferred" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size in bytes transferred to a backup vault at the time that the job status was queried.</td>
</tr>
<tr>
    <td><CopyableCode code="completion_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a job to create a backup job is completed, in Unix format and Coordinated Universal Time (UTC). The value of CompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Contains information about the backup plan and rule that Backup used to initiate the recovery point backup.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a backup job is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key used to encrypt the backup. This can be a customer-managed key or an Amazon Web Services managed key, depending on the vault configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="expected_completion_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a job to back up resources is expected to be completed, in Unix format and Coordinated Universal Time (UTC). The value of ExpectedCompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>Specifies the IAM role ARN used to create the target recovery point. IAM roles other than the default role must include either AWSBackup or AwsBackup in the role name. For example, arn:aws:iam::123456789012:role/AWSBackupRDSAccess. Role names without those strings lack permissions to perform backup jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="initiation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date on which the backup job was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="is_encrypted" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether the backup is encrypted. All backups in Backup are encrypted, but this field indicates the encryption status for transparency.</td>
</tr>
<tr>
    <td><CopyableCode code="is_parent" /></td>
    <td><code>boolean</code></td>
    <td>This is a boolean value indicating this is a parent (composite) backup job.</td>
</tr>
<tr>
    <td><CopyableCode code="message_category" /></td>
    <td><code>string</code></td>
    <td>This parameter is the job count for the specified message category. Example strings may include AccessDenied, SUCCESS, AGGREGATE_ALL, and INVALIDPARAMETERS. See Monitoring for a list of MessageCategory strings. The the value ANY returns count of all message categories. AGGREGATE_ALL aggregates job counts for all message categories and returns the sum.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_job_id" /></td>
    <td><code>string</code></td>
    <td>This uniquely identifies a request to Backup to back up a resource. The return will be the parent (composite) job ID.</td>
</tr>
<tr>
    <td><CopyableCode code="percent_done" /></td>
    <td><code>string</code></td>
    <td>Contains an estimated percentage complete of a job at the time the job status was queried.</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_lifecycle" /></td>
    <td><code>object</code></td>
    <td>Specifies the time period, in days, before a recovery point transitions to cold storage or is deleted. Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the retention setting must be 90 days greater than the transition to cold after days setting. The transition to cold after days setting can't be changed after a backup has been transitioned to cold. Resource types that can transition to cold storage are listed in the Feature availability by resource table. Backup ignores this expression for other resource types. To remove the existing lifecycle and retention periods and keep your recovery points indefinitely, specify -1 for MoveToColdStorageAfterDays and DeleteAfterDays.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_name" /></td>
    <td><code>string</code></td>
    <td>The non-unique name of the resource that belongs to the specified backup.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is Amazon EC2. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_\.&#93;&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_by" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies the time in Unix format and Coordinated Universal Time (UTC) when a backup job must be started before it is canceled. The value is calculated by adding the start window to the scheduled time. So if the scheduled time were 6:00 PM and the start window is 2 hours, the StartBy time would be 8:00 PM on the date specified. The value of StartBy is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of a backup job. (CREATED, PENDING, RUNNING, ABORTING, ABORTED, COMPLETED, FAILED, EXPIRED, PARTIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A detailed message explaining the status of the job to back up a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="vault_lock_state" /></td>
    <td><code>string</code></td>
    <td>The lock state of the backup vault. For logically air-gapped vaults, this indicates whether the vault is locked in compliance mode. Valid values include LOCKED and UNLOCKED.</td>
</tr>
<tr>
    <td><CopyableCode code="vault_type" /></td>
    <td><code>string</code></td>
    <td>The type of backup vault where the recovery point is stored. Valid values are BACKUP_VAULT for standard backup vaults and LOGICALLY_AIR_GAPPED_BACKUP_VAULT for logically air-gapped vaults.</td>
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
    <td><a href="#describe_backup_job"><CopyableCode code="describe_backup_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_job_id"><code>backup_job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns backup job details for the specified BackupJobId.</td>
</tr>
<tr>
    <td><a href="#list_backup_jobs"><CopyableCode code="list_backup_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-backupVaultName"><code>backupVaultName</code></a>, <a href="#parameter-createdBefore"><code>createdBefore</code></a>, <a href="#parameter-createdAfter"><code>createdAfter</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-accountId"><code>accountId</code></a>, <a href="#parameter-completeAfter"><code>completeAfter</code></a>, <a href="#parameter-completeBefore"><code>completeBefore</code></a>, <a href="#parameter-parentJobId"><code>parentJobId</code></a>, <a href="#parameter-messageCategory"><code>messageCategory</code></a></td>
    <td>Returns a list of existing backup jobs for an authenticated account for the last 30 days. For a longer period of time, consider using these monitoring tools.</td>
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
<tr id="parameter-backup_job_id">
    <td><CopyableCode code="backup_job_id" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a request to Backup to back up a resource.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-accountId">
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The account ID to list the jobs from. Returns only backup jobs associated with the specified account ID. If used from an Organizations management account, passing * returns all jobs across the organization.</td>
</tr>
<tr id="parameter-backupVaultName">
    <td><CopyableCode code="backupVaultName" /></td>
    <td><code>string</code></td>
    <td>Returns only backup jobs that will be stored in the specified backup vault. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.</td>
</tr>
<tr id="parameter-completeAfter">
    <td><CopyableCode code="completeAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns only backup jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).</td>
</tr>
<tr id="parameter-completeBefore">
    <td><CopyableCode code="completeBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns only backup jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).</td>
</tr>
<tr id="parameter-createdAfter">
    <td><CopyableCode code="createdAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns only backup jobs that were created after the specified date.</td>
</tr>
<tr id="parameter-createdBefore">
    <td><CopyableCode code="createdBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns only backup jobs that were created before the specified date.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to be returned.</td>
</tr>
<tr id="parameter-messageCategory">
    <td><CopyableCode code="messageCategory" /></td>
    <td><code>string</code></td>
    <td>This is an optional parameter that can be used to filter out jobs with a MessageCategory which matches the value you input. Example strings may include AccessDenied, SUCCESS, AGGREGATE_ALL, and InvalidParameters. View Monitoring The wildcard () returns count of all message categories. AGGREGATE_ALL aggregates job counts for all message categories and returns the sum.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
<tr id="parameter-parentJobId">
    <td><CopyableCode code="parentJobId" /></td>
    <td><code>string</code></td>
    <td>This is a filter to list child (nested) jobs based on parent job ID.</td>
</tr>
<tr id="parameter-resourceArn">
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>Returns only backup jobs that match the specified resource Amazon Resource Name (ARN).</td>
</tr>
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Returns only backup jobs for the specified resources: Aurora for Amazon Aurora CloudFormation for CloudFormation DocumentDB for Amazon DocumentDB (with MongoDB compatibility) DynamoDB for Amazon DynamoDB EBS for Amazon Elastic Block Store EC2 for Amazon Elastic Compute Cloud EFS for Amazon Elastic File System EKS for Amazon Elastic Kubernetes Service FSx for Amazon FSx Neptune for Amazon Neptune RDS for Amazon Relational Database Service Redshift for Amazon Redshift S3 for Amazon Simple Storage Service (Amazon S3) SAP HANA on Amazon EC2 for SAP HANA databases on Amazon Elastic Compute Cloud instances Storage Gateway for Storage Gateway Timestream for Amazon Timestream VirtualMachine for VMware virtual machines</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Returns only backup jobs that are in the specified state. Completed with issues is a status found only in the Backup console. For API, this status refers to jobs with a state of COMPLETED and a MessageCategory with a value other than SUCCESS; that is, the status is completed but comes with a status message. To obtain the job count for Completed with issues, run two GET requests, and subtract the second, smaller number: GET /backup-jobs/?state=COMPLETED GET /backup-jobs/?messageCategory=SUCCESS&state=COMPLETED</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_backup_job"
    values={[
        { label: 'describe_backup_job', value: 'describe_backup_job' },
        { label: 'list_backup_jobs', value: 'list_backup_jobs' }
    ]}
>
<TabItem value="describe_backup_job">

Returns backup job details for the specified BackupJobId.

```sql
SELECT
account_id,
backup_job_id,
backup_options,
backup_size_in_bytes,
backup_type,
backup_vault_arn,
backup_vault_name,
bytes_transferred,
child_jobs_in_state,
completion_date,
created_by,
creation_date,
encryption_key_arn,
expected_completion_date,
iam_role_arn,
initiation_date,
is_encrypted,
is_parent,
message_category,
number_of_child_jobs,
parent_job_id,
percent_done,
recovery_point_arn,
recovery_point_lifecycle,
resource_arn,
resource_name,
resource_type,
start_by,
state,
status_message,
vault_lock_state,
vault_type
FROM aws.backup.backup_jobs
WHERE backup_job_id = '{{ backup_job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_backup_jobs">

Returns a list of existing backup jobs for an authenticated account for the last 30 days. For a longer period of time, consider using these monitoring tools.

```sql
SELECT
account_id,
backup_job_id,
backup_options,
backup_size_in_bytes,
backup_type,
backup_vault_arn,
backup_vault_name,
bytes_transferred,
completion_date,
created_by,
creation_date,
encryption_key_arn,
expected_completion_date,
iam_role_arn,
initiation_date,
is_encrypted,
is_parent,
message_category,
parent_job_id,
percent_done,
recovery_point_arn,
recovery_point_lifecycle,
resource_arn,
resource_name,
resource_type,
start_by,
state,
status_message,
vault_lock_state,
vault_type
FROM aws.backup.backup_jobs
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND resourceArn = '{{ resourceArn }}'
AND state = '{{ state }}'
AND backupVaultName = '{{ backupVaultName }}'
AND createdBefore = '{{ createdBefore }}'
AND createdAfter = '{{ createdAfter }}'
AND resourceType = '{{ resourceType }}'
AND accountId = '{{ accountId }}'
AND completeAfter = '{{ completeAfter }}'
AND completeBefore = '{{ completeBefore }}'
AND parentJobId = '{{ parentJobId }}'
AND messageCategory = '{{ messageCategory }}'
;
```
</TabItem>
</Tabs>
