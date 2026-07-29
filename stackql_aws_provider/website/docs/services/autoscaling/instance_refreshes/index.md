--- 
title: instance_refreshes
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_refreshes
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

Creates, updates, deletes, gets or lists an <code>instance_refreshes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_refreshes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.instance_refreshes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_refreshes"
    values={[
        { label: 'describe_instance_refreshes', value: 'describe_instance_refreshes' }
    ]}
>
<TabItem value="describe_instance_refreshes">

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
    <td><CopyableCode code="auto_scaling_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="desired_configuration" /></td>
    <td><code>string</code></td>
    <td>Describes the desired configuration for the instance refresh.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string</code></td>
    <td>The date and time at which the instance refresh ended.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_refresh_id" /></td>
    <td><code>string</code></td>
    <td>The instance refresh ID.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_to_update" /></td>
    <td><code>integer</code></td>
    <td>The number of instances remaining to update before the instance refresh is complete. If you roll back the instance refresh, InstancesToUpdate shows you the number of instances that were not yet updated by the instance refresh. Therefore, these instances don't need to be replaced as part of the rollback.</td>
</tr>
<tr>
    <td><CopyableCode code="percentage_complete" /></td>
    <td><code>integer</code></td>
    <td>The percentage of the instance refresh that is complete. For each instance replacement, Amazon EC2 Auto Scaling tracks the instance's health status and warm-up time. When the instance's health status changes to healthy and the specified warm-up time passes, the instance is considered updated and is added to the percentage complete. PercentageComplete does not include instances that are replaced during a rollback. This value gradually goes back down to zero during a rollback.</td>
</tr>
<tr>
    <td><CopyableCode code="preferences" /></td>
    <td><code>string</code></td>
    <td>The preferences for an instance refresh.</td>
</tr>
<tr>
    <td><CopyableCode code="progress_details" /></td>
    <td><code>string</code></td>
    <td>Additional progress details for an Auto Scaling group that has a warm pool.</td>
</tr>
<tr>
    <td><CopyableCode code="rollback_details" /></td>
    <td><code>string</code></td>
    <td>The rollback details.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string</code></td>
    <td>The date and time at which the instance refresh began.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status for the instance refresh operation: Pending - The request was created, but the instance refresh has not started. InProgress - An instance refresh is in progress. Successful - An instance refresh completed successfully. Failed - An instance refresh failed to complete. You can troubleshoot using the status reason and the scaling activities. Cancelling - An ongoing instance refresh is being cancelled. Cancelled - The instance refresh is cancelled. RollbackInProgress - An instance refresh is being rolled back. RollbackFailed - The rollback failed to complete. You can troubleshoot using the status reason and the scaling activities. RollbackSuccessful - The rollback completed successfully. Baking - Waiting the specified bake time after an instance refresh has finished updating instances.</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The explanation for the specific status assigned to this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="strategy" /></td>
    <td><code>string</code></td>
    <td>The strategy to use for the instance refresh. This determines how instances in the Auto Scaling group are updated. Default is Rolling. Rolling – Terminates instances and launches replacements in batches ReplaceRootVolume – Updates instances by replacing only the root volume without terminating the instance</td>
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
    <td><a href="#describe_instance_refreshes"><CopyableCode code="describe_instance_refreshes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-InstanceRefreshIds"><code>InstanceRefreshIds</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Gets information about the instance refreshes for the specified Auto Scaling group from the previous six weeks. This operation is part of the instance refresh feature in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes. To help you determine the status of an instance refresh, Amazon EC2 Auto Scaling returns information about the instance refreshes you previously initiated, including their status, start time, end time, the percentage of the instance refresh that is complete, and the number of instances remaining to update before the instance refresh is complete. If a rollback is initiated while an instance refresh is in progress, Amazon EC2 Auto Scaling also returns information about the rollback of the instance refresh.</td>
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
<tr id="parameter-InstanceRefreshIds">
    <td><CopyableCode code="InstanceRefreshIds" /></td>
    <td><code>array</code></td>
    <td>One or more instance refresh IDs.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return with this call. The default value is 50 and the maximum value is 100.</td>
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
    defaultValue="describe_instance_refreshes"
    values={[
        { label: 'describe_instance_refreshes', value: 'describe_instance_refreshes' }
    ]}
>
<TabItem value="describe_instance_refreshes">

Gets information about the instance refreshes for the specified Auto Scaling group from the previous six weeks. This operation is part of the instance refresh feature in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes. To help you determine the status of an instance refresh, Amazon EC2 Auto Scaling returns information about the instance refreshes you previously initiated, including their status, start time, end time, the percentage of the instance refresh that is complete, and the number of instances remaining to update before the instance refresh is complete. If a rollback is initiated while an instance refresh is in progress, Amazon EC2 Auto Scaling also returns information about the rollback of the instance refresh.

```sql
SELECT
auto_scaling_group_name,
desired_configuration,
end_time,
instance_refresh_id,
instances_to_update,
percentage_complete,
preferences,
progress_details,
rollback_details,
start_time,
status,
status_reason,
strategy
FROM aws.autoscaling.instance_refreshes
WHERE AutoScalingGroupName = '{{ AutoScalingGroupName }}' -- required
AND region = '{{ region }}' -- required
AND InstanceRefreshIds = '{{ InstanceRefreshIds }}'
AND NextToken = '{{ NextToken }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>
