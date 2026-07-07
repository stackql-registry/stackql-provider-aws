--- 
title: recovery_points_by_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - recovery_points_by_resources
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

Creates, updates, deletes, gets or lists a <code>recovery_points_by_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recovery_points_by_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.recovery_points_by_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_recovery_points_by_resource"
    values={[
        { label: 'list_recovery_points_by_resource', value: 'list_recovery_points_by_resource' }
    ]}
>
<TabItem value="list_recovery_points_by_resource">

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
    <td><CopyableCode code="AggregatedScanResult" /></td>
    <td><code>object</code></td>
    <td>Contains the latest scanning results against the recovery point and currently include FailedScan, Findings, LastComputed.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupSizeBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size, in bytes, of a backup.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupVaultName" /></td>
    <td><code>string</code></td>
    <td>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;&#123;2,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a recovery point is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionKeyArn" /></td>
    <td><code>string</code></td>
    <td>The server-side encryption key that is used to protect your backups; for example, arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab.</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionKeyType" /></td>
    <td><code>string</code></td>
    <td>The type of encryption key used for the recovery point. Valid values are CUSTOMER_MANAGED_KMS_KEY for customer-managed keys or Amazon Web Services_OWNED_KMS_KEY for Amazon Web Services-owned keys. (AWS_OWNED_KMS_KEY, CUSTOMER_MANAGED_KMS_KEY)</td>
</tr>
<tr>
    <td><CopyableCode code="IndexStatus" /></td>
    <td><code>string</code></td>
    <td>This is the current status for the backup index associated with the specified recovery point. Statuses are: PENDING | ACTIVE | FAILED | DELETING A recovery point with an index that has the status of ACTIVE can be included in a search. (PENDING, ACTIVE, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="IndexStatusMessage" /></td>
    <td><code>string</code></td>
    <td>A string in the form of a detailed message explaining the status of a backup index associated with the recovery point.</td>
</tr>
<tr>
    <td><CopyableCode code="IsParent" /></td>
    <td><code>boolean</code></td>
    <td>This is a boolean value indicating this is a parent (composite) recovery point.</td>
</tr>
<tr>
    <td><CopyableCode code="ParentRecoveryPointArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the parent (composite) recovery point.</td>
</tr>
<tr>
    <td><CopyableCode code="RecoveryPointArn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceName" /></td>
    <td><code>string</code></td>
    <td>The non-unique name of the resource that belongs to the specified backup.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>A status code specifying the state of the recovery point. (COMPLETED, PARTIAL, DELETING, EXPIRED, AVAILABLE, STOPPED, CREATING)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A message explaining the current status of the recovery point.</td>
</tr>
<tr>
    <td><CopyableCode code="VaultType" /></td>
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
    <td><a href="#list_recovery_points_by_resource"><CopyableCode code="list_recovery_points_by_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-managedByAWSBackupOnly"><code>managedByAWSBackupOnly</code></a></td>
    <td>The information about the recovery points of the type specified by a resource Amazon Resource Name (ARN). For Amazon EFS and Amazon EC2, this action only lists recovery points created by Backup.</td>
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
<tr id="parameter-resource_arn">
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.</td>
</tr>
<tr id="parameter-managedByAWSBackupOnly">
    <td><CopyableCode code="managedByAWSBackupOnly" /></td>
    <td><code>boolean</code></td>
    <td>This attribute filters recovery points based on ownership. If this is set to TRUE, the response will contain recovery points associated with the selected resources that are managed by Backup. If this is set to FALSE, the response will contain all recovery points associated with the selected resource. Type: Boolean</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to be returned. Amazon RDS requires a value of at least 20.</td>
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
    defaultValue="list_recovery_points_by_resource"
    values={[
        { label: 'list_recovery_points_by_resource', value: 'list_recovery_points_by_resource' }
    ]}
>
<TabItem value="list_recovery_points_by_resource">

The information about the recovery points of the type specified by a resource Amazon Resource Name (ARN). For Amazon EFS and Amazon EC2, this action only lists recovery points created by Backup.

```sql
SELECT
AggregatedScanResult,
BackupSizeBytes,
BackupVaultName,
CreationDate,
EncryptionKeyArn,
EncryptionKeyType,
IndexStatus,
IndexStatusMessage,
IsParent,
ParentRecoveryPointArn,
RecoveryPointArn,
ResourceName,
Status,
StatusMessage,
VaultType
FROM aws.backup.recovery_points_by_resources
WHERE resource_arn = '{{ resource_arn }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND managedByAWSBackupOnly = '{{ managedByAWSBackupOnly }}'
;
```
</TabItem>
</Tabs>
