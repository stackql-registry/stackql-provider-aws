--- 
title: backup_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_policies
  - efs
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

Creates, updates, deletes, gets or lists a <code>backup_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backup_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.efs.backup_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_backup_policy"
    values={[
        { label: 'describe_backup_policy', value: 'describe_backup_policy' }
    ]}
>
<TabItem value="describe_backup_policy">

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
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Describes the status of the file system's backup policy. ENABLED – EFS is automatically backing up the file system. ENABLING – EFS is turning on automatic backups for the file system. DISABLED – Automatic back ups are turned off for the file system. DISABLING – EFS is turning off automatic backups for the file system. (ENABLED, ENABLING, DISABLED, DISABLING)</td>
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
    <td><a href="#describe_backup_policy"><CopyableCode code="describe_backup_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the backup policy for the specified EFS file system.</td>
</tr>
<tr>
    <td><a href="#put_backup_policy"><CopyableCode code="put_backup_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BackupPolicy"><code>BackupPolicy</code></a></td>
    <td></td>
    <td>Updates the file system's backup policy. Use this action to start or stop automatic backups of the file system.</td>
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
<tr id="parameter-file_system_id">
    <td><CopyableCode code="file_system_id" /></td>
    <td><code>string</code></td>
    <td>Specifies which EFS file system to update the backup policy for.</td>
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
    defaultValue="describe_backup_policy"
    values={[
        { label: 'describe_backup_policy', value: 'describe_backup_policy' }
    ]}
>
<TabItem value="describe_backup_policy">

Returns the backup policy for the specified EFS file system.

```sql
SELECT
Status
FROM aws.efs.backup_policies
WHERE file_system_id = '{{ file_system_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_backup_policy"
    values={[
        { label: 'put_backup_policy', value: 'put_backup_policy' }
    ]}
>
<TabItem value="put_backup_policy">

Updates the file system's backup policy. Use this action to start or stop automatic backups of the file system.

```sql
REPLACE aws.efs.backup_policies
SET 
BackupPolicy = '{{ BackupPolicy }}'
WHERE 
file_system_id = '{{ file_system_id }}' --required
AND region = '{{ region }}' --required
AND BackupPolicy = '{{ BackupPolicy }}' --required
RETURNING
BackupPolicy;
```
</TabItem>
</Tabs>
