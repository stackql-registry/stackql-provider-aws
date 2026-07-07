--- 
title: capacity_reservation_fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_reservation_fleets
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

Creates, updates, deletes, gets or lists a <code>capacity_reservation_fleets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_reservation_fleets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.capacity_reservation_fleets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_capacity_reservation_fleets"
    values={[
        { label: 'describe_capacity_reservation_fleets', value: 'describe_capacity_reservation_fleets' }
    ]}
>
<TabItem value="describe_capacity_reservation_fleets">

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
    <td><CopyableCode code="AllocationStrategy" /></td>
    <td><code>string</code></td>
    <td>The strategy used by the Capacity Reservation Fleet to determine which of the specified instance types to use. For more information, see For more information, see Allocation strategy in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="CapacityReservationFleetArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Capacity Reservation Fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="CapacityReservationFleetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Reservation Fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string</code></td>
    <td>The date and time at which the Capacity Reservation Fleet was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EndDate" /></td>
    <td><code>string</code></td>
    <td>The date and time at which the Capacity Reservation Fleet expires.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceMatchCriteria" /></td>
    <td><code>string</code></td>
    <td>Indicates the type of instance launches that the Capacity Reservation Fleet accepts. All Capacity Reservations in the Fleet inherit this instance matching criteria. Currently, Capacity Reservation Fleets support open instance matching criteria only. This means that instances that have matching attributes (instance type, platform, and Availability Zone) run in the Capacity Reservations automatically. Instances do not need to explicitly target a Capacity Reservation Fleet to use its reserved capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceTypeSpecifications" /></td>
    <td><code>string</code></td>
    <td>Information about the instance types for which to reserve the capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the Capacity Reservation Fleet. Possible states include: submitted - The Capacity Reservation Fleet request has been submitted and Amazon Elastic Compute Cloud is preparing to create the Capacity Reservations. modifying - The Capacity Reservation Fleet is being modified. The Fleet remains in this state until the modification is complete. active - The Capacity Reservation Fleet has fulfilled its total target capacity and it is attempting to maintain this capacity. The Fleet remains in this state until it is modified or deleted. partially_fulfilled - The Capacity Reservation Fleet has partially fulfilled its total target capacity. There is insufficient Amazon EC2 to fulfill the total target capacity. The Fleet is attempting to asynchronously fulfill its total target capacity. expiring - The Capacity Reservation Fleet has reach its end date and it is in the process of expiring. One or more of its Capacity reservations might still be active. expired - The Capacity Reservation Fleet has reach its end date. The Fleet and its Capacity Reservations are expired. The Fleet can't create new Capacity Reservations. cancelling - The Capacity Reservation Fleet is in the process of being cancelled. One or more of its Capacity reservations might still be active. cancelled - The Capacity Reservation Fleet has been manually cancelled. The Fleet and its Capacity Reservations are cancelled and the Fleet can't create new Capacity Reservations. failed - The Capacity Reservation Fleet failed to reserve capacity for the specified instance types.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the Capacity Reservation Fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="Tenancy" /></td>
    <td><code>string</code></td>
    <td>The tenancy of the Capacity Reservation Fleet. Tenancies include: default - The Capacity Reservation Fleet is created on hardware that is shared with other Amazon Web Services accounts. dedicated - The Capacity Reservation Fleet is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalFulfilledCapacity" /></td>
    <td><code>number</code></td>
    <td>The capacity units that have been fulfilled.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalTargetCapacity" /></td>
    <td><code>integer</code></td>
    <td>The total number of capacity units for which the Capacity Reservation Fleet reserves capacity. For more information, see Total target capacity in the Amazon EC2 User Guide.</td>
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
    <td><a href="#describe_capacity_reservation_fleets"><CopyableCode code="describe_capacity_reservation_fleets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CapacityReservationFleetId"><code>CapacityReservationFleetId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more Capacity Reservation Fleets.</td>
</tr>
<tr>
    <td><a href="#create_capacity_reservation_fleet"><CopyableCode code="create_capacity_reservation_fleet" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-InstanceTypeSpecification"><code>InstanceTypeSpecification</code></a>, <a href="#parameter-TotalTargetCapacity"><code>TotalTargetCapacity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AllocationStrategy"><code>AllocationStrategy</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-Tenancy"><code>Tenancy</code></a>, <a href="#parameter-EndDate"><code>EndDate</code></a>, <a href="#parameter-InstanceMatchCriteria"><code>InstanceMatchCriteria</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a Capacity Reservation Fleet. For more information, see Create a Capacity Reservation Fleet in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_capacity_reservation_fleet"><CopyableCode code="modify_capacity_reservation_fleet" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-CapacityReservationFleetId"><code>CapacityReservationFleetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TotalTargetCapacity"><code>TotalTargetCapacity</code></a>, <a href="#parameter-EndDate"><code>EndDate</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-RemoveEndDate"><code>RemoveEndDate</code></a></td>
    <td>Modifies a Capacity Reservation Fleet. When you modify the total target capacity of a Capacity Reservation Fleet, the Fleet automatically creates new Capacity Reservations, or modifies or cancels existing Capacity Reservations in the Fleet to meet the new total target capacity. When you modify the end date for the Fleet, the end dates for all of the individual Capacity Reservations in the Fleet are updated accordingly.</td>
</tr>
<tr>
    <td><a href="#cancel_capacity_reservation_fleets"><CopyableCode code="cancel_capacity_reservation_fleets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-CapacityReservationFleetId"><code>CapacityReservationFleetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Cancels one or more Capacity Reservation Fleets. When you cancel a Capacity Reservation Fleet, the following happens: The Capacity Reservation Fleet's status changes to cancelled. The individual Capacity Reservations in the Fleet are cancelled. Instances running in the Capacity Reservations at the time of cancelling the Fleet continue to run in shared capacity. The Fleet stops creating new Capacity Reservations.</td>
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
<tr id="parameter-CapacityReservationFleetId">
    <td><CopyableCode code="CapacityReservationFleetId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Capacity Reservation Fleets to cancel.</td>
</tr>
<tr id="parameter-InstanceTypeSpecification">
    <td><CopyableCode code="InstanceTypeSpecification" /></td>
    <td><code>array</code></td>
    <td>Information about the instance types for which to reserve the capacity.</td>
</tr>
<tr id="parameter-TotalTargetCapacity">
    <td><CopyableCode code="TotalTargetCapacity" /></td>
    <td><code>integer</code></td>
    <td>The total number of capacity units to be reserved by the Capacity Reservation Fleet. This value, together with the instance type weights that you assign to each instance type used by the Fleet determine the number of instances for which the Fleet reserves capacity. Both values are based on units that make sense for your workload. For more information, see Total target capacity in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AllocationStrategy">
    <td><CopyableCode code="AllocationStrategy" /></td>
    <td><code>string</code></td>
    <td>The strategy used by the Capacity Reservation Fleet to determine which of the specified instance types to use. Currently, only the prioritized allocation strategy is supported. For more information, see Allocation strategy in the Amazon EC2 User Guide. Valid values: prioritized</td>
</tr>
<tr id="parameter-CapacityReservationFleetId">
    <td><CopyableCode code="CapacityReservationFleetId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Capacity Reservation Fleets to describe.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensure Idempotency.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EndDate">
    <td><CopyableCode code="EndDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the Capacity Reservation Fleet expires. When the Capacity Reservation Fleet expires, its state changes to expired and all of the Capacity Reservations in the Fleet expire. The Capacity Reservation Fleet expires within an hour after the specified time. For example, if you specify 5/31/2019, 13:30:55, the Capacity Reservation Fleet is guaranteed to expire between 13:30:55 and 14:30:55 on 5/31/2019. You can't specify EndDate and RemoveEndDate in the same request.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. state - The state of the Fleet (submitted | modifying | active | partially_fulfilled | expiring | expired | cancelling | cancelled | failed). instance-match-criteria - The instance matching criteria for the Fleet. Only open is supported. tenancy - The tenancy of the Fleet (default | dedicated). allocation-strategy - The allocation strategy used by the Fleet. Only prioritized is supported.</td>
</tr>
<tr id="parameter-InstanceMatchCriteria">
    <td><CopyableCode code="InstanceMatchCriteria" /></td>
    <td><code>string</code></td>
    <td>Indicates the type of instance launches that the Capacity Reservation Fleet accepts. All Capacity Reservations in the Fleet inherit this instance matching criteria. Currently, Capacity Reservation Fleets support open instance matching criteria only. This means that instances that have matching attributes (instance type, platform, and Availability Zone) run in the Capacity Reservations automatically. Instances do not need to explicitly target a Capacity Reservation Fleet to use its reserved capacity.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
</tr>
<tr id="parameter-RemoveEndDate">
    <td><CopyableCode code="RemoveEndDate" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to remove the end date from the Capacity Reservation Fleet. If you remove the end date, the Capacity Reservation Fleet does not expire and it remains active until you explicitly cancel it using the CancelCapacityReservationFleet action. You can't specify RemoveEndDate and EndDate in the same request.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the Capacity Reservation Fleet. The tags are automatically assigned to the Capacity Reservations in the Fleet.</td>
</tr>
<tr id="parameter-Tenancy">
    <td><CopyableCode code="Tenancy" /></td>
    <td><code>string</code></td>
    <td>Indicates the tenancy of the Capacity Reservation Fleet. All Capacity Reservations in the Fleet inherit this tenancy. The Capacity Reservation Fleet can have one of the following tenancy settings: default - The Capacity Reservation Fleet is created on hardware that is shared with other Amazon Web Services accounts. dedicated - The Capacity Reservations are created on single-tenant hardware that is dedicated to a single Amazon Web Services account.</td>
</tr>
<tr id="parameter-TotalTargetCapacity">
    <td><CopyableCode code="TotalTargetCapacity" /></td>
    <td><code>integer</code></td>
    <td>The total number of capacity units to be reserved by the Capacity Reservation Fleet. This value, together with the instance type weights that you assign to each instance type used by the Fleet determine the number of instances for which the Fleet reserves capacity. Both values are based on units that make sense for your workload. For more information, see Total target capacity in the Amazon EC2 User Guide.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_capacity_reservation_fleets"
    values={[
        { label: 'describe_capacity_reservation_fleets', value: 'describe_capacity_reservation_fleets' }
    ]}
>
<TabItem value="describe_capacity_reservation_fleets">

Describes one or more Capacity Reservation Fleets.

```sql
SELECT
AllocationStrategy,
CapacityReservationFleetArn,
CapacityReservationFleetId,
CreateTime,
EndDate,
InstanceMatchCriteria,
InstanceTypeSpecifications,
State,
Tags,
Tenancy,
TotalFulfilledCapacity,
TotalTargetCapacity
FROM aws.ec2.capacity_reservation_fleets
WHERE region = '{{ region }}' -- required
AND CapacityReservationFleetId = '{{ CapacityReservationFleetId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_capacity_reservation_fleet"
    values={[
        { label: 'create_capacity_reservation_fleet', value: 'create_capacity_reservation_fleet' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_capacity_reservation_fleet">

Creates a Capacity Reservation Fleet. For more information, see Create a Capacity Reservation Fleet in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.capacity_reservation_fleets (
InstanceTypeSpecification,
TotalTargetCapacity,
region,
AllocationStrategy,
ClientToken,
Tenancy,
EndDate,
InstanceMatchCriteria,
TagSpecification,
DryRun
)
SELECT 
'{{ InstanceTypeSpecification }}',
'{{ TotalTargetCapacity }}',
'{{ region }}',
'{{ AllocationStrategy }}',
'{{ ClientToken }}',
'{{ Tenancy }}',
'{{ EndDate }}',
'{{ InstanceMatchCriteria }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
AllocationStrategy,
CapacityReservationFleetId,
CreateTime,
EndDate,
FleetCapacityReservations,
InstanceMatchCriteria,
State,
Tags,
Tenancy,
TotalFulfilledCapacity,
TotalTargetCapacity
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: capacity_reservation_fleets
  props:
    - name: InstanceTypeSpecification
      value: "{{ InstanceTypeSpecification }}"
      description: Required parameter for the capacity_reservation_fleets resource.
    - name: TotalTargetCapacity
      value: {{ TotalTargetCapacity }}
      description: Required parameter for the capacity_reservation_fleets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the capacity_reservation_fleets resource.
    - name: AllocationStrategy
      value: "{{ AllocationStrategy }}"
      description: The strategy used by the Capacity Reservation Fleet to determine which of the specified instance types to use. Currently, only the prioritized allocation strategy is supported. For more information, see Allocation strategy in the Amazon EC2 User Guide. Valid values: prioritized
      description: The strategy used by the Capacity Reservation Fleet to determine which of the specified instance types to use. Currently, only the prioritized allocation strategy is supported. For more information, see Allocation strategy in the Amazon EC2 User Guide. Valid values: prioritized
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensure Idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensure Idempotency.
    - name: Tenancy
      value: "{{ Tenancy }}"
      description: Indicates the tenancy of the Capacity Reservation Fleet. All Capacity Reservations in the Fleet inherit this tenancy. The Capacity Reservation Fleet can have one of the following tenancy settings: default - The Capacity Reservation Fleet is created on hardware that is shared with other Amazon Web Services accounts. dedicated - The Capacity Reservations are created on single-tenant hardware that is dedicated to a single Amazon Web Services account.
      description: Indicates the tenancy of the Capacity Reservation Fleet. All Capacity Reservations in the Fleet inherit this tenancy. The Capacity Reservation Fleet can have one of the following tenancy settings: default - The Capacity Reservation Fleet is created on hardware that is shared with other Amazon Web Services accounts. dedicated - The Capacity Reservations are created on single-tenant hardware that is dedicated to a single Amazon Web Services account.
    - name: EndDate
      value: "{{ EndDate }}"
      description: The date and time at which the Capacity Reservation Fleet expires. When the Capacity Reservation Fleet expires, its state changes to expired and all of the Capacity Reservations in the Fleet expire. The Capacity Reservation Fleet expires within an hour after the specified time. For example, if you specify 5/31/2019, 13:30:55, the Capacity Reservation Fleet is guaranteed to expire between 13:30:55 and 14:30:55 on 5/31/2019.
      description: The date and time at which the Capacity Reservation Fleet expires. When the Capacity Reservation Fleet expires, its state changes to expired and all of the Capacity Reservations in the Fleet expire. The Capacity Reservation Fleet expires within an hour after the specified time. For example, if you specify 5/31/2019, 13:30:55, the Capacity Reservation Fleet is guaranteed to expire between 13:30:55 and 14:30:55 on 5/31/2019.
    - name: InstanceMatchCriteria
      value: "{{ InstanceMatchCriteria }}"
      description: Indicates the type of instance launches that the Capacity Reservation Fleet accepts. All Capacity Reservations in the Fleet inherit this instance matching criteria. Currently, Capacity Reservation Fleets support open instance matching criteria only. This means that instances that have matching attributes (instance type, platform, and Availability Zone) run in the Capacity Reservations automatically. Instances do not need to explicitly target a Capacity Reservation Fleet to use its reserved capacity.
      description: Indicates the type of instance launches that the Capacity Reservation Fleet accepts. All Capacity Reservations in the Fleet inherit this instance matching criteria. Currently, Capacity Reservation Fleets support open instance matching criteria only. This means that instances that have matching attributes (instance type, platform, and Availability Zone) run in the Capacity Reservations automatically. Instances do not need to explicitly target a Capacity Reservation Fleet to use its reserved capacity.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the Capacity Reservation Fleet. The tags are automatically assigned to the Capacity Reservations in the Fleet.
      description: The tags to assign to the Capacity Reservation Fleet. The tags are automatically assigned to the Capacity Reservations in the Fleet.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_capacity_reservation_fleet"
    values={[
        { label: 'modify_capacity_reservation_fleet', value: 'modify_capacity_reservation_fleet' }
    ]}
>
<TabItem value="modify_capacity_reservation_fleet">

Modifies a Capacity Reservation Fleet. When you modify the total target capacity of a Capacity Reservation Fleet, the Fleet automatically creates new Capacity Reservations, or modifies or cancels existing Capacity Reservations in the Fleet to meet the new total target capacity. When you modify the end date for the Fleet, the end dates for all of the individual Capacity Reservations in the Fleet are updated accordingly.

```sql
UPDATE aws.ec2.capacity_reservation_fleets
SET 
-- No updatable properties
WHERE 
CapacityReservationFleetId = '{{ CapacityReservationFleetId }}' --required
AND region = '{{ region }}' --required
AND TotalTargetCapacity = '{{ TotalTargetCapacity}}'
AND EndDate = '{{ EndDate}}'
AND DryRun = {{ DryRun}}
AND RemoveEndDate = {{ RemoveEndDate}}
RETURNING
Return;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_capacity_reservation_fleets"
    values={[
        { label: 'cancel_capacity_reservation_fleets', value: 'cancel_capacity_reservation_fleets' }
    ]}
>
<TabItem value="cancel_capacity_reservation_fleets">

Cancels one or more Capacity Reservation Fleets. When you cancel a Capacity Reservation Fleet, the following happens: The Capacity Reservation Fleet's status changes to cancelled. The individual Capacity Reservations in the Fleet are cancelled. Instances running in the Capacity Reservations at the time of cancelling the Fleet continue to run in shared capacity. The Fleet stops creating new Capacity Reservations.

```sql
EXEC aws.ec2.capacity_reservation_fleets.cancel_capacity_reservation_fleets 
@CapacityReservationFleetId='{{ CapacityReservationFleetId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
