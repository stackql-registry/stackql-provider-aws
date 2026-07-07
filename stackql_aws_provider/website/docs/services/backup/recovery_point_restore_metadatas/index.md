--- 
title: recovery_point_restore_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - recovery_point_restore_metadatas
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

Creates, updates, deletes, gets or lists a <code>recovery_point_restore_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recovery_point_restore_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.recovery_point_restore_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recovery_point_restore_metadata"
    values={[
        { label: 'get_recovery_point_restore_metadata', value: 'get_recovery_point_restore_metadata' }
    ]}
>
<TabItem value="get_recovery_point_restore_metadata">

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
    <td><CopyableCode code="BackupVaultArn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault.</td>
</tr>
<tr>
    <td><CopyableCode code="RecoveryPointArn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type of the recovery point. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_\.&#93;&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RestoreMetadata" /></td>
    <td><code>object</code></td>
    <td>The set of metadata key-value pairs that describe the original configuration of the backed-up resource. These values vary depending on the service that is being restored.</td>
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
    <td><a href="#get_recovery_point_restore_metadata"><CopyableCode code="get_recovery_point_restore_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-recovery_point_arn"><code>recovery_point_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-backupVaultAccountId"><code>backupVaultAccountId</code></a></td>
    <td>Returns a set of metadata key-value pairs that were used to create the backup.</td>
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
    <td>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.</td>
</tr>
<tr id="parameter-recovery_point_arn">
    <td><CopyableCode code="recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
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
    defaultValue="get_recovery_point_restore_metadata"
    values={[
        { label: 'get_recovery_point_restore_metadata', value: 'get_recovery_point_restore_metadata' }
    ]}
>
<TabItem value="get_recovery_point_restore_metadata">

Returns a set of metadata key-value pairs that were used to create the backup.

```sql
SELECT
BackupVaultArn,
RecoveryPointArn,
ResourceType,
RestoreMetadata
FROM aws.backup.recovery_point_restore_metadatas
WHERE backup_vault_name = '{{ backup_vault_name }}' -- required
AND recovery_point_arn = '{{ recovery_point_arn }}' -- required
AND region = '{{ region }}' -- required
AND backupVaultAccountId = '{{ backupVaultAccountId }}'
;
```
</TabItem>
</Tabs>
