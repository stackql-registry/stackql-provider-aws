--- 
title: spot_instance_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - spot_instance_requests
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

Creates, updates, deletes, gets or lists a <code>spot_instance_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spot_instance_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.spot_instance_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_spot_instance_requests"
    values={[
        { label: 'describe_spot_instance_requests', value: 'describe_spot_instance_requests' }
    ]}
>
<TabItem value="describe_spot_instance_requests">

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
    <td><CopyableCode code="actual_block_hourly_price" /></td>
    <td><code>string</code></td>
    <td>Deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_group" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone group. If you specify the same Availability Zone group for all Spot Instance requests, all Spot Instances are launched in the same Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="block_duration_minutes" /></td>
    <td><code>integer</code></td>
    <td>Deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string</code></td>
    <td>The date and time when the Spot Instance request was created, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ).</td>
</tr>
<tr>
    <td><CopyableCode code="fault" /></td>
    <td><code>string</code></td>
    <td>The fault codes for the Spot Instance request, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The instance ID, if an instance has been launched to fulfill the Spot Instance request.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_interruption_behavior" /></td>
    <td><code>string</code></td>
    <td>The behavior when a Spot Instance is interrupted.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_group" /></td>
    <td><code>string</code></td>
    <td>The instance launch group. Launch groups are Spot Instances that launch together and terminate together.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_specification" /></td>
    <td><code>string</code></td>
    <td>Additional information for launching instances.</td>
</tr>
<tr>
    <td><CopyableCode code="launched_availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone in which the request is launched. Either launchedAvailabilityZone or launchedAvailabilityZoneId can be specified, but not both</td>
</tr>
<tr>
    <td><CopyableCode code="launched_availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone in which the request is launched. Either launchedAvailabilityZone or launchedAvailabilityZoneId can be specified, but not both</td>
</tr>
<tr>
    <td><CopyableCode code="product_description" /></td>
    <td><code>string</code></td>
    <td>The product description associated with the Spot Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="spot_instance_request_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Spot Instance request.</td>
</tr>
<tr>
    <td><CopyableCode code="spot_price" /></td>
    <td><code>string</code></td>
    <td>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price. If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Spot Instance request. Spot request status information helps track your Spot Instance requests. For more information, see Spot request status in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status code and status message describing the Spot Instance request.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The Spot Instance request type.</td>
</tr>
<tr>
    <td><CopyableCode code="valid_from" /></td>
    <td><code>string</code></td>
    <td>The start date of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). The request becomes active at this date and time.</td>
</tr>
<tr>
    <td><CopyableCode code="valid_until" /></td>
    <td><code>string</code></td>
    <td>The end date of the request, in UTC format (YYYY-MM-DDTHH:MM:SSZ). For a persistent request, the request remains active until the validUntil date and time is reached. Otherwise, the request remains active until you cancel it. For a one-time request, the request remains active until all instances launch, the request is canceled, or the validUntil date and time is reached. By default, the request is valid for 7 days from the date the request was created.</td>
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
    <td><a href="#describe_spot_instance_requests"><CopyableCode code="describe_spot_instance_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-SpotInstanceRequestId"><code>SpotInstanceRequestId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes the specified Spot Instance requests. You can use DescribeSpotInstanceRequests to find a running Spot Instance by examining the response. If the status of the Spot Instance is fulfilled, the instance ID appears in the response and contains the identifier of the instance. Alternatively, you can use DescribeInstances with a filter to look for instances where the instance lifecycle is spot. We recommend that you set MaxResults to a value between 5 and 1000 to limit the number of items returned. This paginates the output, which makes the list more manageable and returns the items faster. If the list of items exceeds your MaxResults value, then that number of items is returned along with a NextToken value that can be passed to a subsequent DescribeSpotInstanceRequests request to retrieve the remaining items. Spot Instance requests are deleted four hours after they are canceled and their instances are terminated.</td>
</tr>
<tr>
    <td><a href="#cancel_spot_instance_requests"><CopyableCode code="cancel_spot_instance_requests" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SpotInstanceRequestId"><code>SpotInstanceRequestId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Cancels one or more Spot Instance requests. Canceling a Spot Instance request does not terminate running Spot Instances associated with the request.</td>
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
<tr id="parameter-SpotInstanceRequestId">
    <td><CopyableCode code="SpotInstanceRequestId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Spot Instance requests.</td>
</tr>
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
    <td>The filters. availability-zone-group - The Availability Zone group. create-time - The time stamp when the Spot Instance request was created. fault-code - The fault code related to the request. fault-message - The fault message related to the request. instance-id - The ID of the instance that fulfilled the request. launch-group - The Spot Instance launch group. launch.block-device-mapping.delete-on-termination - Indicates whether the EBS volume is deleted on instance termination. launch.block-device-mapping.device-name - The device name for the volume in the block device mapping (for example, /dev/sdh or xvdh). launch.block-device-mapping.snapshot-id - The ID of the snapshot for the EBS volume. launch.block-device-mapping.volume-size - The size of the EBS volume, in GiB. launch.block-device-mapping.volume-type - The type of EBS volume: gp2 or gp3 for General Purpose SSD, io1 or io2 for Provisioned IOPS SSD, st1 for Throughput Optimized HDD, sc1 for Cold HDD, or standard for Magnetic. launch.group-id - The ID of the security group for the instance. launch.group-name - The name of the security group for the instance. launch.image-id - The ID of the AMI. launch.instance-type - The type of instance (for example, m3.medium). launch.kernel-id - The kernel ID. launch.key-name - The name of the key pair the instance launched with. launch.monitoring-enabled - Whether detailed monitoring is enabled for the Spot Instance. launch.ramdisk-id - The RAM disk ID. launched-availability-zone - The Availability Zone in which the request is launched. launched-availability-zone-id - The ID of the Availability Zone in which the request is launched. network-interface.addresses.primary - Indicates whether the IP address is the primary private IP address. network-interface.delete-on-termination - Indicates whether the network interface is deleted when the instance is terminated. network-interface.description - A description of the network interface. network-interface.device-index - The index of the device for the network interface attachment on the instance. network-interface.group-id - The ID of the security group associated with the network interface. network-interface.network-interface-id - The ID of the network interface. network-interface.private-ip-address - The primary private IP address of the network interface. network-interface.subnet-id - The ID of the subnet for the instance. product-description - The product description associated with the instance (Linux/UNIX | Windows). spot-instance-request-id - The Spot Instance request ID. spot-price - The maximum hourly price for any Spot Instance launched to fulfill the request. state - The state of the Spot Instance request (open | active | closed | cancelled | failed). Spot request status information can help you track your Amazon EC2 Spot Instance requests. For more information, see Spot request status in the Amazon EC2 User Guide. status-code - The short code describing the most recent evaluation of your Spot Instance request. status-message - The message explaining the status of the Spot Instance request. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. type - The type of Spot Instance request (one-time | persistent). valid-from - The start date of the request. valid-until - The end date of the request.</td>
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
<tr id="parameter-SpotInstanceRequestId">
    <td><CopyableCode code="SpotInstanceRequestId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Spot Instance requests.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_spot_instance_requests"
    values={[
        { label: 'describe_spot_instance_requests', value: 'describe_spot_instance_requests' }
    ]}
>
<TabItem value="describe_spot_instance_requests">

Describes the specified Spot Instance requests. You can use DescribeSpotInstanceRequests to find a running Spot Instance by examining the response. If the status of the Spot Instance is fulfilled, the instance ID appears in the response and contains the identifier of the instance. Alternatively, you can use DescribeInstances with a filter to look for instances where the instance lifecycle is spot. We recommend that you set MaxResults to a value between 5 and 1000 to limit the number of items returned. This paginates the output, which makes the list more manageable and returns the items faster. If the list of items exceeds your MaxResults value, then that number of items is returned along with a NextToken value that can be passed to a subsequent DescribeSpotInstanceRequests request to retrieve the remaining items. Spot Instance requests are deleted four hours after they are canceled and their instances are terminated.

```sql
SELECT
actual_block_hourly_price,
availability_zone_group,
block_duration_minutes,
create_time,
fault,
instance_id,
instance_interruption_behavior,
launch_group,
launch_specification,
launched_availability_zone,
launched_availability_zone_id,
product_description,
spot_instance_request_id,
spot_price,
state,
status,
tags,
type,
valid_from,
valid_until
FROM aws.ec2.spot_instance_requests
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
AND SpotInstanceRequestId = '{{ SpotInstanceRequestId }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_spot_instance_requests"
    values={[
        { label: 'cancel_spot_instance_requests', value: 'cancel_spot_instance_requests' }
    ]}
>
<TabItem value="cancel_spot_instance_requests">

Cancels one or more Spot Instance requests. Canceling a Spot Instance request does not terminate running Spot Instances associated with the request.

```sql
EXEC aws.ec2.spot_instance_requests.cancel_spot_instance_requests 
@SpotInstanceRequestId='{{ SpotInstanceRequestId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
