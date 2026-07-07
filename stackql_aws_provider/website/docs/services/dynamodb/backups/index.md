--- 
title: backups
hide_title: false
hide_table_of_contents: false
keywords:
  - backups
  - dynamodb
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dynamodb.backups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_backup"
    values={[
        { label: 'describe_backup', value: 'describe_backup' },
        { label: 'list_backups', value: 'list_backups' }
    ]}
>
<TabItem value="describe_backup">

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
    <td><CopyableCode code="BackupDetails" /></td>
    <td><code>object</code></td>
    <td>Contains the details of the backup created for the table.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceTableDetails" /></td>
    <td><code>object</code></td>
    <td>Contains the details of the table when the backup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceTableFeatureDetails" /></td>
    <td><code>object</code></td>
    <td>Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_backups">

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
    <td><CopyableCode code="BackupArn" /></td>
    <td><code>string</code></td>
    <td>ARN associated with the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupCreationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time at which the backup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupExpiryDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time at which the automatic on-demand backup created by DynamoDB will expire. This SYSTEM on-demand backup expires automatically 35 days after its creation.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupName" /></td>
    <td><code>string</code></td>
    <td>Name of the specified backup. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BackupSizeBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Size of the backup in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupStatus" /></td>
    <td><code>string</code></td>
    <td>Backup can be in one of the following states: CREATING, ACTIVE, DELETED. (CREATING, DELETED, AVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="BackupType" /></td>
    <td><code>string</code></td>
    <td>BackupType: USER - You create and manage these using the on-demand backup feature. SYSTEM - If you delete a table with point-in-time recovery enabled, a SYSTEM backup is automatically created and is retained for 35 days (at no additional cost). System backups allow you to restore the deleted table to the state it was in just before the point of deletion. AWS_BACKUP - On-demand backup created by you from Backup service. (USER, SYSTEM, AWS_BACKUP)</td>
</tr>
<tr>
    <td><CopyableCode code="TableArn" /></td>
    <td><code>string</code></td>
    <td>ARN associated with the table.</td>
</tr>
<tr>
    <td><CopyableCode code="TableId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the table. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TableName" /></td>
    <td><code>string</code></td>
    <td>Name of the table. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_backup"><CopyableCode code="describe_backup" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an existing backup of a table. You can call DescribeBackup at a maximum rate of 10 times per second.</td>
</tr>
<tr>
    <td><a href="#list_backups"><CopyableCode code="list_backups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List DynamoDB backups that are associated with an Amazon Web Services account and weren't made with Amazon Web Services Backup. To list these backups for a given table, specify TableName. ListBackups returns a paginated list of results with at most 1 MB worth of items in a page. You can also specify a maximum number of entries to be returned in a page. In the request, start time is inclusive, but end time is exclusive. Note that these boundaries are for the time at which the original backup was requested. You can call ListBackups a maximum of five times per second. If you want to retrieve the complete list of backups made with Amazon Web Services Backup, use the Amazon Web Services Backup list API.</td>
</tr>
<tr>
    <td><a href="#create_backup"><CopyableCode code="create_backup" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-BackupName"><code>BackupName</code></a></td>
    <td></td>
    <td>Creates a backup for an existing table. Each time you create an on-demand backup, the entire table data is backed up. There is no limit to the number of on-demand backups that can be taken. When you create an on-demand backup, a time marker of the request is cataloged, and the backup is created asynchronously, by applying all changes until the time of the request to the last full table snapshot. Backup requests are processed instantaneously and become available for restore within minutes. You can call CreateBackup at a maximum rate of 50 times per second. All backups in DynamoDB work without consuming any provisioned throughput on the table. If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed to contain all data committed to the table up to 14:24:00, and data committed after 14:26:00 will not be. The backup might contain data modifications made between 14:24:00 and 14:26:00. On-demand backup does not support causal consistency. Along with data, the following are also included on the backups: Global secondary indexes (GSIs) Local secondary indexes (LSIs) Streams Provisioned read and write capacity</td>
</tr>
<tr>
    <td><a href="#delete_backup"><CopyableCode code="delete_backup" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing backup of a table. You can call DeleteBackup at a maximum rate of 10 times per second.</td>
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
    defaultValue="describe_backup"
    values={[
        { label: 'describe_backup', value: 'describe_backup' },
        { label: 'list_backups', value: 'list_backups' }
    ]}
>
<TabItem value="describe_backup">

Describes an existing backup of a table. You can call DescribeBackup at a maximum rate of 10 times per second.

```sql
SELECT
BackupDetails,
SourceTableDetails,
SourceTableFeatureDetails
FROM aws.dynamodb.backups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_backups">

List DynamoDB backups that are associated with an Amazon Web Services account and weren't made with Amazon Web Services Backup. To list these backups for a given table, specify TableName. ListBackups returns a paginated list of results with at most 1 MB worth of items in a page. You can also specify a maximum number of entries to be returned in a page. In the request, start time is inclusive, but end time is exclusive. Note that these boundaries are for the time at which the original backup was requested. You can call ListBackups a maximum of five times per second. If you want to retrieve the complete list of backups made with Amazon Web Services Backup, use the Amazon Web Services Backup list API.

```sql
SELECT
BackupArn,
BackupCreationDateTime,
BackupExpiryDateTime,
BackupName,
BackupSizeBytes,
BackupStatus,
BackupType,
TableArn,
TableId,
TableName
FROM aws.dynamodb.backups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_backup"
    values={[
        { label: 'create_backup', value: 'create_backup' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_backup">

Creates a backup for an existing table. Each time you create an on-demand backup, the entire table data is backed up. There is no limit to the number of on-demand backups that can be taken. When you create an on-demand backup, a time marker of the request is cataloged, and the backup is created asynchronously, by applying all changes until the time of the request to the last full table snapshot. Backup requests are processed instantaneously and become available for restore within minutes. You can call CreateBackup at a maximum rate of 50 times per second. All backups in DynamoDB work without consuming any provisioned throughput on the table. If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed to contain all data committed to the table up to 14:24:00, and data committed after 14:26:00 will not be. The backup might contain data modifications made between 14:24:00 and 14:26:00. On-demand backup does not support causal consistency. Along with data, the following are also included on the backups: Global secondary indexes (GSIs) Local secondary indexes (LSIs) Streams Provisioned read and write capacity

```sql
INSERT INTO aws.dynamodb.backups (
TableName,
BackupName,
region
)
SELECT 
'{{ TableName }}' /* required */,
'{{ BackupName }}' /* required */,
'{{ region }}'
RETURNING
BackupDetails
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: backups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the backups resource.
    - name: TableName
      value: "{{ TableName }}"
      description: |
        The name of the table. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
    - name: BackupName
      value: "{{ BackupName }}"
      description: |
        Specified name for the backup.
`}</CodeBlock>

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

Deletes an existing backup of a table. You can call DeleteBackup at a maximum rate of 10 times per second.

```sql
DELETE FROM aws.dynamodb.backups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
