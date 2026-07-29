--- 
title: scheduled_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_instances
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

Creates, updates, deletes, gets or lists a <code>scheduled_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduled_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.scheduled_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scheduled_instances"
    values={[
        { label: 'describe_scheduled_instances', value: 'describe_scheduled_instances' }
    ]}
>
<TabItem value="describe_scheduled_instances">

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
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string</code></td>
    <td>The date when the Scheduled Instance was purchased.</td>
</tr>
<tr>
    <td><CopyableCode code="hourly_price" /></td>
    <td><code>string</code></td>
    <td>The hourly price for a single instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_count" /></td>
    <td><code>integer</code></td>
    <td>The number of instances.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="network_platform" /></td>
    <td><code>string</code></td>
    <td>The network platform.</td>
</tr>
<tr>
    <td><CopyableCode code="next_slot_start_time" /></td>
    <td><code>string</code></td>
    <td>The time for the next schedule to start.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The platform (Linux/UNIX or Windows).</td>
</tr>
<tr>
    <td><CopyableCode code="previous_slot_end_time" /></td>
    <td><code>string</code></td>
    <td>The time that the previous schedule ended or will end.</td>
</tr>
<tr>
    <td><CopyableCode code="recurrence" /></td>
    <td><code>string</code></td>
    <td>The schedule recurrence.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_instance_id" /></td>
    <td><code>string</code></td>
    <td>The Scheduled Instance ID.</td>
</tr>
<tr>
    <td><CopyableCode code="slot_duration_in_hours" /></td>
    <td><code>integer</code></td>
    <td>The number of hours in the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="term_end_date" /></td>
    <td><code>string</code></td>
    <td>The end date for the Scheduled Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="term_start_date" /></td>
    <td><code>string</code></td>
    <td>The start date for the Scheduled Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="total_scheduled_instance_hours" /></td>
    <td><code>integer</code></td>
    <td>The total number of hours for a single instance for the entire term.</td>
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
    <td><a href="#describe_scheduled_instances"><CopyableCode code="describe_scheduled_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-ScheduledInstanceId"><code>ScheduledInstanceId</code></a>, <a href="#parameter-SlotStartTimeRange"><code>SlotStartTimeRange</code></a></td>
    <td>Describes the specified Scheduled Instances or all your Scheduled Instances.</td>
</tr>
<tr>
    <td><a href="#purchase_scheduled_instances"><CopyableCode code="purchase_scheduled_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-PurchaseRequest"><code>PurchaseRequest</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>You can no longer purchase Scheduled Instances. Purchases the Scheduled Instances with the specified schedule. Scheduled Instances enable you to purchase Amazon EC2 compute capacity by the hour for a one-year term. Before you can purchase a Scheduled Instance, you must call DescribeScheduledInstanceAvailability to check for available schedules and obtain a purchase token. After you purchase a Scheduled Instance, you must call RunScheduledInstances during each scheduled time period. After you purchase a Scheduled Instance, you can't cancel, modify, or resell your purchase.</td>
</tr>
<tr>
    <td><a href="#run_scheduled_instances"><CopyableCode code="run_scheduled_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-LaunchSpecification"><code>LaunchSpecification</code></a>, <a href="#parameter-ScheduledInstanceId"><code>ScheduledInstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-InstanceCount"><code>InstanceCount</code></a></td>
    <td>Launches the specified Scheduled Instances. Before you can launch a Scheduled Instance, you must purchase it and obtain an identifier using PurchaseScheduledInstances. You must launch a Scheduled Instance during its scheduled time period. You can't stop or reboot a Scheduled Instance, but you can terminate it as needed. If you terminate a Scheduled Instance before the current scheduled time period ends, you can launch it again after a few minutes.</td>
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
<tr id="parameter-LaunchSpecification">
    <td><CopyableCode code="LaunchSpecification" /></td>
    <td><code>object</code></td>
    <td>The launch specification. You must match the instance type, Availability Zone, network, and platform of the schedule that you purchased.</td>
</tr>
<tr id="parameter-PurchaseRequest">
    <td><CopyableCode code="PurchaseRequest" /></td>
    <td><code>array</code></td>
    <td>The purchase requests.</td>
</tr>
<tr id="parameter-ScheduledInstanceId">
    <td><CopyableCode code="ScheduledInstanceId" /></td>
    <td><code>string</code></td>
    <td>The Scheduled Instance ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that ensures the idempotency of the request. For more information, see Ensuring Idempotency.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. availability-zone - The Availability Zone (for example, us-west-2a). instance-type - The instance type (for example, c4.large). platform - The platform (Linux/UNIX or Windows).</td>
</tr>
<tr id="parameter-InstanceCount">
    <td><CopyableCode code="InstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of instances. Default: 1</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. This value can be between 5 and 300. The default value is 100. To retrieve the remaining results, make another call with the returned NextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results.</td>
</tr>
<tr id="parameter-ScheduledInstanceId">
    <td><CopyableCode code="ScheduledInstanceId" /></td>
    <td><code>array</code></td>
    <td>The Scheduled Instance IDs.</td>
</tr>
<tr id="parameter-SlotStartTimeRange">
    <td><CopyableCode code="SlotStartTimeRange" /></td>
    <td><code>object</code></td>
    <td>The time period for the first schedule to start.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_scheduled_instances"
    values={[
        { label: 'describe_scheduled_instances', value: 'describe_scheduled_instances' }
    ]}
>
<TabItem value="describe_scheduled_instances">

Describes the specified Scheduled Instances or all your Scheduled Instances.

```sql
SELECT
availability_zone,
create_date,
hourly_price,
instance_count,
instance_type,
network_platform,
next_slot_start_time,
platform,
previous_slot_end_time,
recurrence,
scheduled_instance_id,
slot_duration_in_hours,
term_end_date,
term_start_date,
total_scheduled_instance_hours
FROM aws.ec2.scheduled_instances
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND ScheduledInstanceId = '{{ ScheduledInstanceId }}'
AND SlotStartTimeRange = '{{ SlotStartTimeRange }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="purchase_scheduled_instances"
    values={[
        { label: 'purchase_scheduled_instances', value: 'purchase_scheduled_instances' },
        { label: 'run_scheduled_instances', value: 'run_scheduled_instances' }
    ]}
>
<TabItem value="purchase_scheduled_instances">

You can no longer purchase Scheduled Instances. Purchases the Scheduled Instances with the specified schedule. Scheduled Instances enable you to purchase Amazon EC2 compute capacity by the hour for a one-year term. Before you can purchase a Scheduled Instance, you must call DescribeScheduledInstanceAvailability to check for available schedules and obtain a purchase token. After you purchase a Scheduled Instance, you must call RunScheduledInstances during each scheduled time period. After you purchase a Scheduled Instance, you can't cancel, modify, or resell your purchase.

```sql
EXEC aws.ec2.scheduled_instances.purchase_scheduled_instances 
@PurchaseRequest='{{ PurchaseRequest }}' --required, 
@region='{{ region }}' --required, 
@ClientToken='{{ ClientToken }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="run_scheduled_instances">

Launches the specified Scheduled Instances. Before you can launch a Scheduled Instance, you must purchase it and obtain an identifier using PurchaseScheduledInstances. You must launch a Scheduled Instance during its scheduled time period. You can't stop or reboot a Scheduled Instance, but you can terminate it as needed. If you terminate a Scheduled Instance before the current scheduled time period ends, you can launch it again after a few minutes.

```sql
EXEC aws.ec2.scheduled_instances.run_scheduled_instances 
@LaunchSpecification='{{ LaunchSpecification }}' --required, 
@ScheduledInstanceId='{{ ScheduledInstanceId }}' --required, 
@region='{{ region }}' --required, 
@ClientToken='{{ ClientToken }}', 
@DryRun={{ DryRun }}, 
@InstanceCount='{{ InstanceCount }}'
;
```
</TabItem>
</Tabs>
