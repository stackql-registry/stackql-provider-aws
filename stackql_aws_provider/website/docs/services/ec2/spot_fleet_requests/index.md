--- 
title: spot_fleet_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - spot_fleet_requests
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

Creates, updates, deletes, gets or lists a <code>spot_fleet_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spot_fleet_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.spot_fleet_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_spot_fleet_requests"
    values={[
        { label: 'describe_spot_fleet_requests', value: 'describe_spot_fleet_requests' }
    ]}
>
<TabItem value="describe_spot_fleet_requests">

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
    <td><CopyableCode code="ActivityStatus" /></td>
    <td><code>string</code></td>
    <td>The progress of the Spot Fleet request. If there is an error, the status is error. After all requests are placed, the status is pending_fulfillment. If the size of the fleet is equal to or greater than its target capacity, the status is fulfilled. If the size of the fleet is decreased, the status is pending_termination while Spot Instances are terminating.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string</code></td>
    <td>The creation date and time of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="SpotFleetRequestConfig" /></td>
    <td><code>string</code></td>
    <td>The configuration of the Spot Fleet request.</td>
</tr>
<tr>
    <td><CopyableCode code="SpotFleetRequestId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Spot Fleet request.</td>
</tr>
<tr>
    <td><CopyableCode code="SpotFleetRequestState" /></td>
    <td><code>string</code></td>
    <td>The state of the Spot Fleet request.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags for a Spot Fleet resource.</td>
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
    <td><a href="#describe_spot_fleet_requests"><CopyableCode code="describe_spot_fleet_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-SpotFleetRequestId"><code>SpotFleetRequestId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes your Spot Fleet requests. Spot Fleet requests are deleted 48 hours after they are canceled and their instances are terminated.</td>
</tr>
<tr>
    <td><a href="#modify_spot_fleet_request"><CopyableCode code="modify_spot_fleet_request" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-SpotFleetRequestId"><code>SpotFleetRequestId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LaunchTemplateConfig"><code>LaunchTemplateConfig</code></a>, <a href="#parameter-OnDemandTargetCapacity"><code>OnDemandTargetCapacity</code></a>, <a href="#parameter-Context"><code>Context</code></a>, <a href="#parameter-TargetCapacity"><code>TargetCapacity</code></a>, <a href="#parameter-ExcessCapacityTerminationPolicy"><code>ExcessCapacityTerminationPolicy</code></a></td>
    <td>Modifies the specified Spot Fleet request. You can only modify a Spot Fleet request of type maintain. While the Spot Fleet request is being modified, it is in the modifying state. To scale up your Spot Fleet, increase its target capacity. The Spot Fleet launches the additional Spot Instances according to the allocation strategy for the Spot Fleet request. If the allocation strategy is lowestPrice, the Spot Fleet launches instances using the Spot Instance pool with the lowest price. If the allocation strategy is diversified, the Spot Fleet distributes the instances across the Spot Instance pools. If the allocation strategy is capacityOptimized, Spot Fleet launches instances from Spot Instance pools with optimal capacity for the number of instances that are launching. To scale down your Spot Fleet, decrease its target capacity. First, the Spot Fleet cancels any open requests that exceed the new target capacity. You can request that the Spot Fleet terminate Spot Instances until the size of the fleet no longer exceeds the new target capacity. If the allocation strategy is lowestPrice, the Spot Fleet terminates the instances with the highest price per unit. If the allocation strategy is capacityOptimized, the Spot Fleet terminates the instances in the Spot Instance pools that have the least available Spot Instance capacity. If the allocation strategy is diversified, the Spot Fleet terminates instances across the Spot Instance pools. Alternatively, you can request that the Spot Fleet keep the fleet at its current size, but not replace any Spot Instances that are interrupted or that you terminate manually. If you are finished with your Spot Fleet for now, but will use it again later, you can set the target capacity to 0.</td>
</tr>
<tr>
    <td><a href="#cancel_spot_fleet_requests"><CopyableCode code="cancel_spot_fleet_requests" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SpotFleetRequestId"><code>SpotFleetRequestId</code></a>, <a href="#parameter-TerminateInstances"><code>TerminateInstances</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Cancels the specified Spot Fleet requests. After you cancel a Spot Fleet request, the Spot Fleet launches no new instances. You must also specify whether a canceled Spot Fleet request should terminate its instances. If you choose to terminate the instances, the Spot Fleet request enters the cancelled_terminating state. Otherwise, the Spot Fleet request enters the cancelled_running state and the instances continue to run until they are interrupted or you terminate them manually. Terminating an instance is permanent and irreversible. After you terminate an instance, you can no longer connect to it, and it can't be recovered. All attached Amazon EBS volumes that are configured to be deleted on termination are also permanently deleted and can't be recovered. All data stored on instance store volumes is permanently lost. For more information, see How instance termination works. Before you terminate an instance, ensure that you have backed up all data that you need to retain after the termination to persistent storage. Restrictions You can delete up to 100 fleets in a single request. If you exceed the specified number, no fleets are deleted.</td>
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
<tr id="parameter-SpotFleetRequestId">
    <td><CopyableCode code="SpotFleetRequestId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Spot Fleet requests. Constraint: You can specify up to 100 IDs in a single request.</td>
</tr>
<tr id="parameter-TerminateInstances">
    <td><CopyableCode code="TerminateInstances" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to terminate the associated instances when the Spot Fleet request is canceled. The default is to terminate the instances. To let the instances continue to run after the Spot Fleet request is canceled, specify no-terminate-instances.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Context">
    <td><CopyableCode code="Context" /></td>
    <td><code>string</code></td>
    <td>Reserved.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-ExcessCapacityTerminationPolicy">
    <td><CopyableCode code="ExcessCapacityTerminationPolicy" /></td>
    <td><code>string</code></td>
    <td>Indicates whether running instances should be terminated if the target capacity of the Spot Fleet request is decreased below the current size of the Spot Fleet. Supported only for fleets of type maintain.</td>
</tr>
<tr id="parameter-LaunchTemplateConfig">
    <td><CopyableCode code="LaunchTemplateConfig" /></td>
    <td><code>array</code></td>
    <td>The launch template and overrides. You can only use this parameter if you specified a launch template (LaunchTemplateConfigs) in your Spot Fleet request. If you specified LaunchSpecifications in your Spot Fleet request, then omit this parameter.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to include in another request to get the next page of items. This value is null when there are no more items to return.</td>
</tr>
<tr id="parameter-OnDemandTargetCapacity">
    <td><CopyableCode code="OnDemandTargetCapacity" /></td>
    <td><code>integer</code></td>
    <td>The number of On-Demand Instances in the fleet.</td>
</tr>
<tr id="parameter-SpotFleetRequestId">
    <td><CopyableCode code="SpotFleetRequestId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Spot Fleet requests.</td>
</tr>
<tr id="parameter-TargetCapacity">
    <td><CopyableCode code="TargetCapacity" /></td>
    <td><code>integer</code></td>
    <td>The size of the fleet.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_spot_fleet_requests"
    values={[
        { label: 'describe_spot_fleet_requests', value: 'describe_spot_fleet_requests' }
    ]}
>
<TabItem value="describe_spot_fleet_requests">

Describes your Spot Fleet requests. Spot Fleet requests are deleted 48 hours after they are canceled and their instances are terminated.

```sql
SELECT
ActivityStatus,
CreateTime,
SpotFleetRequestConfig,
SpotFleetRequestId,
SpotFleetRequestState,
Tags
FROM aws.ec2.spot_fleet_requests
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND SpotFleetRequestId = '{{ SpotFleetRequestId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_spot_fleet_request"
    values={[
        { label: 'modify_spot_fleet_request', value: 'modify_spot_fleet_request' }
    ]}
>
<TabItem value="modify_spot_fleet_request">

Modifies the specified Spot Fleet request. You can only modify a Spot Fleet request of type maintain. While the Spot Fleet request is being modified, it is in the modifying state. To scale up your Spot Fleet, increase its target capacity. The Spot Fleet launches the additional Spot Instances according to the allocation strategy for the Spot Fleet request. If the allocation strategy is lowestPrice, the Spot Fleet launches instances using the Spot Instance pool with the lowest price. If the allocation strategy is diversified, the Spot Fleet distributes the instances across the Spot Instance pools. If the allocation strategy is capacityOptimized, Spot Fleet launches instances from Spot Instance pools with optimal capacity for the number of instances that are launching. To scale down your Spot Fleet, decrease its target capacity. First, the Spot Fleet cancels any open requests that exceed the new target capacity. You can request that the Spot Fleet terminate Spot Instances until the size of the fleet no longer exceeds the new target capacity. If the allocation strategy is lowestPrice, the Spot Fleet terminates the instances with the highest price per unit. If the allocation strategy is capacityOptimized, the Spot Fleet terminates the instances in the Spot Instance pools that have the least available Spot Instance capacity. If the allocation strategy is diversified, the Spot Fleet terminates instances across the Spot Instance pools. Alternatively, you can request that the Spot Fleet keep the fleet at its current size, but not replace any Spot Instances that are interrupted or that you terminate manually. If you are finished with your Spot Fleet for now, but will use it again later, you can set the target capacity to 0.

```sql
UPDATE aws.ec2.spot_fleet_requests
SET 
-- No updatable properties
WHERE 
SpotFleetRequestId = '{{ SpotFleetRequestId }}' --required
AND region = '{{ region }}' --required
AND LaunchTemplateConfig = '{{ LaunchTemplateConfig}}'
AND OnDemandTargetCapacity = '{{ OnDemandTargetCapacity}}'
AND Context = '{{ Context}}'
AND TargetCapacity = '{{ TargetCapacity}}'
AND ExcessCapacityTerminationPolicy = '{{ ExcessCapacityTerminationPolicy}}'
RETURNING
Return;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_spot_fleet_requests"
    values={[
        { label: 'cancel_spot_fleet_requests', value: 'cancel_spot_fleet_requests' }
    ]}
>
<TabItem value="cancel_spot_fleet_requests">

Cancels the specified Spot Fleet requests. After you cancel a Spot Fleet request, the Spot Fleet launches no new instances. You must also specify whether a canceled Spot Fleet request should terminate its instances. If you choose to terminate the instances, the Spot Fleet request enters the cancelled_terminating state. Otherwise, the Spot Fleet request enters the cancelled_running state and the instances continue to run until they are interrupted or you terminate them manually. Terminating an instance is permanent and irreversible. After you terminate an instance, you can no longer connect to it, and it can't be recovered. All attached Amazon EBS volumes that are configured to be deleted on termination are also permanently deleted and can't be recovered. All data stored on instance store volumes is permanently lost. For more information, see How instance termination works. Before you terminate an instance, ensure that you have backed up all data that you need to retain after the termination to persistent storage. Restrictions You can delete up to 100 fleets in a single request. If you exceed the specified number, no fleets are deleted.

```sql
EXEC aws.ec2.spot_fleet_requests.cancel_spot_fleet_requests 
@SpotFleetRequestId='{{ SpotFleetRequestId }}' --required, 
@TerminateInstances='{{ TerminateInstances }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
