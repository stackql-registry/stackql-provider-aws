--- 
title: locked_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - locked_snapshots
  - ec2
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

Creates, updates, deletes, gets or lists a <code>locked_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="locked_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.locked_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_locked_snapshots"
    values={[
        { label: 'describe_locked_snapshots', value: 'describe_locked_snapshots' }
    ]}
>
<TabItem value="describe_locked_snapshots">

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
    <td><CopyableCode code="CoolOffPeriod" /></td>
    <td><code>integer</code></td>
    <td>The compliance mode cooling-off period, in hours.</td>
</tr>
<tr>
    <td><CopyableCode code="CoolOffPeriodExpiresOn" /></td>
    <td><code>string</code></td>
    <td>The date and time at which the compliance mode cooling-off period expires, in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ).</td>
</tr>
<tr>
    <td><CopyableCode code="LockCreatedOn" /></td>
    <td><code>string</code></td>
    <td>The date and time at which the snapshot was locked, in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ).</td>
</tr>
<tr>
    <td><CopyableCode code="LockDuration" /></td>
    <td><code>integer</code></td>
    <td>The period of time for which the snapshot is locked, in days.</td>
</tr>
<tr>
    <td><CopyableCode code="LockDurationStartTime" /></td>
    <td><code>string</code></td>
    <td>The date and time at which the lock duration started, in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ). If you lock a snapshot that is in the pending state, the lock duration starts only once the snapshot enters the completed state.</td>
</tr>
<tr>
    <td><CopyableCode code="LockExpiresOn" /></td>
    <td><code>string</code></td>
    <td>The date and time at which the lock will expire, in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ).</td>
</tr>
<tr>
    <td><CopyableCode code="LockState" /></td>
    <td><code>string</code></td>
    <td>The state of the snapshot lock. Valid states include: compliance-cooloff - The snapshot has been locked in compliance mode but it is still within the cooling-off period. The snapshot can't be deleted, but it can be unlocked and the lock settings can be modified by users with appropriate permissions. governance - The snapshot is locked in governance mode. The snapshot can't be deleted, but it can be unlocked and the lock settings can be modified by users with appropriate permissions. compliance - The snapshot is locked in compliance mode and the cooling-off period has expired. The snapshot can't be unlocked or deleted. The lock duration can only be increased by users with appropriate permissions. expired - The snapshot was locked in compliance or governance mode but the lock duration has expired. The snapshot is not locked and can be deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The account ID of the Amazon Web Services account that owns the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotId" /></td>
    <td><code>string</code></td>
    <td>The ID of the snapshot.</td>
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
    <td><a href="#describe_locked_snapshots"><CopyableCode code="describe_locked_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-SnapshotId"><code>SnapshotId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the lock status for a snapshot.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. lock-state - The state of the snapshot lock (compliance-cooloff | governance | compliance | expired).</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-SnapshotId">
    <td><CopyableCode code="SnapshotId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the snapshots for which to view the lock status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_locked_snapshots"
    values={[
        { label: 'describe_locked_snapshots', value: 'describe_locked_snapshots' }
    ]}
>
<TabItem value="describe_locked_snapshots">

Describes the lock status for a snapshot.

```sql
SELECT
CoolOffPeriod,
CoolOffPeriodExpiresOn,
LockCreatedOn,
LockDuration,
LockDurationStartTime,
LockExpiresOn,
LockState,
OwnerId,
SnapshotId
FROM aws.ec2.locked_snapshots
WHERE region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND SnapshotId = '{{ SnapshotId }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
