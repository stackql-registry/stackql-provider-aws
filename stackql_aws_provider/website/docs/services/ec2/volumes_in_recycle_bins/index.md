--- 
title: volumes_in_recycle_bins
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes_in_recycle_bins
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

Creates, updates, deletes, gets or lists a <code>volumes_in_recycle_bins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="volumes_in_recycle_bins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.volumes_in_recycle_bins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_volumes_in_recycle_bin"
    values={[
        { label: 'list_volumes_in_recycle_bin', value: 'list_volumes_in_recycle_bin' }
    ]}
>
<TabItem value="list_volumes_in_recycle_bin">

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
    <td>The Availability Zone for the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone for the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string</code></td>
    <td>The time stamp when volume creation was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="Iops" /></td>
    <td><code>integer</code></td>
    <td>The number of I/O operations per second (IOPS) for the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="Operator" /></td>
    <td><code>string</code></td>
    <td>The service provider that manages the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="OutpostArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Outpost on which the volume is stored. For more information, see Amazon EBS volumes on Outposts in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="RecycleBinEnterTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the volume entered the Recycle Bin.</td>
</tr>
<tr>
    <td><CopyableCode code="RecycleBinExitTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the volume is to be permanently deleted from the Recycle Bin.</td>
</tr>
<tr>
    <td><CopyableCode code="Size" /></td>
    <td><code>integer</code></td>
    <td>The size of the volume, in GiB.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotId" /></td>
    <td><code>string</code></td>
    <td>The snapshot from which the volume was created, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceVolumeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the source volume.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="Throughput" /></td>
    <td><code>integer</code></td>
    <td>The throughput that the volume supports, in MiB/s.</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeType" /></td>
    <td><code>string</code></td>
    <td>The volume type.</td>
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
    <td><a href="#list_volumes_in_recycle_bin"><CopyableCode code="list_volumes_in_recycle_bin" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-VolumeId"><code>VolumeId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists one or more volumes that are currently in the Recycle Bin.</td>
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
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination. Valid range: 5 - 500</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-VolumeId">
    <td><CopyableCode code="VolumeId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the volumes to list. Omit this parameter to list all of the volumes that are in the Recycle Bin.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_volumes_in_recycle_bin"
    values={[
        { label: 'list_volumes_in_recycle_bin', value: 'list_volumes_in_recycle_bin' }
    ]}
>
<TabItem value="list_volumes_in_recycle_bin">

Lists one or more volumes that are currently in the Recycle Bin.

```sql
SELECT
AvailabilityZone,
AvailabilityZoneId,
CreateTime,
Iops,
Operator,
OutpostArn,
RecycleBinEnterTime,
RecycleBinExitTime,
Size,
SnapshotId,
SourceVolumeId,
State,
Throughput,
VolumeId,
VolumeType
FROM aws.ec2.volumes_in_recycle_bins
WHERE region = '{{ region }}' -- required
AND VolumeId = '{{ VolumeId }}'
AND DryRun = '{{ DryRun }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
