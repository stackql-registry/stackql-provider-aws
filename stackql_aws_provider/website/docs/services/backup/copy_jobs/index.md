--- 
title: copy_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - copy_jobs
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

Creates, updates, deletes, gets or lists a <code>copy_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="copy_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.copy_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_copy_job"
    values={[
        { label: 'describe_copy_job', value: 'describe_copy_job' },
        { label: 'list_copy_jobs', value: 'list_copy_jobs' }
    ]}
>
<TabItem value="describe_copy_job">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID that owns the copy job. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BackupSizeInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size, in bytes, of a copy job.</td>
</tr>
<tr>
    <td><CopyableCode code="ChildJobsInState" /></td>
    <td><code>object</code></td>
    <td>This returns the statistics of the included child (nested) copy jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="CompletionDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a copy job is completed, in Unix format and Coordinated Universal Time (UTC). The value of CompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="CompositeMemberIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of a resource within a composite group, such as nested (child) recovery point belonging to a composite (parent) stack. The ID is transferred from the logical ID within a stack.</td>
</tr>
<tr>
    <td><CopyableCode code="CopyJobId" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a copy job.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>object</code></td>
    <td>Contains information about the backup plan and rule that Backup used to initiate the recovery point backup.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedByBackupJobId" /></td>
    <td><code>string</code></td>
    <td>The backup job ID that initiated this copy job. Only applicable to scheduled copy jobs and automatic copy jobs to logically air-gapped vault.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a copy job is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationBackupVaultArn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a destination copy vault; for example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationEncryptionKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key used to encrypt the copied backup in the destination vault. This can be a customer-managed key or an Amazon Web Services managed key.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationRecoveryPointArn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a destination recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationRecoveryPointLifecycle" /></td>
    <td><code>object</code></td>
    <td>Specifies the time period, in days, before a recovery point transitions to cold storage or is deleted. Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the retention setting must be 90 days greater than the transition to cold after days setting. The transition to cold after days setting can't be changed after a backup has been transitioned to cold. Resource types that can transition to cold storage are listed in the Feature availability by resource table. Backup ignores this expression for other resource types. To remove the existing lifecycle and retention periods and keep your recovery points indefinitely, specify -1 for MoveToColdStorageAfterDays and DeleteAfterDays.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationVaultLockState" /></td>
    <td><code>string</code></td>
    <td>The lock state of the destination backup vault. For logically air-gapped vaults, this indicates whether the vault is locked in compliance mode. Valid values include LOCKED and UNLOCKED.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationVaultType" /></td>
    <td><code>string</code></td>
    <td>The type of destination backup vault where the copied recovery point is stored. Valid values are BACKUP_VAULT for standard backup vaults and LOGICALLY_AIR_GAPPED_BACKUP_VAULT for logically air-gapped vaults.</td>
</tr>
<tr>
    <td><CopyableCode code="IamRoleArn" /></td>
    <td><code>string</code></td>
    <td>Specifies the IAM role ARN used to copy the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.</td>
</tr>
<tr>
    <td><CopyableCode code="IsParent" /></td>
    <td><code>boolean</code></td>
    <td>This is a boolean value indicating this is a parent (composite) copy job.</td>
</tr>
<tr>
    <td><CopyableCode code="MessageCategory" /></td>
    <td><code>string</code></td>
    <td>This parameter is the job count for the specified message category. Example strings may include AccessDenied, SUCCESS, AGGREGATE_ALL, and InvalidParameters. See Monitoring for a list of MessageCategory strings. The the value ANY returns count of all message categories. AGGREGATE_ALL aggregates job counts for all message categories and returns the sum</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfChildJobs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of child (nested) copy jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="ParentJobId" /></td>
    <td><code>string</code></td>
    <td>This uniquely identifies a request to Backup to copy a resource. The return will be the parent (composite) job ID.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services resource to be copied; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceName" /></td>
    <td><code>string</code></td>
    <td>The non-unique name of the resource that belongs to the specified backup.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services resource to be copied; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_\.&#93;&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceBackupVaultArn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a source copy vault; for example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceRecoveryPointArn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a source recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of a copy job. (CREATED, RUNNING, COMPLETED, FAILED, PARTIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A detailed message explaining the status of the job to copy a resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_copy_jobs">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID that owns the copy job. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BackupSizeInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size, in bytes, of a copy job.</td>
</tr>
<tr>
    <td><CopyableCode code="ChildJobsInState" /></td>
    <td><code>object</code></td>
    <td>This returns the statistics of the included child (nested) copy jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="CompletionDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a copy job is completed, in Unix format and Coordinated Universal Time (UTC). The value of CompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="CompositeMemberIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of a resource within a composite group, such as nested (child) recovery point belonging to a composite (parent) stack. The ID is transferred from the logical ID within a stack.</td>
</tr>
<tr>
    <td><CopyableCode code="CopyJobId" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a copy job.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>object</code></td>
    <td>Contains information about the backup plan and rule that Backup used to initiate the recovery point backup.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedByBackupJobId" /></td>
    <td><code>string</code></td>
    <td>The backup job ID that initiated this copy job. Only applicable to scheduled copy jobs and automatic copy jobs to logically air-gapped vault.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a copy job is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationBackupVaultArn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a destination copy vault; for example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationEncryptionKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key used to encrypt the copied backup in the destination vault. This can be a customer-managed key or an Amazon Web Services managed key.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationRecoveryPointArn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a destination recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationRecoveryPointLifecycle" /></td>
    <td><code>object</code></td>
    <td>Specifies the time period, in days, before a recovery point transitions to cold storage or is deleted. Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the retention setting must be 90 days greater than the transition to cold after days setting. The transition to cold after days setting can't be changed after a backup has been transitioned to cold. Resource types that can transition to cold storage are listed in the Feature availability by resource table. Backup ignores this expression for other resource types. To remove the existing lifecycle and retention periods and keep your recovery points indefinitely, specify -1 for MoveToColdStorageAfterDays and DeleteAfterDays.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationVaultLockState" /></td>
    <td><code>string</code></td>
    <td>The lock state of the destination backup vault. For logically air-gapped vaults, this indicates whether the vault is locked in compliance mode. Valid values include LOCKED and UNLOCKED.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationVaultType" /></td>
    <td><code>string</code></td>
    <td>The type of destination backup vault where the copied recovery point is stored. Valid values are BACKUP_VAULT for standard backup vaults and LOGICALLY_AIR_GAPPED_BACKUP_VAULT for logically air-gapped vaults.</td>
</tr>
<tr>
    <td><CopyableCode code="IamRoleArn" /></td>
    <td><code>string</code></td>
    <td>Specifies the IAM role ARN used to copy the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.</td>
</tr>
<tr>
    <td><CopyableCode code="IsParent" /></td>
    <td><code>boolean</code></td>
    <td>This is a boolean value indicating this is a parent (composite) copy job.</td>
</tr>
<tr>
    <td><CopyableCode code="MessageCategory" /></td>
    <td><code>string</code></td>
    <td>This parameter is the job count for the specified message category. Example strings may include AccessDenied, SUCCESS, AGGREGATE_ALL, and InvalidParameters. See Monitoring for a list of MessageCategory strings. The the value ANY returns count of all message categories. AGGREGATE_ALL aggregates job counts for all message categories and returns the sum</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfChildJobs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of child (nested) copy jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="ParentJobId" /></td>
    <td><code>string</code></td>
    <td>This uniquely identifies a request to Backup to copy a resource. The return will be the parent (composite) job ID.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services resource to be copied; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceName" /></td>
    <td><code>string</code></td>
    <td>The non-unique name of the resource that belongs to the specified backup.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services resource to be copied; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_\.&#93;&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceBackupVaultArn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a source copy vault; for example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceRecoveryPointArn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a source recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of a copy job. (CREATED, RUNNING, COMPLETED, FAILED, PARTIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A detailed message explaining the status of the job to copy a resource.</td>
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
    <td><a href="#describe_copy_job"><CopyableCode code="describe_copy_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-copy_job_id"><code>copy_job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns metadata associated with creating a copy of a resource.</td>
</tr>
<tr>
    <td><a href="#list_copy_jobs"><CopyableCode code="list_copy_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-createdBefore"><code>createdBefore</code></a>, <a href="#parameter-createdAfter"><code>createdAfter</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-destinationVaultArn"><code>destinationVaultArn</code></a>, <a href="#parameter-accountId"><code>accountId</code></a>, <a href="#parameter-completeBefore"><code>completeBefore</code></a>, <a href="#parameter-completeAfter"><code>completeAfter</code></a>, <a href="#parameter-parentJobId"><code>parentJobId</code></a>, <a href="#parameter-messageCategory"><code>messageCategory</code></a>, <a href="#parameter-sourceRecoveryPointArn"><code>sourceRecoveryPointArn</code></a></td>
    <td>Returns metadata about your copy jobs.</td>
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
<tr id="parameter-copy_job_id">
    <td><CopyableCode code="copy_job_id" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a copy job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-accountId">
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The account ID to list the jobs from. Returns only copy jobs associated with the specified account ID.</td>
</tr>
<tr id="parameter-completeAfter">
    <td><CopyableCode code="completeAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns only copy jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).</td>
</tr>
<tr id="parameter-completeBefore">
    <td><CopyableCode code="completeBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns only copy jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).</td>
</tr>
<tr id="parameter-createdAfter">
    <td><CopyableCode code="createdAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns only copy jobs that were created after the specified date.</td>
</tr>
<tr id="parameter-createdBefore">
    <td><CopyableCode code="createdBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns only copy jobs that were created before the specified date.</td>
</tr>
<tr id="parameter-destinationVaultArn">
    <td><CopyableCode code="destinationVaultArn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a source backup vault to copy from; for example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to be returned.</td>
</tr>
<tr id="parameter-messageCategory">
    <td><CopyableCode code="messageCategory" /></td>
    <td><code>string</code></td>
    <td>This is an optional parameter that can be used to filter out jobs with a MessageCategory which matches the value you input. Example strings may include AccessDenied, SUCCESS, AGGREGATE_ALL, and INVALIDPARAMETERS. View Monitoring for a list of accepted strings. The the value ANY returns count of all message categories. AGGREGATE_ALL aggregates job counts for all message categories and returns the sum.</td>
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
    <td>Returns only copy jobs that match the specified resource Amazon Resource Name (ARN).</td>
</tr>
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Returns only backup jobs for the specified resources: Aurora for Amazon Aurora CloudFormation for CloudFormation DocumentDB for Amazon DocumentDB (with MongoDB compatibility) DynamoDB for Amazon DynamoDB EBS for Amazon Elastic Block Store EC2 for Amazon Elastic Compute Cloud EFS for Amazon Elastic File System EKS for Amazon Elastic Kubernetes Service FSx for Amazon FSx Neptune for Amazon Neptune RDS for Amazon Relational Database Service Redshift for Amazon Redshift S3 for Amazon Simple Storage Service (Amazon S3) SAP HANA on Amazon EC2 for SAP HANA databases on Amazon Elastic Compute Cloud instances Storage Gateway for Storage Gateway Timestream for Amazon Timestream VirtualMachine for VMware virtual machines</td>
</tr>
<tr id="parameter-sourceRecoveryPointArn">
    <td><CopyableCode code="sourceRecoveryPointArn" /></td>
    <td><code>string</code></td>
    <td>Filters copy jobs by the specified source recovery point ARN.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Returns only copy jobs that are in the specified state.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_copy_job"
    values={[
        { label: 'describe_copy_job', value: 'describe_copy_job' },
        { label: 'list_copy_jobs', value: 'list_copy_jobs' }
    ]}
>
<TabItem value="describe_copy_job">

Returns metadata associated with creating a copy of a resource.

```sql
SELECT
AccountId,
BackupSizeInBytes,
ChildJobsInState,
CompletionDate,
CompositeMemberIdentifier,
CopyJobId,
CreatedBy,
CreatedByBackupJobId,
CreationDate,
DestinationBackupVaultArn,
DestinationEncryptionKeyArn,
DestinationRecoveryPointArn,
DestinationRecoveryPointLifecycle,
DestinationVaultLockState,
DestinationVaultType,
IamRoleArn,
IsParent,
MessageCategory,
NumberOfChildJobs,
ParentJobId,
ResourceArn,
ResourceName,
ResourceType,
SourceBackupVaultArn,
SourceRecoveryPointArn,
State,
StatusMessage
FROM aws.backup.copy_jobs
WHERE copy_job_id = '{{ copy_job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_copy_jobs">

Returns metadata about your copy jobs.

```sql
SELECT
AccountId,
BackupSizeInBytes,
ChildJobsInState,
CompletionDate,
CompositeMemberIdentifier,
CopyJobId,
CreatedBy,
CreatedByBackupJobId,
CreationDate,
DestinationBackupVaultArn,
DestinationEncryptionKeyArn,
DestinationRecoveryPointArn,
DestinationRecoveryPointLifecycle,
DestinationVaultLockState,
DestinationVaultType,
IamRoleArn,
IsParent,
MessageCategory,
NumberOfChildJobs,
ParentJobId,
ResourceArn,
ResourceName,
ResourceType,
SourceBackupVaultArn,
SourceRecoveryPointArn,
State,
StatusMessage
FROM aws.backup.copy_jobs
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND resourceArn = '{{ resourceArn }}'
AND state = '{{ state }}'
AND createdBefore = '{{ createdBefore }}'
AND createdAfter = '{{ createdAfter }}'
AND resourceType = '{{ resourceType }}'
AND destinationVaultArn = '{{ destinationVaultArn }}'
AND accountId = '{{ accountId }}'
AND completeBefore = '{{ completeBefore }}'
AND completeAfter = '{{ completeAfter }}'
AND parentJobId = '{{ parentJobId }}'
AND messageCategory = '{{ messageCategory }}'
AND sourceRecoveryPointArn = '{{ sourceRecoveryPointArn }}'
;
```
</TabItem>
</Tabs>
