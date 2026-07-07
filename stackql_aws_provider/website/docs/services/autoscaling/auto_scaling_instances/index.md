--- 
title: auto_scaling_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - auto_scaling_instances
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

Creates, updates, deletes, gets or lists an <code>auto_scaling_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auto_scaling_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.auto_scaling_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_auto_scaling_instances"
    values={[
        { label: 'describe_auto_scaling_instances', value: 'describe_auto_scaling_instances' }
    ]}
>
<TabItem value="describe_auto_scaling_instances">

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
    <td><CopyableCode code="AutoScalingGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the Auto Scaling group for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone ID where the instance is located.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthStatus" /></td>
    <td><code>string</code></td>
    <td>The last reported health status of this instance. Healthy means that the instance is healthy and should remain in service. Unhealthy means that the instance is unhealthy and Amazon EC2 Auto Scaling should terminate and replace it.</td>
</tr>
<tr>
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Machine Image (AMI) associated with the instance. This field shows the current AMI ID of the instance's root volume. It may differ from the original AMI used when the instance was first launched. This field appears for: Instances with root volume replacements through Instance Refresh Instances launched with AMI overrides This field won't appear for: Existing instances launched from Launch Templates without overrides Existing instances that didn’t have their root volume replaced through Instance Refresh</td>
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
    <td>The launch configuration used to launch the instance. This value is not available if you attached the instance to the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="LaunchTemplate" /></td>
    <td><code>string</code></td>
    <td>The launch template for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="LifecycleState" /></td>
    <td><code>string</code></td>
    <td>The lifecycle state for the instance. The Quarantined state is not used. For more information, see Amazon EC2 Auto Scaling instance lifecycle in the Amazon EC2 Auto Scaling User Guide. Valid values: Pending | Pending:Wait | Pending:Proceed | Quarantined | InService | Terminating | Terminating:Wait | Terminating:Proceed | Terminating:Retained | Terminated | Detaching | Detached | EnteringStandby | Standby | ReplacingRootVolume | ReplacingRootVolume:Wait | ReplacingRootVolume:Proceed | RootVolumeReplaced | Warmed:Pending | Warmed:Pending:Wait | Warmed:Pending:Proceed | Warmed:Pending:Retained | Warmed:Terminating | Warmed:Terminating:Wait | Warmed:Terminating:Proceed | Warmed:Terminating:Retained | Warmed:Terminated | Warmed:Stopped | Warmed:Running | Warmed:Hibernated</td>
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
    <td><a href="#describe_auto_scaling_instances"><CopyableCode code="describe_auto_scaling_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-InstanceIds"><code>InstanceIds</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Gets information about the Auto Scaling instances in the account and Region.</td>
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
<tr id="parameter-InstanceIds">
    <td><CopyableCode code="InstanceIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the instances. If you omit this property, all Auto Scaling instances are described. If you specify an ID that does not exist, it is ignored with no error. Array Members: Maximum number of 50 items.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return with this call. The default value is 50 and the maximum value is 50.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_auto_scaling_instances"
    values={[
        { label: 'describe_auto_scaling_instances', value: 'describe_auto_scaling_instances' }
    ]}
>
<TabItem value="describe_auto_scaling_instances">

Gets information about the Auto Scaling instances in the account and Region.

```sql
SELECT
AutoScalingGroupName,
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
FROM aws.autoscaling.auto_scaling_instances
WHERE region = '{{ region }}' -- required
AND InstanceIds = '{{ InstanceIds }}'
AND MaxRecords = '{{ MaxRecords }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
