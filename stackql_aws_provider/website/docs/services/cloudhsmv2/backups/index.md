--- 
title: backups
hide_title: false
hide_table_of_contents: false
keywords:
  - backups
  - cloudhsmv2
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

Creates, updates, deletes, gets or lists a <code>backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudhsmv2.backups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_backups"
    values={[
        { label: 'describe_backups', value: 'describe_backups' }
    ]}
>
<TabItem value="describe_backups">

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
    <td><CopyableCode code="backup_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the backup. (pattern: &lt;code&gt;^(arn:aws(-(us-gov))?:cloudhsm:(&#91;a-z&#93;&#123;2&#125;(-(gov|isob|iso))?-(east|west|north|south|central)&#123;1,2&#125;-&#91;0-9&#93;&#123;1&#125;):&#91;0-9&#93;&#123;12&#125;:backup/)?backup-&#91;2-7a-zA-Z&#93;&#123;11,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_id" /></td>
    <td><code>string</code></td>
    <td>The identifier (ID) of the backup. (pattern: &lt;code&gt;backup-&#91;2-7a-zA-Z&#93;&#123;11,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_state" /></td>
    <td><code>string</code></td>
    <td>The state of the backup. (CREATE_IN_PROGRESS, READY, DELETED, PENDING_DELETION)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td>The identifier (ID) of the cluster that was backed up. (pattern: &lt;code&gt;cluster-&#91;2-7a-zA-Z&#93;&#123;11,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="copy_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the backup was copied from a source backup.</td>
</tr>
<tr>
    <td><CopyableCode code="create_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the backup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="delete_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the backup will be permanently deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="hsm_type" /></td>
    <td><code>string</code></td>
    <td>The HSM type used to create the backup. (pattern: &lt;code&gt;((p|)hsm&#91;0-9&#93;&#91;a-z.&#93;*\.&#91;a-zA-Z&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The mode of the cluster that was backed up. (FIPS, NON_FIPS)</td>
</tr>
<tr>
    <td><CopyableCode code="never_expires" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the service should exempt a backup from the retention policy for the cluster. True exempts a backup from the retention policy. False means the service applies the backup retention policy defined at the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="source_backup" /></td>
    <td><code>string</code></td>
    <td>The identifier (ID) of the source backup from which the new backup was copied. (pattern: &lt;code&gt;backup-&#91;2-7a-zA-Z&#93;&#123;11,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_cluster" /></td>
    <td><code>string</code></td>
    <td>The identifier (ID) of the cluster containing the source backup from which the new backup was copied. (pattern: &lt;code&gt;cluster-&#91;2-7a-zA-Z&#93;&#123;11,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_region" /></td>
    <td><code>string</code></td>
    <td>The AWS Region that contains the source backup from which the new backup was copied. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-(gov))?-(east|west|north|south|central)&#123;1,2&#125;-\d&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tag_list" /></td>
    <td><code>array</code></td>
    <td>The list of tags for the backup.</td>
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
    <td><a href="#describe_backups"><CopyableCode code="describe_backups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about backups of CloudHSM clusters. Lists either the backups you own or the backups shared with you when the Shared parameter is true. This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a NextToken value. Use this value in a subsequent DescribeBackups request to get more backups. When you receive a response with no NextToken (or an empty or null value), that means there are no more backups to get. Cross-account use: Yes. Customers can describe backups in other Amazon Web Services accounts that are shared with them.</td>
</tr>
<tr>
    <td><a href="#modify_backup_attributes"><CopyableCode code="modify_backup_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BackupId"><code>BackupId</code></a>, <a href="#parameter-NeverExpires"><code>NeverExpires</code></a></td>
    <td></td>
    <td>Modifies attributes for CloudHSM backup. Cross-account use: No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#delete_backup"><CopyableCode code="delete_backup" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see RestoreBackup. Cross-account use: No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#copy_backup_to_region"><CopyableCode code="copy_backup_to_region" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DestinationRegion"><code>DestinationRegion</code></a>, <a href="#parameter-BackupId"><code>BackupId</code></a></td>
    <td></td>
    <td>Copy an CloudHSM cluster backup to a different region. Cross-account use: No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#restore_backup"><CopyableCode code="restore_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BackupId"><code>BackupId</code></a></td>
    <td></td>
    <td>Restores a specified CloudHSM backup that is in the PENDING_DELETION state. For more information on deleting a backup, see DeleteBackup. Cross-account use: No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_backups"
    values={[
        { label: 'describe_backups', value: 'describe_backups' }
    ]}
>
<TabItem value="describe_backups">

Gets information about backups of CloudHSM clusters. Lists either the backups you own or the backups shared with you when the Shared parameter is true. This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a NextToken value. Use this value in a subsequent DescribeBackups request to get more backups. When you receive a response with no NextToken (or an empty or null value), that means there are no more backups to get. Cross-account use: Yes. Customers can describe backups in other Amazon Web Services accounts that are shared with them.

```sql
SELECT
backup_arn,
backup_id,
backup_state,
cluster_id,
copy_timestamp,
create_timestamp,
delete_timestamp,
hsm_type,
mode,
never_expires,
source_backup,
source_cluster,
source_region,
tag_list
FROM aws.cloudhsmv2.backups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_backup_attributes"
    values={[
        { label: 'modify_backup_attributes', value: 'modify_backup_attributes' }
    ]}
>
<TabItem value="modify_backup_attributes">

Modifies attributes for CloudHSM backup. Cross-account use: No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.

```sql
UPDATE aws.cloudhsmv2.backups
SET 
BackupId = '{{ BackupId }}',
NeverExpires = {{ NeverExpires }}
WHERE 
region = '{{ region }}' --required
AND BackupId = '{{ BackupId }}' --required
AND NeverExpires = {{ NeverExpires }} --required
RETURNING
backup;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_backup"
    values={[
        { label: 'delete_backup', value: 'delete_backup' }
    ]}
>
<TabItem value="delete_backup">

Deletes a specified CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see RestoreBackup. Cross-account use: No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.

```sql
DELETE FROM aws.cloudhsmv2.backups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copy_backup_to_region"
    values={[
        { label: 'copy_backup_to_region', value: 'copy_backup_to_region' },
        { label: 'restore_backup', value: 'restore_backup' }
    ]}
>
<TabItem value="copy_backup_to_region">

Copy an CloudHSM cluster backup to a different region. Cross-account use: No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.

```sql
EXEC aws.cloudhsmv2.backups.copy_backup_to_region 
@region='{{ region }}' --required 
@@json=
'{
"DestinationRegion": "{{ DestinationRegion }}", 
"BackupId": "{{ BackupId }}", 
"TagList": "{{ TagList }}"
}'
;
```
</TabItem>
<TabItem value="restore_backup">

Restores a specified CloudHSM backup that is in the PENDING_DELETION state. For more information on deleting a backup, see DeleteBackup. Cross-account use: No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.

```sql
EXEC aws.cloudhsmv2.backups.restore_backup 
@region='{{ region }}' --required 
@@json=
'{
"BackupId": "{{ BackupId }}"
}'
;
```
</TabItem>
</Tabs>
