--- 
title: backup_vault_access_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_vault_access_policies
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

Creates, updates, deletes, gets or lists a <code>backup_vault_access_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backup_vault_access_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.backup_vault_access_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_backup_vault_access_policy"
    values={[
        { label: 'get_backup_vault_access_policy', value: 'get_backup_vault_access_policy' }
    ]}
>
<TabItem value="get_backup_vault_access_policy">

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
    <td>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;&#123;2,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The backup vault access policy document in JSON format.</td>
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
    <td><a href="#get_backup_vault_access_policy"><CopyableCode code="get_backup_vault_access_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the access policy document that is associated with the named backup vault.</td>
</tr>
<tr>
    <td><a href="#put_backup_vault_access_policy"><CopyableCode code="put_backup_vault_access_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets a resource-based policy that is used to manage access permissions on the target backup vault. Requires a backup vault name and an access policy document in JSON format.</td>
</tr>
<tr>
    <td><a href="#delete_backup_vault_access_policy"><CopyableCode code="delete_backup_vault_access_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-backup_vault_name"><code>backup_vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the policy document that manages permissions on a backup vault.</td>
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
    <td>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.</td>
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
    defaultValue="get_backup_vault_access_policy"
    values={[
        { label: 'get_backup_vault_access_policy', value: 'get_backup_vault_access_policy' }
    ]}
>
<TabItem value="get_backup_vault_access_policy">

Returns the access policy document that is associated with the named backup vault.

```sql
SELECT
backup_vault_arn,
backup_vault_name,
policy
FROM aws.backup.backup_vault_access_policies
WHERE backup_vault_name = '{{ backup_vault_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_backup_vault_access_policy"
    values={[
        { label: 'put_backup_vault_access_policy', value: 'put_backup_vault_access_policy' }
    ]}
>
<TabItem value="put_backup_vault_access_policy">

Sets a resource-based policy that is used to manage access permissions on the target backup vault. Requires a backup vault name and an access policy document in JSON format.

```sql
REPLACE aws.backup.backup_vault_access_policies
SET 
Policy = '{{ Policy }}'
WHERE 
backup_vault_name = '{{ backup_vault_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_backup_vault_access_policy"
    values={[
        { label: 'delete_backup_vault_access_policy', value: 'delete_backup_vault_access_policy' }
    ]}
>
<TabItem value="delete_backup_vault_access_policy">

Deletes the policy document that manages permissions on a backup vault.

```sql
DELETE FROM aws.backup.backup_vault_access_policies
WHERE backup_vault_name = '{{ backup_vault_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
