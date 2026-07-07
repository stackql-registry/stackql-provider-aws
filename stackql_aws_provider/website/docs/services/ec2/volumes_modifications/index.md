--- 
title: volumes_modifications
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes_modifications
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

Creates, updates, deletes, gets or lists a <code>volumes_modifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="volumes_modifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.volumes_modifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_volumes_modifications"
    values={[
        { label: 'describe_volumes_modifications', value: 'describe_volumes_modifications' }
    ]}
>
<TabItem value="describe_volumes_modifications">

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
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string</code></td>
    <td>The modification completion or failure time.</td>
</tr>
<tr>
    <td><CopyableCode code="ModificationState" /></td>
    <td><code>string</code></td>
    <td>The current modification state.</td>
</tr>
<tr>
    <td><CopyableCode code="OriginalIops" /></td>
    <td><code>integer</code></td>
    <td>The original IOPS rate of the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="OriginalMultiAttachEnabled" /></td>
    <td><code>boolean</code></td>
    <td>The original setting for Amazon EBS Multi-Attach.</td>
</tr>
<tr>
    <td><CopyableCode code="OriginalSize" /></td>
    <td><code>integer</code></td>
    <td>The original size of the volume, in GiB.</td>
</tr>
<tr>
    <td><CopyableCode code="OriginalThroughput" /></td>
    <td><code>integer</code></td>
    <td>The original throughput of the volume, in MiB/s.</td>
</tr>
<tr>
    <td><CopyableCode code="OriginalVolumeType" /></td>
    <td><code>string</code></td>
    <td>The original EBS volume type of the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="Progress" /></td>
    <td><code>integer</code></td>
    <td>The modification progress, from 0 to 100 percent complete.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string</code></td>
    <td>The modification start time.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A status message about the modification progress or failure.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetIops" /></td>
    <td><code>integer</code></td>
    <td>The target IOPS rate of the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetMultiAttachEnabled" /></td>
    <td><code>boolean</code></td>
    <td>The target setting for Amazon EBS Multi-Attach.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetSize" /></td>
    <td><code>integer</code></td>
    <td>The target size of the volume, in GiB.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetThroughput" /></td>
    <td><code>integer</code></td>
    <td>The target throughput of the volume, in MiB/s.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetVolumeType" /></td>
    <td><code>string</code></td>
    <td>The target EBS volume type of the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the volume.</td>
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
    <td><a href="#describe_volumes_modifications"><CopyableCode code="describe_volumes_modifications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-VolumeId"><code>VolumeId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes the most recent volume modification request for the specified EBS volumes. For more information, see Monitor the progress of volume modifications in the Amazon EBS User Guide.</td>
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
    <td>The filters. modification-state - The current modification state (modifying | optimizing | completed | failed). original-iops - The original IOPS rate of the volume. original-size - The original size of the volume, in GiB. original-volume-type - The original volume type of the volume (standard | io1 | io2 | gp2 | sc1 | st1). originalMultiAttachEnabled - Indicates whether Multi-Attach support was enabled (true | false). start-time - The modification start time. target-iops - The target IOPS rate of the volume. target-size - The target size of the volume, in GiB. target-volume-type - The target volume type of the volume (standard | io1 | io2 | gp2 | sc1 | st1). targetMultiAttachEnabled - Indicates whether Multi-Attach support is to be enabled (true | false). volume-id - The ID of the volume.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results (up to a limit of 500) to be returned in a paginated request. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-VolumeId">
    <td><CopyableCode code="VolumeId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the volumes.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_volumes_modifications"
    values={[
        { label: 'describe_volumes_modifications', value: 'describe_volumes_modifications' }
    ]}
>
<TabItem value="describe_volumes_modifications">

Describes the most recent volume modification request for the specified EBS volumes. For more information, see Monitor the progress of volume modifications in the Amazon EBS User Guide.

```sql
SELECT
EndTime,
ModificationState,
OriginalIops,
OriginalMultiAttachEnabled,
OriginalSize,
OriginalThroughput,
OriginalVolumeType,
Progress,
StartTime,
StatusMessage,
TargetIops,
TargetMultiAttachEnabled,
TargetSize,
TargetThroughput,
TargetVolumeType,
VolumeId
FROM aws.ec2.volumes_modifications
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND VolumeId = '{{ VolumeId }}'
AND Filter = '{{ Filter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
