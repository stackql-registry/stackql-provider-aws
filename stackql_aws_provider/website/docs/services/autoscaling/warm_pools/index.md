--- 
title: warm_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - warm_pools
  - autoscaling
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

Creates, updates, deletes, gets or lists a <code>warm_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="warm_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.warm_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_warm_pool"
    values={[
        { label: 'describe_warm_pool', value: 'describe_warm_pool' }
    ]}
>
<TabItem value="describe_warm_pool">

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
    <td>The Availability Zone in which the instance is running.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone ID where the instance was launched.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthStatus" /></td>
    <td><code>string</code></td>
    <td>The last reported health status of the instance. Healthy means that the instance is healthy and should remain in service. Unhealthy means that the instance is unhealthy and that Amazon EC2 Auto Scaling should terminate and replace it.</td>
</tr>
<tr>
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Machine Image (AMI) used for the instance's current root volume. This value reflects the most recent AMI applied to the instance, including updates made through root volume replacement operations. This field appears for: Instances with root volume replacements through Instance Refresh Instances launched with AMI overrides This field won't appear for: Existing instances launched from Launch Templates without overrides Existing instances that didn’t have their root volume replaced through Instance Refresh</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The instance type of the EC2 instance.</td>
</tr>
<tr>
    <td><CopyableCode code="LaunchConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The launch configuration associated with the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="LaunchTemplate" /></td>
    <td><code>string</code></td>
    <td>The launch template for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="LifecycleState" /></td>
    <td><code>string</code></td>
    <td>A description of the current lifecycle state. The Quarantined state is not used. For more information, see Amazon EC2 Auto Scaling instance lifecycle in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ProtectedFromScaleIn" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in.</td>
</tr>
<tr>
    <td><CopyableCode code="WeightedCapacity" /></td>
    <td><code>string</code></td>
    <td>The number of capacity units contributed by the instance based on its instance type. Valid Range: Minimum value of 1. Maximum value of 999.</td>
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
    <td><a href="#describe_warm_pool"><CopyableCode code="describe_warm_pool" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Gets information about a warm pool and its instances. For more information, see Warm pools for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#put_warm_pool"><CopyableCode code="put_warm_pool" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxGroupPreparedCapacity"><code>MaxGroupPreparedCapacity</code></a>, <a href="#parameter-MinSize"><code>MinSize</code></a>, <a href="#parameter-PoolState"><code>PoolState</code></a>, <a href="#parameter-InstanceReusePolicy"><code>InstanceReusePolicy</code></a></td>
    <td>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. This operation must be called from the Region in which the Auto Scaling group was created. You can view the instances in the warm pool using the DescribeWarmPool API call. If you are no longer using a warm pool, you can delete it by calling the DeleteWarmPool API. For more information, see Warm pools for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_warm_pool"><CopyableCode code="delete_warm_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ForceDelete"><code>ForceDelete</code></a></td>
    <td>Deletes the warm pool for the specified Auto Scaling group. For more information, see Warm pools for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.</td>
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
<tr id="parameter-AutoScalingGroupName">
    <td><CopyableCode code="AutoScalingGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the Auto Scaling group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ForceDelete">
    <td><CopyableCode code="ForceDelete" /></td>
    <td><code>boolean</code></td>
    <td>Specifies that the warm pool is to be deleted along with all of its associated instances, without waiting for all instances to be terminated. This parameter also deletes any outstanding lifecycle actions associated with the warm pool instances.</td>
</tr>
<tr id="parameter-InstanceReusePolicy">
    <td><CopyableCode code="InstanceReusePolicy" /></td>
    <td><code>object</code></td>
    <td>Indicates whether instances in the Auto Scaling group can be returned to the warm pool on scale in. The default is to terminate instances in the Auto Scaling group when the group scales in.</td>
</tr>
<tr id="parameter-MaxGroupPreparedCapacity">
    <td><CopyableCode code="MaxGroupPreparedCapacity" /></td>
    <td><code>integer</code></td>
    <td>Specifies the maximum number of instances that are allowed to be in the warm pool or in any state except Terminated for the Auto Scaling group. This is an optional property. Specify it only if you do not want the warm pool size to be determined by the difference between the group's maximum capacity and its desired capacity. If a value for MaxGroupPreparedCapacity is not specified, Amazon EC2 Auto Scaling launches and maintains the difference between the group's maximum capacity and its desired capacity. If you specify a value for MaxGroupPreparedCapacity, Amazon EC2 Auto Scaling uses the difference between the MaxGroupPreparedCapacity and the desired capacity instead. The size of the warm pool is dynamic. Only when MaxGroupPreparedCapacity and MinSize are set to the same value does the warm pool have an absolute size. If the desired capacity of the Auto Scaling group is higher than the MaxGroupPreparedCapacity, the capacity of the warm pool is 0, unless you specify a value for MinSize. To remove a value that you previously set, include the property but specify -1 for the value.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of instances to return with this call. The maximum value is 50.</td>
</tr>
<tr id="parameter-MinSize">
    <td><CopyableCode code="MinSize" /></td>
    <td><code>integer</code></td>
    <td>Specifies the minimum number of instances to maintain in the warm pool. This helps you to ensure that there is always a certain number of warmed instances available to handle traffic spikes. Defaults to 0 if not specified.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of instances to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-PoolState">
    <td><CopyableCode code="PoolState" /></td>
    <td><code>string</code></td>
    <td>Sets the instance state to transition to after the lifecycle actions are complete. Default is Stopped.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_warm_pool"
    values={[
        { label: 'describe_warm_pool', value: 'describe_warm_pool' }
    ]}
>
<TabItem value="describe_warm_pool">

Gets information about a warm pool and its instances. For more information, see Warm pools for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.

```sql
SELECT
AvailabilityZone,
AvailabilityZoneId,
HealthStatus,
ImageId,
InstanceId,
InstanceType,
LaunchConfigurationName,
LaunchTemplate,
LifecycleState,
ProtectedFromScaleIn,
WeightedCapacity
FROM aws.autoscaling.warm_pools
WHERE AutoScalingGroupName = '{{ AutoScalingGroupName }}' -- required
AND region = '{{ region }}' -- required
AND MaxRecords = '{{ MaxRecords }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_warm_pool"
    values={[
        { label: 'put_warm_pool', value: 'put_warm_pool' }
    ]}
>
<TabItem value="put_warm_pool">

Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. This operation must be called from the Region in which the Auto Scaling group was created. You can view the instances in the warm pool using the DescribeWarmPool API call. If you are no longer using a warm pool, you can delete it by calling the DeleteWarmPool API. For more information, see Warm pools for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.

```sql
REPLACE aws.autoscaling.warm_pools
SET 
-- No updatable properties
WHERE 
AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND region = '{{ region }}' --required
AND MaxGroupPreparedCapacity = '{{ MaxGroupPreparedCapacity}}'
AND MinSize = '{{ MinSize}}'
AND PoolState = '{{ PoolState}}'
AND InstanceReusePolicy = '{{ InstanceReusePolicy}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_warm_pool"
    values={[
        { label: 'delete_warm_pool', value: 'delete_warm_pool' }
    ]}
>
<TabItem value="delete_warm_pool">

Deletes the warm pool for the specified Auto Scaling group. For more information, see Warm pools for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.

```sql
DELETE FROM aws.autoscaling.warm_pools
WHERE AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND region = '{{ region }}' --required
AND ForceDelete = '{{ ForceDelete }}'
;
```
</TabItem>
</Tabs>
