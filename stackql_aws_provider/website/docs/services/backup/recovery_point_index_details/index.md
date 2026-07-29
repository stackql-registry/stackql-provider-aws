--- 
title: recovery_point_index_details
hide_title: false
hide_table_of_contents: false
keywords:
  - recovery_point_index_details
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

Creates, updates, deletes, gets or lists a <code>recovery_point_index_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recovery_point_index_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.recovery_point_index_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recovery_point_index_details"
    values={[
        { label: 'get_recovery_point_index_details', value: 'get_recovery_point_index_details' }
    ]}
>
<TabItem value="get_recovery_point_index_details">

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
    <td>An ARN that uniquely identifies the backup vault where the recovery point index is stored. For example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault.</td>
</tr>
<tr>
    <td><CopyableCode code="index_completion_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a backup index finished creation, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="index_creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a backup index was created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="index_deletion_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a backup index was deleted, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="index_status" /></td>
    <td><code>string</code></td>
    <td>This is the current status for the backup index associated with the specified recovery point. Statuses are: PENDING | ACTIVE | FAILED | DELETING A recovery point with an index that has the status of ACTIVE can be included in a search. (PENDING, ACTIVE, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="index_status_message" /></td>
    <td><code>string</code></td>
    <td>A detailed message explaining the status of a backup index associated with the recovery point.</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
</tr>
<tr>
    <td><CopyableCode code="source_resource_arn" /></td>
    <td><code>string</code></td>
    <td>A string of the Amazon Resource Name (ARN) that uniquely identifies the source resource.</td>
</tr>
<tr>
    <td><CopyableCode code="total_items_indexed" /></td>
    <td><code>integer (int64)</code></td>
    <td>Count of items within the backup index associated with the recovery point.</td>
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
    <td><a href="#get_recovery_point_index_details"><CopyableCode code="get_recovery_point_index_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-recovery_point_arn"><code>recovery_point_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation returns the metadata and details specific to the backup index associated with the specified recovery point.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_recovery_point_index_details"
    values={[
        { label: 'get_recovery_point_index_details', value: 'get_recovery_point_index_details' }
    ]}
>
<TabItem value="get_recovery_point_index_details">

This operation returns the metadata and details specific to the backup index associated with the specified recovery point.

```sql
SELECT
backup_vault_arn,
index_completion_date,
index_creation_date,
index_deletion_date,
index_status,
index_status_message,
recovery_point_arn,
source_resource_arn,
total_items_indexed
FROM aws.backup.recovery_point_index_details
WHERE backup_vault_name = '{{ backup_vault_name }}' -- required
AND recovery_point_arn = '{{ recovery_point_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
