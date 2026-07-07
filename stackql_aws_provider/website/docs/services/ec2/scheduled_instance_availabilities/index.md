--- 
title: scheduled_instance_availabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_instance_availabilities
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

Creates, updates, deletes, gets or lists a <code>scheduled_instance_availabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduled_instance_availabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.scheduled_instance_availabilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scheduled_instance_availability"
    values={[
        { label: 'describe_scheduled_instance_availability', value: 'describe_scheduled_instance_availability' }
    ]}
>
<TabItem value="describe_scheduled_instance_availability">

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
    <td><CopyableCode code="AvailableInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of available instances.</td>
</tr>
<tr>
    <td><CopyableCode code="FirstSlotStartTime" /></td>
    <td><code>string</code></td>
    <td>The time period for the first schedule to start.</td>
</tr>
<tr>
    <td><CopyableCode code="HourlyPrice" /></td>
    <td><code>string</code></td>
    <td>The hourly price for a single instance.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The instance type. You can specify one of the C3, C4, M4, or R3 instance types.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxTermDurationInDays" /></td>
    <td><code>integer</code></td>
    <td>The maximum term. The only possible value is 365 days.</td>
</tr>
<tr>
    <td><CopyableCode code="MinTermDurationInDays" /></td>
    <td><code>integer</code></td>
    <td>The minimum term. The only possible value is 365 days.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkPlatform" /></td>
    <td><code>string</code></td>
    <td>The network platform.</td>
</tr>
<tr>
    <td><CopyableCode code="Platform" /></td>
    <td><code>string</code></td>
    <td>The platform (Linux/UNIX or Windows).</td>
</tr>
<tr>
    <td><CopyableCode code="PurchaseToken" /></td>
    <td><code>string</code></td>
    <td>The purchase token. This token expires in two hours.</td>
</tr>
<tr>
    <td><CopyableCode code="Recurrence" /></td>
    <td><code>string</code></td>
    <td>The schedule recurrence.</td>
</tr>
<tr>
    <td><CopyableCode code="SlotDurationInHours" /></td>
    <td><code>integer</code></td>
    <td>The number of hours in the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalScheduledInstanceHours" /></td>
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
    <td><a href="#describe_scheduled_instance_availability"><CopyableCode code="describe_scheduled_instance_availability" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-FirstSlotStartTimeRange"><code>FirstSlotStartTimeRange</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-MaxSlotDurationInHours"><code>MaxSlotDurationInHours</code></a>, <a href="#parameter-MinSlotDurationInHours"><code>MinSlotDurationInHours</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Recurrence"><code>Recurrence</code></a></td>
    <td>Finds available schedules that meet the specified criteria. You can search for an available schedule no more than 3 months in advance. You must meet the minimum required duration of 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours. After you find a schedule that meets your needs, call PurchaseScheduledInstances to purchase Scheduled Instances with that schedule.</td>
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
<tr id="parameter-FirstSlotStartTimeRange">
    <td><CopyableCode code="FirstSlotStartTimeRange" /></td>
    <td><code>object</code></td>
    <td>The time period for the first schedule to start.</td>
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
    <td>The filters. availability-zone - The Availability Zone (for example, us-west-2a). instance-type - The instance type (for example, c4.large). platform - The platform (Linux/UNIX or Windows).</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. This value can be between 5 and 300. The default value is 300. To retrieve the remaining results, make another call with the returned NextToken value.</td>
</tr>
<tr id="parameter-MaxSlotDurationInHours">
    <td><CopyableCode code="MaxSlotDurationInHours" /></td>
    <td><code>integer</code></td>
    <td>The maximum available duration, in hours. This value must be greater than MinSlotDurationInHours and less than 1,720.</td>
</tr>
<tr id="parameter-MinSlotDurationInHours">
    <td><CopyableCode code="MinSlotDurationInHours" /></td>
    <td><code>integer</code></td>
    <td>The minimum available duration, in hours. The minimum required duration is 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results.</td>
</tr>
<tr id="parameter-Recurrence">
    <td><CopyableCode code="Recurrence" /></td>
    <td><code>object</code></td>
    <td>The schedule recurrence.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_scheduled_instance_availability"
    values={[
        { label: 'describe_scheduled_instance_availability', value: 'describe_scheduled_instance_availability' }
    ]}
>
<TabItem value="describe_scheduled_instance_availability">

Finds available schedules that meet the specified criteria. You can search for an available schedule no more than 3 months in advance. You must meet the minimum required duration of 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours. After you find a schedule that meets your needs, call PurchaseScheduledInstances to purchase Scheduled Instances with that schedule.

```sql
SELECT
AvailabilityZone,
AvailableInstanceCount,
FirstSlotStartTime,
HourlyPrice,
InstanceType,
MaxTermDurationInDays,
MinTermDurationInDays,
NetworkPlatform,
Platform,
PurchaseToken,
Recurrence,
SlotDurationInHours,
TotalScheduledInstanceHours
FROM aws.ec2.scheduled_instance_availabilities
WHERE FirstSlotStartTimeRange = '{{ FirstSlotStartTimeRange }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND MaxSlotDurationInHours = '{{ MaxSlotDurationInHours }}'
AND MinSlotDurationInHours = '{{ MinSlotDurationInHours }}'
AND NextToken = '{{ NextToken }}'
AND Recurrence = '{{ Recurrence }}'
;
```
</TabItem>
</Tabs>
