--- 
title: backup_plan_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_plan_versions
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

Creates, updates, deletes, gets or lists a <code>backup_plan_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backup_plan_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.backup_plan_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_backup_plan_versions"
    values={[
        { label: 'list_backup_plan_versions', value: 'list_backup_plan_versions' }
    ]}
>
<TabItem value="list_backup_plan_versions">

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
    <td><CopyableCode code="AdvancedBackupSettings" /></td>
    <td><code>array</code></td>
    <td>Contains a list of BackupOptions for a resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupPlanArn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupPlanId" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a backup plan.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupPlanName" /></td>
    <td><code>string</code></td>
    <td>The display name of a saved backup plan.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a resource backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatorRequestId" /></td>
    <td><code>string</code></td>
    <td>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</td>
</tr>
<tr>
    <td><CopyableCode code="DeletionDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a backup plan is deleted, in Unix format and Coordinated Universal Time (UTC). The value of DeletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="LastExecutionDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time this backup plan was run. A date and time, in Unix format and Coordinated Universal Time (UTC). The value of LastExecutionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionId" /></td>
    <td><code>string</code></td>
    <td>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.</td>
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
    <td><a href="#list_backup_plan_versions"><CopyableCode code="list_backup_plan_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_plan_id"><code>backup_plan_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns version metadata of your backup plans, including Amazon Resource Names (ARNs), backup plan IDs, creation and deletion dates, plan names, and version IDs.</td>
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
<tr id="parameter-backup_plan_id">
    <td><CopyableCode code="backup_plan_id" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a backup plan.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
    defaultValue="list_backup_plan_versions"
    values={[
        { label: 'list_backup_plan_versions', value: 'list_backup_plan_versions' }
    ]}
>
<TabItem value="list_backup_plan_versions">

Returns version metadata of your backup plans, including Amazon Resource Names (ARNs), backup plan IDs, creation and deletion dates, plan names, and version IDs.

```sql
SELECT
AdvancedBackupSettings,
BackupPlanArn,
BackupPlanId,
BackupPlanName,
CreationDate,
CreatorRequestId,
DeletionDate,
LastExecutionDate,
VersionId
FROM aws.backup.backup_plan_versions
WHERE backup_plan_id = '{{ backup_plan_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
