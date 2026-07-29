--- 
title: restore_access_backup_vaults
hide_title: false
hide_table_of_contents: false
keywords:
  - restore_access_backup_vaults
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

Creates, updates, deletes, gets or lists a <code>restore_access_backup_vaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="restore_access_backup_vaults" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.restore_access_backup_vaults" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_restore_access_backup_vaults"
    values={[
        { label: 'list_restore_access_backup_vaults', value: 'list_restore_access_backup_vaults' }
    ]}
>
<TabItem value="list_restore_access_backup_vaults">

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
    <td><CopyableCode code="approval_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the restore access backup vault was approved.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the restore access backup vault was created.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_revoke_request" /></td>
    <td><code>object</code></td>
    <td>Information about the latest request to revoke access to this backup vault.</td>
</tr>
<tr>
    <td><CopyableCode code="restore_access_backup_vault_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the restore access backup vault.</td>
</tr>
<tr>
    <td><CopyableCode code="vault_state" /></td>
    <td><code>string</code></td>
    <td>The current state of the restore access backup vault. (CREATING, AVAILABLE, FAILED)</td>
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
    <td><a href="#list_restore_access_backup_vaults"><CopyableCode code="list_restore_access_backup_vaults" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of restore access backup vaults associated with a specified backup vault.</td>
</tr>
<tr>
    <td><a href="#create_restore_access_backup_vault"><CopyableCode code="create_restore_access_backup_vault" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceBackupVaultArn"><code>SourceBackupVaultArn</code></a></td>
    <td></td>
    <td>Creates a restore access backup vault that provides temporary access to recovery points in a logically air-gapped backup vault, subject to MPA approval.</td>
</tr>
<tr>
    <td><a href="#revoke_restore_access_backup_vault"><CopyableCode code="revoke_restore_access_backup_vault" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-restore_access_backup_vault_arn"><code>restore_access_backup_vault_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requesterComment"><code>requesterComment</code></a></td>
    <td>Revokes access to a restore access backup vault, removing the ability to restore from its recovery points and permanently deleting the vault.</td>
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
    <td>The name of the source backup vault associated with the restore access backup vault to be revoked.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-restore_access_backup_vault_arn">
    <td><CopyableCode code="restore_access_backup_vault_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the restore access backup vault to revoke.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from a previous request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-requesterComment">
    <td><CopyableCode code="requesterComment" /></td>
    <td><code>string</code></td>
    <td>A comment explaining the reason for revoking access to the restore access backup vault.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_restore_access_backup_vaults"
    values={[
        { label: 'list_restore_access_backup_vaults', value: 'list_restore_access_backup_vaults' }
    ]}
>
<TabItem value="list_restore_access_backup_vaults">

Returns a list of restore access backup vaults associated with a specified backup vault.

```sql
SELECT
approval_date,
creation_date,
latest_revoke_request,
restore_access_backup_vault_arn,
vault_state
FROM aws.backup.restore_access_backup_vaults
WHERE backup_vault_name = '{{ backup_vault_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_restore_access_backup_vault"
    values={[
        { label: 'create_restore_access_backup_vault', value: 'create_restore_access_backup_vault' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_restore_access_backup_vault">

Creates a restore access backup vault that provides temporary access to recovery points in a logically air-gapped backup vault, subject to MPA approval.

```sql
INSERT INTO aws.backup.restore_access_backup_vaults (
SourceBackupVaultArn,
BackupVaultName,
BackupVaultTags,
CreatorRequestId,
RequesterComment,
region
)
SELECT 
'{{ SourceBackupVaultArn }}' /* required */,
'{{ BackupVaultName }}',
'{{ BackupVaultTags }}',
'{{ CreatorRequestId }}',
'{{ RequesterComment }}',
'{{ region }}'
RETURNING
creation_date,
restore_access_backup_vault_arn,
restore_access_backup_vault_name,
vault_state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: restore_access_backup_vaults
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the restore_access_backup_vaults resource.
    - name: SourceBackupVaultArn
      value: "{{ SourceBackupVaultArn }}"
    - name: BackupVaultName
      value: "{{ BackupVaultName }}"
    - name: BackupVaultTags
      value: "{{ BackupVaultTags }}"
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
    - name: RequesterComment
      value: "{{ RequesterComment }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="revoke_restore_access_backup_vault"
    values={[
        { label: 'revoke_restore_access_backup_vault', value: 'revoke_restore_access_backup_vault' }
    ]}
>
<TabItem value="revoke_restore_access_backup_vault">

Revokes access to a restore access backup vault, removing the ability to restore from its recovery points and permanently deleting the vault.

```sql
UPDATE aws.backup.restore_access_backup_vaults
SET 
-- No updatable properties
WHERE 
backup_vault_name = '{{ backup_vault_name }}' --required
AND restore_access_backup_vault_arn = '{{ restore_access_backup_vault_arn }}' --required
AND region = '{{ region }}' --required
AND requesterComment = '{{ requesterComment}}';
```
</TabItem>
</Tabs>
