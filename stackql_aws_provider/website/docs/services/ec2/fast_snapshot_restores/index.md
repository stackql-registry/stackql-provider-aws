--- 
title: fast_snapshot_restores
hide_title: false
hide_table_of_contents: false
keywords:
  - fast_snapshot_restores
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

Creates, updates, deletes, gets or lists a <code>fast_snapshot_restores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fast_snapshot_restores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.fast_snapshot_restores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fast_snapshot_restores"
    values={[
        { label: 'describe_fast_snapshot_restores', value: 'describe_fast_snapshot_restores' }
    ]}
>
<TabItem value="describe_fast_snapshot_restores">

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
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="DisabledTime" /></td>
    <td><code>string</code></td>
    <td>The time at which fast snapshot restores entered the disabled state.</td>
</tr>
<tr>
    <td><CopyableCode code="DisablingTime" /></td>
    <td><code>string</code></td>
    <td>The time at which fast snapshot restores entered the disabling state.</td>
</tr>
<tr>
    <td><CopyableCode code="EnabledTime" /></td>
    <td><code>string</code></td>
    <td>The time at which fast snapshot restores entered the enabled state.</td>
</tr>
<tr>
    <td><CopyableCode code="EnablingTime" /></td>
    <td><code>string</code></td>
    <td>The time at which fast snapshot restores entered the enabling state.</td>
</tr>
<tr>
    <td><CopyableCode code="OptimizingTime" /></td>
    <td><code>string</code></td>
    <td>The time at which fast snapshot restores entered the optimizing state.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerAlias" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotId" /></td>
    <td><code>string</code></td>
    <td>The ID of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of fast snapshot restores.</td>
</tr>
<tr>
    <td><CopyableCode code="StateTransitionReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the state transition. The possible values are as follows: Client.UserInitiated - The state successfully transitioned to enabling or disabling. Client.UserInitiated - Lifecycle state transition - The state successfully transitioned to optimizing, enabled, or disabled.</td>
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
    <td><a href="#describe_fast_snapshot_restores"><CopyableCode code="describe_fast_snapshot_restores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the state of fast snapshot restores for your snapshots.</td>
</tr>
<tr>
    <td><a href="#disable_fast_snapshot_restores"><CopyableCode code="disable_fast_snapshot_restores" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SourceSnapshotId"><code>SourceSnapshotId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-AvailabilityZoneId"><code>AvailabilityZoneId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disables fast snapshot restores for the specified snapshots in the specified Availability Zones.</td>
</tr>
<tr>
    <td><a href="#enable_fast_snapshot_restores"><CopyableCode code="enable_fast_snapshot_restores" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SourceSnapshotId"><code>SourceSnapshotId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-AvailabilityZoneId"><code>AvailabilityZoneId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Enables fast snapshot restores for the specified snapshots in the specified Availability Zones. You get the full benefit of fast snapshot restores after they enter the enabled state. For more information, see Amazon EBS fast snapshot restore in the Amazon EBS User Guide.</td>
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
<tr id="parameter-SourceSnapshotId">
    <td><CopyableCode code="SourceSnapshotId" /></td>
    <td><code>array</code></td>
    <td>The IDs of one or more snapshots. For example, snap-1234567890abcdef0. You can specify a snapshot that was shared with you from another Amazon Web Services account.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AvailabilityZone">
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>array</code></td>
    <td>One or more Availability Zones. For example, us-east-2a. Either AvailabilityZone or AvailabilityZoneId must be specified in the request, but not both.</td>
</tr>
<tr id="parameter-AvailabilityZoneId">
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>array</code></td>
    <td>One or more Availability Zone IDs. For example, use2-az1. Either AvailabilityZone or AvailabilityZoneId must be specified in the request, but not both.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. The possible values are: availability-zone: The Availability Zone of the snapshot. For example, us-east-2a. availability-zone-id: The ID of the Availability Zone of the snapshot. For example, use2-az1. owner-id: The ID of the Amazon Web Services account that enabled fast snapshot restore on the snapshot. snapshot-id: The ID of the snapshot. state: The state of fast snapshot restores for the snapshot (enabling | optimizing | enabled | disabling | disabled).</td>
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
    defaultValue="describe_fast_snapshot_restores"
    values={[
        { label: 'describe_fast_snapshot_restores', value: 'describe_fast_snapshot_restores' }
    ]}
>
<TabItem value="describe_fast_snapshot_restores">

Describes the state of fast snapshot restores for your snapshots.

```sql
SELECT
AvailabilityZone,
AvailabilityZoneId,
DisabledTime,
DisablingTime,
EnabledTime,
EnablingTime,
OptimizingTime,
OwnerAlias,
OwnerId,
SnapshotId,
State,
StateTransitionReason
FROM aws.ec2.fast_snapshot_restores
WHERE region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_fast_snapshot_restores"
    values={[
        { label: 'disable_fast_snapshot_restores', value: 'disable_fast_snapshot_restores' },
        { label: 'enable_fast_snapshot_restores', value: 'enable_fast_snapshot_restores' }
    ]}
>
<TabItem value="disable_fast_snapshot_restores">

Disables fast snapshot restores for the specified snapshots in the specified Availability Zones.

```sql
EXEC aws.ec2.fast_snapshot_restores.disable_fast_snapshot_restores 
@SourceSnapshotId='{{ SourceSnapshotId }}' --required, 
@region='{{ region }}' --required, 
@AvailabilityZone='{{ AvailabilityZone }}', 
@AvailabilityZoneId='{{ AvailabilityZoneId }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_fast_snapshot_restores">

Enables fast snapshot restores for the specified snapshots in the specified Availability Zones. You get the full benefit of fast snapshot restores after they enter the enabled state. For more information, see Amazon EBS fast snapshot restore in the Amazon EBS User Guide.

```sql
EXEC aws.ec2.fast_snapshot_restores.enable_fast_snapshot_restores 
@SourceSnapshotId='{{ SourceSnapshotId }}' --required, 
@region='{{ region }}' --required, 
@AvailabilityZone='{{ AvailabilityZone }}', 
@AvailabilityZoneId='{{ AvailabilityZoneId }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
