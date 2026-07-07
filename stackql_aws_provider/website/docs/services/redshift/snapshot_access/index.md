--- 
title: snapshot_access
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshot_access
  - redshift
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

Creates, updates, deletes, gets or lists a <code>snapshot_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshot_access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.snapshot_access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#authorize_snapshot_access"><CopyableCode code="authorize_snapshot_access" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AccountWithRestoreAccess"><code>AccountWithRestoreAccess</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SnapshotIdentifier"><code>SnapshotIdentifier</code></a>, <a href="#parameter-SnapshotArn"><code>SnapshotArn</code></a>, <a href="#parameter-SnapshotClusterIdentifier"><code>SnapshotClusterIdentifier</code></a></td>
    <td>Authorizes the specified Amazon Web Services account to restore the specified snapshot. For more information about working with snapshots, go to Amazon Redshift Snapshots in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#revoke_snapshot_access"><CopyableCode code="revoke_snapshot_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AccountWithRestoreAccess"><code>AccountWithRestoreAccess</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SnapshotIdentifier"><code>SnapshotIdentifier</code></a>, <a href="#parameter-SnapshotArn"><code>SnapshotArn</code></a>, <a href="#parameter-SnapshotClusterIdentifier"><code>SnapshotClusterIdentifier</code></a></td>
    <td>Removes the ability of the specified Amazon Web Services account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion. For more information about working with snapshots, go to Amazon Redshift Snapshots in the Amazon Redshift Cluster Management Guide.</td>
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
<tr id="parameter-AccountWithRestoreAccess">
    <td><CopyableCode code="AccountWithRestoreAccess" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Web Services account that can no longer restore the specified snapshot.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-SnapshotArn">
    <td><CopyableCode code="SnapshotArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the snapshot associated with the message to revoke access.</td>
</tr>
<tr id="parameter-SnapshotClusterIdentifier">
    <td><CopyableCode code="SnapshotClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cluster the snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.</td>
</tr>
<tr id="parameter-SnapshotIdentifier">
    <td><CopyableCode code="SnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the snapshot that the account can no longer access.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="authorize_snapshot_access"
    values={[
        { label: 'authorize_snapshot_access', value: 'authorize_snapshot_access' }
    ]}
>
<TabItem value="authorize_snapshot_access">

Authorizes the specified Amazon Web Services account to restore the specified snapshot. For more information about working with snapshots, go to Amazon Redshift Snapshots in the Amazon Redshift Cluster Management Guide.

```sql
UPDATE aws.redshift.snapshot_access
SET 
-- No updatable properties
WHERE 
AccountWithRestoreAccess = '{{ AccountWithRestoreAccess }}' --required
AND region = '{{ region }}' --required
AND SnapshotIdentifier = '{{ SnapshotIdentifier}}'
AND SnapshotArn = '{{ SnapshotArn}}'
AND SnapshotClusterIdentifier = '{{ SnapshotClusterIdentifier}}'
RETURNING
AccountsWithRestoreAccess,
ActualIncrementalBackupSizeInMegaBytes,
AvailabilityZone,
BackupProgressInMegaBytes,
ClusterCreateTime,
ClusterIdentifier,
ClusterVersion,
CurrentBackupRateInMegaBytesPerSecond,
DBName,
ElapsedTimeInSeconds,
Encrypted,
EncryptedWithHSM,
EngineFullVersion,
EnhancedVpcRouting,
EstimatedSecondsToCompletion,
KmsKeyId,
MaintenanceTrackName,
ManualSnapshotRemainingDays,
ManualSnapshotRetentionPeriod,
MasterPasswordSecretArn,
MasterPasswordSecretKmsKeyId,
MasterUsername,
NodeType,
NumberOfNodes,
OwnerAccount,
Port,
RestorableNodeTypes,
SnapshotArn,
SnapshotCreateTime,
SnapshotIdentifier,
SnapshotRetentionStartTime,
SnapshotType,
SourceRegion,
Status,
Tags,
TotalBackupSizeInMegaBytes,
VpcId;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="revoke_snapshot_access"
    values={[
        { label: 'revoke_snapshot_access', value: 'revoke_snapshot_access' }
    ]}
>
<TabItem value="revoke_snapshot_access">

Removes the ability of the specified Amazon Web Services account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion. For more information about working with snapshots, go to Amazon Redshift Snapshots in the Amazon Redshift Cluster Management Guide.

```sql
EXEC aws.redshift.snapshot_access.revoke_snapshot_access 
@AccountWithRestoreAccess='{{ AccountWithRestoreAccess }}' --required, 
@region='{{ region }}' --required, 
@SnapshotIdentifier='{{ SnapshotIdentifier }}', 
@SnapshotArn='{{ SnapshotArn }}', 
@SnapshotClusterIdentifier='{{ SnapshotClusterIdentifier }}'
;
```
</TabItem>
</Tabs>
