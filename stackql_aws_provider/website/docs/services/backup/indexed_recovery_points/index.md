--- 
title: indexed_recovery_points
hide_title: false
hide_table_of_contents: false
keywords:
  - indexed_recovery_points
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

Creates, updates, deletes, gets or lists an <code>indexed_recovery_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="indexed_recovery_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.indexed_recovery_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_indexed_recovery_points"
    values={[
        { label: 'list_indexed_recovery_points', value: 'list_indexed_recovery_points' }
    ]}
>
<TabItem value="list_indexed_recovery_points">

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
    <td><CopyableCode code="BackupCreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a backup was created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupVaultArn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies the backup vault where the recovery point index is stored. For example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault.</td>
</tr>
<tr>
    <td><CopyableCode code="IamRoleArn" /></td>
    <td><code>string</code></td>
    <td>This specifies the IAM role ARN used for this operation. For example, arn:aws:iam::123456789012:role/S3Access</td>
</tr>
<tr>
    <td><CopyableCode code="IndexCreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a backup index was created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
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
    <td><CopyableCode code="RecoveryPointArn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type of the indexed recovery point. EBS for Amazon Elastic Block Store S3 for Amazon Simple Storage Service (Amazon S3) (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_\.&#93;&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceResourceArn" /></td>
    <td><code>string</code></td>
    <td>A string of the Amazon Resource Name (ARN) that uniquely identifies the source resource.</td>
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
    <td><a href="#list_indexed_recovery_points"><CopyableCode code="list_indexed_recovery_points" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-sourceResourceArn"><code>sourceResourceArn</code></a>, <a href="#parameter-createdBefore"><code>createdBefore</code></a>, <a href="#parameter-createdAfter"><code>createdAfter</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-indexStatus"><code>indexStatus</code></a></td>
    <td>This operation returns a list of recovery points that have an associated index, belonging to the specified account. Optional parameters you can include are: MaxResults; NextToken; SourceResourceArns; CreatedBefore; CreatedAfter; and ResourceType.</td>
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
<tr id="parameter-createdAfter">
    <td><CopyableCode code="createdAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns only indexed recovery points that were created after the specified date.</td>
</tr>
<tr id="parameter-createdBefore">
    <td><CopyableCode code="createdBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns only indexed recovery points that were created before the specified date.</td>
</tr>
<tr id="parameter-indexStatus">
    <td><CopyableCode code="indexStatus" /></td>
    <td><code>string</code></td>
    <td>Include this parameter to filter the returned list by the indicated statuses. Accepted values: PENDING | ACTIVE | FAILED | DELETING A recovery point with an index that has the status of ACTIVE can be included in a search.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of resource list items to be returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned recovery points. For example, if a request is made to return MaxResults number of indexed recovery points, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Returns a list of indexed recovery points for the specified resource type(s). Accepted values include: EBS for Amazon Elastic Block Store S3 for Amazon Simple Storage Service (Amazon S3)</td>
</tr>
<tr id="parameter-sourceResourceArn">
    <td><CopyableCode code="sourceResourceArn" /></td>
    <td><code>string</code></td>
    <td>A string of the Amazon Resource Name (ARN) that uniquely identifies the source resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_indexed_recovery_points"
    values={[
        { label: 'list_indexed_recovery_points', value: 'list_indexed_recovery_points' }
    ]}
>
<TabItem value="list_indexed_recovery_points">

This operation returns a list of recovery points that have an associated index, belonging to the specified account. Optional parameters you can include are: MaxResults; NextToken; SourceResourceArns; CreatedBefore; CreatedAfter; and ResourceType.

```sql
SELECT
BackupCreationDate,
BackupVaultArn,
IamRoleArn,
IndexCreationDate,
IndexStatus,
IndexStatusMessage,
RecoveryPointArn,
ResourceType,
SourceResourceArn
FROM aws.backup.indexed_recovery_points
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND sourceResourceArn = '{{ sourceResourceArn }}'
AND createdBefore = '{{ createdBefore }}'
AND createdAfter = '{{ createdAfter }}'
AND resourceType = '{{ resourceType }}'
AND indexStatus = '{{ indexStatus }}'
;
```
</TabItem>
</Tabs>
