--- 
title: recovery_points_by_backup_vaults
hide_title: false
hide_table_of_contents: false
keywords:
  - recovery_points_by_backup_vaults
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

Creates, updates, deletes, gets or lists a <code>recovery_points_by_backup_vaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recovery_points_by_backup_vaults" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.recovery_points_by_backup_vaults" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_recovery_points_by_backup_vault"
    values={[
        { label: 'list_recovery_points_by_backup_vault', value: 'list_recovery_points_by_backup_vault' }
    ]}
>
<TabItem value="list_recovery_points_by_backup_vault">

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
    <td><CopyableCode code="aggregated_scan_result" /></td>
    <td><code>object</code></td>
    <td>Contains the latest scanning results against the recovery point and currently include FailedScan, Findings, LastComputed.</td>
</tr>
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
    <td>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;&#123;2,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="calculated_lifecycle" /></td>
    <td><code>object</code></td>
    <td>A CalculatedLifecycle object containing DeleteAt and MoveToColdStorageAt timestamps.</td>
</tr>
<tr>
    <td><CopyableCode code="completion_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a job to restore a recovery point is completed, in Unix format and Coordinated Universal Time (UTC). The value of CompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="composite_member_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of a resource within a composite group, such as nested (child) recovery point belonging to a composite (parent) stack. The ID is transferred from the logical ID within a stack.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Contains information about the backup plan and rule that Backup used to initiate the recovery point backup.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a recovery point is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>The server-side encryption key that is used to protect your backups; for example, arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab.</td>
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
    <td>This is a boolean value indicating this is a parent (composite) recovery point.</td>
</tr>
<tr>
    <td><CopyableCode code="last_restore_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a recovery point was last restored, in Unix format and Coordinated Universal Time (UTC). The value of LastRestoreTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle" /></td>
    <td><code>object</code></td>
    <td>Specifies the time period, in days, before a recovery point transitions to cold storage or is deleted. Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the retention setting must be 90 days greater than the transition to cold after days setting. The transition to cold after days setting can't be changed after a backup has been transitioned to cold. Resource types that can transition to cold storage are listed in the Feature availability by resource table. Backup ignores this expression for other resource types. To remove the existing lifecycle and retention periods and keep your recovery points indefinitely, specify -1 for MoveToColdStorageAfterDays and DeleteAfterDays.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the parent (composite) recovery point.</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
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
    <td>The type of Amazon Web Services resource saved as a recovery point; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is Amazon EC2. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_\.&#93;&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_backup_vault_arn" /></td>
    <td><code>string</code></td>
    <td>The backup vault where the recovery point was originally copied from. If the recovery point is restored to the same account this value will be null.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A status code specifying the state of the recovery point. (COMPLETED, PARTIAL, DELETING, EXPIRED, AVAILABLE, STOPPED, CREATING)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A message explaining the current status of the recovery point.</td>
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
    <td><a href="#list_recovery_points_by_backup_vault"><CopyableCode code="list_recovery_points_by_backup_vault" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-backupVaultAccountId"><code>backupVaultAccountId</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-backupPlanId"><code>backupPlanId</code></a>, <a href="#parameter-createdBefore"><code>createdBefore</code></a>, <a href="#parameter-createdAfter"><code>createdAfter</code></a>, <a href="#parameter-parentRecoveryPointArn"><code>parentRecoveryPointArn</code></a></td>
    <td>Returns detailed information about the recovery points stored in a backup vault.</td>
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
    <td>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. Backup vault name might not be available when a supported service creates the backup.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-backupPlanId">
    <td><CopyableCode code="backupPlanId" /></td>
    <td><code>string</code></td>
    <td>Returns only recovery points that match the specified backup plan ID.</td>
</tr>
<tr id="parameter-backupVaultAccountId">
    <td><CopyableCode code="backupVaultAccountId" /></td>
    <td><code>string</code></td>
    <td>This parameter will sort the list of recovery points by account ID.</td>
</tr>
<tr id="parameter-createdAfter">
    <td><CopyableCode code="createdAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns only recovery points that were created after the specified timestamp.</td>
</tr>
<tr id="parameter-createdBefore">
    <td><CopyableCode code="createdBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns only recovery points that were created before the specified timestamp.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to be returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
<tr id="parameter-parentRecoveryPointArn">
    <td><CopyableCode code="parentRecoveryPointArn" /></td>
    <td><code>string</code></td>
    <td>This returns only recovery points that match the specified parent (composite) recovery point Amazon Resource Name (ARN).</td>
</tr>
<tr id="parameter-resourceArn">
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>Returns only recovery points that match the specified resource Amazon Resource Name (ARN).</td>
</tr>
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Returns only recovery points that match the specified resource type(s): Aurora for Amazon Aurora CloudFormation for CloudFormation DocumentDB for Amazon DocumentDB (with MongoDB compatibility) DynamoDB for Amazon DynamoDB EBS for Amazon Elastic Block Store EC2 for Amazon Elastic Compute Cloud EFS for Amazon Elastic File System EKS for Amazon Elastic Kubernetes Service FSx for Amazon FSx Neptune for Amazon Neptune RDS for Amazon Relational Database Service Redshift for Amazon Redshift S3 for Amazon Simple Storage Service (Amazon S3) SAP HANA on Amazon EC2 for SAP HANA databases on Amazon Elastic Compute Cloud instances Storage Gateway for Storage Gateway Timestream for Amazon Timestream VirtualMachine for VMware virtual machines</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_recovery_points_by_backup_vault"
    values={[
        { label: 'list_recovery_points_by_backup_vault', value: 'list_recovery_points_by_backup_vault' }
    ]}
>
<TabItem value="list_recovery_points_by_backup_vault">

Returns detailed information about the recovery points stored in a backup vault.

```sql
SELECT
aggregated_scan_result,
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
source_backup_vault_arn,
status,
status_message,
vault_type
FROM aws.backup.recovery_points_by_backup_vaults
WHERE backup_vault_name = '{{ backup_vault_name }}' -- required
AND region = '{{ region }}' -- required
AND backupVaultAccountId = '{{ backupVaultAccountId }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND resourceArn = '{{ resourceArn }}'
AND resourceType = '{{ resourceType }}'
AND backupPlanId = '{{ backupPlanId }}'
AND createdBefore = '{{ createdBefore }}'
AND createdAfter = '{{ createdAfter }}'
AND parentRecoveryPointArn = '{{ parentRecoveryPointArn }}'
;
```
</TabItem>
</Tabs>
