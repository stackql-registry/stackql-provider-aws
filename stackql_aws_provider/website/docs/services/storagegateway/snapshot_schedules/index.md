--- 
title: snapshot_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshot_schedules
  - storagegateway
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

Creates, updates, deletes, gets or lists a <code>snapshot_schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshot_schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.snapshot_schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_snapshot_schedule"
    values={[
        { label: 'describe_snapshot_schedule', value: 'describe_snapshot_schedule' }
    ]}
>
<TabItem value="describe_snapshot_schedule">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The snapshot description.</td>
</tr>
<tr>
    <td><CopyableCode code="recurrence_in_hours" /></td>
    <td><code>integer</code></td>
    <td>The number of hours between snapshots.</td>
</tr>
<tr>
    <td><CopyableCode code="start_at" /></td>
    <td><code>integer</code></td>
    <td>The hour of the day at which the snapshot schedule begins represented as hh, where hh is the hour (0 to 23). The hour of the day is in the time zone of the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of up to 50 tags assigned to the snapshot schedule, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the ListTagsForResource API operation.</td>
</tr>
<tr>
    <td><CopyableCode code="timezone" /></td>
    <td><code>string</code></td>
    <td>A value that indicates the time zone of the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="volume_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the volume that was specified in the request. (pattern: &lt;code&gt;arn:(aws(|-cn|-us-gov|-iso&#91;A-Za-z0-9_-&#93;*|-eusc)):storagegateway:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;+:gateway\/(.+)\/volume\/vol-(\S+)&lt;/code&gt;)</td>
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
    <td><a href="#describe_snapshot_schedule"><CopyableCode code="describe_snapshot_schedule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the cached volume and stored volume types.</td>
</tr>
<tr>
    <td><a href="#update_snapshot_schedule"><CopyableCode code="update_snapshot_schedule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VolumeARN"><code>VolumeARN</code></a>, <a href="#parameter-StartAt"><code>StartAt</code></a>, <a href="#parameter-RecurrenceInHours"><code>RecurrenceInHours</code></a></td>
    <td></td>
    <td>Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached volume and stored volume gateway types. The default snapshot schedule for volume is once every 24 hours, starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for the volume. In the request you must identify the gateway volume whose snapshot schedule you want to update, and the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of snapshots.</td>
</tr>
<tr>
    <td><a href="#delete_snapshot_schedule"><CopyableCode code="delete_snapshot_schedule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a snapshot of a volume. You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see Backing up your volumes. In the DeleteSnapshotSchedule request, you identify the volume by providing its Amazon Resource Name (ARN). This operation is only supported for cached volume gateway types. To list or delete a snapshot, you must use the Amazon EC2 API. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference.</td>
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
    defaultValue="describe_snapshot_schedule"
    values={[
        { label: 'describe_snapshot_schedule', value: 'describe_snapshot_schedule' }
    ]}
>
<TabItem value="describe_snapshot_schedule">

Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the cached volume and stored volume types.

```sql
SELECT
description,
recurrence_in_hours,
start_at,
tags,
timezone,
volume_arn
FROM aws.storagegateway.snapshot_schedules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_snapshot_schedule"
    values={[
        { label: 'update_snapshot_schedule', value: 'update_snapshot_schedule' }
    ]}
>
<TabItem value="update_snapshot_schedule">

Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached volume and stored volume gateway types. The default snapshot schedule for volume is once every 24 hours, starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for the volume. In the request you must identify the gateway volume whose snapshot schedule you want to update, and the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of snapshots.

```sql
UPDATE aws.storagegateway.snapshot_schedules
SET 
VolumeARN = '{{ VolumeARN }}',
StartAt = {{ StartAt }},
RecurrenceInHours = {{ RecurrenceInHours }},
Description = '{{ Description }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND VolumeARN = '{{ VolumeARN }}' --required
AND StartAt = '{{ StartAt }}' --required
AND RecurrenceInHours = '{{ RecurrenceInHours }}' --required
RETURNING
volume_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_snapshot_schedule"
    values={[
        { label: 'delete_snapshot_schedule', value: 'delete_snapshot_schedule' }
    ]}
>
<TabItem value="delete_snapshot_schedule">

Deletes a snapshot of a volume. You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see Backing up your volumes. In the DeleteSnapshotSchedule request, you identify the volume by providing its Amazon Resource Name (ARN). This operation is only supported for cached volume gateway types. To list or delete a snapshot, you must use the Amazon EC2 API. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference.

```sql
DELETE FROM aws.storagegateway.snapshot_schedules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
