--- 
title: volume_status
hide_title: false
hide_table_of_contents: false
keywords:
  - volume_status
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

Creates, updates, deletes, gets or lists a <code>volume_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="volume_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.volume_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_volume_status"
    values={[
        { label: 'describe_volume_status', value: 'describe_volume_status' }
    ]}
>
<TabItem value="describe_volume_status">

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
    <td><CopyableCode code="Actions" /></td>
    <td><code>string</code></td>
    <td>The details of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="AttachmentStatuses" /></td>
    <td><code>string</code></td>
    <td>Information about the instances to which the volume is attached.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone of the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="Events" /></td>
    <td><code>string</code></td>
    <td>A list of events associated with the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="InitializationStatusDetails" /></td>
    <td><code>string</code></td>
    <td>Information about the volume initialization. It can take up to 5 minutes for the volume initialization information to be updated. Only available for volumes created from snapshots. Not available for empty volumes created without a snapshot. For more information, see Initialize Amazon EBS volumes.</td>
</tr>
<tr>
    <td><CopyableCode code="Operator" /></td>
    <td><code>string</code></td>
    <td>The service provider that manages the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="OutpostArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Outpost.</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeId" /></td>
    <td><code>string</code></td>
    <td>The volume ID.</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeStatus" /></td>
    <td><code>string</code></td>
    <td>The volume status.</td>
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
    <td><a href="#describe_volume_status"><CopyableCode code="describe_volume_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-VolumeId"><code>VolumeId</code></a>, <a href="#parameter-IncludeManagedResources"><code>IncludeManagedResources</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes the status of the specified volumes. Volume status provides the result of the checks performed on your volumes to determine events that can impair the performance of your volumes. The performance of a volume can be affected if an issue occurs on the volume's underlying host. If the volume's underlying host experiences a power outage or system issue, after the system is restored, there could be data inconsistencies on the volume. Volume events notify you if this occurs. Volume actions notify you if any action needs to be taken in response to the event. The DescribeVolumeStatus operation provides the following information about the specified volumes: Status: Reflects the current status of the volume. The possible values are ok, impaired , warning, or insufficient-data. If all checks pass, the overall status of the volume is ok. If the check fails, the overall status is impaired. If the status is insufficient-data, then the checks might still be taking place on your volume at the time. We recommend that you retry the request. For more information about volume status, see Monitor the status of your volumes in the Amazon EBS User Guide. Events: Reflect the cause of a volume status and might require you to take action. For example, if your volume returns an impaired status, then the volume event might be potential-data-inconsistency. This means that your volume has been affected by an issue with the underlying host, has all I/O operations disabled, and might have inconsistent data. Actions: Reflect the actions you might have to take in response to an event. For example, if the status of the volume is impaired and the volume event shows potential-data-inconsistency, then the action shows enable-volume-io. This means that you may want to enable the I/O operations for the volume and then check the volume for data consistency. For more information, see Work with an impaired EBS volume. Volume status is based on the volume status checks, and does not reflect the volume state. Therefore, volume status does not indicate volumes in the error state (for example, when a volume is incapable of accepting I/O.) The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.</td>
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
    <td>The filters. action.code - The action code for the event (for example, enable-volume-io). action.description - A description of the action. action.event-id - The event ID associated with the action. availability-zone - The Availability Zone of the instance. event.description - A description of the event. event.event-id - The event ID. event.event-type - The event type (for io-enabled: passed | failed; for io-performance: io-performance:degraded | io-performance:severely-degraded | io-performance:stalled). event.not-after - The latest end time for the event. event.not-before - The earliest start time for the event. volume-status.details-name - The cause for volume-status.status (io-enabled | io-performance). volume-status.details-status - The status of volume-status.details-name (for io-enabled: passed | failed; for io-performance: normal | degraded | severely-degraded | stalled). volume-status.status - The status of the volume (ok | impaired | warning | insufficient-data).</td>
</tr>
<tr id="parameter-IncludeManagedResources">
    <td><CopyableCode code="IncludeManagedResources" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to include managed resources in the output. If this parameter is set to true, the output includes resources that are managed by Amazon Web Services services, even if managed resource visibility is set to hidden.</td>
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
<tr id="parameter-VolumeId">
    <td><CopyableCode code="VolumeId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the volumes. Default: Describes all your volumes.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_volume_status"
    values={[
        { label: 'describe_volume_status', value: 'describe_volume_status' }
    ]}
>
<TabItem value="describe_volume_status">

Describes the status of the specified volumes. Volume status provides the result of the checks performed on your volumes to determine events that can impair the performance of your volumes. The performance of a volume can be affected if an issue occurs on the volume's underlying host. If the volume's underlying host experiences a power outage or system issue, after the system is restored, there could be data inconsistencies on the volume. Volume events notify you if this occurs. Volume actions notify you if any action needs to be taken in response to the event. The DescribeVolumeStatus operation provides the following information about the specified volumes: Status: Reflects the current status of the volume. The possible values are ok, impaired , warning, or insufficient-data. If all checks pass, the overall status of the volume is ok. If the check fails, the overall status is impaired. If the status is insufficient-data, then the checks might still be taking place on your volume at the time. We recommend that you retry the request. For more information about volume status, see Monitor the status of your volumes in the Amazon EBS User Guide. Events: Reflect the cause of a volume status and might require you to take action. For example, if your volume returns an impaired status, then the volume event might be potential-data-inconsistency. This means that your volume has been affected by an issue with the underlying host, has all I/O operations disabled, and might have inconsistent data. Actions: Reflect the actions you might have to take in response to an event. For example, if the status of the volume is impaired and the volume event shows potential-data-inconsistency, then the action shows enable-volume-io. This means that you may want to enable the I/O operations for the volume and then check the volume for data consistency. For more information, see Work with an impaired EBS volume. Volume status is based on the volume status checks, and does not reflect the volume state. Therefore, volume status does not indicate volumes in the error state (for example, when a volume is incapable of accepting I/O.) The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.

```sql
SELECT
Actions,
AttachmentStatuses,
AvailabilityZone,
AvailabilityZoneId,
Events,
InitializationStatusDetails,
Operator,
OutpostArn,
VolumeId,
VolumeStatus
FROM aws.ec2.volume_status
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND VolumeId = '{{ VolumeId }}'
AND IncludeManagedResources = '{{ IncludeManagedResources }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>
