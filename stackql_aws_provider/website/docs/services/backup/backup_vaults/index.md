--- 
title: backup_vaults
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_vaults
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

Creates, updates, deletes, gets or lists a <code>backup_vaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backup_vaults" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.backup_vaults" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_backup_vault"
    values={[
        { label: 'describe_backup_vault', value: 'describe_backup_vault' },
        { label: 'list_backup_vaults', value: 'list_backup_vaults' }
    ]}
>
<TabItem value="describe_backup_vault">

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
    <td><CopyableCode code="backup_vault_arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vault_name" /></td>
    <td><code>string</code></td>
    <td>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a backup vault is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="creator_request_id" /></td>
    <td><code>string</code></td>
    <td>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>The server-side encryption key that is used to protect your backups; for example, arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key_type" /></td>
    <td><code>string</code></td>
    <td>The type of encryption key used for the backup vault. Valid values are CUSTOMER_MANAGED_KMS_KEY for customer-managed keys or Amazon Web Services_OWNED_KMS_KEY for Amazon Web Services-owned keys. (AWS_OWNED_KMS_KEY, CUSTOMER_MANAGED_KMS_KEY)</td>
</tr>
<tr>
    <td><CopyableCode code="latest_mpa_approval_team_update" /></td>
    <td><code>object</code></td>
    <td>Information about the latest update to the MPA approval team association for this backup vault.</td>
</tr>
<tr>
    <td><CopyableCode code="lock_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when Backup Vault Lock configuration cannot be changed or deleted. If you applied Vault Lock to your vault without specifying a lock date, you can change any of your Vault Lock settings, or delete Vault Lock from the vault entirely, at any time. This value is in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean that indicates whether Backup Vault Lock is currently protecting the backup vault. True means that Vault Lock causes delete or update operations on the recovery points stored in the vault to fail.</td>
</tr>
<tr>
    <td><CopyableCode code="max_retention_days" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Backup Vault Lock setting that specifies the maximum retention period that the vault retains its recovery points. If this parameter is not specified, Vault Lock does not enforce a maximum retention period on the recovery points in the vault (allowing indefinite storage). If specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or shorter than the maximum retention period. If the job's retention period is longer than that maximum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. Recovery points already stored in the vault prior to Vault Lock are not affected.</td>
</tr>
<tr>
    <td><CopyableCode code="min_retention_days" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Backup Vault Lock setting that specifies the minimum retention period that the vault retains its recovery points. If this parameter is not specified, Vault Lock will not enforce a minimum retention period. If specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or longer than the minimum retention period. If the job's retention period is shorter than that minimum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. Recovery points already stored in the vault prior to Vault Lock are not affected.</td>
</tr>
<tr>
    <td><CopyableCode code="mpa_approval_team_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the MPA approval team associated with this backup vault.</td>
</tr>
<tr>
    <td><CopyableCode code="mpa_session_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the MPA session associated with this backup vault.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_recovery_points" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of recovery points that are stored in a backup vault. Recovery point count value displayed in the console can be an approximation. Use ListRecoveryPointsByBackupVault API to obtain the exact count.</td>
</tr>
<tr>
    <td><CopyableCode code="source_backup_vault_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the source backup vault from which this restore access backup vault was created.</td>
</tr>
<tr>
    <td><CopyableCode code="vault_state" /></td>
    <td><code>string</code></td>
    <td>The current state of the vault.-&gt; (CREATING, AVAILABLE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="vault_type" /></td>
    <td><code>string</code></td>
    <td>The type of vault described. (BACKUP_VAULT, LOGICALLY_AIR_GAPPED_BACKUP_VAULT, RESTORE_ACCESS_BACKUP_VAULT)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_backup_vaults">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a resource backup is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="creator_request_id" /></td>
    <td><code>string</code></td>
    <td>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>A server-side encryption key you can specify to encrypt your backups from services that support full Backup management; for example, arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab. If you specify a key, you must specify its ARN, not its alias. If you do not specify a key, Backup creates a KMS key for you by default. To learn which Backup services support full Backup management and how Backup handles encryption for backups from services that do not yet support full Backup, see Encryption for backups in Backup</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key_type" /></td>
    <td><code>string</code></td>
    <td>The type of encryption key used for the backup vault. Valid values are CUSTOMER_MANAGED_KMS_KEY for customer-managed keys or Amazon Web Services_OWNED_KMS_KEY for Amazon Web Services-owned keys. (AWS_OWNED_KMS_KEY, CUSTOMER_MANAGED_KMS_KEY)</td>
</tr>
<tr>
    <td><CopyableCode code="lock_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when Backup Vault Lock configuration becomes immutable, meaning it cannot be changed or deleted. If you applied Vault Lock to your vault without specifying a lock date, you can change your Vault Lock settings, or delete Vault Lock from the vault entirely, at any time. This value is in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that indicates whether Backup Vault Lock applies to the selected backup vault. If true, Vault Lock prevents delete and update operations on the recovery points in the selected vault.</td>
</tr>
<tr>
    <td><CopyableCode code="max_retention_days" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Backup Vault Lock setting that specifies the maximum retention period that the vault retains its recovery points. If this parameter is not specified, Vault Lock does not enforce a maximum retention period on the recovery points in the vault (allowing indefinite storage). If specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or shorter than the maximum retention period. If the job's retention period is longer than that maximum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. Recovery points already stored in the vault prior to Vault Lock are not affected.</td>
</tr>
<tr>
    <td><CopyableCode code="min_retention_days" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Backup Vault Lock setting that specifies the minimum retention period that the vault retains its recovery points. If this parameter is not specified, Vault Lock does not enforce a minimum retention period. If specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or longer than the minimum retention period. If the job's retention period is shorter than that minimum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. Recovery points already stored in the vault prior to Vault Lock are not affected.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_recovery_points" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of recovery points that are stored in a backup vault.</td>
</tr>
<tr>
    <td><CopyableCode code="vault_state" /></td>
    <td><code>string</code></td>
    <td>The current state of the vault. (CREATING, AVAILABLE, FAILED)</td>
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
    <td><a href="#describe_backup_vault"><CopyableCode code="describe_backup_vault" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-backupVaultAccountId"><code>backupVaultAccountId</code></a></td>
    <td>Returns metadata about a backup vault specified by its name.</td>
</tr>
<tr>
    <td><a href="#list_backup_vaults"><CopyableCode code="list_backup_vaults" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-vaultType"><code>vaultType</code></a>, <a href="#parameter-shared"><code>shared</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of recovery point storage containers along with information about them.</td>
</tr>
<tr>
    <td><a href="#create_logically_air_gapped_backup_vault"><CopyableCode code="create_logically_air_gapped_backup_vault" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MinRetentionDays"><code>MinRetentionDays</code></a>, <a href="#parameter-MaxRetentionDays"><code>MaxRetentionDays</code></a></td>
    <td></td>
    <td>Creates a logical container to where backups may be copied. This request includes a name, the Region, the maximum number of retention days, the minimum number of retention days, and optionally can include tags and a creator request ID. Do not include sensitive data, such as passport numbers, in the name of a backup vault.</td>
</tr>
<tr>
    <td><a href="#create_backup_vault"><CopyableCode code="create_backup_vault" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a logical container where backups are stored. A CreateBackupVault request includes a name, optionally one or more resource tags, an encryption key, and a request ID. Do not include sensitive data, such as passport numbers, in the name of a backup vault.</td>
</tr>
<tr>
    <td><a href="#associate_backup_vault_mpa_approval_team"><CopyableCode code="associate_backup_vault_mpa_approval_team" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MpaApprovalTeamArn"><code>MpaApprovalTeamArn</code></a></td>
    <td></td>
    <td>Associates an MPA approval team with a backup vault.</td>
</tr>
<tr>
    <td><a href="#disassociate_backup_vault_mpa_approval_team"><CopyableCode code="disassociate_backup_vault_mpa_approval_team" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the association between an MPA approval team and a backup vault, disabling the MPA approval workflow for restore operations.</td>
</tr>
<tr>
    <td><a href="#put_backup_vault_lock_configuration"><CopyableCode code="put_backup_vault_lock_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Applies Backup Vault Lock to a backup vault, preventing attempts to delete any recovery point stored in or created in a backup vault. Vault Lock also prevents attempts to update the lifecycle policy that controls the retention period of any recovery point currently stored in a backup vault. If specified, Vault Lock enforces a minimum and maximum retention period for future backup and copy jobs that target a backup vault. Backup Vault Lock has been assessed by Cohasset Associates for use in environments that are subject to SEC 17a-4, CFTC, and FINRA regulations. For more information about how Backup Vault Lock relates to these regulations, see the Cohasset Associates Compliance Assessment. For more information, see Backup Vault Lock.</td>
</tr>
<tr>
    <td><a href="#delete_backup_vault"><CopyableCode code="delete_backup_vault" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the backup vault identified by its name. A vault can be deleted only if it is empty.</td>
</tr>
<tr>
    <td><a href="#delete_backup_vault_lock_configuration"><CopyableCode code="delete_backup_vault_lock_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes Backup Vault Lock from a backup vault specified by a backup vault name. If the Vault Lock configuration is immutable, then you cannot delete Vault Lock using API operations, and you will receive an InvalidRequestException if you attempt to do so. For more information, see Vault Lock in the Backup Developer Guide.</td>
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
    <td>The name of the backup vault from which to delete Backup Vault Lock.</td>
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
<tr id="parameter-shared">
    <td><CopyableCode code="shared" /></td>
    <td><code>boolean</code></td>
    <td>This parameter will sort the list of vaults by shared vaults.</td>
</tr>
<tr id="parameter-vaultType">
    <td><CopyableCode code="vaultType" /></td>
    <td><code>string</code></td>
    <td>This parameter will sort the list of vaults by vault type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_backup_vault"
    values={[
        { label: 'describe_backup_vault', value: 'describe_backup_vault' },
        { label: 'list_backup_vaults', value: 'list_backup_vaults' }
    ]}
>
<TabItem value="describe_backup_vault">

Returns metadata about a backup vault specified by its name.

```sql
SELECT
backup_vault_arn,
backup_vault_name,
creation_date,
creator_request_id,
encryption_key_arn,
encryption_key_type,
latest_mpa_approval_team_update,
lock_date,
locked,
max_retention_days,
min_retention_days,
mpa_approval_team_arn,
mpa_session_arn,
number_of_recovery_points,
source_backup_vault_arn,
vault_state,
vault_type
FROM aws.backup.backup_vaults
WHERE backup_vault_name = '{{ backup_vault_name }}' -- required
AND region = '{{ region }}' -- required
AND backupVaultAccountId = '{{ backupVaultAccountId }}'
;
```
</TabItem>
<TabItem value="list_backup_vaults">

Returns a list of recovery point storage containers along with information about them.

```sql
SELECT
backup_vault_arn,
backup_vault_name,
creation_date,
creator_request_id,
encryption_key_arn,
encryption_key_type,
lock_date,
locked,
max_retention_days,
min_retention_days,
number_of_recovery_points,
vault_state,
vault_type
FROM aws.backup.backup_vaults
WHERE region = '{{ region }}' -- required
AND vaultType = '{{ vaultType }}'
AND shared = '{{ shared }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_logically_air_gapped_backup_vault"
    values={[
        { label: 'create_logically_air_gapped_backup_vault', value: 'create_logically_air_gapped_backup_vault' },
        { label: 'create_backup_vault', value: 'create_backup_vault' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_logically_air_gapped_backup_vault">

Creates a logical container to where backups may be copied. This request includes a name, the Region, the maximum number of retention days, the minimum number of retention days, and optionally can include tags and a creator request ID. Do not include sensitive data, such as passport numbers, in the name of a backup vault.

```sql
INSERT INTO aws.backup.backup_vaults (
BackupVaultTags,
CreatorRequestId,
MinRetentionDays,
MaxRetentionDays,
EncryptionKeyArn,
backup_vault_name,
region
)
SELECT 
'{{ BackupVaultTags }}',
'{{ CreatorRequestId }}',
{{ MinRetentionDays }} /* required */,
{{ MaxRetentionDays }} /* required */,
'{{ EncryptionKeyArn }}',
'{{ backup_vault_name }}',
'{{ region }}'
RETURNING
backup_vault_arn,
backup_vault_name,
creation_date,
vault_state
;
```
</TabItem>
<TabItem value="create_backup_vault">

Creates a logical container where backups are stored. A CreateBackupVault request includes a name, optionally one or more resource tags, an encryption key, and a request ID. Do not include sensitive data, such as passport numbers, in the name of a backup vault.

```sql
INSERT INTO aws.backup.backup_vaults (
BackupVaultTags,
EncryptionKeyArn,
CreatorRequestId,
backup_vault_name,
region
)
SELECT 
'{{ BackupVaultTags }}',
'{{ EncryptionKeyArn }}',
'{{ CreatorRequestId }}',
'{{ backup_vault_name }}',
'{{ region }}'
RETURNING
backup_vault_arn,
backup_vault_name,
creation_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: backup_vaults
  props:
    - name: backup_vault_name
      value: "{{ backup_vault_name }}"
      description: Required parameter for the backup_vaults resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the backup_vaults resource.
    - name: BackupVaultTags
      value: "{{ BackupVaultTags }}"
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
    - name: MinRetentionDays
      value: {{ MinRetentionDays }}
    - name: MaxRetentionDays
      value: {{ MaxRetentionDays }}
    - name: EncryptionKeyArn
      value: "{{ EncryptionKeyArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_backup_vault_mpa_approval_team"
    values={[
        { label: 'associate_backup_vault_mpa_approval_team', value: 'associate_backup_vault_mpa_approval_team' },
        { label: 'disassociate_backup_vault_mpa_approval_team', value: 'disassociate_backup_vault_mpa_approval_team' }
    ]}
>
<TabItem value="associate_backup_vault_mpa_approval_team">

Associates an MPA approval team with a backup vault.

```sql
UPDATE aws.backup.backup_vaults
SET 
MpaApprovalTeamArn = '{{ MpaApprovalTeamArn }}',
RequesterComment = '{{ RequesterComment }}'
WHERE 
backup_vault_name = '{{ backup_vault_name }}' --required
AND region = '{{ region }}' --required
AND MpaApprovalTeamArn = '{{ MpaApprovalTeamArn }}' --required;
```
</TabItem>
<TabItem value="disassociate_backup_vault_mpa_approval_team">

Removes the association between an MPA approval team and a backup vault, disabling the MPA approval workflow for restore operations.

```sql
UPDATE aws.backup.backup_vaults
SET 
RequesterComment = '{{ RequesterComment }}'
WHERE 
backup_vault_name = '{{ backup_vault_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_backup_vault_lock_configuration"
    values={[
        { label: 'put_backup_vault_lock_configuration', value: 'put_backup_vault_lock_configuration' }
    ]}
>
<TabItem value="put_backup_vault_lock_configuration">

Applies Backup Vault Lock to a backup vault, preventing attempts to delete any recovery point stored in or created in a backup vault. Vault Lock also prevents attempts to update the lifecycle policy that controls the retention period of any recovery point currently stored in a backup vault. If specified, Vault Lock enforces a minimum and maximum retention period for future backup and copy jobs that target a backup vault. Backup Vault Lock has been assessed by Cohasset Associates for use in environments that are subject to SEC 17a-4, CFTC, and FINRA regulations. For more information about how Backup Vault Lock relates to these regulations, see the Cohasset Associates Compliance Assessment. For more information, see Backup Vault Lock.

```sql
REPLACE aws.backup.backup_vaults
SET 
MinRetentionDays = {{ MinRetentionDays }},
MaxRetentionDays = {{ MaxRetentionDays }},
ChangeableForDays = {{ ChangeableForDays }}
WHERE 
backup_vault_name = '{{ backup_vault_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_backup_vault"
    values={[
        { label: 'delete_backup_vault', value: 'delete_backup_vault' }
    ]}
>
<TabItem value="delete_backup_vault">

Deletes the backup vault identified by its name. A vault can be deleted only if it is empty.

```sql
DELETE FROM aws.backup.backup_vaults
WHERE backup_vault_name = '{{ backup_vault_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_backup_vault_lock_configuration"
    values={[
        { label: 'delete_backup_vault_lock_configuration', value: 'delete_backup_vault_lock_configuration' }
    ]}
>
<TabItem value="delete_backup_vault_lock_configuration">

Deletes Backup Vault Lock from a backup vault specified by a backup vault name. If the Vault Lock configuration is immutable, then you cannot delete Vault Lock using API operations, and you will receive an InvalidRequestException if you attempt to do so. For more information, see Vault Lock in the Backup Developer Guide.

```sql
EXEC aws.backup.backup_vaults.delete_backup_vault_lock_configuration 
@backup_vault_name='{{ backup_vault_name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
