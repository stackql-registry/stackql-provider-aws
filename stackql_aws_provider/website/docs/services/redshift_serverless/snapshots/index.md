--- 
title: snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots
  - redshift_serverless
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

Creates, updates, deletes, gets or lists a <code>snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_serverless.snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_snapshot"
    values={[
        { label: 'get_snapshot', value: 'get_snapshot' },
        { label: 'list_snapshots', value: 'list_snapshots' }
    ]}
>
<TabItem value="get_snapshot">

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
    <td><CopyableCode code="accountsWithProvisionedRestoreAccess" /></td>
    <td><code>array</code></td>
    <td>All of the Amazon Web Services accounts that have access to restore a snapshot to a provisioned cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="accountsWithRestoreAccess" /></td>
    <td><code>array</code></td>
    <td>All of the Amazon Web Services accounts that have access to restore a snapshot to a namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="actualIncrementalBackupSizeInMegaBytes" /></td>
    <td><code>number (double)</code></td>
    <td>The size of the incremental backup in megabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="adminPasswordSecretArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the namespace's admin user credentials secret.</td>
</tr>
<tr>
    <td><CopyableCode code="adminPasswordSecretKmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.</td>
</tr>
<tr>
    <td><CopyableCode code="adminUsername" /></td>
    <td><code>string</code></td>
    <td>The username of the database within a snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="backupProgressInMegaBytes" /></td>
    <td><code>number (double)</code></td>
    <td>The size in megabytes of the data that has been backed up to a snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="currentBackupRateInMegaBytesPerSecond" /></td>
    <td><code>number (double)</code></td>
    <td>The rate at which data is backed up into a snapshot in megabytes per second.</td>
</tr>
<tr>
    <td><CopyableCode code="elapsedTimeInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The amount of time it took to back up data into a snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedSecondsToCompletion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The estimated amount of seconds until the snapshot completes backup.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the KMS key used to encrypt the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="namespaceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the namespace the snapshot was created from.</td>
</tr>
<tr>
    <td><CopyableCode code="namespaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the namepsace.</td>
</tr>
<tr>
    <td><CopyableCode code="ownerAccount" /></td>
    <td><code>string</code></td>
    <td>The owner Amazon Web Services; account of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotCreateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotName" /></td>
    <td><code>string</code></td>
    <td>The name of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotRemainingDays" /></td>
    <td><code>integer</code></td>
    <td>The amount of days until the snapshot is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The period of time, in days, of how long the snapshot is retained.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotRetentionStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when data within the snapshot started getting retained.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the snapshot. (AVAILABLE, CREATING, DELETED, CANCELLED, FAILED, COPYING)</td>
</tr>
<tr>
    <td><CopyableCode code="totalBackupSizeInMegaBytes" /></td>
    <td><code>number (double)</code></td>
    <td>The total size, in megabytes, of how big the snapshot is.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_snapshots">

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
    <td><CopyableCode code="accountsWithProvisionedRestoreAccess" /></td>
    <td><code>array</code></td>
    <td>All of the Amazon Web Services accounts that have access to restore a snapshot to a provisioned cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="accountsWithRestoreAccess" /></td>
    <td><code>array</code></td>
    <td>All of the Amazon Web Services accounts that have access to restore a snapshot to a namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="actualIncrementalBackupSizeInMegaBytes" /></td>
    <td><code>number (double)</code></td>
    <td>The size of the incremental backup in megabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="adminPasswordSecretArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the namespace's admin user credentials secret.</td>
</tr>
<tr>
    <td><CopyableCode code="adminPasswordSecretKmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.</td>
</tr>
<tr>
    <td><CopyableCode code="adminUsername" /></td>
    <td><code>string</code></td>
    <td>The username of the database within a snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="backupProgressInMegaBytes" /></td>
    <td><code>number (double)</code></td>
    <td>The size in megabytes of the data that has been backed up to a snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="currentBackupRateInMegaBytesPerSecond" /></td>
    <td><code>number (double)</code></td>
    <td>The rate at which data is backed up into a snapshot in megabytes per second.</td>
</tr>
<tr>
    <td><CopyableCode code="elapsedTimeInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The amount of time it took to back up data into a snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedSecondsToCompletion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The estimated amount of seconds until the snapshot completes backup.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the KMS key used to encrypt the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="namespaceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the namespace the snapshot was created from.</td>
</tr>
<tr>
    <td><CopyableCode code="namespaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the namepsace.</td>
</tr>
<tr>
    <td><CopyableCode code="ownerAccount" /></td>
    <td><code>string</code></td>
    <td>The owner Amazon Web Services; account of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotCreateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotName" /></td>
    <td><code>string</code></td>
    <td>The name of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotRemainingDays" /></td>
    <td><code>integer</code></td>
    <td>The amount of days until the snapshot is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The period of time, in days, of how long the snapshot is retained.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotRetentionStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when data within the snapshot started getting retained.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the snapshot. (AVAILABLE, CREATING, DELETED, CANCELLED, FAILED, COPYING)</td>
</tr>
<tr>
    <td><CopyableCode code="totalBackupSizeInMegaBytes" /></td>
    <td><code>number (double)</code></td>
    <td>The total size, in megabytes, of how big the snapshot is.</td>
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
    <td><a href="#get_snapshot"><CopyableCode code="get_snapshot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific snapshot.</td>
</tr>
<tr>
    <td><a href="#list_snapshots"><CopyableCode code="list_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of snapshots.</td>
</tr>
<tr>
    <td><a href="#create_snapshot"><CopyableCode code="create_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-snapshotName"><code>snapshotName</code></a></td>
    <td></td>
    <td>Creates a snapshot of all databases in a namespace. For more information about snapshots, see Working with snapshots and recovery points.</td>
</tr>
<tr>
    <td><a href="#update_snapshot"><CopyableCode code="update_snapshot" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-snapshotName"><code>snapshotName</code></a></td>
    <td></td>
    <td>Updates a snapshot.</td>
</tr>
<tr>
    <td><a href="#delete_snapshot"><CopyableCode code="delete_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a snapshot from Amazon Redshift Serverless.</td>
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
    defaultValue="get_snapshot"
    values={[
        { label: 'get_snapshot', value: 'get_snapshot' },
        { label: 'list_snapshots', value: 'list_snapshots' }
    ]}
>
<TabItem value="get_snapshot">

Returns information about a specific snapshot.

```sql
SELECT
accountsWithProvisionedRestoreAccess,
accountsWithRestoreAccess,
actualIncrementalBackupSizeInMegaBytes,
adminPasswordSecretArn,
adminPasswordSecretKmsKeyId,
adminUsername,
backupProgressInMegaBytes,
currentBackupRateInMegaBytesPerSecond,
elapsedTimeInSeconds,
estimatedSecondsToCompletion,
kmsKeyId,
namespaceArn,
namespaceName,
ownerAccount,
snapshotArn,
snapshotCreateTime,
snapshotName,
snapshotRemainingDays,
snapshotRetentionPeriod,
snapshotRetentionStartTime,
status,
totalBackupSizeInMegaBytes
FROM aws.redshift_serverless.snapshots
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_snapshots">

Returns a list of snapshots.

```sql
SELECT
accountsWithProvisionedRestoreAccess,
accountsWithRestoreAccess,
actualIncrementalBackupSizeInMegaBytes,
adminPasswordSecretArn,
adminPasswordSecretKmsKeyId,
adminUsername,
backupProgressInMegaBytes,
currentBackupRateInMegaBytesPerSecond,
elapsedTimeInSeconds,
estimatedSecondsToCompletion,
kmsKeyId,
namespaceArn,
namespaceName,
ownerAccount,
snapshotArn,
snapshotCreateTime,
snapshotName,
snapshotRemainingDays,
snapshotRetentionPeriod,
snapshotRetentionStartTime,
status,
totalBackupSizeInMegaBytes
FROM aws.redshift_serverless.snapshots
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_snapshot"
    values={[
        { label: 'create_snapshot', value: 'create_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_snapshot">

Creates a snapshot of all databases in a namespace. For more information about snapshots, see Working with snapshots and recovery points.

```sql
INSERT INTO aws.redshift_serverless.snapshots (
namespaceName,
retentionPeriod,
snapshotName,
tags,
region
)
SELECT 
'{{ namespaceName }}' /* required */,
{{ retentionPeriod }},
'{{ snapshotName }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
snapshot
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: snapshots
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the snapshots resource.
    - name: namespaceName
      value: "{{ namespaceName }}"
      description: |
        The namespace to create a snapshot for.
    - name: retentionPeriod
      value: {{ retentionPeriod }}
      description: |
        How long to retain the created snapshot.
    - name: snapshotName
      value: "{{ snapshotName }}"
      description: |
        The name of the snapshot.
    - name: tags
      description: |
        An array of Tag objects to associate with the snapshot.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_snapshot"
    values={[
        { label: 'update_snapshot', value: 'update_snapshot' }
    ]}
>
<TabItem value="update_snapshot">

Updates a snapshot.

```sql
UPDATE aws.redshift_serverless.snapshots
SET 
retentionPeriod = {{ retentionPeriod }},
snapshotName = '{{ snapshotName }}'
WHERE 
region = '{{ region }}' --required
AND snapshotName = '{{ snapshotName }}' --required
RETURNING
snapshot;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_snapshot"
    values={[
        { label: 'delete_snapshot', value: 'delete_snapshot' }
    ]}
>
<TabItem value="delete_snapshot">

Deletes a snapshot from Amazon Redshift Serverless.

```sql
DELETE FROM aws.redshift_serverless.snapshots
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
