--- 
title: snapshot_tier_status
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshot_tier_status
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

Creates, updates, deletes, gets or lists a <code>snapshot_tier_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshot_tier_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.snapshot_tier_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_snapshot_tier_status"
    values={[
        { label: 'describe_snapshot_tier_status', value: 'describe_snapshot_tier_status' }
    ]}
>
<TabItem value="describe_snapshot_tier_status">

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
    <td><CopyableCode code="ArchivalCompleteTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the last archive process was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="LastTieringOperationStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the last archive or restore process.</td>
</tr>
<tr>
    <td><CopyableCode code="LastTieringOperationStatusDetail" /></td>
    <td><code>string</code></td>
    <td>A message describing the status of the last archive or restore process.</td>
</tr>
<tr>
    <td><CopyableCode code="LastTieringProgress" /></td>
    <td><code>integer</code></td>
    <td>The progress of the last archive or restore process, as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="LastTieringStartTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the last archive or restore process was started.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="RestoreExpiryTime" /></td>
    <td><code>string</code></td>
    <td>Only for archived snapshots that are temporarily restored. Indicates the date and time when a temporarily restored snapshot will be automatically re-archived.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotId" /></td>
    <td><code>string</code></td>
    <td>The ID of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The state of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageTier" /></td>
    <td><code>string</code></td>
    <td>The storage tier in which the snapshot is stored. standard indicates that the snapshot is stored in the standard snapshot storage tier and that it is ready for use. archive indicates that the snapshot is currently archived and that it must be restored before it can be used.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags that are assigned to the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the volume from which the snapshot was created.</td>
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
    <td><a href="#describe_snapshot_tier_status"><CopyableCode code="describe_snapshot_tier_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes the storage tier status of one or more Amazon EBS snapshots.</td>
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
    <td>The filters. snapshot-id - The snapshot ID. volume-id - The ID of the volume the snapshot is for. last-tiering-operation - The state of the last archive or restore action. (archival-in-progress | archival-completed | archival-failed | permanent-restore-in-progress | permanent-restore-completed | permanent-restore-failed | temporary-restore-in-progress | temporary-restore-completed | temporary-restore-failed)</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_snapshot_tier_status"
    values={[
        { label: 'describe_snapshot_tier_status', value: 'describe_snapshot_tier_status' }
    ]}
>
<TabItem value="describe_snapshot_tier_status">

Describes the storage tier status of one or more Amazon EBS snapshots.

```sql
SELECT
ArchivalCompleteTime,
LastTieringOperationStatus,
LastTieringOperationStatusDetail,
LastTieringProgress,
LastTieringStartTime,
OwnerId,
RestoreExpiryTime,
SnapshotId,
Status,
StorageTier,
Tags,
VolumeId
FROM aws.ec2.snapshot_tier_status
WHERE region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
