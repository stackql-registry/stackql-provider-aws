--- 
title: restore_testing_inferred_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - restore_testing_inferred_metadatas
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

Creates, updates, deletes, gets or lists a <code>restore_testing_inferred_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="restore_testing_inferred_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.restore_testing_inferred_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_restore_testing_inferred_metadata"
    values={[
        { label: 'get_restore_testing_inferred_metadata', value: 'get_restore_testing_inferred_metadata' }
    ]}
>
<TabItem value="get_restore_testing_inferred_metadata">

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
    <td><CopyableCode code="inferred_metadata" /></td>
    <td><code>object</code></td>
    <td>This is a string map of the metadata inferred from the request.</td>
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
    <td><a href="#get_restore_testing_inferred_metadata"><CopyableCode code="get_restore_testing_inferred_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-BackupVaultName"><code>BackupVaultName</code></a>, <a href="#parameter-RecoveryPointArn"><code>RecoveryPointArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-BackupVaultAccountId"><code>BackupVaultAccountId</code></a></td>
    <td>This request returns the minimal required set of metadata needed to start a restore job with secure default settings. BackupVaultName and RecoveryPointArn are required parameters. BackupVaultAccountId is an optional parameter.</td>
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
<tr id="parameter-BackupVaultName">
    <td><CopyableCode code="BackupVaultName" /></td>
    <td><code>string</code></td>
    <td>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web ServicesRegion where they are created. They consist of letters, numbers, and hyphens.</td>
</tr>
<tr id="parameter-RecoveryPointArn">
    <td><CopyableCode code="RecoveryPointArn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-BackupVaultAccountId">
    <td><CopyableCode code="BackupVaultAccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID of the specified backup vault.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_restore_testing_inferred_metadata"
    values={[
        { label: 'get_restore_testing_inferred_metadata', value: 'get_restore_testing_inferred_metadata' }
    ]}
>
<TabItem value="get_restore_testing_inferred_metadata">

This request returns the minimal required set of metadata needed to start a restore job with secure default settings. BackupVaultName and RecoveryPointArn are required parameters. BackupVaultAccountId is an optional parameter.

```sql
SELECT
inferred_metadata
FROM aws.backup.restore_testing_inferred_metadatas
WHERE BackupVaultName = '{{ BackupVaultName }}' -- required
AND RecoveryPointArn = '{{ RecoveryPointArn }}' -- required
AND region = '{{ region }}' -- required
AND BackupVaultAccountId = '{{ BackupVaultAccountId }}'
;
```
</TabItem>
</Tabs>
