--- 
title: protected_resources_by_backup_vaults
hide_title: false
hide_table_of_contents: false
keywords:
  - protected_resources_by_backup_vaults
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

Creates, updates, deletes, gets or lists a <code>protected_resources_by_backup_vaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="protected_resources_by_backup_vaults" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.protected_resources_by_backup_vaults" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_protected_resources_by_backup_vault"
    values={[
        { label: 'list_protected_resources_by_backup_vault', value: 'list_protected_resources_by_backup_vault' }
    ]}
>
<TabItem value="list_protected_resources_by_backup_vault">

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
    <td><CopyableCode code="last_backup_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a resource was last backed up, in Unix format and Coordinated Universal Time (UTC). The value of LastBackupTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="last_backup_vault_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the backup vault that contains the most recent backup recovery point.</td>
</tr>
<tr>
    <td><CopyableCode code="last_recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the most recent recovery point.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_name" /></td>
    <td><code>string</code></td>
    <td>The non-unique name of the resource that belongs to the specified backup.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services resource; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is Amazon EC2. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_\.&#93;&#123;1,50&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#list_protected_resources_by_backup_vault"><CopyableCode code="list_protected_resources_by_backup_vault" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-backupVaultAccountId"><code>backupVaultAccountId</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>This request lists the protected resources corresponding to each backup vault.</td>
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
    <td>The list of protected resources by backup vault within the vault(s) you specify by name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-backupVaultAccountId">
    <td><CopyableCode code="backupVaultAccountId" /></td>
    <td><code>string</code></td>
    <td>The list of protected resources by backup vault within the vault(s) you specify by account ID.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_protected_resources_by_backup_vault"
    values={[
        { label: 'list_protected_resources_by_backup_vault', value: 'list_protected_resources_by_backup_vault' }
    ]}
>
<TabItem value="list_protected_resources_by_backup_vault">

This request lists the protected resources corresponding to each backup vault.

```sql
SELECT
last_backup_time,
last_backup_vault_arn,
last_recovery_point_arn,
resource_arn,
resource_name,
resource_type
FROM aws.backup.protected_resources_by_backup_vaults
WHERE backup_vault_name = '{{ backup_vault_name }}' -- required
AND region = '{{ region }}' -- required
AND backupVaultAccountId = '{{ backupVaultAccountId }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
